import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseScrollTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-rotella-mouse';
const title = 'Test Rotella Mouse';
const description = 'Diagnostica salti della rotella, rimbalzi inversi, direzione di scorrimento incoerente e segnali deboli dell\'encoder con un test locale della rotella del mouse basato sul browser.';

const faqData = [
  {
    question: 'Cosa rileva un test della rotella del mouse?',
    answer: 'Un test della rotella registra gli eventi della rotella e cerca cambi di direzione instabili, piccoli delta deboli e scorrimento incoerente. Questi sintomi compaiono spesso quando l\'encoder della rotella è sporco, usurato, disallineato o elettronicamente disturbato.',
  },
  {
    question: 'Cos\'è un salto di scorrimento inverso?',
    answer: 'Un salto inverso si verifica quando scorri in una direzione ma il computer riceve un breve evento nella direzione opposta. Se si ripete durante uno scorrimento costante, è un forte segno di rimbalzo dell\'encoder o contaminazione.',
  },
  {
    question: 'Questo test funziona con i touchpad?',
    answer: 'Sì, ma il risultato è più significativo per le rotelle fisiche del mouse. I touchpad e le rotelle a scorrimento fluido creano molti piccoli delta, quindi il controllo della sensibilità aiuta a separare i movimenti fini intenzionali dal jitter sospetto.',
  },
  {
    question: 'Il test carica i dati del mio mouse?',
    answer: 'No. Il calcolo viene eseguito localmente nel tuo browser. Lo strumento utilizza solo gli eventi della rotella mentre il puntatore si trova nell\'area di cattura.',
  },
];

