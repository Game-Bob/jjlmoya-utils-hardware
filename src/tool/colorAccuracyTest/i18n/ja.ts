import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpectrumCanvasUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'color-accuracy-test';
const title = '色再現性テスト - Spectrum Canvas';
const description =
  'ディスプレイを精密にキャリブレーション。sRGBおよびDCI-P3色域のテスト、色ずれの検出、Delta E指標による精度測定、そしてプロ仕様のキャリブレーションレポート作成が可能です。';

const faqData = [
  {
    question: '色再現性（カラーアクチュラシー）とは何ですか？なぜ重要なのですか？',
    answer:
      '色再現性とは、ディスプレイが標準的なリファレンスと比較して、いかに忠実に色を再現しているかを測定するものです。デザイナー、写真家、コンテンツクリエイターにとって、正確な色は、自身の作品が異なるデバイス間で一貫して見えるようにするために不可欠です。',
  },
  {
    question: 'sRGBとDCI-P3の違いは何ですか？',
    answer:
      'sRGBはウェブや一般消費者向けディスプレイの標準的な色空間です。DCI-P3は、デジタルシネマやプロ向けディスプレイで使用されるより広い色域です。DCI-P3はsRGBよりも約25%多くの色をカバーしています。',
  },
  {
    question: 'Delta Eとは何ですか？どのように測定されますか？',
    answer:
      'Delta E（ΔE）は、人間の目によって知覚される色の違いを数値化したものです。Delta Eが1未満は知覚不能、2未満は非常に良好、4未満は許容範囲内、4を超えると色の違いが目立つようになります。本テストではCIE 1976 Delta E計算を使用しています。',
  },
  {
    question: 'このツールをハードウェアのキャリブレーションに使用できますか？',
    answer:
      'このツールは視覚的なキャリブレーションリファレンスと精度測定を提供します。プロフェッショナルなキャリブレーションには、これらの結果をハードウェアキャリブレーションツール（カラーメーター）やColorThink、Datacolor SpyderCheckrなどの専用ソフトウェアと組み合わせて使用することをお勧めします。',
  },
  {
    question: 'どの色空間がテストされますか？',
    answer:
      'sRGB（標準）、DCI-P3（シネマ）、および標準光源D65（6500K）とD93（9300K）におけるホワイトポイント精度をテストします。テストにはガンマ補正の検証も含まれます。',
  },
];

