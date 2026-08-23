import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDividerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-dzielnika-napiecia';
const title = 'Kalkulator dzielnika napięcia';
const description = 'Oblicz napięcie wyjściowe bez obciążenia, prąd, moc strat lub dolny rezystor wymagany do uzyskania docelowego napięcia.';

const faqData = [
  { question: 'Co robi kalkulator dzielnika napięcia?', answer: 'Oblicza nieobciążone napięcie wyjściowe dwóch rezystorów połączonych szeregowo. Wprowadź napięcie zasilania, R1 i R2 aby wyznaczyć Vout, lub podaj docelowe Vout aby obliczyć R2.' },
  { question: 'Jak obliczyć napięcie wyjściowe?', answer: 'Użyj wzoru Vout = Vs x R2 / (R1 + R2), gdzie R1 jest połączony z zasilaniem, a R2 z masą.' },
  { question: 'Jak obliczyć rezystor dla docelowego napięcia?', answer: 'Gdy R1 jest znane, użyj R2 = R1 x Vtarget / (Vs - Vtarget). Napięcie docelowe musi zawierać się między zerem a Vs.' },
  { question: 'Ile prądu pobiera dzielnik napięcia?', answer: 'Prąd dzielnika wynosi I = Vs / (R1 + R2) i jest ciągle pobierany ze źródła.' },
  { question: 'Jak sprawdzić moc rezystorów?', answer: 'Moc strat wynosi P = I² x R. Wybierz rezystory o odpowiedniej mocy znamionowej.' },
  { question: 'Czy dzielnik napięcia może służyć jako zasilacz?', answer: 'Zazwyczaj nie. Obciążenie podłączone do Vout zmienia zastępczą rezystancję. Przy poborze prądu użyj bufora lub regulatora napięcia.' },
];

