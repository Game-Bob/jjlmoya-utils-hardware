import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EstimadorSaludBateriaUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-kesehatan-baterai-lithium';
const title = 'Kalkulator Kesehatan Baterai Lithium';
const description =
  'Hitung State of Health (SoH) baterai lithium Anda berdasarkan siklus, tegangan, dan suhu. Panduan ilmiah untuk memaksimalkan masa pakai energi.';

const faqData = [
  {
    question: 'Apa itu degradasi kimia baterai?',
    answer:
      'Pada setiap siklus pengisian dan pengosongan daya, sel lithium mengalami retakan mikro dan akumulasi sedimen kimia (S.E.I.) yang mengurangi kapasitas penyimpanan energinya. Ini adalah proses yang tidak dapat dihindari tetapi dapat diperlambat dengan kebiasaan baik.',
  },
  {
    question: 'Mengapa disarankan mengisi daya hingga 80%?',
    answer:
      'Baterai lithium mengalami lebih banyak stres pada tegangan ekstrem (0% dan 100%). Menjaga daya antara 20% dan 80% dapat memperpanjang masa pakai sel hingga tiga kali lipat dengan mengurangi panas dan tekanan internal.',
  },
  {
    question: 'Bagaimana panas memengaruhi masa pakai baterai?',
    answer:
      'Panas adalah musuh nomor satu. Untuk setiap kenaikan 10 derajat di atas suhu lingkungan optimal (25 derajat), laju degradasi kimia kira-kira berlipat ganda.',
  },
  {
    question: 'Apa itu siklus pengisian penuh?',
    answer:
      'Satu siklus adalah penggunaan 100% dari kapasitas baterai, tetapi tidak harus sekaligus. Jika Anda menggunakan 50% hari ini, mengisinya, dan menggunakan 50% besok, Anda telah menyelesaikan 1 siklus penuh.',
  },
];

const howToData = [
  {
    name: 'Identifikasi kapasitas asli',
    text: 'Lihatlah kotak perangkat Anda atau situs web produsen untuk mengetahui mAh baterai Anda saat masih baru.',
  },
  {
    name: 'Periksa siklus saat ini',
    text: 'Banyak sistem (seperti iOS atau Android 14) memungkinkan Anda melihat berapa banyak siklus pengisian yang telah dikumpulkan baterai Anda.',
  },
  {
    name: 'Masukkan data teknis',
    text: 'Sesuaikan tegangan saat ini, siklus, dan suhu agar mesin perhitungan kami dapat memperkirakan SoH.',
  },
  {
    name: 'Analisis diagnosis',
    text: 'Periksa persentase kesehatan. Jika Anda berada di bawah 80%, Anda mungkin mulai melihat penurunan performa atau mati mendadak.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<EstimadorSaludBateriaUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Kimia waktu: mengapa baterai lithium mati', level: 2 },
    {
      type: 'paragraph',
      html: 'Baterai lithium-ion bukanlah kotak energi statis melainkan ekosistem kimia dinamis yang terus mengalami degradasi sejak saat pembuatan. Setiap siklus pengisian dan pengosongan, setiap variasi suhu, dan setiap menit pada tegangan ekstrem berkontribusi pada produk sampingan yang menghambat aliran ion.',
    },
    { type: 'title', text: 'Mekanisme degradasi utama', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Lapisan SEI:</strong> antarmuka elektrolit padat tumbuh seiring waktu, mengonsumsi lithium aktif dan meningkatkan resistensi internal. <strong>Oksidasi elektrolit:</strong> tegangan di atas 4.1V mempercepat oksidasi dan dapat membengkakkan baterai. <strong>Lithium Plating:</strong> pengisian daya pada suhu rendah mengendapkan lithium dalam bentuk logam, menciptakan dendrit yang dapat menembus pemisah.',
    },
    { type: 'title', text: 'Mitos 100%: mengapa mengisi daya semalaman adalah kesalahan', level: 3 },
    {
      type: 'paragraph',
      html: 'Bagi ion lithium, berada pada daya 100% (4.2V) adalah kondisi stres tinggi. Penelitian menunjukkan masa pakai siklus berlipat ganda atau tiga kali lipat saat menjaga perangkat antara <strong>20% dan 80%</strong>. Selain itu, untuk setiap kenaikan 10°C di atas 25°C, laju degradasi kimia kira-kira berlipat ganda.',
    },
    { type: 'title', text: 'Protokol kelangsungan hidup energi', level: 3 },
    {
      type: 'paragraph',
      html: 'Jangan pernah mengisi daya baterai di bawah 0°C: lithium mengendap pada anoda menyebabkan kerusakan permanen. Pengisian cepat menghasilkan panas lokal dan stres mekanis; gunakan hanya jika benar-benar diperlukan. Untuk penyimpanan jangka panjang, simpan baterai pada daya 50% di tempat yang sejuk.',
    },
  ],
  ui: {
    badge: 'Baterai Li-Ion',
    title: 'Estimator Kesehatan Baterai',
    description: 'Diagnosis degradasi teknis untuk sel Lithium-Ion.',
    paramsTitle: 'Parameter Sel',
    voltageLabel: 'Tegangan Saat Ini',
    cyclesLabel: 'Siklus Pengisian',
    tempLabel: 'Suhu',
    voltageHint: 'Rentang nominal: 3.0V (kosong) hingga 4.2V (penuh).',
    labelUsefulLife: 'Masa Pakai',
    yearsPrefix: 'Est.',
    yearsSuffix: 'tahun',
    metricThermalStress: 'Stres Termal',
    metricVoltageStress: 'Stres Tegangan',
    metricLithiumPlating: 'Lithium Plating',
    statusExcelente: 'Status Luar Biasa',
    statusBueno: 'Status Baik',
    statusRegular: 'Status Cukup',
    statusCritico: 'Status Kritis',
    indicatorTempNormal: 'Normal',
    indicatorTempCritical: 'Kritis',
    indicatorVoltageHigh: 'Tinggi',
    indicatorVoltageLow: 'Rendah',
    indicatorPlatingRisk: 'Risiko Tinggi',
    indicatorPlatingOk: 'Tanpa Risiko',
    recTemp: 'Kurangi suhu sekitar atau tingkatkan ventilasi untuk menghindari oksidasi elektrolit.',
    recVoltageHigh: 'Hindari menjaga baterai pada daya 100% (4.2V) untuk waktu yang lama.',
    recVoltageLow: 'Hindari pengosongan daya yang dalam; siklus antara 20% dan 80% menggandakan masa pakai baterai.',
    recSohLow: 'Kapasitas telah turun di bawah standar optimal. Pertimbangkan penggantian jika otonomi tidak mencukupi.',
    recDefault: 'Pertahankan kebiasaan Anda saat ini — baterai Anda berada dalam rentang operasi yang ideal.',
  },
};
