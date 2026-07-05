import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDpiAnalyzerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'analizzatore-dpi-mouse';
const title = 'Analizzatore DPI Mouse';
const description =
  'Misura i DPI reali del tuo mouse online spostandolo di una distanza fisica nota e confrontando il movimento catturato del puntatore in pixel.';

const faqData = [
  {
    question: 'Come funziona un analizzatore di DPI del mouse online?',
    answer:
      'Ti chiede di spostare il mouse per una distanza fisica nota, registra gli eventi di movimento del browser, corregge i valori catturati con devicePixelRatio e divide i pixel risultanti per la distanza in pollici.',
  },
  {
    question: 'Perché i DPI reali possono differire dal valore stampato sul mouse?',
    answer:
      'Tolleranze del sensore, scatti del firmware, comportamento della superficie, ridimensionamento del sistema operativo, accelerazione del puntatore e profili di gioco possono far sì che il movimento misurato differisca dai DPI nominali selezionati nel software.',
  },
  {
    question: 'Bisogna disattivare l\'accelerazione del puntatore prima del test?',
    answer:
      'Sì. Disattiva Migliora precisione del puntatore su Windows e qualsiasi curva di accelerazione del produttore se vuoi una misurazione pulita dei DPI. Lasciala attiva solo se vuoi vedere intenzionalmente come si comporta la tua configurazione abituale.',
  },
  {
    question: 'Quale distanza fisica dovrei usare?',
    answer:
      'Distanze più lunghe riducono l\'errore della mano. La larghezza di una carta di credito è comoda, ma un passaggio con righello da 100 mm o 4 pollici è generalmente più ripetibile se la scrivania ha spazio sufficiente.',
  },
];

