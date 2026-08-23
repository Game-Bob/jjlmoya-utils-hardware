import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MicrophoneSpectrumTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mikrofon-test-spektrumanalysator';
const title = 'Mikrofontest und Spektrumanalysator';
const description = 'Testen Sie Mikrofoneingang, Live-Pegel, Übersteuerung, Raumgeräusch und Frequenzgang lokal in Ihrem Browser mit einem privaten Echtzeit-Spektrum.';

const faq = [
  {
    question: 'Nimmt dieser Mikrofontest meine Stimme auf oder lädt sie hoch?',
    answer: 'Nein. Der Live-Mikrofonstream wird ausschließlich mit einem Analysator in Ihrem Browser verbunden. Das Tool erstellt keine Audiodatei, verbindet den Analysator nicht mit einem Audioausgang und lädt keine Mikrofonproben auf einen Server hoch.',
  },
  {
    question: 'Was bedeutet dBFS in der Pegelanzeige?',
    answer: 'dBFS bedeutet Dezibel relativ zur digitalen Vollaussteuerung (Full Scale). Null dBFS ist die maximale digitale Spitze, weshalb normale Messwerte negativ sind. Dies ist nicht dasselbe wie eine kalibrierte Schalldruckmessung in dB SPL.',
  },
  {
    question: 'Woran erkenne ich, ob mein Mikrofon übersteuert?',
    answer: 'Sprechen Sie in der lautesten zu erwartenden Lautstärke. Wenn die Spitzen wiederholt den roten Übersteuerungszustand nahe Null dBFS erreichen, reduzieren Sie die Mikrofonverstärkung, vergrößern Sie den Abstand oder deaktivieren Sie aggressive Eingabeverarbeitung im Betriebssystem.',
  },
  {
    question: 'Was zeigt die Raumgeräuschmessung an?',
    answer: 'Die Dreisekunden-Erfassung ermittelt den durchschnittlichen digitalen RMS-Pegel, während Sie ruhig bleiben. Sie hilft beim Vergleich von Einstellungen im selben Browser und Raum, obwohl automatische Verstärkungsregelung und Rauschunterdrückung das Ergebnis beeinflussen können.',
  },
  {
    question: 'Warum verändert sich die dominante Frequenz beim Sprechen?',
    answer: 'Sprache enthält eine sich ändernde Grundfrequenz, Obertöne, Konsonanten und Rauschen. Die Anzeige zeigt den stärksten aktuellen Analysator-Wert zwischen 60 Hz und 12 kHz an. Eine Bewegung ist daher zu erwarten und kein Fehler.',
  },
  {
    question: 'Kann dieser Spektrumanalysator die Mikrofonqualität zertifizieren?',
    answer: 'Nein. Es handelt sich um einen praktischen Browser-Check für Eingang, Pegel, Übersteuerung, Rauschen und sichtbare Frequenzaktivität. Eine Zertifizierung von Frequenzgang oder Schalldruck erfordert kalibrierte Hardware, kontrollierte Signale und eine dokumentierte Messumgebung.',
  },
];

