import { Lesson } from '../../../../types/academy';

export const lesson0304: Lesson = {
  id: 'js-adv-03-04',
  title: 'Facade Pattern: Simplificando o Complexo',
  type: 'mixed',
  estimatedMinutes: 15,
  previewHtml: `
    <div style="padding: 20px; border: 1px solid #eee;">
      <h3>🎮 Fachada do Sistema</h3>
      <p id="system-status" style="font-size: 13px; color: #666;">Sistema em Standby</p>
      <button id="btn-start" style="padding: 10px; background: #27c93f; color: white; border: none; cursor: pointer;">Botão Mágico (Ligar Tudo)</button>
    </div>
  `,
  tips: [
    'O Facade (Fachada) fornece uma interface simples para um conjunto complexo de classes.',
    'Imagine o botão de ligar o carro: ele esconde a ignição, a injeção e o motor de arranque.',
    'Use o Facade para expor apenas o necessário para o resto do seu aplicativo.'
  ],
  content: {
    markdown: `
# 🏰 Facade: A Fachada Amigável

Às vezes, para fazer uma simples venda, precisamos chamar o \`Estoque\`, a \`Logística\`, o \`Faturamento\` e o \`Notificador\`. O padrão **Facade** cria um "único ponto de entrada" para isso.

---

## 🛠️ Por que usar?
Se você mudar como o estoque funciona, só precisa ajustar dentro do Facade, e o resto do app nem percebe.

---

## 🏗️ Exemplo
\`\`\`javascript
class VendaFacade {
  realizarVenda(item) {
    Estoque.remover(item);
    Financeiro.cobrar(item.preco);
    Email.avisarCliente();
  }
}
\`\`\`

---

## 🚀 Desafio no Editor
Crie 3 classes simuladas: \`Som\`, \`Luz\` e \`Motor\`. Crie uma classe \`ControleRemoto\` (Facade) que tenha o método \`ativarModoFesta()\`. Esse método deve ligar os 3 componentes de uma vez só.
`,
    codeExamples: [
      {
        title: 'Controle Simplificado',
        language: 'javascript',
        code: `class SistemaAudio { on() { return "Som ligado! 🔊"; } }\nclass SistemaLuz { on() { return "Luzes ON! 💡"; } }\n\nclass FachadaCasa {\n  constructor() {\n    this.audio = new SistemaAudio();\n    this.luz = new SistemaLuz();\n  }\n\n  prepararFesta() {\n    return this.audio.on() + " " + this.luz.on();\n  }\n}\n\nconst casa = new FachadaCasa();\n\ndocument.querySelector("#btn-start").addEventListener("click", () => {\n  document.querySelector("#system-status").innerText = casa.prepararFesta();\n});`,
        output: '(Tudo liga com um clique)',
        explanation: 'O Facade protege seu código principal da complexidade desnecessária dos subsistemas.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-03-04-q1',
      type: 'multiple_choice',
      question: 'Qual o objetivo principal do padrão Facade?',
      options: [
        'Aumentar a segurança do servidor.',
        'Simplificar a interface de um sistema complexo, ocultando detalhes de implementação.',
        'Tornar o código mais difícil de ler.',
        'Substituir o uso de Classes.'
      ],
      correctAnswer: 1,
      explanation: 'Ele serve como uma "camada de facilidade" sobre um código denso.'
    }
  ]
};
