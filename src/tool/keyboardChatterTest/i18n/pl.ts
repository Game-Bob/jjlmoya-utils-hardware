import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeyboardChatterTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-chatter-klawiatury';
const title = 'Test Chatteru Klawiatury';
const description = 'Wykryj chatterowanie klawiatury mechanicznej, podwójne pisanie i wadliwe odbijanie przełączników, sprawdzając jak szybko ten sam klawisz pojawia się dwukrotnie.';

const faqData = [
  {
    question: 'Czym jest chatter klawiatury?',
    answer: 'Chatter klawiatury to usterka sprzętowa, w której jedno fizyczne naciśnięcie jest rejestrowane jako wiele naciśnięć. Jest to powszechne w brudnych, zużytych, utlenionych lub źle debounce\'owanych przełącznikach mechanicznych.',
  },
  {
    question: 'Jak działa ten test chatteru klawiatury?',
    answer: 'Naciskaj ten sam podejrzany klawisz powoli, jedno stuknięcie naraz. Jeśli dziennik pokazuje powtarzające się naciśnięcia w odstępie zaledwie kilku milisekund, przełącznik może odbijać i produkować podwójne litery.',
  },
  {
    question: 'Jaka delta oznacza, że moja klawiatura podwójnie pisze?',
    answer: 'Powtórzone naciśnięcie poniżej 30 ms jest silnie podejrzane o chatter. Powtórzenia od 30 do 50 ms zasługują na uwagę. Normalne celowe powtórzenia są zwykle powyżej 50 ms dla większości użytkowników.',
  },
  {
    question: 'Dlaczego pierwsze naciśnięcie nie pokazuje delty?',
    answer: 'Delta wymaga poprzedniego naciśnięcia tego samego klawisza. Pierwsze naciśnięcie ustala linię bazową, a późniejsze naciśnięcia pokazują odstęp czasu w milisekundach.',
  },
  {
    question: 'Czy oprogramowanie może naprawić chatter klawiatury?',
    answer: 'Oprogramowanie debounce może ukryć niektóre objawy, ale nie naprawia przełącznika. Czyszczenie, ponowne osadzenie przełączników hot-swap, wymiana przełącznika lub naprawa PCB klawiatury może być konieczna.',
  },
];

