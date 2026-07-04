import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebUsbSerialMonitorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-seriale-webusb';
const title = 'Monitor Seriale WebUSB';
const description = 'Collegati all\'hardware seriale USB dal browser, leggi l\'output del terminale in tempo reale, invia comandi ed esegui il debug di schede Arduino, ESP32, RP2040 e maker senza installare un terminale desktop.';

const faqData = [
  {
    question: 'Questo monitor seriale funziona con schede Arduino, ESP32 e Raspberry Pi Pico?',
    answer: 'Sì, quando la scheda espone un\'interfaccia seriale USB supportata da Web Serial e il browser è basato su Chromium. Gli adattatori comuni Arduino, ESP32, RP2040, CH340, CP210x e FTDI di solito funzionano dopo che l\'utente concede l\'autorizzazione.',
  },
  {
    question: 'Perché si chiama WebUSB se utilizza Web Serial?',
    answer: 'La maggior parte delle schede maker si connette via USB, ma l\'accesso al terminale del browser è fornito dall\'API Web Serial. WebUSB è di livello inferiore e non è l\'astrazione giusta per un semplice terminale in stile UART.',
  },
  {
    question: 'Un sito web può accedere ai miei dispositivi seriali senza permesso?',
    answer: 'No. Il browser richiede un clic dell\'utente e un selettore dispositivi nativo prima che un sito possa aprire una porta seriale. Questo strumento non memorizza i log del terminale né gli identificatori dei dispositivi.',
  },
  {
    question: 'Quale browser dovrei usare per un terminale seriale web?',
    answer: 'Usa Chrome, Edge o un altro browser basato su Chromium su HTTPS o localhost. Firefox, Safari e molti browser iOS non espongono l\'API Web Serial.',
  },
  {
    question: 'Quale baud rate dovrei scegliere?',
    answer: 'Scegli il baud rate configurato nel tuo firmware. Gli esempi Arduino usano spesso 9600 o 115200, mentre log più veloci, bootloader e flussi di sensori ad alta velocità possono usare 230400, 460800 o 921600.',
  },
];

