import { CourseModule } from '../../../types/academy';
import { lesson1001 } from './lessons/lesson1001';
import { lesson1002 } from './lessons/lesson1002';
import { lesson1003 } from './lessons/lesson1003';

/**
 * Módulo 10 — Projeto Final
 * 
 * Coroa o curso através do desenvolvimento prático de um
 * script real de backup e auditoria do sistema, englobando
 * variáveis, condições, loops, funções, try/catch e exportação.
 */
export const module10: CourseModule = {
  id: 'ps-mod-10',
  title: 'Projeto Final e Formatura',
  description: 'A prova de fogo! Vamos construir do zero um robô que roda silenciosamente de madrugada, faz backup dos seus projetos, audita a saúde do Disco C: e gera um arquivo de log para você auditar de manhã.',
  icon: '🏆',
  lessons: [
    lesson1001,
    lesson1002,
    lesson1003,
  ],
  quiz: {
    passingScore: 80, // Aumentamos a nota de corte para a formatura!
    questions: [
      {
        id: 'quiz-10-q1',
        question: 'No processo de engenharia de software ensinado no planejamento, por que o uso de "pseudo-código" em comentários (#) é recomendado?',
        options: [
          'Porque o PowerShell não lê código sem comentários',
          'Para dividir a grande complexidade do projeto em blocos lógicos menores (esqueleto) antes de começar a se preocupar com a sintaxe exata dos comandos.',
          'Para deixar o arquivo .ps1 mais pesado',
          'Apenas para impressionar outros programadores'
        ],
        correctAnswer: 1,
        explanation: 'Fatiar o elefante. Com os comentários definindo a ordem, você apenas preenche os espaços em branco com as ferramentas que já conhece.'
      },
      {
        id: 'quiz-10-q2',
        question: 'O comando Get-CimInstance Win32_LogicalDisk serve primordialmente para:',
        options: [
          'Deletar partições do HD',
          'Criar pastas no disco',
          'Recuperar informações de hardware profundas do sistema, como o tamanho total e o espaço livre dos discos (HD/SSD).',
          'Instalar o Windows'
        ],
        correctAnswer: 2,
        explanation: 'O CIM (antigo WMI) é a principal porta de entrada do PowerShell para ler métricas vitais da placa mãe, memória, disco e CPU da máquina.'
      },
      {
        id: 'quiz-10-q3',
        question: 'Ao compactar uma pasta usando o PowerShell, o que o comando Compress-Archive faz?',
        options: [
          'Cria um arquivo .rar',
          'Zipa o conteúdo de uma origem para um arquivo .zip no destino',
          'Reduz o tamanho das fotos da pasta',
          'Abre um arquivo PDF'
        ],
        correctAnswer: 1,
        explanation: 'O Compress-Archive é o empacotador ZIP nativo do PowerShell desde a versão 5.0.'
      },
      {
        id: 'quiz-10-q4',
        question: 'Por que criar uma função dedicada como a Escrever-Log é uma prática excelente em scripts corporativos?',
        options: [
          'Porque evita que você tenha que copiar e colar as linhas de formatação de Timestamp e do comando Out-File dezenas de vezes durante o script, mantendo o código DRY (Não se repita).',
          'Porque sem ela o PowerShell não escreve arquivos',
          'Para dificultar a leitura do código',
          'Para impedir o uso do Write-Host'
        ],
        correctAnswer: 0,
        explanation: 'DRY - Don\'t Repeat Yourself. Se você faz algo mais de duas vezes, crie uma função.'
      },
      {
        id: 'quiz-10-q5',
        question: 'O que o uso de Blocos Try/Catch independentes garante no nosso Projeto Final?',
        options: [
          'Isolamento de Falhas: Se a rotina de auditar o disco estourar um erro fatal, o script captura o erro, escreve no log e continua o fluxo, permitindo que a rotina vital de Backup ainda seja executada logo abaixo.',
          'Garante que o script execute 10 vezes mais rápido',
          'Cria loops infinitos',
          'Desliga o computador em caso de falha'
        ],
        correctAnswer: 0,
        explanation: 'Essa é a verdadeira diferença entre um script amador e um profissional. O script nunca desiste na primeira falha (a não ser que você mande ele desistir).'
      }
    ]
  }
};
