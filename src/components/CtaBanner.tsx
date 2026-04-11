'use client';

import { useLang } from '@/context/lang';

export default function CtaBanner() {
  const { t } = useLang();

  function scrollTo(href: string) {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 72, behavior: 'smooth' });
  }

  return (
    <section className="bg-navy py-20 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-extrabold text-white mb-3">
          {t('Vous avez un projet en tête ?', 'Have a project in mind?')}
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
          {t(
            'Je suis disponible pour des missions freelance, des partenariats et des collaborations internationales.',
            "I'm available for freelance missions, partnerships and international collaborations."
          )}
        </p>
        <button
          onClick={() => scrollTo('#contact')}
          className="inline-flex items-center px-8 py-3.5 rounded-md bg-white text-navy font-bold text-base hover:bg-gray-100 hover:-translate-y-0.5 transition-all"
        >
          {t('Discutons de votre projet', "Let's discuss your project")}
        </button>
      </div>
    </section>
  );
}
