'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/context/lang';

const wordsFr = ['durables', 'performantes', 'innovantes', 'sur mesure'];
const wordsEn = ['durable',  'performant',   'innovative', 'tailor-made'];

const codeLines = [
  { indent: 0, keyword: 'class',    rest: ' GëstuSystems:',          color: '#818CF8' },
  { indent: 1, keyword: 'def',      rest: ' build(self, idea):',  color: '#06B6D4' },
  { indent: 2, keyword: '',         rest: '"""',                   color: '#94A3B8' },
  { indent: 2, keyword: '',         rest: 'Explore → Design',      color: '#94A3B8' },
  { indent: 2, keyword: '',         rest: '→ Build → Ship',        color: '#94A3B8' },
  { indent: 2, keyword: '',         rest: '"""',                   color: '#94A3B8' },
  { indent: 2, keyword: 'solution', rest: ' = self.explore(',      color: '#22D3EE' },
  { indent: 3, keyword: '',         rest: 'idea=idea,',            color: '#F1F5F9' },
  { indent: 3, keyword: '',         rest: 'rigor=True,',           color: '#F1F5F9' },
  { indent: 3, keyword: '',         rest: 'ambition=True',         color: '#F1F5F9' },
  { indent: 2, keyword: '',         rest: ')',                      color: '#F1F5F9' },
  { indent: 2, keyword: 'return',   rest: ' solution.deploy()',    color: '#818CF8' },
];

export default function HomeHero() {
  const { lang, t } = useLang();
  const [word, setWord]     = useState(wordsFr[0]);
  const [fading, setFading] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const idx = useRef(0);

  /* ── Rotating words ── */
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

  /* ── Typewriter pour le code ── */
  useEffect(() => {
    setVisibleLines(0);
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setVisibleLines(i);
      if (i >= codeLines.length) clearInterval(timer);
    }, 120);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark grid-pattern">
      <div className="hero-glow w-[600px] h-[600px] bg-indigo/15 top-[-150px] left-[-200px]" />
      <div className="hero-glow w-[400px] h-[400px] bg-cyan/12 bottom-[-80px] right-[-100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full grid lg:grid-cols-[1fr_440px] gap-12 items-center">

        {/* ── Left: texte ── */}
        <div>
          {/* Badge disponibilité */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo/30 bg-indigo/10 text-indigo-light text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="avail-dot" />
            {t('Disponible pour nouveaux projets', 'Available for new projects')}
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-black leading-[1.05] tracking-tight mb-4 max-w-2xl">
            {t('Je crée des solutions numériques', 'I build digital solutions')}{' '}
            <span
              className="gradient-text inline-block transition-opacity duration-300"
              style={{ opacity: fading ? 0 : 1 }}
            >
              {word}
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-indigo-light/80 text-base font-semibold italic mb-4">
            {t(
              'Du code ancré dans votre réalité métier',
              'Code rooted in your business reality'
            )}
          </p>

          {/* Sub */}
          <p className="text-text-secondary text-[clamp(1rem,1.8vw,1.1rem)] max-w-xl leading-relaxed mb-10">
            {t(
              "Gëstu Systems, c'est moi — El Hadji. Je conçois et livre des systèmes d'information sur mesure pour les entreprises africaines. Un seul interlocuteur, du début à la fin.",
              "Gëstu Systems is me — El Hadji. I design and deliver custom information systems for African businesses. One point of contact, from start to finish."
            )}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Link href="/projets" className="btn-gradient px-8 py-4 rounded-xl text-base font-bold">
              <span>{t('Voir mes réalisations', 'See my work')}</span>
            </Link>
            <Link
              href="/#contact"
              className="px-8 py-4 rounded-xl text-base font-bold border border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all"
            >
              {t('Démarrer un projet', 'Start a project')}
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 border-t border-white/5 pt-10">
            {[
              { n: '3+', fr: "Ans d'expertise",   en: 'Years of expertise' },
              { n: '8+', fr: 'Projets livrés',     en: 'Projects delivered' },
              { n: '5+', fr: 'Secteurs couverts',  en: 'Sectors covered' },
              { n: '1',  fr: 'Interlocuteur unique', en: 'Single point of contact' },
            ].map(s => (
              <div key={s.n}>
                <div className="text-3xl font-black gradient-text">{s.n}</div>
                <div className="text-text-muted text-xs mt-1">{t(s.fr, s.en)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: code card ── */}
        <div className="hidden lg:block">
          <div className="glass rounded-2xl overflow-hidden border border-white/8 shadow-[0_0_60px_rgba(99,102,241,0.12)]">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-dark-800/80 border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
              <span className="ml-3 text-text-muted text-[11px] font-mono">gestulab.py</span>
            </div>
            {/* Code body */}
            <div className="p-5 font-mono text-[12.5px] leading-[1.75] bg-dark/60 min-h-[280px]">
              {codeLines.slice(0, visibleLines).map((line, i) => (
                <div key={i} className="flex">
                  <span className="text-text-muted/40 select-none w-6 shrink-0 text-right mr-4">{i + 1}</span>
                  <span style={{ paddingLeft: `${line.indent * 16}px` }} className="flex">
                    {line.keyword && (
                      <span style={{ color: line.color }} className="mr-1 font-bold">{line.keyword}</span>
                    )}
                    <span style={{ color: line.keyword ? '#F1F5F9' : line.color }}>{line.rest}</span>
                  </span>
                </div>
              ))}
              {visibleLines < codeLines.length && (
                <div className="flex">
                  <span className="text-text-muted/40 select-none w-6 shrink-0 text-right mr-4">{visibleLines + 1}</span>
                  <span className="blink text-indigo-light">▌</span>
                </div>
              )}
            </div>
            {/* Footer bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-dark-800/60 border-t border-white/5 text-[10px] font-mono">
              <span className="text-indigo-light/70">Python 3.11</span>
              <span className="text-emerald-400/70 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {t("En cours d'exécution", 'Running')}
              </span>
            </div>
          </div>

          {/* Badges tech */}
          <div className="flex gap-3 mt-4 flex-wrap">
            {['Django', 'React', 'Flutter', 'Python', 'Node.js'].map(tech => (
              <span
                key={tech}
                className="text-[11px] font-semibold bg-white/5 border border-white/8 text-text-secondary px-3 py-1.5 rounded-full hover:border-indigo/30 hover:text-white transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
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
