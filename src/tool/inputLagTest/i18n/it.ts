import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-latenza-input-lag';

const title = 'Test Input Lag e Latenza di Sistema';
const description = 'Strumento online per la misurazione di input lag e latenza dello schermo mediante sincronizzazione del buffer di rendering.';

const faqData = [
  {
    question: 'Cos e l input lag?',
    answer: 'È il tempo trascorso tra un azione fisica dell utente e l aggiornamento visivo dello schermo.',
  },
  { question: 'Quale latenza è buona per giocare?', answer: 'Sotto 10 ms è molto rapida. Da 10 a 20 ms è rapida, da 20 a 35 ms è moderata e oltre diventa percepibile.' },
  { question: 'Come posso ridurre la latenza?', answer: 'Controlla frequenza dello schermo, VSync, VRR e polling USB, cambiando una sola impostazione prima di misurare di nuovo.' },
  { question: 'La frequenza dello schermo cambia il ritardo?', answer: 'Sì. A 60 Hz un frame dura 16.67 ms, mentre a 240 Hz dura 4.17 ms. Anche rendering e pannello aggiungono ritardo.' },
  { question: 'Perché è utile osservare il jitter?', answer: 'Indica quanto variano le misure. Un valore leggermente maggiore ma stabile può risultare migliore di una media bassa con picchi.' },
];

const howToData = [
  {
    name: 'Seleziona modalità',
    text: 'Scegli Risposta Istantanea, Latenza Tastiera o Reazione Visiva.',
  },
  { name: 'Esegui gli input', text: 'Fai clic nell area di prova o premi i tasti per generare eventi.' },
  { name: 'Controlla le statistiche', text: 'Leggi media, minimo, massimo e jitter dopo diversi tentativi.' },
  { name: 'Ripeti il confronto', text: 'Misura di nuovo dopo ogni modifica mantenendo le stesse condizioni.' },
  { name: 'Considera i limiti', text: 'Usa il risultato per confrontare configurazioni e non come misura ottica assoluta.' },
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

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Latenza Sistema',
  modeInstant: 'Risposta Istantanea',
  modeKey: 'Latenza Tastiera',
  modeVisual: 'Reazione Visiva',
  targetClickPrompt: 'Clicca qui per misurare la latenza di input',
  targetKeyPrompt: 'Premi un tasto per la latenza della tastiera',
  targetWaitPrompt: 'Attendi lo sfondo verde...',
  targetNowPrompt: 'CLICCA ORA!',
  labelAvgLatency: 'Latenza Media',
  labelMinLatency: 'Latenza Minima',
  labelMaxLatency: 'Latenza Massima',
  labelJitter: 'Jitter (Deviazione)',
  labelFps: 'FPS Attuali',
  labelFrameTime: 'Tempo Frame',
  labelSamples: 'Campioni',
  labelGrade: 'Valutazione',
  gradeUltraFast: 'Ultra Rapido (<10ms)',
  gradeFast: 'Rapido (10-20ms)',
  gradeModerate: 'Moderato (20-35ms)',
  gradeHigh: 'Alto (>35ms)',
  btnReset: 'Ripristina',
  btnCopyReport: 'Copia Report',
  reportCopied: 'Report Copiato!',
  historyTitle: 'Misurazioni Recenti',
  pipelineTitle: 'Analisi della Pipeline Hardware',
  distributionTitle: 'Distribuzione delle Frequenze',
  sampleCol: 'Campione',
  typeCol: 'Tipo Input',
  latencyCol: 'Latenza Misurata',
};

