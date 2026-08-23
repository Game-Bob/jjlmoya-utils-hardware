import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-ritardo-input-lag';
const title = 'Test Ritardo di Input (Input Lag) e Latenza';
const description = 'Strumento di misurazione online del ritardo di input hardware e della latenza di sistema con temporizzazione ad alta precisione e sincronizzazione dello schermo.';

const faqData = [
  {
    question: 'Che cos è l input lag e la latenza di sistema?',
    answer: 'L input lag è il ritardo totale tra un azione fisica dell utente (fare clic con il mouse o premere un tasto) e l aggiornamento visivo corrispondente sullo schermo.',
  },
  {
    question: 'Come misura l input lag questo test online?',
    answer: 'Cattura le marche temporali degli eventi hardware utilizzando performance.now() e le correla con i successivi cicli di rendering requestAnimationFrame.',
  },
  {
    question: 'Qual è un buon valore di input lag per i videogiochi?',
    answer: 'Meno di 10 ms è considerato ultra-veloce per l esport agonistico. Da 10 ms a 20 ms è veloce, da 20 ms a 35 ms è moderato e oltre 35 ms è un ritardo percepibile.',
  },
  {
    question: 'Come posso ridurre l input lag sul mio PC?',
    answer: 'Aumenta la frequenza di aggiornamento del monitor, disattiva il VSync, attiva G-Sync o FreeSync, porta la frequenza di polling USB del mouse a 1000 Hz o più e attiva NVIDIA Reflex.',
  },
  {
    question: 'La frequenza di aggiornamento dello schermo influisce sull input lag?',
    answer: 'Sì. Frequenze di aggiornamento più elevate riducono la durata del singolo fotogramma. Uno schermo a 60 Hz ha una durata del fotogramma di 16.67 ms, mentre uno a 240 Hz ha una durata di soli 4.17 ms.',
  },
];

