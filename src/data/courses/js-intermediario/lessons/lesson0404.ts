import { Lesson } from '../../../../types/academy';

export const lesson0404: Lesson = {
  id: 'js-int-04-04',
  title: 'Gerenciando Listas Reais',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: `
    <div style="padding: 20px;">
      <h2>🛒 Minha Lista de Desejos</h2>
      <div style="display: flex; gap: 10px; margin-bottom: 20px;">
        <input type="text" id="item-input" placeholder="O que você quer comprar?" style="flex: 1; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
        <button id="add-btn" style="padding: 10px 20px; background: #27c93f; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">+</button>
      </div>
      <ul id="wishlist" style="list-style: none; padding: 0;">
        <!-- Itens aparecerão aqui -->
      </ul>
      <button id="clear-btn" style="margin-top: 20px; background: transparent; color: #ff5f56; border: 1px solid #ff5f56; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;">Limpar Lista</button>
    </div>
  `,
  tips: [
    'Sempre que a lista mudar (adicionar ou remover), salve a array inteira novamente.',
    'Use .push() para adicionar e JSON.stringify() para salvar.',
    'Ao carregar, use JSON.parse() e um loop (como forEach) para recriar os elementos na tela.'
  ],
  content: {
    markdown: `
# 📝 Listas: O Desafio Final

No projeto **Marina Finance**, teremos uma lista de transações. Nesta lição, vamos aprender a técnica definitiva para salvar arrays inteiras no navegador.

---

## 🛠️ O Fluxo de Dados
1. **Array no JS:** \`let itens = [];\`
2. **Atualização:** Adiciona item -> \`itens.push(novo);\`
3. **Persistência:** \`localStorage.setItem("lista", JSON.stringify(itens));\`
4. **Carregamento:** \`itens = JSON.parse(localStorage.getItem("lista")) || [];\`

---

## 🏗️ Por que "|| []"?
Se for a primeira vez que o usuário abre o app, o LocalStorage estará vazio (\`null\`). O \`|| []\` garante que seu código comece com uma lista vazia em vez de dar erro.

---

## 🚀 Desafio no Editor
Crie a lógica para salvar sua "Lista de Desejos". 
- Ao clicar no \`+\`, pegue o texto, adicione em uma array, salve no LocalStorage e renderize na \`ul\`.
- Ao carregar a página, faça a lista aparecer automaticamente se houver dados salvos.
`,
    codeExamples: [
      {
        title: 'Gerenciador de Itens',
        language: 'javascript',
        code: `let wishlist = JSON.parse(localStorage.getItem("my_wishlist")) || [];\nconst listElement = document.querySelector("#wishlist");\n\nfunction render() {\n  listElement.innerHTML = "";\n  wishlist.forEach(item => {\n    const li = document.createElement("li");\n    li.innerText = "⭐ " + item;\n    li.style.padding = "8px";\n    li.style.borderBottom = "1px solid #eee";\n    listElement.appendChild(li);\n  });\n}\n\ndocument.querySelector("#add-btn").addEventListener("click", () => {\n  const input = document.querySelector("#item-input");\n  if(input.value) {\n    wishlist.push(input.value);\n    localStorage.setItem("my_wishlist", JSON.stringify(wishlist));\n    input.value = "";\n    render();\n  }\n});\n\nrender();`,
        output: '(Lista funciona e persiste)',
        explanation: 'Dominar o fluxo Array -> JSON -> LocalStorage é 50% do caminho para criar qualquer aplicação web moderna.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-04-04-q1',
      type: 'multiple_choice',
      question: 'Qual a melhor forma de garantir que seu código não quebre se o LocalStorage estiver vazio no primeiro acesso?',
      options: [
        'Usar um if/else gigante.',
        'Usar o operador OU (||) com uma array vazia: JSON.parse(...) || []',
        'Pedir para o usuário digitar algo primeiro.',
        'Não carregar dados no primeiro acesso.'
      ],
      correctAnswer: 1,
      explanation: 'O valor padrão (default) é uma técnica elegante e segura em JavaScript.'
    }
  ]
};
