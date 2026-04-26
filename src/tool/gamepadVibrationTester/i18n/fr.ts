import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProbadorVibracionMandoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'testeur-vibration-manette';
const title = 'Testeur de Vibration de Manette en Ligne';
const description =
  "Vérifiez le fonctionnement des moteurs haptiques et la vibration (Dual-Rumble) de votre manette dans le navigateur. Compatible Xbox, DualShock, DualSense et génériques.";

const faqData = [
  {
    question: "Que faut-il pour tester ma manette en ligne ?",
    answer:
      "Il suffit de connecter votre manette à l'ordinateur ou au mobile via USB ou de la jumeler en Bluetooth. Une fois liée, appuyez sur n'importe quel bouton pour qu'elle soit détectée.",
  },
  {
    question: 'Fonctionne-t-il avec n\'importe quel modèle de manette ?',
    answer:
      "La plupart des manettes modernes de marques reconnues (comme PlayStation ou Xbox) sont compatibles si votre appareil et système d'exploitation le permettent.",
  },
  {
    question: 'Le côté droit de ma manette vibre moins que le gauche, est-ce normal ?',
    answer:
      "Oui, c'est tout à fait normal. Les manettes ont généralement un design asymétrique où un côté gère les vibrations fortes et profondes, et l'autre les vibrations rapides et subtiles.",
  },
  {
    question: 'Ces tests consomment-ils beaucoup de batterie ?',
    answer:
      "La vibration est l'une des fonctions les plus énergivores d'une manette sans fil. Des tests continus et longs videront la batterie plus vite qu'habituellement.",
  },
];

const howToData = [
  {
    name: 'Connectez et allumez votre manette',
    text: "Reliez votre manette au PC, Mac ou mobile via câble USB ou Bluetooth.",
  },
  {
    name: 'Appuyez sur un bouton de la manette',
    text: "Les navigateurs exigent d'appuyer sur au moins un bouton pour que la manette soit détectée.",
  },
  {
    name: 'Ajustez les moteurs de vibration',
    text: "Configurez la puissance du Moteur Fort (Grave) et du Moteur Fin (Aigu) indépendamment.",
  },
  {
    name: 'Exécutez les patterns',
    text: "Appuyez sur un des presets ou configurez manuellement les paramètres et envoyez le signal.",
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

export const content: ToolLocaleContent<ProbadorVibracionMandoUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Comment auditer la vibration de votre manette gaming', level: 2 },
    {
      type: 'paragraph',
      html: "Le retour haptique est l'un des éléments les plus immersifs du matériel gaming. Quand un moteur tombe en panne, les premiers symptômes sont des bourdonnements anormaux ou des vibrations asymétriques. Les diagnostiquer tôt prévient des pannes majeures.",
    },
    { type: 'title', text: 'Pourquoi effectuer le test de vibration ?', level: 3 },
    {
      type: 'paragraph',
      html: "Lors de l'achat d'une manette d'occasion, après une mise à jour des pilotes ou après une chute, tester les moteurs haptiques permet de distinguer les vraies pannes matérielles des problèmes logiciels. Compatible Xbox, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro et manettes USB génériques.",
    },
    { type: 'title', text: 'Architecture Dual-Rumble vs. Actionneurs Linéaires', level: 3 },
    {
      type: 'paragraph',
      html: "Les manettes classiques (Xbox, DualShock) utilisent deux micromoteurs asymétriques : le gauche génère des vibrations graves et profondes ; le droit produit des bourdonnements aigus et rapides. Les appareils avancés comme le DualSense utilisent des actionneurs linéaires qui simulent textures et résistance.",
    },
  ],
  ui: {
    badge: 'Test de Vibration',
    title: 'Testeur de Vibration de Manette',
    description: 'Contrôle direct sur le moteur Dual-Rumble de votre manette.',
    deviceDisconnected: 'Manette Déconnectée',
    deviceDisconnectedSub: 'Appuyez sur un bouton de votre manette pour commencer',
    deviceFallback: 'Manette Connectée',
    deviceConnectedSub: 'Connexion stable. Prêt à tester.',
    noSupportWarning: "Pas de support Dual-Rumble détecté dans votre navigateur. Utilisation de la vibration générique de base.",
    tabPresets: 'Presets Top',
    tabCustom: 'Précision Pure',
    presetHeavyTitle: 'Coup de Marteau',
    presetHeavyDesc: 'Moteur lourd à fond pendant 300ms. Simule un coup fort.',
    presetLightTitle: "Bourdonnement d'Abeille",
    presetLightDesc: 'Moteur droit uniquement. Idéal pour détecter les bourdonnements anormaux.',
    presetHeartbeatTitle: "Cœur qui s'emballe",
    presetHeartbeatDesc: 'Pulsations subtiles consécutives. Parfait pour vérifier la rétention inertielle.',
    presetSongTitle: 'Rythme Pièce',
    presetSongDesc: 'Simule le son de pièces collectées. Court et tactile.',
    presetRockYouTitle: 'Rock You!',
    presetRockYouDesc: "Le classique de Queen dans vos mains : boum, boum, clap !",
    presetEarthquakeTitle: 'Tremblement Maximal !',
    presetEarthquakeDesc: 'Les deux moteurs à 100% de force explosive. TRÈS intense.',
    customStrongLabel: 'Force Grave (Gauche)',
    customWeakLabel: 'Force Aiguë (Droite)',
    customDurationLabel: "Durée de l'Impulsion",
    btnSendSignal: 'ENVOYER LE SIGNAL MAINTENANT',
  },
};
