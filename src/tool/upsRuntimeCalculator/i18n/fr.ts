import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UpsRuntimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-autonomie-onduleur';
const title = 'Calculateur d\'Autonomie d\'Onduleur';
const description = 'Estimez l\'autonomie de l\'onduleur, la charge totale protégée, les wattheures utilisables et la taille en VA recommandée pour PC, écrans, routeurs, NAS et matériel de laboratoire domestique.';

const faqData = [
  {
    question: 'Comment calculer l\'autonomie d\'un onduleur ?',
    answer: 'Additionnez la puissance en watts de chaque appareil branché sur l\'onduleur, multipliez les wattheures de la batterie par le rendement de l\'onduleur, soustrayez la réserve que vous souhaitez conserver, puis divisez les wattheures utilisables par les watts de charge. Le résultat en heures peut être multiplié par 60 pour obtenir des minutes.',
  },
  {
    question: 'Pourquoi l\'autonomie réelle diffère-t-elle de l\'estimation ?',
    answer: 'L\'autonomie varie avec l\'âge de la batterie, la température, le taux de décharge, le rendement de l\'onduleur, les pics de charge et la tension de coupure du fabricant. Considérez le résultat comme une estimation de planification, puis vérifiez-le avec un test d\'arrêt contrôlé.',
  },
  {
    question: 'Faut-il dimensionner un onduleur en watts ou en VA ?',
    answer: 'Vérifiez les deux. Les watts indiquent la puissance réelle que l\'onduleur peut fournir, tandis que les VA incluent le facteur de puissance. L\'onduleur doit dépasser votre charge en watts et disposer d\'une marge en VA suffisante pour l\'équipement connecté.',
  },
  {
    question: 'Quelle marge de sécurité dois-je conserver sur l\'onduleur ?',
    answer: 'Une cible pratique consiste à maintenir la charge normale en dessous d\'environ 70-80 % de la puissance nominale en watts de l\'onduleur. Cela laisse de la place pour les pics de démarrage, le vieillissement des batteries et les futurs appareils.',
  },
  {
    question: 'Puis-je brancher des imprimantes ou des radiateurs sur un onduleur ?',
    answer: 'Évitez les imprimantes laser, les radiateurs et autres charges à fort appel de courant, sauf si l\'onduleur est explicitement conçu pour cela. Ils peuvent surcharger l\'onduleur et réduire considérablement l\'autonomie.',
  },
];

