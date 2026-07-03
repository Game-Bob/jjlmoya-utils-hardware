import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MonitorGhostingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-ghosting-moniteur';
const title = 'Test de Ghosting du Moniteur';
const description =
  'Testez le ghosting du moniteur, le flou de mouvement, les traînées d\'overdrive et le comportement de réponse des pixels avec des barres mobiles, du texte et des motifs de mouvement en plein écran.';

const faqData = [
  {
    question: 'Qu\'est-ce que le ghosting du moniteur?',
    answer:
      'Le ghosting du moniteur est une traînée visible qui suit les objets en mouvement lorsque les pixels ne peuvent pas changer assez rapidement. Il est courant sur les dalles LCD lentes, les modes overdrive mal réglés et les écrans fonctionnant en dessous de leur taux de rafraîchissement optimal.',
  },
  {
    question: 'Ce test peut-il mesurer le temps de réponse exact?',
    answer:
      'Un test navigateur ne peut pas remplacer un équipement de laboratoire comme une caméra de poursuite ou une photodiode, mais il peut révéler des artefacts de mouvement visibles, comparer les réglages du moniteur et vous aider à choisir le mode overdrive le moins flou.',
  },
  {
    question: 'Pourquoi l\'overdrive crée-t-il parfois des traînées claires?',
    answer:
      'L\'overdrive pousse les pixels plus fort pour accélérer les transitions. S\'il dépasse la teinte cible, vous pouvez voir du ghosting inverse: un halo clair ou coloré derrière les objets en mouvement.',
  },
  {
    question: 'Dois-je tester sur fond sombre ou clair?',
    answer:
      'Les deux. Certaines dalles maculent davantage les transitions sombre-à-gris que les transitions clair-à-sombre, donc changer le fond révèle des artefacts qu\'un seul motif peut cacher.',
  },
];

