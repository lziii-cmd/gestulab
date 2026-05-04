'use client';

import { useState, FormEvent } from 'react';
import { useLang } from '@/context/lang';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const projectTypes = [
  { fr: 'Application Web',           en: 'Web Application' },
  { fr: 'Application Mobile',        en: 'Mobile Application' },
  { fr: 'ERP / Digitalisation',      en: 'ERP / Digitalization' },
  { fr: 'Design UI/UX',              en: 'UI/UX Design' },
  { fr: 'Data & Intelligence Artificielle', en: 'Data & AI' },
  { fr: 'Site vitrine',              en: 'Showcase website' },
  { fr: 'Autre',                     en: 'Other' },
];

export default function HomeCta() {
  const { lang, t } = useLang();
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('loading');
    setError('');

    const form = e.currentTarget;
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      phone:   (form.elements.namedItem('phone')   as HTMLInputElement).value,
      project: (form.elements.namedItem('project') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || 'Erreur serveur');
      }

      setState('success');
      form.reset();
    } catch (err) {
      setState('error');
      setError(err instanceof Error ? err.message : 'Une erreur est survenue.');
    }
  }

  return (
    <section id="contact" className="py-28 bg-dark relative overflow-hidden">
      {/* Background glows */}
      <div className="hero-glow w-[500px] h-[500px] bg-indigo/8 top-0 right-[-100px]" />
      <div className="hero-glow w-[400px] h-[400px] bg-cyan/6 bottom-0 left-[-80px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan text-xs font-bold uppercase tracking-widest mb-4">
            {t('Prêt à démarrer ?', 'Ready to start?')}
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-tight mb-4">
            {t('Parlons de votre', "Let's talk about your")}{' '}
            <span className="gradient-text">{t('projet', 'project')}</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
            {t(
              'Décrivez votre besoin — nous vous répondons dans les 24 heures avec une première analyse.',
              'Describe your need — we reply within 24 hours with a first analysis.'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">
          {/* Form */}
          <div className="glass gradient-border rounded-3xl p-8 md:p-10">
            {state === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h3 className="text-white font-black text-xl">
                  {t('Message envoyé !', 'Message sent!')}
                </h3>
                <p className="text-text-secondary max-w-sm">
                  {t(
                    'Merci pour votre message. Nous vous répondrons dans les 24 heures.',
                    'Thank you for your message. We will reply within 24 hours.'
                  )}
                </p>
                <button
                  onClick={() => setState('idle')}
                  className="mt-2 text-sm text-text-muted hover:text-white transition-colors underline underline-offset-4"
                >
                  {t('Envoyer un autre message', 'Send another message')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Row 1: name + email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-text-muted text-xs font-semibold uppercase tracking-wider">
                      {t('Nom complet', 'Full name')} *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder={t('El Hadji Dupont', 'John Doe')}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-muted text-sm outline-none focus:border-indigo/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-text-muted text-xs font-semibold uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="vous@example.com"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-muted text-sm outline-none focus:border-indigo/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: phone + project type */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-text-muted text-xs font-semibold uppercase tracking-wider">
                      {t('Téléphone', 'Phone')}{' '}
                      <span className="text-text-muted/50 normal-case font-normal">
                        ({t('optionnel', 'optional')})
                      </span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+221 77 000 00 00"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-muted text-sm outline-none focus:border-indigo/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-text-muted text-xs font-semibold uppercase tracking-wider">
                      {t('Type de projet', 'Project type')} *
                    </label>
                    <select
                      name="project"
                      required
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-indigo/50 focus:bg-white/8 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-dark-800 text-text-muted">
                        {t('Choisir...', 'Choose...')}
                      </option>
                      {projectTypes.map((pt, i) => (
                        <option key={i} value={lang === 'fr' ? pt.fr : pt.en} className="bg-dark-800 text-white">
                          {lang === 'fr' ? pt.fr : pt.en}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-text-muted text-xs font-semibold uppercase tracking-wider">
                    {t('Votre message', 'Your message')} *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder={t(
                      "Décrivez votre projet, vos contraintes, votre délai idéal...",
                      "Describe your project, constraints, ideal timeline..."
                    )}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-muted text-sm outline-none focus:border-indigo/50 focus:bg-white/8 transition-all resize-none"
                  />
                </div>

                {/* Error */}
                {state === 'error' && (
                  <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    {error || t("Une erreur est survenue. Réessayez.", "An error occurred. Please try again.")}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="btn-gradient px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                >
                  {state === 'loading' ? (
                    <>
                      <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 11-6.219-8.56"/>
                      </svg>
                      <span>{t('Envoi en cours...', 'Sending...')}</span>
                    </>
                  ) : (
                    <>
                      <span>{t('Envoyer le message', 'Send message')}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right column — info */}
          <div className="flex flex-col gap-6 lg:pt-2">
            {/* Direct contact */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                {t('Contact direct', 'Direct contact')}
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:ngomabdoubabou@outlook.fr"
                  className="flex items-center gap-3 text-text-secondary hover:text-white transition-colors group"
                >
                  <span className="w-9 h-9 rounded-lg bg-indigo/10 border border-indigo/20 flex items-center justify-center shrink-0 group-hover:border-indigo/40 transition-all">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <span className="text-sm">ngomabdoubabou@outlook.fr</span>
                </a>
                <a
                  href="https://linkedin.com/in/el-hadji-abdou-babou-ngom"
                  target="_blank" rel="noopener"
                  className="flex items-center gap-3 text-text-secondary hover:text-white transition-colors group"
                >
                  <span className="w-9 h-9 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0 group-hover:border-cyan/40 transition-all">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                  </span>
                  <span className="text-sm">linkedin.com/in/el-hadji-abdou-babou-ngom</span>
                </a>
              </div>
            </div>

            {/* Response time */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="avail-dot" />
                <span className="text-white font-bold text-sm">
                  {t('Actuellement disponible', 'Currently available')}
                </span>
              </div>
              <p className="text-text-secondary text-xs leading-relaxed">
                {t(
                  'Réponse garantie sous 24h en semaine. Pas de réponse automatique — vous parlez directement au fondateur.',
                  'Response guaranteed within 24h on weekdays. No auto-reply — you speak directly to the founder.'
                )}
              </p>
            </div>

            {/* Location */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">
                {t('Localisation', 'Location')}
              </h3>
              <div className="flex flex-col gap-2 text-text-secondary text-sm">
                <span>📍 Dakar, Sénégal</span>
                <span>🌍 {t('Disponible à l\'international', 'Available worldwide')}</span>
                <span>🕐 UTC+0 — {t('Flexible sur les fuseaux', 'Flexible with time zones')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
