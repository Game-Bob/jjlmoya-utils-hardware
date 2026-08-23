import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { OhmLawPowerCalculatorLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ohmsches Gesetz und Elektrische Leistung Rechner',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was berechnet dieser Ohmsches Gesetz Rechner?',
      acceptedAnswer: { '@type': 'Answer', text: 'Geben Sie zwei beliebige positive Werte für Spannung, Strom, Widerstand oder Leistung ein. Der Rechner ermittelt die verbleibenden zwei Werte.' },
    },
    {
      '@type': 'Question',
      name: 'Welche Einheiten verwendet der Rechner?',
      acceptedAnswer: { '@type': 'Answer', text: 'Der Rechner nutzt Volt für Spannung, Ampere für Strom, Ohm für Widerstand und Watt für Leistung.' },
    },
    {
      '@type': 'Question',
      name: 'Kann ich Leistung und Widerstand als bekannte Werte nutzen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja. Der Rechner nutzt die Quadratwurzel-Beziehungen, um Spannung und Strom zu berechnen.' },
    },
  ],
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Elektrische Werte mit dem Ohmschen Gesetz berechnen',
  step: [
    { '@type': 'HowToStep', name: 'Zwei bekannte Werte wählen', text: 'Aktivieren Sie die zwei Größen, die Sie kennen: Spannung, Strom, Widerstand oder Leistung.' },
    { '@type': 'HowToStep', name: 'Messwerte eingeben', text: 'Geben Sie positive Werte in den aktiven Feldern ein.' },
    { '@type': 'HowToStep', name: 'Ergebnis ablesen', text: 'Das Schaltbild zeigt die berechneten Werte und die angewendete Formel.' },
  ],
};

const seo: SEOSection[] = [
  { type: 'title', text: 'Spannung Strom Widerstand oder Leistung im Stromkreis berechnen', level: 2 },
  { type: 'paragraph', html: 'Wenn Sie zwei Werte in einem einfachen Stromkreis kennen, reichten diese aus, um die anderen beiden zu berechnen. Geben Sie die zwei bekannten Größen ein, und dieser Rechner ermittelt die fehlenden Werte in Volt, Ampere, Ohm und Watt.' },
  { type: 'paragraph', html: 'Geben Sie beispielsweise 12 V und 2 A ein, erhalten Sie 6 Ohm und 24 W. Bei 5 V und 10 W ergeben sich 2 A und 2,5 Ohm. Dies ist nützlich beim Überprüfen von Widerständen, Berechnen von LED-Strömen oder Bestimmen der Leistung an Verstärkerlasten.' },
  { type: 'title', text: 'Welche Formel des Ohmschen Gesetzes ist die richtige', level: 3 },
  { type: 'paragraph', html: 'Die richtige Gleichung hängt von den zwei verfügbaren Messwerten ab. Alle Formeln sind Umstellungen des Ohmschen Gesetzes V = I x R und der Leistungsformel P = V x I.' },
  { type: 'table', headers: ['Bekannte Werte', 'Berechnete Werte', 'Formel'], rows: [
    ['Spannung und Strom', 'Widerstand und Leistung', 'R = V / I und P = V x I'],
    ['Spannung und Widerstand', 'Strom und Leistung', 'I = V / R und P = V² / R'],
    ['Spannung und Leistung', 'Strom und Widerstand', 'I = P / V und R = V² / P'],
    ['Strom und Widerstand', 'Spannung und Leistung', 'V = I x R und P = I² x R'],
    ['Strom und Leistung', 'Spannung und Widerstand', 'V = P / I und R = P / I²'],
    ['Widerstand und Leistung', 'Spannung und Strom', 'V = √(P x R) und I = √(P / R)'],
  ] },
  { type: 'tip', title: 'Verlustleistung zur sicheren Bauteilauswahl nutzen', html: 'Berechnet der Rechner 24 W, muss das Bauteil mindestens diese Leistung schadlos als Wärme abführen können. Planen Sie stets eine Sicherheitsreserve ein.' },
];

