import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebBluetoothBleScannerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'scanner-ble-web-bluetooth';
const title = 'Scanner Web Bluetooth BLE';
const description = 'Scannez les appareils Bluetooth Low Energy à proximité depuis le navigateur, inspectez les UUIDs de services GATT exposés et testez si votre matériel IoT ou wearable est détectable.';

const faqData = [
  {
    question: 'Un site web peut-il scanner des appareils Bluetooth sans autorisation ?',
    answer: 'Non. Web Bluetooth nécessite toujours un geste de l\'utilisateur et un sélecteur de permission du navigateur. Cet outil ne voit que l\'appareil que vous sélectionnez explicitement et ne stocke ni les adresses MAC, ni les identifiants d\'appareil, ni les résultats de scan.',
  },
  {
    question: 'Pourquoi le scanner n\'affiche-t-il pas tous les appareils BLE à proximité ?',
    answer: 'Les navigateurs exposent intentionnellement le Bluetooth via un sélecteur de permission, pas comme un scanner silencieux en arrière-plan. Certains appareils cessent également d\'émettre, masquent leur nom, nécessitent un appairage ou n\'exposent leurs services qu\'après connexion.',
  },
  {
    question: 'Quels navigateurs prennent en charge Web Bluetooth ?',
    answer: 'Web Bluetooth est le mieux pris en charge dans les navigateurs de bureau basés sur Chromium comme Chrome et Edge. Il nécessite généralement HTTPS ou localhost et n\'est pas disponible dans de nombreuses configurations de Firefox, Safari et des navigateurs iOS.',
  },
  {
    question: 'Peut-il lire les données privées des capteurs d\'un wearable ?',
    answer: 'Uniquement si l\'appareil expose des services GATT compatibles et que le navigateur accorde l\'accès. De nombreux wearables commerciaux nécessitent des applications du fabricant, un chiffrement, un appairage ou des caractéristiques propriétaires qu\'un scanner de navigateur générique ne peut pas décoder.',
  },
  {
    question: 'Que sont les UUIDs de service GATT ?',
    answer: 'Un UUID de service GATT identifie un groupe de fonctionnalités Bluetooth Low Energy, telles que le Service Batterie, la Fréquence Cardiaque, les Informations sur l\'Appareil ou un service personnalisé du fabricant utilisé par le matériel maker et IoT.',
  },
];

