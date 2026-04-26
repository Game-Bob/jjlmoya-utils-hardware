import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PixelesPantallaUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'teste-pixel-morto-reparacao-ecra';
const title = 'Teste de Pixel Morto e Ferramenta de Reparação de Ecrã';
const description =
  'Verifique se o seu monitor tem píxeis mortos ou presos e repare-os com a nossa ferramenta estroboscópica de alta frequência online.';

const faqData = [
  {
    question: 'Qual é a diferença entre um pixel morto e um pixel preso?',
    answer:
      'Um pixel morto é permanentemente preto porque não recebe energia (transístor queimado). Um pixel preso (stuck pixel) é geralmente de uma cor brilhante (vermelho, verde ou azul) e pode ser reanimado por estimulação estroboscópica rápida.',
  },
  {
    question: 'Como funciona a ferramenta de reparação (Strobe)?',
    answer:
      'A nossa ferramenta gera um piscar rápido das cores primárias a alta velocidade. Isto pode forçar o cristal líquido preso do pixel a desbloquear. Recomenda-se deixá-la funcionar durante 10 a 30 minutos.',
  },
  {
    question: 'Podem aparecer píxeis mortos devido à temperatura?',
    answer:
      'Sim, temperaturas extremas podem afetar o painel. No entanto, as causas mais comuns são defeitos de fabrico ou impactos físicos que danificam os contactos elétricos do cristal líquido.',
  },
  {
    question: 'Quantos píxeis mortos são cobertos pela garantia?',
    answer:
      'Depende do fabricante e da norma ISO 9241-307. Geralmente, as marcas consideram até 2 ou 3 píxeis brilhantes como "normais" em painéis de Classe 1, enquanto os painéis de Classe 0 não permitem nenhum.',
  },
];

