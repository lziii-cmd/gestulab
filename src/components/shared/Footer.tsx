'use client';

import Link from 'next/link';
import { useLang } from '@/context/lang';

const year = new Date().getFullYear();

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-white/5 bg-dark-800">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">

        {/* Brand */}
        <div>
          <Link href="/" className="inline-block mb-5">
            <span className="text-2xl font-black tracking-tight text-white">
              Gëstu<span className="gradient-text">Systems</span>
            </span>
          </Link>
          <p className="text-text-secondary text-sm italic mb-2 leading-relaxed">
            {t('Explorer. Construire. Durer.', 'Explore. Build. Last.')}
          </p>
          <p className="text-text-muted text-sm mb-6">
            {t('Dakar, Sénégal — Disponible à l\'international', 'Dakar, Senegal — Available worldwide')}
          </p>
          {/* Social icons */}
          <div className="flex gap-3">
            <a
              href="https://linkedin.com/in/el-hadji-abdou-babou-ngom"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-text-muted hover:text-cyan hover:border-cyan/30 transition-all"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="https://github.com/gestulab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-text-muted hover:text-white hover:border-white/20 transition-all"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
              </svg>
            </a>
            <a
              href="mailto:ngomabdoubabou@outlook.fr"
              aria-label="Email"
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-text-muted hover:text-indigo-light hover:border-indigo/30 transition-all"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">
            {t('Navigation', 'Navigation')}
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { href: '/',           fr: 'Accueil',       en: 'Home' },
              { href: '/projets',    fr: 'Projets',       en: 'Projects' },
              { href: '/blog',       fr: 'Blog',          en: 'Blog' },
              { href: '/fondateur',  fr: 'Fondateur',     en: 'Founder' },
              { href: '/manifeste',  fr: 'Manifeste',     en: 'Manifesto' },
              { href: '/#contact',   fr: 'Contact',       en: 'Contact' },
            ].map(l => (
              <li key={l.href}>
                <Link href={l.href} className="text-text-secondary hover:text-white text-sm transition-colors">
                  {t(l.fr, l.en)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">
            {t('Services', 'Services')}
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { fr: 'Dev Web & Mobile', en: 'Web & Mobile Dev' },
              { fr: 'Design UI/UX',     en: 'UI/UX Design' },
              { fr: 'Data & IA',        en: 'Data & AI' },
              { fr: 'ERP & Digitalisation', en: 'ERP & Digitalization' },
              { fr: 'Cybersécurité',    en: 'Cybersecurity' },
            ].map((s, i) => (
              <li key={i}>
                <Link
                  href="/#contact"
                  className="text-text-secondary hover:text-white text-sm transition-colors"
                >
                  {t(s.fr, s.en)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Contact</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2.5">
              <svg width="14" height="14" className="mt-0.5 shrink-0 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:ngomabdoubabou@outlook.fr" className="text-text-secondary hover:text-cyan text-sm transition-colors break-all">
                ngomabdoubabou@outlook.fr
              </a>
            </div>
            <div className="flex items-start gap-2.5">
              <svg width="14" height="14" className="mt-0.5 shrink-0 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="text-text-secondary text-sm">Dakar, Sénégal</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="avail-dot" />
              <span className="text-emerald-400/80 text-xs font-medium">
                {t('Disponible', 'Available')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            Gëstu Systems © {year} — {t('Tous droits réservés', 'All rights reserved')}
          </p>
          <p className="text-text-muted text-xs flex items-center gap-1.5">
            {t('Construit avec', 'Built with')}
            {' '}Next.js · Tailwind · TypeScript · Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
