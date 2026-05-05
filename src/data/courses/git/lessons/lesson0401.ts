import { Lesson } from '../../../../types/academy';

export const lesson0401: Lesson = {
  id: 'git-04-01',
  title: 'Criando Universos (branch e switch)',
  type: 'mixed',
  estimatedMinutes: 15,
  videoUrl: 'https://www.youtube.com/watch?v=R9Z5R7r97YQ',
  videoTitle: 'Trabalhando com Branches (Aula 10) - Curso em Vídeo',
  tips: [
    'A branch padrão se chama master (ou main). Ela é a sua linha do tempo principal e sagrada.',
    'Sempre crie uma branch nova para testar uma ideia. Se der errado, basta deletar a branch e a sua linha principal continuará perfeita.'
  ],
  content: {
    markdown: `
# 🌌 O Multiverso das Branches

Imagine que você tem um site funcionando perfeitamente. Agora, você quer testar uma cor nova para o fundo, mas tem medo de quebrar o site e as pessoas não conseguirem mais acessá-lo.

No Git, você não precisa correr esse risco. Você pode criar uma **Branch** (Ramo).

---

## 🌿 O que é uma Branch?

Uma branch é como uma cópia da sua linha do tempo. Você sai da linha principal (master) e cria uma linha paralela. Tudo o que você fizer nessa linha paralela NÃO afetará a linha principal até que você decida juntá-las.

### 1. Criando uma Branch
\`\`\`bash
git branch teste-de-cores
\`\`\`
Isso cria o universo, mas você ainda está no universo antigo.

### 2. Trocando de Universo
\`\`\`bash
git switch teste-de-cores
# Ou o comando antigo: git checkout teste-de-cores
\`\`\`
Agora, todos os commits que você fizer ficarão guardados apenas na branch \`teste-de-cores\`.

---

## ⚡ O Atalho do Flash

Programadores odeiam digitar dois comandos. Existe um atalho para criar a branch e já pular para dentro dela de uma vez só:

\`\`\`bash
git checkout -b nova-funcionalidade
# No Git moderno: git switch -c nova-funcionalidade
\`\`\`

---

## 🔍 Onde eu estou?

Para ver todas as branches que existem no seu projeto e saber em qual você está pisando agora, digite:
\`\`\`bash
git branch
\`\`\`
A branch com um asterisco \`*\` e uma cor diferente (geralmente verde) é a sua casa atual.
`
  },
  exercises: [
    {
      id: 'git-04-01-q1',
      type: 'multiple_choice',
      question: 'Qual a principal vantagem de usar Branches no Git?',
      options: [
        'Elas fazem o código rodar mais rápido.',
        'Elas permitem que você desenvolva novas funcionalidades ou teste correções em uma linha do tempo isolada, sem o risco de quebrar o código principal (master/main) que já está funcionando.',
        'Elas servem para fazer backup no Google Drive.',
        'Branches são usadas para traduzir o código.'
      ],
      correctAnswer: 1,
      explanation: 'Branches são "sandboxes" seguras. Se o teste na branch der errado, a master continua intacta.'
    },
    {
      id: 'git-04-01-q2',
      type: 'multiple_choice',
      question: 'Qual o comando curto (atalho) para criar uma branch chamada "recurso-novo" e já mudar para ela instantaneamente?',
      options: [
        'git branch recurso-novo',
        'git switch recurso-novo',
        'git checkout -b recurso-novo',
        'git create branch recurso-novo'
      ],
      correctAnswer: 2,
      explanation: 'O parâmetro "-b" (ou "-c" no switch) é o atalho para "Create and Checkout".'
    }
  ]
};
