import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About Us' },
  { href: '/programs',  label: 'Programs' },
  { href: '/services',  label: 'Services' },
  { href: '/locations', label: 'Locations' },
  { href: '/contact',   label: 'Contact' },
]

const programLinks = [
  { href: '/programs/first-aid-level-1',                 label: 'First Aid Level 1' },
  { href: '/programs/first-aid-level-2',                 label: 'First Aid Level 2' },
  { href: '/programs/fire-marshall',                     label: 'Fire Marshall' },
  { href: '/programs/occupational-health-safety',        label: 'OHS Training' },
  { href: '/programs/specialised-chainsaw-operator',     label: 'Chainsaw Operator' },
  { href: '/programs',                                   label: 'View All Programs →' },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: '#', // TODO: update with Dunmore Facebook URL
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#', // TODO: update with Dunmore YouTube URL
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 6 11.998 6 11.998 6s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#', // TODO: update with Dunmore LinkedIn URL
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white" role="contentinfo">

      {/* ── Main grid ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5" aria-label="DUNMORE Training Home">
              <Image src="/logo.png" alt="DUNMORE crest" width={44} height={44} className="object-contain" />
              <div className="leading-tight">
                <p className="text-white font-display font-bold">DUNMORE</p>
                <p className="text-accent text-xs">Training &amp; Skills Development</p>
              </div>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              SETA-accredited, Level 1 BBBEE training provider. Head Office in Raithby,
              Somerset West, Western Cape.
            </p>
            <div className="flex gap-2">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`DUNMORE Training on ${label}`}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-accent hover:text-primary-dark transition-colors text-white/60"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul role="list" className="space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/55 hover:text-accent text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
              Popular Programs
            </h3>
            <ul role="list" className="space-y-2.5">
              {programLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/55 hover:text-accent text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-3 text-sm text-white/55">
              <p>
                Head Office<br />
                Raithby, Somerset West<br />
                7130, Western Cape
              </p>
              <p>
                <a href="tel:+27218423021" className="hover:text-accent transition-colors">
                  (+27) (0)21 842 3021
                </a>
              </p>
              <p>
                <a href="tel:+27845884121" className="hover:text-accent transition-colors">
                  +27 (0)84 588 4121
                </a>
              </p>
              <div className="flex flex-col gap-1">
                <a href="mailto:admin@dunmore.co.za" className="hover:text-accent transition-colors">
                  admin@dunmore.co.za
                </a>
                <a href="mailto:calbey@dunmore.co.za" className="hover:text-accent transition-colors text-xs">
                  calbey@dunmore.co.za (Director)
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/35">
            <p>© {new Date().getFullYear()} DUNMORE Training &amp; Skills Development. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1 justify-center text-center">
              <span>Reg: 2014/239650/07</span>
              <span>·</span>
              <span>SETA: FPM16/PRPACC-022</span>
              <span>·</span>
              <span>DoL: CI 296/3/12/1</span>
              <span>·</span>
              <span>VAT: 4410277448</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
