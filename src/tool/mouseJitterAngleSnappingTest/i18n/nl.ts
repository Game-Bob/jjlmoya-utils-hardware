import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseJitterAngleSnappingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'muis-jitter-hoekcorrectie-test';
const title = 'Muis Jitter en Hoekcorrectie Test';
const description =
  'Teken ruwe muissporen online om sensorjitter, schokkerig volgen en hoekcorrectie of voorspelling te detecteren die de beweging kunstmatig recht maakt.';

const faqData = [
  {
    question: 'Wat is muisjitter?',
    answer:
      'Muisjitter is ongewenst schudden of ruis in het cursorpad, zelfs wanneer je hand soepel beweegt. Het kan komen door een vuil sensorvenster, een slecht oppervlak, hoog lift-off-gedrag, elektrische ruis, draadloze instabiliteit of een sensor die moeite heeft met de geselecteerde DPI.',
  },
  {
    question: 'Wat is hoekcorrectie?',
    answer:
      'Hoekcorrectie, soms voorspelling genoemd, is een correctiefunctie waarbij de muisfirmware probeert om licht onvolmaakte menselijke beweging om te zetten in rechtere horizontale, verticale of diagonale lijnen. Sommige kantoormedewerkers vinden het prettig, maar veel gamers en artiesten geven de voorkeur aan ruwe beweging zonder voorspelling.',
  },
  {
    question: 'Kan deze test bewijzen dat mijn muissensor slecht is?',
    answer:
      'De test kan de sensor niet elektrisch inspecteren, maar toont wel het bewegingspad dat je browser ontvangt. Als herhaalde soepele bewegingen ruispunten, plotselinge afwijkingen of onnatuurlijk rechte segmenten creëren, is het resultaat nuttig bewijs voor het oplossen van problemen met de muis, het oppervlak, de DPI, de draadloze verbinding of de firmware-instellingen.',
  },
  {
    question: 'Hoe moet ik tekenen voor het meest betrouwbare resultaat?',
    answer:
      'Teken langzame diagonale lijnen, middelsnelle bochten en lange horizontale halen. Test dezelfde beweging meerdere keren. Jitter is gemakkelijker te zien in langzame gecontroleerde lijnen, terwijl hoekcorrectie gemakkelijker te herkennen is wanneer diagonale beweging verdacht recht of getrapt wordt.',
  },
];

