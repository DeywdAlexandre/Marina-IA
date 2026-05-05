import { CourseModule } from '../../../types/academy';
import { lesson0901 } from './lessons/lesson0901';
import { lesson0902 } from './lessons/lesson0902';
import { lesson0903 } from './lessons/lesson0903';

export const module09: CourseModule = {
  id: 'lp-mod-09',
  title: 'O Grande Algoritmo: Projeto Final',
  description: 'Integre todo o conhecimento adquirido. Construa um sistema real de gestão de dados, desde o planejamento até o ranking final.',
  icon: '🏆',
  lessons: [
    lesson0901,
    lesson0902,
    lesson0903,
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: 'lp-quiz-09-q1',
        question: 'Qual a ordem correta de desenvolvimento de um projeto?',
        options: [
          'Codar -> Testar -> Planejar.',
          'Planejar -> Codar -> Testar/Otimizar.',
          'Copiar -> Colar -> Rodar.',
          'Nenhuma das anteriores.'
        ],
        correctAnswer: 1,
        explanation: 'Planejamento evita retrabalho e garante uma lógica mais sólida.'
      },
      {
        id: 'lp-quiz-09-q2',
        question: 'O que o método .filter() e o .map() têm em comum no processamento de dados?',
        options: [
          'Ambos deletam o array original.',
          'Ambos retornam um novo array, permitindo o encadeamento de lógica.',
          'Ambos servem apenas para somar números.',
          'Ambos exigem o uso de loops "for" manuais.'
        ],
        correctAnswer: 1,
        explanation: 'O fato de retornarem novos arrays é o que permite criarmos "esteiras" de processamento de dados.'
      },
      {
        id: 'lp-quiz-09-q3',
        question: 'Qual o objetivo final da lógica de programação?',
        options: [
          'Aprender a digitar rápido.',
          'Decorar todos os comandos da linguagem.',
          'Desenvolver a capacidade de resolver problemas através de passos lógicos e eficientes.',
          'Apenas ganhar muito dinheiro.'
        ],
        correctAnswer: 2,
        explanation: 'A linguagem muda, mas a lógica é universal e eterna.'
      }
    ]
  }
};
