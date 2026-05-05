import { Lesson } from '../../../../types/academy';
import { lesson0601 } from './lesson0601';

export const lesson0602: Lesson = {
  id: 'js-adv-06-02',
  title: 'Projeto CRM 2/5: Filtros e Buscas Complexas',
  type: 'mixed',
  estimatedMinutes: 25,
  previewHtml: lesson0601.previewHtml,
  tips: [
    'Use o método .filter() combinado com .toLowerCase() para buscas que ignoram maiúsculas.',
    'Implemente o Debounce (visto no Módulo 4) para não filtrar a cada tecla pressionada.',
    'Sempre retorne para a lista original se o campo de busca estiver vazio.'
  ],
  content: {
    markdown: `
# 🔍 Busca Inteligente de Clientes

Em um CRM real, o usuário precisa achar clientes rapidamente. Vamos implementar um sistema de busca profissional usando **Debounce** e **High-Order Functions**.

---

## 🛠️ Otimizando a Busca
Não queremos reconstruir a tabela 10 vezes por segundo enquanto o usuário digita. Vamos esperar ele fazer uma pausa.

---

## 🏗️ Lógica de Filtro
\`\`\`javascript
const filtrados = store.clientes.filter(c => 
  c.nome.toLowerCase().includes(termo.toLowerCase())
);
\`\`\`

---

## 🚀 Desafio no Editor
Aplique a função de \`debounce\` ao evento \`input\` do \`#crm-search\`. A cada busca, filtre a lista da \`CRMStore\` e chame a função de renderização apenas com os resultados encontrados.
`,
    codeExamples: [
      {
        title: 'Filtro com Debounce',
        language: 'javascript',
        code: `const debounce = (fn, delay) => {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n};\n\nconst buscarClientes = debounce((termo) => {\n  const filtrados = store.clientes.filter(c => \n    c.nome.toLowerCase().includes(termo.toLowerCase())\n  );\n  renderTable(filtrados); // Passando os filtrados para a função de render\n}, 300);\n\ndocument.querySelector("#crm-search").addEventListener("input", (e) => {\n  buscarClientes(e.target.value);\n});`,
        output: '(Busca rápida e suave no Preview)',
        explanation: 'Combinar Debounce com .filter() é a forma padrão de criar sistemas de busca performáticos no front-end.'
      }
    ]
  }
};
