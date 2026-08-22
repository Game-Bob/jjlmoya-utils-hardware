import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamepadPollingRateCheckerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tester-czestotliwosci-odswiezania-kontrolera-hertz';
const title = 'Tester Polling Rate i Hertzów Kontrolera';
const description = 'Zmierz wykrywaną przez przeglądarkę częstotliwość odświeżania, odstęp między raportami i stabilność czasu dla kontrolera USB lub Bluetooth.';

const faq = [
  {
    question: 'Co dokładnie mierzy ten tester częstotliwości odświeżania kontrolera?',
    answer: 'Mierzy zmiany znacznika czasu Gamepad API w przeglądarce podczas ruchu gałką analogową. Wyświetlana wartość w hercach to zaobserwowana częstotliwość w przeglądarce, a nie bezpośredni pomiar elektryczny magistrali USB.',
  },
  {
    question: 'Czy przeglądarka może potwierdzić podkręcenie kontrolera do 1000 Hz?',
    answer: 'Może wykazać, czy aktualizacje docierają płynnie i regularnie do strony, ale nie może certyfikować sprzętowego podkręcenia portu USB. Zarządzanie czasem w przeglądarce i systemie operacyjnym może grupować zdarzenia.',
  },
  {
    question: 'Dlaczego trzeba kręcić gałką analogową po okręgu?',
    answer: 'Ciągły ruch obrotowy stale zmienia wartości obu osi, generując stabilny strumień nowych stanów. Pozostawienie gałki w bezruchu powoduje zbyt małą liczbę zmian.',
  },
  {
    question: 'Czy można porównać wydajność połączenia USB i Bluetooth?',
    answer: 'Tak, wykonaj test z takim samym czasem i ruchem obrotowym dla każdego połączenia w tej samej przeglądarce, aby porównać częstotliwość, odstęp i jitter.',
  },
];

const howTo = [
  {
    name: 'Podłącz i aktywuj kontroler',
    text: 'Podłącz kontroler przez USB lub Bluetooth i naciśnij dowolny przycisk, aby przeglądarka go wykryła przez Gamepad API.',
  },
  {
    name: 'Wybierz urządzenie i czas pomiaru',
    text: 'Wybierz kontroler z listy i ustaw dziesięć sekund na zbalansowany pomiar wstępny.',
  },
  {
    name: 'Wykonuj ciągłe ruchy obrotowe gałką',
    text: 'Uruchom test i zataczaj płynne okręgi lewą gałką do momentu wypełnienia pierścienia postępu.',
  },
  {
    name: 'Odczytaj częstotliwość i stabilność',
    text: 'Porównaj średnie herce, odstęp w milisekundach i jitter w identycznych warunkach pomiarowych.',
  },
];

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

