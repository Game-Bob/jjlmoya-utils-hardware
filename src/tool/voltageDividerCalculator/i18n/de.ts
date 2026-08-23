import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDividerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'spannungsteiler-rechner';
const title = 'Spannungsteiler Rechner';
const description = 'Berechne die Leerlauf-Ausgangsspannung, den Strom, die Verlustleistung oder den unteren Widerstand für eine Zielspannung bei einem Spannungsteiler.';

const faqData = [
  { question: 'Was macht ein Spannungsteiler Rechner?', answer: 'Er berechnet die unbelastete Ausgangsspannung von zwei in Reihe geschalteten Widerständen. Gib Versorgungsspannung, oberen und unteren Widerstand ein um Vout zu bestimmen, oder gib eine Zielspannung ein um R2 zu berechnen.' },
  { question: 'Wie berechnet man die Ausgangsspannung?', answer: 'Verwende die Formel Vout = Vs x R2 / (R1 + R2), wobei R1 an der Versorgungsspannung und R2 an Masse liegt.' },
  { question: 'Wie berechnet man den Widerstand für eine Zielspannung?', answer: 'Wenn R1 bekannt ist, gilt R2 = R1 x Vtarget / (Vs - Vtarget). Die Zielspannung muss zwischen Null und der Versorgungsspannung liegen.' },
  { question: 'Wie viel Strom fließt durch einen Spannungsteiler?', answer: 'Der Strom beträgt I = Vs / (R1 + R2). Dieser Querstrom wird kontinuierlich aus der Quelle gezogen.' },
  { question: 'Wie prüft man die Leistung der Widerstände?', answer: 'Die Verlustleistung beträgt P = I² x R. Wähle Widerstände mit ausreichender Nennleistung und berücksichtige Temperatur sowie Toleranzen.' },
  { question: 'Kann ein Spannungsteiler als Stromversorgung genutzt werden?', answer: 'Meistens nicht. Eine angeschlossene Last schaltet sich parallel zu R2 und verändert die Ausgangsspannung. Verwende für nennenswerte Ströme einen Operationsverstärker-Puffer oder einen Spannungsregler.' },
];

