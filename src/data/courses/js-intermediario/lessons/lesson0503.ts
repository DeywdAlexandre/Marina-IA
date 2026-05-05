import { Lesson } from '../../../../types/academy';
import { lesson0501 } from './lesson0501';

export const lesson0503: Lesson = {
  id: 'js-int-05-03',
  title: 'Projeto 3/5: O Coração do App (Cálculos)',
  type: 'mixed',
  estimatedMinutes: 25,
  previewHtml: lesson0501.previewHtml,
  tips: [
    'Use .reduce() ou um loop forEach para somar os valores da array.',
    'Separe as receitas (positivos) das despesas (negativos).',
    'Use Math.abs() se quiser mostrar o valor da despesa sempre positivo visualmente.'
  ],
  content: {
    markdown: `
# 🧮 Fazendo as Contas

Dados capturados? Check. Agora vamos fazer a matemática do dashboard: o Saldo, as Receitas e as Despesas.

---

## 🛠️ A Lógica dos Valores
- **Saldo:** A soma de TUDO na lista.
- **Receitas:** A soma apenas dos valores > 0.
- **Despesas:** A soma apenas dos valores < 0.

---

## 🏗️ Atualizando a Interface
Toda vez que uma transação for adicionada, precisamos chamar uma função que recalcule esses 3 números e atualize o DOM (\`innerText\`).

\`\`\`javascript
const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
\`\`\`

---

## 🚀 Desafio no Editor
Crie uma função \`updateValues()\`. Ela deve percorrer sua array de transações, calcular os totais e injetar nos elementos \`#balance\`, \`#money-plus\` e \`#money-minus\`.
`,
    codeExamples: [
      {
        title: 'Lógica de Cálculo Real',
        language: 'javascript',
        code: `// Simulação de dados\nconst transactions = [\n  { amount: 5000 }, { amount: -1200 }, { amount: -300 }\n];\n\nconst amounts = transactions.map(t => t.amount);\n\nconst total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);\nconst income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);\nconst expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);\n\ndocument.querySelector("#balance").innerText = "R$ " + total;\ndocument.querySelector("#money-plus").innerText = "+ R$ " + income;\ndocument.querySelector("#money-minus").innerText = "- R$ " + expense;`,
        output: '(Dashboard atualiza com valores simulados)',
        explanation: 'Usar map, filter e reduce é o jeito mais elegante e funcional de processar dados financeiros.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-05-03-q1',
      type: 'multiple_choice',
      question: 'Qual método de Array é mais indicado para transformar uma lista de transações em um único valor de Saldo Total?',
      options: [
        '.forEach()',
        '.map()',
        '.reduce()',
        '.filter()'
      ],
      correctAnswer: 2,
      explanation: 'O reduce "reduz" uma array a um único valor final (como um somatório).'
    }
  ]
};
