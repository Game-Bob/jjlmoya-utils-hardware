import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDoubleClickTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-double-clic-souris';
const title = 'Test de Double Clic de Souris';
const description =
  'Testez chaque bouton de la souris et détectez les doubles clics indésirables, les interrupteurs usés et les rebonds de contact avec une mesure du temps par bouton dans votre navigateur.';

const faqData = [
  {
    question: "Qu'est-ce qu'un problème de double clic de souris ?",
    answer:
      "Un problème de double clic se produit lorsqu'une pression physique est signalée comme deux clics. Il peut affecter le bouton gauche, le bouton droit, le clic molette ou les boutons latéraux, et est généralement causé par l'usure de l'interrupteur, le rebond des contacts, les paramètres d'anti-rebond du micrologiciel ou l'instabilité du signal sans fil.",
  },
  {
    question: "Quel écart est considéré comme suspect ?",
    answer:
      "Les écarts très courts entre les clics sont suspects car les doubles clics humains prennent généralement plus de temps. Cet outil commence avec un seuil de 80 ms, mais vous pouvez l'ajuster selon la souris et votre style de test.",
  },
  {
    question: "Un navigateur peut-il prouver que l'interrupteur est cassé ?",
    answer:
      "Un navigateur ne peut pas inspecter directement l'interrupteur électrique, mais il peut enregistrer les événements de clic que votre système d'exploitation reçoit. Des écarts suspects répétés lors d'un test de clic simple sont une forte preuve de rebond ou de double clic indésirable.",
  },
  {
    question: 'Comment tester correctement ?',
    answer:
      "Cliquez lentement et délibérément, en visant des pressions simples. Si le compteur suspect augmente même lorsque vous ne faites pas intentionnellement de double clic, répétez le test sur un autre port USB, un autre navigateur et un autre ordinateur si possible.",
  },
];

