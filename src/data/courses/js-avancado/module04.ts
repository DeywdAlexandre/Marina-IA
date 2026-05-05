import { CourseModule } from '../../../types/academy';
import { lesson0401 } from './lessons/lesson0401';
import { lesson0402 } from './lessons/lesson0402';
import { lesson0403 } from './lessons/lesson0403';
import { lesson0404 } from './lessons/lesson0404';
import { lesson0405 } from './lessons/lesson0405';
import { lesson04Video } from './lessons/lesson04_video';

export const module04: CourseModule = {
  id: 'js-adv-mod-04',
  title: 'Módulo 4: Performance e Alta Ordem',
  description: 'Otimize seu código para o mundo real. Aprenda técnicas de cache, controle de eventos e processamento paralelo para criar sistemas ultra-rápidos.',
  icon: '⚡',
  lessons: [
    lesson0401,
    lesson0402,
    lesson0403,
    lesson0404,
    lesson0405,
    lesson04Video,
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: 'js-adv-quiz-04-q1',
        question: 'Qual a vantagem da técnica de Memoization?',
        options: [
          'Deixa o código mais curto.',
          'Economiza processamento ao armazenar resultados de funções lentas em cache.',
          'Melhora a segurança da senha.',
          'Limpa o LocalStorage automaticamente.'
        ],
        correctAnswer: 1,
        explanation: 'Memoization é fundamental para otimizar funções pesadas que recebem os mesmos parâmetros frequentemente.'
      },
      {
        id: 'js-adv-quiz-04-q2',
        question: 'Para que serve o Debounce em um campo de busca?',
        options: [
          'Para mudar a fonte do texto.',
          'Para evitar que múltiplas requisições sejam feitas enquanto o usuário ainda está digitando.',
          'Para traduzir o texto automaticamente.',
          'Para apagar o campo de busca.'
        ],
        correctAnswer: 1,
        explanation: 'Debounce garante que a busca só ocorra após o usuário terminar ou pausar a digitação.'
      }
    ]
  }
};
