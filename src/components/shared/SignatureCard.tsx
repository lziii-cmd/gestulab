'use client';

import { useLang } from '@/context/lang';

/**
 * Carte signature premium — remplace la photo du fondateur.
 * Affichée sur la page Fondateur (grand) et dans FounderTeaser (compact).
 */
export default function SignatureCard({ compact = false }: { compact?: boolean }) {
  const { t } = useLang();

  if (compact) {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo/30 to-cyan/20 border border-indigo/30 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.15)]">
          <span className="gradient-text font-black text-xl tracking-tighter">EAB</span>
        </div>
        <div className="text-center">
          <div className="text-white font-bold text-sm">El Hadji A.B. Ngom</div>
          <div className="text-text-muted text-xs">{t('Fondateur', 'Founder')}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[300px]">
      {/* Carte principale */}
      <div className="glass rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_60px_rgba(99,102,241,0.12)]">
        {/* Header gradient */}
        <div className="relative h-28 bg-gradient-to-br from-indigo/40 via-indigo/20 to-cyan/20 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          {/* Initiales */}
          <div className="relative z-10 text-center">
            <span className="gradient-text font-black text-5xl tracking-tighter leading-none">EABN</span>
          </div>
          {/* Glow derrière */}
          <div className="absolute w-32 h-32 rounded-full bg-indigo/30 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Corps */}
        <div className="p-5">
          {/* Nom + titre */}
          <div className="mb-4 pb-4 border-b border-white/5">
            <h3 className="text-white font-black text-base leading-tight">
              El Hadji Abdou Babou Ngom
            </h3>
            <p className="gradient-text text-xs font-bold mt-1">
              {t('Fondateur & Lead Developer', 'Founder & Lead Developer')}
            </p>
            <p className="text-text-muted text-xs mt-0.5">Gëstu Systems · Dakar, Sénégal</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { n: '3+', label: t('ans', 'yrs') },
              { n: '8+', label: t('projets', 'projects') },
              { n: '5+', label: t('secteurs', 'sectors') },
            ].map(s => (
              <div key={s.n} className="text-center">
                <div className="gradient-text font-black text-lg">{s.n}</div>
                <div className="text-text-muted text-[10px]">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Langues */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {['🇫🇷 FR', '🇬🇧 EN', '🇸🇳 WO'].map(l => (
              <span key={l} className="text-[10px] font-medium bg-white/5 border border-white/8 text-text-secondary px-2 py-1 rounded-full">
                {l}
              </span>
            ))}
          </div>

          {/* Disponibilité */}
          <div className="flex items-center gap-2 bg-emerald-500/8 border border-emerald-500/15 rounded-lg px-3 py-2">
            <span className="avail-dot shrink-0" />
            <span className="text-emerald-400 text-xs font-semibold">
              {t('Disponible pour nouveaux projets', 'Available for new projects')}
            </span>
          </div>
        </div>
      </div>

      {/* Liens sous la carte */}
      <div className="flex gap-3 mt-3">
        <a
          href="mailto:ngomabdoubabou@outlook.fr"
          className="flex-1 flex items-center justify-center gap-2 glass rounded-xl py-2.5 text-text-muted hover:text-white transition-all text-xs font-medium hover:border-indigo/30"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Email
        </a>
        <a
          href="https://linkedin.com/in/el-hadji-abdou-babou-ngom"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 glass rounded-xl py-2.5 text-text-muted hover:text-cyan transition-all text-xs font-medium hover:border-cyan/30"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  );
}
