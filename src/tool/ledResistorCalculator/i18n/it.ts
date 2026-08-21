import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedResistorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-resistenza-led';
const title = 'Calcolatore di resistenza per LED';
const description = 'Calcola la resistenza in serie di un LED da alimentazione, tensione diretta e corrente. Ti dà il valore E12 o E24 più vicino e una potenza con margine.';

const faqData = [
  { question: 'Che resistenza serve a un LED rosso su un pin Arduino da 5 V?', answer: 'Un LED rosso da 5 mm tipico, a 2,0 V e 20 mA su 5 V, chiede 150 ohm e dissipa circa 60 mW. Basta un film metallo da 125 mW o 250 mW. Nel cassetto c\'è spesso 220 ohm: il LED emette un po\' meno luce e resta più al sicuro se la tensione diretta è più bassa del solito.' },
  { question: 'Come si calcola la resistenza di un LED?', answer: 'Sottrai la tensione diretta dall\'alimentazione e dividi per la corrente in ampere. Per un LED rosso a 2 V e 20 mA su 5 V, la resistenza esatta è (5 - 2) / 0,02 = 150 ohm.' },
  { question: 'Quale tensione diretta devo usare?', answer: 'Quella tipica del datasheet alla corrente che vuoi. I colori di questo strumento sono lotti comuni, non il tuo LED. Punti di partenza: circa 1,3 V infrarosso, 2,0 V rosso, 2,2 V giallo o verde, 3,2 V blu o bianco.' },
  { question: 'Perché compare un valore E12 o E24 e non gli ohm esatti?', answer: 'Le resistenze si vendono in serie di valori preferiti. Tra due valori E12 c\'è circa il 20 per cento, tra due E24 circa il 10. Il calcolatore prende il più vicino e, in parità, quello più alto per non sovralimentare il LED.' },
  { question: 'Più LED in parallelo possono condividere una resistenza?', answer: 'No. Quello con la tensione diretta più bassa si prende quasi tutta la corrente e può bruciare. Mettili in serie su una resistenza, oppure dai a ogni ramo parallelo la sua.' },
  { question: 'Quando una resistenza in serie non basta?', answer: 'Lascia stare una sola resistenza su emettitori da 1 W, strisce LED, lunghe catene auto e qualsiasi carico che voglia corrente stabile quando cala la tensione. Serve un driver a corrente costante. La resistenza limita un LED spia su un\'alimentazione rigida, non è una sorgente di corrente.' },
];

