import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StereoAudioTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'stereo-audio-pruefung';
const title = 'Stereo Audiotest';
const description = 'Ueberpruefen Sie linke und rechte Lautsprecherkanaele, Stereo Balance, Verkabelungsrichtung und Kopfhoererabbildung mit browsergenerierten Testtoenen.';

const faqData = [
  {
    question: 'Wie teste ich linke und rechte Lautsprecher online?',
    answer: 'Starten Sie mit niedriger Lautstärke, drücken Sie Links und dann Rechts. Der linke Ton sollte nur aus dem linken Lautsprecher oder der linken Ohrmuschel kommen, und der rechte Ton sollte nur von der rechten Seite kommen. Verwenden Sie Mitte, um zu bestätigen, dass beide Seiten gleichmäßig spielen.',
  },
  {
    question: 'Warum spielen beide Lautsprecher während des Links- oder Rechtstests?',
    answer: 'Einige Geräte, Betriebssysteme, Bluetooth-Lautsprecher, Mono-Modi, Eingabehilfen oder Audioverbesserungen mischen Stereo zu Mono herunter. Überprüfen Sie System-Balance, Mono-Audio-Einstellungen, Kabelverdrahtung und app-spezifische Audioeffekte.',
  },
  {
    question: 'Kann dies vertauschte Lautsprecherkabel diagnostizieren?',
    answer: 'Ja. Wenn die Links-Taste aus dem rechten Lautsprecher und die Rechts-Taste aus dem linken Lautsprecher spielt, ist der Ausgabepfad irgendwo zwischen Computer, Kabel, Verstärker, Lautsprechern oder Kopfhörern vertauscht.',
  },
  {
    question: 'Ist ein Sinuston für Lautsprecher und Kopfhörer sicher?',
    answer: 'Ein kurzer Sinuston bei moderater Lautstärke ist normalerweise sicher. Vermeiden Sie hohe Lautstärke, lange Sitzungen oder sehr hohe Frequenzen, insbesondere bei Kopfhörern, kleinen Laptop-Lautsprechern oder unbekannten Verstärkern.',
  },
  {
    question: 'Beeinflusst der Browser den Stereotest?',
    answer: 'Das Tool verwendet den Web Audio API StereoPannerNode. Es ist in modernen Browsern zuverlässig, aber die endgültige Ausgabe hängt dennoch von Betriebssystem-Routing, Treibern, Bluetooth-Codecs, externen DACs und Lautsprecherverkabelung ab.',
  },
];

