import { makeLocaleContent } from "../locale-content";

export const content = makeLocaleContent({
  slug: "calculadora-largura-trilha-impedancia-pcb",
  title: "Verificador de largura e impedância de trilhas PCB",
  description:
    "Verifique largura térmica, queda de tensão, perdas e uma estimativa independente de impedância controlada conforme a camada e o stackup.",
  ui: {
    metricLabel: "Métrico",
    imperialLabel: "Imperial",
    steadyLabel: "Corrente contínua",
    pulseLabel: "Pulso repetitivo",
    currentProfileTitle: "Perfil de corrente",
    steadyCurrentLabel: "Corrente contínua",
    pulseCurrentLabel: "Corrente de pico",
    pulseDurationLabel: "Duração do pulso",
    dutyCycleLabel: "Ciclo de trabalho",
    copperPathTitle: "Caminho de cobre",
    layerLabel: "Camada da trilha",
    externalLabel: "Externa",
    internalLabel: "Interna",
    copperThicknessLabel: "Espessura do cobre",
    temperatureRiseLabel: "Elevação permitida",
    lengthLabel: "Comprimento da trilha",
    availableWidthLabel: "Largura disponível",
    signalGeometryTitle: "Geometria do sinal",
    targetImpedanceLabel: "Impedância alvo",
    dielectricHeightLabel: "Dielétrico até o plano de referência",
    dielectricConstantLabel: "Permissividade relativa",
    thermalWidthTitle: "Largura térmica mínima",
    availableWidthTitle: "Espaço após a largura térmica",
    impedanceTitle: "Impedância na largura térmica",
    voltageDropTitle: "Queda de tensão no pico",
    powerLossTitle: "Perda de potência no cobre",
    pulseEnergyTitle: "Energia por pulso",
    statusEmpty: "Insira as condições da trilha para começar.",
    statusInvalid:
      "Use valores positivos e mantenha elevação e ciclo dentro do intervalo.",
    statusReady:
      "Três verificações estão ativas: largura térmica, perda elétrica e impedância.",
    externalModel: "A camada externa usa microstrip",
    internalModel: "A camada interna usa stripline",
    thermalBadge: "Aguardando ajuste térmico",
    impedanceBadge: "Aguardando revisão de impedância",
    widthFits: "Cabe no espaço disponível",
    widthDoesNotFit: "Precisa de mais espaço de roteamento",
    impedanceClose: "dentro da verificação de 10%",
    impedanceFar: "fora da verificação de 10%",
    resetLabel: "Redefinir",
    presetTitle: "Carregar um caso de roteamento",
    presetLogic: "Trilha de alimentação 2 A",
    presetSignal: "Trilha lógica de 50 ohm",
    presetPulse: "Caminho de pulso 8 A",
    sceneLabel:
      "Comparação das larguras térmica, disponível e de impedância da trilha",
    sceneCaption: "Escolha as condições do caminho e o cobre será desenhado.",
    referenceLineLabel: "Largura alvo de impedância",
    thermalLineLabel: "Mínimo térmico",
    availableLineLabel: "Corredor disponível",
    modelNote: "A camada altera a dissipação de calor e a geometria do campo.",
  },
  seo: [
    {
      type: "title",
      text: "Verifique uma trilha PCB antes do roteamento",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Uma trilha pode ser larga o bastante para conduzir corrente e ainda estar errada para um sinal de impedância controlada. Esta calculadora de trilhas PCB deixa as duas decisões visíveis: dimensiona o cobre para uma elevação térmica escolhida, mede a consequência elétrica e verifica a geometria do sinal separadamente.",
    },
    {
      type: "paragraph",
      html: "Informe a corrente que o caminho realmente conduz, não apenas a capacidade de uma fonte próxima. Em um caminho contínuo de 2 A com cobre externo de 35 µm e elevação de 10 °C, o modelo térmico pede um condutor mais largo que uma pequena trilha lógica. A mesma largura permite avaliar resistência, queda de tensão e perdas.",
    },
    {
      type: "title",
      text: "Termia e impedância respondem a perguntas diferentes",
      level: 3,
    },
    {
      type: "paragraph",
      html: "A verificação térmica usa a relação empírica I = k × ΔT^0.44 × A^0.725, em que A é a seção de cobre em mil quadrados e k muda entre camadas externas e internas. No modo de pulso, a ferramenta usa a corrente de pico multiplicada pela raiz quadrada do ciclo como aproximação RMS de aquecimento repetitivo. Ela não modela um surto único, um campo de vias ou um plano dissipador.",
    },
    {
      type: "list",
      items: [
        "Use a espessura de cobre acabada pelo fabricante, não apenas o peso nominal da folha.",
        "Use a menor elevação térmica permitida quando componentes ou isolantes forem sensíveis à temperatura.",
        "Trate margem de espaço negativa como conflito de roteamento.",
        "Se as larguras de impedância e térmica divergirem, decida se a rede é de potência, sinal ou dois objetivos distintos.",
      ],
    },
    { type: "title", text: "Como ler a cena da trilha", level: 3 },
    {
      type: "paragraph",
      html: "A faixa sólida de cobre é a largura térmica mínima. A faixa clara é o corredor disponível no layout. A linha de referência tracejada indica a largura que atingiria a impedância alvo com as hipóteses do stackup. O painel também mostra a impedância na largura térmica para revelar o efeito da decisão de corrente.",
    },
    { type: "title", text: "O que verificar antes da fabricação", level: 3 },
    {
      type: "paragraph",
      html: "Uma equação de impedância nominal não conhece a espessura final do dielétrico, o teor de resina, o perfil de corrosão, a máscara, o cobre adjacente ou a tolerância. A IPC-2152 também relaciona o dimensionamento do condutor à construção da placa e à propagação do calor. Use esta página para orientar a revisão e confirme o stackup com o fabricante, um solver de campo ou um cupom de teste.",
    },
    {
      type: "tip",
      title: "Uma estimativa não é aprovação de fabricação",
      html: "Mantenha as verificações térmica, de queda de tensão e de impedância como notas separadas. Confirme vias, estreitamentos, planos, temperatura ambiente, comportamento de pulsos, distâncias de isolamento e tolerâncias do fabricante antes de liberar a geometria.",
    },
  ],
  faqTitle: "Perguntas sobre largura e impedância de trilhas PCB",
  faq: [
    {
      question: "Devo informar corrente média ou de pico?",
      answer:
        "Para um caminho contínuo, use a corrente contínua. No modo de pulso repetitivo, informe pico, duração e ciclo para que a verificação térmica use uma equivalência RMS. Um surto único precisa de análise transitória.",
    },
    {
      question: "Por que uma trilha interna precisa de mais cobre?",
      answer:
        "O modelo térmico empírico rápido usa uma constante menor para camadas internas, pois o cobre enterrado normalmente dissipa menos calor que uma trilha externa. A construção real da placa pode alterar o resultado.",
    },
    {
      question: "O que significa largura disponível?",
      answer:
        "Informe o corredor que o layout pode reservar para a trilha acabada. Uma margem negativa indica que o mínimo térmico supera esse corredor e exige mais espaço, cobre, caminhos paralelos ou outra meta térmica.",
    },
    {
      question: "Isso calcula uma trilha PCB real de 50 ohm?",
      answer:
        "Estima a impedância nominal microstrip ou stripline a partir da largura, cobre, altura do dielétrico e permissividade relativa. O fabricante deve confirmar a geometria acabada e as tolerâncias antes da liberação controlada.",
    },
    {
      question: "Por que a queda de tensão usa a corrente de pico?",
      answer:
        "Isso mostra a pior queda instantânea I vezes R de um pulso. A energia usa I²R vezes a duração, enquanto a largura térmica usa a aproximação RMS repetitiva.",
    },
  ],
  bibliographyTitle: "Referências de projeto de PCB",
  howTo: [
    {
      name: "Descreva o comportamento da corrente",
      text: "Escolha corrente contínua ou pulso repetitivo e preencha o perfil.",
    },
    {
      name: "Informe as hipóteses do stackup acabado",
      text: "Escolha a camada e informe cobre, elevação térmica e geometria dielétrica.",
    },
    {
      name: "Tome a decisão de roteamento",
      text: "Compare mínimo térmico, corredor disponível e alvo de impedância, depois confirme o stackup com o fabricante.",
    },
  ],
});
