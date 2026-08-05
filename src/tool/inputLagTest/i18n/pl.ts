import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-opoznienia-input-lag';

const title = 'Test Input Lag i Opuznienia Systemu';
const description = 'Narzędzie online do pomiaru input lagu i opóźnienia systemu przy użyciu precyzyjnych timerów klatek.';

const faqData = [
  {
    question: 'Czym jest input lag?',
    answer: 'To czas opóźnienia między fizyczną reakcją użytkownika a wyświetleniem zmiany na ekranie.',
  },
];

const howToData = [
  {
    name: 'Wybierz tryb',
    text: 'Wybierz Natychmiastowa Reakcja, Opóźnienie Klawiatury lub Reakcja Wizualna.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
};

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Opóźnienie Systemu',
  modeInstant: 'Natychmiastowa Reakcja',
  modeKey: 'Opóźnienie Klawiatury',
  modeVisual: 'Reakcja Wizualna',
  targetClickPrompt: 'Kliknij tutaj, aby zmierzyć opóźnienie wejścia',
  targetKeyPrompt: 'Naciśnij dowolny klawisz, aby zmierzyć opóźnienie klawiatury',
  targetWaitPrompt: 'Czekaj na zielone tło...',
  targetNowPrompt: 'KLIKNIJ TERAZ!',
  labelAvgLatency: 'Średnie Opóźnienie',
  labelMinLatency: 'Minimalne Opóźnienie',
  labelMaxLatency: 'Maksymalne Opóźnienie',
  labelJitter: 'Jitter (Odchylenie)',
  labelFps: 'Aktualne FPS',
  labelFrameTime: 'Czas Klatki',
  labelSamples: 'Próbki',
  labelGrade: 'Ocena',
  gradeUltraFast: 'Bardzo Szybko (<10ms)',
  gradeFast: 'Szybko (10-20ms)',
  gradeModerate: 'Umiarkowanie (20-35ms)',
  gradeHigh: 'Wysokie (>35ms)',
  btnReset: 'Zresetuj',
  btnCopyReport: 'Kopiuj Raport',
  reportCopied: 'Raport Skopiowany!',
  historyTitle: 'Ostatnie Pomiary',
  pipelineTitle: 'Analiza Opóźnienia Sprzętowego',
  distributionTitle: 'Rozkład Częstotliwości',
  sampleCol: 'Próbka',
  typeCol: 'Typ Wejścia',
  latencyCol: 'Zmierzone Opóźnienie',
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
      text: 'Pomiar Input Lag i Opóźnienia Systemu',
    },
    {
      type: 'paragraph',
      html: 'Zmierz dokładnie czas reakcji ekranu i klawiatury w czasie rzeczywistym.',
    },
  ],
};
