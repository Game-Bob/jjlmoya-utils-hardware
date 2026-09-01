import { makeLocaleContent } from "../locale-content";

export const content = makeLocaleContent({
  slug: "pcb-trace-width-impedance-calculator",
  title: "PCB走线宽度与阻抗检查器",
  description:
    "根据层叠结构和走线条件，检查PCB走线的热宽度、电压降、损耗以及受控阻抗估算值。",
  ui: {
    metricLabel: "公制",
    imperialLabel: "英制",
    steadyLabel: "连续电流",
    pulseLabel: "重复脉冲",
    currentProfileTitle: "电流配置",
    steadyCurrentLabel: "连续电流",
    pulseCurrentLabel: "脉冲峰值电流",
    pulseDurationLabel: "脉冲时长",
    dutyCycleLabel: "占空比",
    copperPathTitle: "铜走线",
    layerLabel: "走线层",
    externalLabel: "外层",
    internalLabel: "内层",
    copperThicknessLabel: "铜厚",
    temperatureRiseLabel: "允许升温",
    lengthLabel: "走线长度",
    availableWidthLabel: "可用宽度",
    signalGeometryTitle: "信号几何",
    targetImpedanceLabel: "目标阻抗",
    dielectricHeightLabel: "介质到参考平面",
    dielectricConstantLabel: "相对介电常数",
    thermalWidthTitle: "最小热宽度",
    availableWidthTitle: "热宽度后的余量",
    impedanceTitle: "热宽度下的阻抗",
    voltageDropTitle: "峰值电压降",
    powerLossTitle: "铜功率损耗",
    pulseEnergyTitle: "每个脉冲能量",
    statusEmpty: "请输入走线条件以开始。",
    statusInvalid: "请输入正值，并将升温和占空比保持在范围内。",
    statusReady: "三项检查已启用：热宽度、电损耗和阻抗。",
    externalModel: "外层使用微带模型",
    internalModel: "内层使用带状线模型",
    thermalBadge: "等待热匹配检查",
    impedanceBadge: "等待阻抗检查",
    widthFits: "可放入现有空间",
    widthDoesNotFit: "需要更多布线空间",
    impedanceClose: "在10%检查范围内",
    impedanceFar: "超出10%检查范围",
    resetLabel: "重置",
    presetTitle: "加载布线示例",
    presetLogic: "2 A电源线",
    presetSignal: "50 ohm逻辑走线",
    presetPulse: "8 A脉冲路径",
    sceneLabel: "走线热宽度、可用宽度和阻抗宽度对比",
    sceneCaption: "选择走线条件，铜线会自动绘制。",
    referenceLineLabel: "阻抗目标宽度",
    thermalLineLabel: "热最小值",
    availableLineLabel: "可用走线区域",
    modelNote: "层叠会改变散热和电场几何。",
  },
  seo: [
    { type: "title", text: "布线前检查PCB走线", level: 2 },
    {
      type: "paragraph",
      html: "走线可能足够宽，可以承载电流，却不适合受控阻抗信号。这款PCB走线宽度计算器把两个决策放在一起：根据目标升温确定铜宽，测量该宽度带来的电气代价，并独立检查信号几何。",
    },
    {
      type: "paragraph",
      html: "请输入走线实际承载的电流，而不是附近电源标注的额定值。对于35 µm外层铜、升温10 °C、连续2 A的路径，热模型要求的导体宽度会大于小型逻辑走线。同一宽度还可以用于判断电阻、电压降和功率损耗。",
    },
    { type: "title", text: "热设计和阻抗解决的是不同问题", level: 3 },
    {
      type: "paragraph",
      html: "热检查使用经验关系 I = k × ΔT^0.44 × A^0.725，其中A是平方mil单位的铜截面积，k会因外层或内层而变化。在脉冲模式下，工具将峰值电流乘以占空比平方根，作为重复发热的RMS近似。它不会模拟一次性浪涌、过孔阵列或散热平面。",
    },
    {
      type: "list",
      items: [
        "使用制造商提供的成品铜厚，不要只依赖箔材标称重量。",
        "当元件或绝缘材料怕热时，使用最小允许升温。",
        "将负的空间余量视为布线冲突，而不是软性建议。",
        "如果阻抗宽度和热宽度不同，请确认网络是电源、信号，还是包含两个独立设计目标。",
      ],
    },
    { type: "title", text: "如何读取走线图示", level: 3 },
    {
      type: "paragraph",
      html: "实心铜带表示最小热宽度。浅色带表示布局中可用的走线区域。虚线参考线表示在输入的层叠假设下达到目标阻抗所需的宽度。结果面板还会显示热宽度下的阻抗，帮助判断电流承载决定是否使信号偏离目标。",
    },
    { type: "title", text: "生产前需要验证什么", level: 3 },
    {
      type: "paragraph",
      html: "阻抗经验公式不知道成品介质厚度、树脂含量、蚀刻轮廓、阻焊层、相邻铜和制造公差。IPC-2152也指出，导体尺寸取决于电路板结构和热扩散。请使用本页面整理工程讨论，再用制造商层叠、场求解器或测试coupon确认受控阻抗。",
    },
    {
      type: "tip",
      title: "检查结果不是生产批准",
      html: "将热、压降和阻抗作为独立检查项保存。确定铜几何前，请确认过孔、变窄段、平面、环境温度、脉冲热行为、绝缘间距和制造商公差。",
    },
  ],
  faqTitle: "PCB走线宽度和阻抗常见问题",
  faq: [
    {
      question: "应该输入平均电流还是峰值电流？",
      answer:
        "连续走线使用连续电流。重复脉冲模式下输入峰值、时长和占空比，让热检查使用RMS近似。一次性浪涌仍需要瞬态分析。",
    },
    {
      question: "为什么内层走线需要更多铜？",
      answer:
        "快速经验热模型为内层使用更低的系数，因为埋在板内的铜通常比外层走线更难散热。实际板结构可能改变结果。",
    },
    {
      question: "可用宽度是什么意思？",
      answer:
        "输入布局能够分配给成品走线的区域。负余量表示最小热宽度超过该区域，需要更多空间、更厚的铜、并行路径或不同的温度目标。",
    },
    {
      question: "它能计算真正的50 ohm PCB走线吗？",
      answer:
        "它根据宽度、铜厚、介质高度和相对介电常数估算名义微带线或带状线阻抗。在发布受控阻抗前，制造商必须确认成品几何和公差。",
    },
    {
      question: "为什么压降使用峰值电流？",
      answer:
        "这样可以显示脉冲期间最差的瞬时I乘R压降。脉冲能量使用I²R乘时长，热宽度使用重复RMS近似。",
    },
  ],
  bibliographyTitle: "PCB设计参考资料",
  howTo: [
    { name: "描述电流行为", text: "选择连续电流或重复脉冲，并填写电流配置。" },
    { name: "输入成品层叠假设", text: "选择层并填写铜厚、升温和介质几何。" },
    {
      name: "做出布线决定",
      text: "比较热最小宽度、可用区域和阻抗目标，然后与制造商确认最终层叠。",
    },
  ],
});
