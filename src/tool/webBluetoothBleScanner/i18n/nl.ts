import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebBluetoothBleScannerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'verkenner-ble-web-bluetooth';
const title = 'Web Bluetooth BLE Verkenner';
const description = 'Scan Bluetooth Low Energy apparaten in de buurt vanuit de browser, inspecteer blootgestelde GATT service UUIDs en test of uw IoT- of wearable-hardware detecteerbaar is.';

const faqData = [
  {
    question: 'Kan een website zonder toestemming Bluetooth-apparaten scannen?',
    answer: 'Nee. Web Bluetooth vereist altijd een gebruikersgebaar en een browsertoestemmingskiezer. Deze tool ziet alleen het apparaat dat u expliciet selecteert en slaat geen MAC-adressen, apparaat-IDs of scanresultaten op.',
  },
  {
    question: 'Waarom toont de scanner niet elk BLE-apparaat in de buurt?',
    answer: 'Browsers stellen Bluetooth opzettelijk bloot via een toestemmingskiezer, niet als een stille achtergrondscanner. Sommige apparaten stoppen ook met adverteren, verbergen hun naam, vereisen koppeling of stellen diensten alleen beschikbaar na een verbinding.',
  },
  {
    question: 'Welke browsers ondersteunen Web Bluetooth?',
    answer: 'Web Bluetooth wordt het best ondersteund in Chromium-gebaseerde desktopbrowsers zoals Chrome en Edge. Het vereist meestal HTTPS of localhost en is niet beschikbaar in veel Firefox-, Safari- en iOS-browserconfiguraties.',
  },
  {
    question: 'Kan dit privésensorgegevens van een wearable lezen?',
    answer: 'Alleen als het apparaat compatibele GATT-services blootstelt en de browser toegang verleent. Veel commerciële wearables vereisen leveranciersapps, versleuteling, bonding of propriëtaire kenmerken die een generieke browserscanner niet kan decoderen.',
  },
  {
    question: 'Wat zijn GATT-service-UUIDs?',
    answer: 'Een GATT-service-UUID identificeert een groep Bluetooth Low Energy functies, zoals Batterijservice, Hartslag, Apparaatinformatie of een aangepaste leveranciersservice die wordt gebruikt door maker- en IoT-hardware.',
  },
];

