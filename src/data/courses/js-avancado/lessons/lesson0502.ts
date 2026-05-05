import { Lesson } from '../../../../types/academy';
import { lesson0501 } from './lesson0501';

export const lesson0502: Lesson = {
  id: 'js-adv-05-02',
  title: 'Projeto POS 2/5: O Motor do Carrinho',
  type: 'mixed',
  estimatedMinutes: 30,
  previewHtml: lesson0501.previewHtml,
  tips: [
    'Use uma Array de objetos para representar os itens no carrinho.',
    'Sempre que adicionar um item, verifique se ele já está lá para apenas aumentar a quantidade.',
    'Use .reduce() para calcular o total geral do carrinho de forma limpa.'
  ],
  content: {
    markdown: `
# 🛒 O Motor de Vendas

Agora que temos produtos, precisamos de um lugar para colocá-los antes de fechar a conta. Vamos construir a lógica do **Carrinho**.

---

## 🛠️ Lógica de Agrupamento
Se o usuário clicar em "Mouse" duas vezes, não queremos dois itens na lista, mas sim "Mouse x2".
\`\`\`javascript
const itemExistente = carrinho.find(i => i.id === id);
if (itemExistente) itemExistente.qtd++;
else carrinho.push({ ...produto, qtd: 1 });
\`\`\`

---

## 🏗️ Reatividade Simples
Toda vez que o carrinho mudar, precisamos chamar uma função que limpa a lista no HTML e a reconstrói.

---

## 🚀 Desafio no Editor
Implemente a função \`adicionar(id)\`. Ela deve buscar o produto no catálogo, adicionar na sua array de carrinho e atualizar o \`#cart-items\` e o \`#pos-total\`.
`,
    codeExamples: [
      {
        title: 'Gerenciamento de Estado',
        language: 'javascript',
        code: `let cart = [];\n\nwindow.adicionar = (id) => {\n  const p = catalogo.find(item => item.id === id);\n  const inCart = cart.find(i => i.id === id);\n  \n  if (inCart) inCart.qtd++;\n  else cart.push({ ...p, qtd: 1 });\n  \n  renderCart();\n};\n\nfunction renderCart() {\n  const container = document.querySelector("#cart-items");\n  container.innerHTML = "";\n  \n  let total = 0;\n  cart.forEach(item => {\n    total += item.preco * item.qtd;\n    container.innerHTML += \`\n      <div style="font-size: 12px; margin-bottom: 5px; border-bottom: 1px solid #f0f0f0;">\n        <b>\${item.nome}</b> x \${item.qtd} <br>\n        R$ \${(item.preco * item.qtd).toFixed(2)}\n      </div>\n    \`;\n  });\n  \n  document.querySelector("#pos-total").innerText = "R$ " + total.toFixed(2);\n}`,
        output: '(Carrinho atualiza dinamicamente ao clicar nos produtos)',
        explanation: 'Manter o estado do carrinho separado da visualização (HTML) é a primeira regra para sistemas escaláveis.'
      }
    ]
  }
};
