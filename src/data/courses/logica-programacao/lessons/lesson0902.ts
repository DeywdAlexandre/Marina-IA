import { Lesson } from '../../../../types/academy';

export const lesson0902: Lesson = {
  id: 'lp-09-02',
  title: 'Codando o Sistema (Mão na Massa)',
  type: 'mixed',
  estimatedMinutes: 20,
  tips: [
    'Copie o código base e tente entender cada linha.',
    'Mude as notas e veja o relatório mudar dinamicamente.',
    'Se o console der erro, verifique se fechou todas as chaves { }.'
  ],
  content: {
    markdown: `
# 🛠️ Construindo o Sistema Escolar

Vamos usar tudo o que aprendemos. O objetivo é transformar uma lista "suja" de dados em um relatório limpo e profissional.

---

## 🚀 Código do Projeto Final
Copie o código abaixo e cole no seu **Editor**:

\`\`\`javascript
// 1. Nossos Dados (Array de Objetos)
let alunos = [
  { nome: "Marina", nota1: 10, nota2: 8, presenca: 90 },
  { nome: "João", nota1: 5, nota2: 4, presenca: 80 },
  { nome: "Ana", nota1: 8, nota2: 7, presenca: 60 },
  { nome: "Beto", nota1: 6, nota2: 7, presenca: 85 }
];

// 2. Nossa Máquina (Função)
const obterMedia = (aluno) => (aluno.nota1 + aluno.nota2) / 2;

// 3. Processamento (Map e Filter)
console.log("=== RELATÓRIO FINAL MARINA ACADEMY ===");

alunos.forEach(aluno => {
  let media = obterMedia(aluno);
  let status = "";

  if (aluno.presenca < 75) {
    status = "REPROVADO POR FALTA ❌";
  } else if (media >= 7) {
    status = "APROVADO! ✅";
  } else if (media >= 5) {
    status = "RECUPERAÇÃO 😐";
  } else {
    status = "REPROVADO POR NOTA ❌";
  }

  console.log("Aluno: " + aluno.nome + " | Média: " + media + " | Status: " + status);
});
\`\`\`

---

## 🔍 O que aconteceu aqui?
1. Usamos **Objetos** para estruturar cada aluno.
2. Usamos uma **Arrow Function** para calcular a média.
3. Usamos o **forEach** para olhar cada aluno um por um.
4. Usamos **If/Else** complexos para decidir o destino de cada um.

---

## 🚀 Desafio
No Editor, adicione **você mesmo** na lista de alunos com notas altíssimas e veja seu nome brilhar no relatório!
`,
    codeExamples: [
      {
        title: 'Execução Completa',
        language: 'javascript',
        code: `// Teste o código completo no Editor acima!`,
        output: '=== RELATÓRIO FINAL ===\nAluno: Marina | Média: 9 | Status: APROVADO! ✅\n...',
        explanation: 'Este é um exemplo clássico de processamento de dados que você encontrará em sistemas de RH, Escolas e Bancos.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-09-02-q1',
      type: 'multiple_choice',
      question: 'Qual parte do código acima decide se o aluno foi reprovado por falta?',
      options: [
        'A função obterMedia.',
        'O loop forEach.',
        'A condição if (aluno.presenca < 75).',
        'O console.log final.'
      ],
      correctAnswer: 2,
      explanation: 'Exatamente! A lógica de decisão fica dentro do bloco IF que verifica a porcentagem de presença.'
    }
  ]
};
