import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpectrumCanvasUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'color-accuracy-test';
const title = '色彩精准度测试: Spectrum Canvas';
const description =
  '精准校准您的显示器。测试 sRGB 和 DCI-P3 色域，检测色彩漂移，使用 Delta E 指标衡量准确度，并生成专业的校准报告。';

const faqData = [
  {
    question: '什么是色彩精准度？为什么它很重要？',
    answer:
      '色彩精准度衡量显示器与标准参考值相比，还原颜色的真实程度。对于设计师、摄影师和内容创作者来说，准确的色彩对于确保作品在不同设备上呈现一致的效果至关重要。',
  },
  {
    question: 'sRGB 和 DCI-P3 有什么区别？',
    answer:
      'sRGB 是网页和消费级显示器的标准色域。DCI-P3 是一种更广的色域，用于数字电影和专业显示器。DCI-P3 覆盖的色彩比 sRGB 多约 25%。',
  },
  {
    question: '什么是 Delta E？如何测量？',
    answer:
      'Delta E (ΔE) 是人眼感知的色差的数值化衡量。Delta E 小于 1 是肉眼无法察觉的，小于 2 非常出色，小于 4 是可接受的，超过 4 则会变得明显。本测试采用 CIE 1976 Delta E 计算方法。',
  },
  {
    question: '我可以使用此工具来校准硬件吗？',
    answer:
      '此工具提供视觉校准参考和准确度测量。对于专业校准，您应该将这些结果与硬件校准工具（色度计）以及 ColorThink 或 Datacolor SpyderCheckr 等专用软件结合使用。',
  },
  {
    question: '测试哪些色域？',
    answer:
      '我们测试 sRGB（标准）、DCI-P3（电影）以及基于标准照明体 D65 (6500K) 和 D93 (9300K) 的白点准确度。测试还包括伽马校正验证。',
  },
];

