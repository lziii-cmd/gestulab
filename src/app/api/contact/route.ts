import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, project, message } = await request.json();

    if (!name || !email || !message || !project) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 });
    }

    const { error: resendError } = await resend.emails.send({
      from: 'Gëstu Systems <onboarding@resend.dev>',
      to: 'ngomabdoubabou@outlook.fr',
      replyTo: email,
      subject: `[Gëstu Systems] Nouveau message de ${name}`,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #6366F1, #06B6D4); padding: 28px 32px; border-radius: 10px 10px 0 0; margin: -32px -32px 28px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 26px; font-weight: 900; letter-spacing: -0.5px;">Gëstu Systems</h1>
            <p style="color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 13px;">Nouveau message depuis le portfolio</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; width: 130px; vertical-align: top; border-bottom: 1px solid #e2e8f0;">Nom</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600; border-bottom: 1px solid #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top; border-bottom: 1px solid #e2e8f0;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #6366F1; text-decoration: none;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top; border-bottom: 1px solid #e2e8f0;">Téléphone</td>
              <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${phone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Type de projet</td>
              <td style="padding: 10px 0; color: #0f172a;">${project}</td>
            </tr>
          </table>

          <div style="padding: 20px 24px; background: white; border-radius: 10px; border-left: 4px solid #6366F1; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">
            <p style="margin: 0 0 10px; color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px;">Message</p>
            <p style="margin: 0; color: #1e293b; line-height: 1.75; font-size: 14px; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 28px; font-size: 11px; color: #94a3b8; text-align: center;">
            Reçu depuis gestulab.vercel.app · Gëstu Systems © ${new Date().getFullYear()}
          </p>
        </div>
      `,
    });

    if (resendError) {
      console.error('Resend error:', resendError);
      return NextResponse.json({ error: resendError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
