import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { LaptopBatteryRuntimeUI } from '../ui';

const slug = 'calcolatore-autonomia-batteria-portatile';
const title = 'Calcolatore dell\u2019autonomia della batteria del portatile';
const description = 'Stima per quanto tempo il tuo portatile può funzionare con la carica attuale per attività leggere, equilibrate e intense.';
const faq = [
  { question: 'Che cosa stima questo calcolatore?', answer: 'Divide l\u2019energia disponibile nella batteria per la potenza inserita per ogni attività. È una stima utile per pianificare, non una lettura in tempo reale né una garanzia del produttore.' },
  { question: 'Dove trovo capacità e salute della batteria?', answer: 'Controlla il report della batteria o la documentazione del produttore per capacità di progetto e capacità attuale a piena carica. La salute è la capacità attuale espressa come percentuale di quella originale.' },
  { question: 'Perché l\u2019autonomia cambia in base al lavoro?', answer: 'Un portatile che assorbe più watt consuma più rapidamente la stessa energia. Videochiamate, giochi, monitor esterni, luminosità alta e carichi prolungati di CPU o GPU aumentano il consumo medio.' },
  { question: 'Lo strumento può leggere automaticamente la batteria?', answer: 'No. Funziona localmente nel browser e usa i valori forniti. Sostituisci gli esempi con un report recente o con una media misurata quando l\u2019accuratezza è importante.' },
];
const howTo = [
  { name: 'Leggere la capacità originale', text: 'Inserisci la capacità di progetto in wattora. Se conosci solo milliampereora e volt, converti prima con Wh = V × Ah.' },
  { name: 'Descrivere la batteria attuale', text: 'Imposta la capacità attuale a piena carica come percentuale di quella originale e indica la carica prevista all\u2019inizio del lavoro.' },
  { name: 'Impostare consumi realistici', text: 'Scegli il profilo più vicino e modifica i watt se hai una misura del portatile o di un misuratore di consumo.' },
  { name: 'Prendere una decisione per il viaggio', text: 'Leggi le tre linee e usa quella più breve per il compito impegnativo. Con un margine stretto o urgente, riduci il carico o porta il caricatore.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'it' };

export const content: ToolLocaleContent<LaptopBatteryRuntimeUI> = {
  slug, title, description, faq, howTo, bibliography, schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Che cosa misura davvero una stima dell\u2019autonomia', level: 2 },
    { type: 'paragraph', html: 'Una batteria per portatile immagazzina energia in wattora. Il dispositivo usa quell\u2019energia a una potenza misurata in watt. Il calcolatore trasforma i due dati in una durata per capire se la carica basta per viaggio, riunione, lezione o lavoro.' },
    { type: 'paragraph', html: 'Il modello stima prima la capacità attuale a piena carica usando capacità originale e salute della batteria. Applica poi la carica prevista all\u2019avvio. Ogni scenario consuma una parte dello stesso budget energetico.' },
    { type: 'title', text: 'Scegliere dati affidabili', level: 2 },
    { type: 'paragraph', html: 'Usa un report della batteria o le specifiche del produttore. Capacità di progetto, capacità attuale a piena carica e carica residua sono valori diversi. Se conosci solo volt e ampereora, converti con <strong>Wh = V × Ah</strong>; 1.000 mAh equivalgono a 1 Ah.' },
    { type: 'list', items: ['Calcola la salute dividendo la capacità attuale a piena carica per quella di progetto.', 'Inserisci la carica realmente disponibile quando inizia la sessione.', 'Usa una potenza media misurata per una sessione lunga.', 'Includi monitor esterno, dock o applicazioni impegnative nello scenario.'] },
    { type: 'title', text: 'Leggere l\u2019autonomia come margine di pianificazione', level: 2 },
    { type: 'paragraph', html: 'La linea leggera rappresenta lettura e documenti semplici, quella equilibrata il multitasking normale e quella intensa il costo di una potenza elevata mantenuta. Confronta il lavoro previsto con il tempo necessario e pianifica sul risultato credibile più breve.' },
    { type: 'table', headers: ['Segnale', 'Significato', 'Azione'], rows: [['Comodo', 'Sei ore o più a quel consumo', 'La sessione ha un ampio margine.'], ['Fattibile', 'Da tre a sei ore', 'Adatto a una sessione definita, prepara il caricatore.'], ['Stretto', 'Da una a tre ore', 'Riduci il consumo o programma una pausa.'], ['Urgente', 'Meno di un\u2019ora', 'Considera l\u2019attività dipendente dal caricatore.']] },
    { type: 'title', text: 'Che cosa la stima non può garantire', level: 2 },
    { type: 'paragraph', html: 'Il consumo reale cambia continuamente. Luminosità, radio, temperatura, attività in background, firmware e riserve del sistema spostano il momento di spegnimento. Lo strumento non legge sensori, non modella la chimica della batteria e non certifica una durata.' },
    { type: 'tip', title: 'Consiglio per la misura', html: 'Annota percentuale della batteria e tempo trascorso durante una sessione rappresentativa. Sostituisci i watt del profilo con la media osservata e ripeti il calcolo per ogni attività.' },
  ],
  ui: {
    batteryInputsLabel: 'Punto di partenza della batteria', designCapacityLabel: 'Capacità originale della batteria', designCapacityHint: 'Energia della batteria nuova', healthLabel: 'Salute della batteria', healthHint: 'Carica completa attuale rispetto a quella originale', chargeLabel: 'Carica alla partenza', chargeHint: 'Carica prevista all\u2019inizio del lavoro', scenariosLabel: 'Autonomia per attività', scenariosHint: 'Modifica la potenza media per ogni tipo di lavoro', powerLabel: 'Consumo medio', wattsSuffix: 'W', presetsLabel: 'Inizia con un profilo', presetBalanced: 'Lavoro quotidiano', presetTravel: 'Risparmio in viaggio', presetCreative: 'Creatività intensa', runwayLabel: 'Percorso energetico', runwayCaption: 'Ogni linea mostra quando quell\u2019attività esaurirebbe la stessa carica iniziale.', availableEnergyLabel: 'Energia disponibile ora', fullCapacityLabel: 'Capacità attuale a piena carica', shortestScenarioLabel: 'Pianifica intorno a', runtimeLabel: 'Autonomia stimata', loadLabel: 'Potenza assorbita', healthStateExcellent: 'Stato batteria eccellente', healthStateGood: 'Stato batteria buono', healthStateAging: 'Batteria invecchiata', healthStateWorn: 'Batteria usurata', statusComfortable: 'Margine comodo', statusWorkable: 'Sessione fattibile', statusTight: 'Margine stretto', statusUrgent: 'Dipendente dal caricatore', scenarioLight: 'Lavoro leggero', scenarioBalanced: 'Lavoro equilibrato', scenarioIntense: 'Lavoro intenso', sceneBatteryLabel: 'Carica iniziale', sceneEnergyLabel: 'Energia disponibile', sceneTimeLabel: 'Tempo di autonomia', noteLabel: 'Limite del modello', noteText: 'È una stima di pianificazione basata sui tuoi dati. Il consumo reale e le riserve del sistema possono ridurre la durata.',
  },
};
