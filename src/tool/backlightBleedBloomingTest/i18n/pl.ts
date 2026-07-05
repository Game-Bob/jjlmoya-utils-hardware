import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BacklightBleedBloomingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-wyciekow-podswietlenia-blooming';
const title = 'Test Wycieków Podświetlenia i Bloomingu';
const description =
  'Uruchom test wycieków podświetlenia na czysto czarnym pełnym ekranie oraz test bloomingu z przeciąganym białym okręgiem dla OLED, Mini LED, IPS, VA, monitorów, laptopów i telewizorów.';

const faqData = [
  {
    question: 'Jak przetestować wycieki podświetlenia online?',
    answer:
      'Wyłącz światła w pokoju, ustaw jasność na maksimum, wyczyść ekran, otwórz test czystej czerni na pełnym ekranie, poczekaj aż kursor zniknie i sprawdź krawędzie oraz rogi pod kątem stałych wycieków światła.',
  },
  {
    question: 'Jaka jest różnica między wyciekiem podświetlenia a glow IPS?',
    answer:
      'Wyciek podświetlenia to zazwyczaj stała jasna plama przy ramce spowodowana naciskiem panelu lub niedoskonałym montażem. Glow IPS zmienia się mocno wraz z kątem widzenia i pozycją oczu, zwłaszcza w rogach.',
  },
  {
    question: 'Jak wygląda blooming na telewizorze lub monitorze Mini LED?',
    answer:
      'Blooming to widoczna poświata wokół jasnego obiektu na czarnym tle. Pojawia się, gdy strefa lokalnego przyciemniania oświetla większy obszar niż sam obiekt.',
  },
  {
    question: 'Czy panele OLED mogą mieć wycieki podświetlenia?',
    answer:
      'Panele OLED nie używają tradycyjnego podświetlenia, więc nie powinny pokazywać wycieków światła typowych dla LCD. Mogą jednak wykazywać problemy z jednolitością w pobliżu czerni, zabarwienia, pionowe pasy lub podniesioną czerń z powodu ustawień źródła lub wyświetlacza.',
  },
  {
    question: 'Czy powinienem zwrócić monitor z wyciekiem światła?',
    answer:
      'Decyzja o zwrocie zależy od nasilenia, typu panelu, ceny i polityki gwarancyjnej. Widoczny jasny róg podczas normalnego oglądania filmów lub grania jest poważniejszy niż słaba plama widoczna tylko na zdjęciu z długim czasem naświetlania.',
  },
];

