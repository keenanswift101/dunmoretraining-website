import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'Services | Dunmore Training & Skills Development',
  description:
    'DUNMORE Training offers Event Medic Services, First Aid Kit supply, and on-site corporate training across the Western Cape. Staffed by qualified Emergency First Aid Responders.',
  openGraph: {
    title: 'Services | Dunmore Training & Skills Development',
    description:
      'Standby medic teams for events, first aid kit supply, and on-site training across Western Cape.',
    type: 'website',
  },
}

const medicChecklist = [
  'Qualified Emergency First Aid Responders (EFAR)',
  'Fully equipped medical kits and supplemental oxygen',
  'Rapid on-site emergency response and stabilisation capability',
  'Clear escalation protocols to emergency medical services',
  'Coverage across the Western Cape and surrounding regions',
  'Compliance documentation for event organisers',
]

const kitTypes = [
  {
    name: 'Workplace First Aid Kit',
    desc: 'OHSA-compliant kits sized to your workforce according to the First Aid Regulations (GNR 1857 of 1990). Refill and restock service available.',
  },
  {
    name: 'Event First Aid Kit',
    desc: 'Extended kit designed for public events with elevated risk profiles — includes trauma management items and expanded consumables.',
  },
  {
    name: 'Vehicle and Field Kit',
    desc: 'Compact, durable kits for forestry operations, field crews, and mobile teams working in remote or high-risk environments.',
  },
  {
    name: 'Custom Kit Specification',
    desc: 'We assess your workplace hazard profile and specify an appropriate kit — ideal for high-risk sectors covered under the OHS Act.',
  },
]

const onsiteDetails = [
  { label: 'Minimum Group', value: '6 learners' },
  { label: 'Scheduling', value: 'Flexible, around your operational hours' },
  { label: 'Documentation', value: 'All materials, assessments and certificates included' },
  { label: 'Coverage', value: 'Western Cape-wide and beyond' },
  { label: 'Available Programmes', value: 'All 30+ accredited DUNMORE programmes' },
  { label: 'Pricing', value: 'Group discount rates apply from 6 learners' },
]

