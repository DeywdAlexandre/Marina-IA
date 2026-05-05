// ============================================================
// Marina Academy — Sistema de Tipos
// ============================================================

/** Nível de dificuldade de um curso ou módulo */
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

/** Tipo de exercício */
export type ExerciseType = 'multiple_choice' | 'code_challenge';

/** Tipo de conteúdo da lição */
export type LessonType = 'theory' | 'exercise' | 'mixed';

// ------------------------------------------------------------
// Estrutura do Curso
// ------------------------------------------------------------

/** Curso completo (ex: PowerShell do Zero ao Avançado) */
export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  category: string; // Nova categoria para organização (ex: 'Sistemas', 'Programação')
  difficulty: Difficulty;
  estimatedHours: number;
  modules: CourseModule[];
  tags?: string[];
  comingSoon?: boolean;
}

/** Módulo dentro de um curso (ex: "Introdução ao PowerShell") */
export interface CourseModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
  /** Quiz de revisão ao final do módulo (aparece como última "aula") */
  quiz?: ModuleQuiz;
}

// ------------------------------------------------------------
// Quiz de Módulo
// ------------------------------------------------------------

/** Quiz de revisão ao final de cada módulo */
export interface ModuleQuiz {
  /** Perguntas do quiz */
  questions: ModuleQuizQuestion[];
  /** Nota mínima para aprovação (0-100). Padrão: 70 */
  passingScore?: number;
}

/** Pergunta do quiz de módulo */
export interface ModuleQuizQuestion {
  id: string;
  question: string;
  options: string[];
  /** Índice da resposta correta (0-based) */
  correctAnswer: number;
  /** Explicação exibida após a resposta */
  explanation?: string;
}

/** Lição individual dentro de um módulo */
export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  estimatedMinutes: number;
  content: LessonContent;
  exercises?: Exercise[];
  videoUrl?: string;
  videoTitle?: string;
  tips?: string[];
}

/** Conteúdo da lição em Markdown com exemplos de código */
export interface LessonContent {
  markdown: string;
  codeExamples?: CodeExample[];
}

/** Bloco de código de exemplo dentro da lição */
export interface CodeExample {
  title: string;
  language: string;
  code: string;
  output?: string;
  explanation?: string;
}

// ------------------------------------------------------------
// Exercícios
// ------------------------------------------------------------

/** Exercício de uma lição */
export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  /** Opções para múltipla escolha */
  options?: string[];
  /** Índice da resposta correta (0-based) para múltipla escolha */
  correctAnswer?: number;
  /** Explicação exibida após a resposta */
  explanation?: string;
  /** Descrição do desafio de código */
  codePrompt?: string;
  /** Saída esperada (referência para a IA avaliar) */
  expectedOutput?: string;
  /** Código inicial fornecido ao aluno */
  starterCode?: string;
  /** Dica opcional */
  hint?: string;
}

// ------------------------------------------------------------
// Progresso do Aluno
// ------------------------------------------------------------

/** Progresso geral do aluno em um curso */
export interface CourseProgress {
  courseId: string;
  completedLessons: string[];
  exerciseResults: Record<string, ExerciseResult>;
  /** Resultados dos quizzes de módulo (chave = moduleId) */
  quizResults?: Record<string, ModuleQuizResult>;
  startedAt: number;
  lastAccessedAt: number;
  currentModuleId?: string;
  currentLessonId?: string;
}

/** Resultado de um quiz de módulo */
export interface ModuleQuizResult {
  moduleId: string;
  score: number;      // 0-100
  passed: boolean;
  answers: number[];  // Índices das respostas do aluno
  timestamp: number;
}

/** Resultado de um exercício individual */
export interface ExerciseResult {
  exerciseId: string;
  passed: boolean;
  attempts: number;
  userAnswer?: string | number;
  aiEvaluation?: string;
  timestamp: number;
}

// ------------------------------------------------------------
// Chat do Tutor IA
// ------------------------------------------------------------

/** Mensagem no chat do tutor por lição */
export interface TutorMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

/** Histórico de chat do tutor por lição */
export interface TutorChatHistory {
  lessonId: string;
  messages: TutorMessage[];
}
