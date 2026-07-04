import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebUsbSerialMonitorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'web-usb-seriell-monitor';
const title = 'WebUSB Seriell Monitor';
const description = 'Anslut till USB-seriehårdvara från webbläsaren, läs live-terminalutdata, skicka kommandon och felsök Arduino, ESP32, RP2040 och maker-kort utan att installera en skrivbordsterminal.';

const faqData = [
  {
    question: 'Fungerar denna seriella monitor med Arduino, ESP32 och Raspberry Pi Pico-kort?',
    answer: 'Ja, när kortet exponerar ett USB-seriellt gränssnitt som stöds av Web Serial och webbläsaren är Chromium-baserad. Vanliga Arduino, ESP32, RP2040, CH340, CP210x och FTDI-adaptrar fungerar vanligtvis efter att användaren har gett tillstånd.',
  },
  {
    question: 'Varför kallas detta WebUSB om det använder Web Serial?',
    answer: 'De flesta maker-kort ansluter via USB, men webbläsarterminalåtkomst tillhandahålls av Web Serial API. WebUSB är på lägre nivå och är inte rätt abstraktion för en enkel UART-terminal.',
  },
  {
    question: 'Kan en webbplats komma åt mina seriella enheter utan tillstånd?',
    answer: 'Nej. Webbläsaren kräver ett användarklick och en inbyggd enhetsväljare innan en webbplats kan öppna en serieport. Detta verktyg lagrar inte terminalloggar eller enhetsidentifierare.',
  },
  {
    question: 'Vilken webbläsare ska jag använda för en webbseriell terminal?',
    answer: 'Använd Chrome, Edge eller en annan Chromium-baserad webbläsare via HTTPS eller localhost. Firefox, Safari och många iOS-webbläsare exponerar inte Web Serial API.',
  },
  {
    question: 'Vilken baudhastighet ska jag välja?',
    answer: 'Välj den baudhastighet som är konfigurerad i din firmware. Arduino-exempel använder ofta 9600 eller 115200, medan snabbare loggar, bootloaders och höghastighetssensorflöden kan använda 230400, 460800 eller 921600.',
  },
];

