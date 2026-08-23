import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MicrophoneSpectrumTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-microfono-analizzatore-spettro';
const title = 'Test microfono e analizzatore di spettro';
const description = 'Verifica l ingresso del microfono, il livello in tempo reale, il clipping, il rumore ambientale e la risposta in frequenza direttamente nel tuo browser.';

const faq = [
  {
    question: 'Questo test del microfono registra o invia la mia voce?',
    answer: 'No. Il segnale audio in tempo reale è collegato esclusivamente a un analizzatore locale nel browser. Lo strumento non crea file audio, non invia il segnale all uscita audio e non carica campioni su server esterni.',
  },
  {
    question: 'Cosa significa dBFS nell indicatore di livello?',
    answer: 'dBFS indica i decibel relativi al fondo scala digitale (Full Scale). Lo zero dBFS è il valore massimo rappresentabile, quindi le misurazioni normali sono negative. Non equivale a una misurazione di pressione sonora in dB SPL.',
  },
  {
    question: 'Come posso capire se il microfono va in clipping?',
    answer: 'Parla al volume massimo previsto. Se i picchi raggiungono ripetutamente lo stato rosso di clipping vicino a zero dBFS, riduci il guadagno del microfono, aumenta la distanza o disattiva elaborazioni aggressive nel sistema operativo.',
  },
  {
    question: 'Cosa misura la misurazione del rumore ambientale?',
    answer: 'La cattura di tre secondi calcola il livello medio RMS digitale mentre rimani in silenzio. Utile per confrontare le impostazioni nello stesso ambiente, anche se il controllo automatico del guadagno può influire.',
  },
  {
    question: 'Perché la frequenza dominante varia mentre parlo?',
    answer: 'La voce umana contiene una frequenza fondamentale variabile, armoniche, consonanti e rumore. La schermata mostra la banda più forte tra 60 Hz e 12 kHz, quindi la variazione è del tutto normale.',
  },
  {
    question: 'Questo analizzatore di spettro può certificare la qualità di un microfono?',
    answer: 'No. È una verifica pratica nel browser per controllare ingresso, livello, clipping, rumore e attività spettrale. Una certificazione ufficiale richiede hardware calibrato e ambienti di prova controllati.',
  },
];

