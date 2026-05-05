import { Lesson } from '../../../../types/academy';

export const lesson0601: Lesson = {
  id: 'js-int-06-01',
  title: 'Bug 1: Cannot read properties of null',
  type: 'mixed',
  estimatedMinutes: 10,
  previewHtml: `
    <div style="padding: 20px;">
      <h2 id="meu-titulo">Onde está o erro?</h2>
      <p>Abra o console para ver o erro simulado.</p>
      <button id="btn-fix" style="padding: 10px; background: #27c93f; color: white; border: none; border-radius: 4px; cursor: pointer;">Tentar Corrigir</button>
    </div>
  `,
  tips: [
    'Esse erro acontece quando você tenta ler algo de um seletor que não encontrou nada.',
    'Verifique sempre se o ID ou Classe no JS é igual ao do HTML.',
    'Certifique-se de que o script está rodando DEPOIS que o HTML carregou.'
  ],
  content: {
    markdown: `
# 🐞 O Erro nº 1 do Mundo JS

Você vai ver essa mensagem muitas vezes: \`TypeError: Cannot read properties of null (reading 'innerText')\`. 

---

## 🛠️ Por que acontece?
Isso significa que você fez algo como:
\`\`\`javascript
const btn = document.querySelector("#botao-errado"); 
btn.innerText = "Oi"; // ❌ O btn é null porque o ID não existe!
\`\`\`

---

## 🏗️ Como resolver?
1. **Confira o seletor:** Um erro de digitação (\`#btn\` vs \`#btn-enviar\`) é o culpado em 90% dos casos.
2. **Use o Operador Opcional:** \`btn?.innerText = "Oi";\` evita que o app trave se o botão não for encontrado.

---

## 🚀 Desafio no Editor
Tente selecionar um elemento que não existe (\`#fantasma\`) e mudar o texto dele. Veja o erro no console. Depois, use um \`if\` para só mudar o texto se o elemento realmente existir.
`,
    codeExamples: [
      {
        title: 'Código Seguro',
        language: 'javascript',
        code: `const el = document.querySelector("#inexistente");\n\nif (el) {\n  el.innerText = "Funciona!";\n} else {\n  console.warn("Elemento não encontrado, mas o app não travou! 🛡️");\n}`,
        output: '(Mensagem amigável no console)',
        explanation: 'Verificar a existência de elementos antes de manipulá-los é uma prática de Clean Code.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-06-01-q1',
      type: 'multiple_choice',
      question: 'O que o "null" representa nesse erro?',
      options: [
        'Que o código está perfeito.',
        'Que a variável está vazia porque o seletor não encontrou nenhum elemento com aquele nome.',
        'Que a internet caiu.',
        'Que o computador desligou.'
      ],
      correctAnswer: 1,
      explanation: 'O querySelector retorna null quando não acha o que você pediu.'
    }
  ]
};
