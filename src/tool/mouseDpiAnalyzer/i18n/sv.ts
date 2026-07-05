import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDpiAnalyzerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mus-dpi-analysator';
const title = 'Mus DPI analysator';
const description =
  'Mät din riktiga mus DPI online genom att flytta musen ett känt fysiskt avstånd och jämföra den fångade pekarförflyttningen i pixlar.';

const faqData = [
  {
    question: 'Hur fungerar en online mus DPI testare?',
    answer:
      'Den ber dig flytta musen över ett känt fysiskt avstånd, registrerar webbläsarens rörelsehändelser, korrigerar de fångade värdena med devicePixelRatio och dividerar de resulterande pixlarna med avståndet i tum.',
  },
  {
    question: 'Varför kan verklig DPI skilja sig från värdet som står på musen?',
    answer:
      'Sensortoleranser, fasta firmwaresteg, ytbeteende, operativsystemets skalning, pekaracceleration och spelprofilinställningar kan göra att uppmätt rörelse skiljer sig från det nominella DPI-värdet som valts i programvaran.',
  },
  {
    question: 'Bör pekaracceleration inaktiveras före testning?',
    answer:
      'Ja. Inaktivera Förbättrad pekarprecision i Windows och eventuella tillverkares accelerationskurvor om du vill ha en ren DPI-mätning. Lämna den aktiverad endast när du avsiktligt vill se hur din normala inställning beter sig.',
  },
  {
    question: 'Vilket fysiskt avstånd bör jag använda?',
    answer:
      'Längre avstånd minskar handfel. Ett kreditkorts bredd är bekvämt, men en 100 mm eller 4 tums linjalpassering är oftast mer repeterbar om ditt skrivbord har tillräckligt med utrymme.',
  },
];

