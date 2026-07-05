import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OledScreenBurnInFixerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'oled-einbrenn-reparatur';
const title = 'OLED Einbrenn Reparatur';
const description =
  'Führen Sie eine vollflächige OLED Einbrenn Reparatur und einen LCD Stuck Pixel Exerciser mit schnellen RGB Farbzyklen, weißem Rauschen, einer erforderlichen Fotosensitivitätswarnung und einem nativen Timer aus.';

const faqData = [
  {
    question: 'Kann ein OLED Einbrenn Fixer dauerhaftes Einbrennen entfernen?',
    answer:
      'Kein Browser Tool kann dauerhaften organischen Subpixel Verschleiß rückgängig machen. Ein Pixel Exerciser kann temporäre Bildretention reduzieren, leichtes Ghosting weniger sichtbar machen oder bei der Diagnose helfen, ob eine Markierung temporäre Retention oder dauerhaftes Einbrennen ist.',
  },
  {
    question: 'Ist dies für Menschen mit fotosensitiver Epilepsie sicher?',
    answer:
      'Der Test verwendet schnell blinkende Farben und kontrastreiche Statik. Menschen mit fotosensitiver Epilepsie, Migräneempfindlichkeit, Anfallsrisiko oder Unbehagen durch blinkendes Licht sollten ihn nicht ausführen.',
  },
  {
    question: 'Kann dies einen festsitzenden LCD Pixel reparieren?',
    answer:
      'Es kann manchmal helfen, wenn ein Pixel festsitzt und rot, grün, blau oder weiß bleibt, indem der Subpixel Zustand schnell gewechselt wird. Einen toten schwarzen Pixel oder physische Panel Schäden kann es nicht reparieren.',
  },
  {
    question: 'Wie lange sollte ich den Pixel Exerciser laufen lassen?',
    answer:
      'Beginnen Sie mit 5 bis 10 Minuten für einen festsitzenden Pixel oder leichte Bildretention. Längere Durchläufe sollten beaufsichtigt werden, die Helligkeit vernünftig bleiben und der Bildschirm abkühlen können.',
  },
  {
    question: 'Warum verwendet das Tool Canvas anstelle von Video?',
    answer:
      'Die Muster werden direkt in HTML5 Canvas generiert, sodass die Seite keine schweren Video Assets benötigt. Das hält die Ladezeiten kurz und macht den Farb und Rausch Zyklus reaktionsfähig auf die Vollbildgröße.',
  },
];

