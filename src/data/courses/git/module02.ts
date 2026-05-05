import { CourseModule } from '../../../types/academy';
import { lesson0201 } from './lessons/lesson0201';
import { lesson0202 } from './lessons/lesson0202';
import { lesson0203 } from './lessons/lesson0203';

/**
 * Módulo 2 — O Analista do Tempo
 * Aborda leitura do repositório (status, log, diff, show e .gitignore)
 */
export const module02: CourseModule = {
  id: 'git-mod-02',
  title: 'O Analista do Tempo',
  description: 'Pare de ficar cego. Aprenda a ler os registros da sua máquina do tempo (log/status), analisar exatamente qual vírgula foi alterada (diff) e aprenda a não vazar senhas usando o .gitignore.',
  icon: '🔍',
  lessons: [
    lesson0201,
    lesson0202,
    lesson0203,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'git-quiz-02-q1',
        question: 'Você acabou de chegar do almoço e não lembra se fez alterações na pasta de código. Qual o comando mais seguro e rápido para o Git te dar um panorama da situação atual?',
        options: [
          'git show',
          'git log',
          'git diff',
          'git status'
        ],
        correctAnswer: 3,
        explanation: 'O "git status" é a sua bússola diária. Ele lista imediatamente quais arquivos sofreram modificações e em que estágio eles estão (Untracked vs Staged).'
      },
      {
        id: 'git-quiz-02-q2',
        question: 'O chefe perguntou: "Quem foi que apagou a linha 45 do index.html no mês passado?". Como você abre a foto de um commit velho para ver o que exatamente foi modificado lá dentro?',
        options: [
          'Usa o git log para descobrir o Hash e depois roda git show <Hash>.',
          'Usa o git diff <mes_passado>.',
          'Não é possível ver alterações feitas em commits passados.',
          'Usa o git status --history.'
        ],
        correctAnswer: 0,
        explanation: 'A combinação "log + show" é a ferramenta de auditoria mais poderosa do Git. O Log acha a placa do carro, o Show abre a caçamba.'
      },
      {
        id: 'git-quiz-02-q3',
        question: 'No meio de um "git diff", o que as linhas que começam com o sinal de mais (+) e são da cor verde indicam?',
        options: [
          'Que houve um erro de sintaxe verde.',
          'Que o código está pronto para ir para produção.',
          'Que essas linhas são o conteúdo que foi apagado do arquivo.',
          'Que essas linhas são injeções de código NOVO que você acabou de escrever e não existiam no commit anterior.'
        ],
        correctAnswer: 3,
        explanation: 'Exatamente! O diff faz a matemática literal da subtração (-) das coisas velhas e da adição (+) das coisas novas que você programou.'
      },
      {
        id: 'git-quiz-02-q4',
        question: 'Você colocou o nome da pasta "fotos_pessoais/" dentro do arquivo .gitignore, mas o Git continuou rastreando as fotos! Por que isso ocorreu?',
        options: [
          'Porque fotos não podem ser ignoradas, apenas textos.',
          'Porque você deve ter commitado (salvado) as fotos antes de criar o .gitignore. O .gitignore não apaga fotos do passado, ele só ignora coisas não monitoradas.',
          'Porque o .gitignore falhou.',
          'Porque precisa colocar .jpg no final.'
        ],
        correctAnswer: 1,
        explanation: 'Esta é a falha mais comum! O Git só ignora aquilo que ele ainda não estava "assistindo". Se os arquivos já faziam parte da história, a proteção do .gitignore chegou tarde demais.'
      },
      {
        id: 'git-quiz-02-q5',
        question: 'Qual a vantagem de usar o comando "git log --oneline" ao invés do "git log" comum?',
        options: [
          'Ele é mais demorado de escrever.',
          'Ele oculta o nome do autor, economizando tinta na impressão.',
          'Ele enxuga a visualização, mostrando apenas o comecinho do Hash e o título da mensagem em uma única linha, facilitando a visualização de históricos gigantescos com milhares de commits.',
          'Ele só mostra commits que foram feitos online.'
        ],
        correctAnswer: 2,
        explanation: 'O log comum vomita um bloco de texto de 5 linhas por commit. O "--oneline" é vital para navegar visualmente em projetos com meses ou anos de duração.'
      }
    ]
  }
};
