import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-opoznienia-dzwieku';
const title = 'Test Opóźnienia Dźwięku';
const description = 'Przetestuj odczuwalne opóźnienie dźwięku w głośnikach, słuchawkach, urządzeniach Bluetooth i odtwarzaniu wideo za pomocą lokalnego testu impulsowego w przeglądarce.';

const faq = [
  {
    question: 'Co dokładnie mierzy ten test opóźnienia dźwięku?',
    answer: 'Opcjonalny tryb mikrofonowy szacuje czas między kliknięciem zaplanowanym przez przeglądarkę a jego wykryciem przez mikrofon. Tryb ręczny pomaga wyrównać impuls wizualny i dźwiękowy na ucho. Żaden z trybów nie jest laboratoryjnym pomiarem całego toru sprzętowego.',
  },
  {
    question: 'Czy mogę przetestować opóźnienie Bluetooth bez mikrofonu?',
    answer: 'Tak. Uruchom sekwencję impulsów, wybierz Bluetooth i przesuwaj suwak wyrównania, aż błysk i kliknięcie zaczną występować jednocześnie. Wynik zostanie zapisany jako korekta wyrównania.',
  },
  {
    question: 'Dlaczego tryb mikrofonowy wymaga uprawnień?',
    answer: 'Przeglądarka potrzebuje dostępu do mikrofonu, aby usłyszeć kliknięcie testowe po jego przejściu przez głośniki lub przestrzeń akustyczną. Dźwięk jest przetwarzany lokalnie w przeglądarce i nie jest wysyłany na serwer.',
  },
  {
    question: 'Dlaczego wynik pomiaru mikrofonem może się różnić?',
    answer: 'Odbicia w pomieszczeniu, przetwarzanie mikrofonowe, automatyczna regulacja wzmocnienia i buforowanie systemu operacyjnego wpływają na wynik. Traktuj tę liczbę jako szacunek dla bieżącej konfiguracji.',
  },
  {
    question: 'Jaki tryb testowy powinienem wybrać?',
    answer: 'Wybierz Głośniki do odsłuchu w pomieszczeniu, Słuchawki przewodowe dla bezpośredniego wyjścia, Bluetooth dla urządzeń bezprzewodowych oraz Synchronizację wideo przy sprawdzaniu ekranu i odtwarzacza.',
  },
  {
    question: 'Czy test wysyła dźwięk z mojego mikrofonu na serwer?',
    answer: 'Nie. Strumień z mikrofonu jest odczytywany lokalnie przez analizator przeglądarki, a test nie przesyła próbek nagrań audio.',
  },
];

