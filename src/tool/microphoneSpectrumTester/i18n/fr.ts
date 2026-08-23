import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MicrophoneSpectrumTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-microphone-analyseur-spectre';
const title = 'Test de microphone et analyseur de spectre';
const description = 'Testez l entrée microphone, le niveau en direct, la saturation, le bruit ambiant et la réponse en fréquence localement dans votre navigateur avec un spectre en temps réel.';

const faq = [
  {
    question: 'Ce test de microphone enregistre-t-il ou envoie-t-il ma voix ?',
    answer: 'Non. Le flux du microphone en direct est connecté uniquement à un analyseur dans votre navigateur. L outil ne crée pas de fichier audio, ne redirige pas le signal vers une sortie et ne transmet aucune donnée à un serveur.',
  },
  {
    question: 'Que signifie dBFS sur le VU-mètre ?',
    answer: 'dBFS signifie décibels par rapport à l échelle numérique maximale (Full Scale). Le niveau zéro dBFS représente la crête numérique maximale, les mesures normales sont donc négatives. Cela diffère d une mesure de pression acoustique en dB SPL.',
  },
  {
    question: 'Comment savoir si mon microphone sature ?',
    answer: 'Parlez au volume le plus fort prévu. Si les piques atteignent régulièrement l état rouge de saturation près de zéro dBFS, réduisez le gain du microphone, éloignez-vous ou désactivez les traitements d entrée agressifs du système d exploitation.',
  },
  {
    question: 'Que mesure la capture du bruit ambiant ?',
    answer: 'La capture de trois secondes calcule le niveau RMS numérique moyen pendant que vous restez silencieux. Elle permet de comparer différentes configurations dans la même pièce, bien que le contrôle automatique du gain puisse influencer le résultat.',
  },
  {
    question: 'Pourquoi la fréquence dominante varie-t-elle quand je parle ?',
    answer: 'La voix humaine contient une fréquence fondamentale variable, des harmoniques, des consonnes et du bruit. L affichage indique la bande la plus puissante entre 60 Hz et 12 kHz, ce changement est donc parfaitement normal.',
  },
  {
    question: 'Cet analyseur de spectre peut-il certifier la qualité d un microphone ?',
    answer: 'Non. Il s agit d une vérification pratique dans le navigateur pour contrôler le niveau, la saturation, le bruit et l activité spectrale. Une certification de réponse en fréquence requiert du matériel étalonné et un environnement de mesure contrôlé.',
  },
];

