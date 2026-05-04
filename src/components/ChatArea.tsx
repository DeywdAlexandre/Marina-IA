import React from 'react';
import { 
  Menu, 
  Settings as SettingsIcon, 
  Search, 
  Columns, 
  Globe, 
  Palette, 
  Plus, 
  Zap, 
  Download, 
  Share2, 
  Copy, 
  FileUp, 
  Mic, 
  Send, 
  Image as ImageIcon, 
  X,
  ChevronDown,
  Sparkles,
  DollarSign,
  FileText,
  Camera,
  Headphones
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import MessageItem from './MessageItem';
import { ChatSession, Message } from '../types/expo';

interface ChatAreaProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  setShowSettings: (show: boolean) => void;
  currentSession: ChatSession | undefined;
  sessions: ChatSession[];
  isStreaming: boolean;
  isSpeaking: string | null;
  handleSpeak: (text: string, id: string) => void;
  marinaAvatar: string;
  ChartRenderer: React.FC<{ content: string }>;
  scrollRef: React.RefObject<HTMLDivElement>;
  input: string;
  setInput: (input: string) => void;
  handleSendMessage: () => void;
  handleMicClick: () => void;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  attachedImage: string | null;
  setAttachedImage: (image: string | null) => void;
  isSearchEnabled: boolean;
  setIsSearchEnabled: (enabled: boolean) => void;
  isComparisonMode: boolean;
  setIsComparisonMode: (mode: boolean) => void;
  comparisonModelIds: string[];
  toggleComparisonModel: (id: string) => void;
  availableModels: any[];
  activeModel: string;
  setActiveModel: (id: string) => void;
  showModelList: boolean;
  setShowModelList: (show: boolean) => void;
  chatSearchTerm: string;
  setChatSearchTerm: (term: string) => void;
  handleExportPDF: () => void;
  handleExportTXT: () => void;
  isListening: boolean;
  selectedPersonaId: string | null;
  setSelectedPersonaId: (id: string | null) => void;
  personas: any[];
  isPromptLibraryOpen: boolean;
  setIsPromptLibraryOpen: (open: boolean) => void;
  promptTemplates: any[];
  handleSaveTemplate: (title: string, content: string) => void;
  handleDeleteTemplate: (id: string) => void;
  PromptLibraryComponent: React.FC<any>;
  totalCost: number;
  onPromoteArtifact: (content: string, title?: string, type?: 'code' | 'markdown' | 'html') => void;
  indexedFiles: any[];
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveDoc: (id: string) => void;
  onCameraClick: () => void;
  setIsVoiceModeOpen: (open: boolean) => void;
  isVoiceModeOpen: boolean;
}

