import { CourseModule } from '../../../types/academy';
import { lesson0301 } from './lessons/lesson0301';
import { lesson0302 } from './lessons/lesson0302';
import { lesson0303 } from './lessons/lesson0303';
import { lesson0304 } from './lessons/lesson0304';
import { lesson0305 } from './lessons/lesson0305';
import { lesson03Video } from './lessons/lesson03_video';

export const module03: CourseModule = {
  id: 'js-int-mod-03',
  title: 'Módulo 3: O Mundo Assíncrono',
  description: 'Conecte seu código com a realidade. Aprenda a lidar com tempo, promessas e a buscar dados reais de APIs na internet.',
  icon: '🌐',
  lessons: [
    lesson0301,
    lesson0302,
    lesson0303,
    lesson0304,
    lesson0305,
    lesson03Video,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'js-int-quiz-03-q1',
        question: 'Qual a principal vantagem de usar Async/Await em vez de .then()?',
        options: [
          'Deixa o código mais rápido.',
          'Torna o código mais legível e fácil de entender, parecendo sequencial.',
          'É a única forma de usar APIs.',
          'Funciona sem internet.'
        ],
        correctAnswer: 1,
        explanation: 'Async/Await evita o "callback hell" e deixa a lógica muito mais clara.'
      },
      {
        id: 'js-int-quiz-03-q2',
        question: 'O que o comando fetch() retorna inicialmente?',
        options: [
          'O dado final que eu pedi.',
          'Uma Promise.',
          'Um erro.',
          'Uma string JSON.'
        ],
        correctAnswer: 1,
        explanation: 'O fetch retorna uma promessa que, quando resolvida, contém a resposta da rede.'
      },
      {
        id: 'js-int-quiz-03-q3',
        question: 'Para que serve o bloco catch?',
        options: [
          'Para capturar pokémons.',
          'Para lidar com erros e evitar que o aplicativo trave.',
          'Para repetir o código.',
          'Para deletar o banco de dados.'
        ],
        correctAnswer: 1,
        explanation: 'O catch intercepta erros que ocorreram no try, permitindo uma resposta controlada.'
      }
    ]
  }
};
