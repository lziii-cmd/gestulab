export type ProjectStatus = 'delivered' | 'prototype' | 'in_progress';

export interface Project {
  slug: string;
  label: string;
  mockup: string | null;
  gradient: string;
  status: ProjectStatus;
  year: string;
  cats: string[];
  sectorFr: string; sectorEn: string;
  titleFr: string;  titleEn: string;
  descFr: string;   descEn: string;
  tags: string[];
  /* Détail page */
  contextFr: string;   contextEn: string;
  solutionFr: string;  solutionEn: string;
  resultsFr: string[]; resultsEn: string[];
}

export const allProjects: Project[] = [
  {
    slug: 'btp-lamane',
    label: 'BTP', mockup: null,
    gradient: 'from-orange-500/30 to-red-600/20',
    status: 'delivered', year: '2024',
    cats: ['web', 'erp'],
    sectorFr: 'Construction / BTP',      sectorEn: 'Construction / BTP',
    titleFr: 'Digitalisation BTP — Lamane', titleEn: 'BTP Digitalization — Lamane',
    descFr: 'Écosystème numérique complet pour une entreprise de construction : site vitrine, gestion interne (projets, ressources, finances) et application client.',
    descEn: 'Complete digital ecosystem for a construction company: showcase site, internal management and client application.',
    tags: ['Django', 'React', 'Node.js', 'SQL'],
    contextFr: "Lamane est une entreprise de construction basée à Dakar, confrontée à une gestion 100% manuelle : contrats papier, suivi des chantiers sur Excel, communication client par SMS. L'objectif était de digitaliser l'ensemble du processus, de l'acquisition client à la clôture des chantiers.",
    contextEn: 'Lamane is a Dakar-based construction company facing fully manual operations: paper contracts, Excel site tracking, SMS client communication. The goal was to digitalize the entire process, from client acquisition to project closeout.',
    solutionFr: "Conception et déploiement d'un écosystème en 3 couches : (1) un site vitrine qui présente les réalisations et capte les prospects, (2) une application de gestion interne couvrant les projets, ressources humaines et budget, (3) un espace client permettant de suivre l'avancement des travaux en temps réel.",
    solutionEn: 'Design and deployment of a 3-layer ecosystem: (1) a showcase site presenting achievements and capturing prospects, (2) an internal management app covering projects, HR and budget, (3) a client portal enabling real-time project tracking.',
    resultsFr: [
      'Zéro document papier pour la gestion des chantiers actifs',
      'Temps de reporting divisé par 4 pour la direction',
      'Accès client en temps réel — zéro appel de statut',
    ],
    resultsEn: [
      'Zero paper documents for active site management',
      'Reporting time divided by 4 for management',
      'Real-time client access — zero status calls',
    ],
  },
  {
    slug: 'ensmg',
    label: 'ENSMG', mockup: null,
    gradient: 'from-indigo/30 to-cyan/20',
    status: 'delivered', year: '2023',
    cats: ['web', 'erp'],
    sectorFr: 'Éducation / Académique',  sectorEn: 'Education / Academic',
    titleFr: "Système d'Information Académique — ENSMG", titleEn: 'Academic Information System — ENSMG',
    descFr: "Système de gestion académique : bibliothèque, emprunts, réservations, mémoires et intégration SIGB.",
    descEn: 'Academic management system: library, borrowings, reservations, theses and SIGB integration.',
    tags: ['Python', 'Django', 'SQL'],
    contextFr: "L'École Nationale Supérieure de Management et de Gestion gérait sa bibliothèque et ses ressources académiques sur des registres papier. Le défi : numériser le catalogue, les emprunts et les mémoires de fin d'études tout en s'intégrant au Système Intégré de Gestion de Bibliothèques existant.",
    contextEn: 'The ENSMG managed its library and academic resources on paper registers. The challenge: digitize the catalog, borrowings and dissertations while integrating with the existing Integrated Library Management System.',
    solutionFr: "Développement d'un système d'information complet avec : gestion du catalogue (livres, revues, mémoires), circuit d'emprunt et de réservation, espace étudiant pour les mémoires, tableau de bord admin et connecteur SIGB.",
    solutionEn: 'Development of a complete information system including: catalog management (books, journals, dissertations), borrowing and reservation workflow, student portal for dissertations, admin dashboard and SIGB connector.',
    resultsFr: [
      '100% du catalogue numérisé en moins de 3 mois',
      'Zéro perte de document depuis le déploiement',
      'Recherche en moins de 5 secondes contre 15 minutes en manuel',
    ],
    resultsEn: [
      '100% of catalog digitized in under 3 months',
      'Zero document loss since deployment',
      'Search in under 5 seconds vs 15 minutes manually',
    ],
  },
  {
    slug: 'gestion-scolaire',
    label: 'EDU', mockup: null,
    gradient: 'from-violet-500/30 to-purple-600/20',
    status: 'delivered', year: '2023',
    cats: ['web', 'erp'],
    sectorFr: 'Éducation',               sectorEn: 'Education',
    titleFr: 'Gestion Scolaire Multi-Établissement', titleEn: 'Multi-School Management',
    descFr: 'Plateforme multi-tenant pour gérer plusieurs établissements : élèves, notes, emplois du temps et reporting agrégé.',
    descEn: 'Multi-tenant platform to manage multiple schools: students, grades, schedules and aggregated reporting.',
    tags: ['Python', 'React', 'SQL'],
    contextFr: "Un groupe scolaire privé gérant 3 établissements avait besoin d'une solution unifiée pour centraliser la gestion des élèves, des notes et des emplois du temps, tout en gardant une séparation des données entre établissements.",
    contextEn: 'A private school group managing 3 institutions needed a unified solution to centralize student management, grades and schedules while maintaining data separation between schools.',
    solutionFr: "Architecture multi-tenant avec un espace admin central et des espaces établissement isolés. Chaque établissement gère ses élèves, ses classes et ses enseignants. La direction accède à des tableaux de bord agrégés cross-établissements.",
    solutionEn: 'Multi-tenant architecture with a central admin space and isolated school spaces. Each school manages its own students, classes and teachers. Management accesses aggregated cross-school dashboards.',
    resultsFr: [
      '3 établissements sur une seule plateforme, données isolées',
      'Bulletins générés automatiquement en fin de trimestre',
      'Réduction de 80% du temps de saisie des notes',
    ],
    resultsEn: [
      '3 schools on a single platform, isolated data',
      'Report cards generated automatically at end of term',
      '80% reduction in grade entry time',
    ],
  },
  {
    slug: 'cabinet-medical',
    label: 'MED', mockup: '/mockups/med.html',
    gradient: 'from-emerald-500/30 to-teal-500/20',
    status: 'delivered', year: '2024',
    cats: ['web'],
    sectorFr: 'Santé',                   sectorEn: 'Healthcare',
    titleFr: 'Cabinet Médical Ophtalmologique', titleEn: 'Ophthalmology Practice',
    descFr: 'Dossiers patients, rendez-vous, consultations, ordonnances — zéro papier pour le cabinet.',
    descEn: 'Patient records, appointments, consultations, prescriptions — paperless practice.',
    tags: ['Django', 'Flutter', 'SQL'],
    contextFr: "Un cabinet ophtalmologique de Dakar traitait 30 à 50 patients par jour avec des dossiers papier. Les pertes de dossiers, les doublons et le temps perdu en recherche freinaient la croissance du cabinet et dégradaient l'expérience patient.",
    contextEn: 'A Dakar ophthalmology practice treating 30-50 patients daily used paper records. Lost files, duplicates and search time were holding back practice growth and degrading the patient experience.',
    solutionFr: "Application full-stack avec dossier patient numérique (historique, antécédents, ordonnances), agenda de rendez-vous en temps réel, module de consultation et génération d'ordonnances numériques. Application mobile Flutter pour le médecin en déplacement.",
    solutionEn: 'Full-stack application with digital patient records (history, background, prescriptions), real-time appointment scheduling, consultation module and digital prescription generation. Flutter mobile app for the physician on the go.',
    resultsFr: [
      'Zéro dossier papier depuis le jour de déploiement',
      'Temps de consultation réduit de 15 à 9 minutes en moyenne',
      '30+ patients gérés par jour sans surcharge administrative',
    ],
    resultsEn: [
      'Zero paper records from deployment day',
      'Consultation time reduced from 15 to 9 minutes on average',
      '30+ patients managed daily without administrative overload',
    ],
  },
  {
    slug: 'comptabilite-matieres',
    label: 'FIN', mockup: '/mockups/fin.html',
    gradient: 'from-yellow-500/25 to-orange-500/15',
    status: 'delivered', year: '2023',
    cats: ['erp'],
    sectorFr: 'Finance / Gestion',       sectorEn: 'Finance / Management',
    titleFr: 'Comptabilité des Matières', titleEn: 'Materials Accounting',
    descFr: 'Suivi rigoureux des matières premières, stocks et mouvements comptables avec audit trail complet.',
    descEn: 'Rigorous tracking of raw materials, stocks and accounting movements with full audit trail.',
    tags: ['Python', 'Django', 'SQL'],
    contextFr: "Une entreprise industrielle n'avait aucune traçabilité sur ses matières premières : pertes inexpliquées, écarts de stock, impossibilité de justifier les consommations auprès des auditeurs. Le problème coûtait des millions de FCFA par an.",
    contextEn: "An industrial company had no traceability on its raw materials: unexplained losses, stock discrepancies, inability to justify consumption to auditors. The problem was costing millions of FCFA per year.",
    solutionFr: "Système de comptabilité des matières avec : entrées/sorties tracées, affectation par chantier ou département, rapprochement automatique des stocks physiques et comptables, audit trail immuable et rapports d'écart périodiques.",
    solutionEn: 'Materials accounting system with: tracked entries/exits, allocation by site or department, automatic reconciliation of physical and accounting stocks, immutable audit trail and periodic variance reports.',
    resultsFr: [
      'Écarts de stock réduits de 94% en 6 mois',
      'Audit externe validé du premier coup après déploiement',
      'Économie estimée à 8M FCFA/an sur les pertes non tracées',
    ],
    resultsEn: [
      'Stock discrepancies reduced by 94% in 6 months',
      'External audit passed first time after deployment',
      'Estimated savings of 8M FCFA/year on untracked losses',
    ],
  },
  {
    slug: 'archivage',
    label: 'DOC', mockup: null,
    gradient: 'from-sky-500/25 to-blue-500/15',
    status: 'delivered', year: '2023',
    cats: ['web'],
    sectorFr: 'Gestion documentaire',    sectorEn: 'Document management',
    titleFr: "Application d'Archivage",  titleEn: 'Document Archiving App',
    descFr: 'Gestion et archivage numérique de documents : indexation intelligente, recherche avancée et accès sécurisé.',
    descEn: 'Digital document management: smart indexing, advanced search and secure access.',
    tags: ['Python', 'React', 'SQL'],
    contextFr: "Une institution publique gérait des milliers de documents administratifs dans des archives physiques. La recherche d'un document prenait en moyenne 45 minutes. Les risques de perte et de dégradation étaient élevés.",
    contextEn: 'A public institution managed thousands of administrative documents in physical archives. Finding a document took an average of 45 minutes. The risk of loss and degradation was high.',
    solutionFr: "Plateforme d'archivage numérique avec indexation multi-critères (date, type, auteur, mots-clés), recherche full-text, versioning des documents, gestion des accès par rôle et export de rapports d'inventaire.",
    solutionEn: 'Digital archiving platform with multi-criteria indexing (date, type, author, keywords), full-text search, document versioning, role-based access management and inventory report export.',
    resultsFr: [
      'Recherche de document : de 45 minutes à moins de 30 secondes',
      '100% des documents numérisés et indexés',
      'Accès sécurisé par profil — zéro fuite documentaire',
    ],
    resultsEn: [
      'Document search: from 45 minutes to under 30 seconds',
      '100% of documents digitized and indexed',
      'Profile-based secure access — zero document leakage',
    ],
  },
  {
    slug: 'pwa-boite-idees',
    label: 'PWA', mockup: null,
    gradient: 'from-pink-500/25 to-rose-500/15',
    status: 'delivered', year: '2024',
    cats: ['web'],
    sectorFr: 'Innovation / RH',         sectorEn: 'Innovation / HR',
    titleFr: 'PWA Boîte à Idées',        titleEn: 'Ideas Box PWA',
    descFr: "App collaborative : soumettre, voter et suivre des idées d'innovation sur tous supports, sans installation.",
    descEn: 'Collaborative app: submit, vote and track innovation ideas on any device, no install needed.',
    tags: ['JavaScript', 'Node.js', 'PWA'],
    contextFr: "Une entreprise cherchait à impliquer ses équipes dans l'innovation interne. Les suggestions tombaient dans des boîtes mail perdues. L'objectif : créer un canal structuré, transparent et engageant pour les idées du terrain.",
    contextEn: "A company wanted to involve its teams in internal innovation. Suggestions were lost in email inboxes. The goal: create a structured, transparent and engaging channel for ground-level ideas.",
    solutionFr: "PWA (Progressive Web App) installable sur mobile et desktop sans passer par un app store. Fonctionnalités : soumission d'idée, vote collaboratif, statuts de suivi (soumis / en étude / adopté / rejeté), tableau de bord admin et notifications push.",
    solutionEn: 'PWA (Progressive Web App) installable on mobile and desktop without an app store. Features: idea submission, collaborative voting, tracking statuses (submitted / under review / adopted / rejected), admin dashboard and push notifications.',
    resultsFr: [
      '120+ idées soumises dans les 30 premiers jours',
      'Taux de participation de 78% des collaborateurs',
      '3 idées adoptées et déployées en production',
    ],
    resultsEn: [
      '120+ ideas submitted in the first 30 days',
      '78% employee participation rate',
      '3 ideas adopted and deployed to production',
    ],
  },
  {
    slug: 'data-pipeline',
    label: 'DATA', mockup: null,
    gradient: 'from-cyan/25 to-teal-500/15',
    status: 'delivered', year: '2024',
    cats: ['data'],
    sectorFr: 'Data / Tech',             sectorEn: 'Data / Tech',
    titleFr: 'Data Pipeline & Web Scraping', titleEn: 'Data Pipeline & Web Scraping',
    descFr: 'Pipelines ETL complets avec Talend et collecte automatisée de données à grande échelle depuis le web.',
    descEn: 'Complete ETL pipelines with Talend and automated large-scale data collection from the web.',
    tags: ['Talend', 'Python', 'SQL'],
    contextFr: "Un client dans le secteur de la veille concurrentielle avait besoin d'agréger des données depuis plus de 50 sources web différentes, les nettoyer, les transformer et les charger dans un entrepôt de données pour alimentation de tableaux de bord.",
    contextEn: 'A competitive intelligence client needed to aggregate data from 50+ different web sources, clean, transform and load it into a data warehouse to feed dashboards.',
    solutionFr: "Architecture ETL complète : scrapers Python robustes avec gestion des rotations de proxy et des anti-bots, jobs Talend pour la transformation et la validation des données, chargement dans PostgreSQL et visualisation Metabase.",
    solutionEn: 'Complete ETL architecture: robust Python scrapers with proxy rotation and anti-bot handling, Talend jobs for data transformation and validation, PostgreSQL loading and Metabase visualization.',
    resultsFr: [
      '50+ sources agrégées quotidiennement en moins de 2 heures',
      'Taux de données exploitables : 96% (vs ~40% en manuel)',
      'Pipeline stable depuis 10+ mois sans intervention manuelle',
    ],
    resultsEn: [
      '50+ sources aggregated daily in under 2 hours',
      'Usable data rate: 96% (vs ~40% manually)',
      'Pipeline stable for 10+ months without manual intervention',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find(p => p.slug === slug);
}
