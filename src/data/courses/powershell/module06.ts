import { CourseModule } from '../../../types/academy';
import { lesson0601 } from './lessons/lesson0601';
import { lesson0602 } from './lessons/lesson0602';
import { lesson0603 } from './lessons/lesson0603';

/**
 * Módulo 6 — Controle de Fluxo
 * 
 * Ensina ao aluno como criar scripts que tomam decisões e 
 * executam tarefas repetitivas automaticamente usando loops.
 */
export const module06: CourseModule = {
  id: 'ps-mod-06',
  title: 'Controle de Fluxo',
  description: 'Dê inteligência aos seus scripts! Aprenda a tomar decisões com If/Else e automatizar tarefas em massa usando Loops (Foreach e While).',
  icon: '🔀',
  lessons: [
    lesson0601,
    lesson0602,
    lesson0603,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'quiz-06-q1',
        question: 'Qual a forma correta de criar uma condição If testando se a idade é igual a 18?',
        options: [
          'if ($idade == 18)',
          'if ($idade = 18)',
          'if ($idade -eq 18)',
          'if ($idade equals 18)'
        ],
        correctAnswer: 2,
        explanation: 'O PowerShell utiliza operadores de comparação literais como -eq (Equals), -ne (Not Equals), -gt (Greater Than), etc.'
      },
      {
        id: 'quiz-06-q2',
        question: 'Qual a diferença entre -gt e -ge?',
        options: [
          'Nenhuma, são o mesmo operador com nomes diferentes',
          '-gt significa "Maior que" (Greater Than), -ge significa "Maior ou igual" (Greater/Equal)',
          '-gt é para textos, -ge é para números',
          '-gt significa "Menor que", -ge significa "Maior que"'
        ],
        correctAnswer: 1,
        explanation: 'Exemplo: 10 -gt 10 é Falso. Mas 10 -ge 10 é Verdadeiro.'
      },
      {
        id: 'quiz-06-q3',
        question: 'Para qual cenário o loop "foreach" é o mais indicado?',
        options: [
          'Para aguardar um processo iniciar',
          'Para gerar números aleatórios infinitamente',
          'Para percorrer todos os itens de uma lista/array conhecida um por um',
          'Para rodar um código que só deve executar se houver erro'
        ],
        correctAnswer: 2,
        explanation: 'O "foreach" é perfeitamente desenhado para consumir listas. Ele extrai os elementos da lista e roda o bloco de código para cada um deles.'
      },
      {
        id: 'quiz-06-q4',
        question: 'A estrutura "do { ... } until ($condicao)" se diferencia do "while" clássico porque:',
        options: [
          'Ela sempre executa o bloco de código pelo menos uma vez, já que a condição só é avaliada no final',
          'Ela não suporta a palavra-chave "break"',
          'Ela é muito mais lenta',
          'Ela só funciona no PowerShell 7'
        ],
        correctAnswer: 0,
        explanation: 'O "do" garante a execução inicial. Só no fechamento do bloco (until) o PowerShell se pergunta se deve repetir o ciclo ou parar.'
      },
      {
        id: 'quiz-06-q5',
        question: 'Você está rodando um loop infinito por acidente e o script não para. Qual a principal causa disso em loops "while"?',
        options: [
          'Você esqueceu de usar aspas simples na condição',
          'Você não alterou o valor da variável de controle dentro do loop, logo a condição nunca vira falsa para ele parar',
          'A variável ultrapassou o limite máximo de memória',
          'O loop while não foi feito para rodar mais de 10 vezes'
        ],
        correctAnswer: 1,
        explanation: 'Se a condição de quebra depende de um contador e você nunca incrementa ele, ou depende de um status e você nunca atualiza, o while fica preso (True) para sempre.'
      }
    ]
  }
};