const howToData = [
  { name: 'Scegli il colore del LED', text: 'Tocca il diodo che assomiglia al pezzo sul banco. Carica una tensione diretta tipica e 20 mA di corrente spia.' },
  { name: 'Scegli l\'alimentazione', text: 'Arduino 5 V o micro 3,3 V per i pin logici, 9 V, 12 V o 24 V per i pannelli.' },
  { name: 'Leggi il pezzo sulla scheda', text: 'La resistenza mostra il valore da comprare, la potenza e le bande di colore. Apri il datasheet solo se il tuo LED è diverso.' },
  { name: 'Controlla la polarità prima di saldare', text: 'La corrente entra dall\'anodo ed esce dal catodo verso massa. Conferma il datasheet se la caduta è sotto 1 V o la resistenza si scalda.' },
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
  inLanguage: 'it',
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
    { type: 'title', text: 'Calcolatore di resistenza in serie per LED', level: 2 },
    { type: 'paragraph', html: 'Un LED discreto è un diodo governato in corrente. La resistenza in serie fissa quella corrente con la legge di Ohm: <code>R = (Vs - n x Vf) / If</code>. Questo calcolatore la risolve nel browser, incastona un pezzo E12 o E24, dipinge le bande e indica una potenza con un fattore due di margine.' },
    { type: 'title', text: 'Un LED rosso su un pin Arduino da 5 V', level: 3 },
    { type: 'paragraph', html: 'La ricerca vera è "che resistenza per un LED rosso a 5 V". La Vf tipica è 2,0 V a 20 mA, quindi <code>(5 - 2) / 0,02 = 150 ohm</code> e 60 mW nella resistenza. Compra 150 ohm, 125 mW o 250 mW. Un 220 ohm del cassetto funziona: la corrente scende a circa 14 mA e il LED è più fioco, spesso quello che vuoi su un pin di stato.' },
    { type: 'table', headers: ['Colore LED', 'Vf tipica', 'If tipica', 'Resistenza a 5 V'], rows: [['Infrarosso', '1,3 V', '20 mA', '180 ohm'], ['Rosso', '2,0 V', '20 mA', '150 ohm'], ['Giallo o verde', '2,2 V', '20 mA', '150 ohm'], ['Blu o bianco', '3,2 V', '20 mA', '91 ohm'], ['Ultravioletto', '3,4 V', '20 mA', '82 ohm']] },
    { type: 'title', text: 'Valori preferiti E12 ed E24', level: 3 },
    { type: 'paragraph', html: 'Le resistenze seguono la serie di numeri preferiti IEC. E12 è il set 10 per cento comune: 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82 e i loro decenni. E24 riempie il set 5 per cento con 11, 13, 16, 20, 24, 30, 36, 43, 51, 62, 75 e 91. Lo strumento prende il più vicino e, a parità, la resistenza più alta così il LED resta un po\' più fioco invece che più caldo.' },
    { type: 'title', text: 'Quando una resistenza in serie non basta', level: 3 },
    { type: 'paragraph', html: 'Una resistenza non è una sorgente di corrente. Fissa la corrente solo per un\'alimentazione e una Vf scelte. Non condividere una resistenza tra LED in parallelo: la Vf più bassa ruba la corrente. Niente resistenza unica su un emettitore 1 W, una striscia LED o una lunga catena auto 12 V. Serve un driver a corrente costante. I colori sono lotti tipici; la Vf del tuo datasheet alla corrente nominale è il numero che conta.' },
    { type: 'list', items: ['Tieni i LED spia vicino a 10 mA fino a 20 mA, salvo che il datasheet consenta di più.', 'Dai a ogni LED in parallelo la sua resistenza.', 'Se la caduta è sotto 1 V, un piccolo cambio di Vf muove molto la corrente.', 'A 12 V la resistenza chiede spesso 0,5 W, non un film da 125 mW.', 'Conferma anodo, catodo, corrente di picco e potenza prima di saldare.'] },
    { type: 'tip', title: 'La Vf tipica non è il tuo lotto', html: 'I chip rosso, blu e bianco qui sono un punto di partenza per spie da 5 mm. Misura o leggi la curva del produttore se l\'alimentazione è 3,3 V, il LED è di potenza o il pezzo è infrarosso.' },
    { type: 'diagnostic', variant: 'warning', title: 'Una resistenza non è una sorgente di corrente', html: 'Se cala l\'alimentazione, la Vf si sposta con la temperatura o più LED sono in parallelo, la corrente si muove. Usa la scheda come partenza al banco, poi misura.' },
  ],
  ui: {
    colorHeader: 'LED',
    colorInfrared: 'IR',
    colorRed: 'Rosso',
    colorOrange: 'Arancio',
    colorYellow: 'Giallo',
    colorGreen: 'Verde',
    colorBlue: 'Blu',
    colorWhite: 'Bianco',
    colorUv: 'UV',
    supplyHeader: 'Alim.',
    supplyArduino: 'Arduino 5 V',
    supplyMcu: '3,3 V MCU',
    supply9: '9 V',
    supply12: '12 V',
    supply24: '24 V',
    supplyUnit: 'V',
    forwardHeader: 'Vf foglio',
    forwardUnit: 'V',
    currentHeader: 'If foglio',
    currentUnit: 'mA',
    countHeader: 'LED in serie',
    seriesHeader: 'Serie',
    seriesE12: 'E12',
    seriesE24: 'E24',
    showDatasheet: 'Valori datasheet',
    hideDatasheet: 'Nascondi foglio',
    buyLabel: 'Valore',
    powerLabel: 'Potenza',
    seriesShort: 'Serie',
    statusTight: 'Poca tensione rimasta',
    statusHotter: 'La resistenza si scalderà',
    statusOverdriven: 'Corrente alta',
    statusNoHeadroom: 'L\'alim. non accende il LED',
    statusInvalid: 'Controlla i dati',
    supplyLabel: 'Alim.',
    resistorLabel: 'Resistenza',
    ledLabel: 'LED',
    groundLabel: 'GND',
    anodeLabel: 'A+',
    cathodeLabel: 'K-',
    note: 'I colori usano Vf tipica, non il tuo lotto. Non condividere una resistenza su LED in parallelo.',
  },
};
