import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UsbPowerBudgetCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'usb-leistungsbudget-rechner';
const title = 'USB Leistungsbudget Rechner';
const description = 'Prüfen Sie, ob ein USB-Anschluss, Ladegerät, Hub, Kabel oder USB-C PD-Profil Ihre Geräte nach Reserve und Kabelspannungsabfall sicher mit Strom versorgen kann.';

const faqData = [
  {
    question: 'Wie erkenne ich, ob ein USB-Anschluss mein Gerät mit Strom versorgen kann?',
    answer: 'Vergleichen Sie die Gesamtleistung des Geräts mit der USB-Quellleistung, reservieren Sie dann Sicherheitsmarge und schätzen Sie den Kabelspannungsabfall. Ein Setup kann scheitern, selbst wenn die nominale Wattzahl hoch erscheint, wenn das Kabel lang, dünn oder mit hohem Strom bei 5 Volt betrieben wird.',
  },
  {
    question: 'Warum ist die Kabellänge für USB-Strom wichtig?',
    answer: 'Strom, der durch Kupfer fließt, erzeugt Spannungsabfall. Lange Kabel und dünne Leiter haben mehr Widerstand, sodass das Gerät möglicherweise weniger Spannung erhält als das Ladegerät liefert. Dies ist besonders wichtig für Raspberry Pi-Boards, Festplatten, LED-Streifen, Docks und busbetriebene Hubs.',
  },
  {
    question: 'Welche Sicherheitsmarge sollte ich verwenden?',
    answer: 'Verwenden Sie mindestens 20 Prozent für normale Elektronik, 30 Prozent für Motoren, Laufwerke, Funkgeräte oder Boards mit Spitzenlasten und mehr, wenn die Adapterqualität unbekannt ist oder das Gerät kontinuierlich laufen muss.',
  },
  {
    question: 'Kann dies USB-C PD-Verhandlungstests ersetzen?',
    answer: 'Nein. Der Rechner prüft das elektrische Budget. Er verifiziert nicht, ob ein Ladegerät, Kabel-e-Marker, Gerät oder Hub tatsächlich ein bestimmtes Power-Delivery-Profil aushandelt.',
  },
];

