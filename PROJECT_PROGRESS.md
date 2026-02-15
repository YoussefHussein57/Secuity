# WebProject - Cybersecurity Company Website

## Reference Website
**[GuidePoint Security](https://www.guidepointsecurity.com/)** - We are building a similar website to this, using our own color variables and design tokens already defined in the SCSS system.

---

## Tech Stack
- **Framework:** React 19 + Vite 7
- **Styling:** Bootstrap 5.3 + SCSS (custom design system)
- **Routing:** React Router v7
- **Animations:** Intersection Observer + react-countup
- **Icons:** Bootstrap Icons
- **Fonts:** Inter (body), Exo 2 (headings)
- **Colors:** Dark Indigo (#0f0f27), Blue (#2563EB), Indigo (#19186e), Dark (#08081a)

---

## Overall Progress

| Area                  | Status         | Progress |
|-----------------------|----------------|----------|
| Project Setup         | DONE           | 100%     |
| Design System (SCSS)  | DONE           | 100%     |
| Reusable Components   | DONE           | 100%     |
| Layout (Navbar+Footer)| DONE           | 100%     |
| Home Page             | DONE           | 100%     |
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
| Real Assets/Images    | NOT STARTED    | 0%       |
| Backend Integration   | NOT STARTED    | 0%       |
| SEO & Meta Tags       | NOT STARTED    | 0%       |
| Testing               | NOT STARTED    | 0%       |
| Deployment            | NOT STARTED    | 0%       |

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
- [ ] Client/partner logos (6 on Home page)
- [ ] Leadership team photos (4 on Company page)
- [ ] Award logos (6 on Company page)
- [ ] Resource thumbnails (6 on Resources page)
- [ ] Service icons (if using custom SVGs)
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
- [ ] Choose hosting (Vercel, Netlify, AWS, etc.)
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
| `SectionHeader` | `title, subtitle, center` |
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
