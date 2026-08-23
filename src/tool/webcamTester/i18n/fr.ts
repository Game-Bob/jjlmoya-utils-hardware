import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebcamTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-webcam-prive-en-ligne';
const title = 'Test de caméra web privé';
const description = 'Vérifiez la permission de caméra, l aperçu vidéo en direct, la résolution, le ratio d aspect, l orientation et la fluidité des images.';

const faq = [
  {
    question: 'Ce test de webcam enregistre-t-il ou téléverse-t-il ma vidéo ?',
    answer: 'Non. La page demande uniquement un flux vidéo en direct local pour l aperçu et ne requiert pas l accès au microphone. Elle ne crée aucun enregistrement ni capture d écran et ne transmet aucune donnée. Arrêter le test ferme toutes les pistes vidéo.',
  },
  {
    question: 'Pourquoi le navigateur demande-t-il l autorisation d accès à la caméra ?',
    answer: 'Un site web ne peut pas ouvrir une caméra sans l autorisation explicite de l utilisateur. La demande vous permet d accepter ou de refuser un flux vidéo local temporaire. Vous pouvez révoquer cet accès à tout moment depuis les paramètres du navigateur.',
  },
  {
    question: 'Quelle est la différence entre les FPS configurés et les FPS observés ?',
    answer: 'Les FPS configurés représentent le taux cible demandé pour cet aperçu. Les FPS observés estiment le nombre d images réellement reçues lorsque l onglet reste visible. Un éclairage faible ou une charge processeur élevée peuvent réduire le taux observé.',
  },
  {
    question: 'Pourquoi la résolution disponible peut-elle différer des spécifications ?',
    answer: 'Le système d exploitation, le pilote de la caméra et le navigateur sélectionnent un mode compatible. Une autre application active ou un mode d économie d énergie peut limiter la résolution disponible.',
  },
];

const howTo = [
  {
    name: 'Ouvrez l aperçu privé',
    text: 'Cliquez sur Ouvrir la caméra et autorisez l accès vidéo dans l invite du navigateur. Aucun accès audio n est demandé.',
  },
  {
    name: 'Vérifiez le cadrage et l image',
    text: 'Contrôlez la mise au point, l éclairage et l arrière-plan en direct. Activez le mode miroir ou le guide de cadrage si nécessaire.',
  },
  {
    name: 'Contrôlez le flux vidéo',
    text: 'Consultez la résolution, le ratio d aspect, l orientation, les FPS configurés et la fluidité d affichage.',
  },
  {
    name: 'Changez ou arrêtez la caméra',
    text: 'Sélectionnez une autre caméra disponible ou cliquez sur Arrêter la caméra pour fermer toutes les pistes vidéo.',
  },
];

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

