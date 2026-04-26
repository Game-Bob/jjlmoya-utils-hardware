import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpectrumCanvasUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-precisao-cor';
const title = 'Teste de Precisão de Cor - Spectrum Canvas';
const description =
  'Calibre o seu ecrã com precisão. Teste os espaços de cor sRGB e DCI-P3, detete desvios cromáticos, meça a precisão com métricas Delta E e gere relatórios de calibração profissionais.';

const faqData = [
  {
    question: 'O que é precisão de cor e por que é importante?',
    answer:
      'A precisão de cor mede a fidelidade com que um ecrã reproduz as cores em comparação com uma referência padrão. Para designers, fotógrafos e criadores de conteúdo, cores precisas são essenciais para garantir que o seu trabalho tenha uma aparência consistente em diferentes dispositivos.',
  },
  {
    question: 'Qual é a diferença entre sRGB e DCI-P3?',
    answer:
      'sRGB é o espaço de cor padrão para a web e ecrãs de consumo. DCI-P3 é uma gama de cores mais ampla utilizada em cinema digital e ecrãs profissionais. O DCI-P3 cobre aproximadamente 25% mais cores do que o sRGB.',
  },
  {
    question: 'O que é Delta E e como é medido?',
    answer:
      'Delta E (ΔE) é uma medida numérica da diferença de cor percebida pelo olho humano. Um Delta E abaixo de 1 é impercetível, abaixo de 2 é muito bom, abaixo de 4 é aceitável e acima de 4 torna-se percetível. O nosso teste utiliza os cálculos Delta E CIE 1976.',
  },
  {
    question: 'Posso usar esta ferramenta para calibrar o meu hardware?',
    answer:
      'Esta ferramenta fornece uma referência de calibração visual e medições de precisão. Para calibração profissional, deve combinar estes resultados com ferramentas de calibração de hardware (colorímetros) e software dedicado como ColorThink ou Datacolor SpyderCheckr.',
  },
  {
    question: 'Quais espaços de cor são testados?',
    answer:
      'Testamos sRGB (padrão), DCI-P3 (cinema) e a precisão do ponto branco através dos iluminantes padrão D65 (6500K) e D93 (9300K). O teste também inclui a verificação da correção gamma.',
  },
];

