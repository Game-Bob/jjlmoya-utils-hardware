import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseScrollTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mausrad-test';
const title = 'Mausrad Test';
const description = 'Diagnostizieren Sie Mausrad-Aussetzer, Rücksprünge, inkonsistente Scrollrichtung und schwache Encoder-Signale mit einem lokalen browserbasierten Mausrad-Test.';

const faqData = [
  {
    question: 'Was erkennt ein Mausrad-Test?',
    answer: 'Ein Mausrad-Test zeichnet Radereignisse auf und sucht nach instabilen Richtungswechseln, schwachen winzigen Deltas und inkonsistentem Scrollen. Diese Symptome treten häufig auf, wenn der Radencoder verschmutzt, abgenutzt, falsch ausgerichtet oder elektronisch gestört ist.',
  },
  {
    question: 'Was ist ein Rücksprung beim Scrollen?',
    answer: 'Ein Rücksprung tritt auf, wenn Sie in eine Richtung scrollen, der Computer jedoch ein kurzes Ereignis in die entgegengesetzte Richtung empfängt. Wiederholt sich dies bei gleichmäßigem Scrollen, ist dies ein starkes Zeichen für Encoder-Prellen oder Verschmutzung.',
  },
  {
    question: 'Funktioniert dieser Test mit Touchpads?',
    answer: 'Ja, aber das Ergebnis ist am aussagekräftigsten für physische Mausräder. Touchpads und sanfte Scrollräder erzeugen viele kleine Deltas, daher hilft die Empfindlichkeitssteuerung, beabsichtigte feine Bewegungen von verdächtigem Jitter zu trennen.',
  },
  {
    question: 'Lädt der Test meine Mausdaten hoch?',
    answer: 'Nein. Die Berechnung läuft lokal in Ihrem Browser. Das Tool verwendet nur Radereignisse, während sich der Mauszeiger im Erfassungsbereich befindet.',
  },
];

