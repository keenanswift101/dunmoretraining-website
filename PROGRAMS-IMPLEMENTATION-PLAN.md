# Programs Implementation Plan — Dunmore Training Website

## Overview
Add 8 new QCTO-accredited programmes, build individual programme detail pages, create a programmes listing page, merge Agri + Forestry into one category, replace the old Chainsaw Operator with Specialised Chainsaw Operator, and add the West Coast satellite office.

---

## 1. Data Layer Changes

### 1a. Update `types/index.ts` — Extend `Program` interface
```ts
export interface Program {
  slug: string
  title: string
  unitStandard?: string          // existing
  qctoCode?: string              // NEW — e.g. "SP-220905"
  nqfLevel?: number              // NEW — 2, 3, 4, 5
  credits?: number               // NEW — minimum credits
  accreditationNumber?: string   // NEW — e.g. "01-QCTO/SDP050325093714"
  accreditationBody?: string     // NEW — "QCTO" | "FP&M SETA" | "AgriSETA"
  category: string
  categoryLabel: string
  description: string
  outcomes?: string[]
  entryRequirements?: string[]   // NEW
  targetAudience?: string[]      // NEW
  assessmentMethod?: string      // NEW
  certification?: string         // NEW
  duration?: string
  delivery?: string
  accredited: boolean
  image?: string
  imageAlt?: string
}
```

### 1b. Add 8 New QCTO Programmes to `data/programs.ts`

**Forestry QCTO (Acc# 01-QCTO/SDP050325093714):**
1. Forestry Incident Investigator — NQF 4, SP-220905, 32 credits
2. Forestry SHE Representative — NQF 3, SP-220906, 39 credits
3. Specialised Chainsaw Operator — NQF 3, SP-220903, 15 credits (REPLACES old chainsaw-operator)

**First Aid QCTO (Acc# 01-QCTO/SDP010825145811):**
4. Basic Emergency First Aid Responder — NQF 2, SP-230801, 2 credits
5. Intermediate Emergency First Aid Responder — NQF 3, SP-230802, 5 credits
6. Advanced Emergency First Aid Responder — NQF 4, SP-230803, 6 credits

**AgriSETA QCTO (Acc# 01-QCTO/SDP160625160620):**
7. Landscape Gardener (Landscaping Supervisor) — NQF 3, 98892, 96 credits
8. Pest Management Officer — NQF 5, 99513, 257 credits

### 1c. Merge categories: "Forestry & Field" absorbs AgriSETA programmes
- Category key: `forestry` → label changes to "Forestry, Agriculture & Field"
- Landscape Gardener & Pest Management Officer go into this category

### 1d. Replace Chainsaw Operator
- Remove: `chainsaw-operator` (US 117062)
- Add: `specialised-chainsaw-operator` (SP-220903, NQF 3, 15 credits)

### 1e. Update locations
- Add West Coast Satellite Office: 528 Industry Road, Hopefield, 7355

---

## 2. Page Routes

| Route | Type | Description |
|-------|------|-------------|
| `/programs` | Static listing | All programmes grouped by category, filterable |
| `/programs/[slug]` | Dynamic detail | Individual programme page |

---

## 3. Programme Detail Page Template (`/programs/[slug]`)

### Layout Structure
```
┌─────────────────────────────────────────────┐
│ Breadcrumb: Home > Programs > [Category]    │
├─────────────────────────────────────────────┤
│ HERO BAND                                   │
│ ┌─────────────────┬───────────────────────┐ │
│ │ Category Badge   │                       │ │
│ │ Programme Title  │   Quick Info Card     │ │
│ │ Description      │   • NQF Level         │ │
│ │                  │   • Credits            │ │
│ │                  │   • Duration           │ │
│ │                  │   • Delivery Mode      │ │
│ │                  │   • Accreditation      │ │
│ │                  │   [Enquire Now CTA]    │ │
│ └─────────────────┴───────────────────────┘ │
├─────────────────────────────────────────────┤
│ OUTCOMES SECTION                            │
│ What You'll Learn (checklist grid)          │
├─────────────────────────────────────────────┤
│ DETAILS GRID                                │
│ ┌──────────┬──────────┬──────────┐          │
│ │ Entry    │ Target   │ Assess-  │          │
│ │ Require- │ Audience │ ment     │          │
│ │ ments    │          │ Method   │          │
│ └──────────┴──────────┴──────────┘          │
├─────────────────────────────────────────────┤
│ CERTIFICATION INFO                          │
├─────────────────────────────────────────────┤
│ ACCREDITATION BAND                          │
│ QCTO/SETA badge + accreditation number      │
├─────────────────────────────────────────────┤
│ CTA SECTION                                 │
│ "Ready to get started?" + Enquire button    │
├─────────────────────────────────────────────┤
│ RELATED PROGRAMMES (same category)          │
└─────────────────────────────────────────────┘
```

### Key Features
- `generateStaticParams()` for SSG of all programme slugs
- SEO metadata per programme via `generateMetadata()`
- Structured data (JSON-LD) for Course schema
- Breadcrumb navigation
- Related programmes from same category
- Enquire Now CTA linking to `/contact?program=[slug]`

---

## 4. Programmes Listing Page (`/programs`)

- Hero banner with "Our Training Programmes" heading
- Category filter tabs (All, First Aid, Health & Safety, Fire Fighting, Forestry/Agri/Field, Other)
- URL query param filtering: `/programs?category=first-aid`
- Programme cards in responsive grid
- Each card links to `/programs/[slug]`

---

## 5. Files to Create / Modify

### New Files
- `app/programs/page.tsx` — Listing page
- `app/programs/[slug]/page.tsx` — Detail page
- `components/sections/ProgramCard.tsx` — Reusable card for listing
- `components/sections/ProgramHero.tsx` — Detail page hero
- `components/sections/ProgramDetails.tsx` — Detail page body
- `components/ui/Breadcrumb.tsx` — Breadcrumb navigation

### Modified Files
- `types/index.ts` — Extended Program interface
- `data/programs.ts` — 8 new programmes + replaced chainsaw + merged category
- `data/locations.ts` — West Coast office
- `components/sections/ProgramCategoryGrid.tsx` — Updated counts

---

## 6. Implementation Order
1. Types + data layer (types, programs, locations)
2. Programme detail page (`/programs/[slug]`)
3. Programme listing page (`/programs`)
4. Update homepage category grid counts
5. Build & verify
