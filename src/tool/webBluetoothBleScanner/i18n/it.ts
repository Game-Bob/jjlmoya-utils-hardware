import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebBluetoothBleScannerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'scansione-ble-web-bluetooth';
const title = 'Scanner Web Bluetooth BLE';
const description = 'Scansiona i dispositivi Bluetooth Low Energy nelle vicinanze dal browser, ispeziona gli UUID dei servizi GATT esposti e verifica se il tuo hardware IoT o wearable è rilevabile.';

const faqData = [
  {
    question: 'Un sito web può scansionare dispositivi Bluetooth senza permesso?',
    answer: 'No. Web Bluetooth richiede sempre un gesto dell\'utente e un selettore di permessi del browser. Questo strumento vede solo il dispositivo che selezioni esplicitamente e non memorizza indirizzi MAC, ID dispositivo né risultati della scansione.',
  },
  {
    question: 'Perché lo scanner non mostra tutti i dispositivi BLE vicini?',
    answer: 'I browser espongono intenzionalmente il Bluetooth tramite un selettore di permessi, non come uno scanner silenzioso in background. Alcuni dispositivi smettono anche di fare advertising, nascondono il nome, richiedono pairing o espongono servizi solo dopo la connessione.',
  },
  {
    question: 'Quali browser supportano Web Bluetooth?',
    answer: 'Web Bluetooth è meglio supportato nei browser desktop basati su Chromium come Chrome ed Edge. Di solito richiede HTTPS o localhost e non è disponibile in molte configurazioni di Firefox, Safari e browser iOS.',
  },
  {
    question: 'Può leggere dati privati dei sensori da un wearable?',
    answer: 'Solo se il dispositivo espone servizi GATT compatibili e il browser concede l\'accesso. Molti wearable commerciali richiedono app del produttore, crittografia, bonding o caratteristiche proprietarie che uno scanner browser generico non può decodificare.',
  },
  {
    question: 'Cosa sono gli UUID dei servizi GATT?',
    answer: 'Un UUID di servizio GATT identifica un gruppo di funzionalità Bluetooth Low Energy, come Servizio Batteria, Frequenza Cardiaca, Informazioni sul Dispositivo o un servizio personalizzato del produttore utilizzato da hardware maker e IoT.',
  },
];

