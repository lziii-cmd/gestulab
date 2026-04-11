'use client';

import { useLang } from '@/context/lang';

const services = [
  { icon: '⬡', fr: 'Développement Web & Mobile', en: 'Web & Mobile Dev', descFr: 'Applications full-stack, mobiles cross-platform et PWA — du frontend au backend.', descEn: 'Full-stack apps, cross-platform mobile and PWA — frontend to backend.' },
  { icon: '◈', fr: 'Design UI/UX', en: 'UI/UX Design', descFr: 'Interfaces modernes centrées sur l\'expérience utilisateur réelle.', descEn: 'Modern interfaces centered on real user experience.' },
  { icon: '◎', fr: 'Data & Intelligence Artificielle', en: 'Data & AI', descFr: 'Pipelines ETL, web scraping, dashboards analytiques et modèles ML.', descEn: 'ETL pipelines, web scraping, analytical dashboards and ML models.' },
  { icon: '⬢', fr: 'ERP & Digitalisation', en: 'ERP & Digitalization', descFr: 'Transformation numérique complète — de l\'audit à la formation des équipes.', descEn: 'Complete digital transformation — from audit to team training.' },
  { icon: '◇', fr: 'Conseil Financier & Comptabilité', en: 'Financial Consulting', descFr: 'Applications comptables sur mesure, tableaux de bord et automatisation.', descEn: 'Custom accounting apps, dashboards and automation.' },
  { icon: '⬟', fr: 'Cybersécurité', en: 'Cybersecurity', descFr: 'Sécurité intégrée à chaque étape — authentification, accès, protection des données.', descEn: 'Security at every stage — authentication, access, data protection.' },
];

export default function HomeServices() {
  const { t } = useLang();

  return (
    <section className="py-28 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-indigo-light text-xs font-bold uppercase tracking-widest mb-3">{t('Ce que nous faisons', 'What we do')}</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-white leading-tight">
            {t('Des solutions complètes,', 'Complete solutions,')}<br />
            <span className="gradient-text">{t('de bout en bout', 'end to end')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div key={i} className="glass gradient-border rounded-2xl p-7 group cursor-default transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-5 gradient-text font-black">{s.icon}</div>
              <h3 className="font-bold text-white text-base mb-3">{t(s.fr, s.en)}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{t(s.descFr, s.descEn)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
