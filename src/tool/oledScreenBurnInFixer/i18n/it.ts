import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OledScreenBurnInFixerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'riparatore-burn-in-schermo-oled';
const title = 'Riparatore Burn In Schermo OLED';
const description =
  'Esegui un riparatore di burn in OLED a schermo intero e un esercitatore di pixel bloccati LCD con cicli rapidi di colori RGB, rumore bianco, un avviso obbligatorio di fotosensibilità e un timer nativo.';

const faqData = [
  {
    question: 'Un riparatore di burn in OLED può rimuovere il burn in permanente?',
    answer:
      'Nessuno strumento da browser può invertire l\'usura permanente dei subpixel OLED. Un esercitatore di pixel può ridurre la ritenzione temporanea delle immagini, rendere meno visibile un leggero effetto fantasma o aiutare a diagnosticare se un segno è ritenzione temporanea o burn in permanente.',
  },
  {
    question: 'È sicuro per le persone con epilessia fotosensibile?',
    answer:
      'Il test utilizza colori lampeggianti rapidi e statica ad alto contrasto. Le persone con epilessia fotosensibile, sensibilità alle emicranie, rischio di convulsioni o disagio da luci lampeggianti non dovrebbero eseguirlo.',
  },
  {
    question: 'Può riparare un pixel LCD bloccato?',
    answer:
      'A volte può aiutare un pixel bloccato che rimane rosso, verde, blu o bianco cambiando rapidamente lo stato del subpixel. Non può riparare un pixel nero morto o danni fisici al pannello.',
  },
  {
    question: 'Per quanto tempo dovrei eseguire l\'esercitatore di pixel?',
    answer:
      'Inizia con 5-10 minuti per un pixel bloccato o una leggera ritenzione d\'immagine. Le sessioni più lunghe devono essere supervisionate, con luminosità mantenuta ragionevole e lo schermo lasciato raffreddare.',
  },
  {
    question: 'Perché lo strumento usa canvas invece del video?',
    answer:
      'I pattern vengono generati direttamente in HTML5 Canvas, quindi la pagina non ha bisogno di file video pesanti. Questo mantiene il caricamento veloce e rende il ciclo colore e rumore reattivo alle dimensioni a schermo intero.',
  },
];

