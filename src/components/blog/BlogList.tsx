'use client';

import Link from 'next/link';
import { useLang } from '@/context/lang';
import { blogPosts } from '@/lib/blog';

function formatDate(iso: string, lang: string) {
  return new Date(iso).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

export default function BlogList() {
  const { lang, t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-dark grid-pattern relative overflow-hidden">
        <div className="hero-glow w-[400px] h-[400px] bg-indigo/10 top-0 left-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="text-indigo-light text-xs font-bold uppercase tracking-widest mb-4">
            {t('Réflexions & Retours terrain', 'Thoughts & Field experience')}
          </p>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-white leading-tight mb-6">
            Blog <span className="gradient-text">Gëstu Systems</span>
          </h1>
          <p className="text-text-secondary text-xl max-w-xl leading-relaxed">
            {t(
              "Numérique, systèmes d'information et transformation des entreprises africaines — sans jargon inutile.",
              'Digital, information systems and transformation of African businesses — without unnecessary jargon.'
            )}
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-6">
          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg">
                {t('Premier article en cours de rédaction...', 'First article being written...')}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {blogPosts.map((post, i) => (
                <Link
                  key={i}
                  href={`/blog/${post.slug}`}
                  className="group glass gradient-border rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 block"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-[0.65rem] font-bold uppercase tracking-wider text-cyan bg-cyan/10 border border-cyan/20 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto text-text-muted text-xs font-mono">
                      {post.readingMinutes} min
                    </span>
                  </div>

                  <h2 className="text-white font-black text-xl mb-3 group-hover:text-indigo-light transition-colors leading-tight">
                    {lang === 'fr' ? post.titleFr : post.titleEn}
                  </h2>

                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {lang === 'fr' ? post.excerptFr : post.excerptEn}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-text-muted text-xs">
                      {formatDate(post.date, lang)}
                    </span>
                    <span className="text-indigo-light text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      {t('Lire l\'article', 'Read article')}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
