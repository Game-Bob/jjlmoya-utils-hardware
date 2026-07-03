import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MonitorGhostingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-ghosting-monitor-italiano';
const title = 'Test di Ghosting del Monitor';
const description =
  'Testa il ghosting del monitor, la sfocatura da movimento, le scie di overdrive e il comportamento di risposta dei pixel con barre mobili, testo e schemi di movimento a schermo intero.';

const faqData = [
  {
    question: 'Cos\'è il ghosting del monitor?',
    answer:
      'Il ghosting del monitor è una scia visibile che segue gli oggetti in movimento quando i pixel non possono cambiare abbastanza rapidamente. È comune su pannelli LCD lenti, modalità overdrive mal regolate e display che funzionano al di sotto della loro frequenza di aggiornamento ottimale.',
  },
  {
    question: 'Questo test può misurare il tempo di risposta esatto?',
    answer:
      'Un test browser non può sostituire le apparecchiature di laboratorio come una fotocamera a inseguimento o un fotodiodo, ma può rivelare artefatti di movimento visibili, confrontare le impostazioni del monitor e aiutarti a scegliere la modalità overdrive meno sfocata.',
  },
  {
    question: 'Perché l\'overdrive a volte crea scie luminose?',
    answer:
      'L\'overdrive spinge i pixel più forte per accelerare le transizioni. Se supera la tonalità target, potresti vedere ghosting inverso: un alone luminoso o colorato dietro gli oggetti in movimento.',
  },
  {
    question: 'Devo testare su sfondo scuro o chiaro?',
    answer:
      'Entrambi. Alcuni pannelli macchiano di più le transizioni scuro-a-grigio rispetto a quelle chiaro-a-scuro, quindi cambiare lo sfondo rivela artefatti che un singolo schema può nascondere.',
  },
];

