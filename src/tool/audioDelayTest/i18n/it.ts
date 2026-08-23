import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-ritardo-audio';
const title = 'Test Ritardo Audio';
const description = 'Testa il ritardo audio percepito su altoparlanti, cuffie, dispositivi Bluetooth e riproduzione video con un test di impulsi locale nel browser.';

const faq = [
  {
    question: 'Cosa misura esattamente questo test di ritardo audio?',
    answer: 'La modalità microfono opzionale stima l intervallo tra un clic programmato dal browser e la sua rilevazione da parte del microfono. La modalità manuale aiuta ad allineare i segnali visivi e acustici ad orecchio. Nessuna delle due modalità è una misurazione da laboratorio industriale.',
  },
  {
    question: 'Posso testare la latenza Bluetooth senza microfono?',
    answer: 'Sì. Avvia la sequenza di impulsi, seleziona Bluetooth e sposta il cursore di allineamento finché il flash e il clic non sembrano coincidere. Il risultato viene salvato come correzione di allineamento piuttosto che come latenza hardware assoluta.',
  },
  {
    question: 'Perché la modalità microfono richiede un autorizzazione?',
    answer: 'Il browser necessita dell accesso al microfono per rilevare il clic di prova dopo che si è propagato attraverso gli altoparlanti o l ambiente. L audio viene elaborato esclusivamente in locale nel browser.',
  },
  {
    question: 'Perché il risultato del microfono può variare?',
    answer: 'I riflessi dell ambiente, l elaborazione del microfono, il controllo automatico del guadagno e i buffer del sistema operativo possono influenzare la misurazione. Considera il valore come una stima per la configurazione attuale.',
  },
  {
    question: 'Quale modalità di test dovrei scegliere?',
    answer: 'Scegli Altoparlanti per la riproduzione nella stanza, Cuffie cablate per uscite dirette, Bluetooth per dispositivi wireless e Sincronizzazione video per verificare schermi e lettori.',
  },
  {
    question: 'Il test invia l audio del mio microfono a un server?',
    answer: 'No. Lo stream del microfono viene letto esclusivamente in locale dall analizzatore del browser e nessun campionamento audio viene caricato in rete.',
  },
];

