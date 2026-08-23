import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ljudfordrojningstest';
const title = 'Ljudfördröjningstest';
const description = 'Testa upplevd ljudfördröjning på högtalare, hörlurar, Bluetooth-enheter och videouppspelning med ett lokalt impulstest i webbläsaren.';

const faq = [
  {
    question: 'Vad mäter detta ljudfördröjningstest exakt?',
    answer: 'Det valfria mikrofonläget uppskattar tiden mellan ett klick schemalagt av webbläsaren och när det fångas upp av din mikrofon. Det manuella läget hjälper dig att synkronisera bild och ljud på gehör. Inget av lägena är en laboratoriemätning av hela enhetskedjan.',
  },
  {
    question: 'Kan jag testa Bluetooth-latens utan mikrofon?',
    answer: 'Ja. Starta impulssekvensen, välj Bluetooth och justera reglaget tills blinkningen och klicket upplevs samtidiga. Resultatet sparas som en synkroniseringsjustering snarare än som en absolut hårdvarulatens.',
  },
  {
    question: 'Varför kräver mikrofonläget tillstånd?',
    answer: 'Webbläsaren behöver åtkomst till mikrofonen för att höra testklicket efter att det passerat genom dina högtalare eller rummet. Ljudet behandlas helt lokalt i webbläsaren och laddas inte upp.',
  },
  {
    question: 'Varför kan mikrofonresultatet variera?',
    answer: 'Rumsreflektioner, mikrofonbearbetning, automatisk förstärkningskontroll och operativsystemets buffertar påverkar resultatet. Se värdet som en uppskattning för den aktuella uppsättningen.',
  },
  {
    question: 'Vilket testläge bör jag välja?',
    answer: 'Välj Högtalare för rumsuppspelning, Trådbundna hörlurar för direktutgång, Bluetooth för trådlösa enheter och Videosynk vid kontroll av skärm och spelare.',
  },
  {
    question: 'Skickar testet mitt mikrofonljud till en server?',
    answer: 'Nej. Mikrofonströmmen läses endast lokalt av webbläsarens analysator och testet laddar inte upp några ljudfiler.',
  },
];

