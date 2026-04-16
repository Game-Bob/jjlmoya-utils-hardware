import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProbadorVibracionMandoUI } from '../ui';

const slug = 'teste-vibracao-gamepad-online';
const title = 'Teste de Vibração de Gamepad Online';
const description =
  'Teste os motores hápticos e a vibração Dual-Rumble do seu comando no navegador. Suporta Xbox, DualShock, DualSense e comandos genéricos.';

const faqData = [
  {
    question: 'O que preciso para testar o meu comando online?',
    answer:
      'Basta ligar o seu comando ao computador ou dispositivo móvel via cabo USB ou emparelhá-lo via Bluetooth. Uma vez ligado, prima qualquer botão para ser detetado.',
  },
  {
    question: 'Funciona com qualquer modelo de comando?',
    answer:
      'A maioria dos comandos modernos de marcas conhecidas (como PlayStation ou Xbox) é compatível se o seu dispositivo e sistema operativo o suportarem.',
  },
  {
    question: 'O lado direito do meu comando vibra menos que o esquerdo, é normal?',
    answer:
      'Sim, completamente normal. Os comandos costumam ter um design assimétrico onde um lado lida com vibrações fortes e profundas e o outro com vibrações rápidas e subtis.',
  },
  {
    question: 'Executar estes testes consome muita bateria?',
    answer:
      'A vibração é uma das funções que mais consome energia num comando sem fios. Executar testes contínuos e longos irá esgotar a bateria mais depressa do que o habitual.',
  },
];

const howToData = [
  {
    name: 'Ligar e ativar o comando',
    text: 'Ligue o seu comando ao PC, Mac ou telemóvel via cabo USB ou Bluetooth.',
  },
  {
    name: 'Premir um botão no comando',
    text: 'Os navegadores exigem que prima pelo menos um botão para que o comando seja detetado e inicie a comunicação web.',
  },
  {
    name: 'Ajustar os motores de vibração',
    text: 'Configure a potência do Motor Forte (Low) e do Motor Fino (High) de forma independente.',
  },
  {
    name: 'Executar os padrões',
    text: 'Prima um dos presets ou configure manualmente os parâmetros e envie o sinal para sentir cada componente.',
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<ProbadorVibracionMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências',
  bibliography: [
    {
      name: 'Como funciona a vibração háptica — HobbyConsolas',
      url: 'https://www.hobbyconsolas.com/reportajes/como-funciona-vibracion-haptica-mando-dualsense-ps5-757673',
    },
    {
      name: 'Gamepad API — W3C',
      url: 'https://w3c.github.io/gamepad/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Como auditar a vibração do seu comando de jogo', level: 2 },
    {
      type: 'paragraph',
      html: 'O feedback háptico é um dos elementos mais imersivos do hardware de jogo. Quando um motor falha, os primeiros sintomas são geralmente zumbidos anormais ou vibrações assimétricas. Diagnosticá-los precocemente previne falhas maiores.',
    },
    { type: 'title', text: 'Porquê executar o teste de vibração?', level: 3 },
    {
      type: 'paragraph',
      html: 'Ao comprar um comando em segunda mão, após atualizar controladores ou após uma queda, testar os motores hápticos ajuda a distinguir falhas reais de hardware de problemas de software. Compatível com Xbox, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro e comandos USB genéricos.',
    },
    { type: 'title', text: 'Dual-Rumble vs. Arquitetura de Atuador Linear', level: 3 },
    {
      type: 'paragraph',
      html: 'Os comandos clássicos (Xbox, DualShock) utilizam dois micromotores assimétricos: o esquerdo gera vibrações profundas e estrondosas; o direito produz zumbidos rápidos e agudos. Dispositivos avançados como o DualSense utilizam atuadores lineares que simulam texturas e resistência.',
    },
    { type: 'title', text: 'Guia de diagnóstico baseado em sintomas', level: 3 },
    {
      type: 'paragraph',
      html: 'Ative cada motor independentemente a 100%. Se ambos soarem da mesma forma, o comando pode ser uma réplica com um único motor. Se um não responder, verifique a ligação antes de abrir o chassis. Teste intensidades fracionadas: motores de qualidade respondem gradualmente, não como um interruptor on/off.',
    },
  ],
  ui: {
    badge: 'Teste de Vibração',
    title: 'Testador de Vibração de Comando',
    description: 'Controlo direto sobre o motor Dual-Rumble do seu comando.',
    deviceDisconnected: 'Comando Desligado',
    deviceDisconnectedSub: 'Prima um botão no comando para começar',
    deviceFallback: 'Comando Ligado',
    deviceConnectedSub: 'Ligação estável. Pronto para testar.',
    noSupportWarning: "Nenhum suporte Dual-Rumble detetado no navegador. A utilizar vibração genérica básica.",
    tabPresets: 'Presets Principais',
    tabCustom: 'Precisão Pura',
    presetHeavyTitle: 'Golpe de Martelo',
    presetHeavyDesc: 'Motor pesado no máximo por 300ms. Simula um golpe forte.',
    presetLightTitle: 'Zumbido de Abelha',
    presetLightDesc: 'Apenas motor direito. Ideal para detetar zumbidos invulgares.',
    presetHeartbeatTitle: 'Batimento Cardíaco',
    presetHeartbeatDesc: 'Pulsos consecutivos subtis. Perfeito para verificar a retenção inercial.',
    presetSongTitle: 'Ritmo de Moeda',
    presetSongDesc: 'Simula sons consecutivos de moedas. Curto e tátil.',
    presetRockYouTitle: 'Rock You!',
    presetRockYouDesc: "O clássico dos Queen nas suas mãos: boom, boom, clap!",
    presetEarthquakeTitle: 'Terramoto Máximo!',
    presetEarthquakeDesc: 'Ambos os motores a 100% de força explosiva. MUITO intenso.',
    customStrongLabel: 'Força Forte (Esquerda)',
    customWeakLabel: 'Força Fraca (Direita)',
    customDurationLabel: 'Duração do Pulso',
    btnSendSignal: 'ENVIAR SINAL AGORA',
  },
};
