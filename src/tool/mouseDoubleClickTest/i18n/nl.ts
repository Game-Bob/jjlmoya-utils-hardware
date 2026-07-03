import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDoubleClickTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'muis-dubbelklik-test';
const title = 'Muis Dubbelklik Test';
const description =
  'Test elke muisknop en detecteer ongewenste dubbelkliks, versleten schakelaars en contactdender met per-knop timing in je browser.';

const faqData = [
  {
    question: 'Wat is een muis dubbelklik probleem?',
    answer:
      'Een dubbelklikprobleem treedt op wanneer één fysieke druk wordt geregistreerd als twee klikken. Het kan de linkerknop, rechterknop, wielklik of zijknoppen beïnvloeden en wordt meestal veroorzaakt door schakelaarslijtage, contactdender, firmware anti-dender instellingen of draadloze signaalinstabiliteit.',
  },
  {
    question: 'Welke tussenpoos wordt als verdacht beschouwd?',
    answer:
      'Zeer korte tussenpozen tussen klikken zijn verdacht omdat menselijke dubbelklikken meestal meer tijd vergen. Deze tool begint met een drempel van 80 ms, maar je kunt deze aanpassen afhankelijk van de muis en je teststijl.',
  },
  {
    question: 'Kan een browser bewijzen dat de schakelaar kapot is?',
    answer:
      'Een browser kan de elektrische schakelaar niet rechtstreeks inspecteren, maar kan wel de klikgebeurtenissen registreren die je besturingssysteem ontvangt. Herhaalde verdachte tussenpozen tijdens enkelklik-testen zijn een sterk bewijs van dender of ongewenst dubbelklikken.',
  },
  {
    question: 'Hoe moet ik correct testen?',
    answer:
      'Klik langzaam en doelbewust, gericht op enkele drukken. Als de verdachte teller stijgt, zelfs wanneer je niet opzettelijk dubbelklikt, herhaal dan de test op een andere USB-poort, een andere browser en indien mogelijk een andere computer.',
  },
];

