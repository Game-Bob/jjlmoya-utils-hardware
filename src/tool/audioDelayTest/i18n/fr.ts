import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-delai-audio';
const title = 'Test de délai audio';
const description = 'Testez le décalage audio perçu des haut-parleurs, casques, appareils Bluetooth et de la synchronisation vidéo avec un test d impulsion local dans le navigateur.';

const faq = [
  {
    question: 'Que mesure exactement ce test de délai audio ?',
    answer: 'Le mode micro optionnel estime l intervalle entre un clic programmé par le navigateur et sa captation par votre micro. Le mode manuel aide à aligner le visuel et l audio à l oreille. Aucun des deux modes n est une mesure de laboratoire industrielle.',
  },
  {
    question: 'Puis-je tester la latence Bluetooth sans micro ?',
    answer: 'Oui. Lancez la séquence d impulsions, choisissez Bluetooth et déplacez le curseur d alignement jusqu à ce que le flash et le clic semblent coïncider. Le résultat est enregistré comme une correction d alignement.',
  },
  {
    question: 'Pourquoi le mode micro nécessite-t-il une autorisation ?',
    answer: 'Le navigateur a besoin de l accès au microphone pour entendre le clic de test après son émission par vos haut-parleurs. L audio est traité localement dans le navigateur et n est jamais téléversé.',
  },
  {
    question: 'Pourquoi le résultat du micro peut-il varier ?',
    answer: 'Les réflexions de la pièce, le traitement du micro, le contrôle automatique du gain et les tampons du système d exploitation peuvent modifier le résultat. Considérez le chiffre comme une estimation de la configuration actuelle.',
  },
  {
    question: 'Quel mode de test dois-je choisir ?',
    answer: 'Choisissez Haut-parleurs pour la pièce, Casque filaire pour une sortie directe, Bluetooth pour les appareils sans fil, et Synchro vidéo pour vérifier l alignement écran et lecteur.',
  },
  {
    question: 'Le test envoie-t-il mon audio vers un serveur ?',
    answer: 'Non. Le flux du microphone est lu localement par l analyseur du navigateur et le test ne téléverse aucun fichier audio.',
  },
];

