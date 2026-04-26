import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpectrumCanvasUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-precisione-colore';
const title = 'Test di Precisione del Colore: Spectrum Canvas';
const description =
  'Calibra il tuo display con precisione. Testa gli spazi colore sRGB e DCI-P3, rileva le derive cromatiche, misura la precisione con le metriche Delta E e genera report di calibrazione professionali.';

const faqData = [
  {
    question: 'Cos\'è la precisione del colore e perché è importante?',
    answer:
      'La precisione del colore misura la fedeltà con cui un display riproduce i colori rispetto a un riferimento standard. Per designer, fotografi e creatori di contenuti, colori accurati sono essenziali per garantire che il proprio lavoro appaia coerente su diversi dispositivi.',
  },
  {
    question: 'Qual è la differenza tra sRGB e DCI-P3?',
    answer:
      'sRGB è lo spazio colore standard per il web e i display consumer. DCI-P3 è una gamma cromatica più ampia utilizzata nel cinema digitale e nei display professionali. DCI-P3 copre circa il 25% di colori in più rispetto a sRGB.',
  },
  {
    question: 'Cos\'è il Delta E e come viene misurato?',
    answer:
      'Il Delta E (ΔE) è una misura numerica della differenza di colore percepita dall\'occhio umano. Un Delta E inferiore a 1 è impercettibile, inferiore a 2 è molto buono, inferiore a 4 è accettabile e sopra 4 diventa evidente. Il nostro test utilizza i calcoli Delta E CIE 1976.',
  },
  {
    question: 'Posso usare questo strumento per calibrare il mio hardware?',
    answer:
      'Questo strumento fornisce un riferimento di calibrazione visiva e misurazioni di precisione. Per una calibrazione professionale, è necessario combinare questi risultati con strumenti di calibrazione hardware (colorimetri) e software dedicati come ColorThink o Datacolor SpyderCheckr.',
  },
  {
    question: 'Quali spazi colore vengono testati?',
    answer:
      'Testiamo sRGB (standard), DCI-P3 (cinema) e la precisione del punto bianco attraverso gli illuminanti standard D65 (6500K) e D93 (9300K). Il test include anche la verifica della correzione gamma.',
  },
];

