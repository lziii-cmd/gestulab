'use client';

import { useState } from 'react';
import { useLang } from '@/context/lang';

type Category = 'all' | 'web' | 'data' | 'erp' | 'design';

const filters: { key: Category; fr: string; en: string }[] = [
  { key: 'all',    fr: 'Tous',              en: 'All' },
  { key: 'web',    fr: 'Web & Mobile',      en: 'Web & Mobile' },
  { key: 'data',   fr: 'Data & IA',         en: 'Data & AI' },
  { key: 'erp',    fr: 'ERP & Digitalisation', en: 'ERP & Digitalization' },
  { key: 'design', fr: 'Design',            en: 'Design' },
];

const projects = [
  {
    cats: ['web', 'erp'],
    label: 'BTP',
    sectorFr: 'Construction / BTP', sectorEn: 'Construction / BTP',
    titleFr: 'Digitalisation BTP — Lamane', titleEn: 'BTP Digitalization — Lamane',
    descFr: "Écosystème numérique complet pour une entreprise de construction : site vitrine, gestion interne et application client.",
    descEn: "Complete digital ecosystem for a construction company: showcase site, internal management and client app.",
    tags: ['Django', 'React', 'Node.js', 'SQL'],
  },
  {
    cats: ['web', 'erp'],
    label: 'ENSMG',
    sectorFr: 'Éducation / Académique', sectorEn: 'Education / Academic',
    titleFr: "Système d'Information Académique — ENSMG", titleEn: 'Academic Information System — ENSMG',
    descFr: "Gestion académique complète : bibliothèque, réservations, mémoires et intégration SIGB.",
    descEn: "Complete academic management: library, reservations, theses and SIGB integration.",
    tags: ['Python', 'Django', 'SQL'],
  },
  {
    cats: ['web', 'erp'],
    label: 'EDU',
    sectorFr: 'Éducation', sectorEn: 'Education',
    titleFr: 'Gestion Scolaire Multi-Établissement', titleEn: 'Multi-School Management Platform',
    descFr: "Plateforme centralisée pour gérer simultanément plusieurs établissements scolaires avec reporting consolidé.",
    descEn: "Centralized platform to manage multiple schools simultaneously with consolidated reporting.",
    tags: ['Python', 'React', 'SQL'],
  },
  {
    cats: ['web'],
    label: 'MED',
    sectorFr: 'Santé', sectorEn: 'Healthcare',
    titleFr: 'Cabinet Médical Ophtalmologique', titleEn: 'Ophthalmology Medical Practice',
    descFr: "Digitalisation complète : dossiers patients, rendez-vous, consultations et ordonnances.",
    descEn: "Complete digitalization: patient records, appointments, consultations and prescriptions.",
    tags: ['Django', 'Flutter', 'SQL'],
  },
  {
    cats: ['erp'],
    label: 'FIN',
    sectorFr: 'Finance / Gestion', sectorEn: 'Finance / Management',
    titleFr: 'Application de Comptabilité des Matières', titleEn: 'Materials Accounting Application',
    descFr: "Suivi et gestion des matières premières, stocks et mouvements comptables avec audit trail.",
    descEn: "Tracking and management of raw materials, stocks and accounting movements with audit trail.",
    tags: ['Python', 'Django', 'SQL'],
  },
  {
    cats: ['web'],
    label: 'DOC',
    sectorFr: 'Gestion documentaire', sectorEn: 'Document management',
    titleFr: "Application d'Archivage", titleEn: 'Document Archiving Application',
    descFr: "Gestion et archivage numérique de documents avec indexation intelligente et accès sécurisé.",
    descEn: "Digital document management and archiving with smart indexing and secure access.",
    tags: ['Python', 'React', 'SQL'],
  },
  {
    cats: ['web'],
    label: 'PWA',
    sectorFr: 'Innovation / RH', sectorEn: 'Innovation / HR',
    titleFr: 'PWA Boîte à Idées', titleEn: 'Ideas Box PWA',
    descFr: "Application collaborative pour soumettre, voter et suivre des idées d'innovation.",
    descEn: "Collaborative app to submit, vote and track innovation ideas within an organization.",
    tags: ['JavaScript', 'Node.js', 'PWA'],
  },
  {
    cats: ['data'],
    label: 'DATA',
    sectorFr: 'Data / Tech', sectorEn: 'Data / Tech',
    titleFr: 'Data Pipeline & Web Scraping', titleEn: 'Data Pipeline & Web Scraping',
    descFr: "Pipelines ETL complets avec Talend et collecte automatisée de données à grande échelle.",
    descEn: "Complete ETL pipelines with Talend and automated large-scale data collection tools.",
    tags: ['Talend', 'Python', 'SQL'],
  },
];

export default function Projects() {
  const { lang, t } = useLang();
  const [active, setActive] = useState<Category>('all');

  const visible = projects.filter(p => active === 'all' || p.cats.includes(active));

  return (
    <section id="projets" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-navy mb-3">
            {t('Projets réalisés', 'Completed projects')}
          </h2>
          <div className="w-15 h-1 bg-accent rounded mx-auto mb-4" />
          <p className="text-gray-600 text-lg">{t('Chaque projet est une preuve de compétence.', 'Every project is proof of expertise.')}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                active === f.key
                  ? 'bg-navy border-navy text-white'
                  : 'bg-gray-100 border-gray-200 text-gray-600 hover:bg-navy hover:border-navy hover:text-white'
              }`}
            >
              {lang === 'fr' ? f.fr : f.en}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visible.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <div className="h-36 bg-gray-100 flex items-center justify-center">
                <span className="text-[1.6rem] font-extrabold text-gray-400 tracking-widest">{p.label}</span>
              </div>
              <div className="p-5">
                <span className="inline-block text-[0.7rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded mb-2">
                  {lang === 'fr' ? p.sectorFr : p.sectorEn}
                </span>
                <h3 className="font-bold text-navy text-[0.95rem] mb-2">{lang === 'fr' ? p.titleFr : p.titleEn}</h3>
                <p className="text-gray-600 text-[0.82rem] leading-relaxed mb-3">{lang === 'fr' ? p.descFr : p.descEn}</p>
                <div className="flex flex-wrap gap-1">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[0.7rem] font-semibold bg-gray-100 text-navy px-2 py-0.5 rounded">
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