const howTo = [
  {
    name: 'Concedi il permesso per il microfono',
    text: 'Fai clic su Avvia microfono e autorizza il browser. L elaborazione inizia solo dopo questa azione.',
  },
  {
    name: 'Parla alla solita distanza di lavoro',
    text: 'Usa la tua voce o il livello del tuo strumento e osserva la lettura in dBFS, il picco massimo e lo spettro.',
  },
  {
    name: 'Verifica il momento di massimo volume',
    text: 'Alza la voce o suona il passaggio più forte. Cerca di evitare il clipping in rosso mantenendo un segnale chiaro.',
  },
  {
    name: 'Cattura il rumore di fondo',
    text: 'Rimani in silenzio e premi Cattura tre secondi. Confronta il rumore salvato dopo aver modificato guadagno o impostazioni.',
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

export const content: ToolLocaleContent<MicrophoneSpectrumTesterUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Come testare un microfono nel browser',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo test del microfono risponde alle prime esigenze di diagnostica senza installare applicazioni: l ingresso selezionato produce un segnale, il livello è adeguato, si verifica clipping nei momenti forti e quali frequenze sono attive? Avvia il microfono, parla dalla tua posizione normale e controlla i dati in tempo reale.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Analisi locale e privata',
      badge: 'Senza registrazione',
      html: '<p>Il browser richiede l autorizzazione poiché l ingresso audio è sensibile. Questo strumento collega il flusso esclusivamente a un analizzatore locale. Nessun dato viene caricato su server esterni.</p>',
    },
    {
      type: 'title',
      text: 'Comprendere il livello del microfono in dBFS',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il valore principale è una stima RMS che rappresenta l energia nell intervallo di tempo attuale. L indicatore di picco mostra il campione massimo. Entrambi utilizzano dBFS, dove zero rappresenta il fondo scala digitale.',
    },
    {
      type: 'table',
      headers: ['Lettura', 'Significato', 'Cosa verificare'],
      rows: [
        ['Silenzio o sotto -60 dBFS', 'L ingresso selezionato non produce un segnale di test utile', 'Controlla il dispositivo, il tasto mute, le autorizzazioni e il livello nel sistema operativo'],
        ['Basso sotto -35 dBFS', 'Il segnale potrebbe essere debole senza ulteriore guadagno', 'Avvicinati o aumenta il guadagno d ingresso monitorando il picco'],
        ['Adeguato', 'Il segnale attuale ha un livello ottimale e un buon margine', 'Ripeti la prova parlando a volume più alto'],
        ['Elevato sopra -6 dBFS picco', 'Rimane poco margine digitale prima della saturazione', 'Riduci il guadagno o aumenta la distanza prima dei momenti forti'],
        ['Clipping vicino a 0 dBFS', 'Uno o più campioni hanno raggiunto il limite digitale', 'Riduci il guadagno e ripeti il passaggio più forte'],
      ],
    },
    {
      type: 'title',
      text: 'Uso dello spettro audio in tempo reale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lo spettro mostra le frequenze da 60 Hz a 12 kHz su una scala logaritmica. Utilizza questa schermata per verificare che i toni bassi, medi e alti raggiungano correttamente il browser.',
    },
    {
      type: 'tip',
      title: 'Confronta una modifica alla volta',
      html: 'Cattura il rumore di fondo, modifica una sola impostazione e misura nuovamente dalla stessa posizione.',
    },
    {
      type: 'title',
      text: 'Perché non è un fonometro calibrato',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I campioni del browser descrivono il segnale digitale dopo il passaggio nel microfono e nella scheda audio. Non esprimono la pressione acustica in dB SPL.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Usa apparecchiature calibrate per certificazioni',
      badge: 'Solo verifica pratica',
      html: '<p>Utilizza questo strumento per risolvere problemi in chiamate e registrazioni. Per certificazioni di prodotto o analisi acustiche professionali usa strumenti calibrati.</p>',
    },
  ],
  ui: {
    journeyPermission: '1. Autorizza il microfono',
    journeySpeak: '2. Parla normalmente',
    journeyInspect: '3. Controlla livello e spettro',
    startMicrophone: 'Avvia microfono',
    stopMicrophone: 'Arresta microfono',
    deviceLabel: 'Dispositivo di ingresso',
    defaultDevice: 'Microfono predefinito',
    statusIdle: 'In attesa di autorizzazione',
    statusRequesting: 'Richiesta di accesso al microfono',
    statusLive: 'Ascolto locale attivo',
    statusUnsupported: 'Accesso al microfono non disponibile in questo browser',
    statusDenied: 'Autorizzazione microfono non concessa',
    statusError: 'Impossibile avviare il microfono',
    levelLabel: 'Livello in tempo reale',
    peakLabel: 'Picco',
    frequencyLabel: 'Frequenza dominante',
    noiseFloorLabel: 'Rumore ambientale',
    captureNoise: 'Cattura tre secondi',
    capturingNoise: 'Rimani in silenzio durante la misurazione del rumore',
    noiseCaptured: 'Rumore ambientale catturato',
    roomToneHint: 'Mantieni guadagno e posizione e rimani in silenzio per tre secondi.',
    unmeasured: 'Non misurato',
    noSignalLevel: 'Nessun segnale',
    noSignalPeak: 'Nessun segnale',
    noSignalFrequency: 'Nessun segnale',
    silentSignal: 'Nessun segnale utile',
    quietSignal: 'Ingresso debole',
    healthySignal: 'Margine ottimale',
    hotSignal: 'Segnale elevato',
    clippingSignal: 'Clipping rilevato',
    dbfsUnit: 'dBFS',
    hzUnit: 'Hz',
    spectrumAriaLabel: 'Spettro logaritmico e forma d onda del microfono in tempo reale',
    limitationTitle: 'Un browser non è un fonometro calibrato',
    limitationText: 'Le letture indicano dBFS digitali dopo l elaborazione del dispositivo, non dB SPL acustici. Il segnale rimane locale e non viene inviato su internet.',
  },
};
