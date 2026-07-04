import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebUsbSerialMonitorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'moniteur-serie-webusb';
const title = 'Moniteur Série WebUSB';
const description = 'Connectez-vous au matériel série USB depuis le navigateur, lisez la sortie du terminal en direct, envoyez des commandes et déboguez les cartes Arduino, ESP32, RP2040 et maker sans installer de terminal de bureau.';

const faqData = [
  {
    question: 'Ce moniteur série fonctionne-t-il avec les cartes Arduino, ESP32 et Raspberry Pi Pico ?',
    answer: 'Oui, lorsque la carte expose une interface série USB prise en charge par Web Serial et que le navigateur est basé sur Chromium. Les adaptateurs courants Arduino, ESP32, RP2040, CH340, CP210x et FTDI fonctionnent généralement après que l\'utilisateur a accordé l\'autorisation.',
  },
  {
    question: 'Pourquoi cela s\'appelle WebUSB si cela utilise Web Serial ?',
    answer: 'La plupart des cartes maker se connectent via USB, mais l\'accès au terminal du navigateur est fourni par l\'API Web Serial. WebUSB est de plus bas niveau et n\'est pas la bonne abstraction pour un simple terminal de style UART.',
  },
  {
    question: 'Un site web peut-il accéder à mes périphériques série sans permission ?',
    answer: 'Non. Le navigateur exige un clic utilisateur et un sélecteur de périphérique natif avant qu\'un site puisse ouvrir un port série. Cet outil ne stocke pas les journaux du terminal ni les identifiants de périphériques.',
  },
  {
    question: 'Quel navigateur dois-je utiliser pour un terminal série web ?',
    answer: 'Utilisez Chrome, Edge ou un autre navigateur basé sur Chromium via HTTPS ou localhost. Firefox, Safari et de nombreux navigateurs iOS n\'exposent pas l\'API Web Serial.',
  },
  {
    question: 'Quel débit en bauds dois-je choisir ?',
    answer: 'Choisissez le débit en bauds configuré dans votre micrologiciel. Les exemples Arduino utilisent souvent 9600 ou 115200, tandis que les journaux plus rapides, les bootloaders et les flux de capteurs à haut débit peuvent utiliser 230400, 460800 ou 921600.',
  },
];

