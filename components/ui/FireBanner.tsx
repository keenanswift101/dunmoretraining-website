'use client'

import { useEffect, useState } from 'react'

interface FirePoint {
  id: string
  zone: string
  confidence: string
  acquiredAt: string
  frp: number
}

interface FireData {
  fires: FirePoint[]
  count: number
  updatedAt: string
  error?: string
}

function timeAgo(iso: string): string {
  if (!iso) return ''
  const diff = Date.now() - new Date(iso).getTime()
  const mins = Math.floor(diff / 60_000)
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  return `${Math.floor(hrs / 24)}d ago`
}

function severityClasses(confidence: string): string {
  if (confidence === 'High') return 'bg-red-500'
  if (confidence === 'Moderate') return 'bg-amber-500'
  return 'bg-yellow-400'
}

export function FireBanner() {
  const [data, setData] = useState<FireData | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch('/api/fires')
        if (!res.ok) {
          if (!cancelled) { setData({ fires: [], count: 0, updatedAt: new Date().toISOString(), error: 'upstream' }); setLoaded(true) }
          return
        }
        const json: FireData = await res.json()
        if (!cancelled) { setData(json); setLoaded(true) }
      } catch {
        if (!cancelled) { setData({ fires: [], count: 0, updatedAt: new Date().toISOString(), error: 'fetch_failed' }); setLoaded(true) }
      }
    }

    load()
    const interval = setInterval(load, 600_000)
    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  // Don't render until first fetch completes
  if (!loaded || !data) return null

  const hasFires = data.count > 0

  // Deduplicate by zone
  const zoneMap = new Map<string, { count: number; confidence: string; latest: string; frp: number }>()
  for (const f of data.fires) {
    const existing = zoneMap.get(f.zone)
    if (!existing) {
      zoneMap.set(f.zone, { count: 1, confidence: f.confidence, latest: f.acquiredAt, frp: f.frp })
    } else {
      existing.count++
      if (f.confidence === 'High') existing.confidence = 'High'
      else if (f.confidence === 'Moderate' && existing.confidence !== 'High') existing.confidence = 'Moderate'
      if (f.acquiredAt > existing.latest) existing.latest = f.acquiredAt
      existing.frp = Math.max(existing.frp, f.frp)
    }
  }

  const zones = Array.from(zoneMap.entries()).map(([zone, info]) => ({ zone, ...info }))

  const marqueeItems = zones.map((z) => (
    <span key={z.zone} className="inline-flex items-center gap-2 px-6 whitespace-nowrap">
      <span className={`inline-block w-2 h-2 rounded-full ${severityClasses(z.confidence)} shrink-0`} aria-hidden="true" />
      <span className="font-semibold text-white/95">{z.zone}</span>
      <span className="text-white/50 font-normal">
        {z.count} hotspot{z.count > 1 ? 's' : ''}
      </span>
      <span className="text-white/40 text-xs">{z.confidence}</span>
      {z.latest && <span className="text-white/30 text-xs">{timeAgo(z.latest)}</span>}
    </span>
  ))

  return (
    <div
      className="fixed top-20 left-0 right-0 z-40 bg-[#1a1a1a] border-b border-white/5"
      role="region"
      aria-label="Field fire alerts near Cape Town"
    >
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Static label */}
        <div className={`flex items-center gap-1.5 sm:gap-2 pl-3 sm:pl-4 md:pl-6 pr-2.5 sm:pr-4 py-2 shrink-0 self-stretch ${
          hasFires ? 'bg-red-600/90' : 'bg-emerald-600/90'
        }`}>
          {hasFires ? (
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white shrink-0" aria-hidden="true">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V7a1 1 0 1 1 2 0v6Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white shrink-0" aria-hidden="true">
              <path
                d="M9 12l2 2 4-4m6 2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          )}
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white whitespace-nowrap">
            {hasFires ? 'Live Fires' : 'Fire Watch'}
          </span>
        </div>

        {/* Content area */}
        {hasFires ? (
          <>
            <div className="overflow-hidden flex-1 py-2">
              <div className="fire-marquee flex text-xs">
                <div className="fire-marquee-track flex shrink-0">{marqueeItems}</div>
                <div className="fire-marquee-track flex shrink-0" aria-hidden="true">{marqueeItems}</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-1.5 px-4 sm:px-6 shrink-0">
              <span className="text-[11px] font-medium text-white/40 uppercase tracking-wide">
                {data.count} total
              </span>
            </div>
          </>
        ) : (
          <div className="flex-1 py-2 px-3 sm:px-4 md:px-6 min-w-0">
            <span className="text-[10px] sm:text-xs text-white/60 line-clamp-1">
              No active fires near Cape Town<span className="hidden sm:inline"> — satellite data updated every 10 min via NASA FIRMS</span>
            </span>
          </div>
        )}
      </div>

      {/* Gradient fade edges */}
      {hasFires && (
        <>
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#1a1a1a] to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#1a1a1a] to-transparent" aria-hidden="true" />
        </>
      )}
    </div>
  )
}
