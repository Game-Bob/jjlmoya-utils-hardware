import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestRatonUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'maus-polling-rate-test-online';
const title = 'Online Maus Polling Rate Test';
const description =
  'Überprüfen Sie die echten Hz Ihrer Maus. Verifizieren Sie mit unserem professionellen Tool, ob Ihre Gaming-Maus mit 1000Hz oder mehr arbeitet.';

const faqData = [
  {
    question: 'Was ist die Polling Rate einer Maus?',
    answer:
      'Es ist die Frequenz, mit der die Maus ihre Position an den Computer meldet, gemessen in Hz. Eine Polling Rate von 1000Hz bedeutet, dass die Maus alle 1 Millisekunde Daten sendet, was eine viel flüssigere Bewegung ermöglicht.',
  },
  {
    question: 'Warum erreicht mein Test nicht konstant 1000Hz?',
    answer:
      'Der Browser kann die Polling Rate nur messen, wenn sich die Maus bewegt. Wenn Sie sie langsam bewegen oder Ihre CPU stark ausgelastet ist, kann die Messung schwanken. Bewegen Sie die Maus in schnellen Kreisen, um den echten Spitzenwert zu erhalten.',
  },
  {
    question: 'Ist es besser, die höchstmögliche Polling Rate zu haben?',
    answer:
      'Im Allgemeinen ja für Gaming (1000Hz oder mehr), da dies den Lag reduziert. Extrem hohe Raten (4000Hz oder 8000Hz) verbrauchen jedoch viele CPU-Ressourcen und nicht alle Spiele sind dafür optimiert.',
  },
  {
    question: 'Wie beeinflusst die Bildwiederholrate des Monitors die Maus?',
    answer:
      'Wenn Sie einen 144Hz- oder 240Hz-Monitor haben, lässt eine niedrige Polling Rate (125Hz) den Zeiger ruckelig aussehen. Für hochfrequente Monitore ist es wichtig, mindestens 500Hz oder 1000Hz zu verwenden.',
  },
];

const howToData = [
  {
    name: 'Testbereich vorbereiten',
    text: 'Platzieren Sie den Cursor innerhalb der Erfassungszone des Tools.',
  },
  {
    name: 'Maus schnell bewegen',
    text: 'Machen Sie schnelle, weite Kreisbewegungen. Das Tool berechnet die Intervalle zwischen den von der Hardware gesendeten Mousemove-Ereignissen.',
  },
  {
    name: 'Stabilitätsgraph beobachten',
    text: 'Prüfen Sie, ob die Hz-Linie konstant ist oder plötzliche Einbrüche aufweist, was auf Interferenzen bei Funkmäusen oder CPU-Probleme hindeuten könnte.',
  },
  {
    name: 'Reaktionszeit analysieren',
    text: 'Überprüfen Sie die durchschnittliche Verzögerung in Millisekunden. Eine gute Gaming-Maus sollte bei einer durchschnittlichen Latenz von fast 1ms bleiben.',
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

export const content: ToolLocaleContent<TestRatonUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Der ultimative Leitfaden zur Polling Rate', level: 2 },
    {
      type: 'paragraph',
      html: 'Wenn Sie Ihre Maus physisch auf dem Mauspad bewegen, muss diese analoge Bewegung in digitale Signale übersetzt werden, die Ihr Computer versteht. Die <strong>Polling Rate</strong> ist die Frequenz, mit der die Maus ihre Position an den PC "meldet". Sie wird in Hertz (Hz) gemessen.',
    },
    { type: 'title', text: 'Polling Rate Stufen und ihre Verwendung', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>125 Hz</strong> — Die Maus meldet alle 8 Millisekunden. Gut für die Büroarbeit, fühlt sich aber auf 144Hz-Monitoren ruckelig an. <strong>1000 Hz</strong> — Der Goldstandard für Gaming: meldet jede Millisekunde (1 ms). Flüssige Bewegung ohne spürbare Verzögerung. <strong>8000 Hz</strong> — Modernste Technologie (Razer, Logitech). Meldet alle 0,125 ms, erfordert aber eine starke CPU.',
    },
    { type: 'title', text: 'Warum schwanken meine Hz?', level: 3 },
    {
      type: 'paragraph',
      html: 'Völlig normal. Die meisten modernen Mäuse haben eine dynamische Polling Rate, um Energie zu sparen. Wenn Sie die Maus langsam bewegen, sendet sie weniger Berichte, da weniger neue Daten vorhanden sind. Nur schnelle, kontinuierliche Bewegungen bringen den Sensor an seinen echten Spitzenwert.',
    },
    { type: 'title', text: 'Polling Rate vs. DPI: Die große Verwechslung', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>DPI (Dots Per Inch)</strong> ist die Empfindlichkeit: wie viele Pixel sich der Cursor pro Zoll physischer Bewegung bewegt. <strong>Hz (Polling Rate)</strong> ist die Aktualisierungsfrequenz: wie flüssig und zeitnah diese Bewegung gemeldet wird. Beide Parameter sind unabhängig und ergänzen sich.',
    },
  ],
  ui: {
    badge: 'Maus-Test',
    title: 'Polling Rate Checker',
    description: 'Bewegen Sie die Maus in schnellen Kreisen, um die Hz zu messen.',
    labelAvg: 'Durchschnitt',
    labelPeak: 'Spitze',
    placeholder: 'Maus hier bewegen',
  },
};
