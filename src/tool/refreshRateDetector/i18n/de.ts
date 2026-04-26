import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RefreshRateDetectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-bildwiederholfrequenz-detektor';
const title = 'Monitor Bildwiederholfrequenz Detektor';
const description = 'Erkennen Sie sofort die Bildwiederholfrequenz Ihres Monitors mit Präzision unter Verwendung von requestAnimationFrame. Testen Sie die Bildstabilität und vergleichen Sie sie mit Industriestandards.';

const faqData = [
  {
    question: 'Was ist die Bildwiederholfrequenz (Hz)?',
    answer: 'Die Bildwiederholfrequenz gibt an, wie oft pro Sekunde Ihr Monitor das Bild aktualisiert. Ein 60-Hz-Monitor aktualisiert das Bild 60 Mal pro Sekunde, während ein 144-Hz-Monitor dies 144 Mal tut. Höhere Raten führen zu flüssigeren Bewegungen.',
  },
  {
    question: 'Wie genau ist dieser Detektor?',
    answer: 'Dieses Tool verwendet requestAnimationFrame, das sich mit dem Aktualisierungszyklus Ihres Monitors synchronisiert. Die Genauigkeit hängt von der Systemlast ab. Der stabile Modus misst über längere Zeiträume für eine höhere Präzision.',
  },
  {
    question: 'Was ist der Unterschied zwischen dem stabilen und dem schnellen Modus?',
    answer: 'Der schnelle Modus misst über eine kurze Zeit (~3 Sekunden) für schnelles Feedback. Der stabile Modus dauert länger (~10 Sekunden), um Systemrauschen herauszufiltern und zuverlässigere Ergebnisse zu liefern.',
  },
  {
    question: 'Warum unterscheidet sich meine erkannte Hz-Zahl von den Angaben meines Monitors?',
    answer: 'Dies kann passieren, wenn: Ihre Kabelverbindung locker ist, Treiber veraltet sind oder Ihre Betriebssystem-Skalierung stört. Versuchen Sie, Ihr Displaykabel aus- und wieder einzustecken oder die GPU-Treiber zu aktualisieren.',
  },
  {
    question: 'Welche Bildwiederholfrequenzen unterstützen moderne Monitore?',
    answer: 'Gängige Standards sind 60 Hz (Basis), 75 Hz, 120 Hz, 144 Hz (Gaming), 240 Hz (kompetitives Gaming) und 360 Hz (professioneller E-Sport).',
  },
];

