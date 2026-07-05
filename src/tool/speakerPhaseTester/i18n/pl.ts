import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpeakerPhaseTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tester-fazy-glosnikow';
const title = 'Tester Fazy Głośników';
const description =
  'Odtwarzaj zgodne i odwrócone o 180 stopni stereofoniczne sygnały testowe w przeglądarce, aby sprawdzić polaryzację głośników, błędy okablowania i wygaszanie fazy.';

const faqData = [
  {
    question: 'Jak sprawdzić, czy polaryzacja głośników jest poprawna?',
    answer:
      'Odtwórz normalny sygnał, a następnie sygnał odwrócony z tej samej pozycji odsłuchowej. Przy poprawnie podłączonych głośnikach tryb odwrócony powinien brzmieć słabiej, bardziej drążony lub mniej scentrowany, ponieważ lewy i prawy kanał częściowo się znoszą w pomieszczeniu. Jeśli tryb odwrócony brzmi pełniej lub głośniej, jeden z głośników może być już podłączony z odwróconą polaryzacją.',
  },
  {
    question: 'Co oznacza odwrócona faza w tym teście?',
    answer:
      'Narzędzie wysyła ten sam sygnał do obu kanałów, a następnie mnoży jeden kanał przez -1 w trybie odwróconym. To odwraca przebieg fali o 180 stopni bez pobierania pliku audio. Fizyczny rezultat odpowiada zamianie przewodu dodatniego z ujemnym w jednym głośniku dla sygnału testowego.',
  },
  {
    question: 'Czy ten test może sprawdzić każdy głośnik w kinie domowym?',
    answer:
      'Najlepiej nadaje się do sprawdzania pary stereo lub przednich głośników lewego i prawego w większym systemie. W pełnych systemach surround testuj pary pojedynczo i połącz wynik z testem kanałów amplitunera AV, kalibracją odległości i mikrofonem pomiarowym lub SPL, jeśli dostępny.',
  },
  {
    question: 'Czy używać szumu różowego czy tonu sinusoidalnego?',
    answer:
      'Szum różowy jest zazwyczaj łatwiejszy do kontroli polaryzacji, ponieważ obejmuje szeroki zakres częstotliwości i sprawia, że wygaszanie jest oczywiste. Ton sinusoidalny może pomóc skupić się na jednej częstotliwości, ale tryby pomieszczenia mogą sprawić, że pojedynczy ton będzie mylący.',
  },
  {
    question: 'Czy to bezpieczne dla głośników i słuchawek?',
    answer:
      'Tak, przy umiarkowanych poziomach. Zacznij cicho, unikaj maksymalnego wzmocnienia wzmacniacza i nie odtwarzaj ciągłych tonów głośno przez słuchawki, małe głośniki laptopa lub nieznane głośniki. Zatrzymaj natychmiast, jeśli usłyszysz zniekształcenia lub mechaniczne naprężenia.',
  },
];

