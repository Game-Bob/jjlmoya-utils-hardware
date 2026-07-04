import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeyboardChatterTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'keyboard-chatter-test';
const title = '键盘抖动测试';
const description = '通过检查同一按键两次出现的速度，检测机械键盘抖动、双击和故障开关弹跳。';

const faqData = [
  {
    question: '什么是键盘抖动？',
    answer: '键盘抖动是一种硬件故障，一次物理按压被注册为多次按压。常见于脏污、磨损、氧化或消抖不良的机械开关。',
  },
  {
    question: '这个键盘抖动测试如何工作？',
    answer: '缓慢按压同一个可疑按键，每次一下。如果日志显示仅间隔几毫秒的重复按压，开关可能正在弹跳并产生重复字母。',
  },
  {
    question: '什么样的差值表示键盘在双击？',
    answer: '低于30毫秒的重复按压强烈怀疑是抖动。30到50毫秒的重复需要关注。对于大多数用户来说，正常的故意重复按压通常在50毫秒以上。',
  },
  {
    question: '为什么第一次按压不显示差值？',
    answer: '差值需要同一按键的上一次按压。第一次按压建立基准，后续按压以毫秒为单位显示时间间隔。',
  },
  {
    question: '软件能修复键盘抖动吗？',
    answer: '消抖软件可以隐藏一些症状，但不能修复开关。可能需要清洁、重新安装热插拔开关、更换开关或修理键盘PCB。',
  },
];

const howToData = [
  {
    name: '打开工具并正常按键',
    text: '没有开始按钮。如果需要，点击工具内区域，然后按压一直双击的按键。',
  },
  {
    name: '逐个点击可疑按键',
    text: '按压双击的按键。如果一次物理按压产生多个带有微小差值的日志行，开关很可能在抖动。',
  },
  {
    name: '阅读颜色代码',
    text: '绿色表示50毫秒以上的正常，黄色表示30到50毫秒的可疑，红色表示检测到30毫秒以下的抖动。',
  },
  {
    name: '如需要导出日志',
    text: '使用下载按钮保存CSV日志，有助于比较按键或记录间歇性故障。',
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

export const content: ToolLocaleContent<KeyboardChatterTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '机械键盘双击测试',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '此键盘抖动测试有助于诊断机械键盘一次按压输入两个字母、丢失干净释放或未故意双击而产生重复字符的问题。在清洁开关、更改固件消抖设置、申请保修或更换热插拔开关之前使用。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '如何读取结果',
      badge: '差值阈值',
      html: '<p><strong>正常</strong>表示重复在50毫秒以上，通常是故意的。<strong>可疑</strong>表示30-50毫秒，应在同一按键上重新测试。<strong>检测到抖动</strong>表示低于30毫秒，很可能是一次物理按压弹跳成多个电接触。</p>',
    },
    {
      type: 'title',
      text: '机械开关为什么会抖动',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '机械开关并非以完美干净的数字化信号闭合。金属触点在稳定前可能会弹跳几毫秒。键盘固件通常通过消抖窗口过滤这种弹跳。当触点脏污、磨损、氧化、松动、破裂或调节不当，导致键盘在消抖滤波器本应处理后仍然报告额外按压时，就会发生抖动。',
    },
    {
      type: 'table',
      headers: ['症状', '可能原因', '首先尝试的方法'],
      rows: [
        ['一个按键输入同一个字母两次', '开关触点脏污或磨损', '取下键帽，吹掉灰尘，在更换开关前再次测试。'],
        ['组装后多个热插拔按键抖动', '开关引脚未正确安装', '拔出并重新安装开关，检查弯曲的引脚或松动的插座。'],
        ['仅在泼溅或潮湿后发生', '触点氧化或有残留物', '断开键盘连接，按照制造商指南清洁。'],
        ['许多按键显示微小差值', '固件消抖太低或扫描问题', '在另一个USB端口上比较，并检查固件消抖设置（如果可用）。'],
      ],
    },
    {
      type: 'title',
      text: '减少误报的测试方法',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '一次测试一个可疑按键，而不是输入完整句子。',
        '按下按键一次，完全释放，等待片刻再进行下一次按压。',
        '将可疑按键与感觉正常的附近按键进行比较。',
        '忽略按键的第一行，因为没有之前的按压可以比较。',
        '如果同一按键从单次点击中反复显示低于30毫秒的红色行，则视为硬件故障。',
        '如果只出现黄色行，则放慢速度重复测试，检查点击节奏是否导致了较短间隔。',
      ],
    },
    {
      type: 'title',
      text: '抖动 vs 故意快速打字',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '抖动',
          description: '集中在一个按键上，通常低于30毫秒，且出现在您意图只按一次时。',
          points: ['检查开关或插座。', '与附近正常按键比较。'],
        },
        {
          title: '快速打字',
          description: '影响许多按键，遵循您的节奏，且同一按键重复按压间隔通常在50毫秒以上。',
          points: ['通常是正常使用。', '用更慢的单次点击重新测试。'],
        },
        {
          title: '操作系统按键重复',
          description: '在按住按键时出现，通常以操作系统设定的规律节奏重复。',
          points: ['点击之间完全释放。', '单独检查键盘重复设置。'],
        },
      ],
    },
    {
      type: 'title',
      text: '按键未通过测试时的处理方法',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '在更改任何内容之前保存CSV日志，以便比较前后结果。',
        '取下键帽，检查是否有污垢、液体残留或无法顺畅回弹的轴心。',
        '对于热插拔键盘，重新安装或更换开关，再次测试同一位置。',
        '对于焊接键盘，在假定PCB需要修理之前，比较固件消抖选项。',
        '如果多个不相关的按键显示不可能的差值，请尝试其他线缆和USB端口。',
        '如需保修支持，请提供受影响的按键、重复的差值、键盘型号、固件版本以及故障是跟随开关还是PCB插座。',
      ],
    },
    {
      type: 'summary',
      title: '快速规则',
      items: [
        '单次红色行是线索，不是定论。',
        '同一物理按键上反复出现低于30毫秒的红色行是键盘抖动的有力证据。',
        '更换硬件前，使用故意的单次点击，并将可疑开关与附近正常按键进行比较。',
      ],
    },
  ],
  ui: {
    statusIdle: '按任意键',
    statusListening: '测量按键差值',
    statusChatter: '检测到抖动',
    totalPresses: '总按压次数',
    chatterEvents: '抖动事件',
    worstDelta: '最差差值',
    watchWindow: '保留行数',
    keyColumn: '按键',
    deltaColumn: '差值',
    verdictColumn: '判断',
    timeColumn: '时间',
    normal: '正常',
    suspect: '可疑',
    chatter: '抖动',
    waiting: '等待中',
    clear: '清除日志',
    exportLog: '导出CSV',
    hint: '日志保留最近80行，以便长时间会话保持快速。按住按键的重复被忽略；红色行来自过于接近的单独按压。',
    captureNotice: '无开始按钮。点击可疑按键一次，观察其与上一次按压的差值。',
    keyboardAriaLabel: '最近按键活动',
    logAriaLabel: '键盘抖动事件日志',
    escapeKey: 'Esc',
    backspaceKey: '退格',
    tabKey: 'Tab',
    enterKey: '回车',
    capsLockKey: '大写',
    shiftKey: 'Shift',
    controlKey: 'Ctrl',
    metaKey: 'Meta',
    altKey: 'Alt',
    spaceKey: '空格',
    csvHeader: '按键,代码,差值_毫秒,严重程度,时间',
  },
};
