import { CourseModule } from '../../../types/academy';
import { lesson0601 } from './lessons/lesson0601';
import { lesson0602 } from './lessons/lesson0602';
import { lesson0603 } from './lessons/lesson0603';
import { lesson0604 } from './lessons/lesson0604';
import { lesson06Video } from './lessons/lesson06_video';

export const module06: CourseModule = {
  id: 'lp-mod-06',
  title: 'Arrays: Organizando Dados em Massa',
  description: 'Aprenda a gerenciar listas de informações, manipular índices e percorrer coleções de dados usando loops poderosos.',
  icon: '🗄️',
  lessons: [
    lesson0601,
    lesson0602,
    lesson0603,
    lesson0604,
    lesson06Video,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'lp-quiz-06-q1',
        question: 'Qual o índice do primeiro item de um Array?',
        options: ['1', '0', '-1', 'A'],
        correctAnswer: 1,
        explanation: 'Sempre começamos a contar do 0 no mundo da programação.'
      },
      {
        id: 'lp-quiz-06-q2',
        question: 'Para que serve a propriedade .length de um Array?',
        options: [
          'Para mudar o nome da lista.',
          'Para apagar o array.',
          'Para saber quantos itens existem dentro da lista.',
          'Para ordenar a lista alfabeticamente.'
        ],
        correctAnswer: 2,
        explanation: 'Length significa "comprimento" ou "tamanho" da coleção.'
      },
      {
        id: 'lp-quiz-06-q3',
        question: 'Qual a forma correta de acessar o segundo item da lista: let nomes = ["Ana", "Bia", "Leo"]; ?',
        options: ['nomes[1]', 'nomes[2]', 'nomes(1)', 'nomes{1}'],
        correctAnswer: 0,
        explanation: 'O primeiro é nomes[0], então o segundo é nomes[1].'
      }
    ]
  }
};
