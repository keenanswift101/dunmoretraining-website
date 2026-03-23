# Design System Reference

## Full Token Catalogue

### Colour Palette
```css
:root {
  /* Brand */
  --color-primary-50:  #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;  /* Main */
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;

  /* Accent (warm) */
  --color-accent-400: #fbbf24;
  --color-accent-500: #f59e0b;   /* Main */
  --color-accent-600: #d97706;

  /* Neutrals */
  --color-neutral-50:  #f8fafc;
  --color-neutral-100: #f1f5f9;
  --color-neutral-200: #e2e8f0;
  --color-neutral-300: #cbd5e1;
  --color-neutral-400: #94a3b8;
  --color-neutral-500: #64748b;
  --color-neutral-600: #475569;
  --color-neutral-700: #334155;
  --color-neutral-800: #1e293b;
  --color-neutral-900: #0f172a;

  /* Semantic Aliases */
  --color-primary:      var(--color-primary-600);
  --color-primary-dark: var(--color-primary-700);
  --color-accent:       var(--color-accent-500);
  --color-surface:      #ffffff;
  --color-surface-alt:  var(--color-neutral-50);
  --color-surface-2:    var(--color-neutral-100);
  --color-text:         var(--color-neutral-900);
  --color-text-muted:   var(--color-neutral-500);
  --color-border:       var(--color-neutral-200);
  --color-border-focus: var(--color-primary-400);

  /* Status */
  --color-success: #16a34a;
  --color-warning: #d97706;
  --color-error:   #dc2626;
  --color-info:    #0284c7;
}
```

### Spacing Scale (4pt grid)
```css
:root {
  --space-1:  0.25rem;   /* 4px */
  --space-2:  0.5rem;    /* 8px */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-5:  1.25rem;   /* 20px */
  --space-6:  1.5rem;    /* 24px */
  --space-8:  2rem;      /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
  --space-32: 8rem;      /* 128px */
}
```

### Typography Scale
```css
:root {
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-display: 'Cal Sans', 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Fluid type scale */
  --text-xs:   clamp(0.75rem,  1.5vw,  0.875rem);
  --text-sm:   clamp(0.875rem, 1.75vw, 1rem);
  --text-base: clamp(1rem,     2vw,    1.125rem);
  --text-lg:   clamp(1.125rem, 2.25vw, 1.375rem);
  --text-xl:   clamp(1.25rem,  2.5vw,  1.75rem);
  --text-2xl:  clamp(1.5rem,   3vw,    2.25rem);
  --text-3xl:  clamp(2rem,     4vw,    3rem);
  --text-4xl:  clamp(2.5rem,   5vw,    3.75rem);
  --text-hero: clamp(3rem,     7vw,    5.5rem);

  /* Line heights */
  --leading-tight:  1.2;
  --leading-snug:   1.35;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;

  /* Font weights */
  --font-normal:    400;
  --font-medium:    500;
  --font-semibold:  600;
  --font-bold:      700;
  --font-extrabold: 800;
}
```

### Border Radii
```css
:root {
  --radius-xs:   3px;
  --radius-sm:   6px;
  --radius-md:   12px;
  --radius-lg:   20px;
  --radius-xl:   28px;
  --radius-2xl:  40px;
  --radius-full: 9999px;
}
```

### Elevation / Shadows
```css
:root {
  --shadow-xs: 0 1px 2px rgba(0,0,0,.06);
  --shadow-sm: 0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.06);
  --shadow-md: 0 4px 16px rgba(0,0,0,.10), 0 2px 4px rgba(0,0,0,.06);
  --shadow-lg: 0 12px 40px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
  --shadow-xl: 0 24px 64px rgba(0,0,0,.14), 0 8px 16px rgba(0,0,0,.06);
  --shadow-inner: inset 0 2px 4px rgba(0,0,0,.06);
}
```

### Transitions
```css
:root {
  --duration-fast:   100ms;
  --duration-normal: 200ms;
  --duration-slow:   300ms;
  --duration-slower: 500ms;
  --ease-in:     cubic-bezier(0.4, 0, 1, 1);
  --ease-out:    cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## Tailwind Config (design-token bridge)
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#2563eb', dark: '#1d4ed8' },
        accent:  { DEFAULT: '#f59e0b' },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px', md: '12px', lg: '20px', xl: '28px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,.08)',
        md: '0 4px 16px rgba(0,0,0,.10)',
        lg: '0 12px 40px rgba(0,0,0,.12)',
      },
    },
  },
}
```
