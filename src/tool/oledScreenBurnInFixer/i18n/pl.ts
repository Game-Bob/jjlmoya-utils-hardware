import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OledScreenBurnInFixerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'naprawiacz-wypalania-ekranu-oled';
const title = 'Naprawiacz Wypalania Ekranu OLED';
const description =
  'Uruchom pełnoekranowy naprawiacz wypalania OLED i ćwiczeniomierz zablokowanych pikseli LCD z szybkimi cyklami kolorów RGB, białym szumem, wymaganym ostrzeżeniem o fotowrażliwości i natywnym minutnikiem.';

const faqData = [
  {
    question: 'Czy naprawiacz wypalania OLED może usunąć trwałe wypalenie?',
    answer:
      'Żadne narzędzie przeglądarkowe nie cofnie trwałego zużycia subpikseli OLED. Ćwiczeniomierz pikseli może zmniejszyć tymczasową retencję obrazu, sprawić, że łagodne duchy będą mniej widoczne lub pomóc zdiagnozować, czy ślad to tymczasowa retencja czy trwałe wypalenie.',
  },
  {
    question: 'Czy to jest bezpieczne dla osób z padaczką fotowrażliwą?',
    answer:
      'Test wykorzystuje szybko migające kolory i statyczny szum o wysokim kontraście. Osoby z padaczką fotowrażliwą, wrażliwością na migrenę, ryzykiem drgawek lub dyskomfortem związanym z migającym światłem nie powinny go uruchamiać.',
  },
  {
    question: 'Czy to może naprawić zablokowany piksel LCD?',
    answer:
      'Czasami może pomóc zablokowanemu pikselowi, który pozostaje czerwony, zielony, niebieski lub biały, szybko zmieniając stan subpiksela. Nie może naprawić martwego czarnego piksela ani fizycznych uszkodzeń panelu.',
  },
  {
    question: 'Jak długo powinienem uruchamiać ćwiczeniomierz pikseli?',
    answer:
      'Zacznij od 5 do 10 minut dla zablokowanego piksela lub lekkiej retencji obrazu. Dłuższe sesje powinny być nadzorowane, jasność utrzymywana na rozsądnym poziomie, a ekran powinien mieć czas na ostygnięcie.',
  },
  {
    question: 'Dlaczego narzędzie używa canvas zamiast wideo?',
    answer:
      'Wzorce są generowane bezpośrednio w HTML5 Canvas, więc strona nie potrzebuje ciężkich plików wideo. Dzięki temu ładowanie jest szybkie, a cykl kolorów i szumu reaguje na rozmiar pełnego ekranu.',
  },
];

