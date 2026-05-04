'use client';

import { useLang } from '@/context/lang';

export default function Footer() {
  const { t } = useLang();

  function scrollTo(href: string) {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 72, behavior: 'smooth' });
  }

  const navLinks = [
    { href: '#accueil',  fr: 'Accueil',  en: 'Home' },
    { href: '#apropos',  fr: 'À Propos', en: 'About' },
    { href: '#services', fr: 'Services', en: 'Services' },
    { href: '#projets',  fr: 'Projets',  en: 'Projects' },
    { href: '#contact',  fr: 'Contact',  en: 'Contact' },
  ];

  return (
    <footer className="bg-gray-800 text-white/70 pt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[2fr_1fr_1fr] gap-10 pb-12 border-b border-white/10">
        {/* Brand */}
        <div>
          <button onClick={() => scrollTo('#accueil')} className="text-[1.3rem] font-extrabold text-white tracking-tight mb-3 block">
            Gëstu <span className="text-blue-light">Lab</span>
          </button>
          <p className="text-sm italic opacity-70 mb-1">{t('Explorer. Construire. Durer.', 'Explore. Build. Last.')}</p>
          <p className="text-sm opacity-50">{t('Dakar, Sénégal', 'Dakar, Senegal')}</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">{t('Navigation', 'Navigation')}</h4>
          <ul className="flex flex-col gap-2">
            {navLinks.map(l => (
              <li key={l.href}>
                <button
                  onClick={() => scrollTo(l.href)}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {t(l.fr, l.en)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Contact</h4>
          <p className="text-sm mb-2">
            <a href="mailto:ngomabdoubabou@outlook.fr" className="opacity-70 hover:opacity-100 transition-opacity hover:text-accent">
              ngomabdoubabou@outlook.fr
            </a>
          </p>
          <p className="text-sm">
            <a href="https://linkedin.com/in/el-hadji-abdou-babou-ngom" target="_blank" rel="noopener" className="opacity-70 hover:opacity-100 transition-opacity hover:text-accent">
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-5 text-center">
        <p className="text-xs opacity-45">
          Gëstu Systems © 2025 — EL HADJI ABDOU BABOU NGOM.{' '}
          {t('Tous droits réservés.', 'All rights reserved.')}
        </p>
      </div>
    </footer>
  );
}
