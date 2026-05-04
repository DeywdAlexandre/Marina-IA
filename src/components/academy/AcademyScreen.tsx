import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  GraduationCap,
  Clock,
  BookOpen,
  ChevronRight,
  Trophy,
  Star
} from 'lucide-react';
import { allCourses } from '../../data/courses';
import { CourseProgress } from '../../types/academy';
import { storageService } from '../../services/storageService';
import CourseView from './CourseView';

interface AcademyScreenProps {
  onClose: () => void;
  apiKey: string;
  activeModel: string;
}

const AcademyScreen: React.FC<AcademyScreenProps> = ({ onClose, apiKey, activeModel }) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [progressList, setProgressList] = useState<CourseProgress[]>(() => storageService.loadAcademyProgress());

  useEffect(() => {
    storageService.saveAcademyProgress(progressList);
  }, [progressList]);

  const getProgress = (courseId: string): CourseProgress | undefined => {
    return progressList.find(p => p.courseId === courseId);
  };

  const updateProgress = (updated: CourseProgress) => {
    setProgressList(prev => {
      const idx = prev.findIndex(p => p.courseId === updated.courseId);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = updated;
        return copy;
      }
      return [...prev, updated];
    });
  };

  const selectedCourse = allCourses.find(c => c.id === selectedCourseId);

  const getTotalLessons = (courseId: string) => {
    const course = allCourses.find(c => c.id === courseId);
    if (!course) return 0;
    return course.modules.reduce((sum, m) => sum + m.lessons.length, 0);
  };

  const getCompletionPercent = (courseId: string) => {
    const total = getTotalLessons(courseId);
    const progress = getProgress(courseId);
    if (!total || !progress) return 0;
    return Math.round((progress.completedLessons.length / total) * 100);
  };

  const getDifficultyLabel = (d: string) => {
    const map: Record<string, string> = { beginner: 'Iniciante', intermediate: 'Intermediário', advanced: 'Avançado' };
    return map[d] || d;
  };

  const getDifficultyColor = (d: string) => {
    const map: Record<string, string> = { beginner: 'text-green-400', intermediate: 'text-yellow-400', advanced: 'text-red-400' };
    return map[d] || '';
  };

  // --- Tela do curso aberto ---
  if (selectedCourse) {
    return (
      <CourseView
        course={selectedCourse}
        progress={getProgress(selectedCourse.id)}
        onUpdateProgress={updateProgress}
        onBack={() => setSelectedCourseId(null)}
        apiKey={apiKey}
        activeModel={activeModel}
      />
    );
  }

  // --- Catálogo de Cursos ---
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] bg-background flex flex-col overflow-hidden"
    >
      {/* Header */}
      <header className="h-16 border-b border-border-dim flex items-center justify-between px-4 md:px-8 bg-surface/50 backdrop-blur-md shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#333537] rounded-full transition-colors text-[#9aa0a6] hover:text-white"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-primary/10 rounded-lg">
              <GraduationCap size={20} className="text-primary" />
            </div>
            <h1 className="text-lg font-bold">Marina Academy</h1>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[#9aa0a6]">
          <Trophy size={16} className="text-yellow-500" />
          <span className="text-xs font-bold">
            {progressList.reduce((sum, p) => sum + p.completedLessons.length, 0)} lições completas
          </span>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-8">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Hero */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center space-y-3"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Aprenda com a <span className="text-primary">Marina</span>
            </h2>
            <p className="text-[#9aa0a6] text-sm max-w-md mx-auto leading-relaxed">
              Cursos completos com teoria, exercícios práticos e a Marina como sua tutora pessoal de IA.
            </p>
          </motion.div>

          {/* Cursos disponíveis */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen size={16} className="text-primary" />
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Cursos Disponíveis
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allCourses.map((course, i) => {
                const percent = getCompletionPercent(course.id);
                const progress = getProgress(course.id);
                return (
                  <motion.button
                    key={course.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setSelectedCourseId(course.id)}
                    className="group text-left p-6 bg-surface rounded-2xl border border-border-dim hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden"
                  >
                    {/* Gradient accent */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ background: `linear-gradient(90deg, ${course.color}, transparent)` }}
                    />

                    <div className="flex items-start gap-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                        style={{ backgroundColor: `${course.color}15` }}
                      >
                        {course.icon}
                      </div>
                      <div className="flex-1 min-w-0 space-y-2">
                        <h4 className="font-bold text-white group-hover:text-primary transition-colors line-clamp-1">
                          {course.title}
                        </h4>
                        <p className="text-[11px] text-[#9aa0a6] line-clamp-2 leading-relaxed">
                          {course.description}
                        </p>
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className={`text-[10px] font-bold uppercase ${getDifficultyColor(course.difficulty)}`}>
                            {getDifficultyLabel(course.difficulty)}
                          </span>
                          <span className="text-[10px] text-[#9aa0a6] flex items-center gap-1">
                            <Clock size={10} /> {course.estimatedHours}h
                          </span>
                          <span className="text-[10px] text-[#9aa0a6] flex items-center gap-1">
                            <BookOpen size={10} /> {getTotalLessons(course.id)} lições
                          </span>
                        </div>
                      </div>
                      <ChevronRight size={18} className="text-[#444746] group-hover:text-primary transition-colors shrink-0 mt-1" />
                    </div>

                    {/* Progress bar */}
                    {progress && (
                      <div className="mt-4 space-y-1.5">
                        <div className="flex justify-between text-[10px]">
                          <span className="text-[#9aa0a6]">Progresso</span>
                          <span className="font-bold text-primary">{percent}%</span>
                        </div>
                        <div className="h-1.5 bg-background rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percent}%` }}
                            className="h-full rounded-full bg-primary"
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    )}
                  </motion.button>
                );
              })}

              {/* Card "Em breve" */}
              <div className="p-6 bg-surface/30 rounded-2xl border border-dashed border-border-dim flex items-center justify-center">
                <div className="text-center space-y-2">
                  <Star size={24} className="text-[#444746] mx-auto" />
                  <p className="text-xs text-[#444746] font-bold">Mais cursos em breve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AcademyScreen;
