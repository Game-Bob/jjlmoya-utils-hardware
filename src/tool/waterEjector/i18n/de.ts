import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterEjectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'wasserausstosser-lautsprecherreiniger';
const title = 'Wasserausstoßer für Lautsprecher';
const description =
  'Spiele einen tieffrequenten 165-Hz-Ton ab, um Wasser, Staub oder lose Partikel aus den Lautsprechern von Handys, Tablets und Laptops herauszudrücken.';

const faqData = [
  {
    question: 'Welche Frequenz sollte ich verwenden, um Wasser aus einem Lautsprecher auszustoßen?',
    answer:
      'Ein tiefer Ton um 165 Hz ist ein praktischer Ausgangspunkt, weil er kleine Lautsprechermembranen sichtbar bewegt, ohne auf schrille Höhen angewiesen zu sein. Manche Geräte reagieren besser zwischen 145 Hz und 190 Hz, daher enthält das Tool alle drei Voreinstellungen.',
  },
  {
    question: 'Kann ein Ton das gesamte Wasser aus meinem Handy entfernen?',
    answer:
      'Nein. Er kann helfen, Tröpfchen aus dem Lautsprechergitter oder der akustischen Kammer herauszuschütteln, aber er kann keine Flüssigkeit hinter Dichtungen, in Anschlüssen oder unter dem Display trocknen. Wurde das Gerät untergetaucht, schalte es aus und befolge die Trocknungshinweise des Herstellers.',
  },
  {
    question: 'Ist das sicher für die Lautsprecher?',
    answer:
      'Verwende kurze Sitzungen, beginne unter der maximalen Lautstärke und stoppe, wenn du Kratzen, Klappern oder Verzerrungen hörst. Ein winziger Handy-Lautsprecher ist nicht für lange Basswiedergabe bei hoher Leistung ausgelegt, daher sind mehrere kurze Zyklen sicherer als ein langer Dauerbeschuss.',
  },
  {
    question: 'Warum klingt mein Lautsprecher nach dem Nasswerden gedämpft?',
    answer:
      'Ein Wasserfilm fügt der Lautsprechermembran Masse und Dämpfung hinzu und kann die Gitteröffnungen blockieren. Das reduziert die Höhen, schwächt die Sprachverständlichkeit und lässt die Bässe verschwommen klingen, bis die Tröpfchen sich bewegen oder verdunsten.',
  },
  {
    question: 'Sollte ich Reis verwenden, nachdem mein Handy nass geworden ist?',
    answer:
      'Reis ist keine zuverlässige Reparaturmethode und kann Stärke oder Partikel in den Anschlüssen hinterlassen. Verwende stattdessen Luftzirkulation, ein saugfähiges, fusselfreies Tuch und die Herstelleranweisungen. Der Schallausstoß ist nur für die Lautsprecheröffnung gedacht, nicht für das gesamte Gerät.',
  },
];

