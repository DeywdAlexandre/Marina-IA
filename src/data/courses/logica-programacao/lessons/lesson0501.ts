import { Lesson } from '../../../../types/academy';

export const lesson0501: Lesson = {
  id: 'lp-05-01',
  title: 'O que são Funções? (Criando suas Máquinas)',
  type: 'mixed',
  estimatedMinutes: 12,
  tips: [
    'Uma função é um bloco de código que você "guarda" para usar depois.',
    'Você define a função uma vez e pode chamá-la quantas vezes quiser.',
    'Isso evita que você tenha que repetir o mesmo código em vários lugares.'
  ],
  content: {
    markdown: `
# 🧩 O que são Funções?

Imagine que você trabalha em uma cafeteria. Toda vez que alguém pede um café, você tem que:
1. Pegar a xícara.
2. Moer os grãos.
3. Passar a água quente.

Em vez de explicar isso para cada novo funcionário, você cria um manual chamado **"Fazer Café"**. Toda vez que alguém grita "Fazer Café!", o funcionário já sabe exatamente o que fazer.

Na programação, isso é uma **Função**.

---

## 🛠️ Como criar uma Função (Declaração)

\`\`\`javascript
function saudar() {
  console.log("Olá! Bem-vindo à Marina Academy! 🚀");
}
\`\`\`

Apenas criar a função não faz nada. Você precisa **chamá-la** (executá-la):

\`\`\`javascript
saudar(); // Agora o texto aparece no console!
\`\`\`

---

## 🚀 Prática no Editor
Crie uma função chamada \`marinaIA\` que imprima uma mensagem de boas-vindas. Depois, chame essa função três vezes seguidas e veja o que acontece!
`,
    codeExamples: [
      {
        title: 'Exemplo de Reutilização',
        language: 'javascript',
        code: `function avisarInvasao() {\n  console.log("⚠️ ALERTA: Intruso detectado!");\n}\n\navisarInvasao();\navisarInvasao();`,
        output: '⚠️ ALERTA: Intruso detectado!\n⚠️ ALERTA: Intruso detectado!',
        explanation: 'Funções permitem que você execute as mesmas instruções várias vezes com apenas um comando.'
      }
    ]
  },
  exercises: [
    {
      id: 'lp-05-01-q1',
      type: 'multiple_choice',
      question: 'Para que serve uma função na programação?',
      options: [
        'Para guardar valores como se fossem variáveis.',
        'Para agrupar um bloco de código e reutilizá-lo em vários lugares.',
        'Para fazer o computador desligar.',
        'Para desenhar imagens na tela.'
      ],
      correctAnswer: 1,
      explanation: 'Exatamente! Funções são a base da organização e reutilização de código.'
    }
  ]
};
