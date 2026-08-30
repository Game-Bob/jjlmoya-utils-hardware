import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedResistorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'led-forkopplingsmotstand-kalkylator';
const title = 'Kalkylator för LED förkopplingsmotstånd';
const description = 'Hitta seriemotståndet för en lysdiod från matningsspänning, framspänning och ström, välj sedan närmaste E12 eller E24 och en säker effekt.';

const faqData = [
  { question: 'Vilket motstånd behöver jag för en röd lysdiod på en 5 V Arduino pinne?', answer: 'En typisk röd 5 mm lysdiod vid 2,0 V och 20 mA på 5 V behöver 150 ohm och ungefär 60 mW i motståndet. En 125 mW eller 250 mW metallfilm räcker. Många lådor använder 220 ohm istället: lysdioden går lite svagare och hålls säkrare om framspänningen är lägre än typiskt.' },
  { question: 'Hur beräknar jag motståndet för en lysdiod?', answer: 'Dra av lysdiodens framspänning från matningsspänningen och dela med strömmen i ampere. För en röd lysdiod vid 2 V och 20 mA på 5 V är det exakta motståndet (5 - 2) / 0,02 = 150 ohm.' },
  { question: 'Vilken framspänning ska jag använda?', answer: 'Använd typisk framspänning från databladet vid den ström du vill ha. Färgchips här är typiska lot, inte din specifika lysdiod. Startpunkter är ungefär 1,3 V för infrarött, 2,0 V för rött, 2,2 V för gult eller grönt och 3,2 V för blått eller vitt.' },
  { question: 'Varför visar verktyget ett E12 eller E24 värde istället för exakta ohm?', answer: 'Hålmonterade och chipmotstånd säljs i preferensserier. E12 steg är ungefär 20 procent isär och E24 steg ungefär 10 procent isär. Kalkylatorn tar närmaste preferensvärde och, vid lika, det högre motståndet så att lysdioden inte överdrivs.' },
  { question: 'Kan parallella lysdioder dela ett motstånd?', answer: 'Nej. Lysdioden med lägst framspänning tar mest ström och kan brinna. Sätt lysdioder i serie på ett motstånd, eller ge varje parallell gren sitt eget motstånd.' },
  { question: 'När räcker inte ett seriemotstånd?', answer: 'Hoppa över ett ensamt motstånd för 1 W klass, LED listor, långa fordonskedjor och allt som behöver stabil ström när spänningen sjunker. De lasterna behöver en konstantströmsdrivare. Ett motstånd är en strömgräns för en indikator på en styv skena, inte en strömkälla.' },
];

