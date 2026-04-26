import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ToneGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'generatore-toni-frequenza-online';
const title = 'Generatore di Toni e Frequenze Online';
const description =
  'Genera onde sinusoidali, quadre, triangolari e a dente di sega. Testa i tuoi altoparlanti, cuffie o subwoofer con frequenze da 20Hz a 20kHz.';

const faqData = [
  {
    question: 'A cosa serve un generatore di frequenza?',
    answer:
      'Viene utilizzato per testare la risposta in frequenza di altoparlanti e cuffie, rilevare risonanze indesiderate nei mobili, trovare lacune nel proprio campo uditivo o persino aiutare a calmare l\'acufene attraverso la terapia notch.',
  },
  {
    question: "Cos'è un'onda sinusoidale rispetto a un'onda quadra?",
    answer:
      "Un'onda sinusoidale è un tono puro senza armoniche (liscio e rotondo). Un'onda quadra è ricca di armoniche dispari e suona molto più aggressiva o digitale. L'onda triangolare si colloca nel mezzo, utile per la sintesi audio.",
  },
  {
    question: 'Posso danneggiare i miei altoparlanti con questo strumento?',
    answer:
      'Sì, se utilizzi volumi molto alti a frequenze estreme (specialmente bassi sotto i 30Hz o acuti sopra i 15kHz). Inizia sempre con un volume di sistema basso e aumenta gradualmente.',
  },
  {
    question: 'Qual è il range uditivo umano?',
    answer:
      'Teoricamente da 20Hz a 20.000Hz (20kHz). Tuttavia, con l\'età è normale perdere la capacità di sentire sopra i 15kHz. Questo test può aiutarti a verificare il tuo limite superiore personale.',
  },
];

const howToData = [
  {
    name: 'Seleziona il tipo di forma d\'onda',
    text: 'Scegli tra Sinusoidale (pura), Quadra, Triangolare o Dente di sega a seconda del tipo di test che vuoi eseguire.',
  },
  {
    name: 'Regola la frequenza',
    text: 'Muovi lo slider per navigare nello spettro udibile. Usa le scorciatoie da 60Hz, 440Hz o 1kHz per accedere rapidamente alle frequenze di riferimento.',
  },
  {
    name: 'Controlla il volume',
    text: 'Assicurati che il volume dell\'altoparlante sia basso prima di premere Play. Puoi regolare il guadagno direttamente dallo strumento.',
  },
  {
    name: 'Analizza la risposta',
    text: 'Ascolta eventuali distorsioni o momenti in cui il suono scompare. Questo indicherà i limiti fisici del tuo hardware audio.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<ToneGeneratorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Tutto su Frequenze e Onde Sonore', level: 2 },
    {
      type: 'paragraph',
      html: 'Il suono è pura fisica in movimento. Questo strumento ti permette di manipolare le onde sonore in tempo reale, dai bassi più profondi che puoi sentire nel petto agli alti ultrasonici che solo gli animali possono percepire.',
    },
    { type: 'title', text: 'Range Uditivo Umano e Presbiacusia', level: 3 },
    {
      type: 'paragraph',
      html: 'Un orecchio umano sano percepisce suoni tra <strong>20Hz e 20kHz</strong>. Con l\'età, il limite superiore scende: la maggior parte degli adulti sopra i 50 anni non riesce a sentire sopra i 12kHz. Il tono a 17,4kHz, noto come "mosquito tone", è un classico test che in genere solo gli adolescenti riescono a superare.',
    },
    { type: 'title', text: 'Tipi di Onde e loro utilizzi', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Sinusoidale:</strong> tono puro senza armoniche, utilizzato nei test uditivi medici e nella calibrazione degli strumenti. <strong>Quadra:</strong> ricca di armoniche dispari, suona come le console retrò a 8 bit. <strong>Dente di sega:</strong> contiene tutte le armoniche, la base dei sintetizzatori musicali elettronici. <strong>Triangolare:</strong> punto di mezzo tra sinusoidale e quadra -più liscia della quadra ma con più contenuto armonico della sinusoidale.',
    },
    { type: 'title', text: 'Test degli Altoparlanti e Pulizia tramite Vibrazione', level: 3 },
    {
      type: 'paragraph',
      html: 'Un\'onda a bassa frequenza (tipicamente <strong>165Hz</strong>) al massimo volume con una forma quadra o a dente di sega costringe il diaframma dell\'altoparlante a vibrare violentemente, espellendo meccanicamente le gocce d\'acqua intrappolate nella griglia. Non riprodurre frequenze estremamente alte al massimo volume per lunghi periodi: anche se non puoi sentirle, l\'energia può danneggiare i tweeter della tua attrezzatura.',
    },
  ],
  ui: {
    badge: 'Generatore Audio',
    title: 'Generatore di Toni',
    description: 'Genera frequenze pure per test audio.',
    freqLabel: 'Frequenza',
    preset60: '60Hz',
    preset440: '440Hz',
    preset1k: '1kHz',
    rangeMin: '20Hz (Sub-bass)',
    rangeMax: '20kHz (Ultrasuoni)',
    waveLabel: 'Forma d\'onda',
    waveSine: 'Sinusoidale',
    waveSquare: 'Quadra',
    waveSawtooth: 'Dente di sega',
    waveTriangle: 'Triangolare',
    volLabel: 'Volume',
    btnPlay: 'RIPRODUCI TONO',
    btnStop: 'STOP',
  },
};
