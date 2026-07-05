import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TouchScreenTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-touch-screen';
const title = 'Test Touch Screen Online';
const description = 'Disegna su una tela a schermo intero per verificare zone morte del touchscreen, mancata rilevazione dei tocchi, risposta sui bordi, interferenza del palmo e quanti tocchi simultanei il tuo telefono o tablet può rilevare.';

const faqData = [
  {
    question: 'Come faccio a testare le zone morte del touch screen?',
    answer: 'Apri il tester sul dispositivo, trascina lentamente un dito su tutto il display e cerca interruzioni nella linea. Ripeti lungo i bordi, l\'area della tastiera, gli angoli e qualsiasi punto in cui noti spesso tocchi mancati.',
  },
  {
    question: 'Come eseguire un test multi-touch online?',
    answer: 'Appoggia più dita sulla tela contemporaneamente. Il contatore di tocchi attivi mostra quanti contatti il browser sta ricevendo in tempo reale, mentre il contatore di picco registra il numero massimo di tocchi simultanei raggiunto durante la sessione.',
  },
  {
    question: 'Questo strumento può riparare un touchscreen che non risponde?',
    answer: 'No. Lo strumento non ripara l\'hardware né ricalibra il digitalizzatore. Aiuta a documentare i sintomi in modo che tu possa capire se il problema dipende da una pellicola protettiva, vetro sporco, bug software, pressione della cover o un danno fisico al touch.',
  },
  {
    question: 'Perché il mio telefono rileva meno dita del previsto?',
    answer: 'Alcuni pannelli, browser, sistemi operativi, pellicole protettive, caricabatterie e impostazioni di accessibilità limitano o filtrano i contatti touch. Prova il test senza cover, a batteria, dopo aver pulito il vetro e con un altro browser prima di concludere che il pannello sia difettoso.',
  },
];

