import { CourseModule } from '../../../types/academy';
import { lesson0501 } from './lessons/lesson0501';
import { lesson0502 } from './lessons/lesson0502';
import { lesson0503 } from './lessons/lesson0503';

/**
 * Módulo 5 — Nas Nuvens (GitHub Básico)
 * Aborda a integração com servidores remotos: push, pull, fetch e clone.
 */
export const module05: CourseModule = {
  id: 'git-mod-05',
  title: 'Nas Nuvens com GitHub',
  description: 'Saia do isolamento. Aprenda a conectar seu código local com o GitHub, enviar suas conquistas (push), baixar novidades (pull) e clonar projetos de qualquer lugar do mundo.',
  icon: '☁️',
  lessons: [
    lesson0501,
    lesson0502,
    lesson0503,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'git-quiz-05-q1',
        question: 'Qual o comando usado para dar um "apelido" amigável (geralmente "origin") para o link do repositório no GitHub?',
        options: [
          'git link github <url>',
          'git remote add origin <url>',
          'git push --setup <url>',
          'git config remote.url'
        ],
        correctAnswer: 1,
        explanation: 'O comando "remote add" estabelece a conexão oficial entre o seu PC e o servidor na internet.'
      },
      {
        id: 'git-quiz-05-q2',
        question: 'Qual a principal diferença entre PUSH e PULL?',
        options: [
          'Push envia código para o GitHub; Pull traz código do GitHub para você.',
          'Push deleta código; Pull recupera código.',
          'Push é para branches; Pull é para commits.',
          'São nomes diferentes para a mesma coisa.'
        ],
        correctAnswer: 0,
        explanation: 'Push (Empurrar) e Pull (Puxar) são os dois sentidos da rodovia de dados entre sua máquina e a nuvem.'
      },
      {
        id: 'git-quiz-05-q3',
        question: 'Você quer apenas VER se existem commits novos no servidor, mas NÃO quer que eles se misturem com o seu código atual agora. Qual comando usar?',
        options: [
          'git pull --preview',
          'git log origin',
          'git fetch',
          'git status --online'
        ],
        correctAnswer: 2,
        explanation: 'O "git fetch" busca as novidades no banco de dados mas deixa seus arquivos intocados. É o jeito mais seguro de espiar o que os colegas fizeram.'
      },
      {
        id: 'git-quiz-05-q4',
        question: 'Ao rodar "git clone <url>", o que acontece na sua máquina?',
        options: [
          'O Git abre o navegador no site do GitHub.',
          'O Git baixa apenas o arquivo index.html do projeto.',
          'O Git cria uma pasta, inicializa o repositório, baixa todos os arquivos e todo o histórico de versões do projeto automaticamente.',
          'O Git pede sua senha e apaga o repositório local.'
        ],
        correctAnswer: 2,
        explanation: 'O clone é a forma mais poderosa e completa de baixar um projeto e já sair trabalhando nele.'
      },
      {
        id: 'git-quiz-05-q5',
        question: 'Por que usamos o parâmetro "-u origin master" no primeiro "git push" de um projeto?',
        options: [
          'Para o Git saber que o usuário (u) é o master.',
          'Para que o Git lembre dessa configuração e nos próximos pushes possamos digitar apenas "git push" de forma abreviada.',
          'Para deletar a branch antiga.',
          'Para formatar o HD.'
        ],
        correctAnswer: 1,
        explanation: 'O "-u" (upstream) cria um rastreamento permanente, poupando seus dedos de digitar o endereço do servidor toda vez.'
      }
    ]
  }
};
