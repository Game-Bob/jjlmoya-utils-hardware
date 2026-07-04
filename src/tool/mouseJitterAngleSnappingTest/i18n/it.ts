import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseJitterAngleSnappingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-tremolio-angolo-mouse';
const title = 'Test di Tremolio e Correzione dell\'Angolo del Mouse';
const description =
  'Disegna tracce grezze del mouse online per rilevare tremolio del sensore, tracciamento instabile e correzione dell\'angolo o predizione che rende il movimento artificialmente dritto.';

const faqData = [
  {
    question: 'Cos\'è il tremolio del mouse?',
    answer:
      'Il tremolio del mouse è uno scuotimento o movimento rumoroso indesiderato nel percorso del cursore anche quando la mano si muove in modo fluido. Può derivare da una finestra del sensore sporca, una superficie scadente, comportamento di sollevamento alto, rumore elettrico, instabilità wireless o un sensore che fatica al DPI selezionato.',
  },
  {
    question: 'Cos\'è la correzione dell\'angolo?',
    answer:
      'La correzione dell\'angolo, a volte chiamata predizione, è una funzione di correzione in cui il firmware del mouse cerca di trasformare il movimento umano leggermente imperfetto in linee orizzontali, verticali o diagonali più dritte. Ad alcuni utenti da ufficio piace, ma molti giocatori e artisti preferiscono il movimento grezzo senza predizione.',
  },
  {
    question: 'Questo test può dimostrare che il sensore del mio mouse è difettoso?',
    answer:
      'Non può ispezionare il sensore elettricamente, ma mostra il percorso di movimento che il tuo browser riceve. Se passaggi fluidi ripetuti creano punti rumorosi, deviazioni improvvise o segmenti innaturalmente dritti, il risultato è una prova utile per la risoluzione dei problemi del mouse, superficie, DPI, connessione wireless o impostazioni del firmware.',
  },
  {
    question: 'Come dovrei disegnare per il risultato più affidabile?',
    answer:
      'Disegna linee diagonali lente, curve a velocità media e lunghi passaggi orizzontali. Testa lo stesso movimento più volte. Il tremolio è più facile da vedere nelle linee lente controllate, mentre la correzione dell\'angolo è più facile da individuare quando il movimento diagonale diventa sospettosamente dritto o a gradini.',
  },
];

