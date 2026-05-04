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
  Trophy
} from 'lucide-react';
import { Course, CourseModule, CourseProgress, Lesson } from '../../types/academy';
import LessonView from './LessonView';

interface CourseViewProps {
  course: Course;
  progress?: CourseProgress;
  onUpdateProgress: (p: CourseProgress) => void;
  onBack: () => void;
  apiKey: string;
  activeModel: string;
}

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

  const isLessonCompleted = (lessonId: string) => progress?.completedLessons.includes(lessonId) ?? false;

  const getModuleCompletedCount = (mod: CourseModule) => {
    if (!progress) return 0;
    return mod.lessons.filter(l => progress.completedLessons.includes(l.id)).length;
  };

  const getModuleStatus = (mod: CourseModule): 'completed' | 'in_progress' | 'not_started' => {
    const completed = getModuleCompletedCount(mod);
    if (completed === mod.lessons.length) return 'completed';
    if (completed > 0) return 'in_progress';
    return 'not_started';
  };

  const totalLessons = course.modules.reduce((s, m) => s + m.lessons.length, 0);
  const completedLessons = progress?.completedLessons.length || 0;
  const percent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

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
      ...(progress || { courseId: course.id, completedLessons: [], exerciseResults: {}, startedAt: now, lastAccessedAt: now }),
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

  // --- Lição aberta ---
  if (activeLessonId) {
    const ctx = findLessonContext(activeLessonId);
    if (ctx.lesson) {
      return (
        <LessonView
          lesson={ctx.lesson}
          moduleTitle={ctx.moduleTitle}
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
              <p className="text-lg font-bold">{totalLessons}</p>
              <p className="text-[10px] text-[#9aa0a6]">Lições</p>
            </div>
            <div className="p-3 bg-surface rounded-xl border border-border-dim text-center">
              <CheckCircle2 size={16} className="text-green-400 mx-auto mb-1" />
              <p className="text-lg font-bold">{completedLessons}</p>
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
            const status = getModuleStatus(mod);
            const isExpanded = expandedModuleId === mod.id;
            const completedCount = getModuleCompletedCount(mod);

            return (
              <div key={mod.id} className="bg-surface rounded-2xl border border-border-dim overflow-hidden">
                {/* Module header */}
                <button
                  onClick={() => setExpandedModuleId(isExpanded ? null : mod.id)}
                  className="w-full flex items-center gap-3 p-4 hover:bg-background/30 transition-colors text-left"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 ${
                    status === 'completed' ? 'bg-green-500/10 text-green-400' :
                    status === 'in_progress' ? 'bg-primary/10 text-primary' :
                    'bg-background text-[#9aa0a6]'
                  }`}>
                    {status === 'completed' ? <CheckCircle2 size={16} /> : <span>{mod.icon}</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-[#9aa0a6] uppercase">Módulo {mi + 1}</span>
                      {status === 'completed' && <Trophy size={10} className="text-yellow-500" />}
                    </div>
                    <h3 className="text-sm font-bold text-white line-clamp-1">{mod.title}</h3>
                  </div>
                  <span className="text-[10px] text-[#9aa0a6] font-mono shrink-0">{completedCount}/{mod.lessons.length}</span>
                  <ChevronDown size={16} className={`text-[#9aa0a6] transition-transform shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>

                {/* Lessons */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border-dim/50">
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
