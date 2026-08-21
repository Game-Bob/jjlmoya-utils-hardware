import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedResistorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'led-voorschakelweerstand-calculator';
const title = 'LED voorschakelweerstand calculator';
const description = 'Bereken de serieweerstand van een LED uit voedingsspanning, doorlaatspanning en stroom. Je krijgt de dichtstbijzijnde E12 of E24 waarde en een veilig vermogen.';

const faqData = [
  { question: 'Welke weerstand hoort bij een rode LED op een 5 V Arduino pin?', answer: 'Een typische rode 5 mm LED van 2,0 V en 20 mA op 5 V vraagt 150 ohm en zet zo\'n 60 mW om in de weerstand. Een metaalfilm van 125 mW of 250 mW is genoeg. In de lade ligt vaak 220 ohm: de LED brandt wat zwakker en blijft veiliger als de doorlaatspanning lager uitvalt dan gebruikelijk.' },
  { question: 'Hoe bereken je de weerstand van een LED?', answer: 'Trek de doorlaatspanning van de voedingsspanning af en deel door de stroom in ampère. Voor een rode LED van 2 V en 20 mA op 5 V is de exacte weerstand (5 - 2) / 0,02 = 150 ohm.' },
  { question: 'Welke doorlaatspanning moet ik gebruiken?', answer: 'De typische doorlaatspanning uit het datasheet bij de stroom die je wilt. De kleurchips hier zijn gewone lots, niet jouw LED. Richtwaarden: ongeveer 1,3 V infrarood, 2,0 V rood, 2,2 V geel of groen, 3,2 V blauw of wit.' },
  { question: 'Waarom een E12 of E24 waarde in plaats van de exacte ohms?', answer: 'Weerstanden worden verkocht in voorkeursreeksen. E12 stappen liggen ongeveer 20 procent uit elkaar, E24 stappen ongeveer 10. De calculator pakt de dichtstbijzijnde voorkeurswaarde en bij gelijkspel de hogere weerstand, zodat de LED niet overstuurd wordt.' },
  { question: 'Mogen parallelle LED\'s één weerstand delen?', answer: 'Nee. De LED met de laagste doorlaatspanning neemt bijna alle stroom en kan doorbranden. Zet LED\'s in serie op één weerstand, of geef elke parallelle tak de zijne.' },
  { question: 'Wanneer is een serieweerstand niet genoeg?', answer: 'Sla een enkele weerstand over bij 1 W emitters, LED strips, lange autoketens en alles wat een stabiele stroom wil als de spanning inzakt. Daar hoort een constante stroombron. Een weerstand begrenst een indicator LED op een stijve voeding, het is geen stroombron.' },
];

