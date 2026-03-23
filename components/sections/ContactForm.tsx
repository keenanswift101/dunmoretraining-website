'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

interface FormState {
  name: string
  email: string
  phone: string
  company: string
  enquiryType: string
  program: string
  message: string
}

const enquiryOptions = [
  { value: 'training-info',  label: 'Training Information' },
  { value: 'training-quote', label: 'Training Quote / Group Booking' },
  { value: 'medic-inquiry',  label: 'Event Medic Inquiry' },
  { value: 'medic-quote',    label: 'Event Medic Quote' },
  { value: 'first-aid-kit',  label: 'First Aid Kit Supply' },
  { value: 'other',          label: 'Other' },
]

export function ContactForm() {
  const searchParams = useSearchParams()

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    enquiryType: '',
    program: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  // Pre-fill enquiry type and program from URL params
  useEffect(() => {
    const enquiry = searchParams.get('enquiry') ?? searchParams.get('program')
    if (enquiry) {
      const isEnquiryType = enquiryOptions.some((o) => o.value === enquiry)
      if (isEnquiryType) {
        setForm((f) => ({ ...f, enquiryType: enquiry }))
      } else {
        setForm((f) => ({ ...f, program: decodeURIComponent(enquiry), enquiryType: 'training-info' }))
      }
    }
  }, [searchParams])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or email us directly at admin@dunmore.co.za.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-green-800 text-xl mb-2">Message Sent!</h3>
        <p className="text-green-700 text-sm leading-relaxed">
          Thanks for reaching out. We&apos;ll get back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name + Company */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Your Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-colors placeholder:text-slate-400"
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Company / Organisation
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={handleChange}
            placeholder="Acme Forestry (Pty) Ltd"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-colors placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.co.za"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-colors placeholder:text-slate-400"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Phone Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+27 82 123 4567"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-colors placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Enquiry type */}
      <div>
        <label htmlFor="contact-enquiry" className="block text-sm font-semibold text-slate-700 mb-1.5">
          What can we help with? <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          id="contact-enquiry"
          name="enquiryType"
          required
          value={form.enquiryType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-colors bg-white text-slate-700"
        >
          <option value="" disabled>Select an enquiry type…</option>
          {enquiryOptions.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      {/* Specific programme (optional, pre-filled from URL) */}
      {(form.enquiryType === 'training-info' || form.enquiryType === 'training-quote') && (
        <div>
          <label htmlFor="contact-program" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Specific Programme (if known)
          </label>
          <input
            id="contact-program"
            name="program"
            type="text"
            value={form.program}
            onChange={handleChange}
            placeholder="e.g. First Aid Level 1, Chainsaw Operator…"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-colors placeholder:text-slate-400"
          />
        </div>
      )}

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Your Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your training needs — number of learners, preferred dates, location, any specific requirements…"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-colors resize-none placeholder:text-slate-400"
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <p role="alert" className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-accent hover:bg-accent-light text-primary-dark font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed text-sm"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>

      <p className="text-xs text-slate-400 text-center">
        We respond within one business day. Or call{' '}
        <a href="tel:+27218423021" className="text-primary hover:underline">
          (+27) (0)21 842 3021
        </a>
        .
      </p>
    </form>
  )
}
