import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ljudfordrojning-test';
const title = 'Ljudfördröjningstest';
const description = 'Testa den upplevda ljudfördröjningen på högtalare, hörlurar, Bluetooth-enheter och videosynkronisering med ett lokalt pulstest i webbläsaren.';

const faq = [
  {
    question: 'Vad mäter detta ljudfördröjningstest exakt?',
    answer: 'Det valfria mikrofonläget uppskattar tiden mellan en schemalagd klickpuls i webbläsaren och när den uppfattas av mikrofonen.',
  },
  {
    question: 'Kan jag testa Bluetooth-latenstid utan mikrofon?',
    answer: 'Ja. Starta sekvensen, välj Bluetooth och justera skjutreglaget tills blinkningen och klicket upplevs samtidigt.',
  },
  {
    question: 'Varför behöver mikrofonläget tillstånd?',
    answer: 'Webbläsaren behöver tillgång till mikrofonen för att fånga klickljudet efter att det spridits i rummet. Allt bearbetas lokalt.',
  },
  {
    question: 'Varför kan mikrofonresultatet variera?',
    answer: 'Rumsreflektioner, mikrofonbearbetning och operativsystemets buffertar kan ändra mätresultatet.',
  },
  {
    question: 'Vilket testläge bör jag välja?',
    answer: 'Välj Högtalare för rumsljud, Trådburna hörlurar för direktanslutning och Bluetooth för trådlösa enheter.',
  },
  {
    question: 'Skickas mitt mikrofonljud till någon server?',
    answer: 'Nej. Mikrofonströmmen analyseras enbart lokalt i webbläsarens minne och inga ljudfiler laddas upp.',
  },
];

const howTo = [
  {
    name: 'Välj uppspelningsväg',
    text: 'Välj högtalare, trådburna hörlurar, Bluetooth eller videosynkronisering.',
  },
  {
    name: 'Starta med manuell puls',
    text: 'Tryck på Starta test, lyssna på klicket och justera reglaget så att det matchar visuell puls.',
  },
  {
    name: 'Aktivera mikrofonmätning vid behov',
    text: 'Klicka på Aktivera mikrofon, ge tillstånd och placera mikrofonen vid lyssningsplatsen.',
  },
  {
    name: 'Läs av resultatet som en uppskattning',
    text: 'Använd medianvärdet för fördröjning och konfidensindikatorn för att jämföra inställningar.',
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
    { type: 'title', text: 'Ljudfördröjningstest för Bluetooth och videosynkronisering', level: 2 },
    {
      type: 'paragraph',
      html: 'Detta webbläsarbaserade test för ljudfördröjning hjälper dig utvärdera tidsförskjutningen mellan bild och ljud på din enhet.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Starta utan mikrofonåtkomst',
      badge: 'Lokalt och privat',
      html: '<p>Det manuella testet fungerar utmärkt utan mikrofon. Följ markören och justera reglaget så att bild och ljud stämmer överens.</p>',
    },
    {
      type: 'title',
      text: 'Hur du testar Bluetooth-ljudlatenstid',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Välj Bluetooth och ställ in en behaglig volym.',
        'Kör pulssekvensen i din webbläsare.',
        'Jämför den visuella blinkningen med klickljudet.',
        'Juster regelreglaget tills signalerna sammanfaller.',
        'Upprepa testet när du byter kodek eller enhet.',
      ],
    },
    {
      type: 'table',
      headers: ['Läge', 'Bäst för', 'Huvudsaklig begränsning'],
      rows: [
        ['Högtalare', 'Rumsuppspelning och TV', 'Rumsavstånd och reflektioner påverkar mätningen.'],
        ['Trådburna hörlurar', 'Direkt analog utgång', 'Mikrofonen kan ha svårt att fånga sluta hörlurar.'],
        ['Bluetooth', 'Trådlösa enheter', 'Kodekbuffring varierar mellan olika enheter.'],
        ['Videosynkronisering', 'Skärm- och spelaranpassning', 'Videospelaren kan lägga till egen bildfördröjning.'],
      ],
    },
    {
      type: 'title',
      text: 'Valfri mikrofonmätning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Med mikrofonen aktiverad mäter verktyget tiden fram till den akustiska toppunkten och beräknar medianvärdet.',
    },
    {
      type: 'tip',
      title: 'Placera mikrofonen där du lyssnar',
      html: 'För högtalare, placera mikrofonen vid din vanliga lyssningsplats i ett tyst rum.',
    },
    {
      type: 'title',
      text: 'Varför ljudfördröjningsresultat varierar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ljudfördröjning beror på hela kedjan: AudioContext-klocka, operativsystemets buffertar och Bluetooth-kodek.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Tolkning av resultatet',
      badge: 'Uppskattat värde',
      html: '<p>Använd värdet för att jämföra inställningar. Det ersätter inte professionell mätutrustning.</p>',
    },
  ],
  ui: {
    badge: 'Latensobservatorium',
    modeLabel: 'Uppspelningsväg',
    modeSpeakers: 'Högtalare',
    modeWired: 'Kabel',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Videosynkronisering',
    startTest: 'Starta test',
    stopTest: 'Stoppa test',
    enableMic: 'Aktivera mikrofon',
    micEnabled: 'Mikrofon redo',
    calibrationTitle: 'Justeringskorrigering',
    calibrationHint: 'Dra reglaget tills blinkningen och klicket sammanfaller',
    calibrationEarly: 'Ljudet före',
    calibrationLate: 'Visuellt före',
    calibrationCenter: 'Justerad',
    visualLane: 'Visuellt',
    audioLane: 'Ljud',
    statusReady: 'Redo',
    statusRunning: 'Pulssekvens körs',
    statusWaiting: 'Väntar på puls',
    resultTitle: 'Aktuell mätning',
    latencyLabel: 'Uppmätt fördröjning',
    alignmentLabel: 'Justeringskorrigering',
    confidenceLabel: 'Konfidens',
    samplesLabel: 'Mätningar',
    notMeasured: 'Ej uppmätt',
    manualConfidence: 'Endast manuell',
    lowConfidence: 'Låg konfidens',
    mediumConfidence: 'Medelhög konfidens',
    highConfidence: 'Hög konfidens',
    noMic: 'Mikrofoningång är inte tillgänglig i denna webbläsare',
    permissionDenied: 'Mikrofontillstånd gavs inte',
    limitationTitle: 'Läs resultatet som en uppskattning',
    limitationText: 'Rumsreflektioner och systembuffertar förändrar mätningen. Inget ljud laddas upp.',
    copyReport: 'Kopiera rapport',
    copied: 'Kopierad',
    reset: 'Återställ',
    safety: 'Börja med låg volym. Stoppa om ljudet distorderar.',
    pulse: 'SYNKRO',
  },
};
