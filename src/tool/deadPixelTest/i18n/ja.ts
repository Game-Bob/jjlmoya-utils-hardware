import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PixelesPantallaUI } from '../ui';

const slug = 'dead-pixel-tester';
const title = 'ドット抜けテスト・液晶修復ツール';
const description =
  'モニターにドット抜け（死んでいる画素）やスタックピクセル（固まっている画素）がないか確認し、高周波ストロボツールでオンライン修復を試みることができます。';

const faqData = [
  {
    question: '「デッドピクセル（死んだ画素）」と「スタックピクセル（固まった画素）」の違いは何ですか？',
    answer:
      'デッドピクセルは、電力が供給されていないため（トランジスタの故障）常に黒い状態です。スタックピクセルは通常、明るい色（赤、緑、青）で表示され、高速なストロボ刺激によって修復できる可能性があります。',
  },
  {
    question: '修復ツール（ストロボ）はどのように機能しますか？',
    answer:
      '当ツールは、三原色を高速で点滅させます。これにより、固まっている画素の液晶分子を強制的に動かし、ロックを解除させます。10分から30分程度実行することをお勧めします。',
  },
  {
    question: '温度によってドット抜けが発生することはありますか？',
    answer:
      'はい、極端な温度はパネルに影響を与える可能性があります。しかし、最も一般的な原因は製造上の欠陥や、液晶の電気接点を損傷する物理的な衝撃です。',
  },
  {
    question: '保証でカバーされるドット抜けの数は？',
    answer:
      'メーカーやISO 9241-307規格によります。一般的に、Class 1パネルでは2〜3個程度の輝点までは「正常」とみなされることが多いですが、Class 0パネルでは1つも許容されません。',
  },
];

