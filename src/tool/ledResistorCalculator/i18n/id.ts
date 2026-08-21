import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedResistorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-resistor-led';
const title = 'Kalkulator resistor LED';
const description = 'Hitung resistor seri LED dari catu, tegangan maju, dan arus, lalu pilih nilai E12 atau E24 terdekat dengan daya yang aman.';

const faqData = [
  { question: 'Resistor apa untuk LED merah di pin Arduino 5 V?', answer: 'LED merah 5 mm tipikal pada 2,0 V dan 20 mA di 5 V butuh 150 ohm dan sekitar 60 mW di resistor. Cukup 125 mW atau 250 mW film logam. Banyak laci memakai 220 ohm: LED lebih redup dan lebih aman jika Vf nyata lebih rendah.' },
  { question: 'Bagaimana menghitung resistor LED?', answer: 'Kurangi tegangan maju dari catu, lalu bagi dengan arus dalam ampere. Untuk LED merah 2 V dan 20 mA di 5 V, (5 - 2) / 0,02 = 150 ohm.' },
  { question: 'Tegangan maju mana yang dipakai?', answer: 'Vf tipikal dari datasheet pada arus yang diinginkan. Chip warna di sini lot tipikal, bukan LED kamu. Patokan: 1,3 V inframerah, 2,0 V merah, 2,2 V kuning atau hijau, 3,2 V biru atau putih.' },
  { question: 'Kenapa E12 atau E24, bukan ohm persis?', answer: 'Resistor dijual dalam deret preferensi. E12 melangkah sekitar 20 persen, E24 sekitar 10. Kalkulator mengambil yang terdekat dan jika seri, yang lebih tinggi agar LED tidak kelebihan arus.' },
  { question: 'Boleh LED paralel berbagi satu resistor?', answer: 'Tidak. LED dengan Vf terendah mengambil hampir semua arus dan bisa terbakar. Rangkai seri atau beri tiap cabang resistor sendiri.' },
  { question: 'Kapan resistor seri tidak cukup?', answer: 'Jangan pakai satu resistor untuk pemancar 1 W, strip LED, rantai otomotif panjang, dan apa pun yang ingin arus stabil saat tegangan turun. Di situ perlu driver arus konstan. Resistor membatasi LED indikator di rail kaku, bukan sumber arus.' },
];

