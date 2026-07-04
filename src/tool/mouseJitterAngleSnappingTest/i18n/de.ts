import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseJitterAngleSnappingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'maus-jitter-winkelkorrektur-test';
const title = 'Maus Jitter und Winkelkorrektur Test';
const description =
  'Zeichne rohe Mausspuren online, um Sensor-Jitter, wackelige Verfolgung und Winkelkorrektur oder Vorhersage zu erkennen, die die Bewegung künstlich gerade macht.';

const faqData = [
  {
    question: 'Was ist Maus-Jitter?',
    answer:
      'Maus-Jitter ist unerwünschtes Zittern oder verrauschtes Verhalten im Cursorpfad, selbst wenn sich die Hand gleichmäßig bewegt. Ursachen können ein verschmutztes Sensorfenster, eine schlechte Oberfläche, hohes Lift-Off-Verhalten, elektrisches Rauschen, drahtlose Instabilität oder ein Sensor sein, der bei der gewählten DPI-Stufe Probleme hat.',
  },
  {
    question: 'Was ist Winkelkorrektur?',
    answer:
      'Winkelkorrektur, manchmal auch Vorhersage genannt, ist eine Korrekturfunktion, bei der die Maus-Firmware versucht, leicht unvollkommene menschliche Bewegungen in geradere horizontale, vertikale oder diagonale Linien umzuwandeln. Manche Büroanwender mögen das, aber viele Gamer und Künstler bevorzugen rohe Bewegung ohne Vorhersage.',
  },
  {
    question: 'Kann dieser Test beweisen, dass mein Maussensor defekt ist?',
    answer:
      'Er kann den Sensor nicht elektrisch prüfen, aber er zeigt den Bewegungspfad, den dein Browser empfängt. Wenn wiederholte sanfte Bewegungen verrauschte Punkte, plötzliche Abweichungen oder unnatürlich gerade Segmente erzeugen, ist das Ergebnis ein nützlicher Hinweis zur Fehlerbehebung bei Maus, Oberfläche, DPI, Funkverbindung oder Firmware-Einstellungen.',
  },
  {
    question: 'Wie sollte ich zeichnen, um das zuverlässigste Ergebnis zu erhalten?',
    answer:
      'Zeichne langsame diagonale Linien, mittelschnelle Kurven und lange horizontale Striche. Wiederhole dieselbe Bewegung mehrmals. Jitter ist in langsamen, kontrollierten Linien leichter zu erkennen, während Winkelkorrektur leichter auffällt, wenn diagonale Bewegungen verdächtig gerade oder treppenförmig werden.',
  },
];

