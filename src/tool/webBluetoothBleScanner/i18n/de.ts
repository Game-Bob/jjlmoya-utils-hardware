import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebBluetoothBleScannerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'web-bluetooth-ble-suche';
const title = 'Web Bluetooth BLE Suche';
const description = 'Scannen Sie Bluetooth Low Energy Geräte in der Nähe aus dem Browser, prüfen Sie die offengelegten GATT-Service-UUIDs und testen Sie, ob Ihre IoT- oder Wearable-Hardware auffindbar ist.';

const faqData = [
  {
    question: 'Kann eine Website ohne Erlaubnis Bluetooth-Geräte scannen?',
    answer: 'Nein. Web Bluetooth erfordert immer eine Nutzergeste und eine Berechtigungsauswahl des Browsers. Dieses Tool sieht nur das Gerät, das Sie ausdrücklich auswählen, und speichert keine MAC-Adressen, Geräte-IDs oder Scanergebnisse.',
  },
  {
    question: 'Warum zeigt der Scanner nicht jedes BLE-Gerät in der Nähe an?',
    answer: 'Browser stellen Bluetooth bewusst über eine Berechtigungsauswahl bereit, nicht als stillen Hintergrundscanner. Manche Geräte beenden zudem das Advertising, verbergen ihren Namen, erfordern Pairing oder legen Dienste erst nach einer Verbindung offen.',
  },
  {
    question: 'Welche Browser unterstützen Web Bluetooth?',
    answer: 'Web Bluetooth wird am besten in Chromium-basierten Desktop-Browsern wie Chrome und Edge unterstützt. Es erfordert in der Regel HTTPS oder localhost und ist in vielen Firefox-, Safari- und iOS-Browser-Konfigurationen nicht verfügbar.',
  },
  {
    question: 'Kann dies private Sensordaten von einem Wearable lesen?',
    answer: 'Nur wenn das Gerät kompatible GATT-Dienste bereitstellt und der Browser den Zugriff gewährt. Viele kommerzielle Wearables benötigen Hersteller-Apps, Verschlüsselung, Bonding oder proprietäre Eigenschaften, die ein generischer Browser-Scanner nicht entschlüsseln kann.',
  },
  {
    question: 'Was sind GATT-Service-UUIDs?',
    answer: 'Eine GATT-Service-UUID identifiziert eine Gruppe von Bluetooth-Low-Energy-Funktionen wie Batterie-Service, Herzfrequenz, Geräteinformationen oder einen benutzerdefinierten Herstellerdienst, der von Maker- und IoT-Hardware genutzt wird.',
  },
];