const howToData = [
  {
    name: 'Utilisez un navigateur compatible',
    text: 'Ouvrez l\'outil dans Chrome ou Edge via HTTPS ou localhost, puis assurez-vous que le Bluetooth est activé sur l\'ordinateur ou le téléphone.',
  },
  {
    name: 'Mettez le matériel en mode diffusion',
    text: 'Activez l\'appareil BLE, éteignez-le et rallumez-le, appuyez sur son bouton d\'appairage ou ouvrez son mode diffusion pour qu\'il apparaisse dans le sélecteur de permission du navigateur.',
  },
  {
    name: 'Scannez l\'environnement',
    text: 'Cliquez sur Scanner l\'environnement et sélectionnez l\'appareil BLE que vous souhaitez inspecter. La boîte de dialogue de permission du navigateur contrôle exactement quel appareil devient visible pour la page.',
  },
  {
    name: 'Lisez les services GATT',
    text: 'Après la connexion, examinez les cartes d\'UUID de service pour identifier les profils Bluetooth standard, les services de firmware personnalisés et si l\'appareil expose le chemin de données attendu.',
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

export const content: ToolLocaleContent<WebBluetoothBleScannerUI> = {
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
      text: 'Testeur BLE en ligne pour l\'IoT, les wearables et le matériel maker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce scanner Web Bluetooth vous permet de tester si un appareil Bluetooth Low Energy à proximité est détectable depuis un navigateur et quels services GATT il expose après avoir accordé la permission. Il est utile pour déboguer le firmware ESP32, les sketches Arduino BLE, les capteurs intelligents, les wearables de fitness, les claviers, les balises personnalisées, les moniteurs environnementaux et le matériel prototype avant de créer une application mobile native.',
    },
    {
      type: 'message',
      title: 'Modèle de confidentialité',
      html: 'Ce site web ne stocke ni les adresses MAC, ni les identifiants d\'appareil, ni les noms, ni les UUIDs, ni les données de signal, ni l\'historique des scans. Le sélecteur de permission du navigateur détermine quel appareil unique la page peut consulter et les résultats restent dans votre session de navigateur actuelle.',
    },
    {
      type: 'table',
      headers: ['Ce que vous voyez', 'Ce que cela signifie', 'Ce qu\'il faut vérifier ensuite'],
      rows: [
        ['Nom de l\'appareil', 'Le nom Bluetooth diffusé, si le matériel en émet un.', 'S\'il est vide, vérifiez les données publicitaires du firmware ou utilisez un préfixe de nom connu pendant les tests.'],
        ['ID de l\'appareil', 'Un identifiant limité au navigateur, pas l\'adresse MAC publique réelle.', 'Utilisez-le uniquement pour cette session du navigateur ; ne le traitez pas comme un numéro de série matériel universel.'],
        ['UUIDs de service GATT', 'Les groupes de services exposés après acceptation de la connexion.', 'Comparez les UUIDs standard avec la liste Bluetooth SIG ou votre table de services du firmware.'],
        ['Service personnalisé', 'Un UUID spécifique au fabricant ou au projet.', 'Ouvrez votre firmware, le profil de l\'application mobile ou la documentation BLE pour mapper les caractéristiques et les autorisations.'],
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi le scan Bluetooth du navigateur est différent',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les applications de scanner BLE natives affichent souvent des diffusions continues de nombreux appareils à proximité. Web Bluetooth est délibérément plus strict: la page doit être ouverte dans un contexte sécurisé, le scan doit démarrer par un clic utilisateur et le navigateur affiche un sélecteur de permission. Cela protège les utilisateurs contre le pistage silencieux tout en offrant aux développeurs un moyen pratique de se connecter au matériel BLE sélectionné depuis JavaScript.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Scanner Web Bluetooth',
          description: 'Idéal pour la validation rapide du firmware, les démos, les flux d\'assistance, les laboratoires pédagogiques et les diagnostics basés navigateur où la friction d\'installation est importante.',
        },
        {
          title: 'Application BLE native',
          description: 'Meilleure pour le scan en arrière-plan, la journalisation RSSI, les flux d\'appairage, les protocoles chiffrés du fabricant, les grands arbres de caractéristiques et les diagnostics terrain à long terme.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Raisons courantes pour lesquelles un appareil BLE n\'apparaît pas',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Le Bluetooth est désactivé au niveau du système d\'exploitation ou le navigateur n\'a pas la permission Bluetooth.',
        'L\'appareil est connecté à un autre téléphone, ordinateur portable, application du fabricant ou passerelle et a cessé d\'émettre.',
        'Le matériel n\'émet que pendant une courte fenêtre après le démarrage ou après avoir appuyé sur un bouton d\'appairage.',
        'Le navigateur n\'est pas basé sur Chromium, la page n\'est pas servie via HTTPS ou la plateforme bloque Web Bluetooth.',
        'Le firmware diffuse des données du fabricant mais masque le nom local, le sélecteur peut donc afficher un appareil sans nom.',
        'L\'appareil nécessite un appairage, un chiffrement ou une authentification propriétaire avant que les services ne deviennent lisibles.',
      ],
    },
    {
      type: 'title',
      text: 'Comment utiliser les UUIDs GATT pendant le débogage',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une connexion réussie avec des UUIDs de service vous indique que le navigateur peut atteindre le périphérique et que le périphérique expose au moins une partie de sa table GATT. Les services standard tels que Service Batterie, Informations sur l\'Appareil, Fréquence Cardiaque, Dispositif d\'Interface Humaine et Détection Environnementale sont faciles à reconnaître. Les UUIDs personnalisés pointent généralement vers des fonctionnalités spécifiques au firmware et nécessitent la carte des caractéristiques de votre code source ou de la documentation du fabricant.',
    },
    {
      type: 'table',
      headers: ['Symptôme', 'Cause probable', 'Solution pratique'],
      rows: [
        ['Le sélecteur de permission est vide', 'L\'appareil n\'émet pas ou le support du navigateur est absent.', 'Redémarrez l\'appareil, activez le mode appairage, rapprochez-vous ou réessayez dans Chrome/Edge.'],
        ['La connexion échoue immédiatement', 'L\'appareil est occupé, hors de portée ou refuse la connexion du navigateur.', 'Déconnectez les applications du fabricant et gardez le périphérique près de l\'ordinateur.'],
        ['Aucun service n\'est listé', 'GATT est indisponible, les services sont masqués ou l\'accès n\'a pas été accordé pour ces UUIDs.', 'Ajoutez des services optionnels connus dans les tests de firmware ou inspectez avec un outil BLE natif.'],
        ['Seuls les UUIDs personnalisés apparaissent', 'Le matériel utilise des services de firmware spécifiques au fabricant.', 'Mappez les UUIDs aux constantes du code source et documentez les autorisations de lecture/écriture des caractéristiques.'],
      ],
    },
    {
      type: 'title',
      text: 'Limites de sécurité et de confidentialité',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'La page ne peut pas collecter silencieusement les appareils Bluetooth à proximité en arrière-plan.',
        'Le navigateur peut masquer les adresses MAC réelles et fournir à la place un ID d\'appareil limité.',
        'L\'accès ne commence qu\'après que l\'utilisateur a cliqué sur le bouton de scan et choisi un appareil.',
        'Les résultats ne sont ni téléchargés ni stockés par ce site web.',
        'Les appareils commerciaux sensibles peuvent nécessiter un chiffrement ou un flux d\'appairage du fabricant que ce scanner générique ne peut pas contourner.',
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Bluetooth n\'est pas disponible',
    unsupportedBody: 'Essayez Chrome ou Edge sur ordinateur ou Android, activez le Bluetooth et ouvrez la page via HTTPS ou localhost.',
    secureContext: 'Web Bluetooth nécessite une page HTTPS sécurisée ou localhost. Rechargez l\'outil depuis une origine sécurisée et réessayez.',
    scanButton: 'Scanner l\'environnement',
    scanning: 'Scan en cours',
    reconnect: 'Scanner à nouveau',
    disconnect: 'Déconnecter',
    privacyTitle: 'Confidentialité dès la conception',
    privacyBody: 'Ce site web ne stocke ni les adresses MAC, ni les identifiants d\'appareil, ni les noms, ni les UUIDs, ni l\'historique des scans. Le navigateur n\'expose que l\'appareil que vous choisissez.',
    deviceLabel: 'Appareil sélectionné',
    nameFallback: 'Appareil BLE sans nom',
    idLabel: 'ID appareil du navigateur',
    servicesLabel: 'Services GATT',
    noServices: 'Aucun service primaire lisible n\'a été retourné pour cette connexion.',
    statusIdle: 'Prêt à scanner le matériel BLE à proximité',
    statusPermission: 'En attente du sélecteur de permission du navigateur',
    statusConnecting: 'Connexion à l\'appareil BLE sélectionné',
    statusConnected: 'Connecté et services chargés',
    statusDisconnected: 'Appareil déconnecté',
    statusCancelled: 'Aucun appareil BLE n\'a été sélectionné ou le Bluetooth est désactivé/indisponible sur cet appareil.',
    statusUnavailable: 'Le Bluetooth semble être désactivé, bloqué ou absent sur cet appareil. Activez le Bluetooth ou essayez depuis un matériel disposant d\'un adaptateur BLE.',
    statusError: 'Échec du scan Bluetooth',
    signalUnknown: 'La force du signal est contrôlée par le sélecteur du navigateur',
    gattUnavailable: 'Cet appareil n\'a pas exposé de serveur GATT au navigateur',
    customServiceName: 'Service personnalisé ou spécifique au fabricant',
    serviceGenericAccess: 'Accès Générique',
    serviceGenericAttribute: 'Attribut Générique',
    serviceDeviceInformation: 'Informations sur l\'Appareil',
    serviceHeartRate: 'Fréquence Cardiaque',
    serviceBattery: 'Service Batterie',
    serviceHumanInterfaceDevice: 'Dispositif d\'Interface Humaine',
    serviceCyclingSpeedCadence: 'Vitesse et Cadence de Cyclisme',
    serviceEnvironmentalSensing: 'Détection Environnementale',
    serviceUserData: 'Données Utilisateur',
    serviceFitnessMachine: 'Appareil de Fitness',
    uuidHelp: 'Les UUIDs identifient les services Bluetooth. Les services standard sont nommés automatiquement ; les UUIDs spécifiques au fabricant nécessitent la documentation de votre firmware ou appareil.',
    compatibilityHint: 'Fonctionne le mieux dans les navigateurs basés sur Chromium avec le Bluetooth activé. Web Bluetooth est intentionnellement limité par les permissions et peut ne pas afficher tous les émetteurs à proximité.',
    serviceCountSingular: 'service',
    serviceCountPlural: 'services',
  },
};
