import { Lesson } from '../../../../types/academy';

export const lesson0504: Lesson = {
  id: 'lp-05-04',
  title: 'Arrow Functions (O Jeito Moderno)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'Arrow Functions são uma forma mais curta de escrever funções.',
    'Usamos o símbolo "=>" (flecha).',
    'São as favoritas no desenvolvimento de apps modernos com React e Next.js.'
  ],
  content: {
    markdown: `
# 🏹 Arrow Functions: Código Ninja

No JavaScript moderno, usamos muito as **Arrow Functions**. Elas fazem a mesma coisa que as funções normais, mas com uma sintaxe muito mais limpa.

---

## 🛠️ Comparação

**Função Normal:**
\`\`\`javascript
function somar(a, b) {
  return a + b;
}
\`\`\`

**Arrow Function:**
\`\`\`javascript
const somar = (a, b) => {
  return a + b;
};
\`\`\`

---

## 🏗️ O Poder da Simplicidade
Se a sua função tiver apenas uma linha, você pode até tirar as chaves e o \`return\`. Ele fica implícito!

\`\`\`javascript
const triplo = n => n * 3;
console.log(triplo(10)); // 30
\`\`\`

---

## 🚀 Desafio no Editor
Tente converter sua função de calcular a área (largura * altura) para uma Arrow Function de uma única linha. Veja como o código fica mais limpo!
`,
    codeExamples: [
      {
        title: 'Sintaxe Curta',
        language: 'javascript',
        code: `const saudar = nome => "Olá, " + nome;\n\nconsole.log(saudar("Marina"));`,
        output: 'Olá, Marina',
        explanation: 'Arrow functions de uma linha são perfeitas para pequenas transformações de dados.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-05-04-q1',
      type: 'multiple_choice',
      question: 'Qual símbolo identifica uma Arrow Function?',
      options: [
        '==>',
        '->',
        '=>',
        '-->'
      ],
      correctAnswer: 2,
      explanation: 'O símbolo => (igual + maior que) forma a "flecha" que dá nome à estrutura.'
    }
  ]
};
