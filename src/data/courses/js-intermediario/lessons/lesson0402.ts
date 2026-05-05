import { Lesson } from '../../../../types/academy';

export const lesson0402: Lesson = {
  id: 'js-int-04-02',
  title: 'JSON Stringify e Parse: Salvando Objetos',
  type: 'mixed',
  estimatedMinutes: 15,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>📦 Objeto Complexo</h3>
      <div id="display-objeto" style="background: #252526; color: #d4d4d4; padding: 15px; border-radius: 8px; font-family: monospace; white-space: pre-wrap;">
        {}
      </div>
      <button id="btn-objetos" style="margin-top: 15px; padding: 10px; background: #3178C6; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Salvar Objeto de Teste
      </button>
    </div>
  `,
  tips: [
    'LocalStorage só salva Strings (texto).',
    'JSON.stringify(objeto) transforma um objeto em texto JSON.',
    'JSON.parse(texto) transforma o texto JSON de volta em um objeto JavaScript.'
  ],
  content: {
    markdown: `
# 📦 Salvando Objetos Inteiros

O LocalStorage tem um "defeito": ele só aceita texto. Se você tentar salvar um objeto como \`{ nome: "Marina" }\`, ele vai salvar como a string \`"[object Object]"\`, e você perderá seus dados.

---

## 🛠️ A Solução: JSON
Para salvar objetos ou listas, precisamos "empacotar" em JSON.

1. **Para Salvar:**
\`\`\`javascript
const usuario = { id: 1, nome: "Marina" };
localStorage.setItem("user", JSON.stringify(usuario));
\`\`\`

2. **Para Ler:**
\`\`\`javascript
const dadosTexto = localStorage.getItem("user");
const usuarioObjeto = JSON.parse(dadosTexto);
console.log(usuarioObjeto.nome); // Marina
\`\`\`

---

## 🚀 Desafio no Editor
Crie um objeto chamado \`config\` com as propriedades \`tema: "escuro"\` e \`volume: 80\`. Salve-o no LocalStorage usando \`JSON.stringify\`. Depois, recupere-o com \`JSON.parse\` e mostre o valor do volume no console.
`,
    codeExamples: [
      {
        title: 'Fluxo Completo de Objeto',
        language: 'javascript',
        code: `const config = { theme: 'dark', notifications: true, lastLogin: new Date() };\n\n// Salvando\nlocalStorage.setItem('app_settings', JSON.stringify(config));\n\n// Lendo\nconst saved = JSON.parse(localStorage.getItem('app_settings'));\n\ndocument.querySelector("#display-objeto").innerText = JSON.stringify(saved, null, 2);`,
        output: '(Objeto formatado aparece no Preview)',
        explanation: 'Esta técnica é a base para salvar qualquer estrutura de dados complexa no navegador.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-04-02-q1',
      type: 'multiple_choice',
      question: 'Por que precisamos usar JSON.stringify antes de salvar um objeto no LocalStorage?',
      options: [
        'Para o código rodar mais rápido.',
        'Porque o LocalStorage só aceita strings de texto.',
        'Para criptografar os dados.',
        'Não é necessário, o navegador faz sozinho.'
      ],
      correctAnswer: 1,
      explanation: 'O Stringify "achata" o objeto em uma string que o LocalStorage consegue guardar.'
    }
  ]
};
