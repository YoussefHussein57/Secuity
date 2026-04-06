#!/usr/bin/env node
/**
 * scrape-category.js
 * Scrapes a GuidePoint Security service category page and outputs
 * a ready-to-paste entry for serviceCategories.js
 *
 * Usage:
 *   node scripts/scrape-category.js <url> <slug>
 *
 * Example:
 *   node scripts/scrape-category.js https://www.guidepointsecurity.com/services/artificial-intelligence/ artificial-intelligence
 *
 * Output:
 *   Prints the JS object to stdout. Redirect or copy-paste into serviceCategories.js
 *
 * ─── Fields extracted ──────────────────────────────────────────────────────
 *  Hero       iconImage, heroBgImage, heroTitle, heroSubtitle,
 *             heroCta, heroCtaLink, heroSecondaryCta, heroSecondaryCtaLink
 *  Stats      statsLabel, statsTitle, statsIntro, stats[]
 *  Practice   practiceLabel, practiceTitleHighlight, practiceTitle,
 *             practiceDescription[], practiceVideo{thumbnail,link},
 *             commitmentLabel, commitmentSubtitle, commitmentItems[]
 *  Services   servicesLabel, servicesTitle, servicesTitleHighlight,
 *             servicesSubtitle, strategicTabDesc, tacticalTabDesc, managedTabDesc,
 *             strategicServices[], tacticalServices[], managedServices[], gpvueCard
 *  Outcomes   outcomesLabel, outcomesTitle, outcomesTitleHighlight,
 *             outcomesSubtitle, outcomes[]
 *  Testimonial quote, author, role, company, companyLogo, personImage
 */

import { chromium } from 'playwright';

const url  = process.argv[2];
const slug = process.argv[3];

if (!url || !slug) {
  console.error('Usage: node scripts/scrape-category.js <url> <slug>');
  console.error('Example: node scripts/scrape-category.js https://www.guidepointsecurity.com/services/artificial-intelligence/ artificial-intelligence');
  process.exit(1);
}

// ─── JS serialiser (outputs readable JS, not JSON) ───────────────────────────
function jsStringify(val, indent = 2) {
  if (val === null || val === undefined) return 'null';
  if (typeof val === 'string')           return JSON.stringify(val);
  if (typeof val === 'boolean' || typeof val === 'number') return String(val);
  if (Array.isArray(val)) {
    if (!val.length) return '[]';
    const pad   = ' '.repeat(indent + 2);
    const items = val.map((v) => pad + jsStringify(v, indent + 2));
    return `[\n${items.join(',\n')},\n${' '.repeat(indent)}]`;
  }
  if (typeof val === 'object') {
    const entries = Object.entries(val).filter(([, v]) => v !== null && v !== undefined && v !== '');
    if (!entries.length) return '{}';
    const pad   = ' '.repeat(indent + 2);
    const lines = entries.map(([k, v]) => `${pad}${k}: ${jsStringify(v, indent + 2)}`);
    return `{\n${lines.join(',\n')},\n${' '.repeat(indent)}}`;
  }
  return JSON.stringify(val);
}

// ─── Deep-clean: remove nulls / empty strings / empty arrays ─────────────────
function deepClean(obj) {
  if (Array.isArray(obj)) return obj.map(deepClean).filter(Boolean);
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([, v]) => v !== null && v !== undefined && v !== '' && !(Array.isArray(v) && !v.length))
        .map(([k, v]) => [k, deepClean(v)])
    );
  }
  return obj;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
const browser = await chromium.launch({ headless: true });
const page    = await browser.newPage();

// Larger viewport so Elementor renders desktop layout
await page.setViewportSize({ width: 1440, height: 900 });

console.error(`\nLoading: ${url}`);
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });

// Scroll full page to trigger lazy-loaded images + Elementor animations
console.error('Scrolling to trigger lazy loading...');
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let total = 0;
    const step = 400;
    const id = setInterval(() => {
      window.scrollBy(0, step);
      total += step;
      if (total >= document.body.scrollHeight) {
        clearInterval(id);
        window.scrollTo(0, 0);
        resolve();
      }
    }, 120);
  });
});
await page.waitForTimeout(3000); // wait for lazy images to load

// Click all Elementor tab buttons so their panels render into the DOM
console.error('Activating all tab panels...');
await page.evaluate(async () => {
  const tabBtns = Array.from(document.querySelectorAll(
    '.elementor-tab-title, [class*="e-n-tab-title"], button[data-tab]'
  ));
  for (const btn of tabBtns) {
    btn.click();
    await new Promise(r => setTimeout(r, 400));
  }
});
await page.waitForTimeout(1500);

