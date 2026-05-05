import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, RotateCcw, Terminal, Code2, Copy, Check } from 'lucide-react';

interface CodeSimulatorProps {
  initialCode?: string;
  onExecute?: (code: string, output: string[]) => void;
}

const CodeSimulator: React.FC<CodeSimulatorProps> = ({ initialCode = '', onExecute }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const consoleRef = useRef<HTMLDivElement>(null);

  // Auto-scroll para o final do console
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [output]);

  const runCode = () => {
    setIsRunning(true);
    const logs: string[] = [];
    
    // Backup do console.log original
    const originalLog = console.log;
    
    // Sobrescreve console.log para capturar a saída
    console.log = (...args: any[]) => {
      const formatted = args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ');
      logs.push(formatted);
      originalLog(...args);
    };

    try {
      // Executa o código
      // eslint-disable-next-line no-eval
      eval(code);
      setOutput(logs);
      if (onExecute) onExecute(code, logs);
    } catch (err: any) {
      setOutput([...logs, `❌ Erro: ${err.message}`]);
    } finally {
      // Restaura o console.log original
      console.log = originalLog;
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput([]);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] rounded-xl border border-border-dim overflow-hidden shadow-2xl">
      {/* Barra de Título / Tabs estilo VS Code */}
      <div className="h-9 bg-[#252526] flex items-center px-3 border-b border-[#333] justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 px-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="h-9 flex items-center px-4 bg-[#1e1e1e] border-t border-x border-[#1e1e1e] text-[11px] text-[#9aa0a6] gap-2 rounded-t-md mt-1">
            <Code2 size={12} className="text-yellow-500" />
            <span>script.js</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={copyCode}
            className="p-1.5 hover:bg-[#333] rounded text-[#9aa0a6] transition-colors"
            title="Copiar código"
          >
            {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      {/* Área Principal */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-[300px]">
        {/* Editor */}
        <div className="flex-1 relative flex flex-col bg-[#1e1e1e]">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#1e1e1e] border-r border-[#333] flex flex-col items-center py-4 text-[11px] text-[#858585] select-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={i} className="leading-6">{i + 1}</span>
            ))}
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            className="flex-1 pl-14 pr-4 py-4 bg-transparent text-[#d4d4d4] font-mono text-sm leading-6 outline-none resize-none"
            placeholder="// Digite seu código JavaScript aqui..."
          />
        </div>

        {/* Divisor Visual (Desktop) */}
        <div className="hidden md:block w-px bg-[#333]" />

        {/* Console / Output */}
        <div className="h-1/3 md:h-auto md:w-1/3 flex flex-col bg-[#1e1e1e] border-t md:border-t-0 border-[#333]">
          <div className="h-8 bg-[#252526] border-b border-[#333] flex items-center px-3 gap-2">
            <Terminal size={12} className="text-[#9aa0a6]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9aa0a6]">Console</span>
          </div>
          <div 
            ref={consoleRef}
            className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-1.5"
          >
            {output.length === 0 ? (
              <span className="text-[#555] italic italic">Aguardando execução...</span>
            ) : (
              output.map((line, i) => (
                <div key={i} className="text-[#d4d4d4] whitespace-pre-wrap flex gap-2">
                  <span className="text-[#858585] shrink-0">{'>'}</span>
                  <span>{line}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Barra de Status / Controles */}
      <div className="h-10 bg-[#007acc] flex items-center justify-between px-4">
        <div className="flex items-center gap-4 text-[11px] text-white/90">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>Ready</span>
          </div>
          <span className="opacity-70">JavaScript (ES6)</span>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={resetCode}
            className="flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-medium transition-colors"
          >
            <RotateCcw size={12} />
            Reiniciar
          </button>
          <button
            onClick={runCode}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-4 py-1 bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white rounded text-xs font-bold transition-all shadow-lg active:scale-95"
          >
            <Play size={12} fill="currentColor" />
            {isRunning ? 'Executando...' : 'Executar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeSimulator;
