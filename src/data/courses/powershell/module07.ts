import { CourseModule } from '../../../types/academy';
import { lesson0701 } from './lessons/lesson0701';
import { lesson0702 } from './lessons/lesson0702';
import { lesson0703 } from './lessons/lesson0703';

/**
 * Módulo 7 — Funções e Scripts
 * 
 * Ensina ao aluno o conceito de empacotar o código para reutilização
 * (funções e parâmetros) e finalmente como salvar tudo em um arquivo .ps1.
 */
export const module07: CourseModule = {
  id: 'ps-mod-07',
  title: 'Funções e Scripts',
  description: 'Pare de digitar os mesmos comandos várias vezes. Aprenda a criar suas próprias funções inteligentes e a salvar seus códigos em arquivos de Script (.ps1).',
  icon: '🛠️',
  lessons: [
    lesson0701,
    lesson0702,
    lesson0703,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'quiz-07-q1',
        question: 'Qual é o papel da palavra "return" dentro de uma função?',
        options: [
          'Limpar a tela do terminal',
          'Cancelar o script inteiro em caso de erro',
          'Enviar um dado/objeto como resposta oficial da função para que possa ser salvo em variáveis no resto do script',
          'Imprimir uma mensagem colorida na tela do usuário'
        ],
        correctAnswer: 2,
        explanation: 'Enquanto o Write-Host só mostra texto visual para humanos, o "return" cospe dados reais (Objetos, strings, números) de volta para o sistema usar.'
      },
      {
        id: 'quiz-07-q2',
        question: 'Você acabou de escrever a função: function Minha-Funcao { Write-Host "Oi" } no console e apertou Enter. O que vai aparecer na tela?',
        options: [
          'Oi',
          'Nada, a função foi apenas salva na memória e aguarda ser chamada.',
          'Um erro',
          'O PowerShell pergunta se você quer salvar no disco.'
        ],
        correctAnswer: 1,
        explanation: 'Declarar (criar) uma função é diferente de chamar (executar) a função. Para ver o "Oi", você teria que digitar "Minha-Funcao" em uma nova linha.'
      },
      {
        id: 'quiz-07-q3',
        question: 'Qual é o motivo principal para a Microsoft bloquear a execução de scripts .ps1 no Windows por padrão?',
        options: [
          'Porque os scripts são muito pesados para o Windows.',
          'Para forçar o uso do antigo CMD (.bat).',
          'Para proteger usuários comuns de abrirem scripts maliciosos (vírus) que receberam por e-mail, exigindo que o usuário libere conscientemente o sistema.',
          'É um bug não resolvido.'
        ],
        correctAnswer: 2,
        explanation: 'A Execution Policy é uma trava de segurança intencional (Security by Default).'
      },
      {
        id: 'quiz-07-q4',
        question: 'Seu script se chama "backup.ps1" e está na pasta em que você se encontra. Como executá-lo no terminal do PowerShell?',
        options: [
          'backup.ps1',
          'run backup.ps1',
          'execute backup.ps1',
          '.\\backup.ps1'
        ],
        correctAnswer: 3,
        explanation: 'O PowerShell exige o caminho do arquivo para rodá-lo por motivo de segurança. O ".\\" significa "neste diretório atual".'
      },
      {
        id: 'quiz-07-q5',
        question: 'Na declaração "param([string]$Nome, [int]$Idade)", por que escrevemos "[int]" antes de $Idade?',
        options: [
          'Para que o nome da variável fique bonito',
          'É uma frescura de sintaxe opcional',
          'Para forçar (tipar) que o usuário da função só consiga enviar números para a Idade, gerando um erro amigável se ele enviar um texto, prevenindo bugs no seu cálculo interno.',
          'Para dizer que a idade é interna (int)'
        ],
        correctAnswer: 2,
        explanation: 'A tipagem (cast) de parâmetros blinda a sua função contra dados bizarros que os usuários possam enviar.'
      }
    ]
  }
};
