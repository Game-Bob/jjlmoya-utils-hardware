import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpeakerPhaseTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'testeur-phase-haut-parleurs';
const title = 'Testeur de Phase d\'Enceintes';
const description =
  'Lisez des signaux de test stéréo en phase et inversés à 180 degrés dans votre navigateur pour vérifier la polarité des enceintes, les erreurs de câblage et l\'annulation de phase.';

const faqData = [
  {
    question: 'Comment savoir si la polarité de mes enceintes est correcte ?',
    answer:
      'Écoutez le signal normal puis le signal inversé depuis la même position d\'écoute. Avec des enceintes correctement câblées, le mode inversé devrait sembler plus faible, creux ou moins centré car les canaux gauche et droit s\'annulent partiellement dans la pièce. Si le mode inversé paraît plus plein ou plus fort, il est possible qu\'une enceinte soit déjà câblée en polarité inversée.',
  },
  {
    question: 'Que signifie phase inversée dans ce test ?',
    answer:
      'L\'outil envoie le même signal aux deux canaux, puis multiplie un canal par -1 en mode inversé. Cela retourne la forme d\'onde de 180 degrés sans télécharger de fichier audio. Le résultat physique équivaut à inverser les bornes positive et négative sur une enceinte pour le signal de test.',
  },
  {
    question: 'Ce test peut-il vérifier chaque enceinte d\'un home cinéma ?',
    answer:
      'Il est idéal pour vérifier une paire stéréo ou les enceintes avant gauche et droite d\'un système plus grand. Pour les systèmes surround complets, testez les paires une à une et combinez le résultat avec le test des canaux de votre ampli AV, la calibration de distance et un micro de mesure ou sonomètre si disponible.',
  },
  {
    question: 'Dois-je utiliser le bruit rose ou une tonalité sinusoïdale ?',
    answer:
      'Le bruit rose est généralement plus facile pour les vérifications de polarité car il couvre une large gamme de fréquences et rend l\'annulation évidente. Une tonalité sinusoïdale peut aider à se concentrer sur une fréquence précise, mais les modes de pièce peuvent rendre un seul son trompeur.',
  },
  {
    question: 'Est-ce sans danger pour les enceintes et les casques ?',
    answer:
      'Oui, à des niveaux modérés. Commencez doucement, évitez le gain maximal de l\'amplificateur et ne faites pas jouer de sons continus à fort volume dans des casques, de petits haut-parleurs d\'ordinateur portable ou des enceintes inconnues. Arrêtez immédiatement si vous entendez de la distorsion ou une contrainte mécanique.',
  },
];

