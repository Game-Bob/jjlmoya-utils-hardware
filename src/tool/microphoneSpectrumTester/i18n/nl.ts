import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MicrophoneSpectrumTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'microfoontest-spectrum-analysator';
const title = 'Microfoontest en Spectrum Analysator';
const description = 'Test uw microfooninvoer, live niveau, oversturing, omgevingsruis en frequentierespons lokaal in uw browser met een realtime spectrum.';

const faq = [
  {
    question: 'Neemt deze microfoontest mijn stem op of wordt deze geüpload naar een server?',
    answer: 'Nee. De live microfoonstream is uitsluitend verbonden met een analysator in uw browser. De tool maakt geen geluidsopname, verbindt de analysator niet met een audio-uitvoer en uploadt geen microfoonsamples naar een server.',
  },
  {
    question: 'Wat betekent dBFS op de niveaumeter?',
    answer: 'dBFS betekent decibels relatief ten opzichte van digitale maximale schaal (Full Scale). Nul dBFS is de maximale representatieve digitale piek, dus normale waarden zijn negatief. Dit is niet hetzelfde als een gecalibreerde geluidsdrukmeting in dB SPL.',
  },
  {
    question: 'Hoe weet ik of mijn microfoon overstuurt (clipping)?',
    answer: 'Spreek op het hardste niveau dat u verwacht te gebruiken. Als pieken herhaaldelijk de rode oversturingsstatus bij nul dBFS bereiken, verlaag dan de microfoonversterking, vergroot de afstand of schakel agressieve invoerverwerking in uw besturingssysteem uit.',
  },
  {
    question: 'Wat toont de omgevingsruismeting?',
    answer: 'De meting van drie seconden berekent het gemiddelde digitale RMS-niveau terwijl u stil blijft. Dit helpt om instellingen in dezelfde browser en ruimte te vergelijken, hoewel automatische versterkingsregeling en ruisonderdrukking het resultaat kunnen beïnvloeden.',
  },
  {
    question: 'Waarom verandert de dominante frequentie als ik spreek?',
    answer: 'Spraak bevat een veranderende grondfrequentie, boventonen, medeklinkers en ruis. De weergave toont de sterkste frequentieband tussen 60 Hz en 12 kHz, dus beweging is het verwachte gedrag en geen fout.',
  },
  {
    question: 'Kan deze spectrum analysator microfoonkwaliteit certificeren?',
    answer: 'Nee. Het is een praktische browsercheck voor invoer, niveau, oversturing, ruis en zichtbare frequentie-activiteit. Officiële certificering van frequentierespons of geluidsdruk vereist gecalibreerde apparatuur, gecontroleerde signalen en een gedocumenteerde meetomgeving.',
  },
];

