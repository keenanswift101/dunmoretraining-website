import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Dunmore Training & Skills Development',
  description:
    'Get in touch with DUNMORE Training — enquire about programmes, request a group quote, book event medic cover, or order a first aid kit. We respond within one business day.',
  openGraph: {
    title: 'Contact DUNMORE Training & Skills Development',
    description:
      'Reach out for training information, quotes, event medic services, and first aid kit supply. Somerset West, Cape Town, Hopefield.',
    type: 'website',
  },
}

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Head Office',
    lines: ['Raithby, Somerset West', '7130, Western Cape, South Africa'],
    link: {
      href: 'https://maps.google.com/?q=Raithby,+Somerset+West,+7130,+South+Africa',
      label: 'View on Maps',
      external: true,
    },
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    lines: ['(+27) (0)21 842 3021', '+27 (0)84 588 4121'],
    link: { href: 'tel:+27218423021', label: 'Call us', external: false },
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    lines: ['donny@dunmore.co.za', 'admin@dunmore.co.za'],
    link: { href: 'mailto:donny@dunmore.co.za', label: 'Send email', external: false },
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Office Hours',
    lines: ['Mon – Fri: 08:00 – 17:00', 'Sat – Sun: By appointment'],
    link: null,
  },
]

export default function ContactPage() {
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
            { label: 'Contact' },
          ]} />

          <div className="mt-6 max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'var(--text-4xl)' }}>
              We&apos;d Love to Hear From You
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Training enquiry, group booking, event medic cover, or first aid kit supply — send us a message
              and we&apos;ll get back to you within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Body ──────────────────────────────────── */}
      <section className="section-padding bg-surface-alt" aria-label="Contact information and form">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-5 items-start">

            {/* Left — Contact info */}
            <aside className="lg:col-span-2 space-y-4">
              <div>
                <span className="block w-10 h-1 bg-accent rounded-full mb-4" aria-hidden="true" />
                <h2 className="font-display font-bold text-primary text-2xl mb-2">
                  Contact Details
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our office team handles all enquiries, enrollments, and bookings from our
                  Somerset West head office.
                </p>
              </div>

              <div className="space-y-3">
                {contactDetails.map(({ icon, label, lines, link }) => (
                  <div
                    key={label}
                    className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 text-primary">
                        {icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">{label}</p>
                        {lines.map((l) => (
                          <p key={l} className="text-slate-700 text-sm font-medium">{l}</p>
                        ))}
                        {link && (
                          <a
                            href={link.href}
                            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="inline-flex items-center gap-1 text-xs text-primary hover:text-accent font-semibold mt-2 transition-colors"
                          >
                            {link.label}
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick links */}
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Quick Links</p>
                <div className="space-y-2">
                  {[
                    { href: '/programs', label: 'Browse all programmes' },
                    { href: '/services', label: 'Event medic services' },
                    { href: '/locations', label: 'Our locations' },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center gap-2 text-sm text-primary hover:text-accent font-medium transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                {/* Gold accent top */}
                <div className="h-1.5 bg-gradient-to-r from-accent via-accent-light to-accent" aria-hidden="true" />
                <div className="p-6 sm:p-8">
                  <h2 className="font-display font-bold text-primary text-xl mb-6">Send Us a Message</h2>
                  <Suspense fallback={<div className="space-y-4">{[...Array(5)].map((_, i) => <div key={i} className="h-12 rounded-xl bg-slate-100 animate-pulse" />)}</div>}>
                    <ContactForm />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
