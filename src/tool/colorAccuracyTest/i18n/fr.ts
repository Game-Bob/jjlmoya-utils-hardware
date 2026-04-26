import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpectrumCanvasUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-precision-couleur';
const title = 'Test de Précision des Couleurs: Spectrum Canvas';
const description =
  'Calibrez votre écran avec précision. Testez les espaces colorimétriques sRGB et DCI-P3, détectez les dérives chromatiques, mesurez la précision avec les métriques Delta E et générez des rapports de calibrage professionnels.';

const faqData = [
  {
    question: 'Qu\'est-ce que la précision des couleurs et pourquoi est-ce important ?',
    answer:
      'La précision des couleurs mesure la fidélité avec laquelle un écran reproduit les couleurs par rapport à une référence standard. Pour les designers, les photographes et les créateurs de contenu, des couleurs précises sont essentielles pour garantir que votre travail soit cohérent sur différents appareils.',
  },
  {
    question: 'Quelle est la différence entre le sRGB et le DCI-P3 ?',
    answer:
      'Le sRGB est l\'espace colorimétrique standard pour le web et les écrans grand public. Le DCI-P3 est une gamme de couleurs plus large utilisée dans le cinéma numérique et les écrans professionnels. Le DCI-P3 couvre environ 25 % de couleurs de plus que le sRGB.',
  },
  {
    question: 'Qu\'est-ce que le Delta E et comment est-il mesuré ?',
    answer:
      'Le Delta E (ΔE) est une mesure numérique de la différence de couleur perçue par l\'œil humain. Un Delta E inférieur à 1 est imperceptible, inférieur à 2 est très bon, inférieur à 4 est acceptable, et au-dessus de 4, cela devient notable. Notre test utilise les calculs Delta E CIE 1976.',
  },
  {
    question: 'Puis-je utiliser cet outil pour calibrer mon matériel ?',
    answer:
      'Cet outil fournit une référence de calibrage visuel et des mesures de précision. Pour un calibrage professionnel, vous devez combiner ces résultats avec des outils de calibrage matériel (colorimètres) et des logiciels dédiés comme ColorThink ou Datacolor SpyderCheckr.',
  },
  {
    question: 'Quels espaces colorimétriques sont testés ?',
    answer:
      'Nous testons le sRGB (standard), le DCI-P3 (cinéma) et la précision du point blanc via les illuminants standard D65 (6500K) et D93 (9300K). Le test comprend également la vérification de la correction gamma.',
  },
];

