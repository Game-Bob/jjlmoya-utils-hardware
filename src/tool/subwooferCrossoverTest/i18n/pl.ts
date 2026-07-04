import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SubwooferCrossoverTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-crossover-subwoofera-online';
const title = 'Test Crossovera Subwoofera';
const description =
  'Uruchom przemiatanie sinusoidalne od 200 Hz do 10 Hz w przeglądarce, aby znaleźć miejsce, w którym subwoofer zanika, wypada lub przekazuje dźwięk do głównych głośników.';

const faqData = [
  {
    question: 'Co mierzy test crossovera subwoofera?',
    answer:
      'Pomaga usłyszeć punkt, w którym bas przestaje brzmieć ciągle między głównymi głośnikami a subwooferem. Luka, nagła zmiana poziomu lub brakujący zakres może wskazywać na nieprawidłową częstotliwość crossovera, problem z fazą, wygaszanie przez pomieszczenie lub limit subwoofera.',
  },
  {
    question: 'Dlaczego ten test przemiata od 200 Hz do 10 Hz?',
    answer:
      'Większość crossoverów kina domowego mieści się między 60 Hz a 120 Hz, podczas gdy wiele kompaktowych głośników zaczyna tracić wyjście powyżej lub poniżej tego zakresu. Przemiatanie od 200 Hz sprawia, że przejście między głośnikiem a subwooferem jest łatwo słyszalne, zanim ton osiągnie głęboki subbas.',
  },
  {
    question: 'Czy ten internetowy test basu subwoofera może uszkodzić głośniki?',
    answer:
      'Tak, bardzo niskie częstotliwości przy wysokim poziomie głośności mogą przeciążać małe głośniki lub nadmiernie obciążać subwoofer. Zacznij cicho, unikaj wzmocnionych modów basowych i natychmiast zatrzymaj, jeśli usłyszysz grzechotanie, stukanie lub odgłosy przeciążenia mechanicznego.',
  },
  {
    question: 'Czy zaznaczona częstotliwość zaniku to dokładne ustawienie crossovera, którego powinienem użyć?',
    answer:
      'Nie. Traktuj ją jako wskazówkę odsłuchową, a nie pomiar laboratoryjny. Najlepsze ustawienie crossovera zależy również od specyfikacji głośników, umiejscowienia w pomieszczeniu, fazy, korekcji odległości i celu kalibracji.',
  },
];