export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: 'Test della Latenza di Input del Sistema',
    },
    {
      type: 'paragraph',
      html: 'Valuta la reattività del tuo hardware e schermo in tempo reale.',
    },
    { type: 'stats', items: [
      { value: '< 10 ms', label: 'Obiettivo esport', trend: 'Riferimento competitivo' },
      { value: '1000 Hz', label: 'Polling USB comune', trend: 'Intervallo di 1 ms' },
      { value: '240 Hz', label: 'Monitor ad alta frequenza', trend: 'Un frame ogni 4.16 ms' },
      { value: '16.6 ms', label: 'Intervallo a 60 Hz', trend: 'Base per frame' },
    ], columns: 4 },
    { type: 'card', title: 'Come funziona la misurazione nel browser', html: 'Il test confronta gli eventi pointerdown e keydown con gli aggiornamenti requestAnimationFrame. In questo modo stima il ritardo locale tra il rilevamento dell input e il ridisegno della pagina.' },
    { type: 'title', text: 'Come attraversa il sistema il segnale di latenza' },
    { type: 'paragraph', html: 'La latenza totale si accumula dall attivazione della periferica fino al pixel visibile. Separare le fasi permette di capire se il ritardo nasce dal dispositivo, dal sistema operativo, dal rendering o dallo schermo.' },
    { type: 'table', headers: ['Componente', 'Intervallo comune', 'Collo di bottiglia', 'Possibile intervento'], rows: [
      ['Interruttore', '0.2 a 5.0 ms', 'Rimbalzo meccanico', 'Ridurre il debounce'],
      ['Polling USB', '0.125 a 8.0 ms', 'Frequenza bassa', 'Aumentare la frequenza disponibile'],
      ['Coda del sistema', '0.5 a 3.0 ms', 'Attività in background', 'Chiudere i processi inutili'],
      ['Motore grafico', '4.0 a 20.0 ms', 'Frame limitati dalla CPU', 'Ridurre il carico di rendering'],
      ['Coda GPU', '8.0 a 33.0 ms', 'VSync e buffer multipli', 'Confrontare VSync e VRR'],
      ['Elaborazione dello schermo', '1.0 a 15.0 ms', 'Ridimensionamento', 'Attivare la modalità gioco'],
    ] },
    { type: 'tip', title: 'Ridurre la coda di rendering della GPU', html: 'Una GPU satura può preparare diversi frame in anticipo. Un limite leggermente inferiore al massimo e una prova con Reflex o Anti Lag possono diminuire l attesa.' },
    { type: 'title', text: 'Confrontare le periferiche di input' },
    { type: 'paragraph', html: 'Mouse, tastiere e schermi tattili hanno latenze diverse per via della connessione, dell elettronica e della frequenza di scansione. Usa lo stesso schermo e le stesse impostazioni durante il confronto.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Mouse da gioco', description: 'Collegamento cablato o wireless ad alta frequenza.', highlight: '0.5 a 2 ms', points: ['Polling a 1000 Hz o superiore', 'Interruttori ottici', 'Sensore con elaborazione rapida'] },
      { title: 'Tastiere meccaniche', description: 'Matrice dei tasti con debounce regolabile.', highlight: '1 a 10 ms', points: ['Interruttori magnetici', 'Scansione della matrice configurabile', 'Distanza di attivazione regolabile'] },
      { title: 'Schermi tattili', description: 'Digitalizzatore capacitivo sovrapposto al pannello.', highlight: '15 a 45 ms', points: ['Frequenza di campionamento tattile', 'Elaborazione del controller', 'Filtri contro i tocchi accidentali'] },
    ] },
    { type: 'title', text: 'Capire il ritardo aggiunto dalla frequenza dello schermo' },
    { type: 'paragraph', html: 'La frequenza di aggiornamento stabilisce l intervallo minimo tra due immagini. Uno schermo a 60 Hz mostra l input più lentamente di uno a 240 Hz, ma anche il rendering e la sincronizzazione influiscono sul risultato.' },
    { type: 'list', items: ['60 Hz equivale a 16.67 ms per frame', '120 Hz equivale a 8.33 ms per frame', '144 Hz equivale a 6.94 ms per frame', '240 Hz equivale a 4.17 ms per frame', '360 Hz equivale a 2.78 ms per frame', '540 Hz equivale a 1.85 ms per frame'] },
    { type: 'glossary', items: [
      { term: 'Input lag', definition: 'Tempo tra l azione fisica e il risultato visibile sullo schermo.' },
      { term: 'Jitter', definition: 'Variazione tra le misurazioni che indica la stabilità del sistema.' },
      { term: 'VSync', definition: 'Sincronizzazione verticale che può ridurre il tearing ma aggiungere attesa.' },
      { term: 'VRR', definition: 'Frequenza variabile che adatta lo schermo all uscita della GPU.' },
      { term: 'Tempo del pixel', definition: 'Tempo necessario a un pixel per cambiare tonalità.' },
    ] },
    { type: 'title', text: 'Vantaggi e limiti della misurazione nel browser' },
    { type: 'paragraph', html: 'La prova consente di confrontare le impostazioni senza oscilloscopio o telecamera rapida. Non osserva direttamente tutti i ritardi interni del driver, del gioco o dell emissione ottica del pannello.' },
    { type: 'proscons', title: 'Valutazione della misurazione web', items: [
      { pro: 'Accessibile senza strumenti speciali', con: 'Dipende dal ciclo degli eventi del browser' },
      { pro: 'Confronto rapido tra periferiche', con: 'Non misura direttamente la risposta del pixel' },
      { pro: 'Timer locale ad alta risoluzione', con: 'Il browser può ridurre la precisione' },
      { pro: 'Mostra la regolarità degli aggiornamenti', con: 'Una scheda inattiva può essere rallentata' },
    ] },
    { type: 'title', text: 'Diagnosticare una latenza elevata' },
    { type: 'paragraph', html: 'Se la media supera 30 ms o il jitter è alto, ripeti la serie con la finestra attiva e controlla VSync, accelerazione grafica, polling USB e attività della CPU.' },
    { type: 'diagnostic', variant: 'warning', title: 'Avviso per la diagnosi della latenza', html: 'Una media oltre 35 ms su un computer desktop richiede un controllo della modalità schermo e dell accelerazione hardware. Cambia una sola impostazione alla volta.' },
    { type: 'title', text: 'Ridurre la latenza passo dopo passo' },
    { type: 'paragraph', html: 'Regola separatamente periferica, schermo e sistema. Dopo ogni modifica raccogli nuovi campioni nelle stesse condizioni per confermare che il miglioramento sia reale.' },
    { type: 'summary', title: 'Lista di controllo per ottimizzare la latenza', items: ['Scegliere un polling USB adeguato', 'Attivare la modalità gioco dello schermo', 'Disattivare filtri immagine inutili', 'Confrontare VSync e VRR', 'Mantenere stabile la frequenza dei frame', 'Chiudere le attività pesanti in background', 'Ripetere la misura dopo ogni modifica'] },
    { type: 'message', title: 'Buona pratica per confrontare i risultati', html: 'Chiudi le applicazioni in background, mantieni attiva la finestra del test e raccogli almeno 15 campioni. Considera mediana, media e jitter perché un singolo dato può essere casuale.' },
  ],
};
