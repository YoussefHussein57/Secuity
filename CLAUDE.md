# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A public-facing cybersecurity company website modeled after [GuidePoint Security](https://www.guidepointsecurity.com/). No login, no admin panel — core purpose is presenting 16 security services, capturing leads via contact/incident forms, and publishing resources. Full-stack MERN project; this repo is the **frontend only**. Backend (Express + MongoDB) planned at `D:\Freelance\Project1\api`.

Project progress and roadmap tracked in `D:\Freelance\Project1\PROGRESS.md`.

## Commands

```bash
npm run dev       # Start Vite dev server (HMR)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint
```

## Architecture

### Stack
- React 19 + Vite 7 (SWC plugin for fast refresh)
- React Router v7 (client-side routing via BrowserRouter)
- Bootstrap 5 + custom SCSS design system
- react-countup for animated statistics

### Routing
All routes wrapped in `MainLayout` (Navbar + Outlet + Footer). Key route pattern:
- Static pages: `/services`, `/company`, `/contact`, etc.
- Dynamic service pages: `/services/:slug` — renders `ServiceDetail.jsx` using data from `src/data/services.js`
- Catch-all `/*` renders `NotFound.jsx`

### Component Organization
- **`src/components/common/`** — Stateful shared components (Navbar with mega dropdowns + scroll detection, Footer, ScrollToTop)
- **`src/components/sections/`** — Presentational building blocks (Hero, AnimatedSection, FeatureCard, ServiceCard, SectionHeader, etc.)
- **`src/pages/`** — Page components that compose sections. Each page assembles section components with page-specific data.
- **`src/layouts/MainLayout.jsx`** — Single layout wrapper for all routes

### Data Layer
- `src/data/services.js` — 16 service objects keyed by slug. Each has: title, icon, tagline, description, stats[], overview, strategic[], tactical[], managed[], outcomes[], testimonial
- Currently static data; backend API (`/api/services/:slug`) planned to replace this

### Scroll Animation System
- `src/hooks/useScrollAnimation.js` — IntersectionObserver hook returning `[ref, isVisible]`
- `AnimatedSection` wrapper component applies CSS animation classes on intersection
- Animation presets: `animate-on-scroll`, `stagger-children`, `fade-in-left`, `fade-in-right`, `scale-in`
- Defined in `src/scss/components/_animations.scss`

### SCSS Architecture
```
src/scss/
  abstracts/    _variables.scss (colors, typography, spacing), _mixins.scss
  components/   _navbar, _hero, _cards, _buttons, _footer, _sections, _animations, _filters
  layouts/      _grid.scss
  pages/        _home, _services, _company, _resources
  main.scss     Master import file
```

**Design tokens:** Primary `#0f0f27`, Accent `#19186e`, Gradient `#4b4fff` to `#00ccff`. Fonts: Inter (body), Exo 2 (headings).

**Key mixins:** `section-padding` (consistent vertical spacing), `hero-overlay($opacity)` (gradient overlay), `hover-lift` (card hover effect).

### Service Detail Page Template
Each of the 16 services follows this layout:
1. Hero (icon, title, tagline, CTA)
2. Problem Stats (3 stat cards)
3. Overview (2-col text + video)
4. Service Tabs (Strategic / Tactical / Managed sub-services)
5. Outcomes (4 icon cards)
6. Why Us (certifications + stats)
7. Testimonial
8. Contact Form

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
- ESLint allows unused vars matching `[A-Z_]` pattern (for components/constants)
