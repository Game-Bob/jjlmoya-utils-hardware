import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MicrophoneSpectrumTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-mikrofonu-analizator-widma';
const title = 'Test mikrofonu i analizator widma';
const description = 'Sprawdź wejście mikrofonowe, poziom sygnału na żywo, przesterowanie (przester), szum otoczenia i pasmo przenoszenia lokalnie w przeglądarce.';

const faq = [
  {
    question: 'Czy ten test mikrofonu nagrywa lub wysyła mój głos na serwer?',
    answer: 'Nie. Strumień dźwięku z mikrofonu na żywo jest połączony wyłącznie z analizatorem w Twojej przeglądarce. Narzędzie nie tworzy nagrań audio, nie łączy analizatora z wyjściem dźwiękowym i nie przesyła próbek na żaden serwer.',
  },
  {
    question: 'Co oznacza dBFS na wskaźniku poziomu?',
    answer: 'dBFS oznacza decybele w odniesieniu do cyfrowej pełnej skali (Full Scale). Wartość 0 dBFS to maksymalny szczyt cyfrowy, dlatego normalne odczyty są ujemne. Nie jest to to samo co skalibrowany pomiar ciśnienia akustycznego w dB SPL.',
  },
  {
    question: 'Jak sprawdzić, czy mikrofon przesterowuje sygnał (clipping)?',
    answer: 'Mów z największą głośnością, jakiej zamierzasz używać. Jeśli szczyty często osiągają czerwony stan przesterowania bliski 0 dBFS, zmniejsz czułość mikrofonu, zwiększ odległość lub wyłącz agresywne przetwarzanie wejścia w systemie operacyjnym.',
  },
  {
    question: 'Co pokazuje pomiar szumu otoczenia (room tone)?',
    answer: 'Trzysekundowy pomiar uśrednia cyfrowy poziom RMS, gdy zachowujesz ciszę. Pomaga to porównać ustawienia w tej samej przeglądarce i pomieszczeniu, choć automatyczna regulacja wzmocnienia i redukcja szumów mogą zmieniać wynik.',
  },
  {
    question: 'Dlaczego dominująca częstotliwość zmienia się podczas mówienia?',
    answer: 'Mowa ludzka składa się ze zmiennej częstotliwości podstawowej, harmonicznych, spółgłosek i szumu. Analizator wskazuje najsilniejszy ton w zakresie od 60 Hz do 12 kHz, więc zmiana jest naturalnym i oczekiwanym zachowaniem.',
  },
  {
    question: 'Czy ten analizator widma może certyfikować jakość mikrofonu?',
    answer: 'Nie. Jest to praktyczny test w przeglądarce pozwalający sprawdzić wejście, poziom, przesterowanie, szum i widoczną aktywność częstotliwościową. Certyfikacja wymaga skalibrowanego sprzętu pomiarowego, kontrolowanych sygnałów i udokumentowanego środowiska.',
  },
];

