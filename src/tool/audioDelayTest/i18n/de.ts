import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'audio-verzoggerung-test';
const title = 'Audio Verzögerungstest';
const description = 'Teste die wahrgenommene Audioverzögerung von Lautsprechern, Kopfhörern, Bluetooth-Geräten und Videosynchronisation mit einem lokalen Impulstest im Browser.';

const faq = [
  {
    question: 'Was misst dieser Audioverzögerungs-Test genau?',
    answer: 'Der optionale Mikrofonmodus schätzt das Intervall zwischen einem vom Browser geplanten Klick und dessen Erfassung durch das Mikrofon. Der manuelle Modus hilft bei der visuellen und akustischen Abstimmung nach Gehör.',
  },
  {
    question: 'Kann ich die Bluetooth-Latenz ohne Mikrofon testen?',
    answer: 'Ja. Starte die Impulssequenz, wähle Bluetooth und verschiebe den Ausrichtungsregler, bis Blitz und Klick zeitgleich erscheinen. Das Ergebnis wird als Ausrichtungskorrektur gespeichert.',
  },
  {
    question: 'Warum benötigt der Mikrofonmodus eine Berechtigung?',
    answer: 'Der Browser benötigt Zugriff auf das Mikrofon, um den Testklick nach der Übertragung über Lautsprecher oder Raumakustik zu erfassen. Die Verarbeitung erfolgt lokal im Browser.',
  },
  {
    question: 'Warum kann das Mikrofonergebnis ungenau sein?',
    answer: 'Raumreflexionen, Mikrofonverarbeitung, automatische Verstärkungsregelung und Betriebssystem-Puffer beeinflussen das Ergebnis. Betrachte den Wert als Schätzung für das aktuelle Setup.',
  },
  {
    question: 'Welchen Testmodus sollte ich wählen?',
    answer: 'Wähle Lautsprecher für Raumwiedergabe, Kabelgebundene Kopfhörer für direkte Ausgaben, Bluetooth für kabellose Geräte und Videosynchronisation für Bildschirme und Player.',
  },
  {
    question: 'Wird mein Mikrofon-Audio an einen Server gesendet?',
    answer: 'Nein. Der Mikrofonstream wird ausschließlich lokal vom Browser-Analysator ausgewertet. Es werden keine Audioaufnahmen hochgeladen.',
  },
];

