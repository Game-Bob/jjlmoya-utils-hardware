import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseScrollTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'muiswiel-test';
const title = 'Muiswiel Test';
const description = 'Diagnosticeer muiswiel-overslaan, terugspringen, inconsistente scrollrichting en zwakke encodersignalen met een lokale, browsergebaseerde muiswieltest.';

const faqData = [
  {
    question: 'Wat detecteert een muiswieltest?',
    answer: 'Een muiswieltest registreert wielgebeurtenissen en zoekt naar onstabiele richtingsveranderingen, zwakke kleine delta\'s en inconsistent scrollen. Deze symptomen verschijnen vaak wanneer de wielencoder vuil, versleten, niet goed uitgelijnd of elektronisch gestoord is.',
  },
  {
    question: 'Wat is een omgekeerde scrollsprong?',
    answer: 'Een omgekeerde sprong treedt op wanneer u in één richting scrolt maar de computer een korte gebeurtenis in de tegenovergestelde richting ontvangt. Als dit zich herhaalt tijdens constant scrollen, is het een sterk teken van encoder-stuiteren of vervuiling.',
  },
  {
    question: 'Werkt deze test met touchpads?',
    answer: 'Ja, maar het resultaat is het meest betekenisvol voor fysieke muiswielen. Touchpads en soepel scrollende wielen creëren veel kleine delta\'s, dus de gevoeligheidsregeling helpt om opzettelijke fijne beweging te scheiden van verdacht jitter.',
  },
  {
    question: 'Uploadt de test mijn muisgegevens?',
    answer: 'Nee. De berekening wordt lokaal in uw browser uitgevoerd. De tool gebruikt alleen wielgebeurtenissen terwijl uw aanwijzer zich in het opnamegebied bevindt.',
  },
];

