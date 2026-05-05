import { Lesson } from '../../../../types/academy';

export const lesson0402: Lesson = {
  id: 'lp-04-02',
  title: 'O Loop FOR (Controle Total)',
  type: 'mixed',
  estimatedMinutes: 12,
  tips: [
    'O "for" é o loop mais usado no dia a dia do programador.',
    'Ele agrupa o Início, a Condição e o Passo em uma única linha.',
    'A estrutura é: for (início; condição; passo) { ... }'
  ],
  content: {
    markdown: `
# 🏎️ Loop FOR: O Favorito dos Devs

O loop **for** faz exatamente o mesmo que o \`while\`, mas de uma forma muito mais organizada. Ele é perfeito quando você sabe exatamente onde começa e onde termina a repetição.

---

## 🛠️ Anatomia do FOR

\`\`\`javascript
//  (Início ; Condição ; Passo)
for (let i = 0; i < 5; i++) {
  console.log("Repetição número: " + i);
}
\`\`\`

1. **Início:** \`let i = 0\` (Cria o contador).
2. **Condição:** \`i < 5\` (Enquanto for verdade, ele roda).
3. **Passo:** \`i++\` (Soma 1 ao contador após cada rodada).

---

## 🏗️ Comparação Rápida
O que antes levava 4 ou 5 linhas com o \`while\`, agora resolvemos em apenas 1 linha de configuração.

---

## 🚀 Desafio no Editor
Tente criar um loop que conte de **10 até 0** (contagem regressiva).
Dica: Comece o \`i\` em 10, a condição deve ser enquanto \`i >= 0\` e o passo deve ser \`i--\`.
`,
    codeExamples: [
      {
        title: 'Tabuada do 7',
        language: 'javascript',
        code: `for (let i = 1; i <= 10; i++) {\n  console.log("7 x " + i + " = " + (7 * i));\n}`,
        output: '7 x 1 = 7\n7 x 2 = 14\n...\n7 x 10 = 70',
        explanation: 'O loop FOR é perfeito para gerar tabelas e cálculos repetitivos.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-04-02-q1',
      type: 'multiple_choice',
      question: 'Quais são as três partes que compõem o parênteses de um loop FOR?',
      options: [
        'Nome, Idade e Sexo.',
        'Início, Condição e Incremento/Passo.',
        'Se, Senão e Fim.',
        'Variável, Função e Objeto.'
      ],
      correctAnswer: 1,
      explanation: 'Exatamente! O for organiza a declaração, o teste lógico e o aumento do contador em um só lugar.'
    }
  ]
};
