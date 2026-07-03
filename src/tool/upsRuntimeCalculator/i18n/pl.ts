import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UpsRuntimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-czasu-pracy-ups';
const title = 'Kalkulator Czasu Pracy UPS';
const description = 'Oblicz czas pracy baterii UPS, całkowite chronione obciążenie, użyteczne watogodziny i zalecany rozmiar VA dla komputerów, monitorów, routerów, urządzeń NAS i sprzętu domowego laboratorium.';

const faqData = [
  {
    question: 'Jak obliczyć czas pracy UPS?',
    answer: 'Zsumuj moc w watach każdego urządzenia podłączonego do UPS, pomnóż watogodziny baterii UPS przez sprawność falownika, odejmij rezerwę, którą chcesz zachować, a następnie podziel użyteczne watogodziny przez waty obciążenia. Wynik w godzinach można pomnożyć przez 60, aby uzyskać minuty.',
  },
  {
    question: 'Dlaczego rzeczywisty czas pracy UPS różni się od szacunków?',
    answer: 'Czas pracy zmienia się wraz z wiekiem baterii, temperaturą, szybkością rozładowania, sprawnością falownika, skokami obciążenia i napięciem odcięcia producenta. Traktuj wynik jako oszacowanie planistyczne, a następnie zweryfikuj go kontrolowanym testem wyłączenia.',
  },
  {
    question: 'Czy powinienem dobierać UPS według watów czy VA?',
    answer: 'Sprawdź obie wartości. Waty określają rzeczywistą moc, jaką UPS może dostarczyć, podczas gdy VA uwzględnia współczynnik mocy. UPS musi przekraczać twoje obciążenie w watach i mieć wystarczający zapas VA dla podłączonego sprzętu.',
  },
  {
    question: 'Ile zapasu UPS powinienem zachować?',
    answer: 'Praktycznym celem jest utrzymanie normalnego obciążenia poniżej około 70-80% mocy znamionowej UPS w watach. Pozostawia to miejsce na skoki rozruchowe, starzenie się baterii i przyszłe urządzenia.',
  },
  {
    question: 'Czy mogę podłączyć drukarki lub grzejniki do UPS?',
    answer: 'Unikaj drukarek laserowych, grzejników i innych obciążeń o wysokim prądzie rozruchowym, chyba że UPS jest do tego wyraźnie przystosowany. Mogą one przeciążyć falownik i drastycznie skrócić czas pracy.',
  },
];

