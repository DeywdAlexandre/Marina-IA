import { CourseModule } from '../../../types/academy';
import { lesson0201 } from './lessons/lesson0201';
import { lesson0202 } from './lessons/lesson0202';
import { lesson0203 } from './lessons/lesson0203';

/**
 * Módulo 2 — O GPS do Computador
 * Ensina os fundamentos de navegação no terminal:
 * Print Working Directory, List, Change Directory.
 */
export const module02: CourseModule = {
  id: 'shell-mod-02',
  title: 'O GPS do Computador',
  description: 'Como o computador sabe onde você está se você não tem um mouse? Aprenda a trindade sagrada da navegação de terminais: pwd, ls e cd.',
  icon: '🧭',
  lessons: [
    lesson0201,
    lesson0202,
    lesson0203,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'shell-quiz-02-q1',
        question: 'O terminal não possui uma barra de navegação visual igual o Windows Explorer. Qual comando você deve usar sempre que se sentir perdido para descobrir em qual pasta você está no momento?',
        options: [
          'ls',
          'whereami',
          'find',
          'pwd'
        ],
        correctAnswer: 3,
        explanation: 'Print Working Directory (pwd) é o GPS absoluto. Sempre rode esse comando antes de apagar qualquer coisa para não cometer um desastre!'
      },
      {
        id: 'shell-quiz-02-q2',
        question: 'Qual é o comportamento do comando "ls" puro?',
        options: [
          'Ele lista absolutamente todos os arquivos, incluindo os ocultos do sistema.',
          'Ele lista apenas os nomes básicos dos itens visíveis dentro da pasta em que você se encontra.',
          'Ele abre uma pasta.',
          'Ele mostra o tamanho em Gigabytes da pasta.'
        ],
        correctAnswer: 1,
        explanation: 'O "ls" puro é uma lista simples. Para ver detalhes como tamanho, você precisa adicionar a flag -l. E para ver os ocultos, a flag -a.'
      },
      {
        id: 'shell-quiz-02-q3',
        question: 'O que identifica um "arquivo oculto" no mundo Linux/Unix?',
        options: [
          'O nome dele está em itálico.',
          'Ele tem uma senha.',
          'O nome dele começa obrigatoriamente com um ponto final (ex: .config).',
          'Ele fica dentro da pasta secreta /hidden.'
        ],
        correctAnswer: 2,
        explanation: 'É muito simples esconder algo no Linux/Mac: basta botar um ponto no início do nome. O comando "ls" puro irá ignorar ele imediatamente.'
      },
      {
        id: 'shell-quiz-02-q4',
        question: 'Você precisa acessar a pasta de Documentos, mas você sabe que está dentro de Documentos/Projetos/Fotos. Qual o comando mais rápido para "subir" dois níveis de volta para a pasta Documentos?',
        options: [
          'cd ~',
          'cd Documentos',
          'cd ../..',
          'cd --up'
        ],
        correctAnswer: 2,
        explanation: 'Se "cd .." sobe uma pasta, "cd ../.." sobe duas pastas de uma vez só! É a mágica de encurtar caminhos no terminal.'
      },
      {
        id: 'shell-quiz-02-q5',
        question: 'O que acontece quando você digita "cd ~" de qualquer lugar do computador?',
        options: [
          'Abre o navegador de internet',
          'Retorna instantaneamente para a sua pasta principal de Usuário (Home/Casa).',
          'Abre um arquivo com símbolo de Til',
          'Inicia a instalação do Linux'
        ],
        correctAnswer: 1,
        explanation: 'O Til (~) é o atalho universal do mundo Unix para a sua casa. É o botão de resgate que nunca falha.'
      }
    ]
  }
};
