import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebcamTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-webcam-privado-online';
const title = 'Teste de webcam privado';
const description = 'Verifique a permissão da câmera, visualização de vídeo ao vivo, resolução, proporção de tela, orientação e taxa de quadros enviada.';

const faq = [
  {
    question: 'Este teste de webcam grava ou envia o meu vídeo?',
    answer: 'Não. A página solicita apenas um fluxo de vídeo ao vivo local para a visualização e nunca pede acesso ao microfone. Não cria gravações nem envia dados. Parar o teste fecha imediatamente todas as faixas de vídeo.',
  },
  {
    question: 'Por que o navegador pede permissão de acesso à câmera?',
    answer: 'Um site não pode abrir a câmera sem permissão do navegador. A solicitação permite escolher se esta página pode receber um sinal de vídeo local temporário.',
  },
  {
    question: 'Qual é a diferença entre FPS configurado e FPS observado?',
    answer: 'FPS configurado é a taxa de quadros alvo solicitada para a visualização. FPS observado estima quantos quadros estão realmente chegando enquanto a guia permanece visível.',
  },
  {
    question: 'Por que a resolução disponível pode ser diferente das especificações?',
    answer: 'O sistema operacional, o driver da câmera e o navegador escolhem juntos um modo compatível. Outros aplicativos ativos podem limitar a resolução disponível.',
  },
];

const howTo = [
  {
    name: 'Abra a visualização privada',
    text: 'Selecione Abrir câmera e permita o acesso de vídeo no aviso do navegador. Não é solicitado acesso de áudio.',
  },
  {
    name: 'Inspecione o enquadramento e a imagem',
    text: 'Verifique o foco, a iluminação, o fundo e a posição dos olhos ao vivo. Ative a visualização espelhada ou o guia de composição se necessário.',
  },
  {
    name: 'Verifique a transmissão enviada',
    text: 'Confira a resolução, proporção de tela, orientação, FPS configurado e taxa de quadros recebida.',
  },
  {
    name: 'Troque ou pare a câmera',
    text: 'Escolha outra câmera disponível para comparação ou selecione Parar câmera para fechar todas as faixas.',
  },
];

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

