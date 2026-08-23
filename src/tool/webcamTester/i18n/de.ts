import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebcamTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'privater-webcam-kamera-test-online';
const title = 'Privater Webcam Test';
const description = 'Überprüfe Kamerazugriff, Live-Vorschau, Auflösung, Seitenverhältnis, Ausrichtung und Bildwiederholrate vor deinem Meeting.';

const faq = [
  {
    question: 'Zeichnet dieser Webcam Test mein Video auf oder lädt es hoch?',
    answer: 'Nein. Die Seite fordert nur einen lokalen Live-Videostream für die Vorschau an und verlangt keinen Mikrofonzugriff. Es werden keine Aufnahmen oder Schnappschüsse erstellt oder übertragen. Beim Stoppen des Tests werden alle aktiven Spuren geschlossen.',
  },
  {
    question: 'Warum fragt der Browser nach der Kamera-Berechtigung?',
    answer: 'Webseiten können ohne ausdrückliche Erlaubnis nicht auf Kameras zugreifen. Die Eingabeaufforderung ermöglicht dir zu entscheiden, ob diese Seite ein temporäres lokales Signal empfangen darf. Du kannst den Zugriff jederzeit in den Browsereinstellungen widerrufen.',
  },
  {
    question: 'Was ist der Unterschied zwischen konfigurierten und gemessenen FPS?',
    answer: 'Konfigurierte FPS entsprechen dem für diese Vorschau angeforderten Zielwert. Gemessene FPS schätzen ab, wie viele Bilder tatsächlich eintreffen, während der Tab sichtbar ist. Schlechte Beleuchtung oder hohe Systemlast können die gemessene Rate reduzieren.',
  },
  {
    question: 'Warum kann die verfügbare Auflösung von den Kameraangaben abweichen?',
    answer: 'Betriebssystem, Kameratreiber und Browser wählen gemeinsam einen kompatiblen Modus. Andere aktive Programme, virtuelle Kameras oder Energiesparmodi können zu einer geringeren Auflösung führen.',
  },
];

const howTo = [
  {
    name: 'Öffne die private Vorschau',
    text: 'Klicke auf Kamera öffnen und erlaube den Videozugriff im Browser. Audio wird nicht angefordert.',
  },
  {
    name: 'Prüfe Bildausschnitt und Schärfe',
    text: 'Überprüfe Fokus, Belichtung und Hintergrund in der Live-Vorschau. Nutze bei Bedarf die Spiegelansicht oder die Ausrichtungshilfe.',
  },
  {
    name: 'Kontrolliere den Videostream',
    text: 'Lies Auflösung, Seitenverhältnis, Ausrichtung, konfigurierte FPS und Bildausgabe ab. Halte den Tab sichtbar, während sich die Bildrate stabilisiert.',
  },
  {
    name: 'Kamera wechseln oder beenden',
    text: 'Wähle eine andere verfügbare Kamera zum Vergleich oder klicke auf Kamera stoppen, um alle Spuren zu schließen.',
  },
];

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

