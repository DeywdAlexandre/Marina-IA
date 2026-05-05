import { CourseModule } from '../../../types/academy';
import { lesson0601 } from './lessons/lesson0601';
import { lesson0602 } from './lessons/lesson0602';
import { lesson0603 } from './lessons/lesson0603';

export const module06: CourseModule = {
  id: 'js-int-mod-06',
  title: 'Módulo Bônus: Sobrevivência e Debugging',
  description: 'Aprenda a identificar e resolver os erros mais comuns que travam o código de programadores iniciantes e intermediários.',
  icon: '🛡️',
  lessons: [
    lesson0601,
    lesson0602,
    lesson0603,
  ]
};
