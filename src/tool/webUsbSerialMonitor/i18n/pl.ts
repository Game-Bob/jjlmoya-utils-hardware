import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebUsbSerialMonitorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-szeregowy-webusb';
const title = 'Monitor Szeregowy WebUSB';
const description = 'Polacz sie ze sprzetem szeregowym USB z przegladarki, odczytuj wyjscie terminala na zywo, wysylaj polecenia i debuguj plytki Arduino, ESP32, RP2040 oraz makerskie bez instalowania terminala desktopowego.';

const faqData = [
  {
    question: 'Czy ten monitor szeregowy dziala z plytkami Arduino, ESP32 i Raspberry Pi Pico?',
    answer: 'Tak, gdy plytka udostepnia interfejs szeregowy USB obslugiwany przez Web Serial, a przegladarka jest oparta na Chromium. Typowe adaptery Arduino, ESP32, RP2040, CH340, CP210x i FTDI zwykle dzialaja po udzieleniu uprawnien przez uzytkownika.',
  },
  {
    question: 'Dlaczego nazywa sie to WebUSB, skoro korzysta z Web Serial?',
    answer: 'Wiekszosc plytek makerskich laczy sie przez USB, ale dostep do terminala w przegladarce zapewnia Web Serial API. WebUSB jest nizszego poziomu i nie jest wlasciwa abstrakcja dla prostego terminala w stylu UART.',
  },
  {
    question: 'Czy strona internetowa moze uzyskac dostep do moich urzadzen szeregowych bez pozwolenia?',
    answer: 'Nie. Przegladarka wymaga klikniecia uzytkownika i natywnego selektora urzadzen, zanim strona bedzie mogla otworzyc port szeregowy. To narzedzie nie przechowuje logow terminala ani identyfikatorow urzadzen.',
  },
  {
    question: 'Ktorej przegladarki powinienem uzyc do webowego terminala szeregowego?',
    answer: 'Uzywaj Chrome, Edge lub innej przegladarki opartej na Chromium przez HTTPS lub localhost. Firefox, Safari i wiele przegladarek iOS nie udostepnia Web Serial API.',
  },
  {
    question: 'Jaka predkosc transmisji powinienem wybrac?',
    answer: 'Wybierz predkosc transmisji skonfigurowana w oprogramowaniu firmware. Przyklady Arduino czesto uzywaja 9600 lub 115200, podczas gdy szybsze logi, bootloadery i szybkie strumienie czujnikow moga uzywac 230400, 460800 lub 921600.',
  },
];

