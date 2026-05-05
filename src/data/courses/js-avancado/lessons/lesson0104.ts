import { Lesson } from '../../../../types/academy';

export const lesson0104: Lesson = {
  id: 'js-adv-01-04',
  title: 'Segurança com Optional Chaining e Nullish',
  type: 'mixed',
  estimatedMinutes: 10,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>🧾 Detalhes do Cliente</h3>
      <div id="customer-info" style="padding: 15px; background: #fffbe6; border: 1px solid #ffe58f; border-radius: 8px;">
        Aguardando carregamento...
      </div>
      <button id="btn-load" style="margin-top: 15px; padding: 8px 16px; background: #1890ff; color: white; border: none; border-radius: 4px; cursor: pointer;">Carregar Cliente Incompleto</button>
    </div>
  `,
  tips: [
    'O ?. (Optional Chaining) interrompe a leitura se o valor for null ou undefined, evitando erros.',
    'O ?? (Nullish Coalescing) fornece um valor padrão apenas se o original for null ou undefined.',
    'Diferente do ||, o ?? aceita 0 ou "" (string vazia) como valores válidos.'
  ],
  content: {
    markdown: `
# 🛡️ Blindando o Código contra Erros

Um dos erros mais comuns no JS é tentar ler uma propriedade de algo que não existe. O ES2020 trouxe duas ferramentas poderosas para resolver isso.

---

## 🛠️ Optional Chaining (\`?.\`)
Evita o erro "Cannot read property... of undefined".
\`\`\`javascript
// Se o endereco for null, ele retorna undefined em vez de quebrar o app
const rua = usuario.endereco?.rua;
\`\`\`

---

## 🏗️ Nullish Coalescing (\`??\`)
Define um valor padrão de forma inteligente.
\`\`\`javascript
const nome = usuario.apelido ?? "Usuário Anônimo";
\`\`\`

---

## 🚀 Desafio no Editor
Simule o carregamento de um cliente que não tem o campo \`telefone\`. Use o \`?.\` para tentar ler o telefone e o \`??\` para mostrar "Não informado" caso ele não exista. Exiba o resultado no \`#customer-info\`.
`,
    codeExamples: [
      {
        title: 'Código à Prova de Falhas',
        language: 'javascript',
        code: `const cliente = {\n  nome: "Marina",\n  metadata: {\n    ultimoAcesso: "2024-05-01"\n  }\n};\n\n// Se 'telefone' não existe, não trava o app\nconst tel = cliente.contato?.telefone ?? "S/ Telefone";\n\ndocument.querySelector("#customer-info").innerHTML = \`\n  <p><b>Nome:</b> \${cliente.nome}</p>\n  <p><b>Telefone:</b> \${tel}</p>\n\`;`,
        output: '(Informações exibidas com segurança)',
        explanation: 'Usar estas ferramentas torna o seu código muito mais resiliente a dados incompletos vindos de APIs.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-01-04-q1',
      type: 'multiple_choice',
      question: 'Qual a diferença entre o operador || e o ???',
      options: [
        'Nenhuma, fazem a mesma coisa.',
        'O || considera 0 e "" como falsos e aplica o padrão. O ?? só aplica o padrão para null ou undefined.',
        'O ?? é mais lento.',
        'O || só funciona com números.'
      ],
      correctAnswer: 1,
      explanation: 'O ?? é mais preciso porque respeita valores como zero e strings vazias, que são válidos em muitos sistemas.'
    }
  ]
};
