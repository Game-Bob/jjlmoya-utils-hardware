import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseJitterAngleSnappingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-drgania-kata-myszy';
const title = 'Test Drgań i Prostowania Kąta Myszy';
const description =
  'Rysuj surowe ślady myszy online, aby wykryć drgania sensora, niestabilne śledzenie i prostowanie kąta lub predykcję, które sprawiają, że ruch staje się sztucznie prosty.';

const faqData = [
  {
    question: 'Czym są drgania myszy?',
    answer:
      'Drgania myszy to niepożądane trzęsienie lub zaszumienie w ścieżce kursora nawet wtedy, gdy dłoń porusza się płynnie. Mogą wynikać z zabrudzonego okienka sensora, złej powierzchni, wysokiego zachowania przy unoszeniu, szumu elektrycznego, niestabilności połączenia bezprzewodowego lub sensora, który ma trudności przy wybranym DPI.',
  },
  {
    question: 'Czym jest prostowanie kąta?',
    answer:
      'Prostowanie kąta, czasami nazywane predykcją, to funkcja korekcji, w której oprogramowanie układowe myszy próbuje przekształcić lekko niedoskonały ruch ludzki w bardziej proste linie poziome, pionowe lub ukośne. Niektórzy użytkownicy biurowi to lubią, ale wielu graczy i artystów woli surowy ruch bez predykcji.',
  },
  {
    question: 'Czy ten test może udowodnić, że sensor mojej myszy jest uszkodzony?',
    answer:
      'Nie może sprawdzić sensora elektrycznie, ale pokazuje ścieżkę ruchu, którą otrzymuje Twoja przeglądarka. Jeśli powtarzane płynne ruchy tworzą zaszumione punkty, nagłe odchylenia lub nienaturalnie proste segmenty, wynik jest użytecznym dowodem do rozwiązywania problemów z myszą, powierzchnią, DPI, połączeniem bezprzewodowym lub ustawieniami oprogramowania układowego.',
  },
  {
    question: 'Jak powinienem rysować, aby uzyskać najbardziej wiarygodny wynik?',
    answer:
      'Rysuj wolne linie ukośne, krzywe o średniej prędkości i długie poziome przeciągnięcia. Testuj ten sam ruch wiele razy. Drgania łatwiej zobaczyć w wolnych kontrolowanych liniach, podczas gdy prostowanie kąta łatwiej zauważyć, gdy ruch ukośny staje się podejrzanie prosty lub schodkowy.',
  },
];

