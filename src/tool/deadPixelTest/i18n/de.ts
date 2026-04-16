import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PixelesPantallaUI } from '../ui';

const slug = 'tote-pixel-test-monitor-reparatur';
const title = 'Test auf tote Pixel und Bildschirm Reparatur Tool';
const description =
  'Prüfen Sie, ob Ihr Monitor tote oder hängengebliebene Pixel hat, und reparieren Sie diese online mit unserem Hochfrequenz-Stroboskop-Tool.';

const faqData = [
  {
    question: 'Was ist der Unterschied zwischen einem toten Pixel und einem hängengebliebenen Pixel?',
    answer:
      'Ein toter Pixel ist dauerhaft schwarz, da er keinen Strom erhält (durchgebrannter Transistor). Ein hängengebliebener Pixel (stuck pixel) leuchtet meist in einer hellen Farbe (Rot, Grün oder Blau) und kann oft durch eine schnelle Stroboskop-Stimulation wiederbelebt werden.',
  },
  {
    question: 'Wie funktioniert das Reparatur-Tool (Strobe)?',
    answer:
      'Unser Tool erzeugt ein schnelles Blinken von Primärfarben mit hoher Geschwindigkeit. Dies kann den feststeckenden Flüssigkristall des Pixels dazu zwingen, sich zu lösen. Es wird empfohlen, das Tool 10 bis 30 Minuten laufen zu lassen.',
  },
  {
    question: 'Können tote Pixel durch Temperatur entstehen?',
    answer:
      'Ja, extreme Temperaturen können das Panel beeinträchtigen. Die häufigsten Ursachen sind jedoch Herstellungsfehler oder physikalische Einwirkungen, die die elektrischen Kontakte des Flüssigkristalls beschädigen.',
  },
  {
    question: 'Wie viele tote Pixel sind durch die Garantie abgedeckt?',
    answer:
      'Das hängt vom Hersteller und der ISO-Norm 9241-307 ab. Im Allgemeinen betrachten Marken bis zu 2 oder 3 helle Pixel bei Class-1-Panels als "normal", während Class-0-Panels keine erlauben.',
  },
];