const howToData = [
  {
    name: 'Gebruik een compatibele browser',
    text: 'Open de tool in Chrome of Edge via HTTPS of localhost en zorg ervoor dat Bluetooth is ingeschakeld op de computer of telefoon.',
  },
  {
    name: 'Zet de hardware in advertentiemodus',
    text: 'Activeer het BLE-apparaat, schakel het uit en weer in, druk op de koppelingsknop of open de advertentiemodus zodat het in de browsertoestemmingskiezer verschijnt.',
  },
  {
    name: 'Scan de omgeving',
    text: 'Druk op Omgeving scannen en selecteer het BLE-apparaat dat u wilt inspecteren. De browsertoestemmingsdialoog bepaalt precies welk apparaat zichtbaar wordt voor de pagina.',
  },
  {
    name: 'Lees de GATT-services',
    text: 'Controleer na verbinding de service-UUID-kaarten om standaard Bluetooth-profielen, aangepaste firmwareservices en of het apparaat het verwachte gegevenspad blootstelt te identificeren.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<WebBluetoothBleScannerUI> = {
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
      text: 'BLE Tester online voor IoT, Wearables en Maker Hardware',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze Web Bluetooth scanner stelt u in staat te testen of een nabijgelegen Bluetooth Low Energy apparaat detecteerbaar is vanuit een browser en welke GATT-services het blootstelt na het verlenen van toestemming. Het is nuttig bij het debuggen van ESP32 firmware, Arduino BLE schetsen, slimme sensoren, fitnesswearables, toetsenborden, aangepaste bakens, omgevingsmonitors en prototypehardware voordat u een native mobiele app bouwt.',
    },
    {
      type: 'message',
      title: 'Privacy model',
      html: 'GameBob slaat geen MAC-adressen, apparaat-IDs, namen, UUIDs, signaalgegevens of scangeschiedenis op. De browsertoestemmingskiezer bepaalt welk apparaat de pagina kan raadplegen en resultaten blijven in uw huidige browsersessie.',
    },
    {
      type: 'table',
      headers: ['Wat u ziet', 'Wat het betekent', 'Wat u vervolgens moet controleren'],
      rows: [
        ['Apparaatnaam', 'De geadverteerde Bluetooth-naam, als de hardware er een uitzendt.', 'Als het leeg is, controleer dan de firmware-advertentiegegevens of gebruik een bekende naamvoorvoegsel tijdens het testen.'],
        ['Apparaat-ID', 'Een browser-gebonden identificatie, niet het ruwe openbare MAC-adres.', 'Gebruik het alleen voor deze browsersessie; behandel het niet als een universeel hardware serienummer.'],
        ['GATT-service-UUIDs', 'De servicegroepen die worden blootgesteld na het accepteren van de verbinding.', 'Vergelijk standaard-UUIDs met de Bluetooth SIG-lijst of uw firmware-servicetabel.'],
        ['Aangepaste service', 'Een leverancierspecifieke of projectspecifieke UUID.', 'Open uw firmware, mobiele app-profiel of BLE-documentatie om kenmerken en rechten te mappen.'],
      ],
    },
    {
      type: 'title',
      text: 'Waarom Browser Bluetooth Scannen Anders Is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Native BLE scanner apps tonen vaak continue advertenties van veel nabijgelegen apparaten. Web Bluetooth is opzettelijk strenger: de pagina moet worden geopend in een veilige context, de scan moet starten vanuit een gebruikersklik en de browser toont een toestemmingskiezer. Dit beschermt gebruikers tegen stille tracking terwijl ontwikkelaars nog steeds een praktische manier hebben om verbinding te maken met geselecteerde BLE-hardware vanuit JavaScript.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Web Bluetooth scanner',
          description: 'Het beste voor snelle firmwarevalidatie, demo\'s, ondersteuningsstromen, klassikale labs en browsergebaseerde diagnostiek waar installatiefrictie belangrijk is.',
        },
        {
          title: 'Native BLE app',
          description: 'Beter voor achtergrondscannen, RSSI-logging, koppelingsworkflows, versleutelde leveranciersprotocollen, grote kenmerkenbomen en langdurige velddiagnostiek.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Veelvoorkomende Redenen Waarom een BLE Apparaat Niet Verschijnt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bluetooth is uitgeschakeld op besturingssysteemniveau of de browser heeft geen Bluetooth-toestemming.',
        'Het apparaat is verbonden met een andere telefoon, laptop, leveranciersapp of gateway en is gestopt met adverteren.',
        'De hardware adverteert alleen gedurende een kort venster na het opstarten of na het indrukken van een koppelingsknop.',
        'De browser is niet Chromium-gebaseerd, de pagina wordt niet via HTTPS aangeboden of het platform blokkeert Web Bluetooth.',
        'De firmware adverteert fabrikantgegevens maar verbergt de lokale naam, dus de kiezer kan een naamloos apparaat tonen.',
        'Het apparaat vereist bonding, versleuteling of propriëtaire authenticatie voordat services leesbaar worden.',
      ],
    },
    {
      type: 'title',
      text: 'Hoe GATT-UUIDs te Gebruiken Tijdens Debuggen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een succesvolle verbinding met service-UUIDs vertelt u dat de browser het randapparaat kan bereiken en dat het randapparaat ten minste een deel van zijn GATT-tabel blootstelt. Standaardservices zoals Batterijservice, Apparaatinformatie, Hartslag, Human Interface Device en Omgevingsdetectie zijn gemakkelijk te herkennen. Aangepaste UUIDs wijzen meestal naar firmwarespecifieke functies en hebben de kenmerkenkaart uit uw broncode of leveranciersdocumentatie nodig.',
    },
    {
      type: 'table',
      headers: ['Symptoom', 'Waarschijnlijke oorzaak', 'Praktische oplossing'],
      rows: [
        ['Toestemmingskiezer is leeg', 'Apparaat adverteert niet of browserondersteuning ontbreekt.', 'Herstart het apparaat, schakel de koppelingsmodus in, kom dichterbij of probeer opnieuw in Chrome/Edge.'],
        ['Verbinding mislukt onmiddellijk', 'Apparaat is bezet, buiten bereik of weigert de browserverbinding.', 'Verbreek leveranciersapps en houd het randapparaat dicht bij de computer.'],
        ['Geen services vermeld', 'GATT is niet beschikbaar, services zijn verborgen of toegang is niet verleend voor die UUIDs.', 'Voeg bekende optionele services toe in firmwaretests of inspecteer met een native BLE-tool.'],
        ['Alleen aangepaste UUIDs verschijnen', 'De hardware gebruikt leverancierspecifieke firmwareservices.', 'Wijs UUIDs toe aan broncodeconstanten en documenteer lees-/schrijfrechten van kenmerken.'],
      ],
    },
    {
      type: 'title',
      text: 'Beveiligings- en Privacygrenzen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'De pagina kan niet stilzwijgend nabijgelegen Bluetooth-apparaten op de achtergrond verzamelen.',
        'De browser kan echte MAC-adressen verbergen en in plaats daarvan een gebonden apparaat-ID verstrekken.',
        'Toegang begint pas nadat de gebruiker op de scanknop klikt en een apparaat kiest.',
        'Resultaten worden niet geüpload of opgeslagen door GameBob.',
        'Gevoelige commerciële apparaten kunnen versleuteling of een leverancierskoppelingsstroom vereisen die deze generieke scanner niet kan omzeilen.',
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Bluetooth is niet beschikbaar',
    unsupportedBody: 'Probeer Chrome of Edge op desktop of Android, schakel Bluetooth in en open de pagina via HTTPS of localhost.',
    secureContext: 'Web Bluetooth vereist een beveiligde HTTPS-pagina of localhost. Herlaad de tool vanaf een veilige oorsprong en probeer opnieuw.',
    scanButton: 'Omgeving scannen',
    scanning: 'Scannen',
    reconnect: 'Opnieuw scannen',
    disconnect: 'Verbreken',
    privacyTitle: 'Privacy door ontwerp',
    privacyBody: 'GameBob slaat geen MAC-adressen, apparaat-IDs, namen, UUIDs of scangeschiedenis op. De browser stelt alleen het apparaat bloot dat u kiest.',
    deviceLabel: 'Geselecteerd apparaat',
    nameFallback: 'Naamloos BLE apparaat',
    idLabel: 'Browser apparaat-ID',
    servicesLabel: 'GATT services',
    noServices: 'Er zijn geen leesbare primaire services geretourneerd voor deze verbinding.',
    statusIdle: 'Klaar om nabijgelegen BLE hardware te scannen',
    statusPermission: 'Wachten op de browsertoestemmingskiezer',
    statusConnecting: 'Verbinden met het geselecteerde BLE apparaat',
    statusConnected: 'Verbonden en services geladen',
    statusDisconnected: 'Apparaat verbroken',
    statusCancelled: 'Er is geen BLE apparaat geselecteerd, of Bluetooth is uitgeschakeld/niet beschikbaar op dit apparaat.',
    statusUnavailable: 'Bluetooth lijkt uitgeschakeld, geblokkeerd of ontbreekt op dit apparaat. Schakel Bluetooth in of probeer vanaf hardware met een BLE adapter.',
    statusError: 'Bluetooth scan mislukt',
    signalUnknown: 'Signaalsterkte wordt bepaald door de browserkiezer',
    gattUnavailable: 'Dit apparaat heeft geen GATT server aan de browser blootgesteld',
    customServiceName: 'Aangepaste of leverancierspecifieke service',
    serviceGenericAccess: 'Generieke Toegang',
    serviceGenericAttribute: 'Generiek Attribuut',
    serviceDeviceInformation: 'Apparaatinformatie',
    serviceHeartRate: 'Hartslag',
    serviceBattery: 'Batterijservice',
    serviceHumanInterfaceDevice: 'Human Interface Device',
    serviceCyclingSpeedCadence: 'Fietssnelheid en Cadans',
    serviceEnvironmentalSensing: 'Omgevingsdetectie',
    serviceUserData: 'Gebruikersgegevens',
    serviceFitnessMachine: 'Fitnessapparaat',
    uuidHelp: 'UUIDs identificeren Bluetooth-services. Standaardservices worden automatisch benoemd; leverancierspecifieke UUIDs hebben uw firmware- of apparaatdocumentatie nodig.',
    compatibilityHint: 'Werkt het beste in Chromium-gebaseerde browsers met Bluetooth ingeschakeld. Web Bluetooth is opzettelijk toestemmingsbeperkt en toont mogelijk niet elke nabijgelegen adverteerder.',
    serviceCountSingular: 'service',
    serviceCountPlural: 'services',
  },
};
