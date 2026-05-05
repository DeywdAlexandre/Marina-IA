import { CourseModule } from '../../../types/academy';
import { lesson0401 } from './lessons/lesson0401';
import { lesson0402 } from './lessons/lesson0402';
import { lesson0403 } from './lessons/lesson0403';

export const module04: CourseModule = {
  id: 'lp-mod-04',
  title: 'Estruturas de Repetição: O Poder da Automação',
  description: 'Pare de repetir código manualmente. Aprenda a usar While e For para processar dados em massa e automatizar tarefas complexas.',
  icon: '🔄',
  lessons: [
    lesson0401,
    lesson0402,
    lesson0403,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'lp-quiz-04-q1',
        question: 'Qual o principal risco de usar um loop While sem um contador ou ponto de parada?',
        options: [
          'O código fica lento.',
          'O código nunca roda.',
          'Cria um loop infinito que pode travar o programa.',
          'A variável é apagada.'
        ],
        correctAnswer: 2,
        explanation: 'Sem um ponto de parada, a condição nunca se torna falsa e o computador tenta rodar para sempre.'
      },
      {
        id: 'lp-quiz-04-q2',
        question: 'Qual estrutura de loop agrupa a inicialização, a condição e o incremento em uma única linha?',
        options: ['while', 'if', 'for', 'switch'],
        correctAnswer: 2,
        explanation: 'O loop FOR é o mais organizado para quando sabemos o limite da repetição.'
      },
      {
        id: 'lp-quiz-04-q3',
        question: 'Se eu quero pular o número 7 em uma contagem de 1 a 10 e continuar para o 8, qual comando devo usar?',
        options: ['break', 'stop', 'skip', 'continue'],
        correctAnswer: 3,
        explanation: 'O continue pula o restante do código da rodada atual e pula para a próxima iteração.'
      }
    ]
  }
};
