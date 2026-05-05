// ============================================================
// Catálogo de Cursos — Marina Academy
// ============================================================
import { Course } from '../../types/academy';
import { powershellCourse } from './powershell';
import { shellBasicoCourse } from './shell-basico';

/**
 * Lista de todos os cursos disponíveis na Academy.
 * Novos cursos são adicionados aqui conforme criados.
 */
export const allCourses: Course[] = [
  shellBasicoCourse,
  powershellCourse,
];
