import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResistorColorCodeUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = "kalkulator-kodu-kolorow-rezystora";
const title = "Kalkulator kodu kolorów rezystora";
const description = "Odczytaj kolorowe paski rezystora i oblicz rezystancję, tolerancję, zakres oraz współczynnik temperaturowy. Możesz także wyznaczyć kod od wartości docelowej lub odczytać oznaczenie SMD.";

const faqData = [{"question":"Jak odczytać kolorowe paski rezystora?","answer":"Zacznij od strony przeciwnej do paska tolerancji, który zwykle jest nieco odsunięty. Pierwsze dwa lub trzy paski oznaczają cyfry, następny jest mnożnikiem, a ostatni oznacza tolerancję."},{"question":"Co oznacza kod czteropaskowy?","answer":"Dwa pierwsze paski oznaczają cyfry znaczące, trzeci jest mnożnikiem, a czwarty określa tolerancję."},{"question":"Jaka jest tolerancja rezystora trzypaskowego?","answer":"Jeśli nie ma paska tolerancji, kod trzypaskowy zwykle oznacza plus lub minus 20 procent."},{"question":"Czym różni się rezystor pięcio- i sześciopaskowy?","answer":"Pięć pasków oznacza trzy cyfry i tolerancję. Szósty pasek dodaje współczynnik temperaturowy w ppm na stopień Celsjusza."},{"question":"Czy narzędzie odczytuje oznaczenia SMD?","answer":"Tak. Wpisz kod trzy- lub czterocyfrowy albo zapis taki jak 4R7. Litera R oznacza miejsce przecinka dziesiętnego."},{"question":"Czy wynik potwierdza bezpieczeństwo rezystora?","answer":"Nie. Sprawdź także moc, napięcie pracy, temperaturę, tolerancję i wymagania układu."}];

const howToData = [{"name":"Wybierz liczbę pasków","text":"Wybierz trzy, cztery, pięć albo sześć pasków zgodnie z oglądanym elementem."},{"name":"Wybierz każdy kolor","text":"Aktywuj pozycję paska i wybierz kolor z palety. Rysunek zmieni się od razu."},{"name":"Odczytaj wynik","text":"Sprawdź główną wartość, tolerancję, dopuszczalny zakres i współczynnik temperaturowy."},{"name":"Potwierdź kierunek","text":"Jeśli to możliwe, ustaw pasek tolerancji po prawej i porównaj wynik ze schematem lub kartą katalogową."}];

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
  inLanguage: "pl",
};

export const content: ToolLocaleContent<ResistorColorCodeUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [{"type":"title","text":"Kalkulator kodu kolorów rezystora","level":2},{"type":"paragraph","html":"Odczytuj rezystory z trzema, czterema, pięcioma lub sześcioma paskami bezpośrednio w przeglądarce. Każdy kolor zamienia się w cyfry, mnożnik, tolerancję, zakres rezystancji i współczynnik temperaturowy."},{"type":"title","text":"Jak czytać kod kolorów rezystora","level":3},{"type":"paragraph","html":"Zacznij po stronie przeciwnej do paska tolerancji. Dwa lub trzy paski tworzą cyfry, kolejny podaje mnożnik, a pasek tolerancji opisuje odchylenie od wartości znamionowej."},{"type":"table","headers":["Liczba pasków","Cyfry znaczące","Dodatkowe oznaczenie","Typowe zastosowanie"],"rows":[["Trzy paski","Dwie","Domyślna tolerancja 20 procent","Ogólna identyfikacja"],["Cztery paski","Dwie","Tolerancja","Typowe rezystory przewlekane"],["Pięć pasków","Trzy","Tolerancja","Rezystory precyzyjne"],["Sześć pasków","Trzy","Tolerancja i współczynnik temperaturowy","Układy precyzyjne"]]},{"type":"title","text":"Wyznaczanie kodu od wartości","level":3},{"type":"paragraph","html":"Tryb odwrotny pozwala wpisać oczekiwaną rezystancję. Narzędzie zaokrągla ją do wartości możliwej do zapisania i pokazuje odpowiednią sekwencję kolorów."},{"type":"title","text":"Oznaczenia rezystorów SMD","level":3},{"type":"paragraph","html":"Rezystory SMD często używają trzech lub czterech cyfr. Ostatnia cyfra jest potęgą dziesięciu dla cyfr początkowych. R zastępuje przecinek, więc 4R7 oznacza 4,7 oma."},{"type":"title","text":"Sprawdzenie przed montażem","level":2},{"type":"list","items":["Porównaj wartość ze schematem lub dokumentacją serwisową.","Sprawdź tolerancję i moc w karcie katalogowej.","Wykorzystaj odstęp paska tolerancji do potwierdzenia kierunku odczytu.","Zmierz odłączony element, jeśli oznaczenie jest uszkodzone lub niejasne.","Kod kolorów nie potwierdza bezpieczeństwa elektrycznego."]},{"type":"tip","title":"Wskazówka","html":"Narzędzie rozpoznaje oznaczenie. Nie mierzy rzeczywistej rezystancji, mocy, napięcia izolacji ani trwałości elementu."}],
  ui: {"sceneKicker":"Laboratorium widma kolorów EIA","hint":"Wybierz pasek, a potem kolor. Rezystor odpowie natychmiast.","decodeMode":"Odczytaj paski","reverseMode":"Pracuj od wartości","smdMode":"Odczytaj SMD","bandCount":"Liczba pasków","bandCount3":"3 paski","bandCount4":"4 paski","bandCount5":"5 pasków","bandCount6":"6 pasków","selectBand":"Wybierz pasek","colorPalette":"Paleta kolorów","bandLabel":"Pasek","resistance":"Rezystancja","tolerance":"Tolerancja","range":"Dopuszczalny zakres","temperatureCoefficient":"Współczynnik temperaturowy","noTempco":"Nieoznaczony","targetResistance":"Rezystancja docelowa w omach","targetHint":"Wpisz liczbę, na przykład 4700.","targetUnit":"omy","toleranceChoice":"Tolerancja docelowa","tolerance20":"20 procent","tolerance10":"10 procent","tolerance5":"5 procent","tolerance2":"2 procent","tolerance1":"1 procent","smdCode":"Oznaczenie SMD","smdHint":"Użyj 472 dla 4,7 kΩ lub 4R7 dla 4,7 Ω.","decodeSmd":"Odczytaj oznaczenie","valueUnit":"Ω","ohms":"omy","kiloohms":"kiloomy","megaohms":"megaomy","gigaohms":"gigaomy","minValue":"Minimum","maxValue":"Maksimum","actualValue":"Odczytana wartość","requestedValue":"Wartość żądana","status":"Stan","statusReady":"Gotowe do odczytu","statusCheck":"Najbliższa możliwa wartość","statusInvalid":"Sprawdź kod","orientationNote":"Wskazówka kierunku: ustaw lekko odsunięty pasek tolerancji po prawej. Złoty i srebrny nie oznaczają cyfr.","reverseNote":"Tryb odwrotny wybiera możliwą do zapisania wartość i pokazuje wynikowy kod kolorów.","smdNote":"Ten skrócony widok odczytuje oznaczenie SMD, ale kod nie zawiera tolerancji.","colorBlack":"Czarny","colorBrown":"Brązowy","colorRed":"Czerwony","colorOrange":"Pomarańczowy","colorYellow":"Żółty","colorGreen":"Zielony","colorBlue":"Niebieski","colorViolet":"Fioletowy","colorGray":"Szary","colorWhite":"Biały","colorGold":"Złoty","colorSilver":"Srebrny"},
};
