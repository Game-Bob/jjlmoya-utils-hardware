import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UsbPowerBudgetCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-budzetu-zasilania-usb';
const title = 'Kalkulator Budżetu Zasilania USB';
const description = 'Sprawdź, czy port USB, ładowarka, hub, kabel lub profil USB-C PD może bezpiecznie zasilać Twoje urządzenia po uwzględnieniu marginesu rezerwy i spadku napięcia na kablu.';

const faqData = [
  {
    question: 'Skąd mam wiedzieć, czy port USB może zasilić moje urządzenie?',
    answer: 'Porównaj całkowitą moc urządzenia z mocą źródła USB, uwzględnij margines bezpieczeństwa i oszacuj spadek napięcia na kablu. Konfiguracja może zawieść, nawet gdy nominalna moc wygląda na wysoką, jeśli kabel jest długi, cienki lub przewodzi wysoki prąd przy 5 woltach.',
  },
  {
    question: 'Dlaczego długość kabla ma znaczenie przy zasilaniu USB?',
    answer: 'Prąd płynący przez miedź powoduje spadek napięcia. Długie kable i cienkie przewodniki mają większą rezystancję, więc urządzenie może otrzymać niższe napięcie niż zapewnia ładowarka. Jest to szczególnie ważne w przypadku płytek Raspberry Pi, dysków twardych, taśm LED, stacji dokujących i hubów zasilanych z magistrali.',
  },
  {
    question: 'Jaki margines rezerwy powinienem zastosować?',
    answer: 'Użyj co najmniej 20 procent dla normalnej elektroniki, 30 procent dla silników, napędów, radiotelefonów lub płytek z obciążeniami impulsowymi, a więcej, jeśli jakość adaptera jest nieznana lub urządzenie musi działać nieprzerwanie.',
  },
  {
    question: 'Czy może to zastąpić testy negocjacji USB-C PD?',
    answer: 'Nie. Kalkulator sprawdza budżet elektryczny. Nie weryfikuje, czy ładowarka, e-marker kabla, urządzenie lub hub rzeczywiście negocjują określony profil Power Delivery.',
  },
];

