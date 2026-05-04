'use client';

import { useLang } from '@/context/lang';
import { useReveal } from '@/hooks/useReveal';

const steps = [
  {
    num: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    fr: 'Écoute & Discovery',
    en: 'Listen & Discover',
    descFr: "On commence par comprendre votre métier, vos contraintes et vos utilisateurs réels. Pas de code avant d'avoir cerné le vrai problème.",
    descEn: "We start by understanding your business, constraints and real users. No code before we've identified the real problem.",
    colorFrom: 'from-indigo/30', colorTo: 'to-indigo/5',
    border: 'border-indigo/20',
  },
  {
    num: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    fr: 'Conception & Design',
    en: 'Design & Architecture',
    descFr: "Architecture technique, maquettes UI et plan d'implémentation. Vous validez avant que le premier fichier soit créé.",
    descEn: 'Technical architecture, UI wireframes and implementation plan. You validate before the first file is created.',
    colorFrom: 'from-cyan/20', colorTo: 'to-cyan/5',
    border: 'border-cyan/20',
  },
  {
    num: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    fr: 'Développement itératif',
    en: 'Iterative development',
    descFr: 'Sprints courts, livrables réguliers. Vous voyez le projet prendre forme en temps réel et pouvez ajuster à chaque étape.',
    descEn: 'Short sprints, regular deliverables. You watch the project take shape in real time and can adjust at each step.',
    colorFrom: 'from-violet-500/20', colorTo: 'to-violet-500/5',
    border: 'border-violet-500/20',
  },
  {
    num: '04',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    fr: 'Livraison & Tests',
    en: 'Delivery & Testing',
    descFr: 'Tests de bout en bout, recette métier, formation de vos équipes. La mise en production se fait sans surprise.',
    descEn: 'End-to-end tests, business acceptance, team training. Going live with no surprises.',
    colorFrom: 'from-emerald-500/20', colorTo: 'to-emerald-500/5',
    border: 'border-emerald-500/20',
  },
  {
    num: '05',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    fr: 'Suivi & Évolution',
    en: 'Support & Growth',
    descFr: "On ne disparaît pas après la livraison. Maintenance, montées en version et nouvelles fonctionnalités — on reste partenaire.",
    descEn: "We don't vanish after delivery. Maintenance, upgrades and new features — we stay your partner.",
    colorFrom: 'from-orange-500/20', colorTo: 'to-orange-500/5',
    border: 'border-orange-500/20',
  },
];

export default function HomeProcess() {
  const { t } = useLang();
  const ref = useReveal();

  return (
    <section className="py-28 bg-dark-700 relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      {/* Subtle background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="hero-glow w-[500px] h-[300px] bg-indigo/8 bottom-0 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-indigo-light text-xs font-bold uppercase tracking-widest mb-3">
            {t('Notre méthode', 'Our method')}
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-white leading-tight mb-4">
            {t('Comment on', 'How we')}{' '}
            <span className="gradient-text">{t('travaille', 'work')}</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base leading-relaxed">
            {t(
              "Pas de magie noire, pas de surprises. Un processus éprouvé, pensé pour que vous soyez toujours dans la boucle.",
              "No black magic, no surprises. A proven process designed to keep you in the loop at every step."
            )}
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid md:grid-cols-5 gap-4 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-indigo/30 via-cyan/30 to-indigo/10 z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal relative flex flex-col items-center text-center group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon bubble */}
              <div
                className={`relative z-10 w-[72px] h-[72px] rounded-2xl bg-gradient-to-br ${step.colorFrom} ${step.colorTo} border ${step.border} flex items-center justify-center mb-5 text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg`}
              >
                {step.icon}
                {/* Step number */}
                <span className="absolute -top-2 -right-2 text-[0.6rem] font-black bg-dark-800 border border-white/10 text-text-muted w-5 h-5 rounded-full flex items-center justify-center">
                  {step.num}
                </span>
              </div>

              <h3 className="text-white font-bold text-sm mb-2 leading-tight">
                {t(step.fr, step.en)}
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">
                {t(step.descFr, step.descEn)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
