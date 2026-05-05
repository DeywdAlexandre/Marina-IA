import { CourseModule } from '../../../types/academy';
import { lesson0501 } from './lessons/lesson0501';
import { lesson0502 } from './lessons/lesson0502';
import { lesson0503 } from './lessons/lesson0503';
import { lesson0504 } from './lessons/lesson0504';
import { lesson0505 } from './lessons/lesson0505';

export const module05: CourseModule = {
  id: 'js-int-mod-05',
  title: 'Módulo 5: Projeto Marina Finance',
  description: 'Junte tudo o que aprendeu para construir um dashboard financeiro real, com cálculos automáticos, persistência e câmbio em tempo real.',
  icon: '🏦',
  lessons: [
    lesson0501,
    lesson0502,
    lesson0503,
    lesson0504,
    lesson0505,
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: 'js-int-quiz-05-q1',
        question: 'Qual a ordem correta para salvar as transações do Marina Finance?',
        options: [
          'Calcula -> Salva -> Adiciona.',
          'Adiciona na Array -> Atualiza a UI e Cálculos -> Salva a Array no LocalStorage.',
          'Apenas salva o que o usuário digitou.',
          'O LocalStorage salva automaticamente se usarmos a Fetch API.'
        ],
        correctAnswer: 1,
        explanation: 'Primeiro atualizamos os dados, depois a tela e por fim persistimos.'
      },
      {
        id: 'js-int-quiz-05-q2',
        question: 'Por que o projeto final usa o método preventDefault()?',
        options: [
          'Para mudar a cor do botão.',
          'Para impedir que o formulário recarregue a página e apague as variáveis do JavaScript.',
          'Para acelerar o cálculo do saldo.',
          'Para carregar a API de moedas.'
        ],
        correctAnswer: 1,
        explanation: 'Sem ele, o JavaScript reiniciaria do zero a cada nova transação adicionada.'
      }
    ]
  }
};
