import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestRatonUI } from '../ui';

const slug = 'test-polling-rate-myszki-online';
const title = 'Online Test Polling Rate Myszki';
const description =
  'Sprawdź rzeczywiste Hz swojej myszki. Zweryfikuj, czy Twoja mysz gamingowa pracuje w 1000Hz lub więcej dzięki naszemu profesjonalnemu narzędziu.';

const faqData = [
  {
    question: 'Co to jest Polling Rate myszki?',
    answer:
      'To częstotliwość, z jaką mysz raportuje swoją pozycję do komputera, mierzona w Hz. Polling rate 1000Hz oznacza, że mysz wysyła dane co 1 milisekundę, zapewniając znacznie płynniejszy ruch.',
  },
  {
    question: 'Dlaczego mój test nie osiaga stale 1000Hz?',
    answer:
      'Przeglądarka może mierzyć polling rate tylko wtedy, gdy mysz jest w ruchu. Jeśli poruszasz nią powoli lub Twój procesor jest bardzo obciążony, pomiar może się wahać. Poruszaj myszą w szybkich kółkach, aby uzyskać rzeczywisty szczytowy wynik.',
  },
  {
    question: 'Czy lepiej mieć najwyższy możliwy polling rate?',
    answer:
      'Zazwyczaj tak w przypadku gier (1000Hz lub więcej), ponieważ redukuje to opóźnienia. Jednak ekstremalnie wysokie wartości (4000Hz lub 8000Hz) zużywają dużo zasobów procesora i nie wszystkie gry są pod nie zoptymalizowane.',
  },
  {
    question: 'Jak częstotliwość odświeżania monitora wpływa na myszkę?',
    answer:
      'Jeśli masz monitor 144Hz lub 240Hz, niski polling rate (125Hz) sprawi, że kursor będzie wydawał się przeskakiwać. Dla monitorów o wysokiej częstotliwości kluczowe jest używanie co najmniej 500Hz lub 1000Hz.',
  },
];

const howToData = [
  {
    name: 'Przygotuj obszar testowy',
    text: 'Umieść kursor wewnątrz strefy przechwytywania narzędzia.',
  },
  {
    name: 'Szybko poruszaj myszką',
    text: 'Rób szybkie, szerokie ruchy koliste. Narzędzie obliczy odstępy między każdym zdarzeniem mousemove wysłanym przez sprzęt.',
  },
  {
    name: 'Obserwuj wykres stabilności',
    text: 'Sprawdź, czy linia Hz jest stała, czy ma nagłe spadki, co może wskazywać na zakłócenia w myszach bezprzewodowych lub problemy z procesorem.',
  },
  {
    name: 'Przeanalizuj czas reakcji',
    text: 'Sprawdź średnie opóźnienie w milisekundach. Dobra mysz gamingowa powinna utrzymywać średnie opóźnienie bliskie 1ms.',
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

export const content: ToolLocaleContent<TestRatonUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje',
  bibliography: [
    {
      name: 'Gamepad Polling Rate — Logitech',
      url: 'https://www.logitechg.com/en-us/innovation/delta-zero.html',
    },
    {
      name: 'USB HID Polling Rate — USB Implementers Forum',
      url: 'https://www.usb.org/hid',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Definitywny Przewodnik po Polling Rate', level: 2 },
    {
      type: 'paragraph',
      html: 'Gdy fizycznie poruszasz myszką po podkładce, ten analogowy ruch musi zostać przetłumaczony na sygnały cyfrowe zrozumiałe dla komputera. <strong>Polling Rate</strong> to częstotliwość, z jaką mysz „raportuje” swoją pozycję do PC. Mierzy się ją w Hercach (Hz).',
    },
    { type: 'title', text: 'Poziomy Polling Rate i ich zastosowania', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>125 Hz</strong> — Mysz raportuje co 8 milisekund. Dobre do pracy biurowej, ale wydaje się rwane na monitorach 144Hz. <strong>1000 Hz</strong> — Złoty standard gamingowy: raportuje co 1 ms. Płynny ruch bez odczuwalnych opóźnień. <strong>8000 Hz</strong> — Najnowocześniejsza technologia (Razer, Logitech). Raportuje co 0,125 ms, ale wymaga mocnego procesora.',
    },
    { type: 'title', text: 'Dlaczego moje Hz wahają się?', level: 3 },
    {
      type: 'paragraph',
      html: 'Całkowicie normalne. Większość nowoczesnych myszy ma dynamiczny polling rate, aby oszczędzać energię. Jeśli poruszasz myszką powoli, wysyła ona mniej raportów, ponieważ jest mniej nowych danych. Tylko szybkie, ciągłe ruchy wypychają czujnik do jego rzeczywistego szczytu.',
    },
    { type: 'title', text: 'Polling Rate vs DPI: Wielkie Pomieszanie', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>DPI (Dots Per Inch)</strong> to czułość: ile pikseli pokonuje kursor na cal fizycznego ruchu. <strong>Hz (Polling Rate)</strong> to częstotliwość odświeżania: jak płynnie i terminowo ten ruch jest raportowany. Oba parametry są niezależne i uzupełniają się.',
    },
  ],
  ui: {
    badge: 'Test Myszki',
    title: 'Sprawdzanie Polling Rate',
    description: 'Poruszaj myszką w szybkich kółkach, aby zmierzyć Hz.',
    labelAvg: 'Średnia',
    labelPeak: 'Szczyt',
    placeholder: 'Poruszaj myszką tutaj',
  },
};
