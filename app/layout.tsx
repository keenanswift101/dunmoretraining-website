import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/layout/NavBar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { FireBanner } from '@/components/ui/FireBanner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'DUNMORE Training & Skills Development',
    template: '%s | DUNMORE Training',
  },
  description:
    "South Africa's SETA-accredited, Level 1 BBBEE training provider. 25+ accredited programs in First Aid, Fire Fighting, Health & Safety, Forestry and Event Medic Services across 4 locations in the Western Cape.",
  keywords: [
    'SETA accredited training',
    'first aid training',
    'fire fighting training',
    'Level 1 BBBEE',
    'Western Cape training',
    'Somerset West training',
    'occupational health safety',
    'chainsaw operator',
    'DUNMORE training',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.dunmore.co.za',
    siteName: 'DUNMORE Training & Skills Development',
    title: 'DUNMORE Training & Skills Development',
    description:
      'SETA-accredited training provider — First Aid, Fire Fighting, Health & Safety, Forestry & Event Medic Services.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <NavBar />
        <FireBanner />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
