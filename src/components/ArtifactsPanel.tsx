import React from 'react';
import { X, Copy, Edit3, Download, Code, FileText, Share2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface Artifact {
  id: string;
  type: 'code' | 'markdown' | 'html';
  content: string;
  title: string;
  language?: string;
}

interface ArtifactsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  artifact: Artifact | null;
  onEdit: (content: string) => void;
}

export const ArtifactsPanel: React.FC<ArtifactsPanelProps> = ({
  isOpen,
  onClose,
  artifact,
  onEdit
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editContent, setEditContent] = React.useState('');

  React.useEffect(() => {
    if (artifact) setEditContent(artifact.content);
  }, [artifact]);

  const handleCopy = () => {
    navigator.clipboard.writeText(isEditing ? editContent : artifact.content);
    nativeBridge.haptic('success');
    // Poderia mostrar um toast aqui
  };

  const handleDownload = () => {
    const content = isEditing ? editContent : artifact.content;
    const extension = artifact.type === 'html' ? 'html' : artifact.type === 'code' ? 'txt' : 'txt';
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${artifact.title.replace(/\s+/g, '_').toLowerCase()}.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    nativeBridge.haptic('success');
  };

  if (!artifact) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop for Mobile */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] md:hidden"
          />

          {/* Panel */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[500px] lg:w-[700px] bg-surface border-l border-border-dim z-[120] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="h-16 border-b border-border-dim flex items-center justify-between px-6 bg-background/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-xl text-primary">
                  {artifact.type === 'code' ? <Code size={18} /> : <FileText size={18} />}
                </div>
                <div>
                  <h3 className="text-sm font-bold truncate max-w-[150px] md:max-w-[300px]">{artifact.title}</h3>
                  <p className="text-[10px] text-[#9aa0a6] uppercase tracking-wider">{artifact.type}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className={`p-2 rounded-lg transition-colors ${isEditing ? 'bg-primary text-background' : 'hover:bg-[#333537] text-[#9aa0a6]'}`}
                  title="Editar"
                >
                  <Edit3 size={18} />
                </button>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-[#333537] rounded-lg transition-colors text-[#9aa0a6]"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-hidden relative flex flex-col">
              {isEditing ? (
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="flex-1 w-full p-6 bg-[#131314] text-[#e3e3e3] font-mono text-sm outline-none resize-none leading-relaxed"
                  spellCheck={false}
                />
              ) : (
                <div className="flex-1 overflow-auto p-6 bg-[#131314]">
                  {artifact.type === 'code' || artifact.type === 'html' ? (
                    <div className="h-full flex flex-col">
                      <iframe
                        title="Preview"
                        srcDoc={artifact.content}
                        className="w-full h-full bg-white rounded-xl shadow-inner border-none"
                        sandbox="allow-scripts"
                      />
                    </div>
                  ) : (
                    <div className="prose prose-invert max-w-none">
                       <pre className="whitespace-pre-wrap text-sm text-[#e3e3e3] leading-relaxed font-sans">
                         {artifact.content}
                       </pre>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer / Actions */}
            <div className="p-4 bg-background/50 border-t border-border-dim flex items-center justify-between">
              <div className="flex gap-2">
                <button 
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 bg-surface border border-border-dim rounded-xl text-xs font-bold hover:text-white transition-all active:scale-95"
                >
                  <Copy size={14} />
                  <span>Copiar</span>
                </button>
                <button 
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-surface border border-border-dim rounded-xl text-xs font-bold hover:text-white transition-all active:scale-95"
                >
                  <Download size={14} />
                  <span>Baixar</span>
                </button>
              </div>
              
              {isEditing && (
                <button 
                  onClick={() => {
                    onEdit(editContent);
                    setIsEditing(false);
                  }}
                  className="px-6 py-2 bg-primary text-background font-bold rounded-xl text-xs hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  Salvar Alterações
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
