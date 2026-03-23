import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'First Aid Training | Dunmore Training & Skills Development',
  description:
    'Legally compliant First Aid training for South African workplaces. DUNMORE delivers SETA-accredited and QCTO-registered First Aid programmes aligned to the OHS Act 85 of 1993 and First Aid Regulations GNR 1857.',
  openGraph: {
    title: 'First Aid Training — Legal Requirements & Programmes | DUNMORE',
    description:
      'Understand your First Aid obligations under SA law and how DUNMORE\'s accredited programmes fulfil them.',
    type: 'website',
  },
}

const legislation = [
  {
    act: 'Occupational Health and Safety Act 85 of 1993 (OHS Act) — Section 8',
    summary:
      'Places a general duty on every employer to provide and maintain a working environment that is safe and without risk to the health of their employees. This explicitly includes the provision of first aid facilities.',
  },
  {
    act: 'First Aid Regulations (GNR 1857 of 7 December 1990)',
    summary:
      'Promulgated under the OHS Act. Regulation 3 requires employers to provide first aid equipment and trained first aiders on-site. The number of first aiders required is based on workforce size: 1 per 50 employees in low-risk environments, 1 per 10 in higher-risk settings. Appendix 2 specifies the minimum training content and duration.',
  },
  {
    act: 'General Safety Regulations, Regulation 3 (GNR 1031 of 1986, as amended)',
    summary:
      'Requires that first aid boxes are provided and accessible to all employees in the workplace. Contents must be maintained in good order and checked at regular intervals.',
  },
  {
    act: 'Compensation for Occupational Injuries and Diseases Act 130 of 1993 (COIDA)',
    summary:
      'Obliges employers to report all occupational injuries and diseases. Adequate first aid response is a practical requirement for appropriate injury management and reporting. First Aid training directly supports COIDA compliance outcomes.',
  },
  {
    act: 'National Road Traffic Act 93 of 1996 — Regulation 168',
    summary:
      'Requires that specific first aid kits be present in commercial and public vehicles. Personnel operating such vehicles may be required to hold a valid First Aid certificate as a condition of employment or licensing.',
  },
  {
    act: 'Mine Health and Safety Act 29 of 1996 — Section 22',
    summary:
      'Requires mine employers to ensure that trained first aiders are available on every shift. First Aid training for mining-adjacent and forestry operations must meet sector-specific standards.',
  },
]

const programmes = [
  { name: 'First Aid Level 1 (Basic)', nqf: '2', duration: '2 days', desc: 'Entry-level workplace first aid. Covers CPR, choking, bleeding, fractures. Required for all workplaces under GNR 1857.' },
  { name: 'First Aid Level 2 (Intermediate)', nqf: '3', duration: '3 days', desc: 'Intermediate assessment and response. Covers burns, poisoning, medical emergencies, and documentation.' },
  { name: 'First Aid Level 3 (Advanced)', nqf: '4', duration: '4 days', desc: 'Advanced pre-hospital care. Suitable for first aiders in high-risk or remote environments.' },
  { name: 'Emergency First Aid Responder (EFAR)', nqf: '4', duration: '5 days', desc: 'QCTO-accredited occupational qualification. Equips learners for structured emergency response in field and event settings.' },
  { name: 'Cardiopulmonary Resuscitation (CPR)', nqf: '2', duration: '1 day', desc: 'Focused CPR and AED training. SAQA unit standard aligned. Suitable for annual re-certification.' },
  { name: 'Paediatric First Aid', nqf: '2', duration: '1 day', desc: 'Designed for educators and caregivers. Covers infant and child CPR, choking, allergic reactions, and common childhood emergencies.' },
]

const requirementTable = [
  { size: '1 – 50 employees', risk: 'Low risk', required: '1 trained first aider', kit: '1 basic first aid box' },
  { size: '51 – 100 employees', risk: 'Low risk', required: '2 trained first aiders', kit: '2 basic first aid boxes' },
  { size: '1 – 10 employees', risk: 'High risk', required: '1 trained first aider', kit: '1 first aid box + stretcher' },
  { size: '11 – 50 employees', risk: 'High risk', required: '2 trained first aiders', kit: '1 first aid box + stretcher per 50' },
]

