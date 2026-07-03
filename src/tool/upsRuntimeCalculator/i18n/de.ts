import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UpsRuntimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'usv-laufzeit-rechner';
const title = 'USV Laufzeit Rechner';
const description = 'Berechnen Sie die USV-Batterielaufzeit, die gesamte geschützte Last, die nutzbaren Wattstunden und die empfohlene VA-Größe für PCs, Monitore, Router, NAS-Geräte und Heimlabor-Hardware.';

const faqData = [
  {
    question: 'Wie berechne ich die USV-Laufzeit?',
    answer: 'Addieren Sie die Wattzahl aller an der USV angeschlossenen Geräte, multiplizieren Sie die Batterie-Wattstunden der USV mit dem Wechselrichter-Wirkungsgrad, ziehen Sie die gewünschte Reserve ab und teilen Sie die nutzbaren Wattstunden durch die Last in Watt. Das Ergebnis in Stunden kann mit 60 multipliziert werden, um Minuten zu erhalten.',
  },
  {
    question: 'Warum weicht die tatsächliche USV-Laufzeit von der Schätzung ab?',
    answer: 'Die Laufzeit ändert sich mit Batteriealter, Temperatur, Entladerate, Wechselrichter-Effizienz, Lastspitzen und der Abschaltspannung des Herstellers. Betrachten Sie das Ergebnis als Planungsschätzung und überprüfen Sie es mit einem kontrollierten Abschalttest.',
  },
  {
    question: 'Sollte ich eine USV nach Watt oder VA dimensionieren?',
    answer: 'Prüfen Sie beides. Watt gibt die tatsächliche Leistung an, die die USV liefern kann, während VA den Leistungsfaktor einschließt. Eine USV muss Ihre Last in Watt übertreffen und genügend VA-Reserve für die angeschlossenen Geräte haben.',
  },
  {
    question: 'Wie viel USV-Reserve sollte ich einplanen?',
    answer: 'Ein praktisches Ziel ist es, die normale Last unter etwa 70-80 % der USV-Wattleistung zu halten. Dies lässt Raum für Anlaufspitzen, Batteriealterung und zukünftige Geräte.',
  },
  {
    question: 'Kann ich Drucker oder Heizgeräte an eine USV anschließen?',
    answer: 'Vermeiden Sie Laserdrucker, Heizgeräte und andere Lasten mit hohen Einschaltströmen, es sei denn, die USV ist ausdrücklich dafür ausgelegt. Sie können den Wechselrichter überlasten und die Laufzeit drastisch verkürzen.',
  },
];

