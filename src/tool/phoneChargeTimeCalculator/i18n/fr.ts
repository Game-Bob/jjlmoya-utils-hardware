import type { ToolLocaleContent } from '../../../types';
import type { PhoneChargeTimeCalculatorUI } from '../ui';
import { createPhoneChargeTimeCalculatorContent } from './createContent';

const ui: PhoneChargeTimeCalculatorUI = {
  capacityLabel: 'Capacité de la batterie', capacityUnit: 'mAh', capacityHint: 'Utilisez la valeur des caractéristiques du téléphone.',
  currentLabel: 'Charge actuelle', targetLabel: 'Charge cible', percentUnit: '%', powerLabel: 'Puissance du chargeur', powerUnit: 'W',
  efficiencyLabel: 'Rendement estimé', efficiencyUnit: '%', efficiencyHint: 'Inclut les pertes de conversion et de chaleur.',
  statusEmpty: 'Saisissez les informations du téléphone et du chargeur.', statusReady: 'Mise à jour pendant la saisie.', statusError: 'Vérifiez la valeur signalée.',
  resultTitle: 'Temps estimé jusqu\'à la cible', energyLabel: 'Énergie encore nécessaire', energyUnit: 'Wh', fromCurrentCharge: 'à partir de la charge actuelle', startNowLabel: 'En commençant maintenant, atteint',
  scenarioTitle: 'Scénarios de charge de référence', scenarioAt: 'même téléphone et même plage de charge', assumptionsTitle: 'Hypothèses',
  assumptionsText: 'Utilise une tension nominale de batterie de {voltage} V, un rendement de {efficiency}% et environ {taper}% de temps de charge supplémentaire au-dessus de 70%. Votre téléphone peut se comporter autrement.',
  errorCapacity: 'Saisissez une capacité supérieure à zéro.', errorCurrent: 'La charge actuelle doit être comprise entre 0 et 100%.', errorTarget: 'La charge cible doit être comprise entre 1 et 100%.',
  errorTargetOrder: 'La charge cible doit être supérieure à la charge actuelle.', errorPower: 'Saisissez une puissance supérieure à zéro.', errorEfficiency: 'Le rendement doit être compris entre 50% et 100%.',
  targetMarker: 'cible', chargeProgressLabel: 'Plage de charge', hourUnit: 'h', minuteUnit: 'min',
};

const faq = [
  { question: 'Puis-je calculer le temps de charge avec le seul pourcentage de batterie ?', answer: 'Non. Un même pourcentage représente une quantité d\'énergie différente selon la taille de la batterie. Le calculateur a aussi besoin de la capacité, de la puissance qui atteint le téléphone et d\'une estimation du rendement.' },
  { question: 'Pourquoi mon téléphone prend-il parfois plus de temps que prévu ?', answer: 'Le téléphone peut réduire la puissance à cause d\'un niveau de charge élevé, de la chaleur, du câble ou du protocole de charge, ou de l\'utilisation de l\'appareil. Le résultat est une estimation de planification, pas une mesure en direct.' },
  { question: 'Dois-je saisir la puissance du chargeur ou celle reçue par le téléphone ?', answer: 'Saisissez la puissance qui devrait atteindre le téléphone lorsque vous la connaissez. Si vous ne connaissez que la puissance indiquée sur le chargeur, utilisez-la comme estimation haute et prévoyez un temps réel plus long.' },
];

const howTo = [
  { name: 'Saisir la capacité de la batterie', text: 'Relevez la capacité du téléphone dans ses caractéristiques et saisissez-la en mAh. N\'utilisez pas la capacité d\'une batterie externe: sa tension et ses pertes de conversion correspondent à un autre circuit.' },
  { name: 'Définir la plage de charge', text: 'Saisissez le pourcentage actuel et le pourcentage souhaité. Une recharge de 20% à 50% ne demande pas le même temps qu\'une recharge complète.' },
  { name: 'Ajouter puissance et rendement', text: 'Saisissez la puissance en watts ou, si elle est connue, la puissance de charge réellement acceptée par le téléphone. Conservez la valeur de rendement par défaut sans mesure plus précise.' },
  { name: 'Comparer les scénarios', text: 'Comparez le résultat avec les références 5 W, 15 W et 30 W pour décider si le chargeur convient au temps dont vous disposez.' },
];

const seo = [
  { type: 'title' as const, text: 'Calculer le temps de charge de son téléphone', level: 2 as const },
  { type: 'paragraph' as const, html: 'Utilisez ce calculateur de temps de charge lorsque vous voulez savoir si votre téléphone atteindra un niveau utile avant de partir, pendant un trajet ou avant un long appel. Saisissez la capacité de la batterie, la charge actuelle, la cible, la puissance et le rendement. Le résultat indique les minutes et l\'énergie nécessaires pour cette recharge précise, afin de comparer le temps disponible avec un chargeur plus lent ou plus puissant.' },
  { type: 'title' as const, text: 'Quelles valeurs saisir', level: 2 as const },
  { type: 'list' as const, items: ['Capacité: utilisez la capacité du téléphone en mAh, et non celle d\'une batterie externe.', 'Charge actuelle et cible: décrivez la recharge dont vous avez réellement besoin; la cible doit être supérieure au niveau actuel.', 'Puissance et rendement: utilisez la puissance reçue par le téléphone si vous la connaissez. La puissance du chargeur est sinon une limite supérieure.'] },
  { type: 'title' as const, text: 'Interpréter le résultat', level: 2 as const },
  { type: 'paragraph' as const, html: 'Le chiffre principal correspond au temps estimé entre la charge actuelle et la cible. L\'énergie restante exprime la même recharge en watt-heures et les barres de référence montrent l\'effet de 5 W, 15 W et 30 W. Si le temps disponible est plus court, diminuez la cible ou choisissez un chargeur et un câble que le téléphone peut réellement exploiter à une puissance supérieure.' },
  { type: 'title' as const, text: 'Pourquoi la charge ralentit près de 100%', level: 2 as const },
  { type: 'paragraph' as const, html: 'Un téléphone ne charge généralement pas à une puissance constante de 0 à 100%. Lorsque la batterie approche d\'un niveau élevé, son système de charge peut réduire le courant pour maîtriser la chaleur et la sollicitation. Une estimation de 20% à 80% est donc souvent plus utile qu\'une extrapolation linéaire jusqu\'à 100%. Pour les cibles supérieures à 70%, le calcul ajoute une petite marge de ralentissement.' },
  { type: 'title' as const, text: 'Estimation: ce que le calculateur ne peut pas détecter', level: 2 as const },
  { type: 'list' as const, items: ['Il ne peut pas lire le modèle, l\'état de la batterie, le protocole, le câble, la température, l\'utilisation ou la puissance de charge instantanée.', 'Il ne diagnostique pas une batterie usée et ne certifie pas la compatibilité avec la charge rapide. Pour une réponse précise, chronométrez la même configuration dans la situation concernée.'] },
];

export const content: ToolLocaleContent<PhoneChargeTimeCalculatorUI> = createPhoneChargeTimeCalculatorContent({ locale: 'fr', slug: 'calculateur-temps-charge-telephone', title: 'Calculateur de temps de charge du téléphone', description: 'Estimez le temps nécessaire pour atteindre un pourcentage cible avec la capacité de la batterie, la charge actuelle, la puissance du chargeur et le rendement.', faq, howTo, seo, ui });
