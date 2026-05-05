import { Lesson } from '../../../../types/academy';

export const lesson0403: Lesson = {
  id: 'js-adv-04-03',
  title: 'Debounce e Throttle: Otimizando Eventos',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>🔍 Busca com Debounce</h3>
      <input type="text" id="search-input" placeholder="Digite para buscar..." style="width: 100%; padding: 10px; border-radius: 4px; border: 1px solid #ccc;">
      <div id="search-log" style="margin-top: 15px; background: #f9f9f9; padding: 10px; border-radius: 4px; font-family: monospace; font-size: 11px;">
        Requisições feitas: 0
      </div>
      <div id="search-res" style="color: #27c93f; font-weight: bold; margin-top: 5px;"></div>
    </div>
  `,
  tips: [
    'Debounce: Espera o usuário parar de digitar para rodar a função. Ideal para campos de busca.',
    'Throttle: Garante que a função rode no máximo UMA vez a cada X milissegundos. Ideal para scroll ou redimensionamento de janela.',
    'Ambos evitam que o navegador trave ao processar eventos repetitivos demais.'
  ],
  content: {
    markdown: `
# 🚦 Debounce e Throttle: Controle de Tráfego

Imagine que o usuário digita "Monitor" na busca do seu CRM. Sem controle, o JS faria 7 requisições ao banco de dados (M, Mo, Mon...). Isso é péssimo para a performance.

---

## 🛠️ Debounce
"Espere eu parar de digitar antes de agir".
\`\`\`javascript
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
\`\`\`

---

## 🏗️ Throttle
"Não importa quantas vezes você clique, eu só rodo a cada 1 segundo".

---

## 🚀 Desafio no Editor
Implemente o \`debounce\` para o campo de busca no Preview. Faça com que a mensagem "Buscando..." apareça no \`#search-res\` apenas 500ms DEPOIS que o usuário parou de digitar.
`,
    codeExamples: [
      {
        title: 'Filtro Inteligente',
        language: 'javascript',
        code: `const input = document.querySelector("#search-input");\nconst log = document.querySelector("#search-log");\nconst res = document.querySelector("#search-res");\n\nlet reqCount = 0;\n\nconst buscar = (val) => {\n  reqCount++;\n  log.innerText = "Requisições feitas: " + reqCount;\n  res.innerText = "Resultado para: " + val;\n};\n\nconst debounce = (fn, delay) => {\n  let timer;\n  return (val) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(val), delay);\n  };\n};\n\nconst buscaOtimizada = debounce(buscar, 500);\n\ninput.addEventListener("input", (e) => {\n  res.innerText = "Digitando...";\n  buscaOtimizada(e.target.value);\n});`,
        output: '(O contador de requisições só sobe após a pausa)',
        explanation: 'O debounce é uma das técnicas mais importantes para criar interfaces fluidas e economizar recursos do servidor.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-04-03-q1',
      type: 'multiple_choice',
      question: 'Qual a principal diferença entre Debounce e Throttle?',
      options: [
        'Debounce é mais rápido.',
        'Debounce espera o fim de uma série de eventos para agir; Throttle garante uma execução constante em intervalos de tempo.',
        'Throttle é usado apenas para cores.',
        'Não há diferença.'
      ],
      correctAnswer: 1,
      explanation: 'Escolher entre um ou outro depende se você quer reagir ao FINAL de uma ação ou DURANTE uma ação constante.'
    }
  ]
};
