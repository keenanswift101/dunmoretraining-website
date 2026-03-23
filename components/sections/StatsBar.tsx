'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    target: 4,
    suffix: '',
    label: 'Locations',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    target: 30,
    suffix: '+',
    label: 'Programs',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5Z" />
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M9 7h6" />
        <path d="M9 11h4" />
      </svg>
    ),
  },
  {
    target: 20,
    suffix: '+',
    label: 'Corporate Clients',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
      </svg>
    ),
  },
  {
    target: 5,
    suffix: '',
    label: 'Accreditations',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M12 2 L14.9 8.6 22 9.3 16.8 13.8 18.2 21 12 17.3 5.8 21 7.2 13.8 2 9.3 9.1 8.6Z" />
      </svg>
    ),
  },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1400
          const startTime = performance.now()

          function tick(now: number) {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span
      ref={ref}
      className="font-display font-bold text-accent leading-none tabular-nums"
      style={{ fontSize: 'var(--text-4xl)' }}
    >
      {count}
      <span className="text-3xl">{suffix}</span>
    </span>
  )
}

export function StatsBar() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary"
      aria-label="Company statistics"
    >
      {/* Decorative top accent line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0" aria-hidden="true" />

      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,162,39,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Decorative grid dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul
          role="list"
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {stats.map(({ target, suffix, label, icon }, i) => (
            <li
              key={label}
              className="group relative flex flex-col items-center text-center px-3 sm:px-6 py-8 sm:py-12 transition-colors hover:bg-white/[0.04]"
            >
              {/* Vertical divider (not on first item per row) */}
              {i > 0 && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block h-16 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
                  aria-hidden="true"
                />
              )}

              {/* Icon */}
              <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-transform group-hover:scale-110">
                {icon}
              </div>

              <CountUp target={target} suffix={suffix} />

              <span className="mt-2 sm:mt-3 text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/70">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Decorative bottom accent line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0" aria-hidden="true" />
    </section>
  )
}