const howToData = [
  { name: 'Quellprofil wählen', text: 'Wählen Sie ein gängiges USB- oder USB-C PD-Profil oder bearbeiten Sie Spannung und Strom manuell.' },
  { name: 'Kabel beschreiben', text: 'Geben Sie Kabellänge und Leiterquerschnitt ein. Dünne Drähte mit hoher AWG-Zahl verursachen mehr Spannungsabfall.' },
  { name: 'Last hinzufügen', text: 'Geben Sie eine Gerätelast in Watt und die Anzahl der Geräte ein, die dieselbe Quelle teilen.' },
  { name: 'Status ablesen', text: 'Verwenden Sie Status, Kabelabfall, Endspannung, Auslastung und Reserve, um zu entscheiden, ob das Setup sicher ist.' },
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

export const content: ToolLocaleContent<UsbPowerBudgetCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'USB-Strom ist ein Budget, kein Etikett', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein USB-Ladegerät mit 15 W, 45 W oder 100 W beschreibt, was die Quelle unter den richtigen Bedingungen bieten kann. Ihr Gerät sieht nur das Ergebnis nach Protokollverhandlung, Strombegrenzungen, Kabelwiderstand, Steckerqualität, Hub-Verlusten und Lastspitzen. Dieser Rechner konzentriert sich auf die praktische elektrische Frage: Ist nach Kabelabfall und Reservemarge genug Strom für die Hardware vorhanden, die Sie betreiben möchten?',
    },
    {
      type: 'stats',
      items: [
        { label: 'USB 2.0 Standardstrom', value: '0,5 A' },
        { label: 'USB-C Standardmaximum bei 5 V', value: '3 A' },
        { label: 'Empfohlene Reserve', value: '20%+' },
      ],
    },
    { type: 'title', text: 'So interpretieren Sie das Ergebnis', level: 3 },
    {
      type: 'table',
      headers: ['Status', 'Bedeutung', 'Bester nächster Schritt'],
      rows: [
        ['Sicher', 'Die Last passt nach der gewählten Reserve in die Quellleistung und die geschätzte Gerätespannung bleibt gesund.', 'Setup verwenden, aber auf Wärme achten, wenn der Adapter klein oder eingeschlossen ist.'],
        ['Knapp', 'Die Last liegt nahe an der reservierten Grenze oder der Kabelabfall wird bedeutsam.', 'Kabel kürzen, dickere Leiter wählen, Last reduzieren oder auf ein höheres Leistungsprofil umsteigen.'],
        ['Über Budget', 'Die Last überschreitet die nutzbare Quellleistung oder die geräteseitige Spannung ist wahrscheinlich zu niedrig.', 'Stärkeres Ladegerät, aktiven Hub, kürzeres Kabel oder ein Gerät verwenden, das eine höhere USB-C PD-Spannung aushandelt.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Wenn die Wattzahl ausreicht, das Gerät aber trotzdem zurücksetzt',
      html: '<p>Der Anlaufstrom kann viel höher sein als die durchschnittliche Wattzahl auf einem Geräteetikett. Eine 5-V-Versorgung verliert bei gleicher Wattzahl schneller Spannung als ein 20-V-PD-Profil, da sie mehr Strom führen muss. Viele billige Kabel verwenden dünne Stromleiter, selbst wenn der Außenmantel robust aussieht, und busbetriebene Hubs teilen ein Upstream-Budget auf alle nachgeschalteten Geräte auf.</p>',
    },
    { type: 'title', text: 'Kabelspannungsabfall einfach erklärt', level: 3 },
    {
      type: 'paragraph',
      html: 'Spannungsabfall ist der Verlust, der entsteht, wenn Strom durch den Kabelwiderstand fließt. USB-Strom hat zwei Leiter im Strompfad, daher verwendet der Rechner die Hin- und Rückleitungslänge. Ein ein Meter langes Kabel ist elektrisch zwei Meter Kupfer für die Stromschleife. Niedrigere AWG-Zahlen sind dicker und in der Regel besser für hohe Stromlasten.',
    },
    {
      type: 'comparative',
      items: [
        { title: 'Kurzes dickes Kabel', description: 'Am besten für Raspberry Pi-Boards, SSD-Gehäuse, Entwicklungskits und USB-C-Docks mit Spitzenstromaufnahme.' },
        { title: 'Langes dünnes Kabel', description: 'Akzeptabel für Sensoren mit geringem Stromverbrauch oder langsames Laden, aber riskant für Laufwerke, LED-Lasten und Compute-Boards.' },
        { title: 'Höhere Spannung PD', description: 'Reduziert den Strom für die gleiche Wattzahl, was den Kabelverlust senkt, aber nur, wenn Quelle, Kabel und Gerät dies aushandeln.' },
      ],
    },
    {
      type: 'tip',
      title: 'Praktische Regel',
      html: 'Wenn der Rechner sagt, dass das Setup knapp ist, behandeln Sie es als Feldwarnung. USB-Ausfälle erscheinen oft als zufällige Verbindungsabbrüche, Unterspannungsausfälle, langsames Laden, verrauschtes Audio oder Speicherfehler, bevor sie wie ein klares Stromproblem aussehen.',
    },
    {
      type: 'summary',
      title: 'Wofür dieser Rechner am besten geeignet ist',
      items: [
        'Planung von USB-Hubs, Einplatinencomputern, externen Laufwerken, Entwicklungsboards, Leuchten, Lüftern und kleinen Laboraufbauten.',
        'Vergleich von USB 2.0-, USB 3.x-, USB-C- und USB-Power-Delivery-Quellprofilen.',
        'Abschätzung, ob ein Kabel zu lang oder zu dünn für eine Last ist.',
        'Wahl einer sinnvollen Reserve vor dem Kauf eines Ladegeräts oder aktiven Hubs.',
      ],
    },
  ],
  ui: {
    profileLabel: 'USB-Quellprofil',
    metricUnits: 'Metrisch',
    imperialUnits: 'US',
    voltageLabel: 'Quellspannung (V)',
    currentLabel: 'Quellstrom (A)',
    cableLengthLabel: 'Kabellänge',
    wireGaugeLabel: 'Leiterquerschnitt',
    deviceLoadLabel: 'Last pro Gerät (W)',
    devicesLabel: 'Geräte',
    headroomLabel: 'Reserve (%)',
    sourcePower: 'Quellleistung',
    requiredPower: 'Benötigte Leistung',
    cableDrop: 'Kabelabfall',
    deviceVoltage: 'Gerätespannung',
    headroom: 'Reserve',
    utilization: 'Auslastung',
    safeStatus: 'Leistungsbudget sieht sicher aus',
    tightStatus: 'Leistungsbudget ist knapp',
    overStatus: 'Über Budget oder Spannungsabfall-Risiko',
    safeAdvice: 'Die Last passt mit der gewählten Reserve. Qualitativ hochwertiges Kabel verwenden und Wärme bei langen Betriebszeiten prüfen.',
    tightAdvice: 'Sie sind nahe am Limit. Kabellänge reduzieren, dickere Leiter verwenden, Last senken oder ein stärkeres Profil wählen.',
    overAdvice: 'Dieses Setup wird wahrscheinlich unter Spannungseinbrüche oder Drosselung fallen. Aktiven Hub, stärkeres Netzteil oder ein USB-C PD-Profil mit höherer Spannung verwenden.',
    busLane: 'USB-Quelle',
    loadLane: 'Gerätelast',
    cableLane: 'Abfall',
    boardEyebrow: 'Live USB-Strompfad',
    sourceSocket: 'Versorgungsbuchse',
    deviceSocket: 'Hardware-Last',
    energyFlow: 'Energiefluss',
    reservedLabel: 'nutzbar nach Reserve',
  },
};
