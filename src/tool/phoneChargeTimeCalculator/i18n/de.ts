import type { ToolLocaleContent } from '../../../types';
import type { PhoneChargeTimeCalculatorUI } from '../ui';
import { createPhoneChargeTimeCalculatorContent } from './createContent';

const ui: PhoneChargeTimeCalculatorUI = {
  capacityLabel: 'Akkukapazität', capacityUnit: 'mAh', capacityHint: 'Wert aus den technischen Daten des Telefons.',
  currentLabel: 'Aktueller Ladestand', targetLabel: 'Ziel-Ladestand', percentUnit: '%', powerLabel: 'Ladeleistung', powerUnit: 'W',
  efficiencyLabel: 'Geschätzter Wirkungsgrad', efficiencyUnit: '%', efficiencyHint: 'Berücksichtigt Umwandlungs- und Wärmeverluste.',
  statusEmpty: 'Gib die Daten deines Telefons und Ladegeräts ein.', statusReady: 'Wird während der Eingabe aktualisiert.', statusError: 'Prüfe den markierten Wert.',
  resultTitle: 'Geschätzte Zeit bis zum Ziel', energyLabel: 'Noch benötigte Energie', energyUnit: 'Wh', fromCurrentCharge: 'ab dem aktuellen Ladestand', startNowLabel: 'Jetzt gestartet, erreicht',
  scenarioTitle: 'Referenzszenarien für Ladegeräte', scenarioAt: 'gleiches Telefon und gleicher Ladebereich', assumptionsTitle: 'Annahmen',
  assumptionsText: 'Verwendet eine nominale Akkuspannung von {voltage} V, {efficiency}% Wirkungsgrad und etwa {taper}% zusätzlichen Ladeverlauf über 70%. Dein Telefon kann anders laden.',
  errorCapacity: 'Gib eine Akkukapazität über null ein.', errorCurrent: 'Der aktuelle Ladestand muss zwischen 0 und 100% liegen.', errorTarget: 'Der Ziel-Ladestand muss zwischen 1 und 100% liegen.',
  errorTargetOrder: 'Der Ziel-Ladestand muss höher als der aktuelle Ladestand sein.', errorPower: 'Gib eine Ladeleistung über null ein.', errorEfficiency: 'Der Wirkungsgrad muss zwischen 50% und 100% liegen.',
  targetMarker: 'Ziel', chargeProgressLabel: 'Ladebereich', hourUnit: 'Std.', minuteUnit: 'Min.',
};

const faq = [
  { question: 'Kann ich die Ladezeit nur anhand des Akkustands berechnen?', answer: 'Nein. Derselbe Prozentsatz steht bei kleinen und großen Akkus für unterschiedlich viel Energie. Der Rechner benötigt deshalb auch die Akkukapazität, die Leistung am Telefon und einen Wirkungsgrad.' },
  { question: 'Warum lädt mein Telefon manchmal länger als geschätzt?', answer: 'Das Telefon kann die Leistung wegen eines hohen Ladestands, Wärme, eines begrenzenden Kabels oder Ladeprotokolls oder wegen aktiver Nutzung reduzieren. Das Ergebnis ist eine Planungsschätzung, keine Live-Messung.' },
  { question: 'Soll ich die Ladegerätleistung oder die Ladeleistung des Telefons eingeben?', answer: 'Verwende die Leistung, die das Telefon voraussichtlich erhält, wenn du sie kennst. Ist nur die Angabe des Ladegeräts bekannt, nutze sie als obere Schätzung und rechne mit einer längeren realen Ladezeit.' },
];

