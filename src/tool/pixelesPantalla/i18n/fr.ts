import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PixelesPantallaUI } from '../ui';

const slug = 'testeur-pixels-morts';
const title = 'Test de Pixels Morts et Outil de Réparation d\'Écran';
const description =
  'Vérifiez si votre moniteur a des pixels morts ou figés et réparez-les avec notre outil stroboscopique haute fréquence en ligne.';

const faqData = [
  {
    question: 'Quelle est la différence entre un pixel mort et un pixel figé?',
    answer:
      'Un pixel mort est noir en permanence car il ne reçoit aucune alimentation (transistor grillé). Un pixel figé est généralement d\'une couleur vive (rouge, vert ou bleu) et peut être relancé par stimulation stroboscopique rapide.',
  },
  {
    question: 'Comment fonctionne l\'outil de réparation (Strobe)?',
    answer:
      'Notre outil génère un clignotement rapide des couleurs primaires à haute vitesse. Cela peut forcer le pixel en cristal liquide coincé à se déverrouiller. Il est recommandé de le laisser fonctionner 10 à 30 minutes.',
  },
  {
    question: 'Les pixels morts peuvent-ils apparaître en raison de la température?',
    answer:
      'Oui, les températures extrêmes peuvent affecter le panneau. Cependant, les causes les plus courantes sont les défauts de fabrication ou les impacts physiques qui endommagent les contacts électriques du cristal liquide.',
  },
  {
    question: 'Combien de pixels morts sont couverts par la garantie?',
    answer:
      'Cela dépend du fabricant et de la norme ISO 9241-307. Généralement, les marques considèrent jusqu\'à 2 ou 3 pixels brillants comme "normaux" sur les panneaux de classe 1, tandis que les panneaux de classe 0 n\'en permettent aucun.',
  },
];

