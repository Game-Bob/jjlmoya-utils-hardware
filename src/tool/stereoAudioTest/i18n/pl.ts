import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StereoAudioTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'sprawdzanie-dzwieku-stereo';
const title = 'Test audio stereo';
const description = 'Sprawdź kanały lewego i prawego głośnika, balans stereo, kierunek okablowania i obrazowanie słuchawek za pomocą tonów testowych generowanych przez przeglądarkę.';

const faqData = [
  {
    question: 'Jak przetestować lewy i prawy głośnik online?',
    answer: 'Zacznij od niskiej głośności, naciśnij Lewy, a następnie Prawy. Lewy ton powinien dochodzić tylko z lewego głośnika lub lewej muszli, a prawy ton tylko z prawej strony. Użyj Środka, aby potwierdzić, że obie strony grają równomiernie.',
  },
  {
    question: 'Dlaczego oba głośniki grają podczas testu lewego lub prawego?',
    answer: 'Niektóre urządzenia, systemy operacyjne, głośniki Bluetooth, tryby mono, ustawienia dostępności lub ulepszenia dźwięku konwertują stereo na mono. Sprawdź balans systemowy, ustawienia dźwięku mono, okablowanie i efekty dźwiękowe specyficzne dla aplikacji.',
  },
  {
    question: 'Czy to może zdiagnozować zamienione kable głośnikowe?',
    answer: 'Tak. Jeśli przycisk Lewy gra z prawego głośnika, a przycisk Prawy gra z lewego głośnika, ścieżka wyjściowa jest odwrócona gdzieś między komputerem, kablem, wzmacniaczem, głośnikami lub słuchawkami.',
  },
  {
    question: 'Czy ton sinusoidalny jest bezpieczny dla głośników i słuchawek?',
    answer: 'Krótki ton sinusoidalny przy umiarkowanej głośności jest zwykle bezpieczny. Unikaj wysokiej głośności, długich sesji lub bardzo wysokich częstotliwości, zwłaszcza w przypadku słuchawek, małych głośników laptopa lub nieznanych wzmacniaczy.',
  },
  {
    question: 'Czy przeglądarka wpływa na test stereo?',
    answer: 'Narzędzie wykorzystuje Web Audio API StereoPannerNode. Jest niezawodne w nowoczesnych przeglądarkach, ale ostateczne wyjście nadal zależy od routingu systemu operacyjnego, sterowników, kodeków Bluetooth, zewnętrznych DAC i okablowania głośników.',
  },
];

