# DUNMORE Training & Skills Development
## New Website — Master Build Plan

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | SEO-ready SSG/SSR, fast, Vercel-native |
| **Styling** | Tailwind CSS v4 + CSS custom properties | Utility-first, consistent design tokens |
| **Language** | TypeScript | Type safety across all components and data |
| **Animations** | CSS `@keyframes` + Framer Motion (selective) | No heavy libs |
| **Forms** | React Hook Form + Zod | Validated, accessible forms |
| **Email** | Resend (API) | Reliable transactional email for contact/bookings |
| **Maps** | Google Maps Embed or Leaflet | 4 locations page |
| **Deployment** | Vercel | Zero-config, fast CDN, free tier |
| **Domain** | dunmore.co.za (existing) | Point DNS to Vercel |

---

## Brand Design System

### Colour Palette (drawn from Dunmore Coat of Arms)

```css
:root {
  /* Brand — Navy + Gold from the coat of arms */
  --color-primary:      #1a2f5e;   /* Deep navy */
  --color-primary-dark: #111f3f;   /* Darker navy */
  --color-primary-light:#2a4a8e;   /* Lighter navy for hover */
  --color-accent:       #c9a227;   /* Coat of arms gold */
  --color-accent-light: #e8be45;   /* Lighter gold for hover */
  --color-accent-dark:  #a8841f;   /* Darker gold */

  /* Surfaces */
  --color-surface:      #ffffff;
  --color-surface-alt:  #f8f9fc;
  --color-surface-dark: #0f1929;   /* Dark sections / footer */

  /* Text */
  --color-text:         #0f172a;
  --color-text-muted:   #64748b;
  --color-text-inverse: #ffffff;

  /* Borders */
  --color-border:       #e2e8f0;

  /* Status */
  --color-success:      #16a34a;
  --color-error:        #dc2626;
}
```

### Typography
- **Display / Headings**: `Playfair Display` — premium, authoritative, nods to the heritage of the crest
- **Body / UI**: `Inter` — clean, legible, modern
- **Fallback**: `system-ui, sans-serif`

### Logo Treatment
- Dunmore Coat of Arms (crest) used at full scale in the hero, and as a refined mark in the navbar
- Navy wordmark: "DUNMORE" in bold + "Training & Skills Development" in medium weight below

---

## Folder Structure

```
dunmoretraining-website/
├── app/
│   ├── layout.tsx              # Root layout: font loading, metadata, nav, footer
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx
│   ├── programs/
│   │   ├── page.tsx            # Programs index (category grid)
│   │   └── [slug]/
│   │       └── page.tsx        # Individual course detail page
│   ├── services/
│   │   └── page.tsx            # Event Medic Services
│   ├── locations/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts        # Contact/booking form handler
├── components/
│   ├── layout/
│   │   ├── NavBar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   └── SectionHeader.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── StatsBar.tsx
│       ├── AccreditationBar.tsx
│       ├── ProgramGrid.tsx
│       ├── ProgramCard.tsx
│       ├── ServiceCard.tsx
│       ├── TestimonialSlider.tsx
│       ├── ClientPartnerCTA.tsx
│       └── ContactForm.tsx
├── data/
│   ├── programs.ts             # All 25 programs as typed data
│   └── locations.ts            # 4 locations data
├── lib/
│   └── email.ts                # Resend email helper
├── public/
│   ├── logo/
│   ├── images/
│   └── accreditations/
├── styles/
│   └── globals.css             # CSS tokens, base reset, typography
└── types/
    └── index.ts                # Shared TypeScript interfaces
```

---

## Page Map & Section Blueprint

### 1. HOME (`/`)
| # | Section | Purpose |
|---|---|---|
| 1 | **NavBar** | Sticky, transparent → solid on scroll, navy + gold, coat of arms mark |
| 2 | **Hero** | Full-width, strong headline, CTA buttons, background imagery of training in action |
| 3 | **Stats Bar** | 4 Locations · 25 Programs · 20+ Clients · Level 1 BBBEE — animated count-up |
| 4 | **Accreditation Strip** | Logos/badges: SETA · SAQA · Dept of Labour · NQF · Level 1 BBBEE |
| 5 | **Program Categories** | 6 category cards (First Aid, Fire Fighting, Health & Safety, Forestry, Chainsaw/Herbicide, Medic Services) |
| 6 | **Why Dunmore** | 3-column: Instructor-Led · SETA-Accredited · Follow-up M&E |
| 7 | **Client Partner CTA** | Full-width banner — join partner programme |
| 8 | **Testimonials** | 3 client quotes (to be sourced from client) |
| 9 | **Footer** | Links, contact info, social icons (correct), accreditation numbers, copyright |

**Hero Headline options:**
- *"South Africa's Trusted SETA-Accredited Training Provider"*
- *"Expert Training. Real Skills. Measurable Results."*
- *"Level 1 BBBEE · SETA Accredited · 25 Programs"*

