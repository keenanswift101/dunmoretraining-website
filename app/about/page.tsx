import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'About Us | Dunmore Training & Skills Development',
  description:
    'Learn about DUNMORE Training & Skills Development — a Western Cape-based, SETA-accredited, Level 1 BBBEE training provider delivering nationally recognised skills programmes.',
  openGraph: {
    title: 'About DUNMORE Training & Skills Development',
    description:
      'SETA-accredited, Level 1 BBBEE training provider based in Somerset West, Western Cape.',
    type: 'website',
  },
}

const stats = [
  { value: '30+',  label: 'Accredited Programmes' },
  { value: '3',    label: 'Training Locations' },
  { value: 'L1',   label: 'BBBEE Contributor' },
  { value: '3',    label: 'Accreditation Bodies' },
]

const values = [
  {
    title: 'Quality Without Compromise',
    description:
      'Every programme is nationally accredited and facilitated by qualified, registered trainers. We do not cut corners on compliance or learning outcomes.',
  },
  {
    title: 'Accessibility for All',
    description:
      'We deliver training at our facilities and on-site at your workplace — making certified skills development practical and accessible across the Western Cape.',
  },
  {
    title: 'Real-World Impact',
    description:
      'Our programmes are matched to actual workplace demands. Learners leave with skills they can apply immediately — not just certificates on a shelf.',
  },
  {
    title: 'Integrity in Certification',
    description:
      'Every assessment is conducted fairly and transparently. Certificates issued by DUNMORE carry the weight of genuine competency verification.',
  },
]

const accreditations = [
  {
    logo: '/seta1.png',
    alt: 'FP&M SETA Accredited',
    body: 'FP&M SETA',
    ref: 'FPM16/PRPACC-022',
    desc: 'Forestry, Paper & Manufacturing Sector Education & Training Authority — our primary SETA.',
  },
  {
    logo: '/seta-agri.png',
    alt: 'AgriSETA Registered',
    body: 'AgriSETA',
    ref: 'AgriSETA Registered',
    desc: 'Agricultural Sector Education & Training Authority — covering agricultural and rural skills programmes.',
  },
  {
    logo: '/qcto.png',
    alt: 'QCTO Accredited',
    body: 'QCTO',
    ref: '3 Active SDP Registrations',
    desc: 'Quality Council for Trades & Occupations — occupational qualifications at NQF Levels 2–5.',
  },
  {
    logo: '/bbbee.png',
    alt: 'Level 1 BBBEE Contributor',
    body: 'Level 1 BBBEE',
    ref: 'B-BBEE Contributor',
    desc: 'Broad-Based Black Economic Empowerment — highest contributor status. Investing in sectoral transformation.',
  },
]

const legislation = [
  {
    act: 'Skills Development Act 97 of 1998',
    scope: 'The primary enabling legislation for workplace skills development in South Africa. Establishes SETAs, the National Skills Fund, and the framework for learnerships and skills programmes.',
  },
  {
    act: 'Skills Development Levies Act 9 of 1999',
    scope: 'Mandates employer contributions to skills development (1% of payroll). DUNMORE programmes qualify for SETA grant reimbursement for eligible employers.',
  },
  {
    act: 'South African Qualifications Authority Act 58 of 1995 (SAQA Act)',
    scope: 'Establishes the National Qualifications Framework (NQF). All DUNMORE unit standards and qualifications are registered on the NQF and verified by SAQA.',
  },
  {
    act: 'Occupational Health and Safety Act 85 of 1993 (OHS Act)',
    scope: 'Imposes statutory duties on employers to provide a safe working environment — including first aid facilities, fire prevention measures, and trained safety representatives. Training in these areas is not optional.',
  },
  {
    act: 'National Qualifications Framework Act 67 of 2008 (NQF Act)',
    scope: 'Provides the legislative basis for the NQF, the Quality Councils (QCTO, UMALUSI, CHE), and the credit accumulation and transfer framework underpinning our qualifications.',
  },
  {
    act: 'Broad-Based Black Economic Empowerment Act 53 of 2003 (B-BBEE Act)',
    scope: 'DUNMORE is a Level 1 B-BBEE contributor. Procuring training from DUNMORE contributes positively to your organisation\'s Skills Development and Supplier/Enterprise Development scorecard pillars.',
  },
  {
    act: 'National Veld and Forest Fire Act 101 of 1998',
    scope: 'Establishes obligations for landowners and employers in fire-prone areas regarding fire prevention and suppression. Underpins our Fire Fighting training range.',
  },
  {
    act: 'Compensation for Occupational Injuries and Diseases Act 130 of 1993 (COIDA)',
    scope: 'Requires employers to ensure workplace safety and provide first aid. DUNMORE First Aid certificates are the industry-recognised standard for COIDA compliance compliance purposes.',
  },
]

