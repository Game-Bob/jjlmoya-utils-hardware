import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDpiAnalyzerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'maus-dpi-analyse';
const title = 'Maus DPI Analyse';
const description =
  'Messen Sie Ihre echten Maus DPI online, indem Sie die Maus eine bekannte physische Distanz bewegen und die erfasste Zeigerbewegung in Pixeln vergleichen.';

const faqData = [
  {
    question: 'Wie funktioniert ein Online Maus DPI Tester?',
    answer:
      'Er fordert Sie auf, die Maus über eine bekannte physische Distanz zu bewegen, zeichnet die Bewegungsereignisse des Browsers auf, korrigiert die erfassten Werte mit devicePixelRatio und teilt die resultierenden Pixel durch die Distanz in Zoll.',
  },
  {
    question: 'Warum können die echten DPI vom auf der Maus aufgedruckten Wert abweichen?',
    answer:
      'Sensortoleranzen, Firmware Stufen, Oberflächenverhalten, Betriebssystemskalierung, Zeigerbeschleunigung und Spielprofileinstellungen können dazu führen, dass die gemessene Bewegung von den in der Software gewählten nominalen DPI abweicht.',
  },
  {
    question: 'Sollte die Zeigerbeschleunigung vor dem Test deaktiviert werden?',
    answer:
      'Ja. Deaktivieren Sie Zeigerbeschleunigung verbessern unter Windows und alle Beschleunigungskurven des Herstellers, wenn Sie eine saubere DPI Messung wünschen. Lassen Sie sie nur aktiviert, wenn Sie bewusst sehen möchten, wie sich Ihre normale Einrichtung verhält.',
  },
  {
    question: 'Welche physische Distanz sollte ich verwenden?',
    answer:
      'Größere Distanzen reduzieren den Handfehler. Eine Kreditkartenbreite ist praktisch, aber ein Linealdurchlauf von 100 mm oder 4 Zoll ist normalerweise besser wiederholbar, wenn Ihr Schreibtisch genug Platz bietet.',
  },
];

