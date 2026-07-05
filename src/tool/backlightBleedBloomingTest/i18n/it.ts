import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BacklightBleedBloomingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-perdita-retroilluminazione-blooming';
const title = 'Test di Perdita di Retroilluminazione e Blooming';
const description =
  'Esegui un test di perdita di retroilluminazione a schermo intero nero puro e un test di blooming con cerchio bianco trascinabile per OLED, Mini LED, IPS, VA, monitor, laptop e TV.';

const faqData = [
  {
    question: 'Come posso testare le perdite di retroilluminazione online?',
    answer:
      'Spegni le luci della stanza, imposta la luminosità al massimo, pulisci lo schermo, apri il test nero puro a schermo intero, attendi che il cursore scompaia e ispeziona i bordi e gli angoli alla ricerca di perdite di luce fisse.',
  },
  {
    question: 'Qual è la differenza tra perdita di retroilluminazione e glow IPS?',
    answer:
      'La perdita di retroilluminazione è solitamente una macchia luminosa fissa vicino alla cornice causata dalla pressione sul pannello o da un assemblaggio imperfetto. Il glow IPS cambia sensibilmente con l\'angolo di visione e la posizione degli occhi, specialmente negli angoli.',
  },
  {
    question: 'Che aspetto ha il blooming su un TV o monitor Mini LED?',
    answer:
      'Il blooming è un alone visibile attorno a un oggetto luminoso su sfondo nero. Appare quando una zona di local dimming illumina un\'area più grande dell\'oggetto stesso.',
  },
  {
    question: 'I pannelli OLED possono avere perdite di retroilluminazione?',
    answer:
      'I pannelli OLED non usano una retroilluminazione tradizionale, quindi non dovrebbero mostrare perdite di luce tipiche degli LCD. Possono comunque presentare problemi di uniformità vicino al nero, dominanti, bande verticali o neri sollevati a causa di impostazioni della sorgente o del display.',
  },
  {
    question: 'Dovrei restituire un monitor con perdita di luce?',
    answer:
      'La decisione di restituzione dipende dalla gravità, dal tipo di pannello, dal prezzo e dalla politica di garanzia. Un angolo luminoso visibile durante film o giochi normali è più grave di una macchia debole visibile solo in una foto a lunga esposizione.',
  },
];

