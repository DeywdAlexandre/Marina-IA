import { Course } from '../../../types/academy';
import { module01 } from './module01';
import { module02 } from './module02';
import { module03 } from './module03';

/**
 * Curso Básico de Shell (Navegação Unix/Bash)
 * Serve como base fundamental antes de entrar em PowerShell
 * ou qualquer outra automação avançada.
 */
export const shellBasicoCourse: Course = {
  id: 'shell-basico',
  title: 'Shell Linux: O Início da Jornada',
  description: 'Aprenda a navegar e dominar o terminal Linux. Do ls ao rm -rf, entenda como falar com o sistema.',
  icon: '🐧',
  color: '#FCC624',
  category: 'Sistemas e Terminal',
  difficulty: 'beginner',
  estimatedHours: 5,
  tags: ['Terminal', 'Linux', 'Bash', 'Zsh', 'Iniciante'],
  modules: [
    module01,
    module02,
    module03,
  ]
};
