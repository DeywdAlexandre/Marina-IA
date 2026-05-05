import { CourseModule } from '../../../types/academy';
import { lesson0501 } from './lessons/lesson0501';
import { lesson0502 } from './lessons/lesson0502';
import { lesson0503 } from './lessons/lesson0503';

/**
 * Módulo 5 — Variáveis e Tipos
 * 
 * Ensina como armazenar informações na memória do computador,
 * os tipos de dados básicos (String, Int, Bool) e estruturas
 * de dados complexas (Arrays e HashTables).
 */
export const module05: CourseModule = {
  id: 'ps-mod-05',
  title: 'Variáveis e Tipos',
  description: 'Aprenda a armazenar e manipular dados na memória. Domine strings, números, listas (Arrays) e dicionários (HashTables).',
  icon: '📦',
  lessons: [
    lesson0501,
    lesson0502,
    lesson0503,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'quiz-05-q1',
        question: 'No PowerShell, qual é o caractere obrigatório que indica o início do nome de uma variável?',
        options: [
          '@',
          '#',
          '$',
          'var'
        ],
        correctAnswer: 2,
        explanation: 'Todas as variáveis no PowerShell começam com o cifrão ($), ex: $nome, $idade.'
      },
      {
        id: 'quiz-05-q2',
        question: 'Como acessar o ÚLTIMO item de um array chamado $frutas?',
        options: [
          '$frutas[100]',
          '$frutas[-1]',
          '$frutas[0]',
          '$frutas.Last'
        ],
        correctAnswer: 1,
        explanation: 'O índice [-1] é um atalho prático do PowerShell para retornar sempre o último elemento de um array, não importando o seu tamanho.'
      },
      {
        id: 'quiz-05-q3',
        question: 'Dada a HashTable: $config = @{ Servidor="SRV01"; Porta=8080 }. Qual comando retorna "SRV01"?',
        options: [
          '$config[0]',
          '$config.Porta',
          '$config.Servidor',
          '$config[-1]'
        ],
        correctAnswer: 2,
        explanation: 'Em HashTables, acessamos os valores através de suas chaves nomeadas, usando a sintaxe de ponto (ex: $var.Chave).'
      },
      {
        id: 'quiz-05-q4',
        question: 'Qual a diferença crucial entre "Texto" e \'Texto\' no PowerShell?',
        options: [
          'Nenhuma, funcionam exatamente igual.',
          'Aspas duplas ("") permitem a expansão de variáveis dentro delas, aspas simples (\'\') não.',
          'Aspas simples são mais rápidas.',
          'Aspas duplas só podem conter números.'
        ],
        correctAnswer: 1,
        explanation: 'Aspas duplas interpolam (expandem) variáveis. Ex: "Olá $nome". Aspas simples tratam tudo como texto literal, ignorando variáveis dentro delas.'
      },
      {
        id: 'quiz-05-q5',
        question: 'O que são $true e $false no PowerShell?',
        options: [
          'Comandos para ligar e desligar o computador',
          'Nomes inválidos para variáveis',
          'Variáveis automáticas que representam valores Booleanos (Verdadeiro/Falso)',
          'Variáveis de texto comum'
        ],
        correctAnswer: 2,
        explanation: 'Booleanos nativos no PowerShell são representados pelas variáveis reservadas $true e $false.'
      }
    ]
  }
};
