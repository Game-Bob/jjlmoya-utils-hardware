import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileSensorTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-czujnikow-telefonu';
const title = 'Test Czujników Telefonu';
const description = 'Uruchom test online żyroskopu, akcelerometru, czujnika ruchu i poziomicy na swoim telefonie, aby sprawdzić nachylenie, obrót, dryft i problemy z kalibracją czujników.';

const faqData = [
  {
    question: 'Jak mogę przetestować żyroskop w telefonie online?',
    answer: 'Otwórz test na telefonie, dotknij Rozpocznij Kalibrację, zezwól na dostęp do czujników ruchu, jeśli pojawi się monit, a następnie obracaj i przechylaj urządzenie. Sprawny żyroskop i czujnik orientacji powinny płynnie aktualizować wartości alpha, beta i gamma, bez zacinania się i gwałtownych skoków.',
  },
  {
    question: 'Czy mogę przetestować akcelerometr za pomocą poziomicy?',
    answer: 'Tak. Po uruchomieniu testu połóż telefon na płaskim stole. Bańka powinna osiąść blisko środka, a wartości przyspieszenia powinny pozostać stabilne. Jeśli bańka mocno dryfuje, gdy telefon jest nieruchomy, akcelerometr może wymagać kalibracji lub etui, stół albo sprzęt urządzenia mogą zakłócać pomiar.',
  },
  {
    question: 'Dlaczego iPhone prosi o pozwolenie na ruch?',
    answer: 'Safari na iPhonie i iPadzie wymaga dotknięcia, zanim strony internetowe będą mogły uzyskać dostęp do czujników ruchu i orientacji. Jeśli pozwolenie zostanie odrzucone, test nie może odczytać danych żyroskopu ani akcelerometru, dopóki nie zezwolisz na dostęp do ruchu.',
  },
  {
    question: 'Czy to może naprawić lub skalibrować uszkodzony kompas?',
    answer: 'Żadne narzędzie przeglądarkowe nie może naprawić sprzętu ani wymusić kalibracji kompasu systemowego. Ten test pomaga zidentyfikować objawy: zablokowane odczyty, zaszumiony ruch, dryft, brak uprawnień lub przeglądarkę, która nie udostępnia czujników.',
  },
];

