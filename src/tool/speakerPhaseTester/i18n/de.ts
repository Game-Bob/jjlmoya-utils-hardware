import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpeakerPhaseTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'lautsprecher-phasen-tester';
const title = 'Lautsprecher Phasentester';
const description =
  'Spielen Sie phasengleiche und 180 Grad invertierte Stereo-Testsignale in Ihrem Browser ab, um die Polarität der Lautsprecher, Verdrahtungsfehler und Phasenauslöschung zu überprüfen.';

const faqData = [
  {
    question: 'Wie erkenne ich, ob die Polarität meiner Lautsprecher korrekt ist?',
    answer:
      'Spielen Sie das normale Signal und dann das invertierte Signal von derselben Hörposition aus ab. Bei korrekt verkabelten Lautsprechern sollte der invertierte Modus schwächer, hohler oder weniger zentriert klingen, da sich der linke und rechte Kanal im Raum teilweise auslöschen. Wenn der invertierte Modus voller oder lauter klingt, ist möglicherweise ein Lautsprecher bereits mit vertauschter Polarität verkabelt.',
  },
  {
    question: 'Was bedeutet invertierte Phase bei diesem Test?',
    answer:
      'Das Tool sendet dasselbe Signal an beide Kanäle und multipliziert dann im invertierten Modus einen Kanal mit -1. Dadurch wird die Wellenform um 180 Grad gedreht, ohne dass eine Audiodatei heruntergeladen werden muss. Das physikalische Ergebnis entspricht dem Vertauschen von Plus und Minus an einem Lautsprecher für das Testsignal.',
  },
  {
    question: 'Kann dieser Test jeden Lautsprecher in einem Heimkino auf korrekte Verkabelung prüfen?',
    answer:
      'Er eignet sich am besten zur Überprüfung eines Stereopaars oder der vorderen linken und rechten Lautsprecher eines größeren Systems. Testen Sie bei vollständigen Surround-Systemen die Paare einzeln und kombinieren Sie das Ergebnis mit dem Kanaltest Ihres AV-Receivers, der Entfernungskalibrierung und einem SPL- oder Messmikrofon, falls verfügbar.',
  },
  {
    question: 'Sollte ich rosa Rauschen oder einen Sinuston verwenden?',
    answer:
      'Rosa Rauschen ist in der Regel einfacher für Polaritätsprüfungen, da es einen breiten Frequenzbereich abdeckt und die Auslöschung deutlich macht. Ein Sinuston kann helfen, sich auf eine Frequenz zu konzentrieren, aber Raummoden können einen einzelnen Ton irreführend machen.',
  },
  {
    question: 'Ist das sicher für Lautsprecher und Kopfhörer?',
    answer:
      'Ja, bei moderaten Pegeln. Beginnen Sie leise, vermeiden Sie maximale Verstärkung und spielen Sie keine Dauerklänge laut über Kopfhörer, kleine Laptop-Lautsprecher oder unbekannte Lautsprecher ab. Stoppen Sie sofort, wenn Sie Verzerrungen oder mechanische Belastung hören.',
  },
];

