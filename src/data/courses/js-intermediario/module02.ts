import { CourseModule } from '../../../types/academy';
import { lesson0201 } from './lessons/lesson0201';
import { lesson0202 } from './lessons/lesson0202';
import { lesson0203 } from './lessons/lesson0203';
import { lesson0204 } from './lessons/lesson0204';
import { lesson0205 } from './lessons/lesson0205';
import { lesson02Video } from './lessons/lesson02_video';

export const module02: CourseModule = {
  id: 'js-int-mod-02',
  title: 'Módulo 2: Eventos e Interatividade',
  description: 'Dê vida à sua página. Aprenda a reagir a cliques, movimentos do mouse, entradas de teclado e submissões de formulários.',
  icon: '⚡',
  lessons: [
    lesson0201,
    lesson0202,
    lesson0203,
    lesson0204,
    lesson0205,
    lesson02Video,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'js-int-quiz-02-q1',
        question: 'O que o método event.preventDefault() faz exatamente?',
        options: [
          'Apaga o código do desenvolvedor.',
          'Cancela o comportamento padrão que o navegador teria para aquele evento.',
          'Pula para a próxima lição.',
          'Salva os dados no banco de dados.'
        ],
        correctAnswer: 1,
        explanation: 'Sem ele, formulários recarregariam a página e links abririam URLs novas antes do nosso código rodar.'
      },
      {
        id: 'js-int-quiz-02-q2',
        question: 'Qual evento é mais indicado para capturar o que o usuário digita em tempo real?',
        options: ['click', 'submit', 'input', 'mouseleave'],
        correctAnswer: 2,
        explanation: 'O evento "input" dispara a cada caractere digitado ou alterado no campo.'
      },
      {
        id: 'js-int-quiz-02-q3',
        question: 'Para que serve a Delegação de Eventos?',
        options: [
          'Para delegar o trabalho para outro programador.',
          'Para gerenciar eventos de muitos elementos filhos através de um único ouvinte no elemento pai.',
          'Para forçar o clique em um botão.',
          'Para desativar o JavaScript da página.'
        ],
        correctAnswer: 1,
        explanation: 'Ela é eficiente para memória e permite lidar com elementos criados dinamicamente.'
      }
    ]
  }
};
