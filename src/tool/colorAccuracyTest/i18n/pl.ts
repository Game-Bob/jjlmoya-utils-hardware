import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpectrumCanvasUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-dokladnosci-kolorow';
const title = 'Test Dokładności Kolorów - Spectrum Canvas';
const description =
  'Skalibruj swój wyświetlacz z precyzją. Przetestuj przestrzenie kolorów sRGB i DCI-P3, wykryj przesunięcia kolorów, zmierz dokładność za pomocą wskaźników Delta E i generuj profesjonalne raporty kalibracji.';

const faqData = [
  {
    question: 'Co to jest dokładność kolorów i dlaczego jest ważna?',
    answer:
      'Dokładność kolorów mierzy, jak wiernie wyświetlacz odwzorowuje kolory w porównaniu do standardowego wzorca. Dla projektantów, fotografów i twórców treści dokładne kolory są niezbędne, aby zapewnić spójny wygląd prac na różnych urządzeniach.',
  },
  {
    question: 'Jaka jest różnica między sRGB a DCI-P3?',
    answer:
      'sRGB to standardowa przestrzeń kolorów dla Internetu i wyświetlaczy konsumenckich. DCI-P3 to szersza gama kolorów stosowana w kinie cyfrowym i profesjonalnych wyświetlaczach. DCI-P3 obejmuje około 25% więcej kolorów niż sRGB.',
  },
  {
    question: 'Co to jest Delta E i jak się ją mierzy?',
    answer:
      'Delta E (ΔE) to numeryczna miara różnicy kolorów postrzeganej przez ludzkie oko. Delta E poniżej 1 jest niedostrzegalna, poniżej 2 jest bardzo dobra, poniżej 4 jest akceptowalna, a powyżej 4 staje się zauważalna. Nasz test wykorzystuje obliczenia Delta E CIE 1976.',
  },
  {
    question: 'Czy mogę użyć tego narzędzia do kalibracji sprzętu?',
    answer:
      'To narzędzie zapewnia wizualne odniesienie kalibracyjne i pomiary dokładności. W celu profesjonalnej kalibracji należy połączyć te wyniki z narzędziami do kalibracji sprzętowej (kolorymetrami) i dedykowanym oprogramowaniem, takim jak ColorThink lub Datacolor SpyderCheckr.',
  },
  {
    question: 'Jakie przestrzenie kolorów są testowane?',
    answer:
      'Testujemy sRGB (standard), DCI-P3 (kino) oraz dokładność punktu bieli przy użyciu standardowych iluminantów D65 (6500K) i D93 (9300K). Test obejmuje również weryfikację korekcji gamma.',
  },
];

