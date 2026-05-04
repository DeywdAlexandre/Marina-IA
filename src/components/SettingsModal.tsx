import {
  Brain, 
  Trash2, 
  Files,
  FileText,
  Smartphone,
  Eye,
  EyeOff,
  Bell,
  BellOff,
  Volume2,
  VolumeX,
  Palette,
  Layers,
  Plus,
  Download,
  FileUp,
  ShieldCheck,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DEFAULT_MODELS } from '../services/aiService';
import { Fact, IndexedDocument } from '../types/expo';

interface SettingsModalProps {
  setShowSettings: (show: boolean) => void;
  apiKey: string;
  setApiKey: (key: string) => void;
  showApiKey: boolean;
  setShowApiKey: (show: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
  availableModels: any[];
  newModelId: string;
  setNewModelId: (id: string) => void;
  newModelName: string;
  setNewModelName: (name: string) => void;
  handleAddModel: () => void;
  handleRemoveModel: (id: string) => void;
  defaultModelId: string;
  handleSetDefaultModel: (id: string, e: React.MouseEvent) => void;
  handleExportBackup: () => void;
  handleImportBackup: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearAllData: () => void;
  notificationPermission: string;
  handleToggleNotifications: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  notifyOnComplete: boolean;
  setNotifyOnComplete: (notify: boolean) => void;
  setShowEasDashboard: (show: boolean) => void;
  biometricsEnabled: boolean;
  setBiometricsEnabled: (enabled: boolean) => void;
  facts: Fact[];
  onDeleteFact: (id: string) => void;
  indexedFiles: IndexedDocument[];
  onRemoveDoc: (id: string) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  setShowSettings,
  apiKey,
  setApiKey,
  showApiKey,
  setShowApiKey,
  theme,
  setTheme,
  availableModels,
  newModelId,
  setNewModelId,
  newModelName,
  setNewModelName,
  handleAddModel,
  handleRemoveModel,
  defaultModelId,
  handleSetDefaultModel,
  handleExportBackup,
  handleImportBackup,
  handleClearAllData,
  notificationPermission,
  handleToggleNotifications,
  soundEnabled,
  setSoundEnabled,
  notifyOnComplete,
  setNotifyOnComplete,
  setShowEasDashboard,
  biometricsEnabled,
  setBiometricsEnabled,
  facts,
  onDeleteFact,
  indexedFiles,
  onRemoveDoc
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-surface w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col rounded-3xl border border-border-dim shadow-2xl"
      >
        <div className="p-6 border-b border-[#444746] flex items-center justify-between bg-background/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl text-primary">
              <Smartphone size={20} />
            </div>
            <h2 className="text-xl font-bold">Configurações</h2>
          </div>
          <button onClick={() => setShowSettings(false)} className="p-2 hover:bg-[#333537] rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-8 space-y-10">
          {/* Seção API Key */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <ShieldCheck size={18} />
              <h3 className="font-bold text-sm uppercase tracking-widest">Segurança</h3>
            </div>
            <div className="bg-background/50 p-6 rounded-2xl border border-border-dim space-y-6">
              <div>
                <label className="block text-xs font-bold text-[#9aa0a6] mb-2 uppercase tracking-wider">OpenRouter API Key</label>
                <div className="relative">
                  <input
                    type={showApiKey ? "text" : "password"}
                    value={apiKey}
                    onChange={e => setApiKey(e.target.value)}
                    placeholder="sk-or-v1-..."
                    className="w-full bg-[#131314] text-white px-4 py-3 rounded-xl border border-border-dim focus:border-primary outline-none transition-all pr-12 font-mono text-sm"
                  />
                  <button 
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9aa0a6] hover:text-white"
                  >
                    {showApiKey ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-[#444746]">
                <button 
                  onClick={() => setBiometricsEnabled(!biometricsEnabled)}
                  className="w-full flex items-center justify-between p-4 bg-surface rounded-2xl border border-border-dim hover:bg-[#333537] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={18} className={biometricsEnabled ? "text-primary" : "text-[#9aa0a6]"} />
                    <div className="text-left">
                      <p className="text-xs font-bold">Bloqueio Biométrico</p>
                      <p className="text-[10px] text-[#9aa0a6]">Pedir digital ao abrir o app</p>
                    </div>
                  </div>
                  <div className={`w-8 h-4 rounded-full relative transition-colors ${biometricsEnabled ? 'bg-primary' : 'bg-[#444746]'}`}>
                    <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${biometricsEnabled ? 'right-0.5' : 'left-0.5'}`}></div>
                  </div>
                </button>
              </div>
            </div>
          </section>

          {/* Seção Memória e Biblioteca */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-primary">
              <Brain size={18} />
              <h3 className="font-bold text-sm uppercase tracking-widest">Conhecimento Local</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Memória da Marina */}
              <div className="bg-background/50 rounded-2xl border border-border-dim overflow-hidden flex flex-col">
                <div className="p-4 border-b border-border-dim bg-background/30 flex items-center gap-3">
                  <Brain size={16} className="text-primary" />
                  <h3 className="text-xs font-bold uppercase">Memória Seletiva</h3>
                </div>
                <div className="p-4 space-y-3 flex-1">
                  {facts.length === 0 ? (
                    <p className="text-[10px] text-[#9aa0a6] italic py-4">Nenhum fato aprendido.</p>
                  ) : (
                    facts.map(fact => (
                      <div key={fact.id} className="flex items-center justify-between gap-3 p-3 bg-surface rounded-xl border border-border-dim/50 group">
                        <span className="text-[10px] text-[#e3e3e3] flex-1 line-clamp-2">{fact.content}</span>
                        <button 
                          onClick={() => onDeleteFact(fact.id)}
                          className="p-1 text-red-400 hover:bg-red-500/10 rounded-lg"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Biblioteca de Documentos */}
              <div className="bg-background/50 rounded-2xl border border-border-dim overflow-hidden flex flex-col">
                <div className="p-4 border-b border-border-dim bg-background/30 flex items-center gap-3">
                  <Files size={16} className="text-primary" />
                  <h3 className="text-xs font-bold uppercase">Documentos (RAG)</h3>
                </div>
                <div className="p-4 space-y-3 flex-1">
                  {indexedFiles.length === 0 ? (
                    <p className="text-[10px] text-[#9aa0a6] italic py-4">Nenhum PDF indexado.</p>
                  ) : (
                    indexedFiles.map(file => (
                      <div key={file.id} className="flex items-center justify-between gap-3 p-3 bg-surface rounded-xl border border-border-dim/50 group">
                        <div className="flex items-center gap-2 flex-1 overflow-hidden">
                          <FileText size={12} className="text-[#9aa0a6] flex-shrink-0" />
                          <span className="text-[10px] text-[#e3e3e3] truncate">{file.name}</span>
                        </div>
                        <button 
                          onClick={() => onRemoveDoc(file.id)}
                          className="p-1 text-red-400 hover:bg-red-500/10 rounded-lg"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Seção Aparência */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Palette size={18} />
              <h3 className="font-bold text-sm uppercase tracking-widest">Aparência</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { id: 'default', name: 'Dark Marina', color: '#131314' },
                { id: 'emerald', name: 'Esmeralda', color: '#061a15' },
                { id: 'cyberpunk', name: 'Cyberpunk', color: '#0d0d0d' },
                { id: 'ocean', name: 'Oceano', color: '#0a192f' },
                { id: 'sunset', name: 'Pôr do Sol', color: '#1a0f0f' },
                { id: 'lavender', name: 'Lavanda', color: '#121019' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${theme === t.id ? 'border-primary bg-primary/10' : 'border-border-dim hover:bg-[#333537]'}`}
                >
                  <div className="w-8 h-8 rounded-full shadow-inner" style={{ backgroundColor: t.color }}></div>
                  <span className="text-xs font-medium">{t.name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Gerenciamento de Modelos */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Layers size={18} />
              <h3 className="font-bold text-sm uppercase tracking-widest">Modelos de IA</h3>
            </div>
            <div className="bg-background/50 p-6 rounded-2xl border border-border-dim space-y-6">
              <div className="space-y-3">
                {availableModels.map(model => (
                  <div key={model.id} className="flex items-center justify-between p-3 bg-surface rounded-xl border border-border-dim group">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold">{model.name}</span>
                      <span className="text-[10px] text-[#9aa0a6] font-mono">{model.id}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={(e) => handleSetDefaultModel(model.id, e)}
                        className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-tighter transition-all ${defaultModelId === model.id ? 'bg-primary text-background' : 'bg-[#333537] text-[#9aa0a6] hover:text-white'}`}
                      >
                        {defaultModelId === model.id ? 'Padrão' : 'Definir Padrão'}
                      </button>
                      {!DEFAULT_MODELS.some(m => m.id === model.id) && (
                        <button onClick={() => handleRemoveModel(model.id)} className="p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg">
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-[#444746] space-y-3">
                <p className="text-[10px] font-bold text-[#9aa0a6] uppercase tracking-widest">Adicionar Modelo Customizado</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={newModelName}
                    onChange={e => setNewModelName(e.target.value)}
                    placeholder="Nome amigável"
                    className="bg-[#131314] text-xs px-4 py-3 rounded-xl border border-border-dim focus:border-primary outline-none"
                  />
                  <input
                    type="text"
                    value={newModelId}
                    onChange={e => setNewModelId(e.target.value)}
                    placeholder="ID do OpenRouter (ex: openai/gpt-4o)"
                    className="bg-[#131314] text-xs px-4 py-3 rounded-xl border border-border-dim focus:border-primary outline-none"
                  />
                </div>
                <button 
                  onClick={handleAddModel}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-background font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  <Plus size={16} />
                  <span>Adicionar Modelo</span>
                </button>
              </div>
            </div>
          </section>

          {/* Seção Notificações e Sons */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Bell size={18} />
              <h3 className="font-bold text-sm uppercase tracking-widest">Notificações e Feedback</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <button 
                onClick={handleToggleNotifications}
                className="flex items-center justify-between p-4 bg-background/50 rounded-2xl border border-border-dim hover:bg-[#333537] transition-all"
              >
                <div className="flex items-center gap-3">
                  {notificationPermission === 'granted' ? <Bell size={18} className="text-green-400" /> : <BellOff size={18} className="text-[#9aa0a6]" />}
                  <span className="text-xs font-medium">Notificações Desktop</span>
                </div>
                <div className={`w-8 h-4 rounded-full relative transition-colors ${notificationPermission === 'granted' ? 'bg-primary' : 'bg-[#444746]'}`}>
                   <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${notificationPermission === 'granted' ? 'right-0.5' : 'left-0.5'}`}></div>
                </div>
              </button>

              <button 
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="flex items-center justify-between p-4 bg-background/50 rounded-2xl border border-border-dim hover:bg-[#333537] transition-all"
              >
                <div className="flex items-center gap-3">
                  {soundEnabled ? <Volume2 size={18} className="text-primary" /> : <VolumeX size={18} className="text-[#9aa0a6]" />}
                  <span className="text-xs font-medium">Efeitos Sonoros</span>
                </div>
                <div className={`w-8 h-4 rounded-full relative transition-colors ${soundEnabled ? 'bg-primary' : 'bg-[#444746]'}`}>
                   <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${soundEnabled ? 'right-0.5' : 'left-0.5'}`}></div>
                </div>
              </button>
            </div>
          </section>

          {/* Gestão de Dados */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Download size={18} />
              <h3 className="font-bold text-sm uppercase tracking-widest">Dados e Backup</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={handleExportBackup}
                className="flex items-center gap-3 p-4 bg-background/50 rounded-2xl border border-border-dim hover:bg-[#333537] transition-all text-left"
              >
                <Download size={18} className="text-blue-400" />
                <div>
                  <p className="text-xs font-bold">Exportar Backup</p>
                  <p className="text-[10px] text-[#9aa0a6]">Salvar conversas e modelos</p>
                </div>
              </button>
              
              <label className="flex items-center gap-3 p-4 bg-background/50 rounded-2xl border border-border-dim hover:bg-[#333537] transition-all cursor-pointer">
                <FileUp size={18} className="text-purple-400" />
                <div>
                  <p className="text-xs font-bold">Restaurar Backup</p>
                  <p className="text-[10px] text-[#9aa0a6]">Carregar arquivo .json</p>
                </div>
                <input type="file" accept=".json" onChange={handleImportBackup} className="hidden" />
              </label>

              <button 
                onClick={handleClearAllData}
                className="flex items-center gap-3 p-4 bg-red-500/5 rounded-2xl border border-red-500/20 hover:bg-red-500/10 transition-all text-left sm:col-span-2"
              >
                <Trash2 size={18} className="text-red-500" />
                <div>
                  <p className="text-xs font-bold text-red-500">Limpar tudo</p>
                  <p className="text-[10px] text-red-400/60">Apagar permanentemente todos os dados locais</p>
                </div>
              </button>
            </div>
          </section>

          {/* Atalhos para Desenvolvedor */}
           <section className="pt-6 border-t border-[#444746]">
              <button 
                onClick={() => { setShowEasDashboard(true); setShowSettings(false); }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-surface border border-border-dim text-[#9aa0a6] hover:text-white hover:bg-[#333537] rounded-xl transition-all text-xs font-bold uppercase tracking-widest"
              >
                <Smartphone size={16} />
                Painel EAS / Mobile
              </button>
           </section>
        </div>
      </motion.div>
    </div>
  );
};

export default SettingsModal;
