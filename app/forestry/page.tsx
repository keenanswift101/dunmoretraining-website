import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'Forestry, Agriculture & Field Training | Dunmore Training & Skills Development',
  description:
    'DUNMORE delivers FP&M SETA-accredited and AgriSETA-registered training for forestry, agricultural, and field operations. Programmes cover chainsaw operation, pest control, incident investigation, landscape gardening and more.',
  openGraph: {
    title: 'Forestry & Agriculture Training — Legal Requirements & Programmes | DUNMORE',
    description:
      'Understand your training obligations under SA forestry and agricultural legislation and how DUNMORE fulfils them.',
    type: 'website',
  },
}

const legislation = [
  {
    act: 'Occupational Health and Safety Act 85 of 1993 (OHS Act) — Chapter 21: Agriculture',
    summary:
      'The OHS Act applies to agricultural employers. The Regulations applicable to agricultural environments impose duties on employers regarding hazardous machinery (including chainsaws and tractors), chemical handling,  and provision of personal protective equipment. Trained operators are required for all prescribed equipment.',
  },
  {
    act: 'National Forests Act 84 of 1998',
    summary:
      'Governs the sustainable management and protection of South Africa\'s national forests. Section 7 requires that forestry operations comply with management plans. Workers operating in forest environments must be trained in safety protocols and environmental compliance.',
  },
  {
    act: 'National Veld and Forest Fire Act 101 of 1998',
    summary:
      'Imposes obligations on owners and occupiers of land in fire danger areas to prevent, control, and suppress veld and forest fires. Section 12 requires that Fire Protection Association (FPA) members maintain trained firefighting capacity. Forestry employers must ensure workers can respond to fire emergencies.',
  },
  {
    act: 'Fertilizers, Farm Feeds, Agricultural Remedies and Stock Remedies Act 36 of 1947',
    summary:
      'Regulates the use, storage, and disposal of pesticides, herbicides, and agricultural chemicals. Section 7 prohibits use by unregistered or untrained applicators. DUNMORE\'s pest management and herbicide application programmes fulfill this training requirement.',
  },
  {
    act: 'Skills Development Act 97 of 1998 — FP&M SETA',
    summary:
      'The Forestry, Paper and Manufacturing SETA (FP&M SETA) is the primary sector authority for forestry skills development. DUNMORE is an FP&M SETA-accredited provider (FPM16/PRPACC-022). Employers in the sector can claim SETA grants for qualifying DUNMORE programmes.',
  },
  {
    act: 'Skills Development Act 97 of 1998 — AgriSETA',
    summary:
      'The Agricultural SETA (AgriSETA) governs skills development in the agricultural sector. DUNMORE is registered with AgriSETA for delivery of aligned agricultural training programmes, including livestock management, pest control, and field safety.',
  },
  {
    act: 'Conservation of Agricultural Resources Act 43 of 1983 (CARA)',
    summary:
      'Provides for control over the utilisation of natural agricultural resources, including soil conservation, water use, and control of invasive plant species. Land users must comply with relevant CARA regulations and may be required to train workers in responsible land management practices.',
  },
  {
    act: 'QCTO Occupational Qualifications — Forestry Sector',
    summary:
      'The Quality Council for Trades and Occupations (QCTO) has developed occupational qualifications for the forestry sector at NQF levels 2 to 5. DUNMORE holds three active SDP registrations for QCTO forestry qualifications, including the Chainsaw Operator and Forestry SHE Officer qualifications.',
  },
]