const howToData = [
  {
    name: 'Eine leise Startlautstärke einstellen',
    text: 'Senken Sie die Systemlautstärke und verwenden Sie den Lautstärkeregler des Tools, bevor Sie einen Testton abspielen.',
  },
  {
    name: 'Jede Seite testen',
    text: 'Drücken Sie Links und Rechts. Jeder Ton sollte eindeutig auf den passenden Lautsprecher oder die Kopfhörerseite beschränkt sein.',
  },
  {
    name: 'Center-Balance prüfen',
    text: 'Drücken Sie Mitte. Der Ton sollte zwischen beiden Lautsprechern zentriert erscheinen, nicht stark zu einer Seite gezogen.',
  },
  {
    name: 'Sweep verwenden',
    text: 'Führen Sie Sweep aus, um Bewegung über das Stereofeld zu hören und Aussetzer, vertauschte Verkabelung oder ungleichmäßige Abbildung zu erkennen.',
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

export const content: ToolLocaleContent<StereoAudioTestUI> = {
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
      text: 'Linker und rechter Lautsprechertest online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Verwenden Sie diesen Online-Stereo-Audiotest, um zu überprüfen, ob Ihre linken und rechten Lautsprecher, Kopfhörer, Ohrhörer, Soundbar, DAC, Verstärker oder Monitorlautsprecher korrekt geroutet sind. Das Tool spielt browsergenerierte Töne über den linken Kanal, rechten Kanal, beide Kanäle oder einen beweglichen Stereosweep ab, damit Sie schnell vertauschte Kanäle, Mono-Ausgabe, schwache Lautsprecher, Balance-Probleme und Verkabelungsfehler erkennen können, ohne Audiosoftware installieren zu müssen.',
    },
    {
      type: 'paragraph',
      html: 'Ein korrektes Stereo-Setup bewahrt die Richtung: Der linke Testton sollte nur aus dem linken Lautsprecher oder der linken Ohrmuschel kommen, der rechte Testton sollte nur von der rechten Seite kommen und der Center-Ton sollte zwischen beiden Seiten gleichmäßig ausbalanciert klingen. Wenn der Ton auf der falschen Seite, gleichzeitig auf beiden Seiten oder auf einer Seite deutlich lauter erscheint, liegt das Problem meist in den Ausgabeeinstellungen, dem Mono-Eingabehilfemodus, der Kabelverdrahtung, dem Bluetooth-Routing, der Lautsprecheraufstellung oder Audioverbesserungssoftware.',
    },
    {
      type: 'table',
      headers: ['Taste', 'Was Sie hören sollten', 'Zur Diagnose verwenden'],
      rows: [
        ['Links', 'Ton nur vom linken Lautsprecher, linken Kopfhörertreiber oder linken Ohrhörer.', 'Vertauschte Kabel, falsche Lautsprecheraufstellung, Mono-Ausgabe oder Kanal-Neuzuordnung.'],
        ['Rechts', 'Ton nur vom rechten Lautsprecher, rechten Kopfhörertreiber oder rechten Ohrhörer.', 'Vertauschte Ausgänge, falsche Adapterverkabelung oder Treibereffekte, die die Kanalreihenfolge ändern.'],
        ['Mitte', 'Ton erscheint in der Mitte, da beide Kanäle gleichmäßig spielen.', 'System-Balance-Versatz, ein schwacher Lautsprecher, verstopftes Ohrhörer-Gitter oder ungleiche Verstärkerverstärkung.'],
        ['Sweep', 'Ton bewegt sich sanft über das Stereobild von Seite zu Seite.', 'Aussetzer, instabile Bluetooth-Verbindungen, Phasenprobleme, virtuelle Surround-Artefakte oder ungleichmäßige Abbildung.'],
      ],
    },
    {
      type: 'title',
      text: 'Die häufigsten Stereoprobleme, die dieser Test findet',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Linker und rechter Kanal sind vertauscht: Die linke Taste spielt auf der rechten Seite oder die rechte Taste spielt auf der linken Seite.',
        'Stereo ist zu Mono zusammengefallen: Links, rechts und Mitte klingen alle fast identisch aus beiden Lautsprechern.',
        'Eine Seite ist leiser: Center-Audio zieht zu einem Lautsprecher, auch wenn der System-Balance-Regler zentriert aussieht.',
        'Kopfhörer sind falsch verkabelt oder getragen: Spiel-Schritte, Musik-Panning und Videoanrufe fühlen sich räumlich verwirrend an.',
        'Bluetooth- oder USB-Audio wird verarbeitet: Soundbars, Docks, Headsets und TV-Modi können das Signal heruntermischen oder virtualisieren.',
        'Lautsprecheraufstellung ist irreführend: Ein Lautsprecher zu nah an einer Wand, durch Möbel blockiert oder weiter entfernt, kann das Center-Bild verschieben.',
      ],
    },
    {
      type: 'title',
      text: 'So beheben Sie vertauschte linke und rechte Audio-Kanäle',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Tauschen Sie bei kabelgebundenen Lautsprechern die linken und rechten Stecker am Verstärker, Audio-Interface, DAC oder Computerausgang.',
        'Stellen Sie bei passiven Lautsprechern sicher, dass der linke Lautsprecher an den linken Verstärkeranschlüssen und der rechte Lautsprecher an den rechten Anschlüssen angeschlossen ist.',
        'Überprüfen Sie bei Kopfhörern, ob sie in der richtigen Ausrichtung getragen werden, und testen Sie ohne Adapter, Verlängerungskabel oder Splitterkabel.',
        'Überprüfen Sie unter Windows oder macOS die Ausgabebalance und deaktivieren Sie Mono-Audio in den Eingabehilfen- oder Soundeinstellungen.',
        'Deaktivieren Sie bei Bluetooth-Lautsprechern und Soundbars virtuellen Surround, Party-Modus, Dual-Audio, Raumkorrektur oder TV-Soundmodi während des Tests.',
        'Überprüfen Sie bei Audio-Interfaces, DAWs und Mischern das Kanal-Routing, Pan-Regler, Monitor-Mix-Einstellungen und alle vom Hersteller bereitgestellten Software-Mixer.',
      ],
    },
    {
      type: 'title',
      text: 'So interpretieren Sie den Center-Lautsprechertest',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Center-Ton ist kein separater physischer Center-Lautsprecher in einem normalen Zweikanal-Setup. Es ist dasselbe Signal, das gleichmäßig an links und rechts gesendet wird. Bei Kopfhörern sollte es sich zentriert im Kopf anfühlen; bei Lautsprechern sollte es ein Phantom-Center zwischen ihnen bilden. Wenn es nach links oder rechts lehnt, überprüfen Sie System-Balance, Lautsprecherabstand, Lautsprecherwinkel, Lautstärkeregler, Verstärker-Trimmung, Ohrhörer-Passform, Staub im Treibergitter und ob ein Lautsprecher teilweise blockiert oder defekt ist.',
    },
    {
      type: 'table',
      headers: ['Was passiert', 'Wahrscheinliche Ursache', 'Nächster Schritt'],
      rows: [
        ['Links spielt von beiden Seiten', 'Mono-Audio, Downmixing oder räumliche Audioverarbeitung.', 'Deaktivieren Sie Mono-Ausgabe und virtuellen Surround und testen Sie erneut.'],
        ['Links spielt von der rechten Seite', 'Kanäle sind irgendwo in der Wiedergabekette vertauscht.', 'Tauschen Sie Kabel oder ändern Sie das Kanal-Routing im Treiber, Mixer oder Verstärker.'],
        ['Mitte ist auf einer Seite lauter', 'Balance, Aufstellung, Treiberschaden, Ohrpassform oder blockiertes Lautsprechergitter.', 'Vergleichen Sie mit einem anderen Kopfhörer oder Lautsprecherpaar und überprüfen Sie die physische Aufstellung.'],
        ['Sweep springt oder verschwindet', 'Bluetooth-Instabilität, Audioverbesserungsartefakte oder ein defektes Kabel/Stecker.', 'Testen Sie mit kabelgebundener Ausgabe oder einem anderen Kabel, um das schwache Glied zu isolieren.'],
      ],
    },
    {
      type: 'title',
      text: 'Kopfhörer- und Ohrhörer-Links-Rechts-Test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Für Kopfhörer und Ohrhörer ist der Links/Rechts-Test besonders nützlich vor dem Spielen, Audiobearbeitung, Filme schauen oder an Anrufen teilnehmen. Setzen Sie das Headset normal auf, starten Sie mit niedriger Lautstärke, drücken Sie Links und Rechts und bestätigen Sie, dass jeder Ton auf dem richtigen Ohr ankommt. Wenn beide Seiten gleich klingen, verwendet Ihr Gerät möglicherweise Mono-Audio. Wenn eine Seite dumpf oder leiser ist, reinigen Sie das Ohrhörer-Gitter, setzen Sie den Ohrstöpsel neu ein, überprüfen Sie das Kabel und vergleichen Sie mit einem anderen Ausgabegerät.',
    },
    {
      type: 'title',
      text: 'Sichere Audiotest-Tipps',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Starten Sie mit niedriger Systemlautstärke, insbesondere bei Kopfhörern.',
        'Verwenden Sie Endlosschleife bis Stopp nur, wenn Sie aktiv kontinuierlichen Ton für Kabelverfolgung, Aufstellung oder Balance-Einstellung benötigen.',
        'Halten Sie Testtöne kurz bei kleinen Lautsprechern; kontinuierliche Sinuswellen können schnell unangenehm werden.',
        'Vermeiden Sie maximale Verstärkung bei kleinen Laptop-Lautsprechern und unbekannten Verstärkern.',
        'Setzen Sie Kopfhörer nicht auf Ihre Ohren, bevor Sie bestätigt haben, dass die Lautstärke sicher ist.',
        'Wiederholen Sie nach dem Wechseln von Kabeln oder Einstellungen die Links-, Rechts-, Center- und Sweep-Tests in dieser Reihenfolge.',
        'Kombinieren Sie für Studio- oder Heimkino-Kalibrierung diesen Schnelltest mit einem SPL-Messgerät oder der Receiver-Kalibrierungsroutine.',
      ],
    },
    {
      type: 'title',
      text: 'Schnelldiagnose',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn links und rechts vertauscht sind, überprüfen Sie zuerst die physische Verkabelung, da dies die schnellste Lösung für Desktop-Lautsprecher, Verstärker und Audio-Interfaces ist. Wenn beide Tasten von beiden Seiten spielen, suchen Sie nach Mono-Ausgabe, räumlichem Audio, virtuellem Surround oder einem Gerät, das Stereo absichtlich heruntermischt. Wenn die Mitte außermittig ist, aber links und rechts korrekt geroutet sind, liegt das Problem normalerweise an Balance, Aufstellung, Ohrpassform, blockierten Gittern oder ungleicher Lautsprecherausgabe.',
    },
  ],
  ui: {
    left: 'Links',
    center: 'Mitte',
    right: 'Rechts',
    sweep: 'Sweep',
    stop: 'Stopp',
    volume: 'Lautstärke',
    duration: 'Dauer',
    infiniteMode: 'Endlosschleife',
    infiniteModeHint: 'Hält einen Kanal für kontinuierliche Tests am Laufen.',
    secondsUnit: 's',
    hertzUnit: 'Hz',
    tone: 'Ton',
    balance: 'Balance',
    activeIdle: 'Bereit',
    activeLeft: 'Spiele linken Kanal',
    activeCenter: 'Spiele zentrierten Ton',
    activeRight: 'Spiele rechten Kanal',
    activeSweep: 'Sweep über das Stereofeld',
    safety: 'Leise starten. Testtöne können über Kopfhörer, Verstärker und kleine Laptop-Lautsprecher laut sein.',
    leftSpeaker: 'Linker Lautsprecher',
    rightSpeaker: 'Rechter Lautsprecher',
    centerLine: 'Stereofeld',
  },
};
