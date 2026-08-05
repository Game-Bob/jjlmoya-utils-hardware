import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-latenza-input-lag';

const title = 'Test Input Lag e Latenza di Sistema';
const description = 'Strumento online per la misurazione di input lag e latenza dello schermo mediante sincronizzazione del buffer di rendering.';

const faqData = [
  {
    question: 'Cos e l input lag?',
    answer: 'È il tempo trascorso tra un azione fisica dell utente e l aggiornamento visivo dello schermo.',
  },
];

const howToData = [
  {
    name: 'Seleziona modalità',
    text: 'Scegli Risposta Istantanea, Latenza Tastiera o Reazione Visiva.',
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
  inLanguage: 'it',
};

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Latenza Sistema',
  modeInstant: 'Risposta Istantanea',
  modeKey: 'Latenza Tastiera',
  modeVisual: 'Reazione Visiva',
  targetClickPrompt: 'Clicca qui per misurare la latenza di input',
  targetKeyPrompt: 'Premi un tasto per la latenza della tastiera',
  targetWaitPrompt: 'Attendi lo sfondo verde...',
  targetNowPrompt: 'CLICCA ORA!',
  labelAvgLatency: 'Latenza Media',
  labelMinLatency: 'Latenza Minima',
  labelMaxLatency: 'Latenza Massima',
  labelJitter: 'Jitter (Deviazione)',
  labelFps: 'FPS Attuali',
  labelFrameTime: 'Tempo Frame',
  labelSamples: 'Campioni',
  labelGrade: 'Valutazione',
  gradeUltraFast: 'Ultra Rapido (<10ms)',
  gradeFast: 'Rapido (10-20ms)',
  gradeModerate: 'Moderato (20-35ms)',
  gradeHigh: 'Alto (>35ms)',
  btnReset: 'Ripristina',
  btnCopyReport: 'Copia Report',
  reportCopied: 'Report Copiato!',
  historyTitle: 'Misurazioni Recenti',
  pipelineTitle: 'Analisi della Pipeline Hardware',
  distributionTitle: 'Distribuzione delle Frequenze',
  sampleCol: 'Campione',
  typeCol: 'Tipo Input',
  latencyCol: 'Latenza Misurata',
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
      text: 'Test della Latenza di Input del Sistema',
    },
    {
      type: 'paragraph',
      html: 'Valuta la reattività del tuo hardware e schermo in tempo reale.',
    },
  ],
};
