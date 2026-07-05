import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterEjectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ejecteur-eau-nettoyant-haut-parleur';
const title = 'Éjecteur d\'Eau pour Haut Parleurs';
const description =
  'Jouez une tonalité grave de 165 Hz pour aider à expulser l\'eau, la poussière ou les débris mobiles des haut-parleurs des téléphones, tablettes et ordinateurs portables.';

const faqData = [
  {
    question: 'Quelle fréquence utiliser pour éjecter l\'eau d\'un haut-parleur ?',
    answer:
      'Une tonalité grave autour de 165 Hz est un bon point de départ pratique, car elle fait bouger visiblement les petits diaphragmes sans recourir à des fréquences aiguës perçantes. Certains appareils répondent mieux entre 145 Hz et 190 Hz, c\'est pourquoi l\'outil propose les trois préréglages.',
  },
  {
    question: 'Une tonalité sonore peut-elle retirer toute l\'eau de mon téléphone ?',
    answer:
      'Non. Elle peut aider à secouer les gouttelettes hors de la grille ou de la chambre acoustique du haut-parleur, mais elle ne peut pas sécher le liquide derrière les joints, à l\'intérieur des ports ou sous l\'écran. Si l\'appareil a été immergé, éteignez-le et suivez les consignes de séchage du fabricant.',
  },
  {
    question: 'Est-ce sans danger pour les haut-parleurs ?',
    answer:
      'Utilisez des sessions courtes, commencez en dessous du volume maximal et arrêtez si vous entendez des grattements, des claquements ou de la distorsion. Un petit haut-parleur de téléphone n\'est pas conçu pour une lecture prolongée de basses à fort volume. Plusieurs cycles courts sont donc plus sûrs qu\'une longue rafale.',
  },
  {
    question: 'Pourquoi mon haut-parleur sonne-t-il étouffé après avoir été mouillé ?',
    answer:
      'Un film d\'eau ajoute de la masse et de l\'amortissement au diaphragme du haut-parleur et peut obstruer les ouvertures de la grille. Cela réduit les aigus, affaiblit la clarté de la voix et rend les basses floues jusqu\'à ce que les gouttelettes bougent ou s\'évaporent.',
  },
  {
    question: 'Dois-je utiliser du riz après que mon téléphone a été mouillé ?',
    answer:
      'Le riz n\'est pas une méthode de réparation fiable et peut laisser de l\'amidon ou des particules dans les ports. Utilisez plutôt un flux d\'air, un chiffon non pelucheux absorbant et les instructions du fabricant. L\'éjection sonore concerne uniquement la sortie du haut-parleur, pas l\'ensemble de l\'appareil.',
  },
];

