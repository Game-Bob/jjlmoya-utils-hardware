import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebcamTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'prywatny-test-kamery-internetowej-online';
const title = 'Prywatny test kamery internetowej';
const description = 'Sprawdź uprawnienia kamery, podgląd wideo na żywo, rozdzielczość, proporcje obrazu, orientację i płynność klatek przed spotkaniem.';

const faq = [
  {
    question: 'Czy ten test kamery nagrywa lub przesyła moje wideo?',
    answer: 'Nie. Strona żąda wyłącznie lokalnego strumienia wideo na żywo do podglądu i nie prosi o dostęp do mikrofonu. Nie tworzy nagrań, nie robi zdjęć ani nie wysyła danych. Zatrzymanie testu natychmiast zamyka wszystkie ścieżki wideo.',
  },
  {
    question: 'Dlaczego przeglądarka pyta o pozwolenie na dostęp do kamery?',
    answer: 'Strona internetowa nie może otworzyć kamery bez wyraźnej zgody użytkownika. Monit pozwala zdecydować, czy ta strona może odbierać tymczasowy strumień wideo.',
  },
  {
    question: 'Jaka jest różnica między skonfigurowanymi a zaobserwowanymi FPS?',
    answer: 'Skonfigurowane FPS to wartość docelowa żądana dla tego podglądu. Zaobserwowane FPS szacują, ile klatek rzeczywiście dociera, gdy karta jest widoczna.',
  },
  {
    question: 'Dlaczego dostępna rozdzielczość może różnić się od specyfikacji?',
    answer: 'System operacyjny, sterownik i przeglądarka wspólnie wybierają kompatybilny tryb. Inne aktywne aplikacje mogą ograniczać dostępną rozdzielczość.',
  },
];

const howTo = [
  {
    name: 'Otwórz prywatny podgląd',
    text: 'Wybierz Otwórz kamerę i zezwól na dostęp do wideo w monicie przeglądarki. Dostęp do dźwięku nie jest wymagany.',
  },
  {
    name: 'Sprawdź kadrowanie i obraz',
    text: 'Zweryfikuj ostrość, oświetlenie i tło na żywo. Włącz odbicie lustrzane lub przewodnik kadrowania.',
  },
  {
    name: 'Sprawdź strumień wideo',
    text: 'Odczytaj rozdzielczość, proporcje obrazu, orientację oraz liczbę klatek na sekundę.',
  },
  {
    name: 'Zmień lub zatrzymaj kamerę',
    text: 'Wybierz inną dostępną kamerę do porównania lub kliknij Zatrzymaj kamerę, aby zamknąć ścieżki.',
  },
];

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

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

