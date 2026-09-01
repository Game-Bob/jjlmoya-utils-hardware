import { makeLocaleContent } from "../locale-content";

export const content = makeLocaleContent({
  slug: "calcolatore-larghezza-traccia-impedenza-pcb",
  title: "Verificatore di larghezza e impedenza delle piste PCB",
  description:
    "Verifica larghezza termica, caduta di tensione, perdite e stima separata dell'impedenza controllata in base a layer e stackup.",
  ui: {
    metricLabel: "Metrico",
    imperialLabel: "Imperiale",
    steadyLabel: "Corrente continua",
    pulseLabel: "Impulso ripetuto",
    currentProfileTitle: "Profilo di corrente",
    steadyCurrentLabel: "Corrente continua",
    pulseCurrentLabel: "Corrente di picco",
    pulseDurationLabel: "Durata impulso",
    dutyCycleLabel: "Duty cycle",
    copperPathTitle: "Percorso di rame",
    layerLabel: "Layer della pista",
    externalLabel: "Esterno",
    internalLabel: "Interno",
    copperThicknessLabel: "Spessore rame",
    temperatureRiseLabel: "Aumento consentito",
    lengthLabel: "Lunghezza pista",
    availableWidthLabel: "Larghezza disponibile",
    signalGeometryTitle: "Geometria del segnale",
    targetImpedanceLabel: "Impedenza obiettivo",
    dielectricHeightLabel: "Dielettrico fino al piano di riferimento",
    dielectricConstantLabel: "Permittività relativa",
    thermalWidthTitle: "Larghezza termica minima",
    availableWidthTitle: "Spazio dopo la larghezza termica",
    impedanceTitle: "Impedenza alla larghezza termica",
    voltageDropTitle: "Caduta di tensione al picco",
    powerLossTitle: "Perdita di potenza nel rame",
    pulseEnergyTitle: "Energia per impulso",
    statusEmpty: "Inserisci le condizioni della pista per iniziare.",
    statusInvalid:
      "Usa valori positivi e mantieni aumento e duty cycle nel limite.",
    statusReady:
      "Tre controlli attivi: larghezza termica, perdita elettrica e impedenza.",
    externalModel: "Il layer esterno usa microstrip",
    internalModel: "Il layer interno usa stripline",
    thermalBadge: "In attesa del controllo termico",
    impedanceBadge: "In attesa del controllo d'impedenza",
    widthFits: "Entra nello spazio disponibile",
    widthDoesNotFit: "Serve più spazio di routing",
    impedanceClose: "entro il controllo del 10%",
    impedanceFar: "oltre il controllo del 10%",
    resetLabel: "Ripristina",
    presetTitle: "Carica un caso di routing",
    presetLogic: "Rail di potenza 2 A",
    presetSignal: "Pista logica 50 ohm",
    presetPulse: "Percorso impulso 8 A",
    sceneLabel:
      "Confronto tra larghezze termica, disponibile e d'impedenza della pista",
    sceneCaption: "Scegli le condizioni del percorso e il rame si disegnerà.",
    referenceLineLabel: "Larghezza obiettivo d'impedenza",
    thermalLineLabel: "Minimo termico",
    availableLineLabel: "Corridoio disponibile",
    modelNote: "Il layer cambia dissipazione del calore e geometria del campo.",
  },
  seo: [
    {
      type: "title",
      text: "Controlla una pista PCB prima del routing",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Una pista può essere abbastanza larga per la corrente ma avere comunque una larghezza sbagliata per un segnale a impedenza controllata. Questo calcolatore PCB mantiene visibili entrambe le decisioni: dimensiona il rame per un aumento termico scelto, misura il costo elettrico e controlla separatamente la geometria del segnale.",
    },
    {
      type: "paragraph",
      html: "Inserisci la corrente effettiva del percorso, non solo il valore dell'alimentatore vicino. Per un percorso continuo da 2 A su rame esterno da 35 µm con aumento di 10 °C, il modello termico richiede un conduttore più largo di una piccola pista logica. La stessa larghezza consente di giudicare resistenza, caduta e perdite nel percorso di potenza.",
    },
    {
      type: "title",
      text: "Termica e impedenza rispondono a domande diverse",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Il controllo termico usa la relazione empirica I = k × ΔT^0.44 × A^0.725, dove A è la sezione del rame in mil quadrati e k cambia tra layer esterno e interno. In modalità impulso usa la corrente di picco moltiplicata per la radice del duty cycle come approssimazione RMS del riscaldamento ripetuto. Non descrive un picco singolo, un campo di via o un piano dissipatore.",
    },
    {
      type: "list",
      items: [
        "Usa lo spessore di rame finito indicato dal produttore, non solo il peso nominale della lamina.",
        "Scegli il minimo aumento termico consentito quando componenti o isolanti sono sensibili alla temperatura.",
        "Considera un margine di spazio negativo un conflitto di routing.",
        "Se larghezza termica e d'impedenza divergono, chiarisci se la rete è di potenza, di segnale o ha due obiettivi distinti.",
      ],
    },
    { type: "title", text: "Come leggere la scena della pista", level: 3 },
    {
      type: "paragraph",
      html: "La banda piena è la larghezza termica minima. La banda chiara è il corridoio disponibile nel layout. La linea tratteggiata indica la larghezza che raggiungerebbe l'impedenza obiettivo con le ipotesi di stackup inserite. Il pannello mostra anche l'impedenza alla larghezza termica per rendere visibile l'effetto della scelta di corrente.",
    },
    {
      type: "title",
      text: "Cosa verificare prima della fabbricazione",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Un'equazione d'impedenza nominale non conosce spessore finale del dielettrico, resina, profilo d'incisione, solder mask, rame adiacente o tolleranze. IPC-2152 collega inoltre il dimensionamento alla costruzione della scheda e alla diffusione del calore. Usa questa pagina per la revisione tecnica e conferma lo stackup con produttore, field solver o coupon.",
    },
    {
      type: "tip",
      title: "Una stima non è un'approvazione di fabbricazione",
      html: "Tieni separati i controlli termico, di caduta di tensione e d'impedenza. Conferma vie, restringimenti, piani, temperatura ambiente, comportamento degli impulsi, distanze di isolamento e tolleranze del produttore prima del rilascio.",
    },
  ],
  faqTitle: "Domande su larghezza e impedenza delle piste PCB",
  faq: [
    {
      question: "Devo inserire corrente media o di picco?",
      answer:
        "Per un percorso continuo usa la corrente continua. In modalità impulso ripetuto inserisci picco, durata e duty cycle per ottenere un'equivalenza RMS termica. Un inrush singolo richiede una revisione transitoria.",
    },
    {
      question: "Perché una pista interna richiede più rame?",
      answer:
        "Il modello termico empirico rapido usa una costante più bassa per i layer interni, perché il rame sepolto spesso dissipa peggio di una pista esterna. La costruzione reale può cambiare il risultato.",
    },
    {
      question: "Che cosa significa larghezza disponibile?",
      answer:
        "È il corridoio che il layout può assegnare alla pista finita. Un margine negativo significa che il minimo termico supera il corridoio e servono più spazio, rame, percorsi paralleli o un altro obiettivo termico.",
    },
    {
      question: "Calcola una vera pista PCB da 50 ohm?",
      answer:
        "Stima l'impedenza nominale microstrip o stripline da larghezza, rame, altezza del dielettrico e permittività relativa. Il produttore deve confermare geometria e tolleranze prima del rilascio controllato.",
    },
    {
      question: "Perché la caduta usa la corrente di picco?",
      answer:
        "Mostra la peggiore caduta istantanea I per R di un impulso. L'energia usa I²R per la durata, mentre la larghezza termica usa l'approssimazione RMS ripetuta.",
    },
  ],
  bibliographyTitle: "Riferimenti per il progetto PCB",
  howTo: [
    {
      name: "Descrivi la corrente",
      text: "Scegli corrente continua o impulso ripetuto e compila il profilo.",
    },
    {
      name: "Inserisci lo stackup finito",
      text: "Scegli il layer e inserisci rame, aumento termico e geometria del dielettrico.",
    },
    {
      name: "Decidi il routing",
      text: "Confronta minimo termico, corridoio disponibile e impedenza obiettivo, poi verifica lo stackup con il produttore.",
    },
  ],
});
