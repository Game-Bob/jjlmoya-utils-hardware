import { makeLocaleContent } from "../locale-content";

export const content = makeLocaleContent({
  slug: "leiterbahnbreite-impedanz-rechner-pcb",
  title: "PCB Leiterbahnbreiten und Impedanzprüfer",
  description:
    "Prüfe thermische Leiterbahnbreite, Spannungsabfall, Verlustleistung und kontrollierte Impedanz anhand von Lage und Lagenaufbau.",
  ui: {
    metricLabel: "Metrisch",
    imperialLabel: "Imperial",
    steadyLabel: "Dauerstrom",
    pulseLabel: "Wiederholimpuls",
    currentProfileTitle: "Stromprofil",
    steadyCurrentLabel: "Dauerstrom",
    pulseCurrentLabel: "Impulsstrom Spitze",
    pulseDurationLabel: "Impulsdauer",
    dutyCycleLabel: "Tastgrad",
    copperPathTitle: "Kupferpfad",
    layerLabel: "Leiterbahnlage",
    externalLabel: "Außenlage",
    internalLabel: "Innenlage",
    copperThicknessLabel: "Kupferdicke",
    temperatureRiseLabel: "Zulässige Erwärmung",
    lengthLabel: "Leiterbahnlänge",
    availableWidthLabel: "Verfügbare Breite",
    signalGeometryTitle: "Signalgeometrie",
    targetImpedanceLabel: "Zielimpedanz",
    dielectricHeightLabel: "Dielektrikum bis Referenzfläche",
    dielectricConstantLabel: "Relative Permittivität",
    thermalWidthTitle: "Minimale thermische Breite",
    availableWidthTitle: "Reserve nach thermischer Breite",
    impedanceTitle: "Impedanz bei thermischer Breite",
    voltageDropTitle: "Spannungsabfall bei Spitze",
    powerLossTitle: "Kupferverlustleistung",
    pulseEnergyTitle: "Energie je Impuls",
    statusEmpty: "Gib die Bedingungen der Leiterbahn ein.",
    statusInvalid:
      "Verwende positive Werte und halte Erwärmung und Tastgrad im zulässigen Bereich.",
    statusReady:
      "Drei Prüfungen sind aktiv: thermische Breite, elektrische Verluste und Impedanz.",
    externalModel: "Außenlage verwendet Microstrip",
    internalModel: "Innenlage verwendet Stripline",
    thermalBadge: "Thermische Passung wird geprüft",
    impedanceBadge: "Impedanzprüfung wird vorbereitet",
    widthFits: "Passt in den verfügbaren Bereich",
    widthDoesNotFit: "Benötigt mehr Routingraum",
    impedanceClose: "innerhalb der 10-%-Prüfung",
    impedanceFar: "außerhalb der 10-%-Prüfung",
    resetLabel: "Zurücksetzen",
    presetTitle: "Routing-Szenario laden",
    presetLogic: "2-A-Versorgung",
    presetSignal: "50-Ohm-Logikbahn",
    presetPulse: "8-A-Impulspfad",
    sceneLabel:
      "Vergleich von thermischer, verfügbarer und impedanzgerechter Leiterbahnbreite",
    sceneCaption:
      "Wähle die Bahnbedingungen, dann zeichnet sich das Kupfer selbst.",
    referenceLineLabel: "Impedanz-Zielbreite",
    thermalLineLabel: "Thermisches Minimum",
    availableLineLabel: "Verfügbarer Korridor",
    modelNote: "Die Lage verändert Wärmeabfuhr und Feldgeometrie.",
  },
  seo: [
    {
      type: "title",
      text: "Eine PCB-Leiterbahn vor dem Routing prüfen",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Eine Leiterbahn kann breit genug für den Strom und trotzdem falsch für ein Signal mit kontrollierter Impedanz sein. Dieser PCB-Rechner hält beide Entscheidungen sichtbar: Er dimensioniert Kupfer für eine gewünschte Erwärmung, misst die elektrische Belastung und prüft die Signalgeometrie unabhängig.",
    },
    {
      type: "paragraph",
      html: "Gib den tatsächlichen Strom der Bahn ein, nicht nur die Angabe eines benachbarten Netzteils. Bei einer 2-A-Bahn auf 35-µm-Außenkupfer und 10 °C Erwärmung fordert das thermische Modell einen breiteren Leiter als eine kleine Logikbahn. Daraus lassen sich Widerstand, Spannungsabfall und Verlustleistung im Versorgungspfad beurteilen.",
    },
    {
      type: "title",
      text: "Thermik und Impedanz beantworten verschiedene Fragen",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Die thermische Prüfung nutzt die empirische Beziehung I = k × ΔT^0.44 × A^0.725, wobei A der Kupferquerschnitt in Quadratmil und k von der Außen- oder Innenlage abhängt. Im Impulsmodus verwendet das Tool Spitzenstrom mal Quadratwurzel des Tastgrads als RMS-Näherung für wiederholte Erwärmung. Ein einzelner Überspannungsstoß, Via-Feld oder Kühlkörper wird damit nicht modelliert.",
    },
    {
      type: "list",
      items: [
        "Verwende die fertige Kupferdicke des Herstellers statt nur des nominellen Foliengewichts.",
        "Wähle die kleinste zulässige Erwärmung, wenn Bauteile oder Isolation temperaturempfindlich sind.",
        "Behandle einen negativen Platzrest als Routingkonflikt, nicht als unverbindlichen Hinweis.",
        "Wenn Impedanz- und Thermikbreite abweichen, kläre, ob es eine Versorgungsbahn, Signalbahn oder zwei Entwurfsabsichten sind.",
      ],
    },
    { type: "title", text: "Die Leiterbahnszene richtig lesen", level: 3 },
    {
      type: "paragraph",
      html: "Das volle Kupferband ist die thermische Mindestbreite. Das helle Band zeigt den verfügbaren Korridor. Die gestrichelte Referenz markiert die Breite für die Zielimpedanz unter den eingegebenen Stackup-Annahmen. Das Ergebnis zeigt zusätzlich die Impedanz bei thermischer Breite, damit eine Stromentscheidung nicht unbemerkt das Signal verschiebt.",
    },
    { type: "title", text: "Vor der Fertigung verifizieren", level: 3 },
    {
      type: "paragraph",
      html: "Eine nominale Impedanzgleichung kennt fertige Dielektrikdicke, Harzanteil, Ätzprofil, Lötstopp, Nachbarkupfer und Toleranzen nicht. IPC-2152 macht außerdem deutlich, dass Leiterdimensionierung von Boardaufbau und Wärmeverteilung abhängt. Nutze diese Seite für die technische Abstimmung und bestätige den fertigen Stackup mit Hersteller, Feldlöser oder Testcoupon.",
    },
    {
      type: "tip",
      title: "Ein Prüfergebnis ist keine Fertigungsfreigabe",
      html: "Halte Thermik, Spannungsabfall und Impedanz als getrennte Prüfpunkte fest. Bestätige Vias, Verjüngungen, Flächen, Umgebungstemperatur, Impulsverhalten, Kriechstrecken und Fertigungstoleranzen vor der Freigabe.",
    },
  ],
  faqTitle: "Fragen zu PCB-Leiterbahnbreite und Impedanz",
  faq: [
    {
      question: "Soll ich Mittelwert oder Spitzenstrom eingeben?",
      answer:
        "Für eine Dauerbahn verwendest du den Dauerstrom. Im Modus für wiederholte Impulse gibst du Spitzenstrom, Impulsdauer und Tastgrad ein, damit die Thermik eine RMS-Näherung verwenden kann. Ein einmaliger Einschaltstoß braucht eine transiente Prüfung.",
    },
    {
      question: "Warum braucht eine Innenlage mehr Kupfer?",
      answer:
        "Das schnelle empirische Modell verwendet für Innenlagen einen kleineren Faktor, weil vergrabenes Kupfer Wärme meist schlechter abgibt als eine Außenlage. Der reale Boardaufbau kann dieses Ergebnis verändern.",
    },
    {
      question: "Was bedeutet verfügbare Breite?",
      answer:
        "Trage den Korridor ein, den dein Layout der fertigen Leiterbahn geben kann. Ein negativer Rest bedeutet, dass die thermische Mindestbreite größer ist und mehr Raum, Kupfer, parallele Bahnen oder ein anderes Temperaturziel nötig sind.",
    },
    {
      question: "Berechnet das eine echte 50-Ohm-Leiterbahn?",
      answer:
        "Es schätzt die nominale Microstrip- oder Stripline-Impedanz aus Breite, Kupferdicke, Dielektrikahöhe und relativer Permittivität. Der Hersteller muss die fertige Geometrie und Toleranz vor einer kontrollierten Impedanzfreigabe bestätigen.",
    },
    {
      question: "Warum wird der Spannungsabfall mit Spitzenstrom berechnet?",
      answer:
        "So wird der schlimmste momentane I-mal-R-Abfall eines Impulses sichtbar. Die Impulsenergie nutzt I²R mal Dauer, während die thermische Breite die RMS-Näherung für wiederholte Impulse verwendet.",
    },
  ],
  bibliographyTitle: "Referenzen für PCB-Entwurf",
  howTo: [
    {
      name: "Stromverhalten beschreiben",
      text: "Wähle Dauerstrom oder wiederholten Impuls und fülle das Stromprofil aus.",
    },
    {
      name: "Fertige Stackup-Annahmen eingeben",
      text: "Wähle die Lage und trage Kupferdicke, Erwärmung und Dielektrikgeometrie ein.",
    },
    {
      name: "Routingentscheidung treffen",
      text: "Vergleiche thermisches Minimum, Korridor und Impedanzziel und prüfe den finalen Stackup mit dem Hersteller.",
    },
  ],
});
