import { Lesson } from '../../../../types/academy';

export const lesson0301: Lesson = {
  id: 'js-int-03-01',
  title: 'Timers: Controlando o Tempo (setTimeout e setInterval)',
  type: 'mixed',
  estimatedMinutes: 12,
  previewHtml: `
    <div style="padding: 20px; text-align: center;">
      <h2 id="status">Aguardando...</h2>
      <div id="relogio" style="font-size: 48px; font-weight: bold; font-family: monospace; color: #3178C6; margin: 20px 0;">
        00:00:00
      </div>
      <p id="aviso" style="color: #666;"></p>
    </div>
  `,
  tips: [
    'setTimeout(função, tempo) executa uma vez após o atraso.',
    'setInterval(função, tempo) executa repetidamente.',
    'O tempo é sempre em milissegundos (1000ms = 1 segundo).'
  ],
  content: {
    markdown: `
# ⏱️ Controlando o Tempo

Nem tudo no JavaScript acontece instantaneamente. Às vezes precisamos esperar algo carregar ou repetir uma ação a cada segundo.

---

## 🛠️ setTimeout (A Bomba Relógio)
Executa um código apenas **uma vez** depois de um tempo.

\`\`\`javascript
setTimeout(() => {
  console.log("3 segundos se passaram!");
}, 3000);
\`\`\`

---

## 🏗️ setInterval (O Batimento Cardíaco)
Executa um código **repetidamente** em intervalos fixos.

\`\`\`javascript
setInterval(() => {
  console.log("Mais um segundo...");
}, 1000);
\`\`\`

---

## 🚀 Desafio no Editor
Vá na aba **script.js** e crie um \`setInterval\` que atualize o texto da div \`#relogio\` com a hora atual (\`new Date().toLocaleTimeString()\`) a cada segundo.
`,
    codeExamples: [
      {
        title: 'Relógio em Tempo Real',
        language: 'javascript',
        code: `setInterval(() => {\n  const hora = new Date().toLocaleTimeString();\n  document.querySelector("#relogio").innerText = hora;\n}, 1000);`,
        output: '(Relógio funcionando no Preview)',
        explanation: 'Usamos setInterval para manter a interface sempre atualizada com o tempo real.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-03-01-q1',
      type: 'multiple_choice',
      question: 'Se eu quiser que um alerta apareça daqui a exatos 5 segundos, qual comando devo usar?',
      options: [
        'setInterval(alert, 5)',
        'setTimeout(alert, 5000)',
        'setTimeout(alert, 5)',
        'wait(5000).then(alert)'
      ],
      correctAnswer: 1,
      explanation: '5 segundos equivalem a 5000 milissegundos no setTimeout.'
    }
  ]
};
