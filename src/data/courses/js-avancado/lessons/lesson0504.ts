import { Lesson } from '../../../../types/academy';
import { lesson0501 } from './lesson0501';

export const lesson0504: Lesson = {
  id: 'js-adv-05-04',
  title: 'Projeto POS 4/5: Cupom e Impressão',
  type: 'mixed',
  estimatedMinutes: 25,
  previewHtml: lesson0501.previewHtml + `
    <div id="receipt-modal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); align-items: center; justify-content: center; z-index: 1000;">
      <div style="background: white; padding: 30px; width: 300px; font-family: 'Courier New', Courier, monospace; text-align: center;">
        <h3>MARINA POS</h3>
        <p>*** CUPOM NÃO FISCAL ***</p>
        <hr>
        <div id="receipt-content" style="text-align: left; font-size: 12px;"></div>
        <hr>
        <h4 id="receipt-total"></h4>
        <button onclick="document.querySelector('#receipt-modal').style.display='none'" style="margin-top: 20px; border: 1px solid #333; background: none; padding: 10px; cursor: pointer;">Fechar</button>
      </div>
    </div>
  `,
  tips: [
    'Use Template Literals (\` \`) para construir o corpo do cupom de forma organizada.',
    'A função window.print() abre o diálogo de impressão do navegador.',
    'Formate a data e hora para dar um toque profissional ao comprovante.'
  ],
  content: {
    markdown: `
# 📄 Comprovante de Venda

Ao clicar em "Finalizar Venda", precisamos mostrar um resumo para o cliente. Vamos criar um gerador de cupom usando **Template Strings**.

---

## 🛠️ O que deve ter no cupom?
1. Data e Hora da venda.
2. Lista de itens e quantidades.
3. Valor total.
4. Um ID único para a transação.

---

## 🏗️ Usando o DOM para o Modal
Vamos manipular o estilo do elemento \`display\` para mostrar e esconder o recibo.

---

## 🚀 Desafio no Editor
Crie a função \`finalizarVenda()\`. Ela deve percorrer o carrinho, gerar o texto formatado e injetá-lo na div \`#receipt-content\`. Depois, mude o estilo de \`#receipt-modal\` para \`flex\`.
`,
    codeExamples: [
      {
        title: 'Gerador de Recibo',
        language: 'javascript',
        code: `document.querySelector("#btn-checkout").addEventListener("click", () => {\n  if (cart.length === 0) return alert("Carrinho vazio!");\n\n  let cupom = "";\n  cart.forEach(i => {\n    cupom += \`\${i.nome.padEnd(15)} x\${i.qtd} R$ \${(i.preco * i.qtd).toFixed(2)}<br>\`;\n  });\n\n  document.querySelector("#receipt-content").innerHTML = cupom;\n  document.querySelector("#receipt-total").innerText = "TOTAL: " + document.querySelector("#pos-total").innerText;\n  document.querySelector("#receipt-modal").style.display = "flex";\n  \n  cart = []; // Limpa carrinho após venda\n  renderCart();\n});`,
        output: '(Cupom aparece na tela ao finalizar)',
        explanation: 'O uso de .padEnd() ajuda a manter o alinhamento de texto em cupons de estilo matricial.'
      }
    ]
  }
};
