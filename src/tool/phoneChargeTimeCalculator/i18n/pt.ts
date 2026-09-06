import type { ToolLocaleContent } from '../../../types';
import type { PhoneChargeTimeCalculatorUI } from '../ui';
import { createPhoneChargeTimeCalculatorContent } from './createContent';

const ui: PhoneChargeTimeCalculatorUI = {
  capacityLabel: 'Capacidade da bateria', capacityUnit: 'mAh', capacityHint: 'Use o valor das especificações do telemóvel.',
  currentLabel: 'Carga atual', targetLabel: 'Carga pretendida', percentUnit: '%', powerLabel: 'Potência do carregador', powerUnit: 'W',
  efficiencyLabel: 'Eficiência estimada', efficiencyUnit: '%', efficiencyHint: 'Inclui perdas de conversão e calor.',
  statusEmpty: 'Introduza os dados do telemóvel e do carregador.', statusReady: 'Atualiza-se enquanto escreve.', statusError: 'Verifique o valor assinalado.',
  resultTitle: 'Tempo estimado até ao objetivo', energyLabel: 'Energia ainda necessária', energyUnit: 'Wh', fromCurrentCharge: 'a partir da carga atual', startNowLabel: 'Se começar agora, chega a',
  scenarioTitle: 'Cenários de referência do carregador', scenarioAt: 'mesmo telemóvel e mesmo intervalo de carga', assumptionsTitle: 'Pressupostos',
  assumptionsText: 'Usa uma tensão nominal da bateria de {voltage} V, uma eficiência de {efficiency}% e cerca de {taper}% de abrandamento adicional acima de 70%. O seu telemóvel pode carregar de forma diferente.',
  errorCapacity: 'Introduza uma capacidade superior a zero.', errorCurrent: 'A carga atual deve estar entre 0 e 100%.', errorTarget: 'A carga pretendida deve estar entre 1 e 100%.',
  errorTargetOrder: 'A carga pretendida deve ser superior à carga atual.', errorPower: 'Introduza uma potência superior a zero.', errorEfficiency: 'A eficiência deve estar entre 50% e 100%.',
  targetMarker: 'objetivo', chargeProgressLabel: 'Intervalo de carga', hourUnit: 'h', minuteUnit: 'min',
};

const faq = [
  { question: 'Posso calcular o tempo de carregamento apenas com a percentagem?', answer: 'Não. A mesma percentagem representa quantidades de energia diferentes numa bateria pequena e numa grande. O cálculo também precisa da capacidade, da potência que chega ao telemóvel e de uma estimativa de eficiência.' },
  { question: 'Porque é que o telemóvel demora por vezes mais do que a estimativa?', answer: 'O telemóvel pode reduzir a potência devido a um nível de carga elevado, calor, limitações do cabo ou do protocolo, ou utilização do equipamento. O resultado é uma estimativa para planeamento, não uma medição em direto.' },
  { question: 'Devo indicar a potência do carregador ou a potência recebida pelo telemóvel?', answer: 'Indique a potência que provavelmente chega ao telemóvel quando a conhecer. Se só souber a potência indicada no carregador, use-a como limite superior e espere um tempo real mais longo.' },
];

const howTo = [
  { name: 'Introduza a capacidade da bateria', text: 'Consulte a capacidade nas especificações do telemóvel e introduza-a em mAh. Não substitua esse valor pela capacidade de uma power bank: a tensão e as perdas de conversão são diferentes.' },
  { name: 'Defina o intervalo de carga', text: 'Introduza a percentagem atual e a percentagem necessária. Carregar de 20% para 50% produz um resultado diferente de carregar até 100%.' },
  { name: 'Adicione potência e eficiência', text: 'Introduza a potência em watts ou, se souber, a potência de carregamento que o telemóvel aceita realmente. Mantenha a eficiência predefinida sem uma medição própria.' },
  { name: 'Compare os cenários', text: 'Compare o resultado com as referências de 5 W, 15 W e 30 W para decidir se o carregador é suficiente para o tempo disponível.' },
];

const seo = [
  { type: 'title' as const, text: 'Calcule o tempo de carregamento do telemóvel', level: 2 as const },
  { type: 'paragraph' as const, html: 'Use esta calculadora de tempo de carregamento quando quiser saber se a bateria do telemóvel chega a um nível útil antes de sair, viajar ou iniciar uma chamada longa. Introduza a capacidade, a carga atual, o objetivo, a potência do carregador e a eficiência. O resultado estima os minutos e a energia necessários para esse carregamento específico, permitindo comparar o tempo disponível com carregadores mais lentos ou mais rápidos.' },
  { type: 'title' as const, text: 'Que dados deve introduzir', level: 2 as const },
  { type: 'list' as const, items: ['Capacidade: use a capacidade do telemóvel em mAh, não a capacidade indicada numa power bank.', 'Carga atual e objetivo: descreva o carregamento de que realmente precisa; o objetivo tem de ser superior ao nível atual.', 'Potência e eficiência: use a potência que chega ao telemóvel quando a souber. Caso contrário, a potência do carregador é apenas um limite máximo.'] },
  { type: 'title' as const, text: 'Como interpretar o resultado', level: 2 as const },
  { type: 'paragraph' as const, html: 'O valor principal é o tempo estimado entre a carga atual e o objetivo. A energia em falta representa o mesmo carregamento em watt-hora e as barras de referência mostram a diferença entre 5 W, 15 W e 30 W. Se não tiver tempo suficiente, reduza o objetivo ou use um carregador e um cabo que o telemóvel consiga aproveitar a uma potência superior.' },
  { type: 'title' as const, text: 'Porque é que o carregamento abranda perto dos 100%', level: 2 as const },
  { type: 'paragraph' as const, html: 'Um telemóvel normalmente não carrega com a mesma potência do vazio até ficar cheio. Quando a bateria se aproxima de um nível elevado, o controlo de carregamento pode reduzir a corrente para gerir o calor e o esforço da bateria. Por isso, uma estimativa de 20% para 80% é muitas vezes mais útil para planear do que uma extrapolação linear até aos 100%. Para objetivos acima de 70%, o cálculo inclui uma pequena tolerância de abrandamento.' },
  { type: 'title' as const, text: 'Estimativa: o que a calculadora não deteta', level: 2 as const },
  { type: 'list' as const, items: ['Não consegue ler o modelo, a saúde da bateria, o protocolo, o cabo, a temperatura, a utilização ou a potência de carregamento instantânea.', 'Não diagnostica uma bateria degradada nem certifica a compatibilidade com carregamento rápido. Para uma resposta precisa, cronometre a mesma configuração na situação real.'] },
];

export const content: ToolLocaleContent<PhoneChargeTimeCalculatorUI> = createPhoneChargeTimeCalculatorContent({ locale: 'pt', slug: 'calculadora-tempo-carregamento-telemovel', title: 'Calculadora do tempo de carregamento do telemóvel', description: 'Estime o tempo necessário para atingir uma percentagem pretendida com base na capacidade da bateria, carga atual, potência do carregador e eficiência.', faq, howTo, seo, ui });
