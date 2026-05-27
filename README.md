# Stepworks Main Site

A Next.js rebuild of [stepworks.com](https://www.stepworks.com) — migrating away from a broken WordPress instance to a stable, performant Next.js 14 app. The site is a marketing and informational website for Stepworks Recovery Centers, a Kentucky-based addiction treatment organization with 6 locations.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui (all 55 components installed)
- **Language:** TypeScript
- **Font:** Geist (via next/font/google)
- **Icons:** lucide-react

## Project Structure

```
app/
├── layout.tsx              # Root layout, font, metadata
├── page.tsx                # Homepage
├── globals.css             # Global styles + CSS variables
├── services/
│   ├── page.tsx            # /services overview
│   └── [slug]/page.tsx     # /services/detox, /services/iop, etc.
├── locations/
│   ├── page.tsx            # /locations overview
│   └── [slug]/page.tsx     # /locations/bowling-green, etc.
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── blog/
    ├── page.tsx
    └── [slug]/page.tsx
components/
├── ui/                     # shadcn/ui primitives
├── Header.tsx
├── Footer.tsx
└── (page-level sections)
lib/
└── utils.ts                # cn() helper
hooks/
└── use-mobile.ts
```

## Pages

| Route | Description |
|---|---|
| `/` | Homepage |
| `/services` | Services overview |
| `/services/detox` | Detox & Residential |
| `/services/iop` | Intensive Outpatient |
| `/services/sober-living` | Sober Living |
| `/services/mat` | Medication-Assisted Treatment |
| `/services/picc-line` | PICC Line Program |
| `/locations` | All locations overview |
| `/locations/[slug]` | Individual location pages (6 total) |
| `/about` | About / Story / Mission |
| `/contact` | Contact form |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog post |

## Getting Started

```bash
cd stepworks-main-site
npm install
npm run dev
```

---

## Sprint Plan

Estimated **8 sprints** at roughly 1 week each. No database required — all content is static for now with the option to wire in a CMS later.

---

### Sprint 1 — Foundation & Theming
**Goal:** Establish the visual identity and shared layout components everything else will build on.

- [ ] Define brand color palette in `globals.css` CSS variables (primary teal-green, accent orange, neutrals)
- [ ] Configure Tailwind theme extensions to match brand colors
- [ ] Build `Header.tsx` — desktop nav with dropdowns (`NavigationMenu`), phone CTA, logo
- [ ] Build mobile nav using `Sheet` component (hamburger menu)
- [ ] Build `Footer.tsx` — links, social icons, copyright
- [ ] Wire `Header` and `Footer` into `app/layout.tsx`
- [ ] Confirm responsive behavior at mobile / tablet / desktop breakpoints

**Deliverable:** Every page has a working header and footer. Brand colors are locked in.

---

### Sprint 2 — Homepage
**Goal:** Complete the homepage to match the original site section by section.

- [ ] Hero section — headline, subheadline, phone CTA button, background
- [ ] Services cards section — 4 cards (Detox, IOP, Sober Living, MAT) with icons and links
- [ ] Free screening CTA banner — phone number, description text, CTA button
- [ ] Mission section — "We help people hurt by addiction..." + founder quote (Tom Ingram, MD)
- [ ] Quick links section — Contact, FAQ, Family Resources, Casey's Law, Referrals, Packing Info
- [ ] Insurance logos section — Optum, Humana, Cigna, Anthem, Aetna, CareSource, Passport, WellCare + CARF badge
- [ ] Mobile responsiveness pass on all homepage sections

**Deliverable:** Homepage is a close visual match to the original.

---

### Sprint 3 — Services Pages
**Goal:** Build out all 5 service detail pages.

- [ ] `/services` — overview page listing all services
- [ ] `/services/detox` — Detox & Residential detail page
- [ ] `/services/iop` — Intensive Outpatient Program page
- [ ] `/services/sober-living` — Sober Living page
- [ ] `/services/mat` — Medication-Assisted Treatment page
- [ ] `/services/picc-line` — PICC Line Program page
- [ ] Set up dynamic `[slug]` routing with a shared service page template
- [ ] Add CTA callout (phone number) on every service page

**Deliverable:** All service routes resolve and render with proper content.

---

### Sprint 4 — Location Pages
**Goal:** Build the locations overview and all 6 individual location pages.

- [ ] `/locations` — overview page with a card or map-style layout for all 6 locations
- [ ] Individual pages for: Bowling Green, E-town Crowne Pointe, E-town Woodland Dr., London, Nicholasville, Paducah
- [ ] Each location page: address, phone, services offered, photos placeholder
- [ ] Dynamic `[slug]` routing with shared location page template
- [ ] Consider embedding a Google Maps link per location

**Deliverable:** All 6 location routes resolve with location-specific content.

---

### Sprint 5 — About Pages
**Goal:** Build all pages under the About Us section.

- [ ] `/about` — The Stepworks Story
- [ ] `/about/carf` — CARF Accreditation page
- [ ] `/about/insurance` — Accepted Insurances page (with logos)
- [ ] `/about/faq` — FAQ page using `Accordion` component
- [ ] `/about/team` — Meet Our Team page
- [ ] `/about/careers` — Careers page

**Deliverable:** All About Us routes are complete and linked from the header dropdown.

---

### Sprint 6 — Contact & Forms
**Goal:** Build all contact-related pages. No backend yet — forms can log to console or use a simple email service.

- [ ] `/contact` — Contact form (name, phone, email, message) using shadcn `Input`, `Textarea`, `Button`
- [ ] `/contact/records` — Medical Records Request form
- [ ] `/contact/referrals` — Referral Info page
- [ ] Form validation (basic client-side)
- [ ] Decide on form submission method: email service (Resend / Formspree) or save for later

**Deliverable:** All contact routes work. Forms submit without errors.

---

### Sprint 7 — Blog
**Goal:** Set up the blog with static content to start.

- [ ] `/blog` — Blog listing page with post cards
- [ ] `/blog/[slug]` — Individual post page
- [ ] Author a few placeholder posts in MDX or a local data file
- [ ] Evaluate whether a CMS (Contentful, Sanity, or similar) is worth adding
- [ ] Add blog link to header nav

**Deliverable:** Blog renders at least 3 posts. Individual post pages work.

---

### Sprint 8 — Polish, SEO & Launch Prep
**Goal:** Get the site production-ready.

- [ ] Metadata and Open Graph tags on every page (`generateMetadata`)
- [ ] Sitemap (`app/sitemap.ts`)
- [ ] robots.txt
- [ ] Accessibility audit — keyboard nav, aria labels, color contrast
- [ ] Full mobile responsiveness audit
- [ ] Image optimization — use `next/image` everywhere, add alt text
- [ ] Performance pass — lazy loading, code splitting
- [ ] Set up analytics (Google Analytics or Plausible)
- [ ] Final cross-browser QA
- [ ] Deploy to Vercel

**Deliverable:** Site is live and passes Core Web Vitals.

---

## Notes

- No database needed for v1 — all content is hardcoded or in local data files
- CMS can be added post-launch if the client wants to manage content
- The original WordPress site is at stepworks.com — use it as the visual reference
- Phone number: **(800) 545-9031**