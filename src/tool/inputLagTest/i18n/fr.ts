import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-latence-saisie-input-lag';

const title = 'Test de Retard d Affichage et Latence de Saisie';
const description = 'Outil en ligne de mesure de l input lag et de la latence du système par synchronisation d affichage.';

const faqData = [
  {
    question: 'Qu est-ce que l input lag et la latence système ?',
    answer: 'C est le délai entre une action physique (clic de souris ou touche) et son affichage à l écran.',
  },
];

const howToData = [
  {
    name: 'Choisir le mode',
    text: 'Sélectionnez Réponse Instantanée, Latence Clavier ou Réaction Visuelle.',
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

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Latence Système',
  modeInstant: 'Réponse Instantanée',
  modeKey: 'Latence Clavier',
  modeVisual: 'Réaction Visuelle',
  targetClickPrompt: 'Cliquez ici pour mesurer la latence',
  targetKeyPrompt: 'Appuyez sur une touche pour la latence clavier',
  targetWaitPrompt: 'Attendez le fond vert...',
  targetNowPrompt: 'CLIQUEZ MAINTENANT !',
  labelAvgLatency: 'Latence Moyenne',
  labelMinLatency: 'Latence Minimale',
  labelMaxLatency: 'Latence Maximale',
  labelJitter: 'Jitter (Écart type)',
  labelFps: 'FPS Actuels',
  labelFrameTime: 'Temps par Image',
  labelSamples: 'Échantillons',
  labelGrade: 'Évaluation',
  gradeUltraFast: 'Ultra Rapide (<10ms)',
  gradeFast: 'Rapide (10-20ms)',
  gradeModerate: 'Modéré (20-35ms)',
  gradeHigh: 'Élevé (>35ms)',
  btnReset: 'Réinitialiser',
  btnCopyReport: 'Copier le Rapport',
  reportCopied: 'Rapport Copié !',
  historyTitle: 'Mesures Récents',
  pipelineTitle: 'Décomposition du Pipeline Matériel',
  distributionTitle: 'Distribution des Fréquences',
  sampleCol: 'Échantillon',
  typeCol: 'Type Entrée',
  latencyCol: 'Latence Mesurée',
};

export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: 'Mesure de l Input Lag et de la Latence Système',
    },
    {
      type: 'paragraph',
      html: 'Évaluez en temps réel le temps de réponse entre la saisie matérielle et le rendu visuel.',
    },
  ],
};
