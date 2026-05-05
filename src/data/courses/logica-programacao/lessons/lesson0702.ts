import { Lesson } from '../../../../types/academy';

export const lesson0702: Lesson = {
  id: 'lp-07-02',
  title: 'Acessando Propriedades (A Notação de Ponto)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'Usamos o ponto (.) para acessar uma propriedade específica.',
    'Exemplo: objeto.propriedade',
    'Você também pode alterar valores usando a mesma lógica.'
  ],
  content: {
    markdown: `
# 🎯 Acessando Propriedades

Para pegar apenas uma informação de dentro do objeto, usamos a **notação de ponto**. É como se estivéssemos entrando em uma pasta.

---

## 🛠️ Exemplo Prático

\`\`\`javascript
let aluno = {
  nome: "Lucas",
  nota: 8.5
};

console.log("O aluno " + aluno.nome + " tirou " + aluno.nota);
\`\`\`

---

## ✍️ Alterando valores
Você pode atualizar uma informação do objeto a qualquer momento:

\`\`\`javascript
let jogo = {
  titulo: "Minecraft",
  preco: 100
};

// Teve promoção!
jogo.preco = 80;

console.log("Novo preço de " + jogo.titulo + ": R$" + jogo.preco);
\`\`\`

---

## 🚀 Desafio no Editor
Crie um objeto \`pet\` com \`nome\` e \`especie\`. Depois, use o \`console.log\` para imprimir uma frase como: "Meu pet se chama [nome] e ele é um [especie]".
`,
    codeExamples: [
      {
        title: 'Dados do Sistema',
        language: 'javascript',
        code: `let sistema = {\n  versao: "1.0.5",\n  online: true\n};\n\nif (sistema.online) {\n  console.log("Sistema Rodando na versão " + sistema.versao);\n}`,
        output: 'Sistema Rodando na versão 1.0.5',
        explanation: 'Acessar propriedades individuais permite tomar decisões baseadas em dados específicos do objeto.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-07-02-q1',
      type: 'multiple_choice',
      question: 'Se eu tenho let user = { login: "admin" };, como imprimo o login no console?',
      options: [
        'console.log(user[login])',
        'console.log(user.login)',
        'console.log(login.user)',
        'console.log(user->login)'
      ],
      correctAnswer: 1,
      explanation: 'A notação de ponto (user.login) é a forma mais comum e limpa de acessar propriedades.'
    }
  ]
};
