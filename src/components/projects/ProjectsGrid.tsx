'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/context/lang';
import MockupPreview from '@/components/shared/MockupPreview';
import { allProjects } from '@/lib/projects';

type Cat = 'all' | 'web' | 'data' | 'erp';

const filters: { key: Cat; fr: string; en: string }[] = [
  { key: 'all',  fr: 'Tous',                en: 'All' },
  { key: 'web',  fr: 'Web & Mobile',         en: 'Web & Mobile' },
  { key: 'data', fr: 'Data & IA',            en: 'Data & AI' },
  { key: 'erp',  fr: 'ERP & Digitalisation', en: 'ERP & Digitalization' },
];

const statusConfig = {
  delivered:   { fr: 'Livré',     en: 'Delivered',   color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25' },
  prototype:   { fr: 'Prototype', en: 'Prototype',   color: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25' },
  in_progress: { fr: 'En cours',  en: 'In progress', color: 'bg-indigo/15 text-indigo-light border-indigo/25' },
};

export default function ProjectsGrid() {
  const { lang, t } = useLang();
  const [active, setActive] = useState<Cat>('all');

  const visible = allProjects.filter(p =>
    active === 'all' || (p.cats as string[]).includes(active)
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-dark grid-pattern relative overflow-hidden">
        <div className="hero-glow w-[400px] h-[400px] bg-cyan/10 top-0 right-0" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-cyan text-xs font-bold uppercase tracking-widest mb-4">
            {t('Mes réalisations', 'My work')}
          </p>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-white leading-tight mb-6">
            {t('Projets qui', 'Projects that')}{' '}
            <span className="gradient-text">{t('prouvent', 'prove it')}</span>
          </h1>
          <p className="text-text-secondary text-xl max-w-xl leading-relaxed">
            {t(
              '8 projets livrés dans des secteurs variés. Une seule constante : la rigueur.',
              '8 projects delivered across diverse sectors. One constant: rigor.'
            )}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-dark">
        <div className="max-w-6xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12 items-center">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold border transition-all ${
                  active === f.key
                    ? 'btn-gradient border-transparent'
                    : 'border-white/10 text-text-secondary hover:text-white hover:border-white/20 bg-transparent'
                }`}
              >
                {active === f.key
                  ? <span>{lang === 'fr' ? f.fr : f.en}</span>
                  : lang === 'fr' ? f.fr : f.en}
              </button>
            ))}
            <span className="ml-auto text-text-muted text-sm">
              {visible.length} {t('projets', 'projects')}
            </span>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {visible.map((p, i) => {
              const st = statusConfig[p.status];
              return (
                <Link
                  key={i}
                  href={`/projets/${p.slug}`}
                  className="glass gradient-border rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300 block"
                >
                  {/* Mockup / Placeholder */}
                  <MockupPreview src={p.mockup} label={p.label} gradient={p.gradient} />

                  <div className="p-7">
                    {/* Sector + status */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[0.68rem] font-bold uppercase tracking-widest text-cyan">
                        {lang === 'fr' ? p.sectorFr : p.sectorEn}
                      </span>
                      <span className={`text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${st.color}`}>
                        {lang === 'fr' ? st.fr : st.en}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-white text-lg mt-1 mb-3 group-hover:text-indigo-light transition-colors">
                      {lang === 'fr' ? p.titleFr : p.titleEn}
                    </h3>

                    {/* Desc */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-5">
                      {lang === 'fr' ? p.descFr : p.descEn}
                    </p>

                    {/* Tags + arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-[0.65rem] font-semibold bg-white/5 border border-white/8 text-text-secondary px-2.5 py-1 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-text-muted text-xs flex items-center gap-1 group-hover:text-indigo-light transition-colors ml-3 shrink-0">
                        {t('Voir', 'View')}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
