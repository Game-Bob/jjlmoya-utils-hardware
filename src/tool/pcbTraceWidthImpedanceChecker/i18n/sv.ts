import { makeLocaleContent } from "../locale-content";

export const content = makeLocaleContent({
  slug: "pcb-banbredd-impedans-kalkylator",
  title: "Kontroll av PCB spårbredd och impedans",
  description:
    "Kontrollera termisk spårbredd, spänningsfall, förlust och separat uppskattning av kontrollerad impedans utifrån lager och stackup.",
  ui: {
    metricLabel: "Metriskt",
    imperialLabel: "Imperial",
    steadyLabel: "Kontinuerlig ström",
    pulseLabel: "Upprepad puls",
    currentProfileTitle: "Strömprofil",
    steadyCurrentLabel: "Kontinuerlig ström",
    pulseCurrentLabel: "Pulsens toppström",
    pulseDurationLabel: "Pulslängd",
    dutyCycleLabel: "Driftcykel",
    copperPathTitle: "Kopparbana",
    layerLabel: "Spårlager",
    externalLabel: "Yttre",
    internalLabel: "Inre",
    copperThicknessLabel: "Kopparens tjocklek",
    temperatureRiseLabel: "Tillåten ökning",
    lengthLabel: "Spårlängd",
    availableWidthLabel: "Tillgänglig bredd",
    signalGeometryTitle: "Signalgeometri",
    targetImpedanceLabel: "Målimpedans",
    dielectricHeightLabel: "Dielektrikum till referensplan",
    dielectricConstantLabel: "Relativ permittivitet",
    thermalWidthTitle: "Minsta termiska bredd",
    availableWidthTitle: "Utrymme efter termisk bredd",
    impedanceTitle: "Impedans vid termisk bredd",
    voltageDropTitle: "Spänningsfall vid topp",
    powerLossTitle: "Kopparförlust",
    pulseEnergyTitle: "Energi per puls",
    statusEmpty: "Ange spårets villkor för att börja.",
    statusInvalid:
      "Använd positiva värden och håll temperaturökning och driftcykel inom intervallet.",
    statusReady:
      "Tre kontroller är aktiva: termisk bredd, elektrisk förlust och impedans.",
    externalModel: "Yttre lager använder microstrip",
    internalModel: "Inre lager använder stripline",
    thermalBadge: "Väntar på termisk kontroll",
    impedanceBadge: "Väntar på impedanskontroll",
    widthFits: "Ryms i det tillgängliga utrymmet",
    widthDoesNotFit: "Mer routningsutrymme behövs",
    impedanceClose: "inom en kontroll på 10 %",
    impedanceFar: "utanför en kontroll på 10 %",
    resetLabel: "Återställ",
    presetTitle: "Läs in ett routningsfall",
    presetLogic: "2 A matningsskena",
    presetSignal: "50 ohm logikspår",
    presetPulse: "8 A pulsväg",
    sceneLabel:
      "Jämförelse av spårets termiska, tillgängliga och impedansrelaterade bredd",
    sceneCaption: "Välj banans villkor så ritas kopparbanan.",
    referenceLineLabel: "Målbredd för impedans",
    thermalLineLabel: "Termiskt minimum",
    availableLineLabel: "Tillgänglig korridor",
    modelNote: "Lagret ändrar värmeavledning och fältgeometri.",
  },
  seo: [
    { type: "title", text: "Kontrollera ett PCB-spår före routing", level: 2 },
    {
      type: "paragraph",
      html: "Ett spår kan vara tillräckligt brett för strömmen men ändå ha fel bredd för en signal med kontrollerad impedans. Den här PCB-kalkylatorn håller besluten synliga tillsammans: den dimensionerar koppar för en vald temperaturökning, mäter den elektriska belastningen och kontrollerar signalgeometrin separat.",
    },
    {
      type: "paragraph",
      html: "Ange den ström som faktiskt går i banan, inte bara märkningen på en närliggande nätdel. För en kontinuerlig bana på 2 A med 35 µm yttre koppar och 10 °C ökning kräver den termiska modellen en bredare ledare än ett litet logikspår. Samma bredd ger sedan motstånd, spänningsfall och förlust att bedöma.",
    },
    {
      type: "title",
      text: "Termik och impedans besvarar olika frågor",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Den termiska kontrollen använder den empiriska relationen I = k × ΔT^0.44 × A^0.725, där A är kopparns tvärsnitt i kvadratiska mil och k skiljer sig mellan yttre och inre lager. I pulsläge används toppström gånger roten ur driftcykeln som en RMS-närme för upprepad uppvärmning. En enstaka stöt, ett viafält eller ett kylplan modelleras inte.",
    },
    {
      type: "list",
      items: [
        "Använd tillverkarens färdiga koppartjocklek, inte bara foliens nominella vikt.",
        "Välj minsta tillåtna temperaturökning när komponenter eller isolering är värmekänsliga.",
        "Betrakta negativt utrymme som en routingkonflikt.",
        "Om impedansbredd och termisk bredd skiljer sig, avgör om nätet är för kraft, signal eller två separata avsikter.",
      ],
    },
    { type: "title", text: "Så läser du spårscenen", level: 3 },
    {
      type: "paragraph",
      html: "Det solida kopparbandet är minsta termiska bredd. Det ljusa bandet är den tillgängliga korridoren i layouten. Den streckade referenslinjen visar bredden som når målimpedansen med de angivna stackup-antagandena. Resultatet visar också impedansen vid termisk bredd så att strömbeslutets påverkan på signalen syns.",
    },
    { type: "title", text: "Kontrollera detta före tillverkning", level: 3 },
    {
      type: "paragraph",
      html: "En nominell impedansekvation känner inte till färdig dielektrisk tjocklek, hartsinnehåll, etsprofil, lödmask, intilliggande koppar eller toleranser. IPC-2152 kopplar också ledardimensionen till kortets konstruktion och värmespridning. Använd sidan för ingenjörsgenomgången och bekräfta stackupen med tillverkare, fältlösare eller testkupong.",
    },
    {
      type: "tip",
      title: "Ett kontrollresultat är inte ett tillverkningsgodkännande",
      html: "Håll termik, spänningsfall och impedans som separata kontrollpunkter. Bekräfta vior, avsmalningar, plan, omgivningstemperatur, pulsbeteende, isolationsavstånd och tillverkartoleranser före frisläppning.",
    },
  ],
  faqTitle: "Frågor om PCB-spårbredd och impedans",
  faq: [
    {
      question: "Ska jag ange medelström eller toppström?",
      answer:
        "Använd kontinuerlig ström för en kontinuerlig bana. Vid upprepade pulser anger du topp, tid och driftcykel så att den termiska kontrollen kan använda en RMS-närme. En engångsstartström kräver transient analys.",
    },
    {
      question: "Varför behöver ett inre spår mer koppar?",
      answer:
        "Den snabba empiriska modellen använder en lägre konstant för inre lager eftersom nedgrävd koppar ofta leder bort värme sämre än ett yttre spår. Den verkliga kortkonstruktionen kan ändra resultatet.",
    },
    {
      question: "Vad betyder tillgänglig bredd?",
      answer:
        "Ange den korridor som layouten kan ge det färdiga spåret. Negativ marginal betyder att det termiska minimumet är större och att mer plats, koppar, parallella banor eller ett annat temperaturmål behövs.",
    },
    {
      question: "Beräknar detta ett riktigt PCB-spår på 50 ohm?",
      answer:
        "Det uppskattar nominell microstrip- eller stripline-impedans från bredd, koppar, dielektrisk höjd och relativ permittivitet. Tillverkaren måste bekräfta färdig geometri och toleranser före kontrollerad frisläppning.",
    },
    {
      question: "Varför räknas spänningsfallet med toppström?",
      answer:
        "Det visar det värsta momentana I gånger R-fallet under en puls. Pulsenergi använder I²R gånger tid, medan termisk bredd använder den upprepade RMS-närmen.",
    },
  ],
  bibliographyTitle: "Referenser för PCB-design",
  howTo: [
    {
      name: "Beskriv strömbeteendet",
      text: "Välj kontinuerlig ström eller upprepad puls och fyll i profilen.",
    },
    {
      name: "Ange antaganden för färdig stackup",
      text: "Välj lager och ange koppar, temperaturökning och dielektrisk geometri.",
    },
    {
      name: "Fatta routingbeslutet",
      text: "Jämför termiskt minimum, tillgänglig korridor och impedansmål och kontrollera sedan stackupen med tillverkaren.",
    },
  ],
});
