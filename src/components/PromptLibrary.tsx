import React from 'react';
import { Sparkles, Plus, Trash2, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PromptTemplate } from '../types/expo';

interface PromptLibraryProps {
  isOpen: boolean;
  onClose: () => void;
  templates: PromptTemplate[];
  onSelect: (content: string) => void;
  onSave: (title: string, content: string) => void;
  onDelete: (id: string) => void;
}

export const PromptLibrary: React.FC<PromptLibraryProps> = ({
  isOpen,
  onClose,
  templates,
  onSelect,
  onSave,
  onDelete
}) => {
  const [isAdding, setIsAdding] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState('');
  const [newContent, setNewContent] = React.useState('');

  const handleAdd = () => {
    if (newTitle && newContent) {
      onSave(newTitle, newContent);
      setNewTitle('');
      setNewContent('');
      setIsAdding(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="absolute bottom-full left-0 w-full mb-4 z-50">
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="bg-surface border border-border-dim rounded-2xl shadow-2xl overflow-hidden max-h-[400px] flex flex-col"
          >
            <div className="p-4 border-b border-border-dim flex justify-between items-center bg-background/50">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-primary" />
                <h3 className="text-xs font-bold uppercase tracking-widest">Biblioteca de Prompts</h3>
              </div>
              <button onClick={onClose} className="p-1 hover:bg-[#333537] rounded-full">
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
              {templates.length === 0 && !isAdding && (
                <div className="text-center py-8 text-[#444746]">
                  <p className="text-xs italic">Nenhum prompt salvo ainda.</p>
                </div>
              )}

              {templates.map(t => (
                <div key={t.id} className="group relative bg-background/50 border border-border-dim p-3 rounded-xl hover:border-primary/50 transition-all cursor-pointer" onClick={() => onSelect(t.content)}>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-bold text-primary">{t.title}</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); onDelete(t.id); }}
                      className="opacity-0 group-hover:opacity-100 p-1 text-red-400 hover:bg-red-500/10 rounded-md transition-all"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                  <p className="text-[10px] text-[#9aa0a6] line-clamp-2 leading-relaxed">
                    {t.content}
                  </p>
                </div>
              ))}

              {isAdding && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-[#131314] border border-primary/30 p-4 rounded-xl space-y-3"
                >
                  <input 
                    type="text" 
                    placeholder="Título do Prompt" 
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    className="w-full bg-background border border-border-dim rounded-lg px-3 py-2 text-xs outline-none focus:border-primary"
                  />
                  <textarea 
                    placeholder="Conteúdo do prompt..." 
                    value={newContent}
                    onChange={e => setNewContent(e.target.value)}
                    className="w-full bg-background border border-border-dim rounded-lg px-3 py-2 text-xs outline-none focus:border-primary min-h-[80px] resize-none"
                  />
                  <div className="flex gap-2">
                    <button 
                      onClick={handleAdd}
                      className="flex-1 py-2 bg-primary text-background text-[10px] font-bold rounded-lg hover:bg-primary/90"
                    >
                      Salvar Template
                    </button>
                    <button 
                      onClick={() => setIsAdding(false)}
                      className="px-4 py-2 bg-[#333537] text-white text-[10px] font-bold rounded-lg"
                    >
                      Cancelar
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {!isAdding && (
              <div className="p-3 bg-background/30 border-t border-border-dim">
                <button 
                  onClick={() => setIsAdding(true)}
                  className="w-full flex items-center justify-center gap-2 py-2 border border-dashed border-primary/30 text-primary hover:bg-primary/5 rounded-xl transition-all text-[10px] font-bold uppercase"
                >
                  <Plus size={14} />
                  Novo Template
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
