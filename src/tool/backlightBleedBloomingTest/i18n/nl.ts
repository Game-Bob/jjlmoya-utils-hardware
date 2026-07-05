import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BacklightBleedBloomingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'backlight-bleeding-bloomingtest';
const title = 'Backlight Bleeding en Blooming Test';
const description =
  'Voer een pure zwarte fullscreen backlight-bleeding-test uit en een sleepbare witte local-dimming-blooming-test voor OLED, Mini LED, IPS, VA, monitors, laptops en tv\'s.';

const faqData = [
  {
    question: 'Hoe test ik backlight bleeding online?',
    answer:
      'Schakel de kamerverlichting uit, zet de schermhelderheid op maximaal, maak het scherm schoon, open de pure zwarte test in fullscreen, wacht tot de cursor verdwijnt en inspecteer de randen en hoeken op vaste lichtlekken.',
  },
  {
    question: 'Wat is het verschil tussen backlight bleeding en IPS glow?',
    answer:
      'Backlight bleeding is meestal een vaste heldere plek nabij de rand die wordt veroorzaakt door paneldruk of onvolmaakte assemblage. IPS glow verandert sterk met de kijkhoek en oogpositie, vooral in de hoeken.',
  },
  {
    question: 'Hoe ziet blooming eruit op een Mini LED-tv of -monitor?',
    answer:
      'Blooming is een zichtbare halo rond een helder object op een zwarte achtergrond. Het verschijnt wanneer een local-dimming-zone een groter gebied verlicht dan het object zelf.',
  },
  {
    question: 'Kunnen OLED-panelen backlight bleeding hebben?',
    answer:
      'OLED-panelen gebruiken geen traditionele backlight, dus ze zouden geen LCD-achtige backlight-bleeding moeten vertonen. Ze kunnen nog steeds problemen met near-black uniformiteit, tinting, verticale banding of opgelichte zwartwaarden door bron- of weergave-instellingen vertonen.',
  },
  {
    question: 'Moet ik een monitor met lichtlek retourneren?',
    answer:
      'Retourbeslissingen hangen af van de ernst, het paneeltype, de prijs en het garantiebeleid. Een zichtbare heldere hoek tijdens normale films of games is ernstiger dan een vage vlek die alleen zichtbaar is op een foto met lange belichting.',
  },
];

