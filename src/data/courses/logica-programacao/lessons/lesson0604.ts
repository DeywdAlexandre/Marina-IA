import { Lesson } from '../../../../types/academy';

export const lesson0604: Lesson = {
  id: 'lp-06-04',
  title: 'Percorrendo Listas (O Casamento do For com o Array)',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'Usamos o loop "for" para olhar cada item de um array, um por um.',
    'A condição do loop geralmente é "i < lista.length".',
    'Dentro do loop, usamos "lista[i]" para acessar o item atual.'
  ],
  content: {
    markdown: `
# 🤝 O Grande Encontro: Loops + Arrays

É aqui que a mágica acontece. Imagine que você tem uma lista de 1000 preços e quer aplicar 10% de desconto em todos. Você não vai fazer isso manualmente!

Usamos o loop **for** para "percorrer" o array.

---

## 🛠️ Como percorrer uma lista

\`\`\`javascript
let frutas = ["Maçã", "Banana", "Uva"];

for (let i = 0; i < frutas.length; i++) {
  console.log("Eu gosto de: " + frutas[i]);
}
\`\`\`

1. O \`i\` começa em **0** (o primeiro índice).
2. O loop roda enquanto o \`i\` for menor que o tamanho da lista (\`length\`).
3. Em cada rodada, pegamos o item na posição \`i\`.

---

## 🚀 Desafio no Editor
Crie um array com 5 números quaisquer. Use um loop \`for\` para percorrer esse array e imprimir o **dobro** de cada número no console.
`,
    codeExamples: [
      {
        title: 'Somador de Notas',
        language: 'javascript',
        code: `let notas = [10, 8, 6, 9];\nlet soma = 0;\n\nfor (let i = 0; i < notas.length; i++) {\n  soma += notas[i];\n}\n\nconsole.log("Média final: " + (soma / notas.length));`,
        output: 'Média final: 8.25',
        explanation: 'Percorrer arrays é a forma mais comum de processar dados em massa na programação.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-06-04-q1',
      type: 'multiple_choice',
      question: 'Por que usamos "i < lista.length" como condição no loop?',
      options: [
        'Para o loop ser infinito.',
        'Para garantir que o contador "i" nunca tente acessar um índice que não existe fora da lista.',
        'Porque o JavaScript exige essa escrita exata.',
        'Para somar os números da lista.'
      ],
      correctAnswer: 1,
      explanation: 'Como os índices vão de 0 até length - 1, a condição "menor que length" garante que olharemos todos os itens corretamente.'
    }
  ]
};
