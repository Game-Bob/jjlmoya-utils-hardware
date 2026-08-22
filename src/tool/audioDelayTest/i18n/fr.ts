import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-retard-audio';
const title = 'Test de retard audio';
const description = 'Testez le retard audio perçu sur vos enceintes, casques, appareils Bluetooth et synchronisation vidéo grâce à une séquence d impulsions dans le navigateur.';

const faq = [
  {
    question: 'Que mesure exactement ce test de retard audio ?',
    answer: 'Le mode microphone optionnel estime l intervalle entre un clic programmé par le navigateur et sa captation par le microphone. Le mode manuel permet un réglage à l oreille.',
  },
  {
    question: 'Puis-je tester la latence Bluetooth sans microphone ?',
    answer: 'Oui. Lancez la séquence d impulsions, sélectionnez le mode Bluetooth et déplacez le curseur d alignement jusqu à ce que le flash et le clic semblent simultanés.',
  },
  {
    question: 'Pourquoi le mode microphone demande-t-il une autorisation ?',
    answer: 'Le navigateur doit accéder au microphone pour détecter le clic de test après sa propagation acoustique. Le traitement s effectue localement dans le navigateur.',
  },
  {
    question: 'Pourquoi la mesure par microphone peut-elle varier ?',
    answer: 'Les réflexions de la pièce, le traitement du microphone, le contrôle automatique du gain et les tampons du système d exploitation modifient le résultat.',
  },
  {
    question: 'Quel mode de test dois-je choisir ?',
    answer: 'Choisissez Enceintes pour la pièce, Casque filaire pour une liaison directe, Bluetooth pour le sans-fil et Synchro vidéo pour vérifier un lecteur ou écran.',
  },
  {
    question: 'Le son de mon microphone est-il envoyé à un serveur ?',
    answer: 'Non. Le flux du microphone est analysé uniquement en mémoire locale par l API Web Audio du navigateur et aucun enregistrement n est transféré.',
  },
];

const howTo = [
  {
    name: 'Sélectionner le chemin de lecture',
    text: 'Choisissez enceintes, casque filaire, Bluetooth ou synchronisation vidéo.',
  },
  {
    name: 'Commencer par l impulsion manuelle',
    text: 'Cliquez sur Lancer le test, écoutez le clic et observez l impulsion visuelle cyan. Ajustez le curseur.',
  },
  {
    name: 'Activer la mesure par microphone si besoin',
    text: 'Cliquez sur Activer le microphone, accordez l autorisation et placez le microphone au point d écoute.',
  },
  {
    name: 'Lire le résultat comme une estimation',
    text: 'Utilisez le retard médian et l indice de confiance pour comparer vos configurations.',
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
    { type: 'title', text: 'Test de retard audio pour Bluetooth et synchronisation vidéo', level: 2 },
    {
      type: 'paragraph',
      html: 'Ce test de retard audio basé sur le navigateur vous aide à évaluer le décalage entre un signal visuel et un son sur votre équipement actuel.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Essai initial sans accès au microphone',
      badge: 'Privé par conception',
      html: '<p>Le test manuel fonctionne sans microphone. Observez le repère visuel cyan et écoutez le clic sonal puis déplacez le curseur d alignement.</p>',
    },
    {
      type: 'title',
      text: 'Comment mesurer la latence audio Bluetooth',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Sélectionnez Bluetooth et réglez le volume à un niveau confortable.',
        'Exécutez la séquence d impulsions depuis votre navigateur habituel.',
        'Comparez le flash visuel au clic sonal.',
        'Ajustez le curseur d alignement jusqu à la simultanéité.',
        'Répétez le test si vous changez de codec ou de périphérique.',
      ],
    },
    {
      type: 'table',
      headers: ['Mode', 'Usage recommandé', 'Limite principale'],
      rows: [
        ['Enceintes', 'Écoute dans la pièce et TV', 'La distance et la réverbération affectent la mesure.'],
        ['Casque filaire', 'Connexion analogique directe', 'Le microphone peut difficilement capter un casque fermé.'],
        ['Bluetooth', 'Casques et enceintes sans fil', 'Le tampon du codec varie selon les appareils.'],
        ['Synchro vidéo', 'Alignement écran et lecteur', 'Le lecteur vidéo peut ajouter son propre retard.'],
      ],
    },
    {
      type: 'title',
      text: 'Mesure optionnelle par microphone',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En activant le microphone, l outil mesure l écart entre le clic programmé et la crête acoustique captée, en calculant la médiane des échantillons.',
    },
    {
      type: 'tip',
      title: 'Placez le microphone au point d écoute',
      html: 'Pour les enceintes, positionnez le microphone à votre place habituelle dans la pièce silencieuse.',
    },
    {
      type: 'title',
      text: 'Pourquoi les résultats de latence varient',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le retard audio dépend de l ensemble de la chaîne: horloge AudioContext du navigateur, tampons système, codec Bluetooth et haut-parleurs.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Interprétation des résultats',
      badge: 'Valeur indicative',
      html: '<p>Utilisez cette mesure pour comparer des réglages. Elle ne remplace pas une mesure avec carte son professionnelle.</p>',
    },
  ],
  ui: {
    badge: 'Observatoire de latence',
    modeLabel: 'Chemin de lecture',
    modeSpeakers: 'Enceintes',
    modeWired: 'Filaire',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Synchro vidéo',
    startTest: 'Lancer le test',
    stopTest: 'Arrêter le test',
    enableMic: 'Activer le microphone',
    micEnabled: 'Microphone prêt',
    calibrationTitle: 'Correction d alignement',
    calibrationHint: 'Déplacez le curseur jusqu à faire coincider le flash et le clic',
    calibrationEarly: 'Audio en avance',
    calibrationLate: 'Visuel en avance',
    calibrationCenter: 'Aligné',
    visualLane: 'Visuel',
    audioLane: 'Audio',
    statusReady: 'Prêt',
    statusRunning: 'Séquence d impulsions en cours',
    statusWaiting: 'En attente d impulsions',
    resultTitle: 'Mesure actuelle',
    latencyLabel: 'Retard mesuré',
    alignmentLabel: 'Correction d alignement',
    confidenceLabel: 'Confiance',
    samplesLabel: 'Échantillons',
    notMeasured: 'Non mesuré',
    manualConfidence: 'Manuel uniquement',
    lowConfidence: 'Confiance faible',
    mediumConfidence: 'Confiance moyenne',
    highConfidence: 'Confiance élevée',
    noMic: 'Entrée microphone indisponible dans ce navigateur',
    permissionDenied: 'Autorisation du microphone non accordée',
    limitationTitle: 'Interprétez le résultat comme une estimation',
    limitationText: 'Les réflexions acoustiques et tampons système modifient le retard mesuré. Aucun son n est envoyé en ligne.',
    copyReport: 'Copier le rapport',
    copied: 'Copié',
    reset: 'Réinitialiser',
    safety: 'Commencez à faible volume. Arrêtez en cas de distorsion.',
    pulse: 'SYNCHRO',
  },
};
