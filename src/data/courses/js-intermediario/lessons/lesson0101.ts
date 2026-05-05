import { Lesson } from '../../../../types/academy';

export const lesson0101: Lesson = {
  id: 'js-int-01-01',
  title: 'O que é o DOM? (A Árvore da Vida Web)',
  type: 'mixed',
  estimatedMinutes: 12,
  previewHtml: `
    <div id="root" style="padding: 20px; text-align: center;">
      <h1 id="titulo">Bem-vindo à Marina Academy</h1>
      <p id="subtitulo">Esta é uma página real renderizada dentro do seu simulador.</p>
      <div style="margin-top: 20px; padding: 15px; border: 2px dashed #ccc; border-radius: 8px;">
        Este é um container de teste. Use o JS para me mudar!
      </div>
    </div>
  `,
  tips: [
    'DOM significa Document Object Model.',
    'É a representação do seu HTML como um objeto que o JavaScript pode entender.',
    'Imagine o HTML como uma árvore: o <html> é a raiz e os outros elementos são os galhos.'
  ],
  content: {
    markdown: `
# 🌳 O Que é o DOM?

Se o HTML é o esqueleto da página, o **DOM (Document Object Model)** é o sistema nervoso que permite ao JavaScript controlar esse esqueleto.

Quando o navegador carrega sua página, ele cria uma árvore de objetos. Cada tag HTML (\`div\`, \`h1\`, \`p\`) vira um "Nó" nessa árvore.

---

## 🛠️ Por que o DOM é importante?
Sem o DOM, o JavaScript seria apenas uma calculadora. Com o DOM, ele pode:
1. Mudar o texto de um título.
2. Trocar as cores de um botão quando você clica.
3. Adicionar ou remover itens de uma lista de compras.
4. Criar animações complexas.

---

## 🏗️ O Objeto "document"
O ponto de entrada para tudo é o objeto global \`document\`. 

\`\`\`javascript
console.log(document); // Mostra toda a estrutura da página
console.log(document.title); // Mostra o título da aba do navegador
\`\`\`

---

## 🚀 Prática no Editor
Use o console para descobrir o título da página atual. Tente digitar \`console.log(document.URL)\` para ver o endereço onde estamos.
`,
    codeExamples: [
      {
        title: 'Explorando o Document',
        language: 'javascript',
        code: `console.log("Título da página: " + document.title);\nconsole.log("URL atual: " + document.URL);\nconsole.log("Cor de fundo do corpo: " + document.body.style.backgroundColor);`,
        output: 'Título da página: Marina Academy\nURL atual: http://localhost:5173/...\nCor de fundo do corpo: ',
        explanation: 'O objeto document é a sua ponte de comando para o navegador.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-01-01-q1',
      type: 'multiple_choice',
      question: 'O que o DOM representa?',
      options: [
        'A estrutura do servidor de banco de dados.',
        'A representação em objeto do seu HTML para que o JS possa manipulá-lo.',
        'Uma biblioteca externa que precisa ser instalada.',
        'O código fonte do CSS.'
      ],
      correctAnswer: 1,
      explanation: 'O DOM é nativo do navegador e serve como interface entre o HTML e o JavaScript.'
    }
  ]
};
