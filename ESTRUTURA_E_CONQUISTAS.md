# 🤖 Marina IA - Dossier de Engenharia e UX Premium

Este documento detalha a arquitetura, as funcionalidades de vanguarda e a filosofia de design que transformaram a **Marina IA** em uma assistente multimodal de elite.

---

## 💎 1. A Visão: "O Agente Proativo"
A Marina deixou de ser um simples chat para se tornar um **Agente Autônomo**. Ela possui consciência temporal, memória de longo prazo e a capacidade de interagir com o hardware do mundo real.

---

## 🧠 2. Arquitetura de Inteligência (Brainstack)
*   **Multi-Model Engine**: Integração via OpenRouter com suporte a Gemini, Llama 3, Claude e GPT.
*   **Busca Web Dinâmica (Sonar)**: Ativação em tempo real do motor Perplexity para navegação na internet.
*   **RAG Local (Conhecimento Externo)**: Processamento de documentos (PDF, Imagens, Texto) direto no navegador/app para respostas contextualizadas.
*   **Memória Seletiva**: Sistema de extração de fatos e preferências do usuário para personalização profunda.

---

## 🎙️ 3. Experiência Sensorial (Vocal & Haptic UX)
*   **Modo de Voz Imersivo**: Interface minimalista com feedback visual de ondas senoidais.
*   **Design de Fala (Vocal Design)**: 
    *   **Velocidade**: Otimizada para 1.2x (ritmo de alta produtividade).
    *   **Naturalidade**: Instruções de oratória para uso de pausas, termos de transição e fluidez humana.
    *   **Blindagem Android**: Sistema de buffer de silêncio e referência persistente para evitar cortes de áudio.
*   **Texturas Táteis (Haptics)**: Mais de 7 padrões de vibração nativa para confirmar envios, sucessos e alertas.

---

## 🛠️ 4. Capacidades de Agente (Action Protocol)
*   **Consciência Temporal**: Relógio sincronizado com o fuso horário de Brasília (UTC-3) injetado em cada interação.
*   **Sistema de Lembretes Proativo**: Protocolo universal `[REMINDER]` que agenda notificações nativas via IA.
*   **Ponte Nativa (Bridge)**: Canal de comunicação ultra-rápido entre a Web (Vercel) e o Smartphone (Android).

---

## 📂 5. Estrutura do Projeto (Navegação Rápida)
```
MARINA-IA/
├── 📱 App.js              # O Coração Nativo (WebView, Notificações, Biometria)
├── ⚙️ app.json            # Manifesto Expo (Plugins, Assets, Permissões)
├── assets/               # Assets Nativo (Ícones Adaptativos, Splash Screen)
├── src/
│   ├── App.tsx           # O Cérebro do App (Lógica de Chat, IA, Agente)
│   ├── components/       # Interface (VoiceMode, ChatArea, Settings, Sidebar)
│   ├── services/         # Motores (nativeBridge, storage, ragService)
│   └── styles/           # Identidade Visual (CSS Moderno, Glassmorphism)
└── public/               # Assets Web e PWA
```

---

## 🚀 6. Infraestrutura e Deploy
*   **Vercel (PWA)**: Deploy contínuo com suporte a notificações web e atualização instantânea.
*   **Expo/EAS (Nativo)**: Build Android Premium com suporte a hardware (Câmera, Biometria, Notificações em Background).
*   **Local-First**: 100% dos dados residem no dispositivo do usuário, garantindo privacidade soberana.

---

## ✅ 7. Conquistas desta Sessão:
- [x] **Conserto do Crash Nativo**: Reestruturação de assets e plugins.
- [x] **Voz Perfeita**: 1.2x de velocidade e naturalidade por prompt.
- [x] **Reminders Everywhere**: Agendamento funcional em PC e Mobile.
- [x] **Sincronia Total**: URL Vercel integrada ao APK.

> **"A Marina IA não apenas responde; ela entende, lembra e age."** 🦾🫡💎🚀
