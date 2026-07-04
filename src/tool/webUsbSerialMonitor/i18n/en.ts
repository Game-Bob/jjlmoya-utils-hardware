import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebUsbSerialMonitorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'web-usb-serial-monitor';
const title = 'WebUSB Serial Monitor';
const description = 'Connect to USB serial hardware from the browser, read live terminal output, send commands, and debug Arduino, ESP32, RP2040, and maker boards without installing a desktop terminal.';

const faqData = [
  {
    question: 'Does this serial monitor work with Arduino, ESP32, and Raspberry Pi Pico boards?',
    answer: 'Yes, when the board exposes a USB serial interface supported by Web Serial and the browser is Chromium-based. Common Arduino, ESP32, RP2040, CH340, CP210x, and FTDI adapters usually work after the user grants permission.',
  },
  {
    question: 'Why is this called WebUSB if it uses Web Serial?',
    answer: 'Most maker boards connect over USB, but browser terminal access is provided by the Web Serial API. WebUSB is lower-level and is not the right abstraction for a simple UART-style terminal.',
  },
  {
    question: 'Can a website access my serial devices without permission?',
    answer: 'No. The browser requires a user click and a native device picker before a site can open a serial port. This tool does not store terminal logs or device identifiers.',
  },
  {
    question: 'Which browser should I use for a web serial terminal?',
    answer: 'Use Chrome, Edge, or another Chromium-based browser over HTTPS or localhost. Firefox, Safari, and many iOS browsers do not expose the Web Serial API.',
  },
  {
    question: 'What baud rate should I choose?',
    answer: 'Choose the baud rate configured in your firmware. Arduino examples often use 9600 or 115200, while faster logs, bootloaders, and high-rate sensor streams may use 230400, 460800, or 921600.',
  },
];

const howToData = [
  {
    name: 'Connect the USB serial device',
    text: 'Plug in the board or adapter and close any other serial terminal that may already have the port open.',
  },
  {
    name: 'Select the baud rate',
    text: 'Pick the same baud rate used by the firmware, such as 115200 for many Arduino, ESP32, and RP2040 sketches.',
  },
  {
    name: 'Grant browser permission',
    text: 'Press Connect, choose the serial device in the browser picker, and allow the page to open the port.',
  },
  {
    name: 'Read and send terminal data',
    text: 'Watch incoming logs in the terminal, send commands with optional CRLF line endings, and clear or pause the live output when needed.',
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
  inLanguage: 'en',
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
      text: 'Online Serial Monitor for USB Maker Hardware',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This browser serial monitor opens a USB serial port directly from Chrome or Edge, then streams text from microcontrollers, USB UART bridges, development boards, bootloaders, test fixtures, sensors, and lab hardware. It is designed for quick diagnostics when you need a serial console but do not want to install a desktop IDE or terminal application.',
    },
    {
      type: 'message',
      title: 'Browser permission boundary',
      html: 'The page cannot silently enumerate or open your serial devices. Access starts only after you press Connect and choose a port in the browser picker. Terminal data stays in the current tab unless you copy it yourself.',
    },
    {
      type: 'stats',
      items: [
        { value: '9600-921600', label: 'common baud presets' },
        { value: 'CRLF', label: 'optional command ending' },
        { value: 'local', label: 'terminal session' },
      ],
    },
    {
      type: 'title',
      text: 'When a Web Serial Terminal Is Useful',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Checking boot messages from Arduino, ESP32, ESP8266, RP2040, STM32, or custom firmware.',
        'Sending AT commands to modem, GPS, LoRa, Wi-Fi, Bluetooth, or cellular modules through a USB UART adapter.',
        'Reading sensor output from a factory test jig, classroom lab, robotics controller, or bench prototype.',
        'Verifying that a USB serial bridge driver, cable, board power, and firmware baud rate are all working together.',
        'Collecting a quick error log before filing a bug or asking for hardware support.',
      ],
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Web serial monitor',
          description: 'Best for quick support, classroom instructions, field diagnostics, and maker workflows where opening a URL is faster than installing an IDE.',
        },
        {
          title: 'Desktop terminal',
          description: 'Better for binary protocols, long capture sessions, scripting, hardware flow control, macros, and environments where browser APIs are blocked.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Baud Rate and Line Ending Checklist',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Setting', 'Typical choice', 'What goes wrong when it is wrong'],
      rows: [
        ['Baud rate', '115200 for many modern boards, 9600 for older examples.', 'Readable text turns into random symbols or no useful log appears.'],
        ['Line ending', 'CRLF for many command parsers, no ending for raw character protocols.', 'Commands are ignored because the firmware is waiting for a terminator.'],
        ['Exclusive port access', 'Close Arduino Serial Monitor, PuTTY, screen, minicom, or vendor tools.', 'The browser picker opens the port but reading or writing fails.'],
        ['Secure context', 'HTTPS or localhost.', 'The Serial API is missing even in a supported browser.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'No serial output?',
      html: 'Confirm the board is powered and the USB cable supports data, not charging only. Try 9600, 57600, and 115200 if you do not know the firmware baud rate. Press reset after connecting because many boards print boot logs only during startup. Close other software that may still own the serial port, and install the operating system driver for CH340, CP210x, FTDI, or the board vendor if the device never appears.',
    },
    {
      type: 'title',
      text: 'Privacy, Security, and Limits',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Web Serial strengths and limits',
      items: [
        {
          pro: 'No desktop installation for basic serial text diagnostics.',
          con: 'Requires a Chromium-based browser and a secure context.',
        },
        {
          pro: 'Browser picker limits access to the specific port you choose.',
          con: 'Not intended for binary protocol analyzers or long unattended captures.',
        },
        {
          pro: 'Works well for text logs, command prompts, and quick hardware checks.',
          con: 'Some corporate policies, mobile browsers, and operating systems block Web Serial.',
        },
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Serial is not available',
    unsupportedBody: 'Use Chrome or Edge over HTTPS or localhost, and make sure your device exposes a USB serial interface.',
    secureContext: 'Web Serial requires HTTPS or localhost. Reload this page from a secure origin and try again.',
    statusIdle: 'Choose a baud rate, then connect a USB serial device',
    statusPermission: 'Waiting for the browser serial port picker',
    statusOpening: 'Opening serial port',
    statusConnected: 'Serial port connected',
    statusDisconnected: 'Serial port disconnected',
    statusError: 'Serial connection failed',
    connect: 'Connect Serial',
    disconnect: 'Disconnect',
    send: 'Send',
    clear: 'Clear',
    pause: 'Pause',
    resume: 'Resume',
    baudRate: 'Baud rate',
    newline: 'Append CRLF',
    inputPlaceholder: 'Type a command, then press Enter',
    portFallback: 'No port selected',
    portLabel: 'Port identity',
    connectedDeviceLabel: 'Connected device',
    deviceNameFallback: 'USB serial device',
    transportLabel: 'Web Serial link',
    bytesLabel: 'Bytes',
    linesLabel: 'Lines',
    privacyTitle: 'Permission gated',
    privacyBody: 'The browser only exposes the serial device you select. Logs stay in this tab unless you copy them.',
    emptyLog: 'Terminal output will appear here after you connect a serial device.',
    copied: 'Copied',
    copyLog: 'Copy',
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
    vendorOpenSource: 'Open source USB Serial',
  },
};
