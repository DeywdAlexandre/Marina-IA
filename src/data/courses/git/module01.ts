import { CourseModule } from '../../../types/academy';
import { lesson0101 } from './lessons/lesson0101';
import { lesson0102 } from './lessons/lesson0102';
import { lesson0103 } from './lessons/lesson0103';

/**
 * Módulo 1 — O Início de Tudo (Fundamentos)
 * Explica a diferença entre git e github, ensina a configurar a identidade global e o clico de vida básico: init, add e commit.
 */
export const module01: CourseModule = {
  id: 'git-mod-01',
  title: 'O Início de Tudo',
  description: 'Aprenda a diferença brutal entre Git e GitHub, diga ao terminal quem você é e tire sua primeira "foto" oficial usando a Máquina do Tempo.',
  icon: '⏱️',
  lessons: [
    lesson0101,
    lesson0102,
    lesson0103,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'git-quiz-01-q1',
        question: 'Onde o Git salva o código do seu projeto por padrão quando você não tem internet e apenas roda os comandos na sua máquina local?',
        options: [
          'No servidor do Google Cloud.',
          'No site do GitHub, automaticamente pelo Wi-Fi.',
          'Localmente no seu próprio disco rígido (na pasta oculta .git). O Git funciona perfeitamente offline.',
          'Em um pen-drive de backup oculto.'
        ],
        correctAnswer: 2,
        explanation: 'O Git é um software local e offline por natureza. Você só precisa de internet na hora de "empurrar" (Push) uma cópia do seu histórico para o GitHub.'
      },
      {
        id: 'git-quiz-01-q2',
        question: 'Você acabou de instalar o Git em um computador novo. Se você tentar dar um "commit" antes de rodar os comandos "git config user.name" e "git config user.email", o que acontecerá?',
        options: [
          'Ele assumirá o nome de usuário "Anonymous".',
          'Ele mandará um e-mail para você com a senha.',
          'O Git bloqueará o commit e retornará um erro dizendo "Please tell me who you are" (Por favor, me diga quem é você).',
          'Ele usa a sua conta do Facebook.'
        ],
        correctAnswer: 2,
        explanation: 'O Git não salva anonimato. A assinatura do autor é o pilar da auditoria de código.'
      },
      {
        id: 'git-quiz-01-q3',
        question: 'Sua pasta de projeto de faculdade precisa ter o controle de versão ativado para rastrear o histórico a partir de hoje. Qual comando "acorda" o poder do Git dentro de uma pasta comum?',
        options: [
          'git wake',
          'git repo',
          'git start',
          'git init'
        ],
        correctAnswer: 3,
        explanation: 'O "git init" planta a semente sagrada (a pastinha oculta .git) que começa a monitorar as atividades daquele diretório.'
      },
      {
        id: 'git-quiz-01-q4',
        question: 'Se o "commit" é o ato de bater a foto e salvar a história, para que serve o "git add"?',
        options: [
          'Para fazer o backup no Google Drive.',
          'Para jogar o arquivo na lixeira.',
          'O git add é a "Staging Area" (O Palco). Ele serve para você escolher QUAIS arquivos modificados você quer colocar na foto, permitindo que você ignore arquivos inacabados.',
          'O git add adiciona pessoas na sua equipe.'
        ],
        correctAnswer: 2,
        explanation: 'O conceito de Staging é brilhante: ele permite que você tenha 10 arquivos bagunçados na pasta, mas só empacote e grave 2 deles que já estão limpos.'
      },
      {
        id: 'git-quiz-01-q5',
        question: 'O comando git commit exige um parâmetro fundamental para funcionar (e se você esquecer, ele abrirá um editor de texto assustador chamado Vim na sua tela). Que parâmetro ninja é esse?',
        options: [
          '-a (all)',
          '-f (force)',
          '-m (message)',
          '-s (save)'
        ],
        correctAnswer: 2,
        explanation: 'O -m permite que você digite a mensagem de log (a legenda da foto) diretamente na mesma linha do terminal, agilizando enormemente o trabalho do dia a dia.'
      }
    ]
  }
};