const howToData = [
  {
    name: 'Lesen Sie die Fotosensitivitätswarnung',
    text: 'Fahren Sie nicht fort, wenn blinkendes Licht, kontrastreiche Muster, Migräne oder Anfallsrisiko Sie oder jemanden in Ihrer Nähe betreffen könnten.',
  },
  {
    name: 'Stellen Sie einen kurzen ersten Durchlauf ein',
    text: 'Wählen Sie 5 bis 10 Minuten für einen ersten Durchgang, den Hybrid Modus und halten Sie die Helligkeit auf einem angenehmen Niveau.',
  },
  {
    name: 'Starten Sie die Vollbild Reparatur',
    text: 'Bestätigen Sie die Warnung, drücken Sie Reparatur starten und lassen Sie das Canvas die RGB Farben und Statik durchlaufen, ohne andere Fenster über das Display zu ziehen.',
  },
  {
    name: 'Untersuchen Sie die Markierung danach',
    text: 'Stoppen Sie den Test, zeigen Sie neutrale Grau , Weiß , Schwarz , Rot , Grün und Blau Bildschirme an und vergleichen Sie, ob sich das Geisterbild oder der festsitzende Pixel verändert hat.',
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

export const content: ToolLocaleContent<OledScreenBurnInFixerUI> = {
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
      text: 'OLED Einbrenn Fixer und LCD Stuck Pixel Exerciser',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieser OLED Bildschirm Einbrenn Fixer ist ein vollflächiger Pixel Exerciser für temporäre Bildretention, schwache Geisterbilder und einige festsitzende LCD Pixel. Er generiert schnelle rote, grüne, blaue, weiße, schwarze, gelbe und statische Muster direkt in HTML5 Canvas. Es gibt keine Video Dateien, keine externen Bild Assets und keinen Download Schritt: der Browser malt jedes Einzelbild in der aktuellen Bildschirmgröße.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Fotosensitivitätswarnung',
      icon: 'mdi:alert',
      badge: 'Erforderlich',
      html: 'Das Reparaturmuster verwendet schnelle Blitze, kontrastreiche Übergänge und weißes Rauschen. Führen Sie es nicht aus, wenn Sie fotosensitive Epilepsie, Anfallsrisiko, Migräneempfindlichkeit, durch blinkendes Licht ausgelösten Schwindel haben oder wenn jemand in Ihrer Nähe betroffen sein könnte. Brechen Sie sofort ab, wenn Sie Augenbelastung, Übelkeit, Kopfschmerzen oder Unbehagen verspüren.',
    },
    {
      type: 'paragraph',
      html: 'Das Tool ist nützlich, wenn die praktische Frage lautet: <strong>Ist diese Markierung temporäre Retention, die verblassen kann, oder dauerhafter Panel Verschleiß?</strong> Ein kurzer beaufsichtigter Durchlauf kann manchmal ein Geisterbild reduzieren, das durch zurückgehaltene statische UI Elemente verursacht wurde, und manchmal einen Subpixel wecken, der auf einer Farbe festsitzt. Es kann abgenutztes OLED Material nicht wiederherstellen, eine gerissene Schicht nicht reparieren, eine defekte Treiberleitung nicht wiederherstellen und keine Wiederherstellung garantieren.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0 MB', label: 'Video Assets geladen', icon: 'mdi:speedometer' },
        { value: 'RGB', label: 'primäres Subpixel Training', icon: 'mdi:palette' },
        { value: '1-120 min', label: 'nativer Sitzungs Timer', icon: 'mdi:timer-outline' },
        { value: '100%', label: 'clientseitige Ausführung', icon: 'mdi:lock-outline' },
      ],
    },
    {
      type: 'title',
      text: 'Was Einbrennen, Bildretention und Ghosting bedeuten',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'OLED Einbrennen',
          definition: 'Dauerhafte ungleichmäßige Abnutzung organischer Subpixel. Ein statisches Logo, eine Taskleiste, eine Navigationsleiste oder ein Spiel HUD kann eine sichtbare Form hinterlassen, weil diese Pixel anders gealtert sind als der Rest des Panels.',
        },
        {
          term: 'Temporäre Bildretention',
          definition: 'Ein kurzlebiges Geisterbild, das nach dem Verschwinden statischer Inhalte zurückbleibt. Es kann mit normalem gemischtem Inhalt, einem Kompensationszyklus oder einem Pixel Trainingsmuster verblassen.',
        },
        {
          term: 'LCD Stuck Pixel',
          definition: 'Ein Pixel oder Subpixel, das rot, grün, blau, weiß oder eine andere feste Farbe anzeigt. Schnelle Zustandswechsel können ihn manchmal befreien, wenn das Problem kein physischer Schaden ist.',
        },
        {
          term: 'Toter Pixel',
          definition: 'Ein Pixel, der schwarz bleibt, weil er kein Licht mehr korrekt emittiert oder überträgt. Ein Browser Pixel Exerciser kann einen wirklich toten Pixel normalerweise nicht wiederbeleben.',
        },
        {
          term: 'LCD Ghosting',
          definition: 'Bewegungsspuren, die durch langsame Pixel Reaktion verursacht werden. Das unterscheidet sich vom Bildschirm Einbrennen, obwohl Anwender beides oft als Geisterbilder beschreiben.',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Temporäre Retention',
          description: 'Verblasst normalerweise nach gemischtem Inhalt, Bildschirm Auffrischungsroutinen oder einer kurzen RGB und Rausch Sitzung.',
          icon: 'mdi:history',
          highlight: true,
          points: ['Sichtbar nach statischem Inhalt', 'An den Rändern oft weicher', 'Kann sich innerhalb von Minuten oder Stunden verbessern'],
        },
        {
          title: 'Dauerhaftes Einbrennen',
          description: 'Ungleichmäßiger OLED Verschleiß, der nach Ruhephasen, Kompensationszyklen und abwechslungsreichem Inhalt sichtbar bleibt.',
          icon: 'mdi:contrast-circle',
          points: ['Entspricht langfristiger statischer UI', 'Auf einfarbigen Flächen am deutlichsten', 'Verschwindet nicht nach dem Training'],
        },
        {
          title: 'Stuck Pixel',
          description: 'Ein einzelner Punkt oder winziger Cluster, der auf einer Farbe festhängt, statt eines großen Geisterbildes.',
          icon: 'mdi:grain',
          points: ['Oft einen Pixel breit', 'Kann rot, grün, blau oder weiß sein', 'Reagiert manchmal auf schnelle Farbwechsel'],
        },
      ],
    },
    {
      type: 'title',
      text: 'So verwenden Sie den Pixel Exerciser sicher',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Senken Sie die Helligkeit vor dem ersten Durchlauf, besonders bei OLED Handys, OLED Fernsehern und Laptop OLED Panels.',
        'Beginnen Sie mit 5 bis 10 Minuten; lassen Sie das Display bei langen Sitzungen nicht unbeaufsichtigt.',
        'Verwenden Sie den Vollbildmodus, damit der betroffene Bereich dasselbe Muster wie der Rest des Panels erhält.',
        'Informieren Sie den Raum über das blinkende Licht; führen Sie den Test nicht in der Nähe von Personen durch, die nicht eingewilligt haben.',
        'Brechen Sie ab, wenn das Panel ungewöhnlich warm wird, der Browser stark ruckelt oder Sie Unbehagen verspüren.',
        'Überprüfen Sie nach dem Durchlauf neutrale Grau , Weiß , Schwarz , Rot , Grün und Blau Bildschirme, um die Ergebnisse zu vergleichen.',
      ],
    },
    {
      type: 'table',
      headers: ['Problem', 'Erster Modus', 'Erste Dauer', 'Helligkeitsempfehlung'],
      rows: [
        ['Schwaches OLED Geisterbild', 'Hybrid RGB plus Statik', '5-10 Minuten', 'Angenehm, nicht maximal'],
        ['Frische statische Logo Retention', 'RGB Zyklus', '10-20 Minuten', 'Moderate Helligkeit'],
        ['Einzelner farbiger LCD Stuck Pixel', 'Statik oder Hybrid', '5-15 Minuten', 'Normale Desktop Helligkeit'],
        ['Altes dauerhaftes Einbrennen', 'Hybrid nur zur Diagnose', '5 Minuten', 'Lange Durchläufe mit hoher Helligkeit vermeiden'],
        ['Toter schwarzer Pixel', 'Als Reparatur nicht empfohlen', 'Nur Inspektion', 'Kein Pixel Exerciser kann Wiederherstellung garantieren'],
      ],
    },
    {
      type: 'tip',
      title: 'Verwenden Sie zuerst kurze Sitzungen',
      html: 'Eine lange Blink Sitzung ist nicht automatisch besser. Wenn eine Markierung temporär ist, sehen Sie oft schon nach einem kurzen Durchlauf eine Veränderung. Wenn sich nach einem vernünftigen Versuch und einer normalen Panel Auffrischungsroutine nichts ändert, handelt es sich möglicherweise um dauerhaften Verschleiß oder einen Hardware Defekt.',
    },
    {
      type: 'title',
      text: 'Wahl zwischen RGB Zyklus, weißem Rauschen und Hybrid Modus',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Verschiedene Artefakte reagieren auf unterschiedliche Muster. Ein Rot Grün Blau Zyklus trainiert die primären Subpixel in einer kontrollierten Abfolge. Weißes Rauschen wechselt die Helligkeit schnell über viele kleine Bereiche, was helfen kann, isolierte festsitzende Pixel freizulegen und zu trainieren. Der Hybrid Modus wechselt zwischen beidem und ist daher die beste erste Wahl, wenn Sie nicht sicher sind, ob das Problem Bildretention oder ein träger Subpixel ist.',
    },
    {
      type: 'table',
      headers: ['Modus', 'Was er tut', 'Am besten für', 'Zu beachten'],
      rows: [
        ['RGB Zyklus', 'Vollflächige Primär und Hochkontrast Felder', 'OLED Retention und Farbkanal Inspektion', 'Sichtbares Blinken'],
        ['Weißes Rauschen', 'Zufällige Schwarz Weiß Statik über das Panel', 'Einzelne Stuck Pixel und winzige Cluster', 'Höhere visuelle Intensität'],
        ['Hybrid', 'Wechselt zwischen Farbfeldern und Statik', 'Allgemeiner OLED Einbrenn Fixer Workflow', 'Zuerst einen kurzen Timer verwenden'],
      ],
    },
    {
      type: 'proscons',
      title: 'Online Pixel Exerciser: realistische Vorteile und Grenzen',
      items: [
        {
          pro: 'Läuft sofort im Browser ohne Software Installation oder Laden von Video Dateien.',
          con: 'Kann dauerhaften OLED Materialverschleiß oder physische Panel Schäden nicht rückgängig machen.',
        },
        {
          pro: 'Vollbild Canvas deckt das Display mit generierten RGB und Statik Einzelbildern ab.',
          con: 'Browser Timing, Geräteleistung und Vollbild Unterstützung können die Animationskonsistenz beeinflussen.',
        },
        {
          pro: 'Nützlich für eine erste Diagnose, bevor man Hersteller Panel Wartungsroutinen ausprobiert.',
          con: 'Sollte den Garantieservice für neue Panels mit offensichtlichen Defekten nicht ersetzen.',
        },
      ],
    },
    {
      type: 'title',
      text: 'OLED Spezifische Hinweise',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'OLED Pixel emittieren ihr eigenes Licht. Wenn ein statisches Element über viele Stunden auf dem Bildschirm bleibt, können die Subpixel unter diesem Element unterschiedlich schnell altern. Deshalb folgt das Einbrennen oft der Form von TV Senderlogos, Telefon Statusleisten, Navigationsbuttons, Spiel HUDs, Streaming App Seitenleisten oder Desktop Taskleisten. Ein Pixel Exerciser kann temporäre Retention schneller verblassen lassen, aber dauerhafte unterschiedliche Alterung bleibt ein Materialproblem.',
    },
    {
      type: 'card',
      icon: 'mdi:cog-outline',
      title: 'Prüfen Sie zuerst die integrierte Panel Pflege',
      html: 'Viele OLED Fernseher, Monitore, Laptops und Telefone verfügen über Pixel Refresh, Panel Refresh, Logo Dimming, Screen Shift, Taskleisten Dimming oder Kompensationszyklen. Verwenden Sie die Herstellerroutine gemäß den Anweisungen, insbesondere wenn das Display unter Garantie steht. Dieses Online Tool ist am besten als sanfte Diagnose und temporäre Retentionsübung zu verstehen, nicht als Ersatz für die Panel Pflege Firmware.',
    },
    {
      type: 'list',
      items: [
        'Wenn das Geisterbild neu ist, lassen Sie das Display gemischte Inhalte zeigen oder ruhen, bevor Sie von dauerhaftem Einbrennen ausgehen.',
        'Wenn die Markierung einem jahrealten statischen Logo entspricht, wird ein Pixel Exerciser es wahrscheinlich nicht vollständig entfernen.',
        'Wenn das Panel einen integrierten Refresh Zyklus hat, führen Sie ihn nur so oft durch, wie vom Hersteller empfohlen.',
        'Vermeiden Sie es, Testmuster stundenlang mit maximaler Helligkeit laufen zu lassen; Hitze und Helligkeit tragen zum Verschleiß bei.',
        'Blenden Sie Taskleisten aus, aktivieren Sie Bildschirmschoner und reduzieren Sie die Helligkeit statischer UI, um ein Wiederauftreten zu verhindern.',
      ],
    },
    {
      type: 'title',
      text: 'LCD Stuck Pixel Hinweise',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'LCD Panels brennen nicht auf die gleiche Weise ein wie OLED Panels, können aber festsitzende Pixel, Druckstellen, Panel Defekte und temporäre Bildpersistenz zeigen. Ein festsitzender Pixel, der rot, grün, blau, cyan, magenta, gelb oder weiß bleibt, kann durch einen Subpixel verursacht werden, der nicht korrekt umschaltet. Schnelle Wechsel können manchmal helfen, obwohl es keine garantierte Online Reparatur gibt.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Toter Pixel versus Stuck Pixel',
      icon: 'mdi:information-outline',
      badge: 'Diagnose',
      html: 'Ein farbiger Punkt hat eine bessere Chance als ein schwarzer Punkt. Ein schwarzer Pixel auf jeder Testfarbe ist in der Regel tot oder blockiert. Ein farbiger Pixel, der auf manchen Hintergründen wechselt, auf anderen aber nicht, könnte ein festsitzender Subpixel sein und ist ein besserer Kandidat für eine kurze Pixel Trainingseinheit.',
    },
    {
      type: 'summary',
      title: 'Bevor Sie Druck oder physische Methoden anwenden',
      items: [
        'Drücken Sie nicht fest auf OLED Panels, Touchscreens oder empfindliche Laptop Bildschirme.',
        'Vermeiden Sie scharfe Werkzeuge, in Tuch gewickelte Stifte und jede Methode, die die Oberfläche zerkratzen könnte.',
        'Verwenden Sie zuerst Software Training, dann Garantie Support, wenn der Defekt bestehen bleibt.',
        'Dokumentieren Sie den Defekt mit Makrofotos, wenn das Display neu ist und Rückgaberichtlinien noch gelten.',
      ],
    },
    {
      type: 'title',
      text: 'Warum Canvas besser ist als ein schweres Reparaturvideo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ein videobasierter Einbrenn Fixer muss kodierte Einzelbilder herunterladen, dekodieren, auf den Bildschirm skalieren und hoffen, dass die Kompression die exakten Übergänge nicht weichgezeichnet hat. Dieses Tool generiert jedes Einzelbild direkt im Browser. Die RGB Felder sind vollflächig, das Rauschen wird für die aktuelle Canvas Größe erstellt, und die Seite vermeidet große Mediendateien, die das Laden verlangsamen oder den PageSpeed verringern würden.',
    },
    {
      type: 'list',
      items: [
        'Keine externe Video Datei bedeutet schnelleres erstes Rendering und weniger Netzwerkabhängigkeit.',
        'Die Canvas Ausgabe skaliert auf die Vollbildfläche, statt durch eine Videoauflösung begrenzt zu sein.',
        'Der Timer kann die Reparatur automatisch beenden, statt ein Video endlos in Schleife abzuspielen.',
        'Modus, Geschwindigkeit, Dauer und Intensität können geändert werden, ohne ein weiteres Asset zu laden.',
      ],
    },
    {
      type: 'message',
      title: 'Eine praktische Erwartung',
      ariaLabel: 'Einbrenn Fixer Erwartung',
      html: 'Verwenden Sie dieses Werkzeug als kontrollierten ersten Schritt: reduzieren Sie temporäre Retention, trainieren Sie einen möglichen festsitzenden Pixel und sammeln Sie Nachweise. Wenn die Markierung abwechslungsreiche Inhalte, integrierte Panel Refresh Routinen und sorgfältige kurze Trainingseinheiten übersteht, behandeln Sie sie als Hardware oder Garantiefall.',
    },
  ],
  ui: {
    safetyTitle: 'Warnung vor blinkendem Licht',
    safetyBody: 'Dieses Reparaturmuster blinkt schnell mit Vollfarben und kontrastreicher Statik. Verwenden Sie es nicht, wenn Sie oder jemand in Ihrer Nähe von fotosensitiver Epilepsie, Anfällen, Migräne, Schwindel oder Blinklichtempfindlichkeit betroffen sein könnte.',
    safetyChecklist: 'Halten Sie die Helligkeit vernünftig, beaufsichtigen Sie die Sitzung und brechen Sie sofort ab, wenn Sie Unbehagen verspüren.',
    safetyConfirm: 'Ich verstehe das Fotosensitivitätsrisiko und möchte die Reparaturtaste freischalten.',
    safetyContinue: 'Weiter zu den Einstellungen',
    startRepair: 'Reparatur starten (Vollbild)',
    controlsLabel: 'OLED Bildschirm Reparatur Steuerung',
    modeLabel: 'Muster Modus',
    modeCycle: 'RGB Zyklus',
    modeNoise: 'Weißes Rauschen',
    modeHybrid: 'Hybrid',
    modeCycleDescription: 'Vollfarben Primärfarben für Bildretention und Kanalprüfung.',
    modeNoiseDescription: 'Hochfrequente Statik für einzelne Stuck Pixel und winzige Cluster.',
    modeHybridDescription: 'Bester erster Durchlauf: wechselt RGB Felder mit statischer Textur.',
    speedLabel: 'Zyklus Geschwindigkeit',
    durationLabel: 'Dauer',
    durationShort: '5 min',
    durationStandard: '10 min',
    durationDeep: '20 min',
    durationShortDescription: 'Schnellcheck',
    durationStandardDescription: 'Empfohlen',
    durationDeepDescription: 'Beaufsichtigter Durchlauf',
    fullscreenHint: 'Vollbild OLED Einbrenn Reparatur Canvas',
    intensityLabel: 'Statik Intensität',
    warningBadge: 'Blinkender Inhalt',
  },
};
