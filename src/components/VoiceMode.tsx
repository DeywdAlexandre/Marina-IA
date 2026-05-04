import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mic, MicOff, Volume2, Sparkles } from 'lucide-react';

interface VoiceModeProps {
  isOpen: boolean;
  onClose: () => void;
  isListening: boolean;
  isSpeaking: boolean;
  transcript: string;
  response: string;
  onMicToggle: () => void;
}

const VoiceMode: React.FC<VoiceModeProps> = ({
  isOpen,
  onClose,
  isListening,
  isSpeaking,
  transcript,
  response,
  onMicToggle
}) => {
  const [pulseScale, setPulseScale] = useState(1);

  // Simulação de pulso orgânico
  useEffect(() => {
    if (isListening || isSpeaking) {
      const interval = setInterval(() => {
        setPulseScale(1 + Math.random() * 0.2);
      }, 150);
      return () => clearInterval(interval);
    } else {
      setPulseScale(1);
    }
  }, [isListening, isSpeaking]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-between py-20 px-8"
        >
          {/* Botão Fechar */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-3 hover:bg-surface rounded-full text-[#9aa0a6] hover:text-white transition-all"
          >
            <X size={28} />
          </button>

          {/* Header Status */}
          <div className="text-center space-y-2">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center justify-center gap-2 text-primary"
            >
              <Sparkles size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                {isSpeaking ? "Marina falando..." : isListening ? "Ouvindo você..." : "Aguardando..."}
              </span>
            </motion.div>
          </div>

          {/* Esfera Central Animada */}
          <div className="relative flex items-center justify-center">
            {/* Camadas de Brilho */}
            <motion.div
              animate={{ 
                scale: isListening || isSpeaking ? [1, 1.5, 1.2, 1.8, 1] : 1,
                opacity: isListening || isSpeaking ? [0.2, 0.4, 0.2] : 0.1
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-64 h-64 bg-primary/20 rounded-full blur-3xl"
            />
            
            <motion.div
              animate={{ 
                scale: pulseScale,
                boxShadow: isListening || isSpeaking 
                  ? "0 0 80px rgba(138, 180, 248, 0.4)" 
                  : "0 0 20px rgba(138, 180, 248, 0.1)"
              }}
              className={`w-40 h-40 rounded-full flex items-center justify-center transition-all duration-300 ${
                isListening || isSpeaking 
                  ? 'bg-gradient-to-br from-primary to-blue-600' 
                  : 'bg-surface border border-border-dim'
              }`}
            >
              {isSpeaking ? (
                <Volume2 size={48} className="text-background" />
              ) : isListening ? (
                <Mic size={48} className="text-background" />
              ) : (
                <MicOff size={48} className="text-[#444746]" />
              )}
            </motion.div>

            {/* Ondas Orbitais */}
            {isListening && (
              <div className="absolute inset-0 flex items-center justify-center">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 3, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                    className="absolute w-40 h-40 border border-primary/30 rounded-full"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Espaço reservado para visualização (opcional, mantendo apenas as instruções se nada estiver ocorrendo) */}
          <div className="w-full max-w-lg px-4 flex flex-col items-center gap-6">
            {!isListening && !response && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                className="text-[#9aa0a6] text-sm italic tracking-wide"
              >
                Toque no botão abaixo ou apenas comece a falar...
              </motion.p>
            )}
          </div>

          {/* Controles de Rodapé */}
          <div className="flex items-center gap-6">
            <button
              onClick={onMicToggle}
              className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                isListening ? 'bg-red-500 shadow-lg shadow-red-500/20' : 'bg-surface border border-border-dim'
              }`}
            >
              {isListening ? <MicOff size={32} /> : <Mic size={32} />}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VoiceMode;
