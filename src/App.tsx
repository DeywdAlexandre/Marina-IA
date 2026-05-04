import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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

// Componentes
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import SettingsModal from './components/SettingsModal';
import VoiceMode from './components/VoiceMode';
import EasDashboard from './EasDashboard';
import { PromptLibrary } from './components/PromptLibrary';
import { ArtifactsPanel, Artifact } from './components/ArtifactsPanel';

// Serviços e Tipos
import { DEFAULT_MODELS, chatWithOpenRouter } from './services/aiService';
import { Message, ChatSession, Folder, Persona, PromptTemplate, Fact } from './types/expo';
import { storageService } from './services/storageService';
import { nativeBridge } from './services/nativeBridge';
import { memoryService } from './services/memoryService';
import { ragService, IndexedDocument } from './services/ragService';

export default function App() {
  // --- Estados ---
  const [apiKey, setApiKey] = useState('');
  const [templates, setTemplates] = useState<PromptTemplate[]>(() => storageService.loadTemplates());
  const [indexedFiles, setIndexedFiles] = useState<IndexedDocument[]>(() => ragService.getDocs());
  const [activeArtifact, setActiveArtifact] = useState<Artifact | null>(null);
  const [isArtifactsOpen, setIsArtifactsOpen] = useState(false);
  const [isPromptLibraryOpen, setIsPromptLibraryOpen] = useState(false);
  const [biometricsEnabled, setBiometricsEnabled] = useState(() => localStorage.getItem('marina_biometrics_enabled') === 'true');
  const [isLocked, setIsLocked] = useState(biometricsEnabled);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [totalCost, setTotalCost] = useState(() => Number(localStorage.getItem('marina_total_cost') || 0));
  const [facts, setFacts] = useState<Fact[]>(() => memoryService.loadFacts());
  const [availableModels, setAvailableModels] = useState(() => {
    const custom = storageService.loadCustomModels();
    return [...DEFAULT_MODELS, ...custom];
  });
  const [defaultModelId, setDefaultModelId] = useState<string>(() => {
    return localStorage.getItem('marina_default_model') || DEFAULT_MODELS[0].id;
  });
  const [activeModel, setActiveModel] = useState(localStorage.getItem('marina_default_model') || availableModels[0]?.id || DEFAULT_MODELS[0].id);
  const [input, setInput] = useState('');
  const [sessions, setSessions] = useState<ChatSession[]>(storageService.loadSessions());
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showModelList, setShowModelList] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [attachedImage, setAttachedImage] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<string | null>(null);
  const [chatSearchTerm, setChatSearchTerm] = useState('');
  const [folders, setFolders] = useState<Folder[]>(storageService.loadFolders());
  const [personas, setPersonas] = useState<Persona[]>(storageService.loadPersonas());
  const [selectedPersonaId, setSelectedPersonaId] = useState<string | null>(null);
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [deletingSessionId, setDeletingSessionId] = useState<string | null>(null);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string>(() => {
    return localStorage.getItem('marina_voice_uri') || '';
  });
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>(
    typeof Notification !== 'undefined' ? Notification.permission : 'default'
  );
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notifyOnComplete, setNotifyOnComplete] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('marina_theme') || 'default');
  const [isComparisonMode, setIsComparisonMode] = useState(false);
  const [comparisonModelIds, setComparisonModelIds] = useState<string[]>([]);
  const [showEasDashboard, setShowEasDashboard] = useState(false);
  const [newModelId, setNewModelId] = useState('');
  const [newModelName, setNewModelName] = useState('');
  const [isVoiceModeOpen, setIsVoiceModeOpen] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const MARINA_AVATAR = "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=200&h=200&auto=format&fit=crop";

  const currentSession = sessions.find(s => s.id === currentSessionId);

  // --- Effects ---
  useEffect(() => {
    localStorage.setItem('marina_biometrics_enabled', String(biometricsEnabled));
  }, [biometricsEnabled]);

  useEffect(() => {
    if (isLocked) {
      handleAuthenticate();
    }
  }, []);

  const handleAuthenticate = async () => {
    const success = await nativeBridge.authenticate();
    if (success) {
      setIsLocked(false);
      nativeBridge.haptic('success');
    }
  };

  useEffect(() => {
    localStorage.setItem('marina_total_cost', totalCost.toFixed(6));
  }, [totalCost]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('marina_theme', theme);
  }, [theme]);

  useEffect(() => {
    const loadKey = async () => {
      const key = await storageService.loadApiKey();
      if (key) setApiKey(key);
    };
    loadKey();
  }, []);

  useEffect(() => {
    if (apiKey) storageService.saveApiKey(apiKey);
  }, [apiKey]);

  useEffect(() => {
    const sessionsToSave = sessions.filter(s => s.messages.length > 0 || s.id === currentSessionId);
    storageService.saveSessions(sessionsToSave);
  }, [sessions, currentSessionId]);

  useEffect(() => {
    storageService.saveFolders(folders);
  }, [folders]);

  useEffect(() => {
    storageService.savePersonas(personas);
  }, [personas]);

  useEffect(() => {
    const customOnly = availableModels.filter(m => !DEFAULT_MODELS.some(d => d.id === m.id));
    storageService.saveCustomModels(customOnly);
  }, [availableModels]);

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setAvailableVoices(voices);
    };
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  useEffect(() => {
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

  // --- Handlers ---
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert("Imagem muito grande! Máximo 2MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => setAttachedImage(event.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isStreaming) return;

    if (!apiKey) {
      alert("Por favor, configure sua API Key nas configurações para conversar com a Marina.");
      setShowSettings(true);
      return;
    }

    const textToSearch = input.trim();
    let sessionId = currentSessionId;

    if (!sessionId) {
      const newSession: ChatSession = {
        id: Date.now().toString(),
        title: textToSearch.slice(0, 30) || 'Nova Conversa',
        messages: [],
        timestamp: Date.now(),
        modelId: activeModel
      };
      setSessions(prev => [newSession, ...prev]);
      setCurrentSessionId(newSession.id);
      sessionId = newSession.id;
    }
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: Date.now(),
      image: attachedImage || undefined
    };

    setSessions(prev => prev.map(s => s.id === sessionId ? { ...s, messages: [...s.messages, userMessage] } : s));
    setInput('');
    setAttachedImage(null);
    setIsStreaming(true);
    nativeBridge.haptic('light');

    const modelsToProcess = isComparisonMode && comparisonModelIds.length > 0 
      ? comparisonModelIds 
      : [isSearchEnabled ? 'perplexity/sonar' : activeModel];

    const currentSessionObj = sessions.find(s => s.id === sessionId);
    const selectedPersona = personas.find(p => p.id === selectedPersonaId);
    
    // Pesquisa na memória seletiva e nos documentos (RAG)
    const relevantFacts = memoryService.searchRelevantFacts(textToSearch);
    const relevantDocs = ragService.searchRelevantChunks(textToSearch);

    const memoryContext = relevantFacts.length > 0 
      ? `\n[MEMÓRIA LOCAL]: Você lembra disso sobre o usuário: ${relevantFacts.map(f => f.content).join('; ')}`
      : "";
    
    const ragContext = relevantDocs 
      ? `\n[CONHECIMENTO DOS DOCUMENTOS ANEXADOS]:\nUse as informações abaixo para responder se forem relevantes:\n${relevantDocs}`
      : "";

      // Data e hora de Brasília em tempo real
      const now = new Date();
      const brTime = now.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
      
      const agentInstructions = `
[IMPORTANT - AGENT CAPABILITIES]:
Você pode agendar lembretes nativos no celular do usuário. 
Sempre que o usuário pedir para ser lembrado de algo, você DEVE gerar sua resposta normalmente e, ao final, anexar EXATAMENTE este bloco:
[REMINDER: {"title": "O que lembrar", "body": "Detalhes", "trigger": "ISO_TIMESTAMP"}]

[VOCAL DESIGN - NATURALIDADE]:
Como você é frequentemente ouvida via áudio, siga estas regras de fala:
1. Use frases CURTAS e diretas. Evite parágrafos densos.
2. Use vírgulas e reticências (...) para criar pausas naturais onde uma pessoa respiraria.
3. Use expressões de transição como "Olha,", "Então,", "Pois é," para soar mais humana.
4. NUNCA use símbolos como asteriscos (*), hashtags (#) ou negritos na fala, pois o sintetizador de voz pode se confundir.

Data/Hora Atual (Brasília): ${brTime}
Fuso: UTC-3.`;

      const systemPrompt = selectedPersona 
        ? `${selectedPersona.prompt}${memoryContext}${ragContext}\n${agentInstructions}`
        : `Você é a Marina IA, uma assistente pessoal inteligente e elegante.${memoryContext}${ragContext}\n${agentInstructions}`;

      const baseHistory = [
        { role: 'system' as const, content: systemPrompt },
        ...(currentSessionObj?.messages || []).map(m => ({ 
          role: m.role as any, 
          content: isSearchEnabled ? (typeof m.content === 'string' ? m.content : 'Mensagem com imagem (não suportada em busca)') : m.content 
        })),
        { 
          role: userMessage.role as any, 
          content: isSearchEnabled ? userMessage.content : (attachedImage ? [
            { type: 'text', text: userMessage.content },
            { type: 'image_url', image_url: { url: attachedImage } }
          ] : userMessage.content)
        }
      ];

    try {
      await Promise.all(modelsToProcess.map(async (modelId) => {
        const modelName = availableModels.find(m => m.id === modelId)?.name || modelId.split('/').pop() || 'IA';
        const assistantMessageId = (Date.now() + Math.random()).toString();
        const assistantMessage: Message = {
          id: assistantMessageId,
          role: 'assistant',
          content: '',
          timestamp: Date.now(),
          modelName: isComparisonMode ? modelName : undefined
        };

        setSessions(prev => prev.map(s => s.id === sessionId ? { ...s, messages: [...s.messages, assistantMessage] } : s));

        let accumulated = "";
        const modelData = availableModels.find(m => m.id === modelId);
        const pricing = modelData?.pricing || { prompt: 0.1, completion: 0.1 };

        await chatWithOpenRouter(apiKey, modelId, baseHistory, (chunk) => {
          if (!accumulated) nativeBridge.haptic('light');
          accumulated += chunk;
          
          if (accumulated.includes('<!DOCTYPE html>') || accumulated.includes('<html') || accumulated.includes('<svg')) {
            const title = accumulated.match(/<title>(.*?)<\/title>/)?.[1] || 'Web Preview';
            setActiveArtifact({
              id: assistantMessageId,
              type: 'html',
              content: accumulated,
              title: title
            });
            setIsArtifactsOpen(true);
          }

          setSessions(prev => prev.map(s => 
            s.id === sessionId ? {
              ...s,
              messages: s.messages.map(m => m.id === assistantMessageId ? { ...m, content: accumulated } : m)
            } : s
          ));
        }, (usage) => {
          const cost = (usage.prompt_tokens / 1000 * pricing.prompt) + (usage.completion_tokens / 1000 * pricing.completion);
          setTotalCost(prev => prev + cost);
        });

        if (accumulated) {
          extractFactsFromConversation(userMessage.content, accumulated);
          handleSpeak(accumulated, assistantMessageId);

          // Detecta e processa lembretes
          const reminderMatch = accumulated.match(/\[REMINDER: (.*?)\]/);
          if (reminderMatch) {
            try {
              const reminderData = JSON.parse(reminderMatch[1]);
              nativeBridge.scheduleReminder(reminderData.title, reminderData.body, reminderData.trigger);
              nativeBridge.haptic('success');
              
              // Limpa o comando técnico do texto visível para o usuário
              const cleanText = accumulated.replace(/\[REMINDER: .*?\]/, '').trim();
              setSessions(prev => prev.map(s => s.id === sessionId ? {
                ...s,
                messages: s.messages.map(m => m.id === assistantMessageId ? { ...m, content: cleanText } : m)
              } : s));
            } catch (e) {
              console.error("Erro ao processar lembrete:", e);
            }
          }
        }
      }));
    } catch (error) {
      console.error(error);
    } finally {
      setIsStreaming(false);
      if (!isComparisonMode) nativeBridge.haptic('success');
      else nativeBridge.haptic('medium');
      
      if (notifyOnComplete && Notification.permission === 'granted' && document.hidden) {
        nativeBridge.notify("Marina IA", "Terminei de processar sua resposta!");
      }
    }
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
    const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F191}-\u{1F251}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F171}\u{1F17E}-\u{1F17F}\u{1F18E}\u{3030}\u{2B50}\u{2B55}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{3297}\u{3299}\u{303D}\u{00A9}\u{00AE}\u{2122}\u{23F3}]/gu;
    utterance.text = text.replace(emojiRegex, '').replace(/[\*\#\`]/g, '').trim();
    utterance.lang = 'pt-BR';
    utterance.rate = 1.2; // Velocidade otimizada para 1.2x conforme solicitado
    
    const voices = window.speechSynthesis.getVoices();
    if (selectedVoiceURI) {
      const voice = voices.find(v => v.voiceURI === selectedVoiceURI);
      if (voice) utterance.voice = voice;
    } else {
      // Fallback Inteligente: procura vozes femininas conhecidas em português
      const femaleNames = ['maria', 'heloisa', 'vitoria', 'luciana', 'google português do brasil', 'francisca'];
      const ptVoices = voices.filter(v => v.lang.includes('pt'));
      
      const bestVoice = ptVoices.find(v => 
        femaleNames.some(name => v.name.toLowerCase().includes(name))
      ) || ptVoices[0];

      if (bestVoice) utterance.voice = bestVoice;
    }

    utterance.onstart = () => setIsSpeaking(messageId);
    utterance.onend = () => setIsSpeaking(null);
    utterance.onerror = () => setIsSpeaking(null);
    window.speechSynthesis.speak(utterance);
  };

  const extractFactsFromConversation = async (userMsg: string, aiMsg: string) => {
    if (!apiKey) return;
    try {
      const extractPrompt = `Abaixo está uma interação entre um usuário e uma IA. 
Extraia fatos novos e relevantes sobre o usuário (preferências, profissão, gostos, planos, pets, etc) em frases curtas e objetivas.
Se não houver nada de novo ou relevante, responda apenas "NONE".
Retorne apenas os fatos, um por linha.

Usuário: ${userMsg}
Marina: ${aiMsg}`;

      let result = "";
      await chatWithOpenRouter(apiKey, 'google/gemini-flash-1.5-8b', [{ role: 'user', content: extractPrompt }], (chunk) => {
        result += chunk;
      });

      if (result.trim() && result.toUpperCase() !== "NONE") {
        const lines = result.split('\n').filter(l => l.trim().length > 5);
        lines.forEach(line => memoryService.addFact(line.trim()));
        setFacts(memoryService.loadFacts());
      }
    } catch (e) {
      console.error("Erro ao extrair fatos:", e);
    }
  };

  const handleDeleteFact = (factId: string) => {
    memoryService.deleteFact(factId);
    setFacts(memoryService.loadFacts());
  };

  const handleSaveTemplate = (title: string, content: string) => {
    const newTemplate: PromptTemplate = {
      id: Date.now().toString(),
      title,
      content
    };
    const updated = [newTemplate, ...templates];
    setTemplates(updated);
    storageService.saveTemplates(updated);
  };

  const handleDeleteTemplate = (id: string) => {
    const updated = templates.filter(t => t.id !== id);
    setTemplates(updated);
    storageService.saveTemplates(updated);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsStreaming(true);
      await ragService.indexFile(file);
      setIndexedFiles([...ragService.getDocs()]);
      nativeBridge.notify("Marina IA", `Documento "${file.name}" indexado com sucesso!`);
      nativeBridge.haptic('success');
    } catch (error) {
      console.error("Erro ao indexar arquivo:", error);
      alert("Erro ao ler arquivo. Verifique se é um PDF ou texto válido.");
    } finally {
      setIsStreaming(false);
    }
  };

  const handleRemoveDoc = (id: string) => {
    ragService.removeDoc(id);
    setIndexedFiles([...ragService.getDocs()]);
  };

  const handleCameraClick = async () => {
    try {
      const image = await nativeBridge.openCamera();
      if (image) {
        setAttachedImage(image);
        nativeBridge.haptic('success');
      }
    } catch (error) {
      console.error("Erro ao abrir câmera:", error);
    }
  };

  const handleExportPDF = async () => {
    if (!currentSession) return;
    const element = document.getElementById('chat-history');
    if (!element) return;
    try {
      const canvas = await html2canvas(element, { backgroundColor: '#131314', scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Marina_Chat_${currentSession.title.replace(/\s+/g, '_')}.pdf`);
    } catch (err) {
      alert("Erro ao exportar PDF.");
    }
  };

  const handleExportTXT = () => {
    if (!currentSession) return;
    const content = currentSession.messages.map(m => `${m.role === 'user' ? 'Você' : 'Marina'}:\n${m.content}\n\n`).join('---\n\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Marina_Chat_${currentSession.title.replace(/\s+/g, '_')}.txt`;
    link.click();
  };

  const handleClearAllData = () => {
    if (confirm("VOCÊ TEM CERTEZA? Isso apagará tudo localmente.")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  const handleToggleNotifications = async () => {
    if (typeof Notification === 'undefined') return;
    const permission = await Notification.requestPermission();
    setNotificationPermission(permission);
  };

  const handleAddModel = () => {
    if (!newModelId.trim() || !newModelName.trim()) return;
    setAvailableModels([...availableModels, { id: newModelId, name: newModelName }]);
    setNewModelId(''); setNewModelName('');
  };

  const handleRemoveModel = (id: string) => {
    if (DEFAULT_MODELS.some(m => m.id === id)) return;
    setAvailableModels(availableModels.filter(m => m.id !== id));
  };

  const confirmCreateFolder = () => {
    if (newFolderName.trim()) {
      setFolders([...folders, { id: Date.now().toString(), name: newFolderName.trim(), isExpanded: true }]);
    }
    setIsCreatingFolder(false); setNewFolderName('');
  };

  const handleMoveToFolder = (sessionId: string, folderId: string | undefined) => {
    setSessions(sessions.map(s => s.id === sessionId ? { ...s, folderId } : s));
  };

  const handleDeleteSession = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (deletingSessionId === id) {
      setSessions(sessions.filter(s => s.id !== id));
      if (currentSessionId === id) setCurrentSessionId(null);
      setDeletingSessionId(null);
    } else {
      setDeletingSessionId(id);
      setTimeout(() => setDeletingSessionId(prev => prev === id ? null : prev), 3000);
    }
  };

  const handleMicClick = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    if (isListening) { setIsListening(false); return; }
    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.onstart = () => {
      setIsListening(true);
      setInput(''); // Limpa o que tinha antes
    };
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
      // O envio será processado pelo useEffect ou manualmente se preferir
      // Mas para garantir o fluxo "mãos livres", vamos disparar o envio aqui
      setTimeout(() => handleSendMessage(), 100); 
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  const toggleComparisonModel = (modelId: string) => {
    setComparisonModelIds(prev => prev.includes(modelId) ? prev.filter(id => id !== modelId) : prev.length < 3 ? [...prev, modelId] : prev);
  };

  const ChartRenderer = ({ content }: { content: string }) => {
    try {
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
    } catch (e) { return null; }
  };

  // --- Render ---
  return (
    <div className="flex h-screen bg-background text-[#e3e3e3] font-sans overflow-hidden">
      <Sidebar 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        sessions={sessions}
        currentSessionId={currentSessionId}
        setCurrentSessionId={setCurrentSessionId}
        folders={folders}
        isCreatingFolder={isCreatingFolder}
        setIsCreatingFolder={setIsCreatingFolder}
        newFolderName={newFolderName}
        setNewFolderName={setNewFolderName}
        handleNewChat={handleNewChat}
        confirmCreateFolder={confirmCreateFolder}
        toggleFolder={(id) => setFolders(folders.map(f => f.id === id ? { ...f, isExpanded: !f.isExpanded } : f))}
        handleDeleteFolder={(id, e) => {
            e.stopPropagation();
            if (confirm("Apagar pasta?")) setFolders(folders.filter(f => f.id !== id));
        }}
        handleMoveToFolder={handleMoveToFolder}
        handleDeleteSession={handleDeleteSession}
        deletingSessionId={deletingSessionId}
        marinaAvatar={MARINA_AVATAR}
      />

      <ChatArea 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        setShowSettings={setShowSettings}
        currentSession={currentSession}
        sessions={sessions}
        isStreaming={isStreaming}
        isSpeaking={isSpeaking}
        handleSpeak={handleSpeak}
        marinaAvatar={MARINA_AVATAR}
        ChartRenderer={ChartRenderer}
        scrollRef={scrollRef}
        input={input}
        setInput={setInput}
        handleSendMessage={handleSendMessage}
        handleMicClick={handleMicClick}
        handleImageUpload={handleImageUpload}
        attachedImage={attachedImage}
        setAttachedImage={setAttachedImage}
        isSearchEnabled={isSearchEnabled}
        setIsSearchEnabled={setIsSearchEnabled}
        isComparisonMode={isComparisonMode}
        setIsComparisonMode={setIsComparisonMode}
        comparisonModelIds={comparisonModelIds}
        toggleComparisonModel={toggleComparisonModel}
        availableModels={availableModels}
        activeModel={activeModel}
        setActiveModel={setActiveModel}
        showModelList={showModelList}
        setShowModelList={setShowModelList}
        chatSearchTerm={chatSearchTerm}
        setChatSearchTerm={setChatSearchTerm}
        handleExportPDF={handleExportPDF}
        handleExportTXT={handleExportTXT}
        isListening={isListening}
        selectedPersonaId={selectedPersonaId}
        setSelectedPersonaId={setSelectedPersonaId}
        personas={personas}
        isPromptLibraryOpen={isPromptLibraryOpen}
        setIsPromptLibraryOpen={setIsPromptLibraryOpen}
        promptTemplates={templates}
        handleSaveTemplate={handleSaveTemplate}
        handleDeleteTemplate={handleDeleteTemplate}
        PromptLibraryComponent={PromptLibrary}
        totalCost={totalCost}
        onPromoteArtifact={(content, title, type) => {
          setActiveArtifact({
            id: Date.now().toString(),
            type: type || 'markdown',
            content,
            title: title || 'Documento'
          });
          setIsArtifactsOpen(true);
        }}
        indexedFiles={indexedFiles}
        onFileUpload={handleFileUpload}
        onRemoveDoc={handleRemoveDoc}
        onCameraClick={handleCameraClick}
        isVoiceModeOpen={isVoiceModeOpen}
        setIsVoiceModeOpen={(open) => {
          setIsVoiceModeOpen(open);
          if (open) nativeBridge.haptic('selection');
        }}
      />

      <AnimatePresence>
        {showSettings && (
          <SettingsModal 
            setShowSettings={setShowSettings}
            apiKey={apiKey}
            setApiKey={setApiKey}
            showApiKey={showApiKey}
            setShowApiKey={setShowApiKey}
            theme={theme}
            setTheme={setTheme}
            availableModels={availableModels}
            newModelId={newModelId}
            setNewModelId={setNewModelId}
            newModelName={newModelName}
            setNewModelName={setNewModelName}
            handleAddModel={handleAddModel}
            handleRemoveModel={handleRemoveModel}
            defaultModelId={defaultModelId}
            handleSetDefaultModel={(id, e) => {
              e.stopPropagation();
              setDefaultModelId(id);
              localStorage.setItem('marina_default_model', id);
            }}
            handleExportBackup={() => {}} // TODO
            handleImportBackup={() => {}} // TODO
            handleClearAllData={handleClearAllData}
            notificationPermission={notificationPermission}
            handleToggleNotifications={handleToggleNotifications}
            soundEnabled={soundEnabled}
            setSoundEnabled={setSoundEnabled}
            notifyOnComplete={notifyOnComplete}
            setNotifyOnComplete={setNotifyOnComplete}
            setShowEasDashboard={setShowEasDashboard}
            biometricsEnabled={biometricsEnabled}
            setBiometricsEnabled={setBiometricsEnabled}
            facts={facts}
            onDeleteFact={handleDeleteFact}
            indexedFiles={indexedFiles}
            onRemoveDoc={handleRemoveDoc}
          />
        )}

        <VoiceMode 
          isOpen={isVoiceModeOpen}
          onClose={() => setIsVoiceModeOpen(false)}
          isListening={isListening}
          isSpeaking={!!isSpeaking}
          transcript={input}
          response={currentSession?.messages[currentSession.messages.length - 1]?.role === 'assistant' ? currentSession.messages[currentSession.messages.length - 1].content : ''}
          onMicToggle={handleMicClick}
        />

        <ArtifactsPanel 
          isOpen={isArtifactsOpen}
          onClose={() => setIsArtifactsOpen(false)}
          artifact={activeArtifact}
          onEdit={(content) => {
            if (activeArtifact) {
              setActiveArtifact({ ...activeArtifact, content });
            }
          }}
        />
      </AnimatePresence>

      <AnimatePresence>
        {isLocked && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center space-y-8"
          >
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <ShieldCheck size={48} />
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Marina IA Travada</h2>
              <p className="text-[#9aa0a6] text-sm">Use sua digital para acessar suas conversas</p>
            </div>
            <button 
              onClick={handleAuthenticate}
              className="px-8 py-3 bg-primary text-background font-bold rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all"
            >
              Autenticar Agora
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showEasDashboard && (
          <div className="fixed inset-0 z-[110] bg-background">
            <div className="p-4 border-b border-border-dim flex justify-between items-center">
                <h2 className="font-bold">EAS Build Dashboard</h2>
                <button onClick={() => setShowEasDashboard(false)} className="p-2 hover:bg-[#333537] rounded-lg">
                    <X size={20} />
                </button>
            </div>
            <div className="flex-1 overflow-auto">
                <EasDashboard onClose={() => setShowEasDashboard(false)} />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Helper icons needed but not imported by components
import { Zap, X, ShieldCheck } from 'lucide-react';
