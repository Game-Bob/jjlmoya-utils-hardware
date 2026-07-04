import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebBluetoothBleScannerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'skaner-ble-web-bluetooth';
const title = 'Skaner Web Bluetooth BLE';
const description = 'Skanuj pobliskie urządzenia Bluetooth Low Energy z przeglądarki, sprawdzaj wyeksponowane UUID usług GATT i testuj, czy Twój sprzęt IoT lub wearable jest wykrywalny.';

const faqData = [
  {
    question: 'Czy strona internetowa może skanować urządzenia Bluetooth bez pozwolenia?',
    answer: 'Nie. Web Bluetooth zawsze wymaga gestu użytkownika i wyboru uprawnień przeglądarki. To narzędzie widzi tylko urządzenie, które wyraźnie wybierzesz i nie przechowuje adresów MAC, identyfikatorów urządzeń ani wyników skanowania.',
  },
  {
    question: 'Dlaczego skaner nie pokazuje każdego pobliskiego urządzenia BLE?',
    answer: 'Przeglądarki celowo udostępniają Bluetooth poprzez wybór uprawnień, a nie jako cichy skaner w tle. Niektóre urządzenia również przestają nadawać, ukrywają swoją nazwę, wymagają parowania lub udostępniają usługi dopiero po nawiązaniu połączenia.',
  },
  {
    question: 'Które przeglądarki obsługują Web Bluetooth?',
    answer: 'Web Bluetooth jest najlepiej obsługiwany w przeglądarkach stacjonarnych opartych na Chromium, takich jak Chrome i Edge. Zazwyczaj wymaga HTTPS lub localhost i nie jest dostępny w wielu konfiguracjach Firefox, Safari i przeglądarek iOS.',
  },
  {
    question: 'Czy może odczytywać prywatne dane z czujników z wearables?',
    answer: 'Tylko jeśli urządzenie udostępnia kompatybilne usługi GATT, a przeglądarka przyznaje dostęp. Wiele komercyjnych wearables wymaga aplikacji dostawcy, szyfrowania, parowania lub właściwości zastrzeżonych, których ogólny skaner przeglądarki nie może zdekodować.',
  },
  {
    question: 'Czym są UUID usług GATT?',
    answer: 'UUID usługi GATT identyfikuje grupę funkcji Bluetooth Low Energy, takich jak Usługa Baterii, Tętno, Informacje o Urządzeniu lub niestandardowa usługa dostawcy używana przez sprzęt maker i IoT.',
  },
];