const howToData = [
  { name: 'Otwórz test na telefonie', text: 'Użyj tego samego iPhone\'a, iPada, telefonu z Androidem lub tabletu, który chcesz zdiagnozować. Przeglądarki na komputerach stacjonarnych zazwyczaj nie udostępniają czujników ruchu.' },
  { name: 'Zezwól na dostęp do ruchu', text: 'Dotknij Rozpocznij Kalibrację i zaakceptuj monit o pozwolenie na ruch lub orientację, jeśli przeglądarka go wyświetli.' },
  { name: 'Przetestuj nachylenie i obrót', text: 'Przechyl telefon do przodu, przechyl go w lewo i prawo, a następnie obróć go płasko na stole. Obserwuj płynne zmiany alpha, beta, gamma i przyspieszenia.' },
  { name: 'Sprawdź dryft na płaskiej powierzchni', text: 'Pozostaw telefon nieruchomo na kilka sekund. Zdrowy czujnik powinien się ustabilizować, zamiast ciągle wędrować, dawać skoki lub się zacinać.' },
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

export const content: ToolLocaleContent<MobileSensorTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Test online żyroskopu i akcelerometru dla telefonów', level: 2 },
    {
      type: 'paragraph',
      html: 'Użyj tego testu czujników mobilnych, gdy obrót ekranu wydaje się nieprawidłowy, gry lub aplikacje AR dryfują, aplikacja poziomicy wydaje się niedokładna, nawigacja wskazuje zły kierunek lub telefon nie reaguje prawidłowo na przechylenie. Test pokazuje na żywo zachowanie żyroskopu, akcelerometru, obrotu i poziomicy, dzięki czemu możesz odróżnić problem z uprawnieniami przeglądarki od rzeczywistego problemu z czujnikiem lub kalibracją.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Główna intencja wyszukiwania', value: 'przetestuj żyroskop online' },
        { label: 'Sprawdza również', value: 'dryft akcelerometru' },
        { label: 'Najlepsze urządzenie', value: 'telefon lub tablet' },
      ],
    },
    { type: 'title', text: 'Co mówią poszczególne odczyty czujników', level: 3 },
    {
      type: 'table',
      headers: ['Odczyt', 'Przydatny do', 'Sygnały ostrzegawcze'],
      rows: [
        ['Alpha', 'Sprawdzanie obrotu wokół osi pionowej, przydatne przy ruchach kompasowych i zmianach kierunku.', 'Nie zmienia się podczas płaskiego obracania telefonu, skacze o duże wartości lub zastyga na zerze.'],
        ['Beta', 'Sprawdzanie nachylenia przód-tył dla obrotu ekranu, gier, poziomowania aparatu i sterowania AR.', 'Porusza się w złym kierunku, zacina się na jednej wartości lub stale dryfuje, gdy telefon jest nieruchomy.'],
        ['Gamma', 'Sprawdzanie przechyłu lewo-prawo dla obrotu poziomego, gier wyścigowych, aplikacji poziomicy i stabilizatorów.', 'Jedna strona reaguje inaczej, wartości są zaszumione lub bańka nigdy nie wraca do środka na płaskim stole.'],
        ['Przyspieszenie X/Y/Z', 'Sprawdzanie reakcji akcelerometru, wykrywania wstrząsów, kierunku grawitacji i stabilności ruchu.', 'Duże skoki podczas bezruchu, brak reakcji na ruch lub niestabilne odczyty po zdjęciu etui.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Objawy, które ten test pomaga zdiagnozować',
      html: '<p>Użyj wartości na żywo, aby zbadać niedziałającą automatyczną rotację, opóźniony żyroskop, dryft akcelerometru, ostrzeżenia o kalibracji kompasu, ślizgające się śledzenie AR, błędy poziomowania aparatu, sterowanie ruchem ciągnące w jedną stronę lub telefon, który zgłasza ruch tylko w aplikacjach natywnych, ale nie w przeglądarce.</p>',
    },
    { type: 'title', text: 'Żyroskop vs akcelerometr vs kompas', level: 3 },
    {
      type: 'comparative',
      items: [
        { title: 'Żyroskop', description: 'Mierzy prędkość obrotową. Kluczowy dla AR, gier, stabilizacji aparatu, sterowania ruchem i płynnych zmian orientacji.' },
        { title: 'Akcelerometr', description: 'Mierzy przyspieszenie i kierunek grawitacji. Napędza przechylanie, wykrywanie wstrząsów, wykrywanie kroków i działanie cyfrowej poziomicy.' },
        { title: 'Kompas / magnetometr', description: 'Pomaga oszacować kierunek, ale może być zakłócany przez magnesy, metalowe przedmioty, uchwyty samochodowe, etui, głośniki, laptopy i pobliską elektronikę.' },
      ],
    },
    { type: 'title', text: 'Jak prawidłowo przetestować kalibrację czujnika', level: 3 },
    {
      type: 'list',
      items: [
        'Przed testowaniem zdejmij magnetyczne etui, portfele MagSafe, metalowe uchwyty, klipsy do kontrolerów i akcesoria.',
        'Połóż telefon na stabilnym, płaskim stole i odczekaj kilka sekund przed oceną dryftu.',
        'Obracaj telefon powoli wokół każdej osi, zamiast natychmiast nim potrząsać.',
        'Porównaj Safari lub Chrome z natywną aplikacją czujników lub kompasu, jeśli przeglądarka nie wyświetla danych.',
        'Uruchom ponownie urządzenie i powtórz test, jeśli odczyty są zamrożone w wielu aplikacjach.',
      ],
    },
    {
      type: 'tip',
      title: 'Uwaga dotycząca uprawnień iPhone i Android',
      html: 'Na iPhonie i iPadzie Safari może poprosić o pozwolenie na ruch i orientację po dotknięciu. Na Androidzie Chrome zazwyczaj udostępnia czujniki ruchu bardziej bezpośrednio, ale ustawienia prywatności, flagi przeglądarki, tryby oszczędzania baterii i osadzone WebView mogą nadal blokować lub ograniczać dane z czujników.',
    },
    {
      type: 'table',
      headers: ['Problem', 'Prawdopodobna przyczyna', 'Następny krok'],
      rows: [
        ['Żadne wartości się nie zmieniają', 'Odmowa pozwolenia, nieobsługiwana przeglądarka, urządzenie stacjonarne lub ograniczony WebView.', 'Otwórz na samym telefonie, użyj Safari lub Chrome, zezwól na dostęp do ruchu i przeładuj stronę.'],
        ['Bańka dryfuje na stole', 'Problem z kalibracją, nierówna powierzchnia, zakłócenia od etui lub szum akcelerometru.', 'Zdejmij etui, użyj znanej płaskiej powierzchni, uruchom ponownie i porównaj z natywną aplikacją poziomicy.'],
        ['Kierunek kompasu jest nieprawidłowy', 'Zakłócenia magnetyczne lub kalibracja kompasu systemowego.', 'Odsuń się od metalu/elektroniki i użyj procedury kalibracji kompasu w systemie operacyjnym.'],
        ['Wartości skaczą lub dają piki', 'Szum czujnika, uszkodzony sprzęt, agresywne ograniczanie przeglądarki lub nagły fizyczny ruch.', 'Testuj w bezruchu, zamknij ciężkie aplikacje i porównaj z inną przeglądarką lub aplikacją natywną.'],
      ],
    },
    {
      type: 'summary',
      title: 'Do czego ten test jest przydatny',
      items: [
        'Testowanie żyroskopu telefonu online bez instalowania aplikacji.',
        'Sprawdzanie dryftu akcelerometru za pomocą poziomicy na żywo.',
        'Ustalanie, czy sterowanie ruchem zawodzi z powodu sprzętu, kalibracji, uprawnień czy wsparcia przeglądarki.',
        'Przygotowanie telefonu do AR, gier, poziomowania aparatu, nawigacji lub rozwiązywania problemów z rotacją ekranu.',
      ],
    },
  ],
  ui: {
    startButton: 'Rozpocznij Kalibrację',
    permissionHint: 'Dotknij raz, aby odblokować czujniki ruchu',
    privacyBadge: 'Lokalne dane czujników',
    privacyCopy: 'Odczyty orientacji i ruchu pozostają w tej sesji przeglądarki.',
    orientationPanel: 'Orientacja',
    motionPanel: 'Ruch',
    bubblePanel: 'Cyfrowa poziomica',
    statusReady: 'Gotowy na pozwolenie czujnika',
    statusWaiting: 'Oczekiwanie na pozwolenie przeglądarki',
    statusDenied: 'Dostęp do czujnika odrzucony lub niedostępny',
    statusUnsupported: 'Czujniki ruchu nie są udostępniane przez tę przeglądarkę',
    statusActive: 'Strumień czujników na żywo aktywny',
    steadyLabel: 'Stabilny',
    movingLabel: 'W ruchu',
    shakingLabel: 'Wstrząsanie',
    alphaLabel: 'Alpha',
    betaLabel: 'Beta',
    gammaLabel: 'Gamma',
    accelXLabel: 'X',
    accelYLabel: 'Y',
    accelZLabel: 'Z',
    rotationAlphaLabel: 'Rot A',
    rotationBetaLabel: 'Rot B',
    rotationGammaLabel: 'Rot G',
    levelOffsetLabel: 'Odchylenie poziomicy',
    motionMagnitudeLabel: 'Wielkość ruchu',
    cubeLabel: 'Kostka orientacji 3D urządzenia',
    bubbleLabel: 'Wskaźnik poziomicy',
    calibrationLabel: 'Stopnie na żywo',
  },
};
