'use client';

import Link from 'next/link';

import { useLang } from '@/context/lang';
import { useReveal } from '@/hooks/useReveal';

const sections = {
  fr: [
    {
      tag: '01',
      title: 'Quelque part à Dakar…',
      content: [
        "Un dimanche soir, un directeur de clinique retape les ordonnances de la semaine sur Excel. Il n'a pas de logiciel. Il a de l'ambition — et des heures qu'il ne devrait pas perdre.",
        "Sur un chantier quelque part, un chef de projet ne sait pas combien de sacs de ciment il lui reste. Il le saura quand il en manquera. Pas avant.",
        "Dans un bureau à Plateau, une comptable ferme les yeux avant de valider le bilan mensuel. Elle sait que quelque chose ne colle pas. Elle n'a pas les outils pour trouver quoi.",
      ],
      closing: "Ces trois personnes ne manquent pas d'ambition. Elles manquent d'un système qui leur ressemble.",
    },
    {
      tag: '02',
      title: "Gëstu — explorer avant d'agir",
      content: [
        "En Wolof, gëstu veut dire explorer. Investiguer. Aller voir avant d'agir.",
        "C'est la conviction qui est au cœur de tout ce que je fais. Avant d'écrire la première ligne de code, je pose des questions. Je comprends votre secteur, vos contraintes, vos habitudes de travail, les frictions invisibles qui coûtent du temps et de l'argent chaque jour.",
        "Je dessine d'abord. Je code ensuite. Et je ne livre que ce que j'ai compris, conçu, et testé.",
      ],
      closing: null,
    },
    {
      tag: '03',
      title: "Né à Dakar. Pensé pour l'Afrique.",
      content: [
        "Gëstu Systems n'est pas une grande agence avec vingt commerciaux et un chef de projet différent à chaque réunion. C'est un studio de développement de précision — un seul interlocuteur, du premier échange à la livraison finale.",
        "Je connais les réalités du terrain africain : les connexions intermittentes, les workflows hybrides papier-numérique, les contraintes budgétaires qui imposent des choix, les décisions qui se prennent en famille autant qu'en conseil d'administration.",
        "Je ne construis pas des logiciels génériques plaqués sur des contextes qui ne leur correspondent pas. Je construis ce qui marche ici. Ce qui dure.",
      ],
      closing: null,
    },
    {
      tag: '04',
      title: 'Un interlocuteur. Pas une bureaucratie.',
      content: [
        "Quand vous me contactez, c'est moi qui réponds. Quand vous avez une question à 23h avant un lancement, c'est encore moi. Quand le projet est livré et qu'un bug apparaît six mois plus tard, vous n'avez pas à réexpliquer le contexte à quelqu'un qui n'était pas là.",
        "Ce n'est pas une promesse commerciale. C'est simplement ce que ça signifie de travailler seul avec rigueur plutôt qu'à beaucoup sans cohérence.",
      ],
      closing: "Je ne promets pas la lune. Je livre ce que j'ai compris, ce que j'ai conçu, ce que j'ai testé.",
    },
  ],
  en: [
    {
      tag: '01',
      title: 'Somewhere in Dakar…',
      content: [
        "Sunday evening. A clinic director is retyping the week's prescriptions into Excel. He has no software. He has ambition — and hours he shouldn't be losing.",
        "On a construction site, somewhere. A project manager doesn't know how many cement bags he has left. He'll find out when he runs out. Not before.",
        "In an office at Plateau. An accountant closes her eyes before validating the monthly report. She knows something doesn't add up. She doesn't have the tools to find out what.",
      ],
      closing: "These three people don't lack ambition. They lack a system that fits them.",
    },
    {
      tag: '02',
      title: 'Gëstu — explore before you act',
      content: [
        "In Wolof, gëstu means to explore. To investigate. To look before you leap.",
        "This is the conviction at the heart of everything I do. Before writing the first line of code, I ask questions. I understand your industry, your constraints, your work habits, the invisible friction that costs time and money every day.",
        "I design first. I code after. And I only deliver what I have understood, designed, and tested.",
      ],
      closing: null,
    },
    {
      tag: '03',
      title: 'Born in Dakar. Built for Africa.',
      content: [
        "Gëstu Systems is not a large agency with twenty salespeople and a different project manager at every meeting. It's a precision development studio — one point of contact, from the first conversation to the final delivery.",
        "I know African ground-level realities: intermittent connections, hybrid paper-digital workflows, budget constraints that force choices, decisions made as much around a family table as in a boardroom.",
        "I don't build generic software pasted onto contexts that don't fit. I build what works here. What lasts.",
      ],
      closing: null,
    },
    {
      tag: '04',
      title: 'One contact. Not a bureaucracy.',
      content: [
        "When you reach out, I'm the one who answers. When you have a question at 11 PM before a launch, still me. When the project is delivered and a bug appears six months later, you don't have to re-explain the context to someone who wasn't there.",
        "This isn't a sales promise. It's simply what it means to work alone with rigor rather than with many without coherence.",
      ],
      closing: "I don't promise the moon. I deliver what I understood, what I designed, what I tested.",
    },
  ],
};