const howTo = [
  {
    name: 'Autoriser l accès au microphone',
    text: 'Cliquez sur Démarrer le microphone et acceptez la permission du navigateur. Le traitement commence uniquement après cette action.',
  },
  {
    name: 'Parler à votre distance habituelle',
    text: 'Utilisez votre voix ou le niveau d instrument habituel et observez la lecture en dBFS, la crête maximale et l analyse spectrale.',
  },
  {
    name: 'Tester le niveau maximal attendu',
    text: 'Montez la voix ou jouez le passage le plus fort. Veillez à éviter la saturation en rouge tout en conservant un signal clair et suffisant.',
  },
  {
    name: 'Capturer le bruit ambiant',
    text: 'Restez silencieux et appuyez sur Capturer trois secondes. Comparez le niveau de bruit après avoir modifié la pièce, le gain ou les paramètres.',
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

export const content: ToolLocaleContent<MicrophoneSpectrumTesterUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Comment tester un microphone dans votre navigateur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce test de microphone répond aux premières questions de diagnostic sans installer d application: l entrée sélectionnée produit-elle un signal, le niveau est-il exploitable, les moments forts saturent-ils et quelles fréquences sont actives ? Cliquez sur Démarrer le microphone, parlez normalement et observez les données en temps réel. L analyseur fonctionne localement sur la page.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Analyse locale et privée',
      badge: 'Sans enregistrement',
      html: '<p>Votre navigateur demande l autorisation d accéder au microphone car le signal brut est confidentiel. Cet outil connecte ce flux uniquement à un analyseur local. Aucune donnée n est envoyée vers un serveur et la capture s arrête dès que vous cliquez sur Arrêter le microphone.</p>',
    },
    {
      type: 'title',
      text: 'Comprendre le niveau de microphone en dBFS',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La valeur principale est une estimation RMS représentant l énergie de la fenêtre temporelle actuelle. L indicateur de crête montre l échantillon maximal dans cet intervalle. Tous deux utilisent les dBFS, où zéro correspond au plafond numérique et les sons plus faibles affichent des valeurs négatives.',
    },
    {
      type: 'table',
      headers: ['Valeur', 'Signification', 'Action conseillée'],
      rows: [
        ['Silencieux ou sous -60 dBFS', 'L entrée sélectionnée ne produit pas de signal de test exploitable', 'Vérifiez le périphérique, le bouton muet, la permission et le niveau d entrée système'],
        ['Faible sous -35 dBFS', 'Le signal risque d être difficile à utiliser sans gain supplémentaire', 'Rapprochez-vous ou augmentez le gain d entrée tout en surveillant la crête'],
        ['Optimal', 'Le signal actuel présente un niveau suffisant et une marge correcte', 'Répétez le test en parlant plus fort'],
        ['Élevé au-dessus de -6 dBFS crête', 'Il reste très peu de marge numérique disponible', 'Diminuez le gain ou éloignez-vous légèrement avant un passage fort'],
        ['Saturation proche de 0 dBFS', 'Un ou plusieurs échantillons ont atteint le plafond numérique', 'Réduisez le gain et répétez le moment le plus fort'],
      ],
    },
    {
      type: 'title',
      text: 'Utilisation du spectre audio en direct',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le spectre logarithmique affiche les bandes de 60 Hz à 12 kHz, tandis que le ruban lumineux représente la forme d onde. Utilisez cette visualisation pour vérifier que les basses, médiums et aigus parviennent au navigateur. La variation de la fréquence dominante est normale.',
    },
    {
      type: 'tip',
      title: 'Comparez un seul changement à la fois',
      html: 'Capturez le bruit ambiant, modifiez un paramètre puis mesurez à nouveau depuis la même position. Les réducteurs de bruit du système peuvent modifier le rendu sonore en plus du niveau.',
    },
    {
      type: 'title',
      text: 'Pourquoi ce n est pas un sonomètre étalonné',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Les échantillons du navigateur décrivent le signal numérique après le microphone, l interface et les pilotes. Ils n indiquent pas la pression acoustique réelle. C est pourquoi l outil mesure en dBFS et non en dB SPL.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Utilisez du matériel étalonné pour les mesures officielles',
      badge: 'Test pratique uniquement',
      html: '<p>Utilisez cet outil pour vérifier vos appels, enregistrements et réglages. Pour certifier des spécifications matérielles ou des normes acoustiques, utilisez un microphone de mesure étalonné.</p>',
    },
  ],
  ui: {
    journeyPermission: '1. Autorisez le microphone',
    journeySpeak: '2. Parlez naturellement',
    journeyInspect: '3. Inspectez le niveau et le spectre',
    startMicrophone: 'Démarrer le microphone',
    stopMicrophone: 'Arrêter le microphone',
    deviceLabel: 'Périphérique d entrée',
    defaultDevice: 'Microphone par défaut',
    statusIdle: 'En attente d autorisation',
    statusRequesting: 'Demande d accès au microphone',
    statusLive: 'Écoute locale active',
    statusUnsupported: 'Accès au microphone indisponible sur ce navigateur',
    statusDenied: 'Permission du microphone refusée',
    statusError: 'Impossible de démarrer le microphone',
    levelLabel: 'Niveau en direct',
    peakLabel: 'Crête',
    frequencyLabel: 'Fréquence dominante',
    noiseFloorLabel: 'Bruit ambiant',
    captureNoise: 'Capturer trois secondes',
    capturingNoise: 'Restez silencieux pendant la mesure du bruit ambiant',
    noiseCaptured: 'Bruit ambiant capturé',
    roomToneHint: 'Conservez votre position et votre gain puis restez silencieux trois secondes.',
    unmeasured: 'Non mesuré',
    noSignalLevel: 'Pas de signal',
    noSignalPeak: 'Pas de signal',
    noSignalFrequency: 'Pas de signal',
    silentSignal: 'Aucun signal exploitable',
    quietSignal: 'Entrée faible',
    healthySignal: 'Marge correcte',
    hotSignal: 'Niveau élevé',
    clippingSignal: 'Saturation détectée',
    dbfsUnit: 'dBFS',
    hzUnit: 'Hz',
    spectrumAriaLabel: 'Spectre logarithmique et forme d onde du microphone en direct',
    limitationTitle: 'Un navigateur n est pas un sonomètre étalonné',
    limitationText: 'Les valeurs sont en dBFS numériques après traitement du périphérique, et non en dB SPL acoustiques. Le signal reste local et n est pas envoyé sur internet.',
  },
};
