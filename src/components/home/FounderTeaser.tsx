'use client';

import Link from 'next/link';
import { useLang } from '@/context/lang';

export default function FounderTeaser() {
  const { t } = useLang();

  return (
    <section className="py-28 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass gradient-border rounded-3xl p-10 md:p-16 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <p className="text-indigo-light text-xs font-bold uppercase tracking-widest mb-4">{t('Derrière Gëstu Lab', 'Behind Gëstu Lab')}</p>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black text-white leading-tight mb-6">
              El Hadji Abdou Babou Ngom<br />
              <span className="gradient-text text-[0.7em]">{t('Fondateur & Lead Developer', 'Founder & Lead Developer')}</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed max-w-xl mb-8">
              {t(
                'Développeur full-stack, designer UI/UX et expert en systèmes d\'information — l\'homme qui conçoit chaque solution avec rigueur et ambition depuis Dakar.',
                'Full-stack developer, UI/UX designer and information systems expert — the man who designs every solution with rigor and ambition from Dakar.'
              )}
            </p>
            <Link href="/fondateur" className="inline-flex items-center gap-3 btn-gradient px-7 py-3.5 rounded-xl font-bold">
              <span>{t('Découvrir le fondateur', 'Meet the founder')}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          {/* Avatar placeholder */}
          <div className="hidden md:flex flex-col items-center gap-4">
            <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-indigo/30 to-cyan/20 border border-white/10 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20">
                <circle cx="40" cy="30" r="18" fill="#6366F1" opacity="0.7" />
                <path d="M8 78c0-17.673 14.327-32 32-32s32 14.327 32 32" fill="#06B6D4" opacity="0.5" />
              </svg>
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-sm">El Hadji A.B. Ngom</div>
              <div className="text-text-muted text-xs">{t('Fondateur', 'Founder')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
