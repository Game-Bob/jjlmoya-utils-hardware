import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDoubleClickTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-podwojnego-klikniecia';
const title = 'Test Podwojnego Klikniecia Myszy';
const description =
  'Przetestuj kazdy przycisk myszy i wykryj niepozadane podwojne klikniecia, zuzyte przelaczniki i drgania stykow z pomiarem czasu na przycisk w przegladarce.';

const faqData = [
  {
    question: 'Czym jest problem podwojnego klikniecia myszy?',
    answer:
      'Problem podwojnego klikniecia wystepuje, gdy jedno fizyczne nacisniecie jest zgłaszane jako dwa klikniecia. Moze dotyczyc lewego przycisku, prawego przycisku, klikniecia rolka lub przyciskow bocznych i zazwyczaj jest spowodowane zuzyciem przelacznika, drganiami stykow, ustawieniami anti-drganiowymi oprogramowania układowego lub niestabilnoscia sygnału bezprzewodowego.',
  },
  {
    question: 'Jaki odstęp jest podejrzany?',
    answer:
      'Bardzo krotkie odstępy miedzy kliknieciami sa podejrzane, poniewaz ludzkie podwojne klikniecia zazwyczaj trwaja dłuzej. To narzedzie zaczyna od progu 80 ms, ale mozesz go dostosowac w zaleznosci od myszy i stylu testowania.',
  },
  {
    question: 'Czy przegladarka moze udowodnic, ze przelacznik jest uszkodzony?',
    answer:
      'Przegladarka nie moze bezposrednio sprawdzic przelacznika elektrycznego, ale moze rejestrowac zdarzenia klikniecia odbierane przez system operacyjny. Powtarzajace sie podejrzane odstępy podczas testu pojedynczego klikniecia sa silnym dowodem drgan lub niepozadanego podwojnego klikania.',
  },
  {
    question: 'Jak powinienem poprawnie testowac?',
    answer:
      'Klikaj powoli i celowo, dazac do pojedynczych nacisniec. Jesli licznik podejrzanych rosnie nawet wtedy, gdy nie klikasz celowo podwojnie, powtorz test na innym porcie USB, w innej przegladarce i na innym komputerze, jesli to mozliwe.',
  },
];