const howToData = [
  { name: 'Wybierz tryb obliczeń', text: 'Użyj Oblicz Vout, gdy znasz oba rezystory. Użyj Znajdź R2, gdy znasz zasilanie, R1 i napięcie docelowe.' },
  { name: 'Wprowadź zasilanie i R1', text: 'Podaj napięcie zasilania w woltach oraz rezystor górny R1 w omach.' },
  { name: 'Wprowadź R2 lub napięcie docelowe', text: 'W trybie Oblicz Vout podaj R2. W trybie Znajdź R2 podaj napięcie docelowe.' },
  { name: 'Odczytaj wyniki', text: 'Sprawdź napięcie wyjściowe, prąd oraz moc wydzielaną na rezystorach.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<VoltageDividerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Zasada działania i obliczenia dzielnika napięcia', level: 2 },
    { type: 'paragraph', html: 'Dzielnik napięcia złożony z dwóch rezystorów połączonych szeregowo obniża napięcie zasilania do niższej wartości wyjściowej w punkcie środkowym. Gdy górny rezystor <code>R1</code> jest podłączony do źródła zasilania, a dolny rezystor <code>R2</code> do masy, idealne nieobciążone napięcie wyjściowe oblicza się ze wzoru <code>Vout = Vs x R2 / (R1 + R2)</code>. Ten kalkulator pozwala również wyznaczyć ciągły prąd spoczynkowy oraz moc traconą w postaci ciepła na obu elementach.' },
    { type: 'title', text: 'Wyznaczanie rezystancji dla docelowego napięcia wyjściowego', level: 3 },
    { type: 'paragraph', html: 'Wybierz tryb Znajdź R2, gdy znasz napięcie zasilania, rezystor górny R1 oraz oczekiwane napięcie na wyjściu. Kalkulator przekształca równanie do postaci <code>R2 = R1 x Vtarget / (Vs - Vtarget)</code>. Napięcie docelowe bliskie napięciu zasilania wymaga znacznie większej wartości R2, natomiast napięcie bliskie zeru wymaga odpowiednio mniejszego rezystora dolnego.' },
    { type: 'title', text: 'Analiza prądu dzielnika i mocy traconej na rezystorach', level: 3 },
    { type: 'paragraph', html: 'Układ pobiera ciągły prąd o wartości <code>I = Vs / (R1 + R2)</code> ze źródła zasilania. Każdy rezystor wydziela moc obliczaną ze wzoru <code>P = I² x R</code>. Zawsze weryfikuj oba te parametry z mocą znamionową dobranych elementów, zwłaszcza przy pracy w obwodach o wyższym napięciu zasilania.' },
    { type: 'title', text: 'Wpływ podłączonego obciążenia i obwodów zewnętrznych', level: 3 },
    { type: 'paragraph', html: 'Zaprezentowane wyniki dotyczą idealnego układu nieobciążonego. Każdy obwód podłączony do punktu Vout tworzy połączenie rówległe z rezystorem R2, co zmniejsza zastępczą rezystancję dolnego ramienia i zmienia zarówno napięcie wyjściowe, jak i prąd. W przypadku sygnałów lub napięć odniesienia sterujących kolejnymi stopniami zaleca się zastosowanie bufora ze wzmacniaczem operacyjnym lub dedykowanego regulatora.' },
    { type: 'list', items: ['Utrzymuj napięcie docelowe ściśle w przedziale między zerem a napięciem zasilania.', 'Stosuj jednolite jednostki rezystancji dla R1 oraz R2.', 'Sprawdzaj moc znamionową każdego rezystora z osobna.', 'Uwzględniaj tolerancję elementów oraz dopuszczalne wahania napięcia źródła.', 'Traktuj uzyskany wynik jako stan nieobciążony do momentu uwzględnienia rezystancji obciążenia w modelu.'] },
    { type: 'tip', title: 'Punkt środkowy nie zastępuje zasilacza', html: 'Dzielnik napięcia to prosty sposób na uzyskanie napięcia odniesienia lub osłabienie sygnału, ale charakteryzuje się niezerową impedancją wyjściową. Jeśli obwód odbiorczy pobiera prąd, zastosuj wzmacniacz buforowy.' },
  ],
  ui: {
    modeHeader: 'Tryb obliczeń',
    modePredict: 'Oblicz Vout',
    modeTarget: 'Znajdź R2',
    inputHeader: 'Parametry układu',
    supplyLabel: 'Napięcie zasilania Vs',
    topLabel: 'Rezystor górny R1',
    bottomLabel: 'Rezystor dolny R2',
    targetLabel: 'Docelowe napięcie Vout',
    voltageUnit: 'V',
    resistanceUnit: 'Ω',
    resultHeader: 'Rozkład napięcia',
    outputLabel: 'Napięcie wyjściowe',
    currentLabel: 'Prąd dzielnika',
    totalPowerLabel: 'Moc całkowita',
    topPowerLabel: 'Moc R1',
    bottomPowerLabel: 'Moc R2',
    ratioLabel: 'zasilania',
    statusNominal: 'Obliczenie prawidłowe',
    statusInvalid: 'Sprawdź dane wejściowe',
    statusTargetInvalid: 'Napięcie docelowe musi być niższe niż Vs',
    formulaHeader: 'Zastosowany wzór',
    formulaPredict: 'Vout = Vs x R2 / (R1 + R2). Podświetlony punkt wskazuje napięcie wyjściowe.',
    formulaTarget: 'R2 = R1 x Vtarget / (Vs - Vtarget). Wyznacza wymaganą wartość R2.',
    supplyNode: 'WEJŚCIE',
    topNode: 'R1',
    tapNode: 'VOUT',
    bottomNode: 'R2',
    groundNode: 'MASA',
    hint: 'Wprowadź R1 i R2, aby obliczyć Vout.',
    targetHint: 'Wybierz napięcie docelowe między zerem a Vs.',
    note: 'Dzielnik nieobciążony. Podłączenie obciążenia zmienia napięcie wyjściowe.',
  },
};
