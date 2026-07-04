import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebUsbSerialMonitorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'web-usb-seriele-monitor';
const title = 'WebUSB Seriele Monitor';
const description = 'Verbind met USB seriele hardware vanuit de browser, lees live terminaluitvoer, verstuur commando s en debug Arduino, ESP32, RP2040 en maker boards zonder een desktopterminal te installeren.';

const faqData = [
  {
    question: 'Werkt deze seriele monitor met Arduino, ESP32 en Raspberry Pi Pico boards?',
    answer: 'Ja, wanneer het board een door Web Serial ondersteunde USB seriele interface biedt en de browser op Chromium is gebaseerd. Gangbare Arduino, ESP32, RP2040, CH340, CP210x en FTDI adapters werken meestal nadat de gebruiker toestemming heeft verleend.',
  },
  {
    question: 'Waarom heet dit WebUSB als het Web Serial gebruikt?',
    answer: 'De meeste maker boards maken via USB verbinding, maar browsertoegang tot de terminal wordt geboden door de Web Serial API. WebUSB is van lager niveau en niet de juiste abstractie voor een eenvoudige UART terminal.',
  },
  {
    question: 'Kan een website zonder toestemming toegang krijgen tot mijn seriele apparaten?',
    answer: 'Nee. De browser vereist een gebruikersklik en een native apparaatkiezer voordat een site een seriele poort kan openen. Deze tool slaat geen terminallogs of apparaatidentificaties op.',
  },
  {
    question: 'Welke browser moet ik gebruiken voor een web seriele terminal?',
    answer: 'Gebruik Chrome, Edge of een andere op Chromium gebaseerde browser via HTTPS of localhost. Firefox, Safari en veel iOS browsers bieden de Web Serial API niet.',
  },
  {
    question: 'Welke baudrate moet ik kiezen?',
    answer: 'Kies de baudrate die in uw firmware is geconfigureerd. Arduino voorbeelden gebruiken vaak 9600 of 115200, terwijl snellere logs, bootloaders en snelle sensorstromen 230400, 460800 of 921600 kunnen gebruiken.',
  },
];

