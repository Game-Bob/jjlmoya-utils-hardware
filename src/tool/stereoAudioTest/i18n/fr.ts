import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StereoAudioTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-audio-stereo';
const title = 'Test audio stéréo';
const description = 'Vérifiez les canaux gauche et droit des enceintes, la balance stéréo, le sens du câblage et l\'image des écouteurs avec des tonalités de test générées par le navigateur.';

const faqData = [
  {
    question: 'Comment tester les enceintes gauche et droite en ligne ?',
    answer: 'Commencez avec un volume bas, appuyez sur Gauche puis Droite. Le son gauche doit provenir uniquement de l\'enceinte ou de l\'écouteur gauche, et le son droit uniquement du côté droit. Utilisez Centre pour confirmer que les deux côtés jouent de manière équilibrée.',
  },
  {
    question: 'Pourquoi les deux enceintes jouent-elles pendant le test gauche ou droite ?',
    answer: 'Certains appareils, systèmes d\'exploitation, enceintes Bluetooth, modes mono, paramètres d\'accessibilité ou améliorations audio convertissent le stéréo en mono. Vérifiez la balance système, les paramètres audio mono, le câblage et les effets audio spécifiques aux applications.',
  },
  {
    question: 'Cela peut-il diagnostiquer des câbles d\'enceinte inversés ?',
    answer: 'Oui. Si le bouton Gauche joue sur l\'enceinte droite et le bouton Droite joue sur l\'enceinte gauche, le chemin de sortie est inversé quelque part entre l\'ordinateur, le câble, l\'amplificateur, les enceintes ou les écouteurs.',
  },
  {
    question: 'Une tonalité sinusoïdale est-elle sans danger pour les enceintes et les écouteurs ?',
    answer: 'Une courte tonalité sinusoïdale à volume modéré est normalement sans danger. Évitez le volume élevé, les longues sessions ou les très hautes fréquences, surtout avec des écouteurs, de petites enceintes d\'ordinateur portable ou des amplificateurs inconnus.',
  },
  {
    question: 'Le navigateur affecte-t-il le test stéréo ?',
    answer: 'L\'outil utilise le StereoPannerNode de l\'API Web Audio. Il est fiable dans les navigateurs modernes, mais la sortie finale dépend toujours du routage du système d\'exploitation, des pilotes, des codecs Bluetooth, des DAC externes et du câblage des enceintes.',
  },
];