const howToData = [
  {
    name: 'Przeczytaj ostrzeżenie o fotowrażliwości',
    text: 'Nie kontynuuj, jeśli migające światło, wzorce o wysokim kontraście, migreny lub ryzyko drgawek mogłyby wpłynąć na ciebie lub kogoś w pobliżu.',
  },
  {
    name: 'Ustaw krótkie pierwsze uruchomienie',
    text: 'Wybierz od 5 do 10 minut na pierwsze przejście, wybierz tryb Hybrydowy i utrzymuj jasność na komfortowym poziomie.',
  },
  {
    name: 'Rozpocznij naprawę pełnoekranową',
    text: 'Potwierdź ostrzeżenie, naciśnij Rozpocznij naprawę i pozwól, aby canvas przechodził przez kolory RGB i szum bez przesuwania innych okien na ekranie.',
  },
  {
    name: 'Sprawdź ślad po zakończeniu',
    text: 'Zatrzymaj test, wyświetl neutralną szarość, biel, czerń, czerwień, zieleń i niebieski, a następnie porównaj, czy obraz duch lub zablokowany piksel się zmienił.',
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

export const content: ToolLocaleContent<OledScreenBurnInFixerUI> = {
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
      text: 'Naprawiacz Wypalania OLED i Ćwiczeniomierz Zablokowanych Pikseli LCD',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ten naprawiacz wypalania ekranu OLED to pełnoekranowy ćwiczeniomierz pikseli do tymczasowej retencji obrazu, słabych obrazów duchów i niektórych zablokowanych pikseli LCD. Generuje szybkie wzorce czerwone, zielone, niebieskie, białe, czarne, żółte i szumowe bezpośrednio w HTML5 Canvas. Nie ma plików wideo, zewnętrznych zasobów graficznych ani kroku pobierania: przeglądarka maluje każdą klatkę w bieżącym rozmiarze ekranu.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ostrzeżenie o fotowrażliwości',
      icon: 'mdi:alert',
      badge: 'Wymagane',
      html: 'Wzorzec naprawczy wykorzystuje szybkie błyski, przejścia o wysokim kontraście i biały szum. Nie uruchamiaj go, jeśli masz padaczkę fotowrażliwą, ryzyko drgawek, wrażliwość na migrenę, zawroty wywołane migającym światłem lub jeśli ktoś w pobliżu mógłby zostać dotknięty. Przerwij natychmiast, jeśli poczujesz zmęczenie oczu, nudności, ból głowy lub dyskomfort.',
    },
    {
      type: 'paragraph',
      html: 'Narzędzie jest przydatne, gdy praktyczne pytanie brzmi: <strong>czy ten ślad to tymczasowa retencja, która może zaniknąć, czy trwałe zużycie panelu?</strong> Krótkie nadzorowane uruchomienie może czasem zmniejszyć obraz ducha spowodowany zatrzymanymi statycznymi elementami interfejsu, a czasem może obudzić subpiksel zablokowany na jednym kolorze. Nie może odbudować zużytego materiału OLED, naprawić pękniętej warstwy, przywrócić martwej linii sterującej ani zagwarantować odzyskania sprawności.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0 MB', label: 'załadowane pliki wideo', icon: 'mdi:speedometer' },
        { value: 'RGB', label: 'ćwiczenie subpikseli podstawowych', icon: 'mdi:palette' },
        { value: '1-120 min', label: 'natywny minutnik sesji', icon: 'mdi:timer-outline' },
        { value: '100%', label: 'wykonanie po stronie klienta', icon: 'mdi:lock-outline' },
      ],
    },
    {
      type: 'title',
      text: 'Co oznaczają wypalenie, retencja obrazu i ghosting',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Wypalenie OLED',
          definition: 'Trwałe nierównomierne zużycie organicznych subpikseli. Statyczne logo, pasek zadań, pasek nawigacji lub HUD gry może pozostawić widoczny kształt, ponieważ te piksele zestarzały się inaczej niż reszta panelu.',
        },
        {
          term: 'Tymczasowa retencja obrazu',
          definition: 'Krótkotrwały obraz ducha, który pozostaje po zniknięciu statycznej treści. Może zanikać przy normalnej mieszanej treści, cyklu kompensacji lub wzorcu ćwiczeniowym pikseli.',
        },
        {
          term: 'Zablokowany piksel LCD',
          definition: 'Piksel lub subpiksel zablokowany na czerwonym, zielonym, niebieskim, białym lub innym stałym kolorze. Szybkie zmiany stanu mogą go czasem uwolnić, jeśli problem nie jest fizycznym uszkodzeniem.',
        },
        {
          term: 'Martwy piksel',
          definition: 'Piksel, który pozostaje czarny, ponieważ nie emituje już ani nie przepuszcza światła prawidłowo. Ćwiczeniomierz pikseli w przeglądarce zwykle nie może ożywić naprawdę martwego piksela.',
        },
        {
          term: 'Ghosting LCD',
          definition: 'Smugi ruchu spowodowane wolną reakcją pikseli. To co innego niż wypalenie ekranu, choć użytkownicy często opisują oba zjawiska jako obrazy duchów.',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tymczasowa retencja',
          description: 'Zwykle zanika po mieszanej treści, rutynach odświeżania ekranu lub krótkiej sesji RGB i szumu.',
          icon: 'mdi:history',
          highlight: true,
          points: ['Widoczna po statycznej treści', 'Często łagodniejsza na brzegach', 'Może poprawić się w ciągu minut lub godzin'],
        },
        {
          title: 'Trwałe wypalenie',
          description: 'Nierównomierne zużycie OLED, które pozostaje widoczne po odpoczynku, cyklach kompensacji i zróżnicowanej treści.',
          icon: 'mdi:contrast-circle',
          points: ['Odpowiada długotrwałemu statycznemu UI', 'Najbardziej widoczne na jednolitych kolorach', 'Nie znika po ćwiczeniu'],
        },
        {
          title: 'Zablokowany piksel',
          description: 'Pojedynczy punkt lub mała grupa zablokowana na jednym kolorze, a nie duży obraz ducha.',
          icon: 'mdi:grain',
          points: ['Często szerokości jednego piksela', 'Może być czerwony, zielony, niebieski lub biały', 'Czasami reaguje na szybkie zmiany kolorów'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Jak bezpiecznie używać ćwiczeniomierza pikseli',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Zmniejsz jasność przed pierwszym uruchomieniem, szczególnie na telefonach OLED, telewizorach OLED i laptopach z panelem OLED.',
        'Zacznij od 5 do 10 minut; nie pozostawiaj wyświetlacza bez nadzoru podczas długich sesji.',
        'Użyj trybu pełnoekranowego, aby dotknięty obszar otrzymywał ten sam wzorzec co reszta panelu.',
        'Poinformuj osoby w pomieszczeniu o migającym świetle; nie uruchamiaj testu w pobliżu osób, które nie wyraziły na to zgody.',
        'Przerwij, jeśli panel staje się wyjątkowo ciepły, jeśli przeglądarka mocno się zacina lub jeśli odczuwasz dyskomfort.',
        'Po uruchomieniu sprawdź neutralną szarość, biel, czerń, czerwień, zieleń i niebieski, aby porównać wyniki.',
      ],
    },
    {
      type: 'table',
      headers: ['Problem', 'Pierwszy tryb', 'Pierwszy czas trwania', 'Wskazówka dotycząca jasności'],
      rows: [
        ['Słaby duch OLED', 'Hybrydowy RGB plus szum', '5-10 minut', 'Komfortowa, nie maksymalna'],
        ['Świeża retencja statycznego logo', 'Cykl RGB', '10-20 minut', 'Umiarkowana jasność'],
        ['Pojedynczy kolorowy zablokowany piksel LCD', 'Szum lub Hybryda', '5-15 minut', 'Normalna jasność pulpitu'],
        ['Stare trwałe wypalenie', 'Hybryda tylko do diagnostyki', '5 minut', 'Unikaj długich sesji z wysoką jasnością'],
        ['Martwy czarny piksel', 'Nie zalecany jako naprawa', 'Tylko inspekcja', 'Żaden ćwiczeniomierz nie gwarantuje przywrócenia'],
      ],
    },
    {
      type: 'tip',
      title: 'Najpierw używaj krótkich sesji',
      html: 'Długa sesja z miganiem nie jest automatycznie lepsza. Jeśli ślad jest tymczasowy, często widać zmianę już po krótkim przejściu. Jeśli nic się nie zmienia po rozsądnej próbie i normalnej rutynie odświeżania panelu, problemem może być trwałe zużycie lub defekt sprzętowy.',
    },
    {
      type: 'title',
      text: 'Wybór między cyklem RGB, białym szumem a trybem hybrydowym',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Różne artefakty reagują na różne wzorce. Cykl czerwony zielony niebieski ćwiczy podstawowe subpiksele w kontrolowanej sekwencji. Biały szum szybko zmienia luminancję na wielu małych obszarach, co może pomóc w ujawnianiu i ćwiczeniu izolowanych zablokowanych pikseli. Tryb hybrydowy przeplata oba, co czyni go najlepszym pierwszym wyborem, gdy nie masz pewności, czy problemem jest retencja obrazu czy leniwy subpiksel.',
    },
    {
      type: 'table',
      headers: ['Tryb', 'Co robi', 'Najlepszy do', 'Uwaga'],
      rows: [
        ['Cykl RGB', 'Pełnoekranowe pola podstawowe i wysokokontrastowe', 'Retencja OLED i inspekcja kanałów kolorów', 'Widoczne miganie'],
        ['Biały szum', 'Losowy czarno biały szum na całym panelu', 'Pojedyncze zablokowane piksele i małe grupy', 'Wyższa intensywność wizualna'],
        ['Hybryda', 'Przeplata pola kolorów i szum', 'Ogólny przepływ pracy naprawiacza wypalania OLED', 'Najpierw użyj krótkiego minutnika'],
      ],
    },
    {
      type: 'proscons',
      title: 'Ćwiczeniomierz pikseli online: realistyczne korzyści i ograniczenia',
      items: [
        {
          pro: 'Działa natychmiast w przeglądarce bez instalowania oprogramowania ani ładowania plików wideo.',
          con: 'Nie może cofnąć trwałego zużycia materiału OLED ani fizycznych uszkodzeń panelu.',
        },
        {
          pro: 'Pełnoekranowy canvas pokrywa wyświetlacz generowanymi klatkami RGB i szumu.',
          con: 'Czasowanie przeglądarki, wydajność urządzenia i obsługa pełnego ekranu mogą wpływać na spójność animacji.',
        },
        {
          pro: 'Przydatny do wstępnej diagnostyki przed wypróbowaniem rutynowych procedur konserwacji panelu producenta.',
          con: 'Nie powinien zastępować serwisu gwarancyjnego dla nowych paneli z oczywistymi wadami.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Wskazówki dotyczące ekranów OLED',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Piksele OLED emitują własne światło. Gdy statyczny element pozostaje na ekranie przez wiele godzin, subpiksele pod tym elementem mogą starzeć się w innym tempie. Dlatego wypalenie często przybiera kształt logo kanałów telewizyjnych, pasków stanu telefonu, przycisków nawigacyjnych, HUD-ów gier, pasków bocznych aplikacji streamingowych lub pasków zadań pulpitu. Ćwiczeniomierz pikseli może przyspieszyć zanikanie tymczasowej retencji, ale trwałe różnicowe starzenie pozostaje problemem materiałowym.',
    },
    {
      type: 'card',
      icon: 'mdi:cog-outline',
      title: 'Najpierw sprawdź wbudowaną pielęgnację panelu',
      html: 'Wiele telewizorów, monitorów, laptopów i telefonów OLED zawiera odświeżanie pikseli, odświeżanie panelu, przyciemnianie logo, przesunięcie ekranu, przyciemnianie paska zadań lub cykle kompensacji. Używaj procedury producenta zgodnie z jej instrukcjami, szczególnie jeśli wyświetlacz jest na gwarancji. To narzędzie online najlepiej traktować jako łagodną diagnostykę i ćwiczenie retencji tymczasowej, a nie zamiennik oprogramowania układowego do pielęgnacji panelu.',
    },
    {
      type: 'list',
      items: [
        'Jeśli obraz ducha jest nowy, pozwól wyświetlaczowi pokazywać zróżnicowaną treść lub odpocząć, zanim założysz trwałe wypalenie.',
        'Jeśli ślad odpowiada wieloletniemu statycznemu logo, ćwiczeniomierz pikseli raczej nie usunie go całkowicie.',
        'Jeśli panel ma wbudowany cykl odświeżania, uruchamiaj go tylko tak często, jak zaleca producent.',
        'Unikaj wielogodzinnego uruchamiania wzorców testowych z maksymalną jasnością; ciepło i jasność przyczyniają się do zużycia.',
        'Ukryj paski zadań, włącz wygaszacze ekranu i zmniejsz jasność statycznego UI, aby zapobiec nawrotom.',
      ],
    },
    {
      type: 'title',
      text: 'Wskazówki dotyczące zablokowanych pikseli LCD',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Panele LCD nie wypalają się w taki sam sposób jak panele OLED, ale mogą wykazywać zablokowane piksele, ślady nacisku, wady panelu i tymczasową trwałość obrazu. Zablokowany piksel, który pozostaje czerwony, zielony, niebieski, cyjan, magenta, żółty lub biały, może być spowodowany przez subpiksel, który nie przełącza się prawidłowo. Szybkie zmiany mogą czasem pomóc, choć nie ma gwarantowanej naprawy online.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Martwy piksel a zablokowany piksel',
      icon: 'mdi:information-outline',
      badge: 'Diagnoza',
      html: 'Kolorowy punkt ma większe szanse niż czarny. Czarny piksel na każdym kolorze testowym jest zwykle martwy lub zablokowany. Kolorowy piksel, który zmienia się na niektórych tłach, ale nie na innych, może być zablokowanym subpikselem i jest lepszym kandydatem na krótką sesję ćwiczeń pikseli.',
    },
    {
      type: 'summary',
      title: 'Przed użyciem nacisku lub metod fizycznych',
      items: [
        'Nie naciskaj mocno na panele OLED, ekrany dotykowe ani delikatne ekrany laptopów.',
        'Unikaj ostrych narzędzi, długopisów owiniętych szmatką i wszelkich metod, które mogłyby zarysować powierzchnię.',
        'Najpierw użyj ćwiczeń programowych, potem wsparcia gwarancyjnego, jeśli wada się utrzymuje.',
        'Udokumentuj wadę zdjęciami makro, jeśli wyświetlacz jest nowy i nadal obowiązują zasady zwrotu.',
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego Canvas jest lepszy niż ciężkie wideo naprawcze',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Naprawiacz wypalania oparty na wideo musi pobierać zakodowane klatki, dekodować je, skalować do ekranu i mieć nadzieję, że kompresja nie wygładziła dokładnych przejść. To narzędzie generuje każdą klatkę bezpośrednio w przeglądarce. Pola RGB są jednolite, szum jest tworzony dla bieżącego rozmiaru canvas, a strona unika dużych plików multimedialnych, które spowalniałyby ładowanie lub obniżały PageSpeed.',
    },
    {
      type: 'list',
      items: [
        'Brak zewnętrznego pliku wideo oznacza szybsze pierwsze renderowanie i mniejszą zależność od sieci.',
        'Wyjście canvas skaluje się do powierzchni pełnego ekranu, zamiast być ograniczone przez rozdzielczość wideo.',
        'Minutnik może automatycznie zatrzymać naprawę, zamiast zapętlać wideo w nieskończoność.',
        'Tryb, prędkość, czas trwania i intensywność można zmieniać bez ładowania kolejnego zasobu.',
      ],
    },
    {
      type: 'message',
      title: 'Praktyczne oczekiwanie',
      ariaLabel: 'Oczekiwanie wobec naprawiacza wypalania',
      html: 'Używaj tego narzędzia jako kontrolowanego pierwszego kroku: zmniejsz tymczasową retencję, poćwicz ewentualny zablokowany piksel i zbierz dowody. Jeśli ślad przetrwa zróżnicowaną treść, wbudowane procedury odświeżania panelu i ostrożne krótkie sesje ćwiczeń, potraktuj go jako problem sprzętowy lub gwarancyjny.',
    },
  ],
  ui: {
    safetyTitle: 'Ostrzeżenie o migającym świetle',
    safetyBody: 'Ten wzorzec naprawczy szybko miga jednolitymi kolorami i szumem o wysokim kontraście. Nie używaj go, jeśli ty lub ktoś w pobliżu może być narażony na padaczkę fotowrażliwą, drgawki, migreny, zawroty głowy lub wrażliwość na migające światło.',
    safetyChecklist: 'Utrzymuj rozsądną jasność, nadzoruj sesję i przerwij natychmiast, jeśli poczujesz dyskomfort.',
    safetyConfirm: 'Rozumiem ryzyko fotowrażliwości i chcę włączyć przycisk naprawy.',
    safetyContinue: 'Przejdź do ustawień',
    startRepair: 'Rozpocznij naprawę (Pełny ekran)',
    controlsLabel: 'Sterowanie naprawą ekranu OLED',
    modeLabel: 'Tryb wzorca',
    modeCycle: 'Cykl RGB',
    modeNoise: 'Biały szum',
    modeHybrid: 'Hybryda',
    modeCycleDescription: 'Jednolite kolory podstawowe do retencji obrazu i sprawdzania kanałów.',
    modeNoiseDescription: 'Szum wysokiej częstotliwości do pojedynczych zablokowanych pikseli i małych grup.',
    modeHybridDescription: 'Najlepszy pierwszy przebieg: przeplata pola RGB z teksturą szumu.',
    speedLabel: 'Prędkość cyklu',
    durationLabel: 'Czas trwania',
    durationShort: '5 min',
    durationStandard: '10 min',
    durationDeep: '20 min',
    durationShortDescription: 'Szybkie sprawdzenie',
    durationStandardDescription: 'Zalecane',
    durationDeepDescription: 'Przebieg nadzorowany',
    fullscreenHint: 'Pełnoekranowy canvas naprawy wypalania OLED',
    intensityLabel: 'Intensywność szumu',
    warningBadge: 'Migająca treść',
  },
};
