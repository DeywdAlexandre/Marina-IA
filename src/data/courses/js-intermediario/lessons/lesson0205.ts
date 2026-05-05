import { Lesson } from '../../../../types/academy';

export const lesson0205: Lesson = {
  id: 'js-int-02-05',
  title: 'Delegação de Eventos (Truque de Mestre)',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'Em vez de colocar um evento em 100 botões, coloque 1 evento no pai deles.',
    'Isso economiza memória e funciona até para elementos criados depois.',
    'Usamos o e.target para saber qual filho foi clicado.'
  ],
  content: {
    markdown: `
# 🎯 Delegação de Eventos: Performance e Lógica

Imagine que você tem uma lista de tarefas. Cada tarefa tem um botão de "Excluir". Se você tiver 50 tarefas, vai colocar 50 \`addEventListener\`? **Não!**

Você coloca um único ouvinte na lista (\`ul\`) e deixa que o evento "suba" até ele.

---

## 🛠️ Como funciona (O Pulo do Gato)

\`\`\`javascript
let lista = document.querySelector("#minha-lista");

lista.addEventListener("click", (e) => {
  // Verificamos se o que foi clicado foi o botão de deletar
  if (e.target.classList.contains("btn-delete")) {
    console.log("Botão de deletar clicado!");
    e.target.parentElement.remove(); // Remove a linha da tarefa
  }
});
\`\`\`

---

## 🏗️ Por que isso é incrível?
1. **Memória**: Apenas 1 ouvinte em vez de centenas.
2. **Dinamicismo**: Se você criar uma nova tarefa amanhã, o botão dela já vai funcionar automaticamente, pois o pai dela está ouvindo!

---

## 🚀 Desafio no Editor
Crie um ouvinte de clique no \`document.body\`. Se o elemento clicado tiver a classe \`.perigo\`, mude a cor dele para vermelho.
`,
    codeExamples: [
      {
        title: 'Gerenciando Listas Vivas',
        language: 'javascript',
        code: `let grid = document.querySelector(".grid");\n\ngrid.addEventListener("click", (e) => {\n  if (e.target.tagName === "BUTTON") {\n    alert("Botão " + e.target.innerText + " pressionado!");\n  }\n});`,
        output: '(Aguardando cliques no grid)',
        explanation: 'A delegação de eventos é o que torna possível gerenciar interfaces com centenas de elementos interativos de forma leve.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-02-05-q1',
      type: 'multiple_choice',
      question: 'Qual a maior vantagem da delegação de eventos?',
      options: [
        'Deixar o site mais bonito.',
        'Permitir que elementos criados dinamicamente no futuro também respondam ao evento, além de economizar memória.',
        'Impedir que o usuário clique no botão.',
        'Substituir o CSS.'
      ],
      correctAnswer: 1,
      explanation: 'Esta é uma técnica avançada essencial para qualquer aplicação que manipule o DOM dinamicamente.'
    }
  ]
};