const howToData = [
  {
    name: 'Nettoyer l\'écran',
    text: 'Avant de commencer, nettoyez bien votre moniteur avec un chiffon en microfibre pour éviter de confondre la poussière avec un pixel mort.',
  },
  {
    name: 'Passer en mode plein écran',
    text: 'Appuyez sur F11 ou le bouton plein écran pour que l\'interface du navigateur n\'interfère pas avec la détection des défauts.',
  },
  {
    name: 'Alterner les couleurs',
    text: 'Passez entre les arrière-plans noir, blanc, rouge, vert et bleu. Recherchez tout point qui ne correspond pas à la couleur de l\'arrière-plan.',
  },
  {
    name: 'Démarrer le cycle de réparation',
    text: 'Si vous trouvez un point brillant, positionnez l\'outil Strobe dessus et laissez-le fonctionner pendant au moins 20 minutes.',
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

export const content: ToolLocaleContent<PixelesPantallaUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Références et Normes',
  bibliography: [
    {
      name: 'ISO/IEC 9241-307: Ergonomie des écrans et équipements associés',
      url: 'https://www.iso.org/standard/72025.html',
    },
    {
      name: 'Politique de Pixels Morts - Normes Communes (VESA)',
      url: 'https://www.vesa.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guide Complet: Pixels Morts, Pixels Figés et Comment les Réparer',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Avez-vous remarqué une tache étrange sur votre écran qui ne change pas de couleur? Cela pourrait être un défaut du panneau. Cet outil vous aide à diagnostiquer si votre moniteur a des <strong>pixels morts</strong> ou des <strong>pixels figés</strong> et offre une solution pour tenter de les réparer.',
    },
    {
      type: 'title',
      text: 'Quelle est la différence entre un Pixel Mort et un Pixel Figé?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il existe deux principaux types de défauts de pixels sur les moniteurs modernes, chacun avec des caractéristiques et des solutions distinctes.',
    },
    {
      type: 'title',
      text: 'Pixel Figé',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'C\'est le défaut le plus courant. Il se produit lorsqu\'un ou plusieurs sous-pixels (Rouge, Vert ou Bleu) se coincent à l\'état "allumé". <strong>Symptôme:</strong> Vous verrez un point de couleur vive permanent (rouge, vert, bleu ou blanc) sur un fond sombre. <strong>Souvent réparable.</strong> Le cristal liquide répond toujours; il est simplement "bloqué" dans une polarisation spécifique. Notre outil de réparation Strobe tente de le déverrouiller avec une stimulation rapide de tension.',
    },
    {
      type: 'title',
      text: 'Pixel Mort',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Se produit lorsque le transistor contrôlant le pixel défaille complètement et ne laisse pas passer la lumière. <strong>Symptôme:</strong> Un point noir permanent, particulièrement visible sur des fonds clairs ou blancs. <strong>Difficile à réparer (généralement permanent).</strong> Les dégâts sont au niveau matériel (circuit grillé). Aucune stimulation électrique ne peut le corriger. Nécessite généralement le remplacement du panneau complet.',
    },
    {
      type: 'title',
      text: 'Comment fonctionne l\'outil de réparation Strobe?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La fonction "Réparer Pixel" utilise une technique connue sous le nom d\'<strong>Exercice des Pixels</strong>. Elle génère un motif de bruit aléatoire à haute fréquence (clignotement rapide des couleurs) sur la zone affectée.',
    },
    {
      type: 'title',
      text: 'Le Mécanisme: Cristal Liquide et Tension',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Les moniteurs LCD utilisent des cristaux liquides qui changent leur transparence selon la tension appliquée. Quand un sous-pixel se coince, cela signifie que le cristal est "gelé" dans une polarisation spécifique. Les changements de tension rapides (obtenus par des changements rapides de couleurs primaires) tentent d\'"exercer" le cristal et de le forcer à changer d\'état.',
    },
    {
      type: 'title',
      text: 'Recommandations d\'Utilisation',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '<ul><li>Il est recommandé de laisser fonctionner l\'outil sur la zone affectée pendant au moins <strong>10 à 20 minutes</strong>.</li><li>Si cela ne fonctionne pas, essayez des sessions plus longues (jusqu\'à 1 heure) ou appliquez une très légère pression avec un chiffon en microfibre sur le pixel (à vos risques et périls).</li><li>Dans certains cas, réchauffer légèrement le moniteur avec un sèche-cheveux (à basse température) avant d\'activer Strobe améliore les résultats.</li></ul>',
    },
    {
      type: 'title',
      text: 'Avertissement Épilepsie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le mode de réparation utilise des lumières clignotantes rapides à haute vitesse. Si vous avez une épilepsie photosensible ou une sensibilité à la lumière, <strong>N\'UTILISEZ PAS cette fonction</strong>. L\'exposition aux motifs clignotants peut déclencher des convulsions chez les personnes susceptibles.',
    },
    {
      type: 'title',
      text: 'Quand Chercher une Garantie ou un Remplacement',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si vous confirmez des pixels défectueux (particulièrement plusieurs pixels morts), vous pouvez utiliser notre test comme preuve pour les réclamations de garantie. De nombreux fabricants considèrent que plus de 2-3 pixels brillants ou 1 pixel mort est un défaut de fabrication qui ouvre droit à un remplacement selon la norme ISO 9241-307 (Classe 1).',
    },
    {
      type: 'title',
      text: 'Historique des Normes de Pixels Morts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pendant des décennies, les moniteurs LCD ont souffert de défauts de pixels en raison de la complexité de la fabrication. Un panneau Full HD (1920×1080) contient 6 220 800 pixels (18 662 400 sous-pixels). La probabilité statistique de défauts est inévitable. C\'est pourquoi des normes comme ISO 9241-307 existent pour définir les "pixels morts acceptables" en fonction de la classe du moniteur.',
    },
  ],
  ui: {
    badge: 'Utilitaire d\'Écran',
    title: 'Pixels Morts ou Figés?',
    description:
      'Vérifiez l\'état de votre moniteur avec des couleurs solides pures et réparez les pixels figés avec notre outil de stimulation haute fréquence.',
    btnStartTest: 'Démarrer le Test',
    btnStartFix: 'Réparer le Pixel',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Plein Écran',
    kbdSpace: 'Espace',
    kbdSpaceLabel: 'Changer la Couleur',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Quitter',
    colorBlack: 'Noir',
    colorWhite: 'Blanc',
    colorRed: 'Rouge',
    colorGreen: 'Vert',
    colorBlue: 'Bleu',
    btnToggleFixer: 'Ouvrir l\'Outil de Réparation (Strobe)',
    btnExit: 'Quitter (ESC)',
  },
};
