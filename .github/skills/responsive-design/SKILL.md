---
name: responsive-design
description: "Implement mobile-first responsive layouts, fluid typography, adaptive navigation, and container queries. Use when a layout breaks at certain breakpoints, needs to work across mobile/tablet/desktop, requires fluid type scaling, or when building adaptive components that respond to their container size rather than viewport. Covers breakpoint strategy, fluid grids, responsive images, and navigation patterns."
argument-hint: "What layout or component needs to be made responsive (e.g. 'course grid', 'navigation', 'hero section')"
---

# Responsive Design

## When to Use
- Building any layout that must work on mobile, tablet, and desktop
- A component breaks or looks wrong at certain viewport widths
- Adding fluid typography to a project
- Designing navigation that adapts from hamburger → full nav
- Making cards/grids reflow gracefully

## Approach

### Mobile-First Rule
Always write base styles for mobile, then enhance with `min-width` breakpoints.

```css
/* ✅ Mobile-first */
.grid { grid-template-columns: 1fr; }
@media (min-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }

/* ❌ Desktop-first (avoid) */
.grid { grid-template-columns: repeat(3, 1fr); }
@media (max-width: 1024px) { .grid { grid-template-columns: repeat(2, 1fr); } }
```

### Breakpoint System
| Name | Min-width | Target |
|------|-----------|--------|
| `sm` | 640px | Large phones, landscape |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Laptops, desktops |
| `2xl` | 1536px | Wide desktops |

In Tailwind: `sm:`, `md:`, `lg:`, `xl:`, `2xl:` prefixes.

## Step-by-Step Process

### 1. Fluid Typography with `clamp()`
Replace all fixed font sizes with fluid scales — no media query jumps:

```css
:root {
  --text-sm:   clamp(0.875rem, 1.75vw, 1rem);
  --text-base: clamp(1rem,     2vw,    1.125rem);
  --text-lg:   clamp(1.125rem, 2.25vw, 1.375rem);
  --text-xl:   clamp(1.25rem,  2.5vw,  1.75rem);
  --text-2xl:  clamp(1.5rem,   3vw,    2.25rem);
  --text-3xl:  clamp(2rem,     4vw,    3rem);
  --text-hero: clamp(2.5rem,   6vw,    5rem);
}
```

### 2. Fluid Grid with `auto-fit`
```css
.card-grid {
  display: grid;
  gap: clamp(1rem, 3vw, 2rem);
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
}
```
This is self-responsive — no breakpoints needed for the grid itself.

### 3. Responsive Navigation
```
Mobile (< md):  Hamburger button → off-canvas or dropdown menu
Tablet (md):    Compact horizontal nav, some items hidden
Desktop (lg+):  Full horizontal nav with all items
```

Pattern using CSS + checkbox (no JS required):
```html
<nav>
  <a href="/" class="logo">Brand</a>
  <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">☰</button>
  <ul class="nav-links" role="list">
    <li><a href="/courses">Courses</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

### 4. Responsive Images
```html
<!-- Use srcset for art direction -->
<img
  src="hero-desktop.webp"
  srcset="hero-mobile.webp 480w, hero-tablet.webp 768w, hero-desktop.webp 1280w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  alt="Training session in progress"
  width="1280" height="720"
  loading="lazy"
/>
```

In Next.js always use `<Image>` from `next/image` — it handles srcset, lazy loading, and CLS automatically.

### 5. Container Queries (Modern)
For components that must adapt to their container (not viewport):
```css
/* Define container */
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

/* Adapt based on container width */
@container card (min-width: 400px) {
  .card { flex-direction: row; }
  .card-image { width: 40%; }
}
```

## Quality Checklist
- [ ] Test at 375px (iPhone SE), 768px (iPad), 1280px, 1440px
- [ ] No horizontal scroll at any breakpoint
- [ ] Touch targets ≥ 44×44px on mobile
- [ ] Navigation usable on mobile without JS
- [ ] Images don't overflow their containers
- [ ] Text remains readable (min 16px equivalent) at all sizes
