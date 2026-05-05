import { Lesson } from '../../../../types/academy';

export const lesson0104: Lesson = {
  id: 'js-int-01-04',
  title: 'Criando Elementos do Zero (createElement)',
  type: 'mixed',
  estimatedMinutes: 15,
  previewHtml: `
    <div style="padding: 20px;">
      <h1>Lista de Compras Dinâmica</h1>
      <ul id="lista-compras" style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
        <!-- Os itens serão criados pelo JavaScript -->
      </ul>
    </div>
  `,
  tips: [
    'createElement cria o elemento na memória, mas não o coloca na página ainda.',
    'appendChild é o comando que "pendura" o novo elemento dentro de outro.',
    'Isso é a base de qualquer feed infinito ou lista dinâmica.'
  ],
  content: {
    markdown: `
# 🏗️ Criando a Vida: createElement

Mudar o que já existe é legal, mas criar coisas do nada é **poderoso**. Imagine um botão "Novo Post" — ele precisa criar novos elementos no HTML toda vez que é clicado.

---

## 🛠️ O Processo de 3 Passos

1. **Criar o elemento:**
\`\`\`javascript
let novoItem = document.createElement("li");
\`\`\`

2. **Configurar o elemento:**
\`\`\`javascript
novoItem.innerText = "Estudar JavaScript Intermediário";
novoItem.classList.add("item-lista"); // Adiciona uma classe CSS
\`\`\`

3. **Colocar na página:**
\`\`\`javascript
let lista = document.querySelector("ul");
lista.appendChild(novoItem);
\`\`\`

---

## 🚀 Desafio no Editor
Crie um parágrafo (\`p\`) usando o JavaScript. Coloque o texto "Eu fui criado via JS!" dentro dele e mude a cor para azul. Imprima o resultado usando \`console.log(meuParagrafo.outerHTML)\`.
`,
    codeExamples: [
      {
        title: 'Gerador de Lista',
        language: 'javascript',
        code: `let lista = document.createElement("ul");\n\nfor (let i = 1; i <= 3; i++) {\n  let item = document.createElement("li");\n  item.innerText = "Item " + i;\n  lista.appendChild(item);\n}\n\nconsole.log(lista.innerHTML);`,
        output: '<li>Item 1</li><li>Item 2</li><li>Item 3</li>',
        explanation: 'Combinar loops com createElement permite gerar interfaces inteiras a partir de dados.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-01-04-q1',
      type: 'multiple_choice',
      question: 'O que acontece se você usar document.createElement("div") mas não usar appendChild()?',
      options: [
        'A div aparece no topo da página.',
        'O navegador dá erro.',
        'A div existe na memória do computador, mas não aparece visualmente na página.',
        'A div é criada automaticamente no final do body.'
      ],
      correctAnswer: 2,
      explanation: 'Criar e Pendurar são passos distintos. O elemento só se torna visível quando você diz onde ele deve ficar.'
    }
  ]
};
