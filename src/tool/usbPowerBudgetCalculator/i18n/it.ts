import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UsbPowerBudgetCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-budget-alimentazione-usb';
const title = 'Calcolatore del Budget di Alimentazione USB';
const description = 'Verifica se una porta USB, caricatore, hub, cavo o profilo USB-C PD può alimentare i tuoi dispositivi in sicurezza dopo il margine di riserva e la caduta di tensione del cavo.';

const faqData = [
  {
    question: 'Come faccio a sapere se una porta USB può alimentare il mio dispositivo?',
    answer: 'Confronta il wattaggio totale del dispositivo con il wattaggio della sorgente USB, riserva un margine e stima la caduta di tensione del cavo. Una configurazione può fallire anche quando i watt nominali sembrano alti se il cavo è lungo, sottile o trasporta corrente elevata a 5 volt.',
  },
  {
    question: 'Perché la lunghezza del cavo è importante per l\'alimentazione USB?',
    answer: 'La corrente che scorre attraverso il rame crea una caduta di tensione. I cavi lunghi e i conduttori sottili hanno più resistenza, quindi il dispositivo potrebbe ricevere meno tensione di quella fornita dal caricatore. Questo è particolarmente importante per schede Raspberry Pi, dischi rigidi, strisce LED, dock e hub alimentati via bus.',
  },
  {
    question: 'Quale margine di riserva dovrei usare?',
    answer: 'Usa almeno il 20 percento per l\'elettronica normale, il 30 percento per motori, unità, radio o schede con carichi a raffica, e di più se la qualità dell\'adattatore è sconosciuta o il dispositivo deve funzionare ininterrottamente.',
  },
  {
    question: 'Può sostituire i test di negoziazione USB-C PD?',
    answer: 'No. Il calcolatore verifica il budget elettrico. Non verifica se un caricatore, e-marker del cavo, dispositivo o hub negozia effettivamente un profilo Power Delivery specifico.',
  },
];

