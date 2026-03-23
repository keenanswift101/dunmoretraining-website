---
name: web-performance
description: "Optimize Core Web Vitals (LCP, CLS, INP/FID), implement lazy loading, reduce bundle size, optimize images and fonts, improve Time to First Byte, and achieve Lighthouse performance scores ≥ 90. Use when a site is slow, Lighthouse score is low, images are unoptimized, fonts cause layout shift, JavaScript bundles are too large, or when auditing and fixing performance regressions."
argument-hint: "Describe the performance problem or area to optimize (e.g. 'slow LCP', 'large JS bundle', 'layout shift on load', 'slow font loading')"
---

# Web Performance

## When to Use
- Lighthouse performance score < 90
- LCP (Largest Contentful Paint) > 2.5s
- CLS (Cumulative Layout Shift) > 0.1
- INP (Interaction to Next Paint) > 200ms
- Images, fonts, or JS bundles are unoptimized
- Core Web Vitals failing in Search Console

## Core Web Vitals Targets
| Metric | Good | Needs Iron | Poor |
|--------|------|------------|------|
| LCP | ≤ 2.5s | 2.5–4s | > 4s |
| CLS | ≤ 0.1 | 0.1–0.25 | > 0.25 |
| INP | ≤ 200ms | 200–500ms | > 500ms |

## Step-by-Step Optimization Process

### 1. Audit First
Before optimizing, measure with:
```bash
# Run Lighthouse via CLI
npx lighthouse https://your-url.com --view

# Or use the Lighthouse tab in Chrome DevTools
# Run in private/incognito mode with extensions disabled
```

Identify the top 3 issues — fix those first.

### 2. Image Optimization (Biggest Win)
Images are the #1 cause of slow LCP.

```html
<!-- ✅ Modern: webp + lazy + explicit size -->
<img
  src="hero.webp"
  srcset="hero-480.webp 480w, hero-768.webp 768w, hero-1280.webp 1280w"
  sizes="(max-width: 640px) 100vw, 1280px"
  alt="Training course in session"
  width="1280" height="720"
  loading="eager"   <!-- Hero images: eager. Below fold: lazy -->
  decoding="async"
  fetchpriority="high"  <!-- Hero LCP image only -->
/>
```

In Next.js:
```tsx
import Image from 'next/image'

// LCP hero image
<Image
  src="/hero.jpg"
  alt="Training course"
  width={1280}
  height={720}
  priority          // Preloads LCP image
  sizes="100vw"
/>

// Below-fold image
<Image
  src="/course.jpg"
  alt="Course content"
  width={400}
  height={300}
  sizes="(max-width: 768px) 100vw, 400px"
/>
```

### 3. Font Loading (Fix CLS + LCP)
```html
<!-- Preconnect to font origin -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Preload critical font file -->
<link
  rel="preload"
  href="/fonts/inter-var.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```

```css
/* Prevent layout shift with size-adjust */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-var.woff2') format('woff2');
  font-display: swap;    /* Show fallback immediately, swap when loaded */
  font-weight: 100 900;
  font-style: normal;
}

/* Fallback font that matches metrics of Inter */
body { font-family: 'Inter', system-ui, sans-serif; }
```

In Next.js, use `next/font` — it auto-hosts fonts, eliminates FOUT, and sets `size-adjust`:
```tsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], display: 'swap' })
```

### 4. JavaScript Bundle Optimization
```bash
# Analyze bundle size
npx @next/bundle-analyzer
# or
npx vite-bundle-visualizer
```

Tactics:
- **Dynamic imports** for below-fold, non-critical components:
  ```tsx
  const HeavyChart = dynamic(() => import('./HeavyChart'), { ssr: false })
  ```
- **Tree-shaking**: Import named exports, not entire libraries
  ```ts
  // ✅
  import { format } from 'date-fns'
  // ❌
  import * as dateFns from 'date-fns'
  ```
- **Replace heavy deps**: `lodash` → native JS, `moment` → `date-fns`, `axios` → `fetch`

### 5. Eliminate Layout Shift (CLS)
CLS causes: images without dimensions, dynamically injected content, font swapping, ads.

```html
<!-- Always set width + height on images -->
<img width="800" height="450" ... />
```

```css
/* Reserve space for lazy-loaded content */
.image-wrapper {
  aspect-ratio: 16 / 9;
  background: var(--color-surface-alt);  /* placeholder */
}
```

### 6. Critical CSS and Rendering
```html
<!-- Inline critical above-fold CSS in <head> -->
<style>
  /* Minimal styles for hero section — prevents render-blocking */
  body { margin: 0; font-family: system-ui, sans-serif; }
  .hero { min-height: 100svh; display: grid; place-items: center; }
</style>

<!-- Defer non-critical CSS -->
<link rel="stylesheet" href="/styles/below-fold.css" media="print" onload="this.media='all'" />
```

### 7. Caching Headers (Vercel / Next.js)
```js
// next.config.js
module.exports = {
  async headers() {
    return [{
      source: '/_next/static/:path*',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    }, {
      source: '/fonts/:path*',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    }]
  }
}
```

## Quality Checklist
- [ ] Lighthouse performance ≥ 90 (mobile and desktop)
- [ ] LCP image has `fetchpriority="high"` or `priority` prop
- [ ] All images have explicit `width` and `height`
- [ ] Fonts use `font-display: swap` or `next/font`
- [ ] No render-blocking scripts in `<head>` without `defer`/`async`
- [ ] Bundle analyzer run; no obvious large dependencies
- [ ] Dynamic imports used for heavy below-fold components
- [ ] Sitemap and robots.txt present for SEO