const howTo = [
  { name: 'Akkukapazität eingeben', text: 'Lies die Kapazität in den technischen Daten des Telefons nach und gib sie in mAh ein. Eine Powerbank ist kein Ersatz, weil ihre Spannung und Umwandlungsverluste anders sind.' },
  { name: 'Ladebereich festlegen', text: 'Gib den aktuellen und den gewünschten Ladestand ein. Ein kurzer Ladevorgang von 20% auf 50% ergibt eine andere Zeit als eine vollständige Ladung.' },
  { name: 'Leistung und Wirkungsgrad ergänzen', text: 'Gib die Leistung in Watt oder, falls bekannt, die tatsächliche Ladeleistung des Telefons ein. Lass den Standardwert beim Wirkungsgrad stehen, sofern du keinen Messwert hast.' },
  { name: 'Szenarien vergleichen', text: 'Vergleiche die Zeit mit den Referenzbalken für 5 W, 15 W und 30 W, um zu entscheiden, ob dein Ladegerät für die verfügbare Zeit ausreicht.' },
];

const seo = [
  { type: 'title' as const, text: 'Handy-Ladezeit realistisch berechnen', level: 2 as const },
  { type: 'paragraph' as const, html: 'Nutze diesen Handy-Ladezeit-Rechner, wenn du vor dem Losgehen, auf Reisen oder vor einem langen Anruf wissen möchtest, ob dein Akku rechtzeitig einen brauchbaren Ladestand erreicht. Gib Akkukapazität, aktuellen Ladestand, Zielwert, Ladeleistung und Wirkungsgrad ein. Das Ergebnis zeigt die voraussichtlichen Minuten und die noch benötigte Energie für genau diesen Ladebereich.' },
  { type: 'title' as const, text: 'Welche Werte du eingeben solltest', level: 2 as const },
  { type: 'list' as const, items: ['Akkukapazität: Verwende die Angabe des Telefons in mAh, nicht die Kapazität einer Powerbank.', 'Aktueller und gewünschter Ladestand: Berechne den Ladevorgang, den du wirklich brauchst; der Zielwert muss höher sein.', 'Leistung und Wirkungsgrad: Nutze die Ladeleistung des Telefons, wenn sie bekannt ist. Die Ladegerätangabe ist sonst nur eine obere Schätzung.'] },
  { type: 'title' as const, text: 'Das Ergebnis richtig lesen', level: 2 as const },
  { type: 'paragraph' as const, html: 'Die Hauptzahl beschreibt die Zeit vom aktuellen bis zum gewünschten Ladestand. Die Angabe in Wh zeigt dieselbe Ladestrecke als Energie, die Referenzbalken machen den Unterschied zwischen 5 W, 15 W und 30 W sichtbar. Wenn die verfügbare Zeit nicht reicht, senke den Zielwert oder verwende ein Ladegerät und Kabel, die das Telefon tatsächlich schneller nutzen kann.' },
  { type: 'title' as const, text: 'Warum das Laden nahe 100% langsamer wird', level: 2 as const },
  { type: 'paragraph' as const, html: 'Ein Telefon lädt normalerweise nicht von leer bis voll mit einer konstanten Wattzahl. Wenn sich der Akku einem hohen Ladestand nähert, kann die Ladeelektronik den Strom reduzieren, um Wärme und Belastung zu begrenzen. Deshalb ist eine Schätzung von 20% auf 80% oft nützlicher als eine lineare Hochrechnung bis 100%. Für Ziele über 70% berücksichtigt der Rechner einen kleinen zusätzlichen Ladeverlauf.' },
  { type: 'title' as const, text: 'Schätzung: Was der Rechner nicht erkennen kann', level: 2 as const },
  { type: 'list' as const, items: ['Er kann Telefonmodell, Akkuzustand, Ladeprotokoll, Kabel, Temperatur, Nutzung oder die aktuelle Ladeleistung nicht auslesen.', 'Er diagnostiziert keine Akkuschäden und bestätigt keine Schnelllade-Kompatibilität. Für eine genaue Situation misst du am besten dasselbe Telefon mit demselben Kabel und Ladegerät.'] },
];

export const content: ToolLocaleContent<PhoneChargeTimeCalculatorUI> = createPhoneChargeTimeCalculatorContent({ locale: 'de', slug: 'handy-ladezeit-rechner', title: 'Handy Ladezeit Rechner', description: 'Berechne, wie lange dein Handy für einen bestimmten Ladestand braucht - anhand von Akkukapazität, aktuellem Ladestand, Ladeleistung und Wirkungsgrad.', faq, howTo, seo, ui });
