import { CourseModule } from '../../../types/academy';
import { lesson0601 } from './lessons/lesson0601';
import { lesson0602 } from './lessons/lesson0602';
import { lesson0603 } from './lessons/lesson0603';

/**
 * Módulo 6 — O Fluxo de Equipe (GitHub Open Source)
 * Explica o funcionamento do ecossistema colaborativo: Forks, Pull Requests e Gestão de Tarefas.
 */
export const module06: CourseModule = {
  id: 'git-mod-06',
  title: 'O Fluxo de Equipe',
  description: 'Aprenda como o mundo constrói software em conjunto. Domine os Forks, entenda os Pull Requests e organize seu trabalho usando as Issues e o Kanban do GitHub.',
  icon: '🤝',
  lessons: [
    lesson0601,
    lesson0602,
    lesson0603,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'git-quiz-06-q1',
        question: 'Você quer sugerir uma correção no código de um projeto famoso, mas não tem permissão de escrita lá. Qual o primeiro passo técnico a ser dado no site do GitHub?',
        options: [
          'Dar um Clone.',
          'Dar um Fork.',
          'Abrir uma Issue reclamando.',
          'Mandar um e-mail para o dono.'
        ],
        correctAnswer: 1,
        explanation: 'O Fork cria a sua cópia pessoal onde você tem liberdade total para testar e corrigir o que quiser.'
      },
      {
        id: 'git-quiz-06-q2',
        question: 'O que significa o termo "Code Review" dentro de um Pull Request?',
        options: [
          'É quando o código é deletado por ser ruim.',
          'É quando o sistema operacional revisa o código.',
          'É o processo onde outros desenvolvedores analisam o código proposto, comentam, sugerem melhorias e aprovam (ou não) a entrada no projeto principal.',
          'É a tradução automática das variáveis.'
        ],
        correctAnswer: 2,
        explanation: 'Code Review é o padrão ouro de qualidade da indústria de software.'
      },
      {
        id: 'git-quiz-06-q3',
        question: 'Por que o nome é "Pull Request" e não "Push Request"?',
        options: [
          'Porque Pull rima com Full.',
          'Porque você está pedindo para o mantenedor original "Puxar" (Pull) as alterações do seu repositório para o dele.',
          'Porque Push é um nome registrado.',
          'Não há um motivo real.'
        ],
        correctAnswer: 1,
        explanation: 'A perspectiva é sempre do repositório de destino: ele vai puxar a sua contribuição.'
      },
      {
        id: 'git-quiz-06-q4',
        question: 'Um usuário do seu aplicativo encontrou um erro no login. Onde ele deve registrar esse erro de forma organizada no GitHub?',
        options: [
          'No perfil do desenvolvedor.',
          'Em um comentário de código.',
          'Na aba de Issues.',
          'No README.md.'
        ],
        correctAnswer: 2,
        explanation: 'As Issues servem exatamente para catalogar bugs e pedidos de melhoria de forma rastreável.'
      },
      {
        id: 'git-quiz-06-q5',
        question: 'No fluxo Open Source, o que você deve fazer APÓS terminar sua melhoria na sua branch do Fork e dar o Push para o seu GitHub pessoal?',
        options: [
          'Nada, o dono original já recebeu automaticamente.',
          'Deletar a sua conta.',
          'Abrir um Pull Request no repositório original para que o dono veja sua contribuição.',
          'Fazer o clone do projeto de novo.'
        ],
        correctAnswer: 2,
        explanation: 'O PR é a entrega oficial da sua sugestão. Sem ele, o dono original nunca saberá que você fez algo legal.'
      }
    ]
  }
};
