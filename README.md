# 🌊 Marina IA - Assistente Pessoal de Alta Produtividade

Marina IA é um aplicativo multimodal de última geração construído com **React**, **Vite** e **Expo**, focado em privacidade, produtividade e uma experiência de usuário (UX) de luxo.

![Marina IA Interface](https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=1200&h=600&auto=format&fit=crop)

## 🚀 Principais Funcionalidades

### 🧠 1. RAG Local (Retrieval-Augmented Generation)
A Marina não apenas conversa; ela aprende com seus documentos. Implementamos um motor de busca semântica local que permite:
- **Indexação de Documentos**: Analise PDFs, TXTs e JSONs sem que os dados saiam do dispositivo.
- **Contexto Inteligente**: A IA utiliza trechos relevantes dos seus arquivos para responder perguntas complexas sobre contratos, códigos ou livros.

### 👁️ 2. Visão Computacional Nativa
Integrada diretamente ao hardware do dispositivo através de uma ponte nativa personalizada:
- **Análise em Tempo Real**: Tire fotos ou envie imagens para que a Marina descreva objetos, transcreva textos ou analise códigos.
- **Multimodalidade**: Alternância fluida entre visão, voz e texto.

### 🎙️ 3. Modo de Voz Imersivo "State-of-the-Art"
Uma interface focada em áudio para uma experiência hands-free de luxo:
- **Visual Orgânico**: Ondas sonoras animadas com `framer-motion` que reagem à interação.
- **Auto-Voz**: Respostas automáticas em português com síntese de voz (TTS) inteligente.
- **Transcrição Instantânea**: Reconhecimento de voz (STT) com reset automático para conversas fluidas.

### 📳 4. Micro-interações Táteis (Haptics)
O app utiliza o hardware de vibração do smartphone para criar "texturas" digitais:
- **Feedback Sensorial**: Diferentes padrões de vibração para conclusões de raciocínio, notificações e erros.
- **Imersão**: Sinta a resposta da IA fisicamente enquanto ela processa informações.

### 📊 5. Dashboard de Produtividade e Artefatos
- **Visualização de Dados**: Renderização automática de gráficos (Barra, Linha, Pizza) direto no chat.
- **Editor de Artefatos**: Painel lateral para visualizar e editar códigos HTML ou documentos gerados pela IA em tempo real.

## 🛠️ Stack Tecnológica
- **Frontend**: React 18, TypeScript, Tailwind CSS.
- **Animações**: Framer Motion / Motion for React.
- **Nativo**: Expo SDK 52, React Native WebView.
- **IA**: OpenRouter (Gemini, Llama, Claude, Perplexity).
- **Processamento Local**: PDF.js para extração de dados.

## 📦 Como Rodar
1.  Clone o repositório.
2.  Instale as dependências: `npm install`.
3.  Configure sua `OPENROUTER_API_KEY` no arquivo `.env`.
4.  Inicie o ambiente de desenvolvimento: `npm run dev`.

---
*Desenvolvido com foco em UX, Privacidade e Performance.* 🌊✨🦾
