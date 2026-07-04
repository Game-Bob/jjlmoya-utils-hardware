import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UsbPowerBudgetCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-budget-alimentation-usb';
const title = 'Calculateur de Budget d\'Alimentation USB';
const description = 'Vérifiez si un port USB, chargeur, hub, câble ou profil USB-C PD peut alimenter vos appareils en toute sécurité après marge de réserve et chute de tension du câble.';

const faqData = [
  {
    question: 'Comment savoir si un port USB peut alimenter mon appareil?',
    answer: 'Comparez la puissance totale de l\'appareil avec la puissance de la source USB, réservez une marge de sécurité et estimez la chute de tension du câble. Une configuration peut échouer même lorsque les watts nominaux semblent élevés si le câble est long, fin ou transporte un courant élevé à 5 volts.',
  },
  {
    question: 'Pourquoi la longueur du câble est-elle importante pour l\'alimentation USB?',
    answer: 'Le courant traversant le cuivre crée une chute de tension. Les câbles longs et les conducteurs fins ont plus de résistance, de sorte que l\'appareil peut recevoir moins de tension que ce que fournit le chargeur. Ceci est particulièrement important pour les cartes Raspberry Pi, les disques durs, les bandes LED, les docks et les hubs alimentés par bus.',
  },
  {
    question: 'Quelle marge de réserve dois-je utiliser?',
    answer: 'Utilisez au moins 20 pour cent pour l\'électronique normale, 30 pour cent pour les moteurs, les lecteurs, les radios ou les cartes avec des charges en rafale, et plus si la qualité de l\'adaptateur est inconnue ou si l\'appareil doit fonctionner en continu.',
  },
  {
    question: 'Cela peut-il remplacer les tests de négociation USB-C PD?',
    answer: 'Non. Le calculateur vérifie le budget électrique. Il ne vérifie pas si un chargeur, un e-marker de câble, un appareil ou un hub négocie réellement un profil Power Delivery spécifique.',
  },
];

