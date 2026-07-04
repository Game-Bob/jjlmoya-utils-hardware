import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileSensorTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mobile-sensor-test';
const title = 'Test des capteurs du mobile';
const description = 'Exécutez un test en ligne du gyroscope, de l\'accéléromètre, du capteur de mouvement et du niveau à bulle sur votre téléphone pour vérifier l\'inclinaison, la rotation, la dérive et les problèmes de calibration des capteurs.';

const faqData = [
  {
    question: 'Comment tester le gyroscope de mon téléphone en ligne ?',
    answer: 'Ouvrez le test sur le téléphone, appuyez sur Démarrer la calibration, autorisez l\'accès au mouvement si demandé, puis faites pivoter et inclinez l\'appareil. Un gyroscope et un capteur d\'orientation fonctionnels doivent mettre à jour alpha, bêta et gamma de manière fluide, sans se figer ni sauter brusquement.',
  },
  {
    question: 'Puis-je tester l\'accéléromètre avec un niveau à bulle ?',
    answer: 'Oui. Posez le téléphone sur une table plate après avoir lancé le test. La bulle devrait se stabiliser près du centre et les valeurs d\'accélération doivent rester stables. Si la bulle dérive fortement alors que le téléphone est immobile, l\'accéléromètre peut nécessiter un étalonnage ou la coque, la table ou le matériel de l\'appareil peuvent interférer.',
  },
  {
    question: 'Pourquoi l\'iPhone demande-t-il l\'autorisation de mouvement ?',
    answer: 'Safari sur iPhone et iPad exige une pression avant que les sites web puissent accéder aux capteurs de mouvement et d\'orientation. Si l\'autorisation est refusée, le test ne peut pas lire les données du gyroscope ni de l\'accéléromètre tant que vous n\'autorisez pas l\'accès au mouvement.',
  },
  {
    question: 'Cela peut-il réparer ou calibrer une boussole défectueuse ?',
    answer: 'Aucun outil de navigateur ne peut réparer le matériel ni forcer l\'étalonnage de la boussole du système. Ce test vous aide à identifier les symptômes : lectures bloquées, mouvement bruité, dérive, autorisation manquante ou navigateur qui n\'expose pas les capteurs.',
  },
];

