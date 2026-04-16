import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PixelesPantallaUI } from '../ui';

const slug = 'test-martwych-pikseli-naprawa-monitora';
const title = 'Test Martwych Pikseli i Narzędzie do Naprawy Ekranu';
const description =
  'Sprawdź, czy Twój monitor posiada martwe lub zablokowane piksele i napraw je online za pomocą naszego narzędzia stroboskopowego o wysokiej częstotliwości.';

const faqData = [
  {
    question: 'Jaka jest różnica między martwym a zablokowanym pikselem?',
    answer:
      'Martwy piksel jest trwale czarny, ponieważ nie otrzymuje zasilania (spalony tranzystor). Zablokowany piksel (stuck pixel) ma zazwyczaj jasny kolor (czerwony, zielony lub niebieski) i można go czasem ożywić poprzez szybką stymulację stroboskopową.',
  },
  {
    question: 'Jak działa narzędzie do naprawy (Strobe)?',
    answer:
      'Nasze narzędzie generuje szybkie miganie kolorów podstawowych z dużą prędkością. Może to wymusić odblokowanie zablokowanego ciekłego kryształu w pikselu. Zaleca się pozostawienie narzędzia włączonego na 10 do 30 minut.',
  },
  {
    question: 'Czy martwe piksele mogą pojawić się z powodu temperatury?',
    answer:
      'Tak, ekstremalne temperatury mogą wpływać na matrycę. Jednak najczęstszymi przyczynami są wady produkcyjne lub uszkodzenia fizyczne, które niszczą styki elektryczne ciekłego kryształu.',
  },
  {
    question: 'Ile martwych pikseli obejmuje gwarancja?',
    answer:
      'Zależy to od producenta i normy ISO 9241-307. Zazwyczaj marki uznają do 2 lub 3 jasnych pikseli za "normalne" w panelach Klasy 1, podczas gdy panele Klasy 0 nie dopuszczają żadnych wad.',
  },
];

