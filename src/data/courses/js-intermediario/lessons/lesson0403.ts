import { Lesson } from '../../../../types/academy';

export const lesson0403: Lesson = {
  id: 'js-int-04-03',
  title: 'Projeto: Dark Mode Persistente',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: `
    <div id="container-app" style="padding: 40px; text-align: center; height: 100vh; transition: background 0.3s, color 0.3s;">
      <h1 id="texto-principal">Modo de Visualização</h1>
      <p>Sua preferência será salva para a próxima vez que abrir.</p>
      <button id="btn-toggle" style="margin-top: 20px; padding: 12px 24px; border: none; border-radius: 30px; cursor: pointer; font-weight: bold; background: #3178C6; color: white;">
        Alternar Tema
      </button>
    </div>
  `,
  tips: [
    'Use uma variável booleana para controlar se o Dark Mode está ativo.',
    'Sempre verifique o LocalStorage logo no início do script para aplicar o tema correto.',
    'Manipule o style do body ou de um container principal.'
  ],
  content: {
    markdown: `
# 🌓 Projeto: Dark Mode que "Lembra"

Nesta lição, vamos criar um dos recursos mais comuns da web: o Alternador de Tema que persiste a escolha do usuário.

---

## 🛠️ O Roteiro
1. **Verificar:** Ao abrir, checar se \`theme === "dark"\` no LocalStorage.
2. **Aplicar:** Se sim, pintar o fundo de preto e o texto de branco.
3. **Alternar:** Quando clicar no botão, inverter o estado e **salvar** a nova escolha.

---

## 🏗️ Lógica de Aplicação
\`\`\`javascript
const temaAtual = localStorage.getItem("tema");
if (temaAtual === "dark") {
  // aplica estilos escuros
}
\`\`\`

---

## 🚀 Desafio no Editor
Implemente a lógica completa na aba **script.js**. Quando o botão \`#btn-toggle\` for clicado, mude as cores do \`#container-app\` e do \`#texto-principal\`. Não esqueça de salvar no LocalStorage para que o tema não "resete" ao clicar em Executar novamente!
`,
    codeExamples: [
      {
        title: 'Tema Inteligente',
        language: 'javascript',
        code: `const container = document.querySelector("#container-app");\nconst btn = document.querySelector("#btn-toggle");\n\n// 1. Carregar\nlet isDark = localStorage.getItem("isDark") === "true";\n\nfunction applyTheme() {\n  if (isDark) {\n    container.style.background = "#1e1e1e";\n    container.style.color = "white";\n    btn.innerText = "Mudar para Light ☀️";\n  } else {\n    container.style.background = "white";\n    container.style.color = "#333";\n    btn.innerText = "Mudar para Dark 🌙";\n  }\n}\n\napplyTheme();\n\n// 2. Alternar e Salvar\nbtn.addEventListener("click", () => {\n  isDark = !isDark;\n  localStorage.setItem("isDark", isDark);\n  applyTheme();\n});`,
        output: '(Tema persiste no Preview)',
        explanation: 'Combinar eventos com LocalStorage permite criar aplicações que se sentem "inteligentes" e personalizadas.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-04-03-q1',
      type: 'multiple_choice',
      question: 'Por que o Dark Mode é um ótimo exemplo de uso para o LocalStorage?',
      options: [
        'Porque ele economiza bateria.',
        'Porque é uma preferência de interface que o usuário não quer ter que redefinir toda vez que entra no site.',
        'Porque o Dark Mode exige conexão com a internet.',
        'Porque só o LocalStorage consegue mudar cores.'
      ],
      correctAnswer: 1,
      explanation: 'Experiência de Usuário (UX) é sobre reduzir o esforço do usuário, e o LocalStorage ajuda muito nisso.'
    }
  ]
};
