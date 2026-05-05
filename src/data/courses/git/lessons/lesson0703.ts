import { Lesson } from '../../../../types/academy';

export const lesson0703: Lesson = {
  id: 'git-07-03',
  title: 'Reescrita da História (rebase)',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'O rebase deixa o histórico "limpo" e linear, sem aquelas curvas de merge no gráfico.',
    'REGRA DE OURO: Nunca dê rebase em branches que já foram enviadas para o GitHub e que outras pessoas estão usando!'
  ],
  content: {
    markdown: `
# 🛠️ Git Rebase: O Cirurgião Plástico

O **Merge** é como um casamento: duas linhas do tempo se encontram e criam um "filho" (um commit de merge) para selar a união. Isso deixa o histórico cheio de "bolinhas" e ramificações.

O **Rebase** é diferente. Ele é como uma cirurgia plástica na história. Ele pega todos os seus commits da branch e os "teletransporta" para o topo da master, como se você tivesse acabado de começar a trabalhar agora mesmo.

---

## 🧬 Como funciona o Rebase

Imagine que você está na branch \`recurso-novo\`. A \`master\` recebeu 5 commits novos enquanto você trabalhava.

Se você der um **\`git rebase master\`**:
1. O Git retira temporariamente os seus commits da branch.
2. Ele traz os 5 commits novos da master para a sua branch.
3. Ele "cola" os seus commits de volta, um por um, no topo da nova base.

O resultado é uma linha do tempo **perfeitamente reta**.

---

## ⚠️ O Perigo do Rebase

Como o Rebase "teletransporta" os commits, ele muda o **Hash** (a placa) de cada um deles. 
Se você já mandou o código pro GitHub (\`push\`) e outra pessoa baixou, e depois você dá um rebase, o Git dela vai ficar louco porque a história dela não bate mais com a sua.

> 💡 **Conclusão:** 
> - Quer histórico limpo e linear? Use **Rebase** (apenas localmente!).
> - Quer segurança e manter a verdade histórica? Use **Merge**.
`
  },
  exercises: [
    {
      id: 'git-07-03-q1',
      type: 'multiple_choice',
      question: 'Qual a principal diferença visual entre um histórico que usa apenas MERGE e um que usa apenas REBASE?',
      options: [
        'O Merge é mais colorido.',
        'O histórico com Merge é cheio de ramificações e encontros. O histórico com Rebase é uma linha única e reta (linear).',
        'O Rebase apaga o nome do autor.',
        'Não há diferença visual.'
      ],
      correctAnswer: 1,
      explanation: 'O rebase "reescreve" a base da sua branch para que ela pareça ter nascido do ponto mais recente da master.'
    },
    {
      id: 'git-07-03-q2',
      type: 'multiple_choice',
      question: 'Por que não devemos dar Rebase em branches públicas (que já estão no GitHub)?',
      options: [
        'Porque o GitHub cobra taxa extra por rebase.',
        'Porque o rebase muda os códigos de identificação (Hash) dos commits, o que quebraria a sincronização com o computador de todos os outros colegas que já baixaram aquele código.',
        'Porque o rebase só funciona offline.',
        'Porque o rebase deleta a conta do GitHub.'
      ],
      correctAnswer: 1,
      explanation: 'Mudar a história que já é pública é o maior pecado do Git. Isso causa conflitos insolúveis para o resto da equipe.'
    }
  ]
};