export default function AboutPage() {
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
            { label: 'About Us' },
          ]} />

          <div className="mt-6 max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">About DUNMORE</p>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'var(--text-4xl)' }}>
              Accredited Training You Can Trust
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              DUNMORE Training &amp; Skills Development is a Western Cape-based, SETA-accredited training provider
              committed to delivering practical, nationally recognised skills programmes that transform individuals
              and strengthen workplaces.
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€ Stats strip â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="bg-accent" aria-label="Key figures">
        <div className="container-wide">
          <dl className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-accent-dark/30">
            {stats.map(({ value, label }) => (
              <div key={label} className="py-8 px-6 text-center">
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span className="block font-display font-bold text-primary-dark" style={{ fontSize: 'var(--text-3xl)' }}>{value}</span>
                  <span className="block text-primary/70 text-sm font-medium mt-1">{label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* â”€â”€ Who We Are â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-surface" aria-labelledby="who-heading">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            {/* Text */}
            <div>
              <span className="block w-10 h-0.5 bg-accent mb-5" aria-hidden="true" />
              <h2 id="who-heading" className="font-display font-bold text-primary mb-6" style={{ fontSize: 'var(--text-3xl)' }}>
                Who We Are
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  DUNMORE Training &amp; Skills Development NPC is a non-profit company headquartered in Raithby,
                  Somerset West, with satellite offices in Cape Town and on the West Coast (Hopefield).
                </p>
                <p>
                  We are accredited by the <strong className="text-primary">FP&amp;M SETA</strong> (our primary sector authority),
                  registered with <strong className="text-primary">AgriSETA</strong>, and hold three active SDP registrations
                  with the <strong className="text-primary">Quality Council for Trades &amp; Occupations (QCTO)</strong>.
                  All programmes align with SAQA unit standards and the Skills Development Act 97 of 1998.
                </p>
                <p>
                  As a <strong className="text-primary">Level 1 BBBEE contributor</strong>, we are committed not only
                  to skills development but to broad-based transformation in the South African workforce.
                </p>
                <p>
                  From Basic First Aid to QCTO Occupational qualifications at NQF Level 5, our programmes are
                  delivered by qualified facilitators, assessed by registered independent assessors, and verified
                  by accredited moderators.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/programs"
                  className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-7 rounded-lg transition-colors duration-200"
                >
                  View Our Programmes
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-semibold py-3 px-7 rounded-lg border border-primary/25 hover:border-primary/50 transition-colors duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right — key credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Head Office', value: 'Somerset West', sub: 'Raithby, Western Cape' },
                { label: 'Entity Type', value: 'NPC', sub: 'Non-Profit Company' },
                { label: 'BBBEE Rating', value: 'Level 1', sub: 'Highest contributor status' },
                { label: 'Programme Levels', value: 'NQF 2–5', sub: 'QCTO occupational qualifications' },
              ].map(({ label, value, sub }) => (
                <div
                  key={label}
                  className="bg-surface-alt rounded-xl p-5 border border-dunmore-border flex flex-col gap-1"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">{label}</span>
                  <span className="font-display font-bold text-primary text-2xl">{value}</span>
                  <span className="text-slate-500 text-xs leading-snug">{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ Values â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-surface-alt" aria-labelledby="values-heading">
        <div className="container-wide max-w-4xl">
          <span className="block w-10 h-0.5 bg-accent mb-5" aria-hidden="true" />
          <h2 id="values-heading" className="font-display font-bold text-primary mb-3" style={{ fontSize: 'var(--text-3xl)' }}>
            Our Core Values
          </h2>
          <p className="text-slate-500 mb-10 leading-relaxed">
            Everything we do is guided by our commitment to quality, inclusion, practical impact, and honest certification.
          </p>
          <div className="space-y-0 border border-dunmore-border rounded-lg overflow-hidden">
            {values.map((v, i) => (
              <div key={v.title} className={`flex flex-col sm:flex-row gap-2 sm:gap-8 p-6 bg-white ${i < values.length - 1 ? 'border-b border-dunmore-border' : ''}`}>
                <p className="font-display font-bold text-primary sm:w-52 flex-shrink-0 text-sm leading-snug pt-0.5">{v.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Accreditations â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-surface" aria-labelledby="accred-heading">
        <div className="container-wide">
          <span className="block w-10 h-0.5 bg-accent mb-5" aria-hidden="true" />
          <h2 id="accred-heading" className="font-display font-bold text-primary mb-3" style={{ fontSize: 'var(--text-3xl)' }}>
            Certifications &amp; Accreditations
          </h2>
          <p className="text-slate-500 mb-10 max-w-2xl leading-relaxed">
            Our accreditations are the foundation of everything we deliver. Every programme, every assessment,
            and every certificate is backed by a recognised quality authority.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {accreditations.map(({ logo, alt, body, ref, desc }) => (
              <div
                key={body}
                className="bg-surface-alt rounded-xl border border-dunmore-border p-6 flex flex-col gap-4"
              >
                <div className="relative w-full h-14 flex items-center justify-start overflow-hidden">
                  <Image
                    src={logo}
                    alt={alt}
                    fill
                    className="object-contain object-left p-1"
                    sizes="200px"
                  />
                </div>
                <div>
                  <p className="font-display font-bold text-primary text-base">{body}</p>
                  <p className="text-slate-400 text-xs font-mono mt-0.5">{ref}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mt-2">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Registration Details */}
          <div className="mt-6 bg-surface-alt rounded-xl border border-dunmore-border p-6 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-10">
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Central Supplier Database (CSD):</span>
              <span className="font-mono font-bold text-primary text-sm">MAAA0160735</span>
            </div>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" aria-hidden="true" />
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Company Registration:</span>
              <span className="font-mono font-bold text-primary text-sm">2014/239650/07</span>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ Legislative Framework â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-surface-alt" aria-labelledby="legal-heading">
        <div className="container-wide max-w-4xl">
          <span className="block w-10 h-0.5 bg-accent mb-5" aria-hidden="true" />
          <h2 id="legal-heading" className="font-display font-bold text-primary mb-3" style={{ fontSize: 'var(--text-3xl)' }}>
            Legislative Framework
          </h2>
          <p className="text-slate-500 mb-2 leading-relaxed">
            All DUNMORE programmes are designed and delivered in alignment with South African law and national quality frameworks.
            The following legislation directly governs or informs our training mandate.
          </p>
          <p className="text-xs text-slate-400 mb-10">
            Legislation current as at the date of publication. Refer to the relevant government gazette for the latest amendments.
          </p>

          <div className="space-y-0 border border-dunmore-border rounded-lg overflow-hidden">
            {legislation.map((law, i) => (
              <div key={law.act} className={`flex flex-col sm:flex-row gap-2 sm:gap-8 p-6 bg-white ${i < legislation.length - 1 ? 'border-b border-dunmore-border' : ''}`}>
                <p className="font-semibold text-primary sm:w-72 flex-shrink-0 text-sm leading-snug pt-0.5">{law.act}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{law.scope}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-400 leading-relaxed">
            DUNMORE Training &amp; Skills Development NPC operates under and in full compliance with the above legislative framework.
            Our programmes are reviewed regularly to remain current with regulatory amendments and sector-specific updates issued by
            the Department of Employment and Labour, SAQA, the QCTO, and relevant SETAs.
          </p>
        </div>
      </section>

      {/* â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="relative py-20 sm:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,162,39,0.12),transparent_60%)]" aria-hidden="true" />
        <div className="relative container-wide max-w-3xl">
          <span className="block w-10 h-0.5 bg-accent mb-6" aria-hidden="true" />
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'var(--text-3xl)' }}>
            Ready to Upskill Your Team?
          </h2>
          <p className="text-slate-300 mb-10 text-lg leading-relaxed">
            Book a programme, request a quote for on-site training, or ask us about group pricing across the Western Cape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-light text-primary-dark font-bold py-3.5 px-8 rounded-lg transition-colors duration-200"
            >
              Browse Programmes
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-white font-semibold py-3.5 px-8 rounded-lg border border-white/30 hover:border-white/60 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
