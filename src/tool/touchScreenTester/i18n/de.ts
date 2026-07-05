import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TouchScreenTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'touchscreen-test';
const title = 'Touchscreen Tester';
const description = 'Zeichne auf einer Vollbildfläche, um tote Zonen, verpasste Berührungen, Randverhalten, Handballenstörungen und die maximale Anzahl gleichzeitiger Multi-Touch-Punkte deines Handys oder Tablets zu prüfen.';

const faqData = [
  {
    question: 'Wie finde ich tote Zonen auf einem Touchscreen?',
    answer: 'Öffne den Tester auf dem Gerät, ziehe einen Finger langsam über das gesamte Display und achte auf Lücken, wo der Strich abbricht. Wiederhole den Vorgang entlang der Ränder, des Tastaturbereichs, der Ecken und aller Stellen, die häufig keine Berührung erkennen.',
  },
  {
    question: 'Wie führe ich einen Multi-Touch-Test online durch?',
    answer: 'Lege mehrere Finger gleichzeitig auf die Zeichenfläche. Der Zähler für aktive Berührungen zeigt an, wie viele Kontakte der Browser gerade empfängt, und der Spitzenzähler speichert die höchste während der Sitzung erreichte Anzahl.',
  },
  {
    question: 'Kann dieses Tool einen nicht reagierenden Touchscreen reparieren?',
    answer: 'Nein. Das Tool repariert keine Hardware und kalibriert den Digitizer nicht neu. Es hilft dabei, Symptome zu dokumentieren, damit du entscheiden kannst, ob das Problem an einer Displayschutzfolie, verschmutztem Glas, einem Softwarefehler, Gehäusedruck oder beschädigter Touch-Hardware liegt.',
  },
  {
    question: 'Warum erkennt mein Handy weniger Finger als erwartet?',
    answer: 'Manche Panels, Browser, Betriebssysteme, Schutzfolien, Ladegeräte und Bedienungshilfen begrenzen oder filtern Touch-Kontakte. Probiere den Test ohne Hülle, im Akkubetrieb, nach dem Reinigen des Glases und in einem anderen Browser, bevor du von einem defekten Panel ausgehst.',
  },
];

