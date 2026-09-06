import type { ToolLocaleContent } from '../../../types';
import type { PhoneChargeTimeCalculatorUI } from '../ui';
import { createPhoneChargeTimeCalculatorContent } from './createContent';

const ui: PhoneChargeTimeCalculatorUI = {
  capacityLabel: '电池容量', capacityUnit: 'mAh', capacityHint: '使用手机规格中的数值。',
  currentLabel: '当前电量', targetLabel: '目标电量', percentUnit: '%', powerLabel: '充电器功率', powerUnit: 'W',
  efficiencyLabel: '预计效率', efficiencyUnit: '%', efficiencyHint: '包含转换损耗和发热损耗。',
  statusEmpty: '请输入手机和充电器信息。', statusReady: '输入时会自动更新。', statusError: '请检查标记的数值。',
  resultTitle: '达到目标的预计时间', energyLabel: '还需能量', energyUnit: 'Wh', fromCurrentCharge: '从当前电量开始', startNowLabel: '现在开始可达到',
  scenarioTitle: '充电器参考场景', scenarioAt: '相同手机和充电范围', assumptionsTitle: '计算假设',
  assumptionsText: '使用 {voltage} V 电池标称电压、{efficiency}% 效率，以及目标超过70%时约 {taper}% 的额外减速。你的手机实际充电方式可能不同。',
  errorCapacity: '请输入大于0的电池容量。', errorCurrent: '当前电量必须在0%到100%之间。', errorTarget: '目标电量必须在1%到100%之间。',
  errorTargetOrder: '目标电量必须高于当前电量。', errorPower: '请输入大于0的功率。', errorEfficiency: '效率必须在50%到100%之间。',
  targetMarker: '目标', chargeProgressLabel: '充电范围', hourUnit: '小时', minuteUnit: '分钟',
};

const faq = [
  { question: '只看电池百分比可以计算充电时间吗？', answer: '不可以。同样的百分比，在小电池和大电池中代表的能量不同。因此还需要电池容量、到达手机的功率和效率估计。' },
  { question: '为什么手机有时比预计时间充得更久？', answer: '电量较高、设备发热、线缆或充电协议受限，以及充电时使用手机，都可能让手机降低功率。这里的结果用于规划，不是实时测量。' },
  { question: '应该输入充电器功率还是手机实际接收的功率？', answer: '如果知道，请输入预计到达手机的功率。如果只知道充电器的额定功率，把它当作上限，并预留更长的实际时间。' },
];

const howTo = [
  { name: '输入电池容量', text: '从手机规格中找到电池容量，并以mAh输入。不要用充电宝的容量替代，因为它们的电压和转换损耗不同。' },
  { name: '设置充电范围', text: '输入当前电量和需要达到的目标电量。从20%充到50%与充满所需的时间不同。' },
  { name: '添加功率和效率', text: '输入瓦特数，或在知道时输入手机实际接受的充电功率。没有自己的测量值时，保留默认效率。' },
  { name: '比较参考场景', text: '将结果与5 W、15 W和30 W参考值比较，判断充电器能否在现有时间内完成需要的充电。' },
];

const seo = [
  { type: 'title' as const, text: '计算手机充电需要多长时间', level: 2 as const },
  { type: 'paragraph' as const, html: '在出门、旅行或长时间通话前，想知道手机电池能否及时达到可用电量时，可以使用这个手机充电时间计算器。输入电池容量、当前电量、目标电量、充电器功率和效率，工具会估算这段充电范围所需的分钟数和能量。你还可以把结果与手头更慢或更快的充电器进行比较。' },
  { type: 'title' as const, text: '需要输入哪些数据', level: 2 as const },
  { type: 'list' as const, items: ['容量：使用手机的mAh容量，不要使用充电宝标注的容量。', '当前电量和目标：描述你真正需要的充电范围，目标必须高于当前电量。', '功率和效率：知道时使用到达手机的功率；否则充电器功率只能作为上限。'] },
  { type: 'title' as const, text: '如何理解结果', level: 2 as const },
  { type: 'paragraph' as const, html: '主要数字是从当前电量到目标电量的预计时间。还需能量用瓦时表示同一段充电量，参考条则展示5 W、15 W和30 W下的差异。如果可用时间不够，可以降低目标，或使用手机确实能够以更高功率利用的充电器和线缆。' },
  { type: 'title' as const, text: '为什么接近100%时充电会变慢', level: 2 as const },
  { type: 'paragraph' as const, html: '手机通常不会从没电到充满始终使用相同功率。电池接近高电量时，充电控制可能降低电流，以管理发热和电池负担。因此，规划时从20%到80%的估算往往比线性推算到100%更有用。目标超过70%时，计算中会加入少量减速余量。' },
  { type: 'title' as const, text: '这是估算：计算器无法检测什么', level: 2 as const },
  { type: 'list' as const, items: ['它无法读取手机型号、电池健康度、充电协议、线缆、温度、使用情况或实时充电功率。', '它不能诊断电池老化，也不能认证快充兼容性。需要精确答案时，请在实际场景中计时测试同一套手机、线缆和充电器。'] },
];

export const content: ToolLocaleContent<PhoneChargeTimeCalculatorUI> = createPhoneChargeTimeCalculatorContent({ locale: 'zh', slug: 'phone-charge-time-calculator', title: '手机充电时间计算器', description: '根据电池容量、当前电量、充电器功率和效率，估算手机达到目标电量所需的时间。', faq, howTo, seo, ui });