const howToData = [
  {
    name: 'Lister les appareils protégés',
    text: 'Saisissez les appareils qui doivent rester sous tension pendant une panne, tels que l\'ordinateur, l\'écran, le routeur, le modem, le NAS et le commutateur réseau.',
  },
  {
    name: 'Saisir une puissance réaliste en watts',
    text: 'Utilisez la consommation mesurée à la prise murale chaque fois que possible. Si vous ne disposez que de la puissance nominale de l\'alimentation, réduisez-la à la charge de fonctionnement prévue au lieu d\'utiliser la valeur maximale de l\'étiquette.',
  },
  {
    name: 'Définir la capacité de la batterie et les hypothèses',
    text: 'Saisissez les wattheures de la batterie de l\'onduleur, le rendement de l\'onduleur, le facteur de puissance et le pourcentage de réserve que vous souhaitez conserver pour un arrêt en douceur.',
  },
  {
    name: 'Lire l\'autonomie et la recommandation en VA',
    text: 'Utilisez les minutes estimées et les VA recommandés comme guide d\'achat ou de configuration, puis validez l\'installation par un exercice de coupure en toute sécurité.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<UpsRuntimeCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculateur d\'Autonomie d\'Onduleur: Estimez le Temps de Sauvegarde sur Batterie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Estimer l\'autonomie d\'un onduleur répond à deux questions pratiques: combien de temps votre matériel peut rester sous tension pendant une coupure de courant, et si l\'onduleur est suffisamment dimensionné pour la charge connectée. Ce calculateur combine la puissance des appareils, les wattheures de la batterie, le rendement de l\'onduleur, le facteur de puissance et la réserve d\'arrêt afin que le résultat soit plus proche d\'une planification réelle qu\'une simple division de la capacité de la batterie.',
    },
    {
      type: 'title',
      text: 'La Formule d\'Autonomie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'autonomie estimée en heures est <strong>les wattheures utilisables de la batterie divisés par la charge totale en W</strong>. Les wattheures utilisables ne correspondent pas à la capacité imprimée sur la batterie: ils doivent être ajustés pour les pertes de l\'onduleur et la réserve que vous souhaitez conserver pour un arrêt en douceur. Par exemple, une batterie de 432 Wh avec un rendement de 86 % et une réserve de 20 % fournit environ 297 Wh d\'énergie utilisable.',
    },
    {
      type: 'table',
      headers: ['Entrée', 'Pourquoi c\'est important', 'Conseil pratique'],
      rows: [
        ['Watts de charge', 'Contrôle directement l\'autonomie', 'Mesurez avec un wattmètre mural lorsque c\'est possible, surtout pour les PC gaming et les NAS.'],
        ['Wh de la batterie', 'Définit la réserve d\'énergie', 'Utilisez les données du fabricant ou la tension nominale multipliée par les ampères-heures.'],
        ['Rendement', 'Compense les pertes de l\'onduleur', 'Une plage de 80-90 % est une hypothèse raisonnable pour de nombreux onduleurs grand public.'],
        ['Facteur de puissance', 'Convertit les watts en VA', 'Utilisez la spécification de l\'onduleur si elle est connue ; 0,6-0,8 est courant pour les modèles d\'entrée et de milieu de gamme.'],
        ['Réserve', 'Maintient la marge d\'arrêt', '10-25 % est raisonnable pour un arrêt contrôlé d\'un PC ou d\'un serveur.'],
      ],
    },
    {
      type: 'title',
      text: 'De Combien d\'Autonomie Avez-Vous Besoin ?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '5-10 minutes: assez pour passer les brèves fluctuations ou éteindre un ordinateur de bureau en sécurité.',
        '10-20 minutes: utile pour les routeurs, modems, NAS et petits nœuds de laboratoire domestique.',
        '30+ minutes: mieux pour la continuité réseau, le télétravail et les emplacements avec des coupures fréquentes.',
        'Plusieurs heures: nécessite généralement un système de batterie plus important, pas seulement un onduleur de bureau.',
      ],
    },
    {
      type: 'title',
      text: 'Watts vs VA pour Choisir un Onduleur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les noms des produits onduleurs mettent souvent en avant les VA, mais la puissance en watts est la limite réelle pour les équipements. Un onduleur de 900 VA peut ne supporter que 540 W, tandis qu\'un autre modèle 900 VA peut supporter 600 W ou plus. Vérifiez les deux valeurs et maintenez le fonctionnement normal en dessous du maximum pour éviter les alarmes de surcharge, la réduction de la durée de vie de la batterie et les échecs de transfert lors d\'une coupure.',
    },
    {
      type: 'title',
      text: 'Charges Qui Faussent les Estimations d\'Autonomie',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Les PC gaming peuvent passer d\'une faible consommation au repos à une forte consommation GPU en quelques secondes.',
        'Les écrans varient fortement selon la luminosité, le mode HDR et la taille du panneau.',
        'Les NAS consomment davantage lors du démarrage des disques et des reconstructions.',
        'Les imprimantes laser, radiateurs, pompes et compresseurs sont de mauvaises charges pour onduleur sauf support explicite.',
        'Les batteries anciennes peuvent fournir bien moins d\'autonomie que ne le suggère leur capacité d\'origine.',
      ],
    },
    {
      type: 'title',
      text: 'Liste de Vérification pour un Test en Sécurité',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Chargez complètement l\'onduleur avant de tester.',
        'Enregistrez le travail en cours et évitez de tester pendant des écritures critiques ou des mises à jour de firmware.',
        'Débranchez l\'alimentation secteur, pas l\'équipement, et surveillez le pourcentage de charge de l\'onduleur et l\'estimation de la batterie.',
        'Confirmez que votre PC, NAS ou serveur reçoit le signal d\'arrêt avant que la batterie ne soit épuisée.',
        'Répétez le test tous les quelques mois car les batteries plomb-acide des onduleurs vieillissent rapidement.',
      ],
    },
  ],
  ui: {
    loadTitle: 'Charge protégée',
    addDevice: 'Ajouter un appareil',
    deviceName: 'Appareil',
    watts: 'Watts',
    remove: 'Supprimer l\'appareil',
    batteryWh: 'Capacité de la batterie (Wh)',
    efficiency: 'Rendement de l\'onduleur',
    powerFactor: 'Facteur de puissance',
    reserve: 'Réserve d\'arrêt',
    totalLoad: 'Charge totale',
    runtime: 'Autonomie estimée',
    recommendedUps: 'Taille recommandée',
    usableEnergy: 'Énergie utilisable',
    minutes: 'min',
    hours: 'h',
    wattsUnit: 'W',
    vaUnit: 'VA',
    whUnit: 'Wh',
    assumptionsLabel: 'Hypothèses de l\'onduleur',
    presetDesktop: 'PC de bureau',
    presetMonitor: 'Écran 27 pouces',
    presetRouter: 'Routeur et modem',
    presetNas: 'NAS deux baies',
    percentUnit: '%',
    bandLight: 'fenêtre de sauvegarde confortable avec un onduleur recommandé proche de',
    bandBalanced: 'fenêtre de sauvegarde équilibrée avec un onduleur recommandé proche de',
    bandHeavy: 'fenêtre de sauvegarde courte ; envisagez une batterie plus grande ou réduisez la charge proche de',
    summaryPrefix: 'Cette configuration a une',
  },
};
