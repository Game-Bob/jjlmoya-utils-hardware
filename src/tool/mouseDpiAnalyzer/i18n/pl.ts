import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDpiAnalyzerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'analizator-dpi-myszy';
const title = 'Analizator DPI Myszy';
const description =
  'Zmierz rzeczywiste DPI swojej myszy online, przesuwając ją o znaną odległość fizyczną i porównując przechwycony ruch wskaźnika w pikselach.';

const faqData = [
  {
    question: 'Jak działa internetowy analizator DPI myszy?',
    answer:
      'Prosi o przesunięcie myszy na znaną odległość fizyczną, rejestruje zdarzenia ruchu w przeglądarce, koryguje przechwycone wartości za pomocą devicePixelRatio i dzieli wynikowe piksele przez odległość w calach.',
  },
  {
    question: 'Dlaczego rzeczywiste DPI może różnić się od wartości wydrukowanej na myszy?',
    answer:
      'Tolerancje sensora, kroki oprogramowania układowego, zachowanie powierzchni, skalowanie systemu operacyjnego, przyspieszenie wskaźnika i profile gier mogą sprawić, że zmierzony ruch różni się od nominalnego DPI wybranego w oprogramowaniu.',
  },
  {
    question: 'Czy przed testem należy wyłączyć przyspieszenie wskaźnika?',
    answer:
      'Tak. Wyłącz Zwiększ precyzję wskaźnika w systemie Windows i wszelkie krzywe przyspieszenia producenta, jeśli chcesz uzyskać czysty pomiar DPI. Pozostaw włączone tylko wtedy, gdy celowo chcesz zobaczyć, jak zachowuje się twoja zwykła konfiguracja.',
  },
  {
    question: 'Jakiej odległości fizycznej powinienem użyć?',
    answer:
      'Dłuższe odległości zmniejszają błąd ręki. Szerokość karty kredytowej jest wygodna, ale przejazd linijką 100 mm lub 4 cale jest zwykle bardziej powtarzalny, jeśli biurko ma wystarczająco dużo miejsca.',
  },
];