const howToData = [
  {
    name: 'Reinig de sensor en muismat',
    text: 'Verwijder voor het testen stof of haren van het sensorvenster en gebruik een stabiele muismat of bureauoppervlak.',
  },
  {
    name: 'Teken langzame diagonale lijnen',
    text: 'Houd de primaire muisknop ingedrukt en teken meerdere diagonale streken. Een ruwe sensor moet natuurlijke handvariatie tonen, geen lijn die perfect op één hoek wordt gedwongen.',
  },
  {
    name: 'Teken vloeiende bochten',
    text: 'Maak cirkels, S-bochten en bogen. Jitter verschijnt als ruwe, luidruchtige punten die van de beoogde bocht afwijken.',
  },
  {
    name: 'Vergelijk DPI- en oppervlakte-instellingen',
    text: 'Herhaal dezelfde beweging bij verschillende DPI-niveaus, polling rates, lift-off-instellingen en oppervlakken om te ontdekken wanneer het probleem zich voordoet.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<MouseJitterAngleSnappingTestUI> = {
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
      text: 'Muis Jitter Test Online: Controleer Sensorruis en Hoekcorrectie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een goede muissensor moet je hand volgen zonder zichtbare ruis toe te voegen of het pad stiekem te corrigeren. Wanneer de sensor vuil is, het oppervlak moeilijk te volgen is, de DPI te hoog is voor de hardware of de firmware voorspelling toepast, kan het cursuspad niet langer natuurlijk aanvoelen. Deze muisjittertest laat je ruwe sporen tekenen en de individuele leespunten inspecteren, zodat sensorproblemen zichtbaar worden in plaats van vaag.',
    },
    {
      type: 'paragraph',
      html: 'De meest nuttige manier om te testen is eenvoudig: teken gecontroleerde lijnen en bochten en bekijk vervolgens de vorm van het spoor. Een gezonde ruwe sensor produceert een pad dat je beweging volgt met kleine menselijke onvolkomenheden. Een lawaaierige sensor produceert ruwe punten, piepkleine pieken en ongelijkmatig gewiebel. Een muis met hoekcorrectie of voorspelling kan diagonale of horizontale beweging onnatuurlijk recht laten lijken, alsof de firmware je hand corrigeert.',
    },
    {
      type: 'title',
      text: 'Hoe Muisjitter eruitziet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Muisjitter is niet hetzelfde als normaal handtrillen. Iedereen tekent licht onvolmaakte lijnen. Jitter wordt verdacht wanneer de punten van de bewegingsrichting afwijken, ook al beweegt je hand langzaam en gestaag. Het verschijnt vaak als een wazige rand rond een lijn, kleine zijwaartse pieken of een spoor dat krasserig in plaats van glad oogt.',
    },
    {
      type: 'table',
      headers: ['Spoorpatroon', 'Waarschijnlijke Betekenis', 'Volgende Stap'],
      rows: [
        ['Kleine willekeurige pieken tijdens langzame lijnen', 'Sensorruis, vuil of oppervlakte-volgprobleem', 'Reinig het sensorvenster en probeer een andere muismat'],
        ['Jitter alleen bij hoge DPI', 'Sensor of firmware heeft moeite met die gevoeligheid', 'Opnieuw testen op 400, 800, 1600 en 3200 DPI'],
        ['Ruwe beweging alleen in draadloze modus', 'Batterij, ontvangerafstand of storing', 'Plaats de ontvanger dichterbij en test met een nieuwe batterij'],
        ['Ruis nabij lift-off of bij het kantelen van de muis', 'Lift-off-afstand of ongelijk contact met het oppervlak', 'Houd de muis plat en verlaag de lift-off-afstand indien beschikbaar'],
        ['Jitter op het ene bureau maar niet op het andere', 'Oppervlaktetextuur of reflectiviteitsprobleem', 'Gebruik een matte muismat ontworpen voor optische sensoren'],
      ],
    },
    {
      type: 'title',
      text: 'Hoe Hoekcorrectie eruitziet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hoekcorrectie verschilt van jitter. In plaats van ruis toe te voegen, verwijdert het natuurlijke variatie. Als je een diagonale lijn met de hand tekent, moet een ruwe sensor kleine menselijke afwijkingen behouden. Met ingeschakelde hoekcorrectie kan de lijn vastklikken in een perfect rechte horizontale, verticale of diagonale richting. Dit kan tekenen op het bureaublad vergemakkelijken, maar het is meestal ongewenst voor competitief richten, pixel art, fotobewerking en elke taak waarbij de cursor exact met de hand moet overeenkomen.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Ruwe sensorgedrag',
          description: 'Het spoor volgt je hand, inclusief kleine natuurlijke bochten en correcties. Diagonale lijnen zijn niet wiskundig perfect, tenzij je beweging dat was.',
        },
        {
          title: 'Hoekcorrectiegedrag',
          description: 'Het spoor ziet er verdacht recht uit over lange stukken, vooral in de buurt van veelvoorkomende hoeken zoals horizontaal, verticaal of 45 graden.',
        },
        {
          title: 'Jittergedrag',
          description: 'Het spoor wordt luidruchtig, wazig of stekelig. In plaats van te recht te zijn, ziet het er onstabiel en ruw uit.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Hoe je je Muis Correct Test',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Begin met een schoon sensorvenster en een bekende goede muismat',
        'Teken langzame diagonale lijnen van hoek tot hoek en herhaal dezelfde beweging meerdere keren',
        'Teken cirkels en S-bochten om jitter te onthullen die mogelijk niet in rechte lijnen verschijnt',
        'Test op meerdere DPI-niveaus omdat sommige sensoren bij zeer hoge gevoeligheid luidruchtiger worden',
        'Schakel leverancierssoftwarefuncties zoals hoekcorrectie, voorspelling, oppervlakteafstemming of acceleratie uit wanneer mogelijk',
        'Vergelijk bedrade en draadloze modus als je muis beide ondersteunt',
        'Vergelijk met een andere muis op hetzelfde oppervlak om muisstoringen van oppervlakteproblemen te scheiden',
      ],
    },
    {
      type: 'title',
      text: 'De Scores Interpreteren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De tool toont een jitterscore, een hoekcorrectiescore, rechtheid, gemiddelde afwijking en het aantal verzamelde samples. Deze waarden kunnen het beste vergelijkend worden gebruikt. Teken dezelfde lijn met dezelfde handbeweging na het wijzigen van één variabele: DPI, oppervlak, plaatsing van de draadloze ontvanger of muisfirmware-instelling. Als een score daalt na het wijzigen van het oppervlak of het reinigen van de sensor, heb je een waarschijnlijke oorzaak gevonden.',
    },
    {
      type: 'table',
      headers: ['Resultaat', 'Wat het Suggeert', 'Praktische Actie'],
      rows: [
        ['Lage jitter en lage correctie', 'Het sensorpad ziet er natuurlijk en stabiel uit', 'Behoud de huidige instellingen en gebruik dit als referentie'],
        ['Hoge jitter, lage correctie', 'De muis volgt maar het pad is luidruchtig', 'Reinig de sensor, wissel van oppervlak, verlaag DPI en test opnieuw'],
        ['Lage jitter, hoge correctie', 'Het pad kan door firmware gecorrigeerd zijn', 'Zoek naar voorspellings- of hoekcorrectie-opties in de muissoftware'],
        ['Hoge jitter en hoge correctie', 'Het spoor is onstabiel en mogelijk over-gecorrigeerd', 'Reset de muissoftware-profielen en test opnieuw vanaf standaardinstellingen'],
        ['Scores veranderen sterk per oppervlak', 'De sensor houdt niet van één oppervlaktetextuur of reflectiviteit', 'Gebruik het oppervlak met het schoonste spoor'],
      ],
    },
    {
      type: 'title',
      text: 'DPI, Polling Rate en Muisjitter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hoge DPI betekent niet automatisch betere tracking. Sommige muizen presteren schoon bij gematigde DPI maar tonen meer zichtbare ruis bij zeer hoge DPI omdat piepkleine sensorfouten worden uitvergroot tot grotere cursorbeweging. De polling rate kan ook het gevoel van het spoor veranderen. Een hogere polling rate geeft frequentere updates, maar kan een vuile sensor, een slecht oppervlak of firmwarevoorspelling niet verhelpen.',
    },
    {
      type: 'paragraph',
      html: 'Houd voor een eerlijke vergelijking je handbeweging gelijk en wijzig slechts één instelling tegelijk. Teken bijvoorbeeld dezelfde diagonale lijn op 800 DPI, 1600 DPI en 3200 DPI. Als het pad alleen bij de hoogste waarde wazig wordt, kan de beste oplossing zijn om de DPI te verlagen en de in-game gevoeligheid aan te passen in plaats van de muis te vervangen.',
    },
    {
      type: 'title',
      text: 'Veelvoorkomende Oorzaken van Muissensorjitter',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Stof, haren of vet nabij het optische sensorvenster',
        'Glanzende, reflecterende, transparante of oneffen oppervlakken',
        'Zeer hoge DPI-instellingen die kleine sensorfouten uitvergroten',
        'Lage batterij of draadloze storing',
        'Ontvanger ver van de muis geplaatst of achter een metalen pc-behuizing',
        'Firmwarefilters, oppervlaktekalibratie of leverancierssoftwareprofielen',
        'Lift-off-afstandproblemen wanneer de muis wordt gekanteld of snel bewogen',
        'Een versleten of beschadigde sensorlens na intensief gebruik',
      ],
    },
    {
      type: 'title',
      text: 'Waarom Gamers en Ontwerpers dit Belangrijk Vinden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In games kan jitter micro-aanpassingen bemoeilijken omdat het vizier niet precies tot rust komt waar de hand het bedoelde. Hoekcorrectie kan even problematisch zijn: het kan helpen bij het tekenen van rechte bureaubladlijnen, maar het kan ook kleine richtcorrecties vervormen en diagonale tracking gefilterd laten aanvoelen. Voor ontwerpers, illustratoren, CAD-gebruikers en fotobewerkers kan sensorcorrectie vrije-handbewegingen minder eerlijk en moeilijker te controleren maken.',
    },
    {
      type: 'paragraph',
      html: 'Een muis heeft geen perfect spoor nodig om goed te zijn. Menselijke beweging is van nature onvolmaakt. De waarschuwingssignalen zijn herhaalbaar: hetzelfde oppervlak creëert altijd luidruchtige punten, dezelfde DPI creëert altijd pieken, of dezelfde muis maakt diagonalen altijd verdacht recht terwijl een andere muis dat niet doet.',
    },
    {
      type: 'title',
      text: 'Voordat je een Nieuwe Muis Koopt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Reinig het sensorvenster voorzichtig met de muis uitgeschakeld',
        'Probeer een andere muismat, bij voorkeur mat stof of hybride gaming-oppervlak',
        'Verlaag DPI en compenseer met softwaregevoeligheid',
        'Schakel hoekcorrectie, voorspelling, aanwijzernauwkeurigheid en acceleratie-opties uit',
        'Breng de draadloze ontvanger dichterbij met een USB-verlengkabel',
        'Update of reset het muisfirmware-profiel als de leverancierssoftware dit ondersteunt',
        'Test een andere muis op dezelfde computer en hetzelfde oppervlak ter vergelijking',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'De nuttige diagnostische regel',
      html: '<p>Eén enkel vreemd spoor is niet genoeg. Een herhaalbaar patroon is wat telt. Als jitter of hoekcorrectie steeds opnieuw verschijnt onder dezelfde instellingen en vervolgens verdwijnt wanneer je de sensor reinigt, van oppervlak wisselt, DPI verlaagt of voorspelling uitschakelt, heb je de meest waarschijnlijke oorzaak gevonden.</p>',
    },
  ],
  ui: {
    badge: 'Ruw Sensorspoor',
    canvasLabel: 'Tekenbereik voor muisjitter- en hoekcorrectietest',
    canvasHint: 'Teken langzame diagonalen, cirkels en bochten. Individuele sensorpunten blijven zichtbaar zodat ruwe tracking eenvoudig te herkennen is.',
    pointerPrompt: 'Houd vast en teken binnen het tekenbereik',
    samples: 'Samples',
    jitterScore: 'Jitter',
    snappingScore: 'Correctie',
    straightness: 'Rechtheid',
    rawDeviation: 'Gem. afwijking',
    statusIdle: 'Teken binnen het veld om ruwe muisbeweging vast te leggen',
    statusHealthy: 'Spoor ziet er natuurlijk en stabiel uit in de recente samples',
    statusJitter: 'Luidruchtige beweging gedetecteerd in het recente spoor',
    statusSnapping: 'Verdacht rechte beweging gedetecteerd',
    statusMixed: 'Zowel jitter als mogelijke hoekcorrectie verschijnen in het spoor',
    reset: 'Resetten',
    holdShift: 'Tip: test één verandering tegelijk. DPI, oppervlak, draadloze modus en voorspellingsinstellingen kunnen het spoor allemaal veranderen.',
    sensitivity: 'Detectiegevoeligheid',
    low: 'stabiel',
    high: 'streng',
    traceLog: 'Spoorgebeurtenissen',
    emptyLog: 'Teken enkele gecontroleerde streken om het gebeurtenislogboek te starten.',
    jitterEvent: 'jitter',
    snappingEvent: 'hoekcorrectie',
    combinedEvent: 'jitter en hoekcorrectie',
    cleanEvent: 'schoon spoor',
    pxUnit: 'px',
    percentUnit: '%',
  },
};
