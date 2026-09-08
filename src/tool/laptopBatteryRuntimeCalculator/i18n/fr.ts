import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { LaptopBatteryRuntimeUI } from '../ui';

const slug = 'calculateur-autonomie-batterie-ordinateur-portable';
const title = 'Calculateur d\u2019autonomie de batterie d\u2019ordinateur portable';
const description = 'Estimez combien de temps votre ordinateur portable peut fonctionner avec sa charge actuelle en usage léger, équilibré ou intensif.';
const faq = [
  { question: 'Que calcule cet outil d\u2019autonomie de batterie ?', answer: 'Il divise l\u2019énergie actuellement disponible par la puissance saisie pour chaque usage. C\u2019est une estimation de planification, pas une mesure en direct ni une garantie du fabricant.' },
  { question: 'Où trouver la capacité et l\u2019état de la batterie ?', answer: 'Consultez le rapport de batterie ou la documentation du fabricant pour la capacité de conception et la capacité actuelle à pleine charge. L\u2019état correspond à cette capacité actuelle exprimée en pourcentage de la capacité d\u2019origine.' },
  { question: 'Pourquoi les autonomies changent-elles selon l\u2019usage ?', answer: 'Un ordinateur qui consomme davantage de watts utilise la même énergie stockée plus vite. Les appels vidéo, les jeux, un écran externe, une forte luminosité et les charges prolongées du processeur ou du GPU augmentent la consommation moyenne.' },
  { question: 'L\u2019outil peut-il lire automatiquement la batterie ?', answer: 'Non. Il fonctionne localement dans le navigateur et utilise vos valeurs. Remplacez les exemples par un rapport récent ou une moyenne mesurée lorsque la précision compte.' },
];
const howTo = [
  { name: 'Lire la capacité d\u2019origine', text: 'Saisissez la capacité de conception en wattheures. Si vous ne connaissez que les milliampères-heures et les volts, convertissez-les avec Wh = V × Ah.' },
  { name: 'Décrire la batterie actuelle', text: 'Indiquez la capacité actuelle à pleine charge en pourcentage de la capacité d\u2019origine, puis la charge prévue au moment de quitter le chargeur.' },
  { name: 'Régler des consommations réalistes', text: 'Choisissez le profil le plus proche et modifiez les watts si vous disposez d\u2019une mesure de votre ordinateur ou d\u2019un wattmètre.' },
  { name: 'Prendre une décision de mobilité', text: 'Lisez les trois lignes et retenez la plus courte pour la tâche exigeante. Avec une marge faible ou urgente, réduisez la charge, emportez le chargeur ou prévoyez une pause.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'fr' };

export const content: ToolLocaleContent<LaptopBatteryRuntimeUI> = {
  slug, title, description, faq, howTo, bibliography, schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Ce que mesure réellement une estimation d\u2019autonomie', level: 2 },
    { type: 'paragraph', html: 'Une batterie d\u2019ordinateur portable stocke de l\u2019énergie en wattheures. L\u2019appareil dépense cette énergie à une puissance mesurée en watts. Le calculateur transforme ces deux données en durée pour décider si une charge suffit pour un trajet, une réunion, un cours ou une séance de travail.' },
    { type: 'paragraph', html: 'Le modèle estime d\u2019abord la capacité actuelle à pleine charge à partir de la capacité d\u2019origine et de l\u2019état de la batterie. Il applique ensuite le pourcentage prévu au démarrage. Chaque ligne d\u2019usage consomme une part de ce budget énergétique.' },
    { type: 'title', text: 'Choisir des données fiables', level: 2 },
    { type: 'paragraph', html: 'Utilisez un rapport de batterie ou les caractéristiques du fabricant. La capacité de conception, la capacité actuelle à pleine charge et la charge restante sont différentes. Si vous ne connaissez que les volts et les ampères-heures, convertissez avec <strong>Wh = V × Ah</strong> ; 1 000 mAh valent 1 Ah.' },
    { type: 'list', items: ['Calculez l\u2019état en divisant la capacité actuelle à pleine charge par la capacité de conception.', 'Saisissez la charge réellement disponible au début de la séance.', 'Utilisez une puissance moyenne mesurée pour une longue séance importante.', 'Incluez écran externe, station d\u2019accueil ou application exigeante dans le scénario.'] },
    { type: 'title', text: 'Lire l\u2019autonomie comme une marge de planification', level: 2 },
    { type: 'paragraph', html: 'La ligne légère correspond à la lecture et aux documents simples ; la ligne équilibrée au multitâche courant ; la ligne intensive montre le coût d\u2019une puissance élevée maintenue. Comparez votre usage au temps nécessaire et planifiez avec le résultat crédible le plus court.' },
    { type: 'table', headers: ['Signal', 'Signification', 'Action'], rows: [['Confortable', 'Six heures ou plus à cette puissance', 'La séance dispose d\u2019une large marge.'], ['Faisable', 'De trois à six heures', 'Convient à une séance définie, prévoyez un chargeur.'], ['Serré', 'D\u2019une à trois heures', 'Réduisez la puissance ou prévoyez une pause.'], ['Urgent', 'Moins d\u2019une heure', 'Considérez l\u2019usage comme dépendant du chargeur.']] },
    { type: 'title', text: 'Ce que l\u2019estimation ne peut pas garantir', level: 2 },
    { type: 'paragraph', html: 'La consommation réelle change constamment. Luminosité, radios, température, tâches en arrière-plan, firmware et réserves du système déplacent l\u2019heure d\u2019extinction. L\u2019outil ne lit pas les capteurs, ne modélise pas la chimie de la batterie et ne certifie aucune durée.' },
    { type: 'tip', title: 'Conseil de mesure', html: 'Notez le pourcentage de batterie et le temps écoulé pendant une séance représentative. Remplacez les watts du profil par la moyenne observée et refaites le calcul pour chaque type d\u2019usage.' },
  ],
  ui: {
    batteryInputsLabel: 'Point de départ de la batterie', designCapacityLabel: 'Capacité d\u2019origine de la batterie', designCapacityHint: 'Énergie de la batterie neuve', healthLabel: 'État de la batterie', healthHint: 'Charge complète actuelle comparée à l\u2019origine', chargeLabel: 'Charge au départ', chargeHint: 'Charge prévue au début du travail', scenariosLabel: 'Autonomie selon l\u2019usage', scenariosHint: 'Modifiez la puissance moyenne de chaque usage', powerLabel: 'Consommation moyenne', wattsSuffix: 'W', presetsLabel: 'Commencer avec un profil', presetBalanced: 'Travail quotidien', presetTravel: 'Économie en voyage', presetCreative: 'Création intensive', runwayLabel: 'Parcours énergétique', runwayCaption: 'Chaque ligne indique quand cet usage épuiserait la même charge de départ.', availableEnergyLabel: 'Énergie disponible maintenant', fullCapacityLabel: 'Capacité actuelle à pleine charge', shortestScenarioLabel: 'Planifier autour de', runtimeLabel: 'Autonomie estimée', loadLabel: 'Puissance', healthStateExcellent: 'État de batterie excellent', healthStateGood: 'État de batterie bon', healthStateAging: 'Batterie vieillissante', healthStateWorn: 'Batterie usée', statusComfortable: 'Marge confortable', statusWorkable: 'Séance faisable', statusTight: 'Marge serrée', statusUrgent: 'Dépend du chargeur', scenarioLight: 'Usage léger', scenarioBalanced: 'Usage équilibré', scenarioIntense: 'Usage intensif', sceneBatteryLabel: 'Charge de départ', sceneEnergyLabel: 'Énergie disponible', sceneTimeLabel: 'Temps d\u2019autonomie', noteLabel: 'Limite du modèle', noteText: 'Il s\u2019agit d\u2019une estimation de planification basée sur vos données. La consommation réelle et les réserves du système peuvent réduire la durée.',
  },
};
