import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UpsRuntimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ups-looptijd-calculator';
const title = 'UPS Looptijd Calculator';
const description = 'Bereken de UPS-batterijduur, de totale beveiligde belasting, de bruikbare wattuur en de aanbevolen VA-grootte voor pc\'s, monitors, routers, NAS-apparaten en thuislabhardware.';

const faqData = [
  {
    question: 'Hoe bereken ik de UPS-looptijd?',
    answer: 'Tel het wattage van elk apparaat dat op de UPS is aangesloten bij elkaar op, vermenigvuldig de wattuur van de UPS-batterij met het omvormerrendement, trek de gewenste reserve ervan af en deel de bruikbare wattuur door het belastingswattage. Het resultaat in uren kan met 60 worden vermenigvuldigd voor minuten.',
  },
  {
    question: 'Waarom wijkt de werkelijke UPS-looptijd af van de schatting?',
    answer: 'De looptijd verandert door batterijleeftijd, temperatuur, ontlaadsnelheid, omvormerrendement, belastingspieken en de uitschakelspanning van de fabrikant. Beschouw het resultaat als een planningsschatting en controleer het met een gecontroleerde uitschakeltest.',
  },
  {
    question: 'Moet ik een UPS dimensioneren op watt of VA?',
    answer: 'Controleer beide. Watt geeft het werkelijke vermogen aan dat de UPS kan leveren, terwijl VA de arbeidsfactor omvat. De UPS moet uw belasting in watt overtreffen en voldoende VA-ruimte hebben voor de aangesloten apparatuur.',
  },
  {
    question: 'Hoeveel UPS-reserve moet ik aanhouden?',
    answer: 'Een praktische richtlijn is om de normale belasting onder ongeveer 70-80% van het UPS-wattvermogen te houden. Dit laat ruimte voor opstartpieken, batterijveroudering en toekomstige apparaten.',
  },
  {
    question: 'Kan ik printers of verwarmingstoestellen op een UPS aansluiten?',
    answer: 'Vermijd laserprinters, verwarmingstoestellen en andere belastingen met hoge inschakelstromen, tenzij de UPS er expliciet voor geschikt is. Ze kunnen de omvormer overbelasten en de looptijd sterk verkorten.',
  },
];

