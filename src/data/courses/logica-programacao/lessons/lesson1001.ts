import { Lesson } from '../../../../types/academy';

export const lesson1001: Lesson = {
  id: 'lp-10-01',
  title: 'Clean Code: O Código que Respira',
  type: 'mixed',
  estimatedMinutes: 12,
  tips: [
    'Escrevemos código para humanos lerem, e apenas "por acaso" o computador executa.',
    'Nomes de variáveis devem ser autoexplicativos.',
    'Evite nomes como "x", "y" ou "data" para coisas importantes.'
  ],
  content: {
    markdown: `
# 🧹 Clean Code (Código Limpo)

Um programador profissional não é aquele que escreve código difícil, mas aquele que escreve código **tão simples** que qualquer um entende.

---

## 🛠️ Nomenclatura Semântica
Em vez de economizar letras, economize tempo de quem vai ler seu código depois (inclusive você mesmo no futuro).

**❌ Ruim:**
\`\`\`javascript
let d = 31;
let n = "Marina";
function f(a, b) { return a + b; }
\`\`\`

**✅ Bom:**
\`\`\`javascript
let diasParaVencimento = 31;
let nomeUsuario = "Marina";
function somarPrecos(precoProduto, taxaEntrega) { 
  return precoProduto + taxaEntrega; 
}
\`\`\`

---

## 🚀 Desafio no Editor
Pegue o código abaixo e renomeie as variáveis para que fiquem "limpas" e fáceis de entender:
\`\`\`javascript
let a = 50; 
let b = 0.1;
let c = a * b;
console.log("O desconto é: " + c);
\`\`\`
`,
    codeExamples: [
      {
        title: 'Comentários Úteis',
        language: 'javascript',
        code: `// ✅ Use comentários para explicar o PORQUÊ, não o O QUE.\n// Calculamos o imposto apenas se o valor exceder o limite legal\nif (valor > 5000) {\n  aplicarImposto(valor);\n}`,
        output: 'Dica: Se o seu código precisa de muitos comentários para ser entendido, talvez ele precise ser refatorado.',
        explanation: 'Código limpo se explica sozinho através dos nomes de suas variáveis e funções.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-10-01-q1',
      type: 'multiple_choice',
      question: 'Qual o principal objetivo do Clean Code?',
      options: [
        'Fazer o código rodar mais rápido.',
        'Tornar o código mais fácil de ser lido e mantido por humanos.',
        'Escrever o código usando o mínimo de linhas possível.',
        'Usar apenas termos em inglês.'
      ],
      correctAnswer: 1,
      explanation: 'Manutenibilidade é a chave. Código limpo reduz bugs e facilita a evolução do sistema.'
    }
  ]
};
