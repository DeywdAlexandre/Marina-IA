import { Lesson } from '../../../../types/academy';

export const lesson0201: Lesson = {
  id: 'lp-02-01',
  title: 'Operadores Matemáticos (Calculando como um Pro)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'O símbolo de multiplicação é o asterisco (*).',
    'O símbolo de divisão é a barra (/).',
    'O operador de resto (%) é muito útil para saber se um número é par ou ímpar.'
  ],
  content: {
    markdown: `
# 🧮 Operadores Matemáticos

A programação nasceu para fazer contas. Por mais complexo que um programa pareça (como um jogo ou uma IA), no fundo, tudo são cálculos matemáticos.

No JavaScript, temos os operadores básicos que você já conhece e alguns especiais:

---

## ➕ Os Básicos
- **Adição (+):** \`10 + 5\` (Soma)
- **Subtração (-):** \`10 - 5\` (Diferença)
- **Multiplicação (*):** \`10 * 5\` (Produto)
- **Divisão (/):** \`10 / 5\` (Quociente)

---

## 🔢 O Operador de Resto (%)
Este operador (chamado de Módulo) nos dá o que sobra de uma divisão.
Exemplo: Se você dividir 10 por 3, o resultado é 3 e sobra **1**.

\`\`\`javascript
console.log(10 % 3); // Vai mostrar 1
\`\`\`

> 💡 **Dica de Ouro:** Se \`numero % 2\` for igual a **0**, o número é **PAR**. Se sobrar **1**, o número é **ÍMPAR**.

---

## 🚀 Desafio Prático
Abra o **Editor** e tente calcular quanto é \`1573 multiplicado por 28\`. Ou descubra se o ano atual é par ou ímpar usando o resto da divisão por 2!
`,
    codeExamples: [
      {
        title: 'Calculadora Simples',
        language: 'javascript',
        code: `let preco1 = 50;\nlet preco2 = 30;\nlet total = preco1 + preco2;\n\nconsole.log("Total da compra: R$" + total);\nconsole.log("Desconto de 10%: R$" + (total * 0.1));`,
        output: 'Total da compra: R$80\nDesconto de 10%: R$8',
        explanation: 'Podemos fazer contas diretamente dentro das variáveis ou no console.log.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-02-01-q1',
      type: 'multiple_choice',
      question: 'Qual o resultado do comando: console.log(15 % 4); ?',
      options: [
        '3',
        '2',
        '1',
        '0'
      ],
      correctAnswer: 0,
      explanation: '15 dividido por 4 é 3 (que dá 12) e sobram 3. O resto é 3.'
    }
  ]
};