const howToData = [
  {
    name: 'Umieść się w pozycji odsłuchowej',
    text: 'Usiądź tam, gdzie zwykle słuchasz, aby wygaszanie akustyczne, które słyszysz, odpowiadało rzeczywistemu pomieszczeniu i rozmieszczeniu głośników.',
  },
  {
    name: 'Odtwórz normalny sygnał',
    text: 'Naciśnij Odtwarzaj W Fazie i zwróć uwagę na obraz centralny, głośność i ciało tonalne.',
  },
  {
    name: 'Odtwórz sygnał odwrócony',
    text: 'Naciśnij Odtwarzaj Poza Fazą. Poprawnie podłączone głośniki powinny zazwyczaj brzmieć bardziej rozmycie, drążono lub ciszej.',
  },
  {
    name: 'Sprawdź okablowanie, jeśli wynik jest odwrotny',
    text: 'Jeśli tryb odwrócony brzmi głośniej niż normalny, sprawdź zaciski dodatni i ujemny na jednym głośniku, zaciski wzmacniacza, wtyki bananowe, puszki ścienne i adaptery.',
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
  step: howToData.map((step, index) => ({
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<SpeakerPhaseTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Online Test Fazy i Polaryzacji Głośników', level: 2 },
    {
      type: 'paragraph',
      html: 'Ten tester fazy głośników porównuje normalny sygnał stereo z wersją, w której jeden kanał jest odwrócony o <strong>180 stopni</strong>. Praktyczny cel jest prosty: potwierdzić, czy dwa głośniki w parze poruszają się razem, gdy powinny. Gdy lewy i prawy głośnik są podłączone z tą samą polaryzacją, energia basu i średnich tonów wzmacnia się między nimi, a obraz centralny jest stabilny. Gdy jeden głośnik jest podłączony odwrotnie, membrany poruszają się w przeciwnych kierunkach dla tego samego sygnału, co może sprawić, że wokale stracą ciało, bas zniknie, a scena stereo będzie nienaturalnie szeroka lub drążona.',
    },
    {
      type: 'paragraph',
      html: 'Test jest generowany lokalnie w przeglądarce. Nie przesyła żadnego dużego pliku audio. W trybie normalnym oba kanały otrzymują ten sam szum różowy lub ton sinusoidalny. W trybie odwróconym jeden kanał jest mnożony przez <code>-1</code>, co tworzy matematycznie odwrócony przebieg. Jeśli twoje rzeczywiste okablowanie jest poprawne, ta sztuczna inwersja powinna wywołać wyraźne wygaszanie. Jeśli twoje fizyczne okablowanie jest już odwrócone, przycisk odwrócony może częściowo skorygować błąd, przez co może brzmieć głośniej, solidniej lub bardziej scentrowanie niż przycisk normalny.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Szybka interpretacja',
      badge: 'Podstawowa zasada',
      html: '<p>Jeśli <strong>Poza Fazą</strong> brzmi cieniej, bardziej odlegle, drążono lub ciszej niż <strong>W Fazie</strong>, twoja lewa/prawa para jest prawdopodobnie poprawnie podłączona. Jeśli Poza Fazą brzmi pełniej lub głośniej, sprawdź czerwone i czarne zaciski na jednym głośniku, wzmacniaczu, wtykach bananowych, puszkach ściennych, wiązce samochodowej lub adapterze w łańcuchu.</p>',
    },
    {
      type: 'table',
      headers: ['Co słyszysz', 'Prawdopodobne znaczenie', 'Następny krok'],
      rows: [
        ['Normalny jest pełny, odwrócony jest drążony', 'Oba głośniki są prawdopodobnie podłączone z tą samą polaryzacją.', 'Zostaw okablowanie bez zmian i przejdź do ustawiania lub kalibracji.'],
        ['Odwrócony jest pełniejszy niż normalny', 'Jeden głośnik może być fizycznie podłączony odwrotnie.', 'Sprawdź zaciski dodatni i ujemny tylko po jednej stronie pary.'],
        ['Oba tryby brzmią prawie identycznie', 'Głośniki mogą być zbyt daleko od siebie, odbicia pomieszczenia dominują lub sygnał jest mono.', 'Przejdź do pozycji odsłuchowej, wyłącz przetwarzanie mono i spróbuj szumu różowego.'],
        ['Oba tryby brzmią słabo w basie', 'Wygaszanie pomieszczenia, faza subwoofera, zwrotnica lub umiejscowienie mogą być większym problemem.', 'Przeprowadź przemiatanie basów i przetestuj polaryzację subwoofera osobno.'],
      ],
    },
    { type: 'title', text: 'Dlaczego Odwrócona Polaryzacja Głośników Brzmi Źle', level: 2 },
    {
      type: 'paragraph',
      html: 'Głośnik przekształca przebieg elektryczny w ruch membrany. Dla fali dodatniego ciśnienia dwa jednakowe głośniki powinny zasadniczo wypychać powietrze w tym samym kierunku w tym samym czasie. Jeśli w jednym głośniku przewody dodatni i ujemny są zamienione, ten głośnik porusza się do wewnątrz, podczas gdy drugi porusza się na zewnątrz dla tego samego sygnału. W parze stereo nie powoduje to po prostu wyciszenia wszędzie; pomieszczenie, odległość między głośnikami, długość fali i pozycja odsłuchu decydują, gdzie wygaszanie jest najsilniejsze. Najbardziej zauważalne objawy to zazwyczaj zredukowany bas, słabe fantomowe centrum i wokale, które wydają się odklejać od przestrzeni między głośnikami.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Główny wokal i dialogi powinny być zakotwiczone blisko środka, gdy oba głośniki odtwarzają ten sam sygnał mono.',
        'Stopa perkusyjna, gitara basowa i niższe dźwięki fortepianu powinny mieć ciało, zamiast brzmieć lekko.',
        'Obraz stereo nie powinien wydawać się sztucznie szeroki, gdy źródło jest mono.',
        'Lekkie poruszenie głową nie powinno powodować całkowitego zapadnięcia się obrazu centralnego.',
        'Poprawnie podłączona para powinna sprawić, że test odwrócony brzmi mniej naturalnie niż normalny.',
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Polaryzacja', definition: 'Dodatnia lub ujemna orientacja sygnału elektrycznego zasilającego przetwornik głośnika.' },
        { term: 'Faza', definition: 'Zależność czasowa między dwoma przebiegami, często opisywana w stopniach w ciągu jednego cyklu.' },
        { term: 'Odwrócenie o 180 stopni', definition: 'Przebieg odwrócony pionowo, tak że dodatnie ciśnienie staje się ujemnym ciśnieniem w tym samym momencie.' },
        { term: 'Wygaszanie', definition: 'Zmniejszenie poziomu dźwięku, gdy dwa podobne przebiegi docierają z przeciwną polaryzacją lub czasem.' },
        { term: 'Fantomowe centrum', definition: 'Pozorny obraz centralny tworzony, gdy identyczny dźwięk dociera równomiernie do lewego i prawego głośnika.' },
      ],
    },
    {
      type: 'tip',
      title: 'Nie testuj z boku głośnika',
      html: 'Siedź w normalnej pozycji odsłuchowej. Wygaszanie fazy jest przestrzenne: wynik słyszany pół metra od lewego głośnika może być zupełnie inny niż wynik na kanapie, krześle studyjnym lub fotelu kierowcy.',
    },
    { type: 'title', text: 'Szum Różowy a Ton Sinusoidalny do Kontroli Polaryzacji', level: 2 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Szum różowy',
          description: 'Szum szerokopasmowy z większą ilością energii w niższych oktawach niż szum biały. Ułatwia ocenę słuchową ogólnego ciała tonalnego, obrazu centralnego i wygaszania.',
          highlight: true,
          points: ['Najlepszy pierwszy wybór do szybkich kontroli polaryzacji.', 'Mniejsze prawdopodobieństwo zdominowania przez pojedynczy tryb pomieszczenia.', 'Przydatny do kina domowego, monitorów studyjnych i car audio.'],
        },
        {
          title: 'Ton sinusoidalny',
          description: 'Ton o pojedynczej częstotliwości, który może ujawnić wygaszanie przy wybranej częstotliwości, ale może też wyolbrzymiać szczyty i doliny pomieszczenia.',
          points: ['Przydatny przy badaniu konkretnego problemu ze zwrotnicą lub basem.', 'Może być mylący, jeśli pomieszczenie ma silną dolinę przy tej częstotliwości.', 'Utrzymuj umiarkowaną głośność, bo czyste tony stają się męczące.'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Do szybkiej kontroli polaryzacji zacznij od szumu różowego. Szum różowy rozkłada energię w całym spektrum, więc oceniasz parę głośników jako system, a nie jedną częstotliwość, która może znajdować się w dolinie pomieszczenia. Używaj regulacji tonu sinusoidalnego tylko wtedy, gdy chcesz skupić się na znanym paśmie problemowym, takim jak wygaszanie w zakresie wokalnym około 300 Hz lub problem z przejściem basu około 80 Hz. Jeśli wynik tonu sinusoidalnego zmienia się drastycznie po przesunięciu głowy o kilka centymetrów, pomieszczenie silnie wpływa na tę częstotliwość.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '180°', label: 'Matematyczna inwersja zastosowana do jednego kanału', icon: 'mdi:rotate-3d-variant' },
        { value: '-1', label: 'Mnożnik wzmocnienia użyty dla kanału odwróconego', icon: 'mdi:plus-minus-variant' },
        { value: '0 MB', label: 'Pobrania audio wymagane dla sygnału testowego', icon: 'mdi:cloud-off-outline' },
      ],
    },
    { type: 'title', text: 'Lista Kontrolna Kina Domowego i Monitorów Studyjnych', level: 2 },
    {
      type: 'card',
      icon: 'mdi:sofa',
      title: 'Przednie głośniki kina domowego',
      html: 'Używaj przycisków normalnego i odwróconego tylko z aktywnymi przednimi lewymi i prawymi głośnikami. Wyłącz upmiksery, wirtualny surround, tryb nocny, ulepszanie dialogów i korekcję pomieszczenia, jeśli chcesz najpierw wyizolować surowe okablowanie. Po potwierdzeniu polaryzacji włącz ponownie kalibrację i sprawdź, czy dialog pozostaje scentrowany.',
    },
    {
      type: 'card',
      icon: 'mdi:music-circle',
      title: 'Monitory studyjne',
      html: 'Przeprowadź sygnał przeglądarki przez te same wyjścia interfejsu, których używa twój DAW. Sprawdź, czy oba przewody zbalansowane są podłączone spójnie i czy przełączniki polaryzacji kontrolera monitorów nie są włączone. Odwrócony monitor może sprawić, że decyzje o kompatybilności mono będą niewiarygodne podczas miksowania.',
    },
    {
      type: 'card',
      icon: 'mdi:car-info',
      title: 'Car audio',
      html: 'Kabiny samochodowe powodują silne odbicia i asymetrię siedzeń, więc słuchaj z fotela kierowcy i w razie potrzeby powtórz z fotela pasażera. Fabryczne adaptery wiązek, wymiany głośników drzwiowych i instalacje wzmacniaczy to częste miejsca, gdzie przewody dodatni i ujemny mogą być zamienione.',
    },
    {
      type: 'proscons',
      title: 'Zalety i ograniczenia testu fazy w przeglądarce',
      items: [
        { pro: 'Natychmiastowa kontrola bez instalowania oprogramowania ani pobierania plików audio.', con: 'Nie może wskazać, który fizyczny przewód jest nieprawidłowy bez inspekcji systemu.' },
        { pro: 'Działa dobrze dla pary stereo, słuchawek, monitorów bliskiego pola i szybkich kontroli instalacji.', con: 'Akustyka pomieszczenia może ukryć lub wyolbrzymić efekt w niektórych miejscach odsłuchu.' },
        { pro: 'Szum różowy sprawia, że szerokopasmowe wygaszanie jest łatwiejsze do usłyszenia niż pojedynczy ton testowy.', con: 'Wielokanałowe systemy surround wciąż wymagają weryfikacji kanał po kanale.' },
      ],
    },
    { type: 'title', text: 'Jak Naprawić Nieudany Test Polaryzacji', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tools',
      items: [
        'Wyłącz wzmacniacz przed zmianą przewodów głośnikowych lub wtyków bananowych.',
        'Wybierz jeden głośnik z pary i prześledź czerwony-do-czerwonego i czarny-do-czarnego od wzmacniacza do głośnika.',
        'Sprawdź każdą puszkę ścienną, zacisk sprężynowy, adapter, złącze speakON lub wiązkę samochodową między wzmacniaczem a głośnikiem.',
        'Jeśli przewód głośnikowy ma pasek, żebrowanie, nadruk tekstowy lub stronę miedzianą/srebrną, użyj tego samego przewodnika dla dodatniego na obu końcach.',
        'Po zmianie jednej strony uruchom ponownie tryb normalny i odwrócony z pozycji odsłuchowej.',
        'Jeśli wynik wciąż jest niejednoznaczny, tymczasowo zbliż głośniki do siebie i powtórz przy niskiej głośności.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Subwoofery wymagają osobnego testu fazy',
      badge: 'Systemy basowe',
      html: '<p>To narzędzie porównuje parę lewy/prawy. Zwrotnica subwoofera może być elektrycznie poprawna, ale akustycznie poza fazą, ponieważ odległość, opóźnienie DSP, nachylenie zwrotnicy i umiejscowienie zmieniają synchronizację. Użyj tego testu dla głównej pary, a następnie przemiatania zwrotnicy lub kalibracji amplitunera dla przejścia subwoofera.</p>',
    },
    {
      type: 'message',
      title: 'Praktyczna zasada odsłuchu',
      ariaLabel: 'Praktyczna zasada odsłuchu dla testu fazy',
      html: 'W rzeczywistych instalacjach poprawne ustawienie to to, które sprawia, że materiał mono brzmi skupiony, pełny i stabilny w rzeczywistej pozycji odsłuchowej. Tryb odwrócony to kontrast diagnostyczny, a nie tryb odsłuchu.',
    },
    {
      type: 'summary',
      title: 'Podsumowanie diagnozy polaryzacji głośników',
      items: [
        'Tryb normalny powinien brzmieć głośniej i bardziej scentrowanie niż odwrócony, gdy para głośników jest poprawnie podłączona.',
        'Odwrócony tryb brzmiący głośniej to silna wskazówka, że jedno fizyczne połączenie głośnika jest odwrócone.',
        'Szum różowy to najlepszy pierwszy sygnał, ponieważ zmniejsza prawdopodobieństwo oceny tylko jednej częstotliwości pomieszczenia.',
        'Tony sinusoidalne są przydatne do ukierunkowanego rozwiązywania problemów, ale mogą być zdominowane przez tryby pomieszczenia.',
        'Zawsze zmniejszaj głośność przed zmianą trybu, zwłaszcza w słuchawkach lub przy wzmacniaczach dużej mocy.',
      ],
    },
  ],
  ui: {
    normal: 'W Fazie',
    inverted: 'Odwrócony',
    stop: 'Stop',
    pause: 'Pauza',
    volume: 'Poziom wyjściowy',
    noiseColor: 'Sygnał testowy',
    pinkNoise: 'Szum różowy',
    sineTone: 'Ton sinusoidalny',
    frequency: 'Częstotliwość tonu',
    statusReady: 'Gotowy',
    statusNormal: 'W fazie',
    statusInverted: 'Odwrócony',
    instruction:
      'Odwrócony powinien brzmieć słabiej. Głośniej oznacza sprawdzić okablowanie.',
    channelLabel: 'Tester fazy głośników',
    leftChannel: 'Kanał lewy',
    rightChannel: 'Kanał prawy',
    leftShort: 'L',
    rightShort: 'P',
    polarityNormal: '0° zgodny',
    polarityInverted: '180° odwrócony',
    safety: 'Zacznij cicho. Testy polaryzacji mogą stać się głośne przez wzmacniacze, monitory studyjne, systemy car audio i słuchawki.',
  },
};
