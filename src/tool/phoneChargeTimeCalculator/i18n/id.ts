import type { ToolLocaleContent } from '../../../types';
import type { PhoneChargeTimeCalculatorUI } from '../ui';
import { createPhoneChargeTimeCalculatorContent } from './createContent';

const ui: PhoneChargeTimeCalculatorUI = {
  capacityLabel: 'Kapasitas baterai', capacityUnit: 'mAh', capacityHint: 'Gunakan nilai dari spesifikasi ponsel.',
  currentLabel: 'Daya saat ini', targetLabel: 'Daya tujuan', percentUnit: '%', powerLabel: 'Daya pengisi daya', powerUnit: 'W',
  efficiencyLabel: 'Efisiensi perkiraan', efficiencyUnit: '%', efficiencyHint: 'Termasuk kehilangan konversi dan panas.',
  statusEmpty: 'Masukkan detail ponsel dan pengisi daya.', statusReady: 'Diperbarui saat Anda mengetik.', statusError: 'Periksa nilai yang ditandai.',
  resultTitle: 'Perkiraan waktu hingga tujuan', energyLabel: 'Energi yang masih diperlukan', energyUnit: 'Wh', fromCurrentCharge: 'dari daya saat ini', startNowLabel: 'Jika dimulai sekarang mencapai',
  scenarioTitle: 'Skenario pengisi daya referensi', scenarioAt: 'ponsel dan rentang daya yang sama', assumptionsTitle: 'Asumsi',
  assumptionsText: 'Menggunakan tegangan baterai nominal {voltage} V, efisiensi {efficiency}% dan sekitar {taper}% tambahan perlambatan di atas 70%. Ponsel Anda mungkin mengisi daya secara berbeda.',
  errorCapacity: 'Masukkan kapasitas baterai di atas nol.', errorCurrent: 'Daya saat ini harus antara 0 dan 100%.', errorTarget: 'Daya tujuan harus antara 1 dan 100%.',
  errorTargetOrder: 'Daya tujuan harus lebih tinggi daripada daya saat ini.', errorPower: 'Masukkan daya di atas nol.', errorEfficiency: 'Efisiensi harus antara 50% dan 100%.',
  targetMarker: 'tujuan', chargeProgressLabel: 'Rentang pengisian', hourUnit: 'j', minuteUnit: 'mnt',
};

const faq = [
  { question: 'Bisakah waktu pengisian dihitung hanya dari persentase baterai?', answer: 'Tidak. Persentase yang sama mewakili energi yang berbeda pada baterai kecil dan besar. Kalkulator juga membutuhkan kapasitas, daya yang sampai ke ponsel, dan perkiraan efisiensi.' },
  { question: 'Mengapa ponsel saya kadang membutuhkan waktu lebih lama dari perkiraan?', answer: 'Ponsel dapat mengurangi daya saat tingkat baterai tinggi, perangkat panas, kabel atau protokol membatasi pengisian, atau ponsel sedang digunakan. Hasilnya adalah perkiraan untuk perencanaan, bukan pengukuran langsung.' },
  { question: 'Haruskah saya memasukkan daya pengisi daya atau daya yang diterima ponsel?', answer: 'Masukkan daya yang kemungkinan sampai ke ponsel jika Anda mengetahuinya. Jika hanya mengetahui rating pengisi daya, gunakan sebagai perkiraan maksimum dan perkirakan waktu nyata yang lebih lama.' },
];

const howTo = [
  { name: 'Masukkan kapasitas baterai', text: 'Cari kapasitas baterai pada spesifikasi ponsel dan masukkan dalam mAh. Jangan menggantinya dengan kapasitas power bank karena tegangan dan kehilangan konversinya berbeda.' },
  { name: 'Atur rentang pengisian', text: 'Masukkan persentase saat ini dan persentase yang diinginkan. Pengisian dari 20% ke 50% menghasilkan waktu yang berbeda dari pengisian penuh.' },
  { name: 'Tambahkan daya dan efisiensi', text: 'Masukkan daya dalam watt atau daya pengisian yang benar-benar diterima ponsel jika diketahui. Pertahankan efisiensi bawaan tanpa pengukuran Anda sendiri.' },
  { name: 'Bandingkan skenario', text: 'Bandingkan hasil dengan referensi 5 W, 15 W, dan 30 W untuk menentukan apakah pengisi daya cukup untuk waktu yang tersedia.' },
];

