import { Lesson } from '../../../../types/academy';

export const lesson0203: Lesson = {
  id: 'lp-02-03',
  title: 'Atalhos de Soma (Incremento)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'O comando "pontos++" é usado o tempo todo em jogos para aumentar a pontuação do jogador.',
    'Você também pode usar "--" para diminuir (decremento).'
  ],
  content: {
    markdown: `
# ⚡ Atalhos de Poder

Muitas vezes, você quer apenas aumentar o valor de uma variável em 1. 
Em vez de escrever \`vida = vida + 1\`, o JavaScript tem um atalho ninja:

---

## 🔝 Incremento (++)
O operador \`++\` aumenta o valor da variável em **1** automaticamente.

\`\`\`javascript
let nivel = 1;
nivel++; // Agora nivel é 2
console.log(nivel);
\`\`\`

---

## 🔜 Operadores de Atribuição Composta
Se você quiser aumentar um valor por um número maior (ex: somar 50 à vida), use o \`+=\`.

- \`vida += 50\` é o mesmo que \`vida = vida + 50\`
- \`saldo -= 20\` é o mesmo que \`saldo = saldo - 20\`
- \`bonus *= 2\` é o mesmo que \`bonus = bonus * 2\`

---

## 🛠️ Por que usar atalhos?
Eles tornam o seu código mais curto e mais fácil de ler para outros programadores. É o jeito profissional de escrever.

Teste agora no **Editor**: crie uma variável \`score\`, aumente ela algumas vezes usando \`++\` e depois use \`+=\` para dar um bônus de 500 pontos!
`,
    codeExamples: [
      {
        title: 'Sistema de Pontuação',
        language: 'javascript',
        code: `let xp = 0;\nxp += 100; // Matou um monstro\nxp += 100; // Matou outro\nxp++; // Ganhou 1 ponto extra por sorte\n\nconsole.log("XP Total:", xp);`,
        output: 'XP Total: 201',
        explanation: 'Atalhos deixam o código mais dinâmico e enxuto.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-02-03-q1',
      type: 'multiple_choice',
      question: 'Se eu tenho let vida = 10; e executo o comando vida += 5; qual será o novo valor de vida?',
      options: [
        '5',
        '10',
        '15',
        '50'
      ],
      correctAnswer: 2,
      explanation: 'O operador += soma o valor da direita ao valor atual da variável. 10 + 5 = 15.'
    }
  ]
};
