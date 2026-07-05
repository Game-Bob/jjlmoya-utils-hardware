import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebMidiKeyboardTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'midi-keyboard-tester-online';
const title = 'WebMIDI Keyboard Tester';
const description = 'Testen Sie ein USB-MIDI-Keyboard, einen Synthesizer, einen Pad-Controller, das Pitch-Bend-Rad, das Modulationsrad, die Anschlagdynamik und hängende Noten direkt im Browser mit Web MIDI.';

const faqData = [
  {
    question: 'Kann dieser MIDI-Keyboard-Tester mein USB-Keyboard ohne Softwareinstallation auslesen?',
    answer: 'Ja, in Browsern, die Web MIDI unterstützen, wie Chrome und Edge. Der Browser fordert eine Berechtigung an, dann hört das Tool auf Noten-, Anschlagdynamik-, Pitch-Bend- und Modulationsmeldungen vom ausgewählten MIDI-Eingang.',
  },
  {
    question: 'Lädt die Website meine MIDI-Noten oder Spieldaten hoch?',
    answer: 'Nein. MIDI-Ereignisse werden im aktuellen Browser-Tab verarbeitet. Noten, Anschlagdynamikwerte, Controller-Meldungen, Gerätenamen und Protokolle werden von der Website weder hochgeladen noch gespeichert.',
  },
  {
    question: 'Warum erscheint mein MIDI-Keyboard, aber es leuchtet keine Taste auf?',
    answer: 'Das Gerät ist möglicherweise als Control-Surface verbunden, der Browser hat den falschen Eingangsport ausgewählt, das Keyboard verwendet einen anderen Modus oder das Kabel/der Hub liefert Strom, aber keine MIDI-Daten.',
  },
  {
    question: 'Kann ich Pitch-Bend- und Modulationsräder testen?',
    answer: 'Ja. Der Tester zeigt Pitch Bend als zentrierten vorzeichenbehafteten Wert und Modulation als MIDI CC1 an. Das Bewegen dieser Bedienelemente sollte die Anzeigen sofort aktualisieren, wenn das Gerät standardmäßige MIDI-Meldungen sendet.',
  },
  {
    question: 'Welche MIDI-Meldungen werden angezeigt?',
    answer: 'Die Live-Oberfläche hebt Note-On- und Note-Off-Meldungen hervor, zeichnet die Anschlagdynamik auf, erkennt Pitch Bend und verfolgt das Modulationsrad CC1. Andere Controller-Meldungen können im Ereignisprotokoll erscheinen, wenn sie für die getesteten Bedienelemente relevant sind.',
  },
];