const howTo = [
  {
    name: 'Wiedergabepfad auswählen',
    text: 'Wähle Lautsprecher, kabelgebundene Kopfhörer, Bluetooth oder Videosynchronisation aus.',
  },
  {
    name: 'Mit dem manuellen Impuls starten',
    text: 'Klicke auf Test starten, höre auf den kurzen Klick und beobachte den cyanfarbenen Impuls. Passe den Regler an, bis beide Signale übereinstimmen.',
  },
  {
    name: 'Mikrofonmessung bei Bedarf aktivieren',
    text: 'Klicke auf Mikrofon aktivieren, erteile die Freigabe und platziere das Mikrofon am Hörplatz.',
  },
  {
    name: 'Ergebnis als Schätzwert ablesen',
    text: 'Verwende die mittlere Verzögerung und den Konfidenzwert als Orientierung für dein Setup.',
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

export const content: ToolLocaleContent<AudioDelayTestUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Audio Verzögerungstest für Bluetooth und Videosynchronisation', level: 2 },
    {
      type: 'paragraph',
      html: 'Dieser browserbasierte Audioverzögerungs-Test hilft bei der Überprüfung des Zeitversatzes zwischen visuellem Signal und Ton auf deinem aktuellen Gerät. Er eignet sich für Bluetooth-Kopfhörer, kabellose Lautsprecher und Videosynchronisationsprüfungen.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Start ohne Mikrofonzugriff',
      badge: 'Lokal und privat',
      html: '<p>Der manuelle Impulstest funktioniert ohne Mikrofon. Beobachte den visuellen Marker und passe den Regler an, bis der Ton synchron wirkt.</p>',
    },
    {
      type: 'title',
      text: 'So testest du die Bluetooth-Audiolatenz',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Wähle Bluetooth und stelle eine angenehme Lautstärke ein.',
        'Führe die Impulssequenz im selben Browser und auf demselben Gerät aus.',
        'Vergleiche den visuellen Impuls direkt mit dem Klickgeräusch.',
        'Verschiebe den Ausrichtungsregler, bis beide Reize zeitgleich wirken.',
        'Wiederhole den Test nach Ändern von Codec, Betriebssystem oder Abstand.',
      ],
    },
    {
      type: 'table',
      headers: ['Modus', 'Empfohlen für', 'Haupteinschränkung'],
      rows: [
        ['Lautsprecher', 'Raumwiedergabe und TV-Lautsprecher', 'Raumabstand und Reflexionen beeinflussen den Signalweg.'],
        ['Kopfhörer Kabel', 'Direkter Klinkenanschluss', 'Das Mikrofon erfasst geschlossene Kopfhörer eventuell schwer.'],
        ['Bluetooth', 'Kabellose Kopfhörer und Lautsprecher', 'Codec-Pufferung variiert je nach Gerät und Anwendung.'],
        ['Videosynchronisation', 'Abstimmung von Bildschirm und Player', 'Der Videoplayer kann eigenen Bildverzögerungen hinzufügen.'],
      ],
    },
    {
      type: 'title',
      text: 'Optionale Mikrofonmessung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wenn der Mikrofonzugriff aktiviert ist, erfasst das Tool die verstreichende Zeit vom geplanten Impuls bis zum gemessenen Signalpeak. Es verwendet den Median der Stichproben zur Stabilität.',
    },
    {
      type: 'tip',
      title: 'Mikrofon am Hörplatz positionieren',
      html: 'Platzieren Sie das Mikrofon bei Lautsprechern an der gewohnten Hörposition und sorgen Sie für eine ruhige Umgebung.',
    },
    {
      type: 'title',
      text: 'Warum Browser-Audiosequenzen variieren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Audioverzögerung entsteht entlang der gesamten Signalkette aus Browser-AudioContext, Pufferung des Betriebssystems und Bluetooth-Codec.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ergebnis als Orientierung nutzen',
      badge: 'Nur Schätzwert',
      html: '<p>Nutze das Ergebnis zum Vergleichen von Setups. Es ersetzt keine professionelle Messkarte oder Herstellerspezifikation.</p>',
    },
  ],
  ui: {
    badge: 'Latenz-Observatorium',
    modeLabel: 'Wiedergabepfad',
    modeSpeakers: 'Lautsprecher',
    modeWired: 'Kabel',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Videosynchronisation',
    startTest: 'Test starten',
    stopTest: 'Test stoppen',
    enableMic: 'Mikrofon aktivieren',
    micEnabled: 'Mikrofon bereit',
    calibrationTitle: 'Ausrichtungskorrektur',
    calibrationHint: 'Bewegen Sie den Regler, bis Blitz und Klick zusammenfallen',
    calibrationEarly: 'Audio eilt vor',
    calibrationLate: 'Visuell eilt vor',
    calibrationCenter: 'Zentriert',
    visualLane: 'Visuell',
    audioLane: 'Audio',
    statusReady: 'Bereit',
    statusRunning: 'Impulssequenz läuft',
    statusWaiting: 'Warte auf Impuls',
    resultTitle: 'Aktuelle Messung',
    latencyLabel: 'Gemessene Verzögerung',
    alignmentLabel: 'Ausrichtungskorrektur',
    confidenceLabel: 'Konfidenz',
    samplesLabel: 'Messungen',
    notMeasured: 'Nicht gemessen',
    manualConfidence: 'Nur manuell',
    lowConfidence: 'Niedrige Konfidenz',
    mediumConfidence: 'Mittlere Konfidenz',
    highConfidence: 'Hohe Konfidenz',
    noMic: 'Mikrofoneingang in diesem Browser nicht verfügbar',
    permissionDenied: 'Mikrofonberechtigung wurde nicht erteilt',
    limitationTitle: 'Ergebnis als Setup-Schätzung betrachten',
    limitationText: 'Raumreflexionen, Mikrofonverarbeitung und Puffer verändern die gemessene Verzögerung. Es werden keine Daten hochgeladen.',
    copyReport: 'Bericht kopieren',
    copied: 'Kopiert',
    reset: 'Zurücksetzen',
    safety: 'Beginne mit niedriger Lautstärke. Stoppe den Test bei Verzerrungen.',
    pulse: 'SYNCHRO',
  },
};
