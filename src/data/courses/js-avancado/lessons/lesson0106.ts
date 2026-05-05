import { Lesson } from '../../../../types/academy';

export const lesson0106: Lesson = {
  id: 'js-adv-01-06',
  title: 'Symbols e Iteradores: O Coração do JS',
  type: 'mixed',
  estimatedMinutes: 15,
  previewHtml: `
    <div style="padding: 20px; text-align: center;">
      <h3>🔄 Iterador de Vendas</h3>
      <div id="venda-atual" style="font-size: 24px; font-weight: bold; margin: 20px 0; color: #3178C6;">
        ---
      </div>
      <button id="btn-next" style="padding: 10px 20px; background: #333; color: #F7DF1E; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">
        Próxima Venda (Iterar)
      </button>
    </div>
  `,
  tips: [
    'O Symbol cria um identificador ÚNICO e IMUTÁVEL. Mesmo se o nome for igual, o Symbol é diferente.',
    'O Symbol.iterator permite que você diga ao JavaScript como ele deve percorrer o seu objeto em um loop "for...of".',
    'Iteradores são a base de como as Arrays e Maps funcionam internamente.'
  ],
  content: {
    markdown: `
# 🌀 Entrando no Coração do JavaScript

Para fechar o módulo moderno, vamos entender como o JS lida com loops e identificadores únicos.

---

## 🔑 Symbols
São chaves de objeto "escondidas" e únicas.
\`\`\`javascript
const ID_INTERNO = Symbol('id');
const usuario = {
  [ID_INTERNO]: 123
};
\`\`\`

---

## 🔄 Iteradores (Symbol.iterator)
Você pode tornar qualquer objeto "percorrível" definindo a sua própria regra de loop.
\`\`\`javascript
const minhaColecao = {
  itens: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => ({
        value: this.itens[index++],
        done: index > this.itens.length
      })
    };
  }
};
\`\`\`

---

## 🚀 Desafio no Editor
Crie um objeto \`relatorio\` com uma array de vendas. Use o \`Symbol.iterator\` para que, ao usar um loop \`for...of\`, ele percorra apenas as vendas acima de R$ 100,00. Mostre a primeira venda filtrada na div \`#venda-atual\`.
`,
    codeExamples: [
      {
        title: 'Loop Personalizado',
        language: 'javascript',
        code: `const fila = {\n  pedidos: [10.5, 50.0, 120.0, 30.5],\n  [Symbol.iterator]() {\n    let i = 0;\n    return {\n      next: () => ({\n        value: "Pedido #" + (i + 1) + ": R$ " + this.pedidos[i],\n        done: i++ >= this.pedidos.length\n      })\n    };\n  }\n};\n\nconst it = fila[Symbol.iterator]();\n\ndocument.querySelector("#btn-next").addEventListener("click", () => {\n  const res = it.next();\n  document.querySelector("#venda-atual").innerText = res.done ? "Fim da Fila!" : res.value;\n});`,
        output: '(Iteração manual via botão)',
        explanation: 'Iteradores customizados dão controle total sobre como os dados do seu sistema são consumidos.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-01-06-q1',
      type: 'multiple_choice',
      question: 'O que acontece se você comparar dois Symbols criados com o mesmo nome? Ex: Symbol("a") === Symbol("a")',
      options: [
        'Retorna true.',
        'Retorna false, pois Symbols são garantidos como únicos.',
        'Dá um erro de sintaxe.',
        'Retorna undefined.'
      ],
      correctAnswer: 1,
      explanation: 'Esta é a grande força do Symbol: ele nunca colide com outros nomes, mesmo que sejam idênticos.'
    }
  ]
};
