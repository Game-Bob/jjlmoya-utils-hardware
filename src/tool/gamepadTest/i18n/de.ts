import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestMandoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gamepad-test-deutsch';
const title = 'Online Gamepad & Controller Test';
const description = 'Testen Sie Ihren Xbox-, PlayStation- oder PC-Controller. Visualisieren Sie Totzonen, Joystick-Drift und Tasten.';

const faqData = [
  {
    question: 'Was ist Joystick-Drift?',
    answer: 'Drift tritt auf, wenn der Controller Bewegungen registriert, ohne dass der Joystick berührt wird. Dies wird durch Verschleiß der internen Potentiometer verursacht, die ein falsches elektrisches Signal in eine konstante Richtung senden.',
  },
  {
    question: 'Wie kann ich Drift per Software beheben?',
    answer: 'Wenn der Drift geringfügig ist, können Sie in Ihren Spieleinstellungen eine größere "Totzone" (Deadzone) konfigurieren. Dadurch werden kleine Joystick-Bewegungen in der Mitte ignoriert.',
  },
  {
    question: 'Ist es mit PS5-, Xbox- und Switch-Controllern kompatibel?',
    answer: 'Ja. Unser Tool verwendet die Standard-Gamepad-API moderner Browser, die fast jeden über USB oder Bluetooth angeschlossenen Controller erkennt, einschließlich DualSense, DualShock 4 und Xbox-Controller.',
  },
  {
    question: 'Warum erkennt der Browser meinen Controller nicht?',
    answer: 'Aus Sicherheitsgründen aktivieren Browser das Gamepad erst nach dem ersten Tastendruck. Wenn es nicht erscheint, drücken Sie eine beliebige Taste (wie A oder X) und stellen Sie sicher, dass Sie sich nicht im strengen Inkognito-Modus befinden.',
  },
];

const howToData = [
  {
    name: 'Controller anschließen',
    text: 'Schließen Sie Ihr Gamepad über USB an oder koppeln Sie es über Bluetooth mit Ihrem Computer.',
  },
  {
    name: 'Erkennung aktivieren',
    text: 'Bewegen Sie die Joysticks oder drücken Sie eine beliebige Taste, damit der Browser das angeschlossene Gerät erkennt.',
  },
  {
    name: 'Totzonen testen',
    text: 'Lassen Sie die Joysticks los und beobachten Sie die Achsen auf dem Bildschirm. Wenn die Werte nicht bei 0,0000 liegen, haben Sie einen leichten Drift.',
  },
  {
    name: 'Tasten und Vibration prüfen',
    text: 'Drücken Sie jede Taste und jeden Trigger. Die visuellen Anzeigen sollten aufleuchten, und wenn Ihr Controller dies unterstützt, können Sie den Vibrationsmotor testen.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<TestMandoUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Online Gamepad Test: Drift und Joystick Probleme erkennen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kostenloses Tool zum Testen von Xbox-, PlayStation-, Switch- und anderen Controllern. Visualisieren Sie Totzonen, erkennen Sie Drift und testen Sie die Vibration.',
    },
    {
      type: 'title',
      text: 'Was ist Joystick-Drift',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Drift ist ein häufiger Defekt bei analogen Joysticks, bei dem der Stick Bewegungen registriert, ohne berührt zu werden. Er wird durch Verschleiß der internen Potentiometer verursacht.',
    },
    {
      type: 'title',
      text: 'Controller-Kompatibilität',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kompatibel mit Xbox One, Xbox Series X/S, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro und praktisch jedem modernen USB- oder Bluetooth-Gamepad.',
    },
  ],
  ui: {
    badge: 'Eingabetest',
    title: 'Gamepad und Controller Test',
    description: 'Testen Sie Ihren Controller und erkennen Sie Probleme.',
    connectionMessage: 'Schließen Sie Ihr USB- oder Bluetooth-Gerät an',
    connectionStatus: 'Verbunden',
    axisLabel: 'Achsen',
    buttonsLabel: 'Tasten',
    vibrationTitle: 'Vibrationstest',
    vibrationDescription: 'Erfordert Browser-Unterstützung und kompatibles Gamepad.',
    vibrationLow: 'Niedrig (Rumble)',
    vibrationHigh: 'Hoch (Buzz)',
    eventHistoryTitle: 'Ereignisverlauf',
    eventHistoryClear: 'Löschen',
    eventWaiting: 'Warte auf Ereignisse...',
    gameStartBtn: 'CHALLENGE STARTEN',
    gameControllerWarning: 'Controller anschließen oder Tastatur nutzen',
    gameTimer: 'Zeit',
    gameScore: 'Punkte',
    gameInstruction: 'Schnell drücken',
    gameCompleted: 'Herausforderung abgeschlossen',
    gameNewRecord: 'NEUER REKORD',
    gameRestartBtn: 'Wiederholen',
    gameFeedback: 'Du bist eine Tasten-Legende',
    gameIntroTitlePre: 'Pro Gamer ',
    gameIntroHighlight: 'Reflexe',
    gameIntroTitlePost: '?',
    gameIntroDescPre: 'Testen Sie die Latenz und Reaktionsgeschwindigkeit Ihres Controllers. Sie haben ',
    gameIntroDescSeconds: '30 Sekunden',
    gameIntroDescPost: ', um die Tasten zu meistern.',
    gameShareBtn: 'RANG TEILEN',
    gameLogConnected: 'Verbunden',
    gameLogDisconnected: 'Getrennt',
    gameLogCleared: 'Protokoll gelöscht...',
    gameLogBtnPrefix: 'Taste',
    gameVibNotSupported: 'Vibration nicht unterstützt.',
    gameVibLow: 'Niedrig',
    gameVibHigh: 'Hoch',
    gameMoveStick: 'STICK BEWEGEN',
    gamePress: 'DRÜCKEN',
    rankLegendaryName: 'LEGENDÄR',
    rankLegendaryDesc: 'Deine Finger bewegen sich mit Schallgeschwindigkeit.',
    rankLegendaryFlavor: 'Mein Controller fliegt!',
    rankProName: 'PRO GAMER',
    rankProDesc: 'Du hast stählerne Reflexe und einen gut kalibrierten Controller.',
    rankProFlavor: 'Mein Controller fliegt!',
    rankGamerName: 'GAMER',
    rankGamerDesc: 'Nicht schlecht, aber du brauchst mehr Übung für kompetitives Spielen.',
    rankGamerFlavor: 'Fast geschafft!',
    rankNoobName: 'NOOB',
    rankNoobDesc: 'Bist du sicher, dass der Controller eingeschaltet ist?',
    rankNoobFlavor: 'Der Controller hat was gegen mich!',
    gameShareText: 'Kannst du mich schlagen?',
    gameShareScorePrefix: 'Ich habe',
    gameShareScoreSuffix: 'Treffer erzielt',
    gameShareTitle: 'Online Gamepad Test',
  },
};
