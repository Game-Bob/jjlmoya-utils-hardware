import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-retard-affichage-input-lag';
const title = 'Test de Retard d Affichage (Input Lag) et Latence';
const description = 'Outil de mesure en ligne de la latence d entrée matérielle et du retard d affichage avec précision haute performance et synchronisation d affichage.';

const faqData = [
  {
    question: 'Qu est-ce que l input lag et la latence système ?',
    answer: 'L input lag est le délai total entre une action physique de l utilisateur (cliquer sur la souris ou appuyer sur une touche) et la mise à jour visuelle sur l écran.',
  },
  {
    question: 'Comment ce test mesure-t-il le retard d affichage ?',
    answer: 'Il capture les horodatages des événements matériels via performance.now() et les corrèle avec les cycles d affichage requestAnimationFrame suivants pour calculer le délai.',
  },
  {
    question: 'Quelle est une bonne valeur d input lag pour le jeu vidéo ?',
    answer: 'Moins de 10 ms est ultra-rapide pour l esport. Entre 10 ms et 20 ms est rapide, de 20 ms à 35 ms est modéré, et au-dessus de 35 ms est un retard perceptible.',
  },
  {
    question: 'Comment réduire la latence système sur PC ?',
    answer: 'Augmentez la fréquence de rafraîchissement de votre écran, désactivez la VSync, activez G-Sync ou FreeSync, augmentez le taux de rafraîchissement USB à 1000 Hz et activez NVIDIA Reflex.',
  },
  {
    question: 'La fréquence de rafraîchissement affecte-t-elle l input lag ?',
    answer: 'Oui. Un taux de rafraîchissement plus élevé réduit la durée des images. Un écran 60 Hz a une durée d image de 16,67 ms contre 4,17 ms pour un écran 240 Hz.',
  },
];

