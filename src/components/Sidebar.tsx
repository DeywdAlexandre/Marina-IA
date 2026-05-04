import React from 'react';
import { 
  Plus, 
  Menu, 
  History, 
  Trash2, 
  Folder as FolderIcon, 
  FolderPlus, 
  ChevronRight,
  ChevronDown,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatSession, Folder } from '../types/expo';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  sessions: ChatSession[];
  currentSessionId: string | null;
  setCurrentSessionId: (id: string | null) => void;
  folders: Folder[];
  isCreatingFolder: boolean;
  setIsCreatingFolder: (creating: boolean) => void;
  newFolderName: string;
  setNewFolderName: (name: string) => void;
  handleNewChat: (folderId?: string) => void;
  confirmCreateFolder: () => void;
  toggleFolder: (folderId: string) => void;
  handleDeleteFolder: (folderId: string, e: React.MouseEvent) => void;
  handleMoveToFolder: (sessionId: string, folderId: string | undefined) => void;
  handleDeleteSession: (id: string, e: React.MouseEvent) => void;
  deletingSessionId: string | null;
  marinaAvatar: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  sessions,
  currentSessionId,
  setCurrentSessionId,
  folders,
  isCreatingFolder,
  setIsCreatingFolder,
  newFolderName,
  setNewFolderName,
  handleNewChat,
  confirmCreateFolder,
  toggleFolder,
  handleDeleteFolder,
  handleMoveToFolder,
  handleDeleteSession,
  deletingSessionId,
  marinaAvatar
}) => {
  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <>
          {/* Backdrop for mobile */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
          />
          <motion.aside 
            initial={{ x: -280, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -280, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed md:relative inset-y-0 left-0 w-[280px] border-r border-border-dim flex flex-col bg-surface z-50 md:z-10"
          >
            <div className="p-6 border-b border-[#444746] flex items-center justify-between">
              <div className="flex items-center gap-3 text-[#e3e3e3]">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-primary/30 shadow-md">
                  <img src={marinaAvatar} alt="Marina" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h1 className="font-bold text-xl tracking-tighter">Marina</h1>
              </div>
              <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-2 hover:bg-[#333537] rounded-full">
                <Menu size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-2">
              <button 
                onClick={() => handleNewChat()}
                className="flex items-center gap-3 px-5 py-3 bg-background hover:bg-[#333537] rounded-full transition-colors w-full mb-6 border border-border-dim shadow-sm"
              >
                <Plus size={20} />
                <span className="text-sm font-medium">Nova conversa</span>
              </button>

              <div className="space-y-6">
                {/* Pastas */}
                <div>
                  <div className="flex items-center justify-between px-2 mb-3">
                    <p className="text-[0.65rem] font-bold text-[#9aa0a6] uppercase tracking-[0.2em]">Pastas</p>
                    <button onClick={() => setIsCreatingFolder(true)} className="p-1 hover:bg-[#333537] rounded-lg transition-colors text-[#9aa0a6] hover:text-white" title="Nova Pasta">
                      <FolderPlus size={16} />
                    </button>
                  </div>

                  {isCreatingFolder && (
                    <div className="px-2 mb-3">
                      <input
                        autoFocus
                        type="text"
                        value={newFolderName}
                        onChange={e => setNewFolderName(e.target.value)}
                        onKeyDown={e => {
                          if (e.key === 'Enter') confirmCreateFolder();
                          if (e.key === 'Escape') setIsCreatingFolder(false);
                        }}
                        onBlur={() => confirmCreateFolder()}
                        placeholder="Nome da pasta..."
                        className="w-full bg-[#131314] text-sm text-white px-3 py-2 rounded-lg border border-[#444746] focus:border-primary outline-none"
                      />
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    {folders.map(folder => (
                      <div key={folder.id} className="space-y-1">
                        <div 
                          onClick={() => toggleFolder(folder.id)}
                          className="flex items-center justify-between px-3 py-2 hover:bg-[#333537]/50 rounded-xl cursor-pointer group transition-colors"
                        >
                          <div className="flex items-center gap-3 text-[#9aa0a6] group-hover:text-white">
                            <ChevronRight size={14} className={`transition-transform duration-200 ${folder.isExpanded ? 'rotate-90' : ''}`} />
                            <FolderIcon size={18} className={folder.isExpanded ? "text-[#8ab4f8]" : ""} />
                            <span className="text-sm font-medium">{folder.name}</span>
                          </div>
                          <button onClick={(e) => handleDeleteFolder(folder.id, e)} className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/10 hover:text-red-400 rounded-lg transition-all">
                            <Trash2 size={14} />
                          </button>
                        </div>
                        
                        {folder.isExpanded && (
                          <div className="ml-4 space-y-2 border-l border-[#444746] pl-3 py-1">
                            {sessions.filter(s => s.folderId === folder.id).map(s => (
                              <div key={s.id} className="relative group">
                                <button 
                                  onClick={() => {
                                    setCurrentSessionId(s.id);
                                    if (window.innerWidth < 768) setIsSidebarOpen(false);
                                  }}
                                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-xs transition-all text-left truncate pr-10 ${
                                    currentSessionId === s.id 
                                      ? 'bg-primary/20 text-primary shadow-md border border-primary/30' 
                                      : 'hover:bg-primary/10 bg-background/30'
                                  }`}
                                >
                                  <History size={14} className="flex-shrink-0 opacity-70" />
                                  <span className="truncate">{s.title || 'Nova conversa'}</span>
                                </button>
                                <div className="absolute right-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center bg-[#1e1f20]/90 rounded-lg p-0.5">
                                  <select 
                                    value={s.folderId || ''} 
                                    onChange={(e) => handleMoveToFolder(s.id, e.target.value || undefined)}
                                    className="bg-transparent border-none text-[10px] outline-none text-[#9aa0a6] w-6 cursor-pointer"
                                    title="Mover para..."
                                  >
                                    <option value="">Geral</option>
                                    {folders.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
                                  </select>
                                  <button 
                                    onClick={(e) => handleDeleteSession(s.id, e)}
                                    className={`p-1.5 transition-all rounded-md ${deletingSessionId === s.id ? 'text-red-500' : 'text-[#9aa0a6] hover:text-red-400'}`}
                                  >
                                    <Trash2 size={12} />
                                  </button>
                                </div>
                              </div>
                            ))}
                            {sessions.filter(s => s.folderId === folder.id).length === 0 && (
                              <p className="text-[10px] text-[#444746] italic py-1 px-3">Vazio</p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Geral */}
                <div>
                  <p className="px-2 text-[0.65rem] font-bold text-[#9aa0a6] uppercase tracking-[0.2em] mb-3">Conversas</p>
                  <div className="space-y-2">
                    {sessions.filter(s => !s.folderId).map(s => (
                      <div key={s.id} className="relative group">
                        <button 
                          onClick={() => {
                            setCurrentSessionId(s.id);
                            if (window.innerWidth < 768) setIsSidebarOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm transition-all text-left truncate pr-12 ${
                            currentSessionId === s.id 
                              ? 'bg-primary/20 text-primary shadow-lg shadow-primary/10 border border-primary/30' 
                              : 'hover:bg-primary/10 bg-background/50 border border-border-dim/30'
                          }`}
                        >
                          <History size={18} className="flex-shrink-0 opacity-70" />
                          <span className="truncate font-medium">{s.title || 'Nova conversa'}</span>
                        </button>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1">
                           <select 
                              value={s.folderId || ''} 
                              onChange={(e) => handleMoveToFolder(s.id, e.target.value || undefined)}
                              className="bg-[#1e1f20] border border-[#444746] rounded-md text-[10px] outline-none text-[#9aa0a6] h-7 px-1 cursor-pointer"
                              title="Mover para pasta"
                            >
                              <option value="">Geral</option>
                              {folders.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
                            </select>
                          <button 
                            onClick={(e) => handleDeleteSession(s.id, e)}
                            className={`p-2 transition-all rounded-xl ${deletingSessionId === s.id ? 'bg-red-500 text-white' : 'text-[#9aa0a6] hover:bg-red-500/10 hover:text-red-400'}`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-[#444746] bg-background/50">
                <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#333537] cursor-pointer transition-colors">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Zap size={16} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-white">Plano Free</p>
                        <p className="text-[10px] text-[#9aa0a6]">Tokens ilimitados</p>
                    </div>
                </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
