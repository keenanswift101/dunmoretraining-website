# Component Templates

## Hero Section
```tsx
// features/hero/Hero.tsx
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__container">
        <div className="hero__badge">Professional Training</div>
        <h1 id="hero-heading" className="hero__title">
          Unlock Your Potential<br />
          <span className="hero__title-accent">with Expert Training</span>
        </h1>
        <p className="hero__description">
          Industry-leading courses designed to accelerate your career
          and build real-world skills.
        </p>
        <div className="hero__actions">
          <a href="/courses" className="btn btn--primary btn--lg">
            Browse Courses
          </a>
          <a href="/about" className="btn btn--ghost btn--lg">
            Learn More →
          </a>
        </div>
        <div className="hero__stats" aria-label="Key statistics">
          <div className="hero__stat"><strong>500+</strong><span>Graduates</span></div>
          <div className="hero__stat"><strong>95%</strong><span>Pass Rate</span></div>
          <div className="hero__stat"><strong>20+</strong><span>Courses</span></div>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <!-- Hero image/illustration -->
      </div>
    </section>
  )
}
```

```css
/* features/hero/Hero.module.css */
.hero {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100svh;
  padding-inline: var(--space-6);
  padding-block: clamp(6rem, 12vw, 10rem);
  background: linear-gradient(135deg,
    oklch(97% 0.015 250) 0%,
    oklch(94% 0.03 230) 100%
  );
}
@media (min-width: 1024px) {
  .hero { grid-template-columns: 1fr 1fr; align-items: center; gap: var(--space-16); }
}
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3);
  background: var(--color-primary-50);
  color: var(--color-primary-700);
  border: 1px solid var(--color-primary-200);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-6);
}
.hero__title {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  line-height: var(--leading-tight);
  font-weight: var(--font-extrabold);
  color: var(--color-text);
  margin: 0 0 var(--space-6);
}
.hero__title-accent { color: var(--color-primary); }
.hero__description {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  max-width: 52ch;
  margin-bottom: var(--space-8);
}
.hero__actions { display: flex; gap: var(--space-4); flex-wrap: wrap; }
.hero__stats {
  display: flex;
  gap: var(--space-8);
  margin-top: var(--space-10);
  padding-top: var(--space-8);
  border-top: 1px solid var(--color-border);
}
.hero__stat { display: flex; flex-direction: column; gap: var(--space-1); }
.hero__stat strong { font-size: var(--text-2xl); font-weight: var(--font-bold); color: var(--color-text); }
.hero__stat span { font-size: var(--text-sm); color: var(--color-text-muted); }
```

---

## Course Card Grid
```tsx
// features/courses/CourseGrid.tsx
type Course = {
  id: string
  title: string
  description: string
  category: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  image: string
  href: string
}

export function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <section className="course-section" aria-labelledby="courses-heading">
      <h2 id="courses-heading" className="section-title">Our Courses</h2>
      <ul className="course-grid" role="list">
        {courses.map(course => (
          <li key={course.id}>
            <CourseCard course={course} />
          </li>
        ))}
      </ul>
    </section>
  )
}

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <div className="course-card__image">
        <img src={course.image} alt="" width={400} height={225} loading="lazy" />
        <span className="course-card__badge">{course.category}</span>
      </div>
      <div className="course-card__body">
        <h3 className="course-card__title">{course.title}</h3>
        <p className="course-card__desc">{course.description}</p>
        <div className="course-card__meta">
          <span>{course.duration}</span>
          <span>{course.level}</span>
        </div>
        <a href={course.href} className="btn btn--primary btn--sm course-card__cta">
          View Course
        </a>
      </div>
    </article>
  )
}
```

