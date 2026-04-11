'use client';

import Link from 'next/link';
import { useLang } from '@/context/lang';

export default function HomeCta() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-28 bg-dark relative overflow-hidden">
      <div className="hero-glow w-[600px] h-[600px] bg-indigo/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="text-cyan text-xs font-bold uppercase tracking-widest mb-4">{t('Prêt à démarrer ?', 'Ready to start?')}</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-tight mb-6">
          {t('Transformons votre idée', 'Let\'s turn your idea')}{' '}
          <span className="gradient-text">{t('en réalité', 'into reality')}</span>
        </h2>
        <p className="text-text-secondary text-lg mb-10 leading-relaxed">
          {t(
            'Partagez votre projet avec nous. Nous vous répondrons dans les 24 heures.',
            'Share your project with us. We\'ll get back to you within 24 hours.'
          )}
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a href="mailto:ngomabdoubabou@outlook.fr" className="btn-gradient px-8 py-4 rounded-xl font-bold text-base">
            <span>{t('Envoyer un email', 'Send an email')}</span>
          </a>
          <a
            href="https://linkedin.com/in/el-hadji-abdou-babou-ngom"
            target="_blank" rel="noopener"
            className="px-8 py-4 rounded-xl font-bold text-base border border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all"
          >
            LinkedIn
          </a>
        </div>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center gap-8 pt-10 border-t border-white/5">
          <div className="flex items-center gap-3 text-text-secondary text-sm">
            <span className="avail-dot" />
            {t('Actuellement disponible', 'Currently available')}
          </div>
          <div className="text-text-secondary text-sm">📍 Dakar, Sénégal</div>
          <div className="text-text-secondary text-sm">🌍 {t('Disponible à l\'international', 'Available worldwide')}</div>
        </div>
      </div>
    </section>
  );
}
