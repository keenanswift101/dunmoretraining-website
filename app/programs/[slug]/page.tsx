import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { programs, programCategories } from '@/data/programs'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const program = programs.find((p) => p.slug === slug)
  if (!program) return { title: 'Program Not Found' }

  return {
    title: `${program.title} | Dunmore Training`,
    description: program.description,
    openGraph: {
      title: `${program.title} — SETA-Accredited Training | Dunmore`,
      description: program.description,
      type: 'website',
    },
  }
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug } = await params
  const program = programs.find((p) => p.slug === slug)
  if (!program) notFound()

  const relatedPrograms = programs
    .filter((p) => p.category === program.category && p.slug !== program.slug)
    .slice(0, 3)

  const categoryConfig = programCategories[program.category as keyof typeof programCategories]
  const badgeClass = categoryConfig?.badgeClass ?? 'bg-slate-100 text-slate-700'

  const isQCTO = !!program.qctoCode

  return (
    <>
      {/* ── JSON-LD Structured Data ─────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: program.title,
            description: program.description,
            provider: {
              '@type': 'Organization',
              name: 'Dunmore Training & Skills Development',
              url: 'https://dunmoretraining-website.vercel.app',
            },
            ...(program.nqfLevel && {
              educationalLevel: `NQF Level ${program.nqfLevel}`,
            }),
            ...(program.duration && {
              timeRequired: program.duration,
            }),
          }),
        }}
      />

      {/* ── Hero Band ───────────────────────────────────────── */}
      <section className="relative bg-primary pt-32 pb-16 sm:pt-40 sm:pb-20">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.08),transparent_60%)]" />

        <div className="relative container-wide">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Programs', href: '/programs' },
              { label: program.categoryLabel, href: `/programs?category=${program.category}` },
              { label: program.title },
            ]}
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-5 lg:gap-12 items-start">
            {/* Left — Title & description */}
            <div className="lg:col-span-3 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${badgeClass}`}>
                  {program.categoryLabel}
                </span>
                {isQCTO && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/20 text-accent">
                    QCTO Accredited
                  </span>
                )}
                {program.accredited && !isQCTO && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-100 text-green-700">
                    SETA Accredited
                  </span>
                )}
              </div>

              <h1 className="font-display font-bold text-white" style={{ fontSize: 'var(--text-3xl)' }}>
                {program.title}
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                {program.description}
              </p>
            </div>

            {/* Right — Quick Info Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
                {/* Gold accent top bar */}
                <div className="h-1.5 bg-gradient-to-r from-accent via-accent-light to-accent" aria-hidden="true" />
                <div className="p-6 sm:p-8 space-y-5">
                <h2 className="font-display font-bold text-primary text-lg">Programme Details</h2>

                <dl className="space-y-4 text-sm">
                  {program.nqfLevel && (
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <dt className="text-slate-500 font-medium">NQF Level</dt>
                      <dd className="font-bold text-primary text-base">Level {program.nqfLevel}</dd>
                    </div>
                  )}
                  {program.credits && (
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <dt className="text-slate-500 font-medium">Credits</dt>
                      <dd className="font-bold text-primary">{program.credits}</dd>
                    </div>
                  )}
                  {program.duration && (
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <dt className="text-slate-500 font-medium">Duration</dt>
                      <dd className="font-bold text-slate-800">{program.duration}</dd>
                    </div>
                  )}
                  {program.delivery && (
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <dt className="text-slate-500 font-medium">Delivery</dt>
                      <dd className="font-semibold text-slate-800 text-right max-w-[180px]">{program.delivery}</dd>
                    </div>
                  )}
                  {(program.unitStandard || program.qctoCode) && (
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <dt className="text-slate-500 font-medium">{isQCTO ? 'QCTO Code' : 'Unit Standard'}</dt>
                      <dd className="font-mono font-bold text-slate-700">
                        {isQCTO ? (
                          program.qctoCode
                        ) : (
                          <a
                            href={`https://regqs.saqa.org.za/showUnitStandard.php?id=${program.unitStandard}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-primary transition-colors"
                          >
                            {program.unitStandard}
                          </a>
                        )}
                      </dd>
                    </div>
                  )}
                  {program.accreditationNumber && (
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <dt className="text-slate-500 font-medium">Accreditation #</dt>
                      <dd className="font-mono text-xs text-slate-600 text-right max-w-[200px] break-all">{program.accreditationNumber}</dd>
                    </div>
                  )}
                </dl>

                <Link
                  href={`/contact?program=${encodeURIComponent(program.slug)}`}
                  className="block w-full text-center bg-accent hover:bg-accent-light text-primary-dark font-bold py-3.5 px-6 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Enquire Now
                </Link>
                <p className="text-xs text-slate-400 text-center">
                  Get a quote or check upcoming dates
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Outcomes ────────────────────────────────────────── */}
      {program.outcomes && program.outcomes.length > 0 && (
        <section className="section-padding bg-surface" aria-labelledby="outcomes-heading">
          <div className="container-wide">
            <div className="mb-8">
              <span className="block w-10 h-1 bg-accent rounded-full mb-3" aria-hidden="true" />
              <h2 id="outcomes-heading" className="font-display font-bold text-primary" style={{ fontSize: 'var(--text-2xl)' }}>
                What You&apos;ll Learn
              </h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {program.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700 leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Details Grid (Entry Reqs, Target Audience, Assessment) */}
      {(program.entryRequirements || program.targetAudience || program.assessmentMethod) && (
        <section className="section-padding bg-surface-alt" aria-labelledby="details-heading">
          <div className="container-wide">
            <h2 id="details-heading" className="sr-only">Programme Details</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {program.entryRequirements && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-primary text-lg">Entry Requirements</h3>
                  </div>
                  <ul className="space-y-3">
                    {program.entryRequirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-accent flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {program.targetAudience && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-primary text-lg">Who Should Attend</h3>
                  </div>
                  <ul className="space-y-3">
                    {program.targetAudience.map((aud, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0" />
                        {aud}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {program.assessmentMethod && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-primary text-lg">Assessment</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {program.assessmentMethod}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Certification & Accreditation ───────────────────── */}
      {(program.certification || program.accreditationBody) && (
        <section className="section-padding bg-surface" aria-labelledby="cert-heading">
          <div className="container-wide">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 sm:p-12 text-white">
              <h2 id="cert-heading" className="font-display font-bold text-2xl mb-6">
                Certification & Accreditation
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {program.certification && (
                  <div>
                    <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Certification</h3>
                    <p className="text-slate-200 leading-relaxed">{program.certification}</p>
                  </div>
                )}
                {program.accreditationBody && (
                  <div>
                    <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Accreditation Body</h3>
                    <p className="text-slate-200 leading-relaxed">{program.accreditationBody}</p>
                    {program.accreditationNumber && (
                      <p className="text-slate-400 text-sm mt-1 font-mono">
                        {program.accreditationNumber}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Band ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-accent/5">
        <div className="container-wide text-center">
          <h2 className="font-display font-bold text-primary text-2xl sm:text-3xl mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto mb-8">
            Contact us for upcoming dates, group pricing, and on-site training options across the Western Cape.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/contact?program=${encodeURIComponent(program.slug)}`}
              className="inline-flex items-center bg-accent hover:bg-accent-dark text-white font-bold py-3.5 px-8 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Enquire About This Programme
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center text-primary hover:text-primary-dark font-semibold py-3.5 px-8 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors duration-200"
            >
              Browse All Programmes
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related Programmes ──────────────────────────────── */}
      {relatedPrograms.length > 0 && (
        <section className="section-padding bg-surface-alt" aria-labelledby="related-heading">
          <div className="container-wide">
            <div className="mb-8">
              <span className="block w-10 h-1 bg-accent rounded-full mb-3" aria-hidden="true" />
              <h2 id="related-heading" className="font-display font-bold text-primary" style={{ fontSize: 'var(--text-2xl)' }}>
                Related Programmes
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPrograms.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/programs/${rp.slug}`}
                  className="group bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                >
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${badgeClass}`}>
                    {rp.categoryLabel}
                  </span>
                  <h3 className="font-display font-bold text-primary mt-3 mb-2 group-hover:text-accent transition-colors">
                    {rp.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {rp.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent">
                    <span>View Details</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
