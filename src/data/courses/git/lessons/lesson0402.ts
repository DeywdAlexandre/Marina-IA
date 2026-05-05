import { Lesson } from '../../../../types/academy';

export const lesson0402: Lesson = {
  id: 'git-04-02',
  title: 'Juntando Universos (merge)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'Para fazer o merge, você precisa estar na branch que vai RECEBER o código (geralmente a master).',
    'O merge "puxa" as alterações da outra branch para dentro da sua branch atual.'
  ],
  content: {
    markdown: `
# 🤝 O Encontro das Linhas do Tempo

Você criou uma branch, testou as cores novas e ficou lindo. Agora é hora de trazer esse sucesso para a linha principal do seu projeto para que todos possam ver. Esse processo de fusão se chama **Merge**.

---

## 🏗️ Como realizar um Merge em 2 passos

Imagine que você está na branch \`teste-de-cores\` e quer levar o código para a \`master\`.

### Passo 1: Volte para a base
Você não pode "empurrar" o código para a master de longe. Você tem que ir até a master primeiro.
\`\`\`bash
git switch master
\`\`\`

### Passo 2: Puxe a branch para dentro
Agora que você está na master, diga ao Git para engolir as alterações da sua branch de teste.
\`\`\`bash
git merge teste-de-cores
\`\`\`

O Git vai olhar os arquivos e juntar tudo automaticamente. Se tudo der certo, ele dirá "Fast-forward" ou "Merge made by the recursive strategy". Parabéns, seu site agora tem cores novas na linha principal!

---

## 🧹 Limpando a bagunça

Uma vez que o código da branch já foi mesclado com a master, aquela branch de teste não serve para mais nada. É boa prática deletá-la para o projeto não virar uma floresta bagunçada.

\`\`\`bash
git branch -d teste-de-cores
\`\`\`
`
  },
  exercises: [
    {
      id: 'git-04-02-q1',
      type: 'multiple_choice',
      question: 'Você terminou de trabalhar na branch "ajuste-layout" e quer mesclar esse código na branch "master". Onde você deve estar (em qual branch) no momento de rodar o comando "git merge"?',
      options: [
        'Na branch "ajuste-layout".',
        'Em qualquer branch, o Git resolve sozinho.',
        'Na branch "master" (a branch que vai receber as novidades).',
        'No GitHub.'
      ],
      correctAnswer: 2,
      explanation: 'Sempre mude para o DESTINO antes de chamar o merge. Você "puxa" as mudanças para onde você está pisando.'
    },
    {
      id: 'git-04-02-q2',
      type: 'multiple_choice',
      question: 'O que o comando "git branch -d nome-da-branch" faz?',
      options: [
        'Deleta a branch permanentemente da história.',
        'Apaga todos os arquivos da pasta.',
        'Deleta a branch local de forma segura (só se o código já tiver sido salvo/mesclado em outro lugar).',
        'Cria uma branch duplicada.'
      ],
      correctAnswer: 2,
      explanation: 'O parâmetro "-d" (delete) limpa branches que já cumpriram seu papel, mantendo seu repositório organizado.'
    }
  ]
};
