import { CourseModule } from '../../../types/academy';
import { lesson0101 } from './lessons/lesson0101';
import { lesson0102 } from './lessons/lesson0102';
import { lesson0103 } from './lessons/lesson0103';

/**
 * Módulo 1 — Introdução ao PowerShell
 * 
 * Três lições que levam o aluno do zero absoluto até
 * executar seus primeiros comandos com confiança.
 */
export const module01: CourseModule = {
  id: 'ps-mod-01',
  title: 'Introdução ao PowerShell',
  description: 'Entenda o que é o PowerShell, instale no seu computador e execute seus primeiros comandos. Partimos do zero!',
  icon: '🚀',
  lessons: [
    lesson0101,
    lesson0102,
    lesson0103,
  ]
};