const howToData = [
  { name: 'Scegli un profilo sorgente', text: 'Seleziona un profilo USB o USB-C PD comune, oppure modifica tensione e corrente manualmente.' },
  { name: 'Descrivi il cavo', text: 'Inserisci la lunghezza del cavo e il calibro del conduttore. I fili sottili con AWG alto causano più caduta di tensione.' },
  { name: 'Aggiungi il carico', text: 'Inserisci un carico del dispositivo in watt e il numero di dispositivi che condividono la stessa sorgente.' },
  { name: 'Leggi lo stato', text: 'Usa lo stato, la caduta del cavo, la tensione finale, l\'utilizzo e il margine per decidere se la configurazione è sicura.' },
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

export const content: ToolLocaleContent<UsbPowerBudgetCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'L\'alimentazione USB è un budget, non un\'etichetta', level: 2 },
    {
      type: 'paragraph',
      html: 'Un caricatore USB da 15 W, 45 W o 100 W descrive ciò che la sorgente può offrire nelle giuste condizioni. Il tuo dispositivo vede solo il risultato dopo la negoziazione del protocollo, i limiti di corrente, la resistenza del cavo, la qualità del connettore, le perdite dell\'hub e i picchi di carico. Questo calcolatore si concentra sulla domanda elettrica pratica: dopo la caduta del cavo e il margine di riserva, c\'è abbastanza potenza per l\'hardware che vuoi far funzionare?',
    },
    {
      type: 'stats',
      items: [
        { label: 'Corrente predefinita USB 2.0', value: '0,5 A' },
        { label: 'Massimo predefinito USB-C a 5 V', value: '3 A' },
        { label: 'Riserva consigliata', value: '20%+' },
      ],
    },
    { type: 'title', text: 'Come interpretare il risultato', level: 3 },
    {
      type: 'table',
      headers: ['Stato', 'Significato', 'Migliore passo successivo'],
      rows: [
        ['Sicuro', 'Il carico rientra nella capacità della sorgente dopo la riserva selezionata e la tensione stimata del dispositivo rimane sana.', 'Usa la configurazione, ma tieni d\'occhio il calore se l\'adattatore è piccolo o chiuso.'],
        ['Stretto', 'Il carico è vicino al limite riservato o la caduta del cavo sta diventando significativa.', 'Accorcia il cavo, scegli conduttori più spessi, riduci il carico o passa a un profilo di potenza superiore.'],
        ['Fuori budget', 'Il carico supera la potenza utilizzabile della sorgente o la tensione lato dispositivo è probabilmente troppo bassa.', 'Usa un caricatore più potente, un hub alimentato, un cavo più corto o un dispositivo che negozi una tensione USB-C PD più alta.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Quando i watt sono sufficienti ma il dispositivo si resetta comunque',
      html: '<p>La corrente di avvio può essere molto più alta del wattaggio medio stampato sull\'etichetta di un dispositivo. Un alimentatore a 5 V perde tensione più velocemente di un profilo PD a 20 V per lo stesso wattaggio perché deve trasportare più corrente. Molti cavi economici usano conduttori di potenza sottili anche quando la guaina esterna sembra consistente, e gli hub alimentati via bus condividono un budget a monte tra tutti i dispositivi a valle.</p>',
    },
    { type: 'title', text: 'Caduta di tensione del cavo in termini semplici', level: 3 },
    {
      type: 'paragraph',
      html: 'La caduta di tensione è la perdita creata quando la corrente scorre attraverso la resistenza del cavo. L\'alimentazione USB ha due conduttori nel percorso di potenza, quindi il calcolatore usa la lunghezza di andata e ritorno. Un cavo di un metro è elettricamente due metri di rame per il circuito di potenza. I numeri AWG più bassi sono più spessi e generalmente migliori per carichi ad alta corrente.',
    },
    {
      type: 'comparative',
      items: [
        { title: 'Cavo corto e spesso', description: 'Ideale per schede Raspberry Pi, enclosure SSD, kit di sviluppo e dock USB-C che assorbono corrente a raffica.' },
        { title: 'Cavo lungo e sottile', description: 'Accettabile per sensori a basso consumo o ricarica lenta, ma rischioso per unità, carichi LED e schede di calcolo.' },
        { title: 'PD a tensione più alta', description: 'Riduce la corrente per lo stesso wattaggio, il che abbassa la perdita del cavo, ma solo se sorgente, cavo e dispositivo lo negoziano.' },
      ],
    },
    {
      type: 'tip',
      title: 'Regola pratica',
      html: 'Se il calcolatore dice che la configurazione è stretta, trattalo come un avviso sul campo. I guasti USB spesso appaiono come disconnessioni casuali, cadute di tensione, ricarica lenta, audio rumoroso o errori di archiviazione prima di sembrare un chiaro problema di alimentazione.',
    },
    {
      type: 'summary',
      title: 'Per cosa è più adatto questo calcolatore',
      items: [
        'Pianificare hub USB, computer a scheda singola, unità esterne, schede di sviluppo, luci, ventole e piccole configurazioni da laboratorio.',
        'Confrontare profili sorgente USB 2.0, USB 3.x, USB-C e USB Power Delivery.',
        'Stimare se un cavo è troppo lungo o troppo sottile per un carico.',
        'Scegliere una riserva sensata prima di acquistare un caricatore o un hub alimentato.',
      ],
    },
  ],
  ui: {
    profileLabel: 'Profilo sorgente USB',
    metricUnits: 'Metrico',
    imperialUnits: 'US',
    voltageLabel: 'Tensione sorgente (V)',
    currentLabel: 'Corrente sorgente (A)',
    cableLengthLabel: 'Lunghezza cavo',
    wireGaugeLabel: 'Calibro filo di potenza',
    deviceLoadLabel: 'Carico per dispositivo (W)',
    devicesLabel: 'Dispositivi',
    headroomLabel: 'Margine di riserva (%)',
    sourcePower: 'Potenza sorgente',
    requiredPower: 'Potenza richiesta',
    cableDrop: 'Caduta cavo',
    deviceVoltage: 'Tensione dispositivo',
    headroom: 'Margine',
    utilization: 'Utilizzo',
    safeStatus: 'Il budget di alimentazione sembra sicuro',
    tightStatus: 'Il budget di alimentazione è stretto',
    overStatus: 'Fuori budget o rischio caduta di tensione',
    safeAdvice: 'Il carico rientra con il margine selezionato. Usa un cavo di qualità e controlla il calore durante le lunghe sessioni.',
    tightAdvice: 'Sei vicino al limite. Riduci la lunghezza del cavo, usa conduttori più spessi, abbassa il carico o seleziona un profilo più potente.',
    overAdvice: 'Questa configurazione probabilmente subirà cadute di tensione o limitazione. Usa un hub alimentato, un adattatore più potente o un profilo USB-C PD a tensione più alta.',
    busLane: 'Sorgente USB',
    loadLane: 'Carico dispositivo',
    cableLane: 'caduta',
    boardEyebrow: 'Percorso di alimentazione USB in tempo reale',
    sourceSocket: 'Presa sorgente',
    deviceSocket: 'Carico hardware',
    energyFlow: 'flusso di energia',
    reservedLabel: 'utilizzabile dopo la riserva',
  },
};
