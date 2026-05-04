'use client';

import Link from 'next/link';
import { useLang } from '@/context/lang';
import { useReveal } from '@/hooks/useReveal';

const portraits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    fr: {
      scene: 'Un dimanche soir, à Dakar',
      text: "Un directeur de clinique retape les ordonnances de la semaine sur Excel. Il n'a pas de logiciel. Il a de l'ambition — et des heures qu'il ne devrait pas perdre.",
      tag: 'Santé',
    },
    en: {
      scene: 'Sunday evening, in Dakar',
      text: "A clinic director is retyping the week's prescriptions into Excel. He has no software. He has ambition — and hours he shouldn't be losing.",
      tag: 'Healthcare',
    },
    color: 'text-indigo-light',
    borderHover: 'hover:border-indigo/40',
    gradientFrom: 'from-indigo/40',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M2 20h20M5 20V10l7-7 7 7v10"/><path d="M9 20v-5h6v5"/>
      </svg>
    ),
    fr: {
      scene: 'Sur un chantier, quelque part',
      text: "Un chef de projet ne sait pas combien de sacs de ciment il lui reste. Il le saura quand il en manquera. Pas avant.",
      tag: 'BTP',
    },
    en: {
      scene: 'On a construction site, somewhere',
      text: "A project manager doesn't know how many cement bags he has left. He'll find out when he runs out. Not before.",
      tag: 'Construction',
    },
    color: 'text-cyan',
    borderHover: 'hover:border-cyan/40',
    gradientFrom: 'from-cyan/40',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
    fr: {
      scene: 'Dans un bureau, à Plateau',
      text: "Une comptable ferme les yeux avant de valider le bilan mensuel. Elle sait que quelque chose ne colle pas. Elle n'a pas les outils pour trouver quoi.",
      tag: 'Finance',
    },
    en: {
      scene: 'In an office, at Plateau',
      text: "An accountant closes her eyes before validating the monthly report. She knows something doesn't add up. She doesn't have the tools to find out what.",
      tag: 'Finance',
    },
    color: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40',
    gradientFrom: 'from-emerald-500/40',
  },
];

export default function StorySection() {
  const { lang, t } = useLang();
  const ref = useReveal();

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
      <div className="hero-glow w-[500px] h-[500px] bg-indigo/8 top-[-80px] right-[-150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>

        {/* En-tête */}
        <div className="reveal mb-14">
          <p className="text-indigo-light text-xs font-bold uppercase tracking-widest mb-4">
            {lang === 'fr' ? 'Quelque part à Dakar…' : 'Somewhere in Dakar…'}
          </p>
          <div className="max-w-2xl">
            <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-black text-white leading-tight mb-5">
              {lang === 'fr' ? (
                <>Ils ont l'ambition.<br />Il leur manque <span className="gradient-text">le système.</span></>
              ) : (
                <>They have the ambition.<br />They're missing <span className="gradient-text">the system.</span></>
              )}
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              {t(
                "Ces situations n'ont rien d'exceptionnel. Elles sont le quotidien de centaines d'entreprises africaines qui avancent malgré leurs outils — pas grâce à eux.",
                "These situations are not exceptional. They are the daily reality of hundreds of African businesses moving forward despite their tools — not because of them."
              )}
            </p>
          </div>
        </div>

        {/* Trois portraits */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {portraits.map((p, i) => {
            const content = lang === 'fr' ? p.fr : p.en;
            return (
              <div
                key={i}
                className={`reveal group glass rounded-2xl border border-white/8 p-7 transition-all duration-500 ${p.borderHover} hover:shadow-[0_0_40px_rgba(99,102,241,0.08)] cursor-default`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Icône + tag */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`${p.color}`}>{p.icon}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${p.color} bg-white/5 border border-white/8 px-2.5 py-1 rounded-full`}>
                    {content.tag}
                  </span>
                </div>

                {/* Lieu / scène */}
                <p className={`text-xs font-bold uppercase tracking-wider ${p.color} mb-3 opacity-70`}>
                  {content.scene}
                </p>

                {/* Texte portrait */}
                <p className="text-white/80 text-[0.95rem] leading-relaxed">
                  {content.text}
                </p>

                {/* Ligne de couleur basse */}
                <div className={`mt-6 h-px bg-gradient-to-r ${p.gradientFrom} to-transparent`} />
              </div>
            );
          })}
        </div>

        {/* Bridge + philosophie */}
        <div className="reveal max-w-3xl mx-auto text-center">
          {/* Conclusion des portraits */}
          <p className="text-white font-bold text-lg mb-10 leading-relaxed">
            {t(
              "Ces trois personnes ne manquent pas d'ambition. Elles manquent d'un système qui leur ressemble.",
              "These three people don't lack ambition. They lack a system that fits them."
            )}
          </p>

          {/* Citation centrale */}
          <div className="glass rounded-2xl border border-white/8 px-8 py-10 mb-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo/5 via-transparent to-cyan/5 pointer-events-none" />
            {/* Guillemet déco */}
            <span className="absolute top-3 left-5 text-8xl font-black text-indigo/10 leading-none select-none pointer-events-none">"</span>
            <div className="relative z-10">
              <p className="text-white text-[1.15rem] font-bold leading-relaxed mb-3">
                {t(
                  "On ne construit pas bien ce qu'on n'a pas pris le temps de comprendre.",
                  "You can't build well what you haven't taken the time to understand."
                )}
              </p>
              <p className="text-text-muted text-sm italic">
                {t('— La philosophie Gëstu', '— The Gëstu philosophy')}
              </p>
            </div>
          </div>

          {/* Explication gëstu */}
          <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-xl mx-auto">
            {lang === 'fr' ? (
              <>En Wolof, <strong className="text-white font-semibold">gëstu</strong> veut dire explorer — aller voir avant d'agir. Avant d'écrire la première ligne de code, je pose des questions. Je dessine d'abord. Je code ensuite.</>
            ) : (
              <>In Wolof, <strong className="text-white font-semibold">gëstu</strong> means to explore — to look before you leap. Before writing the first line of code, I ask questions. I design first. I code after.</>
            )}
          </p>

          {/* CTA manifeste */}
          <Link
            href="/manifeste"
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-indigo-light hover:text-white border border-indigo/30 hover:border-indigo/60 px-6 py-3 rounded-xl transition-all hover:bg-indigo/10"
          >
            {t('Lire le manifeste complet', 'Read the full manifesto')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
