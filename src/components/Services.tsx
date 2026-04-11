'use client';

import { useLang } from '@/context/lang';

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    titleFr: 'Développement Web & Mobile', titleEn: 'Web & Mobile Development',
    descFr: 'Applications web et mobiles sur mesure, performantes et sécurisées — du frontend au backend.',
    descEn: 'Custom web and mobile applications, performant and secure — from frontend to backend.',
    itemsFr: ['Applications full-stack (React, Django, Node.js)', 'Mobile cross-platform avec Flutter', 'Progressive Web Apps (PWA)', "Intégration d'API et services tiers"],
    itemsEn: ['Full-stack apps (React, Django, Node.js)', 'Cross-platform mobile with Flutter', 'Progressive Web Apps (PWA)', 'API and third-party service integration'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    titleFr: 'Design UI/UX', titleEn: 'UI/UX Design',
    descFr: 'Interfaces modernes, intuitives et centrées sur l\'expérience utilisateur réelle.',
    descEn: 'Modern, intuitive interfaces centered on real user experience.',
    itemsFr: ['Wireframes et prototypes interactifs', 'Design d\'interfaces web et mobile', 'Charte graphique et design system', 'Audit UX et redesign'],
    itemsEn: ['Wireframes and interactive prototypes', 'Web and mobile UI design', 'Brand guidelines and design system', 'UX audit and redesign'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    titleFr: 'Data & Intelligence Artificielle', titleEn: 'Data & Artificial Intelligence',
    descFr: 'Pipelines de données, web scraping, traitement et valorisation de vos données.',
    descEn: 'Data pipelines, web scraping, processing and monetizing your data.',
    itemsFr: ['Pipelines ETL avec Talend', 'Web scraping et collecte automatisée', 'Tableaux de bord analytiques', 'Modèles de Machine Learning'],
    itemsEn: ['ETL pipelines with Talend', 'Web scraping and automated collection', 'Analytical dashboards', 'Machine Learning models'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h11l5 5v9a2 2 0 01-2 2z" /><path d="M17 21v-8H7v8M7 3v5h8" />
      </svg>
    ),
    titleFr: 'ERP & Digitalisation', titleEn: 'ERP & Digitalization',
    descFr: 'Transformation numérique complète de vos processus, de l\'audit à la formation.',
    descEn: 'Complete digital transformation of your processes, from audit to team training.',
    itemsFr: ['Déploiement et personnalisation d\'ERP', 'Modules métiers sur mesure', 'Digitalisation des processus', 'Formation des équipes'],
    itemsEn: ['ERP deployment and customization', 'Custom business modules', 'Process digitalization', 'Team training'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    titleFr: 'Conseil Financier & Comptabilité', titleEn: 'Financial & Accounting Consulting',
    descFr: 'Outils de gestion financière et comptable adaptés aux besoins de votre organisation.',
    descEn: "Financial and accounting management tools tailored to your organization's needs.",
    itemsFr: ['Applications de comptabilité sur mesure', 'Tableaux de bord financiers', 'Automatisation des rapports', 'Gestion des matières et stocks'],
    itemsEn: ['Custom accounting applications', 'Financial dashboards', 'Report automation', 'Materials and inventory management'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    titleFr: 'Cybersécurité', titleEn: 'Cybersecurity',
    descFr: 'La sécurité intégrée à chaque étape du développement — authentification, accès, données.',
    descEn: 'Security integrated at every stage of development — authentication, access, data.',
    itemsFr: ['Audit de sécurité applicative', 'Authentification et gestion des accès', 'Protection des données personnelles', 'Formation et recommandations sécurité'],
    itemsEn: ['Application security audit', 'Authentication and access management', 'Personal data protection', 'Security training and recommendations'],
  },
];

export default function Services() {
  const { lang, t } = useLang();

  function scrollToContact() {
    const el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  }

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-navy mb-3">{t('Ce que je fais', 'What I do')}</h2>
          <div className="w-15 h-1 bg-accent rounded mx-auto mb-4" />
          <p className="text-gray-600 text-lg max-w-lg mx-auto">{t('Des solutions complètes, de la conception à la mise en production.', 'Complete solutions, from conception to production.')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-200 rounded-xl p-6 flex flex-col hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                {s.icon}
              </div>
              <h3 className="font-bold text-navy text-[1.05rem] mb-2">{t(s.titleFr, s.titleEn)}</h3>
              <p className="text-gray-600 text-sm mb-4">{t(s.descFr, s.descEn)}</p>
              <ul className="flex-1 mb-5 space-y-1.5">
                {(lang === 'fr' ? s.itemsFr : s.itemsEn).map((item, j) => (
                  <li key={j} className="text-[0.83rem] text-gray-600 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-accent before:text-xs before:top-[3px]">
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToContact}
                className="text-accent text-sm font-semibold hover:text-navy transition-colors text-left"
              >
                {t('Me contacter →', 'Contact me →')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
