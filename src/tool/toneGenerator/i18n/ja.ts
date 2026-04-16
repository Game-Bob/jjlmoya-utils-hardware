import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ToneGeneratorUI } from '../ui';

const slug = 'tone-frequency-generator';
const title = 'オンライン・トーン＆周波数ジェネレーター';
const description =
  '正弦波、矩形波、三角波、鋸歯状波を生成します。20Hzから20kHzまでの周波数で、スピーカー、ヘッドフォン、またはサブウーファーをテストできます。';

const faqData = [
  {
    question: '周波数ジェネレーターは何に使用されますか？',
    answer:
      'スピーカーやヘッドフォンの周波数特性のテスト、家具の不要な共振の検出、聴力範囲のチェック、さらにはノッチ療法による耳鳴りの緩和などに使用されます。',
  },
  {
    question: '正弦波と矩形波の違いは何ですか？',
    answer:
      '正弦波は高調波を含まない純音（滑らかで丸い音）です。矩形波は奇数次の高調波を豊富に含み、より攻撃的またはデジタルな音がします。三角波はその中間で、音響合成に役立ちます。',
  },
  {
    question: 'このツールでスピーカーを損傷することはありますか？',
    answer:
      'はい、極端な周波数（特に30Hz以下の低音や15kHz以上の高音）で非常に大きな音量を出すと損傷の原因になります。常にシステム音量を下げた状態から始め、徐々に上げてください。',
  },
  {
    question: '人間の聴力範囲はどれくらいですか？',
    answer:
      '理論的には20Hzから20,000Hz（20kHz）です。しかし、加齢とともに15kHz以上の高音を聞き取る能力が低下するのが一般的です。このテストで個人の上限を確認できます。',
  },
];

const howToData = [
  {
    name: '波形タイプを選択する',
    text: '実行したいテストの種類に応じて、正弦波（純音）、矩形波、三角波、または鋸歯状波から選択します。',
  },
  {
    name: '周波数を調整する',
    text: 'スライダーを動かして可聴範囲を移動します。60Hz、440Hz、1kHzのショートカットを使用して、基準周波数に素早くアクセスできます。',
  },
  {
    name: '音量をコントロールする',
    text: '再生ボタンを押す前に、スピーカーの音量が小さいことを確認してください。ツールから直接ゲインを調整できます。',
  },
  {
    name: '応答を分析する',
    text: '歪みや音が消える瞬間がないか確認してください。これにより、オーディオハードウェアの物理的な限界がわかります。',
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

export const content: ToolLocaleContent<ToneGeneratorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: 'リファレンス',
  bibliography: [
    {
      name: 'MDN Web Docs — Web Audio API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
    },
    {
      name: 'ISO 226:2023 — Equal-loudness contours',
      url: 'https://www.iso.org/standard/83117.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '周波数と音波のすべて', level: 2 },
    {
      type: 'paragraph',
      html: '音は運動する物理そのものです。このツールを使用すると、胸で感じる深い低音から、動物だけが感知できる超音波のような高音まで、音波をリアルタイムで操作できます。',
    },
    { type: 'title', text: '人間の可聴範囲と老人性難聴', level: 3 },
    {
      type: 'paragraph',
      html: '健康な人の耳は、<strong>20Hzから20kHz</strong>の間の音を感知します。加齢とともに上限は下がり、50歳以上の成人の多くは12kHz以上が聞こえなくなります。「モスキート音」として知られる17.4kHzの音は、通常ティーンエイジャーだけが合格できる古典的なテストです。',
    },
    { type: 'title', text: '波形の種類と用途', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>正弦波：</strong>高調波のない純音で、医療的な聴力検査や楽器の校正に使用されます。<strong>矩形波：</strong>奇数次の高調波が豊富で、レトロな8ビットゲーム機のような音がします。<strong>鋸歯状波：</strong>すべての高調波を含み、電子音楽シンセサイザーの基礎となります。<strong>三角波：</strong>正弦波と矩形波の中間で、矩形波より滑らかですが、正弦波より多くの高調波を含みます。',
    },
    { type: 'title', text: 'スピーカーのテストと振動によるクリーニング', level: 3 },
    {
      type: 'paragraph',
      html: '最大音量で矩形波または鋸歯状波の低周波波（通常は<strong>165Hz</strong>）を再生すると、スピーカーの振動板が激しく振動し、グリルに溜まった水滴を機械的に排出します。非常に高い周波数を最大音量で長時間再生しないでください。たとえ聞こえなくても、そのエネルギーによって機器のツイーターを損傷する可能性があります。',
    },
  ],
  ui: {
    badge: 'オーディオジェネレーター',
    title: 'トーンジェネレーター',
    description: 'オーディオテスト用の純粋な周波数を生成します。',
    freqLabel: '周波数',
    preset60: '60Hz',
    preset440: '440Hz',
    preset1k: '1kHz',
    rangeMin: '20Hz (サブバス)',
    rangeMax: '20kHz (超音波)',
    waveLabel: '波形',
    waveSine: '正弦波',
    waveSquare: '矩形波',
    waveSawtooth: '鋸歯状波',
    waveTriangle: '三角波',
    volLabel: '音量',
    btnPlay: 'トーンを再生',
    btnStop: '停止',
  },
};
