import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedResistorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-resistance-led';
const title = 'Calculateur de résistance pour LED';
const description = 'Calcule la résistance série d\'une LED à partir de la tension d\'alimentation, de la tension directe et du courant. Tu obtiens la valeur E12 ou E24 la plus proche et une puissance avec de la marge.';

const faqData = [
  { question: 'Quelle résistance pour une LED rouge sur une broche Arduino 5 V ?', answer: 'Une LED rouge 5 mm typique, à 2,0 V et 20 mA sous 5 V, demande 150 ohms et dissipe environ 60 mW. Un film métal 125 mW ou 250 mW suffit. Dans le tiroir on trouve souvent 220 ohms: la LED éclaire un peu moins et reste plus à l\'abri si la tension directe est plus basse que d\'habitude.' },
  { question: 'Comment calculer la résistance d\'une LED ?', answer: 'Soustrais la tension directe de la tension d\'alimentation, puis divise par le courant en ampères. Pour une LED rouge à 2 V et 20 mA sous 5 V, la résistance exacte est (5 - 2) / 0,02 = 150 ohms.' },
  { question: 'Quelle tension directe dois-je prendre ?', answer: 'La tension directe typique de la fiche technique au courant visé. Les pastilles de couleur ici sont des lots habituels, pas ta LED. Repères: environ 1,3 V en infrarouge, 2,0 V en rouge, 2,2 V en jaune ou vert, 3,2 V en bleu ou blanc.' },
  { question: 'Pourquoi une valeur E12 ou E24 plutôt que les ohms exacts ?', answer: 'Les résistances se vendent en séries de nombres préférés. Les pas E12 sont à peu près 20 pour cent, les pas E24 à peu près 10. Le calculateur prend la valeur préférée la plus proche et, à égalité, la plus haute pour ne pas suralimenter la LED.' },
  { question: 'Plusieurs LED en parallèle peuvent-elles partager une résistance ?', answer: 'Non. Celle à la tension directe la plus basse prend presque tout le courant et peut griller. Mets-les en série sur une résistance, ou donne à chaque branche parallèle la sienne.' },
  { question: 'Quand une résistance série ne suffit-elle pas ?', answer: 'Laisse tomber une seule résistance pour les émetteurs 1 W, les rubans LED, les longues chaînes auto et tout ce qui veut un courant stable quand la tension baisse. Il faut un driver à courant constant. Une résistance bride une LED témoin sur une alim raide, ce n\'est pas une source de courant.' },
];

