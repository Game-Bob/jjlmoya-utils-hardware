import type { ToolLocaleContent } from '../../../types';
import type { PhoneChargeTimeCalculatorUI } from '../ui';
import { createPhoneChargeTimeCalculatorContent } from './createContent';

const ui: PhoneChargeTimeCalculatorUI = {
  capacityLabel: 'バッテリー容量', capacityUnit: 'mAh', capacityHint: 'スマートフォンの仕様に記載された値を入力します。',
  currentLabel: '現在の充電率', targetLabel: '目標充電率', percentUnit: '%', powerLabel: '充電器の出力', powerUnit: 'W',
  efficiencyLabel: '推定効率', efficiencyUnit: '%', efficiencyHint: '変換損失と発熱による損失を含みます。',
  statusEmpty: 'スマートフォンと充電器の情報を入力してください。', statusReady: '入力中に更新されます。', statusError: '強調表示された値を確認してください。',
  resultTitle: '目標までの推定時間', energyLabel: '必要な残りエネルギー', energyUnit: 'Wh', fromCurrentCharge: '現在の充電率から', startNowLabel: '今から始めると到達',
  scenarioTitle: '充電器の参考シナリオ', scenarioAt: '同じスマートフォンと充電範囲', assumptionsTitle: '前提条件',
  assumptionsText: '公称バッテリー電圧 {voltage} V、効率 {efficiency}%、70%を超える目標では約{taper}%の追加の充電遅延を使用します。実際の充電動作は異なる場合があります。',
  errorCapacity: '0より大きいバッテリー容量を入力してください。', errorCurrent: '現在の充電率は0〜100%の範囲で入力してください。', errorTarget: '目標充電率は1〜100%の範囲で入力してください。',
  errorTargetOrder: '目標充電率は現在の充電率より高くしてください。', errorPower: '0より大きい出力を入力してください。', errorEfficiency: '効率は50〜100%の範囲で入力してください。',
  targetMarker: '目標', chargeProgressLabel: '充電範囲', hourUnit: '時間', minuteUnit: '分',
};

const faq = [
  { question: 'バッテリーの残量だけで充電時間を計算できますか？', answer: 'できません。同じ割合でも、小さいバッテリーと大きいバッテリーではエネルギー量が異なります。容量、スマートフォンに届く電力、効率の推定値も必要です。' },
  { question: '実際の充電が推定より長くなるのはなぜですか？', answer: '充電率が高い、端末が熱い、ケーブルや充電規格に制限がある、充電中に端末を使っている、といった理由でスマートフォンは電力を下げることがあります。結果は計画用の推定であり、リアルタイム測定ではありません。' },
  { question: '入力するのは充電器の出力ですか、それとも端末が受け取る電力ですか？', answer: '分かる場合は端末に届くと考えられる電力を入力してください。充電器の定格出力しか分からない場合は上限として使い、実際の時間は長くなる可能性を考慮してください。' },
];

const howTo = [
  { name: 'バッテリー容量を入力する', text: '端末の仕様からバッテリー容量を確認し、mAhで入力します。電圧と変換損失が異なるため、モバイルバッテリーの容量は代わりに使わないでください。' },
  { name: '充電範囲を設定する', text: '現在の割合と必要な目標割合を入力します。20%から50%への短い充電は、満充電とは異なる結果になります。' },
  { name: '出力と効率を追加する', text: 'ワット単位の出力、または分かる場合は端末が実際に受け取る充電電力を入力します。自分で測定していなければ効率の初期値を使います。' },
  { name: 'シナリオを比較する', text: '5 W、15 W、30 Wの参考値と結果を比べ、手元の時間に充電器が間に合うか判断します。' },
];

const seo = [
  { type: 'title' as const, text: 'スマートフォンの充電時間を計算する', level: 2 as const },
  { type: 'paragraph' as const, html: '外出前、旅行中、長い通話の前に、バッテリーが必要な残量まで間に合うか知りたいときに、このスマートフォン充電時間計算機を使います。容量、現在の割合、目標、充電器の出力、効率を入力すると、その充電範囲に必要な分数とエネルギーを推定できます。空いている時間と、より遅い充電器や速い充電器を比較するのにも役立ちます。' },
  { type: 'title' as const, text: '入力する値', level: 2 as const },
  { type: 'list' as const, items: ['容量：モバイルバッテリーではなく、端末の仕様にあるmAhを使います。', '現在と目標：実際に必要な充電範囲を指定します。目標は現在より高くしてください。', '出力と効率：分かる場合は端末に届く電力を使います。充電器の出力だけの場合、それは上限値です。'] },
  { type: 'title' as const, text: '結果の読み方', level: 2 as const },
  { type: 'paragraph' as const, html: '主な数値は現在の割合から目標までの推定時間です。残りエネルギーは同じ充電量をワット時で表し、参考バーは5 W、15 W、30 Wで時間がどう変わるかを示します。時間が足りない場合は目標を下げるか、端末が実際に高い出力を利用できる充電器とケーブルを使ってください。' },
  { type: 'title' as const, text: '100%近くで充電が遅くなる理由', level: 2 as const },
  { type: 'paragraph' as const, html: 'スマートフォンは通常、空の状態から満充電まで同じ電力で充電するわけではありません。残量が高くなると、充電制御が発熱とバッテリーへの負荷を抑えるため電流を下げることがあります。そのため、計画には20%から80%までの推定のほうが、100%までの単純な比例計算より役立つことがあります。70%を超える目標には、少しの遅延を加味しています。' },
  { type: 'title' as const, text: '推定値：この計算機で分からないこと', level: 2 as const },
  { type: 'list' as const, items: ['端末のモデル、バッテリーの状態、充電規格、ケーブル、温度、使用状況、現在の充電電力を読み取ることはできません。', '劣化したバッテリーの診断や急速充電への対応確認はできません。正確に知りたい場合は、同じ構成を実際の状況で計測してください。'] },
];

export const content: ToolLocaleContent<PhoneChargeTimeCalculatorUI> = createPhoneChargeTimeCalculatorContent({ locale: 'ja', slug: 'phone-charge-time-calculator', title: 'スマートフォン充電時間計算機', description: 'バッテリー容量、現在の充電率、充電器の出力、効率から、目標の残量に達するまでの時間を推定します。', faq, howTo, seo, ui });
