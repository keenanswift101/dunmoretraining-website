import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'Fire Fighting Training | Dunmore Training & Skills Development',
  description:
    'DUNMORE delivers SETA-accredited Fire Fighting training aligned to the OHS Act, National Veld and Forest Fire Act 101 of 1998, and SANS standards. Programmes range from Fire Awareness to Advanced Wildfire Suppression.',
  openGraph: {
    title: 'Fire Fighting Training — Legal Requirements & Programmes | DUNMORE',
    description:
      'Understand South African fire safety obligations and how DUNMORE\'s accredited fire fighting programmes fulfil them.',
    type: 'website',
  },
}

const legislation = [
  {
    act: 'Occupational Health and Safety Act 85 of 1993 (OHS Act) — Environmental Regulations for Workplaces, Regulation 9',
    summary:
      'Regulation 9 of the Environmental Regulations for Workplaces (GNR 2281 of 1987) requires that every employer take steps to prevent, detect, and combat fire in the workplace. This includes ensuring suitable fire-fighting equipment is available and that designated employees are trained in its use.',
  },
  {
    act: 'National Veld and Forest Fire Act 101 of 1998',
    summary:
      'Establishes the legal framework for veld and forest fire management in South Africa. Sections 12 and 13 impose obligations on landowners and occupiers in fire danger areas to take reasonable steps to prevent fires, including participation in Fire Protection Associations (FPAs) and ensuring personnel are trained.',
  },
  {
    act: 'SANS 10400-T: Facilities for Persons with Disabilities + Fire Protection',
    summary:
      'The National Building Regulations and Building Standards Act 103 of 1977, through SANS 10400 Part T, prescribes fire detection, suppression, and evacuation requirements for occupied buildings. Trained fire wardens are required in most commercial and industrial occupancies.',
  },
  {
    act: 'Disaster Management Act 57 of 2002',
    summary:
      'Requires organs of state and private sector bodies to take reasonable measures to prevent or reduce the risk of disasters, including fire. Trained fire response personnel are part of a compliant disaster risk reduction plan.',
  },
  {
    act: 'National Forests Act 84 of 1998',
    summary:
      'Governs the management and protection of national forests. Under section 7, the Department of Forestry, Fisheries and the Environment (DFFE) may issue directives requiring forestry operators to maintain firefighting capacity and trained suppression teams.',
  },
  {
    act: 'Compensation for Occupational Injuries and Diseases Act 130 of 1993 (COIDA)',
    summary:
      'Fire-related injuries are among the most common occupational injury categories in manufacturing, forestry, and construction. Demonstrating active fire training is a mitigating factor in COIDA claims and departmental inspections.',
  },
]

const programmes = [
  { name: 'Fire Awareness', nqf: '2', duration: '1 day', desc: 'Introduction to fire hazards, types of fire, basic extinguisher use, and evacuation procedures. Suitable for all staff.' },
  { name: 'Fire Warden and Marshal Training', nqf: '3', duration: '2 days', desc: 'Covers fire risk identification, evacuation coordination, fire safety inspections, and emergency reporting. Required for designated fire wardens.' },
  { name: 'Basic Fire Fighting', nqf: '3', duration: '2 days', desc: 'Practical training in the use of portable fire extinguishers, hose reels, and fire blankets. SAQA unit standard aligned.' },
  { name: 'Intermediate Fire Fighting', nqf: '4', duration: '3 days', desc: 'Structured fire suppression techniques, teamwork in fire operations, and use of breathing apparatus. For industrial environments.' },
  { name: 'Wildfire Suppression (Veld and Forest)', nqf: '3', duration: '3 days', desc: 'Covers hand tool operation, bush fire behaviour, firebreak construction, and aerial support coordination. Aligned to Working on Fire standards.' },
  { name: 'Fire Safety Officer', nqf: '5', duration: '4 days', desc: 'Advanced programme for persons responsible for workplace fire safety management, compliance documentation, and fire risk assessment.' },
]

export default function FireFightingPage() {
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
            { label: 'Fire Fighting' },
          ]} />
          <div className="mt-6 max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Discipline Overview</p>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'var(--text-4xl)' }}>
              Fire Fighting Training
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Fire safety training is a legal obligation for most South African employers under the OHS Act and
              the National Veld and Forest Fire Act 101 of 1998. DUNMORE delivers nationally accredited programmes
              from basic fire awareness through to advanced wildfire suppression.
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
                The <strong className="text-primary">Occupational Health and Safety Act 85 of 1993</strong> and its
                supporting Environmental Regulations for Workplaces (GNR 2281 of 1987) impose a direct obligation on
                employers to prevent, detect, and combat workplace fires. Designated employees must be trained in
                firefighting and fire safety procedures.
              </p>
              <p>
                In the agricultural and forestry sectors, the <strong className="text-primary">National Veld and Forest
                Fire Act 101 of 1998</strong> further requires that landowners in declared fire danger areas maintain
                firefighting capacity, participate in registered Fire Protection Associations (FPAs), and ensure
                personnel are trained in suppression techniques.
              </p>
              <p>
                Under SANS 10400 Part T, commercial and industrial buildings must designate trained fire wardens for
                each floor or zone, with documented evacuation procedures. Non-compliance affects occupancy certificates
                and can invalidate insurance claims.
              </p>
            </div>
          </section>

          {/* Applicable Legislation */}
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
              All programmes are SETA-accredited or nationally aligned. Certificates are NQF-registered and accepted by Department of Labour inspectors.
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
                href="/programs?category=fire-fighting"
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-7 rounded-lg transition-colors duration-200"
              >
                View All Fire Fighting Programmes
              </Link>
              <Link
                href="/contact?enquiry=fire-fighting"
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
