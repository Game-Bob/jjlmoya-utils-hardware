import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MicrophoneSpectrumTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mikrofontest-spektrumanalysator';
const title = 'Mikrofontest och spektrametare';
const description = 'Testa mikrofoningång, realtidsnivå, klippning, rumsljud och frekvensomfång lokalt i din webbläsare med ett spektrogram i realtid.';

const faq = [
  {
    question: 'Spelar detta mikrofontest in eller skickar min röst till någon server?',
    answer: 'Nej. Mikrofonens ljudström i realtid kopplas endast till en analysator i din webbläsare. Verktyget skapar inga ljudfiler, ansluter inte analysatorn till en ljudutgång och skickar inga ljudprover till servrar.',
  },
  {
    question: 'Vad betyder dBFS på nivåmätaren?',
    answer: 'dBFS står för decibel i förhållande till digital full skala (Full Scale). 0 dBFS är maximal digital nivå, så normala värden är negativa. Detta är inte samma sak som en kalibrerad ljudtrycksmätning i dB SPL.',
  },
  {
    question: 'Hur vet jag om min mikrofon klipper (överstyr)?',
    answer: 'Tala med den högsta volym du förväntar dig att använda. Om mätaren når rött vid 0 dBFS bör du sänka mikrofonens förstärkning, öka avståndet eller inaktivera aggressiv ingångsbearbetning i operativsystemet.',
  },
  {
    question: 'Vad visar mätningen av rumsljud (room tone)?',
    answer: 'Tresekundersmätningen beräknar den genomsnittliga digitala RMS-nivån medan du är helt tyst. Det hjälper dig att jämföra inställningar i samma rum och webbläsare, även om automatisk förstärkningskontroll kan påverka resultatet.',
  },
  {
    question: 'Varför ändras den dominerande frekvensen när jag talar?',
    answer: 'Mänskligt tal innehåller skiftande grundfrekvenser, övertoner, konsonanter och brus. Analysatorn visar den starkaste frekvensen mellan 60 Hz och 12 kHz, så skiftningar är helt normalt.',
  },
  {
    question: 'Kan detta spektrogram certifiera en mikrofons kvalitet?',
    answer: 'Nej. Det är ett praktiskt snabbtest i webbläsaren för ingång, nivå, klippning och frekvensaktivitet. Formell certifiering kräver kalibrerad mätutrustning, kontrollerade signaler och en dokumenterad mätmiljö.',
  },
];

