import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ToneGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ton-frequenz-generator-online';
const title = 'Online Ton und Frequenzgenerator';
const description =
  'Erzeugen Sie Sinus-, Rechteck-, Dreieck- und Sägezahnwellen. Testen Sie Ihre Lautsprecher, Kopfhörer oder Subwoofer mit Frequenzen von 20Hz bis 20kHz.';

const faqData = [
  {
    question: 'Wofür wird ein Frequenzgenerator verwendet?',
    answer:
      'Er wird verwendet, um den Frequenzgang von Lautsprechern und Kopfhörern zu testen, unerwünschte Resonanzen in Möbeln zu erkennen, Lücken in Ihrem Hörbereich zu finden oder sogar bei Tinnitus durch Notch-Therapie zu helfen.',
  },
  {
    question: 'Was ist eine Sinuswelle im Vergleich zu einer Rechteckwelle?',
    answer:
      'Eine Sinuswelle ist ein reiner Ton ohne Oberwellen (glatt und rund). Eine Rechteckwelle ist reich an ungeraden Oberwellen und klingt viel aggressiver oder digitaler. Die Dreieckwelle liegt dazwischen und ist nützlich für die Audiosynthese.',
  },
  {
    question: 'Kann ich meine Lautsprecher mit diesem Tool beschädigen?',
    answer:
      'Ja, wenn Sie sehr hohe Lautstärken bei extremen Frequenzen verwenden (insbesondere Bässe unter 30Hz oder Höhen über 15kHz). Beginnen Sie immer mit einer niedrigen Systemlautstärke und erhöhen Sie diese schrittweise.',
  },
  {
    question: 'Wie hoch ist der menschliche Hörbereich?',
    answer:
      'Theoretisch 20Hz bis 20.000Hz (20kHz). Mit zunehmendem Alter ist es jedoch normal, die Fähigkeit zu verlieren, Töne über 15kHz zu hören. Dieser Test kann Ihnen helfen, Ihre persönliche Obergrenze zu überprüfen.',
  },
];

const howToData = [
  {
    name: 'Wellenformtyp auswählen',
    text: 'Wählen Sie zwischen Sinus (rein), Rechteck, Dreieck oder Sägezahn, je nachdem, welche Art von Test Sie durchführen möchten.',
  },
  {
    name: 'Frequenz einstellen',
    text: 'Bewegen Sie den Schieberegler, um durch das hörbare Spektrum zu navigieren. Verwenden Sie die Shortcuts für 60Hz, 440Hz oder 1kHz, um schnell auf Referenzfrequenzen zuzugreifen.',
  },
  {
    name: 'Lautstärke kontrollieren',
    text: 'Stellen Sie sicher, dass die Lautstärke Ihrer Lautsprecher niedrig ist, bevor Sie auf Play drücken. Sie können die Verstärkung direkt über das Tool anpassen.',
  },
  {
    name: 'Reaktion analysieren',
    text: 'Achten Sie auf mögliche Verzerrungen oder Momente, in denen der Ton verschwindet. Dies deutet auf die physikalischen Grenzen Ihrer Audio-Hardware hin.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<ToneGeneratorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Alles über Frequenzen und Schallwellen', level: 2 },
    {
      type: 'paragraph',
      html: 'Schall ist reine Physik in Bewegung. Mit diesem Tool können Sie Schallwellen in Echtzeit manipulieren, von den tiefsten Bässen, die Sie in Ihrer Brust spüren können, bis hin zu den Ultraschall-Höhen, die nur Tiere wahrnehmen können.',
    },
    { type: 'title', text: 'Menschlicher Hörbereich und Presbyakusis', level: 3 },
    {
      type: 'paragraph',
      html: 'Ein gesundes menschliches Ohr nimmt Geräusche zwischen <strong>20Hz und 20kHz</strong> wahr. Mit zunehmendem Alter sinkt die Obergrenze: Die meisten Erwachsenen über 50 können Töne über 12kHz nicht mehr hören. Der 17,4kHz-Ton, bekannt als "Mückenton", ist ein klassischer Test, den typischerweise nur Teenager bestehen können.',
    },
    { type: 'title', text: 'Wellenformen und ihre Verwendung', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Sinus:</strong> reiner Ton ohne Oberwellen, wird in medizinischen Hörtests und zur Instrumentenkalibrierung verwendet. <strong>Rechteck:</strong> reich an ungeraden Oberwellen, klingt wie Retro-8-Bit-Konsolen. <strong>Sägezahn:</strong> enthält alle Oberwellen, die Basis für Synthesizer in der elektronischen Musik. <strong>Dreieck:</strong> Mittelpunkt zwischen Sinus und Rechteck -glatter als Rechteck, aber mit mehr harmonischem Gehalt als Sinus.',
    },
    { type: 'title', text: 'Lautsprechertest und Reinigung durch Vibration', level: 3 },
    {
      type: 'paragraph',
      html: 'Eine niederfrequente Welle (typischerweise <strong>165Hz</strong>) bei maximaler Lautstärke mit Rechteck- oder Sägezahnform zwingt die Lautsprechermembran zu heftigen Vibrationen, wodurch Wassertropfen, die im Gitter gefangen sind, mechanisch ausgestoßen werden. Spielen Sie extrem hohe Frequenzen nicht über längere Zeit bei maximaler Lautstärke ab: Auch wenn Sie sie nicht hören können, kann die Energie die Hochtöner Ihrer Ausrüstung beschädigen.',
    },
  ],
  ui: {
    badge: 'Audio-Generator',
    title: 'Frequenzgenerator',
    description: 'Erzeugen Sie reine Frequenzen für Audiotests.',
    freqLabel: 'Frequenz',
    preset60: '60Hz',
    preset440: '440Hz',
    preset1k: '1kHz',
    rangeMin: '20Hz (Sub-Bass)',
    rangeMax: '20kHz (Ultraschall)',
    waveLabel: 'Wellenform',
    waveSine: 'Sinus',
    waveSquare: 'Rechteck',
    waveSawtooth: 'Sägezahn',
    waveTriangle: 'Dreieck',
    volLabel: 'Lautstärke',
    btnPlay: 'TON ABSPIELEN',
    btnStop: 'STOPP',
  },
};