const howToData = [
  {
    name: 'Leggi l\'avviso di fotosensibilità',
    text: 'Non continuare se la luce lampeggiante, i pattern ad alto contrasto, le emicranie o il rischio di convulsioni potrebbero riguardare te o qualcuno vicino.',
  },
  {
    name: 'Imposta una prima esecuzione breve',
    text: 'Scegli da 5 a 10 minuti per un primo passaggio, seleziona la modalità Ibrida e mantieni la luminosità a un livello confortevole.',
  },
  {
    name: 'Avvia la riparazione a schermo intero',
    text: 'Conferma l\'avviso, premi Avvia Riparazione e lascia che il canvas cicli attraverso i colori RGB e la statica senza spostare altre finestre sul display.',
  },
  {
    name: 'Ispeziona il segno dopo',
    text: 'Ferma il test, mostra schermate grigio neutro, bianco, nero, rosso, verde e blu, quindi confronta se l\'immagine fantasma o il pixel bloccato è cambiato.',
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

export const content: ToolLocaleContent<OledScreenBurnInFixerUI> = {
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
      text: 'Riparatore di Burn In OLED ed Esercitatore di Pixel Bloccati LCD',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo riparatore di burn in per schermi OLED è un esercitatore di pixel a schermo intero per ritenzione temporanea di immagini, immagini fantasma leggere e alcuni pixel LCD bloccati. Genera pattern rapidi rossi, verdi, blu, bianchi, neri, gialli e di statica direttamente in HTML5 Canvas. Non ci sono file video, né risorse immagine esterne, né passaggi di download: il browser dipinge ogni fotogramma alla dimensione attuale dello schermo.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Avviso di fotosensibilità',
      icon: 'mdi:alert',
      badge: 'Obbligatorio',
      html: 'Il pattern di riparazione utilizza flash rapidi, transizioni ad alto contrasto e statica bianca. Non eseguirlo se soffri di epilessia fotosensibile, rischio di convulsioni, sensibilità alle emicranie, vertigini scatenate da luci lampeggianti o se qualcuno vicino potrebbe esserne coinvolto. Fermati immediatamente se avverti affaticamento visivo, nausea, mal di testa o disagio.',
    },
    {
      type: 'paragraph',
      html: 'Lo strumento è utile quando la domanda è pratica: <strong>questo segno è ritenzione temporanea che può attenuarsi o usura permanente del pannello?</strong> Una breve esecuzione supervisionata può talvolta ridurre un\'immagine fantasma causata da elementi statici dell\'interfaccia trattenuti, e talvolta può risvegliare un subpixel bloccato su un colore. Non può ricostruire materiale OLED usurato, riparare uno strato incrinato, ripristinare una linea di pilotaggio guasta né garantire il recupero.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0 MB', label: 'file video caricati', icon: 'mdi:speedometer' },
        { value: 'RGB', label: 'esercizio subpixel primari', icon: 'mdi:palette' },
        { value: '1-120 min', label: 'timer di sessione nativo', icon: 'mdi:timer-outline' },
        { value: '100%', label: 'esecuzione lato client', icon: 'mdi:lock-outline' },
      ],
    },
    {
      type: 'title',
      text: 'Cosa significano burn in, ritenzione d\'immagine e ghosting',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Burn in OLED',
          definition: 'Usura permanente e disomogenea dei subpixel organici. Un logo statico, una barra delle applicazioni, una barra di navigazione o un HUD di gioco può lasciare una forma visibile perché quei pixel sono invecchiati in modo diverso dal resto del pannello.',
        },
        {
          term: 'Ritenzione temporanea d\'immagine',
          definition: 'Un\'immagine fantasma di breve durata che rimane dopo la scomparsa di contenuti statici. Può attenuarsi con contenuti misti normali, un ciclo di compensazione o un pattern di esercizio dei pixel.',
        },
        {
          term: 'Pixel LCD bloccato',
          definition: 'Un pixel o subpixel bloccato che mostra rosso, verde, blu, bianco o un altro colore fisso. Cambiamenti di stato rapidi possono talvolta liberarlo se il problema non è un danno fisico.',
        },
        {
          term: 'Pixel morto',
          definition: 'Un pixel che rimane nero perché non emette o trasmette più correttamente la luce. Un esercitatore di pixel da browser normalmente non può rianimare un pixel veramente morto.',
        },
        {
          term: 'Ghosting LCD',
          definition: 'Scie di movimento causate da una risposta lenta dei pixel. È diverso dal burn in dello schermo, sebbene gli utenti descrivano spesso entrambi come immagini fantasma.',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Ritenzione temporanea',
          description: 'Di solito si attenua dopo contenuti misti, routine di aggiornamento dello schermo o una breve sessione RGB e rumore.',
          icon: 'mdi:history',
          highlight: true,
          points: ['Visibile dopo contenuti statici', 'Spesso più morbida ai bordi', 'Può migliorare in minuti o ore'],
        },
        {
          title: 'Burn in permanente',
          description: 'Usura OLED disomogenea che rimane visibile dopo riposo, cicli di compensazione e contenuti vari.',
          icon: 'mdi:contrast-circle',
          points: ['Corrisponde a UI statica di lunga durata', 'Più visibile sui colori piatti', 'Non scompare dopo l\'esercizio'],
        },
        {
          title: 'Pixel bloccato',
          description: 'Un singolo punto o piccolo gruppo bloccato su un colore anziché una grande immagine fantasma.',
          icon: 'mdi:grain',
          points: ['Spesso largo un pixel', 'Può essere rosso, verde, blu o bianco', 'A volte risponde a rapidi cambi di colore'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Come usare l\'esercitatore di pixel in sicurezza',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Abbassa la luminosità prima della prima esecuzione, specialmente su telefoni OLED, TV OLED e portatili con pannello OLED.',
        'Inizia con 5-10 minuti; non lasciare il display incustodito per sessioni lunghe.',
        'Usa lo schermo intero in modo che l\'area interessata riceva lo stesso pattern del resto del pannello.',
        'Avvisa chi è nella stanza della luce lampeggiante; non eseguire il test vicino a persone che non hanno acconsentito.',
        'Fermati se il pannello diventa insolitamente caldo, se il browser scatta pesantemente o se avverti disagio.',
        'Dopo l\'esecuzione, ispeziona schermate grigio neutro, bianco, nero, rosso, verde e blu per confrontare i risultati.',
      ],
    },
    {
      type: 'table',
      headers: ['Problema', 'Prima modalità', 'Prima durata', 'Guida alla luminosità'],
      rows: [
        ['Immagine fantasma OLED leggera', 'Ibrido RGB più statica', '5-10 minuti', 'Confortevole, non massima'],
        ['Ritenzione recente di logo statico', 'Ciclo RGB', '10-20 minuti', 'Luminosità moderata'],
        ['Pixel LCD bloccato di singolo colore', 'Statica o Ibrido', '5-15 minuti', 'Luminosità desktop normale'],
        ['Vecchio burn in permanente', 'Ibrido solo per diagnosi', '5 minuti', 'Evita lunghe sessioni ad alta luminosità'],
        ['Pixel nero morto', 'Non raccomandato come riparazione', 'Solo ispezione', 'Nessun esercitatore di pixel può garantire il recupero'],
      ],
    },
    {
      type: 'tip',
      title: 'Usa prima sessioni brevi',
      html: 'Una lunga sessione lampeggiante non è automaticamente migliore. Se un segno è temporaneo, spesso si nota qualche cambiamento già dopo un breve passaggio. Se non cambia nulla dopo un tentativo ragionevole e una normale routine di aggiornamento del pannello, il problema potrebbe essere usura permanente o un difetto hardware.',
    },
    {
      type: 'title',
      text: 'Scegliere tra ciclo RGB, rumore bianco e modalità ibrida',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Artefatti diversi rispondono a pattern diversi. Un ciclo rosso verde blu esercita i subpixel primari in una sequenza controllata. Il rumore bianco alterna rapidamente la luminanza su molte piccole aree, il che può aiutare a esporre ed esercitare pixel bloccati isolati. La modalità ibrida alterna entrambi, rendendola la migliore prima scelta quando non si è sicuri se il problema sia ritenzione d\'immagine o un subpixel pigro.',
    },
    {
      type: 'table',
      headers: ['Modalità', 'Cosa fa', 'Ideale per', 'Da tenere d\'occhio'],
      rows: [
        ['Ciclo RGB', 'Campi a schermo intero di colori primari e ad alto contrasto', 'Ritenzione OLED e ispezione dei canali di colore', 'Lampeggiamento visibile'],
        ['Rumore bianco', 'Statica casuale da nero a bianco su tutto il pannello', 'Pixel bloccati singoli e piccoli gruppi', 'Intensità visiva più elevata'],
        ['Ibrido', 'Alterna campi di colore e statica', 'Flusso di lavoro generale di riparazione burn in OLED', 'Usa prima un timer breve'],
      ],
    },
    {
      type: 'proscons',
      title: 'Esercitatore di pixel online: benefici e limiti realistici',
      items: [
        {
          pro: 'Si esegue istantaneamente nel browser senza installare software o caricare file video.',
          con: 'Non può invertire l\'usura permanente del materiale OLED o i danni fisici al pannello.',
        },
        {
          pro: 'Il canvas a schermo intero copre il display con fotogrammi RGB e statica generati.',
          con: 'La temporizzazione del browser, le prestazioni del dispositivo e il supporto a schermo intero possono influire sulla coerenza dell\'animazione.',
        },
        {
          pro: 'Utile per una prima diagnosi prima di provare le routine di manutenzione del pannello del produttore.',
          con: 'Non deve sostituire il servizio di garanzia per nuovi pannelli con difetti evidenti.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Indicazioni specifiche per OLED',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I pixel OLED emettono luce propria. Quando un elemento statico rimane sullo schermo per molte ore, i subpixel sotto quell\'elemento possono invecchiare a un ritmo diverso. Ecco perché il burn in segue spesso la forma dei loghi dei canali TV, delle barre di stato dei telefoni, dei pulsanti di navigazione, degli HUD di gioco, delle barre laterali delle app di streaming o delle barre delle applicazioni del desktop. Un esercitatore di pixel può far sbiadire più rapidamente la ritenzione temporanea, ma l\'invecchiamento differenziale permanente rimane un problema materiale.',
    },
    {
      type: 'card',
      icon: 'mdi:cog-outline',
      title: 'Controlla prima la cura integrata del pannello',
      html: 'Molti TV, monitor, portatili e telefoni OLED includono aggiornamento pixel, aggiornamento pannello, attenuazione logo, spostamento schermo, attenuazione barra delle applicazioni o cicli di compensazione. Usa la routine del produttore secondo le sue istruzioni, specialmente se il display è in garanzia. Questo strumento online va considerato come una diagnosi delicata ed esercizio di ritenzione temporanea, non come un sostituto del firmware di cura del pannello.',
    },
    {
      type: 'list',
      items: [
        'Se l\'immagine fantasma è recente, lascia che il display mostri contenuti vari o riposi prima di presumere burn in permanente.',
        'Se il segno corrisponde a un logo statico di anni fa, è improbabile che un esercitatore di pixel lo rimuova completamente.',
        'Se il pannello ha un ciclo di aggiornamento integrato, eseguilo solo con la frequenza raccomandata dal produttore.',
        'Evita di eseguire pattern di test a luminosità massima per ore; calore e luminosità contribuiscono all\'usura.',
        'Nascondi le barre delle applicazioni, attiva gli screensaver e riduci la luminosità dell\'UI statica per prevenire ricorrenze.',
      ],
    },
    {
      type: 'title',
      text: 'Indicazioni per pixel LCD bloccati',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I pannelli LCD non si bruciano allo stesso modo dei pannelli OLED, ma possono mostrare pixel bloccati, segni di pressione, difetti del pannello e persistenza temporanea dell\'immagine. Un pixel bloccato che rimane rosso, verde, blu, ciano, magenta, giallo o bianco può essere causato da un subpixel che non commuta correttamente. Cambiamenti rapidi possono talvolta aiutare, sebbene non esista una riparazione online garantita.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Pixel morto o pixel bloccato',
      icon: 'mdi:information-outline',
      badge: 'Diagnosi',
      html: 'Un punto colorato ha più probabilità di uno nero. Un pixel nero su ogni colore di prova è solitamente morto o bloccato. Un pixel colorato che cambia su alcuni sfondi ma non su altri potrebbe essere un subpixel bloccato ed è un candidato migliore per una breve sessione di esercizio dei pixel.',
    },
    {
      type: 'summary',
      title: 'Prima di usare pressione o metodi fisici',
      items: [
        'Non premere con forza su pannelli OLED, touchscreen o schermi fragili di portatili.',
        'Evita strumenti appuntiti, penne avvolte in tessuto e qualsiasi metodo che potrebbe graffiare la superficie.',
        'Usa prima l\'esercizio software, poi il supporto in garanzia se il difetto persiste.',
        'Documenta il difetto con foto macro se il display è nuovo e si applicano ancora le politiche di reso.',
      ],
    },
    {
      type: 'title',
      text: 'Perché Canvas è meglio di un video di riparazione pesante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un riparatore di burn in basato su video deve scaricare fotogrammi codificati, decodificarli, ridimensionarli allo schermo e sperare che la compressione non abbia ammorbidito le transizioni esatte. Questo strumento genera ogni fotogramma direttamente nel browser. I campi RGB sono pieni, il rumore è creato per la dimensione attuale del canvas e la pagina evita file multimediali grandi che rallenterebbero il caricamento o ridurrebbero il PageSpeed.',
    },
    {
      type: 'list',
      items: [
        'Nessun file video esterno significa rendering iniziale più veloce e minore dipendenza dalla rete.',
        'L\'output del canvas si adatta alla superficie a schermo intero invece di essere limitato da una risoluzione video.',
        'Il timer può fermare la riparazione automaticamente invece di mandare in loop un video all\'infinito.',
        'Modalità, velocità, durata e intensità possono essere modificate senza caricare un altro file.',
      ],
    },
    {
      type: 'message',
      title: 'Un\'aspettativa pratica',
      ariaLabel: 'Aspettativa del riparatore di burn in',
      html: 'Usa questo strumento come primo passo controllato: riduci la ritenzione temporanea, esercita un possibile pixel bloccato e raccogli prove. Se il segno sopravvive a contenuti vari, alle routine di aggiornamento integrate del pannello e a brevi sessioni di esercizio attente, trattalo come un problema hardware o di garanzia.',
    },
  ],
  ui: {
    safetyTitle: 'Avviso di luce lampeggiante',
    safetyBody: 'Questo pattern di riparazione emette rapidamente colori pieni e statica ad alto contrasto. Non usarlo se tu o qualcuno vicino potreste essere affetti da epilessia fotosensibile, convulsioni, emicranie, vertigini o sensibilità alla luce lampeggiante.',
    safetyChecklist: 'Mantieni una luminosità ragionevole, supervisiona la sessione e fermati immediatamente se avverti disagio.',
    safetyConfirm: 'Comprendo il rischio di fotosensibilità e desidero attivare il pulsante di riparazione.',
    safetyContinue: 'Continua alle impostazioni',
    startRepair: 'Avvia riparazione (Schermo intero)',
    controlsLabel: 'Controlli riparazione schermo OLED',
    modeLabel: 'Modalità pattern',
    modeCycle: 'Ciclo RGB',
    modeNoise: 'Rumore bianco',
    modeHybrid: 'Ibrido',
    modeCycleDescription: 'Colori primari pieni per ritenzione d\'immagine e verifica dei canali.',
    modeNoiseDescription: 'Statica ad alta frequenza per pixel bloccati singoli e piccoli gruppi.',
    modeHybridDescription: 'Miglior primo passaggio: alterna campi RGB e texture statica.',
    speedLabel: 'Velocità ciclo',
    durationLabel: 'Durata',
    durationShort: '5 min',
    durationStandard: '10 min',
    durationDeep: '20 min',
    durationShortDescription: 'Controllo rapido',
    durationStandardDescription: 'Consigliato',
    durationDeepDescription: 'Esecuzione supervisionata',
    fullscreenHint: 'Canvas riparazione burn in OLED a schermo intero',
    intensityLabel: 'Intensità statica',
    warningBadge: 'Contenuto lampeggiante',
  },
};
