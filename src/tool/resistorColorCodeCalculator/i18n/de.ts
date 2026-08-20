import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResistorColorCodeUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = "widerstandsfarbcode-rechner";
const title = "Widerstandsfarbcode Rechner";
const description = "Entschlüssle die Farbringe eines Widerstands und berechne Widerstand, Toleranz, Bereich und Temperaturkoeffizient. Arbeite auch rückwärts von einem Zielwert oder lies SMD Kennzeichnungen.";

const faqData = [{"question":"Wie liest man die Farbringe eines Widerstands?","answer":"Beginne am Ende gegenüber dem etwas abgesetzten Toleranzring. Die ersten zwei oder drei Ringe bilden die Ziffern, danach folgt der Multiplikator und zuletzt die Toleranz."},{"question":"Was bedeutet ein vierfarbiger Widerstandscode?","answer":"Zwei Ringe liefern die Ziffern, der dritte Ring ist der Multiplikator und der vierte Ring beschreibt die Toleranz."},{"question":"Welche Toleranz hat ein Widerstand mit drei Ringen?","answer":"Wenn kein Toleranzring vorhanden ist, wird ein Drei Ring Code üblicherweise mit plus oder minus 20 Prozent interpretiert."},{"question":"Was ist der Unterschied zwischen fünf und sechs Ringen?","answer":"Fünf Ringe verwenden drei Ziffern und einen Toleranzring. Der sechste Ring ergänzt den Temperaturkoeffizienten in ppm pro Grad Celsius."},{"question":"Kann der Rechner SMD Markierungen lesen?","answer":"Ja. Gib einen drei oder vierstelligen Code oder eine Schreibweise wie 4R7 ein. Das R kennzeichnet dabei das Dezimaltrennzeichen."},{"question":"Ist der berechnete Wert ein Sicherheitsnachweis?","answer":"Nein. Prüfe zusätzlich Leistung, Spannung, Temperaturbereich, Bauteiltoleranz und die Anforderungen der Schaltung."}];

const howToData = [{"name":"Ringanzahl wählen","text":"Wähle drei, vier, fünf oder sechs Ringe passend zum Bauteil."},{"name":"Farben auswählen","text":"Aktiviere eine Ringposition und wähle die Farbe aus der Palette. Die Zeichnung aktualisiert sich sofort."},{"name":"Ergebnis prüfen","text":"Lies Widerstand, Toleranz, zulässigen Bereich und gegebenenfalls den Temperaturkoeffizienten ab."},{"name":"Leserichtung bestätigen","text":"Halte den Toleranzring möglichst rechts und vergleiche das Ergebnis mit Schaltplan oder Datenblatt."}];

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
  inLanguage: "de",
};