const howToData = [
  {
    name: '画面を清掃する',
    text: '開始前に、ホコリをドット抜けと見間違えないよう、マイクロファイバークロスでモニターをきれいに拭いてください。',
  },
  {
    name: '全画面表示にする',
    text: 'F11キーまたは全画面ボタンを押し、ブラウザのインターフェースが欠陥の検出を妨げないようにします。',
  },
  {
    name: '色を切り替える',
    text: '黒、白、赤、緑、青の背景を順に切り替えます。背景色と一致していない点がないか探してください。',
  },
  {
    name: '修復サイクルを開始する',
    text: '輝点を見つけた場合は、ストロボツールをその位置に合わせ、少なくとも20分間実行してください。',
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

export const content: ToolLocaleContent<PixelesPantallaUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献と規格',
  bibliography: [
    {
      name: 'ISO/IEC 9241-307：ディスプレイの人間工学および関連機器',
      url: 'https://www.iso.org/standard/72025.html',
    },
    {
      name: 'ドット抜けに関するポリシー - 一般的な規格 (VESA)',
      url: 'https://www.vesa.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '完全ガイド：ドット抜け、輝点、そしてそれらを修復する方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '画面上に色が変わらない奇妙な点があることに気づきましたか？それはパネルの欠陥かもしれません。このツールは、モニターに<strong>デッドピクセル（死んでいる画素）</strong>や<strong>スタックピクセル（固まっている画素）</strong>があるかどうかを診断し、それらを修復するためのソリューションを提供します。',
    },
    {
      type: 'title',
      text: 'デッドピクセルとスタックピクセルの違いは何ですか？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '現代のモニターにおける画素の欠陥には主に2つのタイプがあり、それぞれ特徴と解決策が異なります。',
    },
    {
      type: 'title',
      text: 'スタックピクセル（輝点）',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '最も一般的な欠陥です。1つ以上のサブピクセル（赤、緑、青）が「オン」の状態で固まってしまうことで発生します。<strong>症状：</strong>暗い背景に対して、常に明るい色の点（赤、緑、青、または白）が見えます。<strong>多くの場合、修復可能です。</strong>液晶自体はまだ反応しており、特定の偏光状態で「ロック」されているだけです。当ツールのストロボ機能は、急速な電圧刺激によってこのロックを解除しようと試みます。',
    },
    {
      type: 'title',
      text: 'デッドピクセル（ドット落ち）',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '画素を制御するトランジスタが完全に故障し、光を通さなくなったときに発生します。<strong>症状：</strong>常に黒い点で、特に明るい背景や白い背景で目立ちます。<strong>修復は困難です（通常は永久的）。</strong>損傷はハードウェアレベル（回路の焼損）にあります。電気的な刺激で直ることはありません。通常、パネルの交換が必要になります。',
    },
    {
      type: 'title',
      text: 'ストロボ修復ツールはどのように機能しますか？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '「液晶修復」機能は、<strong>Pixel Exercising</strong>として知られる技術を使用しています。対象エリアに対して高周波のランダムノイズパターン（高速な色の切り替え）を生成します。',
    },
    {
      type: 'title',
      text: 'メカニズム：液晶と電圧',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '液晶モニターは、印加される電圧に基づいて透明度が変わる液晶を使用しています。サブピクセルが固まるということは、結晶が特定の偏光状態で「凍結」していることを意味します。急速な電圧変化（高速な三原色の切り替えによって実現）によって結晶を「運動」させ、状態を変化させようとします。',
    },
    {
      type: 'title',
      text: '使用上の推奨事項',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '<ul><li>影響のある箇所に対して、少なくとも<strong>10分から20分間</strong>ツールを実行することをお勧めします。</li><li>効果がない場合は、より長い時間（最大1時間）試すか、マイクロファイバークロス越しに画素を非常に軽く圧迫してみてください（自己責任で行ってください）。</li><li>場合によっては、ストロボを起動する前にドライヤーなどでモニターを軽く温める（低温設定）と効果が向上することがあります。</li></ul>',
    },
    {
      type: 'title',
      text: 'てんかんに関する警告',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '修復モードでは、高速で点滅する光を使用します。光刺激感受性てんかんのある方や、光に敏感な方は、<strong>この機能を使用しないでください</strong>。点滅パターンへの曝露は、感受性のある個人において発作を引き起こす可能性があります。',
    },
    {
      type: 'title',
      text: '保証や交換を検討するタイミング',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '欠陥のある画素（特に複数のデッドピクセル）を確認した場合は、当ツールのテスト結果を保証請求の証拠として使用できます。多くのメーカーは、ISO 9241-307（Class 1）規格に基づき、2〜3個以上の輝点や1個のデッドピクセルを交換対象の製造欠陥とみなしています。',
    },
    {
      type: 'title',
      text: 'ドット抜け規格の歴史',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '何十年もの間、液晶モニターは製造の複雑さゆえに画素の欠陥に悩まされてきました。フルHDパネル（1920×1080）には6,220,800個の画素（18,662,400個のサブピクセル）が含まれています。統計的に欠陥をゼロにすることは不可能です。そのため、モニターのクラスに基づいて「許容可能なドット抜け」を定義するISO 9241-307のような規格が存在します。',
    },
  ],
  ui: {
    badge: '画面ユーティリティ',
    title: 'ドット抜け・輝点チェック',
    description:
      '純粋な単色表示でモニターの状態を確認し、高周波刺激ツールで固まった画素の修復を試みます。',
    btnStartTest: 'テスト開始',
    btnStartFix: '画素を修復する',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: '全画面表示',
    kbdSpace: 'Space',
    kbdSpaceLabel: '色を切り替え',
    kbdEsc: 'ESC',
    kbdEscLabel: '終了',
    colorBlack: '黒',
    colorWhite: '白',
    colorRed: '赤',
    colorGreen: '緑',
    colorBlue: '青',
    btnToggleFixer: '修復ツール（ストロボ）を開く',
    btnExit: '終了 (ESC)',
  },
};
