import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'input-lag-verzogerung-test';
const title = 'Input Lag und Systemlatenz Test';
const description = 'Online-Messwerkzeug für Hardware-Eingabeverzögerung und System-Latenz mit hochpräziser Leistungsmessung und Bildschirmsynchronisation.';

const faqData = [
  {
    question: 'Was ist Input Lag und System-Latenz?',
    answer: 'Input Lag ist die gesamte Zeitverzögerung zwischen einer physischen Benutzerinteraktion (wie dem Klicken einer Maus oder dem Drücken einer Taste) und der sichtbaren Aktualisierung des Bildes auf dem Bildschirm.',
  },
  {
    question: 'Wie misst dieser Online-Latenz-Test die Eingabeverzögerung?',
    answer: 'Er erfasst Hardware-Ereigniszeitstempel mittels performance.now() und korreliert diese mit den darauffolgenden requestAnimationFrame-Darstellungszyklen, um die Zeitspanne vom Ereignis bis zum Rendering zu berechnen.',
  },
  {
    question: 'Was gilt als guter Input Lag beim Gaming?',
    answer: 'Unter 10 ms gilt als ultraschnell für kompetitive E-Sports. 10 ms bis 20 ms sind schnell, 20 ms bis 35 ms sind moderat und über 35 ms ist eine spürbare Eingabeverzögerung.',
  },
  {
    question: 'Wie kann ich den Input Lag auf meinem PC reduzieren?',
    answer: 'Erhöhe die Bildwiederholfrequenz des Monitors, deaktiviere VSync, aktiviere G-Sync oder FreeSync, erhöhe die USB-Maus-Abtastrate auf 1000 Hz oder mehr und aktiviere Latenz-Optimierungen wie NVIDIA Reflex.',
  },
  {
    question: 'Beeinflusst die Bildwiederholfrequenz des Bildschirms den Input Lag?',
    answer: 'Ja. Höhere Bildwiederholfrequenzen verringern die Bilddauer. Ein 60-Hz-Bildschirm hat eine Bilddauer von 16,67 ms, während ein 240-Hz-Bildschirm eine Bilddauer von nur 4,17 ms aufweist.',
  },
];

