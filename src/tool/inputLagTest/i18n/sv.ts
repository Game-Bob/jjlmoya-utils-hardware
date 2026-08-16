import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'input-lag-system-latens-test';

const title = 'Input Lag & System Latens Test';
const description = 'Online-verktyg for att mata input lag och skarmfordrojning med hog precision.';

const faqData = [
  {
    question: 'Vad ar input lag?',
    answer: 'Det ar tidsfordrojningen mellan en fysisk knapptryckning och den visuella uppdateringen pa skarmen.',
  },
  { question: 'Vilken latenstid ar bra for spel?', answer: 'Under 10 ms ar mycket snabbt. 10 till 20 ms ar snabbt, 20 till 35 ms ar mattligt och hogre varden marks.' },
  { question: 'Hur minskar jag inmatningslatenhet?', answer: 'Kontrollera skarmens frekvens, VSync, VRR och USB polling. Andra sedan en installning och mat igen.' },
  { question: 'Paverkar uppdateringsfrekvensen input lag?', answer: 'Ja. Vid 60 Hz tar en bild 16.67 ms och vid 240 Hz 4.17 ms. Rendering och panelen lagger ocksa till latenhet.' },
  { question: 'Varfor ar jitter viktigt?', answer: 'Jitter visar variationen mellan matningar. Ett nagot hogre men stabilt resultat kan kannas battre an ett lagt med stora toppar.' },
];

