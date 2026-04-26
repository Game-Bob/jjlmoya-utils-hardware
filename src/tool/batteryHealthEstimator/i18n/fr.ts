import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EstimadorSaludBateriaUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-sante-batterie-lithium';
const title = 'Calculateur de Santé de Batterie Lithium';
const description =
  "Calculez l'état de santé (SoH) de votre batterie lithium en fonction des cycles, de la tension et de la température. Guide scientifique pour maximiser la longévité énergétique.";

const faqData = [
  {
    question: "Qu'est-ce que la dégradation chimique des batteries ?",
    answer:
      "À chaque cycle de charge et décharge, les cellules lithium subissent des microfractures et une accumulation de sédiments chimiques (S.E.I.) qui réduisent leur capacité de stockage. C'est un processus inévitable mais qui peut être ralenti avec de bonnes habitudes.",
  },
  {
    question: "Pourquoi recommande-t-on de charger jusqu'à 80% ?",
    answer:
      "Les batteries lithium subissent plus de stress aux tensions extrêmes (0% et 100%). Maintenir la charge entre 20% et 80% peut tripler la durée de vie en réduisant la chaleur et la pression interne.",
  },
  {
    question: "Comment la chaleur affecte-t-elle la durée de vie de la batterie ?",
    answer:
      "La chaleur est l'ennemi numéro un. Pour chaque augmentation de 10 degrés au-dessus de la température ambiante optimale (25 degrés), la vitesse de dégradation chimique double approximativement.",
  },
  {
    question: "Qu'est-ce qu'un cycle de charge complet ?",
    answer:
      "Un cycle correspond à l'utilisation de 100% de la capacité de la batterie, mais pas nécessairement en une seule fois. Si vous utilisez 50% aujourd'hui, rechargez, puis utilisez 50% demain, vous avez complété 1 cycle total.",
  },
];

const howToData = [
  {
    name: 'Identifier la capacité originale',
    text: "Cherchez sur la boîte de votre appareil ou sur le site du fabricant les mAh que votre batterie avait à l'état neuf.",
  },
  {
    name: 'Consulter les cycles actuels',
    text: "De nombreux systèmes (comme iOS ou Android 14) permettent de voir combien de cycles de charge votre batterie a accumulés.",
  },
  {
    name: 'Saisir les données techniques',
    text: "Ajustez la tension actuelle, les cycles et la température pour que notre moteur de calcul estime le SoH.",
  },
  {
    name: "Analyser le diagnostic",
    text: "Consultez le pourcentage de santé. En dessous de 80%, vous pourriez commencer à remarquer des baisses de performances ou des extinctions inattendues.",
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
  inLanguage: 'fr',
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
    { type: 'title', text: 'La chimie du temps : pourquoi les batteries lithium meurent', level: 2 },
    {
      type: 'paragraph',
      html: "Une batterie lithium-ion n'est pas une boîte d'énergie statique, mais un écosystème chimique dynamique en dégradation constante depuis sa fabrication. Chaque cycle de charge et décharge, chaque variation de température et chaque minute à des tensions extrêmes contribue à la formation de sous-produits qui entravent le flux d'ions.",
    },
    { type: 'title', text: 'Mécanismes de dégradation principaux', level: 3 },
    {
      type: 'paragraph',
      html: "<strong>Couche SEI :</strong> l'interface électrolyte solide croît avec le temps, consomme du lithium actif et augmente la résistance interne. <strong>Oxydation de l'électrolyte :</strong> des tensions supérieures à 4,1V accélèrent l'oxydation et peuvent gonfler la batterie. <strong>Lithium Plating :</strong> charger à basse température dépose du lithium sous forme métallique, créant des dendrites qui peuvent percer le séparateur.",
    },
    { type: 'title', text: "Le mythe des 100% : pourquoi charger toute la nuit est une erreur", level: 3 },
    {
      type: 'paragraph',
      html: "Pour un ion lithium, être à 100% de charge (4,2V) est un état de haute tension. Les recherches montrent que la durée de vie double ou triple si l'on maintient l'appareil entre <strong>20% et 80%</strong>. De plus, pour chaque hausse de 10°C au-dessus de 25°C, la vitesse de dégradation chimique double approximativement.",
    },
    { type: 'title', text: 'Protocole de survie énergétique', level: 3 },
    {
      type: 'paragraph',
      html: "Ne chargez jamais une batterie en dessous de 0°C : le lithium se dépose sur l'anode, causant des dommages permanents. La charge rapide génère de la chaleur localisée et du stress mécanique ; utilisez-la uniquement en cas de stricte nécessité. Pour un stockage prolongé, conservez la batterie à 50% dans un endroit frais.",
    },
  ],
  ui: {
    badge: 'Batterie Li-Ion',
    title: 'Estimateur de Santé de Batterie',
    description: 'Diagnostic technique de dégradation pour cellules Lithium-Ion.',
    paramsTitle: 'Paramètres de Cellule',
    voltageLabel: 'Tension Actuelle',
    cyclesLabel: 'Cycles de Charge',
    tempLabel: 'Température',
    voltageHint: 'Plage nominale : 3,0V (vide) à 4,2V (plein).',
    labelUsefulLife: 'Durée de Vie',
    yearsPrefix: 'Est.',
    yearsSuffix: 'ans',
    metricThermalStress: 'Stress Thermique',
    metricVoltageStress: 'Stress de Tension',
    metricLithiumPlating: 'Lithium Plating',
    statusExcelente: 'État Excellent',
    statusBueno: 'État Bon',
    statusRegular: 'État Moyen',
    statusCritico: 'État Critique',
    indicatorTempNormal: 'Normal',
    indicatorTempCritical: 'Critique',
    indicatorVoltageHigh: 'Élevée',
    indicatorVoltageLow: 'Basse',
    indicatorPlatingRisk: 'Risque Élevé',
    indicatorPlatingOk: 'Sans Risque',
    recTemp: "Réduisez la température ambiante ou améliorez la ventilation pour éviter l'oxydation de l'électrolyte.",
    recVoltageHigh: "Évitez de maintenir la batterie à 100% de charge (4,2V) pendant de longues périodes.",
    recVoltageLow: "Évitez les décharges profondes ; les cycles entre 20% et 80% doublent la durée de vie.",
    recSohLow: "La capacité est tombée en dessous du standard optimal. Envisagez un remplacement si l'autonomie est insuffisante.",
    recDefault: "Maintenez vos habitudes actuelles — votre batterie est dans une plage de fonctionnement idéale.",
  },
};
