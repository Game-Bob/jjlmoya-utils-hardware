import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EstimadorSaludBateriaUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-salute-batteria-litio';
const title = 'Calcolatore Salute della Batteria al Litio';
const description =
  "Calcola lo stato di salute (SoH) della tua batteria al litio basato su cicli, tensione e temperatura. Guida scientifica per massimizzare la longevità dell'energia.";

const faqData = [
  {
    question: "Cos'è la degradazione chimica della batteria?",
    answer:
      "Con ogni ciclo di carica e scarica, le celle al litio subiscono microfratture e l'accumulo di sedimenti chimici (S.E.I.) che riducono la loro capacità di immagazzinare energia. È un processo inevitabile, ma che può essere rallentato con buone abitudini.",
  },
  {
    question: 'Perché si consiglia di caricare fino all\'80%?',
    answer:
      "Le batterie al litio soffrono di più lo stress a tensioni estreme (0% e 100%). Mantenere la carica tra il 20% e l'80% può triplicare la vita della cella riducendo il calore e la pressione interna.",
  },
  {
    question: 'In che modo il calore influisce sulla durata della batteria?',
    answer:
      "Il calore è il nemico numero uno. Per ogni aumento di 10 gradi sopra la temperatura ambiente ottimale (25 gradi), il tasso di degradazione chimica raddoppia approssimativamente.",
  },
  {
    question: "Cos'è un ciclo di carica completo?",
    answer:
      "Un ciclo è l'uso del 100% della capacità della batteria, ma non deve avvenire necessariamente tutto in una volta. Se usi il 50% oggi, la carichi e usi il 50% domani, avrai completato 1 ciclo completo.",
  },
];

const howToData = [
  {
    name: 'Identificare la capacità originale',
    text: "Controlla sulla confezione del tuo dispositivo o sul sito web del produttore i mAh che aveva la tua batteria quando era nuova.",
  },
  {
    name: 'Verificare i cicli attuali',
    text: 'Molti sistemi (come iOS o Android 14) consentono di vedere quanti cicli di carica ha accumulato la batteria.',
  },
  {
    name: 'Inserire i dati tecnici',
    text: 'Regola la tensione attuale, i cicli e la temperatura in modo che il nostro motore di calcolo possa stimare il SoH.',
  },
  {
    name: 'Analizzare la diagnosi',
    text: 'Controlla la percentuale di salute. Se sei al di sotto dell\'80%, potresti iniziare a notare cali di prestazioni o spegnimenti imprevisti.',
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

export const content: ToolLocaleContent<EstimadorSaludBateriaUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'La chimica del tempo: perché le batterie al litio muoiono', level: 2 },
    {
      type: 'paragraph',
      html: "Una batteria agli ioni di litio non è una scatola di energia statica, ma un ecosistema chimico dinamico in costante degradazione dal momento della produzione. Ogni ciclo di carica e scarica, ogni variazione di temperatura e ogni minuto a tensioni estreme contribuisce ai sottoprodotti che ostacolano il flusso di ioni.",
    },
    { type: 'title', text: 'Principali meccanismi di degradazione', level: 3 },
    {
      type: 'paragraph',
      html: "<strong>Strato SEI:</strong> l'interfaccia dell'elettrolita solido cresce nel tempo, consumando litio attivo e aumentando la resistenza interna. <strong>Ossidazione dell'elettrolito:</strong> tensioni superiori a 4,1 V accelerano l'ossidazione e possono gonfiare la batteria. <strong>Lithium Plating:</strong> la ricarica a basse temperature deposita il litio in forma metallica, creando dendriti che possono perforare il separatore.",
    },
    { type: 'title', text: 'Il mito del 100%: perché caricare durante la notte è un errore', level: 3 },
    {
      type: 'paragraph',
      html: "Per uno ione di litio, essere al 100% di carica (4,2 V) è uno stato di alto stress. La ricerca mostra che la vita del ciclo raddoppia o triplica quando si mantiene il dispositivo tra il <strong>20% e l'80%</strong>. Inoltre, per ogni 10°C sopra i 25°C, il tasso di degradazione chimica raddoppia approssimativamente.",
    },
    { type: 'title', text: 'Protocollo di sopravvivenza energetica', level: 3 },
    {
      type: 'paragraph',
      html: "Non caricare mai una batteria sotto gli 0°C: il litio si deposita sull'anodo causando danni permanenti. La ricarica rapida genera calore localizzato e stress meccanico; usala solo quando strettamente necessario. Per la conservazione a lungo termine, mantenere la batteria al 50% in un luogo fresco.",
    },
  ],
  ui: {
    badge: 'Batteria Li-Ion',
    title: 'Stimatore Salute Batteria',
    description: 'Diagnosi tecnica della degradazione per celle agli ioni di litio.',
    paramsTitle: 'Parametri della Cella',
    voltageLabel: 'Tensione Attuale',
    cyclesLabel: 'Cicli di Carica',
    tempLabel: 'Temperatura',
    voltageHint: 'Intervallo nominale: da 3,0 V (vuoto) a 4,2 V (pieno).',
    labelUsefulLife: 'Vita Utile',
    yearsPrefix: 'Stima',
    yearsSuffix: 'anni',
    metricThermalStress: 'Stress Termico',
    metricVoltageStress: 'Stress di Tensione',
    metricLithiumPlating: 'Lithium Plating',
    statusExcelente: 'Stato Eccellente',
    statusBueno: 'Stato Buono',
    statusRegular: 'Stato Discreto',
    statusCritico: 'Stato Critico',
    indicatorTempNormal: 'Normale',
    indicatorTempCritical: 'Critico',
    indicatorVoltageHigh: 'Alta',
    indicatorVoltageLow: 'Bassa',
    indicatorPlatingRisk: 'Alto Rischio',
    indicatorPlatingOk: 'Nessun Rischio',
    recTemp: "Ridurre la temperatura ambiente o migliorare la ventilazione per evitare l'ossidazione dell'elettrolito.",
    recVoltageHigh: 'Evitare di mantenere la batteria al 100% di carica (4,2 V) per periodi prolungati.',
    recVoltageLow: 'Evitare scariche profonde; i cicli tra il 20% e l\'80% raddoppiano la durata della batteria.',
    recSohLow: 'La capacità è scesa al di sotto dello standard ottimale. Considera una sostituzione se l\'autonomia è insufficiente.',
    recDefault: 'Mantieni le tue abitudini attuali: la tua batteria è in un intervallo operativo ideale.',
  },
};
