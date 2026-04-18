import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'donanim-tani-araclari',
  title: 'Donanım Test ve Tanı Araçları',
  description: 'Ücretsiz çevrimiçi araçlarla çevre birimlerinizin ve ekranınızın durumunu doğrulayın. Ölü piksel, klavye ghosting, gamepad drift ve pil sağlığını test edin.',
  seo: [
    {
      type: 'title',
      text: 'Çevre Birimi ve Ekran Tanısı: Yazılım Olmadan Hassasiyet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Donanım bakımı artık ağır tanı uygulamaları kurmayı gerektirmiyor. Bu bölümde, bileşenlerinizi yerel web API\'leri kullanarak test etmek için tasarlanmış <strong>ücretsiz çevrimiçi araçlar</strong> sunuyoruz. LED panel yorgunluğunu tespit etmekten oyun çevre birimlerinin polling rate\'ini ölçmeye kadar standart test protokollerini uygulayarak ekipmanınızın gerçek durumunu bilmenizi sağlıyoruz.',
    },
    {
      type: 'paragraph',
      html: 'Araçlarımız yeni bir ürün satın alan ve bütünlüğünü doğrulamak isteyen kullanıcılar veya gecikme ya da doğruluk hatalarını tespit ederek rekabetçi kurulumlarını optimize etmek isteyen oyuncular için idealdir.',
    },
    {
      type: 'title',
      text: 'Görsel Sağlık: Ölü Piksel Testi ve Onarımı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kusurlu piksellerle dolu bir monitör kullanıcı deneyiminizi mahvedebilir. <strong>Piksel testimiz</strong> ölü pikselleri (siyah) veya takılı pikselleri (bir renge kilitli) tanımlamak için tam ekranda saf renkler görüntüler. Ayrıca hızlı kromatik frekans değişimleri yoluyla alt pikselleri serbest bırakmak için tasarlanmış bir stroboskop optimize aracı da ekliyoruz.',
    },
    {
      type: 'title',
      text: 'Giriş Kontrolörleri: Klavye (Ghosting) ve Fare (Hz)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Daktilograflar ve FPS oyuncuları için klavye ve fare hayati önem taşır. <strong>Ghosting testi</strong> klavyenizin aynı anda kaç tuşu kaydedebileceğini (Rollover) doğrularken <strong>Polling Rate</strong> aracımız farenizin Hertz (Hz) değerini gerçek zamanlı ölçer ve PC\'nize kararlı, yüksek hızlı bağlantı sağlar.',
    },
    {
      type: 'title',
      text: 'Oyun ve Konsollar: Joy-Con Drift ve Tetik Testi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Joystick aşınması (drift olarak bilinir) modern PS5, Xbox ve Switch kontrolörlerindeki en yaygın arızadır. <strong>Kontrolör simülatörümüz</strong> X/Y eksenlerini kayan nokta hassasiyetiyle analiz ederek çubuklarınızdaki istenmeyen hareketleri veya ölü bölge eksikliğini görselleştirmenizi sağlar. Ayrıca tarayıcı aracılığıyla dokunsal yanıt ve Dual-Rumble motor titreşimi test etmenize olanak tanır.',
    },
    {
      type: 'title',
      text: 'Güç ve Ses: Pil Sağlığı ve Saf Tonlar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lityum piller her şarj döngüsünde bozunur. <strong>Pil sağlığı tahmin aracımız</strong> mevcut döngüleri ve artık kapasiteyi analiz ederek dizüstü bilgisayarınızda veya mobil cihazınızda ne kadar kullanışlı ömür kaldığını tahmin eder. Öte yandan <strong>ton jeneratörümüz</strong> 20Hz\'den 20kHz\'e frekansları tarayarak hoparlör ve kulaklıkları denetlemenizi ve yüksek aralıklardaki bozulma veya işitme kaybını tespit etmenizi sağlar.',
    },
    {
      type: 'title',
      text: 'Kromatik Kalibrasyon ve Renk Uzayları: Profesyonel Görsel Hassasiyet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Monitörler bozunur. Fabrika renk sıcaklığı (Kelvin), genellikle 6500K = D65 Gün Işığı, zamanla değişir. Grafik tasarımcılar, fotoğrafçılar ve editörler için bu felaket anlamına gelir: yanlış kalibre edilmiş bir monitörde renkleri düzenlersiniz, çalışma diğer ekranlarda farklı görünür ve müşteri reddeder. Derin kalibrasyon donanım gerektirir (€300–1000 kolorimetri), ancak <strong>renk uzayı testimiz</strong> en azından monitörünüzün tutarlı bir gama aralığını (genellikle 2,2) koruyup korumadığını denetlemenizi sağlar.',
    },
    {
      type: 'paragraph',
      html: 'sRGB vs. Adobe RGB vs. P3\'ü anlamak da kritiktir. sRGB web standardıdır (kullanımın %99\'u için yeterli), ancak Adobe RGB %40 daha fazla rengi kapsar (profesyoneller için gerekli). Yalnızca %70 sRGB kapsayan bir monitör yetersiz renk doygunluğu üretir. Araçlarımız profesyonel ekipmana €1000 yatırmadan denetlemenizi sağlar.',
    },
    {
      type: 'title',
      text: 'Donanım Performansı: Kıyaslama ve Darboğaz Tespiti',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Oyuncular GPU ve CPU dengesiz olduğunda "darboğaz" dan bahseder. Zayıf bir CPU tarafından beslenen güçlü bir GPU asla potansiyeline ulaşamaz. Kavram basittir: GPU, CPU\'nun bitmesini bekliyorsa bu israftır. Test araçları tanı koymaya yardımcı olur: Sorunum GPU mu yoksa CPU mu? Yükseltme gerekiyor mu? Yoksa video ayarlarını düşürmek yeterli mi?',
    },
    {
      type: 'paragraph',
      html: 'Gecikme testleri de rekabetçi oyunculuk için kritiktir. Giriş-ekran gecikmesi (bir düğmeye basmaktan ekranda görmek) iyi bir kurulumda 20–50ms, yavaş bir kurulumda 200+ms olabilir. Rekabetçi oyunlarda (FPS, dövüş oyunları) 50ms zafer ile yenilgi arasındaki farktır. Bu yüzden profesyonel oyuncular 240Hz monitörlere, 8000Hz farelere ve optimize edilmiş PC\'lere yatırım yapar.',
    },
    {
      type: 'title',
      text: 'Yaşam Döngüsü ve Onarılabilirlik: Dijital Haklar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '"Onarılabilirlik" 2026\'da giderek daha önemli hale geliyor. "Onarılabilir" bir telefon 6 yıl dayanır; "mühürlü" olan 2–3 yılda sona erer. Yükseltilebilir RAM\'lı dizüstü bilgisayar bir yatırımdır; lehimli RAM\'lı olan ise tek kullanımlıktır. Uyguladığımız tanı araçları Onarım Hakkı hareketiyle uyumludur: cihazlarınızı atmadan önce tam olarak neyin bozuk olduğunu bilmenizi istiyoruz.',
    },
    {
      type: 'paragraph',
      html: 'Araçlarımızla arızayı belgelemek (başarısız piksel testi ekran görüntüsü, drift eden kontrolör videosu) garanti talepleri için kanıttır. Birçok kullanıcı belgelemediği, tanı koymadığı, vazgeçip yeni satın aldığı için para kaybeder. Araçlarımız teknik bilgiyi demokratikleştirir: artık kanıtla tartışabilirsiniz.',
    },
    {
      type: 'title',
      text: 'Giyilebilir Donanımın Geleceği 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '2026\'da işletim sistemi ile tarayıcı arasındaki sınır bulanıklaştı. <strong>Web Serial ve WebUSB</strong> gibi standartlar sayesinde daha önce belirli sürücüler gerektiren tanılar gerçekleştirebiliyoruz. Bu araçlar onarım hakkı ve kullanıcıların kendi cihazları üzerindeki teknik egemenliği için bir hareketin parçasıdır.',
    },
  ],
};
