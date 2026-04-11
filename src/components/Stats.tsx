'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/context/lang';

const stats = [
  { target: 3,  suffix: '+', fr: "Années d'expérience", en: 'Years of experience' },
  { target: 8,  suffix: '+', fr: 'Projets livrés',       en: 'Projects delivered' },
  { target: 5,  suffix: '+', fr: 'Secteurs couverts',    en: 'Sectors covered' },
  { target: 2,  suffix: '',  fr: 'Langues de travail',   en: 'Working languages' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 40;
        const interval = 1200 / steps;
        let i = 0;
        const timer = setInterval(() => {
          i++;
          setValue(Math.round((target * i) / steps));
          if (i >= steps) clearInterval(timer);
        }, interval);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-[clamp(2.2rem,4vw,3rem)] font-extrabold text-navy leading-none">
      {value}<span className="text-accent">{suffix}</span>
    </div>
  );
}

export default function Stats() {
  const { t } = useLang();

  return (
    <section id="stats" className="bg-white border-b border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-8 rounded-xl bg-gray-50 border border-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
          >
            <Counter target={s.target} suffix={s.suffix} />
            <p className="text-gray-600 text-sm font-medium mt-2">{t(s.fr, s.en)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
