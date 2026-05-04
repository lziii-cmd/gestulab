'use client';

import Link from 'next/link';
import { useLang } from '@/context/lang';
import { useReveal } from '@/hooks/useReveal';
import SignatureCard from '@/components/shared/SignatureCard';

export default function FounderTeaser() {
  const { t } = useLang();
  const ref = useReveal();

  return (
    <section className="py-28 bg-dark-800" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal glass gradient-border rounded-3xl p-10 md:p-16 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <p className="text-indigo-light text-xs font-bold uppercase tracking-widest mb-4">
              {t('Le fondateur', 'The founder')}
            </p>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black text-white leading-tight mb-6">
              El Hadji Abdou Babou Ngom<br />
              <span className="gradient-text text-[0.7em]">
                {t('Fondateur & Lead Developer', 'Founder & Lead Developer')}
              </span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed max-w-xl mb-4">
              {t(
                "Développeur full-stack, designer UI/UX et expert en systèmes d'information. Je travaille seul — c'est ma force : un seul interlocuteur, zéro bureaucratie, vous parlez directement à l'expert qui conçoit et livre votre solution.",
                "Full-stack developer, UI/UX designer and information systems expert. I work alone — that's my strength: one point of contact, zero bureaucracy, you speak directly to the expert who designs and delivers your solution."
              )}
            </p>
            <p className="text-text-muted text-sm italic mb-8">
              {t(
                "Je ne vous promets pas le prix le plus bas. Je vous promets de comprendre votre métier avant d'écrire la première ligne de code.",
                "I don't promise the lowest price. I promise to understand your business before writing the first line of code."
              )}
            </p>
            <Link href="/fondateur" className="inline-flex items-center gap-3 btn-gradient px-7 py-3.5 rounded-xl font-bold">
              <span>{t('Découvrir le fondateur', 'Meet the founder')}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Signature card compacte */}
          <div className="hidden md:flex">
            <SignatureCard compact />
          </div>
        </div>
      </div>
    </section>
  );
}
