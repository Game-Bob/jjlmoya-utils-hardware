import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MonitorGhostingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-ghosting-test-deutsch';
const title = 'Monitor Ghosting Test';
const description =
  'Testen Sie Monitor-Ghosting, Bewegungsunschärfe, Overdrive-Nachzieheffekte und Pixel-Reaktionsverhalten mit bewegten Balken, Text und Vollbild-Bewegungsmustern.';

const faqData = [
  {
    question: 'Was ist Monitor-Ghosting?',
    answer:
      'Monitor-Ghosting ist eine sichtbare Spur, die bewegten Objekten folgt, wenn Pixel nicht schnell genug übergehen können. Es tritt häufig bei langsamen LCD-Panels, schlecht eingestellten Overdrive-Modi und Displays auf, die unter ihrer optimalen Bildwiederholrate laufen.',
  },
  {
    question: 'Kann dieser Test die genaue Reaktionszeit messen?',
    answer:
      'Ein Browser-Test kann keine Laborgeräte wie eine Pursuit-Kamera oder Fotodiode ersetzen, aber er kann sichtbare Bewegungsartefakte aufdecken, Monitoreinstellungen vergleichen und Ihnen helfen, den klarsten Overdrive-Modus zu wählen.',
  },
  {
    question: 'Warum erzeugt Overdrive manchmal helle Nachzieheffekte?',
    answer:
      'Overdrive treibt Pixel stärker an, um Übergänge zu beschleunigen. Wenn er über den Zielfarbton hinausschiebt, sehen Sie möglicherweise inverses Ghosting: einen hellen oder farbigen Halo hinter bewegten Objekten.',
  },
  {
    question: 'Sollte ich auf dunklem oder hellem Hintergrund testen?',
    answer:
      'Beides. Einige Panels verschmieren Dunkel-zu-Grau-Übergänge mehr als Hell-zu-Dunkel-Übergänge, daher zeigt ein Wechsel des Hintergrunds Artefakte, die ein einzelnes Muster verbergen kann.',
  },
];