export const ChatArea: React.FC<ChatAreaProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  setShowSettings,
  currentSession,
  sessions,
  isStreaming,
  isSpeaking,
  handleSpeak,
  marinaAvatar,
  ChartRenderer,
  scrollRef,
  input,
  setInput,
  handleSendMessage,
  handleMicClick,
  handleImageUpload,
  attachedImage,
  setAttachedImage,
  isSearchEnabled,
  setIsSearchEnabled,
  isComparisonMode,
  setIsComparisonMode,
  comparisonModelIds,
  toggleComparisonModel,
  availableModels,
  activeModel,
  setActiveModel,
  showModelList,
  setShowModelList,
  chatSearchTerm,
  setChatSearchTerm,
  handleExportPDF,
  handleExportTXT,
  isListening,
  selectedPersonaId,
  setSelectedPersonaId,
  personas,
  isPromptLibraryOpen,
  setIsPromptLibraryOpen,
  promptTemplates,
  handleSaveTemplate,
  handleDeleteTemplate,
  PromptLibraryComponent,
  totalCost,
  onPromoteArtifact,
  indexedFiles,
  onFileUpload,
  onRemoveDoc,
  onCameraClick,
  setIsVoiceModeOpen,
  isVoiceModeOpen
}) => {
  return (
    <main className="flex-1 flex flex-col min-w-0 relative bg-background">
      {/* Top Bar */}
      <header className="h-16 border-b border-border-dim flex items-center justify-between px-4 md:px-8 bg-surface/50 backdrop-blur-md sticky top-0 z-30">
        <div className="flex items-center gap-4">
          {!isSidebarOpen && (
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-[#333537] rounded-full transition-colors text-[#9aa0a6] hover:text-white">
              <Menu size={20} />
            </button>
          )}
          
          <div className="relative">
            <button 
              onClick={() => setShowModelList(!showModelList)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-[#333537] rounded-full transition-all group border border-transparent hover:border-[#444746]"
            >
              <span className="text-sm font-bold text-[#e3e3e3]">
                {availableModels.find(m => m.id === activeModel)?.name || 'Selecionar Modelo'}
              </span>
              <ChevronDown size={14} className={`text-[#9aa0a6] transition-transform ${showModelList ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {showModelList && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute left-0 top-full mt-2 w-72 bg-surface border border-[#444746] rounded-2xl shadow-2xl overflow-hidden z-50 p-2"
                >
                  <div className="space-y-1 max-h-96 overflow-y-auto">
                    {availableModels.map(model => (
                      <button
                        key={model.id}
                        onClick={() => {
                          setActiveModel(model.id);
                          setShowModelList(false);
                        }}
                        className={`w-full flex flex-col items-start px-4 py-3 rounded-xl transition-all ${activeModel === model.id ? 'bg-primary/10 text-primary border border-primary/20' : 'hover:bg-[#333537] text-[#9aa0a6] hover:text-white'}`}
                      >
                        <span className="text-sm font-bold">{model.name}</span>
                        <span className="text-[10px] opacity-70 font-mono truncate w-full">{model.id}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-background/30 rounded-full border border-border-dim/50 text-[#9aa0a6]">
            <DollarSign size={12} className="text-green-500/70" />
            <span className="text-[10px] font-mono font-bold">{totalCost.toFixed(4)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center bg-background/50 border border-border-dim rounded-full px-3 py-1.5 focus-within:border-primary transition-all">
            <Search size={14} className="text-[#9aa0a6]" />
            <input 
              type="text" 
              placeholder="Pesquisar no chat..." 
              value={chatSearchTerm}
              onChange={e => setChatSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-xs px-2 w-32 md:w-48 text-[#e3e3e3]"
            />
          </div>

          <button 
            onClick={() => setIsVoiceModeOpen(!isVoiceModeOpen)}
            className={`p-2 rounded-full transition-all ${isVoiceModeOpen ? 'bg-primary/20 text-primary shadow-lg shadow-primary/10' : 'hover:bg-[#333537] text-[#9aa0a6]'}`}
            title="Modo de Voz Imersivo"
          >
            <Headphones size={18} />
          </button>

          <button 
            onClick={() => setIsComparisonMode(!isComparisonMode)}
            className={`p-2 rounded-full transition-all ${isComparisonMode ? 'bg-primary/20 text-primary shadow-lg shadow-primary/10' : 'hover:bg-[#333537] text-[#9aa0a6]'}`}
            title="Comparar Modelos"
          >
            <Columns size={18} />
          </button>

          <button 
            onClick={() => setShowSettings(true)}
            className="p-2 hover:bg-[#333537] rounded-full transition-colors text-[#9aa0a6] hover:text-white"
            title="Configurações"
          >
            <SettingsIcon size={18} />
          </button>
        </div>
      </header>

      {/* Comparison Drawer */}
      <AnimatePresence>
        {isComparisonMode && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-surface/30 border-b border-border-dim overflow-hidden px-8 py-3"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Modo Comparação (Máx 3)</span>
              <span className="text-[10px] text-[#9aa0a6]">{comparisonModelIds.length}/3 selecionados</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {availableModels.map(model => (
                <button
                  key={model.id}
                  onClick={() => toggleComparisonModel(model.id)}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-bold transition-all border ${
                    comparisonModelIds.includes(model.id) 
                      ? 'bg-primary border-primary text-background' 
                      : 'border-border-dim text-[#9aa0a6] hover:border-primary/50'
                  }`}
                >
                  {model.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Messages List */}
      <div 
        ref={scrollRef}
        id="chat-history"
        className="flex-1 overflow-y-auto px-4 md:px-8 py-8 scroll-smooth"
      >
        {!currentSession || currentSession.messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center max-w-2xl mx-auto text-center space-y-8">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-blue-600 p-0.5 shadow-2xl shadow-primary/20"
            >
              <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
                <img src={marinaAvatar} alt="Marina" className="w-20 h-20 object-cover rounded-full" />
              </div>
            </motion.div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-white">Como posso ajudar hoje?</h2>
              <p className="text-[#9aa0a6] text-sm max-w-md mx-auto leading-relaxed">
                Eu sou a Marina, sua assistente inteligente. Posso analisar dados, gerar imagens, criar códigos ou apenas conversar.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-8">
              {[
                { icon: <Zap size={16} />, title: 'Análise de Dados', desc: 'Envie um JSON ou tabela para analisar' },
                { icon: <Palette size={16} />, title: 'Criatividade', desc: 'Peça para escrever um poema ou script' },
                { icon: <Globe size={16} />, title: 'Pesquisa Web', desc: 'Ative a busca para dados em tempo real' },
                { icon: <Download size={16} />, title: 'Exportação', desc: 'Gere relatórios em PDF ou TXT' }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-surface rounded-2xl border border-border-dim hover:border-primary/30 transition-all text-left group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-[10px] text-[#9aa0a6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {currentSession.messages
              .filter(m => !chatSearchTerm || m.content.toLowerCase().includes(chatSearchTerm.toLowerCase()))
              .map((message) => (
              <MessageItem 
                key={message.id} 
                message={message} 
                isStreaming={isStreaming && currentSession.messages[currentSession.messages.length - 1].id === message.id} 
                isSpeaking={isSpeaking}
                handleSpeak={handleSpeak}
                marinaAvatar={marinaAvatar}
                ChartRenderer={ChartRenderer}
                onPromote={onPromoteArtifact}
              />
            ))}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 md:p-8 bg-gradient-to-t from-background to-transparent relative">
        <div className="max-w-4xl mx-auto space-y-4">
          
          <AnimatePresence>
            {attachedImage && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-center gap-3 p-3 bg-surface rounded-2xl border border-primary/30 w-fit shadow-xl"
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-[#444746]">
                  <img src={attachedImage} alt="Attached" className="w-full h-full object-cover" />
                </div>
                <div className="pr-4">
                  <p className="text-[10px] font-bold uppercase text-primary">Imagem Anexada</p>
                  <p className="text-[10px] text-[#9aa0a6]">Será enviada com o prompt</p>
                </div>
                <button onClick={() => setAttachedImage(null)} className="p-1.5 hover:bg-red-500/10 text-[#9aa0a6] hover:text-red-400 rounded-lg">
                  <X size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Documentos Indexados (RAG) */}
          <div className="flex flex-wrap gap-2 mb-2">
            {indexedFiles.map(file => (
              <motion.div 
                key={file.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full"
              >
                <FileText size={12} className="text-primary" />
                <span className="text-[10px] font-bold text-[#e3e3e3] truncate max-w-[120px]">{file.name}</span>
                <button onClick={() => onRemoveDoc(file.id)} className="p-0.5 hover:bg-primary/20 rounded-full text-primary">
                  <X size={12} />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <PromptLibraryComponent 
              isOpen={isPromptLibraryOpen}
              onClose={() => setIsPromptLibraryOpen(false)}
              templates={promptTemplates}
              onSelect={(content: string) => {
                setInput(content);
                setIsPromptLibraryOpen(false);
              }}
              onSave={handleSaveTemplate}
              onDelete={handleDeleteTemplate}
            />

            <div className="bg-surface rounded-3xl border border-border-dim shadow-2xl focus-within:border-primary/50 transition-all overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border-dim/30">
                 <button 
                    onClick={() => setIsSearchEnabled(!isSearchEnabled)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold transition-all ${isSearchEnabled ? 'bg-primary text-background shadow-lg shadow-primary/20' : 'bg-background/50 text-[#9aa0a6] hover:text-white'}`}
                  >
                    <Globe size={12} />
                    <span>MARINA SEARCH</span>
                  </button>

                  <div className="h-4 w-[1px] bg-[#444746] mx-1"></div>
                  
                  <button 
                    onClick={() => setIsPromptLibraryOpen(!isPromptLibraryOpen)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold transition-all ${isPromptLibraryOpen ? 'bg-primary text-background' : 'bg-background/50 text-[#9aa0a6] hover:text-white'}`}
                  >
                    <Sparkles size={12} />
                    <span>TEMPLATES</span>
                  </button>

                  <div className="h-4 w-[1px] bg-[#444746] mx-1"></div>

                  <select 
                    value={selectedPersonaId || ''} 
                    onChange={e => setSelectedPersonaId(e.target.value || null)}
                    className="bg-transparent border-none text-[10px] font-bold text-[#9aa0a6] hover:text-white outline-none cursor-pointer"
                  >
                    <option value="">Personalidade Padrão</option>
                    {personas.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                  </select>

                  <div className="flex-1"></div>

                  <button onClick={handleExportPDF} className="p-1.5 text-[#9aa0a6] hover:text-white transition-colors" title="Exportar PDF">
                    <Download size={16} />
                  </button>
              </div>

            <div className="flex items-end gap-2 p-3">
              <label className="p-3 hover:bg-[#333537] rounded-2xl cursor-pointer text-[#9aa0a6] hover:text-white transition-colors">
                <FileUp size={22} />
                <input type="file" accept=".pdf,.txt,.json,image/*" onChange={onFileUpload} className="hidden" />
              </label>

              <button 
                onClick={onCameraClick}
                className="p-3 hover:bg-[#333537] rounded-2xl text-[#9aa0a6] hover:text-white transition-colors"
                title="Tirar Foto"
              >
                <Camera size={22} />
              </button>

              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Pergunte qualquer coisa ou anexe um arquivo..."
                rows={1}
                className="flex-1 bg-transparent border-none outline-none text-sm py-3 px-2 resize-none max-h-48 text-[#e3e3e3] placeholder:text-[#444746]"
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = target.scrollHeight + 'px';
                }}
              />

              <div className="flex items-center gap-1.5 pb-1 pr-1">
                <button 
                  onClick={handleMicClick}
                  className={`p-3 rounded-2xl transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'hover:bg-[#333537] text-[#9aa0a6] hover:text-white'}`}
                >
                  <Mic size={22} />
                </button>
                <button 
                  onClick={handleSendMessage}
                  disabled={(!input.trim() && !attachedImage) || isStreaming}
                  className={`p-3 rounded-2xl transition-all ${(!input.trim() && !attachedImage) || isStreaming ? 'bg-[#333537] text-[#444746]' : 'bg-primary text-background shadow-lg shadow-primary/20 hover:scale-105 active:scale-95'}`}
                >
                  <Send size={22} />
                </button>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-center text-[#444746]">
            Marina pode cometer erros. Considere verificar informações importantes.
          </p>
        </div>
      </div>
    </div>
  </main>
  );
};

export default ChatArea;
