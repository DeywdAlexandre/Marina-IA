import { Lesson } from '../../../../types/academy';

export const lesson0701: Lesson = {
  id: 'git-07-01',
  title: 'O Bolso Mágico (stash)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'O stash é temporário. Pense nele como uma gaveta onde você joga a bagunça quando uma visita chega de surpresa.',
    'Você pode dar vários stashes seguidos e o Git vai guardando todos em uma pilha.'
  ],
  content: {
    markdown: `
# 👜 O Bolso Mágico do Git (\`stash\`)

Imagine a cena: você está no meio de uma alteração super complexa no código, com vários arquivos bagunçados e nada funcionando ainda. 
De repente, seu chefe aparece: *"Marina, larga tudo e conserta esse erro urgente na master agora!"*.

Você não pode mudar de branch (\`switch\`) porque o Git vai reclamar que seus arquivos estão sujos. E você também não quer dar um commit num código que está quebrado.

O que fazer? Use o **\`git stash\`**.

---

## 📥 Guardando na Gaveta

O comando \`stash\` pega todas as suas alterações atuais e as esconde em um lugar seguro e temporário, limpando a sua pasta de trabalho instantaneamente.

\`\`\`bash
git stash
\`\`\`

Agora seu projeto está limpinho, como se você nunca tivesse mexido em nada. Você pode ir para a master, consertar o erro, dar o commit e o push.

---

## 📤 Pegando de Volta

Consertou o erro urgente? Agora volte para a sua branch e peça para o Git devolver a sua bagunça:

\`\`\`bash
git stash pop
\`\`\`

O comando \`pop\` traz as alterações de volta e já limpa o "bolso" do Git. Você volta exatamente para onde parou, com o código quebrado e tudo!

---

## 🔍 Outros comandos úteis

- **\`git stash list\`**: Vê tudo o que você tem guardado no bolso.
- **\`git stash apply\`**: Traz de volta mas mantém uma cópia no bolso.
- **\`git stash drop\`**: Joga fora o que está no bolso sem aplicar no código.
`
  },
  exercises: [
    {
      id: 'git-07-01-q1',
      type: 'multiple_choice',
      question: 'Em qual situação o comando "git stash" é o seu melhor amigo?',
      options: [
        'Quando você quer apagar o projeto.',
        'Quando você precisa trocar de branch para uma tarefa urgente, mas seu código atual está bagunçado e incompleto e você não quer fazer um commit dele agora.',
        'Quando você quer enviar o código para o GitHub.',
        'Quando você quer renomear uma branch.'
      ],
      correctAnswer: 1,
      explanation: 'O stash é a "gaveta de bagunça" perfeita para emergências.'
    },
    {
      id: 'git-07-01-q2',
      type: 'multiple_choice',
      question: 'Qual o comando usado para resgatar as alterações guardadas e já limpar o stash ao mesmo tempo?',
      options: [
        'git stash get',
        'git stash push',
        'git stash pop',
        'git stash restore'
      ],
      correctAnswer: 2,
      explanation: 'O termo "pop" vem de pilhas de dados: você retira o item do topo e o utiliza.'
    }
  ]
};
