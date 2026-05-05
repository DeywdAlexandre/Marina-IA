import { CourseModule } from '../../../types/academy';
import { lesson0901 } from './lessons/lesson0901';
import { lesson0902 } from './lessons/lesson0902';
import { lesson0903 } from './lessons/lesson0903';

/**
 * Módulo 9 — Automação Prática
 * 
 * Fecha a jornada básica unindo os conceitos (arquivos, loops, erros)
 * em scripts úteis como envio de JSON, planilhas CSV e 
 * monitoramento diário agendado no Windows.
 */
export const module09: CourseModule = {
  id: 'ps-mod-09',
  title: 'Automação Prática',
  description: 'A hora da verdade. Aprenda a lidar com planilhas (CSV), internet (JSON), agendar scripts para rodarem sozinhos e veja 2 exemplos práticos da vida real.',
  icon: '🤖',
  lessons: [
    lesson0901,
    lesson0902,
    lesson0903,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'quiz-09-q1',
        question: 'Qual a principal vantagem de usar o Import-Csv no PowerShell em vez de tentar ler o arquivo linha por linha como texto puro?',
        options: [
          'É mais rápido de digitar',
          'O Import-Csv tem suporte a cores no terminal',
          'Ele converte magicamente cada linha do CSV em um Objeto onde as colunas viram propriedades (ex: $pessoa.Nome), facilitando muito o uso em loops.',
          'Nenhuma, o PowerShell não suporta planilhas'
        ],
        correctAnswer: 2,
        explanation: 'Esta é a grande cartada do PowerShell: orientar tudo a objetos em vez de forçar você a recortar strings no meio do texto cru.'
      },
      {
        id: 'quiz-09-q2',
        question: 'Para o que servem os comandos ConvertFrom-Json e ConvertTo-Json?',
        options: [
          'Para compactar arquivos como ZIP',
          'Para traduzir do inglês para português',
          'Para converter textos JSON em Objetos do PowerShell (From) e vice-versa (To), permitindo comunicar-se facilmente com APIs e bancos de dados modernos.',
          'Para criar arquivos do Word'
        ],
        correctAnswer: 2,
        explanation: 'O JSON domina a comunicação web hoje. Com esses dois comandos, seu script fala a língua da internet nativamente.'
      },
      {
        id: 'quiz-09-q3',
        question: 'Ao usar o Agendador de Tarefas do Windows para rodar um script .ps1, qual aplicativo você deve colocar na opção "Programa/Script" da Ação?',
        options: [
          'O caminho completo para o arquivo .ps1',
          'notepad.exe',
          'powershell.exe',
          'cmd.exe'
        ],
        correctAnswer: 2,
        explanation: 'O executável é sempre powershell.exe. O seu script .ps1 vai no campo de "Argumentos" usando a flag -File.'
      },
      {
        id: 'quiz-09-q4',
        question: 'Você está criando uma tarefa agendada invisível para o usuário que está usando o PC no momento. Qual argumento é essencial?',
        options: [
          '-MakeInvisible',
          '-WindowStyle Hidden',
          '-Force',
          '-Secret'
        ],
        correctAnswer: 1,
        explanation: '-WindowStyle Hidden esconde a tela azul de console do PowerShell para que o script execute de forma transparente em background.'
      },
      {
        id: 'quiz-09-q5',
        question: 'Em um script de monitoramento, por que usar (Get-Date).AddDays(-30) e Where-Object é uma técnica popular?',
        options: [
          'Para alterar a hora do sistema para 1 mês atrás',
          'Para calcular quando é o próximo feriado',
          'É o padrão ouro para gerar uma data de corte no passado e filtrar (Where-Object) arquivos/logs que sejam mais velhos que essa data para exclusão automática.',
          'Para renovar senhas a cada 30 dias'
        ],
        correctAnswer: 2,
        explanation: 'Essa matemática de datas permite automações perpétuas de retenção de dados e limpeza de sistemas que nunca dão disco cheio.'
      }
    ]
  }
};