const howToData = [
  { name: 'Välj lysdiodens färg', text: 'Tryck på dioden som matchar delen på bänken. Det laddar en typisk framspänning och 20 mA indikatorström.' },
  { name: 'Välj skenan', text: 'Använd Arduino 5 V eller 3,3 V MCU för logikpinnar, eller 9 V, 12 V eller 24 V för panelförsörjning.' },
  { name: 'Läs delen på kortet', text: 'Motståndet visar värdet att köpa, effekten att använda och färgringarna. Öppna databladvärden bara om din lysdiod skiljer sig.' },
  { name: 'Kontrollera polariteten före lödning', text: 'Ström går in i anoden och ut ur katoden mot jord. Bekräfta databladet om fallet är under 1 V eller motståndet går varmt.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<LedResistorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Kalkylator för LED seriemotstånd', level: 2 },
    { type: 'paragraph', html: 'En diskret lysdiod är en strömstyrd diod. Seriemotståndet sätter den strömmen från Ohms lag: <code>R = (Vs - n x Vf) / If</code>. Kalkylatorn löser det i webbläsaren, fäster ett E12 eller E24 värde, målar färgringarna och namnger en effekt med faktor två i marginal.' },
    { type: 'title', text: 'En röd lysdiod på en Arduino 5 V pinne', level: 3 },
    { type: 'paragraph', html: 'Sökningen folk faktiskt skriver är "vilket motstånd för en röd lysdiod på 5 V". Typisk Vf är 2,0 V vid 20 mA, så <code>(5 - 2) / 0,02 = 150 ohm</code> och 60 mW i motståndet. Köp 150 ohm, 125 mW eller 250 mW. En 220 ohm del från lådan fungerar också: strömmen sjunker till ungefär 14 mA och lysdioden blir svagare, ofta det du vill på en statuspinne.' },
    { type: 'table', headers: ['LED färg', 'Typisk Vf', 'Typisk If', 'Motstånd på 5 V'], rows: [['Infraröd', '1,3 V', '20 mA', '180 ohm'], ['Röd', '2,0 V', '20 mA', '150 ohm'], ['Gul eller grön', '2,2 V', '20 mA', '150 ohm'], ['Blå eller vit', '3,2 V', '20 mA', '91 ohm'], ['Ultraviolett', '3,4 V', '20 mA', '82 ohm']] },
    { type: 'title', text: 'E12 och E24 preferensvärden', level: 3 },
    { type: 'paragraph', html: 'Motstånd tillverkas enligt IEC preferenstal. E12 är den vanliga 10 procent serien: 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82 och deras dekader. E24 fyller 5 procent serien med extra steg som 11, 13, 16, 20, 24, 30, 36, 43, 51, 62, 75 och 91. Verktyget tar närmaste värde och, när två är lika nära, det högre motståndet så att lysdioden går lite svagare i stället för varmare.' },
    { type: 'title', text: 'När ett seriemotstånd inte räcker', level: 3 },
    { type: 'paragraph', html: 'Ett motstånd är inte en strömkälla. Det sätter bara ström för en vald matning och en vald Vf. Dela inte ett motstånd över parallella lysdioder: lägst Vf tar strömmen. Använd inte ett ensamt motstånd på en 1 W emitter, en LED lista eller en lång 12 V fordonskedja. De behöver en konstantströmsdrivare. Färgförval är typiska lot; din lysdiods datablad Vf vid märkström är talet som räknas.' },
    { type: 'list', items: ['Håll indikatorlysdioder nära 10 mA till 20 mA om inte databladet tillåter mer.', 'Ge varje parallell lysdiod sitt eget motstånd.', 'Om fallet är under 1 V ger en liten Vf ändring en stor strömändring.', 'På 12 V behöver motståndet ofta 0,5 W, inte en 125 mW film.', 'Bekräfta anod, katod, toppström och effekt innan du löder.'] },
    { type: 'tip', title: 'Typisk Vf är inte ditt lot', html: 'Röda, blå och vita chips här är startpunkter för 5 mm indikatorer. Mät eller läs tillverkarkurvan om skenan är 3,3 V, lysdioden är högeffekt eller delen är infraröd.' },
    { type: 'diagnostic', variant: 'warning', title: 'Ett motstånd är inte en strömkälla', html: 'Om matningen sjunker, lysdiodens Vf skiftar med temperatur, eller flera lysdioder parallellkopplas, rör sig strömmen. Använd kortet som bänkstart, mät sedan.' },
  ],
  ui: {
    colorHeader: 'LED',
    colorInfrared: 'IR',
    colorRed: 'Röd',
    colorOrange: 'Orange',
    colorYellow: 'Gul',
    colorGreen: 'Grön',
    colorBlue: 'Blå',
    colorWhite: 'Vit',
    colorUv: 'UV',
    supplyHeader: 'Skena',
    supplyArduino: 'Arduino 5 V',
    supplyMcu: '3,3 V MCU',
    supply9: '9 V',
    supply12: '12 V',
    supply24: '24 V',
    supplyUnit: 'V',
    forwardHeader: 'Datablad Vf',
    forwardUnit: 'V',
    currentHeader: 'Datablad If',
    currentUnit: 'mA',
    countHeader: 'LED i serie',
    seriesHeader: 'Preferensserie',
    seriesE12: 'E12',
    seriesE24: 'E24',
    showDatasheet: 'Databladvärden',
    hideDatasheet: 'Dölj datablad',
    buyLabel: 'Del',
    powerLabel: 'Effekt',
    seriesShort: 'Serie',
    statusTight: 'Lite spänning kvar',
    statusHotter: 'Motståndet blir varmt',
    statusOverdriven: 'Hög ström',
    statusNoHeadroom: 'Matningen kan inte tända lysdioden',
    statusInvalid: 'Kontrollera inmatningen',
    supplyLabel: 'Matning',
    resistorLabel: 'Motstånd',
    ledLabel: 'LED',
    groundLabel: 'GND',
    anodeLabel: 'A+',
    cathodeLabel: 'K-',
    note: 'Färgchips använder typisk Vf, inte ditt lot. Dela inte ett motstånd över parallella lysdioder.',
  },
};
