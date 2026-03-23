import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'Health & Safety Training | Dunmore Training & Skills Development',
  description:
    'DUNMORE delivers SETA-accredited Health and Safety training aligned to the OHS Act 85 of 1993, Construction Regulations 2014, and SANS standards. Programmes include Safety Rep, OHS Act Awareness, and Incident Investigation.',
  openGraph: {
    title: 'Health & Safety Training — Legal Requirements & Programmes | DUNMORE',
    description:
      'Understand your OHS Act obligations and how DUNMORE\'s accredited Health and Safety programmes fulfil them.',
    type: 'website',
  },
}

const legislation = [
  {
    act: 'Occupational Health and Safety Act 85 of 1993 (OHS Act)',
    summary:
      'The primary legislation governing occupational health and safety in South African workplaces (excluding mining). Section 8 places a general duty of care on employers; Section 14 places duties on employees. The Act establishes the appointment of SHE Representatives and Safety Committees as mandatory structures in qualifying workplaces.',
  },
  {
    act: 'OHS Act — Section 17: Safety Representatives',
    summary:
      'Every employer with more than 20 employees must designate a Health and Safety Representative (HSR) for each work process or section. HSRs must be trained and must receive reasonable time to carry out their functions without loss of remuneration. DUNMORE\'s HSR course directly satisfies this training requirement.',
  },
  {
    act: 'OHS Act — Section 19: Safety Committees',
    summary:
      'Employers with two or more HSRs must establish a Safety Committee. The committee must meet at least quarterly and must be formally constituted. Training for committee members in OHS procedures, incident reporting, and legal compliance is strongly advised and forms part of DUNMORE\'s H&S programme range.',
  },
  {
    act: 'General Safety Regulations (GNR 1031 of 1986, as amended)',
    summary:
      'Prescribes requirements for personal protective equipment, machine guarding, first aid, fire precautions, stacking and storage, and general safety measures applicable to all workplaces falling under the OHS Act.',
  },
  {
    act: 'Construction Regulations 2014 (GNR 84 of 7 February 2014)',
    summary:
      'Promulgated under the OHS Act. Applicable to all construction work. The Regulations require that contractors appoint trained construction supervisors, Health and Safety Officers, and qualified persons for hazardous work. OHS awareness training is required for all persons on a construction site.',
  },
  {
    act: 'Hazardous Chemical Substances Regulations (GNR 1179 of 1995)',
    summary:
      'Employers handling hazardous substances must ensure employees are trained in the safe handling, storage, and disposal of such substances. Programmes covering HIV in the Workplace and Chemical Hazard Awareness complement these requirements.',
  },
  {
    act: 'Environmental Regulations for Workplaces (GNR 2281 of 1987)',
    summary:
      'Regulates ventilation, lighting, noise, temperature, and housekeeping in the workplace. Employers must assess and control occupational hygiene risks. Health and Safety training includes an overview of applicable standards and employee duties.',
  },
]

const programmes = [
  { name: 'OHS Act Awareness for Employees', nqf: '2', duration: '1 day', desc: 'Overview of employee rights and duties under the OHS Act. Covers sections 8, 14, and General Safety Regulations. Recommended for all staff.' },
  { name: 'Health and Safety Representative (HSR)', nqf: '3', duration: '2 days', desc: 'Mandatory training for appointed HSRs under OHS Act Section 17. Covers inspections, reporting, hazard identification, and Safety Committee procedures.' },
  { name: 'Safety Committee Member Training', nqf: '3', duration: '1 day', desc: 'Equips committee members with the tools to run effective OHS meetings, maintain records, and drive workplace health and safety compliance.' },
  { name: 'Incident Investigation and Reporting', nqf: '4', duration: '2 days', desc: 'Covers OHS Act incident reporting requirements, root cause analysis, COID Form WCL forms, and corrective action documentation.' },
  { name: 'HIV and AIDS in the Workplace', nqf: '3', duration: '1 day', desc: 'Peer education programme aligned to the Department of Health and SA National AIDS Council (SANAC) framework. Required in many public sector and agricultural sector workplaces.' },
  { name: 'Occupational Health and Safety Manager', nqf: '5', duration: '5 days', desc: 'QCTO-aligned qualification for persons responsible for OHS management systems. Covers compliance auditing, risk assessment frameworks, and Systemic Cause Analysis.' },
]