const howToData = [
  {
    name: 'Collega il dispositivo seriale USB',
    text: 'Collega la scheda o l\'adattatore e chiudi qualsiasi altro terminale seriale che potrebbe avere la porta già aperta.',
  },
  {
    name: 'Seleziona il baud rate',
    text: 'Scegli lo stesso baud rate usato dal firmware, come 115200 per molti sketch Arduino, ESP32 e RP2040.',
  },
  {
    name: 'Concedi l\'autorizzazione del browser',
    text: 'Premi Connetti, scegli il dispositivo seriale nel selettore del browser e consenti alla pagina di aprire la porta.',
  },
  {
    name: 'Leggi e invia dati del terminale',
    text: 'Osserva i log in arrivo nel terminale, invia comandi con terminazioni di riga CRLF opzionali e cancella o metti in pausa l\'output in tempo reale quando necessario.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<WebUsbSerialMonitorUI> = {
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
      text: 'Monitor Seriale Online per Hardware USB Maker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo monitor seriale del browser apre una porta seriale USB direttamente da Chrome o Edge, quindi trasmette testo da microcontrollori, ponti USB UART, schede di sviluppo, bootloader, dispositivi di test, sensori e hardware di laboratorio. È progettato per diagnostica rapida quando hai bisogno di una console seriale ma non vuoi installare un IDE desktop o un\'applicazione terminale.',
    },
    {
      type: 'message',
      title: 'Limite di autorizzazione del browser',
      html: 'La pagina non può enumerare o aprire silenziosamente i tuoi dispositivi seriali. L\'accesso inizia solo dopo aver premuto Connetti e scelto una porta nel selettore del browser. I dati del terminale rimangono nella scheda corrente a meno che tu non li copi.',
    },
    {
      type: 'stats',
      items: [
        { value: '9600-921600', label: 'preset baud comuni' },
        { value: 'CRLF', label: 'terminazione comando opzionale' },
        { value: 'locale', label: 'sessione terminale' },
      ],
    },
    {
      type: 'title',
      text: 'Quando un Terminale Seriale Web è Utile',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Controllare i messaggi di avvio da Arduino, ESP32, ESP8266, RP2040, STM32 o firmware personalizzato.',
        'Inviare comandi AT a modem, GPS, LoRa, Wi-Fi, Bluetooth o moduli cellulari tramite un adattatore USB UART.',
        'Leggere l\'output dei sensori da un banco di prova di fabbrica, laboratorio scolastico, controller robotico o prototipo da banco.',
        'Verificare che driver bridge seriale USB, cavo, alimentazione della scheda e baud rate del firmware funzionino tutti insieme.',
        'Raccogliere un rapido log degli errori prima di segnalare un bug o richiedere supporto hardware.',
      ],
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Monitor seriale web',
          description: 'Ideale per supporto rapido, istruzioni in classe, diagnostica sul campo e flussi di lavoro maker dove aprire un URL è più veloce che installare un IDE.',
        },
        {
          title: 'Terminale desktop',
          description: 'Migliore per protocolli binari, sessioni di acquisizione lunghe, scripting, controllo di flusso hardware, macro e ambienti in cui le API del browser sono bloccate.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Lista di Controllo Baud Rate e Terminazione di Riga',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Impostazione', 'Scelta tipica', 'Cosa non funziona quando è sbagliato'],
      rows: [
        ['Baud rate', '115200 per molte schede moderne, 9600 per esempi più vecchi.', 'Il testo leggibile diventa simboli casuali o non appare alcun log utile.'],
        ['Terminazione di riga', 'CRLF per molti parser di comandi, nessuna terminazione per protocolli a caratteri grezzi.', 'I comandi vengono ignorati perché il firmware attende un terminatore.'],
        ['Accesso esclusivo alla porta', 'Chiudi Arduino Serial Monitor, PuTTY, screen, minicom o strumenti del produttore.', 'Il selettore del browser apre la porta ma la lettura o scrittura fallisce.'],
        ['Contesto sicuro', 'HTTPS o localhost.', 'L\'API Serial è assente anche in un browser supportato.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Nessun output seriale?',
      html: 'Conferma che la scheda sia alimentata e che il cavo USB supporti i dati, non solo la ricarica. Prova 9600, 57600 e 115200 se non conosci il baud rate del firmware. Premi reset dopo la connessione perché molte schede stampano i log di avvio solo all\'avvio. Chiudi altri software che potrebbero ancora possedere la porta seriale e installa il driver del sistema operativo per CH340, CP210x, FTDI o il produttore della scheda se il dispositivo non appare mai.',
    },
    {
      type: 'title',
      text: 'Privacy, Sicurezza e Limiti',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Punti di forza e limiti di Web Serial',
      items: [
        {
          pro: 'Nessuna installazione desktop per diagnostica di testo seriale di base.',
          con: 'Richiede un browser basato su Chromium e un contesto sicuro.',
        },
        {
          pro: 'Il selettore del browser limita l\'accesso alla porta specifica che scegli.',
          con: 'Non destinato ad analizzatori di protocolli binari o acquisizioni lunghe non presidiate.',
        },
        {
          pro: 'Funziona bene per log di testo, prompt dei comandi e controlli rapidi dell\'hardware.',
          con: 'Alcune policy aziendali, browser mobili e sistemi operativi bloccano Web Serial.',
        },
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Serial non è disponibile',
    unsupportedBody: 'Usa Chrome o Edge su HTTPS o localhost e assicurati che il tuo dispositivo esponga un\'interfaccia seriale USB.',
    secureContext: 'Web Serial richiede HTTPS o localhost. Ricarica questa pagina da un\'origine sicura e riprova.',
    statusIdle: 'Scegli un baud rate, quindi connetti un dispositivo seriale USB',
    statusPermission: 'In attesa del selettore porta seriale del browser',
    statusOpening: 'Apertura porta seriale',
    statusConnected: 'Porta seriale connessa',
    statusDisconnected: 'Porta seriale disconnessa',
    statusError: 'Connessione seriale fallita',
    connect: 'Connetti Seriale',
    disconnect: 'Disconnetti',
    send: 'Invia',
    clear: 'Cancella',
    pause: 'Pausa',
    resume: 'Riprendi',
    baudRate: 'Baud rate',
    newline: 'Aggiungi CRLF',
    inputPlaceholder: 'Digita un comando, poi premi Invio',
    portFallback: 'Nessuna porta selezionata',
    portLabel: 'Identità porta',
    connectedDeviceLabel: 'Dispositivo connesso',
    deviceNameFallback: 'Dispositivo seriale USB',
    transportLabel: 'Collegamento Web Serial',
    bytesLabel: 'Byte',
    linesLabel: 'Righe',
    privacyTitle: 'Accesso controllato',
    privacyBody: 'Il browser espone solo il dispositivo seriale che selezioni. I log rimangono in questa scheda a meno che tu non li copi.',
    emptyLog: 'L\'output del terminale apparirà qui dopo aver connesso un dispositivo seriale.',
    copied: 'Copiato',
    copyLog: 'Copia',
    presetSlow: '9600',
    presetArduino: '115200',
    presetFast: '921600',
    terminalLabel: 'Terminale in diretta',
    unknownUsbId: 'N/A',
    logDirectionRx: 'rx',
    logDirectionTx: 'tx',
    logDirectionSys: 'sys',
    vidPrefix: 'VID ',
    pidSeparator: ' / PID ',
    baudUnit: ' baud',
    vendorFtdi: 'FTDI USB Serial',
    vendorSilabs: 'Silicon Labs CP210x',
    vendorCh340: 'CH340 USB Serial',
    vendorArduinoUsb: 'Arduino USB Serial',
    vendorAdafruit: 'Adafruit USB Serial',
    vendorRp2040: 'Raspberry Pi RP2040',
    vendorEspressif: 'Espressif USB Serial',
    vendorOpenSource: 'Open Source USB Serial',
  },
};
