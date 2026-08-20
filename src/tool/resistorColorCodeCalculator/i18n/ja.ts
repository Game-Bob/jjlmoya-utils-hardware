import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResistorColorCodeUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = "resistor-color-code-calculator";
const title = "抵抗カラーコード計算機";
const description = "抵抗のカラー帯から抵抗値、許容差、範囲、温度係数を読み取ります。目標値から逆算したり、SMD抵抗の表示も確認できます。";

const faqData = [{"question":"抵抗のカラー帯はどう読みますか？","answer":"少し離れている許容差帯の反対側から読み始めます。最初の2本または3本が数字、次が倍率、最後が許容差です。"},{"question":"4本帯のコードは何を表しますか？","answer":"最初の2本が有効数字、3本目が倍率、4本目が許容差を表します。"},{"question":"3本帯の抵抗の許容差は何パーセントですか？","answer":"許容差帯がない3本帯は、一般的にプラスマイナス20パーセントとして解釈します。"},{"question":"5本帯と6本帯の違いは何ですか？","answer":"5本帯は3桁の数字と許容差を持ちます。6本目は1度あたりのppmで温度係数を追加します。"},{"question":"SMD抵抗の表示を読めますか？","answer":"はい。3桁または4桁のコード、または4R7のような表記を入力できます。Rは小数点を表します。"},{"question":"この結果だけで安全な抵抗だと判断できますか？","answer":"いいえ。電力、使用電圧、温度範囲、許容差、回路の条件も確認してください。"}];

const howToData = [{"name":"帯の本数を選ぶ","text":"確認する抵抗に合わせて3本、4本、5本、6本から選びます。"},{"name":"各帯の色を選ぶ","text":"帯の位置を選んでパレットから色をタップします。図もすぐに更新されます。"},{"name":"結果を読む","text":"大きな表示で抵抗値を確認し、許容差、範囲、温度係数も確認します。"},{"name":"向きを確認する","text":"可能なら許容差帯を右側に置き、回路図やデータシートと照合します。"}];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: "ja",
};

export const content: ToolLocaleContent<ResistorColorCodeUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [{"type":"title","text":"抵抗カラーコード計算機","level":2},{"type":"paragraph","html":"3本から6本までの抵抗カラーコードをブラウザーで読み取れます。色を有効数字、倍率、許容差、抵抗範囲、温度係数に変換します。"},{"type":"title","text":"抵抗カラーコードの読み方","level":3},{"type":"paragraph","html":"許容差帯の反対側から読みます。2本または3本が数字、次の帯が倍率、許容差帯が公称値からの変動を示します。"},{"type":"table","headers":["帯の本数","有効数字","追加される情報","一般的な用途"],"rows":[["3本","2桁","20パーセントの標準許容差","一般的な識別"],["4本","2桁","許容差","一般的なリード抵抗"],["5本","3桁","許容差","精密抵抗"],["6本","3桁","許容差と温度係数","精密回路"]]},{"type":"title","text":"目標値から逆算する","level":3},{"type":"paragraph","html":"必要な抵抗値が分かっている場合は逆算モードを使います。選んだ帯の本数で表せる値に丸め、対応するカラーコードを表示します。"},{"type":"title","text":"SMD抵抗の表示","level":3},{"type":"paragraph","html":"SMD抵抗は3桁または4桁を使うことが多く、最後の桁が先頭の数字に掛ける10のべき乗です。Rは小数点を表し、4R7は4.7Ωです。"},{"type":"title","text":"取り付け前の確認","level":2},{"type":"list","items":["値を回路図や保守資料と照合する。","データシートで許容差と電力を確認する。","許容差帯の間隔で読み方向を確認する。","表示が壊れている場合は部品を外して測定する。","カラーコードだけで電気的な安全性を証明しない。"]},{"type":"tip","title":"ポイント","html":"このツールは表示を識別します。実際の抵抗値、電力、絶縁電圧、長期信頼性は測定しません。"}],
  ui: {"sceneKicker":"EIAカラースペクトル研究室","hint":"帯を選び、色をタップしてください。抵抗値がすぐに表示されます。","decodeMode":"帯を読み取る","reverseMode":"目標値から逆算","smdMode":"SMDを読む","bandCount":"帯の本数","bandCount3":"3本帯","bandCount4":"4本帯","bandCount5":"5本帯","bandCount6":"6本帯","selectBand":"帯を選択","colorPalette":"カラーパレット","bandLabel":"帯","resistance":"抵抗値","tolerance":"許容差","range":"許容範囲","temperatureCoefficient":"温度係数","noTempco":"表示なし","targetResistance":"目標抵抗値（Ω）","targetHint":"4700のような数字を入力します。","targetUnit":"Ω","toleranceChoice":"目標許容差","tolerance20":"20パーセント","tolerance10":"10パーセント","tolerance5":"5パーセント","tolerance2":"2パーセント","tolerance1":"1パーセント","smdCode":"SMD表示","smdHint":"4.7kΩは472、4.7Ωは4R7と入力します。","decodeSmd":"表示を読む","valueUnit":"Ω","ohms":"オーム","kiloohms":"キロオーム","megaohms":"メガオーム","gigaohms":"ギガオーム","minValue":"最小","maxValue":"最大","actualValue":"読み取った値","requestedValue":"目標値","status":"状態","statusReady":"読み取り可能","statusCheck":"最も近い表現可能な値","statusInvalid":"無効な組み合わせ","orientationNote":"向きの目印:少し離れた許容差帯を右側に置きます。金と銀は有効数字の帯には使いません。","reverseNote":"逆算モードは表現可能な値を選び、生成されるカラーコードを表示します。","smdNote":"この簡易表示はSMD表示を読み取りますが、表示から許容差は判断しません。","colorBlack":"黒","colorBrown":"茶","colorRed":"赤","colorOrange":"橙","colorYellow":"黄","colorGreen":"緑","colorBlue":"青","colorViolet":"紫","colorGray":"灰","colorWhite":"白","colorGold":"金","colorSilver":"銀"},
};