const howTo = [
  {
    name: 'Zezwól na dostęp do mikrofonu',
    text: 'Kliknij Uruchom mikrofon i zaakceptuj uprawnienie w przeglądarce. Przetwarzanie rozpocznie się dopiero po tej wyraźnej akcji.',
  },
  {
    name: 'Mów z normalnej odległości roboczej',
    text: 'Mów swoim normalnym głosem lub poziomem instrumentu i obserwuj odczyty dBFS na żywo, trajektorię szczytową oraz ruch widma.',
  },
  {
    name: 'Sprawdź najgłośniejszy oczekiwany moment',
    text: 'Podnieś głos lub zagraj najgłośniejszy fragment. Staraj się unikać powtarzającego się czerwonego przesterowania, zachowując czysty sygnał.',
  },
  {
    name: 'Zmierz szum otoczenia',
    text: 'Zachowaj ciszę i kliknij Zmierz szum (3 s). Porównaj zapisaną wartość szumu tła po zmianie pomieszczenia, urządzenia, wzmocnienia lub ustawień.',
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

export const content: ToolLocaleContent<MicrophoneSpectrumTesterUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Jak przetestować mikrofon w przeglądarce',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ten test mikrofonu odpowiada na pierwsze pytania diagnostyczne bez konieczności instalowania aplikacji: czy wybrane wejście generuje sygnał, czy poziom jest użyteczny, czy głośne momenty ulegają przesterowaniu, jak wygląda szum otoczenia i które częstotliwości są aktywne? Kliknij Uruchom mikrofon, mów ze swojej normalnej pozycji i obserwuj wskaźniki na żywo. Analizator działa na bieżącej stronie i nie tworzy plików audio.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Prywatna analiza lokalna',
      badge: 'Brak nagrywania',
      html: '<p>Przeglądarka prosi o dostęp do mikrofonu, ponieważ surowy sygnał jest poufny. Narzędzie łączy strumień wyłącznie z lokalnym analizatorem. Nie wysyła próbek na serwer i zatrzymuje ścieżki audio po kliknięciu Zatrzymaj mikrofon.</p>',
    },
    {
      type: 'title',
      text: 'Odczytywanie poziomu mikrofonu w dBFS',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Główna wartość na żywo to szacunek RMS reprezentujący energię w bieżącym oknie czasowym. Wskaźnik szczytowy pokazuje największą próbkę bezwzględną w tym oknie. Oba używają dBFS, gdzie zero to cyfrowa pełna skala, a cichsze sygnały mają coraz bardziej ujemne wartości. Odpowiednia etykieta jest praktycznym przewodnikiem w tym teście, a nie uniwersalnym standardem nagrywania.',
    },
    {
      type: 'table',
      headers: ['Odczyt', 'Co oznacza odczyt', 'Co warto sprawdzić'],
      rows: [
        ['Cisza lub poniżej -60 dBFS', 'Wybrane wejście nie generuje użytecznego sygnału testowego', 'Sprawdź urządzenie, przycisk wyciszenia, uprawnienia oraz poziom wejściowy w systemie operacyjnym'],
        ['Cichy sygnał poniżej -35 dBFS', 'Sygnał może być trudny do użycia bez dodatkowego wzmocnienia', 'Zbliż się do mikrofonu lub zwiększ czułość wejścia, obserwując poziom szczytowy'],
        ['Prawidłowy i zdrowy poziom', 'Bieżący sygnał ma odpowiednią głośność i widoczny zapas dynamiczny', 'Powtórz test, mówiąc z najgłośniejszą oczekiwaną siłą głosu'],
        ['Wysoki powyżej -6 dBFS szczyt', 'Pozostało niewiele cyfrowego zapasu dynamiki', 'Zmniejsz wzmocnienie lub zwiększ odległość przed głośnym momentem'],
        ['Przesterowanie blisko 0 dBFS', 'Jedna lub więcej próbek osiągnęło cyfrowy sufit', 'Zmniejsz wzmocnienie i powtórz najgłośniejszą część testu'],
      ],
    },
    {
      type: 'title',
      text: 'Korzystanie z analizatora widma na żywo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zakrzywiony wykres widma mapuje pasma analizatora od 60 Hz do 12 kHz na łuku logarytmicznym, a świecąca wstęga pokazuje bieżącą falę dźwiękową. Użyj tego widoku, aby upewnić się, że niskie, średnie i wysokie częstotliwości docierają do przeglądarki. Zmieniająca się dominująca częstotliwość jest normalna dla mowy i muzyki. Wykres jest najbardziej przydatny do porównań przy tym samym mikrofonie, wzmocnieniu, pomieszczeniu i odległości.',
    },
    {
      type: 'tip',
      title: 'Porównuj jedną zmianę naraz',
      html: 'Zmierz szum otoczenia, zmień jedno ustawienie, a następnie zmierz go ponownie z tej samej pozycji. Systemowa redukcja szumów i automatyczna regulacja wzmocnienia mogą sprawić, że mikrofon wydaje się cichszy, zmieniając też jego brzmienie, dlatego warto odsłuchać sygnał również w docelowej aplikacji.',
    },
    {
      type: 'title',
      text: 'Dlaczego nie jest to skalibrowany miernik dźwięku',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Próbki z przeglądarki opisują sygnał cyfrowy po przejściu przez mikrofon, interfejs, sterownik i automatyczne przetwarzanie. Nie odzwierciedlają one akustycznego ciśnienia dźwięku przy kapsule mikrofonowej. Z tego powodu narzędzie podaje dBFS zamiast dB SPL i nie gwarantuje certyfikowanego pasma przenoszenia.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Używaj skalibrowanego sprzętu do pomiarów oficjalnych',
      badge: 'Test praktyczny',
      html: '<p>Używaj tego narzędzia do szybkiej weryfikacji przed rozmowami, transmisjami i nagraniami. Do certyfikacji specyfikacji produktów lub norm hałasu wymagany jest skalibrowany mikrofon pomiarowy i kontrolowane środowisko.</p>',
    },
  ],
  ui: {
    journeyPermission: '1. Zezwól na mikrofon',
    journeySpeak: '2. Mów naturalnie',
    journeyInspect: '3. Sprawdź poziom i widmo',
    startMicrophone: 'Uruchom mikrofon',
    stopMicrophone: 'Zatrzymaj mikrofon',
    deviceLabel: 'Urządzenie wejściowe',
    defaultDevice: 'Domyślny mikrofon',
    statusIdle: 'Oczekiwanie na uprawnienia',
    statusRequesting: 'Żądanie dostępu do mikrofonu',
    statusLive: 'Nasłuchiwanie lokalne',
    statusUnsupported: 'Dostęp do mikrofonu niedostępny w tej przeglądarce',
    statusDenied: 'Dostęp do mikrofonu został odrzucony',
    statusError: 'Nie udało się uruchomić mikrofonu',
    levelLabel: 'Poziom na żywo',
    peakLabel: 'Szczyt',
    frequencyLabel: 'Dominująca częstotliwość',
    noiseFloorLabel: 'Szum otoczenia',
    captureNoise: 'Zmierz szum (3 s)',
    capturingNoise: 'Zachowaj ciszę podczas pomiaru szumu',
    noiseCaptured: 'Szum otoczenia zmierzony',
    roomToneHint: 'Zachowaj pozycję i milcz przez trzy sekundy.',
    unmeasured: 'Niezmierzono',
    noSignalLevel: 'Brak sygnału',
    noSignalPeak: 'Brak sygnału',
    noSignalFrequency: 'Brak sygnału',
    silentSignal: 'Brak przydatnego sygnału',
    quietSignal: 'Słaby sygnał',
    healthySignal: 'Odpowiedni zapas',
    hotSignal: 'Wysoki poziom',
    clippingSignal: 'Wykryto przesterowanie',
    dbfsUnit: 'dBFS',
    hzUnit: 'Hz',
    spectrumAriaLabel: 'Widmo częstotliwości i fala mikrofonu na żywo',
    limitationTitle: 'Przeglądarka to nie miernik ciśnienia akustycznego',
    limitationText: 'Odczyty wskazują cyfrowe dBFS. Dane dźwiękowe nie są wysyłane do sieci.',
  },
};
