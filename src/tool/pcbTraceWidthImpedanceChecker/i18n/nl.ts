import { makeLocaleContent } from "../locale-content";

export const content = makeLocaleContent({
  slug: "pcb-spoorbreedte-impedantie-calculator",
  title: "Controle voor PCB spoorbreedte en impedantie",
  description:
    "Controleer thermische spoorbreedte, spanningsval, verlies en een aparte schatting van gecontroleerde impedantie op basis van laag en stack-up.",
  ui: {
    metricLabel: "Metrisch",
    imperialLabel: "Imperiaal",
    steadyLabel: "Continue stroom",
    pulseLabel: "Herhaalde puls",
    currentProfileTitle: "Stroomprofiel",
    steadyCurrentLabel: "Continue stroom",
    pulseCurrentLabel: "Piekstroom puls",
    pulseDurationLabel: "Pulsduur",
    dutyCycleLabel: "Inschakelduur",
    copperPathTitle: "Koperbaan",
    layerLabel: "Spoorlaag",
    externalLabel: "Buitenlaag",
    internalLabel: "Binnenlaag",
    copperThicknessLabel: "Koperdikte",
    temperatureRiseLabel: "Toegestane stijging",
    lengthLabel: "Spoorlengte",
    availableWidthLabel: "Beschikbare breedte",
    signalGeometryTitle: "Signaalgeometrie",
    targetImpedanceLabel: "Doelimpedantie",
    dielectricHeightLabel: "Diëlektricum tot referentievlak",
    dielectricConstantLabel: "Relatieve permittiviteit",
    thermalWidthTitle: "Minimale thermische breedte",
    availableWidthTitle: "Ruimte na thermische breedte",
    impedanceTitle: "Impedantie bij thermische breedte",
    voltageDropTitle: "Spanningsval bij piek",
    powerLossTitle: "Koperverlies",
    pulseEnergyTitle: "Energie per puls",
    statusEmpty: "Voer de omstandigheden van het spoor in om te beginnen.",
    statusInvalid:
      "Gebruik positieve waarden en houd temperatuurstijging en inschakelduur binnen bereik.",
    statusReady:
      "Drie controles zijn actief: thermische breedte, elektrisch verlies en impedantie.",
    externalModel: "Buitenlaag gebruikt microstrip",
    internalModel: "Binnenlaag gebruikt stripline",
    thermalBadge: "Thermische passing wordt gecontroleerd",
    impedanceBadge: "Impedantiecontrole wordt voorbereid",
    widthFits: "Past in de beschikbare ruimte",
    widthDoesNotFit: "Meer routeringsruimte nodig",
    impedanceClose: "binnen een controle van 10%",
    impedanceFar: "buiten een controle van 10%",
    resetLabel: "Herstellen",
    presetTitle: "Routeringsvoorbeeld laden",
    presetLogic: "2 A voedingsrail",
    presetSignal: "50 ohm logicaspoor",
    presetPulse: "8 A pulsbaan",
    sceneLabel: "Vergelijking van thermische, beschikbare en impedantiebreedte",
    sceneCaption: "Kies de baanvoorwaarden en het koper tekent zichzelf.",
    referenceLineLabel: "Doelbreedte impedantie",
    thermalLineLabel: "Thermisch minimum",
    availableLineLabel: "Beschikbare corridor",
    modelNote: "De laag verandert warmteafvoer en veldgeometrie.",
  },
  seo: [
    {
      type: "title",
      text: "Controleer een PCB-spoor voor het routeren",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Een spoor kan breed genoeg zijn voor de stroom en toch verkeerd zijn voor een signaal met gecontroleerde impedantie. Deze PCB-spoorcalculator houdt beide beslissingen zichtbaar: hij dimensioneert koper voor een gekozen temperatuurstijging, meet de elektrische belasting en controleert de signaalgeometrie apart.",
    },
    {
      type: "paragraph",
      html: "Voer de stroom in die de baan echt draagt, niet alleen de waarde van een nabije voeding. Bij een continue baan van 2 A op 35 µm buitenlaagkoper met 10 °C stijging vraagt het thermische model een bredere geleider dan een klein logicaspoor. Diezelfde breedte geeft weerstand, spanningsval en verlies om te beoordelen.",
    },
    {
      type: "title",
      text: "Thermiek en impedantie beantwoorden verschillende vragen",
      level: 3,
    },
    {
      type: "paragraph",
      html: "De thermische controle gebruikt de empirische relatie I = k × ΔT^0.44 × A^0.725, waarbij A de koperdoorsnede in vierkante mil is en k verschilt tussen buiten- en binnenlagen. In pulsmodus gebruikt de tool piekstroom maal de wortel van de inschakelduur als RMS-benadering voor herhaalde verwarming. Een eenmalige piek, via-veld of koelvlak wordt niet gemodelleerd.",
    },
    {
      type: "list",
      items: [
        "Gebruik de afgewerkte koperdikte van de fabrikant, niet alleen het nominale foliediktegewicht.",
        "Kies de kleinste toegestane temperatuurstijging als onderdelen of isolatie warmtegevoelig zijn.",
        "Behandel negatieve ruimtemarge als een routeringsconflict.",
        "Als impedantie- en thermische breedte verschillen, bepaal of de net baan voor voeding, signaal of twee ontwerpdoelen is.",
      ],
    },
    { type: "title", text: "De spoorweergave lezen", level: 3 },
    {
      type: "paragraph",
      html: "De volle koperband is de minimale thermische breedte. De lichte band is de beschikbare corridor in de layout. De gestreepte referentielijn toont de breedte voor de doelimpedantie onder de ingevoerde stack-up-aannames. Het resultaat toont ook impedantie bij thermische breedte, zodat het effect van de stroomkeuze zichtbaar blijft.",
    },
    {
      type: "title",
      text: "Wat voor productie moet worden gecontroleerd",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Een nominale impedantieformule kent de uiteindelijke diëlektrische dikte, hars, etsvorm, soldeermasker, aangrenzend koper en toleranties niet. IPC-2152 koppelt geleiderafmetingen ook aan printplaatopbouw en warmteverspreiding. Gebruik deze pagina om de engineeringbespreking te structureren en bevestig de definitieve stack-up met fabrikant, veldsolver of testcoupon.",
    },
    {
      type: "tip",
      title: "Een screeningresultaat is geen productiegoedkeuring",
      html: "Houd thermiek, spanningsval en impedantie als losse controlepunten bij. Bevestig vias, vernauwingen, vlakken, omgevingstemperatuur, pulsverwarming, isolatieafstanden en fabrikantentoleranties vóór vrijgave.",
    },
  ],
  faqTitle: "Vragen over PCB-spoorbreedte en impedantie",
  faq: [
    {
      question: "Voer ik gemiddelde of piekstroom in?",
      answer:
        "Gebruik voor een continue baan de continue stroom. Voer bij herhaalde pulsen piekstroom, duur en inschakelduur in voor een thermische RMS-benadering. Een eenmalige inschakelpiek vraagt een transiënte beoordeling.",
    },
    {
      question: "Waarom vraagt een binnenlaag meer koper?",
      answer:
        "Het snelle empirische thermische model gebruikt voor binnenlagen een lagere constante, omdat begraven koper warmte vaak minder goed afvoert dan een buitenlaag. De echte printplaatopbouw kan dit resultaat veranderen.",
    },
    {
      question: "Wat betekent beschikbare breedte?",
      answer:
        "Voer de corridor in die de layout aan het afgewerkte spoor kan geven. Een negatieve marge betekent dat de minimale thermische breedte groter is en dat meer ruimte, koper, parallelle banen of een ander temperatuurdoel nodig zijn.",
    },
    {
      question: "Berekent dit een echte PCB-baan van 50 ohm?",
      answer:
        "Het schat nominale microstrip- of stripline-impedantie uit breedte, koper, diëlektrische hoogte en relatieve permittiviteit. De fabrikant moet de eindgeometrie en toleranties bevestigen voor gecontroleerde impedantie.",
    },
    {
      question: "Waarom gebruikt de spanningsval piekstroom?",
      answer:
        "Zo wordt de slechtste momentane I maal R-val van een puls zichtbaar. Pulsenergie gebruikt I²R maal duur, terwijl thermische breedte de herhaalde RMS-benadering gebruikt.",
    },
  ],
  bibliographyTitle: "Referenties voor PCB-ontwerp",
  howTo: [
    {
      name: "Stroomgedrag beschrijven",
      text: "Kies continue stroom of herhaalde puls en vul het stroomprofiel in.",
    },
    {
      name: "Aannames van de eind-stack-up invoeren",
      text: "Kies de laag en voer koper, temperatuurstijging en diëlektrische geometrie in.",
    },
    {
      name: "De routeringskeuze maken",
      text: "Vergelijk thermisch minimum, beschikbare corridor en impedantiedoel en controleer de eind-stack-up met de fabrikant.",
    },
  ],
});
