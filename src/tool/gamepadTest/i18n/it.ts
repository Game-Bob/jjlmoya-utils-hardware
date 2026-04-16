import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestMandoUI } from '../ui';

const slug = 'test-gamepad-online';
const title = 'Test Gamepad e Controller Online';
const description = 'Testa il tuo controller Xbox, PlayStation o PC. Visualizza zone morte, drift degli analogici e pulsanti.';

const faqData = [
  {
    question: "Cos'è il Drift degli Analogici?",
    answer: "Il drift si verifica quando il controller registra un movimento senza che l'analogico venga toccato. È causato dall'usura dei potenziometri interni, che inviano un falso segnale elettrico in una direzione costante.",
  },
  {
    question: 'Come posso risolvere il drift tramite software?',
    answer: 'Se il drift è lieve, puoi configurare una "Zona Morta" (Deadzone) più ampia nelle impostazioni del gioco. Questo ignora i piccoli movimenti dell\'analogico al centro.',
  },
  {
    question: 'È compatibile con i controller PS5, Xbox e Switch?',
    answer: "Sì. Il nostro strumento utilizza la Gamepad API standard dei browser moderni, che rileva quasi tutti i controller collegati via USB o Bluetooth, inclusi DualSense, DualShock 4 e controller Xbox.",
  },
  {
    question: 'Perché il browser non rileva il mio controller?',
    answer: "Per sicurezza, i browser attivano il gamepad solo dopo la pressione del primo pulsante. Se non appare, premi un pulsante qualsiasi (come A o X) e assicurati di non essere in modalità incognito rigorosa.",
  },
];

const howToData = [
  {
    name: 'Collega il controller',
    text: 'Collega il tuo gamepad tramite USB o associalo via Bluetooth al tuo computer.',
  },
  {
    name: 'Attiva il rilevamento',
    text: 'Muovi gli analogici o premi un pulsante qualsiasi affinché il browser riconosca il dispositivo collegato.',
  },
  {
    name: 'Testa le zone morte',
    text: 'Rilascia gli analogici e osserva gli assi sullo schermo. Se i valori non sono a 0.0000, hai un leggero drift.',
  },
  {
    name: 'Verifica pulsanti e vibrazione',
    text: 'Premi ogni pulsante e grilletto. Gli indicatori visivi dovrebbero illuminarsi e, se il tuo controller lo supporta, puoi testare il motore di vibrazione.',
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<TestMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti Tecnici',
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
      text: 'Test Gamepad Online: Rileva Drift e Problemi agli Analogici',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Strumento gratuito per testare controller Xbox, PlayStation, Switch e altri. Visualizza zone morte, rileva il drift e testa la vibrazione.',
    },
    {
      type: 'title',
      text: "Cos'è il Drift degli Analogici",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Il drift è un difetto comune negli analogici dove la levetta registra un movimento senza essere toccata. È causato dall'usura dei potenziometri interni.",
    },
    {
      type: 'title',
      text: 'Compatibilità Controller',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Compatibile con Xbox One, Xbox Series X/S, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro e praticamente qualsiasi gamepad USB o Bluetooth moderno.',
    },
  ],
  ui: {
    badge: 'Test Input',
    title: 'Test Gamepad e Controller',
    description: 'Testa il tuo controller e rileva eventuali problemi.',
    connectionMessage: 'Collega il tuo dispositivo USB o Bluetooth',
    connectionStatus: 'Connesso',
    axisLabel: 'Assi',
    buttonsLabel: 'Pulsanti',
    vibrationTitle: 'Test Vibrazione',
    vibrationDescription: 'Richiede il supporto del browser e un gamepad compatibile.',
    vibrationLow: 'Bassa (Rumble)',
    vibrationHigh: 'Alta (Buzz)',
    eventHistoryTitle: 'Cronologia Eventi',
    eventHistoryClear: 'Cancella',
    eventWaiting: 'In attesa di eventi...',
    gameStartBtn: 'INIZIA SFIDA',
    gameControllerWarning: 'Collega un gamepad o usa la tastiera',
    gameTimer: 'Timer',
    gameScore: 'Punteggio',
    gameInstruction: 'Premi velocemente',
    gameCompleted: 'Sfida Completata',
    gameNewRecord: 'NUOVO RECORD',
    gameRestartBtn: 'Riprova',
    gameFeedback: 'Sei una leggenda dei pulsanti',
    gameIntroTitlePre: 'Riflessi da ',
    gameIntroHighlight: 'Pro Gamer',
    gameIntroTitlePost: '?',
    gameIntroDescPre: 'Testa la latenza del tuo controller e la tua velocità di reazione. Hai ',
    gameIntroDescSeconds: '30 secondi',
    gameIntroDescPost: ' per dominare i pulsanti.',
    gameShareBtn: 'CONDIVIDI RANGO',
    gameLogConnected: 'Connesso',
    gameLogDisconnected: 'Disconnesso',
    gameLogCleared: 'Log cancellato...',
    gameLogBtnPrefix: 'Pulsante',
    gameVibNotSupported: 'Vibrazione non supportata.',
    gameVibLow: 'Bassa',
    gameVibHigh: 'Alta',
    gameMoveStick: 'MUOVI ANALOGICO',
    gamePress: 'PREMI',
    rankLegendaryName: 'LEGGENDARIO',
    rankLegendaryDesc: 'Le tue dita si muovono alla velocità del suono.',
    rankLegendaryFlavor: 'Il mio controller sta volando!',
    rankProName: 'PRO GAMER',
    rankProDesc: 'Hai riflessi d\'acciaio e un controller ben calibrato.',
    rankProFlavor: 'Il mio controller sta volando!',
    rankGamerName: 'GAMER',
    rankGamerDesc: 'Niente male, ma ti serve più pratica per il gioco competitivo.',
    rankGamerFlavor: 'Quasi preso!',
    rankNoobName: 'NOOB',
    rankNoobDesc: 'Sei sicuro di aver acceso il controller?',
    rankNoobFlavor: 'Il controller ce l\'ha con me!',
    gameShareText: 'Riesci a battermi?',
    gameShareScorePrefix: 'Ho fatto',
    gameShareScoreSuffix: 'punti',
    gameShareTitle: 'Test Gamepad Online',
  },
};
