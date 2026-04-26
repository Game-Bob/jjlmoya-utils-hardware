import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EstimadorSaludBateriaUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'litiumbatteri-halsokalkylator';
const title = 'Kalkylator för Litiumbatteriers Hälsa';
const description =
  'Beräkna hälsotillståndet (SoH) för ditt litiumbatteri baserat på cykler, spänning och temperatur. Vetenskaplig guide för att maximera energins livslängd.';

const faqData = [
  {
    question: 'Vad är kemisk nedbrytning av batterier?',
    answer:
      'Vid varje laddnings- och urladdningscykel drabbas litiumceller av mikrosprickor och ansamling av kemiska sediment (S.E.I.) som minskar deras energilagringskapacitet. Det är en oundviklig process men en som kan bromsas med goda vanor.',
  },
  {
    question: 'Varför rekommenderas det att ladda upp till 80 %?',
    answer:
      'Litiumbatterier drabbas av mer stress vid extrema spänningar (0 % och 100 %). Genom att hålla laddningen mellan 20 % och 80 % kan man tredubbla cellens livslängd genom att minska värme och internt tryck.',
  },
  {
    question: 'Hur påverkar värme batteriets livslängd?',
    answer:
      'Värme är fiende nummer ett. För varje ökning med 10 grader över den optimala omgivningstemperaturen (25 grader), fördubblas ungefär takten för den kemiska nedbrytningen.',
  },
  {
    question: 'Vad är en full laddningscykel?',
    answer:
      'En cykel är användningen av 100 % av batteriets kapacitet, men det behöver inte vara allt på en gång. Om du använder 50 % idag, laddar det och använder 50 % imorgon har du slutfört 1 full cykel.',
  },
];

const howToData = [
  {
    name: 'Identifiera den ursprungliga kapaciteten',
    text: 'Titta på förpackningen till din enhet eller på tillverkarens webbplats efter det mAh-värde ditt batteri hade som nytt.',
  },
  {
    name: 'Kontrollera aktuella cykler',
    text: 'Många system (som iOS eller Android 14) låter dig se hur många laddningscykler ditt batteri har samlat på sig.',
  },
  {
    name: 'Ange tekniska data',
    text: 'Justera aktuell spänning, cykler och temperatur så att vår beräkningsmodell kan uppskatta SoH-värdet.',
  },
  {
    name: 'Analysera diagnosen',
    text: 'Kontrollera hälsoprocenten. Om du ligger under 80 % kan du börja märka prestandaförlust eller oväntade avstängningar.',
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
  inLanguage: 'sv',
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
    { type: 'title', text: 'Tidens kemi: varför litiumbatterier dör', level: 2 },
    {
      type: 'paragraph',
      html: 'Ett litiumjonbatteri är inte en statisk energibox utan ett dynamiskt kemiskt ekosystem i ständig nedbrytning sedan tillverkningsögonblicket. Varje laddnings- och urladdningscykel, varje temperaturvariation och varje minut vid extrema spänningar bidrar till biprodukter som hindrar jonflödet.',
    },
    { type: 'title', text: 'Huvudsakliga nedbrytningsmekanismer', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>SEI-skikt:</strong> det fasta elektrolytgränssnittet växer över tid, förbrukar aktivt litium och ökar det interna motståndet. <strong>Elektrolytoxidation:</strong> spänningar över 4,1 V påskyndar oxidationen och kan få batteriet att svälla. <strong>Lithium Plating:</strong> laddning vid låga temperaturer avsätter litium i metallisk form, vilket skapar dendriter som kan punktera separatorn.',
    },
    { type: 'title', text: '100 %-myten: varför laddning över natten är ett misstag', level: 3 },
    {
      type: 'paragraph',
      html: 'För en litiumjon är 100 % laddning (4,2 V) ett tillstånd av hög stress. Forskning visar att livslängden i cykler fördubblas eller tredubblas när man håller enheten mellan <strong>20 % och 80 %</strong>. Dessutom fördubblas ungefär takten på den kemiska nedbrytningen för varje 10°C över 25°C.',
    },
    { type: 'title', text: 'Protokoll för energiöverlevnad', level: 3 },
    {
      type: 'paragraph',
      html: 'Ladda aldrig ett batteri under 0°C: litium avsätts på anoden och orsakar permanent skada. Snabbladdning genererar lokal värme och mekanisk stress; använd det endast när det är absolut nödvändigt. För långtidsförvaring, förvara batteriet vid 50 % på en sval plats.',
    },
  ],
  ui: {
    badge: 'Li-Ion Batteri',
    title: 'Batterihälsokalkylator',
    description: 'Teknisk nedbrytningsdiagnos för litiumjonceller.',
    paramsTitle: 'Cellparametrar',
    voltageLabel: 'Aktuell Spänning',
    cyclesLabel: 'Laddningscykler',
    tempLabel: 'Temperatur',
    voltageHint: 'Nominellt intervall: 3,0 V (tomt) till 4,2 V (fullt).',
    labelUsefulLife: 'Livslängd',
    yearsPrefix: 'Uppsk.',
    yearsSuffix: 'år',
    metricThermalStress: 'Termisk Stress',
    metricVoltageStress: 'Spänningsstress',
    metricLithiumPlating: 'Litiumplätering',
    statusExcelente: 'Utmärkt Status',
    statusBueno: 'God Status',
    statusRegular: 'Hyfsad Status',
    statusCritico: 'Kritisk Status',
    indicatorTempNormal: 'Normal',
    indicatorTempCritical: 'Kritisk',
    indicatorVoltageHigh: 'Hög',
    indicatorVoltageLow: 'Låg',
    indicatorPlatingRisk: 'Hög Risk',
    indicatorPlatingOk: 'Ingen Risk',
    recTemp: 'Sänk omgivningstemperaturen eller förbättra ventilationen för att undvika elektrolytoxidation.',
    recVoltageHigh: 'Undvik att hålla batteriet vid 100 % laddning (4,2 V) under längre perioder.',
    recVoltageLow: 'Undvik djupa urladdningar; cykler mellan 20 % och 80 % fördubblar batteriets livslängd.',
    recSohLow: 'Kapaciteten har sjunkit under den optimala nivån. Överväg ett byte om batteritiden är otillräcklig.',
    recDefault: 'Behåll dina nuvarande vanor — ditt batteri är i ett idealiskt driftintervall.',
  },
};
