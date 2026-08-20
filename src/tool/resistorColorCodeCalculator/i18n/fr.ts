import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResistorColorCodeUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = "calculateur-code-couleurs-resistance";
const title = "Calculateur de code couleur des résistances";
const description = "Décode les bandes de couleur d'une résistance et calcule sa valeur, sa tolérance, sa plage et son coefficient de température. Travaille aussi à partir d'une valeur cible ou d'un marquage CMS.";

const faqData = [{"question":"Comment lire les bandes de couleur d'une résistance ?","answer":"Commence par l'extrémité opposée à la bande de tolérance, souvent un peu espacée. Les deux ou trois premières bandes donnent les chiffres, puis vient le multiplicateur et enfin la tolérance."},{"question":"Que signifie un code à quatre bandes ?","answer":"Les deux premières bandes donnent les chiffres significatifs, la troisième est le multiplicateur et la quatrième indique la tolérance."},{"question":"Quelle est la tolérance d'un code à trois bandes ?","answer":"Sans bande de tolérance, un code à trois bandes est généralement interprété avec une tolérance de plus ou moins 20 pour cent."},{"question":"Quelle est la différence entre cinq et six bandes ?","answer":"Cinq bandes utilisent trois chiffres et une tolérance. La sixième ajoute le coefficient de température en ppm par degré Celsius."},{"question":"Le calculateur lit-il les marquages CMS ?","answer":"Oui. Saisis trois ou quatre chiffres, ou une notation comme 4R7. La lettre R remplace le séparateur décimal."},{"question":"Le résultat prouve-t-il qu'une résistance est sûre ?","answer":"Non. Vérifie aussi la puissance, la tension, la température, la tolérance et les exigences du circuit."}];

const howToData = [{"name":"Choisir le nombre de bandes","text":"Sélectionne trois, quatre, cinq ou six bandes selon le composant."},{"name":"Choisir chaque couleur","text":"Active une position puis choisis sa couleur dans la palette. Le dessin se met à jour immédiatement."},{"name":"Lire la valeur","text":"Consulte la grande valeur puis la tolérance, la plage admissible et le coefficient thermique éventuel."},{"name":"Vérifier l'orientation","text":"Place si possible la bande de tolérance à droite et compare le résultat avec le schéma ou la fiche technique."}];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: "fr",
};

export const content: ToolLocaleContent<ResistorColorCodeUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [{"type":"title","text":"Calculateur de code couleur des résistances","level":2},{"type":"paragraph","html":"Décode les résistances à trois, quatre, cinq et six bandes dans le navigateur. Chaque couleur devient des chiffres significatifs, un multiplicateur, une tolérance, une plage de résistance et un coefficient de température."},{"type":"title","text":"Lire un code couleur de résistance","level":3},{"type":"paragraph","html":"Commence à l'opposé de la bande de tolérance. Deux ou trois bandes donnent les chiffres, la suivante donne le multiplicateur et la bande de tolérance indique la variation autour de la valeur nominale."},{"type":"table","headers":["Bandes","Chiffres significatifs","Indication supplémentaire","Usage courant"],"rows":[["Trois bandes","Deux","Tolérance par défaut de 20 pour cent","Identification générale"],["Quatre bandes","Deux","Tolérance","Résistances à fils courantes"],["Cinq bandes","Trois","Tolérance","Résistances de précision"],["Six bandes","Trois","Tolérance et coefficient thermique","Circuits de précision"]]},{"type":"title","text":"Partir d'une valeur cible","level":3},{"type":"paragraph","html":"Le mode inverse permet de saisir une résistance recherchée. Le calculateur l'arrondit à une valeur représentable et affiche la séquence de couleurs correspondante."},{"type":"title","text":"Marquages des résistances CMS","level":3},{"type":"paragraph","html":"Les résistances CMS utilisent souvent trois ou quatre chiffres. Le dernier chiffre est la puissance de dix appliquée aux chiffres initiaux. R remplace le séparateur décimal, donc 4R7 signifie 4,7 ohms."},{"type":"title","text":"Vérifications avant installation","level":2},{"type":"list","items":["Compare la valeur avec le schéma ou la documentation de maintenance.","Vérifie la tolérance et la puissance dans la fiche technique.","Utilise l'espacement de la bande de tolérance pour confirmer le sens de lecture.","Mesure le composant isolé si le marquage est abîmé ou ambigu.","Un code couleur ne garantit pas la sécurité électrique."]},{"type":"tip","title":"Conseil","html":"L'outil identifie le marquage. Il ne mesure pas la résistance réelle, la puissance, la tension d'isolement ni la fiabilité à long terme."}],
  ui: {"sceneKicker":"Laboratoire du spectre EIA","hint":"Touche une bande puis choisis une couleur. La résistance répond immédiatement.","decodeMode":"Décoder les bandes","reverseMode":"Travailler à rebours","smdMode":"Décoder un CMS","bandCount":"Nombre de bandes","bandCount3":"3 bandes","bandCount4":"4 bandes","bandCount5":"5 bandes","bandCount6":"6 bandes","selectBand":"Choisir une bande","colorPalette":"Palette de couleurs","bandLabel":"Bande","resistance":"Résistance","tolerance":"Tolérance","range":"Plage admissible","temperatureCoefficient":"Coefficient de température","noTempco":"Non codé","targetResistance":"Résistance cible en ohms","targetHint":"Saisis un nombre comme 4700.","targetUnit":"ohms","toleranceChoice":"Tolérance cible","tolerance20":"20 pour cent","tolerance10":"10 pour cent","tolerance5":"5 pour cent","tolerance2":"2 pour cent","tolerance1":"1 pour cent","smdCode":"Marquage CMS","smdHint":"Utilise 472 pour 4,7 kΩ ou 4R7 pour 4,7 Ω.","decodeSmd":"Décoder le marquage","valueUnit":"Ω","ohms":"ohms","kiloohms":"kiloohms","megaohms":"mégohms","gigaohms":"gigohms","minValue":"Minimum","maxValue":"Maximum","actualValue":"Valeur décodée","requestedValue":"Valeur demandée","status":"État","statusReady":"Prêt à lire","statusCheck":"Valeur représentable la plus proche","statusInvalid":"Vérifie le code","orientationNote":"Indice d'orientation: place la bande de tolérance, légèrement espacée, à droite. L'or et l'argent ne donnent pas de chiffre.","reverseNote":"Le mode inverse choisit une valeur représentable et affiche le code couleur produit.","smdNote":"Cette vue compacte lit le marquage CMS, mais le code n'encode pas la tolérance.","colorBlack":"Noir","colorBrown":"Marron","colorRed":"Rouge","colorOrange":"Orange","colorYellow":"Jaune","colorGreen":"Vert","colorBlue":"Bleu","colorViolet":"Violet","colorGray":"Gris","colorWhite":"Blanc","colorGold":"Or","colorSilver":"Argent"},
};
