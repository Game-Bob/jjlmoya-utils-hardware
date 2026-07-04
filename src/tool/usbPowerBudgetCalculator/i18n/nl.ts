import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UsbPowerBudgetCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'usb-vermogensbudget-calculator';
const title = 'USB Vermogensbudget Calculator';
const description = 'Controleer of een USB-poort, lader, hub, kabel of USB-C PD-profiel je apparaten veilig kan voeden na reservemarge en kabelspanningsval.';

const faqData = [
  {
    question: 'Hoe weet ik of een USB-poort mijn apparaat kan voeden?',
    answer: 'Vergelijk het totale apparaatwattage met het USB-bronwattage, reserveer vervolgens marge en schat de kabelspanningsval. Een opstelling kan falen, zelfs wanneer het nominale wattage hoog lijkt als de kabel lang, dun of hoge stroom voert bij 5 volt.',
  },
  {
    question: 'Waarom is kabellengte belangrijk voor USB-voeding?',
    answer: 'Stroom die door koper vloeit, creëert spanningsval. Lange kabels en dunne geleiders hebben meer weerstand, dus het apparaat kan minder spanning ontvangen dan de lader levert. Dit is vooral belangrijk voor Raspberry Pi-boards, harde schijven, LED-strips, docks en busgevoede hubs.',
  },
  {
    question: 'Welke reservemarge moet ik gebruiken?',
    answer: 'Gebruik minimaal 20 procent voor normale elektronica, 30 procent voor motoren, drives, radio\'s of boards met piekbelastingen, en meer als de adapterkwaliteit onbekend is of het apparaat continu moet draaien.',
  },
  {
    question: 'Kan dit USB-C PD-onderhandelingstests vervangen?',
    answer: 'Nee. De calculator controleert het elektrische budget. Het verifieert niet of een lader, kabel-e-marker, apparaat of hub daadwerkelijk een specifiek Power Delivery-profiel onderhandelt.',
  },
];

