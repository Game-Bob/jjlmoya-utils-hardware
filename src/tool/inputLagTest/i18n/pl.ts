import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-opoznienia-input-lag';

const title = 'Test Input Lag i Opuznienia Systemu';
const description = 'Narzędzie online do pomiaru input lagu i opóźnienia systemu przy użyciu precyzyjnych timerów klatek.';

const faqData = [
  {
    question: 'Czym jest input lag?',
    answer: 'To czas opóźnienia między fizyczną reakcją użytkownika a wyświetleniem zmiany na ekranie.',
  },
  { question: 'Jakie opóźnienie jest dobre w grach?', answer: 'Poniżej 10 ms jest bardzo szybko. Od 10 do 20 ms jest szybko, 20 do 35 ms jest umiarkowane, a wyższe wartości są odczuwalne.' },
  { question: 'Jak zmniejszyć opóźnienie wejścia?', answer: 'Sprawdź odświeżanie ekranu, VSync, VRR i odpytywanie USB. Zmieniaj jedno ustawienie i mierz ponownie.' },
  { question: 'Czy odświeżanie ekranu wpływa na input lag?', answer: 'Tak. Przy 60 Hz klatka trwa 16.67 ms, a przy 240 Hz 4.17 ms. Renderowanie i panel dodają własne opóźnienie.' },
  { question: 'Dlaczego warto obserwować jitter?', answer: 'Pokazuje zmienność pomiarów. Nieco wyższy, ale stabilny wynik może być lepszy niż niska średnia z dużymi skokami.' },
];

const howToData = [
  {
    name: 'Wybierz tryb',
    text: 'Wybierz Natychmiastowa Reakcja, Opóźnienie Klawiatury lub Reakcja Wizualna.',
  },
  { name: 'Wykonaj wejścia', text: 'Kliknij pole testowe lub naciskaj klawisze, aby zarejestrować zdarzenia.' },
  { name: 'Sprawdź statystyki', text: 'Po kilku próbach odczytaj średnią, minimum, maksimum i jitter.' },
  { name: 'Powtórz porównanie', text: 'Po każdej zmianie wykonaj pomiar ponownie w tych samych warunkach.' },
  { name: 'Uwzględnij ograniczenia', text: 'Traktuj wynik jako porównanie konfiguracji, a nie absolutny pomiar optyczny.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
};

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Opóźnienie Systemu',
  modeInstant: 'Natychmiastowa Reakcja',
  modeKey: 'Opóźnienie Klawiatury',
  modeVisual: 'Reakcja Wizualna',
  targetClickPrompt: 'Kliknij tutaj, aby zmierzyć opóźnienie wejścia',
  targetKeyPrompt: 'Naciśnij dowolny klawisz, aby zmierzyć opóźnienie klawiatury',
  targetWaitPrompt: 'Czekaj na zielone tło...',
  targetNowPrompt: 'KLIKNIJ TERAZ!',
  labelAvgLatency: 'Średnie Opóźnienie',
  labelMinLatency: 'Minimalne Opóźnienie',
  labelMaxLatency: 'Maksymalne Opóźnienie',
  labelJitter: 'Jitter (Odchylenie)',
  labelFps: 'Aktualne FPS',
  labelFrameTime: 'Czas Klatki',
  labelSamples: 'Próbki',
  labelGrade: 'Ocena',
  gradeUltraFast: 'Bardzo Szybko (<10ms)',
  gradeFast: 'Szybko (10-20ms)',
  gradeModerate: 'Umiarkowanie (20-35ms)',
  gradeHigh: 'Wysokie (>35ms)',
  btnReset: 'Zresetuj',
  btnCopyReport: 'Kopiuj Raport',
  reportCopied: 'Raport Skopiowany!',
  historyTitle: 'Ostatnie Pomiary',
  pipelineTitle: 'Analiza Opóźnienia Sprzętowego',
  distributionTitle: 'Rozkład Częstotliwości',
  sampleCol: 'Próbka',
  typeCol: 'Typ Wejścia',
  latencyCol: 'Zmierzone Opóźnienie',
};

