import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamepadPollingRateCheckerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'testeur-taux-rafraichissement-manette-hertz';
const title = 'Testeur de Polling Rate et Hertz pour Manette';
const description = 'Mesurez la fréquence de rafraîchissement observée en navigateur, l intervalle d mise à jour et la stabilité de votre manette USB ou Bluetooth.';

const faq = [
  {
    question: 'Que mesure ce testeur de polling rate pour manette ?',
    answer: 'Il mesure les variations d horodatage de la Gamepad API dans le navigateur pendant que vous déplacez un stick analogique. La valeur en Hertz indique la fréquence observée dans la page et non une mesure électrique directe du bus USB.',
  },
  {
    question: 'Le navigateur peut-il certifier qu une manette tourne à 1000 Hz ?',
    answer: 'Il peut vérifier si les mises à jour arrivent de manière fluide et régulière dans la page, mais ne certifie pas un surcadencage USB matériel. L horloge du navigateur et du système peut regrouper des événements.',
  },
  {
    question: 'Pourquoi faut-il tourner le stick analogique en cercle ?',
    answer: 'Le mouvement circulaire continu fait varier les deux axes en permanence et génère un flux constant d états. Laisser le stick immobile produit trop peu de changements d état.',
  },
  {
    question: 'Peut-on comparer les performances USB et Bluetooth ?',
    answer: 'Oui, effectuez le test avec la même durée et le même mouvement circulaire sur chaque connexion dans le même navigateur pour comparer la fréquence, l intervalle et le jitter.',
  },
];

const howTo = [
  {
    name: 'Connecter et activer la manette',
    text: 'Branchez la manette en USB ou Bluetooth puis appuyez sur un bouton pour que le navigateur la détecte via l API Gamepad.',
  },
  {
    name: 'Sélectionner l appareil et la durée',
    text: 'Choisissez la manette dans la liste et définissez une durée de dix secondes pour une première mesure équilibrée.',
  },
  {
    name: 'Faire tourner un stick de façon continue',
    text: 'Lancez la mesure et décrivez des cercles réguliers avec le stick gauche jusqu à la fin de l anneau de progression.',
  },
  {
    name: 'Analyser le taux observé et la stabilité',
    text: 'Comparez les Hertz moyens, l intervalle en millisecondes et le jitter sous des conditions de test identiques.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<GamepadPollingRateCheckerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Foire aux questions sur le polling rate des manettes',
  faq,
  bibliographyTitle: 'Références techniques',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Mesurez le taux de rafraîchissement de votre manette dans le navigateur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cet outil surveille les horodatages haute résolution associés à la manette sélectionnée lorsque le stick analogique est en mouvement. Il filtre les anomalies, calcule l intervalle moyen entre chaque rapport et convertit cette durée en Hertz observés (1000 divisé par les millisecondes). Tout le calcul s effectue localement dans la page.',
    },
    {
      type: 'table',
      headers: ['Valeur', 'Ce qu elle indique', 'Ce qu elle ne prouve pas'],
      rows: [
        ['Taux observé', 'Fréquence des rapports lus par la page chaque seconde', 'Le polling rate électrique direct du port USB'],
        ['Intervalle moyen', 'Temps moyen écoulé entre deux mises à jour', 'La latence totale jusqu à l affichage écran'],
        ['Jitter (variation)', 'Écart de temps entre le 5e et le 95e percentile', 'Un défaut matériel définitif à lui seul'],
        ['Confiance', 'Volume et régularité des échantillons capturés', 'Une précision d étalonnage de laboratoire'],
      ],
    },
    {
      type: 'title',
      text: 'Comment réaliser un test de Hertz reproductible',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fermez les tâches de fond lourdes, gardez l onglet actif et faites tourner le même stick de façon constante lors de chaque essai. Utilisez le même navigateur et la même durée pour comparer des câbles, adaptateurs Bluetooth ou réglages système.',
    },
    {
      type: 'tip',
      title: 'Comparez toujours dans des conditions identiques',
      html: 'Effectuez au moins deux passages après avoir changé de câble ou de port USB. Un pic isolé est moins significatif qu une fréquence stable avec un faible jitter.',
    },
    {
      type: 'title',
      text: 'Pourquoi ce test ne mesure pas le retard d affichage global',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L API Gamepad lit les données du contrôleur après traitement par le système d exploitation et le navigateur. Elle ne mesure pas la réponse électrique du câble ni le temps de rendu écran. L intervalle observé est parfait pour des comparaisons web mais ne constitue pas l input lag total.',
    },
  ],
  ui: {
    privacyNote: 'Traitement du signal 100% local',
    stepConnect: 'Connecter et appuyer sur une touche',
    stepMove: 'Faire tourner un stick en cercle',
    stepRead: 'Comparer fréquence et stabilité',
    deviceLabel: 'Manette active détectée',
    devicePlaceholder: 'Appuyez sur un bouton de la manette pour la détecter',
    deviceFallback: 'Manette connectée',
    durationLabel: 'Fenêtre de mesure',
    durationFive: '5 sec',
    durationTen: '10 sec',
    durationTwenty: '20 sec',
    startAction: 'Démarrer le test',
    stopAction: 'Arrêter',
    resetAction: 'Réinitialiser',
    orbitInstruction: 'Faites tourner le stick gauche en cercle pendant le test',
    traceLabel: 'Trace d horodatage en direct',
    observedRateLabel: 'Taux observé',
    intervalLabel: 'Intervalle moyen',
    jitterLabel: 'Variation (Jitter)',
    samplesLabel: 'Échantillons valides',
    confidenceLabel: 'Fiabilité du test',
    confidenceLow: 'Faible',
    confidenceMedium: 'Moyenne',
    confidenceHigh: 'Élevée',
    statusWaiting: 'En attente d une manette compatible',
    statusReady: 'Manette prête. Cliquez sur démarrer avec le pouce sur le stick.',
    statusMeasuring: 'Enregistrement des horodatages en local',
    statusNeedsMovement: 'Tournez le stick avec des cercles plus larges pour capturer des données',
    statusComplete: 'Test terminé. Répétez dans les mêmes conditions pour comparer.',
    statusUnsupported: 'Votre navigateur ne prend pas en charge l API Gamepad',
    statusDisconnected: 'Aucune manette active. Connectez-en une et appuyez sur un bouton.',
    statusStopped: 'Test arrêté. Le résultat partiel reste visible.',
    limitHeading: 'Limite technique de la mesure en navigateur',
    limitBody: 'Mesure les mises à jour visibles via l API Gamepad. Ne certifie pas le surcadencage USB ou la latence globale.',
    emptyValue: '-',
    hertzUnit: 'Hz',
    millisecondsUnit: 'ms',
    reportsUnit: 'intervalles',
    progressLabel: 'Progression de la mesure',
  },
};
