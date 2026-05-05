import { Lesson } from '../../../../types/academy';

export const lesson0602: Lesson = {
  id: 'js-int-06-02',
  title: 'Bug 2: "1" + "1" = "11"? (Tipagem)',
  type: 'mixed',
  estimatedMinutes: 10,
  previewHtml: `
    <div style="padding: 20px;">
      <h2>🧪 Laboratório de Tipos</h2>
      <input type="number" id="n1" value="10" style="width: 50px;"> + 
      <input type="number" id="n2" value="20" style="width: 50px;">
      <p>Resultado: <span id="res" style="font-weight: bold;">?</span></p>
      <button id="btn-calc" style="padding: 5px 10px; background: #3178C6; color: white; border: none; border-radius: 4px; cursor: pointer;">Somar</button>
    </div>
  `,
  tips: [
    'Tudo o que vem de um input no HTML é String.',
    'Use Number() ou parseFloat() para converter para números.',
    'No console, strings aparecem brancas/pretas e números geralmente azuis/coloridos.'
  ],
  content: {
    markdown: `
# 🧐 Por que a soma deu errado?

Este é o erro clássico de quem começa a lidar com formulários. Você tenta somar dois valores e o JavaScript os "cola" (concatena) em vez de somar.

---

## 🛠️ O Problema
\`\`\`javascript
const v1 = document.querySelector("#n1").value; // "10"
const v2 = document.querySelector("#n2").value; // "20"
console.log(v1 + v2); // "1020" ❌
\`\`\`

---

## 🏗️ A Solução
Converta explicitamente antes da conta:
\`\`\`javascript
const soma = Number(v1) + Number(v2); // 30 ✅
\`\`\`

---

## 🚀 Desafio no Editor
Implemente a soma correta para os inputs do Preview. Faça com que o resultado apareça na \`span#res\` corretamente.
`,
    codeExamples: [
      {
        title: 'Conversão Segura',
        language: 'javascript',
        code: `const n1 = document.querySelector("#n1");\nconst n2 = document.querySelector("#n2");\n\ndocument.querySelector("#btn-calc").addEventListener("click", () => {\n  // Errado: n1.value + n2.value\n  // Certo:\n  const total = Number(n1.value) + Number(n2.value);\n  document.querySelector("#res").innerText = total;\n});`,
        output: '(Soma correta aparece no Preview)',
        explanation: 'Dominar a diferença entre tipos de dados é o que garante que as finanças do seu app sejam exatas.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-06-02-q1',
      type: 'multiple_choice',
      question: 'Se eu tiver as variáveis a = "5" e b = 2, qual será o resultado de a + b?',
      options: [
        '7',
        '"52"',
        'NaN',
        'Erro'
      ],
      correctAnswer: 1,
      explanation: 'O JavaScript prioriza a concatenação de strings se um dos lados for texto.'
    }
  ]
};
