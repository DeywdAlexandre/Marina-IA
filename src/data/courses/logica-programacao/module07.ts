import { CourseModule } from '../../../types/academy';
import { lesson0701 } from './lessons/lesson0701';
import { lesson0702 } from './lessons/lesson0702';
import { lesson0703 } from './lessons/lesson0703';
import { lesson0704 } from './lessons/lesson0704';

export const module07: CourseModule = {
  id: 'lp-mod-07',
  title: 'Objetos e Estruturas de Dados: Modelando a Realidade',
  description: 'Aprenda a organizar dados complexos usando Objetos. Entenda propriedades, métodos e como gerenciar listas de objetos do mundo real.',
  icon: '💎',
  lessons: [
    lesson0701,
    lesson0702,
    lesson0703,
    lesson0704,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'lp-quiz-07-q1',
        question: 'O que diferencia um Objeto de um Array?',
        options: [
          'Objetos são para números, Arrays para textos.',
          'Arrays usam índices numéricos (0, 1, 2), enquanto Objetos usam nomes para as propriedades (chaves).',
          'Objetos não podem ser repetidos.',
          'Arrays são mais modernos.'
        ],
        correctAnswer: 1,
        explanation: 'A organização por chaves nomeadas é o que torna os objetos ideais para modelar entidades.'
      },
      {
        id: 'lp-quiz-07-q2',
        question: 'Qual a forma correta de criar um método dentro de um objeto?',
        options: [
          'Usando function() fora do objeto.',
          'Colocando uma função como valor de uma propriedade.',
          'Usando um loop for.',
          'Não é possível colocar funções dentro de objetos.'
        ],
        correctAnswer: 1,
        explanation: 'Um método é simplesmente uma propriedade cujo valor é uma função.'
      },
      {
        id: 'lp-quiz-07-q3',
        question: 'Em um Array de Objetos, como você acessaria o valor de um objeto específico?',
        options: [
          'Apenas pelo nome do objeto.',
          'Usando primeiro o índice do array e depois o ponto para a propriedade do objeto.',
          'Usando apenas o ponto.',
          'Convertendo o array em texto.'
        ],
        correctAnswer: 1,
        explanation: 'Exemplo: lista[0].propriedade é a forma padrão de navegar nessas estruturas.'
      }
    ]
  }
};
