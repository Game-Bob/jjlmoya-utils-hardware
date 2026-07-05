import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TouchScreenTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'touchscreen-test';
const title = 'Touchscreen Tester';
const description = 'Teken op een schermvullend canvas om dode zones, gemiste aanrakingen, randrespons, handpalmstoring en het maximale aantal gelijktijdige multi-touchpunten van je telefoon of tablet te testen.';

const faqData = [
  {
    question: 'Hoe test ik op dode zones in een touchscreen?',
    answer: 'Open de tester op het apparaat, sleep een vinger langzaam over het hele scherm en let op lege gaten waar de lijn stopt. Herhaal langs de randen, het toetsenbordgebied, de hoeken en elke plek waar aanrakingen vaak gemist worden.',
  },
  {
    question: 'Hoe kan ik een multi-touchtest online uitvoeren?',
    answer: 'Plaats meerdere vingers tegelijkertijd op het canvas. De actieve aanraak-teller laat zien hoeveel contacten de browser nu ontvangt, en de piekteller onthoudt het hoogste aantal gelijktijdige aanrakingen dat tijdens de sessie is bereikt.',
  },
  {
    question: 'Kan deze tool een niet-reagerend touchscreen repareren?',
    answer: 'Nee. De tool repareert geen hardware en herkalibreert de digitizer niet. Het helpt symptomen te documenteren zodat je kunt bepalen of het probleem wordt veroorzaakt door een screenprotector, vuil glas, een softwarefout, druk van een hoesje of beschadigde touch-hardware.',
  },
  {
    question: 'Waarom detecteert mijn telefoon minder vingers dan verwacht?',
    answer: 'Sommige panelen, browsers, besturingssystemen, screenprotectors, opladers en toegankelijkheidsinstellingen beperken of filteren aanraak-contacten. Probeer de test zonder hoesje, op batterijvoeding, na het schoonmaken van het glas en in een andere browser voordat je ervan uitgaat dat het paneel defect is.',
  },
];

