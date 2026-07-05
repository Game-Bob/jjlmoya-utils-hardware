import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDpiAnalyzerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mouse-dpi-analyzer';
const title = '鼠标 DPI 分析器';
const description =
  '通过移动鼠标一段已知的物理距离，并比较捕获的指针移动量（以像素为单位），在线测量鼠标的实际 DPI。';

const faqData = [
  {
    question: '在线鼠标 DPI 测试器是如何工作的？',
    answer:
      '它会要求您将鼠标移动一段已知的物理距离，记录浏览器的移动事件，使用 devicePixelRatio 校正捕获的值，然后将结果像素除以距离（以英寸为单位）。',
  },
  {
    question: '为什么实际 DPI 可能与鼠标上标称的值不同？',
    answer:
      '传感器公差、固件档位、表面行为、操作系统缩放、指针加速和游戏配置文件设置都可能使测量的移动量与软件中选择的标称 DPI 不同。',
  },
  {
    question: '测试前应该禁用指针加速吗？',
    answer:
      '是的。如果您想要干净的 DPI 测量，请禁用 Windows 的「提高指针精确度」和任何厂商的加速曲线。只有有意查看正常设置的行为时，才保持其启用。',
  },
  {
    question: '我应该使用多大的物理距离？',
    answer:
      '更长的距离可以减少手部误差。信用卡宽度很方便，但如果桌面有足够的空间，100 毫米或 4 英寸的标尺通常更具可重复性。',
  },
];

