import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MicrophoneSpectrumTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-microfone-analisador-espectro';
const title = 'Teste de microfone e analisador de espectro';
const description = 'Teste a entrada do seu microfone, nível em tempo real, distorção, ruído ambiente e resposta de frequência localmente no navegador.';

const faq = [
  {
    question: 'Este teste de microfone grava ou envia minha voz para algum servidor?',
    answer: 'Não. O fluxo de áudio do microfone em tempo real é conectado exclusivamente a um analisador dentro do seu navegador. A ferramenta não cria gravações de áudio, não conecta o analisador a uma saída de som e não envia amostras para servidores.',
  },
  {
    question: 'O que significa dBFS no medidor de nível?',
    answer: 'dBFS significa decibéis em relação à escala total digital (Full Scale). O valor 0 dBFS é o pico digital máximo representável, portanto as leituras normais são negativas. Isso não é o mesmo que uma medição calibrada de pressão sonora em dB SPL.',
  },
  {
    question: 'Como saber se meu microfone está distorcendo (clipping)?',
    answer: 'Fale no volume mais alto que pretende usar. Se os picos atingirem repetidamente a zona vermelha de distorção perto de 0 dBFS, reduza o ganho do microfone, aumente a distância ou desative processamentos de entrada agressivos no seu sistema operacional.',
  },
  {
    question: 'O que a medição do ruído ambiente (room tone) mostra?',
    answer: 'A medição de três segundos calcula a média do nível digital RMS enquanto você permanece em silêncio. Útil para comparar configurações no mesmo navegador e ambiente, embora o controle automático de ganho e o cancelamento de ruído possam alterar o resultado.',
  },
  {
    question: 'Por que a frequência dominante muda enquanto eu falo?',
    answer: 'A voz humana contém uma frequência fundamental variável, harmônicos, consoantes e ruídos. O indicador exibe a faixa mais forte entre 60 Hz e 12 kHz, portanto a variação é o comportamento esperado e não uma falha.',
  },
  {
    question: 'Este analisador de espectro pode certificar a qualidade do microfone?',
    answer: 'Não. É uma verificação prática no navegador para validar entrada, nível, distorção, ruído e atividade espectral visível. Certificações de resposta de frequência ou pressão sonora exigem equipamentos calibrados e ambientes controlados.',
  },
];

