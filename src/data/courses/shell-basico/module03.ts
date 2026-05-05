import { CourseModule } from '../../../types/academy';
import { lesson0301 } from './lessons/lesson0301';
import { lesson0302 } from './lessons/lesson0302';
import { lesson0303 } from './lessons/lesson0303';

/**
 * Módulo 3 — Manipulação de Arquivos
 * Fecha o curso básico ensinando o usuário a criar,
 * mover, copiar e excluir itens usando apenas o teclado.
 */
export const module03: CourseModule = {
  id: 'shell-mod-03',
  title: 'Manipulando Arquivos (Modo Deus)',
  description: 'Desapegue do mouse de vez. Aprenda a criar estruturas complexas de pastas em 1 segundo e entenda o perigo do comando "rm" antes que seja tarde demais.',
  icon: '🗂️',
  lessons: [
    lesson0301,
    lesson0302,
    lesson0303,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'shell-quiz-03-q1',
        question: 'Você digitou o comando "mkdir Minhas Fotos" (sem aspas) no terminal. O que acontece em seguida?',
        options: [
          'A pasta "Minhas Fotos" é criada corretamente com o espaço no meio.',
          'O terminal cria 2 pastas diferentes e separadas. Uma chamada "Minhas" e outra chamada "Fotos".',
          'O terminal dá um erro fatal.',
          'O computador desliga.'
        ],
        correctAnswer: 1,
        explanation: 'O terminal usa o caractere de Espaço para separar ordens. Para dizer que "Minhas Fotos" é um pacote único, você deve sempre envolver o nome entre aspas!'
      },
      {
        id: 'shell-quiz-03-q2',
        question: 'Qual é o comando clássico para criar rapidamente um ou mais arquivos em branco (ex: index.html) sem precisar abrir um editor de texto?',
        options: [
          'create-file',
          'touch',
          'new',
          'echo'
        ],
        correctAnswer: 1,
        explanation: 'O comando "touch" toca no disco e gera arquivos instantaneamente ocos (0 bytes), muito útil para criar o esqueleto de projetos.'
      },
      {
        id: 'shell-quiz-03-q3',
        question: 'Você quer mudar o nome do arquivo "imagem.jpg" para "perfil.jpg". Qual o comando adequado?',
        options: [
          'rename imagem.jpg perfil.jpg',
          'cp imagem.jpg perfil.jpg',
          'mv imagem.jpg perfil.jpg',
          'ls imagem.jpg perfil.jpg'
        ],
        correctAnswer: 2,
        explanation: 'No mundo Unix, a ação de renomear um arquivo é resolvida simplesmente "Movendo" (mv) o arquivo para a mesma pasta original com o nome da etiqueta trocado.'
      },
      {
        id: 'shell-quiz-03-q4',
        question: 'O que o perigoso comando "rm -rf /" faz (se rodado com permissão máxima no Linux)?',
        options: [
          'Abre a pasta raiz do sistema',
          'Inicia a formatação para instalar o Windows',
          'Força a remoção recursiva e cega de todo o disco rígido, apagando o próprio sistema operacional, seus dados e causando a morte do computador.',
          'Remove vírus do sistema'
        ],
        correctAnswer: 2,
        explanation: 'É a piada/meme mais famosa da TI. A junção de Recursivo (-r) e Force (-f) apontado para a raiz do sistema (/) é destruição em massa.'
      },
      {
        id: 'shell-quiz-03-q5',
        question: 'Onde fica a Lixeira do Terminal (CLI) para onde o comando "rm" envia os arquivos deletados?',
        options: [
          'Na pasta secreta /trash',
          'Fica na lixeira normal do Windows/Mac',
          'Fica escondida no comando "un-rm"',
          'Não existe Lixeira no comando rm. A destruição é permanente e imediata. Se apagar errado, perdeu.'
        ],
        correctAnswer: 3,
        explanation: 'A dura verdade do terminal é essa: ele assume que você sabe exatamente o que está fazendo. Nunca digite rm se não tiver 100% de certeza.'
      }
    ]
  }
};