const howToData = [
  { name: 'Glas reinigen und offensichtliche Störquellen entfernen', text: 'Wische den Bildschirm ab, trockne deine Finger, ziehe störende Ladegeräte ab und lege dicke Handschuhe oder leitfähiges Zubehör vor dem Test ab.' },
  { name: 'Langsame horizontale und vertikale Striche ziehen', text: 'Ziehe parallele Linien von Rand zu Rand über das gesamte Display. Ein gesundes Panel sollte durchgehende Linien ohne Unterbrechungen liefern.' },
  { name: 'Ecken und Gestenbereiche prüfen', text: 'Fahre die Blenden, den Tastaturbereich, den Benachrichtigungsbereich und die Navigationsgestenzonen nach, denn diese Regionen zeigen oft als erstes einen teilweisen Digitizer-Ausfall.' },
  { name: 'Gleichzeitige Berührungen messen', text: 'Lege zwei, drei, vier, fünf oder mehr Finger auf die Zeichenfläche und beobachte den Spitzenzähler für Multi-Touch.' },
  { name: 'Vollbildmodus zur abschließenden Bestätigung nutzen', text: 'Wechsle in den Vollbildmodus und wiederhole den Test, damit die Browser-Oberfläche keine oberen oder unteren Touchbereiche verdeckt.' },
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

export const content: ToolLocaleContent<TouchScreenTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Online-Touchscreen-Test auf tote Zonen und Multi-Touch', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein Touchpanel kann auf Weisen versagen, die bei normaler App-Nutzung kaum nachweisbar sind. Eine Tastaturtaste wird vielleicht nur am unteren Rand nicht erkannt, einer Zeichen-App entgeht ein schmaler vertikaler Streifen, oder Spiele verlieren einen zweiten Finger, sobald der Daumen bereits eine Taste gedrückt hält. Dieser Tester verwandelt die gesamte Seite in eine Zeichenfläche, sodass jede Lücke, jeder unterbrochene Strich und jede Begrenzung gleichzeitiger Kontakte sofort sichtbar wird.',
    },
    {
      type: 'paragraph',
      html: 'Nutze ihn für Suchanfragen wie <strong>Touchscreen testen</strong>, <strong>Multi-Touch-Test online</strong>, <strong>Touchscreen tote Zone</strong> und <strong>Display auf Fehler prüfen</strong>. Die Zeichenfläche zeichnet Fingerbewegungen lokal im Browser auf; es werden keine Zeichnungen, Berührungspositionen, Gerätekennungen oder Diagnoseergebnisse hochgeladen.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '0 Installationen', label: 'Läuft direkt im Browser' },
        { value: 'Live', label: 'Zähler für aktive Berührungen' },
        { value: 'Canvas', label: 'Visuelle Karte toter Zonen' },
      ],
    },
    { type: 'title', text: 'So erkennst du tote Zonen auf dem Touchscreen', level: 3 },
    {
      type: 'paragraph',
      html: 'Eine tote Zone ist ein Bereich, in dem der Digitizer keine zuverlässige Berührung meldet. Es kann ein völlig leerer Streifen sein, eine Ecke, die keine Taps annimmt, oder eine kleine Stelle, die nur bei starkem Druck reagiert. Ziehe langsame, sich überlappende Linien über den Bildschirm. Verschwindet die Linie immer an derselben Stelle, verdient dieser Bereich weitere Untersuchung.',
    },
    {
      type: 'list',
      items: [
        'Beginne mit waagerechten Strichen vom linken zum rechten Rand, mit nur kleinem Abstand zwischen den Durchgängen.',
        'Wiederhole mit senkrechten Strichen vom oberen zum unteren Rand, um schmale Spalten aufzudecken, die bei waagerechten Tests verborgen bleiben.',
        'Fahre die exakte Displaykante nach, denn Rand-Elektroden und Gestenzonen sind häufige Fehlerquellen.',
        'Zeichne Kreise um verdächtige Bereiche, um zu sehen, ob die Unterbrechung immer an derselben physischen Position auftritt.',
        'Drehe das Gerät und teste erneut, um ein App-Layout-Problem von einem Hardware-Positionsproblem zu unterscheiden.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Eine wiederholte leere Linie sagt mehr aus als ein einzelner Aussetzer',
      html: '<p>Ein kurzer Aussetzer kann vorkommen, wenn ein Finger trocken ist, sich zu schnell bewegt oder kurz vom Glas abhebt. Eine hardwarebedingte tote Zone erscheint meist wiederholt an derselben physischen Stelle, bei unterschiedlichen Strichrichtungen und auch nach der Reinigung des Displays.</p>',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Wahrscheinliche Ursache', 'Nächster Schritt'],
      rows: [
        ['Linienunterbrechungen im selben senkrechten Streifen', 'Möglicher Digitizer-Spaltenausfall oder Blase unter der Schutzfolie.', 'Entferne die Folie wenn möglich, reinige das Glas und teste erneut im Vollbild.'],
        ['Ränder werden ignoriert, die Mitte funktioniert', 'Gehäusedruck, Gestenunterdrückung oder Problem der Randelektroden.', 'Entferne die Hülle und wiederhole langsame Randstriche.'],
        ['Nur schnelle Bewegungen werden ausgelassen', 'Browser-Event-Drosselung, niedrige Bildrate oder abhebender Finger.', 'Bewege dich langsam und vergleiche mit einem anderen Browser.'],
        ['Zufällige Punkte erscheinen ohne Berührung', 'Geisterberührungen, Feuchtigkeit, Ladegerätrauschen oder beschädigtes Panel.', 'Trockne den Bildschirm, ziehe das Ladegerät ab, starte neu und wiederhole den Test.'],
      ],
    },
    { type: 'title', text: 'So misst du die Multi-Touch-Unterstützung', level: 3 },
    {
      type: 'paragraph',
      html: 'Die Multi-Touch-Unterstützung ist die maximale Anzahl gleichzeitiger, unabhängiger Kontakte, die das Gerät melden kann. Ein Handy kann fünf, zehn oder mehr Kontakte verfolgen, während manche günstige Tablets, Kiosksysteme, Handschuhe, Remote-Desktop-Ebenen oder eingebettete Browser weniger melden. Der Aktiv-Zähler zeigt die aktuell erkannte Anzahl; der Spitzenzähler speichert die höchste erreichte Zahl seit dem letzten Löschen.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Zwei Finger Gesten', description: 'Nötig für Pinch-Zoom, Zwei-Finger-Drehung, Karten, Bildbearbeitung und Bedienungshilfen-Zoom.' },
        { title: 'Drei bis fünf Berührungen', description: 'Nützlich für Rhythmusspiele, geteilte Steuerungen, Zeichen-Apps, Klaviertastaturen und kreative Tablet-Workflows.' },
        { title: 'Zehn Finger Panels', description: 'Bei modernen Handys und Tablets üblich, aber Browser- oder Betriebssystemfilter können die erkannte Anzahl trotzdem reduzieren.' },
      ],
    },
    {
      type: 'tip',
      title: 'So vermeidest du eine falsch niedrige Zählung',
      html: 'Setze die Finger nacheinander auf und halte sie einen Moment still. Wenn du alle Finger gleichzeitig auflegst, interpretieren manche Betriebssysteme die Geste als Handballeneingabe, Zoom-Absicht oder Systemnavigation und unterdrücken möglicherweise einen Teil der Kontaktsätze.',
    },
    {
      type: 'proscons',
      title: 'Online Tester im Vergleich zu einer nativen Diagnose App',
      items: [
        { pro: 'Startet sofort, ohne etwas zu installieren oder umfassende Geräteberechtigungen zu erteilen.', con: 'Kann nur die Touch-Ereignisse anzeigen, die Browser und Betriebssystem bereitstellen.' },
        { pro: 'Leicht mit einer Werkstatt oder einem Käufer zu teilen, da das Zeichenmuster sichtbar ist.', con: 'Kann keine werkseitigen Kalibrierungstabellen oder hardwarenahen Digitizer-Fehlercodes auslesen.' },
        { pro: 'Der Vollbildmodus deckt mehr nutzbare Anzeigefläche ab als eine normale Seite.', con: 'Systemleisten, Notches und geschützte Gestenbereiche können weiterhin einige Pixel reservieren.' },
      ],
    },
    { type: 'title', text: 'Häufige Ursachen für verpasste Berührungen', level: 3 },
    {
      type: 'paragraph',
      html: 'Ein schlechtes Testergebnis bedeutet nicht immer, dass der Bildschirm defekt ist. Kapazitive Panels benötigen ein stabiles elektrisches Feld durch Glas, Kleber, Schutzfolie, Haut und Gerätemasse. Alles, was dieses Feld verändert, kann Lücken, Fehlberührungen oder schwaches Multi-Touch-Tracking verursachen. Deshalb ist das Testen unter verschiedenen Bedingungen wichtig.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Digitizer', definition: 'Die transparente Sensorschicht, die Berührungskoordinaten an das Gerät meldet.' },
        { term: 'Tote Zone', definition: 'Ein physischer Bildschirmbereich, in dem Berührungen gar nicht oder nur sporadisch erkannt werden.' },
        { term: 'Geisterberührung', definition: 'Ein vom Gerät gemeldetes Berührungsereignis, ohne dass ein Finger diese Stelle absichtlich berührt.' },
        { term: 'Handballenunterdrückung', definition: 'Softwarefilter, der breite oder versehentliche Berührungen ignoriert, besonders auf Tablets und Stiftgeräten.' },
        { term: 'Touch-Abtastrate', definition: 'Wie oft das Gerät die Touch-Schicht abtastet. Höhere Raten lassen Zeichnen und Spiele reaktionsschneller wirken.' },
      ],
    },
    {
      type: 'table',
      headers: ['Ursache', 'Typisches Anzeichen', 'Schnellcheck'],
      rows: [
        ['Schutzfolie', 'Toter Bereich folgt einer Blase, einem Riss, einer Staubkante oder einem dicken Glasrand.', 'Entferne oder löse die Folie nur, wenn dies sicher und die Folie ersetzbar ist.'],
        ['Feuchtigkeit oder Fett', 'Zufällige Sprünge, rutschende Berührungen oder verpasste Taps nach Regen, Schweiß oder Reinigungsspray.', 'Trockne Glas und Hände vollständig und teste dann erneut.'],
        ['Ladegerätrauschen', 'Geisterberührungen treten nur im Netzbetrieb auf und verschwinden im Akkubetrieb.', 'Ziehe das Ladegerät ab oder verwende ein zertifiziertes Netzteil und Kabel.'],
        ['Gehäusedruck', 'Berührungen versagen in der Nähe von Ecken oder gebogenen Rändern.', 'Entferne die Hülle und teste dieselbe Kante erneut.'],
        ['Hardwareschaden', 'Derselbe Streifen versagt auch nach Reinigung, Neustart und Entfernen der Schutzfolie.', 'Dokumentiere das Ergebnis und kontaktiere den Reparatursupport.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gesture-tap-hold',
      title: 'Druck ist nicht dasselbe wie Berührungsgenauigkeit',
      html: 'Die meisten Handy- und Tablet-Touchscreens sind kapazitiv, daher sollte stärkeres Drücken nicht nötig sein. Reagiert eine Stelle nur bei festem Druck, liegt das Problem eher an schwachem Kontakt durch eine Schutzfolie, Panelschaden, Flexkabelproblemen oder Softwarefilterung - und nicht am normalen Touchscreen-Verhalten.',
    },
    { type: 'title', text: 'Testen von Rändern, Ecken und Tastaturbereichen', level: 3 },
    {
      type: 'paragraph',
      html: 'Viele echte Beschwerden beginnen in stark beanspruchten Bereichen: der unteren Tastaturzeile, der Rücktaste, Navigationsgesten, dem Benachrichtigungsmenü, den Schnelleinstellungen, den Daumenzonen in Spielen und den Tablet-Ecken für Zeichenkürzel. Nutze den Vollbildmodus, bevor du obere und untere Bereiche bewertest, da Browser-Steuerelemente sonst einen Teil des Bildschirms verdecken können.',
    },
    {
      type: 'list',
      items: [
        'Zeichne ein Rechteck eine Fingerbreite innerhalb des Displayrandes.',
        'Ziehe kurze senkrechte Striche über die Tastaturzeilen, in denen Buchstaben ausfallen.',
        'Halte einen Daumen in einer Spielsteuerungsposition und zeichne mit einem anderen Finger, um Kontaktkonflikte zu prüfen.',
        'Teste in der Nähe des Ladeanschlusses ohne und mit Ladegerät, um auf Erdungsrauschen zu prüfen.',
        'Wenn ein Stift im Spiel ist, teste Fingereingaben getrennt von Stifteingaben, da sie unterschiedliche Erkennungspfade nutzen können.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wenn der Vollbildmodus das Ergebnis verändert',
      html: '<p>Funktioniert der Bildschirm im Vollbild, aber nicht in der normalen Browseransicht, ist die Hardware wahrscheinlich nicht der einzige Faktor. Adressleisten, Pull-to-Refresh, Systemnavigation und Browser-Gestensteuerung können Berührungen am oberen oder unteren Rand des Viewports abfangen.</p>',
    },
    { type: 'title', text: 'Dokumentation für Reparatur- oder Garantiefälle', level: 3 },
    {
      type: 'paragraph',
      html: 'Für die Garantieabwicklung zählt Beständigkeit mehr als ein einzelner dramatischer Ausfall. Lösche die Zeichenfläche, zeichne ein einfaches Raster und mache ein Foto oder eine Bildschirmaufnahme, wenn derselbe physische Bereich keine Zeichnung annimmt. Gib an, ob das Handy am Ladegerät hing, ob eine Schutzfolie angebracht war und ob das Problem auch nach einem Neustart auftritt.',
    },
    {
      type: 'summary',
      title: 'Nützliche Nachweise',
      items: [
        'Eine saubere Vollbild-Zeichenfläche mit wiederholten Lücken an derselben Position.',
        'Die erreichte Multi-Touch-Spitzenzahl bei vorsichtig platzierten mehreren Fingern.',
        'Ein Vergleich mit und ohne Hülle, Schutzfolie, Ladegerät oder Handschuhe.',
        'Gerätemodell, Browser, Betriebssystemversion und ob das Problem auch in Apps auftritt.',
      ],
    },
    {
      type: 'message',
      title: 'Hinweis zum Datenschutz',
      html: 'Die Zeichnung und die Zähler werden clientseitig erzeugt. Der Tester ist für die sofortige Diagnose konzipiert, nicht für kontobasiertes Protokollieren, Fernreparatur oder das Hochladen sensibler Bildschirm-Interaktionsmuster.',
    },
    { type: 'title', text: 'Checkliste zur Ergebnisinterpretation', level: 3 },
    {
      type: 'table',
      headers: ['Ergebnis', 'Interpretation', 'Sicherheit'],
      rows: [
        ['Durchgehende Striche überall', 'Die Touch-Schicht ist unter den aktuellen Bedingungen wahrscheinlich intakt.', 'Hoch für einfache Fingereingabe.'],
        ['Ein wiederholbarer leerer Streifen', 'Möglicher physischer Digitizer-Schaden oder Hindernis durch die Schutzfolie.', 'Hoch, wenn nach Reinigung und Neustart wiederholbar.'],
        ['Niedrige Multi-Touch-Spitze nur in einem Browser', 'Browser-, Datenschutz-, WebView- oder Gestensteuerungs-Begrenzung.', 'Mittel. Teste einen anderen Browser.'],
        ['Geisterberührungen beim Laden', 'Elektrisches Rauschen, Erdungsproblem oder defektes Ladegerät.', 'Mittel bis hoch, wenn Abziehen das Problem behebt.'],
        ['Ausfall nur mit Schutzfolie', 'Folienstärke, Klebespalt, Riss oder abgehobener Rand.', 'Hoch, wenn Entfernen den Bereich repariert.'],
      ],
    },
    {
      type: 'summary',
      title: 'Schneller Diagnosepfad',
      items: [
        'Zeichne langsam ein vollständiges Raster.',
        'Kreise jede Lücke ein, die sich wiederholt.',
        'Lösche die Zeichenfläche und wiederhole im Vollbildmodus.',
        'Entferne Hülle oder Schutzfolie, soweit praktisch möglich.',
        'Miss die höchste gleichzeitige Berührungsanzahl.',
        'Vergleiche mit einem anderen Browser oder einer anderen App, bevor du einen Hardwaredefekt erklärst.',
      ],
    },
  ],
  ui: {
    activeTouchesLabel: 'Aktive Berührungen',
    peakTouchesLabel: 'Multi-Touch-Spitze',
    coverageLabel: 'Flächenabdeckung',
    statusReady: 'Zeichne irgendwo, um tote Zonen aufzudecken',
    statusDrawing: 'Berührungseingabe erkannt',
    statusCleared: 'Zeichenfläche gelöscht',
    clearButton: 'Zeichenfläche löschen',
    fullscreenButton: 'Vollbild',
    exitFullscreenButton: 'Vollbild beenden',
    canvasLabel: 'Zeichenfläche für Touchscreen-Test',
    unsupportedTouch: 'Berührungsereignisse sind in diesem Browser nicht verfügbar',
  },
};
