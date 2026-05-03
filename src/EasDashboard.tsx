import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Smartphone,
  RefreshCw,
  Play,
  Zap,
  X,
  CheckCircle,
  XCircle,
  Clock,
  Loader,
  Download,
  ChevronDown,
  Terminal,
  Radio,
} from 'lucide-react';

const PROJECT_ID = "67dd5514-4060-4cc9-8ac6-eaaa5ee21c16";

interface Build {
  id: string;
  status: string;
  platform: string;
  buildProfile: string;
  artifacts?: { buildUrl?: string };
  createdAt: string;
  updatedAt?: string;
  expirationDate?: string;
}

interface Update {
  id: string;
  group: string;
  message?: string;
  runtimeVersion?: string;
  platform?: string;
  createdAt: string;
}

type Tab = 'builds' | 'ota';

function StatusBadge({ status }: { status: string }) {
  const s = status?.toUpperCase();
  if (s === 'FINISHED' || s === 'COMPLETED')
    return <span className="flex items-center gap-1 text-green-400 text-xs font-bold"><CheckCircle size={12} /> Concluído</span>;
  if (s === 'ERRORED' || s === 'FAILED')
    return <span className="flex items-center gap-1 text-red-400 text-xs font-bold"><XCircle size={12} /> Erro</span>;
  if (s === 'IN_PROGRESS' || s === 'IN_QUEUE')
    return <span className="flex items-center gap-1 text-yellow-400 text-xs font-bold"><Loader size={12} className="animate-spin" /> Em progresso</span>;
  if (s === 'PENDING' || s === 'WAITING')
    return <span className="flex items-center gap-1 text-blue-400 text-xs font-bold"><Clock size={12} /> Pendente</span>;
  if (s === 'CANCELED')
    return <span className="flex items-center gap-1 text-[#9aa0a6] text-xs font-bold"><X size={12} /> Cancelado</span>;
  return <span className="text-xs text-[#9aa0a6]">{status}</span>;
}

function BuildCard({ build }: { build: Build }) {
  const date = new Date(build.createdAt).toLocaleString('pt-BR');
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#131314] border border-[#444746] rounded-xl p-4 space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Smartphone size={14} className="text-primary" />
          <span className="text-sm font-bold capitalize">{build.platform}</span>
          <span className="text-[10px] bg-[#333537] px-2 py-0.5 rounded-full text-[#9aa0a6] uppercase">{build.buildProfile}</span>
        </div>
        <StatusBadge status={build.status} />
      </div>
      <p className="text-[10px] text-[#9aa0a6]">Criado: {date}</p>
      <p className="text-[10px] text-[#9aa0a6] font-mono truncate">ID: {build.id}</p>
      {build.artifacts?.buildUrl && (
        <a
          href={build.artifacts.buildUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-1 text-xs text-primary hover:underline font-bold"
        >
          <Download size={12} /> Baixar APK
        </a>
      )}
    </motion.div>
  );
}

function UpdateCard({ update }: { update: Update }) {
  const date = new Date(update.createdAt).toLocaleString('pt-BR');
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#131314] border border-[#444746] rounded-xl p-4 space-y-1.5"
    >
      <div className="flex items-center gap-2">
        <Radio size={14} className="text-green-400" />
        <span className="text-sm font-bold">{update.message || 'Sem mensagem'}</span>
      </div>
      {update.runtimeVersion && (
        <span className="text-[10px] bg-[#333537] px-2 py-0.5 rounded-full text-[#9aa0a6] uppercase inline-block">v{update.runtimeVersion}</span>
      )}
      <p className="text-[10px] text-[#9aa0a6]">Publicado: {date}</p>
      <p className="text-[10px] text-[#9aa0a6] font-mono truncate">Group: {update.group}</p>
    </motion.div>
  );
}