const howToData = [
  { name: 'Kies een bronprofiel', text: 'Selecteer een veelvoorkomend USB- of USB-C PD-profiel, of bewerk spanning en stroom handmatig.' },
  { name: 'Beschrijf de kabel', text: 'Voer kabellengte en geleiderdikte in. Dunne draden met hoge AWG-nummers veroorzaken meer spanningsval.' },
  { name: 'Voeg de belasting toe', text: 'Voer één apparaatbelasting in watt in en het aantal apparaten dat dezelfde bron deelt.' },
  { name: 'Lees de status', text: 'Gebruik de status, kabelval, eindspanning, benutting en marge om te beslissen of de opstelling veilig is.' },
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

export const content: ToolLocaleContent<UsbPowerBudgetCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'USB-vermogen is een budget, geen label', level: 2 },
    {
      type: 'paragraph',
      html: 'Een USB-lader met 15 W, 45 W of 100 W beschrijft wat de bron onder de juiste omstandigheden kan bieden. Je apparaat ziet alleen het resultaat na protocolonderhandeling, stroomlimieten, kabelweerstand, connectorkwaliteit, hubverliezen en belastingspieken. Deze calculator richt zich op de praktische elektrische vraag: is er na kabelval en reservemarge genoeg vermogen over voor de hardware die je wilt gebruiken?',
    },
    {
      type: 'stats',
      items: [
        { label: 'USB 2.0 standaardstroom', value: '0,5 A' },
        { label: 'USB-C standaardmaximum bij 5 V', value: '3 A' },
        { label: 'Aanbevolen reserve', value: '20%+' },
      ],
    },
    { type: 'title', text: 'Hoe het resultaat te interpreteren', level: 3 },
    {
      type: 'table',
      headers: ['Status', 'Betekenis', 'Beste volgende stap'],
      rows: [
        ['Veilig', 'De belasting past binnen de broncapaciteit na de gekozen reserve en de geschatte apparaatspanning blijft gezond.', 'Gebruik de opstelling, maar houd warmte in de gaten als de adapter klein of ingesloten is.'],
        ['Krap', 'De belasting ligt dicht bij de gereserveerde limiet of de kabelval wordt betekenisvol.', 'Verkort de kabel, kies dikkere geleiders, verlaag de belasting of ga naar een hoger vermogensprofiel.'],
        ['Over budget', 'De belasting overschrijdt het bruikbare bronvermogen of de apparaatspanning is waarschijnlijk te laag.', 'Gebruik een sterkere lader, actieve hub, kortere kabel of een apparaat dat een hogere USB-C PD-spanning onderhandelt.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Als het wattage voldoende is maar het apparaat toch reset',
      html: '<p>De startstroom kan veel hoger zijn dan het gemiddelde wattage op een apparaatlabel. Een 5 V-voeding verliest sneller spanning dan een 20 V PD-profiel voor hetzelfde wattage omdat het meer stroom moet voeren. Veel goedkope kabels gebruiken dunne stroomgeleiders, zelfs als de buitenmantel er dik uitziet, en busgevoede hubs delen één upstream-budget over elk downstream-apparaat.</p>',
    },
    { type: 'title', text: 'Kabelspanningsval in eenvoudige termen', level: 3 },
    {
      type: 'paragraph',
      html: 'Spanningsval is het verlies dat ontstaat wanneer stroom door kabelweerstand vloeit. USB-voeding heeft twee geleiders in het stroompad, dus de calculator gebruikt de heen-en-teruglengte. Een kabel van één meter is elektrisch twee meter koper voor de stroomlus. Lagere AWG-nummers zijn dikker en meestal beter voor hoge stroombelastingen.',
    },
    {
      type: 'comparative',
      items: [
        { title: 'Korte dikke kabel', description: 'Het beste voor Raspberry Pi-boards, SSD-behuizingen, ontwikkelingskits en USB-C-docks die piekstroom trekken.' },
        { title: 'Lange dunne kabel', description: 'Acceptabel voor sensoren met laag vermogen of langzaam opladen, maar riskant voor drives, LED-belastingen en compute-boards.' },
        { title: 'Hogere spanning PD', description: 'Verlaagt de stroom voor hetzelfde wattage, wat het kabelverlies vermindert, maar alleen als de bron, kabel en apparaat dit onderhandelen.' },
      ],
    },
    {
      type: 'tip',
      title: 'Praktische regel',
      html: 'Als de calculator zegt dat de opstelling krap is, behandel het dan als een veldwaarschuwing. USB-storingen verschijnen vaak als willekeurige verbroken verbindingen, onderspanningsuitval, langzaam opladen, ruis in audio of opslagfouten voordat ze eruitzien als een duidelijk stroomprobleem.',
    },
    {
      type: 'summary',
      title: 'Waar deze calculator het beste voor is',
      items: [
        'Het plannen van USB-hubs, single-board computers, externe drives, ontwikkelborden, lampen, ventilatoren en kleine labopstellingen.',
        'Het vergelijken van USB 2.0-, USB 3.x-, USB-C- en USB Power Delivery-bronprofielen.',
        'Inschatten of een kabel te lang of te dun is voor een belasting.',
        'Een verstandige reserve kiezen voordat je een lader of actieve hub koopt.',
      ],
    },
  ],
  ui: {
    profileLabel: 'USB-bronprofiel',
    metricUnits: 'Metriek',
    imperialUnits: 'US',
    voltageLabel: 'Bronspanning (V)',
    currentLabel: 'Bronstroom (A)',
    cableLengthLabel: 'Kabellengte',
    wireGaugeLabel: 'Stroomdraaddikte',
    deviceLoadLabel: 'Belasting per apparaat (W)',
    devicesLabel: 'Apparaten',
    headroomLabel: 'Reserve (%)',
    sourcePower: 'Bronvermogen',
    requiredPower: 'Benodigd vermogen',
    cableDrop: 'Kabelval',
    deviceVoltage: 'Apparaatspanning',
    headroom: 'Reserve',
    utilization: 'Benutting',
    safeStatus: 'Vermogensbudget ziet er veilig uit',
    tightStatus: 'Vermogensbudget is krap',
    overStatus: 'Over budget of risico op spanningsval',
    safeAdvice: 'De belasting past met de gekozen reserve. Gebruik een kwaliteitskabel en controleer warmte tijdens lange gebruiksperiodes.',
    tightAdvice: 'Je zit dicht bij de limiet. Verkort de kabellengte, gebruik dikkere geleiders, verlaag de belasting of kies een sterker profiel.',
    overAdvice: 'Deze opstelling zal waarschijnlijk spanningsdaling of throttling ervaren. Gebruik een actieve hub, sterkere adapter of een USB-C PD-profiel met hogere spanning.',
    busLane: 'USB-bron',
    loadLane: 'Apparaatbelasting',
    cableLane: 'val',
    boardEyebrow: 'Live USB-stroompad',
    sourceSocket: 'Voedingsaansluiting',
    deviceSocket: 'Hardwarebelasting',
    energyFlow: 'energiestroom',
    reservedLabel: 'bruikbaar na reserve',
  },
};
