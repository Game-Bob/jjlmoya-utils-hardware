import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-retard-audio';
const title = 'Test de retard audio';
const description = 'Testez le retard audio percu sur vos enceintes, casques, appareils Bluetooth et synchronisation video grace a une sequence d impulsions dans le navigateur.';

const faq = [
  {
    question: 'Que mesure exactement ce test de retard audio ?',
    answer: 'Le mode microphone optionnel estime l intervalle entre un clic programme par le navigateur et sa captation par le microphone. Le mode manuel permet un reglage a l oreille.',
  },
  {
    question: 'Puis-je tester la latence Bluetooth sans microphone ?',
    answer: 'Oui. Lancez la sequence d impulsions, selectionnez le mode Bluetooth et deplacez le curseur d alignement jusqu a ce que le flash et le clic semblent simultanes.',
  },
  {
    question: 'Pourquoi le mode microphone demande-t-il une autorisation ?',
    answer: 'Le navigateur doit acceder au microphone pour detecter le clic de test apres sa propagation acoustique. Le traitement s effectue localement dans le navigateur.',
  },
  {
    question: 'Pourquoi la mesure par microphone peut-elle varier ?',
    answer: 'Les reflexions de la piece, le traitement du microphone, le controle automatique du gain et les tampons du systeme d exploitation modifient le resultat.',
  },
  {
    question: 'Quel mode de test dois-je choisir ?',
    answer: 'Choisissez Enceintes pour la piece, Casque filaire pour une liaison directe, Bluetooth pour le sans-fil et Synchro video pour verifier un lecteur ou ecran.',
  },
  {
    question: 'Le son de mon microphone est-il envoye a un serveur ?',
    answer: 'Non. Le flux du microphone est analyse uniquement en memoire locale par l API Web Audio du navigateur et aucun enregistrement n est me deplace.',
  },
];

const howTo = [
  {
    name: 'Selectionner le chemin de lecture',
    text: 'Choisissez enceintes, casque filaire, Bluetooth ou synchronisation video.',
  },
  {
    name: 'Commencer par l impulsion manuelle',
    text: 'Cliquez sur Lancer le test, ecoutez le clic et observez l impulsion visuelle cyan. Ajustez le curseur.',
  },
  {
    name: 'Activer la mesure par microphone si besoin',
    text: 'Cliquez sur Activer le microphone, accordez l autorisation et placez le microphone au point d ecoute.',
  },
  {
    name: 'Lire le resultat comme une estimation',
    text: 'Utilisez le retard median et l indice de confiance pour comparer vos configurations.',
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
    { type: 'title', text: 'Test de retard audio pour Bluetooth et synchronisation video', level: 2 },
    {
      type: 'paragraph',
      html: 'Ce test de retard audio base sur le navigateur vous aide a evaluer le decalage entre un signal visuel et un son sur votre equipement actuel.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Essai initial sans acces au microphone',
      badge: 'Prive par conception',
      html: '<p>Le test manuel fonctionne sans microphone. Observez le repere visuel cyan et ecoutez le clic sonal puis deplacez le curseur d alignement.</p>',
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
        'Selectionnez Bluetooth et reglez le volume a un niveau confortable.',
        'Executez la sequence d impulsions depuis votre navigateur habituel.',
        'Comparez le flash visuel au clic sonal.',
        'Ajustez le curseur d alignement jusqu a la simultaneite.',
        'Repetez le test si vous changez de codec ou de peripherique.',
      ],
    },
    {
      type: 'table',
      headers: ['Mode', 'Usage recommande', 'Limite principale'],
      rows: [
        ['Enceintes', 'Ecoute dans la piece et TV', 'La distance et la reverberation affectent la mesure.'],
        ['Casque filaire', 'Connexion analogique directe', 'Le microphone peut difficilement capter un casque ferme.'],
        ['Bluetooth', 'Casques et enceintes sans fil', 'Le tampon du codec varie selon les appareils.'],
        ['Synchro video', 'Alignement ecran et lecteur', 'Le lecteur video peut ajouter son propre retard.'],
      ],
    },
    {
      type: 'title',
      text: 'Mesure optionnelle par microphone',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En activant le microphone, l outil mesure l ecart entre le clic programme et la crete acoustique captee, en calculant la mediane des echantillons.',
    },
    {
      type: 'tip',
      title: 'Placez le microphone au point d ecoute',
      html: 'Pour les enceintes, positionnez le microphone a votre place habituelle dans la piece silencieuse.',
    },
    {
      type: 'title',
      text: 'Pourquoi les resultats de latence varient',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le retard audio depend de l ensemble de la chaine: horloge AudioContext du navigateur, tampons systeme, codec Bluetooth et haut-parleurs.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Interpretation des resultats',
      badge: 'Valeur indicative',
      html: '<p>Utilisez cette mesure pour comparer des reglages. Elle ne remplace pas une mesure avec carte son professionnelle.</p>',
    },
  ],
  ui: {
    badge: 'Observatoire de latence',
    modeLabel: 'Chemin de lecture',
    modeSpeakers: 'Enceintes',
    modeWired: 'Filaire',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Synchro video',
    startTest: 'Lancer le test',
    stopTest: 'Arreter le test',
    enableMic: 'Activer le microphone',
    micEnabled: 'Microphone pret',
    calibrationTitle: 'Correction d alignement',
    calibrationHint: 'Deplacez le curseur jusqu a faire coincider le flash et le clic',
    calibrationEarly: 'Audio en avance',
    calibrationLate: 'Visuel en avance',
    calibrationCenter: 'Aligne',
    visualLane: 'Visuel',
    audioLane: 'Audio',
    statusReady: 'Pret',
    statusRunning: 'Sequence d impulsions en cours',
    statusWaiting: 'En attente d impulsions',
    resultTitle: 'Mesure actuelle',
    latencyLabel: 'Retard mesure',
    alignmentLabel: 'Correction d alignement',
    confidenceLabel: 'Confiance',
    samplesLabel: 'Echantillons',
    notMeasured: 'Non mesure',
    manualConfidence: 'Manuel uniquement',
    lowConfidence: 'Confiance faible',
    mediumConfidence: 'Confiance moyenne',
    highConfidence: 'Confiance elevee',
    noMic: 'Entree microphone indisponible dans ce navigateur',
    permissionDenied: 'Autorisation du microphone non accordee',
    limitationTitle: 'Interpretez le resultat comme une estimation',
    limitationText: 'Les reflexions acoustiques et tampons systeme modifient le retard mesure. Aucun son n est envoye en ligne.',
    copyReport: 'Copier le rapport',
    copied: 'Copie',
    reset: 'Reinitialiser',
    safety: 'Commencez a faible volume. Arretez en cas de distorsion.',
    pulse: 'SYNCHRO',
  },
};
