import { Course } from '../../../types/academy';
import { module01 } from './module01';
import { module02 } from './module02';
import { module03 } from './module03';
import { module04 } from './module04';
import { module05 } from './module05';
import { module06 } from './module06';
import { module07 } from './module07';

/**
 * Curso de Git e GitHub (Controle de Versão)
 * Focado 100% no terminal, cobrindo de iniciante a avançado.
 */
export const gitCourse: Course = {
  id: 'git-avancado-terminal',
  title: 'Git e GitHub: O Ninja do Versão',
  description: 'Pare de fazer cópias das cópias. Domine a ferramenta mais importante do mercado de TI, resolva conflitos sem chorar e trabalhe em equipe usando repositórios na nuvem.',
  icon: '🐙',
  color: '#F05032', // Laranja clássico do Git
  difficulty: 'intermediate',
  estimatedHours: 10,
  tags: ['Git', 'GitHub', 'Controle de Versão', 'Open Source', 'Programação'],
  modules: [
    module01,
    module02,
    module03,
    module04,
    module05,
    module06,
    module07,
    // module08,
  ]
};
