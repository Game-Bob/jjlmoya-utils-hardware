import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeyboardChatterTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-chatter-tastiera';
const title = 'Test Chatter Tastiera';
const description = 'Rileva il chattering delle tastiere meccaniche, la doppia digitazione e il rimbalzo difettoso degli switch verificando quanto velocemente lo stesso tasto appare due volte.';

const faqData = [
  {
    question: 'Cos\'è il chatter della tastiera?',
    answer: 'Il chatter della tastiera è un difetto hardware in cui una pressione fisica viene registrata come più pressioni. È comune su switch meccanici sporchi, usurati, ossidati o con debounce inadeguato.',
  },
  {
    question: 'Come funziona questo test di chatter della tastiera?',
    answer: 'Premi lo stesso tasto sospetto lentamente, un tocco alla volta. Se il registro mostra pressioni ripetute a pochi millisecondi di distanza, lo switch potrebbe rimbalzare e produrre doppie lettere.',
  },
  {
    question: 'Quale delta indica che la mia tastiera sta facendo doppia digitazione?',
    answer: 'Una pressione ripetuta sotto i 30 ms è fortemente sospetta per chatter. Ripetizioni da 30 a 50 ms meritano attenzione. Le ripetizioni intenzionali normali sono solitamente sopra i 50 ms per la maggior parte degli utenti.',
  },
  {
    question: 'Perché la prima pressione non mostra un delta?',
    answer: 'Un delta richiede una pressione precedente dello stesso tasto. La prima pressione stabilisce la linea di base, e le pressioni successive mostrano l\'intervallo di tempo in millisecondi.',
  },
  {
    question: 'Il software può risolvere il chattering della tastiera?',
    answer: 'Il software di debounce può nascondere alcuni sintomi, ma non ripara lo switch. Potrebbe essere necessario pulire, reinserire gli switch hot-swap, sostituire lo switch o riparare il PCB della tastiera.',
  },
];

