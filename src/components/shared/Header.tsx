'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from '@/context/lang';

const navLinks = [
  { href: '/',           fr: 'Accueil',    en: 'Home' },
  { href: '/projets',    fr: 'Projets',    en: 'Projects' },
  { href: '/blog',       fr: 'Blog',       en: 'Blog' },
  { href: '/fondateur',  fr: 'Fondateur',  en: 'Founder' },
  { href: '/#contact',   fr: 'Contact',    en: 'Contact' },
];

export default function Header() {
  const { lang, toggle, t } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href.replace('/#', '/'));
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark/90 backdrop-blur-xl border-b border-white/5 shadow-[0_2px_30px_rgba(0,0,0,0.4)]' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-black tracking-tight text-white">
            Gëstu<span className="gradient-text">Systems</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive(l.href)
                    ? 'text-white bg-white/8'
                    : 'text-text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                {lang === 'fr' ? l.fr : l.en}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-[0.75rem] font-bold px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-text-secondary hover:text-white hover:border-white/20 transition-all tracking-widest"
          >
            {lang === 'fr' ? 'FR' : 'EN'}
          </button>
          <Link
            href="/#contact"
            className="hidden md:inline-flex btn-gradient px-5 py-2.5 rounded-lg text-sm"
          >
            <span>{t('Travaillons ensemble', "Let's work together")}</span>
          </Link>
          {/* Burger */}
          <button onClick={() => setMenuOpen(o => !o)} className="md:hidden flex flex-col gap-[5px] p-1" aria-label="Menu">
            <span className={`block w-5 h-0.5 bg-white rounded transition-all ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white rounded transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white rounded transition-all ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-800/98 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-1">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="text-text-secondary hover:text-white py-3 px-3 rounded-lg hover:bg-white/5 font-medium text-sm transition-colors">
              {lang === 'fr' ? l.fr : l.en}
            </Link>
          ))}
          <Link href="/#contact" className="mt-3 btn-gradient px-5 py-3 rounded-lg text-sm text-center">
            <span>{t('Travaillons ensemble', "Let's work together")}</span>
          </Link>
        </div>
      )}
    </header>
  );
}
