import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { LaptopBatteryRuntimeUI } from '../ui';

const slug = 'kalkulator-daya-tahan-baterai-laptop';
const title = 'Kalkulator Daya Tahan Baterai Laptop';
const description = 'Perkirakan berapa lama laptop dapat digunakan dari daya baterai saat ini untuk pekerjaan ringan, seimbang, dan berat.';
const faq = [
  { question: 'Apa yang dihitung oleh kalkulator ini?', answer: 'Kalkulator membagi energi yang tersedia dengan daya yang Anda masukkan untuk setiap beban kerja. Hasilnya adalah perkiraan untuk perencanaan, bukan pembacaan langsung atau jaminan produsen.' },
  { question: 'Di mana saya menemukan kapasitas dan kesehatan baterai?', answer: 'Periksa laporan baterai atau dokumentasi produsen untuk kapasitas desain dan kapasitas penuh saat ini. Kesehatan baterai adalah kapasitas penuh saat ini sebagai persentase kapasitas awal.' },
  { question: 'Mengapa waktu pakai berbeda untuk setiap pekerjaan?', answer: 'Laptop yang menggunakan lebih banyak watt menghabiskan energi tersimpan lebih cepat. Panggilan video, permainan, layar eksternal, kecerahan tinggi, dan beban CPU atau GPU terus-menerus meningkatkan konsumsi rata-rata.' },
  { question: 'Bisakah tool ini membaca baterai laptop secara otomatis?', answer: 'Tidak. Tool bekerja lokal di browser dan hanya memakai nilai yang Anda masukkan. Ganti contoh dengan laporan terbaru atau pengukuran daya rata-rata jika membutuhkan perkiraan yang lebih baik.' },
];
const howTo = [
  { name: 'Baca kapasitas awal', text: 'Masukkan kapasitas desain dalam watt-jam. Jika hanya mengetahui miliampere-jam dan volt, ubah terlebih dahulu menggunakan Wh = V × Ah.' },
  { name: 'Jelaskan kondisi baterai sekarang', text: 'Masukkan kapasitas penuh saat ini sebagai persentase kapasitas awal, lalu masukkan persentase daya ketika mulai bekerja.' },
  { name: 'Atur konsumsi yang realistis', text: 'Pilih preset yang paling mendekati dan ubah nilai watt jika memiliki pengukuran dari laptop atau meteran daya.' },
  { name: 'Buat keputusan perjalanan', text: 'Baca tiga garis waktu dan gunakan hasil terpendek untuk tugas berat. Jika marginnya tipis atau mendesak, kurangi beban atau bawa pengisi daya.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'id' };

export const content: ToolLocaleContent<LaptopBatteryRuntimeUI> = {
  slug, title, description, faq, howTo, bibliography, schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Apa yang sebenarnya diukur oleh perkiraan waktu pakai', level: 2 },
    { type: 'paragraph', html: 'Baterai laptop menyimpan energi dalam watt-jam. Laptop menggunakan energi itu dengan laju yang diukur dalam watt. Kalkulator mengubah kedua nilai tersebut menjadi durasi agar Anda dapat memutuskan apakah daya cukup untuk perjalanan, rapat, kuliah, atau sesi kerja.' },
    { type: 'paragraph', html: 'Model memperkirakan kapasitas penuh saat ini dari kapasitas awal dan kesehatan baterai, lalu menerapkan persentase daya saat mulai. Setiap beban kerja menggunakan anggaran energi yang sama.' },
    { type: 'title', text: 'Memilih input yang dapat dipercaya', level: 2 },
    { type: 'paragraph', html: 'Gunakan laporan baterai atau spesifikasi produsen. Kapasitas desain, kapasitas penuh saat ini, dan sisa daya adalah nilai yang berbeda. Jika hanya mengetahui volt dan ampere-jam, gunakan <strong>Wh = V × Ah</strong>; 1.000 mAh sama dengan 1 Ah.' },
    { type: 'list', items: ['Hitung kesehatan dari kapasitas penuh saat ini dibagi kapasitas desain.', 'Masukkan daya yang benar-benar tersedia ketika sesi dimulai.', 'Gunakan konsumsi rata-rata yang diukur untuk sesi panjang.', 'Sertakan monitor eksternal, dock, atau aplikasi berat dalam beban kerja.'] },
    { type: 'title', text: 'Membaca waktu pakai sebagai rentang rencana', level: 2 },
    { type: 'paragraph', html: 'Garis ringan cocok untuk membaca dan dokumen sederhana, garis seimbang untuk multitugas biasa, dan garis berat menunjukkan dampak konsumsi tinggi. Bandingkan pekerjaan Anda dengan waktu yang dibutuhkan dan rencanakan berdasarkan hasil terpendek yang masuk akal.' },
    { type: 'table', headers: ['Sinyal', 'Artinya', 'Tindakan'], rows: [['Nyaman', 'Enam jam atau lebih pada beban itu', 'Sesi memiliki cadangan besar.'], ['Layak', 'Tiga sampai enam jam', 'Cocok untuk sesi tertentu, tetap siapkan pengisi daya.'], ['Tipis', 'Satu sampai tiga jam', 'Kurangi beban atau jadwalkan pengisian.'], ['Mendesak', 'Kurang dari satu jam', 'Anggap penggunaan bergantung pada pengisi daya.']] },
    { type: 'title', text: 'Hal yang tidak dapat dijanjikan oleh perkiraan', level: 2 },
    { type: 'paragraph', html: 'Konsumsi nyata berubah setiap detik. Kecerahan, radio nirkabel, suhu, proses latar belakang, firmware, dan cadangan sistem mengubah waktu habis. Tool tidak membaca sensor, memodelkan kimia baterai, atau menjamin durasi tertentu.' },
    { type: 'tip', title: 'Tips pengukuran', html: 'Catat persentase baterai dan waktu yang berlalu selama sesi nyata. Ganti nilai watt preset dengan rata-rata yang diamati, lalu hitung ulang setiap jenis pekerjaan.' },
  ],
  ui: {
    batteryInputsLabel: 'Titik awal baterai', designCapacityLabel: 'Kapasitas awal baterai', designCapacityHint: 'Energi baterai saat baru', healthLabel: 'Kesehatan baterai', healthHint: 'Kapasitas penuh saat ini dibandingkan kondisi baru', chargeLabel: 'Daya saat mulai', chargeHint: 'Daya yang diperkirakan saat pekerjaan dimulai', scenariosLabel: 'Waktu pakai beban kerja', scenariosHint: 'Edit konsumsi daya rata-rata untuk setiap pekerjaan', powerLabel: 'Konsumsi rata-rata', wattsSuffix: 'W', presetsLabel: 'Mulai dengan set beban kerja', presetBalanced: 'Pekerjaan harian', presetTravel: 'Hemat perjalanan', presetCreative: 'Kreatif berat', runwayLabel: 'Lintasan energi', runwayCaption: 'Setiap garis menunjukkan kapan beban itu menghabiskan daya awal yang sama.', availableEnergyLabel: 'Energi tersedia sekarang', fullCapacityLabel: 'Kapasitas penuh saat ini', shortestScenarioLabel: 'Rencanakan sekitar', runtimeLabel: 'Perkiraan waktu pakai', loadLabel: 'Konsumsi daya', healthStateExcellent: 'Kondisi baterai sangat baik', healthStateGood: 'Kondisi baterai baik', healthStateAging: 'Baterai mulai menua', healthStateWorn: 'Baterai aus', statusComfortable: 'Cadangan nyaman', statusWorkable: 'Sesi layak', statusTight: 'Cadangan tipis', statusUrgent: 'Bergantung pada pengisi daya', scenarioLight: 'Pekerjaan ringan', scenarioBalanced: 'Pekerjaan seimbang', scenarioIntense: 'Pekerjaan berat', sceneBatteryLabel: 'Daya awal', sceneEnergyLabel: 'Energi tersedia', sceneTimeLabel: 'Waktu pakai', noteLabel: 'Batas model', noteText: 'Ini adalah perkiraan perencanaan dari input Anda. Konsumsi nyata dan cadangan sistem dapat memperpendek waktunya.',
  },
};
