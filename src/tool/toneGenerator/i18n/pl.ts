import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ToneGeneratorUI } from '../ui';

const slug = 'generator-tonow-czestotliwosci-online';
const title = 'Online Generator Tonów i Częstotliwości';
const description =
  'Generuj fale sinusoidalne, prostokątne, trójkątne i piłokształtne. Testuj głośniki, słuchawki lub subwoofer częstotliwościami od 20Hz do 20kHz.';

const faqData = [
  {
    question: 'Do czego służy generator częstotliwości?',
    answer:
      'Służy do testowania pasma przenoszenia głośników i słuchawek, wykrywania niepożądanych rezonansów w meblach, znajdowania luk w zakresie słuchu, a nawet pomocy w łagodzeniu szumów usznych poprzez terapię notch.',
  },
  {
    question: 'Czym różni się fala sinusoidalna od prostokątnej?',
    answer:
      'Fala sinusoidalna to czysty ton bez składowych harmonicznych (gładki i zaokrąglony). Fala prostokątna jest bogata w nieparzyste harmoniczne i brzmi znacznie bardziej agresywnie lub cyfrowo. Fala trójkątna znajduje się pomiędzy nimi, przydatna w syntezie dźwięku.',
  },
  {
    question: 'Czy mogę uszkodzić głośniki tym narzędziem?',
    answer:
      'Tak, jeśli używasz bardzo wysokiej głośności przy ekstremalnych częstotliwościach (zwłaszcza basów poniżej 30Hz lub sopranów powyżej 15kHz). Zawsze zaczynaj od niskiej głośności systemowej i zwiększaj ją stopniowo.',
  },
  {
    question: 'Jaki jest zakres słuchu człowieka?',
    answer:
      'Teoretycznie od 20Hz do 20 000Hz (20kHz). Jednak z wiekiem normalna jest utrata zdolności słyszenia powyżej 15kHz. Ten test może pomóc Ci zweryfikować Twoją osobistą górną granicę.',
  },
];

const howToData = [
  {
    name: 'Wybierz rodzaj fali',
    text: 'Wybierz między falą sinusoidalną (czystą), prostokątną, trójkątną lub piłokształtną w zależności od rodzaju testu, który chcesz przeprowadzić.',
  },
  {
    name: 'Dostosuj częstotliwość',
    text: 'Przesuń suwak, aby poruszać się po spektrum słyszalnym. Użyj skrótów 60Hz, 440Hz lub 1kHz, aby szybko uzyskać dostęp do częstotliwości odniesienia.',
  },
  {
    name: 'Kontroluj głośność',
    text: 'Upewnij się, że głośność głośników jest niska przed naciśnięciem Play. Możesz dostosować wzmocnienie bezpośrednio w narzędziu.',
  },
  {
    name: 'Analizuj odpowiedź',
    text: 'Nasłuchuj ewentualnych zniekształceń lub momentów, w których dźwięk znika. Wskaże to fizyczne limity Twojego sprzętu audio.',
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
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<ToneGeneratorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje',
  bibliography: [
    {
      name: 'MDN Web Docs — Web Audio API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
    },
    {
      name: 'ISO 226:2023 — Equal-loudness contours',
      url: 'https://www.iso.org/standard/83117.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Wszystko o Częstotliwościach i Falach Dźwiękowych', level: 2 },
    {
      type: 'paragraph',
      html: 'Dźwięk to czysta fizyka w ruchu. To narzędzie pozwala manipulować falami dźwiękowymi w czasie rzeczywistym, od najgłębszych basów, które możesz poczuć w klatce piersiowej, po ultradźwiękowe wysokie tony, które dostrzegają tylko zwierzęta.',
    },
    { type: 'title', text: 'Zakres Słuchu Człowieka i Presbycusis', level: 3 },
    {
      type: 'paragraph',
      html: 'Zdrowe ludzkie ucho dostrzega dźwięki między <strong>20Hz a 20kHz</strong>. Z wiekiem górna granica spada: większość dorosłych powyżej 50 roku życia nie słyszy powyżej 12kHz. Ton 17,4kHz, znany jako „mosquito tone”, to klasyczny test, który zazwyczaj przechodzą tylko nastolatkowie.',
    },
    { type: 'title', text: 'Rodzaje Fal i ich Zastosowanie', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Sinusoidalna:</strong> czysty ton bez harmonicznych, używany w medycznych badaniach słuchu i kalibracji instrumentów. <strong>Prostokątna:</strong> bogata w nieparzyste harmoniczne, brzmi jak retro konsole 8-bitowe. <strong>Piłokształtna:</strong> zawiera wszystkie harmoniczne, podstawa syntezatorów muzyki elektronicznej. <strong>Trójkątna:</strong> punkt pośredni między sinusoidalną a prostokątną — gładsza niż prostokątna, ale z większą zawartością harmonicznych niż sinusoidalna.',
    },
    { type: 'title', text: 'Testowanie Głośników i Czyszczenie Wibracyjne', level: 3 },
    {
      type: 'paragraph',
      html: 'Fala o niskiej częstotliwości (zazwyczaj <strong>165Hz</strong>) przy maksymalnej głośności o kształcie prostokątnym lub piłokształtnym zmusza membranę głośnika do gwałtownych wibracji, mechanicznie wypychając krople wody uwięzione w siatce. Nie odtwarzaj ekstremalnie wysokich częstotliwości przy maksymalnej głośności przez dłuższy czas: nawet jeśli ich nie słyszysz, energia może uszkodzić głośniki wysokotonowe w Twoim sprzęcie.',
    },
  ],
  ui: {
    badge: 'Generator Audio',
    title: 'Generator Tonów',
    description: 'Generuj czyste częstotliwości do testów audio.',
    freqLabel: 'Częstotliwość',
    preset60: '60Hz',
    preset440: '440Hz',
    preset1k: '1kHz',
    rangeMin: '20Hz (Sub-bas)',
    rangeMax: '20kHz (Ultradźwięki)',
    waveLabel: 'Przebieg fali',
    waveSine: 'Sinusoidalny',
    waveSquare: 'Prostokątny',
    waveSawtooth: 'Piłokształtny',
    waveTriangle: 'Trójkątny',
    volLabel: 'Głośność',
    btnPlay: 'ODTWÓRZ TON',
    btnStop: 'STOP',
  },
};