const howToData = [
  {
    name: 'Posiziona il puntatore sul pannello di cattura',
    text: 'Sposta il cursore nell\'area del laboratorio di scorrimento in modo che la pagina possa catturare gli eventi della rotella senza spostare il documento circostante.',
  },
  {
    name: 'Scorri costantemente in una direzione',
    text: 'Testa una direzione alla volta: ruota lentamente verso l\'alto per diversi scatti, reimposta o metti in pausa, quindi testa verso il basso separatamente. Cambi rapidi e intenzionali di direzione possono creare false letture di salto inverso.',
  },
  {
    name: 'Osserva i salti inversi',
    text: 'Se il contatore delle inversioni aumenta mentre il tuo dito si sta ancora muovendo in una direzione, ripeti lo stesso movimento per confermare lo schema.',
  },
  {
    name: 'Regola la sensibilità',
    text: 'Aumenta la sensibilità per i touchpad fluidi o riducila per test rigorosi della rotella meccanica. Il punteggio di stabilità si aggiorna immediatamente.',
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

export const content: ToolLocaleContent<MouseScrollTestUI> = {
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
      text: 'Test Rotella Mouse: Trova Salti e Inversioni di Scorrimento',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una rotella del mouse difettosa raramente si rompe tutta in una volta. Di solito inizia con piccoli sintomi: uno scatto fa scorrere nella direzione sbagliata, la pagina salta verso l\'alto mentre scorri verso il basso, o la rotella sembra normale ma il browser riceve eventi incoerenti. Questo test della rotella registra il segnale che arriva al browser ed evidenzia i modelli rilevanti per la diagnosi.',
    },
    {
      type: 'paragraph',
      html: 'L\'obiettivo non è misurare quanto si è spostata una pagina. Il segnale utile è la <strong>coerenza della direzione</strong>. Quando giri una rotella meccanica costantemente verso il basso, il flusso di eventi dovrebbe rimanere in quella direzione. Brevi eventi in direzione opposta in una finestra temporale ristretta sono sospetti perché corrispondono al modo in cui gli encoder sporchi o usurati interpretano male il movimento della rotella.',
    },
    {
      type: 'title',
      text: 'Cosa Misura lo Strumento',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Totale scatti della rotella catturati nel pannello di test',
        'Salti inversi: rapidi cambi di segno che si verificano mentre la direzione precedente è ancora recente',
        'Serie pulita più lunga: quanti eventi consecutivi sono rimasti in una direzione coerente',
        'Ultimo delta: direzione e ampiezza grezze dell\'evento più recente della rotella',
        'Attività verticale rispetto a orizzontale, utile per rotelle inclinabili e touchpad',
      ],
    },
    {
      type: 'table',
      headers: ['Segnale', 'Schema Sano', 'Schema Sospetto'],
      rows: [
        ['Rotella verticale', 'Lunghe serie di eventi su o giù durante lo scorrimento costante', 'Eventi alternati su/giù mentre il dito mantiene una direzione'],
        ['Inclinazione orizzontale', 'Eventi sinistra o destra solo usando gesti di inclinazione o orizzontali', 'Movimento laterale inaspettato durante il normale uso della rotella verticale'],
        ['Piccoli delta', 'Valori piccoli occasionali su rotelle fluide o touchpad', 'Alta percentuale di valori minuscoli instabili su una rotella meccanica a scatti'],
        ['Punteggio di stabilità', 'Rimane alto in diversi passaggi deliberati', 'Scende ripetutamente perché le inversioni si verificano nello stesso test di direzione'],
      ],
    },
    {
      type: 'title',
      text: 'Cause Comuni dei Salti della Rotella di Scorrimento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La maggior parte delle rotelle del mouse utilizza un encoder che converte la rotazione in impulsi. Polvere, ossidazione, contatti usurati, un asse della rotella allentato, problemi di filtraggio del firmware o un cavo danneggiato possono rendere questi impulsi incoerenti. Quando l\'encoder segnala brevemente la fase sbagliata, il sistema operativo può ricevere un evento in direzione opposta anche se la rotella continuava a muoversi nella direzione originale.',
    },
    {
      type: 'table',
      headers: ['Sintomo', 'Causa Probabile', 'Prossimo Controllo'],
      rows: [
        ['La pagina salta verso l\'alto scorrendo verso il basso', 'Rimbalzo dell\'encoder o sporcizia nel meccanismo', 'Esegui un passaggio lento verso il basso e osserva il contatore delle inversioni'],
        ['Solo un\'applicazione scorre male', 'Smussamento dell\'applicazione, modalità zoom o scorciatoia mouse personalizzata', 'Prova il test nel browser e confronta con un\'altra app'],
        ['La rotella funziona dopo aver soffiato aria, poi fallisce di nuovo', 'Spostamento temporaneo di detriti o contatti encoder usurati', 'Ripeti dopo alcuni minuti di uso normale'],
        ['Appare movimento orizzontale inaspettato', 'Rumore della rotella inclinabile, gesto touchpad o mappatura driver', 'Controlla l\'indicatore dell\'asse orizzontale mentre scorri verticalmente'],
        ['Il mouse wireless scorre in modo irregolare', 'Batteria scarica, distanza del ricevitore o interferenze', 'Ripeti il test con una batteria nuova e il ricevitore vicino al mouse'],
      ],
    },
    {
      type: 'title',
      text: 'Come Testare in Modo Affidabile',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Metti il puntatore dentro il pannello di cattura prima di scorrere in modo che la pagina impedisca il normale movimento della pagina',
        'Testa una direzione alla volta: scorri lentamente verso l\'alto per 10-20 scatti senza cambiare direzione',
        'Reimposta o metti in pausa, poi ripeti lo stesso passaggio unidirezionale verso il basso',
        'Non alternare rapidamente tra su e giù, perché i cambi rapidi intenzionali di direzione possono sembrare salti inversi',
        'Se compaiono inversioni, ripeti la direzione problematica più volte per confermare che è riproducibile',
        'Confronta con un altro mouse sullo stesso computer se devi separare l\'hardware dal software',
      ],
    },
    {
      type: 'title',
      text: 'Interpretare il Punteggio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il punteggio di stabilità è un riepilogo rapido. Un punteggio alto significa che lo strumento ha visto direzione coerente e pochi piccoli delta incerti. Un punteggio basso non prova automaticamente che il mouse sia rotto, specialmente su touchpad o rotelle fluide ad alta risoluzione, ma salti inversi ripetuti durante un test lento unidirezionale sono una forte evidenza di un vero problema alla rotella.',
    },
    {
      type: 'table',
      headers: ['Risultato', 'Significato', 'Azione Consigliata'],
      rows: [
        ['Nessuna inversione e lunghe serie pulite', 'Il segnale della rotella appare coerente', 'Continua a testare solo se i sintomi compaiono nell\'uso reale'],
        ['Un\'inversione isolata', 'Potrebbe essere un cambio accidentale di direzione o un evento di disturbo', 'Ripeti la stessa direzione lentamente'],
        ['Diverse inversioni nello stesso passaggio', 'Probabile rimbalzo dell\'encoder, sporcizia o usura della rotella', 'Ripeti il test su un altro computer e documenta il risultato'],
        ['Molti eventi di jitter ma nessuna inversione', 'La sensibilità potrebbe essere troppo bassa per il tipo di dispositivo', 'Aumenta la sensibilità per touchpad o dispositivi a scorrimento fluido'],
        ['Eventi orizzontali durante l\'uso della rotella verticale', 'Possibile rumore della rotella inclinabile o mappatura driver', 'Disattiva il software mouse personalizzato e ripeti il test'],
      ],
    },
    {
      type: 'title',
      text: 'Rotella Meccanica vs Touchpad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una rotella meccanica a scatti produce normalmente chiari passi direzionali. Un touchpad o una rotella a rotazione libera può produrre molti piccoli delta perché il sistema operativo applica lo scorrimento fluido. Per questo lo strumento include il controllo della sensibilità: aumentarlo ignora i movimenti minuscoli e fa concentrare il test sui cambi di direzione abbastanza grandi da essere rilevanti.',
    },
    {
      type: 'title',
      text: 'Cosa Provare Prima di Sostituire il Mouse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Testa in un altro browser per escludere un gestore della rotella specifico della pagina',
        'Disattiva il software mouse del produttore, l\'accelerazione dello scorrimento o i livelli macro durante la diagnosi',
        'Per mouse wireless, usa una batteria nuova e avvicina il ricevitore',
        'Pulisci intorno alla rotella con aria compressa mentre il mouse è scollegato o spento',
        'Se il mouse è in garanzia, registra lo schema di inversione ripetuto come prova',
      ],
    },
    {
      type: 'paragraph',
      html: 'I test basati sul browser non possono ispezionare l\'encoder elettricamente, ma possono mostrare esattamente ciò che riceve il tuo normale software. Se il browser riceve eventi della rotella nella direzione sbagliata durante uno scorrimento attento e unidirezionale, anche altre applicazioni possono riceverli.',
    },
  ],
  ui: {
    badge: 'Laboratorio Segnale Rotella',
    captureTitle: 'Scorri dentro il pannello del segnale',
    captureHint: 'Usa passaggi costanti in una direzione per esporre i salti inversi',
    focusLockTitle: 'Attiva questa zona di scorrimento',
    focusLockText: 'Clicca su questa zona e scorri qui. La pagina non si sposterà mentre questa zona è attiva.',
    stabilityScore: 'Punteggio di stabilità',
    statusIdle: 'Scorri sul pannello per iniziare a misurare la coerenza della rotella',
    statusClean: 'La direzione della rotella è stabile nei campioni catturati',
    statusWarning: 'Salti inversi rilevati durante lo scorrimento recente',
    statusMixed: 'Molti piccoli delta rilevati; regola la sensibilità per questo dispositivo',
    directionNote: 'Testa una direzione alla volta. Alternare rapidamente su e giù può creare false letture di salto inverso.',
    totalTicks: 'Scatti',
    reversals: 'Inversioni',
    longestRun: 'Miglior serie',
    lastDelta: 'Ultimo delta',
    verticalAxis: 'Verticale',
    horizontalAxis: 'Orizzontale',
    dominantDirection: 'Ultima direzione',
    upward: 'Su',
    downward: 'Giù',
    leftward: 'Sinistra',
    rightward: 'Destra',
    noDirection: 'Nessun movimento',
    noDataValue: '-',
    sensitivityLabel: 'Sensibilità al jitter',
    sensitivityUnit: 'delta',
    reset: 'Reimposta',
    logTitle: 'Registro eventi rotella',
    emptyLog: 'Scorri sul pannello con un movimento lento e costante della rotella.',
    cleanEvent: 'pulito',
    reversalEvent: 'salto inverso',
    jitterEvent: 'delta minuscolo',
  },
};
