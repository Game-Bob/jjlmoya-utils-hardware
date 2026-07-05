import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebMidiKeyboardTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'testeur-clavier-midi';
const title = 'Testeur de clavier MIDI WebMIDI';
const description = 'Testez un clavier MIDI USB, un synthétiseur, un contrôleur de pads, la molette de pitch bend, la molette de modulation, la vélocité des notes et les notes bloquées directement dans le navigateur avec Web MIDI.';

const faqData = [
  {
    question: 'Ce testeur de clavier MIDI peut-il lire mon clavier USB sans installer de logiciel ?',
    answer: 'Oui, dans les navigateurs qui prennent en charge Web MIDI, comme Chrome et Edge. Le navigateur demande une autorisation, puis l\'outil écoute les messages de note, de vélocité, de pitch bend et de modulation provenant de l\'entrée MIDI sélectionnée.',
  },
  {
    question: 'Le site web télécharge-t-il mes notes MIDI ou mes données de performance ?',
    answer: 'Non. Les événements MIDI sont traités dans l\'onglet actuel du navigateur. Les notes, les valeurs de vélocité, les messages de contrôleur, les noms d\'appareils et les journaux ne sont ni téléchargés ni stockés par le site web.',
  },
  {
    question: 'Pourquoi mon clavier MIDI apparaît-il mais aucune touche ne s\'allume ?',
    answer: 'L\'appareil peut être connecté en tant que surface de contrôle, le mauvais port d\'entrée peut être sélectionné par le navigateur, le clavier peut utiliser un mode différent ou le câble/concentrateur peut transmettre l\'alimentation mais pas les données MIDI.',
  },
  {
    question: 'Puis-je tester les molettes de pitch bend et de modulation ?',
    answer: 'Oui. Le testeur affiche le pitch bend comme une valeur signée centrée et la modulation comme CC1 MIDI. Déplacer ces commandes devrait mettre à jour leurs indicateurs immédiatement lorsque l\'appareil envoie des messages MIDI standard.',
  },
  {
    question: 'Quels messages MIDI sont affichés ?',
    answer: 'L\'interface en direct met en évidence les messages Note On et Note Off, enregistre la vélocité, détecte le pitch bend et suit la molette de modulation CC1. D\'autres messages de contrôleur peuvent apparaître dans le journal d\'événements lorsqu\'ils sont pertinents pour les commandes testées.',
  },
];

