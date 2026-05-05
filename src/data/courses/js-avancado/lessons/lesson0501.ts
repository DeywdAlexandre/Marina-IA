import { Lesson } from '../../../../types/academy';

const posBaseHtml = `
<div id="pos-app" style="height: 100%; display: flex; flex-direction: column; background: #f0f2f5; font-family: sans-serif; overflow: hidden;">
  <header style="background: #333; color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center;">
    <h2 style="margin: 0; font-size: 18px;">Marina POS v2.0</h2>
    <div id="pos-clock" style="font-size: 12px; color: #aaa;"></div>
  </header>
  
  <main style="flex: 1; display: flex; gap: 15px; padding: 15px; overflow: hidden;">
    <!-- Lista de Produtos -->
    <div style="flex: 2; background: white; border-radius: 8px; padding: 15px; overflow-y: auto;">
      <h3 style="margin-top: 0; font-size: 14px; border-bottom: 2px solid #eee; padding-bottom: 5px;">📦 Catálogo</h3>
      <div id="product-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 10px; margin-top: 10px;">
        <!-- Injetado via JS -->
      </div>
    </div>

    <!-- Carrinho Lateral -->
    <div style="flex: 1; background: #fff; border-radius: 8px; display: flex; flex-direction: column; box-shadow: -2px 0 10px rgba(0,0,0,0.05);">
      <div style="padding: 15px; border-bottom: 1px solid #eee;">
        <h3 style="margin: 0; font-size: 14px;">🛒 Carrinho</h3>
      </div>
      <div id="cart-items" style="flex: 1; overflow-y: auto; padding: 10px;">
        <p style="text-align: center; color: #999; margin-top: 20px;">Vazio</p>
      </div>
      <div style="padding: 15px; background: #fafafa; border-top: 1px solid #eee;">
        <div style="display: flex; justify-content: space-between; font-size: 20px; font-weight: bold; margin-bottom: 15px;">
          <span>Total:</span>
          <span id="pos-total">R$ 0,00</span>
        </div>
        <button id="btn-checkout" style="width: 100%; padding: 15px; background: #27c93f; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 16px;">Finalizar Venda</button>
      </div>
    </div>
  </main>
</div>
<style>
  .prod-card { border: 1px solid #eee; border-radius: 6px; padding: 10px; text-align: center; cursor: pointer; transition: 0.2s; }
  .prod-card:hover { border-color: #3178C6; background: #f0f7ff; }
  .prod-card b { display: block; font-size: 12px; margin-bottom: 5px; }
  .prod-card span { color: #3178C6; font-weight: bold; font-size: 14px; }
  .prod-card .stock { font-size: 10px; color: #999; }
</style>
`;

export const lesson0501: Lesson = {
  id: 'js-adv-05-01',
  title: 'Projeto POS 1/5: Modelagem de Domínio',
  type: 'mixed',
  estimatedMinutes: 25,
  previewHtml: posBaseHtml,
  tips: [
    'Tudo começa nas Classes. Elas serão o "molde" para o banco de dados local.',
    'Use o # para proteger o estoque de cada produto.',
    'Crie um método para formatar o preço dentro da própria classe.'
  ],
  content: {
    markdown: `
# 📦 Projeto Marina POS: O Motor do Sistema

Nesta primeira etapa do nosso sistema de Ponto de Venda, vamos usar **Orientação a Objetos** para modelar o catálogo de produtos.

---

## 🛠️ Por que modelar?
Um sistema profissional não usa apenas arrays de strings. Usamos objetos inteligentes que sabem se tem estoque disponível ou qual o preço final com imposto.

---

## 🏗️ O Plano
1. Criar a classe \`Produto\`.
2. Criar a classe \`EstoqueManager\` (Singleton).
3. Renderizar o catálogo dinamicamente no grid.

---

## 🚀 Desafio no Editor
Crie a classe \`Produto\` com \`id\`, \`nome\`, \`preco\` e \`estoque\`. Instancie 4 produtos e use um loop \`forEach\` para criar o HTML de cada um e injetar na div \`#product-grid\`.
`,
    codeExamples: [
      {
        title: 'Modelagem Inicial',
        language: 'javascript',
        code: `class Produto {\n  constructor(id, nome, preco, estoque) {\n    this.id = id;\n    this.nome = nome;\n    this.preco = preco;\n    this.estoque = estoque;\n  }\n\n  render() {\n    return \`\n      <div class="prod-card" onclick="adicionar(\${this.id})">\n        <b>\${this.nome}</b>\n        <span>R$ \${this.preco.toFixed(2)}</span>\n        <div class="stock">Estoque: \${this.estoque}</div>\n      </div>\n    \`;\n  }\n}\n\nconst catalogo = [\n  new Produto(1, "Mouse", 50, 10),\n  new Produto(2, "Teclado", 150, 5),\n  new Produto(3, "Monitor", 900, 2),\n  new Produto(4, "Headset", 250, 8)\n];\n\nconst grid = document.querySelector("#product-grid");\ncatalogo.forEach(p => grid.innerHTML += p.render());`,
        output: '(Grid de produtos aparece no Preview)',
        explanation: 'Ao usar o método .render() dentro da classe, centralizamos como o objeto se apresenta visualmente.'
      }
    ]
  }
};
