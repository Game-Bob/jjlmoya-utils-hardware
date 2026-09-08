import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { LaptopBatteryRuntimeUI } from '../ui';

const slug = 'kalkulator-czasu-pracy-baterii-laptopa';
const title = 'Kalkulator czasu pracy baterii laptopa';
const description = 'Oszacuj, jak długo laptop będzie działał przy obecnym poziomie baterii podczas lekkiej, typowej i intensywnej pracy.';
const faq = [
  { question: 'Co oblicza ten kalkulator czasu pracy baterii?', answer: 'Dzieli dostępną energię przez moc podaną dla każdego obciążenia. To narzędzie planistyczne, a nie odczyt na żywo ani gwarancja producenta.' },
  { question: 'Gdzie znaleźć pojemność i kondycję baterii?', answer: 'Sprawdź raport baterii lub dokumentację producenta, aby znaleźć pojemność projektową i obecną pojemność pełnego naładowania. Kondycja to obecna pojemność pełnego naładowania wyrażona jako procent wartości początkowej.' },
  { question: 'Dlaczego czas pracy różni się zależnie od zadania?', answer: 'Laptop pobierający więcej watów szybciej zużywa tę samą zgromadzoną energię. Wideorozmowy, gry, monitor zewnętrzny, wysoka jasność oraz długotrwałe obciążenie CPU lub GPU zwiększają średni pobór.' },
  { question: 'Czy narzędzie może automatycznie odczytać baterię laptopa?', answer: 'Nie. Działa lokalnie w przeglądarce i korzysta z podanych wartości. Zastąp przykłady aktualnym raportem lub zmierzonym średnim poborem, jeśli dokładność ma znaczenie.' },
];
const howTo = [
  { name: 'Odczytaj pojemność początkową', text: 'Wpisz pojemność projektową w watogodzinach. Jeśli znasz tylko miliamperogodziny i wolty, najpierw przelicz je według Wh = V × Ah.' },
  { name: 'Opisz obecną baterię', text: 'Podaj obecną pojemność pełnego naładowania jako procent wartości początkowej i ustaw poziom baterii w chwili rozpoczęcia pracy.' },
  { name: 'Ustaw realistyczne pobory', text: 'Wybierz najbliższy profil i zmień wartości w watach, jeśli masz pomiar laptopa lub miernika energii.' },
  { name: 'Podejmij decyzję na wyjazd', text: 'Odczytaj trzy linie i użyj najkrótszego wyniku dla wymagającego zadania. Przy małym lub pilnym zapasie zmniejsz obciążenie albo zabierz ładowarkę.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pl' };

export const content: ToolLocaleContent<LaptopBatteryRuntimeUI> = {
  slug, title, description, faq, howTo, bibliography, schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Co naprawdę mierzy oszacowanie czasu pracy', level: 2 },
    { type: 'paragraph', html: 'Bateria laptopa przechowuje energię w watogodzinach. Urządzenie zużywa ją z mocą wyrażoną w watach. Kalkulator zamienia te dwie wartości na czas, aby pomóc ocenić, czy ładowanie wystarczy na podróż, spotkanie, wykład lub sesję pracy.' },
    { type: 'paragraph', html: 'Model najpierw szacuje obecną pojemność pełnego naładowania na podstawie pojemności początkowej i kondycji baterii. Następnie uwzględnia poziom naładowania na starcie. Każdy scenariusz zużywa część tego samego budżetu energii.' },
    { type: 'title', text: 'Wybieranie wiarygodnych danych', level: 2 },
    { type: 'paragraph', html: 'Użyj raportu baterii lub danych producenta. Pojemność projektowa, obecna pojemność pełnego naładowania i pozostały poziom to różne wartości. Jeśli znasz tylko wolty i amperogodziny, przelicz je według <strong>Wh = V × Ah</strong>; 1000 mAh to 1 Ah.' },
    { type: 'list', items: ['Oblicz kondycję, dzieląc obecną pojemność pełnego naładowania przez pojemność projektową.', 'Wpisz poziom, który rzeczywiście będzie dostępny na początku sesji.', 'Przy długiej sesji użyj zmierzonej średniej mocy.', 'Uwzględnij monitor zewnętrzny, stację dokującą lub wymagającą aplikację.'] },
    { type: 'title', text: 'Odczytywanie czasu pracy jako marginesu', level: 2 },
    { type: 'paragraph', html: 'Linia lekka pasuje do czytania i prostych dokumentów, zrównoważona do zwykłej wielozadaniowości, a intensywna pokazuje koszt stałego dużego poboru. Porównaj planowane zadanie z potrzebnym czasem i oprzyj plan na najkrótszym wiarygodnym wyniku.' },
    { type: 'table', headers: ['Sygnał', 'Znaczenie', 'Działanie'], rows: [['Wygodny', 'Co najmniej sześć godzin przy tym poborze', 'Sesja ma duży zapas.'], ['Wykonalny', 'Od trzech do sześciu godzin', 'Wystarczy na określoną sesję, przygotuj ładowarkę.'], ['Napięty', 'Od jednej do trzech godzin', 'Zmniejsz pobór lub zaplanuj przerwę na ładowanie.'], ['Pilny', 'Mniej niż godzina', 'Traktuj zadanie jako zależne od ładowarki.']] },
    { type: 'title', text: 'Czego oszacowanie nie może obiecać', level: 2 },
    { type: 'paragraph', html: 'Rzeczywisty pobór zmienia się z sekundy na sekundę. Jasność, łączność bezprzewodowa, temperatura, zadania w tle, firmware i rezerwy systemu przesuwają moment rozładowania. Narzędzie nie odczytuje czujników, nie modeluje chemii baterii i nie gwarantuje konkretnego czasu.' },
    { type: 'tip', title: 'Wskazówka pomiarowa', html: 'Zapisz procent baterii i czas podczas typowej sesji. Zastąp wartości profilu zaobserwowaną średnią i powtórz obliczenie dla każdego rodzaju pracy.' },
  ],
  ui: {
    batteryInputsLabel: 'Punkt początkowy baterii', designCapacityLabel: 'Początkowa pojemność baterii', designCapacityHint: 'Energia nowej baterii', healthLabel: 'Kondycja baterii', healthHint: 'Obecne pełne naładowanie w porównaniu z nowym', chargeLabel: 'Poziom na starcie', chargeHint: 'Poziom przewidywany na początku pracy', scenariosLabel: 'Czas pracy według obciążenia', scenariosHint: 'Edytuj średni pobór mocy dla każdego zadania', powerLabel: 'Średni pobór', wattsSuffix: 'W', presetsLabel: 'Rozpocznij od profilu', presetBalanced: 'Codzienna praca', presetTravel: 'Oszczędzanie w podróży', presetCreative: 'Intensywna praca twórcza', runwayLabel: 'Ścieżka energii', runwayCaption: 'Każda linia pokazuje, kiedy dane obciążenie zużyje tę samą początkową energię.', availableEnergyLabel: 'Dostępna energia', fullCapacityLabel: 'Obecna pojemność pełnego naładowania', shortestScenarioLabel: 'Planuj dla', runtimeLabel: 'Szacowany czas pracy', loadLabel: 'Pobór mocy', healthStateExcellent: 'Kondycja baterii doskonała', healthStateGood: 'Kondycja baterii dobra', healthStateAging: 'Bateria się starzeje', healthStateWorn: 'Bateria zużyta', statusComfortable: 'Duży margines', statusWorkable: 'Sesja wykonalna', statusTight: 'Napięty margines', statusUrgent: 'Wymaga ładowarki', scenarioLight: 'Lekka praca', scenarioBalanced: 'Zrównoważona praca', scenarioIntense: 'Intensywna praca', sceneBatteryLabel: 'Poziom początkowy', sceneEnergyLabel: 'Dostępna energia', sceneTimeLabel: 'Czas pracy', noteLabel: 'Granica modelu', noteText: 'To oszacowanie planistyczne oparte na podanych danych. Rzeczywisty pobór i rezerwy systemu mogą skrócić ten czas.',
  },
};
