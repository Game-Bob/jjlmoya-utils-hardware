import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PsuPowerRequirementUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'psu-leistungsrechner-computer';
const title = 'PSU Leistungsrechner für PCs';
const description = 'Schätze die benötigte Netzteilleistung deines PCs anhand der Komponentenlast, der Transientenmarge, der Aufrüstungsreserve und des bereits verbauten Netzteils.';

const faqData = [
  { question: 'Wie berechne ich die benötigte PSU-Leistung für einen PC?', answer: 'Addiere die erwartete Leistung von Prozessor, Grafikkarte, Mainboard, Speicher, Lüftern und Peripherie. Ergänze anschließend eine Transientenmarge und eine Wachstumsreserve, bevor du auf eine praktische Netzteilgröße aufrundest.' },
  { question: 'Soll ich TDP oder gemessene Leistungswerte verwenden?', answer: 'Verwende gemessene Werte oder die vom Hersteller angegebene Board-Power, wenn sie verfügbar ist. TDP ist ein Planungswert und garantiert nicht den maximalen Verbrauch jeder Anwendung. Plane deshalb zusätzliche Reserve ein und prüfe die Bauteilspezifikationen.' },
  { question: 'Was bedeutet die Transientenmarge?', answer: 'Sie berücksichtigt kurze Verbrauchsspitzen und die Unsicherheit der geschätzten Dauerlast. Dadurch wird das Netzteil nicht exakt auf den normalen Lastwert des Systems ausgelegt.' },
  { question: 'Warum kann ein sehr großes Netzteil eine schlechte Wahl sein?', answer: 'Ein stark überdimensioniertes Gerät kostet oft mehr und arbeitet möglicherweise außerhalb seines bevorzugten Wirkungsgradbereichs. Wähle ausreichend Leistung und Reserve und prüfe zusätzlich Anschlüsse, Format, Rails und Plattformkompatibilität.' },
  { question: 'Was ist der Unterschied zwischen minimaler und empfohlener PSU?', answer: 'Die minimale PSU deckt die berechnete Komponentenlast einschließlich Transientenmarge ab. Die empfohlene PSU enthält zusätzlich eine Wachstumsreserve und bietet mehr Spielraum für Upgrades, Unsicherheit und wechselnde Arbeitslasten.' },
  { question: 'Wie beeinflussen GPU-Spitzen die Auswahl des Netzteils?', answer: 'Eine Grafikkarte kann kurzzeitig mehr als ihre dauerhafte Board-Power aufnehmen. Nutze eine Transientenmarge, beachte die Hinweise des GPU-Herstellers und prüfe die benötigten Anschlüsse sowie das Transientenverhalten des Netzteils.' },
  { question: 'Reicht ein Wattrechner allein für die Auswahl eines Netzteils?', answer: 'Nein. Watt sind nur ein Teil der Entscheidung. Prüfe Bauform, Anschlüsse, Plattformkompatibilität, Schutzschaltungen, Effizienzzertifizierung, Garantie und unabhängige Qualitätstests.' },
];