const howToData = [
  {
    name: 'Positionieren Sie sich am Hörplatz',
    text: 'Sitzen Sie dort, wo Sie normalerweise hören, damit die akustische Auslöschung, die Sie wahrnehmen, zum tatsächlichen Raum und zur Lautsprecheraufstellung passt.',
  },
  {
    name: 'Spielen Sie das normale Signal ab',
    text: 'Drücken Sie In Phase abspielen und achten Sie auf das Center-Bild, die Lautstärke und den Klangkörper.',
  },
  {
    name: 'Spielen Sie das invertierte Signal ab',
    text: 'Drücken Sie Außer Phase abspielen. Korrekt verkabelte Lautsprecher sollten in der Regel diffuser, hohler oder leiser klingen.',
  },
  {
    name: 'Überprüfen Sie die Verkabelung bei umgekehrtem Ergebnis',
    text: 'Wenn der invertierte Modus stärker klingt als der normale, überprüfen Sie die Plus- und Minus-Anschlüsse an einem Lautsprecher, die Verstärkerklemmen, Bananenstecker, Wandplatten und Adapter.',
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
  step: howToData.map((step, index) => ({
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<SpeakerPhaseTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Online Lautsprecher Phasen- und Polaritätstest', level: 2 },
    {
      type: 'paragraph',
      html: 'Dieser Lautsprecher Phasentester vergleicht ein normales Stereosignal mit einer Version, bei der ein Kanal um <strong>180 Grad</strong> invertiert wird. Das praktische Ziel ist einfach: zu bestätigen, ob sich die beiden Lautsprecher eines Paares gemeinsam bewegen, wenn sie es sollen. Wenn der linke und rechte Lautsprecher mit der gleichen Polarität verkabelt sind, verstärken sich Bass- und Mittenenergie gegenseitig und das Center-Bild fühlt sich stabil an. Wenn ein Lautsprecher falsch herum verkabelt ist, bewegen sich die Membranen für dasselbe Signal in entgegengesetzte Richtungen, wodurch Gesang an Körper verlieren, Bass verschwinden und das Stereobild unnatürlich breit oder hohl wirken kann.',
    },
    {
      type: 'paragraph',
      html: 'Der Test wird lokal im Browser erzeugt. Es wird keine große Audiodatei gestreamt. Im normalen Modus erhalten beide Kanäle dasselbe rosa Rauschen oder denselben Sinuston. Im invertierten Modus wird ein Kanal mit <code>-1</code> multipliziert, wodurch eine mathematisch invertierte Wellenform entsteht. Wenn Ihre tatsächliche Verkabelung korrekt ist, sollte diese künstliche Invertierung eine deutliche Auslöschung erzeugen. Wenn Ihre physische Verkabelung bereits vertauscht ist, kann die invertierte Einstellung den Fehler teilweise korrigieren, sodass sie lauter, voller oder zentrierter klingen kann als die normale Einstellung.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Schnelle Interpretation',
      badge: 'Grundregel',
      html: '<p>Wenn <strong>Außer Phase</strong> dünn, fern, hohl oder leiser klingt als <strong>In Phase</strong>, ist Ihr linkes/rechtes Paar wahrscheinlich korrekt verkabelt. Wenn Außer Phase voller oder lauter klingt, überprüfen Sie die roten und schwarzen Anschlüsse an einem Lautsprecher, den Verstärker, Bananenstecker, Wandplatten, den Kfz-Kabelbaum oder einen beliebigen Adapter in der Kette.</p>',
    },
    {
      type: 'table',
      headers: ['Was Sie hören', 'Wahrscheinliche Bedeutung', 'Nächster Schritt'],
      rows: [
        ['Normal ist voll, invertiert ist hohl', 'Die beiden Lautsprecher sind wahrscheinlich mit übereinstimmender Polarität verkabelt.', 'Verkabelung so belassen und mit Aufstellung oder Kalibrierung fortfahren.'],
        ['Invertiert ist voller als normal', 'Ein Lautsprecher könnte physisch falsch herum verkabelt sein.', 'Überprüfen Sie die Plus- und Minus-Anschlüsse nur auf einer Seite des Paares.'],
        ['Beide Modi klingen fast identisch', 'Die Lautsprecher könnten zu weit auseinander stehen, die Raumreflexionen dominieren oder die Ausgabe ist Mono.', 'Bewegen Sie sich zum Hörplatz, deaktivieren Sie Mono-Verarbeitung und versuchen Sie es mit rosa Rauschen.'],
        ['Beide Modi klingen bassschwach', 'Raumauslöschung, Subwoofer-Phase, Frequenzweiche oder Aufstellung könnten das größere Problem sein.', 'Führen Sie einen Bass-Sweep durch und testen Sie die Subwoofer-Polarität separat.'],
      ],
    },
    { type: 'title', text: 'Warum vertauschte Lautsprecherpolarität falsch klingt', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein Lautsprecher wandelt eine elektrische Wellenform in Membranbewegung um. Bei einer positiven Druckwelle sollten zwei gleiche Lautsprecher die Luft grundsätzlich gleichzeitig in dieselbe Richtung bewegen. Wenn bei einem Lautsprecher die Plus- und Minus-Leitungen vertauscht sind, bewegt sich dieser Lautsprecher nach innen, während der andere sich für dasselbe Signal nach außen bewegt. In einem Stereopaar macht dies den Klang nicht einfach überall leiser; Raum, Lautsprecherabstand, Wellenlänge und Hörposition bestimmen, wo die Auslöschung am stärksten ist. Die auffälligsten Symptome sind in der Regel reduzierter Bass, eine schwache Phantommitte und Gesang, der sich vom Raum zwischen den Lautsprechern zu lösen scheint.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Lead-Gesang und Dialoge sollten nahe der Mitte verankert sein, wenn beide Lautsprecher dasselbe Mono-Signal wiedergeben.',
        'Kick-Drum, Bassgitarre und tiefere Klaviernoten sollten Körper haben, anstatt dünn zu klingen.',
        'Das Stereobild sollte nicht künstlich breit wirken, wenn die Quelle Mono ist.',
        'Leichte Kopfbewegungen sollten das Center-Bild nicht vollständig zusammenbrechen lassen.',
        'Ein korrekt verkabeltes Paar sollte den invertierten Test weniger natürlich klingen lassen als den normalen.',
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Polarität', definition: 'Die positive oder negative Ausrichtung des elektrischen Signals, das einen Lautsprechertreiber speist.' },
        { term: 'Phase', definition: 'Die zeitliche Beziehung zwischen zwei Wellenformen, oft in Grad über einen Zyklus beschrieben.' },
        { term: '180-Grad-Invertierung', definition: 'Eine vertikal gespiegelte Wellenform, sodass positiver Druck im selben Moment zu negativem Druck wird.' },
        { term: 'Auslöschung', definition: 'Eine Verringerung des Schallpegels, wenn zwei ähnliche Wellenformen mit entgegengesetzter Polarität oder Zeit ankommen.' },
        { term: 'Phantommitte', definition: 'Das scheinbare Center-Bild, das entsteht, wenn identischer Schall den linken und rechten Lautsprecher gleichmäßig erreicht.' },
      ],
    },
    {
      type: 'tip',
      title: 'Testen Sie nicht von neben einem Lautsprecher',
      html: 'Sitzen Sie an der normalen Hörposition. Phasenauslöschung ist räumlich: Ein Ergebnis, das einen halben Meter vom linken Lautsprecher entfernt gemessen wird, kann sich vollständig vom Ergebnis auf dem Sofa, am Studiostuhl oder auf dem Fahrersitz unterscheiden.',
    },
    { type: 'title', text: 'Rosa Rauschen versus Sinuston für Polaritätsprüfungen', level: 2 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Rosa Rauschen',
          description: 'Breitbandrauschen mit mehr Energie in den unteren Oktaven als weißes Rauschen. Es erleichtert die Beurteilung des gesamten Klangkörpers, der Center-Abbildung und der Auslöschung nach Gehör.',
          highlight: true,
          points: ['Beste erste Wahl für schnelle Polaritätsprüfungen.', 'Weniger wahrscheinlich von einer einzelnen Raummode dominiert.', 'Nützlich für Heimkino, Studiomonitore und Car-Audio.'],
        },
        {
          title: 'Sinuston',
          description: 'Ein Einzelfrequenzton, der die Auslöschung bei einer gewählten Frequenz aufdecken kann, aber auch Raumspitzen und -einbrüche verstärken kann.',
          points: ['Nützlich bei der Suche nach einem bestimmten Frequenzweichen- oder Bassproblem.', 'Kann irreführend sein, wenn der Raum bei dieser Frequenz eine starke Auslöschung hat.', 'Halten Sie die Lautstärke moderat, da reine Töne ermüdend werden.'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Für eine einfache Polaritätsprüfung beginnen Sie mit rosa Rauschen. Rosa Rauschen verteilt Energie über das Spektrum, sodass Sie das Lautsprecherpaar als System beurteilen und nicht eine Frequenz, die möglicherweise in einer Raumauslöschung liegt. Verwenden Sie die Sinuston-Steuerung nur, wenn Sie sich auf ein bekanntes Problemband konzentrieren möchten, z. B. eine Gesangsbereichs-Auslöschung um 300 Hz oder ein Bassübergabeproblem um 80 Hz. Wenn das Sinuston-Ergebnis sich drastisch ändert, wenn Sie Ihren Kopf um wenige Zentimeter bewegen, beeinflusst der Raum diese Frequenz stark.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '180°', label: 'Mathematische Invertierung auf einen Kanal angewendet', icon: 'mdi:rotate-3d-variant' },
        { value: '-1', label: 'Verstärkungsfaktor für den invertierten Kanal', icon: 'mdi:plus-minus-variant' },
        { value: '0 MB', label: 'Für das Testsignal erforderliche Audio-Downloads', icon: 'mdi:cloud-off-outline' },
      ],
    },
    { type: 'title', text: 'Checkliste für Heimkino und Studiomonitore', level: 2 },
    {
      type: 'card',
      icon: 'mdi:sofa',
      title: 'Heimkino Frontlautsprecher',
      html: 'Verwenden Sie die normalen und invertierten Tasten nur mit den aktiven vorderen linken und rechten Lautsprechern. Deaktivieren Sie Upmixer, virtuelles Surround, Nachtmodus, Dialogverbesserung und Raumkorrektur, wenn Sie zuerst die reine Verkabelung isolieren möchten. Aktivieren Sie nach der Bestätigung der Polarität die Kalibrierung erneut und überprüfen Sie, ob der Dialog zentriert bleibt.',
    },
    {
      type: 'card',
      icon: 'mdi:music-circle',
      title: 'Studiomonitore',
      html: 'Führen Sie den Browser über dieselben Interface-Ausgänge, die Ihre DAW verwendet. Überprüfen Sie, ob beide symmetrischen Kabel konsistent verdrahtet sind und die Polaritätsschalter des Monitor-Controllers nicht aktiviert sind. Ein invertierter Monitor kann Mono-Kompatibilitätsentscheidungen beim Mischen unzuverlässig machen.',
    },
    {
      type: 'card',
      icon: 'mdi:car-info',
      title: 'Car Audio',
      html: 'Fahrzeugkabinen erzeugen starke Reflexionen und Sitzasymmetrie, hören Sie daher vom Fahrersitz und wiederholen Sie gegebenenfalls vom Beifahrersitz. Werksseitige Kabelbaumadapter, Türlautsprecheraustausch und Verstärkerinstallationen sind häufige Stellen, an denen Plus- und Minus-Leitungen vertauscht sein können.',
    },
    {
      type: 'proscons',
      title: 'Stärken und Grenzen des Browser Phasentests',
      items: [
        { pro: 'Sofortige Prüfung ohne Installation von Software oder Herunterladen von Audiodateien.', con: 'Kann nicht identifizieren, welches physische Kabel falsch ist, ohne das System zu inspizieren.' },
        { pro: 'Funktioniert gut für Stereopaare, Kopfhörer, Nahfeldmonitore und schnelle Installationsprüfungen.', con: 'Die Raumakustik kann den Effekt an manchen Sitzpositionen verdecken oder verstärken.' },
        { pro: 'Rosa Rauschen macht breitbandige Auslöschung leichter hörbar als ein einzelner Testton.', con: 'Mehrkanal-Surround-Systeme benötigen weiterhin eine kanalweise Überprüfung.' },
      ],
    },
    { type: 'title', text: 'Behebung eines fehlgeschlagenen Polaritätstests', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tools',
      items: [
        'Schalten Sie den Verstärker aus, bevor Sie Lautsprecherkabel oder Bananenstecker ändern.',
        'Wählen Sie einen Lautsprecher im Paar und verfolgen Sie Rot-zu-Rot und Schwarz-zu-Schwarz vom Verstärker zum Lautsprecher.',
        'Überprüfen Sie Wandplatten, Federklemmen, Adapter, SpeakON-Stecker oder Kfz-Kabelbäume zwischen Verstärker und Lautsprecher.',
        'Wenn das Lautsprecherkabel einen Streifen, eine Rippe, einen Textaufdruck oder eine Kupfer-/Silberseite hat, verwenden Sie denselben Leiter für Plus an beiden Enden.',
        'Nachdem Sie eine Seite geändert haben, führen Sie die normalen und invertierten Modi erneut vom Hörplatz aus.',
        'Wenn das Ergebnis weiterhin unklar ist, stellen Sie die Lautsprecher vorübergehend näher zusammen und wiederholen Sie den Test bei niedriger Lautstärke.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Subwoofer benötigen eine separate Phasenprüfung',
      badge: 'Bass-Systeme',
      html: '<p>Dieses Tool vergleicht ein linkes/rechtes Paar. Eine Subwoofer-Frequenzweiche kann elektrisch korrekt, aber akustisch phasenverschoben sein, weil Abstand, DSP-Verzögerung, Flankensteilheit und Aufstellung das Timing verschieben. Verwenden Sie diesen Test für das Hauptpaar und dann einen Frequenzweichen-Sweep oder die Receiver-Kalibrierung für den Subwoofer-Übergang.</p>',
    },
    {
      type: 'message',
      title: 'Praktische Hörregel',
      ariaLabel: 'Praktische Hörregel für Phasentests',
      html: 'Bei realen Installationen ist die korrekte Einstellung diejenige, die Mono-Material am tatsächlichen Hörplatz fokussiert, voll und stabil klingen lässt. Der invertierte Modus ist ein diagnostischer Kontrast, kein Hörmodus.',
    },
    {
      type: 'summary',
      title: 'Zusammenfassung der Lautsprecher Polaritätsdiagnose',
      items: [
        'Normal sollte stärker und zentrierter klingen als invertiert, wenn das Lautsprecherpaar korrekt verkabelt ist.',
        'Ein lauter klingender invertierter Modus ist ein starkes Indiz dafür, dass eine physische Lautsprecherverbindung vertauscht ist.',
        'Rosa Rauschen ist das beste erste Signal, da es die Wahrscheinlichkeit verringert, nur eine Raumfrequenz zu beurteilen.',
        'Sinustöne sind nützlich für gezielte Fehlersuche, können aber von Raummoden dominiert werden.',
        'Senken Sie immer die Lautstärke vor dem Moduswechsel, besonders bei Kopfhörern oder Hochleistungsverstärkern.',
      ],
    },
  ],
  ui: {
    normal: 'In Phase',
    inverted: 'Invertiert',
    stop: 'Stopp',
    pause: 'Pause',
    volume: 'Ausgangspegel',
    noiseColor: 'Testsignal',
    pinkNoise: 'Rosa Rauschen',
    sineTone: 'Sinuston',
    frequency: 'Tonfrequenz',
    statusReady: 'Bereit',
    statusNormal: 'In Phase',
    statusInverted: 'Invertiert',
    instruction:
      'Invertiert sollte dünner klingen. Lauter bedeutet Verkabelung prüfen.',
    channelLabel: 'Lautsprecher-Phasentester',
    leftChannel: 'Linker Kanal',
    rightChannel: 'Rechter Kanal',
    leftShort: 'L',
    rightShort: 'R',
    polarityNormal: '0° gleichphasig',
    polarityInverted: '180° invertiert',
    safety: 'Beginnen Sie leise. Polaritätstests können über Verstärker, Studiomonitore, Car-Audio-Systeme und Kopfhörer laut werden.',
  },
};