const howTo = [
  {
    name: 'Välj uppspelningsväg',
    text: 'Välj högtalare, trådbundna hörlurar, Bluetooth eller videosynk för att definiera konfigurationen du testar.',
  },
  {
    name: 'Starta med den manuella impulsen',
    text: 'Klicka på Starta test och lyssna efter det korta klicket medan du ser den cyanfärgade impulsen. Justera reglaget tills de sammanfaller.',
  },
  {
    name: 'Lägg till mikrofonmätning vid behov',
    text: 'Klicka på Aktivera mikrofon, ge tillstånd, placera mikrofonen vid lyssningsplatsen och kör sekvensen igen.',
  },
  {
    name: 'Läs av resultatet som en uppskattning',
    text: 'Använd medianfördröjningen och konfidensgraden som vägledning för din uppsättning efter ändringar av enhet eller avstånd.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<AudioDelayTestUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Ljudfördröjningstest För Bluetooth och Videosynkronisering', level: 2 },
    {
      type: 'paragraph',
      html: 'Detta webbläsarbaserade ljudfördröjningstest hjälper dig att kontrollera tidsskillnaden mellan en visuell signal och ett ljud på din aktuella enhet. Det är användbart för Bluetooth-hörlurar, trådlösa högtalare, trådbundna hörlurar och kontroll av videosynkronisering. Verktyget genererar korta klick lokalt utan att du behöver ladda ner testfiler.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Starta utan mikrofonåtkomst',
      badge: 'Privat och lokalt',
      html: '<p>Det manuella impulstestet fungerar utan mikrofon. Observera den visuella markören och justera reglaget tills ljud och blinkning känns samtidiga. Detta ger en användbar justering utan att låtsas mäta en absolut hårdvarulatens.</p>',
    },
    {
      type: 'title',
      text: 'Så Testar Du Bluetooth Ljudlatens',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Välj Bluetooth och ställ in en bekväm lyssningsvolym innan du startar.',
        'Kör impulssekvensen från samma webbläsare och enhet som du använder för uppspelning.',
        'Jämför den visuella impulsen direkt med klicket istället för att bedöma ett långt musikstycke.',
        'Justera reglaget tills de två signalerna möts och notera justeringen.',
        'Upprepa testet efter att ha ändrat mejsel, operativsystem, webbläsare eller avstånd.',
      ],
    },
    {
      type: 'table',
      headers: ['Läge', 'Rekommenderas för', 'Huvudsaklig begränsning'],
      rows: [
        ['Högtalare', 'Rumsuppspelning och TV-högtalare', 'Rumsavstånd och reflektioner påverkar ljudvägen.'],
        ['Trådbundna hörlurar', 'Direkt hörlursutgång', 'Mikrofonen kan ha svårt att fånga ljud från stängda hörlurar.'],
        ['Bluetooth', 'Trådlösa hörlurar och högtalare', 'Kodeks buffring varierar beroende på enhet och program.'],
        ['Videosynk', 'Justering av skärm och spelare', 'Videospelaren kan lägga till egen bildfördröjning.'],
      ],
    },
    {
      type: 'title',
      text: 'Valfri Mikrofonmätning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'När mikrofonåtkomst är aktiverad övervakar verktyget den lokala analysatorn för varje klick och registrerar tiden från det schemalagda ljudet till den uppmätta akustiska toppen. Resultatet använder medianen av proverna för att förhindra att enstaka reflektioner snedvrider uppskattningen.',
    },
    {
      type: 'tip',
      title: 'Placera mikrofonen där du faktiskt lyssnar',
      html: 'För högtalare, placera mikrofonen vid din lyssningsplats och håll rummet tyst. För videosynk, använd din vanliga placering av utrustningen.',
    },
    {
      type: 'title',
      text: 'Varför Resultaten För Ljudfördröjning Varierar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ljudfördröjning uppstår längs hela kedjan: webbläsarens AudioContext-klocka, operativsystemets buffertar, kodning och högtalarelement. Mikrofonen lägger till sin egen fångstväg. Därför beskriver testet den aktuella kombinationen av din utrustning.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Läs resultatet som en uppskattning',
      badge: 'Endast uppskattning',
      html: '<p>Använd resultatet för att jämföra konfigurationer eller åtgärda tydliga synkproblem. Det ersätter inte en tillverkarspecifikation eller ett kalibrerat mätsystem.</p>',
    },
  ],
  ui: {
    badge: 'Latensobservatorium',
    modeLabel: 'Uppspelningsväg',
    modeSpeakers: 'Högtalare',
    modeWired: 'Trådbundet',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Videosynk',
    startTest: 'Starta test',
    stopTest: 'Stoppa test',
    enableMic: 'Aktivera mikrofon',
    micEnabled: 'Mikrofon redo',
    calibrationTitle: 'Synkroniseringsjustering',
    calibrationHint: 'Flytta reglaget tills blinkning och klick sammanfaller',
    calibrationEarly: 'Ljudet ligger före',
    calibrationLate: 'Bilden ligger före',
    calibrationCenter: 'Synkroniserad',
    visualLane: 'Visuellt',
    audioLane: 'Ljud',
    statusReady: 'Redo',
    statusRunning: 'Impulssekvens aktiv',
    statusWaiting: 'Väntar på impuls',
    resultTitle: 'Aktuell mätning',
    latencyLabel: 'Uppmätt fördröjning',
    alignmentLabel: 'Synkroniseringsjustering',
    confidenceLabel: 'Konfidensgrad',
    samplesLabel: 'Prover',
    notMeasured: 'Ej uppmätt',
    manualConfidence: 'Endast manuellt',
    lowConfidence: 'Låg konfidens',
    mediumConfidence: 'Medelhög konfidens',
    highConfidence: 'Hög konfidens',
    noMic: 'Mikrofoningång är inte tillgänglig i denna webbläsare',
    permissionDenied: 'Mikrofontillstånd beviljades inte',
    limitationTitle: 'Läs resultatet som en uppskattning',
    limitationText: 'Rumsreflektioner, mikrofonbearbetning och buffring ändrar den uppmätta fördröjningen. Ingen ljuddata laddas upp.',
    copyReport: 'Kopiera rapport',
    copied: 'Kopierad',
    reset: 'Återställ',
    safety: 'Börja med låg volym. Avbryt om ljudet förvrängs.',
    pulse: 'SYNK',
  },
};
