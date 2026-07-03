import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDoubleClickTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'maus-doppelklick-test';
const title = 'Maus Doppelklick Test';
const description =
  'Testen Sie jede Maustaste und erkennen Sie unerwünschte Doppelklicks, verschlissene Schalter und Kontaktprellen mit zeitgenauer Aufzeichnung pro Taste in Ihrem Browser.';

const faqData = [
  {
    question: 'Was ist ein Maus-Doppelklick-Problem?',
    answer:
      'Ein Doppelklick-Problem tritt auf, wenn ein physischer Tastendruck als zwei Klicks gemeldet wird. Es kann die linke Taste, die rechte Taste, den Radklick oder die Seitentasten betreffen und wird meist durch Schalterverschleiß, Kontaktprellen, Firmware-Entprellungseinstellungen oder drahtlose Signalinstabilität verursacht.',
  },
  {
    question: 'Welcher Abstand gilt als verdächtig?',
    answer:
      'Sehr kurze Abstände zwischen Klicks sind verdächtig, da menschliche Doppelklicks normalerweise mehr Zeit benötigen. Dieses Tool startet mit einem Schwellenwert von 80 ms, den Sie je nach Maus und Teststil anpassen können.',
  },
  {
    question: 'Kann ein Browser beweisen, dass der Schalter defekt ist?',
    answer:
      'Ein Browser kann den elektrischen Schalter nicht direkt prüfen, aber er kann die Klickereignisse aufzeichnen, die Ihr Betriebssystem empfängt. Wiederholte verdächtige Abstände während eines Einzelklick-Tests sind starke Hinweise auf Prellen oder unerwünschtes Doppelklicken.',
  },
  {
    question: 'Wie sollte ich richtig testen?',
    answer:
      'Klicken Sie langsam und bewusst und zielen Sie auf einzelne Tastendrücke ab. Wenn der Verdächtig-Zähler auch dann steigt, wenn Sie nicht absichtlich doppelklicken, wiederholen Sie den Test an einem anderen USB-Anschluss, einem anderen Browser und wenn möglich an einem anderen Computer.',
  },
];

