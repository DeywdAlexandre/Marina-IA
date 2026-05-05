import { Lesson } from '../../../../types/academy';
import { lesson0501 } from './lesson0501';

export const lesson0503: Lesson = {
  id: 'js-adv-05-03',
  title: 'Projeto POS 3/5: Validações e Integridade',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: lesson0501.previewHtml,
  tips: [
    'Nunca deixe o estoque ficar negativo.',
    'Use o comando throw para interromper a venda se houver algum erro.',
    'Dê feedback visual imediato ao usuário (alertas ou cores).'
  ],
  content: {
    markdown: `
# 🛡️ Integridade dos Dados

Um sistema de vendas que vende o que não tem no estoque é um desastre. Vamos blindar nosso **Marina POS**.

---

## 🛠️ Validação de Estoque
Antes de adicionar ao carrinho, precisamos verificar se a quantidade desejada é menor ou igual à disponível na classe \`Produto\`.

---

## 🏗️ Usando Error Handling
Podemos usar o que aprendemos no Módulo 3 para gerenciar falhas de negócio.

\`\`\`javascript
if (produto.estoque <= 0) {
  throw new Error("Produto esgotado!");
}
\`\`\`

---

## 🚀 Desafio no Editor
Modifique sua função \`adicionar\`. Antes de colocar no carrinho, verifique se o produto ainda tem estoque. Se não tiver, exiba um alerta e não adicione. Se tiver, decremente o estoque no catálogo original toda vez que adicionar ao carrinho.
`,
    codeExamples: [
      {
        title: 'Check de Estoque Real',
        language: 'javascript',
        code: `window.adicionar = (id) => {\n  const p = catalogo.find(item => item.id === id);\n  \n  if (p.estoque <= 0) {\n    alert("⚠️ Ops! " + p.nome + " está esgotado.");\n    return;\n  }\n\n  p.estoque--; // Reduz estoque físico\n  \n  const inCart = cart.find(i => i.id === id);\n  if (inCart) inCart.qtd++;\n  else cart.push({ ...p, qtd: 1 });\n\n  renderGrid(); // Atualiza contador de estoque no grid\n  renderCart();\n};`,
        output: '(Estoque diminui e trava se chegar a zero)',
        explanation: 'A integridade de dados garante que o estado do aplicativo reflita a realidade física do estoque.'
      }
    ]
  }
};