const programmes = [
  { name: 'Chainsaw Operator (Standard)', nqf: '2', duration: '3 days', desc: 'Safe operation of chainsaws for felling, limbing, and cross-cutting. Covers PPE, maintenance, kickback prevention, and OHS Act compliance. QCTO-registered.' },
  { name: 'Specialised Chainsaw Operator', nqf: '3', duration: '4 days', desc: 'Advanced chainsaw operations including directional felling, difficult terrain, and lean-tree management. FP&M SETA accredited.' },
  { name: 'Forestry SHE Officer', nqf: '5', duration: '5 days', desc: 'QCTO occupational qualification for appointed safety officers in forestry environments. Covers incident investigation, risk assessment, legislative compliance, and reporting.' },
  { name: 'Agrochemical (Herbicides / Pesticides)', nqf: '3', duration: '2 days', desc: 'Covers safe handling, mixing, application, and disposal of agricultural chemicals in line with the Agricultural Remedies Act and Department of Agriculture requirements.' },
  { name: 'Pest Management', nqf: '3', duration: '2 days', desc: 'Identification and control of agricultural pests. Covers integrated pest management (IPM), pesticide registration, and compliance with CARA.' },
  { name: 'Landscape Gardening Fundamentals', nqf: '2', duration: '3 days', desc: 'Basic horticulture, plant identification, irrigation, and garden maintenance. Suitable for greenkeepers, estate workers, and municipal outdoor teams.' },
  { name: 'Incident Investigation (Forestry / Field)', nqf: '4', duration: '2 days', desc: 'Covers post-incident documentation, root cause analysis, COIDA reporting, and corrective action implementation in field and forestry environments.' },
  { name: 'Field Safety Awareness', nqf: '2', duration: '1 day', desc: 'General field safety covering snake bite, heat stress, water safety, lone worker protocols, and communication in remote environments.' },
]

export default function ForestryPage() {
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
            { label: 'Forestry & Agriculture' },
          ]} />
          <div className="mt-6 max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Discipline Overview</p>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'var(--text-4xl)' }}>
              Forestry, Agriculture &amp; Field Training
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Forestry and agricultural employers face a complex web of statutory training obligations under the OHS Act,
              the National Forests Act, the Veld and Forest Fire Act, and AgriSETA requirements. DUNMORE is accredited by
              FP&amp;M SETA and registered with AgriSETA to deliver the full range of sector-specific programmes.
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
                The <strong className="text-primary">Occupational Health and Safety Act 85 of 1993 (OHS Act)</strong> applies
                to agricultural employers in South Africa. The Act and its supporting regulations require that
                employees who operate hazardous machinery — including chainsaws, tractors, and spray equipment —
                are properly trained and competent before being permitted to use such equipment.
              </p>
              <p>
                The <strong className="text-primary">Fertilizers, Farm Feeds, Agricultural Remedies and Stock Remedies
                Act 36 of 1947</strong> restricts the application of registered pesticides and herbicides to trained and
                authorised persons. Untrained application of these substances is a criminal offence.
              </p>
              <p>
                In the forestry sector, <strong className="text-primary">FP&amp;M SETA</strong> (Accreditation No.
                FPM16/PRPACC-022) is the statutory quality authority for DUNMORE-accredited programmes. Employers in
                the FP&amp;M sector may claim mandatory grant disbursements for training delivered through DUNMORE.
              </p>
            </div>
          </section>

          {/* Applicable Legislation */}
          <section aria-labelledby="acts-heading" className="mb-14">
            <h2 id="acts-heading" className="font-display font-bold text-primary mb-4" style={{ fontSize: 'var(--text-2xl)' }}>
              Applicable Legislation &amp; Authorities
            </h2>
            <div className="space-y-0 border border-dunmore-border rounded-lg overflow-hidden">
              {legislation.map((law, i) => (
                <div key={law.act} className={`flex flex-col sm:flex-row gap-2 sm:gap-8 p-5 bg-white ${i < legislation.length - 1 ? 'border-b border-dunmore-border' : ''}`}>
                  <p className="font-semibold text-primary sm:w-72 flex-shrink-0 text-sm leading-snug pt-0.5">{law.act}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{law.summary}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-3">
              Legislation current as at date of publication. Consult the relevant government gazette and SETA directives for the latest amendments.
            </p>
          </section>

          {/* Programmes */}
          <section aria-labelledby="progs-heading">
            <h2 id="progs-heading" className="font-display font-bold text-primary mb-4" style={{ fontSize: 'var(--text-2xl)' }}>
              Available Programmes
            </h2>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              All programmes are FP&amp;M SETA accredited, AgriSETA registered, or QCTO-aligned. Certificates are NQF-registered and nationally transferable.
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
                href="/programs?category=forestry"
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-7 rounded-lg transition-colors duration-200"
              >
                View All Forestry &amp; Agriculture Programmes
              </Link>
              <Link
                href="/contact?enquiry=forestry"
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