export const content: ToolLocaleContent<WebcamTesterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania dotyczące testu kamery',
  faq,
  bibliographyTitle: 'Źródła i poradniki konfiguracji kamery',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Sprawdź swoją kamerę internetową przed rozmową wideo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Użyj tego lokalnego podglądu, aby odpowiedzieć na kluczowe pytania przed spotkaniem: czy kamera działa, czy wybrano właściwe urządzenie, czy twarz jest dobrze oświetlona i czy obraz działa płynnie.',
    },
    {
      type: 'list',
      items: [
        'Wybierz właściwą kamerę, jeśli podłączono więcej niż jedno urządzenie',
        'Ustaw kamerę na wysokości oczu i zachowaj twarz w górnej jednej trzeciej kadru',
        'Oświetl twarz od przodu, zamiast siedzieć tyłem do jasnego okna',
        'Zamknij inne aplikacje do spotkań, jeśli kamera wydaje się zajęta',
        'Sprawdź rozdzielczość i płynność klatek bezpośrednio na ekranie',
      ],
    },
    {
      type: 'title',
      text: 'Rozwiązania w przypadku czarnego ekranu lub braku dostępu',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Objaw', 'Prawdopodobna przyczyna', 'Zalecane działanie'],
      rows: [
        ['Dostęp zabroniony', 'Dostęp do kamery jest zablokowany w przeglądarce lub systemie', 'Zezwól na dostęp w ustawieniach i odśwież stronę'],
        ['Czarny podgląd lub zajęta', 'Inna aplikacja używa kamery', 'Zamknij Zoom, Teams lub Meet i spróbuj ponownie'],
        ['Nieprawidłowy obraz', 'Wybrano kamerę wirtualną lub urządzenie drugorzędne', 'Wybierz inne źródło z menu rozwijanego'],
        ['Ciemny lub ziarnisty obraz', 'Słabe światło z przodu lub silne światło z tyłu', 'Skieruj lampę na twarz lub usiądź przodem do okna'],
        ['Zacinające się wideo', 'Niskie oświetlenie lub duże obciążenie komputera', 'Dodaj światło i zamknij wymagające programy'],
      ],
    },
    {
      type: 'title',
      text: 'Rozumienie rozdzielczości i liczby klatek na sekundę',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rozdzielczość 1280 × 720 jest w zupełności wystarczająca do standardowych rozmów. Rozdzielczość 1920 × 1080 zapewnia wyższą ostrość, ale wymaga stabilnego połączenia. Skonfigurowane FPS to wartość docelowa, a zaobserwowane FPS wskazują faktyczną płynność.',
    },
    {
      type: 'tip',
      title: 'Testuj w realnych warunkach spotkania',
      html: 'Wykonaj test o tej samej porze i przy tym samym oświetleniu co rozmowa. Ponieważ aplikacje do spotkań mogą modyfikować obraz, warto przeprowadzić ostateczny test w docelowej aplikacji.',
    },
    {
      type: 'title',
      text: 'Optymalne kadrowanie i ustawienie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Umieść kamerę blisko wysokości wzroku i zostaw trochę miejsca nad głową. Zapewnij główne światło z przodu. Jeśli nosisz okulary, skieruj źródło światła lekko w bok, aby uniknąć odbić na szkłach.',
    },
  ],
  ui: {
    privacyNote: 'Bez nagrywania · Bez wysyłania · Bez dźwięku',
    permissionHeading: 'Gotowy do sprawdzenia kamery?',
    permissionBody: 'Otwórz prywatny podgląd na żywo, aby sprawdzić jakość obrazu i dostępne formaty wideo. Zatrzymanie natychmiast zamyka dostęp.',
    startAction: 'Otwórz kamerę',
    stopAction: 'Zatrzymaj kamerę',
    retryAction: 'Spróbuj ponownie',
    deviceLabel: 'Źródło kamery',
    devicePlaceholder: 'Wybierz kamerę',
    defaultDevice: 'Kamera',
    mirrorAction: 'Odbicie lustrzane',
    guideAction: 'Przewodnik kadrowania',
    stageLabel: 'Obszar prywatnego podglądu kamery',
    resolutionLabel: 'Rozdzielczość',
    aspectLabel: 'Proporcje obrazu',
    orientationLabel: 'Orientacja',
    configuredFpsLabel: 'Skonfigurowane FPS',
    observedFpsLabel: 'Zaobserwowane FPS',
    frameDeliveryLabel: 'Płynność klatek',
    landscapeValue: 'Pozioma',
    portraitValue: 'Pionowa',
    squareValue: 'Kwadratowa',
    frameStable: 'Blisko wartości docelowej',
    frameReduced: 'Poniżej wartości docelowej',
    frameConstrained: 'Znacznie obniżona',
    framePending: 'Oczekiwanie na klatki',
    statusIdle: 'Kamera jest zamknięta. Otwórz ją, gdy będziesz gotowy do sprawdzenia podglądu.',
    statusStarting: 'Oczekiwanie na zgodę i pierwszą klatkę wideo',
    statusReady: 'Podgląd aktywny. Sprawdź ostrość, światło, kadrowanie i płynność.',
    statusStopped: 'Kamera zatrzymana. Wszystkie ścieżki wideo zostały zamknięte.',
    statusHidden: 'Utrzymuj tę kartę widoczną dla dokładnego pomiaru FPS.',
    statusUnsupported: 'Ta przeglądarka nie obsługuje dostępu do kamery.',
    errorPermissionDenied: 'Odmowa dostępu. Zezwól na dostęp w przeglądarce i spróbuj ponownie.',
    errorNoCamera: 'Nie znaleziono kamery. Podłącz urządzenie i spróbuj ponownie.',
    errorInUse: 'Nie można uruchomić kamery. Zamknij inne aplikacje i spróbuj ponownie.',
    errorSecureContext: 'Dostęp do kamery wymaga bezpiecznego połączenia HTTPS lub localhost.',
    errorGeneric: 'Nie można otworzyć kamery. Sprawdź uprawnienia i urządzenie.',
    limitHeading: 'Co potwierdza ten test',
    limitBody: 'Potwierdza jakość obrazu i płynność w tej karcie. Nie ocenia jakości obiektywu ani przetwarzań w zewnętrznych aplikacjach.',
    localOnlyLabel: 'Prywatna kontrola kamery',
    emptyValue: 'Niedostępne',
    fpsUnit: 'FPS',
  },
};