const howToData = [
  {
    name: 'Usa un browser compatibile',
    text: 'Apri lo strumento in Chrome o Edge tramite HTTPS o localhost, quindi assicurati che il Bluetooth sia attivato sul computer o telefono.',
  },
  {
    name: 'Metti l\'hardware in modalità advertising',
    text: 'Attiva il dispositivo BLE, spegnilo e riaccendilo, premi il pulsante di pairing o apri la modalità advertising affinché appaia nel selettore di permessi del browser.',
  },
  {
    name: 'Scansiona l\'ambiente',
    text: 'Premi Scansiona Ambiente e seleziona il dispositivo BLE che vuoi ispezionare. La finestra di dialogo dei permessi del browser controlla esattamente quale dispositivo diventa visibile alla pagina.',
  },
  {
    name: 'Leggi i servizi GATT',
    text: 'Dopo la connessione, esamina le schede UUID dei servizi per identificare i profili Bluetooth standard, i servizi firmware personalizzati e se il dispositivo espone il percorso dati che ti aspettavi.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<WebBluetoothBleScannerUI> = {
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
      text: 'Tester BLE online per IoT, Wearable e Hardware Maker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo scanner Web Bluetooth ti permette di testare se un dispositivo Bluetooth Low Energy nelle vicinanze è rilevabile da un browser e quali servizi GATT espone dopo aver concesso il permesso. È utile per il debug di firmware ESP32, sketch Arduino BLE, sensori intelligenti, wearable fitness, tastiere, beacon personalizzati, monitor ambientali e hardware prototipo prima di creare un\'app mobile nativa.',
    },
    {
      type: 'message',
      title: 'Modello di privacy',
      html: 'GameBob non memorizza indirizzi MAC, ID dispositivo, nomi, UUID, dati del segnale né cronologia delle scansioni. Il selettore di permessi del browser decide quale singolo dispositivo la pagina può consultare e i risultati rimangono nella sessione corrente del browser.',
    },
    {
      type: 'table',
      headers: ['Cosa vedi', 'Cosa significa', 'Cosa controllare dopo'],
      rows: [
        ['Nome dispositivo', 'Il nome Bluetooth pubblicizzato, se l\'hardware ne trasmette uno.', 'Se è vuoto, controlla i dati pubblicitari del firmware o usa un prefisso di nome noto durante i test.'],
        ['ID dispositivo', 'Un identificatore con ambito browser, non l\'indirizzo MAC pubblico reale.', 'Usalo solo per questa sessione del browser; non trattarlo come un numero di serie hardware universale.'],
        ['UUID servizi GATT', 'I gruppi di servizi esposti dopo l\'accettazione della connessione.', 'Confronta gli UUID standard con l\'elenco Bluetooth SIG o la tua tabella dei servizi del firmware.'],
        ['Servizio personalizzato', 'Un UUID specifico del produttore o del progetto.', 'Apri il tuo firmware, il profilo dell\'app mobile o la documentazione BLE per mappare caratteristiche e permessi.'],
      ],
    },
    {
      type: 'title',
      text: 'Perché la scansione Bluetooth del browser è diversa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le app di scanner BLE native spesso mostrano pubblicità continue da molti dispositivi vicini. Web Bluetooth è deliberatamente più restrittivo: la pagina deve essere aperta in un contesto sicuro, la scansione deve partire da un clic dell\'utente e il browser mostra un selettore di permessi. Questo protegge gli utenti dal tracciamento silenzioso pur offrendo agli sviluppatori un modo pratico per connettersi all\'hardware BLE selezionato da JavaScript.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Scanner Web Bluetooth',
          description: 'Ideale per validazione rapida del firmware, demo, flussi di supporto, laboratori didattici e diagnostica basata su browser dove l\'attrito di installazione è importante.',
        },
        {
          title: 'App BLE nativa',
          description: 'Migliore per scansione in background, registrazione RSSI, flussi di pairing, protocolli crittografati del produttore, grandi alberi di caratteristiche e diagnostica sul campo a lungo termine.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Motivi comuni per cui un dispositivo BLE non appare',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Il Bluetooth è disattivato a livello di sistema operativo o il browser non ha il permesso Bluetooth.',
        'Il dispositivo è connesso a un altro telefono, laptop, app del produttore o gateway e ha smesso di fare advertising.',
        'L\'hardware fa advertising solo per una breve finestra dopo l\'avvio o dopo aver premuto un pulsante di pairing.',
        'Il browser non è basato su Chromium, la pagina non è servita tramite HTTPS o la piattaforma blocca Web Bluetooth.',
        'Il firmware fa advertising dei dati del produttore ma nasconde il nome locale, quindi il selettore potrebbe mostrare un dispositivo senza nome.',
        'Il dispositivo richiede bonding, crittografia o autenticazione proprietaria prima che i servizi diventino leggibili.',
      ],
    },
    {
      type: 'title',
      text: 'Come usare gli UUID GATT durante il debug',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una connessione riuscita con UUID di servizio ti indica che il browser può raggiungere la periferica e che la periferica espone almeno parte della sua tabella GATT. I servizi standard come Servizio Batteria, Informazioni Dispositivo, Frequenza Cardiaca, Dispositivo di Interfaccia Umana e Rilevamento Ambientale sono facili da riconoscere. Gli UUID personalizzati di solito puntano a funzionalità specifiche del firmware e richiedono la mappa delle caratteristiche dal tuo codice sorgente o dalla documentazione del produttore.',
    },
    {
      type: 'table',
      headers: ['Sintomo', 'Causa probabile', 'Soluzione pratica'],
      rows: [
        ['Il selettore permessi è vuoto', 'Il dispositivo non fa advertising o manca il supporto del browser.', 'Riavvia il dispositivo, attiva la modalità pairing, avvicinati o riprova in Chrome/Edge.'],
        ['La connessione fallisce immediatamente', 'Il dispositivo è occupato, fuori portata o rifiuta la connessione del browser.', 'Disconnetti le app del produttore e tieni la periferica vicino al computer.'],
        ['Nessun servizio elencato', 'GATT non è disponibile, i servizi sono nascosti o l\'accesso non è stato concesso per quegli UUID.', 'Aggiungi servizi opzionali noti nei test firmware o ispeziona con uno strumento BLE nativo.'],
        ['Compaiono solo UUID personalizzati', 'L\'hardware utilizza servizi firmware specifici del produttore.', 'Mappa gli UUID alle costanti del codice sorgente e documenta i permessi di lettura/scrittura delle caratteristiche.'],
      ],
    },
    {
      type: 'title',
      text: 'Limiti di sicurezza e privacy',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'La pagina non può raccogliere silenziosamente i dispositivi Bluetooth vicini in background.',
        'Il browser può nascondere gli indirizzi MAC reali e fornire invece un ID dispositivo con ambito.',
        'L\'accesso inizia solo dopo che l\'utente fa clic sul pulsante di scansione e sceglie un dispositivo.',
        'I risultati non vengono caricati né memorizzati da GameBob.',
        'I dispositivi commerciali sensibili potrebbero richiedere crittografia o un flusso di pairing del produttore che questo scanner generico non può bypassare.',
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Bluetooth non è disponibile',
    unsupportedBody: 'Prova Chrome o Edge su desktop o Android, attiva il Bluetooth e apri la pagina tramite HTTPS o localhost.',
    secureContext: 'Web Bluetooth richiede una pagina HTTPS sicura o localhost. Ricarica lo strumento da un\'origine sicura e riprova.',
    scanButton: 'Scansiona Ambiente',
    scanning: 'Scansione in corso',
    reconnect: 'Scansiona di nuovo',
    disconnect: 'Disconnetti',
    privacyTitle: 'Privacy by design',
    privacyBody: 'GameBob non memorizza indirizzi MAC, ID dispositivo, nomi, UUID né cronologia scansioni. Il browser espone solo il dispositivo che scegli.',
    deviceLabel: 'Dispositivo selezionato',
    nameFallback: 'Dispositivo BLE senza nome',
    idLabel: 'ID dispositivo browser',
    servicesLabel: 'Servizi GATT',
    noServices: 'Nessun servizio primario leggibile è stato restituito per questa connessione.',
    statusIdle: 'Pronto per scansionare hardware BLE vicino',
    statusPermission: 'In attesa del selettore permessi del browser',
    statusConnecting: 'Connessione al dispositivo BLE selezionato',
    statusConnected: 'Connesso e servizi caricati',
    statusDisconnected: 'Dispositivo disconnesso',
    statusCancelled: 'Nessun dispositivo BLE è stato selezionato o il Bluetooth è spento/non disponibile su questo dispositivo.',
    statusUnavailable: 'Il Bluetooth sembra essere spento, bloccato o assente su questo dispositivo. Attiva il Bluetooth o prova da un hardware che dispone di un adattatore BLE.',
    statusError: 'Scansione Bluetooth fallita',
    signalUnknown: 'La potenza del segnale è controllata dal selettore del browser',
    gattUnavailable: 'Questo dispositivo non ha esposto un server GATT al browser',
    customServiceName: 'Servizio personalizzato o specifico del produttore',
    serviceGenericAccess: 'Accesso Generico',
    serviceGenericAttribute: 'Attributo Generico',
    serviceDeviceInformation: 'Informazioni Dispositivo',
    serviceHeartRate: 'Frequenza Cardiaca',
    serviceBattery: 'Servizio Batteria',
    serviceHumanInterfaceDevice: 'Dispositivo di Interfaccia Umana',
    serviceCyclingSpeedCadence: 'Velocità e Cadenza Ciclismo',
    serviceEnvironmentalSensing: 'Rilevamento Ambientale',
    serviceUserData: 'Dati Utente',
    serviceFitnessMachine: 'Macchina Fitness',
    uuidHelp: 'Gli UUID identificano i servizi Bluetooth. I servizi standard vengono nominati automaticamente; gli UUID specifici del produttore richiedono la documentazione del tuo firmware o dispositivo.',
    compatibilityHint: 'Funziona meglio nei browser basati su Chromium con Bluetooth attivato. Web Bluetooth è intenzionalmente limitato dai permessi e potrebbe non mostrare tutti gli advertiser vicini.',
    serviceCountSingular: 'servizio',
    serviceCountPlural: 'servizi',
  },
};