const howToData = [
  {
    name: 'Hüllen entfernen und den Lautsprecher nach unten richten',
    text: 'Nimm jede Hülle ab, die das Gitter bedeckt, halte das Gerät so, dass die Schwerkraft die Tropfen aus der Lautsprecheröffnung herausbefördert, und halte die Anschlüsse frei.',
  },
  {
    name: 'Beginne mit der Standardvoreinstellung 165 Hz',
    text: 'Drücke Start und lass den Ton 30 Sekunden lang laufen. Die Membranbewegung kann Tröpfchen lösen, die im Gitternetz oder in der flachen Lautsprecherkammer festsitzen.',
  },
  {
    name: 'Probiere bei Bedarf die sanfte oder tiefe Voreinstellung',
    text: 'Wenn der Klang gedämpft bleibt, teste 145 Hz oder 190 Hz für einen kurzen Zyklus. Unterschiedliche Lautsprechergrößen resonieren an unterschiedlichen Punkten.',
  },
  {
    name: 'Stoppen, wenn der Lautsprecher verzerrt',
    text: 'Reduziere die Lautstärke oder stoppe sofort, wenn der Ton hart, brummend oder mechanisch angestrengt wird. Verzerrung bedeutet, dass der Treiber zu stark belastet wird.',
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

export const content: ToolLocaleContent<WaterEjectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Wie ein Wasserausstoßton funktioniert', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein Handy-Lautsprecher ist eine winzige bewegliche Membran. Wenn ein tieffrequenter Ton abgespielt wird, bewegt sich die Membran viele Male pro Sekunde vor und zurück. Bei <strong>165 Hz</strong> geschieht diese Bewegung 165-mal pro Sekunde. Sitzt Wasser auf dem Gitter oder ist direkt in der akustischen Öffnung gefangen, kann die bewegte Luft die Oberflächenspannung der Tropfen brechen und sie zur Öffnung hinausschieben.',
    },
    {
      type: 'paragraph',
      html: 'Der Prozess ist mechanisch, nicht chemisch. Der Ton verdunstet keine Flüssigkeit und macht die innere Elektronik nicht wasserdicht. Man versteht ihn am besten als kontrollierten Vibrationszyklus für die Lautsprecheröffnung - nützlich, wenn Sprache, Benachrichtigungen oder Musik nach Regen, einem Spritzer, dem Badezimmer oder einer kurzen Spülung gedämpft klingen.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '165 Hz', label: 'Standard-Startfrequenz', icon: 'mdi:sine-wave' },
        { value: '30 s', label: 'kurzer erster Reinigungszyklus', icon: 'mdi:timer-outline' },
        { value: '145-190 Hz', label: 'praktischer Abstimmbereich', icon: 'mdi:tune' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Was der Ton kann und was nicht',
      badge: 'Umfang',
      icon: 'mdi:information',
      html: 'Der Ton kann helfen, lose Tröpfchen im Lautsprecherkanal zu bewegen. Er kann keine Flüssigkeit aus Ladeanschlüssen, SIM-Kartenfächern, Mikrofonen, Kameramodulen, Klebenähten oder dem Raum unter dem Display entfernen.',
    },
    { type: 'title', text: 'Wann man ihn verwendet', level: 2 },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Der Lautsprecher klingt nach einem Spritzer leise, gedämpft oder blubbernd.',
        'Eine Seite des Stereo-Handy-Lautsprechers klingt schwächer als die andere.',
        'Das Lautsprechergitter eines Laptops oder Tablets hat nach der Reinigung Tröpfchen gesammelt.',
        'Staub oder Fusseln sind sichtbar lose auf dem Gitter und die normale Wiedergabe klingt stumpf.',
        'Das Gerät funktioniert normal, lädt normal und zeigt keine Warnung zu Flüssigkeit in einem Anschluss.',
      ],
    },
    {
      type: 'tip',
      title: 'Beste physische Position',
      html: 'Richte das Lautsprechergitter nach unten oder leicht nach unten. Der Ton liefert die Bewegung, aber die Schwerkraft entscheidet, wohin das gelöste Tröpfchen geht. Das Entfernen einer Hülle ist ebenfalls wichtig, da viele Hüllen eine flache Tasche bilden, die Wasser nahe der Öffnung fängt.',
    },
    {
      type: 'card',
      icon: 'mdi:cellphone-sound',
      title: 'Warum Handy Lautsprecher so schnell betroffen sind',
      html: 'Moderne Handys verwenden kompakte Hochhub-Treiber und winzige akustische Kanäle. Ein Tröpfchen, das auf einem großen Schreibtischlautsprecher harmlos wäre, kann einen bedeutenden Teil eines Handy-Gitters bedecken, den Druck verändern und die Membran so stark dämpfen, dass Stimmen entfernt klingen.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Wahrscheinliche Ursache', 'Was zu versuchen ist'],
      rows: [
        ['Gedämpfte Sprache', 'Wasserfilm über dem Gitter', '30 Sekunden 165 Hz abspielen, Lautsprecher nach unten'],
        ['Brummen während des Tons', 'Bewegliches Tröpfchen oder überlasteter Treiber', 'Lautstärke senken; stoppen, falls das Brummen bleibt'],
        ['Ein Lautsprecher leiser', 'Nur eine Öffnung ist blockiert', 'Gerät so drehen, dass diese Öffnung nach unten zeigt'],
        ['Kein Ton', 'Stummgeschaltete Ausgabe, Bluetooth-Route oder Hardwarefehler', 'Audio-Route prüfen, bevor Zyklen wiederholt werden'],
      ],
    },
    { type: 'title', text: 'Die richtige Frequenz wählen', level: 2 },
    {
      type: 'paragraph',
      html: 'Es gibt keine universelle magische Zahl, denn Lautsprechergröße, Gitterform, wasserdichte Membranauslegung und Gehäusegeometrie unterscheiden sich. Der Grund, warum <strong>165 Hz</strong> beliebt ist: Diese Frequenz liegt tief genug, um bei vielen kleinen Lautsprechern einen sichtbaren Membranhub zu erzeugen, und bleibt dabei in einem Bereich, den die meisten Geräte laut wiedergeben können.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '145 Hz sanft',
          description: 'Nützlich für sehr kleine oder beanspruchte Lautsprecher, bei denen der Standardton rau klingt.',
          icon: 'mdi:leaf',
          points: ['Tieferer Ton', 'Weniger aggressive Bewegung', 'Guter erster Wiederholungsversuch'],
        },
        {
          title: '165 Hz Standard',
          description: 'Ausgewogener Ausgangspunkt für Handys, Tablets und viele Laptop-Lautsprecheröffnungen.',
          icon: 'mdi:water-sync',
          highlight: true,
          points: ['Standardvoreinstellung', 'Starker Membranhub', 'Bester erster Zyklus'],
        },
        {
          title: '190 Hz tief',
          description: 'Ein etwas höherer Impuls, der wirken kann, wenn ein bestimmter Lautsprecher oberhalb von 165 Hz resoniert.',
          icon: 'mdi:waves',
          points: ['Straffere Vibration', 'Nützlicher zweiter Durchgang', 'Lange Zyklen vermeiden'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Tiefe Frequenzen versus hohe Frequenzen',
      items: [
        { pro: 'Tiefe Töne bewegen mehr Luft und Membranhub bei kleinen Lautsprechern.', con: 'Sie können bei maximaler Lautstärke schneller verzerren.' },
        { pro: 'Hohe Töne sind durch manche Gitter leichter zu hören.', con: 'Sie bewegen meist weniger Luft und können für manche Nutzer unangenehm oder unhörbar sein.' },
        { pro: 'Ein kurzer tiefer Ton ist leicht nach Gehör zu beurteilen.', con: 'Er sollte nicht viele Minuten ohne Pausen in Schleife laufen.' },
      ],
    },
    {
      type: 'message',
      title: 'Frequenzabstimmregel',
      ariaLabel: 'Frequenzabstimm-Regel',
      html: 'Klingt der Lautsprecher nach einem 30-Sekunden-Zyklus sauber, höre auf. Weitere Zyklen sind keine Wartungsroutine, sondern nur eine Wiederherstellungshilfe, nachdem Flüssigkeit oder Schmutz die Lautsprecheröffnung erreicht hat.',
    },
    { type: 'title', text: 'Sicheres Reinigungsverfahren', level: 2 },
    {
      type: 'paragraph',
      html: 'Beginne unter der maximalen Systemlautstärke, besonders bei Laptops und Tablets mit größeren Lautsprechern. Erhöhe nur, bis der Ton deutlich hörbar ist und das Gerät leicht vibriert. Hörst du ein scharfes Klappern, Kratzgeräusch oder einen plötzlichen Lautstärkeeinbruch, stoppe das Tool und lass das Gerät natürlich trocknen.',
    },
    {
      type: 'list',
      icon: 'mdi:numeric',
      items: [
        'Trenne Kopfhörer und Bluetooth-Lautsprecher, damit der Ton über den nassen Lautsprecher abgespielt wird.',
        'Trockne die Außenseite mit einem fusselfreien Tuch, bevor der Ton abgespielt wird.',
        'Halte die Lautsprecheröffnung nach unten und die Hand vom Gitter fern.',
        'Spiele 30 Sekunden bei 165 Hz ab.',
        'Warte eine Minute, teste normale Sprachwiedergabe und wiederhole nur einmal, falls nötig.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Keine Hitze oder Druckluft verwenden',
      badge: 'Vermeiden',
      icon: 'mdi:alert',
      html: 'Föhne, Öfen und Hochdruck-Druckluft können Feuchtigkeit tiefer hineindrücken, Dichtungen verformen oder Membranen beschädigen. Der Schallton ist schonender, weil er von der ohnehin im Gerät vorhandenen Lautsprecherbewegung ausgeht.',
    },
    {
      type: 'summary',
      title: 'Schnelle Sicherheitscheckliste',
      items: [
        'Kurze Zyklen sind besser als lange ununterbrochene Wiedergabe.',
        'Lautstärke senken, wenn der Ton hart brummt.',
        'Stoppen, wenn das Gerät Flüssigkeitserkennungswarnungen zeigt.',
        'Schallausstoß hilft nur der Lautsprecheröffnung, nicht dem ganzen Handy.',
      ],
    },
    { type: 'title', text: 'Wasserbeständigkeit ist keine Wasserdichtheit', level: 2 },
    {
      type: 'paragraph',
      html: 'Viele Handys werben mit Wasserbeständigkeit, aber diese Einstufung wird unter definierten Laborbedingungen gemessen. Reale Wassereinwirkung umfasst Bewegung, Seife, Salz, Hitze, Druck, Alter, Stöße und abgenutzte Dichtungen. Ein Lautsprecher-Reinigungston stellt keine Dichtung wieder her und bestätigt nicht, dass ein Handy sicher geladen werden kann.',
    },
    {
      type: 'table',
      headers: ['Einwirkung', 'Nutzen des Tons', 'Zusätzliche Maßnahme'],
      rows: [
        ['Leichter Regen', 'Oft hilfreich, wenn der Ton gedämpft ist', 'Außenseite trocknen und einen kurzen Zyklus laufen lassen'],
        ['Spritzer mit sauberem Wasser', 'Hilfreich für Tröpfchen nahe dem Gitter', 'Anschlüsse vor dem Laden trocken halten'],
        ['Pool- oder Meerwasser', 'Begrenzt; Rückstände können bleiben', 'Nur spülen, wenn der Hersteller es erlaubt, dann ggf. Service aufsuchen'],
        ['Seife, Limo oder Kaffee', 'Gering; klebrige Rückstände verändern das Gitter', 'Ausschalten und Reinigungshinweise einholen'],
        ['Vollständiges Untertauchen', 'Nicht ausreichend', 'Notfallschritte des Herstellers befolgen'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Membran', definition: 'Die bewegliche Oberfläche im Inneren eines Lautsprechers, die Luft drückt, um Schall zu erzeugen.' },
        { term: 'Resonanz', definition: 'Eine Frequenz, bei der sich ein physikalisches System effizienter bewegt, weil seine Form und Masse diese Schwingung begünstigen.' },
        { term: 'Oberflächenspannung', definition: 'Die Kraft, die einen Tropfen an einem Gitter oder einer Membran haften lässt, anstatt sofort abzufließen.' },
        { term: 'Akustische Kammer', definition: 'Der winzige innere Pfad, der den Lautsprecherschall vom Treiber zur Geräteöffnung leitet.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:volume-high',
      title: 'Warum es nach der Reinigung lauter klingen kann',
      html: 'Wasser blockiert zuerst hohe Frequenzen, weil kleine Wellenlängen leicht von Gitterhindernissen gestreut werden. Sobald Tröpfchen sich bewegen, kehren Konsonanten, Benachrichtigungstöne und Sprachdetails oft zurück, bevor sich die Bässe merklich verändern.',
    },
    { type: 'title', text: 'Staub und Schmutzreinigung', level: 2 },
    {
      type: 'paragraph',
      html: 'Dieselbe Vibration kann trockenen Staub, Fusseln oder Pulver auf einem Lautsprechergitter lösen, sollte aber eine sorgfältige physische Reinigung nicht ersetzen. Ist der Schmutz klebrig, ölig oder ins Gitter gepresst, kann Vibration allein ihn nur hin- und herbewegen. Verwende eine weiche, trockene Bürste außen und führe keine Metallwerkzeuge in die Öffnung ein.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Schallvibration',
          description: 'Gut für lose Partikel und Tröpfchen, die sich frei bewegen können.',
          icon: 'mdi:sine-wave',
          points: ['Kein Kontakt mit dem Gitter', 'Schnell', 'Ideal für frische Spritzer'],
        },
        {
          title: 'Sanftes äußeres Bürsten',
          description: 'Besser für sichtbare Fusseln oder Staub auf der Gitteroberfläche.',
          icon: 'mdi:brush',
          points: ['Funktioniert ohne lauten Ton', 'Vermeidet Überlastung des Lautsprechers', 'Erfordert Vorsicht an Membranen'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Nach staubigen Umgebungen',
      html: 'Spiele den Ton bei moderater Lautstärke ab und wische dann das äußere Gitter mit einem trockenen Mikrofasertuch ab. Füge keinen Alkohol oder Flüssigreiniger hinzu, es sei denn, der Gerätehersteller empfiehlt dies ausdrücklich für diese Oberfläche.',
    },
    { type: 'title', text: 'Gerätespezifische Hinweise', level: 2 },
    {
      type: 'paragraph',
      html: 'Handys, Tablets und Laptops platzieren ihre Lautsprecher in unterschiedlichen akustischen Anordnungen. Ein unten angebrachter Handy-Lautsprecher hat meist einen kurzen Auslass nahe dem Ladeanschluss, sodass Wasser schnell austreten kann, wenn das Gitter nach unten zeigt. Ein Tablet kann einen längeren Seitenkanal nutzen, was bedeutet, dass der Ton den Klang allmählich klarer macht, statt in einem deutlichen Schwall. Ein Laptop-Lautsprecher strahlt oft durch die Tastaturabdeckung oder einen unteren Schlitz, sodass die Flüssigkeit auf einer Stoffschicht, einem Kunststoffgitter oder einem externen Gitter sitzt, statt direkt auf dem Treiber.',
    },
    {
      type: 'paragraph',
      html: 'Bei einem Handy drehe das Gerät, bis der gedämpft klingende Lautsprecher der tiefste Punkt ist. Bei einem Tablet probiere sowohl Hoch- als auch Querformat, denn die blockierte Öffnung kann an einer anderen Kante liegen als erwartet. Bei einem Laptop halte das Gerät auf einer stabilen, trockenen Oberfläche und vermeide es, Flüssigkeit in Richtung Tastatur, Scharniere oder Lüftungsschlitze zu kippen. Der Ton soll dem Lautsprecherkanal helfen, nicht Wasser quer durch das Gerät befördern.',
    },
    {
      type: 'table',
      headers: ['Gerätetyp', 'Empfohlene Ausrichtung', 'Zyklus-Tipp'],
      rows: [
        ['Handy', 'Lautsprechergitter nach unten, Hülle entfernt', 'Ein 30-Sekunden-Zyklus, dann Sprachwiedergabe testen'],
        ['Tablet', 'Blockierte Kante nach unten', 'Mit moderater Lautstärke beginnen, da die Lautsprecher größer sind'],
        ['Laptop', 'Normale stabile Position, es sei denn, Flüssigkeit ist auf einem externen Gitter', 'Niedrigere Lautstärke verwenden und stoppen, falls das Gehäuse stark vibriert'],
        ['Smartwatch', 'Zuerst die Wasserausstoß-Anleitung des Herstellers befolgen', 'Web-Ton nur verwenden, wenn der Browser den Ton an den Uhrenlautsprecher leiten kann'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Bluetooth und Audio Routing Prüfung',
      badge: 'Vor dem Start',
      icon: 'mdi:bluetooth-audio',
      html: 'Wenn kabellose Ohrhörer, ein Auto-System oder ein externer Lautsprecher verbunden ist, kann der Ton über den falschen Ausgang abgespielt werden. Trenne Bluetooth-Audio vor dem Start und bestätige dann, dass ein normaler Klingelton oder ein kurzes Video über den nassen Lautsprecher zu hören ist.',
    },
    {
      type: 'card',
      icon: 'mdi:microphone-question',
      title: 'Warum das Mikrofon anders ist',
      html: 'Ein Mikrofonanschluss ist ein Eingangspfad mit Schutzgitter und einem winzigen Drucksensor, keine Lautsprechermembran, die Luft nach außen drücken kann. Gehe nicht davon aus, dass ein Wasserausstoß-Ton gedämpfte Mikrofonaufnahmen bereinigt. Lass das Gerät trocknen und stochere nicht im Mikrofonloch herum.',
    },
    { type: 'title', text: 'Lautstärke, Verzerrung und Hörkomfort', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein Wasserausstoß-Ton ist absichtlich repetitiv und kann in einem ruhigen Raum unangenehm sein. Das Ziel ist nicht maximale Lautheit, sondern ausreichende Membranbewegung, um Tröpfchen zu stören. Ist der Ton schmerzhaft, reduziere die Lautstärke oder platziere das Gerät weiter entfernt, während die Lautsprecheröffnung frei bleibt. Hörkomfort ist wichtig, denn ein erfolgreicher Reinigungszyklus sollte nur Sekunden dauern, keine längere Belastung.',
    },
    {
      type: 'paragraph',
      html: 'Verzerrung ist ein nützliches Warnsignal. Ein sauberer tiefer Ton klingt stabil, selbst wenn das Handygehäuse vibriert. Ein schlechter Ton klingt knisternd, rau, metallisch oder unstabil. Das kann passieren, weil Wasser sich bewegt, der Lautsprecher an seine Auslenkungsgrenze stößt oder der Geräteverstärker clippt. Die Lautstärke zu senken ist die erste Korrektur; lauter zu wiederholen ist der falsche Weg.',
    },
    {
      type: 'list',
      icon: 'mdi:volume-medium',
      items: [
        'Verwende die Lautstärketasten des Geräts und den Lautstärkeregler des Tools zusammen - jeder von beiden kann die Ausgabe zu laut machen.',
        'Lege den Lautsprecher nicht auf Tisch, Kissen oder Hand, da blockierte Luftzirkulation das Klappern verstärkt.',
        'Pausiere zwischen Zyklen, damit Treiber und Verstärker nicht dauerhaft hohe Leistung liefern müssen.',
        'Knistert normale Musik nach der Trocknungszeit weiter, behandle es als Reparatursymptom, nicht als Reinigungsproblem.',
      ],
    },
    {
      type: 'message',
      title: 'Komfortregel',
      ariaLabel: 'Komfort-Regel',
      html: 'Wenn der Ton für deine Ohren zu laut wirkt, ist er bereits lauter als für einen ersten Versuch nötig. Die Wasserausstoßung hängt von Bewegung und Ausrichtung ab, nicht von bestrafender Lautstärke.',
    },
    { type: 'title', text: 'Fehlerbehebung nach dem Ton', level: 2 },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Reparatur suchen, wenn diese Anzeichen auftreten',
      badge: 'Stopp',
      icon: 'mdi:close-octagon',
      html: 'Beende die Schallausstoßung, wenn das Gerät ungewöhnlich heiß wird, sich abschaltet, Flüssigkeitswarnungen zeigt, nach Routenprüfungen keinen Ton ausgibt oder der Lautsprecher bei normaler Sprache klappert. Diese Symptome können auf Schäden hinweisen, die über Tröpfchen im Gitter hinausgehen.',
    },
    {
      type: 'table',
      headers: ['Ergebnis nach 30 Sekunden', 'Bedeutung', 'Nächster Schritt'],
      rows: [
        ['Klarerer Klang', 'Tröpfchen hat sich wahrscheinlich bewegt', 'Stoppen und Gerät ruhen lassen'],
        ['Kleine Verbesserung', 'Etwas Feuchtigkeit bleibt', 'Warten, dann einen kurzen Zyklus wiederholen'],
        ['Keine Änderung', 'Blockade könnte tiefer oder klebrig sein', 'Natürlich trocknen und Route/Einstellungen prüfen'],
        ['Stärkere Verzerrung', 'Treiber könnte gestresst oder beschädigt sein', 'Stoppen, Lautstärke senken und Service erwägen'],
      ],
    },
    {
      type: 'summary',
      title: 'Praktisches Fazit',
      items: [
        'Verwende zuerst 165 Hz, da diese Frequenz Bewegung und Kompatibilität ausbalanciert.',
        'Richte das Gitter nach unten und halte den Zyklus kurz.',
        'Betrachte den Ton als Lautsprecher-Wiederherstellung, nicht als vollständige Gerätetrocknung.',
        'Die Flüssigkeitshinweise des Herstellers stehen über jedem Web-Tool.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Bereit zum Ausstoßen',
    statusPlaying: 'Ton läuft',
    statusComplete: 'Zyklus abgeschlossen',
    frequencyLabel: 'Frequenz',
    volumeLabel: 'Lautstärke',
    durationLabel: 'Dauer',
    startButton: 'Wasserausstoßer starten',
    stopButton: 'Ton stoppen',
    hertzUnit: 'Hz',
    secondsShort: 's',
    presetGentle: 'Sanft',
    presetStandard: '165 Hz',
    presetDeep: 'Tief',
    safetyTitle: 'Sicherheit zuerst',
    safetyText: 'Beginne unter der maximalen Lautstärke und stoppe, wenn der Lautsprecher klappert oder verzerrt.',
    bestResult: 'Bestes Ergebnis',
    bestResultText: 'Entferne die Hülle, richte den Lautsprecher nach unten und führe einen kurzen Zyklus aus.',
  },
};
