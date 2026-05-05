import { Lesson } from '../../../../types/academy';

export const lesson0203: Lesson = {
  id: 'js-int-02-03',
  title: 'Eventos de Teclado (Input e Atallhos)',
  type: 'mixed',
  estimatedMinutes: 15,
  tips: [
    '"keydown" dispara assim que você aperta a tecla.',
    '"keyup" dispara quando você solta a tecla.',
    '"input" é o melhor para capturar mudanças em campos de texto em tempo real.'
  ],
  content: {
    markdown: `
# ⌨️ Eventos de Teclado

Saber o que o usuário digita é essencial para buscas instantâneas, atalhos de teclado e validação de formulários.

---

## 🛠️ Tipos de Eventos
- **input**: Dispara sempre que o valor de um campo muda (ideal para buscas).
- **keydown**: Detecta qual tecla foi pressionada (ideal para atalhos como Enter ou Esc).

\`\`\`javascript
let campoBusca = document.querySelector("#busca");

campoBusca.addEventListener("input", (e) => {
  console.log("Digitando: " + e.target.value);
});
\`\`\`

---

## 🏗️ Detectando Teclas Específicas
\`\`\`javascript
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Você apertou Enter! Enviando dados...");
  }
});
\`\`\`

---

## 🚀 Desafio no Editor
Crie um campo de texto imaginário (\`#senha\`). Adicione um evento de \`input\` que mostre no console quantos caracteres a senha tem atualmente (\`.length\`).
`,
    codeExamples: [
      {
        title: 'Atalho de Limpeza',
        language: 'javascript',
        code: `document.addEventListener("keydown", (e) => {\n  if (e.key === "Escape") {\n    console.log("Limpando tudo...");\n    // Lógica para fechar modais ou limpar campos\n  }\n});`,
        output: '(Aguardando tecla Esc)',
        explanation: 'Eventos globais no document permitem criar atalhos de produtividade em todo o site.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-02-03-q1',
      type: 'multiple_choice',
      question: 'Qual a diferença entre usar "keydown" e "input" em um campo de texto?',
      options: [
        'Não há diferença.',
        '"keydown" foca na tecla física pressionada, enquanto "input" foca na mudança do valor do campo.',
        '"input" só funciona para números.',
        '"keydown" é mais moderno.'
      ],
      correctAnswer: 1,
      explanation: 'Para capturar o texto final digitado (incluindo colagens de texto), o "input" é sempre mais confiável.'
    }
  ]
};