---

### 2. ABOUT (`/about`)
| # | Section |
|---|---|
| 1 | Page Hero — "About Dunmore" with brief intro |
| 2 | Mission & Objectives (2-col: text left, image right) |
| 3 | Core Values — 4 cards with icons |
| 4 | Our Methodology — theoretical + practical, follow-up M&E |
| 5 | Company Credentials — registration, BBBEE, SETA number, VAT, Dept of Labour, CSD |
| 6 | Team section (placeholder — needs client photos + bios) |
| 7 | CTA — "Ready to train your team?" |

---

### 3. PROGRAMS (`/programs`)
| # | Section |
|---|---|
| 1 | Page Hero — "Our Training Programs" |
| 2 | Category filter tabs (All / First Aid / Fire / H&S / Forestry / Other) |
| 3 | Course card grid — each card: name, unit standard, category badge, "View Course" link |
| 4 | Bookings CTA banner |

**Individual Course Page (`/programs/[slug]`)**
| # | Section |
|---|---|
| 1 | Course title + category breadcrumb |
| 2 | Unit standard number + accreditation badge |
| 3 | Who it's for / Prerequisites |
| 4 | What you'll learn (bullet list) |
| 5 | Duration + delivery method |
| 6 | Booking enquiry form (inline) |

**All 25 Programs → slugs:**
| Slug | Title | Category |
|---|---|---|
| `first-aid-level-1` | First Aid Level 1 (US 119567) | First Aid |
| `first-aid-level-2` | First Aid Level 2 (US 120496) | First Aid |
| `first-aid-level-3` | First Aid Level 3 (US 376480) | First Aid |
| `occupational-health-safety` | Occupational Health & Safety (US 117049) | Health & Safety |
| `health-safety-rep` | Health and Safety Representative (US 123137) | Health & Safety |
| `hiv-awareness` | HIV Awareness (US 8494) | Health & Safety |
| `fire-awareness` | Fire Awareness (US 12484) | Fire Fighting |
| `fire-marshall` | Fire Marshall & Emergency Evacuation (US 11506) | Fire Fighting |
| `wildfire-safety` | Wildfire Safety Procedures (US 117079) | Fire Fighting |
| `wildfire-suppression` | Basic Wildfire Suppression (US 117082) | Fire Fighting |
| `chainsaw-operator` | Chainsaw Operator (US 117062) | Chainsaw & Brushcutter |
| `brushcutter-operator` | Brushcutter Operator (US 123243) | Chainsaw & Brushcutter |
| `chainsaw-maintenance` | Chainsaw Use & Maintenance (US 123233) | Chainsaw & Brushcutter |
| `plant-identification` | Plant Identification (US 119709) | Herbicide |
| `herbicide-applicator` | Herbicide Applicator (US 123134) | Herbicide |
| `map-reading-routes` | Map Reading — Routes & Location (US 7461) | Forestry |
| `forestry-map-reading` | Basic Forestry Map Reading (US 117085) | Forestry |
| `incident-investigation` | Incident Investigation (US 120335) | Forestry |
| `two-way-radio` | Two-Way Radio Communication (US 123149) | Forestry |
| `engineering-tools` | Engineering Tools & Equipment (US 120086) | Other |
| `manage-personal-finances` | Manage Personal Finances (US 12509) | Other |
| `plan-personal-finances` | Plan and Manage Personal Finances (US 15092) | Other |
| `peer-educator` | Peer Educator (US 264256) | Other |
| `field-safety-survival` | Guide to Field Safety & Basic Survival | Non-Accredited |
| `water-safety` | Water Safety Training | Non-Accredited |

---

### 4. SERVICES (`/services`)
| # | Section |
|---|---|
| 1 | Page Hero — "Event Medic Services" |
| 2 | What We Provide — 2-col: text + imagery of medic at event |
| 3 | Events We Cover — icon grid: School Sports · Athletics · Hockey · Netball · Soccer · Custom Events |
| 4 | Our Approach — safety, first aid awareness, well-being of scholars/athletes |
| 5 | Service Area — Western Cape map highlight |
| 6 | Booking enquiry form |

---

### 5. LOCATIONS (`/locations`)
| # | Section |
|---|---|
| 1 | Page Hero — "Find a Training Centre Near You" |
| 2 | 4 location cards — each with name, address, phone, email |
| 3 | Embedded Google Map with 4 pins |
| 4 | Contact CTA |

---

### 6. CONTACT (`/contact`)
| # | Section |
|---|---|
| 1 | Page Hero — minimal, "Get in Touch" |
| 2 | 2-col: contact details left / form right |
| 3 | Contact details: Director · Operational Head · General Enquiries · Tel · Address |
| 4 | Modern accessible form: Company · Name · Contact No · Email · Enquiry type (checkboxes) · Message |
| 5 | Embedded map — Raithby, Somerset West |

