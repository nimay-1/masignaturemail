import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import validator from 'validator'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    if (
      !validator.isLength(name, { min: 2, max: 50 }) ||
      !validator.isEmail(email) ||
      !validator.isLength(subject, { min: 3, max: 100 }) ||
      !validator.isLength(message, { min: 10, max: 1000 })
    ) {
      return NextResponse.json({ error: 'Champs invalides' }, { status: 400 })
    }

    // 📬 Envoi email
    await resend.emails.send({
      from: '"Ma Signature Mail" <contact@contact.masignaturemail.com>',
      to: 'contact@masignaturemail.com',
      replyTo: email,
      subject: `📝 ${subject}`,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <p><strong>Message :</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[API ERROR]', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
