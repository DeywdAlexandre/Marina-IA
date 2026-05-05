import { Lesson } from '../../../../types/academy';

export const lesson0601: Lesson = {
  id: 'lp-06-01',
  title: 'O que são Arrays? (Os Armários de Dados)',
  type: 'mixed',
  estimatedMinutes: 12,
  tips: [
    'Um Array é uma lista ordenada de valores.',
    'Imagine como um armário com várias gavetas numeradas.',
    'Usamos colchetes [ ] para criar um array.'
  ],
  content: {
    markdown: `
# 🗄️ Arrays: A Lista Mestra

Até agora, cada variável guardava apenas um valor. Mas e se você precisasse guardar os nomes de 50 alunos? Criaria 50 variáveis? (\`aluno1\`, \`aluno2\`...). **Claro que não!**

Para isso usamos o **Array** (também chamado de Vetor ou Lista).

---

## 🛠️ Criando seu primeiro Array

\`\`\`javascript
let frutas = ["Maçã", "Banana", "Uva", "Morango"];

console.log(frutas);
\`\`\`

Um array pode guardar qualquer tipo de dado: strings, números, booleanos ou até outros arrays!

---

## 📏 O Tamanho da Lista (length)
Para saber quantos itens existem dentro de um array, usamos a propriedade \`.length\`.

\`\`\`javascript
let carros = ["Fusca", "Tesla", "Ferrari"];
console.log("Total de carros: " + carros.length); // 3
\`\`\`

---

## 🚀 Prática no Editor
Crie um array chamado \`meusJogos\` com os nomes de 3 jogos que você gosta. Use o \`console.log\` para mostrar a lista e o tamanho dela.
`,
    codeExamples: [
      {
        title: 'Lista de Compras',
        language: 'javascript',
        code: `let compras = ["Arroz", "Feijão", "Ovo", "Leite"];\n\nconsole.log("Minha lista tem " + compras.length + " itens.");\nconsole.log(compras);`,
        output: 'Minha lista tem 4 itens.\n["Arroz", "Feijão", "Ovo", "Leite"]',
        explanation: 'Arrays são fundamentais para organizar grupos de informações relacionadas.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-06-01-q1',
      type: 'multiple_choice',
      question: 'Qual símbolo usamos para declarar um Array no JavaScript?',
      options: [
        'Chaves { }',
        'Parênteses ( )',
        'Colchetes [ ]',
        'Aspas " "'
      ],
      correctAnswer: 2,
      explanation: 'Os colchetes [ ] são a marca registrada dos Arrays.'
    }
  ]
};
