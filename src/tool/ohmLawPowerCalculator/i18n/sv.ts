import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { OhmLawPowerCalculatorLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ohms lag och elektrisk effekt kalkylator',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'sv',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad beräknar denna Ohms lag kalkylator?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ange två valfria positiva värden för spänning, ström, resistans eller effekt. Kalkylatorn beräknar de två återstående värdena.' },
    },
    {
      '@type': 'Question',
      name: 'Vilka enheter använder kalkylatorn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Den använder volt för spänning, ampere för ström, ohm för resistans och watt för effekt.' },
    },
    {
      '@type': 'Question',
      name: 'Kan jag använda effekt och resistans som kända värden?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja. Kalkylatorn använder kvadratrotsformler för att beräkna spänning och ström.' },
    },
  ],
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Hur man beräknar elektriska värden med Ohms lag',
  step: [
    { '@type': 'HowToStep', name: 'Välj två kända värden', text: 'Aktivera de två storheter du redan känner till: spänning, ström, resistans eller effekt.' },
    { '@type': 'HowToStep', name: 'Ange mätvärden', text: 'Fyll i positiva värden i de aktiva fälten.' },
    { '@type': 'HowToStep', name: 'Läs av resultatet', text: 'Kretsschemat och displayen visar de beräknade värdena och formeln som använts.' },
  ],
};

const seo: SEOSection[] = [
  { type: 'title', text: 'Beräkna spänning ström resistans eller effekt i en krets', level: 2 },
  { type: 'paragraph', html: 'Om du känner till två elektriska storheter i en enkel krets har du tillräckligt med information för att beräkna de två övriga. Ange dina kända värden så beräknar denna Ohms lag kalkylator de saknade storheterna i volt, ampere, ohm och watt.' },
  { type: 'paragraph', html: 'Ange till exempel 12 V och 2 A för att få 6 Ω och 24 W. Ange 5 V och 10 W för att få 2 A och 2,5 Ω. Användbart vid kontroll av motstånd, beräkning av LED-ström eller belastning på förstärkare.' },
  { type: 'title', text: 'Vilken formel av Ohms lag ska du använda', level: 3 },
  { type: 'paragraph', html: 'Vilken ekvation som passar beror på de två tillgängliga mätvärdena. Alla är omformuleringar av Ohms lag V = I x R och effektformeln P = V x I.' },
  { type: 'table', headers: ['Kända värden', 'Beräknade värden', 'Använd formel'], rows: [
    ['Spänning och ström', 'Resistans och effekt', 'R = V / I och P = V x I'],
    ['Spänning och resistans', 'Ström och effekt', 'I = V / R och P = V² / R'],
    ['Spänning och effekt', 'Ström och resistans', 'I = P / V och R = V² / P'],
    ['Ström och resistans', 'Spänning och effekt', 'V = I x R och P = I² x R'],
    ['Ström och effekt', 'Spänning och resistans', 'V = P / I och R = P / I²'],
    ['Resistans och effekt', 'Spänning och ström', 'V = √(P x R) och I = √(P / R)'],
  ] },
  { type: 'tip', title: 'Använd effekten för att välja säkra komponenter', html: 'Om kalkylatorn visar 24 W måste komponenten kunna avleda minst så mycket effekt som värme. Ha alltid en säkerhetsmarginal.' },
];

export const content: OhmLawPowerCalculatorLocaleContent = {
  slug: 'ohms-lag-effektkalkylator',
  title: 'Ohms lag och elektrisk effekt kalkylator',
  description: 'En Ohms lag kalkylator för att beräkna spänning, ström, resistans och elektrisk effekt från två kända värden.',
  ui: {
    instructions: 'Välj två kända värden och ange dem. Kretsen beräknar det återstående paret i SI-enheter.',
    knownLabel: 'Välj två kända värden',
    useAsKnownLabel: 'Använd som känd',
    voltageLabel: 'Spänning',
    currentLabel: 'Ström',
    resistanceLabel: 'Resistans',
    powerLabel: 'Effekt',
    voltageUnit: 'V',
    currentUnit: 'A',
    resistanceUnit: 'Ω',
    powerUnit: 'W',
    resultTitle: 'Komplettera kretsen',
    resultHint: 'Två kända anslutningar beräknar det saknade paret.',
    formulaTitle: 'Kretsvisning',
    formulaHint: 'Tända anslutningar är kända. Kopparbanorna visar ekvationerna.',
    statusTitle: 'Beräkningsstatus',
    statusEmpty: 'Ange två positiva värden för att börja.',
    statusInvalid: 'Båda kända värden måste vara större än noll.',
    statusReady: 'Kretsberäkningen är klar.',
    presetTitle: 'Börja från en verklig belastning',
    presetLed: 'LED-indikator',
    presetUsb: 'USB-belastning',
    presetAmplifier: 'Förstärkarbelastning',
    resetLabel: 'Återställ',
    orbitCaption: 'Välj två anslutningar för att sluta kretsen.',
    knownBadge: 'Känd',
    solvedBadge: 'Beräknad',
    unitVoltage: 'volt',
    unitCurrent: 'ampere',
    unitResistance: 'ohm',
    unitPower: 'watt',
    formulaVoltageCurrent: 'R = V / I och P = V x I',
    formulaVoltageResistance: 'I = V / R och P = V² / R',
    formulaVoltagePower: 'I = P / V och R = V² / P',
    formulaCurrentResistance: 'V = I x R och P = I² x R',
    formulaCurrentPower: 'V = P / I och R = P / I²',
    formulaResistancePower: 'V = √(P x R) och I = √(P / R)',
    seoTitle: 'Ohms lag kalkylator',
  },
  seo,
  faqTitle: 'Vanliga frågor om Ohms lag',
  faq: [
    { question: 'Jag känner till spänning och ström. Vad får jag?', answer: 'Du får resistans och effekt. Till exempel ger 12 V och 2 A 6 Ω och 24 W.' },
    { question: 'Kan jag beräkna effektförlusten i ett motstånd?', answer: 'Ja. Ange spänning och resistans, eller ström och resistans, för att beräkna effekten i watt.' },
    { question: 'Kan jag använda effekt och spänning som indata?', answer: 'Ja. Ange båda så beräknar kalkylatorn ström (I = P / V) och resistans (R = V² / P).' },
    { question: 'Gäller Ohms lag för alla komponenter?', answer: 'Nej. Denna kalkylator modellerar enkla ohmska komponenter. Dioder har icke-linjära egenskaper.' },
  ],
  bibliographyTitle: 'Formelreferenser',
  bibliography,
  howTo: [
    { name: 'Välj två kända värden', text: 'Aktivera två kända storheter.' },
    { name: 'Ange positiva mätvärden', text: 'Fyll i volt, ampere, ohm eller watt.' },
    { name: 'Läs av resultatet', text: 'Se de beräknade värdena och formeln.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
