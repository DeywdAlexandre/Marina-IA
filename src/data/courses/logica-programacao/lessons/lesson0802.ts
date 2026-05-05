import { Lesson } from '../../../../types/academy';

export const lesson0802: Lesson = {
  id: 'lp-08-02',
  title: 'Filter (Filtrando o que Importa)',
  type: 'mixed',
  estimatedMinutes: 12,
  tips: [
    'O "filter" cria uma NOVA lista apenas com os itens que passarem no seu teste.',
    'Se a sua função retornar "true", o item fica. Se retornar "false", o item sai.',
    'A lista original nunca é alterada.'
  ],
  content: {
    markdown: `
# ☕ Filter: O Filtro de Café do Código

Imagine que você tem uma lista de 100 produtos e quer mostrar apenas os que custam menos de 50 reais. Em vez de fazer um loop e um \`if\` manual, usamos o **filter**.

---

## 🛠️ Como funciona

\`\`\`javascript
let notas = [4, 8, 5, 10, 3, 9];

let aprovados = notas.filter((nota) => {
  return nota >= 6;
});

console.log(aprovados); // [8, 10, 9]
\`\`\`

---

## 🏗️ Sintaxe Curta (Ninja)
Como aprendemos Arrow Functions, podemos fazer isso em uma linha:

\`\`\`javascript
let aprovados = notas.filter(n => n >= 6);
\`\`\`

---

## 🚀 Desafio no Editor
Crie um array de idades: \`[12, 18, 15, 25, 30, 10]\`. 
Use o \`.filter()\` para criar uma nova lista chamada \`adultos\` que contenha apenas as idades maiores ou iguais a 18. Imprima a nova lista!
`,
    codeExamples: [
      {
        title: 'Filtrando Objetos',
        language: 'javascript',
        code: `let produtos = [\n  { nome: "Mouse", preco: 50 },\n  { nome: "Teclado", preco: 150 },\n  { nome: "Monitor", preco: 800 }\n];\n\nlet baratos = produtos.filter(p => p.preco < 200);\nconsole.log(baratos);`,
        output: '[ { nome: "Mouse", preco: 50 }, { nome: "Teclado", preco: 150 } ]',
        explanation: 'O filter é a ferramenta número 1 para sistemas de busca e filtros em sites.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-08-02-q1',
      type: 'multiple_choice',
      question: 'O método filter() altera a lista original?',
      options: [
        'Sim, ele apaga os itens que não passarem no teste.',
        'Não, ele cria uma nova lista com os resultados e mantém a original intacta.',
        'Sim, mas apenas se usarmos Arrow Functions.',
        'Depende do navegador.'
      ],
      correctAnswer: 1,
      explanation: 'Esta é uma regra de ouro: métodos modernos como filter e map não alteram (não "mutam") os dados originais.'
    }
  ]
};
