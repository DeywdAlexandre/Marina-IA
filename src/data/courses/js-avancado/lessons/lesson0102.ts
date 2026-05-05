import { Lesson } from '../../../../types/academy';

export const lesson0102: Lesson = {
  id: 'js-adv-01-02',
  title: 'Map e Set: Coleções de Alta Performance',
  type: 'mixed',
  estimatedMinutes: 15,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>🔍 Localizador de Produtos</h3>
      <div id="stats" style="margin-bottom: 15px; font-size: 12px; color: #666;"></div>
      <input type="text" id="search-id" placeholder="ID do Produto (101, 102...)" style="padding: 8px; border-radius: 4px; border: 1px solid #ddd;">
      <button id="btn-find" style="padding: 8px; background: #F7DF1E; color: #333; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">Buscar</button>
      <div id="result" style="margin-top: 15px; padding: 10px; background: #eee; border-radius: 4px; min-height: 40px;"></div>
    </div>
  `,
  tips: [
    'O Map é mais performático que objetos para buscas frequentes.',
    'O Set é ideal para garantir que não existam itens duplicados na sua lista.',
    'Diferente de objetos, o Map mantém a ordem de inserção.'
  ],
  content: {
    markdown: `
# 🚀 Map e Set: Além dos Objetos e Arrays

Quando lidamos com milhares de itens (como em um estoque), os Objetos comuns podem ficar lentos e bagunçados. O ES6 nos deu ferramentas especializadas.

---

## 🗺️ Map
Um dicionário de alta performance. Aceita qualquer coisa como chave (até funções ou objetos!).
\`\`\`javascript
const estoque = new Map();
estoque.set('101', { nome: 'Mouse', preco: 50 });
console.log(estoque.get('101'));
\`\`\`

---

## 💎 Set
Uma coleção de valores **únicos**. Tentar adicionar um valor que já existe não faz nada.
\`\`\`javascript
const tags = new Set(['promo', 'novo', 'promo']);
console.log(tags.size); // 2
\`\`\`

---

## 🚀 Desafio no Editor
Crie um \`Map\` chamado \`produtos\` e adicione 3 produtos com IDs numéricos como chave. Implemente a busca no botão \`#btn-find\` para que ele mostre o nome do produto no \`#result\` baseado no ID digitado.
`,
    codeExamples: [
      {
        title: 'Dicionário de Estoque',
        language: 'javascript',
        code: `const produtos = new Map();\nprodutos.set('101', 'Smartphone Pro');\nprodutos.set('102', 'Laptop Ultra');\n\ndocument.querySelector("#btn-find").addEventListener("click", () => {\n  const id = document.querySelector("#search-id").value;\n  const nome = produtos.get(id);\n  \n  document.querySelector("#result").innerText = nome ? "✅ Encontrado: " + nome : "❌ Não encontrado";\n});\n\ndocument.querySelector("#stats").innerText = "Total no Map: " + produtos.size;`,
        output: '(Busca funcionando no Preview)',
        explanation: 'O método .get() do Map é extremamente rápido, ideal para sistemas de busca em tempo real.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-01-02-q1',
      type: 'multiple_choice',
      question: 'Qual a principal característica de um Set?',
      options: [
        'Ele ordena os números automaticamente.',
        'Ele não permite valores duplicados.',
        'Ele é mais lento que uma Array.',
        'Ele só aceita strings.'
      ],
      correctAnswer: 1,
      explanation: 'O Set é perfeito para listas de IDs, tags ou categorias onde você quer garantir que nada se repita.'
    }
  ]
};
