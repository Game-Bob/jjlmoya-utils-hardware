import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-latence-saisie-input-lag';

const title = 'Test de Retard d Affichage et Latence de Saisie';
const description = 'Outil en ligne de mesure de l input lag et de la latence du système par synchronisation d affichage.';

const faqData = [
  {
    question: 'Qu\'est-ce que l\'input lag et la latence système ?',
    answer: 'C\'est le délai entre une action physique (clic de souris ou touche) et son affichage à l\'écran.',
  },
  { question: 'Quelle latence est bonne pour jouer ?', answer: 'Moins de 10 ms est très rapide. Entre 10 et 20 ms reste rapide, de 20 à 35 ms est modéré et au delà le retard devient perceptible.' },
  { question: 'Comment réduire la latence d\'entrée ?', answer: 'Vérifiez la fréquence de l\'écran, VSync, VRR et le sondage USB, puis modifiez un seul réglage avant de mesurer à nouveau.' },
  { question: 'La fréquence de l\'écran change-t-elle le délai ?', answer: 'Oui. Une fréquence de 60 Hz donne 16.67 ms par image, contre 4.17 ms à 240 Hz. Le rendu et la dalle ajoutent aussi un délai.' },
  { question: 'Pourquoi le jitter est-il important ?', answer: 'Il indique la variation entre les mesures. Un résultat un peu plus élevé mais stable peut sembler meilleur qu\'une moyenne basse avec de fortes pointes.' },
];

const howToData = [
  {
    name: 'Choisir le mode',
    text: 'Sélectionnez Réponse Instantanée, Latence Clavier ou Réaction Visuelle.',
  },
  { name: 'Effectuer les saisies', text: 'Cliquez dans la zone de test ou appuyez sur des touches pour générer des événements.' },
  { name: 'Lire les statistiques', text: 'Consultez la moyenne, les valeurs extrêmes et le jitter après plusieurs essais.' },
  { name: 'Comparer une nouvelle série', text: 'Répétez la mesure après chaque changement dans les mêmes conditions.' },
  { name: 'Interpréter les limites', text: 'Utilisez le résultat pour comparer des configurations et non comme une mesure optique absolue.' },
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

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Latence Système',
  modeInstant: 'Réponse Instantanée',
  modeKey: 'Latence Clavier',
  modeVisual: 'Réaction Visuelle',
  targetClickPrompt: 'Cliquez ici pour mesurer la latence',
  targetKeyPrompt: 'Appuyez sur une touche pour la latence clavier',
  targetWaitPrompt: 'Attendez le fond vert...',
  targetNowPrompt: 'CLIQUEZ MAINTENANT !',
  labelAvgLatency: 'Latence Moyenne',
  labelMinLatency: 'Latence Minimale',
  labelMaxLatency: 'Latence Maximale',
  labelJitter: 'Jitter (Écart type)',
  labelFps: 'FPS Actuels',
  labelFrameTime: 'Temps par Image',
  labelSamples: 'Échantillons',
  labelGrade: 'Évaluation',
  gradeUltraFast: 'Ultra Rapide (<10ms)',
  gradeFast: 'Rapide (10-20ms)',
  gradeModerate: 'Modéré (20-35ms)',
  gradeHigh: 'Élevé (>35ms)',
  btnReset: 'Réinitialiser',
  btnCopyReport: 'Copier le Rapport',
  reportCopied: 'Rapport Copié !',
  historyTitle: 'Mesures Récents',
  pipelineTitle: 'Décomposition du Pipeline Matériel',
  distributionTitle: 'Distribution des Fréquences',
  sampleCol: 'Échantillon',
  typeCol: 'Type Entrée',
  latencyCol: 'Latence Mesurée',
};