const howToData = [
  {
    name: 'Stel de detectiedrempel in',
    text: 'Begin met 80 ms. Verlaag deze voor strikte schakelaardender-detectie of verhoog deze als je apparaat iets bredere onbedoelde tussenpozen produceert.',
  },
  {
    name: 'Klik zoals een normale enkelklik',
    text: 'Druk elke muisknop één klik per keer in boven de muisweergave. Dubbelklik niet opzettelijk tijdens de eerste ronde.',
  },
  {
    name: 'Houd de verdachte teller in de gaten',
    text: 'Als er verdachte gebeurtenissen verschijnen terwijl je enkelklikken maakt, controleer dan welke visuele knop werd gemarkeerd en vergelijk dit met de compacte gebeurtenischips.',
  },
  {
    name: 'Vergelijk met een ander apparaat',
    text: 'Een gezonde muis zou een hoge score moeten behouden onder dezelfde drempel. Apparaten vergelijken helpt om hardwarefouten van software-instellingen te onderscheiden.',
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
      text: 'Muis Dubbelklik Test: Diagnosticeer Knopdender Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een muis die dubbelklikt wanneer je één keer drukt, is niet alleen vervelend. Hij kan per ongeluk mappen openen, slepen-en-neerzetten acties annuleren, twee schoten afvuren in een game, browsertabbladen sluiten of contextmenu\'s laten verschijnen en verdwijnen voordat je ze kunt gebruiken. Deze online muis dubbelklik test richt zich op het nuttige diagnostische signaal: <strong>de tijd tussen knopgebeurtenissen die door je besturingssysteem worden gerapporteerd</strong>.',
    },
    {
      type: 'paragraph',
      html: 'In tegenstelling tot een eenvoudige klikteller, volgt deze tool elke knop onafhankelijk: linkermuisknop, rechtermuisknop, wielklik, browser-terug en browser-vooruit. Dat is belangrijk omdat een muis een defecte rechterknop kan hebben terwijl de linkerknop nog gezond is, of een versleten zijknop die pas na maanden gamen of productiviteitssnelkoppelingen vals afgaat.',
    },
    {
      type: 'title',
      text: 'Wat Deze Muisknop-Test Meet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wanneer je een muisknop indrukt, ontvangt de browser een pointergebeurtenis met de knopcode. De tool slaat de laatste tijdstempel voor dezelfde fysieke knop op en vergelijkt deze met de volgende druk van dezelfde knop. Als de tussenpoos korter is dan je geselecteerde drempel, wordt de gebeurtenis als verdacht gemarkeerd omdat een normale opzettelijke tweede klik meestal langer duurt.',
    },
    {
      type: 'list',
      items: [
        'Linkerknop: nuttig voor het detecteren van onbedoelde dubbelklikken bij het openen van bestanden, het selecteren van tekst of het slepen van vensters',
        'Rechterknop: nuttig wanneer contextmenu\'s flikkeren, twee keer openen of onmiddellijk sluiten',
        'Wielknop: nuttig voor muizen waar de middelste klik meerdere tabbladen opent of faalt na intensief browsen',
        'Terug- en Vooruitknoppen: nuttig voor gaming muizen en productiviteitsmuizen met zijknopschakelaars',
        'Per-knop timing: voorkomt dat een linkermuisklik met een rechtermuisklik wordt gemengd en een valse dubbelklik wordt genoemd',
      ],
    },
    {
      type: 'title',
      text: 'Waarom Muizen Beginnen met Dubbelklikken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De meeste muizen gebruiken kleine mechanische schakelaars onder elke knop. Wanneer de schakelaarcontacten sluiten, kan het metaal elektrisch denderen gedurende een zeer korte periode voordat het tot rust komt. De muis-firmware filtert die ruis normaal gesproken met anti-dender logica. Naarmate de schakelaar slijt, kan de dender langer, lawaaiiger of inconsistent worden, waardoor de computer twee knopdrukken ontvangt, ook al maakte je vinger één fysieke druk.',
    },
    {
      type: 'paragraph',
      html: 'Dubbelklikken wordt niet altijd door hetzelfde veroorzaakt. Het kan mechanische schakelaarslijtage zijn, te agressief ingestelde firmware anti-dender, stof of oxidatie in de schakelaar, draadloze pakketinstabiliteit, macro-software, een beschadigde kabel of een besturingssysteeminstelling die onbedoelde dubbelklikken beter opmerkbaar maakt.',
    },
    {
      type: 'table',
      headers: ['Symptoom', 'Waarschijnlijke Oorzaak', 'Wat te Testen'],
      rows: [
        ['Eén klik opent bestanden alsof er dubbel is geklikt', 'Linkerschakelaar dender of OS dubbelkliksnelheid verwarring', 'Test Links met langzame enkele drukken op 80 ms'],
        ['Rechtsklikmenu flikkert of sluit', 'Rechtschakelaar dender of software die contextmenu\'s onderschept', 'Test Rechts en schakel muis-hulpprogramma\'s tijdelijk uit'],
        ['Middelste klik opent twee tabbladen', 'Wielschakelaar slijtage', 'Test Wiel met doelbewuste enkele drukken'],
        ['Terugknop springt twee pagina\'s terug', 'Zijknopschakelaar dender of browser sneltoets herhaling', 'Test Terug en Vooruit afzonderlijk'],
        ['Gebeurt alleen draadloos', 'Draadloze interferentie, lage batterij of ontvangerplaatsing', 'Test opnieuw met kabel of plaats de ontvanger dichterbij'],
      ],
    },
    {
      type: 'title',
      text: 'De Juiste Anti-Dender Drempel Kiezen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De drempel is de maximale tussenpoos die deze tool nog als verdacht beschouwt. De standaardwaarde, <strong>80 ms</strong>, is een praktisch midden: streng genoeg om veel ongewenste dubbele gebeurtenissen te vangen, maar niet zo agressief dat elke normale opzettelijke dubbelklik een hardwarestoring wordt.',
    },
    {
      type: 'table',
      headers: ['Drempel', 'Beste Voor', 'Hoe te Interpreteren'],
      rows: [
        ['30-50 ms', 'Strikte elektrische dendercontroles', 'Goed voor het bevestigen van zeer snelle dubbele gebeurtenissen van een versleten schakelaar'],
        ['60-90 ms', 'Algemene muis dubbelklik diagnose', 'Beste standaardbereik voor de meeste gaming- en kantoormuizen'],
        ['100-140 ms', 'Onderbroken versleten schakelaars', 'Nuttig wanneer de muis soms bredere onbedoelde tussenpozen creëert'],
        ['150-180 ms', 'Stresstests en zwakke schakelaars', 'Voorzichtig gebruiken, omdat snelle opzettelijke dubbelklikken in dit bereik kunnen vallen'],
      ],
    },
    {
      type: 'title',
      text: 'Hoe een Betrouwbare Test Uit te Voeren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Voor de eerste ronde, dubbelklik niet opzettelijk. Druk elke muisknop langzaam en doelbewust in, één knop per keer, terwijl de cursor zich boven de muisweergave bevindt. Een gezonde schakelaar zou stabiele enkele gebeurtenissen moeten produceren. Als de verdachte teller stijgt tijdens langzame enkele drukken, herhaal dan dezelfde knoptest meerdere keren om het patroon te bevestigen.',
    },
    {
      type: 'list',
      items: [
        'Test Links met 20 tot 30 langzame drukken, dan Rechts, dan Wiel, dan de zijknoppen',
        'Sleep de muis niet tijdens het testen van knopdender, omdat beweging het timingresultaat kan verstoren',
        'Als een knop verdachte gebeurtenissen toont, herhaal dan dezelfde test na het wisselen van USB-poort of browser',
        'Test draadloze muizen met een nieuwe batterij en de ontvanger dicht bij de muis',
        'Als slechts één knop herhaaldelijk faalt, is de fout waarschijnlijk die specifieke schakelaar in plaats van het hele apparaat',
      ],
    },
    {
      type: 'title',
      text: 'Resultaten Interpreteren',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Resultaat', 'Betekenis', 'Aanbevolen Volgende Stap'],
      rows: [
        ['0 verdachte gebeurtenissen na vele drukken', 'De geteste knoppen lijken gezond onder de geselecteerde drempel', 'Behoud de standaarddrempel of test later opnieuw als de symptomen terugkeren'],
        ['1 geïsoleerde verdachte gebeurtenis', 'Kan echte dender of een onbedoelde snelle druk zijn', 'Herhaal dezelfde knop langzaam voordat je conclusies trekt'],
        ['Herhaalde verdachte gebeurtenissen op één knop', 'Sterk teken van schakelaardender of versleten contacten', 'Test op een andere computer en documenteer het resultaat'],
        ['Verdachte gebeurtenissen op elke knop', 'Kan software, driver, macro-hulpprogramma of browseromgeving zijn', 'Schakel muissoftware uit en test opnieuw'],
        ['Alleen de draadloze modus faalt', 'Waarschijnlijk batterij, ontvangerplaatsing of interferentie', 'Probeer de bekabelde modus of plaats de ontvanger dichterbij'],
      ],
    },
    {
      type: 'paragraph',
      html: 'De gezondheidsscore is een snelle samenvatting, geen definitief oordeel. Het belangrijkste bewijs is <strong>welke knop</strong> verdachte gebeurtenissen produceerde en of het patroon herhaalt wanneer je diezelfde knop langzaam indrukt. Eén slechte gebeurtenis tijdens een gehaaste test is minder betekenisvol dan vijf verdachte rechtsklikgebeurtenissen tijdens doelbewuste enkele drukken.',
    },
    {
      type: 'title',
      text: 'Voordat Je de Muis Vervangt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Controleer of je muissoftware een anti-dender tijdinstelling heeft en test opnieuw na deze te hebben gewijzigd',
        'Schakel macro\'s, snelvuurprofielen of knop-hertoewijzingen uit tijdens de diagnose',
        'Probeer een andere USB-poort, vooral als je een hub of frontpaneel-aansluiting gebruikt',
        'Test draadloze muizen met de dongle op een verlengkabel dicht bij de muismat',
        'Vergelijk met een andere muis op dezelfde computer om hardwarestoring van softwaregedrag te onderscheiden',
      ],
    },
    {
      type: 'title',
      text: 'Reparatie, Garantie en Bewijs',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Als de fout mechanisch is, lost het reinigen van de buitenste behuizing het zelden permanent op omdat het probleem zich binnenin de schakelaarcontacten bevindt. Sommige gebruikers vervangen de microschakelaar, maar dat vereist solderen en is niet voor elke muis de moeite waard. Als de muis onder garantie valt, zijn herhaalde verdachte tussenpozen op dezelfde knop nuttig bewijs bij het uitleggen van het probleem aan de ondersteuning.',
    },
    {
      type: 'paragraph',
      html: 'Voor garantieclaims, neem een korte schermopname op terwijl je de falende knop langzaam indrukt. Zorg ervoor dat de gebeurtenischips het knoplabel en de verdachte timing tonen. Dit is duidelijker dan zeggen "mijn muis dubbelklikt soms" omdat het de daadwerkelijke knop en de geschatte timing van de ongewenste dubbele gebeurtenis aantoont.',
    },
    {
      type: 'title',
      text: 'Beperkingen van een Browsergebaseerde Muistest',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Deze test meet de gebeurtenissen die de browser bereiken. Hij kan de elektrische golfvorm in de schakelaar niet rechtstreeks inspecteren en kan niet elke driver, elk besturingssysteem of elk hulpprogramma van de fabrikant omzeilen. Dat is nog steeds nuttig: als de browser dubbele gebeurtenissen ontvangt, kunnen je normale toepassingen ze ook ontvangen. Voor validatie op engineeringniveau bieden hardwaretools zoals oscilloscopen of schakelaartesters dieper bewijs, maar deze zijn voor de meeste gebruikersdiagnoses niet nodig.',
    },
  ],
  ui: {
    badge: 'Anti-Dender Lab',
    clickTarget: 'Knoppenmatrix',
    clickTargetHint: 'Druk links, rechts, wiel, terug en vooruit',
    totalClicks: 'Totaal',
    suspiciousClicks: 'Verdacht',
    fastestGap: 'Snelste tussenpoos',
    healthScore: 'Gezondheidsscore',
    thresholdLabel: 'Detectiedrempel',
    thresholdUnit: 'ms',
    cleanEvent: 'schoon',
    suspiciousEvent: 'verdacht',
    reset: 'Resetten',
    statusIdle: 'Druk elke muisknop in om deze onafhankelijk te testen',
    statusClean: 'Geen verdachte knopdender gedetecteerd',
    statusWarning: 'Verdachte dender gedetecteerd op een muisknop',
    lastGap: 'Laatste gebeurtenis',
    logTitle: 'Recente knopgebeurtenissen',
    emptyLog: 'Druk een willekeurige muisknop in boven het muislichaam.',
    leftButton: 'Links',
    middleButton: 'Wiel',
    rightButton: 'Rechts',
    backButton: 'Terug',
    forwardButton: 'Vooruit',
    otherButton: 'Anders',
  },
};
