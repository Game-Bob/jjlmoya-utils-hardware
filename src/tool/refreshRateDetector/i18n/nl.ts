import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RefreshRateDetectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-verversingssnelheid-detector';
const title = 'Monitor Verversingssnelheid Detector';
const description = 'Detecteer direct de verversingssnelheid van uw monitor met precisie met behulp van requestAnimationFrame. Test de framestabiliteit en vergelijk deze met industriestandaarden.';

const faqData = [
  {
    question: 'Wat is verversingssnelheid (Hz)?',
    answer: 'Verversingssnelheid is hoe vaak per seconde uw monitor het beeld bijwerkt. Een 60Hz-monitor ververst 60 keer per seconde, terwijl een 144Hz-monitor 144 keer ververst. Hogere snelheden zorgen voor vloeiendere bewegingen.',
  },
  {
    question: 'Hoe nauwkeurig is deze detector?',
    answer: 'Deze tool maakt gebruik van requestAnimationFrame, dat synchroniseert met de verversingscyclus van uw monitor. De nauwkeurigheid hangt af van de systeembelasting. De stabiele modus meet gedurende langere perioden voor een grotere precisie.',
  },
  {
    question: 'Wat is het verschil tussen de Stabiele en Snelle modus?',
    answer: 'De Snelle modus meet gedurende een korte tijd (~3 seconden) voor snelle feedback. De Stabiele modus duurt langer (~10 seconden) om systeemruis weg te filteren en betrouwbaardere resultaten te geven.',
  },
  {
    question: 'Waarom wijkt mijn gedetecteerde Hz af van wat mijn monitor zegt?',
    answer: 'Dit kan gebeuren als: uw kabelverbinding los zit, stuurprogramma\'s verouderd zijn of uw OS-schaling interfereert. Probeer uw beeldschermkabel los te koppelen en weer aan te sluiten, of de GPU-stuurprogramma\'s bij te werken.',
  },
  {
    question: 'Welke verversingssnelheden ondersteunen moderne monitoren?',
    answer: 'Veelvoorkomende standaarden zijn 60Hz (basis), 75Hz, 120Hz, 144Hz (gaming), 240Hz (competitieve gaming) en 360Hz (professionele e-sports).',
  },
];

const howToData = [
  {
    name: 'Laad de tool',
    text: 'Open simpelweg deze pagina. De detector begint onmiddellijk met meten.',
  },
  {
    name: 'Wacht op stabilisatie',
    text: 'Kies de Stabiele of Snelle modus. Laat de meting voltooien zonder het venster te verplaatsen.',
  },
  {
    name: 'Controleer de snelheidsmeter',
    text: 'De verversingssnelheid van uw monitor verschijnt als een soepele draaiknop, met benchmarkstatistieken (min/max/gem).',
  },
  {
    name: 'Vergelijk met standaarden',
    text: 'De tool laat zien met welke standaard uw monitor overeenkomt (60, 75, 120, 144, 240, 360Hz).',
  },
  {
    name: 'Optioneel: test frame skipping',
    text: 'Bekijk het geanimeerde vierkant dat over het scherm beweegt om visueel de vloeiendheid te bevestigen.',
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
  inLanguage: 'nl',
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
      text: 'Monitor Verversingssnelheid Detector: Test uw Scherm Hz Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Detecteer direct de verversingssnelheid van uw monitor (60Hz, 144Hz, 240Hz, enz.) met precisie. Test de framestabiliteit en verifieer of uw scherm presteert volgens de opgegeven specificaties.',
    },
    {
      type: 'title',
      text: 'Waarom de Verversingssnelheid van de Monitor Belangrijk is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De verversingssnelheid bepaalt hoe vloeiend beweging op uw scherm verschijnt. Gamers hebben baat bij 144Hz+ monitoren, terwijl algemene gebruikers 60Hz voldoende vinden. Deze tool helpt bevestigen dat uw monitor daadwerkelijk de geadverteerde verversingssnelheid levert.',
    },
    {
      type: 'title',
      text: 'Hoe u uw Verversingssnelheid Kunt Detecteren',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Laad deze detector -de meting begint onmiddellijk',
        'Kies tussen Snelle (3s) of Stabiele (10s) meetmodus',
        'Lees de Hz van uw monitor af van de snelheidsmeter',
        'Vergelijk met industriestandaarden (60, 75, 120, 144, 240, 360Hz)',
      ],
    },
    {
      type: 'title',
      text: 'Veelvoorkomende Verversingssnelheid Standaarden',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Standaard', 'Use Case', 'Typische Gebruiker'],
      rows: [
        ['60Hz', 'Algemeen Computergebruik', 'Kantoor, Webbrowser'],
        ['75Hz', 'Licht Gamen', 'Casual Gamers'],
        ['120Hz', 'Multimedia', 'Console, Streaming'],
        ['144Hz', 'Competitief Gamen', 'FPS, Snelle Games'],
        ['240Hz+', 'Professionele E-sports', 'Pro Gamers, Streamers'],
      ],
    },
    {
      type: 'title',
      text: 'Problemen Oplossen: Scherm Toont Lagere Hz dan Verwacht',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Controleer HDMI/DisplayPort kabelverbindingen -losse kabels verminderen de bandbreedte',
        'Update uw GPU-stuurprogramma\'s (NVIDIA, AMD, Intel)',
        'Controleer de OS-beeldscherminstellingen om er zeker van te zijn dat een hoge verversingssnelheid is ingeschakeld',
        'Probeer andere kabels of poorten op uw monitor',
        'Start uw computer opnieuw op en test opnieuw',
      ],
    },
    {
      type: 'title',
      text: 'De Techniek Achter Deze Detector',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Deze tool maakt gebruik van de requestAnimationFrame API van de browser, die direct synchroniseert met de verversingscyclus van uw monitor. Door de tijd tussen animatieframes te meten, berekenen we uw exacte verversingssnelheid met hoge precisie -geen speciale hardware nodig.',
    },
  ],
  ui: {
    badge: 'Schermtest',
    title: 'Monitor Verversingssnelheid Detector',
    description: 'Detecteer de verversingssnelheid van uw scherm direct',
    modeStable: 'Stabiel (10s, precies)',
    modeFast: 'Snel (3s, vlot)',
    measurementStatus: 'Bezig met meten...',
    currentHz: 'Actueel',
    averageHz: 'Gemiddelde',
    maxHz: 'Maximum',
    minHz: 'Minimum',
    standardDetected: 'Standaard Gedetecteerd',
    frameSkippingTest: 'Frame Skipping Test',
    startMeasurement: 'Start Meting',
    resetMeasurement: 'Reset',
    copyResult: 'Resultaat Kopiëren',
    copiedFeedback: 'Gekopieerd naar klembord!',
    optimalConfiguration: '[OK] Optimale Configuratie',
    suboptimalConfiguration: '[WAARSCHUWING] Onder Optimaal',
    unstableRefreshRate: '[WAARSCHUWING] Onstabiele Verversingssnelheid',
    measurementNotStarted: 'Klaar om te meten',
    switchMonitorHint: 'Sleep het venster naar een andere monitor om deze te testen',
    incompatibleBrowserMsg: 'Uw browser ondersteunt requestAnimationFrame niet',
  },
};
