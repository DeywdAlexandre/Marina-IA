import { Lesson } from '../../../../types/academy';

export const lesson0803: Lesson = {
  id: 'lp-08-03',
  title: 'Map (Transformando a Realidade)',
  type: 'mixed',
  estimatedMinutes: 12,
  tips: [
    'O "map" serve para transformar cada item de uma lista em outra coisa.',
    'Ele sempre retorna uma NOVA lista com o mesmo tamanho da original.',
    'Exemplo: Transformar uma lista de Reais em Dólares.'
  ],
  content: {
    markdown: `
# 🧪 Map: O Alquimista de Listas

Enquanto o \`filter\` diminui a lista, o **map** mantém o tamanho mas **muda o conteúdo** de cada item. 

---

## 🛠️ Como funciona

\`\`\`javascript
let numeros = [1, 2, 3, 4];

let dobros = numeros.map((n) => {
  return n * 2;
});

console.log(dobros); // [2, 4, 6, 8]
\`\`\`

---

## 🏗️ Exemplo Real: Formatação
Imagine que você tem nomes em minúsculo e quer formatar para uma lista oficial.

\`\`\`javascript
let nomes = ["marina", "deywd", "alex"];
let nomesOficiais = nomes.map(n => n.toUpperCase());

console.log(nomesOficiais); // ["MARINA", "DEYWD", "ALEX"]
\`\`\`

---

## 🚀 Desafio no Editor
Crie um array com os preços: \`[10, 20, 30]\`. 
Use o \`.map()\` para criar uma nova lista onde cada preço tenha um acréscimo de 5 reais (taxa de entrega). Imprima a nova lista!
`,
    codeExamples: [
      {
        title: 'Extraindo Dados',
        language: 'javascript',
        code: `let produtos = [\n  { nome: "Camisa", preco: 50 },\n  { nome: "Calça", preco: 100 }\n];\n\nlet apenasNomes = produtos.map(p => p.nome);\nconsole.log(apenasNomes);`,
        output: '["Camisa", "Calça"]',
        explanation: 'O map é muito usado para "limpar" dados, pegando apenas o que nos interessa de objetos complexos.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-08-03-q1',
      type: 'multiple_choice',
      question: 'Qual a principal diferença entre o filter() e o map()?',
      options: [
        'O filter() transforma os itens e o map() remove itens.',
        'O map() sempre retorna um array do mesmo tamanho do original, enquanto o filter() pode retornar um array menor.',
        'O map() é mais lento que o filter().',
        'Nenhuma, são iguais.'
      ],
      correctAnswer: 1,
      explanation: 'Exatamente! O map() é um "conversor" um-para-um, enquanto o filter() é um "pente-fino".'
    }
  ]
};
