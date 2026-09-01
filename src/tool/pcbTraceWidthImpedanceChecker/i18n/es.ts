import { makeLocaleContent } from "../locale-content";

export const content = makeLocaleContent({
  slug: "calculadora-ancho-impedancia-pistas-pcb",
  title: "Comprobador de ancho e impedancia de pistas PCB",
  description:
    "Comprueba el ancho térmico de una pista PCB, la caída de tensión, las pérdidas y una estimación independiente de impedancia controlada según la capa y el stackup.",
  ui: {
    metricLabel: "Métrico",
    imperialLabel: "Imperial",
    steadyLabel: "Corriente continua",
    pulseLabel: "Pulso repetitivo",
    currentProfileTitle: "Perfil de corriente",
    steadyCurrentLabel: "Corriente continua",
    pulseCurrentLabel: "Corriente pico del pulso",
    pulseDurationLabel: "Duración del pulso",
    dutyCycleLabel: "Ciclo de trabajo",
    copperPathTitle: "Ruta de cobre",
    layerLabel: "Capa de la pista",
    externalLabel: "Externa",
    internalLabel: "Interna",
    copperThicknessLabel: "Grosor del cobre",
    temperatureRiseLabel: "Elevación permitida",
    lengthLabel: "Longitud de pista",
    availableWidthLabel: "Ancho disponible",
    signalGeometryTitle: "Geometría de señal",
    targetImpedanceLabel: "Impedancia objetivo",
    dielectricHeightLabel: "Dieléctrico hasta el plano de referencia",
    dielectricConstantLabel: "Permitividad relativa",
    thermalWidthTitle: "Ancho térmico mínimo",
    availableWidthTitle: "Espacio tras el ancho térmico",
    impedanceTitle: "Impedancia en el ancho térmico",
    voltageDropTitle: "Caída de tensión en el pico",
    powerLossTitle: "Pérdida de potencia del cobre",
    pulseEnergyTitle: "Energía por pulso",
    statusEmpty: "Introduce las condiciones de la pista para empezar.",
    statusInvalid:
      "Usa valores positivos y mantén la elevación y el ciclo dentro de rango.",
    statusReady:
      "Hay tres comprobaciones activas: ancho térmico, pérdida eléctrica e impedancia.",
    externalModel: "La capa externa usa microstrip",
    internalModel: "La capa interna usa stripline",
    thermalBadge: "Esperando el ajuste térmico",
    impedanceBadge: "Esperando la revisión de impedancia",
    widthFits: "Cabe en el espacio disponible",
    widthDoesNotFit: "Necesita más espacio de routing",
    impedanceClose: "dentro de una comprobación del 10 %",
    impedanceFar: "fuera de una comprobación del 10 %",
    resetLabel: "Restablecer",
    presetTitle: "Cargar un caso de routing",
    presetLogic: "Rail de alimentación de 2 A",
    presetSignal: "Pista lógica de 50 ohmios",
    presetPulse: "Ruta de pulso de 8 A",
    sceneLabel:
      "Comparación del ancho térmico, disponible y de impedancia de la pista",
    sceneCaption:
      "Elige las condiciones de la ruta y el cobre se dibujará solo.",
    referenceLineLabel: "Ancho objetivo de impedancia",
    thermalLineLabel: "Mínimo térmico",
    availableLineLabel: "Corredor disponible",
    modelNote: "La capa cambia la evacuación térmica y la geometría del campo.",
  },
  seo: [
    {
      type: "title",
      text: "Comprueba una pista PCB antes de rutearla",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Una pista puede ser suficientemente ancha para transportar corriente y seguir teniendo un ancho incorrecto para una señal de impedancia controlada. Esta calculadora de pistas PCB mantiene visibles ambas decisiones: dimensiona el cobre para una elevación térmica, mide la penalización eléctrica y revisa la geometría de señal por separado.",
    },
    {
      type: "paragraph",
      html: "Introduce la corriente real de la ruta, no solo la cifra de una fuente cercana. En una ruta continua de 2 A con cobre externo de 35 µm y 10 °C de elevación, el modelo térmico pide un conductor más ancho que una pista lógica pequeña. Ese mismo ancho permite valorar resistencia, caída de tensión y pérdidas dentro del recorrido de potencia.",
    },
    {
      type: "title",
      text: "La sección térmica y la impedancia responden cosas distintas",
      level: 3,
    },
    {
      type: "paragraph",
      html: "La comprobación térmica usa la relación empírica I = k × ΔT^0.44 × A^0.725, donde A es la sección de cobre en milésimas cuadradas y k cambia entre capas externas e internas. En modo pulso, la herramienta usa la corriente pico multiplicada por la raíz cuadrada del ciclo como aproximación RMS de calentamiento repetitivo. No modela un pico aislado, un campo de vías ni un plano disipador.",
    },
    {
      type: "list",
      items: [
        "Usa el grosor de cobre acabado del fabricante y no solo el peso nominal de la lámina.",
        "Elige la menor elevación térmica permitida cuando los componentes o el aislante sean sensibles a la temperatura.",
        "Trata un margen de espacio negativo como un conflicto de routing, no como una recomendación blanda.",
        "Si el ancho térmico y el de impedancia difieren, decide si la red es de potencia, de señal o representa dos intenciones distintas.",
      ],
    },
    { type: "title", text: "Cómo leer la escena de la pista", level: 3 },
    {
      type: "paragraph",
      html: "La banda sólida representa el ancho térmico mínimo. La banda clara muestra el corredor disponible en tu layout. La línea de referencia discontinua marca el ancho que alcanzaría la impedancia objetivo bajo las hipótesis del stackup. El panel también muestra la impedancia en el ancho térmico para revelar si la decisión de corriente aleja la señal de su objetivo.",
    },
    { type: "title", text: "Qué verificar antes de fabricar", level: 3 },
    {
      type: "paragraph",
      html: "Una ecuación de impedancia nominal no conoce el grosor final del dieléctrico, el contenido de resina, el perfil de ataque, la máscara antisoldante, el cobre vecino ni la banda de tolerancia. IPC-2152 también relaciona el dimensionado con la construcción de la placa y la difusión del calor. Usa esta página para encuadrar la revisión y confirma el stackup del fabricante con un solver de campo o un cupón de prueba.",
    },
    {
      type: "tip",
      title:
        "El resultado es una comprobación, no una aprobación de fabricación",
      html: "Mantén como notas separadas la revisión térmica, la caída de tensión y la impedancia. Confirma vías, estrechamientos, planos, temperatura ambiente, comportamiento de pulsos, distancias de seguridad y tolerancias del fabricante antes de liberar la geometría.",
    },
  ],
  faqTitle: "Preguntas sobre ancho e impedancia de pistas PCB",
  faq: [
    {
      question: "¿Introduzco corriente media o corriente pico?",
      answer:
        "Para una ruta continua, usa la corriente continua. En modo de pulso repetitivo, introduce corriente pico, duración y ciclo de trabajo para que la sección térmica use una equivalencia RMS. Una corriente de arranque única necesita una revisión transitoria.",
    },
    {
      question: "¿Por qué una pista interna necesita más cobre?",
      answer:
        "El modelo térmico empírico rápido usa una constante menor para capas internas porque el cobre enterrado suele evacuar peor el calor que una pista exterior. La construcción real de la placa puede cambiar el resultado.",
    },
    {
      question: "¿Qué significa ancho disponible?",
      answer:
        "Es el corredor que tu layout puede reservar para la pista acabada. Un margen negativo indica que el mínimo térmico supera ese corredor y requiere más espacio, más cobre, rutas paralelas o un objetivo de temperatura diferente.",
    },
    {
      question: "¿Esto calcula una pista PCB real de 50 ohmios?",
      answer:
        "Estima la impedancia nominal microstrip o stripline a partir del ancho, el cobre, la altura del dieléctrico y la permitividad relativa. El fabricante debe confirmar la geometría acabada y la tolerancia antes de liberar impedancia controlada.",
    },
    {
      question: "¿Por qué la caída de tensión usa la corriente pico?",
      answer:
        "Así se ve la peor caída instantánea I por R de un pulso. La energía del pulso usa I²R por duración, mientras que el ancho térmico usa la aproximación RMS repetitiva.",
    },
  ],
  bibliographyTitle: "Referencias de diseño PCB",
  howTo: [
    {
      name: "Describe la corriente",
      text: "Elige corriente continua o pulso repetitivo y completa el perfil de corriente.",
    },
    {
      name: "Introduce el stackup acabado",
      text: "Elige la capa e introduce cobre, elevación térmica y geometría dieléctrica.",
    },
    {
      name: "Toma la decisión de routing",
      text: "Compara mínimo térmico, corredor disponible y objetivo de impedancia, y verifica el stackup final con el fabricante.",
    },
  ],
});