const howToData = [
  {
    name: 'Użyj zgodnej przeglądarki',
    text: 'Otwórz narzędzie w Chrome lub Edge przez HTTPS lub localhost, a następnie upewnij się, że Bluetooth jest włączony na komputerze lub telefonie.',
  },
  {
    name: 'Przełącz sprzęt w tryb nadawania',
    text: 'Obudź urządzenie BLE, wyłącz je i włącz ponownie, naciśnij przycisk parowania lub otwórz tryb nadawania, aby pojawiło się w selektorze uprawnień przeglądarki.',
  },
  {
    name: 'Skanuj środowisko',
    text: 'Naciśnij Skanuj Środowisko i wybierz urządzenie BLE, które chcesz sprawdzić. Okno dialogowe uprawnień przeglądarki dokładnie kontroluje, które urządzenie staje się widoczne dla strony.',
  },
  {
    name: 'Odczytaj usługi GATT',
    text: 'Po nawiązaniu połączenia przejrzyj karty UUID usług, aby zidentyfikować standardowe profile Bluetooth, niestandardowe usługi firmware i czy urządzenie udostępnia oczekiwaną ścieżkę danych.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<WebBluetoothBleScannerUI> = {
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
      text: 'Tester BLE online dla IoT, Wearables i Sprzętu Maker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ten skaner Web Bluetooth pozwala testować, czy pobliskie urządzenie Bluetooth Low Energy jest wykrywalne z przeglądarki i jakie usługi GATT udostępnia po przyznaniu uprawnień. Jest przydatny podczas debugowania firmware ESP32, szkiców Arduino BLE, inteligentnych czujników, wearables fitness, klawiatur, niestandardowych beaconów, monitorów środowiskowych i prototypowego sprzętu przed zbudowaniem natywnej aplikacji mobilnej.',
    },
    {
      type: 'message',
      title: 'Model prywatności',
      html: 'GameBob nie przechowuje adresów MAC, identyfikatorów urządzeń, nazw, UUID, danych sygnału ani historii skanowania. Selektor uprawnień przeglądarki decyduje, do którego pojedynczego urządzenia strona może uzyskać dostęp, a wyniki pozostają w bieżącej sesji przeglądarki.',
    },
    {
      type: 'table',
      headers: ['Co widzisz', 'Co to oznacza', 'Co sprawdzić dalej'],
      rows: [
        ['Nazwa urządzenia', 'Nadawana nazwa Bluetooth, jeśli sprzęt ją transmituje.', 'Jeśli jest pusta, sprawdź dane nadawania firmware lub użyj znanego prefiksu nazwy podczas testowania.'],
        ['ID urządzenia', 'Identyfikator ograniczony do przeglądarki, a nie surowy publiczny adres MAC.', 'Używaj go tylko dla tej sesji przeglądarki; nie traktuj go jako uniwersalnego numeru seryjnego sprzętu.'],
        ['UUID usług GATT', 'Grupy usług wyeksponowane po zaakceptowaniu połączenia.', 'Porównaj standardowe UUID z listą Bluetooth SIG lub tabelą usług firmware.'],
        ['Usługa niestandardowa', 'UUID specyficzny dla dostawcy lub projektu.', 'Otwórz firmware, profil aplikacji mobilnej lub dokumentację BLE, aby zmapować charakterystyki i uprawnienia.'],
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego skanowanie Bluetooth w przeglądarce jest inne',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Natywne aplikacje skanera BLE często wyświetlają ciągłe nadawanie z wielu pobliskich urządzeń. Web Bluetooth jest celowo bardziej restrykcyjny: strona musi być otwarta w bezpiecznym kontekście, skanowanie musi rozpocząć się od kliknięcia użytkownika, a przeglądarka wyświetla selektor uprawnień. Chroni to użytkowników przed cichym śledzeniem, jednocześnie dając deweloperom praktyczny sposób połączenia się z wybranym sprzętem BLE z poziomu JavaScript.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Skaner Web Bluetooth',
          description: 'Najlepszy do szybkiej walidacji firmware, demonstracji, przepływów wsparcia, laboratoriów szkolnych i diagnostyki opartej na przeglądarce, gdzie tarcie instalacyjne ma znaczenie.',
        },
        {
          title: 'Natywna aplikacja BLE',
          description: 'Lepsza do skanowania w tle, rejestrowania RSSI, przepływów parowania, szyfrowanych protokołów dostawcy, dużych drzew charakterystyk i długoterminowej diagnostyki terenowej.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Częste powody, dla których urządzenie BLE się nie pojawia',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bluetooth jest wyłączony na poziomie systemu operacyjnego lub przeglądarka nie ma uprawnień Bluetooth.',
        'Urządzenie jest połączone z innym telefonem, laptopem, aplikacją dostawcy lub bramą i przestało nadawać.',
        'Sprzęt nadaje tylko przez krótki czas po uruchomieniu lub po naciśnięciu przycisku parowania.',
        'Przeglądarka nie jest oparta na Chromium, strona nie jest obsługiwana przez HTTPS lub platforma blokuje Web Bluetooth.',
        'Firmware nadaje dane producenta, ale ukrywa nazwę lokalną, więc selektor może pokazać nienazwane urządzenie.',
        'Urządzenie wymaga parowania, szyfrowania lub zastrzeżonego uwierzytelniania, zanim usługi staną się czytelne.',
      ],
    },
    {
      type: 'title',
      text: 'Jak używać UUID GATT podczas debugowania',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Udane połączenie z UUID usług informuje, że przeglądarka może osiągnąć urządzenie peryferyjne i że urządzenie peryferyjne udostępnia przynajmniej część swojej tabeli GATT. Standardowe usługi, takie jak Usługa Baterii, Informacje o Urządzeniu, Tętno, Urządzenie Interfejsu Człowieka i Wykrywanie Środowiskowe, są łatwe do rozpoznania. Niestandardowe UUID zazwyczaj wskazują na funkcje specyficzne dla firmware i wymagają mapy charakterystyk z kodu źródłowego lub dokumentacji dostawcy.',
    },
    {
      type: 'table',
      headers: ['Objaw', 'Prawdopodobna przyczyna', 'Praktyczne rozwiązanie'],
      rows: [
        ['Selektor uprawnień jest pusty', 'Urządzenie nie nadaje lub brak obsługi przeglądarki.', 'Uruchom ponownie urządzenie, włącz tryb parowania, podejdź bliżej lub spróbuj ponownie w Chrome/Edge.'],
        ['Połączenie natychmiast się nie udaje', 'Urządzenie jest zajęte, poza zasięgiem lub odrzuca połączenie przeglądarki.', 'Odłącz aplikacje dostawcy i trzymaj urządzenie peryferyjne blisko komputera.'],
        ['Brak usług na liście', 'GATT jest niedostępny, usługi są ukryte lub nie przyznano dostępu dla tych UUID.', 'Dodaj znane opcjonalne usługi w testach firmware lub sprawdź za pomocą natywnego narzędzia BLE.'],
        ['Pojawiają się tylko niestandardowe UUID', 'Sprzęt używa usług firmware specyficznych dla dostawcy.', 'Zmapuj UUID na stałe kodu źródłowego i udokumentuj uprawnienia odczytu/zapisu charakterystyk.'],
      ],
    },
    {
      type: 'title',
      text: 'Ograniczenia bezpieczeństwa i prywatności',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Strona nie może po cichu zbierać pobliskich urządzeń Bluetooth w tle.',
        'Przeglądarka może ukrywać rzeczywiste adresy MAC i zamiast tego udostępniać identyfikator urządzenia ograniczony do sesji.',
        'Dostęp rozpoczyna się dopiero po kliknięciu przez użytkownika przycisku skanowania i wybraniu urządzenia.',
        'Wyniki nie są przesyłane ani przechowywane przez GameBob.',
        'Wrażliwe urządzenia komercyjne mogą wymagać szyfrowania lub przepływu parowania dostawcy, którego ten ogólny skaner nie może ominąć.',
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Bluetooth nie jest dostępny',
    unsupportedBody: 'Spróbuj Chrome lub Edge na komputerze lub Androidzie, włącz Bluetooth i otwórz stronę przez HTTPS lub localhost.',
    secureContext: 'Web Bluetooth wymaga bezpiecznej strony HTTPS lub localhost. Załaduj ponownie narzędzie z bezpiecznego źródła i spróbuj ponownie.',
    scanButton: 'Skanuj Środowisko',
    scanning: 'Skanowanie',
    reconnect: 'Skanuj ponownie',
    disconnect: 'Rozłącz',
    privacyTitle: 'Prywatność projektowa',
    privacyBody: 'GameBob nie przechowuje adresów MAC, identyfikatorów urządzeń, nazw, UUID ani historii skanowania. Przeglądarka udostępnia tylko wybrane przez Ciebie urządzenie.',
    deviceLabel: 'Wybrane urządzenie',
    nameFallback: 'Nienazwane urządzenie BLE',
    idLabel: 'ID urządzenia przeglądarki',
    servicesLabel: 'Usługi GATT',
    noServices: 'Nie zwrócono żadnych czytelnych usług podstawowych dla tego połączenia.',
    statusIdle: 'Gotowy do skanowania pobliskiego sprzętu BLE',
    statusPermission: 'Oczekiwanie na selektor uprawnień przeglądarki',
    statusConnecting: 'Łączenie z wybranym urządzeniem BLE',
    statusConnected: 'Połączono i usługi załadowane',
    statusDisconnected: 'Urządzenie rozłączone',
    statusCancelled: 'Nie wybrano urządzenia BLE lub Bluetooth jest wyłączony/niedostępny na tym urządzeniu.',
    statusUnavailable: 'Bluetooth wydaje się być wyłączony, zablokowany lub nieobecny na tym urządzeniu. Włącz Bluetooth lub spróbuj ze sprzętu wyposażonego w adapter BLE.',
    statusError: 'Skanowanie Bluetooth nie powiodło się',
    signalUnknown: 'Siła sygnału jest kontrolowana przez selektor przeglądarki',
    gattUnavailable: 'To urządzenie nie udostępniło serwera GATT przeglądarce',
    customServiceName: 'Usługa niestandardowa lub specyficzna dla dostawcy',
    serviceGenericAccess: 'Dostęp Ogólny',
    serviceGenericAttribute: 'Atrybut Ogólny',
    serviceDeviceInformation: 'Informacje o Urządzeniu',
    serviceHeartRate: 'Tętno',
    serviceBattery: 'Usługa Baterii',
    serviceHumanInterfaceDevice: 'Urządzenie Interfejsu Człowieka',
    serviceCyclingSpeedCadence: 'Prędkość i Kadencja Jazdy na Rowerze',
    serviceEnvironmentalSensing: 'Wykrywanie Środowiskowe',
    serviceUserData: 'Dane Użytkownika',
    serviceFitnessMachine: 'Maszyna Fitness',
    uuidHelp: 'UUID identyfikują usługi Bluetooth. Standardowe usługi są nazywane automatycznie; UUID specyficzne dla dostawcy wymagają dokumentacji firmware lub urządzenia.',
    compatibilityHint: 'Działa najlepiej w przeglądarkach opartych na Chromium z włączonym Bluetooth. Web Bluetooth jest celowo ograniczony uprawnieniami i może nie pokazywać każdego pobliskiego nadajnika.',
    serviceCountSingular: 'usługa',
    serviceCountPlural: 'usług',
  },
};
