import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StereoAudioTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-de-audio-estereo';
const title = 'Teste de áudio estéreo';
const description = 'Verifique os canais dos alto-falantes esquerdo e direito, equilíbrio estéreo, direção da fiação e imagem dos fones de ouvido com tons de teste gerados pelo navegador.';

const faqData = [
  {
    question: 'Como testar os alto-falantes esquerdo e direito online?',
    answer: 'Comece com volume baixo, pressione Esquerda e depois Direita. O tom esquerdo deve vir apenas do alto-falante ou fone esquerdo, e o tom direito apenas do lado direito. Use Centro para confirmar que ambos os lados tocam equilibrados.',
  },
  {
    question: 'Por que ambos os alto-falantes tocam durante o teste esquerdo ou direito?',
    answer: 'Alguns dispositivos, sistemas operacionais, alto-falantes Bluetooth, modos mono, configurações de acessibilidade ou aprimoramentos de áudio convertem estéreo para mono. Verifique o equilíbrio do sistema, configurações de áudio mono, cabos e efeitos de áudio específicos do aplicativo.',
  },
  {
    question: 'Isso pode diagnosticar cabos de alto-falante trocados?',
    answer: 'Sim. Se o botão Esquerda tocar no alto-falante direito e o botão Direita tocar no alto-falante esquerdo, o caminho de saída está invertido em algum lugar entre o computador, cabo, amplificador, alto-falantes ou fones de ouvido.',
  },
  {
    question: 'Um tom senoidal é seguro para alto-falantes e fones de ouvido?',
    answer: 'Um tom senoidal curto em volume moderado é normalmente seguro. Evite volume alto, sessões longas ou frequências muito altas, especialmente com fones de ouvido, pequenos alto-falantes de laptop ou amplificadores desconhecidos.',
  },
  {
    question: 'O navegador afeta o teste estéreo?',
    answer: 'A ferramenta usa o StereoPannerNode da Web Audio API. É confiável em navegadores modernos, mas a saída final ainda depende do roteamento do sistema operacional, drivers, codecs Bluetooth, DACs externos e fiação dos alto-falantes.',
  },
];