const howTo = [
  {
    name: 'Wybierz ścieżkę odtwarzania',
    text: 'Wybierz głośniki, słuchawki przewodowe, Bluetooth lub synchronizację wideo, aby zdefiniować testowaną konfigurację.',
  },
  {
    name: 'Rozpocznij od impulsu ręcznego',
    text: 'Kliknij Rozpocznij test i słuchaj krótkiego kliknięcia, obserwując seledynowy impuls wizualny. Użyj suwaka, aż oba sygnały się nałożą.',
  },
  {
    name: 'Dodaj pomiar mikrofonem w razie potrzeby',
    text: 'Kliknij Włącz mikrofon, przyznaj uprawnienia, umieść mikrofon w miejscu odsłuchu i ponownie uruchom sekwencję.',
  },
  {
    name: 'Odczytaj wynik jako wartość szacunkową',
    text: 'Używaj mediany opóźnienia i poziomu ufności jako wskazówki dla swojej konfiguracji po zmianie sprzętu lub odległości.',
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
    { type: 'title', text: 'Test Opóźnienia Dźwięku Dla Bluetooth i Synchronizacji Wideo', level: 2 },
    {
      type: 'paragraph',
      html: 'Ten test opóźnienia dźwięku w przeglądarce pomaga sprawdzić różnicę czasową między sygnałem wizualnym a dźwiękiem na Twoim urządzeniu. Jest przydatny dla słuchawek Bluetooth, głośników bezprzewodowych, słuchawek przewodowych i kontroli synchronizacji wideo. Narzędzie generuje krótkie kliknięcia lokalnie w przeglądarce bez konieczności pobierania plików testowych.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Uruchomienie bez dostępu do mikrofonu',
      badge: 'Lokalnie i prywatnie',
      html: '<p>Ręczny test impulsowy działa bez mikrofonu. Obserwuj znacznik wizualny i dostosuj suwak, aż sygnał dźwiękowy i błysk będą odczuwalne jednocześnie. Zapewnia to przydatną korektę bez udawania pomiaru bezwzględnego opóźnienia sprzętowego.</p>',
    },
    {
      type: 'title',
      text: 'Jak Przetestować Opóźnienie Dźwięku Bluetooth',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Wybierz Bluetooth i ustaw komfortową głośność przed rozpoczęciem testu.',
        'Uruchom sekwencję impulsów z tej samej przeglądarki i urządzenia, z których korzystasz na co dzień.',
        'Porównuj impuls wizualny bezpośrednio z kliknięciem, zamiast oceniać długi utwór muzyczny.',
        'Przesuwaj suwak wyrównania, aż oba sygnały się spotkają, a następnie zanotuj wartość korekty.',
        'Powtórz test po zmianie kodeka, systemu operacyjnego, przeglądarki lub odległości.',
      ],
    },
    {
      type: 'table',
      headers: ['Tryb', 'Zalecany do', 'Główne ograniczenie'],
      rows: [
        ['Głośniki', 'Odsłuch w pomieszczeniu i głośniki TV', 'Odległość i odbicia w pomieszczeniu wpływają na ścieżkę akustyczną.'],
        ['Słuchawki przewodowe', 'Direct wyjście słuchawkowe', 'Mikrofon może mieć trudności z uchwyceniem dźwięku ze słuchawek zamkniętych.'],
        ['Bluetooth', 'Bezprzewodowe słuchawki i głośniki', 'Buforowanie kodeka różni się w zależności od urządzenia i aplikacji.'],
        ['Synchronizacja wideo', 'Wyrównanie ekranu i odtwarzacza', 'Odtwarzacz wideo może dodawać własne opóźnienie renderowania klatek.'],
      ],
    },
    {
      type: 'title',
      text: 'Opcjonalny Pomiar Mikrofonem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gdy dostęp do mikrofonu jest włączony, narzędzie analizuje lokalny mikrofon pod kątem każdego kliknięcia i rejestruje czas od zaplanowanego zdarzenia audio do wykrytego szczytu akustycznego. Wynik wykorzystuje medianę próbek, aby zapobiec zakłóceniu szacunku przez pojedyncze odbicie.',
    },
    {
      type: 'tip',
      title: 'Umieść mikrofon w miejscu odsłuchu',
      html: 'W przypadku głośników umieść mikrofon w miejscu, w którym siedzisz, i zachowaj ciszę w pomieszczeniu. W przypadku testów synchronizacji wideo użyj zwykłej konfiguracji.',
    },
    {
      type: 'title',
      text: 'Dlaczego Wyniki Opóźnienia Dźwięku Mogą Się Różnić',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Opóźnienie dźwięku powstaje w całym torze: zegar AudioContext przeglądarki, bufory systemu operacyjnego, kodowanie sprzętowe i przetworniki głośnikowe. Mikrofon dodaje własną ścieżkę rejestracji. Dlatego test opisuje bieżącą kombinację Twojego sprzętu i systemu.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Traktuj wynik jako wartość szacunkową',
      badge: 'Tylko szacunek',
      html: '<p>Używaj wyniku do porównywania zestawów lub rozwiązywania wyraźnych problemów z synchronizacją. Nie zastępuje on specyfikacji producenta ani profesjonalnego systemu pomiarowego.</p>',
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
    calibrationHint: 'Przesuwaj suwak, aż błysk i kliknięcie zaczną występować jednocześnie',
    calibrationEarly: 'Dźwięk wyprzedza',
    calibrationLate: 'Wizualizacja wyprzedza',
    calibrationCenter: 'Wyrównano',
    visualLane: 'Wizualizator',
    audioLane: 'Audio',
    statusReady: 'Gotowy',
    statusRunning: 'Sekwencja aktywna',
    statusWaiting: 'Oczekiwanie na impuls',
    resultTitle: 'Bieżący pomiar',
    latencyLabel: 'Zmierzone opóźnienie',
    alignmentLabel: 'Korekta wyrównania',
    confidenceLabel: 'Poziom ufności',
    samplesLabel: 'Próbki',
    notMeasured: 'Niezmierzone',
    manualConfidence: 'Tylko ręcznie',
    lowConfidence: 'Niska ufność',
    mediumConfidence: 'Średnia ufność',
    highConfidence: 'Wysoka ufność',
    noMic: 'Wejście mikrofonowe jest niedostępne w tej przeglądarce',
    permissionDenied: 'Nie przyznano uprawnień do mikrofonu',
    limitationTitle: 'Traktuj wynik jako wartość szacunkową',
    limitationText: 'Odbicia, przetwarzanie mikrofonowe i buforowanie zmieniają zmierzone opóźnienie. Żadne dane nie są wysyłane.',
    copyReport: 'Kopiuj raport',
    copied: 'Skopiowano',
    reset: 'Resetuj',
    safety: 'Zacznij od niskiej głośności. Przerwij, jeśli dźwięk ulega zniekształceniu.',
    pulse: 'SYNCHRO',
  },
};