const howToData = [
  { name: 'Maak het glas schoon en verwijder duidelijke storingsoorzaken', text: 'Veeg het scherm schoon, droog je vingers, ontkoppel storingsgevoelige opladers en verwijder dikke handschoenen of geleidende accessoires voor de test.' },
  { name: 'Teken langzame horizontale en verticale halen', text: 'Bedek het scherm met evenwijdige streken van rand tot rand. Een gezond paneel moet ononderbroken lijnen laten zien.' },
  { name: 'Controleer hoeken en gebarenzones', text: 'Trek lijnen langs de bezels, het toetsenbordgebied, het meldingengebied en de navigatiegebarenzones, want deze gebieden vertonen vaak als eerste een gedeeltelijke digitizerstoring.' },
  { name: 'Meet gelijktijdige aanrakingen', text: 'Plaats twee, drie, vier, vijf of meer vingers op het canvas en kijk naar de multi-touch-piekteller.' },
  { name: 'Gebruik volledig scherm voor de laatste bevestiging', text: 'Schakel over naar volledig scherm en herhaal de test zodat de browserinterface de bovenste of onderste aanraakgebieden niet verbergt.' },
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

export const content: ToolLocaleContent<TouchScreenTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Online touchscreentest voor dode zones en multi-touch', level: 2 },
    {
      type: 'paragraph',
      html: 'Een touchpanel kan op manieren falen die bij normaal appgebruik moeilijk te bewijzen zijn. Een toetsenbordtoets kan alleen vlakbij de onderrand missen, een teken-app kan een smalle verticale strook overslaan, of games verliezen een tweede vinger alleen wanneer de duim al een bedieningselement indrukt. Deze tester verandert de hele pagina in een tekenoppervlak, zodat elke onderbreking, gebroken streek en limiet van gelijktijdige aanrakingen direct zichtbaar wordt.',
    },
    {
      type: 'paragraph',
      html: 'Geschikt voor zoekopdrachten zoals <strong>touchscreen test</strong>, <strong>multi touch test online</strong>, <strong>dode zones touchscreen controleren</strong> en <strong>gelijktijdige aanraking testen</strong>. Het canvas registreert vingerbeweging lokaal in de browser en uploadt geen tekeningen, aanraakposities, apparaat-id\'s of diagnoseresultaten.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '0 installaties', label: 'Draait direct in de browser' },
        { value: 'Live', label: 'Actieve aanraak-teller' },
        { value: 'Canvas', label: 'Visuele dodezone-kaart' },
      ],
    },
    { type: 'title', text: 'Hoe dode zones in een touchscreen te herkennen', level: 3 },
    {
      type: 'paragraph',
      html: 'Een dode zone is een gebied waar de digitizer contact niet betrouwbaar rapporteert. Het kan een volledig lege strook zijn, een hoek die aanrakingen negeert, of een klein stukje dat alleen met zware druk werkt. Teken langzame, overlappende lijnen over het scherm. Als de lijn consequent op dezelfde plek verdwijnt, verdient dat gebied nader onderzoek.',
    },
    {
      type: 'list',
      items: [
        'Begin met horizontale halen van de linkerrand naar de rechterrand, met slechts een kleine opening tussen elke beweging.',
        'Herhaal met verticale halen van de bovenrand naar de onderrand om smalle kolommen te ontdekken die horizontaal testen kan missen.',
        'Trek een lijn precies langs de rand van het scherm, want randelectroden en gebarenzones zijn veelvoorkomende storingspunten.',
        'Teken cirkels rond verdachte gebieden om te zien of de onderbreking dezelfde fysieke locatie volgt.',
        'Draai het apparaat en test opnieuw om een app-lay-outprobleem te onderscheiden van een hardwarelocatieprobleem.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Een herhaalde lege lijn zegt meer dan één gemiste streek',
      html: '<p>Een korte onderbreking kan gebeuren als een vinger droog is, te snel beweegt of het glas loslaat. Een hardwarematige dode zone verschijnt meestal herhaaldelijk in hetzelfde fysieke gebied, in verschillende streekrichtingen, en ook na het schoonmaken van het scherm.</p>',
    },
    {
      type: 'table',
      headers: ['Symptoom', 'Waarschijnlijke betekenis', 'Wat nu te proberen'],
      rows: [
        ['Lijn breekt in dezelfde verticale strook', 'Mogelijk digitizer-kolomstoring of screenprotector-bel.', 'Verwijder de protector indien mogelijk, maak het glas schoon en test opnieuw in volledig scherm.'],
        ['Randen missen aanrakingen maar het midden werkt wel', 'Druk van het hoesje, gebarenonderdrukking of randelektrodeprobleem.', 'Verwijder het hoesje en herhaal langzame randbewegingen.'],
        ['Alleen snelle beweging slaat over', 'Browser event-throttling, lage framerate of loslatende vinger.', 'Beweeg langzaam en vergelijk met een andere browser.'],
        ['Willekeurige stippen verschijnen zonder aanraking', 'Spookaanraking, vocht, opladerruis of beschadigd paneel.', 'Droog het scherm, ontkoppel de oplader, herstart en herhaal.'],
      ],
    },
    { type: 'title', text: 'Hoe multi-touch-ondersteuning te meten', level: 3 },
    {
      type: 'paragraph',
      html: 'Multi-touch-ondersteuning is het maximale aantal onafhankelijke contacten dat het apparaat tegelijkertijd kan rapporteren. Een telefoon kan vijf, tien of meer contacten volgen, terwijl sommige budgettablets, kiosken, handschoenen, remote-desktop-lagen of ingebedde browsers er minder kunnen melden. De actieve teller toont het huidig aantal; de piekteller onthoudt het hoogste aantal sinds de laatste keer wissen.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Twee-vingergebaren', description: 'Nodig voor knijpzoomen, twee-vingerrotatie, kaarten, beeldbewerkers en toegankelijkheidszoom.' },
        { title: 'Drie tot vijf aanrakingen', description: 'Handig voor ritmespellen, gesplitste bediening, teken-apps, pianotoetsenborden en creatieve tabletworkflows.' },
        { title: 'Tienpunts touchpanels', description: 'Gebruikelijk op moderne telefoons en tablets, maar browser- of besturingssysteemfiltering kan het aantal nog steeds verlagen.' },
      ],
    },
    {
      type: 'tip',
      title: 'De beste manier om een vals laag aantal te voorkomen',
      html: 'Plaats vingers één voor één en houd ze een seconde stil. Als je alle vingers tegelijk neerzet, kunnen sommige besturingssystemen dit interpreteren als handpalm-invoer, zoomintentie of systeemnavigatie en een deel van de contacten onderdrukken.',
    },
    {
      type: 'proscons',
      title: 'Online tester versus een native diagnose-app',
      items: [
        { pro: 'Start direct zonder iets te installeren of uitgebreide apparaatmachtigingen te verlenen.', con: 'Kan alleen de touch-gebeurtenissen tonen die door de browser en het besturingssysteem worden blootgesteld.' },
        { pro: 'Makkelijk te delen met een reparatiewinkel of koper omdat het tekenpatroon zichtbaar is.', con: 'Kan geen fabriekskalibratietabellen of low-level digitizer-foutcodes lezen.' },
        { pro: 'Volledig-schermmodus bedekt meer van het bruikbare scherm dan een normale pagina.', con: 'Systeembalken, scherminkepingen en beschermde gebarengebieden kunnen nog steeds enkele pixels reserveren.' },
      ],
    },
    { type: 'title', text: 'Veelvoorkomende oorzaken van gemiste aanrakingen', level: 3 },
    {
      type: 'paragraph',
      html: 'Een slecht touchresultaat betekent niet altijd dat het scherm kapot is. Capacitieve panelen zijn afhankelijk van een stabiel elektrisch veld door glas, lijm, protector, huid en apparaataarding. Alles wat dat veld verandert, kan onderbrekingen, valse aanrakingen of zwakke multi-touch-registratie veroorzaken. Daarom is testen onder verschillende omstandigheden belangrijk.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Digitizer', definition: 'De transparante sensorlaag die aanraakcoördinaten aan het apparaat doorgeeft.' },
        { term: 'Dode zone', definition: 'Een fysiek schermgebied waar aanrakingen niet of slechts met tussenpozen worden gedetecteerd.' },
        { term: 'Spookaanraking', definition: 'Een aanraakgebeurtenis die door het apparaat wordt gerapporteerd terwijl geen vinger die plek opzettelijk aanraakt.' },
        { term: 'Handpalmonderdrukking', definition: 'Softwarefiltering die brede of onbedoelde aanrakingen negeert, vooral op tablets en stylusapparaten.' },
        { term: 'Touch-samplingfrequentie', definition: 'Hoe vaak het apparaat de aanraaklaag scant. Hogere frequenties kunnen tekenen en gamen responsiever laten aanvoelen.' },
      ],
    },
    {
      type: 'table',
      headers: ['Oorzaak', 'Typische aanwijzing', 'Snelle controle'],
      rows: [
        ['Screenprotector', 'Dode zone volgt een bel, scheur, stofrand of dikke glasrand.', 'Verwijder of til de protector alleen op als deze veilig en vervangbaar is.'],
        ['Vocht of olie', 'Willekeurige sprongen, glijdende aanrakingen of gemiste tikken na regen, zweet of reinigingsspray.', 'Droog het glas en de handen volledig en test opnieuw.'],
        ['Opladerruis', 'Spookaanrakingen treden op tijdens het opladen en verdwijnen op batterij.', 'Ontkoppel de oplader of gebruik een gecertificeerde adapter en kabel.'],
        ['Druk van hoesje', 'Aanrakingen falen bij hoeken of gebogen randen.', 'Verwijder het hoesje en test dezelfde rand opnieuw.'],
        ['Hardwarebeschadiging', 'Dezelfde strook faalt na schoonmaken, herstarten en verwijderen van de protector.', 'Documenteer het resultaat en neem contact op met reparatieondersteuning.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gesture-tap-hold',
      title: 'Druk is niet hetzelfde als aanraaknauwkeurigheid',
      html: 'De meeste touchscreens van telefoons en tablets zijn capacitief, dus hard drukken zou niet nodig moeten zijn. Als een plek alleen werkt wanneer je stevig drukt, kan het probleem liggen aan zwak contact door een protector, paneelschade, een probleem met de flexkabel of softwarefiltering in plaats van normaal touchscreen-gedrag.',
    },
    { type: 'title', text: 'Testen van randen, hoeken en toetsenbordzones', level: 3 },
    {
      type: 'paragraph',
      html: 'Veel praktijkklachten beginnen in gebieden die intensief worden gebruikt: de onderste toetsenbordrij, backspace, navigatiegebaren, meldingenscherm, snelle instellingen, duimzones in games en tablethoeken die voor tekensnelkoppelingen worden gebruikt. Gebruik de volledig-schermmodus voordat je boven- en ondergebieden beoordeelt, want browserbesturingselementen kunnen anders een deel van het scherm verbergen.',
    },
    {
      type: 'list',
      items: [
        'Teken een rechthoek op één vingerbreedte van de schermrand.',
        'Teken korte verticale streken over de toetsenbordrijen waar gemiste letters voorkomen.',
        'Houd één duim in een gamecontrolepositie en teken met een andere vinger om contactconflict te testen.',
        'Test nabij de oplaadpoort, zowel met als zonder oplader, om aardingsruis te controleren.',
        'Test bij gebruik van een stylus de vingeringang apart van de stylusingang, omdat ze mogelijk verschillende detectiepaden gebruiken.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wanneer volledig scherm het resultaat verandert',
      html: '<p>Als het scherm in volledig-schermmodus werkt maar niet in de normale browserweergave, is de hardware waarschijnlijk niet de enige factor. Adresbalken, omlaagtrekken-om-te-vernieuwen, systeemnavigatie en browsereigen gebarenverwerking kunnen aanrakingen onderscheppen nabij de boven- of onderkant van het zichtbare gebied.</p>',
    },
    { type: 'title', text: 'Hoe een reparatie- of garantiekwestie te documenteren', level: 3 },
    {
      type: 'paragraph',
      html: 'Voor garantieondersteuning telt herhaalbaarheid zwaarder dan één dramatische fout. Wis het canvas, teken een eenvoudig raster en maak een foto of schermopname wanneer hetzelfde fysieke gebied weigert te tekenen. Vermeld of de telefoon aan de oplader hing, of er een protector was aangebracht, en of het probleem na een herstart terugkeert.',
    },
    {
      type: 'summary',
      title: 'Nuttig bewijsmateriaal om vast te leggen',
      items: [
        'Een schoon volledig-schermcanvas met herhaalde onderbrekingen op dezelfde locatie.',
        'De piek multi-touch-telling bereikt met meerdere vingers die zorgvuldig zijn geplaatst.',
        'Een vergelijking met en zonder hoesje, protector, oplader of handschoenen.',
        'Het apparaatmodel, de browser, de besturingssysteemversie en of het probleem ook in apps optreedt.',
      ],
    },
    {
      type: 'message',
      title: 'Privacy-opmerking',
      html: 'De tekening en tellers worden client-side gegenereerd. De tester is ontworpen voor directe diagnose, niet voor accountgebaseerde logging, reparatie op afstand of het uploaden van gevoelige scherminteractiepatronen.',
    },
    { type: 'title', text: 'Checklist voor resultaatinterpretatie', level: 3 },
    {
      type: 'table',
      headers: ['Resultaat', 'Interpretatie', 'Zekerheid'],
      rows: [
        ['Overal ononderbroken lijnen', 'De aanraaklaag is waarschijnlijk gezond onder de huidige omstandigheden.', 'Hoog voor basis-vingerinvoer.'],
        ['Eén herhaalbare lege strook', 'Mogelijk fysieke digitizerbeschadiging of protectorbelemmering.', 'Hoog indien herhaald na schoonmaken en herstarten.'],
        ['Lage multi-touch-piek alleen in één browser', 'Browser-, privacy-, webview- of gebarenverwerkingsbeperking.', 'Gemiddeld. Test een andere browser.'],
        ['Spookaanrakingen tijdens opladen', 'Elektrische ruis, aardingsprobleem of defecte oplader.', 'Gemiddeld tot hoog als het ontkoppelen het probleem oplost.'],
        ['Fout treedt alleen op met screenprotector', 'Protectordikte, lijmlaag-loslating, scheur of randlift.', 'Hoog als verwijdering het gebied herstelt.'],
      ],
    },
    {
      type: 'summary',
      title: 'Snel diagnosepad',
      items: [
        'Teken langzaam een volledig raster.',
        'Omcirkel elke onderbreking die zich herhaalt.',
        'Wis het canvas en herhaal in volledig scherm.',
        'Verwijder hoesje of protector wanneer het kan.',
        'Meet het hoogste aantal gelijktijdige aanrakingen.',
        'Vergelijk met een andere browser of app voordat je hardwarestoring vaststelt.',
      ],
    },
  ],
  ui: {
    activeTouchesLabel: 'Actieve aanrakingen',
    peakTouchesLabel: 'Piek multi-touch',
    coverageLabel: 'Canvasdekking',
    statusReady: 'Teken ergens om dode zones te onthullen',
    statusDrawing: 'Aanraakinvoer gedetecteerd',
    statusCleared: 'Canvas gewist',
    clearButton: 'Wis canvas',
    fullscreenButton: 'Volledig scherm',
    exitFullscreenButton: 'Volledig scherm sluiten',
    canvasLabel: 'Touchscreentest teken-canvas',
    unsupportedTouch: 'Aanraakgebeurtenissen zijn niet beschikbaar in deze browser',
  },
};
