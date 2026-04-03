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
                <a href="mailto:donny@dunmore.co.za" className="hover:text-accent transition-colors">
                  donny@dunmore.co.za
                </a>
                <a href="mailto:admin@dunmore.co.za" className="hover:text-accent transition-colors">
                  admin@dunmore.co.za
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
