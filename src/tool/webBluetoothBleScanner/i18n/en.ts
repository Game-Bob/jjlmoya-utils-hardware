import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebBluetoothBleScannerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'web-bluetooth-ble-scanner';
const title = 'Web Bluetooth BLE Scanner';
const description = 'Scan nearby Bluetooth Low Energy devices from the browser, inspect exposed GATT service UUIDs, and test whether your IoT or wearable hardware is discoverable.';

const faqData = [
  {
    question: 'Can a website scan Bluetooth devices without permission?',
    answer: 'No. Web Bluetooth always requires a user gesture and a browser permission chooser. This tool only sees the device you explicitly select, and it does not store MAC addresses, device IDs, or scan results.',
  },
  {
    question: 'Why does the scanner not show every BLE device nearby?',
    answer: 'Browsers intentionally expose Bluetooth through a permission picker, not as a silent background scanner. Some devices also stop advertising, hide their name, require pairing, or expose services only after a connection.',
  },
  {
    question: 'Which browsers support Web Bluetooth?',
    answer: 'Web Bluetooth is best supported in Chromium-based desktop browsers such as Chrome and Edge. It usually requires HTTPS or localhost and is not available in many Firefox, Safari, and iOS browser configurations.',
  },
  {
    question: 'Can this read private sensor data from a wearable?',
    answer: 'Only if the device exposes compatible GATT services and the browser grants access. Many commercial wearables require vendor apps, encryption, bonding, or proprietary characteristics that a generic browser scanner cannot decode.',
  },
  {
    question: 'What are GATT service UUIDs?',
    answer: 'A GATT service UUID identifies a group of Bluetooth Low Energy features, such as Battery Service, Heart Rate, Device Information, or a custom vendor service used by maker and IoT hardware.',
  },
];

