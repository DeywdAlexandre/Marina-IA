import { CourseModule } from '../../../types/academy';
import { lesson0901 } from './lessons/lesson0901';
import { lesson0902 } from './lessons/lesson0902';
import { lesson0903 } from './lessons/lesson0903';

/**
 * Módulo 9 — Bônus: O Toque de Mestre
 * Dicas de produtividade, estilo e profissionalismo no ecossistema Git/GitHub.
 */
export const module09: CourseModule = {
  id: 'git-mod-09',
  title: 'Bônus: O Toque de Mestre',
  description: 'Destaque-se na multidão. Aprenda a criar um perfil magnético no GitHub, escrever commits profissionais e turbinar sua produtividade com atalhos de elite.',
  icon: '✨',
  lessons: [
    lesson0901,
    lesson0902,
    lesson0903,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'git-quiz-09-q1',
        question: 'Qual o tipo de commit usado para indicar uma nova funcionalidade no padrão Conventional Commits?',
        options: [
          'fix:',
          'docs:',
          'feat:',
          'style:'
        ],
        correctAnswer: 2,
        explanation: 'feat é a abreviação de feature (funcionalidade).'
      },
      {
        id: 'git-quiz-09-q2',
        question: 'Como se chama o arquivo que você coloca no seu repositório de mesmo nome de usuário para personalizar a capa do seu perfil?',
        options: [
          'PERFIL.md',
          'README.md',
          'index.html',
          'config.json'
        ],
        correctAnswer: 1,
        explanation: 'O README.md é o padrão para documentação e também para o perfil especial do GitHub.'
      },
      {
        id: 'git-quiz-09-q3',
        question: 'Para que servem os Git Aliases?',
        options: [
          'Para mudar a senha do GitHub.',
          'Para criar atalhos personalizados para comandos longos ou frequentes do Git, economizando tempo de digitação.',
          'Para baixar o código mais rápido.',
          'Para traduzir o Git para espanhol.'
        ],
        correctAnswer: 1,
        explanation: 'Aliases transformam comandos complexos em atalhos de poucas letras.'
      }
    ]
  }
};