export const content: ToolLocaleContent<WebcamTesterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions fréquentes sur le test de webcam',
  faq,
  bibliographyTitle: 'Sources et guides de configuration de caméra',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Testez votre webcam avant un appel vidéo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Utilisez cet aperçu privé pour vérifier l essentiel avant une réunion: la caméra s ouvre-t-elle, s agit-il du bon périphérique, votre visage est-il bien éclairé et la vidéo est-elle fluide? Effectuez le test dans les mêmes conditions d éclairage que votre appel.',
    },
    {
      type: 'list',
      items: [
        'Choisissez la bonne caméra si plusieurs appareils sont connectés',
        'Placez la caméra à hauteur des yeux et gardez le visage au tiers supérieur de l image',
        'Éclairez votre visage de face plutôt que de vous placer dos à une fenêtre lumineuse',
        'Fermez les autres applications de réunion si la caméra semble occupée',
        'Vérifiez la résolution et la fluidité d affichage directement sur l écran',
      ],
    },
    {
      type: 'title',
      text: 'Solutions pour une caméra noire ou indisponible',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Symptôme observé', 'Cause probable', 'Action recommandée'],
      rows: [
        ['Autorisation refusée', 'L accès à la caméra est bloqué dans le navigateur ou le système', 'Autorisez la caméra dans les paramètres, rechargez la page et réessayez'],
        ['Écran noir ou occupé', 'Une autre application de visioconférence utilise la caméra', 'Fermez Zoom, Teams ou Meet et réessayez'],
        ['Image incorrecte', 'Une caméra virtuelle ou secondaire a été sélectionnée', 'Choisissez une autre source dans le menu déroulant'],
        ['Image sombre ou granuleuse', 'Éclairage frontal insuffisant ou contre-jour important', 'Placez une lampe douce face à vous ou orientez-vous vers une fenêtre'],
        ['Vidéo saccadée', 'Faible luminosité ou forte charge processeur', 'Ajoutez de la lumière et fermez les applications lourdes'],
      ],
    },
    {
      type: 'title',
      text: 'Comprendre la résolution et la fréquence d images',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une résolution de 1280 × 720 suffit amplement pour la plupart des réunions. Le 1920 × 1080 offre une meilleure netteté mais nécessite une connexion stable. Les FPS configurés ciblent la demande initiale, tandis que les FPS observés mesurent le rendu effectif.',
    },
    {
      type: 'tip',
      title: 'Reproduisez les conditions réelles de réunion',
      html: 'Réalisez le test au même moment de la journée et avec le même éclairage. Les applications de visioconférence pouvant modifier l image, faites un contrôle final dans votre application habituelle.',
    },
    {
      type: 'title',
      text: 'Cadrage et positionnement idéal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Positionnez la caméra à hauteur du regard et conservez un espace au-dessus de la tête. Privilégiez un éclairage de face et un arrière-plan dégagé. Si vous portez des lunettes, décalez légèrement la source de lumière pour éviter les reflets.',
    },
  ],
  ui: {
    privacyNote: 'Sans enregistrement · Sans téléversement · Sans audio',
    permissionHeading: 'Prêt à tester votre caméra ?',
    permissionBody: 'Ouvrez un aperçu privé en direct pour vérifier la qualité de l image et les formats vidéo disponibles. Arrêter la caméra ferme tout accès immédiatement.',
    startAction: 'Ouvrir la caméra',
    stopAction: 'Arrêter la caméra',
    retryAction: 'Réessayer',
    deviceLabel: 'Source de la caméra',
    devicePlaceholder: 'Sélectionner la caméra',
    defaultDevice: 'Caméra',
    mirrorAction: 'Mode miroir',
    guideAction: 'Guide de cadrage',
    stageLabel: 'Zone d aperçu privé de la webcam',
    resolutionLabel: 'Résolution',
    aspectLabel: 'Ratio d aspect',
    orientationLabel: 'Orientation',
    configuredFpsLabel: 'FPS configurés',
    observedFpsLabel: 'FPS observés',
    frameDeliveryLabel: 'Fluidité vidéo',
    landscapeValue: 'Paysage',
    portraitValue: 'Portrait',
    squareValue: 'Carré',
    frameStable: 'Proche du taux cible',
    frameReduced: 'Sous le taux cible',
    frameConstrained: 'Fortement réduite',
    framePending: 'En attente d images',
    statusIdle: 'Caméra fermée. Ouvrez-la dès que vous souhaitez tester l aperçu.',
    statusStarting: 'En attente de l autorisation et de la première image vidéo',
    statusReady: 'Aperçu en direct. Vérifiez la netteté, l éclairage et la fluidité.',
    statusStopped: 'Caméra arrêtée. Toutes les pistes vidéo de ce test sont fermées.',
    statusHidden: 'Gardez cet onglet visible pour obtenir une mesure précise des FPS.',
    statusUnsupported: 'Ce navigateur ne prend pas en charge l accès à la caméra.',
    errorPermissionDenied: 'Autorisation refusée. Autorisez la caméra dans les paramètres et réessayez.',
    errorNoCamera: 'Aucune caméra trouvée. Connectez un appareil et réessayez.',
    errorInUse: 'La caméra n a pas pu démarrer. Fermez les autres applications actives et réessayez.',
    errorSecureContext: 'L accès à la caméra nécessite une connexion sécurisée HTTPS ou localhost.',
    errorGeneric: 'Impossible d ouvrir la caméra. Vérifiez les autorisations et l appareil.',
    limitHeading: 'Ce que ce test peut confirmer',
    limitBody: 'Il confirme la qualité d image et la fluidité disponibles dans cet onglet. La qualité de l objectif ou les traitements avancés des applications ne sont pas évalués.',
    localOnlyLabel: 'Contrôle privé de la caméra',
    emptyValue: 'Non disponible',
    fpsUnit: 'FPS',
  },
};