const howToData = [
  {
    name: '选择您的色域',
    text: '在 sRGB（标准网页/消费级）或 DCI-P3（专业电影）之间选择。您的显示器将相应切换其测试调色板。',
  },
  {
    name: '命名您的硬件（可选）',
    text: '输入显示器或设备的描述性名称（例如“MacBook Pro 16 M1”）。这将个性化您的报告。',
  },
  {
    name: '进入全屏模式',
    text: '按 F11 或全屏按钮以消除浏览器 UI，确保拥有最大的显示区域进行精准测试。',
  },
  {
    name: '完成色彩测试',
    text: '依次进行光谱纯度（纯色）、阶调动态（平滑过渡）、暗部细节检测 (Black Crush) 和白点校准。',
  },
  {
    name: '查看结果并导出',
    text: '生成包含 3D 色域可视化、Delta E 指标和校准建议的视觉报告。可导出为 PDF 存档。',
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

export const content: ToolLocaleContent<SpectrumCanvasUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: '专业色彩精准度测试：精准校准您的显示器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvas 是一款专业级的色彩精准度测试工具，专为依赖色彩关键性工作的人群设计。无论您是摄影师、设计师、内容创作者还是硬件发烧友，此工具都能帮助您<strong>诊断色彩漂移</strong>、<strong>衡量显示器准确度</strong>并<strong>生成校准报告</strong>。',
    },
    {
      type: 'title',
      text: '为什么色彩精准度很重要',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '色彩还原中哪怕只有 1% 的差异，也可能决定了作品是令人“惊叹”还是让人感觉“不对劲”。专业显示器提供的精准度在 <strong>Delta E &lt; 2</strong> 以内。消费级显示器通常会漂移到 Delta E 4-6+，导致：',
    },
    {
      type: 'paragraph',
      html: '<ul><li>在显示器上看起来色彩鲜艳的照片，打印出来却显得暗淡</li><li>视频剪辑效果不符合客户的预期</li><li>网页设计稿与品牌的规范色彩不符</li><li>硬件项目中对颜色指示器的误判</li></ul>',
    },
    {
      type: 'title',
      text: '了解色域：sRGB vs DCI-P3',
      level: 3,
    },
    {
      type: 'title',
      text: 'sRGB（标准色域）',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'sRGB 由微软和惠普于 1996 年确立，是<strong>消费电子产品和网页的通用标准</strong>。它使用由三种原色（红：0.6400x 0.3300，绿：0.3000 0.6000，蓝：0.1500 0.0600）定义的三角形色域。',
    },
    {
      type: 'paragraph',
      html: '<strong>特点：</strong><ul><li>覆盖约 35% 的可见光谱</li><li>针对典型环境光照条件进行了优化</li><li>伽马 (Gamma)：2.2（匹配大多数消费级显示器）</li><li>适用场景：网页、社交媒体、日常照片</li></ul>',
    },
    {
      type: 'title',
      text: 'DCI-P3（数字电影色域）',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'DCI-P3 由数字电影倡导联盟 (Digital Cinema Initiatives) 开发，是一种专为影院投影和专业显示器设计的<strong>电影级色域</strong>。它涵盖的色彩比 sRGB 多约 25%。',
    },
    {
      type: 'paragraph',
      html: '<strong>特点：</strong><ul><li>覆盖约 53% 的可见光谱</li><li>针对黑暗的影院环境进行了优化</li><li>伽马 (Gamma)：2.6（针对高对比度进行了伽马校正）</li><li>适用场景：电影制作、专业摄影、HDR 内容</li></ul>',
    },
    {
      type: 'title',
      text: '什么是 Delta E？量化色差',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Delta E (ΔE) 是 CIE LAB 色彩空间中<strong>人眼可感知的色差衡量指标</strong>。它告诉您显示器的输出与标准参考色的接近程度。',
    },
    {
      type: 'paragraph',
      html: '<strong>Delta E 分级 (CIE 1976)：</strong><ul><li>0–1：人眼无法察觉</li><li>1–2：几乎无法察觉</li><li>2–4：可察觉，但对于普通用途是可以接受的</li><li>4–6：明显的色彩漂移</li><li>&gt;6: 非常明显的差异</li></ul>',
    },
    {
      type: 'paragraph',
      html: '专业显示器经过校准，可在整个可见色域内保持 <strong>Delta E &lt; 2</strong>。消费级显示器通常达到 Delta E 3-5。',
    },
    {
      type: 'title',
      text: 'Spectrum Canvas 测试套件',
      level: 3,
    },
    {
      type: 'title',
      text: '光谱纯度测试',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '显示纯正的原色和间色（红、绿、蓝、青、洋红、黄），并测量您的显示器如何还原它们。色彩“泛滥”动画可揭示全屏色彩还原的一致性。',
    },
    {
      type: 'title',
      text: '阶调动态',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '横跨整个色彩空间的平滑过渡。观察是否有<strong>色带伪影</strong>（看到明显的阶梯而不是平滑过渡），这表明色彩位深不足或伽马校正不佳。',
    },
    {
      type: 'title',
      text: '暗部细节检测 (Black Crush)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '纯黑 (0,0,0) 背景上带有几乎看不见的近黑阴影。如果暗部细节“挤”在了一起，说明您的显示器正在丢失阴影部分的色彩信息——这在移动设备屏幕和廉价面板中很常见。',
    },
    {
      type: 'title',
      text: '白点校准',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '测试不同的相关色温（6500K 下的 D65 = 日光，9300K 下s的 D93 = 影棚），揭示任何色温漂移或热不稳定性。',
    },
    {
      type: 'title',
      text: '解释您的结果',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvas 会生成一份精美且适合打印的报告，包含：',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>3D 色域可视化：</strong> 一个可旋转的 3D 图表，展示您显示器的实际色域体积与参考标准的对比</li><li><strong>Delta E 热力图：</strong> 显示您的显示器在光谱的哪些部分发生了漂移</li><li><strong>伽马曲线：</strong> 0-255 范围内的亮度线性度</li><li><strong>校准评分：</strong> 根据总体准确度给出的单一“色彩等级”(Spectrum Grade)（顶尖、影院级、工作站级、标准）</li></ul>',
    },
    {
      type: 'title',
      text: '高级：手动校准建议',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '如果您的结果显示存在漂移，请尝试在显示器的 OSD（屏幕显示）菜单中进行以下调整：',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>色温：</strong> 如果颜色偏冷/偏蓝，向“暖色”移动；如果偏暖/偏黄，向“冷色”移动</li><li><strong>对比度：</strong> 如果黑色看起来发白，则增加；如果暗部细节丢失，则减少</li><li><strong>亮度：</strong> 调整以在 50% 亮度下实现没有色偏的中性灰色</li><li><strong>饱和度：</strong> 如果颜色过度饱和，则减少；如果显得暗淡，则增加</li></ul>',
    },
    {
      type: 'title',
      text: '局限性与最佳实践',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>此工具提供视觉和统计参考</strong>。对于需要认证校准的专业工作，请使用硬件色度计（分光光度计或色度计）和专用校准软件。',
    },
    {
      type: 'paragraph',
      html: '<strong>最佳实践：</strong><ul><li>测试前请让显示器预热 30 分钟（热漂移会趋于稳定）</li><li>在一致的环境光照条件下进行测试</li><li>避免眩光；如果可能，请使用遮光罩</li><li>每周重复测试以追踪随时间推移产生的漂移</li><li>保留报告的数字存档以便将来对比</li></ul>',
    },
  ],
  ui: {
    badge: '显示器校准',
    title: 'Spectrum Canvas: 色彩精准度测试',
    description:
      '专业显示器校准与电影级美学的结合。测试 sRGB 和 DCI-P3，衡量 Delta E 准确度，检测色彩漂移，并生成将数据转化为洞察力的视觉报告。',
    btnStartCalibration: '开始校准',
    btnFullscreen: '全屏',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: '全屏模式',
    kbdReset: 'R',
    kbdResetLabel: '重置测试',
    kbdEsc: 'ESC',
    kbdEscLabel: '退出',
    gamutSRGB: 'sRGB',
    gamutDCIP3: 'DCI-P3',
    gamutToggle: '色彩空间',
    hardwareName: '硬件/显示器名称',
    hardwareNamePlaceholder: '例如：MacBook Pro 16" M1 Max',
    purityTest: '光谱纯度',
    gradientTest: '阶调动态',
    blackHoleTest: '暗部细节检测',
    whitePointTest: '白点校准',
    colorCheckpoint: '色彩检查点',
    generateReport: '生成报告',
    viewResults: '查看结果',
    btnExit: '退出 (ESC)',
    compareSideBySide: '并排对比',
  },
};
