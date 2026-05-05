import { Lesson } from '../../../../types/academy';

export const lesson0303: Lesson = {
  id: 'lp-03-03',
  title: 'Operadores Lógicos (O Tempero da Decisão)',
  type: 'mixed',
  estimatedMinutes: 12,
  tips: [
    'O operador E (&&) exige que TODAS as condições sejam verdadeiras.',
    'O operador OU (||) aceita se pelo menos UMA for verdadeira.',
    'O operador NÃO (!) inverte o resultado.'
  ],
  content: {
    markdown: `
# 🧠 O Tempero da Lógica: && e ||

Às vezes, uma condição só não basta. 
Exemplo: Para entrar em um brinquedo no parque, você precisa ter **mais de 1,50m** E **mais de 12 anos**.

---

## 🤝 O Operador E (&&) - Conjunção
Ele une duas condições. O resultado só é \`true\` se os dois lados forem verdadeiros.

\`\`\`javascript
let altura = 1.60;
let idade = 13;

if (altura >= 1.50 && idade >= 12) {
  console.log("Pode entrar no brinquedo! 🎢");
}
\`\`\`

---

## 🛤️ O Operador OU (||) - Disjunção
Usamos quando basta que uma das coisas seja verdade.
Exemplo: "Você ganha desconto se for **estudante** OU **idoso**".

\`\`\`javascript
let eEstudante = false;
let eIdoso = true;

if (eEstudante || eIdoso) {
  console.log("Você tem direito a meia-entrada! 🎟️");
}
\`\`\`

---

## 🚀 Desafio Combinado
Abra o Editor e tente criar um sistema que verifique se um aluno passou de ano. 
Ele precisa ter **nota maior que 7** E **presença maior que 75%**. Teste mudar os valores para ver o resultado mudar!
`,
    codeExamples: [
      {
        title: 'Lógica Complexa',
        language: 'javascript',
        code: `let usuario = "admin";\nlet senha = "123";\n\nif (usuario === "admin" && senha === "123") {\n  console.log("Acesso Liberado! 🔓");\n} else {\n  console.log("Credenciais Inválidas! ❌");\n}`,
        output: 'Acesso Liberado! 🔓',
        explanation: 'O && é perfeito para sistemas de login, onde nome e senha devem estar corretos.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-03-03-q1',
      type: 'multiple_choice',
      question: 'Qual o resultado de: (true || false)?',
      options: [
        'true',
        'false',
        'Erro',
        'undefined'
      ],
      correctAnswer: 0,
      explanation: 'No operador OU (||), se pelo menos um dos lados for verdadeiro, o resultado final é verdadeiro.'
    }
  ]
};
