import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MonitorGhostingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-ghostingu-monitora';
const title = 'Test Ghostingu Monitora';
const description =
  'Testuj ghosting monitora, rozmycie ruchu, smugi overdrive i zachowanie odpowiedzi pikseli za pomoca ruchomych paskow, tekstu i wzorcow ruchu na pelnym ekranie.';

const faqData = [
  {
    question: 'Czym jest ghosting monitora?',
    answer:
      'Ghosting monitora to widoczna smuga podazajaca za poruszajacymi sie obiektami, gdy piksele nie moga zmieniac sie wystarczajaco szybko. Jest powszechny na wolnych panelach LCD, zle dostrojonych trybach overdrive i wyswietlaczach dzialajacych ponizej optymalnej czestotliwosci odswiezania.',
  },
  {
    question: 'Czy ten test moze zmierzyc dokladny czas reakcji?',
    answer:
      'Test przegladarkowy nie moze zasta pic sprzetu laboratoryjnego, takiego jak kamera poscigowa czy fotodioda, ale moze ujawnic widoczne artefakty ruchu, porownac ustawienia monitora i pomoc wybrac najmniej rozmyty tryb overdrive.',
  },
  {
    question: 'Dlaczego overdrive czasami tworzy jasne smugi?',
    answer:
      'Overdrive mocniej popycha piksele, aby przyspieszyc przejscia. Jesli przekroczy docelowy odcien, mozesz zobaczyc odwrotny ghosting: jasna lub kolorowa poswiate za poruszajacymi sie obiektami.',
  },
  {
    question: 'Czy powinienem testowac na ciemnym czy jasnym tle?',
    answer:
      'Na obu. Niektore panele bardziej rozmazuja przejscia ciemne-do-szarego niz jasne-do-ciemnego, wiec zmiana tla ujawnia artefakty, ktore pojedynczy wzorzec moze ukryc.',
  },
];

