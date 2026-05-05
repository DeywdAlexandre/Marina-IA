import { CourseModule } from '../../../types/academy';
import { lesson0301 } from './lessons/lesson0301';
import { lesson0302 } from './lessons/lesson0302';
import { lesson0303 } from './lessons/lesson0303';
import { lesson0304 } from './lessons/lesson0304';

export const module03: CourseModule = {
  id: 'lp-mod-03',
  title: 'Estruturas de Decisão: O Cérebro do Código',
  description: 'Aprenda a fazer seu programa "pensar" e tomar decisões baseadas em condições, comparações e lógica complexa.',
  icon: '🚦',
  lessons: [
    lesson0301,
    lesson0302,
    lesson0303,
    lesson0304,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'lp-quiz-03-q1',
        question: 'Qual a principal diferença entre = e == ?',
        options: [
          '= é para números, == é para textos.',
          '= guarda um valor, == compara dois valores.',
          '= é mais rápido que ==.',
          'Nenhuma, são iguais.'
        ],
        correctAnswer: 1,
        explanation: 'Um sinal de igual é atribuição. Dois (ou três) são comparação.'
      },
      {
        id: 'lp-quiz-03-q2',
        question: 'No operador && (E), o que acontece se um lado for verdadeiro e o outro falso?',
        options: [
          'O resultado é verdadeiro.',
          'O resultado é falso.',
          'Dá erro de sintaxe.',
          'O computador escolhe o lado verdadeiro.'
        ],
        correctAnswer: 1,
        explanation: 'O && é exigente: ele só dá true se TODOS os lados forem true.'
      },
      {
        id: 'lp-quiz-03-q3',
        question: 'O que o comando "break" faz dentro de um switch?',
        options: [
          'Quebra o computador.',
          'Faz o código voltar ao início.',
          'Para a execução daquele caso e sai do switch.',
          'Pula para o próximo caso.'
        ],
        correctAnswer: 2,
        explanation: 'Sem o break, o switch continua executando os casos abaixo indevidamente.'
      }
    ]
  }
};
