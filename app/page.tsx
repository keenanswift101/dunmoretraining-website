import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { StatsBar } from '@/components/sections/StatsBar'
import { AccreditationBar } from '@/components/sections/AccreditationBar'
import { ProgramCategoryGrid } from '@/components/sections/ProgramCategoryGrid'
import { WhyDunmore } from '@/components/sections/WhyDunmore'
import { ClientPartnerCTA } from '@/components/sections/ClientPartnerCTA'

export const metadata: Metadata = {
  title: 'DUNMORE Training & Skills Development — SETA Accredited',
  description:
    "DUNMORE Training is South Africa's SETA-accredited, Level 1 BBBEE provider. Expert instructor-led training in First Aid, Fire Fighting, Health & Safety, Forestry and Event Medic Services.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AccreditationBar />
      <ProgramCategoryGrid />
      <WhyDunmore />
      <ClientPartnerCTA />
    </>
  )
}
