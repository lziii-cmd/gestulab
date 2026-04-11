'use client';

import Link from 'next/link';
import { useLang } from '@/context/lang';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-white/5 bg-dark-800 mt-0">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-[2fr_1fr_1fr] gap-10">
        <div>
          <Link href="/" className="text-xl font-black tracking-tight text-white block mb-4">
            Gëstu<span className="gradient-text">Lab</span>
          </Link>
          <p className="text-text-secondary text-sm italic mb-2">{t('Explorer. Construire. Durer.', 'Explore. Build. Last.')}</p>
          <p className="text-text-muted text-sm">{t('Dakar, Sénégal — Disponible à l\'international', 'Dakar, Senegal — Available worldwide')}</p>
        </div>
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">{t('Navigation', 'Navigation')}</h4>
          <ul className="flex flex-col gap-3">
            {[
              { href: '/',          fr: 'Accueil',   en: 'Home' },
              { href: '/projets',   fr: 'Projets',   en: 'Projects' },
              { href: '/fondateur', fr: 'Fondateur', en: 'Founder' },
              { href: '/#contact',  fr: 'Contact',   en: 'Contact' },
            ].map(l => (
              <li key={l.href}>
                <Link href={l.href} className="text-text-secondary hover:text-white text-sm transition-colors">
                  {t(l.fr, l.en)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Contact</h4>
          <p className="mb-3">
            <a href="mailto:ngomabdoubabou@outlook.fr" className="text-text-secondary hover:text-cyan text-sm transition-colors">
              ngomabdoubabou@outlook.fr
            </a>
          </p>
          <a href="https://linkedin.com/in/el-hadji-abdou-babou-ngom" target="_blank" rel="noopener" className="text-text-secondary hover:text-cyan text-sm transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center">
        <p className="text-text-muted text-xs">
          Gëstu Lab © 2025 — {t('Tous droits réservés.', 'All rights reserved.')}
        </p>
      </div>
    </footer>
  );
}
