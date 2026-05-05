import { CourseModule } from '../../../types/academy';
import { lesson0801 } from './lessons/lesson0801';
import { lesson0802 } from './lessons/lesson0802';

/**
 * Módulo 8 — Tratamento de Erros
 * 
 * Ensina a lidar com imprevistos usando Try/Catch, 
 * ErrorAction e previne desastres com -WhatIf.
 */
export const module08: CourseModule = {
  id: 'ps-mod-08',
  title: 'Tratamento de Erros e Segurança',
  description: 'Scripts profissionais não quebram, eles lidam com problemas graciosamente. Aprenda a usar Try/Catch e o salva-vidas -WhatIf.',
  icon: '🛡️',
  lessons: [
    lesson0801,
    lesson0802,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'quiz-08-q1',
        question: 'Você construiu um Try/Catch, mas ao testar simulando um erro leve, o PowerShell imprimiu o erro em vermelho e ignorou seu bloco Catch. Qual foi a causa mais provável?',
        options: [
          'Você digitou Catch com "C" maiúsculo',
          'O PowerShell ignorou o Catch porque o erro não foi considerado "Fatal" (Terminating Error). Faltou usar o -ErrorAction Stop no comando.',
          'O bloco Try/Catch só funciona no Linux',
          'O Catch só funciona se houver um banco de dados conectado'
        ],
        correctAnswer: 1,
        explanation: 'Try/Catch nativamente só intercepta Erros Fatais. Erros comuns precisam ser "promovidos" a fatais usando -ErrorAction Stop.'
      },
      {
        id: 'quiz-08-q2',
        question: 'O que o comando "finally" garante?',
        options: [
          'Que o computador será desligado no final do script',
          'A execução daquele bloco de código SEMPRE, ocorrendo falhas no script ou não.',
          'Que a tela de erro seja limpa automaticamente',
          'Nenhuma das anteriores'
        ],
        correctAnswer: 1,
        explanation: 'Finally é a certeza absoluta de execução, ideal para limpezas de memória, deleção de arquivos temporários e fechamento de conexões, não importa como o script terminou.'
      },
      {
        id: 'quiz-08-q3',
        question: 'O que a variável automática $_ representa dentro do bloco "catch"?',
        options: [
          'O usuário atual do Windows',
          'Um espaço vazio na memória',
          'O número de vezes que o loop falhou',
          'O objeto do Erro exato capturado, permitindo que você extraia a mensagem técnica do que falhou (ex: $_.Exception.Message).'
        ],
        correctAnswer: 3,
        explanation: 'O $_ (ou $PSItem) ganha o valor do Objeto de Erro no momento em que você cai dentro do bloco Catch.'
      },
      {
        id: 'quiz-08-q4',
        question: 'Você usou Remove-Item *.log -WhatIf. O que acontecerá?',
        options: [
          'Todos os arquivos .log serão movidos para a lixeira',
          'Todos os arquivos .log serão deletados permanentemente',
          'O PowerShell não deletará NADA, apenas imprimirá na tela os nomes dos arquivos que seriam deletados.',
          'O script ficará pausado até você apertar Y'
        ],
        correctAnswer: 2,
        explanation: 'WhatIf (E se) é apenas uma simulação visual. Nenhum dado real é alterado.'
      },
      {
        id: 'quiz-08-q5',
        question: 'Qual a diferença entre -WhatIf e -Confirm?',
        options: [
          'Nenhuma, fazem a mesma coisa',
          '-WhatIf é para arquivos, -Confirm é para pastas',
          '-WhatIf não faz nada além de mostrar o que aconteceria. O -Confirm pausa a execução real para pedir sua autorização manual (Y/N) antes de prosseguir com a alteração de cada item.',
          '-Confirm só funciona no PowerShell antigo'
        ],
        correctAnswer: 2,
        explanation: 'O -Confirm te dá o poder de escolher "Sim para este, não para aquele" enquanto a execução está acontecendo.'
      }
    ]
  }
};
