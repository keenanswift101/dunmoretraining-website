'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About' },
  { href: '/programs',  label: 'Programs' },
  { href: '/services',  label: 'Services' },
  { href: '/locations', label: 'Locations' },
  { href: '/contact',   label: 'Contact' },
]

export function NavBar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-primary shadow-xl'
          : 'bg-primary/95 backdrop-blur-md'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* ── Top row ───────────────────────────────────────── */}
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0"
            aria-label="DUNMORE Training & Skills Development — Home"
          >
            <Image
              src="/logo.png"
              alt="DUNMORE Training coat of arms"
              width={48}
              height={48}
              className="object-contain w-12 h-12"
              priority
            />
            <div className="leading-tight">
              <p className="text-white font-display font-bold text-lg tracking-wide">
                DUNMORE
              </p>
              <p className="text-accent text-xs font-medium">
                Training &amp; Skills Development
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5" role="list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === href
                      ? 'text-accent bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-1.5 bg-accent hover:bg-accent-light text-primary-dark font-bold text-sm px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get a Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* ── Mobile menu ────────────────────────────────────── */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-white/10 pb-4"
          >
            <ul className="flex flex-col gap-0.5 pt-3" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      pathname === href
                        ? 'text-accent bg-white/10'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link
                  href="/contact"
                  className="block bg-accent hover:bg-accent-light text-primary-dark font-bold text-sm px-4 py-3 rounded-xl text-center transition-colors"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
