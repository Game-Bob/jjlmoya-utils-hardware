import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SubwooferCrossoverTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'subwoofer-crossover-test-online';
const title = 'Subwoofer Crossovertest';
const description =
  'Kör en sinussvep från 200 Hz till 10 Hz i din webbläsare för att hitta var din subwoofer bleknar, tappar eller övergår till dina huvudhögtalare.';

const faqData = [
  {
    question: 'Vad mäter ett subwoofer-crossovertest?',
    answer:
      'Det hjälper dig att höra punkten där basen slutar låta kontinuerligt mellan dina huvudhögtalare och subwoofer. Ett glapp, en plötslig nivåförändring eller ett saknat område kan peka på en felaktig delningsfrekvens, fasproblem, rumsutsläckning eller subwooferns gräns.',
  },
  {
    question: 'Varför sveper detta test från 200 Hz ner till 10 Hz?',
    answer:
      'De flesta hemmabio-delningar ligger mellan 60 Hz och 120 Hz, medan många kompakta högtalare börjar tappa utnivå över eller under det området. Att svepa från 200 Hz gör övergången mellan högtalare och subwoofer lätt att höra innan tonen når den djupa subbasen.',
  },
  {
    question: 'Kan detta online-subwoofer-bastest skada högtalare?',
    answer:
      'Ja, mycket låga frekvenser vid hög volym kan överbelasta små högtalare eller överanstränga en subwoofer. Börja tyst, undvik förstärkta basmoder och stoppa omedelbart om du hör skrammel, knackningar eller mekanisk överbelastning.',
  },
  {
    question: 'Är den markerade bortfallsfrekvensen den exakta delningsinställningen jag bör använda?',
    answer:
      'Nej. Behandla den som en lyssningsledtråd, inte en labbmätning. Den bästa delningsinställningen beror också på högtalarspecifikationer, rumsplacering, fas, avståndskorrigering och kalibreringsmål.',
  },
];