export const content: ToolLocaleContent<WebcamTesterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufige Fragen zum Webcam Test',
  faq,
  bibliographyTitle: 'Quellen und Leitfäden zur Einrichtung von Kameras',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Teste deine Webcam vor dem Videocall',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nutze die lokale Vorschau, um wichtige Fragen vor deinem Gespräch zu klären: Funktioniert die Kamera, ist das richtige Gerät ausgewählt, ist dein Gesicht gut ausgeleuchtet und läuft das Video flüssig? Teste unter denselben Bedingungen wie bei deiner Konferenz.',
    },
    {
      type: 'list',
      items: [
        'Wähle die passende Kamera aus, falls mehrere Geräte angeschlossen sind',
        'Positioniere die Kamera auf Augenhöhe und halte dein Gesicht im oberen Drittel',
        'Beleuchte dein Gesicht von vorne statt mit hellem Gegenlicht zu sitzen',
        'Schließe andere Meeting-Apps, falls die Kamera blockiert erscheint',
        'Überprüfe Auflösung und Bildwiederholrate direkt im Vorschaubild',
      ],
    },
    {
      type: 'title',
      text: 'Lösungen für schwarze oder nicht verfügbare Kameras',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Symptom', 'Mögliche Ursache', 'Empfohlene Maßnahme'],
      rows: [
        ['Zugriff verweigert', 'Kamerazugriff ist im Browser oder System blockiert', 'Erlaube den Zugriff in den Einstellungen und lade die Seite neu'],
        ['Schwarzes Bild oder belegt', 'Eine andere Meeting-App nutzt die Kamera', 'Schließe Zoom, Teams oder Meet und versuche es erneut'],
        ['Falsche Kamera', 'Eine virtuelle Kamera oder ein Sekundärgerät ist aktiv', 'Wähle im Dropdown-Menü eine andere Kameraquelle aus'],
        ['Dunkles oder körniges Bild', 'Zu wenig Frontlicht oder starkes Gegenlicht', 'Richte dich zum Fenster aus oder nutze eine sanfte Lichtquelle'],
        ['Ruckelndes Video', 'Wenig Licht oder hohe Rechnerauslastung', 'Sorge für mehr Licht und schließe rechenintensive Programme'],
      ],
    },
    {
      type: 'title',
      text: 'Auflösung und Bildrate richtig verstehen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eine Auflösung von 1280 × 720 reicht für reguläre Gespräche völlig aus. 1920 × 1080 bietet höhere Schärfe, erfordert jedoch stabile Verbindungen. Konfigurierte FPS geben den Zielwert an, während gemessene FPS die tatsächliche Bildabfolge ermitteln.',
    },
    {
      type: 'tip',
      title: 'Realistische Testbedingungen schaffen',
      html: 'Führe den Test zur gleichen Tageszeit mit gewohnter Beleuchtung durch. Da Meeting-Apps das Bild beschneiden können, empfiehlt sich vor dem Gespräch ein kurzer finaler Check in der Zielsoftware.',
    },
    {
      type: 'title',
      text: 'Bildausschnitt und optimale Ausrichtung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Platziere die Kamera etwa auf Augenhöhe und lasse etwas Abstand über dem Kopf. Achte auf Frontlicht und vermeide unruhige Hintergründe. Bei Brillenträgern hilft eine leicht seitlich versetzte Lichtquelle gegen Reflexionen.',
    },
  ],
  ui: {
    privacyNote: 'Keine Aufzeichnung · Kein Upload · Kein Audio',
    permissionHeading: 'Bereit für den Kameratest?',
    permissionBody: 'Öffne eine private Live-Vorschau zur Überprüfung von Bildqualität und Videoformat. Das Stoppen schließt alle Spuren sofort.',
    startAction: 'Kamera öffnen',
    stopAction: 'Kamera stoppen',
    retryAction: 'Erneut versuchen',
    deviceLabel: 'Kameraquelle',
    devicePlaceholder: 'Kamera auswählen',
    defaultDevice: 'Kamera',
    mirrorAction: 'Spiegelansicht',
    guideAction: 'Ausrichtungshilfe',
    stageLabel: 'Privater Webcam-Vorschaubereich',
    resolutionLabel: 'Auflösung',
    aspectLabel: 'Seitenverhältnis',
    orientationLabel: 'Ausrichtung',
    configuredFpsLabel: 'Konfigurierte FPS',
    observedFpsLabel: 'Gemessene FPS',
    frameDeliveryLabel: 'Bildausgabe',
    landscapeValue: 'Querformat',
    portraitValue: 'Hochformat',
    squareValue: 'Quadratisch',
    frameStable: 'Nahe am Zielwert',
    frameReduced: 'Unter dem Zielwert',
    frameConstrained: 'Stark reduziert',
    framePending: 'Warte auf Bilder',
    statusIdle: 'Kamera geschlossen. Öffne sie, sobald du bereit für die Vorschau bist.',
    statusStarting: 'Warte auf Freigabe und das erste Videobild',
    statusReady: 'Vorschau aktiv. Prüfe Schärfe, Licht, Bildausschnitt und Flüssigkeit.',
    statusStopped: 'Kamera gestoppt. Alle Videospuren dieses Tests wurden geschlossen.',
    statusHidden: 'Halte diesen Tab sichtbar für eine genaue Ratenmessung.',
    statusUnsupported: 'Dieser Browser unterstützt keinen Webkamera-Zugriff.',
    errorPermissionDenied: 'Zugriff verweigert. Erlaube die Kamera in den Browser-Optionen und versuche es erneut.',
    errorNoCamera: 'Keine Kamera gefunden. Schließe ein Gerät an und versuche es erneut.',
    errorInUse: 'Kamera konnte nicht gestartet werden. Schließe andere Apps und versuche es erneut.',
    errorSecureContext: 'Kamerazugriff erfordert HTTPS oder eine lokale Umgebung.',
    errorGeneric: 'Kamera konnte nicht geöffnet werden. Überprüfe Berechtigungen und Gerät.',
    limitHeading: 'Was dieser Test bestätigt',
    limitBody: 'Er bestätigt Bild und Flüssigkeit in diesem Tab. Objektivqualität oder Nachbearbeitung durch Meeting-Apps können hierbei nicht bewertet werden.',
    localOnlyLabel: 'Privater Kameracheck',
    emptyValue: 'Nicht verfügbar',
    fpsUnit: 'FPS',
  },
};
