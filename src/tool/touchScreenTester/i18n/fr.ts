import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TouchScreenTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'testeur-ecran-tactile';
const title = 'Testeur d\'écran tactile';
const description = 'Dessinez sur une toile en plein écran pour détecter les zones mortes, les appuis manqués, la réponse sur les bords, les interférences de paume et le nombre maximal de points tactiles simultanés que votre téléphone ou tablette peut gérer.';

const faqData = [
  {
    question: 'Comment détecter les zones mortes sur un écran tactile ?',
    answer: 'Ouvrez le testeur sur l\'appareil, faites glisser un doigt lentement sur tout l\'écran et repérez les blancs où le trait s\'interrompt. Répétez le long des bords, de la zone du clavier, des coins et de tout endroit qui manque souvent les appuis.',
  },
  {
    question: 'Comment faire un test multi-touch en ligne ?',
    answer: 'Placez plusieurs doigts en même temps sur la toile. Le compteur de contacts actifs indique combien de contacts le navigateur reçoit à l\'instant, et le compteur de pic enregistre le nombre maximal de contacts simultanés atteint pendant la session.',
  },
  {
    question: 'Cet outil peut-il réparer un écran tactile qui ne répond pas ?',
    answer: 'Non. L\'outil ne répare pas le matériel et ne recalibre pas le numériseur. Il aide à documenter les symptômes pour vous permettre de déterminer si le problème vient d\'un protecteur d\'écran, d\'une vitre sale, d\'un bug logiciel, d\'une pression de coque ou d\'un composant tactile endommagé.',
  },
  {
    question: 'Pourquoi mon téléphone détecte-t-il moins de doigts que prévu ?',
    answer: 'Certains panneaux, navigateurs, systèmes d\'exploitation, protecteurs d\'écran, chargeurs et réglages d\'accessibilité limitent ou filtrent les contacts tactiles. Testez sans coque, sur batterie, après avoir nettoyé la vitre et dans un autre navigateur avant de conclure que le panneau est défectueux.',
  },
];