const howToData = [
  {
    name: 'Defina um volume inicial baixo',
    text: 'Abaixe o volume do sistema e use o controle deslizante de volume da ferramenta antes de reproduzir qualquer tom de teste.',
  },
  {
    name: 'Teste cada lado',
    text: 'Pressione Esquerda e Direita. Cada tom deve estar claramente isolado no alto-falante ou lado do fone de ouvido correspondente.',
  },
  {
    name: 'Verifique o equilíbrio central',
    text: 'Pressione Centro. O tom deve aparecer centralizado entre ambos os alto-falantes, não puxado fortemente para um lado.',
  },
  {
    name: 'Use a varredura',
    text: 'Execute Varredura para ouvir o movimento pelo campo estéreo e detectar quedas, fiação invertida ou imagem desigual.',
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<StereoAudioTestUI> = {
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
      text: 'Teste de alto-falante esquerdo e direito online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Use este teste de áudio estéreo online para verificar se seus alto-falantes esquerdo e direito, fones de ouvido, auriculares, soundbar, DAC, amplificador ou monitores estão roteados corretamente. A ferramenta reproduz tons gerados pelo navegador pelo canal esquerdo, canal direito, ambos os canais ou uma varredura estéreo móvel para que você possa detectar rapidamente canais invertidos, saída mono, alto-falantes fracos, problemas de equilíbrio e erros de fiação sem instalar software de áudio.',
    },
    {
      type: 'paragraph',
      html: 'Uma configuração estéreo correta preserva a direção: o tom de teste esquerdo deve vir apenas do alto-falante ou fone esquerdo, o tom direito apenas do lado direito, e o tom central deve soar igualmente equilibrado entre ambos os lados. Se o som aparecer no lado errado, nos dois lados ao mesmo tempo ou muito mais alto em um lado, o problema geralmente está nas configurações de saída, modo de acessibilidade mono, cabos, roteamento Bluetooth, posicionamento dos alto-falantes ou software de aprimoramento de áudio.',
    },
    {
      type: 'table',
      headers: ['Botão', 'O que você deve ouvir', 'Use para diagnosticar'],
      rows: [
        ['Esquerda', 'Tom apenas do alto-falante esquerdo, driver esquerdo do fone ou auricular esquerdo.', 'Cabos invertidos, posicionamento errado dos alto-falantes, saída mono ou remapeamento de canais.'],
        ['Direita', 'Tom apenas do alto-falante direito, driver direito do fone ou auricular direito.', 'Saídas trocadas, fiação de adaptador incorreta ou efeitos de driver alterando a ordem dos canais.'],
        ['Centro', 'O tom aparece no centro porque ambos os canais tocam equilibrados.', 'Desvio de equilíbrio do sistema, um alto-falante fraco, malha do auricular obstruída ou ganho desigual do amplificador.'],
        ['Varredura', 'O tom se move suavemente pela imagem estéreo de um lado para o outro.', 'Quedas, links Bluetooth instáveis, problemas de fase, artefatos de surround virtual ou imagem desigual.'],
      ],
    },
    {
      type: 'title',
      text: 'Problemas estéreo mais comuns que este teste encontra',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Canais esquerdo e direito estão invertidos: o botão esquerdo toca no lado direito, ou o botão direito toca no lado esquerdo.',
        'Estéreo colapsou para mono: esquerda, direita e centro soam quase idênticos nos dois alto-falantes.',
        'Um lado está mais baixo: o áudio central puxa para um alto-falante mesmo quando o controle de equilíbrio do sistema parece centralizado.',
        'Fones de ouvido estão com fiação ou uso incorretos: passos de jogos, panning de música e chamadas de vídeo parecem espacialmente confusos.',
        'Áudio Bluetooth ou USB está sendo processado: soundbars, docks, headsets e modos de TV podem converter ou virtualizar o sinal.',
        'Posicionamento dos alto-falantes é enganoso: um alto-falante muito próximo da parede, bloqueado por móveis ou mais distante pode deslocar a imagem central.',
      ],
    },
    {
      type: 'title',
      text: 'Como corrigir áudio esquerdo e direito invertido',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Para alto-falantes com fio, troque os plugues esquerdo e direito no amplificador, interface de áudio, DAC ou saída do computador.',
        'Para alto-falantes passivos, confirme que o alto-falante esquerdo está conectado aos terminais esquerdos do amplificador e o alto-falante direito aos terminais direitos.',
        'Para fones de ouvido, verifique se estão sendo usados na orientação correta e teste sem adaptadores, cabos de extensão ou divisores.',
        'No Windows ou macOS, verifique o equilíbrio de saída e desative o áudio mono nas configurações de acessibilidade ou som.',
        'Para alto-falantes Bluetooth e soundbars, desative o surround virtual, modo festa, áudio duplo, correção de ambiente ou modos de som da TV durante o teste.',
        'Para interfaces de áudio, DAWs e mixers, verifique o roteamento de canais, controles de pan, configurações de mix de monitor e qualquer mixer de software fornecido pelo fabricante.',
      ],
    },
    {
      type: 'title',
      text: 'Como interpretar o teste do alto-falante central',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O tom central não é um alto-falante central físico separado em uma configuração normal de dois canais. É o mesmo sinal enviado uniformemente para esquerda e direita. Em fones de ouvido, deve parecer centralizado dentro da cabeça; em alto-falantes, deve formar um centro fantasma entre eles. Se inclinar para a esquerda ou direita, verifique o equilíbrio do sistema, distância dos alto-falantes, ângulo dos alto-falantes, botões de volume, ajuste do amplificador, encaixe dos auriculares, poeira na grade do driver e se um alto-falante está parcialmente bloqueado ou com defeito.',
    },
    {
      type: 'table',
      headers: ['O que acontece', 'Causa provável', 'Próximo passo'],
      rows: [
        ['Esquerda toca dos dois lados', 'Áudio mono, downmixing ou processamento de áudio espacial.', 'Desative a saída mono e o surround virtual e teste novamente.'],
        ['Esquerda toca do lado direito', 'Os canais estão trocados em algum lugar da cadeia de reprodução.', 'Troque os cabos ou altere o roteamento de canais no driver, mixer ou amplificador.'],
        ['Centro está mais alto em um lado', 'Equilíbrio, posicionamento, dano no driver, encaixe no ouvido ou grade do alto-falante obstruída.', 'Compare com outro fone de ouvido ou par de alto-falantes e inspecione o posicionamento físico.'],
        ['Varredura pula ou desaparece', 'Instabilidade Bluetooth, artefatos de aprimoramento de áudio ou um cabo/conector com defeito.', 'Teste com saída com fio ou outro cabo para isolar o elo fraco.'],
      ],
    },
    {
      type: 'title',
      text: 'Teste esquerdo direito para fones de ouvido e auriculares',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para fones de ouvido e auriculares, o teste esquerdo/direito é especialmente útil antes de jogar, editar áudio, assistir filmes ou participar de chamadas. Coloque o fone normalmente, comece com volume baixo, pressione Esquerda e Direita e confirme que cada tom chega ao ouvido correto. Se ambos os lados soarem iguais, seu dispositivo pode estar usando áudio mono. Se um lado estiver abafado ou mais baixo, limpe a malha do auricular, recoloque a ponteira, verifique o cabo e compare com outro dispositivo de saída.',
    },
    {
      type: 'title',
      text: 'Dicas para testes de áudio seguros',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Comece com volume baixo do sistema, especialmente em fones de ouvido.',
        'Use Repetir até parar apenas quando precisar ativamente de som contínuo para rastreamento de cabos, posicionamento ou ajuste de equilíbrio.',
        'Mantenha os tons de teste curtos em alto-falantes pequenos; ondas senoidais contínuas podem se tornar desconfortáveis rapidamente.',
        'Evite ganho máximo em pequenos alto-falantes de laptop e amplificadores desconhecidos.',
        'Não coloque os fones de ouvido nas orelhas até confirmar que o volume está seguro.',
        'Após trocar cabos ou configurações, repita os testes esquerda, direita, centro e varredura nessa ordem.',
        'Para calibração de estúdio ou home theater, combine este teste rápido com um medidor SPL ou a rotina de calibração do receptor.',
      ],
    },
    {
      type: 'title',
      text: 'Diagnóstico rápido',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se esquerda e direita estiverem trocados, inspecione primeiro a fiação física, pois essa é a correção mais rápida para alto-falantes de mesa, amplificadores e interfaces de áudio. Se ambos os botões tocarem dos dois lados, procure saída mono, áudio espacial, surround virtual ou um dispositivo que intencionalmente converta estéreo para mono. Se o centro estiver descentralizado, mas esquerda e direita estiverem roteados corretamente, o problema geralmente é equilíbrio, posicionamento, encaixe do fone, grades obstruídas ou saída desigual dos alto-falantes.',
    },
  ],
  ui: {
    left: 'Esquerda',
    center: 'Centro',
    right: 'Direita',
    sweep: 'Varredura',
    stop: 'Parar',
    volume: 'Volume',
    duration: 'Duração',
    infiniteMode: 'Repetir até parar',
    infiniteModeHint: 'Mantém qualquer canal tocando para testes contínuos.',
    secondsUnit: 's',
    hertzUnit: 'Hz',
    tone: 'Tom',
    balance: 'Equilíbrio',
    activeIdle: 'Pronto',
    activeLeft: 'Reproduzindo canal esquerdo',
    activeCenter: 'Reproduzindo tom central',
    activeRight: 'Reproduzindo canal direito',
    activeSweep: 'Varrendo o campo estéreo',
    safety: 'Comece baixo. Tons de teste podem ser altos através de fones de ouvido, amplificadores e pequenos alto-falantes de laptop.',
    leftSpeaker: 'Alto-falante esquerdo',
    rightSpeaker: 'Alto-falante direito',
    centerLine: 'Campo estéreo',
  },
};
