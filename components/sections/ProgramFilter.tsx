'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { programs, programCategories } from '@/data/programs'

const categoryTabs = [
  { key: 'all', label: 'All Programmes' },
  { key: 'first-aid', label: 'First Aid' },
  { key: 'health-safety', label: 'Health & Safety' },
  { key: 'fire-fighting', label: 'Fire Fighting' },
  { key: 'forestry', label: 'Forestry & Agriculture' },
  { key: 'other', label: 'Other' },
] as const

function ProgramFilterInner() {
  const searchParams = useSearchParams()
  const initCat = searchParams.get('category') ?? 'all'
  const [active, setActive] = useState<string>(() =>
    categoryTabs.some((t) => t.key === initCat) ? initCat : 'all',
  )

  const filtered = useMemo(
    () => (active === 'all' ? programs : programs.filter((p) => p.category === active)),
    [active],
  )

  const grouped = useMemo(() => {
    const map = new Map<string, typeof programs>()
    for (const p of filtered) {
      if (!map.has(p.category)) map.set(p.category, [])
      map.get(p.category)!.push(p)
    }
    return Array.from(map.entries())
  }, [filtered])

  return (
    <>
      {/* ── Filter Tabs ──────────────────────────────────── */}
      <div
        className="bg-white rounded-2xl border border-slate-200 shadow-sm p-1.5 mb-10 overflow-x-auto"
        role="tablist"
        aria-label="Filter programmes by category"
      >
        <div className="flex gap-1 min-w-max sm:min-w-0 sm:flex-wrap">
          {categoryTabs.map(({ key, label }) => {
            const isActive = active === key
            const count =
              key === 'all'
                ? programs.length
                : programs.filter((p) => p.category === key).length
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                role="tab"
                aria-selected={isActive}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-slate-100 text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}
              >
                {label}
                <span
                  className={`text-xs font-bold tabular-nums ${
                    isActive ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Grouped Results ──────────────────────────────── */}
      {grouped.map(([catKey, catPrograms]) => {
        const config = programCategories[catKey as keyof typeof programCategories]
        return (
          <div key={catKey} className="mb-14">
            {active === 'all' && (
              <div className="mb-7 flex items-center gap-4">
                <div
                  className={`w-1 h-7 rounded-full flex-shrink-0 ${config?.accentBar ?? 'bg-slate-300'}`}
                  aria-hidden="true"
                />
                <h2 className="font-display font-bold text-slate-800 text-lg">
                  {config?.label || catKey}
                </h2>
                <div className="flex-1 h-px bg-slate-200 hidden sm:block" />
                <span className="text-slate-400 text-xs tabular-nums flex-shrink-0">
                  {catPrograms.length} {catPrograms.length === 1 ? 'programme' : 'programmes'}
                </span>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {catPrograms.map((p) => (
                <Link
                  key={p.slug}
                  href={`/programs/${p.slug}`}
                  className="glass-card group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(26,47,94,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-4 focus-visible:ring-offset-surface-alt"
                  style={{
                    background: 'linear-gradient(135deg, #1a2f5e 0%, #2a4a8e 100%)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    boxShadow:
                      '0 4px 24px rgba(26,47,94,0.20), inset 0 1px 0 rgba(255,255,255,0.07)',
                  }}
                >
                  {/* Shimmer sweep overlay */}
                  <span className="glass-card-shimmer" aria-hidden="true" />

                  <div className="relative z-10 p-5 sm:p-6 flex-1 flex flex-col">
                    {/* Popular badge */}
                    {p.popular && (
                      <span className="inline-flex items-center self-start gap-1 text-[10px] font-bold uppercase tracking-widest text-accent mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                        Most Popular
                      </span>
                    )}

                    {/* Title */}
                    <h3 className="font-display font-bold text-white text-base leading-snug mb-3">
                      {p.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/65 text-sm leading-relaxed flex-1 line-clamp-3">
                      {p.description}
                    </p>

                    {/* Meta row */}
                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3 text-white/50">
                        {p.duration && (
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-3.5 h-3.5 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {p.duration}
                          </span>
                        )}
                        {p.nqfLevel && <span>NQF {p.nqfLevel}</span>}
                      </div>
                      <span className="flex items-center gap-1 text-white/80 font-semibold group-hover:translate-x-0.5 transition-transform">
                        View
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )
      })}

      {filtered.length === 0 && (
        <p className="text-center text-slate-400 py-12">No programmes found in this category.</p>
      )}
    </>
  )
}

export function ProgramFilter() {
  return (
    <Suspense
      fallback={
        <div className="space-y-5">
          <div className="h-14 rounded-2xl bg-slate-200 animate-pulse" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-52 rounded-2xl bg-slate-200 animate-pulse" />
            ))}
          </div>
        </div>
      }
    >
      <ProgramFilterInner />
    </Suspense>
  )
}