const howToData = [
  {
    name: 'Ustaw prog detekcji',
    text: 'Zacznij od 80 ms. Obniz go dla scislej detekcji drgan przelacznika lub podnies, jesli twoje urzadzenie generuje nieco szersze przypadkowe odstępy.',
  },
  {
    name: 'Klikaj jak normalne pojedyncze klikniecie',
    text: 'Naciskaj kazdy przycisk myszy po jednym kliknieciu nad wizualizacja myszy. Nie klikaj celowo podwojnie podczas pierwszego przejscia.',
  },
  {
    name: 'Obserwuj licznik podejrzanych',
    text: 'Jesli podejrzane zdarzenia pojawiaja sie podczas wykonywania pojedynczych klikniec, sprawdz, ktory przycisk wizualny został podswietlony i porownaj z kompaktowymi chipami zdarzen.',
  },
  {
    name: 'Porownaj z innym urzadzeniem',
    text: 'Zdrowa mysz powinna utrzymywac wysoki wynik przy tym samym progu. Porownywanie urzadzen pomaga oddzielic awarie sprzetu od ustawien oprogramowania.',
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

export const content: ToolLocaleContent<MouseDoubleClickTestUI> = {
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
      text: 'Test Podwojnego Klikniecia Myszy: Diagnozuj Drgania Przyciskow Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mysz, ktora klika podwojnie po jednokrotnym nacisnieciu, to nie tylko uciazliwosc. Moze przypadkowo otwierac foldery, anulowac akcje przeciagania i upuszczania, oddawac dwa strzaly w grze, zamykac karty przegladarki lub sprawiac, ze menu kontekstowe pojawiaja sie i znikaja, zanim zdazysz ich uzyc. Ten internetowy test podwojnego klikniecia myszy koncentruje sie na uzytecznym sygnale diagnostycznym: <strong>odstępie czasu miedzy zdarzeniami przyciskow zgłaszanymi przez twoj system operacyjny</strong>.',
    },
    {
      type: 'paragraph',
      html: 'W przeciwiestwie do prostego licznika klikniec, to narzedzie sledzi kazdy przycisk niezaleznie: lewy klik, prawy klik, klikniecie rolka, wstecz przegladarki i dalej przegladarki. To wazne, poniewaz mysz moze miec uszkodzony prawy przycisk, podczas gdy lewy jest wciaz sprawny, lub zuzyty przycisk boczny, ktory szwankuje dopiero po miesiacach grania lub korzystania ze skrotow produktywnosci.',
    },
    {
      type: 'title',
      text: 'Co Mierzy Ten Test Przyciskow Myszy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gdy naciskasz przycisk myszy, przegladarka otrzymuje zdarzenie wskaznika zawierajace kod przycisku. Narzedzie przechowuje ostatni znacznik czasu dla tego samego fizycznego przycisku i porownuje go z nastepnym nacisnieciem tego samego przycisku. Jesli odstęp jest krotszy niz wybrany prog, zdarzenie jest oznaczane jako podejrzane, poniewaz normalne celowe drugie klikniecie zazwyczaj trwa dłuzej.',
    },
    {
      type: 'list',
      items: [
        'Lewy przycisk: przydatny do wykrywania przypadkowych podwojnych klikniec podczas otwierania plikow, zaznaczania tekstu lub przeciagania okien',
        'Prawy przycisk: przydatny, gdy menu kontekstowe migaja, otwieraja sie dwukrotnie lub natychmiast sie zamykaja',
        'Przycisk rolki: przydatny w myszach, gdzie srodkowy klik otwiera wiele kart lub zawodzi po intensywnym przegladaniu',
        'Przyciski Wstecz i Dalej: przydatne w myszach gamingowych i produktywnosciowych z bocznymi przelacznikami',
        'Pomiar czasu na przycisk: unika mieszania lewego klikniecia z prawym kliknieciem i nazywania tego fałszywym podwojnym kliknieciem',
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego Myszy Zaczynaja Podwojnie Klikac',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wiekszosc myszy uzywa małych mechanicznych przelacznikow pod kazdym przyciskiem. Gdy styki przelacznika sie zamykaja, metal moze elektrycznie drgac przez bardzo krotki okres przed ustabilizowaniem sie. Oprogramowanie układowe myszy normalnie filtruje ten szum za pomoca logiki przeciwdrganiowej. W miare zuzywania sie przelacznika drgania moga stawac sie dłuzsze, głosniejsze lub nieregularne, przez co komputer otrzymuje dwa nacisniecia przycisku, mimo ze palec wykonał tylko jedno fizyczne nacisniecie.',
    },
    {
      type: 'paragraph',
      html: 'Podwojne klikniecie nie zawsze jest spowodowane tym samym. Moze to byc mechaniczne zuzycie przelacznika, zbyt agresywnie ustawione przeciwdrganiowe oprogramowanie układowe, kurz lub utlenienie wewnatrz przelacznika, niestabilnosc pakietow bezprzewodowych, oprogramowanie makro, uszkodzony kabel lub ustawienie systemu operacyjnego, ktore sprawia, ze przypadkowe podwojne klikniecia sa bardziej zauwazalne.',
    },
    {
      type: 'table',
      headers: ['Objaw', 'Prawdopodobna Przyczyna', 'Co Przetestowac'],
      rows: [
        ['Jedno klikniecie otwiera pliki jak podwojne klikniecie', 'Drgania lewego przelacznika lub pomylka szybkosci podwojnego klikniecia systemu operacyjnego', 'Testuj Lewy z powolnymi pojedynczymi nacisnieciami przy 80 ms'],
        ['Menu prawego klikniecia miga lub sie zamyka', 'Drgania prawego przelacznika lub oprogramowanie przechwytujace menu kontekstowe', 'Testuj Prawy i tymczasowo wylacz narzedzia myszy'],
        ['Srodkowy klik otwiera dwie karty', 'Zuzycie przelacznika rolki', 'Testuj Rolke z celowymi pojedynczymi nacisnieciami'],
        ['Przycisk wstecz przeskakuje dwie strony', 'Drgania bocznego przelacznika lub powtarzanie skrotu przegladarki', 'Testuj Wstecz i Dalej osobno'],
        ['Wystepuje tylko bezprzewodowo', 'Interferencja bezprzewodowa, niski poziom baterii lub umiejscowienie odbiornika', 'Przetestuj ponownie przewodowo lub zbliz odbiornik'],
      ],
    },
    {
      type: 'title',
      text: 'Wybor Odpowiedniego Progu Przeciwdrganiowego',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Prog to maksymalny odstęp, ktory to narzedzie nadal uwaza za podejrzany. Wartosc domyslna, <strong>80 ms</strong>, to praktyczny kompromis: wystarczajaco surowy, aby wychwycic wiele niepozadanych podwojnych zdarzen, ale nie tak agresywny, aby kazde normalne celowe podwojne klikniecie stawało sie awaria sprzetowa.',
    },
    {
      type: 'table',
      headers: ['Prog', 'Najlepszy Do', 'Jak Interpretowac'],
      rows: [
        ['30-50 ms', 'Scisle kontrole drgan elektrycznych', 'Dobry do potwierdzania bardzo szybkich podwojnych zdarzen z zuzytego przelacznika'],
        ['60-90 ms', 'Ogolna diagnoza podwojnego klikniecia myszy', 'Najlepszy domyslny zakres dla wiekszosci myszy gamingowych i biurowych'],
        ['100-140 ms', 'Przerywane zuzyte przelaczniki', 'Przydatne, gdy mysz czasami tworzy szersze przypadkowe odstępy'],
        ['150-180 ms', 'Testy stresowe i słabe przelaczniki', 'Uzywaj ostroznie, poniewaz szybkie celowe podwojne klikniecia moga wpasc w ten zakres'],
      ],
    },
    {
      type: 'title',
      text: 'Jak Przeprowadzic Wiarygodny Test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Podczas pierwszego przejscia nie klikaj celowo podwojnie. Naciskaj kazdy przycisk myszy powoli i celowo, jeden przycisk na raz, podczas gdy kursor znajduje sie nad wizualizacja myszy. Zdrowy przelacznik powinien generowac stabilne pojedyncze zdarzenia. Jesli licznik podejrzanych rosnie podczas powolnych pojedynczych nacisniec, powtorz ten sam test przycisku kilka razy, aby potwierdzic wzorzec.',
    },
    {
      type: 'list',
      items: [
        'Testuj Lewy 20 do 30 wolnymi nacisnieciami, nastepnie Prawy, nastepnie Rolke, nastepnie przyciski boczne',
        'Nie przeciagaj myszy podczas testowania drgan przyciskow, poniewaz ruch moze odwracac uwage od wyniku czasowego',
        'Jesli przycisk pokazuje podejrzane zdarzenia, powtorz ten sam test po zmianie portu USB lub przegladarki',
        'W przypadku myszy bezprzewodowych testuj ze swieza bateria i odbiornikiem blisko myszy',
        'Jesli tylko jeden przycisk wielokrotnie zawodzi, usterka prawdopodobnie dotyczy tego konkretnego przelacznika, a nie całego urzadzenia',
      ],
    },
    {
      type: 'title',
      text: 'Interpretacja Wynikow',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Wynik', 'Znaczenie', 'Zalecany Nastepny Krok'],
      rows: [
        ['0 podejrzanych zdarzen po wielu nacisnieciach', 'Testowane przyciski wydaja sie zdrowe przy wybranym progu', 'Zachowaj domyslny prog lub przetestuj ponownie pozniej, jesli objawy powroca'],
        ['1 izolowane podejrzane zdarzenie', 'Moze to byc prawdziwe drganie lub przypadkowe szybkie nacisniecie', 'Powtorz ten sam przycisk powoli przed wyciagnieciem wnioskow'],
        ['Powtarzajace sie podejrzane zdarzenia na jednym przycisku', 'Silny znak drgan przelacznika lub zuzytych stykow', 'Przetestuj na innym komputerze i udokumentuj wynik'],
        ['Podejrzane zdarzenia na kazdym przycisku', 'Moze to byc oprogramowanie, sterownik, narzedzie makro lub srodowisko przegladarki', 'Wylacz oprogramowanie myszy i przetestuj ponownie'],
        ['Tylko tryb bezprzewodowy zawodzi', 'Prawdopodobnie bateria, umiejscowienie odbiornika lub interferencja', 'Sprobuj trybu przewodowego lub zbliz odbiornik'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Wynik zdrowia to szybkie podsumowanie, a nie ostateczny werdykt. Najwazniejszym dowodem jest <strong>ktory przycisk</strong> wygenerował podejrzane zdarzenia i czy wzorzec powtarza sie, gdy naciskasz ten sam przycisk powoli. Pojedyncze złe zdarzenie podczas pospiesznego testu jest mniej znaczace niz piec podejrzanych zdarzen prawego klikniecia podczas celowych pojedynczych nacisniec.',
    },
    {
      type: 'title',
      text: 'Przed Wymiana Myszy',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Sprawdz, czy oprogramowanie myszy ma ustawienie czasu przeciwdrganiowego i przetestuj ponownie po jego zmianie',
        'Wylacz makra, profile szybkiego strzału lub zmiany mapowania przyciskow podczas diagnozy',
        'Wyprobuj inny port USB, szczegolnie jesli uzywasz huba lub złącza na przednim panelu',
        'W przypadku myszy bezprzewodowych testuj z kluczem sprzetowym na kablu przedłuzajacym blisko podkładki pod mysz',
        'Porownaj z inna mysza na tym samym komputerze, aby oddzielic awarie sprzetu od zachowania oprogramowania',
      ],
    },
    {
      type: 'title',
      text: 'Naprawa, Gwarancja i Dowody',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jesli usterka jest mechaniczna, czyszczenie zewnetrznej obudowy rzadko rozwiazuje ja na stałe, poniewaz problem tkwi wewnatrz stykow przelacznika. Niektorzy uzytkownicy wymieniaja mikroprzelacznik, ale wymaga to lutowania i nie oplaca sie w przypadku kazdej myszy. Jesli mysz jest na gwarancji, powtarzajace sie podejrzane odstępy na tym samym przycisku sa uzytecznym dowodem przy wyjasnianiu problemu wsparciu.',
    },
    {
      type: 'paragraph',
      html: 'W przypadku roszczen gwarancyjnych nagraj krotkie przechwytywanie ekranu podczas powolnego naciskania wadliwego przycisku. Upewnij sie, ze chipy zdarzen pokazuja etykiete przycisku i podejrzany czas. Jest to jasniejsze niz mowienie "moja mysz czasami klika podwojnie", poniewaz demonstruje rzeczywisty przycisk i przyblizony czas niepozadanego podwojnego zdarzenia.',
    },
    {
      type: 'title',
      text: 'Ograniczenia Testu Myszy Opartego na Przegladarce',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ten test mierzy zdarzenia, ktore docieraja do przegladarki. Nie moze bezposrednio sprawdzic przebiegu elektrycznego wewnatrz przelacznika i nie moze ominac kazdego sterownika, systemu operacyjnego ani narzedzia dostawcy. To wciaz jest uzyteczne: jesli przegladarka otrzymuje podwojne zdarzenia, twoje normalne aplikacje rowniez moga je otrzymywac. Do walidacji na poziomie inzynieryjnym narzedzia sprzetowe, takie jak oscyloskopy lub testery przelacznikow, dostarczaja głębszych dowodow, ale nie sa konieczne w wiekszosci diagnostyki uzytkownika.',
    },
  ],
  ui: {
    badge: 'Laboratorium Drgan',
    clickTarget: 'Matryca Przyciskow',
    clickTargetHint: 'Nacisnij lewy, prawy, rolke, wstecz i dalej',
    totalClicks: 'Łacznie',
    suspiciousClicks: 'Podejrzane',
    fastestGap: 'Najszybszy odstęp',
    healthScore: 'Wynik zdrowia',
    thresholdLabel: 'Prog detekcji',
    thresholdUnit: 'ms',
    cleanEvent: 'czysty',
    suspiciousEvent: 'podejrzany',
    reset: 'Resetuj',
    statusIdle: 'Nacisnij kazdy przycisk myszy, aby przetestowac go niezaleznie',
    statusClean: 'Nie wykryto podejrzanych drgan przyciskow',
    statusWarning: 'Wykryto podejrzane drgania na przycisku myszy',
    lastGap: 'Ostatnie zdarzenie',
    logTitle: 'Ostatnie zdarzenia przyciskow',
    emptyLog: 'Nacisnij dowolny przycisk myszy nad ciałem myszy.',
    leftButton: 'Lewy',
    middleButton: 'Rolka',
    rightButton: 'Prawy',
    backButton: 'Wstecz',
    forwardButton: 'Dalej',
    otherButton: 'Inny',
  },
};