const howToData = [
  {
    name: 'Pulisci il sensore e il tappetino del mouse',
    text: 'Prima di testare, rimuovi polvere o peli dalla finestra del sensore e usa un tappetino stabile o una superficie della scrivania.',
  },
  {
    name: 'Disegna linee diagonali lente',
    text: 'Tieni premuto il pulsante principale del mouse e disegna diversi tratti diagonali. Un sensore grezzo dovrebbe mostrare la variazione naturale della mano, non una linea forzata perfettamente su un solo angolo.',
  },
  {
    name: 'Disegna curve morbide',
    text: 'Fai cerchi, curve a S e archi. Il tremolio appare come punti ruvidi e rumorosi che saltano fuori dalla curva desiderata.',
  },
  {
    name: 'Confronta DPI e impostazioni della superficie',
    text: 'Ripeti lo stesso movimento a diversi livelli di DPI, frequenze di polling, impostazioni di sollevamento e superfici per trovare quando appare il problema.',
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

export const content: ToolLocaleContent<MouseJitterAngleSnappingTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Test di Tremolio del Mouse Online: Verifica Rumore del Sensore e Correzione dell\'Angolo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un buon sensore del mouse dovrebbe seguire la tua mano senza aggiungere rumore visibile o correggere segretamente il percorso. Quando il sensore è sporco, la superficie è difficile da tracciare, il DPI è troppo alto per l\'hardware o il firmware applica la predizione, il percorso del cursore può smettere di risultare naturale. Questo test di tremolio del mouse ti permette di disegnare tracce grezze e ispezionare i singoli punti di lettura in modo che i problemi del sensore diventino visibili anziché vaghi.',
    },
    {
      type: 'paragraph',
      html: 'Il modo più utile per testare è semplice: disegna linee e curve controllate, poi guarda la forma della traccia. Un sensore grezzo sano produce un percorso che segue il tuo movimento con piccole imperfezioni umane. Un sensore rumoroso produce punti ruvidi, piccole punte e oscillazioni irregolari. Un mouse con correzione dell\'angolo o predizione può far sembrare il movimento diagonale o orizzontale innaturalmente dritto, come se il firmware stesse correggendo la tua mano.',
    },
    {
      type: 'title',
      text: 'Che aspetto ha il tremolio del mouse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il tremolio del mouse non è lo stesso del normale tremore della mano. Tutti disegnano linee leggermente imperfette. Il tremolio diventa sospetto quando i punti saltano fuori dalla direzione del movimento anche se la mano si muove lentamente e costantemente. Appare spesso come un bordo sfocato intorno a una linea, piccole punte laterali o una traccia che sembra graffiata invece che liscia.',
    },
    {
      type: 'table',
      headers: ['Schema della traccia', 'Probabile significato', 'Cosa provare dopo'],
      rows: [
        ['Piccole punte casuali durante linee lente', 'Rumore del sensore, sporco o problema di tracciamento della superficie', 'Pulisci la finestra del sensore e prova un tappetino diverso'],
        ['Tremolio solo a DPI alto', 'Il sensore o il firmware fatica a quella sensibilità', 'Riprova a 400, 800, 1600 e 3200 DPI'],
        ['Movimento ruvido solo in modalità wireless', 'Batteria, distanza del ricevitore o interferenza', 'Avvicina il ricevitore e prova con una batteria nuova'],
        ['Rumore vicino al sollevamento o inclinando il mouse', 'Distanza di sollevamento o contatto irregolare con la superficie', 'Tieni il mouse piatto e riduci la distanza di sollevamento se disponibile'],
        ['Tremolio su una scrivania ma non su un\'altra', 'Problema di texture o riflettività della superficie', 'Usa un tappetino opaco progettato per sensori ottici'],
      ],
    },
    {
      type: 'title',
      text: 'Che aspetto ha la correzione dell\'angolo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La correzione dell\'angolo è diversa dal tremolio. Invece di aggiungere rumore, rimuove la variazione naturale. Se disegni una linea diagonale a mano, un sensore grezzo dovrebbe preservare piccole deviazioni umane. Con la correzione dell\'angolo attivata, la linea può bloccarsi in una direzione perfettamente dritta orizzontale, verticale o diagonale. Questo può facilitare il disegno sul desktop, ma di solito è indesiderato per mira competitiva, pixel art, fotoritocco e qualsiasi attività in cui il cursore deve corrispondere esattamente alla mano.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Comportamento del sensore grezzo',
          description: 'La traccia segue la tua mano, includendo piccole curve e correzioni naturali. Le linee diagonali non sono matematicamente perfette a meno che il tuo movimento non lo fosse.',
        },
        {
          title: 'Comportamento con correzione dell\'angolo',
          description: 'La traccia sembra sospettosamente dritta per lunghe sezioni, specialmente vicino ad angoli comuni come orizzontale, verticale o 45 gradi.',
        },
        {
          title: 'Comportamento con tremolio',
          description: 'La traccia diventa rumorosa, sfocata o appuntita. Invece di essere troppo dritta, sembra instabile e ruvida.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Come testare correttamente il tuo mouse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Inizia con una finestra del sensore pulita e un tappetino di buona qualità noto',
        'Disegna linee diagonali lente da angolo ad angolo e ripeti lo stesso movimento più volte',
        'Disegna cerchi e curve a S per rivelare il tremolio che potrebbe non apparire in linee dritte',
        'Testa a più livelli di DPI perché alcuni sensori diventano più rumorosi a sensibilità molto alta',
        'Disattiva le funzioni del software del produttore come correzione dell\'angolo, predizione, regolazione della superficie o accelerazione quando possibile',
        'Confronta le modalità cablata e wireless se il tuo mouse supporta entrambe',
        'Confronta con un altro mouse sulla stessa superficie per separare il guasto del mouse dai problemi di superficie',
      ],
    },
    {
      type: 'title',
      text: 'Interpretare i punteggi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lo strumento mostra un punteggio di tremolio, un punteggio di correzione dell\'angolo, rettilineità, deviazione media e il numero di campioni catturati. Questi valori sono meglio usati in modo comparativo. Disegna la stessa linea con lo stesso movimento della mano dopo aver cambiato una variabile: DPI, superficie, posizione del ricevitore wireless o impostazione del firmware del mouse. Se un punteggio scende dopo aver cambiato la superficie o pulito il sensore, hai trovato una causa probabile.',
    },
    {
      type: 'table',
      headers: ['Risultato', 'Cosa suggerisce', 'Azione pratica'],
      rows: [
        ['Tremolio basso e correzione bassa', 'Il percorso del sensore sembra naturale e stabile', 'Mantieni le impostazioni attuali e usale come riferimento'],
        ['Tremolio alto, correzione bassa', 'Il mouse traccia ma il percorso è rumoroso', 'Pulisci il sensore, cambia superficie, abbassa il DPI e riprova'],
        ['Tremolio basso, correzione alta', 'Il percorso potrebbe essere corretto dal firmware', 'Cerca opzioni di predizione o correzione dell\'angolo nel software del mouse'],
        ['Tremolio alto e correzione alta', 'La traccia è instabile e potrebbe essere ipercorretta', 'Ripristina i profili del software del mouse e riprova dalle impostazioni predefinite'],
        ['I punteggi cambiano molto in base alla superficie', 'Al sensore non piace una texture o riflettività della superficie', 'Usa la superficie con la traccia più pulita'],
      ],
    },
    {
      type: 'title',
      text: 'DPI, frequenza di polling e tremolio del mouse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un DPI alto non significa automaticamente un tracciamento migliore. Alcuni mouse funzionano in modo pulito a DPI moderato ma espongono più rumore visibile a DPI molto alto perché piccoli errori del sensore vengono amplificati in un movimento del cursore più grande. Anche la frequenza di polling può cambiare la sensazione della traccia. Una frequenza di polling più alta fornisce aggiornamenti più frequenti, ma non può riparare un sensore sporco, una superficie scadente o la predizione del firmware.',
    },
    {
      type: 'paragraph',
      html: 'Per un confronto equo, mantieni il movimento della mano simile e cambia un\'impostazione alla volta. Ad esempio, disegna la stessa linea diagonale a 800 DPI, 1600 DPI e 3200 DPI. Se il percorso diventa sfocato solo al valore più alto, la soluzione migliore potrebbe essere abbassare il DPI e regolare la sensibilità di gioco invece di sostituire il mouse.',
    },
    {
      type: 'title',
      text: 'Cause comuni del tremolio del sensore del mouse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Polvere, peli o grasso vicino alla finestra del sensore ottico',
        'Superfici lucide, riflettenti, trasparenti o irregolari',
        'Impostazioni DPI molto alte che amplificano piccoli errori del sensore',
        'Batteria scarica o interferenza wireless',
        'Ricevitore posizionato lontano dal mouse o dietro un case PC metallico',
        'Filtri del firmware, calibrazione della superficie o profili del software del produttore',
        'Problemi di distanza di sollevamento quando il mouse è inclinato o mosso rapidamente',
        'Una lente del sensore usurata o danneggiata dopo un uso intenso',
      ],
    },
    {
      type: 'title',
      text: 'Perché interessa a giocatori e designer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nei giochi, il tremolio può rendere più difficili i micro-aggiustamenti perché il mirino non si ferma esattamente dove la mano intendeva. Anche la correzione dell\'angolo può essere problematica: può aiutare a disegnare linee dritte sul desktop, ma può anche distorcere piccole correzioni di mira e far sembrare filtrato il tracciamento diagonale. Per designer, illustratori, utenti CAD ed editor di foto, la correzione del sensore può far sembrare il movimento a mano libera meno onesto e più difficile da controllare.',
    },
    {
      type: 'paragraph',
      html: 'Un mouse non ha bisogno di una traccia perfetta per essere buono. Il movimento umano è naturalmente imperfetto. I segnali di avvertimento sono ripetibili: la stessa superficie crea sempre punti rumorosi, lo stesso DPI crea sempre punte, o lo stesso mouse rende sempre le diagonali sospettosamente dritte mentre un altro mouse non lo fa.',
    },
    {
      type: 'title',
      text: 'Prima di comprare un nuovo mouse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Pulisci con attenzione la finestra del sensore con il mouse spento',
        'Prova un tappetino diverso, preferibilmente in tessuto opaco o superficie ibrida da gaming',
        'Abbassa il DPI e compensa con la sensibilità del software',
        'Disattiva correzione dell\'angolo, predizione, precisione del puntatore e opzioni di accelerazione',
        'Avvicina il ricevitore wireless usando un cavo di estensione USB',
        'Aggiorna o ripristina il profilo del firmware del mouse se il software del produttore lo supporta',
        'Testa un altro mouse sullo stesso computer e superficie per confronto',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'La regola diagnostica utile',
      html: '<p>Una singola traccia anomala non è sufficiente. Un modello ripetibile è ciò che conta. Se il tremolio o la correzione dell\'angolo appaiono ripetutamente con le stesse impostazioni, poi scompaiono quando pulisci il sensore, cambi superficie, abbassi il DPI o disattivi la predizione, hai trovato la causa più probabile.</p>',
    },
  ],
  ui: {
    badge: 'Traccia grezza del sensore',
    canvasLabel: 'Area di disegno per il test di tremolio e correzione dell\'angolo del mouse',
    canvasHint: 'Disegna diagonali lente, cerchi e curve. I singoli punti del sensore restano visibili per individuare facilmente il tracciamento irregolare.',
    pointerPrompt: 'Tieni premuto e disegna nell\'area di disegno',
    samples: 'Campioni',
    jitterScore: 'Tremolio',
    snappingScore: 'Correzione',
    straightness: 'Rettilineità',
    rawDeviation: 'Deviazione media',
    statusIdle: 'Disegna nel campo per catturare il movimento grezzo del mouse',
    statusHealthy: 'La traccia sembra naturale e stabile nei campioni recenti',
    statusJitter: 'Movimento rumoroso rilevato nella traccia recente',
    statusSnapping: 'Movimento sospettosamente dritto rilevato',
    statusMixed: 'Tremolio e possibile correzione dell\'angolo appaiono entrambi nella traccia',
    reset: 'Reimposta',
    holdShift: 'Consiglio: prova un cambiamento alla volta. DPI, superficie, modalità wireless e impostazioni di predizione possono tutti modificare la traccia.',
    sensitivity: 'Sensibilità di rilevamento',
    low: 'stabile',
    high: 'rigoroso',
    traceLog: 'Eventi della traccia',
    emptyLog: 'Disegna alcuni tratti controllati per avviare il registro eventi.',
    jitterEvent: 'tremolio',
    snappingEvent: 'correzione dell\'angolo',
    combinedEvent: 'tremolio e correzione dell\'angolo',
    cleanEvent: 'traccia pulita',
    pxUnit: 'px',
    percentUnit: '%',
  },
};