const howToData = [
  {
    name: 'Wybierz Gamę',
    text: 'Wybierz między sRGB (standard internetowy/konsumencki) a DCI-P3 (profesjonalne kino). Twój wyświetlacz odpowiednio dostosuje paletę testową.',
  },
  {
    name: 'Nazwij swój Sprzęt (opcjonalnie)',
    text: 'Wprowadź opisową nazwę swojego monitora lub urządzenia (np. „MacBook Pro 16 M1”). Spersonalizuje to Twój raport.',
  },
  {
    name: 'Wejdź w Tryb Pełnoekranowy',
    text: 'Naciśnij F11 lub przycisk pełnego ekranu, aby wyeliminować interfejs przeglądarki i zapewnić maksymalną powierzchnię wyświetlania dla dokładnych testów.',
  },
  {
    name: 'Ukończ Testy Kolorów',
    text: 'Przejdź przez Czystość Spektralną (jednolite kolory), Dynamikę Gradientów (płynne przejścia), Wykrywanie Black Crush (detale w cieniach) i Kalibrację Punktu Bieli.',
  },
  {
    name: 'Przejrzyj Wyniki i Eksportuj',
    text: 'Wygeneruj wizualny raport z wizualizacją Gamy 3D, wskaźnikami Delta E i zaleceniami kalibracyjnymi. Eksportuj jako PDF do archiwum.',
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

export const content: ToolLocaleContent<SpectrumCanvasUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Profesjonalny Test Dokładności Kolorów: Skalibruj swój Wyświetlacz z Precyzją',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvas to profesjonalne narzędzie do testowania dokładności kolorów, zaprojektowane dla każdego, kto wykonuje prace wymagające precyzyjnego odwzorowania barw. Niezależnie od tego, czy jesteś fotografem, projektantem, twórcą treści czy entuzjastą sprzętu, to narzędzie pomoże Ci <strong>zdiagnozować przesunięcia kolorów</strong>, <strong>zmierzyć dokładność wyświetlacza</strong> i <strong>wygenerować raporty kalibracji</strong>.',
    },
    {
      type: 'title',
      text: 'Dlaczego dokładność kolorów jest ważna',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Różnica zaledwie jednego punktu procentowego w odwzorowaniu kolorów może decydować o tym, czy praca wzbudzi zachwyt, czy też zostanie uznana za nienaturalną. Profesjonalne wyświetlacze zapewniają dokładność na poziomie <strong>Delta E &lt; 2</strong>. Wyświetlacze konsumenckie często wykazują Delta E rzędu 4-6+, co powoduje:',
    },
    {
      type: 'paragraph',
      html: '<ul><li>Zdjęcia, które wyglądają żywo na monitorze, ale blado w druku</li><li>Montaż wideo, który nie spełnia oczekiwań klienta</li><li>Makiety stron internetowych, które nie pasują do specyfikacji marki</li><li>Projekty sprzętowe, w których wskaźniki kolorów są błędnie interpretowane</li></ul>',
    },
    {
      type: 'title',
      text: 'Zrozumienie przestrzeni kolorów: sRGB vs DCI-P3',
      level: 3,
    },
    {
      type: 'title',
      text: 'sRGB (Standardowa przestrzeń kolorów)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Ustanowiony przez Microsoft i HP w 1996 roku, sRGB jest <strong>uniwersalnym standardem dla elektroniki użytkowej</strong> i Internetu. Wykorzystuje trójkątną gamę kolorów zdefiniowaną przez trzy kolory podstawowe (Czerwony: 0.6400x 0.3300, Zielony: 0.3000 0.6000, Niebieski: 0.1500 0.0600).',
    },
    {
      type: 'paragraph',
      html: '<strong>Charakterystyka:</strong><ul><li>Obejmuje ~35% widzialnego spektrum kolorów</li><li>Zoptymalizowany pod kątem typowych warunków oświetlenia otoczenia</li><li>Gamma: 2.2 (pasuje do większości wyświetlaczy konsumenckich)</li><li>Zastosowanie: Internet, media społecznościowe, zdjęcia amatorskie</li></ul>',
    },
    {
      type: 'title',
      text: 'DCI-P3 (Gama kina cyfrowego)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Opracowany przez konsorcjum Digital Cinema Initiatives, DCI-P3 to <strong>przestrzeń kolorów klasy kinowej</strong>, zaprojektowana dla projekcji kinowych i profesjonalnych wyświetlaczy. Obejmuje o ~25% więcej kolorów niż sRGB.',
    },
    {
      type: 'paragraph',
      html: '<strong>Charakterystyka:</strong><ul><li>Obejmuje ~53% widzialnego spektrum kolorów</li><li>Zoptymalizowany pod kątem ciemnych warunków kinowych</li><li>Gamma: 2.6 (skorygowana pod kątem wysokiego kontrastu)</li><li>Zastosowanie: filmowanie, profesjonalna fotografia, treści HDR</li></ul>',
    },
    {
      type: 'title',
      text: 'Co to jest Delta E? Ilościowe określanie różnicy kolorów',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Delta E (ΔE) to <strong>wskaźnik różnicy kolorów dostrzegalnej przez człowieka</strong> w przestrzeni kolorów CIE LAB. Informuje o tym, jak blisko wyjście wyświetlacza znajduje się względem standardowego koloru wzorcowego.',
    },
    {
      type: 'paragraph',
      html: '<strong>Skala Delta E (CIE 1976):</strong><ul><li>0–1: Niedostrzegalna dla ludzkiego oka</li><li>1–2: Ledwie dostrzegalna</li><li>2–4: Dostrzegalna, ale akceptowalna do ogólnego użytku</li><li>4–6: Zauważalne przesunięcie kolorów</li><li>&gt;6: Bardzo wyraźna różnica</li></ul>',
    },
    {
      type: 'paragraph',
      html: 'Profesjonalne wyświetlacze są kalibrowane tak, aby utrzymać <strong>Delta E &lt; 2</strong> w całym widzialnym zakresie. Wyświetlacze konsumenckie zazwyczaj osiągają Delta E 3-5.',
    },
    {
      type: 'title',
      text: 'Zestaw testowy Spectrum Canvas',
      level: 3,
    },
    {
      type: 'title',
      text: 'Test Czystości Spektralnej',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Wyświetla czyste kolory podstawowe i drugorzędne (czerwony, zielony, niebieski, cyjan, magenta, żółty) i mierzy, jak monitor je odwzorowuje. Animacje "zalewania" kolorem ujawniają spójność odwzorowania barw na całym ekranie.',
    },
    {
      type: 'title',
      text: 'Dynamika Gradientów',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Płynne gradienty przechodzące przez całą przestrzeń kolorów. Szukaj <strong>artefaktów bandingu</strong> (widocznych skoków zamiast płynnych przejść), które wskazują na niewystarczającą głębię bitową kolorów lub słabą korekcję gamma.',
    },
    {
      type: 'title',
      text: 'Wykrywanie Black Crush (Test Czarnej Dziury)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Czysto czarne (0,0,0) tło z ledwie widocznymi odcieniami bliskimi czerni. Jeśli detale w cieniach "zlewają się", monitor traci informacje w ciemnych tonach — typowe dla wyświetlaczy mobilnych i tanich paneli.',
    },
    {
      type: 'title',
      text: 'Kalibracja Punktu Bieli',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Testuje różne skorelowane temperatury barwowe (D65 przy 6500K = światło dzienne, D93 przy 9300K = studio), ujawniając wszelkie przesunięcia temperatury barwowej lub niestabilność termiczną.',
    },
    {
      type: 'title',
      text: 'Interpretacja Wyników',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvas generuje estetyczny, przyjazny do druku raport zawierający:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>Wizualizacja Gamy 3D:</strong> Obrotowy wykres 3D pokazujący rzeczywistą objętość kolorów wyświetlacza w porównaniu do standardu wzorcowego</li><li><strong>Mapa Ciepła Delta E:</strong> Informacja o tym, w którym miejscu spektrum monitor wykazuje odchylenia</li><li><strong>Krzywa Gamma:</strong> Liniowość jasności w zakresie 0–255</li><li><strong>Wynik Kalibracji:</strong> Pojedyncza ocena „Spectrum Grade” (Elite, Cinematic, Studio, Standard) oparta na ogólnej dokładności</li></ul>',
    },
    {
      type: 'title',
      text: 'Zaawansowane: Wskazówki dotyczące ręcznej kalibracji',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jeśli wyniki wykazują odchylenia, wypróbuj te regulacje w menu OSD (On-Screen Display) swojego monitora:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>Temperatura barwowa:</strong> Przesuń w stronę „Ciepłej”, jeśli kolory są zbyt chłodne/niebieskie; w stronę „Chłodnej”, jeśli są zbyt ciepłe/żółte</li><li><strong>Kontrast:</strong> Zwiększ, jeśli czernie wydają się wyblakłe; zmniejsz, jeśli detale są zlane</li><li><strong>Jasność:</strong> Dostosuj, aby uzyskać neutralną szarość bez zabarwienia przy jasności 50%</li><li><strong>Nasycenie:</strong> Jeśli kolory są przesycone, zmniejsz; jeśli są blade, zwiększ</li></ul>',
    },
    {
      type: 'title',
      text: 'Ograniczenia i najlepsze praktyki',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>To narzędzie zapewnia wizualne i statystyczne odniesienie</strong>. W przypadku prac profesjonalnych wymagających certyfikowanej kalibracji należy używać sprzętowych mierników kolorów (spektrofotometru lub kolorymetru) i dedykowanego oprogramowania do kalibracji.',
    },
    {
      type: 'paragraph',
      html: '<strong>Najlepsze praktyki:</strong><ul><li>Pozwól monitorowi rozgrzewać się przez 30 minut przed testem (stabilizacja dryftu termicznego)</li><li>Testuj w stałych warunkach oświetlenia otoczenia</li><li>Unikaj odblasków; jeśli to możliwe, używaj osłony monitora</li><li>Powtarzaj testy co tydzień, aby śledzić dryft w czasie</li><li>Prowadź cyfrowe archiwum raportów do przyszłych porównań</li></ul>',
    },
  ],
  ui: {
    badge: 'Kalibracja Wyświetlacza',
    title: 'Spectrum Canvas - Test Dokładności Kolorów',
    description:
      'Profesjonalna kalibracja wyświetlacza łączy się z kinową estetyką. Przetestuj sRGB i DCI-P3, zmierz dokładność Delta E, wykryj przesunięcia kolorów i wygeneruj wizualny raport, który zmienia dane w wiedzę.',
    btnStartCalibration: 'Rozpocznij Kalibrację',
    btnFullscreen: 'Pełny Ekran',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Tryb Pełnoekranowy',
    kbdReset: 'R',
    kbdResetLabel: 'Resetuj Test',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Wyjdź',
    gamutSRGB: 'sRGB',
    gamutDCIP3: 'DCI-P3',
    gamutToggle: 'Przestrzeń Kolorów',
    hardwareName: 'Nazwa Sprzętu/Monitora',
    hardwareNamePlaceholder: 'np. MacBook Pro 16" M1 Max',
    purityTest: 'Czystość Spektralna',
    gradientTest: 'Dynamika Gradientów',
    blackHoleTest: 'Wykrywanie Black Crush',
    whitePointTest: 'Kalibracja Punktu Bieli',
    colorCheckpoint: 'Punkt Kontrolny Koloru',
    generateReport: 'Generuj Raport',
    viewResults: 'Zobacz Wyniki',
    btnExit: 'Wyjdź (ESC)',
    compareSideBySide: 'Porównaj Obok Siebie',
  },
};
