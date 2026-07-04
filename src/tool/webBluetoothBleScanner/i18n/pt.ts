import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebBluetoothBleScannerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'escaneador-ble-web-bluetooth';
const title = 'Scanner Web Bluetooth BLE';
const description = 'Escaneie dispositivos Bluetooth Low Energy próximos a partir do navegador, inspecione UUIDs de serviços GATT expostos e teste se o seu hardware IoT ou wearable é detetável.';

const faqData = [
  {
    question: 'Um site pode escanear dispositivos Bluetooth sem permissão?',
    answer: 'Não. O Web Bluetooth requer sempre um gesto do utilizador e um seletor de permissões do navegador. Esta ferramenta apenas vê o dispositivo que seleciona explicitamente e não armazena endereços MAC, IDs de dispositivo ou resultados de verificação.',
  },
  {
    question: 'Porque é que o scanner não mostra todos os dispositivos BLE próximos?',
    answer: 'Os navegadores expõem intencionalmente o Bluetooth através de um seletor de permissões, não como um scanner silencioso em segundo plano. Alguns dispositivos também param de anunciar, escondem o nome, exigem emparelhamento ou expõem serviços apenas após uma conexão.',
  },
  {
    question: 'Que navegadores suportam Web Bluetooth?',
    answer: 'O Web Bluetooth é melhor suportado em navegadores de desktop baseados em Chromium, como Chrome e Edge. Normalmente requer HTTPS ou localhost e não está disponível em muitas configurações do Firefox, Safari e navegadores iOS.',
  },
  {
    question: 'Pode ler dados privados de sensores de um wearable?',
    answer: 'Apenas se o dispositivo expuser serviços GATT compatíveis e o navegador conceder acesso. Muitos wearables comerciais exigem aplicações do fornecedor, encriptação, vinculação ou características proprietárias que um scanner de navegador genérico não consegue descodificar.',
  },
  {
    question: 'O que são UUIDs de serviço GATT?',
    answer: 'Um UUID de serviço GATT identifica um grupo de funcionalidades Bluetooth Low Energy, como Serviço de Bateria, Frequência Cardíaca, Informação do Dispositivo ou um serviço personalizado do fornecedor usado por hardware maker e IoT.',
  },
];

