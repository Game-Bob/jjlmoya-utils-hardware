import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeyboardChatterTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-rebond-clavier';
const title = 'Test de Rebond de Clavier';
const description = 'Détectez le rebond des claviers mécaniques, la double frappe et les rebonds de contact défectueux en vérifiant la rapidité avec laquelle la même touche apparaît deux fois.';

const faqData = [
  {
    question: 'Qu\'est-ce que le rebond de clavier ?',
    answer: 'Le rebond de clavier est un défaut matériel où une pression physique est enregistrée comme plusieurs pressions. Il est courant sur les interrupteurs mécaniques sales, usés, oxydés ou mal anti-rebondis.',
  },
  {
    question: 'Comment fonctionne ce test de rebond de clavier ?',
    answer: 'Appuyez lentement sur la même touche suspecte, une pression à la fois. Si le journal montre des pressions répétées à seulement quelques millisecondes d\'intervalle, l\'interrupteur rebondit peut-être et produit des doubles lettres.',
  },
  {
    question: 'Quel delta signifie que mon clavier fait de la double frappe ?',
    answer: 'Une pression répétée en dessous de 30 ms est fortement suspecte de rebond. Les répétitions de 30 à 50 ms méritent attention. Les répétitions intentionnelles normales sont généralement au-dessus de 50 ms pour la plupart des utilisateurs.',
  },
  {
    question: 'Pourquoi la première pression n\'affiche-t-elle pas de delta ?',
    answer: 'Un delta nécessite une pression précédente de la même touche. La première pression établit la ligne de base, et les pressions suivantes montrent l\'écart de temps en millisecondes.',
  },
  {
    question: 'Les logiciels peuvent-ils corriger le rebond de clavier ?',
    answer: 'Un logiciel anti-rebond peut masquer certains symptômes, mais il ne répare pas l\'interrupteur. Nettoyer, réinsérer les interrupteurs hot-swap, remplacer l\'interrupteur ou réparer le PCB du clavier peut être nécessaire.',
  },
];