const howTo = [
  {
    name: 'Microfoontoegang verlenen',
    text: 'Klik op Start microfoon en accepteer de toestemming van de browser. De verwerking begint pas na deze expliciete actie.',
  },
  {
    name: 'Spreken op normale werkafstand',
    text: 'Spreek op uw normale volume of instrumentniveau en bekijk de live dBFS-waarde, piekbaan en de beweging van het spectrum.',
  },
  {
    name: 'Het hardste verwachte moment testen',
    text: 'Verhoog uw stem of speel de hardste passage die u verwacht. Streef ernaar herhaalde rode oversturing te vermijden terwijl u een helder signaal behoudt.',
  },
  {
    name: 'Omgevingsruis (room tone) meten',
    text: 'Blijf stil en druk op Drie seconden meten. Vergelijk de opgeslagen ruisvloer na het wijzigen van ruimte, apparaat, versterking of verwerkingsinstellingen.',
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
  inLanguage: 'nl',
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
      text: 'Hoe een microfoon te testen in uw browser',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze microfoontest beantwoordt de eerste vragen bij probleemoplossing zonder een app te installeren: levert de geselecteerde invoer een signaal op, is het niveau bruikbaar, oversturen harde momenten, hoe ziet de omgevingsruis eruit en welke frequenties zijn actief? Druk op Start microfoon, spreek vanaf uw normale werkpositie en lees het live observatorium af. De analysator draait op de huidige pagina en maakt geen bestand aan.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Lokale en privé analyse',
      badge: 'Geen opname',
      html: '<p>Uw browser vraagt om microfoontoestemming omdat ruwe invoer gevoelig is. Deze tool verbindt die stream uitsluitend met een lokale analysator. Het stuurt geen samples naar een server en stopt alle mediatracks wanneer u op Stop microfoon drukt.</p>',
    },
    {
      type: 'title',
      text: 'Microfoonniveau aflezen in dBFS',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De grote live waarde is een RMS-schatting die de energie van het huidige tijdsvenster vertegenwoordigt. Piek toont de grootste absolute sample in dat venster. Beide gebruiken dBFS, waarbij nul de digitale maximale schaal is en zachtere signalen steeds negatieve waarden gebruiken. Een gezonde badge is een praktische gids voor deze test, geen universele opnamestandaard.',
    },
    {
      type: 'table',
      headers: ['Meting', 'Wat het u vertelt', 'Wat te proberen'],
      rows: [
        ['Stil of onder -60 dBFS', 'De geselecteerde invoer levert geen bruikbaar testsignaal op', 'Controleer het apparaat, de dempknop, de toestemming en het invoerniveau van het besturingssysteem'],
        ['Zacht onder -35 dBFS', 'Het signaal is mogelijk moeilijk te gebruiken zonder extra versterking', 'Verplaats dichterbij of verhoog de invoerversterking terwijl u de piek observeert'],
        ['Gezond niveau', 'Het huidige signaal heeft een bruikbaar niveau en zichtbare headroom', 'Herhaal met uw hardste verwachte stem of passage'],
        ['Hoog boven -6 dBFS piek', 'Er is weinig resterende digitale headroom', 'Verlaag de versterking of vergroot de afstand voor een hard moment'],
        ['Oversturing bij 0 dBFS', 'Een of meer samples hebben het digitale plafond bereikt', 'Verlaag de versterking en herhaal het hardste deel van de test'],
      ],
    },
    {
      type: 'title',
      text: 'Het live microfoonspectrum gebruiken',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het gebogen spectrum brengt frequentiebanden van 60 Hz tot 12 kHz in kaart op een logaritmische boog, terwijl het lichtgevende lint de huidige golfvorm toont. Gebruik de weergave om te controleren of lage, midden- en hoge frequenties de browser bereiken. Een bewegende dominante frequentie is normaal voor spraak en muziek. De weergave is het meest nuttig voor vergelijkingen met dezelfde microfoon, versterking, ruimte, browser en afstand.',
    },
    {
      type: 'tip',
      title: 'Vergelijk één verandering per keer',
      html: 'Leg de omgevingsruis vast, wijzig één instelling en leg deze opnieuw vast vanaf dezelfde positie. Ruisonderdrukking en automatische versterkingsregeling van het besturingssysteem kunnen een microfoon stiller laten lijken terwijl ook het geluid verandert, dus luister ook in uw echte toepassing.',
    },
    {
      type: 'title',
      text: 'Waarom dit geen gecalibreerde geluidsmeter is',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Browsersamples beschrijven het digitale signaal na de microfoon, interface, driver en automatische verwerking. Ze onthullen niet de akoestische geluidsdruk bij de microfooncapsule. Daarom rapporteert deze tool dBFS in plaats van dB SPL en claimt het geen gecertificeerde frequentierespons of ruisniveaus.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gebruik gecalibreerde apparatuur voor officiële metingen',
      badge: 'Alleen praktische controle',
      html: '<p>Gebruik deze tool voor het oplossen van problemen bij gesprekken, streams en opnames. Gebruik een gecalibreerde meetmicrofoon, akoestische calibrator en gecontroleerd signaal wanneer het resultaat aan officiële normen moet voldoen.</p>',
    },
  ],
  ui: {
    journeyPermission: '1. Microfoon toestaan',
    journeySpeak: '2. Normaal spreken',
    journeyInspect: '3. Niveau en spectrum bekijken',
    startMicrophone: 'Start microfoon',
    stopMicrophone: 'Stop microfoon',
    deviceLabel: 'Invoerapparaat',
    defaultDevice: 'Standaard microfoon',
    statusIdle: 'Wachten op toestemming',
    statusRequesting: 'Toegang vragen',
    statusLive: 'Lokaal actief',
    statusUnsupported: 'Microfoontoegang niet beschikbaar',
    statusDenied: 'Toestemming geweigerd',
    statusError: 'Microfoon kon niet starten',
    levelLabel: 'Live niveau',
    peakLabel: 'Piek',
    frequencyLabel: 'Dominante frequentie',
    noiseFloorLabel: 'Omgevingsruis',
    captureNoise: 'Drie seconden meten',
    capturingNoise: 'Blijf stil tijdens de ruismeting',
    noiseCaptured: 'Omgevingsruis gemeten',
    roomToneHint: 'Houd de positie vast en blijf 3 seconden stil.',
    unmeasured: 'Niet gemeten',
    noSignalLevel: 'Geen signaal',
    noSignalPeak: 'Geen signaal',
    noSignalFrequency: 'Geen signaal',
    silentSignal: 'Geen bruikbaar signaal',
    quietSignal: 'Zakke invoer',
    healthySignal: 'Goede headroom',
    hotSignal: 'Hoog signaal',
    clippingSignal: 'Oversturing gedetecteerd',
    dbfsUnit: 'dBFS',
    hzUnit: 'Hz',
    spectrumAriaLabel: 'Live microfoonspectrum en golfvorm',
    limitationTitle: 'Geen gecalibreerde geluidsmeter',
    limitationText: 'Metingen zijn digitale dBFS-waarden. Er worden geen audiogegevens geüpload.',
  },
};
