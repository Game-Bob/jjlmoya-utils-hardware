import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDividerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-partitore-tensione';
const title = 'Calcolatore partitore di tensione';
const description = 'Calcola la tensione di uscita a vuoto, la corrente, la potenza dissipata o la resistenza inferiore necessaria per ottenere una tensione desiderata.';

const faqData = [
  { question: 'Cosa fa un calcolatore di partitore di tensione?', answer: 'Calcola la tensione di uscita a vuoto di due resistenze in serie. Inserisci la tensione di alimentazione, R1 e R2 per calcolare Vout, oppure inserisci Vout per trovare R2.' },
  { question: 'Come si calcola la tensione di uscita?', answer: 'Si usa la formula Vout = Vs x R2 / (R1 + R2), dove R1 è collegata all\'alimentazione e R2 a massa.' },
  { question: 'Come calcolare la resistenza per una tensione desiderata?', answer: 'Se R1 è nota, la formula è R2 = R1 x Vtarget / (Vs - Vtarget). La tensione desiderata deve essere compresa tra zero e Vs.' },
  { question: 'Quanta corrente assorbe un partitore di tensione?', answer: 'La corrente del partitore è I = Vs / (R1 + R2), assorbita continuamente dalla sorgente.' },
  { question: 'Come verificare la potenza sulle resistenze?', answer: 'La potenza dissipata è P = I² x R. Scegli componenti con potenza nominale adeguata.' },
  { question: 'Posso usare un partitore come alimentatore?', answer: 'In genere no. Un carico collegato a Vout altera la resistenza equivalente. Usa un buffer o un regolatore di tensione.' },
];

const howToData = [
  { name: 'Scegli la modalità di calcolo', text: 'Usa Calcola Vout se conosci entrambe le resistenze. Usa Calcola R2 se conosci l\'alimentazione, R1 e la tensione desiderata.' },
  { name: 'Inserisci alimentazione e R1', text: 'Imposta la tensione di alimentazione in volt e la resistenza superiore R1 in ohm.' },
  { name: 'Inserisci R2 o la tensione desiderata', text: 'In modalità Calcola Vout inserisci R2. In modalità Calcola R2 inserisci la tensione obiettivo.' },
  { name: 'Leggi i risultati', text: 'Consulta tensione di uscita, corrente assorbita e potenza dissipata dalle resistenze.' },
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

export const content: ToolLocaleContent<VoltageDividerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Calcoli e funzionamento del partitore di tensione', level: 2 },
    { type: 'paragraph', html: 'Un partitore di tensione a due resistenze in serie riduce una tensione di ingresso fornendo un valore inferiore sul punto di presa intermedio. Quando la resistenza superiore <code>R1</code> è collegata all\'alimentazione e la resistenza inferiore <code>R2</code> è collegata a massa, la tensione di uscita ideale a vuoto è <code>Vout = Vs x R2 / (R1 + R2)</code>. Questo strumento calcola anche la corrente assorbita e la potenza dissipata in calore da ciascun componente.' },
    { type: 'title', text: 'Calcolare la resistenza per una tensione di uscita desiderata', level: 3 },
    { type: 'paragraph', html: 'Seleziona la modalità Calcola R2 quando conosci la tensione di alimentazione, la resistenza superiore R1 e la tensione desiderata sul nodo intermedio. La formula si trasforma in <code>R2 = R1 x Vtarget / (Vs - Vtarget)</code>. Una tensione obiettivo vicina all\'alimentazione richiede una R2 molto più grande, mentre un valore vicino a zero richiede una R2 più piccola.' },
    { type: 'title', text: 'Analizzare la corrente assorbita e la potenza dissipata', level: 3 },
    { type: 'paragraph', html: 'Il partitore assorbe una corrente continua pari a <code>I = Vs / (R1 + R2)</code>. Ciascuna resistenza dissipa una potenza calcolata come <code>P = I² x R</code>. Verifica sempre entrambi i valori rispetto alla potenza nominale dei componenti scelti, in particolare quando il partitore è collegato a linee di tensione elevate.' },
    { type: 'title', text: 'Effetto del carico e dei circuiti collegati in uscita', level: 3 },
    { type: 'paragraph', html: 'I risultati ottenuti presuppongono che il nodo Vout sia privo di carico. Qualsiasi circuito collegato in uscita risulta in parallelo con R2, riducendo la resistenza equivalente del ramo inferiore e modificando sia la tensione che la corrente. Per segnali o tensioni di riferimento che devono erogare corrente a uno stadio successivo, si raccomanda l\'uso di un buffer con amplificatore operazionale o di un regolatore di tensione dedicato.' },
    { type: 'list', items: ['Mantieni la tensione desiderata strettamente tra zero e la tensione di alimentazione.', 'Utilizza le stesse unità di misura della resistenza sia per R1 che per R2.', 'Verifica la potenza dissipata in ciascuna resistenza separatamente.', 'Ricorda che le tolleranze dei componenti e le variazioni dell\'alimentatore alterano la tensione reale.', 'Considera il risultato come tensione a vuoto finché il carico reale non viene incluso nel modello.'] },
    { type: 'tip', title: 'Il nodo intermedio non è un alimentatore', html: 'Il partitore di tensione è eccellente per creare riferimenti di tensione o attenuare segnali, ma ha un\'impedenza di uscita non nulla. Se il circuito successivo assorbe corrente, inserisci uno stadio separatore.' },
  ],
  ui: {
    modeHeader: 'Modalità di calcolo',
    modePredict: 'Calcola Vout',
    modeTarget: 'Calcola R2',
    inputHeader: 'Parametri del circuito',
    supplyLabel: 'Tensione di alimentazione Vs',
    topLabel: 'Resistenza superiore R1',
    bottomLabel: 'Resistenza inferiore R2',
    targetLabel: 'Tensione desiderata Vout',
    voltageUnit: 'V',
    resistanceUnit: 'Ω',
    resultHeader: 'Flusso di tensione',
    outputLabel: 'Tensione in uscita',
    currentLabel: 'Corrente assorbita',
    totalPowerLabel: 'Potenza totale',
    topPowerLabel: 'Potenza R1',
    bottomPowerLabel: 'Potencia R2',
    ratioLabel: 'dell\'alimentazione',
    statusNominal: 'Calcolo valido',
    statusInvalid: 'Verifica i parametri',
    statusTargetInvalid: 'La tensione desiderata deve essere inferiore a Vs',
    formulaHeader: 'Formula applicata',
    formulaPredict: 'Vout = Vs x R2 / (R1 + R2). Il punto luminoso mostra la tensione calcolata.',
    formulaTarget: 'R2 = R1 x Vtarget / (Vs - Vtarget). Determina il valore di R2 necessario.',
    supplyNode: 'INGRESSO',
    topNode: 'R1',
    tapNode: 'VOUT',
    bottomNode: 'R2',
    groundNode: 'MASSA',
    hint: 'Inserisci R1 e R2 per ottenere Vout.',
    targetHint: 'Scegli una tensione desiderata tra zero e Vs.',
    note: 'Partitore a vuoto. Collegare un carico altera la tensione di uscita.',
  },
};
