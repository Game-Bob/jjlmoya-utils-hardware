import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileSensorTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mobilsensor-test';
const title = 'Mobilsensor Test';
const description = 'Kör ett online gyroskop-, accelerometer-, rörelsesensor- och vattenpasstest på din telefon för att kontrollera lutning, rotation, drift och sensorkalibreringsproblem.';

const faqData = [
  {
    question: 'Hur kan jag testa min telefons gyroskop online?',
    answer: 'Öppna testet på telefonen, tryck på Starta kalibrering, tillåt rörelseåtkomst om du uppmanas och rotera och luta sedan enheten. Ett fungerande gyroskop och orienteringssensor bör uppdatera alpha, beta och gamma smidigt utan att frysa eller hoppa vilt.',
  },
  {
    question: 'Kan jag testa accelerometern med ett vattenpass?',
    answer: 'Ja. Lägg telefonen på ett plant bord efter att ha startat testet. Bubblan bör lägga sig nära mitten och accelerationsvärdena ska förbli stabila. Om bubblan driver kraftigt medan telefonen är stilla kan accelerometern behöva kalibreras eller så kan skalet, bordet eller enhetens hårdvara störa.',
  },
  {
    question: 'Varför frågar iPhone om rörelsetillstånd?',
    answer: 'Safari på iPhone och iPad kräver en tryckning innan webbplatser kan komma åt rörelse- och orienteringssensorer. Om tillstånd nekas kan testet inte läsa gyroskop- eller accelerometerdata förrän du tillåter rörelseåtkomst.',
  },
  {
    question: 'Kan detta fixa eller kalibrera en trasig kompass?',
    answer: 'Inget webbläsarverktyg kan reparera hårdvara eller tvinga fram systemets kompasskalibrering. Detta test hjälper dig att identifiera symptom: fastlåsta värden, brusig rörelse, drift, saknad behörighet eller en webbläsare som inte exponerar sensorerna.',
  },
];

