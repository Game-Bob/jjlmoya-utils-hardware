import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebMidiKeyboardTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tester-klawiatury-midi';
const title = 'Tester Klawiatury MIDI przez WWW';
const description = 'Przetestuj klawiatur\u0119 MIDI USB, syntezator, pad kontroler, pokr\u0119t\u0142o pitch bend, pokr\u0119t\u0142o modulacji, dynamik\u0119 nut i zablokowane nuty bezpo\u015brednio w przegl\u0105darce z u\u017cyciem Web MIDI.';

const faqData = [
  {
    question: 'Czy ten tester MIDI mo\u017ce odczyta\u0107 moj\u0105 klawiatur\u0119 USB bez instalowania oprogramowania?',
    answer: 'Tak, w przegl\u0105darkach obs\u0142uguj\u0105cych Web MIDI, takich jak Chrome i Edge. Przegl\u0105darka prosi o pozwolenie, a nast\u0119pnie narz\u0119dzie nas\u0142uchuje komunikat\u00f3w nut, dynamiki, pitch bend i modulacji z wybranego wej\u015bcia MIDI.',
  },
  {
    question: 'Czy strona wysy\u0142a moje nuty MIDI lub dane wykonawcze?',
    answer: 'Nie. Zdarzenia MIDI s\u0105 przetwarzane w bie\u017c\u0105cej karcie przegl\u0105darki. Nuty, warto\u015bci dynamiki, komunikaty kontroler\u00f3w, nazwy urz\u0105dze\u0144 i logi nie s\u0105 wysy\u0142ane ani przechowywane przez stron\u0119.',
  },
  {
    question: 'Dlaczego moja klawiatura MIDI jest widoczna, ale \u017cadne klawisze si\u0119 nie pod\u015bwietlaj\u0105?',
    answer: 'Urz\u0105dzenie mo\u017ce by\u0107 pod\u0142\u0105czone jako powierzchnia kontrolna, przegl\u0105darka mo\u017ce wybra\u0107 niew\u0142a\u015bciwy port wej\u015bciowy, klawiatura mo\u017ce u\u017cywa\u0107 innego trybu albo kabel/hub mo\u017ce przesy\u0142a\u0107 zasilanie, ale nie dane MIDI.',
  },
  {
    question: 'Czy mog\u0119 przetestowa\u0107 pokr\u0119t\u0142a pitch bend i modulacji?',
    answer: 'Tak. Tester pokazuje pitch bend jako wycentrowan\u0105 warto\u015b\u0107 ze znakiem, a modulacj\u0119 jako MIDI CC1. Poruszanie tymi kontrolkami powinno natychmiast aktualizowa\u0107 wska\u017aniki, gdy urz\u0105dzenie wysy\u0142a standardowe komunikaty MIDI.',
  },
  {
    question: 'Jakie komunikaty MIDI s\u0105 wy\u015bwietlane?',
    answer: 'Interfejs na \u017cywo pod\u015bwietla komunikaty Note On i Note Off, rejestruje dynamik\u0119, wykrywa pitch bend i \u015bledzi pokr\u0119t\u0142o modulacji CC1. Inne komunikaty kontroler\u00f3w mog\u0105 pojawi\u0107 si\u0119 w dzienniku zdarze\u0144, gdy s\u0105 istotne dla testowanych kontrolek.',
  },
];

