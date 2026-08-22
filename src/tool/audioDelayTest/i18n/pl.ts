import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-opoznienia-audio';
const title = 'Test opóźnienia audio';
const description = 'Przetestuj odczuwalne opóźnienie dźwięku w głośnikach, słuchawkach, urządzeniach Bluetooth i synchronizacji wideo za pomocą testu impulsowego w przeglądarce.';

const faq = [
  {
    question: 'Co dokładnie mierzy ten test opóźnienia dźwięku?',
    answer: 'Opcjonalny tryb mikrofonowy szacuje czas między impuls wygenerowanym przez przeglądarkę a jego zarejestrowaniem przez mikrofon.',
  },
  {
    question: 'Czy mogę przetestować opóźnienie Bluetooth bez mikrofonu?',
    answer: 'Tak. Uruchom sekwencję impulsów, wybierz Bluetooth i przesuwaj suwak wyrównania, aż błysk i dźwięk będą słyszalne jednocześnie.',
  },
  {
    question: 'Dlaczego tryb mikrofonowy wymaga uprawnień?',
    answer: 'Przeglądarka potrzebuje dostępu do mikrofonu, aby wykryć dźwięk testowy po jego przejściu przez głośniki.',
  },
  {
    question: 'Dlaczego wynik pomiaru mikrofonem może się różnić?',
    answer: 'Odbicia w pomieszczeniu, przetwarzanie mikrofonu i buforowanie systemu operacyjnego mogą wpływać na wynik.',
  },
  {
    question: 'Który tryb testowy wybrać?',
    answer: 'Wybierz Głośniki dla odsłuchu w pokoju, Słuchawki przewodowe dla połączenia bezpośredniego i Bluetooth dla urządzeń bezprzewodowych.',
  },
  {
    question: 'Czy dźwięk z mikrofonu jest przesyłany na serwer?',
    answer: 'Nie. Strumień z mikrofonu jest analizowany wyłącznie lokalnie w pamięci przeglądarki i żaden dźwięk nie jest przesyłany.',
  },
];

