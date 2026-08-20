import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResistorColorCodeUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = "kalkulator-kode-warna-resistor";
const title = "Kalkulator Kode Warna Resistor";
const description = "Dekodekan gelang warna resistor untuk menghitung nilai resistansi, toleransi, rentang, dan koefisien suhu. Gunakan juga mode balik dari nilai target atau baca penandaan SMD.";

const faqData = [{"question":"Bagaimana cara membaca gelang warna resistor?","answer":"Mulailah dari sisi yang berlawanan dengan gelang toleransi yang biasanya sedikit berjauhan. Dua atau tiga gelang pertama adalah angka, lalu pengali, kemudian toleransi."},{"question":"Apa arti kode resistor empat gelang?","answer":"Dua gelang pertama menunjukkan angka penting, gelang ketiga adalah pengali, dan gelang keempat menunjukkan toleransi."},{"question":"Berapa toleransi resistor tiga gelang?","answer":"Jika tidak ada gelang toleransi, kode tiga gelang biasanya ditafsirkan sebagai plus atau minus 20 persen."},{"question":"Apa perbedaan resistor lima dan enam gelang?","answer":"Lima gelang menggunakan tiga angka dan satu toleransi. Gelang keenam menambahkan koefisien suhu dalam ppm per derajat Celsius."},{"question":"Apakah alat ini dapat membaca penandaan resistor SMD?","answer":"Ya. Masukkan kode tiga atau empat digit, atau notasi seperti 4R7. Huruf R menandai posisi desimal."},{"question":"Apakah hasil ini membuktikan resistor aman digunakan?","answer":"Tidak. Periksa daya, tegangan kerja, suhu, toleransi, dan kebutuhan rangkaian sebelum memasang pengganti."}];

const howToData = [{"name":"Pilih jumlah gelang","text":"Pilih tiga, empat, lima, atau enam gelang sesuai komponen yang diperiksa."},{"name":"Pilih setiap warna","text":"Aktifkan posisi gelang lalu pilih warnanya dari palet. Gambar resistor langsung berubah."},{"name":"Baca hasil","text":"Gunakan angka utama untuk resistansi dan hasil kecil untuk toleransi, rentang, serta koefisien suhu."},{"name":"Periksa arah baca","text":"Letakkan gelang toleransi di kanan jika memungkinkan lalu bandingkan dengan skema atau lembar data."}];

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
  inLanguage: "id",
};

export const content: ToolLocaleContent<ResistorColorCodeUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [{"type":"title","text":"Kalkulator Kode Warna Resistor","level":2},{"type":"paragraph","html":"Dekode resistor tiga, empat, lima, dan enam gelang langsung di browser. Kalkulator mengubah setiap warna menjadi angka penting, pengali, toleransi, rentang resistansi, dan koefisien suhu."},{"type":"title","text":"Cara membaca kode warna resistor","level":3},{"type":"paragraph","html":"Mulai dari sisi yang berlawanan dengan gelang toleransi. Dua atau tiga gelang memberikan angka, gelang berikutnya memberikan pengali, dan gelang toleransi menunjukkan variasi dari nilai nominal."},{"type":"table","headers":["Jumlah gelang","Angka penting","Tanda tambahan","Penggunaan umum"],"rows":[["Tiga gelang","Dua","Toleransi default 20 persen","Identifikasi umum"],["Empat gelang","Dua","Toleransi","Resistor berkaki umum"],["Lima gelang","Tiga","Toleransi","Resistor presisi"],["Enam gelang","Tiga","Toleransi dan koefisien suhu","Rangkaian presisi"]]},{"type":"title","text":"Bekerja dari nilai target","level":3},{"type":"paragraph","html":"Gunakan mode balik ketika mengetahui resistansi yang diinginkan. Alat membulatkan ke nilai yang dapat direpresentasikan lalu menampilkan urutan warna yang dihasilkan."},{"type":"title","text":"Penandaan resistor SMD","level":3},{"type":"paragraph","html":"Resistor SMD sering memakai tiga atau empat digit. Digit terakhir adalah pangkat sepuluh untuk digit awal. Huruf R menggantikan tanda desimal, sehingga 4R7 berarti 4,7 ohm."},{"type":"title","text":"Pemeriksaan sebelum pemasangan","level":2},{"type":"list","items":["Bandingkan nilai dengan skema atau dokumentasi servis.","Periksa toleransi dan daya pada lembar data.","Gunakan jarak gelang toleransi untuk memastikan arah baca.","Ukur komponen yang sudah dilepas jika penandaan rusak atau ambigu.","Kode warna bukan bukti keamanan listrik."]},{"type":"tip","title":"Catatan","html":"Alat ini mengidentifikasi penandaan. Alat ini tidak mengukur resistansi nyata, daya, tegangan isolasi, atau keandalan jangka panjang."}],
  ui: {"sceneKicker":"Laboratorium spektrum EIA","hint":"Sentuh gelang lalu pilih warna. Resistor langsung memberikan jawabannya.","decodeMode":"Dekode gelang","reverseMode":"Bekerja terbalik","smdMode":"Dekode SMD","bandCount":"Jumlah gelang","bandCount3":"3 gelang","bandCount4":"4 gelang","bandCount5":"5 gelang","bandCount6":"6 gelang","selectBand":"Pilih gelang","colorPalette":"Palet warna","bandLabel":"Gelang","resistance":"Resistansi","tolerance":"Toleransi","range":"Rentang yang diizinkan","temperatureCoefficient":"Koefisien suhu","noTempco":"Tidak dikodekan","targetResistance":"Resistansi target dalam ohm","targetHint":"Masukkan angka seperti 4700.","targetUnit":"ohm","toleranceChoice":"Toleransi target","tolerance20":"20 persen","tolerance10":"10 persen","tolerance5":"5 persen","tolerance2":"2 persen","tolerance1":"1 persen","smdCode":"Penandaan SMD","smdHint":"Gunakan 472 untuk 4,7 kΩ atau 4R7 untuk 4,7 Ω.","decodeSmd":"Dekode penandaan","valueUnit":"Ω","ohms":"ohm","kiloohms":"kiloohm","megaohms":"megaohm","gigaohms":"gigaohm","minValue":"Minimum","maxValue":"Maksimum","actualValue":"Nilai terdekode","requestedValue":"Nilai yang diminta","status":"Status","statusReady":"Siap dibaca","statusCheck":"Nilai terdekat yang dapat dibuat","statusInvalid":"Kombinasi tidak valid","orientationNote":"Petunjuk arah: letakkan gelang toleransi yang agak berjauhan di kanan. Emas dan perak bukan gelang angka penting.","reverseNote":"Mode balik memilih nilai yang dapat dibuat dan menampilkan kode warna yang dihasilkan.","smdNote":"Tampilan ringkas ini membaca penandaan SMD, tetapi kode tersebut tidak memuat toleransi.","colorBlack":"Hitam","colorBrown":"Cokelat","colorRed":"Merah","colorOrange":"Oranye","colorYellow":"Kuning","colorGreen":"Hijau","colorBlue":"Biru","colorViolet":"Ungu","colorGray":"Abu-abu","colorWhite":"Putih","colorGold":"Emas","colorSilver":"Perak"},
};
