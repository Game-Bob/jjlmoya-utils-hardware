import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'input-lag-systeem-latentie-test';

const title = 'Input Lag & Systeem Latentie Test';
const description = 'Online tool voor het meten van input lag en schermvertraging via hoge precisie timing.';

const faqData = [
  {
    question: 'Wat is input lag?',
    answer: 'Input lag is de vertraging tussen een fysieke handeling en de visuele weergave op het scherm.',
  },
  { question: 'Welke vertraging is goed voor gamen?', answer: 'Onder 10 ms is zeer snel. 10 tot 20 ms is snel, 20 tot 35 ms is gemiddeld en hogere waarden worden merkbaar.' },
  { question: 'Hoe verlaag ik invoervertraging?', answer: 'Controleer schermfrequentie, VSync, VRR en USB polling. Wijzig daarna één instelling en meet opnieuw.' },
  { question: 'Heeft verversingssnelheid invloed op input lag?', answer: 'Ja. Bij 60 Hz duurt een frame 16.67 ms en bij 240 Hz 4.17 ms. Rendering en het paneel voegen ook vertraging toe.' },
  { question: 'Waarom is jitter belangrijk?', answer: 'Jitter toont de variatie tussen metingen. Een iets hoger maar stabiel resultaat kan beter aanvoelen dan een lage gemiddelde waarde met pieken.' },
];

const howToData = [
  {
    name: 'Selecteer modus',
    text: 'Kies Directe Respons, Toetsenbord Latentie of Visuele Reactie.',
  },
  { name: 'Invoer uitvoeren', text: 'Klik in het testvak of druk toetsen in om invoergebeurtenissen te registreren.' },
  { name: 'Statistieken bekijken', text: 'Controleer gemiddelde, minimum, maximum en jitter na meerdere pogingen.' },
  { name: 'Opnieuw meten', text: 'Herhaal de reeks na elke wijziging onder dezelfde omstandigheden.' },
  { name: 'Grenzen begrijpen', text: 'Gebruik het resultaat om configuraties te vergelijken, niet als absolute pixelmeting.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl',
};

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Systeem Latentie',
  modeInstant: 'Directe Respons',
  modeKey: 'Toetsenbord Latentie',
  modeVisual: 'Visuele Reactie',
  targetClickPrompt: 'Klik in dit vak om de invoervertraging te meten',
  targetKeyPrompt: 'Druk op een toets voor toetsenbord latentie',
  targetWaitPrompt: 'Wacht op groen scherm...',
  targetNowPrompt: 'KLIK NU!',
  labelAvgLatency: 'Gemiddelde Latentie',
  labelMinLatency: 'Minimale Latentie',
  labelMaxLatency: 'Maximale Latentie',
  labelJitter: 'Jitter (Standaardafwijking)',
  labelFps: 'Huidige FPS',
  labelFrameTime: 'Frame Tijd',
  labelSamples: 'Metingen',
  labelGrade: 'Beoordeling',
  gradeUltraFast: 'Ultra Snel (<10ms)',
  gradeFast: 'Snel (10-20ms)',
  gradeModerate: 'Gemiddeld (20-35ms)',
  gradeHigh: 'Hoog (>35ms)',
  btnReset: 'Resetten',
  btnCopyReport: 'Rapport Kopiëren',
  reportCopied: 'Rapport Gekopieerd!',
  historyTitle: 'Recente Metingen',
  pipelineTitle: 'Hardware Pipeline Latentie Analyse',
  distributionTitle: 'Frequentieverdeling',
  sampleCol: 'Meting',
  typeCol: 'Invoertype',
  latencyCol: 'Gemeten Latentie',
};

