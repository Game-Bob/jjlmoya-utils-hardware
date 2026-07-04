import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileSensorTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mobile-sensor-test';
const title = 'Test dei Sensori del Cellulare';
const description = 'Esegui un test online di giroscopio, accelerometro, sensore di movimento e livella a bolla sul tuo telefono per verificare inclinazione, rotazione, deriva e problemi di calibrazione dei sensori.';

const faqData = [
  {
    question: 'Come posso testare il giroscopio del mio telefono online?',
    answer: 'Apri il test sul telefono, tocca Avvia Calibrazione, consenti l\'accesso al movimento se richiesto, poi ruota e inclina il dispositivo. Un giroscopio e un sensore di orientamento funzionanti dovrebbero aggiornare alpha, beta e gamma in modo fluido senza bloccarsi o saltare bruscamente.',
  },
  {
    question: 'Posso testare l\'accelerometro con una livella a bolla?',
    answer: 'Sì. Appoggia il telefono su un tavolo piatto dopo aver avviato il test. La bolla dovrebbe stabilizzarsi vicino al centro e i valori di accelerazione devono rimanere stabili. Se la bolla deriva molto mentre il telefono è fermo, l\'accelerometro potrebbe aver bisogno di calibrazione oppure la custodia, il tavolo o l\'hardware del dispositivo potrebbero interferire.',
  },
  {
    question: 'Perché l\'iPhone chiede il permesso di movimento?',
    answer: 'Safari su iPhone e iPad richiede un tocco prima che i siti web possano accedere ai sensori di movimento e orientamento. Se il permesso viene negato, il test non può leggere i dati del giroscopio o dell\'accelerometro finché non consenti l\'accesso al movimento.',
  },
  {
    question: 'Questo può riparare o calibrare una bussola rotta?',
    answer: 'Nessuno strumento browser può riparare l\'hardware o forzare la calibrazione della bussola di sistema. Questo test ti aiuta a identificare i sintomi: letture bloccate, movimento rumoroso, deriva, permessi mancanti o un browser che non espone i sensori.',
  },
];

