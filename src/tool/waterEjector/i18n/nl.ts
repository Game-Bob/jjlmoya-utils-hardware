import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterEjectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'wateruitwerper-luidsprekerreiniger';
const title = 'Wateruitwerper Luidsprekerreiniger';
const description =
  'Speel een lage toon van 165 Hz af om water, stof of los vuil uit de luidsprekers van telefoons, tablets en laptops te duwen.';

const faqData = [
  {
    question: 'Welke frequentie moet ik gebruiken om water uit een luidspreker te werpen?',
    answer:
      'Een lage toon rond 165 Hz is een praktisch startpunt omdat het kleine luidsprekerdiafragma\'s zichtbaar beweegt zonder te vertrouwen op doordringende hoge frequenties. Sommige apparaten reageren beter tussen 145 Hz en 190 Hz, daarom bevat de tool alle drie de voorinstellingen.',
  },
  {
    question: 'Kan een geluidstoon al het water uit mijn telefoon verwijderen?',
    answer:
      'Nee. Het kan helpen om druppels uit het luidsprekerrooster of de akoestische kamer te schudden, maar het kan geen vloeistof achter afdichtingen, in poorten of onder een scherm drogen. Als het apparaat ondergedompeld is geweest, schakel het dan uit en volg de drooginstructies van de fabrikant.',
  },
  {
    question: 'Is dit veilig voor luidsprekers?',
    answer:
      'Gebruik korte sessies, begin onder het maximale volume en stop als je schrapend geluid, gerammel of vervorming hoort. Een kleine telefoonluidspreker is niet ontworpen voor langdurige luide basweergave, dus herhaalde korte cycli zijn veiliger dan één lange uitbarsting.',
  },
  {
    question: 'Waarom klinkt mijn luidspreker dof nadat hij nat is geworden?',
    answer:
      'Een waterfilm voegt massa en demping toe aan het luidsprekerdiafragma en kan de roosteropeningen blokkeren. Dat vermindert hoge tonen, verzwakt de spraakhelderheid en maakt de bas wollig totdat de druppels bewegen of verdampen.',
  },
  {
    question: 'Moet ik rijst gebruiken nadat mijn telefoon nat is geworden?',
    answer:
      'Rijst is geen betrouwbare reparatiemethode en kan zetmeel of deeltjes in poorten achterlaten. Gebruik luchtstroom, een absorberende pluisvrije doek en de instructies van de fabrikant. Geluidsuitwerping is alleen voor de luidsprekeruitgang, niet voor het hele apparaat.',
  },
];

