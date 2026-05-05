import { Lesson } from '../../../../types/academy';

export const lesson0401: Lesson = {
  id: 'js-int-04-01',
  title: 'LocalStorage: A Memória do Navegador',
  type: 'mixed',
  estimatedMinutes: 10,
  previewHtml: `
    <div style="padding: 20px; text-align: center;">
      <h2>🧠 Teste de Memória</h2>
      <input type="text" id="input-nome" placeholder="Seu nome..." style="padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
      <div style="margin-top: 15px; gap: 10px; display: flex; justify-content: center;">
        <button id="btn-salvar" style="padding: 10px; background: #27c93f; color: white; border: none; border-radius: 4px; cursor: pointer;">Salvar</button>
        <button id="btn-limpar" style="padding: 10px; background: #ff5f56; color: white; border: none; border-radius: 4px; cursor: pointer;">Limpar Tudo</button>
      </div>
      <p id="boas-vindas" style="margin-top: 20px; font-size: 18px; font-weight: bold; color: #3178C6;"></p>
    </div>
  `,
  tips: [
    'localStorage.setItem("chave", "valor") salva um dado.',
    'localStorage.getItem("chave") recupera o dado.',
    'Os dados permanecem lá mesmo se você fechar o navegador.',
    'O LocalStorage só aceita Strings.'
  ],
  content: {
    markdown: `
# 🧠 LocalStorage: Gravando no Navegador

Imagine que você quer que o seu app lembre o nome do usuário ou a cor favorita dele. Para isso, usamos o **LocalStorage**.

---

## 🛠️ Comandos Básicos
1. **Salvar:** \`localStorage.setItem("nome", "Marina");\`
2. **Ler:** \`let valor = localStorage.getItem("nome");\`
3. **Remover:** \`localStorage.removeItem("nome");\`
4. **Limpar tudo:** \`localStorage.clear();\`

---

## 🏗️ Onde os dados ficam?
Eles ficam guardados no computador do usuário, vinculados ao seu site (domínio). Não expiram sozinhos!

---

## 🚀 Desafio no Editor
Crie a lógica para o botão \`#btn-salvar\`. Quando clicado, salve o valor do input no LocalStorage com a chave \`"user_name"\` e mostre uma mensagem de "Bem-vindo de volta, [nome]" na div \`#boas-vindas\`.
`,
    codeExamples: [
      {
        title: 'Persistência Simples',
        language: 'javascript',
        code: `// Ao carregar a página, verifica se já tem nome\nconst nomeSalvo = localStorage.getItem("user_name");\nif (nomeSalvo) {\n  document.querySelector("#boas-vindas").innerText = "Olá, " + nomeSalvo + "! 😊";\n}\n\n// Lógica de salvar\ndocument.querySelector("#btn-salvar").addEventListener("click", () => {\n  const nome = document.querySelector("#input-nome").value;\n  localStorage.setItem("user_name", nome);\n  location.reload(); // Recarrega para testar a persistência\n});`,
        output: '(O nome sobrevive ao recarregamento)',
        explanation: 'O LocalStorage é a forma mais simples de criar experiências personalizadas e persistentes no frontend.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-04-01-q1',
      type: 'multiple_choice',
      question: 'Qual o limite de expiração dos dados no LocalStorage?',
      options: [
        '24 horas.',
        'Até o usuário fechar a aba.',
        'Não expiram sozinhos (são permanentes até serem deletados pelo código ou usuário).',
        '30 dias.'
      ],
      correctAnswer: 2,
      explanation: 'Diferente de Cookies ou SessionStorage, o LocalStorage é persistente.'
    }
  ]
};