const howToData = [
  {
    name: 'Use um navegador compatível',
    text: 'Abra a ferramenta no Chrome ou Edge através de HTTPS ou localhost e certifique-se de que o Bluetooth está ativado no computador ou telefone.',
  },
  {
    name: 'Coloque o hardware em modo de anúncio',
    text: 'Ative o dispositivo BLE, desligue e ligue novamente, pressione o botão de emparelhamento ou abra o modo de anúncio para que apareça no seletor de permissões do navegador.',
  },
  {
    name: 'Escaneie o ambiente',
    text: 'Pressione Escanear Ambiente e selecione o dispositivo BLE que deseja inspecionar. A caixa de diálogo de permissões do navegador controla exatamente qual dispositivo se torna visível para a página.',
  },
  {
    name: 'Leia os serviços GATT',
    text: 'Após a conexão, reveja os cartões UUID de serviço para identificar perfis Bluetooth padrão, serviços de firmware personalizados e se o dispositivo expõe o caminho de dados esperado.',
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

export const content: ToolLocaleContent<WebBluetoothBleScannerUI> = {
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
      text: 'Testador BLE online para IoT, Wearables e Hardware Maker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este scanner Web Bluetooth permite testar se um dispositivo Bluetooth Low Energy próximo é detetável a partir de um navegador e que serviços GATT expõe após a concessão de permissão. É útil ao depurar firmware ESP32, sketches Arduino BLE, sensores inteligentes, wearables de fitness, teclados, beacons personalizados, monitores ambientais e hardware protótipo antes de criar uma aplicação móvel nativa.',
    },
    {
      type: 'message',
      title: 'Modelo de privacidade',
      html: 'A GameBob não armazena endereços MAC, IDs de dispositivo, nomes, UUIDs, dados de sinal ou histórico de verificações. O seletor de permissões do navegador decide qual dispositivo único a página pode aceder e os resultados permanecem na sua sessão atual do navegador.',
    },
    {
      type: 'table',
      headers: ['O que vê', 'O que significa', 'O que verificar a seguir'],
      rows: [
        ['Nome do dispositivo', 'O nome Bluetooth anunciado, se o hardware o transmitir.', 'Se estiver em branco, verifique os dados de anúncio do firmware ou use um prefixo de nome conhecido durante os testes.'],
        ['ID do dispositivo', 'Um identificador com âmbito de navegador, não o endereço MAC público real.', 'Use-o apenas para esta sessão do navegador; não o trate como um número de série universal do hardware.'],
        ['UUIDs de serviço GATT', 'Os grupos de serviços expostos após a aceitação da conexão.', 'Compare UUIDs padrão com a lista Bluetooth SIG ou a sua tabela de serviços do firmware.'],
        ['Serviço personalizado', 'Um UUID específico do fornecedor ou do projeto.', 'Abra o seu firmware, perfil da aplicação móvel ou documentação BLE para mapear características e permissões.'],
      ],
    },
    {
      type: 'title',
      text: 'Porque a Verificação Bluetooth do Navegador é Diferente',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'As aplicações nativas de scanner BLE mostram frequentemente anúncios contínuos de muitos dispositivos próximos. O Web Bluetooth é deliberadamente mais rigoroso: a página deve ser aberta num contexto seguro, a verificação deve começar com um clique do utilizador e o navegador mostra um seletor de permissões. Isto protege os utilizadores contra o rastreamento silencioso, dando aos programadores uma forma prática de se ligarem ao hardware BLE selecionado a partir de JavaScript.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Scanner Web Bluetooth',
          description: 'Ideal para validação rápida de firmware, demonstrações, fluxos de suporte, laboratórios educativos e diagnósticos baseados em navegador onde o atrito de instalação é importante.',
        },
        {
          title: 'Aplicação BLE nativa',
          description: 'Melhor para verificação em segundo plano, registo RSSI, fluxos de emparelhamento, protocolos encriptados do fornecedor, grandes árvores de características e diagnósticos de campo a longo prazo.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Razões Comuns para um Dispositivo BLE Não Aparecer',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'O Bluetooth está desativado ao nível do sistema operativo ou o navegador não tem permissão de Bluetooth.',
        'O dispositivo está ligado a outro telefone, portátil, aplicação do fornecedor ou gateway e parou de anunciar.',
        'O hardware anuncia apenas por uma curta janela após o arranque ou após pressionar um botão de emparelhamento.',
        'O navegador não é baseado em Chromium, a página não é servida por HTTPS ou a plataforma bloqueia o Web Bluetooth.',
        'O firmware anuncia dados do fabricante mas esconde o nome local, pelo que o seletor pode mostrar um dispositivo sem nome.',
        'O dispositivo requer vinculação, encriptação ou autenticação proprietária antes que os serviços se tornem legíveis.',
      ],
    },
    {
      type: 'title',
      text: 'Como Usar UUIDs GATT Durante a Depuração',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uma conexão bem-sucedida com UUIDs de serviço indica que o navegador pode alcançar o periférico e que o periférico expõe pelo menos parte da sua tabela GATT. Serviços padrão como Serviço de Bateria, Informação do Dispositivo, Frequência Cardíaca, Dispositivo de Interface Humana e Deteção Ambiental são fáceis de reconhecer. UUIDs personalizados geralmente apontam para funcionalidades específicas do firmware e precisam do mapa de características do seu código fonte ou documentação do fornecedor.',
    },
    {
      type: 'table',
      headers: ['Sintoma', 'Causa provável', 'Solução prática'],
      rows: [
        ['O seletor de permissões está vazio', 'O dispositivo não está a anunciar ou falta suporte do navegador.', 'Reinicie o dispositivo, ative o modo de emparelhamento, aproxime-se ou tente novamente no Chrome/Edge.'],
        ['A conexão falha imediatamente', 'O dispositivo está ocupado, fora de alcance ou rejeita a conexão do navegador.', 'Desligue as aplicações do fornecedor e mantenha o periférico perto do computador.'],
        ['Nenhum serviço é listado', 'GATT não está disponível, serviços estão ocultos ou o acesso não foi concedido para esses UUIDs.', 'Adicione serviços opcionais conhecidos em testes de firmware ou inspecione com uma ferramenta BLE nativa.'],
        ['Apenas UUIDs personalizados aparecem', 'O hardware usa serviços de firmware específicos do fornecedor.', 'Mapeie UUIDs para constantes do código fonte e documente permissões de leitura/escrita das características.'],
      ],
    },
    {
      type: 'title',
      text: 'Limites de Segurança e Privacidade',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'A página não pode recolher silenciosamente dispositivos Bluetooth próximos em segundo plano.',
        'O navegador pode ocultar endereços MAC reais e fornecer um ID de dispositivo com âmbito limitado.',
        'O acesso só começa depois de o utilizador clicar no botão de verificação e escolher um dispositivo.',
        'Os resultados não são carregados nem armazenados pela GameBob.',
        'Dispositivos comerciais sensíveis podem exigir encriptação ou um fluxo de emparelhamento do fornecedor que este scanner genérico não consegue contornar.',
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Bluetooth não está disponível',
    unsupportedBody: 'Experimente o Chrome ou Edge no desktop ou Android, ative o Bluetooth e abra a página através de HTTPS ou localhost.',
    secureContext: 'O Web Bluetooth requer uma página HTTPS segura ou localhost. Recarregue a ferramenta a partir de uma origem segura e tente novamente.',
    scanButton: 'Escanear Ambiente',
    scanning: 'Escaneando',
    reconnect: 'Escanear novamente',
    disconnect: 'Desconectar',
    privacyTitle: 'Privacidade desde a conceção',
    privacyBody: 'A GameBob não armazena endereços MAC, IDs de dispositivo, nomes, UUIDs ou histórico de verificações. O navegador apenas expõe o dispositivo que escolher.',
    deviceLabel: 'Dispositivo selecionado',
    nameFallback: 'Dispositivo BLE sem nome',
    idLabel: 'ID do dispositivo do navegador',
    servicesLabel: 'Serviços GATT',
    noServices: 'Não foram devolvidos serviços primários legíveis para esta conexão.',
    statusIdle: 'Pronto para escanear hardware BLE próximo',
    statusPermission: 'A aguardar o seletor de permissões do navegador',
    statusConnecting: 'A ligar ao dispositivo BLE selecionado',
    statusConnected: 'Ligado e serviços carregados',
    statusDisconnected: 'Dispositivo desligado',
    statusCancelled: 'Nenhum dispositivo BLE foi selecionado ou o Bluetooth está desligado/indisponível neste dispositivo.',
    statusUnavailable: 'O Bluetooth parece estar desligado, bloqueado ou ausente neste dispositivo. Ative o Bluetooth ou tente a partir de hardware que tenha um adaptador BLE.',
    statusError: 'Verificação Bluetooth falhou',
    signalUnknown: 'A força do sinal é controlada pelo seletor do navegador',
    gattUnavailable: 'Este dispositivo não expôs um servidor GATT ao navegador',
    customServiceName: 'Serviço personalizado ou específico do fornecedor',
    serviceGenericAccess: 'Acesso Genérico',
    serviceGenericAttribute: 'Atributo Genérico',
    serviceDeviceInformation: 'Informação do Dispositivo',
    serviceHeartRate: 'Frequência Cardíaca',
    serviceBattery: 'Serviço de Bateria',
    serviceHumanInterfaceDevice: 'Dispositivo de Interface Humana',
    serviceCyclingSpeedCadence: 'Velocidade e Cadência de Ciclismo',
    serviceEnvironmentalSensing: 'Deteção Ambiental',
    serviceUserData: 'Dados do Utilizador',
    serviceFitnessMachine: 'Máquina de Fitness',
    uuidHelp: 'Os UUIDs identificam serviços Bluetooth. Os serviços padrão são nomeados automaticamente; UUIDs específicos do fornecedor precisam da documentação do seu firmware ou dispositivo.',
    compatibilityHint: 'Funciona melhor em navegadores baseados em Chromium com Bluetooth ativado. O Web Bluetooth é intencionalmente limitado por permissões e pode não mostrar todos os anunciantes próximos.',
    serviceCountSingular: 'serviço',
    serviceCountPlural: 'serviços',
  },
};
