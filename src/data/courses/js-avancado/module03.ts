import { CourseModule } from '../../../types/academy';
import { lesson0301 } from './lessons/lesson0301';
import { lesson0302 } from './lessons/lesson0302';
import { lesson0303 } from './lessons/lesson0303';
import { lesson0304 } from './lessons/lesson0304';
import { lesson0305 } from './lessons/lesson0305';

export const module03: CourseModule = {
  id: 'js-adv-mod-03',
  title: 'Módulo 3: Engenharia de Software e Patterns',
  description: 'Eleve seu nível técnico. Aprenda os princípios SOLID e os padrões de projeto mais usados no mercado para construir sistemas profissionais.',
  icon: '🏛️',
  lessons: [
    lesson0301,
    lesson0302,
    lesson0303,
    lesson0304,
    lesson0305,
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: 'js-adv-quiz-03-q1',
        question: 'Qual o objetivo do padrão Singleton?',
        options: [
          'Criar múltiplos objetos idênticos.',
          'Garantir que uma classe tenha apenas uma única instância em todo o aplicativo.',
          'Deletar variáveis globais.',
          'Melhorar o design do CSS.'
        ],
        correctAnswer: 1,
        explanation: 'O Singleton é vital para recursos compartilhados como configurações ou conexões de banco de dados.'
      },
      {
        id: 'js-adv-quiz-03-q2',
        question: 'O que o padrão Observer faz?',
        options: [
          'Observa o usuário pela webcam.',
          'Permite que um objeto avise automaticamente outros objetos sobre mudanças de estado, sem conhecê-los diretamente.',
          'Lê o LocalStorage em busca de erros.',
          'Cria classes filhas.'
        ],
        correctAnswer: 1,
        explanation: 'O Observer é a base da programação reativa e desacoplada.'
      }
    ]
  }
};
