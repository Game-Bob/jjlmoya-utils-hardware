import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDividerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-pembagi-tegangan';
const title = 'Kalkulator Pembagi Tegangan';
const description = 'Hitung tegangan keluaran tanpa beban, arus, disipasi daya, atau resistor bawah yang dibutuhkan untuk tegangan target.';

const faqData = [
  { question: 'Apa fungsi kalkulator pembagi tegangan?', answer: 'Kalkulator ini menghitung tegangan keluaran tanpa beban dari dua resistor seri. Masukkan tegangan sumber, R1, dan R2 untuk menghitung Vout, atau masukkan Vout target untuk menghitung R2.' },
  { question: 'Bagaimana cara menghitung tegangan keluaran?', answer: 'Gunakan rumus Vout = Vs x R2 / (R1 + R2), di mana R1 terhubung ke sumber dan R2 terhubung ke ground.' },
  { question: 'Bagaimana cara menghitung resistor untuk tegangan target?', answer: 'Jika R1 diketahui, gunakan rumus R2 = R1 x Vtarget / (Vs - Vtarget). Tegangan target harus di antara nol dan Vs.' },
  { question: 'Berapa arus yang ditarik oleh pembagi tegangan?', answer: 'Arus pembagi adalah I = Vs / (R1 + R2), yang ditarik secara terus-menerus dari sumber.' },
  { question: 'Bagaimana cara memeriksa daya resistor?', answer: 'Daya yang terdisipasi adalah P = I² x R. Pilih resistor dengan daya pengenal yang cukup.' },
  { question: 'Bisakah pembagi tegangan digunakan sebagai catu daya?', answer: 'Biasanya tidak. Beban yang terhubung ke Vout akan mengubah resistansi efektif. Gunakan buffer atau regulator tegangan jika menyuplai arus beban.' },
];

const howToData = [
  { name: 'Pilih mode perhitungan', text: 'Gunakan Prediksi Vout jika kedua resistor diketahui. Gunakan Cari R2 jika sumber, R1, dan tegangan target diketahui.' },
  { name: 'Masukkan sumber dan R1', text: 'Masukkan tegangan sumber DC dalam volt dan resistor atas R1 dalam ohm.' },
  { name: 'Masukkan R2 atau tegangan target', text: 'Pada mode Prediksi Vout masukkan R2. Pada mode Cari R2 masukkan tegangan target.' },
  { name: 'Baca hasil perhitungan', text: 'Periksa tegangan keluaran, arus pembagi, dan disipasi daya masing-masing resistor.' },
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
  inLanguage: 'id',
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
    { type: 'title', text: 'Perhitungan dan Prinsip Kerja Pembagi Tegangan', level: 2 },
    { type: 'paragraph', html: 'Pembagi tegangan dua resistor mengubah tegangan sumber menjadi tegangan keluaran yang lebih kecil pada titik percabangan. Ketika resistor atas <code>R1</code> terhubung ke sumber tegangan dan resistor bawah <code>R2</code> terhubung ke ground, tegangan keluaran ideal tanpa beban dihitung dengan rumus <code>Vout = Vs x R2 / (R1 + R2)</code>. Kalkulator ini juga menampilkan arus pembagi yang mengalir serta daya yang terdisipasi menjadi panas pada masing-masing resistor.' },
    { type: 'title', text: 'Menentukan Nilai Resistor untuk Tegangan Target', level: 3 },
    { type: 'paragraph', html: 'Pilih mode Cari R2 ketika Anda mengetahui tegangan sumber, nilai resistor atas R1, dan tegangan keluaran yang diinginkan. Alat ini mengubah bentuk persamaan menjadi <code>R2 = R1 x Vtarget / (Vs - Vtarget)</code>. Tegangan target yang mendekati tegangan sumber membutuhkan nilai R2 yang jauh lebih besar, sedangkan target yang mendekati nol membutuhkan R2 yang lebih kecil.' },
    { type: 'title', text: 'Menganalisis Arus Pembagi dan Disipasi Daya Resistor', level: 3 },
    { type: 'paragraph', html: 'Pembagi tegangan menarik arus kontinu sebesar <code>I = Vs / (R1 + R2)</code> dari sumber daya. Setiap resistor mendisipasikan daya sebesar <code>P = I² x R</code>. Selalu periksa kedua nilai ini terhadap daya pengenal komponen, terutama ketika pembagi tegangan terpasang pada jalur tegangan tinggi.' },
    { type: 'title', text: 'Pengaruh Beban Luar dan Rangkaian Terhubung', level: 3 },
    { type: 'paragraph', html: 'Hasil perhitungan ini mengasumsikan bahwa titik Vout tidak memiliki beban luar. Beban yang terhubung ke Vout akan terpasang sejajar dengan R2, menurunkan resistansi efektif dan mengubah tegangan serta arus. Untuk sinyal atau tegangan acuan yang harus menyuplai arus ke rangkaian berikutnya, gunakan penyangga op-amp atau regulator tegangan khusus.' },
    { type: 'list', items: ['Jaga tegangan target secara ketat di antara nol dan tegangan sumber.', 'Gunakan satuan resistansi yang sama untuk R1 dan R2.', 'Periksa disipasi daya kedua resistor secara terpisah, bukan hanya daya total.', 'Ingat bahwa toleransi komponen dan variasi tegangan sumber akan mempengaruhi nilai nyata.', 'Anggap hasil ini sebagai kondisi tanpa beban sebelum beban nyata dimasukkan ke dalam model.'] },
    { type: 'tip', title: 'Titik Percabangan Bukan Jalur Daya Utama', html: 'Pembagi tegangan adalah cara praktis untuk membuat sinyal acuan atau mengurangi tingkat sinyal, tetapi memiliki impedansi keluaran yang cukup besar. Jika rangkaian berikutnya menarik arus, tambahkan penyangga penguat operasi.' },
  ],
  ui: {
    modeHeader: 'Mode Perhitungan',
    modePredict: 'Prediksi Vout',
    modeTarget: 'Cari R2',
    inputHeader: 'Parameter Rangkaian',
    supplyLabel: 'Tegangan Sumber Vs',
    topLabel: 'Resistor Atas R1',
    bottomLabel: 'Resistor Bawah R2',
    targetLabel: 'Tegangan Target Vout',
    voltageUnit: 'V',
    resistanceUnit: 'Ω',
    resultHeader: 'Aliran Tegangan',
    outputLabel: 'Tegangan Keluaran',
    currentLabel: 'Arus Pembagi',
    totalPowerLabel: 'Daya Total',
    topPowerLabel: 'Daya R1',
    bottomPowerLabel: 'Daya R2',
    ratioLabel: 'dari sumber',
    statusNominal: 'Perhitungan Seimbang',
    statusInvalid: 'Periksa Masukan',
    statusTargetInvalid: 'Tegangan target harus di bawah Vs',
    formulaHeader: 'Rumus yang Digunakan',
    formulaPredict: 'Vout = Vs x R2 / (R1 + R2). Titik terang menunjukkan tegangan keluaran.',
    formulaTarget: 'R2 = R1 x Vtarget / (Vs - Vtarget). Menghitung nilai R2 yang dibutuhkan.',
    supplyNode: 'MASUKAN',
    topNode: 'R1',
    tapNode: 'VOUT',
    bottomNode: 'R2',
    groundNode: 'GROUND',
    hint: 'Masukkan R1 dan R2 untuk menghitung Vout.',
    targetHint: 'Pilih tegangan target di antara zero dan Vs.',
    note: 'Pembagi ideal tanpa beban. Beban luar akan mengubah tegangan keluaran.',
  },
};
