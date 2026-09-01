import { makeLocaleContent } from "../locale-content";

export const content = makeLocaleContent({
  slug: "kalkulator-szerokosci-sciezki-impedancji-pcb",
  title: "Kontroler szerokości ścieżki i impedancji PCB",
  description:
    "Sprawdź szerokość termiczną ścieżki PCB, spadek napięcia, straty oraz osobne przybliżenie impedancji kontrolowanej dla wybranej warstwy i stosu.",
  ui: {
    metricLabel: "Metryczne",
    imperialLabel: "Imperialne",
    steadyLabel: "Prąd ciągły",
    pulseLabel: "Powtarzalny impuls",
    currentProfileTitle: "Profil prądu",
    steadyCurrentLabel: "Prąd ciągły",
    pulseCurrentLabel: "Szczyt prądu impulsu",
    pulseDurationLabel: "Czas impulsu",
    dutyCycleLabel: "Wypełnienie",
    copperPathTitle: "Ścieżka miedziana",
    layerLabel: "Warstwa ścieżki",
    externalLabel: "Zewnętrzna",
    internalLabel: "Wewnętrzna",
    copperThicknessLabel: "Grubość miedzi",
    temperatureRiseLabel: "Dopuszczalny wzrost",
    lengthLabel: "Długość ścieżki",
    availableWidthLabel: "Dostępna szerokość",
    signalGeometryTitle: "Geometria sygnału",
    targetImpedanceLabel: "Impedancja docelowa",
    dielectricHeightLabel: "Dielektryk do płaszczyzny odniesienia",
    dielectricConstantLabel: "Przenikalność względna",
    thermalWidthTitle: "Minimalna szerokość termiczna",
    availableWidthTitle: "Zapasu po szerokości termicznej",
    impedanceTitle: "Impedancja przy szerokości termicznej",
    voltageDropTitle: "Spadek napięcia przy szczycie",
    powerLossTitle: "Strata mocy w miedzi",
    pulseEnergyTitle: "Energia impulsu",
    statusEmpty: "Wprowadź warunki ścieżki, aby rozpocząć.",
    statusInvalid:
      "Użyj dodatnich wartości i zachowaj wzrost temperatury oraz wypełnienie w zakresie.",
    statusReady:
      "Aktywne są trzy kontrole: szerokość termiczna, strata elektryczna i impedancja.",
    externalModel: "Warstwa zewnętrzna używa microstrip",
    internalModel: "Warstwa wewnętrzna używa stripline",
    thermalBadge: "Oczekiwanie na kontrolę termiczną",
    impedanceBadge: "Oczekiwanie na kontrolę impedancji",
    widthFits: "Mieści się w dostępnej przestrzeni",
    widthDoesNotFit: "Potrzeba więcej miejsca na prowadzenie",
    impedanceClose: "w kontroli 10%",
    impedanceFar: "poza kontrolą 10%",
    resetLabel: "Resetuj",
    presetTitle: "Wczytaj przykład prowadzenia",
    presetLogic: "Szyna zasilania 2 A",
    presetSignal: "Ścieżka logiczna 50 ohm",
    presetPulse: "Tor impulsu 8 A",
    sceneLabel:
      "Porównanie szerokości termicznej, dostępnej i impedancyjnej ścieżki",
    sceneCaption: "Wybierz warunki trasy, a miedź narysuje się sama.",
    referenceLineLabel: "Docelowa szerokość impedancji",
    thermalLineLabel: "Minimum termiczne",
    availableLineLabel: "Dostępny korytarz",
    modelNote: "Warstwa zmienia odprowadzanie ciepła i geometrię pola.",
  },
  seo: [
    { type: "title", text: "Sprawdź ścieżkę PCB przed prowadzeniem", level: 2 },
    {
      type: "paragraph",
      html: "Ścieżka może być wystarczająco szeroka dla prądu, a jednocześnie mieć złą szerokość dla sygnału o kontrolowanej impedancji. Ten kalkulator ścieżek PCB pokazuje obie decyzje razem: dobiera miedź do wybranego wzrostu temperatury, mierzy koszt elektryczny i osobno sprawdza geometrię sygnału.",
    },
    {
      type: "paragraph",
      html: "Wprowadź prąd rzeczywiście płynący ścieżką, a nie tylko oznaczenie pobliskiego zasilacza. Dla ciągłej trasy 2 A na zewnętrznej miedzi 35 µm i przy wzroście 10 °C model termiczny wymaga szerszego przewodnika niż mała ścieżka logiczna. Ta sama szerokość pozwala ocenić rezystancję, spadek napięcia i straty.",
    },
    {
      type: "title",
      text: "Termika i impedancja odpowiadają na różne pytania",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Kontrola termiczna korzysta z empirycznej zależności I = k × ΔT^0.44 × A^0.725, gdzie A jest przekrojem miedzi w milach kwadratowych, a k różni się dla warstwy zewnętrznej i wewnętrznej. W trybie impulsowym narzędzie używa prądu szczytowego pomnożonego przez pierwiastek z wypełnienia jako przybliżenia RMS powtarzalnego grzania. Nie modeluje pojedynczego udaru, pola przelotek ani płaszczyzny chłodzącej.",
    },
    {
      type: "list",
      items: [
        "Użyj gotowej grubości miedzi od producenta, a nie tylko nominalnej masy folii.",
        "Wybierz najmniejszy dopuszczalny wzrost temperatury, gdy elementy lub izolacja są wrażliwe na ciepło.",
        "Ujemny zapas miejsca traktuj jako konflikt prowadzenia.",
        "Jeśli szerokości termiczna i impedancyjna się różnią, ustal, czy sieć jest zasilająca, sygnałowa, czy ma dwa cele projektu.",
      ],
    },
    { type: "title", text: "Jak czytać scenę ścieżki", level: 3 },
    {
      type: "paragraph",
      html: "Pełne pasmo miedzi oznacza minimalną szerokość termiczną. Jasne pasmo pokazuje korytarz dostępny w układzie. Przerywana linia odniesienia wskazuje szerokość dla impedancji docelowej przy podanych założeniach stosu. Panel wyników podaje też impedancję przy szerokości termicznej, więc widać wpływ decyzji prądowej na sygnał.",
    },
    { type: "title", text: "Co zweryfikować przed produkcją", level: 3 },
    {
      type: "paragraph",
      html: "Nominalne równanie impedancji nie zna końcowej grubości dielektryka, zawartości żywicy, profilu trawienia, maski, sąsiedniej miedzi ani tolerancji. IPC-2152 wiąże również dobór przewodnika z konstrukcją płytki i rozpraszaniem ciepła. Użyj tej strony do uporządkowania przeglądu, a końcowy stos potwierdź z producentem, solverem pola lub kuponem testowym.",
    },
    {
      type: "tip",
      title: "Wynik kontroli nie jest zgodą na produkcję",
      html: "Zachowaj termikę, spadek napięcia i impedancję jako oddzielne punkty przeglądu. Przed zatwierdzeniem geometrii potwierdź przelotki, przewężenia, płaszczyzny, temperaturę otoczenia, pracę impulsową, odstępy izolacyjne i tolerancje producenta.",
    },
  ],
  faqTitle: "Pytania o szerokość i impedancję ścieżek PCB",
  faq: [
    {
      question: "Czy wpisać prąd średni czy szczytowy?",
      answer:
        "Dla trasy ciągłej użyj prądu ciągłego. Dla powtarzalnych impulsów wpisz prąd szczytowy, czas i wypełnienie, aby kontrola termiczna użyła przybliżenia RMS. Jednorazowy prąd rozruchowy wymaga analizy przejściowej.",
    },
    {
      question: "Dlaczego ścieżka wewnętrzna potrzebuje więcej miedzi?",
      answer:
        "Szybki model empiryczny używa mniejszej stałej dla warstw wewnętrznych, ponieważ zakopana miedź zwykle oddaje ciepło gorzej niż ścieżka zewnętrzna. Rzeczywista konstrukcja płytki może zmienić wynik.",
    },
    {
      question: "Co oznacza dostępna szerokość?",
      answer:
        "Wpisz korytarz, który układ może przeznaczyć na gotową ścieżkę. Ujemny zapas oznacza, że minimum termiczne przekracza korytarz i potrzebne są większa przestrzeń, grubsza miedź, trasy równoległe lub inny cel temperatury.",
    },
    {
      question: "Czy to oblicza prawdziwą ścieżkę PCB 50 ohm?",
      answer:
        "Szacuje nominalną impedancję microstrip lub stripline na podstawie szerokości, miedzi, wysokości dielektryka i przenikalności względnej. Producent musi potwierdzić geometrię końcową i tolerancje przed zwolnieniem impedancji kontrolowanej.",
    },
    {
      question: "Dlaczego spadek napięcia używa prądu szczytowego?",
      answer:
        "Pokazuje najgorszy chwilowy spadek I razy R podczas impulsu. Energia impulsu używa I²R razy czas, a szerokość termiczna korzysta z przybliżenia RMS dla impulsów powtarzalnych.",
    },
  ],
  bibliographyTitle: "Materiały referencyjne projektowania PCB",
  howTo: [
    {
      name: "Opisz zachowanie prądu",
      text: "Wybierz prąd ciągły lub impuls powtarzalny i uzupełnij profil.",
    },
    {
      name: "Wpisz założenia gotowego stosu",
      text: "Wybierz warstwę, grubość miedzi, wzrost temperatury i geometrię dielektryka.",
    },
    {
      name: "Podejmij decyzję o prowadzeniu",
      text: "Porównaj minimum termiczne, dostępny korytarz i impedancję docelową, a następnie potwierdź stos z producentem.",
    },
  ],
});