const howToData = [
  {
    name: 'Connectez le périphérique série USB',
    text: 'Branchez la carte ou l\'adaptateur et fermez tout autre terminal série qui pourrait avoir le port déjà ouvert.',
  },
  {
    name: 'Sélectionnez le débit en bauds',
    text: 'Choisissez le même débit en bauds utilisé par le micrologiciel, comme 115200 pour de nombreux sketches Arduino, ESP32 et RP2040.',
  },
  {
    name: 'Accordez l\'autorisation du navigateur',
    text: 'Appuyez sur Connecter, choisissez le périphérique série dans le sélecteur du navigateur et autorisez la page à ouvrir le port.',
  },
  {
    name: 'Lisez et envoyez des données du terminal',
    text: 'Observez les journaux entrants dans le terminal, envoyez des commandes avec des fins de ligne CRLF optionnelles, et effacez ou mettez en pause la sortie en direct si nécessaire.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<WebUsbSerialMonitorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Moniteur Série en Ligne pour Matériel USB Maker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce moniteur série de navigateur ouvre un port série USB directement depuis Chrome ou Edge, puis diffuse du texte depuis des microcontrôleurs, des ponts USB UART, des cartes de développement, des bootloaders, des dispositifs de test, des capteurs et du matériel de laboratoire. Il est conçu pour des diagnostics rapides lorsque vous avez besoin d\'une console série mais ne voulez pas installer un IDE de bureau ou une application de terminal.',
    },
    {
      type: 'message',
      title: 'Limite de permission du navigateur',
      html: 'La page ne peut pas énumérer ni ouvrir silencieusement vos périphériques série. L\'accès ne commence qu\'après avoir appuyé sur Connecter et choisi un port dans le sélecteur du navigateur. Les données du terminal restent dans l\'onglet actuel, sauf si vous les copiez vous-même.',
    },
    {
      type: 'stats',
      items: [
        { value: '9600-921600', label: 'présélections de bauds courantes' },
        { value: 'CRLF', label: 'fin de commande optionnelle' },
        { value: 'local', label: 'session de terminal' },
      ],
    },
    {
      type: 'title',
      text: 'Quand un Terminal Série Web Est Utile',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Vérifier les messages de démarrage d\'Arduino, ESP32, ESP8266, RP2040, STM32 ou de micrologiciels personnalisés.',
        'Envoyer des commandes AT aux modems, GPS, LoRa, Wi-Fi, Bluetooth ou modules cellulaires via un adaptateur USB UART.',
        'Lire la sortie des capteurs d\'un banc d\'essai, d\'un laboratoire scolaire, d\'un contrôleur robotique ou d\'un prototype de banc.',
        'Vérifier qu\'un pilote de pont série USB, un câble, l\'alimentation de la carte et le débit en bauds du micrologiciel fonctionnent tous ensemble.',
        'Collecter un journal d\'erreurs rapide avant de soumettre un bug ou de demander une assistance matérielle.',
      ],
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Moniteur série web',
          description: 'Idéal pour une assistance rapide, des instructions en classe, des diagnostics de terrain et des flux de travail maker où ouvrir une URL est plus rapide que d\'installer un IDE.',
        },
        {
          title: 'Terminal de bureau',
          description: 'Mieux adapté aux protocoles binaires, aux longues sessions de capture, au scripting, au contrôle de flux matériel, aux macros et aux environnements où les API du navigateur sont bloquées.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Liste de Vérification du Débit en Bauds et de Fin de Ligne',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Paramètre', 'Choix typique', 'Ce qui échoue quand c\'est incorrect'],
      rows: [
        ['Débit en bauds', '115200 pour de nombreuses cartes modernes, 9600 pour les anciens exemples.', 'Le texte lisible se transforme en symboles aléatoires ou aucun journal utile n\'apparaît.'],
        ['Fin de ligne', 'CRLF pour de nombreux analyseurs de commandes, pas de fin pour les protocoles de caractères bruts.', 'Les commandes sont ignorées car le micrologiciel attend un terminateur.'],
        ['Accès exclusif au port', 'Fermez Arduino Serial Monitor, PuTTY, screen, minicom ou les outils du fabricant.', 'Le sélecteur du navigateur ouvre le port mais la lecture ou l\'écriture échoue.'],
        ['Contexte sécurisé', 'HTTPS ou localhost.', 'L\'API Serial est manquante même dans un navigateur compatible.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pas de sortie série ?',
      html: 'Confirmez que la carte est alimentée et que le câble USB prend en charge les données, pas seulement la charge. Essayez 9600, 57600 et 115200 si vous ne connaissez pas le débit en bauds du micrologiciel. Appuyez sur reset après la connexion car de nombreuses cartes n\'impriment les journaux de démarrage qu\'au lancement. Fermez les autres logiciels qui pourraient encore posséder le port série et installez le pilote du système d\'exploitation pour CH340, CP210x, FTDI ou le fabricant de la carte si le périphérique n\'apparaît jamais.',
    },
    {
      type: 'title',
      text: 'Confidentialité, Sécurité et Limites',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Forces et limites de Web Serial',
      items: [
        {
          pro: 'Aucune installation de bureau pour les diagnostics de texte série de base.',
          con: 'Nécessite un navigateur basé sur Chromium et un contexte sécurisé.',
        },
        {
          pro: 'Le sélecteur du navigateur limite l\'accès au port spécifique que vous choisissez.',
          con: 'Non destiné aux analyseurs de protocoles binaires ou aux longues captures sans surveillance.',
        },
        {
          pro: 'Fonctionne bien pour les journaux de texte, les invites de commande et les vérifications rapides du matériel.',
          con: 'Certaines politiques d\'entreprise, navigateurs mobiles et systèmes d\'exploitation bloquent Web Serial.',
        },
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Serial n\'est pas disponible',
    unsupportedBody: 'Utilisez Chrome ou Edge via HTTPS ou localhost et assurez-vous que votre périphérique expose une interface série USB.',
    secureContext: 'Web Serial nécessite HTTPS ou localhost. Rechargez cette page depuis une origine sécurisée et réessayez.',
    statusIdle: 'Choisissez un débit en bauds, puis connectez un périphérique série USB',
    statusPermission: 'En attente du sélecteur de port série du navigateur',
    statusOpening: 'Ouverture du port série',
    statusConnected: 'Port série connecté',
    statusDisconnected: 'Port série déconnecté',
    statusError: 'Échec de la connexion série',
    connect: 'Connecter Série',
    disconnect: 'Déconnecter',
    send: 'Envoyer',
    clear: 'Effacer',
    pause: 'Pause',
    resume: 'Reprendre',
    baudRate: 'Débit en bauds',
    newline: 'Ajouter CRLF',
    inputPlaceholder: 'Tapez une commande, puis appuyez sur Entrée',
    portFallback: 'Aucun port sélectionné',
    portLabel: 'Identité du port',
    connectedDeviceLabel: 'Périphérique connecté',
    deviceNameFallback: 'Périphérique série USB',
    transportLabel: 'Liaison Web Serial',
    bytesLabel: 'Octets',
    linesLabel: 'Lignes',
    privacyTitle: 'Accès contrôlé',
    privacyBody: 'Le navigateur n\'expose que le périphérique série que vous sélectionnez. Les journaux restent dans cet onglet sauf si vous les copiez.',
    emptyLog: 'La sortie du terminal apparaîtra ici après avoir connecté un périphérique série.',
    copied: 'Copié',
    copyLog: 'Copier',
    presetSlow: '9600',
    presetArduino: '115200',
    presetFast: '921600',
    terminalLabel: 'Terminal en direct',
    unknownUsbId: 'N/A',
    logDirectionRx: 'rx',
    logDirectionTx: 'tx',
    logDirectionSys: 'sys',
    vidPrefix: 'VID ',
    pidSeparator: ' / PID ',
    baudUnit: ' bauds',
    vendorFtdi: 'FTDI USB Serial',
    vendorSilabs: 'Silicon Labs CP210x',
    vendorCh340: 'CH340 USB Serial',
    vendorArduinoUsb: 'Arduino USB Serial',
    vendorAdafruit: 'Adafruit USB Serial',
    vendorRp2040: 'Raspberry Pi RP2040',
    vendorEspressif: 'Espressif USB Serial',
    vendorOpenSource: 'Open Source USB Serial',
  },
};
