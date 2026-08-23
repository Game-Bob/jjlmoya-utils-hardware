import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { OhmLawPowerCalculatorLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kalkulator Prawa Ohma i Mocy Elektrycznej',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pl',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Co oblicza ten kalkulator prawa Ohma?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wprowadź dowolne dwie dodatnie wartości napięcia, prądu, rezystancji lub mocy. Kalkulator wyznaczy pozostałe dwie wartości.' },
    },
    {
      '@type': 'Question',
      name: 'Jakich jednostek używa kalkulator?',
      acceptedAnswer: { '@type': 'Answer', text: 'Używa woltów dla napięcia, amperów dla prądu, omów dla rezystancji i watów dla mocy.' },
    },
    {
      '@type': 'Question',
      name: 'Czy mogę użyć mocy i rezystancji jako znanych wartości?',
      acceptedAnswer: { '@type': 'Answer', text: 'Tak. Kalkulator wykorzystuje wzory z pierwiastkiem kwadratowym do wyznaczenia napięcia i prądu.' },
    },
  ],
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak obliczać wartości elektryczne z prawa Ohma',
  step: [
    { '@type': 'HowToStep', name: 'Wybierz dwie znane wartości', text: 'Aktywuj dwie wielkości, które już znasz: napięcie, prąd, rezystancję lub moc.' },
    { '@type': 'HowToStep', name: 'Wprowadź pomiary', text: 'Wpisz dodatnie wartości w aktywnych polach.' },
    { '@type': 'HowToStep', name: 'Odczytaj wynik', text: 'Schemat obwodu i panel pokazują obliczone wartości oraz zastosowane wzory.' },
  ],
};

const seo: SEOSection[] = [
  { type: 'title', text: 'Obliczanie napięcia prądu rezystancji lub mocy w obwodzie', level: 2 },
  { type: 'paragraph', html: 'Znając dwie wielkości elektryczne w prostym obwodzie, masz wystarczająco dużo informacji, aby obliczyć pozostałe dwie. Wprowadź parę znanych danych, a ten kalkulator prawa Ohma wyznaczy brakujące wartości w woltach, amperach, omach i watach.' },
  { type: 'paragraph', html: 'Na przykład wprowadź 12 V i 2 A, aby uzyskać 6 Ω i 24 W. Przy 5 V i 10 W otrzymasz 2 A i 2,5 Ω. Przydatne do sprawdzania rezystorów, szacowania prądu diody LED lub sprawdzania mocy obciążenia wzmacniacza.' },
  { type: 'title', text: 'Jakiego wzoru z prawa Ohma należy użyć', level: 3 },
  { type: 'paragraph', html: 'Odpowiednie równanie zależy od dwóch dostępnych pomiarów. Wszystkie są przekształceniami prawa Ohma V = I x R oraz wzoru na moc P = V x I.' },
  { type: 'table', headers: ['Znane dane', 'Obliczane wartości', 'Stosowany wzór'], rows: [
    ['Napięcie i prąd', 'Rezystancja i moc', 'R = V / I i P = V x I'],
    ['Napięcie i rezystancja', 'Prąd i moc', 'I = V / R i P = V² / R'],
    ['Napięcie i moc', 'Prąd i rezystancja', 'I = P / V i R = V² / P'],
    ['Prąd i rezystancja', 'Napięcie i moc', 'V = I x R i P = I² x R'],
    ['Prąd i moc', 'Napięcie i rezystancja', 'V = P / I i R = P / I²'],
    ['Rezystancja i moc', 'Napięcie i prąd', 'V = √(P x R) i I = √(P / R)'],
  ] },
  { type: 'tip', title: 'Uwzględnij moc traconą przy doborze elementów', html: 'Jeśli kalkulator wskazuje 24 W, element musi być w stanie rozproszyć co najmniej taką moc w postaci ciepła. Zawsze zachowuj margines bezpieczeństwa.' },
];

