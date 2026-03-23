# DUNMORE Training & Skills Development
## Website Analysis & Upgrade Proposal

---

## 1. Business Overview (from site + company profile)

| Field | Detail |
|---|---|
| **Company Name** | DUNMORE Training & Skills Development |
| **Registration** | 2014/239650/07 |
| **BBBEE Status** | Level 1 |
| **Tax Ref** | 9359977171 |
| **VAT No** | 4410277448 |
| **Dept of Labour Reg** | CI 296/3/12/1 |
| **SETA Accreditation** | FPM16/PRPACC-022 |
| **CSD Supplier No** | MAAA0160735 |
| **Head Office** | Raithby, Somerset West, 7130 |
| **Director** | calbey@dunmore.co.za |
| **Operational Head** | donny@dunmore.co.za |
| **General Enquiries** | admin@dunmore.co.za |
| **Tel** | (+27) (0)21 8423021 |
| **Mobile** | +27 (0)84 588 4121 |

---

## 2. What Dunmore Does

Dunmore Training & Skills Development is a **South African accredited training provider** specialising in:

### Core Business Lines
1. **SETA-Accredited Training** — All courses aligned to SAQA unit standards and NQF
2. **Event Medic Services** — Standby medics for schools and sports events in the Western Cape
3. **Instructor-Led Training** — Theoretical + practical delivery
4. **Follow-up Monitoring & Evaluation** — Post-training skills implementation checks

### Key Stats (from homepage)
- **4 Locations** across South Africa
- **25 Training Programs**
- **20+ Clients**

### Mission
> To offer a range of training programmes aligned to SETA and SAQA unit standards, providing measurable, cost-effective, long-term training solutions.

### Core Values
- Trust, open communication, fairness
- Affordable and effective service delivery
- Community upliftment

---

## 3. Full Program Catalogue (scraped from /programs.html)

### First Aid (SAQA Unit Standards)
- 119567 — Basic Life Support & First Aid Level 1
- 120496 — First Aid Level 2
- 376480 — First Aid Level 3

### Health & Safety
- 117049 — Occupational Health & Safety
- 123137 — Health and Safety Representative
- 8494 — HIV Awareness

### Fire Fighting & Related
- 12484 — Fire Awareness
- 11506 — Fire Marshall and Emergency Evacuation
- 117079 — Standard Safety Procedures during Active Wildfire Suppression
- 117082 — Wildfire Suppression at Basic Fire Fighting Level

### Chainsaw, Brushcutter & Related
- 117062 — Chainsaw Operator
- 123243 — Brushcutter Operator
- 123233 — Cut Felled Timber Using a Chainsaw & Maintain Chainsaw

### Herbicide Applicator & Related
- 119709 — Plant Identification
- 123134 — Herbicide Applicator

### Forestry Related
- 7461 — Use Maps to Access and Communicate Route/Location Information
- 117085 — Basic Forestry Map Reading
- 120335 — Incident Investigation
- 123149 — Communication Using a Two-Way Radio

### Other Accredited Programs
- 120086 — Engineering Tools, Material & Equipment
- 12509 — Manage Personal Finances
- 15092 — Plan and Manage Personal Finances
- 264256 — Peer Educator

### Non-Accredited Certification
- Guide to Field Safety and Basic Survival
- Water Safety Training

### Pending Programs
- 8038 — Operating Lift Trucks
- 119709 — Maintain and Conserve Flora in Nature Areas
- 123238 — Conduct Maintenance on Herbicide Applicators
- 229998 — Rope Access / Fall Arrest Techniques
- 376881 — Incident Command System

### Event Medic Services (/services.html)
Standby medic provision for:
- School sports events
- Athletics meets
- Hockey, Netball and Soccer matches and tournaments
- Focus: Western Cape — scholar and athlete safety and first aid awareness

---

## 4. Current Website Audit — Critical Problems

### 4.1 Design & Visual Quality — FAILING

