---
name: web-accessibility
description: "Implement WCAG 2.1 AA accessibility compliance, ARIA patterns, keyboard navigation, focus management, screen reader support, and accessible forms. Use when adding ARIA roles/labels, fixing keyboard traps, making modals accessible, implementing skip links, ensuring colour contrast, writing accessible forms with error states, or auditing components for accessibility issues."
argument-hint: "Describe the accessibility issue or component to make accessible (e.g. 'modal dialog', 'navigation menu', 'form with errors', 'custom dropdown')"
---

# Web Accessibility (WCAG 2.1 AA)

## When to Use
- Adding ARIA roles or labels to custom interactive components
- Fixing keyboard navigation issues or focus traps
- Building accessible modals, dropdowns, accordions, or tabs
- Writing forms with proper error announcements
- Auditing a component for accessibility compliance
- Implementing skip navigation and landmark regions

## WCAG 2.1 AA Core Requirements
| Criterion | Requirement |
|-----------|-------------|
| 1.1.1 | Every `<img>` has meaningful `alt`; decorative images use `alt=""` |
| 1.3.1 | Semantic HTML conveys structure (headings, lists, tables) |
| 1.4.3 | Body text contrast ≥ 4.5:1; large text ≥ 3:1 |
| 1.4.4 | Text scales up to 200% without breaking layout |
| 2.1.1 | All functionality operable via keyboard |
| 2.4.3 | Focus order is logical and meaningful |
| 2.4.7 | Focus indicator always visible |
| 3.1.1 | `lang` attribute on `<html>` |
| 3.3.1 | Form errors are identified and described in text |
| 4.1.2 | All UI components have accessible name and role |

## Step-by-Step Process

### 1. Landmark Regions
Every page must have correct landmark regions:
```html
<header role="banner">...</header>
<nav aria-label="Main navigation">...</nav>
<main id="main-content">...</main>
<aside aria-label="Related courses">...</aside>
<footer role="contentinfo">...</footer>
```

### 2. Skip Navigation Link
```html
<!-- First element in <body> -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<style>
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  background: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  z-index: 9999;
  transition: top 200ms;
}
.skip-link:focus { top: 1rem; }
</style>
```

### 3. Focus Management
```css
/* Always visible focus ring */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
  border-radius: 2px;
}

/* Remove default only when replacing */
:focus:not(:focus-visible) { outline: none; }
```

### 4. Accessible Modal Dialog
```html
<dialog
  role="dialog"
  aria-modal="true"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-desc"
>
  <h2 id="dialog-title">Enroll in Course</h2>
  <p id="dialog-desc">Complete your enrollment details below.</p>
  <!-- content -->
  <button autofocus>Confirm Enrollment</button>
  <button aria-label="Close dialog">✕</button>
</dialog>
```
JS must: trap focus inside dialog, return focus to trigger on close.

### 5. Accessible Form with Error States
```html
<div class="field">
  <label for="email">Email address <span aria-hidden="true">*</span></label>
  <input
    id="email"
    type="email"
    name="email"
    autocomplete="email"
    required
    aria-required="true"
    aria-describedby="email-error"
    aria-invalid="true"
  />
  <span id="email-error" role="alert" class="error-message">
    Please enter a valid email address.
  </span>
</div>
```

### 6. Interactive Components (ARIA Patterns)

| Component | Role | Key interactions |
|-----------|------|-----------------|
| Accordion | `button[aria-expanded]` | Enter/Space toggles |
| Tabs | `tablist`, `tab[aria-selected]`, `tabpanel` | Arrow keys navigate tabs |
| Dropdown | `button[aria-haspopup="listbox"]`, `listbox`, `option` | Arrow keys, Enter, Escape |
| Modal | `dialog[aria-modal="true"]` | Focus trap, Escape closes |
| Tooltip | `[role="tooltip"]`, trigger has `aria-describedby` | Hover + focus show |

### 7. Images and Icons
```html
<!-- Informative image -->
<img src="trainer.jpg" alt="Sarah Johnson, lead trainer at Dunmore Training" />

<!-- Decorative image -->
<img src="divider.svg" alt="" aria-hidden="true" />

<!-- Icon with meaning -->
<button>
  <svg aria-hidden="true" focusable="false"><!-- icon --></svg>
  Download Course Guide
</button>

<!-- Icon-only button -->
<button aria-label="Open navigation menu">
  <svg aria-hidden="true" focusable="false"><!-- hamburger --></svg>
</button>
```

## Quality Checklist
- [ ] `<html lang="en">` set
- [ ] Skip link implemented
- [ ] All landmark regions present
- [ ] Heading hierarchy logical (h1 → h2 → h3, no skipping)
- [ ] Focus visible on all interactive elements
- [ ] All form fields have associated `<label>`
- [ ] Form errors announced via `role="alert"` or `aria-live`
- [ ] Colour contrast ≥ 4.5:1 for body, ≥ 3:1 for large text
- [ ] No keyboard traps (except intentional modal traps)
- [ ] All SVG icons aria-hidden when decorative
- [ ] Animations respect `prefers-reduced-motion`
