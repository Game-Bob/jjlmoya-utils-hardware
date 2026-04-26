import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RefreshRateDetectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'rilevatore-frequenza-aggiornamento-monitor';
const title = 'Rilevatore Frequenza di Aggiornamento Monitor';
const description = 'Rileva istantaneamente la frequenza di aggiornamento del tuo monitor con precisione utilizzando requestAnimationFrame. Testa la stabilità dei fotogrammi e confrontala con gli standard del settore.';

const faqData = [
  {
    question: 'Cos\'è la frequenza di aggiornamento (Hz)?',
    answer: 'La frequenza di aggiornamento indica quante volte al secondo il monitor aggiorna l\'immagine. Un monitor a 60Hz si aggiorna 60 volte al secondo, mentre uno a 144Hz si aggiorna 144 volte. Frequenze più elevate si traducono in movimenti più fluidi.',
  },
  {
    question: 'Quanto è preciso questo rilevatore?',
    answer: 'Questo strumento utilizza requestAnimationFrame, che si sincronizza con il ciclo di aggiornamento del monitor. La precisione dipende dal carico del sistema. La modalità stabile misura per periodi più lunghi per una maggiore precisione.',
  },
  {
    question: 'Qual è la differenza tra la modalità Stabile e quella Veloce?',
    answer: 'La modalità Veloce misura per un breve periodo (~3 secondi) per un feedback rapido. La modalità Stabile richiede più tempo (~10 secondi) per filtrare il rumore del sistema e fornire risultati più affidabili.',
  },
  {
    question: 'Perché gli Hz rilevati sono diversi da quelli indicati dal mio monitor?',
    answer: 'Ciò può accadere se: il collegamento del cavo è allentato, i driver sono obsoleti o l\'interferenza del ridimensionamento del sistema operativo. Prova a scollegare e ricollegare il cavo del display o ad aggiornare i driver della GPU.',
  },
  {
    question: 'Quali frequenze di aggiornamento supportano i monitor moderni?',
    answer: 'Gli standard comuni sono 60Hz (base), 75Hz, 120Hz, 144Hz (gaming), 240Hz (gaming competitivo) e 360Hz (eSport professionali).',
  },
];

const howToData = [
  {
    name: 'Carica lo strumento',
    text: 'Basta aprire questa pagina. Il rilevatore inizia a misurare immediatamente.',
  },
  {
    name: 'Attendi la stabilizzazione',
    text: 'Scegli la modalità Stabile o Veloce. Lascia che la misurazione venga completata senza spostare la finestra.',
  },
  {
    name: 'Controlla il tachimetro',
    text: 'La frequenza di aggiornamento del monitor appare come un quadrante fluido, con statistiche di benchmark (min/max/media).',
  },
  {
    name: 'Confronta con gli standard',
    text: 'Lo strumento mostra a quale standard corrisponde il tuo monitor (60, 75, 120, 144, 240, 360Hz).',
  },
  {
    name: 'Opzionale: test del salto dei fotogrammi',
    text: 'Osserva il quadrato animato che attraversa lo schermo per confermare visivamente la fluidità.',
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

export const content: ToolLocaleContent<RefreshRateDetectorUI> = {
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
      text: 'Rilevatore Frequenza di Aggiornamento Monitor: Testa gli Hz del tuo Display Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Rileva istantaneamente la frequenza di aggiornamento del tuo monitor (60Hz, 144Hz, 240Hz, ecc.) con precisione. Testa la stabilità dei fotogrammi e verifica che il tuo display stia funzionando secondo le sue specifiche nominali.',
    },
    {
      type: 'title',
      text: 'Perché la Frequenza di Aggiornamento del Monitor è Importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La frequenza di aggiornamento determina la fluidità con cui i movimenti appaiono sullo schermo. I giocatori traggono vantaggio da monitor a 144Hz o superiori, mentre gli utenti generici trovano adeguati i 60Hz. Questo strumento aiuta a confermare che il monitor fornisca effettivamente la frequenza di aggiornamento pubblicizzata.',
    },
    {
      type: 'title',
      text: 'Come Rilevare la tua Frequenza di Aggiornamento',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Carica questo rilevatore: la misurazione inizia immediatamente',
        'Scegli tra la modalità di misurazione Veloce (3s) o Stabile (10s)',
        'Leggi gli Hz del tuo monitor dal quadrante del tachimetro',
        'Confrontali con gli standard del settore (60, 75, 120, 144, 240, 360Hz)',
      ],
    },
    {
      type: 'title',
      text: 'Standard Comuni della Frequenza di Aggiornamento',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Standard', 'Caso d\'Uso', 'Utente Tipico'],
      rows: [
        ['60Hz', 'Informatica Generale', 'Ufficio, Navigazione Web'],
        ['75Hz', 'Gaming Leggero', 'Giocatori Occasionali'],
        ['120Hz', 'Multimedia', 'Console, Streaming'],
        ['144Hz', 'Gaming Competitivo', 'FPS, Giochi Veloci'],
        ['240Hz+', 'eSport Professionali', 'Giocatori Pro, Streamer'],
      ],
    },
    {
      type: 'title',
      text: 'Risoluzione dei Problemi: Il Display Mostra meno Hz di quelli Previsti',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Controlla i collegamenti del cavo HDMI/DisplayPort: i cavi allentati riducono la larghezza di banda',
        'Aggiorna i driver della GPU (NVIDIA, AMD, Intel)',
        'Controlla le impostazioni del display del sistema operativo per assicurarti che la frequenza di aggiornamento elevata sia abilitata',
        'Prova diversi cavi o porte sul monitor',
        'Riavvia il computer e ripeti il test',
      ],
    },
    {
      type: 'title',
      text: 'La Tecnologia Dietro questo Rilevatore',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Questo strumento utilizza l\'API requestAnimationFrame del browser, che si sincronizza direttamente con il ciclo di aggiornamento del monitor. Misurando il tempo tra i fotogrammi dell\'animazione, calcoliamo la tua esatta frequenza di aggiornamento con alta precisione, senza bisogno di hardware speciale.',
    },
  ],
  ui: {
    badge: 'Test del Display',
    title: 'Rilevatore Frequenza Monitor',
    description: 'Rileva istantaneamente la frequenza di aggiornamento del tuo display',
    modeStable: 'Stabile (10s, preciso)',
    modeFast: 'Veloce (3s, rapido)',
    measurementStatus: 'Misurazione in corso...',
    currentHz: 'Attuale',
    averageHz: 'Media',
    maxHz: 'Massimo',
    minHz: 'Minimo',
    standardDetected: 'Standard Rilevato',
    frameSkippingTest: 'Test del Salto dei Fotogrammi',
    startMeasurement: 'Avvia Misurazione',
    resetMeasurement: 'Ripristina',
    copyResult: 'Copia Risultato',
    copiedFeedback: 'Copiato negli appunti!',
    optimalConfiguration: '[OK] Configurazione Ottimale',
    suboptimalConfiguration: '[AVVISO] Sotto l\'Ottimale',
    unstableRefreshRate: '[AVVISO] Frequenza Instabile',
    measurementNotStarted: 'Pronto per la misurazione',
    switchMonitorHint: 'Trascina la finestra su un altro monitor per testarlo',
    incompatibleBrowserMsg: 'Il tuo browser non supporta requestAnimationFrame',
  },
};
