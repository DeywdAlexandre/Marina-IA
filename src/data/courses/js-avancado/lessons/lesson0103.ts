import { Lesson } from '../../../../types/academy';

export const lesson0103: Lesson = {
  id: 'js-adv-01-03',
  title: 'ES Modules: Organizando Grandes Sistemas',
  type: 'mixed',
  estimatedMinutes: 12,
  previewHtml: `
    <div style="padding: 20px; text-align: center;">
      <h2 style="color: #F7DF1E; background: #333; padding: 10px; border-radius: 8px;">Sistema Modular</h2>
      <div id="module-output" style="margin-top: 20px; font-family: monospace; border: 1px solid #ccc; padding: 15px; border-radius: 4px;">
        Aguardando importação...
      </div>
      <p style="font-size: 10px; color: #888; margin-top: 10px;">Simulando comunicação entre arquivos externos.</p>
    </div>
  `,
  tips: [
    'Use export para tornar uma função ou variável disponível para outros arquivos.',
    'Use import { coisa } from "./arquivo.js" para usar o código.',
    'Isso evita o "Código Espaguete" onde tudo fica em um arquivo gigante.'
  ],
  content: {
    markdown: `
# 🏗️ Organização em Módulos

Em sistemas complexos como o **Marina POS**, não podemos ter 5000 linhas em um arquivo só. Dividimos o código em módulos.

---

## 🛠️ Exportando
No arquivo \`config.js\`:
\`\`\`javascript
export const VERSAO = "1.0.0";
export function log(msg) { console.log(msg); }
\`\`\`

---

## 🏗️ Importando
No seu arquivo principal:
\`\`\`javascript
import { VERSAO, log } from './config.js';
log("Iniciando versão " + VERSAO);
\`\`\`

---

## 🚀 Desafio no Editor
Simule a criação de um módulo. No seu script, crie uma função que formata preços (\`formatarMoeda\`). No mundo real, você exportaria ela. No nosso simulador, use-a para exibir \`R$ 1.500,00\` na div \`#module-output\`.
`,
    codeExamples: [
      {
        title: 'Módulos na Prática',
        language: 'javascript',
        code: `// Simulação de Módulo de utilitários\nconst Utils = {\n  formatar: (val) => "R$ " + val.toFixed(2).replace(".", ","),\n  limpar: (str) => str.trim().toLowerCase()\n};\n\n// Simulando o uso em outro arquivo\nconst precoFinal = Utils.formatar(1250.50);\ndocument.querySelector("#module-output").innerText = "Resultado do Módulo: " + precoFinal;`,
        output: '(Preço formatado no Preview)',
        explanation: 'Módulos garantem que cada parte do seu sistema tenha uma responsabilidade única, facilitando testes e manutenção.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-01-03-q1',
      type: 'multiple_choice',
      question: 'Qual a principal vantagem de usar ES Modules (import/export)?',
      options: [
        'O código roda mais rápido.',
        'Permite organizar o código em arquivos menores e independentes, evitando conflitos de nomes.',
        'É a única forma de usar o LocalStorage.',
        'Não há vantagem, é apenas moda.'
      ],
      correctAnswer: 1,
      explanation: 'Organização é a palavra-chave. Sem módulos, sistemas grandes se tornam impossíveis de gerenciar.'
    }
  ]
};
