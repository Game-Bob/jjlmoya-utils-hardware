import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebcamTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-webcam-privato-online';
const title = 'Test webcam privato';
const description = 'Verifica i permessi della fotocamera, l anteprima video in diretta, la risoluzione, il rapporto d aspetto, l orientamento e la fluidità dei fotogrammi.';

const faq = [
  {
    question: 'Questo test webcam registra o carica il mio video?',
    answer: 'No. La pagina richiede esclusivamente un flusso video in diretta locale per l anteprima e non richiede l accesso al microfono. Non effettua registrazioni, né scatta foto né invia dati. L arresto del test chiude immediatamente ogni traccia video.',
  },
  {
    question: 'Perché il browser richiede il permesso di accesso alla fotocamera?',
    answer: 'Nessun sito web può accedere alla fotocamera senza l autorizzazione esplicita dell utente. La richiesta consente di scegliere se questa pagina può ricevere uno streaming locale temporaneo.',
  },
  {
    question: 'Qual è la differenza tra FPS configurati ed FPS osservati?',
    answer: 'Gli FPS configurati rappresentano la frequenza target richiesta per questa anteprima. Gli FPS osservati stimano quanti fotogrammi arrivano realmente mentre la scheda è visibile.',
  },
  {
    question: 'Perché la risoluzione disponibile può differire dalle specifiche della fotocamera?',
    answer: 'Il sistema operativo, il driver della fotocamera e il browser selezionano insieme una modalità compatibile. Altre applicazioni attive o limiti di alimentazione possono ridurre la risoluzione.',
  },
];

const howTo = [
  {
    name: 'Apri l anteprima privata',
    text: 'Seleziona Apri fotocamera e autorizza l accesso video nella finestra del browser. L accesso audio non viene richiesto.',
  },
  {
    name: 'Verifica inquadratura e immagine',
    text: 'Controlla la messa a fuoco, l illuminazione e lo sfondo nella vista in diretta. Attiva la modalità specchio o la guida se necessario.',
  },
  {
    name: 'Controlla il flusso video',
    text: 'Leggi la risoluzione, il rapporto d aspetto, l orientamento e la frequenza dei fotogrammi.',
  },
  {
    name: 'Cambia o ferma la fotocamera',
    text: 'Seleziona un altra fotocamera disponibile per il confronto o premi Ferma fotocamera per chiudere le tracce.',
  },
];

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