const howToData = [
  { name: 'Nettoyez la vitre et retirez les sources évidentes d\'interférence', text: 'Essuyez l\'écran, séchez vos doigts, débranchez les chargeurs bruyants et retirez les gants épais ou les accessoires conducteurs avant de tester.' },
  { name: 'Tracez lentement des passes horizontales et verticales', text: 'Couvrez l\'écran de traits parallèles d\'un bord à l\'autre. Un panneau en bon état doit produire des lignes continues sans interruption.' },
  { name: 'Vérifiez les coins et les zones de gestes', text: 'Suivez les bords, la zone du clavier, la zone de notifications et les zones de gestes de navigation, car ces régions révèlent souvent en premier une défaillance partielle du numériseur.' },
  { name: 'Mesurez les contacts simultanés', text: 'Placez deux, trois, quatre, cinq doigts ou plus sur la toile et observez le compteur de pic multi-touch.' },
  { name: 'Utilisez le plein écran pour la confirmation finale', text: 'Passez en mode plein écran et répétez le test afin que l\'interface du navigateur ne masque pas les zones tactiles du haut ou du bas.' },
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

export const content: ToolLocaleContent<TouchScreenTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Test d\'écran tactile en ligne pour zones mortes et multi-touch', level: 2 },
    {
      type: 'paragraph',
      html: 'Un panneau tactile peut défaillir d\'une manière difficile à prouver en utilisation normale. Une touche de clavier peut ne pas répondre uniquement près du bord inférieur, une appli de dessin peut sauter une fine bande verticale, ou les jeux peuvent perdre un deuxième doigt dès que le pouce appuie déjà sur une commande. Ce testeur transforme la page entière en surface de dessin pour que chaque trou, trait interrompu et limite de contacts simultanés devienne immédiatement visible.',
    },
    {
      type: 'paragraph',
      html: 'Utilisez-le pour des recherches comme <strong>test écran tactile</strong>, <strong>test multi-touch en ligne</strong>, <strong>vérifier zones mortes écran</strong> et <strong>diagnostic écran tactile</strong>. La toile enregistre le mouvement des doigts localement dans le navigateur ; elle ne téléverse ni dessins, ni positions tactiles, ni identifiants d\'appareil, ni résultats de diagnostic.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '0 installation', label: 'Fonctionne directement dans le navigateur' },
        { value: 'En direct', label: 'Compteur de contacts actifs' },
        { value: 'Toile', label: 'Carte visuelle des zones mortes' },
      ],
    },
    { type: 'title', text: 'Comment identifier les zones mortes de l\'écran tactile', level: 3 },
    {
      type: 'paragraph',
      html: 'Une zone morte est une zone où le numériseur ne signale pas le contact de manière fiable. Il peut s\'agir d\'une bande complètement blanche, d\'un coin qui ignore les appuis ou d\'une petite surface qui ne fonctionne qu\'avec une forte pression. Tracez des lignes lentes et superposées sur tout l\'écran. Si le trait disparaît toujours au même endroit, cette zone mérite un examen plus approfondi.',
    },
    {
      type: 'list',
      items: [
        'Commencez par des traits horizontaux du bord gauche au bord droit, en laissant seulement un petit écart entre les passes.',
        'Répétez avec des traits verticaux du bord supérieur au bord inférieur pour révéler les colonnes étroites que les tests horizontaux peuvent manquer.',
        'Suivez exactement la bordure de l\'écran, car les électrodes de bord et les zones de gestes sont des points de défaillance fréquents.',
        'Dessinez des cercles autour des zones suspectes pour voir si la cassure suit le même emplacement physique.',
        'Faites pivoter l\'appareil et testez à nouveau pour faire la distinction entre un problème de mise en page d\'application et un problème d\'emplacement matériel.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Une ligne blanche répétée est plus révélatrice qu\'un seul trait sauté',
      html: '<p>Un petit trou peut apparaître si un doigt est sec, se déplace trop vite ou quitte le verre. Une zone morte matérielle apparaît habituellement de façon répétée au même endroit physique, dans différentes directions de trait, et même après avoir nettoyé l\'écran.</p>',
    },
    {
      type: 'table',
      headers: ['Symptôme', 'Cause probable', 'Prochaine vérification'],
      rows: [
        ['Rupture de trait dans la même bande verticale', 'Possible défaillance de colonne du numériseur ou bulle sous le protecteur.', 'Retirez le protecteur si possible, nettoyez le verre et refaites le test en plein écran.'],
        ['Les bords ratent les appuis mais le centre fonctionne', 'Pression de coque, rejet de gestes ou problème d\'électrode de bord.', 'Retirez la coque et répétez les tracés lents le long des bordures.'],
        ['Seuls les mouvements rapides sautent', 'Étranglement d\'événements du navigateur, faible taux d\'images ou doigt qui se soulève.', 'Déplacez-vous lentement et comparez avec un autre navigateur.'],
        ['Des points aléatoires apparaissent sans contact', 'Touches fantômes, humidité, bruit du chargeur ou panneau endommagé.', 'Séchez l\'écran, débranchez le chargeur, redémarrez et répétez.'],
      ],
    },
    { type: 'title', text: 'Comment mesurer le support multi-touch', level: 3 },
    {
      type: 'paragraph',
      html: 'Le support multi-touch est le nombre maximal de contacts indépendants que l\'appareil peut signaler en même temps. Un téléphone peut suivre cinq, dix contacts ou plus, tandis que certaines tablettes économiques, bornes, gants, couches de bureau à distance ou navigateurs embarqués peuvent en signaler moins. Le compteur actif indique le nombre actuellement détecté ; le compteur de pic enregistre la valeur la plus haute atteinte depuis la dernière remise à zéro.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Gestes à deux doigts', description: 'Nécessaires pour le pincement, la rotation à deux doigts, les cartes, les éditeurs d\'image et le zoom d\'accessibilité.' },
        { title: 'Trois à cinq contacts', description: 'Utile pour les jeux de rythme, les commandes partagées, les applis de dessin, les claviers de piano et les flux créatifs sur tablette.' },
        { title: 'Dalles à dix contacts', description: 'Courantes sur les téléphones et tablettes modernes, mais le filtrage du navigateur ou du système peut tout de même réduire le compte.' },
      ],
    },
    {
      type: 'tip',
      title: 'Meilleure façon d\'éviter un faux compte bas',
      html: 'Posez les doigts un par un et gardez-les immobiles une seconde. Si vous posez tous les doigts en même temps, certains systèmes interprètent le geste comme une entrée de paume, une intention de zoom ou une navigation système et peuvent supprimer une partie des contacts.',
    },
    {
      type: 'proscons',
      title: 'Testeur en ligne comparé à une application de diagnostic native',
      items: [
        { pro: 'Se lance instantanément sans rien installer ni accorder d\'autorisations étendues à l\'appareil.', con: 'Il ne peut montrer que les événements tactiles exposés par le navigateur et le système d\'exploitation.' },
        { pro: 'Facile à partager avec un réparateur ou un acheteur car le motif de dessin est visible.', con: 'Il ne peut pas lire les tables d\'étalonnage d\'usine ni les codes d\'erreur de bas niveau du numériseur.' },
        { pro: 'Le mode plein écran couvre plus de surface utilisable qu\'une page normale.', con: 'Les barres système, les encoches et les zones de gestes protégées peuvent encore réserver quelques pixels.' },
      ],
    },
    { type: 'title', text: 'Causes fréquentes des appuis manqués', level: 3 },
    {
      type: 'paragraph',
      html: 'Un mauvais résultat tactile ne signifie pas toujours que l\'écran est cassé. Les dalles capacitives reposent sur un champ électrique stable à travers le verre, l\'adhésif, le protecteur, la peau et la masse de l\'appareil. Tout ce qui modifie ce champ peut provoquer des trous, des faux appuis ou un mauvais suivi multi-touch. C\'est pourquoi il est important de tester dans plusieurs conditions.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Numériseur', definition: 'La couche de capteur transparente qui transmet les coordonnées tactiles à l\'appareil.' },
        { term: 'Zone morte', definition: 'Une zone physique de l\'écran où les contacts ne sont pas détectés, ou ne le sont que par intermittence.' },
        { term: 'Touche fantôme', definition: 'Un événement tactile signalé par l\'appareil alors qu\'aucun doigt ne touche intentionnellement cet endroit.' },
        { term: 'Rejet de paume', definition: 'Filtre logiciel qui ignore les contacts larges ou accidentels, en particulier sur les tablettes et les appareils à stylet.' },
        { term: 'Taux d\'échantillonnage tactile', definition: 'Fréquence à laquelle l\'appareil scrute la couche tactile. Des taux plus élevés rendent le dessin et les jeux plus réactifs.' },
      ],
    },
    {
      type: 'table',
      headers: ['Cause', 'Indice typique', 'Vérification rapide'],
      rows: [
        ['Protecteur d\'écran', 'La zone morte suit une bulle, une fissure, un bord de poussière ou un bord de verre épais.', 'Retirez ou soulevez le protecteur uniquement si cela est sûr et s\'il est remplaçable.'],
        ['Humidité ou gras', 'Sauts aléatoires, appuis glissants ou touches manquées après la pluie, la transpiration ou un spray nettoyant.', 'Séchez complètement le verre et les mains, puis refaites le test.'],
        ['Bruit du chargeur', 'Les touches fantômes apparaissent branché et disparaissent sur batterie.', 'Débranchez le chargeur ou utilisez un adaptateur et un câble certifiés.'],
        ['Pression de la coque', 'Les appuis échouent près des coins ou des bords incurvés.', 'Retirez la coque et testez à nouveau le même bord.'],
        ['Dommage matériel', 'La même bande échoue après nettoyage, redémarrage et retrait du protecteur.', 'Documentez le résultat et contactez le support de réparation.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gesture-tap-hold',
      title: 'La pression n\'est pas la même chose que la précision tactile',
      html: 'La plupart des écrans tactiles de téléphones et tablettes sont capacitifs, il ne devrait donc pas être nécessaire d\'appuyer plus fort. Si un endroit ne fonctionne qu\'avec une pression ferme, le problème peut venir d\'un mauvais contact à travers un protecteur, d\'un panneau endommagé, d\'un problème de nappe flexible ou d\'un filtrage logiciel, et non du comportement normal de l\'écran tactile.',
    },
    { type: 'title', text: 'Test des bords, des coins et des zones du clavier', level: 3 },
    {
      type: 'paragraph',
      html: 'De nombreuses plaintes réelles commencent dans les zones très sollicitées : la rangée inférieure du clavier, la touche retour, les gestes de navigation, le volet de notifications, les réglages rapides, les zones de pouce des jeux et les coins de tablette utilisés pour les raccourcis de dessin. Utilisez le mode plein écran avant de juger les zones supérieure et inférieure, car les commandes du navigateur peuvent autrement masquer une partie de l\'écran.',
    },
    {
      type: 'list',
      items: [
        'Tracez un rectangle à une largeur de doigt du bord de l\'écran.',
        'Dessinez de courts traits verticaux sur les rangées du clavier où les lettres manquent.',
        'Maintenez un pouce en position de commande de jeu et dessinez avec un autre doigt pour tester les conflits de contact.',
        'Testez près du port de charge débranché puis branché pour vérifier le bruit de masse.',
        'Si un stylet est utilisé, testez la saisie au doigt séparément de la saisie au stylet, car elles peuvent emprunter des chemins de détection différents.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quand le plein écran change le résultat',
      html: '<p>Si l\'écran fonctionne en plein écran mais pas dans la vue normale du navigateur, le matériel n\'est probablement pas le seul facteur. Les barres d\'adresse, le glisser-pour-actualiser, la navigation système et la gestion des gestes du navigateur peuvent intercepter les appuis près du haut ou du bas de la fenêtre.</p>',
    },
    { type: 'title', text: 'Comment documenter un problème pour réparation ou garantie', level: 3 },
    {
      type: 'paragraph',
      html: 'Pour la garantie, la régularité compte plus qu\'un échec isolé spectaculaire. Effacez la toile, dessinez une grille simple et prenez une photo ou un enregistrement d\'écran lorsque la même zone physique refuse de dessiner. Indiquez si le téléphone était en charge, si un protecteur était installé et si le problème apparaît aussi après un redémarrage.',
    },
    {
      type: 'summary',
      title: 'Preuves utiles à capturer',
      items: [
        'Une toile propre en plein écran montrant des trous répétés au même endroit.',
        'Le pic multi-touch atteint avec plusieurs doigts placés soigneusement.',
        'Une comparaison avec et sans coque, protecteur, chargeur ou gants.',
        'Le modèle de l\'appareil, le navigateur, la version du système et si le problème survient aussi dans les applications.',
      ],
    },
    {
      type: 'message',
      title: 'Note sur la vie privée',
      html: 'Le dessin et les compteurs sont générés côté client. Le testeur est conçu pour un diagnostic immédiat, pas pour une journalisation liée à un compte, une réparation à distance ou le téléversement de schémas d\'interaction sensibles avec l\'écran.',
    },
    { type: 'title', text: 'Grille d\'interprétation des résultats', level: 3 },
    {
      type: 'table',
      headers: ['Résultat', 'Interprétation', 'Fiabilité'],
      rows: [
        ['Traits continus partout', 'La couche tactile est probablement saine dans les conditions actuelles.', 'Élevée pour la saisie tactile de base.'],
        ['Une bande blanche reproductible', 'Possible dommage physique du numériseur ou obstruction du protecteur.', 'Élevée si reproductible après nettoyage et redémarrage.'],
        ['Pic multi-touch bas dans un seul navigateur', 'Limitation du navigateur, de la confidentialité, de la WebView ou de la gestion des gestes.', 'Moyenne. Testez un autre navigateur.'],
        ['Touches fantômes en charge', 'Bruit électrique, problème de masse ou chargeur défectueux.', 'Moyenne à élevée si le débranchement corrige le problème.'],
        ['Échec uniquement avec le protecteur', 'Épaisseur du protecteur, espace adhésif, fissure ou bord soulevé.', 'Élevée si le retrait corrige la zone.'],
      ],
    },
    {
      type: 'summary',
      title: 'Parcours de diagnostic rapide',
      items: [
        'Dessinez une grille complète lentement.',
        'Encerclez tout trou qui se répète.',
        'Effacez la toile et répétez en plein écran.',
        'Retirez la coque ou le protecteur quand c\'est possible.',
        'Mesurez le plus haut compte de contacts simultanés.',
        'Comparez avec un autre navigateur ou une autre application avant de déclarer une panne matérielle.',
      ],
    },
  ],
  ui: {
    activeTouchesLabel: 'Contacts actifs',
    peakTouchesLabel: 'Pic multi-touch',
    coverageLabel: 'Couverture de la toile',
    statusReady: 'Dessinez n\'importe où pour révéler les zones mortes',
    statusDrawing: 'Contact tactile détecté',
    statusCleared: 'Toile effacée',
    clearButton: 'Effacer la toile',
    fullscreenButton: 'Plein écran',
    exitFullscreenButton: 'Quitter le plein écran',
    canvasLabel: 'Toile de test d\'écran tactile',
    unsupportedTouch: 'Les événements tactiles ne sont pas disponibles dans ce navigateur',
  },
};
