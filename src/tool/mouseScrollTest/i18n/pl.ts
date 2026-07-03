import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseScrollTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-kolka-myszy';
const title = 'Test Kółka Myszy';
const description = 'Diagnozuj przeskakiwanie kółka myszy, odwrotne skoki, niespójny kierunek przewijania i słabe sygnały enkodera za pomocą lokalnego testu kółka myszy w przeglądarce.';

const faqData = [
  {
    question: 'Co wykrywa test kółka myszy?',
    answer: 'Test kółka myszy rejestruje zdarzenia kółka i szuka niestabilnych zmian kierunku, słabych małych delt i niespójnego przewijania. Objawy te często pojawiają się, gdy enkoder kółka jest zabrudzony, zużyty, źle ustawiony lub elektronicznie zakłócony.',
  },
  {
    question: 'Co to jest odwrotny skok przewijania?',
    answer: 'Odwrotny skok występuje, gdy przewijasz w jednym kierunku, ale komputer otrzymuje krótkie zdarzenie w kierunku przeciwnym. Jeśli powtarza się podczas stałego przewijania, jest to silny znak odbijania enkodera lub zanieczyszczenia.',
  },
  {
    question: 'Czy ten test działa z touchpadami?',
    answer: 'Tak, ale wynik jest najbardziej znaczący dla fizycznych kółek myszy. Touchpady i kółka płynnego przewijania tworzą wiele małych delt, więc kontrola czułości pomaga oddzielić celowy delikatny ruch od podejrzanego jittera.',
  },
  {
    question: 'Czy test wysyła moje dane myszy?',
    answer: 'Nie. Obliczenia wykonywane są lokalnie w przeglądarce. Narzędzie używa tylko zdarzeń kółka, gdy wskaźnik znajduje się w obszarze przechwytywania.',
  },
];

