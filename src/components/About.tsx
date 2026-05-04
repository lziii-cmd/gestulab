'use client';

import { useLang } from '@/context/lang';

const steps = [
  { n: '01', fr: 'Écouter',       en: 'Listen',           descFr: 'Je commence par comprendre profondément votre besoin avant de proposer quoi que ce soit.', descEn: "I start by deeply understanding your need before proposing anything." },
  { n: '02', fr: 'Concevoir',     en: 'Design',           descFr: "Je dessine l'architecture et le design avant d'écrire la première ligne de code.", descEn: 'I sketch the architecture and design before writing the first line of code.' },
  { n: '03', fr: 'Construire',    en: 'Build',            descFr: 'Je développe avec rigueur, en livrant par étapes et en restant en communication constante.', descEn: 'I develop rigorously, delivering in stages while staying in constant communication.' },
  { n: '04', fr: 'Livrer & Suivre', en: 'Deliver & Support', descFr: "Je livre un produit testé, documenté et reste disponible pour l'évolution.", descEn: 'I deliver a tested, documented product and stay available for future evolution.' },
];

const skillGroups = [
  { titleFr: 'Langages',        titleEn: 'Languages',  tags: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'Java', 'C / C++', 'HTML / CSS'] },
  { titleFr: 'Frameworks',      titleEn: 'Frameworks', tags: ['Django', 'React', 'Vue.js', 'Angular', 'Node.js', 'Flutter'] },
  { titleFr: 'Data & IA',       titleEn: 'Data & AI',  tags: ['Talend', 'Web Scraping', 'Machine Learning', 'ETL'] },
  { titleFr: 'DevOps & Outils', titleEn: 'DevOps & Tools', tags: ['Docker', 'Git / GitHub', 'Render', 'Vercel'] },
  { titleFr: 'Design',          titleEn: 'Design',     tags: ['Figma', 'Adobe XD', 'Photoshop'] },
  { titleFr: 'Bases de données', titleEn: 'Databases', tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'] },
];

const langs = [
  { flag: '🇫🇷', fr: 'Français — Courant',       en: 'French — Fluent' },
  { flag: '🇬🇧', fr: 'Anglais — Professionnel',  en: 'English — Professional' },
  { flag: '🇸🇳', fr: 'Wolof — Natif',            en: 'Wolof — Native' },
];

export default function About() {
  const { t } = useLang();

  return (
    <section id="apropos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-navy mb-3">{t('À Propos', 'About Me')}</h2>
          <div className="w-15 h-1 bg-accent rounded mx-auto" />
        </div>

        {/* Bio grid */}
        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start mb-16">
          {/* Photo placeholder */}
          <div className="hidden md:flex justify-center">
            <div className="w-[220px] h-[280px] rounded-xl bg-gray-100 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-3 overflow-hidden">
              <svg viewBox="0 0 80 80" fill="none" className="w-24 h-24">
                <circle cx="40" cy="30" r="18" fill="#2E86C1" opacity="0.8" />
                <path d="M10 72c0-16.569 13.431-30 30-30s30 13.431 30 30" fill="#1E3A5F" opacity="0.6" />
              </svg>
              <span className="text-xs text-gray-400 text-center px-4">{t('Ajoutez votre photo ici', 'Add your photo here')}</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-extrabold text-navy mb-1">EL HADJI ABDOU BABOU NGOM</h3>
            <p className="text-accent font-semibold text-sm mb-5">
              {t('Fondateur de Gëstu Systems — Développeur Full-Stack & Designer UI/UX', 'Founder of Gëstu Systems — Full-Stack Developer & UI/UX Designer')}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t(
                "Je m'appelle EL HADJI ABDOU BABOU NGOM, développeur full-stack, designer UI/UX et expert en systèmes d'information, basé à Dakar, Sénégal. Depuis plus de 3 ans, je conçois et déploie des solutions numériques complètes pour des organisations de tous secteurs : entreprises de construction, institutions académiques, cabinets médicaux, ONG et startups. En 2025, j'ai fondé ",
                "My name is El Hadji Abdou Babou Ngom, a full-stack developer, UI/UX designer and information systems expert based in Dakar, Senegal. For over 3 years, I have been designing and deploying complete digital solutions for organizations across all sectors: construction companies, academic institutions, medical practices, NGOs and startups. In 2025, I founded "
              )}
              <strong className="text-navy">Gëstu Systems</strong>
              {t(
                " — une structure qui incarne ma vision : explorer chaque problème avec profondeur et construire des solutions qui durent. Je travaille en français et en anglais, avec des clients partout dans le monde, et je m'engage sur chaque projet avec rigueur, transparence et ambition.",
                " — a structure that embodies my vision: exploring every problem in depth and building solutions that last. I work in French and English, with clients worldwide, and commit to every project with rigor, transparency and ambition."
              )}
            </p>
            {/* Language badges */}
            <div className="flex flex-wrap gap-2">
              {langs.map((l, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 bg-gray-100 border border-gray-200 text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full">
                  {l.flag} {t(l.fr, l.en)}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-navy text-center mb-8">{t('Mon approche de travail', 'My work approach')}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(s => (
              <div key={s.n} className="text-center">
                <div className="w-14 h-14 rounded-full bg-navy text-white font-extrabold text-base flex items-center justify-center mx-auto mb-4 ring-2 ring-white shadow-[0_0_0_2px_#1E3A5F]">
                  {s.n}
                </div>
                <h4 className="font-bold text-navy mb-2">{t(s.fr, s.en)}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{t(s.descFr, s.descEn)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-bold text-navy text-center mb-8">{t('Compétences techniques', 'Technical skills')}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((g, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h4 className="text-[0.75rem] font-bold text-gray-400 uppercase tracking-widest mb-3">{t(g.titleFr, g.titleEn)}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {g.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-white border border-gray-200 text-navy text-[0.78rem] font-medium px-2.5 py-1 rounded-full hover:bg-navy hover:text-white hover:border-navy transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
