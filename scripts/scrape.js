#!/usr/bin/env node
/**
 * Page Scraper — extracts typography, spacing, colors, layout, and content
 * Output is structured to match this project's component/data patterns:
 *   services.js, resourceDetails.js, technologies.js, government.js
 *
 * Usage:
 *   node scripts/scrape.js <url>
 *   node scripts/scrape.js <url> output.json
 *   node scripts/scrape.js <url> --headful        (see the browser)
 *
 * Examples:
 *   node scripts/scrape.js https://www.guidepointsecurity.com/services/penetration-testing
 *   node scripts/scrape.js https://www.guidepointsecurity.com/resources/blog/some-post blog.json
 */

import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

// ─── CLI args ───────────────────────────────────────────────────────────────
const args = process.argv.slice(2).filter((a) => a !== '--headful');
const headful = process.argv.includes('--headful');
const url = args[0];
const outFile = args[1] || null;

if (!url) {
  console.error('Usage: node scripts/scrape.js <url> [output.json] [--headful]');
  process.exit(1);
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function slug(text = '') {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function shortPath(u) {
  try { return new URL(u).pathname; } catch { return u; }
}

// ─── Main ────────────────────────────────────────────────────────────────────
(async () => {
  console.log(`\n🔍  Scraping: ${url}\n`);

  const browser = await chromium.launch({ headless: !headful });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36',
  });

  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  // Let lazy images / animations settle
  await page.waitForTimeout(1500);

  // ── Run extraction inside browser context ──────────────────────────────────
  const result = await page.evaluate(() => {
    // ── Utility: get computed styles as plain object ──────────────────────────
    function cs(el) {
      const s = window.getComputedStyle(el);
      return {
        fontFamily:      s.fontFamily,
        fontSize:        s.fontSize,
        fontWeight:      s.fontWeight,
        lineHeight:      s.lineHeight,
        letterSpacing:   s.letterSpacing,
        textTransform:   s.textTransform,
        color:           s.color,
        backgroundColor: s.backgroundColor,
        background:      s.background,
        paddingTop:      s.paddingTop,
        paddingRight:    s.paddingRight,
        paddingBottom:   s.paddingBottom,
        paddingLeft:     s.paddingLeft,
        marginTop:       s.marginTop,
        marginBottom:    s.marginBottom,
        display:         s.display,
        flexDirection:   s.flexDirection,
        gridTemplateColumns: s.gridTemplateColumns,
        maxWidth:        s.maxWidth,
        width:           s.width,
        borderRadius:    s.borderRadius,
        border:          s.border,
        boxShadow:       s.boxShadow,
        textAlign:       s.textAlign,
        gap:             s.gap,
      };
    }

    // ── Utility: clean text ────────────────────────────────────────────────
    function clean(t = '') {
      return t.replace(/\s+/g, ' ').trim();
    }

    // ── Utility: rgba → hex ───────────────────────────────────────────────
    function toHex(rgba) {
      const m = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (!m) return rgba;
      return '#' + [m[1], m[2], m[3]].map((n) => parseInt(n).toString(16).padStart(2, '0')).join('');
    }

    // ── Utility: element text (first 500 chars) ───────────────────────────
    function txt(el, max = 500) {
      return clean(el ? el.textContent : '').slice(0, max);
    }

    // ── Utility: check element visibility ────────────────────────────────
    function visible(el) {
      if (!el) return false;
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    }

    // ── Utility: extract inline-style background-image url ───────────────
    function bgImage(el) {
      const s = window.getComputedStyle(el);
      const bg = s.backgroundImage;
      if (bg && bg !== 'none') {
        const m = bg.match(/url\(["']?([^"')]+)["']?\)/);
        if (m) return m[1];
      }
      return null;
    }

    // ── 1. GLOBAL DESIGN TOKENS ────────────────────────────────────────────
    const body = document.body;
    const bodyStyles = cs(body);

    // Collect all distinct colors from prominent elements
    const colorSet = new Set();
    document.querySelectorAll('h1,h2,h3,a,button,[class*="btn"]').forEach((el) => {
      const s = window.getComputedStyle(el);
      [s.color, s.backgroundColor, s.borderColor].forEach((c) => {
        if (c && c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent') {
          colorSet.add(toHex(c));
        }
      });
    });

    // H1 styles
    const h1el = document.querySelector('h1');
    const h1Styles = h1el ? cs(h1el) : null;

    // H2 styles (first visible)
    const h2el = [...document.querySelectorAll('h2')].find(visible);
    const h2Styles = h2el ? cs(h2el) : null;

    // H3 styles
    const h3el = [...document.querySelectorAll('h3')].find(visible);
    const h3Styles = h3el ? cs(h3el) : null;

    // Body paragraph styles
    const pel = [...document.querySelectorAll('p')].find(visible);
    const pStyles = pel ? cs(pel) : null;

    // Container max-width
    const container = document.querySelector('.container, [class*="container"]');
    const containerStyles = container ? cs(container) : null;

    // ── 2. META ─────────────────────────────────────────────────────────────
    const metaDesc = document.querySelector('meta[name="description"]');
    const ogTitle  = document.querySelector('meta[property="og:title"]');
    const ogImg    = document.querySelector('meta[property="og:image"]');

    const meta = {
      title:       clean(document.title),
      description: metaDesc ? metaDesc.getAttribute('content') : null,
      ogTitle:     ogTitle  ? ogTitle.getAttribute('content')  : null,
      ogImage:     ogImg    ? ogImg.getAttribute('content')    : null,
      canonical:   document.querySelector('link[rel="canonical"]')?.href || null,
    };

    // ── 3. SECTION ANALYSIS ─────────────────────────────────────────────────
    // Identify meaningful page sections
    const sectionEls = [
      ...document.querySelectorAll(
        'section, [class*="section"], [class*="hero"], [class*="banner"], [class*="block"], main > div, article > div'
      ),
    ].filter((el) => {
      if (!visible(el)) return false;
      const text = el.textContent.trim();
      if (text.length < 30) return false;
      // Skip nested sections (only want top-level blocks)
      let parent = el.parentElement;
      while (parent && parent !== document.body) {
        if (
          parent.tagName === 'SECTION' ||
          (parent.className && /section|hero|banner|block/i.test(parent.className))
        ) return false;
        parent = parent.parentElement;
      }
      return true;
    });

    // Deduplicate by checking for ancestor/descendant relationships
    const topSections = sectionEls.filter((el, i) => {
      return !sectionEls.some((other, j) => j !== i && other.contains(el));
    });

    function classifySection(el) {
      const cls  = (el.className || '').toLowerCase();
      const text = txt(el, 200).toLowerCase();
      const html = el.innerHTML.toLowerCase().slice(0, 2000);

      // Hero: large background image + H1
      if (
        el.querySelector('h1') ||
        /hero|banner|jumbotron|header-section/i.test(cls) ||
        bgImage(el)
      ) return 'hero';

      // Stats Banner: contains big numbers/percentages
      const statMatches = text.match(/\d+[%+k]|\d{2,}[\s\S]{0,20}(breach|attack|hour|year|client|customer)/gi);
      if (statMatches && statMatches.length >= 2) return 'statsBanner';

      // Use Cases / Cards grid: multiple card-like children
      const cards = el.querySelectorAll('[class*="card"],[class*="item"],[class*="feature"],[class*="use-case"]');
      if (cards.length >= 3) return 'useCases';

      // Split Section: image + text side by side
      const imgs = el.querySelectorAll('img');
      const hasSplitLayout = html.includes('col-') || html.includes('flex');
      if (imgs.length >= 1 && hasSplitLayout && el.querySelector('h2,h3')) return 'splitSection';

      // Tabs: tab navigation
      if (el.querySelector('[role="tab"], [class*="tab"], nav[class*="nav"]')) return 'serviceTabs';

      // Tier Compare: comparison table or multiple columns with pricing/tier info
      if (
        /tier|pricing|plan|package|compar/i.test(cls) ||
        (el.querySelectorAll('h3,h4').length >= 2 && /tier|level|plan|package/i.test(text))
      ) return 'tierCompare';

      // Outcomes: grid of icon+title+description
      const withIcons = el.querySelectorAll('[class*="icon"],[class*="outcome"],svg,i[class*="bi"]');
      if (withIcons.length >= 3 && el.querySelector('h2,h3')) return 'outcomes';

      // CTA Section: single prominent CTA
      const btns = el.querySelectorAll('a[class*="btn"],button');
      if (btns.length >= 1 && el.querySelector('h2,h3') && !el.querySelector('img')) return 'ctaSection';

      // Testimonial / Quote
      if (/testimonial|quote|review/i.test(cls) || el.querySelector('blockquote')) return 'testimonial';

      // Resource / Blog listing
      if (/resource|blog|news|article|post/i.test(cls)) return 'resources';

      // Form section
      if (el.querySelector('form, input, select')) return 'formSection';

      return 'generic';
    }

    function extractHeadings(el) {
      return ['h1','h2','h3','h4'].flatMap((tag) =>
        [...el.querySelectorAll(tag)].filter(visible).map((h) => ({
          tag,
          text:  clean(h.textContent),
          styles: {
            fontFamily:   cs(h).fontFamily,
            fontSize:     cs(h).fontSize,
            fontWeight:   cs(h).fontWeight,
            lineHeight:   cs(h).lineHeight,
            color:        cs(h).color,
            textTransform:cs(h).textTransform,
            letterSpacing:cs(h).letterSpacing,
          },
        }))
      );
    }

    function extractParagraphs(el) {
      return [...el.querySelectorAll('p')].filter(visible).slice(0, 8).map((p) => ({
        text: clean(p.textContent).slice(0, 400),
        styles: {
          fontFamily: cs(p).fontFamily,
          fontSize:   cs(p).fontSize,
          fontWeight: cs(p).fontWeight,
          lineHeight: cs(p).lineHeight,
          color:      cs(p).color,
        },
      }));
    }

    function extractLists(el) {
      return [...el.querySelectorAll('ul,ol')].filter(visible).slice(0, 3).map((ul) => ({
        type: ul.tagName.toLowerCase(),
        items: [...ul.querySelectorAll('li')].filter(visible).map((li) => clean(li.textContent)).filter(Boolean),
        styles: {
          fontSize:   cs(ul.querySelector('li') || ul).fontSize,
          color:      cs(ul.querySelector('li') || ul).color,
          lineHeight: cs(ul.querySelector('li') || ul).lineHeight,
        },
      }));
    }

    function extractImages(el) {
      return [...el.querySelectorAll('img')].filter(visible).slice(0, 6).map((img) => ({
        src:    img.src || img.getAttribute('data-src') || img.getAttribute('data-lazy'),
        alt:    img.alt,
        width:  img.naturalWidth || img.width,
        height: img.naturalHeight || img.height,
        classes:img.className,
      }));
    }

    function extractCTAs(el) {
      return [...el.querySelectorAll('a[class*="btn"],button,a[href]')]
        .filter(visible)
        .filter((a) => {
          const t = clean(a.textContent);
          return t.length > 2 && t.length < 80;
        })
        .slice(0, 6)
        .map((a) => ({
          text:  clean(a.textContent),
          href:  a.href || a.getAttribute('href') || null,
          tag:   a.tagName.toLowerCase(),
          classes: a.className,
          styles: {
            backgroundColor: cs(a).backgroundColor,
            color:           cs(a).color,
            fontWeight:      cs(a).fontWeight,
            fontSize:        cs(a).fontSize,
            padding:         `${cs(a).paddingTop} ${cs(a).paddingRight} ${cs(a).paddingBottom} ${cs(a).paddingLeft}`,
            borderRadius:    cs(a).borderRadius,
            border:          cs(a).border,
          },
        }));
    }

    function extractCards(el) {
      const cardEls = [
        ...el.querySelectorAll('[class*="card"],[class*="item"],[class*="feature"],[class*="tile"],[class*="box"]'),
      ].filter(visible).slice(0, 12);

      return cardEls.map((card) => ({
        heading:    txt(card.querySelector('h2,h3,h4,h5,.title,[class*="title"]') || card, 120),
        body:       txt(card.querySelector('p,.description,[class*="desc"]') || card, 300),
        icon:       card.querySelector('i[class],svg,[class*="icon"]')?.className || null,
        image:      card.querySelector('img')?.src || null,
        cta:        txt(card.querySelector('a,button'), 60),
        ctaHref:    card.querySelector('a')?.href || null,
        styles: {
          backgroundColor: cs(card).backgroundColor,
          borderRadius:    cs(card).borderRadius,
          border:          cs(card).border,
          boxShadow:       cs(card).boxShadow,
          padding:         `${cs(card).paddingTop} ${cs(card).paddingRight} ${cs(card).paddingBottom} ${cs(card).paddingLeft}`,
        },
      }));
    }

    function extractStats(el) {
      // Look for big-number + label pairs
      const candidates = [
        ...el.querySelectorAll('[class*="stat"],[class*="number"],[class*="count"],[class*="metric"]'),
      ];
      if (!candidates.length) {
        // Fallback: find elements with big numbers
        candidates.push(
          ...[...el.querySelectorAll('*')].filter((e) => {
            const t = clean(e.textContent);
            return /^\d+[%+KkMm]?$|^\d+,\d+/.test(t) && t.length < 12 && visible(e);
          })
        );
      }
      return candidates.slice(0, 6).map((s) => {
        const label = s.nextElementSibling || s.parentElement?.querySelector('p,span:not(:first-child)');
        return {
          number: clean(s.textContent),
          label:  label ? clean(label.textContent) : '',
          styles: {
            fontSize:   cs(s).fontSize,
            fontWeight: cs(s).fontWeight,
            color:      cs(s).color,
          },
        };
      });
    }

    function extractSplitLayout(el) {
      // Find row/columns with image on one side, text on the other
      const rows = [...el.querySelectorAll('[class*="row"],[class*="split"],[class*="col"]')]
        .filter(visible)
        .filter((r) => r.querySelector('img') && r.querySelector('h2,h3,p'));

      return rows.slice(0, 4).map((row) => {
        const img     = row.querySelector('img');
        const heading = row.querySelector('h2,h3,h4');
        const paras   = [...row.querySelectorAll('p')].filter(visible).slice(0, 3);
        const list    = row.querySelector('ul');
        const cta     = row.querySelector('a[class*="btn"],button');

        return {
          title:          heading ? clean(heading.textContent) : '',
          paragraphs:     paras.map((p) => clean(p.textContent)),
          checklist:      list ? [...list.querySelectorAll('li')].map((li) => clean(li.textContent)) : [],
          image:          img?.src || null,
          imageAlt:       img?.alt || '',
          ctaText:        cta ? clean(cta.textContent) : null,
          ctaHref:        cta?.href || null,
          imagePosition:  img && heading ? (img.getBoundingClientRect().left < heading.getBoundingClientRect().left ? 'left' : 'right') : 'right',
          styles: {
            backgroundColor: cs(row).backgroundColor,
            padding:         `${cs(row).paddingTop} ${cs(row).paddingRight} ${cs(row).paddingBottom} ${cs(row).paddingLeft}`,
          },
        };
      });
    }

    function analyzeSection(el, index) {
      const type  = classifySection(el);
      const elCs  = cs(el);
      const bg    = bgImage(el);

      const base = {
        index,
        type,
        domClasses:    el.className,
        tagName:       el.tagName.toLowerCase(),
        styles: {
          backgroundColor: elCs.backgroundColor,
          background:      elCs.background,
          backgroundImage: bg,
          paddingTop:      elCs.paddingTop,
          paddingBottom:   elCs.paddingBottom,
          paddingLeft:     elCs.paddingLeft,
          paddingRight:    elCs.paddingRight,
          display:         elCs.display,
          flexDirection:   elCs.flexDirection,
          gridTemplateColumns: elCs.gridTemplateColumns,
        },
        headings:   extractHeadings(el),
        paragraphs: extractParagraphs(el),
        lists:      extractLists(el),
        images:     extractImages(el),
        ctas:       extractCTAs(el),
      };

      // Type-specific extras
      if (type === 'statsBanner')  base.stats       = extractStats(el);
      if (type === 'useCases')     base.cards        = extractCards(el);
      if (type === 'splitSection') base.splits       = extractSplitLayout(el);
      if (type === 'outcomes')     base.outcomeCards = extractCards(el);
      if (type === 'hero') {
        base.heroBackgroundImage = bg;
        base.overlay = !!el.querySelector('[class*="overlay"],[class*="mask"]');
      }

      // Component mapping to our project
      const componentMap = {
        hero:         'Hero (src/components/sections/Hero.jsx)',
        statsBanner:  'StatsBanner (src/components/sections/StatsBanner.jsx)',
        useCases:     'GradientCard grid — useCases{} in services.js',
        splitSection: 'SplitSection — splits[] in services.js',
        serviceTabs:  'ServiceTabs (src/components/sections/ServiceTabs.jsx)',
        tierCompare:  'TierCompare (src/components/sections/TierCompare.jsx)',
        outcomes:     'Outcomes — outcomes[] in services.js',
        ctaSection:   'BeInformed (src/components/sections/BeInformed.jsx)',
        testimonial:  'TrustedAdvisor + testimonial{} in services.js',
        resources:    'AdditionalResources (src/components/sections/AdditionalResources.jsx)',
        formSection:  'ResourceDetail form (src/pages/ResourceDetail.jsx)',
        generic:      'AnimatedSection wrapper — review manually',
      };
      base.componentMapping = componentMap[type] || 'generic';

      return base;
    }

    // ── 4. RUN SECTION ANALYSIS ──────────────────────────────────────────────
    const sections = topSections.map((el, i) => analyzeSection(el, i));

    // ── 5. TABS DEEP EXTRACTION ───────────────────────────────────────────────
    const tabSections = sections.filter((s) => s.type === 'serviceTabs');
    if (tabSections.length) {
      tabSections.forEach((s, si) => {
        const el = topSections[s.index];
        const tabs = [...el.querySelectorAll('[role="tab"],[class*="tab"][href],[class*="nav-link"]')]
          .filter(visible)
          .map((t) => clean(t.textContent));
        s.tabLabels = tabs;
      });
    }

    // ── 6. GENERATE DATA TEMPLATE ─────────────────────────────────────────────
    // Build a ready-to-use services.js / resourceDetails.js template
    const heroSection = sections.find((s) => s.type === 'hero');
    const statsSection = sections.find((s) => s.type === 'statsBanner');
    const useCasesSection = sections.find((s) => s.type === 'useCases');
    const splitSections = sections.filter((s) => s.type === 'splitSection');
    const outcomesSection = sections.find((s) => s.type === 'outcomes');
    const ctaSection = sections.find((s) => s.type === 'ctaSection');
    const testimonialSection = sections.find((s) => s.type === 'testimonial');

    const h1Text = clean(document.querySelector('h1')?.textContent || document.title);
    const firstH2 = [...document.querySelectorAll('h2')].find(visible);
    const firstH2Text = firstH2 ? clean(firstH2.textContent) : '';

    const dataTemplate = {
      // Key hint for services.js / resourceDetails.js
      _keyHint:   h1Text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      title:      h1Text,
      icon:       'bi-shield',  // pick from bootstrap-icons
      tagline:    firstH2Text || '',
      heroLabel:  heroSection?.headings[0]?.text || h1Text,
      heroHighlight: '',        // mark the word to highlight in the heading
      heroCta:    heroSection?.ctas[0]?.text || 'Talk to an Expert',
      heroImage:  heroSection?.heroBackgroundImage || heroSection?.images[0]?.src || '',
      description: heroSection?.paragraphs[0]?.text || '',
      stats: statsSection?.stats?.map((s) => ({ number: s.number, label: s.label })) || [],
      useCases: useCasesSection ? {
        label:    useCasesSection.headings[0]?.text || '',
        title:    useCasesSection.headings.find((h) => h.tag === 'h2')?.text || '',
        titleHighlight: '',
        subtitle: useCasesSection.paragraphs[0]?.text || '',
        items:    useCasesSection.lists[0]?.items || useCasesSection.cards?.map((c) => c.heading) || [],
      } : null,
      splits: splitSections.flatMap((s) => s.splits || []).map((sp) => ({
        label:    '',
        title:    sp.title,
        titleHighlight: '',
        paragraphs: sp.paragraphs,
        image:    sp.image || '/overview-icon.png',
        checklist: sp.checklist.length ? sp.checklist : undefined,
      })),
      outcomesSection: outcomesSection ? {
        label:    outcomesSection.headings[0]?.text || '',
        title:    outcomesSection.headings.find((h) => h.tag === 'h2')?.text || '',
        titleHighlight: '',
        subtitle: outcomesSection.paragraphs[0]?.text || '',
      } : null,
      outcomes: outcomesSection?.outcomeCards?.map((c) => ({
        iconImage: '/images/icons/placeholder.png',
        title:     c.heading,
        description: c.body,
      })) || [],
      testimonial: testimonialSection ? {
        quote:  testimonialSection.paragraphs[0]?.text || '',
        author: '',
        role:   '',
        company:'',
      } : null,
      statsBanner: ctaSection ? {
        label:    ctaSection.headings[0]?.text || '',
        title:    ctaSection.headings.find((h) => h.tag === 'h2')?.text || '',
        cta:      ctaSection.ctas[0]?.text || 'Talk to an Expert',
        ctaHref:  '/contact',
      } : null,
    };

    // ── 7. TYPOGRAPHY SUMMARY ────────────────────────────────────────────────
    const typography = {
      body: {
        fontFamily: bodyStyles.fontFamily,
        fontSize:   bodyStyles.fontSize,
        lineHeight: bodyStyles.lineHeight,
        color:      bodyStyles.color,
      },
      h1: h1Styles ? {
        fontFamily:   h1Styles.fontFamily,
        fontSize:     h1Styles.fontSize,
        fontWeight:   h1Styles.fontWeight,
        lineHeight:   h1Styles.lineHeight,
        letterSpacing:h1Styles.letterSpacing,
        textTransform:h1Styles.textTransform,
        color:        h1Styles.color,
      } : null,
      h2: h2Styles ? {
        fontFamily:   h2Styles.fontFamily,
        fontSize:     h2Styles.fontSize,
        fontWeight:   h2Styles.fontWeight,
        lineHeight:   h2Styles.lineHeight,
        color:        h2Styles.color,
      } : null,
      h3: h3Styles ? {
        fontFamily:   h3Styles.fontFamily,
        fontSize:     h3Styles.fontSize,
        fontWeight:   h3Styles.fontWeight,
        lineHeight:   h3Styles.lineHeight,
        color:        h3Styles.color,
      } : null,
      paragraph: pStyles ? {
        fontFamily: pStyles.fontFamily,
        fontSize:   pStyles.fontSize,
        lineHeight: pStyles.lineHeight,
        color:      pStyles.color,
      } : null,
    };

    // ── 8. COLOR PALETTE ─────────────────────────────────────────────────────
    const colorPalette = {
      uniqueColors: [...colorSet].slice(0, 30),
      bodyBackground:     toHex(bodyStyles.backgroundColor),
      bodyText:           toHex(bodyStyles.color),
    };

    // ── 9. SPACING SYSTEM ────────────────────────────────────────────────────
    const spacingSystem = {
      containerMaxWidth: containerStyles?.maxWidth || 'unknown',
      sectionPaddingExamples: sections.slice(0, 5).map((s) => ({
        type:          s.type,
        paddingTop:    s.styles.paddingTop,
        paddingBottom: s.styles.paddingBottom,
      })),
    };

    // ── FINAL RESULT ─────────────────────────────────────────────────────────
    return {
      scrapedAt:    new Date().toISOString(),
      url:          window.location.href,
      meta,
      designTokens: {
        typography,
        colors:   colorPalette,
        spacing:  spacingSystem,
      },
      sections,
      dataTemplate,
      _notes: {
        heroHighlight:  'Fill in the word(s) from the title to highlight with gradient',
        titleHighlight: 'Same — the word that gets the gradient underline/color treatment',
        icons:          'Replace bi-shield with appropriate bootstrap-icon from https://icons.getbootstrap.com',
        images:         'Replace placeholder image paths with actual project assets',
        checklist:      'Fields with undefined checklist mean no list items were found — remove the key',
      },
    };
  });

  await browser.close();

  // ── Output ─────────────────────────────────────────────────────────────────
  const json = JSON.stringify(result, null, 2);

  if (outFile) {
    const outPath = resolve(process.cwd(), outFile);
    writeFileSync(outPath, json, 'utf8');
    console.log(`✅  Saved to: ${outPath}\n`);
  } else {
    // Default: save next to script as <slug>.json
    const urlSlug = shortPath(url).replace(/\//g, '_').replace(/^_|_$/g, '') || 'scraped';
    const defaultOut = resolve(process.cwd(), `${urlSlug}.json`);
    writeFileSync(defaultOut, json, 'utf8');
    console.log(`✅  Saved to: ${defaultOut}\n`);
  }

  // Print summary
  console.log(`📄  Page: ${result.meta.title}`);
  console.log(`🎨  Colors found: ${result.designTokens.colors.uniqueColors.length}`);
  console.log(`📐  Sections found: ${result.sections.length}`);
  result.sections.forEach((s, i) => {
    const icon = {
      hero:         '🖼️ ',
      statsBanner:  '📊',
      useCases:     '🃏',
      splitSection: '↔️ ',
      serviceTabs:  '🗂️ ',
      tierCompare:  '⚖️ ',
      outcomes:     '✅',
      ctaSection:   '📣',
      testimonial:  '💬',
      resources:    '📰',
      formSection:  '📝',
      generic:      '📦',
    }[s.type] || '•';
    console.log(`  ${icon} [${i}] ${s.type.padEnd(14)} — ${(s.headings[0]?.text || '').slice(0, 60)}`);
  });
  console.log(`\n🔧  Data template key: "${result.dataTemplate._keyHint}"`);
  console.log(`📋  Ready to paste into src/data/services.js (or resourceDetails.js)\n`);
})();