const howToData = [
  {
    name: 'Use a compatible browser',
    text: 'Open the tool in Chrome or Edge over HTTPS or localhost, then make sure Bluetooth is enabled on the computer or phone.',
  },
  {
    name: 'Put the hardware in advertising mode',
    text: 'Wake the BLE device, power-cycle it, press its pairing button, or open its advertising mode so it appears in the browser permission chooser.',
  },
  {
    name: 'Scan the environment',
    text: 'Press Scan Environment and select the BLE device you want to inspect. The browser permission dialog controls exactly which device becomes visible to the page.',
  },
  {
    name: 'Read the GATT services',
    text: 'After connection, review the service UUID cards to identify standard Bluetooth profiles, custom firmware services, and whether the device exposes the data path you expected.',
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
      text: 'BLE Tester Online for IoT, Wearables, and Maker Hardware',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This Web Bluetooth scanner lets you test whether a nearby Bluetooth Low Energy device is discoverable from a browser and which GATT services it exposes after permission is granted. It is useful when debugging ESP32 firmware, Arduino BLE sketches, smart sensors, fitness wearables, keyboards, custom beacons, environmental monitors, and prototype hardware before building a native mobile app.',
    },
    {
      type: 'message',
      title: 'Privacy model',
      html: 'This website does not store MAC addresses, device IDs, names, UUIDs, signal data, or scan history. The browser permission chooser decides which single device the page can access, and results stay in your current browser session.',
    },
    {
      type: 'table',
      headers: ['What you see', 'What it means', 'What to check next'],
      rows: [
        ['Device name', 'The advertised Bluetooth name, if the hardware broadcasts one.', 'If it is blank, check firmware advertising data or use a known name prefix during testing.'],
        ['Device ID', 'A browser-scoped identifier, not the raw public MAC address.', 'Use it only for this browser session; do not treat it as a universal hardware serial number.'],
        ['GATT service UUIDs', 'The service groups exposed after the connection is accepted.', 'Compare standard UUIDs with the Bluetooth SIG list or your firmware service table.'],
        ['Custom service', 'A vendor-specific or project-specific UUID.', 'Open your firmware, mobile app profile, or BLE documentation to map characteristics and permissions.'],
      ],
    },
    {
      type: 'title',
      text: 'Why Browser Bluetooth Scanning Is Different',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Native BLE scanner apps often show continuous advertisements from many nearby devices. Web Bluetooth is deliberately stricter: the page must be opened in a secure context, the scan must start from a user click, and the browser shows a permission chooser. This protects users from silent tracking while still giving developers a practical way to connect to selected BLE hardware from JavaScript.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Web Bluetooth scanner',
          description: 'Best for quick firmware validation, demos, support flows, classroom labs, and browser-based diagnostics where installation friction matters.',
        },
        {
          title: 'Native BLE app',
          description: 'Better for background scanning, RSSI logging, pairing workflows, encrypted vendor protocols, large characteristic trees, and long-term field diagnostics.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Common Reasons a BLE Device Does Not Appear',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bluetooth is disabled at the operating system level or the browser does not have Bluetooth permission.',
        'The device is connected to another phone, laptop, vendor app, or gateway and has stopped advertising.',
        'The hardware advertises only for a short window after boot or after pressing a pairing button.',
        'The browser is not Chromium-based, the page is not served over HTTPS, or the platform blocks Web Bluetooth.',
        'The firmware advertises manufacturer data but hides the local name, so the chooser may show an unnamed device.',
        'The device requires bonding, encryption, or proprietary authentication before services become readable.',
      ],
    },
    {
      type: 'title',
      text: 'How to Use GATT UUIDs During Debugging',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A successful connection with service UUIDs tells you that the browser can reach the peripheral and that the peripheral exposes at least part of its GATT table. Standard services such as Battery Service, Device Information, Heart Rate, Human Interface Device, and Environmental Sensing are easy to recognize. Custom UUIDs usually point to firmware-specific features and need the characteristic map from your source code or vendor documentation.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Likely cause', 'Practical fix'],
      rows: [
        ['Permission chooser is empty', 'Device is not advertising or browser support is missing.', 'Reboot the device, enable pairing mode, move closer, or retry in Chrome/Edge.'],
        ['Connection fails immediately', 'Device is busy, out of range, or rejects the browser connection.', 'Disconnect vendor apps and keep the peripheral near the computer.'],
        ['No services are listed', 'GATT is unavailable, services are hidden, or access was not granted for those UUIDs.', 'Add known optional services in firmware tests or inspect with a native BLE tool.'],
        ['Only custom UUIDs appear', 'The hardware uses vendor-specific firmware services.', 'Map UUIDs to source code constants and document characteristic read/write permissions.'],
      ],
    },
    {
      type: 'title',
      text: 'Security and Privacy Limits',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'The page cannot silently collect nearby Bluetooth devices in the background.',
        'The browser may hide real MAC addresses and provide a scoped device ID instead.',
        'Access starts only after the user clicks the scan button and chooses a device.',
        'Results are not uploaded or stored by this website.',
        'Sensitive commercial devices may require encryption or a vendor pairing flow that this generic scanner cannot bypass.',
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Bluetooth is not available',
    unsupportedBody: 'Try Chrome or Edge on desktop or Android, enable Bluetooth, and open the page over HTTPS or localhost.',
    secureContext: 'Web Bluetooth requires a secure HTTPS page or localhost. Reload the tool from a secure origin and try again.',
    scanButton: 'Scan Environment',
    scanning: 'Scanning',
    reconnect: 'Scan again',
    disconnect: 'Disconnect',
    privacyTitle: 'Private by design',
    privacyBody: 'This website does not store MAC addresses, device IDs, names, UUIDs, or scan history. The browser only exposes the device you choose.',
    deviceLabel: 'Selected device',
    nameFallback: 'Unnamed BLE device',
    idLabel: 'Browser device ID',
    servicesLabel: 'GATT services',
    noServices: 'No readable primary services were returned for this connection.',
    statusIdle: 'Ready to scan nearby BLE hardware',
    statusPermission: 'Waiting for the browser permission chooser',
    statusConnecting: 'Connecting to the selected BLE device',
    statusConnected: 'Connected and services loaded',
    statusDisconnected: 'Device disconnected',
    statusCancelled: 'No BLE device was selected, or Bluetooth is turned off/unavailable on this device.',
    statusUnavailable: 'Bluetooth appears to be turned off, blocked, or missing on this device. Enable Bluetooth or try from hardware that has a BLE adapter.',
    statusError: 'Bluetooth scan failed',
    signalUnknown: 'Signal strength is controlled by the browser chooser',
    gattUnavailable: 'This device did not expose a GATT server to the browser',
    customServiceName: 'Custom or vendor-specific service',
    serviceGenericAccess: 'Generic Access',
    serviceGenericAttribute: 'Generic Attribute',
    serviceDeviceInformation: 'Device Information',
    serviceHeartRate: 'Heart Rate',
    serviceBattery: 'Battery Service',
    serviceHumanInterfaceDevice: 'Human Interface Device',
    serviceCyclingSpeedCadence: 'Cycling Speed and Cadence',
    serviceEnvironmentalSensing: 'Environmental Sensing',
    serviceUserData: 'User Data',
    serviceFitnessMachine: 'Fitness Machine',
    uuidHelp: 'UUIDs identify Bluetooth services. Standard services are named automatically; vendor-specific UUIDs need your firmware or device documentation.',
    compatibilityHint: 'Works best in Chromium-based browsers with Bluetooth enabled. Web Bluetooth is intentionally permission-gated and may not show every nearby advertiser.',
    serviceCountSingular: 'service',
    serviceCountPlural: 'services',
  },
};
