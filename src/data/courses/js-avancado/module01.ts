import { CourseModule } from '../../../types/academy';
import { lesson0101 } from './lessons/lesson0101';
import { lesson0102 } from './lessons/lesson0102';
import { lesson0103 } from './lessons/lesson0103';
import { lesson0104 } from './lessons/lesson0104';
import { lesson0105 } from './lessons/lesson0105';
import { lesson0106 } from './lessons/lesson0106';

export const module01: CourseModule = {
  id: 'js-adv-mod-01',
  title: 'Módulo 1: JavaScript Moderno ES6+',
  description: 'Domine as ferramentas de elite do JavaScript moderno para escrever códigos limpos, seguros e de altíssima performance.',
  icon: '⚡',
  lessons: [
    lesson0101,
    lesson0102,
    lesson0103,
    lesson0104,
    lesson0105,
    lesson0106,
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: 'js-adv-quiz-01-q1',
        question: 'Qual operador usaríamos para criar um clone de um objeto garantindo imutabilidade?',
        options: [
          'Operator assign (=)',
          'Spread operator (...)',
          'Method .push()',
          'JSON.parse()'
        ],
        correctAnswer: 1,
        explanation: 'O Spread cria uma nova cópia, evitando que mudanças na cópia alterem o original.'
      },
      {
        id: 'js-adv-quiz-01-q2',
        question: 'Qual a principal utilidade do Proxy no desenvolvimento avançado?',
        options: [
          'Substituir o uso de Funções.',
          'Interceptar e customizar operações fundamentais em objetos (como leitura e escrita).',
          'Melhorar a conexão com a internet.',
          'Criptografar o código fonte.'
        ],
        correctAnswer: 1,
        explanation: 'Proxies são ferramentas de meta-programação essenciais para sistemas reativos e validações automáticas.'
      }
    ]
  }
};
