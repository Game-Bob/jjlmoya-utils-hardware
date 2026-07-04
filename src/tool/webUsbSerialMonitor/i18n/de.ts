import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebUsbSerialMonitorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'web-usb-serieller-monitor';
const title = 'WebUSB Serieller Monitor';
const description = 'Verbinden Sie sich vom Browser aus mit USB-Seriell-Hardware, lesen Sie Live-Terminalausgaben, senden Sie Befehle und debuggen Sie Arduino, ESP32, RP2040 und Maker-Boards ohne Installation eines Desktop-Terminals.';

const faqData = [
  {
    question: 'Funktioniert dieser serielle Monitor mit Arduino, ESP32 und Raspberry Pi Pico Boards?',
    answer: 'Ja, wenn das Board eine von Web Serial unterstützte USB-Seriell-Schnittstelle bereitstellt und der Browser Chromium-basiert ist. Gängige Arduino, ESP32, RP2040, CH340, CP210x und FTDI Adapter funktionieren in der Regel, nachdem der Benutzer die Berechtigung erteilt hat.',
  },
  {
    question: 'Warum heißt das WebUSB, wenn es Web Serial verwendet?',
    answer: 'Die meisten Maker-Boards verbinden sich über USB, aber der Browser-Terminalzugriff wird von der Web Serial API bereitgestellt. WebUSB ist niedriger angesiedelt und nicht die richtige Abstraktion für ein einfaches UART-Terminal.',
  },
  {
    question: 'Kann eine Website ohne Erlaubnis auf meine seriellen Geräte zugreifen?',
    answer: 'Nein. Der Browser erfordert einen Benutzerklick und eine native Geräteauswahl, bevor eine Seite einen seriellen Port öffnen kann. Dieses Tool speichert keine Terminalprotokolle oder Gerätekennungen.',
  },
  {
    question: 'Welchen Browser sollte ich für ein Web-Seriell-Terminal verwenden?',
    answer: 'Verwenden Sie Chrome, Edge oder einen anderen Chromium-basierten Browser über HTTPS oder localhost. Firefox, Safari und viele iOS-Browser stellen die Web Serial API nicht zur Verfügung.',
  },
  {
    question: 'Welche Baudrate sollte ich wählen?',
    answer: 'Wählen Sie die in Ihrer Firmware konfigurierte Baudrate. Arduino-Beispiele verwenden oft 9600 oder 115200, während schnellere Protokolle, Bootloader und hochratige Sensorstreams 230400, 460800 oder 921600 verwenden können.',
  },
];