const howToData = [
  {
    name: 'Ustaw cichą głośność początkową',
    text: 'Zmniejsz głośność systemową i użyj suwaka głośności narzędzia przed odtworzeniem dowolnego tonu testowego.',
  },
  {
    name: 'Przetestuj każdą stronę',
    text: 'Naciśnij Lewy i Prawy. Każdy ton powinien być wyraźnie odizolowany do odpowiedniego głośnika lub strony słuchawek.',
  },
  {
    name: 'Sprawdź balans środkowy',
    text: 'Naciśnij Środek. Ton powinien pojawić się na środku między oboma głośnikami, nie przeciągnięty mocno na jedną stronę.',
  },
  {
    name: 'Użyj przemiatania',
    text: 'Uruchom Przemiatanie, aby usłyszeć ruch w polu stereo i wykryć zaniki, odwrócone okablowanie lub nierówne obrazowanie.',
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

export const content: ToolLocaleContent<StereoAudioTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Test lewego i prawego głośnika online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Użyj tego internetowego testu audio stereo, aby sprawdzić, czy lewe i prawe głośniki, słuchawki, douszne, soundbar, DAC, wzmacniacz lub monitory są prawidłowo trasowane. Narzędzie odtwarza tony generowane przez przeglądarkę przez lewy kanał, prawy kanał, oba kanały lub ruchome przemiatanie stereo, dzięki czemu można szybko wykryć odwrócone kanały, wyjście mono, słabe głośniki, problemy z balansem i błędy okablowania bez instalowania oprogramowania audio.',
    },
    {
      type: 'paragraph',
      html: 'Prawidłowa konfiguracja stereo zachowuje kierunek: lewy ton testowy powinien dochodzić tylko z lewego głośnika lub lewej muszli, prawy ton testowy tylko z prawej strony, a ton środkowy powinien brzmieć równomiernie między obiema stronami. Jeśli dźwięk pojawia się po niewłaściwej stronie, po obu stronach jednocześnie lub znacznie głośniej po jednej stronie, problem zwykle leży w ustawieniach wyjścia, trybie dostępności mono, okablowaniu, routingu Bluetooth, rozmieszczeniu głośników lub oprogramowaniu do ulepszania dźwięku.',
    },
    {
      type: 'table',
      headers: ['Przycisk', 'Co powinieneś usłyszeć', 'Użyj do diagnozy'],
      rows: [
        ['Lewy', 'Ton tylko z lewego głośnika, lewego przetwornika słuchawek lub lewej słuchawki dousznej.', 'Odwrócone kable, nieprawidłowe rozmieszczenie głośników, wyjście mono lub remapowanie kanałów.'],
        ['Prawy', 'Ton tylko z prawego głośnika, prawego przetwornika słuchawek lub prawej słuchawki dousznej.', 'Zamienione wyjścia, nieprawidłowe okablowanie adaptera lub efekty sterownika zmieniające kolejność kanałów.'],
        ['Środek', 'Ton pojawia się na środku, ponieważ oba kanały grają równomiernie.', 'Przesunięcie balansu systemowego, słaby głośnik, zatkana siatka słuchawki lub nierówne wzmocnienie wzmacniacza.'],
        ['Przemiatanie', 'Ton porusza się płynnie po obrazie stereo z boku na bok.', 'Zaniki, niestabilne połączenia Bluetooth, problemy fazowe, artefakty wirtualnego dźwięku przestrzennego lub nierówne obrazowanie.'],
      ],
    },
    {
      type: 'title',
      text: 'Najczęstsze problemy stereo wykrywane przez ten test',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Kanały lewy i prawy są odwrócone: przycisk lewy gra po prawej stronie lub przycisk prawy gra po lewej stronie.',
        'Stereo zapadło się w mono: lewy, prawy i środkowy brzmią prawie identycznie z obu głośników.',
        'Jedna strona jest cichsza: dźwięk środkowy ciągnie w kierunku jednego głośnika, nawet gdy suwak balansu systemowego wydaje się wyśrodkowany.',
        'Słuchawki są nieprawidłowo podłączone lub noszone: kroki w grze, panoramowanie muzyki i rozmowy wideo wydają się przestrzennie mylące.',
        'Dźwięk Bluetooth lub USB jest przetwarzany: soundbary, stacje dokujące, zestawy słuchawkowe i tryby TV mogą downmiksować lub wirtualizować sygnał.',
        'Rozmieszczenie głośników jest mylące: głośnik zbyt blisko ściany, zasłonięty meblami lub dalej może przesuwać obraz środkowy.',
      ],
    },
    {
      type: 'title',
      text: 'Jak naprawić odwrócony dźwięk lewy i prawy',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'W przypadku głośników przewodowych zamień wtyczki lewą i prawą we wzmacniaczu, interfejsie audio, DAC lub wyjściu komputera.',
        'W przypadku głośników pasywnych upewnij się, że lewy głośnik jest podłączony do lewych zacisków wzmacniacza, a prawy głośnik do prawych zacisków.',
        'W przypadku słuchawek sprawdź, czy są noszone we właściwej orientacji i przetestuj bez adapterów, przedłużaczy lub rozgałęźników.',
        'W systemie Windows lub macOS sprawdź balans wyjścia i wyłącz dźwięk mono w ustawieniach dostępności lub dźwięku.',
        'W przypadku głośników Bluetooth i soundbarów wyłącz wirtualny dźwięk przestrzenny, tryb imprezowy, podwójny dźwięk, korekcję pomieszczenia lub tryby dźwięku TV podczas testowania.',
        'W przypadku interfejsów audio, DAW i mikserów sprawdź routing kanałów, regulatory panoramy, ustawienia miksu odsłuchowego i wszelkie programowe miksery dostarczone przez producenta.',
      ],
    },
    {
      type: 'title',
      text: 'Jak interpretować test głośnika środkowego',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ton środkowy nie jest oddzielnym fizycznym głośnikiem środkowym w normalnej konfiguracji dwukanałowej. To ten sam sygnał wysyłany równomiernie na lewy i prawy. W słuchawkach powinien być odczuwany jako wyśrodkowany wewnątrz głowy; na głośnikach powinien tworzyć fantomowe centrum między nimi. Jeśli przechyla się w lewo lub w prawo, sprawdź balans systemowy, odległość głośników, kąt głośników, pokrętła głośności, regulację wzmacniacza, dopasowanie słuchawek, kurz w kratce przetwornika oraz czy głośnik jest częściowo zasłonięty lub uszkodzony.',
    },
    {
      type: 'table',
      headers: ['Co się dzieje', 'Prawdopodobna przyczyna', 'Następny krok'],
      rows: [
        ['Lewy gra z obu stron', 'Dźwięk mono, downmiksowanie lub przetwarzanie dźwięku przestrzennego.', 'Wyłącz wyjście mono i wirtualny dźwięk przestrzenny, a następnie przetestuj ponownie.'],
        ['Lewy gra z prawej strony', 'Kanały są zamienione gdzieś w łańcuchu odtwarzania.', 'Zamień kable lub zmień routing kanałów w sterowniku, mikserze lub wzmacniaczu.'],
        ['Środek jest głośniejszy po jednej stronie', 'Balans, rozmieszczenie, uszkodzenie przetwornika, dopasowanie do ucha lub zatkana kratka głośnika.', 'Porównaj z innym zestawem słuchawkowym lub parą głośników i sprawdź fizyczne rozmieszczenie.'],
        ['Przemiatanie przeskakuje lub znika', 'Niestabilność Bluetooth, artefakty ulepszania dźwięku lub uszkodzony kabel/złącze.', 'Przetestuj z wyjściem przewodowym lub innym kablem, aby odizolować słabe ogniwo.'],
      ],
    },
    {
      type: 'title',
      text: 'Test lewo-prawo dla słuchawek i dousznych',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'W przypadku słuchawek nausznych i dousznych test lewo/prawo jest szczególnie przydatny przed graniem, edycją dźwięku, oglądaniem filmów lub dołączaniem do rozmów. Załóż słuchawki normalnie, zacznij od niskiej głośności, naciśnij Lewy i Prawy i potwierdź, że każdy ton dociera do właściwego ucha. Jeśli obie strony brzmią tak samo, twoje urządzenie może używać dźwięku mono. Jeśli jedna strona jest przytłumiona lub cichsza, wyczyść siatkę słuchawki, ponownie załóż końcówkę, sprawdź kabel i porównaj z innym urządzeniem wyjściowym.',
    },
    {
      type: 'title',
      text: 'Wskazówki dotyczące bezpiecznego testowania dźwięku',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Zacznij od niskiej głośności systemowej, zwłaszcza na słuchawkach.',
        'Używaj Pętli do zatrzymania tylko wtedy, gdy aktywnie potrzebujesz ciągłego dźwięku do śledzenia kabli, rozmieszczenia lub regulacji balansu.',
        'Utrzymuj tony testowe krótko na małych głośnikach; ciągłe fale sinusoidalne mogą szybko stać się niewygodne.',
        'Unikaj maksymalnego wzmocnienia na małych głośnikach laptopa i nieznanych wzmacniaczach.',
        'Nie zakładaj słuchawek na uszy, dopóki nie potwierdzisz, że głośność jest bezpieczna.',
        'Po zmianie kabli lub ustawień powtórz testy lewy, prawy, środkowy i przemiatania w tej kolejności.',
        'Do kalibracji studyjnej lub kina domowego połącz ten szybki test z miernikiem SPL lub rutyną kalibracji odbiornika.',
      ],
    },
    {
      type: 'title',
      text: 'Szybka diagnoza',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jeśli lewy i prawy są zamienione, sprawdź najpierw fizyczne okablowanie, ponieważ jest to najszybsza naprawa dla głośników biurkowych, wzmacniaczy i interfejsów audio. Jeśli oba przyciski grają z obu stron, poszukaj wyjścia mono, dźwięku przestrzennego, wirtualnego dźwięku przestrzennego lub urządzenia, które celowo downmiksuje stereo. Jeśli środek jest poza środkiem, ale lewy i prawy są prawidłowo trasowane, problemem jest zwykle balans, rozmieszczenie, dopasowanie słuchawek, zatkane kratki lub nierówna moc wyjściowa głośników.',
    },
  ],
  ui: {
    left: 'Lewy',
    center: 'Środek',
    right: 'Prawy',
    sweep: 'Przemiatanie',
    stop: 'Stop',
    volume: 'Głośność',
    duration: 'Czas trwania',
    infiniteMode: 'Pętla do zatrzymania',
    infiniteModeHint: 'Utrzymuje dowolny kanał grający do ciągłego testowania.',
    secondsUnit: 's',
    hertzUnit: 'Hz',
    tone: 'Ton',
    balance: 'Balans',
    activeIdle: 'Gotowy',
    activeLeft: 'Odtwarzanie lewego kanału',
    activeCenter: 'Odtwarzanie tonu środkowego',
    activeRight: 'Odtwarzanie prawego kanału',
    activeSweep: 'Przemiatanie pola stereo',
    safety: 'Zacznij nisko. Tony testowe mogą być głośne przez słuchawki, wzmacniacze i małe głośniki laptopa.',
    leftSpeaker: 'Lewy głośnik',
    rightSpeaker: 'Prawy głośnik',
    centerLine: 'Pole stereo',
  },
};
