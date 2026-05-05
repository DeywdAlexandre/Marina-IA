import { Lesson } from '../../../../types/academy';

export const lesson0701: Lesson = {
  id: 'lp-07-01',
  title: 'O que são Objetos? (Dando nome aos bois)',
  type: 'mixed',
  estimatedMinutes: 12,
  tips: [
    'Um objeto agrupa várias informações sobre uma única "coisa".',
    'Diferente do array (onde usamos índices 0, 1, 2), no objeto usamos nomes (chaves).',
    'Usamos chaves { } para criar um objeto.'
  ],
  content: {
    markdown: `
# 💎 O que são Objetos?

Imagine que você quer guardar os dados de um carro. No Array, ficaria assim: \`["Fiat", "Uno", 2010, "Branco"]\`. 
Mas como saber qual valor é o ano e qual é a cor sem olhar a ordem?

O **Objeto** resolve isso dando nomes (etiquetas) para cada valor.

---

## 🛠️ Criando seu primeiro Objeto

\`\`\`javascript
let carro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 2010,
  cor: "Branco"
};

console.log(carro);
\`\`\`

Agora cada informação está rotulada. Isso deixa o código muito mais fácil de ler e entender.

---

## 🚀 Prática no Editor
Crie um objeto chamado \`usuario\` com as propriedades \`nome\`, \`idade\` e \`isAdmin\` (verdadeiro ou falso). Mostre o objeto no console.
`,
    codeExamples: [
      {
        title: 'Perfil de RPG',
        language: 'javascript',
        code: `let heroi = {\n  nome: "Aragorn",\n  classe: "Guerreiro",\n  nivel: 20,\n  estaVivo: true\n};\n\nconsole.log(heroi);`,
        output: '{ nome: "Aragorn", classe: "Guerreiro", nivel: 20, estaVivo: true }',
        explanation: 'Objetos são perfeitos para representar entidades do mundo real ou de sistemas.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-07-01-q1',
      type: 'multiple_choice',
      question: 'Qual símbolo usamos para declarar um Objeto no JavaScript?',
      options: [
        'Colchetes [ ]',
        'Parênteses ( )',
        'Chaves { }',
        'Aspas " "'
      ],
      correctAnswer: 2,
      explanation: 'As chaves { } delimitam o início e o fim de um objeto.'
    }
  ]
};
