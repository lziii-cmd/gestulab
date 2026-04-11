'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'fr' | 'en';

interface LangContextType {
  lang: Lang;
  toggle: () => void;
  t: (fr: string, en: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: 'fr',
  toggle: () => {},
  t: (fr) => fr,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');

  function t(fr: string, en: string) {
    return lang === 'fr' ? fr : en;
  }

  return (
    <LangContext.Provider value={{ lang, toggle: () => setLang(l => l === 'fr' ? 'en' : 'fr'), t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