const howToData = [
  {
    name: 'Das USB-Seriell-Gerät anschließen',
    text: 'Schließen Sie das Board oder den Adapter an und schließen Sie alle anderen seriellen Terminals, die den Port möglicherweise bereits geöffnet haben.',
  },
  {
    name: 'Die Baudrate auswählen',
    text: 'Wählen Sie dieselbe Baudrate, die von der Firmware verwendet wird, z. B. 115200 für viele Arduino, ESP32 und RP2040 Sketche.',
  },
  {
    name: 'Browser-Berechtigung erteilen',
    text: 'Drücken Sie Verbinden, wählen Sie das serielle Gerät im Browser-Auswahldialog und erlauben Sie der Seite, den Port zu öffnen.',
  },
  {
    name: 'Terminaldaten lesen und senden',
    text: 'Beobachten Sie eingehende Protokolle im Terminal, senden Sie Befehle mit optionalen CRLF-Zeilenenden und löschen oder pausieren Sie die Live-Ausgabe bei Bedarf.',
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
  inLanguage: 'de',
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
      text: 'Online Serieller Monitor für USB Maker Hardware',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieser Browser-Seriell-Monitor öffnet einen USB-Seriell-Port direkt aus Chrome oder Edge und streamt dann Text von Mikrocontrollern, USB-UART-Brücken, Entwicklungsboards, Bootloadern, Testvorrichtungen, Sensoren und Laborhardware. Er ist für schnelle Diagnosen konzipiert, wenn Sie eine serielle Konsole benötigen, aber keine Desktop-IDE oder Terminalanwendung installieren möchten.',
    },
    {
      type: 'message',
      title: 'Browser Berechtigungsgrenze',
      html: 'Die Seite kann Ihre seriellen Geräte nicht stillschweigend auflisten oder öffnen. Der Zugriff beginnt erst, nachdem Sie Verbinden drücken und einen Port im Browser-Auswahldialog auswählen. Terminaldaten bleiben im aktuellen Tab, es sei denn, Sie kopieren sie selbst.',
    },
    {
      type: 'stats',
      items: [
        { value: '9600-921600', label: 'übliche Baud-Voreinstellungen' },
        { value: 'CRLF', label: 'optionaler Befehlsabschluss' },
        { value: 'lokal', label: 'Terminalsitzung' },
      ],
    },
    {
      type: 'title',
      text: 'Wann ein Web-Seriell-Terminal nützlich ist',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Überprüfen von Boot-Meldungen von Arduino, ESP32, ESP8266, RP2040, STM32 oder benutzerdefinierter Firmware.',
        'Senden von AT-Befehlen an Modem, GPS, LoRa, Wi-Fi, Bluetooth oder Mobilfunkmodule über einen USB-UART-Adapter.',
        'Lesen von Sensorausgaben von einem Werksprüfstand, Klassenraumlabor, Robotik-Controller oder Tischprototyp.',
        'Überprüfen, ob ein USB-Seriell-Brückentreiber, Kabel, Board-Stromversorgung und Firmware-Baudrate alle zusammen funktionieren.',
        'Sammeln eines schnellen Fehlerprotokolls vor dem Einreichen eines Bugs oder der Anfrage von Hardware-Support.',
      ],
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Web Seriell Monitor',
          description: 'Am besten für schnellen Support, Unterrichtsanleitungen, Felddiagnosen und Maker-Workflows, bei denen das Öffnen einer URL schneller ist als die Installation einer IDE.',
        },
        {
          title: 'Desktop Terminal',
          description: 'Besser für Binärprotokolle, lange Aufzeichnungssitzungen, Skripterstellung, Hardware-Flusskontrolle, Makros und Umgebungen, in denen Browser-APIs blockiert sind.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Baudrate und Zeilenende Checkliste',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Einstellung', 'Typische Wahl', 'Was schief geht, wenn es falsch ist'],
      rows: [
        ['Baudrate', '115200 für viele moderne Boards, 9600 für ältere Beispiele.', 'Lesbarer Text wird zu zufälligen Symbolen oder es erscheint kein nützliches Protokoll.'],
        ['Zeilenende', 'CRLF für viele Befehlsparser, kein Ende für rohe Zeichenprotokolle.', 'Befehle werden ignoriert, weil die Firmware auf einen Abschluss wartet.'],
        ['Exklusiver Portzugriff', 'Arduino Serial Monitor, PuTTY, screen, minicom oder Herstellertools schließen.', 'Der Browser-Auswahldialog öffnet den Port, aber Lesen oder Schreiben schlägt fehl.'],
        ['Sicherer Kontext', 'HTTPS oder localhost.', 'Die Serial API fehlt selbst in einem unterstützten Browser.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Keine serielle Ausgabe?',
      html: 'Stellen Sie sicher, dass das Board mit Strom versorgt wird und das USB-Kabel Daten unterstützt, nicht nur Laden. Versuchen Sie 9600, 57600 und 115200, wenn Sie die Firmware-Baudrate nicht kennen. Drücken Sie nach dem Verbinden Reset, da viele Boards Boot-Protokolle nur beim Start ausgeben. Schließen Sie andere Software, die den seriellen Port noch besitzen könnte, und installieren Sie den Betriebssystemtreiber für CH340, CP210x, FTDI oder den Board-Hersteller, wenn das Gerät nie erscheint.',
    },
    {
      type: 'title',
      text: 'Datenschutz, Sicherheit und Grenzen',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Web Serial Stärken und Grenzen',
      items: [
        {
          pro: 'Keine Desktop-Installation für einfache serielle Textdiagnosen.',
          con: 'Erfordert einen Chromium-basierten Browser und einen sicheren Kontext.',
        },
        {
          pro: 'Browser-Auswahldialog beschränkt den Zugriff auf den von Ihnen gewählten Port.',
          con: 'Nicht für binäre Protokollanalysatoren oder lange unbeaufsichtigte Aufzeichnungen gedacht.',
        },
        {
          pro: 'Funktioniert gut für Textprotokolle, Eingabeaufforderungen und schnelle Hardwareprüfungen.',
          con: 'Einige Unternehmensrichtlinien, mobile Browser und Betriebssysteme blockieren Web Serial.',
        },
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Serial ist nicht verfügbar',
    unsupportedBody: 'Verwenden Sie Chrome oder Edge über HTTPS oder localhost und stellen Sie sicher, dass Ihr Gerät eine USB-Seriell-Schnittstelle bereitstellt.',
    secureContext: 'Web Serial erfordert HTTPS oder localhost. Laden Sie diese Seite von einer sicheren Herkunft neu und versuchen Sie es erneut.',
    statusIdle: 'Wählen Sie eine Baudrate und verbinden Sie dann ein USB-Seriell-Gerät',
    statusPermission: 'Warten auf den Browser-Seriell-Port-Auswahldialog',
    statusOpening: 'Seriellen Port öffnen',
    statusConnected: 'Serieller Port verbunden',
    statusDisconnected: 'Serieller Port getrennt',
    statusError: 'Serielle Verbindung fehlgeschlagen',
    connect: 'Seriell verbinden',
    disconnect: 'Trennen',
    send: 'Senden',
    clear: 'Löschen',
    pause: 'Pause',
    resume: 'Fortsetzen',
    baudRate: 'Baudrate',
    newline: 'CRLF anhängen',
    inputPlaceholder: 'Befehl eingeben, dann Enter drücken',
    portFallback: 'Kein Port ausgewählt',
    portLabel: 'Port-Identität',
    connectedDeviceLabel: 'Verbundenes Gerät',
    deviceNameFallback: 'USB-Seriell-Gerät',
    transportLabel: 'Web Serial Verbindung',
    bytesLabel: 'Bytes',
    linesLabel: 'Zeilen',
    privacyTitle: 'Berechtigungsgesteuert',
    privacyBody: 'Der Browser zeigt nur das von Ihnen ausgewählte serielle Gerät an. Protokolle bleiben in diesem Tab, es sei denn, Sie kopieren sie.',
    emptyLog: 'Die Terminalausgabe erscheint hier, nachdem Sie ein serielles Gerät verbunden haben.',
    copied: 'Kopiert',
    copyLog: 'Kopieren',
    presetSlow: '9600',
    presetArduino: '115200',
    presetFast: '921600',
    terminalLabel: 'Live-Terminal',
    unknownUsbId: 'N/A',
    logDirectionRx: 'rx',
    logDirectionTx: 'tx',
    logDirectionSys: 'sys',
    vidPrefix: 'VID ',
    pidSeparator: ' / PID ',
    baudUnit: ' Baud',
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
