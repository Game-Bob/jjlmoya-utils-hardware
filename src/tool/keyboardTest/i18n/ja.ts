import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestTecladoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'keyboard-test';
const title = 'オンライン・キーボードテスト＆ゴースト検出器';
const description = 'キーボードのゴースト現象やキーの詰まりをチェック。リアルタイムのキー可視化とNキーロールオーバー・カウンター。';

const faqData = [
  {
    question: 'キーボードのゴースト現象（Ghosting）とは何ですか？',
    answer: '複数のキーを同時に押したときに、一部のキーが正しく反応しない現象です。キーボード内部の電気回路（マトリックス）の制限により、特定の組み合わせを処理できないために発生します。',
  },
  {
    question: 'Nキーロールオーバー（NKRO）とは何ですか？',
    answer: '同時に押したすべてのキーを、制限なく正確に認識できる機能のことです。高級なメカニカルキーボードやゲーミングキーボードに搭載されているプレミアムな機能です。',
  },
  {
    question: '3つのキーを同時に押すと反応が悪くなるのはなぜですか？',
    answer: '多くの安価な事務用キーボードは、2個または3個までのロールオーバーに制限されています。通常のタイピングには十分ですが、激しいゲームや複雑なショートカットには不向きです。',
  },
  {
    question: '反応しないキーを修理する方法はありますか？',
    answer: 'テストでキー入力が検出されない場合、スイッチ下の汚れ、接触不良、またはケーブルの断線が考えられます。諦める前に、エアダスターなどで掃除を試してみてください。',
  },
];

const howToData = [
  {
    name: '可視化画面をフォーカスする',
    text: 'ページ内の任意の場所をクリックして、ブラウザがキー入力をキャプチャできるようにします。',
  },
  {
    name: '反応テストを実行する',
    text: 'キーボードの各キーを1つずつ押してください。正しく動作していれば、画面上の対応するキーが緑色に点灯します。',
  },
  {
    name: 'ゴーストをチェックする',
    text: 'よく使うゲーム用キー（W, A, S, D, スペース, シフト）を同時に押し、入力がロックされたり、すべて反応するか確認します。',
  },
  {
    name: '最大ロールオーバーを確認する',
    text: '両手でできるだけ多くのキーを同時に押し、最大同時押しカウンターの数値を確認します。',
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

export const content: ToolLocaleContent<TestTecladoUI> = {
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
      text: 'オンライン・キーボードテスト：ゴーストとNキーロールオーバーを検出',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'キーボード診断用のインタラクティブツール。ゴースト、チャタリング、ロールオーバー制限などをチェック。すべてのキーボードタイプをサポートし、視覚的に分かりやすい表示。',
    },
    {
      type: 'title',
      text: 'ゴースト現象とは？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '特定のキーを組み合わせたときに、押していないはずの「幽霊」入力を登録してしまう現象です。内部の電子回路マトリックスの制限が原因です。',
    },
    {
      type: 'title',
      text: 'Nキーロールオーバーと最大同時押し',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>NKRO (N-Key Rollover):</strong> すべてのキーを同時に認識可能。<strong>6KRO:</strong> 古いUSB規格の制限。<strong>2-3KRO:</strong> 安価なキーボードに多く、文字入力には十分。',
    },
    {
      type: 'title',
      text: 'メカニカル vs メンブレン',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'メカニカルキーボードは個別のスイッチとダイオードを持ち、ゴーストを排除。メンブレンは導電線を共有しているため、同時押しで不具合が出ることがあります。',
    },
  ],
  ui: {
    badge: '入力テスト',
    title: 'キーボードテスト＆ゴースト検出器',
    description: 'Nキーロールオーバーを確認し、故障キーを特定。',
    simultaneousLabel: '同時押し',
    eventLogLabel: 'イベントログ',
    resetBtn: 'リセット',
  },
};