const howToData = [
  { name: 'Berechnungsmodus wählen', text: 'Wähle Vout berechnen wenn beide Widerstände bekannt sind. Wähle R2 berechnen wenn Versorgungsspannung, R1 und die Zielspannung gegeben sind.' },
  { name: 'Versorgungsspannung und R1 eingeben', text: 'Gib die DC-Spannung und den Wert des oberen Widerstands R1 ein.' },
  { name: 'Unterem Widerstand oder Zielspannung eingeben', text: 'Gib im Modus Vout berechnen den Widerstand R2 ein. Im Modus R2 berechnen gibst du die gewünschte Ausgangsspannung ein.' },
  { name: 'Schaltungsergebnis ablesen', text: 'Lies die Ausgangsspannung, den Querstrom sowie die Verlustleistungen von R1 und R2 ab.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<VoltageDividerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Berechnungen und Funktionsweise von Spannungsteilern', level: 2 },
    { type: 'paragraph', html: 'Ein Spannungsteiler aus zwei in Reihe geschalteten Widerständen wandelt eine Quellspannung in eine kleinere Ausgangsspannung am Mittelabgriff um. Wenn der obere Widerstand <code>R1</code> an die Versorgungsspannung angeschlossen ist und der untere Widerstand <code>R2</code> an Masse liegt, berechnet sich die ideale unbelastete Ausgangsspannung nach der Formel <code>Vout = Vs x R2 / (R1 + R2)</code>. Dieser Rechner zeigt Ihnen neben der Spannung auch den fließenden Querstrom sowie die Wärmeverlustleistung beider Widerstände an.' },
    { type: 'title', text: 'Widerstand für eine gewünschte Zielspannung berechnen', level: 3 },
    { type: 'paragraph', html: 'Wählen Sie den Modus R2 berechnen, wenn die Versorgungsspannung, der obere Widerstand R1 und die gewünschte Ausgangsspannung am Abgriff bekannt sind. Der Rechner stellt die Spannungsteilerformel um zu <code>R2 = R1 x Vtarget / (Vs - Vtarget)</code>. Eine Zielspannung nahe der Versorgungsspannung erfordert einen deutlich größeren Widerstand R2, während eine Zielspannung nahe 0 V einen entsprechend kleineren Wert für R2 verlangt.' },
    { type: 'title', text: 'Querstrom und Verlustleistung der Widerstände ablesen', level: 3 },
    { type: 'paragraph', html: 'Der Spannungsteiler zieht kontinuierlich einen Querstrom von <code>I = Vs / (R1 + R2)</code> aus der Quellspannung. Jeder Widerstand wandelt dabei Leistung nach der Formel <code>P = I² x R</code> in Wärme um. Überprüfen Sie beide Werte sorgfältig mit den Nennleistungen der gewählten Widerstände, insbesondere beim Einsatz an höheren Versorgungsspannungen.' },
    { type: 'title', text: 'Einfluss einer angeschlossenen Schaltung und Belastung', level: 3 },
    { type: 'paragraph', html: 'Die berechneten Werte gelten für einen idealen unbelasteten Spannungsteiler. Jede an Vout angeschlossene Last wirkt als Parallelschaltung zu R2, was den effektiven Gesamtwiderstand des unteren Zweigs verringert und sowohl die Ausgangsspannung als auch den Gesamtstrom verändert. Für Signale oder Referenzspannungen, die eine nachfolgende Last speisen müssen, sollte ein Impedanzwandler (Operationsverstärker-Puffer) oder ein echter Spannungsregler verwendet werden.' },
    { type: 'list', items: ['Wählen Sie die Zielspannung strikt zwischen 0 V und der Versorgungsspannung.', 'Verwenden Sie für R1 und R2 stets dieselbe Widerstandseinheit.', 'Prüfen Sie die Belastbarkeit beider Widerstände einzeln und nicht nur die Gesamtleistung.', 'Berücksichtigen Sie Bauteiltoleranzen und Schwankungen der Versorgungsspannung.', 'Betrachten Sie das Ergebnis solange als Leerlaufspannung, bis die Last im Modell berücksichtigt ist.'] },
    { type: 'tip', title: 'Der Mittelabgriff ist keine Stromversorgung', html: 'Ein Spannungsteiler ist eine einfache Methode zur Bereitstellung von Referenzspannungen oder zur Signalabschwächung, besitzt jedoch einen nicht zu vernachlässigenden Innenwiderstand. Bei Strömen an der Last ist ein Puffer erforderlich.' },
  ],
  ui: {
    modeHeader: 'Berechnungsmodus',
    modePredict: 'Vout berechnen',
    modeTarget: 'R2 berechnen',
    inputHeader: 'Schaltungsparameter',
    supplyLabel: 'Versorgungsspannung Vs',
    topLabel: 'Oberer Widerstand R1',
    bottomLabel: 'Unterer Widerstand R2',
    targetLabel: 'Zielspannung Vout',
    voltageUnit: 'V',
    resistanceUnit: 'Ω',
    resultHeader: 'Spannungsverlauf',
    outputLabel: 'Ausgangsspannung',
    currentLabel: 'Querstrom',
    totalPowerLabel: 'Gesamtleistung',
    topPowerLabel: 'Leistung R1',
    bottomPowerLabel: 'Leistung R2',
    ratioLabel: 'der Versorgungsspannung',
    statusNominal: 'Gültige Berechnung',
    statusInvalid: 'Eingaben prüfen',
    statusTargetInvalid: 'Zielspannung muss unter Vs liegen',
    formulaHeader: 'Angewendete Formel',
    formulaPredict: 'Vout = Vs x R2 / (R1 + R2). Der Abgriff zeigt die berechnete Spannung.',
    formulaTarget: 'R2 = R1 x Vtarget / (Vs - Vtarget). Berechnet den benötigten Widerstand R2.',
    supplyNode: 'VERSORGUNG',
    topNode: 'R1',
    tapNode: 'VOUT',
    bottomNode: 'R2',
    groundNode: 'MASSE',
    hint: 'Gib beide Widerstände ein um Vout zu bestimmen.',
    targetHint: 'Wähle eine Zielspannung zwischen 0 V und Vs.',
    note: 'Unbelasteter Spannungsteiler. Eine Last verändert die Ausgangsspannung.',
  },
};