export default function ServicesPage() {
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
            { label: 'Services' },
          ]} />

          <div className="mt-6 max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'var(--text-4xl)' }}>
              Services Beyond Training
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              In addition to our accredited training programmes, DUNMORE provides specialised ancillary services —
              standby medic cover for events, compliant first aid kit supply, and on-site corporate training delivered at your facility.
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€ Service Navigation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <nav className="bg-white border-b border-slate-200 sticky top-16 z-20" aria-label="Services navigation">
        <div className="container-wide">
          <div className="flex gap-4 sm:gap-8 overflow-x-auto py-4 text-sm font-semibold text-slate-500">
            <a href="#event-medic" className="whitespace-nowrap hover:text-primary transition-colors">Event Medic Services</a>
            <a href="#first-aid-kits" className="whitespace-nowrap hover:text-primary transition-colors">First Aid Kit Supply</a>
            <a href="#onsite-training" className="whitespace-nowrap hover:text-primary transition-colors">On-Site Training</a>
          </div>
        </div>
      </nav>

      {/* â”€â”€ Event Medic Services â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-surface" id="event-medic" aria-labelledby="medic-heading">
        <div className="container-wide max-w-4xl">
          <div className="border-b border-slate-200 pb-3 mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Service 01</p>
            <h2 id="medic-heading" className="font-display font-bold text-primary" style={{ fontSize: 'var(--text-3xl)' }}>
              Event Medic Services
            </h2>
          </div>

          <div className="prose-like space-y-4 text-slate-600 leading-relaxed mb-8">
            <p>
              DUNMORE provides <strong className="text-primary">qualified standby medic teams</strong> staffed by registered Emergency
              First Aid Responders (EFAR) for schools, corporate organisations, sporting bodies, and event coordinators across the Western Cape.
            </p>
            <p>
              Under the <strong className="text-primary">Occupational Health and Safety Act 85 of 1993</strong> and applicable municipal
              event safety by-laws, organisers of public gatherings are required to ensure that adequate first aid provision is in place.
              DUNMORE&apos;s event medic service fulfils this obligation fully — with trained responders, proper equipment, and documented incident reporting.
            </p>
            <p>
              Our medics are equipped to manage anything from minor injuries to critical emergency stabilisation, with
              clear escalation protocols to EMS services when required.
            </p>
          </div>

          <h3 className="font-display font-semibold text-primary mb-4 text-base uppercase tracking-wide">Service Includes</h3>
          <ul className="space-y-2.5 mb-8" aria-label="Event medic service checklist">
            {medicChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-accent mt-2.5 flex-shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-surface-alt rounded-lg border border-dunmore-border p-5 mb-8 text-sm text-slate-600">
            <p className="font-semibold text-primary mb-1">Coverage Area</p>
            <p>Western Cape and surrounding regions. Contact us to confirm availability for your event date, venue, and expected attendance numbers.</p>
          </div>

          <div className="border-t border-slate-200 pt-6 flex flex-wrap gap-3">
            <Link
              href="/contact?enquiry=medic-inquiry"
              className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-7 rounded-lg transition-colors duration-200"
            >
              Enquire About Medic Cover
            </Link>
          </div>
        </div>
      </section>

      {/* â”€â”€ First Aid Kit Supply â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-surface-alt" id="first-aid-kits" aria-labelledby="kits-heading">
        <div className="container-wide max-w-4xl">
          <div className="border-b border-slate-200 pb-3 mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Service 02</p>
            <h2 id="kits-heading" className="font-display font-bold text-primary" style={{ fontSize: 'var(--text-3xl)' }}>
              First Aid Kit Supply
            </h2>
          </div>

          <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
            <p>
              The <strong className="text-primary">First Aid Regulations (GNR 1857 of 7 December 1990)</strong>, promulgated under the
              Occupational Health and Safety Act 85 of 1993, legally require employers to ensure that first aid kits are available,
              maintained, and accessible to employees at all times. Non-compliance constitutes a contravention of the Act.
            </p>
            <p>
              DUNMORE supplies properly specified first aid kits matched to your workplace risk profile and workforce size. We also
              offer ongoing restock and service visits to ensure your kits remain compliant and fully stocked.
            </p>
          </div>

          <h3 className="font-display font-semibold text-primary mb-4 text-base uppercase tracking-wide">Kit Options</h3>
          <div className="space-y-0 border border-dunmore-border rounded-lg overflow-hidden mb-8">
            {kitTypes.map((kit, i) => (
              <div key={kit.name} className={`flex flex-col sm:flex-row gap-3 p-5 sm:gap-6 ${i < kitTypes.length - 1 ? 'border-b border-dunmore-border' : ''} bg-white`}>
                <div className="sm:w-56 flex-shrink-0">
                  <p className="font-semibold text-primary text-sm">{kit.name}</p>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{kit.desc}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-6 flex flex-wrap gap-3">
            <Link
              href="/contact?enquiry=first-aid-kit"
              className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-7 rounded-lg transition-colors duration-200"
            >
              Request a Kit Quote
            </Link>
          </div>
        </div>
      </section>

      {/* â”€â”€ On-Site Training â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-surface" id="onsite-training" aria-labelledby="onsite-heading">
        <div className="container-wide max-w-4xl">
          <div className="border-b border-slate-200 pb-3 mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Service 03</p>
            <h2 id="onsite-heading" className="font-display font-bold text-primary" style={{ fontSize: 'var(--text-3xl)' }}>
              On-Site Training at Your Facility
            </h2>
          </div>

          <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
            <p>
              All DUNMORE accredited training programmes can be delivered directly at your workplace, farm, factory, or office.
              On-site delivery eliminates learner travel time, reduces operational disruption, and allows scheduling to align
              with your production or operational calendar.
            </p>
            <p>
              Group training is available for a minimum of 6 learners. All assessment, documentation, and certification is handled
              by our team — from registration through to final certificate of competence. Group pricing applies.
            </p>
          </div>

          <h3 className="font-display font-semibold text-primary mb-4 text-base uppercase tracking-wide">Service Details</h3>
          <div className="space-y-0 border border-dunmore-border rounded-lg overflow-hidden mb-8">
            {onsiteDetails.map((row, i) => (
              <div key={row.label} className={`flex flex-col sm:flex-row gap-1 sm:gap-6 p-4 ${i < onsiteDetails.length - 1 ? 'border-b border-dunmore-border' : ''} bg-white`}>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 sm:w-40 flex-shrink-0 pt-0.5">{row.label}</p>
                <p className="text-slate-700 text-sm">{row.value}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-6 flex flex-wrap gap-3">
            <Link
              href="/contact?enquiry=training-quote"
              className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-7 rounded-lg transition-colors duration-200"
            >
              Request a Group Quote
            </Link>
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="relative py-20 sm:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,162,39,0.12),transparent_60%)]" aria-hidden="true" />
        <div className="relative container-wide max-w-3xl">
          <span className="block w-10 h-0.5 bg-accent mb-6 rounded-full" aria-hidden="true" />
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'var(--text-3xl)' }}>
            Not Sure What You Need?
          </h2>
          <p className="text-slate-300 mb-10 text-lg leading-relaxed">
            Speak to our team. We&apos;ll assess your requirements and recommend the right service — whether medic cover,
            kit supply, group training, or a combination.
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
              Browse Training Programmes
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
