'use client';

import { useLang } from '@/context/lang';
import { useReveal } from '@/hooks/useReveal';

/**
 * Section témoignages.
 * Remplis les vrais témoignages dans le tableau `testimonials` ci-dessous.
 * Le champ `pending: true` affiche un placeholder sobre plutôt qu'un témoignage vide.
 */
const testimonials = [
  {
    pending: true,
    nameFr: 'Client BTP',
    nameEn: 'BTP Client',
    roleFr: 'Directeur, Entreprise de Construction — Dakar',
    roleEn: 'Director, Construction Company — Dakar',
    quoteFr: 'Témoignage en cours de collecte.',
    quoteEn: 'Testimonial being collected.',
    sector: 'BTP',
    sectorColor: 'border-orange-500/20 bg-orange-500/5',
  },
  {
    pending: true,
    nameFr: 'Client Santé',
    nameEn: 'Healthcare Client',
    roleFr: 'Responsable, Cabinet Médical — Dakar',
    roleEn: 'Manager, Medical Practice — Dakar',
    quoteFr: 'Témoignage en cours de collecte.',
    quoteEn: 'Testimonial being collected.',
    sector: 'Santé',
    sectorColor: 'border-emerald-500/20 bg-emerald-500/5',
  },
  {
    pending: true,
    nameFr: 'Client Finance',
    nameEn: 'Finance Client',
    roleFr: 'DAF, Entreprise Industrielle — Dakar',
    roleEn: 'CFO, Industrial Company — Dakar',
    quoteFr: 'Témoignage en cours de collecte.',
    quoteEn: 'Testimonial being collected.',
    sector: 'Finance',
    sectorColor: 'border-yellow-500/20 bg-yellow-500/5',
  },
];

/* Mettre à false + remplir les quotes quand tu as les témoignages réels */
const hasPendingOnly = testimonials.every(t => t.pending);

export default function HomeTestimonials() {
  const { lang, t } = useLang();
  const ref = useReveal();

  /* Si tous les témoignages sont pending, ne pas afficher la section du tout */
  if (hasPendingOnly) return null;

  return (
    <section className="py-28 bg-dark-800 relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="hero-glow w-[400px] h-[300px] bg-cyan/6 bottom-0 right-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-indigo-light text-xs font-bold uppercase tracking-widest mb-3">
            {t('Ils m\'ont fait confiance', 'They trusted me')}
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-white leading-tight">
            {t('Ce que disent', 'What my')}{' '}
            <span className="gradient-text">{t('mes clients', 'clients say')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`reveal glass rounded-2xl p-7 border ${item.sectorColor} hover:-translate-y-1 transition-all duration-300`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {item.pending ? (
                /* Placeholder sobre */
                <div className="flex flex-col gap-3 opacity-40">
                  <div className="text-3xl opacity-30">"</div>
                  <div className="space-y-2">
                    <div className="h-3 bg-white/10 rounded w-full" />
                    <div className="h-3 bg-white/10 rounded w-4/5" />
                    <div className="h-3 bg-white/10 rounded w-3/5" />
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-9 h-9 rounded-lg bg-white/10" />
                    <div className="space-y-1.5">
                      <div className="h-2.5 bg-white/10 rounded w-24" />
                      <div className="h-2 bg-white/10 rounded w-32" />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="text-3xl gradient-text font-black mb-4 opacity-60">"</div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 italic">
                    {lang === 'fr' ? item.quoteFr : item.quoteEn}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${item.sectorColor}`}>
                      <span className="gradient-text font-black text-xs">
                        {(lang === 'fr' ? item.nameFr : item.nameEn).charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">
                        {lang === 'fr' ? item.nameFr : item.nameEn}
                      </div>
                      <div className="text-text-muted text-xs">
                        {lang === 'fr' ? item.roleFr : item.roleEn}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA pour ajouter un témoignage (visible seulement si pending) */}
        {testimonials.some(item => item.pending) && (
          <p className="text-center text-text-muted text-xs mt-8 italic">
            {t(
              'Témoignages en cours de collecte auprès des clients — à venir prochainement.',
              'Client testimonials being collected — coming soon.'
            )}
          </p>
        )}
      </div>
    </section>
  );
}
