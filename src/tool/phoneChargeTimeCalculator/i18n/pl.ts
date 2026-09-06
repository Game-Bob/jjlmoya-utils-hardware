import type { ToolLocaleContent } from '../../../types';
import type { PhoneChargeTimeCalculatorUI } from '../ui';
import { createPhoneChargeTimeCalculatorContent } from './createContent';

const ui: PhoneChargeTimeCalculatorUI = {
  capacityLabel: 'Pojemność baterii', capacityUnit: 'mAh', capacityHint: 'Użyj wartości ze specyfikacji telefonu.',
  currentLabel: 'Bieżący poziom', targetLabel: 'Poziom docelowy', percentUnit: '%', powerLabel: 'Moc ładowarki', powerUnit: 'W',
  efficiencyLabel: 'Szacowana sprawność', efficiencyUnit: '%', efficiencyHint: 'Uwzględnia straty konwersji i ciepło.',
  statusEmpty: 'Wpisz dane telefonu i ładowarki.', statusReady: 'Aktualizuje się podczas wpisywania.', statusError: 'Sprawdź wyróżnioną wartość.',
  resultTitle: 'Szacowany czas do celu', energyLabel: 'Pozostała energia', energyUnit: 'Wh', fromCurrentCharge: 'od bieżącego poziomu', startNowLabel: 'Rozpoczęcie teraz osiągnie',
  scenarioTitle: 'Referencyjne scenariusze ładowarek', scenarioAt: 'ten sam telefon i ten sam zakres ładowania', assumptionsTitle: 'Założenia',
  assumptionsText: 'Używa nominalnego napięcia baterii {voltage} V, sprawności {efficiency}% i około {taper}% dodatkowego spowolnienia powyżej 70%. Twój telefon może ładować się inaczej.',
  errorCapacity: 'Wpisz pojemność baterii większą od zera.', errorCurrent: 'Bieżący poziom musi wynosić od 0 do 100%.', errorTarget: 'Poziom docelowy musi wynosić od 1 do 100%.',
  errorTargetOrder: 'Poziom docelowy musi być wyższy od bieżącego.', errorPower: 'Wpisz moc większą od zera.', errorEfficiency: 'Sprawność musi wynosić od 50% do 100%.',
  targetMarker: 'cel', chargeProgressLabel: 'Zakres ładowania', hourUnit: 'godz.', minuteUnit: 'min',
};

const faq = [
  { question: 'Czy czas ładowania da się obliczyć tylko z procentu baterii?', answer: 'Nie. Ten sam procent oznacza inną ilość energii w małej i dużej baterii. Potrzebne są także pojemność, moc docierająca do telefonu i szacowana sprawność.' },
  { question: 'Dlaczego telefon czasami ładuje się dłużej niż pokazuje wynik?', answer: 'Telefon może ograniczyć moc przy wysokim poziomie naładowania, podwyższonej temperaturze, ograniczeniach kabla lub protokołu oraz podczas używania urządzenia. Wynik służy do planowania, a nie do pomiaru na żywo.' },
  { question: 'Czy wpisać moc ładowarki, czy moc przyjmowaną przez telefon?', answer: 'Jeśli ją znasz, wpisz moc, która prawdopodobnie dociera do telefonu. Jeśli znasz tylko moc ładowarki, potraktuj ją jako wartość maksymalną i załóż, że rzeczywisty czas może być dłuższy.' },
];

const howTo = [
  { name: 'Wpisz pojemność baterii', text: 'Odczytaj pojemność w specyfikacji telefonu i wpisz ją w mAh. Nie używaj pojemności powerbanku, ponieważ jego napięcie i straty konwersji dotyczą innego obwodu.' },
  { name: 'Ustaw zakres ładowania', text: 'Wpisz bieżący i potrzebny poziom naładowania. Doładowanie z 20% do 50% da inny wynik niż ładowanie do pełna.' },
  { name: 'Dodaj moc i sprawność', text: 'Wpisz moc w watach albo rzeczywistą moc przyjmowaną przez telefon, jeśli ją znasz. Bez własnego pomiaru pozostaw domyślną sprawność.' },
  { name: 'Porównaj scenariusze', text: 'Porównaj wynik z wartościami referencyjnymi 5 W, 15 W i 30 W, aby sprawdzić, czy ładowarka wystarczy w dostępnym czasie.' },
];

const seo = [
  { type: 'title' as const, text: 'Oblicz czas ładowania telefonu', level: 2 as const },
  { type: 'paragraph' as const, html: 'Użyj tego kalkulatora czasu ładowania telefonu, gdy chcesz sprawdzić, czy bateria osiągnie potrzebny poziom przed wyjściem, podróżą albo długą rozmową. Podaj pojemność baterii, bieżący procent, cel, moc ładowarki i sprawność. Wynik szacuje minuty oraz energię potrzebną do tego konkretnego doładowania, dzięki czemu możesz porównać ją z dostępnym czasem i wolniejszą lub szybszą ładowarką.' },
  { type: 'title' as const, text: 'Jakie dane wpisać', level: 2 as const },
  { type: 'list' as const, items: ['Pojemność: użyj pojemności telefonu w mAh, a nie wartości podanej dla powerbanku.', 'Bieżący i docelowy poziom: opisz doładowanie, którego naprawdę potrzebujesz; cel musi być wyższy od bieżącego poziomu.', 'Moc i sprawność: użyj mocy docierającej do telefonu, jeśli ją znasz. W przeciwnym razie moc ładowarki jest tylko górnym ograniczeniem.'] },
  { type: 'title' as const, text: 'Jak odczytać wynik', level: 2 as const },
  { type: 'paragraph' as const, html: 'Główna liczba to szacowany czas od bieżącego poziomu do celu. Pozostała energia pokazuje to samo doładowanie w watogodzinach, a paski referencyjne ilustrują różnicę między 5 W, 15 W i 30 W. Jeśli masz mniej czasu, obniż cel albo użyj ładowarki i kabla, które telefon rzeczywiście może wykorzystać z większą mocą.' },
  { type: 'title' as const, text: 'Dlaczego ładowanie zwalnia przy 100%', level: 2 as const },
  { type: 'paragraph' as const, html: 'Telefon zwykle nie ładuje się ze stałą mocą od zera do pełna. Gdy bateria zbliża się do wysokiego poziomu, układ ładowania może zmniejszyć prąd, aby kontrolować ciepło i obciążenie ogniwa. Dlatego zakres 20-80% jest często lepszy do planowania niż liniowe przeliczanie do 100%. Dla celów powyżej 70% kalkulator dodaje niewielki zapas na spowolnienie.' },
  { type: 'title' as const, text: 'Szacunek: czego kalkulator nie wykryje', level: 2 as const },
  { type: 'list' as const, items: ['Nie odczyta modelu telefonu, stanu baterii, protokołu, kabla, temperatury, użycia ani bieżącej mocy ładowania.', 'Nie diagnozuje zużytej baterii i nie potwierdza zgodności z szybkim ładowaniem. Dokładny wynik uzyskasz, mierząc tę samą konfigurację w interesującej Cię sytuacji.'] },
];

export const content: ToolLocaleContent<PhoneChargeTimeCalculatorUI> = createPhoneChargeTimeCalculatorContent({ locale: 'pl', slug: 'kalkulator-czasu-ladowania-telefonu', title: 'Kalkulator czasu ładowania telefonu', description: 'Oszacuj czas potrzebny do osiągnięcia docelowego poziomu baterii na podstawie pojemności, bieżącego poziomu, mocy ładowarki i sprawności.', faq, howTo, seo, ui });
