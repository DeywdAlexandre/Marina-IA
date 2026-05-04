import { CourseModule } from '../../../types/academy';
import { lesson0201 } from './lessons/lesson0201';
import { lesson0202 } from './lessons/lesson0202';
import { lesson0203 } from './lessons/lesson0203';

/**
 * Módulo 2 — Comandos Essenciais
 * 
 * Ensina o aluno a ser independente: Get-Help, Get-Command,
 * Aliases e Get-Member — as ferramentas de autodescoberta.
 */
export const module02: CourseModule = {
  id: 'ps-mod-02',
  title: 'Comandos Essenciais',
  description: 'Domine as ferramentas de autodescoberta do PowerShell: Get-Help, Get-Command, Aliases e Get-Member.',
  icon: '🧭',
  lessons: [
    lesson0201,
    lesson0202,
    lesson0203,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'quiz-02-q1',
        question: 'Qual é a diferença entre Get-Help e Get-Command?',
        options: [
          'Não há diferença, são iguais',
          'Get-Help explica um comando; Get-Command lista comandos disponíveis',
          'Get-Command explica um comando; Get-Help lista comandos',
          'Ambos servem apenas para listar aliases'
        ],
        correctAnswer: 1,
        explanation: 'Get-Help é o "manual" que explica como usar um comando. Get-Command é o "catálogo" que lista todos os comandos disponíveis.'
      },
      {
        id: 'quiz-02-q2',
        question: 'Como descobrir comandos relacionados à palavra "service" usando Get-Help?',
        options: [
          'Get-Help service',
          'Get-Help -Search service',
          'Get-Help *service*',
          'Find-Help service'
        ],
        correctAnswer: 2,
        explanation: 'Use curingas (*) com Get-Help: Get-Help *service* encontra todos os comandos que contêm "service" no nome.'
      },
      {
        id: 'quiz-02-q3',
        question: 'O que é um Alias no PowerShell?',
        options: [
          'Um tipo de variável',
          'Um comando para criar pastas',
          'Um atalho (apelido) para outro comando',
          'Um plugin externo'
        ],
        correctAnswer: 2,
        explanation: 'Aliases são atalhos. Por exemplo, "ls" é um alias para "Get-ChildItem", e "cd" é um alias para "Set-Location".'
      },
      {
        id: 'quiz-02-q4',
        question: 'Para que serve o Get-Member?',
        options: [
          'Para adicionar usuários ao sistema',
          'Para mostrar as propriedades e métodos de um objeto',
          'Para listar membros de um grupo',
          'Para deletar variáveis'
        ],
        correctAnswer: 1,
        explanation: 'Get-Member é o "raio-X" do PowerShell — revela todas as propriedades (dados) e métodos (ações) de qualquer objeto.'
      },
      {
        id: 'quiz-02-q5',
        question: 'Como acessar apenas o ano da data atual?',
        options: [
          'Get-Date -Year',
          '(Get-Date).Year',
          'Get-Date.Year',
          'Year(Get-Date)'
        ],
        correctAnswer: 1,
        explanation: 'Encapsule o comando em parênteses e use o ponto: (Get-Date).Year. Os parênteses forçam a execução primeiro.'
      }
    ]
  }
};