const howToData = [
  {
    name: 'Sensor und Mauspad reinigen',
    text: 'Entferne vor dem Test Staub oder Haare vom Sensorfenster und verwende ein stabiles Mauspad oder eine Schreibtischoberfläche.',
  },
  {
    name: 'Langsame diagonale Linien zeichnen',
    text: 'Halte die primäre Maustaste gedrückt und zeichne mehrere diagonale Striche. Ein roher Sensor sollte natürliche Handvariation zeigen, keine perfekt auf einen Winkel gezwungene Linie.',
  },
  {
    name: 'Sanfte Kurven zeichnen',
    text: 'Mache Kreise, S-Kurven und Bögen. Jitter erscheint als raue, verrauschte Punkte, die von der beabsichtigten Kurve abweichen.',
  },
  {
    name: 'DPI- und Oberflächeneinstellungen vergleichen',
    text: 'Wiederhole dieselbe Bewegung bei verschiedenen DPI-Stufen, Polling-Raten, Lift-Off-Einstellungen und Oberflächen, um herauszufinden, wann das Problem auftritt.',
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

export const content: ToolLocaleContent<MouseJitterAngleSnappingTestUI> = {
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
      text: 'Maus-Jitter-Test Online: Sensorrauschen und Winkelkorrektur prüfen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein guter Maussensor sollte deiner Hand folgen, ohne sichtbares Rauschen hinzuzufügen oder den Pfad heimlich zu korrigieren. Wenn der Sensor verschmutzt, die Oberfläche schwer zu verfolgen, der DPI-Wert zu hoch für die Hardware oder die Firmware wendet Vorhersage an, kann sich der Cursorpfad nicht mehr natürlich anfühlen. Dieser Maus-Jitter-Test lässt dich rohe Spuren zeichnen und die einzelnen Lesepunkte überprüfen, damit Sensorprobleme sichtbar statt vage werden.',
    },
    {
      type: 'paragraph',
      html: 'Die nützlichste Art zu testen ist einfach: Zeichne kontrollierte Linien und Kurven und betrachte dann die Form der Spur. Ein gesunder Rohsensor erzeugt einen Pfad, der deiner Bewegung mit kleinen menschlichen Unvollkommenheiten folgt. Ein verrauschter Sensor erzeugt raue Punkte, winzige Spitzen und ungleichmäßiges Wackeln. Eine Maus mit Winkelkorrektur oder Vorhersage kann diagonale oder horizontale Bewegungen unnatürlich gerade erscheinen lassen, als würde die Firmware deine Hand korrigieren.',
    },
    {
      type: 'title',
      text: 'Wie Maus-Jitter aussieht',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Maus-Jitter ist nicht dasselbe wie normales Händezittern. Jeder zeichnet leicht unvollkommene Linien. Jitter wird verdächtig, wenn die Punkte von der Bewegungsrichtung abweichen, obwohl sich deine Hand langsam und gleichmäßig bewegt. Er erscheint oft als unscharfer Rand um eine Linie, kleine seitliche Spitzen oder eine Spur, die kratzig statt glatt aussieht.',
    },
    {
      type: 'table',
      headers: ['Spurmuster', 'Wahrscheinliche Bedeutung', 'Als Nächstes versuchen'],
      rows: [
        ['Kleine zufällige Spitzen bei langsamen Linien', 'Sensorrauschen, Schmutz oder Oberflächenproblem', 'Sensorfenster reinigen und anderes Mauspad ausprobieren'],
        ['Jitter nur bei hohem DPI', 'Sensor oder Firmware hat Probleme mit dieser Empfindlichkeit', 'Erneut bei 400, 800, 1600 und 3200 DPI testen'],
        ['Raue Bewegung nur bei Funkbetrieb', 'Akku, Empfängerentfernung oder Störung', 'Empfänger näher platzieren und mit frischem Akku testen'],
        ['Rauschen beim Anheben oder Kippen der Maus', 'Lift-Off-Distanz oder ungleichmäßiger Oberflächenkontakt', 'Maus flach halten und Lift-Off-Distanz wenn möglich verringern'],
        ['Jitter auf einem Schreibtisch, aber nicht auf einem anderen', 'Oberflächentextur oder Reflektivitätsproblem', 'Mattes Mauspad für optische Sensoren verwenden'],
      ],
    },
    {
      type: 'title',
      text: 'Wie Winkelkorrektur aussieht',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Winkelkorrektur unterscheidet sich von Jitter. Statt Rauschen hinzuzufügen, entfernt sie natürliche Variation. Wenn du eine diagonale Linie von Hand zeichnest, sollte ein Rohsensor winzige menschliche Abweichungen bewahren. Mit aktivierter Winkelkorrektur kann die Linie in eine perfekt gerade horizontale, vertikale oder diagonale Richtung einrasten. Dies kann das Zeichnen auf dem Desktop erleichtern, ist aber meist unerwünscht für kompetitives Zielen, Pixel-Art, Bildbearbeitung und jede Aufgabe, bei der der Cursor genau der Hand entsprechen soll.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Rohsensor Verhalten',
          description: 'Die Spur folgt deiner Hand, einschließlich kleiner natürlicher Kurven und Korrekturen. Diagonale Linien sind nicht mathematisch perfekt, es sei denn, deine Bewegung war es.',
        },
        {
          title: 'Winkelkorrektur Verhalten',
          description: 'Die Spur sieht über lange Abschnitte verdächtig gerade aus, besonders in der Nähe üblicher Winkel wie horizontal, vertikal oder 45 Grad.',
        },
        {
          title: 'Jitter Verhalten',
          description: 'Die Spur wird verrauscht, unscharf oder spitz. Statt zu gerade zu sein, wirkt sie instabil und rau.',
        },
      ],
    },
    {
      type: 'title',
      text: 'So testest du deine Maus richtig',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Beginne mit einem sauberen Sensorfenster und einem bewährten Mauspad',
        'Zeichne langsame diagonale Linien von Ecke zu Ecke und wiederhole dieselbe Bewegung mehrmals',
        'Zeichne Kreise und S-Kurven, um Jitter aufzudecken, der in geraden Linien nicht sichtbar ist',
        'Teste bei mehreren DPI-Stufen, da manche Sensoren bei sehr hoher Empfindlichkeit verrauschter werden',
        'Deaktiviere Herstellersoftware-Funktionen wie Winkelkorrektur, Vorhersage, Oberflächenabstimmung oder Beschleunigung, wenn möglich',
        'Vergleiche Kabel- und Funkmodus, wenn deine Maus beides unterstützt',
        'Vergleiche mit einer anderen Maus auf derselben Oberfläche, um Mausdefekte von Oberflächenproblemen zu trennen',
      ],
    },
    {
      type: 'title',
      text: 'Die Bewertungen verstehen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das Tool zeigt einen Jitter-Wert, einen Winkelkorrektur-Wert, Geradheit, durchschnittliche Abweichung und die Anzahl der erfassten Proben. Diese Werte sollten am besten vergleichend verwendet werden. Zeichne dieselbe Linie mit derselben Handbewegung, nachdem du eine Variable geändert hast: DPI, Oberfläche, Platzierung des Funkempfängers oder Maus-Firmware-Einstellung. Wenn ein Wert nach dem Wechsel der Oberfläche oder der Reinigung des Sensors sinkt, hast du eine wahrscheinliche Ursache gefunden.',
    },
    {
      type: 'table',
      headers: ['Ergebnis', 'Was es nahelegt', 'Praktische Maßnahme'],
      rows: [
        ['Niedriger Jitter und niedrige Korrektur', 'Der Sensorpfad wirkt natürlich und stabil', 'Aktuelle Einstellungen beibehalten und als Referenz nutzen'],
        ['Hoher Jitter, niedrige Korrektur', 'Die Maus verfolgt, aber der Pfad ist verrauscht', 'Sensor reinigen, Oberfläche wechseln, DPI senken und erneut testen'],
        ['Niedriger Jitter, hohe Korrektur', 'Der Pfad könnte firmware-korrigiert sein', 'Nach Vorhersage- oder Winkelkorrektur-Einstellungen in der Maus-Software suchen'],
        ['Hoher Jitter und hohe Korrektur', 'Die Spur ist instabil und möglicherweise überkorrigiert', 'Maus-Software-Profile zurücksetzen und ab Werkseinstellungen erneut testen'],
        ['Werte ändern sich stark je nach Oberfläche', 'Dem Sensor gefällt eine Oberflächentextur oder Reflektivität nicht', 'Die Oberfläche mit der saubersten Spur verwenden'],
      ],
    },
    {
      type: 'title',
      text: 'DPI, Polling-Rate und Maus-Jitter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hohe DPI bedeuten nicht automatisch bessere Verfolgung. Manche Mäuse funktionieren bei moderaten DPI sauber, zeigen aber bei sehr hohen DPI mehr sichtbares Rauschen, weil winzige Sensorfehler in größere Cursorbewegungen verstärkt werden. Die Polling-Rate kann ebenfalls das Gefühl der Spur verändern. Eine höhere Polling-Rate liefert häufigere Aktualisierungen, kann aber einen verschmutzten Sensor, eine schlechte Oberfläche oder Firmware-Vorhersage nicht beheben.',
    },
    {
      type: 'paragraph',
      html: 'Für einen fairen Vergleich halte deine Handbewegung ähnlich und ändere jeweils nur eine Einstellung. Zeichne zum Beispiel dieselbe diagonale Linie bei 800 DPI, 1600 DPI und 3200 DPI. Wenn die Spur nur beim höchsten Wert unscharf wird, kann die beste Lösung sein, den DPI zu senken und die Empfindlichkeit im Spiel anzupassen, statt die Maus zu ersetzen.',
    },
    {
      type: 'title',
      text: 'Häufige Ursachen für Maussensor-Jitter',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Staub, Haare oder Fett in der Nähe des optischen Sensorfensters',
        'Glänzende, reflektierende, transparente oder unebene Oberflächen',
        'Sehr hohe DPI-Einstellungen, die kleine Sensorfehler verstärken',
        'Schwacher Akku oder Funkstörungen',
        'Empfänger weit von der Maus entfernt oder hinter einem Metall-PC-Gehäuse',
        'Firmware-Filter, Oberflächenkalibrierung oder Herstellersoftware-Profile',
        'Lift-Off-Distanz-Probleme, wenn die Maus gekippt oder schnell bewegt wird',
        'Eine abgenutzte oder beschädigte Sensorlinse nach intensiver Nutzung',
      ],
    },
    {
      type: 'title',
      text: 'Warum es Gamer und Designer interessiert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In Spielen kann Jitter Mikroanpassungen erschweren, weil das Fadenkreuz nicht genau dort zur Ruhe kommt, wo die Hand es beabsichtigt hat. Winkelkorrektur kann ebenso problematisch sein: Sie mag beim Zeichnen gerader Desktop-Linien helfen, kann aber auch kleine Zielkorrekturen verzerren und diagonales Tracking gefiltert wirken lassen. Für Designer, Illustratoren, CAD-Anwender und Bildbearbeiter kann Sensorkorrektur die Freihandbewegung weniger ehrlich und schwerer kontrollierbar machen.',
    },
    {
      type: 'paragraph',
      html: 'Eine Maus braucht keine perfekte Spur, um gut zu sein. Menschliche Bewegung ist von Natur aus unvollkommen. Die Warnsignale sind wiederholbar: Dieselbe Oberfläche erzeugt immer verrauschte Punkte, dieselbe DPI erzeugt immer Spitzen, oder dieselbe Maus macht Diagonalen immer verdächtig gerade, während eine andere Maus das nicht tut.',
    },
    {
      type: 'title',
      text: 'Bevor du eine neue Maus kaufst',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Reinige das Sensorfenster vorsichtig bei ausgeschalteter Maus',
        'Probiere ein anderes Mauspad, vorzugsweise mattes Stoff- oder Hybrid-Gaming-Pad',
        'Senke den DPI und gleiche mit Software-Empfindlichkeit aus',
        'Deaktiviere Winkelkorrektur, Vorhersage, Zeigergenauigkeit und Beschleunigungsoptionen',
        'Bringe den Funkempfänger mit einem USB-Verlängerungskabel näher',
        'Aktualisiere oder setze das Maus-Firmware-Profil zurück, falls die Herstellersoftware es unterstützt',
        'Teste eine andere Maus am selben Computer und auf derselben Oberfläche zum Vergleich',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Die nützliche Diagnoseregel',
      html: '<p>Eine einzelne seltsame Spur reicht nicht aus. Ein wiederholbares Muster ist entscheidend. Wenn Jitter oder Winkelkorrektur unter denselben Einstellungen immer wieder auftritt und dann verschwindet, wenn du den Sensor reinigst, die Oberfläche wechselst, den DPI senkst oder die Vorhersage deaktivierst, hast du die wahrscheinlichste Ursache gefunden.</p>',
    },
  ],
  ui: {
    badge: 'Rohe Sensorspur',
    canvasLabel: 'Zeichenbereich für Maus-Jitter- und Winkelkorrektur-Test',
    canvasHint: 'Zeichne langsame Diagonalen, Kreise und Kurven. Einzelne Sensorpunkte bleiben sichtbar, sodass unruhige Verfolgung leicht zu erkennen ist.',
    pointerPrompt: 'Gedrückt halten und im Zeichenbereich zeichnen',
    samples: 'Proben',
    jitterScore: 'Jitter',
    snappingScore: 'Korrektur',
    straightness: 'Geradheit',
    rawDeviation: 'Durchschn. Abweichung',
    statusIdle: 'Zeichne im Feld, um rohe Mausbewegung zu erfassen',
    statusHealthy: 'Spur wirkt natürlich und stabil in den letzten Proben',
    statusJitter: 'Verrauschte Bewegung in der letzten Spur erkannt',
    statusSnapping: 'Verdächtig gerade Bewegung erkannt',
    statusMixed: 'Sowohl Jitter als auch mögliche Winkelkorrektur erscheinen in der Spur',
    reset: 'Zurücksetzen',
    holdShift: 'Tipp: Ändere immer nur eine Sache. DPI, Oberfläche, Funkmodus und Vorhersage-Einstellungen können die Spur verändern.',
    sensitivity: 'Erkennungsempfindlichkeit',
    low: 'stabil',
    high: 'streng',
    traceLog: 'Spurereignisse',
    emptyLog: 'Zeichne einige kontrollierte Striche, um das Ereignisprotokoll zu starten.',
    jitterEvent: 'Jitter',
    snappingEvent: 'Winkelkorrektur',
    combinedEvent: 'Jitter und Winkelkorrektur',
    cleanEvent: 'saubere Spur',
    pxUnit: 'px',
    percentUnit: '%',
  },
};
