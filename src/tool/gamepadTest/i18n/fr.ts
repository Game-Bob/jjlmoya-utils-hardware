import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestMandoUI } from '../ui';

const slug = 'test-manette';
const title = 'Test de Manette et Contrôleur En Ligne';
const description = 'Testez votre contrôleur Xbox, PlayStation ou PC. Visualisez les zones mortes, la dérive du joystick et les boutons.';

const faqData = [
  {
    question: 'Qu\'est-ce que la dérive du joystick?',
    answer: 'La dérive se produit lorsque la manette enregistre un mouvement sans toucher le joystick. Elle est causée par l\'usure des potentiomètres internes, qui envoient un faux signal électrique dans une direction constante.',
  },
  {
    question: 'Comment puis-je corriger la dérive par logiciel?',
    answer: 'Si la dérive est légère, vous pouvez configurer une "zone morte" (Deadzone) plus grande dans les paramètres de votre jeu. Cela ignore les petits mouvements du joystick au centre.',
  },
  {
    question: 'Est-ce compatible avec les contrôleurs PS5, Xbox et Switch?',
    answer: 'Oui. Notre outil utilise l\'API Gamepad standard des navigateurs modernes, qui détecte presque n\'importe quelle manette connectée par USB ou Bluetooth, y compris DualSense, DualShock 4 et les contrôleurs Xbox.',
  },
  {
    question: 'Pourquoi le navigateur ne détecte-t-il pas ma manette?',
    answer: 'Pour des raisons de sécurité, les navigateurs ne activent la manette qu\'après la première pression d\'un bouton. Si elle n\'apparaît pas, appuyez sur n\'importe quel bouton (comme A ou X) et assurez-vous de ne pas être en mode incognito strict.',
  },
];

const howToData = [
  {
    name: 'Connecter la manette',
    text: 'Branchez votre manette en USB ou appairez-la par Bluetooth avec votre ordinateur.',
  },
  {
    name: 'Activer la détection',
    text: 'Déplacez les joysticks ou appuyez sur n\'importe quel bouton pour que le navigateur reconnaisse l\'appareil connecté.',
  },
  {
    name: 'Test des zones mortes',
    text: 'Relâchez les joysticks et observez les axes à l\'écran. Si les valeurs ne sont pas à 0,0000, vous avez une légère dérive.',
  },
  {
    name: 'Vérifier les boutons et la vibration',
    text: 'Appuyez sur chaque bouton et gâchette. Les indicateurs visuels doivent s\'allumer et si votre manette le supporte, vous pouvez tester le moteur de vibration.',
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

export const content: ToolLocaleContent<TestMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Références Techniques',
  bibliography: [
    {
      name: 'Gamepad API Standard - W3C',
      url: 'https://w3c.github.io/gamepad/',
    },
    {
      name: 'Vibration API - MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Test de Manette En Ligne: Détectez la Dérive et les Problèmes de Joystick',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Outil gratuit pour tester les manettes Xbox, PlayStation, Switch et autres contrôleurs. Visualisez les zones mortes, détectez la dérive et testez la vibration.',
    },
    {
      type: 'title',
      text: 'Qu\'est-ce que la Dérive du Joystick',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La dérive est un défaut courant des joysticks analogiques où le stick enregistre un mouvement sans être touché. Elle est causée par l\'usure des potentiomètres internes.',
    },
    {
      type: 'title',
      text: 'Compatibilité des Manettes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Compatible avec Xbox One, Xbox Series X/S, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro et pratiquement n\'importe quelle manette USB ou Bluetooth moderne.',
    },
  ],
  ui: {
    badge: 'Test d\'Entrée',
    title: 'Test de Manette et de Contrôleur',
    description: 'Testez votre manette et détectez les problèmes.',
    connectionMessage: 'Connectez votre appareil USB ou Bluetooth',
    connectionStatus: 'Connecté',
    axisLabel: 'Axes',
    buttonsLabel: 'Boutons',
    vibrationTitle: 'Test de Vibration',
    vibrationDescription: 'Nécessite le support du navigateur et une manette compatible.',
    vibrationLow: 'Grave (Rumble)',
    vibrationHigh: 'Aigu (Buzz)',
    eventHistoryTitle: 'Historique des Événements',
    eventHistoryClear: 'Effacer',
    eventWaiting: 'En attente d\'événements...',
    gameStartBtn: 'COMMENCER LE DÉFI',
    gameControllerWarning: 'Connectez une manette ou utilisez le clavier',
    gameTimer: 'Chronomètre',
    gameScore: 'Score',
    gameInstruction: 'Appuyez vite',
    gameCompleted: 'Défi Terminé',
    gameNewRecord: 'NOUVEAU RECORD',
    gameRestartBtn: 'Réessayer',
    gameFeedback: 'Vous êtes une légende des boutons',
    gameIntroTitlePre: 'Réflexes ',
    gameIntroHighlight: 'Pro Gamer',
    gameIntroTitlePost: '?',
    gameIntroDescPre: 'Testez la latence de votre manette et votre vitesse de réaction. Vous avez ',
    gameIntroDescSeconds: '30 secondes',
    gameIntroDescPost: ' pour maîtriser les boutons.',
    gameShareBtn: 'PARTAGER RANG',
    gameLogConnected: 'Connecté',
    gameLogDisconnected: 'Déconnecté',
    gameLogCleared: 'Journal effacé...',
    gameLogBtnPrefix: 'Bouton',
    gameVibNotSupported: 'Vibration non supportée.',
    gameVibLow: 'Grave',
    gameVibHigh: 'Aigu',
    gameMoveStick: 'BOUGER STICK',
    gamePress: 'APPUYER',
    rankLegendaryName: 'LÉGENDAIRE',
    rankLegendaryDesc: 'Vos doigts bougent à la vitesse du son.',
    rankLegendaryFlavor: "Ma manette s'envole !",
    rankProName: 'PRO GAMER',
    rankProDesc: "Tu as des réflexes d'acier et une manette bien calibrée.",
    rankProFlavor: "Ma manette s'envole !",
    rankGamerName: 'GAMER',
    rankGamerDesc: "Pas mal, mais pour le compétitif, il te manque de l'entraînement.",
    rankGamerFlavor: "J'y suis presque !",
    rankNoobName: 'MANCHOT',
    rankNoobDesc: 'Tu es sûr que ta manette est allumée ?',
    rankNoobFlavor: "La manette m'en veut !",
    gameShareText: 'Tu me bats ?',
    gameShareScorePrefix: "J'ai fait",
    gameShareScoreSuffix: 'points',
    gameShareTitle: 'Test de Manette En Ligne',
  },
};
