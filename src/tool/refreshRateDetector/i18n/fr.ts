import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RefreshRateDetectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'detecteur-taux-rafraichissement-moniteur';
const title = 'Détecteur de Taux de Rafraîchissement du Moniteur';
const description = 'Détectez instantanément le taux de rafraîchissement de votre moniteur avec précision grâce à requestAnimationFrame. Testez la stabilité des images et comparez-la aux normes de l\'industrie.';

const faqData = [
  {
    question: 'Qu\'est-ce que le taux de rafraîchissement (Hz) ?',
    answer: 'Le taux de rafraîchissement correspond au nombre de fois par seconde où votre moniteur actualise l\'image. Un moniteur 60Hz se rafraîchit 60 fois par seconde, tandis qu\'un 144Hz se rafraîchit 144 fois. Des taux plus élevés permettent un mouvement plus fluide.',
  },
  {
    question: 'Quelle est la précision de ce détecteur ?',
    answer: 'Cet outil utilise requestAnimationFrame, qui se synchronise avec le cycle de rafraîchissement de votre moniteur. La précision dépend de la charge du système. Le mode stable mesure sur des périodes plus longues pour une plus grande précision.',
  },
  {
    question: 'Quelle est la différence entre le mode Stable et Rapide ?',
    answer: 'Le mode Rapide mesure pendant une courte durée (~3 secondes) pour un retour rapide. Le mode Stable prend plus de temps (~10 secondes) pour filtrer le bruit du système et fournir des résultats plus fiables.',
  },
  {
    question: 'Pourquoi mon Hz détecté est-il différent de ce qu\'indique mon moniteur ?',
    answer: 'Cela peut arriver si : votre connexion par câble est lâche, vos pilotes sont obsolètes ou la mise à l\'échelle de votre système d\'exploitation interfère. Essayez de débrancher et de rebrancher votre câble d\'affichage, ou de mettre à jour les pilotes de votre GPU.',
  },
  {
    question: 'Quels taux de rafraîchissement les moniteurs modernes prennent-ils en charge ?',
    answer: 'Les normes courantes sont 60Hz (basique), 75Hz, 120Hz, 144Hz (gaming), 240Hz (gaming compétitif) et 360Hz (eSports professionnels).',
  },
];

const howToData = [
  {
    name: 'Charger l\'outil',
    text: 'Ouvrez simplement cette page. Le détecteur commence la mesure immédiatement.',
  },
  {
    name: 'Attendre la stabilisation',
    text: 'Choisissez le mode Stable ou Rapide. Laissez la mesure se terminer sans déplacer la fenêtre.',
  },
  {
    name: 'Vérifier le tachymètre',
    text: 'Le taux de rafraîchissement de votre moniteur apparaît sous la forme d\'un cadran fluide, avec des statistiques de référence (min/max/moy).',
  },
  {
    name: 'Comparer avec les normes',
    text: 'L\'outil affiche la norme correspondant à votre moniteur (60, 75, 120, 144, 240, 360Hz).',
  },
  {
    name: 'Optionnel : test de saut d\'images',
    text: 'Observez le carré animé traverser l\'écran pour confirmer visuellement la fluidité.',
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

export const content: ToolLocaleContent<RefreshRateDetectorUI> = {
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
      text: 'Détecteur de Taux de Rafraîchissement du Moniteur : Testez les Hz de votre Écran en Ligne',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Détectez instantanément le taux de rafraîchissement de votre moniteur (60Hz, 144Hz, 240Hz, etc.) avec précision. Testez la stabilité des images et vérifiez que votre écran fonctionne selon ses spécifications nominales.',
    },
    {
      type: 'title',
      text: 'Pourquoi le Taux de Rafraîchissement du Moniteur est-il Important ?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le taux de rafraîchissement détermine la fluidité du mouvement sur votre écran. Les joueurs bénéficient de moniteurs de 144Hz+, tandis que les utilisateurs généraux trouvent les 60Hz adéquats. Cet outil aide à confirmer que votre moniteur offre réellement son taux de rafraîchissement annoncé.',
    },
    {
      type: 'title',
      text: 'Comment Détecter votre Taux de Rafraîchissement',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Chargez ce détecteur -la mesure commence immédiatement',
        'Choisissez entre le mode de mesure Rapide (3s) ou Stable (10s)',
        'Lisez les Hz de votre moniteur sur le cadran du tachymètre',
        'Comparez aux normes de l\'industrie (60, 75, 120, 144, 240, 360Hz)',
      ],
    },
    {
      type: 'title',
      text: 'Normes de Taux de Rafraîchissement Courantes',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Norme', 'Cas d\'Utilisation', 'Utilisateur Typique'],
      rows: [
        ['60Hz', 'Informatique Générale', 'Bureautique, Navigation Web'],
        ['75Hz', 'Gaming Léger', 'Joueurs Occasionnels'],
        ['120Hz', 'Multimédia', 'Consoles, Streaming'],
        ['144Hz', 'Gaming Compétitif', 'FPS, Jeux à Rythme Rapide'],
        ['240Hz+', 'eSports Professionnels', 'Joueurs Pro, Streamers'],
      ],
    },
    {
      type: 'title',
      text: 'Dépannage : L\'Écran Affiche moins de Hz que Prévu',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Vérifiez les connexions du câble HDMI/DisplayPort -des câbles lâches réduisent la bande passante',
        'Mettez à jour vos pilotes GPU (NVIDIA, AMD, Intel)',
        'Vérifiez les paramètres d\'affichage de l\'OS pour vous assurer que le taux de rafraîchissement élevé est activé',
        'Essayez différents câbles ou ports sur votre moniteur',
        'Redémarrez votre ordinateur et testez de nouveau',
      ],
    },
    {
      type: 'title',
      text: 'La Technologie derrière ce Détecteur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cet outil utilise l\'API requestAnimationFrame du navigateur, qui se synchronise directement avec le cycle de rafraîchissement de votre moniteur. En mesurant le temps entre les images d\'animation, nous calculons votre taux de rafraîchissement exact avec une grande précision -aucun matériel spécial n\'est requis.',
    },
  ],
  ui: {
    badge: 'Test d\'Écran',
    title: 'Détecteur de Taux de Rafraîchissement',
    description: 'Détectez le taux de rafraîchissement de votre écran instantanément',
    modeStable: 'Stable (10s, précis)',
    modeFast: 'Rapide (3s, rapide)',
    measurementStatus: 'Mesure en cours...',
    currentHz: 'Actuel',
    averageHz: 'Moyenne',
    maxHz: 'Maximum',
    minHz: 'Minimum',
    standardDetected: 'Norme Détectée',
    frameSkippingTest: 'Test de Saut d\'Images',
    startMeasurement: 'Démarrer la Mesure',
    resetMeasurement: 'Réinitialiser',
    copyResult: 'Copier le Résultat',
    copiedFeedback: 'Copié dans le presse-papiers !',
    optimalConfiguration: '[OK] Configuration Optimale',
    suboptimalConfiguration: '[AVERTISSEMENT] Sous l\'Optimale',
    unstableRefreshRate: '[AVERTISSEMENT] Taux de Rafraîchissement Instable',
    measurementNotStarted: 'Prêt à mesurer',
    switchMonitorHint: 'Faites glisser la fenêtre vers un autre moniteur pour le tester',
    incompatibleBrowserMsg: 'Votre navigateur ne prend pas en charge requestAnimationFrame',
  },
};
