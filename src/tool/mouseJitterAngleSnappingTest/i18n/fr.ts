import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseJitterAngleSnappingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-tremblement-angle-souris';
const title = 'Test de Tremblement et Correction d\'Angle de la Souris';
const description =
  'Dessinez des traces brutes de souris en ligne pour détecter le tremblement du capteur, le suivi instable et la correction d\'angle ou prédiction qui rend le mouvement artificiellement droit.';

const faqData = [
  {
    question: 'Qu\'est-ce que le tremblement de la souris ?',
    answer:
      'Le tremblement de la souris est une secousse ou un bruit indésirable dans la trajectoire du curseur, même lorsque la main bouge doucement. Il peut provenir d\'une fenêtre de capteur sale, d\'une mauvaise surface, d\'un comportement de levée élevé, de bruit électrique, d\'instabilité sans fil ou d\'un capteur qui peine au DPI sélectionné.',
  },
  {
    question: 'Qu\'est-ce que la correction d\'angle ?',
    answer:
      'La correction d\'angle, parfois appelée prédiction, est une fonction de correction où le firmware de la souris tente de transformer un mouvement humain légèrement imparfait en lignes horizontales, verticales ou diagonales plus droites. Certains utilisateurs de bureau l\'apprécient, mais de nombreux joueurs et artistes préfèrent le mouvement brut sans prédiction.',
  },
  {
    question: 'Ce test peut-il prouver que le capteur de ma souris est défectueux ?',
    answer:
      'Il ne peut pas inspecter le capteur électriquement, mais il montre la trajectoire de mouvement que votre navigateur reçoit. Si des passages lisses répétés créent des points bruyants, des déviations soudaines ou des segments anormalement droits, le résultat est une preuve utile pour dépanner la souris, la surface, le DPI, la connexion sans fil ou les paramètres du firmware.',
  },
  {
    question: 'Comment dois-je dessiner pour obtenir le résultat le plus fiable ?',
    answer:
      'Dessinez des lignes diagonales lentes, des courbes à vitesse moyenne et de longs passages horizontaux. Testez le même mouvement plusieurs fois. Le tremblement est plus facile à voir dans les lignes lentes contrôlées, tandis que la correction d\'angle est plus facile à repérer lorsque le mouvement diagonal devient étrangement droit ou en escalier.',
  },
];

