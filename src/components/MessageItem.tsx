import React from 'react';
import { 
  Copy, 
  Volume2, 
  VolumeX, 
  Trash2, 
  Smartphone,
  User,
  Share2,
  Maximize2
} from 'lucide-react';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Message } from '../types/expo';

interface MessageItemProps {
  message: Message;
  isStreaming: boolean;
  isSpeaking: string | null;
  handleSpeak: (text: string, id: string) => void;
  marinaAvatar: string;
  ChartRenderer: React.FC<{ content: string }>;
  onPromote: (content: string, title?: string, type?: 'code' | 'markdown' | 'html') => void;
}

export const MessageItem: React.FC<MessageItemProps> = ({
  message,
  isStreaming,
  isSpeaking,
  handleSpeak,
  marinaAvatar,
  ChartRenderer,
  onPromote
}) => {
  const isUser = message.role === 'user';
  const hasCode = message.content.includes('```');
  const isLong = message.content.length > 500;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handlePromote = () => {
    let type: 'code' | 'markdown' | 'html' = 'markdown';
    if (message.content.includes('<!DOCTYPE html>') || message.content.includes('<html')) {
      type = 'html';
    } else if (hasCode) {
      type = 'code';
    }
    
    const title = message.content.match(/^# (.*)/m)?.[1] || (type === 'code' ? 'Código Gerado' : 'Documento');
    onPromote(message.content, title, type);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} gap-2 group mb-6`}
    >
      <div className={`flex items-end gap-3 max-w-[85%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border ${isUser ? 'border-primary/30' : 'border-[#444746]'}`}>
          {isUser ? (
            <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary">
              <User size={16} />
            </div>
          ) : (
            <img src={marinaAvatar} alt="Marina" className="w-full h-full object-cover" />
          )}
        </div>
        
        <div className={`relative px-5 py-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
          isUser 
            ? 'bg-primary/10 text-[#e3e3e3] rounded-br-none border border-primary/20' 
            : 'bg-surface text-[#e3e3e3] rounded-bl-none border border-border-dim'
        }`}>
          {!isUser && message.modelName && (
            <div className="flex items-center gap-1.5 mb-2 px-2 py-0.5 bg-background/50 rounded-full w-fit border border-[#444746]">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-[#9aa0a6] uppercase tracking-wider">{message.modelName}</span>
            </div>
          )}

          {message.image && (
            <div className="mb-3 rounded-xl overflow-hidden border border-[#444746]">
              <img src={message.image} alt="Upload" className="max-w-full h-auto max-h-64 object-contain bg-black/20" />
            </div>
          )}

          <div className="prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-[#131314] prose-pre:border prose-pre:border-[#444746]">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.content}
            </ReactMarkdown>
          </div>
          
          <ChartRenderer content={message.content} />

          {isStreaming && !isUser && !message.content && (
            <div className="flex gap-1 py-2">
              <div className="w-1.5 h-1.5 bg-[#9aa0a6] rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-[#9aa0a6] rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1.5 h-1.5 bg-[#9aa0a6] rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          )}
        </div>
      </div>

      <div className={`flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity px-11 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <button 
          onClick={() => handleCopy(message.content)}
          className="p-1.5 hover:bg-[#333537] rounded-lg text-[#9aa0a6] hover:text-white transition-colors"
          title="Copiar"
        >
          <Copy size={14} />
        </button>
        {(hasCode || isLong) && !isUser && (
          <button 
            onClick={handlePromote}
            className="p-1.5 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary transition-colors flex items-center gap-1.5 px-2"
            title="Ver no Artifact"
          >
            <Maximize2 size={12} />
            <span className="text-[10px] font-bold uppercase">Artifact</span>
          </button>
        )}
        {!isUser && (
          <button 
            onClick={() => handleSpeak(message.content, message.id)}
            className={`p-1.5 hover:bg-[#333537] rounded-lg transition-colors ${isSpeaking === message.id ? 'text-primary animate-pulse' : 'text-[#9aa0a6] hover:text-white'}`}
            title="Ouvir"
          >
            {isSpeaking === message.id ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        )}
        <span className="text-[10px] text-[#444746] font-medium">
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </motion.div>
  );
};

export default MessageItem;