export const content: ToolLocaleContent<WebcamTesterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande frequenti sul test della webcam',
  faq,
  bibliographyTitle: 'Fonti e guide sulla configurazione della fotocamera',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Testa la tua webcam prima di una videochiamata',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Utilizza questa anteprima locale per verificare gli aspetti fondamentali prima di una riunione: se la fotocamera risponde, se è selezionato il dispositivo corretto, se il tuo volto è ben illuminato e se il video scorre in modo fluido.',
    },
    {
      type: 'list',
      items: [
        'Seleziona la fotocamera corretta se sono collegati più dispositivi',
        'Posiziona la fotocamera all altezza degli occhi e mantieni il viso nel terzo superiore',
        'Illumina il volto frontalmente evitando di sederti davanti a finestre molto luminose',
        'Chiudi altre app di videoconferenza se la fotocamera appare occupata',
        'Controlla la risoluzione e la frequenza dei fotogrammi direttamente sullo schermo',
      ],
    },
    {
      type: 'title',
      text: 'Soluzioni per una fotocamera nera o non disponibile',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Sintomo riscontrato', 'Causa probabile', 'Azione consigliata'],
      rows: [
        ['Autorizzazione negata', 'L accesso alla fotocamera è bloccato nelle impostazioni', 'Consenti l accesso nelle opzioni del browser e ricarica la pagina'],
        ['Schermo nero o occupato', 'Un altra applicazione sta utilizzando la fotocamera', 'Chiudi Zoom, Teams o Meet e riprova'],
        ['Immagine errata', 'È stata selezionata una fotocamera virtuale o secondaria', 'Scegli un altra sorgente nel menu a tendina'],
        ['Immagine scura o sgranata', 'Luce frontale scarsa o forte controluce', 'Posiziona una lampada davanti allo schermo o orientati verso una finestra'],
        ['Video a scatti', 'Luminosità ridotta o carico elevato sul computer', 'Aumenta l illuminazione e chiudi i programmi pesanti'],
      ],
    },
    {
      type: 'title',
      text: 'Comprensione di risoluzione e frequenza dei fotogrammi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una risoluzione di 1280 × 720 è sufficiente per la maggior parte delle riunioni. La risoluzione 1920 × 1080 offre maggiore nitidezza ma richiede una connessione stabile. Gli FPS configurati rappresentano il target desiderato, mentre gli FPS osservati valutano la resa reale.',
    },
    {
      type: 'tip',
      title: 'Riproduci le condizioni reali della chiamata',
      html: 'Esegui il test allo stesso orario e con la stessa luce del tuo incontro. Poiché le applicazioni di videochiamata possono ritagliare l immagine, effettua una verifica finale anche nell app principale.',
    },
    {
      type: 'title',
      text: 'Inquadratura e posizionamento ottimale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Posiziona la fotocamera all altezza dello sguardo e lascia un piccolo margine sopra la testa. Assicurati che la luce principale sia frontale. Se porti gli occhiali, orienta leggermente la sorgente luminosa per evitare riflessi sulle lenti.',
    },
  ],
  ui: {
    privacyNote: 'Senza registrazione · Senza caricamento · Senza audio',
    permissionHeading: 'Pronto a testare la fotocamera?',
    permissionBody: 'Apri un anteprima privata in diretta per verificare l immagine e i formati video disponibili in questa scheda. L arresto chiude immediatamente l accesso.',
    startAction: 'Apri fotocamera',
    stopAction: 'Ferma fotocamera',
    retryAction: 'Riprova',
    deviceLabel: 'Sorgente fotocamera',
    devicePlaceholder: 'Seleziona fotocamera',
    defaultDevice: 'Fotocamera',
    mirrorAction: 'Modalità specchio',
    guideAction: 'Guida inquadratura',
    stageLabel: 'Area anteprima webcam privata',
    resolutionLabel: 'Risoluzione',
    aspectLabel: 'Rapporto d aspetto',
    orientationLabel: 'Orientamento',
    configuredFpsLabel: 'FPS configurati',
    observedFpsLabel: 'FPS osservati',
    frameDeliveryLabel: 'Fluidità fotogrammi',
    landscapeValue: 'Orizzontale',
    portraitValue: 'Verticale',
    squareValue: 'Quadrato',
    frameStable: 'Vicino al target',
    frameReduced: 'Sotto il target',
    frameConstrained: 'Fortemente ridotto',
    framePending: 'In attesa di fotogrammi',
    statusIdle: 'Fotocamera chiusa. Aprila quando sei pronto per l anteprima.',
    statusStarting: 'In attesa del permesso e del primo fotogramma video',
    statusReady: 'Anteprima attiva. Controlla fuoco, luce, inquadratura e fluidità.',
    statusStopped: 'Fotocamera fermata. Le tracce video di questo test sono chiuse.',
    statusHidden: 'Mantieni visibile questa scheda per una misurazione precisa degli FPS.',
    statusUnsupported: 'Questo browser non supporta l accesso alla fotocamera.',
    errorPermissionDenied: 'Permesso negato. Autorizza la fotocamera nelle opzioni del browser e riprova.',
    errorNoCamera: 'Nessuna fotocamera trovata. Collega un dispositivo e riprova.',
    errorInUse: 'Impossibile avviare la fotocamera. Chiudi altre app e riprova.',
    errorSecureContext: 'L accesso alla fotocamera richiede HTTPS o localhost.',
    errorGeneric: 'Impossibile aprire la fotocamera. Verifica i permessi e il dispositivo.',
    limitHeading: 'Cosa conferma questo test',
    limitBody: 'Conferma l immagine e la fluidità disponibili in questa scheda. Non valuta la messa a fuoco automatica dell obiettivo né la rielaborazione di altre app.',
    localOnlyLabel: 'Controllo fotocamera privato',
    emptyValue: 'Non disponibile',
    fpsUnit: 'FPS',
  },
};
