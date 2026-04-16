import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProbadorVibracionMandoUI } from '../ui';

const slug = 'vibrationstest-gamepad-online';
const title = 'Vibrationstest för Gamepad Online';
const description =
  'Testa haptikmotorerna och Dual-Rumble-vibrationen på din gamepad i webbläsaren. Stöder Xbox, DualShock, DualSense och generiska kontroller.';

const faqData = [
  {
    question: 'Vad behöver jag för att testa min gamepad online?',
    answer:
      'Anslut bara din gamepad till datorn eller mobilen via USB-kabel eller para ihop den via Bluetooth. När den är ansluten, tryck på valfri knapp för att bli upptäckt.',
  },
  {
    question: 'Fungerar det med alla gamepadmodeller?',
    answer:
      'De flesta moderna gamepads från kända märken (som PlayStation eller Xbox) är kompatibla om din enhet och ditt operativsystem stöder det.',
  },
  {
    question: 'Höger sida av min gamepad vibrerar mindre än vänster, är det normalt?',
    answer:
      'Ja, helt normalt. Gamepads har vanligtvis en asymmetrisk design där ena sidan hanterar starka, djupa vibrationer och den andra hanterar snabba, subtila vibrationer.',
  },
  {
    question: 'Drar dessa tester mycket batteri?',
    answer:
      'Vibration är en av de mest energikrävande funktionerna i en trådlös gamepad. Att köra kontinuerliga, långa tester kommer att tömma batteriet snabbare än vanligt.',
  },
];

const howToData = [
  {
    name: 'Anslut och slå på din gamepad',
    text: 'Anslut din gamepad till din PC, Mac eller mobil via USB-kabel eller Bluetooth.',
  },
  {
    name: 'Tryck på en knapp på gamepadden',
    text: 'Webbläsare kräver att du trycker på minst en knapp för att gamepadden ska upptäckas och webbkommunikation ska starta.',
  },
  {
    name: 'Justera vibrationsmotorerna',
    text: 'Konfigurera styrkan för den tunga motorn (Low) och den fina motorn (High) oberoende av varandra.',
  },
  {
    name: 'Kör mönstren',
    text: 'Tryck på en av förinställningarna eller konfigurera parametrarna manuellt och skicka signalen för att känna varje komponent.',
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

export const content: ToolLocaleContent<ProbadorVibracionMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    {
      name: 'Hur haptisk vibration fungerar — HobbyConsolas',
      url: 'https://www.hobbyconsolas.com/reportajes/como-funciona-vibracion-haptica-mando-dualsense-ps5-757673',
    },
    {
      name: 'Gamepad API — W3C',
      url: 'https://w3c.github.io/gamepad/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Hur du kontrollerar vibrationen på din spelkontroll', level: 2 },
    {
      type: 'paragraph',
      html: 'Haptisk feedback är ett av de mest inlevelsefulla elementen i spelhårdvara. När en motor slutar fungera är de första symtomen vanligtvis onormalt surrande eller asymmetriska vibrationer. Att diagnostisera dem tidigt förhindrar större fel.',
    },
    { type: 'title', text: 'Varför köra vibrationstestet?', level: 3 },
    {
      type: 'paragraph',
      html: 'När du köper en begagnad gamepad, efter att ha uppdaterat drivrutiner eller efter ett fall, hjälper testning av haptikmotorerna till att skilja verkliga hårdvarufel från mjukvaruproblem. Kompatibel med Xbox, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro och generiska USB-gamepads.',
    },
    { type: 'title', text: 'Dual-Rumble vs. Linjär Aktuator-arkitektur', level: 3 },
    {
      type: 'paragraph',
      html: 'Klassiska gamepads (Xbox, DualShock) använder två asymmetriska mikromotorer: den vänstra genererar djupa, mullrande vibrationer; den högra producerar snabbt, gällt surrande. Avancerade enheter som DualSense använder linjära aktuatorer som simulerar texturer och motstånd.',
    },
    { type: 'title', text: 'Symtombaserad diagnosguide', level: 3 },
    {
      type: 'paragraph',
      html: 'Aktivera varje motor oberoende på 100 %. Om båda låter likadant kan gamepadden vara en replika med en enda motor. Om en inte svarar, kontrollera anslutningen innan du öppnar höljet. Testa olika intensiteter: kvalitetsmotorer svarar gradvis, inte som en på/av-knapp.',
    },
  ],
  ui: {
    badge: 'Vibrationstest',
    title: 'Vibrationsutprovare för Gamepad',
    description: 'Direkt kontroll över Dual-Rumble-motorn på din gamepad.',
    deviceDisconnected: 'Gamepad Frånkopplad',
    deviceDisconnectedSub: 'Tryck på en knapp på din gamepad för att starta',
    deviceFallback: 'Gamepad Ansluten',
    deviceConnectedSub: 'Stabil anslutning. Redo att testa.',
    noSupportWarning: "Inget Dual-Rumble-stöd upptäcktes i din webbläsare. Använder grundläggande generisk vibration.",
    tabPresets: 'Bästa förinställningar',
    tabCustom: 'Ren precision',
    presetHeavyTitle: 'Hammarslag',
    presetHeavyDesc: 'Tung motor på max i 300ms. Simulerar en hård stöt.',
    presetLightTitle: 'Bisurr',
    presetLightDesc: 'Endast höger motor. Idealisk för att upptäcka ovanligt surrande.',
    presetHeartbeatTitle: 'Hjärtslag',
    presetHeartbeatDesc: 'Subtila på varandra följande pulser. Perfekt för att kontrollera tröghetsretention.',
    presetSongTitle: 'Myntrytm',
    presetSongDesc: 'Simulerar på varandra följande myntljud. Kort och taktilt.',
    presetRockYouTitle: 'Rock You!',
    presetRockYouDesc: "Queens klassiker i dina händer: boom, boom, clap!",
    presetEarthquakeTitle: 'Maximal jordbävning!',
    presetEarthquakeDesc: 'Båda motorerna på 100 % explosiv kraft. MYCKET intensivt.',
    customStrongLabel: 'Stark kraft (Vänster)',
    customWeakLabel: 'Svag kraft (Höger)',
    customDurationLabel: 'Pulslängd',
    btnSendSignal: 'SKICKA SIGNAL NU',
  },
};
