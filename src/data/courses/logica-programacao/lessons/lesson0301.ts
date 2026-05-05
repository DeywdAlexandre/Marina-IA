import { Lesson } from '../../../../types/academy';

export const lesson0301: Lesson = {
  id: 'lp-03-01',
  title: 'O Poder do IF e ELSE (Tomando Decisões)',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'O "if" funciona como um porteiro: se a condição for verdadeira, ele deixa o código entrar.',
    'O "else" é o plano B: o que acontece se a condição for falsa.',
    'Sempre use chaves { } para envolver o bloco de código que será executado.'
  ],
  content: {
    markdown: `
# 🚦 Tomando Decisões: if e else

Na vida real, tomamos decisões o tempo todo: "Se estiver chovendo, eu levo o guarda-chuva. Senão, eu vou sem nada". 

Na programação, isso é o coração da inteligência de um software. Usamos a estrutura \`if\` (se) e \`else\` (senão).

---

## 🛠️ A Estrutura Básica

\`\`\`javascript
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade. Pode entrar!");
} else {
  console.log("Desculpe, você é menor de idade.");
}
\`\`\`

---

## 🏗️ O "Senão Se" (else if)
E se tivermos mais de duas opções? Por exemplo: Criança, Adolescente ou Adulto? Para isso, usamos o \`else if\`.

\`\`\`javascript
let hora = 14;

if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}
\`\`\`

---

## 🚀 Desafio no Editor
Imagine que você está criando um sistema para um semáforo. 
1. Crie uma variável \`cor\`.
2. Use o \`if/else if\` para imprimir "Pare" se for "vermelho", "Atenção" se for "amarelo" e "Siga" se for "verde".
`,
    codeExamples: [
      {
        title: 'Verificador de Notas',
        language: 'javascript',
        code: `let nota = 7;\n\nif (nota >= 7) {\n  console.log("Aprovado! 🥳");\n} else if (nota >= 5) {\n  console.log("Recuperação. 😐");\n} else {\n  console.log("Reprovado. 😢");\n}`,
        output: 'Aprovado! 🥳',
        explanation: 'O computador testa as condições em ordem. Assim que encontra uma verdadeira, executa e ignora o resto.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-03-01-q1',
      type: 'multiple_choice',
      question: 'O que acontece se a condição dentro do "if" for FALSA e não houver um "else"?',
      options: [
        'O programa dá erro e para.',
        'O programa pula aquele bloco de código e segue para a próxima linha.',
        'O computador pergunta ao usuário o que fazer.',
        'O código entra no bloco de qualquer jeito.'
      ],
      correctAnswer: 1,
      explanation: 'O if é opcional. Se a condição for falsa e não houver else, o computador simplesmente ignora aquele bloco.'
    }
  ]
};