const howToData = [
  {
    name: 'Bewegungsgeschwindigkeit einstellen',
    text: 'Beginnen Sie nahe der Standardgeschwindigkeit und erhöhen Sie sie, bis die Nachzieheffekte leicht zu prüfen sind, ohne das Objekt aus den Augen zu verlieren.',
  },
  {
    name: 'Spurstärke ändern',
    text: 'Verwenden Sie die Spursteuerung, um die Nachleuchtdauer beim Vergleich der Monitoreinstellungen besser sichtbar zu machen.',
  },
  {
    name: 'Mehrere Hintergründe testen',
    text: 'Wechseln Sie zwischen dunklen, hellen und Gitter-Hintergründen, um schwarze Verschmierungen, inverses Ghosting und Overdrive-Halos aufzudecken.',
  },
  {
    name: 'Overdrive-Einstellungen vergleichen',
    text: 'Öffnen Sie das Monitor-OSD und testen Sie die Modi Aus, Normal, Schnell und Extrem. Wählen Sie den Modus mit der klarsten Bewegung und dem geringsten Halo.',
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

export const content: ToolLocaleContent<MonitorGhostingTestUI> = {
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
      text: 'Monitor Ghosting Test: Bewegungsunschärfe und Pixel-Reaktion prüfen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Monitor-Ghosting tritt auf, wenn bewegte Objekte eine sichtbare Spur hinterlassen. Es kann Spiele verschmiert wirken lassen, scrollenden Text schwerer lesbar machen und einen Monitor mit hoher Bildwiederholrate schlechter aussehen lassen als erwartet. Dieser Monitor-Ghosting-Test bietet bewegte Balken, Text und kontrastreiche Muster, damit Sie Overdrive-Modi, Bildwiederholraten, Hintergründe und Bewegungsgeschwindigkeiten ohne Softwareinstallation vergleichen können.',
    },
    {
      type: 'paragraph',
      html: 'Der Test ist für die praktische Inspektion konzipiert. Er erhebt keinen Anspruch auf laborgenaue Grau-zu-Grau-Reaktionszeiten, hilft aber bei der Beantwortung der Frage, die die meisten Benutzer tatsächlich haben: <strong>welche Monitoreinstellung sieht auf diesem Display am klarsten aus?</strong>',
    },
    {
      type: 'title',
      text: 'Wie Ghosting aussieht',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Ein dunkler Schatten, der dem bewegten Objekt folgt, oft als schwarze Verschmierung bezeichnet',
        'Ein blasser oder farbiger Halo hinter dem Objekt, oft durch übermäßigen Overdrive verursacht',
        'Eine lange durchscheinende Spur, die Kanten weich erscheinen lässt',
        'Mehrere schwache Kopien des Objekts, besonders bei Displays mit langsamer Pixel-Reaktion',
        'Ungleichmäßige Klarheit zwischen dunklen, hellen und Gitter-Hintergründen',
      ],
    },
    {
      type: 'title',
      text: 'Ghosting, Bewegungsunschärfe und inverses Ghosting',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Artefakt', 'Was Sie sehen', 'Häufige Ursache'],
      rows: [
        ['Ghosting', 'Eine dunklere oder verblasste Kopie folgt dem Objekt', 'Pixel-Reaktion ist zu langsam für die Bewegungsgeschwindigkeit'],
        ['Bewegungsunschärfe', 'Das ganze bewegte Objekt sieht weich aus', 'Sample-and-Hold-Unschärfe, niedrige Bildwiederholrate oder Augenverfolgungsunschärfe'],
        ['Inverses Ghosting', 'Heller Halo oder farbige Überschwinger', 'Overdrive-Einstellung ist zu aggressiv'],
        ['Schwarze Verschmierung', 'Dunkle Szenen hinterlassen starke Schatten', 'VA-Panel-Dunkelübergänge sind langsam'],
        ['Stottern', 'Bewegung springt statt zu fließen', 'Frame-Pacing, niedrige FPS oder Browser-/Systemlast'],
      ],
    },
    {
      type: 'title',
      text: 'Ein praktischer Diagnose-Workflow',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Beginnen Sie mit Ihrem Monitor in seiner nativen Auflösung und der höchsten stabilen Bildwiederholrate. Wenn Sie einen 144Hz-, 165Hz-, 240Hz- oder 360Hz-Monitor besitzen, bestätigen Sie, dass das Betriebssystem diesen Modus tatsächlich verwendet, bevor Sie die Bewegungsklarheit beurteilen. Öffnen Sie den Test im Vollbild, wählen Sie das Klarheitsbalken-Ziel und beobachten Sie die hintere Kante des bewegten Objekts. Die hintere Kante ist der Ort, an dem Geisterspuren, dunkle Verschmierungen und helle Overdrive-Halos am einfachsten zu vergleichen sind.',
    },
    {
      type: 'list',
      items: [
        'Verwenden Sie dunklen Hintergrund, um schwarze Verschmierungen und langsame Dunkelübergänge aufzudecken',
        'Verwenden Sie hellen Hintergrund, um farbige Overdrive-Halos aufzudecken',
        'Verwenden Sie Gitter-Hintergrund, um die Kantenklarheit anhand kontrastreicher Referenzlinien zu prüfen',
        'Verwenden Sie das Textziel, wenn Ihr echtes Problem verschwommenes Scrollen oder schwer lesbare Bewegung ist',
        'Verwenden Sie Vollbild, bevor Sie einen Monitor beurteilen, da Browser-Chrome und Skalierung von Bewegungsartefakten ablenken können',
        'Erhöhen Sie die Geschwindigkeit erst, nachdem Sie dem Objekt bequem folgen können',
        'Vergleichen Sie jeweils eine Monitoreinstellung, damit Sie wissen, was sich geändert hat',
      ],
    },
    {
      type: 'title',
      text: 'Die beste Overdrive-Einstellung für Ihren Monitor wählen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die meisten Gaming-Monitore enthalten eine Overdrive-Einstellung namens Aus, Normal, Schnell, Schneller, Extrem, Reaktionszeit oder Trace Free. Die schnellste Option ist nicht immer die beste. Eine moderate Einstellung bietet oft das beste Gleichgewicht: weniger Unschärfe als Aus, aber weniger Halos als Extrem.',
    },
    {
      type: 'table',
      headers: ['Overdrive-Modus', 'Erwartetes Ergebnis', 'Empfehlung'],
      rows: [
        ['Aus', 'Geringste Überschwinger, aber mehr Unschärfe', 'Nützliche Baseline für Vergleiche'],
        ['Normal', 'Moderate Unschärfereduzierung', 'Oft am besten für den täglichen Gebrauch'],
        ['Schnell', 'Schärfere Bewegung mit gewissem Halo-Risiko', 'Gut, wenn die Spuren sauber bleiben'],
        ['Extrem', 'Niedrigste Reaktionszeitangabe, höchstes Überschwinger-Risiko', 'Vermeiden, wenn helle inverse Spuren erscheinen'],
        ['Adaptiv/Variabel', 'Verhalten ändert sich mit der Bildwiederholrate', 'Erneut im tatsächlich genutzten FPS-Bereich testen'],
      ],
    },
    {
      type: 'title',
      text: 'Was zu ändern ist, wenn der Test schlecht aussieht',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Was Sie sehen', 'Wahrscheinliche Ursache', 'Was zu versuchen ist'],
      rows: [
        ['Lange dunkle Spur hinter dem Ziel', 'Langsame dunkle Pixel-Übergänge oder schwacher Overdrive', 'Versuchen Sie einen stärkeren Overdrive-Modus und testen Sie erneut auf dunklem und Gitter-Hintergrund'],
        ['Heller Halo oder farbiger Umriss hinter dem Ziel', 'Overdrive-Überschwinger oder inverses Ghosting', 'Overdrive um eine Stufe reduzieren und bei Ihrer tatsächlichen Bildwiederholrate vergleichen'],
        ['Bewegung sieht ruckartig statt verschwommen aus', 'Frame-Pacing, Browser-Last oder Abweichung der Bildwiederholrate', 'Schwere Apps schließen, Vollbild aktivieren, Bildwiederholrate des Betriebssystems bestätigen'],
        ['Text wird beim Bewegen unlesbar', 'Sample-and-Hold-Unschärfe, niedrige Bildwiederholrate oder langsame Reaktion', 'Bildwiederholrate erhöhen, Textmuster testen, Overdrive-Modi vergleichen'],
        ['Artefakte ändern sich bei FPS-Änderung', 'VRR oder adaptives Overdrive-Verhalten', 'Erneut im tatsächlich genutzten FPS-Bereich testen'],
      ],
    },
    {
      type: 'title',
      text: 'Warum die Bildwiederholrate wichtig ist',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Höhere Bildwiederholraten verkürzen die Zeit, die jedes Bild sichtbar bleibt, was Bewegung klarer erscheinen lassen kann. Die Bildwiederholrate allein beseitigt jedoch kein Ghosting. Ein 240Hz-Monitor mit langsamen Pixel-Übergängen kann immer noch verschmieren, während ein gut eingestelltes 144Hz-Panel sauberer aussehen kann als ein schlecht eingestelltes schnelleres Panel.',
    },
    {
      type: 'table',
      headers: ['Bildwiederholrate', 'Bilddauer', 'Was zu erwarten ist'],
      rows: [
        ['60Hz', '16,7 ms', 'Sample-and-Hold-Unschärfe und langsamere Bewegung sind leicht zu erkennen'],
        ['120Hz', '8,3 ms', 'Viel flüssiger, aber Pixel-Reaktion ist weiterhin wichtig'],
        ['144Hz', '6,9 ms', 'Gängige Gaming-Basislinie für Bewegungsklarheit'],
        ['240Hz', '4,2 ms', 'Sehr flüssig, wenn die Reaktionsabstimmung gut ist'],
        ['360Hz', '2,8 ms', 'Anspruchsvoll: schlechte Overdrive-Abstimmung wird offensichtlich'],
      ],
    },
    {
      type: 'title',
      text: 'VRR, Gaming und realitätsnahes Testen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Variable Bildwiederholrate kann das Verhalten eines Monitors verändern, da einige Displays bei verschiedenen Bildwiederholraten unterschiedliche Overdrive-Abstimmungen verwenden. Wenn Ihr Problem nur in Spielen auftritt, testen Sie nicht nur bei der maximalen Desktop-Bildwiederholrate. Testen Sie erneut im FPS-Bereich, in dem Sie tatsächlich spielen, besonders um 60 FPS, 90 FPS, 120 FPS und jede von Ihnen verwendete FPS-Begrenzung.',
    },
    {
      type: 'list',
      items: [
        'Wenn Ghosting bei niedrigen FPS schlimmer ist, hat der Monitor möglicherweise eine schwache variable Overdrive-Abstimmung',
        'Wenn Halos nur bei hohen Bildwiederholraten erscheinen, ist der Overdrive-Modus möglicherweise zu aggressiv',
        'Wenn die Bewegung stottert, während die Spur kurz bleibt, ist das Problem wahrscheinlich Frame-Pacing statt Pixel-Reaktion',
        'Wenn Vollbild anders aussieht als der Fenstermodus, prüfen Sie Browser-Skalierung, Betriebssystem-Skalierung und Compositor-Verhalten',
      ],
    },
    {
      type: 'title',
      text: 'Fehlerbehebung bei schlechten Ergebnissen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bestätigen Sie, dass Ihr Display-Kabel die angestrebte Bildwiederholrate unterstützt',
        'Deaktivieren Sie Bewegungsglättung, Black Frame Insertion oder MPRT-Modi beim Vergleich des normalen Overdrive',
        'Testen Sie erneut nach dem Umschalten des Monitors auf seine native Auflösung',
        'Verwenden Sie Vollbild oder reduzieren Sie den Browser-Zoom, wenn die Bewegung inkonsistent erscheint',
        'Schließen Sie rechenintensive Hintergrund-Apps, wenn die Animation stottert',
        'Testen Sie dasselbe Muster nach dem Ändern der GPU-Systemsteuerungseinstellungen für die Bildwiederholrate',
        'Versuchen Sie ein anderes Kabel oder einen anderen Anschluss, wenn der Monitor seine angegebene Bildwiederholrate nicht erreicht',
        'Testen Sie erneut mit VRR ein und aus, wenn sich das Ghosting zwischen Desktop und Spielen ändert',
      ],
    },
    {
      type: 'title',
      text: 'Grenzen eines Online-Ghosting-Tests',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ein browserbasierter Ghosting-Test hängt von der Browser-Animationszeit, der GPU-Last, der Betriebssystem-Zusammensetzung und Ihrer Display-Konfiguration ab. Er eignet sich hervorragend für den visuellen Vergleich, aber exakte Reaktionszeitmessungen erfordern spezielle Ausrüstung wie Pursuit-Kameras, Fotodioden oder oszilloskopbasierte Methoden. Verwenden Sie diesen Test, um Einstellungen zu wählen und offensichtliche Artefakte zu erkennen, nicht um Herstellerangaben zu Reaktionszeiten zu zertifizieren.',
    },
  ],
  ui: {
    badge: 'Bewegungsklarheit',
    speedLabel: 'Bewegungsgeschwindigkeit',
    pixelsPerSecondUnit: 'px/s',
    pixelUnit: 'px',
    millisecondUnit: 'ms',
    trailLabel: 'Spurstärke',
    backgroundLabel: 'Hintergrund',
    backgroundDark: 'Dunkel',
    backgroundLight: 'Hell',
    backgroundGrid: 'Gitter',
    patternLabel: 'Testziel',
    patternBars: 'Klarheitsbalken',
    patternText: 'Textblock',
    patternUfo: 'UFO',
    pursuitLabel: 'Verfolgungsführung',
    pursuitOn: 'An',
    pursuitOff: 'Aus',
    fullscreen: 'Vollbild',
    exitFullscreen: 'Vollbild verlassen',
    pause: 'Pause',
    resume: 'Fortsetzen',
    targetText: 'BEWEGUNG',
    estimatedBlur: 'geschätzte Unschärfe',
    frameStep: 'Bildschritt',
    persistence: 'Nachleuchtdauer',
    sampleCount: 'Spurproben',
    instructions: 'Beobachten Sie die hintere Kante des bewegten Ziels, während Sie Geschwindigkeit, Spurstärke, Hintergrund, Vollbildmodus und Monitor-Overdrive-Einstellungen ändern.',
    reset: 'Zurücksetzen',
  },
};
