import { CourseModule } from '../../../types/academy';
import { lesson1001 } from './lessons/lesson1001';
import { lesson1002 } from './lessons/lesson1002';
import { lesson1003 } from './lessons/lesson1003';

export const module10: CourseModule = {
  id: 'lp-mod-10',
  title: 'Módulo Bônus: Carreira e Boas Práticas',
  description: 'Vá além da lógica. Aprenda a escrever código limpo, debugar erros como um profissional e usar a IA para acelerar seu aprendizado.',
  icon: '🎁',
  lessons: [
    lesson1001,
    lesson1002,
    lesson1003,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'lp-quiz-10-q1',
        question: 'O que define um código como "Clean Code"?',
        options: [
          'Ele não tem comentários.',
          'Ele é fácil de ler e entender por qualquer desenvolvedor.',
          'Ele é escrito em apenas uma linha.',
          'Ele usa as tecnologias mais caras.'
        ],
        correctAnswer: 1,
        explanation: 'Código limpo é código legível.'
      },
      {
        id: 'lp-quiz-10-q2',
        question: 'Qual a primeira coisa a se fazer ao encontrar um erro (bug)?',
        options: [
          'Apagar tudo e começar do zero.',
          'Ler a mensagem de erro e usar console.log para inspecionar os dados.',
          'Reclamar no Twitter.',
          'Pedir para outra pessoa fazer.'
        ],
        correctAnswer: 1,
        explanation: 'A investigação é a parte mais importante do trabalho de um desenvolvedor.'
      }
    ]
  }
};
