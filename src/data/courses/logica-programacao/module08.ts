import { CourseModule } from '../../../types/academy';
import { lesson0801 } from './lessons/lesson0801';
import { lesson0802 } from './lessons/lesson0802';
import { lesson0803 } from './lessons/lesson0803';
import { lesson0804 } from './lessons/lesson0804';
import { lesson08Video } from './lessons/lesson08_video';

export const module08: CourseModule = {
  id: 'lp-mod-08',
  title: 'Métodos Modernos: Otimizando a Lógica',
  description: 'Saia do básico. Aprenda a usar forEach, map e filter para manipular dados como um desenvolvedor JavaScript profissional.',
  icon: '⚡',
  lessons: [
    lesson0801,
    lesson0802,
    lesson0803,
    lesson0804,
    lesson08Video,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'lp-quiz-08-q1',
        question: 'Qual método você usaria para criar uma lista contendo apenas os nomes dos usuários ativos?',
        options: [
          'Apenas forEach().',
          'Encadeamento de filter() e map().',
          'Apenas push().',
          'Apenas pop().'
        ],
        correctAnswer: 1,
        explanation: 'Filtramos os ativos com filter() e pegamos apenas os nomes com map().'
      },
      {
        id: 'lp-quiz-08-q2',
        question: 'Se eu tenho um array de 10 números e uso o map(), qual será o tamanho do novo array retornado?',
        options: [
          'Pode ser menor que 10.',
          'Sempre será exatamente 10.',
          'Será sempre 1.',
          'O array original é apagado.'
        ],
        correctAnswer: 1,
        explanation: 'O map() transforma cada item, mantendo o tamanho original da coleção.'
      },
      {
        id: 'lp-quiz-08-q3',
        question: 'Qual a vantagem de usar o forEach() em vez de um loop for manual?',
        options: [
          'É mais antigo e compatível.',
          'Evita erros com contadores e deixa o código mais legível (declarativo).',
          'Permite parar o loop com return.',
          'Não tem vantagem.'
        ],
        correctAnswer: 1,
        explanation: 'O forEach() é mais semântico e seguro, pois o JavaScript gerencia a iteração internamente.'
      }
    ]
  }
};
