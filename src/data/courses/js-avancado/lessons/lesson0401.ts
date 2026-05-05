import { Lesson } from '../../../../types/academy';

export const lesson0401: Lesson = {
  id: 'js-adv-04-01',
  title: 'Higher-Order Functions: O Poder Funcional',
  type: 'mixed',
  estimatedMinutes: 15,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>⚡ Filtro de Preços Inteligente</h3>
      <div id="h-display" style="padding: 10px; background: #f0f2f5; border-radius: 4px; font-family: monospace;">
        Resultados aparecerão aqui...
      </div>
      <div style="margin-top: 10px; display: flex; gap: 5px;">
        <button id="btn-curry" style="padding: 8px; background: #333; color: white; border: none; cursor: pointer;">Aplicar Taxa 10% (Currying)</button>
      </div>
    </div>
  `,
  tips: [
    'Uma Higher-Order Function é uma função que recebe outra função como argumento ou retorna uma função.',
    'Currying é a técnica de transformar uma função com múltiplos argumentos em uma sequência de funções com um único argumento.',
    'Isso permite "preparar" funções para serem usadas mais tarde.'
  ],
  content: {
    markdown: `
# ⚡ Higher-Order Functions (HOF)

No JavaScript avançado, as funções são "Cidadãos de Primeira Classe". Elas podem ser passadas de um lado para o outro como se fossem variáveis.

---

## 🛠️ O que são HOFs?
Você já as usou: \`.map()\`, \`.filter()\` e \`.reduce()\` são Higher-Order Functions porque recebem uma função como parâmetro.

---

## 🏗️ Currying e Partial Application
Imagine que você tem uma função que calcula impostos. Você pode criar versões dela já com a taxa fixa:

\`\`\`javascript
const calcularImposto = (taxa) => (valor) => valor + (valor * taxa);

const impostoBrasil = calcularImposto(0.15);
console.log(impostoBrasil(100)); // 115
\`\`\`

---

## 🚀 Desafio no Editor
Crie uma HOF chamada \`gerarSaudacao\` que receba um prefixo (ex: "Bem-vindo") e retorne uma nova função que receba o nome do usuário. Use-a para mostrar uma saudação na tela.
`,
    codeExamples: [
      {
        title: 'Funções de Fábrica',
        language: 'javascript',
        code: `const aplicarTaxa = (taxa) => (valor) => valor * (1 + taxa);\n\nconst taxaFixa = aplicarTaxa(0.10);\n\ndocument.querySelector("#btn-curry").addEventListener("click", () => {\n  const valores = [100, 200, 300];\n  const resultados = valores.map(taxaFixa);\n  \n  document.querySelector("#h-display").innerText = "Preços com 10%: " + resultados.join(", ");\n});`,
        output: '(Valores calculados via Currying)',
        explanation: 'Currying permite criar funções especializadas a partir de funções genéricas, aumentando o reuso do código.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-04-01-q1',
      type: 'multiple_choice',
      question: 'O que define uma Higher-Order Function?',
      options: [
        'É uma função que roda mais rápido.',
        'É uma função que recebe ou retorna outra função.',
        'É uma função que só aceita números.',
        'É uma função que não tem nome.'
      ],
      correctAnswer: 1,
      explanation: 'Esta característica é o que permite o paradigma da Programação Funcional no JavaScript.'
    }
  ]
};
