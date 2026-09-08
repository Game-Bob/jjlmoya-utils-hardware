import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { LaptopBatteryRuntimeUI } from '../ui';

const slug = 'laptop-battery-runtime-calculator';
const title = 'ノートパソコンのバッテリー駆動時間計算機';
const description = '現在の充電量で、軽作業・通常作業・高負荷作業をどのくらい続けられるかを見積もります。';
const faq = [
  { question: 'この計算機は何を見積もりますか？', answer: 'バッテリーに残っているエネルギーを、各作業で入力した消費電力で割ります。計画用の目安であり、リアルタイム測定やメーカー保証ではありません。' },
  { question: '容量とバッテリーの状態はどこで確認できますか？', answer: 'バッテリーレポートやメーカー資料で、設計容量と現在の満充電容量を確認してください。状態は現在の満充電容量を元の容量に対する割合で表します。' },
  { question: '作業によって駆動時間が違うのはなぜですか？', answer: '消費電力が大きいほど、同じ蓄積エネルギーを早く使います。ビデオ通話、ゲーム、外部ディスプレイ、高輝度、CPUやGPUの継続負荷は平均消費電力を増やします。' },
  { question: 'バッテリーを自動的に読み取れますか？', answer: 'いいえ。ブラウザー内で動作し、入力した値だけを使います。精度が必要なときは、最近のレポートや実測した平均電力を入力してください。' },
];
const howTo = [
  { name: '元の容量を確認する', text: '設計容量をワット時で入力します。ミリアンペア時とボルトしか分からない場合は、Wh = V × Ah で換算してください。' },
  { name: '現在のバッテリーを入力する', text: '現在の満充電容量を元の容量に対する割合で設定し、作業開始時に持っている充電量を入力します。' },
  { name: '現実的な消費電力を設定する', text: '近いプリセットを選び、実測値があれば軽作業・通常作業・高負荷作業のワット数を編集します。' },
  { name: '移動時の判断をする', text: '3本のラインを確認し、負荷の高い作業には最短の時間を使います。余裕が少なければ負荷を下げるか充電器を持参してください。' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ja' };

export const content: ToolLocaleContent<LaptopBatteryRuntimeUI> = {
  slug, title, description, faq, howTo, bibliography, schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: '駆動時間の見積もりが実際に測っているもの', level: 2 },
    { type: 'paragraph', html: 'ノートパソコンのバッテリーはワット時でエネルギーを蓄えます。パソコンはそのエネルギーをワットで示される電力で使います。この計算機は2つの値を時間に変換し、旅行や会議、授業、作業に充電が足りるか判断できるようにします。' },
    { type: 'paragraph', html: 'まず元の容量とバッテリー状態から現在の満充電容量を見積もり、開始時の充電割合を適用します。そのエネルギー予算を各作業ラインが消費します。' },
    { type: 'title', text: '信頼できる入力を選ぶ', level: 2 },
    { type: 'paragraph', html: 'バッテリーレポートやメーカー仕様を使ってください。設計容量、現在の満充電容量、残量は別の値です。ボルトとアンペア時だけ分かる場合は <strong>Wh = V × Ah</strong> で換算し、1,000 mAh は1 Ahとして扱います。' },
    { type: 'list', items: ['現在の満充電容量を設計容量で割ってバッテリー状態を求める。', '作業開始時に実際に残っている充電割合を入力する。', '長時間の予定には実測した平均消費電力を使う。', '外部ディスプレイ、ドック、負荷の高いアプリを作業条件に含める。'] },
    { type: 'title', text: '駆動時間を計画上の余裕として読む', level: 2 },
    { type: 'paragraph', html: '軽作業ラインは読書や文書作成、通常作業ラインは一般的なマルチタスク、高負荷ラインは大きな電力を続けて使う場合を示します。必要な時間と照らし合わせ、最も短い現実的な結果で計画してください。' },
    { type: 'table', headers: ['表示', '意味', '対応'], rows: [['余裕あり', 'その消費で6時間以上', '計画に大きな余裕があります。'], ['利用可能', '3時間から6時間', '決まった作業には使えますが充電器を準備します。'], ['余裕小', '1時間から3時間', '消費を下げるか充電時間を確保します。'], ['緊急', '1時間未満', '充電器が必要な作業として扱います。']] },
    { type: 'title', text: '見積もりで保証できないこと', level: 2 },
    { type: 'paragraph', html: '実際の消費電力は秒ごとに変わります。輝度、無線通信、温度、バックグラウンド処理、ファームウェア、システムの予備容量が終了時刻を変えます。センサーやバッテリー化学を読み取らず、特定の駆動時間も保証しません。' },
    { type: 'tip', title: '測定のヒント', html: '実際の作業中にバッテリー割合と経過時間を記録します。観測した平均値でプリセットのワット数を置き換え、作業ごとに再計算してください。' },
  ],
  ui: {
    batteryInputsLabel: 'バッテリーの開始条件', designCapacityLabel: '元のバッテリー容量', designCapacityHint: '新品時のバッテリーエネルギー', healthLabel: 'バッテリー状態', healthHint: '現在の満充電容量と新品時の比較', chargeLabel: '開始時の充電量', chargeHint: '作業開始時に予想される充電量', scenariosLabel: '作業別の駆動時間', scenariosHint: '作業ごとの平均消費電力を編集', powerLabel: '平均消費電力', wattsSuffix: 'W', presetsLabel: '作業セットから開始', presetBalanced: '日常作業', presetTravel: '旅行向け節電', presetCreative: '高負荷クリエイティブ', runwayLabel: 'エネルギー経路', runwayCaption: '各ラインは同じ開始充電量をその作業が使い切る時点を示します。', availableEnergyLabel: '現在利用できるエネルギー', fullCapacityLabel: '現在の満充電容量', shortestScenarioLabel: '計画の基準', runtimeLabel: '推定駆動時間', loadLabel: '消費電力', healthStateExcellent: 'バッテリー状態は非常に良好', healthStateGood: 'バッテリー状態は良好', healthStateAging: 'バッテリーが劣化中', healthStateWorn: 'バッテリーが消耗', statusComfortable: '余裕あり', statusWorkable: '作業可能', statusTight: '余裕が少ない', statusUrgent: '充電器が必要', scenarioLight: '軽作業', scenarioBalanced: '通常作業', scenarioIntense: '高負荷作業', sceneBatteryLabel: '開始時の充電量', sceneEnergyLabel: '利用可能なエネルギー', sceneTimeLabel: '駆動時間', noteLabel: 'モデルの限界', noteText: '入力値に基づく計画用の見積もりです。実際の消費電力やシステムの予備容量で短くなることがあります。',
  },
};
