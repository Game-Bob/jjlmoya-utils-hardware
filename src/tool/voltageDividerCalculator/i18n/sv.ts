import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDividerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'spanningsdelare-raknare';
const title = 'Spänningsdelare räknare';
const description = 'Beräkna obelastad utspänning, ström, effektförlust eller den nedre resistorn som krävs för en målspänning.';

const faqData = [
  { question: 'Vad gör en spänningsdelarräknare?', answer: 'Den beräknar den obelastade utspänningen för två seriekopplade resistorer. Ange matningsspänning, R1 och R2 för att få Vout, eller ange mål-Vout för att beräkna R2.' },
  { question: 'Hur beräknar man utspänningen?', answer: 'Använd formeln Vout = Vs x R2 / (R1 + R2), där R1 är ansluten till matningen och R2 till jord.' },
  { question: 'Hur beräknar man resistorn för en målspänning?', answer: 'Om R1 är känd används R2 = R1 x Vtarget / (Vs - Vtarget). Målspänningen måste ligga mellan noll och Vs.' },
  { question: 'Hur mycket ström drar en spänningsdelare?', answer: 'Strömmen är I = Vs / (R1 + R2), vilken dras kontinuerligt från källan.' },
  { question: 'Hur kontrollerar man effekten i resistorerna?', answer: 'Effektförlusten är P = I² x R. Välj komponenter med tillräcklig effekttålighet.' },
  { question: 'Kan man använda en spänningsdelare som strömförsörjning?', answer: 'Oftast inte. En belastning på Vout ändrar den effektiva resistansen. Använd en buffert eller spänningsregulator vid strömuttag.' },
];

const howToData = [
  { name: 'Välj beräkningsläge', text: 'Använd Beräkna Vout när båda resistorerna är kända. Använd Hitta R2 när matning, R1 och målspänning är kända.' },
  { name: 'Ange matning och R1', text: 'Fyll i matningsspänningen i volt och den övre resistorn R1 i ohm.' },
  { name: 'Ange R2 eller målspänning', text: 'I läget Beräkna Vout anger du R2. I läget Hitta R2 anger du målspänningen.' },
  { name: 'Läs av resultatet', text: 'Se utspänning, ström och effektförlust för varje resistor.' },
];

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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<VoltageDividerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Spänningsdelarberäkningar och princip', level: 2 },
    { type: 'paragraph', html: 'En spänningsdelare bestående av två seriekopplade resistorer sänker en matningsspänning till en lägre utspänning vid mittunkten. När den övre resistorn <code>R1</code> är ansluten till matningen och den nedre resistorn <code>R2</code> är ansluten till jord, beräknas den ideala obelastade utspänningen med formeln <code>Vout = Vs x R2 / (R1 + R2)</code>. Denna räknare visar även den kontinuerliga strömmen och effektförlusten i form av värme i varje resistor.' },
    { type: 'title', text: 'Bestäm resistorn som krävs för en målspänning', level: 3 },
    { type: 'paragraph', html: 'Välj läget Hitta R2 när matningsspänningen, den övre resistorn R1 och den önskade utspänningen vid mittpunkten är kända. Verktyget omvandlar formeln till <code>R2 = R1 x Vtarget / (Vs - Vtarget)</code>. En målspänning nära matningsspänningen kräver ett avsevärt större värde på R2, medan en spänning nära noll kräver en mindre nedre resistor.' },
    { type: 'title', text: 'Analysera delarström och effektförlust', level: 3 },
    { type: 'paragraph', html: 'Spänningsdelaren drar en kontinuerlig ström på <code>I = Vs / (R1 + R2)</code> från matningskällan. Varje resistor utvecklar en effekt enligt <code>P = I² x R</code>. Kontrollera alltid båda värdena mot komponenternas märkeffekt, särskilt när spänningsdelaren används vid högre spänningar.' },
    { type: 'title', text: 'Inverkan av ansluten belastning och kretsar', level: 3 },
    { type: 'paragraph', html: 'De beräknade resultaten förutsätter att utgången Vout är obelastad. Varje krets som ansluts till Vout hamnar i parallell med R2, vilket sänker den effektiva resistansen i den nedre grenen och förändrar både utspänning och ström. För signaler eller referensspänningar som ska driva en efterföljande belastning bör en operationsförstärkare i buffertkoppling eller en spänningsregulator användas.' },
    { type: 'list', items: ['Håll målspänningen strikt mellan noll och matningsspänningen.', 'Använd samma motståndsenheter för både R1 och R2.', 'Kontrollera effekttåligheten hos varje resistor för sig.', 'Kom ihåg att komponenttoleranser och spänningsvariationer påverkar den reella utspänningen.', 'Betrakta resultatet som en obelastad spänning tills belastningen har inkluderats i modellen.'] },
    { type: 'tip', title: 'Mittpunkten är ingen spänningskälla', html: 'En spänningsdelare är en enkel metod för att skapa referenssignaler eller dämpa signaler, men har en icke-noll utimpedans. Vid strömuttag krävs en buffert.' },
  ],
  ui: {
    modeHeader: 'Beräkningsläge',
    modePredict: 'Beräkna Vout',
    modeTarget: 'Hitta R2',
    inputHeader: 'Kretsparametrar',
    supplyLabel: 'Matningsspänning Vs',
    topLabel: 'Övre resistor R1',
    bottomLabel: 'Nedre resistor R2',
    targetLabel: 'Målspänning Vout',
    voltageUnit: 'V',
    resistanceUnit: 'Ω',
    resultHeader: 'Spänningsflöde',
    outputLabel: 'Utspänning',
    currentLabel: 'Delarström',
    totalPowerLabel: 'Total effekt',
    topPowerLabel: 'Effekt R1',
    bottomPowerLabel: 'Effekt R2',
    ratioLabel: 'av matning',
    statusNominal: 'Giltig beräkning',
    statusInvalid: 'Kontrollera indata',
    statusTargetInvalid: 'Målspänningen måste vara lägre än Vs',
    formulaHeader: 'Tillämpad formel',
    formulaPredict: 'Vout = Vs x R2 / (R1 + R2). Den belysta punkten visar utspänningen.',
    formulaTarget: 'R2 = R1 x Vtarget / (Vs - Vtarget). Beräknar nödvändigt R2-värde.',
    supplyNode: 'INGÅNG',
    topNode: 'R1',
    tapNode: 'VOUT',
    bottomNode: 'R2',
    groundNode: 'JORD',
    hint: 'Ange R1 och R2 för att beräkna Vout.',
    targetHint: 'Välj en målspänning mellan noll och Vs.',
    note: 'Obelastad delare. En belastning ändrar utspänningen.',
  },
};
