---
name: modern-web-ui
description: "Build beautiful, modern, high-quality website UI components and pages. Use when creating hero sections, feature grids, navigation, course cards, CTA sections, testimonials, pricing tables, footers, or any visual page element. Provides design system patterns, component templates, CSS architecture guidance, and visual quality checklists for premium-feeling interfaces."
argument-hint: "Component or section to build (e.g. 'hero section', 'course card', 'pricing table')"
---

# Modern Web UI

## When to Use
- Building any new page section or UI component from scratch
- Establishing a design system for a project
- Elevating flat-looking components with depth and polish
- Choosing CSS patterns for layout, colour, or motion

## Design System Foundation

### Step 1 — Define Design Tokens First
Before writing any component, confirm tokens exist in a global CSS file (`:root` or `tailwind.config.js`). See [design-system reference](./references/design-system.md) for a full token catalogue.

Minimum required tokens:
```css
:root {
  /* Colour */
  --color-primary: #2563eb;
  --color-primary-dark: #1d4ed8;
  --color-accent: #f59e0b;
  --color-surface: #ffffff;
  --color-surface-alt: #f8fafc;
  --color-text: #0f172a;
  --color-text-muted: #64748b;
  --color-border: #e2e8f0;

  /* Radii */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,.10);
  --shadow-lg: 0 12px 40px rgba(0,0,0,.12);

  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-display: 'Cal Sans', 'Inter', sans-serif;
}
```

### Step 2 — Choose a Layout Strategy
| Pattern | Use For |
|---------|---------|
| CSS Grid + `auto-fit` | Card grids, feature layouts |
| Flexbox | Navigation, inline groups, button rows |
| CSS Grid named areas | Complex page shells (header/sidebar/main/footer) |
| Container queries | Reusable cards that adapt to their container |

### Step 3 — Build the Component
See [component templates](./references/component-templates.md) for ready-to-use patterns:
- Hero sections
- Course/product card grids
- Navigation bars (sticky, transparent → solid)
- Feature sections (icon + text)
- Testimonial carousels
- CTA banners
- Pricing tables
- Footer layouts

### Step 4 — Apply Visual Polish
1. Add `box-shadow` transitions on interactive cards
2. Use `clamp()` for all font sizes (fluid, no media query jumps)
3. Apply entrance animations via `@keyframes fadeUp` + `animation-delay`
4. Add gradient accents, border highlights, or backdrop blur for depth
5. Ensure `:focus-visible` ring on all interactive elements

### Step 5 — Quality Check
- [ ] Renders correctly on 375px, 768px, 1280px, 1440px
- [ ] No hardcoded hex colours — all using design tokens
- [ ] All images have `alt` text
- [ ] `prefers-reduced-motion` respected for all animations
- [ ] Keyboard tab order is logical
- [ ] Colour contrast ≥ 4.5:1 body text, ≥ 3:1 large text

## Key Patterns

### Modern Card
```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### Gradient Hero Background
```css
.hero {
  background: linear-gradient(135deg,
    oklch(97% 0.02 240) 0%,
    oklch(94% 0.04 220) 100%
  );
}
```

### Section Spacing Rhythm
```css
.section { padding-block: clamp(4rem, 8vw, 8rem); }
.section + .section { border-top: 1px solid var(--color-border); }
```
