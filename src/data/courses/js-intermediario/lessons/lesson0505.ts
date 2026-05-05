import { Lesson } from '../../../../types/academy';
import { lesson0501 } from './lesson0501';

export const lesson0505: Lesson = {
  id: 'js-int-05-05',
  title: 'Projeto 5/5: Câmbio em Tempo Real (Fetch)',
  type: 'mixed',
  estimatedMinutes: 25,
  previewHtml: lesson0501.previewHtml + `
    <div id="exchange-container" style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 12px; display: none; text-align: center;">
      <p style="font-size: 12px; margin: 0; color: #1565c0;">Equivalente em Dólar</p>
      <h2 id="usd-value" style="margin: 5px 0; color: #1565c0;">$ 0.00</h2>
    </div>
    <button id="btn-convert" style="margin-top: 10px; background: #1565c0; font-size: 11px; padding: 8px;">Ver Saldo em Dólar</button>
  `,
  tips: [
    'Aproveite a API da AwesomeAPI que usamos no Módulo 3.',
    'Divida o seu saldo total pelo valor do "bid" do dólar.',
    'Mostre ou esconda o container de câmbio usando .style.display = "block".'
  ],
  content: {
    markdown: `
# 🌎 Toque Final: Câmbio Internacional

Para fechar o curso com chave de ouro, vamos adicionar um recurso premium: um conversor automático que mostra quanto seu saldo vale em Dólar Americano (USD) buscando a cotação em tempo real!

---

## 🛠️ O Roteiro
1. Escutar o clique no novo botão \`#btn-convert\`.
2. Fazer o \`fetch\` na API de moedas.
3. Pegar o seu saldo atual (que você já calculou) e dividir pela cotação.
4. Exibir o resultado com \`$\` na tela.

---

## 🏗️ Async/Await no Projeto
\`\`\`javascript
const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
const data = await response.json();
const cotacao = data.USDBRL.bid;
\`\`\`

---

## 🚀 Desafio no Editor
Implemente a função de conversão. Quando clicada, ela deve buscar o valor do dólar e mostrar o resultado na \`h2#usd-value\`. Parabéns! Você acaba de finalizar o seu primeiro aplicativo real e funcional!
`,
    codeExamples: [
      {
        title: 'Conversor Inteligente',
        language: 'javascript',
        code: `async function convertToUSD() {\n  const btn = document.querySelector("#btn-convert");\n  const display = document.querySelector("#exchange-container");\n  \n  btn.innerText = "Buscando cotação...";\n  \n  try {\n    const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");\n    const data = await response.json();\n    const bid = parseFloat(data.USDBRL.bid);\n    \n    // Pega o saldo que está na tela (removendo o "R$ ")\n    const currentBalance = parseFloat(document.querySelector("#balance").innerText.replace("R$ ", ""));\n    \n    const usdValue = (currentBalance / bid).toFixed(2);\n    \n    document.querySelector("#usd-value").innerText = "$ " + usdValue;\n    display.style.display = "block";\n    btn.innerText = "Câmbio Atualizado!";\n  } catch (err) {\n    alert("Erro ao buscar cotação.");\n    btn.innerText = "Tentar Novamente";\n  }\n}\n\ndocument.querySelector("#btn-convert").addEventListener("click", convertToUSD);`,
        output: '(Saldo em dólar aparece no Preview)',
        explanation: 'Esta funcionalidade integra programação assíncrona, manipulação de DOM e lógica matemática de uma só vez.'
      }
    ]
  },
  exercises: [
    {
      id: 'js-int-05-05-q1',
      type: 'multiple_choice',
      question: 'Parabéns por chegar até aqui! Qual o próximo passo recomendado para sua carreira?',
      options: [
        'Parar de estudar.',
        'Dominar JavaScript Avançado (Arquitetura, OOP e ES6+) para criar sistemas ainda maiores.',
        'Apenas usar o que já sabe.',
        'Deletar o VS Code.'
      ],
      correctAnswer: 1,
      explanation: 'O conhecimento nunca para. Agora você tem a base, o próximo nível é a maestria técnica!'
    }
  ]
};
