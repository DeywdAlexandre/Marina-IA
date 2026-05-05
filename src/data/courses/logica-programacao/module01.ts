import { CourseModule } from '../../../types/academy';
import { lesson0101 } from './lessons/lesson0101';
import { lesson0102 } from './lessons/lesson0102';
import { lesson0103 } from './lessons/lesson0103';
import { lesson01Video } from './lessons/lesson01_video';

export const module01: CourseModule = {
  id: 'lp-mod-01',
  title: 'Fundamentos: A Base de Tudo',
  description: 'Entenda como o computador armazena informações e aprenda a manipular variáveis e tipos de dados fundamentais.',
  icon: '🧱',
  lessons: [
    lesson0101,
    lesson0103, // Inserida aqui para explicar a sintaxe antes dos tipos
    lesson0102,
    lesson01Video
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'lp-quiz-01-q1',
        question: 'Como declaramos uma variável cujo valor pode ser alterado durante o programa?',
        options: ['fixed', 'let', 'const', 'var-static'],
        correctAnswer: 1,
        explanation: 'O let é o padrão moderno para variáveis mutáveis no JavaScript.'
      },
      {
        id: 'lp-quiz-01-q2',
        question: 'Qual o resultado de console.log(5 + "5") no JavaScript?',
        options: ['10', '55', 'Erro', 'undefined'],
        correctAnswer: 1,
        explanation: 'Ao somar um número com um texto, o JavaScript converte tudo para texto e os junta (concatenação).'
      }
    ]
  }
};
