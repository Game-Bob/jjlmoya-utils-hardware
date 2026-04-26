import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProbadorVibracionMandoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-vibrazione-gamepad-online';
const title = 'Test Vibrazione Gamepad Online';
const description =
  'Testa i motori aptici e la vibrazione Dual-Rumble del tuo gamepad nel browser. Supporta Xbox, DualShock, DualSense e controller generici.';

const faqData = [
  {
    question: 'Di cosa ho bisogno per testare il mio gamepad online?',
    answer:
      'Collega semplicemente il tuo gamepad al computer o al dispositivo mobile tramite cavo USB o associalo via Bluetooth. Una volta collegato, premi un pulsante qualsiasi per essere rilevato.',
  },
  {
    question: 'Funziona con qualsiasi modello di gamepad?',
    answer:
      'La maggior parte dei moderni gamepad di marche note (come PlayStation o Xbox) è compatibile se il dispositivo e il sistema operativo lo supportano.',
  },
  {
    question: 'Il lato destro del mio gamepad vibra meno del sinistro, è normale?',
    answer:
      'Sì, completamente normale. I gamepad di solito hanno un design asimmetrico in cui un lato gestisce vibrazioni forti e profonde e l\'altro vibrazioni rapide e sottili.',
  },
  {
    question: 'L\'esecuzione di questi test consuma molta batteria?',
    answer:
      'La vibrazione è una delle funzioni che consumano più energia in un gamepad wireless. L\'esecuzione di test continui e lunghi scaricherà la batteria più velocemente del solito.',
  },
];

const howToData = [
  {
    name: 'Collega e accendi il gamepad',
    text: 'Collega il tuo gamepad al PC, Mac o cellulare tramite cavo USB o Bluetooth.',
  },
  {
    name: 'Premi un pulsante sul gamepad',
    text: 'I browser richiedono di premere almeno un pulsante affinché il gamepad venga rilevato e inizi la comunicazione web.',
  },
  {
    name: 'Regola i motori di vibrazione',
    text: 'Configura la potenza del Motore Forte (Low) e del Motore Fine (High) indipendentemente.',
  },
  {
    name: 'Esegui i pattern',
    text: 'Premi uno dei preset o configura manualmente i parametri e invia il segnale per sentire ogni componente.',
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

export const content: ToolLocaleContent<ProbadorVibracionMandoUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Come verificare la vibrazione del tuo gamepad da gioco', level: 2 },
    {
      type: 'paragraph',
      html: 'Il feedback aptico è uno degli elementi più coinvolgenti dell\'hardware da gioco. Quando un motore si guasta, i primi sintomi sono solitamente ronzii anomali o vibrazioni asimmetriche. Diagnosticarli precocemente previene guasti maggiori.',
    },
    { type: 'title', text: 'Perché eseguire il test di vibrazione?', level: 3 },
    {
      type: 'paragraph',
      html: 'Quando si acquista un gamepad di seconda mano, dopo aver aggiornato i driver o dopo una caduta, testare i motori aptici aiuta a distinguere i guasti hardware reali dai problemi software. Compatibile con Xbox, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro e gamepad USB generici.',
    },
    { type: 'title', text: 'Dual-Rumble vs. Architettura dell\'Attuatore Lineare', level: 3 },
    {
      type: 'paragraph',
      html: 'I gamepad classici (Xbox, DualShock) utilizzano due micro-motori asimmetrici: quello sinistro genera vibrazioni profonde e rombanti; quello destro produce ronzii rapidi e acuti. Dispositivi avanzati come il DualSense utilizzano attuatori lineari che simulano texture e resistenza.',
    },
    { type: 'title', text: 'Guida diagnostica basata sui sintomi', level: 3 },
    {
      type: 'paragraph',
      html: 'Attiva ogni motore indipendentemente al 100%. Se entrambi suonano allo stesso modo, il gamepad potrebbe essere una replica con un unico motore. Se uno non risponde, controlla la connessione prima di aprire il telaio. Testa le intensità frazionarie: i motori di qualità rispondono gradualmente, non come un interruttore on/off.',
    },
  ],
  ui: {
    badge: 'Test Vibrazione',
    title: 'Test Vibrazione Gamepad',
    description: 'Controllo diretto sul motore Dual-Rumble del tuo gamepad.',
    deviceDisconnected: 'Gamepad Disconnesso',
    deviceDisconnectedSub: 'Premi un pulsante sul tuo gamepad per iniziare',
    deviceFallback: 'Gamepad Connesso',
    deviceConnectedSub: 'Connessione stabile. Pronto per il test.',
    noSupportWarning: "Nessun supporto Dual-Rumble rilevato nel browser. Utilizzo della vibrazione generica di base.",
    tabPresets: 'Preset Principali',
    tabCustom: 'Precisione Pura',
    presetHeavyTitle: 'Colpo di Martello',
    presetHeavyDesc: 'Motore pesante al massimo per 300ms. Simula un colpo forte.',
    presetLightTitle: 'Ronzio d\'Ape',
    presetLightDesc: 'Solo motore destro. Ideale per rilevare ronzii insoliti.',
    presetHeartbeatTitle: 'Battito Cardiaco',
    presetHeartbeatDesc: 'Sottili impulsi consecutivi. Perfetto per controllare la ritenzione inerziale.',
    presetSongTitle: 'Ritmo della Moneta',
    presetSongDesc: 'Simula suoni consecutivi di monete. Breve e tattile.',
    presetRockYouTitle: 'Rock You!',
    presetRockYouDesc: "Il classico dei Queen nelle tue mani: boom, boom, clap!",
    presetEarthquakeTitle: 'Terremoto Massimo!',
    presetEarthquakeDesc: 'Entrambi i motori al 100% di forza esplosiva. MOLTO intenso.',
    customStrongLabel: 'Forza Forte (Sinistra)',
    customWeakLabel: 'Forza Debole (Destra)',
    customDurationLabel: 'Durata Impulso',
    btnSendSignal: 'INVIA SEGNALE ORA',
  },
};
