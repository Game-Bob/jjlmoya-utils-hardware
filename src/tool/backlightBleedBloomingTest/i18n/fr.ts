import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BacklightBleedBloomingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-fuite-retroeclairage-blooming';
const title = 'Test de Fuite de Rétroéclairage et de Blooming';
const description =
  'Lancez un test de fuite de rétroéclairage en noir pur plein écran et un test de blooming avec cercle blanc déplaçable pour OLED, Mini LED, IPS, VA, moniteurs, ordinateurs portables et téléviseurs.';

const faqData = [
  {
    question: 'Comment tester les fuites de rétroéclairage en ligne ?',
    answer:
      'Éteignez les lumières de la pièce, montez la luminosité de l\'écran au maximum, nettoyez l\'écran, ouvrez le test noir pur en plein écran, attendez que le curseur disparaisse et inspectez les bords et les coins à la recherche de fuites de lumière fixes.',
  },
  {
    question: 'Quelle est la différence entre une fuite de rétroéclairage et le glow IPS ?',
    answer:
      'La fuite de rétroéclairage est généralement une tache lumineuse fixe près du cadre causée par une pression sur la dalle ou un assemblage imparfait. Le glow IPS change fortement avec l\'angle de vue et la position des yeux, surtout dans les coins.',
  },
  {
    question: 'À quoi ressemble le blooming sur un téléviseur ou un moniteur Mini LED ?',
    answer:
      'Le blooming est un halo visible autour d\'un objet lumineux sur fond noir. Il apparaît lorsqu\'une zone de gradation locale éclaire une surface plus grande que l\'objet lui-même.',
  },
  {
    question: 'Les dalles OLED peuvent-elles avoir des fuites de rétroéclairage ?',
    answer:
      'Les dalles OLED n\'utilisent pas de rétroéclairage traditionnel, elles ne devraient donc pas présenter de fuites de lumière typiques des LCD. Elles peuvent néanmoins montrer des problèmes d\'uniformité proche du noir, des dominantes, des bandes verticales ou des noirs relevés à cause des paramètres de la source ou de l\'affichage.',
  },
  {
    question: 'Dois-je retourner un moniteur qui présente des fuites de lumière ?',
    answer:
      'La décision de retour dépend de la gravité, du type de dalle, du prix et de la politique de garantie. Un coin lumineux visible pendant des films ou des jeux normaux est plus grave qu\'une tache légère seulement visible sur une photo à longue exposition.',
  },
];

