import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestTecladoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-clavier';
const title = 'Test de Clavier et Détecteur de Ghosting';
const description = 'Vérifiez si votre clavier souffre de ghosting ou de blocage de touches. Visualiseur de touches en temps réel et compteur N-Key Rollover.';

const faqData = [
  {
    question: 'Qu\'est-ce que le ghosting sur un clavier?',
    answer: 'C\'est un défaut qui se produit lorsque vous appuyez sur plusieurs touches à la fois et que l\'ordinateur n\'en enregistre pas certaines. Cela est dû aux limitations de la matrice électrique interne du clavier qui ne peut pas traiter certaines combinaisons.',
  },
  {
    question: 'Qu\'est-ce que N-Key Rollover (NKRO)?',
    answer: 'NKRO signifie que le clavier peut enregistrer autant de touches que vous pouvez en appuyer simultanément sans défaillance. C\'est une fonction premium, courante sur les claviers mécaniques haut de gamme et gaming.',
  },
  {
    question: 'Pourquoi mon clavier échoue-t-il quand j\'appuie sur 3 touches à la fois?',
    answer: 'La plupart des claviers de bureau bon marché ont un rollover de 2 ou 3 touches. Cela est suffisant pour taper, mais insuffisant pour les jeux intensifs ou les raccourcis complexes.',
  },
  {
    question: 'Comment puis-je réparer une touche qui ne répond pas?',
    answer: 'Si le test ne détecte pas la frappe, cela pourrait être de la saleté sous le switch, une défaillance du contact électrique ou un câble endommagé. Essayez de nettoyer le clavier avec de l\'air comprimé avant de l\'abandonner.',
  },
];

const howToData = [
  {
    name: 'Mettre le visualiseur au point',
    text: 'Cliquez n\'importe où sur la page pour vous assurer que le navigateur a le focus et peut capturer les frappes matérielles.',
  },
  {
    name: 'Effectuer le test de réponse',
    text: 'Appuyez sur chaque touche du clavier une par une. La touche correspondante à l\'écran s\'illuminera en vert si elle fonctionne correctement.',
  },
  {
    name: 'Vérifier le ghosting',
    text: 'Appuyez sur plusieurs touches communes du gaming (Z, Q, S, D, Espace, Maj) à la fois pour voir si elles se bloquent ou si elles s\'illuminent toutes.',
  },
  {
    name: 'Vérifier le rollover maximal',
    text: 'Essayez d\'appuyer sur autant de touches que possible avec les deux mains et observez le compteur de frappe simultanée maximale.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<TestTecladoUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Test de Clavier en Ligne: Détectez le Ghosting et N-Key Rollover',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un outil interactif pour le diagnostic du clavier. Vérifiez si votre périphérique souffre de ghosting, blocage ou limitations de rollover. Visuellement clair avec support pour tous les types de clavier.',
    },
    {
      type: 'title',
      text: 'Qu\'est-ce que le Ghosting?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le ghosting se produit lorsque vous appuyez sur une combinaison spécifique de touches et que le clavier enregistre une frappe fantôme que vous n\'avez pas faite. Ceci est dû aux limitations de la matrice de circuits interne.',
    },
    {
      type: 'title',
      text: 'N-Key Rollover et Rollover Maximal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>NKRO (N-Key Rollover):</strong> Permet d\'enregistrer toutes les touches appuyées simultanément. <strong>6KRO:</strong> Limite de l\'ancienne norme USB. <strong>2-3KRO:</strong> Courant sur les claviers bon marché, suffisant pour taper.',
    },
    {
      type: 'title',
      text: 'Claviers Mécaniques vs Membrane',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les claviers mécaniques ont des switches individuels avec des diodes isolées, éliminant le ghosting. Les claviers à membrane partagent des pistes conductrices, causant des défaillances dans les combinaisons simultanées.',
    },
  ],
  ui: {
    badge: 'Test d\'Entrée',
    title: 'Test de Clavier et Détecteur de Ghosting',
    description: 'Vérifiez le N-Key Rollover et détectez les touches défaillantes.',
    simultaneousLabel: 'Simultanées',
    eventLogLabel: 'Journal des Événements',
    resetBtn: 'Réinitialiser',
  },
};
