import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestMandoUI } from '../ui';

const slug = 'gamepad-test-online';
const title = 'Online Gamepad & Controller Test';
const description = 'Test je Xbox, PlayStation of PC controller. Visualiseer dead zones, joystick drift en knoppen.';

const faqData = [
  {
    question: 'Wat is Joystick Drift?',
    answer: 'Drift treedt op wanneer de controller beweging registreert zonder dat de joystick wordt aangeraakt. Het wordt veroorzaakt door slijtage aan de interne potentiometers, die een vals elektrisch signaal in een constante richting sturen.',
  },
  {
    question: 'Hoe kan ik drift via software oplossen?',
    answer: 'Als de drift mild is, kun je een grotere "Dead Zone" (Deadzone) configureren in je game-instellingen. Dit negeert kleine joystickbewegingen in het midden.',
  },
  {
    question: 'Is het compatibel met PS5, Xbox en Switch controllers?',
    answer: 'Ja. Onze tool maakt gebruik van de standaard Gamepad API van moderne browsers, die vrijwel elke via USB of Bluetooth aangesloten controller detecteert, inclusief DualSense, DualShock 4 en Xbox-controllers.',
  },
  {
    question: 'Waarom detecteert de browser mijn controller niet?',
    answer: 'Uit veiligheidsoverwegingen schakelen browsers de gamepad pas in na de eerste druk op een knop. Als deze niet verschijnt, druk dan op een willekeurige knop (zoals A of X) en zorg ervoor dat je niet in de strikte incognitomodus zit.',
  },
];

const howToData = [
  {
    name: 'Sluit de controller aan',
    text: 'Sluit je gamepad aan via USB of koppel deze via Bluetooth met je computer.',
  },
  {
    name: 'Activeer detectie',
    text: 'Beweeg de joysticks of druk op een willekeurige knop zodat de browser het aangesloten apparaat herkent.',
  },
  {
    name: 'Test dead zones',
    text: 'Laat de joysticks los en observeer de assen op het scherm. Als de waarden niet op 0.0000 staan, heb je lichte drift.',
  },
  {
    name: 'Controleer knoppen en vibratie',
    text: 'Druk op elke knop en trigger. De visuele indicatoren moeten oplichten en als je controller dit ondersteunt, kun je de vibratiemotor testen.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<TestMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Technische Referenties',
  bibliography: [
    {
      name: 'Gamepad API Standard - W3C',
      url: 'https://w3c.github.io/gamepad/',
    },
    {
      name: 'Vibration API - MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Online Gamepad Test: Detecteer Drift en Joystick Problemen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gratis tool om Xbox, PlayStation, Switch en andere controllers te testen. Visualiseer dead zones, detecteer drift en test vibratie.',
    },
    {
      type: 'title',
      text: 'Wat is Joystick Drift',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Drift is een veelvoorkomend defect bij analoge joysticks waarbij de stick beweging registreert zonder te worden aangeraakt. Het wordt veroorzaakt door slijtage aan de interne potentiometers.',
    },
    {
      type: 'title',
      text: 'Controller Compatibiliteit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Compatibel met Xbox One, Xbox Series X/S, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro en vrijwel elke moderne USB of Bluetooth gamepad.',
    },
  ],
  ui: {
    badge: 'Input Test',
    title: 'Gamepad en Controller Test',
    description: 'Test je controller en detecteer problemen.',
    connectionMessage: 'Sluit je USB- of Bluetooth-apparaat aan',
    connectionStatus: 'Verbonden',
    axisLabel: 'Assen',
    buttonsLabel: 'Knoppen',
    vibrationTitle: 'Vibratie Test',
    vibrationDescription: 'Vereist browserondersteuning en een compatibele gamepad.',
    vibrationLow: 'Laag (Rumble)',
    vibrationHigh: 'Hoog (Buzz)',
    eventHistoryTitle: 'Gebeurtenisgeschiedenis',
    eventHistoryClear: 'Wissen',
    eventWaiting: 'Wachten op gebeurtenissen...',
    gameStartBtn: 'START CHALLENGE',
    gameControllerWarning: 'Sluit een gamepad aan of gebruik het toetsenbord',
    gameTimer: 'Timer',
    gameScore: 'Score',
    gameInstruction: 'Snel drukken',
    gameCompleted: 'Challenge voltooid',
    gameNewRecord: 'NIEUW RECORD',
    gameRestartBtn: 'Opnieuw proberen',
    gameFeedback: 'Je bent een knoppen-legende',
    gameIntroTitlePre: 'Pro Gamer ',
    gameIntroHighlight: 'Reflexen',
    gameIntroTitlePost: '?',
    gameIntroDescPre: 'Test de latentie en reactiesnelheid van je controller. Je hebt ',
    gameIntroDescSeconds: '30 seconden',
    gameIntroDescPost: ' om de knoppen onder de knie te krijgen.',
    gameShareBtn: 'DEEL RANK',
    gameLogConnected: 'Verbonden',
    gameLogDisconnected: 'Verbinding verbroken',
    gameLogCleared: 'Log gewist...',
    gameLogBtnPrefix: 'Knop',
    gameVibNotSupported: 'Vibratie niet ondersteund.',
    gameVibLow: 'Laag',
    gameVibHigh: 'Hoog',
    gameMoveStick: 'BEWEEG STICK',
    gamePress: 'DRUKKEN',
    rankLegendaryName: 'LEGENDARISCH',
    rankLegendaryDesc: 'Je vingers bewegen met de snelheid van het geluid.',
    rankLegendaryFlavor: 'Mijn controller vliegt!',
    rankProName: 'PRO GAMER',
    rankProDesc: 'Je hebt stalen reflexen en een goed gekalibreerde controller.',
    rankProFlavor: 'Mijn controller vliegt!',
    rankGamerName: 'GAMER',
    rankGamerDesc: 'Niet slecht, maar je hebt meer oefening nodig voor competitief spel.',
    rankGamerFlavor: 'Bijna gelukt!',
    rankNoobName: 'NOOB',
    rankNoobDesc: 'Weet je zeker dat de controller aan staat?',
    rankNoobFlavor: 'De controller heeft het op me gemunt!',
    gameShareText: 'Kun je mij verslaan?',
    gameShareScorePrefix: 'Ik heb',
    gameShareScoreSuffix: 'punten gehaald',
    gameShareTitle: 'Online Gamepad Test',
  },
};
