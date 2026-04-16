import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestRatonUI } from '../ui';

const slug = 'mouse-polling-rate-test';
const title = 'オンライン・マウス・ポーリングレートテスト';
const description =
  'マウスの実際のHz（ヘルツ）を確認します。当社のプロフェッショナル・ツールを使用して、ゲーミングマウスが1000Hz以上で動作しているか検証できます。';

const faqData = [
  {
    question: 'マウスのポーリングレートとは何ですか？',
    answer:
      'マウスがその位置をコンピュータに報告する頻度のことで、Hz（ヘルツ）単位で測定されます。ポーリングレートが1000Hzの場合、マウスは1ミリ秒ごとにデータを送信し、よりスムーズな動きを提供します。',
  },
  {
    question: 'テストの結果が常に1000Hzに達しないのはなぜですか？',
    answer:
      'ブラウザはマウスが動いている間のみポーリングレートを測定できます。ゆっくり動かしたり、CPU負荷が高い場合は数値が変動することがあります。実際の最大値を確認するには、マウスを素早く円を描くように動かしてください。',
  },
  {
    question: 'ポーリングレートは高ければ高いほど良いのですか？',
    answer:
      '一般的に、ゲーム用途（1000Hz以上）では遅延が軽減されるため推奨されます。ただし、極端に高いレート（4000Hzや8000Hz）はCPUリソースを大量に消費し、すべてのゲームが最適化されているわけではありません。',
  },
  {
    question: 'モニターのリフレッシュレートはマウスにどう影響しますか？',
    answer:
      '144Hzや240Hzのモニターを使用している場合、低いポーリングレート（125Hz）ではポインターの動きがカクついて見えます。高リフレッシュレートのモニターでは、少なくとも500Hzまたは1000Hzを使用することが不可欠です。',
  },
];

const howToData = [
  {
    name: 'テストエリアを準備する',
    text: 'ツールのキャプチャゾーン内にカーソルを置きます。',
  },
  {
    name: 'マウスを素早く動かす',
    text: '素早く大きく円を描くように動かしてください。ツールがハードウェアから送信される各mousemoveイベント間の間隔を計算します。',
  },
  {
    name: '安定性グラフを確認する',
    text: 'Hzのラインが一定か、あるいは急激な低下がないか確認してください。低下がある場合は、ワイヤレスマウスの干渉やCPUの問題が考えられます。',
  },
  {
    name: '応答時間を分析する',
    text: 'ミリ秒単位の平均ディレイを確認します。優れたゲーミングマウスであれば、平均レイテンシは1msに近い数値を維持するはずです。',
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

export const content: ToolLocaleContent<TestRatonUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: 'リファレンス',
  bibliography: [
    {
      name: 'Gamepad Polling Rate — Logitech',
      url: 'https://www.logitechg.com/en-us/innovation/delta-zero.html',
    },
    {
      name: 'USB HID Polling Rate — USB Implementers Forum',
      url: 'https://www.usb.org/hid',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'ポーリングレート完全ガイド', level: 2 },
    {
      type: 'paragraph',
      html: 'マウスパッドの上でマウスを物理的に動かすとき、そのアナログな動きはコンピュータが理解できるデジタル信号に変換される必要があります。<strong>ポーリングレート</strong>とは、マウスがPCにその位置を「報告」する頻度のことです。Hz（ヘルツ）で測定されます。',
    },
    { type: 'title', text: 'ポーリングレートの種類と用途', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>125 Hz</strong> — 8ミリ秒ごとに報告。一般事務用途には十分ですが、144Hzモニターでは動きが荒く感じられます。<strong>1000 Hz</strong> — ゲーミングの標準：1ミリ秒ごとに報告。感知できる遅延のないスムーズな動き。<strong>8000 Hz</strong> — 最新技術（Razer、Logitechなど）。0.125ミリ秒ごとに報告しますが、ハイスペックなCPUが必要です。',
    },
    { type: 'title', text: 'Hzが変動するのはなぜですか？', level: 3 },
    {
      type: 'paragraph',
      html: '完全に正常な動作です。最新のマウスの多くは、電力を節約するために動的なポーリングレートを採用しています。ゆっくり動かすと、新しいデータが少ないため報告回数も減ります。素早く継続的な動きだけが、センサーを実際の最大値まで引き上げます。',
    },
    { type: 'title', text: 'ポーリングレートとDPI：よくある混同', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>DPI (Dots Per Inch)</strong>は感度（解像度）です：マウスを1インチ動したときにカーソルが何ピクセル動くかを表します。<strong>Hz (ポーリングレート)</strong>は更新頻度です：その動きがどれだけスムーズでタイムリーに報告されるかを表します。これら2つのパラメータはそれぞれ独立しており、補完し合う関係にあります。',
    },
  ],
  ui: {
    badge: 'マウステスト',
    title: 'ポーリングレート・チェッカー',
    description: 'マウスを素早く円状に動かしてHzを測定します。',
    labelAvg: '平均',
    labelPeak: '最大',
    placeholder: 'ここでマウスを動かしてください',
  },
};