const howToData = [
  { name: 'Wybierz profil źródła', text: 'Wybierz typowy profil USB lub USB-C PD lub ręcznie edytuj napięcie i prąd.' },
  { name: 'Opisz kabel', text: 'Wprowadź długość kabla i przekrój przewodu. Cienkie przewody o wysokim AWG powodują większy spadek napięcia.' },
  { name: 'Dodaj obciążenie', text: 'Wprowadź obciążenie jednego urządzenia w watach i liczbę urządzeń współdzielących to samo źródło.' },
  { name: 'Odczytaj status', text: 'Użyj statusu, spadku na kablu, napięcia końcowego, wykorzystania i marginesu, aby zdecydować, czy konfiguracja jest bezpieczna.' },
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

export const content: ToolLocaleContent<UsbPowerBudgetCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Zasilanie USB to budżet, nie etykieta', level: 2 },
    {
      type: 'paragraph',
      html: 'Ładowarka USB oznaczona jako 15 W, 45 W lub 100 W opisuje, co źródło może zaoferować w odpowiednich warunkach. Twoje urządzenie widzi tylko wynik po negocjacji protokołu, limitach prądowych, rezystancji kabla, jakości złącza, stratach w hubie i skokach obciążenia. Ten kalkulator koncentruje się na praktycznym pytaniu elektrycznym: po spadku na kablu i marginesie rezerwy, czy pozostało wystarczająco dużo mocy dla sprzętu, który chcesz uruchomić?',
    },
    {
      type: 'stats',
      items: [
        { label: 'Prąd domyślny USB 2.0', value: '0,5 A' },
        { label: 'Maksimum domyślne USB-C przy 5 V', value: '3 A' },
        { label: 'Zalecana rezerwa', value: '20%+' },
      ],
    },
    { type: 'title', text: 'Jak interpretować wynik', level: 3 },
    {
      type: 'table',
      headers: ['Status', 'Znaczenie', 'Najlepszy następny krok'],
      rows: [
        ['Bezpieczny', 'Obciążenie mieści się w mocy źródła po wybranej rezerwie, a szacowane napięcie urządzenia pozostaje prawidłowe.', 'Używaj konfiguracji, ale zwracaj uwagę na ciepło, jeśli adapter jest mały lub zabudowany.'],
        ['Napięty', 'Obciążenie jest blisko limitu z rezerwą lub spadek na kablu staje się znaczący.', 'Skróć kabel, wybierz grubsze przewody, zmniejsz obciążenie lub przejdź na wyższy profil mocy.'],
        ['Przekroczony budżet', 'Obciążenie przekracza użyteczną moc źródła lub napięcie po stronie urządzenia jest prawdopodobnie zbyt niskie.', 'Użyj mocniejszej ładowarki, aktywnego huba, krótszego kabla lub urządzenia negocjującego wyższe napięcie USB-C PD.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gdy waty są wystarczające, ale urządzenie wciąż się resetuje',
      html: '<p>Prąd rozruchowy może być znacznie wyższy niż średnia moc wydrukowana na etykiecie urządzenia. Zasilacz 5 V traci napięcie szybciej niż profil PD 20 V dla tej samej mocy, ponieważ musi przewodzić więcej prądu. Wiele tanich kabli używa cienkich przewodów zasilających, nawet gdy zewnętrzna powłoka wygląda solidnie, a huby zasilane z magistrali dzielą jeden budżet upstream na wszystkie urządzenia downstream.</p>',
    },
    { type: 'title', text: 'Spadek napięcia na kablu w prostych słowach', level: 3 },
    {
      type: 'paragraph',
      html: 'Spadek napięcia to strata powstająca, gdy prąd płynie przez rezystancję kabla. Zasilanie USB ma dwa przewody w ścieżce zasilania, więc kalkulator używa długości w obie strony. Kabel o długości jednego metra to elektrycznie dwa metry miedzi dla pętli zasilania. Niższe numery AWG są grubsze i zazwyczaj lepsze dla obciążeń o wysokim prądzie.',
    },
    {
      type: 'comparative',
      items: [
        { title: 'Krótki gruby kabel', description: 'Najlepszy dla płytek Raspberry Pi, obudów SSD, zestawów deweloperskich i stacji dokujących USB-C pobierających prąd impulsowy.' },
        { title: 'Długi cienki kabel', description: 'Akceptowalny dla czujników niskiej mocy lub powolnego ładowania, ale ryzykowny dla napędów, obciążeń LED i płytek obliczeniowych.' },
        { title: 'Wyższe napięcie PD', description: 'Zmniejsza prąd dla tej samej mocy, co obniża straty na kablu, ale tylko jeśli źródło, kabel i urządzenie to negocjują.' },
      ],
    },
    {
      type: 'tip',
      title: 'Praktyczna zasada',
      html: 'Jeśli kalkulator mówi, że konfiguracja jest napięta, potraktuj to jako ostrzeżenie terenowe. Awarie USB często pojawiają się jako losowe rozłączenia, spadki napięcia, wolne ładowanie, zaszumiony dźwięk lub błędy pamięci masowej, zanim wyglądają jak oczywisty problem z zasilaniem.',
    },
    {
      type: 'summary',
      title: 'Do czego ten kalkulator nadaje się najlepiej',
      items: [
        'Planowanie hubów USB, komputerów jednopłytkowych, napędów zewnętrznych, płytek deweloperskich, świateł, wentylatorów i małych zestawów laboratoryjnych.',
        'Porównywanie profili źródłowych USB 2.0, USB 3.x, USB-C i USB Power Delivery.',
        'Szacowanie, czy kabel jest zbyt długi lub zbyt cienki dla danego obciążenia.',
        'Wybór rozsądnej rezerwy przed zakupem ładowarki lub aktywnego huba.',
      ],
    },
  ],
  ui: {
    profileLabel: 'Profil źródła USB',
    metricUnits: 'Metryczne',
    imperialUnits: 'US',
    voltageLabel: 'Napięcie źródła (V)',
    currentLabel: 'Prąd źródła (A)',
    cableLengthLabel: 'Długość kabla',
    wireGaugeLabel: 'Przekrój przewodu zasilającego',
    deviceLoadLabel: 'Obciążenie na urządzenie (W)',
    devicesLabel: 'Urządzenia',
    headroomLabel: 'Margines rezerwy (%)',
    sourcePower: 'Moc źródła',
    requiredPower: 'Wymagana moc',
    cableDrop: 'Spadek na kablu',
    deviceVoltage: 'Napięcie urządzenia',
    headroom: 'Rezerwa',
    utilization: 'Wykorzystanie',
    safeStatus: 'Budżet zasilania wygląda bezpiecznie',
    tightStatus: 'Budżet zasilania jest napięty',
    overStatus: 'Przekroczony budżet lub ryzyko spadku napięcia',
    safeAdvice: 'Obciążenie mieści się z wybranym marginesem. Używaj kabla dobrej jakości i sprawdzaj ciepło podczas długiej pracy.',
    tightAdvice: 'Jesteś blisko limitu. Zmniejsz długość kabla, użyj grubszych przewodów, zmniejsz obciążenie lub wybierz mocniejszy profil.',
    overAdvice: 'Ta konfiguracja prawdopodobnie będzie doświadczać spadków napięcia lub dławienia. Użyj aktywnego huba, mocniejszego adaptera lub profilu USB-C PD o wyższym napięciu.',
    busLane: 'Źródło USB',
    loadLane: 'Obciążenie urządzenia',
    cableLane: 'spadek',
    boardEyebrow: 'Ścieżka zasilania USB na żywo',
    sourceSocket: 'Gniazdo zasilania',
    deviceSocket: 'Obciążenie sprzętowe',
    energyFlow: 'przepływ energii',
    reservedLabel: 'dostępne po rezerwie',
  },
};
