import { Course } from '../../../types/academy';
import { module01 } from './module01';
import { module02 } from './module02';

/**
 * Curso Básico de Shell (Navegação Unix/Bash)
 * Serve como base fundamental antes de entrar em PowerShell
 * ou qualquer outra automação avançada.
 */
export const shellBasicoCourse: Course = {
  id: 'shell-basico-unix',
  title: 'Shell Básico: Introdução ao Terminal',
  description: 'O curso de "esquenta" perfeito. Perca o medo da tela preta e aprenda os comandos universais (Bash/Zsh) usados por desenvolvedores em servidores Linux e Mac no mundo todo.',
  icon: '🖳',
  color: '#28A745', // Verde Terminal clássico
  difficulty: 'beginner',
  estimatedHours: 5,
  tags: ['Terminal', 'Linux', 'Bash', 'Zsh', 'Iniciante'],
  modules: [
    module01,
    module02,
    // module03, — Manipulação de Arquivos (mkdir, touch, cp, mv, rm)
  ]
};