const howToData = [
  {
    name: 'Wählen Sie eine physische Referenz',
    text: 'Verwenden Sie 5 oder 10 mm für sehr hohe DPI, 1 Zoll für konventionelle Tests oder längere Referenzen, wenn Sie genügend Platz auf dem Schreibtisch haben.',
  },
  {
    name: 'Halten Sie die Aufnahmetaste gedrückt',
    text: 'Halten Sie das Aufnahmeziel auf dem Bildschirm gedrückt und bewegen Sie die Maus physisch genau um die gewählte Distanz nach rechts.',
  },
  {
    name: 'An der physischen Markierung loslassen',
    text: 'Lassen Sie die Taste los, wenn die Maus die echte physische Markierung auf Ihrem Schreibtisch erreicht. Das Tool berechnet Pixel pro Zoll und zeigt die gemessenen DPI an.',
  },
  {
    name: 'Bei verschiedenen Geschwindigkeiten wiederholen',
    text: 'Führen Sie langsame und schnelle Durchläufe durch. Wenn sich die DPI stark ändern, können Zeigerbeschleunigung oder Sensorglättung das Ergebnis beeinflussen.',
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

export const content: ToolLocaleContent<MouseDpiAnalyzerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Maus DPI Tester online: echte Sensorempfindlichkeit messen', level: 2 },
    {
      type: 'paragraph',
      html: 'Eine Maus kann 800, 1600, 3200 oder 26000 DPI bewerben, aber der Wert, der in Spielen und Präzisionsarbeit zählt, ist die Bewegung, die tatsächlich den Computer erreicht. Dieser Maus DPI Tester online misst diesen praktischen Wert, indem er eine bekannte physische Bewegung mit der im Browser erfassten Zeigerbewegung vergleicht. Das Ergebnis wird in Pixel pro Zoll ausgedrückt, derselben Einheit, die üblicherweise verwendet wird, wenn man über Maus DPI oder CPI spricht.',
    },
    {
      type: 'paragraph',
      html: 'Der Test ist bewusst lokal und einfach: Halten Sie das Aufnahmeziel gedrückt, bewegen Sie die Maus genau um die ausgewählte physische Distanz nach rechts und lassen Sie los. Das Tool sammelt native Bewegungsdeltas, anstatt ein Polling Rate Skript oder einen generischen Maustest zu verwenden. Da die Berechnung in Ihrem Browser läuft, sind kein Treiberdownload, Konto oder Cloud Upload erforderlich.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wichtige Testbedingung',
      html: 'Für eine saubere DPI Messung deaktivieren Sie die Zeigerbeschleunigung des Betriebssystems und die Beschleunigungskurven des Herstellers. Wenn die Beschleunigung aktiviert bleibt, beschreibt das Ergebnis Ihr aktuelles Zeigerverhalten und nicht die reine Sensoreinstellung.',
    },
    { type: 'title', text: 'Wie die echte DPI Berechnung funktioniert', level: 3 },
    {
      type: 'paragraph',
      html: 'DPI bedeutet Punkte pro Zoll. Im Mauskontext werden DPI und CPI oft austauschbar verwendet, um zu beschreiben, wie viele Zählwerte oder Zeigerpixel erzeugt werden, wenn die Maus einen physischen Zoll zurücklegt. Dieser Analysator zeichnet die horizontale Bewegung während eines kontrollierten Durchlaufs auf, rechnet die gewählte Distanz in Zoll um und teilt dann die erfassten Pixel durch die Zoll. Wenn die Maus beispielsweise 3200 korrigierte Pixel über 2 Zoll meldet, beträgt der gemessene Wert ungefähr 1600 DPI.',
    },
    {
      type: 'list',
      items: [
        'Wählen Sie eine kurze Referenz wie 10 mm für sehr hohe DPI oder eine längere Referenz für niedrige DPI.',
        'Halten Sie die zentrale Aufnahmesteuerung gedrückt, damit der Browser die Bewegung nur während des Durchlaufs aufzeichnet.',
        'Bewegen Sie sich physisch nach rechts und halten Sie den Pfad so gerade wie möglich.',
        'Lassen Sie an der echten physischen Markierung los und lesen Sie die berechneten DPI ab.',
        'Wiederholen Sie den Vorgang mehrmals und mitteln Sie konsistente Durchläufe, anstatt sich auf einen einzigen Durchlauf zu verlassen.',
      ],
    },
    {
      type: 'table',
      headers: ['Erfasste Bewegung', 'Physische Distanz', 'Gemessene DPI'],
      rows: [
        ['800 px', '1.00 in', '800 DPI'],
        ['1350 px', '85.6 mm Kreditkartenbreite', '401 DPI'],
        ['3150 px', '50.0 mm', '1600 DPI'],
        ['6300 px', '100.0 mm', '1600 DPI'],
      ],
    },
    {
      type: 'tip',
      title: 'Sauberen Strich ausführen',
      html: 'Ein einzelner horizontaler Strich ist wichtiger als eine lange Distanz. Verwenden Sie für sehr hohe DPI die 5 mm oder 10 mm Voreinstellung: Sie hält die Bewegung klein genug, um innerhalb des Bildschirms zu bleiben, und gibt dem Rechner dennoch eine bekannte physische Referenz. Der Fortschrittsbalken ist nur ein Eingangssignalmesser; das Lineal oder die Karte auf dem Schreibtisch ist der Stopppunkt.',
    },
    { type: 'title', text: 'Warum gemessene DPI von beworbenen DPI abweichen können', level: 3 },
    {
      type: 'paragraph',
      html: 'Beworbene DPI sind oft eine wählbare Firmware Stufe, kein laborzertifizierter Wert für jede Oberfläche und jedes Gerät. Zwei Mäuse, die auf dieselben nominalen DPI eingestellt sind, können sich unterschiedlich anfühlen, wenn ihre Sensoren, Firmware Skalierung, Gleiterhöhe, Oberflächentextur, Abhebeverhalten oder Betriebssystemeinstellungen abweichen. Kleine Abweichungen sind normal; große Abweichungen bedeuten meist, dass der Testaufbau oder der Softwarepfad die Messung beeinflusst.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Nominale DPI',
          description: 'Der in der Maussoftware angezeigte oder auf der Produktseite aufgedruckte Wert. Nützlich als Ausgangspunkt, aber kein Beweis für die tatsächliche Bewegungsausgabe.',
          points: ['Leicht ablesbar', 'Kann Firmware Skalierung verbergen', 'Variiert je nach Profil'],
        },
        {
          title: 'Gemessene DPI',
          description: 'Der aus physischer Bewegung und erfasster Zeigerbewegung berechnete Wert. Am besten geeignet, um eine Maus an eine andere anzugleichen.',
          highlight: true,
          points: ['Praktisch und wiederholbar', 'Empfindlich gegenüber Handgenauigkeit', 'Zeigt echtes Einrichtungsverhalten'],
        },
        {
          title: 'Empfindlichkeit im Spiel',
          description: 'Die endgültige Kamera- oder Cursor Reaktion, nachdem das Spiel die Mauseingabe mit seinem eigenen Empfindlichkeitswert multipliziert hat.',
          points: ['Was Sie tatsächlich fühlen', 'Spielspezifisch', 'Keine Sensormessung'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Vorteile und Nachteile der browserbasierten DPI Messung',
      items: [
        { pro: 'Keine Treiberinstallation erforderlich', con: 'Der Browser sieht verarbeitete Zeigerbewegung, nicht das elektrische Sensorsignal' },
        { pro: 'Gut zum schnellen Vergleichen von Mäusen und Profilen', con: 'Beschleunigungseinstellungen können das Ergebnis verfälschen, wenn sie aktiviert bleiben' },
        { pro: 'Funktioniert mit gängigen physischen Referenzen', con: 'Handausrichtung und Schreibtischmarkierungen beeinflussen die Wiederholbarkeit' },
      ],
    },
    { type: 'title', text: 'Windows, macOS und Maussoftware vorbereiten', level: 3 },
    {
      type: 'paragraph',
      html: 'Machen Sie den Eingabepfad so neutral wie möglich, bevor Sie einen DPI Messer verwenden. Deaktivieren Sie unter Windows Zeigerbeschleunigung verbessern, wenn Sie rohes Verhalten wünschen. Deaktivieren Sie in der Herstellersoftware Winkelkorrektur, Beschleunigung, Ripple Control, Glättung oder oberflächenspezifische Hilfen, es sei denn, Sie möchten diese bewusst messen. Unter macOS ist die Zeigerbeschleunigung Teil des normalen Cursor Pfads, daher sollte der Wert als praktisches Systemergebnis und nicht als reines Sensormessergebnis betrachtet werden.',
    },
    {
      type: 'table',
      headers: ['Einstellung', 'Empfohlen für rohe DPI', 'Grund'],
      rows: [
        ['Zeigerbeschleunigung', 'Aus', 'Beschleunigung verändert die Bewegungsausgabe abhängig von der Geschwindigkeit'],
        ['Maussoftware DPI Stufe', 'Eine feste Stufe', 'Verhindert versehentliche Profilwechsel während des Tests'],
        ['Winkelkorrektur', 'Aus', 'Kann diagonale Bewegungen verändern und die natürliche Sensorausgabe maskieren'],
        ['Betriebssystemskalierung', 'Normal lassen, Tool korrigiert mit devicePixelRatio', 'Der Analysator neutralisiert Browser Zoom und Bildschirmpixelverhältnis in seiner Berechnung'],
        ['Spiel Overlays oder Makros', 'Aus', 'Zusätzliche Software kann Eingaben abfangen und Durchläufe inkonsistent machen'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:target',
      title: 'Zwei Mäuse angleichen',
      html: 'Messen Sie die alte Maus dreimal, notieren Sie den Durchschnitt und passen Sie dann die DPI Stufe der neuen Maus an, bis ihr gemessener Wert nahe liegt. Dies ist oft nützlicher, als die Zahl von einer Hersteller App in eine andere zu kopieren, da die tatsächliche Sensorausgabe abweichen kann.',
    },
    { type: 'title', text: 'Die richtige physische Referenz wählen', level: 3 },
    {
      type: 'paragraph',
      html: 'Die Oberfläche enthält kurze Referenzen für hohe DPI und längere Referenzen für niedrigere DPI. Verwenden Sie 5 oder 10 mm, wenn Ihr Zeiger den Bildschirm mit winziger Handbewegung durchquert. Verwenden Sie 1 Zoll, 50 mm oder die 85.6 mm Kartenbreite, wenn die Maus näher an gängigen Desktop- oder Taktik Shooter Werten konfiguriert ist.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '25.4', label: 'Millimeter in einem Zoll' },
        { value: '85.6', label: 'Millimeter in einer üblichen Kreditkartenbreite' },
        { value: '3+', label: 'wiederholte Durchläufe empfohlen, bevor man einem Profil vertraut' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'DPI', definition: 'Punkte pro Zoll, üblicherweise verwendet, um die Zeigerbewegung zu beschreiben, die durch einen Zoll Mausbewegung erzeugt wird.' },
        { term: 'CPI', definition: 'Zählwerte pro Zoll, ein sensororientierter Begriff, der für Mäuse oft technisch genauer ist.' },
        { term: 'Beschleunigung', definition: 'Eine Einstellung oder Kurve, die die Zeigerausgabe abhängig von der Bewegungsgeschwindigkeit verändert.' },
        { term: 'devicePixelRatio', definition: 'Das Browser Verhältnis zwischen CSS Pixeln und physischen Bildschirmpixeln, hier verwendet, um Zoom- und Anzeigeskalierungseffekte zu normalisieren.' },
        { term: 'Winkelkorrektur', definition: 'Firmware- oder Softwarekorrektur, die Bewegungen begradigt, manchmal nützlich zum Zeichnen, aber von vielen Wettkampfspielern abgelehnt.' },
      ],
    },
    { type: 'title', text: 'Den Beschleunigungsindikator lesen', level: 3 },
    {
      type: 'paragraph',
      html: 'Der Beschleunigungsindikator ist kein Laborbeweis für die Betriebssystemkurve. Es ist eine praktische Warnung, die auf der Variation der Bewegungsgeschwindigkeit während des erfassten Durchlaufs basiert. Wenn langsame und schnelle Durchläufe sehr unterschiedliche DPI Werte liefern, können Beschleunigung, Glättung, Oberflächenverhalten oder inkonsistente Handbewegung beteiligt sein. Eine gute rohe Einrichtung sollte über mehrere Durchläufe ähnliche gemessene DPI liefern, wenn die physische Distanz gleich ist.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Wenn das Ergebnis stark schwankt',
      html: 'Wenn ein Durchlauf 780 DPI und der nächste 950 DPI bei gleicher Distanz anzeigt, geben Sie nicht sofort der Maus die Schuld. Überprüfen Sie die Beschleunigungseinstellungen, erhöhen Sie die Testdistanz, halten Sie den Mauspfad horizontal und stellen Sie sicher, dass der Zeiger während des Durchlaufs nicht an den Bildschirmrand stößt.',
    },
    {
      type: 'summary',
      title: 'Checkliste für zuverlässige DPI Tests',
      items: [
        'Verwenden Sie eine gemessene physische Referenz, vorzugsweise 100 mm oder länger.',
        'Bewegen Sie sich horizontal nach rechts und stoppen Sie exakt an der Markierung.',
        'Deaktivieren Sie die Beschleunigung für Rohprofil Vergleiche.',
        'Führen Sie mindestens drei Durchläufe durch und vergleichen Sie die Streuung.',
        'Verwenden Sie gemessene DPI zum Angleichen von Mäusen, nicht nur beworbene DPI Etiketten.',
      ],
    },
    {
      type: 'message',
      title: 'Hinweis zum Datenschutz',
      html: 'Dieser Mausbeschleunigungstest und die DPI Berechnung laufen lokal im Browser. Das Tool benötigt keinen Treiberzugriff, keine Geräteseriennummern und keine hochgeladenen Eingabeprotokolle.',
    },
  ],
  ui: {
    badge: 'Echtes DPI Labor',
    referenceLabel: 'Referenz',
    referenceValue: '5 mm',
    ultraDpiPreset: '5 mm',
    highDpiPreset: '10 mm',
    balancedPreset: '50 mm',
    inchPreset: '1 in',
    cardPreset: 'Karte',
    lineStart: 'Start',
    holdButton: 'Halten und die gewählte Distanz bewegen',
    holdHint: 'Verwenden Sie ein echtes Lineal/eine Karte auf dem Schreibtisch. Nicht anhalten, weil der Balken sich füllt.',
    progressLabel: 'Eingangssignal',
    activeHint: 'Verfolge Bewegung',
    dpiLabel: 'Gemessene DPI',
    pixelsLabel: 'Korrigierte Bewegung',
    distanceReadout: 'Physische Distanz',
    ratioLabel: 'Pixelverhältnis',
    initialDpiValue: '0',
    initialPixelsValue: '0 px',
    initialRatioValue: '0 px/in',
    initialSamplesValue: '0',
    initialAccelerationValue: '-',
    pixelUnit: 'px',
    pixelsPerInchUnit: 'px/in',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    statusReady: 'Bereit zur Aufnahme',
    statusTracking: 'Verfolge Bewegung...',
    statusDone: 'Messung abgeschlossen',
    reset: 'Zurücksetzen',
    accelerationTitle: 'Beschleunigungssignal',
    accelerationHint: 'Bei langsamer und schneller Geschwindigkeit wiederholen, um die Konsistenz zu vergleichen.',
    accelerationLow: 'stabil',
    accelerationMedium: 'variabel',
    accelerationHigh: 'hohe Drift',
    sampleCount: 'Abtastungen',
  },
};
