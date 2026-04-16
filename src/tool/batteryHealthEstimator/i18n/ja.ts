import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EstimadorSaludBateriaUI } from '../ui';

const slug = 'lithium-battery-health-calculator';
const title = 'リチウムイオン電池寿命診断ツール';
const description =
  'サイクル数、電圧、温度に基づきリチウム電池の健康状態（SoH）を算出します。エネルギー寿命を最大化するための科学的ガイド。';

const faqData = [
  {
    question: 'バッテリーの化学的劣化とは何ですか？',
    answer:
      '充放電サイクルを繰り返すごとに、リチウムセルには微細な亀裂が生じ、化学堆積物（S.E.I.）が蓄積して、エネルギー蓄電容量が低下します。これは避けられないプロセスですが、良い習慣によって遅らせることができます。',
  },
  {
    question: 'なぜ80%までの充電が推奨されるのですか？',
    answer:
      'リチウム電池は、極端な電圧（0%および100%）でより大きな負荷がかかります。充電量を20%から80%の間に保つことで、熱と内部圧力が軽減され、セルの寿命を3倍に延ばすことができます。',
  },
  {
    question: '熱はバッテリー寿命にどのように影響しますか？',
    answer:
      '熱は最大の敵です。最適な周囲温度（25度）から10度上昇するごとに、化学的劣化の速度はおよそ2倍になります。',
  },
  {
    question: 'フル充電サイクルとは何ですか？',
    answer:
      '1サイクルとは、バッテリー容量の100%を使用することですが、一度に使い切る必要はありません。今日50%使い、充電し、明日50%使えば、合計で1フルサイクルとなります。',
  },
];

const howToData = [
  {
    name: '製品本来の容量を確認する',
    text: 'デバイスの箱やメーカーのウェブサイトで、新品時のバッテリー容量（mAh）を確認します。',
  },
  {
    name: '現在のサイクル数を確認する',
    text: '多くのシステム（iOSやAndroid 14など）では、蓄積された充電サイクル数を確認できます。',
  },
  {
    name: 'テクニカルデータを入力する',
    text: '現在の電圧、サイクル数、温度を調整することで、当ツールの計算エンジンがSoHを推定します。',
  },
  {
    name: '診断を分析する',
    text: '健康状態のパーセンテージを確認してください。80%を下回ると、パフォーマンスの低下や予期せぬシャットダウンに気づき始める可能性があります。',
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<EstimadorSaludBateriaUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'Journal of Power Sources',
      url: 'https://www.sciencedirect.com/journal/journal-of-power-sources',
    },
    {
      name: 'IEEE Xplore — Lithium-Ion Battery Life Prediction',
      url: 'https://ieeexplore.ieee.org/abstract/document/11090151',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '時間の化学：リチウム電池が寿命を迎える理由', level: 2 },
    {
      type: 'paragraph',
      html: 'リチウムイオン電池は静的なエネルギーの箱ではなく、製造された瞬間から常に劣化し続ける動的な化学エコシステムです。充放電サイクル、温度変化、極端な電圧下での放置などが、イオンの流れを阻害する副産物の形成につながります。',
    },
    { type: 'title', text: '主な劣化メカニズム', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>SEI層：</strong> 固体電解質界面が時間の経過とともに成長し、活性リチウムを消費して内部抵抗を増加させます。 <strong>電解質の酸化：</strong> 4.1V以上の電圧は酸化を加速させ、バッテリーの膨張を招くことがあります。 <strong>リチウムプレーティング：</strong> 低温での充電はリチウムを金属形態で析出させ、セパレーターを突き破る可能性のあるデンドライトを形成します。',
    },
    { type: 'title', text: '「100%充電」の神話：一晩中の充電が間違いである理由', level: 3 },
    {
      type: 'paragraph',
      html: 'リチウムイオンにとって、100%充電状態（4.2V）は非常に大きなストレスがかかる状態です。研究では、デバイスを <strong>20%から80%</strong> の間に保つことでサイクル寿命が2倍から3倍に延びることが示されています。また、25°Cから10°C上昇するごとに、化学的劣化の速度はほぼ2倍になります。',
    },
    { type: 'title', text: 'エネルギー延命プロトコル', level: 3 },
    {
      type: 'paragraph',
      html: '0°C以下の環境でバッテリーを充電しないでください。リチウムが負極に析出し、永久的な損傷を与えます。急速充電は局所的な熱と機械的ストレスを発生させるため、真に必要な場合にのみ使用してください。長期保管の場合は、涼しい場所で50%程度の充電量を維持してください。',
    },
  ],
  ui: {
    badge: 'リチウムイオン電池',
    title: 'バッテリー寿命診断',
    description: 'リチウムイオンセルのテクニカルな劣化診断。',
    paramsTitle: 'セルパラメータ',
    voltageLabel: '現在の電圧',
    cyclesLabel: '充電サイクル',
    tempLabel: '温度',
    voltageHint: '公称範囲：3.0V（空）から4.2V（満充電）。',
    labelUsefulLife: '耐用年数',
    yearsPrefix: '約',
    yearsSuffix: '年間',
    metricThermalStress: '熱的ストレス',
    metricVoltageStress: '電圧ストレス',
    metricLithiumPlating: 'リチウム析出',
    statusExcelente: '良好な状態',
    statusBueno: '良い状態',
    statusRegular: '通常の状態',
    statusCritico: '危険な状態',
    indicatorTempNormal: '正常',
    indicatorTempCritical: '危険',
    indicatorVoltageHigh: '高い',
    indicatorVoltageLow: '低い',
    indicatorPlatingRisk: '高リスク',
    indicatorPlatingOk: 'リスクなし',
    recTemp: '電解質の酸化を避けるため、周囲温度を下げるか通気性を改善してください。',
    recVoltageHigh: '100%充電（4.2V）の状態を長時間維持しないでください。',
    recVoltageLow: '深放電を避けてください。20%から80%の間で運用すれば寿命が倍増します。',
    recSohLow: '容量が最適基準を下回っています。駆動時間が不十分な場合は交換を検討してください。',
    recDefault: '現在の習慣を維持してください。理想的な動作範囲内にあります。',
  },
};
