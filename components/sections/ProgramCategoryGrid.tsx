import Image from 'next/image'
import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'

const categories = [
  {
    name: 'First Aid',
    count: 6,
    description: 'From Basic Life Support to QCTO-accredited Emergency First Aid Responder — all levels covered.',
    href: '/first-aid',
    image: '/first-aid-trainig.avif',
    imageAlt: 'Dunmore first aid training session in progress',
  },
  {
    name: 'Fire Fighting',
    count: 4,
    description: 'Fire awareness to advanced wildfire suppression — nationally certified fire safety training.',
    href: '/fire-fighting',
    image: '/fire-fighting-training.jpg',
    imageAlt: 'Dunmore fire fighting training — participants in protective gear',
  },
  {
    name: 'Health & Safety',
    count: 3,
    description: 'OHS Act compliance, health and safety representatives and HIV awareness programmes.',
    href: '/health-safety',
    image: '/health-saftey-training.jpg',
    imageAlt: 'Dunmore health and safety training in the workplace',
  },
  {
    name: 'Forestry, Agriculture & Field',
    count: 13,
    description: 'Chainsaw, forestry SHE, incident investigation, landscape gardening, pest management and more.',
    href: '/forestry',
    image: '/forestry-field-training.jpg',
    imageAlt: 'Dunmore forestry and field skills training',
  },
  {
    name: 'Event Medic Services',
    count: null,
    description: 'Standby medic teams for school and sports events across the Western Cape.',
    href: '/services#event-medic',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=700&q=80',
    imageAlt: 'Paramedic team ready at a sporting event',
  },
  {
    name: 'Other Accredited Programmes',
    count: 6,
    description: 'Engineering tools, personal finance, peer education, field safety and water safety.',
    href: '/programs?category=other',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80',
    imageAlt: 'Adult learners in an accredited training classroom',
  },
]

export function ProgramCategoryGrid() {
  return (
    <section
      className="section-padding bg-surface"
      aria-labelledby="programs-heading"
    >
      <div className="container-wide">
        <SectionHeader
          eyebrow="What We Offer"
          title="Training for Every Discipline"
          subtitle="30+ SETA and QCTO-accredited programs across 6 categories — all compliant with SAQA unit standards and the Department of Labour."
          id="programs-heading"
        />

        <ul
          role="list"
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map(({ name, count, description, href, image, imageAlt }) => (
            <li key={name}>
              <Link
                href={href}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-dunmore-border hover:border-primary/20 hover:shadow-md transition-all duration-200 h-full"
              >
                {/* Image header */}
                <div className="relative h-40 sm:h-44 bg-slate-100 overflow-hidden">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover object-center scale-[0.93] group-hover:scale-100 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold text-primary text-base leading-snug">
                      {name}
                    </h3>
                    {count !== null && (
                      <span className="text-xs text-slate-400 font-medium flex-shrink-0 pt-0.5">{count} programmes</span>
                    )}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {description}
                  </p>
                  <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:gap-2 gap-1.5 transition-all">
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}