const howToData = [
  { name: 'Choisir un profil source', text: 'Sélectionnez un profil USB ou USB-C PD courant, ou modifiez la tension et le courant manuellement.' },
  { name: 'Décrire le câble', text: 'Entrez la longueur du câble et le calibre du conducteur. Les fils fins à AWG élevé causent plus de chute de tension.' },
  { name: 'Ajouter la charge', text: 'Entrez une charge d\'appareil en watts et le nombre d\'appareils partageant la même source.' },
  { name: 'Lire le statut', text: 'Utilisez le statut, la chute du câble, la tension finale, l\'utilisation et la marge pour décider si la configuration est sûre.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<UsbPowerBudgetCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'L\'alimentation USB est un budget, pas une étiquette', level: 2 },
    {
      type: 'paragraph',
      html: 'Un chargeur USB marqué 15 W, 45 W ou 100 W décrit ce que la source peut offrir dans les bonnes conditions. Votre appareil ne voit que le résultat après la négociation du protocole, les limites de courant, la résistance du câble, la qualité du connecteur, les pertes du hub et les pics de charge. Ce calculateur se concentre sur la question électrique pratique: après la chute du câble et la marge de réserve, reste-t-il assez de puissance pour le matériel que vous voulez faire fonctionner?',
    },
    {
      type: 'stats',
      items: [
        { label: 'Courant par défaut USB 2.0', value: '0,5 A' },
        { label: 'Maximum par défaut USB-C à 5 V', value: '3 A' },
        { label: 'Réserve recommandée', value: '20%+' },
      ],
    },
    { type: 'title', text: 'Comment interpréter le résultat', level: 3 },
    {
      type: 'table',
      headers: ['Statut', 'Signification', 'Meilleure étape suivante'],
      rows: [
        ['Sûr', 'La charge tient dans la capacité de la source après la réserve choisie et la tension estimée de l\'appareil reste saine.', 'Utilisez la configuration, mais surveillez la chaleur si l\'adaptateur est petit ou enfermé.'],
        ['Juste', 'La charge est proche de la limite réservée ou la chute du câble devient significative.', 'Raccourcissez le câble, choisissez des conducteurs plus épais, réduisez la charge ou passez à un profil de puissance supérieur.'],
        ['Dépassement', 'La charge dépasse la puissance utile de la source ou la tension côté appareil est probablement trop basse.', 'Utilisez un chargeur plus puissant, un hub alimenté, un câble plus court ou un appareil qui négocie une tension USB-C PD plus élevée.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Quand les watts suffisent mais que l\'appareil redémarre quand même',
      html: '<p>Le courant de démarrage peut être bien supérieur à la puissance moyenne imprimée sur l\'étiquette d\'un appareil. Une alimentation 5 V perd de la tension plus rapidement qu\'un profil PD 20 V pour la même puissance car elle doit transporter plus de courant. De nombreux câbles bon marché utilisent des conducteurs de puissance fins même lorsque la gaine extérieure semble épaisse, et les hubs alimentés par bus partagent un budget amont entre tous les appareils aval.</p>',
    },
    { type: 'title', text: 'La chute de tension du câble en termes simples', level: 3 },
    {
      type: 'paragraph',
      html: 'La chute de tension est la perte créée lorsque le courant traverse la résistance du câble. L\'alimentation USB a deux conducteurs dans le chemin de puissance, le calculateur utilise donc la longueur aller-retour. Un câble d\'un mètre représente électriquement deux mètres de cuivre pour la boucle d\'alimentation. Les numéros AWG plus bas sont plus épais et généralement meilleurs pour les charges à courant élevé.',
    },
    {
      type: 'comparative',
      items: [
        { title: 'Câble court et épais', description: 'Idéal pour les cartes Raspberry Pi, les boîtiers SSD, les kits de développement et les docks USB-C qui consomment du courant en rafale.' },
        { title: 'Câble long et fin', description: 'Acceptable pour les capteurs basse consommation ou la charge lente, mais risqué pour les lecteurs, les charges LED et les cartes de calcul.' },
        { title: 'PD à tension plus élevée', description: 'Réduit le courant pour la même puissance, ce qui diminue la perte du câble, mais seulement si la source, le câble et l\'appareil le négocient.' },
      ],
    },
    {
      type: 'tip',
      title: 'Règle pratique',
      html: 'Si le calculateur indique que la configuration est juste, traitez-le comme un avertissement de terrain. Les pannes USB apparaissent souvent comme des déconnexions aléatoires, des baisses de tension, une charge lente, un bruit audio ou des erreurs de stockage avant de ressembler à un problème d\'alimentation clair.',
    },
    {
      type: 'summary',
      title: 'À quoi ce calculateur est le mieux adapté',
      items: [
        'Planifier des hubs USB, des ordinateurs monocarte, des lecteurs externes, des cartes de développement, des lumières, des ventilateurs et de petites configurations de laboratoire.',
        'Comparer les profils source USB 2.0, USB 3.x, USB-C et USB Power Delivery.',
        'Estimer si un câble est trop long ou trop fin pour une charge.',
        'Choisir une réserve raisonnable avant d\'acheter un chargeur ou un hub alimenté.',
      ],
    },
  ],
  ui: {
    profileLabel: 'Profil source USB',
    metricUnits: 'Métrique',
    imperialUnits: 'US',
    voltageLabel: 'Tension source (V)',
    currentLabel: 'Courant source (A)',
    cableLengthLabel: 'Longueur du câble',
    wireGaugeLabel: 'Calibre du fil d\'alimentation',
    deviceLoadLabel: 'Charge par appareil (W)',
    devicesLabel: 'Appareils',
    headroomLabel: 'Marge de réserve (%)',
    sourcePower: 'Puissance source',
    requiredPower: 'Puissance requise',
    cableDrop: 'Chute du câble',
    deviceVoltage: 'Tension appareil',
    headroom: 'Marge',
    utilization: 'Utilisation',
    safeStatus: 'Le budget d\'alimentation semble sûr',
    tightStatus: 'Le budget d\'alimentation est juste',
    overStatus: 'Dépassement ou risque de chute de tension',
    safeAdvice: 'La charge convient avec la marge choisie. Utilisez un câble de qualité et vérifiez la chaleur pendant les longues sessions.',
    tightAdvice: 'Vous êtes proche de la limite. Réduisez la longueur du câble, utilisez des conducteurs plus épais, diminuez la charge ou choisissez un profil plus puissant.',
    overAdvice: 'Cette configuration risque de subir des baisses de tension ou de l\'étranglement. Utilisez un hub alimenté, un adaptateur plus puissant ou un profil USB-C PD à tension plus élevée.',
    busLane: 'Source USB',
    loadLane: 'Charge appareil',
    cableLane: 'chute',
    boardEyebrow: 'Chemin d\'alimentation USB en direct',
    sourceSocket: 'Prise source',
    deviceSocket: 'Charge matérielle',
    energyFlow: 'flux d\'énergie',
    reservedLabel: 'utilisable après réserve',
  },
};