const howToData = [
  {
    name: 'Podlacz urzadzenie szeregowe USB',
    text: 'Podlacz plytke lub adapter i zamknij wszystkie inne terminale szeregowe, ktore moga miec juz otwarty port.',
  },
  {
    name: 'Wybierz predkosc transmisji',
    text: 'Wybierz ta sama predkosc transmisji, ktorej uzywa firmware, np. 115200 dla wielu szkicow Arduino, ESP32 i RP2040.',
  },
  {
    name: 'Udziel uprawnien przegladarce',
    text: 'Nacisnij Polacz, wybierz urzadzenie szeregowe w selektorze przegladarki i zezwol stronie na otwarcie portu.',
  },
  {
    name: 'Odczytuj i wysylaj dane terminala',
    text: 'Obserwuj przychodzace logi w terminalu, wysylaj polecenia z opcjonalnymi zakonczeniami linii CRLF oraz czysc lub wstrzymuj wyjscie na zywo, gdy to konieczne.',
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

export const content: ToolLocaleContent<WebUsbSerialMonitorUI> = {
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
      text: 'Internetowy Monitor Szeregowy dla Sprzetu USB Maker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ten przegladarkowy monitor szeregowy otwiera port szeregowy USB bezposrednio z Chrome lub Edge, a nastepnie przesyła strumieniowo tekst z mikrokontrolerow, mostkow USB UART, plytek rozwojowych, bootloaderow, przyrzadow testowych, czujnikow i sprzetu laboratoryjnego. Jest przeznaczony do szybkiej diagnostyki, gdy potrzebujesz konsoli szeregowej, ale nie chcesz instalowac desktopowego IDE ani aplikacji terminalowej.',
    },
    {
      type: 'message',
      title: 'Granica uprawnien przegladarki',
      html: 'Strona nie moze po cichu wyliczac ani otwierac twoich urzadzen szeregowych. Dostep rozpoczyna sie dopiero po nacisnieciu Polacz i wybraniu portu w selektorze przegladarki. Dane terminala pozostaja w biezacej karcie, chyba ze sam je skopiujesz.',
    },
    {
      type: 'stats',
      items: [
        { value: '9600-921600', label: 'typowe ustawienia predkosci' },
        { value: 'CRLF', label: 'opcjonalne zakonczenie polecenia' },
        { value: 'lokalna', label: 'sesja terminala' },
      ],
    },
    {
      type: 'title',
      text: 'Kiedy Webowy Terminal Szeregowy Jest Przydatny',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Sprawdzanie komunikatow startowych z Arduino, ESP32, ESP8266, RP2040, STM32 lub niestandardowego oprogramowania.',
        'Wysylanie polecen AT do modemu, GPS, LoRa, Wi-Fi, Bluetooth lub modulow komorkowych przez adapter USB UART.',
        'Odczytywanie wyjscia czujnikow ze stanowiska testowego, laboratorium szkolnego, kontrolera robotyki lub prototypu warsztatowego.',
        'Weryfikacja, czy sterownik mostka szeregowego USB, kabel, zasilanie plytki i predkosc transmisji firmware dzialaja razem.',
        'Zbieranie szybkiego dziennika bledow przed zgloszeniem bledu lub poproszeniem o wsparcie sprzetowe.',
      ],
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Monitor szeregowy web',
          description: 'Najlepszy do szybkiego wsparcia, instrukcji klasowych, diagnostyki terenowej i przeplywow pracy makerow, gdzie otwarcie URL jest szybsze niz instalacja IDE.',
        },
        {
          title: 'Terminal desktopowy',
          description: 'Lepszy do protokolow binarnych, dlugich sesji przechwytywania, skryptow, sprzetowej kontroli przeplywu, makr i srodowisk, w ktorych API przegladarek sa blokowane.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Lista Kontrolna Predkosci Transmisji i Zakonczen Linii',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Ustawienie', 'Typowy wybor', 'Co idzie nie tak, gdy jest zle'],
      rows: [
        ['Predkosc transmisji', '115200 dla wielu nowoczesnych plytek, 9600 dla starszych przykladow.', 'Czytelny tekst zamienia sie w losowe symbole lub nie pojawia sie zaden uzyteczny dziennik.'],
        ['Zakonczenie linii', 'CRLF dla wielu parserow polecen, bez zakonczenia dla surowych protokolow znakowych.', 'Polecenia sa ignorowane, poniewaz firmware czeka na terminator.'],
        ['Wylaczny dostep do portu', 'Zamknij Arduino Serial Monitor, PuTTY, screen, minicom lub narzedzia producenta.', 'Selektor przegladarki otwiera port, ale odczyt lub zapis nie powodzi sie.'],
        ['Bezpieczny kontekst', 'HTTPS lub localhost.', 'Brak Serial API nawet w obslugiwanej przegladarce.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Brak wyjscia szeregowego?',
      html: 'Upewnij sie, ze plytka jest zasilana, a kabel USB obsluguje dane, nie tylko ladowanie. Sprobuj 9600, 57600 i 115200, jesli nie znasz predkosci transmisji firmware. Nacisnij reset po polaczeniu, poniewaz wiele plytek drukuje logi startowe tylko podczas uruchamiania. Zamknij inne oprogramowanie, ktore moze nadal posiadac port szeregowy, i zainstaluj sterownik systemu operacyjnego dla CH340, CP210x, FTDI lub producenta plytki, jesli urzadzenie nigdy sie nie pojawia.',
    },
    {
      type: 'title',
      text: 'Prywatnosc, Bezpieczenstwo i Ograniczenia',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Mocne strony i ograniczenia Web Serial',
      items: [
        {
          pro: 'Brak instalacji desktopowej dla podstawowej diagnostyki tekstu szeregowego.',
          con: 'Wymaga przegladarki opartej na Chromium i bezpiecznego kontekstu.',
        },
        {
          pro: 'Selektor przegladarki ogranicza dostep do konkretnego wybranego portu.',
          con: 'Nieprzeznaczony do analizatorow protokolow binarnych ani dlugich nienadzorowanych przechwycen.',
        },
        {
          pro: 'Dobrze dziala dla dziennikow tekstowych, wierszy polecen i szybkich kontroli sprzetu.',
          con: 'Niektore zasady korporacyjne, przegladarki mobilne i systemy operacyjne blokuja Web Serial.',
        },
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Serial nie jest dostepny',
    unsupportedBody: 'Uzyj Chrome lub Edge przez HTTPS lub localhost i upewnij sie, ze twoje urzadzenie udostepnia interfejs szeregowy USB.',
    secureContext: 'Web Serial wymaga HTTPS lub localhost. Zaladuj te strone ponownie z bezpiecznego pochodzenia i sprobuj ponownie.',
    statusIdle: 'Wybierz predkosc transmisji, a nastepnie podlacz urzadzenie szeregowe USB',
    statusPermission: 'Oczekiwanie na selektor portu szeregowego przegladarki',
    statusOpening: 'Otwieranie portu szeregowego',
    statusConnected: 'Port szeregowy polaczony',
    statusDisconnected: 'Port szeregowy rozlaczony',
    statusError: 'Polaczenie szeregowe nie powiodlo sie',
    connect: 'Polacz szeregowo',
    disconnect: 'Rozlacz',
    send: 'Wyslij',
    clear: 'Wyczysc',
    pause: 'Pauza',
    resume: 'Wznow',
    baudRate: 'Predkosc transmisji',
    newline: 'Dolacz CRLF',
    inputPlaceholder: 'Wpisz polecenie, a nastepnie nacisnij Enter',
    portFallback: 'Nie wybrano portu',
    portLabel: 'Tozsamosc portu',
    connectedDeviceLabel: 'Podlaczone urzadzenie',
    deviceNameFallback: 'Urzadzenie szeregowe USB',
    transportLabel: 'Lacze Web Serial',
    bytesLabel: 'Bajty',
    linesLabel: 'Linie',
    privacyTitle: 'Dostep kontrolowany',
    privacyBody: 'Przegladarka udostepnia tylko wybrane przez ciebie urzadzenie szeregowe. Logi pozostaja w tej karcie, chyba ze je skopiujesz.',
    emptyLog: 'Wyjscie terminala pojawi sie tutaj po podlaczeniu urzadzenia szeregowego.',
    copied: 'Skopiowano',
    copyLog: 'Kopiuj',
    presetSlow: '9600',
    presetArduino: '115200',
    presetFast: '921600',
    terminalLabel: 'Terminal na zywo',
    unknownUsbId: 'N/A',
    logDirectionRx: 'rx',
    logDirectionTx: 'tx',
    logDirectionSys: 'sys',
    vidPrefix: 'VID ',
    pidSeparator: ' / PID ',
    baudUnit: ' baud',
    vendorFtdi: 'FTDI USB Serial',
    vendorSilabs: 'Silicon Labs CP210x',
    vendorCh340: 'CH340 USB Serial',
    vendorArduinoUsb: 'Arduino USB Serial',
    vendorAdafruit: 'Adafruit USB Serial',
    vendorRp2040: 'Raspberry Pi RP2040',
    vendorEspressif: 'Espressif USB Serial',
    vendorOpenSource: 'Open Source USB Serial',
  },
};
