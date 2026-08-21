import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedResistorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-rezystora-led';
const title = 'Kalkulator rezystora do LED';
const description = 'Oblicz rezystor szeregowy do diody LED na podstawie napięcia zasilania, napięcia przewodzenia (Vf) i prądu. Dobierz najbliższą wartość z szeregu E12 lub E24 oraz bezpieczną moc.';

const faqData = [
  { question: 'Jaki rezystor jest potrzebny do czerwonej diody LED na pinie 5 V Arduino?', answer: 'Typowa czerwona dioda LED 5 mm (Vf 2,0 V przy 20 mA) podłączona do zasilania 5 V wymaga rezystora 150 omów o mocy około 60 mW. Wystarczy rezystor metalizowany 0,125 W lub 0,25 W. Często stosuje się też wartość 220 omów: dioda świeci nieco słabiej, ale pracuje z większym zapasem bezpieczeństwa.' },
  { question: 'Jak obliczyć rezystor do diody LED?', answer: 'Odejmij napięcie przewodzenia diody (Vf) od napięcia zasilania (Vs) i podziel wynik przez prąd w amperach (If): R = (Vs - Vf) / If. Dla czerwonej diody 2 V i 20 mA przy 5 V otrzymujemy: (5 - 2) / 0,02 = 150 omów.' },
  { question: 'Jakie napięcie przewodzenia (Vf) należy przyjąć?', answer: 'Należy sprawdzić typowe napięcie przewodzenia w karcie katalogowej producenta przy pożądanym prądzie. Orientacyjne wartości wynoszą: 1,3 V dla podczerwieni, 2,0 V dla koloru czerwonego, 2,2 V dla żółtego/zielonego oraz 3,2 V dla niebieskiego/białego.' },
  { question: 'Dlaczego kalkulator wskazuje wartość z szeregu E12 lub E24 zamiast dokładnych omów?', answer: 'Rezystory produkowane są w znormalizowanych szeregach IEC. Szereg E12 ma stopniowanie co 10%, a E24 co 5%. Kalkulator wybiera najbliższą wartość rynkową, a przy równej odległości przyjmuje wartość wyższą, aby nie przeciążać diody.' },
  { question: 'Czy diody LED połączone równolegle mogą dzielić jeden rezystor?', answer: 'Nie. Dioda o najniższym napięciu przewodzenia przejmie większość prądu i może ulec uszkodzeniu. Połącz diody szeregowo z jednym rezystorem lub zastosuj osobny rezystor dla każdej gałęzi równoległej.' },
  { question: 'Kiedy pojedynczy rezystor szeregowy nie wystarcza?', answer: 'Pojedynczego rezystora nie należy stosować przy diodach mocy (1 W lub więcej), taśmach LED ani w układach o niestabilnym napięciu zasilania. W takich przypadkach wymagany jest sterownik stałoprądowy (driver).' },
];