const howToData = [
  {
    name: 'Réglez un volume de départ bas',
    text: 'Baissez le volume système et utilisez le curseur de volume de l\'outil avant de jouer une tonalité de test.',
  },
  {
    name: 'Testez chaque côté',
    text: 'Appuyez sur Gauche et Droite. Chaque tonalité doit être clairement isolée sur l\'enceinte ou l\'écouteur correspondant.',
  },
  {
    name: 'Vérifiez la balance centrale',
    text: 'Appuyez sur Centre. La tonalité doit apparaître centrée entre les deux enceintes, sans être fortement tirée d\'un côté.',
  },
  {
    name: 'Utilisez le balayage',
    text: 'Lancez Balayage pour entendre le mouvement à travers le champ stéréo et repérer les coupures, le câblage inversé ou l\'image inégale.',
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

export const content: ToolLocaleContent<StereoAudioTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Test d\'enceinte gauche et droite en ligne',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Utilisez ce test audio stéréo en ligne pour vérifier si vos enceintes gauche et droite, écouteurs, oreillettes, barre de son, DAC, amplificateur ou enceintes de monitoring sont correctement routés. L\'outil joue des tonalités générées par le navigateur via le canal gauche, le canal droit, les deux canaux ou un balayage stéréo mobile afin que vous puissiez détecter rapidement les canaux inversés, la sortie mono, les enceintes faibles, les problèmes de balance et les erreurs de câblage sans installer de logiciel audio.',
    },
    {
      type: 'paragraph',
      html: 'Une configuration stéréo correcte préserve la direction: la tonalité de test gauche doit provenir uniquement de l\'enceinte ou de l\'écouteur gauche, la tonalité droite uniquement du côté droit, et la tonalité centrale doit sembler également équilibrée entre les deux côtés. Si le son apparaît du mauvais côté, des deux côtés à la fois, ou beaucoup plus fort d\'un côté, le problème vient généralement des paramètres de sortie, du mode d\'accessibilité mono, du câblage, du routage Bluetooth, de l\'emplacement des enceintes ou du logiciel d\'amélioration audio.',
    },
    {
      type: 'table',
      headers: ['Bouton', 'Ce que vous devriez entendre', 'Utilisez-le pour diagnostiquer'],
      rows: [
        ['Gauche', 'Tonalité uniquement de l\'enceinte gauche, du haut-parleur gauche du casque ou de l\'oreillette gauche.', 'Câbles inversés, mauvais emplacement des enceintes, sortie mono ou remappage des canaux.'],
        ['Droite', 'Tonalité uniquement de l\'enceinte droite, du haut-parleur droit du casque ou de l\'oreillette droite.', 'Sorties inversées, câblage d\'adaptateur incorrect ou effets de pilote modifiant l\'ordre des canaux.'],
        ['Centre', 'La tonalité apparaît au centre car les deux canaux jouent de manière équilibrée.', 'Décalage de la balance système, une enceinte faible, grille d\'oreillette obstruée ou gain d\'ampli inégal.'],
        ['Balayage', 'La tonalité se déplace doucement à travers l\'image stéréo d\'un côté à l\'autre.', 'Coupures, liaisons Bluetooth instables, problèmes de phase, artefacts de son surround virtuel ou image inégale.'],
      ],
    },
    {
      type: 'title',
      text: 'Problèmes stéréo les plus courants détectés par ce test',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Les canaux gauche et droit sont inversés: le bouton gauche joue du côté droit, ou le bouton droit joue du côté gauche.',
        'Le stéréo est devenu mono: gauche, droite et centre sonnent presque identiques depuis les deux enceintes.',
        'Un côté est plus faible: l\'audio central tire vers une enceinte même lorsque le curseur de balance système semble centré.',
        'Les écouteurs sont mal câblés ou portés: les pas de jeu, le panoramique musical et les appels vidéo semblent spatialement confus.',
        'L\'audio Bluetooth ou USB est traité: les barres de son, docks, casques et modes TV peuvent convertir ou virtualiser le signal.',
        'L\'emplacement des enceintes est trompeur: une enceinte trop proche d\'un mur, bloquée par des meubles ou plus éloignée peut faire dériver l\'image centrale.',
      ],
    },
    {
      type: 'title',
      text: 'Comment réparer l\'audio gauche et droite inversé',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Pour les enceintes filaires, échangez les fiches gauche et droite au niveau de l\'amplificateur, de l\'interface audio, du DAC ou de la sortie de l\'ordinateur.',
        'Pour les enceintes passives, confirmez que l\'enceinte gauche est connectée aux bornes gauches de l\'amplificateur et l\'enceinte droite aux bornes droites.',
        'Pour les écouteurs, vérifiez qu\'ils sont portés dans la bonne orientation et testez sans adaptateurs, câbles de rallonge ou répartiteurs.',
        'Sous Windows ou macOS, vérifiez la balance de sortie et désactivez l\'audio mono dans les paramètres d\'accessibilité ou de son.',
        'Pour les enceintes Bluetooth et les barres de son, désactivez le son surround virtuel, le mode fête, l\'audio double, la correction de pièce ou les modes son TV pendant le test.',
        'Pour les interfaces audio, DAW et mixeurs, vérifiez le routage des canaux, les contrôles de panoramique, les réglages de mixage de retour et tout mixeur logiciel fourni par le fabricant.',
      ],
    },
    {
      type: 'title',
      text: 'Comment interpréter le test d\'enceinte centrale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La tonalité centrale n\'est pas une enceinte centrale physique séparée dans une configuration normale à deux canaux. C\'est le même signal envoyé uniformément à gauche et à droite. Au casque, elle doit sembler centrée dans la tête ; sur des enceintes, elle doit former un centre fantôme entre elles. Si elle penche à gauche ou à droite, vérifiez la balance système, la distance des enceintes, l\'angle des enceintes, les boutons de volume, le réglage de l\'amplificateur, l\'ajustement des oreillettes, la poussière dans la grille du haut-parleur et si une enceinte est partiellement bloquée ou défaillante.',
    },
    {
      type: 'table',
      headers: ['Ce qui se passe', 'Cause probable', 'Étape suivante'],
      rows: [
        ['Gauche joue des deux côtés', 'Audio mono, mixage descendant ou traitement audio spatial.', 'Désactivez la sortie mono et le son surround virtuel, puis testez à nouveau.'],
        ['Gauche joue du côté droit', 'Les canaux sont inversés quelque part dans la chaîne de lecture.', 'Échangez les câbles ou modifiez le routage des canaux dans le pilote, le mixeur ou l\'amplificateur.'],
        ['Le centre est plus fort d\'un côté', 'Balance, emplacement, dommage du haut-parleur, ajustement de l\'oreille ou grille d\'enceinte bloquée.', 'Comparez avec un autre casque ou paire d\'enceintes et inspectez l\'emplacement physique.'],
        ['Le balayage saute ou disparaît', 'Instabilité Bluetooth, artefacts d\'amélioration audio ou un câble/connecteur défaillant.', 'Testez avec une sortie filaire ou un autre câble pour isoler le maillon faible.'],
      ],
    },
    {
      type: 'title',
      text: 'Test gauche droite pour casques et oreillettes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pour les casques et les oreillettes, le test gauche/droite est particulièrement utile avant de jouer, d\'éditer de l\'audio, de regarder des films ou de rejoindre des appels. Mettez le casque normalement, commencez à faible volume, appuyez sur Gauche et Droite, et confirmez que chaque tonalité arrive sur la bonne oreille. Si les deux côtés sonnent pareil, votre appareil utilise peut-être l\'audio mono. Si un côté est étouffé ou plus faible, nettoyez la grille de l\'oreillette, repositionnez l\'embout, vérifiez le câble et comparez avec un autre appareil de sortie.',
    },
    {
      type: 'title',
      text: 'Conseils pour des tests audio en toute sécurité',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Commencez avec un volume système bas, surtout avec des écouteurs.',
        'Utilisez Boucle jusqu\'à l\'arrêt uniquement lorsque vous avez activement besoin de son continu pour le traçage de câbles, l\'emplacement ou l\'ajustement de la balance.',
        'Gardez les tonalités de test courtes avec de petites enceintes ; les ondes sinusoïdales continues peuvent devenir inconfortables rapidement.',
        'Évitez le gain maximum sur les petites enceintes d\'ordinateur portable et les amplificateurs inconnus.',
        'Ne placez pas les écouteurs sur vos oreilles avant d\'avoir confirmé que le volume est sûr.',
        'Après avoir changé les câbles ou les paramètres, répétez les tests gauche, droite, centre et balayage dans cet ordre.',
        'Pour l\'étalonnage en studio ou home cinéma, combinez ce test rapide avec un sonomètre ou la routine d\'étalonnage du récepteur.',
      ],
    },
    {
      type: 'title',
      text: 'Diagnostic rapide',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si gauche et droite sont inversés, inspectez d\'abord le câblage physique car c\'est la solution la plus rapide pour les enceintes de bureau, les amplificateurs et les interfaces audio. Si les deux boutons jouent des deux côtés, recherchez une sortie mono, l\'audio spatial, le son surround virtuel ou un appareil qui convertit intentionnellement le stéréo en mono. Si le centre est décentré mais que gauche et droite sont correctement routés, le problème vient généralement de la balance, de l\'emplacement, de l\'ajustement des écouteurs, des grilles obstruées ou d\'une sortie inégale des enceintes.',
    },
  ],
  ui: {
    left: 'Gauche',
    center: 'Centre',
    right: 'Droite',
    sweep: 'Balayage',
    stop: 'Arrêter',
    volume: 'Volume',
    duration: 'Durée',
    infiniteMode: 'Boucle jusqu\'à l\'arrêt',
    infiniteModeHint: 'Garde un canal en lecture pour des tests continus.',
    secondsUnit: 's',
    hertzUnit: 'Hz',
    tone: 'Tonalité',
    balance: 'Balance',
    activeIdle: 'Prêt',
    activeLeft: 'Lecture canal gauche',
    activeCenter: 'Lecture tonalité centrée',
    activeRight: 'Lecture canal droit',
    activeSweep: 'Balayage du champ stéréo',
    safety: 'Commencez bas. Les tonalités de test peuvent être fortes via les écouteurs, amplificateurs et petites enceintes d\'ordinateur portable.',
    leftSpeaker: 'Enceinte gauche',
    rightSpeaker: 'Enceinte droite',
    centerLine: 'Champ stéréo',
  },
};