const howToData = [
  {
    name: 'Ustaw bezpieczny poziom odsłuchu',
    text: 'Najpierw zmniejsz głośność systemu. Przemiatanie używa generowanej fali sinusoidalnej, więc bas może stać się intensywny, nawet gdy głośność przeglądarki wydaje się umiarkowana.',
  },
  {
    name: 'Rozpocznij przemiatanie od 200 Hz do 10 Hz',
    text: 'Naciśnij Rozpocznij przemiatanie i słuchaj ze swojego zwykłego miejsca. Ton przesuwa się równomiernie przez zakres basu, w którym nakładają się subwoofery, główne głośniki i akustyka pomieszczenia.',
  },
  {
    name: 'Nasłuchuj zaniku lub przejścia',
    text: 'Zwróć uwagę na moment, w którym bas staje się słabszy, znika, zmienia lokalizację lub brzmi nierówno między subwooferem a głównymi głośnikami.',
  },
  {
    name: 'Zaznacz częstotliwość',
    text: 'Naciśnij Zaznacz zanik w pierwszym wyraźnym punkcie problemowym. Użyj tej częstotliwości jako wskazówki do dostosowania crossovera, fazy, umiejscowienia lub korekcji pomieszczenia.',
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
  inLanguage: 'pl',
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
    { type: 'title', text: 'Znajdź Lukę Basową Między Głośnikami A Subwooferem', level: 2 },
    {
      type: 'paragraph',
      html: 'Subwoofer nie powinien brzmieć jak osobna skrzynka w rogu. Bas powinien pozostać równomierny, gdy dźwięki przechodzą z głównych głośników do suba. Ten test przemiata od <strong>200 Hz do 10 Hz</strong>, abyś mógł usłyszeć dokładną strefę, w której przejście staje się słabe, dudniące, lokalizowalne lub ciche.',
    },
    {
      type: 'table',
      headers: ['Co słyszysz', 'Co to zwykle oznacza', 'Co wypróbować najpierw'],
      rows: [
        ['Bas znika w okolicach 70-100 Hz', 'Subwoofer i głośniki mogą się wzajemnie wygaszać w pobliżu crossovera.', 'Odwróć fazę, dostosuj odległość/opóźnienie, a następnie powtórz przemiatanie.'],
        ['Bas dudni w jednym wąskim paśmie', 'Mod pomieszczenia lub zbyt duże nakładanie się głośników i subwoofera.', 'Lekko obniż crossover lub przesuń subwoofer/pozycję odsłuchową.'],
        ['Bas wydaje się dochodzić z lokalizacji subwoofera', 'Crossover może być zbyt wysoki lub poziom subwoofera zbyt głośny.', 'Spróbuj 80 Hz lub niżej i zmniejsz wzmocnienie subwoofera.'],
        ['Głęboki bas zanika poniżej 30-40 Hz', 'Normalny limit rozszerzenia dla wielu subów, zwłaszcza kompaktowych modeli.', 'Sprawdź specyfikację subwoofera, zanim zaczniesz szukać problemu, który może być fizyczny.'],
      ],
    },
    { type: 'title', text: 'Co Mówi Ci Częstotliwość Zaniku', level: 3 },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Użyj zaznaczonej częstotliwości jako wskazówki do strojenia',
      badge: 'Wskazówki odsłuchowe',
      html: '<p>Jeśli zaznaczony punkt znajduje się blisko crossovera Twojego AVR, problemem jest prawdopodobnie integracja: faza, odległość, polaryzacja, poziom lub nachylenie filtrów. Jeśli zaznaczony punkt jest znacznie niższy, możesz słyszeć, jak subwoofer osiąga granicę wydajności. Jeśli problem bardzo się zmienia przy poruszaniu głową, pomieszczenie dominuje nad wynikiem.</p>',
    },
    {
      type: 'title',
      text: 'Typowe Zakresy Crossovera',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Typ głośnika', 'Typowy punkt początkowy crossovera', 'Dlaczego'],
      rows: [
        ['Małe satelity', '100-150 Hz', 'Małe obudowy zazwyczaj nie mogą odtwarzać czystego górnego basu na poziomach kinowych.'],
        ['Głośniki podstawkowe', '70-100 Hz', 'Często wystarczająco basu do czystego przejścia bez lokalizowania suba.'],
        ['Głośniki podłogowe', '50-80 Hz', 'Większe woofery radzą sobie z większą ilością średniego basu, ale pomieszczenie może nadal preferować zarządzanie basem przez subwoofer.'],
        ['Konfiguracja w stylu THX', '80 Hz', 'Praktyczne ustawienie domyślne, które działa dobrze w wielu systemach i kieruje głęboki bas do suba.'],
      ],
    },
    { type: 'title', text: 'Problem Z Crossoverem Czy Problem Z Pomieszczeniem?', level: 3 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Problem z crossoverem lub fazą',
          description: 'Słaby punkt pojawia się w pobliżu częstotliwości crossovera i poprawia się po zmianie fazy, polaryzacji, odległości lub ustawienia crossovera.',
          points: ['Zazwyczaj powtarzalny z tego samego miejsca.', 'Często skoncentrowany w okolicach 60-120 Hz.'],
        },
        {
          title: 'Wygaszanie przez pomieszczenie',
          description: 'Słaby punkt zmienia się drastycznie, gdy poruszasz głową, zmieniasz miejsce lub przesuwasz subwoofer na niewielką odległość.',
          points: ['Bardzo zależny od pozycji.', 'Często rozwiązywany bardziej przez umiejscowienie niż przez ustawienia.'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Najlepszy sposób przeprowadzenia testu',
      html: 'Usiądź tam, gdzie faktycznie oglądasz filmy lub słuchasz muzyki. Nie stój obok subwoofera. Crossover, który dobrze brzmi obok szafki, może nadal pozostawiać lukę na kanapie.',
    },
    {
      type: 'summary',
      title: 'Co zmienić po przemiataniu',
      items: [
        'Jeśli luka znajduje się blisko obecnego crossovera, wypróbuj zmiany o 10 Hz i powtórz przemiatanie.',
        'Wypróbuj przełącznik fazy subwoofera lub ustawienie opóźnienia, jeśli słabe pasmo znajduje się blisko crossovera.',
        'Jeśli bas staje się silniejszy w jednym miejscu i znika w innym, przesuń subwoofer przed zmianą wszystkich ustawień AVR.',
        'Po zmianach umiejscowienia lub crossovera uruchom ponownie korekcję pomieszczenia, aby amplituner zmierzył nową konfigurację.',
        'Użyj zaznaczonej częstotliwości do prowadzenia strojenia, a następnie potwierdź muzyką, filmami i znajomymi liniami basowymi.',
      ],
    },
  ],
  ui: {
    sweepLabel: 'Przemiatanie niskoczęstotliwościowe subwoofera',
    currentFrequency: 'Aktualna częstotliwość',
    targetFrequency: 'Cel',
    elapsed: 'Upłynęło',
    statusReady: 'Gotowy do niskiego przemiatania',
    statusRunning: 'Przemiatanie w dół',
    statusStopped: 'Przemiatanie zatrzymane',
    start: 'Rozpocznij przemiatanie',
    stop: 'Zatrzymaj przemiatanie',
    markDropout: 'Zaznacz zanik',
    reset: 'Resetuj',
    volume: 'Poziom wyjściowy',
    duration: 'Czas trwania przemiatania',
    safeStart: 'Zacznij od niskiego poziomu głośności, a następnie zaznacz pierwszą częstotliwość, przy której bas staje się trudny do usłyszenia.',
    roomNote: 'Pozycja w pomieszczeniu i faza mogą drastycznie zmienić wynik.',
    dropoutLabel: 'Zaznaczony punkt',
    dropoutEmpty: 'Jeszcze nie zaznaczono',
    crossoverEstimate: 'Szacowany punkt zaniku',
  },
};