const howToData = [
  {
    name: 'Preparare la stanza',
    text: 'Spegni le lampade, chiudi le tende, pulisci lo schermo e lascia che i tuoi occhi si adattino per un minuto in modo che polvere e riflessi non sembrino difetti del pannello.',
  },
  {
    name: 'Aumentare la luminosità del display',
    text: 'Imposta la luminosità al 100 percento o nella modalità HDR che vuoi ispezionare. Disattiva i sensori di luce ambientale aggressivi durante il test.',
  },
  {
    name: 'Eseguire il test nero',
    text: 'Avvia la modalità perdita di retroilluminazione. La pagina passa a schermo intero e mostra nero esatto. Ispeziona la cornice, gli angoli e eventuali macchie fisse.',
  },
  {
    name: 'Eseguire il test di blooming',
    text: 'Avvia la modalità local dimming, quindi trascina il cerchio bianco sullo schermo. Fai attenzione agli aloni, al dimming ritardato, alle zone a forma di griglia e ai neri sollevati.',
  },
  {
    name: 'Uscire in modo pulito',
    text: 'Premi Esc per uscire dallo schermo intero nativo. L\'interfaccia di configurazione ritorna e lo stato del test si reimposta.',
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

export const content: ToolLocaleContent<BacklightBleedBloomingTestUI> = {
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
      text: 'Test di Perdita di Retroilluminazione Online: Cosa Cercare su un Nuovo Monitor o TV',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un <strong>test di perdita di retroilluminazione online</strong> è più utile durante il periodo di reso di un nuovo monitor, laptop gaming o televisore. Il test mostra un campo a schermo intero generato dal browser in <code>#000000</code> in modo che la retroilluminazione LCD sia l\'unica possibile fonte di luce indesiderata. Se il pannello, lo stack di diffusori, la pressione della cornice o l\'assemblaggio lasciano passare la luce, lo vedrai solitamente come angoli più chiari, bordi nuvolosi o macchie che rimangono nella stessa posizione fisica.',
    },
    {
      type: 'paragraph',
      html: 'Usa il test con aspettative realistiche. I pannelli LCD hanno bisogno di una retroilluminazione e piccole variazioni possono essere normali, specialmente sui display IPS e VA economici. La domanda pratica non è se una foto del telefono a lunga esposizione può esagerare una macchia. La domanda è se la perdita di luce è visibile ai tuoi occhi durante film sc uri, schermate di caricamento dei giochi, scene notturne, sfondi desktop neri o video letterbox.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Fai questo prima di giudicare il pannello',
      badge: 'Configurazione',
      html: 'Spegni le luci della stanza, pulisci il vetro, imposta la luminosità al 100 percento, disattiva i sensori di luce ambientale e attendi qualche secondo affinché i tuoi occhi si adattino. Riflessi, impronte digitali e il cursore del mouse possono tutti creare falsi positivi durante un\'ispezione dell\'uniformità del nero.',
    },
    {
      type: 'list',
      items: [
        'Controlla i bordi superiore e inferiore dove la pressione della cornice spesso crea bagliori fissi',
        'Ispeziona tutti e quattro gli angoli alla ricerca di perdite di luce triangolari o a mezzaluna',
        'Muovi leggermente la testa per separare il bagliore da angolo di visione dalla perdita fissa',
        'Prendi appunti prima con gli occhi, perché le fotocamere possono sovraesporre gli schermi neri',
        'Ritesta dopo che il pannello si è riscaldato per 15-30 minuti se il risultato è al limite',
      ],
    },
    {
      type: 'title',
      text: 'Perdita di Retroilluminazione, Glow IPS, Clouding e Uniformità del Nero',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Problema', 'Cosa vedi', 'Come si comporta', 'Pannelli più comuni'],
      rows: [
        ['Perdita di retroilluminazione', 'Macchia luminosa fissa su bordo o angolo', 'Rimane nello stesso punto muovendo la testa', 'IPS, VA, TN LCD'],
        ['Glow IPS', 'Bagliore lattiginoso dagli angoli su immagini scure', 'Cambia sensibilmente con l\'angolo di visione e la distanza', 'IPS LCD'],
        ['Clouding', 'Grandi aree nuvolose irregolari sul nero', 'Solitamente fisso, a volte ridotto abbassando la luminosità', 'TV e monitor LCD edge-lit'],
        ['Schacciamento neri VA', 'I dettagli scuri scompaiono o strisciano in movimento', 'Dipende dal contenuto e dalla transizione dei pixel', 'VA LCD'],
        ['Banding OLED vicino al nero', 'Bande verticali o orizzontali vicino al nero', 'Visibile su grigio vicino al nero, non su nero puro', 'OLED'],
      ],
    },
    {
      type: 'paragraph',
      html: 'L\'errore più comune è chiamare ogni artefatto visibile al buio perdita di retroilluminazione. Il <strong>glow IPS</strong> è ottico: diventa più forte quando ti siedi vicino, guardi il pannello fuori asse o osservi gli angoli da un angolo accentuato. La vera perdita di retroilluminazione è meccanica o di assemblaggio: rimane attaccata alla stessa area della cornice anche se la posizione degli occhi cambia. Questa distinzione è importante perché molti rivenditori trattano le perdite gravi in modo diverso dal normale glow IPS.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'IPS',
          description: 'Ampi angoli di visione, frequente bagliore negli angoli e perdite visibili se la cornice preme il pannello in modo disomogeneo.',
          points: ['Da verificare preferibilmente dalla normale distanza di visione', 'Il glow cambia con la posizione della testa', 'Le perdite sul bordo possono essere rilevanti per la garanzia se gravi'],
        },
        {
          title: 'VA',
          description: 'Contrasto nativo più elevato, solitamente meno glow tipo IPS, ma può mostrare clouding e transizioni scure lente.',
          points: ['Il nero appare più profondo dell\'IPS', 'L\'uniformità può variare da unità a unità', 'Il blooming appare sui modelli con local dimming'],
        },
        {
          title: 'OLED',
          description: 'Nessuna retroilluminazione LCD, quindi il nero puro dovrebbe essere spento, ma l\'uniformità vicino al nero e la dominante possono ancora contare.',
          points: ['Il nero puro dovrebbe scomparire in una stanza buia', 'Testa le diapositive di grigio separatamente per il banding', 'Evita di confondere il nero sollevato della sorgente con perdite del pannello'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Come Eseguire un Test Nero Puro Affidabile',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La modalità test nero rimuove deliberatamente l\'interfaccia normale. Una volta avviato, il pannello di vetro scompare, gli eventi del puntatore vengono disattivati sull\'interfaccia di configurazione, la pagina richiede lo schermo intero nativo e il livello di test utilizza nero esatto. Dopo due secondi senza movimento del mouse, il cursore viene nascosto in modo che non crei un punto di riferimento bianco né contamini un\'ispezione al buio.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '#000000', label: 'colore di sfondo del test' },
        { value: '2 s', label: 'timeout inattività cursore' },
        { value: '100%', label: 'luminosità consigliata' },
        { value: '0', label: 'risorse esterne in modalità test' },
      ],
    },
    {
      type: 'summary',
      title: 'Checklist del test nero',
      items: [
        'Usa la risoluzione nativa e disattiva lo zoom del browser se il display scala in modo strano',
        'Imposta la luminosità SDR abbastanza alta da rivelare difetti, o testa HDR nella modalità esatta che intendi usare',
        'Ispeziona prima dalla tua posizione di visione normale, poi da leggermente più lontano',
        'Non giudicare da una foto del telefono a meno che l\'esposizione non sia bloccata e assomigli a ciò che vedono i tuoi occhi',
        'Premi Esc per uscire dallo schermo intero e ripeti il test dopo aver cambiato le impostazioni del monitor',
      ],
    },
    {
      type: 'tip',
      title: 'Le foto con la fotocamera possono far sembrare terribili dei buoni pannelli',
      html: 'L\'esposizione automatica del telefono cerca di schiarire uno schermo nero, il che esagera i deboli bagliori e può trasformare il normale comportamento LCD in un\'immagine drammatica. Se hai bisogno di prove per la garanzia, blocca l\'esposizione manualmente e includi una nota che descriva se il problema è visibile durante contenuti reali.',
    },
    {
      type: 'title',
      text: 'Test di Blooming con Local Dimming per Display Mini LED e FALD',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La modalità <strong>test di blooming per monitor</strong> posiziona un cerchio bianco puro su uno sfondo nero puro. Su un Mini LED, LCD FALD o TV con local dimming, quel piccolo oggetto costringe una o più zone di retroilluminazione ad accendersi mentre le zone vicine cercano di rimanere nere. Se l\'algoritmo di dimming, il numero di zone, il diffusore o il contrasto del pannello non riescono a isolare la luce, vedi un alone attorno al cerchio.',
    },
    {
      type: 'paragraph',
      html: 'Trascinare il cerchio è importante. Il blooming statico è solo una parte della storia. Un punto luminoso in movimento rivela ritardo di dimming, transizioni di zona, pompaggio, campi stellari schiacciati, sottotitoli sollevati e comportamento a forma di griglia. Un buon sistema di local dimming dovrebbe mantenere l\'oggetto luminoso minimizzando la foschia attorno ed evitando macchie luminose ritardate dopo che il cerchio si è spostato.',
    },
    {
      type: 'table',
      headers: ['Artefatto', 'Cosa osservare', 'Spiegazione probabile'],
      rows: [
        ['Alone', 'Bagliore morbido attorno al cerchio bianco', 'La zona di local dimming è più grande dell\'oggetto luminoso'],
        ['Griglia di zone', 'Blocchi quadrati o rettangolari compaiono attorno al movimento', 'Basso numero di zone o layout Mini LED visibile'],
        ['Ritardo dimming', 'Una macchia luminosa segue il cerchio in ritardo', 'L\'algoritmo risponde lentamente al movimento'],
        ['Sollevamento nero', 'L\'intero schermo diventa grigio quando appare il cerchio', 'Dimming globale o controllo del contrasto debole'],
        ['Bloom dei sottotitoli', 'Ampia foschia attorno a piccolo testo bianco o UI', 'Luminosità aggressiva con zone locali limitate'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:television-ambient-light',
      title: 'Miglior caso d\'uso',
      html: 'Collega il laptop o la console al TV costoso che usi realmente, apri questo tester di local dimming nel browser e trascina il punto luminoso sull\'esatta dimensione dello schermo. Una piccola anteprima incorporata non può stressare le zone di local dimming come può fare uno schermo intero in bianco e nero.',
    },
    {
      type: 'title',
      text: 'Aspettative per Tipo di Pannello: OLED, Mini LED, IPS e VA',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Cosa ogni tecnologia tende a fare bene e male',
      items: [
        {
          pro: 'OLED spegne i singoli pixel per un nero vero e non dovrebbe mostrare perdite di retroilluminazione LCD.',
          con: 'OLED può mostrare banding vicino al nero, dominanti, limitazione automatica della luminosità e rischio di burn-in con contenuti statici.',
        },
        {
          pro: 'Mini LED può raggiungere un\'alta luminosità HDR e ridurre la foschia su grandi aree rispetto agli LCD edge-lit.',
          con: 'Mini LED usa ancora zone, quindi piccoli oggetti luminosi possono creare blooming quando il numero di zone o la qualità dell\'algoritmo sono limitati.',
        },
        {
          pro: 'IPS è stabile per colore e angolo di visione, utile per lavoro desktop e visione condivisa.',
          con: 'Il glow IPS e le perdite sui bordi sono lamentele comuni nelle scene scure, specialmente seduti vicino.',
        },
        {
          pro: 'VA ha spesso un contrasto nativo molto migliore dell\'IPS e può apparire più profondo in stanze buie.',
          con: 'VA può mostrare strisciamento scuro, clouding o blooming sulle versioni con local dimming.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Perdita di retroilluminazione', definition: 'Luce indesiderata che fuoriesce attraverso lo stack LCD, solitamente vicino alla cornice, visibile su immagini nere.' },
        { term: 'Blooming', definition: 'Un alone attorno a un oggetto luminoso causato da zone di local dimming che illuminano un\'area più grande dell\'oggetto.' },
        { term: 'Glow IPS', definition: 'Schiarimento lattiginoso dipendente dall\'angolo nelle scene scure sui pannelli IPS.' },
        { term: 'FALD', definition: 'Full Array Local Dimming, dimming locale a matrice completa, dove la retroilluminazione LCD è divisa in zone controllate indipendentemente.' },
        { term: 'Mini LED', definition: 'Una retroilluminazione LCD che utilizza molti piccoli LED per aumentare il numero di zone e la luminosità HDR.' },
        { term: 'Uniformità del nero', definition: 'Quanto uniformemente un display riproduce contenuti neri o vicini al nero su tutta la superficie dello schermo.' },
      ],
    },
    {
      type: 'title',
      text: 'Quando un Difetto È Abbastanza Grave per Essere Restituito',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Segnali d\'allarme nel periodo di reso',
      badge: 'Garanzia',
      html: 'Considera di documentare rapidamente il problema se un angolo luminoso è visibile dalla normale distanza di visione, la stessa macchia ti distrae in film o giochi, il local dimming crea aloni evidenti attorno ai sottotitoli o un costoso display HDR performa peggio delle recensioni tipiche per lo stesso modello.',
    },
    {
      type: 'paragraph',
      html: 'Una decisione equa considera i contenuti reali e la categoria del prodotto. Un monitor IPS da ufficio economico può avere un leggero bagliore agli angoli normale per la sua classe. Un monitor Mini LED premium o un TV di fascia alta dovrebbe controllare i livelli di nero e il blooming molto meglio. Se il difetto è evidente in film letterbox, menu di gioco scuri, scene spaziali o lavoro desktop, non è solo una curiosità di laboratorio.',
    },
    {
      type: 'list',
      items: [
        'Controlla lo stesso contenuto su un altro display per escludere la sorgente',
        'Reimposta le impostazioni dell\'immagine prima di presumere che il pannello sia difettoso',
        'Prova local dimming basso, medio e alto perché gli algoritmi differiscono per modalità',
        'Annota luminosità, modalità HDR, modalità local dimming e distanza di visione nei tuoi appunti',
        'Se restituisci, descrivi ciò che vedono i tuoi occhi invece di inviare solo foto sovraesposte',
      ],
    },
    {
      type: 'title',
      text: 'Perché Questo Test Usa Codice Invece di Video',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I file video possono introdurre artefatti di compressione, lavoro di decodifica del browser, buffering, conversione della gamma cromatica e variazioni del frame pacing. Un test di difetti del pannello non dovrebbe dipendere da un file MP4. Questo strumento utilizza solo HTML e CSS lato client per gli stati di test: nero esatto per lo sfondo e bianco esatto per il cerchio in movimento. Questo mantiene basso il carico di lavoro ed evita attività di rete dopo il caricamento della pagina.',
    },
    {
      type: 'paragraph',
      html: 'La posizione del cerchio di blooming viene applicata tramite <code>requestAnimationFrame</code>, che sincronizza gli aggiornamenti visivi con il ciclo di refresh del browser. Gli input del puntatore, mouse e touch aggiornano le coordinate target, poi il frame di animazione successivo sposta il cerchio bianco. Questo rende il trascinamento fluido su monitor ad alto refresh, tablet e telefoni OLED senza fare lavoro inutile ad ogni evento di input grezzo.',
    },
    {
      type: 'message',
      title: 'Nota su privacy e prestazioni',
      ariaLabel: 'Nota su privacy e prestazioni',
      html: 'Gli stati di test attivi non richiedono tracciamento, video, immagini remote o caricamenti di misurazioni. Sono intenzionalmente semplici in modo che laptop datati, browser TV e configurazioni da salotto possano stressare il pannello del display invece della CPU.',
    },
    {
      type: 'title',
      text: 'Risoluzione dei Problemi con Risultati Errati',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Sintomo durante il test', 'Possibile causa', 'Cosa provare'],
      rows: [
        ['Lo schermo nero non è veramente nero', 'Gamma RGB limitata, impostazione nero sollevato, tone mapping HDR o overlay del browser', 'Imposta uscita RGB completa, disattiva il contrasto dinamico e verifica che nessun filtro notturno del SO sia attivo'],
        ['Il cursore del mouse rimane visibile', 'Il movimento ha reimpostato il timer di inattività o il browser ha brevemente bloccato il nascondimento del cursore', 'Smetti di muovere il mouse per due secondi o usa un telecomando/tastiera'],
        ['Lo schermo intero non si avvia', 'Il browser ha negato lo schermo intero al di fuori di un clic diretto o limitazione del browser TV', 'Premi di nuovo il pulsante di avvio o usa la scorciatoia schermo intero del browser'],
        ['Il blooming cambia tra le modalità', 'L\'impostazione di local dimming cambia il comportamento delle zone', 'Ritesta Basso, Medio, Alto e Spento per capire il compromesso'],
        ['OLED appare grigio', 'Disallineamento gamma video, riflessi della stanza o modalità immagine con neri sollevati', 'Controlla gamma sorgente, livello nero, luminosità e riflessi ambientali'],
      ],
    },
    {
      type: 'summary',
      title: 'Interpretazione pratica',
      items: [
        'La perdita di retroilluminazione è più convincente quando è fissa sul posto e visibile in contenuti scuri reali',
        'Il glow IPS cambia con l\'angolo, quindi testa dalla posizione in cui sei effettivamente seduto',
        'Il blooming è una limitazione del local dimming, non un problema di pixel morti',
        'OLED dovrebbe superare il test nero puro, ma ha comunque bisogno di controlli separati di uniformità vicino al nero',
        'Un buon setup di test è buio, a schermo intero, con alta luminosità e privo di riflessi',
      ],
    },
  ],
  ui: {
    bleedTitle: 'Perdita di retroilluminazione',
    bleedDescription: 'Nero esatto a schermo intero per rilevare perdite sui bordi, glow IPS, clouding e controlli di uniformità del nero.',
    bloomingTitle: 'Local dimming',
    bloomingDescription: 'Un cerchio bianco trascinabile che stressa Mini LED, FALD, gestione OLED vicino al nero e zone di dimming TV.',
    startBleed: 'Avvia test nero',
    startBlooming: 'Avvia test blooming',
    prepTitle: 'Prima di iniziare',
    prepBrightness: 'Imposta la luminosità del monitor o TV al 100%.',
    prepRoom: 'Spegni le luci della stanza ed elimina i riflessi.',
    prepFullscreen: 'Premi Esc per uscire dallo schermo intero e reimpostare il test.',
    panelLabel: 'Anteprima difetti pannello',
    parametersLabel: 'Parametri del test',
    modeControlsLabel: 'Modalità test retroilluminazione',
    blackLevelLabel: 'Nero',
    blackLevelValue: '#000000',
    brightnessLabel: 'Luminosità',
    brightnessValue: '100%',
    idleLabel: 'Cursore',
    idleValue: '2s',
    fullscreenLabel: 'Schermo intero',
    fullscreenValue: 'API',
    escapeHint: 'Test nero puro in corso. Smetti di muovere il mouse per 2 secondi per nascondere il cursore. Premi Esc per uscire.',
    dragHint: 'Trascina o tocca il cerchio bianco. Osserva aloni, griglie di zone e dimming ritardato. Premi Esc per uscire.',
  },
};