const howTo = [
  {
    name: 'Scegliere il percorso di riproduzione',
    text: 'Seleziona altoparlanti, cuffie cablate, Bluetooth o sincronizzazione video per definire la configurazione da testare.',
  },
  {
    name: 'Iniziare con l impulso manuale',
    text: 'Clicca su Avvia test e ascolta il breve clic osservando l impulso visivo ciano. Regola il cursore finché non appaiono simultanei.',
  },
  {
    name: 'Aggiungere la misurazione con microfono se utile',
    text: 'Attiva il microfono, concedi l autorizzazione, posiziona il microfono nel punto di ascolto ed esegui nuovamente la sequenza.',
  },
  {
    name: 'Leggere il risultato come stima',
    text: 'Utilizza il ritardo mediano e l indice di confidenza come stima della configurazione attuale dopo aver modificato dispositivi o distanze.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<AudioDelayTestUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Test di ritardo audio per Bluetooth e sincronizzazione video', level: 2 },
    {
      type: 'paragraph',
      html: 'Questo test di ritardo audio basato sul browser ti aiuta a verificare il divario temporale tra un segnale visivo e un suono sul dispositivo che stai utilizzando. È ideale per cuffie Bluetooth, altoparlanti wireless, cuffie cablate e controlli di sincronizzazione video. Lo strumento genera brevi clic in locale senza richiedere il download di file di prova.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Avvio senza accesso al microfono',
      badge: 'Privato e locale',
      html: '<p>Il test di impulso manuale funziona senza microfono. Osserva l indicatore visivo ciano e ascolta il clic, quindi regola il cursore fino a percepire la simultaneità. Questo fornisce una correzione utile per la configurazione senza pretendere di misurare la latenza hardware assoluta.</p>',
    },
    {
      type: 'title',
      text: 'Come testare la latenza audio Bluetooth',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Seleziona Bluetooth e imposta un volume di ascolto confortevole prima di iniziare.',
        'Esegui la sequenza di impulsi dallo stesso browser e dispositivo usati per la riproduzione.',
        'Confronta l impulso visivo direttamente con il clic anziché valutare un brano musicale lungo.',
        'Sposta il cursore di allineamento finché i due segnali non coincidono, quindi annota la correzione.',
        'Ripeti il test dopo aver cambiato codec, sistema operativo, browser o distanza.',
      ],
    },
    {
      type: 'table',
      headers: ['Modalità', 'Consigliato per', 'Limitazione principale'],
      rows: [
        ['Altoparlanti', 'Riproduzione nella stanza e TV', 'La distanza e i riflessi dell ambiente influenzano il percorso acustico.'],
        ['Cuffie cablate', 'Uscita cuffie diretta', 'Il microfono potrebbe faticare a captare il suono da cuffie chiuse.'],
        ['Bluetooth', 'Cuffie e altoparlanti wireless', 'Il buffer del codec varia a seconda dei dispositivi e delle applicazioni.'],
        ['Sincronizzazione video', 'Allineamento schermo e player', 'Il lettore video può aggiungere un proprio ritardo di rendering dei fotogrammi.'],
      ],
    },
    {
      type: 'title',
      text: 'Misurazione opzionale tramite microfono',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando l accesso al microfono è attivo, lo strumento analizza l ingresso locale per ciascun clic e registra il tempo trascorso dall evento audio programmato al picco acustico rilevato. Il risultato utilizza la mediana dei campioni per evitare che un riflesso isolato comprometta la stima.',
    },
    {
      type: 'tip',
      title: 'Posizionare il microfono dove si ascolta',
      html: 'Per gli altoparlanti, posiziona il microfono nella posizione di ascolto abituale e mantieni il silenzio nella stanza. Per i test di sincronizzazione video, utilizza la disposizione solita.',
    },
    {
      type: 'title',
      text: 'Perché i risultati del ritardo audio variano',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il ritardo audio si accumula lungo l intera catena: clock AudioContext del browser, buffer del sistema operativo, codifica hardware e driver degli altoparlanti. Il microfono aggiunge il proprio percorso di acquisizione. Pertanto il test descrive la combinazione attuale di dispositivo e sistema.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Usare il risultato come stima',
      badge: 'Solo stima',
      html: '<p>Utilizza il risultato per confrontare configurazioni o risolvere evidenti problemi di sincronizzazione. Non sostituisce una specifica del produttore o un sistema di misurazione da laboratorio.</p>',
    },
  ],
  ui: {
    badge: 'Osservatorio di latenza',
    modeLabel: 'Percorso di riproduzione',
    modeSpeakers: 'Altoparlanti',
    modeWired: 'Cablato',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Sincronizzazione video',
    startTest: 'Avvia test',
    stopTest: 'Interrompi test',
    enableMic: 'Attiva microfono',
    micEnabled: 'Microfono pronto',
    calibrationTitle: 'Correzione allineamento',
    calibrationHint: 'Sposta il cursore finché il flash e il clic non coincidono',
    calibrationEarly: 'Audio in anticipo',
    calibrationLate: 'Visivo in anticipo',
    calibrationCenter: 'Allineato',
    visualLane: 'Visivo',
    audioLane: 'Audio',
    statusReady: 'Pronto',
    statusRunning: 'Sequenza impulsi in corso',
    statusWaiting: 'In attesa dell impulso',
    resultTitle: 'Misurazione attuale',
    latencyLabel: 'Ritardo misurato',
    alignmentLabel: 'Correzione allineamento',
    confidenceLabel: 'Confidenza',
    samplesLabel: 'Campioni',
    notMeasured: 'Non misurato',
    manualConfidence: 'Solo manuale',
    lowConfidence: 'Confidenza bassa',
    mediumConfidence: 'Confidenza media',
    highConfidence: 'Confidenza alta',
    noMic: 'Ingresso microfono non disponibile in questo browser',
    permissionDenied: 'Autorizzazione microfono non concessa',
    limitationTitle: 'Leggere il risultato come stima',
    limitationText: 'Riflessi dell ambiente, elaborazione microfono e buffer modificano il ritardo misurato. Nessun audio viene caricato.',
    copyReport: 'Copia report',
    copied: 'Copiato',
    reset: 'Ripristina',
    safety: 'Inizia a basso volume. Interrompi se il suono distorce.',
    pulse: 'SINCRONO',
  },
};