| Issue | Detail | Impact |
|---|---|---|
| **Template builder site** | Built with WebsiteX5/Incomedia — a drag-and-drop builder from ~2015 | Looks dated, not professional |
| **No visual hierarchy** | Plain grey background, flat layout, no depth or contrast | Fails to communicate premium credibility |
| **No hero section** | Homepage has a basic text block with no imagery, no visual punch | First impression is weak — visitors leave |
| **Outdated typography** | No font system, no size scale, default system fonts used inconsistently | Erodes brand trust |
| **No brand colour system** | Inconsistent use of muted blues/greys, no defined palette | DUNMORE coat of arms has navy + gold — unused |
| **No whitespace rhythm** | Content crammed without breathing room | Difficult to scan, hard to read |
| **Flat navigation** | Horizontal list with no visual weight, no active states | Hard to tell where you are |
| **Social icons link to Incomedia** | Facebook, YouTube, Twitter, LinkedIn links all point to the template maker (Incomedia), NOT Dunmore's own social profiles | Brand-damaging — visitors go to wrong company |

### 4.2 Content & Information Architecture — POOR

| Issue | Detail | Impact |
|---|---|---|
| **No course detail pages** | All 25 programs listed as a flat bullet list with no descriptions, pricing, or call-to-action | No conversion path — users can't enquire about a specific course |
| **No testimonials or social proof** | Zero client references, quotes, or success stories visible | Trust barrier for new clients |
| **No trainer profiles** | No team bios, photos, or credentials shown | Competency is invisible |
| **Stats lack context** | "4 Locations, 25 Programs, 20 Clients" with no supporting detail | Numbers without story aren't convincing |
| **Services page is a single paragraph** | Event medic services described in ~5 sentences, no imagery, no booking flow | Under-sells a core revenue service |
| **No pricing or quotation framework** | Contact form is the only conversion mechanism | High friction for B2B buyers |
| **Navigation is incomplete** | "Online Shopping" link exists on every page but leads nowhere | Broken UX, confused visitors |
| **Contact form uses image CAPTCHA** | "Check word" CAPTCHA with an unreadable image — outdated and inaccessible | Blocks form completions, fails WCAG |

### 4.3 Technical & Performance — CRITICAL

| Issue | Detail | Impact |
|---|---|---|
| **WebsiteX5/Incomedia builder** | Generates bloated HTML with inline styles, table-based layout remnants, and outdated JS | Cannot be maintained or extended without the builder tool |
| **No HTTPS enforcement visible** | Social links use HTTP — unclear if SSL is properly configured | Security warning risk in browsers |
| **No mobile-responsive layout** | Screenshots show a fixed-width layout; no `<meta viewport>` sign-off from scrape output | 60%+ of web traffic is mobile — site is unusable on phones |
| **No SEO structure** | No `<meta description>`, no Open Graph tags, no structured data (JSON-LD) | Invisible to Google for local business searches |
| **No Google Analytics or tracking** | No visibility into whether the site drives any business  | Can't measure marketing ROI |
| **Images lack alt text** | Logo and social icons have empty or missing alt attributes | WCAG fail, poor accessibility |
| **Broken social links** | All social icon links point to `fb.me/Incomedia`, `twitter.com/Incomedia`, `it.linkedin.com/company/incomedia` | Actively misleads visitors to a different business |
| **Hosted + designed by IT-GURU.Online** | Third-party dependency for hosting and design changes | No ownership, no agility |
| **No Core Web Vitals optimisation** | Builder output typically scores 30–50 on Lighthouse | Google search ranking penalty |

### 4.4 Brand & Trust Signals — MISSING

