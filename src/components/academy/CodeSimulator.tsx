import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, RotateCcw, Terminal, Code2, Copy, Check, Eye, Layout } from 'lucide-react';

interface CodeSimulatorProps {
  initialCode?: string;
  previewHtml?: string;
  onExecute?: (code: string, output: string[]) => void;
}

type ViewMode = 'editor' | 'preview';

const CodeSimulator: React.FC<CodeSimulatorProps> = ({ 
  initialCode = '', 
  previewHtml = '',
  onExecute 
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>(previewHtml ? 'preview' : 'editor');
  const consoleRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Auto-scroll para o final do console
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [output]);

  const runCode = () => {
    setIsRunning(true);
    
    if (viewMode === 'preview' && iframeRef.current) {
      // Se estiver no modo preview, vamos recarregar o iframe com o código injetado
      // Isso garante que o código rode no contexto do DOM do projeto
      const fullHtml = `
        <html>
          <head>
            <style>
              body { font-family: system-ui, -apple-system, sans-serif; margin: 0; padding: 20px; color: #333; background: #fff; }
              * { box-sizing: border-box; }
            </style>
          </head>
          <body>
            ${previewHtml}
            <script>
              // Captura de logs para o console da Marina
              const originalLog = console.log;
              console.log = (...args) => {
                window.parent.postMessage({ type: 'LOG', content: args.map(String).join(' ') }, '*');
                originalLog(...args);
              };
              window.onerror = (msg) => {
                window.parent.postMessage({ type: 'ERROR', content: msg }, '*');
              };

              try {
                ${code}
              } catch (err) {
                console.error(err);
                window.parent.postMessage({ type: 'ERROR', content: err.message }, '*');
              }
            </script>
          </body>
        </html>
      `;
      
      setOutput([]); // Limpa o console ao rodar no preview
      iframeRef.current.srcdoc = fullHtml;
      
      setTimeout(() => setIsRunning(false), 500);
      return;
    }

    // Modo Editor Tradicional (Console apenas)
    const logs: string[] = [];
    const originalLog = console.log;
    
    console.log = (...args: any[]) => {
      const formatted = args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ');
      logs.push(formatted);
      originalLog(...args);
    };

    try {
      // eslint-disable-next-line no-eval
      eval(code);
      setOutput(logs);
      if (onExecute) onExecute(code, logs);
    } catch (err: any) {
      setOutput([...logs, `❌ Erro: ${err.message}`]);
    } finally {
      console.log = originalLog;
      setIsRunning(false);
    }
  };

  // Escuta mensagens do iframe (logs e erros)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'LOG') {
        setOutput(prev => [...prev, event.data.content]);
      } else if (event.data.type === 'ERROR') {
        setOutput(prev => [...prev, `❌ Erro: ${event.data.content}`]);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const resetCode = () => {
    setCode(initialCode);
    setOutput([]);
    if (iframeRef.current) iframeRef.current.srcdoc = `<html><body>${previewHtml}</body></html>`;
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] rounded-xl border border-border-dim overflow-hidden shadow-2xl">
      {/* Barra de Título / Tabs estilo VS Code */}
      <div className="h-9 bg-[#252526] flex items-center px-2 border-b border-[#333] justify-between">
        <div className="flex items-center gap-1 h-full">
          <div className="flex gap-1.5 px-2 mr-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          
          <button 
            onClick={() => setViewMode('editor')}
            className={`h-full flex items-center px-4 text-[11px] gap-2 transition-colors border-t-2 ${
              viewMode === 'editor' 
              ? 'bg-[#1e1e1e] border-blue-500 text-white' 
              : 'bg-transparent border-transparent text-[#9aa0a6] hover:bg-white/5'
            }`}
          >
            <Code2 size={12} className="text-yellow-500" />
            <span>script.js</span>
          </button>

          {previewHtml && (
            <button 
              onClick={() => setViewMode('preview')}
              className={`h-full flex items-center px-4 text-[11px] gap-2 transition-colors border-t-2 ${
                viewMode === 'preview' 
                ? 'bg-[#1e1e1e] border-blue-500 text-white' 
                : 'bg-transparent border-transparent text-[#9aa0a6] hover:bg-white/5'
              }`}
            >
              <Eye size={12} className="text-blue-400" />
              <span>Visualizar Projeto</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 pr-2">
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
      <div className="flex-1 flex flex-col overflow-hidden min-h-[300px]">
        <div className="flex-1 flex overflow-hidden relative">
          <AnimatePresence mode="wait">
            {viewMode === 'editor' ? (
              <motion.div 
                key="editor"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex-1 flex relative bg-[#1e1e1e]"
              >
                <div className="absolute left-0 top-0 bottom-0 w-10 bg-[#1e1e1e] border-r border-[#333] flex flex-col items-center py-4 text-[10px] text-[#858585] select-none">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <span key={i} className="leading-6">{i + 1}</span>
                  ))}
                </div>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  spellCheck={false}
                  className="flex-1 pl-12 pr-4 py-4 bg-transparent text-[#d4d4d4] font-mono text-sm leading-6 outline-none resize-none"
                  placeholder="// Digite seu código JavaScript aqui..."
                />
              </motion.div>
            ) : (
              <motion.div 
                key="preview"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex-1 bg-white flex flex-col"
              >
                {/* Browser Mock Header */}
                <div className="h-8 bg-[#f3f3f3] border-b flex items-center px-3 gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                  </div>
                  <div className="flex-1 max-w-md h-5 bg-white rounded border border-gray-200 text-[10px] flex items-center px-2 text-gray-400">
                    localhost:3000/marina-finance
                  </div>
                </div>
                <iframe
                  ref={iframeRef}
                  title="Project Preview"
                  className="flex-1 w-full border-none"
                  srcDoc={`<html><body>${previewHtml || '<div style="padding:20px; color:#666;">Clique em "Executar" para carregar o projeto.</div>'}</body></html>`}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Console Fixo na Base (Opaco e Reduzido) */}
        <div className="h-32 flex flex-col bg-[#1e1e1e] border-t border-[#333]">
          <div className="h-7 bg-[#252526] border-b border-[#333] flex items-center px-3 justify-between">
            <div className="flex items-center gap-2">
              <Terminal size={10} className="text-[#9aa0a6]" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#9aa0a6]">Console Output</span>
            </div>
            {output.length > 0 && (
              <button onClick={() => setOutput([])} className="text-[9px] text-[#9aa0a6] hover:text-white">Limpar</button>
            )}
          </div>
          <div 
            ref={consoleRef}
            className="flex-1 p-3 font-mono text-[11px] overflow-y-auto space-y-1"
          >
            {output.length === 0 ? (
              <span className="text-[#444] italic">Aguardando execução...</span>
            ) : (
              output.map((line, i) => (
                <div key={i} className="text-[#d4d4d4] whitespace-pre-wrap flex gap-2">
                  <span className="text-[#858585] shrink-0 font-bold">{'>'}</span>
                  <span>{line}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Barra de Status / Controles */}
      <div className="h-10 bg-[#007acc] flex items-center justify-between px-4">
        <div className="flex items-center gap-4 text-[10px] text-white/90">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>{viewMode === 'editor' ? 'Editing' : 'Previewing'}</span>
          </div>
          <span className="opacity-70">JS / HTML / CSS</span>
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
            {isRunning ? 'Carregando...' : 'Executar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeSimulator;
