import { Lesson } from '../../../../types/academy';

export const lesson0501: Lesson = {
  id: 'js-int-05-01',
  title: 'Projeto 1/5: O Esqueleto do Dashboard',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: `
    <style>
      :root { --primary: #3178C6; --success: #27c93f; --danger: #ff5f56; --bg: #f4f7f6; }
      body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: var(--bg); margin: 0; padding: 20px; color: #333; }
      .container { max-width: 600px; margin: 0 auto; }
      .header { text-align: center; margin-bottom: 30px; }
      .balance-card { background: white; padding: 30px; border-radius: 15px; box-shadow: 0 10px 20px rgba(0,0,0,0.05); text-align: center; margin-bottom: 20px; }
      .balance-card h2 { margin: 0; font-size: 14px; text-transform: uppercase; color: #888; letter-spacing: 1px; }
      .balance-card h1 { margin: 10px 0; font-size: 36px; color: var(--primary); }
      .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 30px; }
      .stat-card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); text-align: center; }
      .stat-card p { margin: 0; font-size: 12px; color: #aaa; }
      .stat-card h3 { margin: 5px 0 0; font-size: 20px; }
      .income h3 { color: var(--success); }
      .expense h3 { color: var(--danger); }
      .form-container { background: white; padding: 20px; border-radius: 12px; margin-bottom: 30px; }
      .form-group { margin-bottom: 15px; }
      input { width: 100%; padding: 12px; border: 1px solid #eee; border-radius: 8px; box-sizing: border-box; outline: none; transition: border-color 0.3s; }
      input:focus { border-color: var(--primary); }
      button { width: 100%; padding: 12px; background: var(--primary); color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: transform 0.2s, background 0.3s; }
      button:hover { background: #2563a3; transform: translateY(-2px); }
      .history h4 { margin-bottom: 15px; color: #555; }
      .transaction-list { list-style: none; padding: 0; margin: 0; }
      .transaction-item { background: white; padding: 15px; border-radius: 8px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #ccc; animation: slideIn 0.3s ease-out; }
      @keyframes slideIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
    </style>
    <div class="container">
      <div class="header">
        <h1 style="color: var(--primary); margin: 0;">Marina Finance</h1>
        <p style="color: #888; font-size: 14px;">Seu controle financeiro inteligente</p>
      </div>

      <div class="balance-card">
        <h2>Saldo Atual</h2>
        <h1 id="balance">R$ 0,00</h1>
      </div>

      <div class="stats">
        <div class="stat-card income">
          <p>Receitas</p>
          <h3 id="money-plus">+ R$ 0,00</h3>
        </div>
        <div class="stat-card expense">
          <p>Despesas</p>
          <h3 id="money-minus">- R$ 0,00</h3>
        </div>
      </div>

      <div class="form-container">
        <h4>Nova Transação</h4>
        <form id="form">
          <div class="form-group">
            <input type="text" id="text" placeholder="Ex: Salário, Aluguel...">
          </div>
          <div class="form-group">
            <input type="number" id="amount" placeholder="Valor (negativo para despesa)">
          </div>
          <button type="submit">Adicionar Transação</button>
        </form>
      </div>

      <div class="history">
        <h4>Histórico</h4>
        <ul id="transactions" class="transaction-list">
          <!-- Transações aparecerão aqui -->
        </ul>
      </div>
    </div>
  `,
  tips: [
    'Observe os IDs no HTML: #balance, #money-plus, #money-minus, #form, #transactions.',
    'Use o console para verificar se você consegue selecionar esses elementos.',
    'O estilo CSS já está pronto, foque na lógica agora.'
  ],
  content: {
    markdown: `
# 🏦 Começa o Grande Projeto: Marina Finance!

Chegou a hora de consolidar tudo. Nas próximas 5 lições, você construirá um gerenciador financeiro completo.

---

## 🛠️ O que temos na mesa?
Já preparei para você um **HTML e CSS** de alto nível. Ele conta com:
- Um card de **Saldo Principal**.
- Cards de resumo de **Receitas e Despesas**.
- Um **Formulário** pronto para receber dados.
- Uma área de **Histórico** esperando pelas suas listas.

---

## 🏗️ Seu Primeiro Passo
A lição de hoje é apenas de **preparação e teste**. 
Vá na aba **Visualizar** e veja como o app está estático (parado). 

---

## 🚀 Desafio no Editor
Vá na aba **script.js** e tente mudar o texto do saldo (\`#balance\`) para \`"R$ 1.000,00"\` usando o que aprendeu no Módulo 1. Se funcionar, você está pronto para dar vida ao sistema!
`,
    codeExamples: [
      {
        title: 'Teste de Conexão',
        language: 'javascript',
        code: `const balance = document.querySelector("#balance");\nbalance.innerText = "R$ 5.432,10";\nbalance.style.color = "#27c93f";\n\nconsole.log("Interface pronta para receber lógica!");`,
        output: '(Saldo muda para verde no Preview)',
        explanation: 'Antes de começar a lógica complexa, sempre testamos se estamos conseguindo "conversar" com os elementos da tela.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-05-01-q1',
      type: 'multiple_choice',
      question: 'Qual o ID do elemento que mostra o saldo total no nosso projeto?',
      options: [
        '#money-plus',
        '#balance',
        '#form',
        '#transactions'
      ],
      correctAnswer: 1,
      explanation: 'O #balance é o coração do nosso dashboard.'
    }
  ]
};
