import { CourseModule } from '../../../types/academy';
import { lesson0201 } from './lessons/lesson0201';
import { lesson0202 } from './lessons/lesson0202';
import { lesson0203 } from './lessons/lesson0203';
import { lesson0204 } from './lessons/lesson0204';
import { lesson0205 } from './lessons/lesson0205';
import { lesson02Video } from './lessons/lesson02_video';

export const module02: CourseModule = {
  id: 'js-adv-mod-02',
  title: 'Módulo 2: Orientação a Objetos Profissional',
  description: 'Aprenda a modelar sistemas complexos usando os pilares da OOP: Encapsulamento, Herança, Polimorfismo e Composição.',
  icon: '🏗️',
  lessons: [
    lesson0201,
    lesson0202,
    lesson0203,
    lesson0204,
    lesson0205,
    lesson02Video,
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: 'js-adv-quiz-02-q1',
        question: 'Qual a diferença entre uma Classe e um Protótipo?',
        options: [
          'Não há diferença real; classes são apenas um "açúcar sintático" sobre o sistema de protótipos do JS.',
          'Classes são mais rápidas que protótipos.',
          'Protótipos são obsoletos e não devem ser usados.',
          'Classes só funcionam em Node.js.'
        ],
        correctAnswer: 1,
        explanation: 'Embora a sintaxe de classe seja mais moderna e legível, por baixo o JS continua usando protótipos.'
      },
      {
        id: 'js-adv-quiz-02-q2',
        question: 'Para que serve o encapsulamento com propriedades privadas (#)?',
        options: [
          'Para esconder o código do usuário.',
          'Para garantir que os dados internos de um objeto só sejam alterados por métodos autorizados da própria classe.',
          'Para reduzir o tamanho do arquivo JS.',
          'Para permitir herança múltipla.'
        ],
        correctAnswer: 1,
        explanation: 'O encapsulamento protege a integridade dos dados do seu sistema.'
      }
    ]
  }
};
