import { Lesson } from '../../../../types/academy';
import { lesson0501 } from './lesson0501';

export const lesson0504: Lesson = {
  id: 'js-int-05-04',
  title: 'Projeto 4/5: Memória Eterna (LocalStorage)',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: lesson0501.previewHtml,
  tips: [
    'Carregue a array do LocalStorage logo na primeira linha do script.',
    'Sempre chame o salvamento dentro da função que adiciona transações.',
    'Use JSON.stringify e JSON.parse obrigatoriamente.'
  ],
  content: {
    markdown: `
# 💾 Salvando seu Progresso

Não queremos que o usuário perca suas finanças ao fechar o app. Vamos integrar o que aprendemos no Módulo 4.

---

## 🛠️ Onde salvar?
Toda vez que a lista de transações for alterada (adição ou remoção), chamamos o salvamento.

\`\`\`javascript
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}
\`\`\`

---

## 🏗️ Como carregar?
Ao iniciar o script, tentamos ler do LocalStorage. Se não houver nada, começamos com uma array vazia.

\`\`\`javascript
const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];
\`\`\`

---

## 🚀 Desafio no Editor
Implemente a persistência no seu projeto. Adicione transações, recarregue a página (ou clique em Executar) e veja se elas continuam lá e se o saldo permanece atualizado.
`,
    codeExamples: [
      {
        title: 'Init Persistente',
        language: 'javascript',
        code: `// Código de Inicialização\nconst localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));\nlet transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];\n\nfunction init() {\n  // Aqui você chamaria a função que renderiza a lista e calcula os totais\n  console.log("Sistema carregado com " + transactions.length + " transações.");\n}\n\ninit();`,
        output: '(Mensagem no console mostra dados recuperados)',
        explanation: 'A função init() é o ponto de entrada que garante que o estado anterior seja restaurado.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-05-04-q1',
      type: 'multiple_choice',
      question: 'Em que momento devemos salvar os dados no LocalStorage em um app de finanças?',
      options: [
        'Apenas quando o usuário clicar em "Sair".',
        'Toda vez que uma alteração ocorrer (adição ou remoção), garantindo que o dado esteja sempre atual.',
        'A cada 10 minutos.',
        'Não é necessário salvar, o navegador faz sozinho.'
      ],
      correctAnswer: 1,
      explanation: 'Salvar a cada alteração evita perda de dados se a bateria acabar ou a aba fechar subitamente.'
    }
  ]
};
