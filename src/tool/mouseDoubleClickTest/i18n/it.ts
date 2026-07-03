import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDoubleClickTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-doppio-clic-mouse';
const title = 'Test Doppio Clic del Mouse';
const description =
  'Testa ogni pulsante del mouse e rileva doppi clic indesiderati, interruttori usurati e rimbalzo dei contatti con misurazione del tempo per pulsante nel tuo browser.';

const faqData = [
  {
    question: 'Cos\'è un problema di doppio clic del mouse?',
    answer:
      'Un problema di doppio clic si verifica quando una pressione fisica viene segnalata come due clic. Può interessare il pulsante sinistro, il pulsante destro, il clic della rotella o i pulsanti laterali, ed è generalmente causato dall\'usura dell\'interruttore, dal rimbalzo dei contatti, dalle impostazioni di anti-rimbalzo del firmware o dall\'instabilità del segnale wireless.',
  },
  {
    question: 'Quale intervallo è considerato sospetto?',
    answer:
      'Intervalli molto brevi tra i clic sono sospetti perché i doppi clic umani richiedono normalmente più tempo. Questo strumento parte da una soglia di 80 ms, ma puoi regolarla in base al mouse e al tuo stile di test.',
  },
  {
    question: 'Un browser può dimostrare che l\'interruttore è guasto?',
    answer:
      'Un browser non può ispezionare direttamente l\'interruttore elettrico, ma può registrare gli eventi di clic che il sistema operativo riceve. Intervalli sospetti ripetuti durante il test a clic singolo sono una forte evidenza di rimbalzo o doppio clic indesiderato.',
  },
  {
    question: 'Come dovrei testare correttamente?',
    answer:
      'Clicca lentamente e deliberatamente, mirando a pressioni singole. Se il contatore sospetti aumenta anche quando non stai facendo doppio clic intenzionalmente, ripeti il test su un\'altra porta USB, un altro browser e un altro computer se possibile.',
  },
];

