import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'input-lag-latenz-test';

const title = 'Input Lag & System Latenz Test';
const description = 'Präziser Online-Test zur Messung von Input Lag, Tastatur-Latenz und Bildschirm-Verzögerung mit hochpräzisen Timern.';

const faqData = [
  {
    question: 'Was ist Input Lag und Systemlatenz?',
    answer: 'Input Lag ist die Zeitspanne zwischen einer physischen Eingabe (Mausklick oder Tastendruck) und der visuellen Aktualisierung auf dem Bildschirm.',
  },
  {
    question: 'Wie misst dieser Test die Latenz im Browser?',
    answer: 'Er nutzt performance.now() bei Hardware-Events und berechnet die Verzögerung bis zur nächsten Frame-Synchronisation via requestAnimationFrame.',
  },
  { question: 'Welche Latenz ist beim Spielen gut?', answer: 'Unter 10 ms gilt als sehr schnell. 10 bis 20 ms ist schnell, 20 bis 35 ms ist moderat und darüber wird die Verzögerung spürbar.' },
  { question: 'Wie kann ich die Eingabelatenz senken?', answer: 'Erhöhe die Bildwiederholrate, prüfe VSync und VRR, stelle eine passende USB Abfragerate ein und teste die Grafikoptionen einzeln.' },
  { question: 'Beeinflusst die Bildwiederholrate die Latenz?', answer: 'Ja. Bei 60 Hz dauert ein Bild 16.67 ms, bei 240 Hz nur 4.17 ms. Rendering und Bildschirmverarbeitung kommen zusätzlich hinzu.' },
];

