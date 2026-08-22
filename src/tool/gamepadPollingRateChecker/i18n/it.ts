import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamepadPollingRateCheckerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-polling-rate-gamepad-hertz';
const title = 'Test di Polling Rate e Hertz per Gamepad';
const description = 'Misura la frequenza di aggiornamento rilevata dal browser, l intervallo dei dati e la stabilità temporale del tuo controller USB o Bluetooth.';

const faq = [
  {
    question: 'Cosa misura questo test del polling rate per gamepad?',
    answer: 'Misura le variazioni del timestamp della Gamepad API nel browser mentre muovi uno stick analogico. Il valore in Hertz mostra la frequenza osservata nella pagina e non una misurazione elettrica diretta del bus USB.',
  },
  {
    question: 'Il browser può verificare se un gamepad funziona a 1000 Hz?',
    answer: 'Può mostrare se gli aggiornamenti arrivano in modo fluido e costante alla pagina, ma non può certificare un overclock USB a livello hardware. L orologio del browser e del sistema operativo possono raggruppare i dati.',
  },
  {
    question: 'Perché è necessario ruotare lo stick analogico in cerchio?',
    answer: 'Il movimento circolare continuo modifica costantemente entrambi gli assi e genera un flusso uniforme di nuovi stati. Lasciare lo stick fermo produce troppi pochi aggiornamenti.',
  },
  {
    question: 'È possibile confrontare le prestazioni USB e Bluetooth?',
    answer: 'Sì, esegui il test con la stessa durata e lo stesso movimento circolare su ciascuna connessione nello stesso browser per confrontare frequenza, intervallo e jitter.',
  },
];

const howTo = [
  {
    name: 'Connettere e attivare il gamepad',
    text: 'Collega il controller via USB o Bluetooth e premi un pulsante per consentire al browser di rilevarlo tramite la Gamepad API.',
  },
  {
    name: 'Selezionare il dispositivo e la durata',
    text: 'Scegli il controller dall elenco e imposta una durata di dieci secondi per una misurazione iniziale bilanciata.',
  },
  {
    name: 'Ruotare lo stick analogico in modo continuo',
    text: 'Avvia il test e descrivi cerchi regolari con lo stick sinistro fino al completamento dell anello di avanzamento.',
  },
  {
    name: 'Leggere la frequenza e la stabilità',
    text: 'Confronta gli Hertz medi, l intervallo in millisecondi e il jitter nelle medesime condizioni di test.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<GamepadPollingRateCheckerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande frequenti sul polling rate dei gamepad',
  faq,
  bibliographyTitle: 'Riferimenti tecnici',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Misura la frequenza di aggiornamento del gamepad nel browser',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo strumento monitora i timestamp ad alta risoluzione del gamepad selezionato mentre lo stick analogico è in movimento. Filtra gli sbalzi anomali, calcola l intervallo medio tra i dati e lo converte in Hertz osservati (1000 diviso i millisecondi). Tutta l analisi avviene localmente nella pagina.',
    },
    {
      type: 'table',
      headers: ['Lettura', 'Cosa indica questo valore', 'Cosa non dimostra da solo'],
      rows: [
        ['Frequenza osservata', 'Frequenza dei dati letti dalla pagina ogni secondo', 'Il polling rate elettrico diretto della porta USB'],
        ['Intervallo medio', 'Tempo medio trascorso tra due aggiornamenti', 'La latenza totale di input fino allo schermo'],
        ['Jitter (variazione)', 'Scarto temporale tra il 5° e il 95° percentile', 'Un difetto hardware definitivo da solo'],
        ['Affidabilità', 'Quantità e regolarità dei campioni raccolti nel test', 'Una precisione di calibrazione da laboratorio'],
      ],
    },
    {
      type: 'title',
      text: 'Come eseguire un test di Hertz ripetibile e preciso',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Chiudi le applicazioni pesanti in background, mantieni la scheda in primo piano e ruota lo stesso stick in modo uniforme durante ogni prova. Usa lo stesso browser e la stessa durata quando confronti cavi, adattatori Bluetooth o impostazioni del sistema operativo.',
    },
    {
      type: 'tip',
      title: 'Confronta sempre nelle stesse condizioni',
      html: 'Esegui almeno due prove dopo aver cambiato cavo o porta USB. Un picco isolato è meno significativo di una frequenza stabile con basso jitter.',
    },
    {
      type: 'title',
      text: 'Perché questo non è un test di input lag totale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La Gamepad API legge i dati del controller dopo che sono stati elaborati dal sistema operativo e dal browser. Non misura la risposta elettrica del cavo né il tempo di rendering dello schermo. L intervallo osservato è ottimo per confronti via web ma non rappresenta la latenza totale.',
    },
  ],
  ui: {
    privacyNote: 'Elaborazione del segnale 100% locale',
    stepConnect: 'Connetti e premi un tasto',
    stepMove: 'Ruota uno stick in cerchio',
    stepRead: 'Confronta frequenza e stabilità',
    deviceLabel: 'Gamepad attivo rilevato',
    devicePlaceholder: 'Premi un pulsante sul controller per rilevarlo',
    deviceFallback: 'Gamepad connesso',
    durationLabel: 'Finestra di misurazione',
    durationFive: '5 sec',
    durationTen: '10 sec',
    durationTwenty: '20 sec',
    startAction: 'Avvia test',
    stopAction: 'Interrompi',
    resetAction: 'Reimposta',
    orbitInstruction: 'Ruota lo stick sinistro in cerchio durante il test',
    traceLabel: 'Traccia timestamp in tempo reale',
    observedRateLabel: 'Frequenza osservata',
    intervalLabel: 'Intervallo medio',
    jitterLabel: 'Variazione (Jitter)',
    samplesLabel: 'Campioni validi',
    confidenceLabel: 'Affidabilità test',
    confidenceLow: 'Bassa',
    confidenceMedium: 'Media',
    confidenceHigh: 'Elevata',
    statusWaiting: 'In attesa di un controller compatibile',
    statusReady: 'Controller pronto. Clicca avvia con il pollice pronto sullo stick.',
    statusMeasuring: 'Registrazione dei timestamp in locale',
    statusNeedsMovement: 'Ruota lo stick compiendo cerchi più ampi per raccogliere dati',
    statusComplete: 'Test completato. Ripeti nelle stesse condizioni per confrontare.',
    statusUnsupported: 'Il tuo browser non supporta la Gamepad API',
    statusDisconnected: 'Nessun controller attivo. Conneggine uno e premi un tasto.',
    statusStopped: 'Test interrotto. Il risultato parziale rimane visibile.',
    limitHeading: 'Limite tecnico della misurazione nel browser',
    limitBody: 'Misura gli aggiornamenti visibili tramite la Gamepad API. Non certifica l overclock USB o la latenza totale.',
    emptyValue: '-',
    hertzUnit: 'Hz',
    millisecondsUnit: 'ms',
    reportsUnit: 'intervalli',
    progressLabel: 'Avanzamento misurazione',
  },
};
