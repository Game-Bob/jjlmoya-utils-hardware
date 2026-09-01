import { makeLocaleContent } from "../locale-content";

export const content = makeLocaleContent({
  slug: "kalkulator-lebar-jejak-impedansi-pcb",
  title: "Pemeriksa Lebar Jejak dan Impedansi PCB",
  description:
    "Periksa lebar tembaga termal, penurunan tegangan, rugi daya, dan perkiraan impedansi terkontrol berdasarkan lapisan serta susunan PCB.",
  ui: {
    metricLabel: "Metrik",
    imperialLabel: "Imperial",
    steadyLabel: "Arus kontinu",
    pulseLabel: "Pulsa berulang",
    currentProfileTitle: "Profil arus",
    steadyCurrentLabel: "Arus kontinu",
    pulseCurrentLabel: "Arus puncak pulsa",
    pulseDurationLabel: "Durasi pulsa",
    dutyCycleLabel: "Siklus kerja",
    copperPathTitle: "Jalur tembaga",
    layerLabel: "Lapisan jejak",
    externalLabel: "Eksternal",
    internalLabel: "Internal",
    copperThicknessLabel: "Ketebalan tembaga",
    temperatureRiseLabel: "Kenaikan yang diizinkan",
    lengthLabel: "Panjang jejak",
    availableWidthLabel: "Lebar tersedia",
    signalGeometryTitle: "Geometri sinyal",
    targetImpedanceLabel: "Impedansi target",
    dielectricHeightLabel: "Dielektrik ke bidang referensi",
    dielectricConstantLabel: "Permitivitas relatif",
    thermalWidthTitle: "Lebar termal minimum",
    availableWidthTitle: "Ruang setelah lebar termal",
    impedanceTitle: "Impedansi pada lebar termal",
    voltageDropTitle: "Penurunan tegangan pada puncak",
    powerLossTitle: "Rugi daya tembaga",
    pulseEnergyTitle: "Energi tiap pulsa",
    statusEmpty: "Masukkan kondisi jejak untuk memulai.",
    statusInvalid:
      "Gunakan nilai positif dan jaga kenaikan suhu serta siklus kerja dalam batas.",
    statusReady:
      "Tiga pemeriksaan aktif: lebar termal, rugi listrik, dan impedansi.",
    externalModel: "Lapisan eksternal memakai microstrip",
    internalModel: "Lapisan internal memakai stripline",
    thermalBadge: "Menunggu kecocokan termal",
    impedanceBadge: "Menunggu pemeriksaan impedansi",
    widthFits: "Cukup dalam ruang tersedia",
    widthDoesNotFit: "Membutuhkan ruang routing lebih besar",
    impedanceClose: "dalam pemeriksaan 10%",
    impedanceFar: "di luar pemeriksaan 10%",
    resetLabel: "Atur ulang",
    presetTitle: "Muat contoh routing",
    presetLogic: "Rail daya 2 A",
    presetSignal: "Jejak logika 50 ohm",
    presetPulse: "Jalur pulsa 8 A",
    sceneLabel: "Perbandingan lebar termal, tersedia, dan impedansi jejak",
    sceneCaption: "Pilih kondisi jalur dan tembaga akan digambar otomatis.",
    referenceLineLabel: "Lebar target impedansi",
    thermalLineLabel: "Minimum termal",
    availableLineLabel: "Koridor tersedia",
    modelNote: "Lapisan mengubah pelepasan panas dan geometri medan.",
  },
  seo: [
    { type: "title", text: "Periksa jejak PCB sebelum routing", level: 2 },
    {
      type: "paragraph",
      html: "Jejak dapat cukup lebar untuk membawa arus tetapi tetap salah untuk sinyal dengan impedansi terkontrol. Kalkulator jejak PCB ini menampilkan kedua keputusan bersama: menentukan ukuran tembaga untuk kenaikan suhu tertentu, mengukur dampak listriknya, dan memeriksa geometri sinyal secara terpisah.",
    },
    {
      type: "paragraph",
      html: "Masukkan arus yang benar-benar dibawa jalur, bukan hanya rating catu daya di dekatnya. Pada jalur kontinu 2 A dengan tembaga eksternal 35 µm dan kenaikan 10 °C, model termal meminta konduktor lebih lebar daripada jejak logika kecil. Lebar yang sama kemudian menghasilkan resistansi, penurunan tegangan, dan rugi daya untuk ditinjau.",
    },
    {
      type: "title",
      text: "Termal dan impedansi menjawab pertanyaan berbeda",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Pemeriksaan termal memakai hubungan empiris I = k × ΔT^0.44 × A^0.725, dengan A sebagai penampang tembaga dalam mil persegi dan k berbeda untuk lapisan eksternal serta internal. Dalam mode pulsa, alat memakai arus puncak dikalikan akar kuadrat siklus kerja sebagai pendekatan RMS untuk pemanasan berulang. Ini tidak memodelkan lonjakan tunggal, medan via, atau bidang pendingin.",
    },
    {
      type: "list",
      items: [
        "Gunakan ketebalan tembaga akhir dari pabrik, bukan hanya berat foil nominal.",
        "Gunakan kenaikan suhu terkecil yang diizinkan saat komponen atau isolasi sensitif terhadap panas.",
        "Anggap margin ruang negatif sebagai konflik routing.",
        "Jika lebar impedansi dan termal berbeda, tentukan apakah jalur itu untuk daya, sinyal, atau dua tujuan desain terpisah.",
      ],
    },
    { type: "title", text: "Cara membaca adegan jejak", level: 3 },
    {
      type: "paragraph",
      html: "Pita tembaga solid adalah lebar termal minimum. Pita pucat adalah koridor yang tersedia pada layout. Garis referensi putus-putus menunjukkan lebar yang mencapai target impedansi dengan asumsi stackup yang dimasukkan. Panel hasil juga menunjukkan impedansi pada lebar termal agar perubahan keputusan arus terlihat.",
    },
    {
      type: "title",
      text: "Yang harus diverifikasi sebelum fabrikasi",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Persamaan impedansi nominal tidak mengetahui ketebalan dielektrik akhir, kadar resin, profil etsa, solder mask, tembaga di sebelahnya, atau toleransi. IPC-2152 juga mengaitkan ukuran konduktor dengan konstruksi papan dan penyebaran panas. Gunakan halaman ini untuk membingkai diskusi teknik, lalu konfirmasi stackup pabrik dengan field solver atau test coupon.",
    },
    {
      type: "tip",
      title: "Hasil pemeriksaan bukan persetujuan fabrikasi",
      html: "Simpan pemeriksaan termal, penurunan tegangan, dan impedansi sebagai catatan terpisah. Konfirmasi via, penyempitan, bidang, suhu sekitar, perilaku pulsa, jarak rambat, dan toleransi pabrik sebelum melepas geometri tembaga.",
    },
  ],
  faqTitle: "Pertanyaan tentang lebar dan impedansi jejak PCB",
  faq: [
    {
      question: "Haruskah saya memasukkan arus rata-rata atau arus puncak?",
      answer:
        "Untuk jalur kontinu gunakan arus kontinu. Dalam mode pulsa berulang masukkan arus puncak, durasi, dan siklus kerja agar pemeriksaan termal memakai pendekatan RMS. Inrush sekali tetap membutuhkan tinjauan transien.",
    },
    {
      question: "Mengapa jejak internal membutuhkan lebih banyak tembaga?",
      answer:
        "Model termal empiris cepat memakai konstanta yang lebih rendah untuk lapisan internal karena tembaga yang tertanam biasanya membuang panas lebih buruk daripada jejak luar. Konstruksi papan nyata dapat mengubah hasil.",
    },
    {
      question: "Apa arti lebar tersedia?",
      answer:
        "Masukkan koridor yang dapat dialokasikan layout untuk jejak akhir. Margin ruang negatif berarti lebar termal minimum melebihi koridor dan membutuhkan ruang lebih besar, tembaga lebih tebal, jalur paralel, atau target suhu lain.",
    },
    {
      question: "Apakah ini menghitung jejak PCB 50 ohm yang sebenarnya?",
      answer:
        "Alat ini memperkirakan impedansi nominal microstrip atau stripline dari lebar, ketebalan tembaga, tinggi dielektrik, dan permitivitas relatif. Pabrik harus mengonfirmasi geometri akhir dan toleransi sebelum rilis impedansi terkontrol.",
    },
    {
      question: "Mengapa penurunan tegangan dihitung pada arus puncak?",
      answer:
        "Itu menampilkan penurunan sesaat I kali R terburuk dari pulsa. Energi pulsa memakai I²R kali durasi, sedangkan lebar termal memakai pendekatan RMS berulang.",
    },
  ],
  bibliographyTitle: "Referensi desain PCB",
  howTo: [
    {
      name: "Jelaskan perilaku arus",
      text: "Pilih arus kontinu atau pulsa berulang lalu isi profil arus.",
    },
    {
      name: "Masukkan asumsi stackup akhir",
      text: "Pilih lapisan, ketebalan tembaga, kenaikan suhu, dan geometri dielektrik.",
    },
    {
      name: "Ambil keputusan routing",
      text: "Bandingkan minimum termal, koridor tersedia, dan target impedansi lalu verifikasi stackup akhir dengan pabrik.",
    },
  ],
});
