import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SubwooferCrossoverTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'subwoofer-crossover-test';
const title = '低音炮分频测试';
const description =
  '在浏览器中运行从200Hz到10Hz的正弦波扫描，找到低音炮衰减、中断或交接给主音箱的位置。';

const faqData = [
  {
    question: '低音炮分频测试测量什么？',
    answer:
      '它帮助您听到主音箱和低音炮之间低音不再连续的点。间隙、突然的电平变化或缺失的频段可能表明分频频率不正确、相位问题、房间抵消或低音炮的极限。',
  },
  {
    question: '为什么这个测试从200Hz向下扫描到10Hz？',
    answer:
      '大多数家庭影院分频点设置在60Hz到120Hz之间，而许多紧凑型音箱在此范围之上或之下开始失去输出。从200Hz开始扫描，可以在音调到达深沉次低音之前轻松听到音箱到低音炮的交接。',
  },
  {
    question: '这个在线低音炮低音测试会损坏音箱吗？',
    answer:
      '是的，高音量下的极低频率可能会使小型音箱过载或给低音炮带来压力。从低音量开始，避免增强的低音模式，如果听到嘎嘎声、敲击声或机械压力声，请立即停止。',
  },
  {
    question: '标记的衰减频率是我应该使用的确切分频设置吗？',
    answer:
      '不是。请将其视为听力线索，而不是实验室测量。最佳分频设置还取决于音箱规格、房间布置、相位、距离校正和校准目标。',
  },
];

const howToData = [
  {
    name: '设置安全的聆听音量',
    text: '首先降低系统音量。扫描使用生成的正弦波，因此即使浏览器音量看起来适中，低音也可能变得强烈。',
  },
  {
    name: '启动200Hz至10Hz扫描',
    text: '按下开始扫描，从您通常的座位聆听。音调稳定地穿过低音炮、主音箱和房间声学重叠的低音范围。',
  },
  {
    name: '聆听衰减或交接',
    text: '注意低音变弱、消失、位置改变或在低音炮和主音箱之间听起来不均匀的时刻。',
  },
  {
    name: '标记频率',
    text: '在第一个明显的问题点按下标记衰减。使用该频率作为调整分频、相位、摆放或房间校正的线索。',
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<SubwooferCrossoverTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: '找到音箱与低音炮之间的低音间隙', level: 2 },
    {
      type: 'paragraph',
      html: '低音炮不应该听起来像角落里一个单独的箱子。当音符从主音箱移动到低音炮时，低音应保持均匀。此测试从<strong>200Hz扫描到10Hz</strong>，让您能够听到交接变得薄弱、轰鸣、可定位或无声的精确区域。',
    },
    {
      type: 'table',
      headers: ['您听到的', '通常意味着什么', '首先尝试什么'],
      rows: [
        ['低音在70-100Hz附近消失', '低音炮和音箱可能在分频点附近相互抵消。', '反转相位，调整距离/延迟，然后重复扫描。'],
        ['低音在一个窄带内轰鸣', '房间模式或音箱与低音炮之间重叠过多。', '稍微降低分频点，或移动低音炮/听音位置。'],
        ['低音似乎来自低音炮的位置', '分频点可能太高或低音炮电平太高。', '尝试80Hz或更低，并降低低音炮增益。'],
        ['深沉低音在30-40Hz以下衰减', '许多低音炮的正常延伸极限，尤其是紧凑型。', '在追查可能是物理性的问题之前，先检查低音炮规格。'],
      ],
    },
    { type: 'title', text: '衰减频率告诉您什么', level: 3 },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '将标记的频率用作调校线索',
      badge: '听力线索',
      html: '<p>如果标记的点接近您的AVR分频点，问题可能在于整合：相位、距离、极性、电平或滤波器的斜率。如果标记的点低得多，您可能听到的是低音炮达到输出极限。如果移动头部时问题变化很大，则是房间主导了结果。</p>',
    },
    {
      type: 'title',
      text: '常见的分频范围',
      level: 3,
    },
    {
      type: 'table',
      headers: ['音箱类型', '典型的分频起始点', '原因'],
      rows: [
        ['小型卫星音箱', '100-150 Hz', '小箱体通常无法在影院音量下播放干净的中上低音。'],
        ['书架式音箱', '70-100 Hz', '通常有足够的低音进行干净的交接，而不会使低音炮可定位。'],
        ['落地式音箱', '50-80 Hz', '较大的低音单元可以处理更多的中低音，但房间可能仍倾向于低音炮低音管理。'],
        ['THX风格设置', '80 Hz', '一个实用的默认值，适用于许多系统，并将深沉低音路由到低音炮。'],
      ],
    },
    { type: 'title', text: '分频问题还是房间问题？', level: 3 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '分频或相位问题',
          description: '弱点出现在分频频率附近，并且在改变相位、极性、距离或分频设置后会改善。',
          points: ['通常从同一座位可重复。', '通常集中在60-120Hz左右。'],
        },
        {
          title: '房间抵消',
          description: '当您移动头部、换座位或将低音炮移动一小段距离时，弱点会发生剧烈变化。',
          points: ['非常依赖位置。', '通常通过摆放而非设置来解决。'],
        },
      ],
    },
    {
      type: 'tip',
      title: '运行测试的最佳方式',
      html: '坐在您实际观看电影或听音乐的位置。不要站在低音炮旁边。在箱体旁边听起来不错的分频，在沙发上仍可能留下间隙。',
    },
    {
      type: 'summary',
      title: '扫描后要更改什么',
      items: [
        '如果间隙接近当前分频点，尝试10Hz的调整并重复扫描。',
        '如果弱带位于分频点附近，尝试低音炮的相位开关或延迟设置。',
        '如果低音在一个座位上变强而在另一个座位上消失，在更改所有AVR设置之前先移动低音炮。',
        '摆放或分频更改后，重新运行房间校正，以便接收器测量新设置。',
        '使用标记的频率指导调校，然后用音乐、电影和熟悉的低音线确认。',
      ],
    },
  ],
  ui: {
    sweepLabel: '低音炮低频扫描',
    currentFrequency: '当前频率',
    targetFrequency: '目标',
    elapsed: '已用时间',
    statusReady: '准备低频扫描',
    statusRunning: '正在向下扫描',
    statusStopped: '扫描已停止',
    start: '开始扫描',
    stop: '停止扫描',
    markDropout: '标记衰减',
    reset: '重置',
    volume: '输出电平',
    duration: '扫描时长',
    safeStart: '以低音量开始，然后标记低音变得难以听到的第一个频率。',
    roomNote: '房间位置和相位可能会显著改变结果。',
    dropoutLabel: '标记点',
    dropoutEmpty: '尚未标记',
    crossoverEstimate: '估计衰减点',
  },
};
