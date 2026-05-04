# 📝 Tarefas: Multimodalidade e Gestão de Conhecimento (RAG)

Este plano foca em permitir que a Marina analise documentos complexos (PDF/TXT) e interaja com o mundo físico através da visão computacional.

## 📄 1. RAG Local (Conversar com Documentos)
- [x] **Extração de Texto**:
    - [x] Integrar `pdfjs-dist` para ler PDFs.
    - [x] Suporte para `.txt` e `.json`.
- [x] **Sistema de Busca (Mini-RAG)**:
    - [x] Lógica de "Chunking" implementada.
    - [x] Busca por similaridade baseada em termos.
- [x] **Integração no Chat**:
    - [x] Visualização de "Document Chips".
    - [x] Injeção de contexto RAG no systemPrompt.

## 👁️ 2. Visão Avançada (Mundo Real)
- [x] **Integração com Câmera Nativa**:
    - [x] Comando `CAMERA` na bridge nativa.
    - [x] Botão de acesso rápido no chat.
- [/] **Análise Multimodal**:
    - [x] Fluxo de envio de imagem otimizado.

## 🗂️ 3. Gestão de Conhecimento
- [x] **Biblioteca de Arquivos**:
    - [x] Persistência de documentos no `localStorage`.
    - [x] Interface de gestão de documentos no `SettingsModal`.
    - [x] Carregamento automático de contexto ao iniciar.

---

## 🎨 4. Interface e UX State-of-the-Art
- [x] **Modo de Voz Imersivo**:
    - [x] Interface de tela cheia com ondas sonoras orgânicas (`framer-motion`).
    - [x] Integração total com o fluxo de voz grátis.
- [x] **Micro-interações Táteis (Haptics)**:
    - [x] Implementação de 7 estilos de vibração (texturas).
    - [x] Feedback tátil em streaming, conclusões e navegação.
- [ ] **Widgets de Tela Inicial**:
    - [ ] Explorar atalhos rápidos para Android (Atalhos de App).

---

## 🛠️ Manutenção e Build
- [x] Sincronizar dependências Expo SDK 52 (Fix Gradle Error).
- [/] Novo build do APK Multimodal + UX Premium (Em fila/EAS).
