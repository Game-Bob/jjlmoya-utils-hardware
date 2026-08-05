import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'input-lag-systeem-latentie-test';

const title = 'Input Lag & Systeem Latentie Test';
const description = 'Online tool voor het meten van input lag en schermvertraging via hoge precisie timing.';

const faqData = [
  {
    question: 'Wat is input lag?',
    answer: 'Input lag is de vertraging tussen een fysieke handeling en de visuele weergave op het scherm.',
  },
];

const howToData = [
  {
    name: 'Selecteer modus',
    text: 'Kies Directe Respons, Toetsenbord Latentie of Visuele Reactie.',
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
  inLanguage: 'nl',
};

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Systeem Latentie',
  modeInstant: 'Directe Respons',
  modeKey: 'Toetsenbord Latentie',
  modeVisual: 'Visuele Reactie',
  targetClickPrompt: 'Klik in dit vak om de invoervertraging te meten',
  targetKeyPrompt: 'Druk op een toets voor toetsenbord latentie',
  targetWaitPrompt: 'Wacht op groen scherm...',
  targetNowPrompt: 'KLIK NU!',
  labelAvgLatency: 'Gemiddelde Latentie',
  labelMinLatency: 'Minimale Latentie',
  labelMaxLatency: 'Maximale Latentie',
  labelJitter: 'Jitter (Standaardafwijking)',
  labelFps: 'Huidige FPS',
  labelFrameTime: 'Frame Tijd',
  labelSamples: 'Metingen',
  labelGrade: 'Beoordeling',
  gradeUltraFast: 'Ultra Snel (<10ms)',
  gradeFast: 'Snel (10-20ms)',
  gradeModerate: 'Gemiddeld (20-35ms)',
  gradeHigh: 'Hoog (>35ms)',
  btnReset: 'Resetten',
  btnCopyReport: 'Rapport Kopiëren',
  reportCopied: 'Rapport Gekopieerd!',
  historyTitle: 'Recente Metingen',
  pipelineTitle: 'Hardware Pipeline Latentie Analyse',
  distributionTitle: 'Frequentieverdeling',
  sampleCol: 'Meting',
  typeCol: 'Invoertype',
  latencyCol: 'Gemeten Latentie',
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
      text: 'Input Lag en Systeem Latentie Meting',
    },
    {
      type: 'paragraph',
      html: 'Meet de reactiesnelheid van je invoerapparaten en scherm in real-time.',
    },
  ],
};
