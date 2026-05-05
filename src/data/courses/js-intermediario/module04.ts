import { CourseModule } from '../../../types/academy';
import { lesson0401 } from './lessons/lesson0401';
import { lesson0402 } from './lessons/lesson0402';
import { lesson0403 } from './lessons/lesson0403';
import { lesson0404 } from './lessons/lesson0404';

export const module04: CourseModule = {
  id: 'js-int-mod-04',
  title: 'Módulo 4: Persistência Local',
  description: 'Dê memória ao seu código. Aprenda a salvar preferências, estados e listas completas de dados no navegador do usuário.',
  icon: '💾',
  lessons: [
    lesson0401,
    lesson0402,
    lesson0403,
    lesson0404,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'js-int-quiz-04-q1',
        question: 'Onde os dados do LocalStorage ficam armazenados?',
        options: [
          'No servidor da nuvem.',
          'No banco de dados SQL do site.',
          'Localmente no navegador do usuário.',
          'Em um arquivo de texto no Desktop.'
        ],
        correctAnswer: 2,
        explanation: 'O LocalStorage é um armazenamento local exclusivo do navegador.'
      },
      {
        id: 'js-int-quiz-04-q2',
        question: 'O que acontece se você tentar salvar uma Array diretamente no LocalStorage sem usar JSON.stringify?',
        options: [
          'O navegador salva perfeitamente.',
          'Dá um erro fatal e o site para.',
          'Ele salva como uma string (ex: "item1,item2"), perdendo as funcionalidades de array.',
          'Os dados são deletados.'
        ],
        correctAnswer: 2,
        explanation: 'O LocalStorage força a conversão para String, o que pode "estragar" dados complexos se não usarmos JSON.'
      },
      {
        id: 'js-int-quiz-04-q3',
        question: 'Como você apaga APENAS uma chave específica do LocalStorage?',
        options: [
          'localStorage.clear()',
          'localStorage.removeItem("minhaChave")',
          'localStorage.delete("minhaChave")',
          'document.remove("minhaChave")'
        ],
        correctAnswer: 1,
        explanation: 'O removeItem deleta apenas o que você pedir, preservando o restante.'
      }
    ]
  }
};
