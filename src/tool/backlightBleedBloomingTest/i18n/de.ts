import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BacklightBleedBloomingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'backlight-bleeding-blooming-test';
const title = 'Backlight Bleeding und Blooming Test';
const description =
  'Führen Sie einen rein schwarzen Vollbild-Backlight-Bleeding-Test und einen ziehbaren weißen Local-Dimming-Blooming-Test für OLED, Mini LED, IPS, VA, Monitore, Laptops und Fernseher durch.';

const faqData = [
  {
    question: 'Wie teste ich Backlight Bleeding online?',
    answer:
      'Schalten Sie das Raumlicht aus, stellen Sie die Bildschirmhelligkeit auf Maximum, reinigen Sie den Bildschirm, öffnen Sie den rein schwarzen Test im Vollbildmodus, warten Sie, bis der Cursor verschwindet, und prüfen Sie die Ränder und Ecken auf feste Lichtlecks.',
  },
  {
    question: 'Was ist der Unterschied zwischen Backlight Bleeding und IPS Glow?',
    answer:
      'Backlight Bleeding ist meist ein fester heller Fleck in der Nähe des Rahmens, der durch Druck auf das Panel oder unvollkommene Montage entsteht. IPS Glow verändert sich stark mit dem Blickwinkel und der Augenposition, besonders in den Ecken.',
  },
  {
    question: 'Wie sieht Blooming auf einem Mini LED Fernseher oder Monitor aus?',
    answer:
      'Blooming ist ein sichtbarer Halo um ein helles Objekt auf schwarzem Hintergrund. Es tritt auf, wenn eine Local-Dimming-Zone eine größere Fläche beleuchtet als das Objekt selbst.',
  },
  {
    question: 'Können OLED-Panels Backlight Bleeding haben?',
    answer:
      'OLED-Panels verwenden keine traditionelle Hintergrundbeleuchtung, daher sollten sie kein LCD-typisches Backlight Bleeding zeigen. Sie können dennoch Probleme mit der Gleichmäßigkeit im Nahschwarzbereich, Farbstiche, vertikale Streifen oder angehobene Schwarztöne durch Quell- oder Anzeigeeinstellungen aufweisen.',
  },
  {
    question: 'Sollte ich einen Monitor mit Lichteinfall zurücksenden?',
    answer:
      'Rückgabeentscheidungen hängen vom Schweregrad, Paneltyp, Preis und Garantiebedingungen ab. Eine sichtbare helle Ecke beim normalen Film- oder Spielkonsum ist schwerwiegender als ein schwacher Fleck, der nur auf einem lang belichteten Foto sichtbar ist.',
  },
];