const howToData = [
  {
    name: 'Ustaw predkosc ruchu',
    text: 'Zacznij blisko domyslnej predkosci, a nastepnie zwiekszaj ja, az smugi stan sie latwe do sprawdzenia bez tracenia obiektu z oczu.',
  },
  {
    name: 'Zmien sile smugi',
    text: 'Uzyj kontroli smugi, aby ulatwic dostrzezenie trwalosci podczas porownywania ustawien monitora.',
  },
  {
    name: 'Testuj wiele tel',
    text: 'Przelaczaj sie miedzy ciemnym, jasnym i siatkowym tlem, aby ujawnic czarne rozmazania, odwrotny ghosting i poswiaty overdrive.',
  },
  {
    name: 'Porownaj ustawienia overdrive',
    text: 'Otworz OSD monitora i przetestuj tryby Wyl., Normalny, Szybki i Ekstremalny. Wybierz tryb z najczystszym ruchem i najmniejsza poswiata.',
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

export const content: ToolLocaleContent<MonitorGhostingTestUI> = {
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
      text: 'Test Ghostingu Monitora: Sprawdz Rozmycie Ruchu i Odpowiedz Pikseli',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ghosting monitora pojawia sie, gdy poruszajace sie obiekty pozostawiaja widoczna smuge. Moze sprawic, ze gry wydaja sie rozmazane, przewijany tekst trudniejszy do odczytania, a monitor o wysokiej czestotliwosci odswiezania wyglada gorzej niz oczekiwano. Ten test ghostingu monitora oferuje ruchome paski, tekst i wzorce o wysokim kontrascie, abys mogl porownac tryby overdrive, czestotliwosci odswiezania, tla i predkosci bez instalowania oprogramowania.',
    },
    {
      type: 'paragraph',
      html: 'Test jest zaprojektowany do praktycznej inspekcji. Nie ma na celu podawania laboratoryjnych czasow reakcji szary-do-szarego, ale pomaga odpowiedziec na pytanie, ktore wiekszosc uzytkownikow naprawde ma: <strong>ktore ustawienie monitora wyglada najczysciej na tym wyswietlaczu?</strong>',
    },
    {
      type: 'title',
      text: 'Jak Wyglada Ghosting',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Ciemny cien podazajacy za poruszajacym sie obiektem, czesto nazywany czarnym rozmazaniem',
        'Blada lub kolorowa poswiata za obiektem, czesto spowodowana nadmiernym overdrive',
        'Dluga przezroczysta smuga, ktora sprawia, ze krawedzie wygladaja na miekkie',
        'Wiele slabych kopii obiektu, szczegolnie na wyswietlaczach z wolna odpowiedzia pikseli',
        'Nierowna wyrazistosc miedzy ciemnym, jasnym i siatkowym tlem',
      ],
    },
    {
      type: 'title',
      text: 'Ghosting, Rozmycie Ruchu i Odwrotny Ghosting',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Artefakt', 'Co widzisz', 'Powszechna przyczyna'],
      rows: [
        ['Ghosting', 'Ciemniejsza lub wyblakla kopia podaza za obiektem', 'Odpowiedz pikseli jest zbyt wolna dla predkosci ruchu'],
        ['Rozmycie ruchu', 'Caly poruszajacy sie obiekt wyglada na miękki', 'Rozmycie sample-and-hold, niska czestotliwosc odswiezania lub rozmycie sledzenia wzrokowego'],
        ['Odwrotny ghosting', 'Jasna poswiata lub kolorowe smugi przekroczenia', 'Ustawienie overdrive jest zbyt agresywne'],
        ['Czarne rozmazanie', 'Ciemne sceny pozostawiaja ciezkie cienie', 'Ciemne przejscia paneli VA sa powolne'],
        ['Jakanie', 'Ruch skacze zamiast plynac', 'Frame pacing, niskie FPS lub obciazenie przegladarki/systemu'],
      ],
    },
    {
      type: 'title',
      text: 'Praktyczny Przeplyw Pracy Diagnostycznej',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zacznij od monitora ustawionego na jego natywnej rozdzielczosci i najwyzszej stabilnej czestotliwosci odswiezania. Jesli posiadasz monitor 144Hz, 165Hz, 240Hz lub 360Hz, potwierdz, ze system operacyjny faktycznie korzysta z tego trybu, zanim ocenisz wyrazistosc ruchu. Otworz test na pelnym ekranie, wybierz cel paski wyrazistosci i obserwuj tylna krawedz poruszajacego sie obiektu. Tylna krawedz to miejsce, gdzie smugi duchow, ciemne rozmazania i jasne poswiaty overdrive sa najlatwiejsze do porownania.',
    },
    {
      type: 'list',
      items: [
        'Uzyj ciemnego tla, aby ujawnic czarne rozmazania i powolne ciemne przejscia',
        'Uzyj jasnego tla, aby ujawnic kolorowe poswiaty overdrive',
        'Uzyj tla siatkowego, aby sprawdzic wyrazistosc krawedzi wzgledem linii referencyjnych o wysokim kontrascie',
        'Uzyj celu tekstowego, gdy twoim prawdziwym problemem jest rozmyte przewijanie lub trudny do odczytania tekst w ruchu',
        'Uzyj pelnego ekranu przed ocena monitora, poniewaz chrom przegladarki i skalowanie moga odwracac uwage od artefaktow ruchu',
        'Zwieksz predkosc dopiero po tym, jak mozesz wygodnie sledzic obiekt',
        'Porownuj jedno ustawienie monitora na raz, abys wiedzial, co sie zmienilo',
      ],
    },
    {
      type: 'title',
      text: 'Wybor Najlepszego Ustawienia Overdrive dla Twojego Monitora',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wiekszosc monitorow gamingowych zawiera ustawienie overdrive o nazwie Wyl., Normalny, Szybki, Szybszy, Ekstremalny, Czas Reakcji lub Trace Free. Najszybsza opcja nie zawsze jest najlepsza. Umiarkowane ustawienie czesto daje najlepsza rownowage: mniej rozmycia niz Wyl., ale mniej poswiat niz Ekstremalny.',
    },
    {
      type: 'table',
      headers: ['Tryb Overdrive', 'Oczekiwany wynik', 'Zalecenie'],
      rows: [
        ['Wyl.', 'Najmniejsze przekroczenie, ale wiecej rozmycia', 'Uzyteczna linia bazowa do porownania'],
        ['Normalny', 'Umiarkowana redukcja rozmycia', 'Czesto najlepszy do codziennego uzytku'],
        ['Szybki', 'Ostrzejszy ruch z pewnym ryzykiem poswiaty', 'Dobry, jesli smugi pozostaja czyste'],
        ['Ekstremalny', 'Najnizszy deklarowany czas reakcji, najwyzsze ryzyko przekroczenia', 'Unikac, jesli pojawiaja sie jasne odwrotne smugi'],
        ['Adaptacyjny/Zmienny', 'Zachowanie zmienia sie z czestotliwoscia odswiezania', 'Przetestuj ponownie w zakresie FPS, ktorego faktycznie uzywasz'],
      ],
    },
    {
      type: 'title',
      text: 'Co Zmienic, Gdy Test Wyglada Zle',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Co widzisz', 'Prawdopodobna przyczyna', 'Co sprobowac'],
      rows: [
        ['Dluga ciemna smuga za celem', 'Wolne ciemne przejscia pikseli lub slaby overdrive', 'Sprobuj silniejszego trybu overdrive, przetestuj ponownie na ciemnym i siatkowym tle'],
        ['Jasna poswiata lub kolorowy kontur za celem', 'Przekroczenie overdrive lub odwrotny ghosting', 'Zmniejsz overdrive o jeden poziom i porownaj przy rzeczywistej czestotliwosci'],
        ['Ruch wyglada na skaczacy zamiast rozmytego', 'Frame pacing, obciazenie przegladarki lub niedopasowanie czestotliwosci', 'Zamknij ciezkie aplikacje, wlacz pelny ekran, potwierdz czestotliwosc OS'],
        ['Tekst staje sie nieczytelny podczas ruchu', 'Rozmycie sample-and-hold, niska czestotliwosc lub wolna odpowiedz', 'Zwieksz czestotliwosc, przetestuj wzorzec tekstu, porownaj tryby overdrive'],
        ['Artefakty zmieniaja sie, gdy zmieniaja sie FPS', 'VRR lub adaptacyjne zachowanie overdrive', 'Przetestuj ponownie w zakresie FPS, w ktorym faktycznie grasz lub pracujesz'],
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego Czestotliwosc Odswiezania Ma Znaczenie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wyższe czestotliwosci odswiezania skracaja czas, przez ktory kazda klatka pozostaje widoczna, co moze sprawic, ze ruch staje sie wyrazniejszy. Jednak sama czestotliwosc odswiezania nie eliminuje ghostingu. Monitor 240Hz z wolnymi przejsciami pikseli moze nadal rozmazywac, podczas gdy dobrze dostrojony panel 144Hz moze wygladac czysciej niz zle dostrojony szybszy panel.',
    },
    {
      type: 'table',
      headers: ['Czestotliwosc', 'Czas klatki', 'Czego sie spodziewac'],
      rows: [
        ['60Hz', '16,7 ms', 'Latwo zauwazyc rozmycie sample-and-hold i wolniejszy ruch'],
        ['120Hz', '8,3 ms', 'Duza plynnosc, ale odpowiedz pikseli wciaz ma znaczenie'],
        ['144Hz', '6,9 ms', 'Powszechna linia bazowa gaming dla wyrazistosci ruchu'],
        ['240Hz', '4,2 ms', 'Bardzo plynnie, jesli strojenie odpowiedzi jest dobre'],
        ['360Hz', '2,8 ms', 'Wymagajace: zle strojenie overdrive staje sie oczywiste'],
      ],
    },
    {
      type: 'title',
      text: 'VRR, Gaming i Testowanie w Rzeczywistych Warunkach',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zmienna czestotliwosc odswiezania moze zmienic zachowanie monitora, poniewaz niektore wyswietlacze uzywaja innego strojenia overdrive przy roznych czestotliwosciach. Jesli twoj problem pojawia sie tylko w grach, nie testuj tylko przy maksymalnej czestotliwosci pulpitu. Przetestuj ponownie w zakresie FPS, w ktorym faktycznie grasz, szczegolnie w okolicach 60 FPS, 90 FPS, 120 FPS i kazdego ograniczenia klatek, ktorego uzywasz.',
    },
    {
      type: 'list',
      items: [
        'Jesli ghosting jest gorszy przy niskich FPS, monitor moze miec slabe zmienne strojenie overdrive',
        'Jesli poswiaty pojawiaja sie tylko przy wysokich czestotliwosciach, tryb overdrive moze byc zbyt agresywny',
        'Jesli ruch sie zacina, podczas gdy smuga pozostaje krotka, problemem jest prawdopodobnie frame pacing, a nie odpowiedz pikseli',
        'Jesli pelny ekran wyglada inaczej niz tryb okienkowy, sprawdz skalowanie przegladarki, skalowanie systemu i zachowanie kompozytora',
      ],
    },
    {
      type: 'title',
      text: 'Rozwiazywanie Problemow ze Zlymi Wynikami',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Potwierdz, ze kabel wyswietlacza obsluguje docelowa czestotliwosc odswiezania',
        'Wylacz wygladzanie ruchu, Black Frame Insertion lub tryby MPRT podczas porownywania normalnego overdrive',
        'Przetestuj ponownie po przelaczeniu monitora na jego natywna rozdzielczosc',
        'Uzyj pelnego ekranu lub zmniejsz powiekszenie przegladarki, jesli ruch wydaje sie niespojny',
        'Zamknij ciezkie aplikacje w tle, jesli animacja sie zacina',
        'Przetestuj ten sam wzorzec po zmianie ustawien czestotliwosci odswiezania w panelu sterowania GPU',
        'Sprobuj innego kabla lub portu, jesli monitor nie moze osiagnac deklarowanej czestotliwosci',
        'Przetestuj ponownie z VRR wlaczonym i wylaczonym, gdy ghosting zmienia sie miedzy pulpitem a grami',
      ],
    },
    {
      type: 'title',
      text: 'Ograniczenia Testu Ghostingu Online',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Test ghostingu oparty na przegladarce zalezy od czasu animacji przegladarki, obciazenia GPU, kompozycji systemu operacyjnego i konfiguracji wyswietlacza. Jest doskonaly do porownan wizualnych, ale dokladne pomiary czasu reakcji wymagaja specjalistycznego sprzetu, takiego jak kamery poscigowe, fotodiody lub metody oparte na oscyloskopie. Uzyj tego testu do wyboru ustawien i wykrywania oczywistych artefaktow, a nie do certyfikacji deklaracji producenta dotyczacych czasu reakcji.',
    },
  ],
  ui: {
    badge: 'Wyrazistosc Ruchu',
    speedLabel: 'Predkosc ruchu',
    pixelsPerSecondUnit: 'px/s',
    pixelUnit: 'px',
    millisecondUnit: 'ms',
    trailLabel: 'Sila smugi',
    backgroundLabel: 'Tlo',
    backgroundDark: 'Ciemne',
    backgroundLight: 'Jasne',
    backgroundGrid: 'Siatka',
    patternLabel: 'Cel testu',
    patternBars: 'Paski wyrazistosci',
    patternText: 'Blok tekstu',
    patternUfo: 'UFO',
    pursuitLabel: 'Przewodnik poscigowy',
    pursuitOn: 'Wl.',
    pursuitOff: 'Wyl.',
    fullscreen: 'Pelny ekran',
    exitFullscreen: 'Wyjdz z pelnego ekranu',
    pause: 'Pauza',
    resume: 'Wznow',
    targetText: 'RUCH',
    estimatedBlur: 'szacowane rozmycie',
    frameStep: 'Krok klatki',
    persistence: 'Trwalosc',
    sampleCount: 'Probki smugi',
    instructions: 'Obserwuj tylna krawedz poruszajacego sie celu, zmieniajac predkosc, sile smugi, tlo, tryb pelnego ekranu i ustawienia overdrive monitora.',
    reset: 'Resetuj',
  },
};
