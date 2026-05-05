import { Lesson } from '../../../../types/academy';

export const lesson0603: Lesson = {
  id: 'git-06-03',
  title: 'Issues e Projetos (Organização)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'Uma "Issue" pode ser um bug reportado por um usuário ou uma sugestão de nova funcionalidade.',
    'O Kanban do GitHub Projects ajuda a equipe a saber quem está fazendo o quê em tempo real.'
  ],
  content: {
    markdown: `
# 📋 Organizando o Caos (Issues e Projects)

Trabalhar em equipe não é apenas escrever código. Alguém precisa decidir o que será feito primeiro, quem vai consertar o botão quebrado e qual é a prioridade da semana.

O GitHub oferece ferramentas de gerenciamento de projetos integradas ao seu código.

---

## 🐛 Issues (Problemas e Tarefas)

As **Issues** são como "Post-its" ou tickets de suporte. 
- Se um usuário encontrar um erro no seu site, ele abre uma Issue descrevendo o problema.
- Você pode rotular as issues com etiquetas como \`bug\`, \`enhancement\` (melhoria) ou \`documentation\`.
- Você pode atribuir uma issue a um desenvolvedor específico para ele resolver.

---

## 🏗️ GitHub Projects (O Kanban)

O **GitHub Projects** é um quadro visual (estilo Trello ou Jira).
Ele permite organizar suas Issues em colunas:
1. **Todo (Para fazer):** Lista de tarefas pendentes.
2. **In Progress (Em andamento):** O que a equipe está mexendo agora.
3. **Done (Feito):** Tarefas concluídas e código mesclado.

Ter essa visão clara impede que dois desenvolvedores trabalhem na mesma tarefa ao mesmo tempo e ajuda a gerência a ver o progresso do projeto sem precisar perguntar a cada cinco minutos.

> 💡 **Dica Profissional:** Quando você faz um commit, você pode escrever no final: \`Fixes #15\`. O GitHub é tão inteligente que ele vai fechar a Issue número 15 automaticamente assim que o seu código for aceito!
`
  },
  exercises: [
    {
      id: 'git-06-03-q1',
      type: 'multiple_choice',
      question: 'Para que serve a aba "Issues" em um repositório do GitHub?',
      options: [
        'Para postar fotos do projeto.',
        'Para relatar bugs, sugerir novas ideias de funcionalidades e organizar as tarefas pendentes do projeto.',
        'Para deletar o repositório.',
        'Para ver o histórico de commits.'
      ],
      correctAnswer: 1,
      explanation: 'Issues são a central de comunicação e organização de tudo o que precisa ser feito ou consertado.'
    },
    {
      id: 'git-06-03-q2',
      type: 'multiple_choice',
      question: 'Qual a vantagem de usar o GitHub Projects (Kanban)?',
      options: [
        'Ele deixa o site mais colorido.',
        'Ele permite uma visualização clara do fluxo de trabalho da equipe, mostrando o que está pendente, o que está sendo feito e o que já foi finalizado.',
        'Ele aumenta a velocidade do download do código.',
        'Ele serve para traduzir as Issues.'
      ],
      correctAnswer: 1,
      explanation: 'Organização visual é a chave para a produtividade de qualquer equipe de software moderna.'
    }
  ]
};