const howToData = [
  {
    name: 'Bereid de kamer voor',
    text: 'Schakel lampen uit, sluit gordijnen, maak het scherm schoon en laat uw ogen een minuut wennen zodat stof en reflecties niet op paneeldefecten lijken.',
  },
  {
    name: 'Verhoog de schermhelderheid',
    text: 'Zet de helderheid op 100 procent of op de HDR-modus die u wilt inspecteren. Schakel agressieve omgevingslichtsensoren uit tijdens het testen.',
  },
  {
    name: 'Voer de zwarte test uit',
    text: 'Start de backlight bleeding-modus. De pagina gaat naar fullscreen en toont exact zwart. Controleer de bezel, hoeken en eventuele vaste vlekken.',
  },
  {
    name: 'Voer de blooming-test uit',
    text: 'Start de local dimming-modus en sleep de witte cirkel over het scherm. Let op halo\'s, vertraagde dimming, rastervormige zones en opgelichte zwartwaarden.',
  },
  {
    name: 'Netjes afsluiten',
    text: 'Druk op Escape om de native fullscreen te verlaten. De setup-interface keert terug en de teststatus wordt gereset.',
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

export const content: ToolLocaleContent<BacklightBleedBloomingTestUI> = {
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
      text: 'Backlight Bleeding Test Online: Waar U Op Moet Letten Bij een Nieuwe Monitor of TV',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een <strong>online backlight-bleeding-test</strong> is het nuttigst tijdens de retourtermijn van een nieuwe monitor, gaming-laptop of televisie. De test toont een door de browser gegenereerd <code>#000000</code> fullscreenveld zodat de LCD-backlight de enige mogelijke bron van ongewenst licht is. Als het paneel, de diffuser-stack, de bezeldruk of de assemblage licht doorlaat, ziet u dit meestal als lichtere hoeken, bewolkte randen of vlekken die op dezelfde fysieke positie blijven.',
    },
    {
      type: 'paragraph',
      html: 'Gebruik de test met realistische verwachtingen. LCD-panelen hebben een backlight nodig en zeer kleine variaties kunnen normaal zijn, vooral bij budget IPS- en VA-schermen. De praktische vraag is niet of een foto met lange belichting van een telefoon een vlek kan overdrijven. De vraag is of het lichtlek met het blote oog zichtbaar is tijdens donkere films, games-laadschermen, nachtscènes, zwarte bureaubladachtergronden of video\'s met zwarte balken.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Doe dit voordat u het paneel beoordeelt',
      badge: 'Setup',
      html: 'Schakel de kamerverlichting uit, reinig het glas, zet de helderheid op 100 procent, schakel omgevingslichtsensoren uit en wacht een paar seconden tot uw ogen gewend zijn. Reflecties, vingerafdrukken en een muiscursor kunnen allemaal vals-positieve resultaten veroorzaken tijdens een inspectie van de zwartuniformiteit.',
    },
    {
      type: 'list',
      items: [
        'Controleer de boven- en onderrand waar bezeldruk vaak vaste gloed creëert',
        'Inspecteer alle vier de hoeken op driehoekige of halvemaanvormige lichtlekken',
        'Beweeg uw hoofd lichtjes om kijkhoekgloed van vaste bleeding te onderscheiden',
        'Maak eerst aantekeningen met uw ogen, want camera\'s kunnen zwarte schermen overbelichten',
        'Test opnieuw nadat het paneel 15 tot 30 minuten is opgewarmd als het resultaat twijfelachtig is',
      ],
    },
    {
      type: 'title',
      text: 'Backlight Bleeding, IPS Glow, Clouding en Zwartuniformiteit',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Probleem', 'Wat u ziet', 'Hoe het zich gedraagt', 'Meest voorkomende panelen'],
      rows: [
        ['Backlight bleeding', 'Vaste heldere rand- of hoekvlek', 'Blijft op dezelfde plaats als u uw hoofd beweegt', 'IPS, VA, TN LCD'],
        ['IPS glow', 'Melkachtige gloed uit hoeken bij donkere beelden', 'Verandert sterk met kijkhoek en afstand', 'IPS LCD'],
        ['Clouding', 'Grote onregelmatige bewolkte gebieden op zwart', 'Meestal vast, soms verminderd door lagere helderheid', 'Edge-lit lcd-tv\'s en -monitors'],
        ['VA black crush/smearing', 'Donkere details verdwijnen of vegen bij beweging', 'Afhankelijk van inhoud en pixelovergang', 'VA LCD'],
        ['OLED near-black banding', 'Verticale of horizontale banden nabij zwart', 'Zichtbaar op bijna-zwart grijs, niet op puur zwart', 'OLED'],
      ],
    },
    {
      type: 'paragraph',
      html: 'De meest voorkomende fout is om elk donkerkamer-artefact backlight bleeding te noemen. <strong>IPS glow</strong> is optisch: het wordt sterker wanneer u dichtbij zit, het paneel off-axis bekijkt of hoeken vanuit een steile hoek ziet. Echte backlight bleeding is mechanisch of assemblage-gerelateerd: het blijft aan hetzelfde bezelgebied zitten, zelfs als uw oogpositie verandert. Dit onderscheid is belangrijk omdat veel retailers ernstige bleeding anders behandelen dan normale IPS glow.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'IPS',
          description: 'Brede kijkhoeken, frequente hoekgloed en zichtbare bleeding als het frame het paneel ongelijkmatig drukt.',
          points: ['Het best te controleren vanaf uw normale kijkafstand', 'Glow verandert met de hoofdpositie', 'Randbleeding kan garantie-relevant zijn bij ernstige gevallen'],
        },
        {
          title: 'VA',
          description: 'Hoger native contrast, meestal minder IPS-achtige glow, maar kan clouding en langzame donkere overgangen vertonen.',
          points: ['Zwart oogt dieper dan IPS', 'Uniformiteit kan per exemplaar verschillen', 'Blooming verschijnt op modellen met local dimming'],
        },
        {
          title: 'OLED',
          description: 'Geen LCD-backlight, dus puur zwart zou uit moeten zijn, maar near-black uniformiteit en tint kunnen nog steeds belangrijk zijn.',
          points: ['Puur zwart zou moeten verdwijnen in een donkere kamer', 'Test grijswaarden apart op banding', 'Verwar opgelicht bronzwart niet met paneelbleeding'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Hoe U een Betrouwbare Pure Zwarte Test Uitvoert',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De zwarte testmodus verwijdert bewust de normale interface. Eenmaal gestart verdwijnt het glaspaneel, worden pointer-gebeurtenissen uitgeschakeld op de setup-interface, vraagt de pagina native fullscreen aan en gebruikt de testlaag exact zwart. Na twee seconden zonder muisbeweging wordt de cursor verborgen zodat deze geen wit referentiepunt creëert of een donkere-kamer-inspectie verstoort.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '#000000', label: 'test-achtergrondkleur' },
        { value: '2 s', label: 'cursor inactiviteitstime-out' },
        { value: '100%', label: 'aanbevolen helderheid' },
        { value: '0', label: 'externe middelen in testmodus' },
      ],
    },
    {
      type: 'summary',
      title: 'Checklist zwarte test',
      items: [
        'Gebruik de native resolutie en schakel browserzoom uit als de weergave vreemd schaalt',
        'Stel SDR-helderheid hoog genoeg in om defecten te onthullen, of test HDR in de exacte modus die u van plan bent te gebruiken',
        'Inspecteer eerst vanaf uw normale kijkpositie, daarna vanaf iets verder weg',
        'Oordeel niet op basis van een telefoonfoto, tenzij de belichting vergrendeld is en lijkt op wat uw ogen zien',
        'Druk op Escape om fullscreen te verlaten en herhaal de test na het wijzigen van de monitorinstellingen',
      ],
    },
    {
      type: 'tip',
      title: 'Camerafoto\'s kunnen goede panelen er verschrikkelijk uit laten zien',
      html: 'Automatische telefoonbelichting probeert een zwart scherm lichter te maken, waardoor zwakke gloed wordt overdreven en normaal LCD-gedrag in een dramatisch beeld kan veranderen. Als u garantiebewijs nodig hebt, vergrendel dan handmatig de belichting en voeg een notitie toe of het probleem zichtbaar is tijdens echte inhoud.',
    },
    {
      type: 'title',
      text: 'Local Dimming Blooming-test voor Mini LED- en FALD-schermen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De <strong>blooming-test monitor</strong> modus plaatst een pure witte cirkel op een pure zwarte achtergrond. Op een Mini LED, FALD LCD of tv met local dimming dwingt dat kleine object een of meer backlight-zones om op te lichten terwijl naburige zones zwart proberen te blijven. Als het dimming-algoritme, het zone-aantal, de diffuser of het paneelcontrast het licht niet kan isoleren, ziet u een halo rond de cirkel.',
    },
    {
      type: 'paragraph',
      html: 'Het slepen van de cirkel is belangrijk. Statische blooming is slechts een deel van het verhaal. Een bewegende highlight onthult dimming-vertraging, zone-overgangen, pompen, weggedrukte sterrenvelden, opgelichte ondertitels en rastervormig gedrag. Een goed local-dimming-systeem moet het object helder houden en tegelijkertijd de waas eromheen minimaliseren en vertraagde heldere vlekken vermijden nadat de cirkel is wegbewogen.',
    },
    {
      type: 'table',
      headers: ['Artefact', 'Waar op te letten', 'Waarschijnlijke verklaring'],
      rows: [
        ['Halo', 'Zachte gloed rond de witte cirkel', 'Local-dimming-zone is groter dan het heldere object'],
        ['Zone-raster', 'Vierkante of rechthoekige blokken verschijnen rond beweging', 'Laag zone-aantal of zichtbare Mini LED-layout'],
        ['Dimming-vertraging', 'Heldere vlek volgt de cirkel te laat', 'Algoritme reageert traag op beweging'],
        ['Zwartverhoging', 'Het hele scherm wordt grijs wanneer de cirkel verschijnt', 'Globale dimming of zwakke contrastregeling'],
        ['Ondertitelbloom', 'Grote waas rond kleine witte tekst of UI', 'Agressieve helderheid met beperkte lokale zones'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:television-ambient-light',
      title: 'Beste gebruiksscenario',
      html: 'Sluit de laptop of console aan op de dure tv die u daadwerkelijk gebruikt, open deze local-dimming-tester in de browser en sleep de highlight over het exacte schermformaat. Een kleine ingebedde preview kan local-dimming-zones niet op dezelfde manier belasten als fullscreen zwart en wit.',
    },
    {
      type: 'title',
      text: 'Paneeltype Verwachtingen: OLED, Mini LED, IPS en VA',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Wat elke technologie goed en slecht doet',
      items: [
        {
          pro: 'OLED schakelt individuele pixels uit voor echt zwart en zou geen LCD-backlight-bleeding moeten vertonen.',
          con: 'OLED kan near-black banding, tinting, automatische helderheidsbeperking en inbrandrisico onder statische inhoud vertonen.',
        },
        {
          pro: 'Mini LED kan hoge HDR-helderheid bereiken en grootschalige waas verminderen in vergelijking met edge-lit LCD.',
          con: 'Mini LED gebruikt nog steeds zones, dus kleine heldere objecten kunnen bloeien wanneer het zone-aantal of de algoritmekwaliteit beperkt is.',
        },
        {
          pro: 'IPS is stabiel voor kleur en kijkhoek, wat handig is voor desktopwerk en gedeeld kijken.',
          con: 'IPS glow en randbleeding zijn veelvoorkomende klachten bij donkere scènes, vooral bij dichtbij zitten.',
        },
        {
          pro: 'VA heeft vaak een veel beter native contrast dan IPS en kan dieper ogen in donkere kamers.',
          con: 'VA kan donkere vegen, clouding of blooming op local-dimming-versies vertonen.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Backlight bleeding', definition: 'Ongewenst licht dat door de LCD-stack ontsnapt, meestal nabij de bezel, zichtbaar op zwarte beelden.' },
        { term: 'Blooming', definition: 'Een halo rond een helder object veroorzaakt door local-dimming-zones die een groter gebied verlichten dan het object.' },
        { term: 'IPS glow', definition: 'Hoekafhankelijke melkachtige oplichting in donkere scènes op IPS-panelen.' },
        { term: 'FALD', definition: 'Full Array Local Dimming, waarbij een LCD-backlight is verdeeld in onafhankelijk aangestuurde zones.' },
        { term: 'Mini LED', definition: 'Een LCD-backlight die veel kleine LED\'s gebruikt om het zone-aantal en de HDR-helderheid te verhogen.' },
        { term: 'Zwartuniformiteit', definition: 'Hoe gelijkmatig een scherm zwarte of near-black inhoud over het volledige schermoppervlak weergeeft.' },
      ],
    },
    {
      type: 'title',
      text: 'Wanneer Een Defect Ernstig Genoeg Is Om te Retourneren',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Alarmsignalen tijdens de retourtermijn',
      badge: 'Garantie',
      html: 'Overweeg snel documentatie van het probleem als een heldere hoek zichtbaar is vanaf normale kijkafstand, dezelfde vlek u stoort in films of games, local dimming duidelijke halo\'s rond ondertitels creëert of een duur HDR-scherm slechter presteert dan typische reviews voor hetzelfde model.',
    },
    {
      type: 'paragraph',
      html: 'Een eerlijke beslissing gebruikt echte inhoud en het productniveau. Een goedkope kantoor-IPS-monitor kan lichte hoekgloed hebben die normaal is voor de klasse. Een premium Mini LED-monitor of high-end tv moet zwartniveaus en blooming veel beter beheersen. Als het defect duidelijk is in letterbox-films, donkere gamemenu\'s, ruimtescènes of desktopwerk, is het niet alleen een laboratoriumcuriositeit.',
    },
    {
      type: 'list',
      items: [
        'Controleer dezelfde inhoud op een ander scherm om de bron uit te sluiten',
        'Reset de beeldinstellingen voordat u aanneemt dat het paneel defect is',
        'Probeer local dimming laag, gemiddeld en hoog omdat algoritmen per modus verschillen',
        'Noteer de helderheid, HDR-modus, local-dimming-modus en kijkafstand in uw aantekeningen',
        'Beschrijf bij retourneren wat uw ogen zien in plaats van alleen overbelichte foto\'s te sturen',
      ],
    },
    {
      type: 'title',
      text: 'Waarom Deze Test Code Gebruikt In Plaats Van Video',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Videobestanden kunnen compressieartefacten, browserdecodeerwerk, buffering, kleurbereikconversie en framepacing-variaties introduceren. Een paneeldefectentest moet niet afhankelijk zijn van een MP4-bestand. Deze tool gebruikt alleen client-side HTML en CSS voor de teststatussen: exact zwart voor de achtergrond en exact wit voor de bewegende cirkel. Dat houdt de werklast laag en vermijdt netwerkactiviteit nadat de pagina is geladen.',
    },
    {
      type: 'paragraph',
      html: 'De blooming-cirkelpositie wordt toegepast via <code>requestAnimationFrame</code>, dat visuele updates synchroniseert met de browser-verversingslus. Pointer-, muis- en touch-invoer werkt de doelcoördinaten bij, waarna het volgende animatieframe de witte cirkel verplaatst. Dit zorgt voor een soepele sleepactie op high-refresh monitoren, tablets en OLED-telefoons zonder onnodig werk bij elke ruwe invoergebeurtenis.',
    },
    {
      type: 'message',
      title: 'Privacy en prestatienota',
      ariaLabel: 'Privacy en prestatienota',
      html: 'De actieve teststatussen hebben geen tracking, video\'s, externe afbeeldingen of meet-uploads nodig. Ze zijn bewust eenvoudig zodat oudere laptops, tv-browsers en woonkameropstellingen het displaypaneel kunnen belasten in plaats van de CPU.',
    },
    {
      type: 'title',
      text: 'Probleemoplossing bij Onjuiste Resultaten',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Symptoom tijdens de test', 'Mogelijke oorzaak', 'Wat te proberen'],
      rows: [
        ['Zwart scherm is niet echt zwart', 'Beperkt RGB-bereik, opgelichte zwartinstelling, HDR tone mapping of browser-overlay', 'Stel volledige RGB-uitvoer in, schakel dynamisch contrast uit en controleer of er geen OS-nachtfilter actief is'],
        ['Muiscursor blijft zichtbaar', 'Beweging heeft de inactiviteitstimer gereset of browser blokkeerde cursorverberging kort', 'Stop met bewegen van de muis gedurende twee seconden of gebruik een afstandsbediening/toetsenbord'],
        ['Fullscreen start niet', 'Browser weigerde fullscreen buiten een directe klik of TV-browserbeperking', 'Druk opnieuw op de startknop of gebruik de browser fullscreen-sneltoets'],
        ['Blooming verandert tussen modi', 'Local-dimming-instelling verandert het zonegedrag', 'Test opnieuw Laag, Gemiddeld, Hoog en Uit om de afweging te begrijpen'],
        ['OLED ziet er grijs uit', 'Videobereikmismatch, kamerreflecties of beeldmodus met opgelichte zwartwaarden', 'Controleer bronbereik, zwartniveau, helderheid en omgevingsreflecties'],
      ],
    },
    {
      type: 'summary',
      title: 'Praktische interpretatie',
      items: [
        'Backlight bleeding is het meest overtuigend wanneer het vastzit op zijn plaats en zichtbaar is in echte donkere inhoud',
        'IPS glow verandert met de hoek, dus test vanuit de positie waar u daadwerkelijk zit',
        'Blooming is een local-dimming-beperking, geen dead pixel-probleem',
        'OLED zou de puur zwarte test moeten doorstaan, maar heeft nog steeds aparte near-black uniformiteitscontroles nodig',
        'Een goede testopstelling is donker, fullscreen, hoge helderheid en vrij van reflecties',
      ],
    },
  ],
  ui: {
    bleedTitle: 'Backlight bleeding',
    bleedDescription: 'Fullscreen exact zwart voor randlichtlekken, IPS glow, clouding en zwartuniformiteitscontroles.',
    bloomingTitle: 'Local dimming',
    bloomingDescription: 'Een sleepbare witte cirkel die Mini LED, FALD, OLED near-black-weergave en TV-dimmingzones belast.',
    startBleed: 'Start zwarte test',
    startBlooming: 'Start blooming-test',
    prepTitle: 'Voordat u begint',
    prepBrightness: 'Stel de monitor- of tv-helderheid in op 100%.',
    prepRoom: 'Schakel de kamerverlichting uit en verwijder reflecties.',
    prepFullscreen: 'Druk op Escape om fullscreen te verlaten en de test te resetten.',
    panelLabel: 'Paneel defect voorbeeld',
    parametersLabel: 'Testparameters',
    modeControlsLabel: 'Backlight-testmodi',
    blackLevelLabel: 'Zwart',
    blackLevelValue: '#000000',
    brightnessLabel: 'Helderheid',
    brightnessValue: '100%',
    idleLabel: 'Cursor',
    idleValue: '2s',
    fullscreenLabel: 'Fullscreen',
    fullscreenValue: 'API',
    escapeHint: 'Pure zwarte test actief. Stop met bewegen van de muis gedurende 2 seconden om de cursor te verbergen. Druk op Esc om af te sluiten.',
    dragHint: 'Sleep of raak de witte cirkel aan. Let op halo\'s, zonerasters en vertraagde dimming. Druk op Esc om af te sluiten.',
  },
};