const howToData = [
  {
    name: 'Définir le seuil de détection',
    text: "Commencez par 80 ms. Abaissez-le pour une détection stricte des rebonds ou augmentez-le si votre appareil produit des écarts accidentels légèrement plus larges.",
  },
  {
    name: 'Cliquez comme un clic simple normal',
    text: "Appuyez sur chaque bouton de la souris un clic à la fois sur le visuel de la souris. Ne faites pas intentionnellement de double clic lors du premier passage.",
  },
  {
    name: 'Surveillez le compteur suspect',
    text: "Si des événements suspects apparaissent pendant que vous faites des clics simples, vérifiez quel bouton visuel a été mis en surbrillance et comparez-le avec les pastilles d'événements compactes.",
  },
  {
    name: 'Comparez avec un autre appareil',
    text: "Une souris saine devrait garder un score élevé sous le même seuil. Comparer les appareils aide à distinguer les défauts matériels des paramètres logiciels.",
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

export const content: ToolLocaleContent<MouseDoubleClickTestUI> = {
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
      text: 'Test de Double Clic de Souris: Diagnostiquer le Rebond des Boutons en Ligne',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Une souris qui double-clique lorsque vous appuyez une seule fois n'est pas seulement agaçante. Elle peut ouvrir des dossiers par accident, annuler des actions de glisser-déposer, tirer deux coups dans un jeu, fermer des onglets du navigateur ou faire apparaître et disparaître les menus contextuels avant que vous puissiez les utiliser. Ce test de double clic de souris en ligne se concentre sur le signal diagnostique utile: <strong>l'écart de temps entre les événements de bouton signalés par votre système d'exploitation</strong>.",
    },
    {
      type: 'paragraph',
      html: "Contrairement à un simple compteur de clics, cet outil suit chaque bouton indépendamment: clic gauche, clic droit, clic molette, retour du navigateur et avance du navigateur. C'est important car une souris peut avoir un bouton droit défaillant alors que le bouton gauche est encore sain, ou un bouton latéral usé qui ne se déclenche qu'après des mois de jeu ou de raccourcis de productivité.",
    },
    {
      type: 'title',
      text: 'Ce Que Mesure Ce Test de Boutons de Souris',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Lorsque vous appuyez sur un bouton de souris, le navigateur reçoit un événement de pointeur contenant le code du bouton. L'outil stocke le dernier horodatage pour ce même bouton physique et le compare avec la pression suivante du même bouton. Si l'écart est plus court que le seuil choisi, l'événement est marqué comme suspect car un deuxième clic normal intentionnel prend généralement plus de temps.",
    },
    {
      type: 'list',
      items: [
        "Bouton gauche: utile pour détecter les doubles clics accidentels lors de l'ouverture de fichiers, la sélection de texte ou le déplacement de fenêtres",
        "Bouton droit: utile lorsque les menus contextuels clignotent, s'ouvrent deux fois ou se ferment immédiatement",
        "Bouton molette: utile pour les souris où le clic central ouvre plusieurs onglets ou échoue après une navigation intensive",
        "Boutons Retour et Avance: utiles pour les souris gaming et les souris de productivité avec des interrupteurs latéraux",
        "Mesure par bouton: évite de mélanger un clic gauche avec un clic droit et de l'appeler un faux double clic",
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi les Souris Commencent à Double-Cliquer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "La plupart des souris utilisent de petits interrupteurs mécaniques sous chaque bouton. Lorsque les contacts de l'interrupteur se ferment, le métal peut rebondir électriquement pendant une très courte période avant de se stabiliser. Le micrologiciel de la souris filtre normalement ce bruit avec une logique d'anti-rebond. À mesure que l'interrupteur s'use, le rebond peut devenir plus long, plus bruyant ou irrégulier, de sorte que l'ordinateur reçoit deux pressions de bouton même si votre doigt n'a fait qu'une seule pression physique.",
    },
    {
      type: 'paragraph',
      html: "Le double-clic n'est pas toujours causé par la même chose. Il peut s'agir de l'usure mécanique de l'interrupteur, d'un anti-rebond du micrologiciel réglé de manière trop agressive, de poussière ou d'oxydation à l'intérieur de l'interrupteur, d'instabilité des paquets sans fil, d'un logiciel de macro, d'un câble endommagé ou d'un paramètre du système d'exploitation qui rend les doubles clics accidentels plus faciles à remarquer.",
    },
    {
      type: 'table',
      headers: ['Symptôme', 'Cause Probable', 'Que Tester'],
      rows: [
        ['Un clic ouvre des fichiers comme en double-clic', "Rebond de l'interrupteur gauche ou confusion de la vitesse de double-clic du système d'exploitation", 'Testez Gauche avec des pressions simples lentes à 80 ms'],
        ["Le menu clic droit clignote ou se ferme", "Rebond de l'interrupteur droit ou logiciel interceptant les menus contextuels", 'Testez Droit et désactivez temporairement les utilitaires de souris'],
        ['Le clic central ouvre deux onglets', "Usure de l'interrupteur de la molette", 'Testez Molette avec des pressions simples délibérées'],
        ['Le bouton Retour saute deux pages', 'Rebond de l\'interrupteur latéral ou répétition du raccourci du navigateur', 'Testez Retour et Avance séparément'],
        ["Se produit uniquement en mode sans fil", 'Interférence sans fil, batterie faible ou placement du récepteur', "Retestez en mode filaire ou rapprochez le récepteur"],
      ],
    },
    {
      type: 'title',
      text: "Choisir le Bon Seuil d'Anti-Rebond",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Le seuil est l'écart maximal que cet outil considère encore comme suspect. La valeur par défaut, <strong>80 ms</strong>, est un juste milieu pratique: assez strict pour détecter de nombreux événements dupliqués indésirables, mais pas si agressif que chaque double-clic normal et délibéré devienne une défaillance matérielle.",
    },
    {
      type: 'table',
      headers: ['Seuil', 'Idéal Pour', "Comment l'interpréter"],
      rows: [
        ['30-50 ms', 'Vérifications strictes de rebond électrique', "Bon pour confirmer des événements dupliqués très rapides d'un interrupteur usé"],
        ['60-90 ms', 'Diagnostic général de double-clic de souris', 'Meilleure plage par défaut pour la plupart des souris gaming et de bureau'],
        ['100-140 ms', 'Interrupteurs usés intermittents', 'Utile lorsque la souris crée parfois des écarts accidentels plus larges'],
        ['150-180 ms', "Tests de stress et interrupteurs faibles", 'Utilisez avec précaution, car les doubles clics intentionnels rapides peuvent tomber dans cette plage'],
      ],
    },
    {
      type: 'title',
      text: 'Comment Effectuer un Test Fiable',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Pour le premier passage, ne faites pas intentionnellement de double clic. Appuyez sur chaque bouton de la souris lentement et délibérément, un bouton à la fois, pendant que le curseur est sur le visuel de la souris. Un interrupteur sain devrait produire des événements simples stables. Si le compteur suspect augmente pendant des pressions simples lentes, répétez le même test de bouton plusieurs fois pour confirmer le motif.",
    },
    {
      type: 'list',
      items: [
        'Testez Gauche avec 20 à 30 pressions lentes, puis Droit, puis Molette, puis les boutons latéraux',
        'Ne faites pas glisser la souris pendant le test de rebond de bouton, car le mouvement peut perturber le résultat de mesure',
        "Si un bouton montre des événements suspects, répétez le même test après avoir changé de port USB ou de navigateur",
        "Pour les souris sans fil, testez avec une batterie neuve et le récepteur près de la souris",
        "Si un seul bouton échoue de manière répétée, le défaut est probablement cet interrupteur spécifique plutôt que l'ensemble du dispositif",
      ],
    },
    {
      type: 'title',
      text: 'Interpréter les Résultats',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Résultat', 'Signification', 'Prochaine Étape Recommandée'],
      rows: [
        ['0 événement suspect après de nombreuses pressions', 'Les boutons testés semblent sains sous le seuil sélectionné', 'Gardez le seuil par défaut ou retestez plus tard si les symptômes reviennent'],
        ['1 événement suspect isolé', "Pourrait être un vrai rebond ou une pression rapide accidentelle", 'Répétez le même bouton lentement avant de tirer des conclusions'],
        ['Événements suspects répétés sur un bouton', "Signe fort de rebond d'interrupteur ou de contacts usés", 'Testez sur un autre ordinateur et documentez le résultat'],
        ['Événements suspects sur chaque bouton', 'Pourrait être un logiciel, un pilote, un utilitaire de macro ou l\'environnement du navigateur', 'Désactivez le logiciel de la souris et retestez'],
        ['Seul le mode sans fil échoue', 'Probablement la batterie, le placement du récepteur ou des interférences', 'Essayez le mode filaire ou rapprochez le récepteur'],
      ],
    },
    {
      type: 'paragraph',
      html: "Le score de santé est un résumé rapide, pas un verdict final. La preuve la plus importante est <strong>quel bouton</strong> a produit des événements suspects et si le motif se répète lorsque vous appuyez sur ce même bouton lentement. Un seul mauvais événement lors d'un test précipité est moins significatif que cinq événements suspects de clic droit lors de pressions simples délibérées.",
    },
    {
      type: 'title',
      text: 'Avant de Remplacer la Souris',
      level: 3,
    },
    {
      type: 'list',
      items: [
        "Vérifiez si votre logiciel de souris a un paramètre de temps d'anti-rebond et retestez après l'avoir modifié",
        'Désactivez les macros, les profils de tir rapide ou les réaffectations de boutons pendant le diagnostic',
        "Essayez un autre port USB, surtout si vous utilisez un hub ou un connecteur de panneau avant",
        "Pour les souris sans fil, testez avec le dongle sur un câble d'extension près du tapis de souris",
        'Comparez avec une autre souris sur le même ordinateur pour distinguer une défaillance matérielle du comportement logiciel',
      ],
    },
    {
      type: 'title',
      text: 'Réparation, Garantie et Preuves',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Si le défaut est mécanique, le nettoyage de la coque extérieure le résout rarement définitivement car le problème se trouve à l'intérieur des contacts de l'interrupteur. Certains utilisateurs remplacent le micro-interrupteur, mais cela nécessite une soudure et ne vaut pas le coup pour toutes les souris. Si la souris est sous garantie, des écarts suspects répétés sur le même bouton sont une preuve utile pour expliquer le problème au support.",
    },
    {
      type: 'paragraph',
      html: "Pour les réclamations de garantie, enregistrez une courte capture d'écran pendant que vous appuyez lentement sur le bouton défaillant. Assurez-vous que les pastilles d'événements montrent l'étiquette du bouton et le temps suspect. C'est plus clair que de dire 'ma souris double-clique parfois' car cela démontre le bouton réel et le temps approximatif de l'événement dupliqué indésirable.",
    },
    {
      type: 'title',
      text: "Limitations d'un Test de Souris Basé sur Navigateur",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Ce test mesure les événements qui atteignent le navigateur. Il ne peut pas inspecter directement la forme d'onde électrique à l'intérieur de l'interrupteur, et il ne peut pas contourner tous les pilotes, systèmes d'exploitation ou utilitaires du fabricant. Cela reste utile: si le navigateur reçoit des événements dupliqués, vos applications normales peuvent les recevoir aussi. Pour une validation de niveau ingénierie, des outils matériels tels que des oscilloscopes ou des testeurs d'interrupteurs fournissent des preuves plus approfondies, mais ils ne sont pas nécessaires pour la plupart des diagnostics utilisateur.",
    },
  ],
  ui: {
    badge: 'Labo Anti-Rebond',
    clickTarget: 'Matrice de Boutons',
    clickTargetHint: 'Appuyez sur gauche, droit, molette, retour et avance',
    totalClicks: 'Total',
    suspiciousClicks: 'Suspects',
    fastestGap: 'Écart le plus court',
    healthScore: 'Score de santé',
    thresholdLabel: 'Seuil de détection',
    thresholdUnit: 'ms',
    cleanEvent: 'propre',
    suspiciousEvent: 'suspect',
    reset: 'Réinitialiser',
    statusIdle: 'Appuyez sur chaque bouton de la souris pour le tester indépendamment',
    statusClean: 'Aucun rebond de bouton suspect détecté',
    statusWarning: 'Rebond suspect détecté sur un bouton de la souris',
    lastGap: 'Dernier événement',
    logTitle: 'Événements de bouton récents',
    emptyLog: 'Appuyez sur n\'importe quel bouton de la souris sur le corps de la souris.',
    leftButton: 'Gauche',
    middleButton: 'Molette',
    rightButton: 'Droit',
    backButton: 'Retour',
    forwardButton: 'Avance',
    otherButton: 'Autre',
  },
};
