import { Lesson } from '../../../../types/academy';

export const lesson0403: Lesson = {
  id: 'lp-04-03',
  title: 'Pausando Loops (Break e Continue)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'O "break" sai do loop imediatamente.',
    'O "continue" pula apenas a rodada atual e vai para a próxima.',
    'Use com sabedoria para deixar seu código mais inteligente.'
  ],
  content: {
    markdown: `
# 🛑 Controlando o Fluxo

Às vezes você está dentro de um loop e algo acontece que faz você querer parar tudo ou pular uma etapa. Para isso, temos dois comandos especiais.

---

## 1. O Break (Parada Total)
Imagine que você está procurando um item em uma lista. Assim que encontrar, não precisa continuar olhando o resto, certo?

\`\`\`javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Encontrei o 5! Parando...");
    break; // Sai do loop na hora
  }
  console.log("Procurando... " + i);
}
\`\`\`

---

## 2. O Continue (Pular Etapa)
O \`continue\` serve para ignorar o resto do código **daquela rodada** e ir direto para o próximo número.

\`\`\`javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Pula o número 3
  }
  console.log("Número: " + i);
}
// Resultado: 1, 2, 4, 5
\`\`\`

---

## 🚀 Desafio Final de Repetição
No Editor, crie um loop que conte de 1 a 20, mas use o \`if\` e o \`continue\` para **NÃO imprimir** os números que são múltiplos de 4 (4, 8, 12, 16, 20).
`,
    codeExamples: [
      {
        title: 'Busca com Break',
        language: 'javascript',
        code: `let alvo = 7;\n\nfor (let i = 1; i <= 10; i++) {\n  console.log("Testando " + i);\n  if (i === alvo) {\n    console.log("ALVO ENCONTRADO!");\n    break;\n  }\n}`,
        output: 'Testando 1\n...\nTestando 7\nALVO ENCONTRADO!',
        explanation: 'O break economiza processamento parando o loop assim que o objetivo é alcançado.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-04-03-q1',
      type: 'multiple_choice',
      question: 'Qual a diferença entre o break e o continue?',
      options: [
        'O break pula uma rodada, o continue para o loop.',
        'O break para o loop totalmente, o continue pula apenas a rodada atual.',
        'Ambos fazem a mesma coisa.',
        'O break é para o IF e o continue é para o FOR.'
      ],
      correctAnswer: 1,
      explanation: 'Exatamente! Break é "parada brusca", Continue é "pular a vez".'
    }
  ]
};