export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: 'Mesure de l Input Lag et de la Latence Système',
    },
    {
      type: 'paragraph',
      html: 'Évaluez en temps réel le temps de réponse entre la saisie matérielle et le rendu visuel.',
    },
    { type: 'stats', items: [
      { value: '< 10 ms', label: 'Objectif esport', trend: 'Repère de compétition' },
      { value: '1000 Hz', label: 'Sondage USB courant', trend: 'Intervalle de 1 ms' },
      { value: '240 Hz', label: 'Écran haute fréquence', trend: 'Image toutes les 4.16 ms' },
      { value: '16.6 ms', label: 'Intervalle à 60 Hz', trend: 'Base par image' },
    ], columns: 4 },
    { type: 'card', title: 'Comment fonctionne la mesure dans le navigateur', html: 'Le test compare les événements pointerdown et keydown avec les mises à jour de requestAnimationFrame. Il estime ainsi le délai local entre la détection de l\'action et la peinture du document.' },
    { type: 'title', text: 'Comment le signal de latence traverse le système' },
    { type: 'paragraph', html: 'Le délai total s\'accumule entre le contact du périphérique et le pixel visible. Distinguer chaque étape aide à savoir si le problème vient du périphérique, du système, du rendu ou de l\'écran.' },
    { type: 'table', headers: ['Élément', 'Plage courante', 'Goulot possible', 'Piste d optimisation'], rows: [
      ['Interrupteur', '0.2 à 5.0 ms', 'Rebond mécanique', 'Réduire l antirebond'],
      ['Sondage USB', '0.125 à 8.0 ms', 'Fréquence basse', 'Augmenter la fréquence si possible'],
      ['File système', '0.5 à 3.0 ms', 'Tâches en arrière plan', 'Fermer les processus inutiles'],
      ['Moteur graphique', '4.0 à 20.0 ms', 'Images limitées par le processeur', 'Réduire la charge de rendu'],
      ['File GPU', '8.0 à 33.0 ms', 'VSync et buffers multiples', 'Comparer VSync et VRR'],
      ['Traitement écran', '1.0 à 15.0 ms', 'Mise à l échelle', 'Activer le mode jeu'],
    ] },
    { type: 'tip', title: 'Réduire l attente de la file GPU', html: 'Une carte graphique saturée peut préparer plusieurs images en avance. Une limite d images légèrement inférieure au maximum et un nouvel essai avec Reflex ou Anti Lag peuvent réduire cette attente.' },
    { type: 'title', text: 'Comparer les périphériques de saisie' },
    { type: 'paragraph', html: 'Les souris, claviers et écrans tactiles ont des délais différents selon leur connexion, leur électronique et leur fréquence de balayage. Comparez les appareils avec le même écran et les mêmes réglages.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Souris de jeu', description: 'Connexion filaire ou sans fil à fréquence élevée.', highlight: '0.5 à 2 ms', points: ['Sondage de 1000 Hz ou plus', 'Interrupteurs optiques', 'Capteur à traitement rapide'] },
      { title: 'Claviers mécaniques', description: 'Matrice de touches avec délai antirebond réglable.', highlight: '1 à 10 ms', points: ['Interrupteurs magnétiques', 'Balayage de matrice réglable', 'Distance d activation configurable'] },
      { title: 'Écrans tactiles', description: 'Numériseur capacitif placé sur la dalle.', highlight: '15 à 45 ms', points: ['Fréquence de sondage tactile', 'Traitement du contrôleur', 'Filtres contre les contacts parasites'] },
    ] },
    { type: 'title', text: 'Mesurer le délai ajouté par la fréquence écran' },
    { type: 'paragraph', html: 'La fréquence de rafraîchissement fixe l intervalle minimal entre deux images. Un écran à 60 Hz présente une entrée moins vite qu un écran à 240 Hz, mais le rendu et la synchronisation restent déterminants.' },
    { type: 'list', items: ['60 Hz correspond à 16.67 ms par image', '120 Hz correspond à 8.33 ms par image', '144 Hz correspond à 6.94 ms par image', '240 Hz correspond à 4.17 ms par image', '360 Hz correspond à 2.78 ms par image', '540 Hz correspond à 1.85 ms par image'] },
    { type: 'glossary', items: [
      { term: 'Input lag', definition: 'Temps entre une action physique et son résultat visible.' },
      { term: 'Jitter', definition: 'Variation des mesures qui indique la stabilité du système.' },
      { term: 'VSync', definition: 'Synchronisation verticale qui peut réduire le déchirement mais ajouter de l attente.' },
      { term: 'VRR', definition: 'Fréquence variable qui adapte l\'écran à la sortie de la carte graphique.' },
      { term: 'Temps de pixel', definition: 'Durée nécessaire à un pixel pour changer de nuance.' },
    ] },
    { type: 'title', text: 'Avantages et limites de la mesure dans un navigateur' },
    { type: 'paragraph', html: 'Cette mesure permet de comparer des réglages sans oscilloscope ni caméra rapide. Elle ne voit pas directement tous les délais internes du pilote, du jeu ou de l émission optique de la dalle.' },
    { type: 'proscons', title: 'Évaluation de la mesure web', items: [
      { pro: 'Accessible sans matériel spécialisé', con: 'Dépend de la boucle d événements du navigateur' },
      { pro: 'Comparaison rapide entre périphériques', con: 'Ne mesure pas directement la réponse du pixel' },
      { pro: 'Chronométrage local de haute résolution', con: 'La précision peut être réduite par le navigateur' },
      { pro: 'Montre la régularité des mises à jour', con: 'Une fenêtre inactive peut être ralentie' },
    ] },
    { type: 'title', text: 'Diagnostiquer une latence élevée' },
    { type: 'paragraph', html: 'Si la moyenne dépasse 30 ms ou si le jitter est important, refaites la série avec la fenêtre active et vérifiez VSync, l accélération graphique, la fréquence USB et les tâches du processeur.' },
    { type: 'diagnostic', variant: 'warning', title: 'Alerte de diagnostic', html: 'Une moyenne supérieure à 35 ms sur un ordinateur de bureau justifie une vérification du mode écran et de l accélération matérielle. Ne modifiez qu un réglage à la fois.' },
    { type: 'title', text: 'Réduire la latence étape par étape' },
    { type: 'paragraph', html: 'Ajustez séparément le périphérique, l\'écran et le système. Après chaque changement, recueillez une nouvelle série dans les mêmes conditions pour confirmer le résultat.' },
    { type: 'summary', title: 'Liste de contrôle pour optimiser la latence', items: ['Choisir une fréquence USB adaptée', 'Activer le mode jeu de l\'écran', 'Désactiver les filtres d\'image inutiles', 'Comparer VSync et VRR', 'Stabiliser la fréquence d\'images', 'Fermer les tâches lourdes', 'Refaire la mesure après chaque réglage'] },
    { type: 'message', title: 'Bonne pratique de comparaison', html: 'Fermez les applications en arrière-plan, gardez la fenêtre active et recueillez au moins 15 échantillons. Consultez la médiane avec la moyenne et le jitter, car une mesure isolée peut être fortuite.' },
  ],
};
