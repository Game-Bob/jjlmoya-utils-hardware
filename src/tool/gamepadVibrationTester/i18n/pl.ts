import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProbadorVibracionMandoUI } from '../ui';

const slug = 'test-wibracji-pada-online';
const title = 'Test Wibracji Pada Online';
const description =
  'Przetestuj silniki haptyczne i wibracje Dual-Rumble swojego pada w przeglądarce. Obsługuje pady Xbox, DualShock, DualSense i generyczne.';

const faqData = [
  {
    question: 'Czego potrzebuję, aby przetestować wibracje pada online?',
    answer:
      'Wystarczy podłączyć pad do komputera lub urządzenia mobilnego za pomocą kabla USB lub sparować go przez Bluetooth. Gdy zostanie połączony, naciśnij dowolny przycisk, aby został wykryty.',
  },
  {
    question: 'Czy narzędzie działa z każdym modelem pada?',
    answer:
      'Większość nowoczesnych padów znanych marek (jak PlayStation czy Xbox) jest kompatybilna, jeśli Twoje urządzenie i system operacyjny je obsługują.',
  },
  {
    question: 'Prawa strona mojego pada wibruje słabiej niż lewa, czy to normalne?',
    answer:
      'Tak, całkowicie normalne. Pady zazwyczaj mają asymetryczną konstrukcję, w której jedna strona odpowiada za silne, głębokie wibracje, a druga za szybkie, subtelne drżenia.',
  },
  {
    question: 'Czy przeprowadzanie tych testów mocno zużywa baterię?',
    answer:
      'Wibracje są jedną z najbardziej energochłonnych funkcji w bezprzewodowym padzie. Przeprowadzanie ciągłych, długich testów rozładuje baterię szybciej niż zwykle.',
  },
];

const howToData = [
  {
    name: 'Podłącz i włącz pad',
    text: 'Połącz pad z komputerem PC, Mac lub urządzeniem mobilnym przez kabel USB lub Bluetooth.',
  },
  {
    name: 'Naciśnij przycisk na padzie',
    text: 'Przeglądarki wymagają naciśnięcia przynajmniej jednego przycisku, aby pad został wykryty i rozpoczęła się komunikacja webowa.',
  },
  {
    name: 'Dostosuj silniki wibracji',
    text: 'Skonfiguruj moc Silnego Silnika (Low) i Precyzyjnego Silnika (High) niezależnie od siebie.',
  },
  {
    name: 'Uruchom wzorce',
    text: 'Wybierz jedno z ustawień wstępnych lub ręcznie skonfiguruj parametry i wyślij sygnał, aby poczuć każdy element.',
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

export const content: ToolLocaleContent<ProbadorVibracionMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje',
  bibliography: [
    {
      name: 'Jak działają wibracje haptyczne — HobbyConsolas',
      url: 'https://www.hobbyconsolas.com/reportajes/como-funciona-vibracion-haptica-mando-dualsense-ps5-757673',
    },
    {
      name: 'Gamepad API — W3C',
      url: 'https://w3c.github.io/gamepad/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Jak sprawdzić wibracje swojego pada do gier', level: 2 },
    {
      type: 'paragraph',
      html: 'Wibracje zwrotne to jeden z najbardziej immersyjnych elementów sprzętu do grania. Gdy silnik ulega awarii, pierwszymi symptomami są zazwyczaj nienaturalne brzęczenie lub asymetryczne wibracje. Wczesna diagnoza zapobiega poważniejszym usterkom.',
    },
    { type: 'title', text: 'Po co przeprowadzać test wibracji?', level: 3 },
    {
      type: 'paragraph',
      html: 'Przy zakupie używanego pada, po aktualizacji sterowników lub po upadku, testowanie silników haptycznych pomaga odróżnić rzeczywiste awarie sprzętowe od problemów z oprogramowaniem. Kompatybilne z padami Xbox, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro oraz generycznymi padami USB.',
    },
    { type: 'title', text: 'Architektura Dual-Rumble vs. Aktuator Liniowy', level: 3 },
    {
      type: 'paragraph',
      html: 'Klasyczne pady (Xbox, DualShock) wykorzystują dwa asymetryczne mikrosilniki: lewy generuje głębokie, dudniące wibracje; prawy wytwarza szybkie, wysokie brzęczenie. Zaawansowane urządzenia, takie jak DualSense, wykorzystują aktuatory liniowe symulujące tekstury i opór.',
    },
    { type: 'title', text: 'Przewodnik diagnostyczny oparty na symptomach', level: 3 },
    {
      type: 'paragraph',
      html: 'Aktywuj każdy silnik niezależnie na 100%. Jeśli oba brzmią tak samo, pad może być repliką z jednym silnikiem. Jeśli jeden nie odpowiada, sprawdź połączenie przed otwarciem obudowy. Przetestuj różne natężenia: wysokiej jakości silniki reagują płynnie, a nie jak przełącznik włącz/wyłącz.',
    },
  ],
  ui: {
    badge: 'Test Wibracji',
    title: 'Tester Wibracji Pada',
    description: 'Bezpośrednia kontrola nad silnikiem Dual-Rumble Twojego pada.',
    deviceDisconnected: 'Pad rozłączony',
    deviceDisconnectedSub: 'Naciśnij przycisk na padzie, aby rozpocząć',
    deviceFallback: 'Pad połączony',
    deviceConnectedSub: 'Stabilne połączenie. Gotowy do testu.',
    noSupportWarning: "Nie wykryto obsługi Dual-Rumble w Twojej przeglądarce. Używanie podstawowych wibracji generycznych.",
    tabPresets: 'Najlepsze presety',
    tabCustom: 'Wysoka precyzja',
    presetHeavyTitle: 'Uderzenie młota',
    presetHeavyDesc: 'Ciężki silnik na maks. przez 300ms. Symuluje mocne uderzenie.',
    presetLightTitle: 'Brzęczenie pszczoły',
    presetLightDesc: 'Tylko prawy silnik. Idealny do wykrywania nietypowego brzęczenia.',
    presetHeartbeatTitle: 'Bicie serca',
    presetHeartbeatDesc: 'Subtelne kolejne impulsy. Idealne do sprawdzania retencji bezwładnościowej.',
    presetSongTitle: 'Rytm monety',
    presetSongDesc: 'Symuluje kolejne dźwięki monet. Krótki i haptyczny.',
    presetRockYouTitle: 'Rock You!',
    presetRockYouDesc: "Klasyk Queen w Twoich dłoniach: boom, boom, clap!",
    presetEarthquakeTitle: 'Maksymalne trzęsienie!',
    presetEarthquakeDesc: 'Oba silniki na 100% siły wybuchowej. BARDZO intensywne.',
    customStrongLabel: 'Mocna siła (Lewy)',
    customWeakLabel: 'Słaba siła (Prawy)',
    customDurationLabel: 'Czas trwania impulsu',
    btnSendSignal: 'WYŚLIJ SYGNAŁ TERAZ',
  },
};
