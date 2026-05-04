'use client';

import Link from 'next/link';
import { useLang } from '@/context/lang';
import MockupPreview from '@/components/shared/MockupPreview';
import type { Project } from '@/lib/projects';

const statusConfig = {
  delivered:   { fr: 'Livré',     en: 'Delivered',   color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25' },
  prototype:   { fr: 'Prototype', en: 'Prototype',   color: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25' },
  in_progress: { fr: 'En cours',  en: 'In progress', color: 'bg-indigo/15 text-indigo-light border-indigo/25' },
};

export default function ProjectDetail({ project: p }: { project: Project }) {
  const { lang, t } = useLang();
  const st = statusConfig[p.status];

  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-16 bg-dark grid-pattern relative overflow-hidden">
        <div className={`hero-glow w-[400px] h-[400px] bg-gradient-to-br ${p.gradient} opacity-20 top-0 right-0`} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-text-muted text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              {t('Accueil', 'Home')}
            </Link>
            <span>/</span>
            <Link href="/projets" className="hover:text-white transition-colors">
              {t('Projets', 'Projects')}
            </Link>
            <span>/</span>
            <span className="text-text-secondary">{p.label}</span>
          </div>

          {/* Sector + status */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan">
              {lang === 'fr' ? p.sectorFr : p.sectorEn}
            </span>
            <span className={`text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${st.color}`}>
              {lang === 'fr' ? st.fr : st.en}
            </span>
            <span className="text-text-muted text-xs font-mono ml-auto">{p.year}</span>
          </div>

          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-tight mb-6">
            {lang === 'fr' ? p.titleFr : p.titleEn}
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl">
            {lang === 'fr' ? p.descFr : p.descEn}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {p.tags.map(tag => (
              <span key={tag} className="text-xs font-semibold bg-white/5 border border-white/10 text-text-secondary px-3 py-1.5 rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOCKUP ── */}
      {p.mockup && (
        <section className="py-0 bg-dark">
          <div className="max-w-4xl mx-auto px-6">
            <div className="rounded-2xl overflow-hidden border border-white/8 shadow-[0_0_60px_rgba(99,102,241,0.1)]">
              <MockupPreview src={p.mockup} label={p.label} gradient={p.gradient} />
            </div>
          </div>
        </section>
      )}

      {/* ── CONTENU : Contexte / Solution / Résultats ── */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-[1fr_280px] gap-12 items-start">

          {/* Colonne principale */}
          <div className="flex flex-col gap-12">
            {/* Contexte */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-indigo/15 border border-indigo/25 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                  </svg>
                </div>
                <h2 className="text-white font-black text-xl">{t('Contexte', 'Context')}</h2>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {lang === 'fr' ? p.contextFr : p.contextEn}
              </p>
            </div>

            {/* Solution */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-cyan/15 border border-cyan/25 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <h2 className="text-white font-black text-xl">{t('Solution', 'Solution')}</h2>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {lang === 'fr' ? p.solutionFr : p.solutionEn}
              </p>
            </div>

            {/* Résultats */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <h2 className="text-white font-black text-xl">{t('Résultats', 'Results')}</h2>
              </div>
              <ul className="flex flex-col gap-3">
                {(lang === 'fr' ? p.resultsFr : p.resultsEn).map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-0.5 shrink-0 text-emerald-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span className="text-text-secondary">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4 sticky top-28">
            {/* Stack */}
            <div className="glass rounded-2xl p-5">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                {t('Stack technique', 'Tech stack')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold bg-white/5 border border-white/10 text-text-secondary px-2.5 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Infos */}
            <div className="glass rounded-2xl p-5">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                {t('Infos projet', 'Project info')}
              </h3>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">{t('Année', 'Year')}</span>
                  <span className="text-white font-medium font-mono">{p.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">{t('Secteur', 'Sector')}</span>
                  <span className="text-white font-medium">{lang === 'fr' ? p.sectorFr : p.sectorEn}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Statut</span>
                  <span className={`text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${st.color}`}>
                    {lang === 'fr' ? st.fr : st.en}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link href="/#contact" className="btn-gradient px-5 py-3.5 rounded-xl font-bold text-sm text-center">
              <span>{t('Projet similaire ?', 'Similar project?')} →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── NAVIGATION entre projets ── */}
      <section className="py-12 bg-dark-800 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link href="/projets" className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            {t('Tous les projets', 'All projects')}
          </Link>
          <Link href="/#contact" className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors text-sm">
            {t('Démarrer un projet', 'Start a project')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
