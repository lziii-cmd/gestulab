'use client';

import Link from 'next/link';
import { useLang } from '@/context/lang';
import type { BlogPost } from '@/lib/blog';

function formatDate(iso: string, lang: string) {
  return new Date(iso).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

/** Rendu minimal du contenu : double saut de ligne → paragraphe, **texte** → bold */
function renderContent(content: string) {
  return content.split('\n\n').map((block, i) => {
    if (block.startsWith('**') && block.endsWith('**')) {
      return (
        <h3 key={i} className="text-white font-black text-xl mt-10 mb-4">
          {block.replace(/\*\*/g, '')}
        </h3>
      );
    }
    /* Inline bold */
    const parts = block.split(/(\*\*.*?\*\*)/g);
    return (
      <p key={i} className="text-text-secondary leading-relaxed mb-0">
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**')
            ? <strong key={j} className="text-white font-bold">{part.replace(/\*\*/g, '')}</strong>
            : part
        )}
      </p>
    );
  });
}

export default function BlogPostDetail({ post }: { post: BlogPost }) {
  const { lang, t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className={`pt-32 pb-16 bg-dark grid-pattern relative overflow-hidden`}>
        <div className={`hero-glow w-[400px] h-[400px] bg-gradient-to-br ${post.coverGradient} opacity-30 top-0 right-0`} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-text-muted text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">{t('Accueil', 'Home')}</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-text-secondary truncate max-w-[200px]">
              {lang === 'fr' ? post.titleFr : post.titleEn}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map(tag => (
              <span key={tag} className="text-[0.65rem] font-bold uppercase tracking-wider text-cyan bg-cyan/10 border border-cyan/20 px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-white leading-tight mb-6">
            {lang === 'fr' ? post.titleFr : post.titleEn}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-text-muted text-sm border-t border-white/5 pt-5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo/40 to-cyan/30 border border-indigo/30 flex items-center justify-center">
                <span className="gradient-text font-black text-[10px]">EAB</span>
              </div>
              <span>El Hadji Abdou Babou Ngom</span>
            </div>
            <span>·</span>
            <span>{formatDate(post.date, lang)}</span>
            <span>·</span>
            <span>{post.readingMinutes} min {t('de lecture', 'read')}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-dark">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose-custom flex flex-col gap-5">
            {renderContent(lang === 'fr' ? post.contentFr : post.contentEn)}
          </div>

          {/* Footer article */}
          <div className="mt-16 pt-8 border-t border-white/5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-white font-bold mb-1">
                  {t('Un projet en lien avec cet article ?', 'A project related to this article?')}
                </p>
                <p className="text-text-muted text-sm">
                  {t("Discutons-en — je réponds dans les 24h.", "Let's talk — I reply within 24h.")}
                </p>
              </div>
              <Link href="/#contact" className="btn-gradient px-6 py-3 rounded-xl font-bold text-sm shrink-0">
                <span>{t('Démarrer un projet', 'Start a project')}</span>
              </Link>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              {t('Retour au blog', 'Back to blog')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