const howTo = [
  {
    name: 'Ge tillgång till mikrofonen',
    text: 'Klicka på Starta mikrofon och godkänn webbläsarens förfrågan. Bearbetningen börjar först efter denna aktiva handling.',
  },
  {
    name: 'Tala på normalt arbetsavstånd',
    text: 'Använd din vanliga röstvolym eller instrumentnivå och granska livevärden i dBFS, toppbanan samt spektrogrammets rörelse.',
  },
  {
    name: 'Testa starka förväntade ljudvolymer',
    text: 'Höj rösten eller spela det starkaste avsnittet. Sträva efter att undvika upprepad röd klippningsvarning medan du behåller en ren signal.',
  },
  {
    name: 'Mät rummets bakgrundsljud (room tone)',
    text: 'Var helt tyst och tryck på Mät i 3 sekunder. Jämför den sparade bakgrundsnivån efter att ha ändrat rum, enhet, förstärkning eller inställningar.',
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

export const content: ToolLocaleContent<MicrophoneSpectrumTesterUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Hur du testar en mikrofon i webbläsaren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Med detta mikrofontest kan du besvara de första felsökningsfrågorna utan att installera programvara: ger den valda ingången en signal, är nivån användbar, klipper starka partier, hur ser rumsljudet ut och vilka frekvenser är aktiva? Tryck på Starta mikrofon, tala från din vanliga position och läs av värdena i realtid. Analysatorn körs på sidan och skapar inga ljudfiler.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Lokal och privat analys bearbetning',
      badge: 'Ingen inspelning',
      html: '<p>Webbläsaren ber om mikrofontillstånd eftersom den råa ingången är känslig. Verktyget kopplar endast strömmen till en lokal analysator. Det skickar inte prover till servrar och stoppar alla spår när du klickar på Stoppa mikrofon.</p>',
    },
    {
      type: 'title',
      text: 'Att läsa av och utvärdera mikrofonnivåer i dBFS',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Det stora värdet i realtid är en RMS-uppskattning som representerar energin i det aktuella tidsfönstret. Toppvärdet visar det största absolutvärdet. Båda använder dBFS, där noll är maximal digital nivå och tystare signaler har allt lägre negativa värden. En bra nivåindikator är en praktisk guide för detta test och ingen universell inspelningsstandard.',
    },
    {
      type: 'table',
      headers: ['Mätvärde', 'Vad mätvärdet betyder', 'Vad du bör kontrollera'],
      rows: [
        ['Tyst eller under -60 dBFS', 'Den valda ingången genererar ingen användbar testsignal', 'Kontrollera anslutning, sekretessinställningar, mikrofonknapp och operativsystemets ingångsnivå'],
        ['Låg under -35 dBFS', 'Signalen kan vara svår att använda utan extra förstärkning', 'Flytta närmare mikrofonen eller höj ingångsvolymen medan du bevakar toppvärdet'],
        ['Bra och hälsosam nivå', 'Signalen har god nivå och synlig marginal kvar', 'Upprepa testet genom att tala med den högsta förväntade volymen'],
        ['Hög över -6 dBFS topp', 'Det finns väldigt liten digital marginal kvar', 'Sänk mikrofonförstärkningen något innan starka partier'],
        ['Klippning nära 0 dBFS', 'En eller flera prover har nått det digitala taket', 'Sänk mikrofonens ingångsvolym och upprepa den starkaste delen'],
      ],
    },
    {
      type: 'title',
      text: 'Använda spektrumanalysatorn i realtid',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Det böjda spektrogrammet visar frekvenser från 60 Hz till 12 kHz på en logaritmisk skala, medan den lysande linjen visar vågformen. Använd mätaren för att bekräfta att bas, mellanregister och diskant tas upp. En dominerande frekvens i rörelse är helt normalt för tal och musik. Grafen är bäst lämpad för jämförelser med samma mikrofon, förstärkning och avstånd.',
    },
    {
      type: 'tip',
      title: 'Jämför en ändring i taget',
      html: 'Mät bakgrundsljudet, ändra en inställning och mät igen från samma position. Systemets brusreducering och automatiska förstärkning kan ändra klangen utöver volymen, så lyssna även i ditt slutgiltiga program.',
    },
    {
      type: 'title',
      text: 'Varför detta inte är en kalibrerad ljudmätare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mätvärdena beskriver den digitala signalen efter mikrofon, ljudkort, drivrutin och bearbetning. De visar inte det akustiska ljudtrycket vid mikrofonkapseln. Därför rapporterar verktyget dBFS istället för dB SPL och garanterar inga certifierade frekvensomfång.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Använd kalibrerad utrustning för officiella mätningar',
      badge: 'Praktisk kontroll',
      html: '<p>Använd verktyget för snabbtest inför samtal, streaming eller inspelning. För certifiering av produktspecifikationer eller hörselskydd krävs en kalibrerad mätmikrofon och kontrollrum.</p>',
    },
  ],
  ui: {
    journeyPermission: '1. Tillåt mikrofonen',
    journeySpeak: '2. Tala naturligt',
    journeyInspect: '3. Granska nivå och spektrogram',
    startMicrophone: 'Starta mikrofon',
    stopMicrophone: 'Stoppa mikrofon',
    deviceLabel: 'Ingångsenhet',
    defaultDevice: 'Standardmikrofon',
    statusIdle: 'Väntar på tillåtelse',
    statusRequesting: 'Begär mikrofonåtkomst',
    statusLive: 'Lokal lyssning aktiv',
    statusUnsupported: 'Mikrofonåtkomst stöds inte i denna webbläsare',
    statusDenied: 'Mikrofontillstånd nekades',
    statusError: 'Kunde inte starta mikrofonen',
    levelLabel: 'Realtidsnivå',
    peakLabel: 'Toppvärde',
    frequencyLabel: 'Dominerande frekvens',
    noiseFloorLabel: 'Bakgrundsbrus',
    captureNoise: 'Mät i 3 sekunder',
    capturingNoise: 'Var tyst medan bakgrundsbruset mäts',
    noiseCaptured: 'Bakgrundsbrus uppmätt',
    roomToneHint: 'Behåll inställningarna och var tyst i tre sekunder.',
    unmeasured: 'Ej uppmätt',
    noSignalLevel: 'Ingen signal',
    noSignalPeak: 'Ingen signal',
    noSignalFrequency: 'Ingen signal',
    silentSignal: 'Ingen användbar signal',
    quietSignal: 'Svag ingång',
    healthySignal: 'Bra nivå',
    hotSignal: 'Hög nivå',
    clippingSignal: 'Klippning upptäckt',
    dbfsUnit: 'dBFS',
    hzUnit: 'Hz',
    spectrumAriaLabel: 'Logariskt mikrofonspektrogram och vågform i realtid',
    limitationTitle: 'Webbläsaren är ingen kalibrerad ljudmätare',
    limitationText: 'Värden visas i digitala dBFS. Ingen ljuddata skickas över nätverket.',
  },
};
