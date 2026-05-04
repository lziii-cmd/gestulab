'use client';

import Link from 'next/link';
import { useLang } from '@/context/lang';
import SignatureCard from '@/components/shared/SignatureCard';

const skills = [
  { cat: 'Frontend',          tags: ['React', 'Vue.js', 'Angular', 'Flutter', 'HTML/CSS'] },
  { cat: 'Backend',           tags: ['Python', 'Django', 'Node.js', 'PHP', 'Java'] },
  { cat: 'Data',              tags: ['Talend', 'Web Scraping', 'Machine Learning', 'ETL'] },
  { cat: 'Design',            tags: ['Figma', 'Adobe XD', 'Photoshop'] },
  { cat: 'DevOps',            tags: ['Docker', 'Git', 'Vercel', 'Render'] },
  { cat: 'Bases de données',  tags: ['PostgreSQL', 'MySQL', 'MongoDB'] },
];

const whyWork = [
  {
    icon: '🎯',
    fr: 'Je comprends avant de coder',
    en: 'I understand before I code',
    descFr: "Je passe du temps à comprendre votre métier, vos contraintes et vos utilisateurs avant d'écrire la première ligne de code. Le résultat : des solutions qui collent vraiment à votre réalité.",
    descEn: "I spend time understanding your business, constraints and users before writing a single line of code. The result: solutions that truly fit your reality.",
  },
  {
    icon: '🔨',
    fr: 'Je livre, vraiment',
    en: 'I actually deliver',
    descFr: "8 projets livrés, zéro projet abandonné. Je m'engage sur des délais réalistes et je les tiens. Pas de promesses creuses.",
    descEn: '8 projects delivered, zero projects abandoned. I commit to realistic deadlines and I meet them. No empty promises.',
  },
  {
    icon: '🌍',
    fr: 'Ancré localement, ouvert mondialement',
    en: 'Locally rooted, globally open',
    descFr: "Je connais les réalités du terrain africain — les contraintes, les usages, les infrastructures. Et je parle couramment français et anglais pour travailler avec n'importe qui.",
    descEn: 'I know the African ground realities — constraints, usages, infrastructure. And I speak French and English fluently to work with anyone.',
  },
  {
    icon: '♾️',
    fr: 'Je pense long terme',
    en: 'I think long-term',
    descFr: "Je ne livre pas un projet pour le livrer. Je construis des solutions qui durent, qui s'adaptent et qui grandissent avec votre organisation.",
    descEn: "I don't deliver a project just to deliver it. I build solutions that last, adapt and grow with your organization.",
  },
];

const timeline = [
  { year: '2021', fr: "Premiers projets web — découverte du développement full-stack", en: 'First web projects — discovering full-stack development' },
  { year: '2022', fr: "Projets académiques et institutionnels — systèmes d'information complexes", en: 'Academic and institutional projects — complex information systems' },
  { year: '2023', fr: 'Élargissement vers la Data, l\'ERP et le Design UI/UX', en: 'Expansion into Data, ERP and UI/UX Design' },
  { year: '2024', fr: 'Projets dans la santé, le BTP et la finance — expertise sectorielle', en: 'Projects in healthcare, construction and finance — sector expertise' },
  { year: '2025', fr: 'Fondation de Gëstu Systems — structuration de l\'activité', en: 'Foundation of Gëstu Systems — structuring the activity' },
];

