import { CourseModule } from '../../../types/academy';
import { lesson0401 } from './lessons/lesson0401';
import { lesson0402 } from './lessons/lesson0402';
import { lesson0403 } from './lessons/lesson0403';

/**
 * Módulo 4 — O Multiverso (Branches e Merges)
 * Explica o conceito de linhas do tempo paralelas, fusão de código e resolução de conflitos.
 */
export const module04: CourseModule = {
  id: 'git-mod-04',
  title: 'O Multiverso das Branches',
  description: 'Aprenda a trabalhar em várias frentes ao mesmo tempo sem quebrar o projeto principal. Domine as Branches e aprenda a resolver os temidos conflitos de Merge.',
  icon: '🌿',
  lessons: [
    lesson0401,
    lesson0402,
    lesson0403,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'git-quiz-04-q1',
        question: 'Você quer testar um novo menu no site sem afetar o que já está no ar. Qual o primeiro comando a se fazer?',
        options: [
          'git merge master',
          'git checkout master',
          'git checkout -b novo-menu',
          'git commit -m "novo menu"'
        ],
        correctAnswer: 2,
        explanation: 'Criar uma nova branch com "-b" garante que você tenha um ambiente isolado para o seu teste.'
      },
      {
        id: 'git-quiz-04-q2',
        question: 'O que acontece se você tentar deletar uma branch com "git branch -d" que ainda não foi mesclada (merged) na master?',
        options: [
          'O Git deleta sem perguntar nada.',
          'O Git avisa que você pode perder trabalho e sugere usar "-D" (maiúsculo) se você tiver certeza absoluta da destruição.',
          'O computador reinicia.',
          'A branch master é deletada no lugar.'
        ],
        correctAnswer: 1,
        explanation: 'O Git é um cavaleiro protetor. Ele impede que você delete trabalho não salvo por acidente, a menos que você force com o "D" maiúsculo.'
      },
      {
        id: 'git-quiz-04-q3',
        question: 'No meio de um arquivo com conflito, você vê a marca "======= ". O que ela representa?',
        options: [
          'O fim do arquivo.',
          'Uma linha de código que você deve escrever.',
          'A divisão entre o código que já estava na branch atual e o código que está tentando entrar via merge.',
          'Um erro de sintaxe do HTML.'
        ],
        correctAnswer: 2,
        explanation: 'O sinal de igual (=======) é o "muro" que separa as duas versões que estão brigando pelo mesmo espaço.'
      },
      {
        id: 'git-quiz-04-q4',
        question: 'Qual a ordem correta para resolver um conflito?',
        options: [
          'git merge -> git push -> git pull',
          'Editar arquivo -> git add -> git commit',
          'git reset -> git branch -> git checkout',
          'Apagar a pasta e clonar de novo'
        ],
        correctAnswer: 1,
        explanation: 'A tríade "Editar, Adicionar e Commitar" encerra oficialmente o estado de conflito no repositório.'
      },
      {
        id: 'git-quiz-04-q5',
        question: 'Qual comando mostra a lista de todas as branches locais do seu projeto?',
        options: [
          'git status',
          'git show branches',
          'git log --branches',
          'git branch'
        ],
        correctAnswer: 3,
        explanation: 'O comando "git branch" puro (sem nomes na frente) lista todos os ramos existentes na sua máquina.'
      }
    ]
  }
};