export const content: ToolLocaleContent<WebcamTesterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas frequentes sobre o teste de webcam',
  faq,
  bibliographyTitle: 'Fontes e guias de configuração de câmera',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Teste sua webcam antes de uma videochamada',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Use esta visualização local para conferir os pontos essenciais antes de uma reunião: se a câmera funciona, se o dispositivo correto foi selecionado, se o seu rosto está bem iluminado e se o vídeo flui sem interrupções.',
    },
    {
      type: 'list',
      items: [
        'Escolha a câmera correta se houver mais de um dispositivo conectado',
        'Posicione a câmera na altura dos olhos e mantenha o rosto no terço superior da tela',
        'Ilumine seu rosto de frente em vez de sentar de costas para uma janela muito clara',
        'Feche outros aplicativos de reunião se a câmera parecer ocupada',
        'Verifique a resolução e a taxa de quadros diretamente na tela',
      ],
    },
    {
      type: 'title',
      text: 'Soluções para câmera preta ou indisponível',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Sintoma observado', 'Causa provável', 'Ação recomendada'],
      rows: [
        ['Permissão negada', 'O acesso à câmera está bloqueado no navegador ou no sistema', 'Permita o acesso nas configurações do navegador e recarregue a página'],
        ['Tela preta ou ocupada', 'Outro aplicativo de videochamada está usando a câmera', 'Feche Zoom, Teams ou Meet e tente novamente'],
        ['Imagem incorreta', 'Uma câmera virtual ou secundária foi selecionada', 'Escolha outra fonte no menu suspenso de seleção'],
        ['Imagem escura ou com ruído', 'Pouca luz frontal ou luz forte vindo de trás', 'Posicione uma lâmpada à sua frente ou vire-se para uma janela'],
        ['Vídeo travando', 'Pouca iluminação ou alto uso do computador', 'Adicione mais iluminação e feche programas pesados'],
      ],
    },
    {
      type: 'title',
      text: 'Compreendendo resolução e taxa de quadros',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uma resolução de 1280 × 720 é suficiente para a maioria das videochamadas. A resolução 1920 × 1080 oferece maior nitidez, mas requer uma conexão estável. FPS configurado é a meta solicitada, enquanto FPS observado mede a entrega real de quadros.',
    },
    {
      type: 'tip',
      title: 'Teste nas mesmas condições da chamada',
      html: 'Realize o teste no mesmo horário e com a mesma luz da sua reunião. Como os aplicativos de videochamada podem ajustar a imagem, faça uma verificação final no seu aplicativo principal.',
    },
    {
      type: 'title',
      text: 'Enquadramento e posicionamento ideal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eleve a câmera próximo à altura dos olhos e deixe um pequeno espaço acima da cabeça. Mantenha a iluminação principal de frente. Se você usa óculos, posicione a fonte de luz ligeiramente para o lado para evitar reflexos nas lentes.',
    },
  ],
  ui: {
    privacyNote: 'Sem gravação · Sem envio · Sem áudio',
    permissionHeading: 'Pronto para testar sua câmera?',
    permissionBody: 'Abra uma visualização privada ao vivo para verificar a imagem e os formatos de vídeo disponíveis nesta guia. Parar a câmera fecha o acesso imediatamente.',
    startAction: 'Abrir câmera',
    stopAction: 'Parar câmera',
    retryAction: 'Tentar novamente',
    deviceLabel: 'Fonte da câmera',
    devicePlaceholder: 'Selecionar câmera',
    defaultDevice: 'Câmera',
    mirrorAction: 'Modo espelho',
    guideAction: 'Guia de enquadramento',
    stageLabel: 'Área de visualização privada de webcam',
    resolutionLabel: 'Resolução',
    aspectLabel: 'Proporção de tela',
    orientationLabel: 'Orientação',
    configuredFpsLabel: 'FPS configurado',
    observedFpsLabel: 'FPS observado',
    frameDeliveryLabel: 'Entrega de quadros',
    landscapeValue: 'Horizontal',
    portraitValue: 'Vertical',
    squareValue: 'Quadrado',
    frameStable: 'Próximo à meta',
    frameReduced: 'Abaixo da meta',
    frameConstrained: 'Muito reduzido',
    framePending: 'Aguardando quadros',
    statusIdle: 'Câmera fechada. Abra quando estiver pronto para testar a visualização.',
    statusStarting: 'Aguardando permissão e o primeiro quadro de vídeo',
    statusReady: 'Visualização ao vivo ativa. Confira o foco, luz, enquadramento e fluidez.',
    statusStopped: 'Câmera parada. Todas as faixas de vídeo foram fechadas.',
    statusHidden: 'Mantenha esta guia visível para uma medição precisa de FPS.',
    statusUnsupported: 'Este navegador não suporta acesso à câmera.',
    errorPermissionDenied: 'Permissão negada. Permita o acesso nas configurações do navegador e tente novamente.',
    errorNoCamera: 'Nenhuma câmera encontrada. Conecte um dispositivo e tente novamente.',
    errorInUse: 'A câmera não pôde ser iniciada. Feche outros aplicativos e tente novamente.',
    errorSecureContext: 'O acesso à câmera requer uma conexão segura HTTPS ou localhost.',
    errorGeneric: 'Não foi possível abrir a câmera. Verifique as permissões e o dispositivo.',
    limitHeading: 'O que este teste confirma',
    limitBody: 'Confirma a qualidade da imagem e a fluidez disponíveis nesta guia. Não avalia a qualidade da lente nem o processamento pós-imagem de outros aplicativos.',
    localOnlyLabel: 'Verificação privada de câmera',
    emptyValue: 'Não disponível',
    fpsUnit: 'FPS',
  },
};
