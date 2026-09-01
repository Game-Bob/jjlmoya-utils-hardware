import { makeLocaleContent } from "../locale-content";

export const content = makeLocaleContent({
  slug: "calculateur-largeur-impedance-piste-pcb",
  title: "Vérificateur de largeur et d'impédance de piste PCB",
  description:
    "Vérifiez la largeur thermique, la chute de tension, les pertes et une estimation indépendante de l'impédance contrôlée d'une piste selon sa couche et son empilage.",
  ui: {
    metricLabel: "Métrique",
    imperialLabel: "Impérial",
    steadyLabel: "Courant continu",
    pulseLabel: "Impulsion répétée",
    currentProfileTitle: "Profil de courant",
    steadyCurrentLabel: "Courant continu",
    pulseCurrentLabel: "Courant de crête",
    pulseDurationLabel: "Durée d'impulsion",
    dutyCycleLabel: "Rapport cyclique",
    copperPathTitle: "Chemin de cuivre",
    layerLabel: "Couche de la piste",
    externalLabel: "Externe",
    internalLabel: "Interne",
    copperThicknessLabel: "Épaisseur du cuivre",
    temperatureRiseLabel: "Échauffement autorisé",
    lengthLabel: "Longueur de piste",
    availableWidthLabel: "Largeur disponible",
    signalGeometryTitle: "Géométrie du signal",
    targetImpedanceLabel: "Impédance cible",
    dielectricHeightLabel: "Diélectrique jusqu'au plan de référence",
    dielectricConstantLabel: "Permittivité relative",
    thermalWidthTitle: "Largeur thermique minimale",
    availableWidthTitle: "Espace après largeur thermique",
    impedanceTitle: "Impédance à la largeur thermique",
    voltageDropTitle: "Chute de tension à la crête",
    powerLossTitle: "Perte de puissance du cuivre",
    pulseEnergyTitle: "Énergie par impulsion",
    statusEmpty: "Saisissez les conditions de la piste pour commencer.",
    statusInvalid:
      "Utilisez des valeurs positives et gardez l'échauffement et le rapport cyclique dans leur plage.",
    statusReady:
      "Trois contrôles sont actifs: largeur thermique, perte électrique et impédance.",
    externalModel: "La couche externe utilise le microstrip",
    internalModel: "La couche interne utilise le stripline",
    thermalBadge: "Vérification thermique en attente",
    impedanceBadge: "Vérification d'impédance en attente",
    widthFits: "La largeur tient dans l'espace disponible",
    widthDoesNotFit: "Il faut davantage d'espace de routage",
    impedanceClose: "dans une vérification à 10 %",
    impedanceFar: "hors d'une vérification à 10 %",
    resetLabel: "Réinitialiser",
    presetTitle: "Charger un cas de routage",
    presetLogic: "Rail d'alimentation 2 A",
    presetSignal: "Piste logique 50 ohms",
    presetPulse: "Chemin d'impulsion 8 A",
    sceneLabel:
      "Comparaison des largeurs thermique, disponible et d'impédance de la piste",
    sceneCaption: "Choisissez les conditions et le cuivre se dessinera.",
    referenceLineLabel: "Largeur cible d'impédance",
    thermalLineLabel: "Minimum thermique",
    availableLineLabel: "Couloir disponible",
    modelNote:
      "La couche modifie l'évacuation thermique et la géométrie du champ.",
  },
  seo: [
    {
      type: "title",
      text: "Vérifier une piste PCB avant le routage",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Une piste peut être assez large pour conduire le courant tout en étant inadaptée à un signal à impédance contrôlée. Ce calculateur de piste PCB garde ces décisions visibles ensemble: il dimensionne le cuivre pour un échauffement choisi, mesure la pénalité électrique de cette largeur et vérifie séparément la géométrie du signal.",
    },
    {
      type: "paragraph",
      html: "Saisissez le courant réellement transporté par la piste, et non la seule puissance d'une alimentation voisine. Pour une piste continue de 2 A sur 35 µm de cuivre externe avec 10 °C d'échauffement, le modèle thermique demande un conducteur plus large qu'une petite piste logique. La même largeur permet ensuite d'évaluer résistance, chute de tension et pertes.",
    },
    {
      type: "title",
      text: "Thermique et impédance répondent à des questions différentes",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Le contrôle thermique utilise la relation empirique I = k × ΔT^0.44 × A^0.725, où A est la section de cuivre en mils carrés et où k varie entre couche externe et interne. En mode impulsion, l'outil utilise le courant de crête multiplié par la racine carrée du rapport cyclique comme approximation RMS d'un échauffement répétitif. Cela ne modélise ni une surtension unique, ni un champ de vias, ni un plan dissipateur.",
    },
    {
      type: "list",
      items: [
        "Utilisez l'épaisseur de cuivre finie du fabricant, plutôt que le seul poids nominal de la feuille.",
        "Choisissez le plus petit échauffement autorisé lorsque les composants ou l'isolant sont sensibles à la température.",
        "Considérez une marge d'espace négative comme un conflit de routage.",
        "Si les largeurs thermique et d'impédance divergent, déterminez si le réseau est de puissance, de signal ou porte deux intentions différentes.",
      ],
    },
    { type: "title", text: "Lire la scène de la piste", level: 3 },
    {
      type: "paragraph",
      html: "La bande pleine représente la largeur thermique minimale. La bande claire représente le couloir disponible dans le circuit. La ligne de référence en pointillés indique la largeur qui atteindrait l'impédance cible avec les hypothèses d'empilage saisies. Le résultat affiche aussi l'impédance à la largeur thermique pour montrer si la décision de courant éloigne le signal de sa cible.",
    },
    { type: "title", text: "Vérifications avant fabrication", level: 3 },
    {
      type: "paragraph",
      html: "Une équation d'impédance nominale ne connaît pas l'épaisseur finale du diélectrique, la résine, le profil de gravure, le vernis épargne, le cuivre voisin ni les tolérances. L'IPC-2152 relie également le dimensionnement du conducteur à la construction de la carte et à la dissipation thermique. Utilisez cette page pour cadrer l'échange, puis confirmez l'empilage avec le fabricant, un solveur de champ ou un coupon.",
    },
    {
      type: "tip",
      title: "Une estimation n'est pas une validation de fabrication",
      html: "Conservez les contrôles thermique, de chute de tension et d'impédance comme trois notes distinctes. Confirmez vias, étranglements, plans, température ambiante, régime impulsionnel, distances d'isolement et tolérances avant de libérer la géométrie.",
    },
  ],
  faqTitle: "Questions sur la largeur et l'impédance des pistes PCB",
  faq: [
    {
      question: "Dois-je saisir le courant moyen ou le courant de crête ?",
      answer:
        "Pour une piste continue, utilisez le courant continu. En mode impulsion répétée, saisissez le courant de crête, la durée et le rapport cyclique afin d'obtenir une approximation RMS thermique. Un appel de courant unique nécessite une étude transitoire.",
    },
    {
      question: "Pourquoi une piste interne demande-t-elle plus de cuivre ?",
      answer:
        "Le modèle thermique empirique rapide utilise une constante plus basse pour les couches internes, car le cuivre enterré évacue généralement moins bien la chaleur qu'une piste externe. La construction réelle peut modifier le résultat.",
    },
    {
      question: "Que signifie largeur disponible ?",
      answer:
        "Saisissez le couloir que votre circuit peut réserver à la piste finie. Une marge négative signifie que le minimum thermique dépasse ce couloir et demande plus d'espace, de cuivre, des pistes parallèles ou une autre cible thermique.",
    },
    {
      question: "Ce calculateur produit-il une vraie piste PCB de 50 ohms ?",
      answer:
        "Il estime l'impédance nominale microstrip ou stripline à partir de la largeur, du cuivre, de la hauteur diélectrique et de la permittivité relative. Le fabricant doit confirmer la géométrie et les tolérances avant toute libération d'impédance contrôlée.",
    },
    {
      question:
        "Pourquoi la chute de tension utilise-t-elle le courant de crête ?",
      answer:
        "Cela expose la pire chute instantanée I fois R d'une impulsion. L'énergie utilise I²R multiplié par la durée, tandis que la largeur thermique utilise l'approximation RMS répétitive.",
    },
  ],
  bibliographyTitle: "Références de conception PCB",
  howTo: [
    {
      name: "Décrire le courant",
      text: "Choisissez courant continu ou impulsion répétée et renseignez le profil.",
    },
    {
      name: "Saisir l'empilage fini",
      text: "Choisissez la couche et saisissez cuivre, échauffement et géométrie diélectrique.",
    },
    {
      name: "Décider du routage",
      text: "Comparez minimum thermique, couloir disponible et cible d'impédance, puis vérifiez l'empilage avec le fabricant.",
    },
  ],
});
