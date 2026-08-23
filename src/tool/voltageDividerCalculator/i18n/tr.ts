import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDividerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gerilim-bolucu-hesaplayici';
const title = 'Gerilim Bölücü Hesaplayıcı';
const description = 'Yüksüz çıkış gerilimini, çekilen akımı, güç harcamasını veya hedef gerilim için gerekli alt direnci hesaplayın.';

const faqData = [
  { question: 'Gerilim bölücü hesaplayıcı ne işe yarar?', answer: 'Seri bağlı iki direncin yük bağlanmamış çıkış gerilimini hesaplar. Besleme gerilimi, R1 ve R2 girilerek Vout bulunur veya hedef Vout girilerek R2 hesaplanır.' },
  { question: 'Çıkış gerilimi nasıl hesaplanır?', answer: 'Vout = Vs x R2 / (R1 + R2) formülü kullanılır. Burada R1 beslemeye, R2 ise toprağa bağlıdır.' },
  { question: 'Hedef gerilim için direnç nasıl hesaplanır?', answer: 'R1 biliniyorsa R2 = R1 x Vtarget / (Vs - Vtarget) formülü uygulanır. Hedef gerilim sıfır ile Vs arasında olmalıdır.' },
  { question: 'Gerilim bölücü ne kadar akım çeker?', answer: 'Çekilen akım I = Vs / (R1 + R2) formülü ile bulunur ve kaynaktan sürekli çekilir.' },
  { question: 'Direnç harcama gücü nasıl kontrol edilir?', answer: 'Harcadıkları güç P = I² x R formülü ile hesaplanır. Uygun güç değerine sahip dirençler seçilmelidir.' },
  { question: 'Gerilim bölücü güç kaynağı olarak kullanılır mı?', answer: 'Genellikle hayır. Çıkışa bağlanan yük eşdeğer direnci değiştirir. Akım çekilecekse tampon devre veya gerilim regülatörü kullanılmalıdır.' },
];

