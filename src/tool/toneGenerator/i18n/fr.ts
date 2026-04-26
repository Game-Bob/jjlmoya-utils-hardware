import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ToneGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'generateur-de-frequences';
const title = 'Générateur de Tons et Fréquences en Ligne';
const description =
  'Générez des ondes sinusoïdales, carrées, triangulaires et en dents de scie. Testez vos haut-parleurs, écouteurs ou caisson de basses avec des fréquences de 20Hz à 20kHz.';

const faqData = [
  {
    question: 'À quoi sert un générateur de fréquences ?',
    answer:
      "Il sert à tester la réponse en fréquence des haut-parleurs et des écouteurs, à détecter des résonances indésirables dans les meubles, à trouver des lacunes dans votre audition ou même à aider à calmer les acouphènes par thérapie par encoche.",
  },
  {
    question: "Qu'est-ce qu'une onde sinusoïdale par rapport à une onde carrée ?",
    answer:
      "L'onde sinusoïdale est un ton pur sans harmoniques (douce et ronde). L'onde carrée est riche en harmoniques impaires et sonne beaucoup plus agressive ou digitale. L'onde triangulaire se situe entre les deux, utile pour la synthèse audio.",
  },
  {
    question: 'Puis-je endommager mes haut-parleurs avec cet outil ?',
    answer:
      "Oui, si vous utilisez des volumes très élevés à des fréquences extrêmes (surtout les graves en dessous de 30Hz ou les aigus au-dessus de 15kHz). Commencez toujours avec un volume système bas et augmentez progressivement.",
  },
  {
    question: "Quelle est la plage d'audition humaine ?",
    answer:
      "Théoriquement de 20Hz à 20 000Hz (20kHz). Cependant, avec l'âge, il est normal de perdre la capacité d'entendre au-dessus de 15kHz. Ce test peut vous aider à vérifier votre limite personnelle.",
  },
];

const howToData = [
  {
    name: "Sélectionner le type d'onde",
    text: 'Choisissez entre Sinusoïdale (pure), Carrée, Triangulaire ou Dent de scie selon le type de test que vous souhaitez effectuer.',
  },
  {
    name: 'Ajuster la fréquence',
    text: 'Déplacez le curseur pour naviguer dans le spectre audible. Utilisez les raccourcis 60Hz, 440Hz ou 1kHz pour accéder rapidement aux fréquences de référence.',
  },
  {
    name: 'Contrôler le volume',
    text: "Assurez-vous que le volume de vos haut-parleurs est bas avant d'appuyer sur Lecture. Vous pouvez ajuster le gain directement depuis l'outil.",
  },
  {
    name: 'Analyser la réponse',
    text: "Écoutez d'éventuelles distorsions ou moments où le son disparaît. Cela vous indiquera les limites physiques de votre matériel audio.",
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

export const content: ToolLocaleContent<ToneGeneratorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Tout sur les Fréquences et les Ondes Sonores', level: 2 },
    {
      type: 'paragraph',
      html: "Le son est de la physique pure en mouvement. Cet outil vous permet de manipuler des ondes sonores en temps réel, des graves les plus profonds que vous pouvez ressentir dans votre poitrine aux aigus ultrasoniques que seuls les animaux perçoivent.",
    },
    { type: 'title', text: 'Plage Auditive Humaine et Presbyacousie', level: 3 },
    {
      type: 'paragraph',
      html: "Une oreille humaine saine perçoit entre <strong>20Hz et 20kHz</strong>. Avec l'âge, la limite supérieure baisse : la plupart des adultes de plus de 50 ans ne peuvent pas entendre au-dessus de 12kHz. Le ton à 17,4kHz, connu comme le « ton moustique », est un test classique que seuls les adolescents peuvent généralement franchir.",
    },
    { type: 'title', text: 'Types d\'ondes et leurs utilisations', level: 3 },
    {
      type: 'paragraph',
      html: "<strong>Sinusoïdale :</strong> ton pur sans harmoniques, utilisé dans les tests auditifs médicaux et la calibration d'instruments. <strong>Carrée :</strong> riche en harmoniques impaires, sonne comme les consoles rétro 8-bits. <strong>Dent de scie :</strong> contient toutes les harmoniques, base des synthétiseurs de musique électronique. <strong>Triangulaire :</strong> point médian entre sinusoïdale et carrée -plus douce que la carrée mais avec plus de contenu harmonique que la sinusoïdale.",
    },
    { type: 'title', text: 'Test de haut-parleurs et nettoyage par vibration', level: 3 },
    {
      type: 'paragraph',
      html: "Une onde de basse fréquence (généralement <strong>165Hz</strong>) à volume maximum avec une forme carrée ou en dents de scie force le diaphragme du haut-parleur à vibrer violemment, expulsant mécaniquement les gouttes d'eau piégées dans la grille. Ne reproduisez pas des fréquences extrêmement aiguës à volume maximum pendant longtemps : même si vous ne les entendez pas, l'énergie peut endommager les tweeters de votre équipement.",
    },
  ],
  ui: {
    badge: 'Générateur Audio',
    title: 'Générateur de Fréquences',
    description: 'Créez des fréquences pures pour les tests audio.',
    freqLabel: 'Fréquence',
    preset60: '60Hz',
    preset440: '440Hz',
    preset1k: '1kHz',
    rangeMin: '20Hz (Sub-grave)',
    rangeMax: '20kHz (Ultrason)',
    waveLabel: "Forme d'onde",
    waveSine: 'Sinusoïdale',
    waveSquare: 'Carrée',
    waveSawtooth: 'Dent de scie',
    waveTriangle: 'Triangulaire',
    volLabel: 'Volume',
    btnPlay: 'LIRE LE TON',
    btnStop: 'ARRÊTER',
  },
};