const howToData = [
  { name: 'Kies de LED kleur', text: 'Tik de diode aan die lijkt op het deel op de tafel. Dat laadt een typische doorlaatspanning en 20 mA indicatorstroom.' },
  { name: 'Kies de voeding', text: 'Arduino 5 V of 3,3 V MCU voor logica pinnen, 9 V, 12 V of 24 V voor paneelvoedingen.' },
  { name: 'Lees het onderdeel op het bord', text: 'De weerstand toont de koopwaarde, het vermogen en de kleurringen. Open datasheetwaarden alleen als jouw LED afwijkt.' },
  { name: 'Check polariteit voor het solderen', text: 'Stroom gaat de anode in en de kathode uit naar massa. Bevestig het datasheet als de val onder 1 V blijft of de weerstand warm wordt.' },
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
  inLanguage: 'nl',
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
    { type: 'title', text: 'LED serieweerstand in de browser berekenen', level: 2 },
    { type: 'paragraph', html: 'Een discrete LED is een stroomgestuurde diode. De serieweerstand zet die stroom met de wet van Ohm: <code>R = (Vs - n x Vf) / If</code>. Deze calculator lost dat in de browser, klikt op een E12 of E24 deel, schildert de kleurringen en noemt een vermogen met een factor twee reserve.' },
    { type: 'title', text: 'Een rode LED op een Arduino pin van 5 V', level: 3 },
    { type: 'paragraph', html: 'Wat mensen echt zoeken is "welke weerstand voor een rode LED op 5 V". Typische Vf is 2,0 V bij 20 mA, dus <code>(5 - 2) / 0,02 = 150 ohm</code> en 60 mW in de weerstand. Koop 150 ohm, 125 mW of 250 mW. 220 ohm uit de lade werkt ook: de stroom zakt naar ongeveer 14 mA en de LED is zwakker, vaak precies wat je wilt op een statuspin.' },
    { type: 'table', headers: ['LED kleur', 'Typische Vf', 'Typische If', 'Weerstand op 5 V'], rows: [['Infrarood', '1,3 V', '20 mA', '180 ohm'], ['Rood', '2,0 V', '20 mA', '150 ohm'], ['Geel of groen', '2,2 V', '20 mA', '150 ohm'], ['Blauw of wit', '3,2 V', '20 mA', '91 ohm'], ['Ultraviolet', '3,4 V', '20 mA', '82 ohm']] },
    { type: 'title', text: 'E12 en E24 voorkeurswaarden', level: 3 },
    { type: 'paragraph', html: 'Weerstanden volgen de IEC voorkeursgetallen. E12 is de gewone 10 procent set: 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82 en hun decennia. E24 vult de 5 procent set met 11, 13, 16, 20, 24, 30, 36, 43, 51, 62, 75 en 91. Het gereedschap pakt de dichtstbijzijnde waarde en bij gelijkspel de hogere weerstand, zodat de LED eerder zwakker dan heter loopt.' },
    { type: 'title', text: 'Wanneer een serieweerstand niet volstaat', level: 3 },
    { type: 'paragraph', html: 'Een weerstand is geen stroombron. Hij zet stroom alleen voor een gekozen voeding en een gekozen Vf. Deel geen weerstand over parallelle LED\'s: de laagste Vf pakt de stroom. Geen enkele weerstand op een 1 W emitter, een LED strip of een lange 12 V autoketen. Daar hoort een constante stroombron. Kleuren zijn typische lots; de datasheet Vf bij nominale stroom is het getal dat telt.' },
    { type: 'list', items: ['Houd indicator LED\'s nabij 10 mA tot 20 mA, tenzij het datasheet meer toestaat.', 'Geef elke parallelle LED zijn eigen weerstand.', 'Als de val onder 1 V blijft, beweegt een kleine Vf verandering de stroom sterk.', 'Op 12 V vraagt de weerstand vaak 0,5 W, geen 125 mW film.', 'Bevestig anode, kathode, piekstroom en vermogen voor je soldeert.'] },
    { type: 'tip', title: 'Typische Vf is niet jouw lot', html: 'Rode, blauwe en witte chips hier zijn startpunten voor 5 mm indicators. Meet of lees de fabrikantcurve als de voeding 3,3 V is, de LED vermogen heeft of het deel infrarood is.' },
    { type: 'diagnostic', variant: 'warning', title: 'Een weerstand is geen stroombron', html: 'Zakt de voeding, schuift de Vf met temperatuur of liggen meerdere LED\'s parallel, dan beweegt de stroom. Gebruik het bord als start op de tafel, meet daarna.' },
  ],
  ui: {
    colorHeader: 'LED',
    colorInfrared: 'IR',
    colorRed: 'Rood',
    colorOrange: 'Oranje',
    colorYellow: 'Geel',
    colorGreen: 'Groen',
    colorBlue: 'Blauw',
    colorWhite: 'Wit',
    colorUv: 'UV',
    supplyHeader: 'Voeding',
    supplyArduino: 'Arduino 5 V',
    supplyMcu: '3,3 V MCU',
    supply9: '9 V',
    supply12: '12 V',
    supply24: '24 V',
    supplyUnit: 'V',
    forwardHeader: 'Vf blad',
    forwardUnit: 'V',
    currentHeader: 'If blad',
    currentUnit: 'mA',
    countHeader: 'LED\'s in serie',
    seriesHeader: 'Reeks',
    seriesE12: 'E12',
    seriesE24: 'E24',
    showDatasheet: 'Datasheetwaarden',
    hideDatasheet: 'Blad verbergen',
    buyLabel: 'Waarde',
    powerLabel: 'Vermogen',
    seriesShort: 'Reeks',
    statusTight: 'Weinig spanning over',
    statusHotter: 'Weerstand wordt warm',
    statusOverdriven: 'Stroom is hoog',
    statusNoHeadroom: 'Voeding steekt de LED niet aan',
    statusInvalid: 'Controleer de invoer',
    supplyLabel: 'Voeding',
    resistorLabel: 'Weerstand',
    ledLabel: 'LED',
    groundLabel: 'GND',
    anodeLabel: 'A+',
    cathodeLabel: 'K-',
    note: 'Kleurchips gebruiken typische Vf, niet jouw lot. Deel geen weerstand over parallelle LED\'s.',
  },
};