const howToData = [
  {
    name: 'Platzieren Sie den Zeiger über dem Erfassungsfeld',
    text: 'Bewegen Sie den Cursor in den Scroll-Laborbereich, damit die Seite Radereignisse erfassen kann, ohne das umgebende Dokument zu verschieben.',
  },
  {
    name: 'Scrollen Sie gleichmäßig in eine Richtung',
    text: 'Testen Sie jeweils eine Richtung: Rollen Sie langsam über mehrere Klicks nach oben, setzen Sie zurück oder pausieren Sie, dann testen Sie separat nach unten. Schnelle absichtliche Richtungswechsel können falsche Rücksprungwerte erzeugen.',
  },
  {
    name: 'Achten Sie auf Rücksprünge',
    text: 'Wenn der Umkehrzähler steigt, während Ihr Finger sich noch in eine Richtung bewegt, wiederholen Sie dieselbe Bewegung, um das Muster zu bestätigen.',
  },
  {
    name: 'Stimmen Sie die Empfindlichkeit ab',
    text: 'Erhöhen Sie die Empfindlichkeit für sanfte Touchpads oder senken Sie sie für strenge mechanische Radtests. Die Stabilitätsbewertung wird sofort aktualisiert.',
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

export const content: ToolLocaleContent<MouseScrollTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Mausrad Test: Radaussetzer und Rücksprünge finden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein defektes Mausrad fällt selten auf einmal aus. Es beginnt meist mit kleinen Symptomen: eine Rastung scrollt in die falsche Richtung, die Seite springt nach oben während Sie nach unten scrollen, oder das Rad fühlt sich normal an, aber der Browser empfängt inkonsistente Ereignisse. Dieser Mausrad-Test zeichnet das Radsignal auf, das den Browser erreicht, und hebt die diagnostisch relevanten Muster hervor.',
    },
    {
      type: 'paragraph',
      html: 'Das Ziel ist nicht zu messen, wie weit sich eine Seite bewegt hat. Das nützliche Signal ist die <strong>Richtungskonsistenz</strong>. Wenn Sie ein mechanisches Rad gleichmäßig nach unten drehen, sollte der Ereignisstrom in dieser Richtung bleiben. Kurze Gegensignale in einem engen Zeitfenster sind verdächtig, da sie dem Verhalten verschmutzter oder abgenutzter Scroll-Encoder entsprechen.',
    },
    {
      type: 'title',
      text: 'Was das Tool misst',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Gesamte Radpulse, die im Testfeld erfasst wurden',
        'Rücksprünge: schnelle Vorzeichenwechsel, während die vorherige Richtung noch aktuell ist',
        'Längster sauberer Lauf: wie viele aufeinanderfolgende Ereignisse in einer konsistenten Richtung blieben',
        'Letztes Delta: Rohrichtung und Größe des jüngsten Radereignisses',
        'Vertikale versus horizontale Aktivität, nützlich für Kippräder und Touchpads',
      ],
    },
    {
      type: 'table',
      headers: ['Signal', 'Gesundes Muster', 'Verdächtiges Muster'],
      rows: [
        ['Vertikales Rad', 'Lange Folgen von Auf- oder Ab-Ereignissen bei gleichmäßigem Scrollen', 'Wechselnde Auf/Ab-Ereignisse, während Ihr Finger eine Richtung beibehält'],
        ['Horizontale Neigung', 'Links- oder Rechtsereignisse nur bei Verwendung von Neige- oder horizontalen Gesten', 'Unerwartete seitliche Bewegung bei normaler vertikaler Radnutzung'],
        ['Kleine Deltas', 'Gelegentlich kleine Werte bei sanften Rädern oder Touchpads', 'Hoher Anteil winziger instabiler Werte bei einem mechanischen Rastrad'],
        ['Stabilitätsbewertung', 'Bleibt über mehrere bewusste Durchläufe hoch', 'Fällt wiederholt, weil Umkehrungen im gleichen Richtungstest auftreten'],
      ],
    },
    {
      type: 'title',
      text: 'Häufige Ursachen für Mausrad-Aussetzer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die meisten Mausräder verwenden einen Encoder, der Drehung in Pulse umwandelt. Staub, Oxidation, abgenutzte Kontakte, eine lockere Radachse, Firmware-Filterprobleme oder ein beschädigtes Kabel können diese Pulse inkonsistent machen. Wenn der Encoder kurzzeitig die falsche Phase meldet, kann das Betriebssystem ein Radereignis in entgegengesetzter Richtung empfangen, obwohl sich das Rad in der ursprünglichen Richtung weiterbewegt hat.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Wahrscheinliche Ursache', 'Nächster Check'],
      rows: [
        ['Seite springt beim Runterscrollen nach oben', 'Encoder-Prellen oder Schmutz im Radmechanismus', 'Führen Sie einen langsamen Abwärtsdurchlauf durch und beobachten Sie den Umkehrzähler'],
        ['Nur eine Anwendung scrollt schlecht', 'Anwendungsglättung, Zoom-Modus oder benutzerdefinierte Mausverknüpfung', 'Testen Sie im Browser und vergleichen Sie mit einer anderen App'],
        ['Rad funktioniert nach Ausblasen, fällt dann wieder aus', 'Vorübergehende Schmutzverschiebung oder abgenutzte Encoder-Kontakte', 'Nach einigen Minuten normaler Nutzung wiederholen'],
        ['Unerwartete horizontale Bewegung erscheint', 'Kipprad-Rauschen, Touchpad-Geste oder Treiberzuordnung', 'Überprüfen Sie die horizontale Achsanzeige während vertikalen Scrollens'],
        ['Kabellose Maus scrollt unregelmäßig', 'Schwache Batterie, Empfängerentfernung oder Störungen', 'Mit frischer Batterie und nahem Empfänger erneut testen'],
      ],
    },
    {
      type: 'title',
      text: 'Zuverlässig testen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Platzieren Sie den Zeiger vor dem Scrollen im Erfassungsfeld, damit die Seite normale Seitenbewegungen verhindern kann',
        'Testen Sie jeweils eine Richtung: scrollen Sie langsam 10 bis 20 Rastungen nach oben ohne Richtungswechsel',
        'Zurücksetzen oder pausieren, dann denselben Einrichtungs-Durchlauf nach unten wiederholen',
        'Wechseln Sie nicht schnell zwischen auf und ab, da absichtliche schnelle Richtungswechsel wie Rücksprünge aussehen können',
        'Wenn Umkehrungen auftreten, wiederholen Sie die fehlerhafte Richtung mehrmals, um die Reproduzierbarkeit zu bestätigen',
        'Vergleichen Sie mit einer anderen Maus am selben Computer, wenn Sie Hardware von Software trennen müssen',
      ],
    },
    {
      type: 'title',
      text: 'Die Bewertung interpretieren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Stabilitätsbewertung ist eine schnelle Zusammenfassung. Eine hohe Punktzahl bedeutet, dass das Tool konsistente Richtung und wenige winzige unsichere Deltas sah. Eine niedrige Punktzahl beweist nicht automatisch, dass die Maus defekt ist, besonders bei Touchpads oder hochauflösenden sanften Rädern, aber wiederholte Rücksprünge während eines langsamen Einrichtungstests sind starke Hinweise auf ein echtes Radproblem.',
    },
    {
      type: 'table',
      headers: ['Ergebnis', 'Bedeutung', 'Empfohlene Maßnahme'],
      rows: [
        ['Keine Umkehrungen und lange saubere Läufe', 'Das Radsignal erscheint konsistent', 'Nur weiter testen, wenn Symptome im realen Einsatz auftreten'],
        ['Eine isolierte Umkehrung', 'Könnte versehentlicher Richtungswechsel oder ein Störereignis sein', 'Dieselbe Richtung langsam wiederholen'],
        ['Mehrere Umkehrungen im selben Durchlauf', 'Wahrscheinlich Encoder-Prellen, Schmutz oder Radverschleiß', 'Auf anderem Computer erneut testen und Ergebnis dokumentieren'],
        ['Viele Jitter-Ereignisse, aber keine Umkehrungen', 'Empfindlichkeit möglicherweise zu niedrig für den Gerätetyp', 'Empfindlichkeit für Touchpad oder Smooth-Scroll-Geräte erhöhen'],
        ['Horizontale Ereignisse bei vertikaler Radnutzung', 'Mögliches Kipprad-Rauschen oder Treiberzuordnungsrauschen', 'Benutzerdefinierte Maussoftware deaktivieren und erneut testen'],
      ],
    },
    {
      type: 'title',
      text: 'Mechanisches Rad versus Touchpad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ein mechanisches Rastrad erzeugt normalerweise klare Richtungsschritte. Ein Touchpad oder ein frei drehbares Rad kann viele kleine Deltas erzeugen, da das Betriebssystem sanftes Scrollen anwendet. Deshalb enthält dieses Tool eine Empfindlichkeitssteuerung: Erhöhen ignoriert winzige Bewegungen und lässt den Test sich auf Richtungsänderungen konzentrieren, die groß genug sind, um relevant zu sein.',
    },
    {
      type: 'title',
      text: 'Was Sie vor dem Austausch der Maus versuchen sollten',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Testen Sie in einem anderen Browser, um einen seitenspezifischen Rad-Handler auszuschließen',
        'Deaktivieren Sie herstellereigene Maussoftware, Scroll-Beschleunigung oder Makro-Ebenen während der Diagnose',
        'Verwenden Sie bei kabellosen Mäusen eine frische Batterie und bringen Sie den Empfänger näher',
        'Reinigen Sie die Umgebung des Rads mit Druckluft, während die Maus ausgesteckt oder ausgeschaltet ist',
        'Wenn die Maus unter Garantie steht, dokumentieren Sie das wiederholte Umkehrmuster als Nachweis',
      ],
    },
    {
      type: 'paragraph',
      html: 'Browserbasierte Tests können den Encoder nicht elektrisch prüfen, aber sie können exakt zeigen, was Ihre normale Software empfängt. Wenn der Browser während eines sorgfältigen Einrichtungs-Scrollens Radereignisse in falscher Richtung empfängt, können andere Anwendungen sie ebenfalls empfangen.',
    },
  ],
  ui: {
    badge: 'Radsignal-Labor',
    captureTitle: 'Scrollen Sie im Signalfeld',
    captureHint: 'Verwenden Sie gleichmäßige Einrichtungs-Raddurchläufe, um Rücksprünge aufzudecken',
    focusLockTitle: 'Diese Scroll-Zone aktivieren',
    focusLockText: 'Klicken Sie auf diese Zone und scrollen Sie hier. Die Seite bewegt sich nicht, während diese Zone aktiv ist.',
    stabilityScore: 'Stabilitätsbewertung',
    statusIdle: 'Scrollen Sie über das Feld, um die Radkonsistenz zu messen',
    statusClean: 'Die Radrichtung ist in den erfassten Proben stabil',
    statusWarning: 'Rücksprünge beim letzten Scrollen erkannt',
    statusMixed: 'Viele winzige Deltas erkannt; passen Sie die Empfindlichkeit für dieses Gerät an',
    directionNote: 'Testen Sie jeweils eine Richtung. Schnelles Wechseln zwischen auf und ab kann falsche Rücksprungwerte erzeugen.',
    totalTicks: 'Pulse',
    reversals: 'Umkehrungen',
    longestRun: 'Bester Lauf',
    lastDelta: 'Letztes Delta',
    verticalAxis: 'Vertikal',
    horizontalAxis: 'Horizontal',
    dominantDirection: 'Letzte Richtung',
    upward: 'Auf',
    downward: 'Ab',
    leftward: 'Links',
    rightward: 'Rechts',
    noDirection: 'Keine Bewegung',
    noDataValue: '-',
    sensitivityLabel: 'Jitter-Empfindlichkeit',
    sensitivityUnit: 'Delta',
    reset: 'Zurücksetzen',
    logTitle: 'Radereignis-Protokoll',
    emptyLog: 'Scrollen Sie mit langsamer, gleichmäßiger Radbewegung über das Feld.',
    cleanEvent: 'sauber',
    reversalEvent: 'Rücksprung',
    jitterEvent: 'winziges Delta',
  },
};
