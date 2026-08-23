import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-input-lag';
const title = 'インプットラグ＆システムレイテンシテスト';
const description = '高精度パフォーマンスタイマーとフレーム同期を活用した、ハードウェアの入力遅延およびシステムレイテンシのオンライン測定ツールです。';

const faqData = [
  {
    question: 'インプットラグ（入力遅延）とシステムレイテンシとは何ですか？',
    answer: 'インプットラグとは、マウスのクリックやキーボードのキー押下といった物理的な操作を行ってから、その結果が画面上に視覚的に反映されるまでの合計時間遅延を指します。',
  },
  {
    question: 'このオンラインテストはどのように入力遅延を測定しますか？',
    answer: 'performance.now() を使用してハードウェアのイベントタイムスタンプをキャプチャし、それを requestAnimationFrame の描画サイクルと関連付けることで測定します。',
  },
  {
    question: 'ゲームにおいて望ましい入力遅延の目安はどれくらいですか？',
    answer: '10ms未満は競技シーン（eスポーツ）において極めて高速とされます。10ms〜20msは高速、20ms〜35msは標準的、35msを超えると体感できる遅延となります。',
  },
  {
    question: 'PCのインプットラグを減らすにはどうすればよいですか？',
    answer: 'モニターのリフレッシュレートを上げ、VSyncを無効にし、G-SyncまたはFreeSyncを有効にします。また、USBポーリングレートを1000Hz以上に設定し、NVIDIA Reflexなどの低遅延機能を有効にします。',
  },
  {
    question: '画面のリフレッシュレートは入力遅延に影響しますか？',
    answer: 'はい。リフレッシュレートが高いほどフレーム間隔が短くなります。60Hzの画面はフレーム時間が16.67msですが、240Hzの画面は4.17msとなり、表示遅延が軽減されます。',
  },
];

