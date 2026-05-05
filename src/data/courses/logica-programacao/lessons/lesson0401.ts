import { Lesson } from '../../../../types/academy';

export const lesson0401: Lesson = {
  id: 'lp-04-01',
  title: 'O Loop WHILE (Enquanto houver fôlego)',
  type: 'mixed',
  estimatedMinutes: 12,
  tips: [
    'O "while" é ideal quando você não sabe exatamente quantas vezes algo vai se repetir.',
    'Cuidado com o loop infinito! Sempre garanta que a condição uma hora se torne falsa.',
    'Use o comando "i++" dentro do loop para controlar a contagem.'
  ],
  content: {
    markdown: `
# 🔄 Estruturas de Repetição: While

Imagine que você precisa escrever "Eu amo programar" 100 vezes. Você faria isso manualmente? Claro que não! Para isso existem os **Loops**.

O loop **while** (enquanto) repete um bloco de código **enquanto** uma condição for verdadeira.

---

## 🛠️ Exemplo de uma Contagem Regressiva

\`\`\`javascript
let contador = 5;

while (contador > 0) {
  console.log("Lançamento em: " + contador);
  contador--; // Importante: diminui o valor para o loop não ser infinito!
}

console.log("Foguete lançado! 🚀");
\`\`\`

---

## ⚠️ O Perigo do Loop Infinito
Se você esquecer de mudar o valor da variável (como o \`contador--\`), o computador vai tentar rodar o código para sempre, o que pode travar o navegador. Sempre verifique seu "ponto de parada".

---

## 🚀 Prática no Editor
Crie um sistema que conte de 0 até 10 e imprima no console. Use uma variável \`i\` começando em 0 e use o \`while (i <= 10)\`. Não esqueça do \`i++\`!
`,
    codeExamples: [
      {
        title: 'Gerador de Números Pares',
        language: 'javascript',
        code: `let n = 0;\n\nwhile (n <= 10) {\n  if (n % 2 === 0) {\n    console.log(n + " é PAR");\n  }\n  n++;\n}`,
        output: '0 é PAR\n2 é PAR\n4 é PAR\n6 é PAR\n8 é PAR\n10 é PAR',
        explanation: 'Combinamos um loop com um IF para filtrar apenas os números que queremos.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-04-01-q1',
      type: 'multiple_choice',
      question: 'O que acontece se a condição do "while" for falsa logo de primeira?',
      options: [
        'O código roda uma vez e para.',
        'O código nunca é executado.',
        'O programa dá erro.',
        'O computador trava.'
      ],
      correctAnswer: 1,
      explanation: 'O while testa a condição ANTES de entrar. Se for falsa, ele nem começa.'
    }
  ]
};