const howToData = [
  {
    name: 'Testmodus wählen',
    text: 'Wähle den Modus Sofortige Reaktion, Tastendruck-Latenz oder Visuelle Reaktionslatenz.',
  },
  {
    name: 'Physische Eingaben durchführen',
    text: 'Klicke in das Zielgelände oder drücke Tasten, um Hardware-Eingabeereignisse auszulösen.',
  },
  {
    name: 'Echtzeit-Latenzmetriken beobachten',
    text: 'Überprüfe die berechneten Werte für durchschnittliche, minimale und maximale Latenz sowie Jitter.',
  },
  {
    name: 'Bildschirm-Timing überprüfen',
    text: 'Überwache aktuelle FPS und Bilddauer zur Bestätigung der Bildwiederholstabilität.',
  },
  {
    name: 'Messverlauf analysieren',
    text: 'Untersuche den Verlauf, um Latenzspitzen und Abweichungen zu identifizieren.',
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

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'System-Latenz',
  modeInstant: 'Sofortige Reaktion',
  modeKey: 'Tastendruck-Latenz',
  modeVisual: 'Visuelle Reaktionslatenz',
  targetClickPrompt: 'Klicke oder tippe in dieses Feld, um die Latenz zu messen',
  targetKeyPrompt: 'Drücke eine beliebige Taste (z. B. Leertaste), um die Tastaturlatenz zu messen',
  targetWaitPrompt: 'Warte auf den grünen Hintergrund...',
  targetNowPrompt: 'JETZT KLICKEN!',
  labelAvgLatency: 'Durchschnittliche Latenz',
  labelMinLatency: 'Minimale Latenz',
  labelMaxLatency: 'Maximale Latenz',
  labelJitter: 'Latenz-Jitter (Standardabw.)',
  labelFps: 'Aktuelle FPS',
  labelFrameTime: 'Bilddauer',
  labelSamples: 'Messungen',
  labelGrade: 'Latenz-Bewertung',
  gradeUltraFast: 'Ultraschnell (<10ms)',
  gradeFast: 'Schnell (10-20ms)',
  gradeModerate: 'Moderat (20-35ms)',
  gradeHigh: 'Hoch (>35ms)',
  btnReset: 'Messungen zurücksetzen',
  btnCopyReport: 'Benchmark-Bericht kopieren',
  reportCopied: 'Bericht kopiert!',
  historyTitle: 'Aktuelle Latenzmessungen',
  pipelineTitle: 'Hardware-Signalpfad Latenzanalyse',
  distributionTitle: 'Latenz-Frequenzverteilung',
  sampleCol: 'Messung',
  typeCol: 'Eingabetyp',
  latencyCol: 'Gemessene Latenz',
};

export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: 'Input Lag und Systemlatenz Test im Überblick',
    },
    {
      type: 'paragraph',
      html: 'Der Input Lag beschreibt die exakte Zeitverzögerung zwischen der physischen Ausführung einer Aktion durch den Benutzer (wie das Klicken einer Maustaste oder das Drücken einer Tastaturtaste) und der visuellen Darstellung auf dem Bildschirm. In kompetitiven E-Sports und schnellen Spielen ist die Minimierung der Systemlatenz entscheidend für die Reaktionsgeschwindigkeit und Zielgenauigkeit. Die Gesamtlatenz setzt sich zusammen aus der Peripherieverzögerung, der Betriebssystem-Ereignisverarbeitung, der Engine-Renderzeit, den Grafiktreiber-Puffern und der Reaktionszeit des Monitorpanels.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '< 10 ms',
          label: 'E-Sports Ziel-Latenz',
          trend: 'Optimaler Wert',
        },
        {
          value: '1000 Hz',
          label: 'Standard USB-Abtastrate',
          trend: '1.0 ms Intervall',
        },
        {
          value: '240 Hz',
          label: 'High-Refresh Monitor',
          trend: '4.16 ms Bilddauer',
        },
        {
          value: '16.6 ms',
          label: '60Hz Bilddauer',
          trend: 'Basisverzögerung pro Bild',
        },
      ],
      columns: 4,
    },
    {
      type: 'card',
      title: 'Wie funktioniert die Latenzmessung im Browser?',
      html: 'Dieser Test nutzt hochpräzise Hardware-Zeitstempel über <code>performance.now()</code> in Kombination mit DOM-Hardwareereignissen (<code>pointerdown</code> und <code>keydown</code>). Durch Synchronisation mit den Darstellungszyklen des Bildschirms über <code>requestAnimationFrame</code> berechnet die Anwendung die Zeitspanne zwischen der physischen Eingabe und der tatsächlichen Aktualisierung der Anzeige direkt in Ihrem Browser.',
    },
    {
      type: 'title',
      text: 'Der Weg des Signals vom Schalter bis zur Anzeige',
    },
    {
      type: 'paragraph',
      html: 'Um die Eingabeverzögerung effektiv zu verstehen und zu reduzieren, muss die gesamte Signalkette betrachtet werden. Die Gesamtlatenz ergibt sich aus der Summe von Peripherie-Latenz, Betriebssystem-Verarbeitung, Render-Pipeline und Monitor-Panellatenz.',
    },
    {
      type: 'table',
      headers: ['Komponente', 'Typische Verzögerung', 'Hauptursache', 'Optimierung'],
      rows: [
        ['Schalter der Peripherie', '0.2 ms - 5.0 ms', 'Entprellzeiten, mechanische Kontakte', 'Optische Schalter nutzen'],
        ['USB-Abtastrate (Polling)', '0.125 ms - 8.0 ms', '125 Hz vs 1000 Hz / 8000 Hz', 'Abtastrate auf 1000Hz+ erhöhen'],
        ['Betriebssystem-Queue', '0.5 ms - 3.0 ms', 'Hintergrundaufgaben, Compositor', 'Spielmodus aktivieren'],
        ['Engine-Rendering', '4.0 ms - 20.0 ms', 'CPU-Limitierungen, Thread-Synchronisation', 'NVIDIA Reflex / Anti-Lag nutzen'],
        ['GPU-Frame-Puffer', '8.0 ms - 33.0 ms', 'VSync aktiviert, Mehrfachpufferung', 'VSync deaktivieren, VRR nutzen'],
        ['Bildschirmverarbeitung', '1.0 ms - 15.0 ms', 'Bildprozessoren, Scaler-Latenz', 'Spielemodus am TV/Monitor aktivieren'],
      ],
    },
    {
      type: 'tip',
      title: 'Wie verringere ich Latenzen bei hoher Grafikkartenauslastung?',
      html: 'Wenn die GPU zu 99% ausgelastet ist, puffert der Grafiktreiber oft mehrere Bilder im Voraus. Dies erzeugt spürbaren Input Lag (oft 30 ms bis 50 ms). Begrenzen Sie Ihre Bildrate leicht unterhalb der maximalen Kapazität der Grafikkarte oder nutzen Sie Technologien wie NVIDIA Reflex.',
    },
    {
      type: 'title',
      text: 'Vergleich der Latenz von Gaming-Mäusen, Tastaturen und Touchscreens',
    },
    {
      type: 'paragraph',
      html: 'Unterschiedliche Eingabegeräte weisen je nach Architektur und Übertragungsprotokoll deutliche Latenzunterschiede auf.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Gaming Mäuse',
          description: 'Hochfrequente kabellose (2.4GHz) oder kabelgebundene Verbindungen.',
          highlight: '0.5ms - 2ms Latenz',
          points: [
            '1000Hz bis 8000Hz Abtastrate',
            'Optische Schalter ohne Entprellverzögerung',
            'Sensoren mit minimaler Bewegungsverzögerung',
          ],
        },
        {
          title: 'Mechanische Tastaturen',
          description: 'Tastaturmatrix-Abtastung mit optimierter Entprellung.',
          highlight: '1ms - 10ms Latenz',
          points: [
            'Hall-Effekt-Magnetschalter mit Rapid Trigger',
            'Matrix-Abtastraten von 500Hz bis 8000Hz',
            'Einstellbarer Auslöseweg',
          ],
        },
        {
          title: 'Touchscreens',
          description: 'Kapazitive Abtastung auf mobilen Geräten.',
          highlight: '15ms - 45ms Latenz',
          points: [
            'Touch-Abtastraten (120Hz - 480Hz)',
            'Verzögerung durch Betriebssystem-Compositor',
            'Kapazitive Filteralgorithmen',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Einfluss der Bildwiederholfrequenz auf die Latenz',
    },
    {
      type: 'paragraph',
      html: 'Die Bildwiederholfrequenz bestimmt die minimal mögliche Darstellungsverzögerung auf dem Monitor.',
    },
    {
      type: 'list',
      items: [
        '60 Hz Bildschirm: 1 Bild = 16.67 ms Bilddauer (Durchschnittliche Latenz: ~8.33 ms)',
        '120 Hz Bildschirm: 1 Bild = 8.33 ms Bilddauer (Durchschnittliche Latenz: ~4.16 ms)',
        '144 Hz Bildschirm: 1 Bild = 6.94 ms Bilddauer (Durchschnittliche Latenz: ~3.47 ms)',
        '240 Hz Bildschirm: 1 Bild = 4.17 ms Bilddauer (Durchschnittliche Latenz: ~2.08 ms)',
        '360 Hz Bildschirm: 1 Bild = 2.78 ms Bilddauer (Durchschnittliche Latenz: ~1.39 ms)',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Input Lag',
          definition: 'Die verstreichende Zeit von der physischen Eingabe bis zur sichtbaren Reaktion auf dem Display.',
        },
        {
          term: 'Jitter (Latenz-Schwankung)',
          definition: 'Die Standardabweichung der Latenzmessungen, die die Gleichmäßigkeit des Systems angibt.',
        },
        {
          term: 'VSync (Vertikale Synchronisation)',
          definition: 'Verhindert Bildrissen (Tearing), erhöht jedoch die Eingabeverzögerung spürbar.',
        },
        {
          term: 'Variable Refresh Rate (VRR)',
          definition: 'Technologien wie G-Sync und FreeSync, die Bildwiederholfrequenz dynamisch anpassen.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Vor- und Nachteile der browserbasierten Latenzmessung',
    },
    {
      type: 'paragraph',
      html: 'Die Latenzmessung direkt im Webbrowser ermöglicht die sofortige Überprüfung ohne Zusatzgeräte.',
    },
    {
      type: 'proscons',
      title: 'Bewertung der Browsermessung',
      items: [
        {
          pro: 'Keine Softwareinstallation oder Zusatzhardware erforderlich',
          con: 'Abhängig von der Ereignisschleife des Browsers und Fenstermanagern',
        },
        {
          pro: 'Hohe Präzision durch mikrosekundengenauen Leistungstimer',
          con: 'Optische Reaktionszeit von Bildschirm-Pixeln kann nicht direkt erfasst werden',
        },
        {
          pro: 'Sofortiger Vergleichstest zwischen verschiedenen Peripheriegeräten',
          con: 'Sicherheitseinschränkungen bei der Timer-Präzision im Browser',
        },
      ],
    },
    {
      type: 'title',
      text: 'Diagnose bei hoher Eingabeverzögerung',
    },
    {
      type: 'paragraph',
      html: 'Falls Ihre Ergebnisse eine hohe Latenz (>30 ms) aufweisen, überprüfen Sie die folgenden Einstellungen.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Hinweis zu hoher Latenz',
      html: 'Wenn die durchschnittliche Latenz 35 ms überschreitet, prüfen Sie, ob VSync im Grafiktreiber aktiviert ist. Eine deaktivierte Hardwarebeschleunigung im Browser kann ebenfalls erhebliche Verzögerungen verursachen.',
    },
    {
      type: 'title',
      text: 'Schritte zur Optimierung der System-Latenz',
    },
    {
      type: 'paragraph',
      html: 'Führen Sie diese Schritte aus, um die Latenz auf Ihrem System zu reduzieren.',
    },
    {
      type: 'summary',
      title: 'Checkliste zur Latenzoptimierung',
      items: [
        'USB-Abtastrate der Maus in der Herstellersoftware auf 1000Hz oder höher stellen.',
        'Hardwarebeschleunigte GPU-Planung (HAGS) in den Windows-Einstellungen aktivieren.',
        'Spielemodus am TV oder Monitor aktivieren, um Skalierungsverzögerungen zu umgehen.',
        'VSync in den 3D-Einstellungen der Grafikkarte deaktivieren und G-Sync / FreeSync nutzen.',
        'NVIDIA Reflex oder AMD Anti-Lag in unterstützten Spielen aktivieren.',
        'Sicherstellen, dass die Hardwarebeschleunigung im Browser aktiviert ist.',
      ],
    },
    {
      type: 'message',
      title: 'Best Practice für verlässliche Testergebnisse',
      html: 'Schließen Sie für optimale Ergebnisse Hintergrundanwendungen, führen Sie den Browser im Vollbildmodus aus und führen Sie mindestens 15 bis 20 Messungen durch.',
    },
  ],
};