const howToData = [
  {
    name: 'Imposta la velocità di movimento',
    text: 'Inizia vicino alla velocità predefinita, poi aumentala fino a quando le scie diventano facili da ispezionare senza perdere di vista l\'oggetto.',
  },
  {
    name: 'Cambia l\'intensità della scia',
    text: 'Usa il controllo della scia per rendere la persistenza più facile da vedere mentre confronti le impostazioni del monitor.',
  },
  {
    name: 'Testa più sfondi',
    text: 'Alterna tra sfondi scuro, chiaro e griglia per rivelare macchie nere, ghosting inverso e aloni di overdrive.',
  },
  {
    name: 'Confronta le impostazioni overdrive',
    text: 'Apri l\'OSD del monitor e testa le modalità Off, Normale, Veloce ed Estrema. Scegli la modalità con il movimento più nitido e meno aloni.',
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

export const content: ToolLocaleContent<MonitorGhostingTestUI> = {
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
      text: 'Test di Ghosting del Monitor: Controlla Sfocatura da Movimento e Risposta dei Pixel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il ghosting del monitor appare quando gli oggetti in movimento lasciano una scia visibile dietro di loro. Può far sembrare i giochi macchiati, rendere il testo a scorrimento più difficile da leggere e far sembrare un monitor ad alta frequenza di aggiornamento peggiore del previsto. Questo test di ghosting del monitor ti offre barre mobili, testo e schemi ad alto contrasto per confrontare modalità overdrive, frequenze di aggiornamento, sfondi e velocità senza installare software.',
    },
    {
      type: 'paragraph',
      html: 'Il test è progettato per l\'ispezione pratica. Non pretende di fornire tempi di risposta grigio-a-grigio da laboratorio, ma aiuta a rispondere alla domanda che la maggior parte degli utenti ha realmente: <strong>quale impostazione del monitor appare più pulita ai miei occhi su questo display?</strong>',
    },
    {
      type: 'title',
      text: 'Aspetto del Ghosting',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Un\'ombra scura che segue l\'oggetto in movimento, spesso chiamata macchia nera',
        'Un alone pallido o colorato dietro l\'oggetto, spesso causato da overdrive eccessivo',
        'Una lunga scia traslucida che rende i bordi morbidi',
        'Copie multiple deboli dell\'oggetto, specialmente su display con risposta lenta dei pixel',
        'Chiarezza non uniforme tra sfondi scuro, chiaro e griglia',
      ],
    },
    {
      type: 'title',
      text: 'Ghosting, Sfocatura da Movimento e Ghosting Inverso',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Artefatto', 'Cosa vedi', 'Causa comune'],
      rows: [
        ['Ghosting', 'Una copia più scura o sbiadita segue l\'oggetto', 'La risposta dei pixel è troppo lenta per la velocità del movimento'],
        ['Sfocatura da movimento', 'L\'intero oggetto in movimento sembra morbido', 'Sfocatura sample-and-hold, bassa frequenza di aggiornamento o sfocatura da inseguimento oculare'],
        ['Ghosting inverso', 'Alone luminoso o scie di superamento colorate', 'L\'impostazione overdrive è troppo aggressiva'],
        ['Macchia nera', 'Le scene scure lasciano ombre pesanti', 'Le transizioni scure dei pannelli VA sono lente'],
        ['Scatto', 'Il movimento salta invece di fluire', 'Frame pacing, FPS bassi o carico del browser/sistema'],
      ],
    },
    {
      type: 'title',
      text: 'Un Flusso di Lavoro Diagnostico Pratico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Inizia con il monitor impostato alla sua risoluzione nativa e alla frequenza di aggiornamento stabile più alta. Se possiedi un monitor 144Hz, 165Hz, 240Hz o 360Hz, conferma che il sistema operativo stia effettivamente usando quella modalità prima di giudicare la nitidezza del movimento. Apri il test a schermo intero, scegli il target barre di nitidezza e osserva il bordo posteriore dell\'oggetto in movimento. Il bordo posteriore è il punto in cui le scie fantasma, le macchie scure e gli aloni luminosi di overdrive sono più facili da confrontare.',
    },
    {
      type: 'list',
      items: [
        'Usa sfondo scuro per rivelare macchie nere e transizioni scure lente',
        'Usa sfondo chiaro per rivelare aloni di overdrive colorati',
        'Usa sfondo a griglia per ispezionare la nitidezza dei bordi rispetto alle linee di riferimento ad alto contrasto',
        'Usa il target di testo quando il tuo vero problema è lo scorrimento sfocato o il testo in movimento difficile da leggere',
        'Usa lo schermo intero prima di giudicare un monitor, perché la cornice del browser e il ridimensionamento possono distrarre dagli artefatti di movimento',
        'Aumenta la velocità solo dopo essere riuscito a seguire l\'oggetto comodamente',
        'Confronta un\'impostazione del monitor alla volta in modo da sapere cosa è cambiato',
      ],
    },
    {
      type: 'title',
      text: 'Scegliere la Migliore Impostazione Overdrive per il Tuo Monitor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La maggior parte dei monitor da gaming include un\'impostazione overdrive chiamata Off, Normale, Veloce, Più Veloce, Estrema, Tempo di Risposta o Trace Free. L\'opzione più veloce non è sempre la migliore. Un\'impostazione moderata offre spesso il miglior equilibrio: meno sfocatura di Off, ma meno aloni di Estrema.',
    },
    {
      type: 'table',
      headers: ['Modalità Overdrive', 'Risultato Atteso', 'Raccomandazione'],
      rows: [
        ['Off', 'Meno superamento, ma più sfocatura', 'Riferimento utile per il confronto'],
        ['Normale', 'Riduzione moderata della sfocatura', 'Spesso migliore per l\'uso quotidiano'],
        ['Veloce', 'Movimento più nitido con qualche rischio di alone', 'Buono se le scie rimangono pulite'],
        ['Estrema', 'Tempo di risposta dichiarato più basso, rischio di superamento più alto', 'Evitare se appaiono scie inverse luminose'],
        ['Adattiva/Variabile', 'Il comportamento cambia con la frequenza di aggiornamento', 'Riprova nell\'intervallo di FPS che usi effettivamente'],
      ],
    },
    {
      type: 'title',
      text: 'Cosa Cambiare Quando il Test Sembra Brutto',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Cosa vedi', 'Causa probabile', 'Cosa provare'],
      rows: [
        ['Lunga scia scura dietro il target', 'Transizioni di pixel scuri lente o overdrive debole', 'Prova una modalità overdrive più forte, riprova su sfondi scuro e griglia'],
        ['Alone luminoso o contorno colorato dietro il target', 'Superamento overdrive o ghosting inverso', 'Riduci l\'overdrive di un livello e confronta alla tua frequenza reale'],
        ['Il movimento sembra a scatti invece che sfocato', 'Frame pacing, carico del browser o disallineamento della frequenza', 'Chiudi le app pesanti, attiva lo schermo intero, conferma la frequenza del SO'],
        ['Il testo diventa illeggibile in movimento', 'Sfocatura sample-and-hold, bassa frequenza o risposta lenta', 'Aumenta la frequenza, testa il motivo testo, confronta le modalità overdrive'],
        ['Gli artefatti cambiano quando cambiano gli FPS', 'Comportamento VRR o overdrive adattivo', 'Riprova nell\'intervallo di FPS in cui giochi o lavori effettivamente'],
      ],
    },
    {
      type: 'title',
      text: 'Perché la Frequenza di Aggiornamento è Importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Frequenze di aggiornamento più elevate riducono il tempo in cui ogni fotogramma rimane visibile, il che può rendere il movimento più nitido. Tuttavia, la frequenza di aggiornamento da sola non elimina il ghosting. Un monitor 240Hz con transizioni di pixel lente può ancora macchiare, mentre un pannello 144Hz ben regolato può apparire più pulito di un pannello più veloce mal regolato.',
    },
    {
      type: 'table',
      headers: ['Frequenza', 'Durata Fotogramma', 'Cosa aspettarsi'],
      rows: [
        ['60Hz', '16,7 ms', 'Facile vedere la sfocatura sample-and-hold e il movimento più lento'],
        ['120Hz', '8,3 ms', 'Molto più fluido, ma la risposta dei pixel conta ancora'],
        ['144Hz', '6,9 ms', 'Riferimento gaming comune per la nitidezza del movimento'],
        ['240Hz', '4,2 ms', 'Molto fluido se la regolazione della risposta è buona'],
        ['360Hz', '2,8 ms', 'Impegnativo: una cattiva regolazione overdrive diventa evidente'],
      ],
    },
    {
      type: 'title',
      text: 'VRR, Gaming e Test nel Mondo Reale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La frequenza di aggiornamento variabile può cambiare il comportamento di un monitor perché alcuni display usano regolazioni overdrive diverse a frequenze diverse. Se il tuo problema appare solo nei giochi, non testare solo alla frequenza massima del desktop. Riprova nell\'intervallo di FPS in cui giochi effettivamente, specialmente intorno a 60 FPS, 90 FPS, 120 FPS e qualsiasi limite di frame rate che usi.',
    },
    {
      type: 'list',
      items: [
        'Se il ghosting è peggiore a bassi FPS, il monitor potrebbe avere una debole regolazione overdrive variabile',
        'Se gli aloni compaiono solo ad alte frequenze, la modalità overdrive potrebbe essere troppo aggressiva',
        'Se il movimento scatta mentre la scia rimane corta, il problema è probabilmente il frame pacing piuttosto che la risposta dei pixel',
        'Se lo schermo intero sembra diverso dalla modalità finestra, controlla il ridimensionamento del browser, il ridimensionamento del sistema operativo e il comportamento del compositore',
      ],
    },
    {
      type: 'title',
      text: 'Risoluzione dei Problemi con Cattivi Risultati',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Conferma che il cavo del display supporti la frequenza di aggiornamento target',
        'Disattiva il motion smoothing, il Black Frame Insertion o le modalità MPRT mentre confronti l\'overdrive normale',
        'Riprova dopo aver impostato il monitor alla sua risoluzione nativa',
        'Usa lo schermo intero o riduci lo zoom del browser se il movimento appare incoerente',
        'Chiudi le app pesanti in background se l\'animazione scatta',
        'Testa lo stesso schema dopo aver modificato le impostazioni della frequenza di aggiornamento nel pannello di controllo GPU',
        'Prova un altro cavo o porta se il monitor non riesce a raggiungere la frequenza pubblicizzata',
        'Riprova con VRR attivo e disattivo quando il ghosting cambia tra desktop e giochi',
      ],
    },
    {
      type: 'title',
      text: 'Limiti di un Test di Ghosting Online',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un test di ghosting basato su browser dipende dal timing dell\'animazione del browser, dal carico della GPU, dalla composizione del sistema operativo e dalla configurazione del display. È eccellente per il confronto visivo, ma misurazioni esatte del tempo di risposta richiedono apparecchiature specializzate come fotocamere a inseguimento, fotodiodi o metodi basati su oscilloscopio. Usa questo test per scegliere le impostazioni e individuare artefatti evidenti, non per certificare le affermazioni del produttore sui tempi di risposta.',
    },
  ],
  ui: {
    badge: 'Nitidezza del Movimento',
    speedLabel: 'Velocità di movimento',
    pixelsPerSecondUnit: 'px/s',
    pixelUnit: 'px',
    millisecondUnit: 'ms',
    trailLabel: 'Intensità della scia',
    backgroundLabel: 'Sfondo',
    backgroundDark: 'Scuro',
    backgroundLight: 'Chiaro',
    backgroundGrid: 'Griglia',
    patternLabel: 'Target del test',
    patternBars: 'Barre di nitidezza',
    patternText: 'Blocco di testo',
    patternUfo: 'UFO',
    pursuitLabel: 'Guida all\'inseguimento',
    pursuitOn: 'Attivo',
    pursuitOff: 'Disattivo',
    fullscreen: 'Schermo intero',
    exitFullscreen: 'Esci da schermo intero',
    pause: 'Pausa',
    resume: 'Riprendi',
    targetText: 'MOVIMENTO',
    estimatedBlur: 'sfocatura stimata',
    frameStep: 'Passo fotogramma',
    persistence: 'Persistenza',
    sampleCount: 'Campioni scia',
    instructions: 'Osserva il bordo posteriore del target in movimento mentre cambi velocità, intensità della scia, sfondo, modalità schermo intero e impostazioni overdrive del monitor.',
    reset: 'Ripristina',
  },
};
