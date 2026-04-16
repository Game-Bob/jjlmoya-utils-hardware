import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PixelesPantallaUI } from '../ui';

const slug = 'test-pixel-morti-riparazione-schermo';
const title = 'Test Pixel Morti e Strumento Riparazione Schermo';
const description =
  'Verifica se il tuo monitor presenta pixel morti o bloccati e riparali con il nostro strumento stroboscopico ad alta frequenza online.';

const faqData = [
  {
    question: 'Qual è la differenza tra un pixel morto e un pixel bloccato?',
    answer:
      'Un pixel morto è permanentemente nero perché non riceve alimentazione (transistor bruciato). Un pixel bloccato (stuck pixel) è solitamente di un colore brillante (rosso, verde o blu) e può essere riattivato tramite una stimolazione stroboscopica rapida.',
  },
  {
    question: 'Come funziona lo strumento di riparazione (Strobe)?',
    answer:
      'Il nostro strumento genera un rapido lampeggio dei colori primari ad alta velocità. Questo può forzare lo sblocco del cristallo liquido bloccato del pixel. Si consiglia di lasciarlo agire per 10-30 minuti.',
  },
  {
    question: 'I pixel morti possono apparire a causa della temperatura?',
    answer:
      'Sì, le temperature estreme possono influire sul pannello. Tuttavia, le cause più comuni sono difetti di fabbricazione o impatti fisici che danneggiano i contatti elettrici del cristallo liquido.',
  },
  {
    question: 'Quanti pixel morti sono coperti dalla garanzia?',
    answer:
      'Dipende dal produttore e dallo standard ISO 9241-307. Generalmente, i marchi considerano fino a 2 o 3 pixel luminosi come "normali" sui pannelli di Classe 1, mentre i pannelli di Classe 0 non ne consentono alcuno.',
  },
];

