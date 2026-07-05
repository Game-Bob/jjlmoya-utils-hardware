import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDpiAnalyzerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'analyseur-dpi-souris';
const title = 'Analyseur de DPI de souris';
const description =
  'Mesurez les DPI réels de votre souris en ligne en la déplaçant sur une distance physique connue et en comparant le mouvement du pointeur capturé en pixels.';

const faqData = [
  {
    question: 'Comment fonctionne un testeur de DPI de souris en ligne ?',
    answer:
      'Il vous demande de déplacer la souris sur une distance physique connue, enregistre les événements de mouvement du navigateur, corrige les valeurs capturées avec devicePixelRatio et divise les pixels obtenus par la distance en pouces.',
  },
  {
    question: 'Pourquoi les DPI réels peuvent-ils différer de la valeur imprimée sur la souris ?',
    answer:
      'Les tolérances du capteur, les paliers du firmware, le comportement de la surface, la mise à l\'échelle du système d\'exploitation, l\'accélération du pointeur et les paramètres de profil de jeu peuvent faire en sorte que le mouvement mesuré diffère des DPI nominaux sélectionnés dans le logiciel.',
  },
  {
    question: 'Faut-il désactiver l\'accélération du pointeur avant le test ?',
    answer:
      'Oui. Désactivez Améliorer la précision du pointeur sous Windows et toute courbe d\'accélération du fabricant si vous voulez une mesure propre des DPI. Laissez-la activée uniquement si vous voulez voir délibérément comment votre configuration habituelle se comporte.',
  },
  {
    question: 'Quelle distance physique dois-je utiliser ?',
    answer:
      'Les distances plus longues réduisent l\'erreur manuelle. La largeur d\'une carte de crédit est pratique, mais un passage de règle de 100 mm ou 4 pouces est généralement plus reproductible si votre bureau a suffisamment d\'espace.',
  },
];