const howToData = [
  {
    name: 'Beveiligde apparaten opsommen',
    text: 'Voer de apparaten in die tijdens een stroomstoring online moeten blijven, zoals de computer, monitor, router, modem, NAS en netwerkswitch.',
  },
  {
    name: 'Realistisch wattage invoeren',
    text: 'Gebruik indien mogelijk gemeten wandcontactdoosvermogen. Als u alleen de voedingwaardes heeft, verlaag deze dan naar de verwachte bedrijfsbelasting in plaats van de maximale labelwaarde te gebruiken.',
  },
  {
    name: 'Batterijcapaciteit en aannames instellen',
    text: 'Voer de wattuur van de UPS-batterij, het omvormerrendement, de arbeidsfactor en het gewenste reservepercentage in voor een gecontroleerde uitschakeling.',
  },
  {
    name: 'Looptijd en VA-aanbeveling aflezen',
    text: 'Gebruik de geschatte minuten en aanbevolen VA als aankoop- of configuratiegids en valideer de opstelling met een veilige stroomuitvaloefening.',
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

export const content: ToolLocaleContent<UpsRuntimeCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'UPS Looptijd Calculator: Schat de Batterijbackuptijd',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een UPS-looptijdschatting beantwoordt twee praktische vragen: hoe lang uw hardware online kan blijven tijdens een stroomstoring en of de UPS groot genoeg is voor de aangesloten belasting. Deze calculator combineert apparaatvermogen, batterij-wattuur, omvormerrendement, arbeidsfactor en uitschakelreserve, zodat het resultaat dichter bij echte planning ligt dan een eenvoudige deling van de batterijcapaciteit.',
    },
    {
      type: 'title',
      text: 'De Looptijdformule',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De geschatte looptijd in uren is <strong>bruikbare batterij-wattuur gedeeld door de totale belasting in W</strong>. Bruikbare wattuur is niet de gedrukte batterijcapaciteit: deze moet worden gecorrigeerd voor omvormerverliezen en de gewenste uitschakelreserve. Een batterij van 432 Wh met 86% rendement en 20% reserve levert bijvoorbeeld ongeveer 297 Wh aan bruikbare energie.',
    },
    {
      type: 'table',
      headers: ['Invoer', 'Waarom het belangrijk is', 'Praktische richtlijn'],
      rows: [
        ['Belasting in watt', 'Bepaalt direct de looptijd', 'Meet met een wandcontactdoosmeter indien mogelijk, vooral voor gaming-pc\'s en NAS-systemen.'],
        ['Batterij-Wh', 'Bepaalt de energievoorraad', 'Gebruik fabrikantgegevens of nominale spanning vermenigvuldigd met ampère-uur.'],
        ['Rendement', 'Compenseert omvormerverliezen', '80-90% is een redelijk planningsbereik voor veel consumenten-UPS-apparaten.'],
        ['Arbeidsfactor', 'Zet watt om in VA', 'Gebruik de UPS-specificatie indien bekend; 0,6-0,8 is gebruikelijk voor instap- en middenklassemodellen.'],
        ['Reserve', 'Behoudt de uitschakelmarge', '10-25% is verstandig voor gecontroleerd afsluiten van pc of server.'],
      ],
    },
    {
      type: 'title',
      text: 'Hoeveel Looptijd Heeft U Nodig?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '5-10 minuten: genoeg om korte spanningsdips te overbruggen of een desktop veilig af te sluiten.',
        '10-20 minuten: nuttig voor routers, modems, NAS-apparaten en kleine thuislabknooppunten.',
        '30+ minuten: beter voor netwerkcontinuïteit, thuiswerken en locaties met frequente storingen.',
        'Enkele uren: vereist doorgaans een groter batterijsysteem, niet alleen een desktop-UPS.',
      ],
    },
    {
      type: 'title',
      text: 'Watt vs VA bij het Kiezen van een UPS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'UPS-productnamen vermelden vaak VA, maar het wattvermogen is de hardere grens voor echte apparatuur. Een UPS van 900 VA ondersteunt misschien slechts 540 W, terwijl een ander 900 VA-model 600 W of meer ondersteunt. Controleer beide waarden en houd normaal gebruik onder het maximum om overbelastingsalarmen, verkorte batterijlevensduur en mislukte omschakelingen tijdens een storing te voorkomen.',
    },
    {
      type: 'title',
      text: 'Belastingen die Looptijdschattingen Vertekenen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Gaming-pc\'s kunnen in seconden van laag stationair verbruik naar hoog GPU-verbruik gaan.',
        'Monitors variëren sterk met helderheid, HDR-modus en paneelgrootte.',
        'NAS-apparaten verbruiken extra stroom tijdens het opstarten van schijven en rebuilds.',
        'Laserprinters, verwarmingstoestellen, pompen en compressoren zijn slechte UPS-belastingen tenzij expliciet ondersteund.',
        'Oude batterijen kunnen veel minder looptijd leveren dan hun oorspronkelijke capaciteit suggereert.',
      ],
    },
    {
      type: 'title',
      text: 'Controlelijst voor Veilig Testen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Laad de UPS volledig op voor het testen.',
        'Sla open werk op en vermijd testen tijdens kritieke schrijfacties of firmware-updates.',
        'Ontkoppel de netvoeding, niet de apparatuur, en kijk naar het UPS-belastingspercentage en de batterijschatting.',
        'Bevestig dat uw pc, NAS of server het uitschakelsignaal ontvangt voordat de batterij leeg is.',
        'Herhaal de test om de paar maanden omdat loodzuur-UPS-batterijen snel verouderen.',
      ],
    },
  ],
  ui: {
    loadTitle: 'Beveiligde belasting',
    addDevice: 'Apparaat toevoegen',
    deviceName: 'Apparaat',
    watts: 'Watt',
    remove: 'Apparaat verwijderen',
    batteryWh: 'Batterijcapaciteit (Wh)',
    efficiency: 'Omvormerrendement',
    powerFactor: 'Arbeidsfactor',
    reserve: 'Uitschakelreserve',
    totalLoad: 'Totale belasting',
    runtime: 'Geschatte looptijd',
    recommendedUps: 'Aanbevolen formaat',
    usableEnergy: 'Bruikbare energie',
    minutes: 'min',
    hours: 'u',
    wattsUnit: 'W',
    vaUnit: 'VA',
    whUnit: 'Wh',
    assumptionsLabel: 'UPS-aannames',
    presetDesktop: 'Desktop-pc',
    presetMonitor: '27-inch monitor',
    presetRouter: 'Router en modem',
    presetNas: 'NAS met twee bays',
    percentUnit: '%',
    bandLight: 'comfortabel backup-venster met een aanbevolen UPS nabij',
    bandBalanced: 'gebalanceerd backup-venster met een aanbevolen UPS nabij',
    bandHeavy: 'kort backup-venster; overweeg een grotere batterij of verlaag de belasting nabij',
    summaryPrefix: 'Deze opstelling heeft een',
  },
};