---

## Component Inventory

### Layout Components
| Component | File | Description |
|---|---|---|
| `NavBar` | `components/layout/NavBar.tsx` | Sticky, mobile hamburger, navy + gold |
| `Footer` | `components/layout/Footer.tsx` | Dark navy bg, links, social, accreditation numbers |

### UI Primitives
| Component | File | Description |
|---|---|---|
| `Button` | `components/ui/Button.tsx` | Primary (gold), Secondary (navy outline), Ghost |
| `Badge` | `components/ui/Badge.tsx` | Category tags, accreditation labels |
| `SectionHeader` | `components/ui/SectionHeader.tsx` | Eyebrow + H2 + subtitle, centered or left |

### Section Components
| Component | File | Description |
|---|---|---|
| `Hero` | `components/sections/Hero.tsx` | Full-height, headline, CTA, background image |
| `StatsBar` | `components/sections/StatsBar.tsx` | 4 animated stats |
| `AccreditationBar` | `components/sections/AccreditationBar.tsx` | Scrolling or grid of accreditation logos |
| `ProgramGrid` | `components/sections/ProgramGrid.tsx` | Filterable 3-col card grid |
| `ProgramCard` | `components/sections/ProgramCard.tsx` | Course card with category badge and CTA |
| `ServiceCard` | `components/sections/ServiceCard.tsx` | Medic service card with icon |
| `TestimonialSlider` | `components/sections/TestimonialSlider.tsx` | Auto-advancing testimonial carousel |
| `ClientPartnerCTA` | `components/sections/ClientPartnerCTA.tsx` | Full-width CTA band, gold background |
| `ContactForm` | `components/sections/ContactForm.tsx` | Validated form, Zod schema, Resend API |

---

## Build Phases

### Phase 1 — Foundation (Days 1–2)
- [ ] Initialise Next.js 15 project with TypeScript + Tailwind
- [ ] Set up `globals.css` with full design token system (navy/gold)
- [ ] Configure `tailwind.config.js` with brand tokens
- [ ] Install Inter + Playfair Display via `next/font`
- [ ] Build `NavBar` and `Footer`
- [ ] Create `Button`, `Badge`, `SectionHeader` primitives
- [ ] Add `data/programs.ts` with all 25 courses typed

### Phase 2 — Home Page (Days 3–4)
- [ ] `Hero` section
- [ ] `StatsBar`
- [ ] `AccreditationBar`
- [ ] `ProgramGrid` (homepage preview — 6 categories)
- [ ] "Why Dunmore" features section
- [ ] `ClientPartnerCTA` banner
- [ ] `TestimonialSlider` (placeholder content)

### Phase 3 — Programs (Days 5–6)
- [ ] Programs index page with filter tabs
- [ ] Full 25-course card grid
- [ ] Dynamic `[slug]` course detail pages
- [ ] Booking enquiry form per course

### Phase 4 — About + Services + Locations (Days 7–8)
- [ ] About page — all sections
- [ ] Services page — Event Medic
- [ ] Locations page — 4 cards + map

### Phase 5 — Contact + API (Day 9)
- [ ] Contact page with full form
- [ ] `app/api/contact/route.ts` — Resend email handler
- [ ] Input validation with Zod
- [ ] Success/error states on form

### Phase 6 — Polish + SEO + Deploy (Day 10)
- [ ] Add `metadata` to all pages (title, description, Open Graph)
- [ ] Add JSON-LD structured data (LocalBusiness schema)
- [ ] Responsive QA at 375px / 768px / 1280px / 1440px
- [ ] Lighthouse audit — hit ≥ 90 performance, ≥ 95 accessibility
- [ ] Deploy to Vercel, point dunmore.co.za DNS

---

## Assets Needed from Client

Before build completes, we need from Dunmore:

| Asset | Purpose |
|---|---|
| High-res Coat of Arms / Logo (SVG or PNG) | NavBar, Hero, About |
| Training photos (instructors + learners in action) | Hero, About, Programs |
| Team headshots + bios | About page |
| Client logo files | Clients / social proof section |
| 3+ client testimonial quotes | Testimonials section |
| Social media profile URLs (Facebook, YouTube, Twitter/X, LinkedIn) | NavBar, Footer |
| 4 location addresses (full) | Locations page |
| Correct social profile links | To fix broken links |

---

## SEO Keywords to Target

- "SETA accredited training Western Cape"
- "First aid training Somerset West"
- "Fire fighting training Cape Town"
- "Level 1 BBBEE training provider South Africa"
- "Event medic services Western Cape"
- "Occupational health and safety training"
- "Chainsaw operator training SAQA"

---

*Plan version: 1.0 — March 2026*
