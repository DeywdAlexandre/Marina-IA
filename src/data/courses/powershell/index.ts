import { Course } from '../../../types/academy';
import { module01 } from './module01';
import { module02 } from './module02';
import { module03 } from './module03';
import { module04 } from './module04';
import { module05 } from './module05';
import { module06 } from './module06';
import { module07 } from './module07';
import { module08 } from './module08';
import { module09 } from './module09';
import { module10 } from './module10';

/**
 * Curso completo de PowerShell.
 * Os módulos são importados conforme vão sendo criados.
 * Módulos futuros serão adicionados aqui progressivamente.
 */
export const powershellCourse: Course = {
  id: 'powershell-zero-avancado',
  title: 'PowerShell: Do Zero ao Avançado',
  description: 'Domine o PowerShell do absoluto zero até automação avançada. Aprenda a controlar seu computador como um profissional, automatizar tarefas repetitivas e até otimizar a performance da sua máquina.',
  icon: '⚡',
  color: '#0078D4', // Azul Microsoft
  difficulty: 'beginner',
  estimatedHours: 40,
  tags: ['PowerShell', 'Automação', 'Windows', 'Scripting', 'Terminal'],
  modules: [
    module01,
    module02,
    module03,
    module04,
    module05,
    module06,
    module07,
    module08,
    module09,
    module10,
    // moduleBONUS — Limpeza e Otimização do PC
  ]
};