const howToData = [
  {
    name: 'Umieść wskaźnik nad panelem przechwytywania',
    text: 'Przesuń kursor do obszaru laboratorium przewijania, aby strona mogła przechwytywać zdarzenia kółka bez przesuwania dokumentu.',
  },
  {
    name: 'Przewijaj równomiernie w jednym kierunku',
    text: 'Testuj po jednym kierunku naraz: kręć powoli w górę przez kilka kliknięć, zresetuj lub wstrzymaj, a następnie przetestuj osobno w dół. Szybkie celowe zmiany kierunku mogą tworzyć fałszywe odczyty odwrotnych skoków.',
  },
  {
    name: 'Obserwuj odwrotne skoki',
    text: 'Jeśli licznik odwróceń rośnie, podczas gdy twój palec wciąż porusza się w jednym kierunku, powtórz ten sam ruch, aby potwierdzić wzorzec.',
  },
  {
    name: 'Dostrój czułość',
    text: 'Zwiększ czułość dla płynnych touchpadów lub zmniejsz ją dla ścisłych testów mechanicznego kółka. Wynik stabilności aktualizuje się natychmiast.',
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

export const content: ToolLocaleContent<MouseScrollTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Test Kółka Myszy: Znajdź Przeskakiwanie i Odwrotne Skoki',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wadliwe kółko myszy rzadko psuje się od razu. Zwykle zaczyna się od małych objawów: jeden skok przewija w złą stronę, strona podskakuje w górę podczas przewijania w dół, lub kółko wydaje się normalne, ale przeglądarka otrzymuje niespójne zdarzenia. Ten test kółka myszy rejestruje sygnał docierający do przeglądarki i podkreśla wzorce istotne dla diagnozy.',
    },
    {
      type: 'paragraph',
      html: 'Celem nie jest zmierzenie, jak daleko przesunęła się strona. Użytecznym sygnałem jest <strong>spójność kierunku</strong>. Gdy kręcisz mechanicznym kółkiem równomiernie w dół, strumień zdarzeń powinien pozostać w tym kierunku. Krótkie zdarzenia w przeciwnym kierunku w wąskim oknie czasowym są podejrzane, ponieważ odpowiadają sposobowi, w jaki zabrudzone lub zużyte enkodery błędnie odczytują ruch kółka.',
    },
    {
      type: 'title',
      text: 'Co Mierzy Narzędzie',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Całkowita liczba skoków kółka przechwyconych w panelu testowym',
        'Odwrotne skoki: szybkie zmiany znaku występujące, gdy poprzedni kierunek jest wciąż aktualny',
        'Najdłuższa czysta seria: ile kolejnych zdarzeń pozostało w spójnym kierunku',
        'Ostatnia delta: surowy kierunek i rozmiar najnowszego zdarzenia kółka',
        'Aktywność pionowa względem poziomej, przydatna dla kółek przechyłowych i touchpadów',
      ],
    },
    {
      type: 'table',
      headers: ['Sygnał', 'Zdrowy Wzorzec', 'Podejrzany Wzorzec'],
      rows: [
        ['Kółko pionowe', 'Długie serie zdarzeń w górę lub w dół podczas równomiernego przewijania', 'Naprzemienne zdarzenia góra/dół, gdy palec utrzymuje jeden kierunek'],
        ['Przechył poziomy', 'Zdarzenia w lewo lub prawo tylko przy użyciu gestów przechyłu', 'Nieoczekiwany ruch boczny podczas normalnego używania kółka pionowego'],
        ['Małe delty', 'Sporadyczne małe wartości na płynnych kółkach lub touchpadach', 'Wysoki udział małych niestabilnych wartości na mechanicznym kółku z zatrzaskami'],
        ['Wynik stabilności', 'Utrzymuje się wysoko w kilku celowych przebiegach', 'Spada wielokrotnie, ponieważ odwrócenia występują w tym samym teście kierunku'],
      ],
    },
    {
      type: 'title',
      text: 'Najczęstsze Przyczyny Przeskakiwania Kółka Przewijania',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Większość kółek myszy używa enkodera, który przekształca obrót w impulsy. Kurz, utlenianie, zużyte styki, luźna oś kółka, problemy z filtrowaniem firmware\'u lub uszkodzony kabel mogą sprawić, że te impulsy będą niespójne. Gdy enkoder krótko zgłasza niewłaściwą fazę, system operacyjny może otrzymać zdarzenie kółka w przeciwnym kierunku, mimo że kółko nadal poruszało się w pierwotnym kierunku.',
    },
    {
      type: 'table',
      headers: ['Objaw', 'Prawdopodobna Przyczyna', 'Następna Kontrola'],
      rows: [
        ['Strona podskakuje w górę podczas przewijania w dół', 'Odbijanie enkodera lub brud w mechanizmie kółka', 'Wykonaj powolny przebieg w dół i obserwuj licznik odwróceń'],
        ['Tylko jedna aplikacja źle przewija', 'Wygładzanie aplikacji, tryb powiększenia lub niestandardowy skrót myszy', 'Przetestuj w przeglądarce i porównaj z inną aplikacją'],
        ['Kółko działa po przedmuchaniu, potem znowu szwankuje', 'Tymczasowe przesunięcie zanieczyszczeń lub zużyte styki enkodera', 'Powtórz po kilku minutach normalnego użytkowania'],
        ['Pojawia się nieoczekiwany ruch poziomy', 'Szum kółka przechyłowego, gest touchpada lub mapowanie sterownika', 'Sprawdź wskaźnik osi poziomej podczas przewijania pionowego'],
        ['Mysz bezprzewodowa przewija nieregularnie', 'Słaba bateria, odległość odbiornika lub zakłócenia', 'Przetestuj ponownie ze świeżą baterią i odbiornikiem blisko myszy'],
      ],
    },
    {
      type: 'title',
      text: 'Jak Testować Niezawodnie',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Umieść wskaźnik w panelu przechwytywania przed przewijaniem, aby strona zapobiegła normalnemu ruchowi strony',
        'Testuj po jednym kierunku naraz: przewijaj powoli w górę przez 10-20 skoków bez zmiany kierunku',
        'Zresetuj lub wstrzymaj, a następnie powtórz ten sam jednokierunkowy przebieg w dół',
        'Nie przełączaj szybko między górą a dołem, ponieważ celowe szybkie zmiany kierunku mogą wyglądać jak odwrotne skoki',
        'Jeśli pojawią się odwrócenia, powtórz problematyczny kierunek kilka razy, aby potwierdzić powtarzalność',
        'Porównaj z inną myszą na tym samym komputerze, jeśli musisz oddzielić sprzęt od oprogramowania',
      ],
    },
    {
      type: 'title',
      text: 'Interpretacja Wyniku',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wynik stabilności to szybkie podsumowanie. Wysoki wynik oznacza, że narzędzie widziało spójny kierunek i niewiele małych niepewnych delt. Niski wynik nie dowodzi automatycznie, że mysz jest zepsuta, szczególnie na touchpadach lub wysokorozdzielczych płynnych kółkach, ale powtarzające się odwrotne skoki podczas powolnego testu jednokierunkowego są silnym dowodem rzeczywistego problemu z kółkiem.',
    },
    {
      type: 'table',
      headers: ['Wynik', 'Znaczenie', 'Zalecane Działanie'],
      rows: [
        ['Brak odwróceń i długie czyste serie', 'Sygnał kółka wydaje się spójny', 'Kontynuuj testowanie tylko jeśli objawy pojawią się w rzeczywistym użyciu'],
        ['Jedno izolowane odwrócenie', 'Może być przypadkową zmianą kierunku lub pojedynczym zakłóceniem', 'Powtórz ten sam kierunek powoli'],
        ['Kilka odwróceń w tym samym przebiegu', 'Prawdopodobne odbijanie enkodera, brud lub zużycie kółka', 'Przetestuj ponownie na innym komputerze i udokumentuj wynik'],
        ['Wiele zdarzeń jittera, ale bez odwróceń', 'Czułość może być zbyt niska dla tego typu urządzenia', 'Zwiększ czułość dla touchpadów lub urządzeń płynnego przewijania'],
        ['Zdarzenia poziome podczas używania kółka pionowego', 'Możliwy szum kółka przechyłowego lub mapowania sterownika', 'Wyłącz niestandardowe oprogramowanie myszy i przetestuj ponownie'],
      ],
    },
    {
      type: 'title',
      text: 'Kółko Mechaniczne vs Touchpad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mechaniczne kółko z zatrzaskami zwykle wytwarza wyraźne kroki kierunkowe. Touchpad lub kółko swobodnego obrotu może wytwarzać wiele małych delt, ponieważ system operacyjny stosuje płynne przewijanie. Dlatego to narzędzie zawiera kontrolę czułości: zwiększenie ignoruje małe ruchy i sprawia, że test koncentruje się na zmianach kierunku wystarczająco dużych, by miały znaczenie.',
    },
    {
      type: 'title',
      text: 'Co Wypróbować Przed Wymianą Myszy',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Przetestuj w innej przeglądarce, aby wykluczyć specyficzny dla strony handler kółka',
        'Wyłącz oprogramowanie myszy producenta, przyspieszenie przewijania lub warstwy makr podczas diagnozy',
        'W przypadku myszy bezprzewodowych użyj świeżej baterii i przysuń odbiornik bliżej',
        'Wyczyść okolice kółka sprężonym powietrzem, gdy mysz jest odłączona lub wyłączona',
        'Jeśli mysz jest na gwarancji, zapisz powtarzający się wzorzec odwróceń jako dowód',
      ],
    },
    {
      type: 'paragraph',
      html: 'Testy w przeglądarce nie mogą sprawdzić enkodera elektrycznie, ale mogą pokazać dokładnie to, co otrzymuje twoje normalne oprogramowanie. Jeśli przeglądarka otrzymuje zdarzenia kółka w złym kierunku podczas ostrożnego jednokierunkowego przewijania, inne aplikacje również mogą je otrzymywać.',
    },
  ],
  ui: {
    badge: 'Laboratorium Sygnału Kółka',
    captureTitle: 'Przewijaj wewnątrz panelu sygnału',
    captureHint: 'Używaj równomiernych jednokierunkowych przebiegów, aby wykryć odwrotne skoki',
    focusLockTitle: 'Aktywuj tę strefę przewijania',
    focusLockText: 'Kliknij tę strefę i przewijaj tutaj. Strona nie będzie się przesuwać, gdy ta strefa jest aktywna.',
    stabilityScore: 'Wynik stabilności',
    statusIdle: 'Przewijaj nad panelem, aby rozpocząć pomiar spójności kółka',
    statusClean: 'Kierunek kółka jest stabilny w przechwyconych próbkach',
    statusWarning: 'Wykryto odwrotne skoki podczas ostatniego przewijania',
    statusMixed: 'Wykryto wiele małych delt; dostosuj czułość dla tego urządzenia',
    directionNote: 'Testuj po jednym kierunku naraz. Szybkie przełączanie między górą a dołem może tworzyć fałszywe odczyty odwrotnych skoków.',
    totalTicks: 'Skoki',
    reversals: 'Odwrócenia',
    longestRun: 'Najlepsza seria',
    lastDelta: 'Ostatnia delta',
    verticalAxis: 'Pionowo',
    horizontalAxis: 'Poziomo',
    dominantDirection: 'Ostatni kierunek',
    upward: 'Góra',
    downward: 'Dół',
    leftward: 'Lewo',
    rightward: 'Prawo',
    noDirection: 'Brak ruchu',
    noDataValue: '-',
    sensitivityLabel: 'Czułość na jitter',
    sensitivityUnit: 'delta',
    reset: 'Resetuj',
    logTitle: 'Strumień zdarzeń kółka',
    emptyLog: 'Przewijaj nad panelem powolnym, równomiernym ruchem kółka.',
    cleanEvent: 'czysty',
    reversalEvent: 'odwrotny skok',
    jitterEvent: 'mała delta',
  },
};
