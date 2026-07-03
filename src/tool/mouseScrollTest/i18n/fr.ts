import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseScrollTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-molette-souris';
const title = 'Test de Molette de Souris';
const description = 'Diagnostiquez les sauts de molette, les rebonds inverses, la direction de défilement incohérente et les signaux d\'encodeur faibles avec un test local de molette de souris dans le navigateur.';

const faqData = [
  {
    question: 'Que détecte un test de molette de souris ?',
    answer: 'Un test de molette enregistre les événements de la molette et recherche les changements de direction instables, les petits deltas faibles et le défilement incohérent. Ces symptômes apparaissent souvent lorsque l\'encodeur de la molette est sale, usé, désaligné ou électroniquement bruité.',
  },
  {
    question: 'Qu\'est-ce qu\'un saut de défilement inverse ?',
    answer: 'Un saut inverse se produit lorsque vous faites défiler dans une direction mais que l\'ordinateur reçoit un court événement dans la direction opposée. S\'il se répète pendant un défilement régulier, c\'est un signe fort de rebond de l\'encodeur ou de contamination.',
  },
  {
    question: 'Ce test fonctionne-t-il avec les pavés tactiles ?',
    answer: 'Oui, mais le résultat est plus pertinent pour les molettes physiques. Les pavés tactiles et les molettes à défilement fluide créent de nombreux petits deltas, le contrôle de sensibilité aide donc à séparer les mouvements fins intentionnels du jitter suspect.',
  },
  {
    question: 'Le test télécharge-t-il mes données de souris ?',
    answer: 'Non. Le calcul s\'exécute localement dans votre navigateur. L\'outil utilise uniquement les événements de molette lorsque le pointeur se trouve dans la zone de capture.',
  },
];

