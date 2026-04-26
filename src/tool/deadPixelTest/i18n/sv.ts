import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PixelesPantallaUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'doda-pixel-test-skarmreparation';
const title = 'Test för Döda Pixlar och Skärmreparationsverktyg';
const description =
  'Kontrollera om din skärm har döda eller fastnade pixlar och reparera dem online med vårt högfrekventa stroboskopverktyg.';

const faqData = [
  {
    question: 'Vad är skillnaden mellan en död pixel och eine fastnad pixel?',
    answer:
      'En död pixel är permanent svart eftersom den inte får någon ström (bränd transistor). En fastnad pixel (stuck pixel) är vanligtvis en ljus färg (röd, grön eller blå) och kan ibland väckas till liv genom snabb stroboskopstimulering.',
  },
  {
    question: 'Hur fungerar reparationsverktyget (Strobe)?',
    answer:
      'Vårt verktyg genererar snabba blinkningar av primärfärger i hög hastighet. Detta kan tvinga den fastnade flytande kristallen i pixeln att låsa upp sig. Det rekommenderas att låta det arbeta i 10 till 30 minuter.',
  },
  {
    question: 'Kan döda pixlar uppstå på grund av temperatur?',
    answer:
      'Ja, extrema temperaturer kan påverka panelen. De vanligaste orsakerna är dock tillverkningsfel eller fysiska stötar som skadar de elektriska kontakterna för de flytande kristallerna.',
  },
  {
    question: 'Hur många döda pixlar täcks av garantin?',
    answer:
      'Det beror på tillverkaren och ISO 9241-307-standarden. Generellt sett anser märken att upp till 2 eller 3 ljusa pixlar är "normalt" på paneler i Klass 1, medan paneler i Klass 0 inte tillåter några alls.',
  },
];