const howToData = [
  {
    name: 'Scegli un riferimento fisico',
    text: 'Usa 5 o 10 mm per DPI molto alti, 1 pollice per test convenzionali o riferimenti più lunghi quando hai abbastanza spazio sulla scrivania.',
  },
  {
    name: 'Tieni premuto il pulsante di cattura',
    text: 'Tieni premuto il bersaglio di cattura a schermo e sposta il mouse fisicamente verso destra per esattamente la distanza scelta.',
  },
  {
    name: 'Rilascia sul segno fisico',
    text: 'Rilascia il pulsante quando il mouse raggiunge il segno fisico reale sulla scrivania. Lo strumento calcola i pixel per pollice e mostra i DPI misurati.',
  },
  {
    name: 'Ripeti a diverse velocità',
    text: 'Esegui passaggi lenti e veloci. Se i DPI cambiano molto, l\'accelerazione del puntatore o il livellamento del sensore potrebbero influenzare il risultato.',
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

export const content: ToolLocaleContent<MouseDpiAnalyzerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Analizzatore DPI Mouse Online: Misura la Sensibilità Reale del Sensore', level: 2 },
    {
      type: 'paragraph',
      html: 'Un mouse può dichiarare 800, 1600, 3200 o 26000 DPI, ma il valore che conta nei giochi e nel lavoro di precisione è il movimento che raggiunge effettivamente il computer. Questo analizzatore DPI mouse online misura quel valore pratico confrontando un movimento fisico noto con il movimento del puntatore catturato nel browser. Il risultato è espresso in pixel per pollice, la stessa unità comunemente usata quando si parla di DPI o CPI del mouse.',
    },
    {
      type: 'paragraph',
      html: 'Il test è intenzionalmente locale e semplice: tieni premuto il bersaglio di cattura, sposta il mouse esattamente verso destra per la distanza fisica selezionata e rilascia. Lo strumento accumula delta di movimento nativi invece di usare uno script di frequenza di polling o un test del mouse generico. Poiché il calcolo viene eseguito nel tuo browser, non è necessario scaricare driver, creare account o caricare dati sul cloud.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Condizione importante per il test',
      html: 'Per una misurazione pulita dei DPI, disattiva l\'accelerazione del puntatore del sistema operativo e le curve di accelerazione del produttore. Se l\'accelerazione rimane attiva, il risultato descrive il comportamento attuale del puntatore anziché l\'impostazione pura del sensore.',
    },
    { type: 'title', text: 'Come Funziona il Calcolo Reale dei DPI', level: 3 },
    {
      type: 'paragraph',
      html: 'DPI significa punti per pollice. Nel contesto dei mouse, si usano spesso DPI e CPI in modo intercambiabile per descrivere quanti conteggi o pixel del puntatore vengono prodotti quando il mouse percorre un pollice fisico. Questo analizzatore registra il movimento orizzontale durante un passaggio controllato, converte la distanza selezionata in pollici, quindi divide i pixel catturati per i pollici. Ad esempio, se il mouse riporta 3200 pixel corretti su 2 pollici, il valore misurato è circa 1600 DPI.',
    },
    {
      type: 'list',
      items: [
        'Scegli un riferimento corto come 10 mm per DPI molto alti o uno più lungo per DPI bassi.',
        'Tieni premuto il controllo di cattura centrale in modo che il browser registri il movimento solo durante il passaggio.',
        'Spostati fisicamente verso destra, mantenendo la traiettoria il più dritta possibile.',
        'Rilascia sul segno fisico reale e leggi i DPI calcolati.',
        'Ripeti più volte e fai la media dei passaggi coerenti invece di fidarti di un singolo passaggio.',
      ],
    },
    {
      type: 'table',
      headers: ['Movimento catturato', 'Distanza fisica', 'DPI misurati'],
      rows: [
        ['800 px', '1.00 in', '800 DPI'],
        ['1350 px', '85.6 mm larghezza carta di credito', '401 DPI'],
        ['3150 px', '50.0 mm', '1600 DPI'],
        ['6300 px', '100.0 mm', '1600 DPI'],
      ],
    },
    {
      type: 'tip',
      title: 'Fai un tratto pulito',
      html: 'Un singolo tratto orizzontale è più importante di una lunga distanza. Per DPI molto alti, usa il preset da 5 mm o 10 mm: mantiene il movimento abbastanza piccolo da restare dentro lo schermo dando comunque al calcolatore un riferimento fisico noto. La barra di avanzamento è solo un misuratore del segnale di input; il righello o la carta sulla scrivania è il punto di arresto.',
    },
    { type: 'title', text: 'Perché i DPI Misurati Possono Differire dai DPI Dichiarati', level: 3 },
    {
      type: 'paragraph',
      html: 'I DPI dichiarati sono spesso uno scatto di firmware selezionabile, non un valore certificato in laboratorio per ogni superficie e ogni unità. Due mouse impostati sugli stessi DPI nominali possono risultare diversi se i loro sensori, il ridimensionamento del firmware, l\'altezza dei piedini, la texture della superficie, il comportamento di sollevamento o le impostazioni del sistema operativo differiscono. Una piccola variazione è normale; una grande variazione di solito significa che la configurazione del test o il percorso software sta influenzando la misurazione.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'DPI nominali',
          description: 'Il valore mostrato nel software del mouse o stampato sulla pagina del prodotto. Utile come punto di partenza, ma non è una prova del movimento effettivo.',
          points: ['Facile da leggere', 'Può nascondere il ridimensionamento del firmware', 'Varia in base al profilo'],
        },
        {
          title: 'DPI misurati',
          description: 'Il valore calcolato dallo spostamento fisico e dal movimento del puntatore catturato. Ideale per abbinare un mouse a un altro.',
          highlight: true,
          points: ['Pratico e ripetibile', 'Sensibile alla precisione della mano', 'Mostra il comportamento reale della configurazione'],
        },
        {
          title: 'Sensibilità in gioco',
          description: 'La risposta finale della telecamera o del cursore dopo che il gioco moltiplica l\'input del mouse per il proprio valore di sensibilità.',
          points: ['Quello che senti realmente', 'Specifica del gioco', 'Non è una misurazione del sensore'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Vantaggi e svantaggi della misurazione DPI dal browser',
      items: [
        { pro: 'Non richiede installazione di driver', con: 'Il browser vede il movimento del puntatore elaborato, non il segnale elettrico del sensore' },
        { pro: 'Buono per confrontare mouse e profili rapidamente', con: 'Le impostazioni di accelerazione possono distorcere il risultato se lasciate attive' },
        { pro: 'Funziona con riferimenti fisici comuni', con: 'L\'allineamento della mano e i segni sulla scrivania influenzano la ripetibilità' },
      ],
    },
    { type: 'title', text: 'Preparare Windows, macOS e il Software del Mouse', level: 3 },
    {
      type: 'paragraph',
      html: 'Prima di usare un analizzatore DPI, rendi il percorso di input il più neutro possibile. Su Windows, disattiva Migliora precisione del puntatore se vuoi un comportamento non elaborato. Nel software del produttore, disattiva l\'aggancio angolare, l\'accelerazione, il controllo dell\'ondulazione, il livellamento o le assistenze specifiche per superficie a meno che tu non voglia deliberatamente misurarle. Su macOS, l\'accelerazione del puntatore fa parte del normale percorso del cursore, quindi il valore va trattato come un risultato pratico di sistema piuttosto che come un risultato puro del sensore.',
    },
    {
      type: 'table',
      headers: ['Impostazione', 'Consigliata per DPI puri', 'Motivo'],
      rows: [
        ['Accelerazione del puntatore', 'Disattivata', 'L\'accelerazione modifica il movimento in uscita in base alla velocità'],
        ['Scatto DPI del software del mouse', 'Scatto singolo fisso', 'Previene cambi accidentali di profilo durante il test'],
        ['Aggancio angolare', 'Disattivato', 'Può modificare il movimento diagonale e mascherare l\'uscita naturale del sensore'],
        ['Ridimensionamento del sistema operativo', 'Lascia normale, lo strumento corregge con devicePixelRatio', 'L\'analizzatore neutralizza lo zoom del browser e il rapporto pixel del display nel suo calcolo'],
        ['Sovrapposizioni di gioco o macro', 'Disattivate', 'Il software aggiuntivo può intercettare l\'input e rendere i passaggi incoerenti'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:target',
      title: 'Abbinare due mouse',
      html: 'Misura il vecchio mouse tre volte, annota la media, quindi regola lo scatto DPI del nuovo mouse finché il suo valore misurato non è vicino. Questo è spesso più utile che copiare il numero da un\'app di un produttore a un\'altra, perché l\'uscita reale del sensore può differire.',
    },
    { type: 'title', text: 'Scegliere il Riferimento Fisico Giusto', level: 3 },
    {
      type: 'paragraph',
      html: 'L\'interfaccia include riferimenti corti per DPI alti e riferimenti più lunghi per DPI bassi. Usa 5 o 10 mm quando il puntatore attraversa lo schermo con un minuscolo movimento della mano. Usa 1 pollice, 50 mm o la larghezza della carta di 85.6 mm quando il mouse è configurato più vicino ai valori abituali del desktop o degli sparatutto tattici.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '25.4', label: 'millimetri in un pollice' },
        { value: '85.6', label: 'millimetri nella larghezza di una comune carta di credito' },
        { value: '3+', label: 'passaggi ripetuti consigliati prima di fidarsi di un profilo' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'DPI', definition: 'Punti per pollice, comunemente usato per descrivere il movimento del puntatore prodotto da un pollice di spostamento del mouse.' },
        { term: 'CPI', definition: 'Conteggi per pollice, un termine orientato al sensore che è spesso tecnicamente più accurato per i mouse.' },
        { term: 'Accelerazione', definition: 'Un\'impostazione o curva che modifica il movimento del puntatore in base alla velocità di spostamento.' },
        { term: 'devicePixelRatio', definition: 'Il rapporto del browser tra pixel CSS e pixel fisici del display, usato qui per normalizzare gli effetti di zoom e ridimensionamento dello schermo.' },
        { term: 'Aggancio angolare', definition: 'Correzione firmware o software che raddrizza il movimento, a volte utile per il disegno ma rifiutata da molti giocatori competitivi.' },
      ],
    },
    { type: 'title', text: 'Leggere l\'Indicatore di Accelerazione', level: 3 },
    {
      type: 'paragraph',
      html: 'L\'indicatore di accelerazione non è una prova di laboratorio della curva del sistema operativo. È un avviso pratico basato sulla variazione della velocità di movimento durante il passaggio catturato. Se passaggi lenti e veloci producono valori DPI molto diversi, potrebbero essere coinvolti accelerazione, livellamento, comportamento della superficie o movimento manuale incoerente. Una buona configurazione non elaborata dovrebbe produrre DPI misurati simili in diversi passaggi quando la distanza fisica è la stessa.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Quando il risultato fa salti',
      html: 'Se un passaggio indica 780 DPI e il successivo indica 950 DPI con la stessa distanza, non incolpare subito il mouse. Controlla le impostazioni di accelerazione, aumenta la distanza di test, mantieni la traiettoria del mouse orizzontale e assicurati che il puntatore non stia toccando il bordo dello schermo durante il passaggio.',
    },
    {
      type: 'summary',
      title: 'Lista di controllo per una misurazione affidabile dei DPI',
      items: [
        'Usa un riferimento fisico misurato, preferibilmente di 100 mm o più.',
        'Spostati orizzontalmente verso destra e fermati esattamente sul segno.',
        'Disattiva l\'accelerazione per confronti del profilo non elaborato.',
        'Esegui almeno tre passaggi e confronta la dispersione.',
        'Usa i DPI misurati per abbinare i mouse, non solo le etichette dei DPI dichiarati.',
      ],
    },
    {
      type: 'message',
      title: 'Nota sulla privacy',
      html: 'Questo test di accelerazione del mouse e il calcolo dei DPI vengono eseguiti localmente nel browser. Lo strumento non richiede accesso ai driver, numeri di serie del dispositivo o registri di input caricati.',
    },
  ],
  ui: {
    badge: 'Laboratorio DPI reali',
    referenceLabel: 'Riferimento',
    referenceValue: '5 mm',
    ultraDpiPreset: '5 mm',
    highDpiPreset: '10 mm',
    balancedPreset: '50 mm',
    inchPreset: '1 in',
    cardPreset: 'Carta',
    lineStart: 'Inizio',
    holdButton: 'Tieni premuto e sposta la distanza selezionata',
    holdHint: 'Usa un righello o una carta reale sulla scrivania. Non fermarti perché la barra si riempie.',
    progressLabel: 'Segnale di input',
    activeHint: 'Inseguendo il movimento',
    dpiLabel: 'DPI misurati',
    pixelsLabel: 'Movimento corretto',
    distanceReadout: 'Distanza fisica',
    ratioLabel: 'Rapporto pixel',
    initialDpiValue: '0',
    initialPixelsValue: '0 px',
    initialRatioValue: '0 px/in',
    initialSamplesValue: '0',
    initialAccelerationValue: '-',
    pixelUnit: 'px',
    pixelsPerInchUnit: 'px/in',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    statusReady: 'Pronto per catturare',
    statusTracking: 'Inseguendo il movimento...',
    statusDone: 'Misurazione completata',
    reset: 'Reimposta',
    accelerationTitle: 'Segnale di accelerazione',
    accelerationHint: 'Ripeti a velocità lenta e veloce per confrontare la coerenza.',
    accelerationLow: 'stabile',
    accelerationMedium: 'variabile',
    accelerationHigh: 'deriva alta',
    sampleCount: 'Campioni',
  },
};
