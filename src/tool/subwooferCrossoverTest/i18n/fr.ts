import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SubwooferCrossoverTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-crossover-subwoofer-en-ligne';
const title = 'Test de Crossover de Subwoofer';
const description =
  'Exécutez un balayage sinusoïdal de 200 Hz à 10 Hz dans votre navigateur pour trouver où votre subwoofer s\'estompe, décroche ou passe le relais à vos enceintes principales.';

const faqData = [
  {
    question: 'Que mesure un test de crossover de subwoofer ?',
    answer:
      'Il vous aide à entendre le point où les basses cessent de sonner de façon continue entre vos enceintes principales et le subwoofer. Un trou, un changement soudain de niveau ou une plage manquante peut indiquer une fréquence de crossover incorrecte, un problème de phase, une annulation par la pièce ou la limite du subwoofer.',
  },
  {
    question: 'Pourquoi ce test balaye-t-il de 200 Hz à 10 Hz ?',
    answer:
      'La plupart des crossovers home cinéma se situent entre 60 Hz et 120 Hz, tandis que de nombreuses enceintes compactes commencent à perdre de la sortie au-dessus ou en dessous de cette plage. Balayer depuis 200 Hz rend la transition enceinte-subwoofer facile à entendre avant que le son n\'atteigne les infra-graves profonds.',
  },
  {
    question: 'Ce test de basses pour subwoofer en ligne peut-il endommager les enceintes ?',
    answer:
      'Oui, les très basses fréquences à volume élevé peuvent surcharger de petites enceintes ou forcer un subwoofer. Commencez doucement, évitez les modes de basses amplifiés et arrêtez immédiatement si vous entendez des claquements, des cognements ou une détresse mécanique.',
  },
  {
    question: 'La fréquence de décrochage marquée est-elle le réglage exact de crossover à utiliser ?',
    answer:
      'Non. Considérez-la comme un indice d\'écoute, pas comme une mesure de laboratoire. Le meilleur réglage de crossover dépend aussi des spécifications des enceintes, du placement dans la pièce, de la phase, de la correction de distance et de l\'objectif d\'étalonnage.',
  },
];

