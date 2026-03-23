import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image — local first aid training photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/first-aid.jpeg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          aria-hidden="true"
        />
        {/* Stronger overlay for local photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(12,24,52,0.97) 0%, rgba(17,31,63,0.90) 40%, rgba(17,31,63,0.60) 70%, rgba(17,31,63,0.20) 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 pt-32 sm:pt-40">
        <div className="max-w-2xl">

          {/* Live training indicator */}
          <div
            className="animate-fade-up inline-flex items-center gap-2.5 sm:gap-4 bg-white/8 backdrop-blur-sm border border-white/12 rounded-xl px-3.5 sm:px-5 py-3 sm:py-3.5 mb-8 max-w-full"
            style={{ animationDelay: '0ms' }}
            role="status"
            aria-label="1 active training session in progress"
          >
            {/* Pulsing live dot */}
            <span className="relative flex items-center justify-center w-3 h-3 shrink-0" aria-hidden="true">
              <span className="live-ping absolute inline-block w-3 h-3 rounded-full bg-emerald-400 opacity-75" />
              <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
            </span>

            <div className="flex flex-col leading-tight min-w-0">
              <span className="text-white font-semibold text-xs sm:text-sm tracking-wide">
                1 Active Training
              </span>
              <span className="text-white/50 text-[11px] sm:text-xs mt-0.5 truncate">
                Basic First Aid &mdash; Somerset West
              </span>
            </div>

            {/* Subtle separator + count */}
            <span className="hidden sm:inline ml-1 pl-4 border-l border-white/15 text-white/40 text-xs font-medium tabular-nums">
              25 Programs
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="animate-fade-up font-display font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'var(--text-4xl)', animationDelay: '100ms' }}
          >
            Expert Training.<br />
            Real Skills.<br />
            <span className="text-accent">Measurable Results.</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="animate-fade-up text-white/75 leading-relaxed mb-10 max-w-xl"
            style={{ fontSize: 'var(--text-lg)', animationDelay: '200ms' }}
          >
            South Africa&apos;s trusted SETA-accredited training partner — First Aid,
            Fire Fighting, Health &amp; Safety, Forestry, and Event Medic Services.
            Instructor-led. Follow-up monitored.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up flex flex-wrap gap-4"
            style={{ animationDelay: '300ms' }}
          >
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-2xl text-sm sm:text-base"
            >
              Browse Programs
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all hover:-translate-y-1 backdrop-blur-sm text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>

      {/* Accreditation stamp column — top right */}
      <div
        className="hidden md:flex absolute top-28 right-6 lg:right-12 z-20 animate-fade-in flex-col items-end gap-3"
        style={{ animationDelay: '600ms' }}
      >
        {/* SETA stamp — real accreditation sticker */}
        <div role="img" aria-label="SETA Accredited — FPM16/PRPACC-022">
          <Image
            src="/seta1.png"
            alt="Officially SETA Accredited — FPM16/PRPACC-022"
            width={120}
            height={120}
            className="drop-shadow-2xl"
            priority
          />
        </div>

        {/* Mini accreditation badges — 2×2 grid */}
        <ul
          className="grid grid-cols-2 gap-2 mt-1"
          aria-label="Accreditation bodies"
        >
          <li>
            <Image
              src="/seta-agri.png"
              alt="AgriSETA Registered"
              width={120}
              height={120}
              className="drop-shadow-xl"
            />
          </li>
          <li>
            <Image
              src="/qcto.png"
              alt="QCTO Accredited ×3 — NQF Levels 2–5"
              width={120}
              height={120}
              className="drop-shadow-xl"
            />
          </li>
          <li>
            <Image
              src="/dol.png"
              alt="Department of Labour Registered — CI 296/3/12/1"
              width={120}
              height={120}
              className="drop-shadow-xl"
            />
          </li>
          <li>
            <Image
              src="/bbbee.png"
              alt="Certified Level 1 B-BBEE Contributor"
              width={120}
              height={120}
              className="drop-shadow-xl"
            />
          </li>
        </ul>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 text-xs animate-bounce"
        aria-hidden="true"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

