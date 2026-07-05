import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebMidiKeyboardTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tester-tastiera-midi';
const title = 'Tester per Tastiera MIDI via Web';
const description = 'Prova una tastiera MIDI USB, synth, pad controller, pitch wheel, modulation wheel, velocity delle note e note bloccate direttamente nel browser con Web MIDI.';

const faqData = [
  {
    question: 'Questo tester MIDI riesce a leggere la mia tastiera USB senza installare software?',
    answer: 'Sì, nei browser che supportano Web MIDI, come Chrome ed Edge. Il browser chiede il permesso, poi lo strumento ascolta i messaggi di nota, velocity, pitch bend e modulation dall\'ingresso MIDI selezionato.',
  },
  {
    question: 'Il sito carica le mie note MIDI o i dati della performance?',
    answer: 'No. Gli eventi MIDI vengono elaborati nella scheda corrente del browser. Note, valori di velocity, messaggi dei controller, nomi dei dispositivi e log non vengono caricati né memorizzati dal sito.',
  },
  {
    question: 'Perché la mia tastiera MIDI compare ma nessun tasto si illumina?',
    answer: 'Il dispositivo potrebbe essere connesso come superficie di controllo, la porta di ingresso sbagliata potrebbe essere selezionata dal browser, la tastiera potrebbe usare una modalità diversa, oppure il cavo/hub potrebbe trasmettere alimentazione ma non dati MIDI.',
  },
  {
    question: 'Posso testare la pitch bend e la modulation wheel?',
    answer: 'Sì. Il tester mostra la pitch bend come valore centrato con segno e la modulation come MIDI CC1. Muovendo quei controlli, gli indicatori dovrebbero aggiornarsi immediatamente quando il dispositivo invia messaggi MIDI standard.',
  },
  {
    question: 'Quali messaggi MIDI vengono mostrati?',
    answer: 'L\'interfaccia in tempo reale evidenzia i messaggi Note On e Note Off, registra la velocity, rileva la pitch bend e traccia la modulation wheel CC1. Altri messaggi di controller possono apparire nel log eventi quando sono rilevanti per i controlli testati.',
  },
];

