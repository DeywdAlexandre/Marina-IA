import { Lesson } from '../../../../types/academy';

export const lesson0305: Lesson = {
  id: 'js-adv-03-05',
  title: 'Error Handling Profissional e Custom Errors',
  type: 'mixed',
  estimatedMinutes: 15,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>🧪 Teste de Erro Customizado</h3>
      <div id="error-box" style="padding: 15px; border-radius: 8px; border: 1px solid #ccc; background: #fff;">
        Status: Online
      </div>
      <button id="btn-error" style="margin-top: 15px; padding: 10px; background: #ff4d4f; color: white; border: none; cursor: pointer; border-radius: 4px;">Gerar Erro de Estoque</button>
    </div>
  `,
  tips: [
    'Herde da classe global Error para criar seus próprios tipos de erro.',
    'Isso permite que você use "instanceof" no catch para tratar erros diferentes de formas diferentes.',
    'Sempre adicione informações úteis à mensagem de erro.'
  ],
  content: {
    markdown: `
# 🛡️ Erros Personalizados: Comunicando Falhas

No nível avançado, não usamos apenas \`alert("Erro")\`. Criamos objetos de erro específicos para o nosso negócio.

---

## 🛠️ Por que criar erros customizados?
Se o seu código dá um erro, você precisa saber se foi um "Erro de Conexão" ou um "Erro de Saldo Insuficiente".

\`\`\`javascript
class EstoqueInsuficienteError extends Error {
  constructor(item) {
    super(\`O item \${item} está esgotado!\`);
    this.name = "EstoqueInsuficienteError";
  }
}
\`\`\`

---

## 🏗️ Como tratar?
\`\`\`javascript
try {
  vender(prod);
} catch (err) {
  if (err instanceof EstoqueInsuficienteError) {
    // faz algo específico
  }
}
\`\`\`

---

## 🚀 Desafio no Editor
Crie uma classe de erro chamada \`PagamentoNegadoError\`. No seu script, simule uma função de pagamento que joga esse erro (\`throw\`) se o valor for maior que 1000. Capture o erro e mostre uma mensagem amigável na \`#error-box\`.
`,
    codeExamples: [
      {
        title: 'Diagnóstico Preciso',
        language: 'javascript',
        code: `class ValidationError extends Error {\n  constructor(msg) {\n    super(msg);\n    this.name = "ValidationError";\n  }\n}\n\nfunction validar(val) {\n  if (val < 0) throw new ValidationError("Valor não pode ser negativo!");\n}\n\ndocument.querySelector("#btn-error").addEventListener("click", () => {\n  try {\n    validar(-10);\n  } catch (err) {\n    const box = document.querySelector("#error-box");\n    box.style.background = "#fff2f0";\n    box.style.borderColor = "#ffccc7";\n    box.innerText = \`[\${err.name}]: \${err.message}\`;\n  }\n});`,
        output: '(Erro customizado interceptado)',
        explanation: 'Erros customizados ajudam o desenvolvedor a identificar exatamente o que falhou na lógica de negócio.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-03-05-q1',
      type: 'multiple_choice',
      question: 'Para que serve o comando "super(msg)" dentro do constructor de um erro customizado?',
      options: [
        'Para dar superpoderes ao código.',
        'Para chamar o constructor da classe pai (Error) e registrar a mensagem de erro corretamente.',
        'Para fechar a classe.',
        'Para acelerar o processamento.'
      ],
      correctAnswer: 1,
      explanation: 'O super garante que seu erro personalizado se comporte exatamente como um erro nativo do JavaScript.'
    }
  ]
};
