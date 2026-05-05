import { Lesson } from '../../../../types/academy';

export const lesson0703: Lesson = {
  id: 'lp-07-03',
  title: 'Métodos de Objeto (O Objeto tem Ações!)',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'Um método é uma função que pertence a um objeto.',
    'A palavra reservada "this" refere-se ao próprio objeto onde a função está.',
    'Isso permite que o objeto "conheça" seus próprios dados.'
  ],
  content: {
    markdown: `
# 🎬 Ações: Métodos de Objeto

Objetos não precisam ser apenas "estátuas" de dados. Eles podem ter comportamentos! Quando uma função está dentro de um objeto, nós a chamamos de **Método**.

---

## 🛠️ Criando um Método

\`\`\`javascript
let pessoa = {
  nome: "Marina",
  saudar: function() {
    console.log("Olá! Eu sou a " + this.nome);
  }
};

pessoa.saudar(); // Olá! Eu sou a Marina
\`\`\`

O \`this.nome\` diz ao JavaScript: "Pegue a propriedade 'nome' que está DENTRO deste objeto aqui".

---

## 🏗️ Por que usar Métodos?
Eles ajudam a organizar o código. Em vez de ter funções soltas, as ações ficam juntas com os dados que elas usam.

---

## 🚀 Desafio no Editor
Crie um objeto \`calculadora\` que tenha duas propriedades (\`n1\` e \`n2\`) e um método chamado \`somar\` que imprima a soma desses dois números usando o \`this\`.
`,
    codeExamples: [
      {
        title: 'Controle de Personagem',
        language: 'javascript',
        code: `let player = {\n  vida: 100,\n  tomarDano: function(valor) {\n    this.vida -= valor;\n    console.log("Vida restante: " + this.vida);\n  }\n};\n\nplayer.tomarDano(30);`,
        output: 'Vida restante: 70',
        explanation: 'Métodos permitem que o objeto altere seu próprio estado de forma organizada.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-07-03-q1',
      type: 'multiple_choice',
      question: 'Para que serve a palavra-chave "this" dentro de um método de objeto?',
      options: [
        'Para criar uma nova variável.',
        'Para se referir ao próprio objeto que contém o método.',
        'Para parar a execução do código.',
        'Para importar uma biblioteca externa.'
      ],
      correctAnswer: 1,
      explanation: 'O "this" é um atalho para acessar as propriedades do próprio objeto sem precisar repetir o nome dele.'
    }
  ]
};
