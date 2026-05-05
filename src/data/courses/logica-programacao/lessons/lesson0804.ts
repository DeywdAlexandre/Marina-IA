import { Lesson } from '../../../../types/academy';

export const lesson0804: Lesson = {
  id: 'lp-08-04',
  title: 'Encadeamento (O Poder da Combinação)',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'Você pode usar o "." logo após fechar um método para chamar outro.',
    'Isso permite filtrar e transformar uma lista em um único comando.',
    'A ordem importa! Geralmente filtramos primeiro e transformamos depois.'
  ],
  content: {
    markdown: `
# ⛓️ Encadeamento: Lógica de Elite

Agora que você conhece o \`filter\` e o \`map\`, você pode combiná-los. Isso é o que separa os iniciantes dos profissionais. 

---

## 🛠️ O Problema
Você tem uma lista de produtos. Você quer:
1. Pegar apenas os que custam **mais de 100 reais**.
2. E desses, pegar **apenas os nomes**.

---

## 🏗️ A Solução Ninja

\`\`\`javascript
let produtos = [
  { nome: "Caneta", preco: 2 },
  { nome: "Teclado", preco: 150 },
  { nome: "Mouse", preco: 80 },
  { nome: "Monitor", preco: 900 }
];

let nomesCaros = produtos
  .filter(p => p.preco > 100)
  .map(p => p.nome);

console.log(nomesCaros); // ["Teclado", "Monitor"]
\`\`\`

---

## 🚀 Desafio Final do Módulo
No Editor, crie uma lista de números de 1 a 10. 
Use o encadeamento para:
1. Filtrar apenas os números **PARES**.
2. E depois **multiplicar** cada um por 10.
Imprima o resultado final!
`,
    codeExamples: [
      {
        title: 'Lógica de E-commerce',
        language: 'javascript',
        code: `let vendas = [10, 50, 120, 200, 30];\n\nlet totalVendasGrandes = vendas\n  .filter(v => v > 100)\n  .forEach(v => console.log("Venda Grande Detectada: R$" + v));`,
        output: 'Venda Grande Detectada: R$120\nVenda Grande Detectada: R$200',
        explanation: 'O encadeamento permite criar fluxos de dados complexos com pouquíssimas linhas de código.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-08-04-q1',
      type: 'multiple_choice',
      question: 'Qual a ordem mais lógica para processar dados em um encadeamento?',
      options: [
        'Map primeiro, depois Filter.',
        'Filter primeiro (para reduzir a lista), depois Map (para transformar os que sobraram).',
        'ForEach primeiro, depois Map.',
        'A ordem nunca importa.'
      ],
      correctAnswer: 1,
      explanation: 'Filtramos primeiro para evitar processar (transformar) dados que seriam descartados de qualquer maneira. Isso economiza memória e tempo!'
    }
  ]
};
