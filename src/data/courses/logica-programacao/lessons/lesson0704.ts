import { Lesson } from '../../../../types/academy';

export const lesson0704: Lesson = {
  id: 'lp-07-04',
  title: 'Arrays de Objetos (O Mundo Real)',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'No dia a dia, quase toda informação vem como uma lista de objetos.',
    'Exemplo: Lista de produtos, lista de mensagens, lista de usuários.',
    'Combinamos o que aprendemos sobre Arrays e Objetos aqui.'
  ],
  content: {
    markdown: `
# 🏢 O Mundo Real: Listas de Objetos

Agora vamos juntar as peças. Quase todo site ou app que você usa funciona com uma lista (\`Array\`) cheia de dados detalhados (\`Objetos\`).

Imagine um catálogo de filmes:

---

## 🛠️ Exemplo de Estrutura

\`\`\`javascript
let filmes = [
  { titulo: "Matrix", ano: 1999 },
  { titulo: "Inception", ano: 2010 },
  { titulo: "Avatar", ano: 2009 }
];

// Acessando o título do segundo filme:
console.log(filmes[1].titulo); // Inception
\`\`\`

---

## 🔄 Percorrendo a Lista
Podemos usar o nosso amigo \`for\` para listar todos de uma vez:

\`\`\`javascript
for (let i = 0; i < filmes.length; i++) {
  console.log("Filme: " + filmes[i].titulo + " (" + filmes[i].ano + ")");
}
\`\`\`

---

## 🚀 Desafio Final do Módulo
Crie um array chamado \`produtos\` com 3 objetos. Cada objeto deve ter \`nome\` e \`preco\`. 
Use um loop para percorrer a lista e imprimir apenas os nomes dos produtos que custam **mais de 100 reais**.
`,
    codeExamples: [
      {
        title: 'Gestão de Usuários',
        language: 'javascript',
        code: `let usuarios = [\n  { nome: "Ana", ativo: true },\n  { nome: "Beto", ativo: false },\n  { nome: "Caio", ativo: true }\n];\n\nfor (let i = 0; i < usuarios.length; i++) {\n  if (usuarios[i].ativo) {\n    console.log(usuarios[i].nome + " está online! ✅");\n  }\n}`,
        output: 'Ana está online! ✅\nCaio está online! ✅',
        explanation: 'Filtrar listas de objetos é uma das tarefas mais comuns de um programador.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-07-04-q1',
      type: 'multiple_choice',
      question: 'Como acesso o preço do primeiro produto em: let estoque = [{nome: "Pão", preco: 2}, {nome: "Café", preco: 10}]; ?',
      options: [
        'estoque.preco[0]',
        'estoque[0].preco',
        'estoque[1].preco',
        'estoque.0.preco'
      ],
      correctAnswer: 1,
      explanation: 'Primeiro pegamos o objeto na posição 0 do array (estoque[0]) e depois acessamos sua propriedade (.preco).'
    }
  ]
};
