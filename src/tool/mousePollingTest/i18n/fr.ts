import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestRatonUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-taux-sondage-souris';
const title = 'Test du Taux de Sondage de la Souris en Ligne';
const description =
  "Vérifiez les Hz réels de votre souris. Testez si votre souris gaming fonctionne à 1000Hz ou plus avec notre outil professionnel.";

const faqData = [
  {
    question: "Qu'est-ce que le taux de sondage d'une souris ?",
    answer:
      "C'est la fréquence à laquelle la souris communique sa position à l'ordinateur, mesurée en Hz. Un taux de 1000Hz signifie que la souris envoie des données toutes les millisecondes, offrant un mouvement beaucoup plus fluide.",
  },
  {
    question: "Pourquoi mon test n'atteint pas 1000Hz en continu ?",
    answer:
      "Le navigateur ne peut mesurer le taux de sondage que lorsque la souris est en mouvement. Si vous la déplacez lentement ou que votre CPU est très occupé, la mesure peut fluctuer. Faites des cercles rapides pour obtenir le vrai pic maximum.",
  },
  {
    question: 'Est-il toujours préférable d\'avoir le taux de sondage le plus élevé possible ?',
    answer:
      "Généralement oui pour le gaming (1000Hz ou plus), car cela réduit la latence. Cependant, des taux extrêmement élevés (4000Hz ou 8000Hz) consomment beaucoup de ressources CPU et tous les jeux n'y sont pas optimisés.",
  },
  {
    question: "Comment le taux de rafraîchissement du moniteur affecte-t-il la souris ?",
    answer:
      "Avec un moniteur 144Hz ou 240Hz, un faible taux de sondage (125Hz) donnera l'impression que le pointeur saccade. Pour les moniteurs haute fréquence, il est indispensable d'utiliser au moins 500Hz ou 1000Hz.",
  },
];

const howToData = [
  {
    name: 'Préparer la zone de test',
    text: "Placez le curseur dans la zone de capture de l'outil.",
  },
  {
    name: 'Déplacer la souris rapidement',
    text: "Effectuez des mouvements circulaires rapides et amples. L'outil calculera les intervalles entre chaque événement mousemove envoyé par le matériel.",
  },
  {
    name: 'Observer le graphique de stabilité',
    text: "Vérifiez si la ligne de Hz est constante ou présente des chutes brusques, ce qui pourrait indiquer des interférences sur les souris sans fil ou des problèmes de CPU.",
  },
  {
    name: 'Analyser le temps de réponse',
    text: "Vérifiez le Délai moyen en millisecondes. Une bonne souris gaming doit se maintenir proche de 1ms de latence moyenne.",
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<TestRatonUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Guide Complet sur le Taux de Sondage', level: 2 },
    {
      type: 'paragraph',
      html: "Lorsque vous déplacez physiquement votre souris sur le tapis, ce mouvement analogique doit être converti en signaux numériques compréhensibles par votre ordinateur. Le <strong>Taux de Sondage</strong> (Polling Rate) est la fréquence à laquelle la souris envoie sa position au PC, mesurée en Hertz (Hz).",
    },
    { type: 'title', text: 'Niveaux de Taux de Sondage et Leurs Usages', level: 3 },
    {
      type: 'paragraph',
      html: "<strong>125 Hz</strong> — La souris communique toutes les 8 ms. Parfait pour un usage bureautique, mais saccadé sur un écran 144Hz. <strong>1000 Hz</strong> — L'étalon-or du gaming : communication toutes les 1 ms, mouvement fluide. <strong>8000 Hz</strong> — Technologie de pointe (Razer, Logitech), nécessite un processeur puissant.",
    },
    { type: 'title', text: 'Pourquoi mes Hz fluctuent-ils ?', level: 3 },
    {
      type: 'paragraph',
      html: "Tout à fait normal. La plupart des souris modernes ont un taux de sondage dynamique pour économiser l'énergie. En déplaçant lentement la souris, elle envoie moins de rapports car il y a moins de nouvelles données. Seuls des mouvements rapides et continus poussent le capteur à son vrai pic maximum.",
    },
    { type: 'title', text: 'Taux de Sondage vs DPI : La Grande Confusion', level: 3 },
    {
      type: 'paragraph',
      html: "<strong>DPI (Dots Per Inch)</strong> est la sensibilité : combien de pixels le curseur parcourt par pouce de déplacement physique. <strong>Hz (Taux de Sondage)</strong> est la fréquence de mise à jour : avec quelle fluidité et actualité ce mouvement est reporté. Les deux paramètres sont indépendants et complémentaires.",
    },
  ],
  ui: {
    badge: 'Test Souris',
    title: 'Polling Rate Checker',
    description: 'Déplacez la souris en cercles rapides pour mesurer les Hz.',
    labelAvg: 'Moyenne',
    labelPeak: 'Pic',
    placeholder: 'Déplacez la souris ici',
  },
};
