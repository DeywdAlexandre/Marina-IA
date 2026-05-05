import { Lesson } from '../../../../types/academy';
import { lesson0501 } from './lesson0501';

export const lesson0502: Lesson = {
  id: 'js-int-05-02',
  title: 'Projeto 2/5: Capturando Transações',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: lesson0501.previewHtml, // Reutiliza a UI da etapa 1
  tips: [
    'Use e.preventDefault() para não recarregar a página no submit.',
    'Lembre-se que valores de input são sempre strings. Use Number() ou + para converter.',
    'Cada transação precisa de um ID único para podermos remover depois.'
  ],
  content: {
    markdown: `
# 📝 Capturando os Dados do Usuário

Agora vamos fazer o formulário funcionar. Toda vez que o usuário clicar em "Adicionar", precisamos criar um objeto com o nome e o valor da transação.

---

## 🛠️ A Estrutura da Transação
Queremos algo assim:
\`\`\`javascript
{
  id: 12345,
  text: "Salário",
  amount: 5000
}
\`\`\`

---

## 🏗️ O Fluxo de Hoje
1. Escutar o evento \`submit\` do formulário (\`#form\`).
2. Impedir o recarregamento com \`preventDefault()\`.
3. Criar o objeto e adicioná-lo em uma lista (array) global.

---

## 🚀 Desafio no Editor
Crie uma array chamada \`transactions = []\`. Adicione um ouvinte de evento no formulário que, ao ser enviado, crie esse objeto e o coloque na array usando \`.push()\`. Imprima a array no console para confirmar!
`,
    codeExamples: [
      {
        title: 'Escuta de Formulário',
        language: 'javascript',
        code: `let transactions = [];\nconst form = document.querySelector("#form");\nconst textInput = document.querySelector("#text");\nconst amountInput = document.querySelector("#amount");\n\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  \n  const transaction = {\n    id: Math.floor(Math.random() * 100000),\n    text: textInput.value,\n    amount: Number(amountInput.value)\n  };\n\n  transactions.push(transaction);\n  console.log("Transação adicionada:", transaction);\n  console.log("Total de itens:", transactions.length);\n  \n  textInput.value = "";\n  amountInput.value = "";\n});`,
        output: '(Veja os objetos surgindo no console ao enviar)',
        explanation: 'O objeto ID gerado aleatoriamente e a conversão do valor para Number são passos cruciais para a próxima etapa.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-05-02-q1',
      type: 'multiple_choice',
      question: 'Por que usamos Number(amountInput.value) em vez de apenas pegar o valor diretamente?',
      options: [
        'Para o código ficar mais bonito.',
        'Porque inputs sempre retornam texto (strings), e precisamos de números para fazer cálculos matemáticos depois.',
        'Para economizar memória.',
        'O JavaScript faz a conversão sozinho sempre.'
      ],
      correctAnswer: 1,
      explanation: 'Tentar somar "100" + "200" resultaria em "100200" em vez de 300 se não convertermos.'
    }
  ]
};
