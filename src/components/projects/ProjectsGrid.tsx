'use client';

import { useState } from 'react';
import { useLang } from '@/context/lang';

type Cat = 'all' | 'web' | 'data' | 'erp' | 'design';

const filters: { key: Cat; fr: string; en: string }[] = [
  { key: 'all',    fr: 'Tous',                  en: 'All' },
  { key: 'web',    fr: 'Web & Mobile',           en: 'Web & Mobile' },
  { key: 'data',   fr: 'Data & IA',              en: 'Data & AI' },
  { key: 'erp',    fr: 'ERP & Digitalisation',   en: 'ERP & Digitalization' },
];

const projects = [
  { cats: ['web','erp'], label: 'BTP',  mockup: null,                    gradient: 'from-orange-500/30 to-red-600/20',    sectorFr: 'Construction / BTP',   sectorEn: 'Construction / BTP',   titleFr: 'Digitalisation BTP — Lamane',             titleEn: 'BTP Digitalization — Lamane',              descFr: 'Écosystème numérique complet pour une entreprise de construction : site vitrine, gestion interne (projets, ressources, finances) et application client.',     descEn: 'Complete digital ecosystem for a construction company: showcase site, internal management and client application.',  tags: ['Django','React','Node.js','SQL'],    year: '2024' },
  { cats: ['web','erp'], label: 'ENSMG',mockup: null,                    gradient: 'from-indigo/30 to-cyan/20',            sectorFr: 'Éducation / Académique',sectorEn: 'Education / Academic', titleFr: "Système d'Information Académique — ENSMG", titleEn: 'Academic Information System — ENSMG',       descFr: 'Système de gestion académique : bibliothèque, emprunts, réservations, mémoires et intégration SIGB.',                 descEn: 'Academic management system: library, borrowings, reservations, theses and SIGB integration.',                        tags: ['Python','Django','SQL'],            year: '2023' },
  { cats: ['web','erp'], label: 'EDU',  mockup: null,                    gradient: 'from-violet-500/30 to-purple-600/20', sectorFr: 'Éducation',             sectorEn: 'Education',            titleFr: 'Gestion Scolaire Multi-Établissement',     titleEn: 'Multi-School Management',                  descFr: 'Plateforme multi-tenant pour gérer plusieurs établissements : élèves, notes, emplois du temps et reporting agrégé.',  descEn: 'Multi-tenant platform to manage multiple schools: students, grades, schedules and aggregated reporting.',             tags: ['Python','React','SQL'],            year: '2023' },
  { cats: ['web'],       label: 'MED',  mockup: '/mockups/med.html',     gradient: 'from-emerald-500/30 to-teal-500/20', sectorFr: 'Santé',                 sectorEn: 'Healthcare',           titleFr: 'Cabinet Médical Ophtalmologique',          titleEn: 'Ophthalmology Practice',                   descFr: 'Dossiers patients, rendez-vous, consultations, ordonnances — zéro papier pour le cabinet.',                          descEn: 'Patient records, appointments, consultations, prescriptions — paperless practice.',                                  tags: ['Django','Flutter','SQL'],          year: '2024' },
  { cats: ['erp'],       label: 'FIN',  mockup: '/mockups/fin.html',     gradient: 'from-yellow-500/25 to-orange-500/15',sectorFr: 'Finance / Gestion',     sectorEn: 'Finance / Management', titleFr: 'Comptabilité des Matières',                titleEn: 'Materials Accounting',                     descFr: 'Suivi rigoureux des matières premières, stocks et mouvements comptables avec audit trail complet.',                   descEn: 'Rigorous tracking of raw materials, stocks and accounting movements with full audit trail.',                         tags: ['Python','Django','SQL'],          year: '2023' },
  { cats: ['web'],       label: 'DOC',  mockup: null,                    gradient: 'from-sky-500/25 to-blue-500/15',     sectorFr: 'Gestion documentaire',  sectorEn: 'Document management', titleFr: "Application d'Archivage",                  titleEn: 'Document Archiving App',                   descFr: 'Gestion et archivage numérique de documents : indexation intelligente, recherche avancée et accès sécurisé.',        descEn: 'Digital document management: smart indexing, advanced search and secure access.',                                   tags: ['Python','React','SQL'],          year: '2023' },
  { cats: ['web'],       label: 'PWA',  mockup: null,                    gradient: 'from-pink-500/25 to-rose-500/15',    sectorFr: 'Innovation / RH',       sectorEn: 'Innovation / HR',      titleFr: 'PWA Boîte à Idées',                        titleEn: 'Ideas Box PWA',                            descFr: "App collaborative : soumettre, voter et suivre des idées d'innovation sur tous supports, sans installation.",       descEn: 'Collaborative app: submit, vote and track innovation ideas on any device, no install needed.',                      tags: ['JavaScript','Node.js','PWA'],    year: '2024' },
  { cats: ['data'],      label: 'DATA', mockup: null,                    gradient: 'from-cyan/25 to-teal-500/15',         sectorFr: 'Data / Tech',           sectorEn: 'Data / Tech',          titleFr: 'Data Pipeline & Web Scraping',             titleEn: 'Data Pipeline & Web Scraping',             descFr: 'Pipelines ETL complets avec Talend et collecte automatisée de données à grande échelle depuis le web.',               descEn: 'Complete ETL pipelines with Talend and automated large-scale data collection from the web.',                        tags: ['Talend','Python','SQL'],         year: '2024' },
];