const howToData = [
  {
    name: 'Geschützte Geräte auflisten',
    text: 'Geben Sie die Geräte ein, die bei einem Stromausfall online bleiben müssen, z. B. Computer, Monitor, Router, Modem, NAS und Netzwerk-Switch.',
  },
  {
    name: 'Realistische Wattzahlen eingeben',
    text: 'Verwenden Sie nach Möglichkeit gemessene Werte von der Steckdose. Wenn Sie nur die Nennleistung des Netzteils kennen, reduzieren Sie diese auf die erwartete Betriebslast, anstatt den maximalen Etikettenwert zu verwenden.',
  },
  {
    name: 'Batteriekapazität und Annahmen festlegen',
    text: 'Geben Sie die Batterie-Wattstunden der USV, den Wechselrichter-Wirkungsgrad, den Leistungsfaktor und die gewünschte Reserve für ein sicheres Herunterfahren ein.',
  },
  {
    name: 'Laufzeit und VA-Empfehlung ablesen',
    text: 'Verwenden Sie die geschätzten Minuten und die empfohlene VA-Größe als Kauf- oder Konfigurationsleitfaden und validieren Sie die Einrichtung mit einem sicheren Ausfalltest.',
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
  inLanguage: 'de',
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
      text: 'USV-Laufzeit-Rechner: Batterie-Backup-Zeit schätzen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Eine USV-Laufzeitschätzung beantwortet zwei praktische Fragen: Wie lange Ihre Hardware bei einem Stromausfall online bleiben kann und ob die USV groß genug für die angeschlossene Last ist. Dieser Rechner kombiniert Geräteleistung, Batterie-Wattstunden, Wechselrichter-Effizienz, Leistungsfaktor und Abschaltreserve, sodass das Ergebnis näher an der realen Planung liegt als eine einfache Division der Batteriekapazität.',
    },
    {
      type: 'title',
      text: 'Die Laufzeit-Formel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die geschätzte Laufzeit in Stunden ist <strong>nutzbare Batterie-Wattstunden geteilt durch die Gesamtlast in W</strong>. Die nutzbaren Wattstunden entsprechen nicht der aufgedruckten Batteriekapazität: Sie sollten um Wechselrichterverluste und die gewünschte Abschaltreserve bereinigt werden. Beispielsweise liefert eine 432-Wh-Batterie bei 86 % Effizienz und 20 % Reserve etwa 297 Wh nutzbare Energie.',
    },
    {
      type: 'table',
      headers: ['Eingabe', 'Warum sie wichtig ist', 'Praktische Orientierung'],
      rows: [
        ['Last in Watt', 'Steuert direkt die Laufzeit', 'Nach Möglichkeit mit einem Wandmessgerät messen, insbesondere bei Gaming-PCs und NAS-Systemen.'],
        ['Batterie-Wh', 'Bestimmt den Energievorrat', 'Herstellerangaben oder Nennspannung multipliziert mit Amperestunden verwenden.'],
        ['Effizienz', 'Berücksichtigt Wechselrichterverluste', '80-90 % sind ein sinnvoller Planungsbereich für viele Consumer-USV-Geräte.'],
        ['Leistungsfaktor', 'Wandelt Watt in VA um', 'USV-Spezifikation verwenden, falls bekannt; 0,6-0,8 ist bei Einsteiger- und Mittelklassegeräten üblich.'],
        ['Reserve', 'Sichert die Abschaltmarge', '10-25 % sind sinnvoll für ein kontrolliertes Herunterfahren von PC oder Server.'],
      ],
    },
    {
      type: 'title',
      text: 'Wie viel Laufzeit benötigen Sie?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '5-10 Minuten: ausreichend, um kurze Spannungsschwankungen zu überbrücken oder einen Desktop sicher herunterzufahren.',
        '10-20 Minuten: nützlich für Router, Modems, NAS-Geräte und kleine Heimlabor-Knoten.',
        '30+ Minuten: besser für Netzwerkkontinuität, Remote-Arbeit und Standorte mit häufigen Ausfällen.',
        'Mehrere Stunden: erfordert in der Regel ein größeres Batteriesystem, nicht nur eine Desktop-USV.',
      ],
    },
    {
      type: 'title',
      text: 'Watt vs. VA bei der USV-Auswahl',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'USV-Produktnamen geben häufig VA an, aber die Watt-Leistung ist die härtere Grenze für reale Geräte. Eine 900-VA-USV unterstützt möglicherweise nur 540 W, während ein anderes 900-VA-Modell 600 W oder mehr unterstützt. Prüfen Sie beide Angaben und halten Sie den Normalbetrieb unter dem Maximum, um Überlastalarme, verkürzte Batterielebensdauer und Übertragungsfehler bei einem Ausfall zu vermeiden.',
    },
    {
      type: 'title',
      text: 'Lasten, die Laufzeitschätzungen verfälschen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Gaming-PCs können in Sekunden von niedrigem Leerlaufverbrauch auf hohe GPU-Last wechseln.',
        'Monitore variieren stark je nach Helligkeit, HDR-Modus und Bildschirmgröße.',
        'NAS-Geräte verbrauchen beim Hochfahren der Festplatten und bei Wiederherstellungen zusätzlichen Strom.',
        'Laserdrucker, Heizgeräte, Pumpen und Kompressoren sind schlechte USV-Lasten, sofern nicht ausdrücklich unterstützt.',
        'Alte Batterien können deutlich weniger Laufzeit liefern, als die ursprüngliche Kapazität vermuten lässt.',
      ],
    },
    {
      type: 'title',
      text: 'Checkliste für sicheres Testen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Laden Sie die USV vor dem Test vollständig auf.',
        'Speichern Sie offene Arbeiten und vermeiden Sie Tests während kritischer Schreibvorgänge oder Firmware-Updates.',
        'Trennen Sie die Netzsteckdose, nicht die Geräte, und beobachten Sie USV-Lastprozentsatz und Batterieschätzung.',
        'Stellen Sie sicher, dass Ihr PC, NAS oder Server das Abschaltsignal erhält, bevor die Batterie erschöpft ist.',
        'Wiederholen Sie den Test alle paar Monate, da Blei-Säure-USV-Batterien schnell altern.',
      ],
    },
  ],
  ui: {
    loadTitle: 'Geschützte Last',
    addDevice: 'Gerät hinzufügen',
    deviceName: 'Gerät',
    watts: 'Watt',
    remove: 'Gerät entfernen',
    batteryWh: 'Batteriekapazität (Wh)',
    efficiency: 'Wechselrichter-Effizienz',
    powerFactor: 'Leistungsfaktor',
    reserve: 'Abschaltreserve',
    totalLoad: 'Gesamtlast',
    runtime: 'Geschätzte Laufzeit',
    recommendedUps: 'Empfohlene Größe',
    usableEnergy: 'Nutzbare Energie',
    minutes: 'Min.',
    hours: 'Std.',
    wattsUnit: 'W',
    vaUnit: 'VA',
    whUnit: 'Wh',
    assumptionsLabel: 'USV-Annahmen',
    presetDesktop: 'Desktop-PC',
    presetMonitor: '27-Zoll-Monitor',
    presetRouter: 'Router und Modem',
    presetNas: 'NAS mit zwei Einschüben',
    percentUnit: '%',
    bandLight: 'komfortables Backup-Fenster mit einer empfohlenen USV bei etwa',
    bandBalanced: 'ausgewogenes Backup-Fenster mit einer empfohlenen USV bei etwa',
    bandHeavy: 'kurzes Backup-Fenster; erwägen Sie einen größeren Akku oder reduzieren Sie die Last bei etwa',
    summaryPrefix: 'Diese Konfiguration hat ein',
  },
};