const keyDuties = [
  { party: 'Employer (Section 8)', duty: 'Provide and maintain a safe workplace, systems of work, and working environment. Conduct risk assessments and put controls in place.' },
  { party: 'Employer (Section 9)', duty: 'Ensure that non-employees on the premises are not exposed to hazards. Applicable to contractors and visitors.' },
  { party: 'Employee (Section 14)', duty: 'Take reasonable care for own health and safety and that of others. Report unsafe conditions. Co-operate with employer on OHS measures.' },
  { party: 'Designer / Manufacturer (Section 10)', duty: 'Ensure that plant, machinery, or substances designed or manufactured are safe when properly used.' },
  { party: 'SHE Representative (Section 17)', duty: 'Inspect the workplace, review incidents and near-misses, represent employees in OHS matters, and participate in Safety Committees.' },
]

export default function HealthSafetyPage() {
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
            { label: 'Health & Safety' },
          ]} />
          <div className="mt-6 max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Discipline Overview</p>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'var(--text-4xl)' }}>
              Health &amp; Safety Training
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              The Occupational Health and Safety Act 85 of 1993 imposes mandatory duties on employers and employees
              alike. DUNMORE delivers SETA-accredited programmes covering OHS Act compliance, HSR appointments,
              safety committee operations, and incident investigation.
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
                The <strong className="text-primary">Occupational Health and Safety Act 85 of 1993 (OHS Act)</strong> is the
                primary legislation governing workplace health and safety in South Africa, applicable to all workplaces except
                mines (which fall under the Mine Health and Safety Act 29 of 1996).
              </p>
              <p>
                The Act requires employers to appoint and train <strong className="text-primary">Health and Safety Representatives
                (HSRs)</strong> in workplaces with more than 20 employees. These representatives must receive formal training
                to carry out their legal functions — including workplace inspections, hazard reporting, and participation in
                safety committees. DUNMORE&apos;s HSR programme is designed specifically to satisfy this requirement.
              </p>
              <p>
                Non-compliance with the OHS Act may result in improvement notices, prohibition notices, fines, and — in serious
                cases — prosecution of directors and managers under Section 37(2) of the Act, which extends liability to
                individuals who failed in their supervisory duty.
              </p>
            </div>
          </section>

          {/* Key Duties Table */}
          <section aria-labelledby="duties-heading" className="mb-14">
            <h2 id="duties-heading" className="font-display font-bold text-primary mb-4" style={{ fontSize: 'var(--text-2xl)' }}>
              Key Duties Under the OHS Act
            </h2>
            <div className="space-y-0 border border-dunmore-border rounded-lg overflow-hidden">
              {keyDuties.map((row, i) => (
                <div key={row.party} className={`flex flex-col sm:flex-row gap-2 sm:gap-8 p-5 bg-white ${i < keyDuties.length - 1 ? 'border-b border-dunmore-border' : ''}`}>
                  <p className="font-semibold text-primary sm:w-56 flex-shrink-0 text-sm leading-snug pt-0.5">{row.party}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{row.duty}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-3">
              Source: OHS Act 85 of 1993. Refer to the full Act and supporting regulations for sector-specific provisions.
            </p>
          </section>

          {/* Applicable Legislation */}
          <section aria-labelledby="acts-heading" className="mb-14">
            <h2 id="acts-heading" className="font-display font-bold text-primary mb-4" style={{ fontSize: 'var(--text-2xl)' }}>
              Applicable Legislation &amp; Regulations
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
                href="/programs?category=health-safety"
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-7 rounded-lg transition-colors duration-200"
              >
                View All Health &amp; Safety Programmes
              </Link>
              <Link
                href="/contact?enquiry=health-safety"
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
