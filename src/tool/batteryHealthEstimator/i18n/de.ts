import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EstimadorSaludBateriaUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'lithium-batterie-gesundheitsrechner';
const title = 'Rechner für den Zustand von Lithium Batterien';
const description =
  'Berechnen Sie den Gesundheitszustand (SoH) Ihrer Lithium-Batterie basierend auf Zyklen, Spannung und Temperatur. Wissenschaftlicher Leitfaden zur Maximierung der Langlebigkeit.';

const faqData = [
  {
    question: 'Was ist die chemische Degradation von Batterien?',
    answer:
      'Mit jedem Lade- und Entladezyklus erleiden Lithium-Zellen Mikrorisse und die Ansammlung von chemischen Ablagerungen (S.E.I.), die ihre Energiespeicherkapazität verringern. Dies ist ein unvermeidlicher Prozess, der jedoch durch gute Gewohnheiten verlangsamt werden kann.',
  },
  {
    question: 'Warum wird empfohlen, nur bis 80 % zu laden?',
    answer:
      'Lithium-Batterien leiden bei extremen Spannungen (0 % und 100 %) unter mehr Stress. Wenn die Ladung zwischen 20 % und 80 % gehalten wird, kann dies die Lebensdauer der Zellen verdreifachen, da Hitze und Innendruck reduziert werden.',
  },
  {
    question: 'Wie beeinflusst Hitze die Lebensdauer der Batterie?',
    answer:
      'Hitze ist der Feind Nummer eins. Für jeden Anstieg um 10 Grad über die optimale Umgebungstemperatur (25 Grad) verdoppelt sich die Geschwindigkeit der chemischen Degradation in etwa.',
  },
  {
    question: 'Was ist ein vollständiger Ladezyklus?',
    answer:
      'Ein Zyklus ist die Nutzung von 100 % der Batteriekapazität, muss aber nicht auf einmal erfolgen. Wenn Sie heute 50 % verbrauchen, die Batterie aufladen und morgen 50 % verbrauchen, haben Sie einen vollständigen Zyklus abgeschlossen.',
  },
];

const howToData = [
  {
    name: 'Ursprüngliche Kapazität ermitteln',
    text: 'Suchen Sie auf der Verpackung Ihres Geräts oder auf der Website des Herstellers nach den mAh, die Ihre Batterie im Neuzustand hatte.',
  },
  {
    name: 'Aktuelle Zyklen prüfen',
    text: 'Viele Systeme (wie iOS oder Android 14) ermöglichen es Ihnen zu sehen, wie viele Ladezyklen Ihre Batterie bereits angesammelt hat.',
  },
  {
    name: 'Technische Daten eingeben',
    text: 'Passen Sie die aktuelle Spannung, die Zyklen und die Temperatur an, damit unser Berechnungsmodell den SoH schätzen kann.',
  },
  {
    name: 'Diagnose analysieren',
    text: 'Überprüfen Sie den Gesundheitsprozentsatz. Wenn Sie unter 80 % liegen, bemerken Sie möglicherweise Leistungseinbußen oder unerwartete Abschaltungen.',
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

export const content: ToolLocaleContent<EstimadorSaludBateriaUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Die Chemie der Zeit: Warum Lithium Batterien sterben', level: 2 },
    {
      type: 'paragraph',
      html: 'Eine Lithium-Ionen-Batterie ist keine statische Energiebox, sondern ein dynamisches chemisches Ökosystem, das sich seit dem Moment der Herstellung ständig verschlechtert. Jeder Lade- und Entladezyklus, jede Temperaturschwankung und jede Minute bei extremen Spannungen trägt zu Nebenprodukten bei, die den Ionenfluss behindern.',
    },
    { type: 'title', text: 'Wichtigste Degradationsmechanismen', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>SEI-Schicht:</strong> Die Festelektrolyt-Zwischenphase wächst mit der Zeit, verbraucht aktives Lithium und erhöht den Innenwiderstand. <strong>Elektrolytoxidation:</strong> Spannungen über 4,1 V beschleunigen die Oxidation und können die Batterie aufblähen lassen. <strong>Lithium-Plating:</strong> Das Laden bei niedrigen Temperaturen lagert Lithium in metallischer Form ab, wodurch Dendriten entstehen, die den Separator durchstoßen können.',
    },
    { type: 'title', text: 'Der 100 % Mythos: Warum das Laden über Nacht ein Fehler ist', level: 3 },
    {
      type: 'paragraph',
      html: 'Für ein Lithium-Ion ist ein Ladezustand von 100 % (4,2 V) ein Zustand hoher Belastung. Untersuchungen zeigen, dass sich die Zykluslebensdauer verdoppelt oder verdreifacht, wenn das Gerät zwischen <strong>20 % und 80 %</strong> gehalten wird. Zudem verdoppelt sich für jeweils 10 °C über 25 °C die Geschwindigkeit der chemischen Degradation in etwa.',
    },
    { type: 'title', text: 'Protokoll zum Überleben der Energie', level: 3 },
    {
      type: 'paragraph',
      html: 'Laden Sie eine Batterie niemals unter 0 °C auf: Lithium lagert sich an der Anode ab und verursacht dauerhafte Schäden. Schnelles Laden erzeugt lokale Hitze und mechanische Belastung; nutzen Sie es nur, wenn es unbedingt notwendig ist. Für eine langfristige Lagerung bewahren Sie die Batterie bei 50 % an einem kühlen Ort auf.',
    },
  ],
  ui: {
    badge: 'Li-Ion Batterie',
    title: 'Batterie Gesundheitsrechner',
    description: 'Technische Degradationsdiagnose für Lithium-Ionen-Zellen.',
    paramsTitle: 'Zellparameter',
    voltageLabel: 'Aktuelle Spannung',
    cyclesLabel: 'Ladezyklen',
    tempLabel: 'Temperatur',
    voltageHint: 'Nennbereich: 3,0 V (leer) bis 4,2 V (voll).',
    labelUsefulLife: 'Nutzungsdauer',
    yearsPrefix: 'Gesch.',
    yearsSuffix: 'Jahre',
    metricThermalStress: 'Thermischer Stress',
    metricVoltageStress: 'Spannungsstress',
    metricLithiumPlating: 'Lithium Plating',
    statusExcelente: 'Hervorragender Zustand',
    statusBueno: 'Guter Zustand',
    statusRegular: 'Mäßiger Zustand',
    statusCritico: 'Kritischer Zustand',
    indicatorTempNormal: 'Normal',
    indicatorTempCritical: 'Kritisch',
    indicatorVoltageHigh: 'Hoch',
    indicatorVoltageLow: 'Niedrig',
    indicatorPlatingRisk: 'Hohes Risiko',
    indicatorPlatingOk: 'Kein Risiko',
    recTemp: 'Umgebungstemperatur senken oder Belüftung verbessern, um Elektrolytoxidation zu vermeiden.',
    recVoltageHigh: 'Vermeiden Sie es, die Batterie über längere Zeit bei 100 % Ladung (4,2 V) zu halten.',
    recVoltageLow: 'Tiefe Entladungen vermeiden; Zyklen zwischen 20 % und 80 % verdoppeln die Lebensdauer.',
    recSohLow: 'Kapazität ist unter den optimalen Standard gefallen. Erwägen Sie einen Austausch, wenn die Autonomie nicht ausreicht.',
    recDefault: 'Behalten Sie Ihre aktuellen Gewohnheiten bei -Ihre Batterie befindet sich in einem idealen Betriebsbereich.',
  },
};
