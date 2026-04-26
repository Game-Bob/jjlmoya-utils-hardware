import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestTecladoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'klavye-testi-online';
const title = 'Çevrimiçi Klavye Testi ve Ghosting Belirleyici';
const description = 'Klavyenizin Ghosting veya Key Jamming sorunları olup olmadığını kontrol edin. Gerçek zamanlı tuş görselleştirici ve N-Key Rollover sayacı.';

const faqData = [
  {
    question: 'Klavyede Ghosting nedir?',
    answer: 'Aynı anda birden fazla tuşa bastığınızda bilgisayarın bazılarının algılamaması durumunda ortaya çıkan bir hatadır. Klavyenin belirli kombinasyonları işleyemeyen dahili elektrik matrisindeki sınırlamalardan kaynaklanır.',
  },
  {
    question: 'N-Key Rollover (NKRO) ne anlama gelir?',
    answer: 'NKRO, klavyenin aynı anda bastığınız kadar çok tuşu hatasız bir şekilde algılayabileceği anlamına gelir. Üst düzey mekanik ve oyuncu klavyelerinde yaygın olan premium bir özelliktir.',
  },
  {
    question: 'Neden 3 tuşa aynı anda bastığımda klavyem hata veriyor?',
    answer: 'Çoğu ucuz ofis klavyesinde 2 veya 3 tuşlu rollover bulunur. Bu, yazı yazmak için yeterlidir ancak yoğun oyun oynama veya karmaşık kısayollar için yetersizdir.',
  },
  {
    question: 'Tepki vermeyen bir tuşu nasıl düzeltebilirim?',
    answer: 'Test tuş basımını algılamıyorsa, anahtarın altındaki kir, elektrik kontağı hatası veya hasarlı bir kablo olabilir. Vazgeçmeden önce klavyeyi basınçlı hava ile temizlemeyi deneyin.',
  },
];

const howToData = [
  {
    name: 'Görselleştiriciye odaklanın',
    text: 'Tarayıcının odaklandığından ve donanım tuş basımlarını yakalayabildiğinden emin olmak için sayfanın herhangi bir yerine tıklayın.',
  },
  {
    name: 'Tepki testini çalıştırın',
    text: 'Klavyenizdeki her tuşa tek tek basın. Ekranda ilgili tuş, doğru çalışıyorsa yeşil renkte yanacaktır.',
  },
  {
    name: 'Ghosting kontrolü yapın',
    text: 'Yaygın oyun tuşlarına (W, A, S, D, Boşluk, Shift) hepsine birden basarak kilitlenip kilitlenmediklerini veya hepsinin yanıp yanmadığını görün.',
  },
  {
    name: 'Maksimum rollover\'ı doğrulayın',
    text: 'İki elinizle mümkün olduğunca çok tuşa aynı anda basmaya çalışın ve maksimum eşzamanlı tuş basımı sayacını izleyin.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<TestTecladoUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Çevrimiçi Klavye Testi: Ghosting ve N-Key Rollover\'ı Belirleyin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Klavye teşhisi için etkileşimli bir araç. Donanımınızda ghosting, kilitlenme veya rollover sınırlamaları olup olmadığını kontrol edin. Tüm klavye türleri desteğiyle görsel olarak net.',
    },
    {
      type: 'title',
      text: 'Ghosting Nedir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ghosting, belirli bir tuş kombinasyonuna bastığınızda ve klavyenin yapmadığınız bir hayalet tuş basımını algılamasıyla oluşur. Bu, dahili devre matrisindeki sınırlamalardan kaynaklanır.',
    },
    {
      type: 'title',
      text: 'N-Key Rollover ve Maksimum Rollover',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>NKRO (N-Key Rollover):</strong> Tüm basılı tuşların aynı anda algılanmasını sağlar. <strong>6KRO:</strong> Eski USB standart sınırı. <strong>2-3KRO:</strong> Ucuz klavyelerde yaygındır, yazı yazmak için yeterlidir.',
    },
    {
      type: 'title',
      text: 'Mekanik ve Membran Klavyeler',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mekanik klavyeler, izole diyotlara sahip bireysel anahtarlara sahiptir ve bu da ghosting\'i ortadan kaldırır. Membran klavyeler iletken yolları paylaşır, bu da eşzamanlı kombinasyonlarda hatalara neden olur.',
    },
  ],
  ui: {
    badge: 'Giriş Testi',
    title: 'Klavye Testi ve Ghosting Belirleyici',
    description: 'N-Key Rollover\'ı doğrulayın ve arızalı tuşları belirleyin.',
    simultaneousLabel: 'Eşzamanlı',
    eventLogLabel: 'Olay Günlüğü',
    resetBtn: 'Sıfırla',
  },
};
