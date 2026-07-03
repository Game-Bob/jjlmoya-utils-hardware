import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseScrollTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mouse-scroll-test';
const title = '鼠标滚轮测试';
const description = '通过本地浏览器滚轮测试，诊断鼠标滚轮跳帧、反向跳动、滚轮方向不一致以及编码器信号弱等问题。';

const faqData = [
  {
    question: '鼠标滚轮测试能检测什么？',
    answer: '鼠标滚轮测试记录滚轮事件，查找不稳定的方向变化、微弱的小增量以及不一致的滚动。当滚轮编码器脏污、磨损、未对准或存在电噪声时，这些症状经常出现。',
  },
  {
    question: '什么是反向滚动跳动？',
    answer: '反向跳动是指您向一个方向滚动时，计算机却短暂接收到相反方向的事件。如果在匀速滚动期间反复出现，则强烈表明编码器存在抖动或污染。',
  },
  {
    question: '此测试适用于触摸板吗？',
    answer: '可以，但对于物理鼠标滚轮来说结果最有意义。触摸板和顺滑滚轮会产生许多微小的增量，因此灵敏度控制有助于区分有意的精细移动和可疑的抖动。',
  },
  {
    question: '测试会上传我的鼠标数据吗？',
    answer: '不会。计算在您的浏览器本地执行。该工具仅在指针处于捕获区域内时使用滚轮事件。',
  },
];

