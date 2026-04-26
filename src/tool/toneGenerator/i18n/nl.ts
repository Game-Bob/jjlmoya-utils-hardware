import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ToneGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'toon-frequentie-generator-online';
const title = 'Online Toon en Frequentiegenerator';
const description =
  'Genereer sinus-, blok-, driehoek- en zaagtandgolven. Test je luidsprekers, koptelefoon of subwoofer met frequenties van 20Hz tot 20kHz.';

const faqData = [
  {
    question: 'Waarvoor wordt een frequentiegenerator gebruikt?',
    answer:
      'Het wordt gebruikt om de frequentierespons van luidsprekers en koptelefoons te testen, ongewenste resonanties in meubels te detecteren, gaten in je gehoorbereik te vinden, of zelfs te helpen bij het kalmeren van tinnitus via notch-therapie.',
  },
  {
    question: 'Wat is het verschil tussen een sinusgolf en een blokgolf?',
    answer:
      'Een sinusgolf is een zuivere toon zonder boventonen (glad en rond). Een blokgolf is rijk aan oneven boventonen en klinkt veel agressiever of digitaal. De driehoeksgolf zit er tussenin, nuttig voor audiosynthese.',
  },
  {
    question: 'Kan ik mijn luidsprekers beschadigen met deze tool?',
    answer:
      'Ja, als je zeer hoge volumes gebruikt bij extreme frequenties (vooral bassen onder 30Hz of hoge tonen boven 15kHz). Begin altijd met een laag systeemvolume en verhoog dit geleidelijk.',
  },
  {
    question: 'Wat is het menselijk gehoorbereik?',
    answer:
      'In theorie 20Hz tot 20.000Hz (20kHz). Met de leeftijd is het echter normaal om het vermogen te verliezen om tonen boven 15kHz te horen. Deze test kan je helpen je persoonlijke bovengrens te verifiëren.',
  },
];

const howToData = [
  {
    name: 'Selecteer de golfvorm',
    text: 'Kies tussen Sinus (zuiver), Blok, Driehoek of Zaagtand, afhankelijk van het type test dat je wilt uitvoeren.',
  },
  {
    name: 'Pas de frequentie aan',
    text: 'Verschuif de regelaar om door het hoorbare spectrum te navigeren. Gebruik de sneltoetsen voor 60Hz, 440Hz of 1kHz om snel toegang te krijgen tot referentiefrequenties.',
  },
  {
    name: 'Controleer het volume',
    text: 'Zorg ervoor dat het volume van je luidsprekers laag staat voordat je op Play drukt. Je kunt de gain direct in de tool aanpassen.',
  },
  {
    name: 'Analyseer de respons',
    text: 'Luister naar mogelijke vervormingen of momenten waarop het geluid verdwijnt. Dit geeft de fysieke limieten van je audiohardware aan.',
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

export const content: ToolLocaleContent<ToneGeneratorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Alles over Frequenties en Geluidsgolven', level: 2 },
    {
      type: 'paragraph',
      html: 'Geluid is pure fysica in beweging. Met deze tool kun je geluidsgolven in real-time manipuleren, van de diepste bas die je in je borst kunt voelen tot de ultrasone hoge tonen die alleen dieren kunnen waarnemen.',
    },
    { type: 'title', text: 'Menselijk Gehoorbereik en Presbyacusis', level: 3 },
    {
      type: 'paragraph',
      html: 'Een gezond menselijk oor neemt geluiden waar tussen <strong>20Hz en 20kHz</strong>. Met de leeftijd daalt de bovengrens: de meeste volwassenen boven de 50 kunnen tonen boven 12kHz niet meer horen. De 17,4kHz toon, bekend als de "muggentaltoon", is een klassieke test die meestal alleen tieners kunnen doorstaan.',
    },
    { type: 'title', text: 'Golfvormen en hun Gebruik', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Sinus:</strong> zuivere toon zonder boventonen, gebruikt bij medische gehoortesten en instrumentkalibratie. <strong>Blok:</strong> rijk aan oneven boventonen, klinkt als retro 8-bit consoles. <strong>Zaagtand:</strong> bevat alle boventonen, de basis van synthesizers voor elektronische muziek. <strong>Driehoek:</strong> middelpunt tussen sinus en blok -gladder dan blok maar met meer harmonische inhoud dan sinus.',
    },
    { type: 'title', text: 'Luidsprekertest en Reiniging door Vibratie', level: 3 },
    {
      type: 'paragraph',
      html: 'Een laagfrequente golf (meestal <strong>165Hz</strong>) op maximaal volume met een blok- of zaagtandvorm dwingt het luidsprekerconus om hevig te trillen, waardoor waterdruppels die in het rooster gevangen zitten mechanisch worden uitgestoten. Speel extreem hoge frequenties niet gedurende lange perioden op maximaal volume af: zelfs als je ze niet kunt horen, kan de energie de tweeters van je apparatuur beschadigen.',
    },
  ],
  ui: {
    badge: 'Audiogenerator',
    title: 'Toongenerator',
    description: 'Genereer zuivere frequenties voor audiotests.',
    freqLabel: 'Frequentie',
    preset60: '60Hz',
    preset440: '440Hz',
    preset1k: '1kHz',
    rangeMin: '20Hz (Sub-bass)',
    rangeMax: '20kHz (Ultrasoon)',
    waveLabel: 'Golfvorm',
    waveSine: 'Sinus',
    waveSquare: 'Blok',
    waveSawtooth: 'Zaagtand',
    waveTriangle: 'Driehoek',
    volLabel: 'Volume',
    btnPlay: 'SPEEL TOON AF',
    btnStop: 'STOP',
  },
};