const howToData = [
  {
    name: 'Sélectionnez votre Gamut',
    text: 'Choisissez entre le sRGB (standard web/grand public) ou le DCI-P3 (cinéma professionnel). Votre écran adaptera sa palette de test en conséquence.',
  },
  {
    name: 'Nommez votre Matériel (Optionnel)',
    text: 'Entrez un nom descriptif pour votre moniteur ou appareil (ex: "MacBook Pro 16 M1"). Cela personnalise votre rapport.',
  },
  {
    name: 'Passez en Mode Plein Écran',
    text: 'Appuyez sur F11 ou sur le bouton plein écran pour éliminer l\'interface du navigateur et garantir un espace d\'affichage maximal pour un test précis.',
  },
  {
    name: 'Complétez les Tests de Couleur',
    text: 'Procédez via la Pureté Spectrale (couleurs unies), la Dynamique des Dégradés (transitions fluides), la Détection du Black Crush (détails dans les ombres) et le Calibrage du Point Blanc.',
  },
  {
    name: 'Vérifiez les Résultats et Exportez',
    text: 'Générez un rapport visuel avec visualisation du Gamut 3D, métriques Delta E et recommandations de calibrage. Exportez en PDF pour archivage.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<SpectrumCanvasUI> = {
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
      text: 'Test de Précision des Couleurs Professionnel : Calibrez votre Écran avec Précision',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le Spectrum Canvas est un outil de test de précision des couleurs de qualité professionnelle conçu pour tous ceux qui dépendent d\'un travail critique sur les couleurs. Que vous soyez photographe, designer, créateur de contenu ou passionné de matériel, cet outil vous aide à <strong>diagnostiquer les dérives chromatiques</strong>, <strong>mesurer la précision de l\'affichage</strong> et <strong>générer des rapports de calibrage</strong>.',
    },
    {
      type: 'title',
      text: 'Pourquoi la précision des couleurs est importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une différence d\'un seul point de pourcentage dans la reproduction des couleurs peut faire la différence entre un moment "wow" et une réaction "ça semble bizarre". Les écrans professionnels offrent une précision avec un <strong>Delta E &lt; 2</strong>. Les écrans grand public dérivent souvent vers un Delta E de 4-6+, causant :',
    },
    {
      type: 'paragraph',
      html: '<ul><li>Des photographies éclatantes sur votre moniteur mais ternes à l\'impression</li><li>Des montages vidéo qui ne correspondent pas aux attentes du client</li><li>Des maquettes de design web qui ne respectent pas les spécifications de la marque</li><li>Des projets matériels où les indicateurs de couleur sont mal interprétés</li></ul>',
    },
    {
      type: 'title',
      text: 'Comprendre les espaces colorimétriques : sRGB vs DCI-P3',
      level: 3,
    },
    {
      type: 'title',
      text: 'sRGB (Espace colorimétrique standard)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Établi par Microsoft et HP en 1996, le sRGB est la <strong>norme universelle pour l\'électronique grand public</strong> et le web. Il utilise un gamut de couleurs triangulaire défini par trois couleurs primaires (Rouge : 0.6400x 0.3300, Vert : 0.3000 0.6000, Bleu : 0.1500 0.0600).',
    },
    {
      type: 'paragraph',
      html: '<strong>Caractéristiques :</strong><ul><li>Couvre ~35 % du spectre de couleurs visibles</li><li>Optimisé pour les conditions d\'éclairage ambiant typiques</li><li>Gamma : 2.2 (correspond à la plupart des écrans grand public)</li><li>Adapté pour : web, réseaux sociaux, photos grand public</li></ul>',
    },
    {
      type: 'title',
      text: 'DCI-P3 (Gamut du Cinéma Numérique)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Développé par le consortium Digital Cinema Initiatives, le DCI-P3 est un <strong>espace colorimétrique de qualité cinéma</strong> conçu pour la projection théâtrale et les écrans professionnels. Il englobe ~25 % de couleurs de plus que le sRGB.',
    },
    {
      type: 'paragraph',
      html: '<strong>Caractéristiques :</strong><ul><li>Couvre ~53 % du spectre de couleurs visibles</li><li>Optimisé pour les environnements de cinéma sombres</li><li>Gamma : 2.6 (corrigé en gamma pour un contraste élevé)</li><li>Adapté pour : réalisation de films, photographie professionnelle, contenu HDR</li></ul>',
    },
    {
      type: 'title',
      text: 'Qu\'est-ce que le Delta E ? Quantifier la différence de couleur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le Delta E (ΔE) est la <strong>métrique de la différence de couleur perceptible par l\'homme</strong> dans l\'espace colorimétrique CIE LAB. Il vous indique à quel point la sortie de votre écran est proche d\'une couleur de référence standard.',
    },
    {
      type: 'paragraph',
      html: '<strong>Échelle Delta E (CIE 1976) :</strong><ul><li>0–1 : Imperceptible par l\'œil humain</li><li>1–2 : À peine perceptible</li><li>2–4 : Perceptible mais acceptable pour un usage général</li><li>4–6 : Dérive de couleur notable</li><li>&gt;6 : Différence très évidente</li></ul>',
    },
    {
      type: 'paragraph',
      html: 'Les écrans professionnels sont calibrés pour maintenir un <strong>Delta E &lt; 2</strong> sur l\'ensemble du gamut visible. Les écrans grand public atteignent généralement un Delta E de 3-5.',
    },
    {
      type: 'title',
      text: 'La suite de tests Spectrum Canvas',
      level: 3,
    },
    {
      type: 'title',
      text: 'Test de Pureté Spectrale',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Affiche des couleurs primaires et secondaires pures (Rouge, Vert, Bleu, Cyan, Magenta, Jaune) et mesure comment votre moniteur les reproduit. Des animations de "balayage" de couleur révèlent une reproduction cohérente des couleurs sur tout l\'écran.',
    },
    {
      type: 'title',
      text: 'Dynamique des Dégradés',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Des dégradés fluides qui traversent tout l\'espace colorimétrique. Recherchez les <strong>artefacts de banding</strong> (étapes visibles au lieu de transitions fluides), qui indiquent une profondeur de bits de couleur insuffisante ou une mauvaise correction gamma.',
    },
    {
      type: 'title',
      text: 'Détection du Black Crush (Test du Trou Noir)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Fond noir pur (0,0,0) avec des nuances de gris sombre à peine visibles. Si les détails des ombres se "télescopent", votre moniteur perd des informations dans les tons sombres — courant sur les écrans mobiles et les dalles bon marché.',
    },
    {
      type: 'title',
      text: 'Calibrage du Point Blanc',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Teste différentes températures de couleur corrélées (D65 à 6500K = lumière du jour, D93 à 9300K = studio), révélant toute dérive de température de couleur ou instabilité thermique.',
    },
    {
      type: 'title',
      text: 'Interpréter vos résultats',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le Spectrum Canvas génère un rapport visuel élégant et imprimable avec :',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>Visualisation du Gamut 3D :</strong> Un graphique 3D rotatif montrant le volume de couleur réel de votre écran par rapport à la norme de référence</li><li><strong>Carte thermique Delta E :</strong> Les zones du spectre où votre écran dérive</li><li><strong>Courbe Gamma :</strong> Linéarité de la luminosité sur la plage 0–255</li><li><strong>Score de calibrage :</strong> Une "Note Spectrum" unique (Élite, Cinématique, Studio, Standard) basée sur la précision globale</li></ul>',
    },
    {
      type: 'title',
      text: 'Avancé : Conseils de calibrage manuel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si vos résultats montrent une dérive, essayez ces ajustements dans le menu OSD (On-Screen Display) de votre moniteur :',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>Température de couleur :</strong> Déplacez vers "Chaud" si les couleurs sont trop froides/bleues ; vers "Froid" si elles sont trop chaudes/jaunes</li><li><strong>Contraste :</strong> Augmentez si les noirs semblent délavés ; diminuez si les détails sont écrasés</li><li><strong>Luminosité :</strong> Ajustez pour obtenir un gris neutre sans teinte de couleur à 50 % de luminosité</li><li><strong>Saturation :</strong> Si les couleurs sont sursaturées, réduisez ; si elles sont ternes, augmentez</li></ul>',
    },
    {
      type: 'title',
      text: 'Limites et meilleures pratiques',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Cet outil fournit une référence visuelle et statistique</strong>. Pour un travail professionnel nécessitant un calibrage certifié, utilisez des sondes de couleur matérielles (spectrophotomètre ou colorimètre) et un logiciel de calibrage dédié.',
    },
    {
      type: 'paragraph',
      html: '<strong>Meilleures pratiques :</strong><ul><li>Laissez votre moniteur chauffer pendant 30 minutes avant le test (la dérive thermique se stabilise)</li><li>Testez dans des conditions d\'éclairage ambiant constantes</li><li>Évitez les reflets ; utilisez une casquette de moniteur si possible</li><li>Répétez les tests chaque semaine pour suivre la dérive au fil du temps</li><li>Conservez une archive numérique des rapports pour comparaison future</li></ul>',
    },
  ],
  ui: {
    badge: 'Calibrage d\'Écran',
    title: 'Spectrum Canvas: Test de Précision des Couleurs',
    description:
      'Le calibrage d\'écran professionnel rencontre l\'esthétique cinématographique. Testez le sRGB et le DCI-P3, mesurez la précision Delta E, détectez les dérives chromatiques et générez un rapport visuel qui transforme les données en connaissances.',
    btnStartCalibration: 'Démarrer le Calibrage',
    btnFullscreen: 'Plein Écran',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Mode Plein Écran',
    kbdReset: 'R',
    kbdResetLabel: 'Réinitialiser le Test',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Quitter',
    gamutSRGB: 'sRGB',
    gamutDCIP3: 'DCI-P3',
    gamutToggle: 'Espace Colorimétrique',
    hardwareName: 'Nom du Matériel/Moniteur',
    hardwareNamePlaceholder: 'ex: MacBook Pro 16" M1 Max',
    purityTest: 'Pureté Spectrale',
    gradientTest: 'Dynamique des Dégradés',
    blackHoleTest: 'Détection du Black Crush',
    whitePointTest: 'Calibrage du Point Blanc',
    colorCheckpoint: 'Point de Contrôle de Couleur',
    generateReport: 'Générer le Rapport',
    viewResults: 'Voir les Résultats',
    btnExit: 'Quitter (ESC)',
    compareSideBySide: 'Comparer Côte à Côte',
  },
};
