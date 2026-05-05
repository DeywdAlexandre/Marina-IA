import { Lesson } from '../../../../types/academy';

export const lesson0503: Lesson = {
  id: 'lp-05-03',
  title: 'O Retorno (Recebendo o Resultado)',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'O comando "return" faz a função devolver um valor para quem a chamou.',
    'Assim que o computador encontra um "return", ele sai da função imediatamente.',
    'Você pode guardar o resultado de uma função dentro de uma variável.'
  ],
  content: {
    markdown: `
# 📤 O Retorno: A Resposta da Máquina

Até agora, nossas funções apenas imprimiam coisas no console. Mas e se você quisesse que a função fizesse uma conta e desse o resultado para você usar em outro lugar do código? 

Para isso, usamos a palavra-chave **return**.

---

## 🛠️ Como usar o Return

\`\`\`javascript
function calcularMedia(n1, n2) {
  let media = (n1 + n2) / 2;
  return media; // A função "entrega" o valor
}

let resultado = calcularMedia(10, 8);
console.log("Minha média foi: " + resultado);
\`\`\`

---

## 🛑 O Return é o Fim
Nada que você escrever dentro da função **depois** do \`return\` será executado. Ele é como o ponto final daquela tarefa.

\`\`\`javascript
function teste() {
  return "Acabou!";
  console.log("Isso nunca vai aparecer");
}
\`\`\`

---

## 🚀 Desafio no Editor
Crie uma função chamada \`dobro\` que receba um número e **retorne** esse número multiplicado por 2. Depois, use essa função para calcular o dobro de 50 e guarde o resultado em uma variável.
`,
    codeExamples: [
      {
        title: 'Verificador de Maioridade',
        language: 'javascript',
        code: `function eMaior(idade) {\n  return idade >= 18;\n}\n\nlet podeEntrar = eMaior(25);\nconsole.log("Permissão:", podeEntrar);`,
        output: 'Permissão: true',
        explanation: 'Funções que retornam booleanos (true/false) são muito comuns para validações.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-05-03-q1',
      type: 'multiple_choice',
      question: 'O que acontece com o código que está abaixo de um comando "return" dentro de uma função?',
      options: [
        'Ele é executado normalmente.',
        'Ele é executado apenas se houver erro.',
        'Ele é totalmente ignorado, pois a função termina no return.',
        'Ele é movido para o topo da função.'
      ],
      correctAnswer: 2,
      explanation: 'O return encerra a execução da função e devolve o controle para quem a chamou.'
    }
  ]
};
