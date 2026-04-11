'use client';

import { useState } from 'react';
import { useLang } from '@/context/lang';

export default function Contact() {
  const { lang, t } = useLang();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  const inputCls = 'w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-800 outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 focus:bg-white transition-all';

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-navy mb-3">{t('Me contacter', 'Contact me')}</h2>
          <div className="w-15 h-1 bg-accent rounded mx-auto mb-4" />
          <p className="flex items-center justify-center gap-2 text-green-600 font-semibold text-sm">
            <span className="avail-dot" />
            {t('Actuellement disponible pour de nouvelles missions', 'Currently available for new missions')}
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Info */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 stroke-accent">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
                  </svg>
                ),
                labelFr: 'Localisation', labelEn: 'Location',
                value: t('Dakar, Sénégal — Disponible à l\'international', 'Dakar, Senegal — Available worldwide'),
                href: null,
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 stroke-accent">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                labelFr: 'Email', labelEn: 'Email',
                value: 'ngomabdoubabou@outlook.fr',
                href: 'mailto:ngomabdoubabou@outlook.fr',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="#2E86C1" className="w-5 h-5">
                    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                ),
                labelFr: 'LinkedIn', labelEn: 'LinkedIn',
                value: 'el-hadji-abdou-babou-ngom',
                href: 'https://linkedin.com/in/el-hadji-abdou-babou-ngom',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <strong className="block text-navy text-sm font-bold mb-0.5">{t(item.labelFr, item.labelEn)}</strong>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener" className="text-accent text-sm hover:underline">{item.value}</a>
                  ) : (
                    <p className="text-gray-600 text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.83rem] font-semibold text-gray-800">{t('Nom complet *', 'Full name *')}</label>
                <input type="text" name="name" required placeholder="El Hadji Abdou..." className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.83rem] font-semibold text-gray-800">Email *</label>
                <input type="email" name="email" required placeholder="vous@example.com" className={inputCls} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.83rem] font-semibold text-gray-800">{t('Téléphone (optionnel)', 'Phone (optional)')}</label>
                <input type="tel" name="phone" placeholder="+221 XX XXX XX XX" className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.83rem] font-semibold text-gray-800">{t('Type de projet', 'Project type')}</label>
                <select name="projectType" className={inputCls}>
                  <option value="">{t('Sélectionnez...', 'Select...')}</option>
                  <option value="web">{t('Développement Web & Mobile', 'Web & Mobile Development')}</option>
                  <option value="design">Design UI/UX</option>
                  <option value="data">{t('Data & IA', 'Data & AI')}</option>
                  <option value="erp">{t('ERP & Digitalisation', 'ERP & Digitalization')}</option>
                  <option value="finance">{t('Conseil Financier', 'Financial Consulting')}</option>
                  <option value="other">{t('Autre', 'Other')}</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.83rem] font-semibold text-gray-800">{t('Budget estimé', 'Estimated budget')}</label>
              <select name="budget" className={inputCls}>
                <option value="">{t('Sélectionnez...', 'Select...')}</option>
                <option value="small">{'< 500€'}</option>
                <option value="medium">{t('500€ – 1 500€', '500€ – 1,500€')}</option>
                <option value="large">{t('1 500€ – 5 000€', '1,500€ – 5,000€')}</option>
                <option value="xlarge">{'5 000€+'}</option>
                <option value="discuss">{t('À discuter', 'To discuss')}</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.83rem] font-semibold text-gray-800">{t('Message / Description du projet *', 'Message / Project description *')}</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder={t('Décrivez votre projet, vos objectifs, vos contraintes...', 'Describe your project, goals, constraints...')}
                className={inputCls + ' resize-y min-h-[120px]'}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3.5 rounded-md bg-accent text-white font-semibold text-base hover:bg-accent-dark disabled:opacity-60 transition-all"
            >
              {status === 'sending'
                ? t('Envoi en cours...', 'Sending...')
                : t('Envoyer ma demande', 'Send my request')}
            </button>

            {status === 'success' && (
              <p className="text-center text-green-600 text-sm font-medium">
                {t('✓ Message envoyé ! Je vous répondrai dans les plus brefs délais.', '✓ Message sent! I will reply as soon as possible.')}
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-600 text-sm font-medium">
                {t('Erreur d\'envoi. Contactez-moi directement à ngomabdoubabou@outlook.fr', 'Send error. Contact me at ngomabdoubabou@outlook.fr')}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
