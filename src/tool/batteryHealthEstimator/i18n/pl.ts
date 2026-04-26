import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EstimadorSaludBateriaUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-stanu-baterii-litowej';
const title = 'Kalkulator Stanu Baterii Litowej';
const description =
  'Oblicz stan zużycia (SoH) swojej baterii litowej na podstawie cykli, napięcia i temperatury. Naukowy przewodnik po maksymalizacji żywotności energii.';

const faqData = [
  {
    question: 'Czym jest degradacja chemiczna baterii?',
    answer:
      'Z każdym cyklem ładowania i rozładowania ogniwa litowe ulegają mikropęknięciom i gromadzeniu się osadów chemicznych (S.E.I.), które zmniejszają ich zdolność do magazynowania energii. Jest to proces nieunikniony, ale można go spowolnić dzięki dobrym nawykom.',
  },
  {
    question: 'Dlaczego zaleca się ładowanie do 80%?',
    answer:
      'Baterie litowe najbardziej cierpią z powodu stresu przy ekstremalnych napięciach (0% i 100%). Utrzymywanie poziomu naładowania między 20% a 80% może trzykrotnie wydłużyć żywotność ogniwa poprzez redukcję ciepła i ciśnienia wewnętrznego.',
  },
  {
    question: 'Jak ciepło wpływa na żywotność baterii?',
    answer:
      'Ciepło to wróg numer jeden. Na każde 10 stopni wzrostu powyżej optymalnej temperatury otoczenia (25 stopni), tempo degradacji chemicznej wzrasta mniej więcej dwukrotnie.',
  },
  {
    question: 'Co to jest pełny cykl ładowania?',
    answer:
      'Cykl to wykorzystanie 100% pojemności baterii, ale nie musi to nastąpić za jednym razem. Jeśli zużyjesz dziś 50%, naładujesz ją i zużyjesz jutro kolejne 50%, oznacza to ukończenie 1 pełnego cyklu.',
  },
];

const howToData = [
  {
    name: 'Zidentyfikuj oryginalną pojemność',
    text: 'Sprawdź na pudełku urządzenia lub na stronie producenta, jaką pojemność w mAh miała Twoja bateria, gdy była nowa.',
  },
  {
    name: 'Sprawdź aktualną liczbę cykli',
    text: 'Wiele systemów (jak iOS czy Android 14) pozwala sprawdzić, ile cykli ładowania zgromadziła Twoja bateria.',
  },
  {
    name: 'Wprowadź dane techniczne',
    text: 'Dostosuj aktualne napięcie, liczbę cykli i temperaturę, aby nasz silnik obliczeniowy mógł oszacować stan zużycia (SoH).',
  },
  {
    name: 'Przeanalizuj diagnozę',
    text: 'Sprawdź procentową wartość zdrowia baterii. Jeśli spadnie poniżej 80%, możesz zacząć zauważać spadki wydajności lub niespodziewane wyłączenia.',
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

export const content: ToolLocaleContent<EstimadorSaludBateriaUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Chemia czasu: dlaczego baterie litowe umierają', level: 2 },
    {
      type: 'paragraph',
      html: 'Bateria litowo-jonowa nie jest statycznym pudełkiem z energią, lecz dynamicznym ekosystemem chemicznym ulegającym ciągłej degradacji od momentu produkcji. Każdy cykl ładowania i rozładowania, każda zmiana temperatury i każda minuta przy ekstremalnym napięciu przyczyniają się do powstawania produktów ubocznych utrudniających przepływ jonów.',
    },
    { type: 'title', text: 'Główne mechanizmy degradacji', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Warstwa SEI:</strong> faza międzyfazowa stałego elektrolitu rośnie z czasem, zużywając aktywny lit i zwiększając opór wewnętrzny. <strong>Utlenianie elektrolitu:</strong> napięcia powyżej 4.1V przyspieszają utlenianie i mogą powodować puchnięcie baterii. <strong>Osadzanie litu:</strong> ładowanie w niskich temperaturach powoduje osadzanie się litu w postaci metalicznej, tworząc dendryty, które mogą przebić separator.',
    },
    { type: 'title', text: 'Mit 100%: dlaczego ładowanie przez noc to błąd', level: 3 },
    {
      type: 'paragraph',
      html: 'Dla jonu litu stan naładowania 100% (4.2V) jest stanem wysokiego stresu. Badania pokazują, że żywotność cyklu wzrasta dwu- lub trzykrotnie przy utrzymywaniu urządzenia w zakresie <strong>20% – 80%</strong>. Ponadto na każde 10°C powyżej 25°C tempo degradacji chemicznej wzrasta około dwukrotnie.',
    },
    { type: 'title', text: 'Protokół przetrwania energii', level: 3 },
    {
      type: 'paragraph',
      html: 'Nigdy nie ładuj baterii w temperaturze poniżej 0°C: lit osadza się na anodzie, powodując trwałe uszkodzenia. Szybkie ładowanie generuje miejscowe ciepło i stres mechaniczny; używaj go tylko wtedy, gdy jest to absolutnie konieczne. W przypadku długotrwałego przechowywania trzymaj baterię naładowaną w 50% w chłodnym miejscu.',
    },
  ],
  ui: {
    badge: 'Bateria Li-Ion',
    title: 'Kalkulator Zdrowia Baterii',
    description: 'Techniczna diagnoza degradacji ogniw litowo-jonowych.',
    paramsTitle: 'Parametry Ogniwa',
    voltageLabel: 'Aktualne Napięcie',
    cyclesLabel: 'Cykle Ładowania',
    tempLabel: 'Temperatura',
    voltageHint: 'Zakres nominalny: od 3.0V (pusta) do 4.2V (pełna).',
    labelUsefulLife: 'Żywotność',
    yearsPrefix: 'ok.',
    yearsSuffix: 'lat',
    metricThermalStress: 'Stres Termiczny',
    metricVoltageStress: 'Stres Napięciowy',
    metricLithiumPlating: 'Osadzanie Litu',
    statusExcelente: 'Stan Doskonały',
    statusBueno: 'Stan Dobry',
    statusRegular: 'Stan Przeciętny',
    statusCritico: 'Stan Krytyczny',
    indicatorTempNormal: 'Normalna',
    indicatorTempCritical: 'Krytyczna',
    indicatorVoltageHigh: 'Wysokie',
    indicatorVoltageLow: 'Niskie',
    indicatorPlatingRisk: 'Wysokie Ryzyko',
    indicatorPlatingOk: 'Brak Ryzyka',
    recTemp: 'Obniż temperaturę otoczenia lub popraw wentylację, aby uniknąć utleniania elektrolitu.',
    recVoltageHigh: 'Unikaj trzymania baterii naładowanej w 100% (4.2V) przez dłuższy czas.',
    recVoltageLow: 'Unikaj głębokich rozładowań; cykle między 20% a 80% podwajają żywotność baterii.',
    recSohLow: 'Pojemność spadła poniżej optymalnego standardu. Rozważ wymianę, jeśli czas pracy jest niewystarczający.',
    recDefault: 'Utrzymuj obecne nawyki — Twoja bateria pracuje w idealnym zakresie.',
  },
};
