import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EstimadorSaludBateriaUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'lithium-batterij-gezondheidscalculator';
const title = 'Lithium Batterij Gezondheidscalculator';
const description =
  'Bereken de gezondheidstoestand (SoH) van uw lithiumbatterij op basis van cycli, spanning en temperatuur. Wetenschappelijke gids om de levensduur te maximaliseren.';

const faqData = [
  {
    question: 'Wat is chemische degradatie van batterijen?',
    answer:
      'Bij elke laad- en ontlaadcyclus ondergaan lithiumcellen microrisjes en ophoping van chemische sedimenten (S.E.I.) die hun energieopslagcapaciteit verminderen. Het is een onvermijdelijk proces, maar kan worden vertraagd door goede gewoonten.',
  },
  {
    question: 'Waarom wordt aanbevolen om tot 80% op te laden?',
    answer:
      'Lithiumbatterijen hebben meer last van stress bij extreme spanningen (0% en 100%). Het aanhouden van een lading tussen 20% en 80% kan de levensduur van de cel verdrievoudigen door hitte en interne druk te verminderen.',
  },
  {
    question: 'Hoe beïnvloedt hitte de levensduur van de batterij?',
    answer:
      'Hitte is vijand nummer één. Voor elke stijging van 10 graden boven de optimale omgevingstemperatuur (25 graden), verdubbelt de snelheid van chemische degradatie ongeveer.',
  },
  {
    question: 'Wat is een volledige laadcyclus?',
    answer:
      'Een cyclus is het gebruik van 100% van de batterijcapaciteit, maar dit hoeft niet in één keer te gebeuren. Als u vandaag 50% gebruikt, de batterij oplaadt en morgen 50% gebruikt, heeft u 1 volledige cyclus voltooid.',
  },
];

const howToData = [
  {
    name: 'Identificeer de oorspronkelijke capaciteit',
    text: 'Kijk op de doos van uw apparaat of op de website van de fabrikant naar het aantal mAh dat uw batterij had toen deze nieuw was.',
  },
  {
    name: 'Controleer huidige cycli',
    text: 'Bij veel systemen (zoals iOS of Android 14) kunt u zien hoeveel laadcycli uw batterij heeft verzameld.',
  },
  {
    name: 'Voer technische gegevens in',
    text: 'Pas de huidige spanning, cycli en temperatuur aan zodat ons rekenmodel de SoH kan schatten.',
  },
  {
    name: 'Analyseer de diagnose',
    text: 'Controleer het gezondheidspercentage. Als dit onder de 80% ligt, kunt u last krijgen van prestatieverlies of onverwachte uitval.',
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
  inLanguage: 'nl',
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
    { type: 'title', text: 'De chemie van tijd: waarom lithiumbatterijen doodgaan', level: 2 },
    {
      type: 'paragraph',
      html: 'Een lithium-ionbatterij is geen statische energiebox, maar een dynamisch chemisch ecosysteem dat sinds de productie constant in verval is. Elke laad- en ontlaadcyclus, elke temperatuurvariatie en elke minuut op extreme spanningen draagt bij aan bijproducten die de ionenstroom belemmeren.',
    },
    { type: 'title', text: 'Belangrijkste degradatiemechanismen', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>SEI-laag:</strong> de interface tussen de vaste elektrolyt groeit in de loop van de tijd, verbruikt actief lithium en verhoogt de interne weerstand. <strong>Elektrolytoxidatie:</strong> spanningen boven 4,1 V versnellen de oxidatie en kunnen de batterij doen opzwellen. <strong>Lithium Plating:</strong> opladen bij lage temperaturen zet lithium af in metaalvorm, waardoor dendrieten ontstaan die de separator kunnen doorboren.',
    },
    { type: 'title', text: 'De 100%-mythe: waarom \'s nachts opladen een fout is', level: 3 },
    {
      type: 'paragraph',
      html: 'Voor een lithium-ion is een lading van 100% (4,2 V) een toestand van hoge stress. Uit onderzoek blijkt dat de levensduur verdubbelt of verdrievoudigt wanneer het apparaat tussen <strong>20% en 80%</strong> wordt gehouden. Bovendien verdubbelt de snelheid van chemische degradatie ongeveer voor elke 10°C boven 25°C.',
    },
    { type: 'title', text: 'Energie-overlevingsprotocol', level: 3 },
    {
      type: 'paragraph',
      html: 'Laad een batterij nooit op onder 0°C: lithium zet zich af op de anode en veroorzaakt blijvende schade. Snel opladen genereert plaatselijke hitte en mechanische stress; gebruik dit alleen als het strikt noodzakelijk is. Bewaar de batterij voor langdurige opslag op een koele plaats op 50%.',
    },
  ],
  ui: {
    badge: 'Li-Ion Batterij',
    title: 'Batterij Gezondheidscalculator',
    description: 'Technische degradatiediagnose voor lithium-ioncellen.',
    paramsTitle: 'Celparameters',
    voltageLabel: 'Huidige Spanning',
    cyclesLabel: 'Laadcycli',
    tempLabel: 'Temperatuur',
    voltageHint: 'Nominaal bereik: 3,0 V (leeg) tot 4,2 V (vol).',
    labelUsefulLife: 'Levensduur',
    yearsPrefix: 'Gesch.',
    yearsSuffix: 'jaar',
    metricThermalStress: 'Thermische Stress',
    metricVoltageStress: 'Spanningsstress',
    metricLithiumPlating: 'Lithium Plating',
    statusExcelente: 'Uitstekende Status',
    statusBueno: 'Goede Status',
    statusRegular: 'Redelijke Status',
    statusCritico: 'Kritieke Status',
    indicatorTempNormal: 'Normaal',
    indicatorTempCritical: 'Kritiek',
    indicatorVoltageHigh: 'Hoog',
    indicatorVoltageLow: 'Laag',
    indicatorPlatingRisk: 'Hoog Risico',
    indicatorPlatingOk: 'Geen Risico',
    recTemp: 'Verlaag de omgevingstemperatuur of verbeter de ventilatie om elektrolytoxidatie te voorkomen.',
    recVoltageHigh: 'Vermijd het langdurig op 100% lading (4,2 V) houden van de batterij.',
    recVoltageLow: 'Vermijd diepe ontladingen; cycli tussen 20% en 80% verdubbelen de levensduur van de batterij.',
    recSohLow: 'De capaciteit is onder de optimale standaard gezakt. Overweeg vervanging als de autonomie onvoldoende is.',
    recDefault: 'Houd uw huidige gewoonten aan — uw batterij bevindt zich in een ideaal werkingsbereik.',
  },
};
