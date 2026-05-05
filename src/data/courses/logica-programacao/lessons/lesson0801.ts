import { Lesson } from '../../../../types/academy';

export const lesson0801: Lesson = {
  id: 'lp-08-01',
  title: 'forEach (O Fim do For Manual)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'O "forEach" é um método que percorre o array automaticamente.',
    'Para cada item da lista, ele executa uma função que você define.',
    'É muito mais limpo e moderno que o "for" tradicional.'
  ],
  content: {
    markdown: `
# 🔄 forEach: Percorrendo com Estilo

Lembra do loop \`for\` que precisava de contador (\`i\`), condição e passo? No JavaScript moderno, raramente usamos ele para percorrer listas simples. Usamos o **forEach**.

---

## 🛠️ Como funciona

\`\`\`javascript
let alunos = ["Ana", "Beto", "Caio"];

alunos.forEach((nome) => {
  console.log("Aluno: " + nome);
});
\`\`\`

O \`forEach\` pega cada item da lista, coloca dentro da variável \`nome\` e executa o código entre as chaves. Sem precisar de \`i++\` ou \`lista[i]\`!

---

## 🚀 Desafio no Editor
Crie um array com nomes de marcas de carro. Use o \`forEach\` para imprimir cada marca em letras maiúsculas. 
Dica: Use \`marca.toUpperCase()\` dentro do loop.
`,
    codeExamples: [
      {
        title: 'Lista de Tarefas',
        language: 'javascript',
        code: `let tarefas = ["Estudar", "Treinar", "Codar"];\n\ntarefas.forEach((tarefa, indice) => {\n  console.log((indice + 1) + ". " + tarefa);\n});`,
        output: '1. Estudar\n2. Treinar\n3. Codar',
        explanation: 'O forEach também pode nos dar o índice atual se pedirmos (como segundo parâmetro).'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-08-01-q1',
      type: 'multiple_choice',
      question: 'Qual a principal vantagem do forEach sobre o loop for tradicional?',
      options: [
        'Ele é mais rápido para o computador.',
        'Ele é mais legível e evita erros comuns como loops infinitos ou erros de índice.',
        'Ele permite voltar para trás na lista.',
        'Ele apaga os itens depois de ler.'
      ],
      correctAnswer: 1,
      explanation: 'O forEach cuida de toda a lógica de contagem para você, deixando o código mais limpo e seguro.'
    }
  ]
};