const howToData = [
  {
    name: 'Wyczyść sensor i podkładkę pod mysz',
    text: 'Przed testowaniem usuń kurz lub włosy z okienka sensora i użyj stabilnej podkładki pod mysz lub powierzchni biurka.',
  },
  {
    name: 'Rysuj wolne linie ukośne',
    text: 'Przytrzymaj główny przycisk myszy i narysuj kilka ukośnych pociągnięć. Surowy sensor powinien pokazywać naturalną zmienność dłoni, a nie linię wymuszoną idealnie pod jednym kątem.',
  },
  {
    name: 'Rysuj płynne krzywe',
    text: 'Twórz okręgi, krzywe S i łuki. Drgania pojawiają się jako szorstkie, zaszumione punkty, które wyskakują poza zamierzoną krzywą.',
  },
  {
    name: 'Porównaj ustawienia DPI i powierzchni',
    text: 'Powtórz ten sam ruch przy różnych poziomach DPI, częstotliwościach odpytywania, ustawieniach unoszenia i powierzchniach, aby znaleźć, kiedy pojawia się problem.',
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

export const content: ToolLocaleContent<MouseJitterAngleSnappingTestUI> = {
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
      text: 'Test Drgań Myszy Online: Sprawdź Szum Sensora i Prostowanie Kąta',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dobry sensor myszy powinien podążać za Twoją dłonią bez dodawania widocznego szumu ani potajemnego poprawiania ścieżki. Gdy sensor jest zabrudzony, powierzchnia jest trudna do śledzenia, DPI jest zbyt wysokie dla sprzętu lub oprogramowanie układowe stosuje predykcję, ścieżka kursora może przestać być naturalna. Ten test drgań myszy pozwala rysować surowe ślady i sprawdzać pojedyncze punkty odczytu, aby problemy z sensorem stały się widoczne, a nie nieokreślone.',
    },
    {
      type: 'paragraph',
      html: 'Najbardziej użytecznym sposobem testowania jest prosty: rysuj kontrolowane linie i krzywe, a następnie patrz na kształt śladu. Zdrowy surowy sensor tworzy ścieżkę, która podąża za Twoim ruchem z drobnymi ludzkimi niedoskonałościami. Zaszumiony sensor tworzy szorstkie punkty, maleńkie skoki i nierówne drżenie. Mysz z prostowaniem kąta lub predykcją może sprawić, że ruch ukośny lub poziomy będzie wyglądał nienaturalnie prosto, jakby oprogramowanie układowe poprawiało Twoją dłoń.',
    },
    {
      type: 'title',
      text: 'Jak Wyglądają Drgania Myszy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Drgania myszy to nie to samo co normalne drżenie dłoni. Każdy rysuje lekko niedoskonałe linie. Drgania stają się podejrzane, gdy punkty odskakują od kierunku ruchu, mimo że dłoń porusza się wolno i stabilnie. Często wyglądają jak rozmyta krawędź wokół linii, małe boczne skoki lub ślad, który wydaje się chropowaty, a nie gładki.',
    },
    {
      type: 'table',
      headers: ['Wzorzec Śladu', 'Prawdopodobne Znaczenie', 'Co Wypróbować Następnie'],
      rows: [
        ['Małe przypadkowe skoki podczas wolnych linii', 'Szum sensora, zabrudzenie lub problem ze śledzeniem powierzchni', 'Wyczyść okienko sensora i wypróbuj inną podkładkę'],
        ['Drgania tylko przy wysokim DPI', 'Sensor lub oprogramowanie układowe ma trudności z tą czułością', 'Przetestuj ponownie przy 400, 800, 1600 i 3200 DPI'],
        ['Szorstki ruch tylko w trybie bezprzewodowym', 'Bateria, odległość odbiornika lub zakłócenia', 'Przysuń odbiornik bliżej i przetestuj z nową baterią'],
        ['Szum przy unoszeniu lub przechylaniu myszy', 'Odległość unoszenia lub nierówny kontakt z powierzchnią', 'Trzymaj mysz płasko i zmniejsz odległość unoszenia, jeśli dostępna'],
        ['Drgania na jednym biurku, ale nie na drugim', 'Problem z teksturą lub odbijaniem powierzchni', 'Użyj matowej podkładki zaprojektowanej dla sensorów optycznych'],
      ],
    },
    {
      type: 'title',
      text: 'Jak Wygląda Prostowanie Kąta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Prostowanie kąta różni się od drgań. Zamiast dodawać szum, usuwa naturalną zmienność. Jeśli narysujesz ukośną linię ręcznie, surowy sensor powinien zachować drobne ludzkie odchylenia. Z włączonym prostowaniem kąta linia może zablokować się w idealnie prostym kierunku poziomym, pionowym lub ukośnym. Może to ułatwić rysowanie na pulpicie, ale jest zwykle niepożądane przy celowaniu w grach rywalizacyjnych, pixel arcie, edycji zdjęć i każdym zadaniu, gdzie kursor powinien dokładnie odpowiadać dłoni.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Zachowanie surowego sensora',
          description: 'Ślad podąża za Twoją dłonią, uwzględniając małe naturalne krzywe i korekty. Linie ukośne nie są matematycznie doskonałe, chyba że Twój ruch był.',
        },
        {
          title: 'Zachowanie przy prostowaniu kąta',
          description: 'Ślad wygląda podejrzanie prosto na długich odcinkach, szczególnie w pobliżu typowych kątów, takich jak poziomy, pionowy czy 45 stopni.',
        },
        {
          title: 'Zachowanie przy drganiach',
          description: 'Ślad staje się zaszumiony, rozmyty lub kolczasty. Zamiast być zbyt prostym, wygląda niestabilnie i szorstko.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Jak Prawidłowo Testować Mysz',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Zacznij od czystego okienka sensora i sprawdzonej podkładki pod mysz',
        'Rysuj wolne linie ukośne od rogu do rogu i powtarzaj ten sam ruch kilka razy',
        'Rysuj okręgi i krzywe S, aby ujawnić drgania, które mogą nie wystąpić w liniach prostych',
        'Testuj przy wielu poziomach DPI, ponieważ niektóre sensory stają się głośniejsze przy bardzo wysokiej czułości',
        'Wyłącz funkcje oprogramowania producenta, takie jak prostowanie kąta, predykcja, dostrajanie powierzchni czy akceleracja, gdy to możliwe',
        'Porównaj tryb przewodowy i bezprzewodowy, jeśli mysz obsługuje oba',
        'Porównaj z inną myszą na tej samej powierzchni, aby oddzielić awarię myszy od problemów z powierzchnią',
      ],
    },
    {
      type: 'title',
      text: 'Interpretacja Wyników',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Narzędzie pokazuje wynik drgań, wynik prostowania kąta, prostoliniowość, średnie odchylenie i liczbę przechwyconych próbek. Te wartości najlepiej stosować porównawczo. Narysuj tę samą linię tym samym ruchem dłoni po zmianie jednej zmiennej: DPI, powierzchni, umiejscowienia odbiornika bezprzewodowego lub ustawienia oprogramowania układowego myszy. Jeśli wynik spada po zmianie powierzchni lub wyczyszczeniu sensora, znalazłeś prawdopodobną przyczynę.',
    },
    {
      type: 'table',
      headers: ['Wynik', 'Co Sugeruje', 'Praktyczne Działanie'],
      rows: [
        ['Niskie drgania i niskie prostowanie', 'Ścieżka sensora wygląda naturalnie i stabilnie', 'Zachowaj obecne ustawienia i używaj ich jako punktu odniesienia'],
        ['Wysokie drgania, niskie prostowanie', 'Mysz śledzi, ale ścieżka jest zaszumiona', 'Wyczyść sensor, zmień powierzchnię, obniż DPI i przetestuj ponownie'],
        ['Niskie drgania, wysokie prostowanie', 'Ścieżka może być korygowana przez oprogramowanie układowe', 'Poszukaj opcji predykcji lub prostowania kąta w oprogramowaniu myszy'],
        ['Wysokie drgania i wysokie prostowanie', 'Ślad jest niestabilny i może być nadmiernie korygowany', 'Zresetuj profile oprogramowania myszy i przetestuj ponownie od ustawień domyślnych'],
        ['Wyniki zmieniają się znacznie w zależności od powierzchni', 'Sensorowi nie odpowiada dana tekstura lub odbijanie powierzchni', 'Użyj powierzchni z najczystszym śladem'],
      ],
    },
    {
      type: 'title',
      text: 'DPI, Częstotliwość Odpytywania i Drgania Myszy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wysokie DPI nie oznacza automatycznie lepszego śledzenia. Niektóre myszy działają czysto przy umiarkowanym DPI, ale ujawniają więcej widocznego szumu przy bardzo wysokim DPI, ponieważ maleńkie błędy sensora są wzmacniane do większego ruchu kursora. Częstotliwość odpytywania może również zmienić odczucie śladu. Wyższa częstotliwość odpytywania daje częstsze aktualizacje, ale nie naprawi zabrudzonego sensora, złej powierzchni ani predykcji oprogramowania układowego.',
    },
    {
      type: 'paragraph',
      html: 'Dla uczciwego porównania utrzymuj podobny ruch dłoni i zmieniaj jedno ustawienie na raz. Na przykład narysuj tę samą ukośną linię przy 800 DPI, 1600 DPI i 3200 DPI. Jeśli ścieżka staje się rozmyta tylko przy najwyższej wartości, najlepszym rozwiązaniem może być obniżenie DPI i dostosowanie czułości w grze zamiast wymiany myszy.',
    },
    {
      type: 'title',
      text: 'Częste Przyczyny Drgań Sensora Myszy',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Kurz, włosy lub tłuszcz w pobliżu okienka sensora optycznego',
        'Błyszczące, odbijające, przezroczyste lub nierówne powierzchnie',
        'Bardzo wysokie ustawienia DPI, które wzmacniają małe błędy sensora',
        'Niski poziom baterii lub zakłócenia bezprzewodowe',
        'Odbiornik umieszczony daleko od myszy lub za metalową obudową komputera',
        'Filtry oprogramowania układowego, kalibracja powierzchni lub profile oprogramowania producenta',
        'Problemy z odległością unoszenia, gdy mysz jest przechylana lub szybko poruszana',
        'Zużyta lub uszkodzona soczewka sensora po intensywnym użytkowaniu',
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego Gracze i Projektanci Się Tym Interesują',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'W grach drgania mogą utrudniać mikroregulacje, ponieważ celownik nie zatrzymuje się dokładnie tam, gdzie zamierzała dłoń. Prostowanie kąta może być równie problematyczne: może pomagać w rysowaniu prostych linii na pulpicie, ale może również zniekształcać małe korekty celowania i sprawiać, że śledzenie ukośne wydaje się filtrowane. Dla projektantów, ilustratorów, użytkowników CAD i edytorów zdjęć korekcja sensora może sprawić, że ruch odręczny będzie mniej szczery i trudniejszy do kontrolowania.',
    },
    {
      type: 'paragraph',
      html: 'Mysz nie potrzebuje idealnego śladu, aby być dobra. Ruch ludzki jest z natury niedoskonały. Sygnały ostrzegawcze są powtarzalne: ta sama powierzchnia zawsze tworzy zaszumione punkty, to samo DPI zawsze tworzy skoki, lub ta sama mysz zawsze sprawia, że przekątne są podejrzanie proste, podczas gdy inna mysz tego nie robi.',
    },
    {
      type: 'title',
      text: 'Przed Kupnem Nowej Myszy',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Ostrożnie wyczyść okienko sensora przy wyłączonej myszy',
        'Wypróbuj inną podkładkę, najlepiej matową materiałową lub hybrydową powierzchnię gamingową',
        'Obniż DPI i zrekompensuj czułością w oprogramowaniu',
        'Wyłącz prostowanie kąta, predykcję, precyzję wskaźnika i opcje akceleracji',
        'Przysuń odbiornik bezprzewodowy bliżej za pomocą kabla przedłużacza USB',
        'Zaktualizuj lub zresetuj profil oprogramowania układowego myszy, jeśli oprogramowanie producenta to obsługuje',
        'Przetestuj inną mysz na tym samym komputerze i powierzchni dla porównania',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Użyteczna zasada diagnostyczna',
      html: '<p>Pojedynczy dziwny ślad nie wystarczy. Powtarzalny wzorzec jest tym, co się liczy. Jeśli drgania lub prostowanie kąta pojawiają się wielokrotnie przy tych samych ustawieniach, a następnie znikają po wyczyszczeniu sensora, zmianie powierzchni, obniżeniu DPI lub wyłączeniu predykcji, znalazłeś najbardziej prawdopodobną przyczynę.</p>',
    },
  ],
  ui: {
    badge: 'Surowy Ślad Sensora',
    canvasLabel: 'Obszar rysowania do testu drgań i prostowania kąta myszy',
    canvasHint: 'Rysuj wolne przekątne, okręgi i krzywe. Poszczególne punkty sensora pozostają widoczne, aby nieregularne śledzenie było łatwe do zauważenia.',
    pointerPrompt: 'Przytrzymaj i rysuj wewnątrz obszaru rysowania',
    samples: 'Próbki',
    jitterScore: 'Drgania',
    snappingScore: 'Prostowanie',
    straightness: 'Prostoliniowość',
    rawDeviation: 'Średnie odchyl.',
    statusIdle: 'Rysuj wewnątrz pola, aby przechwycić surowy ruch myszy',
    statusHealthy: 'Ślad wygląda naturalnie i stabilnie w ostatnich próbkach',
    statusJitter: 'Wykryto zaszumiony ruch w ostatnim śladzie',
    statusSnapping: 'Wykryto podejrzanie prosty ruch',
    statusMixed: 'Zarówno drgania, jak i możliwe prostowanie kąta występują w śladzie',
    reset: 'Resetuj',
    holdShift: 'Wskazówka: testuj jedną zmianę na raz. DPI, powierzchnia, tryb bezprzewodowy i ustawienia predykcji mogą zmienić ślad.',
    sensitivity: 'Czułość detekcji',
    low: 'stabilny',
    high: 'ścisły',
    traceLog: 'Zdarzenia śladu',
    emptyLog: 'Narysuj kilka kontrolowanych pociągnięć, aby uruchomić dziennik zdarzeń.',
    jitterEvent: 'drgania',
    snappingEvent: 'prostowanie kąta',
    combinedEvent: 'drgania i prostowanie kąta',
    cleanEvent: 'czysty ślad',
    pxUnit: 'px',
    percentUnit: '%',
  },
};