const howToData = [
  {
    name: 'Otwórz narzędzie i naciskaj klawisze normalnie',
    text: 'Nie ma przycisku startu. Kliknij w narzędzie, jeśli to konieczne, a następnie naciśnij klawisz, który pisał podwójnie.',
  },
  {
    name: 'Stukaj podejrzany klawisz pojedynczo',
    text: 'Naciśnij klawisz, który podwójnie pisze. Jeśli jedno fizyczne naciśnięcie tworzy kilka wierszy dziennika z małymi deltami, przełącznik prawdopodobnie chatteruje.',
  },
  {
    name: 'Odczytaj kod kolorów',
    text: 'Zielony oznacza normalny powyżej 50 ms, żółty oznacza podejrzany od 30 do 50 ms, a czerwony oznacza chatter wykryty poniżej 30 ms.',
  },
  {
    name: 'Eksportuj dziennik, jeśli to konieczne',
    text: 'Użyj przycisku pobierania, aby zapisać dziennik CSV, który może pomóc porównać klawisze lub udokumentować przerywaną usterkę.',
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

export const content: ToolLocaleContent<KeyboardChatterTestUI> = {
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
      text: 'Test Podwójnego Pisania Klawiatury Mechanicznej',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ten test chatteru klawiatury pomaga zdiagnozować klawiaturę mechaniczną, która pisze dwie litery z jednego naciśnięcia, pomija czyste zwolnienia lub produkuje powtarzające się znaki bez celowego dwukrotnego stuknięcia. Użyj go przed czyszczeniem przełączników, zmianą ustawień debounce firmware, otwarciem roszczenia gwarancyjnego lub wymianą przełącznika hot-swap.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Jak odczytać wynik',
      badge: 'Progi delta',
      html: '<p><strong>Normalny</strong> oznacza, że powtórzenie było powyżej 50 ms i zwykle jest celowe. <strong>Podejrzany</strong> oznacza 30-50 ms i powinien być ponownie przetestowany na tym samym klawiszu. <strong>Chatter wykryty</strong> oznacza poniżej 30 ms, co bardzo prawdopodobnie jest jednym fizycznym naciśnięciem odbijającym w wiele styków elektrycznych.</p>',
    },
    {
      type: 'title',
      text: 'Dlaczego Przełączniki Mechaniczne Chatterują',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Przełącznik mechaniczny nie zamyka się jako idealnie czysty sygnał cyfrowy. Styki metalowe mogą odbijać przez kilka milisekund przed ustabilizowaniem się. Firmware klawiatury normalnie filtruje to odbicie za pomocą okna debounce. Chatterowanie występuje, gdy styk jest brudny, zużyty, utleniony, luźny, pęknięty lub źle dostrojony na tyle, że klawiatura zgłasza dodatkowe naciśnięcia po tym, jak filtr debounce powinien był je obsłużyć.',
    },
    {
      type: 'table',
      headers: ['Objaw', 'Prawdopodobna przyczyna', 'Co wypróbować najpierw'],
      rows: [
        ['Jeden klawisz pisze tę samą literę dwa razy', 'Brudny lub zużyty styk przełącznika', 'Zdejmij nasadkę, wydmuchaj kurz i przetestuj ponownie przed wymianą przełącznika.'],
        ['Kilka klawiszy hot-swap chatteruje po montażu', 'Kołki przełącznika nie są czysto osadzone', 'Wyciągnij i ponownie osadź przełącznik, sprawdzając zagięte kołki lub luźne gniazdo.'],
        ['Występuje tylko po rozlaniu lub wilgoci', 'Utlenienie lub pozostałości na stykach', 'Odłącz klawiaturę i wyczyść zgodnie z instrukcjami producenta.'],
        ['Wiele klawiszy pokazuje małe delty', 'Debounce firmware zbyt niski lub problem skanowania', 'Porównaj na innym porcie USB i przejrzyj ustawienia debounce firmware, jeśli dostępne.'],
      ],
    },
    {
      type: 'title',
      text: 'Metoda Testowania, Która Zmniejsza Fałszywe Pozytywy',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Testuj jeden podejrzany klawisz naraz zamiast pisać pełne zdania.',
        'Naciśnij klawisz raz, całkowicie go zwolnij i poczekaj chwilę przed następnym naciśnięciem.',
        'Porównaj podejrzany klawisz z pobliskim klawiszem, który wydaje się zdrowy.',
        'Zignoruj pierwszy wiersz dla klawisza, ponieważ nie ma poprzedniego naciśnięcia do porównania.',
        'Jeśli ten sam klawisz wielokrotnie pokazuje czerwone wiersze poniżej 30 ms z pojedynczych stuknięć, traktuj to jako usterkę sprzętową.',
        'Jeśli pojawiają się tylko żółte wiersze, powtórz test wolniej i sprawdź, czy twój rytm stukania powoduje krótki interwał.',
      ],
    },
    {
      type: 'title',
      text: 'Chatter vs. Celowe Szybkie Pisanie',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Chatter',
          description: 'Skupiony na jednym klawiszu, często poniżej 30 ms, i pojawia się, gdy zamierzałeś jedno naciśnięcie.',
          points: ['Sprawdź przełącznik lub gniazdo.', 'Porównaj z pobliskim zdrowym klawiszem.'],
        },
        {
          title: 'Szybkie pisanie',
          description: 'Wpływa na wiele klawiszy, podąża za twoim rytmem i zwykle wynosi powyżej 50 ms między powtarzanymi naciśnięciami tego samego klawisza.',
          points: ['Zazwyczaj normalne użytkowanie.', 'Przetestuj ponownie z wolniejszymi pojedynczymi stuknięciami.'],
        },
        {
          title: 'Powtarzanie klawisza systemu',
          description: 'Pojawia się przy przytrzymaniu klawisza i zwykle powtarza się w regularnym rytmie ustawionym przez system operacyjny.',
          points: ['Zwolnij całkowicie między stuknięciami.', 'Sprawdź ustawienia powtarzania klawiatury oddzielnie.'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Co Zrobić, Gdy Klawisz Nie Przechodzi Testu',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Zapisz dziennik CSV przed zmianą czegokolwiek, aby móc porównać wyniki przed i po.',
        'Zdejmij nasadkę klawisza i sprawdź, czy nie ma brudu, pozostałości płynu lub trzonka, który nie wraca płynnie.',
        'W przypadku klawiatur hot-swap, ponownie osadź lub wymień przełącznik i przetestuj tę samą pozycję ponownie.',
        'W przypadku klawiatur lutowanych, porównaj opcje debounce firmware przed założeniem, że PCB wymaga naprawy.',
        'Wypróbuj inny kabel i port USB, jeśli wiele niepowiązanych klawiszy pokazuje niemożliwe delty.',
        'Dla wsparcia gwarancyjnego, podaj dotknięty klawisz, powtarzane wartości delta, model klawiatury, wersję firmware i czy usterka podąża za przełącznikiem czy gniazdem PCB.',
      ],
    },
    {
      type: 'summary',
      title: 'Szybka zasada',
      items: [
        'Pojedynczy czerwony wiersz to wskazówka, nie werdykt.',
        'Powtarzane czerwone wiersze poniżej 30 ms na tym samym fizycznym klawiszu są silnym dowodem chatteru klawiatury.',
        'Używaj celowych pojedynczych stuknięć i porównaj podejrzany przełącznik z pobliskim zdrowym klawiszem przed wymianą sprzętu.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Naciśnij dowolny klawisz',
    statusListening: 'Pomiar delt klawiszy',
    statusChatter: 'Chatter wykryty',
    totalPresses: 'Łącznie naciśnięć',
    chatterEvents: 'Zdarzenia chatteru',
    worstDelta: 'Najgorsza delta',
    watchWindow: 'Zachowane wiersze',
    keyColumn: 'Klawisz',
    deltaColumn: 'Delta',
    verdictColumn: 'Werdykt',
    timeColumn: 'Czas',
    normal: 'Normalny',
    suspect: 'Podejrzany',
    chatter: 'Chatter',
    waiting: 'Oczekiwanie',
    clear: 'Wyczyść dziennik',
    exportLog: 'Eksportuj CSV',
    hint: 'Dziennik przechowuje 80 najnowszych wierszy, aby długie sesje pozostały szybkie. Powtarzanie przytrzymanego klawisza jest ignorowane; czerwone wiersze pochodzą z oddzielnych naciśnięć, które wystąpiły zbyt blisko siebie.',
    captureNotice: 'Brak przycisku startu. Stuknij podejrzany klawisz raz i obserwuj deltę od jego poprzedniego naciśnięcia.',
    keyboardAriaLabel: 'Ostatnia aktywność klawiszy',
    logAriaLabel: 'Dziennik zdarzeń chatteru klawiatury',
    escapeKey: 'Esc',
    backspaceKey: 'Back',
    tabKey: 'Tab',
    enterKey: 'Enter',
    capsLockKey: 'Caps',
    shiftKey: 'Shift',
    controlKey: 'Ctrl',
    metaKey: 'Meta',
    altKey: 'Alt',
    spaceKey: 'Spacja',
    csvHeader: 'klawisz,kod,delta_ms,dotkliwość,czas',
  },
};
