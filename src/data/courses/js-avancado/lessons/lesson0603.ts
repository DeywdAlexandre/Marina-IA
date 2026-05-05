import { Lesson } from '../../../../types/academy';
import { lesson0601 } from './lesson0601';

export const lesson0603: Lesson = {
  id: 'js-adv-06-03',
  title: 'Projeto CRM 3/5: Dashboard de Performance',
  type: 'mixed',
  estimatedMinutes: 30,
  previewHtml: lesson0601.previewHtml + `
    <div id="crm-dashboard" style="display: none; padding: 20px; background: #fff; margin: 20px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      <h3 style="margin-top: 0;">📊 Visão Geral do Negócio</h3>
      <div style="display: flex; gap: 20px;">
        <div style="flex: 1; padding: 15px; background: #f8f9fa; border-left: 4px solid #3498db;">
          <small>Faturamento Total</small>
          <div id="dash-total" style="font-size: 24px; font-weight: bold;">R$ 0,00</div>
        </div>
        <div style="flex: 1; padding: 15px; background: #f8f9fa; border-left: 4px solid #2ecc71;">
          <small>Ticket Médio</small>
          <div id="dash-avg" style="font-size: 24px; font-weight: bold;">R$ 0,00</div>
        </div>
      </div>
      <button onclick="document.querySelector('#crm-dashboard').style.display='none'" style="margin-top: 15px; background: none; border: 1px solid #ccc; padding: 5px 10px; cursor: pointer;">Voltar para Tabela</button>
    </div>
  `,
  tips: [
    'Use .reduce() para somar todos os faturamentos dos clientes de uma vez.',
    'Memoize o cálculo se a lista de clientes for muito grande para evitar re-processamento desnecessário.',
    'Status Visuais: Use cores para identificar clientes inativos ou com pagamentos pendentes.'
  ],
  content: {
    markdown: `
# 📊 Dashboards: Inteligência de Negócio

Um CRM não serve apenas para guardar nomes, ele serve para dar **insights**. Vamos criar uma visão de dashboard que calcula o faturamento total e o ticket médio dos clientes.

---

## 🛠️ Cálculo de Totais
Usaremos o poder do \`.reduce()\` para transformar a array de clientes em um único número de faturamento.

---

## 🏗️ Ticket Médio
O Ticket Médio é o (Faturamento Total / Número de Clientes).

---

## 🚀 Desafio no Editor
Crie uma função \`atualizarDashboard()\`. Ela deve ler os dados da \`CRMStore\`, fazer os cálculos e preencher os elementos \`#dash-total\` e \`#dash-avg\`. Adicione um botão ou link na sidebar para alternar entre a Tabela e o Dashboard.
`,
    codeExamples: [
      {
        title: 'Cálculo de Analytics',
        language: 'javascript',
        code: `function showDashboard() {\n  const total = store.clientes.reduce((acc, c) => acc + c.total, 0);\n  const avg = store.clientes.length > 0 ? total / store.clientes.length : 0;\n\n  document.querySelector("#dash-total").innerText = "R$ " + total.toLocaleString();\n  document.querySelector("#dash-avg").innerText = "R$ " + avg.toLocaleString();\n  \n  document.querySelector("#crm-dashboard").style.display = "block";\n  // Esconde a tabela (opcional)\n}`,
        output: '(Dashboard com valores reais aparece no Preview)',
        explanation: 'Transformar dados brutos em métricas de negócio é o que agrega valor real a um software de CRM.'
      }
    ]
  }
};
