import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { OhmLawPowerCalculatorLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Wet van Ohm en Elektrisch Vermogen Rekenmachine',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'nl',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat berekent deze wet van Ohm rekenmachine?',
      acceptedAnswer: { '@type': 'Answer', text: 'Voer twee positieve waarden in voor spanning, stroom, weerstand of vermogen. De rekenmachine leidt de andere twee waarden af.' },
    },
    {
      '@type': 'Question',
      name: 'Welke eenheden gebruikt de rekenmachine?',
      acceptedAnswer: { '@type': 'Answer', text: 'Gebruik volt voor spanning, ampère voor stroom, ohm voor weerstand en watt voor vermogen.' },
    },
    {
      '@type': 'Question',
      name: 'Kan ik vermogen en weerstand als bekende waarden gebruiken?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja. De rekenmachine gebruikt wortelformules om spanning en stroom te berekenen.' },
    },
  ],
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Elektrische waarden berekenen met de wet van Ohm',
  step: [
    { '@type': 'HowToStep', name: 'Kies twee bekende waarden', text: 'Activeer de twee grootheden die u al kent: spanning, stroom, weerstand of vermogen.' },
    { '@type': 'HowToStep', name: 'Voer de metingen in', text: 'Typ positieve waarden in de actieve velden.' },
    { '@type': 'HowToStep', name: 'Lees het resultaat af', text: 'Het schema en het display tonen de berekende waarden en de toegepaste formules.' },
  ],
};

const seo: SEOSection[] = [
  { type: 'title', text: 'Spanning stroom weerstand of vermogen berekenen', level: 2 },
  { type: 'paragraph', html: 'Als u twee elektrische grootheden in een eenvoudig circuit kent, heeft u voldoende informatie om de andere twee te berekenen. Voer de twee bekende waarden in en deze rekenmachine voor de wet van Ohm berekent de ontbrekende grootheden in volt, ampère, ohm en watt.' },
  { type: 'paragraph', html: 'Voer bijvoorbeeld 12 V en 2 A in om 6 Ω en 24 W te krijgen. Bij 5 V en 10 W krijgt u 2 A en 2,5 Ω. Handig voor het controleren van weerstanden, berekenen van led-stromen of vermogen van versterkerbelastingen.' },
  { type: 'title', text: 'Welke formule van de wet van Ohm moet u gebruiken', level: 3 },
  { type: 'paragraph', html: 'De juiste formule hangt af van de twee beschikbare metingen. Alle formules zijn afgeleid van de wet van Ohm V = I x R en de vermogensformule P = V x I.' },
  { type: 'table', headers: ['Bekende waarden', 'Berekende waarden', 'Toegepaste formule'], rows: [
    ['Spanning en stroom', 'Weerstand en vermogen', 'R = V / I en P = V x I'],
    ['Spanning en weerstand', 'Stroom en vermogen', 'I = V / R en P = V² / R'],
    ['Spanning en vermogen', 'Stroom en weerstand', 'I = P / V en R = V² / P'],
    ['Stroom en weerstand', 'Spanning en vermogen', 'V = I x R en P = I² x R'],
    ['Stroom en vermogen', 'Spanning en weerstand', 'V = P / I en R = P / I²'],
    ['Weerstand en vermogen', 'Spanning en stroom', 'V = √(P x R) en I = √(P / R)'],
  ] },
  { type: 'tip', title: 'Gebruik vermogen om veilige componenten te kiezen', html: 'Als de rekenmachine 24 W aangeeft, moet de component ten minste dat vermogen als warmte kunnen dissiperen. Houd altijd een veiligheidsmarge aan.' },
];

export const content: OhmLawPowerCalculatorLocaleContent = {
  slug: 'wet-van-ohm-vermogen-calculator',
  title: 'Wet van Ohm en Elektrisch Vermogen Rekenmachine',
  description: 'Een rekenmachine voor de wet van Ohm om spanning, stroom, weerstand en vermogen te berekenen uit twee bekende waarden.',
  ui: {
    instructions: 'Kies de twee bekende waarden en voer ze in. Het circuit berekent het resterende paar in SI-eenheden.',
    knownLabel: 'Kies twee bekende waarden',
    useAsKnownLabel: 'Gebruik als bekend',
    voltageLabel: 'Spanning',
    currentLabel: 'Stroom',
    resistanceLabel: 'Weerstand',
    powerLabel: 'Vermogen',
    voltageUnit: 'V',
    currentUnit: 'A',
    resistanceUnit: 'Ω',
    powerUnit: 'W',
    resultTitle: 'Circuit voltooien',
    resultHint: 'Twee bekende klemmen berekenen het ontbrekende paar.',
    formulaTitle: 'Circuit uitlezing',
    formulaHint: 'Verlichte klemmen zijn bekend. Koperbanen tonen de formules.',
    statusTitle: 'Berekeningsstatus',
    statusEmpty: 'Voer twee positieve waarden in om te beginnen.',
    statusInvalid: 'Beide bekende waarden moeten groter zijn dan nul.',
    statusReady: 'Berekening van het circuit voltooid.',
    presetTitle: 'Starten vanaf een echte belasting',
    presetLed: 'Led-indicator',
    presetUsb: 'USB-belasting',
    presetAmplifier: 'Versterkerbelasting',
    resetLabel: 'Herstellen',
    orbitCaption: 'Kies twee klemmen om het circuit te sluiten.',
    knownBadge: 'Bekend',
    solvedBadge: 'Berekend',
    unitVoltage: 'volt',
    unitCurrent: 'ampère',
    unitResistance: 'ohm',
    unitPower: 'watt',
    formulaVoltageCurrent: 'R = V / I en P = V x I',
    formulaVoltageResistance: 'I = V / R en P = V² / R',
    formulaVoltagePower: 'I = P / V en R = V² / P',
    formulaCurrentResistance: 'V = I x R en P = I² x R',
    formulaCurrentPower: 'V = P / I en R = P / I²',
    formulaResistancePower: 'V = √(P x R) en I = √(P / R)',
    seoTitle: 'Wet van Ohm rekenmachine',
  },
  seo,
  faqTitle: 'Veelgestelde vragen over de wet van Ohm',
  faq: [
    { question: 'Ik ken spanning en stroom. Wat krijg ik?', answer: 'U krijgt weerstand en vermogen. Bijvoorbeeld 12 V en 2 A geven 6 Ω en 24 W.' },
    { question: 'Kan ik het gedissipeerde vermogen van een weerstand berekenen?', answer: 'Ja. Voer spanning en weerstand of stroom en weerstand in om het vermogen te berekenen.' },
    { question: 'Kan ik vermogen en spanning als invoer gebruiken?', answer: 'Ja. Voer beide in en de rekenmachine berekent stroom (I = P / V) en weerstand (R = V² / P).' },
    { question: 'Geldt de wet van Ohm voor alle componenten?', answer: 'Nee. Deze rekenmachine modelleert een eenvoudige ohmse component. Diodes hebben een niet-lineair gedrag.' },
  ],
  bibliographyTitle: 'Formulereferenties',
  bibliography,
  howTo: [
    { name: 'Kies twee bekende waarden', text: 'Activeer de twee bekende grootheden.' },
    { name: 'Voer positieve metingen in', text: 'Typ volt, ampère, ohm of watt in.' },
    { name: 'Lees de resultaten af', text: 'Bekijk de berekende waarden en de toegepaste formule.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
