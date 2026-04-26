import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestMandoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-pada-online';
const title = 'Test Padów i Kontrolerów Online';
const description = 'Przetestuj swój kontroler Xbox, PlayStation lub PC. Wizualizuj martwe strefy, drift analogów i przyciski.';

const faqData = [
  {
    question: 'Co to jest Drift Analoga?',
    answer: 'Drift występuje, gdy kontroler rejestruje ruch bez dotykania drążka. Jest on spowodowany zużyciem wewnętrznych potencjometrów, które wysyłają błędny sygnał elektryczny w stałym kierunku.',
  },
  {
    question: 'Jak mogę naprawić drift za pomocą oprogramowania?',
    answer: 'Jeśli drift jest niewielki, możesz skonfigurować większą "Martwą Strefę" (Dead Zone) w ustawieniach gry. Spowoduje to ignorowanie małych ruchów drążka w jego centralnym położeniu.',
  },
  {
    question: 'Czy narzędzie jest kompatybilne z padami PS5, Xbox i Switch?',
    answer: 'Tak. Nasze narzędzie korzysta ze standardowego interfejsu Gamepad API nowoczesnych przeglądarek, który wykrywa prawie każdy kontroler podłączony przez USB lub Bluetooth, w tym DualSense, DualShock 4 i kontrolery Xbox.',
  },
  {
    question: 'Dlaczego przeglądarka nie wykrywa mojego kontrolera?',
    answer: 'Ze względów bezpieczeństwa przeglądarki aktywują obsługę pada dopiero po naciśnięciu pierwszego przycisku. Jeśli pad się nie pojawia, naciśnij dowolny przycisk (np. A lub X) i upewnij się, że nie korzystasz z rygorystycznego trybu incognito.',
  },
];

const howToData = [
  {
    name: 'Podłącz kontroler',
    text: 'Podłącz pad przez USB lub sparuj go przez Bluetooth ze swoim komputerem.',
  },
  {
    name: 'Aktywuj wykrywanie',
    text: 'Poruszaj drążkami lub naciśnij dowolny przycisk, aby przeglądarka rozpoznała podłączone urządzenie.',
  },
  {
    name: 'Przetestuj martwe strefy',
    text: 'Puść drążki i obserwuj osie na ekranie. Jeśli wartości nie wynoszą 0.0000, masz niewielki drift.',
  },
  {
    name: 'Zweryfikuj przyciski i wibracje',
    text: 'Naciśnij każdy przycisk i spust. Wskaźniki wizualne powinny się zaświecić, a jeśli Twój kontroler to obsługuje, możesz przetestować silnik wibracji.',
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

export const content: ToolLocaleContent<TestMandoUI> = {
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
      text: 'Test Padów Online: Wykryj Drift i Problemy z Analogami',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Darmowe narzędzie do testowania kontrolerów Xbox, PlayStation, Switch i innych. Wizualizuj martwe strefy, wykrywaj drift i testuj wibracje.',
    },
    {
      type: 'title',
      text: 'Co to jest Drift Analoga',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Drift to częsta wada drążków analogowych, w której rejestrowany jest ruch bez dotykania analogu. Jest on spowodowany zużyciem wewnętrznych potencjometrów.',
    },
    {
      type: 'title',
      text: 'Kompatybilność Kontrolerów',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kompatybilny z Xbox One, Xbox Series X/S, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro i praktycznie każdym nowoczesnym padem USB lub Bluetooth.',
    },
  ],
  ui: {
    badge: 'Test Wejścia',
    title: 'Test Padów i Kontrolerów',
    description: 'Przetestuj swój kontroler i wykryj problemy.',
    connectionMessage: 'Podłącz urządzenie USB lub Bluetooth',
    connectionStatus: 'Połączono',
    axisLabel: 'Osie',
    buttonsLabel: 'Przyciski',
    vibrationTitle: 'Test Wibracji',
    vibrationDescription: 'Wymaga obsługi przez przeglądarkę i kompatybilnego pada.',
    vibrationLow: 'Niskie (Rumble)',
    vibrationHigh: 'Wysokie (Buzz)',
    eventHistoryTitle: 'Historia Zdarzeń',
    eventHistoryClear: 'Wyczyść',
    eventWaiting: 'Oczekiwanie na zdarzenia...',
    gameStartBtn: 'ROZPOCZNIJ WYZWANIE',
    gameControllerWarning: 'Podłącz pad lub użyj klawiatury',
    gameTimer: 'Czas',
    gameScore: 'Wynik',
    gameInstruction: 'Naciskaj szybko',
    gameCompleted: 'Wyzwanie Ukończone',
    gameNewRecord: 'NOWY REKORD',
    gameRestartBtn: 'Spróbuj ponownie',
    gameFeedback: 'Jesteś legendą przycisków',
    gameIntroTitlePre: 'Refleks ',
    gameIntroHighlight: 'Pro Gamera',
    gameIntroTitlePost: '?',
    gameIntroDescPre: 'Przetestuj opóźnienie kontrolera i swoją szybkość reakcji. Masz ',
    gameIntroDescSeconds: '30 sekund',
    gameIntroDescPost: ', aby opanować przyciski.',
    gameShareBtn: 'UDOSTĘPNIJ RANGĘ',
    gameLogConnected: 'Połączono',
    gameLogDisconnected: 'Rozłączono',
    gameLogCleared: 'Log wyczyszczony...',
    gameLogBtnPrefix: 'Przycisk',
    gameVibNotSupported: 'Wibracje nieobsługiwane.',
    gameVibLow: 'Niskie',
    gameVibHigh: 'Wysokie',
    gameMoveStick: 'RUSZ ANALOGIEM',
    gamePress: 'NACIŚNIJ',
    rankLegendaryName: 'LEGENDARNY',
    rankLegendaryDesc: 'Twoje palce poruszają się z prędkością dźwięku.',
    rankLegendaryFlavor: 'Mój pad lata!',
    rankProName: 'PRO GAMER',
    rankProDesc: 'Masz stalowy refleks i dobrze skalibrowany kontroler.',
    rankProFlavor: 'Mój pad lata!',
    rankGamerName: 'GAMER',
    rankGamerDesc: 'Nieźle, ale potrzebujesz więcej praktyki w grach rankingowych.',
    rankGamerFlavor: 'Prawie się udało!',
    rankNoobName: 'NOOB',
    rankNoobDesc: 'Na pewno masz włączony kontroler?',
    rankNoobFlavor: 'Ten kontroler mnie nie słucha!',
    gameShareText: 'Pobijesz mnie?',
    gameShareScorePrefix: 'Mój wynik to',
    gameShareScoreSuffix: 'trafień',
    gameShareTitle: 'Test Padów Online',
  },
};
