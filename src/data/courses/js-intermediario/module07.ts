import { CourseModule } from '../../../types/academy';
import { lesson0701 } from './lessons/lesson0701';
import { lesson07Video } from './lessons/lesson07_video';

export const module07: CourseModule = {
  id: 'js-int-mod-07',
  title: 'Módulo Final: Conclusão e Certificação',
  description: 'Celebre sua jornada! Revise o que aprendeu, emita seu certificado simbólico e prepare-se para o próximo nível.',
  icon: '🎓',
  lessons: [
    lesson0701,
    lesson07Video,
  ]
};
