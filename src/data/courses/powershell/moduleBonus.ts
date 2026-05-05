import { CourseModule } from '../../../types/academy';
import { lesson1101 } from './lessons/lesson1101';
import { lesson1102 } from './lessons/lesson1102';
import { lesson1103 } from './lessons/lesson1103';

/**
 * Módulo Bônus — Limpeza e Otimização do PC
 * 
 * Recompensa os alunos com comandos e scripts práticos para o
 * dia a dia de todo usuário de computador (fechar processos pesados,
 * limpar temp/cache e o Script definitivo Otimizador).
 */
export const moduleBonus: CourseModule = {
  id: 'ps-mod-bonus',
  title: 'Bônus: Otimizador de PC Turbo',
  description: 'Pare de usar programas de limpeza duvidosos. Descubra como os técnicos de TI de verdade fazem faxina profunda no sistema e aceleram o Windows usando o terminal.',
  icon: '🚀',
  lessons: [
    lesson1101,
    lesson1102,
    lesson1103,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'quiz-bonus-q1',
        question: 'Você digitou Clear-RecycleBin e o PowerShell pediu para você confirmar a ação. Qual parâmetro força o PowerShell a esvaziar a lixeira agressivamente sem fazer perguntas?',
        options: [
          '-Quiet',
          '-Force',
          '-Silent',
          '-Kill'
        ],
        correctAnswer: 1,
        explanation: 'O -Force é o parâmetro universal do PowerShell para "Faça imediatamente e pare de me fazer perguntas de segurança".'
      },
      {
        id: 'quiz-bonus-q2',
        question: 'Onde o Windows esconde a maioria dos seus "lixos" temporários gerados por navegadores e programas instalados?',
        options: [
          'Na pasta System32',
          'Nos diretórios apontados pela variável $env:TEMP e na pasta C:\\Windows\\Temp',
          'Na área de trabalho',
          'Dentro da pasta Meus Documentos'
        ],
        correctAnswer: 1,
        explanation: 'Limpar essas duas pastas regularmente vai impedir que seu Disco C: lote misteriosamente com o passar dos meses.'
      },
      {
        id: 'quiz-bonus-q3',
        question: 'Qual é o grande perigo de rodar scripts de limpeza que apagam pastas de sistema (como C:\\Windows\\Temp) se você não usar o botão direito e "Executar como Administrador"?',
        options: [
          'O script vai queimar o seu processador',
          'O script não vai conseguir apagar a maioria dos arquivos vitais que estão travados pelas permissões de segurança do Windows (UAC), tornando a limpeza inútil e gerando erros "Access Denied".',
          'O script vai formatar o seu HD',
          'Não há perigo, vai funcionar igual'
        ],
        correctAnswer: 1,
        explanation: 'Tarefas profundas de sistema operacional exigem que o PowerShell rode no modo Elevado (Admin).'
      },
      {
        id: 'quiz-bonus-q4',
        question: 'Para o que serve o comando nativo ipconfig /flushdns?',
        options: [
          'Limpa a lixeira da rede e melhora drasticamente o FPS em jogos',
          'Limpa o seu histórico do Google Chrome',
          'Apaga a tabela local que traduz nomes de sites (ex: www.google.com) em endereços de IP. Quando um site se recusa a abrir mas funciona para outras pessoas, isso conserta o problema forçando o PC a perguntar o IP correto novamente na internet.',
          'Zera sua senha do roteador Wi-Fi'
        ],
        correctAnswer: 2,
        explanation: 'O FlushDNS é o truque de mágica número 1 dos técnicos de redes. O comando joga fora a caderneta de endereços corrompida do seu computador.'
      },
      {
        id: 'quiz-bonus-q5',
        question: 'Qual a finalidade de usar o método oculto [GC]::Collect() no nosso script definitivo de otimização?',
        options: [
          'Abrir a calculadora do Windows',
          'Forçar uma rotina agressiva no sistema que recolhe fragmentos inúteis largados na memória RAM (Garbage Collector), liberando imediatamente recursos físicos do computador sem precisar reiniciá-lo.',
          'Deletar vírus conhecidos (Get Cleaner)',
          'Nenhuma das respostas'
        ],
        correctAnswer: 1,
        explanation: 'Garbage Collection é uma faxina na memória RAM, não no HD. Ele caça variáveis "fantasmas" que o Windows não está mais usando e devolve esse espaço livre para você abrir programas.'
      }
    ]
  }
};