const howToData = [
  {
    name: 'Retirez les coques et orientez le haut-parleur vers le bas',
    text: 'Enlevez toute coque qui recouvre la grille, tenez l\'appareil de façon à ce que la gravité aide les gouttelettes à quitter l\'ouverture du haut-parleur et gardez les ports dégagés.',
  },
  {
    name: 'Commencez par le préréglage standard de 165 Hz',
    text: 'Appuyez sur Démarrer et laissez la tonalité jouer pendant 30 secondes. Le mouvement du diaphragme peut déloger les gouttelettes piégées dans la maille de la grille ou dans la chambre acoustique peu profonde.',
  },
  {
    name: 'Essayez les préréglages doux ou profond si nécessaire',
    text: 'Si le son reste étouffé, testez 145 Hz ou 190 Hz pendant un cycle court. Les haut-parleurs de tailles différentes résonnent à des fréquences différentes.',
  },
  {
    name: 'Arrêtez si le haut-parleur distord',
    text: 'Baissez le volume ou arrêtez immédiatement si la tonalité devient dure, bourdonnante ou mécaniquement forcée. La distorsion signifie que le transducteur est trop sollicité.',
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

export const content: ToolLocaleContent<WaterEjectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Comment Fonctionne une Tonalité d\'Éjection d\'Eau', level: 2 },
    {
      type: 'paragraph',
      html: 'Le haut-parleur d\'un téléphone est un petit diaphragme mobile. Lorsqu\'une tonalité basse fréquence est jouée, le diaphragme avance et recule de nombreuses fois par seconde. À <strong>165 Hz</strong>, ce mouvement se produit 165 fois par seconde. Si de l\'eau se trouve sur la grille ou est piégée juste à l\'intérieur de la sortie acoustique, l\'air en mouvement peut briser la tension superficielle des gouttelettes et les pousser vers l\'ouverture.',
    },
    {
      type: 'paragraph',
      html: 'Le processus est mécanique, pas chimique. Le son n\'évapore pas le liquide et ne rend pas les composants électroniques internes étanches. Il s\'agit plutôt d\'un cycle de vibration contrôlée pour la sortie du haut-parleur, utile lorsque la voix, les notifications ou la musique sonnent étouffées après la pluie, une éclaboussure, une salle de bain ou un rinçage rapide.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '165 Hz', label: 'fréquence de départ standard', icon: 'mdi:sine-wave' },
        { value: '30 s', label: 'premier cycle court de nettoyage', icon: 'mdi:timer-outline' },
        { value: '145-190 Hz', label: 'plage d\'accord pratique', icon: 'mdi:tune' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ce que la tonalité peut et ne peut pas faire',
      badge: 'Portée',
      icon: 'mdi:information',
      html: 'La tonalité peut aider à déplacer les gouttelettes mobiles dans le conduit du haut-parleur. Elle ne peut pas retirer le liquide des ports de charge, des tiroirs SIM, des microphones, des modules caméra, des joints adhésifs ni de l\'espace sous l\'écran.',
    },
    { type: 'title', text: 'Quand l\'Utiliser', level: 2 },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Le haut-parleur sonne faible, étouffé ou avec un bruit de bulles après une éclaboussure.',
        'Un côté du haut-parleur stéréo du téléphone sonne moins fort que l\'autre.',
        'La grille du haut-parleur de l\'ordinateur portable ou de la tablette a retenu des gouttelettes après le nettoyage.',
        'De la poussière ou des peluches sont visibles sur la grille et la lecture normale sonne terne.',
        'L\'appareil fonctionne normalement, charge normalement et n\'affiche aucun avertissement de liquide dans un port.',
      ],
    },
    {
      type: 'tip',
      title: 'Meilleure position physique',
      html: 'Orientez la grille du haut-parleur vers le bas ou légèrement vers le bas. La tonalité fournit le mouvement, mais la gravité décide où va la gouttelette libérée. Retirer la coque compte également, car de nombreuses coques créent une petite poche qui retient l\'eau près de la sortie.',
    },
    {
      type: 'card',
      icon: 'mdi:cellphone-sound',
      title: 'Pourquoi les haut parleurs de téléphone sont rapidement affectés',
      html: 'Les téléphones modernes utilisent des transducteurs compacts à haute excursion et des canaux acoustiques minuscules. Une gouttelette qui serait inoffensive sur un grand haut-parleur de bureau peut couvrir une partie significative de la grille d\'un téléphone, modifiant la pression et amortissant suffisamment le diaphragme pour que les voix semblent lointaines.',
    },
    {
      type: 'table',
      headers: ['Symptôme', 'Cause probable', 'Que tester'],
      rows: [
        ['Voix étouffée', 'Film d\'eau sur la grille', 'Lancez 165 Hz pendant 30 secondes, haut-parleur vers le bas'],
        ['Bourdonnement pendant la tonalité', 'Gouttelette en mouvement ou transducteur surmené', 'Baissez le volume ; arrêtez si le bourdonnement persiste'],
        ['Un haut-parleur plus faible', 'Une seule sortie est obstruée', 'Faites pivoter l\'appareil pour que cette sortie pointe vers le bas'],
        ['Aucun son', 'Sortie muette, routage Bluetooth ou panne matérielle', 'Vérifiez le routage audio avant de répéter les cycles'],
      ],
    },
    { type: 'title', text: 'Choisir la Bonne Fréquence', level: 2 },
    {
      type: 'paragraph',
      html: 'Il n\'y a pas de nombre magique universel, car la taille du haut-parleur, la forme de la grille, la conception de la membrane étanche et la géométrie de la coque diffèrent. La raison pour laquelle <strong>165 Hz</strong> est populaire est que cette fréquence est suffisamment basse pour créer un débattement visible du cône sur de nombreux petits haut-parleurs, tout en restant dans une plage que la plupart des appareils peuvent reproduire fort.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '145 Hz doux',
          description: 'Utile pour les haut-parleurs très petits ou sollicités lorsque la tonalité standard semble agressive.',
          icon: 'mdi:leaf',
          points: ['Tonalité plus grave', 'Mouvement moins agressif', 'Bon premier essai'],
        },
        {
          title: '165 Hz standard',
          description: 'Point de départ équilibré pour les téléphones, les tablettes et de nombreuses ouvertures de haut-parleurs d\'ordinateurs portables.',
          icon: 'mdi:water-sync',
          highlight: true,
          points: ['Préréglage par défaut', 'Fort débattement du diaphragme', 'Meilleur premier cycle'],
        },
        {
          title: '190 Hz profond',
          description: 'Une poussée légèrement plus haute qui peut fonctionner quand un haut-parleur particulier résonne au-dessus de 165 Hz.',
          icon: 'mdi:waves',
          points: ['Vibration plus serrée', 'Deuxième passage utile', 'Évitez les longs cycles'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Basses fréquences contre hautes fréquences',
      items: [
        { pro: 'Les basses fréquences déplacent plus d\'air et de débattement de diaphragme sur les petits haut-parleurs.', con: 'Elles peuvent distordre plus vite au volume maximal.' },
        { pro: 'Les hautes fréquences sont plus faciles à entendre à travers certaines grilles.', con: 'Elles déplacent généralement moins d\'air et peuvent être désagréables ou inaudibles pour certains utilisateurs.' },
        { pro: 'Une courte tonalité basse est facile à juger à l\'oreille.', con: 'Elle ne doit pas être bouclée pendant de longues minutes sans pauses.' },
      ],
    },
    {
      type: 'message',
      title: 'Règle d\'accord de fréquence',
      ariaLabel: 'Règle d\'accord de fréquence',
      html: 'Si le haut-parleur sonne clair après un cycle de 30 secondes, arrêtez. Plus de cycles ne sont pas une routine d\'entretien ; c\'est seulement une aide à la récupération après que du liquide ou des débris ont atteint l\'ouverture du haut-parleur.',
    },
    { type: 'title', text: 'Procédure de Nettoyage Sûre', level: 2 },
    {
      type: 'paragraph',
      html: 'Commencez en dessous du volume maximal du système, surtout sur les ordinateurs portables et les tablettes dotés de haut-parleurs plus grands. Augmentez seulement jusqu\'à ce que la tonalité soit clairement audible et que l\'appareil vibre légèrement. Si vous entendez un claquement sec, un grattement ou une chute soudaine du volume, arrêtez l\'outil et laissez l\'appareil sécher naturellement.',
    },
    {
      type: 'list',
      icon: 'mdi:numeric',
      items: [
        'Déconnectez les écouteurs et les haut-parleurs Bluetooth pour que la tonalité passe par le haut-parleur mouillé.',
        'Séchez l\'extérieur avec un chiffon non pelucheux avant de jouer le son.',
        'Tenez la sortie du haut-parleur vers le bas et gardez votre main éloignée de la grille.',
        'Lancez 30 secondes à 165 Hz.',
        'Attendez une minute, testez l\'audio vocal normal, puis répétez une seule fois si nécessaire.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'N\'utilisez pas de chaleur ni d\'air comprimé',
      badge: 'À éviter',
      icon: 'mdi:alert',
      html: 'Les sèche-cheveux, les fours et l\'air comprimé à haute pression peuvent pousser l\'humidité plus profondément, déformer les joints ou endommager les membranes. La tonalité sonore est plus douce car elle part du mouvement du haut-parleur déjà intégré dans l\'appareil.',
    },
    {
      type: 'summary',
      title: 'Liste de contrôle rapide de sécurité',
      items: [
        'Les cycles courts valent mieux qu\'une longue lecture continue.',
        'Baissez le volume si la tonalité bourdonne fortement.',
        'Arrêtez si l\'appareil affiche des avertissements de détection de liquide.',
        'L\'éjection sonore aide uniquement la sortie du haut-parleur, pas tout le téléphone.',
      ],
    },
    { type: 'title', text: 'La Résistance à l\'Eau N\'est Pas l\'Étanchéité', level: 2 },
    {
      type: 'paragraph',
      html: 'De nombreux téléphones annoncent une résistance à l\'eau, mais cette certification est mesurée dans des conditions de laboratoire définies. L\'exposition réelle à l\'eau inclut le mouvement, le savon, le sel, la chaleur, la pression, l\'âge, les impacts et les joints usés. Une tonalité de nettoyage de haut-parleur ne restaure pas un joint et ne valide pas qu\'un téléphone peut être chargé en toute sécurité.',
    },
    {
      type: 'table',
      headers: ['Exposition', 'Utilité de la tonalité', 'Action supplémentaire'],
      rows: [
        ['Pluie légère', 'Souvent utile si l\'audio est étouffé', 'Séchez l\'extérieur et lancez un cycle court'],
        ['Éclaboussure d\'eau propre', 'Utile pour les gouttelettes près de la grille', 'Gardez les ports secs avant de charger'],
        ['Eau de piscine ou de mer', 'Limité ; des résidus peuvent subsister', 'Rincez uniquement si le fabricant l\'autorise, puis faites réviser si nécessaire'],
        ['Savon, soda ou café', 'Faible ; les résidus collants altèrent la grille', 'Éteignez et cherchez des conseils de nettoyage'],
        ['Immersion totale', 'Pas suffisant', 'Suivez les étapes d\'urgence du fabricant'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Diaphragme', definition: 'La surface mobile à l\'intérieur d\'un haut-parleur qui pousse l\'air pour créer du son.' },
        { term: 'Résonance', definition: 'Fréquence à laquelle un système physique se déplace plus efficacement parce que sa forme et sa masse favorisent cette vibration.' },
        { term: 'Tension superficielle', definition: 'La force qui permet à une gouttelette de s\'accrocher à une grille ou une membrane au lieu de s\'écouler immédiatement.' },
        { term: 'Chambre acoustique', definition: 'Le minuscule conduit interne qui guide le son du haut-parleur depuis le transducteur jusqu\'à l\'ouverture de l\'appareil.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:volume-high',
      title: 'Pourquoi le son peut sembler plus fort après le nettoyage',
      html: 'L\'eau bloque d\'abord les hautes fréquences car les petites longueurs d\'onde sont facilement dispersées par les obstructions de la grille. Une fois les gouttelettes déplacées, les consonnes, les sons de notification et les détails de la voix reviennent souvent avant que les basses ne changent de façon notable.',
    },
    { type: 'title', text: 'Nettoyage de la Poussière et des Débris', level: 2 },
    {
      type: 'paragraph',
      html: 'La même vibration peut desserrer la poussière sèche, les peluches ou les particules posées sur la maille du haut-parleur, mais elle ne remplace pas un nettoyage physique soigneux. Si les débris sont collants, gras ou incrustés dans la grille, la vibration seule risque de ne faire que les déplacer. Utilisez une brosse douce et sèche sur l\'extérieur et évitez d\'insérer des outils métalliques dans l\'ouverture.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Vibration sonore',
          description: 'Bonne pour les particules mobiles et les gouttelettes qui peuvent se déplacer librement.',
          icon: 'mdi:sine-wave',
          points: ['Sans contact avec la grille', 'Rapide', 'Idéal pour les éclaboussures récentes'],
        },
        {
          title: 'Brossage extérieur doux',
          description: 'Meilleur pour les peluches ou la poussière visibles à la surface de la maille.',
          icon: 'mdi:brush',
          points: ['Fonctionne sans bruit fort', 'Évite de surmener le haut-parleur', 'Nécessite du soin près des membranes'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Après des environnements poussiéreux',
      html: 'Jouez la tonalité à volume modéré, puis essuyez la grille extérieure avec un chiffon en microfibre sec. N\'ajoutez pas d\'alcool ni de nettoyant liquide, sauf si le fabricant de l\'appareil le recommande explicitement pour cette surface.',
    },
    { type: 'title', text: 'Notes Spécifiques par Appareil', level: 2 },
    {
      type: 'paragraph',
      html: 'Les téléphones, les tablettes et les ordinateurs portables placent leurs haut-parleurs dans des configurations acoustiques différentes. Un haut-parleur inférieur de téléphone a généralement une sortie courte près du port de charge, donc l\'eau peut partir rapidement lorsque la grille est orientée vers le bas. Une tablette peut utiliser un canal latéral plus long, ce qui signifie que la tonalité peut rendre le son plus clair progressivement plutôt qu\'en une seule poussée évidente. Un haut-parleur d\'ordinateur portable émet souvent à travers le pont du clavier ou une fente inférieure, donc le liquide peut se trouver sur une couche de tissu, une maille plastique ou une grille externe plutôt que directement sur le transducteur.',
    },
    {
      type: 'paragraph',
      html: 'Pour un téléphone, faites pivoter l\'appareil jusqu\'à ce que le haut-parleur qui sonne étouffé soit le point le plus bas. Pour une tablette, essayez les orientations portrait et paysage, car l\'ouverture obstruée peut se trouver sur un bord différent de celui attendu. Pour un ordinateur portable, gardez la machine sur une surface stable et sèche et évitez d\'incliner le liquide vers le clavier, les charnières ou les grilles de ventilation. La tonalité doit aider le conduit du haut-parleur ; elle ne doit pas encourager l\'eau à se déplacer à travers l\'appareil.',
    },
    {
      type: 'table',
      headers: ['Type d\'appareil', 'Orientation recommandée', 'Conseil de cycle'],
      rows: [
        ['Téléphone', 'Grille du haut-parleur vers le bas, coque retirée', 'Un cycle de 30 secondes, puis testez l\'audio vocal'],
        ['Tablette', 'Bord obstrué orienté vers le bas', 'Commencez à volume modéré car les haut-parleurs sont plus grands'],
        ['Ordinateur portable', 'Position normale stable sauf si le liquide est sur une grille externe', 'Utilisez un volume plus bas et arrêtez si le châssis vibre fortement'],
        ['Montre connectée', 'Suivez d\'abord les consignes d\'éjection d\'eau du fabricant', 'Utilisez la tonalité web uniquement si le navigateur peut router le son vers le haut-parleur de la montre'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Vérification Bluetooth et routage audio',
      badge: 'Avant de commencer',
      icon: 'mdi:bluetooth-audio',
      html: 'Si des écouteurs sans fil, un système de voiture ou un haut-parleur externe est connecté, la tonalité peut être jouée sur la mauvaise sortie. Déconnectez l\'audio Bluetooth avant de commencer, puis confirmez qu\'une sonnerie normale ou une courte vidéo est bien diffusée par le haut-parleur mouillé.',
    },
    {
      type: 'card',
      icon: 'mdi:microphone-question',
      title: 'Pourquoi le microphone est différent',
      html: 'Le port du microphone est un chemin d\'entrée avec une maille protectrice et un minuscule capteur de pression, pas un diaphragme de haut-parleur qui peut pousser l\'air vers l\'extérieur. Ne partez pas du principe qu\'une tonalité d\'éjection d\'eau nettoiera les enregistrements étouffés du microphone. Laissez l\'appareil sécher et évitez de fourrer quoi que ce soit dans le trou du microphone.',
    },
    { type: 'title', text: 'Volume, Distorsion et Confort Auditif', level: 2 },
    {
      type: 'paragraph',
      html: 'Une tonalité d\'éjection d\'eau est volontairement répétitive et peut être inconfortable dans une pièce silencieuse. L\'objectif n\'est pas le volume maximal, mais un mouvement suffisant du diaphragme pour perturber les gouttelettes. Si la tonalité est douloureuse, réduisez le volume ou éloignez l\'appareil tout en gardant la sortie du haut-parleur dégagée. Le confort auditif compte, car un cycle de nettoyage réussi devrait prendre quelques secondes, pas une exposition prolongée.',
    },
    {
      type: 'paragraph',
      html: 'La distorsion est un signal d\'avertissement utile. Une tonalité basse propre sonne stable, même si le corps du téléphone vibre. Une mauvaise tonalité sonne crépitante, rugueuse, métallique ou instable. Cela peut arriver parce que l\'eau bouge, parce que le haut-parleur atteint sa limite de débattement ou parce que l\'amplificateur de l\'appareil écrête. Baisser le volume est la première correction ; répéter plus fort est la mauvaise réaction.',
    },
    {
      type: 'list',
      icon: 'mdi:volume-medium',
      items: [
        'Utilisez les boutons de volume de l\'appareil et le curseur de volume de l\'outil ensemble ; l\'un ou l\'autre peut rendre la sortie trop forte.',
        'Évitez de placer le haut-parleur contre une table, un oreiller ou la main, car bloquer le flux d\'air augmente les claquements.',
        'Faites une pause entre les cycles pour que le transducteur et l\'amplificateur ne soient pas sollicités en continu à haute puissance.',
        'Si la musique normale grésille encore après le temps de séchage, traitez cela comme un symptôme de panne plutôt qu\'un problème de nettoyage.',
      ],
    },
    {
      type: 'message',
      title: 'Règle de confort',
      ariaLabel: 'Règle de confort',
      html: 'Si la tonalité vous semble trop forte pour vos oreilles, elle est déjà plus forte que nécessaire pour un premier essai. L\'éjection d\'eau dépend du mouvement et de l\'orientation, pas d\'un volume punitif.',
    },
    { type: 'title', text: 'Dépannage Après la Tonalité', level: 2 },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Consultez un réparateur si ces signes apparaissent',
      badge: 'Stop',
      icon: 'mdi:close-octagon',
      html: 'Arrêtez d\'utiliser l\'éjection sonore si l\'appareil chauffe anormalement, s\'éteint, affiche des avertissements de liquide, n\'a aucune sortie après vérification des routages ou si le haut-parleur crépite pendant la voix normale. Ces symptômes peuvent indiquer des dommages au-delà des gouttelettes dans la grille.',
    },
    {
      type: 'table',
      headers: ['Résultat après 30 secondes', 'Signification', 'Étape suivante'],
      rows: [
        ['Son plus clair', 'La gouttelette a probablement bougé', 'Arrêtez et laissez l\'appareil reposer'],
        ['Petite amélioration', 'Un peu d\'humidité persiste', 'Attendez, puis répétez un court cycle'],
        ['Aucun changement', 'L\'obstruction peut être plus profonde ou collante', 'Séchez naturellement et inspectez le routage et les réglages'],
        ['Distorsion aggravée', 'Le transducteur peut être sollicité ou endommagé', 'Arrêtez, baissez le volume et envisagez une révision'],
      ],
    },
    {
      type: 'summary',
      title: 'À retenir en pratique',
      items: [
        'Utilisez d\'abord 165 Hz car cette fréquence équilibre mouvement et compatibilité.',
        'Orientez la grille vers le bas et gardez le cycle court.',
        'Considérez la tonalité comme une récupération du haut-parleur, pas un séchage complet de l\'appareil.',
        'Les consignes du fabricant concernant les liquides priment sur tout outil en ligne.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Prêt à éjecter',
    statusPlaying: 'Tonalité en cours',
    statusComplete: 'Cycle terminé',
    frequencyLabel: 'Fréquence',
    volumeLabel: 'Volume',
    durationLabel: 'Durée',
    startButton: 'Démarrer l\'éjecteur d\'eau',
    stopButton: 'Arrêter la tonalité',
    hertzUnit: 'Hz',
    secondsShort: 's',
    presetGentle: 'Doux',
    presetStandard: '165 Hz',
    presetDeep: 'Profond',
    safetyTitle: 'Sécurité avant tout',
    safetyText: 'Commencez sous le volume maximal et arrêtez si le haut-parleur vibre ou distord.',
    bestResult: 'Meilleur résultat',
    bestResultText: 'Retirez la coque, orientez le haut-parleur vers le bas et lancez un cycle court.',
  },
};
