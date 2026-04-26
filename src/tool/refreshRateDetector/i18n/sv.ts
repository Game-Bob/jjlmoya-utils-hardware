import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RefreshRateDetectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-uppdateringsfrekvens-detektor';
const title = 'Detektor för Monitorns Uppdateringsfrekvens';
const description = 'Identifiera omedelbart din monitors uppdateringsfrekvens med precision med requestAnimationFrame. Testa bildstabilitet och jämför med branschstandarder.';

const faqData = [
  {
    question: 'Vad är uppdateringsfrekvens (Hz)?',
    answer: 'Uppdateringsfrekvens är hur många gånger per sekund din monitor uppdaterar bilden. En 60Hz-monitor uppdateras 60 gånger per sekund, medan en 144Hz-monitor gör det 144 gånger. Högre frekvenser ger mjukare rörelser.',
  },
  {
    question: 'Hur exakt är denna detektor?',
    answer: 'Detta verktyg använder requestAnimationFrame, som synkroniseras med din monitors uppdateringscykel. Noggrannheten beror på systembelastningen. Det stabila läget mäter under längre perioder för högre precision.',
  },
  {
    question: 'Vad är skillnaden mellan stabilt och snabbt läge?',
    answer: 'Snabbt läge mäter under en kort tid (~3 sekunder) för snabb feedback. Stabilt läge tar längre tid (~10 sekunder) för att filtrera bort systembrus och ge mer tillförlitliga resultat.',
  },
  {
    question: 'Varför skiljer sig min uppmätta Hz från vad min monitor säger?',
    answer: 'Detta kan hända om: din kabelanslutning är lös, drivrutiner är föråldrade eller om ditt operativsystems skalning stör. Försök att dra ut och sätta i skärmkabeln igen, eller uppdatera GPU-drivrutinerna.',
  },
  {
    question: 'Vilka uppdateringsfrekvenser stöder moderna monitorer?',
    answer: 'Vanliga standarder är 60Hz (bas), 75Hz, 120Hz, 144Hz (gaming), 240Hz (tävlingsinriktad gaming) och 360Hz (professionell e-sport).',
  },
];

const howToData = [
  {
    name: 'Ladda verktyget',
    text: 'Öppna bara denna sida. Detektorn börjar mäta omedelbart.',
  },
  {
    name: 'Vänta på stabilisering',
    text: 'Välj stabilt eller snabbt läge. Låt mätningen slutföras utan att flytta fönstret.',
  },
  {
    name: 'Kontrollera hastighetsmätaren',
    text: 'Din monitors uppdateringsfrekvens visas som en mjuk mätare, med benchmark-statistik (min/max/medel).',
  },
  {
    name: 'Jämför med standarder',
    text: 'Verktyget visar vilken standard din monitor matchar (60, 75, 120, 144, 240, 360Hz).',
  },
  {
    name: 'Valfritt: testa frame skipping',
    text: 'Se den animerade fyrkanten korsa skärmen för att visuellt bekräfta flytet.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<RefreshRateDetectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Detektor för Monitorns Uppdateringsfrekvens: Testa din Hz Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Identifiera omedelbart din monitors uppdateringsfrekvens (60Hz, 144Hz, 240Hz, etc.) med precision. Testa bildstabilitet och verifiera att din skärm presterar enligt specifikationerna.',
    },
    {
      type: 'title',
      text: 'Varför Monitorns Uppdateringsfrekvens Spelar Roll',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uppdateringsfrekvensen avgör hur mjuka rörelser upplevs på skärmen. Gamers drar nytta av 144Hz+ skärmar, medan vanliga användare finner 60Hz tillräckligt. Detta verktyg hjälper dig bekräfta att din monitor faktiskt levererar sin utlovade frekvens.',
    },
    {
      type: 'title',
      text: 'Så mäter du din Uppdateringsfrekvens',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Ladda denna detektor – mätningen börjar omedelbart',
        'Välj mellan snabbt (3s) eller stabilt (10s) mätläge',
        'Läs av din monitors Hz på mätartavlan',
        'Jämför mot branschstandarder (60, 75, 120, 144, 240, 360Hz)',
      ],
    },
    {
      type: 'title',
      text: 'Vanliga Standarder för Uppdateringsfrekvens',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Standard', 'Användningsområde', 'Typisk Användare'],
      rows: [
        ['60Hz', 'Allmän datoranvändning', 'Kontor, webbsurf'],
        ['75Hz', 'Lättare gaming', 'Casual-gamers'],
        ['120Hz', 'Multimedia', 'Konsol, streaming'],
        ['144Hz', 'Tävlingsinriktad gaming', 'FPS, snabba spel'],
        ['240Hz+', 'Professionell e-sport', 'Proffs, streamers'],
      ],
    },
    {
      type: 'title',
      text: 'Felsökning: Skärmen visar lägre Hz än förväntat',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Kontrollera HDMI/DisplayPort-kablar – lösa kablar begränsar bandbredden',
        'Uppdatera dina GPU-drivrutiner (NVIDIA, AMD, Intel)',
        'Kontrollera OS-inställningar för bildskärm så att hög uppdateringsfrekvens är aktiverad',
        'Prova andra kablar eller portar på din monitor',
        'Starta om datorn och testa igen',
      ],
    },
    {
      type: 'title',
      text: 'Tekniken bakom denna detektor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Verktyget använder webbläsarens requestAnimationFrame-API, som synkroniserar direkt med din monitors uppdateringscykel. Genom att mäta tiden mellan bildrutorna beräknar vi din exakta frekvens med hög precision – ingen speciell hårdvara krävs.',
    },
  ],
  ui: {
    badge: 'Skärmtest',
    title: 'Detektor för Uppdateringsfrekvens',
    description: 'Identifiera din skärms uppdateringsfrekvens direkt',
    modeStable: 'Stabilt (10s, precist)',
    modeFast: 'Snabbt (3s, kvickt)',
    measurementStatus: 'Mäter...',
    currentHz: 'Nuvarande',
    averageHz: 'Genomsnitt',
    maxHz: 'Maximum',
    minHz: 'Minimum',
    standardDetected: 'Standard identifierad',
    frameSkippingTest: 'Test av Frame Skipping',
    startMeasurement: 'Starta mätning',
    resetMeasurement: 'Återställ',
    copyResult: 'Kopiera resultat',
    copiedFeedback: 'Kopierat till urklipp!',
    optimalConfiguration: '[OK] Optimal konfiguration',
    suboptimalConfiguration: '[VARNING] Under optimal nivå',
    unstableRefreshRate: '[VARNING] Instabil frekvens',
    measurementNotStarted: 'Redo att mäta',
    switchMonitorHint: 'Dra fönstret till en annan skärm för att testa den',
    incompatibleBrowserMsg: 'Din webbläsare stöder inte requestAnimationFrame',
  },
};
