import { Lesson } from '../../../../types/academy';

export const lesson0603: Lesson = {
  id: 'lp-06-03',
  title: 'Métodos Ninjas (Adicionando e Removendo)',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'O "push" coloca um item no FINAL da fila.',
    'O "pop" tira o ÚLTIMO item da fila.',
    'Existem muitos outros métodos, mas esses dois são os mais essenciais.'
  ],
  content: {
    markdown: `
# 🥋 Métodos: Dando Vida ao Array

Arrays em JavaScript são dinâmicos. Você pode adicionar e remover itens a qualquer momento usando "funções prontas" chamadas de **métodos**.

---

## ➕ Adicionando itens (push)
O \`push\` (empurrar) coloca um novo item no final da lista.

\`\`\`javascript
let time = ["Goleiro", "Zagueiro"];
time.push("Atacante");

console.log(time); // ["Goleiro", "Zagueiro", "Atacante"]
\`\`\`

---

## ➖ Removendo itens (pop)
O \`pop\` (estourar) remove o último item da lista e o "devolve" para você.

\`\`\`javascript
let mochila = ["Lanterna", "Corda", "Mapa"];
let itemRemovido = mochila.pop();

console.log("Você tirou o " + itemRemovido + " da mochila.");
console.log(mochila); // ["Lanterna", "Corda"]
\`\`\`

---

## 🚀 Desafio no Editor
Crie uma lista de tarefas vazia: \`let tarefas = [];\`. 
Adicione três tarefas nela usando o \`push\`. Depois, use o \`pop\` para remover a última e mostre no console como ficou a sua lista final.
`,
    codeExamples: [
      {
        title: 'Gerenciando Fila',
        language: 'javascript',
        code: `let fila = ["Ana", "Beto"];\nfila.push("Carlos"); // Chegou mais um\nconsole.log("Fila atual: " + fila);\n\nfila.pop(); // O último desistiu\nconsole.log("Fila final: " + fila);`,
        output: 'Fila atual: Ana,Beto,Carlos\nFila final: Ana,Beto',
        explanation: 'Push e Pop controlam o final da lista de forma rápida.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-06-03-q1',
      type: 'multiple_choice',
      question: 'Qual método usamos para adicionar um item ao FINAL de um Array?',
      options: [
        'add()',
        'insert()',
        'push()',
        'pop()'
      ],
      correctAnswer: 2,
      explanation: 'O método push() é o padrão para empurrar novos dados para o fim da lista.'
    }
  ]
};