const howToData = [
  { name: 'Öppna testet på din telefon', text: 'Använd samma iPhone, iPad, Android-telefon eller surfplatta som du vill diagnostisera. Stationära webbläsare har vanligtvis inga rörelsesensorer att exponera.' },
  { name: 'Tillåt rörelseåtkomst', text: 'Tryck på Starta kalibrering och acceptera rörelse- eller orienteringstillståndsförfrågan om din webbläsare visar en.' },
  { name: 'Testa lutning och rotation', text: 'Luta telefonen framåt, rulla den åt vänster och höger, rotera den sedan plant på ett bord. Se efter mjuka förändringar av alpha, beta, gamma och acceleration.' },
  { name: 'Kontrollera drift på en plan yta', text: 'Låt telefonen ligga stilla i flera sekunder. En frisk sensor bör stabilisera sig istället för att ständigt vandra, spika eller frysa.' },
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

export const content: ToolLocaleContent<MobileSensorTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Online gyroskop- och accelerometertest för telefoner', level: 2 },
    {
      type: 'paragraph',
      html: 'Använd detta mobilsensortest när skärmrotation känns fel, spel eller AR-appar driver, en vattenpassapp verkar felaktig, navigering pekar åt fel håll eller telefonen inte reagerar korrekt på lutning. Testet visar live beteendet hos gyroskop, accelerometer, rotation och vattenpass så att du kan skilja ett webbläsarbehörighetsproblem från ett verkligt sensor- eller kalibreringsproblem.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Huvudsaklig sökavsikt', value: 'testa gyroskop online' },
        { label: 'Kontrollerar också', value: 'accelerometerdrift' },
        { label: 'Bästa enhet', value: 'telefon eller surfplatta' },
      ],
    },
    { type: 'title', text: 'Vad varje sensorvärde berättar för dig', level: 3 },
    {
      type: 'table',
      headers: ['Mätvärde', 'Användbart för', 'Varningstecken'],
      rows: [
        ['Alpha', 'Kontroll av rotation runt den vertikala axeln, användbart för kompassliknande rörelse och kursändringar.', 'Ändras inte vid platt rotation av telefonen, hoppar i stora steg eller fryser på noll.'],
        ['Beta', 'Kontroll av lutning framåt-bakåt för skärmrotation, spel, kameravågning och AR-kontroller.', 'Rör sig i fel riktning, fastnar på ett värde eller fortsätter driva medan telefonen är stilla.'],
        ['Gamma', 'Kontroll av vänster-höger-rullning för liggande rotation, racingspel, vattenpassappar och stabilisatorer.', 'En sida reagerar annorlunda, värdena är brusiga eller bubblan centrerar aldrig på ett plant bord.'],
        ['Acceleration X/Y/Z', 'Kontroll av accelerometersvar, skakdetektion, gravitationsriktning och rörelsestabilitet.', 'Stora spikar i stillastående, ingen respons på rörelse eller instabila värden efter att ha tagit bort skalet.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Symptom som detta test hjälper till att diagnostisera',
      html: '<p>Använd livevärdena för att undersöka automatisk rotation som inte fungerar, ett gyroskop som känns fördröjt, accelerometerdrift, kompasskalibreringsvarningar, AR-spårning som glider iväg, kameravågningsfel, rörelsekontroller som drar åt ett håll eller en telefon som bara rapporterar rörelse i inbyggda appar men inte i webbläsaren.</p>',
    },
    { type: 'title', text: 'Gyroskop vs accelerometer vs kompass', level: 3 },
    {
      type: 'comparative',
      items: [
        { title: 'Gyroskop', description: 'Mäter rotationshastighet. Viktigt för AR, spel, kamerastabilisering, rörelsekontroller och mjuka orienteringsändringar.' },
        { title: 'Accelerometer', description: 'Mäter acceleration och gravitationsriktning. Driver lutning, skakdetektion, stegdetektion och digitalt vattenpassbeteende.' },
        { title: 'Kompass / magnetometer', description: 'Hjälper till att uppskatta kursen, men kan störas av magneter, metallföremål, bilhållare, skal, högtalare, bärbara datorer och närliggande elektronik.' },
      ],
    },
    { type: 'title', text: 'Hur man testar sensorkalibrering korrekt', level: 3 },
    {
      type: 'list',
      items: [
        'Ta bort magnetiska skal, MagSafe-plånböcker, metallhållare, kontrollerklämmor och tillbehör före testning.',
        'Lägg telefonen på ett stadigt plant bord och vänta flera sekunder innan du bedömer drift.',
        'Rotera telefonen långsamt genom varje axel istället för att skaka den omedelbart.',
        'Jämför Safari eller Chrome med en inbyggd sensor- eller kompassapp om webbläsaren inte visar någon data.',
        'Starta om enheten och upprepa testet om värdena är fastlåsta i flera appar.',
      ],
    },
    {
      type: 'tip',
      title: 'iPhone och Android behörighetsnot',
      html: 'På iPhone och iPad kan Safari fråga efter rörelse- och orienteringstillstånd efter en tryckning. På Android exponerar Chrome vanligtvis rörelsesensorer mer direkt, men sekretessinställningar, webbläsarflaggor, batterisparlägen och inbäddade webviews kan fortfarande blockera eller minska sensordata.',
    },
    {
      type: 'table',
      headers: ['Problem', 'Trolig orsak', 'Nästa steg'],
      rows: [
        ['Inga värden ändras', 'Tillstånd nekat, webbläsare som inte stöds, stationär enhet eller begränsad webview.', 'Öppna på själva telefonen, använd Safari eller Chrome, tillåt rörelseåtkomst och ladda om sidan.'],
        ['Bubblan driver på ett bord', 'Kalibreringsproblem, ojämn yta, skalstörning eller accelerometerbrus.', 'Ta bort skalet, använd en känd plan yta, starta om och jämför med en inbyggd vattenpassapp.'],
        ['Kompassriktningen är fel', 'Magnetisk störning eller systemkompasskalibrering.', 'Flytta bort från metall/elektronik och använd operativsystemets kompasskalibreringsflöde.'],
        ['Värden hoppar eller spikar', 'Sensorbrus, skadad hårdvara, aggressiv webbläsarbegränsning eller plötslig fysisk rörelse.', 'Testa stillastående, stäng tunga appar och jämför över en annan webbläsare eller inbyggd app.'],
      ],
    },
    {
      type: 'summary',
      title: 'Vad detta test är bra för',
      items: [
        'Testa en telefons gyroskop online utan att installera en app.',
        'Kontrollera accelerometerdrift med ett live vattenpass.',
        'Ta reda på om rörelsekontroller misslyckas på grund av hårdvara, kalibrering, behörighet eller webbläsarstöd.',
        'Förbered en telefon för AR, spel, kameravågning, navigering eller felsökning av skärmrotation.',
      ],
    },
  ],
  ui: {
    startButton: 'Starta kalibrering',
    permissionHint: 'Tryck en gång för att låsa upp rörelsesensorer',
    privacyBadge: 'Lokal sensordata',
    privacyCopy: 'Orienterings- och rörelsevärden stannar inom denna webbläsarsession.',
    orientationPanel: 'Orientering',
    motionPanel: 'Rörelse',
    bubblePanel: 'Digitalt vattenpass',
    statusReady: 'Redo för sensortillstånd',
    statusWaiting: 'Väntar på webbläsartillstånd',
    statusDenied: 'Sensoråtkomst nekad eller otillgänglig',
    statusUnsupported: 'Rörelsesensorer exponeras inte av denna webbläsare',
    statusActive: 'Live sensorström aktiv',
    steadyLabel: 'Stadig',
    movingLabel: 'Rör sig',
    shakingLabel: 'Skakar',
    alphaLabel: 'Alpha',
    betaLabel: 'Beta',
    gammaLabel: 'Gamma',
    accelXLabel: 'X',
    accelYLabel: 'Y',
    accelZLabel: 'Z',
    rotationAlphaLabel: 'Rot A',
    rotationBetaLabel: 'Rot B',
    rotationGammaLabel: 'Rot G',
    levelOffsetLabel: 'Vattenpassavvikelse',
    motionMagnitudeLabel: 'Rörelseomfattning',
    cubeLabel: '3D-enhetsorienteringskub',
    bubbleLabel: 'Vattenpassindikator',
    calibrationLabel: 'Live grader',
  },
};