const howToData = [
  {
    name: 'Limpar o ecrã',
    text: 'Antes de começar, limpe bem o seu monitor com um pano de microfibras para evitar confundir pó com um pixel morto.',
  },
  {
    name: 'Entrar no modo de ecrã inteiro',
    text: 'Prima F11 ou o botão de ecrã inteiro para que a interface do navegador não interfira com a deteção de defeitos.',
  },
  {
    name: 'Alternar cores',
    text: 'Alterne entre fundos preto, branco, vermelho, verde e azul. Procure por quaisquer pontos que não correspondam à cor de fundo.',
  },
  {
    name: 'Iniciar o ciclo de reparação',
    text: 'Se encontrar um ponto brilhante, posicione a ferramenta Strobe sobre ele e deixe-a funcionar durante pelo menos 20 minutos.',
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

export const content: ToolLocaleContent<PixelesPantallaUI> = {
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
      text: 'Guia Completo: Píxeis Mortos, Píxeis Presos e Como Repará-los',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Notou um ponto estranho no seu ecrã que não muda de cor? Pode ser um defeito do painel. Esta ferramenta ajuda-o a diagnosticar se o seu monitor tem <strong>píxeis mortos</strong> ou <strong>píxeis presos</strong> e oferece uma solução para tentar repará-los.',
    },
    {
      type: 'title',
      text: 'Qual é a diferença entre um pixel morto e um pixel preso?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Existem dois tipos principais de defeitos de píxeis em monitores modernos, cada um com características e soluções distintas.',
    },
    {
      type: 'title',
      text: 'Pixel Preso (Stuck Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Este é o defeito mais comum. Ocorre quando um ou mais subpíxeis (Vermelho, Verde ou Azul) ficam presos no estado "ligado". <strong>Sintoma:</strong> Verá um ponto colorido brilhante permanente (vermelho, verde, azul ou branco) contra um fundo escuro. <strong>Muitas vezes reparável.</strong> O cristal líquido ainda responde; está simplesmente "bloqueado" numa polarização específica. A nossa ferramenta de reparação Strobe tenta desbloqueá-lo com estimulação rápida de voltagem.',
    },
    {
      type: 'title',
      text: 'Pixel Morto (Dead Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Ocorre quando o transístor que controla o pixel falha completamente e não deixa passar luz. <strong>Sintoma:</strong> Um ponto preto permanente, especialmente visível contra fundos claros ou brancos. <strong>Difícil de reparar (geralmente permanente).</strong> O dano é ao nível do hardware (circuito queimado). Nenhuma estimulação elétrica pode corrigi-lo. Geralmente requer a substituição do painel.',
    },
    {
      type: 'title',
      text: 'Como funciona a ferramenta de reparação Strobe?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A função "Reparar Pixel" utiliza uma técnica conhecida como <strong>Pixel Exercising</strong>. Gera um padrão de ruído aleatório de alta frequência (piscar rápido de cores) sobre a área afetada.',
    },
    {
      type: 'title',
      text: 'O Mecanismo: Cristal Líquido e Voltagem',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Os monitores LCD utilizam cristais líquidos que alteram a sua transparência com base na voltagem aplicada. Quando um subpixel fica preso, significa que o cristal está "congelado" numa polarização específica. Mudanças rápidas de voltagem (alcançadas através de mudanças rápidas de cores primárias) tentam "exercitar" o cristal e forçá-lo a mudar de estado.',
    },
    {
      type: 'title',
      text: 'Recomendações de Utilização',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '<ul><li>Recomenda-se executar a ferramenta sobre a área afetada durante pelo menos <strong>10 a 20 minutos</strong>.</li><li>Se não funcionar, tente sessões mais longas (até 1 hora) ou aplique uma pressão muito ligeira com um pano de microfibras sobre o pixel (por sua conta e risco).</li><li>Em alguns casos, aquecer ligeiramente o monitor com um secador de cabelo (em temperatura baixa) antes de ativar o Strobe melhora os resultados.</li></ul>',
    },
    {
      type: 'title',
      text: 'Aviso de Epilepsia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O modo de reparação utiliza luzes que piscam rapidamente a alta velocidade. Se tem epilepsia fotossensível ou sensibilidade à luz, <strong>NÃO utilize esta função</strong>. A exposição a padrões intermitentes pode desencadear convulsões em indivíduos suscetíveis.',
    },
    {
      type: 'title',
      text: 'Quando procurar garantia ou substituição',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se confirmar píxeis defeituosos (especialmente vários píxeis mortos), pode utilizar o nosso teste como prova para reclamações de garantia. Muitos fabricantes consideram mais de 2-3 píxeis brilhantes ou 1 pixel morto um defeito de fabrico que qualifica para substituição sob a norma ISO 9241-307 (Classe 1).',
    },
    {
      type: 'title',
      text: 'História das Normas de Píxeis Mortos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Durante décadas, os monitores LCD sofreram defeitos de píxeis devido à complexidade do fabrico. Um painel Full HD (1920×1080) contém 6.220.800 píxeis (18.662.400 subpíxeis). A probabilidade estatística de defeitos é inevitável. É por isso que existem normas como a ISO 9241-307 para definir "píxeis mortos aceitáveis" com base na classe do monitor.',
    },
  ],
  ui: {
    badge: 'Utilitário de Ecrã',
    title: 'Píxeis mortos ou presos?',
    description:
      'Verifique o estado do seu monitor com cores sólidas puras e repare píxeis presos com a nossa ferramenta de estimulação de alta frequência.',
    btnStartTest: 'Iniciar Teste',
    btnStartFix: 'Reparar Pixel',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Ecrã Inteiro',
    kbdSpace: 'Espaço',
    kbdSpaceLabel: 'Mudar Cor',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Sair',
    colorBlack: 'Preto',
    colorWhite: 'Branco',
    colorRed: 'Vermelho',
    colorGreen: 'Verde',
    colorBlue: 'Azul',
    btnToggleFixer: 'Abrir Ferramenta de Reparação (Strobe)',
    btnExit: 'Sair (ESC)',
  },
};
