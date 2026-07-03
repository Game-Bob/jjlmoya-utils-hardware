import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UpsRuntimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-autonomia-ups';
const title = 'Calcolatore di Autonomia UPS';
const description = 'Stima l\'autonomia dell\'UPS, il carico totale protetto, i wattora utilizzabili e la potenza VA consigliata per PC, monitor, router, NAS e hardware da laboratorio domestico.';

const faqData = [
  {
    question: 'Come si calcola l\'autonomia di un UPS?',
    answer: 'Somma la potenza in watt di ogni dispositivo collegato all\'UPS, moltiplica i wattora della batteria per l\'efficienza dell\'inverter, sottrai la riserva che vuoi mantenere, quindi dividi i wattora utilizzabili per i watt di carico. Il risultato in ore può essere moltiplicato per 60 per ottenere i minuti.',
  },
  {
    question: 'Perché l\'autonomia reale differisce dalla stima?',
    answer: 'L\'autonomia cambia con l\'età della batteria, la temperatura, la velocità di scarica, l\'efficienza dell\'inverter, i picchi di carico e la tensione di spegnimento del produttore. Tratta il risultato come una stima di pianificazione, poi verificalo con un test di spegnimento controllato.',
  },
  {
    question: 'Devo dimensionare un UPS in watt o in VA?',
    answer: 'Controlla entrambi. I watt indicano la potenza reale che l\'UPS può erogare, mentre i VA includono il fattore di potenza. L\'UPS deve superare il tuo carico in watt e avere sufficiente margine in VA per l\'apparecchiatura collegata.',
  },
  {
    question: 'Quanto margine UPS dovrei mantenere?',
    answer: 'Un obiettivo pratico è mantenere il carico normale al di sotto del 70-80% circa della potenza nominale in watt dell\'UPS. Questo lascia spazio per picchi di avvio, invecchiamento della batteria e dispositivi futuri.',
  },
  {
    question: 'Posso collegare stampanti o stufe a un UPS?',
    answer: 'Evita stampanti laser, stufe e altri carichi ad alto assorbimento a meno che l\'UPS non sia esplicitamente progettato per supportarli. Possono sovraccaricare l\'inverter e ridurre drasticamente l\'autonomia.',
  },
];

