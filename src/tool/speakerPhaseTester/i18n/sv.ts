import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpeakerPhaseTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'hogtalarfas-testare';
const title = 'Högtalarfas Testare';
const description =
  'Spela upp i-fas och 180 graders inverterade stereo testsignaler i din webbläsare för att kontrollera högtalarpolaritet, kablagefel och fasutsläckning.';

const faqData = [
  {
    question: 'Hur vet jag om min högtalarpolaritet är korrekt?',
    answer:
      'Spela upp den normala signalen och sedan den inverterade signalen från samma lyssningsposition. Med korrekt kopplade högtalare bör det inverterade läget låta svagare, ihåligare eller mindre centrerat eftersom vänster och höger kanal delvis släcker ut varandra i rummet. Om det inverterade läget låter fylligare eller högre kan en högtalare redan vara kopplad med omvänd polaritet.',
  },
  {
    question: 'Vad betyder inverterad fas i det här testet?',
    answer:
      'Verktyget skickar samma signal till båda kanalerna och multiplicerar sedan en kanal med -1 i inverterat läge. Det vänder vågformen 180 grader utan att ladda ner en ljudfil. Det fysiska resultatet motsvarar att vända plus och minus på en högtalare för testsignalen.',
  },
  {
    question: 'Kan detta test kontrollera alla högtalare i en hemmabio?',
    answer:
      'Det är bäst för att kontrollera ett stereopar eller de främre vänster- och högerhögtalarna i ett större system. För fullständiga surroundsystem, testa paren ett i taget och kombinera resultatet med din AV-receivers kanaltest, avståndskalibrering och en SPL- eller mätmikrofon om tillgänglig.',
  },
  {
    question: 'Ska jag använda rosa brus eller en sinuston?',
    answer:
      'Rosa brus är oftast lättare för polaritetskontroller eftersom det täcker ett brett frekvensområde och gör utsläckning uppenbar. En sinuston kan hjälpa dig att fokusera på en frekvens, men rumsmoder kan göra en enskild ton missvisande.',
  },
  {
    question: 'Är det säkert för högtalare och hörlurar?',
    answer:
      'Ja, vid måttliga nivåer. Börja lågt, undvik maximal förstärkarförstärkning och spela inte kontinuerliga toner högt genom hörlurar, små bärbara datorhögtalare eller okända högtalare. Stoppa omedelbart om du hör distorsion eller mekanisk stress.',
  },
];