const howToData = [
  {
    name: 'Selecione a sua Gama',
    text: 'Escolha entre sRGB (padrão web/consumo) ou DCI-P3 (cinema profissional). O seu ecrã adaptará a sua paleta de teste de acordo.',
  },
  {
    name: 'Nomeie o seu Hardware (Opcional)',
    text: 'Introduza um nome descritivo para o seu monitor ou dispositivo (ex: "MacBook Pro 16 M1"). Isto personaliza o seu relatório.',
  },
  {
    name: 'Entre no Modo de Ecrã Inteiro',
    text: 'Pressione F11 ou o botão de ecrã inteiro para eliminar a interface do navegador e garantir o máximo de espaço de visualização para um teste preciso.',
  },
  {
    name: 'Complete os Testes de Cor',
    text: 'Prossiga através da Pureza Espectral (cores sólidas), Dinâmica de Gradientes (transições suaves), Deteção de Black Crush (detalhe nas sombras) e Calibração do Ponto Branco.',
  },
  {
    name: 'Reveja os Resultados e Exporte',
    text: 'Gere um relatório visual com visualização de Gama 3D, métricas Delta E e recomendações de calibração. Exporte como PDF para arquivo.',
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

export const content: ToolLocaleContent<SpectrumCanvasUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Teste Profissional de Precisão de Cor: Calibre o seu Ecrã com Precisão',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O Spectrum Canvas é uma ferramenta de teste de precisão de cor de nível profissional projetada para qualquer pessoa que dependa de trabalho onde a cor é crítica. Seja você um fotógrafo, designer, criador de conteúdo ou entusiasta de hardware, esta ferramenta ajuda-o a <strong>diagnosticar desvios cromáticos</strong>, <strong>medir a precisão do ecrã</strong> e <strong>gerar relatórios de calibração</strong>.',
    },
    {
      type: 'title',
      text: 'Por que a Precisão de Cor é Importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uma diferença de apenas um ponto percentual na reprodução de cor pode significar a diferença entre um momento "uau" e uma reação de "isto parece errado". Os ecrãs profissionais oferecem uma precisão dentro de <strong>Delta E &lt; 2</strong>. Os ecrãs de consumo muitas vezes derivam para um Delta E de 4-6+, causando:',
    },
    {
      type: 'paragraph',
      html: '<ul><li>Fotografias que parecem vibrantes no seu monitor, mas sem vida na impressão</li><li>Edições de vídeo que não correspondem às expectativas do cliente</li><li>Mockups de web design que não correspondem à especificação da marca</li><li>Projetos de hardware onde os indicadores de cor são interpretados incorretamente</li></ul>',
    },
    {
      type: 'title',
      text: 'Entendendo os Espaços de Cor: sRGB vs DCI-P3',
      level: 3,
    },
    {
      type: 'title',
      text: 'sRGB (Espaço de Cor Padrão)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Estabelecido pela Microsoft e HP em 1996, o sRGB é o <strong>padrão universal para eletrónicos de consumo</strong> e para a web. Utiliza uma gama de cores triangular definida por três cores primárias (Vermelho: 0.6400x 0.3300, Verde: 0.3000 0.6000, Azul: 0.1500 0.0600).',
    },
    {
      type: 'paragraph',
      html: '<strong>Características:</strong><ul><li>Cobre ~35% do espectro de cores visíveis</li><li>Otimizado para condições típicas de iluminação ambiente</li><li>Gamma: 2.2 (corresponde à maioria dos ecrãs de consumo)</li><li>Adequado para: web, redes sociais, fotos de consumo</li></ul>',
    },
    {
      type: 'title',
      text: 'DCI-P3 (Gama de Cinema Digital)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Desenvolvido pelo consórcio Digital Cinema Initiatives, o DCI-P3 é um <strong>espaço de cor de nível cinematográfico</strong> projetado para projeção teatral e ecrãs profissionais. Abrange ~25% mais cores do que o sRGB.',
    },
    {
      type: 'paragraph',
      html: '<strong>Características:</strong><ul><li>Cobre ~53% do espectro de cores visíveis</li><li>Otimizado para ambientes de cinema escuros</li><li>Gamma: 2.6 (corrigido por gama para alto contraste)</li><li>Adequado para: produção de filmes, fotografia profissional, conteúdo HDR</li></ul>',
    },
    {
      type: 'title',
      text: 'O que é Delta E? Quantificando a Diferença de Cor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Delta E (ΔE) é a <strong>métrica da diferença de cor percetível pelo ser humano</strong> no espaço de cor CIE LAB. Indica quão perto a saída do seu ecrã está de uma cor de referência padrão.',
    },
    {
      type: 'paragraph',
      html: '<strong>Escala Delta E (CIE 1976):</strong><ul><li>0–1: Impercetível pelo olho humano</li><li>1–2: Apenas percetível</li><li>2–4: Percetível, mas aceitável para uso geral</li><li>4–6: Desvio de cor notável</li><li>&gt;6: Diferença muito óbvia</li></ul>',
    },
    {
      type: 'paragraph',
      html: 'Os ecrãs profissionais são calibrados para manter um <strong>Delta E &lt; 2</strong> em toda a gama visível. Os ecrãs de consumo normalmente atingem um Delta E de 3-5.',
    },
    {
      type: 'title',
      text: 'A Suite de Testes Spectrum Canvas',
      level: 3,
    },
    {
      type: 'title',
      text: 'Teste de Pureza Espectral',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Exibe cores primárias e secundárias puras (Vermelho, Verde, Azul, Ciano, Magenta, Amarelo) e mede como o seu monitor as reproduz. Animações de "preenchimento" de cor revelam uma reprodução de cor consistente em todo o ecrã.',
    },
    {
      type: 'title',
      text: 'Dinâmica de Gradientes',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Gradientes suaves que transicionam através de todo o espaço de cor. Procure por <strong>artefactos de banding</strong> (degraus visíveis em vez de transições suaves), que indicam profundidade de bits de cor insuficiente ou má correção gamma.',
    },
    {
      type: 'title',
      text: 'Deteção de Black Crush (Teste do Buraco Negro)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Fundo preto puro (0,0,0) com tons quase pretos apenas visíveis. Se o detalhe das sombras se "esmaga", o seu monitor está a perder informações nos tons escuros — comum em ecrãs móveis e painéis económicos.',
    },
    {
      type: 'title',
      text: 'Calibração do Ponto Branco',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Testa diferentes temperaturas de cor correlacionadas (D65 a 6500K = luz do dia, D93 a 9300K = estúdio), revelando qualquer desvio de temperatura de cor ou instabilidade térmica.',
    },
    {
      type: 'title',
      text: 'Interpretando os seus Resultados',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O Spectrum Canvas gera um relatório visual e pronto para impressão com:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>Visualização de Gama 3D:</strong> Um gráfico 3D rotativo que mostra o volume de cor real do seu ecrã versus o padrão de referência</li><li><strong>Mapa de Calor Delta E:</strong> Onde no espetro o seu ecrã se desvia</li><li><strong>Curva Gamma:</strong> Linearidade do brilho em toda a faixa 0–255</li><li><strong>Pontuação de Calibração:</strong> Uma única "Classificação Spectrum" (Elite, Cinematic, Studio, Standard) baseada na precisão geral</li></ul>',
    },
    {
      type: 'title',
      text: 'Avançado: Dicas de Calibração Manual',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se os seus resultados mostrarem desvios, tente estes ajustes no menu OSD (On-Screen Display) do seu monitor:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>Temperatura de Cor:</strong> Altere para "Quente" se as cores forem muito frias/azuis; para "Frio" se forem muito quentes/amarelas</li><li><strong>Contraste:</strong> Aumente se os pretos parecerem lavados; diminua se o detalhe for esmagado</li><li><strong>Brilho:</strong> Ajuste para obter um cinzento neutro sem matiz de cor a 50% de brilho</li><li><strong>Saturação:</strong> Se as cores estiverem supersaturadas, reduza; se estiverem sem brilho, aumente</li></ul>',
    },
    {
      type: 'title',
      text: 'Limitações e Melhores Práticas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Esta ferramenta fornece referência visual e estatística</strong>. Para trabalhos profissionais que exijam calibração certificada, utilize medidores de cor por hardware (espetrofotómetro ou colorímetro) e software de calibração dedicado.',
    },
    {
      type: 'paragraph',
      html: '<strong>Melhores Práticas:</strong><ul><li>Permita que o seu monitor aqueça durante 30 minutos antes do teste (o desvio térmico estabiliza)</li><li>Teste em condições de iluminação ambiente constantes</li><li>Evite reflexos; use uma pala de monitor, se possível</li><li>Repita os testes semanalmente para acompanhar os desvios ao longo do tempo</li><li>Mantenha um arquivo digital de relatórios para comparações futuras</li></ul>',
    },
  ],
  ui: {
    badge: 'Calibração de Ecrã',
    title: 'Spectrum Canvas - Teste de Precisão de Cor',
    description:
      'A calibração de ecrã profissional encontra a estética cinematográfica. Teste sRGB e DCI-P3, meça a precisão Delta E, detete desvios cromáticos e gere um relatório visual que transforma dados em conhecimento.',
    btnStartCalibration: 'Iniciar Calibração',
    btnFullscreen: 'Ecrã Inteiro',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Modo de Ecrã Inteiro',
    kbdReset: 'R',
    kbdResetLabel: 'Reiniciar Teste',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Sair',
    gamutSRGB: 'sRGB',
    gamutDCIP3: 'DCI-P3',
    gamutToggle: 'Espaço de Cor',
    hardwareName: 'Nome do Hardware/Monitor',
    hardwareNamePlaceholder: 'ex: MacBook Pro 16" M1 Max',
    purityTest: 'Pureza Espectral',
    gradientTest: 'Dinâmica de Gradientes',
    blackHoleTest: 'Deteção de Black Crush',
    whitePointTest: 'Calibração do Ponto Branco',
    colorCheckpoint: 'Ponto de Controlo de Cor',
    generateReport: 'Gerar Relatório',
    viewResults: 'Ver Resultados',
    btnExit: 'Sair (ESC)',
    compareSideBySide: 'Comparar Lado a Lado',
  },
};
