import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Only instantiate Resend if the API key exists, otherwise we return an error gracefully
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    if (!resend) {
      return NextResponse.json({ error: 'Resend API key not configured.' }, { status: 500 });
    }

    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // We send from onboarding@resend.dev to your verified email
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'anandpraroop@gmail.com', // destination email
      reply_to: email, // so you can reply directly to the sender
      subject: `Inquiry from ${name} via Portfolio`,
      html: `
        <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a; border-bottom: 1px solid #eaeaea; padding-bottom: 10px; margin-top: 0;">New Contact Request</h2>
          <p style="margin-bottom: 5px;"><strong>From:</strong> ${name}</p>
          <p style="margin-top: 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
          
          <div style="margin-top: 24px; padding: 20px; background-color: #f9fafb; border-radius: 8px; border: 1px solid #f3f4f6;">
            <p style="margin-top: 0; font-weight: 600; color: #4b5563; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Message Payload:</p>
            <p style="white-space: pre-wrap; margin-bottom: 0; color: #1f2937;">${message}</p>
          </div>
          
          <p style="margin-top: 32px; font-size: 12px; color: #9ca3af; border-top: 1px solid #eaeaea; padding-top: 16px;">
            This corresponds to an automated inquiry submitted via your portfolio website form.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