const howTo = [
  {
    name: 'Conceda permissão de acesso ao microfone',
    text: 'Clique em Iniciar microfone e confirme a permissão no navegador. O processamento começa apenas após essa ação explícita.',
  },
  {
    name: 'Fale na distância habitual de trabalho',
    text: 'Utilize sua voz normal ou nível de instrumento e observe a leitura de dBFS em tempo real, a órbita de pico e a movimentação do espectro.',
  },
  {
    name: 'Verifique o momento de maior volume esperado',
    text: 'Fale mais alto ou toque a passagem mais forte prevista. Tente evitar a distorção em vermelho repetida enquanto mantém um sinal limpo e saudável.',
  },
  {
    name: 'Capture o ruído de fundo (room tone)',
    text: 'Fique em silêncio e pressione Capturar três segundos. Compare o nível de ruído salvo após alterar o ambiente, o dispositivo, o ganho ou as configurações.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<MicrophoneSpectrumTesterUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Como testar um microfone no seu navegador',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este teste de microfone responde às primeiras dúvidas de diagnóstico sem precisar instalar aplicativos: a entrada selecionada produz sinal, o nível é utilizável, momentos altos distorcem, como é o ruído ambiente e quais frequências estão ativas? Clique em Iniciar microfone, fale da sua posição normal e consulte o observatório em tempo real. O analisador roda na página e não gera arquivos de áudio.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Análise local e privada',
      badge: 'Sem gravação',
      html: '<p>Seu navegador solicita permissão de microfone porque o sinal bruto é sensível. Esta ferramenta conecta esse fluxo apenas a um analisador local. Ela não envia amostras para servidores e interrompe todas as faixas de áudio ao clicar em Parar microfone.</p>',
    },
    {
      type: 'title',
      text: 'Como ler o nível do microfone em dBFS',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O valor principal em tempo real é uma estimativa RMS que representa a energia na janela de tempo atual. O indicador de pico mostra a maior amostra absoluta nessa janela. Ambos usam dBFS, onde zero é o teto digital e sons mais baixos usam valores negativos crescentes. O selo de nível saudável é um guia prático para este teste, não um padrão universal de gravação.',
    },
    {
      type: 'table',
      headers: ['Leitura', 'O que indica', 'O que verificar'],
      rows: [
        ['Silêncio ou abaixo de -60 dBFS', 'A entrada selecionada não está produzindo um sinal útil de teste', 'Verifique o dispositivo, o botão mudo, a permissão e o nível de entrada no sistema operacional'],
        ['Baixo abaixo de -35 dBFS', 'O sinal pode ser difícil de usar sem ganho adicional', 'Aproxime-se do microfone ou aumente o ganho de entrada observando o pico'],
        ['Nível saudável', 'O sinal atual possui um nível adequado e margem de segurança visível', 'Repita o teste falando no volume mais alto esperado'],
        ['Alto acima de -6 dBFS pico', 'Resta pouca margem digital disponível', 'Reduza o ganho ou aumente a distância antes de um momento de alto volume'],
        ['Distorção perto de 0 dBFS', 'Uma ou mais amostras atingiram o teto digital', 'Reduza o ganho e repita a parte mais alta do teste'],
      ],
    },
    {
      type: 'title',
      text: 'Uso do espectro de microfone em tempo real',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O espectro curvo mapeia frequências de 60 Hz a 12 kHz em um arco logarítmico, enquanto a fita luminosa mostra a forma de onda atual. Use a visualização para confirmar que a atividade de graves, médios e agudos atinge o navegador. Uma frequência dominante em movimento é normal ao falar ou cantar. O gráfico é ideal para comparações mantendo o mesmo microfone, ganho e distância.',
    },
    {
      type: 'tip',
      title: 'Compare uma alteração por vez',
      html: 'Capture o ruído ambiente, mude uma configuração e meça novamente na mesma posição. O cancelamento de ruído do sistema e o controle automático de ganho podem alterar o timbre além do volume, portanto ouça também no seu aplicativo final.',
    },
    {
      type: 'title',
      text: 'Por que não é um medidor de som calibrado',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'As amostras do navegador descrevem o sinal digital após o microfone, a interface, o driver e os processamentos. Elas não expressam a pressão sonora acústica na cápsula. Por isso a ferramenta indica dBFS em vez de dB SPL e não garante uma resposta de frequência oficial.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Use equipamentos calibrados para medições oficiais',
      badge: 'Apenas teste prático',
      html: '<p>Utilize esta ferramenta para solucionar problemas em chamadas, transmissões e gravações. Para certificações de produtos, saúde auditiva ou análises acústicas profissionais, recorra a um microfone de medição calibrado e ambiente controlado.</p>',
    },
  ],
  ui: {
    journeyPermission: '1. Permita o microfone',
    journeySpeak: '2. Fale naturalmente',
    journeyInspect: '3. Verifique nível e espectro',
    startMicrophone: 'Iniciar microfone',
    stopMicrophone: 'Parar microfone',
    deviceLabel: 'Dispositivo de entrada',
    defaultDevice: 'Microfone padrão',
    statusIdle: 'Aguardando permissão',
    statusRequesting: 'Solicitando acesso ao microfone',
    statusLive: 'Ouvindo localmente',
    statusUnsupported: 'Acesso ao microfone indisponível neste navegador',
    statusDenied: 'Permissão de microfone negada',
    statusError: 'Não foi possível iniciar o microfone',
    levelLabel: 'Nível em tempo real',
    peakLabel: 'Pico',
    frequencyLabel: 'Frequência dominante',
    noiseFloorLabel: 'Ruído ambiente',
    captureNoise: 'Capturar três segundos',
    capturingNoise: 'Fique em silêncio enquanto o ruído é medido',
    noiseCaptured: 'Ruído ambiente capturado',
    roomToneHint: 'Mantenha a posição e fique em silêncio por três segundos.',
    unmeasured: 'Não medido',
    noSignalLevel: 'Sem sinal',
    noSignalPeak: 'Sem sinal',
    noSignalFrequency: 'Sem sinal',
    silentSignal: 'Sem sinal útil',
    quietSignal: 'Entrada fraca',
    healthySignal: 'Margem saudável',
    hotSignal: 'Sinal elevado',
    clippingSignal: 'Distorção detectada',
    dbfsUnit: 'dBFS',
    hzUnit: 'Hz',
    spectrumAriaLabel: 'Espectro e forma de onda do microfone em tempo real',
    limitationTitle: 'O navegador não é um sonômetro calibrado',
    limitationText: 'As leituras são em dBFS digital. O áudio é processado apenas localmente.',
  },
};
