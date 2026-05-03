import React, { useState, useRef, useEffect } from 'react';
import { 
  Menu, 
  Plus, 
  Send, 
  Mic, 
  Volume2, 
  VolumeX,
  Copy,
  FileUp, 
  Settings as SettingsIcon,
  ChevronDown,
  User,
  History,
  Trash2,
  AlertCircle,
  Bell,
  BellOff,
  Star,
  Globe,
  Eye,
  EyeOff,
  Search,
  Download,
  Share2,
  ShieldCheck,
  FileText,
  BarChart2,
  Folder as FolderIcon,
  FolderPlus,
  ChevronRight,
  MoreVertical,
  Palette
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { DEFAULT_MODELS, chatWithOpenRouter } from './services/aiService';
import { Message, ChatSession, Folder } from './types/expo';
import { storageService } from './services/storageService';

export default function App() {
  const [apiKey, setApiKey] = useState(storageService.loadApiKey());
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [availableModels, setAvailableModels] = useState(() => {
    const custom = storageService.loadCustomModels();
    return [...DEFAULT_MODELS, ...custom];
  });
  const [defaultModelId, setDefaultModelId] = useState<string>(() => {
    return localStorage.getItem('maria_default_model') || DEFAULT_MODELS[0].id;
  });
  const [activeModel, setActiveModel] = useState(localStorage.getItem('maria_default_model') || availableModels[0]?.id || DEFAULT_MODELS[0].id);
  const [input, setInput] = useState('');
  const [sessions, setSessions] = useState<ChatSession[]>(storageService.loadSessions());
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showModelList, setShowModelList] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [modelSearchQuery, setModelSearchQuery] = useState('');
  const [deletingSessionId, setDeletingSessionId] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState<string | null>(null);
  const [chatSearchTerm, setChatSearchTerm] = useState('');
  const [folders, setFolders] = useState<Folder[]>(storageService.loadFolders());
  const [editingFolderId, setEditingFolderId] = useState<string | null>(null);
  const [newFolderName, setNewFolderName] = useState('');
  const MARIA_AVATAR = "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=200&h=200&auto=format&fit=crop";
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string>(() => {
    return localStorage.getItem('maria_voice_uri') || '';
  });
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>(
    typeof Notification !== 'undefined' ? Notification.permission : 'default'
  );
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notifyOnComplete, setNotifyOnComplete] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('maria_theme') || 'default');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('maria_theme', theme);
  }, [theme]);

  // New model management state
  const [newModelId, setNewModelId] = useState('');
  const [newModelName, setNewModelName] = useState('');

  const scrollRef = useRef<HTMLDivElement>(null);

  const currentSession = sessions.find(s => s.id === currentSessionId);

  useEffect(() => {
    storageService.saveApiKey(apiKey);
  }, [apiKey]);

  useEffect(() => {
    // Apenas salva sessões que têm mensagens ou a sessão atual (se for nova)
    const sessionsToSave = sessions.filter(s => s.messages.length > 0 || s.id === currentSessionId);
    storageService.saveSessions(sessionsToSave);
  }, [sessions, currentSessionId]);

  useEffect(() => {
    storageService.saveFolders(folders);
  }, [folders]);

  useEffect(() => {
    const customOnly = availableModels.filter(m => !DEFAULT_MODELS.some(d => d.id === m.id));
    storageService.saveCustomModels(customOnly);
  }, [availableModels]);

  const handleAddModel = () => {
    if (!newModelId.trim() || !newModelName.trim()) return;
    if (availableModels.some(m => m.id === newModelId)) {
        alert("Este ID de modelo já existe.");
        return;
    }
    const nm = { id: newModelId.trim(), name: newModelName.trim() };
    setAvailableModels([...availableModels, nm]);
    setNewModelId('');
    setNewModelName('');
  };

  const handleRemoveModel = (id: string) => {
    if (DEFAULT_MODELS.some(m => m.id === id)) {
        alert("Não é possível remover modelos padrão.");
        return;
    }
    setAvailableModels(availableModels.filter(m => m.id !== id));
    if (activeModel === id) {
        setActiveModel(DEFAULT_MODELS[0].id);
    }
  };

  const handleDeleteSession = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (deletingSessionId === id) {
      const updatedSessions = sessions.filter(s => s.id !== id);
      setSessions(updatedSessions);
      if (currentSessionId === id) {
        setCurrentSessionId(null);
      }
      setDeletingSessionId(null);
    } else {
      setDeletingSessionId(id);
      setTimeout(() => {
        setDeletingSessionId(prev => prev === id ? null : prev);
      }, 3000);
    }
  };

  const handleMicClick = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert("Seu navegador não suporta reconhecimento de voz.");
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(prev => prev ? `${prev} ${transcript}` : transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleSpeak = (text: string, messageId: string) => {
    if (typeof window === 'undefined') return;

    if (isSpeaking === messageId) {
      window.speechSynthesis.cancel();
      setIsSpeaking(null);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance();
    
    // Filtra emojis e símbolos markdown
    // Regex para emojis: combina uma vasta gama de caracteres unicode de emojis
    const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F191}-\u{1F251}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F171}\u{1F17E}-\u{1F17F}\u{1F18E}\u{3030}\u{2B50}\u{2B55}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{3297}\u{3299}\u{303D}\u{00A9}\u{00AE}\u{2122}\u{23F3}]/gu;
    const cleanText = text
      .replace(emojiRegex, '')
      .replace(/[\*\#\`]/g, '')
      .trim();
    
    utterance.text = cleanText;
    utterance.lang = 'pt-BR';
    
    // Aplicar voz selecionada
    if (selectedVoiceURI) {
      const voice = availableVoices.find(v => v.voiceURI === selectedVoiceURI);
      if (voice) utterance.voice = voice;
    }

    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsSpeaking(messageId);
    utterance.onend = () => setIsSpeaking(null);
    utterance.onerror = () => setIsSpeaking(null);

    window.speechSynthesis.speak(utterance);
  };

  const handleExportPDF = async () => {
    if (!currentSession) return;
    const element = document.getElementById('chat-history');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: '#131314',
        scale: 2
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Maria_Chat_${currentSession.title.replace(/\s+/g, '_')}.pdf`);
    } catch (err) {
      console.error("Export PDF error:", err);
      alert("Erro ao exportar PDF.");
    }
  };

  const handleExportTXT = () => {
    if (!currentSession) return;
    const content = currentSession.messages
      .map(m => `${m.role === 'user' ? 'Você' : 'Maria'} (${new Date(m.timestamp).toLocaleString()}):\n${m.content}\n\n`)
      .join('---\n\n');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Maria_Chat_${currentSession.title.replace(/\s+/g, '_')}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleClearAllData = () => {
    if (confirm("VOCÊ TEM CERTEZA? Isso apagará todas as conversas e configurações localmente. Esta ação não pode ser desfeita e os dados NÃO estão na nuvem.")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  // Componente para renderizar gráficos se o texto contiver dados JSON de exemplo
  const ChartRenderer = ({ content }: { content: string }) => {
    try {
      // Procura por blocos de código que pareçam dados de gráfico
      // Exemplo: ```chart-bar [{"label": "A", "value": 10}] ```
      const match = content.match(/```(chart-bar|chart-line|chart-pie)\s*([\s\S]*?)\s*```/);
      if (!match) return null;

      const type = match[1];
      const data = JSON.parse(match[2]);

      return (
        <div className="my-4 h-64 w-full bg-[#1e1f20] p-4 rounded-2xl border border-[#444746] overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            {type === 'chart-bar' ? (
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444746" />
                <XAxis dataKey="label" stroke="#9aa0a6" fontSize={10} />
                <YAxis stroke="#9aa0a6" fontSize={10} />
                <Tooltip contentStyle={{ backgroundColor: '#1e1f20', borderColor: '#444746', color: '#e3e3e3' }} />
                <Bar dataKey="value" fill="#8ab4f8" radius={[4, 4, 0, 0]} />
              </BarChart>
            ) : type === 'chart-line' ? (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444746" />
                <XAxis dataKey="label" stroke="#9aa0a6" fontSize={10} />
                <YAxis stroke="#9aa0a6" fontSize={10} />
                <Tooltip contentStyle={{ backgroundColor: '#1e1f20', borderColor: '#444746', color: '#e3e3e3' }} />
                <Line type="monotone" dataKey="value" stroke="#8ab4f8" strokeWidth={2} />
              </LineChart>
            ) : (
              <PieChart>
                <Pie data={data} dataKey="value" nameKey="label" cx="50%" cy="50%" outerRadius={60}>
                  {data.map((_: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={['#8ab4f8', '#9b72cb', '#d96570', '#81c995'][index % 4]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            )}
          </ResponsiveContainer>
        </div>
      );
    } catch (e) {
      return null;
    }
  };

  const handleToggleNotifications = async () => {
    if (typeof Notification === 'undefined') {
      alert("Seu navegador não suporta notificações.");
      return;
    }

    // Detect if we are in an iframe
    const isInIframe = window.self !== window.top;
    if (isInIframe && Notification.permission === 'default') {
      alert("Para ativar notificações, abra o aplicativo em uma nova aba (ícone no topo direito) devido às restrições de segurança do navegador.");
      return;
    }

    if (Notification.permission === 'denied') {
      alert("As notificações foram bloqueadas no seu navegador. Por favor, ative-as nas configurações do site (ícone de cadeado na barra de endereços).");
      return;
    }

    const permission = await Notification.requestPermission();
    setNotificationPermission(permission);

    if (permission === 'granted') {
      new Notification("Maria IA", {
        body: "Notificações ativadas com sucesso!",
        icon: MARIA_AVATAR
      });
    }
  };

  const handleSetDefaultModel = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setDefaultModelId(id);
    localStorage.setItem('maria_default_model', id);
  };

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      // Filtrar apenas vozes em português para facilitar ou mostrar todas
      setAvailableVoices(voices);
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  useEffect(() => {
    // Iniciar com uma nova conversa se não houver nenhuma ou se a última tiver mensagens
    if (sessions.length === 0) {
      handleNewChat();
    } else if (sessions[0].messages.length > 0) {
      handleNewChat();
    } else {
      setCurrentSessionId(sessions[0].id);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentSession?.messages, isStreaming]);

  const handleNewChat = (folderId?: string) => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: 'Nova conversa',
      messages: [],
      modelId: activeModel,
      folderId
    };
    setSessions([newSession, ...sessions]);
    setCurrentSessionId(newSession.id);
  };

  const handleCreateFolder = () => {
    const name = prompt("Nome da pasta:");
    if (name) {
      const newFolder: Folder = {
        id: Date.now().toString(),
        name,
        isExpanded: true
      };
      setFolders([...folders, newFolder]);
    }
  };

  const handleMoveToFolder = (sessionId: string, folderId: string | undefined) => {
    setSessions(sessions.map(s => s.id === sessionId ? { ...s, folderId } : s));
  };

  const toggleFolder = (folderId: string) => {
    setFolders(folders.map(f => f.id === folderId ? { ...f, isExpanded: !f.isExpanded } : f));
  };

  const handleDeleteFolder = (folderId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Deseja apagar esta pasta? As conversas dentro dela serão movidas para 'Geral'.")) {
      setFolders(folders.filter(f => f.id !== folderId));
      setSessions(sessions.map(s => s.id === folderId ? { ...s, folderId: undefined } : s));
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || !apiKey || isStreaming) return;

    let sessionId = currentSessionId;
    if (!sessionId) {
      const newSession: ChatSession = {
        id: Date.now().toString(),
        title: input.slice(0, 30),
        messages: [],
        modelId: activeModel
      };
      setSessions([newSession, ...sessions]);
      setCurrentSessionId(newSession.id);
      sessionId = newSession.id;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: Date.now()
    };

    setSessions(prev => prev.map(s => 
      s.id === sessionId ? { ...s, messages: [...s.messages, userMessage] } : s
    ));
    setInput('');
    setIsStreaming(true);

    const assistantMessageId = (Date.now() + 1).toString();
    const assistantMessage: Message = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      timestamp: Date.now()
    };

    setSessions(prev => prev.map(s => 
      s.id === sessionId ? { ...s, messages: [...s.messages, assistantMessage] } : s
    ));

    try {
      // Usamos o histórico da sessão atual SE ela já existir, senão começamos vazia
      const currentSessionObj = sessions.find(s => s.id === sessionId);
      
      // Se a pesquisa estiver ativada, usamos o modelo de busca
      const searchModelId = 'perplexity/llama-3.1-sonar-small-128k-online';
      const modelToUse = isSearchEnabled ? searchModelId : activeModel;

      const history = [
        ...(currentSessionObj?.messages || []).map(m => ({ role: m.role, content: m.content })),
        { role: userMessage.role, content: userMessage.content }
      ];

      let accumulated = "";
      await chatWithOpenRouter(apiKey, modelToUse, history, (chunk) => {
        accumulated += chunk;
        setSessions(prev => prev.map(s => 
          s.id === sessionId ? {
            ...s,
            messages: s.messages.map(m => 
              m.id === assistantMessageId ? { ...m, content: accumulated } : m
            )
          } : s
        ));
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsStreaming(false);

      // Notify user if enabled and tab is hidden
      if (notifyOnComplete && Notification.permission === 'granted' && document.hidden) {
        new Notification("Maria IA", {
          body: "Terminei de processar sua resposta!",
          icon: MARIA_AVATAR,
          tag: 'response-ready'
        });
      }
    }
  };

  return (
    <div className="flex h-screen bg-background text-[#e3e3e3] font-sans">
      {/* Sidebar - Desktop/Mobile-Drawer */}
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
                    <img src={MARIA_AVATAR} alt="Maria" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <h1 className="font-bold text-xl tracking-tighter">Maria</h1>
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
                      <button onClick={handleCreateFolder} className="p-1 hover:bg-[#333537] rounded-lg transition-colors text-[#9aa0a6] hover:text-white" title="Nova Pasta">
                        <FolderPlus size={16} />
                      </button>
                    </div>
                    
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
                                <option value="">Mover</option>
                                {folders.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
                              </select>
                            <button 
                              onClick={(e) => handleDeleteSession(s.id, e)}
                              className={`p-2 transition-all rounded-xl border shadow-sm active:scale-95 ${
                                deletingSessionId === s.id 
                                  ? 'bg-red-500 text-white border-red-600 animate-pulse' 
                                  : 'bg-[#1e1f20] text-[#9aa0a6] hover:text-red-400 border-[#444746]'
                              }`}
                              title={deletingSessionId === s.id ? "Confirmar exclusão" : "Apagar"}
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

            <div className="mt-auto p-4 border-t border-[#444746] space-y-2">
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#333537] rounded-full text-sm transition-colors"
              >
                <SettingsIcon size={18} />
                <span>Configurações</span>
              </button>
              <div className="px-4 py-2 flex items-center gap-2 text-xs text-[#9aa0a6]">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Maria IA: Ativa</span>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-6 z-20">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-[#333537] rounded-full transition-colors">
              <Menu size={24} />
            </button>
            <div 
              onClick={() => setShowModelList(!showModelList)}
              className="flex items-center gap-2 bg-[#1e1f20] px-4 py-1.5 rounded-full border border-[#444746] cursor-pointer hover:bg-[#333537] relative"
            >
              <span className="text-sm font-medium">{availableModels.find(m => m.id === activeModel)?.name || 'Selecionar Modelo'}</span>
              <ChevronDown size={16} className={`text-[#9aa0a6] transition-transform ${showModelList ? 'rotate-180' : ''}`} />
              
              <AnimatePresence>
                {showModelList && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-surface border border-border-dim rounded-xl shadow-2xl z-50 overflow-hidden py-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="px-3 py-2 border-b border-[#444746] mb-1">
                      <input 
                        autoFocus
                        type="text"
                        placeholder="Buscar modelo..."
                        value={modelSearchQuery}
                        onChange={(e) => setModelSearchQuery(e.target.value)}
                        className="w-full bg-[#131314] border border-[#444746] rounded-lg px-3 py-1.5 text-xs outline-none focus:border-[#8ab4f8] transition-colors"
                      />
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {availableModels
                        .filter(m => 
                          m.name.toLowerCase().includes(modelSearchQuery.toLowerCase()) || 
                          m.id.toLowerCase().includes(modelSearchQuery.toLowerCase())
                        )
                        .map(m => (
                          <div 
                            key={m.id}
                            className={`w-full flex items-center justify-between group/model ${activeModel === m.id ? 'bg-[#004a77]' : 'hover:bg-[#333537]'} transition-colors px-1`}
                          >
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveModel(m.id);
                                setShowModelList(false);
                                setModelSearchQuery('');
                              }}
                              className={`flex-1 text-left px-3 py-3 text-sm flex items-center justify-between min-w-0 ${activeModel === m.id ? 'text-[#c2e7ff]' : ''}`}
                            >
                              <span className="truncate">{m.name}</span>
                              {(m as any).isFree && (
                                  <span className="bg-green-500/20 text-green-400 text-[0.6rem] px-1.5 py-0.5 rounded font-bold uppercase ml-2 flex-shrink-0">Grátis</span>
                              )}
                            </button>
                            <button
                              onClick={(e) => handleSetDefaultModel(m.id, e)}
                              className={`p-2 transition-colors rounded-lg flex-shrink-0 mr-1 ${defaultModelId === m.id ? 'text-yellow-400 opacity-100' : 'text-[#9aa0a6] opacity-0 group-hover/model:opacity-100 hover:bg-white/10'}`}
                              title={defaultModelId === m.id ? "Modelo padrão" : "Definir como padrão"}
                            >
                              <Star size={14} fill={defaultModelId === m.id ? "currentColor" : "none"} />
                            </button>
                          </div>
                        ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {currentSession && currentSession.messages.length > 0 && (
              <div className="hidden md:flex items-center gap-2 mr-4 bg-[#1e1f20] rounded-full border border-[#444746] px-2 py-1">
                <Search size={14} className="ml-2 text-[#9aa0a6]" />
                <input 
                  type="text" 
                  placeholder="Buscar na conversa..." 
                  value={chatSearchTerm}
                  onChange={(e) => setChatSearchTerm(e.target.value)}
                  className="bg-transparent border-none outline-none text-xs py-1 w-32 focus:w-48 transition-all"
                />
              </div>
            )}
            <button 
              onClick={() => setIsSearchEnabled(!isSearchEnabled)}
              className={`p-2 rounded-full transition-all ${
                isSearchEnabled ? 'bg-blue-500/20 text-blue-400' : 'text-[#9aa0a6] hover:bg-[#333537]'
              }`}
              title={isSearchEnabled ? "Pesquisa Web Ativada" : "Ativar Pesquisa Web"}
            >
              <Globe size={20} className={isSearchEnabled ? 'animate-pulse' : ''} />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-blue-500/30">
               <img src={MARIA_AVATAR} alt="Maria" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </header>

        {/* Chat Area */}
        <div 
          ref={scrollRef}
          id="chat-history"
          className="flex-1 overflow-y-auto px-4 md:px-0 scroll-smooth"
        >
          {!currentSessionId || currentSession?.messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-24 h-24 rounded-full overflow-hidden mb-6 ring-4 ring-[#8ab4f8]/20 shadow-2xl"
              >
                <img src={MARIA_AVATAR} alt="Maria" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-medium mb-8 bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] bg-clip-text text-transparent tracking-tight font-sans"
              >
                Olá, eu sou a Maria.
              </motion.h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {[
                  "Explique como funciona o RAG no celular",
                  "Crie um itinerário de 3 dias para Tokyo",
                  "Como integrar TTS na Maria IA?",
                  "Me ajude a planejar meu app"
                ].map((prompt, i) => (
                  <button 
                    key={i}
                    onClick={() => {
                        setInput(prompt);
                    }}
                    className="p-4 bg-[#1e1f20] hover:bg-[#333537] rounded-2xl text-left text-sm border border-[#444746] transition-all hover:scale-[1.02]"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto py-10 space-y-12">
              <div className="flex items-center justify-between border-b border-[#444746] pb-4 mb-2">
                 <div className="flex items-center gap-2 text-[#9aa0a6]">
                    <BarChart2 size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest">{currentSession.title}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <button onClick={handleExportPDF} className="flex items-center gap-2 px-3 py-1.5 hover:bg-[#333537] rounded-full text-[0.65rem] font-bold uppercase bg-[#1e1f20] border border-[#444746] transition-colors">
                      <Download size={14} /> PDF
                    </button>
                    <button onClick={handleExportTXT} className="flex items-center gap-2 px-3 py-1.5 hover:bg-[#333537] rounded-full text-[0.65rem] font-bold uppercase bg-[#1e1f20] border border-[#444746] transition-colors">
                      <FileText size={14} /> TXT
                    </button>
                 </div>
              </div>
              {currentSession.messages
                .filter(m => chatSearchTerm === '' || m.content.toLowerCase().includes(chatSearchTerm.toLowerCase()))
                .map((m) => (
                <div key={m.id} className={`flex gap-6 ${m.role === 'user' ? 'justify-end' : ''}`}>
                  {m.role === 'assistant' && (
                    <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 mt-1 ring-2 ring-[#444746]/50 shadow-lg">
                      <img src={MARIA_AVATAR} alt="Maria" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  )}
                  <div className={`max-w-[85%] ${m.role === 'user' ? 'bg-[#333537] px-5 py-3 rounded-[2rem]' : ''}`}>
                    <div className="text-[1.05rem] leading-relaxed text-[#e3e3e3] markdown-body">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {m.content}
                      </ReactMarkdown>
                      <ChartRenderer content={m.content} />
                      {isStreaming && m.id === currentSession.messages[currentSession.messages.length - 1].id && (
                        <span className="inline-block w-2 h-4 bg-[#8ab4f8] animate-pulse ml-1 align-middle"></span>
                      )}
                    </div>
                    {m.role === 'assistant' && !isStreaming && (
                         <div className="flex items-center gap-4 mt-6 text-[#9aa0a6] border-t border-[#444746]/30 pt-4">
                            <button 
                              onClick={() => handleSpeak(m.content, m.id)}
                              className={`p-2 rounded-full transition-all flex items-center gap-2 text-xs font-medium ${isSpeaking === m.id ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-[#333537]'}`}
                            >
                              {isSpeaking === m.id ? <VolumeX size={18} /> : <Volume2 size={18} />}
                              {isSpeaking === m.id ? 'Parar' : 'Ouvir'}
                            </button>
                            <button 
                              onClick={() => navigator.clipboard.writeText(m.content)}
                              className="p-2 hover:bg-[#333537] rounded-full transition-colors flex items-center gap-2 text-xs font-medium"
                            >
                              <Copy size={18} />
                              Copiar
                            </button>
                         </div>
                    )}
                  </div>
                  {m.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center mt-1">
                      <User size={18} className="text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6">
          <div className="max-w-3xl mx-auto">
            <div className={`relative bg-[#1e1f20] border ${apiKey ? 'border-transparent' : 'border-red-500/50'} rounded-[2rem] p-2 focus-within:bg-[#333537] transition-all`}>
              <div className="flex items-end gap-2 px-2 py-1">
                <button className="p-3 hover:bg-[#444746] rounded-full text-[#e3e3e3]"><FileUp size={22} /></button>
                <textarea 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
                  placeholder="Digite uma mensagem aqui..."
                  className="flex-1 bg-transparent border-none focus:ring-0 text-base py-3 px-2 resize-none max-h-48 scrollbar-none"
                  rows={1}
                />
                <div className="flex items-center gap-1">
                  <button 
                    onClick={handleMicClick}
                    className={`p-3 rounded-full transition-all ${
                      isListening ? 'bg-red-500/20 text-red-500 animate-pulse' : 'text-[#e3e3e3] hover:bg-[#444746]'
                    }`}
                  >
                    <Mic size={22} className={isListening ? 'scale-110' : ''} />
                  </button>
                  <button 
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isStreaming || !apiKey}
                    className={`p-3 rounded-full transition-all ${
                      input.trim() && !isStreaming && apiKey ? 'text-[#8ab4f8] hover:bg-[#444746]' : 'text-[#444746]'
                    }`}
                  >
                    <Send size={22} />
                  </button>
                </div>
              </div>
              {!apiKey && (
                <div className="absolute -top-12 left-0 right-0 text-center">
                   <p className="text-xs text-red-400 font-medium bg-red-900/20 py-1.5 rounded-full px-4 inline-block">
                     Configure sua OpenRouter API Key nas definições para conversar.
                   </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Settings Modal Overlay */}
        <AnimatePresence>
            {showSettings && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-[#1e1f20] w-full max-w-2xl rounded-3xl p-8 border border-[#444746] max-h-[90vh] overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#444746] shadow-lg">
                                    <img src={MARIA_AVATAR} alt="Maria" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                </div>
                                <h2 className="text-2xl font-medium">Configurações</h2>
                            </div>
                            <button onClick={() => setShowSettings(false)} className="text-[#9aa0a6] hover:text-white transition-colors uppercase text-xs font-bold tracking-widest bg-[#333537]/50 px-3 py-1.5 rounded-full">Fechar</button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-[#9aa0a6] mb-4">Autenticação</h3>
                                    <label className="block text-xs font-medium text-[#9aa0a6] mb-2 uppercase">OpenRouter API Key</label>
                                    <div className="relative">
                                        <input 
                                            type={showApiKey ? "text" : "password"}
                                            value={apiKey}
                                            onChange={(e) => setApiKey(e.target.value)}
                                            placeholder="sk-or-v1-..."
                                            className="w-full bg-[#131314] border border-[#444746] rounded-xl px-4 py-3 pr-24 focus:border-[#8ab4f8] focus:ring-1 focus:ring-[#8ab4f8] outline-none transition-all text-sm font-mono"
                                        />
                                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                            <button 
                                                onClick={() => setShowApiKey(!showApiKey)}
                                                className="p-2 text-[#9aa0a6] hover:text-white hover:bg-[#333537] rounded-lg transition-colors"
                                            >
                                                {showApiKey ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                            <button 
                                                onClick={() => {
                                                    navigator.clipboard.writeText(apiKey);
                                                    alert("Chave API copiada!");
                                                }}
                                                className="p-2 text-[#9aa0a6] hover:text-white hover:bg-[#333537] rounded-lg transition-colors"
                                            >
                                                <Copy size={16} />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-[0.65rem] text-[#9aa0a6] mt-2 flex items-center gap-1"><AlertCircle size={10} /> Salva localmente no seu navegador.</p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-[#9aa0a6] mb-4">Preferências</h3>
                                    <label className="block text-xs font-medium text-[#9aa0a6] mb-2 uppercase">Modelo Chat Padrão</label>
                                    <select 
                                        value={activeModel}
                                        onChange={(e) => setActiveModel(e.target.value)}
                                        className="w-full bg-[#131314] border border-[#444746] rounded-xl px-4 py-3 outline-none focus:border-[#8ab4f8] text-sm"
                                    >
                                        {availableModels.map(m => (
                                            <option key={m.id} value={m.id}>{m.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-[#9aa0a6] mb-4">Privacidade & Notificações</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between bg-[#131314] border border-[#444746] rounded-xl px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                {notificationPermission === 'granted' ? <Bell size={18} className="text-green-400" /> : <BellOff size={18} className="text-[#9aa0a6]" />}
                                                <div>
                                                    <p className="text-sm font-medium">Push Notificações</p>
                                                    <p className="text-[0.65rem] text-[#9aa0a6]">
                                                        {notificationPermission === 'granted' ? 'Ativadas' : notificationPermission === 'denied' ? 'Bloqueadas pelo navegador' : 'Desativadas'}
                                                    </p>
                                                </div>
                                            </div>
                                            <button 
                                                onClick={handleToggleNotifications}
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${notificationPermission === 'granted' ? 'bg-primary' : 'bg-border-dim/50'}`}
                                            >
                                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notificationPermission === 'granted' ? 'translate-x-6' : 'translate-x-1'}`} />
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-between bg-[#131314] border border-[#444746] rounded-xl px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <History size={18} className={notifyOnComplete ? "text-primary" : "text-[#9aa0a6]"} />
                                                <div>
                                                    <p className="text-sm font-medium">Alertar Respostas</p>
                                                    <p className="text-[0.65rem] text-[#9aa0a6]">Notificar quando a Maria terminar uma resposta longa</p>
                                                </div>
                                            </div>
                                            <button 
                                                onClick={() => setNotifyOnComplete(!notifyOnComplete)}
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${notifyOnComplete ? 'bg-primary' : 'bg-border-dim/50'}`}
                                            >
                                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifyOnComplete ? 'translate-x-6' : 'translate-x-1'}`} />
                                            </button>
                                        </div>

                                        <div className="space-y-2">
                                            <p className="text-xs font-medium text-[#9aa0a6] uppercase tracking-wider">Voz do Sistema (PT-BR)</p>
                                            <select 
                                                value={selectedVoiceURI} 
                                                onChange={(e) => {
                                                    setSelectedVoiceURI(e.target.value);
                                                    localStorage.setItem('maria_voice_uri', e.target.value);
                                                }}
                                                className="w-full bg-background border border-border-dim rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                                            >
                                                <option value="">Padrão do Sistema</option>
                                                {availableVoices
                                                    .filter(v => v.lang.includes('pt'))
                                                    .map(v => (
                                                        <option key={v.voiceURI} value={v.voiceURI}>{v.name}</option>
                                                    ))
                                                }
                                                <optgroup label="Outras Línguas">
                                                    {availableVoices
                                                        .filter(v => !v.lang.includes('pt'))
                                                        .map(v => (
                                                            <option key={v.voiceURI} value={v.voiceURI}>{v.name} ({v.lang})</option>
                                                        ))
                                                    }
                                                </optgroup>
                                            </select>
                                        </div>

                                        <div className="pt-6 border-t border-[#444746]">
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-[#9aa0a6] mb-4 flex items-center gap-2">
                                                <Palette size={18} className="text-pink-400" />
                                                Temas Personalizados
                                            </h3>
                                            <div className="grid grid-cols-3 gap-2 mb-6">
                                                {[
                                                    { id: 'default', name: 'Midnight', color: '#8ab4f8', bg: '#131314' },
                                                    { id: 'emerald', name: 'Esmeralda', color: '#10b981', bg: '#061a15' },
                                                    { id: 'cyberpunk', name: 'Cyber', color: '#f0abfc', bg: '#0d0d0d' },
                                                    { id: 'ocean', name: 'Oceano', color: '#64ffda', bg: '#0a192f' },
                                                    { id: 'sunset', name: 'Pôr do Sol', color: '#fb923c', bg: '#1a0f0f' },
                                                    { id: 'lavender', name: 'Lavanda', color: '#c084fc', bg: '#121019' },
                                                ].map(t => (
                                                    <button
                                                        key={t.id}
                                                        onClick={() => setTheme(t.id)}
                                                        className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border transition-all ${
                                                            theme === t.id ? 'border-primary bg-surface' : 'border-border-dim hover:bg-surface/50'
                                                        }`}
                                                    >
                                                        <div 
                                                            className="w-full h-8 rounded-lg shadow-inner"
                                                            style={{ backgroundColor: t.bg, border: `2px solid ${t.color}` }}
                                                        />
                                                        <span className="text-[0.6rem] font-bold uppercase tracking-tighter truncate w-full text-center">{t.name}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-[#444746]">
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-[#9aa0a6] mb-4 flex items-center gap-2">
                                                <ShieldCheck size={18} className="text-blue-400" />
                                                Segurança & Armazenamento
                                            </h3>
                                            <p className="text-xs text-[#9aa0a6] mb-4 leading-relaxed">
                                                Como o WhatsApp, suas conversas são armazenadas **apenas** no seu dispositivo local. A Maria IA não envia seus dados pessoais para a nuvem; eles permanecem salvos com segurança no cache do seu navegador/aplicativo.
                                            </p>
                                            <button 
                                                onClick={handleClearAllData}
                                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 rounded-xl text-xs font-bold uppercase transition-all"
                                            >
                                                <Trash2 size={16} />
                                                Apagar Tudo Permanentemente
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-[#9aa0a6] mb-4">Gerenciar Modelos</h3>
                                    
                                    <div className="bg-background border border-border-dim rounded-2xl p-4 mb-4">
                                        <p className="text-xs font-medium mb-3 uppercase tracking-wider">Adicionar Novo</p>
                                        <input 
                                            placeholder="ID do Modelo (ex: openai/gpt-4)"
                                            value={newModelId}
                                            onChange={(e) => setNewModelId(e.target.value)}
                                            className="w-full bg-surface border border-border-dim rounded-lg px-3 py-2 text-xs mb-2 outline-none"
                                        />
                                        <input 
                                            placeholder="Nome amigável"
                                            value={newModelName}
                                            onChange={(e) => setNewModelName(e.target.value)}
                                            className="w-full bg-surface border border-border-dim rounded-lg px-3 py-2 text-xs mb-3 outline-none"
                                        />
                                        <button 
                                            onClick={handleAddModel}
                                            className="w-full bg-[#333537] hover:bg-[#444746] text-sm py-2 rounded-lg transition-colors border border-dashed border-[#444746]"
                                        >
                                            Vincular Modelo
                                        </button>
                                    </div>

                                    <div className="space-y-2 max-h-48 overflow-y-auto pr-2 scrollbar-thin">
                                        {availableModels.map(m => (
                                            <div key={m.id} className="flex items-center justify-between p-2 bg-[#131314] rounded-lg border border-[#444746]">
                                                <div className="min-w-0 flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <p className="text-[0.7rem] font-bold text-white truncate">{m.name}</p>
                                                        {(m as any).isFree && (
                                                            <span className="bg-green-500/20 text-green-400 text-[0.5rem] px-1 py-0.2 rounded font-bold uppercase">Grátis</span>
                                                        )}
                                                    </div>
                                                    <p className="text-[0.6rem] text-[#9aa0a6] truncate">{m.id}</p>
                                                </div>
                                                {!DEFAULT_MODELS.some(d => d.id === m.id) && (
                                                    <button 
                                                        onClick={() => handleRemoveModel(m.id)}
                                                        className="p-1.5 hover:bg-red-500/20 text-red-400 rounded-md transition-colors"
                                                    >
                                                        <Trash2 size={12} />
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex gap-4">
                             <button className="flex-1 bg-[#8ab4f8] text-[#131314] font-bold py-3 rounded-xl hover:bg-[#aecbfa] transition-all" onClick={() => setShowSettings(false)}>
                                Aplicar e Fechar
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
      </main>
    </div>
  );
}