export default function FounderPage() {
  const { lang, t } = useLang();

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-dark grid-pattern pt-28 pb-20">
        <div className="hero-glow w-[500px] h-[500px] bg-indigo/15 top-0 right-[-100px]" />
        <div className="hero-glow w-[300px] h-[300px] bg-cyan/10 bottom-0 left-[-50px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_320px] gap-16 items-center w-full">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-text-muted text-sm hover:text-white transition-colors mb-10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              {t('Retour à Gëstu Systems', 'Back to Gëstu Systems')}
            </Link>

            <p className="text-indigo-light text-xs font-bold uppercase tracking-widest mb-4">
              {t('Le fondateur', 'The founder')}
            </p>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.05] tracking-tight text-white mb-3">
              El Hadji<br />Abdou Babou Ngom
            </h1>
            <p className="gradient-text text-xl font-bold mb-8">
              {t('Fondateur & Lead Developer — Gëstu Systems', 'Founder & Lead Developer — Gëstu Systems')}
            </p>
            <p className="text-text-secondary text-lg leading-relaxed max-w-xl mb-10">
              {t(
                "Développeur full-stack, designer UI/UX et expert en systèmes d'information. Je construis des solutions numériques qui transforment réellement les organisations — depuis Dakar, pour le monde.",
                "Full-stack developer, UI/UX designer and information systems expert. I build digital solutions that genuinely transform organizations — from Dakar, for the world."
              )}
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {['🇫🇷 Français', '🇬🇧 English', '🇸🇳 Wolof'].map(l => (
                <span key={l} className="text-xs font-medium bg-white/5 border border-white/10 text-text-secondary px-3 py-1.5 rounded-full">
                  {l}
                </span>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="mailto:ngomabdoubabou@outlook.fr" className="btn-gradient px-7 py-3.5 rounded-xl font-bold">
                <span>{t('Me contacter', 'Contact me')}</span>
              </a>
              <a
                href="https://linkedin.com/in/el-hadji-abdou-babou-ngom"
                target="_blank" rel="noopener"
                className="px-7 py-3.5 rounded-xl font-bold border border-white/10 text-white hover:bg-white/5 transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Signature card */}
          <div className="hidden md:flex justify-center">
            <SignatureCard />
          </div>
        </div>
      </section>

      {/* ── MOT DU FONDATEUR ── */}
      <section className="py-28 bg-dark-800">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-cyan text-xs font-bold uppercase tracking-widest mb-8 text-center">
            {t('Mot du Fondateur', "Founder's Word")}
          </p>
          <div className="glass gradient-border rounded-3xl p-10 md:p-14 relative">
            <div className="text-8xl gradient-text font-black leading-none mb-6 opacity-30 select-none absolute top-6 left-10">"</div>
            <blockquote className="relative z-10">
              <p className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-6">
                {t(
                  'Gëstu est un mot wolof. Il signifie explorer, chercher, investiguer.',
                  'Gëstu is a Wolof word. It means to explore, to search, to investigate.'
                )}
              </p>
              <p className="text-text-secondary text-base leading-relaxed mb-6">
                {t(
                  "J'ai choisi ce nom parce qu'il résume ma philosophie : avant de construire quoi que ce soit, il faut comprendre profondément. Un développeur qui code sans comprendre le métier de son client livre un logiciel — pas une solution.",
                  "I chose this name because it sums up my philosophy: before building anything, you must understand deeply. A developer who codes without understanding their client's business delivers software — not a solution."
                )}
              </p>
              <p className="text-text-secondary text-base leading-relaxed mb-6">
                {t(
                  "J'ai fondé Gëstu Systems avec une conviction : les organisations africaines méritent des solutions numériques de classe mondiale, pensées pour leur réalité. Pas des outils génériques importés. Des solutions ancrées dans nos contextes, nos contraintes, notre terrain.",
                  "I founded Gëstu Systems with one conviction: African organizations deserve world-class digital solutions built for their reality. Not generic imported tools. Solutions rooted in our contexts, our constraints, our ground."
                )}
              </p>
              <p className="text-text-secondary text-base leading-relaxed mb-10">
                {t(
                  "Aujourd'hui je travaille seul. C'est ma force : un seul interlocuteur, zéro bureaucratie, vous parlez directement à l'expert qui conçoit et livre votre solution. Je ne vous promets pas le prix le plus bas. Je vous promets de comprendre votre métier avant d'écrire la première ligne de code.",
                  "Today I work alone. That's my strength: one point of contact, zero bureaucracy, you speak directly to the expert who designs and delivers your solution. I don't promise the lowest price. I promise to understand your business before writing the first line of code."
                )}
              </p>
              {/* Signature */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo/40 to-cyan/30 border border-indigo/30 flex items-center justify-center">
                  <span className="gradient-text font-black text-base">EAB</span>
                </div>
                <div>
                  <div className="text-white font-bold">El Hadji Abdou Babou Ngom</div>
                  <div className="text-text-muted text-sm">{t('Fondateur, Gëstu Systems', 'Founder, Gëstu Systems')}</div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── PARCOURS ── */}
      <section className="py-28 bg-dark">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-indigo-light text-xs font-bold uppercase tracking-widest mb-4 text-center">
            {t('Mon parcours', 'My journey')}
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black text-white text-center mb-16">
            {t('5 ans de construction', '5 years of building')}
          </h2>
          <div className="relative">
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo/50 via-cyan/30 to-transparent" />
            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="glass rounded-xl p-5 inline-block hover:-translate-y-0.5 transition-all">
                      <p className="text-white text-sm leading-relaxed">{lang === 'fr' ? item.fr : item.en}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center md:w-0">
                    <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center font-black text-xs shrink-0 z-10">
                      <span>{item.year.slice(2)}</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:hidden pl-4">
                    <div className="text-cyan text-xs font-bold mb-1">{item.year}</div>
                    <p className="text-text-secondary text-sm">{lang === 'fr' ? item.fr : item.en}</p>
                  </div>
                  <div className={`hidden md:flex md:w-1/2 ${i % 2 === 0 ? 'pl-6' : 'pr-6 justify-end'} items-center`}>
                    <span className="gradient-text text-2xl font-black">{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="py-28 bg-dark-800">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-cyan text-xs font-bold uppercase tracking-widest mb-4 text-center">
            {t('Expertise technique', 'Technical expertise')}
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black text-white text-center mb-16">
            {t('Un stack', 'A stack')}{' '}
            <span className="gradient-text">{t('complet et maîtrisé', 'complete and mastered')}</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((g, i) => (
              <div key={i} className="glass gradient-border rounded-xl p-6">
                <h4 className="text-text-muted text-[0.7rem] font-bold uppercase tracking-widest mb-4">{g.cat}</h4>
                <div className="flex flex-wrap gap-2">
                  {g.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-semibold bg-white/5 border border-white/8 text-text-secondary hover:text-white hover:border-indigo/40 px-2.5 py-1.5 rounded-lg transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI TRAVAILLER AVEC MOI ── */}
      <section className="py-28 bg-dark dot-pattern">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-indigo-light text-xs font-bold uppercase tracking-widest mb-4 text-center">
            {t('La différence', 'The difference')}
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black text-white text-center mb-4">
            {t('Pourquoi travailler avec', 'Why work with')}{' '}
            <span className="gradient-text">{t('moi', 'me')} ?</span>
          </h2>
          <p className="text-text-secondary text-center max-w-xl mx-auto mb-16">
            {t('Pas une liste de fonctionnalités. Des engagements réels.', 'Not a feature list. Real commitments.')}
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {whyWork.map((w, i) => (
              <div key={i} className="glass gradient-border rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-5">{w.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{t(w.fr, w.en)}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{t(w.descFr, w.descEn)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-dark-800 relative overflow-hidden">
        <div className="hero-glow w-[500px] h-[300px] bg-indigo/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-white mb-6">
            {t('Travaillons', "Let's work")}{' '}
            <span className="gradient-text">{t('ensemble', 'together')}</span>
          </h2>
          <p className="text-text-secondary text-lg mb-10">
            {t(
              "Un projet en tête ? Parlons-en. Je vous réponds dans les 24 heures.",
              "A project in mind? Let's talk. I'll get back to you within 24 hours."
            )}
          </p>
          <a href="/#contact" className="btn-gradient px-10 py-4 rounded-xl font-bold text-lg inline-block">
            <span>{t('Démarrer une conversation', 'Start a conversation')}</span>
          </a>
        </div>
      </section>
    </>
  );
}
