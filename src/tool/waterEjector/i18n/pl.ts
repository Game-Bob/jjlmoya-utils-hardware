import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterEjectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'wyrzutnik-wody-czyszczenie-glosnika';
const title = 'Wyrzutnik Wody do Czyszczenia Głośnika';
const description =
  'Odtwórz niski ton 165 Hz, aby pomóc wypchnąć wodę, kurz lub luźne zanieczyszczenia z głośników telefonów, tabletów i laptopów.';

const faqData = [
  {
    question: 'Jakiej częstotliwości użyć do wyrzucenia wody z głośnika?',
    answer:
      'Niski ton o wartości około 165 Hz to praktyczny punkt wyjścia, ponieważ widocznie porusza małymi membranami głośników bez polegania na przenikliwych wysokich częstotliwościach. Niektóre urządzenia reagują lepiej w zakresie od 145 Hz do 190 Hz, dlatego narzędzie zawiera wszystkie trzy ustawienia.',
  },
  {
    question: 'Czy ton dźwiękowy może usunąć całą wodę z telefonu?',
    answer:
      'Nie. Może pomóc wytrząsnąć krople z kratki głośnika lub komory akustycznej, ale nie wysuszy cieczy za uszczelkami, wewnątrz portów ani pod wyświetlaczem. Jeśli urządzenie zostało zanurzone, wyłącz je i postępuj zgodnie z instrukcjami suszenia producenta.',
  },
  {
    question: 'Czy to bezpieczne dla głośników?',
    answer:
      'Używaj krótkich sesji, zacznij poniżej maksymalnej głośności i zatrzymaj, jeśli usłyszysz trzeszczenie, grzechotanie lub zniekształcenia. Mały głośnik telefoniczny nie jest zaprojektowany do długiego odtwarzania basów z wysoką mocą, więc powtarzane krótkie cykle są bezpieczniejsze niż jeden długi impuls.',
  },
  {
    question: 'Dlaczego mój głośnik brzmi przytłumiony po zamoczeniu?',
    answer:
      'Warstewka wody dodaje masy i tłumienia membranie głośnika i może blokować otwory kratki. To redukuje wysokie tony, osłabia wyrazistość mowy i sprawia, że bas brzmi niewyraźnie, dopóki krople się nie poruszą lub nie odparują.',
  },
  {
    question: 'Czy powinienem użyć ryżu po zamoczeniu telefonu?',
    answer:
      'Ryż nie jest niezawodną metodą naprawczą i może pozostawić skrobię lub drobinki w portach. Użyj przepływu powietrza, chłonnej niestrzępiącej się szmatki i instrukcji producenta. Wyrzucanie dźwiękiem dotyczy tylko wylotu głośnika, nie całego urządzenia.',
  },
];