const howToData = [
  {
    name: 'Tool laden',
    text: 'Öffnen Sie einfach diese Seite. Der Detektor beginnt sofort mit der Messung.',
  },
  {
    name: 'Auf Stabilisierung warten',
    text: 'Wählen Sie den stabilen oder den schnellen Modus. Lassen Sie die Messung abschließen, ohne das Fenster zu bewegen.',
  },
  {
    name: 'Tachometer prüfen',
    text: 'Die Bildwiederholfrequenz Ihres Monitors erscheint als sanfte Skala mit Benchmark-Statistiken (Min/Max/Avg).',
  },
  {
    name: 'Mit Standards vergleichen',
    text: 'Das Tool zeigt an, welchem Standard Ihr Monitor entspricht (60, 75, 120, 144, 240, 360 Hz).',
  },
  {
    name: 'Optional: Frame-Skipping testen',
    text: 'Beobachten Sie das animierte Quadrat, das über den Bildschirm läuft, um die Flüssigkeit visuell zu bestätigen.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<RefreshRateDetectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Monitor Bildwiederholfrequenz-Detektor: Testen Sie Ihre Display-Hz online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Erkennen Sie sofort die Bildwiederholfrequenz Ihres Monitors (60 Hz, 144 Hz, 240 Hz usw.) mit Präzision. Testen Sie die Bildstabilität und verifizieren Sie, dass Ihr Display die angegebenen Spezifikationen erfüllt.',
    },
    {
      type: 'title',
      text: 'Warum die Bildwiederholfrequenz des Monitors wichtig ist',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Bildwiederholfrequenz bestimmt, wie flüssig Bewegungen auf Ihrem Bildschirm erscheinen. Gamer profitieren von 144-Hz+-Monitoren, während allgemeine Benutzer 60 Hz als ausreichend empfinden. Dieses Tool hilft zu bestätigen, dass Ihr Monitor tatsächlich die beworbene Bildwiederholfrequenz liefert.',
    },
    {
      type: 'title',
      text: 'So erkennen Sie Ihre Bildwiederholfrequenz',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Laden Sie diesen Detektor – die Messung beginnt sofort',
        'Wählen Sie zwischen dem schnellen (3s) oder dem stabilen (10s) Messmodus',
        'Lesen Sie die Hz-Zahl Ihres Monitors auf der Tachometerskala ab',
        'Vergleichen Sie sie mit Industriestandards (60, 75, 120, 144, 240, 360 Hz)',
      ],
    },
    {
      type: 'title',
      text: 'Gängige Standards für die Bildwiederholfrequenz',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Standard', 'Anwendungsfall', 'Typischer Benutzer'],
      rows: [
        ['60 Hz', 'Allgemeine Computeranwendung', 'Büro, Surfen im Web'],
        ['75 Hz', 'Leichtes Gaming', 'Gelegenheitsspieler'],
        ['120 Hz', 'Multimedia', 'Konsole, Streaming'],
        ['144 Hz', 'Kompetitives Gaming', 'FPS, schnelle Spiele'],
        ['240 Hz+', 'Professioneller E-Sport', 'Profi-Gamer, Streamer'],
      ],
    },
    {
      type: 'title',
      text: 'Fehlerbehebung: Display zeigt weniger Hz als erwartet an',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Prüfen Sie die HDMI/DisplayPort-Kabelverbindungen – lose Kabel reduzieren die Bandbreite',
        'Aktualisieren Sie Ihre GPU-Treiber (NVIDIA, AMD, Intel)',
        'Überprüfen Sie die Betriebssystem-Anzeigeeinstellungen, um sicherzustellen, dass eine hohe Bildwiederholfrequenz aktiviert ist',
        'Probieren Sie verschiedene Kabel oder Anschlüsse an Ihrem Monitor aus',
        'Starten Sie Ihren Computer neu und testen Sie erneut',
      ],
    },
    {
      type: 'title',
      text: 'Die Technik hinter diesem Detektor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dieses Tool verwendet die requestAnimationFrame-API des Browsers, die direkt mit dem Aktualisierungszyklus Ihres Monitors synchronisiert wird. Durch Messen der Zeit zwischen den Animationsframes berechnen wir Ihre exakte Bildwiederholfrequenz mit hoher Präzision – keine spezielle Hardware erforderlich.',
    },
  ],
  ui: {
    badge: 'Display Test',
    title: 'Monitor Bildwiederholfrequenz Detektor',
    description: 'Erkennen Sie sofort die Bildwiederholfrequenz Ihres Displays',
    modeStable: 'Stabil (10s, präzise)',
    modeFast: 'Schnell (3s, fix)',
    measurementStatus: 'Messung läuft...',
    currentHz: 'Aktuell',
    averageHz: 'Durchschnitt',
    maxHz: 'Maximum',
    minHz: 'Minimum',
    standardDetected: 'Standard erkannt',
    frameSkippingTest: 'Frame-Skipping-Test',
    startMeasurement: 'Messung starten',
    resetMeasurement: 'Zurücksetzen',
    copyResult: 'Ergebnis kopieren',
    copiedFeedback: 'In die Zwischenablage kopiert!',
    optimalConfiguration: '[OK] Optimale Konfiguration',
    suboptimalConfiguration: '[WARNUNG] Unter dem Optimum',
    unstableRefreshRate: '[WARNUNG] Instabile Bildwiederholfrequenz',
    measurementNotStarted: 'Bereit zur Messung',
    switchMonitorHint: 'Ziehen Sie das Fenster auf einen anderen Monitor, um diesen zu testen',
    incompatibleBrowserMsg: 'Ihr Browser unterstützt requestAnimationFrame nicht',
  },
};