const howToData = [
  {
    name: 'Wyczyść ekran',
    text: 'Przed rozpoczęciem dokładnie wyczyść monitor ściereczką z mikrofibry, aby nie pomylić kurzu z martwym pikselem.',
  },
  {
    name: 'Włącz tryb pełnoekranowy',
    text: 'Naciśnij F11 lub przycisk pełnego ekranu, aby interfejs przeglądarki nie przeszkadzał w wykrywaniu wad.',
  },
  {
    name: 'Zmieniaj kolory',
    text: 'Przełączaj między tłem czarnym, białym, czerwonym, zielonym i niebieskim. Szukaj punktów, które nie pasują do koloru tła.',
  },
  {
    name: 'Uruchom cykl naprawczy',
    text: 'Jeśli znajdziesz jasny punkt, umieść nad nim narzędzie Strobe i pozostaw je włączone na co najmniej 20 minut.',
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

export const content: ToolLocaleContent<PixelesPantallaUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje i normy',
  bibliography: [
    {
      name: 'ISO/IEC 9241-307: Ergonomia wyświetlaczy i powiązanego sprzętu',
      url: 'https://www.iso.org/standard/72025.html',
    },
    {
      name: 'Polityka martwych pikseli - powszechne standardy (VESA)',
      url: 'https://www.vesa.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kompletny przewodnik: Martwe piksele, zablokowane piksele i jak je naprawić',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zauważyłeś na ekranie dziwną plamkę, która nie zmienia koloru? To może być wada matrycy. To narzędzie pomoże Ci zdiagnozować, czy Twój monitor ma <strong>martwe piksele</strong> lub <strong>zablokowane piksele</strong> oraz oferuje rozwiązanie pozwalające na próbę ich naprawy.',
    },
    {
      type: 'title',
      text: 'Jaka jest różnica między martwym a zablokowanym pikselem?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'W nowoczesnych monitorach istnieją dwa główne typy wad pikseli, z których każdy ma inną charakterystykę i wymaga innego rozwiązania.',
    },
    {
      type: 'title',
      text: 'Zablokowany piksel (Stuck Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'To najczęstsza wada. Występuje, gdy jeden lub więcej subpikseli (czerwony, zielony lub niebieski) blokuje się w stanie "włączonym". <strong>Objaw:</strong> Zobaczysz na ciemnym tle stały, jasny, kolorowy punkt (czerwony, zielony, niebieski lub biały). <strong>Często naprawialny.</strong> Ciekły kryształ nadal reaguje; jest po prostu "zablokowany" w określonej polaryzacji. Nasze narzędzie naprawcze Strobe próbuje go odblokować poprzez szybką stymulację napięciem.',
    },
    {
      type: 'title',
      text: 'Martwy piksel (Dead Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Występuje, gdy tranzystor sterujący pikselem ulegnie całkowitej awarii i nie przepuszcza światła. <strong>Objaw:</strong> Stały czarny punkt, szczególnie widoczny na jasnym lub białym tle. <strong>Trudny do naprawy (zazwyczaj trwała wada).</strong> Uszkodzenie występuje na poziomie sprzętowym (spalony obwód). Żadna stymulacja elektryczna tego nie naprawi. Zazwyczaj wymaga wymiany matrycy.',
    },
    {
      type: 'title',
      text: 'Jak działa narzędzie naprawcze Strobe?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Funkcja "Napraw piksel" wykorzystuje technikę znaną jako <strong>Pixel Exercising</strong>. Generuje ona wzorzec losowego szumu o wysokiej częstotliwości (szybkie miganie kolorów) nad obszarem dotkniętym wadą.',
    },
    {
      type: 'title',
      text: 'Mechanizm: Ciekły kryształ i napięcie',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Monitory LCD wykorzystują ciekłe kryształy, które zmieniają swoją przezroczystość w zależności od przyłożonego napięcia. Gdy subpiksel się blokuje, oznacza to, że kryształ jest "zamrożony" w określonej polaryzacji. Szybkie zmiany napięcia (osiągane poprzez szybkie zmiany kolorów podstawowych) mają na celu "rozruszanie" kryształu i wymuszenie zmiany stanu.',
    },
    {
      type: 'title',
      text: 'Zalecenia dotyczące użytkowania',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '<ul><li>Zaleca się uruchomienie narzędzia nad obszarem dotkniętym wadą na co najmniej <strong>10 do 20 minut</strong>.</li><li>Jeśli to nie zadziała, spróbuj dłuższych sesji (do 1 godziny) lub zastosuj bardzo lekki nacisk ściereczką z mikrofibry na piksel (na własne ryzyko).</li><li>W niektórych przypadkach delikatne podgrzanie monitora suszarką do włosów (przy niskiej temperaturze) przed aktywacją Strobe poprawia rezultaty.</li></ul>',
    },
    {
      type: 'title',
      text: 'Ostrzeżenie o epilepsji',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tryb naprawczy wykorzystuje szybko migające światła o dużej prędkości. Jeśli cierpisz na epilepsję fotogenną lub masz wrażliwość na światło, <strong>NIE używaj tej funkcji</strong>. Ekspozycja na migające wzorce może wywołać napady u osób podatnych.',
    },
    {
      type: 'title',
      text: 'Kiedy ubiegać się o gwarancję lub wymianę',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jeśli potwierdzisz obecność wadliwych pikseli (szczególnie wielu martwych pikseli), możesz wykorzystać nasz test jako dowód w reklamacji gwarancyjnej. Wielu producentów uznaje więcej niż 2-3 jasne piksele lub 1 martwy piksel za wadę produkcyjną kwalifikującą do wymiany zgodnie z normą ISO 9241-307 (Klasa 1).',
    },
    {
      type: 'title',
      text: 'Historia standardów martwych pikseli',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Od dziesięcioleci monitory LCD borykają się z wadami pikseli ze względu na złożoność procesu produkcji. Panel Full HD (1920×1080) zawiera 6 220 800 pikseli (18 662 400 subpikseli). Statystyczne prawdopodobieństwo wystąpienia wad jest nieuniknione. Dlatego istnieją normy takie jak ISO 9241-307, które definiują "akceptowalne martwe piksele" w zależności od klasy monitora.',
    },
  ],
  ui: {
    badge: 'Narzędzie Ekranowe',
    title: 'Martwe czy zablokowane piksele?',
    description:
      'Sprawdź stan swojego monitora za pomocą czystych, jednolitych kolorów i napraw zablokowane piksele naszym narzędziem do stymulacji wysokiej częstotliwości.',
    btnStartTest: 'Rozpocznij test',
    btnStartFix: 'Napraw piksel',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Pełny ekran',
    kbdSpace: 'Spacja',
    kbdSpaceLabel: 'Zmień kolor',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Wyjdź',
    colorBlack: 'Czarny',
    colorWhite: 'Biały',
    colorRed: 'Czerwony',
    colorGreen: 'Zielony',
    colorBlue: 'Niebieski',
    btnToggleFixer: 'Otwórz narzędzie naprawcze (Strobe)',
    btnExit: 'Wyjdź (ESC)',
  },
};