| Issue | Detail | Impact |
|---|---|---|
| **No accreditation badges displayed** | SETA, SAQA, Dept of Labour credentials are buried in text on the About page | Accreditations are the #1 trust signal for training buyers — they should be front and centre |
| **No BBBEE Level 1 highlight** | Level 1 BBBEE is a major procurement advantage in South Africa — completely hidden | Lost B2B opportunity |
| **No client logos** | "20 Clients" mentioned but no logos or names shown | Stats without proof are worthless |
| **Coat of Arms not used intentionally** | The Dunmore family crest is unique and premium — used as a tiny logo only | Lost brand equity |

---

## 5. Why the Upgrade Is Critical — Client Pitch Summary

### The Business Case

**Dunmore is a Level 1 BBBEE, SETA-accredited training provider with 25 programs and 20+ corporate clients — but nothing about the current website communicates this credibility.**

A prospective corporate training buyer lands on the site and sees:
- A flat, grey, template-built page from 2015
- No mobile experience
- Broken social links pointing to another company
- An unreadable CAPTCHA on the contact form
- Accreditations buried in a text list on the About page

That buyer closes the tab.

### Specific Losses From the Current Site
1. **Mobile users** — The site has no mobile layout. Over 60% of initial research for B2B services now happens on mobile. Every mobile visitor is a lost lead.
2. **Google visibility** — No SEO structure means the site doesn't rank for searches like "SETA-accredited first aid training Western Cape" or "event medic Cape Town".
3. **BBBEE procurement advantage** — Level 1 BBBEE is a strong differentiator for government and corporate procurement. It's not communicated on the homepage or in the navigation.
4. **Course booking friction** — There is no way to enquire about a specific course, get a quote, or see course details. The contact form is the only path, and it has a broken CAPTCHA.
5. **Event Medic visibility** — The medic services business is described in one paragraph with no imagery. This is undermarketed.
6. **Social links send visitors to the wrong company** — This is actively brand-damaging and needs immediate correction.

---

## 6. New Website — Recommended Structure

Based on the scraped content and company profile, the new site should have:

### Pages
| Page | Purpose |
|---|---|
| **Home** | Hero with tagline + key stats (4 locations, 25 programs, Level 1 BBBEE) + accreditation badges + CTA |
| **About** | Mission, values, team, credentials, BBBEE, company registration details |
| **Programs** | Course category cards → individual course detail pages with unit standard, duration, who it's for, CTA |
| **Services** | Event Medic Services with imagery, booking form, and scope of coverage |
| **Locations** | Interactive map of 4 locations with contact details per location |
| **Contact** | Modern accessible contact form + contact details + embedded map |
| **Clients** | Client logos wall + testimonials |

### Key Homepage Sections
1. Hero — "South Africa's Trusted SETA-Accredited Training Provider" + CTA
2. Stats bar — Locations · Programs · Clients · Years Active
3. Accreditation logos — SETA, SAQA, Dept of Labour, Level 1 BBBEE badge
4. Course category grid — First Aid / Fire Fighting / Health & Safety / Forestry / Medic Services
5. Client partner programme CTA
6. Testimonials
7. Footer with correct social links

### Design Direction
- **Brand colours**: Navy (`#1a2f5e`) + Gold (`#c9a227`) — drawn from the Dunmore coat of arms
- **Typography**: Inter (body) + a serif or bold display face for headings
- **Photography**: Real training-in-action imagery prominently featured
- **Tone**: Professional, credible, South African B2B

---

## 7. Immediate Fixes (Before New Site Launches)

These require urgent attention even before the rebuild:

1. **Fix social links** — Update Facebook, YouTube, Twitter, LinkedIn to Dunmore's actual profiles (currently all pointing to Incomedia)
2. **Fix the CAPTCHA** — Replace with reCAPTCHA v3 or honeypot — the image CAPTCHA is broken and inaccessible
3. **Add HTTPS redirect** — Confirm all pages serve over HTTPS
4. **Surface BBBEE Level 1** — Add a one-line mention on the homepage this week

---

*Analysis compiled: March 2026*
*Source: Live scrape of dunmore.co.za + company profile document*