export default function ProjectsGrid() {
  const { lang, t } = useLang();
  const [active, setActive] = useState<Cat>('all');

  const visible = projects.filter(p => active === 'all' || p.cats.includes(active));

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-dark grid-pattern relative overflow-hidden">
        <div className="hero-glow w-[400px] h-[400px] bg-cyan/10 top-0 right-0" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-cyan text-xs font-bold uppercase tracking-widest mb-4">{t('Nos réalisations', 'Our work')}</p>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-white leading-tight mb-6">
            {t('Projets qui', 'Projects that')}{' '}
            <span className="gradient-text">{t('prouvent', 'prove')}</span>
          </h1>
          <p className="text-text-secondary text-xl max-w-xl">
            {t('8 projets livrés. Des secteurs variés. Une seule constante : la rigueur.', '8 projects delivered. Diverse sectors. One constant: rigor.')}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-dark">
        <div className="max-w-6xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
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
                {active === f.key ? <span>{lang === 'fr' ? f.fr : f.en}</span> : lang === 'fr' ? f.fr : f.en}
              </button>
            ))}
            <span className="ml-auto text-text-muted text-sm self-center">{visible.length} {t('projets', 'projects')}</span>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {visible.map((p, i) => (
              <div key={i} className="glass gradient-border rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                {/* Mockup */}
                <div className={`h-52 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  {/* Browser bar */}
                  <div className="absolute top-4 left-4 right-4 bg-dark-800/70 backdrop-blur rounded-lg px-3 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                    </div>
                    <div className="flex-1 bg-dark-700/70 rounded px-2 py-0.5 text-[10px] text-text-muted">gestulab.app/{p.label.toLowerCase()}</div>
                  </div>
                  {/* Center label */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-black text-white/15 tracking-widest group-hover:text-white/20 transition-all">{p.label}</span>
                  </div>
                  {/* Year badge */}
                  <div className="absolute bottom-4 right-4 bg-dark-800/60 backdrop-blur text-text-muted text-xs px-2 py-1 rounded font-mono">{p.year}</div>
                </div>

                <div className="p-7">
                  <span className="text-[0.68rem] font-bold uppercase tracking-widest text-cyan">{lang === 'fr' ? p.sectorFr : p.sectorEn}</span>
                  <h3 className="font-bold text-white text-lg mt-2 mb-3">{lang === 'fr' ? p.titleFr : p.titleEn}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">{lang === 'fr' ? p.descFr : p.descEn}</p>
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
    </>
  );
}