const howToData = [
  { name: 'Pilih warna LED', text: 'Sentuh dioda yang mirip bagian di bangku. Itu memuat Vf tipikal dan 20 mA indikator.' },
  { name: 'Pilih rail', text: 'Pakai Arduino 5 V atau 3,3 V MCU untuk pin logika, atau 9 V, 12 V, atau 24 V untuk panel.' },
  { name: 'Baca bagian di papan', text: 'Resistor menampilkan nilai beli, daya, dan pita. Buka datasheet hanya jika LED kamu beda.' },
  { name: 'Cek polaritas sebelum solder', text: 'Arus masuk anoda dan keluar katoda ke ground. Lihat datasheet jika jatuh di bawah 1 V atau resistor panas.' },
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

export const content: ToolLocaleContent<LedResistorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Kalkulator resistor seri LED', level: 2 },
    { type: 'paragraph', html: 'LED diskret adalah dioda yang dikendalikan arus. Resistor seri menetapkan arus itu dengan Ohm: <code>R = (Vs - n x Vf) / If</code>. Kalkulator ini menyelesaikannya di peramban, menempel E12 atau E24, mengecat pita, dan menyebut daya dengan dua kali ruang.' },
    { type: 'title', text: 'LED merah di pin Arduino 5 V', level: 3 },
    { type: 'paragraph', html: 'Orang mencari "resistor apa untuk LED merah 5 V". Vf tipikal 2,0 V pada 20 mA, jadi <code>(5 - 2) / 0,02 = 150 ohm</code> dan 60 mW di resistor. Beli 150 ohm, 125 mW atau 250 mW. 220 ohm dari laci juga jalan: arus turun ke sekitar 14 mA dan LED lebih redup, sering pas di pin status.' },
    { type: 'table', headers: ['Warna LED', 'Vf tipikal', 'If tipikal', 'Resistor pada 5 V'], rows: [['Inframerah', '1,3 V', '20 mA', '180 ohm'], ['Merah', '2,0 V', '20 mA', '150 ohm'], ['Kuning atau hijau', '2,2 V', '20 mA', '150 ohm'], ['Biru atau putih', '3,2 V', '20 mA', '91 ohm'], ['Ultraviolet', '3,4 V', '20 mA', '82 ohm']] },
    { type: 'title', text: 'Nilai preferensi E12 dan E24', level: 3 },
    { type: 'paragraph', html: 'Resistor mengikuti deret preferensi IEC. E12 set 10 persen umum: 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82 dan dekadenya. E24 mengisi 5 persen dengan 11, 13, 16, 20, 24, 30, 36, 43, 51, 62, 75 dan 91. Alat mengambil yang terdekat dan jika seri yang lebih tinggi agar LED lebih redup, bukan lebih panas.' },
    { type: 'title', text: 'Kapan resistor seri tidak cukup', level: 3 },
    { type: 'paragraph', html: 'Resistor bukan sumber arus. Ia menetapkan arus hanya untuk catu dan Vf yang dipilih. Jangan berbagi resistor antar LED paralel: Vf terendah menyedot arus. Jangan pakai satu resistor pada pemancar 1 W, strip LED, atau rantai 12 V otomotif panjang. Di situ perlu driver arus konstan. Prasetel warna adalah lot tipikal; Vf datasheet kamu pada arus nominal yang dihitung.' },
    { type: 'list', items: ['Jaga LED indikator dekat 10 mA sampai 20 mA kecuali datasheet mengizinkan lebih.', 'Beri setiap LED paralel resistor sendiri.', 'Jika jatuh di bawah 1 V, Vf kecil menggeser arus banyak.', 'Pada 12 V resistor sering minta 0,5 W, bukan film 125 mW.', 'Konfirmasi anoda, katoda, arus puncak, dan daya sebelum solder.'] },
    { type: 'tip', title: 'Vf tipikal bukan lot kamu', html: 'Chip merah, biru, dan putih adalah titik awal untuk indikator 5 mm. Ukur atau baca kurva pabrik jika rail 3,3 V, LED berdaya, atau bagian inframerah.' },
    { type: 'diagnostic', variant: 'warning', title: 'Resistor bukan sumber arus', html: 'Jika catu turun, Vf bergeser dengan suhu, atau beberapa LED paralel, arus bergerak. Pakai papan sebagai awal bangku, lalu ukur.' },
  ],
  ui: {
    colorHeader: 'LED',
    colorInfrared: 'IR',
    colorRed: 'Merah',
    colorOrange: 'Jingga',
    colorYellow: 'Kuning',
    colorGreen: 'Hijau',
    colorBlue: 'Biru',
    colorWhite: 'Putih',
    colorUv: 'UV',
    supplyHeader: 'Rail',
    supplyArduino: 'Arduino 5 V',
    supplyMcu: '3,3 V MCU',
    supply9: '9 V',
    supply12: '12 V',
    supply24: '24 V',
    supplyUnit: 'V',
    forwardHeader: 'Vf datasheet',
    forwardUnit: 'V',
    currentHeader: 'If datasheet',
    currentUnit: 'mA',
    countHeader: 'LED seri',
    seriesHeader: 'Deret preferensi',
    seriesE12: 'E12',
    seriesE24: 'E24',
    showDatasheet: 'Nilai datasheet',
    hideDatasheet: 'Sembunyikan datasheet',
    buyLabel: 'Bagian',
    powerLabel: 'Daya',
    seriesShort: 'Deret',
    statusTight: 'Tegangan sisa sedikit',
    statusHotter: 'Resistor akan panas',
    statusOverdriven: 'Arus tinggi',
    statusNoHeadroom: 'Catu tidak menyalakan LED',
    statusInvalid: 'Periksa masukan',
    supplyLabel: 'Catu',
    resistorLabel: 'Resistor',
    ledLabel: 'LED',
    groundLabel: 'GND',
    anodeLabel: 'A+',
    cathodeLabel: 'K-',
    note: 'Warna memakai Vf tipikal, bukan lot kamu. Jangan berbagi resistor antar LED paralel.',
  },
};