const howTo = [
  {
    name: 'Choisir le chemin de lecture',
    text: 'Sélectionnez haut-parleurs, casque filaire, Bluetooth ou synchro vidéo pour définir la configuration testée.',
  },
  {
    name: 'Commencer par l impulsion manuelle',
    text: 'Cliquez sur Lancer le test et écoutez le clic tout en observant l impulsion visuelle cyan. Ajustez le curseur jusqu à l alignement.',
  },
  {
    name: 'Ajouter la mesure par micro si nécessaire',
    text: 'Activez le microphone, accordez l autorisation, placez le micro à la position d écoute et relancez la séquence.',
  },
  {
    name: 'Lire le résultat comme une estimation',
    text: 'Utilisez le délai médian et l indice de confiance uniquement comme une estimation de votre configuration.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<AudioDelayTestUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Test de délai audio pour Bluetooth et synchronisation vidéo', level: 2 },
    {
      type: 'paragraph',
      html: 'Ce test de délai audio basé sur le navigateur vous aide à vérifier l écart entre un repère visuel et un son sur votre appareil. Il est particulièrement utile pour les casques Bluetooth, les enceintes sans fil, les casques filaires et les contrôles de synchronisation vidéo. L outil génère un clic court localement dans le navigateur sans nécessiter de téléchargement de fichier.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Démarrage sans accès micro',
      badge: 'Privé et local',
      html: '<p>Le test d impulsion manuel fonctionne sans microphone. Observez le repère visuel et ajustez le curseur jusqu à ce que le ton et le flash semblent simultanés. Cela fournit une correction utile sans prétendre identifier une latence matérielle absolue.</p>',
    },
    {
      type: 'title',
      text: 'Comment tester la latence audio Bluetooth',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Sélectionnez Bluetooth et réglez un volume d écoute confortable avant de commencer.',
        'Exécutez la séquence d impulsions depuis le navigateur et l appareil habituels.',
        'Comparez l impulsion visuelle avec le clic plutôt que d évaluer un morceau de musique complet.',
        'Déplacez le curseur d alignement jusqu à ce que les deux repères se rejoignent, puis notez la correction.',
        'Répétez le test après avoir changé de codec, de système d exploitation ou de distance.',
      ],
    },
    {
      type: 'table',
      headers: ['Mode', 'Recommandé pour', 'Limitation principale'],
      rows: [
        ['Haut-parleurs', 'Écoute dans la pièce et enceintes TV', 'La distance et les réflexions de la pièce affectent le trajet acoustique.'],
        ['Casque filaire', 'Sortie casque directe', 'Le microphone peut avoir du mal à capter le son d un casque fermé.'],
        ['Bluetooth', 'Casques et enceintes sans fil', 'La mise en mémoire tampon du codec varie selon les appareils et applications.'],
        ['Synchro vidéo', 'Alignement écran et lecteur', 'Le lecteur vidéo peut ajouter son propre délai de rendu d image.'],
      ],
    },
    {
      type: 'title',
      text: 'Mesure par microphone optionnelle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lorsque l accès au microphone est activé, l outil surveille l analyseur local du micro et enregistre le temps écoulé entre l événement audio programmé et le pic acoustique détecté. Le résultat utilise la médiane des échantillons pour éviter qu une réflexion isolee ne fausse l estimation.',
    },
    {
      type: 'tip',
      title: 'Placer le micro à la position d écoute',
      html: 'Pour les haut-parleurs, placez le microphone là où vous vous asseyez et gardez la pièce silencieuse. Pour les tests de synchro vidéo, conservez la disposition habituelle.',
    },
    {
      type: 'title',
      text: 'Pourquoi les résultats de délai audio varient',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le délai audio résulte de toute la chaîne: horloge AudioContext du navigateur, tampons du système d exploitation, encodage du matériel et haut-parleurs. Le microphone ajoute son propre trajet de capture. Le test décrit donc la combinaison actuelle de votre matériel et système.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'À utiliser comme estimation',
      badge: 'Valeur indicative',
      html: '<p>Utilisez le résultat pour comparer des configurations ou résoudre un problème évident de synchronisation. Cela ne remplace pas une spécification fabricant ou une mesure de laboratoire.</p>',
    },
  ],
  ui: {
    badge: 'Observatoire de latence',
    modeLabel: 'Chemin de lecture',
    modeSpeakers: 'Haut-parleurs',
    modeWired: 'Filaire',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Synchro vidéo',
    startTest: 'Lancer le test',
    stopTest: 'Arrêter le test',
    enableMic: 'Activer le micro',
    micEnabled: 'Micro prêt',
    calibrationTitle: 'Correction d alignement',
    calibrationHint: 'Déplacez le curseur jusqu à ce que le flash et le clic coïncident',
    calibrationEarly: 'Audio en avance',
    calibrationLate: 'Visuel en avance',
    calibrationCenter: 'Aligné',
    visualLane: 'Visuel',
    audioLane: 'Audio',
    statusReady: 'Prêt',
    statusRunning: 'Séquence en cours',
    statusWaiting: 'En attente d impulsion',
    resultTitle: 'Mesure actuelle',
    latencyLabel: 'Délai mesuré',
    alignmentLabel: 'Correction d alignement',
    confidenceLabel: 'Confiance',
    samplesLabel: 'Échantillons',
    notMeasured: 'Non mesuré',
    manualConfidence: 'Manuel uniquement',
    lowConfidence: 'Confiance faible',
    mediumConfidence: 'Confiance moyenne',
    highConfidence: 'Confiance élevée',
    noMic: 'Entrée micro indisponible sur ce navigateur',
    permissionDenied: 'Permission micro non accordée',
    limitationTitle: 'Résultat à lire comme une estimation',
    limitationText: 'Les réflexions, le traitement du micro et les tampons modifient le délai mesuré. Aucun son n est téléversé.',
    copyReport: 'Copier le rapport',
    copied: 'Copié',
    reset: 'Réinitialiser',
    safety: 'Commencez à volume faible. Arrêtez si le son sature.',
    pulse: 'SYNCHRO',
  },
};
