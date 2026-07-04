import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SubwooferCrossoverTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-crossover-subwoofer-online';
const title = 'Test di Crossover del Subwoofer';
const description =
  'Esegui una scansione sinusoidale da 200 Hz a 10 Hz nel tuo browser per trovare dove il subwoofer si attenua, decade o passa il testimone ai diffusori principali.';

const faqData = [
  {
    question: 'Cosa misura un test di crossover del subwoofer?',
    answer:
      'Ti aiuta a sentire il punto in cui i bassi smettono di suonare continui tra i diffusori principali e il subwoofer. Un vuoto, un cambio improvviso di livello o una gamma mancante può indicare una frequenza di crossover errata, un problema di fase, un\'annullamento ambientale o il limite del subwoofer.',
  },
  {
    question: 'Perché questo test esegue la scansione da 200 Hz a 10 Hz?',
    answer:
      'La maggior parte dei crossover home theater si colloca tra 60 Hz e 120 Hz, mentre molti diffusori compatti iniziano a perdere uscita sopra o sotto quella gamma. Scansionare da 200 Hz rende il passaggio diffusore-subwoofer facile da sentire prima che il tono raggiunga i sub-bassi profondi.',
  },
  {
    question: 'Questo test online dei bassi del subwoofer può danneggiare i diffusori?',
    answer:
      'Sì, frequenze molto basse ad alto volume possono sovraccaricare diffusori piccoli o stressare un subwoofer. Inizia a basso volume, evita modalità di basso amplificate e fermati immediatamente se senti vibrazioni, colpi o stress meccanico.',
  },
  {
    question: 'La frequenza di decadimento segnata è l\'esatta impostazione di crossover da usare?',
    answer:
      'No. Considerala un indizio d\'ascolto, non una misura di laboratorio. La migliore impostazione di crossover dipende anche dalle specifiche dei diffusori, dal posizionamento nella stanza, dalla fase, dalla correzione della distanza e dall\'obiettivo di calibrazione.',
  },
];