const howToData = [
  {
    name: '选择物理参照物',
    text: '对于非常高的 DPI，使用 5 或 10 毫米；对于常规测试，使用 1 英寸；当桌面空间充足时，使用更长的参照物。',
  },
  {
    name: '按住捕获按钮',
    text: '按住屏幕上的捕获目标，然后将鼠标物理上向右精确移动所选择的距离。',
  },
  {
    name: '在物理标记处释放',
    text: '当鼠标到达桌面上实际的物理标记时释放按钮。该工具计算每英寸像素数并报告测量的 DPI。',
  },
  {
    name: '以不同速度重复',
    text: '进行慢速和快速的扫描。如果 DPI 变化很大，指针加速或传感器平滑可能正在影响结果。',
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<MouseDpiAnalyzerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: '在线鼠标 DPI 测试器：测量实际传感器灵敏度', level: 2 },
    {
      type: 'paragraph',
      html: '鼠标可能标称 800、1600、3200 或 26000 DPI，但在游戏和精密工作中真正重要的是实际到达计算机的移动量。这款在线鼠标 DPI 测试器通过比较已知的物理移动与浏览器中捕获的指针移动来测量这一实用值。结果以每英寸像素数表示，这与人们谈论鼠标 DPI 或 CPI 时通常使用的单位相同。',
    },
    {
      type: 'paragraph',
      html: '该测试刻意保持本地化和简单：按住捕获目标，将鼠标按所选物理距离精确向右移动，然后释放。该工具累积原生移动增量，而不是使用轮询率脚本或通用的鼠标测试。因为计算在您的浏览器中运行，所以不涉及驱动程序下载、账户或云端上传。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '重要测试条件',
      html: '为了获得干净的 DPI 测量，请禁用操作系统指针加速和厂商加速曲线。如果加速保持启用状态，结果描述的是当前指针行为，而非原始传感器设置。',
    },
    { type: 'title', text: '实际 DPI 计算的工作原理', level: 3 },
    {
      type: 'paragraph',
      html: 'DPI 表示每英寸点数。在鼠标语境中，人们通常混用 DPI 和 CPI 来描述鼠标物理移动一英寸时产生的计数或指针像素数。本分析器在受控扫描过程中记录水平移动，将所选距离转换为英寸，然后用捕获的像素除以英寸。例如，如果鼠标在 2 英寸内报告了 3200 个校正像素，则测量值约为 1600 DPI。',
    },
    {
      type: 'list',
      items: [
        '对于非常高的 DPI，选择 10 毫米等较短的参照物；对于低 DPI，选择较长的参照物。',
        '按住中央捕获控件，使浏览器仅在扫描过程中记录移动。',
        '物理上向右移动，尽可能保持直线路径。',
        '在实际的物理标记处释放，读取计算出的 DPI。',
        '重复多次，取一致扫描的平均值，而不是只相信一次扫描。',
      ],
    },
    {
      type: 'table',
      headers: ['捕获的移动量', '物理距离', '测量的 DPI'],
      rows: [
        ['800 px', '1.00 in', '800 DPI'],
        ['1350 px', '85.6 mm 信用卡宽度', '401 DPI'],
        ['3150 px', '50.0 mm', '1600 DPI'],
        ['6300 px', '100.0 mm', '1600 DPI'],
      ],
    },
    {
      type: 'tip',
      title: '保持划线干净',
      html: '单次水平划线比长距离更重要。对于非常高的 DPI，使用 5 毫米或 10 毫米预设：它使移动足够小以保持在屏幕内，同时为计算器提供已知的物理参照。进度条只是一个输入信号指示器；桌面上的直尺或卡片才是停止点。',
    },
    { type: 'title', text: '测量的 DPI 为何与标称 DPI 不同', level: 3 },
    {
      type: 'paragraph',
      html: '标称 DPI 通常是一个可选的固件档位，而非针对每种表面和每个设备的实验室认证值。两台设置为相同标称 DPI 的鼠标，如果其传感器、固件缩放、脚贴高度、表面纹理、抬起行为或操作系统设置不同，手感可能会有所不同。小幅偏差是正常的；大幅偏差通常意味着测试设置或软件路径正在影响测量。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '标称 DPI',
          description: '鼠标软件中显示或产品页面上标明的数值。作为出发点很有用，但不能证明实际的运动输出。',
          points: ['易于读取', '可能隐藏固件缩放', '可能因配置文件而异'],
        },
        {
          title: '测量 DPI',
          description: '根据物理移动距离和捕获的指针移动量计算得出的数值。最适合将一只鼠标匹配到另一只。',
          highlight: true,
          points: ['实用且可重复', '对手部精度敏感', '显示实际设置行为'],
        },
        {
          title: '游戏内灵敏度',
          description: '游戏将鼠标输入乘以自身的灵敏度值后的最终视角或光标响应。',
          points: ['你实际感受到的', '各游戏不同', '不是传感器测量'],
        },
      ],
    },
    {
      type: 'proscons',
      title: '基于浏览器的 DPI 测量权衡',
      items: [
        { pro: '无需安装驱动程序', con: '浏览器看到的是处理后的指针移动，而非电信号传感器信号' },
        { pro: '适合快速比较鼠标和配置文件', con: '如果加速设置保持启用，可能会扭曲结果' },
        { pro: '可使用常见的物理参照物', con: '手部对齐和桌面标记会影响可重复性' },
      ],
    },
    { type: 'title', text: '准备 Windows、macOS 和鼠标软件', level: 3 },
    {
      type: 'paragraph',
      html: '在使用 DPI 测量器之前，让输入路径尽可能中性。在 Windows 上，如果想要原始行为，请关闭「提高指针精确度」。在厂商软件中，除非有意测量，否则禁用角度捕捉、加速、波纹控制、平滑或特定表面辅助。在 macOS 上，指针加速是正常光标路径的一部分，因此其值应被视为实际的系统结果，而非原始传感器结果。',
    },
    {
      type: 'table',
      headers: ['设置', '原始 DPI 推荐', '原因'],
      rows: [
        ['指针加速', '关闭', '加速会根据速度改变移动输出'],
        ['鼠标软件 DPI 档位', '固定单一档位', '防止测试期间意外更改配置文件'],
        ['角度捕捉', '关闭', '可能修正对角线移动并掩盖自然的传感器输出'],
        ['操作系统缩放', '保持正常，工具通过 devicePixelRatio 校正', '分析器在计算中抵消浏览器缩放和显示像素比的影响'],
        ['游戏叠加层或宏', '关闭', '额外软件可能拦截输入，使扫描不一致'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:target',
      title: '匹配两只鼠标',
      html: '测量旧鼠标三次，记下平均值，然后调整新鼠标的 DPI 档位，直到其测量值接近为止。由于实际传感器输出可能不同，这通常比从一个厂商应用复制数值到另一个更有用。',
    },
    { type: 'title', text: '选择合适的物理参照物', level: 3 },
    {
      type: 'paragraph',
      html: '界面包含适用于高 DPI 的短参照物和适用于低 DPI 的长参照物。当指针以微小的手部移动穿过屏幕时，使用 5 或 10 毫米。当鼠标配置接近常见的桌面或战术射击游戏值时，使用 1 英寸、50 毫米或 85.6 毫米的卡片宽度。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '25.4', label: '一英寸的毫米数' },
        { value: '85.6', label: '常见信用卡宽度的毫米数' },
        { value: '3+', label: '信任配置文件前建议的重复扫描次数' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'DPI', definition: '每英寸点数，通常用来描述鼠标移动一英寸所产生的指针移动量。' },
        { term: 'CPI', definition: '每英寸计数，一个面向传感器的术语，在技术上对鼠标往往更准确。' },
        { term: '加速', definition: '根据移动速度改变指针输出的一种设置或曲线。' },
        { term: 'devicePixelRatio', definition: '浏览器在 CSS 像素与物理显示像素之间的比率，此处用于归一化缩放和显示缩放效果。' },
        { term: '角度捕捉', definition: '固件或软件的修正功能，可将移动拉直，有时对绘画有用，但被许多竞技玩家排斥。' },
      ],
    },
    { type: 'title', text: '解读加速指示器', level: 3 },
    {
      type: 'paragraph',
      html: '加速指示器并非对操作系统曲线的实验室验证。它是基于捕获扫描过程中移动速度变化的一个实用警告。如果慢速和快速扫描产生非常不同的 DPI 值，则可能涉及加速、平滑、表面行为或手部移动不一致。一个良好的原始设置在物理距离相同时，多次扫描应产生相近的测量 DPI。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '当结果跳动时',
      html: '如果在相同距离下，一次扫描显示 780 DPI，下一次显示 950 DPI，不要立即归咎于鼠标。检查加速设置，增加测试距离，保持鼠标路径水平，并确保扫描过程中指针不会碰到屏幕边缘。',
    },
    {
      type: 'summary',
      title: '可靠的 DPI 测试检查清单',
      items: [
        '使用已测量的物理参照物，最好为 100 毫米或更长。',
        '水平向右移动，并在标记处精确停止。',
        '禁用加速以进行原始配置文件比较。',
        '至少运行三次扫描并比较离散程度。',
        '使用测量的 DPI 来匹配鼠标，而不仅仅是标称 DPI 标签。',
      ],
    },
    {
      type: 'message',
      title: '隐私说明',
      html: '此鼠标加速测试和 DPI 计算在浏览器中本地运行。该工具不需要驱动程序访问、设备序列号或上传的输入日志。',
    },
  ],
  ui: {
    badge: '真实 DPI 实验室',
    referenceLabel: '参照物',
    referenceValue: '5 mm',
    ultraDpiPreset: '5 mm',
    highDpiPreset: '10 mm',
    balancedPreset: '50 mm',
    inchPreset: '1 in',
    cardPreset: '卡片',
    lineStart: '开始',
    holdButton: '按住并移动所选距离',
    holdHint: '在桌面上使用实际的直尺或卡片。不要因为进度条填充而停止。',
    progressLabel: '输入信号',
    activeHint: '正在追踪移动',
    dpiLabel: '测量的 DPI',
    pixelsLabel: '校正后的移动量',
    distanceReadout: '物理距离',
    ratioLabel: '像素比',
    initialDpiValue: '0',
    initialPixelsValue: '0 px',
    initialRatioValue: '0 px/in',
    initialSamplesValue: '0',
    initialAccelerationValue: '-',
    pixelUnit: 'px',
    pixelsPerInchUnit: 'px/in',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    statusReady: '准备就绪',
    statusTracking: '正在追踪移动...',
    statusDone: '测量完成',
    reset: '重置',
    accelerationTitle: '加速信号',
    accelerationHint: '以慢速和快速重复，比较一致性。',
    accelerationLow: '稳定',
    accelerationMedium: '波动',
    accelerationHigh: '高漂移',
    sampleCount: '采样数',
  },
};
