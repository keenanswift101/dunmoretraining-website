import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { locations } from '@/data/locations'

export const metadata: Metadata = {
  title: 'Training Locations | Dunmore Training & Skills Development',
  description:
    'DUNMORE Training operates from three locations across the Western Cape — Head Office in Somerset West, Cape Town, and a West Coast Satellite Office in Hopefield.',
  openGraph: {
    title: 'Training Locations | Dunmore Training',
    description:
      'Find a DUNMORE Training location near you. Somerset West (Head Office), Cape Town, and Hopefield on the West Coast.',
    type: 'website',
  },
}

const locationMeta: Record<string, { highlights: string[] }> = {
  'somerset-west': {
    highlights: ['Full training facilities', 'All programme types', 'Admin and enrolments'],
  },
  'cape-town': {
    highlights: ['Urban training access', 'On-site delivery available', 'Event medic base'],
  },
  'west-coast': {
    highlights: ['Forestry and field programmes', 'Agricultural area coverage', 'Hopefield and Swartland region'],
  },
}

const activeLocations = locations.filter((l) => l.id !== 'location-4')

export default function LocationsPage() {
  return (
    <>
      {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="relative bg-primary pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.10),transparent_55%)]" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
          aria-hidden="true"
        />

        <div className="relative container-wide">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Locations' },
          ]} />

          <div className="mt-6 max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Where to Find Us</p>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'var(--text-4xl)' }}>
              Training Across the Western Cape
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Three locations serving the greater Western Cape region — from Somerset West and Cape Town
              to the West Coast. We also deliver training on-site at your facility.
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€ Location Cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-surface-alt" aria-labelledby="locations-heading">
        <h2 id="locations-heading" className="sr-only">Our Locations</h2>
        <div className="container-wide">
          <div className="grid gap-6 lg:grid-cols-3">
            {activeLocations.map((loc) => {
              const meta = locationMeta[loc.id]
              return (
                <article
                  key={loc.id}
                  className="bg-white rounded-xl border border-dunmore-border overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-primary px-6 py-5">
                    <div>
                      {loc.isHeadOffice && (
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 block mb-0.5">
                          Head Office
                        </span>
                      )}
                      <h3 className="font-display font-bold text-white text-lg leading-tight">{loc.name}</h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-5">
                    {/* Address */}
                    <address className="not-italic space-y-1 text-sm text-slate-600">
                      <p className="font-semibold text-slate-800">
                        {loc.address}
                        {loc.address !== loc.city && `, ${loc.city}`}
                      </p>
                      <p>{loc.province}{loc.postalCode && `, ${loc.postalCode}`}</p>
                    </address>

                    {/* Contact */}
                    <div className="space-y-2 text-sm">
                      {loc.phone && (
                        <a
                          href={`tel:${loc.phone.replace(/\s/g, '')}`}
                          className="flex items-center gap-2.5 text-slate-600 hover:text-primary transition-colors"
                        >
                          <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {loc.phone}
                        </a>
                      )}
                      {loc.email && (
                        <a
                          href={`mailto:${loc.email}`}
                          className="flex items-center gap-2.5 text-slate-600 hover:text-primary transition-colors"
                        >
                          <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {loc.email}
                        </a>
                      )}
                    </div>

                    {/* Highlights */}
                    {meta?.highlights && (
                      <div className="border-t border-dunmore-border pt-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Available here</p>
                        <ul className="space-y-1.5">
                          {meta.highlights.map((h) => (
                            <li key={h} className="flex items-center gap-2 text-xs text-slate-600">
                              <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Map link */}
                    {loc.mapUrl && (
                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors mt-2"
                        aria-label={`View ${loc.name} on Google Maps (opens in new tab)`}
                      >
                        View on Google Maps
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </article>
              )
            })}
          </div>

          {/* On-site training note */}
          <div className="mt-10 bg-white border border-dunmore-border rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <p className="font-display font-bold text-primary mb-1">We Also Come to You</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                DUNMORE delivers on-site training at farms, factories, offices, and facilities throughout
                the Western Cape and beyond. Contact us to arrange delivery at your location.
              </p>
            </div>
            <Link
              href="/contact?enquiry=training-quote"
              className="flex-shrink-0 inline-flex items-center bg-primary hover:bg-primary-dark text-white font-bold text-sm py-2.5 px-6 rounded-lg transition-colors duration-200"
            >
              Request On-Site Training
            </Link>
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="relative py-20 sm:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,162,39,0.12),transparent_60%)]" aria-hidden="true" />
        <div className="relative container-wide max-w-3xl">
          <span className="block w-10 h-0.5 bg-accent mb-6" aria-hidden="true" />
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'var(--text-3xl)' }}>
            Find a Session Near You
          </h2>
          <p className="text-slate-300 mb-10 text-lg leading-relaxed">
            Contact us to ask about upcoming training dates at your nearest location, or to arrange a private session at your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-primary-dark font-bold py-3.5 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center text-white font-semibold py-3.5 px-8 rounded-lg border border-white/30 hover:border-white/60 transition-colors duration-200"
            >
              Browse Programmes
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
