import { Lesson } from '../../../../types/academy';

export const lesson1002: Lesson = {
  id: 'lp-10-02',
  title: 'Debugging: A Arte de Caçar Erros',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'Erros não são seus inimigos, são sinais de onde o código pode melhorar.',
    'O console.log é seu melhor amigo para "enxergar" o que está acontecendo dentro das variáveis.',
    'Leia as mensagens de erro! Elas costumam dizer a linha exata do problema.'
  ],
  content: {
    markdown: `
# 🐞 Debugging: Encontrando o Bug

"Debugar" vem de "tirar o besouro" (bug) de dentro das máquinas antigas. Hoje, significa encontrar o erro lógico no seu software.

---

## 🛠️ O Método do console.log
Se o seu código não está dando o resultado esperado, espalhe \`console.log\` para ver onde a lógica se perdeu.

\`\`\`javascript
function calcularTotal(preco, taxa) {
  console.log("Preço recebido:", preco); // Debug
  console.log("Taxa recebida:", taxa);   // Debug
  
  let total = preco + taxa;
  console.log("Total calculado:", total); // Debug
  
  return total;
}
\`\`\`

---

## 🔍 Lendo Mensagens de Erro
- **ReferenceError:** Você tentou usar uma variável que não existe ou escreveu o nome errado.
- **SyntaxError:** Você esqueceu um parêntese \`(\`, chave \`{\` ou aspas \`"\`.
- **TypeError:** Você tentou fazer algo impossível, como chamar uma função em cima de um número.

---

## 🚀 Desafio no Editor
O código abaixo tem um erro de sintaxe e um erro de lógica. Tente consertar ambos:
\`\`\`javascript
let preco = 100
let desconto = 20;

if (preco > 50) {
  let final = preco + desconto; // O erro de lógica está aqui! Deveria subtrair.
  console.log("Valor final: " + final);
}
\`\`\`
`,
    codeExamples: [
      {
        title: 'Depuração por Etapas',
        language: 'javascript',
        code: `let lista = ["A", "B"];\nconsole.log("Tamanho inicial:", lista.length);\n\nlista.push("C");\nconsole.log("Após push:", lista);`,
        output: 'Tamanho inicial: 2\nApós push: ["A", "B", "C"]',
        explanation: 'Verificar o estado das variáveis antes e depois de cada ação é a base do Debugging.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-10-02-q1',
      type: 'multiple_choice',
      question: 'O que significa o erro "ReferenceError: x is not defined"?',
      options: [
        'O computador está sem memória.',
        'Você esqueceu de declarar a variável "x" ou escreveu o nome dela incorretamente.',
        'O JavaScript parou de funcionar.',
        'Você precisa reiniciar o VS Code.'
      ],
      correctAnswer: 1,
      explanation: 'Sempre que ver "not defined", cheque se você criou a variável com let/const e se não há erros de digitação.'
    }
  ]
};