export const content: OhmLawPowerCalculatorLocaleContent = {
  slug: 'ohm-gesetz-leistungsrechner',
  title: 'Ohmsches Gesetz und Elektrische Leistung Rechner',
  description: 'Rechner für das Ohmsche Gesetz zur Berechnung von Spannung, Strom, Widerstand und Leistung aus zwei bekannten Werten.',
  ui: {
    instructions: 'Wählen Sie zwei bekannte Werte und geben Sie diese ein. Der Stromkreis ermittelt das verbleibende Paar.',
    knownLabel: 'Zwei bekannte Werte wählen',
    useAsKnownLabel: 'Als bekannt nutzen',
    voltageLabel: 'Spannung',
    currentLabel: 'Strom',
    resistanceLabel: 'Widerstand',
    powerLabel: 'Leistung',
    voltageUnit: 'V',
    currentUnit: 'A',
    resistanceUnit: 'Ohm',
    powerUnit: 'W',
    resultTitle: 'Stromkreis vervollständigen',
    resultHint: 'Zwei bekannte Anschlüsse berechnen das fehlende Paar.',
    formulaTitle: 'Anzeige des Stromkreises',
    formulaHint: 'Leuchtende Anschlüsse sind bekannt. Kupferbahnen zeigen die Gleichungen.',
    statusTitle: 'Berechnungsstatus',
    statusEmpty: 'Geben Sie zwei positive Werte ein.',
    statusInvalid: 'Beide bekannten Werte müssen größer als null sein.',
    statusReady: 'Berechnung erfolgreich durchgeführt.',
    presetTitle: 'Mit einer Beispiellast starten',
    presetLed: 'LED-Indikator',
    presetUsb: 'USB-Last',
    presetAmplifier: 'Verstärkerlast',
    resetLabel: 'Zurücksetzen',
    orbitCaption: 'Wählen Sie zwei Anschlüsse, um den Stromkreis zu schließen.',
    knownBadge: 'Bekannt',
    solvedBadge: 'Berechnet',
    unitVoltage: 'Volt',
    unitCurrent: 'Ampere',
    unitResistance: 'Ohm',
    unitPower: 'Watt',
    formulaVoltageCurrent: 'R = V / I und P = V x I',
    formulaVoltageResistance: 'I = V / R und P = V² / R',
    formulaVoltagePower: 'I = P / V und R = V² / P',
    formulaCurrentResistance: 'V = I x R und P = I² x R',
    formulaCurrentPower: 'V = P / I und R = P / I²',
    formulaResistancePower: 'V = √(P x R) und I = √(P / R)',
    seoTitle: 'Ohmsches Gesetz Rechner',
  },
  seo,
  faqTitle: 'Häufige Fragen zum Ohmschen Gesetz',
  faq: [
    { question: 'Ich kenne Spannung und Strom. Was erhalte ich?', answer: 'Sie erhalten Widerstand und Leistung. Zum Beispiel ergeben 12 V und 2 A 6 Ohm und 24 W.' },
    { question: 'Kann ich die Verlustleistung eines Widerstands berechnen?', answer: 'Ja. Geben Sie Spannung und Widerstand oder Strom und Widerstand ein, um die Leistung zu berechnen.' },
    { question: 'Kann ich Leistung und Spannung als Eingabe nutzen?', answer: 'Ja. Geben Sie beide Werte ein; der Rechner ermittelt Strom (I = P / V) und Widerstand (R = V² / P).' },
    { question: 'Gilt das Ohmsche Gesetz für jedes Bauteil?', answer: 'Nein. Dieser Rechner modelliert ein ohmsches Bauteil. Dioden weisen eine nichtlineare Kennlinie auf.' },
  ],
  bibliographyTitle: 'Formelreferenzen',
  bibliography,
  howTo: [
    { name: 'Zwei bekannte Werte wählen', text: 'Aktivieren Sie zwei Größen, die bekannt sind.' },
    { name: 'Positive Messwerte eingeben', text: 'Geben Sie Volt, Ampere, Ohm oder Watt in die aktiven Felder ein.' },
    { name: 'Ergebnis ablesen', text: 'Lesen Sie die berechneten Werte und die angewendete Formel ab.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
