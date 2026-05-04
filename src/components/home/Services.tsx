'use client';

import { useLang } from '@/context/lang';
import { useReveal } from '@/hooks/useReveal';

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    fr: 'Développement Web & Mobile',
    en: 'Web & Mobile Dev',
    descFr: 'Applications full-stack, mobiles cross-platform et PWA — du frontend au backend.',
    descEn: 'Full-stack apps, cross-platform mobile and PWA — frontend to backend.',
    accent: 'group-hover:border-indigo/40 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]',
    iconColor: 'text-indigo-light',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    fr: 'Design UI/UX',
    en: 'UI/UX Design',
    descFr: 'Interfaces modernes centrées sur l\'expérience utilisateur réelle.',
    descEn: 'Modern interfaces centered on real user experience.',
    accent: 'group-hover:border-cyan/40 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]',
    iconColor: 'text-cyan',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    fr: 'Data & Intelligence Artificielle',
    en: 'Data & AI',
    descFr: 'Pipelines ETL, web scraping, dashboards analytiques et modèles ML.',
    descEn: 'ETL pipelines, web scraping, analytical dashboards and ML models.',
    accent: 'group-hover:border-violet-500/40 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]',
    iconColor: 'text-violet-400',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    fr: 'ERP & Digitalisation',
    en: 'ERP & Digitalization',
    descFr: 'Transformation numérique complète — de l\'audit à la formation des équipes.',
    descEn: 'Complete digital transformation — from audit to team training.',
    accent: 'group-hover:border-emerald-500/40 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.1)]',
    iconColor: 'text-emerald-400',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    fr: 'Conseil Financier & Comptabilité',
    en: 'Financial Consulting',
    descFr: 'Applications comptables sur mesure, tableaux de bord et automatisation.',
    descEn: 'Custom accounting apps, dashboards and automation.',
    accent: 'group-hover:border-yellow-500/40 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]',
    iconColor: 'text-yellow-400',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    fr: 'Cybersécurité',
    en: 'Cybersecurity',
    descFr: 'Sécurité intégrée à chaque étape — authentification, accès, protection des données.',
    descEn: 'Security at every stage — authentication, access, data protection.',
    accent: 'group-hover:border-rose-500/40 group-hover:shadow-[0_0_30px_rgba(244,63,94,0.1)]',
    iconColor: 'text-rose-400',
  },
];

export default function HomeServices() {
  const { t } = useLang();
  const ref = useReveal();

  return (
    <section className="py-28 bg-dark-800" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 reveal">
          <p className="text-indigo-light text-xs font-bold uppercase tracking-widest mb-3">
            {t('Ce que nous faisons', 'What we do')}
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-white leading-tight">
            {t('Des solutions complètes,', 'Complete solutions,')}<br />
            <span className="gradient-text">{t('de bout en bout', 'end to end')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div
              key={i}
              className={`reveal glass gradient-border rounded-2xl p-7 group cursor-default transition-all duration-300 hover:-translate-y-1 ${s.accent}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`mb-5 ${s.iconColor}`}>{s.icon}</div>
              <h3 className="font-bold text-white text-base mb-3">{t(s.fr, s.en)}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{t(s.descFr, s.descEn)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