const howToData = [
  {
    name: 'Pulire lo schermo',
    text: 'Prima di iniziare, pulisci accuratamente il monitor con un panno in microfibra per evitare di confondere la polvere con un pixel morto.',
  },
  {
    name: 'Attivare la modalità a schermo intero',
    text: 'Premi F11 o il pulsante dello schermo intero affinché l\'interfaccia del browser non interferisca con il rilevamento dei difetti.',
  },
  {
    name: 'Alternare i colori',
    text: 'Passa tra sfondi neri, bianchi, rossi, verdi e blu. Cerca eventuali punti che non corrispondono al colore dello sfondo.',
  },
  {
    name: 'Avviare il ciclo di riparazione',
    text: 'Se trovi un punto luminoso, posiziona lo strumento Strobe su di esso e lascialo agire per almeno 20 minuti.',
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<PixelesPantallaUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti e Standard',
  bibliography: [
    {
      name: 'ISO/IEC 9241-307: Ergonomia del display e apparecchiature correlate',
      url: 'https://www.iso.org/standard/72025.html',
    },
    {
      name: 'Dead Pixel Policy - Standard comuni (VESA)',
      url: 'https://www.vesa.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guida Completa: Pixel Morti, Pixel Bloccati e Come Ripararli',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hai notato una strana macchia sullo schermo che non cambia colore? Potrebbe essere un difetto del pannello. Questo strumento ti aiuta a diagnosticare se il tuo monitor ha <strong>pixel morti</strong> o <strong>pixel bloccati</strong> e offre una soluzione per provare a ripararli.',
    },
    {
      type: 'title',
      text: 'Qual è la differenza tra un pixel morto e un pixel bloccato?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esistono due tipi principali di difetti dei pixel nei monitor moderni, ciascuno con caratteristiche e soluzioni distinte.',
    },
    {
      type: 'title',
      text: 'Pixel Bloccato (Stuck Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'È il difetto più comune. Si verifica quando uno o più subpixel (Rosso, Verde o Blu) rimangono bloccati nello stato "acceso". <strong>Sintomo:</strong> vedrai un punto colorato permanentemente luminoso (rosso, verde, blu o bianco) su uno sfondo scuro. <strong>Spesso riparabile.</strong> Il cristallo liquido risponde ancora; è semplicemente "bloccato" in una specifica polarizzazione. Il nostro strumento di riparazione stroboscopica tenta di sbloccarlo con una rapida stimolazione di tensione.',
    },
    {
      type: 'title',
      text: 'Pixel Morto (Dead Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Si verifica quando il transistor che controlla il pixel si guasta completamente e non lascia passare la luce. <strong>Sintomo:</strong> un punto nero permanente, particolarmente visibile su sfondi chiari o bianchi. <strong>Difficile da riparare (solitamente permanente).</strong> Il danno è a livello hardware (circuito bruciato). Nessuna stimolazione elettrica può risolverlo. In genere richiede la sostituzione del pannello.',
    },
    {
      type: 'title',
      text: 'Come funziona lo strumento di riparazione stroboscopica?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La funzione "Riparazione Pixel" utilizza una tecnica nota come <strong>Pixel Exercising</strong>. Genera un pattern di rumore casuale ad alta frequenza (rapido lampeggio di colori) sull\'area interessata.',
    },
    {
      type: 'title',
      text: 'Il meccanismo: Cristalli Liquidi e Tensione',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'I monitor LCD utilizzano cristalli liquidi che cambiano la loro trasparenza in base alla tensione applicata. Quando un subpixel si blocca, significa che il cristallo è "congelato" in una specifica polarizzazione. I rapidi cambiamenti di tensione (ottenuti attraverso rapidi cambiamenti dei colori primari) tentano di "esercitare" il cristallo e costringerlo a cambiare stato.',
    },
    {
      type: 'title',
      text: 'Raccomandazioni per l\'uso',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '<ul><li>Si consiglia di eseguire lo strumento sull\'area interessata per almeno <strong>10-20 minuti</strong>.</li><li>Se non funziona, prova sessioni più lunghe (fino a 1 ora) o applica una leggera pressione con un panno in microfibra sul pixel (a tuo rischio).</li><li>In alcuni casi, riscaldare leggermente il monitor con un asciugacapelli (a bassa temperatura) prima di attivare Strobe migliora i risultati.</li></ul>',
    },
    {
      type: 'title',
      text: 'Avviso Epilessia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La modalità di riparazione utilizza luci che lampeggiano rapidamente ad alta velocità. Se soffri di epilessia fotosensibile o sensibilità alla luce, <strong>NON utilizzare questa funzione</strong>. L\'esposizione a pattern lampeggianti può scatenare crisi in individui suscettibili.',
    },
    {
      type: 'title',
      text: 'Quando richiedere la garanzia o la sostituzione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se confermi la presenza di pixel difettosi (specialmente più pixel morti), puoi utilizzare il nostro test come prova per i reclami in garanzia. Molti produttori considerano più di 2-3 pixel luminosi o 1 pixel morto un difetto di fabbricazione che dà diritto alla sostituzione secondo lo standard ISO 9241-307 (Classe 1).',
    },
    {
      type: 'title',
      text: 'Storia degli Standard dei Pixel Morti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Per decenni, i monitor LCD hanno sofferto di difetti dei pixel a causa della complessità di fabbricazione. Un pannello Full HD (1920×1080) contiene 6.220.800 pixel (18.662.400 subpixel). La probabilità statistica di difetti è inevitabile. Per questo esistono standard come l\'ISO 9241-307 per definire i "pixel morti accettabili" in base alla classe del monitor.',
    },
  ],
  ui: {
    badge: 'Utility Schermo',
    title: 'Pixel morti o bloccati?',
    description:
      'Controlla lo stato del tuo monitor con colori solidi puri e ripara i pixel bloccati con il nostro strumento di stimolazione ad alta frequenza.',
    btnStartTest: 'Inizia Test',
    btnStartFix: 'Ripara Pixel',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Schermo Intero',
    kbdSpace: 'Spazio',
    kbdSpaceLabel: 'Cambia Colore',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Esci',
    colorBlack: 'Nero',
    colorWhite: 'Bianco',
    colorRed: 'Rosso',
    colorGreen: 'Verde',
    colorBlue: 'Blu',
    btnToggleFixer: 'Apri Strumento Riparazione (Strobe)',
    btnExit: 'Esci (ESC)',
  },
};
