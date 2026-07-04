import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeyboardChatterTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'keyboard-chatter-test';
const title = 'キーボードチャタリングテスト';
const description = '同じキーが2回表示される速さをチェックすることで、メカニカルキーボードのチャタリング、ダブルタイピング、不良スイッチのバウンスを検出します。';

const faqData = [
  {
    question: 'キーボードチャタリングとは何ですか？',
    answer: 'キーボードチャタリングは、1回の物理的な押下が複数回の押下として登録されるハードウェア障害です。汚れた、摩耗した、酸化した、またはデバウンスが不十分なメカニカルスイッチでよく発生します。',
  },
  {
    question: 'このキーボードチャタリングテストはどのように機能しますか？',
    answer: '疑わしいキーをゆっくりと1回ずつ押します。ログに数ミリ秒しか間隔のない繰り返し押下が表示された場合、スイッチがバウンスしてダブルレターを生成している可能性があります。',
  },
  {
    question: 'どのデルタ値がキーボードのダブルタイピングを示しますか？',
    answer: '30ms未満の繰り返し押下はチャタリングの疑いが強いです。30〜50msの繰り返しは注意が必要です。通常の意図的な繰り返しは、ほとんどのユーザーで50ms以上です。',
  },
  {
    question: '最初の押下でデルタが表示されないのはなぜですか？',
    answer: 'デルタには同じキーの前回の押下が必要です。最初の押下がベースラインを確立し、その後の押下がミリ秒単位の時間間隔を表示します。',
  },
  {
    question: 'ソフトウェアでキーボードチャタリングを修正できますか？',
    answer: 'デバウンスソフトウェアは一部の症状を隠せますが、スイッチを修理するわけではありません。清掃、ホットスワップスイッチの再装着、スイッチの交換、またはキーボードPCBの修理が必要になる場合があります。',
  },
];