const howToData = [
  {
    name: 'ガマット（色域）を選択する',
    text: 'sRGB（標準ウェブ/消費者向け）またはDCI-P3（プロフェッショナルシネマ）から選択します。ディスプレイのテスト用パレットがそれに応じて切り替わります。',
  },
  {
    name: 'ハードウェア名の入力（任意）',
    text: 'モニターやデバイスの識別名（例：「MacBook Pro 16 M1」など）を入力します。これにより、レポートがパーソナライズされます。',
  },
  {
    name: '全画面モードへの切り替え',
    text: 'F11キーまたは全画面ボタンを押してブラウザのUIを非表示にし、正確なテストのために表示領域を最大化します。',
  },
  {
    name: 'カラーテストの実施',
    text: 'スペクトル純度（単色）、グラデーションダイナミクス（滑らかな階調）、ブラッククラッシュ検出（シャドウ詳細）、およびホワイトポイントキャリブレーションを進めます。',
  },
  {
    name: '結果の確認とエクスポート',
    text: '3Dガマット可視化、Delta E指標、キャリブレーション推奨事項を含むビジュアルレポートを生成します。アーカイブ用にPDFとして書き出すことができます。',
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
  inLanguage: 'ja',
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
      text: 'プロフェッショナル色再現性テスト：ディスプレイを精密にキャリブレーション',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvasは、色にシビアな作業に従事するすべての人のために設計された、プログレードの色再現性テストツールです。フォトグラファー、デザイナー、コンテンツクリエイター、あるいはハードウェア愛好家であっても、このツールは<strong>色ずれの診断</strong>、<strong>ディスプレイ精度の測定</strong>、および<strong>キャリブレーションレポートの作成</strong>に役立ちます。',
    },
    {
      type: 'title',
      text: 'なぜ色再現性が重要なのか',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '色再現におけるわずか1%の差が、「感動」と「違和感」の分かれ目になることがあります。プロフェッショナルなディスプレイは、<strong>Delta E &lt; 2</strong>以内の精度を提供します。一般消費者向けのディスプレイはDelta E 4-6以上にまでずれ込むことが多く、以下のような問題を引き起こします。',
    },
    {
      type: 'paragraph',
      html: '<ul><li>モニター上では鮮やかに見える写真が、印刷するとくすんで見える</li><li>動画編集の結果がクライアントの期待と一致しない</li><li>ウェブデザインのモックアップがブランドの規定色と異なる</li><li>ハードウェアプロジェクトで色のインジケーターを見誤る</li></ul>',
    },
    {
      type: 'title',
      text: '色空間を理解する：sRGB vs DCI-P3',
      level: 3,
    },
    {
      type: 'title',
      text: 'sRGB（標準色空間）',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '1996年にMicrosoftとHPによって策定されたsRGBは、<strong>家電製品およびウェブの世界的標準</strong>です。3つの原色（赤：0.6400x 0.3300、緑：0.3000 0.6000、青：0.1500 0.0600）によって定義される三角形のカラーガマットを使用します。',
    },
    {
      type: 'paragraph',
      html: '<strong>特徴：</strong><ul><li>可視光スペクトルの約35%をカバー</li><li>一般的な室内照明環境に最適化</li><li>ガンマ：2.2（ほとんどの消費者向けディスプレイに一致）</li><li>用途：ウェブ、SNS、一般写真</li></ul>',
    },
    {
      type: 'title',
      text: 'DCI-P3（デジタルシネマガマット）',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Digital Cinema Initiativesコンソーシアムによって開発されたDCI-P3は、映画上映およびプロフェッショナルディスプレイ向けに設計された<strong>シネマグレードの色空間</strong>です。sRGBよりも約25%多くの色を包含しています。',
    },
    {
      type: 'paragraph',
      html: '<strong>特徴：</strong><ul><li>可視光スペクトルの約53%をカバー</li><li>暗いシアター環境に最適化</li><li>ガンマ：2.6（高コントラスト向けにガンマ補正済み）</li><li>用途：映画製作、プロ写真、HDRコンテンツ</li></ul>',
    },
    {
      type: 'title',
      text: 'Delta Eとは？色差の定量化',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Delta E（ΔE）は、CIE LAB色空間における<strong>人間が知覚できる色差の指標</strong>です。ディスプレイの出力が標準のリファレンスカラーにどれだけ近いかを示します。',
    },
    {
      type: 'paragraph',
      html: '<strong>Delta Eスケール（CIE 1976）：</strong><ul><li>0–1：人間の目では知覚不能</li><li>1–2：かろうじて知覚可能</li><li>2–4：知覚可能だが一般的な用途には許容範囲内</li><li>4–6：目立つ色ずれ</li><li>&gt;6：非常に明らかな違い</li></ul>',
    },
    {
      type: 'paragraph',
      html: 'プロフェッショナルなディスプレイは、可視域全体で<strong>Delta E &lt; 2</strong>を維持するようにキャリブレーションされています。消費者向けディスプレイは、通常Delta E 3-5程度です。',
    },
    {
      type: 'title',
      text: 'Spectrum Canvas テストスイート',
      level: 3,
    },
    {
      type: 'title',
      text: 'スペクトル純度テスト',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '純粋な原色および二次色（赤、緑、青、シアン、マゼンタ、黄色）を表示し、モニターがそれらをいかに再現するかを測定します。色の「フラッド」アニメーションにより、画面全体での一貫した色再現性を確認できます。',
    },
    {
      type: 'title',
      text: 'グラデーションダイナミクス',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '色空間全体を遷移する滑らかなグラデーションを表示します。<strong>バンディング（階調飛び）</strong>（滑らかな遷移ではなく、階段状に見える現象）がないか確認してください。これは色深度の不足やガンマ補正の不備を示します。',
    },
    {
      type: 'title',
      text: 'ブラッククラッシュ検出（ブラックホールテスト）',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '完全な黒（0,0,0）の背景に、かろうじて見える黒に近い階調を表示します。シャドウの詳細が「潰れて（クラッシュ）」見える場合、モニターは暗いトーンの情報を失っています。これはモバイルディスプレイや安価なパネルでよく見られます。',
    },
    {
      type: 'title',
      text: 'ホワイトポイントキャリブレーション',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '異なる相関色温度（D65：6500K＝昼光、D93：9300K＝スタジオ）をテストし、色温度のドリフトや熱的な不安定性を明らかにします。',
    },
    {
      type: 'title',
      text: '結果の解釈',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvasは、以下を含む美しく印刷に適したレポートを生成します。',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>3Dガマット可視化：</strong> ディスプレイの実際の色域ボリュームをリファレンス標準と比較して示す、回転可能な3Dプロット。</li><li><strong>Delta E ヒートマップ：</strong> スペクトルのどの部分でディスプレイの色がずれているかを示します。</li><li><strong>ガンマ曲線：</strong> 0〜255の範囲における輝度の直線性を確認できます。</li><li><strong>キャリブレーションスコア：</strong> 総合的な精度に基づいた単一の「Spectrum Grade」（Elite, Cinematic, Studio, Standard）を付与します。</li></ul>',
    },
    {
      type: 'title',
      text: '高度な機能：手動調整のヒント',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '結果にずれが見られる場合は、モニターのOSD（オン・スクリーン・ディスプレイ）メニューで以下の調整を試してください。',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>色温度：</strong> 色が青すぎる（冷たすぎる）場合は「Warm」へ、黄色すぎる（温かすぎる）場合は「Cool」へシフトさせます。</li><li><strong>コントラスト：</strong> 黒が浮いて見える場合は上げ、詳細が潰れている場合は下げます。</li><li><strong>輝度：</strong> 輝度50%で、色かぶりのないニュートラルなグレーになるように調整します。</li><li><strong>彩度：</strong> 色が鮮やかすぎる場合は下げ、くすんでいる場合は上げます。</li></ul>',
    },
    {
      type: 'title',
      text: '制限事項とベストプラクティス',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>本ツールは視覚的および統計的なリファレンスを提供します。</strong> 公認のキャリブレーションを必要とするプロフェッショナルな作業には、ハードウェアカラーメーター（分光光度計または色彩輝度計）と専用のキャリブレーションソフトウェアを使用してください。',
    },
    {
      type: 'paragraph',
      html: '<strong>ベストプラクティス：</strong><ul><li>テストの30分前にモニターの電源を入れ、ウォーミングアップを行ってください（熱的なドリフトが安定します）。</li><li>一定の周囲照明環境でテストしてください。</li><li>映り込みを避け、可能であればモニターフードを使用してください。</li><li>経年変化を追跡するために、毎週テストを繰り返してください。</li><li>将来の比較のために、レポートのデジタルアーカイブを保管してください。</li></ul>',
    },
  ],
  ui: {
    badge: 'ディスプレイ調整',
    title: 'Spectrum Canvas -色再現性テスト',
    description:
      'プロフェッショナルなディスプレイ調整とシネマ級の美学が融合。sRGBとDCI-P3をテストし、Delta E精度を測定。色ずれを検出し、データを洞察へと変えるビジュアルレポートを生成します。',
    btnStartCalibration: 'キャリブレーション開始',
    btnFullscreen: '全画面',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: '全画面モード',
    kbdReset: 'R',
    kbdResetLabel: 'テストをリセット',
    kbdEsc: 'ESC',
    kbdEscLabel: '終了',
    gamutSRGB: 'sRGB',
    gamutDCIP3: 'DCI-P3',
    gamutToggle: '色空間',
    hardwareName: 'ハードウェア/モニター名',
    hardwareNamePlaceholder: '例：MacBook Pro 16" M1 Max',
    purityTest: 'スペクトル純度',
    gradientTest: 'グラデーションダイナミクス',
    blackHoleTest: 'ブラッククラッシュ検出',
    whitePointTest: 'ホワイトポイントキャリブレーション',
    colorCheckpoint: 'カラーチェックポイント',
    generateReport: 'レポート生成',
    viewResults: '結果を表示',
    btnExit: '終了 (ESC)',
    compareSideBySide: 'サイドバイサイドで比較',
  },
};
