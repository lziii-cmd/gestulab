export interface BlogPost {
  slug: string;
  titleFr: string;       titleEn: string;
  excerptFr: string;     excerptEn: string;
  contentFr: string;     contentEn: string;
  date: string;          /* ISO date string */
  readingMinutes: number;
  tags: string[];
  coverGradient: string; /* Tailwind gradient classes */
}

/**
 * Ajoute tes articles ici.
 * Le contenu est en Markdown simplifié — les sauts de ligne doubles
 * seront rendus comme des paragraphes dans BlogPostDetail.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: 'digitaliser-entreprise-btp-senegal',
    titleFr: 'Comment digitaliser la gestion de chantier BTP au Sénégal',
    titleEn: 'How to digitalize construction site management in Senegal',
    excerptFr: "Le BTP sénégalais gère encore ses chantiers à la main. Voici comment passer au numérique sans tout casser — retour d'expérience terrain.",
    excerptEn: 'Senegalese construction still manages sites by hand. Here is how to go digital without breaking everything — field experience report.',
    date: '2025-04-15',
    readingMinutes: 6,
    tags: ['BTP', 'Digitalisation', 'Sénégal'],
    coverGradient: 'from-orange-500/30 to-red-600/20',
    contentFr: `La digitalisation du BTP au Sénégal est encore un chantier en lui-même. Pourtant, les outils existent, les bénéfices sont mesurables et les coûts ont drastiquement baissé.

**Le problème réel**

Dans la majorité des PME de construction sénégalaises, la gestion se fait encore sur papier ou au mieux sur Excel. Les conséquences sont concrètes : pertes de documents, impossibilité de suivre l'avancement en temps réel, communication client par téléphone, reporting manuel en fin de chantier.

**Ce qui bloque vraiment**

Ce n'est pas le manque d'outils — il en existe des dizaines. C'est le manque d'outils *adaptés*. La plupart des ERP du marché sont conçus pour des entreprises françaises ou américaines. Ils ignorent les réalités locales : paiements en espèces, instabilité électrique, connectivité variable.

**L'approche que je recommande**

Commencer petit. Pas par un ERP complet, mais par un seul processus : le suivi de chantier. Un tableau de bord simple qui centralise : avancement par lot, présence ouvriers, matériaux reçus vs commandés. Ce premier outil crée l'habitude numérique dans l'équipe.

Ensuite seulement, on ajoute : gestion des contrats, facturation, espace client.

**Ce que ça change concrètement**

Pour un client BTP que j'ai accompagné à Dakar, le passage au numérique a réduit le temps de reporting hebdomadaire de 4 heures à 45 minutes. Les clients reçoivent un rapport automatique chaque vendredi. Résultat : zéro appel de suivi.`,
    contentEn: `Digitalizing construction in Senegal is still a project in itself. Yet the tools exist, the benefits are measurable and costs have dropped dramatically.

**The real problem**

Most Senegalese construction SMEs still manage operations on paper or at best Excel. The consequences are concrete: lost documents, inability to track progress in real time, phone-based client communication, manual end-of-project reporting.

**What actually blocks progress**

It's not the lack of tools — dozens exist. It's the lack of *adapted* tools. Most market ERPs are designed for French or American companies. They ignore local realities: cash payments, power instability, variable connectivity.

**The approach I recommend**

Start small. Not with a full ERP, but with a single process: site tracking. A simple dashboard centralizing: progress by lot, worker attendance, materials received vs ordered. This first tool builds the digital habit in the team.

Only then add: contract management, invoicing, client portal.

**The concrete difference**

For a BTP client I worked with in Dakar, going digital reduced weekly reporting time from 4 hours to 45 minutes. Clients receive an automatic report every Friday. Result: zero follow-up calls.`,
  },
  {
    slug: 'erp-ou-logiciel-sur-mesure',
    titleFr: 'ERP ou logiciel sur mesure : que choisir pour votre PME africaine ?',
    titleEn: 'ERP or custom software: what to choose for your African SME?',
    excerptFr: 'La question revient dans chaque projet. La réponse honnête n\'est pas celle que vous attendez peut-être.',
    excerptEn: 'The question comes up in every project. The honest answer may not be what you expect.',
    date: '2025-03-20',
    readingMinutes: 5,
    tags: ['ERP', 'Stratégie', 'PME'],
    coverGradient: 'from-indigo/30 to-cyan/20',
    contentFr: `"Est-ce qu'on prend Odoo ou vous développez quelque chose ?" C'est la question qu'on me pose dans 9 projets sur 10. Ma réponse est toujours la même : ça dépend. Voici de quoi.

**Quand choisir un ERP du marché**

Un ERP comme Odoo, SAP Business One ou Microsoft Dynamics est pertinent quand : vos processus sont standards (comptabilité générale, gestion de stock classique, paie), vous avez une équipe IT capable de le maintenir, votre budget inclut les licences ET la formation, et vous êtes prêt à adapter vos processus à l'outil plutôt que l'inverse.

**Quand choisir le sur mesure**

Le sur mesure est pertinent quand : votre métier a des spécificités fortes que les ERPs du marché ne couvrent pas, vous voulez un outil simple et rapide que vos équipes adoptent sans résistance, vous avez un budget maîtrisé et un interlocuteur technique de confiance.

**Le piège classique**

Prendre un ERP complet pour n'utiliser que 15% de ses fonctionnalités. J'ai vu cette situation chez trois clients différents. Résultat : des licences payées pour des modules jamais utilisés, une interface complexe que les équipes contournent en revenant à Excel.

**Ma recommandation honnête**

Pour une PME africaine en croissance : commencez par identifier votre processus le plus douloureux. Résolvez-le d'abord, en sur mesure si nécessaire. Ajoutez ensuite, progressivement. L'ERP complet viendra quand l'organisation sera prête à l'absorber.`,
    contentEn: `"Should we take Odoo or do you build something?" This is the question I get in 9 out of 10 projects. My answer is always the same: it depends. Here's on what.

**When to choose a market ERP**

An ERP like Odoo, SAP Business One or Microsoft Dynamics makes sense when: your processes are standard (general accounting, classic inventory, payroll), you have an IT team capable of maintaining it, your budget includes licenses AND training, and you're ready to adapt your processes to the tool rather than the other way around.

**When to choose custom software**

Custom development makes sense when: your business has strong specificities that market ERPs don't cover, you want a simple and fast tool your teams adopt without resistance, you have a controlled budget and a trusted technical contact.

**The classic trap**

Buying a complete ERP to use only 15% of its features. I've seen this situation at three different clients. Result: licenses paid for modules never used, a complex interface that teams bypass by going back to Excel.

**My honest recommendation**

For a growing African SME: start by identifying your most painful process. Solve it first, with custom development if necessary. Then add, progressively. The full ERP will come when the organization is ready to absorb it.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