const howToData = [
  {
    name: 'Välj en fysisk referens',
    text: 'Använd 5 eller 10 mm för mycket hög DPI, 1 tum för konventionell testning eller längre referenser när du har tillräckligt med skrivbordsutrymme.',
  },
  {
    name: 'Håll fångstknappen nedtryckt',
    text: 'Tryck och håll det centrala fångstmålet på skärmen och flytta musen fysiskt till höger exakt det valda avståndet.',
  },
  {
    name: 'Släpp vid det fysiska märket',
    text: 'Släpp knappen när musen når det verkliga fysiska märket på ditt skrivbord. Verktyget beräknar pixlar per tum och rapporterar den uppmätta DPI:n.',
  },
  {
    name: 'Upprepa vid olika hastigheter',
    text: 'Kör långsamma och snabba passeringar. Om DPI ändras kraftigt kan pekaracceleration eller sensorsläthetsbehandling påverka resultatet.',
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

export const content: ToolLocaleContent<MouseDpiAnalyzerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Mus DPI testare online: mät verklig sensorkänslighet', level: 2 },
    {
      type: 'paragraph',
      html: 'En mus kan annonsera 800, 1600, 3200 eller 26000 DPI, men värdet som spelar roll i spel och precisionsarbete är rörelsen som faktiskt når datorn. Denna mus DPI testare online mäter det praktiska värdet genom att jämföra en känd fysisk rörelse med pekarförflyttning fångad i webbläsaren. Resultatet uttrycks som pixlar per tum, samma enhet som vanligtvis används när man talar om mus DPI eller CPI.',
    },
    {
      type: 'paragraph',
      html: 'Testet är avsiktligt lokalt och enkelt: håll fångstmålet, flytta musen exakt till höger med det valda fysiska avståndet och släpp. Verktyget ackumulerar inbyggda rörelsedeltavärden istället för att använda ett pollningsfrekvensskript eller ett generiskt mustest. Eftersom beräkningen körs i din webbläsare krävs ingen drivrutinsnedladdning, konto eller molnuppladdning.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Viktigt testvillkor',
      html: 'För en ren DPI-mätning, inaktivera operativsystemets pekaracceleration och tillverkares accelerationskurvor. Om accelerationen förblir aktiverad beskriver resultatet ditt nuvarande pekarbeteende snarare än den råa sensorinställningen.',
    },
    { type: 'title', text: 'Hur den verkliga DPI-beräkningen fungerar', level: 3 },
    {
      type: 'paragraph',
      html: 'DPI betyder punkter per tum. I en muskontext används ofta DPI och CPI utbytbart för att beskriva hur många räkningar eller pekarpixlar som produceras när musen rör sig en fysisk tum. Denna analysator registrerar horisontell rörelse under en kontrollerad passering, konverterar det valda avståndet till tum och dividerar sedan fångade pixlar med tum. Till exempel, om musen rapporterar 3200 korrigerade pixlar över 2 tum, är det uppmätta värdet ungefär 1600 DPI.',
    },
    {
      type: 'list',
      items: [
        'Välj en kort referens som 10 mm för mycket hög DPI eller en längre referens för låg DPI.',
        'Håll den centrala fångstkontrollen så att webbläsaren endast registrerar rörelse under passeringen.',
        'Rör dig fysiskt till höger och håll banan så rak som möjligt.',
        'Släpp vid det verkliga fysiska märket och läs av den beräknade DPI:n.',
        'Upprepa flera gånger och beräkna medelvärdet av konsekventa passeringar istället för att lita på en enda passering.',
      ],
    },
    {
      type: 'table',
      headers: ['Fångad rörelse', 'Fysiskt avstånd', 'Uppmätt DPI'],
      rows: [
        ['800 px', '1.00 in', '800 DPI'],
        ['1350 px', '85.6 mm kreditkortsbredd', '401 DPI'],
        ['3150 px', '50.0 mm', '1600 DPI'],
        ['6300 px', '100.0 mm', '1600 DPI'],
      ],
    },
    {
      type: 'tip',
      title: 'Gör stroken ren',
      html: 'En enda horisontell stroke är viktigare än ett långt avstånd. För mycket hög DPI, använd 5 mm eller 10 mm förvalet: det håller rörelsen tillräckligt liten för att stanna inom skärmen samtidigt som det ger kalkylatorn en känd fysisk referens. Förloppsindikatorn är endast en insignalmätare; linjalen eller kortet på skrivbordet är stoppunkten.',
    },
    { type: 'title', text: 'Varför uppmätt DPI kan skilja sig från annonserad DPI', level: 3 },
    {
      type: 'paragraph',
      html: 'Annonserad DPI är ofta ett valbart firmwaresteg, inte ett labbcertifierat värde för varje yta och varje enhet. Två möss inställda på samma nominella DPI kan kännas olika om deras sensorer, firmwareskalning, glidfötters höjd, ytstruktur, lyftbeteende eller operativsysteminställningar skiljer sig åt. Liten variation är normalt; stor variation betyder oftast att testuppsättningen eller programvaruvägen påverkar mätningen.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Nominell DPI',
          description: 'Värdet som visas i musprogramvaran eller tryckt på produktsidan. Användbart som utgångspunkt, men inte bevis på verklig rörelseutgång.',
          points: ['Lätt att läsa', 'Kan dölja firmwareskalning', 'Kan variera per profil'],
        },
        {
          title: 'Uppmätt DPI',
          description: 'Värdet beräknat från fysisk förflyttning och fångad pekarförflyttning. Bäst för att matcha en mus mot en annan.',
          highlight: true,
          points: ['Praktisk och repeterbar', 'Känslig för handprecision', 'Visar verkligt inställningsbeteende'],
        },
        {
          title: 'Känslighet i spel',
          description: 'Den slutgiltiga kamera- eller markörresponsen efter att spelet multiplicerar musinmatningen med sitt eget känslighetsvärde.',
          points: ['Vad du faktiskt känner', 'Spelspecifik', 'Inte en sensormätning'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Avvägningar för webbläsarbaserad DPI mätning',
      items: [
        { pro: 'Ingen drivrutinsinstallation behövs', con: 'Webbläsaren ser bearbetad pekarförflyttning, inte den elektriska sensorsignalen' },
        { pro: 'Bra för att snabbt jämföra möss och profiler', con: 'Accelerationsinställningar kan förvränga resultatet om de lämnas aktiverade' },
        { pro: 'Fungerar med vanliga fysiska referenser', con: 'Handinriktning och skrivbordsmärken påverkar repeterbarheten' },
      ],
    },
    { type: 'title', text: 'Förbereda Windows, macOS och musprogramvara', level: 3 },
    {
      type: 'paragraph',
      html: 'Innan du använder en DPI-mätare, gör insignalvägen så neutral som möjligt. På Windows, stäng av Förbättrad pekarprecision om du vill ha råbeteende. I tillverkarprogramvara, inaktivera vinkelanpassning, acceleration, rippelkontroll, utjämning eller ytspecifika hjälpmedel om du inte avsiktligt vill mäta dem. På macOS är pekaracceleration en del av den normala markörvägen, så värdet bör behandlas som ett praktiskt systemresultat snarare än ett råsensorresultat.',
    },
    {
      type: 'table',
      headers: ['Inställning', 'Rekommenderat för rå DPI', 'Anledning'],
      rows: [
        ['Pekaracceleration', 'Av', 'Acceleration ändrar rörelseutgång beroende på hastighet'],
        ['Musprogramvarans DPI-steg', 'Fast enstaka steg', 'Förhindrar oavsiktliga profiländringar under testning'],
        ['Vinkelanpassning', 'Av', 'Kan modifiera diagonal rörelse och maskera naturlig sensorutgång'],
        ['Operativsystemets skalning', 'Lämna normalt, verktyget korrigerar med devicePixelRatio', 'Analysatorn neutraliserar webbläsarzoom och skärmpixelförhållande i sin beräkning'],
        ['Spelöverlägg eller makron', 'Av', 'Extra programvara kan fånga upp inmatning och göra passeringar inkonsekventa'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:target',
      title: 'Matcha två möss',
      html: 'Mät den gamla musen tre gånger, notera medelvärdet och justera sedan den nya musens DPI-steg tills dess uppmätta värde ligger nära. Detta är ofta mer användbart än att kopiera numret från en tillverkares app till en annan eftersom verklig sensorutgång kan skilja sig.',
    },
    { type: 'title', text: 'Välja rätt fysisk referens', level: 3 },
    {
      type: 'paragraph',
      html: 'Gränssnittet innehåller korta referenser för hög DPI och längre referenser för lägre DPI. Använd 5 eller 10 mm när din pekare korsar skärmen med liten handrörelse. Använd 1 tum, 50 mm eller 85.6 mm kortbredd när musen är konfigurerad närmare vanliga skrivbords- eller taktiska skyttespelsvärden.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '25.4', label: 'millimeter i en tum' },
        { value: '85.6', label: 'millimeter i en vanlig kreditkortsbredd' },
        { value: '3+', label: 'upprepade passeringar rekommenderas innan du litar på en profil' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'DPI', definition: 'Punkter per tum, används vanligtvis för att beskriva pekarförflyttning som produceras av en tums musförflyttning.' },
        { term: 'CPI', definition: 'Räkningar per tum, en sensororienterad term som ofta är mer tekniskt korrekt för möss.' },
        { term: 'Acceleration', definition: 'En inställning eller kurva som ändrar pekarutgång beroende på rörelsehastighet.' },
        { term: 'devicePixelRatio', definition: 'Webbläsarens förhållande mellan CSS-pixlar och fysiska skärmpixlar, används här för att normalisera zoom- och skärmskalningseffekter.' },
        { term: 'Vinkelanpassning', definition: 'Firmware- eller programvarukorrigering som rätar ut rörelse, ibland användbart för ritning men ogillat av många tävlingsspelare.' },
      ],
    },
    { type: 'title', text: 'Läsa av accelerationsindikatorn', level: 3 },
    {
      type: 'paragraph',
      html: 'Accelerationsindikatorn är inte ett laboratoriebevis för operativsystemets kurva. Det är en praktisk varning baserad på variation i rörelsehastighet under den fångade passeringen. Om långsamma och snabba passeringar ger mycket olika DPI-värden kan acceleration, utjämning, ytbeteende eller inkonsekvent handrörelse vara inblandat. En bra råinställning bör ge liknande uppmätt DPI över flera passeringar när det fysiska avståndet är detsamma.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'När resultatet hoppar omkring',
      html: 'Om en passering säger 780 DPI och nästa säger 950 DPI med samma avstånd, skyll inte omedelbart på musen. Kontrollera accelerationsinställningar, öka testavståndet, håll musbanan horisontell och se till att pekaren inte träffar en skärmkant under passeringen.',
    },
    {
      type: 'summary',
      title: 'Checklista för tillförlitlig DPI testning',
      items: [
        'Använd en uppmätt fysisk referens, helst 100 mm eller längre.',
        'Rör dig horisontellt till höger och stanna exakt vid märket.',
        'Inaktivera acceleration för råprofiljämförelser.',
        'Kör minst tre passeringar och jämför spridningen.',
        'Använd uppmätt DPI för att matcha möss, inte bara annonserade DPI-etiketter.',
      ],
    },
    {
      type: 'message',
      title: 'Integritetsnotering',
      html: 'Detta musaccelerationstest och DPI-beräkning körs lokalt i webbläsaren. Verktyget behöver inte drivrutinsåtkomst, enhetens serienummer eller uppladdade inmatningsloggar.',
    },
  ],
  ui: {
    badge: 'Riktigt DPI labb',
    referenceLabel: 'Referens',
    referenceValue: '5 mm',
    ultraDpiPreset: '5 mm',
    highDpiPreset: '10 mm',
    balancedPreset: '50 mm',
    inchPreset: '1 in',
    cardPreset: 'Kort',
    lineStart: 'Start',
    holdButton: 'Håll och förflytta det valda avståndet',
    holdHint: 'Använd en riktig linjal eller kort på skrivbordet. Stanna inte för att stapeln fylls.',
    progressLabel: 'Insignal',
    activeHint: 'Spårar rörelse',
    dpiLabel: 'Uppmätt DPI',
    pixelsLabel: 'Korrigerad rörelse',
    distanceReadout: 'Fysiskt avstånd',
    ratioLabel: 'Pixelförhållande',
    initialDpiValue: '0',
    initialPixelsValue: '0 px',
    initialRatioValue: '0 px/in',
    initialSamplesValue: '0',
    initialAccelerationValue: '-',
    pixelUnit: 'px',
    pixelsPerInchUnit: 'px/in',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    statusReady: 'Redo att fånga',
    statusTracking: 'Spårar rörelse...',
    statusDone: 'Mätning klar',
    reset: 'Återställ',
    accelerationTitle: 'Accelerationssignal',
    accelerationHint: 'Upprepa i långsam och snabb hastighet för att jämföra konsekvens.',
    accelerationLow: 'stabil',
    accelerationMedium: 'variabel',
    accelerationHigh: 'hög avdrift',
    sampleCount: 'Prover',
  },
};