const howToData = [
  {
    name: 'Valj lage',
    text: 'Valj Direkt Respons, Tangentbordslatens eller Visuell Reaktion.',
  },
  { name: 'Gor inmatningar', text: 'Klicka i testfältet eller tryck på tangenter för att registrera händelser.' },
  { name: 'Kontrollera statistik', text: 'Las medelvarde, minimum, maximum och jitter efter flera forsok.' },
  { name: 'Mat igen', text: 'Upprepa serien efter varje andring under samma villkor.' },
  { name: 'Forsta granserna', text: 'Anvand resultatet for att jamfora konfigurationer, inte som ett absolut pixeltest.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'System Latens',
  modeInstant: 'Direkt Respons',
  modeKey: 'Tangentbordslatens',
  modeVisual: 'Visuell Reaktion',
  targetClickPrompt: 'Klicka har for att mata input lag',
  targetKeyPrompt: 'Tryck pa valfri tangent for tangentbordslatens',
  targetWaitPrompt: 'Vanta pa gron bakgrund...',
  targetNowPrompt: 'KLICKA NU!',
  labelAvgLatency: 'Genomsnittlig Latens',
  labelMinLatency: 'Minsta Latens',
  labelMaxLatency: 'Maximal Latens',
  labelJitter: 'Jitter (Standardavvikelse)',
  labelFps: 'Aktuell FPS',
  labelFrameTime: 'Bilder-tid',
  labelSamples: 'Prover',
  labelGrade: 'Betyg',
  gradeUltraFast: 'Ultra Snabb (<10ms)',
  gradeFast: 'Snabb (10-20ms)',
  gradeModerate: 'Måttlig (20-35ms)',
  gradeHigh: 'Hög (>35ms)',
  btnReset: 'Aterstall',
  btnCopyReport: 'Kopiera Rapport',
  reportCopied: 'Rapport Kopierad!',
  historyTitle: 'Senaste Matningar',
  pipelineTitle: 'Hardware Pipeline Latens Uppdelning',
  distributionTitle: 'Frekvensfordelning',
  sampleCol: 'Prov',
  typeCol: 'Inmatningstyp',
  latencyCol: 'Uppmatts Latens',
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
      text: 'Matning av Input Lag och Systemlatens',
    },
    {
      type: 'paragraph',
      html: 'Utvardera din inmatningsfordrojning och skarmrespons i realtid.',
    },
    { type: 'stats', items: [
      { value: '< 10 ms', label: 'Esportmal', trend: 'Konkurrensreferens' },
      { value: '1000 Hz', label: 'Vanlig USB polling', trend: 'Inmatningsintervall 1 ms' },
      { value: '240 Hz', label: 'Skarm med hog frekvens', trend: 'Bildintervall 4.16 ms' },
      { value: '16.6 ms', label: 'Intervall vid 60 Hz', trend: 'Bas per bild' },
    ], columns: 4 },
    { type: 'card', title: 'Sa mater webblasaren latenstid', html: 'Testet jamfor pointerdown och keydown med uppdateringar fran requestAnimationFrame. Det uppskattar den lokala tiden mellan att inmatningen upptacks och sidan ritas om.' },
    { type: 'title', text: 'Hur latenhetssignalen gar genom systemet' },
    { type: 'paragraph', html: 'Den totala fordrojningen byggs upp fran enhetens brytare till den synliga pixeln. Genom att dela upp stegen kan du hitta orsaken i enheten, operativsystemet, renderingen eller skarmen.' },
    { type: 'table', headers: ['Komponent', 'Vanligt intervall', 'Vanlig flaskhals', 'Mojlig atgard'], rows: [
      ['Brytare', '0.2 till 5.0 ms', 'Mekaniskt studs', 'Korta debounce'],
      ['USB polling', '0.125 till 8.0 ms', 'Lag frekvens', 'Hoja frekvensen om det gar'],
      ['Systemko', '0.5 till 3.0 ms', 'Bakgrundsjobb', 'Stang onodiga processer'],
      ['Grafikmotor', '4.0 till 20.0 ms', 'CPU begransar bilder', 'Minska renderingslasten'],
      ['GPU ko', '8.0 till 33.0 ms', 'VSync och flera buffertar', 'Jamfor VSync med VRR'],
      ['Skarmbehandling', '1.0 till 15.0 ms', 'Skalning och filter', 'Aktivera spellage'],
    ] },
    { type: 'tip', title: 'Minska GPU koens renderingsvantan', html: 'En fullt belastad GPU kan forbereda flera bilder i forvag. En grans strax under maximum och ett test med Reflex eller Anti Lag kan minska vantetiden.' },
    { type: 'title', text: 'Jamfor olika inmatningsenheter' },
    { type: 'paragraph', html: 'Moss, tangentbord och pekskarmar har olika latenstid beroende pa anslutning, elektronik och skanningsfrekvens. Anvand samma skarm och installningar nar du jamfor.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Gamingmoss', description: 'Tradlos eller tradbunden anslutning med hog frekvens.', highlight: '0.5 till 2 ms', points: ['Polling pa 1000 Hz eller mer', 'Optiska brytare', 'Sensor med snabb behandling'] },
      { title: 'Mekaniska tangentbord', description: 'Tangentmatris med justerbar debounce.', highlight: '1 till 10 ms', points: ['Magnetiska brytare', 'Konfigurerbar matrisavsokning', 'Justerbart aktiveringsavstand'] },
      { title: 'Pekskarmar', description: 'Kapacitiv digitaliserare ovanfor panelen.', highlight: '15 till 45 ms', points: ['Samplingsfrekvens for beroring', 'Skarmkontrollerns behandling', 'Filter mot oavsiktliga tryck'] },
    ] },
    { type: 'title', text: 'Forsta skarmens uppdateringsfrekvens' },
    { type: 'paragraph', html: 'Uppdateringsfrekvensen bestammer minimiintervallet mellan bilder. En skarm pa 60 Hz visar inmatning senare an 240 Hz, men rendering och synkronisering paverkar ocksa resultatet.' },
    { type: 'list', items: ['60 Hz ar 16.67 ms per bild', '120 Hz ar 8.33 ms per bild', '144 Hz ar 6.94 ms per bild', '240 Hz ar 4.17 ms per bild', '360 Hz ar 2.78 ms per bild', '540 Hz ar 1.85 ms per bild'] },
    { type: 'glossary', items: [
      { term: 'Input lag', definition: 'Tiden fran fysisk handling till synligt resultat pa skarmen.' },
      { term: 'Jitter', definition: 'Variation mellan matningar som visar hur stabil tiden ar.' },
      { term: 'VSync', definition: 'Vertikal synkronisering som kan minska tearing men oka vantan.' },
      { term: 'VRR', definition: 'Variabel frekvens som anpassar skarmen till GPU utdata.' },
      { term: 'Pixelsvarstid', definition: 'Tiden som en pixel behover for att byta nyans.' },
    ] },
    { type: 'title', text: 'Fordelar och granser med webblasarmatning' },
    { type: 'paragraph', html: 'Testet jamfor installningar utan oscilloskop eller snabb kamera. Det ser inte direkt alla interna fordrojningar i drivrutin, spel eller panelens optiska utsignal.' },
    { type: 'proscons', title: 'Bedömning av webbmatning', items: [
      { pro: 'Kräver ingen specialutrustning', con: 'Påverkas av webbläsarens händelseförlopp' },
      { pro: 'Jamfor enheter snabbt', con: 'Mater inte pixelsvar direkt' },
      { pro: 'Anvander lokal timer med hog upplosning', con: 'Webblasaren kan minska timerprecisionen' },
      { pro: 'Visar stabiliteten i uppdateringar', con: 'En inaktiv flik kan bli langsammare' },
    ] },
    { type: 'title', text: 'Diagnostisera hog inmatningslatenhet' },
    { type: 'paragraph', html: 'Om medelvardet overstiger 30 ms eller jitter ar stor, upprepa serien med aktivt fonster och kontrollera VSync, grafikacceleration, USB polling och CPU belastning.' },
    { type: 'diagnostic', variant: 'warning', title: 'Diagnosvarning for latenhet', html: 'Ett medel over 35 ms pa en stationar dator kraver kontroll av skarm lage och maskinvaruacceleration. Andra en installning i taget.' },
    { type: 'title', text: 'Sank systemets latenhet steg for steg' },
    { type: 'paragraph', html: 'Justera enhet, skärm och system var för sig. Samla nya mätningar under samma villkor efter varje ändring för att bekräfta en verklig förbättring.' },
    { type: 'summary', title: 'Checklista for latenhetsoptimering', items: ['Valj passande USB polling', 'Aktivera skarmens spellage', 'Stang av onodiga bildfilter', 'Jamfor VSync och VRR', 'Hall bildfrekvensen stabil', 'Stang tunga bakgrundsjobb', 'Mat igen efter varje andring'] },
    { type: 'message', title: 'Basta sattet att jamfora resultat', html: 'Stang bakgrundsappar, hall testfonstret aktivt och samla minst 15 prover. Titta pa median, medelvarde och jitter eftersom ett enskilt resultat kan vara slumpmassigt.' },
  ],
};
