import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'input-lag-system-latens-test';

const title = 'Input Lag & System Latens Test';
const description = 'Online-verktyg for att mata input lag och skarmfordrojning med hog precision.';

const faqData = [
  {
    question: 'Vad ar input lag?',
    answer: 'Det ar tidsfordrojningen mellan en fysisk knapptryckning och den visuella uppdateringen pa skarmen.',
  },
];

const howToData = [
  {
    name: 'Valj lage',
    text: 'Valj Direkt Respons, Tangentbordslatens eller Visuell Reaktion.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'System Latens',
  modeInstant: 'Direkt Respons',
  modeKey: 'Tangentbordslatens',
  modeVisual: 'Visuell Reaktion',
  targetClickPrompt: 'Klicka har for att mata input lag',
  targetKeyPrompt: 'Tryck pa valfri tangent for tangentbordslatens',
  targetWaitPrompt: 'Vanta pa gron bakgrund...',
  targetNowPrompt: 'KLICKA NU!',
  labelAvgLatency: 'Genomsnittlig Latens',
  labelMinLatency: 'Minsta Latens',
  labelMaxLatency: 'Maximal Latens',
  labelJitter: 'Jitter (Standardavvikelse)',
  labelFps: 'Aktuell FPS',
  labelFrameTime: 'Bilder-tid',
  labelSamples: 'Prover',
  labelGrade: 'Betyg',
  gradeUltraFast: 'Ultra Snabb (<10ms)',
  gradeFast: 'Snabb (10-20ms)',
  gradeModerate: 'Måttlig (20-35ms)',
  gradeHigh: 'Hög (>35ms)',
  btnReset: 'Aterstall',
  btnCopyReport: 'Kopiera Rapport',
  reportCopied: 'Rapport Kopierad!',
  historyTitle: 'Senaste Matningar',
  pipelineTitle: 'Hardware Pipeline Latens Uppdelning',
  distributionTitle: 'Frekvensfordelning',
  sampleCol: 'Prov',
  typeCol: 'Inmatningstyp',
  latencyCol: 'Uppmatts Latens',
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
      text: 'Matning av Input Lag och Systemlatens',
    },
    {
      type: 'paragraph',
      html: 'Utvardera din inmatningsfordrojning och skarmrespons i realtid.',
    },
  ],
};
