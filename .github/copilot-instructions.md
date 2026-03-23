# Dunmore Training Website — Project Guidelines

## Project Overview
A modern, visually stunning training/education website. The goal is pixel-perfect, high-quality UI that is fast, accessible, and conversion-focused.

## Design Philosophy
- **Modern & Premium**: Clean whitespace, confident typography, purposeful depth (subtle shadows, layering)
- **Mobile-First**: Design and build for mobile, enhance for larger screens
- **Performance-Conscious**: Every asset, dependency, and animation must earn its place
- **Accessible by Default**: WCAG 2.1 AA compliance is non-negotiable

## Tech Stack Defaults
Unless the project specifies otherwise, prefer:
- **HTML/CSS/JS** for static or light sites; **Next.js** or **Astro** for content-heavy sites
- **Tailwind CSS** for utility-first styling with a custom design token config
- **Framer Motion** or **CSS @keyframes** for animations — no heavy animation libraries
- **TypeScript** for all JS logic
- **Vercel** for deployment

## Code Style
- Use semantic HTML elements (`<section>`, `<nav>`, `<article>`, `<main>`, `<header>`, `<footer>`)
- CSS custom properties for all design tokens (colors, spacing, radii, fonts)
- BEM naming if writing plain CSS; Tailwind component classes with `@apply` in component files
- No inline styles — all styling via class names or CSS modules
- All images need `alt` text; icons need `aria-label` or `aria-hidden`

## Design Tokens (Baseline)
```css
/* Use these as starting defaults, customize per brand */
--color-primary: #2563eb;
--color-primary-dark: #1d4ed8;
--color-accent: #f59e0b;
--color-surface: #ffffff;
--color-surface-alt: #f8fafc;
--color-text: #0f172a;
--color-text-muted: #64748b;
--color-border: #e2e8f0;
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-full: 9999px;
--shadow-sm: 0 1px 3px rgba(0,0,0,.08);
--shadow-md: 0 4px 16px rgba(0,0,0,.10);
--shadow-lg: 0 12px 40px rgba(0,0,0,.12);
--font-sans: 'Inter', system-ui, sans-serif;
--font-display: 'Cal Sans', 'Inter', sans-serif;
```

## Architecture & Conventions
- Component files: `PascalCase.tsx` (or `.astro`)
- Page files: `kebab-case` or Next.js file-system routing
- Co-locate styles with components (CSS Modules or Tailwind)
- Group by feature, not by type: `features/hero/`, `features/courses/`, not `components/`, `styles/`
- Keep components under 200 lines — extract sub-components early

## Build and Test
```bash
npm install       # Install dependencies
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build locally
```

## Quality Bar
Before any PR/commit:
- [ ] Renders correctly on 375px, 768px, 1280px, 1440px widths
- [ ] Lighthouse performance ≥ 90, accessibility ≥ 95
- [ ] No console errors or warnings
- [ ] All interactive elements keyboard-navigable
- [ ] Images use next/image or have explicit width/height (no CLS)

## Available Custom Agents
- **@frontend-architect** — Component design, layout systems, CSS architecture
- **@fullstack-engineer** — API routes, data fetching, forms, auth, deployment
- **@ui-polisher** — Visual refinement, animations, micro-interactions, design tokens

## Available Skills
- `/modern-web-ui` — Building beautiful, modern UI components
- `/responsive-design` — Mobile-first layouts, fluid typography, container queries
- `/web-accessibility` — WCAG compliance, ARIA patterns, keyboard navigation
- `/web-performance` — Core Web Vitals optimization, lazy loading, bundle analysis
