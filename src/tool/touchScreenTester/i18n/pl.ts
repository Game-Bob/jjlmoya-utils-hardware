import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TouchScreenTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tester-ekranu-dotykowego';
const title = 'Tester ekranu dotykowego';
const description = 'Rysuj na pełnoekranowym płótnie, aby sprawdzić martwe strefy ekranu dotykowego, pomijane dotknięcia, reakcję na krawędziach, zakłócenia od dłoni oraz ile jednoczesnych punktów wielodotyku potrafi wykryć Twój telefon lub tablet.';

const faqData = [
  {
    question: 'Jak sprawdzić martwe strefy na ekranie dotykowym?',
    answer: 'Otwórz tester na urządzeniu, powoli przeciągnij palcem po całym wyświetlaczu i wypatruj pustych przerw, w których linia się urywa. Powtórz wzdłuż krawędzi, nad klawiaturą, w rogach oraz w każdym miejscu, które często nie rejestruje dotknięć.',
  },
  {
    question: 'Jak mogę zrobić test wielodotyku online?',
    answer: 'Połóż kilka palców na płótnie jednocześnie. Licznik aktywnych dotknięć pokazuje, ile kontaktów przeglądarka odbiera teraz, a licznik szczytowy zapisuje najwyższą jednoczesną liczbę osiągniętą podczas sesji.',
  },
  {
    question: 'Czy to narzędzie naprawi nieczuły ekran dotykowy?',
    answer: 'Nie. Narzędzie nie naprawia sprzętu ani nie kalibruje digitizera. Pomaga udokumentować objawy, abyś mógł zdecydować, czy problemem jest folia ochronna, zabrudzone szkło, błąd oprogramowania, nacisk etui czy uszkodzony sprzęt dotykowy.',
  },
  {
    question: 'Dlaczego mój telefon wykrywa mniej palców, niż powinien?',
    answer: 'Niektóre panele, przeglądarki, systemy operacyjne, folie ochronne, ładowarki i ustawienia dostępności ograniczają lub filtrują kontakty dotykowe. Wypróbuj test bez etui, na zasilaniu bateryjnym, po wyczyszczeniu szkła i w innej przeglądarce, zanim uznasz panel za wadliwy.',
  },
];

