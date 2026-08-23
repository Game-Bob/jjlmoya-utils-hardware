import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { OhmLawPowerCalculatorLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calcolatore legge di Ohm e potenza elettrica',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'it',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cosa calcola questa calcolatrice della legge di Ohm?',
      acceptedAnswer: { '@type': 'Answer', text: 'Inserisci due valori positivi a scelta tra tensione, corrente, resistenza o potenza. Lo strumento ricaverà i due valori rimanenti.' },
    },
    {
      '@type': 'Question',
      name: 'Quali unità di misura utilizza il calcolatore?',
      acceptedAnswer: { '@type': 'Answer', text: 'Utilizza volt per la tensione, ampere per la corrente, ohm per la resistenza e watt per la potenza.' },
    },
    {
      '@type': 'Question',
      name: 'Posso usare potenza e resistenza come valori noti?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sì. La calcolatrice usa le formule con radice quadrata per calcolare tensione e corrente.' },
    },
  ],
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Come calcolare i valori elettrici con la legge di Ohm',
  step: [
    { '@type': 'HowToStep', name: 'Scegli due valori noti', text: 'Attiva le due grandezze che conosci già tra tensione, corrente, resistenza e potenza.' },
    { '@type': 'HowToStep', name: 'Inserisci le misurazioni', text: 'Digita valori positivi nei campi attivi.' },
    { '@type': 'HowToStep', name: 'Leggi il risultato', text: 'Lo schema e il display mostrano i due valori calcolati e la formula usata.' },
  ],
};

const seo: SEOSection[] = [
  { type: 'title', text: 'Calcolare tensione corrente resistenza o potenza in un circuito', level: 2 },
  { type: 'paragraph', html: 'Conoscendo due grandezze elettriche in un circuito semplice, hai abbastanza informazioni per ricavare le altre due. Inserisci i dati a disposizione e questo calcolatore della legge di Ohm troverà le grandezze mancanti in volt, ampere, ohm e watt.' },
  { type: 'paragraph', html: 'Ad esempio, inserisci 12 V e 2 A per ottenere 6 Ohm e 24 W. Con 5 V e 10 W otterrai 2 A e 2,5 Ohm. Utile per verificare resistori, stimate correnti dei LED o calcolare il carico di alimentatori USB.' },
  { type: 'title', text: 'Quale formula della legge di Ohm utilizzare', level: 3 },
  { type: 'paragraph', html: 'L equazione corretta dipende dalle due grandezze note. Tutte derivano direttamente dalla legge di Ohm V = I x R e dalla formula della potenza P = V x I.' },
  { type: 'table', headers: ['Dati noti', 'Valori calcolati', 'Formula usata'], rows: [
    ['Tensione e corrente', 'Resistenza e potenza', 'R = V / I e P = V x I'],
    ['Tensione e resistenza', 'Corrente e potenza', 'I = V / R e P = V² / R'],
    ['Tensione e potenza', 'Corrente e resistenza', 'I = P / V e R = V² / P'],
    ['Corrente e resistenza', 'Tensione e potenza', 'V = I x R e P = I² x R'],
    ['Corrente e potenza', 'Tensione e resistenza', 'V = P / I e R = P / I²'],
    ['Resistenza e potenza', 'Tensione e corrente', 'V = √(P x R) e I = √(P / R)'],
  ] },
  { type: 'tip', title: 'Verifica la potenza per scegliere componenti sicuri', html: 'Se la calcolatrice indica 24 W, il componente deve poter dissipare almeno tale potenza. Mantieni un margine di sicurezza e ricorda che componenti come i diodi non sono puramente ohmici.' },
];

export const content: OhmLawPowerCalculatorLocaleContent = {
  slug: 'calcolatore-legge-ohm-potenza',
  title: 'Calcolatore legge di Ohm e potenza elettrica',
  description: 'Un calcolatore della legge di Ohm per trovare tensione, corrente, resistenza e potenza elettrica da due valori noti.',
  ui: {
    instructions: 'Scegli i due valori noti e inseriscili. Il circuito calcolerà la coppia rimanente in unità SI.',
    knownLabel: 'Scegli due valori noti',
    useAsKnownLabel: 'Usa come noto',
    voltageLabel: 'Tensione',
    currentLabel: 'Corrente',
    resistanceLabel: 'Resistenza',
    powerLabel: 'Potenza',
    voltageUnit: 'V',
    currentUnit: 'A',
    resistanceUnit: 'Ohm',
    powerUnit: 'W',
    resultTitle: 'Completa il circuito',
    resultHint: 'Due terminali noti calcolano la coppia mancante.',
    formulaTitle: 'Lettura del circuito',
    formulaHint: 'I terminali illuminati sono noti. Le tracce in rame mostrano le equazioni.',
    statusTitle: 'Stato del calcolo',
    statusEmpty: 'Inserisci due valori positivi per iniziare.',
    statusInvalid: 'Entrambi i valori noti devono essere maggiori di zero.',
    statusReady: 'Calcolo del circuito completato.',
    presetTitle: 'Inizia da un carico reale',
    presetLed: 'Indicatore LED',
    presetUsb: 'Carico USB',
    presetAmplifier: 'Carico amplificatore',
    resetLabel: 'Ripristina',
    orbitCaption: 'Scegli due terminali per chiudere il circuito.',
    knownBadge: 'Noto',
    solvedBadge: 'Calcolato',
    unitVoltage: 'volt',
    unitCurrent: 'ampere',
    unitResistance: 'ohm',
    unitPower: 'watt',
    formulaVoltageCurrent: 'R = V / I e P = V x I',
    formulaVoltageResistance: 'I = V / R e P = V² / R',
    formulaVoltagePower: 'I = P / V e R = V² / P',
    formulaCurrentResistance: 'V = I x R e P = I² x R',
    formulaCurrentPower: 'V = P / I e R = P / I²',
    formulaResistancePower: 'V = √(P x R) e I = √(P / R)',
    seoTitle: 'Calcolatore legge di Ohm',
  },
  seo,
  faqTitle: 'Domande frequenti sulla legge di Ohm',
  faq: [
    { question: 'Conosco tensione e corrente. Cosa ottengo?', answer: 'Ottieni resistenza e potenza. Ad esempio, 12 V e 2 A producono 6 Ohm e 24 W.' },
    { question: 'Posso calcolare la potenza dissipata da una resistenza?', answer: 'Sì. Inserisci tensione e resistenza, oppure corrente e resistenza, per calcolare i watt dissipati.' },
    { question: 'Posso inserire potenza e tensione?', answer: 'Sì. Inserisci entrambi i valori e la calcolatrice ricaverà la corrente (I = P / V) e la resistenza (R = V² / P).' },
    { question: 'La legge di Ohm si applica a tutti i componenti?', answer: 'No. Questo strumento modella componenti ohmici semplici. I diodi hanno una risposta non lineare.' },
  ],
  bibliographyTitle: 'Riferimenti delle formule',
  bibliography,
  howTo: [
    { name: 'Scegli due valori noti', text: 'Attiva le due grandezze che conosci.' },
    { name: 'Inserisci misurazioni positive', text: 'Digita volt, ampere, ohm o watt nei campi attivi.' },
    { name: 'Leggi i risultati', text: 'Consulta lo schema e le formule usate.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