export const content: ToolLocaleContent<ResistorColorCodeUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [{"type":"title","text":"Widerstandsfarbcode Rechner","level":2},{"type":"paragraph","html":"Lies drei, vier, fünf oder sechs Farbringe direkt im Browser. Der Rechner wandelt jede Farbe in Ziffern, Multiplikator, Toleranz, Widerstand und Messbereich um und zeigt bei sechs Ringen auch den Temperaturkoeffizienten."},{"type":"title","text":"So liest du einen Widerstandscode","level":3},{"type":"paragraph","html":"Beginne am Ende gegenüber dem Toleranzring. Zwei oder drei Ringe bilden die Ziffern, der nächste Ring liefert den Multiplikator und der Toleranzring beschreibt die erwartete Abweichung vom Nennwert."},{"type":"table","headers":["Ringanzahl","Signifikante Ziffern","Zusätzliche Angabe","Typische Verwendung"],"rows":[["Drei Ringe","Zwei","20 Prozent Standardtoleranz","Allgemeine Identifikation"],["Vier Ringe","Zwei","Toleranz","Übliche bedrahtete Widerstände"],["Fünf Ringe","Drei","Toleranz","Präzisionswiderstände"],["Sechs Ringe","Drei","Toleranz und Temperaturkoeffizient","Präzisionsschaltungen"]]},{"type":"title","text":"Rückwärts von einem Zielwert arbeiten","level":3},{"type":"paragraph","html":"Im Rückwärtsmodus gibst du den gewünschten Widerstand ein. Der Rechner rundet auf einen darstellbaren Wert und zeigt die dafür entstehenden Farbringe."},{"type":"title","text":"SMD Kennzeichnungen","level":3},{"type":"paragraph","html":"SMD Widerstände verwenden häufig drei oder vier Ziffern. Die letzte Ziffer ist die Zehnerpotenz. Das R ersetzt das Dezimaltrennzeichen, daher bedeutet 4R7 4,7 Ohm."},{"type":"title","text":"Vor der Installation prüfen","level":2},{"type":"list","items":["Vergleiche den Wert mit Schaltplan oder Servicedokumentation.","Prüfe Toleranz und Belastbarkeit im Datenblatt.","Nutze den Abstand des Toleranzrings zur Bestätigung der Leserichtung.","Messe ein isoliertes Bauteil, wenn die Markierung beschädigt oder unklar ist.","Ein Farbcode ersetzt keine Prüfung der elektrischen Sicherheit."]},{"type":"tip","title":"Hinweis","html":"Der Rechner identifiziert die Markierung. Er prüft weder Widerstand, Leistung, Isolationsspannung noch die langfristige Zuverlässigkeit des Bauteils."}],
  ui: {"sceneKicker":"EIA Farbspektrum Labor","hint":"Wähle einen Ring und danach eine Farbe. Der Widerstand antwortet sofort.","decodeMode":"Ringe entschlüsseln","reverseMode":"Rückwärts arbeiten","smdMode":"SMD lesen","bandCount":"Ringanzahl","bandCount3":"3 Ringe","bandCount4":"4 Ringe","bandCount5":"5 Ringe","bandCount6":"6 Ringe","selectBand":"Ring auswählen","colorPalette":"Farbpalette","bandLabel":"Ring","resistance":"Widerstand","tolerance":"Toleranz","range":"Zulässiger Bereich","temperatureCoefficient":"Temperaturkoeffizient","noTempco":"Nicht codiert","targetResistance":"Zielwiderstand in Ohm","targetHint":"Gib eine Zahl ein, zum Beispiel 4700.","targetUnit":"Ohm","toleranceChoice":"Zieltoleranz","tolerance20":"20 Prozent","tolerance10":"10 Prozent","tolerance5":"5 Prozent","tolerance2":"2 Prozent","tolerance1":"1 Prozent","smdCode":"SMD Kennzeichnung","smdHint":"Verwende 472 für 4,7 kΩ oder 4R7 für 4,7 Ω.","decodeSmd":"Kennzeichnung lesen","valueUnit":"Ω","ohms":"Ohm","kiloohms":"Kiloohm","megaohms":"Megaohm","gigaohms":"Gigaohm","minValue":"Minimum","maxValue":"Maximum","actualValue":"Entschlüsselter Wert","requestedValue":"Zielwert","status":"Status","statusReady":"Bereit zum Lesen","statusCheck":"Nächstliegender darstellbarer Wert","statusInvalid":"Code prüfen","orientationNote":"Leserichtung: Der etwas abgesetzte Toleranzring steht möglichst rechts. Gold und Silber sind keine Ziffernringe.","reverseNote":"Der Rückwärtsmodus wählt einen darstellbaren Wert und zeigt den entstehenden Farbcode.","smdNote":"Diese kompakte Ansicht liest die SMD Markierung, aber keine Toleranz aus dem Code.","colorBlack":"Schwarz","colorBrown":"Braun","colorRed":"Rot","colorOrange":"Orange","colorYellow":"Gelb","colorGreen":"Grün","colorBlue":"Blau","colorViolet":"Violett","colorGray":"Grau","colorWhite":"Weiß","colorGold":"Gold","colorSilver":"Silber"},
};

