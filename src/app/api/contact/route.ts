import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, projectType, budget, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const projectLabels: Record<string, string> = {
      web: 'Développement Web & Mobile',
      design: 'Design UI/UX',
      data: 'Data & IA',
      erp: 'ERP & Digitalisation',
      finance: 'Conseil Financier',
      other: 'Autre',
    };

    const budgetLabels: Record<string, string> = {
      small: '< 500€',
      medium: '500€ – 1 500€',
      large: '1 500€ – 5 000€',
      xlarge: '5 000€+',
      discuss: 'À discuter',
    };

    const { error: resendError } = await resend.emails.send({
      from: 'Gëstu Lab Portfolio <onboarding@resend.dev>',
      to: 'ngomabdoubabou@outlook.fr',
      replyTo: email,
      subject: `[Gëstu Lab] Nouveau message de ${name}`,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
          <div style="background: #1E3A5F; padding: 24px 32px; border-radius: 8px 8px 0 0; margin: -32px -32px 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 800;">Gëstu Lab</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">Nouveau message depuis votre portfolio</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #94A3B8; font-size: 13px; width: 140px; vertical-align: top;">Nom</td>
              <td style="padding: 8px 0; color: #1E293B; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2E86C1;">${email}</a></td>
            </tr>
            ${phone ? `<tr>
              <td style="padding: 8px 0; color: #94A3B8; font-size: 13px; vertical-align: top;">Téléphone</td>
              <td style="padding: 8px 0; color: #1E293B;">${phone}</td>
            </tr>` : ''}
            ${projectType ? `<tr>
              <td style="padding: 8px 0; color: #94A3B8; font-size: 13px; vertical-align: top;">Type de projet</td>
              <td style="padding: 8px 0; color: #1E293B;">${projectLabels[projectType] ?? projectType}</td>
            </tr>` : ''}
            ${budget ? `<tr>
              <td style="padding: 8px 0; color: #94A3B8; font-size: 13px; vertical-align: top;">Budget</td>
              <td style="padding: 8px 0; color: #1E293B;">${budgetLabels[budget] ?? budget}</td>
            </tr>` : ''}
          </table>

          <div style="margin-top: 20px; padding: 20px; background: white; border-radius: 8px; border-left: 4px solid #2E86C1;">
            <p style="margin: 0 0 8px; color: #94A3B8; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
            <p style="margin: 0; color: #1E293B; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #94A3B8; text-align: center;">
            Reçu depuis gestulab.com · Gëstu Lab © 2025
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