const howToData = [
  {
    name: 'ツールを開いて通常通りキーを押す',
    text: '開始ボタンはありません。必要に応じてツール内をクリックし、ダブルタイピングしていたキーを押します。',
  },
  {
    name: '疑わしいキーを1回ずつタップする',
    text: 'ダブルタイピングするキーを押します。1回の物理的な押下で小さなデルタを持つ複数のログ行が作成される場合、スイッチがチャタリングしている可能性があります。',
  },
  {
    name: 'カラーコードを読む',
    text: '緑は50ms以上の正常、黄は30〜50msの疑わしい、赤は30ms未満のチャタリング検出を意味します。',
  },
  {
    name: '必要に応じてログをエクスポートする',
    text: 'ダウンロードボタンを使用してCSVログを保存し、キーの比較や断続的な障害の記録に役立てます。',
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
      text: 'メカニカルキーボード ダブルタイピングテスト',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このキーボードチャタリングテストは、1回の押下で2文字入力されたり、きれいなリリースを逃したり、意図せずに文字が繰り返されたりするメカニカルキーボードの診断に役立ちます。スイッチの清掃、ファームウェアのデバウンス設定の変更、保証請求の開始、またはホットスワップスイッチの交換前にお使いください。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '結果の読み方',
      badge: 'デルタしきい値',
      html: '<p><strong>正常</strong>は50ms以上の繰り返しで、通常は意図的なものです。<strong>疑わしい</strong>は30〜50msで、同じキーで再テストする必要があります。<strong>チャタリング検出</strong>は30ms未満で、1回の物理的な押下が複数の電気接点にバウンスした可能性が非常に高いです。</p>',
    },
    {
      type: 'title',
      text: 'メカニカルスイッチがチャタリングする理由',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'メカニカルスイッチは完全にきれいなデジタル信号として閉じるわけではありません。金属接点は安定する前に数ミリ秒バウンスすることがあります。キーボードファームウェアは通常、デバウンスウィンドウでそのバウンスをフィルタリングします。チャタリングは、接点が汚れ、摩耗、酸化、緩み、ひび割れ、または調整不良で、デバウンスフィルタが処理すべきだった余分な押下をキーボードが報告するときに発生します。',
    },
    {
      type: 'table',
      headers: ['症状', '考えられる原因', '最初に試すこと'],
      rows: [
        ['1つのキーが同じ文字を2回入力する', 'スイッチ接点の汚れまたは摩耗', 'キーキャップを取り外し、ほこりを吹き飛ばしてから、スイッチを交換する前に再テストします。'],
        ['ビルド後に複数のホットスワップキーがチャタリングする', 'スイッチピンがしっかりと装着されていない', 'スイッチを引き抜いて再装着し、曲がったピンや緩いソケットがないか確認します。'],
        ['こぼれや湿気の後でのみ発生する', '接点の酸化または残留物', 'キーボードを取り外し、メーカーのガイダンスに従って清掃します。'],
        ['多くのキーが小さなデルタを示す', 'ファームウェアのデバウンスが低すぎるかスキャンの問題', '別のUSBポートで比較し、利用可能であればファームウェアのデバウンス設定を確認します。'],
      ],
    },
    {
      type: 'title',
      text: '誤検出を減らすテスト方法',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '全文を入力する代わりに、疑わしいキーを1つずつテストします。',
        'キーを1回押し、完全に離してから、次の押下まで少し待ちます。',
        '疑わしいキーを、正常に感じる近くのキーと比較します。',
        '比較する前回の押下がないため、キーの最初の行は無視します。',
        '同じキーが1回のタップから30ms未満の赤い行を繰り返し表示する場合は、ハードウェア障害として扱います。',
        '黄色い行のみが表示される場合は、テストをより遅く繰り返し、タッピングリズムが短い間隔を引き起こしているかどうかを確認します。',
      ],
    },
    {
      type: 'title',
      text: 'チャタリング vs 意図的な高速タイピング',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'チャタリング',
          description: '1つのキーに集中し、しばしば30ms未満で、1回の押下を意図したときに現れます。',
          points: ['スイッチまたはソケットを検査します。', '近くの正常なキーと比較します。'],
        },
        {
          title: '高速タイピング',
          description: '多くのキーに影響し、リズムに従い、同じキーの繰り返し押下間で50ms以上になる傾向があります。',
          points: ['通常の使用です。', 'より遅いシングルタップで再テストします。'],
        },
        {
          title: 'OSキーリピート',
          description: 'キーを押し続けると現れ、通常はオペレーティングシステムによって設定された規則的なリズムで繰り返されます。',
          points: ['タップの間に完全に離します。', 'キーボードリピート設定を別途確認します。'],
        },
      ],
    },
    {
      type: 'title',
      text: 'キーが不合格になった場合の対処法',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '何かを変更する前にCSVログを保存して、前後の結果を比較できるようにします。',
        'キーキャップを取り外し、汚れ、液体の残留物、またはスムーズに戻らないステムがないか検査します。',
        'ホットスワップキーボードの場合、スイッチを再装着または交換し、同じ位置を再度テストします。',
        'はんだ付けキーボードの場合、PCBの修理が必要だと判断する前に、ファームウェアのデバウンスオプションを比較します。',
        '無関係な複数のキーが不可能なデルタを示す場合は、別のケーブルとUSBポートを試します。',
        '保証サポートには、影響を受けるキー、繰り返されるデルタ値、キーボードモデル、ファームウェアバージョン、障害がスイッチに追従するかPCBソケットに追従するかを含めます。',
      ],
    },
    {
      type: 'summary',
      title: 'クイックルール',
      items: [
        '1つの赤い行は手がかりであり、評決ではありません。',
        '同じ物理キーで30ms未満の赤い行が繰り返されることは、キーボードチャタリングの強力な証拠です。',
        'ハードウェアを交換する前に、意図的なシングルタップを使用し、疑わしいスイッチを近くの正常なキーと比較します。',
      ],
    },
  ],
  ui: {
    statusIdle: '任意のキーを押してください',
    statusListening: 'キーデルタを測定中',
    statusChatter: 'チャタリング検出',
    totalPresses: '総押下数',
    chatterEvents: 'チャタリングイベント',
    worstDelta: '最悪のデルタ',
    watchWindow: '保持行数',
    keyColumn: 'キー',
    deltaColumn: 'デルタ',
    verdictColumn: '判定',
    timeColumn: '時間',
    normal: '正常',
    suspect: '疑わしい',
    chatter: 'チャタリング',
    waiting: '待機中',
    clear: 'ログを消去',
    exportLog: 'CSVエクスポート',
    hint: 'ログは最新の80行を保持するため、長時間のセッションでも高速です。キーを押し続けた場合のリピートは無視され、赤い行は近すぎる別々の押下から発生します。',
    captureNotice: '開始ボタンはありません。疑わしいキーを1回タップし、前回の押下からのデルタを観察します。',
    keyboardAriaLabel: '最近のキーアクティビティ',
    logAriaLabel: 'キーボードチャタリングイベントログ',
    escapeKey: 'Esc',
    backspaceKey: 'Back',
    tabKey: 'Tab',
    enterKey: 'Enter',
    capsLockKey: 'Caps',
    shiftKey: 'Shift',
    controlKey: 'Ctrl',
    metaKey: 'Meta',
    altKey: 'Alt',
    spaceKey: 'Space',
    csvHeader: 'キー,コード,デルタ_ms,深刻度,時刻',
  },
};
