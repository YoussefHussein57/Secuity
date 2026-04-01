#!/usr/bin/env node
/**
 * Page Scraper — extracts content and images only (no styles)
 * Output is structured to match this project's data patterns:
 *   services.js, technologies.js, government.js
 *
 * Usage:
 *   node scripts/scrape.js <url>
 *   node scripts/scrape.js <url> output.json
 *   node scripts/scrape.js <url> --headful        (see the browser)
 *
 * Examples:
 *   node scripts/scrape.js https://www.guidepointsecurity.com/technologies/application-security
 *   node scripts/scrape.js https://www.guidepointsecurity.com/technologies/cloud-security cloud.json
 */

import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

// ─── CLI args ────────────────────────────────────────────────────────────────
const args = process.argv.slice(2).filter((a) => a !== '--headful');
const headful = process.argv.includes('--headful');
const url = args[0];
const outFile = args[1] || null;

if (!url) {
  console.error('Usage: node scripts/scrape.js <url> [output.json] [--headful]');
  process.exit(1);
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function shortPath(u) {
  try { return new URL(u).pathname; } catch { return u; }
}

// ─── Auto-scroll to trigger lazy loading ─────────────────────────────────────
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 80);
    });
  });
  await page.waitForTimeout(2000);
}

// ─── Main ─────────────────────────────────────────────────────────────────────
(async () => {
  console.log(`\n🔍  Scraping: ${url}\n`);

  const browser = await chromium.launch({ headless: !headful });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36',
  });

  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1500);

  // Scroll to trigger lazy-loaded images
  console.log('📜  Scrolling page to load lazy images...');
  await autoScroll(page);
  console.log('✅  Scroll complete\n');

  const result = await page.evaluate(() => {
    // ── Utilities ─────────────────────────────────────────────────────────────
    function clean(t = '') {
      return t.replace(/\s+/g, ' ').trim();
    }

    function txt(el, max = 500) {
      return clean(el ? el.textContent : '').slice(0, max);
    }

    function visible(el) {
      if (!el) return false;
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    }

    function bgImageUrl(el) {
      // Check the element itself AND all descendants for a CSS background-image
      const nodes = [el, ...el.querySelectorAll('*')];
      for (const node of nodes) {
        try {
          const bg = window.getComputedStyle(node).backgroundImage;
          if (bg && bg !== 'none') {
            const m = bg.match(/url\(["']?([^"')]+)["']?\)/);
            if (m && !m[1].startsWith('data:') && !m[1].includes('placeholder')) return m[1];
          }
        } catch (_) { /* skip */ }
      }
      return null;
    }

    function absoluteSrc(src) {
      if (!src) return null;
      try { return new URL(src, window.location.href).href; } catch { return src; }
    }

    // ── Meta ──────────────────────────────────────────────────────────────────
    const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || null;

    const meta = {
      title:       clean(document.title),
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') || null,
      ogImage,
      canonical:   document.querySelector('link[rel="canonical"]')?.href || null,
      h1:          clean(document.querySelector('h1')?.textContent || ''),
    };

    // ── Section detector ──────────────────────────────────────────────────────
    function classifySection(el) {
      const cls = (el.className || '').toLowerCase();

      if (el.querySelector('h1') || /hero|banner/i.test(cls)) return 'hero';

      const statMatches = (el.textContent || '').match(/\d+[%+kKmM]|\d{2,}/g);
      if (statMatches && statMatches.length >= 2 && /stat|metric|number|count/i.test(cls)) return 'stats';

      if (el.querySelector('[role="tab"], [class*="tab"]')) return 'tabs';

      const cards = el.querySelectorAll('[class*="card"],[class*="item"],[class*="feature"]');
      if (cards.length >= 3) return 'cards';

      if (/tier|pricing|plan|compar/i.test(cls)) return 'tier';

      const imgs = el.querySelectorAll('img');
      if (imgs.length >= 1 && el.querySelector('h2,h3,p')) return 'split';

      if (el.querySelector('blockquote') || /testimonial|quote/i.test(cls)) return 'testimonial';

      if (el.querySelector('form, input')) return 'form';

      return 'generic';
    }

    // ── Identify nav/footer ancestors to exclude ─────────────────────────────
    const navEl    = document.querySelector('nav, header, [class*="navbar"], [class*="nav-bar"], [class*="menubar"], [class*="menu-bar"], [class*="main-menu"], [id*="nav"], [id*="header"]');
    const footerEl = document.querySelector('footer, [class*="footer"], [id*="footer"]');

    function isInsideNavOrFooter(el) {
      let p = el;
      while (p && p !== document.body) {
        if ((navEl && navEl.contains(p)) || (footerEl && footerEl.contains(p))) return true;
        const cls = (p.className || '').toLowerCase();
        const tag = p.tagName.toLowerCase();
        if (tag === 'nav' || tag === 'header' || tag === 'footer') return true;
        if (/\bmenubar\b|\bmain-menu\b|\bmain-menubar\b|\bnav\b|\bnavbar\b|\bfooter\b/.test(cls)) return true;
        p = p.parentElement;
      }
      return false;
    }

    // ── Top-level section collection ──────────────────────────────────────────
    const allSections = [
      ...document.querySelectorAll(
        'section, [class*="section"], [class*="hero"], [class*="block"], main > div'
      ),
    ].filter((el) => {
      if (!visible(el)) return false;
      if ((el.textContent || '').trim().length < 30) return false;
      if (isInsideNavOrFooter(el)) return false;
      let p = el.parentElement;
      while (p && p !== document.body) {
        if (p.tagName === 'SECTION' || /section|hero|block/i.test(p.className || '')) return false;
        p = p.parentElement;
      }
      return true;
    });

    const topSections = allSections.filter((el, i) =>
      !allSections.some((other, j) => j !== i && other.contains(el))
    );

    // ── Per-section content extractors ────────────────────────────────────────
    function getHeadings(el) {
      return ['h1','h2','h3','h4'].flatMap((tag) =>
        [...el.querySelectorAll(tag)].filter(visible).map((h) => ({
          tag,
          text: clean(h.textContent),
        }))
      );
    }

    function getParagraphs(el) {
      return [...el.querySelectorAll('p')]
        .filter(visible)
        .map((p) => clean(p.textContent).slice(0, 500))
        .filter(Boolean)
        .slice(0, 8);
    }

    function getLists(el) {
      return [...el.querySelectorAll('ul,ol')]
        .filter(visible)
        .slice(0, 4)
        .map((ul) => ({
          type:  ul.tagName.toLowerCase(),
          items: [...ul.querySelectorAll('li')]
            .filter(visible)
            .map((li) => clean(li.textContent))
            .filter(Boolean),
        }))
        .filter((l) => l.items.length > 0);
    }

    function getImages(el) {
      const imgs = [...el.querySelectorAll('img')]
        .filter(visible)
        .map((img) => {
          // Try real src first, fall back through data attributes
          const src =
            (img.src && !img.src.startsWith('data:') ? img.src : null) ||
            img.getAttribute('data-src') ||
            img.getAttribute('data-lazy-src') ||
            img.getAttribute('data-lazy') ||
            img.getAttribute('data-original') ||
            null;
          return { src: absoluteSrc(src), alt: img.alt || '' };
        })
        .filter((i) => i.src && !i.src.startsWith('data:'));

      // Also pick up CSS background images on the section itself and children
      const bg = bgImageUrl(el);
      if (bg) imgs.unshift({ src: absoluteSrc(bg), alt: 'section background', isBg: true });

      return imgs.slice(0, 8);
    }

    function getCTAs(el) {
      return [...el.querySelectorAll('a[class*="btn"], button, a[href]')]
        .filter(visible)
        .map((a) => ({
          text: clean(a.textContent),
          href: a.href || a.getAttribute('href') || null,
        }))
        .filter((a) => a.text.length > 2 && a.text.length < 80)
        .slice(0, 5);
    }

    function getCards(el) {
      return [...el.querySelectorAll(
        '[class*="card"], [class*="item"], [class*="feature"], [class*="tile"], [class*="box"]'
      )]
        .filter(visible)
        .slice(0, 12)
        .map((card) => ({
          title:       txt(card.querySelector('h2,h3,h4,h5,[class*="title"]') || card, 120),
          description: txt(card.querySelector('p,[class*="desc"],[class*="body"]') || card, 300),
          image:       absoluteSrc(card.querySelector('img')?.src) || null,
          cta:         txt(card.querySelector('a,button'), 60) || null,
          ctaHref:     card.querySelector('a')?.href || null,
        }));
    }

    function getStats(el) {
      const candidates = [
        ...el.querySelectorAll('[class*="stat"],[class*="number"],[class*="count"],[class*="metric"]'),
      ].filter(visible);

      if (!candidates.length) return [];

      return candidates.slice(0, 8).map((s) => {
        const label =
          s.nextElementSibling ||
          s.parentElement?.querySelector('p,span:not(:first-child)');
        return {
          number: clean(s.textContent).slice(0, 20),
          label:  label ? clean(label.textContent).slice(0, 100) : '',
        };
      });
    }

    function getSplits(el) {
      return [...el.querySelectorAll('[class*="row"],[class*="split"]')]
        .filter(visible)
        .filter((r) => r.querySelector('img') && r.querySelector('h2,h3,p'))
        .slice(0, 4)
        .map((row) => {
          const img     = row.querySelector('img');
          const heading = row.querySelector('h2,h3,h4');
          const paras   = [...row.querySelectorAll('p')].filter(visible).map((p) => clean(p.textContent));
          const list    = row.querySelector('ul');
          const cta     = row.querySelector('a[class*="btn"],button');

          return {
            title:      heading ? clean(heading.textContent) : '',
            paragraphs: paras.slice(0, 4),
            checklist:  list ? [...list.querySelectorAll('li')].map((li) => clean(li.textContent)) : [],
            image:      absoluteSrc(img?.src) || null,
            imageAlt:   img?.alt || '',
            cta:        cta ? clean(cta.textContent) : null,
            ctaHref:    cta?.href || null,
          };
        });
    }

    function getTabs(el) {
      const tabBtns = [...el.querySelectorAll('[role="tab"],[class*="nav-link"],[class*="tab-btn"]')]
        .filter(visible)
        .map((t) => clean(t.textContent))
        .filter(Boolean);

      const tabPanels = [...el.querySelectorAll('[role="tabpanel"],[class*="tab-pane"],[class*="tab-content"] > *')]
        .filter(visible)
        .map((panel) => ({
          headings:   getHeadings(panel),
          paragraphs: getParagraphs(panel),
          cards:      getCards(panel),
          lists:      getLists(panel),
        }));

      return { tabLabels: tabBtns, tabPanels };
    }

    // ── Build sections output ─────────────────────────────────────────────────
    const sections = topSections.map((el, index) => {
      const type = classifySection(el);

      const section = {
        index,
        type,
        domClasses: el.className,
        headings:   getHeadings(el),
        paragraphs: getParagraphs(el),
        lists:      getLists(el),
        images:     getImages(el),
        ctas:       getCTAs(el),
      };

      if (type === 'cards' || type === 'generic') section.cards = getCards(el);
      if (type === 'stats')                        section.stats = getStats(el);
      if (type === 'split')                        section.splits = getSplits(el);
      if (type === 'tabs')                         section.tabs = getTabs(el);
      if (type === 'hero') {
        // Deep search for hero bg image, then fall back to og:image
        const heroBg = bgImageUrl(el);
        const heroImg = [...el.querySelectorAll('img')]
          .filter(visible)
          .find((img) => img.src && !img.src.startsWith('data:') && !img.src.includes('placeholder'));
        section.bgImage = heroBg
          ? absoluteSrc(heroBg)
          : heroImg
            ? absoluteSrc(heroImg.src)
            : ogImage;
      }

      return section;
    });

    // ── Data template — maps directly to technologies.js / services.js ────────
    const hero     = sections.find((s) => s.type === 'hero');
    const statsS   = sections.find((s) => s.type === 'stats');
    const cardsS   = sections.find((s) => s.type === 'cards');
    const splitS   = sections.filter((s) => s.type === 'split');
    const tabsS    = sections.find((s) => s.type === 'tabs');

    const h1Text   = meta.h1 || meta.title;
    const firstH2  = sections.flatMap((s) => s.headings).find((h) => h.tag === 'h2')?.text || '';

    // ── Hero label (small uppercase text above h1) ────────────────────────────
    function extractHeroLabel(heroEl) {
      if (!heroEl) return null;
      // Look for .section-header__label or small uppercase p before h1
      const labelEl = heroEl.querySelector('[class*="label"], [class*="eyebrow"], [class*="subheading"]');
      if (labelEl) return clean(labelEl.textContent);
      // Fall back: first short all-caps paragraph
      const paras = [...heroEl.querySelectorAll('p')].filter(visible);
      for (const p of paras) {
        const t = clean(p.textContent);
        if (t.length < 80 && t === t.toUpperCase() && t.length > 5) return t;
      }
      return null;
    }

    // ── Section label (small uppercase text above section heading) ────────────
    function extractSectionLabel(el) {
      if (!el) return null;
      const labelEl = el.querySelector('[class*="label"], [class*="eyebrow"], [class*="subheading"], [class*="section-header"]');
      if (labelEl) {
        const t = clean(labelEl.textContent);
        if (t.length < 100) return t;
      }
      return null;
    }

    // ── Hero CTA — primary button only (not nav links) ────────────────────────
    function extractHeroCta(heroEl) {
      if (!heroEl) return 'Talk to an Expert';
      // Prefer explicit btn/button elements; skip very long or nav-like text
      const btns = [...heroEl.querySelectorAll('a[class*="btn"], .btn, button')]
        .filter(visible)
        .map((b) => ({ text: clean(b.textContent), href: b.href || null }))
        .filter((b) => b.text.length > 2 && b.text.length < 60);
      return btns[0]?.text || hero?.ctas[0]?.text || 'Talk to an Expert';
    }

    // ── Testimonial extraction ─────────────────────────────────────────────────
    function extractTestimonial() {
      const testEl = document.querySelector(
        '[class*="testimonial"], [class*="quote"], [class*="review"], [class*="trusted"]'
      );
      if (!testEl) return { quote: '/* FILL IN */', author: '/* FILL IN */', company: '/* FILL IN */' };

      const quoteEl   = testEl.querySelector('blockquote, [class*="quote"], [class*="text"]');
      const authorEl  = testEl.querySelector('[class*="author"] p, [class*="name"], h3');
      const roleEl    = testEl.querySelector('[class*="author"] small, [class*="role"], [class*="title"]');
      const companyEl = testEl.querySelector('[class*="company"], [class*="org"]');
      const imgs      = [...testEl.querySelectorAll('img')].filter(visible);

      // Heuristic: person image is portrait-ish (square/tall), company logo is wide/short
      let personImage = null, companyLogo = null;
      for (const img of imgs) {
        const w = img.naturalWidth || img.width;
        const h = img.naturalHeight || img.height;
        if (!personImage && h >= w * 0.7) personImage = absoluteSrc(img.src);
        else if (!companyLogo) companyLogo = absoluteSrc(img.src);
      }

      return {
        quote:        quoteEl ? clean(quoteEl.textContent).replace(/^["\u201c]|["\u201d]$/g, '') : '/* FILL IN */',
        author:       authorEl ? clean(authorEl.textContent) : '/* FILL IN */',
        role:         roleEl   ? clean(roleEl.textContent)   : '/* FILL IN */',
        company:      companyEl ? clean(companyEl.textContent) : '/* FILL IN */',
        personImage:  personImage || '/* FILL IN */',
        companyLogo:  companyLogo || '/* FILL IN */',
      };
    }

    // ── Outcomes section (label + title + subtitle + cards) ───────────────────
    function extractOutcomesSection() {
      const outEl = document.querySelector(
        '[class*="outcomes"], [class*="results"], [class*="benefits"]'
      );
      if (!outEl) return null;

      const label    = extractSectionLabel(outEl);
      const titleEl  = outEl.querySelector('h2');
      const subtitle = [...outEl.querySelectorAll('p')].filter(visible).map((p) => clean(p.textContent)).find((t) => t.length > 40) || null;
      const cards    = [...outEl.querySelectorAll('h3, [class*="card"] h4, [class*="item"] h4')]
        .filter(visible)
        .map((h) => {
          const desc = h.nextElementSibling || h.parentElement?.querySelector('p');
          return {
            title:       clean(h.textContent),
            description: desc ? clean(desc.textContent) : '',
          };
        })
        .filter((c) => c.title.length > 3);

      return {
        section: {
          label:    label || '/* FILL IN */',
          title:    titleEl ? clean(titleEl.textContent) : '/* FILL IN */',
          titleHighlight: '/* FILL IN */',
          subtitle: subtitle || '',
        },
        cards,
      };
    }

    // ── Cert groups extraction ────────────────────────────────────────────────
    function extractCertGroups() {
      const certEl = document.querySelector(
        '[class*="certif"], [class*="certs"], [class*="badges"]'
      );
      if (!certEl) return null;

      // Try to find grouped cert rows
      const groups = [...certEl.querySelectorAll('[class*="group"], [class*="row"], .row')]
        .filter(visible)
        .filter((g) => g.querySelector('img'))
        .slice(0, 5)
        .map((g) => {
          const labelEl = g.querySelector('p, [class*="category"], [class*="label"]');
          const certs   = [...g.querySelectorAll('img')].filter(visible).map((img) => ({
            name:  img.alt || clean(img.title || ''),
            image: absoluteSrc(img.src),
          })).filter((c) => c.image);
          return { category: labelEl ? clean(labelEl.textContent) : '/* FILL IN */', certs };
        })
        .filter((g) => g.certs.length > 0);

      return groups.length > 0 ? groups : null;
    }

    const outcomesData = extractOutcomesSection();

    const heroEl = topSections.find((s) => classifySection(s) === 'hero');

    const dataTemplate = {
      slug:          window.location.pathname.replace(/\//g, '').replace(/-technologies$/, '').replace(/-solutions$/, ''),
      title:         h1Text,
      tagline:       firstH2,
      heroLabel:     extractHeroLabel(heroEl) || hero?.headings[0]?.text || h1Text,
      heroHighlight: '/* FILL IN: word(s) to highlight in the tagline */',
      heroCta:       extractHeroCta(heroEl),
      heroImage:     hero?.bgImage || ogImage || null,
      description:   hero?.paragraphs[0] || '',

      stats: (statsS?.stats || []).map((s) => ({ number: s.number, label: s.label })),

      split: splitS[0] ? {
        label:          extractSectionLabel(topSections.find((s) => s.type === 'split')) || '/* FILL IN */',
        title:          splitS[0].splits?.[0]?.title || splitS[0].headings[0]?.text || '',
        titleHighlight: '/* FILL IN */',
        paragraphs:     splitS[0].splits?.[0]?.paragraphs || splitS[0].paragraphs,
        image:          splitS[0].splits?.[0]?.image || splitS[0].images[0]?.src || null,
      } : null,

      expertise: {
        label:          '/* FILL IN */',
        title:          '/* FILL IN */',
        titleHighlight: 'Vendor-Agnostic',
        subtitle:       '/* FILL IN */',
        tabs: tabsS ? tabsS.tabs?.tabLabels?.map((name, i) => ({
          name,
          cards: (tabsS.tabs?.tabPanels[i]?.cards || []).map((c) => ({
            title:       c.title,
            description: c.description,
          })),
        })) : null,
        cards: !tabsS ? (cardsS?.cards || []).map((c) => ({
          title:       c.title,
          description: c.description,
        })) : null,
        commitment: {
          label: extractSectionLabel(topSections.find((s) => s.type === 'cards') || topSections.find((s) => s.type === 'split')) || '/* FILL IN */',
          title: '/* FILL IN */',
          items: cardsS?.lists?.[0]?.items || splitS[0]?.lists?.[0]?.items || [],
        },
      },

      outcomesSection: outcomesData?.section || null,
      outcomes: (outcomesData?.cards || (cardsS?.cards || []).slice(0, 4)).map((c) => ({
        title:       c.title,
        description: c.description,
      })),

      certGroups: extractCertGroups(),

      testimonial: extractTestimonial(),
    };

    // ── All images on the page (for download reference) ───────────────────────
    const allImages = [...document.querySelectorAll('img')]
      .filter(visible)
      .map((img) => ({
        src: absoluteSrc(
          (img.src && !img.src.startsWith('data:') ? img.src : null) ||
          img.getAttribute('data-src') ||
          img.getAttribute('data-lazy-src') ||
          img.getAttribute('data-lazy') ||
          img.getAttribute('data-original') ||
          null
        ),
        alt: img.alt || '',
        width:  img.naturalWidth || img.width,
        height: img.naturalHeight || img.height,
      }))
      .filter((i) => i.src && !i.src.startsWith('data:'))
      .reduce((acc, img) => {
        if (!acc.find((x) => x.src === img.src)) acc.push(img);
        return acc;
      }, []);

    return {
      scrapedAt:    new Date().toISOString(),
      url:          window.location.href,
      meta,
      sections,
      dataTemplate,
      allImages,
    };
  });

  await browser.close();

  // ── Output ────────────────────────────────────────────────────────────────
  const json = JSON.stringify(result, null, 2);

  if (outFile) {
    const outPath = resolve(process.cwd(), outFile);
    writeFileSync(outPath, json, 'utf8');
    console.log(`✅  Saved to: ${outPath}\n`);
  } else {
    const urlSlug = shortPath(url).replace(/\//g, '_').replace(/^_|_$/g, '') || 'scraped';
    const defaultOut = resolve(process.cwd(), `${urlSlug}.json`);
    writeFileSync(defaultOut, json, 'utf8');
    console.log(`✅  Saved to: ${defaultOut}\n`);
  }

  // ── Summary ───────────────────────────────────────────────────────────────
  console.log(`📄  Page:     ${result.meta.title}`);
  console.log(`🖼️   Hero BG:  ${result.dataTemplate.heroImage || '(none)'}`);
  console.log(`🖼️   Images:   ${result.allImages.length} unique`);
  console.log(`📐  Sections: ${result.sections.length}`);
  result.sections.forEach((s) => {
    const icons = { hero:'🖼️ ', stats:'📊', cards:'🃏', split:'↔️ ', tabs:'🗂️ ', tier:'⚖️ ', testimonial:'💬', form:'📝', generic:'📦' };
    const h = s.headings[0]?.text || '';
    console.log(`  ${icons[s.type] || '•'} [${s.index}] ${s.type.padEnd(12)} — ${h.slice(0, 60)}`);
  });
  console.log(`\n🔧  Suggested slug: "${result.dataTemplate.slug}"\n`);
})();
