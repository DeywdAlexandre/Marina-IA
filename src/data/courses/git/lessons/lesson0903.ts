import { Lesson } from '../../../../types/academy';

export const lesson0903: Lesson = {
  id: 'git-09-03',
  title: 'Atalhos de Elite (Aliases)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'Atalhos salvam minutos de digitação todos os dias. No final de um ano, você terá economizado horas de trabalho.',
    'Você pode criar atalhos para comandos complexos que você nunca lembra de cabeça.'
  ],
  content: {
    markdown: `
# ⚡ Velocidade Máxima (\`alias\`)

Você está cansado de digitar \`git status\` 50 vezes por dia? Ou \`git checkout master\`?
O Git permite que você crie seus próprios apelidos (atalhos) para os comandos.

---

## 🏗️ Criando seu primeiro Atalho

Para transformar \`git status\` em apenas \`git s\`, digite no terminal:

\`\`\`bash
git config --global alias.s status
\`\`\`

Agora, basta digitar **\`git s\`** e o Git entenderá o comando completo.

---

## 🔥 Sugestões de Atalhos de Ninja

Aqui estão os favoritos dos profissionais:

1. **Abreviações simples:**
   - \`git config --global alias.c commit\` (Basta usar \`git c -m "..."\`)
   - \`git config --global alias.p push\` (Basta usar \`git p\`)

2. **O Log Colorido e Bonito:**
   \`\`\`bash
   git config --global alias.lg "log --oneline --graph --all"
   \`\`\`
   *(Agora o seu histórico vira um gráfico lindo com apenas \`git lg\`)*

3. **O Botão de Pânico:**
   - \`git config --global alias.desfaz "reset --soft HEAD~1"\`
   *(Agora \`git desfaz\` cancela o seu último commit sem apagar seu código)*
`
  },
  exercises: [
    {
      id: 'git-09-03-q1',
      type: 'multiple_choice',
      question: 'O que o comando "git config --global alias.st status" faz?',
      options: [
        'Muda o nome do Git para "Status".',
        'Cria um atalho onde, ao digitar "git st", o Git executa o comando completo "git status".',
        'Deleta as configurações globais.',
        'Aumenta a velocidade da internet.'
      ],
      correctAnswer: 1,
      explanation: 'Aliases são apelidos poderosos que aumentam a sua produtividade no terminal.'
    }
  ]
};
