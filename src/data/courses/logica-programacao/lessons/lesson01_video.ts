import { Lesson } from '../../../../types/academy';

export const lesson01Video: Lesson = {
  id: 'lp-01-video',
  title: '🎬 Revisão em Vídeo: Fundamentos',
  type: 'video',
  estimatedMinutes: 8,
  videoUrl: '', // O usuário vai colar o link do YouTube aqui
  videoTitle: 'Resumo Completo do Módulo 1',
  tips: [
    'Assista a este resumo para consolidar os conceitos de variáveis e tipos de dados.',
    'Este vídeo foi gerado pela Marina IA em parceria com o NotebookLM para garantir sua melhor performance no Quiz.'
  ],
  content: {
    markdown: `
# 📺 Hora da Revisão!

Você concluiu a parte teórica do **Módulo 1: Fundamentos**. 

Antes de seguir para o **Quiz de Certificação**, assista a este vídeo-resumo que consolida tudo o que aprendemos:
- O conceito de "Caixas da Memória" (Variáveis).
- A diferença entre \`let\` e \`const\`.
- Como o computador entende Strings, Numbers e Booleans.

---

### 📝 O que fazer agora?
1. Assista ao vídeo atentamente.
2. Se tiver dúvidas, use a **Marina IA** (ícone de chat acima) para perguntar.
3. Quando se sentir pronto, clique em **Concluir** e encare o **Quiz do Módulo**!
`
  }
};