const howToData = [
  {
    name: 'Placez-vous à la position d\'écoute',
    text: 'Asseyez-vous là où vous écoutez normalement afin que l\'annulation acoustique que vous percevez corresponde à la pièce réelle et au placement des enceintes.',
  },
  {
    name: 'Écoutez le signal normal',
    text: 'Appuyez sur Lecture En Phase et notez l\'image centrale, le volume et le corps sonore.',
  },
  {
    name: 'Écoutez le signal inversé',
    text: 'Appuyez sur Lecture Hors Phase. Des enceintes correctement câblées devraient généralement sonner de façon plus diffuse, creuse ou silencieuse.',
  },
  {
    name: 'Inspectez le câblage si le résultat est inversé',
    text: 'Si le mode inversé sonne plus fort que le normal, vérifiez les bornes positive et négative sur une enceinte, les borniers de l\'amplificateur, les fiches bananes, les plaques murales et les adaptateurs.',
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<SpeakerPhaseTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Test de Phase et de Polarité d\'Enceintes en Ligne', level: 2 },
    {
      type: 'paragraph',
      html: 'Ce testeur de phase d\'enceintes compare un signal stéréo normal avec une version où un canal est inversé de <strong>180 degrés</strong>. L\'objectif pratique est simple: confirmer que les deux enceintes d\'une paire bougent ensemble quand elles le doivent. Lorsque les enceintes gauche et droite sont câblées avec la même polarité, l\'énergie des basses et des médiums se renforce entre elles et l\'image centrale est stable. Lorsqu\'une enceinte est câblée à l\'envers, les membranes se déplacent dans des directions opposées pour un même signal, ce qui peut rendre les voix sans corps, faire disparaître les basses et donner une image stéréo étrangement large ou creuse.',
    },
    {
      type: 'paragraph',
      html: 'Le test est généré localement dans le navigateur. Il ne diffuse aucun fichier audio volumineux. En mode normal, les deux canaux reçoivent le même bruit rose ou la même tonalité sinusoïdale. En mode inversé, un canal est multiplié par <code>-1</code>, ce qui crée une forme d\'onde mathématiquement inversée. Si votre câblage physique est correct, cette inversion artificielle devrait créer une annulation évidente. Si votre câblage réel est déjà inversé, le bouton inversé peut partiellement corriger l\'erreur et peut donc sembler plus fort, plus solide ou plus centré que le bouton normal.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Interprétation rapide',
      badge: 'Règle de base',
      html: '<p>Si le mode <strong>Hors Phase</strong> sonne plus faible, distant, creux ou silencieux que le mode <strong>En Phase</strong>, votre paire gauche/droite est probablement correctement câblée. Si Hors Phase sonne plus plein ou plus fort, inspectez les bornes rouge et noire sur une enceinte, l\'amplificateur, les fiches bananes, les plaques murales, le faisceau de câblage automobile ou tout adaptateur dans la chaîne.</p>',
    },
    {
      type: 'table',
      headers: ['Ce que vous entendez', 'Signification probable', 'Prochaine étape'],
      rows: [
        ['Le mode normal est plein, l\'inversé est creux', 'Les deux enceintes sont probablement câblées avec une polarité correspondante.', 'Laissez le câblage tel quel et poursuivez avec le placement ou la calibration.'],
        ['L\'inversé est plus plein que le normal', 'Une enceinte est peut-être physiquement câblée à l\'envers.', 'Vérifiez les bornes positive et négative sur un seul côté de la paire.'],
        ['Les deux modes sonnent presque identiques', 'Les enceintes sont peut-être trop éloignées, les réflexions de la pièce dominent ou la sortie est en mono.', 'Placez-vous à la position d\'écoute, désactivez le traitement mono et essayez le bruit rose.'],
        ['Les deux modes sonnent faibles en basses', 'L\'annulation de pièce, la phase du subwoofer, le filtrage ou le placement peuvent être le vrai problème.', 'Faites un balayage des basses et testez la polarité du subwoofer séparément.'],
      ],
    },
    { type: 'title', text: 'Pourquoi une Polarité d\'Enceinte Inversée Sonne Mal', level: 2 },
    {
      type: 'paragraph',
      html: 'Une enceinte transforme un signal électrique en mouvement de membrane. Pour une onde de pression positive, deux enceintes identiques devraient pousser l\'air dans la même direction au même moment. Si les fils positif et négatif d\'une enceinte sont inversés, cette enceinte se déplace vers l\'intérieur pendant que l\'autre se déplace vers l\'extérieur pour le même signal. Dans une paire stéréo, cela ne rend pas simplement le son plus silencieux partout ; la pièce, l\'écartement des enceintes, la longueur d\'onde et la position d\'écoute déterminent où l\'annulation est la plus forte. Les symptômes les plus notables sont généralement des basses réduites, un centre fantôme faible et des voix qui semblent se détacher de l\'espace entre les enceintes.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Les voix principales et les dialogues doivent être ancrés près du centre lorsque les deux enceintes diffusent le même signal mono.',
        'La grosse caisse, la basse et les notes graves du piano doivent avoir du corps au lieu de sembler légères.',
        'L\'image stéréo ne doit pas sembler artificiellement large lorsque la source est mono.',
        'Bouger légèrement la tête ne doit pas faire s\'effondrer complètement l\'image centrale.',
        'Une paire correctement câblée doit rendre le test inversé moins naturel que le test normal.',
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Polarité', definition: 'L\'orientation positive ou négative du signal électrique alimentant le haut-parleur d\'une enceinte.' },
        { term: 'Phase', definition: 'La relation temporelle entre deux formes d\'onde, souvent décrite en degrés sur un cycle.' },
        { term: 'Inversion à 180 degrés', definition: 'Une forme d\'onde retournée verticalement, de sorte que la pression positive devient une pression négative au même instant.' },
        { term: 'Annulation', definition: 'Une réduction du niveau sonore lorsque deux formes d\'onde similaires arrivent avec une polarité ou un temps opposé.' },
        { term: 'Centre fantôme', definition: 'L\'image centrale apparente créée lorsqu\'un son identique atteint les enceintes gauche et droite de manière égale.' },
      ],
    },
    {
      type: 'tip',
      title: 'Ne testez pas depuis le côté d\'une enceinte',
      html: 'Asseyez-vous à la position d\'écoute normale. L\'annulation de phase est spatiale: un résultat entendu à 50 cm de l\'enceinte gauche peut être complètement différent du résultat obtenu sur le canapé, le siège de studio ou le siège conducteur.',
    },
    { type: 'title', text: 'Bruit Rose ou Tonalité Sinusoïdale Pour les Vérifications de Polarité', level: 2 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Bruit rose',
          description: 'Bruit à large bande avec plus d\'énergie dans les octaves basses que le bruit blanc. Il facilite le jugement à l\'oreille du corps sonore global, de l\'image centrale et de l\'annulation.',
          highlight: true,
          points: ['Meilleur premier choix pour des vérifications rapides de polarité.', 'Moins susceptible d\'être dominé par un seul mode de pièce.', 'Utile pour le home cinéma, les enceintes de monitoring et l\'audio automobile.'],
        },
        {
          title: 'Tonalité sinusoïdale',
          description: 'Un son à fréquence unique qui peut exposer l\'annulation à une fréquence choisie mais peut aussi exagérer les pics et les creux de la pièce.',
          points: ['Utile pour traquer un problème spécifique de filtrage ou de basses.', 'Peut être trompeur si la pièce a un creux important à cette fréquence.', 'Gardez un volume modéré car les sons purs deviennent fatigants.'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Pour une vérification rapide de polarité, commencez par le bruit rose. Le bruit rose répartit l\'énergie sur tout le spectre, vous jugez donc la paire d\'enceintes comme un système plutôt que de juger une fréquence qui pourrait se trouver dans un creux de pièce. Utilisez la commande de tonalité sinusoïdale uniquement lorsque vous voulez vous concentrer sur une bande problématique connue, comme une annulation dans la plage vocale autour de 300 Hz ou un problème de transition des basses autour de 80 Hz. Si le résultat de la tonalité change radicalement lorsque vous bougez la tête de quelques centimètres, la pièce influence fortement cette fréquence.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '180°', label: 'Inversion mathématique appliquée à un canal', icon: 'mdi:rotate-3d-variant' },
        { value: '-1', label: 'Multiplicateur de gain utilisé pour le canal inversé', icon: 'mdi:plus-minus-variant' },
        { value: '0 Mo', label: 'Téléchargements audio nécessaires pour le signal de test', icon: 'mdi:cloud-off-outline' },
      ],
    },
    { type: 'title', text: 'Liste de Vérification Pour Home Cinéma et Enceintes de Monitoring', level: 2 },
    {
      type: 'card',
      icon: 'mdi:sofa',
      title: 'Enceintes avant de home cinéma',
      html: 'Utilisez les boutons normal et inversé uniquement avec les enceintes avant gauche et droite actives. Désactivez les upmixers, le surround virtuel, le mode nuit, l\'amélioration des dialogues et la correction de pièce si vous voulez d\'abord isoler le câblage brut. Après avoir confirmé la polarité, réactivez la calibration et vérifiez que les dialogues restent centrés.',
    },
    {
      type: 'card',
      icon: 'mdi:music-circle',
      title: 'Enceintes de monitoring',
      html: 'Faites passer le navigateur par les mêmes sorties d\'interface que votre DAW. Vérifiez que les deux câbles symétriques sont câblés de manière cohérente et que les commutateurs de polarité du contrôleur de monitoring ne sont pas activés. Un moniteur inversé peut rendre les décisions de compatibilité mono peu fiables pendant le mixage.',
    },
    {
      type: 'card',
      icon: 'mdi:car-info',
      title: 'Audio automobile',
      html: 'Les habitacles de voiture créent des réflexions sévères et une asymétrie de siège, écoutez donc depuis le siège conducteur et répétez depuis le siège passager si nécessaire. Les adaptateurs de faisceau d\'origine, les remplacements de haut-parleurs de porte et les installations d\'amplificateurs sont des endroits fréquents où les fils positif et négatif peuvent être inversés.',
    },
    {
      type: 'proscons',
      title: 'Forces et limites du test de phase dans le navigateur',
      items: [
        { pro: 'Vérification immédiate sans installer de logiciel ni télécharger de fichiers audio.', con: 'Il ne peut pas identifier quel câble physique est incorrect sans inspecter le système.' },
        { pro: 'Fonctionne bien pour une paire stéréo, des casques, des enceintes de proximité et des vérifications rapides d\'installation.', con: 'L\'acoustique de la pièce peut masquer ou exagérer l\'effet à certaines places.' },
        { pro: 'Le bruit rose rend l\'annulation large plus facile à entendre qu\'avec une seule tonalité de test.', con: 'Les systèmes surround multi-enceintes nécessitent toujours une vérification canal par canal.' },
      ],
    },
    { type: 'title', text: 'Comment Corriger un Test de Polarité Échoué', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tools',
      items: [
        'Éteignez l\'amplificateur avant de changer les câbles d\'enceinte ou les fiches bananes.',
        'Choisissez une enceinte dans la paire et suivez le rouge sur le rouge et le noir sur le noir de l\'amplificateur à l\'enceinte.',
        'Inspectez toute plaque murale, borne à ressort, adaptateur, connecteur speakON ou faisceau automobile entre l\'amplificateur et l\'enceinte.',
        'Si le câble d\'enceinte a une rayure, une nervure, un texte imprimé ou un côté cuivre/argent, utilisez le même conducteur pour le positif aux deux extrémités.',
        'Après avoir changé un côté, relancez les modes normal et inversé depuis la position d\'écoute.',
        'Si le résultat est toujours ambigu, rapprochez temporairement les enceintes et répétez à faible volume.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Les subwoofers nécessitent un test de phase séparé',
      badge: 'Systèmes de basses',
      html: '<p>Cet outil compare une paire gauche/droite. Un filtrage de subwoofer peut être électriquement correct mais acoustiquement hors phase car la distance, le délai DSP, la pente du filtre et le placement modifient la synchronisation. Utilisez ce test pour la paire principale, puis un balayage de filtrage ou la calibration du récepteur pour la transition du subwoofer.</p>',
    },
    {
      type: 'message',
      title: 'Règle d\'écoute pratique',
      ariaLabel: 'Règle d\'écoute pratique pour le test de phase',
      html: 'Pour les installations réelles, le réglage correct est celui qui donne au son mono une image centrée, pleine et stable à la position d\'écoute réelle. Le mode inversé est un contraste diagnostique, pas un mode d\'écoute.',
    },
    {
      type: 'summary',
      title: 'Résumé du diagnostic de polarité d\'enceintes',
      items: [
        'Le mode normal doit sembler plus fort et centré que l\'inversé lorsque la paire d\'enceintes est correctement câblée.',
        'Un mode inversé qui sonne plus fort est un indice sérieux qu\'une connexion physique d\'enceinte est inversée.',
        'Le bruit rose est le meilleur premier signal car il réduit le risque de juger une seule fréquence de pièce.',
        'Les sons sinusoïdaux sont utiles pour le dépannage ciblé mais peuvent être dominés par les modes de pièce.',
        'Baissez toujours le volume avant de changer de mode, surtout avec des casques ou des amplificateurs de forte puissance.',
      ],
    },
  ],
  ui: {
    normal: 'En Phase',
    inverted: 'Inversé',
    stop: 'Arrêter',
    pause: 'Pause',
    volume: 'Niveau de sortie',
    noiseColor: 'Signal de test',
    pinkNoise: 'Bruit rose',
    sineTone: 'Son sinusoïdal',
    frequency: 'Fréquence du son',
    statusReady: 'Prêt',
    statusNormal: 'En phase',
    statusInverted: 'Inversé',
    instruction:
      'L\'inversé devrait sembler plus faible. Plus fort signifie vérifier le câblage.',
    channelLabel: 'Testeur de phase d\'enceintes',
    leftChannel: 'Canal gauche',
    rightChannel: 'Canal droit',
    leftShort: 'G',
    rightShort: 'D',
    polarityNormal: '0° aligné',
    polarityInverted: '180° inversé',
    safety: 'Commencez doucement. Les tests de polarité peuvent devenir forts avec des amplificateurs, des enceintes de monitoring, des systèmes audio de voiture et des casques.',
  },
};
