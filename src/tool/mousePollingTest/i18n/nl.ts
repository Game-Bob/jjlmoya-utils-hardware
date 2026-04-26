import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestRatonUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'muis-polling-rate-test-online';
const title = 'Online Muis Polling Rate Test';
const description =
  'Controleer de echte Hz van je muis. Verifieer met onze professionele tool of je gamingmuis op 1000Hz of meer werkt.';

const faqData = [
  {
    question: 'Wat is de Polling Rate van een muis?',
    answer:
      'Het is de frequentie waarmee de muis zijn positie doorgeeft aan de computer, gemeten in Hz. Een polling rate van 1000Hz betekent dat de muis elke 1 milliseconde gegevens verzendt, wat zorgt voor een veel vloeiendere beweging.',
  },
  {
    question: 'Waarom bereikt mijn test niet constant 1000Hz?',
    answer:
      'De browser kan de polling rate alleen meten als de muis in beweging is. Als je hem langzaam beweegt of als je CPU erg druk is, kan de meting fluctueren. Beweeg de muis in snelle cirkels om de echte maximale piek te krijgen.',
  },
  {
    question: 'Is het beter om de hoogst mogelijke polling rate te hebben?',
    answer:
      'Over het algemeen wel voor gaming (1000Hz of meer), omdat het de lag vermindert. Extreem hoge rates (4000Hz of 8000Hz) verbruiken echter veel CPU-bronnen en niet alle games zijn daarvoor geoptimaliseerd.',
  },
  {
    question: 'Hoe beïnvloedt de refresh rate van de monitor de muis?',
    answer:
      'Als je een 144Hz of 240Hz monitor hebt, zal een lage polling rate (125Hz) de aanwijzer schokkerig laten lijken. Voor hoogfrequente monitoren is het essentieel om minimaal 500Hz of 1000Hz te gebruiken.',
  },
];

const howToData = [
  {
    name: 'Bereid het testgebied voor',
    text: 'Plaats de cursor binnen de capture-zone van de tool.',
  },
  {
    name: 'Beweeg de muis snel',
    text: 'Maak snelle, wijde cirkelvormige bewegingen. De tool berekent de intervallen tussen elk mousemove-event dat door de hardware wordt verzonden.',
  },
  {
    name: 'Observeer de stabiliteitsgrafiek',
    text: 'Controleer of de Hz-lijn constant is of plotselinge dalingen heeft, wat kan wijzen op interferentie bij draadloze muizen of CPU-problemen.',
  },
  {
    name: 'Analyseer de responstijd',
    text: 'Controleer de gemiddelde vertraging in milliseconden. Een goede gamingmuis moet in de buurt van een gemiddelde latentie van 1ms blijven.',
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

export const content: ToolLocaleContent<TestRatonUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Definitieve Gids voor Polling Rate', level: 2 },
    {
      type: 'paragraph',
      html: 'Wanneer je je muis fysiek over de muispad beweegt, moet die analoge beweging worden vertaald in digitale signalen die je computer begrijpt. De <strong>Polling Rate</strong> is de frequentie waarmee de muis zijn positie "rapporteert" aan de pc. Het wordt gemeten in Hertz (Hz).',
    },
    { type: 'title', text: 'Polling Rate Niveaus en hun Gebruik', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>125 Hz</strong> — De muis rapporteert elke 8 milliseconden. Prima voor kantoorgebruik, maar voelt schokkerig aan op 144Hz monitoren. <strong>1000 Hz</strong> — De gouden standaard voor gaming: rapporteert elke 1 ms. Vloeiende beweging zonder merkbare vertraging. <strong>8000 Hz</strong> — Geavanceerde technologie (Razer, Logitech). Rapporteert elke 0,125 ms, maar vereist een krachtige CPU.',
    },
    { type: 'title', text: 'Waarom fluctueren mijn Hz?', level: 3 },
    {
      type: 'paragraph',
      html: 'Helemaal normaal. De meeste moderne muizen hebben een dynamische polling rate om energie te besparen. Als je de muis langzaam beweegt, verzendt hij minder rapporten omdat er minder nieuwe gegevens zijn. Alleen snelle, continue bewegingen pushen de sensor naar zijn echte maximale piek.',
    },
    { type: 'title', text: 'Polling Rate vs DPI: De Grote Verwarring', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>DPI (Dots Per Inch)</strong> is gevoeligheid: hoeveel pixels de cursor beweegt per inch fysieke verplaatsing. <strong>Hz (Polling Rate)</strong> is updatefrequentie: hoe vloeiend en tijdig die beweging wordt gerapporteerd. Beide parameters zijn onafhankelijk en aanvullend.',
    },
  ],
  ui: {
    badge: 'Muis Test',
    title: 'Polling Rate Checker',
    description: 'Beweeg de muis in snelle cirkels om de Hz te meten.',
    labelAvg: 'Gemiddelde',
    labelPeak: 'Piek',
    placeholder: 'Beweeg de muis hier',
  },
};
