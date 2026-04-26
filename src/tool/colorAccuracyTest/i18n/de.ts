import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpectrumCanvasUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'farbgenauigkeit-test';
const title = 'Farbgenauigkeitstest: Spectrum Canvas';
const description =
  'Kalibrieren Sie Ihr Display mit Präzision. Testen Sie sRGB- und DCI-P3-Farbräume, erkennen Sie Farbverschiebungen, messen Sie die Genauigkeit mit Delta-E-Metriken und erstellen Sie professionelle Kalibrierungsberichte.';

const faqData = [
  {
    question: 'Was ist Farbgenauigkeit und warum ist sie wichtig?',
    answer:
      'Farbgenauigkeit misst, wie originalgetreu ein Display Farben im Vergleich zu einer Standardreferenz wiedergibt. Für Designer, Fotografen und Content-Ersteller sind genaue Farben unerlässlich, um sicherzustellen, dass ihre Arbeit auf verschiedenen Geräten konsistent aussieht.',
  },
  {
    question: 'Was ist der Unterschied zwischen sRGB und DCI-P3?',
    answer:
      'sRGB ist der Standardfarbraum für das Web und Consumer-Displays. DCI-P3 ist ein breiterer Farbraum, der im digitalen Kino und bei professionellen Displays verwendet wird. DCI-P3 deckt etwa 25 % mehr Farben ab als sRGB.',
  },
  {
    question: 'Was ist Delta E und wie wird es gemessen?',
    answer:
      'Delta E (ΔE) ist ein numerisches Maß für den vom menschlichen Auge wahrgenommenen Farbunterschied. Ein Delta E unter 1 ist nicht wahrnehmbar, unter 2 ist sehr gut, unter 4 ist akzeptabel und über 4 wird es deutlich sichtbar. Unser Test verwendet CIE 1976 Delta-E-Berechnungen.',
  },
  {
    question: 'Kann ich dieses Tool zur Hardware-Kalibrierung verwenden?',
    answer:
      'Dieses Tool bietet eine visuelle Kalibrierungsreferenz und Genauigkeitsmessungen. Für eine professionelle Kalibrierung sollten Sie diese Ergebnisse mit Hardware-Kalibrierungstools (Kolorimetern) und spezieller Software wie ColorThink oder Datacolor SpyderCheckr kombinieren.',
  },
  {
    question: 'Welche Farbräume werden getestet?',
    answer:
      'Wir testen sRGB (Standard), DCI-P3 (Kino) und die Weißpunktgenauigkeit über die Standard-Lichtarten D65 (6500K) und D93 (9300K). Der Test umfasst auch die Überprüfung der Gammakorrektur.',
  },
];