const raw = await page.evaluate(() => {
  /* ── Helpers ────────────────────────────────────────────────────── */
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const txt = (el) => (el?.textContent || '').replace(/\s+/g, ' ').trim();
  const isUpper = (s) => s === s.toUpperCase() && s.length > 6 && s.length < 100;

  // Get real image src — handles lazy-loaded images (data-src, data-lazy-src)
  function imgSrc(el) {
    if (!el) return '';
    return el.src ||
           el.getAttribute('data-src') ||
           el.getAttribute('data-lazy-src') ||
           el.getAttribute('data-original') || '';
  }

  // Filter out blank SVG placeholders used by lazy loaders
  function isRealImg(src) {
    return src && !src.startsWith('data:image/svg') && src.length > 10;
  }

  function bgImg(el) {
    const style = el?.getAttribute('style') || '';
    const m = style.match(/background-image\s*:\s*url\(['"]?([^'")\s]+)['"]?\)/);
    return m ? m[1] : '';
  }

  function findLabelEl(...keywords) {
    return $$('p, span, div, h3, h4, h5, h6').find((el) => {
      const t = txt(el);
      return isUpper(t) && keywords.some((kw) => t.includes(kw.toUpperCase()));
    }) || null;
  }

  function closestSection(el) {
    let cur = el?.parentElement;
    for (let i = 0; i < 10 && cur; i++) {
      if (cur.tagName === 'SECTION' ||
          cur.className.includes('elementor-section') ||
          cur.className.includes('e-con')) return cur;
      cur = cur.parentElement;
    }
    return el?.closest('section') || el?.parentElement;
  }

  const R = {};

  /* ════════════════════════════════════════════════════════════════════
     1. HERO
  ════════════════════════════════════════════════════════════════════ */
  (() => {
    // Background image — first section with a bg-image style
    for (const el of $$('.elementor-section, section').slice(0, 6)) {
      const bg = bgImg(el) || bgImg($('[style*="background-image"]', el));
      if (bg) { R.heroBgImage = bg; break; }
    }

    // Icon image (small / thumb / icon in CDN path)
    const heroSec = $$('.elementor-section, section')[0];
    const iconImg = heroSec && $$('img', heroSec).find((img) => {
      const src = imgSrc(img);
      return isRealImg(src) && (
        src.includes('thumb') || src.includes('icon') || src.includes('logo') ||
        (img.getAttribute('width') && parseInt(img.getAttribute('width')) < 200)
      );
    });
    if (iconImg) R.iconImage = imgSrc(iconImg);

    // Title / subtitle
    const h1 = $('h1');
    if (h1) {
      R.heroTitle = txt(h1);
      const pEl = $('p', h1.closest('.elementor-widget-container') || h1.parentElement);
      if (pEl) R.heroSubtitle = txt(pEl);
    }

    // CTAs
    const heroSec2 = h1?.closest('section') || heroSec;
    const btns = heroSec2
      ? $$('a', heroSec2).filter((a) => {
          const t = txt(a).toLowerCase();
          return t.length > 2 && t.length < 60 && !t.includes('skip') && !t.includes('cookie');
        })
      : [];
    if (btns[0]) { R.heroCta = txt(btns[0]); R.heroCtaLink = btns[0].href; }
    if (btns[1]) { R.heroSecondaryCta = txt(btns[1]); R.heroSecondaryCtaLink = btns[1].href; }
  })();

  /* ════════════════════════════════════════════════════════════════════
     2. STATS
  ════════════════════════════════════════════════════════════════════ */
  (() => {
    const labelEl = findLabelEl('CHALLENGE', 'STATISTIC', 'PROBLEM', 'IMPACT');
    if (labelEl) {
      R.statsLabel = txt(labelEl);
      const sec = closestSection(labelEl);
      const h2  = $('h2', sec);
      if (h2) R.statsTitle = txt(h2);
      const paras = $$('p', sec).filter((p) => txt(p).length > 30 && txt(p) !== R.statsLabel);
      if (paras[0]) R.statsIntro = txt(paras[0]);
    }

    // Stat cards — look for elements containing % or large numbers
    const statCandidates = $$('.elementor-column, [class*="card"], .elementor-widget-wrap')
      .filter((el) => /\d+[%+]/.test(txt(el)) && txt(el).length < 400);

    const stats = [];
    const seen  = new Set();
    for (const card of statCandidates) {
      const t = txt(card);
      const m = t.match(/(\d[\d,]*[%+])/);
      if (!m || seen.has(m[1])) continue;
      seen.add(m[1]);

      const lines = t.split(/\n|\r|(?<=[.!?])\s+/)
        .map((l) => l.replace(/\s+/g, ' ').trim()).filter(Boolean);
      const vi = lines.findIndex((l) => /\d+[%+]/.test(l));
      const circleImg = $('img', card);
      const circleSrc = isRealImg(imgSrc(circleImg)) ? imgSrc(circleImg) : 'C1';

      stats.push({
        value:         lines[vi]       || m[1],
        label:         lines[vi + 1]   || '',
        circleImage:   circleSrc,
        sourceName:    lines[vi + 2]   || '',
        sourceContext: (lines[vi + 3]  || '').replace(/[()]/g, ''),
      });
      if (stats.length === 3) break;
    }
    if (stats.length) R.stats = stats;
  })();

  /* ════════════════════════════════════════════════════════════════════
     3. PRACTICE
  ════════════════════════════════════════════════════════════════════ */
  (() => {
    const labelEl = findLabelEl('PRACTICE', 'OVERVIEW', 'APPROACH');
    if (!labelEl) return;
    R.practiceLabel = txt(labelEl);

    const sec  = closestSection(labelEl);
    const h2   = $('h2', sec);
    if (h2) {
      const span = $('span, strong', h2);
      R.practiceTitleHighlight = span ? txt(span) : txt(h2).split(' ')[0];
      R.practiceTitle          = txt(h2);
    }

    R.practiceDescription = $$('p', sec)
      .map(txt)
      .filter((t) => t.length > 40 && t !== R.practiceLabel && t !== R.statsIntro)
      .slice(0, 4);

    // Video thumbnail
    const thumbImg  = $('img[src*="video"], img[src*="thumb"], img[src*="Headshot"]', sec);
    const videoLink = $$('a', sec).find((a) =>
      /youtube|youtu\.be|vimeo|wistia|video/.test(a.href)
    );
    if (thumbImg || videoLink) {
      R.practiceVideo = { thumbnail: thumbImg?.src || '', link: videoLink?.href || '#' };
    }

    // Commitment
    const commitLabelEl = $$('p, span, h3, h4', sec).find((el) => {
      const t = txt(el).toUpperCase();
      return t.includes('COMMITMENT') || t.includes('WE WILL') || t.includes('WE HELP');
    });
    if (commitLabelEl) {
      const t = txt(commitLabelEl);
      if (isUpper(t)) {
        R.commitmentLabel    = t;
        R.commitmentSubtitle = txt(commitLabelEl.nextElementSibling) || '';
      } else {
        R.commitmentSubtitle = t;
      }
    }

    R.commitmentItems = $$('li', sec)
      .map((li) => ({ text: txt(li), children: [] }))
      .filter((item) => item.text.length > 10);
  })();

  /* ════════════════════════════════════════════════════════════════════
     4. SERVICES TABS
  ════════════════════════════════════════════════════════════════════ */
  (() => {
    const labelEl = $$('p, span').find((el) => {
      const t = txt(el);
      return isUpper(t) && t.includes('SERVICE') && !t.includes('CHALLENGE') && t.length < 70;
    });
    if (!labelEl) return;
    R.servicesLabel = txt(labelEl);

    const sec = closestSection(labelEl);
    const h2  = $('h2', sec);
    if (h2) {
      const span = $('span, strong', h2);
      R.servicesTitleHighlight = span ? txt(span) : txt(h2).split(' ')[0];
      R.servicesTitle          = txt(h2);
    }
    const sub = h2?.nextElementSibling;
    if (sub?.tagName === 'P') R.servicesSubtitle = txt(sub);

    // Tab descriptions — look for paragraphs associated with tab panels
    const tabPanels = $$('[class*="tab-content"], [class*="tab-panel"], [role="tabpanel"]', sec);
    tabPanels.forEach((panel, i) => {
      const desc = $('p', panel);
      if (i === 0 && desc) R.strategicTabDesc = txt(desc);
      if (i === 1 && desc) R.tacticalTabDesc  = txt(desc);
      if (i === 2 && desc) R.managedTabDesc   = txt(desc);
    });

    // Service cards — each card has h3/h4 + p + optional link
    const cardEls = $$('.elementor-column, [class*="col"], [class*="card"]', sec)
      .filter((el) => {
        const h = $('h3, h4', el);
        const p = $('p', el);
        return h && p && txt(h).length > 5 && txt(p).length > 10 && txt(el).length < 500;
      });

    const strategic = [], tactical = [], managed = [];
    cardEls.forEach((card) => {
      const h    = $('h3, h4', card);
      const p    = $('p', card);
      const link = $$('a', card).find((a) => a.href.includes('/services/'));

      // GPVUE card detection
      if ($('img[src*="GPVUE"], img[src*="gpvue"], img[alt*="GPVUE"]', card)) {
        R.gpvueCard = {
          description: txt(p),
          link: link?.href || '/services/managed-security',
        };
        return;
      }

      const entry = {
        icon:        'bi-shield-check', // ← set manually
        title:       txt(h),
        description: txt(p),
        slug:        link ? link.href.split('/').filter(Boolean).pop() : null,
      };

      // Simple distribution: first 4 → strategic, next 5 → tactical, rest → managed
      if      (strategic.length < 5) strategic.push(entry);
      else if (tactical.length  < 6) tactical.push(entry);
      else                           managed.push(entry);
    });

    if (strategic.length) R.strategicServices = strategic;
    if (tactical.length)  R.tacticalServices  = tactical;
    if (managed.length)   R.managedServices   = managed;
  })();

  /* ════════════════════════════════════════════════════════════════════
     5. OUTCOMES
  ════════════════════════════════════════════════════════════════════ */
  (() => {
    const labelEl = findLabelEl('OUTCOME');
    if (!labelEl) return;
    R.outcomesLabel = txt(labelEl);

    const sec = closestSection(labelEl);
    const h2  = $('h2', sec);
    if (h2) {
      const span = $('span, strong', h2);
      R.outcomesTitleHighlight = span ? txt(span) : txt(h2).split(' ')[0];
      R.outcomesTitle          = txt(h2);
    }
    const sub = h2?.nextElementSibling;
    if (sub?.tagName === 'P') R.outcomesSubtitle = txt(sub);

    R.outcomes = $$('.elementor-column, [class*="col"]', sec)
      .filter((el) => {
        const h = $('h3, h4', el);
        const p = $('p', el);
        return h && p && txt(h).length > 3 && txt(p).length > 10;
      })
      .map((el) => ({
        title:       txt($('h3, h4', el)),
        description: txt($('p', el)),
      }))
      .filter((o) => o.title && o.description);
  })();

  /* ════════════════════════════════════════════════════════════════════
     6. TESTIMONIAL
  ════════════════════════════════════════════════════════════════════ */
  (() => {
    const quoteEl = $('blockquote') ||
      $$('p').find((p) => {
        const t = txt(p);
        return (t.startsWith('\u201c') || t.startsWith('"')) && t.length > 60;
      });
    if (!quoteEl) return;

    const sec = closestSection(quoteEl);
    const T   = {};

    T.quote = txt(quoteEl).replace(/^[\u201c"]+|[\u201d"]+$/g, '');

    const bold = $('strong, b, [class*="author"], [class*="name"]', sec);
    if (bold) T.author = txt(bold);

    // Role & company: paragraphs after the author name
    const allParas = $$('p, small', sec).map(txt).filter((t) => t.length > 1 && t !== T.quote);
    const authorIdx = allParas.findIndex((t) => t === T.author);
    if (authorIdx >= 0 && allParas[authorIdx + 1]) {
      const next = allParas[authorIdx + 1];
      if (next.includes(',')) {
        const parts = next.split(',');
        T.role    = parts[0].trim();
        T.company = parts.slice(1).join(',').trim();
      } else {
        T.role = next;
      }
    }
    if (allParas[authorIdx + 2] && !T.company) T.company = allParas[authorIdx + 2];

    const imgs = $$('img', sec).filter((img) => isRealImg(imgSrc(img)));
    const logoImg   = imgs.find((img) => {
      const src = imgSrc(img);
      return src.includes('logo') || (img.naturalWidth > 60 && img.naturalWidth < 350 && img.naturalHeight < 120);
    });
    const personImg = imgs.find((img) => {
      const src = imgSrc(img);
      return src.includes('headshot') || src.includes('portrait') || src.includes('Headshot') || src.includes('150x150');
    });
    if (logoImg)   T.companyLogo  = imgSrc(logoImg);
    if (personImg) T.personImage  = imgSrc(personImg);

    R.testimonial = T;
  })();

  return R;
});

await browser.close();

const finalData = deepClean({ slug, ...raw });

const output = `
  // ─────────────────────────────────────────────
  // ${slug}
  // Scraped from: ${url}
  //
  // TODO — manually verify/fix:
  //   • bi-* icon classes on all service cards
  //   • Service slugs (must match keys in services.js)
  //   • practiceTitleHighlight / outcomesTitleHighlight / servicesTitleHighlight
  //   • Commitment label vs subtitle split
  //   • gpvueCard link
  //   • stats circleImage (replace C1/C2/C3 as needed)
  // ─────────────────────────────────────────────
  '${slug}': ${jsStringify(finalData, 2)},
`;

console.log(output);

console.error('\n✓ Done. Fields that always need manual review:');
console.error('  icon classes  →  bi-arrow-repeat, bi-shield-check, etc.');
console.error('  service slugs →  must match keys in src/data/services.js');
console.error('  highlight     →  exact word shown in the dark box');
console.error('  gpvueCard     →  verify description + link');
