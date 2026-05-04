'use client';

import Link from 'next/link';
import { useLang } from '@/context/lang';
import MockupPreview from '@/components/shared/MockupPreview';
import { useReveal } from '@/hooks/useReveal';

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

export default function FeaturedProjects() {
  const { lang, t } = useLang();
  const ref = useReveal();

  return (
    <section className="py-28 bg-dark dot-pattern" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4 reveal">
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
            <div
              key={i}
              className={`reveal group glass border border-white/5 ${p.border} rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <MockupPreview src={p.mockup} label={p.label} gradient={p.color} />
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
