import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpeakerPhaseTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tester-fase-altoparlanti';
const title = 'Tester di Fase per Diffusori';
const description =
  'Riproduci segnali di test stereo in fase e invertiti di 180 gradi nel tuo browser per verificare la polarità dei diffusori, gli errori di cablaggio e l\'annullamento di fase.';

const faqData = [
  {
    question: 'Come faccio a sapere se la polarità dei miei diffusori è corretta?',
    answer:
      'Riproduci il segnale normale e poi quello invertito dalla stessa posizione di ascolto. Con diffusori cablati correttamente, la modalità invertita dovrebbe suonare più debole, vuota o meno centrata perché i canali sinistro e destro si annullano parzialmente nella stanza. Se la modalità invertita suona più piena o più forte, è possibile che un diffusore sia già cablato con polarità invertita.',
  },
  {
    question: 'Cosa significa fase invertita in questo test?',
    answer:
      'Lo strumento invia lo stesso segnale a entrambi i canali, poi moltiplica un canale per -1 in modalità invertita. Questo capovolge la forma d\'onda di 180 gradi senza scaricare alcun file audio. Il risultato fisico equivale a invertire positivo e negativo su un diffusore per il segnale di test.',
  },
  {
    question: 'Questo test può verificare ogni diffusore di un home theater?',
    answer:
      'È ideale per controllare una coppia stereo o i diffusori anteriori sinistro e destro di un sistema più grande. Per sistemi surround completi, testa le coppie una alla volta e combina il risultato con il test dei canali del tuo ricevitore AV, la calibrazione della distanza e un microfono di misurazione o fonometro se disponibile.',
  },
  {
    question: 'Devo usare il rumore rosa o un tono sinusoidale?',
    answer:
      'Il rumore rosa è di solito più semplice per i controlli di polarità perché copre un\'ampia gamma di frequenze e rende evidente l\'annullamento. Un tono sinusoidale può aiutare a concentrarsi su una frequenza specifica, ma i modi di stanza possono rendere fuorviante un singolo tono.',
  },
  {
    question: 'È sicuro per diffusori e cuffie?',
    answer:
      'Sì, a livelli moderati. Inizia basso, evita il guadagno massimo dell\'amplificatore e non riprodurre toni continui ad alto volume su cuffie, piccoli diffusori per laptop o diffusori sconosciuti. Fermati immediatamente se senti distorsione o stress meccanico.',
  },
];