const howToData = [
  {
    name: 'Kompatiblen Browser verwenden',
    text: 'Öffnen Sie das Tool in Chrome oder Edge über HTTPS oder localhost und stellen Sie sicher, dass Bluetooth am Computer oder Telefon aktiviert ist.',
  },
  {
    name: 'Hardware in den Advertising-Modus versetzen',
    text: 'Aktivieren Sie das BLE-Gerät, schalten Sie es aus und wieder ein, drücken Sie die Pairing-Taste oder öffnen Sie den Advertising-Modus, damit es in der Berechtigungsauswahl des Browsers erscheint.',
  },
  {
    name: 'Umgebung scannen',
    text: 'Klicken Sie auf Umgebung scannen und wählen Sie das zu prüfende BLE-Gerät aus. Der Berechtigungsdialog des Browsers steuert genau, welches Gerät für die Seite sichtbar wird.',
  },
  {
    name: 'GATT-Dienste auslesen',
    text: 'Überprüfen Sie nach der Verbindung die Service-UUID-Karten, um Standard-Bluetooth-Profile, benutzerdefinierte Firmware-Dienste und die Frage zu identifizieren, ob das Gerät den erwarteten Datenpfad bereitstellt.',
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
      text: 'BLE-Tester online für IoT, Wearables und Maker-Hardware',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieser Web-Bluetooth-Scanner ermöglicht es Ihnen zu testen, ob ein nahegelegenes Bluetooth-Low-Energy-Gerät aus einem Browser auffindbar ist und welche GATT-Dienste es nach erteilter Berechtigung bereitstellt. Er ist nützlich beim Debuggen von ESP32-Firmware, Arduino-BLE-Sketches, intelligenten Sensoren, Fitness-Wearables, Tastaturen, benutzerdefinierten Beacons, Umweltmonitoren und Prototyp-Hardware, bevor Sie eine native mobile App erstellen.',
    },
    {
      type: 'message',
      title: 'Datenschutzmodell',
      html: 'GameBob speichert keine MAC-Adressen, Geräte-IDs, Namen, UUIDs, Signaldaten oder Scanverläufe. Die Berechtigungsauswahl des Browsers bestimmt, auf welches einzelne Gerät die Seite zugreifen darf, und die Ergebnisse verbleiben in Ihrer aktuellen Browser-Sitzung.',
    },
    {
      type: 'table',
      headers: ['Was Sie sehen', 'Was es bedeutet', 'Was als Nächstes zu prüfen ist'],
      rows: [
        ['Gerätename', 'Der per Advertising übertragene Bluetooth-Name, sofern die Hardware einen sendet.', 'Falls leer, überprüfen Sie die Advertising-Daten der Firmware oder nutzen Sie während des Tests ein bekanntes Namenspräfix.'],
        ['Geräte-ID', 'Eine browserbezogene Kennung, nicht die tatsächliche öffentliche MAC-Adresse.', 'Nur für diese Browser-Sitzung verwenden; nicht als universelle Hardware-Seriennummer behandeln.'],
        ['GATT-Service-UUIDs', 'Die Dienstgruppen, die nach Annahme der Verbindung offengelegt werden.', 'Vergleichen Sie Standard-UUIDs mit der Bluetooth-SIG-Liste oder Ihrer Firmware-Servicetabelle.'],
        ['Benutzerdefinierter Dienst', 'Eine hersteller- oder projektspezifische UUID.', 'Öffnen Sie Ihre Firmware, das mobile App-Profil oder die BLE-Dokumentation, um Eigenschaften und Berechtigungen zuzuordnen.'],
      ],
    },
    {
      type: 'title',
      text: 'Warum sich browserbasiertes Bluetooth-Scannen unterscheidet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Native BLE-Scanner-Apps zeigen oft fortlaufende Advertisements vieler nahegelegener Geräte an. Web Bluetooth ist bewusst strenger: Die Seite muss in einem sicheren Kontext geöffnet werden, der Scan muss durch einen Nutzerklick gestartet werden und der Browser zeigt eine Berechtigungsauswahl an. Dies schützt Nutzer vor stillem Tracking und gibt Entwicklern dennoch einen praktischen Weg, um von JavaScript aus eine Verbindung zur ausgewählten BLE-Hardware herzustellen.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Web Bluetooth Scanner',
          description: 'Am besten für schnelle Firmware-Validierung, Demos, Support-Abläufe, Unterrichtslabore und browserbasierte Diagnose geeignet, wenn Installationshürden eine Rolle spielen.',
        },
        {
          title: 'Native BLE App',
          description: 'Besser für Hintergrundscans, RSSI-Protokollierung, Pairing-Workflows, verschlüsselte Herstellerprotokolle, große Eigenschaftsbäume und langfristige Felddiagnose.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Häufige Gründe, warum ein BLE-Gerät nicht erscheint',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bluetooth ist auf Betriebssystemebene deaktiviert oder der Browser besitzt keine Bluetooth-Berechtigung.',
        'Das Gerät ist mit einem anderen Telefon, Laptop, einer Hersteller-App oder einem Gateway verbunden und hat das Advertising eingestellt.',
        'Die Hardware sendet Advertisements nur für ein kurzes Zeitfenster nach dem Start oder nach dem Drücken einer Pairing-Taste.',
        'Der Browser ist nicht Chromium-basiert, die Seite wird nicht über HTTPS bereitgestellt oder die Plattform blockiert Web Bluetooth.',
        'Die Firmware überträgt Herstellerdaten, verbirgt aber den lokalen Namen, sodass die Auswahl ein namenloses Gerät anzeigen kann.',
        'Das Gerät erfordert Bonding, Verschlüsselung oder proprietäre Authentifizierung, bevor Dienste lesbar werden.',
      ],
    },
    {
      type: 'title',
      text: 'So verwenden Sie GATT-UUIDs beim Debugging',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eine erfolgreiche Verbindung mit Service-UUIDs zeigt Ihnen, dass der Browser das Peripheriegerät erreichen kann und dass das Peripheriegerät zumindest einen Teil seiner GATT-Tabelle offenlegt. Standarddienste wie Batterie-Service, Geräteinformationen, Herzfrequenz, Human Interface Device und Umweltsensorik sind leicht zu erkennen. Benutzerdefinierte UUIDs verweisen meist auf firmwarespezifische Funktionen und benötigen die Eigenschaftstabelle aus Ihrem Quellcode oder der Herstellerdokumentation.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Wahrscheinliche Ursache', 'Praktische Abhilfe'],
      rows: [
        ['Berechtigungsauswahl ist leer', 'Gerät sendet kein Advertising oder Browser-Unterstützung fehlt.', 'Gerät neu starten, Pairing-Modus aktivieren, näher herangehen oder in Chrome/Edge erneut versuchen.'],
        ['Verbindung schlägt sofort fehl', 'Gerät ist belegt, außer Reichweite oder lehnt die Browser-Verbindung ab.', 'Hersteller-Apps trennen und das Peripheriegerät in der Nähe des Computers halten.'],
        ['Keine Dienste aufgelistet', 'GATT ist nicht verfügbar, Dienste sind verborgen oder der Zugriff wurde für diese UUIDs nicht gewährt.', 'Bekannte optionale Dienste in Firmware-Tests hinzufügen oder mit einem nativen BLE-Tool prüfen.'],
        ['Nur benutzerdefinierte UUIDs erscheinen', 'Die Hardware verwendet herstellerspezifische Firmware-Dienste.', 'UUIDs Quellcode-Konstanten zuordnen und Lese-/Schreibberechtigungen der Eigenschaften dokumentieren.'],
      ],
    },
    {
      type: 'title',
      text: 'Sicherheits- und Datenschutzgrenzen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Die Seite kann nicht stillschweigend nahegelegene Bluetooth-Geräte im Hintergrund erfassen.',
        'Der Browser kann echte MAC-Adressen verbergen und stattdessen eine sitzungsbezogene Geräte-ID bereitstellen.',
        'Der Zugriff beginnt erst, nachdem der Nutzer auf die Scan-Schaltfläche klickt und ein Gerät auswählt.',
        'Ergebnisse werden von GameBob weder hochgeladen noch gespeichert.',
        'Sensible kommerzielle Geräte können eine Verschlüsselung oder einen Hersteller-Pairing-Ablauf erfordern, den dieser generische Scanner nicht umgehen kann.',
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Bluetooth ist nicht verfügbar',
    unsupportedBody: 'Versuchen Sie Chrome oder Edge auf dem Desktop oder unter Android, aktivieren Sie Bluetooth und öffnen Sie die Seite über HTTPS oder localhost.',
    secureContext: 'Web Bluetooth erfordert eine sichere HTTPS-Seite oder localhost. Laden Sie das Tool von einer sicheren Quelle neu und versuchen Sie es erneut.',
    scanButton: 'Umgebung scannen',
    scanning: 'Scannen läuft',
    reconnect: 'Erneut scannen',
    disconnect: 'Trennen',
    privacyTitle: 'Datenschutz durch Design',
    privacyBody: 'GameBob speichert keine MAC-Adressen, Geräte-IDs, Namen, UUIDs oder Scanverläufe. Der Browser legt nur das von Ihnen gewählte Gerät offen.',
    deviceLabel: 'Ausgewähltes Gerät',
    nameFallback: 'Unbenanntes BLE-Gerät',
    idLabel: 'Browser-Geräte-ID',
    servicesLabel: 'GATT-Dienste',
    noServices: 'Für diese Verbindung wurden keine lesbaren Primärdienste zurückgegeben.',
    statusIdle: 'Bereit zum Scannen nahegelegener BLE-Hardware',
    statusPermission: 'Warten auf die Berechtigungsauswahl des Browsers',
    statusConnecting: 'Verbinden mit dem ausgewählten BLE-Gerät',
    statusConnected: 'Verbunden und Dienste geladen',
    statusDisconnected: 'Gerät getrennt',
    statusCancelled: 'Kein BLE-Gerät ausgewählt oder Bluetooth ist auf diesem Gerät ausgeschaltet bzw. nicht verfügbar.',
    statusUnavailable: 'Bluetooth scheint auf diesem Gerät ausgeschaltet, blockiert oder nicht vorhanden zu sein. Aktivieren Sie Bluetooth oder versuchen Sie es mit Hardware, die einen BLE-Adapter besitzt.',
    statusError: 'Bluetooth-Scan fehlgeschlagen',
    signalUnknown: 'Die Signalstärke wird durch die Browser-Auswahl gesteuert',
    gattUnavailable: 'Dieses Gerät hat dem Browser keinen GATT-Server bereitgestellt',
    customServiceName: 'Benutzerdefinierter oder herstellerspezifischer Dienst',
    serviceGenericAccess: 'Generic Access',
    serviceGenericAttribute: 'Generic Attribute',
    serviceDeviceInformation: 'Geräteinformationen',
    serviceHeartRate: 'Herzfrequenz',
    serviceBattery: 'Batterie-Service',
    serviceHumanInterfaceDevice: 'Human Interface Device',
    serviceCyclingSpeedCadence: 'Radfahren Geschwindigkeit und Trittfrequenz',
    serviceEnvironmentalSensing: 'Umweltsensorik',
    serviceUserData: 'Nutzerdaten',
    serviceFitnessMachine: 'Fitnessgerät',
    uuidHelp: 'UUIDs identifizieren Bluetooth-Dienste. Standarddienste werden automatisch benannt; herstellerspezifische UUIDs benötigen Ihre Firmware- oder Gerätedokumentation.',
    compatibilityHint: 'Funktioniert am besten in Chromium-basierten Browsern mit aktiviertem Bluetooth. Web Bluetooth ist bewusst berechtigungsbeschränkt und zeigt möglicherweise nicht jeden nahegelegenen Advertiser an.',
    serviceCountSingular: 'Dienst',
    serviceCountPlural: 'Dienste',
  },
};
