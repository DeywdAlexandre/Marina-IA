import { Lesson } from '../../../../types/academy';

export const lesson0502: Lesson = {
  id: 'lp-05-02',
  title: 'Parâmetros e Argumentos (Dando Ordens Específicas)',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    'Parâmetros são os nomes das "caixas" que a função recebe.',
    'Argumentos são os valores reais que você coloca nessas caixas ao chamar a função.',
    'Você pode passar quantos parâmetros quiser, separados por vírgula.'
  ],
  content: {
    markdown: `
# 📥 Parâmetros: As Entradas da Máquina

Uma função que faz sempre a mesma coisa é útil, mas uma função que aceita informações diferentes é **poderosa**. 

Voltando ao café: você pode ter uma função que recebe o **tipo do grão** e o **tamanho da xícara**.

---

## 🛠️ Como usar Parâmetros

\`\`\`javascript
function saudarUsuario(nome) {
  console.log("Olá, " + nome + "! Tudo bem?");
}

saudarUsuario("Deywd"); // Olá, Deywd! Tudo bem?
saudarUsuario("Marina"); // Olá, Marina! Tudo bem?
\`\`\`

Aqui, \`nome\` é o **parâmetro**. Quando chamamos a função, "Deywd" é o **argumento**.

---

## 🏗️ Múltiplos Parâmetros
Você pode somar dois números usando uma função:

\`\`\`javascript
function somar(a, b) {
  console.log("A soma é: " + (a + b));
}

somar(10, 5); // 15
somar(100, 200); // 300
\`\`\`

---

## 🚀 Desafio no Editor
Crie uma função chamada \`calculadoraArea\` que receba a \`largura\` e a \`altura\` de um retângulo e imprima a área (largura multiplicada pela altura) no console.
`,
    codeExamples: [
      {
        title: 'Perfil de Usuário',
        language: 'javascript',
        code: `function criarPerfil(nome, idade, cidade) {\n  console.log("Nome: " + nome);\n  console.log("Idade: " + idade);\n  console.log("Cidade: " + cidade);\n}\n\ncriarPerfil("Alex", 30, "São Paulo");`,
        output: 'Nome: Alex\nIdade: 30\nCidade: São Paulo',
        explanation: 'Os parâmetros permitem que a função processe diferentes dados com a mesma lógica.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-05-02-q1',
      type: 'multiple_choice',
      question: 'Onde definimos os parâmetros de uma função?',
      options: [
        'Dentro do console.log.',
        'Dentro das chaves { }.',
        'Dentro dos parênteses ( ) ao declarar a função.',
        'No final do código.'
      ],
      correctAnswer: 2,
      explanation: 'Os parâmetros ficam nos parênteses da definição da função, aguardando os valores (argumentos).'
    }
  ]
};