const howToData = [
  { name: 'Hesaplama modunu seçin', text: 'İki direnç de biliniyorsa Vout Hesapla modunu, hedef gerilim biliniyorsa R2 Bul modunu seçin.' },
  { name: 'Besleme ve R1 değerini girin', text: 'DC besleme gerilimini volt ve üst direnç R1 değerini ohm cinsinden girin.' },
  { name: 'R2 veya hedef gerilimi girin', text: 'Vout Hesapla modunda R2 değerini, R2 Bul modunda ise hedef gerilimi girin.' },
  { name: 'Sonuçları inceleyin', text: 'Çıkış gerilimini, devreden geçen akımı ve dirençlerin harcadığı gücü kontrol edin.' },
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
  inLanguage: 'tr',
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
    { type: 'title', text: 'Gerilim Bölücü Hesaplamaları ve Çalışma Prensibi', level: 2 },
    { type: 'paragraph', html: 'Seri bağlı iki dirençten oluşan gerilim bölücü, bir giriş besleme gerilimini ara noktada daha küçük bir çıkış gerilimine düşürür. Üst direnç <code>R1</code> besleme kaynağına, alt direnç <code>R2</code> ise toprağa bağlandığında, yük bağlanmamış ideal çıkış gerilimi <code>Vout = Vs x R2 / (R1 + R2)</code> formülü ile hesaplanır. Bu hesaplayıcı ayrıca devreden geçen sürekli akımı ve her bir direnç üzerinde ısıya dönüşen güç harcamasını da gösterir.' },
    { type: 'title', text: 'İstenen Çıkış Gerilimi İçin Direnç Değerini Hesaplama', level: 3 },
    { type: 'paragraph', html: 'Besleme gerilimini, üst direnç R1 değerini ve ara noktada elde etmek istediğiniz gerilimi bildiğinizde R2 Bul modunu seçin. Araç denklem biçimini <code>R2 = R1 x Vtarget / (Vs - Vtarget)</code> olarak dönüştürür. Besleme gerilimine yakın bir hedef gerilim çok daha büyük bir R2 direnci gerektirirken, sıfıra yakın bir hedef gerilim daha küçük bir alt direnç gerektirir.' },
    { type: 'title', text: 'Bölücü Akımı ve Direnç Güç Harcamalarını Analiz Etme', level: 3 },
    { type: 'paragraph', html: 'Gerilim bölücü devresi güç kaynağından sürekli olarak <code>I = Vs / (R1 + R2)</code> kadar bir akım çeker. Her bir direnç <code>P = I² x R</code> formülü uyarınca güç harcar. Özellikle yüksek gerilim hatlarında gerilim bölücü kullanırken her iki değeri de seçtiğiniz bileşenlerin güç sınırlarıyla karşılaştırın.' },
    { type: 'title', text: 'Bağlanan Yüklerin ve Dış Devrelerin Çıkışa Etkisi', level: 3 },
    { type: 'paragraph', html: 'Elde edilen hesaplama sonuçları Vout düğümünde herhangi bir yük bulunmadığı varsayımına dayanır. Çıkışa bağlanan her devre R2 direnciyle paralel bir bileşen oluşturarak alt kolun eşdeğer direncini düşürür ve hem çıkış gerilimini hem de çekilen akımı değiştirir. Sonraki bir devreyi beslemesi gereken sinyal veya referans gerilimleri için bir op-amp tampon devresi veya özel bir gerilim regülatörü kullanılmalıdır.' },
    { type: 'list', items: ['Hedef gerilimi kesinlikle sıfır ile besleme gerilimi arasında tutun.', 'R1 ve R2 için her zaman aynı direnç birimlerini kullanın.', 'Sadece toplam gücü değil, her bir direncin harcadığı gücü ayrı ayrı kontrol edin.', 'Bileşen toleranslarının ve besleme kaynağındaki dalgalanmaların gerçek çıkışı değiştireceğini unutmayın.', 'Gerçek yük modele dahil edilene kadar sonucu yüksüz durum gerilimi olarak değerlendirin.'] },
    { type: 'tip', title: 'Ara Düğüm Bir Güç Kaynağı Hatı Değildir', html: 'Gerilim bölücü, referans gerilimleri oluşturmak veya sinyalleri zayıflatmak için pratik bir yöntemdir ancak çıkış empedansı sıfır değildir. Sonraki devre akım çekiyorsa bir tampon katı ekleyin.' },
  ],
  ui: {
    modeHeader: 'Hesaplama Modu',
    modePredict: 'Vout Hesapla',
    modeTarget: 'R2 Bul',
    inputHeader: 'Devre Parametreleri',
    supplyLabel: 'Besleme Gerilimi Vs',
    topLabel: 'Üst Direnç R1',
    bottomLabel: 'Alt Direnç R2',
    targetLabel: 'Hedef Çıkış Vout',
    voltageUnit: 'V',
    resistanceUnit: 'Ω',
    resultHeader: 'Gerilim Akışı',
    outputLabel: 'Çıkış Gerilimi',
    currentLabel: 'Bölücü Akımı',
    totalPowerLabel: 'Toplam Güç',
    topPowerLabel: 'R1 Gücü',
    bottomPowerLabel: 'R2 Gücü',
    ratioLabel: 'besleme oranı',
    statusNominal: 'Dengeli Hesaplama',
    statusInvalid: 'Parametreleri Kontrol Edin',
    statusTargetInvalid: 'Hedef gerilim Vs değerinden küçük olmalıdır',
    formulaHeader: 'Uygulanan Formül',
    formulaPredict: 'Vout = Vs x R2 / (R1 + R2). Işıklı nokta çıkış gerilimini gösterir.',
    formulaTarget: 'R2 = R1 x Vtarget / (Vs - Vtarget). Gerekli R2 değerini hesaplar.',
    supplyNode: 'GİRİŞ',
    topNode: 'R1',
    tapNode: 'VOUT',
    bottomNode: 'R2',
    groundNode: 'TOPRAK',
    hint: 'Vout hesaplamak için R1 ve R2 değerlerini girin.',
    targetHint: 'Sıfır ile Vs arasında bir hedef gerilim seçin.',
    note: 'Yüksüz ideal gerilim bölücü. Yük bağlanması çıkış gerilimini değiştirir.',
  },
};
