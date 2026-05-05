import { Lesson } from '../../../../types/academy';

export const lesson0102: Lesson = {
  id: 'lp-01-02',
  title: 'Tipos de Dados (O que cabe na caixa?)',
  type: 'mixed',
  estimatedMinutes: 12,
  tips: [
    'Textos sempre devem estar entre aspas: "assim" ou \'assim\'.',
    'Números não usam aspas.',
    'Booleanos são como um interruptor: ligado (true) ou desligado (false).'
  ],
  content: {
    markdown: `
# 🔡 Tipos de Dados

Não colocamos sopa em uma caixa de papelão, certo? Cada tipo de conteúdo precisa do recipiente adequado. Na programação, o computador precisa saber que **tipo** de informação está guardada na variável para saber o que fazer com ela.

Os tipos mais comuns são:

---

## 1. Strings (Textos)
Qualquer sequência de letras, números ou símbolos envolta em aspas.
\`\`\`javascript
let saudacao = "Olá, Mundo!";
\`\`\`

---

## 2. Numbers (Números)
Números inteiros ou com vírgula (usamos ponto no lugar da vírgula).
\`\`\`javascript
let preco = 29.90;
let quantidade = 10;
\`\`\`

---

## 3. Booleans (Verdadeiro ou Falso)
Representam estados binários. Sim ou Não.
\`\`\`javascript
let estaLogado = true;
let temDesconto = false;
\`\`\`

---

## 🧪 Por que isso importa?

Se você tentar somar dois números, o resultado será matemático: \`10 + 10 = 20\`.
Se você tentar somar dois textos, o resultado será uma junção: \`"10" + "10" = "1010"\`.

Teste isso agora mesmo no **Editor de Código**!
`,
    codeExamples: [
      {
        title: 'Diferença de Tipos',
        language: 'javascript',
        code: `let num1 = 10;\nlet num2 = 10;\nconsole.log("Soma de Números:", num1 + num2);\n\nlet txt1 = "10";\nlet txt2 = "10";\nconsole.log("Soma de Textos:", txt1 + txt2);`,
        output: 'Soma de Números: 20\nSoma de Textos: 1010',
        explanation: 'O sinal de + soma números, mas junta (concatena) strings.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-01-02-q1',
      type: 'multiple_choice',
      question: 'Qual o tipo de dado da variável: let luz = false; ?',
      options: [
        'String',
        'Number',
        'Boolean',
        'Undefined'
      ],
      correctAnswer: 2,
      explanation: 'True e False são valores Booleanos, usados para lógica de decisão.'
    }
  ]
};