const howToData = [
  {
    name: 'Scegliere la modalità di test',
    text: 'Seleziona Risposta Istantanea, Latenza Tasto o Latenza di Reazione Visiva.',
  },
  {
    name: 'Eseguire azioni fisiche',
    text: 'Fai clic all interno dell area di test o premi i tasti per generare eventi hardware.',
  },
  {
    name: 'Osservare le metriche in tempo reale',
    text: 'Esamina i valori calcolati di latenza media, minima, massima e la variazione (jitter).',
  },
  {
    name: 'Verificare la sincronizzazione dei fotogrammi',
    text: 'Controlla i FPS attuali e la durata del fotogramma per verificare la stabilità dello schermo.',
  },
  {
    name: 'Analizzare la cronologia delle misurazioni',
    text: 'Esamina lo storico dei campioni per identificare eventuali picchi di latenza.',
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

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Latenza di Sistema',
  modeInstant: 'Risposta Istantanea',
  modeKey: 'Latenza Tasto',
  modeVisual: 'Latenza di Reazione Visiva',
  targetClickPrompt: 'Fai clic o tocca all interno di questo riquadro per misurare la latenza',
  targetKeyPrompt: 'Premi un tasto qualsiasi (o Spazio) per misurare la latenza della tastiera',
  targetWaitPrompt: 'Attendi lo sfondo verde...',
  targetNowPrompt: 'FAI CLIC ORA!',
  labelAvgLatency: 'Latenza Media',
  labelMinLatency: 'Latenza Minima',
  labelMaxLatency: 'Latenza Massima',
  labelJitter: 'Jitter di Latenza (Dev. Std.)',
  labelFps: 'FPS Attuali',
  labelFrameTime: 'Tempo Fotogramma',
  labelSamples: 'Campioni',
  labelGrade: 'Valutazione Latenza',
  gradeUltraFast: 'Ultra Veloce (<10ms)',
  gradeFast: 'Veloce (10-20ms)',
  gradeModerate: 'Moderata (20-35ms)',
  gradeHigh: 'Elevata (>35ms)',
  btnReset: 'Azzera Misurazioni',
  btnCopyReport: 'Copia Report Benchmark',
  reportCopied: 'Report Copiato!',
  historyTitle: 'Misurazioni di Latenza Recenti',
  pipelineTitle: 'Analisi del Percorso del Segnale Hardware',
  distributionTitle: 'Distribuzione delle Frequenze di Latenza',
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
      text: 'Cos è l Input Lag e la Latenza di Sistema nel Gaming su PC?',
    },
    {
      type: 'paragraph',
      html: 'L input lag rappresenta il tempo esatto che intercorre tra l azione fisica dell utente (come il clic del mouse o la pressione di un tasto) e la risposta visiva sullo schermo. Negli e-sport agonistici e nei giochi d azione, ridurre la latenza è fondamentale per la precisione di mira e la reattività. La latenza totale del sistema è la somma del polling USB delle periferiche, dell elaborazione del sistema operativo, del rendering del gioco, dei buffer della scheda video e del tempo di risposta del monitor.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '< 10 ms',
          label: 'Obiettivo Esport',
          trend: 'Valore ottimale',
        },
        {
          value: '1000 Hz',
          label: 'Polling Rate USB Standard',
          trend: 'Intervallo 1.0 ms',
        },
        {
          value: '240 Hz',
          label: 'Monitor ad Alta Frequenza',
          trend: 'Durata fotogramma 4.16 ms',
        },
        {
          value: '16.6 ms',
          label: 'Durata Fotogramma 60Hz',
          trend: 'Ritardo base dello schermo',
        },
      ],
      columns: 4,
    },
    {
      type: 'card',
      title: 'Come Funziona la Misurazione della Latenza nel Browser?',
      html: 'Questo test utilizza marcatori temporali ad alta precisione tramite <code>performance.now()</code> associati agli eventi DOM (<code>pointerdown</code> e <code>keydown</code>). Sincronizzando la registrazione degli eventi con i cicli di rendering dello schermo tramite <code>requestAnimationFrame</code>, lo strumento calcola il ritardo locale tra l azione fisica e il rendering visivo direttamente nel browser.',
    },
    {
      type: 'title',
      text: 'Il Percorso del Segnale dal Tasto allo Schermo',
    },
    {
      type: 'paragraph',
      html: 'Per diagnosticare e ridurre il ritardo di input, è necessario comprendere ogni passaggio della catena del segnale. La latenza totale del sistema è la somma della latenza delle periferiche, del sistema operativo, della pipeline di rendering e del pannello del monitor.',
    },
    {
      type: 'table',
      headers: ['Componente', 'Ritardo Tipico', 'Causa Principale', 'Strategia di Ottimizzazione'],
      rows: [
        ['Interruttore Periferica', '0.2 ms - 5.0 ms', 'Algoritmi di debounce meccanico', 'Utilizzare interruttori ottici'],
        ['Frequenza Polling USB', '0.125 ms - 8.0 ms', '125 Hz vs 1000 Hz / 8000 Hz', 'Aumentare il polling rate a 1000Hz+'],
        ['Coda Eventi del SO', '0.5 ms - 3.0 ms', 'Attività in background del SO', 'Attivare la Modalità Gioco di Windows'],
        ['Engine di Rendering', '4.0 ms - 20.0 ms', 'Carico elevato sulla CPU', 'Usare NVIDIA Reflex / AMD Anti-Lag'],
        ['Buffer Scheda Video', '8.0 ms - 33.0 ms', 'VSync attivo, buffer multipli', 'Disattivare il VSync, usare il VRR'],
        ['Elaborazione Schermo', '1.0 ms - 15.0 ms', 'Processori di immagine TV/Monitor', 'Attivare la Modalità Gioco sul monitor/TV'],
      ],
    },
    {
      type: 'tip',
      title: 'Come Ridurre la Latenza della Coda GPU sotto Carico Elevato?',
      html: 'Quando la scheda video lavora al 99% di utilizzo, i driver grafici accumulano diversi fotogrammi in anticipo. Ciò crea un ritardo di input significativo (spesso da 30 ms a 50 ms). Limita leggermente la frequenza dei fotogrammi al di sotto del massimo o attiva NVIDIA Reflex.',
    },
    {
      type: 'title',
      text: 'Confronto della Latenza tra Mouse, Tastiere e Schermi Tattili',
    },
    {
      type: 'paragraph',
      html: 'I diversi dispositivi di input presentano caratteristiche di latenza differenti in base alla loro architettura hardware.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Mouse da Gioco',
          description: 'Connessione wireless a 2.4GHz o cablata ad alta velocità.',
          highlight: 'Latenza 0.5ms - 2ms',
          points: [
            'Polling rate da 1000Hz a 8000Hz',
            'Interruttori ottici senza ritardo di debounce',
            'Sensori a bassissima latenza di movimento',
          ],
        },
        {
          title: 'Tastiere Meccaniche',
          description: 'Scansione della matrice con controllo del debounce.',
          highlight: 'Latenza 1ms - 10ms',
          points: [
            'Interruttori magnetici a effetto Hall (Rapid Trigger)',
            'Frequenza di scansione fino a 8000Hz',
            'Punto di attuazione regolabile',
          ],
        },
        {
          title: 'Schermi Tattili Mobile',
          description: 'Campionamento capacitivo sui dispositivi mobili.',
          highlight: 'Latenza 15ms - 45ms',
          points: [
            'Frequenza di campionamento touch (120Hz - 480Hz)',
            'Ritardo di composizione del sistema operativo',
            'Algoritmi di filtraggio capacitivo',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Impatto della Frequenza di Aggiornamento del Monitor sulla Latenza',
    },
    {
      type: 'paragraph',
      html: 'La frequenza di aggiornamento del monitor stabilisce il limite minimo di latenza visiva possibile.',
    },
    {
      type: 'list',
      items: [
        'Schermo a 60 Hz: 1 fotogramma = 16.67 ms di durata (Latenza media: ~8.33 ms)',
        'Schermo a 120 Hz: 1 fotogramma = 8.33 ms di durata (Latenza media: ~4.16 ms)',
        'Schermo a 144 Hz: 1 fotogramma = 6.94 ms di durata (Latenza media: ~3.47 ms)',
        'Schermo a 240 Hz: 1 fotogramma = 4.17 ms di durata (Latenza media: ~2.08 ms)',
        'Schermo a 360 Hz: 1 fotogramma = 2.78 ms di durata (Latenza media: ~1.39 ms)',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Input Lag',
          definition: 'Tempo totale trascorso dall azione fisica dell utente all aggiornamento visivo sullo schermo.',
        },
        {
          term: 'Jitter (Variazione della Latenza)',
          definition: 'La deviazione standard delle misurazioni che indica la costanza della risposta del sistema.',
        },
        {
          term: 'VSync (Sincronizzazione Verticale)',
          definition: 'Evita il tearing delle immagini ma aumenta notevolmente il ritardo di input.',
        },
        {
          term: 'Variable Refresh Rate (VRR)',
          definition: 'Tecnologie come G-Sync e FreeSync che adattano la frequenza dello schermo alla scheda video.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Vantaggi e Limiti della Misurazione della Latenza nel Browser',
    },
    {
      type: 'paragraph',
      html: 'Misurare la latenza all interno del browser offre un accesso immediato senza richiedere strumenti di laboratorio.',
    },
    {
      type: 'proscons',
      title: 'Valutazione del Test nel Browser',
      items: [
        {
          pro: 'Nessun software o hardware speciale richiesto',
          con: 'Soggetto al ciclo degli eventi del browser e alla gestione finestre del sistema operativo',
        },
        {
          pro: 'Timer ad alta risoluzione con precisione al microsecondo (performance.now)',
          con: 'Non misura direttamente il tempo di risposta ottico dei pixel dello schermo',
        },
        {
          pro: 'Confronto immediato tra periferiche e browser differenti',
          con: 'Mitigazione di sicurezza sulla precisione dei timer del browser',
        },
      ],
    },
    {
      type: 'title',
      text: 'Diagnosi in Caso di Input Lag Elevato',
    },
    {
      type: 'paragraph',
      html: 'Se i tuoi risultati mostrano una latenza elevata (>30 ms), verifica le impostazioni indicate di seguito.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Avviso di Latenza Elevata',
      html: 'Se la latenza media supera i 35 ms, controlla se il VSync è attivo nel pannello di controllo della scheda video. Anche un accelerazione hardware disattivata nel browser può causare notevoli ritardi.',
    },
    {
      type: 'title',
      text: 'Passaggi per Ottimizzare la Latenza di Sistema',
    },
    {
      type: 'paragraph',
      html: 'Segui questi passaggi per ridurre il ritardo di risposta del tuo sistema.',
    },
    {
      type: 'summary',
      title: 'Checklist per l Ottimizzazione della Latenza',
      items: [
        'Imposta la frequenza di polling USB del mouse a 1000Hz o superiore nel software del produttore.',
        'Attiva la Pianificazione GPU con accelerazione hardware nelle impostazioni di Windows.',
        'Attiva la Modalità Gioco sulle impostazioni del monitor o TV per evitare elaborazioni d immagine.',
        'Disattiva il VSync globale e utilizza G-Sync o FreeSync.',
        'Attiva NVIDIA Reflex o AMD Anti-Lag nei giochi supportati.',
        'Assicurati che l accelerazione hardware del browser sia attiva.',
      ],
    },
    {
      type: 'message',
      title: 'Consiglio per Misurazioni Attendibili',
      html: 'Per ottenere la massima precisione, chiudi le applicazioni in background, apri il browser a schermo intero ed esegui almeno 15-20 misurazioni.',
    },
  ],
};
