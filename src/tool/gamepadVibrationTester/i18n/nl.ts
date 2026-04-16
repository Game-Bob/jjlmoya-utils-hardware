import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProbadorVibracionMandoUI } from '../ui';

const slug = 'gamepad-vibratie-test-online';
const title = 'Online Gamepad Vibratie Tester';
const description =
  'Test de haptische motoren en de Dual-Rumble vibratie van je gamepad in de browser. Ondersteunt Xbox, DualShock, DualSense en generieke controllers.';

const faqData = [
  {
    question: 'Wat heb ik nodig om mijn gamepad online te testen?',
    answer:
      'Sluit je gamepad eenvoudig aan op de computer of het mobiele apparaat via een USB-kabel of koppel deze via Bluetooth. Eenmaal gekoppeld, druk je op een willekeurige knop om gedetecteerd te worden.',
  },
  {
    question: 'Werkt het met elk model gamepad?',
    answer:
      'De meeste moderne gamepads van bekende merken (zoals PlayStation of Xbox) zijn compatibel als je apparaat en besturingssysteem dit ondersteunen.',
  },
  {
    question: 'De rechterkant van mijn gamepad vibreert minder dan de linkerkant, is dat normaal?',
    answer:
      'Ja, volledig normaal. Gamepads hebben meestal een asymmetrisch ontwerp waarbij de ene kant sterke, diepe vibraties verzorgt en de andere kant snelle, subtiele vibraties.',
  },
  {
    question: 'Verbruiken deze tests veel batterij?',
    answer:
      'Vibratie is een van de meest energieverslindende functies in een draadloze gamepad. Het uitvoeren van continue, lange tests zal de batterij sneller ontladen dan normaal.',
  },
];

const howToData = [
  {
    name: 'Sluit de gamepad aan en zet deze aan',
    text: 'Koppel je gamepad aan je pc, Mac of mobiel via een USB-kabel of Bluetooth.',
  },
  {
    name: 'Druk op een knop op de gamepad',
    text: 'Browsers vereisen dat je op ten minste één knop drukt voordat de gamepad wordt gedetecteerd en de webcommunicatie start.',
  },
  {
    name: 'Pas de vibratiemotoren aan',
    text: 'Configureer de kracht van de Sterke Motor (Low) en de Fijne Motor (High) onafhankelijk van elkaar.',
  },
  {
    name: 'Voer de patronen uit',
    text: 'Druk op een van de presets of configureer de parameters handmatig en stuur het signaal om elk onderdeel te voelen.',
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

export const content: ToolLocaleContent<ProbadorVibracionMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    {
      name: 'Hoe haptische vibratie werkt — HobbyConsolas',
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
    { type: 'title', text: 'Hoe examineer je de vibratie van je gamepad', level: 2 },
    {
      type: 'paragraph',
      html: 'Haptische feedback is een van de meest meeslepende elementen van gaminghardware. Als een motor faalt, zijn de eerste symptomen meestal abnormaal gezoem of asymmetrische vibraties. Een vroege diagnose voorkomt grotere defecten.',
    },
    { type: 'title', text: 'Waarom de vibratietest uitvoeren?', level: 3 },
    {
      type: 'paragraph',
      html: 'Bij het kopen van een tweedehands gamepad, na het updaten van drivers of na een val, helpt het testen van de haptische motoren om echte hardwarefouten te onderscheiden van softwareproblemen. Compatibel met Xbox, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro en generieke USB-gamepads.',
    },
    { type: 'title', text: 'Dual-Rumble vs. Lineaire Actuator Architectuur', level: 3 },
    {
      type: 'paragraph',
      html: 'Klassieke gamepads (Xbox, DualShock) maken gebruik van twee asymmetrische micromotoren: de linker genereert diepe, rommelende vibraties; de rechter produceert snel, hoog gezoem. Geavanceerde apparaten zoals de DualSense maken gebruik van lineaire actuatoren die texturen en weerstand simuleren.',
    },
    { type: 'title', text: 'Diagnostische gids op basis van symptomen', level: 3 },
    {
      type: 'paragraph',
      html: 'Activeer elke motor onafhankelijk op 100%. Als ze beide hetzelfde klinken, is de gamepad mogelijk een replica met één motor. Als er een niet reageert, controleer dan de verbinding voordat je de behuizing opent. Test fractionele intensiteiten: kwaliteitsmotoren reageren geleidelijk, niet als een aan/uit-schakelaar.',
    },
  ],
  ui: {
    badge: 'Vibratie Test',
    title: 'Gamepad Vibratie Tester',
    description: 'Directe controle over de Dual-Rumble motor van je gamepad.',
    deviceDisconnected: 'Gamepad Verbinding Verbroken',
    deviceDisconnectedSub: 'Druk op een knop op je gamepad om te beginnen',
    deviceFallback: 'Gamepad Verbonden',
    deviceConnectedSub: 'Stabiele verbinding. Klaar om te testen.',
    noSupportWarning: "Geen Dual-Rumble ondersteuning gedetecteerd in je browser. Basis generieke vibratie wordt gebruikt.",
    tabPresets: 'Top Presets',
    tabCustom: 'Pure Precisie',
    presetHeavyTitle: 'Hamerslag',
    presetHeavyDesc: 'Zware motor op max voor 300ms. Simuleert een harde klap.',
    presetLightTitle: 'Bijengezoem',
    presetLightDesc: 'Alleen rechtermotor. Ideaal voor het detecteren van ongewoon gezoem.',
    presetHeartbeatTitle: 'Hartslag',
    presetHeartbeatDesc: 'Subtiele opeenvolgende pulsen. Perfect voor het controleren van de traagheid.',
    presetSongTitle: 'Munt Ritme',
    presetSongDesc: 'Simuleert opeenvolgende muntgeluiden. Kort en tactiel.',
    presetRockYouTitle: 'Rock You!',
    presetRockYouDesc: "Queens klassieker in jouw handen: boom, boom, clap!",
    presetEarthquakeTitle: 'Maximale Aardbeving!',
    presetEarthquakeDesc: 'Beide motoren op 100% explosieve kracht. ZEER intens.',
    customStrongLabel: 'Sterke Kracht (Links)',
    customWeakLabel: 'Zwakke Kracht (Rechts)',
    customDurationLabel: 'Pulsduur',
    btnSendSignal: 'STUUR NU SIGNAAL',
  },
};