export const content: ToolLocaleContent<GamepadPollingRateCheckerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania o polling rate kontrolerów',
  faq,
  bibliographyTitle: 'Referencje techniczne',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Zmierz częstotliwość odświeżania kontrolera w przeglądarce',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Narzędzie monitoruje znaczniki czasu o wysokiej rozdzielczości z wybranego kontrolera podczas ruchu gałki analogowej. Odrzuca wartości skrajne, oblicza średni odstęp między raportami i przelicza go na herce (1000 podzielone przez milisekundy). Cały proces odbywa się lokalnie na stronie.',
    },
    {
      type: 'table',
      headers: ['Wskaźnik', 'Co oznacza ta wartość', 'Czego nie dowodzi bezpośrednio'],
      rows: [
        ['Zaobserwowana częstotliwość', 'Liczba raportów odbieranych przez stronę w każdej sekundzie', 'Elektryczna częstotliwość portu USB'],
        ['Średni odstęp', 'Średni czas między kolejnymi aktualizacjami znacznika czasu', 'Całkowite opóźnienie wejścia aż do ekranu'],
        ['Jitter (odchylenie)', 'Różnica czasu między 5. a 95. percentylem', 'Samoistna usterka sprzętowa'],
        ['Wiarygodność', 'Liczba i regularność próbki zebranej podczas pomiaru', 'Przemysłowa dokładność laboratoryjna'],
      ],
    },
    {
      type: 'title',
      text: 'Jak przeprowadzić powtarzalny test hertzów',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zamknij obciążające aplikacje w tle, utrzymaj kartę w trybie aktywnym i wykonuj takie same płynne ruchy gałką przy każdej próbie. Używaj tej samej przeglądarki i czasu przy porównywaniu kabli, adapterów Bluetooth lub ustawień systemu.',
    },
    {
      type: 'tip',
      title: 'Zawsze porównuj w identycznych warunkach',
      html: 'Wykonaj co najmniej dwie próby po zmianie kabla lub portu USB. Pojedynczy szczyt jest mniej wartościowy niż stabilny wynik z niskim jitterem.',
    },
    {
      type: 'title',
      text: 'Dlaczego nie jest to test całkowitego opóźnienia wejścia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gamepad API odczytuje dane kontrolera po przetworzeniu przez system operacyjny i przeglądarkę. Nie mierzy reakcji elektrycznej kabla ani czasu odświeżania monitora. Zaobserwowany odstęp jest doskonały do porównań w sieci, ale nie stanowi całkowitej latencji.',
    },
  ],
  ui: {
    privacyNote: '100% lokalne przetwarzanie sygnału',
    stepConnect: 'Podłącz i naciśnij przycisk',
    stepMove: 'Wykonuj ruchy obrotowe gałką',
    stepRead: 'Porównaj częstotliwość i stabilność',
    deviceLabel: 'Wykryty aktywny kontroler',
    devicePlaceholder: 'Naciśnij dowolny przycisk kontrolera, aby wykryć',
    deviceFallback: 'Podłączony kontroler',
    durationLabel: 'Czas pomiaru',
    durationFive: '5 sek.',
    durationTen: '10 sek.',
    durationTwenty: '20 sek.',
    startAction: 'Rozpocznij pomiar',
    stopAction: 'Zatrzymaj',
    resetAction: 'Resetuj',
    orbitInstruction: 'Kręć lewą gałką płynnie po okręgu podczas pomiaru',
    traceLabel: 'Wykres znaczników czasu na żywo',
    observedRateLabel: 'Zaobserwowana częstotliwość',
    intervalLabel: 'Średni odstęp',
    jitterLabel: 'Odchylenie (Jitter)',
    samplesLabel: 'Prawidłowe próbki',
    confidenceLabel: 'Wiarygodność testu',
    confidenceLow: 'Niska',
    confidenceMedium: 'Średnia',
    confidenceHigh: 'Wysoka',
    statusWaiting: 'Oczekiwanie na kompatybilny kontroler',
    statusReady: 'Gotowy. Naciśnij start trzymając kciuk na gałce.',
    statusMeasuring: 'Rejestrowanie znaczników czasu lokalnie',
    statusNeedsMovement: 'Wykonuj obszerniejsze ruchy gałką, aby zebrać dane',
    statusComplete: 'Pomiar zakończony. Powtórz w tych samych warunkach.',
    statusUnsupported: 'Twoja przeglądarka nie obsługuje Gamepad API',
    statusDisconnected: 'Brak aktywnego kontrolera. Podłącz go i naciśnij przycisk.',
    statusStopped: 'Pomiar zatrzymany. Wynik częściowy pozostaje widoczny.',
    limitHeading: 'Ograniczenie techniczne pomiaru w przeglądarce',
    limitBody: 'Mierzy aktualizacje widoczne przez Gamepad API. Nie certyfikuje podkręcania USB ani całkowitej latencji.',
    emptyValue: '-',
    hertzUnit: 'Hz',
    millisecondsUnit: 'ms',
    reportsUnit: 'odstępów',
    progressLabel: 'Postęp pomiaru',
  },
};