const howToData = [
  { name: 'Pulisci il vetro e rimuovi le interferenze evidenti', text: 'Pulisci lo schermo, asciuga le dita, scollega caricabatterie rumorosi e togli guanti spessi o accessori conduttivi prima del test.' },
  { name: 'Traccia passate orizzontali e verticali lente', text: 'Copri il display con tratti paralleli da bordo a bordo. Un pannello sano dovrebbe produrre linee continue senza interruzioni.' },
  { name: 'Controlla angoli e zone dei gesti', text: 'Traccia le cornici, l\'area della tastiera, l\'area notifiche e le zone dei gesti di navigazione: queste regioni spesso rivelano per prime un guasto parziale del digitalizzatore.' },
  { name: 'Misura i tocchi simultanei', text: 'Appoggia due, tre, quattro, cinque o più dita sulla tela e osserva il contatore di picco multi-touch.' },
  { name: 'Usa la modalità schermo intero per la conferma finale', text: 'Attiva la modalità a schermo intero e ripeti il test, così l\'interfaccia del browser non nasconde le zone touch superiori o inferiori.' },
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

export const content: ToolLocaleContent<TouchScreenTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Test touch screen online: zone morte, multi-touch e risposta al tocco', level: 2 },
    {
      type: 'paragraph',
      html: 'Un pannello touch può guastarsi in modi difficili da dimostrare con l\'uso normale delle app. Può succedere che un tasto della tastiera non venga rilevato solo vicino al bordo inferiore, che un\'app di disegno salti una sottile striscia verticale o che nei giochi un secondo dito venga perso quando il pollice preme già un controllo. Questo tester trasforma l\'intera pagina in una superficie di disegno, così ogni interruzione, tratto spezzato e limite dei contatti simultanei diventa immediatamente visibile.',
    },
    {
      type: 'paragraph',
      html: 'Ideale per ricerche come <strong>test touch screen</strong>, <strong>test multi touch online</strong>, <strong>verifica zone morte schermo</strong> e <strong>controllo tocco simultaneo</strong>. La tela registra il movimento delle dita in locale nel browser, senza caricare disegni, posizioni dei tocchi, identificativi del dispositivo o risultati diagnostici.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '0 installazioni', label: 'Funziona direttamente nel browser' },
        { value: 'In tempo reale', label: 'Contatore tocchi attivi' },
        { value: 'Tela', label: 'Mappa visiva delle zone morte' },
      ],
    },
    { type: 'title', text: 'Come identificare le zone morte del touchscreen', level: 3 },
    {
      type: 'paragraph',
      html: 'Una zona morta è un\'area in cui il digitalizzatore non segnala il contatto in modo affidabile. Può essere una striscia completamente vuota, un angolo che ignora i tocchi o una piccola zona che funziona solo premendo forte. Disegna linee lente e sovrapposte su tutto lo schermo: se la linea scompare sempre nello stesso punto, quell\'area merita ulteriori verifiche.',
    },
    {
      type: 'list',
      items: [
        'Inizia con tratti orizzontali dal bordo sinistro a quello destro, lasciando solo un piccolo spazio tra una passata e l\'altra.',
        'Ripeti con tratti verticali dal bordo superiore a quello inferiore per individuare colonne strette che il test orizzontale potrebbe non rilevare.',
        'Traccia il bordo esatto del display: gli elettrodi sui bordi e le zone dei gesti sono punti di guasto frequenti.',
        'Disegna cerchi attorno alle aree sospette per vedere se l\'interruzione segue sempre la stessa posizione fisica.',
        'Ruota il dispositivo e ripeti il test per distinguere un problema di layout dell\'app da un problema di posizione hardware.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Una linea vuota che si ripete è più significativa di un singolo tratto saltato',
      html: '<p>Un breve salto può verificarsi se il dito è secco, si muove troppo velocemente o si stacca dal vetro. Una zona morta hardware di solito compare ripetutamente nella stessa area fisica, in diverse direzioni di tracciamento e anche dopo aver pulito il display.</p>',
    },
    {
      type: 'table',
      headers: ['Sintomo', 'Probabile significato', 'Cosa provare dopo'],
      rows: [
        ['La linea si interrompe sempre nella stessa striscia verticale', 'Possibile guasto di una colonna del digitalizzatore o bolla della pellicola.', 'Rimuovi la pellicola se possibile, pulisci il vetro e ripeti il test a schermo intero.'],
        ['I bordi non rilevano i tocchi ma il centro sì', 'Pressione della cover, filtro gesti o problema agli elettrodi sui bordi.', 'Togli la cover e ripeti tracciando lentamente i bordi.'],
        ['Solo i movimenti veloci saltano', 'Limitazione degli eventi del browser, basso frame rate o distacco del dito.', 'Muoviti lentamente e confronta con un altro browser.'],
        ['Compaiono puntini casuali senza toccare', 'Tocchi fantasma, umidità, rumore del caricabatterie o pannello danneggiato.', 'Asciuga lo schermo, scollega il caricabatterie, riavvia e ripeti.'],
      ],
    },
    { type: 'title', text: 'Come misurare il supporto multi-touch', level: 3 },
    {
      type: 'paragraph',
      html: 'Il supporto multi-touch è il numero massimo di contatti indipendenti che il dispositivo può segnalare contemporaneamente. Un telefono può tracciare cinque, dieci o più contatti, mentre alcuni tablet economici, chioschi, guanti, livelli di desktop remoto o browser integrati potrebbero segnalarne meno. Il contatore attivo mostra il numero attualmente rilevato; il contatore di picco memorizza il valore più alto raggiunto dall\'ultima cancellazione.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Gesti a due dita', description: 'Necessari per zoom con pizzico, rotazione a due dita, mappe, editor di immagini e zoom accessibilità.' },
        { title: 'Da tre a cinque tocchi', description: 'Utili per giochi ritmici, controlli divisi, app di disegno, tastiere per pianoforte e flussi di lavoro creativi su tablet.' },
        { title: 'Pannelli a dieci tocchi', description: 'Comuni su telefoni e tablet moderni, ma i filtri del browser o del sistema operativo possono comunque ridurre il conteggio.' },
      ],
    },
    {
      type: 'tip',
      title: 'Il modo migliore per evitare un falso conteggio basso',
      html: 'Appoggia le dita una alla volta e tienile ferme per un secondo. Se metti tutte le dita insieme di colpo, alcuni sistemi operativi interpretano il gesto come input del palmo, intenzione di zoom o navigazione di sistema e potrebbero sopprimere parte dei contatti.',
    },
    {
      type: 'proscons',
      title: 'Tester online o app diagnostica nativa?',
      items: [
        { pro: 'Si avvia all\'istante senza installare nulla né concedere ampi permessi al dispositivo.', con: 'Può mostrare solo gli eventi touch che il browser e il sistema operativo espongono.' },
        { pro: 'Facile da condividere con un centro riparazioni o un acquirente perché il tracciato è visibile.', con: 'Non può leggere le tabelle di calibrazione di fabbrica né i codici di errore di basso livello del digitalizzatore.' },
        { pro: 'La modalità a schermo intero copre più superficie utile del display rispetto a una pagina normale.', con: 'Barre di sistema, notch e aree protette per i gesti possono comunque riservare alcuni pixel.' },
      ],
    },
    { type: 'title', text: 'Cause comuni dei tocchi mancati', level: 3 },
    {
      type: 'paragraph',
      html: 'Un cattivo risultato al test touch non significa sempre che lo schermo sia rotto. I pannelli capacitivi dipendono da un campo elettrico stabile attraverso vetro, adesivo, pellicola, pelle e messa a terra del dispositivo. Qualsiasi elemento che alteri quel campo può causare interruzioni, falsi tocchi o un tracciamento multi-touch debole. Per questo è importante testare in condizioni diverse.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Digitalizzatore', definition: 'Lo strato sensore trasparente che trasmette le coordinate del tocco al dispositivo.' },
        { term: 'Zona morta', definition: 'Un\'area fisica dello schermo in cui i tocchi non vengono rilevati o lo sono solo in modo intermittente.' },
        { term: 'Tocco fantasma', definition: 'Un evento touch segnalato dal dispositivo quando nessun dito tocca intenzionalmente quel punto.' },
        { term: 'Filtro del palmo', definition: 'Filtro software che ignora il contatto ampio o accidentale, specialmente su tablet e dispositivi con pennino.' },
        { term: 'Frequenza di campionamento touch', definition: 'La frequenza con cui il dispositivo scansiona lo strato touch. Frequenze più alte possono rendere disegno e giochi più reattivi.' },
      ],
    },
    {
      type: 'table',
      headers: ['Causa', 'Indizio tipico', 'Verifica rapida'],
      rows: [
        ['Pellicola protettiva', 'La zona morta segue una bolla, crepa, bordo di polvere o vetro spesso.', 'Rimuovi o solleva la pellicola solo se è sicuro e sostituibile.'],
        ['Umidità o unto', 'Salti casuali, tocchi che scivolano o tocchi mancati dopo pioggia, sudore o spray detergente.', 'Asciuga completamente vetro e mani, poi ripeti il test.'],
        ['Rumore del caricabatterie', 'I tocchi fantasma compaiono con l\'alimentazione collegata e spariscono a batteria.', 'Scollega il caricabatterie o usa un adattatore e cavo certificati.'],
        ['Pressione della cover', 'I tocchi falliscono vicino agli angoli o ai bordi curvi.', 'Togli la cover e testa di nuovo lo stesso bordo.'],
        ['Danno hardware', 'La stessa striscia non funziona dopo aver pulito, riavviato e rimosso la pellicola.', 'Documenta il risultato e contatta l\'assistenza per la riparazione.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gesture-tap-hold',
      title: 'Premere forte non equivale a precisione del tocco',
      html: 'La maggior parte dei touchscreen di telefoni e tablet è capacitiva, quindi non dovrebbe essere necessario premere forte. Se un punto funziona solo premendo con decisione, il problema potrebbe essere un contatto debole attraverso la pellicola, un danno al pannello, un problema al cavo flex o un filtro software più che un normale comportamento del touchscreen.',
    },
    { type: 'title', text: 'Test di bordi, angoli e zone della tastiera', level: 3 },
    {
      type: 'paragraph',
      html: 'Molti problemi reali iniziano nelle aree di uso intenso: la riga inferiore della tastiera, il tasto backspace, i gesti di navigazione, il pannello notifiche, le impostazioni rapide, le zone del pollice nei giochi e gli angoli del tablet usati per le scorciatoie di disegno. Usa la modalità a schermo intero prima di giudicare le aree superiori e inferiori, perché i controlli del browser possono altrimenti nascondere parte dello schermo.',
    },
    {
      type: 'list',
      items: [
        'Traccia un rettangolo a un dito di distanza dal bordo del display.',
        'Disegna brevi tratti verticali sulle righe della tastiera dove si verificano le lettere mancate.',
        'Tieni un pollice nella posizione di un controllo di gioco e disegna con un altro dito per verificare i conflitti di contatto.',
        'Testa vicino alla porta di ricarica prima senza alimentazione, poi con il caricabatterie collegato, per verificare il rumore di massa.',
        'Se usi un pennino, testa l\'input del dito separatamente da quello del pennino, perché potrebbero usare percorsi di rilevamento diversi.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quando lo schermo intero cambia il risultato',
      html: '<p>Se lo schermo funziona in modalità a schermo intero ma non nella visualizzazione normale del browser, probabilmente l\'hardware non è l\'unico fattore. Barre degli indirizzi, pull-to-refresh, navigazione di sistema e gestione dei gesti del browser possono intercettare i tocchi vicino alla parte superiore o inferiore dell\'area visibile.</p>',
    },
    { type: 'title', text: 'Come documentare un problema per riparazione o garanzia', level: 3 },
    {
      type: 'paragraph',
      html: 'Per l\'assistenza in garanzia, la costanza conta più di un singolo guasto appariscente. Cancella la tela, disegna una semplice griglia e scatta una foto o registra lo schermo quando la stessa area fisica si rifiuta di disegnare. Indica se il telefono era in carica, se era presente una pellicola protettiva e se il problema persiste dopo un riavvio.',
    },
    {
      type: 'summary',
      title: 'Prove utili da raccogliere',
      items: [
        'Una tela pulita a schermo intero che mostra interruzioni ripetute nella stessa posizione.',
        'Il picco multi-touch raggiunto con più dita appoggiate con attenzione.',
        'Un confronto con e senza cover, pellicola, caricabatterie o guanti.',
        'Modello del dispositivo, browser, versione del sistema operativo e se il problema si verifica anche nelle app.',
      ],
    },
    {
      type: 'message',
      title: 'Nota sulla privacy',
      html: 'Il disegno e i contatori sono generati lato client. Il tester è pensato per una diagnosi immediata, non per registrazione con account, riparazione remota o caricamento di pattern sensibili di interazione con lo schermo.',
    },
    { type: 'title', text: 'Checklist per l\'interpretazione dei risultati', level: 3 },
    {
      type: 'table',
      headers: ['Risultato', 'Interpretazione', 'Affidabilità'],
      rows: [
        ['Tratti continui ovunque', 'Il livello touch è probabilmente sano nelle condizioni attuali.', 'Alta per input tattile di base.'],
        ['Una striscia vuota ripetibile', 'Possibile danno fisico al digitalizzatore o ostruzione da pellicola.', 'Alta se ripetuta dopo pulizia e riavvio.'],
        ['Picco multi-touch basso solo in un browser', 'Limitazione del browser, della privacy, della webview o della gestione dei gesti.', 'Media. Prova un altro browser.'],
        ['Tocchi fantasma durante la ricarica', 'Rumore elettrico, problema di massa o caricabatterie difettoso.', 'Da media ad alta se scollegando il caricatore il problema si risolve.'],
        ['Guasto solo con la pellicola protettiva', 'Spessore della pellicola, distacco dell\'adesivo, crepa o sollevamento del bordo.', 'Alta se la rimozione risolve la zona.'],
      ],
    },
    {
      type: 'summary',
      title: 'Percorso rapido di diagnosi',
      items: [
        'Disegna una griglia completa lentamente.',
        'Cerchia ogni interruzione che si ripete.',
        'Cancella la tela e ripeti a schermo intero.',
        'Rimuovi cover o pellicola quando possibile.',
        'Misura il massimo numero di tocchi simultanei.',
        'Confronta con un altro browser o app prima di dichiarare un guasto hardware.',
      ],
    },
  ],
  ui: {
    activeTouchesLabel: 'Tocchi attivi',
    peakTouchesLabel: 'Picco multi-touch',
    coverageLabel: 'Copertura tela',
    statusReady: 'Disegna ovunque per rilevare zone morte',
    statusDrawing: 'Tocco rilevato',
    statusCleared: 'Tela cancellata',
    clearButton: 'Cancella tela',
    fullscreenButton: 'Schermo intero',
    exitFullscreenButton: 'Esci da schermo intero',
    canvasLabel: 'Tela di disegno per il test del touch screen',
    unsupportedTouch: 'Gli eventi touch non sono disponibili in questo browser',
  },
};