const howToData = [
  {
    name: 'Réglez un niveau d\'écoute sûr',
    text: 'Baissez d\'abord le volume du système. Le balayage utilise une onde sinusoïdale générée, les basses peuvent donc devenir intenses même lorsque le volume du navigateur semble modeste.',
  },
  {
    name: 'Lancez le balayage de 200 Hz à 10 Hz',
    text: 'Appuyez sur Lancer le balayage et écoutez depuis votre place habituelle. Le son se déplace régulièrement à travers la plage de basses où se chevauchent subwoofers, enceintes principales et acoustique de la pièce.',
  },
  {
    name: 'Écoutez le décrochage ou la transition',
    text: 'Soyez attentif au moment où les basses s\'affaiblissent, disparaissent, changent d\'emplacement ou semblent inégales entre le subwoofer et les enceintes principales.',
  },
  {
    name: 'Marquez la fréquence',
    text: 'Appuyez sur Marquer le décrochage au premier point problématique clair. Utilisez cette fréquence comme indice pour ajuster le crossover, la phase, le placement ou la correction acoustique.',
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<SubwooferCrossoverTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Trouvez Le Trou De Basses Entre Vos Enceintes Et Le Subwoofer', level: 2 },
    {
      type: 'paragraph',
      html: 'Un subwoofer ne devrait pas sonner comme une boîte séparée dans le coin. Les basses doivent rester régulières lorsque les notes passent de vos enceintes principales au sub. Ce test balaye de <strong>200 Hz à 10 Hz</strong> pour que vous puissiez entendre la zone exacte où la transition devient faible, gonflée, localisable ou silencieuse.',
    },
    {
      type: 'table',
      headers: ['Ce que vous entendez', 'Ce que cela signifie généralement', 'Que essayer en premier'],
      rows: [
        ['Les basses disparaissent vers 70-100 Hz', 'Le subwoofer et les enceintes peuvent s\'annuler mutuellement près du crossover.', 'Inversez la phase, ajustez la distance/le délai, puis répétez le balayage.'],
        ['Les basses gonflent dans une bande étroite', 'Mode de pièce ou trop de chevauchement entre enceintes et subwoofer.', 'Baissez légèrement le crossover ou déplacez le subwoofer/la position d\'écoute.'],
        ['Les basses semblent provenir de l\'emplacement du subwoofer', 'Le crossover est peut-être trop élevé ou le niveau du subwoofer trop fort.', 'Essayez 80 Hz ou moins et réduisez le gain du subwoofer.'],
        ['Les basses profondes s\'estompent en dessous de 30-40 Hz', 'Limite d\'extension normale pour de nombreux subs, surtout les modèles compacts.', 'Vérifiez les spécifications du subwoofer avant de poursuivre un problème qui pourrait être physique.'],
      ],
    },
    { type: 'title', text: 'Ce Que La Fréquence De Décrochage Vous Indique', level: 3 },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Utilisez la fréquence marquée comme indice de réglage',
      badge: 'Indices d\'écoute',
      html: '<p>Si le point marqué est proche du crossover de votre ampli AVR, le problème est probablement l\'intégration: phase, distance, polarité, niveau ou la pente des filtres. Si le point marqué est beaucoup plus bas, vous entendez peut-être le subwoofer arriver à sa limite de sortie. Si le problème change beaucoup lorsque vous bougez la tête, la pièce domine le résultat.</p>',
    },
    {
      type: 'title',
      text: 'Plages De Crossover Courantes',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Type d\'enceinte', 'Point de départ typique du crossover', 'Pourquoi'],
      rows: [
        ['Petits satellites', '100-150 Hz', 'Les petits boîtiers ne peuvent généralement pas reproduire des bas-médiums propres à des niveaux cinéma.'],
        ['Enceintes bibliothèque', '70-100 Hz', 'Souvent assez de basses pour une transition propre sans rendre le sub localisable.'],
        ['Enceintes colonne', '50-80 Hz', 'Les woofers plus grands gèrent plus de bas-médiums, mais la pièce peut encore préférer la gestion des basses par subwoofer.'],
        ['Configuration THX', '80 Hz', 'Une valeur par défaut pratique qui fonctionne bien pour de nombreux systèmes et dirige les basses profondes vers le sub.'],
      ],
    },
    { type: 'title', text: 'Problème De Crossover Ou Problème De Pièce ?', level: 3 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Problème de crossover ou de phase',
          description: 'Le point faible apparaît près de la fréquence de crossover et s\'améliore après avoir changé la phase, la polarité, la distance ou le réglage du crossover.',
          points: ['Généralement reproductible depuis le même siège.', 'Souvent centré autour de 60-120 Hz.'],
        },
        {
          title: 'Annulation par la pièce',
          description: 'Le point faible change radicalement lorsque vous bougez la tête, changez de siège ou déplacez le subwoofer d\'une courte distance.',
          points: ['Très dépendant de la position.', 'Souvent résolu par le placement plus que par les réglages.'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Meilleure façon d\'exécuter le test',
      html: 'Asseyez-vous là où vous regardez réellement des films ou écoutez de la musique. Ne restez pas à côté du subwoofer. Un crossover qui sonne bien à côté du meuble peut encore laisser un trou sur le canapé.',
    },
    {
      type: 'summary',
      title: 'Ce qu\'il faut modifier après le balayage',
      items: [
        'Si le trou est près du crossover actuel, essayez des modifications de 10 Hz et répétez le balayage.',
        'Testez le commutateur de phase du subwoofer ou le réglage du délai si la bande faible se situe près du crossover.',
        'Si les basses deviennent plus fortes à un siège et disparaissent à un autre, déplacez le subwoofer avant de changer tous les réglages AVR.',
        'Après des changements de placement ou de crossover, relancez la correction acoustique pour que l\'ampli mesure la nouvelle configuration.',
        'Utilisez la fréquence marquée pour guider le réglage, puis confirmez avec de la musique, des films et des lignes de basse familières.',
      ],
    },
  ],
  ui: {
    sweepLabel: 'Balayage basse fréquence du subwoofer',
    currentFrequency: 'Fréquence actuelle',
    targetFrequency: 'Cible',
    elapsed: 'Écoulé',
    statusReady: 'Prêt pour le balayage bas',
    statusRunning: 'Balayage descendant',
    statusStopped: 'Balayage arrêté',
    start: 'Lancer le balayage',
    stop: 'Arrêter le balayage',
    markDropout: 'Marquer le décrochage',
    reset: 'Réinitialiser',
    volume: 'Niveau de sortie',
    duration: 'Durée du balayage',
    safeStart: 'Commencez à bas volume, puis marquez la première fréquence où les basses deviennent difficiles à entendre.',
    roomNote: 'La position dans la pièce et la phase peuvent changer radicalement le résultat.',
    dropoutLabel: 'Point marqué',
    dropoutEmpty: 'Pas encore marqué',
    crossoverEstimate: 'Point de décrochage estimé',
  },
};
