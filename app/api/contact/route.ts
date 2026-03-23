import { NextResponse } from 'next/server'

interface ContactPayload {
  name?: string
  email?: string
  phone?: string
  company?: string
  enquiryType?: string
  program?: string
  message?: string
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json()

    // Basic validation
    if (!body.name || !body.email || !body.phone || !body.message || !body.enquiryType) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 },
      )
    }

    // Email format check
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    // TODO: Wire up email sending here.
    // Example with Resend (https://resend.com):
    //   import { Resend } from 'resend'
    //   const resend = new Resend(process.env.RESEND_API_KEY)
    //   await resend.emails.send({
    //     from: 'website@dunmore.co.za',
    //     to: ['admin@dunmore.co.za'],
    //     subject: `New enquiry: ${body.enquiryType} from ${body.name}`,
    //     text: `
    //       Name: ${body.name}
    //       Email: ${body.email}
    //       Phone: ${body.phone}
    //       Company: ${body.company ?? '—'}
    //       Enquiry: ${body.enquiryType}
    //       Programme: ${body.program ?? '—'}
    //       Message: ${body.message}
    //     `
    //   })

    // Log for now (server-side only — safe)
    console.log('[Contact] New enquiry:', {
      name: body.name,
      email: body.email,
      enquiryType: body.enquiryType,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