const howToData = [
  {
    name: 'Imposta un livello di ascolto sicuro',
    text: 'Abbassa prima il volume del sistema. La scansione usa un\'onda sinusoidale generata, quindi i bassi possono diventare intensi anche quando il volume del browser sembra modesto.',
  },
  {
    name: 'Avvia la scansione da 200 Hz a 10 Hz',
    text: 'Premi Avvia scansione e ascolta dalla tua posizione abituale. Il tono si muove costantemente attraverso la gamma dei bassi dove si sovrappongono subwoofer, diffusori principali e acustica ambientale.',
  },
  {
    name: 'Ascolta il decadimento o il passaggio',
    text: 'Presta attenzione al momento in cui i bassi si indeboliscono, scompaiono, cambiano posizione o suonano irregolari tra subwoofer e diffusori principali.',
  },
  {
    name: 'Segna la frequenza',
    text: 'Premi Segna decadimento al primo chiaro punto problematico. Usa quella frequenza come indizio per regolare crossover, fase, posizionamento o correzione ambientale.',
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

export const content: ToolLocaleContent<SubwooferCrossoverTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Trova Il Vuoto Di Bassi Tra I Tuoi Diffusori E Il Subwoofer', level: 2 },
    {
      type: 'paragraph',
      html: 'Un subwoofer non dovrebbe suonare come una cassa separata nell\'angolo. I bassi dovrebbero rimanere uniformi mentre le note passano dai diffusori principali al sub. Questo test esegue la scansione da <strong>200 Hz a 10 Hz</strong> così puoi sentire la zona esatta dove il passaggio diventa debole, rimbombante, localizzabile o silenzioso.',
    },
    {
      type: 'table',
      headers: ['Cosa senti', 'Cosa significa di solito', 'Cosa provare prima'],
      rows: [
        ['I bassi svaniscono intorno a 70-100 Hz', 'Subwoofer e diffusori potrebbero annullarsi a vicenda vicino al crossover.', 'Inverti la fase, regola distanza/ritardo, poi ripeti la scansione.'],
        ['I bassi rimbombano in una banda stretta', 'Modo ambiente o troppa sovrapposizione tra diffusori e subwoofer.', 'Abbassa leggermente il crossover o sposta il subwoofer/posizione d\'ascolto.'],
        ['I bassi sembrano provenire dalla posizione del subwoofer', 'Il crossover potrebbe essere troppo alto o il livello del subwoofer troppo elevato.', 'Prova 80 Hz o meno e riduci il guadagno del subwoofer.'],
        ['I bassi profondi svaniscono sotto 30-40 Hz', 'Limite di estensione normale per molti sub, specialmente modelli compatti.', 'Controlla le specifiche del subwoofer prima di inseguire un problema che potrebbe essere fisico.'],
      ],
    },
    { type: 'title', text: 'Cosa Ti Dice La Frequenza Di Decadimento', level: 3 },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Usa la frequenza segnata come indizio di regolazione',
      badge: 'Indizi d\'ascolto',
      html: '<p>Se il punto segnato è vicino al crossover del tuo AVR, il problema è probabilmente di integrazione: fase, distanza, polarità, livello o la pendenza dei filtri. Se il punto segnato è molto più basso, potresti sentire il subwoofer esaurire la sua uscita. Se il problema cambia molto quando muovi la testa, l\'ambiente sta dominando il risultato.</p>',
    },
    {
      type: 'title',
      text: 'Gamme Di Crossover Comuni',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tipo di diffusore', 'Punto di partenza tipico del crossover', 'Perché'],
      rows: [
        ['Piccoli satelliti', '100-150 Hz', 'I cabinet minuscoli di solito non possono riprodurre bassi medio-alti puliti a livelli cinema.'],
        ['Diffusori da scaffale', '70-100 Hz', 'Spesso abbastanza bassi per un passaggio pulito senza rendere il sub localizzabile.'],
        ['Diffusori a torre', '50-80 Hz', 'I woofer più grandi gestiscono più medio-bassi, ma l\'ambiente potrebbe ancora preferire la gestione dei bassi via subwoofer.'],
        ['Configurazione stile THX', '80 Hz', 'Un valore predefinito pratico che funziona bene per molti sistemi e indirizza i bassi profondi al sub.'],
      ],
    },
    { type: 'title', text: 'Problema Di Crossover O Problema Ambientale?', level: 3 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Problema di crossover o fase',
          description: 'Il punto debole appare vicino alla frequenza di crossover e migliora dopo aver cambiato fase, polarità, distanza o impostazione del crossover.',
          points: ['Di solito ripetibile dallo stesso posto a sedere.', 'Spesso centrato intorno a 60-120 Hz.'],
        },
        {
          title: 'Annullamento ambientale',
          description: 'Il punto debole cambia drasticamente quando muovi la testa, cambi posto o sposti il subwoofer di una breve distanza.',
          points: ['Molto dipendente dalla posizione.', 'Spesso risolto più con il posizionamento che con le impostazioni.'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Miglior modo di eseguire il test',
      html: 'Siediti dove guardi effettivamente film o ascolti musica. Non stare accanto al subwoofer. Un crossover che suona bene accanto al mobile può ancora lasciare un vuoto sul divano.',
    },
    {
      type: 'summary',
      title: 'Cosa modificare dopo la scansione',
      items: [
        'Se il vuoto è vicino al crossover attuale, prova variazioni di 10 Hz e ripeti la scansione.',
        'Prova l\'interruttore di fase del subwoofer o la regolazione del ritardo se la banda debole si trova vicino al crossover.',
        'Se i bassi diventano più forti in un posto e scompaiono in un altro, sposta il subwoofer prima di cambiare ogni impostazione AVR.',
        'Dopo modifiche di posizionamento o crossover, riesegui la correzione ambientale così il ricevitore misura la nuova configurazione.',
        'Usa la frequenza segnata per guidare la regolazione, poi conferma con musica, film e linee di basso familiari.',
      ],
    },
  ],
  ui: {
    sweepLabel: 'Scansione a bassa frequenza del subwoofer',
    currentFrequency: 'Frequenza attuale',
    targetFrequency: 'Obiettivo',
    elapsed: 'Trascorso',
    statusReady: 'Pronto per la scansione bassa',
    statusRunning: 'Scansione in discesa',
    statusStopped: 'Scansione fermata',
    start: 'Avvia scansione',
    stop: 'Ferma scansione',
    markDropout: 'Segna decadimento',
    reset: 'Ripristina',
    volume: 'Livello di uscita',
    duration: 'Durata scansione',
    safeStart: 'Inizia a basso volume, poi segna la prima frequenza dove i bassi diventano difficili da sentire.',
    roomNote: 'La posizione nella stanza e la fase possono cambiare drasticamente il risultato.',
    dropoutLabel: 'Punto segnato',
    dropoutEmpty: 'Non ancora segnato',
    crossoverEstimate: 'Punto di decadimento stimato',
  },
};
