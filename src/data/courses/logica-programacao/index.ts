import { Course } from '../../../types/academy';
import { module01 } from './module01';
import { module02 } from './module02';
import { module03 } from './module03';
import { module04 } from './module04';
import { module05 } from './module05';
import { module06 } from './module06';

export const logicaProgramacaoCourse: Course = {
  id: 'logica-programacao-js',
  title: 'Lógica de Programação: O Algoritmo Mestre',
  description: 'Aprenda a pensar como um programador. Domine variáveis, laços de repetição, funções e algoritmos usando JavaScript como base.',
  icon: '🧠',
  color: '#F7DF1E', // Amarelo JavaScript
  category: 'Lógica & Programação',
  difficulty: 'beginner',
  estimatedHours: 15,
  tags: ['Lógica', 'Programação', 'JavaScript', 'Iniciante', 'Algoritmos'],
  modules: [
    module01,
    module02,
    module03,
    module04,
    module05,
    module06,
  ]
};