const howToData = [
  {
    name: 'Elenca i dispositivi protetti',
    text: 'Inserisci i dispositivi che devono rimanere accesi durante un blackout, come computer, monitor, router, modem, NAS e switch di rete.',
  },
  {
    name: 'Inserisci un wattaggio realistico',
    text: 'Usa la potenza misurata alla presa a muro quando possibile. Se hai solo la potenza nominale dell\'alimentatore, riducila al carico operativo previsto invece di usare il valore massimo dell\'etichetta.',
  },
  {
    name: 'Imposta la capacità della batteria e le ipotesi',
    text: 'Inserisci i wattora della batteria dell\'UPS, l\'efficienza dell\'inverter, il fattore di potenza e la percentuale di riserva che vuoi mantenere per uno spegnimento controllato.',
  },
  {
    name: 'Leggi l\'autonomia e la raccomandazione VA',
    text: 'Usa i minuti stimati e i VA consigliati come guida all\'acquisto o alla configurazione, poi convalida la configurazione con un\'esercitazione di blackout in sicurezza.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<UpsRuntimeCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calcolatore di Autonomia UPS: Stima il Tempo di Backup della Batteria',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una stima dell\'autonomia UPS risponde a due domande pratiche: per quanto tempo il tuo hardware può rimanere acceso durante un blackout e se l\'UPS è abbastanza grande per il carico collegato. Questo calcolatore combina potenza dei dispositivi, wattora della batteria, efficienza dell\'inverter, fattore di potenza e riserva di spegnimento, in modo che il risultato sia più vicino a una pianificazione reale rispetto a una semplice divisione della capacità della batteria.',
    },
    {
      type: 'title',
      text: 'La Formula dell\'Autonomia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'autonomia stimata in ore è <strong>i wattora utilizzabili della batteria divisi per il carico totale in W</strong>. I wattora utilizzabili non corrispondono alla capacità stampata sulla batteria: vanno corretti per le perdite dell\'inverter e la riserva che vuoi mantenere per uno spegnimento controllato. Ad esempio, una batteria da 432 Wh con un\'efficienza dell\'86% e una riserva del 20% fornisce circa 297 Wh di energia utilizzabile.',
    },
    {
      type: 'table',
      headers: ['Parametro', 'Perché è importante', 'Guida pratica'],
      rows: [
        ['Watt di carico', 'Determina direttamente l\'autonomia', 'Misura con un wattmetro a muro quando possibile, specialmente per PC gaming e NAS.'],
        ['Wh della batteria', 'Definisce la riserva di energia', 'Usa i dati del produttore o la tensione nominale moltiplicata per gli amperora.'],
        ['Efficienza', 'Compensa le perdite dell\'inverter', 'Un intervallo dell\'80-90% è un\'ipotesi di pianificazione ragionevole per molti UPS consumer.'],
        ['Fattore di potenza', 'Converte i watt in VA', 'Usa le specifiche dell\'UPS se note; 0,6-0,8 è comune per i modelli economici e di fascia media.'],
        ['Riserva', 'Mantiene il margine di spegnimento', 'Il 10-25% è sensato per uno spegnimento controllato di PC o server.'],
      ],
    },
    {
      type: 'title',
      text: 'Di Quanta Autonomia Hai Bisogno?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '5-10 minuti: sufficiente per superare brevi cali di tensione o spegnere un desktop in sicurezza.',
        '10-20 minuti: utile per router, modem, NAS e piccoli nodi da laboratorio domestico.',
        '30+ minuti: migliore per la continuità di rete, il lavoro remoto e le sedi con interruzioni frequenti.',
        'Diverse ore: richiede in genere un sistema a batteria più grande, non solo un UPS da scrivania.',
      ],
    },
    {
      type: 'title',
      text: 'Watt vs VA nella Scelta di un UPS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I nomi dei prodotti UPS spesso pubblicizzano i VA, ma la potenza in watt è il limite reale per l\'apparecchiatura. Un UPS da 900 VA potrebbe supportare solo 540 W, mentre un altro modello da 900 VA potrebbe supportare 600 W o più. Controlla entrambi i valori e mantieni il funzionamento normale al di sotto del massimo per evitare allarmi di sovraccarico, riduzione della durata della batteria e mancati trasferimenti durante un blackout.',
    },
    {
      type: 'title',
      text: 'Carichi che Distorcono le Stime di Autonomia',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'I PC gaming possono passare da un basso consumo in idle a un elevato assorbimento della GPU in pochi secondi.',
        'I monitor variano notevolmente in base a luminosità, modalità HDR e dimensioni del pannello.',
        'I NAS assorbono più potenza durante l\'avvio dei dischi e le ricostruzioni.',
        'Stampanti laser, stufe, pompe e compressori sono carichi inadatti per UPS, salvo supporto esplicito.',
        'Le batterie vecchie possono fornire molta meno autonomia di quanto suggerisca la loro capacità originale.',
      ],
    },
    {
      type: 'title',
      text: 'Lista di Controllo per un Test Sicuro',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Carica completamente l\'UPS prima di testare.',
        'Salva il lavoro aperto ed evita di testare durante scritture critiche o aggiornamenti firmware.',
        'Scollega l\'alimentazione di rete, non l\'apparecchiatura, e controlla la percentuale di carico dell\'UPS e la stima della batteria.',
        'Conferma che il tuo PC, NAS o server riceva il segnale di spegnimento prima che la batteria si esaurisca.',
        'Ripeti il test ogni pochi mesi perché le batterie al piombo-acido degli UPS invecchiano rapidamente.',
      ],
    },
  ],
  ui: {
    loadTitle: 'Carico protetto',
    addDevice: 'Aggiungi dispositivo',
    deviceName: 'Dispositivo',
    watts: 'Watt',
    remove: 'Rimuovi dispositivo',
    batteryWh: 'Capacità della batteria (Wh)',
    efficiency: 'Efficienza dell\'inverter',
    powerFactor: 'Fattore di potenza',
    reserve: 'Riserva di spegnimento',
    totalLoad: 'Carico totale',
    runtime: 'Autonomia stimata',
    recommendedUps: 'Dimensione consigliata',
    usableEnergy: 'Energia utilizzabile',
    minutes: 'min',
    hours: 'h',
    wattsUnit: 'W',
    vaUnit: 'VA',
    whUnit: 'Wh',
    assumptionsLabel: 'Ipotesi UPS',
    presetDesktop: 'PC desktop',
    presetMonitor: 'Monitor da 27 pollici',
    presetRouter: 'Router e modem',
    presetNas: 'NAS a due bay',
    percentUnit: '%',
    bandLight: 'finestra di backup confortevole con un UPS consigliato di circa',
    bandBalanced: 'finestra di backup bilanciata con un UPS consigliato di circa',
    bandHeavy: 'finestra di backup ridotta; considera una batteria più grande o riduci il carico di circa',
    summaryPrefix: 'Questa configurazione ha una',
  },
};
