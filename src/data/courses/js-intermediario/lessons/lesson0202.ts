import { Lesson } from '../../../../types/academy';

export const lesson0202: Lesson = {
  id: 'js-int-02-02',
  title: 'Eventos de Mouse (Click, Hover e Além)',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    '"click" é o mais comum, mas "dblclick" (clique duplo) também existe.',
    '"mouseenter" e "mouseleave" são perfeitos para criar efeitos de hover personalizados.',
    'O objeto do evento (e) contém informações como a posição do mouse.'
  ],
  content: {
    markdown: `
# 🖱️ Eventos de Mouse

O mouse é a principal ferramenta de interação no Desktop. Saber reagir aos seus movimentos permite criar interfaces muito dinâmicas.

---

## 🛠️ Tipos Comuns
- **click**: Clique simples.
- **dblclick**: Clique duplo.
- **mouseenter**: Quando o mouse entra na área do elemento.
- **mouseleave**: Quando o mouse sai da área do elemento.
- **mousemove**: Dispara a cada milímetro que o mouse se move.

---

## 🏗️ O Objeto do Evento (e)
Toda vez que um evento acontece, o JavaScript nos envia um objeto com detalhes.

\`\`\`javascript
document.addEventListener("click", (evento) => {
  console.log("Você clicou na posição X: " + evento.clientX);
  console.log("Elemento clicado: ", evento.target);
});
\`\`\`

---

## 🚀 Desafio no Editor
Crie uma \`div\` (selecione por \`.caixa\`) que mude de cor para \`blue\` quando o mouse entrar (\`mouseenter\`) e volte para \`gray\` quando o mouse sair (\`mouseleave\`).
`,
    codeExamples: [
      {
        title: 'Efeito Hover Customizado',
        language: 'javascript',
        code: `let img = document.querySelector("img");\n\nimg.addEventListener("mouseenter", () => {\n  img.style.filter = "grayscale(0%)";\n  img.style.transform = "scale(1.1)";\n});\n\nimg.addEventListener("mouseleave", () => {\n  img.style.filter = "grayscale(100%)";\n  img.style.transform = "scale(1)";\n});`,
        output: '(Interatividade visual)',
        explanation: 'Eventos de entrada e saída são a base para criar feedback visual instantâneo para o usuário.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-02-02-q1',
      type: 'multiple_choice',
      question: 'Para que serve a propriedade "event.target" dentro de uma função de evento?',
      options: [
        'Para mudar o alvo do mouse.',
        'Para saber exatamente qual elemento disparou o evento.',
        'Para cancelar o evento.',
        'Para deletar o elemento.'
      ],
      correctAnswer: 1,
      explanation: 'O event.target é fundamental quando você tem muitos elementos e precisa saber em qual deles o usuário clicou especificamente.'
    }
  ]
};