const howToData = [
  {
    name: 'Bildschirm reinigen',
    text: 'Reinigen Sie Ihren Monitor vor Beginn gründlich mit einem Mikrofasertuch, um zu vermeiden, dass Staub mit einem toten Pixel verwechselt wird.',
  },
  {
    name: 'Vollbildmodus aktivieren',
    text: 'Drücken Sie F11 oder die Vollbild-Taste, damit die Browser-Oberfläche die Defekterkennung nicht stört.',
  },
  {
    name: 'Farben wechseln',
    text: 'Schalten Sie zwischen schwarzem, weißem, rotem, grünem und blauem Hintergrund um. Achten Sie auf Stellen, die nicht mit der Hintergrundfarbe übereinstimmen.',
  },
  {
    name: 'Reparaturzyklus starten',
    text: 'Wenn Sie eine leuchtende Stelle finden, positionieren Sie das Stroboskop-Tool darüber und lassen Sie es mindestens 20 Minuten lang laufen.',
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

export const content: ToolLocaleContent<PixelesPantallaUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen und Standards',
  bibliography: [
    {
      name: 'ISO/IEC 9241-307: Ergonomie der Mensch-System-Interaktion',
      url: 'https://www.iso.org/standard/72025.html',
    },
    {
      name: 'Dead Pixel Policy - Gängige Standards (VESA)',
      url: 'https://www.vesa.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Vollständiger Leitfaden: Tote Pixel, hängengebliebene Pixel und deren Reparatur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Haben Sie eine merkwürdige Stelle auf Ihrem Bildschirm bemerkt, die ihre Farbe nicht ändert? Es könnte ein Defekt des Panels sein. Dieses Tool hilft Ihnen zu diagnostizieren, ob Ihr Monitor <strong>tote Pixel</strong> oder <strong>hängengebliebene Pixel</strong> hat, und bietet eine Lösung an, um diese zu reparieren.',
    },
    {
      type: 'title',
      text: 'Was ist der Unterschied zwischen einem toten und einem hängengebliebenen Pixel?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Es gibt zwei Hauptarten von Pixeldefekten bei modernen Monitoren, jede mit unterschiedlichen Merkmalen und Lösungen.',
    },
    {
      type: 'title',
      text: 'Hängengebliebener Pixel (Stuck Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Dies ist der häufigste Defekt. Er tritt auf, wenn einer oder mehrere Subpixel (Rot, Grün oder Blau) im "Ein"-Zustand hängen bleiben. <strong>Symptom:</strong> Sie sehen einen permanenten hellen farbigen Punkt (rot, grün, blau oder weiß) auf dunklem Hintergrund. <strong>Oft reparierbar.</strong> Der Flüssigkristall reagiert noch; er ist lediglich in einer bestimmten Polarisation "gefangen". Unser Stroboskop-Reparatur-Tool versucht, ihn durch schnelle Spannungsstimulation zu lösen.',
    },
    {
      type: 'title',
      text: 'Toter Pixel',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Tritt auf, wenn der Transistor, der den Pixel steuert, komplett ausfällt und kein Licht mehr durchlässt. <strong>Symptom:</strong> Ein permanent schwarzer Punkt, der besonders auf hellen oder weißen Hintergründen sichtbar ist. <strong>Schwer zu reparieren (meist dauerhaft).</strong> Der Schaden liegt auf Hardwareebene (durchgebrannter Schaltkreis). Keine elektrische Stimulation kann dies beheben. In der Regel ist ein Austausch des Panels erforderlich.',
    },
    {
      type: 'title',
      text: 'Wie funktioniert das Stroboskop-Reparatur-Tool?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Funktion "Pixel reparieren" nutzt eine Technik namens <strong>Pixel Exercising</strong>. Sie erzeugt ein hochfrequentes Zufallsrauschen (schneller Farbewechsel) über dem betroffenen Bereich.',
    },
    {
      type: 'title',
      text: 'Der Mechanismus: Flüssigkristall und Spannung',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'LCD-Monitore verwenden Flüssigkristalle, die ihre Transparenz je nach angelegter Spannung ändern. Wenn ein Subpixel hängen bleibt, bedeutet das, dass der Kristall in einer bestimmten Polarisation "eingefroren" ist. Schnelle Spannungsänderungen (erreicht durch schnelle Primärfarbenwechsel) versuchen, den Kristall zu "trainieren" und zum Zustandswechsel zu zwingen.',
    },
    {
      type: 'title',
      text: 'Empfehlungen zur Nutzung',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '<ul><li>Es wird empfohlen, das Tool mindestens <strong>10 bis 20 Minuten</strong> über dem betroffenen Bereich laufen zu lassen.</li><li>Wenn es nicht funktioniert, versuchen Sie längere Sitzungen (bis zu 1 Stunde) oder üben Sie mit einem Mikrofasertuch ganz leichten Druck auf den Pixel aus (auf eigene Gefahr).</li><li>In einigen Fällen verbessert ein vorsichtiges Erwärmen des Monitors mit einem Haartrockner (auf niedriger Temperatur) vor der Aktivierung des Stroboskops die Ergebnisse.</li></ul>',
    },
    {
      type: 'title',
      text: 'Warnung vor Epilepsie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Reparaturmodus verwendet schnell blinkende Lichter mit hoher Frequenz. Wenn Sie an photosensibler Epilepsie leiden oder lichtempfindlich sind, <strong>benutzen Sie diese Funktion NICHT</strong>. Die Exposition gegenüber blinkenden Mustern kann bei betroffenen Personen Anfälle auslösen.',
    },
    {
      type: 'title',
      text: 'Wann sollte man eine Garantie oder einen Austausch beantragen?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie defekte Pixel bestätigen (insbesondere mehrere tote Pixel), können Sie unseren Test als Beweis für Garantieansprüche nutzen. Viele Hersteller betrachten mehr als 2-3 helle Pixel oder 1 toten Pixel als Herstellungsfehler, der gemäß der Norm ISO 9241-307 (Klasse 1) zum Austausch berechtigt.',
    },
    {
      type: 'title',
      text: 'Geschichte der Standards für tote Pixel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Seit Jahrzehnten leiden LCD-Monitore aufgrund der komplexen Herstellung unter Pixeldefekten. Ein Full-HD-Panel (1920×1080) enthält 6.220.800 Pixel (18.662.400 Subpixel). Die statistische Wahrscheinlichkeit von Defekten ist unvermeidlich. Daher existieren Standards wie ISO 9241-307, um "akzeptable tote Pixel" basierend auf der Monitorklasse zu definieren.',
    },
  ],
  ui: {
    badge: 'Bildschirm Utility',
    title: 'Tote oder hängende Pixel?',
    description:
      'Prüfen Sie den Zustand Ihres Monitors mit reinen Vollfarben und reparieren Sie hängengebliebene Pixel mit unserem Hochfrequenz-Stimulations-Tool.',
    btnStartTest: 'Test starten',
    btnStartFix: 'Pixel reparieren',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Vollbild',
    kbdSpace: 'Leertaste',
    kbdSpaceLabel: 'Farbe ändern',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Beenden',
    colorBlack: 'Schwarz',
    colorWhite: 'Weiß',
    colorRed: 'Rot',
    colorGreen: 'Grün',
    colorBlue: 'Blau',
    btnToggleFixer: 'Reparatur-Tool öffnen (Strobe)',
    btnExit: 'Beenden (ESC)',
  },
};
