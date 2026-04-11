'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/context/lang';

const wordsFr = ['durables', 'performantes', 'innovantes', 'sur mesure'];
const wordsEn = ['durable', 'performant', 'innovative', 'tailor-made'];

export default function HomeHero() {
  const { lang, t } = useLang();
  const [word, setWord] = useState(wordsFr[0]);
  const [fading, setFading] = useState(false);
  const idx = useRef(0);

  useEffect(() => {
    const words = lang === 'fr' ? wordsFr : wordsEn;
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        idx.current = (idx.current + 1) % words.length;
        setWord(words[idx.current]);
        setFading(false);
      }, 300);
    }, 2200);
    return () => clearInterval(interval);
  }, [lang]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark grid-pattern">
      {/* Glow orbs */}
      <div className="hero-glow w-[500px] h-[500px] bg-indigo/20 top-[-100px] left-[-150px]" />
      <div className="hero-glow w-[400px] h-[400px] bg-cyan/15 bottom-[-50px] right-[-100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo/30 bg-indigo/10 text-indigo-light text-xs font-semibold tracking-widest uppercase mb-8">
          <span className="avail-dot" />
          {t('Disponible pour nouveaux projets', 'Available for new projects')}
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[1.05] tracking-tight mb-6 max-w-4xl">
          {t('Nous créons des solutions numériques', 'We build digital solutions')}{' '}
          <span
            className="gradient-text inline-block transition-opacity duration-300"
            style={{ opacity: fading ? 0 : 1 }}
          >
            {word}
          </span>
        </h1>

        {/* Sub */}
        <p className="text-text-secondary text-[clamp(1rem,2vw,1.2rem)] max-w-2xl leading-relaxed mb-12">
          {t(
            'Gëstu Lab accompagne les entreprises et institutions dans leur transformation numérique — du concept à la mise en production.',
            'Gëstu Lab supports companies and institutions in their digital transformation — from concept to production.'
          )}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-20">
          <Link href="/projets" className="btn-gradient px-8 py-4 rounded-xl text-base font-bold">
            <span>{t('Voir nos réalisations', 'See our work')}</span>
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-4 rounded-xl text-base font-bold border border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all"
          >
            {t('Démarrer un projet', 'Start a project')}
          </Link>
        </div>

        {/* Stats inline */}
        <div className="flex flex-wrap gap-10 border-t border-white/5 pt-10">
          {[
            { n: '3+', fr: "Ans d'expertise",  en: 'Years of expertise' },
            { n: '8+', fr: 'Projets livrés',    en: 'Projects delivered' },
            { n: '5+', fr: 'Secteurs couverts', en: 'Sectors covered' },
            { n: '2',  fr: 'Langues de travail', en: 'Working languages' },
          ].map(s => (
            <div key={s.n}>
              <div className="text-3xl font-black gradient-text">{s.n}</div>
              <div className="text-text-muted text-xs mt-1">{t(s.fr, s.en)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="bounce-arrow absolute bottom-8 left-1/2 text-text-muted">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