const howToData = [
  {
    name: 'Préparer la pièce',
    text: 'Éteignez les lampes, fermez les rideaux, nettoyez l\'écran et laissez vos yeux s\'adapter une minute pour que la poussière et les reflets ne ressemblent pas à des défauts de dalle.',
  },
  {
    name: 'Augmenter la luminosité de l\'écran',
    text: 'Réglez la luminosité à 100 pour cent ou sur le mode HDR que vous souhaitez inspecter. Désactivez les capteurs de lumière ambiante agressifs pendant le test.',
  },
  {
    name: 'Lancer le test noir',
    text: 'Démarrez le mode fuite de rétroéclairage. La page passe en plein écran et affiche du noir exact. Inspectez le cadre, les coins et toute tache fixe.',
  },
  {
    name: 'Lancer le test de blooming',
    text: 'Démarrez le mode gradation locale, puis faites glisser le cercle blanc sur l\'écran. Surveillez les halos, la gradation retardée, les zones en forme de grille et les noirs relevés.',
  },
  {
    name: 'Quitter proprement',
    text: 'Appuyez sur Échap pour quitter le plein écran natif. L\'interface de configuration revient et l\'état du test se réinitialise.',
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

export const content: ToolLocaleContent<BacklightBleedBloomingTestUI> = {
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
      text: 'Test de Fuite de Rétroéclairage en Ligne: Ce Qu\'il Faut Rechercher sur un Nouveau Moniteur ou Téléviseur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un <strong>test de fuite de rétroéclairage en ligne</strong> est le plus utile pendant la période de retour d\'un nouveau moniteur, PC portable gaming ou téléviseur. Le test affiche un champ plein écran <code>#000000</code> généré par le navigateur afin que le rétroéclairage LCD soit la seule source possible de lumière indésirable. Si la dalle, l\'empilement de diffuseurs, la pression du cadre ou l\'assemblage laissent passer la lumière, vous le verrez généralement comme des coins plus clairs, des bords nuageux ou des taches qui restent à la même position physique.',
    },
    {
      type: 'paragraph',
      html: 'Utilisez le test avec des attentes réalistes. Les dalles LCD ont besoin d\'un rétroéclairage, et une très petite variation peut être normale, surtout sur les écrans IPS et VA d\'entrée de gamme. La question pratique n\'est pas de savoir si une photo de téléphone à longue exposition peut exagérer une tache. La question est de savoir si la fuite de lumière est visible à l\'œil nu lors de films sombres, d\'écrans de chargement de jeux, de scènes nocturnes, de fonds d\'écran noirs ou de vidéos letterbox.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'À faire avant de juger la dalle',
      badge: 'Configuration',
      html: 'Éteignez les lumières de la pièce, nettoyez la vitre, réglez la luminosité à 100 pour cent, désactivez les capteurs de lumière ambiante et attendez quelques secondes que vos yeux s\'adaptent. Les reflets, les traces de doigts et le curseur de la souris peuvent tous créer des faux positifs lors d\'une inspection de l\'uniformité du noir.',
    },
    {
      type: 'list',
      items: [
        'Vérifiez les bords supérieur et inférieur où la pression du cadre crée souvent des brillances fixes',
        'Inspectez les quatre coins à la recherche de fuites de lumière triangulaires ou en forme de croissant',
        'Bougez légèrement la tête pour distinguer la brillance due à l\'angle de vue d\'une fuite fixe',
        'Prenez d\'abord des notes avec vos yeux, car les appareils photo peuvent surexposer les écrans noirs',
        'Retestez après que la dalle a chauffé pendant 15 à 30 minutes si le résultat est limite',
      ],
    },
    {
      type: 'title',
      text: 'Fuites de Rétroéclairage, Glow IPS, Clouding et Uniformité du Noir',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Problème', 'Ce que vous voyez', 'Comportement', 'Dalles les plus courantes'],
      rows: [
        ['Fuite de rétroéclairage', 'Tache lumineuse fixe sur un bord ou un coin', 'Reste au même endroit quand vous bougez la tête', 'IPS, VA, TN LCD'],
        ['Glow IPS', 'Lueur laiteuse dans les coins sur les images sombres', 'Change fortement avec l\'angle de vue et la distance', 'IPS LCD'],
        ['Clouding', 'Grandes zones nuageuses irrégulières sur le noir', 'Généralement fixe, parfois réduit en baissant la luminosité', 'TVs et moniteurs LCD à rétroéclairage latéral'],
        ['Écrasement des noirs VA', 'Les détails sombres disparaissent ou traînent en mouvement', 'Dépend du contenu et de la transition des pixels', 'VA LCD'],
        ['Banding OLED proche du noir', 'Bandes verticales ou horizontales près du noir', 'Visible sur gris proche du noir, pas sur noir pur', 'OLED'],
      ],
    },
    {
      type: 'paragraph',
      html: 'L\'erreur la plus courante est d\'appeler tout artefact visible dans l\'obscurité fuite de rétroéclairage. Le <strong>glow IPS</strong> est optique: il devient plus fort quand vous êtes assis près, regardez la dalle hors axe ou observez les coins depuis un angle prononcé. La vraie fuite de rétroéclairage est mécanique ou liée à l\'assemblage: elle reste attachée à la même zone du cadre même si la position de vos yeux change. Cette distinction est importante car de nombreux revendeurs traitent les fuites sévères différemment du glow IPS normal.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'IPS',
          description: 'Angles de vision larges, lueur fréquente dans les coins et fuites visibles si le cadre appuie inégalement sur la dalle.',
          points: ['À vérifier de préférence à votre distance de visionnage normale', 'Le glow change avec la position de la tête', 'Les fuites de bord peuvent être pertinentes pour la garantie si sévères'],
        },
        {
          title: 'VA',
          description: 'Contraste natif plus élevé, généralement moins de glow type IPS, mais peut montrer du clouding et des transitions sombres lentes.',
          points: ['Le noir semble plus profond que l\'IPS', 'L\'uniformité peut varier d\'une unité à l\'autre', 'Le blooming apparaît sur les modèles à gradation locale'],
        },
        {
          title: 'OLED',
          description: 'Pas de rétroéclairage LCD, donc le noir pur devrait être éteint, mais l\'uniformité proche du noir et la dominante peuvent encore compter.',
          points: ['Le noir pur devrait disparaître dans une pièce sombre', 'Testez les diapositives de gris séparément pour le banding', 'Évitez de confondre le noir relevé de la source avec une fuite de la dalle'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Comment Exécuter un Test de Noir Pur Fiable',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le mode test noir supprime délibérément l\'interface normale. Une fois démarré, le panneau en verre disparaît, les événements de pointeur sont désactivés sur l\'interface de configuration, la page demande le plein écran natif et la couche de test utilise du noir exact. Après deux secondes sans mouvement de la souris, le curseur est masqué afin de ne pas créer de point de référence blanc ni contaminer une inspection en pièce sombre.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '#000000', label: 'couleur de fond du test' },
        { value: '2 s', label: 'délai d\'inactivité du curseur' },
        { value: '100%', label: 'luminosité recommandée' },
        { value: '0', label: 'ressources externes en mode test' },
      ],
    },
    {
      type: 'summary',
      title: 'Checklist du test noir',
      items: [
        'Utilisez la résolution native et désactivez le zoom du navigateur si l\'affichage est mal mis à l\'échelle',
        'Réglez la luminosité SDR suffisamment haute pour révéler les défauts, ou testez le HDR dans le mode exact que vous prévoyez d\'utiliser',
        'Inspectez d\'abord depuis votre position de visionnage normale, puis depuis un peu plus loin',
        'Ne jugez pas à partir d\'une photo de téléphone sauf si l\'exposition est verrouillée et ressemble à ce que vos yeux voient',
        'Appuyez sur Échap pour quitter le plein écran et répétez le test après avoir modifié les paramètres du moniteur',
      ],
    },
    {
      type: 'tip',
      title: 'Les photos d\'appareil photo peuvent donner un aspect terrible à de bonnes dalles',
      html: 'L\'exposition automatique du téléphone essaie d\'éclaircir un écran noir, ce qui exagère la faible lueur et peut transformer un comportement LCD normal en une image dramatique. Si vous avez besoin de preuves pour la garantie, verrouillez l\'exposition manuellement et incluez une note décrivant si le problème est visible pendant du contenu réel.',
    },
    {
      type: 'title',
      text: 'Test de Blooming par Gradation Locale pour les Écrans Mini LED et FALD',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le mode <strong>test de blooming pour moniteur</strong> place un cercle blanc pur sur un fond noir pur. Sur un Mini LED, un LCD FALD ou un téléviseur avec gradation locale, ce petit objet force une ou plusieurs zones de rétroéclairage à s\'illuminer tandis que les zones voisines essaient de rester noires. Si l\'algorithme de gradation, le nombre de zones, le diffuseur ou le contraste de la dalle ne peuvent pas isoler la lumière, vous voyez un halo autour du cercle.',
    },
    {
      type: 'paragraph',
      html: 'Faire glisser le cercle est important. Le blooming statique ne raconte qu\'une partie de l\'histoire. Un point lumineux en mouvement révèle le délai de gradation, les transitions de zones, le pompage, les champs d\'étoiles écrasés, les sous-titres relevés et le comportement en forme de grille. Un bon système de gradation locale doit maintenir l\'objet lumineux tout en minimisant le voile autour de lui et en évitant les taches lumineuses retardées après que le cercle s\'est éloigné.',
    },
    {
      type: 'table',
      headers: ['Artefact', 'Ce qu\'il faut surveiller', 'Explication probable'],
      rows: [
        ['Halo', 'Lueur douce autour du cercle blanc', 'La zone de gradation locale est plus grande que l\'objet lumineux'],
        ['Grille de zones', 'Des blocs carrés ou rectangulaires apparaissent autour du mouvement', 'Faible nombre de zones ou disposition Mini LED visible'],
        ['Délai de gradation', 'Une tache lumineuse suit le cercle avec retard', 'L\'algorithme répond lentement au mouvement'],
        ['Relevé du noir', 'Tout l\'écran devient gris quand le cercle apparaît', 'Gradation globale ou contrôle de contraste faible'],
        ['Bloom des sous-titres', 'Large voile autour d\'un petit texte blanc ou d\'une interface', 'Luminosité agressive avec des zones locales limitées'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:television-ambient-light',
      title: 'Meilleur cas d\'utilisation',
      html: 'Connectez l\'ordinateur portable ou la console au téléviseur coûteux que vous utilisez réellement, ouvrez ce testeur de gradation locale dans le navigateur et faites glisser le point lumineux sur la taille d\'écran exacte. Un petit aperçu intégré ne peut pas solliciter les zones de gradation locale de la même manière qu\'un plein écran en noir et blanc.',
    },
    {
      type: 'title',
      text: 'Attentes par Type de Dalle: OLED, Mini LED, IPS et VA',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Ce que chaque technologie fait généralement bien et moins bien',
      items: [
        {
          pro: 'L\'OLED éteint les pixels individuels pour un noir véritable et ne devrait pas montrer de fuite de rétroéclairage LCD.',
          con: 'L\'OLED peut montrer du banding proche du noir, des dominantes, une limitation automatique de la luminosité et un risque de brûlure sous contenu statique.',
        },
        {
          pro: 'Le Mini LED peut atteindre une luminosité HDR élevée et réduire le voile sur de grandes surfaces par rapport au LCD à rétroéclairage latéral.',
          con: 'Le Mini LED utilise toujours des zones, donc les petits objets lumineux peuvent créer du blooming quand le nombre de zones ou la qualité de l\'algorithme sont limités.',
        },
        {
          pro: 'L\'IPS est stable en couleur et en angle de vision, ce qui est utile pour le travail de bureau et le visionnage partagé.',
          con: 'Le glow IPS et les fuites de bord sont des plaintes courantes sur les scènes sombres, surtout en étant assis près.',
        },
        {
          pro: 'Le VA a souvent un bien meilleur contraste natif que l\'IPS et peut paraître plus profond dans les pièces sombres.',
          con: 'Le VA peut montrer de la traînée sombre, du clouding ou du blooming sur les versions avec gradation locale.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Fuite de rétroéclairage', definition: 'Lumière indésirable qui s\'échappe à travers l\'empilement LCD, généralement près du cadre, visible sur les images noires.' },
        { term: 'Blooming', definition: 'Un halo autour d\'un objet lumineux causé par des zones de gradation locale éclairant une surface plus grande que l\'objet.' },
        { term: 'Glow IPS', definition: 'Éclaircissement laiteux dépendant de l\'angle dans les scènes sombres sur les dalles IPS.' },
        { term: 'FALD', definition: 'Full Array Local Dimming, gradation locale à matrice complète, où le rétroéclairage LCD est divisé en zones contrôlées indépendamment.' },
        { term: 'Mini LED', definition: 'Un rétroéclairage LCD utilisant de nombreuses petites LED pour augmenter le nombre de zones et la luminosité HDR.' },
        { term: 'Uniformité du noir', definition: 'La régularité avec laquelle un écran restitue le contenu noir ou proche du noir sur toute sa surface.' },
      ],
    },
    {
      type: 'title',
      text: 'Quand un Défaut Est Assez Grave Pour Être Retourné',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Signaux d\'alarme pendant la période de retour',
      badge: 'Garantie',
      html: 'Envisagez de documenter rapidement le problème si un coin lumineux est visible depuis la distance de visionnage normale, que la même tache vous distrait dans les films ou les jeux, que la gradation locale crée des halos évidents autour des sous-titres ou qu\'un écran HDR coûteux est moins performant que les tests typiques pour le même modèle.',
    },
    {
      type: 'paragraph',
      html: 'Une décision juste utilise le contenu réel et la catégorie du produit. Un moniteur IPS de bureau à bas coût peut avoir une légère lueur de coin qui est normale pour sa catégorie. Un moniteur Mini LED premium ou un téléviseur haut de gamme devrait bien mieux contrôler les niveaux de noir et le blooming. Si le défaut est évident dans les films letterbox, les menus de jeu sombres, les scènes spatiales ou le travail de bureau, ce n\'est pas qu\'une curiosité de laboratoire.',
    },
    {
      type: 'list',
      items: [
        'Vérifiez le même contenu sur un autre écran pour exclure la source',
        'Réinitialisez les paramètres d\'image avant de supposer que la dalle est défectueuse',
        'Essayez la gradation locale basse, moyenne et haute car les algorithmes diffèrent selon le mode',
        'Notez la luminosité, le mode HDR, le mode de gradation locale et la distance de visionnage dans vos notes',
        'Si vous retournez, décrivez ce que vos yeux voient plutôt que d\'envoyer uniquement des photos surexposées',
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi Ce Test Utilise du Code Plutôt Que de la Vidéo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Les fichiers vidéo peuvent introduire des artefacts de compression, du travail de décodage du navigateur, de la mise en mémoire tampon, de la conversion de gamme de couleurs et des variations de fréquence d\'images. Un test de défauts de dalle ne devrait pas dépendre d\'un fichier MP4. Cet outil utilise uniquement du HTML et du CSS côté client pour les états de test: du noir exact pour l\'arrière-plan et du blanc exact pour le cercle en mouvement. Cela maintient la charge de travail faible et évite toute activité réseau après le chargement de la page.',
    },
    {
      type: 'paragraph',
      html: 'La position du cercle de blooming est appliquée via <code>requestAnimationFrame</code>, qui synchronise les mises à jour visuelles avec la boucle de rafraîchissement du navigateur. Les entrées de pointeur, souris et tactiles mettent à jour les coordonnées cibles, puis l\'image d\'animation suivante déplace le cercle blanc. Cela rend le glissement fluide sur les moniteurs à haut taux de rafraîchissement, les tablettes et les téléphones OLED sans effectuer de travail inutile à chaque événement d\'entrée brut.',
    },
    {
      type: 'message',
      title: 'Note sur la confidentialité et les performances',
      ariaLabel: 'Note sur la confidentialité et les performances',
      html: 'Les états de test actifs n\'ont pas besoin de suivi, de vidéos, d\'images distantes ou de téléchargements de mesures. Ils sont volontairement simples pour que les anciens ordinateurs portables, les navigateurs de TV et les configurations de salon puissent solliciter la dalle d\'affichage plutôt que le processeur.',
    },
    {
      type: 'title',
      text: 'Dépannage des Résultats Incorrects',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Symptôme pendant le test', 'Cause possible', 'Que tenter'],
      rows: [
        ['L\'écran noir n\'est pas vraiment noir', 'Gamme RVB limitée, paramètre de noir relevé, mappage tonal HDR ou superposition du navigateur', 'Réglez la sortie RVB complète, désactivez le contraste dynamique et confirmez qu\'aucun filtre nocturne de l\'OS n\'est actif'],
        ['Le curseur de la souris reste visible', 'Le mouvement a réinitialisé le minuteur d\'inactivité ou le navigateur a brièvement bloqué le masquage du curseur', 'Arrêtez de bouger la souris pendant deux secondes ou utilisez une télécommande/clavier'],
        ['Le plein écran ne démarre pas', 'Le navigateur a refusé le plein écran en dehors d\'un clic direct ou limitation du navigateur TV', 'Appuyez à nouveau sur le bouton de démarrage ou utilisez le raccourci plein écran du navigateur'],
        ['Le blooming change entre les modes', 'Le paramètre de gradation locale modifie le comportement des zones', 'Retestez Bas, Moyen, Haut et Désactivé pour comprendre le compromis'],
        ['L\'OLED semble gris', 'Inadéquation de la gamme vidéo, reflets de la pièce ou mode d\'image à noirs relevés', 'Vérifiez la gamme source, le niveau de noir, la luminosité et les reflets ambiants'],
      ],
    },
    {
      type: 'summary',
      title: 'Interprétation pratique',
      items: [
        'La fuite de rétroéclairage est la plus convaincante quand elle est fixe en place et visible dans du contenu sombre réel',
        'Le glow IPS change avec l\'angle, testez donc depuis la position où vous êtes réellement assis',
        'Le blooming est une limitation de la gradation locale, pas un problème de pixels morts',
        'L\'OLED devrait réussir le test de noir pur, mais nécessite tout de même des vérifications séparées d\'uniformité proche du noir',
        'Une bonne configuration de test est sombre, en plein écran, avec une luminosité élevée et sans reflets',
      ],
    },
  ],
  ui: {
    bleedTitle: 'Fuite de rétroéclairage',
    bleedDescription: 'Noir exact en plein écran pour détecter les fuites de bord, le glow IPS, le clouding et les vérifications d\'uniformité du noir.',
    bloomingTitle: 'Gradation locale',
    bloomingDescription: 'Un cercle blanc déplaçable qui sollicite le Mini LED, le FALD, la gestion proche du noir OLED et les zones de gradation des TV.',
    startBleed: 'Lancer le test noir',
    startBlooming: 'Lancer le test de blooming',
    prepTitle: 'Avant de commencer',
    prepBrightness: 'Réglez la luminosité du moniteur ou du téléviseur à 100 %.',
    prepRoom: 'Éteignez les lumières de la pièce et éliminez les reflets.',
    prepFullscreen: 'Appuyez sur Échap pour quitter le plein écran et réinitialiser le test.',
    panelLabel: 'Aperçu des défauts de dalle',
    parametersLabel: 'Paramètres du test',
    modeControlsLabel: 'Modes de test du rétroéclairage',
    blackLevelLabel: 'Noir',
    blackLevelValue: '#000000',
    brightnessLabel: 'Luminosité',
    brightnessValue: '100%',
    idleLabel: 'Curseur',
    idleValue: '2s',
    fullscreenLabel: 'Plein écran',
    fullscreenValue: 'API',
    escapeHint: 'Test noir pur en cours. Arrêtez de bouger la souris pendant 2 secondes pour masquer le curseur. Appuyez sur Échap pour quitter.',
    dragHint: 'Faites glisser ou touchez le cercle blanc. Surveillez les halos, les grilles de zones et la gradation retardée. Appuyez sur Échap pour quitter.',
  },
};