const seo = [
  { type: 'title' as const, text: 'Hitung waktu pengisian daya ponsel', level: 2 as const },
  { type: 'paragraph' as const, html: 'Gunakan kalkulator waktu pengisian ponsel ini ketika Anda ingin mengetahui apakah baterai mencapai tingkat yang berguna sebelum berangkat, bepergian, atau melakukan panggilan panjang. Masukkan kapasitas baterai, persentase saat ini, tujuan, daya pengisi daya, dan efisiensi. Hasilnya memperkirakan menit dan energi untuk pengisian tersebut, sehingga Anda dapat membandingkan waktu yang tersedia dengan pengisi daya yang lebih lambat atau lebih cepat.' },
  { type: 'title' as const, text: 'Data yang perlu dimasukkan', level: 2 as const },
  { type: 'list' as const, items: ['Kapasitas: gunakan kapasitas ponsel dalam mAh, bukan kapasitas yang tercetak pada power bank.', 'Tingkat saat ini dan tujuan: jelaskan pengisian yang benar-benar dibutuhkan; tujuan harus lebih tinggi dari tingkat saat ini.', 'Daya dan efisiensi: gunakan daya yang sampai ke ponsel jika diketahui. Jika tidak, daya pengisi daya hanyalah batas atas.'] },
  { type: 'title' as const, text: 'Cara membaca hasil', level: 2 as const },
  { type: 'paragraph' as const, html: 'Angka utama adalah perkiraan waktu dari persentase saat ini ke tujuan. Energi yang tersisa menyatakan pengisian yang sama dalam watt-jam, sedangkan batang referensi menunjukkan perubahan pada 5 W, 15 W, dan 30 W. Jika waktu Anda tidak cukup, turunkan tujuan atau gunakan pengisi daya dan kabel yang benar-benar dapat digunakan ponsel pada daya lebih tinggi.' },
  { type: 'title' as const, text: 'Mengapa pengisian melambat mendekati 100%', level: 2 as const },
  { type: 'paragraph' as const, html: 'Ponsel biasanya tidak mengisi daya dengan watt yang sama dari kosong hingga penuh. Saat baterai mendekati tingkat tinggi, pengendali pengisian dapat mengurangi arus untuk mengelola panas dan beban baterai. Karena itu, perkiraan dari 20% ke 80% sering lebih berguna untuk perencanaan daripada perhitungan linear hingga 100%. Untuk tujuan di atas 70%, kalkulator menambahkan sedikit toleransi perlambatan.' },
  { type: 'title' as const, text: 'Perkiraan: yang tidak dapat dideteksi kalkulator', level: 2 as const },
  { type: 'list' as const, items: ['Kalkulator tidak dapat membaca model ponsel, kesehatan baterai, protokol, kabel, suhu, penggunaan, atau daya pengisian saat ini.', 'Kalkulator tidak mendiagnosis baterai yang aus dan tidak menyatakan kompatibilitas pengisian cepat. Untuk jawaban yang tepat, ukur konfigurasi yang sama dalam situasi nyata.'] },
];

export const content: ToolLocaleContent<PhoneChargeTimeCalculatorUI> = createPhoneChargeTimeCalculatorContent({ locale: 'id', slug: 'kalkulator-waktu-pengisian-ponsel', title: 'Kalkulator Waktu Pengisian Ponsel', description: 'Perkirakan waktu yang dibutuhkan ponsel untuk mencapai persentase baterai tujuan berdasarkan kapasitas, daya saat ini, daya pengisi daya, dan efisiensi.', faq, howTo, seo, ui });