const howTo = [
  {
    name: 'Wybierz ścieżkę odtwarzania',
    text: 'Wybierz głośniki, słuchawki przewodowe, Bluetooth lub synchronizację wideo.',
  },
  {
    name: 'Rozpocznij od impulsu ręcznego',
    text: 'Naciśnij Rozpocznij test, słuchaj kliknięcia i dostosuj suwak wyrównania.',
  },
  {
    name: 'Włącz pomiar mikrofonem w razie potrzeby',
    text: 'Kliknij Włącz mikrofon, przyznaj uprawnienia i umieść mikrofon w miejscu odsłuchu.',
  },
  {
    name: 'Odczytaj wynik jako wartość szacunkową',
    text: 'Użyj mediany opóźnienia i wskaźnika pewności do porównania konfiguracji.',
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
  inLanguage: 'pl',
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
    { type: 'title', text: 'Test opóźnienia audio dla Bluetooth i synchronizacji wideo', level: 2 },
    {
      type: 'paragraph',
      html: 'Ten test opóźnienia dźwięku w przeglądarce pomaga sprawdzić przesunięcie czasowe między sygnałem wizualnym a dźwiękiem.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Start bez dostępu do mikrofonu',
      badge: 'Lokalnie i prywatnie',
      html: '<p>Test ręczny działa bez mikrofonu. Obserwuj znacznik i dostosuj suwak wyrównania.</p>',
    },
    {
      type: 'title',
      text: 'Jak przetestować opóźnienie dźwięku Bluetooth',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Wybierz Bluetooth i ustaw odpowiedni poziom głośności.',
        'Uruchom sekwencję impulsów w swojej przeglądarce.',
        'Porównaj błysk wizualny z dźwiękiem kliknięcia.',
        'Przesuwaj suwak wyrównania, aż sygnały się pokryją.',
        'Powtórz test po zmianie kodeka lub urządzenia.',
      ],
    },
    {
      type: 'table',
      headers: ['Tryb', 'Najlepsze do', 'Główne ograniczenie'],
      rows: [
        ['Głośniki', 'Odsłuch w pokoju i TV', 'Odległość i odbicia w pomieszczeniu wpływają na pomiar.'],
        ['Słuchawki przewodowe', 'Bezpośrednie wyjście audio', 'Mikrofon może słabo rejestrować słuchawki zamknięte.'],
        ['Bluetooth', 'Urządzenia bezprzewodowe', 'Buforowanie kodeka różni się w zależności od urządzenia.'],
        ['Synchronizacja wideo', 'Wyrównanie ekranu i odtwarzacza', 'Odtwarzacz wideo może dodawać własne opóźnienie.'],
      ],
    },
    {
      type: 'title',
      text: 'Opcjonalny pomiar mikrofonem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Po włączeniu mikrofonu narzędzie mierzy czas od zaplanowanego impulsu do wykrytego szczytu akustycznego i oblicza medianę próbek.',
    },
    {
      type: 'tip',
      title: 'Umieść mikrofon w miejscu odsłuchu',
      html: 'W przypadku głośników umieść mikrofon w miejscu, w którym zwykle siedzisz.',
    },
    {
      type: 'title',
      text: 'Dlaczego wyniki opóźnienia audio się różnią',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Opóźnienie audio wynika z całego toru: zegara AudioContext, buforów systemu i kodeka Bluetooth.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Interpretacja wyników',
      badge: 'Wartość szacunkowa',
      html: '<p>Użyj wyniku do porównywania konfiguracji. Pomiar nie zastępuje profesjonalnego sprzętu laboratoryjnego.</p>',
    },
  ],
  ui: {
    badge: 'Obserwatorium opóźnień',
    modeLabel: 'Ścieżka odtwarzania',
    modeSpeakers: 'Głośniki',
    modeWired: 'Przewodowe',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Synchronizacja wideo',
    startTest: 'Rozpocznij test',
    stopTest: 'Zatrzymaj test',
    enableMic: 'Włącz mikrofon',
    micEnabled: 'Mikrofon gotowy',
    calibrationTitle: 'Korekta wyrównania',
    calibrationHint: 'Przesuwaj suwak, aż błysk i dźwięk się pokryją',
    calibrationEarly: 'Audio wyprzedza',
    calibrationLate: 'Wizualne wyprzedza',
    calibrationCenter: 'Wyrównane',
    visualLane: 'Wizualne',
    audioLane: 'Audio',
    statusReady: 'Gotowy',
    statusRunning: 'Sekwencja impulsów w toku',
    statusWaiting: 'Oczekiwanie na impuls',
    resultTitle: 'Aktualny pomiar',
    latencyLabel: 'Zmierzone opóźnienie',
    alignmentLabel: 'Korekta wyrównania',
    confidenceLabel: 'Pewność pomiaru',
    samplesLabel: 'Próbki',
    notMeasured: 'Niezmierzone',
    manualConfidence: 'Tylko ręcznie',
    lowConfidence: 'Niska pewność',
    mediumConfidence: 'Średnia pewność',
    highConfidence: 'Wysoka pewność',
    noMic: 'Wejście mikrofonowe jest niedostępne w tej przeglądarce',
    permissionDenied: 'Nie udzielono dostępu do mikrofonu',
    limitationTitle: 'Traktuj wynik jako szacunek',
    limitationText: 'Odbicia w pomieszczeniu i buforowanie systemu mogą zmieniać wynik. Żaden dźwięk nie jest przesyłany.',
    copyReport: 'Kopiuj raport',
    copied: 'Skopiowano',
    reset: 'Resetuj',
    safety: 'Zacznij od niskiej głośności. Przerwij test w przypadku zniekształceń.',
    pulse: 'SYNCHRO',
  },
};
