import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterEjectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'espulsore-acqua-pulitore-altoparlante';
const title = 'Espulsore d\'Acqua per Altoparlanti';
const description =
  'Riproduci un tono a bassa frequenza di 165 Hz per aiutare a espellere acqua, polvere o detriti mobili dagli altoparlanti di telefoni, tablet e laptop.';

const faqData = [
  {
    question: 'Quale frequenza dovrei usare per espellere l\'acqua da un altoparlante?',
    answer:
      'Un tono basso intorno ai 165 Hz è un buon punto di partenza pratico perché muove visibilmente i piccoli diaframmi degli altoparlanti senza affidarsi a frequenze acute fastidiose. Alcuni dispositivi rispondono meglio tra 145 Hz e 190 Hz, per questo lo strumento include tutti e tre i preset.',
  },
  {
    question: 'Un tono sonoro può rimuovere tutta l\'acqua dal mio telefono?',
    answer:
      'No. Può aiutare a scuotere le goccioline fuori dalla griglia dell\'altoparlante o dalla camera acustica, ma non può asciugare il liquido dietro le guarnizioni, dentro le porte o sotto il display. Se il dispositivo è stato immerso, spegnilo e segui le istruzioni di asciugatura del produttore.',
  },
  {
    question: 'È sicuro per gli altoparlanti?',
    answer:
      'Usa sessioni brevi, inizia sotto il volume massimo e fermati se senti raschiamenti, crepitii o distorsione. Un minuscolo altoparlante del telefono non è progettato per lunghe riproduzioni di bassi ad alto volume, quindi cicli brevi e ripetuti sono più sicuri di una lunga raffica continua.',
  },
  {
    question: 'Perché il mio altoparlante suona ovattato dopo essersi bagnato?',
    answer:
      'Un velo d\'acqua aggiunge massa e smorzamento al diaframma dell\'altoparlante e può ostruire le aperture della griglia. Questo riduce gli acuti, indebolisce la chiarezza del parlato e rende i bassi confusi finché le goccioline non si muovono o evaporano.',
  },
  {
    question: 'Dovrei usare il riso dopo che il telefono si è bagnato?',
    answer:
      'Il riso non è un metodo di riparazione affidabile e può lasciare amido o particelle nelle porte. Usa invece la ventilazione, un panno assorbente senza pelucchi e le istruzioni del produttore. L\'espulsione sonora serve solo per l\'uscita dell\'altoparlante, non per l\'intero dispositivo.',
  },
];

