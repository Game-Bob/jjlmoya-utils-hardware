import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedResistorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'led-vorwiderstand-rechner';
const title = 'LED Vorwiderstand Rechner';
const description = 'Berechne den Vorwiderstand einer LED aus Betriebsspannung, Flussspannung und Strom. Du bekommst den nächsten E12 oder E24 Wert und eine sichere Verlustleistung.';

const faqData = [
  { question: 'Welchen Vorwiderstand braucht eine rote LED an einem 5 V Arduino Pin?', answer: 'Eine typische rote 5 mm LED mit 2,0 V und 20 mA an 5 V braucht 150 Ohm und setzt etwa 60 mW im Widerstand um. Ein Metallfilm mit 125 mW oder 250 mW reicht. In der Schublade liegt oft 220 Ohm: die LED leuchtet etwas dunkler und bleibt sicherer, wenn die Flussspannung niedriger ausfällt als üblich.' },
  { question: 'Wie berechnet man den Vorwiderstand einer LED?', answer: 'Zieh die Flussspannung von der Betriebsspannung ab und teile durch den Strom in Ampere. Für eine rote LED mit 2 V und 20 mA an 5 V gilt (5 - 2) / 0,02 = 150 Ohm.' },
  { question: 'Welche Flussspannung soll ich nehmen?', answer: 'Die typische Flussspannung aus dem Datenblatt beim gewünschten Strom. Die Farbchips hier sind übliche Lose, nicht deine konkrete LED. Richtwerte: etwa 1,3 V infrarot, 2,0 V rot, 2,2 V gelb oder grün, 3,2 V blau oder weiß.' },
  { question: 'Warum zeigt der Rechner E12 oder E24 statt des exakten Ohmwerts?', answer: 'Widerstände werden in Vorzugszahlenreihen verkauft. E12 Schritte liegen etwa 20 Prozent auseinander, E24 Schritte etwa 10 Prozent. Der Rechner nimmt den nächsten Vorzugswert und bei Gleichstand den höheren Widerstand, damit die LED nicht übersteuert wird.' },
  { question: 'Dürfen parallele LEDs einen Widerstand teilen?', answer: 'Nein. Die LED mit der niedrigsten Flussspannung nimmt fast den ganzen Strom und kann durchbrennen. Schalte LEDs in Reihe an einem Widerstand oder gib jedem parallelen Zweig seinen eigenen.' },
  { question: 'Wann reicht ein Vorwiderstand nicht?', answer: 'Lass den einzelnen Widerstand bei 1 W Emittern, LED Streifen, langen Kfz Ketten und allem, was bei absackender Spannung einen stabilen Strom braucht. Dort gehört eine Konstantstromquelle hin. Ein Widerstand begrenzt eine Anzeige LED an einem steifen Netzteil, er ist keine Stromquelle.' },
];