```css
/* features/courses/CourseGrid.module.css */
.course-grid {
  display: grid;
  gap: clamp(1rem, 3vw, 2rem);
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  list-style: none;
  padding: 0;
  margin: 0;
}
.course-card {
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 220ms var(--ease-out), box-shadow 220ms var(--ease-out);
}
.course-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
.course-card__image { position: relative; aspect-ratio: 16/9; overflow: hidden; }
.course-card__image img { width: 100%; height: 100%; object-fit: cover; }
.course-card__badge {
  position: absolute; top: var(--space-3); left: var(--space-3);
  background: var(--color-primary); color: white;
  padding: 2px var(--space-2); border-radius: var(--radius-full);
  font-size: var(--text-xs); font-weight: var(--font-semibold);
}
.course-card__body { flex: 1; display: flex; flex-direction: column; gap: var(--space-3); padding: var(--space-6); }
.course-card__title { font-size: var(--text-lg); font-weight: var(--font-semibold); color: var(--color-text); margin: 0; }
.course-card__desc { font-size: var(--text-sm); color: var(--color-text-muted); line-height: var(--leading-relaxed); flex: 1; }
.course-card__meta { display: flex; gap: var(--space-4); font-size: var(--text-xs); color: var(--color-text-muted); }
.course-card__cta { margin-top: auto; align-self: flex-start; }
```

---

## Button System
```css
/* global/buttons.css */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  border: none;
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  cursor: pointer;
  text-decoration: none;
  transition: all 150ms var(--ease-out);
  white-space: nowrap;
}
.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}

/* Variants */
.btn--primary {
  background: var(--color-primary);
  color: white;
}
.btn--primary:hover { background: var(--color-primary-dark); transform: translateY(-1px); }
.btn--primary:active { transform: translateY(0); }

.btn--secondary {
  background: var(--color-surface);
  color: var(--color-primary);
  border: 1.5px solid var(--color-primary);
}
.btn--secondary:hover { background: var(--color-primary-50); }

.btn--ghost {
  background: transparent;
  color: var(--color-text);
}
.btn--ghost:hover { background: var(--color-surface-alt); }

/* Sizes */
.btn--sm  { padding: var(--space-2) var(--space-4); font-size: var(--text-sm); }
.btn--lg  { padding: var(--space-4) var(--space-8); font-size: var(--text-lg); }
```

---

## Navigation Bar
```tsx
// features/nav/NavBar.tsx
export function NavBar() {
  return (
    <header className="navbar" role="banner">
      <nav className="navbar__inner" aria-label="Main navigation">
        <a href="/" className="navbar__logo" aria-label="Dunmore Training — Home">
          <img src="/logo.svg" alt="Dunmore Training" width={140} height={36} />
        </a>
        <ul className="navbar__links" role="list">
          <li><a href="/courses">Courses</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <a href="/courses" className="btn btn--primary btn--sm navbar__cta">
          Get Started
        </a>
        <button
          className="navbar__toggle"
          aria-label="Open navigation menu"
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true">☰</span>
        </button>
      </nav>
    </header>
  )
}
```

```css
/* features/nav/NavBar.module.css */
.navbar {
  position: sticky; top: 0; z-index: 100;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-border);
}
.navbar__inner {
  max-width: 1280px; margin-inline: auto;
  padding-inline: var(--space-6);
  height: 4rem;
  display: flex; align-items: center; gap: var(--space-8);
}
.navbar__links {
  display: none; list-style: none; padding: 0; margin: 0;
  gap: var(--space-6); margin-left: auto;
}
@media (min-width: 768px) {
  .navbar__links { display: flex; }
  .navbar__toggle { display: none; }
}
.navbar__links a {
  color: var(--color-text-muted); font-weight: var(--font-medium);
  text-decoration: none;
  transition: color 150ms;
}
.navbar__links a:hover { color: var(--color-primary); }
.navbar__cta { display: none; }
@media (min-width: 768px) { .navbar__cta { display: flex; } }
.navbar__toggle {
  margin-left: auto; background: none; border: none; cursor: pointer;
  padding: var(--space-2); font-size: var(--text-xl); color: var(--color-text);
}
```
