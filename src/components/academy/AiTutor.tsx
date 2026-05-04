import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Send, GraduationCap, Loader2 } from 'lucide-react';
import { chatWithOpenRouter } from '../../services/aiService';
import { TutorMessage } from '../../types/academy';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface AiTutorProps {
  lessonTitle: string;
  lessonContent: string;
  onClose: () => void;
  apiKey: string;
  activeModel: string;
}

const AiTutor: React.FC<AiTutorProps> = ({ lessonTitle, lessonContent, onClose, apiKey, activeModel }) => {
  const [messages, setMessages] = useState<TutorMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || !apiKey) return;

    const userMsg: TutorMessage = { id: Date.now().toString(), role: 'user', content: input.trim(), timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const systemPrompt = `Você é a Marina, tutora de IA dentro da Marina Academy.
O aluno está estudando a lição: "${lessonTitle}".

Conteúdo da lição (resumo):
${lessonContent}

REGRAS:
- Responda SEMPRE em português do Brasil
- Seja didática, paciente e encoraje o aluno
- Use exemplos práticos de PowerShell quando relevante
- Se a pergunta for sobre algo fora da lição, responda mas sugira que o conteúdo será visto em lições futuras
- Use markdown com syntax highlighting para código
- Seja concisa mas completa`;

    const history = [
      { role: 'system' as const, content: systemPrompt },
      ...messages.map(m => ({ role: m.role as 'user' | 'assistant', content: m.content })),
      { role: 'user' as const, content: input.trim() }
    ];

    const assistantId = (Date.now() + 1).toString();
    const assistantMsg: TutorMessage = { id: assistantId, role: 'assistant', content: '', timestamp: Date.now() };
    setMessages(prev => [...prev, assistantMsg]);

    try {
      let accumulated = '';
      await chatWithOpenRouter(apiKey, activeModel, history, (chunk) => {
        accumulated += chunk;
        setMessages(prev => prev.map(m => m.id === assistantId ? { ...m, content: accumulated } : m));
      });
    } catch (e) {
      setMessages(prev => prev.map(m => m.id === assistantId ? { ...m, content: '❌ Erro ao conectar com a IA. Verifique sua API Key.' } : m));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 360, opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      className="border-l border-border-dim bg-surface flex flex-col overflow-hidden shrink-0 h-full"
    >
      {/* Header */}
      <div className="p-3 border-b border-border-dim flex items-center justify-between bg-background/50 shrink-0">
        <div className="flex items-center gap-2">
          <GraduationCap size={16} className="text-primary" />
          <span className="text-xs font-bold">Tutora Marina</span>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-[#333537] rounded-lg transition-colors text-[#9aa0a6]">
          <X size={14} />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.length === 0 && (
          <div className="text-center py-8 space-y-2">
            <GraduationCap size={28} className="text-[#444746] mx-auto" />
            <p className="text-[11px] text-[#9aa0a6]">Tem alguma dúvida sobre esta lição?</p>
            <p className="text-[10px] text-[#444746]">Pergunte qualquer coisa!</p>
          </div>
        )}
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-3 py-2 rounded-2xl text-xs ${
              msg.role === 'user'
                ? 'bg-primary text-background rounded-br-sm'
                : 'bg-background border border-border-dim rounded-bl-sm'
            }`}>
              {msg.role === 'assistant' ? (
                <div className="prose prose-invert prose-xs max-w-none prose-p:text-xs prose-p:my-1 prose-code:text-[10px] prose-pre:text-[10px] prose-pre:p-2">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content || '...'}</ReactMarkdown>
                </div>
              ) : (
                <p>{msg.content}</p>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <Loader2 size={14} className="animate-spin text-primary" />
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-border-dim shrink-0">
        <div className="flex items-center gap-2 bg-background rounded-xl border border-border-dim px-3 py-2 focus-within:border-primary transition-colors">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Pergunte à Marina..."
            className="flex-1 bg-transparent text-xs outline-none text-[#e3e3e3] placeholder:text-[#444746]"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className={`p-1.5 rounded-lg transition-all ${input.trim() && !isLoading ? 'text-primary hover:bg-primary/10' : 'text-[#444746]'}`}
          >
            <Send size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AiTutor;