const howToData = [
  {
    name: 'Ouvrez l\'outil et appuyez normalement sur les touches',
    text: 'Il n\'y a pas de bouton de démarrage. Cliquez dans l\'outil si nécessaire, puis appuyez sur la touche qui a tapé en double.',
  },
  {
    name: 'Appuyez une seule fois sur la touche suspecte',
    text: 'Appuyez sur la touche qui tape en double. Si une pression physique crée plusieurs lignes de journal avec de petits deltas, l\'interrupteur rebondit probablement.',
  },
  {
    name: 'Lisez le code couleur',
    text: 'Vert signifie normal au-dessus de 50 ms, jaune signifie suspect de 30 à 50 ms et rouge signifie rebond détecté en dessous de 30 ms.',
  },
  {
    name: 'Exportez le journal si nécessaire',
    text: 'Utilisez le bouton de téléchargement pour enregistrer un journal CSV qui peut aider à comparer les touches ou documenter un défaut intermittent.',
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

export const content: ToolLocaleContent<KeyboardChatterTestUI> = {
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
      text: 'Test de Double Frappe de Clavier Mécanique',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce test de rebond de clavier aide à diagnostiquer un clavier mécanique qui tape deux lettres à partir d\'une pression, rate des relâchements nets ou produit des caractères répétés sans que vous tapiez intentionnellement deux fois. Utilisez-le avant de nettoyer des interrupteurs, de modifier les paramètres anti-rebond du firmware, d\'ouvrir une réclamation de garantie ou de remplacer un interrupteur hot-swap.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Comment lire le résultat',
      badge: 'Seuils de delta',
      html: '<p><strong>Normal</strong> signifie que la répétition était au-dessus de 50 ms et est généralement intentionnelle. <strong>Suspect</strong> signifie 30-50 ms et doit être retesté sur la même touche. <strong>Rebond détecté</strong> signifie en dessous de 30 ms, ce qui est très probablement une pression physique rebondissant en plusieurs contacts électriques.</p>',
    },
    {
      type: 'title',
      text: 'Pourquoi les Interrupteurs Mécaniques Rebondissent',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un interrupteur mécanique ne se ferme pas comme un signal numérique parfaitement propre. Les contacts métalliques peuvent rebondir pendant quelques millisecondes avant de se stabiliser. Le firmware du clavier filtre normalement ce rebond avec une fenêtre anti-rebond. Le rebondissement se produit lorsque le contact est sale, usé, oxydé, desserré, fissuré ou mal réglé au point que le clavier signale des pressions supplémentaires après que le filtre anti-rebond aurait dû les gérer.',
    },
    {
      type: 'table',
      headers: ['Symptôme', 'Cause probable', 'Que tester en premier'],
      rows: [
        ['Une touche tape la même lettre deux fois', 'Contact d\'interrupteur sale ou usé', 'Retirez le capuchon, soufflez la poussière et testez à nouveau avant de remplacer l\'interrupteur.'],
        ['Plusieurs touches hot-swap rebondissent après un montage', 'Broches d\'interrupteur mal insérées', 'Retirez et réinsérez l\'interrupteur, en vérifiant les broches tordues ou un socket desserré.'],
        ['Se produit seulement après des déversements ou de l\'humidité', 'Oxydation ou résidus sur les contacts', 'Débranchez le clavier et nettoyez selon les instructions du fabricant.'],
        ['De nombreuses touches montrent de petits deltas', 'Anti-rebond du firmware trop bas ou problème de scan', 'Comparez sur un autre port USB et examinez les paramètres anti-rebond du firmware si disponibles.'],
      ],
    },
    {
      type: 'title',
      text: 'Méthode de Test Qui Réduit les Faux Positifs',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Testez une touche suspecte à la fois au lieu de taper des phrases complètes.',
        'Appuyez une fois sur la touche, relâchez-la complètement et attendez un moment avant la pression suivante.',
        'Comparez la touche suspecte avec une touche voisine qui semble saine.',
        'Ignorez la première ligne pour une touche car il n\'y a pas de pression précédente à comparer.',
        'Si la même touche montre à plusieurs reprises des lignes rouges sous 30 ms avec des pressions simples, traitez-la comme un défaut matériel.',
        'Si seules des lignes jaunes apparaissent, répétez le test plus lentement et vérifiez si votre rythme de frappe cause l\'intervalle court.',
      ],
    },
    {
      type: 'title',
      text: 'Rebond vs. Frappe Rapide Intentionnelle',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Rebond',
          description: 'Concentré sur une touche, souvent en dessous de 30 ms, et apparaît lorsque vous vouliez une seule pression.',
          points: ['Inspectez l\'interrupteur ou le socket.', 'Comparez avec une touche saine voisine.'],
        },
        {
          title: 'Frappe rapide',
          description: 'Affecte de nombreuses touches, suit votre rythme et tend à se situer au-dessus de 50 ms entre les pressions répétées de la même touche.',
          points: ['Généralement une utilisation normale.', 'Retestez avec des pressions simples plus lentes.'],
        },
        {
          title: 'Répétition de touche du système',
          description: 'Apparaît en maintenant une touche enfoncée et se répète généralement à un rythme régulier défini par votre système d\'exploitation.',
          points: ['Relâchez complètement entre les pressions.', 'Vérifiez les paramètres de répétition du clavier séparément.'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Que Faire Quand une Touche Échoue',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Enregistrez un journal CSV avant de changer quoi que ce soit pour pouvoir comparer les résultats avant et après.',
        'Retirez le capuchon de touche et inspectez la saleté, les résidus de liquide ou une tige qui ne revient pas en douceur.',
        'Pour les claviers hot-swap, réinsérez ou remplacez l\'interrupteur et testez à nouveau la même position.',
        'Pour les claviers soudés, comparez les options anti-rebond du firmware avant de supposer que le PCB a besoin de réparation.',
        'Essayez un autre câble et port USB si plusieurs touches non liées montrent des deltas impossibles.',
        'Pour le support de garantie, incluez la touche affectée, les valeurs delta répétées, le modèle de clavier, la version du firmware et si le défaut suit l\'interrupteur ou le socket PCB.',
      ],
    },
    {
      type: 'summary',
      title: 'Règle rapide',
      items: [
        'Une seule ligne rouge est un indice, pas un verdict.',
        'Des lignes rouges répétées en dessous de 30 ms sur la même touche physique sont une preuve forte de rebond de clavier.',
        'Utilisez des pressions simples délibérées et comparez l\'interrupteur suspect avec une touche saine voisine avant de remplacer le matériel.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Appuyez sur une touche',
    statusListening: 'Mesure des deltas de touche',
    statusChatter: 'Rebond détecté',
    totalPresses: 'Pressions totales',
    chatterEvents: 'Événements de rebond',
    worstDelta: 'Pire delta',
    watchWindow: 'Lignes conservées',
    keyColumn: 'Touche',
    deltaColumn: 'Delta',
    verdictColumn: 'Verdict',
    timeColumn: 'Temps',
    normal: 'Normal',
    suspect: 'Suspect',
    chatter: 'Rebond',
    waiting: 'En attente',
    clear: 'Effacer le journal',
    exportLog: 'Exporter CSV',
    hint: 'Le journal conserve les 80 lignes les plus récentes pour que les longues sessions restent rapides. La répétition de touche maintenue est ignorée ; les lignes rouges proviennent de pressions séparées trop rapprochées.',
    captureNotice: 'Pas de bouton de démarrage. Appuyez une fois sur une touche suspecte et observez le delta par rapport à sa pression précédente.',
    keyboardAriaLabel: 'Activité récente des touches',
    logAriaLabel: 'Journal des événements de rebond de clavier',
    escapeKey: 'Échap',
    backspaceKey: 'Retour',
    tabKey: 'Tab',
    enterKey: 'Entrée',
    capsLockKey: 'Verr Maj',
    shiftKey: 'Maj',
    controlKey: 'Ctrl',
    metaKey: 'Meta',
    altKey: 'Alt',
    spaceKey: 'Espace',
    csvHeader: 'touche,code,delta_ms,gravité,heure',
  },
};
