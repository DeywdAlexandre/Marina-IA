import { Lesson } from '../../../../types/academy';

export const lesson0302: Lesson = {
  id: 'js-adv-03-02',
  title: 'Singleton e Factory: Gerenciando Instâncias',
  type: 'mixed',
  estimatedMinutes: 15,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>🏭 Padrões de Criação</h3>
      <div id="factory-log" style="background: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 8px; font-family: monospace; font-size: 11px;">
        Aguardando criação...
      </div>
      <div style="margin-top: 15px; display: flex; gap: 10px;">
        <button id="btn-singleton" style="padding: 8px; background: #333; color: white; border: none; cursor: pointer;">Testar Singleton (DB)</button>
        <button id="btn-factory" style="padding: 8px; background: #F7DF1E; color: #333; border: none; cursor: pointer; font-weight: bold;">Testar Factory (Produtos)</button>
      </div>
    </div>
  `,
  tips: [
    'O Singleton garante que exista apenas UMA instância de uma classe no app todo (ex: Banco de Dados).',
    'A Factory é uma função ou classe que decide QUAL objeto criar baseado em um parâmetro.',
    'Isso esconde a complexidade do "new" e centraliza a criação.'
  ],
  content: {
    markdown: `
# 🏭 Padrões de Criação: Singleton e Factory

Nem sempre queremos dar um \`new Classe()\` em qualquer lugar. Padrões de criação nos dão controle total.

---

## 🛠️ Singleton
Útil para conexões de banco de dados ou estados globais.
\`\`\`javascript
class Database {
  constructor() {
    if (Database.instance) return Database.instance;
    Database.instance = this;
    this.connection = "Conectado!";
  }
}
\`\`\`

---

## 🏗️ Factory (A Fábrica)
Centraliza a criação de diferentes tipos de objetos.
\`\`\`javascript
function ProdutoFactory(tipo) {
  if (tipo === 'digital') return new ProdutoDigital();
  if (tipo === 'fisico') return new ProdutoFisico();
}
\`\`\`

---

## 🚀 Desafio no Editor
Implemente um Singleton chamado \`ConfiguracaoSistema\`. Não importa quantas vezes você der \`new\`, ele deve retornar sempre o mesmo objeto. Use o botão \`#btn-singleton\` para provar que a referência é a mesma.
`,
    codeExamples: [
      {
        title: 'Central de Criação',
        language: 'javascript',
        code: `// Singleton\nclass Database {\n  constructor() {\n    if (Database.instance) return Database.instance;\n    this.id = Math.random();\n    Database.instance = this;\n  }\n}\n\n// Factory\nconst Fabrica = {\n  criar(tipo) {\n    return { tipo, data: new Date() };\n  }\n};\n\ndocument.querySelector("#btn-singleton").addEventListener("click", () => {\n  const db1 = new Database();\n  const db2 = new Database();\n  document.querySelector("#factory-log").innerText = "DB1 ID: " + db1.id + "\\nDB2 ID: " + db2.id + "\\nIguais? " + (db1 === db2);\n});`,
        output: '(IDs idênticos provam o Singleton)',
        explanation: 'O Singleton evita desperdício de memória e garante que você não abra múltiplas conexões com o mesmo recurso.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-03-02-q1',
      type: 'multiple_choice',
      question: 'Em que situação o padrão Factory é mais útil?',
      options: [
        'Quando você tem apenas uma classe no sistema.',
        'Quando a criação de um objeto envolve lógica complexa ou quando você precisa decidir entre várias classes diferentes no momento da execução.',
        'Para deletar objetos da memória.',
        'Para mudar o CSS da página.'
      ],
      correctAnswer: 1,
      explanation: 'A Factory desacopla quem usa o objeto de quem o cria.'
    }
  ]
};
