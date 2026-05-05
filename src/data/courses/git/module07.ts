import { CourseModule } from '../../../types/academy';
import { lesson0701 } from './lessons/lesson0701';
import { lesson0702 } from './lessons/lesson0702';
import { lesson0703 } from './lessons/lesson0703';

/**
 * Módulo 7 — Ferramentas Ninjas do Terminal (Avançado)
 * Aborda comandos de elite para manipulação cirúrgica do histórico: Stash, Cherry-pick e Rebase.
 */
export const module07: CourseModule = {
  id: 'git-mod-07',
  title: 'Ferramentas Ninjas do Terminal',
  description: 'Suba para o nível Sênior. Aprenda a lidar com emergências usando o Stash, faça resgates cirúrgicos com o Cherry-pick e limpe seu histórico como um profissional usando o Rebase.',
  icon: '🥷',
  lessons: [
    lesson0701,
    lesson0702,
    lesson0703,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'git-quiz-07-q1',
        question: 'O chefe pediu um conserto urgente na Master mas você está com o código todo bagunçado na sua branch atual. Qual o comando para "esconder" sua bagunça e limpar a pasta instantaneamente?',
        options: [
          'git hide',
          'git delete -temp',
          'git stash',
          'git clean -all'
        ],
        correctAnswer: 2,
        explanation: 'O stash é o seu bolso mágico para emergências.'
      },
      {
        id: 'git-quiz-07-q2',
        question: 'Você quer trazer APENAS o commit "a1b2c3d" de uma branch experimental para a sua master, ignorando todo o resto da branch. Qual comando usar?',
        options: [
          'git merge a1b2c3d',
          'git copy a1b2c3d',
          'git cherry-pick a1b2c3d',
          'git pull a1b2c3d'
        ],
        correctAnswer: 2,
        explanation: 'Cherry-pick é a ferramenta de seleção cirúrgica de commits.'
      },
      {
        id: 'git-quiz-07-q3',
        question: 'Qual a principal "Regra de Ouro" do comando Git Rebase?',
        options: [
          'Nunca use Rebase às sextas-feiras.',
          'Nunca use Rebase em branches que já foram enviadas para o GitHub e compartilhadas com outras pessoas.',
          'Sempre use Rebase antes de dar um Push.',
          'O Rebase só deve ser usado por quem tem conta paga no GitHub.'
        ],
        correctAnswer: 1,
        explanation: 'Reescrever a história pública quebra o repositório de todos os seus colegas. Rebase é para uso local!'
      },
      {
        id: 'git-quiz-07-q4',
        question: 'Após usar o "git stash" para limpar sua pasta e fazer o conserto urgente, qual comando você usa para trazer seu trabalho de volta e deletar o item do stash?',
        options: [
          'git stash back',
          'git stash pop',
          'git stash apply',
          'git stash resue'
        ],
        correctAnswer: 1,
        explanation: 'O "pop" retira o item do bolso e o reaplica no seu código de uma vez só.'
      },
      {
        id: 'git-quiz-07-q5',
        question: 'O que o comando "git rebase master" faz quando rodado dentro de uma branch de funcionalidade?',
        options: [
          'Ele deleta a branch funcionalidade.',
          'Ele mescla a master dentro da funcionalidade criando um novo commit de merge.',
          'Ele "teletransporta" os commits da sua branch para que pareçam ter sido criados a partir do commit mais recente da master, deixando o histórico linear.',
          'Ele envia os commits para o servidor.'
        ],
        correctAnswer: 2,
        explanation: 'O rebase muda a "base" de nascimento da sua branch para o ponto mais atualizado do projeto.'
      }
    ]
  }
};
