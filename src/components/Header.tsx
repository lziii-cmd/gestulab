'use client';

import { useState, useEffect } from 'react';
import { useLang } from '@/context/lang';

const links = [
  { href: '#accueil', fr: 'Accueil',  en: 'Home' },
  { href: '#apropos', fr: 'À Propos', en: 'About' },
  { href: '#services', fr: 'Services', en: 'Services' },
  { href: '#projets',  fr: 'Projets',  en: 'Projects' },
  { href: '#contact',  fr: 'Contact',  en: 'Contact' },
];

export default function Header() {
  const { lang, toggle, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);

      const sections = ['accueil', 'apropos', 'services', 'projets', 'contact'];
      const scrollY = window.scrollY + 120;
      let current = 'accueil';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      });
      setActiveSection(current);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTo(href: string) {
    const target = document.querySelector(href);
    if (!target) return;
    window.scrollTo({ top: (target as HTMLElement).offsetTop - 72, behavior: 'smooth' });
    setMenuOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.2)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[72px] gap-4">
        {/* Logo */}
        <button onClick={() => scrollTo('#accueil')} className="text-[1.4rem] font-extrabold text-white tracking-tight">
          Gëstu <span className="text-blue-light">Lab</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-1">
          {links.map(l => (
            <li key={l.href}>
              <button
                onClick={() => scrollTo(l.href)}
                className={`text-[0.92rem] font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                  activeSection === l.href.replace('#', '')
                    ? 'text-white bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {lang === 'fr' ? l.fr : l.en}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-[0.8rem] font-semibold px-3 py-1.5 rounded-full border border-white/25 bg-white/10 text-white hover:bg-white/20 transition-all tracking-wide"
          >
            {lang === 'fr' ? 'FR | EN' : 'EN | FR'}
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden md:inline-flex items-center px-4 py-2 rounded-md bg-accent text-white text-[0.88rem] font-semibold hover:bg-accent-dark transition-colors"
          >
            {t('Discutons', "Let's Talk")}
          </button>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col gap-[5px] p-1"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-dark/98 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left text-white/85 hover:text-white py-2.5 px-3 rounded-md hover:bg-white/10 font-medium transition-colors"
            >
              {lang === 'fr' ? l.fr : l.en}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="mt-2 w-full px-4 py-2.5 rounded-md bg-accent text-white font-semibold hover:bg-accent-dark transition-colors"
          >
            {t('Discutons', "Let's Talk")}
          </button>
        </div>
      )}
    </header>
  );
}