const howToData = [
  {
    name: 'Collega l\'hardware MIDI',
    text: 'Collega la tastiera, il synth, il pad controller o l\'interfaccia MIDI USB al computer prima di aprire la richiesta di permesso. Evita hub non alimentati quando risolvi problemi con dispositivi intermittenti.',
  },
  {
    name: 'Concedi l\'accesso MIDI al browser',
    text: 'Premi Connetti ingresso MIDI e approva la richiesta di permesso del browser. Usa Chrome o Edge su HTTPS o localhost, perché Web MIDI è protetto da permesso.',
  },
  {
    name: 'Suona i tasti su tutta l\'estensione',
    text: 'Premi note basse, medie e alte. La tastiera su schermo si espande intorno alle note ricevute e illumina ogni tasto in base alla velocity.',
  },
  {
    name: 'Verifica le rotelle e i controlli di espressione',
    text: 'Muovi la pitch wheel, la modulation wheel e i controlli di performance. La pitch dovrebbe tornare al centro, mentre la modulation dovrebbe andare da 0 a 127.',
  },
  {
    name: 'Leggi il log degli eventi',
    text: 'Usa il log eventi per individuare messaggi Note Off mancanti, canali inaspettati, valori bassi di velocity o controlli che inviano un messaggio MIDI diverso da quello atteso.',
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
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<WebMidiKeyboardTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Tester Online per Tastiere MIDI con Hardware USB Reale', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>tester per tastiera MIDI online</strong> affidabile deve rispondere rapidamente a una domanda: lo strumento fisico sta inviando i messaggi che una DAW, un campionatore, un synth o un impianto luci si aspetta? Questo tester WebMIDI ascolta l\'ingresso MIDI del browser e mostra in tempo reale Note On, Note Off, velocity, pitch bend e modulation wheel. È progettato per tastiere MIDI USB, interfacce DIN-USB, sintetizzatori, pad controller, pianoforti da palco, chitarre MIDI, trigger per batteria e controller compatti usati in home studio o live.',
    },
    {
      type: 'message',
      title: 'Diagnostica MIDI locale e privata',
      html: 'Il test viene eseguito interamente lato client. Il sito non carica numeri di nota, curve di velocity, movimenti dei controller, nomi dei dispositivi o log eventi. Il browser espone il MIDI solo dopo che hai approvato la richiesta di permesso, e i valori rimangono nella scheda corrente.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-127', label: 'gamma velocity MIDI' },
        { value: '128', label: 'numeri di nota standard' },
        { value: '14-bit', label: 'risoluzione pitch bend' },
        { value: 'CC1', label: 'controllo modulation wheel' },
      ],
    },
    {
      type: 'table',
      headers: ['Segnale', 'Cosa mostra il tester', 'Comportamento sano'],
      rows: [
        ['Note On', 'Nome della nota, numero di nota, canale e velocity.', 'Ogni tasto fisico si illumina una volta alla pressione e usa un valore di velocity superiore a zero.'],
        ['Note Off', 'Evento di rilascio nel log e reset dell\'illuminazione del tasto.', 'Ogni tasto premuto si spegne al rilascio; nessuna nota rimane visivamente bloccata.'],
        ['Velocity', 'Indicatore in tempo reale più una curva scorrevole.', 'Un tocco leggero produce valori più bassi e un tocco deciso raggiunge valori più alti senza salti casuali.'],
        ['Pitch bend', 'Indicatore centrato con segno da negativo a positivo.', 'La rotella si muove fluidamente e torna vicino allo zero al rilascio.'],
        ['Modulation', 'Indicatore CC1 da 0 a 127.', 'La rotella o la striscia si muove in modo prevedibile su tutta l\'escursione.'],
      ],
    },
    { type: 'title', text: 'Come Testare una Tastiera MIDI Senza una DAW', level: 2 },
    {
      type: 'paragraph',
      html: 'Cercare un modo per <em>provare una tastiera MIDI</em> significa spesso che l\'utente non sa ancora se il guasto sia del controller, del cavo, del sistema operativo o del software musicale. Una DAW aggiunge molte variabili extra: stato di attivazione della traccia, filtri di ingresso, routing dei canali MIDI, strumenti virtuali, monitoring, template e preferenze dei driver. Un tester via browser elimina gran parte di questi strati. Se la richiesta di permesso WebMIDI vede il dispositivo e la tastiera illumina le note sullo schermo, il percorso MIDI fisico funziona.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Usa questo prima di modificare le impostazioni della DAW',
      html: 'Conferma prima che il controller invii MIDI grezzo. Poi risolvi i problemi dell\'applicazione musicale. Se il tester riceve le note ma la DAW no, controlla l\'abilitazione dell\'ingresso MIDI, l\'ingresso della traccia selezionata, i filtri di canale, gli script per superfici di controllo e il monitoring dello strumento.',
    },
    {
      type: 'list',
      items: [
        'Collega la tastiera direttamente al computer quando possibile, specialmente se l\'alimentazione bus è debole.',
        'Apri il tester in Chrome o Edge, perché il supporto Web MIDI varia in base al browser e alla piattaforma.',
        'Premi Connetti ingresso MIDI e scegli il dispositivo musicale o l\'interfaccia MIDI dalla richiesta di permesso.',
        'Suona note cromatiche su tutta la tastiera per rivelare tasti morti, zone divise o sorprese di trasposizione d\'ottava.',
        'Muovi la pitch e la modulation wheel lentamente, poi velocemente, per individuare sensori rumorosi o scarso ritorno al centro.',
        'Pulisci il log tra un test e l\'altro quando confronti cavi, porte USB, preset della tastiera o modalità del controller.',
      ],
    },
    {
      type: 'tip',
      title: 'Verifica rapida del cavo',
      html: 'Se il dispositivo si accende ma non compare alcun ingresso MIDI, prova un cavo USB diverso. Molti cavi USB economici sono solo per ricarica e non trasmettono dati, facendo sembrare attivo il controller mentre nessun messaggio MIDI raggiunge il computer.',
    },
    { type: 'title', text: 'Interpretare le Curve di Velocity e la Risposta Dinamica', level: 2 },
    {
      type: 'paragraph',
      html: 'La velocity non è semplicemente il volume; è un valore di performance inviato con la nota, di solito da 1 a 127. Un plugin di pianoforte può mappare la velocity su volume, strato di campioni, brillantezza, rumore del martelletto, tempo di attacco o tutte queste cose insieme. Quando un controller ha una scansione della velocity scadente, il musicista può percepire che le note delicate spariscono, quelle medie sono troppo forti o quelle dure non raggiungono mai il massimo espressivo. La curva di velocity scorrevole aiuta a rivelare se l\'hardware produce una distribuzione utile di valori.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tastiera sana',
          description: 'Colpi leggeri, medi e decisi producono bande di velocity visibilmente distinte con valori ripetibili per forze di esecuzione simili.',
          highlight: true,
        },
        {
          title: 'Risposta compressa',
          description: 'La maggior parte delle note si raggruppa in un intervallo ristretto, ad esempio 70-95, rendendo pianoforti e batterie piatti o difficili da controllare.',
        },
        {
          title: 'Risposta irregolare',
          description: 'Note adiacenti o colpi ripetuti saltano in modo imprevedibile, suggerendo contatti sporchi, sensori difettosi, scansione scadente o firmware instabile.',
        },
      ],
    },
    {
      type: 'table',
      headers: ['Pattern di velocity osservato', 'Probabile interpretazione', 'Prossimo test'],
      rows: [
        ['Sempre 127', 'La modalità a velocity fissa è attiva o il controller è configurato per organo/synth.', 'Controlla le impostazioni globali della tastiera, la modalità pad o l\'editor del controller.'],
        ['Sempre molto basso', 'La curva di velocity è troppo morbida, la calibrazione del sensore è errata o la tastiera è difettosa.', 'Cambia le curve di velocity e confronta i tasti neri e bianchi su diverse ottave.'],
        ['Un tasto differisce nettamente', 'Un contatto locale, una cupola di gomma, un sensore ottico o un meccanismo del tasto potrebbe essere sporco o danneggiato.', 'Ripeti quel tasto a diverse intensità e confronta le note vicine.'],
        ['I valori calano dopo l\'uso di un hub', 'La stabilità di alimentazione o dati potrebbe essere marginale.', 'Ripeti il test con una porta USB diretta e un cavo dati noto.'],
      ],
    },
    {
      type: 'card',
      title: 'Perché il Note Off è importante',
      html: 'Una nota bloccata è spesso un messaggio Note Off mancante o ritardato. Alcuni strumenti inviano Note On con velocity 0 invece di un comando Note Off separato; entrambi sono comportamenti MIDI validi. Questo tester considera il Note On a velocity zero come rilascio della nota, quindi i tasti veramente bloccati rimangono visibili fino all\'arrivo del messaggio di rilascio corretto.',
    },
    { type: 'title', text: 'Testare Pitch Bend, Modulation e Controlli di Performance', level: 2 },
    {
      type: 'paragraph',
      html: 'La pitch bend è un messaggio MIDI a risoluzione più alta rispetto ai normali dati dei controller a 7 bit. Combina due byte di dati in un intervallo a 14 bit centrato intorno a 8192. Questa risoluzione extra è importante perché il movimento della pitch deve suonare fluido, specialmente quando si piega un synth solista, un basso o uno strumento orchestrale. Il tester converte il bend in arrivo in un indicatore centrato, rendendo facile vedere se la rotella raggiunge entrambi gli estremi e torna in posizione neutra.',
    },
    {
      type: 'paragraph',
      html: 'La modulation wheel è normalmente il controller continuo MIDI 1, comunemente scritto come CC1. Molti patch di synth lo usano per vibrato, movimento del filtro, posizione della wavetable, tremolo o dinamica orchestrale. Se muovendo la rotella l\'indicatore CC1 non si aggiorna, il controller potrebbe essere assegnato a un CC diverso, usare una modalità specifica del produttore o passare attraverso un software che rimappa i controlli di performance.',
    },
    {
      type: 'proscons',
      title: 'Test MIDI via browser o monitoraggio DAW',
      items: [
        { pro: 'Conferma rapida dell\'hardware basata su permesso, senza configurazione di progetto.', con: 'Non emula tutti i routing, gli script o le mappature degli strumenti di una DAW.' },
        { pro: 'Vista chiara di note, velocity, pitch bend e modulation CC1.', con: 'Aftertouch avanzato, NRPN, MPE, SysEx e mappe di controllo personalizzate possono richiedere strumenti specializzati.' },
        { pro: 'Utile per chiamate di assistenza, acquisto di strumenti usati e verifica dei cavi.', con: 'Il supporto del browser dipende dalla disponibilità di Web MIDI sulla piattaforma attuale.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La pitch wheel non torna a zero',
      html: 'Se l\'indicatore di pitch si ferma su un valore positivo o negativo dopo il rilascio, la rotella fisica, la molla, il potenziometro, il sensore hall, la calibrazione o la zona morta del firmware potrebbero aver bisogno di attenzione. Prova lo stesso controller su un\'altra porta e con un altro preset prima di pensare a un guasto del sensore.',
    },
    { type: 'title', text: 'Difetti Comuni delle Tastiere MIDI che Questo Tester Può Rilevare', level: 2 },
    {
      type: 'glossary',
      items: [
        { term: 'Tasto morto', definition: 'Un tasto fisico che non produce alcun messaggio Note On quando premuto.' },
        { term: 'Nota bloccata', definition: 'Una nota che riceve Note On ma nessun messaggio di rilascio corrispondente, lasciando il suono attivo negli strumenti.' },
        { term: 'Picco di velocity', definition: 'Un valore improvviso molto più alto o più basso del previsto per un colpo simile.' },
        { term: 'Canale MIDI', definition: 'Uno dei 16 canali logici usati per separare parti, zone o dispositivi su un flusso MIDI.' },
        { term: 'Control Change', definition: 'Una famiglia di messaggi MIDI usata da manopole, pedali, rotelle, slider e interruttori.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Dispositivo rilevato, nessun messaggio',
      html: 'Se il browser elenca un ingresso MIDI ma premendo i tasti non produce voci di log, verifica se la porta selezionata è un ingresso per superficie di controllo invece dell\'ingresso note della tastiera. Alcune interfacce espongono più porte con nomi simili.',
    },
    {
      type: 'table',
      headers: ['Sintomo', 'Possibile causa', 'Azione pratica'],
      rows: [
        ['Nessuna richiesta di permesso', 'Browser non supportato, origine non sicura o permesso MIDI del browser bloccato.', 'Usa Chrome/Edge su HTTPS e controlla i permessi del sito.'],
        ['Dispositivo assente', 'Problema di cavo, hub, driver, conformità class o alimentazione.', 'Prova un altro cavo dati USB, porta o hub alimentato.'],
        ['Solo alcune ottave funzionano', 'Modalità split/layer, trasposizione, guasto della matrice hardware o modalità local control.', 'Reimposta il preset e prova cromaticamente dalle note basse alle alte.'],
        ['Nomi delle note errati', 'Il controller è trasposto o invia da una zona con spostamento di ottava.', 'Controlla la trasposizione globale, l\'ottava di zona e le impostazioni del template DAW.'],
        ['Modulation wheel muta', 'Rotella assegnata a un numero di controller diverso o disabilitata dal preset.', 'Carica un preset predefinito o un editor del controller e rimappala su CC1.'],
      ],
    },
    {
      type: 'summary',
      title: 'Ordine diagnostico consigliato',
      items: [
        'Conferma che il browser veda l\'ingresso MIDI.',
        'Suona le note e verifica la corrispondenza pressione/rilascio.',
        'Esamina la distribuzione della velocity con colpi ripetuti leggeri, medi e decisi.',
        'Muovi i controlli di pitch bend e modulation su tutta la loro escursione.',
        'Solo dopo regola il routing della DAW, le impostazioni dello strumento virtuale o i template del controller.',
      ],
    },
    { type: 'title', text: 'Privacy, Supporto Browser e Limiti', level: 2 },
    {
      type: 'paragraph',
      html: 'Web MIDI è intenzionalmente protetto da permesso. Una pagina non può leggere silenziosamente i dispositivi musicali connessi in background senza che il browser esponga un flusso di accesso. La richiesta esatta e la persistenza del permesso dipendono da browser, sistema operativo e impostazioni dell\'utente. Per la maggior parte dei musicisti, il risultato pratico è semplice: clicca il pulsante di connessione, scegli l\'ingresso MIDI, esegui il test e chiudi la scheda quando hai finito.',
    },
    {
      type: 'list',
      items: [
        'Nessun dato di eventi MIDI viene inviato a server esterni.',
        'Il tester non richiede accesso SysEx, mantenendo l\'ambito del permesso più ristretto.',
        'I nomi dei dispositivi mostrati dal browser possono identificare i modelli hardware, quindi gli screenshot vanno condivisi con attenzione.',
        'Chrome ed Edge offrono generalmente il miglior supporto Web MIDI; il supporto di Safari e Firefox può essere limitato o assente a seconda della piattaforma.',
        'Utilità native possono ancora essere necessarie per aggiornamenti firmware, editing avanzato dei controller, analisi MPE, dump SysEx o diagnostica specifica del produttore.',
      ],
    },
    {
      type: 'card',
      title: 'Quando questo strumento è sufficiente',
      html: 'Per acquistare un controller usato, verificare un cavo in studio, convalidare un\'interfaccia MIDI USB, testare una tastiera riparata o dimostrare che una tastiera invia messaggi prima di aprire una DAW, un tester per tastiera MIDI via Web è di solito il primo passo più rapido.',
    },
  ],
  ui: {
    connectButton: 'Connetti ingresso MIDI',
    refreshButton: 'Aggiorna ingressi',
    clearButton: 'Pulisci log',
    unsupportedTitle: 'Web MIDI non disponibile',
    unsupportedBody: 'Usa un browser basato su Chromium come Chrome o Edge e apri la pagina su HTTPS o localhost.',
    secureContext: 'Web MIDI richiede una pagina HTTPS sicura o localhost prima che il browser possa esporre gli ingressi MIDI.',
    statusIdle: 'Pronto per richiedere l\'accesso MIDI',
    statusPermission: 'In attesa del permesso MIDI del browser',
    statusReady: 'Accesso MIDI concesso',
    statusNoInputs: 'Nessun ingresso MIDI rilevato',
    statusConnected: 'Ingresso MIDI rilevato',
    statusDisconnected: 'Dispositivo MIDI disconnesso',
    statusError: 'Accesso MIDI fallito',
    detectedLabel: 'Dispositivo rilevato',
    noDevice: 'Nessun dispositivo MIDI selezionato',
    inputLabel: 'Ingresso',
    inputIdle: 'nessuno',
    channelLabel: 'Canale',
    notesLabel: 'Note',
    velocityLabel: 'Velocity',
    pitchLabel: 'Pitch',
    modulationLabel: 'Modulation',
    lastEventLabel: 'Ultimo evento',
    octaveRangeLabel: 'Estensione visibile',
    velocityCurveTitle: 'Curva di velocity',
    activeNotesTitle: 'Note attive',
    eventLogTitle: 'Log eventi MIDI',
    eventSeparator: '/',
    initialRange: 'C3-B5',
    emptyLog: 'Premi un tasto o muovi una rotella per vedere i messaggi MIDI in arrivo.',
    noteOn: 'Note On',
    noteOff: 'Note Off',
    controlChange: 'Control Change',
    pitchBend: 'Pitch Bend',
    allChannels: 'Tutti i canali',
  },
};