const howToData = [
  {
    name: 'Plaats de aanwijzer over het opnamepaneel',
    text: 'Beweeg de cursor naar het scroll-laboratoriumgebied zodat de pagina wielgebeurtenissen kan vastleggen zonder het omringende document te verplaatsen.',
  },
  {
    name: 'Scroll gelijkmatig in één richting',
    text: 'Test één richting tegelijk: rol langzaam omhoog voor meerdere klikken, reset of pauzeer en test vervolgens afzonderlijk omlaag. Snelle opzettelijke richtingsveranderingen kunnen valse omgekeerde sprongmetingen veroorzaken.',
  },
  {
    name: 'Let op omgekeerde sprongen',
    text: 'Als de omkeerteller stijgt terwijl uw vinger nog steeds in één richting beweegt, herhaal dan dezelfde beweging om het patroon te bevestigen.',
  },
  {
    name: 'Stel de gevoeligheid af',
    text: 'Verhoog de gevoeligheid voor soepele touchpads of verlaag deze voor strikte mechanische wieltests. De stabiliteitsscore wordt onmiddellijk bijgewerkt.',
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

export const content: ToolLocaleContent<MouseScrollTestUI> = {
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
      text: 'Muiswiel Test: Vind Wieloverslaan en Omgekeerde Sprongen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een defect muiswiel valt zelden in één keer uit. Het begint meestal met kleine symptomen: één klik scrolt de verkeerde kant op, de pagina springt omhoog terwijl u omlaag scrolt, of het wiel voelt normaal maar de browser ontvangt inconsistente gebeurtenissen. Deze muiswieltest registreert het signaal dat de browser bereikt en markeert de patronen die relevant zijn voor diagnose.',
    },
    {
      type: 'paragraph',
      html: 'Het doel is niet om te meten hoe ver een pagina is verplaatst. Het bruikbare signaal is <strong>richtingsconsistentie</strong>. Wanneer u een mechanisch wiel gelijkmatig omlaag rolt, moet de gebeurtenisstroom in die richting blijven. Korte tegengestelde richtingsgebeurtenissen in een smal tijdvenster zijn verdacht omdat ze overeenkomen met hoe vuile of versleten scroll-encoders wielbewegingen verkeerd lezen.',
    },
    {
      type: 'title',
      text: 'Wat de Tool Meet',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Totaal aantal wieltikken vastgelegd in het testpaneel',
        'Omgekeerde sprongen: snelle tekenwisselingen die optreden terwijl de vorige richting nog recent is',
        'Langste schone reeks: hoeveel opeenvolgende gebeurtenissen in een consistente richting bleven',
        'Laatste delta: de ruwe richting en grootte van de meest recente wielgebeurtenis',
        'Verticale versus horizontale activiteit, nuttig voor kantelwielen en touchpads',
      ],
    },
    {
      type: 'table',
      headers: ['Signaal', 'Gezond Patroon', 'Verdacht Patroon'],
      rows: [
        ['Verticaal wiel', 'Lange reeksen van omhoog- of omlaag-gebeurtenissen tijdens gelijkmatig scrollen', 'Afwisselende omhoog/omlaag-gebeurtenissen terwijl uw vinger één richting aanhoudt'],
        ['Horizontale kanteling', 'Links- of rechts-gebeurtenissen alleen bij gebruik van kantel- of horizontale gebaren', 'Onverwachte zijwaartse beweging tijdens normaal verticaal wielgebruik'],
        ['Kleine delta\'s', 'Soms kleine waarden op soepele wielen of touchpads', 'Een hoog aandeel kleine onstabiele waarden op een mechanisch getand wiel'],
        ['Stabiliteitsscore', 'Blijft hoog bij meerdere bewuste doorlopen', 'Daalt herhaaldelijk omdat omkeringen optreden in dezelfde richtingstest'],
      ],
    },
    {
      type: 'title',
      text: 'Veelvoorkomende Oorzaken van Muiswiel-Overslaan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De meeste muiswielen gebruiken een encoder die rotatie omzet in pulsen. Stof, oxidatie, versleten contacten, een losse wielas, firmware-filterproblemen of een beschadigde kabel kunnen deze pulsen inconsistent maken. Wanneer de encoder kort de verkeerde fase meldt, kan het besturingssysteem een wielgebeurtenis in tegengestelde richting ontvangen, ook al bleef het wiel in de oorspronkelijke richting bewegen.',
    },
    {
      type: 'table',
      headers: ['Symptoom', 'Waarschijnlijke Oorzaak', 'Volgende Controle'],
      rows: [
        ['Pagina springt omhoog bij omlaag scrollen', 'Encoder-stuiteren of vuil in het wielmechanisme', 'Voer een langzame omlaag-doorloop uit en bekijk de omkeerteller'],
        ['Slechts één applicatie scrolt slecht', 'Applicatie-afvlakking, zoommodus of aangepaste muissnelkoppeling', 'Test in de browser en vergelijk met een andere app'],
        ['Wiel werkt na uitblazen, valt dan weer uit', 'Tijdelijke verplaatsing van vuil of versleten encodercontacten', 'Herhaal na enkele minuten normaal gebruik'],
        ['Onverwachte horizontale beweging verschijnt', 'Kantelwielruis, touchpad-gebaar of driver-toewijzing', 'Controleer de horizontale asmeter tijdens verticaal scrollen'],
        ['Draadloze muis scrolt onregelmatig', 'Zwakke batterij, afstand tot ontvanger of interferentie', 'Test opnieuw met een verse batterij en ontvanger dicht bij de muis'],
      ],
    },
    {
      type: 'title',
      text: 'Betrouwbaar Testen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Plaats de aanwijzer in het opnamepaneel voordat u scrolt, zodat de pagina normale paginabeweging kan voorkomen',
        'Test één richting tegelijk: scroll langzaam 10 tot 20 wieltikken omhoog zonder van richting te veranderen',
        'Reset of pauzeer en herhaal dezelfde eenrichtings-doorloop omlaag',
        'Wissel niet snel af tussen omhoog en omlaag, omdat opzettelijke snelle richtingsveranderingen op omgekeerde sprongen kunnen lijken',
        'Als er omkeringen verschijnen, herhaal dan de falende richting meerdere keren om te bevestigen dat het reproduceerbaar is',
        'Vergelijk met een andere muis op dezelfde computer als u hardware van software moet scheiden',
      ],
    },
    {
      type: 'title',
      text: 'De Score Interpreteren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De stabiliteitsscore is een snelle samenvatting. Een hoge score betekent dat de tool consistente richting en weinig kleine onzekere delta\'s zag. Een lage score bewijst niet automatisch dat de muis defect is, vooral niet bij touchpads of hoog-resolutie soepele wielen, maar herhaalde omgekeerde sprongen tijdens een langzame eenrichtingstest zijn sterk bewijs van een echt wielprobleem.',
    },
    {
      type: 'table',
      headers: ['Resultaat', 'Betekenis', 'Aanbevolen Actie'],
      rows: [
        ['Geen omkeringen en lange schone reeksen', 'Het wielsignaal lijkt consistent', 'Blijf alleen testen als symptomen in echt gebruik verschijnen'],
        ['Eén geïsoleerde omkering', 'Kan een onbedoelde richtingsverandering of één storende gebeurtenis zijn', 'Herhaal dezelfde richting langzaam'],
        ['Meerdere omkeringen in dezelfde doorloop', 'Waarschijnlijk encoder-stuiteren, vuil of wielslijtage', 'Test opnieuw op een andere computer en documenteer het resultaat'],
        ['Veel jitter-gebeurtenissen maar geen omkeringen', 'Gevoeligheid is mogelijk te laag voor het apparaattype', 'Verhoog de gevoeligheid voor touchpads of smooth-scroll-apparaten'],
        ['Horizontale gebeurtenissen tijdens verticaal wielgebruik', 'Mogelijk kantelwielruis of driver-toewijzingsruis', 'Schakel aangepaste muissoftware uit en test opnieuw'],
      ],
    },
    {
      type: 'title',
      text: 'Mechanisch Wiel vs Touchpad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een mechanisch getand wiel produceert normaal gesproken duidelijke richtingsstappen. Een touchpad of vrijdraaiend wiel kan veel kleine delta\'s produceren omdat het besturingssysteem soepel scrollen toepast. Daarom bevat deze tool een gevoeligheidsregeling: verhogen negeert kleine bewegingen en laat de test zich richten op richtingsveranderingen die groot genoeg zijn om relevant te zijn.',
    },
    {
      type: 'title',
      text: 'Wat te Proberen Voordat u de Muis Vervangt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Test in een andere browser om een pagina-specifieke wielhandler uit te sluiten',
        'Schakel fabrikant-muissoftware, scrollversnelling of macrolagen uit tijdens diagnose',
        'Gebruik voor draadloze muizen een verse batterij en breng de ontvanger dichterbij',
        'Reinig rond het wiel met perslucht terwijl de muis is losgekoppeld of uitgeschakeld',
        'Als de muis onder garantie valt, leg het herhaalde omkeringspatroon vast als bewijs',
      ],
    },
    {
      type: 'paragraph',
      html: 'Browsergebaseerd testen kan de encoder niet elektrisch inspecteren, maar kan wel precies laten zien wat uw normale software ontvangt. Als de browser wielgebeurtenissen in de verkeerde richting ontvangt tijdens zorgvuldig eenrichtings-scrollen, kunnen andere applicaties ze ook ontvangen.',
    },
  ],
  ui: {
    badge: 'Wielsignaal Lab',
    captureTitle: 'Scroll in het signaalpaneel',
    captureHint: 'Gebruik gelijkmatige eenrichtings-wieldoorlopen om omgekeerde sprongen bloot te leggen',
    focusLockTitle: 'Activeer deze scrollzone',
    focusLockText: 'Klik op deze zone en scroll hier. De pagina zal niet bewegen terwijl deze zone actief is.',
    stabilityScore: 'Stabiliteitsscore',
    statusIdle: 'Scroll over het paneel om wielconsistentie te beginnen meten',
    statusClean: 'Wielrichting is stabiel in de vastgelegde monsters',
    statusWarning: 'Omgekeerde sprongen gedetecteerd tijdens recent scrollen',
    statusMixed: 'Veel kleine delta\'s gedetecteerd; stel de gevoeligheid af voor dit apparaat',
    directionNote: 'Test één richting tegelijk. Snel wisselen tussen omhoog en omlaag kan valse omgekeerde sprongmetingen veroorzaken.',
    totalTicks: 'Tikken',
    reversals: 'Omkeringen',
    longestRun: 'Beste reeks',
    lastDelta: 'Laatste delta',
    verticalAxis: 'Verticaal',
    horizontalAxis: 'Horizontaal',
    dominantDirection: 'Laatste richting',
    upward: 'Omhoog',
    downward: 'Omlaag',
    leftward: 'Links',
    rightward: 'Rechts',
    noDirection: 'Geen beweging',
    noDataValue: '-',
    sensitivityLabel: 'Jitter-gevoeligheid',
    sensitivityUnit: 'delta',
    reset: 'Resetten',
    logTitle: 'Wielgebeurtenis-logboek',
    emptyLog: 'Scroll over het paneel met langzame, gelijkmatige wielbeweging.',
    cleanEvent: 'schoon',
    reversalEvent: 'omgekeerde sprong',
    jitterEvent: 'kleine delta',
  },
};
