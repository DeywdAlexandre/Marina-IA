import { CourseModule } from '../../../types/academy';
import { lesson0401 } from './lessons/lesson0401';
import { lesson0402 } from './lessons/lesson0402';
import { lesson0403 } from './lessons/lesson0403';

/**
 * Módulo 4 — Navegação e Arquivos
 * 
 * Ensina a manipular o sistema de arquivos: navegar entre pastas,
 * criar, copiar, mover, deletar itens e ler/escrever em arquivos.
 */
export const module04: CourseModule = {
  id: 'ps-mod-04',
  title: 'Navegação e Arquivos',
  description: 'Navegue pelas pastas como um ninja, manipule arquivos e diretórios, e aprenda a ler e escrever dados via terminal.',
  icon: '📂',
  lessons: [
    lesson0401,
    lesson0402,
    lesson0403,
  ],
  quiz: {
    passingScore: 70,
    questions: [
      {
        id: 'quiz-04-q1',
        question: 'Qual é o alias padrão no PowerShell equivalente ao "ls" do Linux?',
        options: [
          'Show-Files',
          'Get-Folder',
          'Get-ChildItem',
          'List-Directory'
        ],
        correctAnswer: 2,
        explanation: 'Get-ChildItem é o cmdlet por trás dos aliases "ls", "dir" e "gci". Ele lista os "filhos" (conteúdo) de um "item" (pasta).'
      },
      {
        id: 'quiz-04-q2',
        question: 'O que o comando "cd ~" faz?',
        options: [
          'Volta um nível de diretório',
          'Vai para a raiz do disco C:\\',
          'Leva você para o seu diretório de usuário (ex: C:\\Users\\Aluno)',
          'Entra no diretório anterior'
        ],
        correctAnswer: 2,
        explanation: 'O til (~) é o atalho universal que representa a "Home" do usuário logado.'
      },
      {
        id: 'quiz-04-q3',
        question: 'Qual a diferença entre New-Item e mkdir?',
        options: [
          'O mkdir cria arquivos e pastas, o New-Item só cria pastas',
          'O mkdir é um alias que chama o New-Item já configurado para criar Diretórios (pastas)',
          'Não há diferença, são o mesmo cmdlet original',
          'New-Item é só para Linux'
        ],
        correctAnswer: 1,
        explanation: 'mkdir é uma função wrapper que na verdade executa "New-Item -ItemType Directory" nos bastidores para facilitar a vida.'
      },
      {
        id: 'quiz-04-q4',
        question: 'Como renomear um arquivo chamado "foto.jpg" para "perfil.jpg"?',
        options: [
          'Change-Name "foto.jpg" "perfil.jpg"',
          'Rename-Item -Path "foto.jpg" -NewName "perfil.jpg"',
          'Move-Item "foto.jpg" > "perfil.jpg"',
          'Update-Item "foto.jpg" -To "perfil.jpg"'
        ],
        correctAnswer: 1,
        explanation: 'Rename-Item é o cmdlet específico para alterar o nome de itens sem movê-los de lugar.'
      },
      {
        id: 'quiz-04-q5',
        question: 'Qual é o efeito do comando: "Get-Process > processos.txt"?',
        options: [
          'Lê o arquivo processos.txt e joga no Get-Process',
          'Exibe um erro',
          'Adiciona a lista de processos no final do arquivo processos.txt',
          'Sobrescreve (ou cria) processos.txt com a lista atual de processos'
        ],
        correctAnswer: 3,
        explanation: 'O operador > é o atalho para Out-File. Ele sempre sobrescreve o arquivo. Para adicionar ao final sem apagar, usa-se >> (Out-File -Append).'
      }
    ]
  }
};
