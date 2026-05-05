import { Lesson } from '../../../../types/academy';

export const lesson0405: Lesson = {
  id: 'js-adv-04-05',
  title: 'Web Workers: Multithread no Navegador',
  type: 'mixed',
  estimatedMinutes: 20,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>🧵 Threads Paralelas</h3>
      <p style="font-size: 11px; color: #666;">Processar 1 bilhão de itens sem travar a interface.</p>
      <div id="worker-status" style="padding: 15px; background: #fff7e6; border: 1px solid #ffd591; border-radius: 8px; font-weight: bold;">
        Interface: Pronta (Mova o mouse!)
      </div>
      <div id="worker-res" style="margin-top: 10px; font-family: monospace;">Resultado: -</div>
      <button id="btn-heavy" style="margin-top: 10px; padding: 10px; background: #333; color: white; border: none; cursor: pointer;">Rodar Cálculo Pesado</button>
      <div id="cursor-tracker" style="width: 20px; height: 20px; background: red; border-radius: 50%; position: absolute; pointer-events: none; opacity: 0.5;"></div>
    </div>
  `,
  tips: [
    'O JavaScript é Single-Thread (faz uma coisa por vez). Processos pesados travam a tela.',
    'Web Workers permitem rodar scripts em segundo plano, em uma thread separada.',
    'Eles se comunicam com o script principal via mensagens (postMessage).'
  ],
  content: {
    markdown: `
# 🧵 Web Workers: Destravando a Interface

No **Marina Business CRM**, gerar um relatório de faturamento de 10 anos pode levar 3 segundos. Se rodarmos no script principal, o botão de "Sair" vai parar de funcionar e a tela vai congelar.

---

## 🛠️ Como funciona?
1. Criamos um arquivo separado para o Worker.
2. O script principal envia dados: \`worker.postMessage(dados)\`.
3. O Worker trabalha e devolve o resultado.

---

## 🏗️ Limitações
O Worker **não tem acesso ao DOM**. Ele só processa dados puros (strings, números, objetos). Ele é o "trabalhador de fábrica" que não vê o cliente.

---

## 🚀 Desafio no Editor
Simule a comunicação de um Worker. No seu script, envie um valor para um "Worker simulado". O Worker deve dobrar o valor e devolver. Mostre o progresso no \`#worker-status\` para provar que a bolinha vermelha continua se movendo suavemente enquanto o cálculo ocorre.
`,
    codeExamples: [
      {
        title: 'Paralelismo Simulado',
        language: 'javascript',
        code: `// Simulando um Worker (No real seria um arquivo separado)\nconst simuladorWorker = {\n  onmessage: null,\n  postMessage(data) {\n    // Simula cálculo longo\n    setTimeout(() => {\n      this.onmessage({ data: data * 2 });\n    }, 2000);\n  }\n};\n\n// Interface Principal\ndocument.querySelector("#btn-heavy").addEventListener("click", () => {\n  document.querySelector("#worker-status").innerText = "Processando em 2º plano...";\n  simuladorWorker.postMessage(1000);\n});\n\nsimuladorWorker.onmessage = (e) => {\n  document.querySelector("#worker-status").innerText = "Interface: Pronta!";\n  document.querySelector("#worker-res").innerText = "Resultado: " + e.data;\n};\n\n// Prova de Fluidez: Rastrear mouse\ndocument.addEventListener("mousemove", (e) => {\n  const dot = document.querySelector("#cursor-tracker");\n  dot.style.left = e.pageX + "px";\n  dot.style.top = e.pageY + "px";\n});`,
        output: '(O cálculo roda sem travar o movimento da bolinha vermelha)',
        explanation: 'Web Workers são a única forma de garantir que aplicações web complexas continuem responsivas durante tarefas pesadas.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-04-05-q1',
      type: 'multiple_choice',
      question: 'O que um Web Worker NÃO pode fazer?',
      options: [
        'Fazer cálculos matemáticos.',
        'Acessar o DOM (document.querySelector) diretamente.',
        'Enviar mensagens para o script principal.',
        'Processar arrays gigantes.'
      ],
      correctAnswer: 1,
      explanation: 'Workers são isolados da interface; eles servem apenas para processar dados.'
    }
  ]
};
