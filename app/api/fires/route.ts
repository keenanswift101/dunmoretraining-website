import { NextResponse } from 'next/server'

/**
 * Cape Town bounding box — covers metro + surrounding wildland areas
 * where field/vegetation fires are common.
 */
const CAPE_TOWN_BOUNDS = {
  latMin: -34.4,
  latMax: -33.4,
  lonMin: 18.2,
  lonMax: 19.3,
}

/** Named sub-regions within the bounding box for human-readable locations. */
const ZONES: { name: string; latMin: number; latMax: number; lonMin: number; lonMax: number }[] = [
  { name: 'Table Mountain area',    latMin: -34.02, latMax: -33.90, lonMin: 18.38, lonMax: 18.46 },
  { name: 'Cape Flats',             latMin: -34.05, latMax: -33.92, lonMin: 18.50, lonMax: 18.70 },
  { name: 'Helderberg',             latMin: -34.12, latMax: -34.00, lonMin: 18.78, lonMax: 18.95 },
  { name: 'Stellenbosch',           latMin: -34.00, latMax: -33.85, lonMin: 18.80, lonMax: 18.95 },
  { name: 'Somerset West',          latMin: -34.10, latMax: -34.03, lonMin: 18.82, lonMax: 18.90 },
  { name: 'Khayelitsha',            latMin: -34.06, latMax: -34.00, lonMin: 18.65, lonMax: 18.75 },
  { name: 'Mitchells Plain',        latMin: -34.08, latMax: -34.02, lonMin: 18.58, lonMax: 18.68 },
  { name: 'Northern Suburbs',       latMin: -33.92, latMax: -33.82, lonMin: 18.55, lonMax: 18.72 },
  { name: 'Paarl / Wellington',     latMin: -33.80, latMax: -33.60, lonMin: 18.90, lonMax: 19.15 },
  { name: 'Atlantis',               latMin: -33.70, latMax: -33.55, lonMin: 18.40, lonMax: 18.55 },
  { name: 'Franschhoek',            latMin: -33.95, latMax: -33.82, lonMin: 19.05, lonMax: 19.20 },
  { name: 'Muizenberg / False Bay', latMin: -34.15, latMax: -34.05, lonMin: 18.45, lonMax: 18.58 },
  { name: 'Hout Bay',               latMin: -34.07, latMax: -34.00, lonMin: 18.33, lonMax: 18.40 },
  { name: 'Durbanville',            latMin: -33.88, latMax: -33.80, lonMin: 18.60, lonMax: 18.72 },
  { name: 'Grabouw / Elgin',        latMin: -34.25, latMax: -34.08, lonMin: 19.00, lonMax: 19.20 },
]

function resolveZone(lat: number, lon: number): string {
  for (const z of ZONES) {
    if (lat >= z.latMin && lat <= z.latMax && lon >= z.lonMin && lon <= z.lonMax) {
      return z.name
    }
  }
  // Fallback: cardinal direction from city centre (-33.9258, 18.4232)
  const ns = lat < -33.9258 ? 'South' : 'North'
  const ew = lon > 18.4232 ? 'East' : 'West'
  return `Cape Town ${ns}${ew}`
}

function confidenceLabel(conf: string): string {
  if (conf === 'h' || conf === 'high') return 'High'
  if (conf === 'n' || conf === 'nominal') return 'Moderate'
  return 'Low'
}

export interface FirePoint {
  id: string
  lat: number
  lon: number
  zone: string
  confidence: string
  brightness: number
  frp: number
  acquiredAt: string
  satellite: string
}

const FIRMS_URL =
  'https://firms.modaps.eosdis.nasa.gov/data/active_fire/suomi-npp-viirs-c2/csv/SUOMI_VIIRS_C2_South_Africa_24h.csv'

export async function GET() {
  try {
    const res = await fetch(FIRMS_URL, {
      next: { revalidate: 600 }, // cache 10 min
    })

    if (!res.ok) {
      return NextResponse.json({ fires: [], updatedAt: new Date().toISOString(), error: 'upstream' }, { status: 502 })
    }

    const csv = await res.text()
    const lines = csv.trim().split('\n')
    if (lines.length < 2) {
      return NextResponse.json({ fires: [], updatedAt: new Date().toISOString() })
    }

    const headers = lines[0].split(',')
    const iLat   = headers.indexOf('latitude')
    const iLon   = headers.indexOf('longitude')
    const iBri   = headers.indexOf('bright_ti4')
    const iDate  = headers.indexOf('acq_date')
    const iTime  = headers.indexOf('acq_time')
    const iConf  = headers.indexOf('confidence')
    const iFrp   = headers.indexOf('frp')
    const iSat   = headers.indexOf('satellite')

    const fires: FirePoint[] = []

    for (let i = 1; i < lines.length; i++) {
      const cols = lines[i].split(',')
      const lat = parseFloat(cols[iLat])
      const lon = parseFloat(cols[iLon])

      if (
        lat < CAPE_TOWN_BOUNDS.latMin || lat > CAPE_TOWN_BOUNDS.latMax ||
        lon < CAPE_TOWN_BOUNDS.lonMin || lon > CAPE_TOWN_BOUNDS.lonMax
      ) continue

      const time = cols[iTime]?.padStart(4, '0') ?? '0000'
      const dateStr = cols[iDate] ?? ''

      fires.push({
        id: `${lat.toFixed(4)}-${lon.toFixed(4)}-${dateStr}-${time}`,
        lat,
        lon,
        zone: resolveZone(lat, lon),
        confidence: confidenceLabel(cols[iConf] ?? ''),
        brightness: parseFloat(cols[iBri]) || 0,
        frp: parseFloat(cols[iFrp]) || 0,
        acquiredAt: dateStr ? `${dateStr}T${time.slice(0, 2)}:${time.slice(2)}:00Z` : '',
        satellite: cols[iSat] ?? 'VIIRS',
      })
    }

    // Sort by most recent first
    fires.sort((a, b) => b.acquiredAt.localeCompare(a.acquiredAt))

    return NextResponse.json({
      fires,
      count: fires.length,
      updatedAt: new Date().toISOString(),
    })
  } catch {
    return NextResponse.json({ fires: [], updatedAt: new Date().toISOString(), error: 'fetch_failed' }, { status: 502 })
  }
}
