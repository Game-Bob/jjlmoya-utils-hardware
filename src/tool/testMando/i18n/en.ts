import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestMandoUI } from '../ui';

const slug = 'gamepad-test';
const title = 'Online Gamepad & Controller Test';
const description = 'Test your Xbox, PlayStation or PC controller. Visualize dead zones, joystick drift and buttons.';

const faqData = [
  {
    question: 'What is Joystick Drift?',
    answer: 'Drift occurs when the controller registers movement without touching the joystick. It is caused by wear on the internal potentiometers, which send a false electrical signal in a constant direction.',
  },
  {
    question: 'How can I fix drift with software?',
    answer: 'If the drift is mild, you can configure a larger "Dead Zone" (Deadzone) in your game settings. This ignores small joystick movements in the center.',
  },
  {
    question: 'Is it compatible with PS5, Xbox and Switch controllers?',
    answer: 'Yes. Our tool uses the standard Gamepad API from modern browsers, which detects almost any controller connected via USB or Bluetooth, including DualSense, DualShock 4 and Xbox Controllers.',
  },
  {
    question: 'Why doesn\'t the browser detect my controller?',
    answer: 'For security, browsers only enable the gamepad after the first button press. If it doesn\'t appear, press any button (like A or X) and make sure you\'re not in strict incognito mode.',
  },
];

const howToData = [
  {
    name: 'Connect the controller',
    text: 'Plug your gamepad in via USB or pair it over Bluetooth with your computer.',
  },
  {
    name: 'Activate detection',
    text: 'Move the joysticks or press any button so the browser recognizes the connected device.',
  },
  {
    name: 'Test dead zones',
    text: 'Release the joysticks and observe the axes on screen. If the values are not at 0.0000, you have slight drift.',
  },
  {
    name: 'Verify buttons and vibration',
    text: 'Press each button and trigger. Visual indicators should light up and if your controller supports it, you can test the vibration motor.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<TestMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Technical References',
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
      text: 'Online Gamepad Test: Detect Drift and Joystick Issues',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Free tool to test Xbox, PlayStation, Switch and other controllers. Visualize dead zones, detect drift and test vibration.',
    },
    {
      type: 'title',
      text: 'What is Joystick Drift',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Drift is a common defect in analog joysticks where the stick registers movement without being touched. It is caused by wear on the internal potentiometers.',
    },
    {
      type: 'title',
      text: 'Controller Compatibility',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Compatible with Xbox One, Xbox Series X/S, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro and virtually any modern USB or Bluetooth gamepad.',
    },
  ],
  ui: {
    badge: 'Input Test',
    title: 'Gamepad and Controller Test',
    description: 'Test your controller and detect issues.',
    connectionMessage: 'Connect your USB or Bluetooth device',
    connectionStatus: 'Connected',
    axisLabel: 'Axes',
    buttonsLabel: 'Buttons',
    vibrationTitle: 'Vibration Test',
    vibrationDescription: 'Requires browser support and compatible gamepad.',
    vibrationLow: 'Low (Rumble)',
    vibrationHigh: 'High (Buzz)',
    eventHistoryTitle: 'Event History',
    eventHistoryClear: 'Clear',
    eventWaiting: 'Waiting for events...',
    gameStartBtn: 'START CHALLENGE',
    gameControllerWarning: 'Connect a gamepad or use keyboard',
    gameTimer: 'Timer',
    gameScore: 'Score',
    gameInstruction: 'Press fast',
    gameCompleted: 'Challenge Completed',
    gameNewRecord: 'NEW RECORD',
    gameRestartBtn: 'Retry',
    gameFeedback: 'You are a button legend',
    gameIntroTitlePre: 'Pro Gamer ',
    gameIntroHighlight: 'Reflexes',
    gameIntroTitlePost: '?',
    gameIntroDescPre: 'Test your controller latency and reaction speed. You have ',
    gameIntroDescSeconds: '30 seconds',
    gameIntroDescPost: ' to master the buttons.',
    gameShareBtn: 'SHARE RANK',
    gameLogConnected: 'Connected',
    gameLogDisconnected: 'Disconnected',
    gameLogCleared: 'Log cleared...',
    gameLogBtnPrefix: 'Button',
    gameVibNotSupported: 'Vibration not supported.',
    gameVibLow: 'Low',
    gameVibHigh: 'High',
    gameMoveStick: 'MOVE STICK',
    gamePress: 'PRESS',
    rankLegendaryName: 'LEGENDARY',
    rankLegendaryDesc: 'Your fingers move at the speed of sound.',
    rankLegendaryFlavor: 'My controller is flying!',
    rankProName: 'PRO GAMER',
    rankProDesc: 'You have steel reflexes and a well-calibrated controller.',
    rankProFlavor: 'My controller is flying!',
    rankGamerName: 'GAMER',
    rankGamerDesc: 'Not bad, but you need more practice for competitive play.',
    rankGamerFlavor: 'Almost got it!',
    rankNoobName: 'NOOB',
    rankNoobDesc: 'Are you sure you have the controller turned on?',
    rankNoobFlavor: 'The controller has it in for me!',
    gameShareText: 'Can you beat me?',
    gameShareScorePrefix: 'I got',
    gameShareScoreSuffix: 'hits',
    gameShareTitle: 'Online Gamepad Test',
  },
};
