import { Lesson } from '../../../../types/academy';

export const lesson0101: Lesson = {
  id: 'js-adv-01-01',
  title: 'Destructuring, Spread e Rest: Código Limpo',
  type: 'mixed',
  estimatedMinutes: 15,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>🛒 Carrinho de Compras</h3>
      <div id="cart-display" style="background: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px dashed #ccc;">
        Aguardando dados...
      </div>
    </div>
  `,
  tips: [
    'Use o Spread (...) para copiar objetos e arrays sem alterar o original.',
    'A Desestruturação permite extrair valores de objetos de forma rápida.',
    'O Rest permite capturar "o resto" dos argumentos de uma função.'
  ],
  content: {
    markdown: `
# 🧹 Código Limpo com ES6+

No nível avançado, não queremos apenas que o código funcione; queremos que ele seja elegante e fácil de manter.

---

## 🛠️ Desestruturação (Destructuring)
Em vez de \`const nome = usuario.nome\`, fazemos:
\`\`\`javascript
const { nome, idade } = usuario;
\`\`\`

---

## 🏗️ Spread e Rest (...)
- **Spread:** Espalha os dados. Útil para clonar objetos.
\`\`\`javascript
const novoCarrinho = [...carrinhoAntigo, novoItem];
\`\`\`
- **Rest:** Junta o que sobrou.
\`\`\`javascript
const [primeiro, ...outros] = lista;
\`\`\`

---

## 🚀 Desafio no Editor
Vá na aba **script.js** e crie um objeto \`produto\` com \`nome\`, \`preco\` e \`estoque\`. Use a desestruturação para extrair esses valores e mostre-os formatados na div \`#cart-display\`.
`,
    codeExamples: [
      {
        title: 'Manipulação Moderna',
        language: 'javascript',
        code: `const produto = { id: 1, nome: "Teclado Mecânico", preco: 250, estoque: 15 };\n\n// Extraindo\nconst { nome, preco } = produto;\n\n// Clonando e atualizando com Spread\nconst produtoComDesconto = { ...produto, preco: preco * 0.9 };\n\ndocument.querySelector("#cart-display").innerHTML = \`\n  <p><b>Item:</b> \${nome}</p>\n  <p><b>Preço Original:</b> R$ \${preco}</p>\n  <p><b>Preço Promo:</b> R$ \${produtoComDesconto.preco}</p>\n\`;`,
        output: '(Dados formatados no Preview)',
        explanation: 'Usar Spread garante a imutabilidade, um conceito vital para evitar bugs em sistemas complexos.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-01-01-q1',
      type: 'multiple_choice',
      question: 'O que o comando const {...copia} = original faz?',
      options: [
        'Cria uma referência ao objeto original.',
        'Cria um clone superficial (shallow copy) do objeto original.',
        'Deleta o objeto original.',
        'Transforma o objeto em uma array.'
      ],
      correctAnswer: 1,
      explanation: 'O spread cria uma nova cópia dos dados, permitindo alterar a cópia sem afetar o original.'
    }
  ]
};
