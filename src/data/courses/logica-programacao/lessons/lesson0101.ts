import { Lesson } from '../../../../types/academy';

export const lesson0101: Lesson = {
  id: 'lp-01-01',
  title: 'O que são Variáveis? (As Caixas da Memória)',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'Pense em uma variável como uma caixa com uma etiqueta.',
    'No JavaScript, usamos "let" para coisas que mudam e "const" para coisas que ficam fixas.'
  ],
  content: {
    markdown: `
# 📦 O que são Variáveis?

Imagine que você está organizando sua mudança. Você pega uma caixa, coloca seus livros dentro e escreve na etiqueta: **"livros"**. 

Na programação, uma **variável** funciona exatamente assim. É um espaço na memória do computador onde guardamos uma informação e damos um nome a ela para podermos usar depois.

---

## 🛠️ Criando sua primeira variável

No JavaScript (a linguagem que vamos usar para aprender lógica), usamos a palavra-chave \`let\` para criar uma "caixa" que pode ter seu conteúdo trocado.

\`\`\`javascript
let nome = "Marina";
let idade = 25;

console.log(nome);
console.log(idade);
\`\`\`

Aqui, criamos duas variáveis: uma chamada \`nome\` que guarda o texto "Marina" e outra chamada \`idade\` que guarda o número 25.

---

## 🔒 Variáveis que não mudam (Constantes)

Às vezes, você tem uma informação que **nunca** deve mudar, como o seu CPF ou o valor de PI. Para isso, usamos o \`const\`.

\`\`\`javascript
const nascimento = 1998;
// Se tentarmos mudar 'nascimento' depois, o computador dará um erro!
\`\`\`

---

## 🚀 Hora de Praticar!

Abra o **Editor** no botão acima e tente criar uma variável com o seu nome e outra com a sua cidade. Use o \`console.log\` para exibir os valores!
`,
    codeExamples: [
      {
        title: 'Exemplo de Variáveis',
        language: 'javascript',
        code: `let heroi = "Batman";\nlet cidade = "Gotham";\n\nconsole.log("O herói é: " + heroi);\nconsole.log("Ele mora em: " + cidade);`,
        output: 'O herói é: Batman\nEle mora em: Gotham',
        explanation: 'Usamos o sinal de + para juntar (concatenar) textos com variáveis.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-01-01-q1',
      type: 'multiple_choice',
      question: 'Qual a diferença principal entre "let" e "const"?',
      options: [
        'Let é para números e Const é para textos.',
        'Let permite que o valor da variável mude depois; Const cria um valor fixo que não pode ser alterado.',
        'Const é mais rápido que Let.',
        'Não há diferença, são apenas nomes diferentes.'
      ],
      correctAnswer: 1,
      explanation: 'Exatamente! Let vem de "deixe" (mutável) e Const vem de "constante" (imutável).'
    }
  ]
};