const howToData = [
  {
    name: 'Nettoyez le capteur et le tapis de souris',
    text: 'Avant de tester, retirez la poussière ou les poils de la fenêtre du capteur et utilisez un tapis de souris stable ou une surface de bureau.',
  },
  {
    name: 'Dessinez des lignes diagonales lentes',
    text: 'Maintenez le bouton principal de la souris enfoncé et dessinez plusieurs traits diagonaux. Un capteur brut doit montrer la variation naturelle de la main, pas une ligne forcée parfaitement sur un seul angle.',
  },
  {
    name: 'Dessinez des courbes douces',
    text: 'Faites des cercles, des courbes en S et des arcs. Le tremblement apparaît comme des points rugueux et bruyants qui sautent hors de la courbe souhaitée.',
  },
  {
    name: 'Comparez les réglages DPI et de surface',
    text: 'Répétez le même mouvement à différents niveaux de DPI, taux de sondage, réglages de levée et surfaces pour trouver quand le problème apparaît.',
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

export const content: ToolLocaleContent<MouseJitterAngleSnappingTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Test de Tremblement de Souris en Ligne: Vérifiez le Bruit du Capteur et la Correction d\'Angle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un bon capteur de souris doit suivre votre main sans ajouter de bruit visible ni corriger secrètement la trajectoire. Lorsque le capteur est sale, que la surface est difficile à suivre, que le DPI est trop élevé pour le matériel ou que le firmware applique une prédiction, la trajectoire du curseur peut cesser de sembler naturelle. Ce test de tremblement de souris vous permet de dessiner des traces brutes et d\'inspecter les points de lecture individuels afin que les problèmes de capteur deviennent visibles plutôt que vagues.',
    },
    {
      type: 'paragraph',
      html: 'La façon la plus utile de tester est simple: dessinez des lignes et des courbes contrôlées, puis regardez la forme de la trace. Un capteur brut sain produit une trajectoire qui suit votre mouvement avec de petites imperfections humaines. Un capteur bruyant produit des points rugueux, de minuscules pics et une oscillation irrégulière. Une souris avec correction d\'angle ou prédiction peut rendre le mouvement diagonal ou horizontal anormalement droit, comme si le firmware corrigeait votre main.',
    },
    {
      type: 'title',
      text: 'À quoi ressemble le tremblement de la souris',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le tremblement de la souris n\'est pas la même chose que le tremblement normal de la main. Tout le monde dessine des lignes légèrement imparfaites. Le tremblement devient suspect lorsque les points s\'écartent de la direction du mouvement alors que votre main se déplace lentement et régulièrement. Il apparaît souvent comme un bord flou autour d\'une ligne, de petits pics latéraux ou une trace qui semble grattée au lieu d\'être lisse.',
    },
    {
      type: 'table',
      headers: ['Motif de trace', 'Signification probable', 'Que tester ensuite'],
      rows: [
        ['Petits pics aléatoires pendant les lignes lentes', 'Bruit du capteur, saleté ou problème de suivi de surface', 'Nettoyez la fenêtre du capteur et essayez un autre tapis de souris'],
        ['Tremblement uniquement à DPI élevé', 'Le capteur ou le firmware peine à cette sensibilité', 'Retestez à 400, 800, 1600 et 3200 DPI'],
        ['Mouvement rugueux uniquement en mode sans fil', 'Batterie, distance du récepteur ou interférence', 'Rapprochez le récepteur et testez avec une batterie neuve'],
        ['Bruit près du levage ou en inclinant la souris', 'Distance de levée ou contact inégal avec la surface', 'Gardez la souris à plat et réduisez la distance de levée si disponible'],
        ['Tremblement sur un bureau mais pas sur un autre', 'Problème de texture ou de réflectivité de la surface', 'Utilisez un tapis de souris mat conçu pour les capteurs optiques'],
      ],
    },
    {
      type: 'title',
      text: 'À quoi ressemble la correction d\'angle',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La correction d\'angle est différente du tremblement. Au lieu d\'ajouter du bruit, elle supprime la variation naturelle. Si vous dessinez une ligne diagonale à la main, un capteur brut doit préserver les petites déviations humaines. Avec la correction d\'angle activée, la ligne peut se verrouiller dans une direction parfaitement droite horizontale, verticale ou diagonale. Cela peut faciliter le dessin sur le bureau, mais c\'est généralement indésirable pour la visée compétitive, le pixel art, la retouche photo et toute tâche où le curseur doit correspondre exactement à la main.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Comportement du capteur brut',
          description: 'La trace suit votre main, y compris les petites courbes et corrections naturelles. Les lignes diagonales ne sont pas mathématiquement parfaites, sauf si votre mouvement l\'était.',
        },
        {
          title: 'Comportement avec correction d\'angle',
          description: 'La trace semble étrangement droite sur de longues sections, en particulier près des angles courants comme horizontal, vertical ou 45 degrés.',
        },
        {
          title: 'Comportement avec tremblement',
          description: 'La trace devient bruyante, floue ou hérissée. Au lieu d\'être trop droite, elle semble instable et rugueuse.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Comment tester correctement votre souris',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Commencez avec une fenêtre de capteur propre et un tapis de souris de bonne qualité connue',
        'Dessinez des lignes diagonales lentes d\'un coin à l\'autre et répétez le même mouvement plusieurs fois',
        'Dessinez des cercles et des courbes en S pour révéler le tremblement qui peut ne pas apparaître en lignes droites',
        'Testez à plusieurs niveaux de DPI car certains capteurs deviennent plus bruyants à très haute sensibilité',
        'Désactivez les fonctionnalités du logiciel du fabricant telles que la correction d\'angle, la prédiction, le réglage de surface ou l\'accélération lorsque c\'est possible',
        'Comparez les modes filaire et sans fil si votre souris prend en charge les deux',
        'Comparez avec une autre souris sur la même surface pour distinguer la défaillance de la souris des problèmes de surface',
      ],
    },
    {
      type: 'title',
      text: 'Interpréter les scores',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'outil affiche un score de tremblement, un score de correction d\'angle, la rectitude, l\'écart moyen et le nombre d\'échantillons capturés. Ces valeurs sont mieux utilisées de manière comparative. Dessinez la même ligne avec le même mouvement de main après avoir changé une variable: DPI, surface, emplacement du récepteur sans fil ou paramètre du firmware de la souris. Si un score baisse après avoir changé la surface ou nettoyé le capteur, vous avez trouvé une cause probable.',
    },
    {
      type: 'table',
      headers: ['Résultat', 'Ce que cela suggère', 'Action pratique'],
      rows: [
        ['Tremblement faible et correction faible', 'La trajectoire du capteur semble naturelle et stable', 'Gardez les paramètres actuels et utilisez-les comme référence'],
        ['Tremblement élevé, correction faible', 'La souris suit mais la trajectoire est bruyante', 'Nettoyez le capteur, changez la surface, baissez le DPI et retestez'],
        ['Tremblement faible, correction élevée', 'La trajectoire peut être corrigée par le firmware', 'Recherchez les options de prédiction ou de correction d\'angle dans le logiciel de la souris'],
        ['Tremblement élevé et correction élevée', 'La trace est instable et peut être surcorrigée', 'Réinitialisez les profils du logiciel de la souris et retestez depuis les paramètres par défaut'],
        ['Les scores changent fortement selon la surface', 'Le capteur n\'aime pas une texture ou réflectivité de surface', 'Utilisez la surface avec la trace la plus propre'],
      ],
    },
    {
      type: 'title',
      text: 'DPI, taux de sondage et tremblement de la souris',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un DPI élevé ne signifie pas automatiquement un meilleur suivi. Certaines souris fonctionnent proprement à DPI modéré mais exposent plus de bruit visible à DPI très élevé car de minuscules erreurs du capteur sont amplifiées en un mouvement de curseur plus grand. Le taux de sondage peut également modifier la sensation de la trace. Un taux de sondage plus élevé donne des mises à jour plus fréquentes, mais ne peut pas réparer un capteur sale, une mauvaise surface ou la prédiction du firmware.',
    },
    {
      type: 'paragraph',
      html: 'Pour une comparaison équitable, gardez votre mouvement de main similaire et changez un paramètre à la fois. Par exemple, dessinez la même ligne diagonale à 800 DPI, 1600 DPI et 3200 DPI. Si la trajectoire devient floue uniquement à la valeur la plus élevée, la meilleure solution peut être de baisser le DPI et d\'ajuster la sensibilité en jeu au lieu de remplacer la souris.',
    },
    {
      type: 'title',
      text: 'Causes courantes du tremblement du capteur de souris',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Poussière, poils ou graisse près de la fenêtre du capteur optique',
        'Surfaces brillantes, réfléchissantes, transparentes ou irrégulières',
        'Réglages DPI très élevés qui amplifient les petites erreurs du capteur',
        'Batterie faible ou interférence sans fil',
        'Récepteur placé loin de la souris ou derrière un boîtier PC métallique',
        'Filtres du firmware, calibration de surface ou profils du logiciel du fabricant',
        'Problèmes de distance de levée lorsque la souris est inclinée ou déplacée rapidement',
        'Une lentille de capteur usée ou endommagée après une utilisation intensive',
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi les joueurs et les designers s\'en soucient',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dans les jeux, le tremblement peut rendre les micro-ajustements plus difficiles car le réticule ne se stabilise pas exactement là où la main le voulait. La correction d\'angle peut être tout aussi problématique: elle peut aider à dessiner des lignes droites sur le bureau, mais elle peut aussi déformer les petites corrections de visée et rendre le suivi diagonal filtré. Pour les designers, illustrateurs, utilisateurs de CAO et éditeurs photo, la correction du capteur peut rendre le mouvement à main levée moins honnête et plus difficile à contrôler.',
    },
    {
      type: 'paragraph',
      html: 'Une souris n\'a pas besoin d\'une trace parfaite pour être bonne. Le mouvement humain est naturellement imparfait. Les signes d\'alerte sont répétables: la même surface crée toujours des points bruyants, le même DPI crée toujours des pics, ou la même souris rend toujours les diagonales étrangement droites alors qu\'une autre souris ne le fait pas.',
    },
    {
      type: 'title',
      text: 'Avant d\'acheter une nouvelle souris',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Nettoyez soigneusement la fenêtre du capteur, souris éteinte',
        'Essayez un autre tapis de souris, de préférence en tissu mat ou surface hybride gaming',
        'Baissez le DPI et compensez avec la sensibilité logicielle',
        'Désactivez la correction d\'angle, la prédiction, la précision du pointeur et les options d\'accélération',
        'Rapprochez le récepteur sans fil à l\'aide d\'un câble d\'extension USB',
        'Mettez à jour ou réinitialisez le profil du firmware de la souris si le logiciel du fabricant le prend en charge',
        'Testez une autre souris sur le même ordinateur et la même surface pour comparaison',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'La règle de diagnostic utile',
      html: '<p>Une seule trace étrange ne suffit pas. Un motif répétable est ce qui compte. Si le tremblement ou la correction d\'angle apparaît encore et encore dans les mêmes réglages, puis disparaît lorsque vous nettoyez le capteur, changez la surface, baissez le DPI ou désactivez la prédiction, vous avez trouvé la cause la plus probable.</p>',
    },
  ],
  ui: {
    badge: 'Trace brute du capteur',
    canvasLabel: 'Zone de dessin pour le test de tremblement et correction d\'angle de la souris',
    canvasHint: 'Dessinez des diagonales lentes, des cercles et des courbes. Les points individuels du capteur restent visibles pour repérer facilement le suivi irrégulier.',
    pointerPrompt: 'Maintenez et dessinez dans la zone de dessin',
    samples: 'Échantillons',
    jitterScore: 'Tremblement',
    snappingScore: 'Correction',
    straightness: 'Rectitude',
    rawDeviation: 'Écart moyen',
    statusIdle: 'Dessinez dans le champ pour capturer le mouvement brut de la souris',
    statusHealthy: 'La trace semble naturelle et stable dans les échantillons récents',
    statusJitter: 'Mouvement bruyant détecté dans la trace récente',
    statusSnapping: 'Mouvement étrangement droit détecté',
    statusMixed: 'Tremblement et possible correction d\'angle apparaissent tous deux dans la trace',
    reset: 'Réinitialiser',
    holdShift: 'Conseil: testez un changement à la fois. DPI, surface, mode sans fil et paramètres de prédiction peuvent tous modifier la trace.',
    sensitivity: 'Sensibilité de détection',
    low: 'stable',
    high: 'strict',
    traceLog: 'Événements de trace',
    emptyLog: 'Dessinez quelques traits contrôlés pour démarrer le journal d\'événements.',
    jitterEvent: 'tremblement',
    snappingEvent: 'correction d\'angle',
    combinedEvent: 'tremblement et correction d\'angle',
    cleanEvent: 'trace propre',
    pxUnit: 'px',
    percentUnit: '%',
  },
};
