import { CourseModule } from '../../../types/academy';
import { lesson0101 } from './lessons/lesson0101';
import { lesson0102 } from './lessons/lesson0102';
import { lesson0103 } from './lessons/lesson0103';

/**
 * Módulo 1 — Perdendo o Medo da Tela Preta
 * Curso de Introdução ao Shell Básico
 */
export const module01: CourseModule = {
  id: 'shell-mod-01',
  title: 'Perdendo o Medo da Tela Preta',
  description: 'Entenda a diferença entre clicar com o mouse e digitar comandos. Descubra o que é um Terminal, o que é o Bash e rode o seu primeiro comando.',
  icon: '😱',
  lessons: [
    lesson0101,
    lesson0102,
    lesson0103,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'shell-quiz-01-q1',
        question: 'Você é contratado como Desenvolvedor e pedem para você acessar o servidor da empresa que roda Linux. Qual "idioma" (Shell) você espera encontrar lá?',
        options: [
          'PowerShell',
          'CMD (Command Prompt)',
          'Bash (ou Zsh)',
          'GUI'
        ],
        correctAnswer: 2,
        explanation: 'Servidores Linux no mundo inteiro rodam Bash nativamente. Se você aprender Bash, estará pronto para trabalhar com 99% da infraestrutura web mundial.'
      },
      {
        id: 'shell-quiz-01-q2',
        question: 'O que a sigla CLI significa?',
        options: [
          'Central Logic Interface',
          'Command Line Interface (Interface de Linha de Comando)',
          'Computer Language Interface',
          'Control Layer Integration'
        ],
        correctAnswer: 1,
        explanation: 'CLI é a forma técnica e "chique" de se referir à tela do Terminal (onde você dita os comandos).'
      },
      {
        id: 'shell-quiz-01-q3',
        question: 'Você abriu o Terminal e ele está com uma tela preta vazia, com um tracinho piscando, esperando você fazer alguma coisa. Qual das afirmações abaixo é verdadeira?',
        options: [
          'Ele está travado, eu devo reiniciar.',
          'Ele está baixando atualizações ocultas.',
          'Ele está inativo e pacífico. O Terminal nunca faz nada sozinho, ele apenas obedece aos comandos que você digitar e apertar Enter.',
          'Ele está apagando meus arquivos lentamente.'
        ],
        correctAnswer: 2,
        explanation: 'O maior medo de iniciantes é achar que o terminal é uma bomba-relógio. Na verdade, ele é uma ferramenta 100% passiva que só aguarda o seu comando.'
      },
      {
        id: 'shell-quiz-01-q4',
        question: 'Qual é a forma mais rápida de limpar o lixo visual da tela do terminal usando o teclado?',
        options: [
          'Apertando a tecla Delete 50 vezes',
          'Apertando Ctrl + L',
          'Digitando exit',
          'Desligando o monitor'
        ],
        correctAnswer: 1,
        explanation: 'O atalho Ctrl + L é idêntico ao comando "clear". Ele vai limpar a sujeira da tela e colocar o cursor lá no topo novinho em folha.'
      },
      {
        id: 'shell-quiz-01-q5',
        question: 'O que acontece quando você digita: echo "Eu vou aprender Terminal" e aperta Enter?',
        options: [
          'O computador começa a falar essa frase nas caixas de som',
          'O texto "Eu vou aprender Terminal" é impresso na tela do terminal na linha de baixo.',
          'Um arquivo de texto é criado',
          'Ele pesquisa isso no Google'
        ],
        correctAnswer: 1,
        explanation: 'A função primordial do comando echo é simplesmente pegar o que você escreveu e jogar de volta ("fazer o eco") no Console.'
      }
    ]
  }
};