const howToData = [
  {
    name: 'Rimuovi le cover e orienta l\'altoparlante verso il basso',
    text: 'Togli qualsiasi cover che copra la griglia, tieni il dispositivo in modo che la gravità aiuti le goccioline a uscire dall\'apertura dell\'altoparlante e mantieni le porte libere.',
  },
  {
    name: 'Inizia con il preset standard di 165 Hz',
    text: 'Premi Avvia e lascia che il tono suoni per 30 secondi. Il movimento del diaframma può rimuovere le goccioline intrappolate nella maglia della griglia o nella camera acustica superficiale.',
  },
  {
    name: 'Prova i preset delicato o profondo se necessario',
    text: 'Se il suono rimane ovattato, prova 145 Hz o 190 Hz per un ciclo breve. Altoparlanti di dimensioni diverse risuonano a frequenze diverse.',
  },
  {
    name: 'Fermati se l\'altoparlante distorce',
    text: 'Abbassa il volume o fermati immediatamente se il tono diventa aspro, ronzante o meccanicamente forzato. La distorsione significa che il driver viene sollecitato troppo.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<WaterEjectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Come Funziona un Tono Espulsore d\'Acqua', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'altoparlante di un telefono è un piccolo diaframma mobile. Quando viene riprodotto un tono a bassa frequenza, il diaframma si muove avanti e indietro molte volte al secondo. A <strong>165 Hz</strong>, questo movimento avviene 165 volte al secondo. Se c\'è acqua sulla griglia o intrappolata appena dentro l\'uscita acustica, l\'aria in movimento può rompere la tensione superficiale delle goccioline e spingerle verso l\'apertura.',
    },
    {
      type: 'paragraph',
      html: 'Il processo è meccanico, non chimico. Il suono non evapora il liquido e non rende impermeabili i componenti elettronici interni. Va inteso come un ciclo di vibrazione controllata per l\'uscita dell\'altoparlante, utile quando voce, notifiche o musica suonano ovattate dopo la pioggia, uno schizzo, il bagno o un risciacquo veloce.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '165 Hz', label: 'frequenza di partenza standard', icon: 'mdi:sine-wave' },
        { value: '30 s', label: 'primo ciclo breve di pulizia', icon: 'mdi:timer-outline' },
        { value: '145-190 Hz', label: 'intervallo pratico di regolazione', icon: 'mdi:tune' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Cosa può e non può fare il tono',
      badge: 'Ambito',
      icon: 'mdi:information',
      html: 'Il tono può aiutare a spostare le goccioline mobili nel condotto dell\'altoparlante. Non può rimuovere il liquido dalle porte di ricarica, dai vani SIM, dai microfoni, dai moduli fotocamera, dalle giunture adesive né dallo spazio sotto il display.',
    },
    { type: 'title', text: 'Quando Usarlo', level: 2 },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'L\'altoparlante suona basso, ovattato o con bollicine dopo uno schizzo.',
        'Un lato dell\'altoparlante stereo del telefono suona più debole dell\'altro.',
        'La griglia dell\'altoparlante del laptop o del tablet ha raccolto goccioline dopo la pulizia.',
        'Polvere o lanugine sono visibilmente mobili sulla griglia e la riproduzione normale suona spenta.',
        'Il dispositivo funziona normalmente, si carica normalmente e non mostra avvisi di liquido in una porta.',
      ],
    },
    {
      type: 'tip',
      title: 'Migliore posizione fisica',
      html: 'Orienta la griglia dell\'altoparlante verso il basso o leggermente verso il basso. Il tono fornisce il movimento, ma la gravità decide dove va la gocciolina liberata. Anche togliere la cover è importante, perché molte cover creano una piccola tasca che trattiene l\'acqua vicino all\'uscita.',
    },
    {
      type: 'card',
      icon: 'mdi:cellphone-sound',
      title: 'Perché gli altoparlanti del telefono vengono colpiti rapidamente',
      html: 'I telefoni moderni usano driver compatti ad alta escursione e minuscoli canali acustici. Una gocciolina che sarebbe innocua su un grande altoparlante da scrivania può coprire una parte significativa della griglia del telefono, alterando la pressione e smorzando il diaframma abbastanza da far sembrare le voci lontane.',
    },
    {
      type: 'table',
      headers: ['Sintomo', 'Causa probabile', 'Cosa provare'],
      rows: [
        ['Voce ovattata', 'Velo d\'acqua sulla griglia', 'Esegui 165 Hz per 30 secondi, altoparlante rivolto verso il basso'],
        ['Ronzio durante il tono', 'Gocciolina in movimento o driver sovrasollecitato', 'Abbassa il volume; fermati se il ronzio persiste'],
        ['Un altoparlante più basso', 'Solo un\'uscita è ostruita', 'Ruota il dispositivo in modo che quell\'uscita punti verso il basso'],
        ['Nessun suono', 'Uscita silenziata, rotta Bluetooth o guasto hardware', 'Controlla la rotta audio prima di ripetere i cicli'],
      ],
    },
    { type: 'title', text: 'Scegliere la Frequenza Giusta', level: 2 },
    {
      type: 'paragraph',
      html: 'Non esiste un numero magico universale perché le dimensioni dell\'altoparlante, la forma della griglia, il design della membrana impermeabile e la geometria della cover variano. Il motivo per cui <strong>165 Hz</strong> è popolare è che si trova abbastanza in basso da creare un\'escursione visibile del cono su molti altoparlanti piccoli, rimanendo in un intervallo che la maggior parte dei dispositivi può riprodurre a volume elevato.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '145 Hz delicato',
          description: 'Utile per altoparlanti molto piccoli o sollecitati dove il tono standard suona aspro.',
          icon: 'mdi:leaf',
          points: ['Tono più grave', 'Movimento meno aggressivo', 'Buon primo nuovo tentativo'],
        },
        {
          title: '165 Hz standard',
          description: 'Punto di partenza equilibrato per telefoni, tablet e molte aperture degli altoparlanti dei laptop.',
          icon: 'mdi:water-sync',
          highlight: true,
          points: ['Preset predefinito', 'Forte escursione del diaframma', 'Miglior primo ciclo'],
        },
        {
          title: '190 Hz profondo',
          description: 'Una spinta leggermente più alta che può funzionare quando un determinato altoparlante risuona sopra i 165 Hz.',
          icon: 'mdi:waves',
          points: ['Vibrazione più compatta', 'Secondo passaggio utile', 'Evita cicli lunghi'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Basse frequenze contro alte frequenze',
      items: [
        { pro: 'I toni bassi spostano più aria ed escursione del diaframma sugli altoparlanti piccoli.', con: 'Possono distorcere prima al volume massimo.' },
        { pro: 'I toni alti sono più facili da sentire attraverso alcune griglie.', con: 'Di solito spostano meno aria e possono risultare fastidiosi o impercettibili per alcuni utenti.' },
        { pro: 'Un breve tono basso è facile da giudicare a orecchio.', con: 'Non va messo in loop per molti minuti senza pause.' },
      ],
    },
    {
      type: 'message',
      title: 'Regola di sintonia della frequenza',
      ariaLabel: 'Regola di sintonia della frequenza',
      html: 'Se l\'altoparlante suona pulito dopo un ciclo di 30 secondi, fermati. Più cicli non sono una routine di manutenzione, ma solo un aiuto di recupero dopo che liquido o detriti hanno raggiunto l\'apertura dell\'altoparlante.',
    },
    { type: 'title', text: 'Procedura di Pulizia Sicura', level: 2 },
    {
      type: 'paragraph',
      html: 'Inizia sotto il volume massimo di sistema, specialmente su laptop e tablet con altoparlanti più grandi. Aumenta solo finché il tono è chiaramente udibile e il dispositivo vibra leggermente. Se senti un crepitio secco, un raschiamento o un improvviso calo di volume, ferma lo strumento e lascia che il dispositivo si asciughi naturalmente.',
    },
    {
      type: 'list',
      icon: 'mdi:numeric',
      items: [
        'Scollega cuffie e altoparlanti Bluetooth affinché il tono venga riprodotto dall\'altoparlante bagnato.',
        'Asciuga l\'esterno con un panno senza pelucchi prima di riprodurre il suono.',
        'Tieni l\'uscita dell\'altoparlante verso il basso e la mano lontana dalla griglia.',
        'Esegui 30 secondi a 165 Hz.',
        'Aspetta un minuto, prova l\'audio vocale normale e poi ripeti solo una volta se necessario.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Non usare calore o aria compressa',
      badge: 'Evita',
      icon: 'mdi:alert',
      html: 'Asciugacapelli, forni e aria compressa ad alta pressione possono spingere l\'umidità più in profondità, deformare le guarnizioni o danneggiare le membrane. Il tono sonoro è più delicato perché sfrutta il movimento dell\'altoparlante già integrato nel dispositivo.',
    },
    {
      type: 'summary',
      title: 'Lista di controllo rapida di sicurezza',
      items: [
        'I cicli brevi sono meglio di una lunga riproduzione continua.',
        'Abbassa il volume se il tono ronza in modo aspro.',
        'Fermati se il dispositivo mostra avvisi di rilevamento liquido.',
        'L\'espulsione sonora aiuta solo l\'uscita dell\'altoparlante, non l\'intero telefono.',
      ],
    },
    { type: 'title', text: 'La Resistenza all\'Acqua Non È Impermeabilità', level: 2 },
    {
      type: 'paragraph',
      html: 'Molti telefoni pubblicizzano la resistenza all\'acqua, ma questa classificazione è misurata in condizioni di laboratorio definite. L\'esposizione reale all\'acqua include movimento, sapone, sale, calore, pressione, età, urti e guarnizioni usurate. Un tono pulente per altoparlanti non ripristina una guarnizione né conferma che un telefono sia sicuro da caricare.',
    },
    {
      type: 'table',
      headers: ['Esposizione', 'Utilità del tono', 'Azione aggiuntiva'],
      rows: [
        ['Pioggia leggera', 'Spesso utile se l\'audio è ovattato', 'Asciuga l\'esterno ed esegui un ciclo breve'],
        ['Schizzo d\'acqua pulita', 'Utile per goccioline vicino alla griglia', 'Tieni le porte asciutte prima di caricare'],
        ['Acqua di piscina o di mare', 'Limitato; possono rimanere residui', 'Risciacqua solo se il produttore lo consente, poi assistenza se necessario'],
        ['Sapone, bibita o caffè', 'Basso; i residui appiccicosi alterano la griglia', 'Spegni e cerca istruzioni di pulizia'],
        ['Immersione completa', 'Non sufficiente', 'Segui i passaggi di emergenza del produttore'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Diaframma', definition: 'La superficie mobile all\'interno di un altoparlante che spinge l\'aria per creare il suono.' },
        { term: 'Risonanza', definition: 'Frequenza alla quale un sistema fisico si muove in modo più efficiente perché la sua forma e la sua massa favoriscono quella vibrazione.' },
        { term: 'Tensione superficiale', definition: 'La forza che permette a una gocciolina di aderire a una griglia o membrana invece di fluire via subito.' },
        { term: 'Camera acustica', definition: 'Il minuscolo percorso interno che guida il suono dell\'altoparlante dal driver all\'apertura del dispositivo.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:volume-high',
      title: 'Perché può suonare più forte dopo la pulizia',
      html: 'L\'acqua blocca prima le alte frequenze perché le lunghezze d\'onda piccole vengono facilmente disperse dalle ostruzioni della griglia. Una volta che le goccioline si muovono, le consonanti, le suonerie di notifica e i dettagli della voce spesso tornano prima che i bassi cambino in modo apprezzabile.',
    },
    { type: 'title', text: 'Pulizia di Polvere e Detriti', level: 2 },
    {
      type: 'paragraph',
      html: 'La stessa vibrazione può allentare polvere secca, lanugine o particelle posate sulla maglia dell\'altoparlante, ma non deve sostituire un\'attenta pulizia fisica. Se i detriti sono appiccicosi, oleosi o incrostati nella griglia, la sola vibrazione potrebbe solo spostarli in giro. Usa una spazzola morbida e asciutta all\'esterno ed evita di inserire strumenti metallici nell\'apertura.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Vibrazione sonora',
          description: 'Buona per particelle mobili e goccioline che possono muoversi liberamente.',
          icon: 'mdi:sine-wave',
          points: ['Nessun contatto con la griglia', 'Veloce', 'Ideale per schizzi recenti'],
        },
        {
          title: 'Spazzolatura esterna delicata',
          description: 'Migliore per lanugine o polvere visibili sulla superficie della maglia.',
          icon: 'mdi:brush',
          points: ['Funziona senza suono forte', 'Evita di sovrasollecitare l\'altoparlante', 'Richiede attenzione vicino alle membrane'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Dopo ambienti polverosi',
      html: 'Esegui il tono a volume moderato, poi strofina la griglia esterna con un panno in microfibra asciutto. Non aggiungere alcol o detergenti liquidi a meno che il produttore del dispositivo non lo raccomandi esplicitamente per quella superficie.',
    },
    { type: 'title', text: 'Note Specifiche per Dispositivo', level: 2 },
    {
      type: 'paragraph',
      html: 'Telefoni, tablet e laptop posizionano gli altoparlanti in diverse configurazioni acustiche. Un altoparlante inferiore del telefono di solito ha un\'uscita corta vicino alla porta di ricarica, quindi l\'acqua può uscire rapidamente quando la griglia è rivolta verso il basso. Un tablet può usare un canale laterale più lungo, il che significa che il tono può rendere il suono più chiaro gradualmente anziché in uno scoppio evidente. Un altoparlante del laptop spesso emette attraverso la base della tastiera o una fessura inferiore, quindi il liquido può trovarsi su uno strato di tessuto, una maglia di plastica o una griglia esterna anziché direttamente sul driver.',
    },
    {
      type: 'paragraph',
      html: 'Per un telefono, ruota il dispositivo finché l\'altoparlante che suona ovattato è il punto più basso. Per un tablet, prova sia l\'orientamento verticale che orizzontale, perché l\'apertura ostruita potrebbe trovarsi su un bordo diverso da quello previsto. Per un laptop, tieni la macchina su una superficie stabile e asciutta ed evita di inclinare il liquido verso la tastiera, le cerniere o le feritoie di ventilazione. Il tono deve aiutare il condotto dell\'altoparlante, non incoraggiare l\'acqua a spostarsi attraverso il dispositivo.',
    },
    {
      type: 'table',
      headers: ['Tipo di dispositivo', 'Orientamento consigliato', 'Consiglio sul ciclo'],
      rows: [
        ['Telefono', 'Griglia dell\'altoparlante verso il basso, cover rimossa', 'Un ciclo di 30 secondi, poi prova l\'audio vocale'],
        ['Tablet', 'Bordo ostruito rivolto verso il basso', 'Inizia a volume moderato perché gli altoparlanti sono più grandi'],
        ['Laptop', 'Posizione normale stabile a meno che il liquido non sia su una griglia esterna', 'Usa volume più basso e fermati se il telaio vibra fortemente'],
        ['Smartwatch', 'Segui prima le istruzioni di espulsione acqua del produttore', 'Usa il tono web solo se il browser può instradare il suono all\'altoparlante dell\'orologio'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Controllo Bluetooth e instradamento audio',
      badge: 'Prima di iniziare',
      icon: 'mdi:bluetooth-audio',
      html: 'Se cuffie wireless, un sistema auto o un altoparlante esterno sono collegati, il tono potrebbe essere riprodotto sull\'uscita sbagliata. Scollega l\'audio Bluetooth prima di iniziare, poi verifica che una suoneria normale o un breve video venga riprodotto dall\'altoparlante bagnato.',
    },
    {
      type: 'card',
      icon: 'mdi:microphone-question',
      title: 'Perché il microfono è diverso',
      html: 'La porta del microfono è un percorso di ingresso con una maglia protettiva e un minuscolo sensore di pressione, non un diaframma dell\'altoparlante che può spingere l\'aria verso l\'esterno. Non dare per scontato che un tono espulsore d\'acqua ripulisca le registrazioni ovattate del microfono. Lascia asciugare il dispositivo ed evita di infilare oggetti nel foro del microfono.',
    },
    { type: 'title', text: 'Volume, Distorsione e Comfort Uditivo', level: 2 },
    {
      type: 'paragraph',
      html: 'Un tono espulsore d\'acqua è volutamente ripetitivo e può risultare fastidioso in una stanza silenziosa. L\'obiettivo non è il massimo volume, ma un movimento sufficiente del diaframma per disturbare le goccioline. Se il tono è doloroso, riduci il volume o allontana il dispositivo mantenendo l\'uscita dell\'altoparlante libera. Il comfort uditivo è importante perché un ciclo di pulizia riuscito dovrebbe durare pochi secondi, non un\'esposizione prolungata.',
    },
    {
      type: 'paragraph',
      html: 'La distorsione è un segnale di avvertimento utile. Un tono basso pulito suona stabile, anche se il corpo del telefono vibra. Un tono cattivo suona crepitante, ruvido, metallico o instabile. Questo può accadere perché l\'acqua si sta muovendo, perché l\'altoparlante sta raggiungendo il suo limite di escursione o perché l\'amplificatore del dispositivo sta clippando. Abbassare il volume è la prima correzione; ripetere più forte è la mossa sbagliata.',
    },
    {
      type: 'list',
      icon: 'mdi:volume-medium',
      items: [
        'Usa i pulsanti del volume del dispositivo e il cursore del volume dello strumento insieme; uno dei due può rendere l\'uscita troppo alta.',
        'Evita di appoggiare l\'altoparlante contro un tavolo, un cuscino o la mano, perché bloccare il flusso d\'aria aumenta i crepitii.',
        'Fai una pausa tra i cicli in modo che il driver e l\'amplificatore non siano mantenuti a potenza elevata in modo continuo.',
        'Se la musica normale continua a gracchiare dopo il tempo di asciugatura, consideralo un sintomo di riparazione, non un problema di pulizia.',
      ],
    },
    {
      type: 'message',
      title: 'Regola del comfort',
      ariaLabel: 'Regola del comfort',
      html: 'Se il tono ti sembra troppo forte per le orecchie, è già più forte del necessario per un primo tentativo. L\'espulsione dell\'acqua dipende dal movimento e dall\'orientamento, non da un volume punitivo.',
    },
    { type: 'title', text: 'Risoluzione dei Problemi Dopo il Tono', level: 2 },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Cerca riparazione se compaiono questi segni',
      badge: 'Stop',
      icon: 'mdi:close-octagon',
      html: 'Smetti di usare l\'espulsione sonora se il dispositivo si surriscalda in modo anomalo, si spegne, mostra avvisi di liquido, non emette alcun suono dopo la verifica delle rotte o l\'altoparlante crepita durante il parlato normale. Questi sintomi possono indicare danni che vanno oltre le goccioline nella griglia.',
    },
    {
      type: 'table',
      headers: ['Risultato dopo 30 secondi', 'Significato', 'Passo successivo'],
      rows: [
        ['Suono più chiaro', 'La gocciolina probabilmente si è mossa', 'Fermati e lascia riposare il dispositivo'],
        ['Piccolo miglioramento', 'Rimane un po\' di umidità', 'Aspetta, poi ripeti un breve ciclo'],
        ['Nessun cambiamento', 'L\'ostruzione potrebbe essere più profonda o appiccicosa', 'Asciuga naturalmente e controlla rotta e impostazioni'],
        ['Distorsione peggiore', 'Il driver potrebbe essere sollecitato o danneggiato', 'Fermati, abbassa il volume e considera l\'assistenza'],
      ],
    },
    {
      type: 'summary',
      title: 'Conclusione pratica',
      items: [
        'Usa 165 Hz per primo perché bilancia movimento e compatibilità.',
        'Punta la griglia verso il basso e mantieni il ciclo breve.',
        'Considera il tono come recupero dell\'altoparlante, non come asciugatura completa del dispositivo.',
        'Le indicazioni del produttore sui liquidi prevalgono su qualsiasi strumento web.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Pronto per espellere',
    statusPlaying: 'Tono in esecuzione',
    statusComplete: 'Ciclo completato',
    frequencyLabel: 'Frequenza',
    volumeLabel: 'Volume',
    durationLabel: 'Durata',
    startButton: 'Avvia espulsore acqua',
    stopButton: 'Ferma tono',
    hertzUnit: 'Hz',
    secondsShort: 's',
    presetGentle: 'Delicato',
    presetStandard: '165 Hz',
    presetDeep: 'Profondo',
    safetyTitle: 'Sicurezza prima di tutto',
    safetyText: 'Inizia sotto il volume massimo e fermati se l\'altoparlante vibra o distorce.',
    bestResult: 'Risultato migliore',
    bestResultText: 'Rimuovi la cover, orienta l\'altoparlante verso il basso ed esegui un ciclo breve.',
  },
};
