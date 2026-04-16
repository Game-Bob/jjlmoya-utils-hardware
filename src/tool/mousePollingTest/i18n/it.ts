import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestRatonUI } from '../ui';

const slug = 'test-polling-rate-mouse-online';
const title = 'Test Polling Rate Mouse Online';
const description =
  'Controlla gli Hz reali del tuo mouse. Verifica se il tuo mouse da gaming funziona a 1000Hz o più con il nostro strumento professionale.';

const faqData = [
  {
    question: "Cos'è la Polling Rate di un mouse?",
    answer:
      "È la frequenza con cui il mouse comunica la sua posizione al computer, misurata in Hz. Una polling rate di 1000Hz significa che il mouse invia dati ogni 1 millisecondo, garantendo un movimento molto più fluido.",
  },
  {
    question: 'Perché il mio test non raggiunge costantemente i 1000Hz?',
    answer:
      'Il browser può misurare la polling rate solo quando il mouse è in movimento. Se lo muovi lentamente o la tua CPU è molto occupata, la misurazione può variare. Muovi il mouse in cerchi veloci per ottenere il picco massimo reale.',
  },
  {
    question: 'È meglio avere la polling rate più alta possibile?',
    answer:
      'In genere sì per il gaming (1000Hz o più), poiché riduce il lag. Tuttavia, frequenze estremamente alte (4000Hz o 8000Hz) consumano molte risorse della CPU e non tutti i giochi sono ottimizzati per esse.',
  },
  {
    question: "In che modo la frequenza di aggiornamento del monitor influisce sul mouse?",
    answer:
      'Se hai un monitor a 144Hz o 240Hz, una polling rate bassa (125Hz) farà apparire il puntatore a scatti. Per i monitor ad alta frequenza, è essenziale utilizzare almeno 500Hz o 1000Hz.',
  },
];

const howToData = [
  {
    name: 'Prepara l\'area di test',
    text: 'Posiziona il cursore all\'interno della zona di cattura dello strumento.',
  },
  {
    name: 'Muovi il mouse velocemente',
    text: 'Fai movimenti circolari veloci e ampi. Lo strumento calcolerà gli intervalli tra ogni evento di spostamento del mouse inviato dall\'hardware.',
  },
  {
    name: 'Osserva il grafico di stabilità',
    text: 'Controlla se la linea degli Hz è costante o presenta cali improvvisi, che potrebbero indicare interferenze nei mouse wireless o problemi della CPU.',
  },
  {
    name: 'Analizza il tempo di risposta',
    text: 'Controlla il ritardo medio in millisecondi. Un buon mouse da gaming dovrebbe mantenere una latenza media vicina a 1ms.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<TestRatonUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    {
      name: 'Gamepad Polling Rate — Logitech',
      url: 'https://www.logitechg.com/en-us/innovation/delta-zero.html',
    },
    {
      name: 'USB HID Polling Rate — USB Implementers Forum',
      url: 'https://www.usb.org/hid',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Guida definitiva alla Polling Rate', level: 2 },
    {
      type: 'paragraph',
      html: 'Quando muovi fisicamente il mouse sul tappetino, quel movimento analogico deve essere tradotto in segnali digitali comprensibili dal tuo computer. La <strong>Polling Rate</strong> è la frequenza con cui il mouse "comunica" la sua posizione al PC. Si misura in Hertz (Hz).',
    },
    { type: 'title', text: 'Livelli di Polling Rate e loro utilizzi', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>125 Hz</strong> — Il mouse comunica ogni 8 millisecondi. Va bene per l\'ufficio ma appare a scatti sui monitor a 144Hz. <strong>1000 Hz</strong> — Lo standard d\'oro per il gaming: comunica ogni 1 ms. Movimento fluido senza ritardi percettibili. <strong>8000 Hz</strong> — Tecnologia all\'avanguardia (Razer, Logitech). Comunica ogni 0,125 ms ma richiede una CPU potente.',
    },
    { type: 'title', text: 'Perché i miei Hz fluttuano?', level: 3 },
    {
      type: 'paragraph',
      html: 'Completamente normale. La maggior parte dei mouse moderni ha una polling rate dinamica per risparmiare energia. Se muovi il mouse lentamente, invia meno comunicazioni perché ci sono meno nuovi dati. Solo i movimenti veloci e continui portano il sensore al suo picco massimo reale.',
    },
    { type: 'title', text: 'Polling Rate vs DPI: La grande confusione', level: 3 },
    {
      type: 'paragraph',
      html: 'Il <strong>DPI (Dots Per Inch)</strong> è la sensibilità: quanti pixel muove il cursore per pollice di movimento fisico. La <strong>Hz (Polling Rate)</strong> è la frequenza di aggiornamento: quanto fluidamente e tempestivamente quel movimento viene comunicato. Entrambi i parametri sono indipendenti e complementari.',
    },
  ],
  ui: {
    badge: 'Test Mouse',
    title: 'Controllo Polling Rate',
    description: 'Muovi il mouse in cerchi veloci per misurare gli Hz.',
    labelAvg: 'Media',
    labelPeak: 'Picco',
    placeholder: 'Muovi il mouse qui',
  },
};