const howToData = [
  {
    name: 'Posizionati nel punto di ascolto',
    text: 'Siediti dove ascolti normalmente in modo che l\'annullamento acustico che percepisci corrisponda alla stanza reale e al posizionamento dei diffusori.',
  },
  {
    name: 'Riproduci il segnale normale',
    text: 'Premi Riproduci In Fase e osserva l\'immagine centrale, il volume e il corpo tonale.',
  },
  {
    name: 'Riproduci il segnale invertito',
    text: 'Premi Riproduci Fuori Fase. I diffusori cablati correttamente dovrebbero suonare in genere più diffusi, vuoti o silenziosi.',
  },
  {
    name: 'Controlla il cablaggio se il risultato è invertito',
    text: 'Se la modalità invertita suona più forte di quella normale, controlla i terminali positivo e negativo su un diffusore, i morsetti dell\'amplificatore, i connettori a banana, le placche a muro e gli adattatori.',
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<SpeakerPhaseTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Test Online di Fase e Polarità dei Diffusori', level: 2 },
    {
      type: 'paragraph',
      html: 'Questo tester di fase per diffusori confronta un segnale stereo normale con una versione in cui un canale viene invertito di <strong>180 gradi</strong>. L\'obiettivo pratico è semplice: confermare se i due diffusori di una coppia si muovono insieme quando dovrebbero. Quando i diffusori sinistro e destro sono cablati con la stessa polarità, l\'energia dei bassi e dei medi si rafforza reciprocamente e l\'immagine centrale risulta stabile. Quando un diffusore è cablato al contrario, i coni si muovono in direzioni opposte per la stessa forma d\'onda, e questo può far perdere corpo alle voci, far scomparire i bassi e rendere il posizionamento stereo stranamente ampio o vuoto.',
    },
    {
      type: 'paragraph',
      html: 'Il test viene generato localmente nel browser. Non trasmette alcun file audio pesante. In modalità normale, entrambi i canali ricevono lo stesso rumore rosa o tono sinusoidale. In modalità invertita, un canale viene moltiplicato per <code>-1</code>, creando una forma d\'onda matematicamente invertita. Se il cablaggio reale dei diffusori è corretto, questa inversione artificiale dovrebbe creare un\'evidente annullamento. Se il cablaggio fisico è già invertito, il pulsante invertito può parzialmente correggere l\'errore, quindi potrebbe suonare più forte, più solido o più centrato rispetto al pulsante normale.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Interpretazione rapida',
      badge: 'Regola base',
      html: '<p>Se <strong>Fuori Fase</strong> suona più debole, distante, vuoto o silenzioso rispetto a <strong>In Fase</strong>, la coppia sinistra/destra è probabilmente cablata correttamente. Se Fuori Fase suona più pieno o più forte, controlla i terminali rosso e nero su un diffusore, l\'amplificatore, i connettori a banana, le placche a muro, il cablaggio auto o qualsiasi adattatore nella catena.</p>',
    },
    {
      type: 'table',
      headers: ['Cosa senti', 'Probabile significato', 'Prossimo passo'],
      rows: [
        ['Il normale è pieno, l\'invertito è vuoto', 'I due diffusori hanno probabilmente una polarità corrispondente.', 'Lascia il cablaggio così com\'è e procedi con il posizionamento o la calibrazione.'],
        ['L\'invertito è più pieno del normale', 'Un diffusore potrebbe essere fisicamente cablato al contrario.', 'Controlla i terminali positivo e negativo su un solo lato della coppia.'],
        ['Entrambe le modalità suonano quasi uguali', 'I diffusori potrebbero essere troppo distanti, le riflessioni della stanza dominano o l\'uscita è mono.', 'Spostati nella posizione di ascolto, disattiva l\'elaborazione mono e prova con il rumore rosa.'],
        ['Entrambe le modalità suonano deboli nei bassi', 'L\'annullamento della stanza, la fase del subwoofer, il crossover o il posizionamento potrebbero essere il problema principale.', 'Esegui uno sweep dei bassi e testa separatamente la polarità del subwoofer.'],
      ],
    },
    { type: 'title', text: 'Perché la Polarità Invertita dei Diffusori Suona Male', level: 2 },
    {
      type: 'paragraph',
      html: 'Un diffusore trasforma un segnale elettrico in movimento del cono. Per un\'onda di pressione positiva, due diffusori uguali dovrebbero generalmente spingere l\'aria nella stessa direzione nello stesso momento. Se un diffusore ha i conduttori positivo e negativo scambiati, quel diffusore si muove verso l\'interno mentre l\'altro si muove verso l\'esterno per lo stesso segnale. In una coppia stereo, questo non rende semplicemente il suono più silenzioso ovunque; la stanza, la distanza tra i diffusori, la lunghezza d\'onda e la posizione di ascolto determinano dove l\'annullamento è più forte. I sintomi più evidenti sono di solito bassi ridotti, un centro fantasma debole e voci che sembrano staccarsi dallo spazio tra i diffusori.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Le voci principali e i dialoghi dovrebbero ancorarsi vicino al centro quando entrambi i diffusori riproducono lo stesso segnale mono.',
        'La cassa, il basso e le note più basse del pianoforte dovrebbero avere corpo invece di suonare leggeri.',
        'L\'immagine stereo non dovrebbe risultare artificialmente ampia quando la sorgente è mono.',
        'Muovendo leggermente la testa, l\'immagine centrale non dovrebbe collassare completamente.',
        'Una coppia cablata correttamente dovrebbe far suonare il test invertito meno naturale del test normale.',
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Polarità', definition: 'L\'orientamento positivo o negativo del segnale elettrico che alimenta il driver di un diffusore.' },
        { term: 'Fase', definition: 'La relazione temporale tra due forme d\'onda, spesso descritta in gradi lungo un ciclo.' },
        { term: 'Inversione a 180 gradi', definition: 'Una forma d\'onda capovolta verticalmente, in modo che la pressione positiva diventi pressione negativa nello stesso istante.' },
        { term: 'Annullamento', definition: 'Una riduzione del livello sonoro quando due forme d\'onda simili arrivano con polarità o tempo opposti.' },
        { term: 'Centro fantasma', definition: 'L\'immagine centrale apparente creata quando un suono identico raggiunge i diffusori sinistro e destro in modo uniforme.' },
      ],
    },
    {
      type: 'tip',
      title: 'Non testare da accanto a un diffusore',
      html: 'Siediti nella normale posizione di ascolto. L\'annullamento di fase è spaziale: un risultato sentito a mezzo metro dal diffusore sinistro può essere completamente diverso dal risultato ottenuto sul divano, sulla sedia da studio o sul sedile del conducente.',
    },
    { type: 'title', text: 'Rumore Rosa o Tono Sinusoidale per i Controlli di Polarità', level: 2 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Rumore rosa',
          description: 'Rumore a banda larga con più energia nelle ottave basse rispetto al rumore bianco. Rende più facile giudicare a orecchio il corpo tonale complessivo, l\'immagine centrale e l\'annullamento.',
          highlight: true,
          points: ['Migliore prima scelta per controlli rapidi di polarità.', 'Meno probabilità di essere dominato da un singolo modo di stanza.', 'Utile per home cinema, monitor da studio e audio per auto.'],
        },
        {
          title: 'Tono sinusoidale',
          description: 'Un tono a frequenza singola che può esporre l\'annullamento a una frequenza scelta ma può anche esagerare i picchi e i nulli della stanza.',
          points: ['Utile per indagare un problema specifico di crossover o di bassi.', 'Può essere fuorviante se la stanza ha un forte nullo a quella frequenza.', 'Mantieni il volume moderato perché i toni puri diventano affaticanti.'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Per un controllo rapido della polarità, inizia con il rumore rosa. Il rumore rosa distribuisce l\'energia su tutto lo spettro, quindi stai giudicando la coppia di diffusori come un sistema invece di giudicare una frequenza che potrebbe trovarsi in un nullo di stanza. Usa il controllo del tono sinusoidale solo quando vuoi concentrarti su una banda problematica nota, come un annullamento nella gamma vocale intorno a 300 Hz o un problema di incrocio dei bassi intorno a 80 Hz. Se il risultato del tono sinusoidale cambia drasticamente spostando la testa di pochi centimetri, la stanza sta influenzando fortemente quella frequenza.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '180°', label: 'Inversione matematica applicata a un canale', icon: 'mdi:rotate-3d-variant' },
        { value: '-1', label: 'Moltiplicatore di guadagno usato per il canale invertito', icon: 'mdi:plus-minus-variant' },
        { value: '0 MB', label: 'Download audio necessari per il segnale di test', icon: 'mdi:cloud-off-outline' },
      ],
    },
    { type: 'title', text: 'Lista di Controllo per Home Theater e Monitor da Studio', level: 2 },
    {
      type: 'card',
      icon: 'mdi:sofa',
      title: 'Diffusori anteriori home cinema',
      html: 'Usa i pulsanti normale e invertito solo con i diffusori anteriori sinistro e destro attivi. Disattiva gli upmixer, il surround virtuale, la modalità notturna, il miglioramento dei dialoghi e la correzione ambientale se vuoi prima isolare il cablaggio grezzo. Dopo aver confermato la polarità, riattiva la calibrazione e verifica che i dialoghi rimangano centrati.',
    },
    {
      type: 'card',
      icon: 'mdi:music-circle',
      title: 'Monitor da studio',
      html: 'Invia il segnale del browser attraverso le stesse uscite dell\'interfaccia usate dalla tua DAW. Verifica che entrambi i cavi bilanciati siano cablati in modo coerente e che gli interruttori di polarità del controller monitor non siano attivati. Un monitor invertito può rendere inaffidabili le decisioni di compatibilità mono durante il mixaggio.',
    },
    {
      type: 'card',
      icon: 'mdi:car-info',
      title: 'Audio per auto',
      html: 'Gli abitacoli delle auto creano riflessioni intense e asimmetria dei sedili, quindi ascolta dal sedile del conducente e ripeti dal sedile del passeggero se necessario. Gli adattatori del cablaggio di fabbrica, le sostituzioni degli altoparlanti delle portiere e le installazioni di amplificatori sono luoghi comuni in cui i conduttori positivo e negativo possono essere scambiati.',
    },
    {
      type: 'proscons',
      title: 'Pregi e limiti del test di fase nel browser',
      items: [
        { pro: 'Verifica immediata senza installare software o scaricare file audio.', con: 'Non può identificare quale cavo fisico sia sbagliato senza ispezionare il sistema.' },
        { pro: 'Funziona bene per coppie stereo, cuffie, monitor nearfield e controlli rapidi di installazione.', con: 'L\'acustica della stanza può nascondere o esagerare l\'effetto in alcune posizioni di ascolto.' },
        { pro: 'Il rumore rosa rende l\'annullamento ampio più facile da sentire rispetto a un singolo tono di test.', con: 'I sistemi surround multicanale richiedono comunque una verifica canale per canale.' },
      ],
    },
    { type: 'title', text: 'Come Risolvere un Test di Polarità Fallito', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tools',
      items: [
        'Spegni l\'amplificatore prima di cambiare cavi dei diffusori o connettori a banana.',
        'Scegli un diffusore nella coppia e traccia rosso su rosso e nero su nero dall\'amplificatore al diffusore.',
        'Ispeziona eventuali placche a muro, morsetti a molla, adattatori, connettori speakON o cablaggi auto tra amplificatore e diffusore.',
        'Se il cavo del diffusore ha una striscia, una nervatura, un testo stampato o un lato rame/argento, usa lo stesso conduttore per il positivo a entrambe le estremità.',
        'Dopo aver cambiato un lato, riesegui le modalità normale e invertita dalla posizione di ascolto.',
        'Se il risultato è ancora ambiguo, avvicina temporaneamente i diffusori e ripeti a basso volume.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'I subwoofer richiedono un controllo di fase separato',
      badge: 'Sistemi di bassi',
      html: '<p>Questo strumento confronta una coppia sinistra/destra. Un crossover del subwoofer può essere elettricamente corretto ma acusticamente fuori fase perché distanza, ritardo DSP, pendenza del crossover e posizionamento spostano la temporizzazione. Usa questo test per la coppia principale, poi usa uno sweep del crossover o la calibrazione del ricevitore per la transizione del subwoofer.</p>',
    },
    {
      type: 'message',
      title: 'Regola pratica di ascolto',
      ariaLabel: 'Regola pratica di ascolto per il test di fase',
      html: 'Per le installazioni reali, l\'impostazione corretta è quella che fa suonare il materiale mono focalizzato, pieno e stabile nella posizione di ascolto effettiva. La modalità invertita è un contrasto diagnostico, non una modalità di ascolto.',
    },
    {
      type: 'summary',
      title: 'Riepilogo della diagnosi di polarità dei diffusori',
      items: [
        'La modalità normale dovrebbe suonare più forte e centrata di quella invertita quando la coppia di diffusori è cablata correttamente.',
        'Una modalità invertita che suona più forte è un forte indizio che una connessione fisica del diffusore è invertita.',
        'Il rumore rosa è il miglior primo segnale perché riduce la probabilità di giudicare solo una frequenza di stanza.',
        'I toni sinusoidali sono utili per la risoluzione mirata dei problemi ma possono essere dominati dai modi di stanza.',
        'Abbassa sempre il volume prima di cambiare modalità, specialmente su cuffie o amplificatori ad alta potenza.',
      ],
    },
  ],
  ui: {
    normal: 'In Fase',
    inverted: 'Invertito',
    stop: 'Stop',
    pause: 'Pausa',
    volume: 'Livello di uscita',
    noiseColor: 'Segnale di test',
    pinkNoise: 'Rumore rosa',
    sineTone: 'Tono sinusoidale',
    frequency: 'Frequenza del tono',
    statusReady: 'Pronto',
    statusNormal: 'In fase',
    statusInverted: 'Invertito',
    instruction:
      'L\'invertito dovrebbe suonare più debole. Più forte significa controllare il cablaggio.',
    channelLabel: 'Tester di fase diffusori',
    leftChannel: 'Canale sinistro',
    rightChannel: 'Canale destro',
    leftShort: 'S',
    rightShort: 'D',
    polarityNormal: '0° allineato',
    polarityInverted: '180° invertito',
    safety: 'Inizia basso. I test di polarità possono diventare forti con amplificatori, monitor da studio, sistemi audio per auto e cuffie.',
  },
};
