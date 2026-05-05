import { Lesson } from '../../../../types/academy';

export const lesson0303: Lesson = {
  id: 'js-adv-03-03',
  title: 'Observer Pattern: O Sistema de Notificações',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>🔔 Central de Eventos (Observer)</h3>
      <div style="display: flex; gap: 10px; margin-bottom: 20px;">
        <div id="widget-1" style="flex: 1; padding: 10px; border: 1px solid #ddd; text-align: center;">Widget A<br><span id="val-1" style="font-weight: bold;">0</span></div>
        <div id="widget-2" style="flex: 1; padding: 10px; border: 1px solid #ddd; text-align: center;">Widget B<br><span id="val-2" style="font-weight: bold;">0</span></div>
      </div>
      <button id="btn-notify" style="width: 100%; padding: 10px; background: #3178C6; color: white; border: none; border-radius: 4px; cursor: pointer;">Nova Venda (Notificar Todos)</button>
    </div>
  `,
  tips: [
    'O Observer permite que um objeto (Assunto) notifique vários outros (Observadores) quando algo muda.',
    'Isso evita que você tenha que chamar 50 funções diferentes toda vez que uma venda acontece.',
    'É o coração da reatividade em bibliotecas como RxJS ou o próprio sistema de eventos do DOM.'
  ],
  content: {
    markdown: `
# 🔔 Observer: Comunique-se com Elegância

No **Marina POS**, quando uma venda ocorre, precisamos atualizar o estoque, a lista de faturamento e o dashboard de metas. Em vez de chamar cada um manualmente, usamos o **Observer**.

---

## 🛠️ O Conceito
- **Assunto (Subject):** Quem detém a informação.
- **Observador (Observer):** Quem quer ser avisado.

\`\`\`javascript
class Subject {
  constructor() { this.observers = []; }
  subscribe(fn) { this.observers.push(fn); }
  notify(data) { this.observers.forEach(fn => fn(data)); }
}
\`\`\`

---

## 🏗️ Por que usar?
Ele desacopla totalmente os componentes. O sistema de vendas não precisa saber que o "Dashboard de Gráficos" existe. Ele apenas avisa: "Houve uma venda!".

---

## 🚀 Desafio no Editor
Crie a classe \`EventManager\`. Registre dois widgets nela. Quando o botão \`#btn-notify\` for clicado, o \`EventManager\` deve notificar os dois widgets para incrementarem seus valores na tela.
`,
    codeExamples: [
      {
        title: 'Broadcast de Sistema',
        language: 'javascript',
        code: `class Store {\n  constructor() {\n    this.subs = [];\n  }\n  subscribe(fn) { this.subs.push(fn); }\n  emit(v) { this.subs.forEach(fn => fn(v)); }\n}\n\nconst central = new Store();\n\n// Inscritos\ncentral.subscribe(val => document.querySelector("#val-1").innerText = val);\ncentral.subscribe(val => document.querySelector("#val-2").innerText = val);\n\nlet contador = 0;\ndocument.querySelector("#btn-notify").addEventListener("click", () => {\n  contador += 50;\n  central.emit(contador);\n});`,
        output: '(Os dois widgets atualizam juntos)',
        explanation: 'O padrão Observer é o segredo para manter grandes aplicativos sincronizados sem criar dependências circulares.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-03-03-q1',
      type: 'multiple_choice',
      question: 'Qual a principal vantagem do padrão Observer?',
      options: [
        'Aumenta a velocidade do processador.',
        'Desacopla o objeto que gera eventos dos objetos que reagem a eles, facilitando a expansão do sistema.',
        'Deixa o código mais curto.',
        'Substitui o uso de LocalStorage.'
      ],
      correctAnswer: 1,
      explanation: 'Você pode adicionar 100 novos observadores sem precisar mudar uma única linha na classe que emite os eventos.'
    }
  ]
};
