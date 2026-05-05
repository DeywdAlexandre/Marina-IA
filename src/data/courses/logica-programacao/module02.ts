import { CourseModule } from '../../../types/academy';
import { lesson0201 } from './lessons/lesson0201';
import { lesson0202 } from './lessons/lesson0202';
import { lesson0203 } from './lessons/lesson0203';

export const module02: CourseModule = {
  id: 'lp-mod-02',
  title: 'Operadores e Expressões',
  description: 'Transforme seu código em uma calculadora poderosa. Aprenda a manipular números, entender a precedência matemática e usar atalhos de incremento.',
  icon: '🧮',
  lessons: [
    lesson0201,
    lesson0202,
    lesson0203,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'lp-quiz-02-q1',
        question: 'Qual operador usamos para descobrir o RESTO de uma divisão?',
        options: ['/', '*', '%', '&'],
        correctAnswer: 2,
        explanation: 'O operador % (módulo) retorna o que sobra da divisão inteira.'
      },
      {
        id: 'lp-quiz-02-q2',
        question: 'O que acontece se você não usar parênteses em uma expressão que tem soma e multiplicação?',
        options: [
          'O computador dá erro.',
          'O computador faz a soma primeiro.',
          'O computador segue a regra matemática e faz a multiplicação primeiro.',
          'O computador escolhe aleatoriamente.'
        ],
        correctAnswer: 2,
        explanation: 'A precedência matemática é respeitada pelo JavaScript: * e / vêm antes de + e -.'
      },
      {
        id: 'lp-quiz-02-q3',
        question: 'Como podemos aumentar o valor de uma variável "pontos" em exatamente 1 unidade de forma rápida?',
        options: ['pontos + 1', 'pontos++', 'pontos == 1', 'pontos +='],
        correctAnswer: 1,
        explanation: 'O operador ++ é o atalho de incremento unitário.'
      }
    ]
  }
};