const howToData = [
  { name: 'Apri il test sul tuo telefono', text: 'Usa lo stesso iPhone, iPad, telefono Android o tablet che vuoi diagnosticare. I browser desktop di solito non espongono sensori di movimento.' },
  { name: 'Consenti l\'accesso al movimento', text: 'Tocca Avvia Calibrazione e accetta la richiesta di permesso di movimento o orientamento se il browser la mostra.' },
  { name: 'Testa inclinazione e rotazione', text: 'Inclina il telefono in avanti, ruotalo a sinistra e a destra, poi ruotalo in piano su un tavolo. Osserva cambiamenti fluidi di alpha, beta, gamma e accelerazione.' },
  { name: 'Verifica la deriva su una superficie piana', text: 'Lascia il telefono fermo per diversi secondi. Un sensore sano dovrebbe stabilizzarsi invece di vagare costantemente, dare picchi o bloccarsi.' },
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

export const content: ToolLocaleContent<MobileSensorTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Test online del giroscopio e accelerometro per telefoni', level: 2 },
    {
      type: 'paragraph',
      html: 'Usa questo test dei sensori mobili quando la rotazione dello schermo sembra sbagliata, i giochi o le app AR derivano, un\'app di livella a bolla sembra imprecisa, la navigazione punta nella direzione sbagliata o il telefono non reagisce correttamente all\'inclinazione. Il test mostra in tempo reale il comportamento di giroscopio, accelerometro, rotazione e livella per aiutarti a distinguere un problema di permessi del browser da un vero problema del sensore o di calibrazione.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Intento di ricerca principale', value: 'testare il giroscopio online' },
        { label: 'Controlla anche', value: 'deriva dell\'accelerometro' },
        { label: 'Miglior dispositivo', value: 'telefono o tablet' },
      ],
    },
    { type: 'title', text: 'Cosa ti dice ogni lettura del sensore', level: 3 },
    {
      type: 'table',
      headers: ['Lettura', 'Utile per', 'Segnali di allarme'],
      rows: [
        ['Alpha', 'Verificare la rotazione attorno all\'asse verticale, utile per movimenti tipo bussola e cambi di direzione.', 'Non cambia ruotando il telefono in piano, salta di grandi quantità o si blocca a zero.'],
        ['Beta', 'Verificare l\'inclinazione avanti-indietro per la rotazione dello schermo, i giochi, il livellamento della fotocamera e i controlli AR.', 'Si muove nella direzione sbagliata, si blocca su un valore o continua a derivare mentre il telefono è fermo.'],
        ['Gamma', 'Verificare il rollio sinistra-destra per la rotazione orizzontale, i giochi di corsa, le app di livella e gli stabilizzatori.', 'Un lato risponde in modo diverso, i valori sono rumorosi o la bolla non si centra mai su un tavolo piatto.'],
        ['Accelerazione X/Y/Z', 'Verificare la risposta dell\'accelerometro, il rilevamento delle scosse, la direzione della gravità e la stabilità del movimento.', 'Grandi picchi da fermo, nessuna risposta al movimento o letture instabili dopo aver rimosso la custodia.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Sintomi che questo test aiuta a diagnosticare',
      html: '<p>Usa i valori in tempo reale per indagare la rotazione automatica non funzionante, un giroscopio che sembra in ritardo, la deriva dell\'accelerometro, gli avvisi di calibrazione della bussola, il tracciamento AR che scivola via, gli errori di livello della fotocamera, i controlli di movimento che tirano da un lato o un telefono che segnala il movimento solo nelle app native ma non nel browser.</p>',
    },
    { type: 'title', text: 'Giroscopio vs accelerometro vs bussola', level: 3 },
    {
      type: 'comparative',
      items: [
        { title: 'Giroscopio', description: 'Misura la velocità di rotazione. È fondamentale per AR, giochi, stabilizzazione della fotocamera, controlli di movimento e cambi fluidi di orientamento.' },
        { title: 'Accelerometro', description: 'Misura l\'accelerazione e la direzione della gravità. Alimenta inclinazione, rilevamento scosse, conteggio passi e il comportamento della livella a bolla digitale.' },
        { title: 'Bussola / magnetometro', description: 'Aiuta a stimare la direzione, ma può essere disturbato da magneti, oggetti metallici, supporti per auto, custodie, altoparlanti, laptop ed elettronica vicina.' },
      ],
    },
    { type: 'title', text: 'Come testare correttamente la calibrazione del sensore', level: 3 },
    {
      type: 'list',
      items: [
        'Rimuovi custodie magnetiche, portafogli MagSafe, supporti metallici, clip per controller e accessori prima del test.',
        'Appoggia il telefono su un tavolo solido e piano e attendi alcuni secondi prima di giudicare la deriva.',
        'Ruota il telefono lentamente su ciascun asse invece di scuoterlo subito.',
        'Confronta Safari o Chrome con un\'app nativa di sensori o bussola se il browser non mostra dati.',
        'Riavvia il dispositivo e ripeti il test se le letture sono bloccate in più app.',
      ],
    },
    {
      type: 'tip',
      title: 'Nota sui permessi di iPhone e Android',
      html: 'Su iPhone e iPad, Safari potrebbe chiedere il permesso di movimento e orientamento dopo un tocco. Su Android, Chrome di solito espone i sensori di movimento in modo più diretto, ma le impostazioni sulla privacy, i flag del browser, le modalità di risparmio energetico e le webview incorporate possono comunque bloccare o ridurre i dati del sensore.',
    },
    {
      type: 'table',
      headers: ['Problema', 'Causa probabile', 'Prossimo passo'],
      rows: [
        ['Nessun valore cambia', 'Permesso negato, browser non supportato, dispositivo desktop o webview limitata.', 'Apri sul telefono stesso, usa Safari o Chrome, consenti l\'accesso al movimento e ricarica la pagina.'],
        ['La bolla deriva su un tavolo', 'Problema di calibrazione, superficie irregolare, interferenza della custodia o rumore dell\'accelerometro.', 'Rimuovi la custodia, usa una superficie piana nota, riavvia e confronta con un\'app di livella nativa.'],
        ['La direzione della bussola è sbagliata', 'Interferenza magnetica o calibrazione della bussola di sistema.', 'Allontanati da metalli ed elettronica e usa il flusso di calibrazione della bussola del sistema operativo.'],
        ['I valori saltano o danno picchi', 'Rumore del sensore, hardware danneggiato, limitazione aggressiva del browser o movimento fisico improvviso.', 'Testa da fermo, chiudi le app pesanti e confronta con un altro browser o un\'app nativa.'],
      ],
    },
    {
      type: 'summary',
      title: 'A cosa serve questo test',
      items: [
        'Testare il giroscopio di un telefono online senza installare un\'app.',
        'Verificare la deriva dell\'accelerometro con una livella a bolla in tempo reale.',
        'Scoprire se i controlli di movimento falliscono per hardware, calibrazione, permessi o supporto del browser.',
        'Preparare un telefono per AR, giochi, livellamento fotocamera, navigazione o risoluzione dei problemi di rotazione dello schermo.',
      ],
    },
  ],
  ui: {
    startButton: 'Avvia Calibrazione',
    permissionHint: 'Tocca una volta per sbloccare i sensori di movimento',
    privacyBadge: 'Dati sensore locali',
    privacyCopy: 'Le letture di orientamento e movimento rimangono all\'interno di questa sessione del browser.',
    orientationPanel: 'Orientamento',
    motionPanel: 'Movimento',
    bubblePanel: 'Livella a bolla digitale',
    statusReady: 'Pronto per il permesso del sensore',
    statusWaiting: 'In attesa del permesso del browser',
    statusDenied: 'Accesso al sensore negato o non disponibile',
    statusUnsupported: 'I sensori di movimento non sono esposti da questo browser',
    statusActive: 'Flusso sensori in tempo reale attivo',
    steadyLabel: 'Fermo',
    movingLabel: 'In movimento',
    shakingLabel: 'Scuotimento',
    alphaLabel: 'Alpha',
    betaLabel: 'Beta',
    gammaLabel: 'Gamma',
    accelXLabel: 'X',
    accelYLabel: 'Y',
    accelZLabel: 'Z',
    rotationAlphaLabel: 'Rot A',
    rotationBetaLabel: 'Rot B',
    rotationGammaLabel: 'Rot G',
    levelOffsetLabel: 'Scostamento livello',
    motionMagnitudeLabel: 'Magnitudo movimento',
    cubeLabel: 'Cubo 3D orientamento dispositivo',
    bubbleLabel: 'Indicatore livella a bolla',
    calibrationLabel: 'Gradi in tempo reale',
  },
};
