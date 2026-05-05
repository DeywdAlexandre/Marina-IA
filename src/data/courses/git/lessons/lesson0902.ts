import { Lesson } from '../../../../types/academy';

export const lesson0902: Lesson = {
  id: 'git-09-02',
  title: 'Mensagens Profissionais (Conventional Commits)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'Seguir um padrão ajuda robôs a lerem seu histórico e gerarem relatórios de mudanças (Changelogs) automaticamente.',
    'Nunca mais use mensagens como "ajustes", "fix" ou "......".'
  ],
  content: {
    markdown: `
# ✍️ Escrevendo como um Sênior

Em grandes empresas e projetos Open Source, as mensagens de commit não são aleatórias. Existe um padrão mundial chamado **Conventional Commits**. 

Ele serve para que qualquer pessoa (ou robô) entenda a **intenção** daquela mudança só de ler o título.

---

## 🏗️ A Estrutura Mágica

A mensagem deve seguir este formato:
\`tipo(escopo): descrição curta em letras minúsculas\`

### Os tipos principais:
- **\`feat:\`** Uma nova funcionalidade (ex: \`feat: adiciona botão de login\`).
- **\`fix:\`** Correção de um bug (ex: \`fix: corrige erro no cálculo do frete\`).
- **\`docs:\`** Mudanças apenas na documentação (ex: \`docs: atualiza instruções de instalação\`).
- **\`style:\`** Mudanças de aparência que não afetam a lógica (ex: \`style: muda cor do cabeçalho\`).
- **\`refactor:\`** Mudança no código que não corrige bug nem adiciona funcionalidade (limpeza de código).
- **\`test:\`** Adição ou correção de testes.

---

## 🌟 Por que usar?

1. **Organização:** Seu histórico de commits vira uma linha do tempo profissional.
2. **Busca:** É muito fácil achar quando uma funcionalidade foi adicionada pesquisando por \`feat:\`.
3. **Respeito:** Outros desenvolvedores verão que você conhece as boas práticas do mercado.
`
  },
  exercises: [
    {
      id: 'git-09-02-q1',
      type: 'multiple_choice',
      question: 'Qual a mensagem de commit abaixo segue o padrão profissional de Conventional Commits?',
      options: [
        'COMMIT FINAL AGORA VAI',
        'ajuste no css do menu',
        'feat: adiciona sistema de busca por voz',
        'corrigindo erro'
      ],
      correctAnswer: 2,
      explanation: 'O prefixo "feat:" indica claramente que se trata de uma nova funcionalidade, seguindo o padrão da indústria.'
    }
  ]
};