const howToData = [
  {
    name: '将指针悬停在捕获面板上',
    text: '将光标移动到滚轮实验室区域内，以便页面在不移动周围文档的情况下捕获滚轮事件。',
  },
  {
    name: '在一个方向上匀速滚动',
    text: '一次只测试一个方向：缓慢向上滚动多格，重置或暂停，然后单独测试向下滚动。故意的快速方向改变可能会产生错误的反向跳动读数。',
  },
  {
    name: '观察反向跳动',
    text: '如果在手指仍向一个方向移动时反转计数器增加，请重复相同的动作以确认该模式。',
  },
  {
    name: '调整灵敏度',
    text: '对于顺滑触摸板可提高灵敏度，对于严格的机械滚轮测试则降低灵敏度。稳定性分数会立即更新。',
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

export const content: ToolLocaleContent<MouseScrollTestUI> = {
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
      text: '鼠标滚轮测试：发现滚轮跳帧和反向跳动',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '鼠标滚轮故障很少一次性彻底损坏。通常从小症状开始：一格滚动方向错误，向下滚动时页面却向上跳动，或者滚轮手感正常但浏览器接收到不一致的事件。此鼠标滚轮测试会记录到达浏览器的信号，并高亮显示与诊断相关的模式。',
    },
    {
      type: 'paragraph',
      html: '目的不是测量页面移动了多远。有用的信号是<strong>方向一致性</strong>。当您匀速向下转动机械滚轮时，事件流应该保持在那个方向。在狭窄时间窗口内的短暂反向事件是可疑的，因为这符合脏污或磨损的滚轮编码器误读滚轮运动的方式。',
    },
    {
      type: 'title',
      text: '工具测量的内容',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '测试面板中捕获的滚轮总格数',
        '反向跳动：在前一方向还较近时发生的快速符号变化',
        '最长干净序列：多少连续事件保持了一致的方向',
        '最后增量：最近一次滚轮事件的原始方向和幅度',
        '垂直与水平活动，对倾斜滚轮和触摸板很有用',
      ],
    },
    {
      type: 'table',
      headers: ['信号', '正常模式', '可疑模式'],
      rows: [
        ['垂直滚轮', '匀速滚动时出现长的上或下事件序列', '手指保持一个方向时上下事件交替出现'],
        ['水平倾斜', '仅在使用倾斜或水平手势时出现左或右事件', '正常垂直滚轮使用期间出现意外的横向移动'],
        ['小增量', '顺滑滚轮或触摸板上偶有小值', '有刻度的机械滚轮上出现高比例的小而不稳定的值'],
        ['稳定性分数', '在多次有意的测试中保持高分', '由于在同一方向测试中出现反转而反复下降'],
      ],
    },
    {
      type: 'title',
      text: '滚轮跳帧的常见原因',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '大多数鼠标滚轮使用将旋转转换为脉冲的编码器。灰尘、氧化、磨损的触点、松动的滚轮轴、固件滤波问题或损坏的线缆都可能使这些脉冲不一致。当编码器短暂报告错误的相位时，即使滚轮继续沿原始方向移动，操作系统也可能接收到相反方向的滚轮事件。',
    },
    {
      type: 'table',
      headers: ['症状', '可能原因', '下一步检查'],
      rows: [
        ['向下滚动时页面向上跳动', '编码器抖动或滚轮机构内有污垢', '进行一次缓慢的向下扫描并观察反转计数器'],
        ['仅有一个应用滚动异常', '应用平滑处理、缩放模式或自定义鼠标快捷键', '在浏览器中测试并与另一应用比较'],
        ['吹气后滚轮正常，随后再次失效', '碎屑暂时移动或编码器触点磨损', '正常使用几分钟后重复测试'],
        ['出现意外的水平移动', '倾斜滚轮噪声、触摸板手势或驱动程序映射', '垂直滚动时检查水平轴指示器'],
        ['无线鼠标滚动不稳定', '电池电量低、接收器距离远或干扰', '使用新电池并将接收器靠近鼠标重新测试'],
      ],
    },
    {
      type: 'title',
      text: '如何可靠测试',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '滚动前将指针放在捕获面板内，以便页面阻止正常的页面移动',
        '一次只测试一个方向：不改变方向地缓慢向上滚动10到20格',
        '重置或暂停，然后将相同的单向扫描向下重复一次',
        '不要在上下之间快速切换，因为故意的快速方向改变可能看起来像反向跳动',
        '如果出现反转，重复失败的方向多次以确认可复现性',
        '如果需要区分硬件和软件问题，在同一台计算机上使用另一只鼠标进行比较',
      ],
    },
    {
      type: 'title',
      text: '解读评分',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '稳定性分数是一个快速总结。高分意味着工具观察到一致的方向和较少的微小不确定增量。低分并不自动证明鼠标坏了，尤其是在触摸板或高分辨率顺滑滚轮上，但在缓慢的单向测试中反复出现的反向跳动是真正滚轮问题的有力证据。',
    },
    {
      type: 'table',
      headers: ['结果', '含义', '建议操作'],
      rows: [
        ['无反转且长序列干净', '滚轮信号看起来一致', '仅在实际使用中出现症状时继续测试'],
        ['一次孤立的反转', '可能是意外的方向改变或一次噪声事件', '缓慢重复同一方向'],
        ['同一次扫描中多次反转', '可能是编码器抖动、污垢或滚轮磨损', '在另一台计算机上重新测试并记录结果'],
        ['许多抖动事件但无反转', '灵敏度可能对此设备类型过低', '对触摸板或顺滑滚轮设备提高灵敏度'],
        ['垂直滚轮使用期间出现水平事件', '可能是倾斜滚轮噪声或驱动程序映射噪声', '禁用自定义鼠标软件并重新测试'],
      ],
    },
    {
      type: 'title',
      text: '机械滚轮与触摸板对比',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '有刻度的机械滚轮通常会产生清晰的方向步进。触摸板或自由旋转滚轮可能会产生许多微小增量，因为操作系统会进行顺滑滚动处理。这就是此工具包含灵敏度控制的原因：提高它可以忽略微小运动，让测试专注于足够大的方向变化。',
    },
    {
      type: 'title',
      text: '更换鼠标之前应尝试的事项',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '在另一个浏览器中测试以排除页面特定的滚轮处理程序',
        '诊断期间禁用制造商鼠标软件、滚动加速或宏图层',
        '对于无线鼠标，使用新电池并缩短接收器距离',
        '在鼠标拔下或关闭电源时用压缩空气清洁滚轮周围',
        '如果鼠标在保修期内，将重复的反转模式记录下来作为证据',
      ],
    },
    {
      type: 'paragraph',
      html: '基于浏览器的测试无法对编码器进行电气检查，但可以准确显示您的正常软件接收到的内容。如果在谨慎的单向滚动期间浏览器接收到错误方向的滚轮事件，其他应用程序也可能会接收到。',
    },
  ],
  ui: {
    badge: '滚轮信号实验室',
    captureTitle: '在信号面板内滚动',
    captureHint: '使用匀速单向滚轮扫描来发现反向跳动',
    focusLockTitle: '激活此滚动区域',
    focusLockText: '点击此区域并在此处滚动。此区域激活时页面不会移动。',
    stabilityScore: '稳定性分数',
    statusIdle: '在面板上滚动以开始测量滚轮一致性',
    statusClean: '滚轮方向在捕获的样本中稳定',
    statusWarning: '最近滚动期间检测到反向跳动',
    statusMixed: '检测到许多小增量；请为此设备调整灵敏度',
    directionNote: '一次只测试一个方向。快速上下切换可能会产生错误的反向跳动读数。',
    totalTicks: '格数',
    reversals: '反转',
    longestRun: '最佳序列',
    lastDelta: '最后增量',
    verticalAxis: '垂直',
    horizontalAxis: '水平',
    dominantDirection: '最后方向',
    upward: '上',
    downward: '下',
    leftward: '左',
    rightward: '右',
    noDirection: '无移动',
    noDataValue: '-',
    sensitivityLabel: '抖动灵敏度',
    sensitivityUnit: '增量',
    reset: '重置',
    logTitle: '滚轮事件流',
    emptyLog: '用缓慢稳定的滚轮运动在面板上滚动。',
    cleanEvent: '干净',
    reversalEvent: '反向跳动',
    jitterEvent: '微小增量',
  },
};
