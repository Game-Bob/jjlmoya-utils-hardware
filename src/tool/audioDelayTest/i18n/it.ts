import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-ritardo-audio';
const title = 'Test di ritardo audio';
const description = 'Verifica il ritardo audio percepito su altoparlanti, cuffie, dispositivi Bluetooth e sincronizzazione video con una sequenza di impulsi nel browser.';

const faq = [
  {
    question: 'Cosa misura esattamente questo test di ritardo audio?',
    answer: 'La modalita microfono opzionale stima l intervallo tra un impulso programmato dal browser e la sua acquisizione da parte del microfono.',
  },
  {
    question: 'Posso testare la latenza Bluetooth senza microfono?',
    answer: 'Si. Avvia la sequenza di impulsi, seleziona il dispositivo Bluetooth e sposta il cursore di allineamento fino a percepire la simultaneita tra flash e suono.',
  },
  {
    question: 'Perche la modalita microfono richiede un permesso?',
    answer: 'Il browser deve accedere al microfono per rilevare il segnale sonoro inviato dagli altoparlanti. L elaborazione avviene localmente.',
  },
  {
    question: 'Perche i risultati con microfono possono variare?',
    answer: 'I riflessi dell ambiente, il trattamento del segnale nel microfono e i buffer del sistema operativo influenzano la lettura.',
  },
  {
    question: 'Quale modalita di test dovrei scegliere?',
    answer: 'Scegli Altoparlanti per la stanza, Cuffie via cavo per la connessione diretta, Bluetooth per i dispositivi wireless e Sincro video per la TV o i player.',
  },
  {
    question: 'L audio del mio microfono viene inviato a un server?',
    answer: 'No. Il flusso del microfono viene analizzato esclusivamente in memoria dal browser e non viene caricata alcuna registrazione.',
  },
];

const howTo = [
  {
    name: 'Seleziona il percorso di riproduzione',
    text: 'Scegli altoparlanti, cuffie via cavo, Bluetooth o sincronizzazione video.',
  },
  {
    name: 'Inizia con l impulso manuale',
    text: 'Premi Avvia test, ascolta il segnale sonoro e osserva l impulso visivo ciano. Regola il cursore.',
  },
  {
    name: 'Attiva la misurazione con microfono se necessario',
    text: 'Fai clic su Abilita microfono, concedi il permesso e posiziona il microfono nel punto di ascolto.',
  },
  {
    name: 'Interpreta il risultato come stima',
    text: 'Utilizza il ritardo mediano e il livello di confidenza per valutare la tua configurazione.',
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
      html: 'Questo test di ritardo audio nel browser consente di misurare lo scostamento temporale tra un impulso visivo e il relativo suono sul dispositivo in uso.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Prova iniziale senza uso del microfono',
      badge: 'Riservato e locale',
      html: '<p>Il test manuale funziona senza microfono. Segui il marcatore ciano e regola il cursore fino a percepire la coincidenza dei segnali.</p>',
    },
    {
      type: 'title',
      text: 'Come misurare la latenza audio Bluetooth',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Seleziona Bluetooth e regola il volume a un livello confortevole.',
        'Avvia la sequenza di impulsi dallo stesso browser di riproduzione.',
        'Confronta il lampeggio visivo con il segnale acustico.',
        'Regola il cursore di allineamento fino alla perfetta simultaneita.',
        'Ripeti la prova se modifichi i codec o le impostazioni di sistema.',
      ],
    },
    {
      type: 'table',
      headers: ['Modalita', 'Ideale per', 'Limitazione principale'],
      rows: [
        ['Altoparlanti', 'Ascolto in stanza e TV', 'La distanza e i riflessi della stanza influenzano la misura.'],
        ['Cuffie cavo', 'Uscita analogica diretta', 'Il microfono potrebbe non captare cuffie chiuse.'],
        ['Bluetooth', 'Cuffie e altoparlanti wireless', 'Il buffer del codec varia a seconda del dispositivo.'],
        ['Sincro video', 'Allineamento schermo e riproduttore', 'Il riproduttore video puo introdurre un ritardo di rendering.'],
      ],
    },
    {
      type: 'title',
      text: 'Misurazione opzionale con microfono',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Con l accesso al microfono abilitato, il test rileva il picco acustico e calcola la mediana dei campioni per escludere disturbi isolati.',
    },
    {
      type: 'tip',
      title: 'Posiziona il microfono nel punto di ascolto',
      html: 'Per gli altoparlanti, metti il microfono dove ti siedi di solito ed evita rumori di fondo.',
    },
    {
      type: 'title',
      text: 'Perche i risultati di latenza variano',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il ritardo audio dipende dall intera catena: clock AudioContext del browser, buffer di sistema, codec Bluetooth e altoparlante.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Valutazione dei dati',
      badge: 'Stima indicativa',
      html: '<p>Usa questo valore per confrontare configurazioni. Non sostituisce un sistema di misurazione professionale.</p>',
    },
  ],
  ui: {
    badge: 'Osservatorio latenza',
    modeLabel: 'Percorso riproduzione',
    modeSpeakers: 'Altoparlanti',
    modeWired: 'Cavo',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Sincro video',
    startTest: 'Avvia test',
    stopTest: 'Interrompi test',
    enableMic: 'Abilita microfono',
    micEnabled: 'Microfono pronto',
    calibrationTitle: 'Correzione allineamento',
    calibrationHint: 'Sposta il cursore fino a far coincidere il flash e il suono',
    calibrationEarly: 'Audio in anticipo',
    calibrationLate: 'Visivo in anticipo',
    calibrationCenter: 'Allineato',
    visualLane: 'Visivo',
    audioLane: 'Audio',
    statusReady: 'Pronto',
    statusRunning: 'Sequenza impulsi in corso',
    statusWaiting: 'In attesa impulso',
    resultTitle: 'Lettura attuale',
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
    permissionDenied: 'Permesso microfono non concesso',
    limitationTitle: 'Considera il risultato come una stima',
    limitationText: 'I riflessi ambientali e il buffer di sistema variano il ritardo misurato. Nessun audio viene caricato in rete.',
    copyReport: 'Copia report',
    copied: 'Copiato',
    reset: 'Ripristina',
    safety: 'Inizia a basso volume. Interrompi in caso di distorsione.',
    pulse: 'SINCRO',
  },
};
