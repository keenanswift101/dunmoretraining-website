import { SectionHeader } from '@/components/ui/SectionHeader'

// ─── Animated artifacts ───────────────────────────────────────

function ShieldArtifact() {
  return (
    <div className="flex items-center justify-center h-32" aria-hidden="true">
      <svg
        viewBox="0 0 80 90"
        width="80"
        style={{ animation: 'shieldPulse 3s ease-in-out infinite' }}
      >
        {/* Outer shield */}
        <path
          d="M40 4L8 18v22c0 20 13.6 38.7 32 44 18.4-5.3 32-24 32-44V18L40 4z"
          fill="#1a2f5e"
          opacity="0.12"
        />
        {/* Inner shield */}
        <path
          d="M40 12L14 24v16c0 15.5 10.2 29 26 33 15.8-4 26-17.5 26-33V24L40 12z"
          fill="#1a2f5e"
        />
        {/* Tick */}
        <polyline
          points="28,44 37,53 54,36"
          fill="none"
          stroke="#c9a227"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="40"
          style={{ animation: 'writeIn 1.2s ease forwards 0.3s', strokeDashoffset: 40 }}
        />
      </svg>
    </div>
  )
}

function ChalkboardArtifact() {
  return (
    <div className="flex items-center justify-center h-32" aria-hidden="true">
      <svg viewBox="0 0 100 75" width="110">
        {/* Board */}
        <rect x="4" y="4" width="92" height="58" rx="4" fill="#1a2f5e" />
        {/* Stand left */}
        <line x1="28" y1="62" x2="20" y2="72" stroke="#1a2f5e" strokeWidth="4" strokeLinecap="round" />
        {/* Stand right */}
        <line x1="72" y1="62" x2="80" y2="72" stroke="#1a2f5e" strokeWidth="4" strokeLinecap="round" />
        {/* Line 1 */}
        <line
          x1="16" y1="24" x2="84" y2="24"
          stroke="#c9a227" strokeWidth="3" strokeLinecap="round"
          strokeDasharray="68"
          style={{ animation: 'writeIn 0.9s ease forwards 0.1s', strokeDashoffset: 68 }}
        />
        {/* Line 2 */}
        <line
          x1="16" y1="37" x2="64" y2="37"
          stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"
          strokeDasharray="48"
          style={{ animation: 'writeIn 0.9s ease forwards 0.5s', strokeDashoffset: 48 }}
        />
        {/* Line 3 */}
        <line
          x1="16" y1="49" x2="50" y2="49"
          stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4"
          strokeDasharray="34"
          style={{ animation: 'writeIn 0.9s ease forwards 0.9s', strokeDashoffset: 34 }}
        />
      </svg>
    </div>
  )
}

function BarsArtifact() {
  const bars = [
    { x: 12, h: 32, delay: '0.1s', color: '#1a2f5e', opacity: '0.35' },
    { x: 38, h: 50, delay: '0.35s', color: '#1a2f5e', opacity: '0.6' },
    { x: 64, h: 68, delay: '0.6s', color: '#c9a227', opacity: '1' },
  ]
  return (
    <div className="flex items-center justify-center h-32" aria-hidden="true">
      <svg viewBox="0 0 100 80" width="100">
        {/* Baseline */}
        <line x1="6" y1="74" x2="94" y2="74" stroke="#e2e8f0" strokeWidth="2" />
        {bars.map((b) => (
          <rect
            key={b.x}
            x={b.x}
            y={74 - b.h}
            width="24"
            height={b.h}
            rx="4"
            fill={b.color}
            fillOpacity={b.opacity}
            style={{
              transformOrigin: `${b.x + 12}px 74px`,
              animation: `barsRise 0.8s cubic-bezier(0,0,0.2,1) forwards ${b.delay}`,
              transform: 'scaleY(0)',
            }}
          />
        ))}
      </svg>
    </div>
  )
}

function MedalArtifact() {
  return (
    <div className="flex items-center justify-center h-32" aria-hidden="true">
      <svg
        viewBox="0 0 80 90"
        width="70"
        style={{ animation: 'medalBounce 2.8s ease-in-out infinite 1s' }}
      >
        {/* Ribbon left */}
        <path d="M28 10 L20 40 L40 32 Z" fill="#c9a227" opacity="0.7" />
        {/* Ribbon right */}
        <path d="M52 10 L60 40 L40 32 Z" fill="#c9a227" opacity="0.7" />
        {/* Medal disc */}
        <circle cx="40" cy="56" r="28" fill="#1a2f5e" />
        <circle cx="40" cy="56" r="22" fill="none" stroke="#c9a227" strokeWidth="2.5" />
        {/* Star */}
        <text x="40" y="62" textAnchor="middle" fontSize="18" fill="#c9a227" fontFamily="serif">1</text>
      </svg>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────

const features = [
  {
    title: 'SETA & SAQA Accredited',
    description:
      'Every program is formally accredited by SETA, aligned to SAQA unit standards and NQF — so your certification is recognised nationally by employers and government.',
    artifact: <ShieldArtifact />,
  },
  {
    title: 'Instructor-Led Training',
    description:
      'All courses combine theory with hands-on practical sessions delivered by experienced instructors — ensuring real skills transfer, not just ticking boxes.',
    artifact: <ChalkboardArtifact />,
  },
  {
    title: 'Follow-up M&E',
    description:
      'We conduct post-training monitoring and evaluation to confirm skills are applied in the workplace — not just remembered in a classroom.',
    artifact: <BarsArtifact />,
  },
  {
    title: 'Level 1 BBBEE',
    description:
      "As a Level 1 BBBEE contributor, every rand spent with Dunmore maximises your company's BEE scorecard — a critical advantage for government and corporate procurement.",
    artifact: <MedalArtifact />,
  },
]

export function WhyDunmore() {
  return (
    <section
      className="section-padding bg-surface-alt"
      aria-labelledby="why-dunmore-heading"
    >
      <div className="container-wide">
        <SectionHeader
          eyebrow="Why Choose Dunmore"
          title="Training You Can Trust"
          subtitle="We don&#39;t just deliver courses — we build skills that stick, backed by nationally recognised accreditation and genuine follow-through."
          id="why-dunmore-heading"
        />

        <ul
          role="list"
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map(({ title, description, artifact }) => (
            <li
              key={title}
              className="bg-white rounded-2xl overflow-hidden border border-dunmore-border shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Animated artifact area */}
              <div className="bg-slate-50 border-b border-dunmore-border flex items-center justify-center">
                {artifact}
              </div>

              {/* Text */}
              <div className="p-5 sm:p-6">
                <h3 className="font-display font-bold text-primary text-base mb-2">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