const howToData = [
  {
    name: 'Przygotuj pomieszczenie',
    text: 'Wyłącz lampy, zasłoń zasłony, wyczyść ekran i pozwól oczom przyzwyczaić się przez minutę, aby kurz i odbicia nie wyglądały jak wady panelu.',
  },
  {
    name: 'Zwiększ jasność wyświetlacza',
    text: 'Ustaw jasność na 100 procent lub na tryb HDR, który chcesz sprawdzić. Wyłącz agresywne czujniki światła otoczenia podczas testowania.',
  },
  {
    name: 'Uruchom test czerni',
    text: 'Uruchom tryb wycieku podświetlenia. Strona przechodzi w tryb pełnoekranowy i pokazuje dokładną czerń. Sprawdź ramkę, rogi i wszelkie stałe plamy.',
  },
  {
    name: 'Uruchom test bloomingu',
    text: 'Uruchom tryb lokalnego przyciemniania, a następnie przeciągnij białe koło po ekranie. Obserwuj poświaty, opóźnione przyciemnianie, strefy w kształcie siatki i podniesioną czerń.',
  },
  {
    name: 'Wyjdź czysto',
    text: 'Naciśnij Escape, aby opuścić natywny tryb pełnoekranowy. Interfejs konfiguracji powraca, a stan testu zostaje zresetowany.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<BacklightBleedBloomingTestUI> = {
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
      text: 'Test Wycieków Podświetlenia Online: Na Co Zwrócić Uwagę na Nowym Monitorze lub Telewizorze',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Test wycieków podświetlenia online</strong> jest najbardziej przydatny w okresie zwrotu nowego monitora, laptopa gamingowego lub telewizora. Test pokazuje pole pełnoekranowe <code>#000000</code> wygenerowane przez przeglądarkę, dzięki czemu podświetlenie LCD jest jedynym możliwym źródłem niepożądanego światła. Jeśli panel, stos dyfuzorów, nacisk ramki lub montaż przepuszczają światło, zazwyczaj widać to jako jaśniejsze rogi, zachmurzone krawędzie lub plamy pozostające w tej samej fizycznej pozycji.',
    },
    {
      type: 'paragraph',
      html: 'Korzystaj z testu z realistycznymi oczekiwaniami. Panele LCD potrzebują podświetlenia, a bardzo małe różnice mogą być normalne, szczególnie w budżetowych wyświetlaczach IPS i VA. Praktyczne pytanie nie brzmi, czy zdjęcie telefonem z długim czasem naświetlania może wyolbrzymić plamę. Pytanie brzmi, czy wyciek światła jest widoczny gołym okiem podczas ciemnych filmów, ekranów ładowania gier, scen nocnych, czarnych tłach pulpitu lub filmów z czarnymi pasami.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Zrób to przed oceną panelu',
      badge: 'Konfiguracja',
      html: 'Wyłącz światła w pokoju, wyczyść szkło, ustaw jasność na 100 procent, wyłącz czujniki światła otoczenia i poczekaj kilka sekund, aż oczy się przyzwyczają. Odbicia, odciski palców i kursor myszy mogą tworzyć fałszywie pozytywne wyniki podczas inspekcji jednolitości czerni.',
    },
    {
      type: 'list',
      items: [
        'Sprawdź górne i dolne krawędzie, gdzie nacisk ramki często tworzy stałe poświaty',
        'Sprawdź wszystkie cztery rogi pod kątem trójkątnych lub półksiężycowatych wycieków światła',
        'Porusz lekko głową, aby oddzielić poświatę zależną od kąta widzenia od stałego wycieku',
        'Rób notatki najpierw oczami, ponieważ aparaty mogą prześwietlać czarne ekrany',
        'Przetestuj ponownie po rozgrzaniu panelu przez 15 do 30 minut, jeśli wynik jest graniczny',
      ],
    },
    {
      type: 'title',
      text: 'Wyciek Podświetlenia, Glow IPS, Clouding i Jednolitość Czerni',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Problem', 'Co widzisz', 'Jak się zachowuje', 'Najczęstsze panele'],
      rows: [
        ['Wyciek podświetlenia', 'Stała jasna plama przy krawędzi lub rogu', 'Pozostaje w tym samym miejscu przy ruchu głową', 'IPS, VA, TN LCD'],
        ['Glow IPS', 'Mleczna poświata z rogów na ciemnych obrazach', 'Zmienia się mocno z kątem widzenia i odległością', 'IPS LCD'],
        ['Clouding', 'Duże nierówne zachmurzone obszary na czerni', 'Zazwyczaj stałe, czasem redukowane niższą jasnością', 'Telewizory i monitory LCD edge-lit'],
        ['Zgniatanie czerni VA', 'Ciemne detale znikają lub rozmazują się w ruchu', 'Zależy od treści i przejścia pikseli', 'VA LCD'],
        ['Pasmowanie near-black OLED', 'Pionowe lub poziome pasy w pobliżu czerni', 'Widoczne na szarości bliskiej czerni, nie na czystej czerni', 'OLED'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Najczęstszym błędem jest nazywanie każdego artefaktu w ciemnym pomieszczeniu wyciekiem podświetlenia. <strong>Glow IPS</strong> jest optyczny: staje się silniejszy, gdy siedzisz blisko, patrzysz na panel poza osią lub oglądasz rogi pod ostrym kątem. Prawdziwy wyciek podświetlenia jest mechaniczny lub montażowy: pozostaje przy tej samej powierzchni ramki, nawet jeśli zmienia się pozycja oczu. To rozróżnienie jest ważne, ponieważ wielu sprzedawców traktuje poważne wycieki inaczej niż normalny glow IPS.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'IPS',
          description: 'Szerokie kąty widzenia, częsta poświata w rogach i widoczne wycieki, jeśli ramka naciska panel nierównomiernie.',
          points: ['Najlepiej sprawdzać z normalnej odległości siedzenia', 'Glow zmienia się z pozycją głowy', 'Wycieki przy krawędziach mogą mieć znaczenie gwarancyjne przy poważnych przypadkach'],
        },
        {
          title: 'VA',
          description: 'Wyższy kontrast natywny, zazwyczaj mniej poświaty typu IPS, ale może pokazywać clouding i wolne ciemne przejścia.',
          points: ['Czerń wygląda głębiej niż IPS', 'Jednolitość może różnić się między egzemplarzami', 'Blooming pojawia się na modelach z lokalnym przyciemnianiem'],
        },
        {
          title: 'OLED',
          description: 'Brak podświetlenia LCD, więc czysta czerń powinna być wyłączona, ale jednolitość w pobliżu czerni i zabarwienie wciąż mają znaczenie.',
          points: ['Czysta czerń powinna znikać w ciemnym pomieszczeniu', 'Testuj slajdy szarości osobno pod kątem pasmowania', 'Nie myl podniesionej czerni źródła z wyciekiem panelu'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Jak Przeprowadzić Wiarygodny Test Czystej Czerni',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tryb testu czerni celowo usuwa normalny interfejs. Po uruchomieniu panel szklany znika, zdarzenia wskaźnika są wyłączane w interfejsie konfiguracji, strona żąda natywnego trybu pełnoekranowego, a warstwa testowa używa dokładnej czerni. Po dwóch sekundach bez ruchu myszy kursor jest ukrywany, aby nie tworzył białego punktu odniesienia ani nie zakłócał inspekcji w ciemnym pomieszczeniu.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '#000000', label: 'kolor tła testu' },
        { value: '2 s', label: 'czas bezczynności kursora' },
        { value: '100%', label: 'zalecana jasność' },
        { value: '0', label: 'zasoby zewnętrzne w trybie testu' },
      ],
    },
    {
      type: 'summary',
      title: 'Lista kontrolna testu czerni',
      items: [
        'Użyj natywnej rozdzielczości i wyłącz powiększenie przeglądarki, jeśli wyświetlacz dziwnie skaluje',
        'Ustaw jasność SDR wystarczająco wysoko, aby ujawnić wady, lub przetestuj HDR w dokładnym trybie, którego planujesz używać',
        'Sprawdź najpierw z normalnej pozycji oglądania, potem z nieco większej odległości',
        'Nie oceniaj na podstawie zdjęcia z telefonu, chyba że ekspozycja jest zablokowana i przypomina to, co widzą oczy',
        'Naciśnij Escape, aby opuścić tryb pełnoekranowy i powtórz test po zmianie ustawień monitora',
      ],
    },
    {
      type: 'tip',
      title: 'Zdjęcia z aparatu mogą sprawić, że dobre panele wyglądają fatalnie',
      html: 'Automatyczna ekspozycja telefonu próbuje rozjaśnić czarny ekran, co wyolbrzymia słabe poświaty i może zmienić normalne zachowanie LCD w dramatyczny obraz. Jeśli potrzebujesz dowodów gwarancyjnych, zablokuj ekspozycję ręcznie i dołącz notatkę opisującą, czy problem jest widoczny podczas rzeczywistej treści.',
    },
    {
      type: 'title',
      text: 'Test Bloomingu z Lokalnym Przyciemnianiem dla Wyświetlaczy Mini LED i FALD',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tryb <strong>testu bloomingu monitora</strong> umieszcza czysto białe koło na czysto czarnym tle. Na Mini LED, LCD FALD lub telewizorze z lokalnym przyciemnianiem ten mały obiekt zmusza jedną lub więcej stref podświetlenia do rozjaśnienia, podczas gdy sąsiednie strefy próbują pozostać czarne. Jeśli algorytm przyciemniania, liczba stref, dyfuzor lub kontrast panelu nie mogą odizolować światła, widzisz poświatę wokół koła.',
    },
    {
      type: 'paragraph',
      html: 'Przeciąganie koła jest ważne. Statyczny blooming to tylko część historii. Ruchomy punkt ujawnia opóźnienie przyciemniania, przejścia stref, pompowanie, zgniecione pola gwiezdne, podniesione napisy i zachowanie w kształcie siatki. Dobry system lokalnego przyciemniania powinien utrzymywać obiekt jasnym, minimalizując zamglenie wokół niego i unikając opóźnionych jasnych plam po przesunięciu koła.',
    },
    {
      type: 'table',
      headers: ['Artefakt', 'Na co zwrócić uwagę', 'Prawdopodobne wyjaśnienie'],
      rows: [
        ['Poświata', 'Miękka poświata wokół białego koła', 'Strefa lokalnego przyciemniania jest większa niż jasny obiekt'],
        ['Siatka stref', 'Kwadratowe lub prostokątne bloki pojawiają się wokół ruchu', 'Niska liczba stref lub widoczny układ Mini LED'],
        ['Opóźnienie przyciemniania', 'Jasna plama podąża za kołem z opóźnieniem', 'Algorytm reaguje wolno na ruch'],
        ['Podniesienie czerni', 'Cały ekran staje się szary, gdy pojawia się koło', 'Globalne przyciemnianie lub słaba kontrola kontrastu'],
        ['Bloom napisów', 'Duże zamglenie wokół małego białego tekstu lub UI', 'Agresywna jasność przy ograniczonej liczbie stref lokalnych'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:television-ambient-light',
      title: 'Najlepszy przypadek użycia',
      html: 'Podłącz laptopa lub konsolę do drogiego telewizora, którego faktycznie używasz, otwórz ten tester lokalnego przyciemniania w przeglądarce i przeciągnij punkt po dokładnym rozmiarze ekranu. Mały osadzony podgląd nie może obciążyć stref lokalnego przyciemniania tak, jak pełny ekran w czerni i bieli.',
    },
    {
      type: 'title',
      text: 'Oczekiwania Względem Typów Paneli: OLED, Mini LED, IPS i VA',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Co każda technologia robi dobrze, a co źle',
      items: [
        {
          pro: 'OLED wyłącza poszczególne piksele dla prawdziwej czerni i nie powinien pokazywać wycieków podświetlenia LCD.',
          con: 'OLED może pokazywać pasmowanie near-black, zabarwienia, automatyczne ograniczanie jasności i ryzyko wypalenia pod statyczną treścią.',
        },
        {
          pro: 'Mini LED może osiągnąć wysoką jasność HDR i zmniejszyć zamglenie na dużych obszarach w porównaniu z LCD edge-lit.',
          con: 'Mini LED wciąż używa stref, więc małe jasne obiekty mogą tworzyć blooming, gdy liczba stref lub jakość algorytmu są ograniczone.',
        },
        {
          pro: 'IPS jest stabilny pod względem kolorów i kąta widzenia, co jest przydatne przy pracy biurkowej i wspólnym oglądaniu.',
          con: 'Glow IPS i wycieki przy krawędziach to częste skargi w ciemnych scenach, zwłaszcza przy siedzeniu blisko.',
        },
        {
          pro: 'VA często ma znacznie lepszy kontrast natywny niż IPS i może wyglądać głębiej w ciemnych pomieszczeniach.',
          con: 'VA może pokazywać ciemne rozmazywanie, clouding lub blooming w wersjach z lokalnym przyciemnianiem.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Wyciek podświetlenia', definition: 'Niepożądane światło wydostające się przez stos LCD, zwykle w pobliżu ramki, widoczne na czarnych obrazach.' },
        { term: 'Blooming', definition: 'Poświata wokół jasnego obiektu spowodowana strefami lokalnego przyciemniania oświetlającymi większy obszar niż obiekt.' },
        { term: 'Glow IPS', definition: 'Zależne od kąta mleczne rozjaśnienie w ciemnych scenach na panelach IPS.' },
        { term: 'FALD', definition: 'Full Array Local Dimming, lokalne przyciemnianie pełnej matrycy, gdzie podświetlenie LCD jest podzielone na niezależnie sterowane strefy.' },
        { term: 'Mini LED', definition: 'Podświetlenie LCD wykorzystujące wiele małych diod LED w celu zwiększenia liczby stref i jasności HDR.' },
        { term: 'Jednolitość czerni', definition: 'Jak równomiernie wyświetlacz odwzorowuje czarną lub prawie czarną treść na całej powierzchni ekranu.' },
      ],
    },
    {
      type: 'title',
      text: 'Kiedy Wada Jest Wystarczająco Poważna, Aby Zwrócić',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Sygnały ostrzegawcze w okresie zwrotu',
      badge: 'Gwarancja',
      html: 'Rozważ szybkie udokumentowanie problemu, jeśli jasny róg jest widoczny z normalnej odległości siedzenia, ta sama plama rozprasza Cię w filmach lub grach, lokalne przyciemnianie tworzy wyraźne poświaty wokół napisów lub drogi wyświetlacz HDR działa gorzej niż typowe recenzje dla tego samego modelu.',
    },
    {
      type: 'paragraph',
      html: 'Sprawiedliwa decyzja wykorzystuje rzeczywistą treść i klasę produktu. Tani biurowy monitor IPS może mieć lekką poświatę w rogach, która jest normalna dla tej klasy. Monitor Mini LED premium lub telewizor z wyższej półki powinien kontrolować poziomy czerni i blooming znacznie lepiej. Jeśli wada jest oczywista w filmach z czarnymi pasami, ciemnych menu gier, scenach kosmicznych lub pracy biurkowej, to nie jest tylko ciekawostka laboratoryjna.',
    },
    {
      type: 'list',
      items: [
        'Sprawdź tę samą treść na innym wyświetlaczu, aby wykluczyć źródło',
        'Zresetuj ustawienia obrazu przed założeniem, że panel jest wadliwy',
        'Wypróbuj lokalne przyciemnianie niskie, średnie i wysokie, ponieważ algorytmy różnią się w zależności od trybu',
        'Zanotuj jasność, tryb HDR, tryb lokalnego przyciemniania i odległość oglądania w notatkach',
        'Przy zwrocie opisz, co widzą Twoje oczy, zamiast wysyłać tylko prześwietlone zdjęcia',
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego Ten Test Używa Kodu Zamiast Wideo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pliki wideo mogą wprowadzać artefakty kompresji, pracę dekodowania przeglądarki, buforowanie, konwersję zakresu kolorów i zmiany w tempie klatek. Test wad panelu nie powinien zależeć od pliku MP4. To narzędzie używa tylko HTML i CSS po stronie klienta dla stanów testowych: dokładnej czerni dla tła i dokładnej bieli dla poruszającego się koła. To utrzymuje niskie obciążenie i unika aktywności sieciowej po załadowaniu strony.',
    },
    {
      type: 'paragraph',
      html: 'Pozycja koła bloomingu jest stosowana przez <code>requestAnimationFrame</code>, który synchronizuje aktualizacje wizualne z pętlą odświeżania przeglądarki. Dane wejściowe wskaźnika, myszy i dotyku aktualizują współrzędne docelowe, a następnie następna klatka animacji przesuwa białe koło. To sprawia, że przeciąganie jest płynne na monitorach o wysokim odświeżaniu, tabletach i telefonach OLED bez wykonywania niepotrzebnej pracy przy każdym surowym zdarzeniu wejściowym.',
    },
    {
      type: 'message',
      title: 'Uwaga dotycząca prywatności i wydajności',
      ariaLabel: 'Uwaga dotycząca prywatności i wydajności',
      html: 'Aktywne stany testowe nie potrzebują śledzenia, filmów, zdalnych obrazów ani przesyłania pomiarów. Są celowo proste, aby starsze laptopy, przeglądarki TV i konfiguracje salonowe mogły obciążać panel wyświetlacza, a nie CPU.',
    },
    {
      type: 'title',
      text: 'Rozwiązywanie Problemów z Nieprawidłowymi Wynikami',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Objaw podczas testu', 'Możliwa przyczyna', 'Co wypróbować'],
      rows: [
        ['Czarny ekran nie jest naprawdę czarny', 'Ograniczony zakres RGB, podniesione ustawienie czerni, mapowanie tonów HDR lub nakładka przeglądarki', 'Ustaw pełne wyjście RGB, wyłącz dynamiczny kontrast i upewnij się, że żaden filtr nocny systemu nie jest aktywny'],
        ['Kursor myszy pozostaje widoczny', 'Ruch zresetował licznik bezczynności lub przeglądarka na chwilę zablokowała ukrywanie kursora', 'Przestań poruszać myszą na dwie sekundy lub użyj pilota/klawiatury'],
        ['Tryb pełnoekranowy nie uruchamia się', 'Przeglądarka odmówiła pełnego ekranu poza bezpośrednim kliknięciem lub ograniczenie przeglądarki TV', 'Naciśnij ponownie przycisk startu lub użyj skrótu pełnego ekranu przeglądarki'],
        ['Blooming zmienia się między trybami', 'Ustawienie lokalnego przyciemniania zmienia zachowanie stref', 'Przetestuj ponownie Niskie, Średnie, Wysokie i Wyłączone, aby zrozumieć kompromis'],
        ['OLED wygląda na szary', 'Niedopasowanie zakresu wideo, odbicia w pomieszczeniu lub tryb obrazu z podniesioną czernią', 'Sprawdź zakres źródła, poziom czerni, jasność i odbicia otoczenia'],
      ],
    },
    {
      type: 'summary',
      title: 'Praktyczna interpretacja',
      items: [
        'Wyciek podświetlenia jest najbardziej przekonujący, gdy jest nieruchomy i widoczny w rzeczywistej ciemnej treści',
        'Glow IPS zmienia się z kątem, więc testuj z pozycji, w której faktycznie siedzisz',
        'Blooming jest ograniczeniem lokalnego przyciemniania, a nie problemem martwych pikseli',
        'OLED powinien przejść test czystej czerni, ale wciąż potrzebuje osobnych kontroli jednolitości near-black',
        'Dobra konfiguracja testowa jest ciemna, pełnoekranowa, z wysoką jasnością i wolna od odbić',
      ],
    },
  ],
  ui: {
    bleedTitle: 'Wyciek podświetlenia',
    bleedDescription: 'Dokładna czerń na pełnym ekranie do wykrywania wycieków przy krawędziach, glow IPS, cloudingu i kontroli jednolitości czerni.',
    bloomingTitle: 'Lokalne przyciemnianie',
    bloomingDescription: 'Przeciągane białe koło obciążające Mini LED, FALD, obsługę near-black OLED i strefy przyciemniania TV.',
    startBleed: 'Rozpocznij test czerni',
    startBlooming: 'Rozpocznij test bloomingu',
    prepTitle: 'Zanim zaczniesz',
    prepBrightness: 'Ustaw jasność monitora lub telewizora na 100%.',
    prepRoom: 'Wyłącz światła w pokoju i usuń odbicia.',
    prepFullscreen: 'Naciśnij Escape, aby opuścić tryb pełnoekranowy i zresetować test.',
    panelLabel: 'Podgląd wad panelu',
    parametersLabel: 'Parametry testu',
    modeControlsLabel: 'Tryby testu podświetlenia',
    blackLevelLabel: 'Czerń',
    blackLevelValue: '#000000',
    brightnessLabel: 'Jasność',
    brightnessValue: '100%',
    idleLabel: 'Kursor',
    idleValue: '2s',
    fullscreenLabel: 'Pełny ekran',
    fullscreenValue: 'API',
    escapeHint: 'Trwa test czystej czerni. Przestań poruszać myszą na 2 sekundy, aby ukryć kursor. Naciśnij Esc, aby wyjść.',
    dragHint: 'Przeciągnij lub dotknij białe koło. Obserwuj poświaty, siatki stref i opóźnione przyciemnianie. Naciśnij Esc, aby wyjść.',
  },
};
