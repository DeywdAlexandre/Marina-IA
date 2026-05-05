import { Lesson } from '../../../../types/academy';

export const lesson0201: Lesson = {
  id: 'js-adv-02-01',
  title: 'Protótipos: O Segredo da Herança no JS',
  type: 'mixed',
  estimatedMinutes: 15,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>🧪 Inspeção de Protótipo</h3>
      <div id="proto-log" style="background: #f4f4f4; padding: 15px; border-radius: 8px; font-family: monospace; font-size: 12px; line-height: 1.6;">
        > Aguardando inspeção...
      </div>
      <button id="btn-inspect" style="margin-top: 10px; padding: 10px; background: #333; color: white; border: none; border-radius: 4px; cursor: pointer;">Inspecionar Herança</button>
    </div>
  `,
  tips: [
    'Quase tudo no JavaScript é um objeto e tem um protótipo (__proto__).',
    'Quando você pede uma propriedade, o JS procura no objeto. Se não achar, ele sobe na "Cadeia de Protótipos".',
    'Entender protótipos é entender como o JS economiza memória.'
  ],
  content: {
    markdown: `
# 🧬 Protótipos: A "Mãe" de todos os Objetos

Antes das classes (\`class\`), o JavaScript já fazia herança usando **Protótipos**. No nível avançado, você precisa saber o que acontece "por baixo dos panos".

---

## 🛠️ A Cadeia de Protótipos
Quando você cria uma array, ela tem acesso ao método \`.map()\` não porque ele está dentro dela, mas porque está no **protótipo** da Array.

\`\`\`javascript
const animal = { comer: true };
const gato = Object.create(animal);
console.log(gato.comer); // true (veio do protótipo)
\`\`\`

---

## 🏗️ Por que isso importa?
Diferente de outras linguagens, o JS não "copia" os métodos para cada novo objeto. Ele aponta para um protótipo comum, economizando memória.

---

## 🚀 Desafio no Editor
Crie um objeto pai chamado \`veiculo\` com a propriedade \`rodas: 4\`. Use \`Object.create\` para criar um \`carro\` baseado nele. No script, mostre no console o \`Object.getPrototypeOf(carro)\` para ver o pai dele.
`,
    codeExamples: [
      {
        title: 'Herança Prototipal',
        language: 'javascript',
        code: `const maquina = { ligada: true, emitirSom: () => "Vrumm!" };\nconst robo = Object.create(maquina);\nrobo.nome = "R2D2";\n\nconst log = document.querySelector("#proto-log");\nlog.innerHTML = \`\n  <b>Objeto Robo:</b> \${robo.nome}<br>\n  <b>Herança (maquina.ligada):</b> \${robo.ligada}<br>\n  <b>Som herdado:</b> \${robo.emitirSom()}<br>\n  <b>Protótipo Real:</b> \${Object.getPrototypeOf(robo) === maquina}\n\`;`,
        output: '(Inspeção exibida no Preview)',
        explanation: 'Object.create() é a forma mais pura de criar herança sem usar a sintaxe de classes.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-02-01-q1',
      type: 'multiple_choice',
      question: 'O que acontece se você mudar uma propriedade no protótipo enquanto vários objetos estão herdando dele?',
      options: [
        'Nada muda para os objetos já criados.',
        'Todos os objetos que herdam dele veem a mudança instantaneamente.',
        'O JavaScript dá um erro.',
        'Os objetos são deletados.'
      ],
      correctAnswer: 1,
      explanation: 'Como os objetos "apontam" para o protótipo, qualquer mudança na fonte reflete em todos os herdeiros.'
    }
  ]
};