const howToData = [
  { name: 'Wybierz kolor diody LED', text: 'Kliknij kolor diody, aby wczytać typowe napięcie przewodzenia (Vf) i standardowy prąd 20 mA.' },
  { name: 'Podaj napięcie zasilania', text: 'Wpisz wartość napięcia zasilania lub wybierz gotowy wariant (Arduino 5 V, MCU 3,3 V, 9 V, 12 V lub 24 V).' },
  { name: 'Odczytaj parametry rezystora', text: 'Sprawdź zalecaną wartość rynkową (E12/E24), wymaganą moc oraz kod paskowy rezystora.' },
  { name: 'Sprawdź polaryzację przed lutowaniem', text: 'Upewnij się, że anoda jest podłączona do plusa, a katoda do masy. Sprawdź ustawienia, jeśli rezystor mocno się nagrzewa.' },
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

export const content: ToolLocaleContent<LedResistorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Kalkulator rezystora szeregowego do LED', level: 2 },
    { type: 'paragraph', html: 'Dioda LED jest elementem półprzewodnikowym sterowanym prądowo. Zadaniem rezystora szeregowego jest ograniczenie prądu zgodnie z prawem Ohma: <code>R = (Vs - n x Vf) / If</code>. Kalkulator wyznacza wymaganą wartość w przeglądarce, dopasowuje ją do szeregów normatywnych E12/E24, generuje kod paskowy i oblicza wymaganą moc.' },
    { type: 'title', text: 'Przykład: Czerwona dioda LED na pinie 5 V Arduino', level: 3 },
    { type: 'paragraph', html: 'Dla diody czerwonej (Vf = 2,0 V przy 20 mA) na zasilaniu 5 V: <code>(5 - 2) / 0,02 = 150 omów</code> i moc 60 mW. Wybierz rezystor 150 Ω (0,125 W lub 0,25 W). Zastosowanie rezystora 220 Ω zmniejsza prąd do około 14 mA, co lekko przyciemnia światło i wydłuża żywotność diody.' },
    { type: 'table', headers: ['Kolor diody LED', 'Typowe Vf', 'Typowy prąd (If)', 'Rezystor przy 5 V'], rows: [['Podczerwień', '1,3 V', '20 mA', '180 Ω'], ['Czerwony', '2,0 V', '20 mA', '150 Ω'], ['Żółty / Zielony', '2,2 V', '20 mA', '150 Ω'], ['Niebieski / Biały', '3,2 V', '20 mA', '91 Ω'], ['Ultrafiolet', '3,4 V', '20 mA', '82 Ω']] },
    { type: 'title', text: 'Szeregi znormalizowane E12 i E24', level: 3 },
    { type: 'paragraph', html: 'Rezystory produkowane są według norm IEC. Szereg E12 pokrywa tolerancję 10%, a E24 tolerancję 5%. W przypadku jednakowej odległości od dwóch wartości rynkowych kalkulator wybiera wyższą rezystancję dla ochrony diody.' },
    { type: 'title', text: 'Ograniczenia rezystora szeregowego', level: 3 },
    { type: 'paragraph', html: 'Rezystor nie jest źródłem prądowym. Nie łącz diod równolegle do jednego rezystora. Dla diod dużej mocy oraz niestabilnych źródeł zasilania stosuj dedykowane sterowniki prądowe.' },
    { type: 'list', items: ['Utrzymuj prąd diod sygnalizacyjnych w zakresie 10-20 mA.', 'Stosuj osobny rezystor dla każdej gałęzi równoległej.', 'Gdy spadek napięcia na rezystorze jest mniejszy niż 1 V, małe zmiany napięcia mocno zmieniają prąd.', 'Przy zasilaniu 12 V lub 24 V sprawdź wydzielaną moc (może przekraczać 0,5 W).', 'Sprawdź anodę i katodę przed wlutowaniem elementu.'] },
    { type: 'tip', title: 'Karta katalogowa producenta', html: 'Napięcie przewodzenia zależy od producenta. Zawsze weryfikuj dane w dokumentacji elementów dużej mocy lub podczerwieni.' },
    { type: 'diagnostic', variant: 'warning', title: 'Ograniczenie prądowe', html: 'Zmiany napięcia zasilania lub temperatury wpływają na prąd diody. Weryfikuj układy pomiarami na płytce.' },
  ],
  ui: {
    colorHeader: 'LED',
    colorInfrared: 'Podczerwień',
    colorRed: 'Czerwony',
    colorOrange: 'Pomarańczowy',
    colorYellow: 'Żółty',
    colorGreen: 'Zielony',
    colorBlue: 'Niebieski',
    colorWhite: 'Biały',
    colorUv: 'Ultrafiolet',
    supplyHeader: 'Napięcie zasilania',
    supplyArduino: 'Arduino 5 V',
    supplyMcu: 'MCU 3,3 V',
    supply9: '9 V',
    supply12: '12 V',
    supply24: '24 V',
    supplyUnit: 'V',
    forwardHeader: 'Napięcie przewodzenia (Vf)',
    forwardUnit: 'V',
    currentHeader: 'Prąd docelowy (If)',
    currentUnit: 'mA',
    countHeader: 'Liczba diod w szeregu',
    seriesHeader: 'Szereg znormalizowany',
    seriesE12: 'E12 (10%)',
    seriesE24: 'E24 (5%)',
    showDatasheet: 'Ustawienia z karty katalogowej',
    hideDatasheet: 'Ukryj kartę katalogową',
    buyLabel: 'Rezystor',
    powerLabel: 'Moc',
    seriesShort: 'Szereg',
    statusTight: 'Niski zapas napięcia',
    statusHotter: 'Rezystor będzie się nagrzewać',
    statusOverdriven: 'Wysoki prąd',
    statusNoHeadroom: 'Napięcie niewystarczające do zaświecenia diody',
    statusInvalid: 'Sprawdź wprowadzone dane',
    supplyLabel: 'Zasilacz',
    resistorLabel: 'Rezystor',
    ledLabel: 'LED',
    groundLabel: 'GND',
    anodeLabel: 'Anoda (+)',
    cathodeLabel: 'Katoda (-)',
    note: 'Wartości domyślne bazują na typowym Vf. Nie łącz diod równolegle do jednego rezystora.',
  },
};