const howToData = [
  {
    name: 'Imposta la soglia di rilevamento',
    text: 'Inizia con 80 ms. Abbassala per un rilevamento rigoroso del rimbalzo dell\'interruttore o aumentala se il tuo dispositivo produce intervalli accidentali leggermente più ampi.',
  },
  {
    name: 'Clicca come un normale clic singolo',
    text: 'Premi ogni pulsante del mouse un clic alla volta sopra la rappresentazione visiva del mouse. Non fare intenzionalmente doppio clic durante il primo passaggio.',
  },
  {
    name: 'Osserva il contatore sospetti',
    text: 'Se compaiono eventi sospetti mentre fai clic singoli, controlla quale pulsante visivo è stato evidenziato e confrontalo con i chip degli eventi compatti.',
  },
  {
    name: 'Confronta con un altro dispositivo',
    text: 'Un mouse sano dovrebbe mantenere un punteggio alto con la stessa soglia. Confrontare i dispositivi aiuta a distinguere i guasti hardware dalle impostazioni software.',
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

export const content: ToolLocaleContent<MouseDoubleClickTestUI> = {
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
      text: 'Test Doppio Clic del Mouse: Diagnostica il Rimbalzo dei Pulsanti Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un mouse che fa doppio clic quando premi una volta non è solo fastidioso. Può aprire cartelle per errore, annullare azioni di trascinamento, sparare due colpi in un gioco, chiudere schede del browser o far apparire e scomparire i menu contestuali prima di poterli usare. Questo test online del doppio clic del mouse si concentra sul segnale diagnostico utile: <strong>l\'intervallo di tempo tra gli eventi dei pulsanti segnalati dal tuo sistema operativo</strong>.',
    },
    {
      type: 'paragraph',
      html: 'A differenza di un semplice contatore di clic, questo strumento traccia ogni pulsante indipendentemente: clic sinistro, clic destro, clic rotella, indietro del browser e avanti del browser. Questo è importante perché un mouse può avere un pulsante destro difettoso mentre il sinistro è ancora sano, o un pulsante laterale usurato che scatta solo dopo mesi di gaming o scorciatoie di produttività.',
    },
    {
      type: 'title',
      text: 'Cosa Misura Questo Test dei Pulsanti del Mouse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando premi un pulsante del mouse, il browser riceve un evento puntatore contenente il codice del pulsante. Lo strumento memorizza l\'ultimo timestamp per lo stesso pulsante fisico e lo confronta con la pressione successiva dello stesso pulsante. Se l\'intervallo è più breve della soglia selezionata, l\'evento viene contrassegnato come sospetto perché un normale secondo clic intenzionale richiede normalmente più tempo.',
    },
    {
      type: 'list',
      items: [
        'Pulsante sinistro: utile per rilevare doppi clic accidentali durante l\'apertura di file, la selezione di testo o lo spostamento di finestre',
        'Pulsante destro: utile quando i menu contestuali lampeggiano, si aprono due volte o si chiudono immediatamente',
        'Pulsante rotella: utile per mouse in cui il clic centrale apre più schede o fallisce dopo una navigazione intensa',
        'Pulsanti Indietro e Avanti: utili per mouse da gaming e mouse da produttività con interruttori laterali',
        'Misurazione per pulsante: evita di mescolare un clic sinistro con un clic destro e chiamarlo falso doppio clic',
      ],
    },
    {
      type: 'title',
      text: 'Perché i Mouse Iniziano a Fare Doppio Clic',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La maggior parte dei mouse utilizza piccoli interruttori meccanici sotto ogni pulsante. Quando i contatti dell\'interruttore si chiudono, il metallo può rimbalzare elettricamente per un periodo molto breve prima di stabilizzarsi. Il firmware del mouse normalmente filtra questo rumore con una logica di anti-rimbalzo. Man mano che l\'interruttore si usura, il rimbalzo può diventare più lungo, più rumoroso o irregolare, per cui il computer riceve due pressioni del pulsante anche se il tuo dito ha fatto una sola pressione fisica.',
    },
    {
      type: 'paragraph',
      html: 'Il doppio clic non è sempre causato dalla stessa cosa. Può trattarsi di usura meccanica dell\'interruttore, anti-rimbalzo del firmware impostato in modo troppo aggressivo, polvere o ossidazione all\'interno dell\'interruttore, instabilità dei pacchetti wireless, software macro, un cavo danneggiato o un\'impostazione del sistema operativo che rende più facili da notare i doppi clic accidentali.',
    },
    {
      type: 'table',
      headers: ['Sintomo', 'Causa Probabile', 'Cosa Testare'],
      rows: [
        ['Un clic apre i file come se fosse doppio clic', 'Rimbalzo dell\'interruttore sinistro o confusione della velocità di doppio clic del SO', 'Testa Sinistro con pressioni singole lente a 80 ms'],
        ['Il menu del clic destro lampeggia o si chiude', 'Rimbalzo dell\'interruttore destro o software che intercetta i menu contestuali', 'Testa Destro e disabilita temporaneamente le utility del mouse'],
        ['Il clic centrale apre due schede', 'Usura dell\'interruttore della rotella', 'Testa Rotella con pressioni singole deliberate'],
        ['Il pulsante indietro salta due pagine', 'Rimbalzo dell\'interruttore laterale o ripetizione del collegamento del browser', 'Testa Indietro e Avanti separatamente'],
        ['Succede solo in modalità wireless', 'Interferenza wireless, batteria scarica o posizionamento del ricevitore', 'Riprova con cavo o avvicina il ricevitore'],
      ],
    },
    {
      type: 'title',
      text: 'Scegliere la Giusta Soglia di Anti-Rimbalzo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La soglia è l\'intervallo massimo che questo strumento considera ancora sospetto. Il valore predefinito, <strong>80 ms</strong>, è un compromesso pratico: abbastanza rigoroso da catturare molti eventi duplicati indesiderati, ma non così aggressivo da far sì che ogni normale doppio clic deliberato diventi un guasto hardware.',
    },
    {
      type: 'table',
      headers: ['Soglia', 'Ideale Per', 'Come Interpretarla'],
      rows: [
        ['30-50 ms', 'Controlli rigorosi del rimbalzo elettrico', 'Buono per confermare eventi duplicati molto rapidi da un interruttore usurato'],
        ['60-90 ms', 'Diagnosi generale del doppio clic del mouse', 'Miglior intervallo predefinito per la maggior parte dei mouse da gaming e da ufficio'],
        ['100-140 ms', 'Interruttori usurati intermittenti', 'Utile quando il mouse a volte crea intervalli accidentali più ampi'],
        ['150-180 ms', 'Test di stress e interruttori deboli', 'Usare con cautela, perché i doppi clic intenzionali rapidi possono rientrare in questo intervallo'],
      ],
    },
    {
      type: 'title',
      text: 'Come Eseguire un Test Affidabile',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Per il primo passaggio, non fare intenzionalmente doppio clic. Premi ogni pulsante del mouse lentamente e deliberatamente, un pulsante alla volta, mentre il cursore è sopra la rappresentazione visiva del mouse. Un interruttore sano dovrebbe produrre eventi singoli stabili. Se il contatore sospetti aumenta durante pressioni singole lente, ripeti lo stesso test del pulsante più volte per confermare lo schema.',
    },
    {
      type: 'list',
      items: [
        'Testa Sinistro con 20-30 pressioni lente, poi Destro, poi Rotella, poi i pulsanti laterali',
        'Non trascinare il mouse durante il test del rimbalzo dei pulsanti, perché il movimento può distrarre dal risultato temporale',
        'Se un pulsante mostra eventi sospetti, ripeti lo stesso test dopo aver cambiato porta USB o browser',
        'Per i mouse wireless, testa con una batteria nuova e il ricevitore vicino al mouse',
        'Se solo un pulsante fallisce ripetutamente, il guasto è probabilmente in quell\'interruttore specifico piuttosto che nell\'intero dispositivo',
      ],
    },
    {
      type: 'title',
      text: 'Interpretare i Risultati',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Risultato', 'Significato', 'Passo Successivo Raccomandato'],
      rows: [
        ['0 eventi sospetti dopo molte pressioni', 'I pulsanti testati sembrano sani con la soglia selezionata', 'Mantieni la soglia predefinita o ripeti il test più tardi se i sintomi ritornano'],
        ['1 evento sospetto isolato', 'Potrebbe essere un vero rimbalzo o una pressione rapida accidentale', 'Ripeti lo stesso pulsante lentamente prima di trarre conclusioni'],
        ['Eventi sospetti ripetuti su un pulsante', 'Forte segno di rimbalzo dell\'interruttore o contatti usurati', 'Testa su un altro computer e documenta il risultato'],
        ['Eventi sospetti su ogni pulsante', 'Potrebbe essere software, driver, utility macro o ambiente browser', 'Disabilita il software del mouse e riprova'],
        ['Solo la modalità wireless fallisce', 'Probabilmente batteria, posizionamento del ricevitore o interferenza', 'Prova la modalità cablata o avvicina il ricevitore'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Il punteggio di salute è un riepilogo rapido, non un verdetto definitivo. La prova più importante è <strong>quale pulsante</strong> ha prodotto eventi sospetti e se lo schema si ripete quando premi lo stesso pulsante lentamente. Un singolo evento negativo durante un test affrettato è meno significativo di cinque eventi sospetti del clic destro durante pressioni singole deliberate.',
    },
    {
      type: 'title',
      text: 'Prima di Sostituire il Mouse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Controlla se il software del tuo mouse ha un\'impostazione del tempo di anti-rimbalzo e riprova dopo averla modificata',
        'Disabilita macro, profili a fuoco rapido o rimappature dei pulsanti durante la diagnosi',
        'Prova una porta USB diversa, specialmente se utilizzi un hub o un connettore del pannello frontale',
        'Per i mouse wireless, testa con il dongle su un cavo di prolunga vicino al tappetino del mouse',
        'Confronta con un altro mouse sullo stesso computer per distinguere il guasto hardware dal comportamento software',
      ],
    },
    {
      type: 'title',
      text: 'Riparazione, Garanzia e Prove',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se il guasto è meccanico, pulire la scocca esterna raramente lo risolve in modo permanente perché il problema è all\'interno dei contatti dell\'interruttore. Alcuni utenti sostituiscono il microinterruttore, ma questo richiede saldatura e non vale la pena per tutti i mouse. Se il mouse è in garanzia, intervalli sospetti ripetuti sullo stesso pulsante sono una prova utile quando spieghi il problema all\'assistenza.',
    },
    {
      type: 'paragraph',
      html: 'Per i reclami in garanzia, registra una breve cattura dello schermo mentre premi lentamente il pulsante difettoso. Assicurati che i chip degli eventi mostrino l\'etichetta del pulsante e il tempo sospetto. Questo è più chiaro che dire "il mio mouse a volte fa doppio clic" perché dimostra il pulsante effettivo e il tempo approssimativo dell\'evento duplicato indesiderato.',
    },
    {
      type: 'title',
      text: 'Limitazioni di un Test del Mouse Basato su Browser',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Questo test misura gli eventi che raggiungono il browser. Non può ispezionare direttamente la forma d\'onda elettrica all\'interno dell\'interruttore e non può bypassare ogni driver, sistema operativo o utility del produttore. È comunque utile: se il browser riceve eventi duplicati, anche le tue normali applicazioni possono riceverli. Per una validazione a livello ingegneristico, strumenti hardware come oscilloscopi o tester per interruttori forniscono prove più approfondite, ma non sono necessari per la maggior parte delle diagnosi utente.',
    },
  ],
  ui: {
    badge: 'Lab Anti-Rimbalzo',
    clickTarget: 'Matrice Pulsanti',
    clickTargetHint: 'Premi sinistro, destro, rotella, indietro e avanti',
    totalClicks: 'Totale',
    suspiciousClicks: 'Sospetti',
    fastestGap: 'Intervallo più breve',
    healthScore: 'Punteggio salute',
    thresholdLabel: 'Soglia di rilevamento',
    thresholdUnit: 'ms',
    cleanEvent: 'pulito',
    suspiciousEvent: 'sospetto',
    reset: 'Azzera',
    statusIdle: 'Premi ogni pulsante del mouse per testarlo indipendentemente',
    statusClean: 'Nessun rimbalzo sospetto dei pulsanti rilevato',
    statusWarning: 'Rimbalzo sospetto rilevato su un pulsante del mouse',
    lastGap: 'Ultimo evento',
    logTitle: 'Eventi recenti dei pulsanti',
    emptyLog: 'Premi un pulsante qualsiasi del mouse sul corpo del mouse.',
    leftButton: 'Sinistro',
    middleButton: 'Rotella',
    rightButton: 'Destro',
    backButton: 'Indietro',
    forwardButton: 'Avanti',
    otherButton: 'Altro',
  },
};
