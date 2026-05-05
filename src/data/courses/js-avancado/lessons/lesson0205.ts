import { Lesson } from '../../../../types/academy';

export const lesson0205: Lesson = {
  id: 'js-adv-02-05',
  title: 'Composição vs Herança: O Design Moderno',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>🛠️ Construtor de Robôs</h3>
      <p style="font-size: 12px; color: #888;">Combine habilidades sem criar heranças gigantes.</p>
      <div id="robot-status" style="padding: 15px; background: #eee; border-radius: 8px; font-family: monospace;">
        Aguardando montagem...
      </div>
      <div style="margin-top: 15px; display: flex; gap: 10px;">
        <button id="btn-volar" style="padding: 8px; background: #3178C6; color: white; border: none; cursor: pointer;">Add Voo</button>
        <button id="btn-falar" style="padding: 8px; background: #27c93f; color: white; border: none; cursor: pointer;">Add Fala</button>
      </div>
    </div>
  `,
  tips: [
    'Herança é "é um" (Um Carro É UM Veículo). Composição é "tem um" (Um Carro TEM UM Motor).',
    'Muitos níveis de herança tornam o código impossível de mudar.',
    'No JS moderno, preferimos compor objetos misturando funcionalidades (Mixins).'
  ],
  content: {
    markdown: `
# 🧩 Composição: Montando o Sistema como LEGO

Muitos programadores iniciantes tentam herdar tudo (\`class Cachorro extends Animal extends SerVivo...\`). No nível avançado, evitamos isso. Usamos a **Composição**.

---

## 🛠️ O Problema da Herança
Se você tem uma classe \`Voador\` e uma \`Nadador\`, como criar um pato que faz os dois? O JS não permite herança múltipla.

---

## 🏗️ A Solução: Mixins (Composição)
Criamos funções que "injetam" comportamentos em qualquer classe.

\`\`\`javascript
const voadorMixin = (obj) => ({
  voar: () => console.log("Voando...")
});

class Animal {}
Object.assign(Animal.prototype, voadorMixin({}));
\`\`\`

---

## 🚀 Desafio no Editor
Crie dois objetos de funcionalidade: \`comportamentoFalar\` e \`comportamentoVoar\`. Crie uma classe \`Robo\` e use \`Object.assign\` para dar a ele as habilidades que o usuário escolher nos botões. Mostre o que o robô sabe fazer na tela.
`,
    codeExamples: [
      {
        title: 'Habilidades Modulares',
        language: 'javascript',
        code: `const falante = (name) => ({ falar: () => \`Olá, eu sou o \${name}!\` });\nconst voador = () => ({ voar: () => "Estou voando alto!" });\n\nclass Robo {\n  constructor(nome) {\n    this.nome = nome;\n    this.habilidades = [];\n  }\n}\n\nconst meuRobo = new Robo("MarinaBot");\n\ndocument.querySelector("#btn-volar").addEventListener("click", () => {\n  Object.assign(meuRobo, voador());\n  meuRobo.habilidades.push("Voo");\n  updateUI();\n});\n\ndocument.querySelector("#btn-falar").addEventListener("click", () => {\n  Object.assign(meuRobo, falante(meuRobo.nome));\n  meuRobo.habilidades.push("Fala");\n  updateUI();\n});\n\nfunction updateUI() {\n  const status = document.querySelector("#robot-status");\n  status.innerHTML = \`<b>\${meuRobo.nome}</b><br>Habilidades: \${meuRobo.habilidades.join(", ")}<br>\`;\n  if (meuRobo.falar) status.innerHTML += meuRobo.falar();\n}`,
        output: '(Robô ganha poderes dinamicamente)',
        explanation: 'A composição permite adicionar funcionalidades sem criar uma hierarquia rígida de classes.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-02-05-q1',
      type: 'multiple_choice',
      question: 'Por que a Composição é geralmente preferida em relação à Herança profunda?',
      options: [
        'Porque é mais rápida para o navegador.',
        'Porque torna o código mais flexível e fácil de manter, permitindo misturar funcionalidades sem hierarquias complexas.',
        'Porque herança é proibida no JS.',
        'Não é preferida, herança é sempre melhor.'
      ],
      correctAnswer: 1,
      explanation: 'A flexibilidade é a maior vantagem da composição no design de software moderno.'
    }
  ]
};
