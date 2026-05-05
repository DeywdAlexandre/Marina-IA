import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, RotateCcw, Terminal, Code2, Copy, Check, Eye, FileJson, FileCode, Hash } from 'lucide-react';

interface CodeFiles {
  html: string;
  js: string;
  css: string;
}

interface CodeSimulatorProps {
  initialHtml?: string;
  initialJs?: string;
  initialCss?: string;
  onExecute?: (files: CodeFiles, output: string[]) => void;
}

type TabType = 'html' | 'js' | 'css' | 'preview';

const CodeSimulator: React.FC<CodeSimulatorProps> = ({ 
  initialHtml = '<div id="app">\n  <h1>Olá Mundo!</h1>\n  <p>Comece a editar para ver a mágica.</p>\n</div>', 
  initialJs = '// Seu código JS aqui\nconsole.log("Sistema Pronto!");',
  initialCss = 'body {\n  font-family: sans-serif;\n  padding: 20px;\n}\nh1 {\n  color: #3178C6;\n}',
  onExecute 
}) => {
  const [files, setFiles] = useState<CodeFiles>({
    html: initialHtml,
    js: initialJs,
    css: initialCss
  });
  
  const [activeTab, setActiveTab] = useState<TabType>('js');
  const [output, setOutput] = useState<{type: 'LOG' | 'ERROR' | 'WARN' | 'INFO', content: string}[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const consoleRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Auto-scroll para o final do console
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [output]);

  const runCode = (switchToPreview = true) => {
    if (!iframeRef.current) return;
    
    setIsRunning(true);
    setOutput([{ type: 'INFO', content: 'Iniciando execução...' }]); 

    const fullHtml = `
      <html>
        <head>
          <style>
            ${files.css}
          </style>
        </head>
        <body>
          ${files.html}
          <script>
            (function() {
              const captureLog = (type, args) => {
                try {
                  const content = args.map(arg => {
                    if (typeof arg === 'object' && arg !== null) {
                      try { return JSON.stringify(arg, null, 2); } catch (e) { return '[Object]'; }
                    }
                    return String(arg);
                  }).join(' ');

                  window.parent.postMessage({ 
                    source: 'marina-sandbox',
                    type, 
                    content 
                  }, '*');
                } catch (e) {}
              };

              const originalLog = console.log;
              const originalError = console.error;
              const originalWarn = console.warn;
              const originalInfo = console.info;

              console.log = (...args) => { captureLog('LOG', args); originalLog(...args); };
              console.error = (...args) => { captureLog('ERROR', args); originalError(...args); };
              console.warn = (...args) => { captureLog('WARN', args); originalWarn(...args); };
              console.info = (...args) => { captureLog('INFO', args); originalInfo(...args); };

              window.onerror = (msg, url, line, col, error) => {
                captureLog('ERROR', [msg + ' (Linha: ' + line + ')']);
              };

              try {
                ${files.js}
              } catch (err) {
                captureLog('ERROR', [err.message]);
              }
            })();
          </script>
        </body>
      </html>
    `;
    
    if (switchToPreview && activeTab !== 'preview') {
      setActiveTab('preview');
    }

    setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.srcdoc = fullHtml;
      }
      setIsRunning(false);
    }, 50);
    
    if (onExecute) onExecute(files, []);
  };

  // Escuta mensagens do iframe e atalhos de teclado
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Filtro rigoroso para garantir que só pegamos mensagens do nosso sandbox
      if (event.data && event.data.source === 'marina-sandbox') {
        const { type, content } = event.data;
        if (['LOG', 'ERROR', 'WARN', 'INFO'].includes(type)) {
          setOutput(prev => [...prev, { type, content }]);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runCode(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [files, activeTab]); // Re-bind apenas quando necessário para manter runCode atualizado

  const resetCode = () => {
    setFiles({ html: initialHtml, js: initialJs, css: initialCss });
    setOutput([]);
    if (iframeRef.current) iframeRef.current.srcdoc = '';
  };

  const updateActiveFileContent = (value: string) => {
    if (activeTab === 'preview') return;
    setFiles(prev => ({ ...prev, [activeTab]: value }));
  };

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] rounded-xl border border-border-dim overflow-hidden shadow-2xl">
      {/* Barra de Título / Tabs estilo VS Code */}
      <div className="h-9 bg-[#252526] flex items-center px-2 border-b border-[#333] justify-between">
        <div className="flex items-center h-full overflow-x-auto no-scrollbar">
          {/* Windows Controls */}
          <div className="flex gap-1.5 px-3 mr-1 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          
          <TabButton 
            id="html" 
            active={activeTab === 'html'} 
            onClick={() => setActiveTab('html')} 
            icon={<FileCode size={12} className="text-orange-500" />}
            label="index.html"
          />
          <TabButton 
            id="css" 
            active={activeTab === 'css'} 
            onClick={() => setActiveTab('css')} 
            icon={<Hash size={12} className="text-blue-400" />}
            label="style.css"
          />
          <TabButton 
            id="js" 
            active={activeTab === 'js'} 
            onClick={() => setActiveTab('js')} 
            icon={<FileJson size={12} className="text-yellow-400" />}
            label="script.js"
          />
          <TabButton 
            id="preview" 
            active={activeTab === 'preview'} 
            onClick={() => setActiveTab('preview')} 
            icon={<Eye size={12} className="text-green-400" />}
            label="Visualizar"
          />
        </div>

        <div className="flex items-center gap-2 pr-2">
          <button 
            onClick={() => {
              if (activeTab === 'preview') return;
              navigator.clipboard.writeText(files[activeTab as keyof CodeFiles]);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="p-1.5 hover:bg-[#333] rounded text-[#9aa0a6] transition-colors"
          >
            {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      {/* Área Principal */}
      <div className="flex-1 flex flex-col overflow-hidden min-h-[300px]">
        <div className="flex-1 flex overflow-hidden relative">
          <AnimatePresence mode="wait">
            {activeTab !== 'preview' && (
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex relative bg-[#1e1e1e]"
              >
                <div className="absolute left-0 top-0 bottom-0 w-10 bg-[#1e1e1e] border-r border-[#333] flex flex-col items-center py-4 text-[10px] text-[#858585] select-none">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <span key={i} className="leading-6">{i + 1}</span>
                  ))}
                </div>
                <textarea
                  value={files[activeTab as keyof CodeFiles]}
                  onChange={(e) => updateActiveFileContent(e.target.value)}
                  spellCheck={false}
                  className="flex-1 pl-12 pr-4 py-4 bg-transparent text-[#d4d4d4] font-mono text-sm leading-6 outline-none resize-none"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Iframe de execução sempre presente para permitir 'Executar no Console' em qualquer aba */}
          <div className={`absolute inset-0 bg-white flex flex-col ${activeTab === 'preview' ? 'z-10' : 'z-[-1] invisible'}`}>
            {/* Browser UI Mock */}
            <div className="h-8 bg-[#f3f3f3] border-b flex items-center px-3 gap-2 shrink-0">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-gray-300" />
                <div className="w-2 h-2 rounded-full bg-gray-300" />
              </div>
              <div className="flex-1 max-w-md h-5 bg-white rounded border border-gray-200 text-[9px] flex items-center px-2 text-gray-500 font-mono">
                https://marina-sandbox.local/project
              </div>
            </div>
            <iframe
              ref={iframeRef}
              title="Live Preview"
              className="flex-1 w-full border-none"
            />
          </div>
        </div>

        {/* Console Fixo na Base */}
        <div className="h-32 flex flex-col bg-[#0c0c0c] border-t border-[#333]">
          <div className="h-7 bg-[#1e1e1e] border-b border-[#333] flex items-center px-3 justify-between">
            <div className="flex items-center gap-2">
              <Terminal size={10} className="text-green-500" />
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
              <span className="text-[#333] italic">Logs do sistema aparecerão aqui ao clicar em Executar.</span>
            ) : (
              output.map((line, i) => (
                <div key={i} className={`whitespace-pre-wrap flex gap-2 ${
                  line.type === 'ERROR' ? 'text-red-400' :
                  line.type === 'WARN' ? 'text-yellow-400' :
                  line.type === 'INFO' ? 'text-blue-400' :
                  'text-[#d4d4d4]'
                }`}>
                  <span className={`${line.type === 'ERROR' ? 'text-red-500' : 'text-green-600'} shrink-0`}>➜</span>
                  <span>{line.type === 'LOG' ? line.content : `${line.type === 'ERROR' ? '❌ ' : line.type === 'WARN' ? '⚠️ ' : 'ℹ️ '}${line.content}`}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="h-10 bg-[#007acc] flex items-center justify-between px-4">
        <div className="flex items-center gap-4 text-[10px] text-white/90">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="capitalize">{activeTab === 'preview' ? 'Visualizando' : `Editando ${activeTab}`}</span>
          </div>
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
            onClick={() => runCode(false)}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-medium transition-colors border border-white/10"
          >
            <Terminal size={12} className="text-green-400" />
            Executar no Console
          </button>

          <button
            onClick={() => runCode(true)}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-4 py-1 bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white rounded text-xs font-bold transition-all shadow-lg active:scale-95"
          >
            <Play size={12} fill="currentColor" />
            {isRunning ? 'Compilando...' : 'Executar'}
          </button>
        </div>
      </div>
    </div>
  );
};

interface TabButtonProps {
  id: string;
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className={`h-full flex items-center px-4 text-[11px] gap-2 transition-colors border-t-2 shrink-0 ${
      active 
      ? 'bg-[#1e1e1e] border-blue-500 text-white' 
      : 'bg-transparent border-transparent text-[#9aa0a6] hover:bg-white/5'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default CodeSimulator;
