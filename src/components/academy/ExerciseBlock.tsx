import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  XCircle,
  Lightbulb,
  Send,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { Exercise, ExerciseResult } from '../../types/academy';

interface ExerciseBlockProps {
  exercise: Exercise;
  result?: ExerciseResult;
  onAnswer: (exerciseId: string, passed: boolean, answer?: string | number) => void;
  onAiEvaluate?: (exerciseId: string, userCode: string) => void;
}

const ExerciseBlock: React.FC<ExerciseBlockProps> = ({ exercise, result, onAnswer, onAiEvaluate }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(result?.userAnswer as number ?? null);
  const [codeInput, setCodeInput] = useState(result?.userAnswer as string ?? exercise.starterCode ?? '');
  const [showResult, setShowResult] = useState(!!result);
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(result?.passed ?? false);

  const handleCheckQuiz = () => {
    if (selectedOption === null) return;
    const correct = selectedOption === exercise.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    onAnswer(exercise.id, correct, selectedOption);
  };

  const handleSubmitCode = () => {
    if (!codeInput.trim()) return;
    onAnswer(exercise.id, false, codeInput);
    if (onAiEvaluate) {
      onAiEvaluate(exercise.id, codeInput);
    }
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setCodeInput(exercise.starterCode ?? '');
    setShowResult(false);
    setIsCorrect(false);
  };

  // --- Multiple Choice ---
  if (exercise.type === 'multiple_choice') {
    return (
      <div className="bg-background/50 rounded-2xl border border-border-dim p-5 space-y-4">
        <p className="text-sm font-bold text-white">{exercise.question}</p>

        <div className="space-y-2">
          {exercise.options?.map((opt, i) => {
            const isSelected = selectedOption === i;
            const isAnswer = exercise.correctAnswer === i;
            let borderClass = 'border-border-dim hover:border-primary/30';
            if (showResult && isAnswer) borderClass = 'border-green-500 bg-green-500/5';
            else if (showResult && isSelected && !isAnswer) borderClass = 'border-red-500 bg-red-500/5';
            else if (isSelected) borderClass = 'border-primary bg-primary/5';

            return (
              <button
                key={i}
                onClick={() => !showResult && setSelectedOption(i)}
                disabled={showResult}
                className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center gap-3 ${borderClass} ${showResult ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  isSelected ? 'border-primary' : 'border-[#444746]'
                }`}>
                  {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                </div>
                <span className="text-xs text-[#e3e3e3]">{opt}</span>
                {showResult && isAnswer && <CheckCircle2 size={14} className="text-green-400 ml-auto shrink-0" />}
                {showResult && isSelected && !isAnswer && <XCircle size={14} className="text-red-400 ml-auto shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-wrap">
          {!showResult ? (
            <>
              <button
                onClick={handleCheckQuiz}
                disabled={selectedOption === null}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedOption !== null
                    ? 'bg-primary text-background hover:bg-primary/90 shadow-lg shadow-primary/20'
                    : 'bg-[#333537] text-[#444746] cursor-not-allowed'
                }`}
              >
                Verificar Resposta
              </button>
              {exercise.hint && (
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="px-3 py-2 rounded-xl text-xs text-[#9aa0a6] hover:text-yellow-400 hover:bg-yellow-500/5 transition-all flex items-center gap-1"
                >
                  <Lightbulb size={12} /> Dica
                </button>
              )}
            </>
          ) : (
            <button
              onClick={handleRetry}
              className="px-3 py-2 rounded-xl text-xs text-[#9aa0a6] hover:text-white hover:bg-[#333537] transition-all flex items-center gap-1"
            >
              <RotateCcw size={12} /> Tentar novamente
            </button>
          )}
        </div>

        {/* Hint */}
        {showHint && exercise.hint && (
          <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
            <p className="text-[11px] text-yellow-300 flex items-center gap-2"><Lightbulb size={12} /> {exercise.hint}</p>
          </motion.div>
        )}

        {/* Explanation */}
        {showResult && exercise.explanation && (
          <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className={`p-3 rounded-xl border ${isCorrect ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
            <p className={`text-[11px] ${isCorrect ? 'text-green-300' : 'text-red-300'}`}>
              {isCorrect ? '✅ Correto! ' : '❌ Incorreto. '}{exercise.explanation}
            </p>
          </motion.div>
        )}
      </div>
    );
  }

  // --- Code Challenge ---
  return (
    <div className="bg-background/50 rounded-2xl border border-border-dim p-5 space-y-4">
      <p className="text-sm font-bold text-white">{exercise.question}</p>
      {exercise.codePrompt && (
        <p className="text-[11px] text-[#9aa0a6] leading-relaxed">{exercise.codePrompt}</p>
      )}

      <textarea
        value={codeInput}
        onChange={e => setCodeInput(e.target.value)}
        rows={6}
        className="w-full bg-[#0d0d0d] text-green-300 font-mono text-xs p-4 rounded-xl border border-border-dim focus:border-primary outline-none resize-none"
        placeholder="# Escreva seu código PowerShell aqui..."
        spellCheck={false}
      />

      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={handleSubmitCode}
          disabled={!codeInput.trim()}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            codeInput.trim()
              ? 'bg-primary text-background hover:bg-primary/90 shadow-lg shadow-primary/20'
              : 'bg-[#333537] text-[#444746] cursor-not-allowed'
          }`}
        >
          <Sparkles size={12} /> Avaliar com Marina
        </button>

        {exercise.hint && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="px-3 py-2 rounded-xl text-xs text-[#9aa0a6] hover:text-yellow-400 hover:bg-yellow-500/5 transition-all flex items-center gap-1"
          >
            <Lightbulb size={12} /> Dica
          </button>
        )}
      </div>

      {showHint && exercise.hint && (
        <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
          <p className="text-[11px] text-yellow-300 flex items-center gap-2"><Lightbulb size={12} /> {exercise.hint}</p>
        </motion.div>
      )}
    </div>
  );
};

export default ExerciseBlock;