const howToData = [
  {
    name: 'Testmodus wählen',
    text: 'Wähle zwischen Sofortige Antwort, Tastatur-Latenz oder Visuelle Reaktion.',
  },
  {
    name: 'Eingaben durchführen',
    text: 'Klicke in das Testfeld oder drücke Tasten, um Eingaben zu erfassen.',
  },
  { name: 'Messwerte prüfen', text: 'Vergleiche Mittelwert, Minimum, Maximum und Jitter nach mehreren Eingaben.' },
  { name: 'Bildschirmbedingungen prüfen', text: 'Notiere FPS, Bildmodus und Bildrate, damit spätere Messreihen vergleichbar bleiben.' },
  { name: 'Ergebnis vergleichen', text: 'Wiederhole die Messung nach einer Änderung und bewerte nicht nur einen einzelnen Ausreißer.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Systemlatenz',
  modeInstant: 'Sofortige Antwort',
  modeKey: 'Tastatur-Latenz',
  modeVisual: 'Visuelle Reaktion',
  targetClickPrompt: 'Klicke in dieses Feld, um die Eingabelatenz zu messen',
  targetKeyPrompt: 'Drücke eine beliebige Taste für die Tastatur-Latenz',
  targetWaitPrompt: 'Warte auf grünen Hintergrund...',
  targetNowPrompt: 'JETZT KLICKEN!',
  labelAvgLatency: 'Durchschnitt',
  labelMinLatency: 'Minimum Latenz',
  labelMaxLatency: 'Maximum Latenz',
  labelJitter: 'Jitter (Standardabw.)',
  labelFps: 'Aktuelle FPS',
  labelFrameTime: 'Frame-Zeit',
  labelSamples: 'Stichproben',
  labelGrade: 'Bewertung',
  gradeUltraFast: 'Ultra Schnelligkeit (<10ms)',
  gradeFast: 'Schnell (10-20ms)',
  gradeModerate: 'Moderat (20-35ms)',
  gradeHigh: 'Hoch (>35ms)',
  btnReset: 'Messungen zurücksetzen',
  btnCopyReport: 'Benchmark-Bericht kopieren',
  reportCopied: 'Bericht kopiert!',
  historyTitle: 'Aktuelle Latenzmessungen',
  pipelineTitle: 'Hardware Signal Pipeline Aufschlüsselung',
  distributionTitle: 'Häufigkeitsverteilung (Gauß-Kurve)',
  sampleCol: 'Probe',
  typeCol: 'Eingabetyp',
  latencyCol: 'Gemessene Latenz',
};

export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: 'Messung von Input Lag und Systemlatenz',
    },
    {
      type: 'paragraph',
      html: 'Ermittle die Reaktionszeit deines Systems zwischen Peripherieeingabe und Bildschirmdarstellung.',
    },
    { type: 'title', text: 'Was bedeutet Eingabelatenz', level: 2 },
    { type: 'paragraph', html: 'Die Eingabelatenz beschreibt die Zeit zwischen einer Eingabe und ihrer sichtbaren Reaktion. Ein niedriger Wert fühlt sich direkter an, muss aber immer unter gleichen Bedingungen gemessen werden.' },
    { type: 'title', text: 'So arbeitet die Messung', level: 2 },
    { type: 'paragraph', html: 'Der Test beobachtet Eingaben und Bildwechsel über eine Reihe von Messungen. Einzelne Ausreißer sind weniger aussagekräftig als der typische Wert und die Verteilung.' },
    { type: 'title', text: 'Quellen zusätzlicher Verzögerung', level: 2 },
    { type: 'paragraph', html: 'Controller, USB Verbindung, Betriebssystem, Spiel und Bildschirm können jeweils Verzögerung hinzufügen. Ändere immer nur eine Komponente, wenn du die Ursache suchst.' },
    { type: 'title', text: 'Bildschirm und Bildrate', level: 2 },
    { type: 'paragraph', html: 'Hohe Bildraten verkürzen den Abstand zwischen zwei sichtbaren Bildern. Ein langsamer Modus oder eine aktivierte Nachbearbeitung kann die Reaktion dagegen spürbar verzögern.' },
    { type: 'title', text: 'Kabel gegen Funk vergleichen', level: 2 },
    { type: 'paragraph', html: 'Führe kabelgebundene und drahtlose Messungen mit derselben Bildrate durch. Bei Funkverbindungen können Entfernung, Interferenzen und Energiesparfunktionen die Werte verändern.' },
    { type: 'title', text: 'Jitter richtig einordnen', level: 2 },
    { type: 'paragraph', html: 'Jitter zeigt, wie stark einzelne Messungen schwanken. Ein niedriger Durchschnitt mit großen Spitzen kann sich schlechter anfühlen als ein etwas höherer, aber stabiler Wert.' },
    { type: 'title', text: 'Ausreichend Messungen sammeln', level: 2 },
    { type: 'paragraph', html: 'Wiederhole den Test mehrmals und vergleiche Median, Minimum und Maximum. Eine einzelne schnelle Messung reicht nicht aus, um ein System zu bewerten.' },
    { type: 'title', text: 'Ergebnisse dokumentieren', level: 2 },
    { type: 'paragraph', html: 'Notiere Gerät, Verbindung, Bildschirmmodus und Bildrate zusammen mit dem Ergebnis. So kannst du spätere Änderungen nachvollziehbar vergleichen.' },
    { type: 'title', text: 'Typische Verbesserungen', level: 2 },
    { type: 'paragraph', html: 'Deaktiviere unnötige Nachbearbeitung, verwende einen passenden Bildschirmmodus und halte Treiber aktuell. Prüfe jede Änderung anschließend mit einer neuen Messreihe.' },
    { type: 'title', text: 'Messergebnisse vergleichen', level: 2 },
    { type: 'paragraph', html: 'Vergleiche nur Werte, die unter ähnlichen Bedingungen entstanden sind. Unterschiedliche Spiele oder Eingabegeräte können die Zahlen deutlich verändern.' },
    { type: 'title', text: 'Grenzen des Tests', level: 2 },
    { type: 'paragraph', html: 'Ein Browser kann nicht jede interne Verzögerung eines Spiels oder Treibers sichtbar machen. Nutze das Ergebnis als Vergleichshilfe und nicht als absolute Laborangabe.' },
    { type: 'paragraph', html: 'Wiederhole die Messung nach jeder Änderung und nutze den Median als Hauptvergleich. So erkennst du echte Verbesserungen statt zufälliger Schwankungen.' },
  ],
};
