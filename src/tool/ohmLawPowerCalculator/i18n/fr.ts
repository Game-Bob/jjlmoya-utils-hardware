import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { OhmLawPowerCalculatorLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculateur de loi d Ohm et puissance electrique',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Que permet de calculer cet outil sur la loi d Ohm?',
      acceptedAnswer: { '@type': 'Answer', text: 'Entrez deux valeurs positives parmi la tension, le courant, la résistance ou la puissance. Le calculateur déduit les deux valeurs manquantes.' },
    },
    {
      '@type': 'Question',
      name: 'Quelles unités sont utilisées par le calculateur?',
      acceptedAnswer: { '@type': 'Answer', text: 'Il utilise des volts pour la tension, des ampères pour le courant, des ohms pour la résistance et des watts pour la puissance.' },
    },
    {
      '@type': 'Question',
      name: 'Puis-je utiliser la puissance et la résistance comme valeurs connues?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui. Le calculateur applique les racines carrées pour déterminer la tension et le courant à partir de la puissance et de la résistance.' },
    },
  ],
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment calculer des grandeurs électriques avec la loi d Ohm',
  step: [
    { '@type': 'HowToStep', name: 'Choisir deux valeurs connues', text: 'Activez les deux grandeurs que vous connaissez: tension, courant, résistance ou puissance.' },
    { '@type': 'HowToStep', name: 'Saisir les mesures', text: 'Entrez des valeurs positives dans les deux champs actifs.' },
    { '@type': 'HowToStep', name: 'Lire les résultats', text: 'Le schéma du circuit et l affichage indiquent les valeurs calculées et les formules utilisées.' },
  ],
};

const seo: SEOSection[] = [
  { type: 'title', text: 'Calculer tension courant résistance ou puissance dans un circuit', level: 2 },
  { type: 'paragraph', html: 'En connaissant deux valeurs électriques dans un circuit simple, vous disposez d assez d informations pour déterminer les deux autres. Saisissez votre paire de données et ce calculateur de la loi d Ohm déduit les grandeurs manquantes en volts, ampères, ohms et watts.' },
  { type: 'paragraph', html: 'Par exemple, entrez 12 V et 2 A pour obtenir 6 Ohm et 24 W. Saisissez 5 V et 10 W pour obtenir 2 A et 2,5 Ohm. Cet outil est idéal pour vérifier une résistance, estimer le courant d une LED ou mesurer la charge d une alimentation USB.' },
  { type: 'title', text: 'Quelle formule de la loi d Ohm devez-vous utiliser', level: 3 },
  { type: 'paragraph', html: 'L équation adaptée dépend des deux mesures disponibles. Toutes dérivent directement de la loi d Ohm V = I x R et de la formule de puissance P = V x I.' },
  { type: 'table', headers: ['Données connues', 'Valeurs calculées', 'Formule'], rows: [
    ['Tension et courant', 'Résistance et puissance', 'R = V / I et P = V x I'],
    ['Tension et résistance', 'Courant et puissance', 'I = V / R et P = V² / R'],
    ['Tension et puissance', 'Courant et résistance', 'I = P / V et R = V² / P'],
    ['Courant et résistance', 'Tension et puissance', 'V = I x R et P = I² x R'],
    ['Courant et puissance', 'Tension et résistance', 'V = P / I et R = P / I²'],
    ['Résistance et puissance', 'Tension et courant', 'V = √(P x R) et I = √(P / R)'],
  ] },
  { type: 'tip', title: 'Anticiper la puissance pour choisir des composants sûrs', html: 'Si le calculateur indique 24 W, le composant doit pouvoir dissiper au moins cette puissance. Gardez une marge de sécurité et rappelez-vous qu une diode n est pas un composant purement ohmique.' },
];

export const content: OhmLawPowerCalculatorLocaleContent = {
  slug: 'calculateur-loi-ohm-puissance',
  title: 'Calculateur de loi d Ohm et puissance électrique',
  description: 'Un calculateur de la loi d Ohm pour déterminer la tension, le courant, la résistance et la puissance à partir de deux valeurs connues.',
  ui: {
    instructions: 'Choisissez deux valeurs connues et saisissez-les. Le circuit déduit la paire restante en unités SI.',
    knownLabel: 'Choisir deux valeurs connues',
    useAsKnownLabel: 'Utiliser comme connu',
    voltageLabel: 'Tension',
    currentLabel: 'Courant',
    resistanceLabel: 'Résistance',
    powerLabel: 'Puissance',
    voltageUnit: 'V',
    currentUnit: 'A',
    resistanceUnit: 'Ohm',
    powerUnit: 'W',
    resultTitle: 'Compléter le circuit',
    resultHint: 'Deux bornes connues calculent la paire manquante.',
    formulaTitle: 'Lecture du circuit',
    formulaHint: 'Les bornes éclairées sont connues. Les pistes en cuivre indiquent les équations.',
    statusTitle: 'État du calcul',
    statusEmpty: 'Entrez deux valeurs positives pour commencer.',
    statusInvalid: 'Les deux valeurs connues doivent être supérieures à zéro.',
    statusReady: 'Calcul du circuit effectué.',
    presetTitle: 'Partir d une charge réelle',
    presetLed: 'Témoin LED',
    presetUsb: 'Charge USB',
    presetAmplifier: 'Charge d amplificateur',
    resetLabel: 'Réinitialiser',
    orbitCaption: 'Choisissez deux bornes pour fermer le circuit.',
    knownBadge: 'Connu',
    solvedBadge: 'Calculé',
    unitVoltage: 'volts',
    unitCurrent: 'ampères',
    unitResistance: 'ohms',
    unitPower: 'watts',
    formulaVoltageCurrent: 'R = V / I et P = V x I',
    formulaVoltageResistance: 'I = V / R et P = V² / R',
    formulaVoltagePower: 'I = P / V et R = V² / P',
    formulaCurrentResistance: 'V = I x R et P = I² x R',
    formulaCurrentPower: 'V = P / I et R = P / I²',
    formulaResistancePower: 'V = √(P x R) et I = √(P / R)',
    seoTitle: 'Calculateur loi d Ohm',
  },
  seo,
  faqTitle: 'Questions fréquentes sur la loi d Ohm',
  faq: [
    { question: 'Je connais la tension et le courant. Qu est-ce que j obtiens?', answer: 'Vous obtenez la résistance et la puissance. Par exemple, 12 V et 2 A donnent 6 Ohm et 24 W.' },
    { question: 'Puis-je calculer la puissance dissipée par une résistance?', answer: 'Oui. Entrez la tension et la résistance, ou le courant et la résistance, pour obtenir la puissance en watts.' },
    { question: 'Puis-je utiliser la puissance et la tension en entrée?', answer: 'Oui. Saisissez ces deux valeurs et le calculateur déduit le courant (I = P / V) et la résistance (R = V² / P).' },
    { question: 'La loi d Ohm s applique-t-elle à tous les composants?', answer: 'Non. Cet outil modélise un composant ohmique simple. Les diodes présentent une relation non linéaire.' },
  ],
  bibliographyTitle: 'Références des formules',
  bibliography,
  howTo: [
    { name: 'Choisir deux valeurs connues', text: 'Activez les deux grandeurs connues.' },
    { name: 'Saisir des valeurs positives', text: 'Entrez des volts, ampères, ohms ou watts.' },
    { name: 'Lire les résultats', text: 'Consultez les résultats et la formule utilisée.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
