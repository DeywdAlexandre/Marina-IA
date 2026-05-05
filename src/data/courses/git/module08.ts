import { CourseModule } from '../../../types/academy';
import { lesson0801 } from './lessons/lesson0801';
import { lesson0802 } from './lessons/lesson0802';
import { lesson0803 } from './lessons/lesson0803';

/**
 * Módulo 8 — Exposição ao Mundo (GitHub Pages) e Formatura
 * Encerramento do curso, deploy de sites estáticos e exame final.
 */
export const module08: CourseModule = {
  id: 'git-mod-08',
  title: 'Hospedagem e Formatura',
  description: 'Coloque seu site no ar gratuitamente usando o GitHub Pages e realize o grande exame final para conquistar o seu selo de Ninja do Versão.',
  icon: '🎓',
  lessons: [
    lesson0801,
    lesson0802,
    lesson0803,
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: 'git-quiz-08-q1',
        question: 'Qual o nome do arquivo que o GitHub Pages procura por padrão para ser a página inicial do seu site?',
        options: [
          'home.html',
          'main.js',
          'index.html',
          'github.html'
        ],
        correctAnswer: 2,
        explanation: 'O index.html é o padrão universal para a raiz de qualquer site.'
      },
      {
        id: 'git-quiz-08-q2',
        question: 'Onde ficam as configurações para ativar o GitHub Pages dentro do site do GitHub?',
        options: [
          'Na aba de Commits.',
          'Nas Settings (Configurações) do repositório, menu lateral "Pages".',
          'Na aba de Pull Requests.',
          'Nas configurações do seu perfil pessoal.'
        ],
        correctAnswer: 1,
        explanation: 'As configurações de hospedagem são específicas para cada repositório.'
      },
      {
        id: 'git-quiz-08-q3',
        question: 'O GitHub Pages pode hospedar um banco de dados SQL ou uma aplicação Java/Python complexa?',
        options: [
          'Sim, ele aceita qualquer tecnologia.',
          'Não, ele é destinado apenas a sites estáticos (HTML, CSS e JavaScript client-side).',
          'Sim, mas apenas se você pagar o plano Pro.',
          'Ele aceita apenas arquivos de imagem.'
        ],
        correctAnswer: 1,
        explanation: 'O Pages é simples e focado no front-end. Para back-end, você precisaria de outros serviços como Heroku ou Vercel.'
      },
      {
        id: 'git-quiz-08-q4',
        question: 'Qual o maior benefício de usar o fluxo de Git para atualizar o seu site no ar?',
        options: [
          'O site fica mais bonito.',
          'A atualização é automática e segura; basta dar um "git push" e o GitHub se encarrega de colocar a nova versão no ar em instantes.',
          'O site ganha mais seguidores.',
          'O Google indexa o site mais rápido.'
        ],
        correctAnswer: 1,
        explanation: 'Isso se chama Automação de Deploy. Menos trabalho manual, mais tempo para codar!'
      },
      {
        id: 'git-quiz-08-q5',
        question: 'Você se sente pronto para ser um Ninja do Versão?',
        options: [
          'Ainda tenho dúvidas.',
          'Com certeza! Entendi os conceitos de salvar, reverter, colaborar e publicar código usando as melhores práticas do mercado.',
          'Não gosto de Git.',
          'Vou usar o Pendrive.'
        ],
        correctAnswer: 1,
        explanation: 'Parabéns pela jornada! O Git é uma habilidade que você usará todos os dias da sua carreira.'
      }
    ]
  }
};
