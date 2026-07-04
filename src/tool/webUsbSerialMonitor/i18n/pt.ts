import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebUsbSerialMonitorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-serial-web-usb';
const title = 'Monitor Série WebUSB';
const description = 'Conecte-se ao hardware série USB pelo navegador, leia a saída do terminal ao vivo, envie comandos e depure placas Arduino, ESP32, RP2040 e maker sem instalar um terminal de computador.';

const faqData = [
  {
    question: 'Este monitor série funciona com placas Arduino, ESP32 e Raspberry Pi Pico?',
    answer: 'Sim, quando a placa expõe uma interface série USB suportada pelo Web Serial e o navegador é baseado em Chromium. Adaptadores comuns Arduino, ESP32, RP2040, CH340, CP210x e FTDI geralmente funcionam após o utilizador conceder permissão.',
  },
  {
    question: 'Por que se chama WebUSB se usa Web Serial?',
    answer: 'A maioria das placas maker conectam-se via USB, mas o acesso ao terminal do navegador é fornecido pela API Web Serial. O WebUSB é de nível mais baixo e não é a abstração correta para um terminal simples estilo UART.',
  },
  {
    question: 'Um site pode aceder aos meus dispositivos série sem permissão?',
    answer: 'Não. O navegador exige um clique do utilizador e um seletor nativo de dispositivos antes que um site possa abrir uma porta série. Esta ferramenta não armazena registos do terminal nem identificadores de dispositivos.',
  },
  {
    question: 'Qual navegador devo usar para um terminal série web?',
    answer: 'Use Chrome, Edge ou outro navegador baseado em Chromium via HTTPS ou localhost. Firefox, Safari e muitos navegadores iOS não expõem a API Web Serial.',
  },
  {
    question: 'Qual taxa de transmissão devo escolher?',
    answer: 'Escolha a taxa de transmissão configurada no seu firmware. Exemplos Arduino costumam usar 9600 ou 115200, enquanto registos mais rápidos, bootloaders e fluxos de sensores de alta velocidade podem usar 230400, 460800 ou 921600.',
  },
];

