import { Course } from '../../../types/academy';
import { module01 } from './module01';
import { module02 } from './module02';
import { module03 } from './module03';
import { module04 } from './module04';
import { module05 } from './module05';
import { module06 } from './module06';
import { module07 } from './module07';

export const jsAvancadoCourse: Course = {
  id: 'js-avancado-engenharia',
  title: 'JavaScript Avançado: Engenharia e Arquitetura',
  description: 'O nível mestre. Aprenda a construir softwares escaláveis, use padrões de projeto, domine a orientação a objetos e crie sistemas complexos como ERPs e CRMs.',
  icon: '💎',
  color: '#F7DF1E', // Amarelo JS Clássico
  category: 'Lógica & Programação',
  difficulty: 'advanced',
  estimatedHours: 40,
  tags: ['JavaScript', 'OOP', 'SOLID', 'Patterns', 'Software Architecture'],
  modules: [
    module01,
    module02,
    module03,
    module04,
    module05,
    module06,
    module07,
  ]
};