const howToData = [
  {
    name: 'Placera dig vid lyssningspositionen',
    text: 'Sitt där du normalt lyssnar så att den akustiska utsläckningen du hör stämmer överens med det faktiska rummet och högtalarplaceringen.',
  },
  {
    name: 'Spela upp den normala signalen',
    text: 'Tryck på Spela I Fas och notera centerbilden, ljudstyrkan och tonkroppen.',
  },
  {
    name: 'Spela upp den inverterade signalen',
    text: 'Tryck på Spela Ur Fas. Korrekt kopplade högtalare bör oftast låta mer diffusa, ihåliga eller tystare.',
  },
  {
    name: 'Inspektera kablage om resultatet är omvänt',
    text: 'Om det inverterade läget låter starkare än normalt, kontrollera plus- och minusanslutningar på en högtalare, förstärkarterminaler, banankontakter, väggplattor och adaptrar.',
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

export const content: ToolLocaleContent<SpeakerPhaseTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Online Högtalarfas- och Polaritetstest', level: 2 },
    {
      type: 'paragraph',
      html: 'Denna högtalarfas testare jämför en normal stereosignal med en version där en kanal är inverterad med <strong>180 grader</strong>. Det praktiska målet är enkelt: bekräfta om de två högtalarna i ett par rör sig tillsammans när de ska. När vänster och höger högtalare är kopplade med samma polaritet förstärks bas- och mellanregisterenergi mellan dem och centerbilden känns stabil. När en högtalare är kopplad bakvänt rör sig konerna i motsatta riktningar för samma vågform, vilket kan få sång att förlora kropp, bas att försvinna och stereobilden att kännas konstigt bred eller ihålig.',
    },
    {
      type: 'paragraph',
      html: 'Testet genereras lokalt i webbläsaren. Det strömmar ingen tung ljudfil. I normalt läge får båda kanalerna samma rosa brus eller sinuston. I inverterat läge multipliceras en kanal med <code>-1</code>, vilket skapar en matematiskt inverterad vågform. Om din verkliga koppling är korrekt bör den konstgjorda inversionen skapa tydlig utsläckning. Om din fysiska koppling redan är omvänd kan den inverterade knappen delvis korrigera felet, så den kan låta högre, fylligare eller mer centrerad än den normala knappen.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snabb tolkning',
      badge: 'Grundregel',
      html: '<p>Om <strong>Ur Fas</strong> låter tunt, avlägset, ihåligt eller tystare än <strong>I Fas</strong>, är ditt vänster/höger-par förmodligen korrekt kopplat. Om Ur Fas låter fylligare eller högre, inspektera de röda och svarta anslutningarna på en högtalare, förstärkaren, banankontakter, väggplattor, bilkablage eller någon adapter i kedjan.</p>',
    },
    {
      type: 'table',
      headers: ['Vad du hör', 'Trolig betydelse', 'Nästa steg'],
      rows: [
        ['Normalt är fylligt, inverterat är ihåligt', 'De två högtalarna är troligen kopplade med matchande polaritet.', 'Lämna kablage som det är och fortsätt med placering eller kalibrering.'],
        ['Inverterat är fylligare än normalt', 'En högtalare kan vara fysiskt bakvänt kopplad.', 'Kontrollera plus- och minusanslutningarna på endast en sida av paret.'],
        ['Båda lägena låter nästan identiska', 'Högtalarna kan vara för långt isär, rumsreflexer dominerar eller utsignalen är mono.', 'Flytta till lyssningsplatsen, inaktivera mono-bearbetning och prova rosa brus.'],
        ['Båda lägena låter svaga i basen', 'Rumsutsläckning, subwooferfas, delningsfilter eller placering kan vara det större problemet.', 'Kör en bassvep och testa subwooferpolariteten separat.'],
      ],
    },
    { type: 'title', text: 'Varför Omvänd Högtalarpolaritet Låter Fel', level: 2 },
    {
      type: 'paragraph',
      html: 'En högtalare omvandlar en elektrisk vågform till konrörelse. För en positiv tryckvåg bör två likadana högtalare i allmänhet trycka luft i samma riktning samtidigt. Om en högtalare har plus- och minuskablarna omkastade, rör sig den högtalaren inåt medan den andra rör sig utåt för samma signal. I ett stereopar gör detta inte bara ljudet tystare överallt; rummet, högtalaravståndet, våglängden och lyssningspositionen avgör var utsläckningen är starkast. De mest märkbara symptomen är oftast reducerad bas, en svag fantommitt och sång som känns lösgjord från utrymmet mellan högtalarna.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Huvudsång och dialog bör förankras nära mitten när båda högtalarna spelar samma monosignal.',
        'Bastrumma, basgitarr och lägre pianotoner bör ha kropp istället för att låta tunna.',
        'Stereobilden bör inte kännas konstgjort bred när källan är mono.',
        'Att röra huvudet lätt bör inte få centerbilden att helt kollapsa.',
        'Ett korrekt kopplat par bör få det inverterade testet att låta mindre naturligt än det normala.',
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Polaritet', definition: 'Den positiva eller negativa orienteringen av den elektriska signalen som driver en högtalardriver.' },
        { term: 'Fas', definition: 'Tidsförhållandet mellan två vågformer, ofta beskrivet i grader under en cykel.' },
        { term: '180-graders inversion', definition: 'En vågform som vänds vertikalt, så att positivt tryck blir negativt tryck i samma ögonblick.' },
        { term: 'Utsläckning', definition: 'En minskning av ljudnivån när två liknande vågformer anländer med motsatt polaritet eller tid.' },
        { term: 'Fantommitt', definition: 'Den skenbara centerbilden som skapas när identiskt ljud når vänster och höger högtalare jämnt.' },
      ],
    },
    {
      type: 'tip',
      title: 'Testa inte från sidan av en högtalare',
      html: 'Sitt vid den normala lyssningspositionen. Fasutsläckning är rumslig: ett resultat som hörs en halvmeter från vänster högtalare kan vara helt annorlunda än resultatet i soffan, studiostolen eller förarsätet.',
    },
    { type: 'title', text: 'Rosa Brus Kontra Sinuston För Polaritetskontroller', level: 2 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Rosa brus',
          description: 'Bredbandsbrus med mer energi i de lägre oktaverna än vitt brus. Det gör det lättare att bedöma den totala tonkroppen, centerbilden och utsläckningen på gehör.',
          highlight: true,
          points: ['Bästa första val för snabba polaritetskontroller.', 'Mindre risk att domineras av en enskild rumsmod.', 'Användbart för hemmabio, studiomonitorer och bilstereo.'],
        },
        {
          title: 'Sinuston',
          description: 'En enkelfrekvenston som kan avslöja utsläckning vid en vald frekvens men kan också överdriva rumstoppar och -dalar.',
          points: ['Användbar vid felsökning av ett specifikt delningsfilter- eller basproblem.', 'Kan vara missvisande om rummet har en stark utsläckningsdal vid den frekvensen.', 'Håll volymen måttlig eftersom rena toner blir tröttsamma.'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'För en snabb polaritetskontroll, börja med rosa brus. Rosa brus sprider energi över spektrumet, så du bedömer högtalarparet som ett system istället för att bedöma en frekvens som kan ligga i en rumsdal. Använd sinustonskontrollen endast när du vill fokusera på ett känt problemband, som en utsläckning i sångområdet runt 300 Hz eller ett bashandoff-problem runt 80 Hz. Om sinustonsresultatet ändras dramatiskt när du rör huvudet några centimeter, påverkar rummet den frekvensen starkt.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '180°', label: 'Matematisk inversion tillämpad på en kanal', icon: 'mdi:rotate-3d-variant' },
        { value: '-1', label: 'Förstärkningsfaktor som används för den inverterade kanalen', icon: 'mdi:plus-minus-variant' },
        { value: '0 MB', label: 'Ljudnedladdningar som krävs för testsignalen', icon: 'mdi:cloud-off-outline' },
      ],
    },
    { type: 'title', text: 'Checklista För Hemmabio och Studiomonitorer', level: 2 },
    {
      type: 'card',
      icon: 'mdi:sofa',
      title: 'Hemmabio fronthögtalare',
      html: 'Använd de normala och inverterade knapparna endast med de aktiva främre vänster- och högerhögtalarna. Inaktivera upmixers, virtuellt surround, nattläge, dialogförbättring och rumskorrigering om du först vill isolera den råa kopplingen. Efter att ha bekräftat polaritet, aktivera kalibrering igen och kontrollera att dialogen förblir centrerad.',
    },
    {
      type: 'card',
      icon: 'mdi:music-circle',
      title: 'Studiomonitorer',
      html: 'Skicka webbläsarsignalen genom samma gränssnittsutgångar som används av din DAW. Kontrollera att båda balanserade kablarna är konsekvent kopplade och att monitor-kontrollerns polaritetsomkopplare inte är aktiverade. En inverterad monitor kan göra beslut om mono-kompatibilitet otillförlitliga under mixning.',
    },
    {
      type: 'card',
      icon: 'mdi:car-info',
      title: 'Bilstereo',
      html: 'Bilkupeer skapar kraftiga reflexer och sätesasymmetri, så lyssna från förarsätet och upprepa från passagerarsätet vid behov. Fabrikskablageadaptrar, dörrhögtalarbyten och förstärkarinstallationer är vanliga platser där plus- och minuskablar kan vara omkastade.',
    },
    {
      type: 'proscons',
      title: 'Styrkor och begränsningar med webbläsarfas test',
      items: [
        { pro: 'Omedelbar kontroll utan att installera programvara eller ladda ner ljudfiler.', con: 'Kan inte identifiera vilken fysisk kabel som är fel utan att inspektera systemet.' },
        { pro: 'Fungerar bra för ett stereopar, hörlurar, närfältsmonitorer och snabba installationskontroller.', con: 'Rumsakustik kan dölja eller överdriva effekten vid vissa lyssningsplatser.' },
        { pro: 'Rosa brus gör bredbandsutsläckning lättare att höra än en enskild testton.', con: 'Flerkanaliga surroundsystem behöver fortfarande kanal-för-kanal-verifiering.' },
      ],
    },
    { type: 'title', text: 'Så Åtgärdar Du Ett Misslyckat Polaritetstest', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tools',
      items: [
        'Stäng av förstärkaren innan du ändrar högtalarkablar eller banankontakter.',
        'Välj en högtalare i paret och följ rött-till-rött och svart-till-svart från förstärkaren till högtalaren.',
        'Inspektera eventuella väggplattor, fjäderterminaler, adaptrar, speakON-kontakter eller bilkablage mellan förstärkaren och högtalaren.',
        'Om högtalarkabeln har en rand, ribba, tryckt text eller koppar/silversida, använd samma ledare för plus i båda ändarna.',
        'Efter att ha ändrat en sida, kör de normala och inverterade lägena igen från lyssningspositionen.',
        'Om resultatet fortfarande är tvetydigt, placera tillfälligt högtalarna närmare varandra och upprepa på låg volym.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Subwoofers behöver en separat faskontroll',
      badge: 'Bassystem',
      html: '<p>Detta verktyg jämför ett vänster/höger-par. En subwoofers delningsfilter kan vara elektriskt korrekt men akustiskt i ur fas eftersom avstånd, DSP-fördröjning, delningsfilterlutning och placering förskjuter timingen. Använd detta test för huvudparet och sedan en delningsfiltersvep eller receiverkalibrering för subwooferövergången.</p>',
    },
    {
      type: 'message',
      title: 'Praktisk lyssningsregel',
      ariaLabel: 'Praktisk lyssningsregel för fastestning',
      html: 'För verkliga installationer är den korrekta inställningen den som får mono-material att låta fokuserat, fylligt och stabilt i den faktiska lyssningspositionen. Det inverterade läget är en diagnostisk kontrast, inte ett lyssningsläge.',
    },
    {
      type: 'summary',
      title: 'Sammanfattning av högtalarpolaritetsdiagnos',
      items: [
        'Normalt läge bör låta starkare och mer centrerat än inverterat när högtalarparet är korrekt kopplat.',
        'Ett inverterat läge som låter högre är en stark ledtråd om att en fysisk högtalarkoppling är omvänd.',
        'Rosa brus är den bästa första signalen eftersom det minskar risken att endast bedöma en rumsfrekvens.',
        'Sinustoner är användbara för riktad felsökning men kan domineras av rumsmoder.',
        'Sänk alltid volymen innan du byter läge, särskilt med hörlurar eller högeffektsförstärkare.',
      ],
    },
  ],
  ui: {
    normal: 'I Fas',
    inverted: 'Inverterad',
    stop: 'Stopp',
    pause: 'Paus',
    volume: 'Utgångsnivå',
    noiseColor: 'Testsignal',
    pinkNoise: 'Rosa brus',
    sineTone: 'Sinuston',
    frequency: 'Tonfrekvens',
    statusReady: 'Redo',
    statusNormal: 'I fas',
    statusInverted: 'Inverterad',
    instruction:
      'Inverterad bör låta tunnare. Högre betyder kontrollera kablage.',
    channelLabel: 'Högtalarfas testare',
    leftChannel: 'Vänster kanal',
    rightChannel: 'Höger kanal',
    leftShort: 'V',
    rightShort: 'H',
    polarityNormal: '0° i fas',
    polarityInverted: '180° inverterad',
    safety: 'Börja lågt. Polaritetstester kan bli höga genom förstärkare, studiomonitorer, bilstereosystem och hörlurar.',
  },
};
