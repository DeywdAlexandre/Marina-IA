import { Lesson } from '../../../../types/academy';
import { lesson0601 } from './lesson0601';

export const lesson0605: Lesson = {
  id: 'js-adv-06-05',
  title: 'Projeto CRM 5/5: Finalização e Maestria',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: lesson0601.previewHtml,
  tips: [
    'O CRM é uma aplicação completa: ele lê, escreve, filtra e exporta.',
    'Mantenha seu código modular para que novos recursos (como deletar clientes) sejam fáceis de adicionar.',
    'Você agora é um desenvolvedor capaz de construir sistemas reais de gestão!'
  ],
  content: {
    markdown: `
# 🏁 Finalizando o Marina CRM

Parabéns! Você acaba de construir a sua aplicação mais complexa até agora. O **Marina Business CRM** integra arquitetura Singleton, filtros performáticos, cálculos de dashboard e exportação de arquivos.

---

## 🛠️ O que aprendemos?
- **Separação de Preocupações:** O dado está na \`Store\`, a lógica no script e a visualização na \`Table\`.
- **Experiência do Usuário (UX):** Buscas rápidas sem travar a tela.
- **Utilidade Real:** Ferramentas que empresas usam todos os dias.

---

## 🚀 Desafio Final
Adicione a funcionalidade de "Novo Cliente". Ao clicar no botão \`#btn-add-client\`, abra um \`prompt\` pedindo o nome e o faturamento, adicione-o na \`CRMStore\` e force a tabela a atualizar sozinha.

Você provou ser um mestre do JavaScript Vanilla. O próximo passo é o mundo dos Frameworks, mas agora você entende como eles funcionam por dentro!
`,
    codeExamples: [
      {
        title: 'Entrada de Dados Dinâmica',
        language: 'javascript',
        code: `document.querySelector("#btn-add-client").addEventListener("click", () => {\n  const nome = prompt("Nome da Empresa:");\n  const valor = Number(prompt("Faturamento Inicial:"));\n\n  if (nome && !isNaN(valor)) {\n    const novo = new Cliente(Date.now(), nome, "Ativo", valor);\n    store.add(novo);\n    renderTable();\n    alert("Cliente cadastrado com sucesso! ✅");\n  }\n});`,
        output: '(Novos clientes aparecem na tabela instantaneamente)',
        explanation: 'Interatividade total: capturar, processar, armazenar e exibir. Este é o ciclo de vida de qualquer aplicação web.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-06-05-q1',
      type: 'multiple_choice',
      question: 'Qual o maior benefício de ter uma "Store" centralizada (Singleton) em um CRM?',
      options: [
        'Deixa o código mais colorido.',
        'Garante que todos os componentes (tabela, dashboard, busca) trabalhem sempre com os mesmos dados atualizados.',
        'Reduz o número de linhas de CSS.',
        'Não tem benefício.'
      ],
      correctAnswer: 1,
      explanation: 'A "Única Fonte de Verdade" evita que uma parte do app mostre uma informação diferente da outra.'
    }
  ]
};
