import { CourseModule } from '../../../types/academy';
import { lesson0601 } from './lessons/lesson0601';
import { lesson0602 } from './lessons/lesson0602';
import { lesson0603 } from './lessons/lesson0603';
import { lesson0604 } from './lessons/lesson0604';
import { lesson0605 } from './lessons/lesson0605';
import { lesson06Video } from './lessons/lesson06_video';

export const module06: CourseModule = {
  id: 'js-adv-mod-06',
  title: 'Módulo 6: Projeto Marina Business CRM',
  description: 'Desenvolva um sistema de gestão de clientes completo. Aprenda arquitetura de estados, filtros complexos, dashboards de performance e backup de dados.',
  icon: '📊',
  lessons: [
    lesson0601,
    lesson0602,
    lesson0603,
    lesson0604,
    lesson0605,
    lesson06Video,
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: 'js-adv-quiz-06-q1',
        question: 'O que o método .reduce() faz em uma lista de clientes faturados?',
        options: [
          'Deleta os clientes.',
          'Soma ou combina os valores de todos os clientes em um único resultado (ex: faturamento total).',
          'Muda a cor da tabela.',
          'Cria um backup em JSON.'
        ],
        correctAnswer: 1,
        explanation: 'Reduce é a ferramenta funcional mais poderosa para agregar dados.'
      },
      {
        id: 'js-adv-quiz-06-q2',
        question: 'Para que serve a técnica de criar um Blob e uma URL temporária?',
        options: [
          'Para carregar imagens de satélite.',
          'Para permitir que o JavaScript gere e "baixe" arquivos dinâmicos (como JSON ou CSV) para o computador do usuário.',
          'Para acelerar a internet.',
          'Para fechar o sistema.'
        ],
        correctAnswer: 1,
        explanation: 'É a forma padrão de exportar dados no navegador sem depender de um servidor.'
      }
    ]
  }
};
