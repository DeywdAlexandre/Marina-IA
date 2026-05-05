import { Lesson } from '../../../../types/academy';

export const lesson0105: Lesson = {
  id: 'js-adv-01-05',
  title: 'Proxies e Reflect: Interceptando Objetos',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>🕵️ Monitor de Estoque (Proxy)</h3>
      <div id="log-estoque" style="background: #000; color: #0f0; padding: 15px; border-radius: 8px; font-family: monospace; height: 100px; overflow-y: auto; font-size: 11px; margin-bottom: 10px;">
        > Sistema iniciado...
      </div>
      <button id="btn-update" style="padding: 10px; background: #3178C6; color: white; border: none; border-radius: 4px; cursor: pointer;">Alterar Estoque para 5</button>
    </div>
  `,
  tips: [
    'O Proxy permite que você coloque um "vigia" em volta de um objeto.',
    'Você pode validar dados antes de eles serem salvos no objeto.',
    'Útil para criar sistemas que reagem a mudanças de dados (reatividade).'
  ],
  content: {
    markdown: `
# 🕵️ Proxies: O Vigia do Código

Já imaginou poder rodar um código automaticamente toda vez que alguém tentar mudar o valor de uma variável? Isso é o que o **Proxy** faz.

---

## 🛠️ Como funciona?
Você define um alvo (target) e um manipulador (handler).
\`\`\`javascript
const produto = { nome: "TV", estoque: 10 };

const vigia = new Proxy(produto, {
  set(target, prop, value) {
    console.log(\`Mudando \${prop} para \${value}\`);
    target[prop] = value;
    return true;
  }
});
\`\`\`

---

## 🏗️ Reflect
O \`Reflect\` é um objeto que fornece métodos para interceptar operações JavaScript, facilitando a vida dentro do Proxy.

---

## 🚀 Desafio no Editor
Crie um Proxy para um objeto \`venda\`. Toda vez que a propriedade \`valor\` for alterada, exiba uma mensagem na div \`#log-estoque\` dizendo "Valor atualizado!". Use o Proxy para impedir que o valor seja menor que zero.
`,
    codeExamples: [
      {
        title: 'Validação em Tempo Real',
        language: 'javascript',
        code: `const estoque = { itens: 10 };\nconst log = document.querySelector("#log-estoque");\n\nconst proxyEstoque = new Proxy(estoque, {\n  set(target, prop, value) {\n    if (prop === 'itens' && value < 0) {\n      log.innerHTML += "<br>> ❌ Erro: Estoque não pode ser negativo!";\n      return false;\n    }\n    log.innerHTML += \`<br>> ✅ \${prop} alterado para \${value}\`;\n    target[prop] = value;\n    return true;\n  }\n});\n\ndocument.querySelector("#btn-update").addEventListener("click", () => {\n  proxyEstoque.itens = 5;\n});`,
        output: '(Mensagens de log aparecem no Preview)',
        explanation: 'Proxies são a base de frameworks como Vue.js para atualizar a tela automaticamente quando os dados mudam.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-01-05-q1',
      type: 'multiple_choice',
      question: 'Para que serve o método "set" dentro de um Handler de Proxy?',
      options: [
        'Para deletar o objeto.',
        'Para interceptar e controlar a atribuição de um novo valor a uma propriedade do objeto.',
        'Para criar uma nova array.',
        'Para esconder o objeto do console.'
      ],
      correctAnswer: 1,
      explanation: 'O "set" permite que você valide, transforme ou bloqueie mudanças nos dados do objeto.'
    }
  ]
};
