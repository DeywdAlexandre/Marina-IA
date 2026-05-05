import { Lesson } from '../../../../types/academy';

export const lesson0201: Lesson = {
  id: 'js-int-02-01',
  title: 'Escutadores de Eventos (Ouvindo o Usuário)',
  type: 'mixed',
  estimatedMinutes: 12,
  previewHtml: `
    <div style="padding: 20px; text-align: center;">
      <h1>Ouvinte de Eventos</h1>
      <button id="meu-btn" style="padding: 15px 30px; font-size: 16px; background: #3178C6; color: white; border: none; border-radius: 8px; cursor: pointer;">
        Clique em Mim!
      </button>
      <p id="msg" style="margin-top: 15px; font-weight: bold;"></p>
    </div>
  `,
  tips: [
    'Um evento é qualquer coisa que acontece na página (clique, movimento, tecla).',
    'Usamos o método addEventListener para dizer ao elemento o que ele deve "ouvir".',
    'Isso separa a lógica do JavaScript do código HTML (Clean Code).'
  ],
  content: {
    markdown: `
# 👂 addEventListener: O Ouvinte Atento

Na programação moderna, nós não misturamos JavaScript no meio do HTML (como o antigo \`onclick\`). Nós usamos **Escutadores de Eventos**.

---

## 🛠️ Como funciona o addEventListener

Ele precisa de dois "ingredientes":
1. **O tipo de evento:** O que ele deve ouvir (ex: "click").
2. **A função:** O que ele deve fazer quando o evento acontecer.

\`\`\`javascript
let botao = document.querySelector("#meu-btn");

botao.addEventListener("click", () => {
  alert("Você me clicou! 🎉");
});
\`\`\`

---

## 🏗️ Por que usar assim?
1. Você pode adicionar **múltiplos** ouvintes ao mesmo botão.
2. Você pode remover o ouvinte a qualquer momento.
3. Seu HTML fica limpo e organizado.

---

## 🚀 Desafio no Editor
Crie um botão imaginário (selecione pelo ID \`confirmar\`) e adicione um evento de clique que mude a cor de fundo do \`body\` para \`gold\`.
`,
    codeExamples: [
      {
        title: 'Múltiplos Eventos',
        language: 'javascript',
        code: `let btn = document.querySelector("button");\n\nbtn.addEventListener("click", () => console.log("Clicado!"));\nbtn.addEventListener("mouseover", () => console.log("Mouse passou por cima!"));`,
        output: '(Ver console conforme interage)',
        explanation: 'Um mesmo elemento pode reagir a diferentes tipos de interações simultaneamente.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-02-01-q1',
      type: 'multiple_choice',
      question: 'Qual a forma recomendada de adicionar um evento a um elemento no JavaScript moderno?',
      options: [
        'Usando a tag <button onclick="..."> no HTML.',
        'Usando o método addEventListener no arquivo JavaScript.',
        'Escrevendo o código dentro do CSS.',
        'Não é necessário adicionar eventos, o navegador adivinha.'
      ],
      correctAnswer: 1,
      explanation: 'O addEventListener é o padrão da indústria pois permite manter o código modular e escalável.'
    }
  ]
};
