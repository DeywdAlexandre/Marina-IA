import { CourseModule } from '../../../types/academy';
import { lesson0301 } from './lessons/lesson0301';
import { lesson0302 } from './lessons/lesson0302';
import { lesson0303 } from './lessons/lesson0303';

/**
 * Módulo 3 — O Corretor de Besteiras (Reversão Avançada)
 * Focado em como desfazer erros em diferentes estágios:
 * Working Directory (restore), Staging (restore --staged) e Commit (reset/revert).
 */
export const module03: CourseModule = {
  id: 'git-mod-03',
  title: 'O Corretor de Besteiras',
  description: 'Errar é humano, desfazer é Git. Aprenda a usar os botões de pânico do terminal para recuperar arquivos, desfazer commits e salvar seu emprego após um erro catastrófico.',
  icon: '🛡️',
  lessons: [
    lesson0301,
    lesson0302,
    lesson0303,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'git-quiz-03-q1',
        question: 'Você fez uma bagunça no código do arquivo "app.js" e quer que ele volte a ser exatamente como estava no último commit. Qual o comando?',
        options: [
          'git clean app.js',
          'git restore app.js',
          'git checkout -f app.js',
          'git reset app.js'
        ],
        correctAnswer: 1,
        explanation: 'O git restore limpa o seu diretório de trabalho, descartando as mudanças não salvas.'
      },
      {
        id: 'git-quiz-03-q2',
        question: 'Você quer desfazer o ÚLTIMO commit realizado, mas quer que os arquivos continuem "verdes" (no palco) para você apenas ajustar a mensagem. Qual o comando?',
        options: [
          'git reset --hard HEAD~1',
          'git reset --mixed HEAD~1',
          'git reset --soft HEAD~1',
          'git revert HEAD'
        ],
        correctAnswer: 2,
        explanation: 'O --soft desfaz o commit mas preserva o Staging Area. É perfeito para pequenas correções de última hora.'
      },
      {
        id: 'git-quiz-03-q3',
        question: 'Qual a diferença fundamental entre "git reset" e "git revert"?',
        options: [
          'O reset é para arquivos e o revert é para pastas.',
          'O reset apaga ou move o histórico do passado. O revert cria um novo commit que desfaz as alterações, preservando a linha do tempo original.',
          'O revert é usado apenas no GitHub.',
          'São nomes diferentes para a mesma função.'
        ],
        correctAnswer: 1,
        explanation: 'Reset altera a linha do tempo (apaga o passado). Revert escreve um novo capítulo para consertar o erro (mantém o passado visível).'
      },
      {
        id: 'git-quiz-03-q4',
        question: 'Você deu "git add ." mas percebeu que adicionou um arquivo secreto. Como você "des-prepara" esse arquivo do palco sem apagar o que escreveu nele?',
        options: [
          'git restore --staged <arquivo>',
          'git rm <arquivo>',
          'git reset --hard',
          'git restore <arquivo>'
        ],
        correctAnswer: 0,
        explanation: 'O --staged diz ao Git: "Tire isso da fila de embarque (palco), mas não jogue fora as minhas alterações de código".'
      },
      {
        id: 'git-quiz-03-q5',
        question: 'Você rodou "git reset --hard HEAD~5" por engano. O que aconteceu?',
        options: [
          'O Git pediu sua confirmação.',
          'O Git apenas mudou o nome de 5 arquivos.',
          'Você perdeu permanentemente os últimos 5 commits e TODAS as modificações de código feitas neles.',
          'O Git apenas ocultou os arquivos.'
        ],
        correctAnswer: 2,
        explanation: 'O reset --hard é brutal. Ele descarta tudo e volta o disco rígido para o estado de 5 commits atrás. Muito cuidado!'
      }
    ]
  }
};