const howToData = [
  { name: 'Wyczyść szkło i usuń oczywiste zakłócenia', text: 'Przetrzyj ekran, osusz palce, odłącz hałaśliwe ładowarki i zdejmij grube rękawice lub przewodzące akcesoria przed testowaniem.' },
  { name: 'Rysuj powolne poziome i pionowe linie', text: 'Pokryj wyświetlacz równoległymi pociągnięciami od krawędzi do krawędzi. Zdrowy panel powinien zostawiać ciągłe linie bez przerw.' },
  { name: 'Sprawdź rogi i strefy gestów', text: 'Prześledź ramki, obszar klawiatury, obszar powiadomień i strefy gestów nawigacyjnych, ponieważ te regiony często jako pierwsze ujawniają częściową awarię digitizera.' },
  { name: 'Zmierz jednoczesne dotknięcia', text: 'Połóż dwa, trzy, cztery, pięć lub więcej palców na płótnie i obserwuj szczytowy licznik wielodotyku.' },
  { name: 'Użyj pełnego ekranu do ostatecznego potwierdzenia', text: 'Wejdź w tryb pełnoekranowy i powtórz test, aby elementy przeglądarki nie zasłaniały górnych ani dolnych obszarów dotyku.' },
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

export const content: ToolLocaleContent<TouchScreenTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Test ekranu dotykowego online - martwe strefy i wielodotyk', level: 2 },
    {
      type: 'paragraph',
      html: 'Panel dotykowy może zawodzić w sposób trudny do udowodnienia podczas normalnego korzystania z aplikacji. Klawisz klawiatury może nie działać tylko przy dolnej krawędzi, aplikacja do rysowania może pomijać wąski pionowy pas, a gry mogą tracić drugi palec tylko wtedy, gdy kciuk już naciska przycisk. Ten tester zamienia całą stronę w powierzchnię do rysowania, dzięki czemu każda luka, przerwana kreska i limit jednoczesnych kontaktów staje się natychmiast widoczny.',
    },
    {
      type: 'paragraph',
      html: 'Używaj go do wyszukiwań takich jak <strong>tester ekranu dotykowego</strong>, <strong>test wielodotyku online</strong>, <strong>test pantalla tactil</strong> i <strong>comprobar zonas muertas pantalla</strong>. Płótno rejestruje ruch palca lokalnie w przeglądarce; nie wysyła rysunków, pozycji dotyku, identyfikatorów urządzenia ani wyników diagnostycznych.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '0 instalacji', label: 'Działa bezpośrednio w przeglądarce' },
        { value: 'Na żywo', label: 'Licznik aktywnych dotknięć' },
        { value: 'Płótno', label: 'Wizualna mapa martwych stref' },
      ],
    },
    { type: 'title', text: 'Jak rozpoznać martwe strefy ekranu dotykowego', level: 3 },
    {
      type: 'paragraph',
      html: 'Martwa strefa to obszar, w którym digitizer nie zgłasza kontaktu w sposób niezawodny. Może to być całkowicie pusty pas, róg ignorujący dotknięcia lub mała plamka działająca tylko przy silnym nacisku. Rysuj powolne, nachodzące na siebie linie po całym ekranie. Jeśli linia konsekwentnie znika w tym samym miejscu, ten obszar zasługuje na dokładniejsze sprawdzenie.',
    },
    {
      type: 'list',
      items: [
        'Zacznij od poziomych pociągnięć od lewej krawędzi do prawej, zostawiając tylko niewielką przerwę między przejściami.',
        'Powtórz z pionowymi pociągnięciami od górnej krawędzi do dolnej, aby ujawnić wąskie kolumny, które test poziomy może przeoczyć.',
        'Prześledź dokładny obrys wyświetlacza, ponieważ elektrody krawędziowe i strefy gestów to częste punkty awarii.',
        'Rysuj okręgi wokół podejrzanych obszarów, aby sprawdzić, czy przerwa występuje w tym samym fizycznym miejscu.',
        'Obróć urządzenie i przetestuj ponownie, aby odróżnić problem z układem aplikacji od problemu sprzętowego.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Powtarzająca się pusta linia znaczy więcej niż jedno pominięte pociągnięcie',
      html: '<p>Jedna krótka przerwa może się zdarzyć, gdy palec jest suchy, porusza się zbyt szybko lub odrywa się od szkła. Sprzętowa martwa strefa zwykle pojawia się wielokrotnie w tym samym fizycznym obszarze, przy różnych kierunkach pociągnięć i po wyczyszczeniu wyświetlacza.</p>',
    },
    {
      type: 'table',
      headers: ['Objaw', 'Prawdopodobne znaczenie', 'Co zrobić dalej'],
      rows: [
        ['Linia urywa się w tym samym pionowym pasie', 'Możliwa awaria kolumny digitizera lub pęcherzyk pod folią ochronną.', 'Zdejmij folię, jeśli to możliwe, wyczyść szkło i przetestuj ponownie na pełnym ekranie.'],
        ['Krawędzie nie rejestrują dotknięć, ale środek działa', 'Nacisk etui, odrzucanie gestów lub problem z elektrodą krawędziową.', 'Zdejmij etui i powtórz powolne śledzenie krawędzi.'],
        ['Tylko szybki ruch jest pomijany', 'Ograniczanie zdarzeń przez przeglądarkę, niska liczba klatek lub odrywanie palca.', 'Ruszaj się powoli i porównaj z inną przeglądarką.'],
        ['Pojawiają się przypadkowe kropki bez dotykania', 'Dotyk fantomowy, wilgoć, zakłócenia od ładowarki lub uszkodzony panel.', 'Osusz ekran, odłącz ładowarkę, uruchom ponownie i powtórz.'],
      ],
    },
    { type: 'title', text: 'Jak zmierzyć obsługę wielodotyku', level: 3 },
    {
      type: 'paragraph',
      html: 'Obsługa wielodotyku to maksymalna liczba niezależnych kontaktów, które urządzenie może zgłosić jednocześnie. Telefon może śledzić pięć, dziesięć lub więcej kontaktów, podczas gdy niektóre tanie tablety, kioski, rękawice, warstwy zdalnego pulpitu lub przeglądarki wbudowane mogą zgłaszać mniej. Aktywny licznik pokazuje liczbę obecnie wykrywanych; licznik szczytowy przechowuje najwyższą wartość osiągniętą od ostatniego wyczyszczenia.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Gesty dwupunktowe', description: 'Potrzebne do przybliżania szczypnięciem, obrotu dwoma palcami, map, edytorów graficznych i lupy dostępności.' },
        { title: 'Trzy do pięciu dotknięć', description: 'Przydatne w grach rytmicznych, sterowaniu dzielonym, aplikacjach rysunkowych, klawiaturach fortepianowych i kreatywnych narzędziach tabletowych.' },
        { title: 'Panele dziesięciopunktowe', description: 'Powszechne w nowoczesnych telefonach i tabletach, ale filtrowanie przez przeglądarkę lub system operacyjny wciąż może zmniejszyć tę liczbę.' },
      ],
    },
    {
      type: 'tip',
      title: 'Najlepszy sposób na uniknięcie fałszywie niskiej liczby',
      html: 'Kładź palce jeden po drugim i trzymaj je nieruchomo przez sekundę. Jeśli położysz wszystkie palce naraz, niektóre systemy operacyjne mogą zinterpretować ten gest jako dotyk dłonią, zamiar przybliżenia lub nawigację systemową i stłumić część zestawu kontaktów.',
    },
    {
      type: 'proscons',
      title: 'Tester online a natywna aplikacja diagnostyczna',
      items: [
        { pro: 'Działa natychmiast bez instalowania czegokolwiek i bez nadawania szerokich uprawnień urządzenia.', con: 'Może pokazać tylko zdarzenia dotykowe udostępniane przez przeglądarkę i system operacyjny.' },
        { pro: 'Łatwy do udostępnienia serwisowi lub kupującemu, ponieważ wzór rysunku jest widoczny.', con: 'Nie może odczytać fabrycznych tabel kalibracji ani kodów błędów digitizera niskiego poziomu.' },
        { pro: 'Tryb pełnoekranowy obejmuje więcej użytecznego wyświetlacza niż normalna strona.', con: 'Paski systemowe, notche i chronione obszary gestów wciąż mogą rezerwować część pikseli.' },
      ],
    },
    { type: 'title', text: 'Najczęstsze przyczyny pomijanych dotknięć', level: 3 },
    {
      type: 'paragraph',
      html: 'Zły wynik testu dotykowego nie zawsze oznacza, że ekran jest zepsuty. Panele pojemnościowe polegają na stabilnym polu elektrycznym przechodzącym przez szkło, klej, folię, skórę i masę urządzenia. Wszystko, co zmienia to pole, może powodować przerwy, fałszywe dotknięcia lub słabe śledzenie wielodotyku. Dlatego testowanie w różnych warunkach ma znaczenie.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Digitizer', definition: 'Przezroczysta warstwa czujnika, która przekazuje współrzędne dotyku do urządzenia.' },
        { term: 'Martwa strefa', definition: 'Fizyczny obszar ekranu, w którym dotknięcia nie są wykrywane lub są wykrywane tylko sporadycznie.' },
        { term: 'Dotyk fantomowy', definition: 'Zdarzenie dotykowe zgłaszane przez urządzenie, gdy żaden palec celowo nie dotyka tego miejsca.' },
        { term: 'Odrzucanie dłoni', definition: 'Filtrowanie programowe ignorujące szeroki lub przypadkowy kontakt, szczególnie na tabletach i urządzeniach z rysikiem.' },
        { term: 'Częstotliwość próbkowania dotyku', definition: 'Jak często urządzenie skanuje warstwę dotykową. Wyższe wartości mogą sprawić, że rysowanie i gry będą bardziej responsywne.' },
      ],
    },
    {
      type: 'table',
      headers: ['Przyczyna', 'Typowa wskazówka', 'Szybkie sprawdzenie'],
      rows: [
        ['Folia ochronna', 'Martwy obszar podąża za pęcherzykiem, pęknięciem, krawędzią kurzu lub grubą szybą.', 'Zdejmij lub unieś folię tylko jeśli jest to bezpieczne i można ją wymienić.'],
        ['Wilgoć lub tłuszcz', 'Przypadkowe skoki, ślizgające się dotknięcia lub pomijane stuknięcia po deszczu, pocie lub sprayu czyszczącym.', 'Dokładnie osusz szkło i dłonie, a następnie przetestuj ponownie.'],
        ['Zakłócenia od ładowarki', 'Dotknięcia fantomowe występują po podłączeniu i znikają na baterii.', 'Odłącz ładowarkę lub użyj certyfikowanego zasilacza i kabla.'],
        ['Nacisk etui', 'Dotknięcia nie działają w pobliżu rogów lub zakrzywionych krawędzi.', 'Zdejmij etui i przetestuj tę samą krawędź ponownie.'],
        ['Uszkodzenie sprzętowe', 'Ten sam pas zawodzi po czyszczeniu, ponownym uruchomieniu i zdjęciu folii.', 'Udokumentuj wynik i skontaktuj się z serwisem.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gesture-tap-hold',
      title: 'Nacisk to nie to samo co dokładność dotyku',
      html: 'Większość ekranów dotykowych w telefonach i tabletach jest pojemnościowa, więc mocniejsze naciskanie nie powinno być wymagane. Jeśli miejsce działa tylko przy silnym nacisku, problemem może być słaby kontakt przez folię, uszkodzenie panelu, problem z taśmą flex lub filtrowanie programowe, a nie normalne zachowanie ekranu dotykowego.',
    },
    { type: 'title', text: 'Testowanie krawędzi, rogów i stref klawiatury', level: 3 },
    {
      type: 'paragraph',
      html: 'Wiele realnych problemów zaczyna się w obszarach intensywnie używanych: dolny rząd klawiatury, backspace, gesty nawigacyjne, pasek powiadomień, szybkie ustawienia, strefy kciuka w grach i rogi tabletów używane do skrótów rysunkowych. Użyj trybu pełnoekranowego przed oceną górnych i dolnych obszarów, ponieważ elementy sterujące przeglądarki mogą w przeciwnym razie zasłaniać część ekranu.',
    },
    {
      type: 'list',
      items: [
        'Narysuj prostokąt na szerokość jednego palca wewnątrz krawędzi wyświetlacza.',
        'Rysuj krótkie pionowe kreski nad rzędami klawiatury, gdzie zdarzają się pomijane litery.',
        'Przytrzymaj jeden kciuk w pozycji do gry i rysuj drugim palcem, aby przetestować konflikt kontaktów.',
        'Przetestuj w pobliżu portu ładowania najpierw bez podłączenia, a potem przy podłączonym zasilaniu, aby sprawdzić zakłócenia od uziemienia.',
        'Jeśli używasz rysika, przetestuj dotyk palcem osobno od rysika, ponieważ mogą korzystać z różnych ścieżek detekcji.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Gdy pełny ekran zmienia wynik',
      html: '<p>Jeśli ekran działa w trybie pełnoekranowym, ale nie w normalnym widoku przeglądarki, sprzęt prawdopodobnie nie jest jedynym czynnikiem. Paski adresu, gest "przeciągnij, aby odświeżyć", nawigacja systemowa i obsługa gestów przeglądarki mogą przechwytywać dotknięcia w pobliżu góry lub dołu widocznego obszaru.</p>',
    },
    { type: 'title', text: 'Jak udokumentować problem do naprawy lub gwarancji', level: 3 },
    {
      type: 'paragraph',
      html: 'W przypadku zgłoszenia gwarancyjnego spójność ma większe znaczenie niż pojedyncza spektakularna awaria. Wyczyść płótno, narysuj prostą siatkę i zrób zdjęcie lub nagranie ekranu, gdy ten sam fizyczny obszar odmawia rysowania. Zanotuj, czy telefon był ładowany, czy folia była założona i czy problem pojawia się po ponownym uruchomieniu.',
    },
    {
      type: 'summary',
      title: 'Przydatne dowody do zebrania',
      items: [
        'Czyste pełnoekranowe płótno pokazujące powtarzające się przerwy w tym samym miejscu.',
        'Szczytowa liczba wielodotyku osiągnięta przy ostrożnym ułożeniu kilku palców.',
        'Porównanie z etui i bez, z folią i bez, z ładowarką i bez oraz w rękawicach i bez.',
        'Model urządzenia, przeglądarka, wersja systemu operacyjnego oraz informacja, czy problem występuje również w aplikacjach.',
      ],
    },
    {
      type: 'message',
      title: 'Informacja o prywatności',
      html: 'Rysunek i liczniki są generowane po stronie klienta. Tester został zaprojektowany do natychmiastowej diagnostyki, a nie do logowania na koncie, zdalnej naprawy ani przesyłania wrażliwych wzorców interakcji z ekranem.',
    },
    { type: 'title', text: 'Lista kontrolna interpretacji wyników', level: 3 },
    {
      type: 'table',
      headers: ['Wynik', 'Interpretacja', 'Pewność'],
      rows: [
        ['Ciągłe pociągnięcia wszędzie', 'Warstwa dotykowa jest prawdopodobnie sprawna w obecnych warunkach.', 'Wysoka dla podstawowego dotyku palcem.'],
        ['Jeden powtarzalny pusty pas', 'Możliwe fizyczne uszkodzenie digitizera lub przeszkoda od folii.', 'Wysoka, jeśli powtarza się po czyszczeniu i ponownym uruchomieniu.'],
        ['Niski szczyt wielodotyku tylko w jednej przeglądarce', 'Ograniczenie przeglądarki, prywatności, webview lub obsługi gestów.', 'Średnia. Przetestuj w innej przeglądarce.'],
        ['Dotknięcia fantomowe podczas ładowania', 'Zakłócenia elektryczne, problem z uziemieniem lub wadliwa ładowarka.', 'Średnia do wysokiej, jeśli odłączenie rozwiązuje problem.'],
        ['Awaria tylko z folią ochronną', 'Grubość folii, szczelina klejowa, pęknięcie lub odstająca krawędź.', 'Wysoka, jeśli zdjęcie folii naprawia obszar.'],
      ],
    },
    {
      type: 'summary',
      title: 'Szybka ścieżka diagnostyczna',
      items: [
        'Narysuj powoli pełną siatkę.',
        'Zakreśl każdą przerwę, która się powtarza.',
        'Wyczyść płótno i powtórz na pełnym ekranie.',
        'Usuń zmienne etui lub folii, gdy to możliwe.',
        'Zmierz najwyższą jednoczesną liczbę dotknięć.',
        'Porównaj z inną przeglądarką lub aplikacją przed stwierdzeniem awarii sprzętowej.',
      ],
    },
  ],
  ui: {
    activeTouchesLabel: 'Aktywne dotknięcia',
    peakTouchesLabel: 'Szczyt wielodotyku',
    coverageLabel: 'Pokrycie płótna',
    statusReady: 'Rysuj gdziekolwiek, aby odkryć martwe strefy',
    statusDrawing: 'Wykryto dotknięcie',
    statusCleared: 'Płótno wyczyszczone',
    clearButton: 'Wyczyść płótno',
    fullscreenButton: 'Pełny ekran',
    exitFullscreenButton: 'Wyjdź z pełnego ekranu',
    canvasLabel: 'Płótno testowe ekranu dotykowego',
    unsupportedTouch: 'Zdarzenia dotykowe nie są dostępne w tej przeglądarce',
  },
};
