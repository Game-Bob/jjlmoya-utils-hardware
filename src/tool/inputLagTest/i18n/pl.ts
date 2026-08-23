import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-opoznienia-input-lag';
const title = 'Test Opóźnienia Wejścia (Input Lag) i Opóźnienia Systemu';
const description = 'Narzędzie online do pomiaru opóźnienia sprzętowego i opóźnienia systemu z wykorzystaniem precyzyjnego pomiaru czasu i synchronizacji klatek.';

const faqData = [
  {
    question: 'Czym jest input lag i opóźnienie systemu?',
    answer: 'Input lag to całkowite opóźnienie czasowe między fizyczną akcją użytkownika (kliknięciem myszy lub naciśnięciem klawisza) a pojawieniem się odświeżonego obrazu na ekranie.',
  },
  {
    question: 'Jak ten test mierzy opóźnienie wejścia online?',
    answer: 'Przechwytuje znaczniki czasu zdarzeń sprzętowych za pomocą performance.now() i koreluje je z kolejnymi cyklami wyświetlania requestAnimationFrame.',
  },
  {
    question: 'Jaki input lag jest uważany za dobry w grach?',
    answer: 'Poniżej 10 ms to poziom superszybki dla e-sportu. Od 10 ms do 20 ms jest szybki, od 20 ms do 35 ms umiarkowany, a powyżej 35 ms to opóźnienie zauważalne.',
  },
  {
    question: 'Jak mogę zmniejszyć input lag na moim komputerze?',
    answer: 'Zwiększ częstotliwość odświeżania monitora, wyłącz VSync, włącz G-Sync lub FreeSync, zwiększ częstotliwość próbkowania myszy USB do 1000 Hz+ i włącz NVIDIA Reflex.',
  },
  {
    question: 'Czy częstotliwość odświeżania ekranu wpływa na input lag?',
    answer: 'Tak. Wyższa częstotliwość odświeżania skraca czas trwania klatki. Ekran 60 Hz ma czas klatki 16,67 ms, podczas gdy ekran 240 Hz ma czas klatki wynoszący zaledwie 4,17 ms.',
  },
];

