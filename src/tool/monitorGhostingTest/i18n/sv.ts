import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MonitorGhostingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-ghosting-test-svenska';
const title = 'Monitor Ghosting Test';
const description =
  'Testa monitor-ghosting, rorelseoskärpa, overdrive-spar och pixelresponsbeteende med rorliga staplar, text och helskarmsrorelsemonster.';

const faqData = [
  {
    question: 'Vad ar monitor-ghosting?',
    answer:
      'Monitor-ghosting ar ett synligt spar som foljer rorliga objekt nar pixlar inte kan overga tillrackligt snabbt. Det ar vanligt pa langsamma LCD-paneler, daligt installda overdrive-lagen och skarmar som kor under sin optimala uppdateringsfrekvens.',
  },
  {
    question: 'Kan detta test mata exakt svarstid?',
    answer:
      'Ett webblasartest kan inte ersatta labbutrustning som en pursuit-kamera eller fotodiod, men det kan avsloja synliga rorelseartefakter, jamfora monitorinstallningar och hjalpa dig att valja den minst suddiga overdrive-laget.',
  },
  {
    question: 'Varfor skapar overdrive ibland ljusa spar?',
    answer:
      'Overdrive pressar pixlarna hardare for att fa overgangar snabbare. Om det overskrider maltonen kan du se invers ghosting: en ljus eller fargad halo bakom rorliga objekt.',
  },
  {
    question: 'Bor jag testa pa mork eller ljus bakgrund?',
    answer:
      'Bada. Vissa paneler suddar ut mork-till-gra overgangar mer an ljus-till-mork overgangar, sa att andra bakgrunden avslojar artefakter som ett enda monster kan dolja.',
  },
];

