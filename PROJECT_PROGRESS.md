# WebProject - Cybersecurity Company Website

## Reference Website
**[GuidePoint Security](https://www.guidepointsecurity.com/)** - We are building a similar website to this, using our own color variables and design tokens already defined in the SCSS system.

---

## Tech Stack
- **Framework:** React 19 + Vite 7
- **Styling:** Bootstrap 5.3 + SCSS (custom design system)
- **Routing:** React Router v7
- **Animations:** Intersection Observer + react-countup + CSS keyframes
- **Icons:** Bootstrap Icons
- **Fonts:** Inter (body), Exo 2 (headings)
- **Colors:** Dark Primary (#0f0f27), Indigo (#19186e), Dark (#08081a), Gradient Start (#4b4fff), Gradient End (#00ccff)
- **Deployment:** Vercel — [Live Preview](https://secuity.vercel.app/)

---

## Overall Progress

| Area                  | Status         | Progress |
|-----------------------|----------------|----------|
| Project Setup         | DONE           | 100%     |
| Design System (SCSS)  | DONE (revised) | 100%     |
| Reusable Components   | DONE (enhanced)| 100%     |
| Layout (Navbar+Footer)| DONE           | 100%     |
| Home Page             | DONE (replicated from GuidePoint) | 100% |
| Company Page          | BUILT, UNROUTED| 90%      |
| Services Page         | BUILT, UNROUTED| 90%      |
| Contact Page          | BUILT, UNROUTED| 90%      |
| Resources Page        | BUILT, UNROUTED| 90%      |
| Routing (App.jsx)     | PARTIAL        | 20%      |
| Individual Service Pages | NOT STARTED | 0%       |
| Sub-pages (Blog, Careers, etc.)| NOT STARTED | 0%  |
| Technologies Page     | NOT STARTED    | 0%       |
| Government Page       | NOT STARTED    | 0%       |
| Report Incident Page  | NOT STARTED    | 0%       |
| Real Assets/Images    | IN PROGRESS    | 30%      |
| Backend Integration   | NOT STARTED    | 0%       |
| SEO & Meta Tags       | NOT STARTED    | 0%       |
| Testing               | NOT STARTED    | 0%       |
| Deployment            | DONE (Vercel)  | 100%     |

---

## Recent Session Updates

### Color System Overhaul
- Migrated all visible UI elements from `$accent` (#19186e — invisible on dark backgrounds) to `$gradient-start` (#4b4fff)
- Updated across: navbar, footer, cards, animations, hero, all section components
- Icons, hover states, borders, glows, and CTA buttons now use the blue-cyan gradient palette

### Home Page — Full Content Replication (GuidePoint Security)
All 8 sections on the Home page have been rebuilt to match GuidePoint Security's content and layout:

1. **Hero** — "Trusted Cybersecurity Expertise", single CTA ("Talk to an Expert"), dark gradient fade-left overlay on background image
2. **Why GuidePoint** — Particles background, label/eyebrow text, 3 feature cards (Highly-Trained, Deep Expertise, Vendor Agnostic), CTA button
3. **Services Grid** — 16 cybersecurity services in 6-column grid, transparent cards with hover border, cyan icons
4. **Managed Security** — Light section, text left (col-lg-5) + image right (col-lg-6), GPVUE program content, `justify-content-between`
5. **Trust, Stats & Testimonial** — Merged section (indigo), client logo row (6 SVGs), vertical stat-list with CountUp animation, featured testimonial image card with gradient overlay
6. **CTA Banner** — Dark section with particles, CSS-decorated gradient background (no photo), geometric radial shapes
7. **Resources** — Indigo section, 3 resource cards with "View All" category links
8. **Final CTA** — Dark section with particles, centered "Be Informed + Reduce Risk" text

### New & Enhanced Components
- **SectionHeader** — Added `label` (eyebrow text), `ctaText`, and `ctaLink` props
- **StatListItem** — Inline component with CountUp + useScrollAnimation for vertical stat display
- **SVG Client Logos** — Created 6 logos in `public/logos/`: premise-health, khovnanian, follett, intelsat, sisense, nuance
- **CTA Banner decorated variant** — Pure CSS gradient background with radial glows and geometric shapes

### SCSS Enhancements
- **Angled section dividers** — Rebuilt with `::before` clip-path using adjacent section colors (no white)
- **Hero fade overlay** — Left-to-right dark gradient via `::after` for text readability
- **Services grid** — 6-column CSS Grid with responsive breakpoints in `_home.scss`
- **Card variants** — New `.stat-list`, `.testimonial-featured`, `.cta-banner--decorated`, dark resource card styles
- **Section variants** — `.section--accent` support added alongside existing dark/indigo/light

### Deployment
- Deployed to Vercel: [secuity.vercel.app](https://secuity.vercel.app/)
- More progress to come: API integrations planned

---

## Phase 1: Core Routing & Pages (Priority: HIGH)

### 1.1 Add Missing Routes to App.jsx
- [ ] Import Services, Company, Contact, Resources pages
- [ ] Add `/services` route
- [ ] Add `/company` route
- [ ] Add `/contact` route
- [ ] Add `/resources` route
- [ ] Fix scroll-to-top on route change (needs useLocation)
- [ ] Add 404 / Not Found page instead of catch-all to Home

### 1.2 Missing Top-Level Pages (Referenced in Navbar)
- [ ] `/technologies` - Technologies page
- [ ] `/government` - Government page
- [ ] `/report-incident` - Report Incident page

---

## Phase 2: Sub-Pages (Priority: MEDIUM)

### 2.1 Individual Service Detail Pages (16 services in Navbar)
- [ ] `/services/application-security`
- [ ] `/services/ai-security`
- [ ] `/services/cloud-security`
- [ ] `/services/data-security`
- [ ] `/services/email-security`
- [ ] `/services/endpoint-security`
- [ ] `/services/grc`
- [ ] `/services/iam`
- [ ] `/services/incident-response`
- [ ] `/services/managed-security`
- [ ] `/services/network-security`
- [ ] `/services/ot-security`
- [ ] `/services/security-awareness`
- [ ] `/services/soc`
- [ ] `/services/staff-augmentation`
- [ ] `/services/vulnerability-management`

### 2.2 Company Sub-Pages
- [ ] `/company/leadership` - Leadership team detail page
- [ ] `/company/careers` - Careers page

### 2.3 Resources Sub-Pages
- [ ] `/resources/blog` - Blog listing page
- [ ] `/resources/events` - Events page
- [ ] `/resources/webinars` - Webinars page

---

## Phase 3: Assets & Content (Priority: MEDIUM)

### 3.1 Replace Placeholder Images
- [ ] Logo (`/logo-white.svg`) - actual company logo
- [ ] Hero background images for each page
- [x] Client/partner logos (6 SVGs created in `public/logos/`)
- [ ] Leadership team photos (4 on Company page)
- [ ] Award logos (6 on Company page)
- [ ] Resource thumbnails (6 on Resources page)
- [x] Service icons (Bootstrap Icons mapped to 16 services)
- [ ] Favicon and app icons

### 3.2 Replace Placeholder Content
- [ ] Company name (currently generic "Cyber")
- [ ] Real testimonials and quotes
- [ ] Actual phone/email/address
- [ ] Real social media links (Footer: LinkedIn, Twitter, YouTube, GitHub)
- [ ] Real resource content (whitepapers, webinars, etc.)
- [ ] Real team member bios

---

## Phase 4: Functionality (Priority: MEDIUM-HIGH)

### 4.1 Contact Form Integration
- [ ] Choose backend (API endpoint, Formspree, EmailJS, etc.)
- [ ] Add form validation (required fields, email format, etc.)
- [ ] Add submission handler with loading/success/error states
- [ ] Add CAPTCHA or honeypot spam protection

### 4.2 Newsletter Signup (Footer)
- [ ] Choose email service (Mailchimp, SendGrid, etc.)
- [ ] Add form validation
- [ ] Add submission handler

### 4.3 Resource Filtering (Resources Page)
- [ ] Connect filters to actual data source (API or static JSON)
- [ ] Add search/text filter
- [ ] Add pagination or infinite scroll
- [ ] Add sort options (date, relevance)

---

## Phase 5: Polish & UX (Priority: LOW-MEDIUM)

### 5.1 Navigation Enhancements
- [ ] Active state highlighting for current page in navbar
- [ ] Breadcrumb component for sub-pages
- [ ] Mobile menu close on link click
- [ ] Mega-menu for Services dropdown (16 items is a lot)

### 5.2 Animations & Transitions
- [ ] Page transition animations between routes
- [ ] Loading skeleton screens
- [ ] Smooth anchor scroll for in-page links

### 5.3 Accessibility
- [ ] Keyboard navigation testing
- [ ] Screen reader testing (ARIA labels)
- [ ] Color contrast verification
- [ ] Focus management on route changes
- [ ] Skip-to-content link

### 5.4 Performance
- [ ] Image optimization (WebP, lazy loading)
- [ ] Code splitting per route (React.lazy + Suspense)
- [ ] Bundle size analysis
- [ ] Lighthouse audit

---

## Phase 6: SEO & Meta (Priority: MEDIUM)

- [ ] Add react-helmet-async or similar
- [ ] Unique title/description per page
- [ ] Open Graph tags for social sharing
- [ ] Structured data (JSON-LD) for organization
- [ ] Sitemap generation
- [ ] robots.txt configuration
- [ ] Canonical URLs

---

## Phase 7: Testing (Priority: MEDIUM)

- [ ] Set up Vitest + React Testing Library
- [ ] Unit tests for hooks (useScrollAnimation)
- [ ] Component render tests
- [ ] Route navigation tests
- [ ] Form validation tests
- [ ] Accessibility tests (axe-core)

---

## Phase 8: Deployment (Priority: LOW)

- [ ] Environment variables setup (.env)
- [ ] Build optimization (vite.config.js)
- [x] Choose hosting — **Vercel** ([secuity.vercel.app](https://secuity.vercel.app/))
- [ ] CI/CD pipeline setup
- [ ] Domain & SSL configuration
- [ ] Analytics integration (GA4, etc.)

---

## Architecture Reference

```
src/
├── App.jsx                          # Router setup
├── main.jsx                         # Entry point
├── components/
│   ├── common/
│   │   ├── Navbar.jsx               # Fixed nav with dropdowns
│   │   └── Footer.jsx               # Dark footer with newsletter
│   └── sections/
│       ├── Hero.jsx                 # Reusable hero banner
│       ├── SectionHeader.jsx        # Section title + subtitle
│       ├── AnimatedSection.jsx      # Scroll-triggered wrapper
│       ├── FeatureCard.jsx          # Feature display card
│       ├── ServiceCard.jsx          # Service link card
│       ├── StatCard.jsx             # Animated counter card
│       ├── TestimonialCard.jsx      # Quote card
│       ├── ResourceCard.jsx         # Resource preview card
│       ├── LogoGrid.jsx             # Logo grid layout
│       ├── NetworkBackground.jsx    # Canvas particle animation
│       └── SplitSection.jsx         # Image + text layout
├── assets/
│   └── images/
│       ├── hero.jpeg                # Hero background
│       └── managed_Sec.jpeg         # Managed security section
├── hooks/
│   └── useScrollAnimation.js        # IntersectionObserver hook
├── layouts/
│   └── MainLayout.jsx               # Navbar + Outlet + Footer
├── pages/
│   ├── Home.jsx                     # 9 sections, fully built
│   ├── Company.jsx                  # About, stats, team, awards
│   ├── Services.jsx                 # 4 categories, 16 services
│   ├── Contact.jsx                  # Form + sidebar
│   └── Resources.jsx                # Filterable library
└── scss/
    ├── main.scss                    # Import orchestrator
    ├── abstracts/
    │   ├── _variables.scss          # Design tokens
    │   └── _mixins.scss             # Reusable mixins
    ├── components/                  # 8 component stylesheets
    ├── layouts/
    │   └── _grid.scss               # Grid layouts
    └── pages/                       # 4 page stylesheets
```

---

## Components Props Reference

| Component | Key Props |
|-----------|-----------|
| `Hero` | `title, highlightWord, subtitle, ctaText, ctaLink, secondaryCta{text,link}, bgImage, variant` |
| `SectionHeader` | `label, title, subtitle, center, ctaText, ctaLink` |
| `AnimatedSection` | `animation('fade-up'|'fade-left'|'fade-right'|'scale-in'), className` |
| `FeatureCard` | `icon, title, description` |
| `ServiceCard` | `icon, title, path` |
| `StatCard` | `number, label` |
| `TestimonialCard` | `quote, author, role, company` |
| `ResourceCard` | `image, badge, title, date, link, ctaText` |
| `LogoGrid` | `logos[]` |
| `SplitSection` | `image, title, description, ctaText, ctaLink, imageLeft, dark` |
| `NetworkBackground` | `variant, nodeCount, connectDist` |

---

## How to Use This File

1. **Check progress:** Review the checkboxes above to see what's done
2. **Pick a phase:** Work through phases in order (1 -> 2 -> 3...) or prioritize as needed
3. **Mark complete:** Change `- [ ]` to `- [x]` as you finish each task
4. **Ask Claude:** Say "continue with Phase X" or "implement [specific task]" to pick up where you left off
