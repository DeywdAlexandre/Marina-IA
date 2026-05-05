import { Lesson } from '../../../../types/academy';

export const lesson0602: Lesson = {
  id: 'lp-06-02',
  title: 'Índices (Onde está o meu dado?)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'A contagem em programação começa SEMPRE no ZERO (0).',
    'O primeiro item está na posição 0, o segundo na 1, e assim por diante.',
    'Se tentar acessar uma posição que não existe, o JavaScript retorna "undefined".'
  ],
  content: {
    markdown: `
# 📍 Índices: A Localização Exata

Cada "gaveta" do nosso armário de dados (Array) tem um número, chamado de **índice**.

**IMPORTANTE:** Na programação, nós somos "estranhos": começamos a contar do **0**!

---

## 🛠️ Acessando itens específicos

\`\`\`javascript
let linguagens = ["JavaScript", "Python", "C++"];

console.log(linguagens[0]); // JavaScript (O primeiro!)
console.log(linguagens[1]); // Python
console.log(linguagens[2]); // C++
\`\`\`

---

## ✍️ Alterando um item
Você pode usar o índice para trocar o valor de uma gaveta específica:

\`\`\`javascript
let nomes = ["Alex", "Maria", "João"];
nomes[0] = "Deywd"; // Troca Alex por Deywd

console.log(nomes); // ["Deywd", "Maria", "João"]
\`\`\`

---

## 🚀 Desafio no Editor
Crie um array com as cores do semáforo: \`["Verde", "Amarelo", "Vermelho"]\`. 
Use o \`console.log\` para imprimir apenas a cor que significa "Pare". Lembre-se de contar a partir do zero!
`,
    codeExamples: [
      {
        title: 'Ranking de Jogadores',
        language: 'javascript',
        code: `let podio = ["Ouro", "Prata", "Bronze"];\n\nconsole.log("O vencedor ganhou a medalha de: " + podio[0]);\nconsole.log("O terceiro lugar ficou com: " + podio[2]);`,
        output: 'O vencedor ganhou a medalha de: Ouro\nO terceiro lugar ficou com: Bronze',
        explanation: 'O índice 0 é sempre o campeão no mundo dos arrays.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-06-02-q1',
      type: 'multiple_choice',
      question: 'Se um Array tem 5 itens, qual o índice do ÚLTIMO item?',
      options: [
        '5',
        '4',
        '6',
        '0'
      ],
      correctAnswer: 1,
      explanation: 'Como começamos no 0, o último item de uma lista de 5 elementos é o índice 4.'
    }
  ]
};