const howToData = [
  {
    name: 'Conecte o dispositivo série USB',
    text: 'Ligue a placa ou adaptador e feche qualquer outro terminal série que possa já ter a porta aberta.',
  },
  {
    name: 'Selecione a taxa de transmissão',
    text: 'Escolha a mesma taxa de transmissão usada pelo firmware, como 115200 para muitos sketches Arduino, ESP32 e RP2040.',
  },
  {
    name: 'Conceda permissão ao navegador',
    text: 'Pressione Conectar, escolha o dispositivo série no seletor do navegador e permita que a página abra a porta.',
  },
  {
    name: 'Leia e envie dados do terminal',
    text: 'Observe os registos recebidos no terminal, envie comandos com terminações de linha CRLF opcionais e limpe ou pause a saída ao vivo quando necessário.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<WebUsbSerialMonitorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Monitor Série Online para Hardware USB Maker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este monitor série do navegador abre uma porta série USB diretamente do Chrome ou Edge e transmite texto de microcontroladores, pontes USB UART, placas de desenvolvimento, bootloaders, dispositivos de teste, sensores e hardware de laboratório. Projetado para diagnósticos rápidos quando precisa de uma consola série mas não quer instalar um IDE de computador ou aplicação de terminal.',
    },
    {
      type: 'message',
      title: 'Limite de permissão do navegador',
      html: 'A página não pode enumerar ou abrir silenciosamente os seus dispositivos série. O acesso só começa após pressionar Conectar e escolher uma porta no seletor do navegador. Os dados do terminal permanecem na aba atual, a menos que você mesmo os copie.',
    },
    {
      type: 'stats',
      items: [
        { value: '9600-921600', label: 'predefinições de baud comuns' },
        { value: 'CRLF', label: 'terminação de comando opcional' },
        { value: 'local', label: 'sessão de terminal' },
      ],
    },
    {
      type: 'title',
      text: 'Quando um Terminal Série Web é Útil',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Verificar mensagens de inicialização do Arduino, ESP32, ESP8266, RP2040, STM32 ou firmware personalizado.',
        'Enviar comandos AT para modem, GPS, LoRa, Wi-Fi, Bluetooth ou módulos celulares através de um adaptador USB UART.',
        'Ler a saída de sensores de um gabarito de teste de fábrica, laboratório de sala de aula, controlador robótico ou protótipo de bancada.',
        'Verificar se um controlador de ponte série USB, cabo, alimentação da placa e taxa de transmissão do firmware estão todos a funcionar juntos.',
        'Coletar um registo de erros rápido antes de relatar um bug ou solicitar suporte de hardware.',
      ],
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Monitor série web',
          description: 'Melhor para suporte rápido, instruções em sala de aula, diagnósticos de campo e fluxos de trabalho maker onde abrir um URL é mais rápido do que instalar um IDE.',
        },
        {
          title: 'Terminal de computador',
          description: 'Melhor para protocolos binários, sessões longas de captura, scripts, controle de fluxo por hardware, macros e ambientes onde as APIs do navegador estão bloqueadas.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Lista de Verificação de Taxa de Transmissão e Terminação de Linha',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Configuração', 'Escolha típica', 'O que corre mal quando está incorreto'],
      rows: [
        ['Taxa de transmissão', '115200 para muitas placas modernas, 9600 para exemplos antigos.', 'Texto legível transforma-se em símbolos aleatórios ou nenhum registo útil aparece.'],
        ['Terminação de linha', 'CRLF para muitos analisadores de comando, sem terminação para protocolos de caracteres brutos.', 'Comandos são ignorados porque o firmware está à espera de um terminador.'],
        ['Acesso exclusivo à porta', 'Feche o Arduino Serial Monitor, PuTTY, screen, minicom ou ferramentas do fornecedor.', 'O seletor do navegador abre a porta, mas a leitura ou escrita falha.'],
        ['Contexto seguro', 'HTTPS ou localhost.', 'A API Serial está ausente mesmo num navegador compatível.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Sem saída série?',
      html: 'Confirme se a placa está alimentada e o cabo USB suporta dados, não apenas carregamento. Tente 9600, 57600 e 115200 se não souber a taxa de transmissão do firmware. Pressione reset após conectar, pois muitas placas imprimem registos de inicialização apenas durante o arranque. Feche outros softwares que ainda possam estar com a porta série e instale o controlador do sistema operacional para CH340, CP210x, FTDI ou o fornecedor da placa se o dispositivo nunca aparecer.',
    },
    {
      type: 'title',
      text: 'Privacidade, Segurança e Limitações',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Pontos fortes e limitações do Web Serial',
      items: [
        {
          pro: 'Sem instalação no computador para diagnósticos básicos de texto série.',
          con: 'Requer um navegador baseado em Chromium e um contexto seguro.',
        },
        {
          pro: 'O seletor do navegador limita o acesso à porta específica que escolhe.',
          con: 'Não destinado a analisadores de protocolo binário ou capturas longas sem supervisão.',
        },
        {
          pro: 'Funciona bem para registos de texto, linha de comandos e verificações rápidas de hardware.',
          con: 'Algumas políticas corporativas, navegadores móveis e sistemas operacionais bloqueiam o Web Serial.',
        },
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Serial não está disponível',
    unsupportedBody: 'Use Chrome ou Edge via HTTPS ou localhost e certifique-se de que o seu dispositivo expõe uma interface série USB.',
    secureContext: 'O Web Serial requer HTTPS ou localhost. Recarregue esta página de uma origem segura e tente novamente.',
    statusIdle: 'Escolha uma taxa de transmissão e conecte um dispositivo série USB',
    statusPermission: 'A aguardar o seletor de porta série do navegador',
    statusOpening: 'A abrir porta série',
    statusConnected: 'Porta série conectada',
    statusDisconnected: 'Porta série desligada',
    statusError: 'Falha na conexão série',
    connect: 'Conectar Série',
    disconnect: 'Desligar',
    send: 'Enviar',
    clear: 'Limpar',
    pause: 'Pausar',
    resume: 'Retomar',
    baudRate: 'Taxa de transmissão',
    newline: 'Anexar CRLF',
    inputPlaceholder: 'Digite um comando e pressione Enter',
    portFallback: 'Nenhuma porta selecionada',
    portLabel: 'Identidade da porta',
    connectedDeviceLabel: 'Dispositivo conectado',
    deviceNameFallback: 'Dispositivo série USB',
    transportLabel: 'Ligação Web Serial',
    bytesLabel: 'Bytes',
    linesLabel: 'Linhas',
    privacyTitle: 'Acesso controlado',
    privacyBody: 'O navegador expõe apenas o dispositivo série que seleciona. Os registos permanecem nesta aba, a menos que os copie.',
    emptyLog: 'A saída do terminal aparecerá aqui após conectar um dispositivo série.',
    copied: 'Copiado',
    copyLog: 'Copiar',
    presetSlow: '9600',
    presetArduino: '115200',
    presetFast: '921600',
    terminalLabel: 'Terminal ao vivo',
    unknownUsbId: 'N/A',
    logDirectionRx: 'rx',
    logDirectionTx: 'tx',
    logDirectionSys: 'sys',
    vidPrefix: 'VID ',
    pidSeparator: ' / PID ',
    baudUnit: ' baud',
    vendorFtdi: 'FTDI USB Serial',
    vendorSilabs: 'Silicon Labs CP210x',
    vendorCh340: 'CH340 USB Serial',
    vendorArduinoUsb: 'Arduino USB Serial',
    vendorAdafruit: 'Adafruit USB Serial',
    vendorRp2040: 'Raspberry Pi RP2040',
    vendorEspressif: 'Espressif USB Serial',
    vendorOpenSource: 'Open Source USB Serial',
  },
};
