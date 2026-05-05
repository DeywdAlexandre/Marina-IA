import { Lesson } from '../../../../types/academy';

const crmBaseHtml = `
<div id="crm-app" style="height: 100%; display: flex; background: #f4f7f6; font-family: 'Inter', sans-serif;">
  <!-- Sidebar -->
  <aside style="width: 200px; background: #2c3e50; color: white; padding: 20px; display: flex; flex-direction: column;">
    <h2 style="font-size: 16px; margin-bottom: 30px;">Marina CRM</h2>
    <nav style="flex: 1;">
      <div style="padding: 10px 0; border-bottom: 1px solid #3e4f5f; cursor: pointer;">👥 Clientes</div>
      <div style="padding: 10px 0; border-bottom: 1px solid #3e4f5f; cursor: pointer; opacity: 0.5;">📊 Relatórios</div>
      <div style="padding: 10px 0; border-bottom: 1px solid #3e4f5f; cursor: pointer; opacity: 0.5;">⚙️ Configurações</div>
    </nav>
    <div id="crm-stats" style="font-size: 10px; color: #95a5a6;">Total: 0 Clientes</div>
  </aside>

  <!-- Main Content -->
  <main style="flex: 1; display: flex; flex-direction: column; overflow: hidden;">
    <header style="background: white; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center;">
      <input type="text" id="crm-search" placeholder="🔍 Buscar cliente por nome..." style="padding: 10px 15px; width: 300px; border: 1px solid #ddd; border-radius: 20px; outline: none;">
      <button id="btn-add-client" style="padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">+ Novo Cliente</button>
    </header>

    <div style="padding: 20px; flex: 1; overflow-y: auto;">
      <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
        <thead style="background: #ecf0f1; text-align: left;">
          <tr>
            <th style="padding: 15px;">Nome</th>
            <th style="padding: 15px;">Status</th>
            <th style="padding: 15px;">Faturamento</th>
            <th style="padding: 15px;">Ações</th>
          </tr>
        </thead>
        <tbody id="client-table-body">
          <!-- Injetado via JS -->
        </tbody>
      </table>
    </div>
  </main>
</div>
`;

export const lesson0601: Lesson = {
  id: 'js-adv-06-01',
  title: 'Projeto CRM 1/5: Arquitetura de Estado Central',
  type: 'mixed',
  estimatedMinutes: 25,
  previewHtml: crmBaseHtml,
  tips: [
    'Em sistemas de dados, use um Singleton para gerenciar o estado global (o "Data Vault").',
    'Separe a lógica de dados da lógica de visualização (DOM).',
    'Use o Observer Pattern para avisar a tabela toda vez que a lista de clientes mudar.'
  ],
  content: {
    markdown: `
# 🏢 Projeto Marina CRM: Gestão de Clientes

O nosso segundo projeto foca em **Manipulação de Dados** e **Arquitetura**. Vamos criar um sistema para gerenciar clientes e seus faturamentos.

---

## 🛠️ O "Data Vault" (Cofre de Dados)
Em vez de espalhar arrays por todo o código, vamos criar uma classe \`CRMStore\` (Singleton) que será a única fonte de verdade.

---

## 🏗️ O Plano
1. Criar a classe \`Cliente\`.
2. Criar a classe \`CRMStore\` para gerenciar a lista.
3. Renderizar a tabela inicial.

---

## 🚀 Desafio no Editor
Crie as classes e instancie 3 clientes fictícios. Popule a tabela \`#client-table-body\` usando um método de renderização eficiente. Não esqueça de atualizar o contador de clientes na sidebar!
`,
    codeExamples: [
      {
        title: 'Centralização de Dados',
        language: 'javascript',
        code: `class Cliente {\n  constructor(id, nome, status, total) {\n    this.id = id; this.nome = nome; this.status = status; this.total = total;\n  }\n}\n\nclass CRMStore {\n  constructor() {\n    if (CRMStore.instance) return CRMStore.instance;\n    this.clientes = [\n      new Cliente(1, "Empresa Alpha", "Ativo", 5000),\n      new Cliente(2, "Tech Solutions", "Inativo", 0),\n      new Cliente(3, "Global Corp", "Pendente", 1200)\n    ];\n    CRMStore.instance = this;\n  }\n\n  add(cliente) { this.clientes.push(cliente); }\n}\n\nconst store = new CRMStore();\n\nfunction renderTable() {\n  const body = document.querySelector("#client-table-body");\n  body.innerHTML = store.clientes.map(c => \`\n    <tr style="border-bottom: 1px solid #eee;">\n      <td style="padding: 15px;">\${c.nome}</td>\n      <td style="padding: 15px;"><span style="background: #e1f5fe; padding: 4px 8px; border-radius: 4px; font-size: 11px;">\${c.status}</span></td>\n      <td style="padding: 15px;">R$ \${c.total.toFixed(2)}</td>\n      <td style="padding: 15px;"><button style="color: #3498db; border: none; background: none; cursor: pointer;">Editar</button></td>\n    </tr>\n  \`).join("");\n  \n  document.querySelector("#crm-stats").innerText = \`Total: \${store.clientes.length} Clientes\`;\n}\n\nrenderTable();`,
        output: '(Tabela de clientes populada no Preview)',
        explanation: 'O Singleton CRMStore garante que qualquer parte do app acesse os mesmos dados de clientes.'
      }
    ]
  }
};
