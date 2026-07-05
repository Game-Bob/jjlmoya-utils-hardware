import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OledScreenBurnInFixerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'reparateur-brulure-ecran-oled';
const title = 'Réparateur de Brûlure d\'Écran OLED';
const description =
  'Exécutez un réparateur de brûlure OLED plein écran et un exerciseur de pixels bloqués LCD avec des cycles rapides de couleurs RVB, du bruit blanc, un avertissement obligatoire de photosensibilité et un minuteur natif.';

const faqData = [
  {
    question: 'Un réparateur de brûlure OLED peut il supprimer une brûlure permanente ?',
    answer:
      'Aucun outil de navigateur ne peut inverser l\'usure permanente des sous pixels OLED. Un exerciseur de pixels peut réduire la rétention temporaire d\'image, rendre un léger effet fantôme moins visible ou aider à diagnostiquer si une marque est une rétention temporaire ou une brûlure permanente.',
  },
  {
    question: 'Est ce sans danger pour les personnes souffrant d\'épilepsie photosensible ?',
    answer:
      'Le test utilise des couleurs clignotant rapidement et des parasites à fort contraste. Les personnes souffrant d\'épilepsie photosensible, de sensibilité aux migraines, de risque de convulsions ou d\'inconfort lié aux lumières clignotantes ne doivent pas l\'exécuter.',
  },
  {
    question: 'Cela peut il réparer un pixel LCD bloqué ?',
    answer:
      'Cela peut parfois aider un pixel bloqué qui reste rouge, vert, bleu ou blanc en changeant rapidement l\'état du sous pixel. Cela ne peut pas réparer un pixel noir mort ni des dommages physiques du panneau.',
  },
  {
    question: 'Combien de temps dois je exécuter l\'exerciseur de pixels ?',
    answer:
      'Commencez par 5 à 10 minutes pour un pixel bloqué ou une légère rétention d\'image. Les sessions plus longues doivent être surveillées, la luminosité maintenue raisonnable et l\'écran autorisé à refroidir.',
  },
  {
    question: 'Pourquoi l\'outil utilise t il canvas plutôt que la vidéo ?',
    answer:
      'Les motifs sont générés directement dans HTML5 Canvas, la page n\'a donc pas besoin de fichiers vidéo lourds. Cela maintient un chargement rapide et rend le cycle couleur et bruit réactif à la taille du plein écran.',
  },
];

