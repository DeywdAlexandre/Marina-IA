import { CourseModule } from '../../../types/academy';
import { lesson0301 } from './lessons/lesson0301';
import { lesson0302 } from './lessons/lesson0302';
import { lesson0303 } from './lessons/lesson0303';

/**
 * Módulo 3 — Pipeline e Objetos
 * 
 * O coração do PowerShell: conectar comandos com |,
 * filtrar, ordenar, selecionar e formatar dados.
 */
export const module03: CourseModule = {
  id: 'ps-mod-03',
  title: 'Pipeline e Objetos',
  description: 'Domine o pipeline (|) — conecte comandos, filtre com Where-Object, ordene com Sort-Object e formate a saída como um profissional.',
  icon: '🔗',
  lessons: [
    lesson0301,
    lesson0302,
    lesson0303,
  ]
};