const howToData = [
  {
    name: 'Choisissez une référence physique',
    text: 'Utilisez 5 ou 10 mm pour les DPI très élevés, 1 pouce pour les tests conventionnels ou des références plus longues si vous avez assez d\'espace sur le bureau.',
  },
  {
    name: 'Maintenez le bouton de capture enfoncé',
    text: 'Maintenez enfoncée la cible de capture à l\'écran, puis déplacez physiquement la souris vers la droite exactement de la distance choisie.',
  },
  {
    name: 'Relâchez à la marque physique',
    text: 'Relâchez le bouton lorsque la souris atteint la marque physique réelle sur votre bureau. L\'outil calcule les pixels par pouce et affiche les DPI mesurés.',
  },
  {
    name: 'Répétez à différentes vitesses',
    text: 'Effectuez des passages lents et rapides. Si les DPI changent fortement, l\'accélération du pointeur ou le lissage du capteur peuvent influencer le résultat.',
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

export const content: ToolLocaleContent<MouseDpiAnalyzerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Testeur de DPI de souris en ligne: mesurez la sensibilité réelle du capteur', level: 2 },
    {
      type: 'paragraph',
      html: 'Une souris peut annoncer 800, 1600, 3200 ou 26000 DPI, mais la valeur qui compte dans les jeux et le travail de précision est le mouvement qui parvient réellement à l\'ordinateur. Ce testeur de DPI de souris en ligne mesure cette valeur pratique en comparant un mouvement physique connu avec le mouvement du pointeur capturé dans le navigateur. Le résultat est exprimé en pixels par pouce, la même unité couramment utilisée quand on parle de DPI ou CPI de souris.',
    },
    {
      type: 'paragraph',
      html: 'Le test est volontairement local et simple: maintenez la cible de capture, déplacez la souris exactement vers la droite de la distance physique sélectionnée et relâchez. L\'outil accumule les deltas de mouvement natifs au lieu d\'utiliser un script de taux de sondage ou un test de souris générique. Comme le calcul s\'exécute dans votre navigateur, aucun téléchargement de pilote, compte ou téléversement cloud n\'est impliqué.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Condition importante pour le test',
      html: 'Pour une mesure propre des DPI, désactivez l\'accélération du pointeur du système d\'exploitation et les courbes d\'accélération du fabricant. Si l\'accélération reste activée, le résultat décrit le comportement actuel de votre pointeur plutôt que le réglage brut du capteur.',
    },
    { type: 'title', text: 'Comment fonctionne le calcul réel des DPI', level: 3 },
    {
      type: 'paragraph',
      html: 'DPI signifie points par pouce. Dans le contexte des souris, on utilise souvent DPI et CPI de manière interchangeable pour décrire combien de comptes ou de pixels de pointeur sont produits lorsque la souris parcourt un pouce physique. Cet analyseur enregistre le mouvement horizontal pendant un passage contrôlé, convertit la distance sélectionnée en pouces, puis divise les pixels capturés par les pouces. Par exemple, si la souris rapporte 3200 pixels corrigés sur 2 pouces, la valeur mesurée est d\'environ 1600 DPI.',
    },
    {
      type: 'list',
      items: [
        'Choisissez une référence courte comme 10 mm pour les DPI très élevés ou une référence plus longue pour les DPI bas.',
        'Maintenez le contrôle de capture central pour que le navigateur n\'enregistre le mouvement que pendant le passage.',
        'Déplacez-vous physiquement vers la droite, en gardant la trajectoire aussi droite que possible.',
        'Relâchez à la marque physique réelle et lisez les DPI calculés.',
        'Répétez plusieurs fois et faites la moyenne des passages cohérents au lieu de vous fier à un seul passage.',
      ],
    },
    {
      type: 'table',
      headers: ['Mouvement capturé', 'Distance physique', 'DPI mesurés'],
      rows: [
        ['800 px', '1.00 in', '800 DPI'],
        ['1350 px', '85.6 mm largeur de carte de crédit', '401 DPI'],
        ['3150 px', '50.0 mm', '1600 DPI'],
        ['6300 px', '100.0 mm', '1600 DPI'],
      ],
    },
    {
      type: 'tip',
      title: 'Faites un trait net',
      html: 'Un seul trait horizontal est plus important qu\'une longue distance. Pour les DPI très élevés, utilisez le préréglage 5 mm ou 10 mm: il garde le mouvement suffisamment petit pour rester dans l\'écran tout en donnant au calculateur une référence physique connue. La barre de progression est seulement un indicateur de signal d\'entrée ; la règle ou la carte sur le bureau est le point d\'arrêt.',
    },
    { type: 'title', text: 'Pourquoi les DPI mesurés peuvent différer des DPI annoncés', level: 3 },
    {
      type: 'paragraph',
      html: 'Les DPI annoncés sont souvent un palier de firmware sélectionnable, pas une valeur certifiée en laboratoire pour chaque surface et chaque unité. Deux souris réglées sur les mêmes DPI nominaux peuvent sembler différentes si leurs capteurs, la mise à l\'échelle du firmware, la hauteur des patins, la texture de la surface, le comportement de décollage ou les paramètres du système d\'exploitation diffèrent. Une petite variation est normale ; une grande variation signifie généralement que la configuration du test ou le chemin logiciel influence la mesure.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'DPI nominaux',
          description: 'La valeur affichée dans le logiciel de la souris ou imprimée sur la page produit. Utile comme point de départ, mais ne prouve pas la sortie de mouvement réelle.',
          points: ['Facile à lire', 'Peut masquer la mise à l\'échelle du firmware', 'Varie selon le profil'],
        },
        {
          title: 'DPI mesurés',
          description: 'La valeur calculée à partir du déplacement physique et du mouvement du pointeur capturé. Idéal pour faire correspondre une souris à une autre.',
          highlight: true,
          points: ['Pratique et reproductible', 'Sensible à la précision manuelle', 'Montre le comportement réel de la configuration'],
        },
        {
          title: 'Sensibilité en jeu',
          description: 'La réponse finale de la caméra ou du curseur après que le jeu a multiplié l\'entrée de la souris par sa propre valeur de sensibilité.',
          points: ['Ce que vous ressentez vraiment', 'Spécifique au jeu', 'Pas une mesure du capteur'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Avantages et inconvénients de la mesure de DPI depuis le navigateur',
      items: [
        { pro: 'Aucune installation de pilote nécessaire', con: 'Le navigateur voit le mouvement du pointeur traité, pas le signal électrique du capteur' },
        { pro: 'Pratique pour comparer rapidement des souris et des profils', con: 'Les paramètres d\'accélération peuvent fausser le résultat s\'ils restent activés' },
        { pro: 'Fonctionne avec des références physiques courantes', con: 'L\'alignement de la main et les marques sur le bureau affectent la reproductibilité' },
      ],
    },
    { type: 'title', text: 'Préparer Windows, macOS et le logiciel de la souris', level: 3 },
    {
      type: 'paragraph',
      html: 'Avant d\'utiliser un mesureur de DPI, rendez le chemin d\'entrée aussi neutre que possible. Sous Windows, désactivez Améliorer la précision du pointeur si vous voulez un comportement brut. Dans le logiciel du fabricant, désactivez le redressement d\'angle, l\'accélération, le contrôle d\'ondulation, le lissage ou les assistances spécifiques à la surface, sauf si vous voulez délibérément les mesurer. Sous macOS, l\'accélération du pointeur fait partie du chemin normal du curseur, la valeur doit donc être traitée comme un résultat pratique du système plutôt que comme un résultat brut du capteur.',
    },
    {
      type: 'table',
      headers: ['Paramètre', 'Recommandé pour DPI bruts', 'Raison'],
      rows: [
        ['Accélération du pointeur', 'Désactivé', 'L\'accélération modifie la sortie du mouvement en fonction de la vitesse'],
        ['Palier DPI du logiciel souris', 'Un seul palier fixe', 'Évite les changements accidentels de profil pendant le test'],
        ['Redressement d\'angle', 'Désactivé', 'Peut modifier le mouvement diagonal et masquer la sortie naturelle du capteur'],
        ['Mise à l\'échelle du système d\'exploitation', 'Laisser normal, l\'outil corrige avec devicePixelRatio', 'L\'analyseur neutralise le zoom du navigateur et le ratio de pixels de l\'écran dans son calcul'],
        ['Superpositions de jeu ou macros', 'Désactivées', 'Les logiciels supplémentaires peuvent intercepter l\'entrée et rendre les passages incohérents'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:target',
      title: 'Faire correspondre deux souris',
      html: 'Mesurez l\'ancienne souris trois fois, notez la moyenne, puis ajustez le palier DPI de la nouvelle souris jusqu\'à ce que sa valeur mesurée soit proche. C\'est souvent plus utile que de copier le numéro d\'une application de fabricant à une autre, car la sortie réelle du capteur peut différer.',
    },
    { type: 'title', text: 'Choisir la bonne référence physique', level: 3 },
    {
      type: 'paragraph',
      html: 'L\'interface inclut des références courtes pour les DPI élevés et des références plus longues pour les DPI bas. Utilisez 5 ou 10 mm lorsque votre pointeur traverse l\'écran avec un minuscule mouvement de main. Utilisez 1 pouce, 50 mm ou la largeur de carte de 85.6 mm lorsque la souris est configurée plus près des valeurs habituelles de bureau ou de jeu tactique.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '25.4', label: 'millimètres dans un pouce' },
        { value: '85.6', label: 'millimètres dans la largeur d\'une carte de crédit courante' },
        { value: '3+', label: 'passages répétés recommandés avant de faire confiance à un profil' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'DPI', definition: 'Points par pouce, couramment utilisé pour décrire le mouvement du pointeur produit par un pouce de déplacement de la souris.' },
        { term: 'CPI', definition: 'Comptes par pouce, un terme orienté capteur qui est souvent plus précis techniquement pour les souris.' },
        { term: 'Accélération', definition: 'Un paramètre ou une courbe qui modifie la sortie du pointeur en fonction de la vitesse de déplacement.' },
        { term: 'devicePixelRatio', definition: 'Le ratio du navigateur entre les pixels CSS et les pixels physiques de l\'écran, utilisé ici pour normaliser les effets de zoom et de mise à l\'échelle de l\'affichage.' },
        { term: 'Redressement d\'angle', definition: 'Correction par firmware ou logiciel qui redresse le mouvement, parfois utile pour le dessin mais rejetée par de nombreux joueurs compétitifs.' },
      ],
    },
    { type: 'title', text: 'Lire l\'indicateur d\'accélération', level: 3 },
    {
      type: 'paragraph',
      html: 'L\'indicateur d\'accélération n\'est pas une preuve de laboratoire de la courbe du système d\'exploitation. C\'est un avertissement pratique basé sur la variation de la vitesse de mouvement pendant le passage capturé. Si des passages lents et rapides produisent des valeurs de DPI très différentes, de l\'accélération, du lissage, un comportement de surface ou un mouvement manuel incohérent peuvent être en cause. Une bonne configuration brute devrait produire des DPI mesurés similaires sur plusieurs passages lorsque la distance physique est la même.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Quand le résultat varie fortement',
      html: 'Si un passage indique 780 DPI et le suivant 950 DPI avec la même distance, n\'accusez pas immédiatement la souris. Vérifiez les paramètres d\'accélération, augmentez la distance de test, gardez la trajectoire de la souris horizontale et assurez-vous que le pointeur ne touche pas le bord de l\'écran pendant le passage.',
    },
    {
      type: 'summary',
      title: 'Liste de vérification pour un test de DPI fiable',
      items: [
        'Utilisez une référence physique mesurée, de préférence 100 mm ou plus.',
        'Déplacez-vous horizontalement vers la droite et arrêtez-vous exactement à la marque.',
        'Désactivez l\'accélération pour les comparaisons de profil brut.',
        'Effectuez au moins trois passages et comparez la dispersion.',
        'Utilisez les DPI mesurés pour faire correspondre les souris, pas seulement les étiquettes de DPI annoncés.',
      ],
    },
    {
      type: 'message',
      title: 'Note de confidentialité',
      html: 'Ce test d\'accélération de souris et ce calcul de DPI s\'exécutent localement dans le navigateur. L\'outil n\'a besoin ni d\'accès au pilote, ni de numéros de série de l\'appareil, ni de journaux d\'entrée téléversés.',
    },
  ],
  ui: {
    badge: 'Laboratoire de DPI réels',
    referenceLabel: 'Référence',
    referenceValue: '5 mm',
    ultraDpiPreset: '5 mm',
    highDpiPreset: '10 mm',
    balancedPreset: '50 mm',
    inchPreset: '1 in',
    cardPreset: 'Carte',
    lineStart: 'Départ',
    holdButton: 'Maintenez et déplacez de la distance sélectionnée',
    holdHint: 'Utilisez une vraie règle/carte sur le bureau. Ne vous arrêtez pas parce que la barre se remplit.',
    progressLabel: 'Signal d\'entrée',
    activeHint: 'Suivi du mouvement',
    dpiLabel: 'DPI mesurés',
    pixelsLabel: 'Mouvement corrigé',
    distanceReadout: 'Distance physique',
    ratioLabel: 'Ratio de pixels',
    initialDpiValue: '0',
    initialPixelsValue: '0 px',
    initialRatioValue: '0 px/in',
    initialSamplesValue: '0',
    initialAccelerationValue: '-',
    pixelUnit: 'px',
    pixelsPerInchUnit: 'px/in',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    statusReady: 'Prêt à capturer',
    statusTracking: 'Suivi du mouvement...',
    statusDone: 'Mesure terminée',
    reset: 'Réinitialiser',
    accelerationTitle: 'Signal d\'accélération',
    accelerationHint: 'Répétez à vitesses lente et rapide pour comparer la cohérence.',
    accelerationLow: 'stable',
    accelerationMedium: 'variable',
    accelerationHigh: 'dérive élevée',
    sampleCount: 'Échantillons',
  },
};
