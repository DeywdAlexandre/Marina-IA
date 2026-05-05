import { CourseModule } from '../../../types/academy';
import { lesson0501 } from './lessons/lesson0501';
import { lesson0502 } from './lessons/lesson0502';
import { lesson0503 } from './lessons/lesson0503';
import { lesson0504 } from './lessons/lesson0504';
import { lesson05Video } from './lessons/lesson05_video';

export const module05: CourseModule = {
  id: 'lp-mod-05',
  title: 'Funções e Modularização: Criando Ferramentas',
  description: 'Aprenda a organizar seu código em blocos reutilizáveis. Domine parâmetros, retornos e as modernas Arrow Functions.',
  icon: '🧩',
  lessons: [
    lesson0501,
    lesson0502,
    lesson0503,
    lesson0504,
    lesson05Video,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'lp-quiz-05-q1',
        question: 'Qual a diferença entre Parâmetro e Argumento?',
        options: [
          'Nenhuma, são sinônimos.',
          'Parâmetro é o nome na definição da função; Argumento é o valor real passado na chamada.',
          'Argumento é o nome na definição; Parâmetro é o valor real.',
          'Parâmetro é para números e Argumento é para textos.'
        ],
        correctAnswer: 1,
        explanation: 'Parâmetro é o "espaço" reservado; Argumento é o que "preenche" o espaço.'
      },
      {
        id: 'lp-quiz-05-q2',
        question: 'Para que serve o comando "return"?',
        options: [
          'Para repetir a função.',
          'Para apagar a função.',
          'Para devolver um valor para quem chamou a função e encerrar sua execução.',
          'Para pular uma linha.'
        ],
        correctAnswer: 2,
        explanation: 'O return é a saída da função, entregando o resultado final.'
      },
      {
        id: 'lp-quiz-05-q3',
        question: 'Como se escreve uma Arrow Function de uma linha que eleva um número ao quadrado?',
        options: [
          'function(x) { x * x }',
          'x => x * x',
          'x -> x * x',
          'const x = x * x'
        ],
        correctAnswer: 1,
        explanation: 'A sintaxe reduzida permite omitir chaves e o return se houver apenas uma expressão.'
      }
    ]
  }
};