const howToData = [
  {
    name: 'Rengör skärmen',
    text: 'Innan du börjar, rengör din skärm noggrant med en mikrofiberduk för att undvika att förväxla damm med en död pixel.',
  },
  {
    name: 'Gå in i helskärmsläge',
    text: 'Tryck på F11 eller helskärmsknappen så att webbläsarens gränssnitt inte stör upptäckten av defekter.',
  },
  {
    name: 'Växla mellan färger',
    text: 'Växla mellan svarta, vita, röda, gröna och blå bakgrunder. Leta efter fläckar som inte matchar bakgrundsfärgen.',
  },
  {
    name: 'Starta reparationscykeln',
    text: 'Om du hittar en ljus punkt, placera Strobe-verktyget över den och låt det köra i minst 20 minuter.',
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

export const content: ToolLocaleContent<PixelesPantallaUI> = {
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
      text: 'Komplett guide: Döda pixlar, fastnade pixlar och hur man reparerar dem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Har du märkt en konstig fläck på din skärm som inte ändrar färg? Det kan vara ett paneldefekt. Detta verktyg hjälper dig att diagnostisera om din skärm har <strong>döda pixlar</strong> eller <strong>fastnade pixlar</strong> och erbjuder en lösning för att försöka reparera dem.',
    },
    {
      type: 'title',
      text: 'Vad är skillnaden mellan en död pixel och en fastnad pixel?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Det finns två huvudtyper av pixeldefekter i moderna skärmar, var och en med olika egenskaper och lösningar.',
    },
    {
      type: 'title',
      text: 'Fastnad pixel (Stuck Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Detta är det vanligaste defektet. Det uppstår när en eller flera subpixlar (röd, grön eller blå) fastnar i läget "på". <strong>Symtom:</strong> Du ser en permanent ljus färgad prick (röd, grön, blå eller vit) mot en mörk bakgrund. <strong>Ofta möjlig att reparera.</strong> Den flytande kristallen svarar fortfarande; den är helt enkelt "låst" i en specifik polarisering. Vårt stroboskopverktyg försöker låsa upp den med snabb spänningsstimulering.',
    },
    {
      type: 'title',
      text: 'Död pixel (Dead Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Uppstår när transistorn som styr pixeln slutar fungera helt och inte släpper igenom något ljus. <strong>Symtom:</strong> En permanent svart prick, särskilt synlig mot ljusa eller vita bakgrunder. <strong>Svår att reparera (oftast permanent).</strong> Skadan är på hårdvarunivå (bränd krets). Ingen elektrisk stimulering kan fixa detta. Kräver oftast byte av panel.',
    },
    {
      type: 'title',
      text: 'Hur fungerar stroboskopverktyget för reparation?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Funktionen "Reparera pixel" använder en teknik som kallas <strong>Pixel Exercising</strong>. Den genererar ett högfrekvent slumpmässigt brusmönster (snabba färgblinkningar) över det drabbade området.',
    },
    {
      type: 'title',
      text: 'Mekanismen: Flytande kristaller och spänning',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'LCD-skärmar använder flytande kristaller som ändrar sin transparens baserat på applicerad spänning. När en subpixel fastnar betyder det att kristallen är "frusen" i en specifik polarisering. Snabba spänningsändringar (uppnådda genom snabba primärfärgsskiften) försöker "träna" kristallen och tvinga den att byta tillstånd.',
    },
    {
      type: 'title',
      text: 'Rekommendationer för användning',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '<ul><li>Det rekommenderas att köra verktyget över det drabbade området i minst <strong>10 till 20 minuter</strong>.</li><li>Om det inte fungerar, prova längre sessioner (upp till 1 timme) eller applicera ett mycket lätt tryck med en mikrofiberduk över pixeln (på egen risk).</li><li>I vissa fall förbättras resultaten om man värmer skärmen försiktigt med en hårtork (på låg temperatur) innan Strobe aktiveras.</li></ul>',
    },
    {
      type: 'title',
      text: 'Varning för epilepsi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Reparationsläget använder snabbt blinkande ljus i hög hastighet. Om du har fotosensibel epilepsi eller ljuskänslighet, <strong>använd INTE denna funktion</strong>. Exponering för blinkande mönster kan utlösa anfall hos känsliga personer.',
    },
    {
      type: 'title',
      text: 'När ska man söka garanti eller utbyte?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om du bekräftar defekta pixlar (särskilt flera döda pixlar) kan du använda vårt test som bevis vid garantianspråk. Många tillverkare anser att fler än 2–3 ljusa pixlar eller 1 död pixel är ett tillverkningsfel som berättigar till utbyte enligt ISO 9241-307 (Klass 1)-standarden.',
    },
    {
      type: 'title',
      text: 'Historien om standarder för döda pixlar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I årtionden har LCD-skärmar drabbats av pixeldefekter på grund av tillverkningens komplexitet. En Full HD-panel (1920×1080) innehåller 6 220 800 pixlar (18 662 400 subpixlar). Den statistiska sannolikheten för defekter är oundviklig. Det är därför standarder som ISO 9241-307 finns för att definiera "acceptabla döda pixlar" baserat på skärmklass.',
    },
  ],
  ui: {
    badge: 'Skärmverktyg',
    title: 'Döda eller fastnade pixlar?',
    description:
      'Kontrollera skärmens skick med rena solida färger och reparera fastnade pixlar med vårt högfrekventa stimuleringsverktyg.',
    btnStartTest: 'Starta test',
    btnStartFix: 'Reparera pixel',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Helskärm',
    kbdSpace: 'Mellanslag',
    kbdSpaceLabel: 'Ändra färg',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Avsluta',
    colorBlack: 'Svart',
    colorWhite: 'Vit',
    colorRed: 'Röd',
    colorGreen: 'Grön',
    colorBlue: 'Blå',
    btnToggleFixer: 'Öppna reparationsverktyg (Strobe)',
    btnExit: 'Avsluta (ESC)',
  },
};
