'use client';

import Link from 'next/link';
import { useLang } from '@/context/lang';

const featured = [
  {
    label: 'BTP',
    color: 'from-orange-500/20 to-red-500/10',
    border: 'group-hover:border-orange-500/40',
    mockup: null,
    sectorFr: 'Construction / BTP', sectorEn: 'Construction / BTP',
    titleFr: 'Digitalisation BTP — Lamane', titleEn: 'BTP Digitalization — Lamane',
    descFr: 'Écosystème numérique complet : site vitrine, gestion interne et application client pour une entreprise de construction.',
    descEn: 'Complete digital ecosystem: showcase site, internal management and client app for a construction company.',
    tags: ['Django', 'React', 'Node.js', 'SQL'],
  },
  {
    label: 'FIN',
    color: 'from-yellow-500/20 to-orange-500/10',
    border: 'group-hover:border-yellow-500/40',
    mockup: '/mockups/fin.html',
    sectorFr: 'Finance / Gestion', sectorEn: 'Finance / Management',
    titleFr: 'Comptabilité des Matières', titleEn: 'Materials Accounting',
    descFr: 'Suivi rigoureux des matières premières, stocks et mouvements comptables avec audit trail complet.',
    descEn: 'Rigorous tracking of raw materials, stocks and accounting movements with full audit trail.',
    tags: ['Python', 'Django', 'SQL'],
  },
  {
    label: 'MED',
    color: 'from-emerald-500/20 to-teal-500/10',
    border: 'group-hover:border-emerald-500/40',
    mockup: '/mockups/med.html',
    sectorFr: 'Santé', sectorEn: 'Healthcare',
    titleFr: 'Cabinet Médical Ophtalmologique', titleEn: 'Ophthalmology Medical Practice',
    descFr: 'Digitalisation complète : dossiers patients, rendez-vous, consultations et ordonnances.',
    descEn: 'Complete digitalization: patient records, appointments, consultations and prescriptions.',
    tags: ['Django', 'Flutter', 'SQL'],
  },
];

function MockupPreview({ src, label, color }: { src: string | null; label: string; color: string }) {
  if (!src) {
    return (
      <div className={`h-48 bg-gradient-to-br ${color} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <span className="text-5xl font-black text-white/20 tracking-widest relative z-10">{label}</span>
        <div className="absolute top-3 left-3 right-3 bg-dark-800/60 rounded-lg px-3 py-2 backdrop-blur-sm flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          </div>
          <div className="flex-1 bg-dark-700/80 rounded px-2 py-0.5 text-[10px] text-text-muted">gestulab.app/...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-48 relative overflow-hidden bg-white group/preview">
      {/* Browser bar */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-[#1e1e2e]/90 backdrop-blur-sm px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 bg-white/10 rounded px-2 py-0.5 text-[10px] text-white/50">gestulab.app/{label.toLowerCase()}</div>
      </div>
      {/* Iframe scaled */}
      <div className="absolute top-[36px] left-0 right-0 bottom-0 overflow-hidden">
        <iframe
          src={src}
          title={label}
          scrolling="no"
          style={{
            width: '1280px',
            height: '800px',
            border: 'none',
            transformOrigin: 'top left',
            transform: 'scale(0.265)',
            pointerEvents: 'none',
          }}
        />
      </div>
      {/* Hover overlay — bouton demo */}
      <a
        href={src}
        target="_blank"
        rel="noopener"
        className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-all duration-300 bg-dark/60 backdrop-blur-sm"
        onClick={e => e.stopPropagation()}
      >
        <span className="btn-gradient px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2">
          <span>Voir la démo live</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
        </span>
      </a>
    </div>
  );
}

export default function FeaturedProjects() {
  const { lang, t } = useLang();

  return (
    <section className="py-28 bg-dark dot-pattern">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <p className="text-cyan text-xs font-bold uppercase tracking-widest mb-3">{t('Nos réalisations', 'Our work')}</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-white leading-tight">
              {t('Projets qui', 'Projects that')}{' '}
              <span className="gradient-text">{t("parlent d'eux-mêmes", 'speak for themselves')}</span>
            </h2>
          </div>
          <Link href="/projets" className="text-sm font-semibold text-text-secondary hover:text-white border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-lg transition-all">
            {t('Voir tous les projets →', 'See all projects →')}
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {featured.map((p, i) => (
            <div key={i} className={`group glass border border-white/5 ${p.border} rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300`}>
              <MockupPreview src={p.mockup} label={p.label} color={p.color} />
              <div className="p-6">
                <span className="text-[0.68rem] font-bold uppercase tracking-widest text-cyan">{lang === 'fr' ? p.sectorFr : p.sectorEn}</span>
                <h3 className="font-bold text-white text-base mt-2 mb-2">{lang === 'fr' ? p.titleFr : p.titleEn}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{lang === 'fr' ? p.descFr : p.descEn}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[0.68rem] font-semibold bg-white/5 border border-white/8 text-text-secondary px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