const howTo = [
  {
    name: 'Mikrofonzugriff erteilen',
    text: 'Klicken Sie auf Mikrofon starten und bestätigen Sie die Browserberechtigung. Die Verarbeitung beginnt erst nach dieser expliziten Aktion.',
  },
  {
    name: 'In normalem Arbeitsabstand sprechen',
    text: 'Verwenden Sie Ihre normale Sprech- oder Instrumentenlautstärke und beobachten Sie die Live-dBFS-Anzeige, die Spitzenanzeige und den Spektrumsverlauf.',
  },
  {
    name: 'Den lautesten zu erwartenden Moment prüfen',
    text: 'Erhöhen Sie Ihre Stimme oder spielen Sie die lauteste Passage. Ziel ist es, wiederholtes rotes Übersteuern zu vermeiden und ein klares Signal zu bewahren.',
  },
  {
    name: 'Das Raumgeräusch erfassen',
    text: 'Bleiben Sie ruhig und drücken Sie Drei Sekunden erfassen. Vergleichen Sie den gespeicherten Rauschabstand nach Änderung von Raum, Gerät, Verstärkung oder Einstellungen.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<MicrophoneSpectrumTesterUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'So testen Sie ein Mikrofon im Browser',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieser Mikrofontest beantwortet die ersten Diagnosefragen ohne App-Installation: Erzeugt der gewählte Eingang ein Signal, ist der Pegel nutzbar, übersteuern laute Momente, wie sieht das Raumgeräusch aus und welche Frequenzen sind aktiv? Klicken Sie auf Mikrofon starten, sprechen Sie aus Ihrer normalen Position und lesen Sie die Live-Anzeige ab. Der Analysator läuft auf der aktuellen Seite und erstellt keine Audiodatei.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Private lokale Analyse',
      badge: 'Keine Aufnahme',
      html: '<p>Ihr Browser fordert die Mikrofonberechtigung an, da der Roh-Eingang sensibel ist. Dieses Tool verbindet den Stream ausschließlich mit einem lokalen Analysator. Es werden keine Audiodaten an einen Server gesendet und alle Medien-Spuren werden gestoppt, sobald Sie Mikrofon stoppen drücken.</p>',
    },
    {
      type: 'title',
      text: 'Mikrofonpegel in dBFS verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der große Live-Wert ist eine RMS-Schätzung für die Energie des aktuellen Zeitfensters. Die Spitzenanzeige zeigt den höchsten absoluten Abtastwert in diesem Fenster. Beide nutzen dBFS, wobei Null für die digitale Vollaussteuerung steht und leisere Signale zunehmend negative Werte aufweisen. Die Zustandsanzeige ist eine praktische Orientierungshilfe für diesen Test.',
    },
    {
      type: 'table',
      headers: ['Messwert', 'Bedeutung', 'Empfohlene Maßnahme'],
      rows: [
        ['Stumm oder unter -60 dBFS', 'Der gewählte Eingang erzeugt kein nutzbares Testsignal', 'Prüfen Sie Gerät, Stummschaltung, Berechtigung und Betriebssystem-Eingangspegel'],
        ['Leise unter -35 dBFS', 'Das Signal ist ohne zusätzliche Verstärkung schwer zu nutzen', 'Rücken Sie näher heran oder erhöhen Sie die Eingangsverstärkung'],
        ['Optimal', 'Das aktuelle Signal hat einen guten Pegel und sichtbaren Headroom', 'Wiederholen Sie den Test mit Ihrer lautesten zu erwartenden Stimme'],
        ['Hoch über -6 dBFS Spitze', 'Es verbleibt nur wenig digitaler Headroom', 'Verringern Sie die Verstärkung oder vergrößern Sie den Abstand vor lauten Passagen'],
        ['Übersteuerung nahe 0 dBFS', 'Mindestens ein Abtastwert hat die digitale Obergrenze erreicht', 'Reduzieren Sie die Verstärkung und wiederholen Sie die lauteste Stelle'],
      ],
    },
    {
      type: 'title',
      text: 'Nutzung des Live-Mikrofonspektrums',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das geschwungene Spektrum bildet Analysator-Frequenzbänder von 60 Hz bis 12 kHz auf einem logarithmischen Bogen ab, während das leuchtende Band die aktuelle Wellenform anzeigt. Nutzen Sie die Anzeige, um sicherzustellen, dass Bässe, Mitten und Höhen den Browser erreichen. Eine sich bewegende dominante Frequenz ist bei Sprache und Musik völlig normal.',
    },
    {
      type: 'tip',
      title: 'Vergleichen Sie jeweils nur eine Änderung',
      html: 'Erfassen Sie das Raumgeräusch, ändern Sie genau eine Einstellung und messen Sie erneut aus derselben Position. Rauschunterdrückung und automatische Verstärkungsregelung des Betriebssystems können das Mikrofon leiser wirken lassen und den Klang verändern.',
    },
    {
      type: 'title',
      text: 'Warum dies kein kalibriertes Schallpegelmessgerät ist',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Browser-Abtastwerte beschreiben das digitale Signal nach Mikrofon, Interface, Treiber und automatischer Verarbeitung. Sie zeigen nicht den akustischen Schalldruck an der Mikrofonkapsel. Daher zeigt dieses Tool dBFS statt dB SPL an und verzichtet auf zertifizierte Frequenzgang- oder Rauschpegelangaben.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Nutzen Sie kalibriertes Equipment für offizielle Nachweise',
      badge: 'Nur praktischer Test',
      html: '<p>Verwenden Sie dieses Tool zur Fehlersuche bei Anrufen, Streams, Aufnahmen und der Geräteauswahl. Nutzen Sie ein kalibriertes Messmikrofon, einen akustischen Kalibrator und kontrollierte Signale, wenn das Ergebnis Produktspezifikationen, Arbeitsschutz oder professionelle Raumakustik unterstützen muss.</p>',
    },
  ],
  ui: {
    journeyPermission: '1. Mikrofon freigeben',
    journeySpeak: '2. Natürlich sprechen',
    journeyInspect: '3. Pegel und Spektrum prüfen',
    startMicrophone: 'Mikrofon starten',
    stopMicrophone: 'Mikrofon stoppen',
    deviceLabel: 'Eingabegerät',
    defaultDevice: 'Standardmikrofon',
    statusIdle: 'Warte auf Berechtigung',
    statusRequesting: 'Mikrofonzugriff wird angefordert',
    statusLive: 'Lokal aktiv',
    statusUnsupported: 'Mikrofonzugriff in diesem Browser nicht verfügbar',
    statusDenied: 'Mikrofonberechtigung wurde nicht erteilt',
    statusError: 'Mikrofon konnte nicht gestartet werden',
    levelLabel: 'Live-Pegel',
    peakLabel: 'Spitze',
    frequencyLabel: 'Dominante Frequenz',
    noiseFloorLabel: 'Raumgeräusch',
    captureNoise: 'Drei Sekunden erfassen',
    capturingNoise: 'Bitte ruhig bleiben während das Raumgeräusch gemessen wird',
    noiseCaptured: 'Raumgeräusch erfasst',
    roomToneHint: 'Behalten Sie Verstärkung und Position bei und bleiben Sie drei Sekunden ruhig.',
    unmeasured: 'Nicht gemessen',
    noSignalLevel: 'Kein Signal',
    noSignalPeak: 'Kein Signal',
    noSignalFrequency: 'Kein Signal',
    silentSignal: 'Kein nutzbares Signal',
    quietSignal: 'Leiser Eingang',
    healthySignal: 'Guter Headroom',
    hotSignal: 'Hoher Pegel',
    clippingSignal: 'Übersteuerung erkannt',
    dbfsUnit: 'dBFS',
    hzUnit: 'Hz',
    spectrumAriaLabel: 'Live-Mikrofonspektrum und Wellenform',
    limitationTitle: 'Ein Browser ist kein kalibriertes Messgerät',
    limitationText: 'Die Messwerte zeigen digitale dBFS-Werte nach der Geräteverarbeitung, nicht akustische dB SPL. Das Signal bleibt im Browser und wird nicht hochgeladen.',
  },
};
