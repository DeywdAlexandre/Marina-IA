import { Lesson } from '../../../../types/academy';

export const lesson0303: Lesson = {
  id: 'js-int-03-03',
  title: 'Async e Await: O Padrão Ouro',
  type: 'mixed',
  estimatedMinutes: 15,
  previewHtml: `
    <div style="padding: 20px; text-align: center;">
      <h2 id="titulo">Download de Arquivo</h2>
      <div style="width: 100%; background: #eee; height: 10px; border-radius: 5px; margin: 20px 0;">
        <div id="progresso" style="width: 0%; height: 100%; background: #27c93f; border-radius: 5px; transition: width 0.5s;"></div>
      </div>
      <p id="msg">Aguardando início...</p>
      <button id="btn-start" style="padding: 10px 20px; background: #3178C6; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Simular Download
      </button>
    </div>
  `,
  tips: [
    'Async/Await é apenas um jeito mais bonito de usar Promises.',
    'Sempre use "async" na função para poder usar "await" dentro dela.',
    'O "await" pausa a execução da função até a promessa terminar.'
  ],
  content: {
    markdown: `
# 🚀 Async / Await: O Código que Espera

O \`.then()\` é legal, mas quando temos muitas promessas, o código fica uma bagunça (o "Callback Hell"). O **Async/Await** resolve isso deixando o código com cara de "síncrono".

---

## 🛠️ Como usar
Basta colocar \`async\` antes da função e \`await\` antes da promessa.

\`\`\`javascript
async function buscarDados() {
  console.log("Iniciando...");
  
  const resultado = await minhaPromessa(); // O código para aqui e espera
  
  console.log("Terminou: " + resultado);
}
\`\`\`

---

## 🏗️ Por que é melhor?
- É muito mais fácil de ler.
- É mais fácil de debugar.
- Parece uma lista de tarefas sequencial.

---

## 🚀 Desafio no Editor
Crie uma função \`async\` chamada \`iniciarDownload\`. Use \`await\` para esperar 1 segundo e mude a largura da div \`#progresso\` para 50%. Depois espere mais 1 segundo e mude para 100%.
`,
    codeExamples: [
      {
        title: 'Fluxo Sequencial',
        language: 'javascript',
        code: `const esperar = (ms) => new Promise(res => setTimeout(res, ms));\n\nasync function workflow() {\n  document.querySelector("#msg").innerText = "Preparando...";\n  await esperar(1000);\n  document.querySelector("#progresso").style.width = "50%";\n  document.querySelector("#msg").innerText = "Baixando...";\n  await esperar(1000);\n  document.querySelector("#progresso").style.width = "100%";\n  document.querySelector("#msg").innerText = "Concluído!";\n}\n\nworkflow();`,
        output: '(Barra de progresso animando)',
        explanation: 'O await permite criar fluxos complexos de tempo sem se perder em múltiplos .then().'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-03-03-q1',
      type: 'multiple_choice',
      question: 'O que o comando "await" faz exatamente dentro de uma função async?',
      options: [
        'Ele cancela a promessa.',
        'Ele pausa a execução daquela função até que a promessa seja resolvida.',
        'Ele acelera a internet.',
        'Ele pula para a próxima lição.'
      ],
      correctAnswer: 1,
      explanation: 'O await "pausa" a linha atual até o resultado chegar, tornando o código linear.'
    }
  ]
};