export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: 'Pomiar Input Lag i Opóźnienia Systemu',
    },
    {
      type: 'paragraph',
      html: 'Zmierz dokładnie czas reakcji ekranu i klawiatury w czasie rzeczywistym.',
    },
    { type: 'stats', items: [
      { value: '< 10 ms', label: 'Cel dla esportu', trend: 'Wzorzec rywalizacji' },
      { value: '1000 Hz', label: 'Typowe odpytywanie USB', trend: 'Odstęp wejścia 1 ms' },
      { value: '240 Hz', label: 'Monitor z wysokim odświeżaniem', trend: 'Klatka co 4.16 ms' },
      { value: '16.6 ms', label: 'Odstęp przy 60 Hz', trend: 'Baza na klatkę' },
    ], columns: 4 },
    { type: 'card', title: 'Jak przeglądarka mierzy opóźnienie', html: 'Test porównuje zdarzenia pointerdown i keydown z aktualizacjami requestAnimationFrame. Szacuje lokalny czas między wykryciem wejścia a ponownym narysowaniem strony.' },
    { type: 'title', text: 'Jak sygnał opóźnienia przechodzi przez system' },
    { type: 'paragraph', html: 'Całkowite opóźnienie narasta od przełącznika urządzenia do widocznego piksela. Rozdzielenie etapów pomaga ustalić, czy źródłem jest urządzenie, system, renderowanie czy ekran.' },
    { type: 'table', headers: ['Element', 'Typowy zakres', 'Główne wąskie gardło', 'Możliwa poprawa'], rows: [
      ['Przełącznik', '0.2 do 5.0 ms', 'Drgania mechaniczne', 'Skrócić debounce'],
      ['Odpytywanie USB', '0.125 do 8.0 ms', 'Niska częstotliwość', 'Zwiększyć częstotliwość, jeśli można'],
      ['Kolejka systemu', '0.5 do 3.0 ms', 'Zadania w tle', 'Zamknąć zbędne procesy'],
      ['Silnik grafiki', '4.0 do 20.0 ms', 'Klatki ograniczone przez CPU', 'Zmniejszyć obciążenie renderowania'],
      ['Kolejka GPU', '8.0 do 33.0 ms', 'VSync i wiele buforów', 'Porównać VSync z VRR'],
      ['Przetwarzanie ekranu', '1.0 do 15.0 ms', 'Skalowanie i filtry', 'Włączyć tryb gry'],
    ] },
    { type: 'tip', title: 'Jak skrócić kolejkę renderowania GPU', html: 'Przeciążona karta może przygotowywać kilka klatek z wyprzedzeniem. Limit nieco poniżej maksimum oraz próba z Reflex lub Anti Lag mogą zmniejszyć oczekiwanie.' },
    { type: 'title', text: 'Porównywanie urządzeń wejściowych' },
    { type: 'paragraph', html: 'Myszy, klawiatury i ekrany dotykowe mają różne opóźnienia przez sposób połączenia, elektronikę i częstotliwość skanowania. Do porównania użyj tego samego ekranu i ustawień.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Myszy gamingowe', description: 'Przewodowe lub bezprzewodowe połączenie o wysokiej częstotliwości.', highlight: '0.5 do 2 ms', points: ['Odpytywanie 1000 Hz lub wyższe', 'Przełączniki optyczne', 'Szybki czujnik'] },
      { title: 'Klawiatury mechaniczne', description: 'Macierz klawiszy z regulacją debounce.', highlight: '1 do 10 ms', points: ['Przełączniki magnetyczne', 'Konfigurowalne skanowanie macierzy', 'Regulowana odległość aktywacji'] },
      { title: 'Ekrany dotykowe', description: 'Pojemnościowy digitizer nad panelem.', highlight: '15 do 45 ms', points: ['Częstotliwość próbkowania dotyku', 'Przetwarzanie kontrolera ekranu', 'Filtry przypadkowych dotknięć'] },
    ] },
    { type: 'title', text: 'Opóźnienie wynikające z częstotliwości odświeżania' },
    { type: 'paragraph', html: 'Częstotliwość odświeżania wyznacza minimalny odstęp między obrazami. Ekran 60 Hz pokazuje wejście później niż 240 Hz, ale znaczenie mają też renderowanie i synchronizacja.' },
    { type: 'list', items: ['60 Hz to 16.67 ms na klatkę', '120 Hz to 8.33 ms na klatkę', '144 Hz to 6.94 ms na klatkę', '240 Hz to 4.17 ms na klatkę', '360 Hz to 2.78 ms na klatkę', '540 Hz to 1.85 ms na klatkę'] },
    { type: 'glossary', items: [
      { term: 'Input lag', definition: 'Czas od fizycznego działania do widocznego wyniku na ekranie.' },
      { term: 'Jitter', definition: 'Zmienność pomiarów pokazująca stabilność czasu.' },
      { term: 'VSync', definition: 'Synchronizacja pionowa ograniczająca tearing, ale czasem dodająca oczekiwanie.' },
      { term: 'VRR', definition: 'Zmienna częstotliwość dopasowująca ekran do wyjścia GPU.' },
      { term: 'Czas reakcji piksela', definition: 'Czas zmiany piksela z jednego odcienia na inny.' },
    ] },
    { type: 'title', text: 'Zalety i ograniczenia pomiaru w przeglądarce' },
    { type: 'paragraph', html: 'Test pozwala porównywać ustawienia bez oscyloskopu i szybkiej kamery. Nie pokazuje bezpośrednio wszystkich opóźnień sterownika, gry ani optycznego działania panelu.' },
    { type: 'proscons', title: 'Ocena pomiaru webowego', items: [
      { pro: 'Nie wymaga specjalnego sprzętu', con: 'Zależy od pętli zdarzeń przeglądarki' },
      { pro: 'Szybko porównuje urządzenia', con: 'Nie mierzy bezpośrednio reakcji piksela' },
      { pro: 'Korzysta z lokalnego timera wysokiej rozdzielczości', con: 'Przeglądarka może ograniczać precyzję' },
      { pro: 'Pokazuje stabilność aktualizacji', con: 'Nieaktywna karta może działać wolniej' },
    ] },
    { type: 'title', text: 'Diagnozowanie wysokiego opóźnienia' },
    { type: 'paragraph', html: 'Jeśli średnia przekracza 30 ms lub jitter jest duży, powtórz serię przy aktywnym oknie i sprawdź VSync, akcelerację grafiki, odpytywanie USB oraz obciążenie CPU.' },
    { type: 'diagnostic', variant: 'warning', title: 'Komunikat diagnostyczny opóźnienia', html: 'Średnia powyżej 35 ms na komputerze stacjonarnym wymaga sprawdzenia trybu ekranu i akceleracji sprzętowej. Zmieniaj jedno ustawienie naraz.' },
    { type: 'title', text: 'Stopniowe zmniejszanie opóźnienia systemu' },
    { type: 'paragraph', html: 'Reguluj osobno urządzenie, ekran i system. Po każdej zmianie zbierz nowe próbki w tych samych warunkach, aby potwierdzić rzeczywistą poprawę.' },
    { type: 'summary', title: 'Lista kontroli optymalizacji opóźnienia', items: ['Wybierz odpowiednie odpytywanie USB', 'Włącz tryb gry ekranu', 'Wyłącz zbędne filtry obrazu', 'Porównaj VSync i VRR', 'Utrzymuj stabilną liczbę klatek', 'Zamknij ciężkie zadania w tle', 'Powtórz pomiar po każdej zmianie'] },
    { type: 'message', title: 'Dobra praktyka porównywania wyników', html: 'Zamknij aplikacje w tle, pozostaw okno testu aktywne i zbierz co najmniej 15 próbek. Sprawdzaj medianę, średnią i jitter, bo pojedynczy wynik może być przypadkowy.' },
  ],
};
