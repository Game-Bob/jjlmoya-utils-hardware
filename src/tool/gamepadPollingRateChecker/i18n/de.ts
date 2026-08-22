import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamepadPollingRateCheckerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gamepad-abfragerate-tester-hertz';
const title = 'Gamepad Polling Rate und Hertz Tester';
const description = 'Messen Sie die im Browser erfasste Aktualisierungsrate, das Berichtintervall und die Stabilität eines USB- oder Bluetooth-Gamepads.';

const faq = [
  {
    question: 'Was misst dieser Gamepad-Polling-Rate-Tester?',
    answer: 'Er misst Änderungen der Gamepad-Zeitstempel im Browser, während ein Analogstick bewegt wird. Die angezeigte Hertz-Zahl ist die beobachtete Aktualisierungsrate im Browser und keine direkte elektrische Messung des USB-Signals.',
  },
  {
    question: 'Kann der Browser bestätigen, dass mein Controller mit 1000 Hz läuft?',
    answer: 'Er kann zeigen, ob Zeitstempel-Updates flüssig auf der Seite ankommen, jedoch keine 1000-Hz-USB-Übertaktung zertifizieren. Timer-Präzision und Betriebssystem-Scheduler können Signale bündeln.',
  },
  {
    question: 'Warum muss der Analogstick kreisförmig bewegt werden?',
    answer: 'Kontinuierliche Kreisbewegungen verändern beide Achsen ständig und erzeugen einen gleichmäßigen Datenstrom. Wenn der Stick stillsteht, entstehen zu wenige Zustandsänderungen.',
  },
  {
    question: 'Kann ich die Leistung zwischen USB und Bluetooth vergleichen?',
    answer: 'Ja, führen Sie die Messung mit gleicher Dauer und Bewegung für beide Verbindungen durch, um Frequenz, Intervall und Jitter im selben Browser zu vergleichen.',
  },
];

const howTo = [
  {
    name: 'Controller verbinden und aktivieren',
    text: 'Schließen Sie das Gamepad per USB oder Bluetooth an und drücken Sie eine Taste, damit der Browser das Gerät erkennt.',
  },
  {
    name: 'Gerät und Messdauer auswählen',
    text: 'Wählen Sie den Controller im Auswahlfeld und stellen Sie zehn Sekunden für eine ausgewogene Erstmessung ein.',
  },
  {
    name: 'Analogstick kontinuierlich kreisen lassen',
    text: 'Starten Sie die Messung und bewegen Sie den linken Stick gleichmäßig im Kreis, bis der Fortschrittsring voll ist.',
  },
  {
    name: 'Ergebnisse und Stabilität ablesen',
    text: 'Vergleichen Sie Hertz, durchschnittliches Intervall und Jitter unter gleichen Testbedingungen.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<GamepadPollingRateCheckerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Fragen zur Gamepad-Abfragerate',
  faq,
  bibliographyTitle: 'Technische Referenzen',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Erfasste Gamepad-Abfragerate im Browser messen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieses Werkzeug überwacht die hochauflösenden Zeitstempel des ausgewählten Gamepads bei Bewegung des Analogsticks. Es bereinigt Ausreißer, berechnet das durchschnittliche Intervall und rechnet dieses in Hertz um (1000 geteilt durch Millisekunden). Die Berechnung erfolgt vollständig lokal.',
    },
    {
      type: 'table',
      headers: ['Messwert', 'Bedeutung', 'Kein Beweis für'],
      rows: [
        ['Erfasste Rate', 'Im Browser empfangene Aktualisierungen pro Sekunde', 'Elektrische USB-Abfragerate'],
        ['Update-Intervall', 'Durchschnittliche Zeit zwischen Zeitstempeländerungen', 'Gesamte Eingabeverzögerung'],
        ['Jitter', 'Schwankung zwischen 5. und 95. Perzentil der Intervalle', 'Hardwaredefekt allein'],
        ['Konfidenz', 'Stichprobenmenge und Gleichmäßigkeit der Messung', 'Industrielle Laborpräzision'],
      ],
    },
    {
      type: 'title',
      text: 'So führen Sie einen wiederholbaren Hertz-Test durch',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Schließen Sie Hintergrundanwendungen, lassen Sie den Tab aktiv und kreisen Sie den Stick bei jedem Durchgang gleichmäßig. Nutzen Sie denselben Browser und dieselbe Testdauer für Vergleiche zwischen Kabel, Bluetooth oder Treibern.',
    },
    {
      type: 'tip',
      title: 'Vergleichen Sie unter identischen Bedingungen',
      html: 'Führen Sie nach Änderungen an Kabel oder Bluetooth mindestens zwei Durchgänge durch. Ein konstanter Wert ist aussagekräftiger als ein einzelner Spitzenwert.',
    },
    {
      type: 'title',
      text: 'Warum dies kein vollständiger Input-Lag-Test ist',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Gamepad API liest Daten nach der Verarbeitung durch Betriebssystem und Browser aus. Sie erfasst nicht das elektrische Signal am Kabel oder die Bildschirmlatenz. Die Messung eignet sich für Vergleiche, stellt aber keine Gesamtlatenz dar.',
    },
  ],
  ui: {
    privacyNote: '100% lokale Signalverarbeitung',
    stepConnect: 'Verbinden und Taste drücken',
    stepMove: 'Stick gleichmäßig kreisen lassen',
    stepRead: 'Frequenz und Stabilität vergleichen',
    deviceLabel: 'Aktives Gamepad',
    devicePlaceholder: 'Taste am Controller drücken zum Erkennen',
    deviceFallback: 'Verbundenes Gamepad',
    durationLabel: 'Messdauer',
    durationFive: '5 Sek.',
    durationTen: '10 Sek.',
    durationTwenty: '20 Sek.',
    startAction: 'Messung starten',
    stopAction: 'Stopp',
    resetAction: 'Zurücksetzen',
    orbitInstruction: 'Bewegen Sie den linken Stick durchgehend kreisförmig',
    traceLabel: 'Live-Zeitstempel-Spur',
    observedRateLabel: 'Erfasste Rate',
    intervalLabel: 'Update-Intervall',
    jitterLabel: 'Schwankung (Jitter)',
    samplesLabel: 'Gültige Intervalle',
    confidenceLabel: 'Messgenauigkeit',
    confidenceLow: 'Niedrig',
    confidenceMedium: 'Mittel',
    confidenceHigh: 'Hoch',
    statusWaiting: 'Warten auf kompatiblen Controller',
    statusReady: 'Bereit. Starten Sie die Messung mit der Hand am Stick.',
    statusMeasuring: 'Zeitstempel werden lokal aufgezeichnet',
    statusNeedsMovement: 'Stick in größeren Kreisen bewegen für mehr Messpunkte',
    statusComplete: 'Messung abgeschlossen. Unter gleichen Bedingungen wiederholen.',
    statusUnsupported: 'Dieser Browser unterstützt die Gamepad API nicht',
    statusDisconnected: 'Kein aktiver Controller. Verbinden und Taste drücken.',
    statusStopped: 'Messung gestoppt. Teilergebnis bleibt sichtbar.',
    limitHeading: 'Grenzen der Browser-Messung',
    limitBody: 'Schätzt über die Gamepad API sichtbare Updates. Zertifiziert kein USB-Overclocking oder Gesamtlatenz.',
    emptyValue: '-',
    hertzUnit: 'Hz',
    millisecondsUnit: 'ms',
    reportsUnit: 'Intervalle',
    progressLabel: 'Messfortschritt',
  },
};
