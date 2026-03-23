import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { ProgramFilter } from '@/components/sections/ProgramFilter'

export const metadata: Metadata = {
  title: 'Training Programmes | Dunmore Training & Skills Development',
  description:
    'Browse 30+ SETA and QCTO-accredited training programmes across first aid, health & safety, fire fighting, forestry, agriculture and more. NQF-aligned, instructor-led training in the Western Cape.',
  openGraph: {
    title: 'Training Programmes | Dunmore Training & Skills Development',
    description:
      'Browse 30+ SETA and QCTO-accredited training programmes. NQF-aligned, instructor-led training in the Western Cape.',
    type: 'website',
  },
}

export default function ProgramsPage() {
  return (
    <>
      {/* ── Hero Band ───────────────────────────────────── */}
      <section className="relative bg-primary pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.10),transparent_55%)]" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface-alt/30 to-transparent" aria-hidden="true" />

        <div className="relative container-wide">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Programmes' },
          ]} />

          <div className="mt-6 max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Programmes</p>
            <h1
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: 'var(--text-4xl)' }}
            >
              Training for Every Discipline
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
              SETA and QCTO-accredited programmes across first aid, health &amp; safety, fire fighting,
              forestry, agriculture and more — all aligned to NQF standards and the Skills Development Act.
            </p>
          </div>
        </div>
      </section>

      {/* ── Programme Listing ───────────────────────────── */}
      <section className="section-padding bg-surface-alt">
        <div className="container-wide">
          <ProgramFilter />
        </div>
      </section>
    </>
  )
}