const howToData = [
  {
    name: 'Wybierz tryb testu',
    text: 'Wybierz Reakcję natychmiastową, Opóźnienie naciśnięcia klawisza lub Opóźnienie reakcji wizualnej.',
  },
  {
    name: 'Wykonaj akcje wejściowe',
    text: 'Kliknij wewnątrz pola docelowego lub naciskaj klawisze, aby wygenerować zdarzenia sprzętowe.',
  },
  {
    name: 'Obserwuj wskaźniki opóźnienia w czasie rzeczywistym',
    text: 'Przejrzyj obliczone opóźnienie średnie, minimalne, maksymalne oraz zmienność (jitter).',
  },
  {
    name: 'Sprawdź synchronizację klatek',
    text: 'Monitoruj aktualne FPS i czas klatki, aby zweryfikować stabilność odświeżania ekranu.',
  },
  {
    name: 'Przeanalizuj historię pomiarów',
    text: 'Przejrzyj dziennik historii próbek, aby zidentyfikować skoki i odchylenia opóźnienia.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pl',
};

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Opóźnienie Systemu',
  modeInstant: 'Reakcja Natychmiastowa',
  modeKey: 'Opóźnienie Klawisza',
  modeVisual: 'Opóźnienie Reakcji Wizualnej',
  targetClickPrompt: 'Kliknij lub dotknij wewnątrz tego pola, aby zmierzyć opóźnienie',
  targetKeyPrompt: 'Naciśnij dowolny klawisz (lub Spację), aby zmierzyć opóźnienie klawiatury',
  targetWaitPrompt: 'Czekaj na zielone tło...',
  targetNowPrompt: 'KLIKNIJ TERAZ!',
  labelAvgLatency: 'Średnie Opóźnienie',
  labelMinLatency: 'Minimalne Opóźnienie',
  labelMaxLatency: 'Maksymalne Opóźnienie',
  labelJitter: 'Jitter Opóźnienia (Odch. Std.)',
  labelFps: 'Aktualne FPS',
  labelFrameTime: 'Czas Klatki',
  labelSamples: 'Próbki',
  labelGrade: 'Ocena Opóźnienia',
  gradeUltraFast: 'Superszybkie (<10ms)',
  gradeFast: 'Szybkie (10-20ms)',
  gradeModerate: 'Umiarkowane (20-35ms)',
  gradeHigh: 'Wysokie (>35ms)',
  btnReset: 'Resetuj Pomiary',
  btnCopyReport: 'Kopiuj Raport Benchmarku',
  reportCopied: 'Raport Skopiowany!',
  historyTitle: 'Ostatnie Pomiary Opóźnienia',
  pipelineTitle: 'Analiza Ścieżki Sygnału Sprzętowego',
  distributionTitle: 'Rozkład Częstotliwości Opóźnienia',
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
      text: 'Czym jest Input Lag i Opóźnienie Systemu w Grach PC?',
    },
    {
      type: 'paragraph',
      html: 'Input lag (czyli opóźnienie wejścia) reprezentuje dokładne opóźnienie czasowe między akcją fizyczną wykonaną przez użytkownika (np. kliknięciem przycisku myszy lub naciśnięciem klawisza na klawiaturze) a odpowiednią reakcją wizualną pojawiającą się na ekranie monitora. W dynamicznych grach e-sportowych i rywalizacyjnych zminimalizowanie opóźnienia systemu jest kluczowe dla precyzji celowania, szybkiej reakcji oraz ogólnej wydajności gracza. Całkowite opóźnienie systemu składa się z nakładających się opóźnień: próbkowania USB urządzenia peryferyjnego, przetwarzania zdarzeń w kolejce systemu operacyjnego, silnika renderującego gry, buforowania klatek w karcie graficznej oraz własnego czasu reakcji pikseli monitora.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '< 10 ms',
          label: 'Cel w E-sporcie',
          trend: 'Optymalna wartość rywalizacyjna',
        },
        {
          value: '1000 Hz',
          label: 'Standardowe Próbkowanie USB',
          trend: 'Interwał 1.0 ms między sygnałami',
        },
        {
          value: '240 Hz',
          label: 'Monitor Wysokiej Częstotliwości',
          trend: 'Czas klatki 4.16 ms na obraz',
        },
        {
          value: '16.6 ms',
          label: 'Czas Klatki 60Hz',
          trend: 'Podstawowe opóźnienie ekranu',
        },
      ],
      columns: 4,
    },
    {
      type: 'card',
      title: 'Jak Działa Pomiar Opóźnienia w Przeglądarce Internetowej?',
      html: 'Test wykorzystuje precyzyjne znaczniki czasu <code>performance.now()</code> połączone ze zdarzeniami DOM (<code>pointerdown</code> i <code>keydown</code>). Synchronizując zdarzenia z cyklami odświeżania ekranu poprzez <code>requestAnimationFrame</code>, aplikacja oblicza różnicę czasową między fizycznym kliknięciem a odświeżeniem obrazu bezpośrednio w przeglądarce w sposób wysoce dokładny.',
    },
    {
      type: 'title',
      text: 'Kompletna Ścieżka Sygnału od Przełącznika do Ekranu',
    },
    {
      type: 'paragraph',
      html: 'Aby skutecznie zdiagnozować i zredukować opóźnienie wejścia, należy szczegółowo przeanalizować całą ścieżkę sygnału. Całkowite opóźnienie systemu to suma opóźnienia urządzenia peryferyjnego, systemu operacyjnego, silnika renderującego gry, karty graficznej i panelu monitora.',
    },
    {
      type: 'table',
      headers: ['Element Ścieżki', 'Typowe Opóźnienie', 'Główna Przyczyna Opóźnienia', 'Strategia Optymalizacji'],
      rows: [
        ['Przełącznik Peryferyjny', '0.2 ms - 5.0 ms', 'Drganie styków mechanicznych', 'Stosować przełączniki optyczne'],
        ['Częstotliwość USB', '0.125 ms - 8.0 ms', '125 Hz vs 1000 Hz / 8000 Hz USB', 'Zwiększyć próbkowanie do 1000Hz+'],
        ['Kolejka Systemu Operacyjnego', '0.5 ms - 3.0 ms', 'Zadania w tle systemu operacyjnego', 'Włączyć Tryb Gry w Windows'],
        ['Silnik Renderujący Gry', '4.0 ms - 20.0 ms', 'Obciążenie procesora (CPU) i 동기화', 'Używać NVIDIA Reflex / Anti-Lag'],
        ['Bufor Klatek GPU', '8.0 ms - 33.0 ms', 'Włączony VSync, podwójny/potrójny bufor', 'Wyłączyć VSync, włączyć VRR'],
        ['Przetwarzanie Obrazu w Monitorze', '1.0 ms - 15.0 ms', 'Procesory obrazu i skalowania TV/Monitora', 'Włączyć Tryb Gry w monitorze/TV'],
      ],
    },
    {
      type: 'tip',
      title: 'Jak Zredukować Opóźnienie GPU przy Wysokim Obciążeniu?',
      html: 'Gdy karta graficzna pracuje na 99% możliwości, sterownik buforuje klatki z wyprzedzeniem. Powoduje to znaczny input lag (często od 30 ms do 50 ms). Ogranicz częstotliwość klatek nieznacznie poniżej maksymalnej wydajności GPU lub włącz NVIDIA Reflex.',
    },
    {
      type: 'title',
      text: 'Porównanie Opóźnienia Myszy, Klawiatur i Ekranów Dotykowych',
    },
    {
      type: 'paragraph',
      html: 'Różne urządzenia wejściowe charakteryzują się odmiennym opóźnieniem w zależności od zastosowanej technologii.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Myszy dla Graczy',
          description: 'Szybkie połączenie bezprzewodowe 2.4GHz lub przewodowe.',
          highlight: 'Opóźnienie 0.5ms - 2ms',
          points: [
            'Próbkowanie od 1000Hz do 8000Hz',
            'Przełączniki optyczne bez opóźnienia drgań styków',
            'Sensory o niskim opóźnieniu ruchu',
          ],
        },
        {
          title: 'Klawiatury Mechaniczne',
          description: 'Skanowanie macierzy z kontrolą drgań.',
          highlight: 'Opóźnienie 1ms - 10ms',
          points: [
            'Magnetyczne przełączniki z efektem Halla (Rapid Trigger)',
            'Częstotliwość skanowania macierzy do 8000Hz',
            'Regulowany punkt aktywacji',
          ],
        },
        {
          title: 'Ekrany Dotykowe',
          description: 'Próbkowanie pojemnościowe w urządzeniach mobilnych.',
          highlight: 'Opóźnienie 15ms - 45ms',
          points: [
            'Częstotliwość próbkowania dotyku (120Hz - 480Hz)',
            'Opóźnienie kompozytora systemu operacyjnego',
            'Algorytmy filtrowania pojemnościowego',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Wpływ Częstotliwości Odświeżania Monitora na Opóźnienie',
    },
    {
      type: 'paragraph',
      html: 'Częstotliwość odświeżania monitora bezpośrednio określa minimalne możliwe opóźnienie wyświetlania.',
    },
    {
      type: 'list',
      items: [
        'Ekran 60 Hz: 1 klatka = 16.67 ms (Średnie opóźnienie: ~8.33 ms)',
        'Ekran 120 Hz: 1 klatka = 8.33 ms (Średnie opóźnienie: ~4.16 ms)',
        'Ekran 144 Hz: 1 klatka = 6.94 ms (Średnie opóźnienie: ~3.47 ms)',
        'Ekran 240 Hz: 1 klatka = 4.17 ms (Średnie opóźnienie: ~2.08 ms)',
        'Ekran 360 Hz: 1 klatka = 2.78 ms (Średnie opóźnienie: ~1.39 ms)',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Input Lag',
          definition: 'Całkowity czas od akcji fizycznej użytkownika do pojawienia się reakcji na ekranie.',
        },
        {
          term: 'Jitter (Zmienność Opóźnienia)',
          definition: 'Odchylenie standardowe pomiarów wskazujące na stabilność pracy systemu.',
        },
        {
          term: 'VSync (Synchronizacja Pionowa)',
          definition: 'Zapobiega rozrywaniu obrazu, ale znacznie zwiększa input lag.',
        },
        {
          term: 'Variable Refresh Rate (VRR)',
          definition: 'Technologie takie jak G-Sync czy FreeSync dostosowujące odświeżanie monitora do GPU.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Zalety i Ograniczenia Pomiaru Opóźnienia w Przeglądarce',
    },
    {
      type: 'paragraph',
      html: 'Pomiar opóźnienia w przeglądarce umożliwia szybką weryfikację bez użycia specjalistycznego sprzętu.',
    },
    {
      type: 'proscons',
      title: 'Ocena Pomiaru Przeglądarkowego',
      items: [
        {
          pro: 'Brak konieczności instalowania oprogramowania lub zakupu sprzętu',
          con: 'Zależność od pętli zdarzeń przeglądarki i menedżera okien systemu',
        },
        {
          pro: 'Wysoka precyzja zegara mikrosekundowego performance.now',
          con: 'Brak możliwości bezpośredniego pomiaru optycznego czasu reakcji pikseli',
        },
        {
          pro: 'Natychmiastowe porównanie różnych sprzętów i przeglądarek',
          con: 'Zaokrąglanie precyzji zegarów w przeglądarkach ze względów bezpieczeństwa',
        },
      ],
    },
    {
      type: 'title',
      text: 'Diagnostyka w Przypadku Wysokiego Input Lagu',
    },
    {
      type: 'paragraph',
      html: 'Jeśli Twoje wyniki wskazują na wysokie opóźnienie (>30 ms), sprawdź poniższe ustawienia.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ostrzeżenie o Wysokim Opóźnieniu',
      html: 'Jeśli średni input lag przekracza 35 ms, sprawdź, czy VSync jest włączony w panelu sterowania karty graficznej. Wyłączona akceleracja sprzętowa w przeglądarce również może obciążać CPU i zwiększać opóźnienie.',
    },
    {
      type: 'title',
      text: 'Kroki do Optymalizacji Opóźnienia Systemu',
    },
    {
      type: 'paragraph',
      html: 'Wykonaj poniższe kroki, aby zredukować opóźnienie w swoim systemie.',
    },
    {
      type: 'summary',
      title: 'Lista Kontrolna Optymalizacji Opóźnienia',
      items: [
        'Ustaw próbkowanie myszy USB na 1000Hz lub więcej w oprogramowaniu producenta.',
        'Włącz Planowanie GPU z akceleracją sprzętową (HAGS) w ustawieniach Windows.',
        'Włącz Tryb Gry w ustawieniach telewizora lub monitora, aby pominąć przetwarzanie obrazu.',
        'Wyłącz VSync w ustawieniach 3D i włącz G-Sync lub FreeSync.',
        'Włącz NVIDIA Reflex lub AMD Anti-Lag w obsługiwanych grach.',
        'Upewnij się, że akceleracja sprzętowa w przeglądarce jest włączona.',
      ],
    },
    {
      type: 'message',
      title: 'Wskazówka dla Wiarygodnych Pomiarów',
      html: 'Dla optymalnej dokładności zamknij aplikacje w tle, uruchom przeglądarkę w trybie pełnoekranowym i wykonaj co najmniej 15-20 pomiarów.',
    },
  ],
};