function LogConsole({ lines, onClose }: { lines: string[]; onClose: () => void }) {
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-x-4 bottom-4 md:inset-x-auto md:right-6 md:bottom-6 md:w-[520px] bg-[#0d0d0d] border border-[#444746] rounded-2xl shadow-2xl z-50 overflow-hidden"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#333537]">
        <div className="flex items-center gap-2 text-green-400">
          <Terminal size={14} />
          <span className="text-xs font-bold uppercase tracking-widest">Log em tempo real</span>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-[#333537] rounded-lg text-[#9aa0a6]"><X size={14} /></button>
      </div>
      <div className="h-64 overflow-y-auto p-4 font-mono text-[11px] space-y-1">
        {lines.map((l, i) => (
          <p key={i} className={`leading-relaxed ${l.startsWith('✅') ? 'text-green-400' : l.startsWith('❌') ? 'text-red-400' : 'text-[#9aa0a6]'}`}>{l}</p>
        ))}
        <div ref={bottomRef} />
      </div>
    </motion.div>
  );
}

interface Props {
  onClose: () => void;
}

export default function EasDashboard({ onClose }: Props) {
  const [tab, setTab] = useState<Tab>('builds');
  const [builds, setBuilds] = useState<Build[]>([]);
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(false);
  const [buildProfile, setBuildProfile] = useState<'preview' | 'production'>('preview');
  const [otaMessage, setOtaMessage] = useState('');
  const [otaBranch, setOtaBranch] = useState('production');
  const [logLines, setLogLines] = useState<string[]>([]);
  const [showLog, setShowLog] = useState(false);
  const [running, setRunning] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const fetchBuilds = async () => {
    setLoading(true);
    try {
      const r = await fetch(`/api/expo/builds?projectId=${PROJECT_ID}`);
      const d = await r.json();
      setBuilds(d.builds || []);
    } catch { /* ignore */ }
    setLoading(false);
  };

  const fetchUpdates = async () => {
    setLoading(true);
    try {
      const r = await fetch(`/api/expo/updates?projectId=${PROJECT_ID}`);
      const d = await r.json();
      setUpdates(d.updates || []);
    } catch { /* ignore */ }
    setLoading(false);
  };

  useEffect(() => {
    if (tab === 'builds') fetchBuilds();
    else fetchUpdates();
  }, [tab]);

  const startStream = async (url: string, body: object) => {
    if (running) return;
    setRunning(true);
    setLogLines([]);
    setShowLog(true);

    try {
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const reader = r.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) return;

      let buffer = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const parts = buffer.split('\n\n');
        buffer = parts.pop() || '';
        for (const part of parts) {
          const line = part.replace(/^data: /, '').trim();
          if (!line) continue;
          try {
            const obj = JSON.parse(line);
            if (obj.log) setLogLines(prev => [...prev, obj.log]);
            if (obj.done) {
              setRunning(false);
              setTimeout(() => { if (tab === 'builds') fetchBuilds(); else fetchUpdates(); }, 2000);
            }
          } catch { /* skip */ }
        }
      }
    } catch (e: any) {
      setLogLines(prev => [...prev, `Erro: ${e.message}`]);
    }
    setRunning(false);
  };

  const triggerBuild = () =>
    startStream('/api/expo/build', { projectId: PROJECT_ID, profile: buildProfile, platform: 'android' });

  const triggerOTA = () => {
    if (!otaMessage.trim()) return;
    startStream('/api/expo/update', { projectId: PROJECT_ID, message: otaMessage, branch: otaBranch });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 z-40"
        onClick={onClose}
      />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 200 }}
        className="fixed right-0 inset-y-0 w-full max-w-md bg-surface border-l border-[#444746] z-50 flex flex-col shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#444746]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
              <Smartphone size={16} className="text-primary" />
            </div>
            <div>
              <h2 className="font-bold text-base">Marina IA — App</h2>
              <p className="text-[10px] text-[#9aa0a6] font-mono truncate">ID: {PROJECT_ID.slice(0, 18)}…</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-[#333537] rounded-full text-[#9aa0a6]"><X size={18} /></button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#444746] px-4 pt-2">
          {(['builds', 'ota'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border-b-2 transition-colors ${tab === t ? 'border-primary text-primary' : 'border-transparent text-[#9aa0a6] hover:text-white'}`}
            >
              {t === 'builds' ? '📦 Builds / APK' : '⚡ OTA Update'}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* ── BUILDS TAB ─────────────────────────────────────────────── */}
          {tab === 'builds' && (
            <>
              {/* Action card */}
              <div className="bg-[#1e1f20] border border-[#444746] rounded-2xl p-4 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-[#9aa0a6]">Gerar novo APK</p>

                {/* Profile selector */}
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="w-full flex items-center justify-between bg-background border border-[#444746] rounded-xl px-4 py-2.5 text-sm"
                  >
                    <span>{buildProfile === 'preview' ? '📱 Preview (APK interno)' : '🚀 Production (AAB)'}</span>
                    <ChevronDown size={14} className={`transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {showProfileMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-surface border border-[#444746] rounded-xl overflow-hidden z-10 shadow-xl"
                      >
                        {(['preview', 'production'] as const).map(p => (
                          <button
                            key={p}
                            onClick={() => { setBuildProfile(p); setShowProfileMenu(false); }}
                            className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#333537] transition-colors"
                          >
                            {p === 'preview' ? '📱 Preview — APK direto (recomendado)' : '🚀 Production — AAB para Play Store'}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={triggerBuild}
                  disabled={running}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-[#131314] font-bold py-3 rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {running ? <Loader size={16} className="animate-spin" /> : <Play size={16} />}
                  {running ? 'Iniciando build...' : 'Iniciar Build no EAS'}
                </button>
                <p className="text-[10px] text-[#9aa0a6] text-center">O build roda na nuvem da Expo. Você pode acompanhar no log abaixo.</p>
              </div>

              {/* Builds list */}
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-widest text-[#9aa0a6]">Builds recentes</p>
                <button onClick={fetchBuilds} className="p-1.5 hover:bg-[#333537] rounded-lg text-[#9aa0a6] transition-colors">
                  <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
                </button>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-8 text-[#9aa0a6]">
                  <Loader size={18} className="animate-spin mr-2" /> Carregando...
                </div>
              ) : builds.length === 0 ? (
                <div className="text-center py-10 text-[#9aa0a6]">
                  <Smartphone size={32} className="mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Nenhum build encontrado</p>
                  <p className="text-xs mt-1">Inicie seu primeiro build acima.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {builds.map(b => <BuildCard key={b.id} build={b} />)}
                </div>
              )}
            </>
          )}

          {/* ── OTA TAB ────────────────────────────────────────────────── */}
          {tab === 'ota' && (
            <>
              <div className="bg-[#1e1f20] border border-[#444746] rounded-2xl p-4 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-[#9aa0a6]">Publicar OTA Update</p>
                <p className="text-[11px] text-[#9aa0a6] leading-relaxed">
                  Atualize o app instantaneamente sem precisar de um novo APK. O usuário recebe as mudanças na próxima abertura.
                </p>

                <div>
                  <label className="text-[10px] font-bold uppercase text-[#9aa0a6] block mb-1">Mensagem do update</label>
                  <input
                    value={otaMessage}
                    onChange={e => setOtaMessage(e.target.value)}
                    placeholder="ex: Correção de bugs, nova funcionalidade..."
                    className="w-full bg-background border border-[#444746] rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase text-[#9aa0a6] block mb-1">Branch</label>
                  <input
                    value={otaBranch}
                    onChange={e => setOtaBranch(e.target.value)}
                    placeholder="production"
                    className="w-full bg-background border border-[#444746] rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors"
                  />
                </div>

                <button
                  onClick={triggerOTA}
                  disabled={running || !otaMessage.trim()}
                  className="w-full flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {running ? <Loader size={16} className="animate-spin" /> : <Zap size={16} />}
                  {running ? 'Publicando...' : 'Publicar OTA Update'}
                </button>
              </div>

              {/* Updates list */}
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-widest text-[#9aa0a6]">Updates recentes</p>
                <button onClick={fetchUpdates} className="p-1.5 hover:bg-[#333537] rounded-lg text-[#9aa0a6] transition-colors">
                  <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
                </button>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-8 text-[#9aa0a6]">
                  <Loader size={18} className="animate-spin mr-2" /> Carregando...
                </div>
              ) : updates.length === 0 ? (
                <div className="text-center py-10 text-[#9aa0a6]">
                  <Radio size={32} className="mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Nenhum update publicado ainda</p>
                  <p className="text-xs mt-1">Publique seu primeiro OTA update acima.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {updates.map(u => <UpdateCard key={u.id} update={u} />)}
                </div>
              )}
            </>
          )}
        </div>

        {/* Log toggle button */}
        {logLines.length > 0 && (
          <div className="px-4 py-3 border-t border-[#444746]">
            <button
              onClick={() => setShowLog(!showLog)}
              className="w-full flex items-center justify-center gap-2 py-2 bg-[#131314] border border-[#444746] rounded-xl text-xs font-bold text-[#9aa0a6] hover:text-white transition-colors"
            >
              <Terminal size={12} />
              {showLog ? 'Ocultar log' : 'Ver log'}
              {running && <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />}
            </button>
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {showLog && <LogConsole lines={logLines} onClose={() => setShowLog(false)} />}
      </AnimatePresence>
    </>
  );
}