const howToData = [
  {
    name: 'Raum vorbereiten',
    text: 'Schalten Sie Lampen aus, schließen Sie Vorhänge, reinigen Sie den Bildschirm und lassen Sie Ihre Augen eine Minute lang adaptieren, damit Staub und Reflexionen nicht wie Paneldefekte aussehen.',
  },
  {
    name: 'Bildschirmhelligkeit erhöhen',
    text: 'Stellen Sie die Helligkeit auf 100 Prozent oder in den HDR-Modus, den Sie prüfen möchten. Deaktivieren Sie während des Tests aggressive Umgebungslichtsensoren.',
  },
  {
    name: 'Schwarztest ausführen',
    text: 'Starten Sie den Backlight-Bleeding-Modus. Die Seite wechselt in den Vollbildmodus und zeigt exaktes Schwarz. Prüfen Sie den Rahmen, die Ecken und alle festen Flecken.',
  },
  {
    name: 'Blooming-Test ausführen',
    text: 'Starten Sie den Local-Dimming-Modus und ziehen Sie den weißen Kreis über den Bildschirm. Achten Sie auf Halos, verzögertes Dimming, rasterförmige Zonen und angehobene Schwarztöne.',
  },
  {
    name: 'Sauber beenden',
    text: 'Drücken Sie Escape, um den nativen Vollbildmodus zu verlassen. Die Einrichtungsoberfläche kehrt zurück und der Testzustand wird zurückgesetzt.',
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

export const content: ToolLocaleContent<BacklightBleedBloomingTestUI> = {
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
      text: 'Backlight Bleeding Test Online: Worauf Sie bei einem neuen Monitor oder Fernseher achten sollten',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein <strong>Backlight-Bleeding-Test online</strong> ist während der Rückgabefrist eines neuen Monitors, Gaming-Laptops oder Fernsehers am nützlichsten. Der Test zeigt ein vom Browser generiertes <code>#000000</code> Vollbildfeld, sodass die LCD-Hintergrundbeleuchtung die einzige mögliche Quelle unerwünschten Lichts ist. Wenn das Panel, der Diffusor-Aufbau, der Rahmendruck oder die Montage Licht durchlässt, sehen Sie dies normalerweise als hellere Ecken, wolkige Ränder oder Flecken, die an derselben physischen Position bleiben.',
    },
    {
      type: 'paragraph',
      html: 'Verwenden Sie den Test mit realistischen Erwartungen. LCD-Panels benötigen eine Hintergrundbeleuchtung, und sehr kleine Abweichungen können normal sein, besonders bei günstigen IPS- und VA-Displays. Die praktische Frage ist nicht, ob ein lang belichtetes Handyfoto einen Fleck übertreiben kann. Die Frage ist, ob der Lichtaustritt für Ihre Augen bei dunklen Filmen, Ladebildschirmen von Spielen, Nachtszenen, schwarzen Desktop-Hintergründen oder Videos mit schwarzen Balken sichtbar ist.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Tun Sie dies, bevor Sie das Panel beurteilen',
      badge: 'Einrichtung',
      html: 'Schalten Sie das Raumlicht aus, reinigen Sie das Glas, stellen Sie die Helligkeit auf 100 Prozent, deaktivieren Sie Umgebungslichtsensoren und warten Sie einige Sekunden, bis sich Ihre Augen angepasst haben. Reflexionen, Fingerabdrücke und ein Mauszeiger können während einer Schwarzgleichmäßigkeitsprüfung falsche Positive erzeugen.',
    },
    {
      type: 'list',
      items: [
        'Prüfen Sie die oberen und unteren Ränder, wo Rahmendruck oft feste Aufhellungen verursacht',
        'Untersuchen Sie alle vier Ecken auf dreieckige oder halbmondförmige Lichtaustritte',
        'Bewegen Sie Ihren Kopf leicht, um blickwinkelabhängige Aufhellung von festem Bleeding zu unterscheiden',
        'Machen Sie zuerst Notizen mit Ihren Augen, da Kameras schwarze Bildschirme überbelichten können',
        'Testen Sie erneut, nachdem das Panel 15 bis 30 Minuten aufgewärmt ist, wenn das Ergebnis grenzwertig ist',
      ],
    },
    {
      type: 'title',
      text: 'Backlight Bleeding, IPS Glow, Clouding und Schwarzgleichmäßigkeit',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Problem', 'Was Sie sehen', 'Wie es sich verhält', 'Häufigste Panels'],
      rows: [
        ['Backlight Bleeding', 'Feste helle Rand- oder Eckflecken', 'Bleibt an derselben Stelle, wenn Sie den Kopf bewegen', 'IPS, VA, TN LCD'],
        ['IPS Glow', 'Milchige Aufhellung aus Ecken bei dunklen Bildern', 'Ändert sich stark mit Blickwinkel und Abstand', 'IPS LCD'],
        ['Clouding', 'Große ungleichmäßige wolkige Bereiche auf Schwarz', 'Meist fest, manchmal durch geringere Helligkeit reduzierbar', 'Edge-Lit LCD-Fernseher und Monitore'],
        ['VA Black Crush/Smearing', 'Dunkle Details verschwinden oder schmieren bei Bewegung', 'Hängt von Inhalt und Pixelübergang ab', 'VA LCD'],
        ['OLED Nahschwarz-Banding', 'Vertikale oder horizontale Streifen nahe Schwarz', 'Sichtbar auf nahezu schwarzem Grau, nicht auf reinem Schwarz', 'OLED'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Der häufigste Fehler ist, jedes Dunkelraum-Artefakt Backlight Bleeding zu nennen. <strong>IPS Glow</strong> ist optisch: Er wird stärker, wenn Sie nah sitzen, das Panel außeraxial betrachten oder Ecken aus einem steilen Winkel sehen. Echtes Backlight Bleeding ist mechanisch oder montagebedingt: Es bleibt am selben Rahmenbereich, selbst wenn sich Ihre Augenposition ändert. Diese Unterscheidung ist wichtig, da viele Händler starkes Bleeding anders behandeln als normalen IPS Glow.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'IPS',
          description: 'Weite Betrachtungswinkel, häufige Eckaufhellung und sichtbares Bleeding, wenn der Rahmen das Panel ungleichmäßig drückt.',
          points: ['Am besten aus Ihrem normalen Sitzabstand prüfen', 'Glow ändert sich mit der Kopfposition', 'Rand-Bleeding kann bei starkem Auftreten garantierrelevant sein'],
        },
        {
          title: 'VA',
          description: 'Höherer nativer Kontrast, meist weniger IPS-artiger Glow, kann aber Clouding und langsame Dunkelübergänge zeigen.',
          points: ['Schwarz wirkt tiefer als bei IPS', 'Gleichmäßigkeit kann je nach Gerät variieren', 'Blooming tritt bei Modellen mit Local Dimming auf'],
        },
        {
          title: 'OLED',
          description: 'Keine LCD-Hintergrundbeleuchtung, daher sollte reines Schwarz aus sein, aber Nahschwarz-Gleichmäßigkeit und Farbstich können dennoch wichtig sein.',
          points: ['Reines Schwarz sollte in einem dunklen Raum verschwinden', 'Testen Sie Graustufen separat auf Banding', 'Verwechseln Sie angehobenes Quell-Schwarz nicht mit Panel-Bleeding'],
        },
      ],
    },
    {
      type: 'title',
      text: 'So führen Sie einen zuverlässigen reinen Schwarztest durch',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der Schwarztest-Modus entfernt bewusst die normale Benutzeroberfläche. Nach dem Start verschwindet das Glaspanel, Zeigerereignisse werden auf der Einrichtungsoberfläche deaktiviert, die Seite fordert nativen Vollbildmodus an und die Testebene verwendet exaktes Schwarz. Nach zwei Sekunden ohne Mausbewegung wird der Cursor ausgeblendet, damit er keinen weißen Referenzpunkt erzeugt oder eine Dunkelraumprüfung verfälscht.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '#000000', label: 'Test-Hintergrundfarbe' },
        { value: '2 s', label: 'Cursor-Inaktivitätszeit' },
        { value: '100%', label: 'empfohlene Helligkeit' },
        { value: '0', label: 'externe Ressourcen im Testmodus' },
      ],
    },
    {
      type: 'summary',
      title: 'Schwarztest Checkliste',
      items: [
        'Verwenden Sie die native Auflösung und deaktivieren Sie den Browser-Zoom, wenn die Anzeige merkwürdig skaliert',
        'Stellen Sie die SDR-Helligkeit hoch genug ein, um Defekte zu erkennen, oder testen Sie HDR im exakten Modus, den Sie verwenden möchten',
        'Prüfen Sie zuerst aus Ihrer normalen Sitzposition, dann aus etwas größerer Entfernung',
        'Beurteilen Sie nicht anhand eines Handyfotos, es sei denn, die Belichtung ist gesperrt und ähnelt dem, was Ihre Augen sehen',
        'Drücken Sie Escape, um den Vollbildmodus zu verlassen, und wiederholen Sie den Test nach Änderung der Monitoreinstellungen',
      ],
    },
    {
      type: 'tip',
      title: 'Kamerafotos können gute Panels schrecklich aussehen lassen',
      html: 'Die automatische Belichtung des Handys versucht, einen schwarzen Bildschirm aufzuhellen, was schwache Aufhellungen übertreibt und normales LCD-Verhalten in ein dramatisches Bild verwandeln kann. Wenn Sie Garantienachweise benötigen, sperren Sie die Belichtung manuell und fügen Sie eine Notiz hinzu, die beschreibt, ob das Problem bei echtem Inhalt sichtbar ist.',
    },
    {
      type: 'title',
      text: 'Local Dimming Blooming Test für Mini LED und FALD Displays',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der <strong>Blooming-Test-Monitor</strong>-Modus platziert einen rein weißen Kreis auf einem rein schwarzen Hintergrund. Bei einem Mini LED, FALD LCD oder Fernseher mit Local Dimming zwingt dieses kleine Objekt eine oder mehrere Backlight-Zonen zum Aufhellen, während benachbarte Zonen versuchen, schwarz zu bleiben. Wenn der Dimming-Algorithmus, die Zonenanzahl, der Diffusor oder der Panel-Kontrast das Licht nicht isolieren können, sehen Sie einen Halo um den Kreis.',
    },
    {
      type: 'paragraph',
      html: 'Das Ziehen des Kreises ist wichtig. Statisches Blooming ist nur ein Teil der Geschichte. Ein bewegtes Highlight zeigt Dimming-Verzögerung, Zonenübergänge, Pumpen, zerdrückte Sternfelder, angehobene Untertitel und rasterförmiges Verhalten. Ein gutes Local-Dimming-System sollte das Objekt hell halten und gleichzeitig den Dunst darum herum minimieren sowie verzögerte helle Flecken vermeiden, nachdem der Kreis sich wegbewegt hat.',
    },
    {
      type: 'table',
      headers: ['Artefakt', 'Worauf zu achten ist', 'Wahrscheinliche Erklärung'],
      rows: [
        ['Halo', 'Sanftes Leuchten um den weißen Kreis', 'Local-Dimming-Zone ist größer als das helle Objekt'],
        ['Zonenraster', 'Quadratische oder rechteckige Blöcke erscheinen bei Bewegung', 'Geringe Zonenanzahl oder sichtbares Mini-LED-Layout'],
        ['Dimming-Verzögerung', 'Heller Fleck folgt dem Kreis verspätet', 'Algorithmus reagiert langsam auf Bewegung'],
        ['Schwarzanhebung', 'Gesamter Bildschirm wird grau, wenn der Kreis erscheint', 'Globales Dimming oder schwache Kontraststeuerung'],
        ['Untertitel-Bloom', 'Großer Dunst um kleinen weißen Text oder UI', 'Aggressive Helligkeit mit begrenzten lokalen Zonen'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:television-ambient-light',
      title: 'Bester Anwendungsfall',
      html: 'Verbinden Sie den Laptop oder die Konsole mit dem teuren Fernseher, den Sie tatsächlich nutzen, öffnen Sie diesen Local-Dimming-Tester im Browser und ziehen Sie das Highlight über die exakte Bildschirmgröße. Eine kleine eingebettete Vorschau kann Local-Dimming-Zonen nicht so belasten wie Vollbild in Schwarz und Weiß.',
    },
    {
      type: 'title',
      text: 'Erwartungen an Paneltypen: OLED, Mini LED, IPS und VA',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Was jede Technologie gut und schlecht macht',
      items: [
        {
          pro: 'OLED schaltet einzelne Pixel für echtes Schwarz aus und sollte kein LCD Backlight Bleeding zeigen.',
          con: 'OLED kann Nahschwarz-Banding, Farbstiche, automatische Helligkeitsbegrenzung und Einbrennrisiko bei statischen Inhalten zeigen.',
        },
        {
          pro: 'Mini LED kann hohe HDR-Helligkeit erreichen und großflächigen Dunst im Vergleich zu Edge-Lit-LCD reduzieren.',
          con: 'Mini LED verwendet weiterhin Zonen, sodass kleine helle Objekte blühen können, wenn Zonenanzahl oder Algorithmusqualität begrenzt sind.',
        },
        {
          pro: 'IPS ist farb- und blickwinkelstabil, was für Desktop-Arbeit und gemeinsames Betrachten hilfreich ist.',
          con: 'IPS Glow und Rand-Bleeding sind häufige Beschwerden bei dunklen Szenen, besonders bei geringem Sitzabstand.',
        },
        {
          pro: 'VA bietet oft viel besseren nativen Kontrast als IPS und kann in dunklen Räumen tiefer wirken.',
          con: 'VA kann dunkles Schmieren, Clouding oder Blooming bei Versionen mit Local Dimming zeigen.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Backlight Bleeding', definition: 'Unerwünschtes Licht, das durch den LCD-Aufbau entweicht, normalerweise in der Nähe des Rahmens, sichtbar auf schwarzen Bildern.' },
        { term: 'Blooming', definition: 'Ein Halo um ein helles Objekt, verursacht durch Local-Dimming-Zonen, die eine größere Fläche als das Objekt beleuchten.' },
        { term: 'IPS Glow', definition: 'Blickwinkelabhängige milchige Aufhellung in dunklen Szenen bei IPS-Panels.' },
        { term: 'FALD', definition: 'Full Array Local Dimming, bei dem die LCD-Hintergrundbeleuchtung in unabhängig gesteuerte Zonen unterteilt ist.' },
        { term: 'Mini LED', definition: 'Eine LCD-Hintergrundbeleuchtung mit vielen kleinen LEDs zur Erhöhung der Zonenanzahl und HDR-Helligkeit.' },
        { term: 'Schwarzgleichmäßigkeit', definition: 'Wie gleichmäßig ein Display schwarze oder nahschwarze Inhalte über die gesamte Bildschirmfläche darstellt.' },
      ],
    },
    {
      type: 'title',
      text: 'Wann ein Defekt schwerwiegend genug für eine Rückgabe ist',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Alarmsignale während der Rückgabefrist',
      badge: 'Garantie',
      html: 'Erwägen Sie eine schnelle Dokumentation des Problems, wenn eine helle Ecke aus normalem Sitzabstand sichtbar ist, derselbe Fleck Sie bei Filmen oder Spielen stört, Local Dimming offensichtliche Halos um Untertitel erzeugt oder ein teures HDR-Display schlechter abschneidet als typische Testberichte für dasselbe Modell.',
    },
    {
      type: 'paragraph',
      html: 'Eine faire Entscheidung berücksichtigt echte Inhalte und die Produktklasse. Ein günstiger Büro-IPS-Monitor kann leichte Eckaufhellungen haben, die für die Klasse normal sind. Ein Premium-Mini-LED-Monitor oder High-End-Fernseher sollte Schwarzwerte und Blooming deutlich besser kontrollieren. Wenn der Defekt bei Filmen mit schwarzen Balken, dunklen Spielmenüs, Weltraumszenen oder Desktop-Arbeit offensichtlich ist, handelt es sich nicht nur um eine Labor-Kuriosität.',
    },
    {
      type: 'list',
      items: [
        'Prüfen Sie denselben Inhalt auf einem anderen Display, um die Quelle auszuschließen',
        'Setzen Sie die Bildeinstellungen zurück, bevor Sie das Panel als defekt annehmen',
        'Testen Sie Local Dimming auf niedrig, mittel und hoch, da die Algorithmen je nach Modus variieren',
        'Notieren Sie Helligkeit, HDR-Modus, Local-Dimming-Modus und Betrachtungsabstand in Ihren Aufzeichnungen',
        'Beschreiben Sie bei einer Rückgabe, was Ihre Augen sehen, anstatt nur überbelichtete Fotos zu senden',
      ],
    },
    {
      type: 'title',
      text: 'Warum dieser Test Code statt Video verwendet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Videodateien können Komprimierungsartefakte, Browser-Dekodierungsarbeit, Pufferung, Farbbereichskonvertierung und Bildratenschwankungen einführen. Ein Paneldefekttest sollte nicht von einer MP4-Datei abhängen. Dieses Tool verwendet nur clientseitiges HTML und CSS für die Testzustände: exaktes Schwarz für den Hintergrund und exaktes Weiß für den bewegten Kreis. Das hält die Arbeitslast niedrig und vermeidet Netzwerkaktivität nach dem Laden der Seite.',
    },
    {
      type: 'paragraph',
      html: 'Die Blooming-Kreisposition wird über <code>requestAnimationFrame</code> angewendet, was visuelle Updates mit der Browser-Aktualisierungsschleife synchronisiert. Zeiger-, Maus- und Toucheingaben aktualisieren die Zielkoordinaten, dann bewegt der nächste Animationsframe den weißen Kreis. Dadurch fühlt sich das Ziehen auf Monitoren mit hoher Bildwiederholrate, Tablets und OLED-Telefonen konsistent an, ohne unnötige Arbeit bei jedem rohen Eingabeereignis zu leisten.',
    },
    {
      type: 'message',
      title: 'Datenschutz und Leistungshinweis',
      ariaLabel: 'Datenschutz und Leistungshinweis',
      html: 'Die aktiven Testzustände benötigen kein Tracking, keine Videos, keine entfernten Bilder und keine Mess-Uploads. Sie sind bewusst einfach gehalten, damit ältere Laptops, TV-Browser und Wohnzimmer-Setups das Anzeigepanel und nicht die CPU belasten.',
    },
    {
      type: 'title',
      text: 'Fehlerbehebung bei falschen Ergebnissen',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Symptom während des Tests', 'Mögliche Ursache', 'Was zu versuchen ist'],
      rows: [
        ['Schwarzer Bildschirm ist nicht wirklich schwarz', 'Eingeschränkter RGB-Bereich, angehobene Schwarzeinstellung, HDR-Tone-Mapping oder Browser-Overlay', 'Volles RGB-Ausgabe einstellen, dynamischen Kontrast deaktivieren und sicherstellen, dass kein OS-Nachtfilter aktiv ist'],
        ['Mauszeiger bleibt sichtbar', 'Bewegung hat den Inaktivitätstimer zurückgesetzt oder Browser hat Cursor-Ausblendung kurzzeitig blockiert', 'Maus zwei Sekunden lang nicht bewegen oder Fernbedienung/Tastatur verwenden'],
        ['Vollbild startet nicht', 'Browser hat Vollbild außerhalb eines direkten Klicks verweigert oder TV-Browser-Einschränkung', 'Startknopf erneut drücken oder Browser-Vollbild-Shortcut verwenden'],
        ['Blooming ändert sich zwischen Modi', 'Local-Dimming-Einstellung ändert das Zonenverhalten', 'Niedrig, Mittel, Hoch und Aus erneut testen, um den Kompromiss zu verstehen'],
        ['OLED sieht grau aus', 'Videobereichs-Fehlanpassung, Raumreflexionen oder Bildmodus mit angehobenen Schwarzwerten', 'Quellbereich, Schwarzpegel, Helligkeit und Umgebungsreflexionen prüfen'],
      ],
    },
    {
      type: 'summary',
      title: 'Praktische Interpretation',
      items: [
        'Backlight Bleeding ist am überzeugendsten, wenn es positioniert fest ist und bei echten dunklen Inhalten sichtbar wird',
        'IPS Glow ändert sich mit dem Winkel, testen Sie also aus der Position, in der Sie tatsächlich sitzen',
        'Blooming ist eine Local-Dimming-Begrenzung, kein Dead-Pixel-Problem',
        'OLED sollte den reinen Schwarztest bestehen, benötigt aber trotzdem separate Nahschwarz-Gleichmäßigkeitsprüfungen',
        'Ein gutes Test-Setup ist dunkel, im Vollbild, mit hoher Helligkeit und frei von Reflexionen',
      ],
    },
  ],
  ui: {
    bleedTitle: 'Backlight Bleeding',
    bleedDescription: 'Vollbild in exaktem Schwarz für Randlichtlecks, IPS Glow, Clouding und Schwarzgleichmäßigkeitsprüfungen.',
    bloomingTitle: 'Local Dimming',
    bloomingDescription: 'Ein ziehbarer weißer Kreis belastet Mini LED, FALD, OLED-Nahschwarzverhalten und TV-Dimming-Zonen.',
    startBleed: 'Schwarztest starten',
    startBlooming: 'Blooming-Test starten',
    prepTitle: 'Bevor Sie beginnen',
    prepBrightness: 'Stellen Sie die Monitor- oder TV-Helligkeit auf 100 %.',
    prepRoom: 'Schalten Sie das Raumlicht aus und entfernen Sie Reflexionen.',
    prepFullscreen: 'Drücken Sie Escape, um den Vollbildmodus zu verlassen und den Test zurückzusetzen.',
    panelLabel: 'Paneldefekt-Vorschau',
    parametersLabel: 'Testparameter',
    modeControlsLabel: 'Backlight-Testmodi',
    blackLevelLabel: 'Schwarz',
    blackLevelValue: '#000000',
    brightnessLabel: 'Helligkeit',
    brightnessValue: '100%',
    idleLabel: 'Cursor',
    idleValue: '2s',
    fullscreenLabel: 'Vollbild',
    fullscreenValue: 'API',
    escapeHint: 'Reiner Schwarztest läuft. Maus 2 Sekunden nicht bewegen, um den Cursor auszublenden. Esc zum Beenden drücken.',
    dragHint: 'Weißen Kreis ziehen oder berühren. Auf Halos, Zonenraster und verzögertes Dimming achten. Esc zum Beenden drücken.',
  },
};
