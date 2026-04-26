import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestRatonUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mus-polling-rate-test-online';
const title = 'Online Mus Polling Rate Test';
const description =
  'Kontrollera den verkliga Hz-hastigheten på din mus. Verifiera om din gamingmus fungerar i 1000Hz eller mer med vårt professionella verktyg.';

const faqData = [
  {
    question: 'Vad är Polling Rate på en mus?',
    answer:
      'Det är frekvensen med vilken musen rapporterar sin position till datorn, mätt i Hz. En polling rate på 1000Hz betyder att musen skickar data varje 1 millisekund, vilket ger en mycket mjukare rörelse.',
  },
  {
    question: 'Varför når mitt test inte 1000Hz konstant?',
    answer:
      'Webbläsaren kan bara mäta polling rate när musen rör sig. Om du rör den långsamt eller om din CPU är mycket upptagen kan mätningen fluktuera. Rör musen i snabba cirklar för att få den verkliga maximala toppen.',
  },
  {
    question: 'Är det bättre att ha högsta möjliga polling rate?',
    answer:
      'Generellt sett ja för gaming (1000Hz eller mer), eftersom det minskar lag. Extremt höga hastigheter (4000Hz eller 8000Hz) förbrukar dock mycket CPU-resurser och inte alla spel är optimerade för dem.',
  },
  {
    question: 'Hur påverkar monitorns uppdateringsfrekvens musen?',
    answer:
      'Om du har en 144Hz- eller 240Hz-monitor kommer en låg polling rate (125Hz) att få pekaren att se ryckig ut. För högfrekventa monitorer är det viktigt att använda minst 500Hz eller 1000Hz.',
  },
];

const howToData = [
  {
    name: 'Förbered testområdet',
    text: 'Placera markören inuti verktygets fångstzon.',
  },
  {
    name: 'Rör musen snabbt',
    text: 'Gör snabba, vida cirkelrörelser. Verktyget kommer att beräkna intervallen mellan varje mousemove-händelse som skickas av hårdvaran.',
  },
  {
    name: 'Observera stabilitetsgrafen',
    text: 'Kontrollera om Hz-linjen är konstant eller har plötsliga fall, vilket kan indikera störningar i trådlösa möss eller CPU-problem.',
  },
  {
    name: 'Analysera responstiden',
    text: 'Kontrollera den genomsnittliga fördröjningen (Delay) i millisekunder. En bra gamingmus bör ligga nära 1ms i genomsnittlig latens.',
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

export const content: ToolLocaleContent<TestRatonUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Den definitiva guiden till Polling Rate', level: 2 },
    {
      type: 'paragraph',
      html: 'När du fysiskt rör din mus på musmattan måste den analoga rörelsen översättas till digitala signaler som din dator förstår. <strong>Polling Rate</strong> är frekvensen med vilken musen "rapporterar" sin position till datorn. Den mäts i Hertz (Hz).',
    },
    { type: 'title', text: 'Polling Rate-nivåer och deras användning', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>125 Hz</strong> — Musen rapporterar var 8:e millisekund. Okej för kontorsbruk men ser ryckigt ut på 144Hz-monitorer. <strong>1000 Hz</strong> — Den gyllene standarden för gaming: rapporterar varje millisekund (1 ms). Mjuk rörelse utan märkbar fördröjning. <strong>8000 Hz</strong> — Banbrytande teknologi (Razer, Logitech). Rapporterar var 0,125 ms men kräver en kraftfull CPU.',
    },
    { type: 'title', text: 'Varför fluktuerar mina Hz?', level: 3 },
    {
      type: 'paragraph',
      html: 'Helt normalt. De flesta moderna möss har en dynamisk polling rate för att spara ström. Om du rör musen långsamt skickar den färre rapporter eftersom det finns mindre ny data. Endast snabba, kontinuerliga rörelser pressar sensorn till dess verkliga maximala topp.',
    },
    { type: 'title', text: 'Polling Rate vs DPI: Den stora förvirringen', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>DPI (Dots Per Inch)</strong> är känslighet: hur många pixlar markören rör sig per tum av fysisk rörelse. <strong>Hz (Polling Rate)</strong> är uppdateringsfrekvens: hur mjukt och snabbt den rörelsen rapporteras. Båda parametrarna är oberoende och kompletterar varandra.',
    },
  ],
  ui: {
    badge: 'Mustest',
    title: 'Polling Rate Checker',
    description: 'Rör musen i snabba cirklar för att mäta Hz.',
    labelAvg: 'Genomsnitt',
    labelPeak: 'Topp',
    placeholder: 'Rör musen här',
  },
};
