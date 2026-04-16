import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProbadorVibracionMandoUI } from '../ui';

const slug = 'gamepad-vibration-test-online';
const title = 'Online Gamepad Vibrationstester';
const description =
  'Testen Sie die haptischen Motoren und die Dual-Rumble-Vibration Ihres Gamepads im Browser. Unterstützt Xbox, DualShock, DualSense und generische Controller.';

const faqData = [
  {
    question: 'Was benötige ich, um mein Gamepad online zu testen?',
    answer:
      'Verbinden Sie Ihr Gamepad einfach per USB-Kabel mit dem Computer oder Mobilgerät oder koppeln Sie es über Bluetooth. Sobald es verbunden ist, drücken Sie eine beliebige Taste, um erkannt zu werden.',
  },
  {
    question: 'Funktioniert es mit jedem Gamepad-Modell?',
    answer:
      'Die meisten modernen Gamepads bekannter Marken (wie PlayStation oder Xbox) sind kompatibel, sofern Ihr Gerät und Betriebssystem dies unterstützen.',
  },
  {
    question: 'Die rechte Seite meines Gamepads vibriert weniger als die linke, ist das normal?',
    answer:
      'Ja, völlig normal. Gamepads haben meist ein asymmetrisches Design, bei dem eine Seite für starke, tiefe Vibrationen und die andere für schnelle, subtile Vibrationen zuständig ist.',
  },
  {
    question: 'Verbrauchen diese Tests viel Akku?',
    answer:
      'Vibration ist eine der energieintensivsten Funktionen eines kabellosen Gamepads. Kontinuierliche, lange Tests entladen den Akku schneller als gewöhnlich.',
  },
];

const howToData = [
  {
    name: 'Gamepad anschließen und einschalten',
    text: 'Verbinden Sie Ihr Gamepad per USB-Kabel oder Bluetooth mit Ihrem PC, Mac oder Mobilgerät.',
  },
  {
    name: 'Taste am Gamepad drücken',
    text: 'Browser erfordern das Drücken mindestens einer Taste, damit das Gamepad erkannt wird und die Web-Kommunikation startet.',
  },
  {
    name: 'Vibrationsmotoren anpassen',
    text: 'Konfigurieren Sie die Stärke des starken Motors (Low) und des feinen Motors (High) unabhängig voneinander.',
  },
  {
    name: 'Muster ausführen',
    text: 'Wählen Sie eine der Voreinstellungen oder konfigurieren Sie die Parameter manuell und senden Sie das Signal, um jede Komponente zu spüren.',
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

export const content: ToolLocaleContent<ProbadorVibracionMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen',
  bibliography: [
    {
      name: 'Wie haptische Vibration funktioniert — HobbyConsolas',
      url: 'https://www.hobbyconsolas.com/reportajes/como-funciona-vibracion-haptica-mando-dualsense-ps5-757673',
    },
    {
      name: 'Gamepad API — W3C',
      url: 'https://w3c.github.io/gamepad/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'So überprüfen Sie die Vibration Ihres Gaming Gamepads', level: 2 },
    {
      type: 'paragraph',
      html: 'Haptisches Feedback ist eines der immersivsten Elemente von Gaming-Hardware. Wenn ein Motor ausfällt, sind die ersten Symptome meist abnormales Brummen oder asymmetrische Vibrationen. Eine frühzeitige Diagnose verhindert größere Ausfälle.',
    },
    { type: 'title', text: 'Warum den Vibrationstest durchführen?', level: 3 },
    {
      type: 'paragraph',
      html: 'Beim Kauf eines gebrauchten Gamepads, nach dem Aktualisieren von Treibern oder nach einem Sturz hilft das Testen der haptischen Motoren, echte Hardwarefehler von Softwareproblemen zu unterscheiden. Kompatibel mit Xbox, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro und generischen USB-Gamepads.',
    },
    { type: 'title', text: 'Dual Rumble vs Linear Aktor Architektur', level: 3 },
    {
      type: 'paragraph',
      html: 'Klassische Gamepads (Xbox, DualShock) verwenden zwei asymmetrische Mikromotoren: Der linke erzeugt tiefe, grollende Vibrationen; der rechte produziert schnelles, hohes Summen. Fortschrittliche Geräte wie der DualSense verwenden Linear-Aktoren, die Texturen und Widerstände simulieren.',
    },
    { type: 'title', text: 'Symptombasierter Diagnoseleitfaden', level: 3 },
    {
      type: 'paragraph',
      html: 'Aktivieren Sie jeden Motor einzeln mit 100 %. Wenn beide gleich klingen, handelt es sich möglicherweise um ein Replikat mit nur einem Motor. Wenn einer nicht reagiert, überprüfen Sie die Verbindung, bevor Sie das Gehäuse öffnen. Testen Sie Teilintensitäten: Qualitätsmotoren reagieren schrittweise, nicht wie ein Ein-/Ausschalter.',
    },
  ],
  ui: {
    badge: 'Vibrationstest',
    title: 'Gamepad Vibrationstester',
    description: 'Direkte Kontrolle über den Dual Rumble Motor Ihres Gamepads.',
    deviceDisconnected: 'Gamepad getrennt',
    deviceDisconnectedSub: 'Drücken Sie eine Taste an Ihrem Gamepad, um zu starten',
    deviceFallback: 'Gamepad verbunden',
    deviceConnectedSub: 'Stabile Verbindung. Bereit zum Testen.',
    noSupportWarning: "Keine Dual-Rumble-Unterstützung in Ihrem Browser erkannt. Einfache generische Vibration wird verwendet.",
    tabPresets: 'Top Presets',
    tabCustom: 'Reine Präzision',
    presetHeavyTitle: 'Hammerschlag',
    presetHeavyDesc: 'Schwerer Motor auf Max für 300ms. Simuliert einen starken Schlag.',
    presetLightTitle: 'Bienensummen',
    presetLightDesc: 'Nur rechter Motor. Ideal zum Erkennen von ungewöhnlichem Summen.',
    presetHeartbeatTitle: 'Herzschlag',
    presetHeartbeatDesc: 'Subtile aufeinanderfolgende Pulse. Perfekt zum Prüfen der Trägheit.',
    presetSongTitle: 'Münz-Rhythmus',
    presetSongDesc: 'Simuliert aufeinanderfolgende Münzgeräusche. Kurz und taktil.',
    presetRockYouTitle: 'Rock You!',
    presetRockYouDesc: "Queens Klassiker in Ihren Händen: Boom, Boom, Clap!",
    presetEarthquakeTitle: 'Maximales Erdbeben!',
    presetEarthquakeDesc: 'Beide Motoren bei 100% explosiver Kraft. SEHR intensiv.',
    customStrongLabel: 'Starke Kraft (Links)',
    customWeakLabel: 'Schwache Kraft (Rechts)',
    customDurationLabel: 'Pulsdauer',
    btnSendSignal: 'SIGNAL JETZT SENDEN',
  },
};
