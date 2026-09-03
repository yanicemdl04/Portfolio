export type ProjectPreviewVariant = 'rawbank' | 'bueri' | 'canalbox';

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'fullstack' | 'frontend';
  link: string;
  preview: ProjectPreviewVariant;
}

export const projects: Project[] = [
  {
    slug: 'rawbank-hackathon',
    title: 'Rawbank — Banque digitale',
    tagline: 'Concept de banque en ligne',
    description:
      "Interface conçue lors d'un hackathon organisé par Rawbank : tableau de bord bancaire, transferts instantanés et conseiller financier propulsé par l'IA.",
    longDescription:
      "Projet réalisé dans le cadre d'un hackathon Rawbank : une expérience de banque digitale pensée pour le marché congolais, avec un tableau de bord de compte, un suivi d'objectifs d'épargne, des transferts instantanés et une mise en avant de la sécurité des transactions.",
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'fullstack',
    link: 'https://hackathon-app-rawbank.vercel.app/',
    preview: 'rawbank',
  },
  {
    slug: 'bueri-angeli-sis',
    title: 'Bueri Angeli — SIS',
    tagline: "Système d'information scolaire",
    description:
      "Plateforme de gestion académique premium : suivi des élèves, notes pondérées, communication école-parents et score de risque de décrochage assisté par l'IA.",
    longDescription:
      "Système d'information scolaire complet destiné aux établissements : gestion à 360° des élèves, calcul automatique des moyennes, tableaux de bord dédiés par rôle (administration, enseignants, parents) et modules d'analyse prédictive pour anticiper les décrochages.",
    technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    category: 'fullstack',
    link: 'https://bueri-angeli.vercel.app/',
    preview: 'bueri',
  },
  {
    slug: 'canalbox-dl',
    title: 'Canalbox DL',
    tagline: 'Plateforme de téléchargement',
    description:
      "Application web déployée pour la gestion et la distribution de ressources téléchargeables, avec suivi de progression en temps réel.",
    longDescription:
      "Application web dédiée à la mise à disposition et au téléchargement de ressources, pensée pour rester simple et rapide à utiliser, avec un suivi clair de la progression de chaque transfert.",
    technologies: ['React', 'Node.js', 'Express'],
    category: 'fullstack',
    link: 'https://canalbox-dl-3.onrender.com/',
    preview: 'canalbox',
  },
];