const howToData = [
  { name: 'Ouvrez le test sur votre téléphone', text: 'Utilisez le même iPhone, iPad, téléphone Android ou tablette que vous souhaitez diagnostiquer. Les navigateurs de bureau n\'exposent généralement pas de capteurs de mouvement.' },
  { name: 'Autorisez l\'accès au mouvement', text: 'Appuyez sur Démarrer la calibration et acceptez l\'invite d\'autorisation de mouvement ou d\'orientation si votre navigateur en affiche une.' },
  { name: 'Testez l\'inclinaison et la rotation', text: 'Inclinez le téléphone vers l\'avant, faites-le rouler à gauche et à droite, puis faites-le pivoter à plat sur une table. Observez des changements fluides d\'alpha, bêta, gamma et d\'accélération.' },
  { name: 'Vérifiez la dérive sur une surface plane', text: 'Laissez le téléphone immobile pendant plusieurs secondes. Un capteur sain doit se stabiliser au lieu de dériver constamment, de produire des pics ou de se figer.' },
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

export const content: ToolLocaleContent<MobileSensorTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Test en ligne du gyroscope et de l\'accéléromètre pour téléphones', level: 2 },
    {
      type: 'paragraph',
      html: 'Utilisez ce test de capteurs mobiles lorsque la rotation de l\'écran semble incorrecte, que les jeux ou applications RA dérivent, qu\'une application de niveau à bulle paraît inexacte, que la navigation pointe dans la mauvaise direction ou que le téléphone ne réagit pas correctement à l\'inclinaison. Le test affiche en direct le comportement du gyroscope, de l\'accéléromètre, de la rotation et du niveau pour vous permettre de distinguer un problème d\'autorisation du navigateur d\'un véritable problème de capteur ou de calibration.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Intention de recherche principale', value: 'tester le gyroscope en ligne' },
        { label: 'Vérifie également', value: 'dérive de l\'accéléromètre' },
        { label: 'Meilleur appareil', value: 'téléphone ou tablette' },
      ],
    },
    { type: 'title', text: 'Ce que chaque mesure de capteur vous indique', level: 3 },
    {
      type: 'table',
      headers: ['Mesure', 'Utile pour', 'Signes d\'alerte'],
      rows: [
        ['Alpha', 'Vérifier la rotation autour de l\'axe vertical, utile pour les mouvements de type boussole et les changements de cap.', 'Ne change pas lors de la rotation à plat du téléphone, saute par grandes valeurs ou reste bloqué à zéro.'],
        ['Bêta', 'Vérifier l\'inclinaison avant-arrière pour la rotation d\'écran, les jeux, le nivellement photo et les contrôles RA.', 'Se déplace dans la mauvaise direction, reste bloqué sur une valeur ou dérive constamment alors que le téléphone est immobile.'],
        ['Gamma', 'Vérifier le roulis gauche-droite pour la rotation paysage, les jeux de course, les applications de niveau et les stabilisateurs.', 'Un côté répond différemment, les valeurs sont bruitées ou la bulle ne se recentre jamais sur une table plate.'],
        ['Accélération X/Y/Z', 'Vérifier la réponse de l\'accéléromètre, la détection des secousses, la direction de la gravité et la stabilité du mouvement.', 'Grands pics à l\'arrêt, aucune réponse au mouvement ou lectures instables après avoir retiré la coque.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Symptômes que ce test aide à diagnostiquer',
      html: '<p>Utilisez les valeurs en direct pour enquêter sur les échecs de rotation automatique, un gyroscope qui semble retardé, la dérive de l\'accéléromètre, les avertissements de calibration de la boussole, le suivi RA qui glisse, les erreurs de niveau de l\'appareil photo, les commandes de mouvement qui tirent d\'un côté ou un téléphone qui ne signale le mouvement que dans les applications natives mais pas dans le navigateur.</p>',
    },
    { type: 'title', text: 'Gyroscope vs accéléromètre vs boussole', level: 3 },
    {
      type: 'comparative',
      items: [
        { title: 'Gyroscope', description: 'Mesure la vitesse de rotation. Essentiel pour la RA, les jeux, la stabilisation photo, les commandes de mouvement et les changements d\'orientation fluides.' },
        { title: 'Accéléromètre', description: 'Mesure l\'accélération et la direction de la gravité. Permet l\'inclinaison, la détection de secousses, le comptage de pas et le comportement du niveau à bulle numérique.' },
        { title: 'Boussole / magnétomètre', description: 'Aide à estimer le cap, mais peut être perturbé par des aimants, des objets métalliques, des supports de voiture, des coques, des haut-parleurs, des ordinateurs portables et l\'électronique proche.' },
      ],
    },
    { type: 'title', text: 'Comment tester correctement la calibration du capteur', level: 3 },
    {
      type: 'list',
      items: [
        'Retirez les coques magnétiques, les portefeuilles MagSafe, les supports métalliques, les clips de manette et les accessoires avant de tester.',
        'Placez le téléphone sur une table stable et plane et attendez plusieurs secondes avant de juger la dérive.',
        'Faites pivoter le téléphone lentement sur chaque axe au lieu de le secouer immédiatement.',
        'Comparez Safari ou Chrome avec une application native de capteur ou de boussole si le navigateur n\'affiche aucune donnée.',
        'Redémarrez l\'appareil et répétez le test si les lectures sont figées dans plusieurs applications.',
      ],
    },
    {
      type: 'tip',
      title: 'Note sur les autorisations iPhone et Android',
      html: 'Sur iPhone et iPad, Safari peut demander l\'autorisation de mouvement et d\'orientation après une pression. Sur Android, Chrome expose généralement les capteurs de mouvement plus directement, mais les paramètres de confidentialité, les options du navigateur, les modes d\'économie d\'énergie et les webviews intégrées peuvent toujours bloquer ou réduire les données des capteurs.',
    },
    {
      type: 'table',
      headers: ['Problème', 'Cause probable', 'Étape suivante'],
      rows: [
        ['Aucune valeur ne change', 'Autorisation refusée, navigateur non pris en charge, appareil de bureau ou webview restreinte.', 'Ouvrez sur le téléphone lui-même, utilisez Safari ou Chrome, autorisez l\'accès au mouvement et rechargez la page.'],
        ['La bulle dérive sur une table', 'Problème de calibration, surface irrégulière, interférence de la coque ou bruit de l\'accéléromètre.', 'Retirez la coque, utilisez une surface plane connue, redémarrez et comparez avec une application de niveau native.'],
        ['La direction de la boussole est erronée', 'Interférence magnétique ou calibration de la boussole système.', 'Éloignez-vous du métal et de l\'électronique et utilisez le processus de calibration de la boussole du système d\'exploitation.'],
        ['Les valeurs sautent ou présentent des pics', 'Bruit du capteur, matériel endommagé, limitation agressive du navigateur ou mouvement physique soudain.', 'Testez à l\'arrêt, fermez les applications lourdes et comparez avec un autre navigateur ou une application native.'],
      ],
    },
    {
      type: 'summary',
      title: 'À quoi sert ce test',
      items: [
        'Tester le gyroscope d\'un téléphone en ligne sans installer d\'application.',
        'Vérifier la dérive de l\'accéléromètre avec un niveau à bulle en direct.',
        'Déterminer si les commandes de mouvement échouent à cause du matériel, de la calibration, des autorisations ou de la prise en charge du navigateur.',
        'Préparer un téléphone pour la RA, les jeux, le nivellement photo, la navigation ou le dépannage de la rotation d\'écran.',
      ],
    },
  ],
  ui: {
    startButton: 'Démarrer la calibration',
    permissionHint: 'Appuyez une fois pour déverrouiller les capteurs de mouvement',
    privacyBadge: 'Données locales du capteur',
    privacyCopy: 'Les mesures d\'orientation et de mouvement restent dans cette session du navigateur.',
    orientationPanel: 'Orientation',
    motionPanel: 'Mouvement',
    bubblePanel: 'Niveau à bulle numérique',
    statusReady: 'Prêt pour l\'autorisation du capteur',
    statusWaiting: 'En attente de l\'autorisation du navigateur',
    statusDenied: 'L\'accès au capteur a été refusé ou est indisponible',
    statusUnsupported: 'Les capteurs de mouvement ne sont pas exposés par ce navigateur',
    statusActive: 'Flux de capteurs en direct actif',
    steadyLabel: 'Stable',
    movingLabel: 'En mouvement',
    shakingLabel: 'Secousses',
    alphaLabel: 'Alpha',
    betaLabel: 'Bêta',
    gammaLabel: 'Gamma',
    accelXLabel: 'X',
    accelYLabel: 'Y',
    accelZLabel: 'Z',
    rotationAlphaLabel: 'Rot A',
    rotationBetaLabel: 'Rot B',
    rotationGammaLabel: 'Rot G',
    levelOffsetLabel: 'Décalage du niveau',
    motionMagnitudeLabel: 'Magnitude du mouvement',
    cubeLabel: 'Cube d\'orientation 3D de l\'appareil',
    bubbleLabel: 'Indicateur de niveau à bulle',
    calibrationLabel: 'Degrés en direct',
  },
};
