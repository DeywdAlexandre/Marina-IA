import { CourseModule } from '../../../types/academy';
import { lesson0201 } from './lessons/lesson0201';
import { lesson0202 } from './lessons/lesson0202';
import { lesson0203 } from './lessons/lesson0203';

/**
 * Módulo 2 — Comandos Essenciais
 * 
 * Ensina o aluno a ser independente: Get-Help, Get-Command,
 * Aliases e Get-Member — as ferramentas de autodescoberta.
 */
export const module02: CourseModule = {
  id: 'ps-mod-02',
  title: 'Comandos Essenciais',
  description: 'Domine as ferramentas de autodescoberta do PowerShell: Get-Help, Get-Command, Aliases e Get-Member.',
  icon: '🧭',
  lessons: [
    lesson0201,
    lesson0202,
    lesson0203,
  ]
};
