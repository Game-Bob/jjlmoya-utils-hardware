import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RefreshRateDetectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'detektor-czestotliwosci-odswiezania-monitora';
const title = 'Detektor Częstotliwości Odświeżania Monitora';
const description = 'Natychmiast wykryj częstotliwość odświeżania swojego monitora z precyzją, używając requestAnimationFrame. Przetestuj stabilność klatek i porównaj z normami branżowymi.';

const faqData = [
  {
    question: 'Co to jest częstotliwość odświeżania (Hz)?',
    answer: 'Częstotliwość odświeżania to liczba aktualizacji obrazu na sekundę przez monitor. Monitor 60Hz odświeża obraz 60 razy na sekundę, podczas gdy 144Hz robi to 144 razy. Wyższe wartości zapewniają płynniejszy ruch.',
  },
  {
    question: 'Jak dokładny jest ten detektor?',
    answer: 'Narzędzie wykorzystuje requestAnimationFrame, które synchronizuje się z cyklem odświeżania monitora. Dokładność zależy od obciążenia systemu. Tryb stabilny mierzy przez dłuższy czas dla większej precyzji.',
  },
  {
    question: 'Jaka jest różnica między trybem Stabilnym a Szybkim?',
    answer: 'Tryb Szybki mierzy przez krótki czas (~3 sekundy), aby uzyskać szybką informację. Tryb Stabilny trwa dłużej (~10 sekund), aby odfiltrować szumy systemowe i zapewnić bardziej wiarygodne wyniki.',
  },
  {
    question: 'Dlaczego wykryte Hz różnią się od danych producenta monitora?',
    answer: 'Może to wynikać z: poluzowanego kabla, nieaktualnych sterowników lub skalowania systemu operacyjnego. Spróbuj odłączyć i ponownie podłączyć kabel lub zaktualizować sterowniki GPU.',
  },
  {
    question: 'Jakie częstotliwości odświeżania obsługują nowoczesne monitory?',
    answer: 'Typowe standardy to 60Hz (podstawowy), 75Hz, 120Hz, 144Hz (gaming), 240Hz (gaming wyczynowy) i 360Hz (profesjonalny e-sport).',
  },
];

const howToData = [
  {
    name: 'Załaduj narzędzie',
    text: 'Po prostu otwórz tę stronę. Detektor natychmiast rozpocznie pomiar.',
  },
  {
    name: 'Czekaj na stabilizację',
    text: 'Wybierz tryb Stabilny lub Szybki. Pozwól na zakończenie pomiaru, nie ruszając oknem.',
  },
  {
    name: 'Sprawdź prędkościomierz',
    text: 'Częstotliwość odświeżania pojawi się na tarczy, wraz ze statystykami (min/max/śr).',
  },
  {
    name: 'Porównaj ze standardami',
    text: 'Narzędzie pokaże, któremu standardowi odpowiada Twój monitor (60, 75, 120, 144, 240, 360Hz).',
  },
  {
    name: 'Opcjonalnie: test pomijania klatek',
    text: 'Obserwuj animowany kwadrat, aby wizualnie potwierdzić płynność obrazu.',
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

export const content: ToolLocaleContent<RefreshRateDetectorUI> = {
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
      text: 'Detektor Częstotliwości Odświeżania Monitora: Test Hz Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Natychmiast i precyzyjnie wykryj częstotliwość odświeżania monitora (60Hz, 144Hz, 240Hz itd.). Sprawdź stabilność klatek i upewnij się, że Twój ekran działa zgodnie ze specyfikacją.',
    },
    {
      type: 'title',
      text: 'Dlaczego Częstotliwość Odświeżania Monitora Jest Ważna',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Częstotliwość odświeżania decyduje o płynności ruchu na ekranie. Gracze potrzebują monitorów 144Hz+, podczas gdy 60Hz wystarcza do pracy biurowej. To narzędzie potwierdza, czy Twój monitor osiąga deklarowane parametry.',
    },
    {
      type: 'title',
      text: 'Jak Wykryć Częstotliwość Odświeżania',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Uruchom detektor – pomiar zaczyna się automatycznie',
        'Wybierz tryb Szybki (3s) lub Stabilny (10s)',
        'Odczytaj Hz z tarczy prędkościomierza',
        'Porównaj z normami branżowymi (60, 75, 120, 144, 240, 360Hz)',
      ],
    },
    {
      type: 'title',
      text: 'Popularne Standardy Odświeżania',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Standard', 'Zastosowanie', 'Typowy Użytkownik'],
      rows: [
        ['60Hz', 'Praca Biurowa', 'Biuro, Przeglądanie Sieci'],
        ['75Hz', 'Lekki Gaming', 'Gracze Niedzielni'],
        ['120Hz', 'Multimedia', 'Konsole, Streaming'],
        ['144Hz', 'Gaming Wyczynowy', 'FPS, Dynamiczne Gry'],
        ['240Hz+', 'Profesjonalny E-sport', 'Pro Gracze, Streamerzy'],
      ],
    },
    {
      type: 'title',
      text: 'Rozwiązywanie Problemów: Monitor Pokazuje Niższe Hz Niż Powinien',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Sprawdź kabel HDMI/DisplayPort – słabe połączenie ogranicza przepustowość',
        'Zaktualizuj sterowniki karty graficznej (NVIDIA, AMD, Intel)',
        'Sprawdź ustawienia ekranu w systemie, aby włączyć wysokie odświeżanie',
        'Wypróbuj inne kable lub porty w monitorze',
        'Zrestartuj komputer i wykonaj test ponownie',
      ],
    },
    {
      type: 'title',
      text: 'Technologia Stojąca za Detektorem',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Narzędzie wykorzystuje API requestAnimationFrame, które synchronizuje się bezpośrednio z cyklem odświeżania monitora. Mierząc czas między klatkami animacji, obliczamy dokładną częstotliwość odświeżania bez potrzeby użycia specjalistycznego sprzętu.',
    },
  ],
  ui: {
    badge: 'Test Ekranu',
    title: 'Detektor Odświeżania Monitora',
    description: 'Błyskawicznie wykryj częstotliwość odświeżania ekranu',
    modeStable: 'Stabilny (10s, precyzyjny)',
    modeFast: 'Szybki (3s, błyskawiczny)',
    measurementStatus: 'Pomiar...',
    currentHz: 'Bieżące',
    averageHz: 'Średnie',
    maxHz: 'Maksymalne',
    minHz: 'Minimalne',
    standardDetected: 'Wykryty Standard',
    frameSkippingTest: 'Test Pomijania Klatek',
    startMeasurement: 'Rozpocznij Pomiar',
    resetMeasurement: 'Resetuj',
    copyResult: 'Kopiuj Wynik',
    copiedFeedback: 'Skopiowano do schowka!',
    optimalConfiguration: '[OK] Optymalna Konfiguracja',
    suboptimalConfiguration: '[OSTRZEŻENIE] Poniżej Optimum',
    unstableRefreshRate: '[OSTRZEŻENIE] Niestabilne Odświeżanie',
    measurementNotStarted: 'Gotowy do pomiaru',
    switchMonitorHint: 'Przeciągnij okno na inny monitor, aby go przetestować',
    incompatibleBrowserMsg: 'Twoja przeglądarka nie obsługuje requestAnimationFrame',
  },
};
