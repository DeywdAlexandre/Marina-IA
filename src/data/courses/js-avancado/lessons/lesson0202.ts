import { Lesson } from '../../../../types/academy';

export const lesson0202: Lesson = {
  id: 'js-adv-02-02',
  title: 'Classes ES6: A Sintaxe Profissional',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>📦 Gerador de Produtos (OOP)</h3>
      <div id="product-card" style="border: 2px solid #3178C6; border-radius: 12px; overflow: hidden; display: none;">
        <div style="background: #3178C6; color: white; padding: 10px; font-weight: bold;" id="p-name"></div>
        <div style="padding: 15px; background: white;">
          <p id="p-price" style="font-size: 20px; margin: 0;"></p>
          <p id="p-stock" style="font-size: 12px; color: #888; margin-top: 5px;"></p>
        </div>
      </div>
      <button id="btn-create" style="margin-top: 15px; padding: 10px; background: #3178C6; color: white; border: none; border-radius: 6px; cursor: pointer;">Criar Instância de Produto</button>
    </div>
  `,
  tips: [
    'A classe é o "molde" e o objeto criado é a "instância".',
    'O constructor é o método chamado no momento em que você faz um new MinhaClasse().',
    'Use classes para agrupar dados e os comportamentos (métodos) que mexem nesses dados.'
  ],
  content: {
    markdown: `
# 🏗️ Classes: O Molde do Sistema

No projeto **Marina POS**, usaremos classes para tudo. Uma classe define como um objeto deve ser e o que ele sabe fazer.

---

## 🛠️ Anatomia de uma Classe
\`\`\`javascript
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  aplicarDesconto(porcentagem) {
    this.preco -= (this.preco * porcentagem) / 100;
  }
}

const teclado = new Produto("Teclado", 200);
teclado.aplicarDesconto(10);
\`\`\`

---

## 🚀 Desafio no Editor
Crie uma classe \`Produto\` com as propriedades \`nome\`, \`preco\` e \`estoque\`. Adicione um método \`vender(qtd)\` que diminui o estoque. Instancie um produto e use os dados dele para preencher o \`#product-card\` no Preview.
`,
    codeExamples: [
      {
        title: 'Modelagem de Dados',
        language: 'javascript',
        code: `class Produto {\n  constructor(nome, preco, estoque) {\n    this.nome = nome;\n    this.preco = preco;\n    this.estoque = estoque;\n  }\n\n  getFormattedPrice() {\n    return "R$ " + this.preco.toFixed(2);\n  }\n}\n\ndocument.querySelector("#btn-create").addEventListener("click", () => {\n  const p = new Produto("Monitor Gamer", 1500, 5);\n  \n  document.querySelector("#p-name").innerText = p.nome;\n  document.querySelector("#p-price").innerText = p.getFormattedPrice();\n  document.querySelector("#p-stock").innerText = "Estoque: " + p.estoque + " unidades";\n  document.querySelector("#product-card").style.display = "block";\n});`,
        output: '(Objeto instanciado e exibido)',
        explanation: 'Classes facilitam a criação de múltiplos objetos que seguem a mesma regra de negócio.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-02-02-q1',
      type: 'multiple_choice',
      question: 'Qual a função do método constructor em uma classe?',
      options: [
        'Deletar a classe.',
        'Inicializar as propriedades do objeto no momento da criação.',
        'Mudar a cor do código.',
        'Apenas servir como comentário.'
      ],
      correctAnswer: 1,
      explanation: 'O constructor é onde você "configura" o objeto novo que está nascendo.'
    }
  ]
};