const howToData = [
  {
    name: 'Choisir le mode de test',
    text: 'Sélectionnez Réponse instantanée, Latence clavier ou Latence de réaction visuelle.',
  },
  {
    name: 'Effectuer des actions d entrée',
    text: 'Cliquez dans la zone cible ou appuyez sur des touches pour générer des événements.',
  },
  {
    name: 'Observer les métriques en temps réel',
    text: 'Consultez la latence moyenne, minimale, maximale et la variation (jitter).',
  },
  {
    name: 'Vérifier la synchronisation d affichage',
    text: 'Surveillez le taux d images par seconde (FPS) et la durée d image.',
  },
  {
    name: 'Analyser l historique des mesures',
    text: 'Examinez l historique pour identifier les pics de latence.',
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

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Latence système',
  modeInstant: 'Réponse instantanée',
  modeKey: 'Latence clavier',
  modeVisual: 'Latence de réaction visuelle',
  targetClickPrompt: 'Cliquez ou appuyez dans cette zone pour mesurer la latence',
  targetKeyPrompt: 'Appuyez sur une touche (ou Espace) pour mesurer la latence du clavier',
  targetWaitPrompt: 'Attendez le fond vert...',
  targetNowPrompt: 'CLIQUEZ MAINTENANT !',
  labelAvgLatency: 'Latence moyenne',
  labelMinLatency: 'Latence minimale',
  labelMaxLatency: 'Latence maximale',
  labelJitter: 'Variation (Jitter)',
  labelFps: 'FPS actuels',
  labelFrameTime: 'Temps d image',
  labelSamples: 'Échantillons',
  labelGrade: 'Évaluation de la latence',
  gradeUltraFast: 'Ultra rapide (<10ms)',
  gradeFast: 'Rapide (10-20ms)',
  gradeModerate: 'Modéré (20-35ms)',
  gradeHigh: 'Élevé (>35ms)',
  btnReset: 'Réinitialiser les mesures',
  btnCopyReport: 'Copier le rapport',
  reportCopied: 'Rapport copié !',
  historyTitle: 'Mesures de latence récentes',
  pipelineTitle: 'Analyse du chemin de signal matériel',
  distributionTitle: 'Distribution des fréquences de latence',
  sampleCol: 'Échantillon',
  typeCol: 'Type d entrée',
  latencyCol: 'Latence mesurée',
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
      text: 'Qu est-ce que l Input Lag et la Latence Système ?',
    },
    {
      type: 'paragraph',
      html: 'L input lag (ou retard d affichage) représente le délai exact s écoulant entre le moment où l utilisateur effectue une action physique (comme cliquer sur le bouton d une souris ou appuyer sur une touche de clavier) et la réponse visuelle correspondante affichée sur l écran. Dans les jeux vidéo e-sport et compétitifs, réduire la latence système est crucial pour améliorer la précision du tir et la réactivité globale. La latence totale du système résulte de la superposition de plusieurs retards successifs: la fréquence d interrogation USB (polling rate), la gestion des événements par le système d exploitation, le temps de calcul du moteur de rendu, la file d attente des images dans la carte graphique et le temps de réponse propre aux pixels du moniteur.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '< 10 ms',
          label: 'Objectif E-sport',
          trend: 'Valeur optimale compétitive',
        },
        {
          value: '1000 Hz',
          label: 'Taux USB standard',
          trend: 'Intervalle de 1.0 ms entre signaux',
        },
        {
          value: '240 Hz',
          label: 'Écran haute fréquence',
          trend: 'Durée d image de 4.16 ms',
        },
        {
          value: '16.6 ms',
          label: 'Durée d image 60Hz',
          trend: 'Délai de base par image affichée',
        },
      ],
      columns: 4,
    },
    {
      type: 'card',
      title: 'Comment fonctionne la mesure de la latence dans le navigateur ?',
      html: 'Ce test s appuie sur des horodatages matériels haute précision obtenus directement via <code>performance.now()</code>, combinés aux écouteurs d événements DOM (<code>pointerdown</code> et <code>keydown</code>). En synchronisant l enregistrement des événements avec les cycles réels d affichage de l écran grâce à <code>requestAnimationFrame</code>, l outil calcule le délai précis entre la détection de l action et la mise à jour effective de la zone d affichage au sein de votre navigateur.',
    },
    {
      type: 'title',
      text: 'Le cheminement détaillé du signal: de la touche jusqu à l écran',
    },
    {
      type: 'paragraph',
      html: 'Pour diagnostiquer et réduire le retard d affichage de manière efficace, il est nécessaire d analyser chaque composant de la chaîne de traitement. La latence globale du système équivaut à la somme des retards du périphérique, du système d exploitation, du moteur de jeu, du pilote graphique et de la dalle d affichage.',
    },
    {
      type: 'table',
      headers: ['Composant de la chaîne', 'Délai typique', 'Cause principale du retard', 'Stratégie d optimisation'],
      rows: [
        ['Interrupteur périphérique', '0.2 ms - 5.0 ms', 'Rebond mécanique des contacts', 'Utiliser des interrupteurs optiques'],
        ['Taux de rafraîchissement USB', '0.125 ms - 8.0 ms', '125 Hz contre 1000 Hz / 8000 Hz', 'Augmenter le taux USB à 1000Hz ou plus'],
        ['File d attente du système', '0.5 ms - 3.0 ms', 'Tâches de fond et compositeur OS', 'Activer le mode jeu de Windows'],
        ['Moteur de rendu du jeu', '4.0 ms - 20.0 ms', 'Charge processeur et synchronisation', 'Activer NVIDIA Reflex ou AMD Anti-Lag'],
        ['Tampon de la carte graphique', '8.0 ms - 33.0 ms', 'VSync activée et double/triple tampon', 'Désactiver la VSync et utiliser la VRR'],
        ['Traitement de l écran', '1.0 ms - 15.0 ms', 'Filtres d image TV et traitement vidéo', 'Activer le mode jeu de l écran/TV'],
      ],
    },
    {
      type: 'tip',
      title: 'Comment réduire la latence en cas de forte charge graphique ?',
      html: 'Lorsque la carte graphique est sollicitée à 99%, le pilote met en file d attente plusieurs images, ce qui crée un retard d affichage important (souvent 30 à 50 ms). Limitez légèrement votre taux d images par seconde ou activez NVIDIA Reflex.',
    },
    {
      type: 'title',
      text: 'Comparaison de la latence des souris, claviers et écrans tactiles',
    },
    {
      type: 'paragraph',
      html: 'Les différents périphériques d entrée présentent des caractéristiques de latence distinctes selon leur technologie.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Souris Gamer',
          description: 'Connexion sans fil rapide 2.4GHz ou filaire.',
          highlight: '0.5ms - 2ms de Latence',
          points: [
            'Taux USB de 1000Hz à 8000Hz',
            'Interrupteurs optiques sans rebond',
            'Capteurs à très bas délai',
          ],
        },
        {
          title: 'Claviers Mécaniques',
          description: 'Balayage de matrice avec anti-rebond.',
          highlight: '1ms - 10ms de Latence',
          points: [
            'Interrupteurs magnétiques à effet Hall',
            'Fréquence de balayage jusqu à 8000Hz',
            'Point d activation réglable',
          ],
        },
        {
          title: 'Écrans Tactiles',
          description: 'Échantillonnage capacitif sur mobile.',
          highlight: '15ms - 45ms de Latence',
          points: [
            'Taux d échantillonnage (120Hz - 480Hz)',
            'Délai de composition du système',
            'Algorithmes de filtrage capacitif',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Impact du taux de rafraîchissement sur le retard',
    },
    {
      type: 'paragraph',
      html: 'La fréquence de rafraîchissement définit la latence d affichage minimale possible.',
    },
    {
      type: 'list',
      items: [
        'Écran 60 Hz: 1 image = 16.67 ms de durée (Latence moyenne: ~8.33 ms)',
        'Écran 120 Hz: 1 image = 8.33 ms de durée (Latence moyenne: ~4.16 ms)',
        'Écran 144 Hz: 1 image = 6.94 ms de durée (Latence moyenne: ~3.47 ms)',
        'Écran 240 Hz: 1 image = 4.17 ms de durée (Latence moyenne: ~2.08 ms)',
        'Écran 360 Hz: 1 image = 2.78 ms de durée (Latence moyenne: ~1.39 ms)',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Input Lag',
          definition: 'Temps écoulé entre l action physique et l affichage du résultat à l écran.',
        },
        {
          term: 'Jitter (Variation de latence)',
          definition: 'Écart-type des mesures indiquant la régularité du système.',
        },
        {
          term: 'VSync (Synchronisation verticale)',
          definition: 'Évite les déchirements d image mais augmente nettement l input lag.',
        },
        {
          term: 'Taux de rafraîchissement variable (VRR)',
          definition: 'Technologies comme G-Sync ou FreeSync qui adaptent l écran à la carte graphique.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Avantages et limites du test de latence en ligne',
    },
    {
      type: 'paragraph',
      html: 'Mesurer la latence dans le navigateur permet un contrôle rapide sans équipement spécialisé.',
    },
    {
      type: 'proscons',
      title: 'Évaluation du test sur navigateur',
      items: [
        {
          pro: 'Aucun logiciel ou matériel spécial requis',
          con: 'Sujet aux variations de la boucle d événements du navigateur',
        },
        {
          pro: 'Précision de l horloge haute résolution performance.now',
          con: 'Ne mesure pas directement le temps de réponse optique des pixels',
        },
        {
          pro: 'Comparaison instantanée entre différents périphériques',
          con: 'Atténuation de sécurité sur la précision des horloges navigateur',
        },
      ],
    },
    {
      type: 'title',
      text: 'Diagnostic en cas d input lag élevé',
    },
    {
      type: 'paragraph',
      html: 'Si vos résultats indiquent une latence élevée (>30 ms), vérifiez les réglages ci-dessous.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Avertissement de latence élevée',
      html: 'Si la latence moyenne dépasse 35 ms, vérifiez si la VSync est activée dans votre pilote graphique. Une accélération matérielle désactivée dans le navigateur peut aussi surcharger le processeur.',
    },
    {
      type: 'title',
      text: 'Étapes pour optimiser la latence du système',
    },
    {
      type: 'paragraph',
      html: 'Suivez ces étapes pour réduire le retard d affichage de votre système.',
    },
    {
      type: 'summary',
      title: 'Liste de contrôle pour l optimisation de la latence',
      items: [
        'Réglez le taux de rafraîchissement USB de la souris à 1000 Hz ou plus.',
        'Activez la planification de processeur graphique à accélération matérielle dans Windows.',
        'Activez le mode jeu sur l écran ou la TV pour éviter le traitement d image.',
        'Désactivez la VSync globale et utilisez G-Sync ou FreeSync.',
        'Activez NVIDIA Reflex ou AMD Anti-Lag dans les jeux compatibles.',
        'Vérifiez que l accélération matérielle est activée dans votre navigateur.',
      ],
    },
    {
      type: 'message',
      title: 'Bonne pratique pour des résultats fiables',
      html: 'Pour une précision optimale, fermez les applications en arrière-plan, passez le navigateur en plein écran et effectuez au moins 15 à 20 mesures.',
    },
  ],
};