const howToData = [
  {
    name: 'Pod\u0142\u0105cz sprz\u0119t MIDI',
    text: 'Pod\u0142\u0105cz klawiatur\u0119, syntezator, pad kontroler lub interfejs MIDI USB do komputera przed otwarciem okna uprawnie\u0144. Unikaj niezasilanych hub\u00f3w podczas rozwi\u0105zywania problem\u00f3w z niestabilnymi urz\u0105dzeniami.',
  },
  {
    name: 'Przyznaj przegl\u0105darce dost\u0119p do MIDI',
    text: 'Naci\u015bnij Pod\u0142\u0105cz wej\u015bcie MIDI i zaakceptuj pro\u015bb\u0119 o pozwolenie przegl\u0105darki. U\u017cyj Chrome lub Edge przez HTTPS lub localhost, poniewa\u017c Web MIDI jest chronione przez uprawnienia.',
  },
  {
    name: 'Graj klawiszami w ca\u0142ym zakresie',
    text: 'Naciskaj niskie, \u015brednie i wysokie nuty. Klawiatura na ekranie rozszerza si\u0119 wok\u00f3\u0142 odbieranych nut i pod\u015bwietla ka\u017cdy klawisz zgodnie z dynamik\u0105.',
  },
  {
    name: 'Sprawd\u017a pokr\u0119t\u0142a i kontrolki ekspresji',
    text: 'Poruszaj pokr\u0119t\u0142em pitch bend, pokr\u0119t\u0142em modulacji i kontrolkami wykonawczymi. Pitch powinien wraca\u0107 do centrum, a modulacja powinna porusza\u0107 si\u0119 od 0 do 127.',
  },
  {
    name: 'Czytaj dziennik zdarze\u0144',
    text: 'U\u017cyj dziennika zdarze\u0144, aby wykry\u0107 brakuj\u0105ce komunikaty Note Off, niespodziewane kana\u0142y, niskie warto\u015bci dynamiki lub kontrolki wysy\u0142aj\u0105ce inny komunikat MIDI ni\u017c oczekiwano.',
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
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<WebMidiKeyboardTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Tester Klawiatury MIDI Online dla Prawdziwego Sprz\u0119tu USB', level: 2 },
    {
      type: 'paragraph',
      html: 'Niezawodny <strong>tester klawiatury MIDI online</strong> powinien szybko odpowiedzie\u0107 na jedno pytanie: czy fizyczny instrument wysy\u0142a komunikaty, kt\u00f3rych oczekuje DAW, sampler, syntezator lub system o\u015bwietlenia? Ten tester WebMIDI nas\u0142uchuje wej\u015bcia MIDI przegl\u0105darki i pokazuje w czasie rzeczywistym Note On, Note Off, dynamik\u0119, pitch bend i dane pokr\u0119t\u0142a modulacji. Jest przeznaczony dla klawiatur MIDI USB, interfejs\u00f3w DIN-USB, syntezator\u00f3w, pad kontroler\u00f3w, pianin scenicznych, gitar MIDI, trigger\u00f3w perkusyjnych i kompaktowych kontroler\u00f3w u\u017cywanych w domowych studiach lub na scenie.',
    },
    {
      type: 'message',
      title: 'Prywatna diagnostyka MIDI dzia\u0142aj\u0105ca lokalnie',
      html: 'Test dzia\u0142a w ca\u0142o\u015bci po stronie klienta. Strona nie wysy\u0142a numer\u00f3w nut, krzywych dynamiki, ruch\u00f3w kontroler\u00f3w, nazw urz\u0105dze\u0144 ani dziennik\u00f3w zdarze\u0144. Przegl\u0105darka udost\u0119pnia MIDI dopiero po zatwierdzeniu pro\u015bby o pozwolenie, a warto\u015bci pozostaj\u0105 w bie\u017c\u0105cej karcie.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-127', label: 'zakres dynamiki MIDI' },
        { value: '128', label: 'standardowe numery nut' },
        { value: '14-bit', label: 'rozdzielczo\u015b\u0107 pitch bend' },
        { value: 'CC1', label: 'sterowanie modulacj\u0105' },
      ],
    },
    {
      type: 'table',
      headers: ['Sygna\u0142', 'Co pokazuje tester', 'Prawid\u0142owe zachowanie'],
      rows: [
        ['Note On', 'Nazwa nuty, numer nuty, kana\u0142 i dynamika.', 'Ka\u017cdy fizyczny klawisz \u015bwieci si\u0119 raz przy naci\u015bni\u0119ciu i u\u017cywa warto\u015bci dynamiki powy\u017cej zera.'],
        ['Note Off', 'Zdarzenie zwolnienia w dzienniku i zgaszenie pod\u015bwietlenia klawisza.', 'Ka\u017cdy naci\u015bni\u0119ty klawisz ga\u015bnie przy zwolnieniu; \u017cadne nuty nie pozostaj\u0105 wizualnie zablokowane.'],
        ['Velocity', 'Wska\u017anik na \u017cywo plus bie\u017c\u0105ca krzywa.', 'Delikatna gra daje ni\u017csze warto\u015bci, a mocna gra osi\u0105ga wy\u017csze warto\u015bci bez losowych skok\u00f3w.'],
        ['Pitch bend', 'Wycentrowany wska\u017anik ze znakiem od ujemnego do dodatniego.', 'Pokr\u0119t\u0142o przesuwa si\u0119 p\u0142ynnie i wraca blisko zera po zwolnieniu.'],
        ['Modulation', 'Wska\u017anik CC1 od 0 do 127.', 'Pokr\u0119t\u0142o lub suwak porusza si\u0119 przewidywalnie w pe\u0142nym zakresie.'],
      ],
    },
    { type: 'title', text: 'Jak Przetestowa\u0107 Klawiatur\u0119 MIDI Bez DAWa', level: 2 },
    {
      type: 'paragraph',
      html: 'Szukanie sposobu na <em>przetestowanie klawiatury MIDI</em> cz\u0119sto oznacza, \u017ce u\u017cytkownik nie wie jeszcze, czy awaria le\u017cy po stronie kontrolera, kabla, systemu operacyjnego czy oprogramowania muzycznego. DAW dodaje wiele dodatkowych zmiennych: stan uzbrojenia \u015bcie\u017cki, filtry wej\u015bciowe, routing kana\u0142\u00f3w MIDI, wirtualne instrumenty, monitoring, szablony i preferencje sterownik\u00f3w. Tester w przegl\u0105darce usuwa wi\u0119kszo\u015b\u0107 tych warstw. Je\u015bli okno uprawnie\u0144 WebMIDI widzi urz\u0105dzenie, a klawiatura pod\u015bwietla nuty na ekranie, fizyczna \u015bcie\u017cka MIDI dzia\u0142a.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'U\u017cyj tego przed zmian\u0105 ustawie\u0144 DAWa',
      html: 'Najpierw potwierd\u017a, \u017ce kontroler wysy\u0142a surowe MIDI. Nast\u0119pnie diagnozuj problemy w aplikacji muzycznej. Je\u015bli tester odbiera nuty, ale DAW nie, sprawd\u017a w\u0142\u0105czenie wej\u015bcia MIDI, wybrane wej\u015bcie \u015bcie\u017cki, filtry kana\u0142\u00f3w, skrypty powierzchni kontrolnych i monitoring instrumentu.',
    },
    {
      type: 'list',
      items: [
        'Pod\u0142\u0105cz klawiatur\u0119 bezpo\u015brednio do komputera, gdy to mo\u017cliwe, zw\u0142aszcza je\u015bli zasilanie z magistrali jest s\u0142abe.',
        'Otw\u00f3rz tester w Chrome lub Edge, poniewa\u017c wsparcie Web MIDI r\u00f3\u017cni si\u0119 w zale\u017cno\u015bci od przegl\u0105darki i platformy.',
        'Naci\u015bnij Pod\u0142\u0105cz wej\u015bcie MIDI i wybierz urz\u0105dzenie muzyczne lub interfejs MIDI w oknie uprawnie\u0144.',
        'Graj chromatyczne nuty na ca\u0142ej klawiaturze, aby odkry\u0107 martwe klawisze, podzielone strefy lub niespodzianki transpozycji oktaw.',
        'Poruszaj pokr\u0119t\u0142ami pitch i modulacji powoli, a potem szybko, aby wychwyci\u0107 zaszumione czujniki lub s\u0142aby powr\u00f3t do centrum.',
        'Czy\u015b\u0107 dziennik mi\u0119dzy testami przy por\u00f3wnywaniu kabli, port\u00f3w USB, preset\u00f3w klawiatury lub tryb\u00f3w kontrolera.',
      ],
    },
    {
      type: 'tip',
      title: 'Szybkie sprawdzenie kabla',
      html: 'Je\u015bli urz\u0105dzenie w\u0142\u0105cza si\u0119, ale nie pojawia si\u0119 \u017cadne wej\u015bcie MIDI, spr\u00f3buj innego kabla USB. Wiele tanich kabli USB s\u0142u\u017cy tylko do \u0142adowania i nie przenosi danych, sprawiaj\u0105c, \u017ce kontroler wydaje si\u0119 aktywny, podczas gdy \u017cadne komunikaty MIDI nie docieraj\u0105 do komputera.',
    },
    { type: 'title', text: 'Odczytywanie Krzywych Dynamiki i Odpowiedzi Dynamicznej', level: 2 },
    {
      type: 'paragraph',
      html: 'Dynamika to nie tylko g\u0142o\u015bno\u015b\u0107; to warto\u015b\u0107 wykonawcza wysy\u0142ana z nut\u0105, zwykle od 1 do 127. Wtyczka fortepianowa mo\u017ce mapowa\u0107 dynamik\u0119 na g\u0142o\u015bno\u015b\u0107, warstw\u0119 pr\u00f3bki, jasno\u015b\u0107, ha\u0142as m\u0142otka, czas ataku lub wszystkie te cechy jednocze\u015bnie. Gdy kontroler ma s\u0142ab\u0105 detekcj\u0119 dynamiki, muzyk mo\u017ce odczuwa\u0107, \u017ce delikatne nuty znikaj\u0105, \u015brednie s\u0105 zbyt g\u0142o\u015bne, a mocne nigdy nie osi\u0105gaj\u0105 ekspresyjnego maksimum. Bie\u017c\u0105ca krzywa dynamiki pomaga ujawni\u0107, czy sprz\u0119t generuje u\u017cyteczny rozk\u0142ad warto\u015bci.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Zdrowa klawiatura',
          description: 'Delikatne, \u015brednie i mocne uderzenia tworz\u0105 widocznie r\u00f3\u017cni\u0105ce si\u0119 pasma dynamiki z powtarzalnymi warto\u015bciami dla podobnej si\u0142y gry.',
          highlight: true,
        },
        {
          title: 'Skompresowana odpowied\u017a',
          description: 'Wi\u0119kszo\u015b\u0107 nut skupia si\u0119 w w\u0105skim zakresie, np. 70-95, przez co instrumenty fortepianowe i perkusyjne brzmi\u0105 p\u0142asko i s\u0105 trudne do kontrolowania.',
        },
        {
          title: 'Nieregularna odpowied\u017a',
          description: 'S\u0105siednie nuty lub powtarzane uderzenia skacz\u0105 nieprzewidywalnie, co sugeruje zabrudzone styki, wadliwe czujniki, z\u0142\u0105 detekcj\u0119 lub niestabilne oprogramowanie uk\u0142adowe.',
        },
      ],
    },
    {
      type: 'table',
      headers: ['Zaobserwowany wzorzec dynamiki', 'Prawdopodobna interpretacja', 'Nast\u0119pny test'],
      rows: [
        ['Zawsze 127', 'Tryb sta\u0142ej dynamiki jest w\u0142\u0105czony lub kontroler jest skonfigurowany do organ\u00f3w/syntezatora.', 'Sprawd\u017a ustawienia globalne klawiatury, tryb pad\u00f3w lub edytor kontrolera.'],
        ['Zawsze bardzo nisko', 'Krzywa dynamiki jest zbyt mi\u0119kka, kalibracja czujnika jest b\u0142\u0119dna lub klawiatura jest uszkodzona.', 'Zmie\u0144 krzywe dynamiki i por\u00f3wnaj czarne i bia\u0142e klawisze w r\u00f3\u017cnych oktawach.'],
        ['Jeden klawisz mocno odbiega', 'Miejscowy styk, kopu\u0142ka gumowa, czujnik optyczny lub mechanizm klawisza mo\u017ce by\u0107 zabrudzony lub uszkodzony.', 'Powt\u00f3rz ten klawisz przy r\u00f3\u017cnej sile i por\u00f3wnaj z s\u0105siednimi nutami.'],
        ['Warto\u015bci spadaj\u0105 po u\u017cyciu huba', 'Stabilno\u015b\u0107 zasilania lub danych mo\u017ce by\u0107 na granicy.', 'Przetestuj ponownie z bezpo\u015brednim portem USB i znanym kablem do danych.'],
      ],
    },
    {
      type: 'card',
      title: 'Dlaczego Note Off ma znaczenie',
      html: 'Zablokowana nuta to cz\u0119sto brakuj\u0105cy lub op\u00f3\u017aniony komunikat Note Off. Niekt\u00f3re instrumenty wysy\u0142aj\u0105 Note On z dynamik\u0105 0 zamiast osobnego polecenia Note Off; oba zachowania s\u0105 prawid\u0142owe w MIDI. Ten tester traktuje Note On z dynamik\u0105 zero jako zwolnienie nuty, wi\u0119c naprawd\u0119 zablokowane klawisze pozostaj\u0105 widoczne do momentu nadej\u015bcia prawid\u0142owego komunikatu zwolnienia.',
    },
    { type: 'title', text: 'Testowanie Pitch Bend, Modulacji i Kontrolek Wykonawczych', level: 2 },
    {
      type: 'paragraph',
      html: 'Pitch bend to komunikat MIDI o wy\u017cszej rozdzielczo\u015bci ni\u017c zwyk\u0142e 7-bitowe dane kontroler\u00f3w. \u0141\u0105czy dwa bajty danych w 14-bitowy zakres wycentrowany wok\u00f3\u0142 warto\u015bci 8192. Ta dodatkowa rozdzielczo\u015b\u0107 jest wa\u017cna, poniewa\u017c ruch pitch powinien brzmie\u0107 p\u0142ynnie, szczeg\u00f3lnie przy zginaniu d\u017awi\u0119ku syntezatora solowego, basu lub instrumentu orkiestrowego. Tester zamienia przychodz\u0105ce dane bend na wycentrowany wska\u017anik, u\u0142atwiaj\u0105c sprawdzenie, czy pokr\u0119t\u0142o osi\u0105ga oba skrajne punkty i wraca do neutralnego.',
    },
    {
      type: 'paragraph',
      html: 'Pokr\u0119t\u0142o modulacji to zwykle ci\u0105g\u0142y kontroler MIDI 1, zapisywany powszechnie jako CC1. Wiele brzmie\u0144 syntezatorowych u\u017cywa go do vibrato, ruchu filtra, pozycji wavetable, tremolo lub dynamiki orkiestrowej. Je\u015bli poruszanie pokr\u0119t\u0142em nie aktualizuje wska\u017anika CC1, kontroler mo\u017ce by\u0107 przypisany do innego CC, u\u017cywa\u0107 trybu specyficznego dla producenta lub przechodzi\u0107 przez oprogramowanie, kt\u00f3re ponownie mapuje kontrolki wykonawcze.',
    },
    {
      type: 'proscons',
      title: 'Test MIDI w przegl\u0105darce a monitoring w DAWie',
      items: [
        { pro: 'Szybkie potwierdzenie sprz\u0119tu na podstawie uprawnie\u0144, bez konfiguracji projektu.', con: 'Nie emuluje pe\u0142nego routingu DAW-a, skrypt\u00f3w ani mapowa\u0144 instrument\u00f3w.' },
        { pro: 'Przejrzysty podgl\u0105d nut, dynamiki, pitch bend i CC1 modulacji.', con: 'Zaawansowany aftertouch, NRPN, MPE, SysEx i niestandardowe mapy kontrolne mog\u0105 wymaga\u0107 specjalistycznych narz\u0119dzi.' },
        { pro: 'Dobre do rozm\u00f3w wsparcia, zakupu u\u017cywanego sprz\u0119tu i sprawdzania kabli.', con: 'Wsparcie przegl\u0105darki zale\u017cy od dost\u0119pno\u015bci Web MIDI na danej platformie.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pokr\u0119t\u0142o pitch nie wraca do zera',
      html: 'Je\u015bli wska\u017anik pitch zatrzymuje si\u0119 na warto\u015bci dodatniej lub ujemnej po zwolnieniu, fizyczne pokr\u0119t\u0142o, spr\u0119\u017cyna, potencjometr, czujnik Halla, kalibracja lub strefa martwa firmware\'u mog\u0105 wymaga\u0107 uwagi. Przetestuj ten sam kontroler w innym porcie i z innym presetem, zanim uznasz czujnik za uszkodzony.',
    },
    { type: 'title', text: 'Cz\u0119ste Usterki Klawiatur MIDI, Kt\u00f3re Ten Tester Mo\u017ce Ujawni\u0107', level: 2 },
    {
      type: 'glossary',
      items: [
        { term: 'Martwy klawisz', definition: 'Fizyczny klawisz, kt\u00f3ry nie wysy\u0142a komunikatu Note On przy naci\u015bni\u0119ciu.' },
        { term: 'Zablokowana nuta', definition: 'Nuta, kt\u00f3ra otrzymuje Note On, ale nie ma odpowiadaj\u0105cego komunikatu zwolnienia, pozostawiaj\u0105c d\u017awi\u0119k aktywny w instrumentach.' },
        { term: 'Skok dynamiki', definition: 'Nag\u0142a warto\u015b\u0107 znacznie wy\u017csza lub ni\u017csza od oczekiwanej dla podobnego uderzenia.' },
        { term: 'Kana\u0142 MIDI', definition: 'Jeden z 16 logicznych kana\u0142\u00f3w u\u017cywanych do oddzielania partii, stref lub urz\u0105dze\u0144 w strumieniu MIDI.' },
        { term: 'Control Change', definition: 'Rodzina komunikat\u00f3w MIDI u\u017cywana przez pokr\u0119t\u0142a, peda\u0142y, k\u00f3\u0142ka, suwaki i prze\u0142\u0105czniki.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Urz\u0105dzenie wykryte, brak komunikat\u00f3w',
      html: 'Je\u015bli przegl\u0105darka wy\u015bwietla wej\u015bcie MIDI, ale naciskanie klawiszy nie daje wpis\u00f3w w dzienniku, sprawd\u017a, czy wybrany port nie jest wej\u015bciem powierzchni kontrolnej zamiast wej\u015bcia nut klawiatury. Niekt\u00f3re interfejsy udost\u0119pniaj\u0105 wiele port\u00f3w o podobnych nazwach.',
    },
    {
      type: 'table',
      headers: ['Objaw', 'Mo\u017cliwa przyczyna', 'Praktyczne dzia\u0142anie'],
      rows: [
        ['Brak okna uprawnie\u0144', 'Nieobs\u0142ugiwana przegl\u0105darka, niezabezpieczone \u017ar\u00f3d\u0142o lub zablokowane uprawnienia MIDI.', 'U\u017cyj Chrome/Edge przez HTTPS i sprawd\u017a uprawnienia witryny.'],
        ['Brak urz\u0105dzenia', 'Problem z kablem, hubem, sterownikiem, zgodno\u015bci\u0105 klasow\u0105 lub zasilaniem.', 'Spr\u00f3buj innego kabla danych USB, portu lub zasilanego huba.'],
        ['Dzia\u0142aj\u0105 tylko niekt\u00f3re oktawy', 'Tryb split/layer, transpozycja, awaria matrycy sprz\u0119towej lub tryb local control.', 'Zresetuj preset i przetestuj chromatycznie od niskich do wysokich nut.'],
        ['B\u0142\u0119dne nazwy nut', 'Kontroler jest transponowany lub wysy\u0142a ze strefy z przesuni\u0119ciem oktawy.', 'Sprawd\u017a globaln\u0105 transpozycj\u0119, oktaw\u0119 strefy i ustawienia szablonu DAW-a.'],
        ['Pokr\u0119t\u0142o modulacji bez reakcji', 'Pokr\u0119t\u0142o przypisane do innego numeru kontrolera lub wy\u0142\u0105czone przez preset.', 'Za\u0142aduj domy\u015blny preset lub edytor kontrolera i przypisz z powrotem do CC1.'],
      ],
    },
    {
      type: 'summary',
      title: 'Najlepsza kolejno\u015b\u0107 diagnostyczna',
      items: [
        'Potwierd\u017a, \u017ce przegl\u0105darka widzi wej\u015bcie MIDI.',
        'Zagraj nuty i sprawd\u017a zgodno\u015b\u0107 zachowania naci\u015bni\u0119cia/zwolnienia.',
        'Sprawd\u017a rozk\u0142ad dynamiki przy powtarzanych delikatnych, \u015brednich i mocnych uderzeniach.',
        'Przesu\u0144 kontrolki pitch bend i modulacji przez ca\u0142y ich zakres.',
        'Dopiero potem dostosuj routing DAW-a, ustawienia wirtualnych instrument\u00f3w lub szablony kontrolera.',
      ],
    },
    { type: 'title', text: 'Prywatno\u015b\u0107, Wsparcie Przegl\u0105darek i Ograniczenia', level: 2 },
    {
      type: 'paragraph',
      html: 'Web MIDI jest celowo chronione przez uprawnienia. Strona nie mo\u017ce po cichu odczytywa\u0107 pod\u0142\u0105czonych urz\u0105dze\u0144 muzycznych w tle, bez udost\u0119pnienia przez przegl\u0105dark\u0119 przep\u0142ywu dost\u0119pu. Dok\u0142adny wygl\u0105d okna i trwa\u0142o\u015b\u0107 uprawnienia zale\u017c\u0105 od przegl\u0105darki, systemu operacyjnego i ustawie\u0144 u\u017cytkownika. Dla wi\u0119kszo\u015bci muzyk\u00f3w praktyczny rezultat jest prosty: kliknij przycisk po\u0142\u0105czenia, wybierz wej\u015bcie MIDI, przeprowad\u017a test i zamknij kart\u0119 po zako\u0144czeniu.',
    },
    {
      type: 'list',
      items: [
        '\u017badne dane zdarze\u0144 MIDI nie s\u0105 wysy\u0142ane na zewn\u0119trzne serwery.',
        'Tester nie wymaga dost\u0119pu do SysEx, co utrzymuje w\u0119\u017cszy zakres uprawnie\u0144.',
        'Nazwy urz\u0105dze\u0144 wy\u015bwietlane przez przegl\u0105dark\u0119 mog\u0105 identyfikowa\u0107 modele sprz\u0119tu, dlatego zrzuty ekranu nale\u017cy udost\u0119pnia\u0107 rozwa\u017cnie.',
        'Chrome i Edge og\u00f3lnie oferuj\u0105 najlepsze wsparcie Web MIDI; wsparcie Safari i Firefoksa mo\u017ce by\u0107 ograniczone lub nieobecne w zale\u017cno\u015bci od platformy.',
        'Natywne narz\u0119dzia mog\u0105 by\u0107 nadal potrzebne do aktualizacji firmware\'u, zaawansowanej edycji kontroler\u00f3w, analizy MPE, zrzut\u00f3w SysEx lub diagnostyki specyficznej dla producenta.',
      ],
    },
    {
      type: 'card',
      title: 'Kiedy to narz\u0119dzie wystarcza',
      html: 'Przy zakupie u\u017cywanego kontrolera, sprawdzaniu kabla w studio, walidacji interfejsu MIDI USB, testowaniu naprawionej klawiatury lub udowadnianiu, \u017ce klawiatura wysy\u0142a komunikaty przed otwarciem DAW-a, tester klawiatury MIDI przez WWW jest zwykle najszybszym pierwszym krokiem.',
    },
  ],
  ui: {
    connectButton: 'Pod\u0142\u0105cz wej\u015bcie MIDI',
    refreshButton: 'Od\u015bwie\u017c wej\u015bcia',
    clearButton: 'Wyczy\u015b\u0107 dziennik',
    unsupportedTitle: 'Web MIDI jest niedost\u0119pne',
    unsupportedBody: 'U\u017cyj przegl\u0105darki opartej na Chromium, takiej jak Chrome lub Edge, i otw\u00f3rz stron\u0119 przez HTTPS lub localhost.',
    secureContext: 'Web MIDI wymaga bezpiecznej strony HTTPS lub localhost, zanim przegl\u0105darka udost\u0119pni wej\u015bcia MIDI.',
    statusIdle: 'Gotowy do za\u017c\u0105dania dost\u0119pu do MIDI',
    statusPermission: 'Oczekiwanie na pozwolenie MIDI przegl\u0105darki',
    statusReady: 'Dost\u0119p do MIDI przyznany',
    statusNoInputs: 'Nie wykryto wej\u015bcia MIDI',
    statusConnected: 'Wej\u015bcie MIDI wykryte',
    statusDisconnected: 'Urz\u0105dzenie MIDI od\u0142\u0105czone',
    statusError: 'Dost\u0119p do MIDI nie powi\u00f3d\u0142 si\u0119',
    detectedLabel: 'Wykryto urz\u0105dzenie',
    noDevice: 'Nie wybrano urz\u0105dzenia MIDI',
    inputLabel: 'Wej\u015bcie',
    inputIdle: 'brak',
    channelLabel: 'Kana\u0142',
    notesLabel: 'Nuty',
    velocityLabel: 'Velocity',
    pitchLabel: 'Pitch',
    modulationLabel: 'Modulation',
    lastEventLabel: 'Ostatnie zdarzenie',
    octaveRangeLabel: 'Widoczny zakres',
    velocityCurveTitle: 'Krzywa velocity',
    activeNotesTitle: 'Aktywne nuty',
    eventLogTitle: 'Dziennik zdarze\u0144 MIDI',
    eventSeparator: '/',
    initialRange: 'C3-B5',
    emptyLog: 'Naci\u015bnij klawisz lub porusz pokr\u0119t\u0142em, aby zobaczy\u0107 nadchodz\u0105ce komunikaty MIDI.',
    noteOn: 'Note On',
    noteOff: 'Note Off',
    controlChange: 'Control Change',
    pitchBend: 'Pitch Bend',
    allChannels: 'Wszystkie kana\u0142y',
  },
};