const howToData = [
  {
    name: 'Zdejmij etui i skieruj głośnik w dół',
    text: 'Zdejmij każde etui zakrywające kratkę, trzymaj urządzenie tak, aby grawitacja pomagała kroplom opuścić otwór głośnika, i trzymaj porty bez przeszkód.',
  },
  {
    name: 'Zacznij od standardowego ustawienia 165 Hz',
    text: 'Naciśnij Start i pozwól, aby ton działał przez 30 sekund. Ruch membrany może usunąć krople uwięzione w siatce kratki lub płytkiej komorze głośnika.',
  },
  {
    name: 'W razie potrzeby wypróbuj ustawienia delikatne lub głębokie',
    text: 'Jeśli dźwięk pozostaje przytłumiony, przetestuj 145 Hz lub 190 Hz w krótkim cyklu. Głośniki o różnych rozmiarach rezonują w różnych punktach.',
  },
  {
    name: 'Zatrzymaj, jeśli głośnik zniekształca dźwięk',
    text: 'Zmniejsz głośność lub natychmiast zatrzymaj, jeśli ton staje się szorstki, bzyczący lub mechanicznie przeciążony. Zniekształcenie oznacza, że przetwornik jest zbyt mocno obciążony.',
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

export const content: ToolLocaleContent<WaterEjectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Jak Działa Ton Wyrzutnika Wody', level: 2 },
    {
      type: 'paragraph',
      html: 'Głośnik telefonu to mała ruchoma membrana. Gdy odtwarzany jest niski ton, membrana porusza się tam i z powrotem wiele razy na sekundę. Przy <strong>165 Hz</strong> ten ruch odbywa się 165 razy na sekundę. Jeśli woda znajduje się na kratce lub jest uwięziona tuż przy wylocie akustycznym, poruszające się powietrze może przerwać napięcie powierzchniowe kropli i wypchnąć ją w stronę otworu.',
    },
    {
      type: 'paragraph',
      html: 'Proces jest mechaniczny, nie chemiczny. Dźwięk nie odparowuje cieczy i nie sprawia, że wewnętrzna elektronika staje się wodoodporna. Najlepiej rozumieć go jako kontrolowany cykl wibracji dla wylotu głośnika, przydatny, gdy mowa, powiadomienia lub muzyka brzmią przytłumione po deszczu, zachlapaniu, prysznicu lub szybkim opłukaniu.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '165 Hz', label: 'standardowa częstotliwość startowa', icon: 'mdi:sine-wave' },
        { value: '30 s', label: 'pierwszy krótki cykl czyszczenia', icon: 'mdi:timer-outline' },
        { value: '145-190 Hz', label: 'praktyczny zakres strojenia', icon: 'mdi:tune' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Co ton może, a czego nie może zrobić',
      badge: 'Zakres',
      icon: 'mdi:information',
      html: 'Ton może pomóc przesunąć luźne krople na ścieżce głośnika. Nie może usunąć cieczy z portów ładowania, tac SIM, mikrofonów, modułów aparatu, szwów klejowych ani przestrzeni pod wyświetlaczem.',
    },
    { type: 'title', text: 'Kiedy Używać', level: 2 },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Głośnik brzmi cicho, przytłumione lub bulgocząco po zachlapaniu.',
        'Jedna strona stereofonicznego głośnika telefonu brzmi słabiej niż druga.',
        'Kratka głośnika laptopa lub tabletu zebrała krople po czyszczeniu.',
        'Kurz lub kłaczki są widocznie luźne na kratce, a normalne odtwarzanie brzmi matowo.',
        'Urządzenie działa normalnie, ładuje się normalnie i nie pokazuje ostrzeżenia o cieczy w porcie.',
      ],
    },
    {
      type: 'tip',
      title: 'Najlepsza pozycja fizyczna',
      html: 'Skieruj kratkę głośnika w dół lub lekko w dół. Ton zapewnia ruch, ale grawitacja decyduje, gdzie trafi uwolniona kropla. Zdjęcie etui ma również znaczenie, ponieważ wiele etui tworzy płytką kieszonkę, która zatrzymuje wodę przy wylocie.',
    },
    {
      type: 'card',
      icon: 'mdi:cellphone-sound',
      title: 'Dlaczego głośniki telefonów są szybko dotknięte',
      html: 'Nowoczesne telefony używają kompaktowych przetworników o wysokim wychyleniu i malutkich kanałów akustycznych. Kropla, która byłaby nieszkodliwa na dużym głośniku biurkowym, może pokryć znaczną część kratki telefonu, zmieniając ciśnienie i tłumiąc membranę na tyle, że głosy brzmią odlegle.',
    },
    {
      type: 'table',
      headers: ['Objaw', 'Prawdopodobna przyczyna', 'Co wypróbować'],
      rows: [
        ['Stłumiona mowa', 'Warstewka wody na kratce', 'Uruchom 165 Hz przez 30 sekund, głośnik skierowany w dół'],
        ['Brzęczenie podczas tonu', 'Poruszająca się kropla lub przeciążony przetwornik', 'Zmniejsz głośność; zatrzymaj, jeśli brzęczenie nie ustępuje'],
        ['Jeden głośnik cichszy', 'Tylko jeden wylot jest zablokowany', 'Obróć urządzenie tak, aby ten wylot był skierowany w dół'],
        ['Brak dźwięku', 'Wyciszone wyjście, przekierowanie Bluetooth lub usterka sprzętowa', 'Sprawdź trasę audio przed powtórzeniem cykli'],
      ],
    },
    { type: 'title', text: 'Wybór Odpowiedniej Częstotliwości', level: 2 },
    {
      type: 'paragraph',
      html: 'Nie ma uniwersalnej magicznej liczby, ponieważ rozmiar głośnika, kształt kratki, konstrukcja wodoodpornej membrany i geometria etui różnią się. Powodem, dla którego <strong>165 Hz</strong> jest popularne, jest to, że jest wystarczająco niskie, aby stworzyć widoczne wychylenie stożka w wielu małych głośnikach, pozostając w zakresie, który większość urządzeń może odtworzyć głośno.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '145 Hz delikatny',
          description: 'Przydatny dla bardzo małych lub przeciążonych głośników, gdzie standardowy ton brzmi szorstko.',
          icon: 'mdi:leaf',
          points: ['Niższy ton', 'Mniej agresywny ruch', 'Dobra pierwsza próba'],
        },
        {
          title: '165 Hz standardowy',
          description: 'Zrównoważony punkt wyjścia dla telefonów, tabletów i wielu otworów głośnikowych laptopów.',
          icon: 'mdi:water-sync',
          highlight: true,
          points: ['Domyślne ustawienie', 'Silne wychylenie membrany', 'Najlepszy pierwszy cykl'],
        },
        {
          title: '190 Hz głęboki',
          description: 'Nieco wyższe pchnięcie, które może zadziałać, gdy konkretny głośnik rezonuje powyżej 165 Hz.',
          icon: 'mdi:waves',
          points: ['Mocniejsza wibracja', 'Przydatny drugi przebieg', 'Unikaj długich cykli'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Niskie częstotliwości kontra wysokie częstotliwości',
      items: [
        { pro: 'Niskie tony poruszają więcej powietrza i więcej membrany w małych głośnikach.', con: 'Mogą szybciej zniekształcić się przy maksymalnej głośności.' },
        { pro: 'Wysokie tony są łatwiejsze do usłyszenia przez niektóre kratki.', con: 'Zwykle poruszają mniej powietrza i mogą być nieprzyjemne lub niesłyszalne dla niektórych użytkowników.' },
        { pro: 'Krótki niski ton łatwo ocenić słuchem.', con: 'Nie powinien być zapętlany przez wiele minut bez przerw.' },
      ],
    },
    {
      type: 'message',
      title: 'Zasada strojenia częstotliwości',
      ariaLabel: 'Zasada strojenia częstotliwości',
      html: 'Jeśli głośnik brzmi czysto po jednym 30-sekundowym cyklu, zatrzymaj się. Więcej cykli nie jest rutyną konserwacyjną; są one tylko pomocą w odzyskaniu sprawności po dostaniu się cieczy lub zanieczyszczeń do otworu głośnika.',
    },
    { type: 'title', text: 'Bezpieczna Procedura Czyszczenia', level: 2 },
    {
      type: 'paragraph',
      html: 'Zacznij poniżej maksymalnej głośności systemu, szczególnie na laptopach i tabletach z większymi głośnikami. Zwiększaj tylko do momentu, gdy ton będzie wyraźnie słyszalny, a urządzenie lekko wibruje. Jeśli usłyszysz ostre grzechotanie, dźwięk skrobania lub nagły spadek głośności, zatrzymaj narzędzie i pozwól urządzeniu wyschnąć naturalnie.',
    },
    {
      type: 'list',
      icon: 'mdi:numeric',
      items: [
        'Odłącz słuchawki i głośniki Bluetooth, aby ton był odtwarzany przez mokry głośnik.',
        'Osusz zewnętrzną powierzchnię niestrzępiącą się szmatką przed odtwarzaniem dźwięku.',
        'Trzymaj wylot głośnika w dół i trzymaj dłoń z dala od kratki.',
        'Uruchom 30 sekund przy 165 Hz.',
        'Odczekaj minutę, przetestuj normalną mowę i powtórz tylko raz w razie potrzeby.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Nie używaj ciepła ani sprężonego powietrza',
      badge: 'Unikaj',
      icon: 'mdi:alert',
      html: 'Suszarki, piekarniki i sprężone powietrze pod wysokim ciśnieniem mogą wepchnąć wilgoć głębiej, odkształcić uszczelki lub uszkodzić membrany. Ton dźwiękowy jest łagodniejszy, ponieważ działa poprzez ruch głośnika już zaprojektowany w urządzeniu.',
    },
    {
      type: 'summary',
      title: 'Szybka lista kontrolna bezpieczeństwa',
      items: [
        'Krótkie cykle są lepsze niż długie ciągłe odtwarzanie.',
        'Zmniejsz głośność, jeśli ton bzyczy nieprzyjemnie.',
        'Zatrzymaj, jeśli urządzenie pokazuje ostrzeżenia o wykryciu cieczy.',
        'Wyrzucanie dźwiękiem pomaga tylko wylotowi głośnika, a nie całemu telefonowi.',
      ],
    },
    { type: 'title', text: 'Wodoodporność To Nie Wodoszczelność', level: 2 },
    {
      type: 'paragraph',
      html: 'Wiele telefonów reklamuje wodoodporność, ale ta klasyfikacja jest mierzona w określonych warunkach laboratoryjnych. Rzeczywiste narażenie na wodę obejmuje ruch, mydło, sól, ciepło, ciśnienie, wiek, uderzenia i zużyte uszczelki. Ton czyszczący głośnik nie przywraca uszczelnienia i nie potwierdza, że telefon jest bezpieczny do ładowania.',
    },
    {
      type: 'table',
      headers: ['Narażenie', 'Przydatność tonu głośnikowego', 'Dodatkowe działanie'],
      rows: [
        ['Lekki deszcz', 'Często pomocny, jeśli dźwięk jest stłumiony', 'Osusz zewnętrzną powierzchnię i uruchom jeden krótki cykl'],
        ['Zachlapanie czystą wodą', 'Pomocny dla kropli przy kratce', 'Trzymaj porty suche przed ładowaniem'],
        ['Woda z basenu lub morska', 'Ograniczona; mogą pozostać osady', 'Płucz tylko jeśli producent pozwala, a następnie skorzystaj z serwisu w razie potrzeby'],
        ['Mydło, napój lub kawa', 'Niska; lepkie osady zmieniają kratkę', 'Wyłącz i poszukaj porady dotyczącej czyszczenia'],
        ['Pełne zanurzenie', 'Niewystarczające', 'Postępuj zgodnie z procedurami awaryjnymi producenta'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Membrana', definition: 'Ruchoma powierzchnia wewnątrz głośnika, która popycha powietrze, tworząc dźwięk.' },
        { term: 'Rezonans', definition: 'Częstotliwość, przy której układ fizyczny porusza się wydajniej, ponieważ jego kształt i masa sprzyjają tej wibracji.' },
        { term: 'Napięcie powierzchniowe', definition: 'Siła, która sprawia, że kropla przylega do kratki lub membrany zamiast natychmiast spłynąć.' },
        { term: 'Komora akustyczna', definition: 'Maleńka wewnętrzna ścieżka, która prowadzi dźwięk głośnika od przetwornika do otworu urządzenia.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:volume-high',
      title: 'Dlaczego po czyszczeniu może brzmieć głośniej',
      html: 'Woda najpierw blokuje wysokie częstotliwości, ponieważ małe długości fal są łatwo rozpraszane przez przeszkody na kratce. Gdy krople się poruszą, spółgłoski, dźwięki powiadomień i szczegóły głosu często wracają, zanim bas zmieni się zauważalnie.',
    },
    { type: 'title', text: 'Czyszczenie z Kurzu i Zanieczyszczeń', level: 2 },
    {
      type: 'paragraph',
      html: 'Ta sama wibracja może poluzować suchy kurz, kłaczki lub proszek osiadły na siatce głośnika, ale nie powinna zastępować ostrożnego czyszczenia fizycznego. Jeśli zanieczyszczenia są lepkie, tłuste lub wbite w kratkę, sama wibracja może tylko je przesunąć. Użyj miękkiej suchej szczoteczki wokół zewnętrznej powierzchni i unikaj wkładania metalowych narzędzi do otworu.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Wibracja dźwiękowa',
          description: 'Dobra dla luźnych cząstek i kropli, które mogą się swobodnie poruszać.',
          icon: 'mdi:sine-wave',
          points: ['Bez kontaktu z kratką', 'Szybko', 'Najlepsze do niedawnych zachlapań'],
        },
        {
          title: 'Delikatne szczotkowanie zewnętrzne',
          description: 'Lepsze dla widocznych kłaczków lub kurzu na powierzchni siatki.',
          icon: 'mdi:brush',
          points: ['Działa bez głośnego dźwięku', 'Unika przeciążania głośnika', 'Wymaga ostrożności przy membranach'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Po pobycie w zapylonym otoczeniu',
      html: 'Uruchom ton przy umiarkowanej głośności, a następnie przetrzyj zewnętrzną kratkę suchą ściereczką z mikrofibry. Nie dodawaj alkoholu ani płynnego środka czyszczącego, chyba że producent urządzenia wyraźnie to zaleca dla danej powierzchni.',
    },
    { type: 'title', text: 'Uwagi Dotyczące Konkretnych Urządzeń', level: 2 },
    {
      type: 'paragraph',
      html: 'Telefony, tablety i laptopy umieszczają głośniki w różnych układach akustycznych. Dolny głośnik telefonu zwykle ma krótki wylot przy porcie ładowania, więc woda może szybko opuścić urządzenie, gdy kratka jest skierowana w dół. Tablet może używać dłuższego kanału bocznego, co oznacza, że ton może stopniowo poprawiać czystość dźwięku, a nie w jednym wyraźnym wyrzucie. Głośnik laptopa często emituje dźwięk przez klawiaturę lub szczelinę na spodzie, więc ciecz może znajdować się na warstwie tkaniny, plastikowej siatce lub zewnętrznej kratce, a nie bezpośrednio na przetworniku.',
    },
    {
      type: 'paragraph',
      html: 'W przypadku telefonu obróć urządzenie tak, aby głośnik, który brzmi przytłumione, był najniższym punktem. W przypadku tabletu wypróbuj zarówno orientację pionową, jak i poziomą, ponieważ zablokowany otwór może znajdować się na innej krawędzi niż oczekiwana. W przypadku laptopa trzymaj urządzenie na stabilnej, suchej powierzchni i unikaj przechylania cieczy w stronę klawiatury, zawiasów lub otworów wentylacyjnych. Ton powinien pomóc ścieżce głośnika; nie powinien zachęcać wody do przemieszczania się po urządzeniu.',
    },
    {
      type: 'table',
      headers: ['Typ urządzenia', 'Zalecana orientacja', 'Wskazówka dot. cyklu'],
      rows: [
        ['Telefon', 'Kratka głośnika w dół, etui zdjęte', 'Jeden 30-sekundowy cykl, następnie przetestuj dźwięk mowy'],
        ['Tablet', 'Zablokowana krawędź skierowana w dół', 'Zacznij od umiarkowanej głośności, ponieważ głośniki są większe'],
        ['Laptop', 'Normalna stabilna pozycja, chyba że ciecz znajduje się na zewnętrznej kratce', 'Użyj niższej głośności i zatrzymaj, jeśli obudowa mocno wibruje'],
        ['Smartwatch', 'Najpierw postępuj zgodnie z instrukcjami blokady wodnej producenta', 'Użyj tonu internetowego tylko wtedy, gdy przeglądarka może przekierować dźwięk do głośnika zegarka'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Sprawdzanie Bluetooth i trasowania audio',
      badge: 'Przed startem',
      icon: 'mdi:bluetooth-audio',
      html: 'Jeśli podłączone są bezprzewodowe słuchawki, system samochodowy lub zewnętrzny głośnik, ton może być odtwarzany przez niewłaściwe wyjście. Odłącz audio Bluetooth przed rozpoczęciem, a następnie potwierdź, że normalny dzwonek lub krótki film odtwarza się przez mokry głośnik.',
    },
    {
      type: 'card',
      icon: 'mdi:microphone-question',
      title: 'Dlaczego mikrofon jest inny',
      html: 'Port mikrofonu to ścieżka wejściowa z siatką ochronną i maleńkim czujnikiem ciśnienia, a nie membrana głośnika, która może wypychać powietrze na zewnątrz. Nie zakładaj, że ton wyrzutnika wody usunie przytłumione nagrania z mikrofonu. Pozwól urządzeniu wyschnąć i unikaj wtykania przedmiotów w otwór mikrofonu.',
    },
    { type: 'title', text: 'Głośność, Zniekształcenia i Komfort Słuchu', level: 2 },
    {
      type: 'paragraph',
      html: 'Ton wyrzutnika wody jest celowo powtarzalny i może być niekomfortowy w cichym pomieszczeniu. Celem nie jest maksymalna głośność; celem jest wystarczający ruch membrany, aby poruszyć krople. Jeśli ton jest bolesny, zmniejsz głośność lub odsuń urządzenie, zachowując wylot głośnika bez przeszkód. Komfort słuchu ma znaczenie, ponieważ udany cykl czyszczenia powinien trwać sekundy, nie długotrwałe narażenie.',
    },
    {
      type: 'paragraph',
      html: 'Zniekształcenie jest użytecznym sygnałem ostrzegawczym. Czysty niski ton brzmi stabilnie, nawet jeśli obudowa telefonu wibruje. Zły ton brzmi trzeszcząco, szorstko, metalicznie lub niestabilnie. Może się tak dziać, ponieważ woda się porusza, głośnik osiąga limit wychylenia lub wzmacniacz urządzenia przesterowuje. Zmniejszenie głośności to pierwsza korekta; powtarzanie głośniej to zły ruch.',
    },
    {
      type: 'list',
      icon: 'mdi:volume-medium',
      items: [
        'Używaj przycisków głośności urządzenia i suwaka głośności narzędzia razem; każde z nich może sprawić, że dźwięk będzie zbyt głośny.',
        'Unikaj przykładania głośnika do stołu, poduszki lub dłoni, ponieważ zablokowany przepływ powietrza zwiększa grzechotanie.',
        'Rób przerwy między cyklami, aby przetwornik i wzmacniacz nie były stale utrzymywane na wysokim poziomie.',
        'Jeśli normalna muzyka nadal trzeszczy po czasie schnięcia, potraktuj to jako objaw usterki, a nie problem z czyszczeniem.',
      ],
    },
    {
      type: 'message',
      title: 'Zasada komfortu',
      ariaLabel: 'Zasada komfortu',
      html: 'Jeśli ton wydaje się zbyt głośny dla twoich uszu, jest już głośniejszy niż potrzeba do pierwszej próby. Wyrzucanie wody zależy od ruchu i orientacji, a nie od karzącej głośności.',
    },
    { type: 'title', text: 'Rozwiązywanie Problemów po Tonie', level: 2 },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Poszukaj naprawy, jeśli pojawią się te objawy',
      badge: 'Stop',
      icon: 'mdi:close-octagon',
      html: 'Zatrzymaj wyrzucanie dźwiękiem, jeśli urządzenie nadmiernie się nagrzewa, wyłącza się, pokazuje ostrzeżenia o cieczy, nie ma dźwięku po sprawdzeniu trasowania lub głośnik grzechocze podczas normalnej mowy. Te objawy mogą wskazywać na uszkodzenia wykraczające poza krople na kratce.',
    },
    {
      type: 'table',
      headers: ['Rezultat po 30 sekundach', 'Znaczenie', 'Następny krok'],
      rows: [
        ['Czystszy dźwięk', 'Kropla prawdopodobnie się poruszyła', 'Zatrzymaj i pozwól urządzeniu odpocząć'],
        ['Niewielka poprawa', 'Pozostaje trochę wilgoci', 'Odczekaj, a następnie powtórz jeden krótki cykl'],
        ['Brak zmiany', 'Blokada może być głębsza lub lepka', 'Wysusz naturalnie i sprawdź trasowanie/ustawienia'],
        ['Pogorszenie zniekształceń', 'Przetwornik może być przeciążony lub uszkodzony', 'Zatrzymaj i zmniejsz głośność; rozważ serwis'],
      ],
    },
    {
      type: 'summary',
      title: 'Praktyczny wniosek',
      items: [
        'Użyj 165 Hz najpierw, ponieważ równoważy ruch i kompatybilność.',
        'Skieruj kratkę w dół i utrzymuj cykl krótki.',
        'Traktuj ton jako odzyskiwanie głośnika, a nie suszenie całego urządzenia.',
        'Wytyczne producenta dotyczące cieczy mają pierwszeństwo przed każdym narzędziem internetowym.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Gotowy do wyrzucania',
    statusPlaying: 'Ton aktywny',
    statusComplete: 'Cykl zakończony',
    frequencyLabel: 'Częstotliwość',
    volumeLabel: 'Głośność',
    durationLabel: 'Czas trwania',
    startButton: 'Uruchom wyrzutnik wody',
    stopButton: 'Zatrzymaj ton',
    hertzUnit: 'Hz',
    secondsShort: 's',
    presetGentle: 'Delikatny',
    presetStandard: '165 Hz',
    presetDeep: 'Głęboki',
    safetyTitle: 'Bezpieczeństwo przede wszystkim',
    safetyText: 'Zacznij poniżej maksymalnej głośności i zatrzymaj, jeśli głośnik trzeszczy lub zniekształca dźwięk.',
    bestResult: 'Najlepszy efekt',
    bestResultText: 'Zdejmij etui, skieruj głośnik w dół i uruchom jeden krótki cykl.',
  },
};