const howToData = [
  {
    name: 'Erkennungsschwelle einstellen',
    text: 'Beginnen Sie mit 80 ms. Senken Sie den Wert für eine strenge Prellungserkennung oder erhöhen Sie ihn, wenn Ihr Gerät etwas breitere versehentliche Abstände erzeugt.',
  },
  {
    name: 'Wie ein normaler Einzelklick klicken',
    text: 'Drücken Sie jede Maustaste einzeln über der Mausgrafik. Klicken Sie beim ersten Durchlauf nicht absichtlich doppelt.',
  },
  {
    name: 'Verdächtig-Zähler beobachten',
    text: 'Wenn während des Einfachklickens verdächtige Ereignisse auftreten, prüfen Sie, welche visuelle Taste hervorgehoben wurde, und vergleichen Sie dies mit den kompakten Ereignischips.',
  },
  {
    name: 'Mit einem anderen Gerät vergleichen',
    text: 'Eine gesunde Maus sollte bei gleichem Schwellenwert eine hohe Punktzahl behalten. Der Vergleich von Geräten hilft, Hardwarefehler von Softwareeinstellungen zu unterscheiden.',
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

export const content: ToolLocaleContent<MouseDoubleClickTestUI> = {
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
      text: 'Maus Doppelklick Test: Tastenprellen online diagnostizieren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Eine Maus, die bei einmaligem Drücken doppelt klickt, ist nicht nur ärgerlich. Sie kann versehentlich Ordner öffnen, Drag-and-Drop-Aktionen abbrechen, in Spielen zwei Schüsse abfeuern, Browser-Tabs schließen oder Kontextmenüs erscheinen und verschwinden lassen, bevor Sie sie nutzen können. Dieser Online-Maus-Doppelklick-Test konzentriert sich auf das nützliche Diagnosesignal: <strong>den zeitlichen Abstand zwischen den von Ihrem Betriebssystem gemeldeten Tastenereignissen</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Anders als ein einfacher Klick-Zähler verfolgt dieses Tool jede Taste unabhängig: linker Klick, rechter Klick, Radklick, Browser-Zurück und Browser-Vorwärts. Das ist wichtig, denn eine Maus kann eine defekte rechte Taste haben, während die linke noch funktioniert, oder eine abgenutzte Seitentaste, die erst nach Monaten des Gamings oder der Nutzung von Produktivitäts-Shortcuts Fehlauslösungen zeigt.',
    },
    {
      type: 'title',
      text: 'Was dieser Maustasten-Test misst',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie eine Maustaste drücken, empfängt der Browser ein Pointer-Ereignis mit dem Tastencode. Das Tool speichert den letzten Zeitstempel für dieselbe physische Taste und vergleicht ihn mit dem nächsten Druck derselben Taste. Ist der Abstand kürzer als Ihr gewählter Schwellenwert, wird das Ereignis als verdächtig markiert, da ein normaler beabsichtigter zweiter Klick in der Regel länger dauert.',
    },
    {
      type: 'list',
      items: [
        'Linke Taste: nützlich zur Erkennung versehentlicher Doppelklicks beim Öffnen von Dateien, Markieren von Text oder Verschieben von Fenstern',
        'Rechte Taste: nützlich, wenn Kontextmenüs flackern, doppelt erscheinen oder sofort schließen',
        'Radklick: nützlich bei Mäusen, bei denen der Mittelklick mehrere Tabs öffnet oder nach intensiver Nutzung ausfällt',
        'Zurück- und Vorwärtstasten: nützlich für Gaming-Mäuse und Produktivitätsmäuse mit Seitenschaltern',
        'Zeitmessung pro Taste: vermeidet, einen Linksklick mit einem Rechtsklick zu vermischen und als falschen Doppelklick zu werten',
      ],
    },
    {
      type: 'title',
      text: 'Warum Mäuse anfangen doppelt zu klicken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die meisten Mäuse verwenden kleine mechanische Schalter unter jeder Taste. Wenn die Schaltkontakte schließen, kann das Metall für einen sehr kurzen Zeitraum elektrisch prellen, bevor es sich setzt. Die Maus-Firmware filtert dieses Rauschen normalerweise mit einer Entprell-Logik. Wenn der Schalter verschleißt, kann das Prellen länger, lauter oder inkonsistenter werden, sodass der Computer zwei Tastendrücke empfängt, obwohl Ihr Finger nur einen physischen Druck ausgeführt hat.',
    },
    {
      type: 'paragraph',
      html: 'Doppelklicken wird nicht immer durch dasselbe verursacht. Es kann mechanischer Schalterverschleiß, zu aggressiv eingestellte Firmware-Entprellung, Staub oder Oxidation im Schalter, drahtlose Paketinstabilität, Makro-Software, ein beschädigtes Kabel oder eine Betriebssystemeinstellung sein, die versehentliche Doppelklicks auffälliger macht.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Wahrscheinliche Ursache', 'Was zu testen ist'],
      rows: [
        ['Ein Klick öffnet Dateien, als wäre doppelt geklickt worden', 'Linkes Schalterprellen oder Verwechslung der Doppelklick-Geschwindigkeit im Betriebssystem', 'Linke Taste mit langsamen Einzeldrücken bei 80 ms testen'],
        ['Rechtsklick-Menü flackert oder schließt sich', 'Rechtes Schalterprellen oder Software, die Kontextmenüs abfängt', 'Rechte Taste testen und Maus-Dienstprogramme vorübergehend deaktivieren'],
        ['Mittelklick öffnet zwei Tabs', 'Radschalter-Verschleiß', 'Radklick mit bewussten Einzeldrücken testen'],
        ['Zurück-Taste springt zwei Seiten zurück', 'Seitenschalter-Prellen oder Browser-Shortcut-Wiederholung', 'Zurück und Vorwärts separat testen'],
        ['Tritt nur drahtlos auf', 'Drahtlose Interferenz, niedriger Akku oder Empfängerplatzierung', 'Kabelgebunden erneut testen oder Empfänger näher platzieren'],
      ],
    },
    {
      type: 'title',
      text: 'Den richtigen Entprell-Schwellenwert wählen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Schwellenwert ist der maximale Abstand, den dieses Tool noch als verdächtig betrachtet. Der Standardwert <strong>80 ms</strong> ist ein praktischer Mittelweg: streng genug, um viele unerwünschte doppelte Ereignisse zu erkennen, aber nicht so aggressiv, dass jeder normale absichtliche Doppelklick zu einem Hardwarefehler wird.',
    },
    {
      type: 'table',
      headers: ['Schwellenwert', 'Am besten geeignet für', 'Wie zu interpretieren'],
      rows: [
        ['30-50 ms', 'Strenge elektrische Prellungsprüfungen', 'Gut zur Bestätigung sehr schneller doppelter Ereignisse von einem verschlissenen Schalter'],
        ['60-90 ms', 'Allgemeine Maus-Doppelklick-Diagnose', 'Bester Standardbereich für die meisten Gaming- und Büromäuse'],
        ['100-140 ms', 'Intermittierende verschlissene Schalter', 'Nützlich, wenn die Maus gelegentlich breitere versehentliche Abstände erzeugt'],
        ['150-180 ms', 'Stresstest und schwache Schalter', 'Vorsichtig verwenden, da schnelle absichtliche Doppelklicks in diesen Bereich fallen können'],
      ],
    },
    {
      type: 'title',
      text: 'So führen Sie einen zuverlässigen Test durch',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Klicken Sie beim ersten Durchlauf nicht absichtlich doppelt. Drücken Sie jede Maustaste langsam und bewusst, eine Taste nach der anderen, während sich der Cursor über der Mausgrafik befindet. Ein gesunder Schalter sollte stabile Einzelereignisse erzeugen. Wenn der Verdächtig-Zähler bei langsamen Einzeldrücken steigt, wiederholen Sie denselben Tastentest mehrmals, um das Muster zu bestätigen.',
    },
    {
      type: 'list',
      items: [
        'Testen Sie die linke Taste mit 20 bis 30 langsamen Drücken, dann die rechte, dann das Rad, dann die Seitentasten',
        'Ziehen Sie die Maus nicht während des Prell-Tests, da Bewegung das Zeitergebnis beeinträchtigen kann',
        'Wenn eine Taste verdächtige Ereignisse zeigt, wiederholen Sie denselben Test nach dem Wechsel des USB-Anschlusses oder Browsers',
        'Testen Sie drahtlose Mäuse mit einer frischen Batterie und dem Empfänger nahe an der Maus',
        'Wenn nur eine Taste wiederholt ausfällt, liegt der Fehler wahrscheinlich an diesem spezifischen Schalter und nicht am gesamten Gerät',
      ],
    },
    {
      type: 'title',
      text: 'Ergebnisse interpretieren',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Ergebnis', 'Bedeutung', 'Empfohlener nächster Schritt'],
      rows: [
        ['0 verdächtige Ereignisse nach vielen Drücken', 'Die getesteten Tasten erscheinen unter dem gewählten Schwellenwert gesund', 'Behalten Sie den Standardschwellenwert bei oder testen Sie später erneut, wenn Symptome zurückkehren'],
        ['1 isoliertes verdächtiges Ereignis', 'Könnte ein echtes Prellen oder ein versehentlich schneller Druck sein', 'Dieselbe Taste langsam wiederholen, bevor Sie Schlüsse ziehen'],
        ['Wiederholte verdächtige Ereignisse bei einer Taste', 'Starkes Anzeichen für Schalterprellen oder verschlissene Kontakte', 'An einem anderen Computer testen und das Ergebnis dokumentieren'],
        ['Verdächtige Ereignisse bei jeder Taste', 'Könnte Software, Treiber, Makro-Dienstprogramm oder Browser-Umgebung sein', 'Maus-Software deaktivieren und erneut testen'],
        ['Nur der drahtlose Modus schlägt fehl', 'Wahrscheinlich Akku, Empfängerplatzierung oder Interferenz', 'Kabelgebundenen Modus versuchen oder Empfänger näher platzieren'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Der Gesundheitswert ist eine schnelle Zusammenfassung, kein endgültiges Urteil. Der wichtigste Beweis ist <strong>welche Taste</strong> verdächtige Ereignisse erzeugt hat und ob sich das Muster wiederholt, wenn Sie genau diese Taste langsam drücken. Ein einzelnes schlechtes Ereignis während eines hastigen Tests ist weniger aussagekräftig als fünf verdächtige Rechtsklick-Ereignisse während bewusster Einzeldrücke.',
    },
    {
      type: 'title',
      text: 'Bevor Sie die Maus ersetzen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Prüfen Sie, ob Ihre Maus-Software eine Einstellung für die Entprellzeit hat, und testen Sie nach der Änderung erneut',
        'Deaktivieren Sie Makros, Rapid-Fire-Profile oder Tasten-Neubelegungen während der Diagnose',
        'Versuchen Sie einen anderen USB-Anschluss, insbesondere wenn Sie einen Hub oder Frontpanel-Anschluss verwenden',
        'Testen Sie drahtlose Mäuse mit dem Dongle an einem Verlängerungskabel nahe am Mauspad',
        'Vergleichen Sie mit einer anderen Maus am selben Computer, um Hardwarefehler von Softwareverhalten zu unterscheiden',
      ],
    },
    {
      type: 'title',
      text: 'Reparatur, Garantie und Beweise',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn der Fehler mechanisch ist, behebt eine Reinigung des Außengehäuses das Problem selten dauerhaft, da das Problem im Inneren der Schaltkontakte liegt. Einige Benutzer tauschen den Mikroschalter aus, aber das erfordert Löten und lohnt sich nicht für jede Maus. Wenn die Maus unter Garantie steht, sind wiederholte verdächtige Abstände bei derselben Taste nützliche Beweise, um das Problem dem Support zu erklären.',
    },
    {
      type: 'paragraph',
      html: 'Für Garantieansprüche zeichnen Sie eine kurze Bildschirmaufnahme auf, während Sie die defekte Taste langsam drücken. Stellen Sie sicher, dass die Ereignischips die Tastenbezeichnung und die verdächtige Zeit zeigen. Das ist klarer als "meine Maus klickt manchmal doppelt", da es die tatsächliche Taste und die ungefähre Zeit des unerwünschten doppelten Ereignisses demonstriert.',
    },
    {
      type: 'title',
      text: 'Einschränkungen eines browserbasierten Maus-Tests',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dieser Test misst die Ereignisse, die den Browser erreichen. Er kann die elektrische Wellenform im Schalter nicht direkt prüfen und er kann nicht jeden Treiber, jedes Betriebssystem oder jedes Hersteller-Dienstprogramm umgehen. Das ist trotzdem nützlich: Wenn der Browser doppelte Ereignisse empfängt, können Ihre normalen Anwendungen sie ebenfalls empfangen. Für eine technische Validierung auf Ingenieursniveau liefern Hardware-Tools wie Oszilloskope oder Schaltertester tiefere Erkenntnisse, sind aber für die meisten Benutzerdiagnosen nicht erforderlich.',
    },
  ],
  ui: {
    badge: 'Schalter-Prell-Labor',
    clickTarget: 'Tastenmatrix',
    clickTargetHint: 'Links, rechts, Rad, zurück und vorwärts drücken',
    totalClicks: 'Gesamt',
    suspiciousClicks: 'Verdächtig',
    fastestGap: 'Schnellster Abstand',
    healthScore: 'Gesundheitswert',
    thresholdLabel: 'Erkennungsschwelle',
    thresholdUnit: 'ms',
    cleanEvent: 'sauber',
    suspiciousEvent: 'verdächtig',
    reset: 'Zurücksetzen',
    statusIdle: 'Drücken Sie jede Maustaste, um sie unabhängig zu testen',
    statusClean: 'Kein verdächtiges Tastenprellen erkannt',
    statusWarning: 'Verdächtiges Prellen an einer Maustaste erkannt',
    lastGap: 'Letztes Ereignis',
    logTitle: 'Letzte Tastenereignisse',
    emptyLog: 'Drücken Sie eine beliebige Maustaste über dem Mauskörper.',
    leftButton: 'Links',
    middleButton: 'Rad',
    rightButton: 'Rechts',
    backButton: 'Zurück',
    forwardButton: 'Vorwärts',
    otherButton: 'Andere',
  },
};
