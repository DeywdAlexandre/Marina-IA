import { Lesson } from '../../../../types/academy';

export const lesson0202: Lesson = {
  id: 'lp-02-02',
  title: 'Precedência (Quem vem primeiro?)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'A regra do Git/JS é a mesma da matemática da escola: PEMDAS (Parênteses, Expoentes, Multiplicação/Divisão, Adição/Subtração).',
    'Na dúvida, use parênteses () para garantir que sua conta seja feita na ordem certa.'
  ],
  content: {
    markdown: `
# 🚦 Quem vem primeiro?

Se você escrever \`2 + 10 * 2\`, qual o resultado?
- Se você somar primeiro, dá \`12 * 2 = 24\`.
- Se você multiplicar primeiro, dá \`2 + 20 = 22\`.

O computador sempre segue a regra da **Multiplicação e Divisão primeiro**.

---

## 🛡️ O Poder dos Parênteses

Para forçar o computador a fazer uma soma antes de uma multiplicação, você deve usar parênteses \`()\`.

\`\`\`javascript
console.log(2 + 10 * 2);   // Resultado: 22
console.log((2 + 10) * 2); // Resultado: 24
\`\`\`

---

## 📈 Exemplo Real: Média Escolar
Para calcular a média de duas notas, você precisa somar as duas primeiro e DEPOIS dividir por 2.

\`\`\`javascript
let nota1 = 8;
let nota2 = 6;
let media = (nota1 + nota2) / 2;

console.log("A média é: " + media);
\`\`\`

Se você esquecesse os parênteses, o computador faria \`nota1 + (nota2 / 2)\`, o que daria \`8 + 3 = 11\`. Uma nota impossível!
`,
    codeExamples: [
      {
        title: 'Cálculo de Média',
        language: 'javascript',
        code: `let n1 = 7;\nlet n2 = 9;\nconsole.log("Média Errada:", n1 + n2 / 2);\nconsole.log("Média Correta:", (n1 + n2) / 2);`,
        output: 'Média Errada: 11.5\nMédia Correta: 8',
        explanation: 'Os parênteses mudam completamente o resultado final da expressão.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-02-02-q1',
      type: 'multiple_choice',
      question: 'Qual o resultado da expressão: 5 + 2 * 10 ?',
      options: [
        '70',
        '25',
        '15',
        '50'
      ],
      correctAnswer: 1,
      explanation: 'O computador faz 2 * 10 primeiro (20) e depois soma 5. Resultado: 25.'
    }
  ]
};
