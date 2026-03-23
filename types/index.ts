export interface Program {
  slug: string
  title: string
  unitStandard?: string
  qctoCode?: string
  nqfLevel?: number
  credits?: number
  accreditationNumber?: string
  accreditationBody?: string
  category: string
  categoryLabel: string
  description: string
  outcomes?: string[]
  entryRequirements?: string[]
  targetAudience?: string[]
  assessmentMethod?: string
  certification?: string
  duration?: string
  delivery?: string
  accredited: boolean
  popular?: boolean
  image?: string
  imageAlt?: string
}

export interface ProgramCategory {
  id: string
  label: string
  description: string
  count: number
  image: string
  imageAlt: string
  badgeClass: string
}

export interface Location {
  id: string
  name: string
  address: string
  city: string
  province: string
  postalCode: string
  phone?: string
  email?: string
  mapUrl?: string
  isHeadOffice?: boolean
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
}

export interface ContactFormData {
  company?: string
  name: string
  phone: string
  email: string
  enquiryTypes: string[]
  message: string
}

export type ContactEnquiryType =
  | 'training-info'
  | 'training-quote'
  | 'medic-inquiry'
  | 'medic-quote'
  | 'first-aid-kit'
  | 'other'
