import { Lesson } from '../../../../types/academy';
import { lesson0601 } from './lesson0601';

export const lesson0604: Lesson = {
  id: 'js-adv-06-04',
  title: 'Projeto CRM 4/5: Exportação de Dados (Backup)',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: lesson0601.previewHtml + `
    <div style="padding: 10px 20px; background: #eee; border-top: 1px solid #ccc; font-size: 11px; display: flex; justify-content: space-between;">
      <span>Backup do Sistema</span>
      <button id="btn-export" style="background: #27c93f; color: white; border: none; padding: 2px 8px; border-radius: 3px; cursor: pointer;">Baixar JSON</button>
    </div>
  `,
  tips: [
    'Use JSON.stringify(dados, null, 2) para criar um texto formatado e legível.',
    'Para "baixar" um arquivo via JS, criamos um link temporário e simulamos um clique.',
    'Isso permite que o usuário leve seus dados para outras ferramentas.'
  ],
  content: {
    markdown: `
# 💾 Exportando os Dados (Backup)

Dados são o ativo mais valioso de uma empresa. Vamos dar ao usuário a capacidade de exportar toda a sua base de clientes em um arquivo JSON.

---

## 🛠️ O Fluxo da Exportação
1. Pegar a array de clientes da \`CRMStore\`.
2. Converter para String JSON.
3. Criar um "Blob" (objeto de dados binários).
4. Forçar o download no navegador.

---

## 🏗️ Exemplo de Código
\`\`\`javascript
const data = JSON.stringify(store.clientes);\nconst blob = new Blob([data], { type: 'application/json' });\nconst url = URL.createObjectURL(blob);
\`\`\`

---

## 🚀 Desafio no Editor
Implemente a função de exportação no botão \`#btn-export\`. Quando clicado, ele deve gerar o JSON dos clientes atuais. Tente usar o console para mostrar o conteúdo do arquivo gerado antes de "baixar".
`,
    codeExamples: [
      {
        title: 'Gerador de Backup',
        language: 'javascript',
        code: `document.querySelector("#btn-export").addEventListener("click", () => {\n  const data = JSON.stringify(store.clientes, null, 2);\n  console.log("💾 Backup Gerado:\\n" + data);\n  \n  // Técnica do Link Temporário\n  const blob = new Blob([data], { type: 'application/json' });\n  const a = document.createElement("a");\n  a.href = URL.createObjectURL(blob);\n  a.download = "marina_crm_backup.json";\n  a.click();\n  \n  alert("Backup iniciado! Verifique seus downloads.");\n});`,
        output: '(O navegador inicia o download do arquivo JSON)',
        explanation: 'Dar ao usuário o controle sobre seus dados é uma das melhores práticas de ética e transparência em software.'
      }
    ]
  }
};
