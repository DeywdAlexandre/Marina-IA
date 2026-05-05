import { Lesson } from '../../../../types/academy';

export const lesson0102: Lesson = {
  id: 'js-int-01-02',
  title: 'Seletores: Encontrando Agulhas no Palheiro',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'Use o "id" para seletores únicos.',
    'Use "class" para seletores de múltiplos elementos.',
    'O querySelector é o seletor mais moderno e flexível.'
  ],
  content: {
    markdown: `
# 🔍 Seletores: Onde está o elemento?

Antes de mudar algo na página, você precisa **encontrar** esse algo. No JavaScript, usamos seletores para "agarrar" os elementos do HTML.

---

## 🛠️ Os principais métodos

### 1. Pelo ID (Único)
\`\`\`javascript
let titulo = document.getElementById("meu-titulo");
\`\`\`

### 2. Pela Classe (Múltiplos)
\`\`\`javascript
let botoes = document.getElementsByClassName("btn-primario");
\`\`\`

### 3. O "Coringa": querySelector
O \`querySelector\` usa a mesma sintaxe do CSS (# para id, . para classe). É o favorito dos desenvolvedores modernos.

\`\`\`javascript
let header = document.querySelector(".topo-site");
let todosLinks = document.querySelectorAll("a"); // Pega todos
\`\`\`

---

## 🚀 Desafio no Editor
Imagine que temos um elemento com o ID \`alvo\`. Como você o selecionaria usando o \`querySelector\`? Tente salvar em uma variável chamada \`elemento\` e imprima-a no console.
`,
    codeExamples: [
      {
        title: 'Selecionando com Precisão',
        language: 'javascript',
        code: `// Seleciona o primeiro parágrafo dentro de uma div com classe 'container'\nlet p = document.querySelector(".container p");\nconsole.log(p);`,
        output: '<p>...</p>',
        explanation: 'O querySelector permite usar seletores compostos, exatamente como no CSS.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-01-02-q1',
      type: 'multiple_choice',
      question: 'Qual a diferença entre querySelector e querySelectorAll?',
      options: [
        'Não há diferença.',
        'O querySelector retorna apenas o primeiro elemento encontrado, enquanto o querySelectorAll retorna uma lista (NodeList) com todos os encontrados.',
        'O querySelectorAll é apenas para imagens.',
        'O querySelector é mais rápido.'
      ],
      correctAnswer: 1,
      explanation: 'Sempre que precisar de mais de um elemento (como todos os itens de uma lista), use o All.'
    }
  ]
};
