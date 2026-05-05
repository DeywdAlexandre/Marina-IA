import { Lesson } from '../../../../types/academy';

export const lesson0105: Lesson = {
  id: 'js-int-01-05',
  title: 'Navegando pela Árvore (Parent & Children)',
  type: 'mixed',
  estimatedMinutes: 12,
  tips: [
    'O "parentElement" leva você para o pai do elemento atual.',
    'O "children" retorna uma lista de todos os filhos.',
    'Isso é útil quando você clica em um botão "X" e quer remover a linha inteira onde ele está.'
  ],
  content: {
    markdown: `
# 🧗‍♂️ Escalando o DOM: Parent e Children

Às vezes você tem o elemento, mas precisa do que está em volta dele. É como saber quem é o vizinho ou o pai de uma tag.

---

## 👨‍👦 O Pai e o Filho

\`\`\`javascript
let botao = document.querySelector("#meu-btn");

// Quem é o pai deste botão? (Talvez uma div ou form)
let pai = botao.parentElement;

// Quem são os filhos deste pai?
let irmaos = pai.children;
\`\`\`

---

## 🗑️ Removendo Elementos
Para remover um elemento, você pode fazer:
\`\`\`javascript
let lixo = document.querySelector(".erro");
lixo.remove();
\`\`\`
Ou através do pai:
\`\`\`javascript
pai.removeChild(lixo);
\`\`\`

---

## 🚀 Desafio no Editor
Imagine uma estrutura onde um \`span\` está dentro de uma \`div\`. Se você tiver o \`span\`, como você mudaria a borda da \`div\` pai para "2px solid red"?
`,
    codeExamples: [
      {
        title: 'Lógica de Deleção',
        language: 'javascript',
        code: `// Simulação: Clicou no botão de fechar dentro de um card\nlet btnFechar = { parentElement: { id: "card-1", remove: () => console.log("Card removido!") } };\n\n// Lógica do programador:\nbtnFechar.parentElement.remove();`,
        output: 'Card removido!',
        explanation: 'Saber navegar entre pais e filhos é essencial para criar interfaces dinâmicas complexas.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-01-05-q1',
      type: 'multiple_choice',
      question: 'Qual propriedade usamos para acessar o elemento que contém (está acima de) outro elemento?',
      options: [
        'childElement',
        'parentElement',
        'nextSibling',
        'querySelector'
      ],
      correctAnswer: 1,
      explanation: 'O parentElement "sobe" um nível na árvore do DOM.'
    }
  ]
};
