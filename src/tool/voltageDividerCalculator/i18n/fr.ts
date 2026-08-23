import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDividerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-diviseur-tension';
const title = 'Calculateur de diviseur de tension';
const description = 'Calculez la tension de sortie à vide, le courant, la dissipation de puissance ou la résistance inférieure nécessaire pour une tension cible.';

const faqData = [
  { question: 'Que fait un calculateur de diviseur de tension ?', answer: 'Il calcule la tension de sortie à vide de deux résistances en série. Saisissez la tension d\'alimentation, la résistance supérieure et la résistance inférieure pour obtenir Vout, ou entrez une Vout cible pour calculer R2.' },
  { question: 'Comment calculer la tension de sortie ?', answer: 'Utilisez la formule Vout = Vs x R2 / (R1 + R2), où R1 est reliée à l\'alimentation et R2 à la masse. La sortie est le point milieu.' },
  { question: 'Comment calculer la résistance pour une tension cible ?', answer: 'Si R1 est connue, calculez R2 = R1 x Vtarget / (Vs - Vtarget). La tension cible doit être supérieure à zéro et inférieure à la tension d\'alimentation.' },
  { question: 'Combien de courant consomme un diviseur de tension ?', answer: 'Le courant du diviseur est Vs / (R1 + R2). C\'est un courant continu prélevé sur la source avant de connecter une charge externe.' },
  { question: 'Comment vérifier la puissance d\'une résistance ?', answer: 'La puissance dissipee est I au carré x R. Choisissez des résistances dimensionnées au-dessus de cette valeur en tenant compte de la température, de la tolérance et de la charge.' },
  { question: 'Puis-je utiliser un diviseur comme alimentation ?', answer: 'En général non. Une charge connectée à Vout modifie la résistance inférieure effective et décale la tension. Utilisez un suiveur AOP ou un régulateur si la sortie doit fournir du courant.' },
];

const howToData = [
  { name: 'Choisir le mode de calcul', text: 'Utilisez Prédire Vout quand les deux résistances sont connues. Utilisez Chercher R2 si vous connaissez l\'alimentation, R1 et la tension cible.' },
  { name: 'Saisir l\'alimentation et la résistance supérieure', text: 'Entrez la tension continue et la résistance entre l\'alimentation et le point milieu.' },
  { name: 'Saisir la résistance inférieure ou la cible', text: 'En mode Prédire Vout, entrez R2. En mode Chercher R2, entrez une tension cible comprise entre zéro et l\'alimentation.' },
  { name: 'Analyser le schéma', text: 'Consultez le point lumineux pour Vout, le courant absorbé et la puissance dissipée par chaque résistance.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<VoltageDividerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Calculs de diviseur de tension', level: 2 },
    { type: 'paragraph', html: 'Un diviseur à deux résistances réduit une tension d\'entrée. Avec la résistance supérieure <code>R1</code> reliée à l\'alimentation et la résistance inférieure <code>R2</code> reliée à la masse, la tension idéale à vide est <code>Vout = Vs x R2 / (R1 + R2)</code>.' },
    { type: 'title', text: 'Trouver la résistance pour une tension cible', level: 3 },
    { type: 'paragraph', html: 'Sélectionnez Chercher R2 lorsque vous connaissez l\'alimentation, R1 et la tension souhaitée. L\'équation devient <code>R2 = R1 x Vtarget / (Vs - Vtarget)</code>.' },
    { type: 'title', text: 'Courant et puissance dissipée', level: 3 },
    { type: 'paragraph', html: 'Le diviseur absorbe un courant de <code>I = Vs / (R1 + R2)</code>. La puissance dissipée par chaque résistance est <code>P = I² x R</code>.' },
    { type: 'title', text: 'Impact de la charge connectée', level: 3 },
    { type: 'paragraph', html: 'Le résultat calculé est valable à vide. Toute charge raccordée sur Vout se place en parallèle avec R2, ce qui diminue la résistance équivalente et fait chuter la tension.' },
    { type: 'list', items: ['Maintenez la tension cible strictement entre zéro et la tension d\'alimentation.', 'Utilisez la même unité de résistance pour R1 et R2.', 'Vérifiez la puissance nominale des deux résistances.', 'Prenez en compte les tolérances des composants dans votre montage réel.', 'Traitez le résultat comme une tension à vide.'] },
    { type: 'tip', title: 'La sortie n\'est pas un rail de puissance', html: 'Un diviseur est parfait pour créer une tension de référence ou adapter un signal, mais présente une impédance de sortie non nulle. Bufferisez la sortie si le circuit suivant consomme du courant.' },
  ],
  ui: {
    modeHeader: 'Mode de calcul',
    modePredict: 'Prédire Vout',
    modeTarget: 'Chercher R2',
    inputHeader: 'Paramètres du circuit',
    supplyLabel: 'Tension d\'alimentation Vs',
    topLabel: 'Résistance supérieure R1',
    bottomLabel: 'Résistance inférieure R2',
    targetLabel: 'Tension de sortie cible Vout',
    voltageUnit: 'V',
    resistanceUnit: 'Ω',
    resultHeader: 'Flux de tension',
    outputLabel: 'Tension au point milieu',
    currentLabel: 'Courant du diviseur',
    totalPowerLabel: 'Puissance totale',
    topPowerLabel: 'Puissance dans R1',
    bottomPowerLabel: 'Puissance dans R2',
    ratioLabel: 'de l\'alimentation',
    statusNominal: 'Calcul équilibré',
    statusInvalid: 'Vérifiez les paramètres',
    statusTargetInvalid: 'La tension cible doit être inférieure à l\'alimentation',
    formulaHeader: 'Formule appliquée',
    formulaPredict: 'Vout = Vs x R2 / (R1 + R2). Le point lumineux indique la tension de sortie.',
    formulaTarget: 'R2 = R1 x Vtarget / (Vs - Vtarget). Déplacez la cible pour ajuster la résistance inférieure.',
    supplyNode: 'ENTRÉE',
    topNode: 'R1',
    tapNode: 'VOUT',
    bottomNode: 'R2',
    groundNode: 'MASSE',
    hint: 'Saisissez les deux résistances pour calculer la sortie.',
    targetHint: 'Choisissez une tension cible entre zéro et Vs pour calculer R2.',
    note: 'Diviseur idéal à vide. Une charge modifie la tension de sortie et la résistance équivalente.',
  },
};
