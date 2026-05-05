import { CourseModule } from '../../../types/academy';
import { lesson0501 } from './lessons/lesson0501';
import { lesson0502 } from './lessons/lesson0502';
import { lesson0503 } from './lessons/lesson0503';
import { lesson0504 } from './lessons/lesson0504';
import { lesson0505 } from './lessons/lesson0505';

export const module05: CourseModule = {
  id: 'js-adv-mod-05',
  title: 'Módulo 5: Projeto Marina POS & Inventory',
  description: 'Coloque a mão na massa e construa um Sistema de Ponto de Venda profissional do zero, com controle de estoque, carrinho inteligente e emissão de cupons.',
  icon: '🏪',
  lessons: [
    lesson0501,
    lesson0502,
    lesson0503,
    lesson0504,
    lesson0505,
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: 'js-adv-quiz-05-q1',
        question: 'Qual a vantagem de usar uma Classe para representar um Produto no PDV?',
        options: [
          'Deixa o código mais colorido.',
          'Permite agrupar dados (nome, preço) e comportamentos (renderizar, vender) em uma única unidade reutilizável.',
          'É obrigatório para usar o LocalStorage.',
          'Nenhuma vantagem.'
        ],
        correctAnswer: 1,
        explanation: 'Classes são a base para criar estruturas de dados complexas e organizadas.'
      },
      {
        id: 'js-adv-quiz-05-q2',
        question: 'Por que usamos o método preventDefault() em sistemas de formulário?',
        options: [
          'Para mudar o texto do botão.',
          'Para impedir que a página recarregue e perdamos o estado do JavaScript.',
          'Para carregar uma imagem.',
          'Para fechar o navegador.'
        ],
        correctAnswer: 1,
        explanation: 'Preservar o estado em Single Page Applications (SPA) é crucial.'
      }
    ]
  }
};