const howToData = [
  {
    name: 'Placez le pointeur sur le panneau de capture',
    text: 'Déplacez le curseur dans la zone du laboratoire de défilement pour que la page puisse capturer les événements de molette sans déplacer le document.',
  },
  {
    name: 'Faites défiler régulièrement dans une direction',
    text: 'Testez une direction à la fois: faites défiler lentement vers le haut sur plusieurs crans, réinitialisez ou mettez en pause, puis testez vers le bas séparément. Les changements rapides et intentionnels de direction peuvent créer de fausses lectures de saut inverse.',
  },
  {
    name: 'Surveillez les sauts inverses',
    text: 'Si le compteur d\'inversions augmente alors que votre doigt continue dans une direction, répétez le même mouvement pour confirmer le schéma.',
  },
  {
    name: 'Réglez la sensibilité',
    text: 'Augmentez la sensibilité pour les pavés tactiles fluides ou réduisez-la pour des tests stricts de molette mécanique. Le score de stabilité se met à jour immédiatement.',
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

export const content: ToolLocaleContent<MouseScrollTestUI> = {
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
      text: 'Test de Molette de Souris: Détectez les Sauts et les Inversions de Défilement',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Une molette défaillante tombe rarement en panne d\'un coup. Cela commence généralement par de petits symptômes: un cran fait défiler dans la mauvaise direction, la page remonte pendant que vous descendez, ou la molette semble normale mais le navigateur reçoit des événements incohérents. Ce test de molette enregistre le signal qui parvient au navigateur et met en évidence les schémas pertinents pour le diagnostic.',
    },
    {
      type: 'paragraph',
      html: 'L\'objectif n\'est pas de mesurer le déplacement de la page. Le signal utile est la <strong>cohérence de direction</strong>. Lorsque vous tournez une molette mécanique régulièrement vers le bas, le flux d\'événements doit rester dans cette direction. Les courts événements en sens inverse dans une fenêtre temporelle étroite sont suspects car ils correspondent au comportement des encodeurs sales ou usés.',
    },
    {
      type: 'title',
      text: 'Ce que mesure l\'outil',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Total de crans de molette capturés dans le panneau de test',
        'Sauts inverses: changements rapides de signe alors que la direction précédente est encore récente',
        'Plus longue série propre: nombre d\'événements consécutifs restés dans une direction cohérente',
        'Dernier delta: direction et amplitude brutes du plus récent événement de molette',
        'Activité verticale par rapport à l\'horizontale, utile pour les molettes inclinables et les pavés tactiles',
      ],
    },
    {
      type: 'table',
      headers: ['Signal', 'Schéma sain', 'Schéma suspect'],
      rows: [
        ['Molette verticale', 'Longues séries d\'événements haut ou bas pendant un défilement régulier', 'Événements alternés haut/bas alors que votre doigt maintient une direction'],
        ['Inclinaison horizontale', 'Événements gauche ou droite uniquement lors de l\'utilisation de gestes d\'inclinaison', 'Mouvement latéral inattendu lors de l\'utilisation normale de la molette verticale'],
        ['Petits deltas', 'Petites valeurs occasionnelles sur les molettes fluides ou pavés tactiles', 'Forte proportion de valeurs minuscules instables sur une molette mécanique crantée'],
        ['Score de stabilité', 'Reste élevé sur plusieurs passages délibérés', 'Chute à plusieurs reprises car des inversions surviennent dans le même test de direction'],
      ],
    },
    {
      type: 'title',
      text: 'Causes courantes des sauts de molette',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La plupart des molettes utilisent un encodeur qui convertit la rotation en impulsions. La poussière, l\'oxydation, les contacts usés, un axe de molette desserré, des problèmes de filtrage du firmware ou un câble endommagé peuvent rendre ces impulsions incohérentes. Lorsque l\'encodeur signale brièvement la mauvaise phase, le système d\'exploitation peut recevoir un événement en sens inverse même si la molette continuait de tourner dans la direction d\'origine.',
    },
    {
      type: 'table',
      headers: ['Symptôme', 'Cause probable', 'Prochaine vérification'],
      rows: [
        ['La page remonte en défilant vers le bas', 'Rebond d\'encodeur ou saleté dans le mécanisme', 'Faites un passage lent vers le bas et surveillez le compteur d\'inversions'],
        ['Une seule application défile mal', 'Lissage applicatif, mode zoom ou raccourci souris personnalisé', 'Testez dans le navigateur et comparez avec une autre application'],
        ['La molette fonctionne après avoir soufflé, puis échoue à nouveau', 'Déplacement temporaire de débris ou contacts d\'encodeur usés', 'Répétez après quelques minutes d\'utilisation normale'],
        ['Un mouvement horizontal inattendu apparaît', 'Bruit de molette inclinable, geste du pavé tactile ou mappage du pilote', 'Vérifiez l\'indicateur de l\'axe horizontal pendant le défilement vertical'],
        ['La souris sans fil défile de façon erratique', 'Batterie faible, distance du récepteur ou interférences', 'Retestez avec une batterie neuve et le récepteur proche de la souris'],
      ],
    },
    {
      type: 'title',
      text: 'Comment tester de façon fiable',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Placez le pointeur dans le panneau de capture avant de faire défiler pour que la page empêche le mouvement normal de la page',
        'Testez une direction à la fois: faites défiler lentement vers le haut sur 10 à 20 crans sans changer de direction',
        'Réinitialisez ou mettez en pause, puis répétez le même passage unidirectionnel vers le bas',
        'N\'alternez pas rapidement entre haut et bas, car les changements rapides intentionnels peuvent ressembler à des sauts inverses',
        'Si des inversions apparaissent, répétez la direction défaillante plusieurs fois pour confirmer qu\'elle est reproductible',
        'Comparez avec une autre souris sur le même ordinateur si vous devez séparer le matériel du logiciel',
      ],
    },
    {
      type: 'title',
      text: 'Interpréter le score',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le score de stabilité est un résumé rapide. Un score élevé signifie que l\'outil a observé une direction cohérente et peu de petits deltas incertains. Un score bas ne prouve pas automatiquement que la souris est défectueuse, surtout sur les pavés tactiles ou les molettes fluides haute résolution, mais des sauts inverses répétés lors d\'un test lent unidirectionnel sont une preuve solide d\'un vrai problème de molette.',
    },
    {
      type: 'table',
      headers: ['Résultat', 'Signification', 'Action recommandée'],
      rows: [
        ['Aucune inversion et longues séries propres', 'Le signal de la molette semble cohérent', 'Continuer à tester uniquement si des symptômes apparaissent en usage réel'],
        ['Une inversion isolée', 'Pourrait être un changement accidentel de direction ou un événement bruité', 'Répéter la même direction lentement'],
        ['Plusieurs inversions dans le même passage', 'Probablement rebond d\'encodeur, saleté ou usure de la molette', 'Retester sur un autre ordinateur et documenter le résultat'],
        ['Beaucoup d\'événements de jitter mais pas d\'inversions', 'La sensibilité est peut-être trop faible pour le type d\'appareil', 'Augmenter la sensibilité pour les pavés tactiles ou les appareils à défilement fluide'],
        ['Événements horizontaux pendant l\'utilisation de la molette verticale', 'Bruit possible de molette inclinable ou de mappage du pilote', 'Désactiver le logiciel souris personnalisé et retester'],
      ],
    },
    {
      type: 'title',
      text: 'Molette mécanique versus pavé tactile',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une molette mécanique crantée produit normalement des pas directionnels clairs. Un pavé tactile ou une molette à rotation libre peut produire de nombreux petits deltas car le système d\'exploitation applique un défilement fluide. C\'est pourquoi cet outil inclut un contrôle de sensibilité: l\'augmenter ignore les mouvements minuscules et concentre le test sur les changements de direction suffisamment grands pour être pertinents.',
    },
    {
      type: 'title',
      text: 'Que tester avant de remplacer la souris',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Testez dans un autre navigateur pour exclure un gestionnaire de molette spécifique à la page',
        'Désactivez le logiciel souris du fabricant, l\'accélération du défilement ou les couches de macro pendant le diagnostic',
        'Pour les souris sans fil, utilisez une batterie neuve et rapprochez le récepteur',
        'Nettoyez autour de la molette avec de l\'air comprimé pendant que la souris est débranchée ou éteinte',
        'Si la souris est sous garantie, enregistrez le schéma d\'inversion répété comme preuve',
      ],
    },
    {
      type: 'paragraph',
      html: 'Les tests dans le navigateur ne peuvent pas inspecter l\'encodeur électriquement, mais ils peuvent montrer exactement ce que votre logiciel normal reçoit. Si le navigateur reçoit des événements de molette dans la mauvaise direction pendant un défilement soigneux et unidirectionnel, d\'autres applications peuvent également les recevoir.',
    },
  ],
  ui: {
    badge: 'Laboratoire de Signal de Molette',
    captureTitle: 'Faites défiler dans le panneau de signal',
    captureHint: 'Utilisez des passages réguliers dans une direction pour exposer les sauts inverses',
    focusLockTitle: 'Activer cette zone de défilement',
    focusLockText: 'Cliquez sur cette zone et faites défiler ici. La page ne bougera pas tant que cette zone est active.',
    stabilityScore: 'Score de stabilité',
    statusIdle: 'Faites défiler sur le panneau pour commencer à mesurer la cohérence de la molette',
    statusClean: 'La direction de la molette est stable dans les échantillons capturés',
    statusWarning: 'Sauts inverses détectés lors du défilement récent',
    statusMixed: 'Nombreux petits deltas détectés; réglez la sensibilité pour cet appareil',
    directionNote: 'Testez une direction à la fois. Alterner rapidement entre haut et bas peut créer de faux sauts inverses.',
    totalTicks: 'Crans',
    reversals: 'Inversions',
    longestRun: 'Meilleure série',
    lastDelta: 'Dernier delta',
    verticalAxis: 'Vertical',
    horizontalAxis: 'Horizontal',
    dominantDirection: 'Dernière direction',
    upward: 'Haut',
    downward: 'Bas',
    leftward: 'Gauche',
    rightward: 'Droite',
    noDirection: 'Aucun mouvement',
    noDataValue: '-',
    sensitivityLabel: 'Sensibilité au jitter',
    sensitivityUnit: 'delta',
    reset: 'Réinitialiser',
    logTitle: 'Journal des événements de molette',
    emptyLog: 'Faites défiler sur le panneau avec un mouvement de molette lent et régulier.',
    cleanEvent: 'propre',
    reversalEvent: 'saut inverse',
    jitterEvent: 'delta minuscule',
  },
};