const howToData = [
  {
    name: 'Wymień chronione urządzenia',
    text: 'Wprowadź urządzenia, które muszą pozostać online podczas awarii zasilania, takie jak komputer, monitor, router, modem, NAS i przełącznik sieciowy.',
  },
  {
    name: 'Wprowadź realistyczną moc w watach',
    text: 'Jeśli to możliwe, użyj zmierzonego poboru mocy z gniazdka. Jeśli masz tylko moc znamionową zasilacza, zmniejsz ją do oczekiwanego obciążenia roboczego zamiast używać maksymalnej wartości z etykiety.',
  },
  {
    name: 'Ustaw pojemność baterii i założenia',
    text: 'Wprowadź watogodziny baterii UPS, sprawność falownika, współczynnik mocy i procent rezerwy, którą chcesz zachować na bezpieczne wyłączenie.',
  },
  {
    name: 'Odczytaj czas pracy i zalecenie VA',
    text: 'Użyj oszacowanych minut i zalecanego VA jako wskazówki przy zakupie lub konfiguracji, a następnie zweryfikuj konfigurację bezpiecznym testem zaniku zasilania.',
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

export const content: ToolLocaleContent<UpsRuntimeCalculatorUI> = {
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
      text: 'Kalkulator Czasu Pracy UPS: Oszacuj Czas Podtrzymania Bateryjnego',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Oszacowanie czasu pracy UPS odpowiada na dwa praktyczne pytania: jak długo twój sprzęt może pozostać online podczas przerwy w dostawie prądu i czy UPS jest wystarczająco duży dla podłączonego obciążenia. Ten kalkulator łączy moc urządzeń, watogodziny baterii, sprawność falownika, współczynnik mocy i rezerwę na wyłączenie, dzięki czemu wynik jest bliższy rzeczywistemu planowaniu niż prostemu podziałowi pojemności baterii.',
    },
    {
      type: 'title',
      text: 'Wzór na Czas Pracy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Szacowany czas pracy w godzinach to <strong>użyteczne watogodziny baterii podzielone przez całkowite obciążenie w W</strong>. Użyteczne watogodziny to nie wydrukowana pojemność baterii: należy je skorygować o straty falownika i rezerwę, którą chcesz zachować na bezpieczne wyłączenie. Na przykład bateria 432 Wh przy 86% sprawności i 20% rezerwie dostarcza około 297 Wh użytecznej energii.',
    },
    {
      type: 'table',
      headers: ['Dane wejściowe', 'Dlaczego to ważne', 'Praktyczne wskazówki'],
      rows: [
        ['Obciążenie w watach', 'Bezpośrednio wpływa na czas pracy', 'Jeśli to możliwe, mierz miernikiem gniazdkowym, szczególnie w przypadku komputerów gamingowych i systemów NAS.'],
        ['Wh baterii', 'Określa zasób energii', 'Użyj danych producenta lub napięcia nominalnego pomnożonego przez amperogodziny.'],
        ['Sprawność', 'Uwzględnia straty falownika', '80-90% to rozsądny zakres planistyczny dla wielu konsumenckich UPS-ów.'],
        ['Współczynnik mocy', 'Przelicza waty na VA', 'Użyj specyfikacji UPS, jeśli jest znana; 0,6-0,8 jest powszechne w modelach budżetowych i średniej klasy.'],
        ['Rezerwa', 'Zachowuje margines na wyłączenie', '10-25% jest rozsądne dla kontrolowanego wyłączenia PC lub serwera.'],
      ],
    },
    {
      type: 'title',
      text: 'Ile Czasu Pracy Potrzebujesz?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '5-10 minut: wystarczy, aby przetrwać krótkie wahania napięcia lub bezpiecznie wyłączyć komputer stacjonarny.',
        '10-20 minut: przydatne dla routerów, modemów, urządzeń NAS i małych węzłów domowego laboratorium.',
        '30+ minut: lepsze dla ciągłości sieci, pracy zdalnej i lokalizacji z częstymi awariami.',
        'Kilka godzin: zwykle wymaga większego systemu bateryjnego, a nie tylko UPS-a biurkowego.',
      ],
    },
    {
      type: 'title',
      text: 'Waty a VA przy Wyborze UPS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nazwy produktów UPS często podają VA, ale moc w watach jest twardszym ograniczeniem dla rzeczywistego sprzętu. UPS 900 VA może obsługiwać tylko 540 W, podczas gdy inny model 900 VA może obsługiwać 600 W lub więcej. Sprawdź obie wartości i utrzymuj normalną pracę poniżej maksimum, aby uniknąć alarmów przeciążenia, skróconej żywotności baterii i nieudanych przełączeń podczas awarii.',
    },
    {
      type: 'title',
      text: 'Obciążenia, Które Zniekształcają Szacunki Czasu Pracy',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Komputery gamingowe mogą w kilka sekund przejść od niskiego poboru w spoczynku do wysokiego poboru GPU.',
        'Monitory znacznie się różnią w zależności od jasności, trybu HDR i rozmiaru panelu.',
        'Urządzenia NAS pobierają więcej energii podczas rozruchu dysków i odbudowy.',
        'Drukarki laserowe, grzejniki, pompy i sprężarki to złe obciążenia dla UPS, chyba że są wyraźnie obsługiwane.',
        'Stare baterie mogą dostarczać znacznie krótszy czas pracy, niż sugeruje ich pierwotna pojemność.',
      ],
    },
    {
      type: 'title',
      text: 'Lista Kontrolna Bezpiecznego Testowania',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'W pełni naładuj UPS przed testowaniem.',
        'Zapisz otwartą pracę i unikaj testowania podczas krytycznych zapisów lub aktualizacji oprogramowania.',
        'Odłącz zasilanie sieciowe, nie sprzęt, i obserwuj procent obciążenia UPS oraz szacunek baterii.',
        'Potwierdź, że twój PC, NAS lub serwer otrzymuje sygnał wyłączenia przed wyczerpaniem baterii.',
        'Powtarzaj test co kilka miesięcy, ponieważ akumulatory kwasowo-ołowiowe UPS szybko się starzeją.',
      ],
    },
  ],
  ui: {
    loadTitle: 'Chronione obciążenie',
    addDevice: 'Dodaj urządzenie',
    deviceName: 'Urządzenie',
    watts: 'Waty',
    remove: 'Usuń urządzenie',
    batteryWh: 'Pojemność baterii (Wh)',
    efficiency: 'Sprawność falownika',
    powerFactor: 'Współczynnik mocy',
    reserve: 'Rezerwa na wyłączenie',
    totalLoad: 'Całkowite obciążenie',
    runtime: 'Szacowany czas pracy',
    recommendedUps: 'Zalecany rozmiar',
    usableEnergy: 'Energia użyteczna',
    minutes: 'min',
    hours: 'godz.',
    wattsUnit: 'W',
    vaUnit: 'VA',
    whUnit: 'Wh',
    assumptionsLabel: 'Założenia UPS',
    presetDesktop: 'Komputer stacjonarny',
    presetMonitor: 'Monitor 27 cali',
    presetRouter: 'Router i modem',
    presetNas: 'NAS dwukieszeniowy',
    percentUnit: '%',
    bandLight: 'wygodne okno podtrzymania z zalecanym UPS-em około',
    bandBalanced: 'zrównoważone okno podtrzymania z zalecanym UPS-em około',
    bandHeavy: 'krótkie okno podtrzymania; rozważ większą baterię lub zmniejsz obciążenie około',
    summaryPrefix: 'Ta konfiguracja ma',
  },
};