const howToData = [
  { name: 'LED Farbe wählen', text: 'Tippe die Diode an, die zum Teil auf dem Tisch passt. Es lädt eine typische Flussspannung und 20 mA Anzeigestrom.' },
  { name: 'Versorgung wählen', text: 'Arduino 5 V oder 3,3 V MCU für Logikpins, 9 V, 12 V oder 24 V für Tafelversorgungen.' },
  { name: 'Bauteil auf der Platine lesen', text: 'Der Widerstand zeigt den Kaufwert, die Verlustleistung und die Farbringe. Öffne die Datenblattwerte nur, wenn deine LED abweicht.' },
  { name: 'Polarität vor dem Löten prüfen', text: 'Strom geht in die Anode und an der Kathode nach Masse raus. Schau ins Datenblatt, wenn weniger als 1 V abfällt oder der Widerstand warm wird.' },
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
  inLanguage: 'de',
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
    { type: 'title', text: 'LED Vorwiderstand im Browser berechnen', level: 2 },
    { type: 'paragraph', html: 'Eine diskrete LED ist eine stromgesteuerte Diode. Der Vorwiderstand setzt diesen Strom nach dem Ohmschen Gesetz: <code>R = (Vs - n x Vf) / If</code>. Der Rechner löst das im Browser, rastet auf ein E12 oder E24 Teil ein, malt die Farbringe und nennt eine Verlustleistung mit Faktor zwei Reserve.' },
    { type: 'title', text: 'Rote LED an einem Arduino Pin mit 5 V', level: 3 },
    { type: 'paragraph', html: 'Gesucht wird "welcher Widerstand für eine rote LED an 5 V". Typische Vf ist 2,0 V bei 20 mA, also <code>(5 - 2) / 0,02 = 150 Ohm</code> und 60 mW im Widerstand. Kauf 150 Ohm, 125 mW oder 250 mW. 220 Ohm aus der Schublade geht auch: der Strom fällt auf etwa 14 mA, die LED wird dunkler, oft genau richtig für einen Statuspin.' },
    { type: 'table', headers: ['LED Farbe', 'Typische Vf', 'Typischer If', 'Widerstand an 5 V'], rows: [['Infrarot', '1,3 V', '20 mA', '180 Ohm'], ['Rot', '2,0 V', '20 mA', '150 Ohm'], ['Gelb oder grün', '2,2 V', '20 mA', '150 Ohm'], ['Blau oder weiß', '3,2 V', '20 mA', '91 Ohm'], ['Ultraviolett', '3,4 V', '20 mA', '82 Ohm']] },
    { type: 'title', text: 'E12 und E24 Vorzugswerte', level: 3 },
    { type: 'paragraph', html: 'Widerstände folgen der IEC Vorzugszahlenreihe. E12 ist der übliche 10 Prozent Satz: 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82 und ihre Dekaden. E24 füllt den 5 Prozent Satz mit 11, 13, 16, 20, 24, 30, 36, 43, 51, 62, 75 und 91. Das Werkzeug nimmt den nächsten Wert und bei Gleichstand den höheren Widerstand, damit die LED eher dunkler als heißer läuft.' },
    { type: 'title', text: 'Wann ein Vorwiderstand nicht reicht', level: 3 },
    { type: 'paragraph', html: 'Ein Widerstand ist keine Stromquelle. Er setzt den Strom nur für eine gewählte Versorgung und eine gewählte Vf. Teile keinen Widerstand auf parallele LEDs: die niedrigste Vf rafft den Strom. Kein einzelner Widerstand an einem 1 W Emitter, LED Streifen oder einer langen 12 V Kfz Kette. Dafür braucht es eine Konstantstromquelle. Farbvorgaben sind typische Lose; die Datenblatt Vf bei Nennstrom ist die Zahl, die zählt.' },
    { type: 'list', items: ['Halte Anzeige LEDs nahe 10 mA bis 20 mA, außer das Datenblatt erlaubt mehr.', 'Gib jeder parallelen LED ihren eigenen Widerstand.', 'Fällt weniger als 1 V ab, bewegt eine kleine Vf Änderung den Strom stark.', 'An 12 V braucht der Widerstand oft 0,5 W, kein 125 mW Film.', 'Prüfe Anode, Kathode, Spitzenstrom und Leistung vor dem Löten.'] },
    { type: 'tip', title: 'Typische Vf ist nicht dein Los', html: 'Rote, blaue und weiße Chips hier sind Startwerte für 5 mm Anzeigen. Miss oder lies die Herstellerkurve, wenn die Versorgung 3,3 V ist, die LED Leistung hat oder das Teil infrarot ist.' },
    { type: 'diagnostic', variant: 'warning', title: 'Ein Widerstand ist keine Stromquelle', html: 'Sackt die Versorgung ab, wandert die Vf mit der Temperatur oder liegen mehrere LEDs parallel, bewegt sich der Strom. Nimm die Platine als Start auf dem Tisch, dann messen.' },
  ],
  ui: {
    colorHeader: 'LED',
    colorInfrared: 'IR',
    colorRed: 'Rot',
    colorOrange: 'Orange',
    colorYellow: 'Gelb',
    colorGreen: 'Grün',
    colorBlue: 'Blau',
    colorWhite: 'Weiß',
    colorUv: 'UV',
    supplyHeader: 'Netz',
    supplyArduino: 'Arduino 5 V',
    supplyMcu: '3,3 V MCU',
    supply9: '9 V',
    supply12: '12 V',
    supply24: '24 V',
    supplyUnit: 'V',
    forwardHeader: 'Vf Blatt',
    forwardUnit: 'V',
    currentHeader: 'If Blatt',
    currentUnit: 'mA',
    countHeader: 'LEDs in Reihe',
    seriesHeader: 'Reihe',
    seriesE12: 'E12',
    seriesE24: 'E24',
    showDatasheet: 'Datenblattwerte',
    hideDatasheet: 'Blatt ausblenden',
    buyLabel: 'Wert',
    powerLabel: 'Leistung',
    seriesShort: 'Reihe',
    statusTight: 'Wenig Spannung übrig',
    statusHotter: 'Widerstand wird warm',
    statusOverdriven: 'Strom ist hoch',
    statusNoHeadroom: 'Versorgung zündet die LED nicht',
    statusInvalid: 'Eingaben prüfen',
    supplyLabel: 'Netz',
    resistorLabel: 'Widerstand',
    ledLabel: 'LED',
    groundLabel: 'GND',
    anodeLabel: 'A+',
    cathodeLabel: 'K-',
    note: 'Farbchips nutzen typische Vf, nicht dein Los. Teile keinen Widerstand auf parallele LEDs.',
  },
};
