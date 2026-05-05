import { Lesson } from '../../../../types/academy';

export const lesson0404: Lesson = {
  id: 'js-adv-04-04',
  title: 'Recursividade Avançada: Árvores de Dados',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>📂 Explorador de Pastas (Recursão)</h3>
      <div id="folder-tree" style="font-family: monospace; font-size: 13px; line-height: 1.8;">
        Gerando árvore...
      </div>
    </div>
  `,
  tips: [
    'Recursividade é quando uma função chama a si mesma.',
    'Sempre defina uma "Condição de Parada" (Base Case) para não criar um loop infinito.',
    'Ideal para navegar em estruturas aninhadas, como menus de categorias ou pastas de arquivos.'
  ],
  content: {
    markdown: `
# 📁 Recursividade: Mergulhando nos Dados

Alguns dados não são listas simples, são árvores (uma pasta dentro de outra, uma categoria com subcategorias). A melhor forma de lidar com isso é a **Recursão**.

---

## 🛠️ A Estrutura da Função
1. **Caso Base:** Quando parar? (Ex: a pasta está vazia).
2. **Passo Recursivo:** Chamar a si mesma com o próximo nível.

\`\`\`javascript
function contar(n) {
  if (n <= 0) return; // Caso Base
  console.log(n);
  contar(n - 1); // Chamada Recursiva
}
\`\`\`

---

## 🏗️ Percorrendo Objetos Complexos
Imagine um comentário que tem várias respostas, e cada resposta tem mais respostas. Só a recursão resolve isso de forma limpa.

---

## 🚀 Desafio no Editor
Crie uma função recursiva \`renderizarArvore(dados)\`. Os dados são um objeto com \`nome\` e uma array de \`filhos\`. A função deve criar uma lista HTML (\`<ul>\`) aninhada automaticamente.
`,
    codeExamples: [
      {
        title: 'Gerador de Menus',
        language: 'javascript',
        code: `const categorias = {\n  nome: "Eletrônicos",\n  filhos: [\n    { nome: "Computadores", filhos: [{ nome: "Laptops", filhos: [] }, { nome: "Desktops", filhos: [] }] },\n    { nome: "Celulares", filhos: [] }\n  ]\n};\n\nfunction listar(obj, nivel = 0) {\n  let html = "<div>" + "-".repeat(nivel) + " " + obj.nome + "</div>";\n  obj.filhos.forEach(filho => {\n    html += listar(filho, nivel + 2);\n  });\n  return html;\n}\n\ndocument.querySelector("#folder-tree").innerHTML = listar(categorias);`,
        output: '(Árvore hierárquica exibida no Preview)',
        explanation: 'A recursão simplifica drasticamente a lógica de navegação em estruturas de profundidade desconhecida.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-04-04-q1',
      type: 'multiple_choice',
      question: 'O que acontece se uma função recursiva não tiver um "Caso Base"?',
      options: [
        'O código roda mais rápido.',
        'Ocorre um erro de "Maximum call stack size exceeded" (Stack Overflow) porque o navegador fica sem memória.',
        'O JavaScript inventa um resultado.',
        'O computador desliga.'
      ],
      correctAnswer: 1,
      explanation: 'O navegador tem um limite de quantas funções podem ser empilhadas. Sem parada, esse limite estoura rapidamente.'
    }
  ]
};
