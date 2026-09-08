import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { LaptopBatteryRuntimeUI } from '../ui';

const slug = 'calculadora-duracao-bateria-portatil';
const title = 'Calculadora de autonomia da bateria do portátil';
const description = 'Estime quanto tempo o seu portátil pode funcionar com a carga atual em tarefas leves, equilibradas e intensas.';
const faq = [
  { question: 'O que estima esta calculadora?', answer: 'Divide a energia disponível na bateria pelos watts introduzidos para cada utilização. É uma estimativa de planeamento, não uma leitura em direto nem uma garantia do fabricante.' },
  { question: 'Onde encontro a capacidade e a saúde da bateria?', answer: 'Consulte o relatório da bateria ou a documentação do fabricante para a capacidade de projeto e a capacidade atual com carga completa. A saúde é a capacidade atual expressa como percentagem da capacidade original.' },
  { question: 'Porque é que a autonomia muda conforme o trabalho?', answer: 'Um portátil que consome mais watts utiliza a mesma energia armazenada mais depressa. Videochamadas, jogos, monitor externo, brilho alto e carga contínua de CPU ou GPU aumentam o consumo médio.' },
  { question: 'A ferramenta consegue ler automaticamente a bateria?', answer: 'Não. Funciona localmente no navegador e usa os valores que fornece. Substitua os exemplos por um relatório recente ou por uma medição média quando a precisão for importante.' },
];
const howTo = [
  { name: 'Ler a capacidade original', text: 'Introduza a capacidade de projeto em watt-hora. Se só souber os miliampere-hora e os volts, converta primeiro com Wh = V × Ah.' },
  { name: 'Descrever a bateria atual', text: 'Defina a capacidade atual com carga completa como percentagem da capacidade original e indique a carga prevista quando sair do carregador.' },
  { name: 'Ajustar consumos realistas', text: 'Escolha o perfil mais próximo e edite os watts se tiver uma medição do portátil ou de um medidor de consumo.' },
  { name: 'Tomar uma decisão de mobilidade', text: 'Leia as três linhas e planeie com a mais curta para a tarefa exigente. Se a margem for apertada ou urgente, reduza o consumo ou leve o carregador.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pt' };

export const content: ToolLocaleContent<LaptopBatteryRuntimeUI> = {
  slug, title, description, faq, howTo, bibliography, schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'O que mede realmente uma estimativa de autonomia', level: 2 },
    { type: 'paragraph', html: 'A bateria de um portátil armazena energia em watt-hora. O equipamento gasta essa energia a uma potência medida em watts. A calculadora transforma os dois dados numa duração para decidir se a carga chega para uma viagem, reunião, aula ou sessão de trabalho.' },
    { type: 'paragraph', html: 'O modelo estima primeiro a capacidade atual com carga completa usando a capacidade original e a saúde da bateria. Depois aplica a percentagem de carga prevista no início. Cada utilização consome uma parte do mesmo orçamento energético.' },
    { type: 'title', text: 'Escolher dados fiáveis', level: 2 },
    { type: 'paragraph', html: 'Use um relatório da bateria ou a especificação do fabricante. A capacidade de projeto, a capacidade atual com carga completa e a carga restante são valores diferentes. Se só conhece volts e ampere-hora, converta com <strong>Wh = V × Ah</strong>; 1.000 mAh equivalem a 1 Ah.' },
    { type: 'list', items: ['Calcule a saúde dividindo a capacidade atual com carga completa pela capacidade de projeto.', 'Introduza a carga que estará realmente disponível no início da sessão.', 'Use um consumo médio medido quando a sessão for longa ou importante.', 'Inclua monitor externo, dock ou aplicação exigente no cenário escolhido.'] },
    { type: 'title', text: 'Ler a autonomia como margem de planeamento', level: 2 },
    { type: 'paragraph', html: 'A linha leve representa leitura e documentos simples, a equilibrada representa multitarefa normal e a intensa mostra o custo de manter um consumo elevado. Compare o trabalho previsto com o tempo necessário e planeie com o resultado credível mais curto.' },
    { type: 'table', headers: ['Sinal', 'O que significa', 'O que fazer'], rows: [['Confortável', 'Seis horas ou mais nesse consumo', 'A sessão tem uma margem ampla.'], ['Viável', 'Entre três e seis horas', 'Adequado para uma sessão definida; prepare um carregador.'], ['Apertado', 'Entre uma e três horas', 'Reduza o consumo ou planeie uma pausa para carregar.'], ['Urgente', 'Menos de uma hora', 'Considere a utilização dependente do carregador.']] },
    { type: 'title', text: 'O que a estimativa não pode prometer', level: 2 },
    { type: 'paragraph', html: 'O consumo real muda a cada segundo. Brilho, ligações sem fios, temperatura, tarefas em segundo plano, firmware e reservas do sistema alteram a hora de descarga. A ferramenta não acede a sensores, não modela a química da bateria e não garante uma duração específica.' },
    { type: 'tip', title: 'Sugestão de medição', html: 'Anote a percentagem da bateria e o tempo decorrido durante uma sessão representativa. Substitua os watts do perfil pela média observada e repita o cálculo para cada tipo de trabalho.' },
  ],
  ui: {
    batteryInputsLabel: 'Ponto de partida da bateria', designCapacityLabel: 'Capacidade original da bateria', designCapacityHint: 'Energia da bateria nova', healthLabel: 'Saúde da bateria', healthHint: 'Carga completa atual comparada com nova', chargeLabel: 'Carga à partida', chargeHint: 'Carga prevista no início do trabalho', scenariosLabel: 'Autonomia por utilização', scenariosHint: 'Edite o consumo médio de cada tipo de trabalho', powerLabel: 'Consumo médio', wattsSuffix: 'W', presetsLabel: 'Começar com um conjunto', presetBalanced: 'Trabalho diário', presetTravel: 'Poupança em viagem', presetCreative: 'Criatividade intensa', runwayLabel: 'Percurso de energia', runwayCaption: 'Cada linha indica quando essa utilização esgotaria a mesma carga inicial.', availableEnergyLabel: 'Energia disponível agora', fullCapacityLabel: 'Capacidade atual com carga completa', shortestScenarioLabel: 'Planear em torno de', runtimeLabel: 'Autonomia estimada', loadLabel: 'Consumo', healthStateExcellent: 'Estado da bateria excelente', healthStateGood: 'Estado da bateria bom', healthStateAging: 'Bateria envelhecida', healthStateWorn: 'Bateria desgastada', statusComfortable: 'Margem confortável', statusWorkable: 'Sessão viável', statusTight: 'Margem apertada', statusUrgent: 'Depende do carregador', scenarioLight: 'Trabalho leve', scenarioBalanced: 'Trabalho equilibrado', scenarioIntense: 'Trabalho intenso', sceneBatteryLabel: 'Carga inicial', sceneEnergyLabel: 'Energia disponível', sceneTimeLabel: 'Tempo de autonomia', noteLabel: 'Limite do modelo', noteText: 'É uma estimativa de planeamento baseada nos seus dados. O consumo real e as reservas do sistema podem reduzir a duração.',
  },
};
