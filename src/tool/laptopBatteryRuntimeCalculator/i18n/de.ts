import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { LaptopBatteryRuntimeUI } from '../ui';

const slug = 'laptop-akku-laufzeit-rechner';
const title = 'Rechner für die Akkulaufzeit eines Laptops';
const description = 'Schätzen Sie, wie lange Ihr Laptop mit der aktuellen Akkuladung bei leichter, normaler und intensiver Nutzung läuft.';
const faq = [
  { question: 'Was schätzt dieser Laptop-Akkulaufzeit-Rechner?', answer: 'Er teilt die aktuell verfügbare Energie durch die von Ihnen eingegebene Leistungsaufnahme. Das Ergebnis ist eine Planungshilfe, keine Live-Messung und keine Garantie des Herstellers.' },
  { question: 'Wo finde ich Akkukapazität und Gesundheitszustand?', answer: 'Suchen Sie in einem Akku-Report oder in den Angaben des Herstellers nach Designkapazität und aktueller Volladekapazität. Die Akkugesundheit ist die aktuelle Volladekapazität als Prozentsatz der ursprünglichen Kapazität.' },
  { question: 'Warum unterscheiden sich die Laufzeiten je nach Nutzung?', answer: 'Ein Laptop mit höherer Leistungsaufnahme verbraucht dieselbe gespeicherte Energie schneller. Videokonferenzen, Spiele, externe Bildschirme, hohe Helligkeit und dauerhafte Prozessor- oder Grafiklast erhöhen den Durchschnittsverbrauch.' },
  { question: 'Kann das Tool meinen Laptop-Akku automatisch auslesen?', answer: 'Nein. Das Tool arbeitet lokal im Browser und verwendet nur Ihre Eingaben. Ersetzen Sie die Beispielwerte durch einen aktuellen Akku-Report oder eine gemessene durchschnittliche Leistung.' },
];
const howTo = [
  { name: 'Kapazität aus dem Akku-Report ablesen', text: 'Geben Sie die ursprüngliche Designkapazität in Wattstunden ein. Wenn nur Milliamperestunden und Volt vorliegen, rechnen Sie zuerst mit Wh = V × Ah um.' },
  { name: 'Den aktuellen Akku beschreiben', text: 'Setzen Sie die Akkugesundheit auf die aktuelle Volladekapazität im Verhältnis zur ursprünglichen Kapazität und tragen Sie die Ladung beim Start ein.' },
  { name: 'Realistische Lasten festlegen', text: 'Wählen Sie das passende Nutzungsszenario und ändern Sie die Wattwerte, wenn Sie eine Messung Ihres Laptops oder eines Leistungsmessers haben.' },
  { name: 'Eine Reiseentscheidung treffen', text: 'Vergleichen Sie die drei Laufzeitlinien und planen Sie mit der kürzesten plausiblen Zeit. Bei einer knappen oder dringenden Anzeige sollten Sie Last reduzieren oder das Ladegerät mitnehmen.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'de' };

export const content: ToolLocaleContent<LaptopBatteryRuntimeUI> = {
  slug, title, description, faq, howTo, bibliography, schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Was eine Laufzeitschätzung wirklich misst', level: 2 },
    { type: 'paragraph', html: 'Ein Laptop-Akku speichert Energie in Wattstunden. Der Laptop verbraucht diese Energie mit einer Leistung in Watt. Der Rechner verbindet beide Werte zu einer Zeitspanne, damit Sie für Reise, Sitzung, Vorlesung oder Arbeit einschätzen können, ob die Ladung reicht.' },
    { type: 'paragraph', html: 'Zuerst wird die heutige Volladekapazität aus ursprünglicher Kapazität und Akkugesundheit geschätzt. Danach wird die erwartete Startladung angewendet. Dieses Energiebudget wird durch jede Nutzungslinie auf der Laufzeitstrecke geteilt.' },
    { type: 'title', text: 'Eingaben auswählen, denen Sie vertrauen können', level: 2 },
    { type: 'paragraph', html: 'Nutzen Sie einen Akku-Report oder die technischen Daten des Herstellers. Designkapazität, aktuelle Volladekapazität und verbleibende Ladung sind verschiedene Werte. Kennen Sie nur Volt und Amperestunden, rechnen Sie mit <strong>Wh = V × Ah</strong>; 1.000 mAh entsprechen 1 Ah.' },
    { type: 'list', items: ['Berechnen Sie die Akkugesundheit aus aktueller Volladekapazität geteilt durch Designkapazität.', 'Tragen Sie die Ladung ein, die beim Beginn der Sitzung tatsächlich vorhanden sein wird.', 'Verwenden Sie eine gemessene Durchschnittsleistung, wenn die Planung für eine lange Sitzung wichtig ist.', 'Berücksichtigen Sie Dock, externen Bildschirm oder anspruchsvolle Anwendungen in der gewählten Last.'] },
    { type: 'title', text: 'Die Laufzeit als Planungsspanne lesen', level: 2 },
    { type: 'paragraph', html: 'Die leichte Linie passt zu Lesen und einfachen Dokumenten, die ausgewogene Linie zu normalem Multitasking. Die intensive Linie zeigt, wie schnell eine anhaltend hohe Last dieselbe Ladung verbraucht. Vergleichen Sie Ihre erwartete Arbeit mit der benötigten Zeit und planen Sie mit dem kürzesten glaubwürdigen Ergebnis.' },
    { type: 'table', headers: ['Signal', 'Bedeutung', 'Maßnahme'], rows: [['Bequem', 'Mindestens sechs Stunden bei dieser Last', 'Die Sitzung hat einen großen Puffer.'], ['Machbar', 'Drei bis sechs Stunden', 'Für eine definierte Sitzung geeignet, Ladeplan bereithalten.'], ['Knapp', 'Eine bis drei Stunden', 'Last reduzieren oder eine Ladepause einplanen.'], ['Dringend', 'Weniger als eine Stunde', 'Die Nutzung ist vom Ladegerät abhängig.']] },
    { type: 'title', text: 'Was die Schätzung nicht versprechen kann', level: 2 },
    { type: 'paragraph', html: 'Die tatsächliche Leistung ändert sich ständig. Helligkeit, Funkverbindungen, Temperatur, Hintergrundaufgaben, Firmware und Systemreserven verändern die Endzeit. Das Tool liest keine Sensoren aus, modelliert keine Akkuchemie und garantiert keine bestimmte Laufzeit.' },
    { type: 'tip', title: 'Tipp zur Messung', html: 'Notieren Sie bei einer typischen Sitzung Akkustand und verstrichene Zeit. Ersetzen Sie die Preset-Werte durch die daraus abgeleitete durchschnittliche Leistung und rechnen Sie die drei Szenarien erneut.' },
  ],
  ui: {
    batteryInputsLabel: 'Akku-Ausgangspunkt', designCapacityLabel: 'Ursprüngliche Akkukapazität', designCapacityHint: 'Energie des neuen Akkus', healthLabel: 'Akkugesundheit', healthHint: 'Aktuelle Volladung im Vergleich zum Neuzustand', chargeLabel: 'Ladung beim Start', chargeHint: 'Ladung beim Beginn der Arbeit', scenariosLabel: 'Nutzungslaufzeit', scenariosHint: 'Durchschnittliche Leistung für jede Nutzung bearbeiten', powerLabel: 'Durchschnittsverbrauch', wattsSuffix: 'W', presetsLabel: 'Nutzungssatz wählen', presetBalanced: 'Alltag', presetTravel: 'Reise sparen', presetCreative: 'Kreativ intensiv', runwayLabel: 'Energielaufstrecke', runwayCaption: 'Jede Linie zeigt, wann diese Nutzung die gleiche Startladung aufbraucht.', availableEnergyLabel: 'Jetzt verfügbare Energie', fullCapacityLabel: 'Aktuelle Volladekapazität', shortestScenarioLabel: 'Planen mit', runtimeLabel: 'Geschätzte Laufzeit', loadLabel: 'Leistungsaufnahme', healthStateExcellent: 'Akku-Zustand ausgezeichnet', healthStateGood: 'Akku-Zustand gut', healthStateAging: 'Akku wird älter', healthStateWorn: 'Akku stark abgenutzt', statusComfortable: 'Großer Puffer', statusWorkable: 'Nutzbare Sitzung', statusTight: 'Knapp', statusUrgent: 'Ladegerät erforderlich', scenarioLight: 'Leichte Arbeit', scenarioBalanced: 'Ausgewogene Arbeit', scenarioIntense: 'Intensive Arbeit', sceneBatteryLabel: 'Startladung', sceneEnergyLabel: 'Verfügbare Energie', sceneTimeLabel: 'Laufzeit', noteLabel: 'Grenze des Modells', noteText: 'Dies ist eine Planungsschätzung aus Ihren Eingaben. Reale Last und Systemreserven können die Zeit verkürzen.',
  },
};