const howToData = [
  {
    name: 'Stall in rorelsehastigheten',
    text: 'Borja nara standardhastigheten och oka sedan tills sparen blir latt att inspektera utan att tappa bort objektet.',
  },
  {
    name: 'Andra sparstyrkan',
    text: 'Anvand sparremeringen for att gora uthalligheten lattare att se nar du jamfor monitorinstallningar.',
  },
  {
    name: 'Testa flera bakgrunder',
    text: 'Vaxla mellan mork, ljus och rutnatsbakgrund for att avsloja svart suddighet, invers ghosting och overdrive-halos.',
  },
  {
    name: 'Jamfor overdrive-installningar',
    text: 'Oppna din monitors OSD och testa lagen Av, Normal, Snabb och Extrem. Valj laget med klarast rorelse och minst halo.',
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

export const content: ToolLocaleContent<MonitorGhostingTestUI> = {
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
      text: 'Monitor Ghosting Test: Kontrollera Rorelseoskärpa och Pixelrespons',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Monitor-ghosting uppstar nar rorliga objekt lamnar ett synligt spar efter sig. Det kan fa spel att kannas suddiga, gora rullande text svarare att lasa och fa en hoghastighetsmonitor att se samre ut an forvantat. Detta monitor-ghostingtest ger dig rorliga staplar, text och hogkontrastmonster sa att du kan jamfora overdrive-lagen, uppdateringsfrekvenser, bakgrunder och rorelsehastigheter utan att installera programvara.',
    },
    {
      type: 'paragraph',
      html: 'Testet ar utformat for praktisk inspektion. Det gor inte ansprak pa laboratorieklassade gra-till-gra svarstider, men det hjalper till att besvara fragan som de flesta anvandare faktiskt har: <strong>vilken monitorinstallning ser renast ut for mina ogon pa denna skarm?</strong>',
    },
    {
      type: 'title',
      text: 'Hur Ghosting Ser Ut',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'En mork skugga som foljer det rorliga objektet, ofta kallad svart suddighet',
        'En blek eller fargad halo bakom objektet, ofta orsakad av overdriven overdrive',
        'Ett langt genomskinligt spar som gor kanterna mjuka',
        'Flera svaga kopior av objektet, sarskilt pa skarmar med langsamma pixelrespons',
        'Ojämn klarhet mellan mork, ljus och rutnatsbakgrund',
      ],
    },
    {
      type: 'title',
      text: 'Ghosting, Rorelseoskärpa och Invers Ghosting',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Artefakt', 'Vad du ser', 'Vanlig orsak'],
      rows: [
        ['Ghosting', 'En morkare eller blekt kopia foljer objektet', 'Pixelresponsen ar for langsamt for rorelsehastigheten'],
        ['Rorelseoskärpa', 'Hela det rorliga objektet ser mjukt ut', 'Sample-and-hold-oskarpa, lag uppdateringsfrekvens eller ogonsparoskarpa'],
        ['Invers ghosting', 'Ljus halo eller fargade overslagsspar', 'Overdrive-installningen ar for aggressiv'],
        ['Svart suddighet', 'Morka scener lamnar tunga skuggor', 'VA-panelers morka overgangar ar langsamma'],
        ['Stammande', 'Rorelsen hoppar istallet for att flyta', 'Frame pacing, lag FPS eller webblasar-/systembelastning'],
      ],
    },
    {
      type: 'title',
      text: 'Ett Praktiskt Diagnostiskt Arbetsflode',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Borja med din monitor inställd pa sin ursprungliga upplosning och hogsta stabila uppdateringsfrekvens. Om du har en 144Hz-, 165Hz-, 240Hz- eller 360Hz-monitor, bekrafta att operativsystemet faktiskt anvander det laget innan du bedomer rorelseklarheten. Oppna testet i helskarm, valj klarhetsstaplarna som mal och titta pa den bakre kanten av det rorliga objektet. Den bakre kanten ar dar spoksparen, morka suddigheter och ljusa overdrive-halos ar lattast att jamfora.',
    },
    {
      type: 'list',
      items: [
        'Anvand mork bakgrund for att avsloja svart suddighet och langsamma morka overgangar',
        'Anvand ljus bakgrund for att avsloja fargade overdrive-halos',
        'Anvand rutnatsbakgrund for att inspektera kantklarhet mot hogkontrastreferenslinjer',
        'Anvand textmalet nar ditt verkliga problem ar suddig rullning eller rorelsestext som ar svar att lasa',
        'Anvand helskärm innan du bedomer en monitor, eftersom webblasarram och skalning kan distrahera fran rorelseartefakter',
        'Oka hastigheten forst efter att du bekvamt kan folja objektet',
        'Jamfor en monitorinstallning i taget sa att du vet vad som har andrats',
      ],
    },
    {
      type: 'title',
      text: 'Valja den Basta Overdrive-Installningen for Din Monitor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De flesta gamingmonitorer innehaller en overdrive-installning som kallas Av, Normal, Snabb, Snabbare, Extrem, Svarstid eller Trace Free. Det snabbaste alternativet ar inte alltid bast. En mattlig installning ger ofta den basta balansen: mindre oskarpa an Av, men farre halos an Extrem.',
    },
    {
      type: 'table',
      headers: ['Overdrive-lage', 'Forvantat resultat', 'Rekommendation'],
      rows: [
        ['Av', 'Minst overslag, men mer oskarpa', 'Anvandbar baslinje for jamforelse'],
        ['Normal', 'Mattlig oskarpereduktion', 'Ofta bast for dagligt bruk'],
        ['Snabb', 'Skarpare rorelse med viss risk for halo', 'Bra om sparen forblir rena'],
        ['Extrem', 'Lagsta pastaende svarstiden, hogst overslagsrisk', 'Undvik om ljusa inversa spar uppstar'],
        ['Adaptiv/Variabel', 'Beteendet andras med uppdateringsfrekvensen', 'Testa igen vid det FPS-omrade du faktiskt anvander'],
      ],
    },
    {
      type: 'title',
      text: 'Vad som Bor Andras Nar Testet Ser Daligt Ut',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Vad du ser', 'Trolig orsak', 'Vad du kan prova'],
      rows: [
        ['Langt morkt spar bakom malet', 'Langsamma morka pixelovergangar eller svag overdrive', 'Prova ett starkare overdrive-lage, testa igen pa mork och rutnatsbakgrund'],
        ['Ljushalo eller fargad kontur bakom malet', 'Overdrive-overslag eller invers ghosting', 'Sank overdrive ett steg och jamfor vid din faktiska uppdateringsfrekvens'],
        ['Rorelsen ser hackig ut istallet for suddig', 'Frame pacing, webblasarbelastning eller frekvensfel', 'Stang tunga appar, aktivera helskarm, bekrafta OS uppdateringsfrekvens'],
        ['Text blir olasbar vid rorelse', 'Sample-and-hold-oskarpa, lag uppdateringsfrekvens eller langsamma respons', 'Oka uppdateringsfrekvensen, testa textmonster, jamfor overdrive-lagen'],
        ['Artefakter andras nar FPS andras', 'VRR eller adaptivt overdrive-beteende', 'Testa igen vid det FPS-omrade du faktiskt spelar eller arbetar i'],
      ],
    },
    {
      type: 'title',
      text: 'Varfor Uppdateringsfrekvensen Ar Viktig',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hogre uppdateringsfrekvenser minskar tiden varje bildruta forblir synlig, vilket kan gora rorelse klarare. Men enbart uppdateringsfrekvens eliminerar inte ghosting. En 240Hz-monitor med langsamma pixelovergangar kan fortfarande sudda, medan en val avstamd 144Hz-panel kan se renare ut an en daligt avstamd snabbare panel.',
    },
    {
      type: 'table',
      headers: ['Uppdateringsfrekvens', 'Bildrutetid', 'Vad du kan forvanta dig'],
      rows: [
        ['60Hz', '16,7 ms', 'Latt att se sample-and-hold-oskarpa och langsammare rorelse'],
        ['120Hz', '8,3 ms', 'Mycket mjukare, men pixelrespons ar fortfarande viktig'],
        ['144Hz', '6,9 ms', 'Vanlig gaming-baslinje for rorelseklarhet'],
        ['240Hz', '4,2 ms', 'Mycket mjukt om responsavstamningen ar bra'],
        ['360Hz', '2,8 ms', 'Kravande: dalig overdrive-avstamning blir uppenbar'],
      ],
    },
    {
      type: 'title',
      text: 'VRR, Gaming och Verklighetstestning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Variabel uppdateringsfrekvens kan forandra hur en monitor beter sig eftersom vissa skarmar anvander olika overdrive-avstamning vid olika uppdateringsfrekvenser. Om ditt problem bara uppstar i spel, testa inte bara vid maximal skrivbordsuppdateringsfrekvens. Testa igen vid det FPS-omrade dar du faktiskt spelar, sarskilt runt 60 FPS, 90 FPS, 120 FPS och eventuella begransade bildfrekvenser du anvander.',
    },
    {
      type: 'list',
      items: [
        'Om ghosting ar varre vid lag FPS kan monitorn ha svag variabel overdrive-avstamning',
        'Om halos bara uppstar vid hoga uppdateringsfrekvenser kan overdrive-laget vara for aggressivt',
        'Om rorelsen stammar medan sparet forblir kort ar problemet troligen frame pacing snarare an pixelrespons',
        'Om helskarm ser annorlunda ut an fonsterlage, kontrollera webblasarskalning, operativsystemsskalning och kompositbeteende',
      ],
    },
    {
      type: 'title',
      text: 'Felsokning av Daliga Resultat',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bekrafta att din skarmkabel stoder mal-uppdateringsfrekvensen',
        'Inaktivera rorelseutjamning, Black Frame Insertion eller MPRT-lagen medan du jamfor normal overdrive',
        'Testa igen efter att ha stallt monitorn pa sin ursprungliga upplosning',
        'Anvand helskarm eller minska webblasarzoom om rorelsen verkar inkonsekvent',
        'Stang tunga bakgrundsappar om animeringen stammar',
        'Testa samma monster efter att ha andrat GPU-kontrollpanelens uppdateringsfrekvensinstallningar',
        'Prova en annan kabel eller port om monitorn inte kan na sin annonserade uppdateringsfrekvens',
        'Testa igen med VRR pa och av nar ghosting andras mellan skrivbord och spel',
      ],
    },
    {
      type: 'title',
      text: 'Begransningar med ett Online Ghosting Test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ett webblasarbaserat ghosting-test beror pa webblasaranimeringstid, GPU-belastning, operativsystemsammansattning och din skarmkonfiguration. Det ar utmarkt for visuell jamforelse, men exakta svarstidsmatningar kraver specialiserad utrustning som pursuit-kameror, fotodioder eller oscilloskopbaserade metoder. Anvand detta test for att valja installningar och upptacka uppenbara artefakter, inte for att certifiera tillverkares pastaenden om svarstider.',
    },
  ],
  ui: {
    badge: 'Rorelseklarhet',
    speedLabel: 'Rorelsehastighet',
    pixelsPerSecondUnit: 'px/s',
    pixelUnit: 'px',
    millisecondUnit: 'ms',
    trailLabel: 'Sparstyrka',
    backgroundLabel: 'Bakgrund',
    backgroundDark: 'Mork',
    backgroundLight: 'Ljus',
    backgroundGrid: 'Rutnat',
    patternLabel: 'Testmal',
    patternBars: 'Klarhetsstaplar',
    patternText: 'Textblock',
    patternUfo: 'UFO',
    pursuitLabel: 'Pursuit-guide',
    pursuitOn: 'Pa',
    pursuitOff: 'Av',
    fullscreen: 'Helskarm',
    exitFullscreen: 'Avsluta helskarm',
    pause: 'Paus',
    resume: 'Ateruppta',
    targetText: 'RORELSE',
    estimatedBlur: 'uppskattad oskarpa',
    frameStep: 'Bildsteg',
    persistence: 'Uthallighet',
    sampleCount: 'Sparprover',
    instructions: 'Titta pa den bakre kanten av det rorliga malet medan du andrar hastighet, sparstyrka, bakgrund, helskarmslage och monitors overdrive-installningar.',
    reset: 'Aterstall',
  },
};