const howToData = [
  {
    name: 'Farbumfang auswählen',
    text: 'Wählen Sie zwischen sRGB (Standard Web/Consumer) oder DCI-P3 (professionelles Kino). Ihr Display passt seine Testpalette entsprechend an.',
  },
  {
    name: 'Hardware benennen (optional)',
    text: 'Geben Sie einen aussagekräftigen Namen für Ihren Monitor oder Ihr Gerät ein (z. B. „MacBook Pro 16 M1“). Dies personalisiert Ihren Bericht.',
  },
  {
    name: 'Vollbildmodus aktivieren',
    text: 'Drücken Sie F11 oder die Vollbild-Schaltfläche, um die Browser-Benutzeroberfläche auszublenden und die maximale Anzeigefläche für präzise Tests zu gewährleisten.',
  },
  {
    name: 'Farbtests durchführen',
    text: 'Führen Sie die Tests für spektrale Reinheit (Vollfarben), Gradientendynamik (fließende Übergänge), Black Crush Detection (Schattendetails) und Weißpunktkalibrierung durch.',
  },
  {
    name: 'Ergebnisse prüfen & exportieren',
    text: 'Erstellen Sie einen visuellen Bericht mit 3D-Gamut-Visualisierung, Delta-E-Metriken und Kalibrierungsempfehlungen. Exportieren Sie diesen als PDF zur Archivierung.',
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

export const content: ToolLocaleContent<SpectrumCanvasUI> = {
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
      text: 'Professioneller Farbgenauigkeitstest: Kalibrieren Sie Ihr Display präzise',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der Spectrum Canvas ist ein professionelles Testtool für Farbgenauigkeit, das für alle entwickelt wurde, die auf farbkritische Arbeit angewiesen sind. Egal, ob Sie Fotograf, Designer, Content-Ersteller oder Hardware-Enthusiast sind, dieses Tool hilft Ihnen dabei, <strong>Farbverschiebungen zu diagnostizieren</strong>, die <strong>Anzeigegenauigkeit zu messen</strong> und <strong>Kalibrierungsberichte zu erstellen</strong>.',
    },
    {
      type: 'title',
      text: 'Warum Farbgenauigkeit wichtig ist',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Schon ein Unterschied von einem Prozentpunkt bei der Farbwiedergabe kann den Unterschied zwischen einem „Wow“-Moment und einer Reaktion wie „das sieht irgendwie falsch aus“ ausmachen. Professionelle Displays liefern eine Genauigkeit innerhalb von <strong>Delta E &lt; 2</strong>. Consumer-Displays driften oft in einen Bereich von Delta E 4-6+ ab, was folgendes verursacht:',
    },
    {
      type: 'paragraph',
      html: '<ul><li>Fotos, die auf Ihrem Monitor lebendig aussehen, im Druck aber stumpf wirken</li><li>Videobearbeitungen, die nicht den Erwartungen des Kunden entsprechen</li><li>Webdesign-Mockups, die nicht den Markenspezifikationen entsprechen</li><li>Hardware-Projekte, bei denen Farbindikatoren falsch interpretiert werden</li></ul>',
    },
    {
      type: 'title',
      text: 'Farbräume verstehen: sRGB vs. DCI-P3',
      level: 3,
    },
    {
      type: 'title',
      text: 'sRGB (Standard-Farbraum)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'sRGB wurde 1996 von Microsoft und HP entwickelt und ist der <strong>universelle Standard für Unterhaltungselektronik</strong> und das Web. Er verwendet einen dreieckigen Farbumfang, der durch drei Primärfarben definiert ist (Rot: 0,6400x 0,3300, Grün: 0,3000 0,6000, Blau: 0,1500 0,0600).',
    },
    {
      type: 'paragraph',
      html: '<strong>Merkmale:</strong><ul><li>Deckt ~35 % des sichtbaren Farbspektrums ab</li><li>Optimiert für typische Umgebungslichtbedingungen</li><li>Gamma: 2,2 (entspricht den meisten Consumer-Displays)</li><li>Geeignet für: Web, soziale Medien, Urlaubsfotos</li></ul>',
    },
    {
      type: 'title',
      text: 'DCI-P3 (Digital Cinema Gamut)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'DCI-P3 wurde vom Digital Cinema Initiatives-Konsortium entwickelt und ist ein <strong>Farbraum in Kinoqualität</strong>, der für Theaterprojektionen und professionelle Displays konzipiert wurde. Er umfasst ~25 % mehr Farben als sRGB.',
    },
    {
      type: 'paragraph',
      html: '<strong>Merkmale:</strong><ul><li>Deckt ~53 % des sichtbaren Farbspektrums ab</li><li>Optimiert für dunkle Kino-Umgebungen</li><li>Gamma: 2,6 (gamma-korrigiert für hohen Kontrast)</li><li>Geeignet für: Filmemachen, professionelle Fotografie, HDR-Inhalte</li></ul>',
    },
    {
      type: 'title',
      text: 'Was ist Delta E? Farbunterschiede quantifizieren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Delta E (ΔE) ist die <strong>Metrik für den vom Menschen wahrnehmbaren Farbunterschied</strong> im CIE-LAB-Farbraum. Sie gibt an, wie nah die Ausgabe Ihres Displays an einer Standardreferenzfarbe liegt.',
    },
    {
      type: 'paragraph',
      html: '<strong>Delta-E-Skala (CIE 1976):</strong><ul><li>0–1: Vom menschlichen Auge nicht wahrnehmbar</li><li>1–2: Kaum wahrnehmbar</li><li>2–4: Wahrnehmbar, aber für den allgemeinen Gebrauch akzeptabel</li><li>4–6: Deutliche Farbverschiebung</li><li>&gt;6: Sehr offensichtlicher Unterschied</li></ul>',
    },
    {
      type: 'paragraph',
      html: 'Professionelle Displays sind so kalibriert, dass sie ein <strong>Delta E &lt; 2</strong> über den gesamten sichtbaren Bereich beibehalten. Consumer-Displays erreichen typischerweise ein Delta E von 3-5.',
    },
    {
      type: 'title',
      text: 'Die Spectrum Canvas Test-Suite',
      level: 3,
    },
    {
      type: 'title',
      text: 'Spektrale Reinheitsprüfung',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Zeigt reine Primär- und Sekundärfarben (Rot, Grün, Blau, Cyan, Magenta, Gelb) an und misst, wie Ihr Monitor diese wiedergibt. Farb-„Flut“-Animationen zeigen eine konsistente Farbwiedergabe auf dem gesamten Bildschirm.',
    },
    {
      type: 'title',
      text: 'Gradientendynamik',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Sanfte Gradienten, die durch den gesamten Farbraum übergehen. Achten Sie auf <strong>Banding-Artefakte</strong> (sichtbare Stufen statt sanfter Übergänge), die auf eine unzureichende Farbbittiefe oder eine schlechte Gammakorrektur hinweisen.',
    },
    {
      type: 'title',
      text: 'Black Crush Detection (Schwarzes-Loch-Test)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Reiner schwarzer (0,0,0) Hintergrund mit kaum sichtbaren, fast schwarzen Tönen. Wenn Schattendetails „zerquetscht“ werden, verliert Ihr Monitor Informationen in dunklen Tönen – häufig bei Mobilgeräten und günstigen Panels.',
    },
    {
      type: 'title',
      text: 'Weißpunktkalibrierung',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Testet verschiedene korrelierte Farbtemperaturen (D65 bei 6500K = Tageslicht, D93 bei 9300K = Studio) und deckt Farbtemperaturdrift oder thermische Instabilität auf.',
    },
    {
      type: 'title',
      text: 'Interpretation Ihrer Ergebnisse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Spectrum Canvas erstellt einen ansprechenden, druckfreundlichen Bericht mit:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>3D-Gamut-Visualisierung:</strong> Ein rotierender 3D-Plot, der das tatsächliche Farbvolumen Ihres Displays im Vergleich zum Referenzstandard zeigt</li><li><strong>Delta-E-Heatmap:</strong> Wo im Spektrum Ihr Display abweicht</li><li><strong>Gammakurve:</strong> Helligkeitslinearität über den Bereich von 0–255</li><li><strong>Kalibrierungs-Score:</strong> Eine einzige „Spectrum Grade“ (Elite, Cinematic, Studio, Standard) basierend auf der Gesamtgenauigkeit</li></ul>',
    },
    {
      type: 'title',
      text: 'Fortgeschritten: Tipps zur manuellen Kalibrierung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn Ihre Ergebnisse Abweichungen zeigen, versuchen Sie diese Einstellungen im OSD-Menü (On-Screen Display) Ihres Monitors:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>Farbtemperatur:</strong> In Richtung „Warm“ verschieben, wenn die Farben zu kühl/blau wirken; in Richtung „Kühl“, wenn sie zu warm/gelb wirken</li><li><strong>Kontrast:</strong> Erhöhen, wenn Schwarztöne verwaschen aussehen; verringern, wenn Details „zerquetscht“ werden</li><li><strong>Helligkeit:</strong> So einstellen, dass ein neutrales Grau ohne Farbstich bei 50 % Helligkeit erreicht wird</li><li><strong>Sättigung:</strong> Wenn Farben übersättigt sind, verringern; wenn sie stumpf wirken, erhöhen</li></ul>',
    },
    {
      type: 'title',
      text: 'Einschränkungen und Best Practices',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Dieses Tool bietet visuelle und statistische Referenzwerte</strong>. Für professionelle Arbeiten, die eine zertifizierte Kalibrierung erfordern, verwenden Sie Hardware-Farbmessgeräte (Spektrophotometer oder Kolorimeter) und eine spezielle Kalibrierungssoftware.',
    },
    {
      type: 'paragraph',
      html: '<strong>Best Practices:</strong><ul><li>Lassen Sie Ihren Monitor vor dem Test 30 Minuten lang aufwärmen (thermische Drift stabilisiert sich)</li><li>Testen Sie bei gleichbleibenden Umgebungslichtbedingungen</li><li>Vermeiden Sie Blendung; verwenden Sie nach Möglichkeit eine Monitorblende</li><li>Wiederholen Sie die Tests wöchentlich, um Drifts über die Zeit zu verfolgen</li><li>Führen Sie ein digitales Archiv der Berichte für zukünftige Vergleiche</li></ul>',
    },
  ],
  ui: {
    badge: 'Display-Kalibrierung',
    title: 'Spectrum Canvas: Farbgenauigkeitstest',
    description:
      'Professionelle Display-Kalibrierung trifft auf Kino-Ästhetik. Testen Sie sRGB und DCI-P3, messen Sie die Delta-E-Genauigkeit, erkennen Sie Farbverschiebungen und erstellen Sie einen visuellen Bericht, der Daten in Erkenntnisse verwandelt.',
    btnStartCalibration: 'Kalibrierung starten',
    btnFullscreen: 'Vollbild',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Vollbildmodus',
    kbdReset: 'R',
    kbdResetLabel: 'Test zurücksetzen',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Beenden',
    gamutSRGB: 'sRGB',
    gamutDCIP3: 'DCI-P3',
    gamutToggle: 'Farbraum',
    hardwareName: 'Hardware-/Monitor-Name',
    hardwareNamePlaceholder: 'z. B. MacBook Pro 16" M1 Max',
    purityTest: 'Spektrale Reinheit',
    gradientTest: 'Gradientendynamik',
    blackHoleTest: 'Black Crush Detection',
    whitePointTest: 'Weißpunktkalibrierung',
    colorCheckpoint: 'Farb-Kontrollpunkt',
    generateReport: 'Bericht erstellen',
    viewResults: 'Ergebnisse anzeigen',
    btnExit: 'Beenden (ESC)',
    compareSideBySide: 'Nebeneinander vergleichen',
  },
};