export default function FirstAidPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
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
            { label: 'First Aid' },
          ]} />
          <div className="mt-6 max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Discipline Overview</p>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'var(--text-4xl)' }}>
              First Aid Training
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              First Aid training is a statutory requirement for South African employers under the OHS Act 85 of 1993.
              DUNMORE delivers nationally accredited First Aid programmes at Levels 1 through to QCTO Occupational qualification level —
              fully aligned with the First Aid Regulations GNR 1857.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────── */}
      <article className="section-padding bg-surface">
        <div className="container-wide max-w-4xl">

          {/* Legal Requirement */}
          <section aria-labelledby="legal-heading" className="mb-14">
            <span className="block w-10 h-0.5 bg-accent mb-5" aria-hidden="true" />
            <h2 id="legal-heading" className="font-display font-bold text-primary mb-4" style={{ fontSize: 'var(--text-2xl)' }}>
              Legal Requirement
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Under the <strong className="text-primary">Occupational Health and Safety Act 85 of 1993 (OHS Act)</strong> and
                its subordinate <strong className="text-primary">First Aid Regulations (GNR 1857 of 7 December 1990)</strong>,
                every employer with five or more employees is legally obligated to provide trained first aiders and properly
                equipped first aid kits in the workplace.
              </p>
              <p>
                Failure to comply constitutes a contravention of the OHS Act, which carries penalties including fines and — where
                non-compliance results in injury or death — potential criminal liability for the responsible employer or responsible manager.
              </p>
              <p>
                Certificates must be renewed every three years for Levels 1–3. DUNMORE issues certificates that are recognised across
                the South African labour market and accepted by Department of Labour inspectors.
              </p>
            </div>
          </section>

          {/* Required ratios table */}
          <section aria-labelledby="ratios-heading" className="mb-14">
            <h2 id="ratios-heading" className="font-display font-bold text-primary mb-4" style={{ fontSize: 'var(--text-2xl)' }}>
              Statutory First Aider Requirements
            </h2>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              The following requirements are prescribed by the First Aid Regulations (GNR 1857) and General Safety Regulations.
              &ldquo;High risk&rdquo; refers to environments classified as hazardous under the OHS Act (manufacturing, construction, forestry, chemical, etc.).
            </p>
            <div className="border border-dunmore-border rounded-lg overflow-hidden">
              <div className="hidden sm:grid grid-cols-4 bg-surface-alt px-5 py-3 border-b border-dunmore-border text-xs font-bold uppercase tracking-widest text-slate-400">
                <span>Workforce Size</span>
                <span>Risk Category</span>
                <span>First Aiders Required</span>
                <span>Equipment</span>
              </div>
              {requirementTable.map((row, i) => (
                <div
                  key={i}
                  className={`sm:grid sm:grid-cols-4 px-5 py-4 gap-2 text-sm ${i < requirementTable.length - 1 ? 'border-b border-dunmore-border' : ''} bg-white`}
                >
                  <div className="sm:contents space-y-2 sm:space-y-0">
                    <div className="flex justify-between sm:block"><span className="text-xs font-bold uppercase tracking-widest text-slate-400 sm:hidden">Size</span><span className="text-slate-700 font-medium">{row.size}</span></div>
                    <div className="flex justify-between sm:block"><span className="text-xs font-bold uppercase tracking-widest text-slate-400 sm:hidden">Risk</span><span className="text-slate-500">{row.risk}</span></div>
                    <div className="flex justify-between sm:block"><span className="text-xs font-bold uppercase tracking-widest text-slate-400 sm:hidden">Required</span><span className="text-primary font-semibold">{row.required}</span></div>
                    <div className="flex justify-between sm:block"><span className="text-xs font-bold uppercase tracking-widest text-slate-400 sm:hidden">Equipment</span><span className="text-slate-500">{row.kit}</span></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-3">
              Source: First Aid Regulations GNR 1857 of 1990, Regulation 3, read with Appendix 2. Consult the full regulations for sector-specific provisions.
            </p>
          </section>

          {/* Applicable legislation */}
          <section aria-labelledby="acts-heading" className="mb-14">
            <h2 id="acts-heading" className="font-display font-bold text-primary mb-4" style={{ fontSize: 'var(--text-2xl)' }}>
              Applicable Legislation
            </h2>
            <div className="space-y-0 border border-dunmore-border rounded-lg overflow-hidden">
              {legislation.map((law, i) => (
                <div key={law.act} className={`flex flex-col sm:flex-row gap-2 sm:gap-8 p-5 bg-white ${i < legislation.length - 1 ? 'border-b border-dunmore-border' : ''}`}>
                  <p className="font-semibold text-primary sm:w-72 flex-shrink-0 text-sm leading-snug pt-0.5">{law.act}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{law.summary}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Programmes */}
          <section aria-labelledby="progs-heading">
            <h2 id="progs-heading" className="font-display font-bold text-primary mb-4" style={{ fontSize: 'var(--text-2xl)' }}>
              Available Programmes
            </h2>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              All programmes are SETA-accredited or QCTO-registered. Certificates are NQF-aligned and nationally recognised.
            </p>
            <div className="space-y-0 border border-dunmore-border rounded-lg overflow-hidden mb-8">
              {programmes.map((prog, i) => (
                <div key={prog.name} className={`p-5 bg-white ${i < programmes.length - 1 ? 'border-b border-dunmore-border' : ''}`}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <p className="font-semibold text-primary text-sm">{prog.name}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span>NQF {prog.nqf}</span>
                      <span>{prog.duration}</span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{prog.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/programs?category=first-aid"
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-7 rounded-lg transition-colors duration-200"
              >
                View All First Aid Programmes
              </Link>
              <Link
                href="/contact?enquiry=first-aid"
                className="inline-flex items-center text-primary font-semibold py-3 px-7 rounded-lg border border-primary/25 hover:border-primary/50 transition-colors duration-200"
              >
                Enquire About Enrolment
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  )
}