export default function ManifestePage() {
  const { lang, t } = useLang();
  const ref = useReveal();

  const content = sections[lang];

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-dark grid-pattern relative overflow-hidden">
        <div className="hero-glow w-[500px] h-[500px] bg-indigo/12 top-[-100px] left-[-100px]" />
        <div className="hero-glow w-[300px] h-[300px] bg-cyan/8 bottom-0 right-0" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-indigo-light text-xs font-bold uppercase tracking-widest mb-5">
            {t('Notre philosophie', 'Our philosophy')}
          </p>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-white leading-tight mb-6">
            {lang === 'fr' ? (
              <>Le <span className="gradient-text">manifeste</span><br />Gëstu Systems</>
            ) : (
              <>The Gëstu Systems<br /><span className="gradient-text">manifesto</span></>
            )}
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-xl mx-auto mb-8">
            {t(
              "Pourquoi Gëstu Systems existe. Ce en quoi je crois. Comment je travaille.",
              "Why Gëstu Systems exists. What I believe in. How I work."
            )}
          </p>
          {/* Divider déco */}
          <div className="flex items-center gap-4 justify-center">
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-indigo/40" />
            <span className="gradient-text font-black text-xl">✦</span>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-indigo/40" />
          </div>
        </div>
      </section>

      {/* Corps du manifeste */}
      <section className="py-20 bg-dark" ref={ref}>
        <div className="max-w-2xl mx-auto px-6">

          {content.map((section, i) => (
            <div
              key={i}
              className="reveal mb-20 last:mb-0"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Numéro + titre */}
              <div className="flex items-start gap-5 mb-7">
                <span className="text-[10px] font-black text-indigo/50 tracking-widest pt-1.5 shrink-0">
                  {section.tag}
                </span>
                <h2 className="text-white font-black text-[1.45rem] leading-tight">
                  {section.title}
                </h2>
              </div>

              {/* Paragraphes */}
              <div className="space-y-5 pl-10">
                {section.content.map((para, j) => (
                  <p key={j} className="text-text-secondary text-[1.05rem] leading-[1.85]">
                    {/* Mettre "gëstu" en italique si présent */}
                    {para.replace(/gëstu/gi, '').split('').length > 0 ? para : para}
                  </p>
                ))}

                {section.closing && (
                  <p className="text-white font-semibold text-[1.05rem] leading-relaxed border-l-2 border-indigo/50 pl-5 ml-0 py-1 mt-7">
                    {section.closing}
                  </p>
                )}
              </div>

              {/* Séparateur entre sections (sauf dernière) */}
              {i < content.length - 1 && (
                <div className="mt-16 flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/5" />
                  <span className="text-indigo/30 text-xs">✦</span>
                  <div className="h-px flex-1 bg-white/5" />
                </div>
              )}
            </div>
          ))}

          {/* Signature finale */}
          <div className="reveal mt-24 text-center">
            <div className="inline-block glass rounded-2xl border border-white/8 px-10 py-10 relative overflow-hidden max-w-md w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo/8 via-transparent to-cyan/5 pointer-events-none" />
              <div className="relative z-10">
                {/* Logo marque */}
                <p className="text-white font-black text-2xl tracking-tight mb-1">
                  Gëstu<span className="gradient-text">Systems</span>
                </p>
                <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">
                  Dakar, Sénégal
                </p>
                {/* Devise */}
                <p className="gradient-text font-black text-lg leading-snug">
                  {t(
                    'Explorer. Construire. Durer.',
                    'Explore. Build. Last.'
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation retour */}
          <div className="reveal mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              {t('Retour à l\'accueil', 'Back to home')}
            </Link>
            <span className="text-white/10 hidden sm:block">|</span>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-light hover:text-white border border-indigo/30 hover:border-indigo/60 px-5 py-2.5 rounded-xl transition-all hover:bg-indigo/10"
            >
              {t('Démarrer un projet', 'Start a project')}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
