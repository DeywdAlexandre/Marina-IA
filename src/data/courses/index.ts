// ============================================================
// Catálogo de Cursos — Marina Academy
// ============================================================
import { Course } from '../../types/academy';
import { powershellCourse } from './powershell';

/**
 * Lista de todos os cursos disponíveis na Academy.
 * Novos cursos são adicionados aqui conforme criados.
 */
export const allCourses: Course[] = [
  powershellCourse,
];