const howToData = [
  {
    name: 'テストモードの選択',
    text: '即座レスポンス、キー押下レイテンシ、または視覚反応レイテンシモードを選択します。',
  },
  {
    name: '物理入力の実行',
    text: 'ターゲットボックス内をクリックするかキーを押して入力イベントを発生させます。',
  },
  {
    name: 'リアルタイムメトリクスの確認',
    text: '計算された平均、最小、最大レイテンシおよびジッター（標準偏差）を確認します。',
  },
  {
    name: 'ディスプレイフレームタイミングの確認',
    text: '現在のFPSとフレーム時間を監視し、画面更新の安定性を確認します。',
  },
  {
    name: '測定履歴の分析',
    text: 'サンプル履歴ログを検査して、レイテンシのスパイクやバラつきを特定します。',
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

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'システムレイテンシ',
  modeInstant: '即座レスポンス',
  modeKey: 'キー押下レイテンシ',
  modeVisual: '視覚反応レイテンシ',
  targetClickPrompt: 'この枠内をクリックまたはタップして入力遅延を測定',
  targetKeyPrompt: '任意のキー（またはスペースキー）を押してキーボードの遅延を測定',
  targetWaitPrompt: '背景が緑色になるのを待ちます...',
  targetNowPrompt: '今すぐクリック！',
  labelAvgLatency: '平均レイテンシ',
  labelMinLatency: '最小レイテンシ',
  labelMaxLatency: '最大レイテンシ',
  labelJitter: 'レイテンシジッター（標準偏差）',
  labelFps: '現在のFPS',
  labelFrameTime: 'フレーム時間',
  labelSamples: 'サンプル数',
  labelGrade: 'レイテンシ評価',
  gradeUltraFast: '超高速 (<10ms)',
  gradeFast: '高速 (10-20ms)',
  gradeModerate: '標準 (20-35ms)',
  gradeHigh: '低速 (>35ms)',
  btnReset: '測定結果をリセット',
  btnCopyReport: 'ベンチマークレポートをコピー',
  reportCopied: 'レポートをコピーしました！',
  historyTitle: '最近のレイテンシ測定結果',
  pipelineTitle: 'ハードウェア信号パイプライン遅延分析',
  distributionTitle: 'レイテンシ周波数分布',
  sampleCol: 'サンプル',
  typeCol: '入力タイプ',
  latencyCol: '測定レイテンシ',
};

export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: 'PCゲームにおけるインプットラグとシステムレイテンシとは？',
    },
    {
      type: 'paragraph',
      html: 'インプットラグ（入力遅延）は、ユーザーがマウスをクリックしたりキーボードを押したりする物理的操作を行ってから、画面上にその結果が描画されるまでの正確な時間遅延を表します。競争要素の強いeスポーツや素早い操作が求められるゲームにおいて、システムレイテンシを最小限に抑えることは、照準の正確さや操作の追従性を向上させるために極めて重要です。システムレイテンシは、USBポーリング、OSのイベント処理、ゲームエンジンの描画処理、GPUフレームバッファ、モニターの応答速度など、複数のパイプライン遅延が積み重なって発生します。',
    },
    {
      type: 'stats',
      items: [
        {
          value: '< 10 ms',
          label: 'eスポーツ推奨目標値',
          trend: '最適な競争力基準',
        },
        {
          value: '1000 Hz',
          label: '標準USBポーリングレート',
          trend: '1.0 ms入力ミリ秒間隔',
        },
        {
          value: '240 Hz',
          label: '高リフレッシュレート',
          trend: '4.16 msフレーム時間',
        },
        {
          value: '16.6 ms',
          label: '60Hzフレーム間隔',
          trend: '画面更新の基本遅延',
        },
      ],
      columns: 4,
    },
    {
      type: 'card',
      title: 'ブラウザ上でのレイテンシ測定の仕組み',
      html: '本ツールは、<code>performance.now()</code> から取得した高精度のハードウェアタイムスタンプと、DOMイベント（<code>pointerdown</code> および <code>keydown</code>）を組み合わせて測定を行います。<code>requestAnimationFrame</code> を通じてイベント登録と画面描画サイクルを同期させることで、物理入力からブラウザ内での描画更新までのローカルタイミング差を計算します。',
    },
    {
      type: 'title',
      text: 'スイッチから画面表示までの信号パイプライン',
    },
    {
      type: 'paragraph',
      html: '入力遅延を効果的に改善するためには、周辺機器のスイッチ動作からディスプレイの表示に至る一連の信号チェーンを理解する必要があります。システム全体のレイテンシは、周辺機器、OS処理、描画パイプライン、ディスプレイパネルの遅延の合計です。',
    },
    {
      type: 'table',
      headers: ['パイプライン構成', '一般的な遅延', '主なボトルネック', '最適化手順'],
      rows: [
        ['周辺機器スイッチ', '0.2 ms - 5.0 ms', 'デバウンス処理、接点バウンス', 'オプティカルスイッチの採用'],
        ['USBポーリングレート', '0.125 ms - 8.0 ms', '125Hz vs 1000Hz / 8000Hz', 'ポーリングレートを1000Hz以上に設定'],
        ['OSイベントキュー', '0.5 ms - 3.0 ms', 'バックグラウンド処理', 'ゲームモードの有効化'],
        ['描画エンジン', '4.0 ms - 20.0 ms', 'CPU負荷、スレッド同期', 'NVIDIA Reflex / Anti-Lagの利用'],
        ['GPUフレームバッファ', '8.0 ms - 33.0 ms', 'VSync有効化、複数バッファ', 'VSyncオフ、VRR（G-Sync等）の活用'],
        ['ディスプレイ処理', '1.0 ms - 15.0 ms', 'テレビのスケーラー処理', 'モニターのゲームモード設定'],
      ],
    },
    {
      type: 'tip',
      title: 'GPU負荷が高い場合のフレームキュー遅延の軽減方法',
      html: 'GPU使用率が99%に達すると、グラフィックドライバーは滑らかさを優先して複数のフレームを事前にキューに保持します。これにより30ms〜50msの大きな入力遅延が発生します。これを防ぐには、フレームレートをGPUの最大能力より少し低く制限するか、NVIDIA Reflexを有効にします。',
    },
    {
      type: 'title',
      text: 'ゲーミングマウス、キーボード、タッチパネルの遅延比較',
    },
    {
      type: 'paragraph',
      html: '入力デバイスの種類によって、使用しているハードウェア構造や通信プロトコルに応じた異なる遅延特性が存在します。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'ゲーミングマウス',
          description: '高速ワイヤレス(2.4GHz)または有線接続。',
          highlight: '0.5ms - 2ms 遅延',
          points: [
            '1000Hzから8000Hzのポーリングレート',
            'デバウンス遅延のない光学式スイッチ',
            '超低モーション遅延センサー',
          ],
        },
        {
          title: 'メカニカルキーボード',
          description: 'キーマトリクススキャンとデバウンス制御。',
          highlight: '1ms - 10ms 遅延',
          points: [
            'Rapid Trigger対応の磁気ホロースイッチ',
            '最大8000Hzのマトリクススキャンレート',
            'アクチュエーションポイントの変更可能',
          ],
        },
        {
          title: 'モバイルタッチパネル',
          description: '静電容量方式デジタイザのサンプリング。',
          highlight: '15ms - 45ms 遅延',
          points: [
            'タッチサンプリングレート(120Hz - 480Hz)',
            'OSコンポジターによる描画遅延',
            '静電容量フィルタリング処理',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'リフレッシュレートがディスプレイ遅延に与える影響',
    },
    {
      type: 'paragraph',
      html: '画面のリフレッシュレートは、理論上発生する最小の表示遅延を直接左右します。',
    },
    {
      type: 'list',
      items: [
        '60 Hz ディスプレイ: 1フレーム = 16.67 ms (平均表示遅延: ~8.33 ms)',
        '120 Hz ディスプレイ: 1フレーム = 8.33 ms (平均表示遅延: ~4.16 ms)',
        '144 Hz ディスプレイ: 1フレーム = 6.94 ms (平均表示遅延: ~3.47 ms)',
        '240 Hz ディスプレイ: 1フレーム = 4.17 ms (平均表示遅延: ~2.08 ms)',
        '360 Hz ディスプレイ: 1フレーム = 2.78 ms (平均表示遅延: ~1.39 ms)',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'インプットラグ (Input Lag)',
          definition: 'ユーザーの物理的な操作から画面に反映されるまでの経過時間。',
        },
        {
          term: 'ジッター (Jitter)',
          definition: '測定値の標準偏差であり、システムの応答性の安定度を示します。',
        },
        {
          term: 'VSync (垂直同期)',
          definition: '画面の引き裂き（ティアリング）を防ぎますが、入力遅延が増加します。',
        },
        {
          term: '可変リフレッシュレート (VRR)',
          definition: 'G-SyncやFreeSyncのように、GPUの出力に合わせてリフレッシュレートを変動させる技術。',
        },
      ],
    },
    {
      type: 'title',
      text: 'オンラインブラウザ測定のメリットと注意点',
    },
    {
      type: 'paragraph',
      html: '専用の測定機材を必要とせず、ブラウザ上で手軽に入力遅延をベンチマークできます。',
    },
    {
      type: 'proscons',
      title: 'ブラウザ測定の評価',
      items: [
        {
          pro: '特別なソフトウェアのインストールや機材が不要',
          con: 'ブラウザのイベントループやOSのウィンドウマネージャーの影響を受ける',
        },
        {
          pro: 'performance.now によるマイクロ秒単位の高精度タイマー',
          con: '液晶やOLEDの応答速度（GtG）を直接光度測定することは不可',
        },
        {
          pro: '異なるデバイスやブラウザ間の比較テストが即座に可能',
          con: 'セキュリティ対策によるタイマー精度の丸め処理が存在する場合がある',
        },
      ],
    },
    {
      type: 'title',
      text: '遅延が大きい場合のトラブルシューティング',
    },
    {
      type: 'paragraph',
      html: '測定結果の遅延が大きい（>30ms）場合、以下の項目を確認してください。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '高レイテンシに関する診断',
      html: '平均遅延が35msを超える場合は、グラフィック設定でVSyncが有効になっていないか確認してください。また、ブラウザのハードウェアアクセラレーションが無効になっていると描画負荷がCPUにかかり遅延が増大します。',
    },
    {
      type: 'title',
      text: 'システム遅延を極限まで減らすための手順',
    },
    {
      type: 'paragraph',
      html: '以下の手順を実行してシステムレイテンシを最適化してください。',
    },
    {
      type: 'summary',
      title: 'システムレイテンシ最適化チェックリスト',
      items: [
        'マウスの設定ソフトウェアでUSBポーリングレートを1000Hz以上に設定する。',
        'Windowsの設定で「ハードウェアアクセラレータによるGPUスケジューリング」を有効にする。',
        'モニターやTVの設定で「ゲームモード」を有効にし、画像処理遅延を回送する。',
        'グラフィック設定でVSyncをオフにし、G-Sync / FreeSyncを利用する。',
        '対応ゲームでNVIDIA ReflexまたはAMD Anti-Lagを有効化する。',
        'ブラウザの「ハードウェアアクセラレーション」が有効になっていることを確認する。',
      ],
    },
    {
      type: 'message',
      title: '信頼性の高い測定を行うためのアドバイス',
      html: '正確な測定のため、バックグラウンドアプリを終了し、ブラウザをフルスクリーンにして15〜20回程度のサンプルを収集してください。',
    },
  ],
};
