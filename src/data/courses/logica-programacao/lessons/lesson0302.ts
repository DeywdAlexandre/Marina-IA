import { Lesson } from '../../../../types/academy';

export const lesson0302: Lesson = {
  id: 'lp-03-02',
  title: 'Operadores de Comparação (A Balança da Lógica)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'No JavaScript, usamos "==" para comparar valores e "===" para comparar valores E tipos (mais seguro).',
    'O símbolo "!=" significa "Diferente de".'
  ],
  content: {
    markdown: `
# ⚖️ Comparando Valores

Para o \`if\` funcionar, ele precisa de uma resposta: **Verdadeiro (true)** ou **Falso (false)**. Para obter essa resposta, usamos os operadores de comparação.

---

## 🔍 Os Comparadores
- **Igual a:** \`a == b\`
- **Diferente de:** \`a != b\`
- **Maior que:** \`a > b\`
- **Menor que:** \`a < b\`
- **Maior ou Igual:** \`a >= b\`
- **Menor ou Igual:** \`a <= b\`

---

## ⚠️ O Grande Erro de Iniciante
Não confunda \`=\` com \`==\`.
- \`let x = 10\` (Um sinal de igual guarda o valor 10 dentro de x).
- \`if (x == 10)\` (Dois sinais de igual perguntam se x vale 10).

---

## 🔬 O Comparador Estrito (===)
Em JavaScript, \`5 == "5"\` é verdadeiro (ele ignora que um é número e o outro é texto).
Já \`5 === "5"\` é **falso** (ele é mais rigoroso). Use sempre que puder!

\`\`\`javascript
console.log(10 == "10");  // true
console.log(10 === "10"); // false
\`\`\`
`,
    codeExamples: [
      {
        title: 'Exemplo de Comparação',
        language: 'javascript',
        code: `let pontosParaVencer = 100;\nlet meusPontos = 120;\n\nif (meusPontos >= pontosParaVencer) {\n  console.log("Vitória! 🏆");\n} else {\n  console.log("Continue tentando... 🎮");\n}`,
        output: 'Vitória! 🏆',
        explanation: 'O operador >= é fundamental para verificar limites e pontuações.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-03-02-q1',
      type: 'multiple_choice',
      question: 'Qual operador usamos para verificar se um valor é DIFERENTE de outro?',
      options: [
        '==',
        '!!',
        '!=',
        '<>'
      ],
      correctAnswer: 2,
      explanation: 'O ponto de exclamação em programação geralmente significa "NÃO". Então != é "Não igual" (Diferente).'
    }
  ]
};
