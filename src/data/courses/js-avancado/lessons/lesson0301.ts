import { Lesson } from '../../../../types/academy';

export const lesson0301: Lesson = {
  id: 'js-adv-03-01',
  title: 'SOLID: Os 5 Pilares do Código Indestrutível',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>🏛️ Arquitetura SOLID</h3>
      <div id="solid-log" style="background: #e6f7ff; border: 1px solid #91d5ff; padding: 15px; border-radius: 8px; font-size: 13px;">
        Princípio da Responsabilidade Única (SRP): Cada classe deve ter apenas um motivo para mudar.
      </div>
      <div style="margin-top: 15px;">
        <button id="btn-bad" style="padding: 8px; background: #ff4d4f; color: white; border: none; cursor: pointer;">Código Bagunçado</button>
        <button id="btn-good" style="padding: 8px; background: #52c41a; color: white; border: none; cursor: pointer; margin-left: 10px;">Código SOLID</button>
      </div>
    </div>
  `,
  tips: [
    'S (SRP): Uma classe deve fazer apenas uma coisa.',
    'O (OCP): Aberto para extensão, fechado para modificação.',
    'L (LSP): Subclasses devem poder substituir suas classes pai.',
    'I (ISP): Não force uma classe a implementar o que ela não usa.',
    'D (DIP): Dependa de abstrações, não de implementações.'
  ],
  content: {
    markdown: `
# 🏛️ SOLID: Engenharia de Elite

O SOLID é um conjunto de 5 princípios que transformam um código amador em uma obra de engenharia robusta.

---

## 🛠️ O Primeiro Pilar: SRP (Single Responsibility)
Se a sua classe \`Usuario\` também envia e-mails e gera boletos, ela está errada. Se o boleto mudar, você pode quebrar o usuário.

---

## 🏗️ Como aplicar no JS?
Muitas vezes, em vez de uma classe gigante, criamos várias funções ou classes pequenas que se comunicam.

\`\`\`javascript
class Logger { log(msg) { console.log(msg); } }
class ServicoVenda {
  constructor(logger) { this.logger = logger; }
  vender() { this.logger.log("Venda feita!"); }
}
\`\`\`

---

## 🚀 Desafio no Editor
Crie uma classe \`Notificador\`. Depois crie a classe \`ProcessadorPagamento\` que RECEBE o notificador no construtor. Ao processar, use o notificador para avisar. Isso é Injeção de Dependência (D do SOLID).
`,
    codeExamples: [
      {
        title: 'Arquitetura Limpa',
        language: 'javascript',
        code: `class EmailService {\n  send(msg) {\n    document.querySelector("#solid-log").innerText = "📧 Enviando E-mail: " + msg;\n  }\n}\n\nclass Checkout {\n  constructor(notifier) {\n    this.notifier = notifier;\n  }\n  \n  finalizar(total) {\n    // Lógica de checkout...\n    this.notifier.send("Sua compra de R$ " + total + " foi concluída!");\n  }\n}\n\ndocument.querySelector("#btn-good").addEventListener("click", () => {\n  const email = new EmailService();\n  const cart = new Checkout(email);\n  cart.finalizar(250);\n});`,
        output: '(Mensagem enviada via injeção de dependência)',
        explanation: 'Ao injetar o serviço de e-mail no checkout, podemos trocar para um serviço de SMS sem mexer no código do checkout.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-03-01-q1',
      type: 'multiple_choice',
      question: 'O que o princípio "Open/Closed" (Aberto/Fechado) defende?',
      options: [
        'O código deve ser aberto para todos verem.',
        'As classes devem ser abertas para extensão (adicionar novos comportamentos) mas fechadas para modificação do código existente.',
        'O sistema deve ser fechado à noite.',
        'O código deve ser mutável a qualquer momento.'
      ],
      correctAnswer: 1,
      explanation: 'Isso evita que, ao adicionar uma nova funcionalidade, você acabe gerando bugs em algo que já estava funcionando.'
    }
  ]
};