export const content: OhmLawPowerCalculatorLocaleContent = {
  slug: 'kalkulator-prawa-ohma-mocy',
  title: 'Kalkulator Prawa Ohma i Mocy Elektrycznej',
  description: 'Kalkulator prawa Ohma do wyznaczania napięcia, prądu, rezystancji i mocy elektrycznej z dwóch znanych wartości.',
  ui: {
    instructions: 'Wybierz dwie znane wielkości i wprowadź ich wartości. Obwód wyznaczy pozostałą parę w jednostkach SI.',
    knownLabel: 'Wybierz dwie znane wartości',
    useAsKnownLabel: 'Użyj jako znane',
    voltageLabel: 'Napięcie',
    currentLabel: 'Prąd',
    resistanceLabel: 'Rezystancja',
    powerLabel: 'Moc',
    voltageUnit: 'V',
    currentUnit: 'A',
    resistanceUnit: 'Ω',
    powerUnit: 'W',
    resultTitle: 'Uzupełnij obwód',
    resultHint: 'Dwa znane zaciski wyznaczają brakującą parę.',
    formulaTitle: 'Odczyt obwodu',
    formulaHint: 'Podświetlone zaciski są znane. Miedziane ścieżki pokazują równania.',
    statusTitle: 'Stan obliczeń',
    statusEmpty: 'Wprowadź dwie dodatnie wartości, aby rozpocząć.',
    statusInvalid: 'Obie znane wartości muszą być większe od zera.',
    statusReady: 'Obliczenie obwodu zakończone powodzeniem.',
    presetTitle: 'Rozpocznij od rzeczywistego obciążenia',
    presetLed: 'Wskaźnik LED',
    presetUsb: 'Obciążenie USB',
    presetAmplifier: 'Obciążenie wzmacniacza',
    resetLabel: 'Zresetuj',
    orbitCaption: 'Wybierz dwa zaciski, aby zamknąć obwód.',
    knownBadge: 'Znane',
    solvedBadge: 'Obliczone',
    unitVoltage: 'wolty',
    unitCurrent: 'ampery',
    unitResistance: 'omy',
    unitPower: 'waty',
    formulaVoltageCurrent: 'R = V / I i P = V x I',
    formulaVoltageResistance: 'I = V / R i P = V² / R',
    formulaVoltagePower: 'I = P / V i R = V² / P',
    formulaCurrentResistance: 'V = I x R i P = I² x R',
    formulaCurrentPower: 'V = P / I i R = P / I²',
    formulaResistancePower: 'V = √(P x R) i I = √(P / R)',
    seoTitle: 'Kalkulator prawa Ohma',
  },
  seo,
  faqTitle: 'Często zadawane pytania o prawo Ohma',
  faq: [
    { question: 'Znam napięcie i prąd. Co otrzymam?', answer: 'Otrzymasz rezystancję i moc. Na przykład 12 V i 2 A dają 6 Ω i 24 W.' },
    { question: 'Czy mogę obliczyć moc traconą na rezystorze?', answer: 'Tak. Wprowadź napięcie i rezystancję lub prąd i rezystancję, aby obliczyć moc w watach.' },
    { question: 'Czy mogę użyć mocy i napięcia jako danych wejściowych?', answer: 'Tak. Wprowadź obie wartości, a kalkulator wyznaczy prąd (I = P / V) oraz rezystancję (R = V² / P).' },
    { question: 'Czy prawo Ohma stosuje się do wszystkich elementów?', answer: 'Nie. Ten kalkulator modeluje proste elementy omowe. Diody mają charakterystykę nieliniową.' },
  ],
  bibliographyTitle: 'Referencje wzorów',
  bibliography,
  howTo: [
    { name: 'Wybierz dwie znane wartości', text: 'Aktywuj dwie znane wielkości.' },
    { name: 'Wprowadź dodatnie pomiary', text: 'Wpisz wolty, ampery, omy lub waty.' },
    { name: 'Odczytaj wyniki', text: 'Sprawdź obliczone wartości oraz zastosowany wzór.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