const howToData = [
  {
    name: 'Wybierz fizyczny punkt odniesienia',
    text: 'Użyj 5 lub 10 mm dla bardzo wysokiego DPI, 1 cala dla konwencjonalnych testów lub dłuższych odniesień, gdy masz wystarczająco dużo miejsca na biurku.',
  },
  {
    name: 'Przytrzymaj przycisk przechwytywania',
    text: 'Naciśnij i przytrzymaj cel przechwytywania na ekranie, a następnie przesuń mysz fizycznie w prawo dokładnie o wybraną odległość.',
  },
  {
    name: 'Zwolnij na fizycznym znaczniku',
    text: 'Zwolnij przycisk, gdy mysz osiągnie rzeczywisty fizyczny znacznik na biurku. Narzędzie oblicza piksele na cal i pokazuje zmierzone DPI.',
  },
  {
    name: 'Powtórz przy różnych prędkościach',
    text: 'Wykonaj wolne i szybkie przejazdy. Jeśli DPI znacznie się zmienia, przyspieszenie wskaźnika lub wygładzanie sensora może wpływać na wynik.',
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

export const content: ToolLocaleContent<MouseDpiAnalyzerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Internetowy Analizator DPI Myszy: Zmierz Rzeczywistą Czułość Sensora', level: 2 },
    {
      type: 'paragraph',
      html: 'Mysz może reklamować 800, 1600, 3200 lub 26000 DPI, ale wartością, która ma znaczenie w grach i pracy precyzyjnej, jest ruch, który faktycznie dociera do komputera. Ten internetowy analizator DPI myszy mierzy tę praktyczną wartość, porównując znany ruch fizyczny z ruchem wskaźnika przechwyconym w przeglądarce. Wynik jest wyrażany w pikselach na cal, tej samej jednostce powszechnie używanej przy mówieniu o DPI lub CPI myszy.',
    },
    {
      type: 'paragraph',
      html: 'Test jest celowo lokalny i prosty: przytrzymaj cel przechwytywania, przesuń mysz dokładnie w prawo o wybraną odległość fizyczną i zwolnij. Narzędzie gromadzi natywne delty ruchu zamiast używać skryptu częstotliwości odpytywania lub generycznego testu myszy. Ponieważ obliczenia odbywają się w przeglądarce, nie wymaga pobierania sterowników, konta ani przesyłania do chmury.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ważny warunek testowy',
      html: 'Aby uzyskać czysty pomiar DPI, wyłącz przyspieszenie wskaźnika systemu operacyjnego i krzywe przyspieszenia producenta. Jeśli przyspieszenie pozostanie włączone, wynik opisuje bieżące zachowanie wskaźnika, a nie czyste ustawienie sensora.',
    },
    { type: 'title', text: 'Jak Działa Rzeczywiste Obliczanie DPI', level: 3 },
    {
      type: 'paragraph',
      html: 'DPI oznacza punkty na cal. W kontekście myszy, DPI i CPI są często używane zamiennie do opisania, ile zliczeń lub pikseli wskaźnika jest generowanych, gdy mysz pokonuje jeden fizyczny cal. Ten analizator rejestruje ruch poziomy podczas kontrolowanego przejazdu, przekształca wybraną odległość na cale, a następnie dzieli przechwycone piksele przez cale. Na przykład, jeśli mysz zgłasza 3200 skorygowanych pikseli na 2 calach, zmierzona wartość wynosi około 1600 DPI.',
    },
    {
      type: 'list',
      items: [
        'Wybierz krótki punkt odniesienia, np. 10 mm dla bardzo wysokiego DPI, lub dłuższy dla niskiego DPI.',
        'Przytrzymaj środkowy przycisk przechwytywania, aby przeglądarka rejestrowała ruch tylko podczas przejazdu.',
        'Poruszaj się fizycznie w prawo, utrzymując tor jak najbardziej prosty.',
        'Zwolnij na rzeczywistym fizycznym znaczniku i odczytaj obliczone DPI.',
        'Powtórz kilka razy i uśrednij spójne przejazdy, zamiast ufać pojedynczemu przejazdowi.',
      ],
    },
    {
      type: 'table',
      headers: ['Przechwycony ruch', 'Odległość fizyczna', 'Zmierzone DPI'],
      rows: [
        ['800 px', '1.00 in', '800 DPI'],
        ['1350 px', '85.6 mm szerokość karty kredytowej', '401 DPI'],
        ['3150 px', '50.0 mm', '1600 DPI'],
        ['6300 px', '100.0 mm', '1600 DPI'],
      ],
    },
    {
      type: 'tip',
      title: 'Wykonaj czysty ruch',
      html: 'Pojedynczy poziomy ruch jest ważniejszy niż duża odległość. Dla bardzo wysokiego DPI użyj ustawienia 5 mm lub 10 mm: utrzymuje to ruch na tyle mały, by zmieścić się na ekranie, a jednocześnie daje kalkulatorowi znany fizyczny punkt odniesienia. Pasek postępu jest tylko miernikiem sygnału wejściowego; linijka lub karta na biurku jest punktem zatrzymania.',
    },
    { type: 'title', text: 'Dlaczego Zmierzone DPI Może Różnić Się od Deklarowanego DPI', level: 3 },
    {
      type: 'paragraph',
      html: 'Deklarowane DPI to często wybieralny krok oprogramowania układowego, a nie wartość certyfikowana laboratoryjnie dla każdej powierzchni i każdej jednostki. Dwie myszy ustawione na to samo nominalne DPI mogą działać inaczej, jeśli ich sensory, skalowanie oprogramowania układowego, wysokość ślizgaczy, tekstura powierzchni, zachowanie przy unoszeniu lub ustawienia systemu operacyjnego różnią się. Niewielka różnica jest normalna; duża różnica zwykle oznacza, że konfiguracja testu lub ścieżka oprogramowania wpływa na pomiar.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Nominalne DPI',
          description: 'Wartość wyświetlana w oprogramowaniu myszy lub wydrukowana na stronie produktu. Przydatna jako punkt wyjścia, ale nie jest dowodem rzeczywistego ruchu.',
          points: ['Łatwe do odczytania', 'Może ukrywać skalowanie oprogramowania', 'Różni się w zależności od profilu'],
        },
        {
          title: 'Zmierzone DPI',
          description: 'Wartość obliczona na podstawie fizycznego przesunięcia i przechwyconego ruchu wskaźnika. Idealna do dopasowania jednej myszy do drugiej.',
          highlight: true,
          points: ['Praktyczne i powtarzalne', 'Wrażliwe na precyzję ręki', 'Pokazuje rzeczywiste zachowanie konfiguracji'],
        },
        {
          title: 'Czułość w grze',
          description: 'Ostateczna reakcja kamery lub kursora po tym, jak gra pomnoży sygnał myszy przez własną wartość czułości.',
          points: ['To, co naprawdę czujesz', 'Specyficzna dla gry', 'Nie jest pomiarem sensora'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Zalety i wady pomiaru DPI w przeglądarce',
      items: [
        { pro: 'Nie wymaga instalacji sterowników', con: 'Przeglądarka widzi przetworzony ruch wskaźnika, a nie sygnał elektryczny sensora' },
        { pro: 'Dobre do szybkiego porównywania myszy i profili', con: 'Ustawienia przyspieszenia mogą zniekształcić wynik, jeśli są włączone' },
        { pro: 'Działa z powszechnymi fizycznymi punktami odniesienia', con: 'Ułożenie ręki i oznaczenia na biurku wpływają na powtarzalność' },
      ],
    },
    { type: 'title', text: 'Przygotowanie Windows, macOS i Oprogramowania Myszy', level: 3 },
    {
      type: 'paragraph',
      html: 'Przed użyciem analizatora DPI spraw, by ścieżka wejściowa była jak najbardziej neutralna. W systemie Windows wyłącz Zwiększ precyzję wskaźnika, jeśli chcesz uzyskać surowe zachowanie. W oprogramowaniu producenta wyłącz przyciąganie kątowe, przyspieszenie, kontrolę tętnienia, wygładzanie lub pomoce specyficzne dla powierzchni, chyba że celowo chcesz je zmierzyć. W systemie macOS przyspieszenie wskaźnika jest częścią normalnej ścieżki kursora, więc wartość należy traktować jako praktyczny wynik systemowy, a nie surowy wynik sensora.',
    },
    {
      type: 'table',
      headers: ['Ustawienie', 'Zalecane dla surowego DPI', 'Powód'],
      rows: [
        ['Przyspieszenie wskaźnika', 'Wyłączone', 'Przyspieszenie zmienia ruch wyjściowy w zależności od prędkości'],
        ['Krok DPI w oprogramowaniu myszy', 'Stały pojedynczy krok', 'Zapobiega przypadkowym zmianom profilu podczas testu'],
        ['Przyciąganie kątowe', 'Wyłączone', 'Może modyfikować ruch ukośny i maskować naturalny sygnał sensora'],
        ['Skalowanie systemu operacyjnego', 'Pozostaw normalne, narzędzie koryguje za pomocą devicePixelRatio', 'Analizator neutralizuje powiększenie przeglądarki i współczynnik pikseli wyświetlacza w swoich obliczeniach'],
        ['Nakładki gier lub makra', 'Wyłączone', 'Dodatkowe oprogramowanie może przechwytywać dane wejściowe i sprawiać, że przejazdy są niespójne'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:target',
      title: 'Dopasowywanie dwóch myszy',
      html: 'Zmierz starą mysz trzy razy, zanotuj średnią, a następnie dostosuj krok DPI nowej myszy, aż jej zmierzona wartość będzie zbliżona. Jest to często bardziej przydatne niż kopiowanie liczby z jednej aplikacji producenta do drugiej, ponieważ rzeczywisty sygnał sensora może się różnić.',
    },
    { type: 'title', text: 'Wybór Odpowiedniego Fizycznego Punktu Odniesienia', level: 3 },
    {
      type: 'paragraph',
      html: 'Interfejs zawiera krótkie punkty odniesienia dla wysokiego DPI i dłuższe dla niższego DPI. Użyj 5 lub 10 mm, gdy wskaźnik przecina ekran przy minimalnym ruchu ręki. Użyj 1 cala, 50 mm lub szerokości karty 85.6 mm, gdy mysz jest skonfigurowana bliżej typowych wartości biurkowych lub strzelanek taktycznych.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '25.4', label: 'milimetrów w jednym calu' },
        { value: '85.6', label: 'milimetrów w szerokości typowej karty kredytowej' },
        { value: '3+', label: 'powtórzonych przejazdów zalecanych przed zaufaniem profilowi' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'DPI', definition: 'Punkty na cal, powszechnie używane do opisywania ruchu wskaźnika generowanego przez jeden cal przesunięcia myszy.' },
        { term: 'CPI', definition: 'Zliczenia na cal, termin zorientowany na sensor, który jest często technicznie dokładniejszy w przypadku myszy.' },
        { term: 'Przyspieszenie', definition: 'Ustawienie lub krzywa, które zmieniają sygnał wyjściowy wskaźnika w zależności od prędkości ruchu.' },
        { term: 'devicePixelRatio', definition: 'Współczynnik przeglądarki między pikselami CSS a fizycznymi pikselami wyświetlacza, używany tutaj do normalizacji efektów powiększenia i skalowania ekranu.' },
        { term: 'Przyciąganie kątowe', definition: 'Korekcja w oprogramowaniu układowym lub programie, która prostuje ruch, czasami przydatna przy rysowaniu, ale odrzucana przez wielu graczy turniejowych.' },
      ],
    },
    { type: 'title', text: 'Odczytywanie Wskaźnika Przyspieszenia', level: 3 },
    {
      type: 'paragraph',
      html: 'Wskaźnik przyspieszenia nie jest laboratoryjnym dowodem krzywej systemu operacyjnego. Jest to praktyczne ostrzeżenie oparte na zmienności prędkości ruchu podczas przechwyconego przejazdu. Jeśli wolne i szybkie przejazdy dają bardzo różne wartości DPI, może to oznaczać przyspieszenie, wygładzanie, zachowanie powierzchni lub niespójny ruch ręki. Dobra surowa konfiguracja powinna dawać podobne zmierzone DPI w wielu przejazdach, gdy odległość fizyczna jest taka sama.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gdy wynik znacznie się waha',
      html: 'Jeśli jeden przejazd pokazuje 780 DPI, a następny 950 DPI przy tej samej odległości, nie obwiniaj od razu myszy. Sprawdź ustawienia przyspieszenia, zwiększ odległość testową, utrzymuj tor myszy poziomo i upewnij się, że wskaźnik nie uderza w krawędź ekranu podczas przejazdu.',
    },
    {
      type: 'summary',
      title: 'Lista kontrolna niezawodnego pomiaru DPI',
      items: [
        'Użyj zmierzonego fizycznego punktu odniesienia, najlepiej 100 mm lub dłuższego.',
        'Poruszaj się poziomo w prawo i zatrzymaj dokładnie na znaczniku.',
        'Wyłącz przyspieszenie przy porównywaniu surowych profili.',
        'Wykonaj co najmniej trzy przejazdy i porównaj rozrzut.',
        'Używaj zmierzonego DPI do dopasowywania myszy, a nie tylko etykiet deklarowanego DPI.',
      ],
    },
    {
      type: 'message',
      title: 'Uwaga o prywatności',
      html: 'Ten test przyspieszenia myszy i obliczanie DPI działają lokalnie w przeglądarce. Narzędzie nie potrzebuje dostępu do sterowników, numerów seryjnych urządzeń ani przesyłanych dzienników wejściowych.',
    },
  ],
  ui: {
    badge: 'Laboratorium Rzeczywistego DPI',
    referenceLabel: 'Odniesienie',
    referenceValue: '5 mm',
    ultraDpiPreset: '5 mm',
    highDpiPreset: '10 mm',
    balancedPreset: '50 mm',
    inchPreset: '1 in',
    cardPreset: 'Karta',
    lineStart: 'Start',
    holdButton: 'Przytrzymaj i przesuń o wybraną odległość',
    holdHint: 'Użyj prawdziwej linijki/karty na biurku. Nie zatrzymuj się, bo pasek się wypełni.',
    progressLabel: 'Sygnał wejściowy',
    activeHint: 'Śledzenie ruchu',
    dpiLabel: 'Zmierzone DPI',
    pixelsLabel: 'Skorygowany ruch',
    distanceReadout: 'Odległość fizyczna',
    ratioLabel: 'Współczynnik pikseli',
    initialDpiValue: '0',
    initialPixelsValue: '0 px',
    initialRatioValue: '0 px/in',
    initialSamplesValue: '0',
    initialAccelerationValue: '-',
    pixelUnit: 'px',
    pixelsPerInchUnit: 'px/in',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    statusReady: 'Gotowy do przechwycenia',
    statusTracking: 'Śledzenie ruchu...',
    statusDone: 'Pomiar zakończony',
    reset: 'Reset',
    accelerationTitle: 'Sygnał przyspieszenia',
    accelerationHint: 'Powtórz przy wolnej i szybkiej prędkości, aby porównać spójność.',
    accelerationLow: 'stabilny',
    accelerationMedium: 'zmienny',
    accelerationHigh: 'wysoki dryft',
    sampleCount: 'Próbki',
  },
};
