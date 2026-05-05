import { CourseModule } from '../../../types/academy';
import { lesson0701 } from './lessons/lesson0701';

export const module07: CourseModule = {
  id: 'js-adv-mod-07',
  title: 'Módulo Final: Maestria Técnica e Certificação',
  description: 'A jornada chega ao fim, mas sua carreira está apenas começando. Emita seu certificado de maestria e veja o que te espera no próximo nível.',
  icon: '🏆',
  lessons: [
    lesson0701,
  ]
};
