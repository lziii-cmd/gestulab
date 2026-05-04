'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/context/lang';

const phrasesFr = ['Développeur Full-Stack', 'UI/UX Designer', 'Expert Data & IA', 'Intégrateur ERP'];
const phrasesEn = ['Full-Stack Developer', 'UI/UX Designer', 'Data & AI Expert', 'ERP Integrator'];

export default function Hero() {
  const { lang, t } = useLang();
  const [displayText, setDisplayText] = useState('');
  const state = useRef({ index: 0, char: 0, deleting: false });

  useEffect(() => {
    const phrases = lang === 'fr' ? phrasesFr : phrasesEn;
    // Reset on lang change
    state.current = { index: 0, char: 0, deleting: false };
    setDisplayText('');

    let timer: ReturnType<typeof setTimeout>;

    function step() {
      const { index, char, deleting } = state.current;
      const current = phrases[index];

      if (!deleting) {
        const next = current.substring(0, char + 1);
        setDisplayText(next);
        state.current.char++;
        if (state.current.char === current.length) {
          state.current.deleting = true;
          timer = setTimeout(step, 1800);
          return;
        }
      } else {
        const next = current.substring(0, char - 1);
        setDisplayText(next);
        state.current.char--;
        if (state.current.char === 0) {
          state.current.deleting = false;
          state.current.index = (index + 1) % phrases.length;
        }
      }
      timer = setTimeout(step, deleting ? 55 : 85);
    }

    timer = setTimeout(step, 400);
    return () => clearTimeout(timer);
  }, [lang]);

  function scrollTo(href: string) {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 72, behavior: 'smooth' });
  }

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden hero-bg">
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 max-w-[820px] w-full">
        {/* Badge */}
        <span className="inline-block bg-accent/20 border border-accent/50 text-blue-light text-[0.82rem] font-semibold px-4 py-1.5 rounded-full tracking-wide mb-6">
          {t('Fondateur — Gëstu Systems', 'Founder — Gëstu Systems')}
        </span>

        {/* Title */}
        <h1 className="text-[clamp(2rem,5vw,3.4rem)] font-extrabold text-white leading-[1.15] tracking-tight mb-5">
          {t(
            'Je conçois des solutions numériques qui transforment vos idées en réalité.',
            'I design digital solutions that turn your ideas into reality.'
          )}
        </h1>

        {/* Subtitle with typing */}
        <p className="text-white/75 font-medium text-[clamp(0.95rem,2vw,1.1rem)] mb-2">
          EL HADJI ABDOU BABOU NGOM —{' '}
          <span className="text-blue-light font-semibold">{displayText}</span>
          <span className="text-blue-light blink">|</span>
        </p>

        <p className="text-white/50 text-sm mb-10">
          {t('Basé à Dakar, disponible à l\'international.', 'Based in Dakar, available worldwide.')}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo('#projets')}
            className="px-8 py-3.5 rounded-md bg-accent text-white font-semibold text-base hover:bg-accent-dark transition-all hover:-translate-y-0.5"
          >
            {t('Voir mes projets', 'View my projects')}
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="px-8 py-3.5 rounded-md border border-white/50 text-white font-semibold text-base hover:bg-white/10 hover:border-white transition-all"
          >
            {t('Me contacter', 'Contact me')}
          </button>
        </div>
      </div>

      {/* Scroll arrow */}
      <button
        onClick={() => scrollTo('#stats')}
        className="bounce-arrow absolute bottom-8 left-1/2 text-white/40 hover:text-white/80 transition-colors z-10"
        aria-label="Scroll"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>
    </section>
  );
}
