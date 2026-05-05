import { Lesson } from '../../../../types/academy';

export const lesson0402: Lesson = {
  id: 'js-adv-04-02',
  title: 'Memoization: Cache de Alta Performance',
  type: 'mixed',
  estimatedMinutes: 15,
  previewHtml: `
    <div style="padding: 20px;">
      <h3>🧠 Memoization (Cache)</h3>
      <p style="font-size: 11px; color: #888;">Cálculos pesados demoram. O cache é instantâneo.</p>
      <div id="memo-log" style="background: #333; color: #fff; padding: 15px; border-radius: 8px; font-family: monospace; font-size: 11px; min-height: 80px;">
        > Aguardando ação...
      </div>
      <button id="btn-calc" style="margin-top: 15px; padding: 10px; background: #3178C6; color: white; border: none; cursor: pointer;">Calcular (Lento -> Rápido)</button>
    </div>
  `,
  tips: [
    'Memoization é salvar o resultado de uma função baseado nos seus argumentos.',
    'Se você chamar a função com os mesmos dados, ela retorna o valor do cache em vez de calcular de novo.',
    'Útil para processamento de dados pesados ou cálculos financeiros repetitivos.'
  ],
  content: {
    markdown: `
# 🧠 Memoization: Não calcule duas vezes!

No **Marina Business CRM**, se tivermos que calcular o faturamento anual de 5000 clientes, isso pode ser lento. Se o dado não mudou, por que calcular de novo?

---

## 🛠️ Como funciona?
Criamos um objeto para servir de cache.

\`\`\`javascript
const cache = {};
function somaPesada(n) {
  if (n in cache) return cache[n]; // Retorna do cache!
  
  // Faz o cálculo...
  const res = n + 10; 
  cache[n] = res; // Salva no cache
  return res;
}
\`\`\`

---

## 🏗️ Usando Map para Cache
O \`Map\` é ainda melhor para caches porque aceita qualquer tipo de chave.

---

## 🚀 Desafio no Editor
Crie uma função que simula um atraso (use um loop grande) para calcular o fatorial de um número. Implemente um sistema de cache (Memoization) e veja no console a diferença de tempo entre a primeira e a segunda chamada com o mesmo número.
`,
    codeExamples: [
      {
        title: 'Fábrica de Cache',
        language: 'javascript',
        code: `const memoize = (fn) => {\n  const cache = new Map();\n  return (...args) => {\n    const chave = JSON.stringify(args);\n    if (cache.has(chave)) return cache.get(chave);\n    \n    const res = fn(...args);\n    cache.set(chave, res);\n    return res;\n  };\n};\n\nconst calculoLento = (n) => {\n  let i = 0; while(i < 100000000) i++; // Simula peso\n  return n * 2;\n};\n\nconst otimizado = memoize(calculoLento);\n\ndocument.querySelector("#btn-calc").addEventListener("click", () => {\n  const t1 = performance.now();\n  otimizado(10);\n  const t2 = performance.now();\n  document.querySelector("#memo-log").innerHTML += \`<br>> Tempo: \${(t2 - t1).toFixed(4)}ms\`;\n});`,
        output: '(O tempo cai drasticamente na segunda vez)',
        explanation: 'A memoization transforma funções de O(n) em O(1) para chamadas repetidas, o que é vital para performance de UI.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-adv-04-02-q1',
      type: 'multiple_choice',
      question: 'Qual o requisito para que uma função possa ser "Memoizada" com segurança?',
      options: [
        'Ela deve ser uma Função Pura (mesma entrada sempre gera a mesma saída e não tem efeitos colaterais).',
        'Ela deve ser lenta.',
        'Ela deve usar LocalStorage.',
        'Ela deve estar dentro de uma classe.'
      ],
      correctAnswer: 1,
      explanation: 'Se a função depende de dados externos que mudam (como a hora atual), o cache retornaria um valor velho e errado.'
    }
  ]
};
