import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestTecladoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-tastiera-online';
const title = 'Test Tastiera Online e Rilevatore Ghosting';
const description = 'Controlla se la tua tastiera soffre di Ghosting o Key Jamming. Visualizzatore tasti in tempo reale e contatore N-Key Rollover.';

const faqData = [
  {
    question: "Cos'è il Ghosting sulla tastiera?",
    answer: "È un difetto che si verifica quando premi più tasti contemporaneamente e il computer non ne registra alcuni. È dovuto a limitazioni nella matrice elettrica interna della tastiera che non può elaborare determinate combinazioni.",
  },
  {
    question: 'Cosa significa N-Key Rollover (NKRO)?',
    answer: 'NKRO significa che la tastiera può registrare tanti tasti quanti ne puoi premere simultaneamente senza errori. È una funzione premium, comune nelle tastiere meccaniche e da gaming di fascia alta.',
  },
  {
    question: 'Perché la mia tastiera fallisce quando premo 3 tasti insieme?',
    answer: 'La maggior parte delle tastiere da ufficio economiche ha un rollover di 2 o 3 tasti. Questo è sufficiente per scrivere ma insufficiente per il gaming intensivo o scorciatoie complesse.',
  },
  {
    question: 'Come posso riparare un tasto che non risponde?',
    answer: "Se il test non rileva la pressione del tasto, potrebbe trattarsi di sporco sotto l'interruttore, un guasto al contatto elettrico o un cavo danneggiato. Prova a pulire la tastiera con aria compressa prima di arrenderti.",
  },
];

const howToData = [
  {
    name: 'Metti a fuoco il visualizzatore',
    text: 'Clicca in un punto qualsiasi della pagina per assicurarti che il browser abbia il focus e possa catturare la pressione dei tasti hardware.',
  },
  {
    name: 'Esegui il test di risposta',
    text: 'Premi ogni tasto della tastiera uno ad uno. Il tasto corrispondente sullo schermo si illuminerà di verde se funziona correttamente.',
  },
  {
    name: 'Controlla il ghosting',
    text: 'Premi i tasti comuni da gaming (W, A, S, D, Spazio, Shift) tutti insieme per vedere se si bloccano o si illuminano tutti.',
  },
  {
    name: 'Verifica il rollover massimo',
    text: 'Prova a premere quanti più tasti puoi con entrambe le mani e guarda il contatore della pressione simultanea massima dei tasti.',
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

export const content: ToolLocaleContent<TestTecladoUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Test Tastiera Online: Rileva Ghosting e N-Key Rollover',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uno strumento interattivo per la diagnostica della tastiera. Controlla se la tua periferica soffre di ghosting, jamming o limitazioni del rollover. Chiamata visiva con supporto per tutti i tipi di tastiera.',
    },
    {
      type: 'title',
      text: "Cos'è il Ghosting?",
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il ghosting si verifica quando premi una specifica combinazione di tasti e la tastiera registra una pressione fantasma che non hai fatto. Ciò è dovuto a limitazioni nella matrice del circuito interno.',
    },
    {
      type: 'title',
      text: 'N-Key Rollover e Rollover Massimo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>NKRO (N-Key Rollover):</strong> Consente di registrare tutti i tasti premuti simultaneamente. <strong>6KRO:</strong> Vecchio limite standard USB. <strong>2-3KRO:</strong> Comune sulle tastiere economiche, sufficiente per scrivere.',
    },
    {
      type: 'title',
      text: 'Tastiere Meccaniche vs Membrana',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le tastiere meccaniche hanno interruttori individuali con diodi isolati, eliminando il ghosting. Le tastiere a membrana condividono tracce conduttrici, causando errori nelle combinazioni simultanee.',
    },
  ],
  ui: {
    badge: 'Test Input',
    title: 'Test Tastiera e Rilevatore Ghosting',
    description: 'Verifica l\'N-Key Rollover e rileva i tasti difettosi.',
    simultaneousLabel: 'Simultanei',
    eventLogLabel: 'Registro Eventi',
    resetBtn: 'Reset',
  },
};