const howToData = [
  {
    name: 'MIDI-Hardware anschließen',
    text: 'Schließen Sie das Keyboard, den Synthesizer, den Pad-Controller oder das USB-MIDI-Interface an den Computer an, bevor Sie die Berechtigungsabfrage öffnen. Vermeiden Sie unbetriebene Hubs bei der Fehlersuche an sporadisch arbeitenden Geräten.',
  },
  {
    name: 'Browser-MIDI-Zugriff erlauben',
    text: 'Drücken Sie MIDI-Eingang verbinden und genehmigen Sie die Berechtigungsabfrage des Browsers. Verwenden Sie Chrome oder Edge über HTTPS oder localhost, da Web MIDI berechtigungsgesteuert ist.',
  },
  {
    name: 'Tasten über den gesamten Bereich spielen',
    text: 'Drücken Sie tiefe, mittlere und hohe Töne. Die Bildschirmtastatur erweitert sich um die empfangenen Noten und leuchtet jede Taste entsprechend der Anschlagdynamik auf.',
  },
  {
    name: 'Räder und Expression-Controls prüfen',
    text: 'Bewegen Sie das Pitch-Bend-Rad, das Modulationsrad und die Performance-Controls. Das Pitch Bend sollte zur Mitte zurückkehren, während die Modulation von 0 bis 127 durchlaufen sollte.',
  },
  {
    name: 'Ereignisprotokoll lesen',
    text: 'Nutzen Sie das Ereignisprotokoll, um fehlende Note-Off-Meldungen, unerwartete Kanäle, niedrige Anschlagdynamikwerte oder Bedienelemente zu erkennen, die eine andere MIDI-Meldung als erwartet senden.',
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
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<WebMidiKeyboardTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'MIDI-Keyboard-Tester online für echte USB-Hardware', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein zuverlässiger <strong>MIDI-Keyboard-Tester online</strong> sollte schnell eine Frage beantworten: Sendet das physische Instrument die Meldungen, die eine DAW, ein Sampler, ein Synthesizer oder ein Lichtsystem erwartet? Dieser WebMIDI-Tester horcht auf den MIDI-Eingang des Browsers und zeigt Note-On-, Note-Off-, Anschlagdynamik-, Pitch-Bend- und Modulationsraddaten in Echtzeit an. Er ist für USB-MIDI-Keyboards, DIN-auf-USB-Interfaces, Synthesizer, Pad-Controller, Stagepianos, MIDI-Gitarren, Drum-Trigger und kompakte Controller für Homestudios oder Live-Rigs ausgelegt.',
    },
    {
      type: 'message',
      title: 'Private lokale MIDI Diagnose',
      html: 'Der Test läuft vollständig clientseitig. Die Website lädt keine Notennummern, Anschlagdynamikkurven, Controller-Bewegungen, Gerätenamen oder Ereignisprotokolle hoch. Der Browser gibt MIDI erst frei, nachdem Sie die Berechtigungsabfrage genehmigt haben, und die Werte verbleiben im aktuellen Tab.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-127', label: 'MIDI-Anschlagdynamikbereich' },
        { value: '128', label: 'Standard-Notennummern' },
        { value: '14-Bit', label: 'Pitch-Bend-Auflösung' },
        { value: 'CC1', label: 'Modulationsrad-Steuerung' },
      ],
    },
    {
      type: 'table',
      headers: ['Signal', 'Was der Tester anzeigt', 'Gesundes Verhalten'],
      rows: [
        ['Note On', 'Tastenname, Notennummer, Kanal und Anschlagdynamik.', 'Jede physische Taste leuchtet beim Drücken einmal auf und zeigt einen Anschlagdynamikwert über null.'],
        ['Note Off', 'Loslass-Ereignis im Protokoll und Zurücksetzen der Tastenbeleuchtung.', 'Jede gedrückte Taste erlischt beim Loslassen; keine Taste bleibt optisch hängen.'],
        ['Anschlagdynamik', 'Live-Anzeige plus fortlaufende Kurve.', 'Leichtes Spiel erzeugt niedrigere Werte und kräftiges Spiel erreicht höhere Werte ohne zufällige Sprünge.'],
        ['Pitch Bend', 'Zentrierte vorzeichenbehaftete Anzeige von negativ nach positiv.', 'Das Rad streicht gleichmäßig und kehrt beim Loslassen nahe null zurück.'],
        ['Modulation', 'CC1-Anzeige von 0 bis 127.', 'Das Rad oder der Streifen bewegt sich vorhersagbar durch den gesamten Bereich.'],
      ],
    },
    { type: 'title', text: 'So testen Sie ein MIDI-Keyboard ohne DAW', level: 2 },
    {
      type: 'paragraph',
      html: 'Die Suche nach <em>MIDI-Keyboard testen</em> bedeutet oft, dass der Nutzer noch nicht weiß, ob der Fehler am Controller, am Kabel, am Betriebssystem oder an der Musiksoftware liegt. Eine DAW fügt viele zusätzliche Variablen hinzu: Track-Arm-Status, Eingangsfilter, MIDI-Kanal-Routing, virtuelle Instrumente, Monitoring, Vorlagen und Treibereinstellungen. Ein Browser-Tester entfernt den Großteil dieses Stacks. Wenn die WebMIDI-Berechtigungsabfrage das Gerät erkennt und das Keyboard Noten auf dem Bildschirm aufleuchten lässt, ist der physische MIDI-Pfad intakt.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Zuerst dies verwenden, dann DAW Einstellungen ändern',
      html: 'Bestätigen Sie zuerst, dass der Controller rohe MIDI-Daten sendet. Gehen Sie dann zur Fehlersuche in der Musikanwendung über. Wenn der Tester Noten empfängt, die DAW jedoch nicht, überprüfen Sie die MIDI-Eingangsfreigabe, den ausgewählten Track-Eingang, Kanalfilter, Control-Surface-Skripte und das Instrument-Monitoring.',
    },
    {
      type: 'list',
      items: [
        'Schließen Sie das Keyboard wenn möglich direkt am Computer an, besonders wenn die Bus-Stromversorgung knapp ist.',
        'Öffnen Sie den Tester in Chrome oder Edge, da die Web-MIDI-Unterstützung je nach Browser und Plattform variiert.',
        'Drücken Sie MIDI-Eingang verbinden und wählen Sie das Musikgerät oder MIDI-Interface aus der Berechtigungsabfrage.',
        'Spielen Sie chromatische Noten über die gesamte Tastatur, um tote Tasten, Split-Zonen oder Oktav-Transponierungsüberraschungen aufzudecken.',
        'Bewegen Sie die Pitch- und Modulationsräder langsam und dann schnell, um rauschende Sensoren oder ein schlechtes Rückstellverhalten zu erkennen.',
        'Löschen Sie das Protokoll zwischen Tests, wenn Sie Kabel, USB-Ports, Keyboard-Presets oder Controller-Modi vergleichen.',
      ],
    },
    {
      type: 'tip',
      title: 'Schneller Kabeltest',
      html: 'Wenn das Gerät eingeschaltet ist, aber kein MIDI-Eingang erscheint, versuchen Sie ein anderes USB-Kabel. Viele billige USB-Kabel sind reine Ladekabel und übertragen keine Daten, was den Controller lebendig erscheinen lässt, während keine MIDI-Meldungen den Computer erreichen.',
    },
    { type: 'title', text: 'Anschlagdynamikkurven und dynamisches Ansprechverhalten lesen', level: 2 },
    {
      type: 'paragraph',
      html: 'Anschlagdynamik ist nicht gleichbedeutend mit Lautstärke; es ist ein Spielflug, der mit der Note gesendet wird, üblicherweise von 1 bis 127. Ein Piano-Plugin kann Anschlagdynamik auf Lautstärke, Sample-Ebene, Brillanz, Hammergeräusch, Anschlagszeit oder alles gleichzeitig abbilden. Wenn ein Controller eine schlechte Anschlagdynamikabtastung hat, kann der Spieler das Gefühl haben, dass leise Noten verschwinden, mittlere zu laut sind oder kräftige Noten nie die ausdrucksstarke oberste Ebene erreichen. Die fortlaufende Anschlagdynamikkurve hilft dabei zu erkennen, ob die Hardware eine brauchbare Streuung von Werten liefert.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Gesunde Tastatur',
          description: 'Leichte, mittlere und kräftige Anschläge erzeugen sichtbar unterschiedliche Anschlagdynamikbänder mit wiederholbaren Werten bei ähnlicher Spielflug.',
          highlight: true,
        },
        {
          title: 'Komprimiertes Ansprechverhalten',
          description: 'Die meisten Noten ballen sich in einem engen Bereich wie 70-95, wodurch Piano- und Schlagzeuginstrumente flach oder schwer kontrollierbar wirken.',
        },
        {
          title: 'Unberechenbares Ansprechverhalten',
          description: 'Benachbarte Noten oder wiederholte Anschläge springen unvorhersagbar, was auf verschmutzte Kontakte, defekte Sensoren, schlechte Abtastung oder instabile Firmware hindeutet.',
        },
      ],
    },
    {
      type: 'table',
      headers: ['Beobachtetes Anschlagdynamikmuster', 'Wahrscheinliche Interpretation', 'Nächster Test'],
      rows: [
        ['Immer 127', 'Der Fix-Anschlagdynamikmodus ist aktiviert oder der Controller ist für Orgel-/Synth-Triggering konfiguriert.', 'Überprüfen Sie die globalen Keyboard-Einstellungen, den Pad-Modus oder den Controller-Editor.'],
        ['Immer sehr niedrig', 'Die Anschlagdynamikkurve ist zu weich, die Sensorkalibrierung ist falsch oder die Tastatur ist defekt.', 'Wechseln Sie die Anschlagdynamikkurven und vergleichen Sie schwarze und weiße Tasten über Oktaven hinweg.'],
        ['Eine Taste weicht stark ab', 'Ein lokaler Kontakt, eine Gummi-Kuppe, ein optischer Sensor oder ein Tastenmechanismus kann verschmutzt oder beschädigt sein.', 'Wiederholen Sie diese Taste mit verschiedenen Stärken und vergleichen Sie benachbarte Noten.'],
        ['Werte fallen nach Hub-Nutzung ab', 'Stromversorgung oder Datenstabilität können grenzwertig sein.', 'Testen Sie erneut mit einem direkten USB-Port und einem bewährten Datenkabel.'],
      ],
    },
    {
      type: 'card',
      title: 'Warum Note Off wichtig ist',
      html: 'Eine hängende Note ist oft eine fehlende oder verzögerte Note-Off-Meldung. Manche Instrumente senden Note On mit Anschlagdynamik 0 anstelle eines separaten Note-Off-Befehls; beides ist gültiges MIDI-Verhalten. Dieser Tester behandelt Note On mit Anschlagdynamik null als Notenfreigabe, sodass wirklich hängende Tasten sichtbar bleiben, bis die korrekte Freigabemeldung eintrifft.',
    },
    { type: 'title', text: 'Pitch Bend, Modulation und Performance-Controls testen', level: 2 },
    {
      type: 'paragraph',
      html: 'Pitch Bend ist eine MIDI-Meldung mit höherer Auflösung als gewöhnliche 7-Bit-Controller-Daten. Sie kombiniert zwei Datenbytes zu einem 14-Bit-Bereich, der um 8192 zentriert ist. Diese zusätzliche Auflösung ist wichtig, da die Tonhöhenbewegung gleichmäßig klingen sollte, besonders beim Benden eines Lead-Synths, Basses oder Orchesterinstruments. Der Tester wandelt das eingehende Bend in eine zentrierte Anzeige um, sodass leicht zu erkennen ist, ob das Rad beide Extreme erreicht und in die Neutralstellung zurückkehrt.',
    },
    {
      type: 'paragraph',
      html: 'Das Modulationsrad ist normalerweise der MIDI-Continuous-Controller 1, üblicherweise als CC1 notiert. Viele Synth-Patches verwenden es für Vibrato, Filterbewegung, Wavetable-Position, Tremolo oder orchestrale Dynamik. Wenn das Bewegen des Rades die CC1-Anzeige nicht aktualisiert, ist der Controller möglicherweise einem anderen CC zugewiesen, verwendet einen herstellerspezifischen Modus oder wird durch eine Software geleitet, die Performance-Controls neu zuordnet.',
    },
    {
      type: 'proscons',
      title: 'Browser MIDI Test versus DAW Monitoring',
      items: [
        { pro: 'Schnelle berechtigungsbasierte Hardware-Bestätigung ohne Projekteinrichtung.', con: 'Es emuliert nicht jedes DAW-Routing, Skript oder Instrument-Mapping.' },
        { pro: 'Klare Ansicht von Noten, Anschlagdynamik, Pitch Bend und CC1-Modulation.', con: 'Erweitertes Aftertouch, NRPN, MPE, SysEx und benutzerdefinierte Control-Maps benötigen möglicherweise Spezialwerkzeuge.' },
        { pro: 'Gut für Support-Anrufe, Gebrauchtkauf und Kabeltests.', con: 'Browser-Unterstützung hängt von der Web-MIDI-Verfügbarkeit auf der aktuellen Plattform ab.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pitch Rad kehrt nicht auf null zurück',
      html: 'Wenn die Pitch-Anzeige nach dem Loslassen auf einem positiven oder negativen Wert verbleibt, benötigen das physische Rad, die Feder, das Potentiometer, der Hall-Sensor, die Kalibrierung oder die Firmware-Totzone möglicherweise Aufmerksamkeit. Testen Sie denselben Controller an einem anderen Port und Preset, bevor Sie von einem defekten Sensor ausgehen.',
    },
    { type: 'title', text: 'Häufige MIDI-Keyboard-Fehler, die dieser Tester aufdecken kann', level: 2 },
    {
      type: 'glossary',
      items: [
        { term: 'Tote Taste', definition: 'Eine physische Taste, die beim Drücken keine Note-On-Meldung erzeugt.' },
        { term: 'Hängende Note', definition: 'Eine Note, die Note On, aber keine passende Freigabemeldung erhält, wodurch der Klang in Instrumenten aktiv bleibt.' },
        { term: 'Anschlagdynamikspitze', definition: 'Ein plötzlicher Wert, der viel höher oder niedriger ist als bei einem ähnlichen Anschlag erwartet.' },
        { term: 'MIDI-Kanal', definition: 'Einer von 16 logischen Kanälen zur Trennung von Parts, Zonen oder Geräten in einem MIDI-Datenstrom.' },
        { term: 'Control Change', definition: 'Eine MIDI-Meldungsfamilie, die von Reglern, Pedalen, Rädern, Schiebereglern und Schaltern verwendet wird.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Gerät erkannt, keine Meldungen',
      html: 'Wenn der Browser einen MIDI-Eingang auflistet, das Spielen von Tasten aber keine Protokolleinträge erzeugt, prüfen Sie, ob der ausgewählte Port ein Control-Surface-Eingang anstelle des Keyboard-Noteneingangs ist. Manche Interfaces legen mehrere Ports mit ähnlichen Namen offen.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Mögliche Ursache', 'Praktische Maßnahme'],
      rows: [
        ['Keine Berechtigungsabfrage', 'Nicht unterstützter Browser, unsicherer Ursprung oder blockierte Browser-MIDI-Berechtigung.', 'Verwenden Sie Chrome/Edge über HTTPS und überprüfen Sie die Website-Berechtigungen.'],
        ['Gerät fehlt', 'Kabel-, Hub-, Treiber-, Class-Compliance- oder Stromversorgungsproblem.', 'Versuchen Sie ein anderes USB-Datenkabel, einen anderen Port oder einen betriebenen Hub.'],
        ['Nur bestimmte Oktaven funktionieren', 'Split-/Layer-Modus, Transponierungseinstellung, Hardware-Matrixfehler oder Local-Control-Modus.', 'Setzen Sie das Preset zurück und testen Sie chromatisch von tiefen zu hohen Noten.'],
        ['Falsche Notennamen', 'Der Controller ist transponiert oder sendet aus einer Zone mit Oktavverschiebung.', 'Überprüfen Sie globale Transponierung, Zonenoktave und DAW-Vorlageneinstellungen.'],
        ['Modulationsrad stumm', 'Rad ist einer anderen Controller-Nummer zugewiesen oder durch Preset deaktiviert.', 'Laden Sie ein Standard-Preset oder den Controller-Editor und weisen Sie es wieder CC1 zu.'],
      ],
    },
    {
      type: 'summary',
      title: 'Beste Diagnose Reihenfolge',
      items: [
        'Bestätigen Sie, dass der Browser den MIDI-Eingang erkennt.',
        'Spielen Sie Noten und überprüfen Sie das übereinstimmende Druck-/Loslass-Verhalten.',
        'Untersuchen Sie die Anschlagdynamikverteilung mit wiederholten leichten, mittleren und kräftigen Anschlägen.',
        'Bewegen Sie Pitch-Bend- und Modulations-Controls über ihren gesamten Weg.',
        'Erst dann passen Sie DAW-Routing, Einstellungen virtueller Instrumente oder Controller-Vorlagen an.',
      ],
    },
    { type: 'title', text: 'Datenschutz, Browser-Unterstützung und Grenzen', level: 2 },
    {
      type: 'paragraph',
      html: 'Web MIDI ist bewusst berechtigungsgesteuert. Eine Seite kann nicht stillschweigend angeschlossene Musikgeräte im Hintergrund auslesen, ohne dass der Browser einen Zugriffsfluss bereitstellt. Die genaue Abfrage und die Dauerhaftigkeit der Berechtigung hängen von Browser, Betriebssystem und Benutzereinstellungen ab. Für die meisten Musiker ist das praktische Ergebnis einfach: Klicken Sie auf die Verbinden-Schaltfläche, wählen Sie den MIDI-Eingang, führen Sie den Test durch und schließen Sie den Tab, wenn Sie fertig sind.',
    },
    {
      type: 'list',
      items: [
        'Es werden keine MIDI-Ereignisdaten an einen externen Server gesendet.',
        'Der Tester benötigt keinen SysEx-Zugriff, was den Berechtigungsumfang gering hält.',
        'Vom Browser angezeigte Gerätenamen können Hardware-Modelle identifizieren, daher sollten Screenshots mit Bedacht geteilt werden.',
        'Chrome und Edge bieten im Allgemeinen die beste Web-MIDI-Unterstützung; die Unterstützung von Safari und Firefox kann je nach Plattform eingeschränkt oder nicht vorhanden sein.',
        'Native Dienstprogramme können weiterhin für Firmware-Updates, tiefgehende Controller-Bearbeitung, MPE-Analyse, SysEx-Dumps oder herstellerspezifische Diagnosen erforderlich sein.',
      ],
    },
    {
      type: 'card',
      title: 'Wann dieses Tool ausreicht',
      html: 'Für den Kauf eines gebrauchten Controllers, die Überprüfung eines Studio-Kabels, die Validierung eines USB-MIDI-Interfaces, den Test einer reparierten Tastatur oder den Nachweis, dass ein Keyboard Meldungen sendet, bevor man eine DAW öffnet, ist ein WebMIDI-Keyboard-Tester meist der schnellste erste Schritt.',
    },
  ],
  ui: {
    connectButton: 'MIDI-Eingang verbinden',
    refreshButton: 'Eingänge aktualisieren',
    clearButton: 'Protokoll löschen',
    unsupportedTitle: 'Web MIDI ist nicht verfügbar',
    unsupportedBody: 'Verwenden Sie einen Chromium-basierten Browser wie Chrome oder Edge und öffnen Sie die Seite über HTTPS oder localhost.',
    secureContext: 'Web MIDI benötigt eine sichere HTTPS-Seite oder localhost, bevor der Browser MIDI-Eingänge bereitstellen kann.',
    statusIdle: 'Bereit für MIDI-Zugriffsanfrage',
    statusPermission: 'Warte auf Browser-MIDI-Berechtigung',
    statusReady: 'MIDI-Zugriff erteilt',
    statusNoInputs: 'Kein MIDI-Eingang erkannt',
    statusConnected: 'MIDI-Eingang erkannt',
    statusDisconnected: 'MIDI-Gerät getrennt',
    statusError: 'MIDI-Zugriff fehlgeschlagen',
    detectedLabel: 'Erkanntes Gerät',
    noDevice: 'Kein MIDI-Gerät ausgewählt',
    inputLabel: 'Eingang',
    inputIdle: 'keiner',
    channelLabel: 'Kanal',
    notesLabel: 'Noten',
    velocityLabel: 'Anschlagdynamik',
    pitchLabel: 'Pitch',
    modulationLabel: 'Modulation',
    lastEventLabel: 'Letztes Ereignis',
    octaveRangeLabel: 'Sichtbarer Bereich',
    velocityCurveTitle: 'Anschlagdynamikkurve',
    activeNotesTitle: 'Aktive Noten',
    eventLogTitle: 'MIDI-Ereignisprotokoll',
    eventSeparator: '/',
    initialRange: 'C3-B5',
    emptyLog: 'Spielen Sie eine Taste oder bewegen Sie ein Rad, um eingehende MIDI-Meldungen zu sehen.',
    noteOn: 'Note On',
    noteOff: 'Note Off',
    controlChange: 'Control Change',
    pitchBend: 'Pitch Bend',
    allChannels: 'Alle Kanäle',
  },
};
