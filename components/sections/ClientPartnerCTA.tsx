import Link from 'next/link'

export function ClientPartnerCTA() {
  return (
    <section
      className="relative overflow-hidden bg-accent"
      aria-labelledby="partner-cta-heading"
    >
      {/* Subtle dot-grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #111f3f 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Eyebrow */}
        <p className="text-primary/60 text-xs font-bold uppercase tracking-widest mb-4">
          Client Partner Programme
        </p>

        {/* Headline */}
        <h2
          id="partner-cta-heading"
          className="font-display font-bold text-primary-dark leading-tight mb-5"
          style={{ fontSize: 'var(--text-3xl)' }}
        >
          Ensure Your Staff Get the Best<br className="hidden sm:block" />
          Accredited Training &amp; Certification
        </h2>

        {/* Body */}
        <p
          className="text-primary/75 leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ fontSize: 'var(--text-lg)' }}
        >
          Join our Corporate Partner Programme. We handle everything — scheduling,
          compliance, SETA paperwork and follow-up monitoring — so you can focus
          on running your business.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            Contact Us Today
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary-dark font-semibold px-8 py-4 rounded-xl transition-all border border-primary/20"
          >
            Browse All Programs
          </Link>
        </div>
      </div>
    </section>
  )
}
