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
  
  // ==========================================
  // Cursos Em Breve
  // ==========================================
  {
    id: 'git-basico',
    title: 'Git: Controle de Versão',
    description: 'Aprenda a salvar, versionar e compartilhar seu código com o GitHub.',
    icon: '🐙',
    color: '#F05032',
    difficulty: 'intermediate',
    estimatedHours: 8,
    modules: [],
    tags: ['Git', 'GitHub', 'Programação'],
    comingSoon: true,
  },
  {
    id: 'redes-terminal',
    title: 'Redes no Terminal',
    description: 'Diagnostique a internet e entenda como computadores se comunicam.',
    icon: '🌐',
    color: '#00A4EF',
    difficulty: 'intermediate',
    estimatedHours: 6,
    modules: [],
    tags: ['Redes', 'Ping', 'Curl', 'SSH'],
    comingSoon: true,
  },
  {
    id: 'linux-master',
    title: 'Linux Master: Permissões e Filtros',
    description: 'Aprofunde-se no Bash. Aprenda chmod, grep, pipes e automações.',
    icon: '🐧',
    color: '#FCC624',
    difficulty: 'advanced',
    estimatedHours: 12,
    modules: [],
    tags: ['Linux', 'Bash', 'SysAdmin'],
    comingSoon: true,
  },
  {
    id: 'docker-intro',
    title: 'Introdução ao Docker',
    description: 'Crie e rode servidores virtuais em segundos usando containers.',
    icon: '🐳',
    color: '#2496ED',
    difficulty: 'advanced',
    estimatedHours: 15,
    modules: [],
    tags: ['Docker', 'Containers', 'DevOps'],
    comingSoon: true,
  }
];