const howToData = [
  {
    name: 'Ställ in en säker lyssningsvolym',
    text: 'Sänk först systemvolymen. Svepet använder en genererad sinusvåg, så basen kan bli intensiv även när webbläsarvolymen verkar blygsam.',
  },
  {
    name: 'Starta 200 Hz till 10 Hz-svepet',
    text: 'Tryck på Starta svep och lyssna från din vanliga sittplats. Tonen rör sig stadigt genom basområdet där subwoofers, huvudhögtalare och rumsakustik överlappar.',
  },
  {
    name: 'Lyssna efter bortfallet eller övergången',
    text: 'Var uppmärksam på ögonblicket då basen blir svagare, försvinner, ändrar plats eller låter ojämn mellan subwoofern och huvudhögtalarna.',
  },
  {
    name: 'Markera frekvensen',
    text: 'Tryck på Markera bortfall vid den första tydliga problempunkten. Använd den frekvensen som ledtråd för att justera delning, fas, placering eller rumskorrigering.',
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
  step: howToData.map((step, index) => ({
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<SubwooferCrossoverTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Hitta Basgapet Mellan Dina Högtalare Och Subwoofern', level: 2 },
    {
      type: 'paragraph',
      html: 'En subwoofer ska inte låta som en separat låda i hörnet. Basen ska förbli jämn när tonerna rör sig från dina huvudhögtalare till subben. Detta test sveper från <strong>200 Hz till 10 Hz</strong> så att du kan höra den exakta zonen där övergången blir svag, dånande, lokaliserbar eller tyst.',
    },
    {
      type: 'table',
      headers: ['Vad du hör', 'Vad det oftast betyder', 'Vad du ska prova först'],
      rows: [
        ['Basen försvinner runt 70-100 Hz', 'Subwoofer och högtalare kan släcka ut varandra nära delningen.', 'Vänd fasen, justera avstånd/fördröjning och upprepa svepet.'],
        ['Basen dånar i ett smalt band', 'Rumsmod eller för mycket överlappning mellan högtalare och subwoofer.', 'Sänk delningen något eller flytta subwoofern/lyssningspositionen.'],
        ['Basen verkar komma från subwooferns plats', 'Delningen kan vara för hög eller subwooferns nivå för stark.', 'Prova 80 Hz eller lägre och minska subwooferns förstärkning.'],
        ['Djupbas bleknar under 30-40 Hz', 'Normal utsträckningsgräns för många subbar, särskilt kompakta modeller.', 'Kontrollera subwooferns specifikation innan du jagar ett problem som kan vara fysiskt.'],
      ],
    },
    { type: 'title', text: 'Vad Bortfallsfrekvensen Berättar För Dig', level: 3 },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Använd den markerade frekvensen som inställningsledtråd',
      badge: 'Lyssningstips',
      html: '<p>Om den markerade punkten är nära din AVR-delning är problemet troligen integration: fas, avstånd, polaritet, nivå eller filtrets branthet. Om den markerade punkten är mycket lägre kan du höra subwoofern nå sin uteffektsgräns. Om problemet ändras mycket när du rör på huvudet dominerar rummet resultatet.</p>',
    },
    {
      type: 'title',
      text: 'Vanliga Delningsområden',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Högtalartyp', 'Typisk delningsstartpunkt', 'Varför'],
      rows: [
        ['Små satelliter', '100-150 Hz', 'Små kabinett kan oftast inte spela ren övre bas på bionivåer.'],
        ['Bokhyllehögtalare', '70-100 Hz', 'Ofta tillräckligt med bas för en ren övergång utan att göra subben lokaliserbar.'],
        ['Golvhögtalare', '50-80 Hz', 'Större woofers hanterar mer mellanbas, men rummet kan ändå föredra subwoofer-bashantering.'],
        ['THX-konfiguration', '80 Hz', 'En praktisk standard som fungerar bra för många system och skickar djup bas till subben.'],
      ],
    },
    { type: 'title', text: 'Delningsproblem Eller Rumsproblem?', level: 3 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Delnings eller fasproblem',
          description: 'Den svaga punkten visas nära delningsfrekvensen och förbättras efter att ha ändrat fas, polaritet, avstånd eller delningsinställning.',
          points: ['Oftast repeterbar från samma sittplats.', 'Ofta centrerad kring 60-120 Hz.'],
        },
        {
          title: 'Rumsutsläckning',
          description: 'Den svaga punkten ändras drastiskt när du rör på huvudet, byter sittplats eller flyttar subwoofern en kort sträcka.',
          points: ['Mycket positionsberoende.', 'Ofta löst mer genom placering än genom inställningar.'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Bästa sättet att köra testet',
      html: 'Sitt där du faktiskt tittar på film eller lyssnar på musik. Stå inte bredvid subwoofern. En delning som låter bra bredvid skåpet kan fortfarande lämna ett gap vid soffan.',
    },
    {
      type: 'summary',
      title: 'Vad du ska ändra efter svepet',
      items: [
        'Om gapet är nära den nuvarande delningen, prova 10 Hz förändringar och upprepa svepet.',
        'Prova subwooferns fasomkopplare eller fördröjningsinställning om det svaga bandet ligger nära delningen.',
        'Om basen blir starkare på en plats och försvinner på en annan, flytta subwoofern innan du ändrar alla AVR-inställningar.',
        'Efter placerings- eller delningsändringar, kör rumskorrigeringen igen så att receivern mäter den nya konfigurationen.',
        'Använd den markerade frekvensen för att styra inställningen och bekräfta sedan med musik, filmer och bekanta basgångar.',
      ],
    },
  ],
  ui: {
    sweepLabel: 'Subwoofer lågfrekvenssvep',
    currentFrequency: 'Aktuell frekvens',
    targetFrequency: 'Mål',
    elapsed: 'Förfluten',
    statusReady: 'Redo för lågt svep',
    statusRunning: 'Sveper nedåt',
    statusStopped: 'Svep stoppat',
    start: 'Starta svep',
    stop: 'Stoppa svep',
    markDropout: 'Markera bortfall',
    reset: 'Återställ',
    volume: 'Utgångsnivå',
    duration: 'Sveplängd',
    safeStart: 'Börja på låg volym och markera sedan den första frekvensen där basen blir svår att höra.',
    roomNote: 'Rumsposition och fas kan förändra resultatet dramatiskt.',
    dropoutLabel: 'Markerad punkt',
    dropoutEmpty: 'Inte markerad än',
    crossoverEstimate: 'Uppskattad bortfallspunkt',
  },
};
