import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Trophy,
  RotateCcw,
  Lock
} from 'lucide-react';
import { CourseModule, ModuleQuizResult } from '../../types/academy';

interface ModuleQuizViewProps {
  module: CourseModule;
  moduleIndex: number;
  previousResult?: ModuleQuizResult;
  onSubmit: (result: ModuleQuizResult) => void;
  onBack: () => void;
}

/**
 * Componente genérico de Quiz de Módulo.
 * 
 * Renderiza automaticamente as perguntas do quiz do módulo,
 * calcula a nota e informa se o aluno passou ou não.
 * Reutilizável para qualquer módulo — só precisa dos dados no `module.quiz`.
 */
const ModuleQuizView: React.FC<ModuleQuizViewProps> = ({
  module,
  moduleIndex,
  previousResult,
  onSubmit,
  onBack
}) => {
  const quiz = module.quiz!;
  const passingScore = quiz.passingScore ?? 70;
  const questions = quiz.questions;

  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(!!previousResult);

  // Calcula resultado
  const result = useMemo(() => {
    if (!submitted && !previousResult) return null;

    const userAnswers = previousResult ? previousResult.answers : answers;
    let correct = 0;
    questions.forEach((q, i) => {
      if (userAnswers[i] === q.correctAnswer) correct++;
    });
    const score = Math.round((correct / questions.length) * 100);
    return {
      moduleId: module.id,
      score,
      passed: score >= passingScore,
      answers: userAnswers as number[],
      correct,
      total: questions.length,
      timestamp: previousResult?.timestamp || Date.now()
    };
  }, [submitted, previousResult, answers, questions, module.id, passingScore]);

  const handleSelectAnswer = (questionIdx: number, optionIdx: number) => {
    if (submitted || showResults) return;
    setAnswers(prev => {
      const next = [...prev];
      next[questionIdx] = optionIdx;
      return next;
    });
  };

  const handleSubmit = () => {
    if (answers.some(a => a === null)) return; // Todas precisam ser respondidas
    setSubmitted(true);
    setShowResults(true);

    let correct = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) correct++;
    });
    const score = Math.round((correct / questions.length) * 100);

    onSubmit({
      moduleId: module.id,
      score,
      passed: score >= passingScore,
      answers: answers as number[],
      timestamp: Date.now()
    });
  };

  const handleRetry = () => {
    setAnswers(new Array(questions.length).fill(null));
    setSubmitted(false);
    setShowResults(false);
  };

  const allAnswered = answers.every(a => a !== null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[110] bg-background flex flex-col overflow-hidden"
    >
      {/* Header */}
      <header className="border-b border-border-dim bg-surface/50 backdrop-blur-md shrink-0">
        <div className="h-12 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3 min-w-0">
            <button onClick={onBack} className="p-1.5 hover:bg-[#333537] rounded-lg transition-colors text-[#9aa0a6] hover:text-white shrink-0">
              <ArrowLeft size={16} />
            </button>
            <div className="min-w-0">
              <p className="text-[9px] text-[#666] uppercase tracking-[0.15em] truncate">Módulo {moduleIndex + 1} — {module.title}</p>
              <h1 className="text-xs font-bold truncate">📝 Quiz de Revisão</h1>
            </div>
          </div>
          {result && (
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold ${
              result.passed ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
            }`}>
              {result.passed ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
              {result.score}%
            </div>
          )}
        </div>
        <div className="h-0.5 bg-background">
          <div className="h-full bg-primary" style={{ width: '100%' }} />
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-6">
          
          {/* Intro card */}
          {!showResults && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h2 className="text-xl font-bold mb-2">Quiz — {module.title}</h2>
              <p className="text-sm text-[#9aa0a6] max-w-md mx-auto">
                Responda todas as {questions.length} perguntas para desbloquear o próximo módulo. 
                Você precisa acertar pelo menos <span className="text-primary font-bold">{passingScore}%</span>.
              </p>
            </motion.div>
          )}

          {/* Result banner */}
          {showResults && result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`mb-8 p-6 rounded-2xl border text-center ${
                result.passed
                  ? 'bg-green-500/5 border-green-500/20'
                  : 'bg-red-500/5 border-red-500/20'
              }`}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  result.passed ? 'bg-green-500/10' : 'bg-red-500/10'
                }`}
              >
                {result.passed
                  ? <Trophy size={32} className="text-yellow-400" />
                  : <XCircle size={32} className="text-red-400" />
                }
              </motion.div>
              <h2 className="text-2xl font-bold mb-2">
                {result.passed ? 'Aprovado! 🎉' : 'Não foi dessa vez...'}
              </h2>
              <p className="text-lg mb-1">
                Você acertou <span className="font-bold text-white">{result.correct}</span> de <span className="font-bold text-white">{result.total}</span> ({result.score}%)
              </p>
              <p className="text-sm text-[#9aa0a6]">
                {result.passed
                  ? 'Parabéns! O próximo módulo foi desbloqueado.'
                  : `Você precisa de pelo menos ${passingScore}% para avançar. Revise as lições e tente novamente!`
                }
              </p>
              {!result.passed && (
                <button
                  onClick={handleRetry}
                  className="mt-4 px-5 py-2 bg-primary text-background rounded-xl text-xs font-bold hover:bg-primary/90 transition-all flex items-center gap-2 mx-auto"
                >
                  <RotateCcw size={14} /> Tentar Novamente
                </button>
              )}
            </motion.div>
          )}

          {/* Questions */}
          <div className="space-y-6">
            {questions.map((q, qi) => {
              const userAnswer = showResults && result ? result.answers[qi] : answers[qi];
              const isCorrect = showResults && userAnswer === q.correctAnswer;
              const isWrong = showResults && userAnswer !== null && userAnswer !== q.correctAnswer;

              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: qi * 0.05 }}
                  className={`p-5 rounded-xl border ${
                    showResults
                      ? isCorrect ? 'border-green-500/30 bg-green-500/5' : isWrong ? 'border-red-500/30 bg-red-500/5' : 'border-border-dim bg-surface'
                      : 'border-border-dim bg-surface'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-[10px] font-bold text-[#666] bg-background px-2 py-1 rounded-md shrink-0">
                      {qi + 1}/{questions.length}
                    </span>
                    <p className="text-[14px] font-medium text-white leading-relaxed">{q.question}</p>
                  </div>

                  <div className="space-y-2 ml-8">
                    {q.options.map((opt, oi) => {
                      const isSelected = userAnswer === oi;
                      const isThisCorrect = showResults && oi === q.correctAnswer;
                      const isThisWrong = showResults && isSelected && oi !== q.correctAnswer;

                      return (
                        <button
                          key={oi}
                          onClick={() => handleSelectAnswer(qi, oi)}
                          disabled={showResults}
                          className={`w-full text-left px-4 py-3 rounded-xl border text-[13px] transition-all ${
                            isThisCorrect
                              ? 'border-green-500 bg-green-500/10 text-green-300'
                              : isThisWrong
                                ? 'border-red-500 bg-red-500/10 text-red-300'
                                : isSelected
                                  ? 'border-primary bg-primary/10 text-white'
                                  : 'border-[#2a2a2a] hover:border-[#444] text-[#c8c8c8]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{opt}</span>
                            {isThisCorrect && <CheckCircle2 size={14} className="text-green-400 shrink-0" />}
                            {isThisWrong && <XCircle size={14} className="text-red-400 shrink-0" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  {showResults && q.explanation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-3 ml-8 px-4 py-3 bg-primary/5 border-l-2 border-primary rounded-r-xl"
                    >
                      <p className="text-[12px] text-[#c8c8c8] leading-relaxed">💡 {q.explanation}</p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      {!showResults && (
        <div className="border-t border-border-dim bg-surface/50 backdrop-blur-md px-4 md:px-8 py-3 shrink-0">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <span className="text-[10px] text-[#666]">
              {answers.filter(a => a !== null).length}/{questions.length} respondidas
            </span>
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                allAnswered
                  ? 'bg-primary text-background hover:bg-primary/90 shadow-lg shadow-primary/20'
                  : 'bg-[#2a2a2a] text-[#666] cursor-not-allowed'
              }`}
            >
              Enviar Respostas <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ModuleQuizView;
