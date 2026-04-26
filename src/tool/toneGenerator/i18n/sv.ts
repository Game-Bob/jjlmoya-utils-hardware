import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ToneGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ton-och-frekvensgenerator-online';
const title = 'Online ton och frekvensgenerator';
const description =
  'Generera sinus-, fyrkants-, triangels- och sågtandsvågor. Testa dina högtalare, hörlurar eller subwoofer med frekvenser från 20Hz till 20kHz.';

const faqData = [
  {
    question: 'Vad används en frekvensgenerator till?',
    answer:
      'Den används för att testa frekvensåtergivningen hos högtalare och hörlurar, upptäcka oönskade resonanser i möbler, hitta luckor i ditt hörselområde eller till och med hjälpa till att lindra tinnitus genom notch-terapi.',
  },
  {
    question: 'Vad är skillnaden mellan en sinusvåg och en fyrkantsvåg?',
    answer:
      'En sinusvåg är en ren ton utan övertoner (mjuk och rund). En fyrkantsvåg är rik på udda övertoner och låter mycket mer aggressiv eller digital. Triangelvågen ligger däremellan och är användbar för ljudsyntes.',
  },
  {
    question: 'Kan jag skada mina högtalare med det här verktyget?',
    answer:
      'Ja, om du använder mycket höga volymer vid extrema frekvenser (särskilt bas under 30Hz oder diskant över 15kHz). Börja alltid med en låg systemvolym och öka gradvis.',
  },
  {
    question: 'Vilket är det mänskliga hörselområdet?',
    answer:
      'Teoretiskt 20Hz till 20 000Hz (20kHz). Med åldern är det dock normalt att förlora förmågan att höra över 15kHz. Detta test kan hjälpa dig att verifiera din personliga övre gräns.',
  },
];

const howToData = [
  {
    name: 'Välj vågtyp',
    text: 'Välj mellan sinus (ren), fyrkant, triangel eller sågtand beroende på vilken typ av test du vill utföra.',
  },
  {
    name: 'Justera frekvensen',
    text: 'Flytta skjutreglaget för att navigera i det hörbara spektrumet. Använd genvägarna för 60Hz, 440Hz eller 1kHz för att snabbt komma åt referensfrekvenser.',
  },
  {
    name: 'Kontrollera volymen',
    text: 'Se till att högtalarvolymen är låg innan du trycker på Play. Du kan justera förstärkningen direkt i verktyget.',
  },
  {
    name: 'Analysera svaret',
    text: 'Lyssna efter eventuella förvrängningar eller moment när ljudet försvinner. Detta indikerar de fysiska begränsningarna hos din ljudhårdvara.',
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

export const content: ToolLocaleContent<ToneGeneratorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Allt om frekvenser och ljudvågor', level: 2 },
    {
      type: 'paragraph',
      html: 'Ljud är ren fysik i rörelse. Detta verktyg låter dig manipulera ljudvågor i realtid, från den djupaste basen du kan känna i bröstet till de ultraljudshöjder som endast djur kan uppfatta.',
    },
    { type: 'title', text: 'Mänskligt hörselområde och presbyacusis', level: 3 },
    {
      type: 'paragraph',
      html: 'Ett friskt mänskligt öra uppfattar ljud mellan <strong>20Hz och 20kHz</strong>. Med åldern sjunker den övre gränsen: de flesta vuxna över 50 kan inte höra över 12kHz. Tonen på 17,4kHz, känd som "myggtonen", är ett klassiskt test som vanligtvis bara tonåringar klarar.',
    },
    { type: 'title', text: 'Vågtyper och deras användning', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Sinus:</strong> ren ton utan övertoner, används i medicinska hörseltester och instrumentkalibrering. <strong>Fyrkant:</strong> rik på udda övertoner, låter som retro 8-bitarskonsoler. <strong>Sågtand:</strong> innehåller alla övertoner, basen för elektroniska musik-syntar. <strong>Triangel:</strong> mittpunkt mellan sinus och fyrkant -mjukare än fyrkant men med mer harmoniskt innehåll än sinus.',
    },
    { type: 'title', text: 'Högtalartest och rengöring genom vibration', level: 3 },
    {
      type: 'paragraph',
      html: 'En lågfrekvent våg (vanligtvis <strong>165Hz</strong>) vid maximal volym med en fyrkants- eller sågtandsform tvingar högtalarmembranet att vibrera våldsamt, vilket mekaniskt driver ut vattendroppar som fastnat i gallret. Spela inte extremt höga frekvenser på maximal volym under långa perioder: även om du inte kan höra dem kan energin skada utrustningens diskanthögtalare.',
    },
  ],
  ui: {
    badge: 'Ljudgenerator',
    title: 'Tongenerator',
    description: 'Generera rena frekvenser för ljudtester.',
    freqLabel: 'Frekvens',
    preset60: '60Hz',
    preset440: '440Hz',
    preset1k: '1kHz',
    rangeMin: '20Hz (Sub-bas)',
    rangeMax: '20kHz (Ultraljud)',
    waveLabel: 'Vågform',
    waveSine: 'Sinus',
    waveSquare: 'Fyrkant',
    waveSawtooth: 'Sågtand',
    waveTriangle: 'Triangel',
    volLabel: 'Volym',
    btnPlay: 'SPELA TON',
    btnStop: 'STOPP',
  },
};