const howToData = [
  {
    name: 'Apri lo strumento e premi i tasti normalmente',
    text: 'Non c\'è un pulsante di avvio. Clicca nello strumento se necessario, quindi premi il tasto che ha digitato doppio.',
  },
  {
    name: 'Tocca il tasto sospetto un colpo alla volta',
    text: 'Premi il tasto che digita doppio. Se una pressione fisica crea diverse righe di registro con delta minuscoli, lo switch sta probabilmente facendo chatter.',
  },
  {
    name: 'Leggi il codice colore',
    text: 'Verde significa normale sopra 50 ms, giallo significa sospetto da 30 a 50 ms e rosso significa chatter rilevato sotto 30 ms.',
  },
  {
    name: 'Esporta il registro se necessario',
    text: 'Usa il pulsante di download per salvare un registro CSV che può aiutare a confrontare i tasti o documentare un guasto intermittente.',
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

export const content: ToolLocaleContent<KeyboardChatterTestUI> = {
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
      text: 'Test Doppia Digitazione Tastiera Meccanica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo test di chatter della tastiera aiuta a diagnosticare una tastiera meccanica che digita due lettere da una pressione, perde rilasci puliti o produce caratteri ripetuti senza che tu abbia intenzionalmente premuto due volte. Usalo prima di pulire gli switch, modificare le impostazioni di debounce del firmware, aprire un reclamo in garanzia o sostituire uno switch hot-swap.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Come leggere il risultato',
      badge: 'Soglie delta',
      html: '<p><strong>Normale</strong> significa che la ripetizione era sopra 50 ms ed è solitamente intenzionale. <strong>Sospetto</strong> significa 30-50 ms e dovrebbe essere ritestato sullo stesso tasto. <strong>Chatter rilevato</strong> significa sotto 30 ms, che è molto probabilmente una pressione fisica che rimbalza in più contatti elettrici.</p>',
    },
    {
      type: 'title',
      text: 'Perché gli Switch Meccanici Fanno Chatter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uno switch meccanico non si chiude come un segnale digitale perfettamente pulito. I contatti metallici possono rimbalzare per alcuni millisecondi prima di assestarsi. Il firmware della tastiera normalmente filtra quel rimbalzo con una finestra di debounce. Il chattering si verifica quando il contatto è sporco, usurato, ossidato, allentato, incrinato o mal regolato al punto che la tastiera segnala pressioni extra dopo che il filtro di debounce avrebbe dovuto gestirle.',
    },
    {
      type: 'table',
      headers: ['Sintomo', 'Causa probabile', 'Cosa provare prima'],
      rows: [
        ['Un tasto digita la stessa lettera due volte', 'Contatto dello switch sporco o usurato', 'Rimuovi il keycap, soffia via la polvere e testa di nuovo prima di sostituire lo switch.'],
        ['Diversi tasti hot-swap fanno chatter dopo un assemblaggio', 'Pin dello switch non inseriti correttamente', 'Estrai e reinserisci lo switch, controllando pin piegati o un socket allentato.'],
        ['Si verifica solo dopo fuoriuscite o umidità', 'Ossidazione o residui sui contatti', 'Scollega la tastiera e pulisci secondo le istruzioni del produttore.'],
        ['Molti tasti mostrano delta minuscoli', 'Debounce del firmware troppo basso o problema di scansione', 'Confronta su un\'altra porta USB e rivedi le impostazioni di debounce del firmware se disponibili.'],
      ],
    },
    {
      type: 'title',
      text: 'Metodo di Test che Riduce i Falsi Positivi',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Testa un tasto sospetto alla volta invece di digitare frasi complete.',
        'Premi il tasto una volta, rilascialo completamente e attendi un momento prima della pressione successiva.',
        'Confronta il tasto sospetto con un tasto vicino che sembra sano.',
        'Ignora la prima riga per un tasto perché non ha una pressione precedente con cui confrontarsi.',
        'Se lo stesso tasto mostra ripetutamente righe rosse sotto 30 ms da tocchi singoli, trattalo come un guasto hardware.',
        'Se compaiono solo righe gialle, ripeti il test più lentamente e controlla se il tuo ritmo di battitura sta causando l\'intervallo breve.',
      ],
    },
    {
      type: 'title',
      text: 'Chatter vs. Digitazione Veloce Intenzionale',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Chatter',
          description: 'Concentrato su un tasto, spesso sotto 30 ms, e appare quando intendevi una sola pressione.',
          points: ['Ispeziona lo switch o il socket.', 'Confronta con un tasto sano vicino.'],
        },
        {
          title: 'Digitazione veloce',
          description: 'Colpisce molti tasti, segue il tuo ritmo e tende a stare sopra 50 ms tra pressioni ripetute dello stesso tasto.',
          points: ['Solitamente uso normale.', 'Ritesta con tocchi singoli più lenti.'],
        },
        {
          title: 'Ripetizione tasto del sistema',
          description: 'Appare quando si tiene premuto un tasto e di solito si ripete a un ritmo regolare impostato dal sistema operativo.',
          points: ['Rilascia completamente tra i tocchi.', 'Controlla le impostazioni di ripetizione tastiera separatamente.'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cosa Fare Quando un Tasto Fallisce',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Salva un registro CSV prima di cambiare qualsiasi cosa così puoi confrontare i risultati prima e dopo.',
        'Rimuovi il keycap e ispeziona sporcizia, residui di liquido o uno stelo che non ritorna in modo fluido.',
        'Per tastiere hot-swap, reinserisci o sostituisci lo switch e testa di nuovo la stessa posizione.',
        'Per tastiere saldate, confronta le opzioni di debounce del firmware prima di presumere che il PCB abbia bisogno di riparazione.',
        'Prova un altro cavo e porta USB se più tasti non correlati mostrano delta impossibili.',
        'Per il supporto in garanzia, includi il tasto interessato, i valori delta ripetuti, il modello della tastiera, la versione del firmware e se il guasto segue lo switch o il socket PCB.',
      ],
    },
    {
      type: 'summary',
      title: 'Regola rapida',
      items: [
        'Una singola riga rossa è un indizio, non un verdetto.',
        'Righe rosse ripetute sotto 30 ms sullo stesso tasto fisico sono una forte evidenza di chatter della tastiera.',
        'Usa tocchi singoli deliberati e confronta lo switch sospetto con un tasto sano vicino prima di sostituire l\'hardware.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Premi un tasto qualsiasi',
    statusListening: 'Misurazione delta tasti',
    statusChatter: 'Chatter rilevato',
    totalPresses: 'Pressioni totali',
    chatterEvents: 'Eventi di chatter',
    worstDelta: 'Delta peggiore',
    watchWindow: 'Righe mantenute',
    keyColumn: 'Tasto',
    deltaColumn: 'Delta',
    verdictColumn: 'Verdetto',
    timeColumn: 'Tempo',
    normal: 'Normale',
    suspect: 'Sospetto',
    chatter: 'Chatter',
    waiting: 'In attesa',
    clear: 'Cancella registro',
    exportLog: 'Esporta CSV',
    hint: 'Il registro mantiene le 80 righe più recenti in modo che le sessioni lunghe rimangano veloci. La ripetizione del tasto tenuto premuto viene ignorata; le righe rosse provengono da pressioni separate avvenute troppo vicine.',
    captureNotice: 'Nessun pulsante di avvio. Tocca un tasto sospetto una volta e osserva il delta dalla sua pressione precedente.',
    keyboardAriaLabel: 'Attività recente dei tasti',
    logAriaLabel: 'Registro eventi chatter tastiera',
    escapeKey: 'Esc',
    backspaceKey: 'Canc',
    tabKey: 'Tab',
    enterKey: 'Invio',
    capsLockKey: 'Bloc Maiusc',
    shiftKey: 'Maiusc',
    controlKey: 'Ctrl',
    metaKey: 'Meta',
    altKey: 'Alt',
    spaceKey: 'Spazio',
    csvHeader: 'tasto,codice,delta_ms,gravità,ora',
  },
};
