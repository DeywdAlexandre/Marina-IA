import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ChevronDown,
  CheckCircle2,
  Circle,
  PlayCircle,
  Clock,
  BookOpen,
  Trophy,
  Lock,
  ScrollText
} from 'lucide-react';
import { Course, CourseModule, CourseProgress, Lesson, ModuleQuizResult } from '../../types/academy';
import LessonView from './LessonView';
import ModuleQuizView from './ModuleQuizView';

interface CourseViewProps {
  course: Course;
  progress?: CourseProgress;
  onUpdateProgress: (p: CourseProgress) => void;
  onBack: () => void;
  apiKey: string;
  activeModel: string;
}

const DEV_DISABLE_LOCKS = true; // TODO: Mudar para false em produção

const CourseView: React.FC<CourseViewProps> = ({
  course,
  progress,
  onUpdateProgress,
  onBack,
  apiKey,
  activeModel
}) => {
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(course.modules[0]?.id || null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [activeQuizModuleId, setActiveQuizModuleId] = useState<string | null>(null);

  const isLessonCompleted = (lessonId: string) => progress?.completedLessons.includes(lessonId) ?? false;

  const isModuleQuizPassed = (moduleId: string) => {
    if (DEV_DISABLE_LOCKS) return true;
    return progress?.quizResults?.[moduleId]?.passed ?? false;
  };

  const getModuleQuizResult = (moduleId: string): ModuleQuizResult | undefined => {
    return progress?.quizResults?.[moduleId];
  };

  /** Verifica se um módulo está desbloqueado.
   * Módulo 0 sempre está. Demais exigem quiz aprovado no módulo anterior. */
  const isModuleUnlocked = (moduleIndex: number): boolean => {
    if (DEV_DISABLE_LOCKS) return true;
    if (moduleIndex === 0) return true;
    const prevModule = course.modules[moduleIndex - 1];
    // Se o módulo anterior não tem quiz, basta ter completado todas as lições
    if (!prevModule.quiz) {
      return prevModule.lessons.every(l => isLessonCompleted(l.id));
    }
    return isModuleQuizPassed(prevModule.id);
  };

  const getModuleCompletedCount = (mod: CourseModule) => {
    if (!progress) return 0;
    return mod.lessons.filter(l => progress.completedLessons.includes(l.id)).length;
  };

  /** Status do módulo considerando quiz */
  const getModuleStatus = (mod: CourseModule, moduleIndex: number): 'locked' | 'completed' | 'in_progress' | 'not_started' => {
    if (!isModuleUnlocked(moduleIndex)) return 'locked';
    const completedCount = getModuleCompletedCount(mod);
    const allLessonsDone = completedCount === mod.lessons.length;
    const quizPassed = mod.quiz ? isModuleQuizPassed(mod.id) : true;
    if (allLessonsDone && quizPassed) return 'completed';
    if (completedCount > 0) return 'in_progress';
    return 'not_started';
  };

  /** Contagem total considerando quizzes */
  const totalItems = course.modules.reduce((s, m) => s + m.lessons.length + (m.quiz ? 1 : 0), 0);
  const completedItems = (progress?.completedLessons.length || 0) +
    course.modules.filter(m => m.quiz && isModuleQuizPassed(m.id)).length;
  const percent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  const handleCompleteLesson = (lessonId: string) => {
    const now = Date.now();
    const updated: CourseProgress = progress
      ? {
          ...progress,
          completedLessons: progress.completedLessons.includes(lessonId)
            ? progress.completedLessons
            : [...progress.completedLessons, lessonId],
          lastAccessedAt: now,
          currentLessonId: lessonId
        }
      : {
          courseId: course.id,
          completedLessons: [lessonId],
          exerciseResults: {},
          quizResults: {},
          startedAt: now,
          lastAccessedAt: now,
          currentLessonId: lessonId
        };
    onUpdateProgress(updated);
  };

  const handleSaveExercise = (exerciseId: string, passed: boolean, answer?: string | number) => {
    const now = Date.now();
    const prev = progress?.exerciseResults[exerciseId];
    const updated: CourseProgress = {
      ...(progress || { courseId: course.id, completedLessons: [], exerciseResults: {}, quizResults: {}, startedAt: now, lastAccessedAt: now }),
      exerciseResults: {
        ...(progress?.exerciseResults || {}),
        [exerciseId]: {
          exerciseId,
          passed,
          attempts: (prev?.attempts || 0) + 1,
          userAnswer: answer !== undefined ? answer : prev?.userAnswer,
          timestamp: now
        }
      },
      lastAccessedAt: now
    };
    onUpdateProgress(updated);
  };

  const handleSubmitQuiz = (result: ModuleQuizResult) => {
    const now = Date.now();
    const updated: CourseProgress = {
      ...(progress || { courseId: course.id, completedLessons: [], exerciseResults: {}, quizResults: {}, startedAt: now, lastAccessedAt: now }),
      quizResults: {
        ...(progress?.quizResults || {}),
        [result.moduleId]: result
      },
      lastAccessedAt: now
    };
    onUpdateProgress(updated);
  };

  // Encontrar a lição ativa e calcular next/prev
  const findLessonContext = (lessonId: string) => {
    const allLessons: Lesson[] = [];
    course.modules.forEach(m => m.lessons.forEach(l => allLessons.push(l)));
    const idx = allLessons.findIndex(l => l.id === lessonId);
    return {
      lesson: allLessons[idx],
      prevLesson: idx > 0 ? allLessons[idx - 1] : null,
      nextLesson: idx < allLessons.length - 1 ? allLessons[idx + 1] : null,
      moduleTitle: course.modules.find(m => m.lessons.some(l => l.id === lessonId))?.title || ''
    };
  };

  // --- Quiz de módulo aberto ---
  if (activeQuizModuleId) {
    const modIdx = course.modules.findIndex(m => m.id === activeQuizModuleId);
    const mod = course.modules[modIdx];
    if (mod?.quiz) {
      return (
        <ModuleQuizView
          module={mod}
          moduleIndex={modIdx}
          previousResult={getModuleQuizResult(mod.id)}
          onSubmit={handleSubmitQuiz}
          onBack={() => setActiveQuizModuleId(null)}
        />
      );
    }
  }

  // --- Lição aberta ---
  if (activeLessonId) {
    const ctx = findLessonContext(activeLessonId);
    if (ctx.lesson) {
      return (
        <LessonView
          lesson={ctx.lesson}
          moduleTitle={ctx.moduleTitle}
          courseCategory={course.category}
          isCompleted={isLessonCompleted(ctx.lesson.id)}
          onComplete={() => handleCompleteLesson(ctx.lesson.id)}
          onSaveExercise={handleSaveExercise}
          exerciseResults={progress?.exerciseResults || {}}
          onBack={() => setActiveLessonId(null)}
          onNext={ctx.nextLesson ? () => setActiveLessonId(ctx.nextLesson!.id) : undefined}
          onPrev={ctx.prevLesson ? () => setActiveLessonId(ctx.prevLesson!.id) : undefined}
          apiKey={apiKey}
          activeModel={activeModel}
        />
      );
    }
  }

  // --- Lista de Módulos ---
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="fixed inset-0 z-[110] bg-background flex flex-col overflow-hidden"
    >
      {/* Header */}
      <header className="border-b border-border-dim bg-surface/50 backdrop-blur-md shrink-0">
        <div className="h-16 flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="p-2 hover:bg-[#333537] rounded-full transition-colors text-[#9aa0a6] hover:text-white">
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xl">{course.icon}</span>
              <h1 className="text-lg font-bold line-clamp-1">{course.title}</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-primary">{percent}%</span>
            <div className="w-24 h-1.5 bg-background rounded-full overflow-hidden hidden sm:block">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                className="h-full bg-primary rounded-full"
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6">
        <div className="max-w-3xl mx-auto space-y-3">

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="p-3 bg-surface rounded-xl border border-border-dim text-center">
              <BookOpen size={16} className="text-primary mx-auto mb-1" />
              <p className="text-lg font-bold">{totalItems}</p>
              <p className="text-[10px] text-[#9aa0a6]">Lições</p>
            </div>
            <div className="p-3 bg-surface rounded-xl border border-border-dim text-center">
              <CheckCircle2 size={16} className="text-green-400 mx-auto mb-1" />
              <p className="text-lg font-bold">{completedItems}</p>
              <p className="text-[10px] text-[#9aa0a6]">Concluídas</p>
            </div>
            <div className="p-3 bg-surface rounded-xl border border-border-dim text-center">
              <Clock size={16} className="text-yellow-400 mx-auto mb-1" />
              <p className="text-lg font-bold">{course.estimatedHours}h</p>
              <p className="text-[10px] text-[#9aa0a6]">Estimado</p>
            </div>
          </div>

          {/* Module list */}
          {course.modules.map((mod, mi) => {
            const status = getModuleStatus(mod, mi);
            const isExpanded = expandedModuleId === mod.id;
            const completedCount = getModuleCompletedCount(mod);
            const isLocked = status === 'locked';
            const quizPassed = mod.quiz ? isModuleQuizPassed(mod.id) : false;
            const allLessonsDone = completedCount === mod.lessons.length;
            // Total de itens no módulo (lições + quiz)
            const totalModItems = mod.lessons.length + (mod.quiz ? 1 : 0);
            const completedModItems = completedCount + (quizPassed ? 1 : 0);

            return (
              <div
                key={mod.id}
                className={`bg-surface rounded-2xl border overflow-hidden transition-opacity ${
                  isLocked ? 'border-border-dim/50 opacity-60' : 'border-border-dim'
                }`}
              >
                {/* Module header */}
                <button
                  onClick={() => {
                    if (isLocked) return;
                    setExpandedModuleId(isExpanded ? null : mod.id);
                  }}
                  className={`w-full flex items-center gap-3 p-4 transition-colors text-left ${
                    isLocked ? 'cursor-not-allowed' : 'hover:bg-background/30'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 ${
                    status === 'completed' ? 'bg-green-500/10 text-green-400' :
                    status === 'in_progress' ? 'bg-primary/10 text-primary' :
                    isLocked ? 'bg-[#1a1a1a] text-[#444]' :
                    'bg-background text-[#9aa0a6]'
                  }`}>
                    {isLocked ? <Lock size={14} /> :
                     status === 'completed' ? <CheckCircle2 size={16} /> :
                     <span>{mod.icon}</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-[#9aa0a6] uppercase">Módulo {mi + 1}</span>
                      {status === 'completed' && <Trophy size={10} className="text-yellow-500" />}
                      {isLocked && <span className="text-[9px] text-[#555]">🔒 Complete o módulo anterior</span>}
                    </div>
                    <h3 className={`text-sm font-bold line-clamp-1 ${isLocked ? 'text-[#666]' : 'text-white'}`}>{mod.title}</h3>
                  </div>
                  <span className="text-[10px] text-[#9aa0a6] font-mono shrink-0">
                    {completedModItems}/{totalModItems}
                  </span>
                  {!isLocked && (
                    <ChevronDown size={16} className={`text-[#9aa0a6] transition-transform shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {/* Lessons + Quiz */}
                <AnimatePresence>
                  {isExpanded && !isLocked && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border-dim/50">
                        {/* Lessons */}
                        {mod.lessons.map((lesson, li) => {
                          const completed = isLessonCompleted(lesson.id);
                          return (
                            <button
                              key={lesson.id}
                              onClick={() => setActiveLessonId(lesson.id)}
                              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-background/30 transition-colors text-left border-b border-border-dim/30 last:border-0"
                            >
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                                completed ? 'text-green-400' : 'text-[#444746]'
                              }`}>
                                {completed ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`text-xs font-medium line-clamp-1 ${completed ? 'text-[#9aa0a6]' : 'text-white'}`}>
                                  {mi + 1}.{li + 1} — {lesson.title}
                                </p>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <span className="text-[10px] text-[#9aa0a6] flex items-center gap-1">
                                    <Clock size={8} /> {lesson.estimatedMinutes} min
                                  </span>
                                  {lesson.videoUrl && (
                                    <span className="text-[10px] text-red-400 flex items-center gap-1">
                                      <PlayCircle size={8} /> Vídeo
                                    </span>
                                  )}
                                  {lesson.exercises && lesson.exercises.length > 0 && (
                                    <span className="text-[10px] text-yellow-400">
                                      🧪 {lesson.exercises.length} exercícios
                                    </span>
                                  )}
                                </div>
                              </div>
                            </button>
                          );
                        })}

                        {/* Quiz (última "aula" do módulo) */}
                        {mod.quiz && (
                          <button
                            onClick={() => {
                              if (!allLessonsDone) return;
                              setActiveQuizModuleId(mod.id);
                            }}
                            disabled={!allLessonsDone}
                            className={`w-full flex items-center gap-3 px-4 py-3 transition-colors text-left ${
                              allLessonsDone
                                ? 'hover:bg-background/30'
                                : 'opacity-50 cursor-not-allowed'
                            }`}
                          >
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                              quizPassed ? 'text-green-400' :
                              !allLessonsDone ? 'text-[#333]' :
                              'text-primary'
                            }`}>
                              {quizPassed ? <CheckCircle2 size={16} /> :
                               !allLessonsDone ? <Lock size={14} /> :
                               <ScrollText size={14} />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`text-xs font-medium line-clamp-1 ${
                                quizPassed ? 'text-[#9aa0a6]' :
                                !allLessonsDone ? 'text-[#555]' :
                                'text-primary font-bold'
                              }`}>
                                {mi + 1}.{mod.lessons.length + 1} — 📝 Quiz de Revisão
                              </p>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-[10px] text-[#9aa0a6]">
                                  {mod.quiz.questions.length} perguntas • mín. {mod.quiz.passingScore ?? 70}%
                                </span>
                                {quizPassed && (
                                  <span className="text-[10px] text-green-400 font-bold">
                                    ✅ {progress?.quizResults?.[mod.id]?.score}% aprovado
                                  </span>
                                )}
                                {!allLessonsDone && (
                                  <span className="text-[10px] text-[#555]">
                                    🔒 Complete as lições primeiro
                                  </span>
                                )}
                              </div>
                            </div>
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default CourseView;