const howToData = [
  {
    name: 'Seleziona la tua Gamma',
    text: 'Scegli tra sRGB (standard web/consumer) o DCI-P3 (cinema professionale). Il tuo display adatterà la sua tavolozza di test di conseguenza.',
  },
  {
    name: 'Nomina il tuo Hardware (Opzionale)',
    text: 'Inserisci un nome descrittivo per il tuo monitor o dispositivo (es. "MacBook Pro 16 M1"). Questo personalizzerà il tuo report.',
  },
  {
    name: 'Entra in Modalità Schermo Intero',
    text: 'Premi F11 o il pulsante a schermo intero per eliminare l\'interfaccia utente del browser e garantire il massimo spazio di visualizzazione per un test accurato.',
  },
  {
    name: 'Completa i Test del Colore',
    text: 'Procedi attraverso la Purezza Spettrale (colori pieni), la Dinamica dei Gradienti (transizioni fluide), il Rilevamento del Black Crush (dettagli nelle ombre) e la Calibrazione del Punto Bianco.',
  },
  {
    name: 'Rivedi i Risultati ed Esporta',
    text: 'Genera un report visivo con visualizzazione della Gamma 3D, metriche Delta E e raccomandazioni di calibrazione. Esporta in PDF per l\'archiviazione.',
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
  inLanguage: 'it',
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
      text: 'Test di Precisione del Colore Professionale: Calibra il tuo Display con Precisione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvas è uno strumento professionale per il test della precisione del colore progettato per chiunque si occupi di lavori in cui il colore è critico. Che tu sia un fotografo, un designer, un creatore di contenuti o un appassionato di hardware, questo strumento ti aiuta a <strong>diagnosticare le derive cromatiche</strong>, <strong>misurare la precisione del display</strong> e <strong>generare report di calibrazione</strong>.',
    },
    {
      type: 'title',
      text: 'Perché la precisione del colore è importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una differenza di un solo punto percentuale nella riproduzione del colore può significare la differenza tra un momento "wow" e una reazione del tipo "sembra sbagliato". I display professionali offrono una precisione entro <strong>Delta E &lt; 2</strong>. I display consumer spesso derivano verso un Delta E di 4-6+, causando:',
    },
    {
      type: 'paragraph',
      html: '<ul><li>Fotografie che appaiono vibranti sul monitor ma spente in stampa</li><li>Montaggi video che non corrispondono alle aspettative del cliente</li><li>Mockup di web design che non corrispondono alle specifiche del brand</li><li>Progetti hardware in cui gli indicatori di colore vengono interpretati male</li></ul>',
    },
    {
      type: 'title',
      text: 'Capire gli spazi colore: sRGB vs DCI-P3',
      level: 3,
    },
    {
      type: 'title',
      text: 'sRGB (Spazio Colore Standard)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Stabilito da Microsoft e HP nel 1996, sRGB è lo <strong>standard universale per l\'elettronica di consumo</strong> e il web. Utilizza una gamma cromatica triangolare definita da tre colori primari (Rosso: 0.6400x 0.3300, Verde: 0.3000 0.6000, Blu: 0.1500 0.0600).',
    },
    {
      type: 'paragraph',
      html: '<strong>Caratteristiche:</strong><ul><li>Copre circa il 35% dello spettro cromatico visibile</li><li>Ottimizzato per le tipiche condizioni di luce ambientale</li><li>Gamma: 2.2 (corrisponde alla maggior parte dei display consumer)</li><li>Adatto per: web, social media, foto consumer</li></ul>',
    },
    {
      type: 'title',
      text: 'DCI-P3 (Gamma Cinema Digitale)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Sviluppato dal consorzio Digital Cinema Initiatives, DCI-P3 è uno <strong>spazio colore di livello cinematografico</strong> progettato per la proiezione teatrale e i display professionali. Racchiude circa il 25% di colori in più rispetto a sRGB.',
    },
    {
      type: 'paragraph',
      html: '<strong>Caratteristiche:</strong><ul><li>Copre circa il 53% dello spettro cromatico visibile</li><li>Ottimizzato per ambienti cinematografici oscuri</li><li>Gamma: 2.6 (corretto in gamma per un contrasto elevato)</li><li>Adatto per: filmmaking, fotografia professionale, contenuti HDR</li></ul>',
    },
    {
      type: 'title',
      text: 'Cos\'è il Delta E? Quantificare la differenza di colore',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il Delta E (ΔE) è la <strong>metrica della differenza di colore percepibile dall\'uomo</strong> nello spazio colore CIE LAB. Indica quanto l\'output del tuo display è vicino a un colore di riferimento standard.',
    },
    {
      type: 'paragraph',
      html: '<strong>Scala Delta E (CIE 1976):</strong><ul><li>0–1: Impercettibile all\'occhio umano</li><li>1–2: Appena percettibile</li><li>2–4: Percettibile ma accettabile per uso generale</li><li>4–6: Deriva cromatica evidente</li><li>&gt;6: Differenza molto ovvia</li></ul>',
    },
    {
      type: 'paragraph',
      html: 'I display professionali sono calibrati per mantenere un <strong>Delta E &lt; 2</strong> su tutta la gamma visibile. I display consumer tipicamente raggiungono un Delta E di 3-5.',
    },
    {
      type: 'title',
      text: 'La Suite di Test Spectrum Canvas',
      level: 3,
    },
    {
      type: 'title',
      text: 'Test di Purezza Spettrale',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Mostra i colori primari e secondari puri (Rosso, Verde, Blue, Ciano, Magenta, Giallo) e misura come il monitor li riproduce. Le animazioni di "riempimento" del colore rivelano una riproduzione cromatica coerente su tutto lo schermo.',
    },
    {
      type: 'title',
      text: 'Dinamica dei Gradienti',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Gradienti morbidi che transitano attraverso l\'intero spazio colore. Cerca <strong>artefatti di banding</strong> (gradini visibili invece di transizioni morbide), che indicano un\'insufficiente profondità di bit del colore o una cattiva correzione gamma.',
    },
    {
      type: 'title',
      text: 'Rilevamento del Black Crush (Test del Buco Nero)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Sfondo nero puro (0,0,0) con sfumature quasi nere appena visibili. Se il dettaglio delle ombre si "schiaccia", il monitor sta perdendo informazioni nei toni scuri — comune nei display mobile e nei pannelli economici.',
    },
    {
      type: 'title',
      text: 'Calibrazione del Punto Bianco',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Testa diverse temperature di colore correlate (D65 a 6500K = luce diurna, D93 a 9300K = studio), rivelando qualsiasi deriva della temperatura del colore o instabilità termica.',
    },
    {
      type: 'title',
      text: 'Interpretare i Risultati',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvas genera un report visivo elegante e pronto per la stampa con:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>Visualizzazione Gamma 3D:</strong> Un grafico 3D rotante che mostra il volume di colore effettivo del display rispetto allo standard di riferimento</li><li><strong>Mappa di calore Delta E:</strong> Dove nello spettro il tuo display deriva</li><li><strong>Curva Gamma:</strong> Linearità della luminosità nell\'intervallo 0–255</li><li><strong>Punteggio di calibrazione:</strong> Un unico "Spectrum Grade" (Elite, Cinematic, Studio, Standard) basato sulla precisione complessiva</li></ul>',
    },
    {
      type: 'title',
      text: 'Avanzato: Suggerimenti per la Calibrazione Manuale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se i tuoi risultati mostrano una deriva, prova queste regolazioni nel menu OSD (On-Screen Display) del monitor:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>Temperatura Colore:</strong> Sposta verso "Caldo" se i colori sono troppo freddi/blu; verso "Freddo" se sono troppo caldi/gialli</li><li><strong>Contrasto:</strong> Aumenta se i neri appaiono sbiaditi; diminuisci se il dettaglio è schiacciato</li><li><strong>Luminosità:</strong> Regola per ottenere un grigio neutro senza tinte di colore al 50% della luminosità</li><li><strong>Saturazione:</strong> Se i colori sono ipersaturi, riduci; se sono spenti, aumenta</li></ul>',
    },
    {
      type: 'title',
      text: 'Limitazioni e Migliori Pratiche',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Questo strumento fornisce riferimenti visivi e statistici</strong>. Per lavori professionali che richiedono una calibrazione certificata, utilizza misuratori di colore hardware (spettrofotometro o colorimetro) e software di calibrazione dedicato.',
    },
    {
      type: 'paragraph',
      html: '<strong>Migliori Pratiche:</strong><ul><li>Lascia riscaldare il monitor per 30 minuti prima del test (la deriva termica si stabilizza)</li><li>Esegui il test in condizioni di luce ambientale costanti</li><li>Evita i riflessi; usa una visiera per monitor se possibile</li><li>Ripeti i test settimanalmente per monitorare la deriva nel tempo</li><li>Conserva un archivio digitale dei report per confronti futuri</li></ul>',
    },
  ],
  ui: {
    badge: 'Calibrazione Display',
    title: 'Spectrum Canvas: Test di Precisione del Colore',
    description:
      'La calibrazione professionale del display incontra l\'estetica cinematografica. Testa sRGB e DCI-P3, misura la precisione Delta E, rileva le derive cromatiche e genera un report visivo che trasforma i dati in conoscenza.',
    btnStartCalibration: 'Inizia Calibrazione',
    btnFullscreen: 'Schermo Intero',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Modalità Schermo Intero',
    kbdReset: 'R',
    kbdResetLabel: 'Ripristina Test',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Esci',
    gamutSRGB: 'sRGB',
    gamutDCIP3: 'DCI-P3',
    gamutToggle: 'Spazio Colore',
    hardwareName: 'Nome Hardware/Monitor',
    hardwareNamePlaceholder: 'es. MacBook Pro 16" M1 Max',
    purityTest: 'Purezza Spettrale',
    gradientTest: 'Dinamica dei Gradienti',
    blackHoleTest: 'Rilevamento Black Crush',
    whitePointTest: 'Calibrazione Punto Bianco',
    colorCheckpoint: 'Punto di Controllo Colore',
    generateReport: 'Genera Report',
    viewResults: 'Visualizza Risultati',
    btnExit: 'Esci (ESC)',
    compareSideBySide: 'Confronta Lado a Lado',
  },
};
