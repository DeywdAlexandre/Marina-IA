import { Lesson } from '../../../../types/academy';

export const lesson0302: Lesson = {
  id: 'js-int-03-02',
  title: 'Promises: A Promessa do Futuro',
  type: 'mixed',
  estimatedMinutes: 15,
  previewHtml: `
    <div style="padding: 20px; text-align: center;">
      <h2 id="titulo">Pedido na Pizzaria</h2>
      <div id="status-pizza" style="padding: 20px; background: #eee; border-radius: 10px; margin: 20px 0; font-weight: bold;">
        Aguardando pedido...
      </div>
      <button id="btn-pedir" style="padding: 10px 20px; background: #3178C6; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Fazer Pedido (2s)
      </button>
    </div>
  `,
  tips: [
    'Uma Promise é um objeto que representa um sucesso ou erro futuro.',
    '.then() é o que acontece se tudo der certo.',
    '.catch() é o que acontece se algo falhar.'
  ],
  content: {
    markdown: `
# 🤝 Promises: "Eu te prometo um resultado"

No mundo assíncrono, quando pedimos algo (como dados de um servidor), não recebemos na hora. Recebemos uma **Promessa**.

---

## 🛠️ Os 3 Estados de uma Promise
1. **Pending (Pendente):** Está trabalhando...
2. **Fulfilled (Resolvida):** Deu certo! 🎉
3. **Rejected (Rejeitada):** Deu erro! ❌

---

## 🏗️ Como usar (Sintaxe Clássica)
\`\`\`javascript
const minhaPromessa = new Promise((resolve, reject) => {
  let deuCerto = true;
  if(deuCerto) resolve("Sucesso!");
  else reject("Erro!");
});

minhaPromessa
  .then(resultado => console.log(resultado))
  .catch(erro => console.error(erro));
\`\`\`

---

## 🚀 Desafio no Editor
Crie uma função que retorna uma Promise. Use o \`setTimeout\` para resolver a promessa após 2 segundos com a mensagem "Pizza Pronta! 🍕". Mostre essa mensagem na div \`#status-pizza\`.
`,
    codeExamples: [
      {
        title: 'Simulando Delay',
        language: 'javascript',
        code: `const pedirPizza = () => {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve("🍕 Pizza Entregue!"), 2000);\n  });\n};\n\npedirPizza().then(msg => {\n  document.querySelector("#status-pizza").innerText = msg;\n});`,
        output: '(Mensagem atualiza após 2s)',
        explanation: 'Promises permitem que o código continue rodando enquanto aguardamos uma tarefa demorada.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-03-02-q1',
      type: 'multiple_choice',
      question: 'Qual método é chamado quando uma Promise é resolvida com sucesso?',
      options: [
        '.catch()',
        '.then()',
        '.finally()',
        '.resolve()'
      ],
      correctAnswer: 1,
      explanation: 'O .then() recebe o resultado de sucesso da promessa.'
    }
  ]
};
