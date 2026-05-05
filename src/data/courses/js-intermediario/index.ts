import { Course } from '../../../types/academy';
import { module01 } from './module01';

export const jsIntermediarioCourse: Course = {
  id: 'js-intermediario-apis',
  title: 'JavaScript Intermediário: Interatividade e APIs',
  description: 'Eleve seu nível. Aprenda a dominar o DOM, manipular eventos, consumir APIs reais e construir aplicações que persistem dados.',
  icon: '⚡',
  color: '#3178C6', // Azul (estilo TypeScript/Moderno)
  category: 'Lógica & Programação',
  difficulty: 'intermediate',
  estimatedHours: 20,
  tags: ['JavaScript', 'DOM', 'APIs', 'Async', 'Frontend'],
  modules: [
    module01,
  ]
};