const howToData = [
  { name: 'Choisis la couleur de LED', text: 'Touche la diode qui ressemble à la pièce sur le bureau. Ça charge une tension directe typique et 20 mA de courant témoin.' },
  { name: 'Choisis l\'alimentation', text: 'Arduino 5 V ou micro 3,3 V pour les broches logiques, 9 V, 12 V ou 24 V pour les tableaux.' },
  { name: 'Lis la pièce sur la carte', text: 'La résistance montre la valeur à acheter, la puissance et les bagues de couleur. Ouvre la fiche seulement si ta LED diffère.' },
  { name: 'Vérifie la polarité avant de souder', text: 'Le courant entre par l\'anode et sort par la cathode vers la masse. Confirme la fiche si la chute passe sous 1 V ou si la résistance chauffe.' },
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

export const content: ToolLocaleContent<LedResistorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Calculateur de résistance série pour LED', level: 2 },
    { type: 'paragraph', html: 'Une LED discrète est une diode pilotée en courant. La résistance série fixe ce courant par la loi d\'Ohm: <code>R = (Vs - n x Vf) / If</code>. Ce calculateur le résout dans le navigateur, cale une pièce E12 ou E24, peint les bagues et nomme une puissance avec un facteur deux de marge.' },
    { type: 'title', text: 'Une LED rouge sur une broche Arduino 5 V', level: 3 },
    { type: 'paragraph', html: 'La vraie recherche, c\'est "quelle résistance pour une LED rouge sous 5 V". Le Vf typique est 2,0 V à 20 mA, donc <code>(5 - 2) / 0,02 = 150 ohms</code> et 60 mW dans la résistance. Prends 150 ohms, 125 mW ou 250 mW. Un 220 ohms du tiroir marche aussi: le courant tombe vers 14 mA et la LED est plus sombre, souvent ce qu\'on veut sur une broche d\'état.' },
    { type: 'table', headers: ['Couleur de LED', 'Vf typique', 'If typique', 'Résistance sous 5 V'], rows: [['Infrarouge', '1,3 V', '20 mA', '180 ohms'], ['Rouge', '2,0 V', '20 mA', '150 ohms'], ['Jaune ou vert', '2,2 V', '20 mA', '150 ohms'], ['Bleu ou blanc', '3,2 V', '20 mA', '91 ohms'], ['Ultraviolet', '3,4 V', '20 mA', '82 ohms']] },
    { type: 'title', text: 'Valeurs préférées E12 et E24', level: 3 },
    { type: 'paragraph', html: 'Les résistances suivent la série de nombres préférés IEC. E12 est le jeu 10 pour cent courant: 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82 et leurs décennies. E24 complète le jeu 5 pour cent avec 11, 13, 16, 20, 24, 30, 36, 43, 51, 62, 75 et 91. L\'outil prend le plus proche et, à égalité, la résistance plus haute pour que la LED soit un peu plus sombre plutôt que plus chaude.' },
    { type: 'title', text: 'Quand une résistance série ne suffit pas', level: 3 },
    { type: 'paragraph', html: 'Une résistance n\'est pas une source de courant. Elle fixe le courant seulement pour une alim et un Vf choisis. Ne partage pas une résistance entre LED parallèles: le plus bas Vf accapare le courant. Pas une seule résistance sur un émetteur 1 W, un ruban LED ou une longue chaîne auto 12 V. Il faut un driver à courant constant. Les couleurs sont des lots typiques; le Vf de ta fiche au courant nominal est le chiffre qui compte.' },
    { type: 'list', items: ['Garde les LED témoins près de 10 mA à 20 mA, sauf si la fiche autorise plus.', 'Donne à chaque LED parallèle sa propre résistance.', 'Si la chute passe sous 1 V, un petit changement de Vf bouge beaucoup le courant.', 'Sous 12 V la résistance demande souvent 0,5 W, pas un film 125 mW.', 'Confirme anode, cathode, courant de crête et puissance avant de souder.'] },
    { type: 'tip', title: 'Le Vf typique n\'est pas ton lot', html: 'Les pastilles rouge, bleue et blanche ici sont un départ pour des témoins 5 mm. Mesure ou lis la courbe du fabricant si l\'alim est 3,3 V, si la LED est de puissance, ou si la pièce est infrarouge.' },
    { type: 'diagnostic', variant: 'warning', title: 'Une résistance n\'est pas une source de courant', html: 'Si l\'alim s\'affaisse, si le Vf bouge avec la température, ou si plusieurs LED sont en parallèle, le courant bouge. Prends la carte comme départ au banc, puis mesure.' },
  ],
  ui: {
    colorHeader: 'LED',
    colorInfrared: 'IR',
    colorRed: 'Rouge',
    colorOrange: 'Orange',
    colorYellow: 'Jaune',
    colorGreen: 'Vert',
    colorBlue: 'Bleu',
    colorWhite: 'Blanc',
    colorUv: 'UV',
    supplyHeader: 'Alim',
    supplyArduino: 'Arduino 5 V',
    supplyMcu: '3,3 V MCU',
    supply9: '9 V',
    supply12: '12 V',
    supply24: '24 V',
    supplyUnit: 'V',
    forwardHeader: 'Vf fiche',
    forwardUnit: 'V',
    currentHeader: 'If fiche',
    currentUnit: 'mA',
    countHeader: 'LED en série',
    seriesHeader: 'Série',
    seriesE12: 'E12',
    seriesE24: 'E24',
    showDatasheet: 'Valeurs de fiche',
    hideDatasheet: 'Masquer la fiche',
    buyLabel: 'Valeur',
    powerLabel: 'Puissance',
    seriesShort: 'Série',
    statusTight: 'Peu de tension restante',
    statusHotter: 'La résistance va chauffer',
    statusOverdriven: 'Courant élevé',
    statusNoHeadroom: 'L\'alim n\'allume pas la LED',
    statusInvalid: 'Vérifie les saisies',
    supplyLabel: 'Alim',
    resistorLabel: 'Résistance',
    ledLabel: 'LED',
    groundLabel: 'GND',
    anodeLabel: 'A+',
    cathodeLabel: 'K-',
    note: 'Les pastilles de couleur utilisent un Vf typique, pas ton lot. Ne partage pas une résistance entre LED parallèles.',
  },
};