const howToData = [
  {
    name: 'Anslut USB-serieenheten',
    text: 'Anslut kortet eller adaptern och stäng alla andra seriella terminaler som redan kan ha porten öppen.',
  },
  {
    name: 'Välj baudhastighet',
    text: 'Välj samma baudhastighet som används av firmware, till exempel 115200 för många Arduino, ESP32 och RP2040-sketcher.',
  },
  {
    name: 'Ge webbläsartillstånd',
    text: 'Tryck på Anslut, välj serieenheten i webbläsarens väljare och tillåt sidan att öppna porten.',
  },
  {
    name: 'Läs och skicka terminaldata',
    text: 'Se inkommande loggar i terminalen, skicka kommandon med valfria CRLF-radslut och rensa eller pausa liveutmatningen vid behov.',
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
  inLanguage: 'sv',
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
      text: 'Online Seriell Monitor för USB Maker-hårdvara',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna webbläsarseriemonitor öppnar en USB-serieport direkt från Chrome eller Edge och strömmar sedan text från mikrokontroller, USB UART-bryggor, utvecklingskort, bootloaders, testfixturer, sensorer och labbhårdvara. Den är utformad för snabb diagnostik när du behöver en seriekonsol men inte vill installera en skrivbords-IDE eller terminalapplikation.',
    },
    {
      type: 'message',
      title: 'Webbläsarens tillståndsgräns',
      html: 'Sidan kan inte tyst räkna upp eller öppna dina seriella enheter. Åtkomst börjar först efter att du har tryckt på Anslut och valt en port i webbläsarens väljare. Terminaldata stannar i den aktuella fliken om du inte kopierar dem själv.',
    },
    {
      type: 'stats',
      items: [
        { value: '9600-921600', label: 'vanliga baud-förinställningar' },
        { value: 'CRLF', label: 'valfritt kommandoavslut' },
        { value: 'lokal', label: 'terminalsession' },
      ],
    },
    {
      type: 'title',
      text: 'När en Webbseriell Terminal är Användbar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Kontrollera startmeddelanden från Arduino, ESP32, ESP8266, RP2040, STM32 eller anpassad firmware.',
        'Skicka AT-kommandon till modem, GPS, LoRa, Wi-Fi, Bluetooth eller cellulära moduler via en USB UART-adapter.',
        'Läsa sensorutdata från fabrikstestfixtur, klassrumslabb, robotkontroller eller bänkprototyp.',
        'Verifiera att en USB-seriebryggdrivrutin, kabel, kortström och firmware-baudhastighet alla fungerar tillsammans.',
        'Samla en snabb fellogg innan du rapporterar en bugg eller begär hårdvarusupport.',
      ],
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Webbseriell monitor',
          description: 'Bäst för snabb support, klassrumsinstruktioner, fältdiagnostik och maker-arbetsflöden där det går snabbare att öppna en URL än att installera en IDE.',
        },
        {
          title: 'Skrivbordsterminal',
          description: 'Bättre för binära protokoll, långa inspelningssessioner, skriptning, hårdvaruflödeskontroll, makron och miljöer där webbläsar-API:er är blockerade.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Checklista för Baudhastighet och Radslut',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Inställning', 'Typiskt val', 'Vad som går fel när det är fel'],
      rows: [
        ['Baudhastighet', '115200 för många moderna kort, 9600 för äldre exempel.', 'Läsbar text blir slumpmässiga symboler eller ingen användbar logg visas.'],
        ['Radslut', 'CRLF för många kommandotolkar, inget slut för råa teckenprotokoll.', 'Kommandon ignoreras eftersom firmware väntar på en terminator.'],
        ['Exklusiv portåtkomst', 'Stäng Arduino Serial Monitor, PuTTY, screen, minicom eller leverantörsverktyg.', 'Webbläsarens väljare öppnar porten men läsning eller skrivning misslyckas.'],
        ['Säker kontext', 'HTTPS eller localhost.', 'Serial API saknas även i en webbläsare som stöds.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ingen seriell utdata?',
      html: 'Bekräfta att kortet är strömsatt och att USB-kabeln stöder data, inte bara laddning. Prova 9600, 57600 och 115200 om du inte känner till firmware-baudhastigheten. Tryck på reset efter anslutning eftersom många kort skriver ut startloggar endast vid uppstart. Stäng annan programvara som fortfarande kan äga serieporten och installera operativsystemets drivrutin för CH340, CP210x, FTDI eller kortleverantören om enheten aldrig visas.',
    },
    {
      type: 'title',
      text: 'Integritet, Säkerhet och Begränsningar',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Web Serials styrkor och begränsningar',
      items: [
        {
          pro: 'Ingen skrivbordsinstallation för grundläggande seriell textdiagnostik.',
          con: 'Kräver en Chromium-baserad webbläsare och en säker kontext.',
        },
        {
          pro: 'Webbläsarens väljare begränsar åtkomsten till den specifika port du väljer.',
          con: 'Inte avsett för binära protokollanalysatorer eller långa obevakade inspelningar.',
        },
        {
          pro: 'Fungerar bra för textloggar, kommandotolkar och snabba hårdvarukontroller.',
          con: 'Vissa företagspolicyer, mobila webbläsare och operativsystem blockerar Web Serial.',
        },
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Serial är inte tillgängligt',
    unsupportedBody: 'Använd Chrome eller Edge via HTTPS eller localhost och se till att din enhet exponerar ett USB-seriellt gränssnitt.',
    secureContext: 'Web Serial kräver HTTPS eller localhost. Ladda om denna sida från en säker källa och försök igen.',
    statusIdle: 'Välj en baudhastighet och anslut sedan en USB-serieenhet',
    statusPermission: 'Väntar på webbläsarens serieportväljare',
    statusOpening: 'Öppnar serieport',
    statusConnected: 'Serieport ansluten',
    statusDisconnected: 'Serieport frånkopplad',
    statusError: 'Serieanslutning misslyckades',
    connect: 'Anslut Serial',
    disconnect: 'Koppla från',
    send: 'Skicka',
    clear: 'Rensa',
    pause: 'Paus',
    resume: 'Återuppta',
    baudRate: 'Baudhastighet',
    newline: 'Lägg till CRLF',
    inputPlaceholder: 'Skriv ett kommando och tryck sedan på Enter',
    portFallback: 'Ingen port vald',
    portLabel: 'Portidentitet',
    connectedDeviceLabel: 'Ansluten enhet',
    deviceNameFallback: 'USB-serieenhet',
    transportLabel: 'Web Serial-länk',
    bytesLabel: 'Byte',
    linesLabel: 'Rader',
    privacyTitle: 'Behörighetsstyrd',
    privacyBody: 'Webbläsaren exponerar endast den seriella enhet du väljer. Loggar stannar i denna flik om du inte kopierar dem.',
    emptyLog: 'Terminalutdata visas här efter att du har anslutit en seriell enhet.',
    copied: 'Kopierat',
    copyLog: 'Kopiera',
    presetSlow: '9600',
    presetArduino: '115200',
    presetFast: '921600',
    terminalLabel: 'Live-terminal',
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