const howToData = [
  {
    name: 'Connectez le matériel MIDI',
    text: 'Branchez le clavier, le synthétiseur, le contrôleur de pads ou l\'interface MIDI USB à l\'ordinateur avant d\'ouvrir la demande d\'autorisation. Évitez les hubs non alimentés lors du diagnostic des appareils intermittents.',
  },
  {
    name: 'Accordez l\'accès MIDI au navigateur',
    text: 'Appuyez sur Connecter une entrée MIDI et approuvez la demande d\'autorisation du navigateur. Utilisez Chrome ou Edge via HTTPS ou localhost, car Web MIDI est protégé par une autorisation.',
  },
  {
    name: 'Jouez des notes sur toute la tessiture',
    text: 'Appuyez sur des notes graves, médium et aiguës. Le clavier à l\'écran s\'étend autour des notes qu\'il reçoit et illumine chaque touche en fonction de la vélocité.',
  },
  {
    name: 'Vérifiez les molettes et les commandes d\'expression',
    text: 'Déplacez la molette de pitch bend, la molette de modulation et les commandes de performance. Le pitch bend doit revenir au centre, tandis que la modulation doit parcourir de 0 à 127.',
  },
  {
    name: 'Lisez le journal d\'événements',
    text: 'Utilisez le journal d\'événements pour repérer les messages Note Off manquants, les canaux inattendus, les valeurs de vélocité faibles ou les commandes qui envoient un message MIDI différent de celui attendu.',
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
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<WebMidiKeyboardTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Testeur de clavier MIDI en ligne pour matériel USB réel', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>testeur de clavier MIDI en ligne</strong> fiable doit répondre rapidement à une question: l\'instrument physique envoie-t-il les messages qu\'une STAN, un échantillonneur, un synthétiseur ou un système d\'éclairage attend ? Ce testeur WebMIDI écoute l\'entrée MIDI du navigateur et affiche en temps réel les données de Note On, Note Off, vélocité, pitch bend et molette de modulation. Il est conçu pour les claviers MIDI USB, les interfaces DIN vers USB, les synthétiseurs, les contrôleurs de pads, les pianos de scène, les guitares MIDI, les déclencheurs de batterie et les contrôleurs compacts utilisés en home studio ou en live.',
    },
    {
      type: 'message',
      title: 'Diagnostic MIDI local et privé',
      html: 'Le test s\'exécute entièrement côté client. Le site web ne télécharge ni les numéros de note, ni les courbes de vélocité, ni les mouvements de contrôleur, ni les noms d\'appareils, ni les journaux d\'événements. Le navigateur expose MIDI uniquement après votre approbation de la demande d\'autorisation, et les valeurs restent dans l\'onglet actuel.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-127', label: 'Plage de vélocité MIDI' },
        { value: '128', label: 'numéros de note standard' },
        { value: '14 bits', label: 'résolution du pitch bend' },
        { value: 'CC1', label: 'commande de molette de modulation' },
      ],
    },
    {
      type: 'table',
      headers: ['Signal', 'Ce qu\'affiche le testeur', 'Comportement sain'],
      rows: [
        ['Note On', 'Nom de la touche, numéro de note, canal et vélocité.', 'Chaque touche physique s\'allume une fois lorsqu\'elle est enfoncée et affiche une valeur de vélocité supérieure à zéro.'],
        ['Note Off', 'Événement de relâchement dans le journal et réinitialisation de l\'éclairage.', 'Chaque touche enfoncée s\'éteint au relâchement ; aucune note ne reste visuellement bloquée.'],
        ['Vélocité', 'Indicateur en direct et courbe continue.', 'Un jeu doux produit des valeurs basses et un jeu ferme atteint des valeurs élevées sans sauts aléatoires.'],
        ['Pitch bend', 'Indicateur signé centré de négatif à positif.', 'La molette balaie de façon fluide et revient près de zéro au relâchement.'],
        ['Modulation', 'Indicateur CC1 de 0 à 127.', 'La molette ou la bande se déplace de façon prévisible sur toute la plage.'],
      ],
    },
    { type: 'title', text: 'Comment tester un clavier MIDI sans STAN', level: 2 },
    {
      type: 'paragraph',
      html: 'Rechercher <em>tester clavier MIDI</em> signifie souvent que l\'utilisateur ne sait pas encore si la panne vient du contrôleur, du câble, du système d\'exploitation ou du logiciel de musique. Une STAN ajoute de nombreuses variables supplémentaires: état d\'armement de piste, filtres d\'entrée, routage de canal MIDI, instruments virtuels, monitoring, modèles et préférences de pilote. Un testeur navigateur supprime la majeure partie de cette pile. Si la demande d\'autorisation WebMIDI voit l\'appareil et que le clavier illumine des notes à l\'écran, le chemin MIDI physique est opérationnel.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'À utiliser avant de modifier les réglages de la STAN',
      html: 'Confirmez d\'abord que le contrôleur envoie du MIDI brut. Diagnostiquez ensuite l\'application de musique. Si le testeur reçoit des notes mais que la STAN ne les reçoit pas, vérifiez l\'activation de l\'entrée MIDI, l\'entrée de piste sélectionnée, les filtres de canal, les scripts de surface de contrôle et le monitoring de l\'instrument.',
    },
    {
      type: 'list',
      items: [
        'Connectez le clavier directement à l\'ordinateur chaque fois que possible, surtout si l\'alimentation par bus est limite.',
        'Ouvrez le testeur dans Chrome ou Edge, car la prise en charge de Web MIDI varie selon le navigateur et la plateforme.',
        'Appuyez sur Connecter une entrée MIDI et choisissez l\'appareil musical ou l\'interface MIDI dans la demande d\'autorisation.',
        'Jouez des notes chromatiques sur tout le clavier pour révéler les touches mortes, les zones divisées ou les surprises de transposition d\'octave.',
        'Déplacez les molettes de pitch et de modulation lentement, puis rapidement, pour détecter les capteurs bruyants ou un mauvais retour au centre.',
        'Effacez le journal entre les tests lorsque vous comparez des câbles, des ports USB, des préréglages de clavier ou des modes de contrôleur.',
      ],
    },
    {
      type: 'tip',
      title: 'Vérification rapide du câble',
      html: 'Si l\'appareil s\'allume mais qu\'aucune entrée MIDI n\'apparaît, essayez un autre câble USB. De nombreux câbles USB bon marché sont uniquement de charge et ne transmettent pas de données, ce qui donne l\'impression que le contrôleur est actif alors qu\'aucun message MIDI ne parvient à l\'ordinateur.',
    },
    { type: 'title', text: 'Lire les courbes de vélocité et la réponse dynamique', level: 2 },
    {
      type: 'paragraph',
      html: 'La vélocité n\'est pas le volume en soi ; c\'est une valeur de performance envoyée avec la note, généralement de 1 à 127. Un plugin de piano peut mapper la vélocité au volume, à la couche d\'échantillonnage, à la brillance, au bruit de marteau, au temps d\'attaque ou à tout cela à la fois. Lorsqu\'un contrôleur a un mauvais balayage de vélocité, le musicien peut avoir l\'impression que les notes douces disparaissent, que les notes médium sont trop fortes ou que les notes fortes n\'atteignent jamais la couche expressive supérieure. La courbe de vélocité continue aide à révéler si le matériel produit un éventail utilisable de valeurs.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Clavier sain',
          description: 'Les frappes douces, médium et fortes produisent des bandes de vélocité visiblement distinctes, avec des valeurs reproductibles pour une force de jeu similaire.',
          highlight: true,
        },
        {
          title: 'Réponse compressée',
          description: 'La plupart des notes se regroupent dans une plage étroite, comme 70-95, rendant les instruments de piano et de batterie plats ou difficiles à contrôler.',
        },
        {
          title: 'Réponse erratique',
          description: 'Des notes adjacentes ou des frappes répétées sautent de façon imprévisible, suggérant des contacts encrassés, des capteurs défaillants, un mauvais balayage ou un firmware instable.',
        },
      ],
    },
    {
      type: 'table',
      headers: ['Profil de vélocité observé', 'Interprétation probable', 'Test suivant'],
      rows: [
        ['Toujours 127', 'Le mode vélocité fixe est activé ou le contrôleur est configuré pour le déclenchement d\'orgue/synthétiseur.', 'Vérifiez les paramètres globaux du clavier, le mode pad ou l\'éditeur du contrôleur.'],
        ['Toujours très bas', 'La courbe de vélocité est trop douce, la calibration du capteur est incorrecte ou le clavier est défaillant.', 'Changez les courbes de vélocité et comparez les touches noires et blanches sur plusieurs octaves.'],
        ['Une touche diffère nettement', 'Un contact local, un dôme en caoutchouc, un capteur optique ou un mécanisme de touche peut être encrassé ou endommagé.', 'Répétez cette touche à plusieurs intensités et comparez-la aux notes voisines.'],
        ['Les valeurs chutent après utilisation d\'un hub', 'L\'alimentation ou la stabilité des données peut être insuffisante.', 'Testez à nouveau avec un port USB direct et un câble de données dont vous êtes sûr.'],
      ],
    },
    {
      type: 'card',
      title: 'Pourquoi le Note Off est important',
      html: 'Une note bloquée est souvent un message Note Off manquant ou retardé. Certains instruments envoient un Note On avec une vélocité de 0 au lieu d\'une commande Note Off séparée ; les deux comportements sont valides en MIDI. Ce testeur traite le Note On à vélocité zéro comme un relâchement de note, de sorte que les touches vraiment bloquées restent visibles jusqu\'à l\'arrivée du message de relâchement correct.',
    },
    { type: 'title', text: 'Tester le pitch bend, la modulation et les commandes de performance', level: 2 },
    {
      type: 'paragraph',
      html: 'Le pitch bend est un message MIDI de résolution supérieure aux données de contrôleur 7 bits ordinaires. Il combine deux octets de données en une plage de 14 bits centrée autour de 8192. Cette résolution supplémentaire est importante car le mouvement de pitch doit sonner de façon fluide, en particulier lorsqu\'on plie un synthé lead, une basse ou un instrument orchestral. Le testeur convertit le bend entrant en un indicateur centré, ce qui permet de voir facilement si la molette atteint les deux extrêmes et revient au neutre.',
    },
    {
      type: 'paragraph',
      html: 'La molette de modulation est normalement le contrôleur continu MIDI 1, couramment noté CC1. De nombreux patches de synthétiseur l\'utilisent pour le vibrato, le mouvement de filtre, la position de wavetable, le trémolo ou la dynamique orchestrale. Si déplacer la molette ne met pas à jour l\'indicateur CC1, le contrôleur peut être assigné à un autre CC, utiliser un mode spécifique au fabricant ou être routé via un logiciel qui remappe les commandes de performance.',
    },
    {
      type: 'proscons',
      title: 'Test MIDI navigateur versus monitoring STAN',
      items: [
        { pro: 'Confirmation rapide du matériel basée sur une autorisation, sans configuration de projet.', con: 'Ne reproduit pas tous les routages de STAN, scripts ou mappages d\'instruments.' },
        { pro: 'Vue claire des notes, de la vélocité, du pitch bend et de la modulation CC1.', con: 'L\'aftertouch avancé, les NRPN, le MPE, les SysEx et les mappages de contrôle personnalisés peuvent nécessiter des outils spécialisés.' },
        { pro: 'Utile pour les appels au support, l\'achat de matériel d\'occasion et la vérification des câbles.', con: 'La prise en charge par le navigateur dépend de la disponibilité de Web MIDI sur la plateforme actuelle.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La molette de pitch ne revient pas à zéro',
      html: 'Si l\'indicateur de pitch reste à une valeur positive ou négative après le relâchement, la molette physique, le ressort, le potentiomètre, le capteur à effet Hall, la calibration ou la zone morte du firmware peuvent nécessiter une attention. Testez le même contrôleur sur un autre port et préréglage avant de conclure que le capteur est défectueux.',
    },
    { type: 'title', text: 'Pannes courantes de clavier MIDI que ce testeur peut révéler', level: 2 },
    {
      type: 'glossary',
      items: [
        { term: 'Touche morte', definition: 'Une touche physique qui ne produit aucun message Note On lorsqu\'elle est enfoncée.' },
        { term: 'Note bloquée', definition: 'Une note qui reçoit un Note On mais aucun message de relâchement correspondant, laissant le son actif dans les instruments.' },
        { term: 'Pic de vélocité', definition: 'Une valeur soudaine beaucoup plus élevée ou plus basse que prévu pour une frappe similaire.' },
        { term: 'Canal MIDI', definition: 'L\'un des 16 canaux logiques utilisés pour séparer les parties, les zones ou les appareils sur un flux MIDI.' },
        { term: 'Control Change', definition: 'Une famille de messages MIDI utilisée par les potentiomètres, les pédales, les molettes, les curseurs et les interrupteurs.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Appareil détecté, aucun message',
      html: 'Si le navigateur affiche une entrée MIDI mais que jouer des touches ne produit aucune entrée dans le journal, vérifiez si le port sélectionné est une entrée de surface de contrôle au lieu de l\'entrée de notes du clavier. Certaines interfaces exposent plusieurs ports avec des noms similaires.',
    },
    {
      type: 'table',
      headers: ['Symptôme', 'Cause possible', 'Action pratique'],
      rows: [
        ['Aucune demande d\'autorisation', 'Navigateur non compatible, origine non sécurisée ou autorisation MIDI bloquée.', 'Utilisez Chrome/Edge via HTTPS et vérifiez les autorisations du site.'],
        ['Appareil absent', 'Problème de câble, hub, pilote, conformité de classe ou alimentation.', 'Essayez un autre câble USB de données, un autre port ou un hub alimenté.'],
        ['Seules certaines octaves fonctionnent', 'Mode split/layer, réglage de transposition, défaut de matrice matérielle ou mode de contrôle local.', 'Réinitialisez le préréglage et testez chromatiquement des graves aux aigus.'],
        ['Noms de note incorrects', 'Le contrôleur est transposé ou envoie depuis une zone avec décalage d\'octave.', 'Vérifiez la transposition globale, l\'octave de zone et les paramètres de modèle de la STAN.'],
        ['Molette de modulation silencieuse', 'Molette assignée à un autre numéro de contrôleur ou désactivée par le préréglage.', 'Chargez un préréglage par défaut ou l\'éditeur du contrôleur et remappez-la sur CC1.'],
      ],
    },
    {
      type: 'summary',
      title: 'Meilleur ordre de diagnostic',
      items: [
        'Confirmez que le navigateur voit l\'entrée MIDI.',
        'Jouez des notes et vérifiez que les appuis et relâchements correspondent.',
        'Inspectez la distribution de vélocité avec des frappes répétées douces, médium et fortes.',
        'Déplacez les commandes de pitch bend et de modulation sur toute leur course.',
        'Seulement ensuite, ajustez le routage de la STAN, les paramètres d\'instrument virtuel ou les modèles de contrôleur.',
      ],
    },
    { type: 'title', text: 'Confidentialité, compatibilité navigateur et limites', level: 2 },
    {
      type: 'paragraph',
      html: 'Web MIDI est intentionnellement protégé par une autorisation. Une page ne peut pas lire silencieusement les appareils musicaux connectés en arrière-plan sans que le navigateur n\'expose un flux d\'accès. L\'invite exacte et la persistance de l\'autorisation dépendent du navigateur, du système d\'exploitation et des paramètres utilisateur. Pour la plupart des musiciens, le résultat pratique est simple: cliquez sur le bouton de connexion, choisissez l\'entrée MIDI, exécutez le test et fermez l\'onglet une fois terminé.',
    },
    {
      type: 'list',
      items: [
        'Aucune donnée d\'événement MIDI n\'est envoyée à un serveur externe.',
        'Le testeur ne nécessite pas l\'accès SysEx, ce qui réduit la portée de l\'autorisation.',
        'Les noms d\'appareils affichés par le navigateur peuvent identifier des modèles de matériel, donc partagez les captures d\'écran avec discernement.',
        'Chrome et Edge offrent généralement la meilleure prise en charge Web MIDI ; la prise en charge de Safari et Firefox peut être limitée ou absente selon la plateforme.',
        'Des utilitaires natifs peuvent rester nécessaires pour les mises à jour de firmware, l\'édition avancée de contrôleur, l\'analyse MPE, les dumps SysEx ou les diagnostics spécifiques au fabricant.',
      ],
    },
    {
      type: 'card',
      title: 'Quand cet outil est suffisant',
      html: 'Pour acheter un contrôleur d\'occasion, vérifier un câble de studio, valider une interface MIDI USB, tester un clavier réparé ou prouver qu\'un clavier envoie des messages avant d\'ouvrir une STAN, un testeur de clavier WebMIDI est généralement la première étape la plus rapide.',
    },
  ],
  ui: {
    connectButton: 'Connecter une entrée MIDI',
    refreshButton: 'Actualiser les entrées',
    clearButton: 'Effacer le journal',
    unsupportedTitle: 'Web MIDI n\'est pas disponible',
    unsupportedBody: 'Utilisez un navigateur basé sur Chromium comme Chrome ou Edge, et ouvrez la page via HTTPS ou localhost.',
    secureContext: 'Web MIDI nécessite une page HTTPS sécurisée ou localhost pour que le navigateur puisse exposer les entrées MIDI.',
    statusIdle: 'Prêt à demander l\'accès MIDI',
    statusPermission: 'En attente de l\'autorisation MIDI du navigateur',
    statusReady: 'Accès MIDI accordé',
    statusNoInputs: 'Aucune entrée MIDI détectée',
    statusConnected: 'Entrée MIDI détectée',
    statusDisconnected: 'Appareil MIDI déconnecté',
    statusError: 'Échec de l\'accès MIDI',
    detectedLabel: 'Appareil détecté',
    noDevice: 'Aucun appareil MIDI sélectionné',
    inputLabel: 'Entrée',
    inputIdle: 'aucune',
    channelLabel: 'Canal',
    notesLabel: 'Notes',
    velocityLabel: 'Vélocité',
    pitchLabel: 'Pitch',
    modulationLabel: 'Modulation',
    lastEventLabel: 'Dernier événement',
    octaveRangeLabel: 'Tessiture visible',
    velocityCurveTitle: 'Courbe de vélocité',
    activeNotesTitle: 'Notes actives',
    eventLogTitle: 'Journal d\'événements MIDI',
    eventSeparator: '/',
    initialRange: 'C3-B5',
    emptyLog: 'Jouez une touche ou déplacez une molette pour voir les messages MIDI entrants.',
    noteOn: 'Note On',
    noteOff: 'Note Off',
    controlChange: 'Control Change',
    pitchBend: 'Pitch Bend',
    allChannels: 'Tous les canaux',
  },
};
