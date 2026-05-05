import { Lesson } from '../../../../types/academy';

export const lesson0304: Lesson = {
  id: 'lp-03-04',
  title: 'Switch Case (Escolha o Caminho)',
  type: 'mixed',
  estimatedMinutes: 10,
  tips: [
    'O "switch" é melhor que o "if" quando você tem muitas opções fixas (ex: dias da semana, meses, comandos).',
    'Não esqueça do "break" em cada caso, senão o computador continuará executando os próximos!',
    'O "default" funciona como o "else" final.'
  ],
  content: {
    markdown: `
# 🎛️ Estrutura de Escolha: Switch

Quando você tem uma única variável que pode ter vários valores exatos, o \`if/else if\` pode ficar muito longo e feio. Para isso, temos o \`switch\`.

---

## 🛠️ Como funciona

\`\`\`javascript
let diaDaSemana = 1;

switch (diaDaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  default:
    console.log("Dia inválido");
}
\`\`\`

---

## 🛑 O "break" é Vital
Se você esquecer o \`break\`, o JavaScript vai "atropelar" o próximo caso e executá-lo também, mesmo que o valor não bata! 

---

## 🧪 Prática no Editor
Crie um sistema que receba uma fruta (ex: "maçã", "banana"). Use o \`switch\` para dizer o preço de cada uma. Se a fruta não for reconhecida, use o \`default\` para dizer: "Fruta não disponível".
`,
    codeExamples: [
      {
        title: 'Menu de Opções',
        language: 'javascript',
        code: `let opcao = "S";\n\nswitch (opcao) {\n  case "S":\n    console.log("Iniciando Jogo... 🎮");\n    break;\n  case "C":\n    console.log("Abrindo Configurações... ⚙️");\n    break;\n  default:\n    console.log("Saindo... 👋");\n}`,
        output: 'Iniciando Jogo... 🎮',
        explanation: 'O switch deixa o código muito mais limpo para menus e estados fixos.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-03-04-q1',
      type: 'multiple_choice',
      question: 'Para que serve o "default" dentro de um switch?',
      options: [
        'Para definir a primeira opção.',
        'Para parar o código se houver erro.',
        'Para executar um código se nenhuma das outras opções (cases) for verdadeira.',
        'Para repetir o código.'
      ],
      correctAnswer: 2,
      explanation: 'O default é a rede de segurança: se nada bater, ele entra em ação.'
    }
  ]
};