export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: 'Input Lag en Systeem Latentie Meting',
    },
    {
      type: 'paragraph',
      html: 'Meet de reactiesnelheid van je invoerapparaten en scherm in real-time.',
    },
    { type: 'stats', items: [
      { value: '< 10 ms', label: 'Esports doelwaarde', trend: 'Competitieve referentie' },
      { value: '1000 Hz', label: 'Gebruikelijke USB polling', trend: 'Invoerinterval 1 ms' },
      { value: '240 Hz', label: 'Scherm met hoge frequentie', trend: 'Frameinterval 4.16 ms' },
      { value: '16.6 ms', label: 'Interval bij 60 Hz', trend: 'Basis per frame' },
    ], columns: 4 },
    { type: 'card', title: 'Hoe de browser de vertraging meet', html: 'De test vergelijkt pointerdown en keydown met updates van requestAnimationFrame. Zo wordt het lokale tijdsverschil tussen invoerherkenning en het opnieuw tekenen van de pagina geschat.' },
    { type: 'title', text: 'Hoe het latentiesignaal door het systeem loopt' },
    { type: 'paragraph', html: 'De totale vertraging stapelt zich op vanaf de schakelaar van het apparaat tot de zichtbare pixel. Door elke stap apart te bekijken vind je de oorzaak in het apparaat, besturingssysteem, renderproces of scherm.' },
    { type: 'table', headers: ['Onderdeel', 'Gebruikelijk bereik', 'Belangrijk knelpunt', 'Mogelijke verbetering'], rows: [
      ['Schakelaar', '0.2 tot 5.0 ms', 'Mechanische trilling', 'Debounce verkorten'],
      ['USB polling', '0.125 tot 8.0 ms', 'Lage frequentie', 'Frequentie verhogen als dat kan'],
      ['Systeemwachtrij', '0.5 tot 3.0 ms', 'Achtergrondtaken', 'Onnodige processen sluiten'],
      ['Grafische engine', '4.0 tot 20.0 ms', 'Frames beperkt door CPU', 'Renderbelasting verlagen'],
      ['GPU wachtrij', '8.0 tot 33.0 ms', 'VSync en meerdere buffers', 'VSync en VRR vergelijken'],
      ['Schermverwerking', '1.0 tot 15.0 ms', 'Schalen en filters', 'Spelmodus inschakelen'],
    ] },
    { type: 'tip', title: 'Wachtrij van de GPU verkorten', html: 'Een volledig belaste GPU kan meerdere frames vooraf klaarzetten. Een limiet net onder het maximum en een test met Reflex of Anti Lag kunnen de wachttijd verkorten.' },
    { type: 'title', text: 'Invoerapparaten met elkaar vergelijken' },
    { type: 'paragraph', html: 'Muizen, toetsenborden en aanraakschermen hebben verschillende vertragingen door hun verbinding, elektronica en scansnelheid. Gebruik hetzelfde scherm en dezelfde instellingen bij een vergelijking.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Gamingmuizen', description: 'Bekabelde of draadloze verbinding met hoge polling.', highlight: '0.5 tot 2 ms', points: ['Polling van 1000 Hz of hoger', 'Optische schakelaars', 'Sensor met snelle verwerking'] },
      { title: 'Mechanische toetsenborden', description: 'Toetsmatrix met instelbare debounce.', highlight: '1 tot 10 ms', points: ['Magnetische schakelaars', 'Instelbare matrixscan', 'Regelbare activeringsafstand'] },
      { title: 'Aanraakschermen', description: 'Capacitieve digitizer boven het paneel.', highlight: '15 tot 45 ms', points: ['Aanraakfrequentie', 'Verwerking door de schermcontroller', 'Filters tegen ongewenste aanrakingen'] },
    ] },
    { type: 'title', text: 'Vertraging door de verversingssnelheid begrijpen' },
    { type: 'paragraph', html: 'De verversingssnelheid bepaalt het minimale interval tussen twee beelden. Een scherm van 60 Hz toont invoer later dan een scherm van 240 Hz, maar rendering en synchronisatie tellen ook mee.' },
    { type: 'list', items: ['60 Hz is 16.67 ms per frame', '120 Hz is 8.33 ms per frame', '144 Hz is 6.94 ms per frame', '240 Hz is 4.17 ms per frame', '360 Hz is 2.78 ms per frame', '540 Hz is 1.85 ms per frame'] },
    { type: 'glossary', items: [
      { term: 'Input lag', definition: 'Tijd tussen een fysieke handeling en het zichtbare resultaat.' },
      { term: 'Jitter', definition: 'Variatie tussen metingen die de stabiliteit van de timing toont.' },
      { term: 'VSync', definition: 'Verticale synchronisatie die tearing kan verminderen maar wachttijd kan toevoegen.' },
      { term: 'VRR', definition: 'Variabele verversing die het scherm aanpast aan de GPU uitvoer.' },
      { term: 'Pixelresponstijd', definition: 'Tijd die een pixel nodig heeft om van tint te veranderen.' },
    ] },
    { type: 'title', text: 'Voordelen en grenzen van meten in de browser' },
    { type: 'paragraph', html: 'De test vergelijkt instellingen zonder oscilloscoop of snelle camera. Hij ziet niet rechtstreeks alle interne vertraging van driver, game of optische paneeluitvoer.' },
    { type: 'proscons', title: 'Beoordeling van webmeting', items: [
      { pro: 'Geen speciale apparatuur nodig', con: 'Afhankelijk van de eventloop van de browser' },
      { pro: 'Randapparatuur snel vergelijken', con: 'Pixelrespons wordt niet direct gemeten' },
      { pro: 'Lokale timer met hoge resolutie', con: 'De browser kan timerprecisie verlagen' },
      { pro: 'Stabiliteit van updates zichtbaar', con: 'Een inactief tabblad kan worden vertraagd' },
    ] },
    { type: 'title', text: 'Hoge invoervertraging onderzoeken' },
    { type: 'paragraph', html: 'Als het gemiddelde boven 30 ms ligt of jitter groot is, herhaal je de reeks met het venster actief en controleer je VSync, grafische versnelling, USB polling en CPU taken.' },
    { type: 'diagnostic', variant: 'warning', title: 'Diagnosemelding voor latentie', html: 'Een gemiddelde boven 35 ms op een desktop vraagt om controle van schermmodus en hardwareversnelling. Wijzig steeds maar één instelling.' },
    { type: 'title', text: 'Systeemlatentie stap voor stap verlagen' },
    { type: 'paragraph', html: 'Pas apparaat, scherm en systeem afzonderlijk aan. Verzamel na elke wijziging nieuwe metingen onder dezelfde omstandigheden om een echte verbetering te bevestigen.' },
    { type: 'summary', title: 'Controlelijst voor latentieoptimalisatie', items: ['Kies passende USB polling', 'Schakel de spelmodus van het scherm in', 'Zet onnodige beeldfilters uit', 'Vergelijk VSync en VRR', 'Houd de framesnelheid stabiel', 'Sluit zware achtergrondtaken', 'Meet opnieuw na elke wijziging'] },
    { type: 'message', title: 'Beste manier om resultaten te vergelijken', html: 'Sluit achtergrondapps, houd het testvenster actief en verzamel minstens 15 metingen. Bekijk mediaan, gemiddelde en jitter samen, want een enkele meting kan toevallig zijn.' },
  ],
};
