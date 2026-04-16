import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestMandoUI } from '../ui';

const slug = 'gamepad-test-svenska';
const title = 'Gamepad & Controller Test Online';
const description = 'Testa din Xbox-, PlayStation- eller PC-kontroll. Visualisera döda zoner, joystickdrift och knappar.';

const faqData = [
  {
    question: 'Vad är Joystickdrift?',
    answer: 'Drift uppstår när kontrollen registrerar rörelse utan att joysticken vidrörs. Det orsakas av slitage på de interna potentiometrarna, som skickar en falsk elektrisk signal i en konstant riktning.',
  },
  {
    question: 'Hur kan jag fixa drift med mjukvara?',
    answer: 'Om driften är mild kan du konfigurera en större "Död zon" (Deadzone) i dina spelinställningar. Detta ignorerar små joystickrörelser i mitten.',
  },
  {
    question: 'Är det kompatibelt med PS5-, Xbox- och Switch-kontroller?',
    answer: 'Ja. Vårt verktyg använder standard Gamepad API från moderna webbläsare, som upptäcker nästan alla kontroller anslutna via USB eller Bluetooth, inklusive DualSense, DualShock 4 och Xbox-kontroller.',
  },
  {
    question: 'Varför upptäcker inte webbläsaren min kontroll?',
    answer: 'Av säkerhetsskäl aktiverar webbläsare endast gamepaden efter den första knapptryckningen. Om den inte visas, tryck på valfri knapp (som A eller X) och se till att du inte är i strikt inkognitoläge.',
  },
];

const howToData = [
  {
    name: 'Anslut kontrollen',
    text: 'Anslut din gamepad via USB eller para ihop den via Bluetooth med din dator.',
  },
  {
    name: 'Aktivera detektering',
    text: 'Rör på joystickarna eller tryck på valfri knapp så att webbläsaren känner igen den anslutna enheten.',
  },
  {
    name: 'Testa döda zoner',
    text: 'Släpp joystickarna och observera axlarna på skärmen. Om värdena inte är 0,0000 har du en lätt drift.',
  },
  {
    name: 'Verifiera knappar och vibration',
    text: 'Tryck på varje knapp och avtryckare. Visuella indikatorer bör tändas och om din kontroll stöder det kan du testa vibrationsmotorn.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<TestMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Tekniska referenser',
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
      text: 'Gamepad Test Online: Upptäck Drift och Joystickproblem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gratis verktyg för att testa Xbox-, PlayStation-, Switch- och andra kontroller. Visualisera döda zoner, detektera drift och testa vibration.',
    },
    {
      type: 'title',
      text: 'Vad är Joystickdrift',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Drift är ett vanligt fel på analoga joysticks där spaken registrerar rörelse utan att man rör vid den. Det orsakas av slitage på de interna potentiometrarna.',
    },
    {
      type: 'title',
      text: 'Kontrollkompatibilitet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kompatibel med Xbox One, Xbox Series X/S, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro och praktiskt taget vilken modern USB- eller Bluetooth-gamepad som helst.',
    },
  ],
  ui: {
    badge: 'Inmatningstest',
    title: 'Gamepad och kontrolltest',
    description: 'Testa din kontroll och upptäck problem.',
    connectionMessage: 'Anslut din USB- eller Bluetooth-enhet',
    connectionStatus: 'Ansluten',
    axisLabel: 'Axlar',
    buttonsLabel: 'Knappar',
    vibrationTitle: 'Vibrationstest',
    vibrationDescription: 'Kräver webbläsarstöd och kompatibel gamepad.',
    vibrationLow: 'Låg (Rumble)',
    vibrationHigh: 'Hög (Buzz)',
    eventHistoryTitle: 'Händelsehistorik',
    eventHistoryClear: 'Rensa',
    eventWaiting: 'Väntar på händelser...',
    gameStartBtn: 'STARTA UTMANING',
    gameControllerWarning: 'Anslut en gamepad eller använd tangentbord',
    gameTimer: 'Timer',
    gameScore: 'Poäng',
    gameInstruction: 'Tryck snabbt',
    gameCompleted: 'Utmaning slutförd',
    gameNewRecord: 'NYTT REKORD',
    gameRestartBtn: 'Försök igen',
    gameFeedback: 'Du är en knapplegend',
    gameIntroTitlePre: 'Reflexer som en ',
    gameIntroHighlight: 'Pro Gamer',
    gameIntroTitlePost: '?',
    gameIntroDescPre: 'Testa din kontrolls latens och din reaktionshastighet. Du har ',
    gameIntroDescSeconds: '30 sekunder',
    gameIntroDescPost: ' på dig att bemästra knapparna.',
    gameShareBtn: 'DELA RANK',
    gameLogConnected: 'Ansluten',
    gameLogDisconnected: 'Frånkopplad',
    gameLogCleared: 'Loggen rensad...',
    gameLogBtnPrefix: 'Knapp',
    gameVibNotSupported: 'Vibration stöds inte.',
    gameVibLow: 'Låg',
    gameVibHigh: 'Hög',
    gameMoveStick: 'RÖR SPAKEN',
    gamePress: 'TRYCK',
    rankLegendaryName: 'LEGENDARISK',
    rankLegendaryDesc: 'Dina fingrar rör sig med ljudets hastighet.',
    rankLegendaryFlavor: 'Min kontroll flyger!',
    rankProName: 'PRO GAMER',
    rankProDesc: 'Du har stålreflexer och en välkalibrerad kontroll.',
    rankProFlavor: 'Min kontroll flyger!',
    rankGamerName: 'GAMER',
    rankGamerDesc: 'Inte illa, men du behöver mer träning för tävlingsspel.',
    rankGamerFlavor: 'Nästan där!',
    rankNoobName: 'NOOB',
    rankNoobDesc: 'Är du säker på att kontrollen är påslagen?',
    rankNoobFlavor: 'Kontrollen har något emot mig!',
    gameShareText: 'Kan du slå mig?',
    gameShareScorePrefix: 'Jag fick',
    gameShareScoreSuffix: 'träffar',
    gameShareTitle: 'Gamepad Test Online',
  },
};
