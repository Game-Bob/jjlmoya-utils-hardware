import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'input-lag-latenz-test';

const title = 'Input Lag & System Latenz Test';
const description = 'Präziser Online-Test zur Messung von Input Lag, Tastatur-Latenz und Bildschirm-Verzögerung mit hochpräzisen Timern.';

const faqData = [
  {
    question: 'Was ist Input Lag und Systemlatenz?',
    answer: 'Input Lag ist die Zeitspanne zwischen einer physischen Eingabe (Mausklick oder Tastendruck) und der visuellen Aktualisierung auf dem Bildschirm.',
  },
  {
    question: 'Wie misst dieser Test die Latenz im Browser?',
    answer: 'Er nutzt performance.now() bei Hardware-Events und berechnet die Verzögerung bis zur nächsten Frame-Synchronisation via requestAnimationFrame.',
  },
];

const howToData = [
  {
    name: 'Testmodus wählen',
    text: 'Wähle zwischen Sofortige Antwort, Tastatur-Latenz oder Visuelle Reaktion.',
  },
  {
    name: 'Eingaben durchführen',
    text: 'Klicke in das Testfeld oder drücke Tasten, um Eingaben zu erfassen.',
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
  inLanguage: 'de',
};

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Systemlatenz',
  modeInstant: 'Sofortige Antwort',
  modeKey: 'Tastatur-Latenz',
  modeVisual: 'Visuelle Reaktion',
  targetClickPrompt: 'Klicke in dieses Feld, um die Eingabelatenz zu messen',
  targetKeyPrompt: 'Drücke eine beliebige Taste für die Tastatur-Latenz',
  targetWaitPrompt: 'Warte auf grünen Hintergrund...',
  targetNowPrompt: 'JETZT KLICKEN!',
  labelAvgLatency: 'Durchschnitt',
  labelMinLatency: 'Minimum Latenz',
  labelMaxLatency: 'Maximum Latenz',
  labelJitter: 'Jitter (Standardabw.)',
  labelFps: 'Aktuelle FPS',
  labelFrameTime: 'Frame-Zeit',
  labelSamples: 'Stichproben',
  labelGrade: 'Bewertung',
  gradeUltraFast: 'Ultra Schnelligkeit (<10ms)',
  gradeFast: 'Schnell (10-20ms)',
  gradeModerate: 'Moderat (20-35ms)',
  gradeHigh: 'Hoch (>35ms)',
  btnReset: 'Messungen zurücksetzen',
  btnCopyReport: 'Benchmark-Bericht kopieren',
  reportCopied: 'Bericht kopiert!',
  historyTitle: 'Aktuelle Latenzmessungen',
  pipelineTitle: 'Hardware Signal Pipeline Aufschlüsselung',
  distributionTitle: 'Häufigkeitsverteilung (Gauß-Kurve)',
  sampleCol: 'Probe',
  typeCol: 'Eingabetyp',
  latencyCol: 'Gemessene Latenz',
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
      text: 'Messung von Input Lag und Systemlatenz',
    },
    {
      type: 'paragraph',
      html: 'Ermittle die Reaktionszeit deines Systems zwischen Peripherieeingabe und Bildschirmdarstellung.',
    },
  ],
};
