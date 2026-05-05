import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  PlayCircle,
  MessageCircle,
  Lightbulb,
  BookOpen,
  Terminal,
  ChevronLeft,
  ChevronRight,
  Code2
} from 'lucide-react';
import { Lesson, ExerciseResult } from '../../types/academy';
import ExerciseBlock from './ExerciseBlock';
import AiTutor from './AiTutor';
import TerminalSimulator from './TerminalSimulator';
import CodeSimulator from './CodeSimulator';

interface LessonViewProps {
  lesson: Lesson;
  moduleTitle: string;
  courseCategory: string;
  isCompleted: boolean;
  onComplete: () => void;
  onSaveExercise: (exerciseId: string, passed: boolean, answer?: string | number) => void;
  exerciseResults: Record<string, ExerciseResult>;
  onBack: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  apiKey: string;
  activeModel: string;
}

/**
 * Divide o markdown da lição em seções usando "---" como separador.
 * Cada seção vira um "step" na progressão.
 */
function splitIntoSections(markdown: string): string[] {
  return markdown
    .split(/\n---\n/)
    .map(s => s.trim())
    .filter(s => s.length > 0);
}

/** Extrai o primeiro heading (# ou ##) de uma seção para usar como título do step */
function getSectionTitle(md: string): string {
  const match = md.match(/^#{1,3}\s+(.+)/m);
  return match ? match[1].replace(/[*_`]/g, '') : 'Conteúdo';
}

const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  moduleTitle,
  courseCategory,
  isCompleted,
  onComplete,
  onSaveExercise,
  exerciseResults,
  onBack,
  onNext,
  onPrev,
  apiKey,
  activeModel
}) => {
  // Dividir markdown em steps automaticamente
  const sections = useMemo(() => splitIntoSections(lesson.content.markdown), [lesson.content.markdown]);

  // Calcular total de steps: seções + (exemplos de código se houver) + (exercícios se houver) + (vídeo se houver)
  const hasExamples = (lesson.content.codeExamples?.length || 0) > 0;
  const hasExercises = (lesson.exercises?.length || 0) > 0;
  const hasVideo = !!lesson.videoUrl;

  // Steps: [dicas?] + [vídeo?] + seções de conteúdo + [exemplos?] + [exercícios?] + [resumo/conclusão]
  type StepType = 'tips' | 'video' | 'content' | 'examples' | 'exercises' | 'complete';
  interface Step { type: StepType; label: string; index?: number; }

  const steps = useMemo(() => {
    const s: Step[] = [];
    if (lesson.tips && lesson.tips.length > 0) s.push({ type: 'tips', label: 'Dicas' });
    if (hasVideo) s.push({ type: 'video', label: 'Vídeo' });
    sections.forEach((sec, i) => s.push({ type: 'content', label: getSectionTitle(sec), index: i }));
    if (hasExamples) s.push({ type: 'examples', label: 'Exemplos Práticos' });
    if (hasExercises) s.push({ type: 'exercises', label: 'Exercícios' });
    s.push({ type: 'complete', label: 'Concluir' });
    return s;
  }, [sections, hasExamples, hasExercises, hasVideo, lesson.tips]);

  const [currentStep, setCurrentStep] = useState(0);
  const [copiedBlock, setCopiedBlock] = useState<string | null>(null);
  const [showTutor, setShowTutor] = useState(false);
  const [showSimulator, setShowSimulator] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reseta estado quando a lição muda
  useEffect(() => {
    setCurrentStep(0);
    setShowSimulator(false);
    setShowTutor(false);
    scrollRef.current?.scrollTo(0, 0);
  }, [lesson.id]);

  // Rola para o topo quando o passo muda
  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [currentStep]);

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBlock(id);
    setTimeout(() => setCopiedBlock(null), 2000);
  };

  const goNext = () => { if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1); };
  const goPrev = () => { if (currentStep > 0) setCurrentStep(currentStep - 1); };

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:v=|\/)([\w-]{11})/);
    return match ? match[1] : null;
  };

  // --- Render step content ---
  const renderStepContent = () => {
    switch (step.type) {
      case 'tips':
        return (
          <motion.div key="tips" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                <Lightbulb size={20} className="text-yellow-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Antes de começar</h2>
                <p className="text-xs text-[#9aa0a6]">Dicas importantes para esta lição</p>
              </div>
            </div>
            <div className="space-y-3">
              {lesson.tips?.map((tip, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-3 p-4 bg-surface rounded-xl border border-border-dim"
                >
                  <span className="text-yellow-400 text-lg shrink-0">💡</span>
                  <p className="text-sm text-[#c8c8c8] leading-relaxed">{tip}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'video':
        return (
          <motion.div key="video" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <PlayCircle size={20} className="text-red-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Vídeo Complementar</h2>
                <p className="text-xs text-[#9aa0a6]">{lesson.videoTitle || 'Assista para reforçar o conteúdo'}</p>
              </div>
            </div>
            {lesson.videoUrl && (
              <div className="rounded-2xl overflow-hidden border border-border-dim shadow-xl">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${getYouTubeId(lesson.videoUrl)}`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={lesson.videoTitle || 'Vídeo'}
                  />
                </div>
              </div>
            )}
            <p className="text-[11px] text-[#666] text-center">Assistir é opcional. Você pode avançar quando quiser.</p>
          </motion.div>
        );

      case 'content':
        return (
          <motion.div key={`content-${step.index}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
            <div className="prose prose-invert prose-sm max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-p:text-[#c8c8c8] prose-p:leading-[1.9] prose-p:text-[14px] prose-p:my-4
              prose-li:text-[#c8c8c8] prose-li:text-[14px] prose-li:leading-[1.9]
              prose-strong:text-white prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-code:text-emerald-300 prose-code:bg-[#1a2e1a] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-[13px] prose-code:font-mono prose-code:font-normal
              prose-pre:bg-[#0c0c0c] prose-pre:border prose-pre:border-[#2a2a2a] prose-pre:rounded-xl prose-pre:shadow-lg
            ">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <div className="not-prose mb-8 mt-2">
                      <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{children}</h1>
                      <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-transparent" />
                    </div>
                  ),
                  h2: ({ children }) => (
                    <div className="not-prose mt-10 mb-5 flex items-center gap-3">
                      <div className="w-1 h-6 rounded-full bg-primary shrink-0" />
                      <h2 className="text-lg font-bold text-white">{children}</h2>
                    </div>
                  ),
                  h3: ({ children }) => (
                    <div className="not-prose mt-6 mb-3">
                      <h3 className="text-[15px] font-bold text-[#e3e3e3]">{children}</h3>
                    </div>
                  ),
                  pre: ({ children, ...props }) => {
                    const codeEl = (children as any)?.props;
                    const codeText = typeof codeEl?.children === 'string' ? codeEl.children : '';
                    const blockId = `block-${currentStep}-${codeText.slice(0, 15)}`;
                    return (
                      <div className="relative group not-prose my-5">
                        <div className="flex items-center justify-between px-4 py-2 bg-[#161616] border border-[#2a2a2a] border-b-0 rounded-t-xl">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                            </div>
                            <span className="text-[10px] text-[#555] font-mono ml-2">PowerShell</span>
                          </div>
                          <button
                            onClick={() => handleCopy(codeText, blockId)}
                            className="flex items-center gap-1 px-2 py-1 text-[10px] text-[#555] hover:text-white hover:bg-[#333] rounded transition-all"
                          >
                            {copiedBlock === blockId ? <><Check size={10} className="text-green-400" /> Copiado</> : <><Copy size={10} /> Copiar</>}
                          </button>
                        </div>
                        <pre className="bg-[#0c0c0c] border border-[#2a2a2a] border-t-0 rounded-b-xl p-4 overflow-x-auto text-[13px] !mt-0 !rounded-t-none" {...props}>
                          {children}
                        </pre>
                      </div>
                    );
                  },
                  table: ({ children }) => (
                    <div className="not-prose my-6 rounded-xl border border-[#2a2a2a] overflow-hidden shadow-lg shadow-black/10">
                      <table className="w-full text-[13px] border-collapse">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-[#1a1a2e]">{children}</thead>
                  ),
                  th: ({ children }) => (
                    <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-primary border-b border-[#2a2a2a]">{children}</th>
                  ),
                  td: ({ children }) => (
                    <td className="px-4 py-3 text-[13px] text-[#c8c8c8] border-b border-[#1a1a1a]">{children}</td>
                  ),
                  tr: ({ children, ...props }) => {
                    // Checking if it's in tbody for zebra striping
                    return <tr className="even:bg-[#111115] hover:bg-[#1a1a25] transition-colors" {...props}>{children}</tr>;
                  },
                  blockquote: ({ children }) => (
                    <div className="not-prose my-6 flex gap-3 p-5 bg-gradient-to-r from-primary/8 to-transparent border-l-2 border-primary rounded-r-xl">
                      <span className="text-primary text-lg shrink-0">💡</span>
                      <div className="text-[14px] text-[#d0d0d0] leading-relaxed [&>p]:m-0">{children}</div>
                    </div>
                  )
                }}
              >
                {sections[step.index!]}
              </ReactMarkdown>
            </div>
          </motion.div>
        );

      case 'examples':
        return (
          <motion.div key="examples" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <BookOpen size={20} className="text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Exemplos Práticos</h2>
                <p className="text-xs text-[#9aa0a6]">Analise e copie para praticar no terminal</p>
              </div>
            </div>
            {lesson.content.codeExamples?.map((ex, i) => (
              <div key={i} className="bg-surface rounded-xl border border-border-dim overflow-hidden">
                <div className="px-4 py-3 border-b border-border-dim/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary">{ex.title}</span>
                  <button
                    onClick={() => handleCopy(ex.code, `ex-${i}`)}
                    className="flex items-center gap-1 px-2 py-1 text-[10px] text-[#666] hover:text-white hover:bg-[#333] rounded transition-all"
                  >
                    {copiedBlock === `ex-${i}` ? <><Check size={10} className="text-green-400" /> Copiado</> : <><Copy size={10} /> Copiar</>}
                  </button>
                </div>
                <pre className="bg-[#0c0c0c] p-4 overflow-x-auto">
                  <code className="text-emerald-300 text-[13px] font-mono whitespace-pre">{ex.code}</code>
                </pre>
                {ex.output && (
                  <div className="border-t border-[#2a2a2a] bg-[#080808] p-4">
                    <p className="text-[10px] text-[#666] font-bold uppercase tracking-wider mb-2">📤 Saída esperada</p>
                    <pre className="text-[#aaa] text-[12px] font-mono whitespace-pre-wrap">{ex.output}</pre>
                  </div>
                )}
                {ex.explanation && (
                  <div className="px-4 py-3 border-t border-border-dim/30 bg-surface/50">
                    <p className="text-[12px] text-[#9aa0a6] leading-relaxed">💡 {ex.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        );

      case 'exercises':
        return (
          <motion.div key="exercises" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                <span className="text-xl">🧪</span>
              </div>
              <div>
                <h2 className="text-lg font-bold">Exercícios de Fixação</h2>
                <p className="text-xs text-[#9aa0a6]">Teste o que você aprendeu nesta lição</p>
              </div>
            </div>
            {lesson.exercises?.map(ex => (
              <ExerciseBlock
                key={ex.id}
                exercise={ex}
                result={exerciseResults[ex.id]}
                onAnswer={onSaveExercise}
              />
            ))}
          </motion.div>
        );

      case 'complete':
        return (
          <motion.div key="complete" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12 text-center space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center"
            >
              <CheckCircle2 size={40} className="text-green-400" />
            </motion.div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">
                {isCompleted ? 'Lição Revisada!' : 'Lição Concluída! 🎉'}
              </h2>
              <p className="text-sm text-[#9aa0a6] max-w-sm">
                {isCompleted
                  ? 'Você já completou esta lição anteriormente. Pode revisar quantas vezes quiser!'
                  : 'Parabéns! Você concluiu todo o conteúdo desta lição.'
                }
              </p>
            </div>
            <div className="flex gap-3">
              {!isCompleted && (
                <button
                  onClick={() => { onComplete(); }}
                  className="px-6 py-3 bg-green-500 text-background font-bold rounded-xl hover:bg-green-400 shadow-lg shadow-green-500/20 transition-all"
                >
                  ✅ Marcar como Concluída
                </button>
              )}
              {onNext && (
                <button
                  onClick={onNext}
                  className="px-6 py-3 bg-primary text-background font-bold rounded-xl hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
                >
                  Próxima Lição <ArrowRight size={16} />
                </button>
              )}
            </div>
          </motion.div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[110] bg-background flex flex-col overflow-hidden"
    >
      {/* Header compacto */}
      <header className="border-b border-border-dim bg-surface/50 backdrop-blur-md shrink-0">
        <div className="h-12 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3 min-w-0">
            <button onClick={onBack} className="p-1.5 hover:bg-[#333537] rounded-lg transition-colors text-[#9aa0a6] hover:text-white shrink-0">
              <ArrowLeft size={16} />
            </button>
            <div className="min-w-0">
              <p className="text-[9px] text-[#666] uppercase tracking-[0.15em] truncate">{moduleTitle}</p>
              <h1 className="text-xs font-bold truncate">{lesson.title}</h1>
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {isCompleted && (
              <span className="text-[9px] text-green-400 font-bold flex items-center gap-1 mr-2">
                <CheckCircle2 size={10} /> Concluída
              </span>
            )}
            <button
              onClick={() => setShowSimulator(!showSimulator)}
              className={`p-1.5 rounded-lg transition-all text-xs flex items-center gap-1.5 ${showSimulator ? 'bg-primary/20 text-primary' : 'hover:bg-[#333537] text-[#9aa0a6] hover:text-white'}`}
              title={courseCategory === 'Sistemas e Terminal' ? "Abrir Terminal PowerShell" : "Abrir Editor de Código"}
            >
              {courseCategory === 'Sistemas e Terminal' ? <Terminal size={14} /> : <Code2 size={14} />}
              <span className="hidden sm:inline text-[10px] font-bold">
                {courseCategory === 'Sistemas e Terminal' ? 'Terminal' : 'Editor'}
              </span>
            </button>
            <button
              onClick={() => setShowTutor(!showTutor)}
              className={`p-1.5 rounded-lg transition-all ${showTutor ? 'bg-primary/20 text-primary' : 'hover:bg-[#333537] text-[#9aa0a6] hover:text-white'}`}
              title="Perguntar à Marina"
            >
              <MessageCircle size={14} />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-0.5 bg-background">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Step indicators (mini pills) */}
          <div className="px-4 md:px-8 py-3 border-b border-border-dim/30 bg-background/50 overflow-x-auto shrink-0">
            <div className="flex items-center gap-1.5 max-w-3xl mx-auto">
              {steps.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentStep(i)}
                  className={`shrink-0 h-1.5 rounded-full transition-all ${
                    i === currentStep ? 'bg-primary w-8' :
                    i < currentStep ? 'bg-primary/40 w-4' :
                    'bg-[#2a2a2a] w-4'
                  }`}
                  title={s.label}
                />
              ))}
              <span className="ml-2 text-[10px] text-[#666] font-mono shrink-0">
                {currentStep + 1}/{steps.length}
              </span>
            </div>
          </div>

          {/* Scrollable content */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto">
            <div className="max-w-3xl mx-auto px-4 md:px-8 py-6">
              <AnimatePresence mode="wait">
                {renderStepContent()}
              </AnimatePresence>
            </div>

            {/* Simulador embarcado */}
            <AnimatePresence>
              {showSimulator && (
                <div className="max-w-3xl mx-auto px-4 md:px-8 pb-6">
                  {courseCategory === 'Sistemas e Terminal' ? (
                    <TerminalSimulator
                      isOpen={showSimulator}
                      onClose={() => setShowSimulator(false)}
                      welcomeMessage="Pratique os comandos que aprendeu nesta lição!"
                    />
                  ) : (
                    <div className="h-[450px]">
                      <CodeSimulator 
                        initialCode={lesson.content.codeExamples?.[0]?.code || '// Comece a programar aqui...\n'} 
                      />
                    </div>
                  )}
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom navigation */}
          <div className="border-t border-border-dim bg-surface/50 backdrop-blur-md px-4 md:px-8 py-3 shrink-0">
            <div className="max-w-3xl mx-auto flex items-center justify-between">
              <button
                onClick={goPrev}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  currentStep === 0
                    ? 'text-[#333] cursor-not-allowed'
                    : 'text-[#9aa0a6] hover:text-white hover:bg-[#333537]'
                }`}
              >
                <ChevronLeft size={14} /> Anterior
              </button>

              <span className="text-[10px] text-[#666] font-medium">{step.label}</span>

              {currentStep < steps.length - 1 ? (
                <button
                  onClick={goNext}
                  className="flex items-center gap-2 px-5 py-2 bg-primary text-background rounded-xl text-xs font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all"
                >
                  Continuar <ChevronRight size={14} />
                </button>
              ) : (
                <div className="w-24" /> 
              )}
            </div>
          </div>
        </div>

        {/* Tutor sidebar */}
        <AnimatePresence>
          {showTutor && (
            <AiTutor
              lessonTitle={lesson.title}
              lessonContent={lesson.content.markdown.slice(0, 2000)}
              onClose={() => setShowTutor(false)}
              apiKey={apiKey}
              activeModel={activeModel}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LessonView;
