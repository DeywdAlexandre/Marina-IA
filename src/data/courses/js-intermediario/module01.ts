import { CourseModule } from '../../../types/academy';
import { lesson0101 } from './lessons/lesson0101';
import { lesson0102 } from './lessons/lesson0102';
import { lesson0103 } from './lessons/lesson0103';
import { lesson0104 } from './lessons/lesson0104';
import { lesson0105 } from './lessons/lesson0105';

export const module01: CourseModule = {
  id: 'js-int-mod-01',
  title: 'Módulo 1: DOM Ninja — Manipulando a Web',
  description: 'Domine a árvore do DOM. Aprenda a selecionar, modificar, criar e navegar pelos elementos HTML usando o poder do JavaScript.',
  icon: '🌳',
  lessons: [
    lesson0101,
    lesson0102,
    lesson0103,
    lesson0104,
    lesson0105,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'js-int-quiz-01-q1',
        question: 'O que acontece se eu usar document.querySelector(".btn") em uma página com 5 botões dessa classe?',
        options: [
          'Ele seleciona os 5 botões.',
          'Ele seleciona apenas o primeiro botão encontrado.',
          'Dá um erro de sintaxe.',
          'Ele seleciona o último botão.'
        ],
        correctAnswer: 1,
        explanation: 'O querySelector sempre retorna o PRIMEIRO elemento. Para pegar todos, você deve usar o querySelectorAll.'
      },
      {
        id: 'js-int-quiz-01-q2',
        question: 'Qual a ordem correta para criar e exibir um novo parágrafo na tela?',
        options: [
          'appendChild -> createElement.',
          'createElement -> Configurar (texto/estilo) -> appendChild.',
          'Apenas innerHTML.',
          'document.write().'
        ],
        correctAnswer: 1,
        explanation: 'Primeiro criamos na memória, depois configuramos e por fim "penduramos" no DOM.'
      },
      {
        id: 'js-int-quiz-01-q3',
        question: 'Como alteramos a cor de fundo de uma div selecionada para azul?',
        options: [
          'div.background = "blue"',
          'div.style.backgroundColor = "blue"',
          'div.css.background = "blue"',
          'div.color = "blue"'
        ],
        correctAnswer: 1,
        explanation: 'Usamos a propriedade .style seguida do nome da propriedade CSS em camelCase.'
      }
    ]
  }
};