const howToData = [
  {
    name: 'Régler la vitesse de mouvement',
    text: 'Commencez près de la vitesse par défaut, puis augmentez-la jusqu\'à ce que les traînées soient faciles à inspecter sans perdre de vue l\'objet.',
  },
  {
    name: 'Changer l\'intensité de la traînée',
    text: 'Utilisez le contrôle de traînée pour rendre la persistance plus facile à voir lors de la comparaison des réglages du moniteur.',
  },
  {
    name: 'Tester plusieurs fonds',
    text: 'Alternez entre les fonds sombre, clair et quadrillage pour révéler le maculage noir, le ghosting inverse et les halos d\'overdrive.',
  },
  {
    name: 'Comparer les réglages d\'overdrive',
    text: 'Ouvrez l\'OSD de votre moniteur et testez les modes Off, Normal, Rapide et Extrême. Choisissez le mode avec le mouvement le plus net et le moins de halo.',
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

export const content: ToolLocaleContent<MonitorGhostingTestUI> = {
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
      text: 'Test de Ghosting du Moniteur: Vérifiez le Flou de Mouvement et la Réponse des Pixels',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le ghosting du moniteur apparaît lorsque les objets en mouvement laissent une traînée visible derrière eux. Cela peut rendre les jeux flous, le texte déroulant plus difficile à lire et un moniteur à haut taux de rafraîchissement moins bon que prévu. Ce test de ghosting vous offre des barres mobiles, du texte et des motifs à fort contraste pour comparer les modes overdrive, les taux de rafraîchissement, les fonds et les vitesses sans installer de logiciel.',
    },
    {
      type: 'paragraph',
      html: 'Le test est conçu pour une inspection pratique. Il ne prétend pas fournir des temps de réponse gris-à-gris de qualité laboratoire, mais il aide à répondre à la question que la plupart des utilisateurs se posent vraiment: <strong>quel réglage du moniteur est le plus net sur cet écran?</strong>',
    },
    {
      type: 'title',
      text: 'À Quoi Ressemble le Ghosting',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Une ombre sombre suivant l\'objet en mouvement, souvent appelée maculage noir',
        'Un halo pâle ou coloré derrière l\'objet, souvent causé par un overdrive excessif',
        'Une longue traînée translucide qui rend les contours flous',
        'Plusieurs copies ténues de l\'objet, surtout sur les écrans à réponse de pixels lente',
        'Une netteté inégale entre les fonds sombre, clair et quadrillage',
      ],
    },
    {
      type: 'title',
      text: 'Ghosting, Flou de Mouvement et Ghosting Inverse',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Artefact', 'Ce que vous voyez', 'Cause fréquente'],
      rows: [
        ['Ghosting', 'Une copie plus sombre ou estompée suit l\'objet', 'La réponse des pixels est trop lente pour la vitesse du mouvement'],
        ['Flou de mouvement', 'L\'objet en mouvement tout entier semble flou', 'Flou sample-and-hold, faible taux de rafraîchissement ou flou de suivi oculaire'],
        ['Ghosting inverse', 'Halo clair ou traînées de dépassement colorées', 'Le réglage d\'overdrive est trop agressif'],
        ['Maculage noir', 'Les scènes sombres laissent des ombres lourdes', 'Les transitions sombres des dalles VA sont lentes'],
        ['Saccade', 'Le mouvement saute au lieu de s\'écouler', 'Frame pacing, FPS bas ou charge du navigateur/système'],
      ],
    },
    {
      type: 'title',
      text: 'Un Flux de Travail de Diagnostic Pratique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Commencez avec votre moniteur réglé sur sa résolution native et le taux de rafraîchissement stable le plus élevé. Si vous possédez un moniteur 144Hz, 165Hz, 240Hz ou 360Hz, confirmez que le système d\'exploitation utilise effectivement ce mode avant de juger la netteté du mouvement. Ouvrez le test en plein écran, choisissez la cible barres de netteté et observez le bord arrière de l\'objet en mouvement. Le bord arrière est l\'endroit où les traînées fantômes, le maculage sombre et les halos clairs d\'overdrive sont les plus faciles à comparer.',
    },
    {
      type: 'list',
      items: [
        'Utilisez un fond sombre pour révéler le maculage noir et les transitions sombres lentes',
        'Utilisez un fond clair pour révéler les halos d\'overdrive colorés',
        'Utilisez un fond quadrillage pour inspecter la netteté des contours par rapport aux lignes de référence à fort contraste',
        'Utilisez la cible texte lorsque votre vrai problème est un défilement flou ou un texte illisible en mouvement',
        'Utilisez le plein écran avant de juger un moniteur, car le chrome du navigateur et la mise à l\'échelle peuvent distraire des artefacts de mouvement',
        'Augmentez la vitesse seulement après pouvoir suivre l\'objet confortablement',
        'Comparez un réglage du moniteur à la fois pour savoir ce qui a changé',
      ],
    },
    {
      type: 'title',
      text: 'Choisir le Meilleur Réglage d\'Overdrive pour Votre Moniteur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La plupart des moniteurs gaming incluent un réglage overdrive appelé Off, Normal, Rapide, Plus Rapide, Extrême, Temps de Réponse ou Trace Free. L\'option la plus rapide n\'est pas toujours la meilleure. Un réglage modéré offre souvent le meilleur équilibre: moins de flou que Off, mais moins de halos que Extrême.',
    },
    {
      type: 'table',
      headers: ['Mode Overdrive', 'Résultat Attendu', 'Recommandation'],
      rows: [
        ['Off', 'Moins de dépassement, mais plus de flou', 'Référence utile pour comparaison'],
        ['Normal', 'Réduction modérée du flou', 'Souvent le meilleur pour un usage quotidien'],
        ['Rapide', 'Mouvement plus net avec un certain risque de halo', 'Bon si les traînées restent propres'],
        ['Extrême', 'Temps de réponse revendiqué le plus bas, risque de dépassement le plus élevé', 'À éviter si des traînées inverses claires apparaissent'],
        ['Adaptatif/Variable', 'Le comportement change avec le taux de rafraîchissement', 'Retestez à la plage de FPS que vous utilisez réellement'],
      ],
    },
    {
      type: 'title',
      text: 'Ce qu\'il Faut Changer Quand le Test est Mauvais',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Ce que vous voyez', 'Cause probable', 'À essayer'],
      rows: [
        ['Longue traînée sombre derrière la cible', 'Transitions de pixels sombres lentes ou overdrive faible', 'Essayez un mode overdrive plus fort, retestez sur fond sombre et quadrillage'],
        ['Halo clair ou contour coloré derrière la cible', 'Dépassement d\'overdrive ou ghosting inverse', 'Réduisez l\'overdrive d\'un cran et comparez à votre taux de rafraîchissement réel'],
        ['Le mouvement semble saccadé au lieu d\'être flou', 'Frame pacing, charge du navigateur ou décalage du taux de rafraîchissement', 'Fermez les applications lourdes, activez le plein écran, confirmez le taux de rafraîchissement de l\'OS'],
        ['Le texte devient illisible en mouvement', 'Flou sample-and-hold, faible taux de rafraîchissement ou réponse lente', 'Augmentez le taux de rafraîchissement, testez le motif texte, comparez les modes overdrive'],
        ['Les artefacts changent lorsque les FPS changent', 'Comportement VRR ou overdrive adaptatif', 'Retestez à la plage de FPS dans laquelle vous jouez ou travaillez réellement'],
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi le Taux de Rafraîchissement est Important',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Des taux de rafraîchissement plus élevés réduisent le temps pendant lequel chaque image reste visible, ce qui peut rendre le mouvement plus net. Cependant, le taux de rafraîchissement seul n\'élimine pas le ghosting. Un moniteur 240Hz avec des transitions de pixels lentes peut encore maculer, tandis qu\'une dalle 144Hz bien réglée peut sembler plus propre qu\'une dalle plus rapide mal réglée.',
    },
    {
      type: 'table',
      headers: ['Taux de Rafraîchissement', 'Durée d\'image', 'À quoi s\'attendre'],
      rows: [
        ['60Hz', '16,7 ms', 'Facile de voir le flou sample-and-hold et le mouvement plus lent'],
        ['120Hz', '8,3 ms', 'Beaucoup plus fluide, mais la réponse des pixels reste importante'],
        ['144Hz', '6,9 ms', 'Référence gaming courante pour la netteté du mouvement'],
        ['240Hz', '4,2 ms', 'Très fluide si le réglage de la réponse est bon'],
        ['360Hz', '2,8 ms', 'Exigeant: un mauvais réglage d\'overdrive devient évident'],
      ],
    },
    {
      type: 'title',
      text: 'VRR, Gaming et Tests en Conditions Réelles',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le taux de rafraîchissement variable peut modifier le comportement d\'un moniteur car certains écrans utilisent un réglage overdrive différent à différents taux de rafraîchissement. Si votre problème n\'apparaît que dans les jeux, ne testez pas seulement au taux de rafraîchissement maximum du bureau. Retestez dans la plage de FPS où vous jouez réellement, surtout autour de 60 FPS, 90 FPS, 120 FPS et toute limite de FPS que vous utilisez.',
    },
    {
      type: 'list',
      items: [
        'Si le ghosting est pire à bas FPS, le moniteur peut avoir un faible réglage overdrive variable',
        'Si les halos n\'apparaissent qu\'à des taux de rafraîchissement élevés, le mode overdrive est peut-être trop agressif',
        'Si le mouvement saccade alors que la traînée reste courte, le problème est probablement le frame pacing plutôt que la réponse des pixels',
        'Si le plein écran est différent du mode fenêtre, vérifiez la mise à l\'échelle du navigateur, la mise à l\'échelle du système d\'exploitation et le comportement du compositeur',
      ],
    },
    {
      type: 'title',
      text: 'Dépannage des Mauvais Résultats',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Confirmez que votre câble d\'affichage prend en charge le taux de rafraîchissement cible',
        'Désactivez le lissage de mouvement, le Black Frame Insertion ou les modes MPRT pendant la comparaison de l\'overdrive normal',
        'Retestez après avoir passé le moniteur à sa résolution native',
        'Utilisez le plein écran ou réduisez le zoom du navigateur si le mouvement semble irrégulier',
        'Fermez les applications lourdes en arrière-plan si l\'animation saccade',
        'Testez le même motif après avoir modifié les paramètres de taux de rafraîchissement dans le panneau de contrôle du GPU',
        'Essayez un autre câble ou port si le moniteur ne peut pas atteindre son taux de rafraîchissement annoncé',
        'Retestez avec VRR activé et désactivé lorsque le ghosting change entre le bureau et les jeux',
      ],
    },
    {
      type: 'title',
      text: 'Limites d\'un Test de Ghosting en Ligne',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un test de ghosting basé sur navigateur dépend du timing d\'animation du navigateur, de la charge du GPU, de la composition du système d\'exploitation et de votre configuration d\'affichage. Il est excellent pour la comparaison visuelle, mais les mesures précises du temps de réponse nécessitent un équipement spécialisé comme des caméras de poursuite, des photodiodes ou des méthodes basées sur oscilloscope. Utilisez ce test pour choisir les réglages et repérer les artefacts évidents, pas pour certifier les affirmations de temps de réponse du fabricant.',
    },
  ],
  ui: {
    badge: 'Netteté du Mouvement',
    speedLabel: 'Vitesse de mouvement',
    pixelsPerSecondUnit: 'px/s',
    pixelUnit: 'px',
    millisecondUnit: 'ms',
    trailLabel: 'Intensité de la traînée',
    backgroundLabel: 'Fond',
    backgroundDark: 'Sombre',
    backgroundLight: 'Clair',
    backgroundGrid: 'Quadrillage',
    patternLabel: 'Cible de test',
    patternBars: 'Barres de netteté',
    patternText: 'Bloc de texte',
    patternUfo: 'OVNI',
    pursuitLabel: 'Guide de poursuite',
    pursuitOn: 'Activé',
    pursuitOff: 'Désactivé',
    fullscreen: 'Plein écran',
    exitFullscreen: 'Quitter le plein écran',
    pause: 'Pause',
    resume: 'Reprendre',
    targetText: 'MOUVEMENT',
    estimatedBlur: 'flou estimé',
    frameStep: 'Pas d\'image',
    persistence: 'Persistance',
    sampleCount: 'Échantillons de traînée',
    instructions: 'Observez le bord arrière de la cible en mouvement tout en changeant la vitesse, l\'intensité de la traînée, le fond, le mode plein écran et les réglages overdrive du moniteur.',
    reset: 'Réinitialiser',
  },
};