const howToData = [
  { name: 'Komponentenleistung eintragen', text: 'Trage realistische Werte für Prozessor, Grafikkarte, Mainboard, Speicher, Lüfter und Peripherie ein.' },
  { name: 'Verbautes Netzteil angeben', text: 'Übernimm die Leistung des vorhandenen Netzteils oder trage null ein, wenn du einen neuen PC planst.' },
  { name: 'Planungsmargen einstellen', text: 'Nutze die Transientenmarge für kurze Spitzen und die Wachstumsreserve für Upgrades, zusätzliche Laufwerke oder weitere Karten.' },
  { name: 'Empfehlung lesen', text: 'Vergleiche minimale und empfohlene PSU mit deinem aktuellen Gerät und nutze den Status als Planungshinweis.' },
  { name: 'Hardware prüfen', text: 'Bestätige Bauform, Anschlüsse, Grafikkartenanforderungen und Herstellerhinweise, bevor du die Empfehlung als Kaufentscheidung nutzt.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'de' };

export const content: ToolLocaleContent<PsuPowerRequirementUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'PSU Leistungsrechner für PC-Builds', level: 2 },
    { type: 'paragraph', html: 'Schätze die benötigte Netzteilleistung aus der erwarteten Last jedes Bauteils. Der Rechner trennt Grundlast, Transientenmarge, Aufrüstungsreserve, Mindestleistung und empfohlene PSU, damit du dein vorhandenes Gerät mit dem Bedarf des Builds vergleichen kannst.' },
    { type: 'title', text: 'So funktioniert die Leistungsberechnung', level: 3 },
    { type: 'paragraph', html: 'Die Grundlast ist die Summe aus Prozessor, Grafikkarte, Mainboard, Speicher, Lüftern und Peripherie. Danach werden eine Marge für kurze Spitzen und eine Reserve für zukünftige Änderungen addiert. Das Ergebnis wird auf den nächsten praktischen 50-Watt-Schritt aufgerundet.' },
    { type: 'table', headers: ['Eingabe', 'Warum sie wichtig ist', 'Planungshinweis'], rows: [['Prozessorleistung', 'Bestimmt einen großen Teil der Dauerlast', 'Nutze Package-Power oder einen Messwert aus der geplanten Arbeitslast.'], ['Grafikkartenleistung', 'Ist beim Gaming oft die größte Last', 'Nutze die Board-Power und berücksichtige kurze Verbrauchsspitzen.'], ['Mainboard und Speicher', 'Deckt den Plattformverbrauch ab', 'Berücksichtige Chipsatz, Speicher, Spannungsversorgung und Onboard-Geräte.'], ['Speicher und Lüfter', 'Ergänzen Dauer- und Anlaufverbrauch', 'Zähle jedes Laufwerk, jede Pumpe und jeden Lüfter mit.'], ['Margen', 'Schützen vor Unsicherheit und Upgrades', 'Erhöhe sie bei unsicheren Daten oder einem geplanten Ausbau.']] },
    { type: 'title', text: 'Eine sichere Netzteilgröße auswählen', level: 3 },
    { type: 'list', items: ['Vergleiche immer den Minimal- und den Empfehlungswert.', 'Prüfe die nötigen Anschlüsse und die Bauform des Netzteils.', 'Bestätige die Eignung für das Lastverhalten der Grafikkarte.', 'Behandle das Ergebnis als Planungsschätzung und prüfe die endgültigen Hardwaredaten.'] },
    { type: 'title', text: 'Was der Status des aktuellen Netzteils bedeutet', level: 3 },
    { type: 'paragraph', html: 'Ein Gerät unterhalb der Mindestleistung reicht für die eingegebenen Werte nicht aus. Zwischen Minimum und Empfehlung ist die Reserve knapp. Ein Netzteil auf Empfehlungsniveau bietet praktischen Spielraum, während ein sehr großes Gerät mehr Kapazität als nötig liefern kann.' },
    { type: 'title', text: 'Minimale und empfohlene Leistung im Vergleich', level: 3 },
    { type: 'paragraph', html: 'Der Minimalwert ist die Untergrenze für die eingegebenen Schätzungen. Er ist kein ideales Kaufziel, wenn die Bauteildaten unsicher sind. Der Empfehlungswert berücksichtigt kurze Spitzen und spätere Änderungen und wird auf 50 Watt aufgerundet. Zusätzlich müssen GPU-Anschlüsse und Gehäuseformat passen.' },
    { type: 'title', text: 'GPU-Transienten und Plattformprüfung', level: 3 },
    { type: 'paragraph', html: 'Grafikkarten können kurze Leistungsspitzen erzeugen, die in einer einfachen Dauerlastzahl fehlen. Die Transientenmarge ist eine Planungshilfe und ersetzt nicht die Angaben der Hersteller. Prüfe PCIe-Anschlüsse, Kabelaufteilung, ATX-Anforderungen, Schutzfunktionen und unabhängige Tests.' },
    { type: 'table', headers: ['Planungssituation', 'Sinnvoller Ansatz', 'Was zu prüfen ist'], rows: [['Bekannte Messwerte', 'Messlast mit moderater Marge verwenden', 'Arbeitslast, Spitzenverhalten und Anschlüsse'], ['Neuer Gaming-PC', 'Board-Power und Wachstumsreserve einplanen', 'GPU-Transienten, PCIe-Kabel und Gehäuseformat'], ['Geplante Upgrades', 'Wachstumsreserve vor dem Runden erhöhen', 'Upgrade-Pfad, Laufwerke, Karten und Kühlung'], ['Unbekannte Hardware', 'Konservative Werte verwenden und nicht am Minimum kaufen', 'Herstellerdaten und unabhängige Netzteiltests']] },
    { type: 'title', text: 'Was dieser Rechner nicht bestätigen kann', level: 3 },
    { type: 'paragraph', html: 'Das Tool schätzt Kapazität anhand deiner Eingaben. Es kann nicht feststellen, ob ein bestimmtes Netzteil echt, leise, gut geschützt, für dein Gehäuse passend oder bei jedem Transientenmuster sicher ist. Nutze die Empfehlung als Planungsbereich und prüfe das konkrete Modell anhand offizieller Angaben und seriöser Hardwaretests.' },
  ],
  ui: {
    sceneKicker: 'Energiekonstellation', deckTitle: 'Kanäle abstimmen', deckHint: 'Ziehe einen Kanal, damit die Skulptur reagiert', presetsHeader: 'Build-Vorlagen', officePreset: 'Office', gamingPreset: 'Gaming', highEndPreset: 'High End', workstationPreset: 'Workstation', miniPcPreset: 'Mini PC', componentsHeader: 'Komponentenlast', cpuWatts: 'Prozessor', gpuWatts: 'Grafikkarte', motherboardWatts: 'Mainboard und Speicher', storageWatts: 'Speicher', fansWatts: 'Lüfter und Kühlung', peripheralsWatts: 'Peripherie', currentPsuWatts: 'Aktuelle PSU-Leistung', showAdvanced: 'Detaillierte Lastwerte abstimmen', hideAdvanced: 'Detaillierte Lastwerte ausblenden', marginsHeader: 'Planungsmargen', transientMargin: 'Transientenmarge', growthMargin: 'Wachstumsmarge', wattsUnit: 'W', baseLoad: 'Grundlast', minimumPsu: 'Minimale PSU', recommendedPsu: 'Empfohlene PSU', currentPsu: 'Aktuelle PSU', headroom: 'Reserve', statusLabel: 'Build-Status', statusInsufficient: 'Unzureichend', statusTight: 'Knapp', statusRecommended: 'Empfohlen', statusOversized: 'Überdimensioniert', summaryPrefix: 'Nächster Schritt:', diagramTitle: 'Leistungsobservatorium', currentMarker: 'Aktuelle PSU', minimumMarker: 'Minimum', recommendedMarker: 'Empfohlen', adviceInsufficient: 'Wähle eine PSU mindestens auf Empfehlungsniveau und prüfe die Grafikkartenanschlüsse.', adviceTight: 'Der Build liegt nahe am Limit. Wähle die Empfehlung, wenn du Platz für Upgrades möchtest.', adviceRecommended: 'Deine aktuelle PSU erfüllt das Planungsziel. Prüfe Anschlüsse, Bauform und Plattformhinweise.', adviceOversized: 'Die Kapazität ist großzügig. Prüfe Effizienz, Platz und Anschlussbelegung vor dem Kauf.', inputHint: 'Nutze möglichst Messwerte. Das Ergebnis ist eine Planungsschätzung und ersetzt nicht die Prüfung der endgültigen Hardwaredaten.',
  },
};
