import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestTecladoUI } from '../ui';

const slug = 'tastatur-test-online';
const title = 'Online Tastatur Test & Ghosting Detektor';
const description = 'Prüfen Sie, ob Ihre Tastatur unter Ghosting oder Key Jamming leidet. Echtzeit-Tastenvirtualisierung und N-Key-Rollover-Zähler.';

const faqData = [
  {
    question: 'Was ist Ghosting bei einer Tastatur?',
    answer: 'Es handelt sich um einen Defekt, der auftritt, wenn Sie mehrere Tasten gleichzeitig drücken und der Computer einige davon nicht registriert. Dies liegt an Einschränkungen in der internen elektrischen Matrix der Tastatur, die bestimmte Kombinationen nicht verarbeiten kann.',
  },
  {
    question: 'Was bedeutet N-Key-Rollover (NKRO)?',
    answer: 'NKRO bedeutet, dass die Tastatur so viele Tasten gleichzeitig registrieren kann, wie Sie drücken können, ohne Fehler. Dies ist ein Premium-Feature, das häufig in hochwertigen mechanischen und Gaming-Tastaturen zu finden ist.',
  },
  {
    question: 'Warum versagt meine Tastatur, wenn ich 3 Tasten gleichzeitig drücke?',
    answer: 'Die meisten billigen Büro-Tastaturen haben ein 2- oder 3-Tasten-Rollover. Das reicht zum Tippen aus, ist aber für intensives Gaming oder komplexe Shortcuts unzureichend.',
  },
  {
    question: 'Wie kann ich eine Taste reparieren, die nicht reagiert?',
    answer: 'Wenn der Test den Tastendruck nicht erkennt, könnte es an Schmutz unter dem Schalter, einem elektrischen Kontaktfehler oder einem beschädigten Kabel liegen. Versuchen Sie, die Tastatur mit Druckluft zu reinigen, bevor Sie aufgeben.',
  },
];

const howToData = [
  {
    name: 'Visualisierung fokussieren',
    text: 'Klicken Sie irgendwo auf die Seite, um sicherzustellen, dass der Browser den Fokus hat und Hardware-Tastendrücke erfassen kann.',
  },
  {
    name: 'Reaktionstest durchführen',
    text: 'Drücken Sie nacheinander jede Taste auf Ihrer Tastatur. Die entsprechende Taste auf dem Bildschirm leuchtet grün auf, wenn sie korrekt funktioniert.',
  },
  {
    name: 'Auf Ghosting prüfen',
    text: 'Drücken Sie gängige Gaming-Tasten (W, A, S, D, Leertaste, Shift) alle gleichzeitig, um zu sehen, ob sie sperren oder alle aufleuchten.',
  },
  {
    name: 'Maximalen Rollover überprüfen',
    text: 'Versuchen Sie, mit beiden Händen so viele Tasten wie möglich gleichzeitig zu drücken, und beobachten Sie den Zähler für maximale gleichzeitige Tastendrücke.',
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

export const content: ToolLocaleContent<TestTecladoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Technische Referenzen',
  bibliography: [
    {
      name: 'USB Keyboard/Keypad Page - HID Usage Tables',
      url: 'https://www.usb.org/sites/default/files/documents/hut1_12v2.pdf',
    },
    {
      name: 'Mechanical vs Membrane Keyboards - Technical Deep Dive',
      url: 'https://deskthority.net/wiki/Rollover',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Online Tastatur Test: Ghosting und N-Key-Rollover erkennen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein interaktives Tool zur Tastaturdiagnose. Prüfen Sie, ob Ihr Peripheriegerät unter Ghosting, Jamming oder Rollover-Einschränkungen leidet. Visuell klar mit Unterstützung für alle Tastaturtypen.',
    },
    {
      type: 'title',
      text: 'Was ist Ghosting?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ghosting tritt auf, wenn Sie eine bestimmte Tastenkombination drücken und die Tastatur einen Phantom-Tastendruck registriert, den Sie nicht ausgeführt haben. Dies liegt an Einschränkungen im internen Schaltkreis-Matrix.',
    },
    {
      type: 'title',
      text: 'N-Key-Rollover und maximaler Rollover',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>NKRO (N-Key-Rollover):</strong> Ermöglicht das gleichzeitige Registrieren aller gedrückten Tasten. <strong>6KRO:</strong> Alter USB-Standard-Limit. <strong>2-3KRO:</strong> Üblich bei billigen Tastaturen, ausreichend zum Tippen.',
    },
    {
      type: 'title',
      text: 'Mechanische vs. Membran-Tastaturen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mechanische Tastaturen haben individuelle Schalter mit isolierten Dioden, was Ghosting eliminiert. Membran-Tastaturen teilen sich Leiterbahnen, was zu Fehlern bei gleichzeitigen Kombinationen führt.',
    },
  ],
  ui: {
    badge: 'Eingabetest',
    title: 'Tastatur Test und Ghosting Detektor',
    description: 'N-Key-Rollover überprüfen und defekte Tasten erkennen.',
    simultaneousLabel: 'Gleichzeitig',
    eventLogLabel: 'Ereignisprotokoll',
    resetBtn: 'Zurücksetzen',
  },
};
