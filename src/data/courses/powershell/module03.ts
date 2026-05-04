import { CourseModule } from '../../../types/academy';
import { lesson0301 } from './lessons/lesson0301';
import { lesson0302 } from './lessons/lesson0302';
import { lesson0303 } from './lessons/lesson0303';

/**
 * Módulo 3 — Pipeline e Objetos
 * 
 * O coração do PowerShell: conectar comandos com |,
 * filtrar, ordenar, selecionar e formatar dados.
 */
export const module03: CourseModule = {
  id: 'ps-mod-03',
  title: 'Pipeline e Objetos',
  description: 'Domine o pipeline (|) — conecte comandos, filtre com Where-Object, ordene com Sort-Object e formate a saída como um profissional.',
  icon: '🔗',
  lessons: [
    lesson0301,
    lesson0302,
    lesson0303,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'quiz-03-q1',
        question: 'O que o caractere | (pipe) faz no PowerShell?',
        options: [
          'Divide o comando em dois',
          'Envia a saída de um comando como entrada do próximo',
          'Cria uma variável',
          'Comenta uma linha'
        ],
        correctAnswer: 1,
        explanation: 'O pipe (|) conecta comandos — a saída do primeiro vira a entrada do segundo, como uma linha de montagem.'
      },
      {
        id: 'quiz-03-q2',
        question: 'Qual comando é usado para FILTRAR resultados no pipeline?',
        options: [
          'Sort-Object',
          'Select-Object',
          'Where-Object',
          'Format-Table'
        ],
        correctAnswer: 2,
        explanation: 'Where-Object filtra objetos com base em uma condição. Exemplo: Where-Object Status -eq \'Running\''
      },
      {
        id: 'quiz-03-q3',
        question: 'O que o $_ representa dentro de um Where-Object?',
        options: [
          'O nome do computador',
          'O objeto atual passando pelo pipeline',
          'A variável de erro',
          'O comando anterior'
        ],
        correctAnswer: 1,
        explanation: '$_ (ou $PSItem) representa o item atual no pipeline. Cada objeto passa por ele para ser avaliado.'
      },
      {
        id: 'quiz-03-q4',
        question: 'Qual operador significa "maior que" no PowerShell?',
        options: [
          '>',
          '-bigger',
          '-gt',
          '-more'
        ],
        correctAnswer: 2,
        explanation: '-gt (Greater Than) é o operador de "maior que". O PowerShell usa abreviações em inglês: -eq, -ne, -gt, -lt, etc.'
      },
      {
        id: 'quiz-03-q5',
        question: 'Por que o Format-Table deve ser sempre o ÚLTIMO no pipeline?',
        options: [
          'Porque é mais rápido assim',
          'Porque depois dele os dados viram texto e não podem mais ser processados',
          'Porque ele deleta os dados',
          'Não precisa ser o último'
        ],
        correctAnswer: 1,
        explanation: 'Format-* transforma objetos em texto para exibição. Depois disso, Where-Object e Sort-Object não funcionam mais.'
      }
    ]
  }
};

