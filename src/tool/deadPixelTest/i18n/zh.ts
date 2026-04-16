import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PixelesPantallaUI } from '../ui';

const slug = 'dead-pixel-tester';
const title = '屏幕坏点检测与修复工具';
const description =
  '在线检测显示器是否存在死点或亮点（卡住的像素），并使用我们的高频闪烁工具尝试修复。';

const faqData = [
  {
    question: '死点 (Dead Pixel) 和亮点/卡住的像素 (Stuck Pixel) 有什么区别？',
    answer:
      '死点由于没有电力供应（晶体管损坏）而永久显示为黑色。亮点或卡住的像素通常显示为明亮的颜色（红、绿或蓝），有时可以通过高频闪烁刺激来恢复活力。',
  },
  {
    question: '修复工具 (Strobe) 是如何工作的？',
    answer:
      '我们的工具以极快的速度产生三原色的闪烁。这可以强迫卡住的像素液晶重新活动。建议运行 10 到 30 分钟。',
  },
  {
    question: '温度会导致坏点出现吗？',
    answer:
      '是的，极端温度会影响面板。然而，最常见的原因是生产缺陷或损坏液晶电气接触点的物理冲击。',
  },
  {
    question: '保修范围涵盖多少个坏点？',
    answer:
      '这取决于制造商和 ISO 9241-307 标准。通常，品牌认为对于 1 级面板，最多 2 到 3 个亮点是“正常”的，而 0 级面板则不允许有任何坏点。',
  },
];

const howToData = [
  {
    name: '清洁屏幕',
    text: '在开始之前，用超细纤维布彻底清洁显示器，以免将灰尘误认为坏点。',
  },
  {
    name: '进入全屏模式',
    text: '按下 F11 或全屏按钮，以免浏览器界面干扰坏点检测。',
  },
  {
    name: '切换颜色',
    text: '在黑、白、红、绿、蓝背景之间切换。寻找任何与背景颜色不符的点。',
  },
  {
    name: '开始修复循环',
    text: '如果你发现了一个亮点，将 Strobe 工具移动到该位置并让它运行至少 20 分钟。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<PixelesPantallaUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料与标准',
  bibliography: [
    {
      name: 'ISO/IEC 9241-307: 显示器人体工程学及相关设备',
      url: 'https://www.iso.org/standard/72025.html',
    },
    {
      name: '坏点政策 - 通用标准 (VESA)',
      url: 'https://www.vesa.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '完整指南：死点、亮点以及如何修复它们',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '注意到屏幕上有一个不改变颜色的奇怪点吗？这可能是面板缺陷。本工具可帮助你诊断显示器是否存在<strong>死点</strong>或<strong>卡住的像素</strong>（亮点），并提供尝试修复的方案。',
    },
    {
      type: 'title',
      text: '死点和亮点有什么区别？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '现代显示器的像素缺陷主要有两种类型，每种都有不同的特点和解决方案。',
    },
    {
      type: 'title',
      text: '亮点/卡住的像素 (Stuck Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '这是最常见的缺陷。它发生在红、绿、蓝子像素中的一个或多个卡在“开启”状态时。<strong>症状：</strong>在深色背景下，你会看到一个永久发光的色点（红、绿、蓝或白色）。<strong>通常是可修复的。</strong>液晶仍然有反应，只是被“锁”在特定的偏振状态。我们的 Strobe 修复工具尝试通过快速电压刺激来解锁它。',
    },
    {
      type: 'title',
      text: '死点 (Dead Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '当控制像素的晶体管完全失效且无法透光时发生。<strong>症状：</strong>永久性的黑点，在浅色或白色背景下尤为明显。<strong>难以修复（通常是永久性的）。</strong>损坏发生在硬件层面（电路烧毁）。任何电刺激都无法修复它，通常需要更换面板。',
    },
    {
      type: 'title',
      text: 'Strobe 修复工具是如何工作的？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '“修复像素”功能使用了一种被称为 <strong>Pixel Exercising</strong>（像素锻炼）的技术。它在受影响的区域产生高频随机噪声模式（颜色快速闪烁）。',
    },
    {
      type: 'title',
      text: '机制：液晶与电压',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '液晶显示器使用液晶，其透明度根据施加的电压而改变。当一个子像素卡住时，意味着液晶“冻结”在特定的偏振状态。快速的电压变化（通过快速切换原色实现）尝试“锻炼”液晶并迫使它改变状态。',
    },
    {
      type: 'title',
      text: '使用建议',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '<ul><li>建议在受影响区域运行该工具至少 <strong>10 到 20 分钟</strong>。</li><li>如果不起作用，请尝试更长时间（最长 1 小时），或尝试用超细纤维布非常轻微地按压该像素（风险自担）。</li><li>在某些情况下，在激活 Strobe 之前用吹风机（低温档）稍微加热显示器可以提高效果。</li></ul>',
    },
    {
      type: 'title',
      text: '癫痫警告',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '修复模式使用高频率的快速闪光。如果你患有光敏性癫痫或对光敏感，<strong>请勿使用此功能</strong>。暴露在闪烁模式下可能会引发易感人群的癫痫发作。',
    },
    {
      type: 'title',
      text: '何时申请保修或更换',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '如果你确认存在缺陷像素（尤其是多个死点），可以将我们的测试结果作为保修索赔的证据。许多制造商根据 ISO 9241-307（1 级）标准，将超过 2-3 个亮点或 1 个死点视为符合更换条件的制造缺陷。',
    },
    {
      type: 'title',
      text: '死点标准的历史',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '几十年来，由于制造的复杂性，液晶显示器一直存在像素缺陷。一个全高清面板（1920×1080）包含 6,220,800 个像素（18,662,400 个子像素）。统计上的缺陷概率是不可避免的。这就是为什么存在 ISO 9241-307 等标准，来根据显示器级别定义“可接受的死点”数量。',
    },
  ],
  ui: {
    badge: '屏幕实用程序',
    title: '死点或亮点？',
    description: '通过纯色背景检查显示器状态，并使用我们的高频刺激工具尝试修复卡住的像素。',
    btnStartTest: '开始测试',
    btnStartFix: '修复像素',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: '全屏',
    kbdSpace: '空格键',
    kbdSpaceLabel: '切换颜色',
    kbdEsc: 'ESC',
    kbdEscLabel: '退出',
    colorBlack: '黑色',
    colorWhite: '白色',
    colorRed: '红色',
    colorGreen: '绿色',
    colorBlue: '蓝色',
    btnToggleFixer: '打开修复工具 (Strobe)',
    btnExit: '退出 (ESC)',
  },
};