const howToData = [
  {
    name: 'Sluit het USB seriele apparaat aan',
    text: 'Sluit het board of de adapter aan en sluit alle andere seriele terminals die de poort mogelijk al open hebben.',
  },
  {
    name: 'Selecteer de baudrate',
    text: 'Kies dezelfde baudrate die door de firmware wordt gebruikt, zoals 115200 voor veel Arduino, ESP32 en RP2040 sketches.',
  },
  {
    name: 'Verleen browsertoestemming',
    text: 'Druk op Verbinden, kies het seriele apparaat in de browserkiezer en sta de pagina toe de poort te openen.',
  },
  {
    name: 'Lees en verzend terminalgegevens',
    text: 'Bekijk inkomende logs in de terminal, verstuur commando s met optionele CRLF regeleinden en wis of pauzeer de live uitvoer wanneer nodig.',
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

export const content: ToolLocaleContent<WebUsbSerialMonitorUI> = {
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
      text: 'Online Seriele Monitor voor USB Maker Hardware',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze browser seriele monitor opent een USB seriele poort rechtstreeks vanuit Chrome of Edge en streamt vervolgens tekst van microcontrollers, USB UART bruggen, ontwikkelborden, bootloaders, testopstellingen, sensoren en laboratoriumhardware. Het is ontworpen voor snelle diagnostiek wanneer u een seriele console nodig hebt maar geen desktop IDE of terminalapplicatie wilt installeren.',
    },
    {
      type: 'message',
      title: 'Browser toestemmingsgrens',
      html: 'De pagina kan uw seriele apparaten niet stilzwijgend opsommen of openen. Toegang begint pas nadat u op Verbinden drukt en een poort kiest in de browserkiezer. Terminalgegevens blijven in het huidige tabblad tenzij u ze zelf kopieert.',
    },
    {
      type: 'stats',
      items: [
        { value: '9600-921600', label: 'gangbare baud voorinstellingen' },
        { value: 'CRLF', label: 'optionele commando afsluiting' },
        { value: 'lokaal', label: 'terminalsessie' },
      ],
    },
    {
      type: 'title',
      text: 'Wanneer een Web Seriele Terminal Nuttig Is',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Controleren van opstartberichten van Arduino, ESP32, ESP8266, RP2040, STM32 of aangepaste firmware.',
        'Verzenden van AT commando s naar modem, GPS, LoRa, Wi-Fi, Bluetooth of mobiele modules via een USB UART adapter.',
        'Lezen van sensoruitvoer van een fabriekstestopstelling, klaslokaal lab, robotica controller of bankprototype.',
        'Verifieren dat een USB seriele brugdriver, kabel, boardvoeding en firmware baudrate allemaal samenwerken.',
        'Verzamelen van een snel foutenlogboek voordat u een bug meldt of hardwareondersteuning aanvraagt.',
      ],
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Web seriele monitor',
          description: 'Het beste voor snelle ondersteuning, klaslokaalinstructies, velddiagnostiek en maker workflows waarbij het openen van een URL sneller is dan het installeren van een IDE.',
        },
        {
          title: 'Desktop terminal',
          description: 'Beter voor binaire protocollen, lange opnamesessies, scripting, hardware flow control, macro s en omgevingen waar browser API s zijn geblokkeerd.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Baudrate en Regeleinde Checklist',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Instelling', 'Gangbare keuze', 'Wat misgaat als het fout is'],
      rows: [
        ['Baudrate', '115200 voor veel moderne boards, 9600 voor oudere voorbeelden.', 'Leesbare tekst verandert in willekeurige symbolen of er verschijnt geen nuttig logboek.'],
        ['Regeleinde', 'CRLF voor veel commando parsers, geen einde voor ruwe tekenprotocollen.', 'Commando s worden genegeerd omdat de firmware wacht op een afsluiter.'],
        ['Exclusieve poorttoegang', 'Sluit Arduino Serial Monitor, PuTTY, screen, minicom of leverancierstools.', 'De browserkiezer opent de poort maar lezen of schrijven mislukt.'],
        ['Beveiligde context', 'HTTPS of localhost.', 'De Serial API ontbreekt zelfs in een ondersteunde browser.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Geen seriele uitvoer?',
      html: 'Controleer of het board is gevoed en de USB kabel gegevens ondersteunt, niet alleen opladen. Probeer 9600, 57600 en 115200 als u de firmware baudrate niet weet. Druk op reset na het verbinden omdat veel boards alleen opstartlogs afdrukken tijdens het opstarten. Sluit andere software die de seriele poort mogelijk nog bezit en installeer het besturingssysteemstuurprogramma voor CH340, CP210x, FTDI of de boardleverancier als het apparaat nooit verschijnt.',
    },
    {
      type: 'title',
      text: 'Privacy, Beveiliging en Beperkingen',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Web Serial sterke punten en beperkingen',
      items: [
        {
          pro: 'Geen desktopinstallatie voor eenvoudige seriele tekstdiagnostiek.',
          con: 'Vereist een op Chromium gebaseerde browser en een beveiligde context.',
        },
        {
          pro: 'Browserkiezer beperkt de toegang tot de specifieke poort die u kiest.',
          con: 'Niet bedoeld voor binaire protocolanalyzers of lange onbewaakte opnames.',
        },
        {
          pro: 'Werkt goed voor tekstlogboeken, opdrachtprompts en snelle hardwarecontroles.',
          con: 'Sommige bedrijfsbeleid, mobiele browsers en besturingssystemen blokkeren Web Serial.',
        },
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Serial is niet beschikbaar',
    unsupportedBody: 'Gebruik Chrome of Edge via HTTPS of localhost en zorg ervoor dat uw apparaat een USB seriele interface biedt.',
    secureContext: 'Web Serial vereist HTTPS of localhost. Herlaad deze pagina vanaf een beveiligde oorsprong en probeer opnieuw.',
    statusIdle: 'Kies een baudrate en verbind vervolgens een USB serieel apparaat',
    statusPermission: 'Wachten op de browser seriele poortkiezer',
    statusOpening: 'Seriele poort openen',
    statusConnected: 'Seriele poort verbonden',
    statusDisconnected: 'Seriele poort losgekoppeld',
    statusError: 'Seriele verbinding mislukt',
    connect: 'Serieel verbinden',
    disconnect: 'Verbinding verbreken',
    send: 'Verzenden',
    clear: 'Wissen',
    pause: 'Pauzeren',
    resume: 'Hervatten',
    baudRate: 'Baudrate',
    newline: 'CRLF toevoegen',
    inputPlaceholder: 'Typ een commando en druk op Enter',
    portFallback: 'Geen poort geselecteerd',
    portLabel: 'Poortidentiteit',
    connectedDeviceLabel: 'Verbonden apparaat',
    deviceNameFallback: 'USB serieel apparaat',
    transportLabel: 'Web Serial verbinding',
    bytesLabel: 'Bytes',
    linesLabel: 'Regels',
    privacyTitle: 'Toestemmingsgestuurd',
    privacyBody: 'De browser toont alleen het seriele apparaat dat u selecteert. Logs blijven in dit tabblad tenzij u ze kopieert.',
    emptyLog: 'Terminaluitvoer verschijnt hier nadat u een serieel apparaat hebt verbonden.',
    copied: 'Gekopieerd',
    copyLog: 'Kopieren',
    presetSlow: '9600',
    presetArduino: '115200',
    presetFast: '921600',
    terminalLabel: 'Live terminal',
    unknownUsbId: 'N/A',
    logDirectionRx: 'rx',
    logDirectionTx: 'tx',
    logDirectionSys: 'sys',
    vidPrefix: 'VID ',
    pidSeparator: ' / PID ',
    baudUnit: ' baud',
    vendorFtdi: 'FTDI USB Serial',
    vendorSilabs: 'Silicon Labs CP210x',
    vendorCh340: 'CH340 USB Serial',
    vendorArduinoUsb: 'Arduino USB Serial',
    vendorAdafruit: 'Adafruit USB Serial',
    vendorRp2040: 'Raspberry Pi RP2040',
    vendorEspressif: 'Espressif USB Serial',
    vendorOpenSource: 'Open Source USB Serial',
  },
};
