# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cybersecurity company website replicating [GuidePoint Security](https://www.guidepointsecurity.com/) — structure, layout, and content are scraped/modeled from the live GuidePoint site. No login, no admin panel — core purpose is presenting security services, capturing leads via contact/incident forms, and publishing resources. This repo is the **frontend only**. Backend (Express + MongoDB) planned at `D:\Freelance\Project1\api`.

**Reference site:** When building new pages or components, refer to the corresponding GuidePoint page for layout, content structure, and visual design. The goal is close visual and structural parity.

Project progress and roadmap tracked in `D:\Freelance\Project1\PROGRESS.md`.

## Commands

```bash
npm run dev       # Start Vite dev server (HMR)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint
npm run style:audit       # Visual style audit (requires dev server running)
npm run style:audit:home  # Audit homepage at localhost:3000
npm run style:audit:hero  # Audit .hero section at localhost:3000
```

## Architecture

### Stack
- React 19 + Vite 7 (SWC plugin for fast refresh)
- React Router v7 (client-side routing via BrowserRouter)
- Bootstrap 5 + custom SCSS design system
- bootstrap-icons for iconography
- react-countup for animated statistics
- Playwright available (used by style audit tooling)

### Routing (App.jsx)
All routes wrapped in `MainLayout` (Navbar + Outlet + Footer). Key patterns:
- **Static pages:** `/services`, `/company`, `/contact`, `/resources`, etc.
- **Dynamic detail pages:** `/services/:slug`, `/technologies/:slug`, `/government/:slug`, `/customer-success/:slug` — each resolves slug against its data file
- **Company sub-pages:** `/company/leadership`, `/company/why-us`, `/company/careers`, `/company/customers`, `/company/vendor-partners`, `/company/grit`, `/company/gpsu`, `/company/gps-financial`
- **Resource redirects:** `/resources/blog`, `/resources/webinars`, etc. → `Navigate` to `/resources?type=...` with query params
- **Catch-all** `/*` renders `NotFound.jsx`

### Component Organization
- **`src/components/common/`** — Stateful shared components (Navbar with mega dropdowns + scroll detection, Footer, ScrollToTop)
- **`src/components/sections/`** — Reusable presentational blocks (Hero, AnimatedSection, GradientCard, StatsBanner, ServiceTabs, TierCompare, Certifications, Outcomes, TrustedAdvisor, AdditionalResources, BeInformed, SplitSection, etc.)
- **`src/pages/`** — Page components that compose section components with page-specific data
- **`src/layouts/MainLayout.jsx`** — Single layout wrapper for all routes

### Data Layer
All static data files live in `src/data/`:
- `services.js` — Service objects keyed by slug. Fields: title, icon, tagline, heroLabel, heroHighlight, heroCta, heroImage, description, stats[], useCases{}, splits[], tabsSection, tierSection, outcomesSection, outcomes[], testimonial, statsBanner
- `technologies.js` — Technology partner data keyed by slug
- `government.js` — Government solutions data keyed by slug
- `customers.js` — Customer success stories
- `leadership.js` — Leadership team data
- `grit.js`, `gpsu.js` — Program-specific data

Currently all static; backend API endpoints planned to replace these.

### Service Detail Page Template (ServiceDetail.jsx)
Data-driven template — all services render the same component with conditional sections:
1. Hero (icon, title, tagline, CTA)
2. Stats Banner (conditional)
3. Use Cases (conditional — GradientCard grid)
4. Split Sections (alternating text/image, with optional checklists)
5. Service Tabs (conditional)
6. Tier Compare (conditional)
7. Certifications
8. Outcomes
9. Trusted Advisor + Testimonial
10. Additional Resources
11. Be Informed CTA

To add a new service: add an entry to `src/data/services.js` with the appropriate slug key. The route `/services/:slug` handles it automatically. Same pattern applies for technologies, government, and customer success detail pages.

### Scroll Animation System
- `src/hooks/useScrollAnimation.js` — IntersectionObserver hook returning `[ref, isVisible]`
- `AnimatedSection` wrapper component applies CSS animation classes on intersection
- Animation presets: `animate-on-scroll`, `stagger-children`, `fade-in-left`, `fade-in-right`, `scale-in`
- Defined in `src/scss/components/_animations.scss`

### SCSS Architecture
```
src/scss/
  abstracts/    _variables.scss, _mixins.scss
  components/   _navbar, _hero, _cards, _buttons, _footer, _sections, _animations, _filters
  layouts/      _grid.scss
  pages/        per-page stylesheets (_home, _services, _company, _resources, etc.)
  main.scss     Master import file
```

**Design tokens:** Primary `#0f0f27`, Accent `#19186e`, Gradient `#4b4fff` → `#00ccff`. Fonts: Inter (body), Exo 2 (headings).

**Key mixins:** `section-padding`, `hero-overlay($opacity)`, `hover-lift`.

**Pattern for new pages:** Create `src/scss/pages/_pagename.scss`, import it in `main.scss`.

## Development Rules

1. **Reuse existing components first.** Before creating anything new, check `src/components/sections/` and existing pages for a similar section or component. If one exists, reuse it — do not duplicate.
2. **Prefer Bootstrap classes over custom CSS/SCSS.** Use Bootstrap 5 utility classes (`d-flex`, `gap-3`, `text-center`, `py-5`, etc.) whenever possible. Only write custom SCSS when Bootstrap cannot achieve the design.

## Two Primary CTAs
- "Talk to an Expert" — contact form (Nodemailer + MongoDB on backend)
- "Report an Incident" — emergency form with urgent email alert

## Deployment Plan
- Frontend: Vercel (auto-deploy from GitHub)
- Backend: Render or Railway
- Database: MongoDB Atlas (M0 free)
- Images: Cloudinary free tier

## Environment Variables (Frontend)
```
VITE_API_URL=https://your-api.render.com
VITE_RECAPTCHA_SITE_KEY=your_key
VITE_GA4_ID=G-XXXXXXXX
```

## Vite Config Notes
- SCSS preprocessor configured to silence deprecation warnings (import, global-builtin, color-functions, if-function)
- ESLint allows unused vars matching `^[A-Z_]` pattern (for components/constants)
- ESLint flat config in `eslint.config.js` (not `.eslintrc`)