const howToData = [
  {
    name: 'Lisez l\'avertissement de photosensibilité',
    text: 'Ne continuez pas si la lumière clignotante, les motifs à fort contraste, les migraines ou le risque de convulsions pourraient vous affecter ou affecter quelqu\'un à proximité.',
  },
  {
    name: 'Définissez une première exécution courte',
    text: 'Choisissez 5 à 10 minutes pour un premier passage, sélectionnez le mode Hybride et maintenez la luminosité à un niveau confortable.',
  },
  {
    name: 'Démarrez la réparation plein écran',
    text: 'Confirmez l\'avertissement, appuyez sur Démarrer la réparation et laissez le canvas parcourir les couleurs RVB et les parasites sans déplacer d\'autres fenêtres sur l\'écran.',
  },
  {
    name: 'Inspectez la marque ensuite',
    text: 'Arrêtez le test, affichez des écrans gris neutre, blanc, noir, rouge, vert et bleu, puis comparez si l\'image fantôme ou le pixel bloqué a changé.',
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

export const content: ToolLocaleContent<OledScreenBurnInFixerUI> = {
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
      text: 'Réparateur de Brûlure OLED et Exerciseur de Pixels Bloqués LCD',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce réparateur de brûlure d\'écran OLED est un exerciseur de pixels plein écran pour la rétention temporaire d\'image, les images fantômes légères et certains pixels LCD bloqués. Il génère des motifs rapides rouges, verts, bleus, blancs, noirs, jaunes et de parasites directement dans HTML5 Canvas. Il n\'y a pas de fichiers vidéo, pas de ressources d\'image externes et pas d\'étape de téléchargement: le navigateur peint chaque image à la taille actuelle de l\'écran.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Avertissement de photosensibilité',
      icon: 'mdi:alert',
      badge: 'Obligatoire',
      html: 'Le motif de réparation utilise des flashs rapides, des transitions à fort contraste et des parasites blancs. Ne l\'exécutez pas si vous souffrez d\'épilepsie photosensible, de risque de convulsions, de sensibilité aux migraines, de vertiges déclenchés par les lumières clignotantes ou si quelqu\'un à proximité pourrait être affecté. Arrêtez immédiatement si vous ressentez une fatigue oculaire, des nausées, des maux de tête ou une gêne.',
    },
    {
      type: 'paragraph',
      html: 'L\'outil est utile lorsque la question est pratique: <strong>cette marque est elle une rétention temporaire qui peut s\'estomper ou une usure permanente du panneau ?</strong> Une courte exécution surveillée peut parfois réduire une image fantôme causée par des éléments d\'interface statiques retenus, et peut parfois réveiller un sous pixel bloqué sur une couleur. Il ne peut pas reconstruire le matériau OLED usé, réparer une couche fissurée, restaurer une ligne de pilotage morte ni garantir la récupération.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0 Mo', label: 'fichiers vidéo chargés', icon: 'mdi:speedometer' },
        { value: 'RVB', label: 'exercice des sous pixels primaires', icon: 'mdi:palette' },
        { value: '1-120 min', label: 'minuteur de session natif', icon: 'mdi:timer-outline' },
        { value: '100%', label: 'exécution côté client', icon: 'mdi:lock-outline' },
      ],
    },
    {
      type: 'title',
      text: 'Ce que signifient la brûlure, la rétention d\'image et le ghosting',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Brûlure OLED',
          definition: 'Usure permanente et inégale des sous pixels organiques. Un logo statique, une barre de tâches, une barre de navigation ou un HUD de jeu peut laisser une forme visible parce que ces pixels ont vieilli différemment du reste du panneau.',
        },
        {
          term: 'Rétention temporaire d\'image',
          definition: 'Une image fantôme de courte durée qui persiste après la disparition d\'un contenu statique. Elle peut s\'estomper avec un contenu mixte normal, un cycle de compensation ou un motif d\'exercice de pixels.',
        },
        {
          term: 'Pixel LCD bloqué',
          definition: 'Un pixel ou sous pixel bloqué affichant du rouge, du vert, du bleu, du blanc ou une autre couleur fixe. Des changements d\'état rapides peuvent parfois le libérer si le problème n\'est pas un dommage physique.',
        },
        {
          term: 'Pixel mort',
          definition: 'Un pixel qui reste noir parce qu\'il n\'émet ou ne transmet plus correctement la lumière. Un exerciseur de pixels de navigateur ne peut généralement pas ranimer un pixel vraiment mort.',
        },
        {
          term: 'Ghosting LCD',
          definition: 'Traînées de mouvement causées par une réponse lente des pixels. Cela diffère de la brûlure d\'écran, bien que les utilisateurs décrivent souvent les deux comme des images fantômes.',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Rétention temporaire',
          description: 'S\'estompe généralement après un contenu mixte, des routines de rafraîchissement de l\'écran ou une courte session RVB et bruit.',
          icon: 'mdi:history',
          highlight: true,
          points: ['Visible après un contenu statique', 'Souvent plus douce sur les bords', 'Peut s\'améliorer en minutes ou en heures'],
        },
        {
          title: 'Brûlure permanente',
          description: 'Usure OLED inégale qui reste visible après repos, cycles de compensation et contenu varié.',
          icon: 'mdi:contrast-circle',
          points: ['Correspond à une IU statique de longue durée', 'Plus visible sur les couleurs unies', 'Ne disparaît pas après l\'exercice'],
        },
        {
          title: 'Pixel bloqué',
          description: 'Un seul point ou un petit groupe bloqué sur une couleur plutôt qu\'une grande image fantôme.',
          icon: 'mdi:grain',
          points: ['Souvent large d\'un pixel', 'Peut être rouge, vert, bleu ou blanc', 'Répond parfois aux changements rapides de couleur'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Comment utiliser l\'exerciseur de pixels en toute sécurité',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Baissez la luminosité avant la première exécution, surtout sur les téléphones OLED, les téléviseurs OLED et les ordinateurs portables à panneau OLED.',
        'Commencez par 5 à 10 minutes ; ne laissez pas l\'écran sans surveillance pendant de longues sessions.',
        'Utilisez le plein écran pour que la zone affectée reçoive le même motif que le reste du panneau.',
        'Informez la pièce de la lumière clignotante ; n\'exécutez pas le test près de personnes qui n\'y ont pas consenti.',
        'Arrêtez si le panneau devient anormalement chaud, si le navigateur saccade fortement ou si vous ressentez une gêne.',
        'Après l\'exécution, inspectez les écrans gris neutre, blanc, noir, rouge, vert et bleu pour comparer les résultats.',
      ],
    },
    {
      type: 'table',
      headers: ['Problème', 'Premier mode', 'Première durée', 'Conseil de luminosité'],
      rows: [
        ['Image fantôme OLED légère', 'Hybride RVB plus parasites', '5-10 minutes', 'Confortable, pas au maximum'],
        ['Rétention récente de logo statique', 'Cycle RVB', '10-20 minutes', 'Luminosité modérée'],
        ['Pixel LCD bloqué d\'une seule couleur', 'Parasites ou Hybride', '5-15 minutes', 'Luminosité de bureau normale'],
        ['Ancienne brûlure permanente', 'Hybride pour diagnostic seulement', '5 minutes', 'Évitez les longues sessions à forte luminosité'],
        ['Pixel noir mort', 'Non recommandé comme réparation', 'Inspection seulement', 'Aucun exerciseur de pixels ne peut garantir la récupération'],
      ],
    },
    {
      type: 'tip',
      title: 'Utilisez d\'abord des sessions courtes',
      html: 'Une longue session de clignotement n\'est pas automatiquement meilleure. Si une marque est temporaire, on voit souvent un changement après un court passage. Si rien ne change après un essai raisonnable et une routine normale de rafraîchissement du panneau, le problème peut être une usure permanente ou un défaut matériel.',
    },
    {
      type: 'title',
      text: 'Choisir entre le cycle RVB, le bruit blanc et le mode hybride',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Différents artefacts répondent à différents motifs. Un cycle rouge vert bleu exerce les sous pixels primaires selon une séquence contrôlée. Le bruit blanc alterne rapidement la luminance sur de nombreuses petites zones, ce qui peut aider à exposer et à exercer les pixels bloqués isolés. Le mode hybride alterne entre les deux, ce qui en fait le meilleur premier choix lorsque vous ne savez pas si le problème est une rétention d\'image ou un sous pixel paresseux.',
    },
    {
      type: 'table',
      headers: ['Mode', 'Ce qu\'il fait', 'Idéal pour', 'À surveiller'],
      rows: [
        ['Cycle RVB', 'Champs de couleurs primaires et fort contraste plein écran', 'Rétention OLED et inspection des canaux de couleur', 'Clignotement visible'],
        ['Bruit blanc', 'Parasites aléatoires noir à blanc sur tout le panneau', 'Pixels bloqués isolés et petits groupes', 'Intensité visuelle plus élevée'],
        ['Hybride', 'Alterne champs de couleur et parasites', 'Flux de travail général de réparation de brûlure OLED', 'Utilisez d\'abord un minuteur court'],
      ],
    },
    {
      type: 'proscons',
      title: 'Exerciseur de pixels en ligne: avantages et limites réalistes',
      items: [
        {
          pro: 'S\'exécute instantanément dans le navigateur sans installer de logiciel ni charger de fichiers vidéo.',
          con: 'Ne peut pas inverser l\'usure permanente du matériau OLED ni les dommages physiques du panneau.',
        },
        {
          pro: 'Le canvas plein écran couvre l\'écran avec des images RVB et des parasites générés.',
          con: 'La synchronisation du navigateur, les performances de l\'appareil et la prise en charge du plein écran peuvent affecter la cohérence de l\'animation.',
        },
        {
          pro: 'Utile pour un premier diagnostic avant d\'essayer les routines de maintenance du fabricant.',
          con: 'Ne doit pas remplacer le service de garantie pour les nouveaux panneaux présentant des défauts évidents.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Conseils spécifiques aux écrans OLED',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les pixels OLED émettent leur propre lumière. Lorsqu\'un élément statique reste à l\'écran pendant de nombreuses heures, les sous pixels sous cet élément peuvent vieillir à un rythme différent. C\'est pourquoi la brûlure suit souvent la forme des logos de chaînes de télévision, des barres d\'état des téléphones, des boutons de navigation, des HUD de jeux, des barres latérales d\'applications de streaming ou des barres de tâches du bureau. Un exerciseur de pixels peut accélérer la disparition de la rétention temporaire, mais le vieillissement différentiel permanent reste un problème matériel.',
    },
    {
      type: 'card',
      icon: 'mdi:cog-outline',
      title: 'Vérifiez d\'abord l\'entretien intégré du panneau',
      html: 'De nombreux téléviseurs, moniteurs, ordinateurs portables et téléphones OLED incluent un rafraîchissement des pixels, un rafraîchissement du panneau, une atténuation des logos, un décalage d\'écran, une atténuation de la barre de tâches ou des cycles de compensation. Utilisez la routine du fabricant conformément à ses instructions, surtout si l\'écran est sous garantie. Cet outil en ligne est à considérer comme un diagnostic doux et un exercice de rétention temporaire, non comme un remplacement du micrologiciel d\'entretien du panneau.',
    },
    {
      type: 'list',
      items: [
        'Si l\'image fantôme est récente, laissez l\'écran afficher du contenu varié ou se reposer avant de supposer une brûlure permanente.',
        'Si la marque correspond à un logo statique vieux de plusieurs années, un exerciseur de pixels a peu de chances de l\'éliminer complètement.',
        'Si le panneau dispose d\'un cycle de rafraîchissement intégré, exécutez le uniquement aussi souvent que le recommande le fabricant.',
        'Évitez d\'exécuter des motifs de test à luminosité maximale pendant des heures ; la chaleur et la luminosité contribuent à l\'usure.',
        'Masquez les barres de tâches, activez les écrans de veille et réduisez la luminosité de l\'IU statique pour prévenir la récurrence.',
      ],
    },
    {
      type: 'title',
      text: 'Conseils pour les pixels LCD bloqués',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les panneaux LCD ne brûlent pas de la même manière que les panneaux OLED, mais ils peuvent présenter des pixels bloqués, des marques de pression, des défauts de panneau et une persistance temporaire d\'image. Un pixel bloqué qui reste rouge, vert, bleu, cyan, magenta, jaune ou blanc peut être causé par un sous pixel qui ne commute pas correctement. Des changements rapides peuvent parfois aider, bien qu\'il n\'y ait pas de réparation en ligne garantie.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Pixel mort ou pixel bloqué',
      icon: 'mdi:information-outline',
      badge: 'Diagnostic',
      html: 'Un point coloré a plus de chances qu\'un point noir. Un pixel noir sur toutes les couleurs de test est généralement mort ou bloqué. Un pixel coloré qui change sur certains fonds mais pas sur d\'autres peut être un sous pixel bloqué et constitue un meilleur candidat pour une courte session d\'exercice de pixels.',
    },
    {
      type: 'summary',
      title: 'Avant d\'utiliser la pression ou des méthodes physiques',
      items: [
        'N\'appuyez pas fort sur les panneaux OLED, les écrans tactiles ou les écrans fragiles d\'ordinateurs portables.',
        'Évitez les outils pointus, les stylos enveloppés dans un tissu et toute méthode susceptible de rayer la surface.',
        'Utilisez d\'abord l\'exercice logiciel, puis le support de garantie si le défaut persiste.',
        'Documentez le défaut avec des photos macro si l\'écran est neuf et que les politiques de retour s\'appliquent encore.',
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi Canvas est meilleur qu\'une vidéo de réparation lourde',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un réparateur de brûlure basé sur la vidéo doit télécharger des images encodées, les décoder, les redimensionner à l\'écran et espérer que la compression n\'a pas adouci les transitions exactes. Cet outil génère chaque image directement dans le navigateur. Les champs RVB sont pleins, le bruit est créé pour la taille actuelle du canvas et la page évite les fichiers multimédias volumineux qui ralentiraient le chargement ou réduiraient le PageSpeed.',
    },
    {
      type: 'list',
      items: [
        'Pas de fichier vidéo externe signifie un premier rendu plus rapide et moins de dépendance au réseau.',
        'La sortie canvas s\'adapte à la surface plein écran au lieu d\'être limitée par une résolution vidéo.',
        'Le minuteur peut arrêter la réparation automatiquement au lieu de boucler une vidéo indéfiniment.',
        'Le mode, la vitesse, la durée et l\'intensité peuvent être modifiés sans charger un autre fichier.',
      ],
    },
    {
      type: 'message',
      title: 'Une attente réaliste',
      ariaLabel: 'Attente du réparateur de brûlure',
      html: 'Utilisez cet outil comme une première étape contrôlée: réduisez la rétention temporaire, exercez un éventuel pixel bloqué et rassemblez des preuves. Si la marque survit à un contenu varié, aux routines de rafraîchissement intégrées du panneau et à de courtes sessions d\'exercice prudentes, traitez la comme un problème matériel ou de garantie.',
    },
  ],
  ui: {
    safetyTitle: 'Avertissement de lumière clignotante',
    safetyBody: 'Ce motif de réparation émet rapidement des couleurs unies et des parasites à fort contraste. Ne l\'utilisez pas si vous ou quelqu\'un à proximité pourriez être affectés par l\'épilepsie photosensible, les convulsions, les migraines, les vertiges ou la sensibilité à la lumière clignotante.',
    safetyChecklist: 'Maintenez une luminosité raisonnable, surveillez la session et arrêtez immédiatement en cas d\'inconfort.',
    safetyConfirm: 'Je comprends le risque de photosensibilité et souhaite activer le bouton de réparation.',
    safetyContinue: 'Continuer vers les paramètres',
    startRepair: 'Démarrer la réparation (Plein écran)',
    controlsLabel: 'Contrôles de réparation d\'écran OLED',
    modeLabel: 'Mode de motif',
    modeCycle: 'Cycle RVB',
    modeNoise: 'Bruit blanc',
    modeHybrid: 'Hybride',
    modeCycleDescription: 'Couleurs primaires unies pour la rétention d\'image et la vérification des canaux.',
    modeNoiseDescription: 'Parasites haute fréquence pour les pixels bloqués isolés et les petits groupes.',
    modeHybridDescription: 'Meilleur premier passage: alterne champs RVB et texture parasite.',
    speedLabel: 'Vitesse du cycle',
    durationLabel: 'Durée',
    durationShort: '5 min',
    durationStandard: '10 min',
    durationDeep: '20 min',
    durationShortDescription: 'Vérification rapide',
    durationStandardDescription: 'Recommandé',
    durationDeepDescription: 'Exécution surveillée',
    fullscreenHint: 'Canvas de réparation de brûlure OLED plein écran',
    intensityLabel: 'Intensité des parasites',
    warningBadge: 'Contenu clignotant',
  },
};
