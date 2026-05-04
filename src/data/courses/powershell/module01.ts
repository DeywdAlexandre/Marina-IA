import { CourseModule } from '../../../types/academy';
import { lesson0101 } from './lessons/lesson0101';
import { lesson0102 } from './lessons/lesson0102';
import { lesson0103 } from './lessons/lesson0103';

/**
 * Módulo 1 — Introdução ao PowerShell
 * 
 * Três lições que levam o aluno do zero absoluto até
 * executar seus primeiros comandos com confiança.
 */
export const module01: CourseModule = {
  id: 'ps-mod-01',
  title: 'Introdução ao PowerShell',
  description: 'Entenda o que é o PowerShell, instale no seu computador e execute seus primeiros comandos. Partimos do zero!',
  icon: '🚀',
  lessons: [
    lesson0101,
    lesson0102,
    lesson0103,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'quiz-01-q1',
        question: 'O que diferencia o PowerShell do CMD (Prompt de Comando)?',
        options: [
          'São exatamente iguais',
          'O PowerShell trabalha com objetos em vez de texto puro',
          'O CMD é mais moderno',
          'O PowerShell só funciona no Linux'
        ],
        correctAnswer: 1,
        explanation: 'O PowerShell trabalha com objetos ricos em vez de simples texto, permitindo manipular dados de forma muito mais poderosa.'
      },
      {
        id: 'quiz-01-q2',
        question: 'Qual é a estrutura de nomes dos comandos do PowerShell?',
        options: [
          'Nome-Simples',
          'Verbo-Substantivo (ex: Get-Date)',
          'Substantivo-Verbo (ex: Date-Get)',
          'Não tem padrão definido'
        ],
        correctAnswer: 1,
        explanation: 'Todos os cmdlets seguem o padrão Verbo-Substantivo. Exemplos: Get-Date, Get-Process, Set-Location.'
      },
      {
        id: 'quiz-01-q3',
        question: 'Qual versão do PowerShell é recomendada atualmente?',
        options: [
          'PowerShell 1.0',
          'Windows PowerShell 5.1',
          'PowerShell 7+ (Core)',
          'PowerShell 3.0'
        ],
        correctAnswer: 2,
        explanation: 'O PowerShell 7+ (Core) é a versão moderna, multiplataforma e com melhor desempenho. O 5.1 ainda vem pré-instalado no Windows.'
      },
      {
        id: 'quiz-01-q4',
        question: 'Qual comando mostra a lista de processos em execução?',
        options: [
          'Show-Process',
          'List-Process',
          'Get-Process',
          'Find-Process'
        ],
        correctAnswer: 2,
        explanation: 'Get-Process lista todos os processos em execução. Segue o padrão Verbo-Substantivo: Get (obter) + Process (processo).'
      },
      {
        id: 'quiz-01-q5',
        question: 'O que o comando Test-Connection faz?',
        options: [
          'Testa a velocidade da internet',
          'Envia pacotes ICMP (ping) para testar conectividade',
          'Conecta em um servidor remoto',
          'Testa a conexão do banco de dados'
        ],
        correctAnswer: 1,
        explanation: 'Test-Connection é o equivalente ao "ping" — envia pacotes ICMP para verificar se um host está acessível na rede.'
      }
    ]
  }
};