const howToData = [
  {
    name: 'Verwijder hoesjes en richt de luidspreker naar beneden',
    text: 'Haal elk hoesje dat het rooster bedekt eraf, houd het apparaat zo dat de zwaartekracht druppels helpt de luidsprekeropening te verlaten en houd poorten vrij.',
  },
  {
    name: 'Begin met de standaard 165 Hz voorinstelling',
    text: 'Druk op Starten en laat de toon 30 seconden lopen. De diafragmabeweging kan druppels losmaken die vastzitten in het roosterweefsel of de ondiepe luidsprekerkamer.',
  },
  {
    name: 'Probeer indien nodig de zachte of diepe voorinstelling',
    text: 'Als het geluid dof blijft, test dan 145 Hz of 190 Hz voor een korte cyclus. Verschillende luidsprekergroottes resoneren op verschillende punten.',
  },
  {
    name: 'Stop als de luidspreker vervormt',
    text: 'Verlaag het volume of stop onmiddellijk als de toon hard, zoemend of mechanisch geforceerd wordt. Vervorming betekent dat de driver te hard wordt aangestuurd.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<WaterEjectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Hoe een Wateruitwerptoon Werkt', level: 2 },
    {
      type: 'paragraph',
      html: 'Een telefoonluidspreker is een klein bewegend diafragma. Wanneer een lage toon wordt afgespeeld, beweegt het diafragma vele malen per seconde heen en weer. Bij <strong>165 Hz</strong> gebeurt die beweging 165 keer per seconde. Als er water op het rooster zit of net binnen de akoestische uitgang gevangen zit, kan de bewegende lucht de oppervlaktespanning van de druppel breken en naar de opening duwen.',
    },
    {
      type: 'paragraph',
      html: 'Het proces is mechanisch, niet chemisch. Het geluid laat vloeistof niet verdampen en maakt interne elektronica niet waterdicht. Het kan het beste worden begrepen als een gecontroleerde trillingscyclus voor de luidsprekeruitgang, nuttig wanneer spraak, meldingen of muziek dof klinken na regen, een spat, een doucheruimte of een snelle spoeling.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '165 Hz', label: 'standaard startfrequentie', icon: 'mdi:sine-wave' },
        { value: '30 s', label: 'korte eerste reinigingscyclus', icon: 'mdi:timer-outline' },
        { value: '145-190 Hz', label: 'praktisch afstemmingsbereik', icon: 'mdi:tune' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wat de toon wel en niet kan doen',
      badge: 'Bereik',
      icon: 'mdi:information',
      html: 'De toon kan helpen om losse druppels in het luidsprekerpad te verplaatsen. Het kan geen vloeistof verwijderen uit oplaadpoorten, SIM-lades, microfoons, cameramodules, lijmnaden of de ruimte onder het scherm.',
    },
    { type: 'title', text: 'Wanneer te Gebruiken', level: 2 },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'De luidspreker klinkt zacht, dof of bubbelig na een spat.',
        'Eén kant van een stereo telefoonluidspreker klinkt zwakker dan de andere.',
        'Een laptop- of tabletluidsprekerrooster heeft druppels verzameld na het schoonmaken.',
        'Stof of pluisjes zitten zichtbaar los op het rooster en normale weergave klinkt dof.',
        'Het apparaat werkt normaal, laadt normaal op en toont geen waarschuwing over vloeistof in een poort.',
      ],
    },
    {
      type: 'tip',
      title: 'Beste fysieke positie',
      html: 'Richt het luidsprekerrooster naar beneden of lichtjes naar beneden. De toon zorgt voor beweging, maar de zwaartekracht bepaalt waar de vrijgekomen druppel naartoe gaat. Het verwijderen van een hoesje is ook belangrijk omdat veel hoesjes een ondiep vakje creëren dat water bij de uitgang vasthoudt.',
    },
    {
      type: 'card',
      icon: 'mdi:cellphone-sound',
      title: 'Waarom telefoonluidsprekers snel beïnvloed worden',
      html: 'Moderne telefoons gebruiken compacte drivers met hoge uitslag en kleine akoestische kanalen. Een druppel die onschadelijk zou zijn op een grote desktopluidspreker kan een aanzienlijk deel van een telefoonrooster bedekken, waardoor de druk verandert en het diafragma genoeg dempt om stemmen ver weg te laten klinken.',
    },
    {
      type: 'table',
      headers: ['Symptoom', 'Waarschijnlijke oorzaak', 'Wat te proberen'],
      rows: [
        ['Doffe spraak', 'Waterfilm over rooster', 'Draai 165 Hz gedurende 30 seconden, luidspreker naar beneden gericht'],
        ['Zoemen tijdens de toon', 'Druppel beweegt of driver overbelast', 'Verlaag volume; stop als het zoemen aanhoudt'],
        ['Eén luidspreker stiller', 'Slechts één uitgang is geblokkeerd', 'Draai het apparaat zodat die uitgang naar beneden wijst'],
        ['Helemaal geen geluid', 'Gedempte uitvoer, Bluetooth-route of hardwarefout', 'Controleer audioroute voordat je cycli herhaalt'],
      ],
    },
    { type: 'title', text: 'De Juiste Frequentie Kiezen', level: 2 },
    {
      type: 'paragraph',
      html: 'Er is geen universeel magisch getal omdat luidsprekergrootte, roostervorm, waterdicht membraanontwerp en hoesjegeometrie verschillen. De reden dat <strong>165 Hz</strong> populair is, is dat het laag genoeg zit om zichtbare conusuitslag te creëren op veel kleine luidsprekers, terwijl het binnen een bereik blijft dat de meeste apparaten luid kunnen weergeven.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '145 Hz zacht',
          description: 'Handig voor zeer kleine of overbelaste luidsprekers waar de standaardtoon ruw klinkt.',
          icon: 'mdi:leaf',
          points: ['Lagere toonhoogte', 'Minder agressieve beweging', 'Goede eerste herhaling'],
        },
        {
          title: '165 Hz standaard',
          description: 'Evenwichtig startpunt voor telefoons, tablets en veel laptopluidsprekeropeningen.',
          icon: 'mdi:water-sync',
          highlight: true,
          points: ['Standaard voorinstelling', 'Sterke diafragma-uitslag', 'Beste eerste cyclus'],
        },
        {
          title: '190 Hz diep',
          description: 'Een iets hogere duw die kan werken wanneer een bepaalde luidspreker boven 165 Hz resoneert.',
          icon: 'mdi:waves',
          points: ['Strakkere trilling', 'Nuttige tweede ronde', 'Vermijd lange cycli'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Lage frequenties versus hoge frequenties',
      items: [
        { pro: 'Lage tonen verplaatsen meer lucht en diafragma-afstand op kleine luidsprekers.', con: 'Ze kunnen eerder vervormen op maximaal volume.' },
        { pro: 'Hoge tonen zijn gemakkelijker te horen door sommige roosters.', con: 'Ze verplaatsen meestal minder lucht en kunnen onaangenaam of onhoorbaar zijn voor sommige gebruikers.' },
        { pro: 'Een korte lage toon is gemakkelijk op het gehoor te beoordelen.', con: 'Het mag niet minutenlang zonder pauzes worden herhaald.' },
      ],
    },
    {
      type: 'message',
      title: 'Regel voor frequentieafstemming',
      ariaLabel: 'Regel voor frequentieafstemming',
      html: 'Als de luidspreker na één cyclus van 30 seconden schoon klinkt, stop dan. Meer cycli zijn geen onderhoudsroutine; ze zijn alleen een herstelhulpmiddel nadat vloeistof of vuil de luidsprekeropening heeft bereikt.',
    },
    { type: 'title', text: 'Veilige Reinigingsprocedure', level: 2 },
    {
      type: 'paragraph',
      html: 'Begin onder het maximale systeemvolume, vooral op laptops en tablets met grotere luidsprekers. Verhoog alleen totdat de toon duidelijk hoorbaar is en het apparaat licht trilt. Als je een scherp gerammel, schrapend geluid of plotselinge volumedaling hoort, stop dan de tool en laat het apparaat natuurlijk drogen.',
    },
    {
      type: 'list',
      icon: 'mdi:numeric',
      items: [
        'Koppel hoofdtelefoons en Bluetooth-luidsprekers los zodat de toon via de natte luidspreker wordt afgespeeld.',
        'Droog de buitenkant met een pluisvrije doek voordat je geluid afspeelt.',
        'Houd de luidsprekeruitgang naar beneden en houd je hand weg van het rooster.',
        'Draai 30 seconden op 165 Hz.',
        'Wacht een minuut, test normale spraakaudio en herhaal dan slechts één keer indien nodig.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gebruik geen hitte of perslucht',
      badge: 'Vermijden',
      icon: 'mdi:alert',
      html: 'Föhns, ovens en hogedrukperslucht kunnen vocht dieper duwen, afdichtingen vervormen of membranen beschadigen. De geluidstoon is zachter omdat deze werkt vanuit de luidsprekerbeweging die al in het apparaat is ontworpen.',
    },
    {
      type: 'summary',
      title: 'Snelle veiligheidschecklist',
      items: [
        'Korte cycli zijn beter dan lange ononderbroken weergave.',
        'Verlaag het volume als de toon hard zoemt.',
        'Stop als het apparaat vloeistofdetectiewaarschuwingen toont.',
        'Geluidsuitwerping helpt alleen de luidsprekeruitgang, niet de hele telefoon.',
      ],
    },
    { type: 'title', text: 'Waterbestendigheid Is Geen Waterdichtheid', level: 2 },
    {
      type: 'paragraph',
      html: 'Veel telefoons adverteren waterbestendigheid, maar die classificatie wordt gemeten onder gedefinieerde laboratoriumomstandigheden. Echte waterblootstelling omvat beweging, zeep, zout, hitte, druk, leeftijd, impact en versleten afdichtingen. Een luidsprekerreinigerstoon herstelt geen afdichting en valideert niet dat een telefoon veilig is om op te laden.',
    },
    {
      type: 'table',
      headers: ['Blootstelling', 'Nuttigheid luidsprekertoon', 'Extra actie'],
      rows: [
        ['Lichte regen', 'Vaak nuttig als audio dof is', 'Droog de buitenkant en draai één korte cyclus'],
        ['Schoonwaterspat', 'Nuttig voor druppels bij het rooster', 'Houd poorten droog voor het opladen'],
        ['Zwembad- of zeewater', 'Beperkt; residu kan achterblijven', 'Spoel alleen als de fabrikant het toestaat, zoek dan indien nodig service'],
        ['Zeep, frisdrank of koffie', 'Laag; kleverig residu verandert het rooster', 'Schakel uit en zoek reinigingsadvies'],
        ['Volledige onderdompeling', 'Niet voldoende', 'Volg de noodstappen van de fabrikant'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Diafragma', definition: 'Het bewegende oppervlak in een luidspreker dat lucht duwt om geluid te creëren.' },
        { term: 'Resonantie', definition: 'Een frequentie waarbij een fysiek systeem efficiënter beweegt omdat de vorm en massa die trilling begunstigen.' },
        { term: 'Oppervlaktespanning', definition: 'De kracht die een druppel laat kleven aan een rooster of membraan in plaats van onmiddellijk weg te stromen.' },
        { term: 'Akoestische kamer', definition: 'Het kleine interne pad dat luidsprekergeluid van de driver naar de apparaatopening geleidt.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:volume-high',
      title: 'Waarom het luider kan klinken na het reinigen',
      html: 'Water blokkeert eerst hoge frequenties omdat kleine golflengtes gemakkelijk worden verstrooid door roosterobstructies. Zodra druppels bewegen, keren medeklinkers, meldingsgeluiden en stemdetails vaak terug voordat de bas merkbaar verandert.',
    },
    { type: 'title', text: 'Stof en Vuil Verwijderen', level: 2 },
    {
      type: 'paragraph',
      html: 'Dezelfde trilling kan droog stof, pluisjes of poeder losmaken dat op een luidsprekergaas zit, maar het mag zorgvuldige fysieke reiniging niet vervangen. Als vuil plakkerig, olieachtig of in het rooster gepakt zit, kan trilling alleen het alleen verplaatsen. Gebruik een zachte droge borstel rond de buitenkant en vermijd het inbrengen van metalen gereedschap in de opening.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Geluidstrilling',
          description: 'Goed voor losse deeltjes en druppels die vrij kunnen bewegen.',
          icon: 'mdi:sine-wave',
          points: ['Geen contact met rooster', 'Snel', 'Beste voor recente spatten'],
        },
        {
          title: 'Zachte externe borsteling',
          description: 'Beter voor zichtbare pluisjes of stof op het gaasoppervlak.',
          icon: 'mdi:brush',
          points: ['Werkt zonder hard geluid', 'Voorkomt overbelasting luidspreker', 'Voorzichtigheid bij membranen'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Na stoffige omgevingen',
      html: 'Draai de toon op gemiddeld volume en veeg vervolgens het externe rooster af met een droge microvezeldoek. Voeg geen alcohol of vloeibaar reinigingsmiddel toe, tenzij de fabrikant dat expliciet aanbeveelt voor dat oppervlak.',
    },
    { type: 'title', text: 'Apparaatspecifieke Opmerkingen', level: 2 },
    {
      type: 'paragraph',
      html: 'Telefoons, tablets en laptops plaatsen luidsprekers in verschillende akoestische opstellingen. Een naar beneden gerichte telefoonluidspreker heeft meestal een korte uitgang bij de oplaadpoort, zodat water snel kan vertrekken wanneer het rooster naar beneden wijst. Een tablet kan een langer zijkanaal gebruiken, wat betekent dat de toon het geluid geleidelijk helderder kan maken in plaats van in één duidelijke uitbarsting. Een laptopluidspreker vuurt vaak door een toetsenborddeck of sleuf aan de onderkant, dus de vloeistof kan op een stoflaag, plastic gaas of extern rooster zitten in plaats van direct op de driver.',
    },
    {
      type: 'paragraph',
      html: 'Voor een telefoon draai je het apparaat totdat de luidspreker die dof klinkt het laagste punt is. Voor een tablet probeer je zowel portret- als landschapsoriëntatie omdat de geblokkeerde opening op een andere rand kan zitten dan verwacht. Voor een laptop houd je de machine op een stabiel droog oppervlak en vermijd je vloeistof naar het toetsenbord, scharnier of ventilatieopeningen te kantelen. De toon moet het luidsprekerpad helpen; het moet water niet aanmoedigen om over het apparaat te reizen.',
    },
    {
      type: 'table',
      headers: ['Apparaattype', 'Aanbevolen oriëntatie', 'Cyclusadvies'],
      rows: [
        ['Telefoon', 'Luidsprekerrooster naar beneden, hoesje verwijderd', 'Eén cyclus van 30 seconden, test dan spraakaudio'],
        ['Tablet', 'Geblokkeerde rand naar beneden gericht', 'Start op gemiddeld volume omdat luidsprekers groter zijn'],
        ['Laptop', 'Normale stabiele positie tenzij vloeistof op een extern rooster zit', 'Gebruik lager volume en stop als de behuizing sterk trilt'],
        ['Smartwatch', 'Volg eerst de watervergrendelingsinstructies van de fabrikant', 'Gebruik webtoon alleen als de browser geluid naar de horlogeluidspreker kan sturen'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Bluetooth en audiorouteringscontrole',
      badge: 'Voor start',
      icon: 'mdi:bluetooth-audio',
      html: 'Als draadloze oordopjes, een autosysteem of een externe luidspreker is verbonden, kan de toon via de verkeerde uitgang worden afgespeeld. Verbreek de Bluetooth-audioverbinding voordat je begint en bevestig dat een normale beltoon of een korte video via de natte luidspreker wordt afgespeeld.',
    },
    {
      type: 'card',
      icon: 'mdi:microphone-question',
      title: 'Waarom de microfoon anders is',
      html: 'Een microfoonpoort is een ingangspad met beschermend gaas en een kleine druksensor, geen luidsprekerdiafragma dat lucht naar buiten kan duwen. Ga er niet vanuit dat een wateruitwerptoon doffe microfoonopnames zal verhelpen. Laat het apparaat drogen en prik niet in het microfoongat.',
    },
    { type: 'title', text: 'Volume, Vervorming en Luistercomfort', level: 2 },
    {
      type: 'paragraph',
      html: 'Een wateruitwerptoon is opzettelijk repetitief en kan oncomfortabel zijn in een stille kamer. Het doel is niet maximale luidheid; het doel is voldoende diafragmabeweging om druppels te verstoren. Als de toon pijnlijk is, verlaag dan het volume of plaats het apparaat verder weg terwijl je de luidsprekeruitgang vrij houdt. Luistercomfort is belangrijk omdat een succesvolle reinigingscyclus seconden moet duren, geen langdurige blootstelling.',
    },
    {
      type: 'paragraph',
      html: 'Vervorming is een nuttig waarschuwingssignaal. Een schone lage toon klinkt stabiel, zelfs als de telefoonbehuizing trilt. Een slechte toon klinkt krakend, ruw, metaalachtig of onstabiel. Dat kan gebeuren omdat water beweegt, omdat de luidspreker zijn uitslaglimiet bereikt of omdat de apparaatversterker clipt. Volume verlagen is de eerste correctie; luider herhalen is de verkeerde zet.',
    },
    {
      type: 'list',
      icon: 'mdi:volume-medium',
      items: [
        'Gebruik de volumeknoppen van het apparaat en de volumeschuif van de tool samen; elk van beide kan de uitvoer te luid maken.',
        'Plaats de luidspreker niet tegen een tafel, kussen of hand omdat geblokkeerde luchtstroom het gerammel verergert.',
        'Pauzeer tussen cycli zodat de driver en versterker niet continu op hoog vermogen worden gehouden.',
        'Als normale muziek nog steeds kraakt na droogtijd, behandel het dan als een reparatiesymptoom in plaats van een reinigingsprobleem.',
      ],
    },
    {
      type: 'message',
      title: 'Comfortregel',
      ariaLabel: 'Comfortregel',
      html: 'Als de toon te luid aanvoelt voor je oren, is hij al luider dan nodig voor een eerste poging. Wateruitwerping hangt af van beweging en oriëntatie, niet van bestraffend volume.',
    },
    { type: 'title', text: 'Probleemoplossing na de Toon', level: 2 },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Zoek reparatie als deze tekenen verschijnen',
      badge: 'Stop',
      icon: 'mdi:close-octagon',
      html: 'Stop met geluidsuitwerping als het apparaat abnormaal heet wordt, uitschakelt, vloeistofwaarschuwingen toont, geen uitvoer heeft na routecontroles of de luidspreker rammelt tijdens normale spraak. Deze symptomen kunnen wijzen op schade die verder gaat dan druppels in het rooster.',
    },
    {
      type: 'table',
      headers: ['Resultaat na 30 seconden', 'Betekenis', 'Volgende stap'],
      rows: [
        ['Helderder geluid', 'Druppel is waarschijnlijk verplaatst', 'Stop en laat het apparaat rusten'],
        ['Kleine verbetering', 'Er blijft wat vocht achter', 'Wacht en herhaal dan één korte cyclus'],
        ['Geen verandering', 'Blokkade kan dieper of plakkerig zijn', 'Natuurlijk drogen en route/instellingen controleren'],
        ['Ergernis van vervorming', 'Driver kan overbelast of beschadigd zijn', 'Stop en verlaag volume; overweeg service'],
      ],
    },
    {
      type: 'summary',
      title: 'Praktische conclusie',
      items: [
        'Gebruik eerst 165 Hz omdat het beweging en compatibiliteit in balans brengt.',
        'Richt het rooster naar beneden en houd de cyclus kort.',
        'Behandel de toon als luidsprekerherstel, niet als volledige apparaatdroging.',
        'Vloeistofrichtlijnen van de fabrikant gaan boven elke webtool.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Klaar om uit te werpen',
    statusPlaying: 'Toon actief',
    statusComplete: 'Cyclus voltooid',
    frequencyLabel: 'Frequentie',
    volumeLabel: 'Volume',
    durationLabel: 'Duur',
    startButton: 'Wateruitwerper starten',
    stopButton: 'Toon stoppen',
    hertzUnit: 'Hz',
    secondsShort: 's',
    presetGentle: 'Zacht',
    presetStandard: '165 Hz',
    presetDeep: 'Diep',
    safetyTitle: 'Veiligheid eerst',
    safetyText: 'Begin onder het maximale volume en stop als de luidspreker rammelt of vervormt.',
    bestResult: 'Beste resultaat',
    bestResultText: 'Verwijder het hoesje, richt de luidspreker naar beneden en voer een korte cyclus uit.',
  },
};
